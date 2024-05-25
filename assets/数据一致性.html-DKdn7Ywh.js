import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as d,e as n,a as t,b as e,f as o}from"./app-Db89Ugko.js";const i={},s=t("p",null,"缓存中的数据源来自于数据库，而数据库的数据是会发生变化的。",-1),l=t("p",null,[e("如果数据库中的数据发生变化，而缓存却没有同步，就会产生一致性问题，即 "),t("strong",null,"数据库"),e(" 中的数据和 "),t("strong",null,"缓存"),e(" 中的数据不一样")],-1),h=o('<h2 id="一、缓存更新策略" tabindex="-1"><a class="header-anchor" href="#一、缓存更新策略"><span>一、缓存更新策略</span></a></h2><ul><li>向redis中插入太多数据时，就会导致缓存中的数据过多，所以redis就会对部分数据进行更新，也叫淘汰。</li></ul><table><thead><tr><th>名称</th><th>说明</th><th>一致性</th><th>维护成本</th></tr></thead><tbody><tr><td>内存淘汰</td><td>不用自己维护，利用redis的内存淘汰机制，当内存不足时自动淘汰部分数据，下次查询时更新缓存</td><td>差</td><td>无</td></tr><tr><td>超时剔除</td><td>给缓存数据添加TTL时间，到期后自动删除缓存，下次查询时更新缓存</td><td>一般</td><td>低</td></tr><tr><td>主动更新</td><td>编写业务逻辑，再修改数据库的同时，更新缓存</td><td>好</td><td>高</td></tr></tbody></table><ul><li>同时，对于不同的业务场景，即不同的数据一致性要求，可以使用不同的策略</li></ul><table><thead><tr><th>场景</th><th>策略</th></tr></thead><tbody><tr><td>低一致性需求</td><td>使用内存淘汰机制</td></tr><tr><td>高一致性需求</td><td>主动更新，并以超时剔除作为兜底方案</td></tr></tbody></table><h2 id="二、解决方案" tabindex="-1"><a class="header-anchor" href="#二、解决方案"><span>二、解决方案</span></a></h2><h3 id="_2-1、目前已有方案" tabindex="-1"><a class="header-anchor" href="#_2-1、目前已有方案"><span>2.1、目前已有方案</span></a></h3><table><thead><tr><th>名称</th><th>操作者</th><th>描述</th></tr></thead><tbody><tr><td>Cache Aside Pattern</td><td>缓存调用者</td><td>缓存的使用者，在更新数据库的同时更新缓存</td></tr><tr><td>Read/Write Through Pattern</td><td>系统</td><td>缓存与数据库整合为一个服务，由服务来维护一致性。缓存的使用者调用该服务，无需关心缓存一致性问题</td></tr><tr><td>Write Behind Caching Pattern</td><td>其他线程</td><td>调用者只操作缓存，由其他线程异步的将缓存数据持久化到数据库，保证最终一致</td></tr></tbody></table><h3 id="_2-2、存在的问题" tabindex="-1"><a class="header-anchor" href="#_2-2、存在的问题"><span>2.2、存在的问题</span></a></h3><p>对于数据一致性，想要讨论出解决方案，应该先解决以下三个问题</p><h4 id="_1-删除缓存还是更新缓存" tabindex="-1"><a class="header-anchor" href="#_1-删除缓存还是更新缓存"><span>1）删除缓存还是更新缓存</span></a></h4><h4 id="_2-如何保证缓存与数据库的操作同时成功或失败" tabindex="-1"><a class="header-anchor" href="#_2-如何保证缓存与数据库的操作同时成功或失败"><span>2）如何保证缓存与数据库的操作同时成功或失败;</span></a></h4>',12);function c(p,m){return r(),d("div",null,[s,l,n(" more "),h])}const u=a(i,[["render",c],["__file","数据一致性.html.vue"]]),b=JSON.parse('{"path":"/posts/sql/redis/%E6%95%B0%E6%8D%AE%E4%B8%80%E8%87%B4%E6%80%A7.html","title":"数据一致性","lang":"zh-CN","frontmatter":{"title":"数据一致性","date":"2024-05-18T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis的概念"],"order":400,"description":"缓存中的数据源来自于数据库，而数据库的数据是会发生变化的。 如果数据库中的数据发生变化，而缓存却没有同步，就会产生一致性问题，即 数据库 中的数据和 缓存 中的数据不一样","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/%E6%95%B0%E6%8D%AE%E4%B8%80%E8%87%B4%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"数据一致性"}],["meta",{"property":"og:description","content":"缓存中的数据源来自于数据库，而数据库的数据是会发生变化的。 如果数据库中的数据发生变化，而缓存却没有同步，就会产生一致性问题，即 数据库 中的数据和 缓存 中的数据不一样"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-25T03:08:32.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis的概念"}],["meta",{"property":"article:published_time","content":"2024-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-25T03:08:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据一致性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-25T03:08:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、缓存更新策略","slug":"一、缓存更新策略","link":"#一、缓存更新策略","children":[]},{"level":2,"title":"二、解决方案","slug":"二、解决方案","link":"#二、解决方案","children":[{"level":3,"title":"2.1、目前已有方案","slug":"_2-1、目前已有方案","link":"#_2-1、目前已有方案","children":[]},{"level":3,"title":"2.2、存在的问题","slug":"_2-2、存在的问题","link":"#_2-2、存在的问题","children":[]}]}],"git":{"createdTime":1716606512000,"updatedTime":1716606512000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.78,"words":533},"filePathRelative":"posts/sql/redis/数据一致性.md","localizedDate":"2024年5月18日","excerpt":"<p>缓存中的数据源来自于数据库，而数据库的数据是会发生变化的。</p>\\n<p>如果数据库中的数据发生变化，而缓存却没有同步，就会产生一致性问题，即 <strong>数据库</strong> 中的数据和 <strong>缓存</strong> 中的数据不一样</p>\\n","autoDesc":true}');export{u as comp,b as data};
