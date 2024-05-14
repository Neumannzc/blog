import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as l,e as s,a as n,f as d}from"./app-D8xRifh2.js";const r={},t=n("p",null,"油猴是什么？😅",-1),a=n("p",null,"如何添加脚本？😂",-1),o=n("p",null,"为什么要分会顶部？🤣",-1),v=d(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// ==UserScript==
// @name         ToTop
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       JackMeng
// @match        http*://*
// @include      *
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @iconURL      https://www.cnblogs.com/favicon.ico
// @grant        none
// @run-at       document-end
// @noframes
// ==/UserScript==
//添加样式
function AddStyle()
{
var styleRule = $(\`&lt;style&gt;
.upShow {
position: fixed;
bottom: 6px;
right: 4px;
z-index: 1001;
cursor: pointer;
height: 35px;
width:  35px;
text-align: center;
line-height: 35px;
opacity: 0.8;
border-radius: 50%;/决定四角圆弧/
box-shadow: 0 2px 4px 1px rgba(0,0,0,.6);
background-color:red;
transition: all .4s ease;/延时变化/
display: flex;
align-items: center;
flex-direction: column;
}
.upShow:hover{background-color: #0dd;}
.upShow:hover .upArrow,
.upShow:hover .upArrow:before,
.upShow:hover .upArrow:after{border-color: #fff;}
.upArrow {
display: inline-block;
border-width: 2px 0 0 0;
border-color: #666;
border-style: solid;
font: normal normal normal 14px/1 FontAwesome;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
transition: all .4s ease;/*延时变化*/
background-color:transparent;
height: 16px;
width:  16px;
margin: 10px 0;
padding: 2px 0;

}
.upArrow:before{
content: &quot;&quot;;
display: inline-block;
height: 10px;
width:  10px;
transform: rotate(45deg);
border-width: 2px 0 0 2px;
border-color: #666;
border-style: solid;
}
.upArrow:after{
content: &quot;&quot;;
position: absolute;
display: inline-block;
height: 14px;
right:16px;
border-width: 0 0 0 2px;
border-color: #666;
border-style: solid;
}
&lt;/style&gt;\`).prependTo(&#39;html&#39;);
styleRule.attr(&#39;type&#39;, &#39;text/css&#39;);
styleRule.attr(&#39;id&#39;, &#39;arrowCss&#39;);
styleRule.append(&#39;#articleContentId{ color: red; }&#39;);
}
//给页面添加元素
function AddElem()
{
var toTop=$(&lt;span id=&quot;gotoTop&quot; class=&quot;upShow&quot; title=&quot;返回顶部&quot;&gt;           &lt;i class=&quot;upArrow&quot;&gt;&lt;/i&gt;        &lt;/span&gt;).prependTo($(&quot;body&quot;));
//toTop[0].onclick = ()=&gt;gotoTop(500);
//toTop[0].onclick = ()=&gt;{getBlogData(21);}

return toTop[0];

}
function getBlogData(num)
{
var host = window.location.host;
console.log(&quot;======================&quot;+num);
}
function bindEvent(obj,minHeight){
// 定义点击返回顶部图标后向上滚动的动画
$(&quot;#gotoTop&quot;).click(
    function(){
        $(&#39;html,body&#39;).animate({scrollTop:&#39;0px&#39;},&#39;slow&#39;);
    });

// 获取页面的最小高度，无传入值则默认为600像素
minHeight = minHeight ? minHeight : 600;

// 为窗口的scroll事件绑定处理函数
$(window).scroll(function(){
    // 获取窗口的滚动条的垂直滚动距离
    var sTop = $(window).scrollTop();
    // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
    if( sTop &gt; minHeight){
        $(&quot;#gotoTop&quot;).fadeIn(300);
    }else{
        $(&quot;#gotoTop&quot;).fadeOut(300);
    }
});

}
(function(){
&#39;use strict&#39;;
// Your code here...
if (window.top == window.self)
{
//插入样式
AddStyle();
//插入元素
var a = AddElem();
bindEvent(a,100);
}
})();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function c(u,m){return e(),l("div",null,[t,a,o,s(" more "),v])}const h=i(r,[["render",c],["__file","返回顶部（油猴脚本）.html.vue"]]),g=JSON.parse('{"path":"/posts/other/%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%EF%BC%88%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.html","title":"返回顶部（油猴脚本）","lang":"zh-CN","frontmatter":{"title":"返回顶部（油猴脚本）","date":"2024-05-10T00:00:00.000Z","icon":"seedling","category":["其他"],"tag":["脚本"],"order":105,"description":"油猴是什么？😅 如何添加脚本？😂 为什么要分会顶部？🤣","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/other/%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%EF%BC%88%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"返回顶部（油猴脚本）"}],["meta",{"property":"og:description","content":"油猴是什么？😅 如何添加脚本？😂 为什么要分会顶部？🤣"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-10T08:30:17.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"脚本"}],["meta",{"property":"article:published_time","content":"2024-05-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-10T08:30:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"返回顶部（油猴脚本）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-10T08:30:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[],"git":{"createdTime":1715329817000,"updatedTime":1715329817000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"posts/other/返回顶部（油猴脚本）.md","localizedDate":"2024年5月10日","excerpt":"<p>油猴是什么？😅</p>\\n<p>如何添加脚本？😂</p>\\n<p>为什么要分会顶部？🤣</p>\\n","autoDesc":true}');export{h as comp,g as data};
