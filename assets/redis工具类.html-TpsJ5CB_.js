import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as p,b as t,d as e,o as c}from"./app-nWwuVS9F.js";const o={};function l(i,n){return c(),a("div",null,[n[0]||(n[0]=p("p",null,"不用再找了，redis最全的工具类就在这里",-1)),t(" more "),n[1]||(n[1]=e(`<h2 id="一、工具类代码" tabindex="-1"><a class="header-anchor" href="#一、工具类代码"><span>一、工具类代码</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">BooleanUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ObjectUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">StrUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONObject</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">cn<span class="token punctuation">.</span>hutool<span class="token punctuation">.</span>json<span class="token punctuation">.</span></span><span class="token class-name">JSONUtil</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>logging<span class="token punctuation">.</span>log4j<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Strings</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demoproject<span class="token punctuation">.</span>constant<span class="token punctuation">.</span></span><span class="token class-name">CacheConstants</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demoproject<span class="token punctuation">.</span>entity<span class="token punctuation">.</span></span><span class="token class-name">RedisData</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>redis<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">StringRedisTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDateTime</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutorService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Executors</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Function</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Redis工具类
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisUtils</span> <span class="token punctuation">{</span>

  <span class="token comment">// 线程池</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ExecutorService</span> <span class="token constant">CACHE_REBUILD_EXECUTOR</span> <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Autowired</span>
  <span class="token keyword">private</span> <span class="token class-name">StringRedisTemplate</span> stringRedisTemplate<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 添加缓存前缀
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">addPrefix</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">PRO_NAME_PREFIX</span> <span class="token operator">+</span> key<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 判断key是否存在
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 以字符串格式缓存
   * 缓存对象的话，缓存json格式
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   * <span class="token keyword">@param</span> <span class="token parameter">value</span>
   * <span class="token keyword">@param</span> <span class="token parameter">time</span>
   * <span class="token keyword">@param</span> <span class="token parameter">unit</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCacheObject</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token class-name">Long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 缓存逻辑过期
   * 对象以json格式缓存
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>   缓存键，如果有id的话，需要传参时拼接上id
   * <span class="token keyword">@param</span> <span class="token parameter">value</span>
   * <span class="token keyword">@param</span> <span class="token parameter">time</span>
   * <span class="token keyword">@param</span> <span class="token parameter">unit</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setWithLogicalExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">,</span> <span class="token class-name">Long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token class-name">RedisData</span> redisData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      redisData<span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      redisData<span class="token punctuation">.</span><span class="token function">setExpireTime</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">plusSeconds</span><span class="token punctuation">(</span>unit<span class="token punctuation">.</span><span class="token function">toSeconds</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>redisData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 获取缓存
   * 如果获取的是对象的缓存，获取的是json格式
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCacheString</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 删除缓存
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      stringRedisTemplate<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 尝试获取锁
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token class-name">Boolean</span> tryLock <span class="token operator">=</span> stringRedisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setIfAbsent</span><span class="token punctuation">(</span><span class="token function">addPrefix</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token class-name">BooleanUtil</span><span class="token punctuation">.</span><span class="token function">isTrue</span><span class="token punctuation">(</span>tryLock<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 释放锁
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span>
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token class-name">String</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 缓存穿透 - 缓存空值
   *
   * <span class="token keyword">@param</span> <span class="token parameter">keyPrefix</span>  缓存前缀
   * <span class="token keyword">@param</span> <span class="token parameter">id</span>
   * <span class="token keyword">@param</span> <span class="token parameter">type</span>
   * <span class="token keyword">@param</span> <span class="token parameter">dbFallback</span>
   * <span class="token keyword">@param</span> <span class="token parameter">time</span>
   * <span class="token keyword">@param</span> <span class="token parameter">unit</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>R<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token class-name">R</span> <span class="token function">queryWithPassThrough</span><span class="token punctuation">(</span><span class="token class-name">String</span> keyPrefix<span class="token punctuation">,</span> <span class="token class-name">ID</span> id<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span>
                                        <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> dbFallback<span class="token punctuation">,</span> <span class="token class-name">Long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 1、当id为空时，直接返回null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token class-name">String</span> key <span class="token operator">=</span> keyPrefix <span class="token operator">+</span> id<span class="token punctuation">;</span>

      <span class="token comment">// 2、判断缓存是否存在</span>
      <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCacheString</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 3、存在，直接返回</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 存在，但存储的是空字符串的情况</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token constant">EMPTY</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 4、不存在，根据id查询数据库</span>
      <span class="token class-name">R</span> r <span class="token operator">=</span> dbFallback<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 5、把查询数据库的结果，放入缓存</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> r <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token constant">EMPTY</span> <span class="token operator">:</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> r<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 缓存穿透 - 互斥锁
   *
   * <span class="token keyword">@param</span> <span class="token parameter">keyPrefix</span>  缓存前缀
   * <span class="token keyword">@param</span> <span class="token parameter">lockPrefix</span> 锁前缀
   * <span class="token keyword">@param</span> <span class="token parameter">id</span>
   * <span class="token keyword">@param</span> <span class="token parameter">type</span>
   * <span class="token keyword">@param</span> <span class="token parameter">dbFallback</span>
   * <span class="token keyword">@param</span> <span class="token parameter">time</span>
   * <span class="token keyword">@param</span> <span class="token parameter">unit</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>R<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token class-name">R</span> <span class="token function">queryWithMutex</span><span class="token punctuation">(</span><span class="token class-name">String</span> keyPrefix<span class="token punctuation">,</span> <span class="token class-name">String</span> lockPrefix<span class="token punctuation">,</span> <span class="token class-name">ID</span> id<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span>
                                  <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> dbFallback<span class="token punctuation">,</span> <span class="token class-name">Long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token class-name">String</span> dataKey <span class="token operator">=</span> keyPrefix <span class="token operator">+</span> id<span class="token punctuation">;</span>
      <span class="token class-name">String</span> lockKey <span class="token operator">=</span> lockPrefix <span class="token operator">+</span> id<span class="token punctuation">;</span>

      <span class="token comment">// 1、当id为空时，直接返回null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 2、判断缓存是否存在</span>
      <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCacheString</span><span class="token punctuation">(</span>dataKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 3、存在，直接返回</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 存在，但存储的是空字符串的情况</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token constant">EMPTY</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 4、不存在，根据id查询数据库</span>
      <span class="token keyword">boolean</span> tryLock <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

      <span class="token class-name">R</span> r <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// 5、获取互斥锁</span>
          <span class="token keyword">do</span> <span class="token punctuation">{</span>
              tryLock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>tryLock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token comment">// 暂停毫秒</span>
                  <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>tryLock<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token comment">// 6、获取锁成功，根据id查询数据库</span>
          r <span class="token operator">=</span> dbFallback<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token comment">// 7、根据数据库查询结果，放入缓存</span>
          <span class="token comment">// 当数据为空时，缓存空值</span>
          <span class="token comment">// 否则，缓存数据</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span>dataKey<span class="token punctuation">,</span> r <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token class-name">Strings</span><span class="token punctuation">.</span><span class="token constant">EMPTY</span> <span class="token operator">:</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toJsonStr</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          <span class="token comment">// 8、释放互斥锁</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> r<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 缓存击穿 - 逻辑过期
   * 需要进行缓存预热
   *
   * <span class="token keyword">@param</span> <span class="token parameter">keyPrefix</span>  缓存前缀
   * <span class="token keyword">@param</span> <span class="token parameter">lockPrefix</span> 锁前缀
   * <span class="token keyword">@param</span> <span class="token parameter">id</span>
   * <span class="token keyword">@param</span> <span class="token parameter">type</span>
   * <span class="token keyword">@param</span> <span class="token parameter">dbFallback</span>
   * <span class="token keyword">@param</span> <span class="token parameter">time</span>
   * <span class="token keyword">@param</span> <span class="token parameter">unit</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>R<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">&gt;</span></span>
   * <span class="token keyword">@return</span>
   */</span>
  <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">,</span> ID<span class="token punctuation">&gt;</span></span> <span class="token class-name">R</span> <span class="token function">queryWithLogicalExpire</span><span class="token punctuation">(</span><span class="token class-name">String</span> keyPrefix<span class="token punctuation">,</span> <span class="token class-name">String</span> lockPrefix<span class="token punctuation">,</span> <span class="token class-name">ID</span> id<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">,</span>
                                          <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span>ID<span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> dbFallback<span class="token punctuation">,</span> <span class="token class-name">Long</span> time<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">)</span> <span class="token punctuation">{</span>

      <span class="token comment">// 1、当id为空时，直接返回null</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtil</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token class-name">String</span> dataKey <span class="token operator">=</span> keyPrefix <span class="token operator">+</span> id<span class="token punctuation">;</span>

      <span class="token comment">// 2、判断缓存是否存在</span>
      <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCacheString</span><span class="token punctuation">(</span>dataKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 3、不存在，直接返回null值</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StrUtil</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 4、命中，需要判断是否过期</span>
      <span class="token class-name">RedisData</span> redisData <span class="token operator">=</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> <span class="token class-name">RedisData</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">R</span> r <span class="token operator">=</span> <span class="token class-name">JSONUtil</span><span class="token punctuation">.</span><span class="token function">toBean</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">JSONObject</span><span class="token punctuation">)</span> redisData<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 5、未过期，直接返回数据</span>
      <span class="token class-name">LocalDateTime</span> expireTime <span class="token operator">=</span> redisData<span class="token punctuation">.</span><span class="token function">getExpireTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>expireTime<span class="token punctuation">.</span><span class="token function">isAfter</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> r<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 6、过期，需要缓存重建</span>
      <span class="token class-name">String</span> lockKey <span class="token operator">=</span> lockPrefix <span class="token operator">+</span> id<span class="token punctuation">;</span>
      <span class="token keyword">boolean</span> tryLock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 7、获取锁成功，开启独立线程，实现缓存重建</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tryLock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token constant">CACHE_REBUILD_EXECUTOR</span><span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
              <span class="token keyword">try</span> <span class="token punctuation">{</span>
                  <span class="token comment">// 7.1、查询数据库</span>
                  <span class="token class-name">R</span> dbR <span class="token operator">=</span> dbFallback<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token comment">// 7.2、重建缓存</span>
                  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setWithLogicalExpire</span><span class="token punctuation">(</span>dataKey<span class="token punctuation">,</span> dbR<span class="token punctuation">,</span> time<span class="token punctuation">,</span> unit<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span>lockKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> r<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、redisdata" tabindex="-1"><a class="header-anchor" href="#二、redisdata"><span>二、RedisData</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisData</span> <span class="token punctuation">{</span>

  <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> expireTime<span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token class-name">Object</span> data<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、缓存击穿、缓存穿透工具类的使用" tabindex="-1"><a class="header-anchor" href="#三、缓存击穿、缓存穿透工具类的使用"><span>三、缓存击穿、缓存穿透工具类的使用</span></a></h2><p>以缓存击穿的解决方案逻辑过期为例</p><p>缓存预热部分代码如下</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">buildCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ProSchool</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
      redisUtils<span class="token punctuation">.</span><span class="token function">setWithLogicalExpire</span><span class="token punctuation">(</span><span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">DATA_SCHOOL_PREFIX</span> <span class="token operator">+</span> item<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        item<span class="token punctuation">,</span> <span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">DATA_EXPIRE_TTL</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用工具类部分代码如下</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">RedisUtils</span> redisUtils<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 缓存击穿 - 逻辑过期
 */</span>
<span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">ProSchool</span> <span class="token function">selectDataById</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">return</span> redisUtils<span class="token punctuation">.</span><span class="token function">queryWithLogicalExpire</span><span class="token punctuation">(</span><span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">DATA_SCHOOL_PREFIX</span><span class="token punctuation">,</span> <span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">LOCK_SCHOOL_PREFIX</span><span class="token punctuation">,</span>
          id<span class="token punctuation">,</span> <span class="token class-name">ProSchool</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token operator">::</span><span class="token function">getById</span><span class="token punctuation">,</span> <span class="token class-name">CacheConstants</span><span class="token punctuation">.</span><span class="token constant">DATA_EXPIRE_TTL</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MINUTES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10))])}const r=s(o,[["render",l],["__file","redis工具类.html.vue"]]),d=JSON.parse('{"path":"/posts/sql/redis/redis%E5%B7%A5%E5%85%B7%E7%B1%BB.html","title":"redis工具类","lang":"zh-CN","frontmatter":{"title":"redis工具类","date":"2024-05-28T00:00:00.000Z","icon":"snowman","category":["redis"],"tag":["redis的使用"],"order":315,"description":"不用再找了，redis最全的工具类就在这里","head":[["meta",{"property":"og:url","content":"https://github.com/Neumannzc/blog/blog/posts/sql/redis/redis%E5%B7%A5%E5%85%B7%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"Cafe Babe"}],["meta",{"property":"og:title","content":"redis工具类"}],["meta",{"property":"og:description","content":"不用再找了，redis最全的工具类就在这里"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-28T08:12:05.000Z"}],["meta",{"property":"article:author","content":"Cafe Babe"}],["meta",{"property":"article:tag","content":"redis的使用"}],["meta",{"property":"article:published_time","content":"2024-05-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-28T08:12:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"redis工具类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-28T08:12:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cafe Babe\\",\\"url\\":\\"https://gitee.com/z517890027\\"}]}"]]},"headers":[{"level":2,"title":"一、工具类代码","slug":"一、工具类代码","link":"#一、工具类代码","children":[]},{"level":2,"title":"二、RedisData","slug":"二、redisdata","link":"#二、redisdata","children":[]},{"level":2,"title":"三、缓存击穿、缓存穿透工具类的使用","slug":"三、缓存击穿、缓存穿透工具类的使用","link":"#三、缓存击穿、缓存穿透工具类的使用","children":[]}],"git":{"createdTime":1716883925000,"updatedTime":1716883925000,"contributors":[{"name":"Cafe Babe","email":"517890027@qq.com","commits":1}]},"readingTime":{"minutes":3.69,"words":1107},"filePathRelative":"posts/sql/redis/redis工具类.md","localizedDate":"2024年5月28日","excerpt":"<p>不用再找了，redis最全的工具类就在这里</p>\\n","autoDesc":true}');export{r as comp,d as data};
