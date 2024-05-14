import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as n,a as t,f as i}from"./app-D8xRifh2.js";const l={},r=t("p",null,"redis 的 ▶️ ⏹️ 等命令",-1),d=i(`<h2 id="一、启动" tabindex="-1"><a class="header-anchor" href="#一、启动"><span>一、启动</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 进入redis安装目录 </span>
<span class="token builtin class-name">cd</span> redis的安装目录
<span class="token comment"># 启动</span>
redis-server redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、停止服务" tabindex="-1"><a class="header-anchor" href="#二、停止服务"><span>二、停止服务</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 利用redis-cli来执行 shutdown 命令，即可停止 Redis 服务，</span>
<span class="token comment"># 因为之前配置了密码，因此需要通过 -u 来指定密码</span>
redis-cli <span class="token parameter variable">-u</span> <span class="token number">123321</span> <span class="token function">shutdown</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、开机自启动" tabindex="-1"><a class="header-anchor" href="#三、开机自启动"><span>三、开机自启动</span></a></h2><h3 id="_3-1、新建一个系统服务文件" tabindex="-1"><a class="header-anchor" href="#_3-1、新建一个系统服务文件"><span>3.1、新建一个系统服务文件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/systemd/system/redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2、添加内容" tabindex="-1"><a class="header-anchor" href="#_3-2、添加内容"><span>3.2、添加内容</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>redis-server
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-server /usr/local/src/redis-6.2.6/redis.conf
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、重载系统服务" tabindex="-1"><a class="header-anchor" href="#_3-3、重载系统服务"><span>3.3、重载系统服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4、开机自启动" tabindex="-1"><a class="header-anchor" href="#_3-4、开机自启动"><span>3.4、开机自启动</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-5、可用操作" tabindex="-1"><a class="header-anchor" href="#_3-5、可用操作"><span>3.5、可用操作</span></a></h2><p>完成上述操作之后，可以用以下命令操作reids</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 启动</span>
systemctl start redis
<span class="token comment"># 停止</span>
systemctl stop redis
<span class="token comment"># 重启</span>
systemctl restart redis
<span class="token comment"># 查看状态</span>
systemctl status redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function c(o,p){return s(),a("div",null,[r,n(" more "),d])}const v=e(l,[["render",c],["__file","操作命令.html.vue"]]),h=JSON.parse('{"path":"/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html","title":"操作命令","lang":"zh-CN","frontmatter":{"title":"操作命令","date":"2024-05-11T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis操作"],"order":100,"description":"redis 的 ▶️ ⏹️ 等命令","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"操作命令"}],["meta",{"property":"og:description","content":"redis 的 ▶️ ⏹️ 等命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T09:34:24.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis操作"}],["meta",{"property":"article:published_time","content":"2024-05-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T09:34:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T09:34:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、启动","slug":"一、启动","link":"#一、启动","children":[]},{"level":2,"title":"二、停止服务","slug":"二、停止服务","link":"#二、停止服务","children":[]},{"level":2,"title":"三、开机自启动","slug":"三、开机自启动","link":"#三、开机自启动","children":[{"level":3,"title":"3.1、新建一个系统服务文件","slug":"_3-1、新建一个系统服务文件","link":"#_3-1、新建一个系统服务文件","children":[]},{"level":3,"title":"3.2、添加内容","slug":"_3-2、添加内容","link":"#_3-2、添加内容","children":[]},{"level":3,"title":"3.3、重载系统服务","slug":"_3-3、重载系统服务","link":"#_3-3、重载系统服务","children":[]},{"level":3,"title":"3.4、开机自启动","slug":"_3-4、开机自启动","link":"#_3-4、开机自启动","children":[]}]},{"level":2,"title":"3.5、可用操作","slug":"_3-5、可用操作","link":"#_3-5、可用操作","children":[]}],"git":{"createdTime":1715679264000,"updatedTime":1715679264000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"posts/sql/redis/操作命令.md","localizedDate":"2024年5月11日","excerpt":"<p>redis 的 ▶️ ⏹️ 等命令</p>\\n","autoDesc":true}');export{v as comp,h as data};
