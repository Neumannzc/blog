import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c,a as s,b as n,d as t,e as i,f as l}from"./app-BiuDrlcz.js";const u={},d={href:"https://github.com/redis/jedis",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/redis/redis",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"🧐 🧐 🧐",-1),m=l(`<h2 id="一、引入依赖" tabindex="-1"><a class="header-anchor" href="#一、引入依赖"><span>一、引入依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!--jedis--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

  <span class="token comment">&lt;!--单元测试--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit.jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-jupiter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.7.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、使用jedis" tabindex="-1"><a class="header-anchor" href="#二、使用jedis"><span>二、使用jedis</span></a></h2><h3 id="_2-1、建立链接和释放链接" tabindex="-1"><a class="header-anchor" href="#_2-1、建立链接和释放链接"><span>2.1、建立链接和释放链接</span></a></h3><p>建立链接</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token class-name">Jedis</span> jedis<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@BeforeEach</span>
  <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 1.建立连接</span>
      <span class="token comment">// jedis = new Jedis(&quot;192.168.150.101&quot;, 6379);</span>
      jedis <span class="token operator">=</span> <span class="token class-name">JedisConnectionFactory</span><span class="token punctuation">.</span><span class="token function">getJedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 2.设置密码</span>
      jedis<span class="token punctuation">.</span><span class="token function">auth</span><span class="token punctuation">(</span><span class="token string">&quot;123321&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 3.选择库</span>
      jedis<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>释放资源</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@AfterEach</span>
<span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>jedis <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        jedis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、进行测试" tabindex="-1"><a class="header-anchor" href="#_2-2、进行测试"><span>2.2、进行测试</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 存入数据</span>
      <span class="token class-name">String</span> result <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;虎哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result = &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 获取数据</span>
      <span class="token class-name">String</span> name <span class="token operator">=</span> jedis<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;name = &quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、jedis连接池" tabindex="-1"><a class="header-anchor" href="#三、jedis连接池"><span>三、jedis连接池</span></a></h2><p>Jedis本身是线程不安全的，并且频繁的创建和销毁连接会有性能损耗，因此推荐使用Jedis连接池代替Jedis的直连方式。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">JedisPool</span> jedisPool<span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token punctuation">{</span>
      <span class="token comment">// 配置连接池</span>
      <span class="token class-name">JedisPoolConfig</span> poolConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPoolConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 设置最大连接数</span>
      poolConfig<span class="token punctuation">.</span><span class="token function">setMaxTotal</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 设置最大空闲连接数</span>
      poolConfig<span class="token punctuation">.</span><span class="token function">setMaxIdle</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 设置最小空闲连接数</span>
      poolConfig<span class="token punctuation">.</span><span class="token function">setMinIdle</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      jedisPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JedisPool</span><span class="token punctuation">(</span>poolConfig<span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Jedis</span> <span class="token function">getJedis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> jedisPool<span class="token punctuation">.</span><span class="token function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function v(g,b){const a=p("ExternalLinkIcon");return o(),c("div",null,[s("p",null,[s("a",d,[n("jedis"),t(a)]),n(" 是 "),s("a",r,[n("Redis"),t(a)]),n(" 的 Java 客户端，专为性能和易用性而设计。")]),k,i(" more "),m])}const j=e(u,[["render",v],["__file","Jedis的使用.html.vue"]]),_=JSON.parse('{"path":"/posts/sql/redis/Jedis%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"Jedis的使用","lang":"zh-CN","frontmatter":{"title":"Jedis的使用","date":"2024-05-14T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis的使用"],"order":300,"description":"jedis 是 Redis 的 Java 客户端，专为性能和易用性而设计。 🧐 🧐 🧐","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/Jedis%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"Jedis的使用"}],["meta",{"property":"og:description","content":"jedis 是 Redis 的 Java 客户端，专为性能和易用性而设计。 🧐 🧐 🧐"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-18T00:00:47.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis的使用"}],["meta",{"property":"article:published_time","content":"2024-05-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-18T00:00:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jedis的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-18T00:00:47.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、引入依赖","slug":"一、引入依赖","link":"#一、引入依赖","children":[]},{"level":2,"title":"二、使用jedis","slug":"二、使用jedis","link":"#二、使用jedis","children":[{"level":3,"title":"2.1、建立链接和释放链接","slug":"_2-1、建立链接和释放链接","link":"#_2-1、建立链接和释放链接","children":[]},{"level":3,"title":"2.2、进行测试","slug":"_2-2、进行测试","link":"#_2-2、进行测试","children":[]}]},{"level":2,"title":"三、jedis连接池","slug":"三、jedis连接池","link":"#三、jedis连接池","children":[]}],"git":{"createdTime":1715990447000,"updatedTime":1715990447000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"posts/sql/redis/Jedis的使用.md","localizedDate":"2024年5月14日","excerpt":"<p><a href=\\"https://github.com/redis/jedis\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">jedis</a> 是 <a href=\\"https://github.com/redis/redis\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Redis</a> 的 Java 客户端，专为性能和易用性而设计。</p>\\n<p>🧐 🧐 🧐</p>\\n","autoDesc":true}');export{j as comp,_ as data};
