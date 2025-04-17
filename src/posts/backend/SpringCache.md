---
title: Spring Cache
date: 2024-05-07
icon: dragon
category:
  - 后端
tag:
  - 框架
order: 315
---

对于Spring Cache 和 Redis 的使用步骤, 可以查看 [Redis 和 Spring Cache 的使用](/posts/project/sky/function/功能点八.md)

<!-- more -->

## 1. @Cacheable：查询缓存
**​作用**
当方法被调用时，先检查缓存中是否存在对应数据，存在则直接返回；不存在则执行方法并将结果存入缓存。

**​核心参数**
参数	| 作用
-- | --
value	| 缓存名称空间（如 "users"），不同 Service 可以复用相同名称隔离数据。
key	| 缓存键，默认为方法参数组合（如 #id）。支持 SpEL 表达式。
keyGenerator	| 自定义 Key 生成器类名（实现 KeyGenerator 接口）。
condition	| 缓存条件（SpEL 表达式），满足条件时才缓存结果。
unless	| 反条件（SpEL 表达式），满足时不缓存结果。
cacheNames	| 明确指定多个缓存名称（如 "users", "userCache"）。

**​代码示例**
```java
@Cacheable(value = "users", key = "#id", unless = "#result == null")
public User getUserById(Long id) {
    // 查询数据库
    return userRepository.findById(id).orElse(null);
}
```
- ​unless：当查询结果为 null 时不缓存（避免缓存空值占用空间）。

## ​2. @CachePut：更新缓存

**​作用**
无论缓存是否存在，都会执行方法并将结果更新到缓存中（不依赖旧值）。

**​核心参数**
参数	| 作用
-- | --
value	| 缓存名称空间
key	| 缓存键

**​代码示例**
```java
@CachePut(value = "users", key = "#user.id")
public User updateUser(User user) {
    return userRepository.save(user);
}
```
- ​适用场景：数据更新后必须同步更新缓存（如用户信息修改）。

## ​3. @CacheEvict：删除缓存

**​作用**
从缓存中移除指定键的数据。

**​核心参数**
参数	| 作用
-- | --
value	| 缓存名称空间
key	| 要删除的缓存键

**​代码示例**
```java
@CacheEvict(value = "users", key = "#id")
public void deleteUser(Long id) {
    userRepository.deleteById(id);
}
```

## ​4. @Caching：组合缓存操作

**​作用**
在一个方法上同时定义多个缓存行为（如 @Cacheable + @CacheEvict）。

**​代码示例**
```java
@Caching(
    cacheable = {@Cacheable("users")},
    evict = {@CacheEvict("logs")}
)
public User createUser(User user) {
    // 添加用户并记录日志
    logService.addLog("User created: " + user.getName());
    return userRepository.save(user);
}
```

## ​5. @Cacheable 的高级用法

**​自定义 Key 生成器**
实现 KeyGenerator 接口并绑定到注解：

```java
@Component
public class CustomKeyGenerator implements KeyGenerator {
    @Override
    public Object generate(Object target, Method method, Object... params) {
        return target.getClass().getSimpleName() + ":" + Arrays.toString(params);
    }
}

// 使用自定义 Key
@Cacheable(value = "users", keyGenerator = "customKeyGenerator")
public User getUserByNameAndAge(String name, Integer age) { ... }
```

**​动态 Key 和条件**
使用 SpEL 表达式动态生成键和条件：

```java
@Cacheable(value = "orders", key = "#user.id + '_' + #productId")
@Cacheable(value = "orders", key = "#user.name", condition = "#user.isAdmin()")
public Order getOrder(User user, Product product) { ... }
```

## ​6. @RefreshScope：热更新缓存
**​作用**
结合 Spring Cloud 的 @RefreshScope 实现缓存自动刷新（需集成 Actuator）。

**​代码示例**
```java
@RestController
@RefreshScope
public class ConfigController {

    @Value("${config.example.value}")
    private String exampleValue;

    @GetMapping("/config")
    public String getConfig() {
        return exampleValue;
    }
}
```
当配置发生变化时，调用 `/actuator/refresh` 刷新所有 @RefreshScope 的 Bean。

## ​7. 其他注解
注解 | 作用
-- | --
​**@CacheConfig**​	| 类级别的缓存配置（替代重复的 value/key 等属性）。
​**@CacheableUnbound**	| 用于 AspectJ 编程（非 Spring AOP）。

**​Spring Cache 执行流程**

- 方法被调用时，检查缓存中是否存在对应 Key。
- 若存在，直接返回缓存值。
- 若不存在，执行方法并将结果存入缓存后返回。

## 8. ​注意事项

- ​缓存穿透​

  - 解决方案：缓存空值（unless = "#result == null"）或使用布隆过滤器。

- ​多级缓存策略​

  - 推荐使用「本地缓存 + 分布式缓存」（如 Caffeine + Redis），减少对 Redis 的直接压力。

- ​事务与缓存一致性​

  - 更新数据库后必须触发缓存失效（通过 @CacheEvict 或主动删除）。

## 9. ​示例场景

商品详情页

```java
@Service
public class ProductService {

    @Cacheable(value = "products", key = "#id")
    public Product getProductDetail(Long id) {
        // 查询数据库并组装详情数据
        return productRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @CacheEvict(value = "products", key = "#id")
    public void updateProductStock(Long id, int stock) {
        // 更新库存（分布式锁保证原子性）
        redisTemplate.executeLuaScript(updateStockScript, Arrays.asList(id, stock));
    }
}
```