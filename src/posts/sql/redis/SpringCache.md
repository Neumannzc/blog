---
title: Spring Cache
date: 2025-02-18
icon: dragon
category:
  - redis
tag:
  - redis的使用
order: 800
---

<!-- more -->

## ​1 为什么要用 Redis

 - ​高性能：基于内存的数据结构，支持高并发读写（单线程模型）。

 - ​持久化：支持 RDB/AOF 持久化机制，避免数据丢失。

 - ​分布式支持：天然支持分布式环境，适合微服务架构。

 - ​丰富的数据结构：支持 String、Hash、List、Set 等数据类型，满足复杂业务场景。

## ​2 为什么要用 Spring Cache

- ​简化缓存逻辑：Spring Cache 提供统一的注解（如 @Cacheable, @CacheEvict），无需手动管理缓存操作。

- ​支持多缓存实现：可无缝集成 Redis、Ehcache、Caffeine 等缓存工具，通过配置切换底层缓存。

- ​声明式编程：开发者只需关注业务逻辑，无需关心缓存的底层实现细节。

## 3 ​Spring Cache + Redis 的典型使用场景

- ​高频数据访问：如用户信息、商品详情等静态数据的缓存。

- ​热点数据隔离：秒杀场景下的库存、优惠券等热点资源防击穿。

- ​分布式锁：利用 Redis 的原子操作实现分布式锁（如 Redisson）。

- ​会话共享：在无状态服务中集中管理用户 Session。

## 4 ​Spring Cache + Redis 的使用

### 4.​1 添加依赖

```xml
<!-- Spring Boot Starter Cache -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<!-- Spring Boot Starter Data Redis -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

### 4.​2 启用缓存支持

- 在 Spring Boot 主类上添加 @EnableCaching 注解：

```java
@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

### 4.​3 配置 Redis
- 在 application.properties 中配置 Redis 连接：

```properties
spring.redis.host=localhost
spring.redis.port=6379
spring.redis.password=
spring.redis.database=0
spring.cache.type=redis # 明确指定使用 Redis 作为缓存
```

### 4.​4 使用缓存注解

#### 4.4.1 查询缓存（@Cacheable）​

用于标记方法的返回值应该被缓存。当方法被调用时，Spring Cache 会首先检查缓存中是否存在对应的数据，如果存在则直接返回缓存数据，否则执行方法并将结果缓存起来。

```java
@Service
public class UserService {

    @Cacheable(value = "users", key = "#id")
    public User getUserById(Long id) {
        // 模拟从数据库查询
        return userRepository.findById(id).orElse(null);
    }
}
```
- value：缓存名称空间（如 "users"）。
- key：缓存键，可以使用 SpEL 表达式

- tips: 当参数id可能为空时，需要添加为空的默认值 `@Cacheable(value = "users", key = "#id ?: 'defaultKey'")`

#### 4.4.2 更新缓存（@CachePut）​

用于更新缓存，无论缓存是否存在，都会执行方法并将结果存入缓存。常用于更新操作后刷新缓存。

```java
@CachePut(value = "users", key = "#user.id")
public User updateUser(User user) {
    return userRepository.save(user);
}
```
- 直接更新缓存，不依赖旧值。

#### 4.4.3 删除缓存（@CacheEvict）​

用于清除缓存，常用于删除操作后移除对应的缓存数据。

```java
@CacheEvict(value = "users", key = "#id")
public void deleteUser(Long id) {
    userRepository.deleteById(id);
}
```

#### 4.4.4 批量操作

用于组合多个缓存操作，可以在一个方法上同时使用 `@Cacheable`、`@CachePut` 和 `@CacheEvict`

```java
@Caching(
    cacheable = {@Cacheable("users")},
    evict = {@CacheEvict("logs")}
)
public User createUser(User user) {
    // 业务逻辑...
}
```

## ​5 自定义缓存 Key 和 TTL

### ​5.1 ​自定义 Key 生成器
- 实现 KeyGenerator 接口：

```java
@Component
public class CustomKeyGenerator implements KeyGenerator {

    @Override
    public Object generate(Object target, Method method, Object... params) {
        StringBuilder key = new StringBuilder();
        key.append(target.getClass().getSimpleName()).append(":");
        for (Object param : params) {
            key.append(param.toString());
        }
        return key.toString();
    }
}
```

### ​5.2 在缓存注解中引用：

```java
@Cacheable(value = "users", keyGenerator = "customKeyGenerator")
public User getUserByName(String name) { ... }
```

### ​5.3 ​设置缓存过期时间（TTL）​

``` java
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableCaching
public class CacheConfig {

    @Bean
    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
        // 明确配置 key 和 value 的序列化方式
        RedisSerializationContext.SerializationPair<String> keyPair =
                RedisSerializationContext.SerializationPair.fromSerializer(new StringRedisSerializer());
        RedisSerializationContext.SerializationPair<Object> valuePair =
                RedisSerializationContext.SerializationPair.fromSerializer(new GenericJackson2JsonRedisSerializer());

        // 默认缓存配置，设置默认过期时间为10分钟
        RedisCacheConfiguration defaultCacheConfig = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofMinutes(10))
                .disableCachingNullValues() // 不缓存 null 值
                .serializeKeysWith(keyPair)
                .serializeValuesWith(valuePair);

        // 为特定缓存名称设置不同的过期时间
        Map<String, RedisCacheConfiguration> cacheConfigurations = new HashMap<>();

        cacheConfigurations.put("users", defaultCacheConfig.entryTtl(Duration.ofMinutes(30))); // 用户缓存30分钟
        cacheConfigurations.put("products", defaultCacheConfig.entryTtl(Duration.ofHours(1))); // 产品缓存1小时

        return RedisCacheManager.builder(redisConnectionFactory)
                .cacheDefaults(defaultCacheConfig) // 设置默认配置
                .withInitialCacheConfigurations(cacheConfigurations) // 为特定缓存设置配置
                .build();
    }
}
```
- tips：需要明确明确配置 key 和 value 的序列化方式，否则会出现数据存储到redis中，但是在可视化工具中无法找到的问题

## ​6 实现原理

- ​Spring Cache 抽象层
  - ​**CacheManager**：管理所有缓存实例（如 RedisCacheManager）。
  - ​**Cache**：定义缓存操作（如 get, put, evict）。
  - ​**CacheResolver**：动态解析缓存名称和 Key。

- ​Redis 缓存实现
  - ​**RedisTemplate**：Spring Data Redis 提供的模板类，封装了 Redis 原生操作。
  - ​**RedisCacheManager**：自动将 Spring Cache 注解映射为 Redis 命令。

## ​7 注意事项

### 7.1 缓存穿透
- ​问题：查询不存在的数据导致大量请求打到数据库。
- ​解决方案：
  - 使用布隆过滤器（Bloom Filter）过滤无效 Key。
  - 在缓存中存储空值（@Cacheable 默认返回 null）。

### 7.2 缓存雪崩
- ​问题：缓存 Key 过期时间集中失效，导致瞬时流量冲击。
- ​解决方案：
  - 随机化缓存 TTL（如 1-5 秒随机）。
  - 使用 Redis 的 SCAN 代替 KEYS 命令遍历缓存。

### 7.3 缓存击穿
- ​问题：热点 Key 被恶意用户反复请求，导致数据库压力过大。
- ​解决方案：
  - 使用互斥锁（Redisson 的 RLock）。
  - 本地缓存 + 二次验证。

## ​8 示例场景：商品库存服务
- ​业务需求
  - 用户下单时减少商品库存，需保证库存扣减的原子性。

​实现代码
```java
@Service
public class StockService {

    @Autowired
    private RedisTemplate<String, Integer> redisTemplate;

    @Cacheable(value = "stocks", key = "#productId")
    public int getStock(Long productId) {
        return redisTemplate.opsForValue().get(productId, Integer.class) ?: 0;
    }

    @Transactional
    public boolean decreaseStock(Long productId, int amount) {
        // 使用 Lua 脚本保证原子性
        String script = "if redis.call('get', KEYS[1]) >= ARGV[1] then " +
                       "   redis.call('decrby', KEYS[1], ARGV[1]) " +
                       "   return 1 " +
                       "else " +
                       "   return 0 " +
                       "end";
        Long result = redisTemplate.execute(
            (RedisCallback<Long>) connection -> {
                DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>(script);
                redisScript.setArgs(Arrays.asList(amount));
                return redisScript.execute(connection, Arrays.asList(productId));
            }
        );
        return result != null && result == 1;
    }
}
```

- ​关键点：通过 Redis 的 Lua 脚本保证库存扣减的原子性，避免超卖。

## 9 总结
  - ​Spring Cache：简化缓存操作，与业务解耦。
  - ​Redis：提供高性能、高可用的分布式缓存支持。
  - ​组合优势：适用于高并发、大数据量的场景，提升系统响应速度和稳定性