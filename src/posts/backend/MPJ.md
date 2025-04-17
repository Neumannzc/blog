---
title: MybatisPlusJoin
date: 2024-05-07
icon: dragon
category:
  - 后端
tag:
  - 框架
order: 305
---

[MyBatis-Plus-Join](https://mybatisplusjoin.com/) (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。

<!-- more -->

## 一、引入依赖

```xml
<dependency>
    <groupId>com.github.yulichang</groupId>
    <artifactId>mybatis-plus-join-boot-starter</artifactId>
    <version>1.4.5</version>
</dependency>
```

## 二、改造service mapper

Mapper层：继承MPJBaseMapper\<Entity> (必选)

IService层：继承MPJBaseService\<Entity> (可选)

ServiceImpl继承MPJBaseServiceImpl \<EntityMapper , Entity>，实现IEntityService(可选)

## 三、使用

### 3.1、简单的连表查询

```java
class test {
    @Resource
    private UserMapper userMapper;

    void testJoin() {
        //和Mybatis plus一致，MPJLambdaWrapper的泛型必须是主表的泛型，并且要用主表的Mapper来调用
        MPJLambdaWrapper<UserDO> wrapper = JoinWrappers.lambda(UserDO.class)
                .selectAll(UserDO.class)//查询user表全部字段
                .select(UserAddressDO::getTel)//查询user_address tel 字段
                .selectAs(UserAddressDO::getAddress, UserDTO::getUserAddress)//别名
                .select(AreaDO::getProvince, AreaDO::getCity)
                .leftJoin(UserAddressDO.class, UserAddressDO::getUserId, UserDO::getId)
                .leftJoin(AreaDO.class, AreaDO::getId, UserAddressDO::getAreaId)
                .eq(UserDO::getId, 1)
                .like(UserAddressDO::getTel, "1")
                .gt(UserDO::getId, 5);

        //连表查询 返回自定义ResultType
        List<UserDTO> list = userMapper.selectJoinList(UserDTO.class, wrapper);

        //分页查询 （需要启用 mybatis plus 分页插件）
        Page<UserDTO> listPage = userMapper.selectJoinPage(new Page<>(2, 10), UserDTO.class, wrapper);
    }
}
```

### 3.2、一对多查询

```java
class test {
    @Resource
    private UserMapper userMapper;

    @Test
    void testResultMap() {
        MPJLambdaWrapper<UserDO> wrapper = new MPJLambdaWrapper<>(User.class)
                .selectAll(UserDO.class)
                //对多查询
                .selectCollection(AddressDO.class, UesrDTO::getAddressList)
                //对一查询
                .selectAssociation(AddressDO.class, UesrDTO::getAddress)
                .leftJoin(AddressDO.class, AddressDO::getUserId, UserDO::getId);

        List<UserDTO> dtoList = userMapper.selectJoinList(UserDTO.class, wrapper);

        //关于对多分页查询
        //由于嵌套结果方式会导致结果集被折叠，因此分页查询的结果在折叠后总数会减少，所以无法保证分页结果数量正确。
    }
}
```

