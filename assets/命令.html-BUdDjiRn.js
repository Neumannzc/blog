import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as n,b as a,d as l,o as t}from"./app-Bv_Qqef6.js";const d={};function r(c,e){return t(),s("div",null,[e[0]||(e[0]=n("p",null,"这些linux运维命令，你都知道吗 🧛‍♂️ 🧛‍♂️ 🧛‍♂️",-1)),a(" more "),e[1]||(e[1]=l(`<h2 id="一、防火墙" tabindex="-1"><a class="header-anchor" href="#一、防火墙"><span>一、防火墙</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 查看防火墙状态
firewall-cmd --state

// 查看已开启的端口信息
firewall-cmd --list-ports

// 查看状态
systemctl status firewalld.service

// 停止命令
systemctl stop firewalld.service

// 启动命令
systemctl start firewalld.service

// 重启防火墙
systemctl restart firewalld.service
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、开放端口" tabindex="-1"><a class="header-anchor" href="#二、开放端口"><span>二、开放端口</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 开放端口
firewall-cmd --zone=public --add-port=80/tcp --permanent

// 重启防火墙
systemctl restart firewalld.service
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、关闭端口" tabindex="-1"><a class="header-anchor" href="#三、关闭端口"><span>三、关闭端口</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 使用 netstat 命令列出占用 8801 端口的进程
sudo netstat -tunlp | grep 8801

// 杀死占用 8801 端口的进程，其中 PID 为进程 ID
sudo kill &lt;PID&gt;

// 关闭 8801 端口
sudo firewall-cmd --zone=public --remove-port=8801/tcp --permanent

// 重启防火墙
systemctl restart firewalld.service
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、docker" tabindex="-1"><a class="header-anchor" href="#四、docker"><span>四、docker</span></a></h2><h3 id="_4-1、运行mimio" tabindex="-1"><a class="header-anchor" href="#_4-1、运行mimio"><span>4.1、运行mimio</span></a></h3><ul><li>9000端口控制台 9090端口文件上传下载</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 运行docker
docker run -p 9000:9000 -p 9090:9090 --name=minio --restart=always -d --privileged=true -e &quot;MINIO_ROOT_USER=admin&quot; -e &quot;MINIO_ROOT_PASSWORD=admin123456&quot; -v /mydata/minio/data:/data -v /mydata/minio/config:/root/.minio  minio/minio server /data --console-address &quot;:9000&quot; --address &quot;:9090&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、运行mysql" tabindex="-1"><a class="header-anchor" href="#_4-2、运行mysql"><span>4.2、运行mysql</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 创建文件夹
mkdir mydata

// 创建 mydata/mysql/conf、mydata/mysql/logs、mydata/mysql/mysql文件夹
	
// 运行docker
docker run  --name mysql --restart=always -d -p 3306:3306 -v /mydata/mysql/conf:/etc/mysql/conf.d -v /mydata/mysql/logs:/var/log/mysql -v /mydata/mysql/mysql:/var/lib/mysql -e  MYSQL_ROOT_PASSWORD=ja8wnBVScthk mysql:5.7

// 修改远程密码	
set password for &#39;root&#39; = password(&#39;12345&#39;);

// 修改本地密码
set password for &#39;root&#39;@&#39;localhost&#39; = password(&#39;12345&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3、运行nacos" tabindex="-1"><a class="header-anchor" href="#_4-3、运行nacos"><span>4.3、运行nacos</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 运行docker
docker run --env MODE=standalone --name nacos --restart=always  -d -p 8848:8848 nacos/nacos-server:1.2.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4、运行redis" tabindex="-1"><a class="header-anchor" href="#_4-4、运行redis"><span>4.4、运行redis</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 运行docker
docker run --rm -d --name redis -p 6379:6379 redis --requirepass &quot;123456&quot;
	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16))])}const m=i(d,[["render",r],["__file","命令.html.vue"]]),u=JSON.parse('{"path":"/posts/server/centos/%E5%91%BD%E4%BB%A4.html","title":"命令","lang":"zh-CN","frontmatter":{"title":"命令","date":"2024-05-10T00:00:00.000Z","icon":"user-secret","category":["服务器"],"tag":["centos"],"order":200,"description":"这些linux运维命令，你都知道吗 🧛‍♂️ 🧛‍♂️ 🧛‍♂️","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/server/centos/%E5%91%BD%E4%BB%A4.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"命令"}],["meta",{"property":"og:description","content":"这些linux运维命令，你都知道吗 🧛‍♂️ 🧛‍♂️ 🧛‍♂️"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-14T09:34:24.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:published_time","content":"2024-05-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-14T09:34:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"命令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-14T09:34:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、防火墙","slug":"一、防火墙","link":"#一、防火墙","children":[]},{"level":2,"title":"二、开放端口","slug":"二、开放端口","link":"#二、开放端口","children":[]},{"level":2,"title":"三、关闭端口","slug":"三、关闭端口","link":"#三、关闭端口","children":[]},{"level":2,"title":"四、docker","slug":"四、docker","link":"#四、docker","children":[{"level":3,"title":"4.1、运行mimio","slug":"_4-1、运行mimio","link":"#_4-1、运行mimio","children":[]},{"level":3,"title":"4.2、运行mysql","slug":"_4-2、运行mysql","link":"#_4-2、运行mysql","children":[]},{"level":3,"title":"4.3、运行nacos","slug":"_4-3、运行nacos","link":"#_4-3、运行nacos","children":[]},{"level":3,"title":"4.4、运行redis","slug":"_4-4、运行redis","link":"#_4-4、运行redis","children":[]}]}],"git":{"createdTime":1715329817000,"updatedTime":1715679264000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.29,"words":387},"filePathRelative":"posts/server/centos/命令.md","localizedDate":"2024年5月10日","excerpt":"<p>这些linux运维命令，你都知道吗 🧛‍♂️ 🧛‍♂️ 🧛‍♂️</p>\\n","autoDesc":true}');export{m as comp,u as data};
