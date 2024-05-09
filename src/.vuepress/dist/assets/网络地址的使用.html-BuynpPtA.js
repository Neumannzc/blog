import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as e,e as p,a as n,b as a,f as o}from"./app-apwgWgiC.js";const l={},c=n("p",null,[a("使用hutool工具包，通过图片的 "),n("strong",null,"网络地址"),a(" 或 "),n("strong",null,"本地地址"),a(" 对图片进行操作")],-1),i=o(`<h2 id="一、根据url地址-获取文件大小-单位字节" tabindex="-1"><a class="header-anchor" href="#一、根据url地址-获取文件大小-单位字节"><span>一、根据url地址，获取文件大小，单位字节</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">URL</span> url <span class="token operator">=</span> <span class="token class-name">URLUtil</span><span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span><span class="token string">&quot;图片的网络地址&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> contentLength <span class="token operator">=</span> <span class="token class-name">URLUtil</span><span class="token punctuation">.</span><span class="token function">getContentLength</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; contentLength ====&gt; &quot;</span> <span class="token operator">+</span> contentLength<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、汉字进行url编码" tabindex="-1"><a class="header-anchor" href="#二、汉字进行url编码"><span>二、汉字进行url编码</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;太阳系地球村&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> encode <span class="token operator">=</span> <span class="token class-name">URLUtil</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; encode ====&gt; &quot;</span> <span class="token operator">+</span> encode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、url编码解析成汉字" tabindex="-1"><a class="header-anchor" href="#三、url编码解析成汉字"><span>三、url编码解析成汉字</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> name <span class="token operator">=</span> <span class="token string">&quot;%E6%9C%AA%E6%A0%87%E9%A2%98-1&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> decode <span class="token operator">=</span> <span class="token class-name">URLUtil</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; decode ====&gt; &quot;</span> <span class="token operator">+</span> decode<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、根据获取文件类型" tabindex="-1"><a class="header-anchor" href="#四、根据获取文件类型"><span>四、根据获取文件类型</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// 方式一：通过访问网络获取，无法访问到该文件时会报错</span>
<span class="token comment">// 可以访问网络文件和本地文件</span>
<span class="token class-name">String</span> urlStr <span class="token operator">=</span> <span class="token string">&quot;图片的网络地址&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> mimeType <span class="token operator">=</span> <span class="token class-name">HttpUtil</span><span class="token punctuation">.</span><span class="token function">getMimeType</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; mimeType ====&gt; &quot;</span> <span class="token operator">+</span> mimeType<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式二：通过文件、或网络文件地址的后缀获取，匹配最后一个.获取，找不到最后一个.时会报错</span>
<span class="token comment">// 可以访问网络文件和本地文件</span>
<span class="token class-name">String</span> urlStr <span class="token operator">=</span> <span class="token string">&quot;图片的网络地址&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> extName <span class="token operator">=</span> <span class="token class-name">FileNameUtil</span><span class="token punctuation">.</span><span class="token function">extName</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; extName ====&gt; &quot;</span> <span class="token operator">+</span> extName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式三：通过读取文件流获取</span>
<span class="token comment">// 只能是本地文件</span>
<span class="token class-name">File</span> file <span class="token operator">=</span> <span class="token class-name">FileUtil</span><span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string">&quot;图片的本地地址&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> type <span class="token operator">=</span> <span class="token class-name">FileTypeUtil</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; type ====&gt; &quot;</span> <span class="token operator">+</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、根据文件名或网络地址获取文件名称" tabindex="-1"><a class="header-anchor" href="#五、根据文件名或网络地址获取文件名称"><span>五、根据文件名或网络地址获取文件名称</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">String</span> urlStr <span class="token operator">=</span> <span class="token string">&quot;图片的网络地址&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> mainName <span class="token operator">=</span> <span class="token class-name">FileNameUtil</span><span class="token punctuation">.</span><span class="token function">mainName</span><span class="token punctuation">(</span>urlStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot; mainName ====&gt; &quot;</span> <span class="token operator">+</span> mainName<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function u(r,d){return t(),e("div",null,[c,p(" more "),i])}const v=s(l,[["render",u],["__file","网络地址的使用.html.vue"]]),g=JSON.parse('{"path":"/posts/backend/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"网络地址的使用","lang":"zh-CN","frontmatter":{"title":"网络地址的使用","date":"2024-05-07T00:00:00.000Z","author":"Cafe Babe","category":["后端"],"tag":["hutool"],"description":"使用hutool工具包，通过图片的 网络地址 或 本地地址 对图片进行操作","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/posts/backend/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"网络地址的使用"}],["meta",{"property":"og:description","content":"使用hutool工具包，通过图片的 网络地址 或 本地地址 对图片进行操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T02:15:02.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"hutool"}],["meta",{"property":"article:published_time","content":"2024-05-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T02:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络地址的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-09T02:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\"}]}"]]},"headers":[{"level":2,"title":"一、根据url地址，获取文件大小，单位字节","slug":"一、根据url地址-获取文件大小-单位字节","link":"#一、根据url地址-获取文件大小-单位字节","children":[]},{"level":2,"title":"二、汉字进行url编码","slug":"二、汉字进行url编码","link":"#二、汉字进行url编码","children":[]},{"level":2,"title":"三、url编码解析成汉字","slug":"三、url编码解析成汉字","link":"#三、url编码解析成汉字","children":[]},{"level":2,"title":"四、根据获取文件类型","slug":"四、根据获取文件类型","link":"#四、根据获取文件类型","children":[]},{"level":2,"title":"五、根据文件名或网络地址获取文件名称","slug":"五、根据文件名或网络地址获取文件名称","link":"#五、根据文件名或网络地址获取文件名称","children":[]}],"git":{"createdTime":1715220902000,"updatedTime":1715220902000,"contributors":[{"name":"goodCoffee","email":"41276330+Neumannzc@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.14,"words":342},"filePathRelative":"posts/backend/网络地址的使用.md","localizedDate":"2024年5月7日","excerpt":"<p>使用hutool工具包，通过图片的 <strong>网络地址</strong> 或 <strong>本地地址</strong> 对图片进行操作</p>\\n","autoDesc":true}');export{v as comp,g as data};
