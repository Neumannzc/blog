---
title: 填充word
date: 2024-05-25
icon: dragon
category:
  - 后端
tag:
  - 开发示例
order: 135
---

想要对 Microsoft 进行操作，想要对 word 进行操作，那你可得看看这篇文章了

<!-- more -->

[poi](https://poi.apache.org/) 知道吧，Apache 出品的对 Microsoft 进行操作的 Java API :nerd_face:	

但是你想使用它对具体的文档进行操作时，简直令人头疼 :face_with_spiral_eyes:	

- 文本不在表格中 和 文本在表格中，需要分别处理
- 文档处理结束后，即使有未处理的占位符，也不会清空，需要手动清空

但是你要是使用 [poi-tl](https://deepoove.com/poi-tl/) 就不一样了，那可真是小母牛坐飞机了 :partying_face:
- 在文档中填充文字、图片、表格
- 隐藏某些内容
- 把某些内容进行循环渲染 

多的不说了，咱就以操作word文档为例，直接上代码吧，大家自行进行比较 :zany_face:


## 一、使用 poi 对word进行填充

### 1.1、引入依赖

具体版本号，可以去官网获取最新的 [poi官网](https://poi.apache.org/)

额，下面这段代码呢，直接在项目中cv过来的，主要是展示下实现填充的代码量 :roll_eyes:

在填充时，直接填充文本 和 填充的文本在表格中 这两种情况，需要分别处理（也可以是我没有深入研究吧，如果大家有好的写法的话，可以给我发邮件啊）

要是想要深入了解其原理的话，可以研究下

but 只是使用的话，还是直接看 poi-tl 的使用吧，节约时间 摸:blowfish:	不香吗


```xml :no-line-numbers
  <!--            操作word文档    -->
  <dependency>
      <groupId>org.apache.poi</groupId>
      <artifactId>poi</artifactId>
      <version>${poi.version}</version>
  </dependency>
```

### 1.2、填充文字

``` java
void fillText() {
  // 需要填充的数据
  Map<String, String> dataMap = new HashMap<>();
  dataMap.put("name", "达拉崩巴斑得贝迪卜多比鲁翁");

  FileInputStream file = new FileInputStream(tempFile);

  XWPFDocument document = new XWPFDocument(file);

  // 替换文档中的文字
  for (XWPFParagraph paragraph : document.getParagraphs()) {
      replaceInParagraph(paragraph, dataMap);
  }
  // 替换表格中的文字
  for (XWPFTable table : document.getTables()) {
      for (XWPFTableRow row : table.getRows()) {
          for (XWPFTableCell cell : row.getTableCells()) {
              for (XWPFParagraph paragraph : cell.getParagraphs()) {
                  replaceInParagraph(paragraph, dataMap);
              }
          }
      }
  }
}

private static void replaceInParagraph(XWPFParagraph paragraph, Map<String, String> dataMap) {
        for (XWPFRun run : paragraph.getRuns()) {
            String text = run.getText(0);
            if (text != null) {
                for (Map.Entry<String, String> entry : dataMap.entrySet()) {
                    String key = entry.getKey();
                    String value = entry.getValue();
                    if (entry.getValue() == null) {
                        value = "";
                    }
                    text = text.replace("${" + key + "}", value);
                }
                run.setText(text, 0);
            }
        }
}
```

### 1.3、填充图片

``` java 
void fillText() {
  // 需要填充的数据
  Map<String, String> dataMap = new HashMap<>();
  dataMap.put("image", "https://img2.baidu.com/it/u=702352376,2051235826&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800");

  FileInputStream file = new FileInputStream(tempFile);

  XWPFDocument document = new XWPFDocument(file);

  // 替换文本中的图片
  for (XWPFParagraph paragraph : document.getParagraphs()) {
      replaceImage(paragraph, dataMap);
  }

  // 替换表格中的图片
  for (XWPFTable table : document.getTables()) {
      for (XWPFTableRow row : table.getRows()) {
          for (XWPFTableCell cell : row.getTableCells()) {
              for (XWPFParagraph paragraph : cell.getParagraphs()) {
                  replaceImage(paragraph, dataMap);
              }
          }
      }
  }
}

// 替换图片
private static void replaceImage(XWPFParagraph paragraph, Map<String, String> dataMap) {
    String key, value;
    for (XWPFRun run : paragraph.getRuns()) {
        String text = run.getText(0);
        if (text != null) {
            for (Map.Entry<String, String> entry : dataMap.entrySet()) {
                key = entry.getKey();
                value = entry.getValue();
                if (text.contains(key)) {
                    try {
                        if (value != null &&
                                (value.startsWith("http") || value.startsWith(DevFileUploadPathUtil.getUploadPath()))) {

                            String[] imagePaths = value.split(",");

                            // 是否替换占位符
                            for (String path : imagePaths) {
                                int height = 100, width = 100;
                                InputStream inputStream = null;

                                if (path.startsWith(DevFileUploadPathUtil.getUploadPath())) {
                                    File file = FileUtil.file(path);
                                    inputStream = new FileInputStream(file);
                                    Image image = ImgUtil.read(file);
                                    width = image.getWidth(null);
                                    height = image.getHeight(null);
                                } else {
                                    System.out.println("填充word文件，图片地址 = " + path);
                                    HttpResponse response = HttpUtil.createGet(path).execute();
                                    inputStream = response.bodyStream();
                                }

                                run.addPicture(inputStream, XWPFDocument.PICTURE_TYPE_PNG,
                                        value, Units.toEMU(Math.min(400, width)), Units.toEMU(Math.min(300, height))); // 调整图片大小
                            }
                            // 清空占位符
                            run.setText("", 0);
                        }
                    } catch (Exception e) {
                        throw new CommonException("填充图片失败，" + e.getMessage());
                    }
                }
            }
        }
    }
}
```

## 二、使用 poi-tl 对word进行填充

大家可以先去 [poi-tl 的 git仓库](https://gitee.com/hgl168918/poi-tl) 看下 poi-tl 是如何介绍自己的吧

当然为了方便阅读，这里摘出来一部分

- Word 模板引擎，基于Apache POI - the Java API for Microsoft Documents。

- FreeMarker、Velocity基于文本模板和数据生成新的HTML页面、配置文件等，poi-tl是Word模板引擎，基于Microsoft Word模板和数据生成新的文档。

- Word模板拥有丰富的样式，poi-tl在生成的文档中会完美保留模板中的样式，还可以为标签设置样式，标签的样式会被应用到替换后的文本上，因此你可以专注于模板设计。

- poi-tl是一种 "logic-less" 模板引擎，没有复杂的控制结构和变量赋值，只有标签，一些标签可以被替换为文本、图片、表格等，一些标签会隐藏某些文档内容，而另一些标签则会将一系列文档内容循环渲染。

额，可能文字有点多，还是用它自己的话总结下吧

**poi-tl支持自定义渲染函数(插件)，函数可以在Word模板的任何位置执行，在文档的任何地方做任何事情（Do Anything Anywhere）是poi-tl的星辰大海**

### 2.1、操作word文档方案的对比

这个对比也是从它官网直接 cv 过来的，毕竟咱也不是做评测的，它只要能够帮咱快速的完成工作，让咱有充足的时间**摸鱼**就行啊

要是有需求它实现不了，那再去找嘛，不用纠结这些

方案 | 移植性 | 功能性 | 易用性
-- | -- | -- | --
Poi-tl | Java跨平台 | Word模板引擎，基于Apache POI，提供更友好的API | 低代码，准备文档模板和数据即可
Apache POI | Java跨平台 | Apache项目，封装了常见的文档操作，也可以操作底层XML结构 | 文档不全，这里有一个教程：[Apache POI Word快速入门](https://deepoove.com/poi-tl/apache-poi-guide.html)
Freemarker | XML跨平台 | 仅支持文本，很大的局限性 | 不推荐，XML结构的代码几乎无法维护
OpenOffice | 部署OpenOffice，移植性较差 | - | 需要了解OpenOffice的API
HTML浏览器导出 | 依赖浏览器的实现，移植性较差 | HTML不能很好的兼容Word的格式，样式糟糕 | -
Jacob、winlib | Windows平台 | - | 复杂，完全不推荐使用

### 2.2、poi-tl 具体功能

反正按照它 [官网文档](https://deepoove.com/poi-tl/) 上说的，它自己就是最好的

感觉这个牛吹的有点大的

咱来一起看看他具体有那些功能吧

Word模板引擎功能 |	描述
-- | --
文本 | 将标签渲染为文本
图片 | 将标签渲染为图片
表格 | 将标签渲染为表格
列表 | 将标签渲染为列表
图表 | 条形图（3D条形图）、柱形图（3D柱形图）、面积图（3D面积图）、折线图（3D折线图）、雷达图、饼图（3D饼图）、散点图等图表渲染
If Condition判断 | 根据条件隐藏或者显示某些文档内容（包括文本、段落、图片、表格、列表、图表等）
Foreach Loop循环 | 根据集合循环某些文档内容（包括文本、段落、图片、表格、列表、图表等）
Loop表格行 | 循环复制渲染表格的某一行
Loop表格列 | 循环复制渲染表格的某一列
Loop有序列表 | 支持有序列表的循环，同时支持多级列表
Highlight代码高亮 | word中代码块高亮展示，支持26种语言和上百种着色样式
Markdown | 将Markdown渲染为word文档
Word批注 | 完整的批注功能，创建批注、修改批注等
Word附件 | Word中插入附件
SDT内容控件 | 内容控件内标签支持
Textbox文本框 | 文本框内标签支持
图片替换 | 将原有图片替换成另一张图片
书签、锚点、超链接 | 支持设置书签，文档内锚点和超链接功能
Expression Language | 完全支持SpringEL表达式，可以扩展更多的表达式：OGNL, MVEL…​
样式 | 模板即样式，同时代码也可以设置样式
模板嵌套 | 模板包含子模板，子模板再包含子模板
合并 | Word合并Merge，也可以在指定位置进行合并
 用户自定义函数(插件) | 插件化设计，在文档任何位置执行函数

### 2.3、引入依赖

功能这么全的吗 :flushed:

算了，咱啥也不说了，直接用吧

```xml :no-line-numbers
<dependency>
  <groupId>com.deepoove</groupId>
  <artifactId>poi-tl</artifactId>
  <version>${poi.tl.version}</version>
</dependency>
```

### 2.4、填充文本

需要先在文档中相应的位置添加占位符 `{{text}}`

```java
/**
 * 填充文本 方法一
 * 需要填充的文件在 resource中
 *
 * @throws Exception
 */
@Test
void fillText1() throws Exception {
  Map<String, Object> params = new HashMap<>();

  params.put("name", "行者孙");

  Resource resource = new ClassPathResource("doc/test.docx");
  File file = resource.getFile();

  //创建输出流
  OutputStream os = new FileOutputStream("template1_out.docx");
  //最终编译渲染并输出
  XWPFTemplate.compile(file).render(params).writeAndClose(os);
}

/**
 * 填充文本 方法二
 * 需要填充的文件在本地
 *
 * @throws Exception
 */
@Test
void fillText2() throws Exception {
  String path = "/home/coffee/projects/person/demoProject/src/main/resources/doc/test.docx";
  XWPFTemplate template = XWPFTemplate.compile(path);
  Map<String, Object> map = new HashMap<>();
  map.put("name", "行者孙");

  template.render(map);
  template.writeAndClose(new FileOutputStream("template2_out.docx"));
}
```

### 2.5、填充图片

需要先在文档中相应的位置添加占位符 `{{@image}}`

```java
/**
 * 填充图片
 *
 * @throws Exception
 */
@Test
void fillImage() throws Exception {
  String imgUrl = "https://img2.baidu.com/it/u=702352376,2051235826&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800";
  String imgPath = "/home/coffee/图片/avatar.jpg";

  Map<String, Object> params = new HashMap<>();

  // 图片url、path等
  // 根据图片类型，直接使用 Pictures.ofXXX().create() 即可
  params.put("image", Pictures.ofUrl(imgUrl).size(50, 50).create());

  Resource resource = new ClassPathResource("doc/test.docx");
  File file = resource.getFile();

  //创建输出流
  OutputStream os = new FileOutputStream("template1_out.docx");

  //最终编译渲染并输出
  XWPFTemplate.compile(file).render(params).writeAndClose(os);
}
```

### 2.6、创建表，填充数据

需要先在文档中相应的位置添加占位符 `{{#table}}`

这个说的是把占位符替换成表格，不是在表格中填充文字哈，已经有表格了，需要填充文字的，属于填充文本

``` java
/**
 * 创建表格，并填充数据
 *
 * @throws Exception
 */
@Test
void createTableAndFillData() throws Exception {

  String imgUrl = "https://img2.baidu.com/it/u=702352376,2051235826&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800";
  String imgPath = "/home/image/avatar.jpg";

  Map<String, Object> params = new HashMap<>();

  // 表格
  RowRenderData row0 = Rows.of("姓名", "年龄", "手机号", "照片")
          .textColor("ffffff")
          .bgColor("444444")
          .center().create();
  RowRenderData row1 = Rows.of("tom", "20", "13419817750").center().create();
  RowRenderData row2 = Rows.of("jom", "18", "17627178298").center().create();

  // 单元格插入图片
  PictureRenderData pic1 = Pictures.ofUrl(imgUrl).size(50, 50).create();
  row1.addCell(Cells.of(pic1).create());

  PictureRenderData pic2 = Pictures.ofStream(Files.newInputStream(new File(imgPath).toPath()))
          .size(50, 50).create();
  row2.addCell(Cells.of(pic2).create());

  TableRenderData tableRenderData = Tables.create(row0, row1);
  tableRenderData.addRow(row2);
  
  Resource resource = new ClassPathResource("doc/test.docx");
  File file = resource.getFile();
  //创建输出流
  OutputStream os = new FileOutputStream("template1_out.docx");
  //最终编译渲染并输出
  XWPFTemplate.compile(file).render(params).writeAndClose(os);
}
```

### 2.6、循环填充（问答）

先看效果

``` :no-line-numbers
问：第一个提问
答：第一个回答 
问：第二提问
答：第二回答 
问：第三提问
答：第三回答 
```

填充的模板中添加（如果想要 **问答的内容** 加下划线的话，直接在 `{{=#this}}` 的下方加上即可）

``` :no-line-numbers
{{?list}}
{{?_is_even_item}}答：{{=#this}} {{/_is_even_item}}
{{?_is_odd_item }}问：{{=#this}} {{/_is_odd_item }}
{{/list}}
```
java中这样写

``` java
@Test
void fillWord2() throws Exception {

    ArrayList<String> list = new ArrayList<>();

    list.add("第一个提问");
    list.add("第一个回答");
    list.add("第二提问");
    list.add("第二回答");
    list.add("第三提问");
    list.add("第三回答");

    Map<String, Object> map = new HashMap<>();
    map.put("list", list);

    XWPFTemplate template = XWPFTemplate.compile(PATH + "test2.docx")
            .render(map);

    template.writeAndClose(new FileOutputStream(PATH + "output2.docx"));
}
```

### 2.6、循环填充（列表）

先看效果

``` :no-line-numbers
1. 第一个提问
2. 第一个回答
3. 第二提问
4. 第二回答
5. 第三提问
6. 第三回答
```

填充的模板中添加

``` :no-line-numbers
{{?list}}
{{_index + 1}}. {{=#this}}
{{/list}}
```

java中这样写

``` java
@Test
void fillWord2() throws Exception {

    ArrayList<String> list = new ArrayList<>();

    list.add("第一个提问");
    list.add("第一个回答");
    list.add("第二提问");
    list.add("第二回答");
    list.add("第三提问");
    list.add("第三回答");

    Map<String, Object> map = new HashMap<>();
    map.put("list", list);

    XWPFTemplate template = XWPFTemplate.compile(PATH + "test2.docx")
            .render(map);

    template.writeAndClose(new FileOutputStream(PATH + "output2.docx"));
}
```