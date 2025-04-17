import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as s,b as n,d as r,o as l}from"./app-BJPS0yVJ.js";const o={};function i(d,e){return l(),a("div",null,[e[0]||(e[0]=s("p",null,"linux中，图标也不能乱七八糟啊",-1)),n(" more "),e[1]||(e[1]=r(`<h2 id="一-配置说明" tabindex="-1"><a class="header-anchor" href="#一-配置说明"><span>一 配置说明</span></a></h2><ul><li>核心字段（必填）​​</li></ul><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>[Desktop Entry]</td><td>​​文件头​​，表示这是一个桌面入口文件（必须放在首行）。</td></tr><tr><td>Name</td><td>​​应用名称​​（显示在菜单/启动器中）<br>如 Name=Cursor。</td></tr><tr><td>Exec</td><td>​​可执行命令​​（启动应用的命令）<br>支持参数：%f（单个文件）、%F（多个文件）、%u（URL）、%U（多个URL）。<p>例：Exec=/opt/cursor/cursor.AppImage --no-sandbox %U</p></td></tr><tr><td>Type</td><td>​​类型​​，通常是：<br>- Application（普通应用）<br>- Link（快捷方式）<br>- Directory（目录）。</td></tr></tbody></table><ul><li>常用字段（推荐）​​</li></ul><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Icon</td><td>​​图标路径​​（支持 .png/.svg/.xpm 或主题图标名）<br>如：Icon=/opt/cursor/cursor.png 或 Icon=cursor。</td></tr><tr><td>Categories ​</td><td>​应用分类​​（用于菜单归类），多个分类用分号分隔。<br>常见分类：Development、IDE、Utility、Office、Game。<br>例：Categories=Development;IDE;</td></tr><tr><td>Terminal ​</td><td>​是否在终端中运行​​：<br>- true（适用于命令行工具）<br>- false（默认，图形界面应用）。</td></tr><tr><td>StartupWMClass ​</td><td>​窗口类名​​（确保应用窗口与启动器关联），通过 xprop WM_CLASS 获取。<br>例：StartupWMClass=Cursor</td></tr></tbody></table><ul><li>​​可选字段​​</li></ul><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td>Comment</td><td>应用描述（鼠标悬停时显示）<br>如 Comment=An AI-powered code editor。</td></tr><tr><td>Keywords</td><td>搜索关键词（分号分隔）<br>如 Keywords=code;editor;AI;。</td></tr><tr><td>MimeType</td><td>关联的文件类型<br>如 MimeType=text/x-python;text/x-c++;。</td></tr><tr><td>NoDisplay</td><td>是否隐藏：true（不显示在菜单中）或 false（默认显示）。</td></tr><tr><td>Hidden</td><td>已废弃，改用 NoDisplay。</td></tr><tr><td>OnlyShowIn/NotShowIn</td><td>限制显示的桌面环境（如 OnlyShowIn=GNOME;KDE;）。</td></tr></tbody></table><h2 id="二-示例" tabindex="-1"><a class="header-anchor" href="#二-示例"><span>二 示例</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Desktop Entry<span class="token punctuation">]</span>
<span class="token assign-left variable">Name</span><span class="token operator">=</span>Cursor
<span class="token assign-left variable">Exec</span><span class="token operator">=</span>/opt/cursor/Cursor.AppImage --no-sandbox %U
<span class="token assign-left variable">Icon</span><span class="token operator">=</span>cursor
<span class="token assign-left variable">Type</span><span class="token operator">=</span>Application
<span class="token assign-left variable">Categories</span><span class="token operator">=</span>Development<span class="token punctuation">;</span>IDE<span class="token punctuation">;</span>Programming<span class="token punctuation">;</span>
<span class="token assign-left variable">StartupWMClass</span><span class="token operator">=</span>Cursor
<span class="token assign-left variable">Terminal</span><span class="token operator">=</span>false
<span class="token assign-left variable">Comment</span><span class="token operator">=</span>An AI-powered code editor
<span class="token assign-left variable">Keywords</span><span class="token operator">=</span>code<span class="token punctuation">;</span>editor<span class="token punctuation">;</span>AI<span class="token punctuation">;</span>
<span class="token assign-left variable">MimeType</span><span class="token operator">=</span>text/x-python<span class="token punctuation">;</span>text/x-c++<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-注意事项" tabindex="-1"><a class="header-anchor" href="#三-注意事项"><span>三 注意事项</span></a></h2><h3 id="_1-文件路径" tabindex="-1"><a class="header-anchor" href="#_1-文件路径"><span>1 文件路径</span></a></h3><ul><li>用户级：<code>~/.local/share/applications/</code>（仅当前用户可见）</li><li>系统级：<code>/usr/share/applications/</code>（所有用户可见）。</li></ul><h3 id="_2-文件权限" tabindex="-1"><a class="header-anchor" href="#_2-文件权限"><span>2 文件权限</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x /opt/cursor/cursor.AppImage  <span class="token comment"># 确保可执行</span>
<span class="token function">chmod</span> <span class="token number">644</span> ~/.local/share/applications/cursor.desktop  <span class="token comment"># 桌面文件无需可执行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-验证有效性" tabindex="-1"><a class="header-anchor" href="#_3-验证有效性"><span>3 验证有效性</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>desktop-file-validate cursor.desktop  <span class="token comment"># 检查语法错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-更新菜单" tabindex="-1"><a class="header-anchor" href="#_4-更新菜单"><span>4 更新菜单</span></a></h3><p>修改后运行以下命令生效</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>update-desktop-database ~/.local/share/applications
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19))])}const u=t(o,[["render",i],["__file","图标管理.html.vue"]]),h=JSON.parse('{"path":"/posts/server/ubuntu/%E5%9B%BE%E6%A0%87%E7%AE%A1%E7%90%86.html","title":"图标管理","lang":"zh-CN","frontmatter":{"title":"图标管理","date":"2025-03-27T00:00:00.000Z","icon":"seedling","category":["其他"],"tag":["脚本"],"order":220,"description":"linux中，图标也不能乱七八糟啊","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/server/ubuntu/%E5%9B%BE%E6%A0%87%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"图标管理"}],["meta",{"property":"og:description","content":"linux中，图标也不能乱七八糟啊"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-04-17T01:16:20.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"脚本"}],["meta",{"property":"article:published_time","content":"2025-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-04-17T01:16:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图标管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2025-04-17T01:16:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一 配置说明","slug":"一-配置说明","link":"#一-配置说明","children":[]},{"level":2,"title":"二 示例","slug":"二-示例","link":"#二-示例","children":[]},{"level":2,"title":"三 注意事项","slug":"三-注意事项","link":"#三-注意事项","children":[{"level":3,"title":"1 文件路径","slug":"_1-文件路径","link":"#_1-文件路径","children":[]},{"level":3,"title":"2 文件权限","slug":"_2-文件权限","link":"#_2-文件权限","children":[]},{"level":3,"title":"3 验证有效性","slug":"_3-验证有效性","link":"#_3-验证有效性","children":[]},{"level":3,"title":"4 更新菜单","slug":"_4-更新菜单","link":"#_4-更新菜单","children":[]}]}],"git":{"createdTime":1744852580000,"updatedTime":1744852580000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":509},"filePathRelative":"posts/server/ubuntu/图标管理.md","localizedDate":"2025年3月27日","excerpt":"<p>linux中，图标也不能乱七八糟啊</p>\\n","autoDesc":true}');export{u as comp,h as data};
