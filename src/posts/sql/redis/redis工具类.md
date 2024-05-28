---
title: redis工具类
date: 2024-05-28
icon: snowman
category:
  - redis
tag:
  - redis的使用
order: 315
---

不用再找了，redis最全的工具类就在这里

<!-- more -->

## 一、工具类代码

``` java
import cn.hutool.core.util.BooleanUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import org.apache.logging.log4j.util.Strings;
import org.example.demoproject.constant.CacheConstants;
import org.example.demoproject.entity.RedisData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

/**
 * Redis工具类
 */
@Component
public class RedisUtils {

  // 线程池
  private static final ExecutorService CACHE_REBUILD_EXECUTOR = Executors.newFixedThreadPool(10);

  @Autowired
  private StringRedisTemplate stringRedisTemplate;

  /**
   * 添加缓存前缀
   *
   * @param key
   * @return
   */
  private String addPrefix(String key) {
      return CacheConstants.PRO_NAME_PREFIX + key;
  }

  /**
   * 判断key是否存在
   *
   * @param key
   * @return
   */
  public Boolean hasKey(String key) {
      return stringRedisTemplate.hasKey(addPrefix(key));
  }

  /**
   * 以字符串格式缓存
   * 缓存对象的话，缓存json格式
   *
   * @param key
   * @param value
   * @param time
   * @param unit
   */
  public void setCacheObject(String key, Object value, Long time, TimeUnit unit) {
      stringRedisTemplate.opsForValue().set(addPrefix(key), JSONUtil.toJsonStr(value), time, unit);
  }

  /**
   * 缓存逻辑过期
   * 对象以json格式缓存
   *
   * @param key   缓存键，如果有id的话，需要传参时拼接上id
   * @param value
   * @param time
   * @param unit
   */
  public void setWithLogicalExpire(String key, Object value, Long time, TimeUnit unit) {

      RedisData redisData = new RedisData();
      redisData.setData(value);
      redisData.setExpireTime(LocalDateTime.now().plusSeconds(unit.toSeconds(time)));

      stringRedisTemplate.opsForValue().set(addPrefix(key), JSONUtil.toJsonStr(redisData));
  }

  /**
   * 获取缓存
   * 如果获取的是对象的缓存，获取的是json格式
   *
   * @param key
   * @return
   */
  public String getCacheString(String key) {
      return stringRedisTemplate.opsForValue().get(addPrefix(key));
  }

  /**
   * 删除缓存
   *
   * @param key
   */
  public void delete(String key) {

      stringRedisTemplate.delete(addPrefix(key));
  }

  /**
   * 尝试获取锁
   *
   * @param key
   * @return
   */
  public boolean tryLock(String key) {

      Boolean tryLock = stringRedisTemplate.opsForValue().setIfAbsent(addPrefix(key), "1");
      return BooleanUtil.isTrue(tryLock);
  }

  /**
   * 释放锁
   *
   * @param key
   */
  public void unlock(String key) {
      this.delete(key);
  }

  /**
   * 缓存穿透 - 缓存空值
   *
   * @param keyPrefix  缓存前缀
   * @param id
   * @param type
   * @param dbFallback
   * @param time
   * @param unit
   * @param <R>
   * @param <ID>
   * @return
   */
  public <R, ID> R queryWithPassThrough(String keyPrefix, ID id, Class<R> type,
                                        Function<ID, R> dbFallback, Long time, TimeUnit unit) {

      // 1、当id为空时，直接返回null
      if (ObjectUtil.isEmpty(id)) {
          return null;
      }

      String key = keyPrefix + id;

      // 2、判断缓存是否存在
      String json = this.getCacheString(key);

      // 3、存在，直接返回
      if (StrUtil.isNotBlank(json)) {
          return JSONUtil.toBean(json, type);
      }

      // 存在，但存储的是空字符串的情况
      if (Strings.EMPTY.equals(json)) {
          return null;
      }

      // 4、不存在，根据id查询数据库
      R r = dbFallback.apply(id);

      // 5、把查询数据库的结果，放入缓存
      this.setCacheObject(key, r == null ? Strings.EMPTY : JSONUtil.toJsonStr(r), time, unit);

      return r;

  }

  /**
   * 缓存穿透 - 互斥锁
   *
   * @param keyPrefix  缓存前缀
   * @param lockPrefix 锁前缀
   * @param id
   * @param type
   * @param dbFallback
   * @param time
   * @param unit
   * @param <R>
   * @param <ID>
   * @return
   */
  public <R, ID> R queryWithMutex(String keyPrefix, String lockPrefix, ID id, Class<R> type,
                                  Function<ID, R> dbFallback, Long time, TimeUnit unit) {

      String dataKey = keyPrefix + id;
      String lockKey = lockPrefix + id;

      // 1、当id为空时，直接返回null
      if (ObjectUtil.isEmpty(id)) {
          return null;
      }

      // 2、判断缓存是否存在
      String json = this.getCacheString(dataKey);

      // 3、存在，直接返回
      if (StrUtil.isNotBlank(json)) {
          return JSONUtil.toBean(json, type);
      }
      // 存在，但存储的是空字符串的情况
      if (Strings.EMPTY.equals(json)) {
          return null;
      }

      // 4、不存在，根据id查询数据库
      boolean tryLock = false;

      R r = null;
      try {
          // 5、获取互斥锁
          do {
              tryLock = this.tryLock(lockKey);
              if (!tryLock) {
                  // 暂停毫秒
                  Thread.sleep(50);
              }
          } while (!tryLock);

          // 6、获取锁成功，根据id查询数据库
          r = dbFallback.apply(id);

          // 7、根据数据库查询结果，放入缓存
          // 当数据为空时，缓存空值
          // 否则，缓存数据
          this.setCacheObject(dataKey, r == null ? Strings.EMPTY : JSONUtil.toJsonStr(r), time, unit);
      } catch (Exception e) {
          throw new RuntimeException(e);
      } finally {
          // 8、释放互斥锁
          this.unlock(lockKey);
      }

      return r;
  }

  /**
   * 缓存击穿 - 逻辑过期
   * 需要进行缓存预热
   *
   * @param keyPrefix  缓存前缀
   * @param lockPrefix 锁前缀
   * @param id
   * @param type
   * @param dbFallback
   * @param time
   * @param unit
   * @param <R>
   * @param <ID>
   * @return
   */
  public <R, ID> R queryWithLogicalExpire(String keyPrefix, String lockPrefix, ID id, Class<R> type,
                                          Function<ID, R> dbFallback, Long time, TimeUnit unit) {

      // 1、当id为空时，直接返回null
      if (ObjectUtil.isEmpty(id)) {
          return null;
      }

      String dataKey = keyPrefix + id;

      // 2、判断缓存是否存在
      String json = this.getCacheString(dataKey);

      // 3、不存在，直接返回null值
      if (StrUtil.isBlank(json)) {
          return null;
      }

      // 4、命中，需要判断是否过期
      RedisData redisData = JSONUtil.toBean(json, RedisData.class);
      R r = JSONUtil.toBean((JSONObject) redisData.getData(), type);

      // 5、未过期，直接返回数据
      LocalDateTime expireTime = redisData.getExpireTime();
      if (expireTime.isAfter(LocalDateTime.now())) {
          return r;
      }

      // 6、过期，需要缓存重建
      String lockKey = lockPrefix + id;
      boolean tryLock = this.tryLock(lockKey);

      // 7、获取锁成功，开启独立线程，实现缓存重建
      if (tryLock) {
          CACHE_REBUILD_EXECUTOR.submit(() -> {
              try {
                  // 7.1、查询数据库
                  R dbR = dbFallback.apply(id);
                  // 7.2、重建缓存
                  this.setWithLogicalExpire(dataKey, dbR, time, unit);
              } finally {
                  this.unlock(lockKey);
              }
          });
      }

      return r;
  }

}
```

## 二、RedisData

``` java
@Data
public class RedisData {

  private LocalDateTime expireTime;

  private Object data;

}

```

## 三、缓存击穿、缓存穿透工具类的使用

以缓存击穿的解决方案逻辑过期为例

缓存预热部分代码如下

```java
@Override
public void buildCache() {
  List<ProSchool> list = this.list();
  list.forEach(item -> {
      redisUtils.setWithLogicalExpire(CacheConstants.DATA_SCHOOL_PREFIX + item.getId(),
        item, CacheConstants.DATA_EXPIRE_TTL, TimeUnit.SECONDS);
  });
}
```

调用工具类部分代码如下
```java
@Resource
private RedisUtils redisUtils;

/**
 * 缓存击穿 - 逻辑过期
 */
@Override
public ProSchool selectDataById(Long id) {

  return redisUtils.queryWithLogicalExpire(CacheConstants.DATA_SCHOOL_PREFIX, CacheConstants.LOCK_SCHOOL_PREFIX,
          id, ProSchool.class, this::getById, CacheConstants.DATA_EXPIRE_TTL, TimeUnit.MINUTES);

}
```

