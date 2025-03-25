import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as r,b as a,d as n,o as i}from"./app-C5h456xr.js";const l={};function s(o,t){return i(),d("div",null,[t[0]||(t[0]=r("p",null,"Linux 文件系统采用层次化的目录结构，每个目录都有特定的用途。",-1)),a(" more "),t[1]||(t[1]=n(`<h2 id="_1-根目录" tabindex="-1"><a class="header-anchor" href="#_1-根目录"><span>1. 根目录 (/)</span></a></h2><ul><li>文件系统的起点，所有其他目录和文件都位于根目录之下。</li></ul><h2 id="_2-系统核心目录" tabindex="-1"><a class="header-anchor" href="#_2-系统核心目录"><span>2. 系统核心目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/bin</td><td>存放系统的基本命令（如 ls, cp, mkdir 等），所有用户都可以使用。</td></tr><tr><td>/boot</td><td>包含启动 Linux 所需的文件（如内核文件 vmlinuz 和引导加载程序 GRUB）。</td></tr><tr><td>/dev</td><td>包含设备文件（如硬盘 /dev/sda、终端 /dev/tty 等）。</td></tr><tr><td>/etc</td><td>存放系统的配置文件（如网络配置、用户配置等）。</td></tr><tr><td>/lib</td><td>存放系统共享库文件（如 C 标准库 libc.so）。</td></tr><tr><td>/media</td><td>用于挂载可移动设备（如 U 盘、光盘）。</td></tr><tr><td>/mnt</td><td>临时挂载文件系统的目录。</td></tr><tr><td>/opt</td><td>用于安装第三方软件（如 Oracle、Google Chrome）。</td></tr><tr><td>/proc</td><td>虚拟文件系统，包含系统运行时的进程和内核信息。</td></tr><tr><td>/root</td><td>超级用户（root）的主目录。</td></tr><tr><td>/run</td><td>存放系统运行时的临时文件（如 PID 文件、套接字文件）。</td></tr><tr><td>/sbin</td><td>存放系统管理命令（如 fdisk, ifconfig），通常只有 root 用户可以使用。</td></tr><tr><td>/srv</td><td>存放服务相关的数据（如网站数据、FTP 数据）。</td></tr><tr><td>/sys</td><td>虚拟文件系统，用于与内核交互，管理设备和驱动程序。</td></tr><tr><td>/tmp</td><td>存放临时文件，系统重启后文件可能会被删除。</td></tr><tr><td>/usr</td><td>存放用户安装的应用程序和文件（如用户命令、库文件、文档等）。</td></tr><tr><td>/var</td><td>存放经常变化的文件（如日志文件、缓存文件、邮件等）。</td></tr></tbody></table><h2 id="_3-用户相关目录" tabindex="-1"><a class="header-anchor" href="#_3-用户相关目录"><span>3. 用户相关目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/home</td><td>普通用户的主目录，每个用户有一个独立的子目录（如 /home/username）。</td></tr><tr><td>/root</td><td>超级用户（root）的主目录。</td></tr></tbody></table><h2 id="_4-运行时目录" tabindex="-1"><a class="header-anchor" href="#_4-运行时目录"><span>4. 运行时目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/proc</td><td>虚拟文件系统，包含进程和系统信息（如 /proc/cpuinfo 查看 CPU 信息）。</td></tr><tr><td>/sys</td><td>虚拟文件系统，用于管理设备和内核参数。</td></tr><tr><td>/run</td><td>存放系统运行时的临时文件（如 PID 文件、锁文件）。</td></tr></tbody></table><h2 id="_5-应用程序目录" tabindex="-1"><a class="header-anchor" href="#_5-应用程序目录"><span>5. 应用程序目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/usr/bin</td><td>存放用户安装的命令（如 gcc, python）。</td></tr><tr><td>/usr/lib</td><td>存放用户安装的共享库文件。</td></tr><tr><td>/usr/local</td><td>存放本地安装的软件（通常由管理员手动安装）。</td></tr><tr><td>/usr/share</td><td>存放共享数据（如文档、字体、图标等）。</td></tr></tbody></table><h2 id="_6-日志和缓存目录" tabindex="-1"><a class="header-anchor" href="#_6-日志和缓存目录"><span>6. 日志和缓存目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/var/log</td><td>存放系统日志文件（如 /var/log/syslog, /var/log/auth.log）。</td></tr><tr><td>/var/cache</td><td>存放缓存数据（如软件包缓存）。</td></tr><tr><td>/var/spool</td><td>存放待处理的任务数据（如邮件、打印任务）。</td></tr></tbody></table><h2 id="_7-特殊目录" tabindex="-1"><a class="header-anchor" href="#_7-特殊目录"><span>7. 特殊目录</span></a></h2><table><thead><tr><th>目录</th><th>说明</th></tr></thead><tbody><tr><td>/lost+found</td><td>用于存放文件系统修复时恢复的丢失文件。</td></tr><tr><td>/snap</td><td>存放 Snap包管理工具安装的应用程序。</td></tr></tbody></table><h2 id="_8-目录结构示例" tabindex="-1"><a class="header-anchor" href="#_8-目录结构示例"><span>8. 目录结构示例</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/
├── bin
├── boot
├── dev
├── etc
├── home
│   └── username
├── lib
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin
├── srv
├── sys
├── tmp
├── usr
│   ├── bin
│   ├── lib
│   ├── local
│   └── share
└── var
    ├── log
    ├── cache
    └── spool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16))])}const m=e(l,[["render",s],["__file","目录说明.html.vue"]]),v=JSON.parse('{"path":"/posts/server/%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E.html","title":"目录说明","lang":"zh-CN","frontmatter":{"title":"目录说明","date":"2025-02-25T00:00:00.000Z","icon":"leaf","tag":["linux运维"],"star":true,"order":200,"description":"Linux 文件系统采用层次化的目录结构，每个目录都有特定的用途。","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/server/%E7%9B%AE%E5%BD%95%E8%AF%B4%E6%98%8E.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"目录说明"}],["meta",{"property":"og:description","content":"Linux 文件系统采用层次化的目录结构，每个目录都有特定的用途。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T13:21:51.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"linux运维"}],["meta",{"property":"article:published_time","content":"2025-02-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T13:21:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"目录说明\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-02-25T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T13:21:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"1. 根目录 (/)","slug":"_1-根目录","link":"#_1-根目录","children":[]},{"level":2,"title":"2. 系统核心目录","slug":"_2-系统核心目录","link":"#_2-系统核心目录","children":[]},{"level":2,"title":"3. 用户相关目录","slug":"_3-用户相关目录","link":"#_3-用户相关目录","children":[]},{"level":2,"title":"4. 运行时目录","slug":"_4-运行时目录","link":"#_4-运行时目录","children":[]},{"level":2,"title":"5. 应用程序目录","slug":"_5-应用程序目录","link":"#_5-应用程序目录","children":[]},{"level":2,"title":"6. 日志和缓存目录","slug":"_6-日志和缓存目录","link":"#_6-日志和缓存目录","children":[]},{"level":2,"title":"7. 特殊目录","slug":"_7-特殊目录","link":"#_7-特殊目录","children":[]},{"level":2,"title":"8. 目录结构示例","slug":"_8-目录结构示例","link":"#_8-目录结构示例","children":[]}],"git":{"createdTime":1740662511000,"updatedTime":1740662511000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":2.45,"words":735},"filePathRelative":"posts/server/目录说明.md","localizedDate":"2025年2月25日","excerpt":"<p>Linux 文件系统采用层次化的目录结构，每个目录都有特定的用途。</p>\\n","autoDesc":true}');export{m as comp,v as data};
