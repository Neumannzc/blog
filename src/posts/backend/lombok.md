---
title: lombok
date: 2024-05-07
icon: dragon
category:
  - 后端
tag:
  - 开发示例
order: 120
---

[lombok](https://projectlombok.org/) 是一个 java 库，它会自动插入您的编辑器和构建工具，为您的 Java 增添趣味。

再也不用编写另一个 getter 或 equals 方法了

只需一个注释，您的类就拥有了一个功能齐全的构建器，自动化了您的日志记录变量等等。

<!-- more -->

## 一、@onX

例如 `onConstructor`, `oMethod`, 和 `onParam` 允许你在生成的代码中注入自定义的注解。一个常见的用例是结合 Spring 的 `@Autowired`。

在 Spring 的组件（如 `@Service`、`@Controller`、`@Component`、`@Repository` 等）中使用 `@RequiredArgsConstructor(onConstructor = @__(@Autowired))`，可以让 Lombok 在生成构造函数时也加上 `@Autowired` 注解，这样，Spring 就可以自动注入所需的依赖。

例如下面这段代码

```java
@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class MyService {
    private final AnotherService anotherService;
}

```

上述代码片段使用 Lombok 和 Spring 注解，Lombok 会为其生成以下代码

```java
@Service
public class MyService {
    private final AnotherService anotherService;

    @Autowired
    public MyService(AnotherService anotherService) {
        this.anotherService = anotherService;
    }
}

```

从生成的代码中可以看出：

*   为 `MyService` 生成了一个构造函数，该构造函数接受一个 `AnotherService` 类型的参数。
*   由于构造函数上有 `@Autowired` 注解，Spring 会自动查找合适的 `AnotherService` bean 实例并注入到 `MyService` 中。

这种方式结合了 Lombok 的自动代码生成功能和 Spring 的依赖注入功能，使得代码更为简洁。

但是，使用此技巧时要确保团队成员都理解其背后的含义，以避免混淆。

## 二、@Delegate

`@Delegate`可以让你的类使用其他类的方法，而不需要自己写代码。

比如，你有一个类叫做A，它有一个方法叫做sayHello()，你想让另一个类B也能用这个方法，那就可以在B类中加上一个A类型的字段，并在这个字段上加上@Delegate注解，这样，B类就可以直接调用sayHello()方法，就像它是自己的方法一样。看个例子：

```java
// 一个类，有一个方法
public class A {
    public void sayHello() {
        System.out.println("Hello");
    }
}

// 一个类，委托了A类的方法
public class B {
    @Delegate // 委托A类的方法
    private A a = new A();

    public static void main(String[] args) {
        B b = new B();
        b.sayHello(); // 调用A类的方法
    }
}

```

这样写最大的好处就是可以避免类的层次过深或者耦合过紧，提高代码的可读性和可维护性，各种继承来继承去是真的看得头疼。

## 三、@Cleanup

`@Cleanup`可以自动管理输入输出流等各种需要释放的资源，确保安全地调用close方法。

它的使用方法是在声明的资源前加上`@Cleanup`，例如：

```java
@Cleanup InputStream in = new FileInputStream("some/file");

```

这样，当你的代码执行完毕后，Lombok会自动在一个try-finally块中调用`in.close()`方法，释放资源。

如果要释放资源的方法名不是close，也可以指定要调用的方法名，例如：

```java
@Cleanup("release") MyResource resource = new MyResource();

```

Lombok会自动在try-finally块中调用`resource.release()`方法，释放资源。

可以看到，这比手动写try-finally要简洁得太多了，只要使用`@Cleanup`就能管理任何有无参方法的资源，指定正确的方法名即可。

## 四、@Singular 和 @Builder 组合

`@Builder`让你的类支持链式构造，而`@Singular`让集合类型字段可以更方便的维护。

`@Singular`注解可以用在集合类型的字段上，它会生成两个方法，一个是添加单个元素的方法，一个是添加整个集合的方法。这两个方法可以和 `@Builder` 生成的其他方法一起链式调用，给你的类的所有字段赋值。

这么讲可能有点懵，直接看示例:

```java
@Data
@Builder
public class User {
    private String name;
    private int age;
    @Singular
    private List<String> hobbies;
}

// 使用 @Builder 和 @Singular 生成的方法
User user = User.builder()
    .name("练习时长两年半")
    .age(28)
    .hobby("篮球") // 添加单个元素
    .hobby("唱歌") // 添加单个元素
    .hobbies(Arrays.asList("跳舞", "其他")) // 添加整个集合
    .build(); // 构造 User 对象

```

可以看出，使用 `@Singular` 注解的好处是，你可以灵活地添加集合类型的字段，而不需要自己创建和初始化集合对象。

另外，使用 `@Singular` 注解生成的集合字段，在调用 `build()` 方法后，会被转换为不可变的集合，这样可以保证对象的不变性和线程安全性。你也可以使用 `clear()` 方法来清空集合字段，例如：

```java
User user = User.builder()
    .name("签")
    .age(28)
    .hobby("说唱")
    .hobby("跳舞")
    .clearHobbies() // 清空集合字段
    .hobby("踩缝纫机") // 重新添加元素
    .build();

```

但需要注意的是，如果你的类继承了一个父类，那么 `@Builder` 只会生成当前类的字段和参数，不包括父类的。

## 五、@With

允许你创建一个新的对象，该对象是当前对象的副本，但某些字段的值已被更改。

```java
@With  
public class Person {  
    private String name;  
    private int age;  
}  
  
Person person = new Person("Alice", 30);  
// 创建一个新的 Person 对象，其 name 为 "Alice"，但 age 为 31
Person updatedPerson = person.withAge(31); 

```

## 六、结束语

请注意，尽管 Lombok 提供了许多方便的功能，但**过度使用**或**不当使用**可能会导致代码难以理解和维护。

因此，在使用这些功能时，务必始终保持审慎，并且要充分考虑其影响。
