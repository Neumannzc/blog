import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t,a as e,f as p}from"./app-W3RIlOde.js";const o={},c=e("p",null,"菜鸟的进阶之码，你确定不收藏一下 💯 💯 💯",-1),l=p(`<h2 id="一、页面跳转" tabindex="-1"><a class="header-anchor" href="#一、页面跳转"><span>一、页面跳转</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">skip</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> id <span class="token operator">=</span> data<span class="token punctuation">.</span>id <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> type <span class="token operator">=</span> data<span class="token punctuation">.</span>type <span class="token operator">||</span> <span class="token number">0</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/skip/path&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">id</span><span class="token operator">:</span> id<span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、列表-根据对应关系-回显" tabindex="-1"><a class="header-anchor" href="#二、列表-根据对应关系-回显"><span>二、列表，根据对应关系，回显</span></a></h2><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>类型<span class="token punctuation">&quot;</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scope<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list.some(item =&gt; item.typeId == scope.row.typeId)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			{{ list.find(item =&gt; item.typeId == scope.row.typeId).typeName }}
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、保留两位小数" tabindex="-1"><a class="header-anchor" href="#三、保留两位小数"><span>三、保留两位小数</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、js判断数据的类型是否是数字" tabindex="-1"><a class="header-anchor" href="#四、js判断数据的类型是否是数字"><span>四、js判断数据的类型是否是数字</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 方式一：</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;数据的类型是数字&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 方式二：</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、判断数组中是否包含某数据" tabindex="-1"><a class="header-anchor" href="#五、判断数组中是否包含某数据"><span>五、判断数组中是否包含某数据</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 判断数组中是否包含特定的值</span>
<span class="token keyword">const</span> value1Exists <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 true</span>
<span class="token keyword">const</span> value2Exists <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回 false</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value1Exists<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value2Exists<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、在路径传参中-拼接-v-for-中的-item" tabindex="-1"><a class="header-anchor" href="#六、在路径传参中-拼接-v-for-中的-item"><span>六、在路径传参中，拼接 <code>v-for</code> 中的 <code>item</code></span></a></h2><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item , index) in names<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 方式一：使用模板字符串的方式 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> \`/路径?key=\${item}\` <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
	<span class="token comment">&lt;!-- 方式二：使用拼接运算符 + 的方式 --&gt;</span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> <span class="token punctuation">&#39;</span>/路径?key=&#39; + item <span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function i(u,r){return a(),s("div",null,[c,t(" more "),l])}const m=n(o,[["render",i],["__file","开发示例.html.vue"]]),v=JSON.parse('{"path":"/posts/frontend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html","title":"前端开发示例","lang":"zh-CN","frontmatter":{"title":"前端开发示例","date":"2024-05-09T00:00:00.000Z","icon":"rocket","category":["前端"],"tag":["开发示例"],"order":100,"description":"菜鸟的进阶之码，你确定不收藏一下 💯 💯 💯","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/frontend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"前端开发示例"}],["meta",{"property":"og:description","content":"菜鸟的进阶之码，你确定不收藏一下 💯 💯 💯"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T09:37:40.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"开发示例"}],["meta",{"property":"article:published_time","content":"2024-05-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T09:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"前端开发示例\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-09T09:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、页面跳转","slug":"一、页面跳转","link":"#一、页面跳转","children":[]},{"level":2,"title":"二、列表，根据对应关系，回显","slug":"二、列表-根据对应关系-回显","link":"#二、列表-根据对应关系-回显","children":[]},{"level":2,"title":"三、保留两位小数","slug":"三、保留两位小数","link":"#三、保留两位小数","children":[]},{"level":2,"title":"四、js判断数据的类型是否是数字","slug":"四、js判断数据的类型是否是数字","link":"#四、js判断数据的类型是否是数字","children":[]},{"level":2,"title":"五、判断数组中是否包含某数据","slug":"五、判断数组中是否包含某数据","link":"#五、判断数组中是否包含某数据","children":[]},{"level":2,"title":"六、在路径传参中，拼接 v-for 中的 item","slug":"六、在路径传参中-拼接-v-for-中的-item","link":"#六、在路径传参中-拼接-v-for-中的-item","children":[]}],"git":{"createdTime":1715238101000,"updatedTime":1715247460000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":2}]},"readingTime":{"minutes":0.98,"words":295},"filePathRelative":"posts/frontend/开发示例.md","localizedDate":"2024年5月9日","excerpt":"<p>菜鸟的进阶之码，你确定不收藏一下 💯 💯 💯</p>\\n","autoDesc":true}');export{m as comp,v as data};
