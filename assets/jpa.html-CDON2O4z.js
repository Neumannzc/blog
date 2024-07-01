import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c as o,a as n,b as a,d as c,e as i,f as l}from"./app-p3jFODVl.js";const u="/blog/assets/images/Snipaste_2024-06-28_11-29-56.png",r={},d={href:"https://spring.io/projects/spring-data-jpa",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"简化JPA开发的框架",-1),m=n("p",null,"Spring Data JPA 让我们脱离了DAO层的操作，基本上所有 CRUD 都可以依赖于它来实现。",-1),v=n("p",null,"在实际工作中，推荐使用 Spring Data JPA + ORM（如：hibernate）完成操作，这样在切换不同的 ORM 框架时，就可以非常方便，同时也使数据库层的操作更加简单，方便解耦。",-1),b=l(`<h2 id="一、jpa的对象4种状态" tabindex="-1"><a class="header-anchor" href="#一、jpa的对象4种状态"><span>一、jpa的对象4种状态</span></a></h2><table><thead><tr><th>状态</th><th>含义</th><th>说明</th></tr></thead><tbody><tr><td><strong>临时状态（new）</strong></td><td>刚创建出来，没有与entityManager发生关系，没有被持久化，不处于entityManager中的对象</td><td></td></tr><tr><td><strong>持久状态（managed）</strong></td><td>与entityManager发生关系，并且被持久化，处于entityManager中的对象</td><td>对实体类的属性进行操作，会同步到数据库中</td></tr><tr><td><strong>删除状态（removed）</strong></td><td>执行remove方法，事务提交之前</td><td></td></tr><tr><td><strong>游离状态（detached）</strong></td><td>提交数据库后，事务commit后实体的状态</td><td>对实体类的属性进行操作，不会同步到数据库中</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 临时状态</span>
<span class="token class-name">Customer</span> customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 游离状态（设置了id，如果是只对对象的其余属性进行操作，则对象还属于临时状态）</span>
customer<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">330L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 持久状态</span>
entityManager<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">330L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 删除状态</span>
entityManager<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、操作语句" tabindex="-1"><a class="header-anchor" href="#二、操作语句"><span>二、操作语句</span></a></h2><h3 id="_2-1、准备" tabindex="-1"><a class="header-anchor" href="#_2-1、准备"><span>2.1、准备</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">After</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Before</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">EntityManager</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">EntityManagerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">EntityTransaction</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>persistence<span class="token punctuation">.</span></span><span class="token class-name">Persistence</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JPATest</span> <span class="token punctuation">{</span>

    <span class="token class-name">EntityManager</span> entityManager<span class="token punctuation">;</span>

    <span class="token class-name">EntityTransaction</span> transaction<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Before</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">EntityManagerFactory</span> factory <span class="token operator">=</span> <span class="token class-name">Persistence</span><span class="token punctuation">.</span><span class="token function">createEntityManagerFactory</span><span class="token punctuation">(</span><span class="token string">&quot;hibernateJPA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        entityManager <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createEntityManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transaction <span class="token operator">=</span> entityManager<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        transaction<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@After</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        transaction<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、新增" tabindex="-1"><a class="header-anchor" href="#_2-2、新增"><span>2.2、新增</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">Customer</span> customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    customer<span class="token punctuation">.</span><span class="token function">setCustomerName</span><span class="token punctuation">(</span><span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomString</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    customer<span class="token punctuation">.</span><span class="token function">setCustomerAddress</span><span class="token punctuation">(</span><span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomString</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    entityManager<span class="token punctuation">.</span><span class="token function">persist</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3、立即查询" tabindex="-1"><a class="header-anchor" href="#_2-3、立即查询"><span>2.3、立即查询</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFind</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Customer</span> customer <span class="token operator">=</span> entityManager<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">340L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;==============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; customer ====&gt; &quot;</span> <span class="token operator">+</span> customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4、延迟查询" tabindex="-1"><a class="header-anchor" href="#_2-4、延迟查询"><span>2.4、延迟查询</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testFind_lazy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">Customer</span> reference <span class="token operator">=</span> entityManager<span class="token punctuation">.</span><span class="token function">getReference</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">340L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;==============================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; reference ====&gt; &quot;</span> <span class="token operator">+</span> reference<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5、更新" tabindex="-1"><a class="header-anchor" href="#_2-5、更新"><span>2.5、更新</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">Customer</span> customer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    customer<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token number">340L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    customer<span class="token punctuation">.</span><span class="token function">setCustomerName</span><span class="token punctuation">(</span><span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomString</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    customer<span class="token punctuation">.</span><span class="token function">setCustomerAddress</span><span class="token punctuation">(</span><span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomString</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    entityManager<span class="token punctuation">.</span><span class="token function">merge</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6、删除" tabindex="-1"><a class="header-anchor" href="#_2-6、删除"><span>2.6、删除</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testDelete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Customer</span> customer <span class="token operator">=</span> entityManager<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token class-name">Customer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token number">3L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    entityManager<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>customer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7、使用jpql操作数据库" tabindex="-1"><a class="header-anchor" href="#_2-7、使用jpql操作数据库"><span>2.7、使用jpql操作数据库</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testJpql</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">String</span> jpql <span class="token operator">=</span> <span class="token string">&quot;update Customer set customerName = :name where id = :id&quot;</span><span class="token punctuation">;</span>

    entityManager<span class="token punctuation">.</span><span class="token function">createQuery</span><span class="token punctuation">(</span>jpql<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;李四&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">330L</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">executeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、状态转化说明" tabindex="-1"><a class="header-anchor" href="#三、状态转化说明"><span>三、状态转化说明</span></a></h2><p><img src="`+u+'" alt="Snipaste_2024-06-28_11-29-56"></p><ul><li>public void persist(Object entity)</li></ul><p>persist 方法可以将实例转换为managed（托管）状态。在i盗用flush()方法或提交事务后，实例将会被<strong>插入</strong>到数据库中</p><p>对不同状态下的实例A，persist会产生以下操作：</p><table><thead><tr><th>状态</th><th>进行persist操作</th></tr></thead><tbody><tr><td>new状态</td><td>转为managed状态</td></tr><tr><td>managed状态</td><td>状态不变，系统仍会在数据库执行 INSERT 操作</td></tr><tr><td>removed状态</td><td>转换成受控状态</td></tr><tr><td>detached状态</td><td>抛出 IllegalArgumentException 异常，具体异常与不同JPA实现有关</td></tr></tbody></table><ul><li>public void merge(Object entity)</li></ul><p>merge 方法可以将用户对一个 detached 状态实体的<strong>修改</strong>进行归档，归档后将产生一个新的managed状态对象</p><p>对不同状态下的实例A，merge会产生以下操作：</p><table><thead><tr><th>状态</th><th>进行merge操作</th></tr></thead><tbody><tr><td>detached状态</td><td>会将A的修改提交到数据库，并返回一个新的 managed 状态的实例A2</td></tr><tr><td>new状态</td><td>产生一个根据A产生的 managed 状态实体A2</td></tr><tr><td>managed状态</td><td>状态不会发生改变，但是系统仍然会在数据库执行 UPDATE 操作</td></tr><tr><td>removed状态</td><td>该方法会抛出 IllegalArgumentException 异常</td></tr></tbody></table><ul><li>public void refresh(Object entity)</li></ul><p>refresh 方法可以保证当前的实例与数据库中的实例的内容一致</p><p>对不同状态下的实例A，refresh会产生以下操作：</p><table><thead><tr><th>状态</th><th>进行merge操作</th></tr></thead><tbody><tr><td>new状态</td><td>不会发生任何操作，但可能会抛出异常，具体情况与不同JPA实现有关</td></tr><tr><td>managed状态</td><td>属性将会和数据库中的数据同步</td></tr><tr><td>removed状态</td><td>抛出 Entity not managed</td></tr><tr><td>detached状态</td><td>抛出异常</td></tr></tbody></table><ul><li>public void remove(Object entity)</li></ul><p>remove 方法可以将实体转换为 removed 状态，并且在调用 flush() 方法 或 提交事务 后删除数据库中的数据</p><p>对不同状态下的实例A，remove会产生以下操作：</p><table><thead><tr><th>状态</th><th>进行merge操作</th></tr></thead><tbody><tr><td>new状态</td><td>状态不变，但系统仍然会在数据库中执行 DELETE 语句</td></tr><tr><td>managed状态</td><td>转换成 removed 状态</td></tr><tr><td>removed状态</td><td>不会发生任何操作</td></tr><tr><td>detached状态</td><td>抛出异常</td></tr></tbody></table>',36);function g(h,y){const s=e("ExternalLinkIcon");return p(),o("div",null,[n("p",null,[n("a",d,[a("spring data jpa"),c(s)]),a(" 是 spring 提供的一套 "),k,a("，按照约定好的规则进行[方法命名]去写 dao 层接口，就可以在不写接口实现的情况下，实现对数据库的访问和操作。同时提供了很多除了 CRUD 之外的功能，如分页、排序、复杂查询等。")]),m,v,i(" more "),b])}const _=t(r,[["render",g],["__file","jpa.html.vue"]]),w=JSON.parse('{"path":"/posts/sql/orm/jpa.html","title":"Spring Data JPA","lang":"zh-CN","frontmatter":{"title":"Spring Data JPA","date":"2024-06-28T00:00:00.000Z","icon":"snowman","category":["orm"],"tag":["jpa"],"order":100,"description":"spring data jpa 是 spring 提供的一套 简化JPA开发的框架，按照约定好的规则进行[方法命名]去写 dao 层接口，就可以在不写接口实现的情况下，实现对数据库的访问和操作。同时提供了很多除了 CRUD 之外的功能，如分页、排序、复杂查询等。 Spring Data JPA 让我们脱离了DAO层的操作，基本上所有 CRUD 都可以依...","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/orm/jpa.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"Spring Data JPA"}],["meta",{"property":"og:description","content":"spring data jpa 是 spring 提供的一套 简化JPA开发的框架，按照约定好的规则进行[方法命名]去写 dao 层接口，就可以在不写接口实现的情况下，实现对数据库的访问和操作。同时提供了很多除了 CRUD 之外的功能，如分页、排序、复杂查询等。 Spring Data JPA 让我们脱离了DAO层的操作，基本上所有 CRUD 都可以依..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/Neumannzc/blog/blog/assets/images/Snipaste_2024-06-28_11-29-56.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-01T03:39:56.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"jpa"}],["meta",{"property":"article:published_time","content":"2024-06-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-01T03:39:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Data JPA\\",\\"image\\":[\\"https://github.com/Neumannzc/blog/blog/assets/images/Snipaste_2024-06-28_11-29-56.png\\"],\\"datePublished\\":\\"2024-06-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-01T03:39:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、jpa的对象4种状态","slug":"一、jpa的对象4种状态","link":"#一、jpa的对象4种状态","children":[]},{"level":2,"title":"二、操作语句","slug":"二、操作语句","link":"#二、操作语句","children":[{"level":3,"title":"2.1、准备","slug":"_2-1、准备","link":"#_2-1、准备","children":[]},{"level":3,"title":"2.2、新增","slug":"_2-2、新增","link":"#_2-2、新增","children":[]},{"level":3,"title":"2.3、立即查询","slug":"_2-3、立即查询","link":"#_2-3、立即查询","children":[]},{"level":3,"title":"2.4、延迟查询","slug":"_2-4、延迟查询","link":"#_2-4、延迟查询","children":[]},{"level":3,"title":"2.5、更新","slug":"_2-5、更新","link":"#_2-5、更新","children":[]},{"level":3,"title":"2.6、删除","slug":"_2-6、删除","link":"#_2-6、删除","children":[]},{"level":3,"title":"2.7、使用jpql操作数据库","slug":"_2-7、使用jpql操作数据库","link":"#_2-7、使用jpql操作数据库","children":[]}]},{"level":2,"title":"三、状态转化说明","slug":"三、状态转化说明","link":"#三、状态转化说明","children":[]}],"git":{"createdTime":1719805196000,"updatedTime":1719805196000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1117},"filePathRelative":"posts/sql/orm/jpa.md","localizedDate":"2024年6月28日","excerpt":"<p><a href=\\"https://spring.io/projects/spring-data-jpa\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">spring data jpa</a> 是 spring 提供的一套 <strong>简化JPA开发的框架</strong>，按照约定好的规则进行[方法命名]去写 dao 层接口，就可以在不写接口实现的情况下，实现对数据库的访问和操作。同时提供了很多除了 CRUD 之外的功能，如分页、排序、复杂查询等。</p>\\n<p>Spring Data JPA 让我们脱离了DAO层的操作，基本上所有 CRUD 都可以依赖于它来实现。</p>\\n<p>在实际工作中，推荐使用 Spring Data JPA + ORM（如：hibernate）完成操作，这样在切换不同的 ORM 框架时，就可以非常方便，同时也使数据库层的操作更加简单，方便解耦。</p>\\n","autoDesc":true}');export{_ as comp,w as data};
