---
title: Spring Data JPA
date: 2024-06-28
icon: snowman
category:
  - orm
tag:
  - jpa
order: 100
---

[spring data jpa](https://spring.io/projects/spring-data-jpa) 是 spring 提供的一套 **简化JPA开发的框架**，按照约定好的规则进行[方法命名]去写 dao 层接口，就可以在不写接口实现的情况下，实现对数据库的访问和操作。同时提供了很多除了 CRUD 之外的功能，如分页、排序、复杂查询等。

Spring Data JPA 让我们脱离了DAO层的操作，基本上所有 CRUD 都可以依赖于它来实现。

在实际工作中，推荐使用 Spring Data JPA + ORM（如：hibernate）完成操作，这样在切换不同的 ORM 框架时，就可以非常方便，同时也使数据库层的操作更加简单，方便解耦。

<!-- more -->

## 一、jpa的对象4种状态
状态 | 含义 | 说明
-- | -- | --
**临时状态（new）** | 刚创建出来，没有与entityManager发生关系，没有被持久化，不处于entityManager中的对象 | 
**持久状态（managed）** | 与entityManager发生关系，并且被持久化，处于entityManager中的对象 | 对实体类的属性进行操作，会同步到数据库中
**删除状态（removed）** | 执行remove方法，事务提交之前 | 
**游离状态（detached）** | 提交数据库后，事务commit后实体的状态 | 对实体类的属性进行操作，不会同步到数据库中

```java
// 临时状态
Customer customer = new Customer();

// 游离状态（设置了id，如果是只对对象的其余属性进行操作，则对象还属于临时状态）
customer.setId(330L);

// 持久状态
entityManager.find(Customer.class, 330L);

// 删除状态
entityManager.remove(customer);
```

## 二、操作语句

### 2.1、准备

```java
import org.junit.After;
import org.junit.Before;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

public class JPATest {

    EntityManager entityManager;

    EntityTransaction transaction;

    @Before
    public void init() {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("hibernateJPA");
        entityManager = factory.createEntityManager();
        transaction = entityManager.getTransaction();
        transaction.begin();
    }

    @After
    public void close() {
        transaction.commit();
    }
}
```

### 2.2、新增

```java
@Test
public void testSave() {

    Customer customer = new Customer();
    customer.setCustomerName(RandomUtil.randomString(10));
    customer.setCustomerAddress(RandomUtil.randomString(10));

    entityManager.persist(customer);

}
```

### 2.3、立即查询

```java
@Test
public void testFind() {
    Customer customer = entityManager.find(Customer.class, 340L);
    Console.log("==============================");
    Console.log(" customer ====> " + customer);
}
```

### 2.4、延迟查询

```java
@Test
public void testFind_lazy() {

    Customer reference = entityManager.getReference(Customer.class, 340L);
    Console.log("==============================");
    Console.log(" reference ====> " + reference);

}
```

### 2.5、更新

```java
@Test
public void testUpdate() {

    Customer customer = new Customer();
    customer.setId(340L);
    customer.setCustomerName(RandomUtil.randomString(10));
    customer.setCustomerAddress(RandomUtil.randomString(10));

    entityManager.merge(customer);

}
```

### 2.6、删除

```java
@Test
public void testDelete() {
    Customer customer = entityManager.find(Customer.class, 3L);

    entityManager.remove(customer);
}
```

### 2.7、使用jpql操作数据库

```java
@Test
public void testJpql() {

    String jpql = "update Customer set customerName = :name where id = :id";

    entityManager.createQuery(jpql)
            .setParameter("name", "李四")
            .setParameter("id", 330L)
            .executeUpdate();
}
```

## 三、状态转化说明

![Snipaste_2024-06-28_11-29-56](/assets/images/Snipaste_2024-06-28_11-29-56.png)

- public void persist(Object entity)

persist 方法可以将实例转换为managed（托管）状态。在i盗用flush()方法或提交事务后，实例将会被**插入**到数据库中

对不同状态下的实例A，persist会产生以下操作：

状态 | 进行persist操作
-- | --
new状态 | 转为managed状态
managed状态 | 状态不变，系统仍会在数据库执行 INSERT 操作
removed状态 | 转换成受控状态
detached状态 | 抛出 IllegalArgumentException 异常，具体异常与不同JPA实现有关

- public void merge(Object entity)

merge 方法可以将用户对一个 detached 状态实体的**修改**进行归档，归档后将产生一个新的managed状态对象

对不同状态下的实例A，merge会产生以下操作：

状态 | 进行merge操作
-- | --
detached状态 | 会将A的修改提交到数据库，并返回一个新的 managed 状态的实例A2
new状态 | 产生一个根据A产生的 managed 状态实体A2
managed状态 | 状态不会发生改变，但是系统仍然会在数据库执行 UPDATE 操作
removed状态 | 该方法会抛出 IllegalArgumentException 异常

- public void refresh(Object entity)

refresh 方法可以保证当前的实例与数据库中的实例的内容一致

对不同状态下的实例A，refresh会产生以下操作：

状态 | 进行merge操作
-- | --
new状态 | 不会发生任何操作，但可能会抛出异常，具体情况与不同JPA实现有关
managed状态 | 属性将会和数据库中的数据同步
removed状态 | 抛出 Entity not managed
detached状态 | 抛出异常

- public void remove(Object entity)

remove 方法可以将实体转换为 removed 状态，并且在调用 flush() 方法 或 提交事务 后删除数据库中的数据

对不同状态下的实例A，remove会产生以下操作：

状态 | 进行merge操作
-- | --
new状态 | 状态不变，但系统仍然会在数据库中执行 DELETE 语句
managed状态 | 转换成 removed 状态
removed状态 | 不会发生任何操作
detached状态 | 抛出异常