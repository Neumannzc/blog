import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,b as i,d as l,o as s}from"./app-Dwh_EYxy.js";const r={};function d(o,e){return s(),a("div",null,[e[0]||(e[0]=n("p",null,"reids的命令太多啦，根本学不完啊",-1)),i(" more "),e[1]||(e[1]=l(`<h2 id="一、通用命令" tabindex="-1"><a class="header-anchor" href="#一、通用命令"><span>一、通用命令</span></a></h2><p>通用指令，是指所有类型都可以使用指令</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>
KEYS：查看符合模板的所有key

DEL：删除一个指定打key

EXISTS：判断key是否存在

EXPIRE：给ke一个key设置有效期，有效期到期时i该key会被自动删除

TTL：查看一个key的剩余有效期
</code></pre></div><h2 id="二、string类型" tabindex="-1"><a class="header-anchor" href="#二、string类型"><span>二、String类型</span></a></h2><p>String类型，也就是字符串类型，是Redis中最简单的存储类型。</p><p>其value是字符串，不过根据字符串的格式不同，又可以分为3类：</p><ul><li>string：普通字符串</li><li>int：整数类型，可以做自增、自减操作</li><li>float：浮点类型，可以做自增、自减操作</li></ul><p>不管是哪种格式，底层都是字节数组形式存储，只不过是编码方式不同。字符串类型的最大空间不能超过512m。</p><h3 id="_2-1、常见命令" tabindex="-1"><a class="header-anchor" href="#_2-1、常见命令"><span>2.1、常见命令</span></a></h3><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>SET：添加或者修改已经存在的一个String类型的键值对

GET：根据key获取String类型的value

MSET：批量添加多个String类型的键值对

MGET：根据多个key获取多个String类型的value

INCR：让一个整型的key自增1

INCRBY:让一个整型的key自增并指定步长，例如：incrby num 2 让num值自增2

INCRBYFLOAT：让一个浮点类型的数字自增并指定步长

SETNX：添加一个String类型的键值对，前提是这个key不存在，否则不执行

SETEX：添加一个String类型的键值对，并且指定有效期
</code></pre></div><h3 id="_2-2、key结构" tabindex="-1"><a class="header-anchor" href="#_2-2、key结构"><span>2.2、key结构</span></a></h3><p>Redis没有类似MySQL中的Table的概念，我们该如何区分不同类型的key呢？</p><p>例如，需要存储用户、商品信息到redis，有一个用户id是1，有一个商品id恰好也是1，此时如果使用id作为key，那就会冲突了，该怎么办？</p><p>我们可以通过给key添加前缀加以区分，不过这个前缀不是随便加的，有一定的规范：</p><p>Redis的key允许有多个单词形成层级结构，多个单词之间用&#39;:&#39;隔开，格式如下：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>项目名:业务名:类型:id
</code></pre></div><p>这个格式并非固定，也可以根据自己的需求来删除或添加词条。这样以来，我们就可以把不同类型的数据区分开了。从而避免了key的冲突问题。</p><p>例如我们的项目名称叫 <code>baidu</code>，有user和product两种不同类型的数据，我们可以这样定义key：</p><ul><li><p>user相关的key：<strong>baidu:user:1</strong></p></li><li><p>product相关的key：<strong>baidu:product:1</strong></p></li></ul><p>如果Value是一个Java对象，例如一个User对象，则可以将对象序列化为JSON字符串后存储：</p><table><thead><tr><th>KEY</th><th>VALUE</th></tr></thead><tbody><tr><td>baidu:user:1</td><td>{&quot;id&quot;:1, &quot;name&quot;: &quot;Jack&quot;, &quot;age&quot;: 21}</td></tr><tr><td>baidu:project:1</td><td>{&quot;id&quot;:1, &quot;name&quot;: &quot;Jack&quot;, &quot;age&quot;: 21}</td></tr></tbody></table><h2 id="三、hash类型" tabindex="-1"><a class="header-anchor" href="#三、hash类型"><span>三、Hash类型</span></a></h2><p>Hash类型，也叫散列，其value是一个无序字典，类似于Java中的HashMap结构。</p><p>String结构是将对象序列化为JSON字符串后存储，当需要修改对象某个字段时很不方便</p><p>Hash结构可以将对象中的每个字段独立存储，可以针对单个字段做CRUD</p><h3 id="_3-1、常见命令" tabindex="-1"><a class="header-anchor" href="#_3-1、常见命令"><span>3.1、常见命令</span></a></h3><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>HSET key field value：添加或者修改hash类型key的field的值

HGET key field：获取一个hash类型key的field的值

HMSET：批量添加多个hash类型key的field的值

HMGET：批量获取多个hash类型key的field的值

HGETALL：获取一个hash类型的key中的所有的field和value

HKEYS：获取一个hash类型的key中的所有的field

HINCRBY:让一个hash类型key的字段值自增并指定步长

HSETNX：添加一个hash类型的key的field值，前提是这个field不存在，否则不执行
</code></pre></div><h2 id="四、list类型" tabindex="-1"><a class="header-anchor" href="#四、list类型"><span>四、List类型</span></a></h2><p>Redis中的List类型与Java中的LinkedList类似，可以看做是一个双向链表结构。既可以支持正向检索和也可以支持反向检索。</p><p>特征也与LinkedList类似：</p><ul><li>有序</li><li>元素可以重复</li><li>插入和删除快</li><li>查询速度一般</li></ul><p>常用来存储一个有序数据，例如：朋友圈点赞列表，评论列表等。</p><h3 id="_4-1、常见命令" tabindex="-1"><a class="header-anchor" href="#_4-1、常见命令"><span>4.1、常见命令</span></a></h3><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>LPUSH key element ... ：向列表左侧插入一个或多个元素

LPOP key：移除并返回列表左侧的第一个元素，没有则返回nil

RPUSH key element ... ：向列表右侧插入一个或多个元素

RPOP key：移除并返回列表右侧的第一个元素

LRANGE key star end：返回一段角标范围内的所有元素

BLPOP和BRPOP：与LPOP和RPOP类似，只不过在没有元素时等待指定时间，而不是直接返回nil
</code></pre></div><h2 id="五、set类型" tabindex="-1"><a class="header-anchor" href="#五、set类型"><span>五、Set类型</span></a></h2><p>Redis的Set结构与Java中的HashSet类似，可以看做是一个value为null的HashMap。因为也是一个hash表，因此具备与HashSet类似的特征：</p><ul><li><p>无序</p></li><li><p>元素不可重复</p></li><li><p>查找快</p></li><li><p>支持交集、并集、差集等功能</p></li></ul><h2 id="_5-1、常用命令" tabindex="-1"><a class="header-anchor" href="#_5-1、常用命令"><span>5.1、常用命令</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>
SADD key member ... ：向set中添加一个或多个元素

SREM key member ... : 移除set中的指定元素

SCARD key： 返回set中元素的个数

SISMEMBER key member：判断一个元素是否存在于set中

SMEMBERS：获取set中的所有元素

SINTER key1 key2 ... ：求 key1 与 key2 的交集

SDIFF key1 key2 ... ：求 key1 与 key2 的差集

</code></pre></div><h2 id="六、sortedset类型" tabindex="-1"><a class="header-anchor" href="#六、sortedset类型"><span>六、SortedSet类型</span></a></h2><p>Redis的SortedSet是一个可排序的set集合，与Java中的TreeSet有些类似，但底层数据结构却差别很大。SortedSet中的每一个元素都带有一个score属性，可以基于score属性对元素排序，底层的实现是一个跳表（SkipList）加 hash表。</p><p>SortedSet具备下列特性：</p><ul><li>可排序</li><li>元素不重复</li><li>查询速度快</li></ul><p>因为SortedSet的可排序特性，经常被用来实现排行榜这样的功能。</p><h2 id="_6-1、常用命令" tabindex="-1"><a class="header-anchor" href="#_6-1、常用命令"><span>6.1、常用命令</span></a></h2><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>ZADD key score member：添加一个或多个元素到sorted set ，如果已经存在则更新其score值

ZREM key member：删除sorted set中的一个指定元素

ZSCORE key member : 获取sorted set中的指定元素的score值

ZRANK key member：获取sorted set 中的指定元素的排名

ZCARD key：获取sorted set中的元素个数

ZCOUNT key min max：统计score值在给定范围内的所有元素的个数

ZINCRBY key increment member：让sorted set中的指定元素自增，步长为指定的increment值

ZRANGE key min max：按照score排序后，获取指定排名范围内的元素

ZRANGEBYSCORE key min max：按照score排序后，获取指定score范围内的元素

ZDIFF、ZINTER、ZUNION：求差集、交集、并集
</code></pre></div>`,46))])}const h=t(r,[["render",d],["__file","常见命令.html.vue"]]),u=JSON.parse('{"path":"/posts/sql/redis/%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4.html","title":"常见命令","lang":"zh-CN","frontmatter":{"title":"常见命令","date":"2024-05-14T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis操作"],"order":205,"description":"reids的命令太多啦，根本学不完啊","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"常见命令"}],["meta",{"property":"og:description","content":"reids的命令太多啦，根本学不完啊"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T03:39:56.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis操作"}],["meta",{"property":"article:published_time","content":"2024-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T03:39:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T03:39:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、通用命令","slug":"一、通用命令","link":"#一、通用命令","children":[]},{"level":2,"title":"二、String类型","slug":"二、string类型","link":"#二、string类型","children":[{"level":3,"title":"2.1、常见命令","slug":"_2-1、常见命令","link":"#_2-1、常见命令","children":[]},{"level":3,"title":"2.2、key结构","slug":"_2-2、key结构","link":"#_2-2、key结构","children":[]}]},{"level":2,"title":"三、Hash类型","slug":"三、hash类型","link":"#三、hash类型","children":[{"level":3,"title":"3.1、常见命令","slug":"_3-1、常见命令","link":"#_3-1、常见命令","children":[]}]},{"level":2,"title":"四、List类型","slug":"四、list类型","link":"#四、list类型","children":[{"level":3,"title":"4.1、常见命令","slug":"_4-1、常见命令","link":"#_4-1、常见命令","children":[]}]},{"level":2,"title":"五、Set类型","slug":"五、set类型","link":"#五、set类型","children":[]},{"level":2,"title":"5.1、常用命令","slug":"_5-1、常用命令","link":"#_5-1、常用命令","children":[]},{"level":2,"title":"六、SortedSet类型","slug":"六、sortedset类型","link":"#六、sortedset类型","children":[]},{"level":2,"title":"6.1、常用命令","slug":"_6-1、常用命令","link":"#_6-1、常用命令","children":[]}],"git":{"createdTime":1715679264000,"updatedTime":1719805196000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":2}]},"readingTime":{"minutes":5.66,"words":1699},"filePathRelative":"posts/sql/redis/常见命令.md","localizedDate":"2024年5月14日","excerpt":"<p>reids的命令太多啦，根本学不完啊</p>\\n","autoDesc":true}');export{h as comp,u as data};
