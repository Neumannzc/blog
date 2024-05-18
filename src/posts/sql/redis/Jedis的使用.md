---
title: Jedis的使用
date: 2024-05-14
icon: snowman
category:
  - redis
tag:
  - redis的使用
order: 300
---

[jedis](https://github.com/redis/jedis) 是 [Redis](https://github.com/redis/redis) 的 Java 客户端，专为性能和易用性而设计。

:monocle_face: :monocle_face: :monocle_face:

<!-- more -->

## 一、引入依赖

```xml
  <!--jedis-->
  <dependency>
      <groupId>redis.clients</groupId>
      <artifactId>jedis</artifactId>
      <version>5.0.0</version>
  </dependency>

  <!--单元测试-->
  <dependency>
      <groupId>org.junit.jupiter</groupId>
      <artifactId>junit-jupiter</artifactId>
      <version>5.7.0</version>
      <scope>test</scope>
  </dependency>
```

## 二、使用jedis

### 2.1、建立链接和释放链接

建立链接

```java
  private Jedis jedis;

  @BeforeEach
  void setUp() {
      // 1.建立连接
      // jedis = new Jedis("192.168.150.101", 6379);
      jedis = JedisConnectionFactory.getJedis();
      // 2.设置密码
      jedis.auth("123321");
      // 3.选择库
      jedis.select(0);
  }
```

释放资源

```java
@AfterEach
void tearDown() {
    if (jedis != null) {
        jedis.close();
    }
}
```

### 2.2、进行测试

``` java
  @Test
  void testString() {
      // 存入数据
      String result = jedis.set("name", "虎哥");
      System.out.println("result = " + result);
      // 获取数据
      String name = jedis.get("name");
      System.out.println("name = " + name);
  }
```



## 三、jedis连接池

Jedis本身是线程不安全的，并且频繁的创建和销毁连接会有性能损耗，因此推荐使用Jedis连接池代替Jedis的直连方式。

``` java
  private static JedisPool jedisPool;

  static {
      // 配置连接池
      JedisPoolConfig poolConfig = new JedisPoolConfig();

      // 设置最大连接数
      poolConfig.setMaxTotal(8);

      // 设置最大空闲连接数
      poolConfig.setMaxIdle(8);

      // 设置最小空闲连接数
      poolConfig.setMinIdle(0);

      jedisPool = new JedisPool(poolConfig, "localhost", 6379);
  }

  public static Jedis getJedis(){
      return jedisPool.getResource();
  }
```