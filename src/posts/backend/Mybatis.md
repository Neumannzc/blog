---
title: Mybatis
date: 2024-05-10
icon: dragon
category:
  - 后端
tag:
  - 框架
order: 301
---

[MyBatis](https://mybatis.net.cn/)是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。

<!-- more -->
## 一、查询姓李的，并且出生日期范围是1993-02-09到1994-04-09的员工

想要实现的效果
```sql
SELECT * 
FROM t_employee 
WHERE 
	DATE_FORMAT(birthday,'%Y-%m-%d')>='1993-02-09' 
  AND DATE_FORMAT(birthday,'%Y-%m-%d')<='1994-04-09' 
	AND NAME LIKE '李%'
```

java端需要这样写
```java
@Test
public void selectByQueryWrapper3(){
  	QueryWrapper queryWrapper=new QueryWrapper();
  	queryWrapper
      .apply("DATE_FORMAT(birthday,'%Y-%m-%d')>={0} 
        and DATE_FORMAT(birthday,'%Y-%m-%d')<={1}",
        "1993-02-09","1994-04-09")
	    .likeRight("name","李");
  	List employeeList = employeeMapper.selectList(queryWrapper);
  	System.out.println(employeeList);
}
```

## 二、查询姓李的或者邮箱不为空并且是女性的员工

想要实现的效果
```sql
SELECT *
FROM t_employee
WHERE NAME LIKE '李%' 
      OR 
      (email IS NOT NULL AND gender ='女')
```

java端需要这样写

```java
@Test
public void selectByQueryWrapper4(){
  	QueryWrapper queryWrapper=new QueryWrapper();
  	queryWrapper
      .likeRight("name","李")
      .or(wq->wq.isNotNull("email").eq("gender","女"));
  	List employeeList = employeeMapper.selectList(queryWrapper);
  	System.out.println(employeeList);
}
```

## 3、查询姓李的并且邮箱不为空或者是女性的员工

想要实现的效果
```sql
SELECT *
FROM t_employee
WHERE NAME LIKE '李%'
      AND
      (email IS NOT NULL OR gender ='女')
```

java端需要这样写

```java
@Test
public void selectByQueryWrapper5(){
  	QueryWrapper queryWrapper=new QueryWrapper();
  	queryWrapper
      .likeRight("name","李")
      .and(wq->wq.isNotNull("email").or().eq("gender","女"));
  	List employeeList = employeeMapper.selectList(queryWrapper);
  	System.out.println(employeeList);
}
```

## 4、查询属于编号1,2,3部门的并且薪水小于等于3500的员工 根据年龄从大到小排序显示


想要实现的效果
```sql
SELECT *
FROM t_employee 
WHERE salary<=3500
      AND departmentId IN (1,2,3)
ORDER BY birthday ASC
```

java端需要这样写
