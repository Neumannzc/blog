import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as p,c,a as s,b as n,d as o,e as l,f as i}from"./app-DT30k0-r.js";const u={},r={href:"https://mybatisplusjoin.com/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="一、引入依赖" tabindex="-1"><a class="header-anchor" href="#一、引入依赖"><span>一、引入依赖</span></a></h2><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.yulichang<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-join-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.4.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、改造service-mapper" tabindex="-1"><a class="header-anchor" href="#二、改造service-mapper"><span>二、改造service mapper</span></a></h2><p>Mapper层：继承MPJBaseMapper&lt;Entity&gt; (必选)</p><p>IService层：继承MPJBaseService&lt;Entity&gt; (可选)</p><p>ServiceImpl继承MPJBaseServiceImpl &lt;EntityMapper , Entity&gt;，实现IEntityService(可选)</p><h2 id="三、使用" tabindex="-1"><a class="header-anchor" href="#三、使用"><span>三、使用</span></a></h2><h3 id="_3-1、简单的连表查询" tabindex="-1"><a class="header-anchor" href="#_3-1、简单的连表查询"><span>3.1、简单的连表查询</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> test <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">testJoin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//和Mybatis plus一致，MPJLambdaWrapper的泛型必须是主表的泛型，并且要用主表的Mapper来调用</span>
        <span class="token class-name">MPJLambdaWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> wrapper <span class="token operator">=</span> <span class="token class-name">JoinWrappers</span><span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token class-name">UserDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token class-name">UserDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//查询user表全部字段</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">UserAddressDO</span><span class="token operator">::</span><span class="token function">getTel</span><span class="token punctuation">)</span><span class="token comment">//查询user_address tel 字段</span>
                <span class="token punctuation">.</span><span class="token function">selectAs</span><span class="token punctuation">(</span><span class="token class-name">UserAddressDO</span><span class="token operator">::</span><span class="token function">getAddress</span><span class="token punctuation">,</span> <span class="token class-name">UserDTO</span><span class="token operator">::</span><span class="token function">getUserAddress</span><span class="token punctuation">)</span><span class="token comment">//别名</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">AreaDO</span><span class="token operator">::</span><span class="token function">getProvince</span><span class="token punctuation">,</span> <span class="token class-name">AreaDO</span><span class="token operator">::</span><span class="token function">getCity</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token class-name">UserAddressDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UserAddressDO</span><span class="token operator">::</span><span class="token function">getUserId</span><span class="token punctuation">,</span> <span class="token class-name">UserDO</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token class-name">AreaDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">AreaDO</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> <span class="token class-name">UserAddressDO</span><span class="token operator">::</span><span class="token function">getAreaId</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">UserDO</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token class-name">UserAddressDO</span><span class="token operator">::</span><span class="token function">getTel</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">gt</span><span class="token punctuation">(</span><span class="token class-name">UserDO</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//连表查询 返回自定义ResultType</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectJoinList</span><span class="token punctuation">(</span><span class="token class-name">UserDTO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//分页查询 （需要启用 mybatis plus 分页插件）</span>
        <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span></span> listPage <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectJoinPage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">UserDTO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、一对多查询" tabindex="-1"><a class="header-anchor" href="#_3-2、一对多查询"><span>3.2、一对多查询</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">class</span> test <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">UserMapper</span> userMapper<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testResultMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MPJLambdaWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDO</span><span class="token punctuation">&gt;</span></span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MPJLambdaWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token class-name">UserDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//对多查询</span>
                <span class="token punctuation">.</span><span class="token function">selectCollection</span><span class="token punctuation">(</span><span class="token class-name">AddressDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UesrDTO</span><span class="token operator">::</span><span class="token function">getAddressList</span><span class="token punctuation">)</span>
                <span class="token comment">//对一查询</span>
                <span class="token punctuation">.</span><span class="token function">selectAssociation</span><span class="token punctuation">(</span><span class="token class-name">AddressDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">UesrDTO</span><span class="token operator">::</span><span class="token function">getAddress</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">leftJoin</span><span class="token punctuation">(</span><span class="token class-name">AddressDO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">AddressDO</span><span class="token operator">::</span><span class="token function">getUserId</span><span class="token punctuation">,</span> <span class="token class-name">UserDO</span><span class="token operator">::</span><span class="token function">getId</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserDTO</span><span class="token punctuation">&gt;</span></span> dtoList <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">selectJoinList</span><span class="token punctuation">(</span><span class="token class-name">UserDTO</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> wrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//关于对多分页查询</span>
        <span class="token comment">//由于嵌套结果方式会导致结果集被折叠，因此分页查询的结果在折叠后总数会减少，所以无法保证分页结果数量正确。</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function d(m,v){const a=e("ExternalLinkIcon");return p(),c("div",null,[s("p",null,[s("a",r,[n("MyBatis-Plus-Join"),o(a)]),n(" (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。")]),l(" more "),k])}const y=t(u,[["render",d],["__file","MPJ的使用.html.vue"]]),f=JSON.parse('{"path":"/posts/backend/MPJ%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"MybatisPlusJoin的使用","lang":"zh-CN","frontmatter":{"title":"MybatisPlusJoin的使用","date":"2024-05-07T00:00:00.000Z","author":"Cafe Babe","category":["后端"],"tag":["MPJ"],"description":"MyBatis-Plus-Join (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/backend/MPJ%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"MybatisPlusJoin的使用"}],["meta",{"property":"og:description","content":"MyBatis-Plus-Join (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T07:01:41.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"MPJ"}],["meta",{"property":"article:published_time","content":"2024-05-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T07:01:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MybatisPlusJoin的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-09T07:01:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\"}]}"]]},"headers":[{"level":2,"title":"一、引入依赖","slug":"一、引入依赖","link":"#一、引入依赖","children":[]},{"level":2,"title":"二、改造service mapper","slug":"二、改造service-mapper","link":"#二、改造service-mapper","children":[]},{"level":2,"title":"三、使用","slug":"三、使用","link":"#三、使用","children":[{"level":3,"title":"3.1、简单的连表查询","slug":"_3-1、简单的连表查询","link":"#_3-1、简单的连表查询","children":[]},{"level":3,"title":"3.2、一对多查询","slug":"_3-2、一对多查询","link":"#_3-2、一对多查询","children":[]}]}],"git":{"createdTime":1715238101000,"updatedTime":1715238101000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.29,"words":388},"filePathRelative":"posts/backend/MPJ的使用.md","localizedDate":"2024年5月7日","excerpt":"<p><a href=\\"https://mybatisplusjoin.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">MyBatis-Plus-Join</a> (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>\\n","autoDesc":true}');export{y as comp,f as data};
