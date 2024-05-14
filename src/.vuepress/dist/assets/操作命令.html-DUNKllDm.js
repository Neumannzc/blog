import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as n,a as t,f as i}from"./app-W3RIlOde.js";const r={},l=t("p",null,"redis 的 ▶️ ⏹️ 等命令",-1),d=i(`<h2 id="一、允许访问的地址" tabindex="-1"><a class="header-anchor" href="#一、允许访问的地址"><span>一、允许访问的地址</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 允许访问的地址，默认是127.0.0.1，会导致只能在本地访问。</span>
<span class="token comment"># 修改为0.0.0.0则可以在任意IP访问，生产环境不要设置为0.0.0.0</span>
<span class="token key attr-name">bind</span> <span class="token value attr-value">0.0.0.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、守护进程" tabindex="-1"><a class="header-anchor" href="#二、守护进程"><span>二、守护进程</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 守护进程，修改为yes后即可后台运行</span>
<span class="token key attr-name">daemonize</span> <span class="token value attr-value">yes </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、密码" tabindex="-1"><a class="header-anchor" href="#三、密码"><span>三、密码</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 密码，设置后访问Redis必须输入密码</span>
<span class="token key attr-name">requirepass</span> <span class="token value attr-value">123321</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、端口" tabindex="-1"><a class="header-anchor" href="#四、端口"><span>四、端口</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 监听的端口</span>
<span class="token key attr-name">port</span> <span class="token value attr-value">6379</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、工作目录" tabindex="-1"><a class="header-anchor" href="#五、工作目录"><span>五、工作目录</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 工作目录，默认是当前目录，也就是运行redis-server时的命令，日志、持久化等文件会保存在这个目录</span>
<span class="token key attr-name">dir</span> <span class="token value attr-value">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、数据库数量" tabindex="-1"><a class="header-anchor" href="#六、数据库数量"><span>六、数据库数量</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 数据库数量，设置为1，代表只使用1个库</span>
<span class="token comment"># 默认有16个库，编号0~15</span>
<span class="token key attr-name">databases</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、最大内存" tabindex="-1"><a class="header-anchor" href="#七、最大内存"><span>七、最大内存</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 设置redis能够使用的最大内存</span>
<span class="token key attr-name">maxmemory</span> <span class="token value attr-value">512mb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、日志文件" tabindex="-1"><a class="header-anchor" href="#八、日志文件"><span>八、日志文件</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># 日志文件，默认为空，不记录日志，可以指定日志文件名</span>
<span class="token key attr-name">logfile</span> <span class="token value attr-value">&quot;redis.log&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function p(o,c){return a(),s("div",null,[l,n(" more "),d])}const v=e(r,[["render",p],["__file","操作命令.html.vue"]]),h=JSON.parse('{"path":"/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html","title":"操作命令","lang":"zh-CN","frontmatter":{"title":"操作命令","date":"2024-05-11T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis操作"],"order":100,"description":"redis 的 ▶️ ⏹️ 等命令","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"操作命令"}],["meta",{"property":"og:description","content":"redis 的 ▶️ ⏹️ 等命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis操作"}],["meta",{"property":"article:published_time","content":"2024-05-11T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-11T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、允许访问的地址","slug":"一、允许访问的地址","link":"#一、允许访问的地址","children":[]},{"level":2,"title":"二、守护进程","slug":"二、守护进程","link":"#二、守护进程","children":[]},{"level":2,"title":"三、密码","slug":"三、密码","link":"#三、密码","children":[]},{"level":2,"title":"四、端口","slug":"四、端口","link":"#四、端口","children":[]},{"level":2,"title":"五、工作目录","slug":"五、工作目录","link":"#五、工作目录","children":[]},{"level":2,"title":"六、数据库数量","slug":"六、数据库数量","link":"#六、数据库数量","children":[]},{"level":2,"title":"七、最大内存","slug":"七、最大内存","link":"#七、最大内存","children":[]},{"level":2,"title":"八、日志文件","slug":"八、日志文件","link":"#八、日志文件","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"posts/sql/redis/操作命令.md","localizedDate":"2024年5月11日","excerpt":"<p>redis 的 ▶️ ⏹️ 等命令</p>\\n","autoDesc":true}');export{v as comp,h as data};
