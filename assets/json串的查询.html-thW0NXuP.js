import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e,a as t,f as o}from"./app-B4eEmffs.js";const p={},c=t("p",null,"json存储，可以减少程序猿的开发时的工作量",-1),d=t("p",null,"至于后期维护嘛，都删库跑路了，爱谁谁",-1),l=o(`<p>⌛ 先来段吐槽吧</p><p>刚开始后端开发的时候，看到数据库中存json，就想说这个哪个 🐷 的 💩 设计，自己设计的数据库 &amp; 自己定义的数据格式，还存在json中</p><p>后来开发时间长了，见到的这种情况多了，也就懒得吐槽了 🙃</p><p>直到有一次，客户改需求后，产生了大量的数据，要是在数据库中加字段的话，改动特别大，要不逝逝json存数据</p><p>再后来，json用多了，哎妈呀，我也是 🐷 ， 💩 真香</p><h2 id="一、对json中的某字段模糊查询" tabindex="-1"><a class="header-anchor" href="#一、对json中的某字段模糊查询"><span>一、对json中的某字段模糊查询</span></a></h2><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 字段address存储的值是json串</span>
<span class="token comment"># 如 {&quot;orderId&quot;:&quot;75981f2a46564bc9b743ad0e55b0990e&quot;,&quot;name&quot;:&quot;旺仔&quot;,&quot;phone&quot;:&quot;13295488888&quot;,&quot;area&quot;:&quot;北京市/北京市/东城区&quot;,&quot;address&quot;:&quot;11&quot;}</span>
<span class="token comment"># 需要 根据手机号进行模糊查询</span>
<span class="token comment"># 方式一</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> your_table <span class="token keyword">WHERE</span> JSON_EXTRACT<span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&#39;$.phone&#39;</span><span class="token punctuation">)</span> <span class="token operator">LIKE</span> <span class="token string">&#39;%15065%&#39;</span><span class="token punctuation">;</span>

<span class="token comment"># 方式二</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> your_table <span class="token keyword">WHERE</span> JSON_SEARCH<span class="token punctuation">(</span>address<span class="token punctuation">,</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;%15065%&#39;</span><span class="token punctuation">)</span> <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：<code>JSON_SEARCH、JSON_CONTAINS、JSON_EXTRACT</code></p><h3 id="_1-1、json-search" tabindex="-1"><a class="header-anchor" href="#_1-1、json-search"><span>1.1、<code>JSON_SEARCH</code></span></a></h3><p>函数用于在 JSON 文档中搜索指定的值，并返回该值的 JSON 路径。</p><p>语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>JSON_SEARCH<span class="token punctuation">(</span>json_doc<span class="token punctuation">,</span> one_or_all<span class="token punctuation">,</span> search_str<span class="token punctuation">[</span><span class="token punctuation">,</span> escape_char<span class="token punctuation">[</span><span class="token punctuation">,</span> path_mode<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>json_doc</code></td><td>要搜索的 JSON 文档</td></tr><tr><td><code>one_or_all</code></td><td>指定搜索的模式，可以是 “one”（默认）或 “all”。“one” 表示找到第一个匹配的值，“all” 表示找到所有匹配的值</td></tr><tr><td><code>search_str</code></td><td>要搜索的值</td></tr><tr><td><code>escape_char</code></td><td>（可选）用于转义搜索字符串中的特殊字符的转义字符</td></tr><tr><td><code>path_mode</code></td><td>（可选）指定搜索模式，可以是 “literal”（默认） 或 “recursive”</td></tr></tbody></table><h3 id="_1-2、json-contains" tabindex="-1"><a class="header-anchor" href="#_1-2、json-contains"><span>1.2、<code>JSON_CONTAINS</code></span></a></h3><p>函数用于判断 JSON 文档是否包含指定的值或键。</p><p>语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>JSON_CONTAINS<span class="token punctuation">(</span>json_doc<span class="token punctuation">,</span> val<span class="token punctuation">[</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>json_doc</code></td><td>要检查的 JSON 文档</td></tr><tr><td><code>val</code></td><td>要检查是否存在的值或键</td></tr><tr><td><code>path</code></td><td>（可选）指定路径，用于限定搜索的范围</td></tr></tbody></table><h3 id="_1-3、json-extract" tabindex="-1"><a class="header-anchor" href="#_1-3、json-extract"><span>1.3、<code>JSON_EXTRACT</code></span></a></h3><p>函数用于从 JSON 文档中提取指定路径的值。</p><p>语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>JSON_EXTRACT<span class="token punctuation">(</span>json_doc<span class="token punctuation">,</span> path<span class="token punctuation">[</span><span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><code>json_doc</code></td><td>要提取值的 JSON 文档</td></tr><tr><td><code>path</code></td><td>一个或多个指定路径的参数，用逗号分隔</td></tr></tbody></table>`,23);function r(i,u){return a(),s("div",null,[c,d,e(" more "),l])}const _=n(p,[["render",r],["__file","json串的查询.html.vue"]]),k=JSON.parse('{"path":"/posts/sql/json%E4%B8%B2%E7%9A%84%E6%9F%A5%E8%AF%A2.html","title":"json串的查询","lang":"zh-CN","frontmatter":{"title":"json串的查询","date":"2024-05-10T00:00:00.000Z","icon":"snowman","category":["数据库"],"tag":["数据库语法"],"order":102,"description":"json存储，可以减少程序猿的开发时的工作量 至于后期维护嘛，都删库跑路了，爱谁谁","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/json%E4%B8%B2%E7%9A%84%E6%9F%A5%E8%AF%A2.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"json串的查询"}],["meta",{"property":"og:description","content":"json存储，可以减少程序猿的开发时的工作量 至于后期维护嘛，都删库跑路了，爱谁谁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T08:30:17.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"数据库语法"}],["meta",{"property":"article:published_time","content":"2024-05-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T08:30:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"json串的查询\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-10T08:30:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、对json中的某字段模糊查询","slug":"一、对json中的某字段模糊查询","link":"#一、对json中的某字段模糊查询","children":[{"level":3,"title":"1.1、JSON_SEARCH","slug":"_1-1、json-search","link":"#_1-1、json-search","children":[]},{"level":3,"title":"1.2、JSON_CONTAINS","slug":"_1-2、json-contains","link":"#_1-2、json-contains","children":[]},{"level":3,"title":"1.3、JSON_EXTRACT","slug":"_1-3、json-extract","link":"#_1-3、json-extract","children":[]}]}],"git":{"createdTime":1715329817000,"updatedTime":1715329817000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.85,"words":556},"filePathRelative":"posts/sql/json串的查询.md","localizedDate":"2024年5月10日","excerpt":"<p>json存储，可以减少程序猿的开发时的工作量</p>\\n<p>至于后期维护嘛，都删库跑路了，爱谁谁</p>\\n","autoDesc":true}');export{_ as comp,k as data};
