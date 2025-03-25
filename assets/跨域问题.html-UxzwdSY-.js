import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as s,b as p,d as o,e as a,o as c}from"./app-C5h456xr.js";const i={};function l(u,n){return c(),e("div",null,[n[0]||(n[0]=s("p",null,[a("安装"),s("code",null,"axios"),a("后, 访问服务失败, 提示CORS")],-1)),p(" more "),n[1]||(n[1]=o(`<h2 id="一、前端的配置" tabindex="-1"><a class="header-anchor" href="#一、前端的配置"><span>一、前端的配置</span></a></h2><p>在vue项目中进行配置, 从而使 <code>/api</code> 开头的请求都会被代理到制定的域名, 从而避免跨域问题</p><h3 id="_1-1-在-vue-config-js-文件中添加如下配置" tabindex="-1"><a class="header-anchor" href="#_1-1-在-vue-config-js-文件中添加如下配置"><span>1.1 在 <code>vue.config.js</code> 文件中添加如下配置</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">&#39;http://your-api-server.com&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 目标接口的域名</span>
        <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否跨域</span>
        <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 重写路径，去掉 \`/api\` 前缀</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-在-axios-的请求中-需要使用-api-作为前缀" tabindex="-1"><a class="header-anchor" href="#_1-2-在-axios-的请求中-需要使用-api-作为前缀"><span>1.2 在 <code>axios</code> 的请求中, 需要使用 <code>/api</code> 作为前缀</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api/some-endpoint&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-在后端配置" tabindex="-1"><a class="header-anchor" href="#二-在后端配置"><span>二. 在后端配置</span></a></h2><h3 id="_2-1-添加全局配置" tabindex="-1"><a class="header-anchor" href="#_2-1-添加全局配置"><span>2.1 添加全局配置</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CorsRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:80&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 明确指定允许的域名</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;DELETE&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// 允许凭证</span>
                <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注:</p><ul><li><ol><li>如果不需要凭证（如 Cookies 或 Authorization 头），可以将 <code>allowCredentials</code> 设置为 <code>false</code></li></ol></li><li><ol start="2"><li>当使用 <code>.allowedOrigins(&quot;*&quot;)</code> 报错 <code>When allowCredentials is true, allowedOrigins cannot contain the special value &quot;*&quot; since that cannot be set on the &quot;Access-Control-Allow-Origin&quot; response header. To allow credentials to a set of origins, list them explicitly or consider using &quot;allowedOriginPatterns&quot; instead.] with root cause</code> , 则需要明确制定允许的域名</li></ol></li><li><ol start="3"><li>当已经重写过 <code>WebMvcConfigurer</code> 的其余实现类时, 再次添加 <code>CorsConfig</code> 可能会被覆盖而导致失效</li></ol></li><li><ol start="4"><li>快捷键 <code>ctrl + H</code> 查看结构层次, 确定 <code>WebMvcConfigurer</code> 是否已经被重写</li></ol></li></ul><h3 id="_2-2-使用-corsfilter" tabindex="-1"><a class="header-anchor" href="#_2-2-使用-corsfilter"><span>2.2 使用 <code>CorsFilter</code></span></a></h3><p>当需要更细粒度的控制时, 可以使用 <code>CorsFilter</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span></span><span class="token class-name">CorsConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>cors<span class="token punctuation">.</span></span><span class="token class-name">UrlBasedCorsConfigurationSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>filter<span class="token punctuation">.</span></span><span class="token class-name">CorsFilter</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">setAllowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 允许凭证</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">&quot;http://localhost:80&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 明确指定允许的域名</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-在-controller-上单独配置" tabindex="-1"><a class="header-anchor" href="#_2-3-在-controller-上单独配置"><span>2.3 在 <code>Controller</code> 上单独配置</span></a></h3><p>当只需要为某些 Controller 或方法配置 CORS，可以使用 <code>@CrossOrigin</code> 注解</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CrossOrigin</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@CrossOrigin</span><span class="token punctuation">(</span>origins <span class="token operator">=</span> <span class="token string">&quot;http://localhost:80&quot;</span><span class="token punctuation">,</span> allowCredentials <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 明确指定允许的域名</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/api/data&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello from Java backend!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-什么是跨域问题" tabindex="-1"><a class="header-anchor" href="#三-什么是跨域问题"><span>三. 什么是跨域问题</span></a></h2><p>跨域问题是在网络开发中，当一个网页或应用程序试图从一个域名（源）去访问另一个不同域名（目标）的数据或资源时，由于浏览器的同源策略限制而引发的问题。</p><p><strong>产生原因</strong></p><ul><li>同源策略：这是浏览器的一种安全机制，它要求浏览器在执行脚本、请求数据等操作时，确保请求的源（协议、域名、端口号）与当前页面的源相同。例如，https://www.example.com与https://www.example.net，虽然主域名相似，但仍是不同域名，若从前者页面去访问后者资源就会触发跨域问题。</li><li>实际应用需求：在现代 Web 开发中，经常会出现需要从不同域名获取数据或资源的情况。比如，一个网站可能需要调用第三方的 API 来获取数据，或者加载来自 CDN（内容分发网络）的静态资源等，这些操作很容易导致跨域请求的发生。</li></ul><p><strong>常见场景</strong></p><ul><li>AJAX 请求跨域：在使用 JavaScript 的 AJAX 技术向不同域名的服务器请求数据时，如果服务器没有进行相应的配置允许跨域访问，就会出现跨域问题。浏览器会阻止这种跨域的 AJAX 请求，并在控制台中显示错误信息。</li><li>跨域加载脚本、样式和图片：虽然浏览器通常允许跨域加载一些静态资源，如脚本、样式表和图片，但在某些情况下，如果服务器配置不当或者需要进行更精细的权限控制，也可能会出现跨域问题。比如，当尝试通过<code>&lt;script&gt;</code>标签加载一个来自不同域名的 JavaScript 文件时，如果目标服务器不允许跨域访问，可能会导致脚本无法加载或执行。</li><li>iframe 跨域：当在一个页面中使用<code>&lt;iframe&gt;</code>标签嵌入另一个不同域名的页面时，两个页面之间的交互可能会受到跨域限制。例如，父页面想要访问 iframe 子页面中的内容或执行子页面中的脚本，就可能会因为跨域问题而失败。</li></ul><p><strong>解决方法</strong></p><ul><li>CORS（跨域资源共享）：这是一种在服务器端进行配置的机制，通过在服务器响应头中添加特定的字段，来告诉浏览器哪些域名可以访问该服务器的资源，以及允许进行哪些类型的跨域操作。例如，服务器可以设置Access-Control-Allow-Origin头来指定允许访问的源。</li><li>JSONP（JSON with Padding）：利用<code>&lt;script&gt;</code>标签没有跨域限制的特点，通过动态创建<code>&lt;script&gt;</code>标签来请求数据，并在服务器端将数据以特定的格式返回，在客户端通过回调函数来处理返回的数据。不过，JSONP 只支持 GET 请求，有一定的局限性。</li><li>代理服务器：在客户端和目标服务器之间搭建一个代理服务器，客户端先将请求发送到代理服务器，代理服务器再将请求转发到目标服务器，并将目标服务器的响应返回给客户端。这样，对于客户端来说，所有的请求都是在同一个域名下进行的，从而避免了跨域问题。</li></ul><h2 id="四-为什么有浏览器的同源策略限制" tabindex="-1"><a class="header-anchor" href="#四-为什么有浏览器的同源策略限制"><span>四. 为什么有浏览器的同源策略限制</span></a></h2><p>浏览器的同源策略限制是一种重要的安全机制，主要是为了防止恶意网站窃取用户信息、执行恶意操作等</p><p><strong>保护用户隐私和数据安全</strong></p><ul><li>防止跨站脚本攻击（XSS）：恶意网站可能会利用同源策略的缺失，在用户访问的合法页面中注入恶意脚本。如果没有同源策略，这些脚本就能够获取用户在该页面上输入的敏感信息，如用户名、密码、信用卡号等，然后将这些信息发送给攻击者。例如，用户在银行网站登录后，如果另一个恶意网站可以随意访问银行网站的内容，就可能通过脚本获取用户的银行账户信息，导致用户资金被盗。</li><li>保护用户浏览历史等信息：同源策略可以防止一个网站随意读取用户在其他网站的浏览历史、Cookie 等信息。这些信息可能包含用户的个人偏好、登录状态等敏感内容，如果被恶意网站获取，可能会被用于精准的广告投放、用户画像分析，甚至是进一步的攻击。</li></ul><p><strong>防止数据篡改和恶意操作</strong></p><ul><li>防止跨站请求伪造（CSRF）：攻击者可能会构造一个恶意链接或页面，诱导用户点击。如果没有同源策略限制，当用户登录了某个网站（如购物网站、社交网站等）并处于登录状态时，点击了恶意链接，恶意网站可能会利用用户的登录状态，向目标网站发送请求，执行一些用户不知情的操作，如修改用户密码、发送恶意邮件、进行购物下单等。同源策略能够限制跨域请求，使得目标网站可以验证请求是否来自合法的源，从而防止此类攻击。</li><li>保护网站数据完整性：对于一些需要进行数据交互和操作的网站，如在线文档编辑、企业管理系统等，同源策略可以确保只有来自同一源的请求才能对数据进行修改和操作。否则，恶意网站可能会随意篡改这些数据，导致数据丢失、错误或混乱，影响网站的正常运行和用户的正常使用。</li></ul><p><strong>维护浏览器环境的稳定性和安全性</strong></p><ul><li>防止恶意脚本干扰：不同网站的脚本可能会有不同的功能和行为，如果没有同源策略，这些脚本可能会在用户不知情的情况下相互干扰、冲突，甚至破坏浏览器的正常运行。例如，一个网站的脚本可能会修改浏览器的全局变量或对象，影响其他网站脚本的正常执行，导致页面出现错误或异常。</li><li>限制代码执行权限：同源策略可以根据不同的源为脚本分配不同的权限和执行环境，使得脚本只能在其所属的源范围内进行操作，避免恶意脚本在浏览器中获得过高的权限，从而防止脚本对浏览器本身以及用户的设备进行恶意操作，如删除文件、获取系统信息等。</li></ul>`,33))])}const k=t(i,[["render",l],["__file","跨域问题.html.vue"]]),m=JSON.parse('{"path":"/posts/frontend/vue2/%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html","title":"跨域问题","lang":"zh-CN","frontmatter":{"title":"跨域问题","date":"2025-02-22T00:00:00.000Z","icon":"seedling","category":["vue2"],"tag":["学习笔记"],"order":300,"description":"安装axios后, 访问服务失败, 提示CORS","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/frontend/vue2/%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"跨域问题"}],["meta",{"property":"og:description","content":"安装axios后, 访问服务失败, 提示CORS"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-27T13:21:51.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2025-02-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-27T13:21:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-02-22T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-27T13:21:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、前端的配置","slug":"一、前端的配置","link":"#一、前端的配置","children":[{"level":3,"title":"1.1 在 vue.config.js 文件中添加如下配置","slug":"_1-1-在-vue-config-js-文件中添加如下配置","link":"#_1-1-在-vue-config-js-文件中添加如下配置","children":[]},{"level":3,"title":"1.2 在 axios 的请求中, 需要使用 /api 作为前缀","slug":"_1-2-在-axios-的请求中-需要使用-api-作为前缀","link":"#_1-2-在-axios-的请求中-需要使用-api-作为前缀","children":[]}]},{"level":2,"title":"二. 在后端配置","slug":"二-在后端配置","link":"#二-在后端配置","children":[{"level":3,"title":"2.1 添加全局配置","slug":"_2-1-添加全局配置","link":"#_2-1-添加全局配置","children":[]},{"level":3,"title":"2.2 使用 CorsFilter","slug":"_2-2-使用-corsfilter","link":"#_2-2-使用-corsfilter","children":[]},{"level":3,"title":"2.3 在 Controller 上单独配置","slug":"_2-3-在-controller-上单独配置","link":"#_2-3-在-controller-上单独配置","children":[]}]},{"level":2,"title":"三. 什么是跨域问题","slug":"三-什么是跨域问题","link":"#三-什么是跨域问题","children":[]},{"level":2,"title":"四. 为什么有浏览器的同源策略限制","slug":"四-为什么有浏览器的同源策略限制","link":"#四-为什么有浏览器的同源策略限制","children":[]}],"git":{"createdTime":1740662511000,"updatedTime":1740662511000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":7.47,"words":2242},"filePathRelative":"posts/frontend/vue2/跨域问题.md","localizedDate":"2025年2月22日","excerpt":"<p>安装<code>axios</code>后, 访问服务失败, 提示CORS</p>\\n","autoDesc":true}');export{k as comp,m as data};
