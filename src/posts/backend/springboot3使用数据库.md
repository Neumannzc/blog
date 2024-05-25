---
title: springboot3使用数据库
date: 2024-05-21
icon: dragon
category:
  - 后端
tag:
  - 开发示例
order: 130
---

springboot3 使用数据库

<!-- more -->

## 一、使用redis

### 1.1、引入maven依赖

```xml :no-line-numbers
  <!--jedis-->
  <dependency>
      <groupId>redis.clients</groupId>
      <artifactId>jedis</artifactId>
      <version>5.0.0</version>
  </dependency>

  <!-- redis -->
  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-data-redis</artifactId>
  </dependency>

  <!-- common-pool -->
  <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-pool2</artifactId>
  </dependency>
```

### 1.2、添加配置

```yaml :no-line-numbers
spring:
  data:
    redis:
      host: 127.0.0.1
      port: 6379
      database: 0
      lettuce:
        pool:
          max-active: 8
          max-idle: 8
          min-idle: 0
          max-wait: 100ms
```

### 1.3、测试

``` java :no-line-numbers
import cn.hutool.core.util.RandomUtil;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import redis.clients.jedis.Jedis;

/**
 * jedis
 */
public class JedisTest {

    private Jedis jedis;

    /**
     * 初始化资源
     */
    @BeforeEach
    void setUp(){
        jedis = new Jedis("127.0.0.1", 6379);

        jedis.select(0);
    }

    /**
     * 释放资源
     */
    @AfterEach
    void tearDown() {
        if( jedis != null ){
            jedis.close();
        }
    }

    @Test
    void testString() {
        String result = jedis.set("avatar", RandomUtil.randomString(10));
        System.out.println("result = " + result);

        String name = jedis.get("avatar");
        System.out.println("name = " + name);
    }

}
```

## 二、使用mysql

### 2.1、引入maven依赖

``` xml :no-line-numbers
  <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>5.1.49</version>
  </dependency>

  <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-jdbc</artifactId>
  </dependency>

  <!-- common-pool -->
  <dependency>
      <groupId>org.apache.commons</groupId>
      <artifactId>commons-pool2</artifactId>
  </dependency>
```

### 2.2、添加配置

``` yaml :no-line-numbers
spring:
  datasource:
    driver-class-name: com.mysql.jdbc.Driver
    url: jdbc:mysql://IP/dateName?useSSL=false
    username: 
    password: 
```

## 三、使用mybatis-plus

### 3.1、引入maven依赖

``` xml :no-line-numbers
  <dependency>
      <groupId>com.baomidou</groupId>
      <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
      <version>3.5.6</version>
  </dependency>
```

### 3.2、添加配置

``` yaml :no-line-numbers
mybatis-plus:
  global-config:
    db-config:
      id-type: auto
```
