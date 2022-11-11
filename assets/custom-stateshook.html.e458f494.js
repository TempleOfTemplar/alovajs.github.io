import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as s,d as c,f as p,r as i}from"./app.4763b10d.js";const l={},u=p(`<p>还记得你在调用<code>createAlova</code>时传入的<code>statesHook</code>吗？它将决定你在请求时返回哪个MVVM库的状态，如在vue项目中使用<code>VueHook</code>，在react项目中使用<code>ReactHook</code>，在svelte项目中使用<code>SvelteHook</code>，目前只支持这三个库。在大部分情况下你应该用不到这个功能，但如果你需要适配更多我们还不支持的MVVM库，就需要自定义编写<code>statesHook</code>了。</p><p><code>statesHook</code>是一个包含特定函数的普通对象，不过这些还是基本不涉及算法，我们来看看VueHook是怎么编写的吧。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> VueHook <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 状态创建函数</span>
  <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token parameter">rawData</span> <span class="token operator">=&gt;</span> <span class="token function">ref</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// 状态导出函数</span>
  <span class="token function-variable function">export</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">,</span>

  <span class="token comment">// 脱水函数</span>
  <span class="token function-variable function">dehydrate</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>value<span class="token punctuation">,</span>

  <span class="token comment">// 响应式状态更新函数</span>
  <span class="token function-variable function">update</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span> states</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      states<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>value <span class="token operator">=</span> newVal<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 请求发送控制函数</span>
  <span class="token function">effectRequest</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    handler<span class="token punctuation">,</span>
    removeStates<span class="token punctuation">,</span>
    saveStates<span class="token punctuation">,</span>
    immediate<span class="token punctuation">,</span>
    frontStates<span class="token punctuation">,</span>
    watchingStates
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 组件卸载时移除对应状态</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span>removeStates<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用useRequest和useFetcher时，watchingStates为undefined</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>watchingStates<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 调用useWatcher时，watchingStates为需要监听的状态数组</span>
    <span class="token comment">// immediate为true时，表示需要立即发送请求</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>watchingStates<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> <span class="token punctuation">{</span> immediate <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义<code>statesHook</code>各个函数说明：</p><ol><li>【必填】create函数：响应式状态创建函数，<code>loading</code>、<code>error</code>、<code>data</code>、<code>downloading</code>、<code>uploading</code>等都是调用此函数创建的，如vue3项目下将创建为ref值；</li><li>【必填】export函数：状态导出函数，此函数接收create函数创建的响应式状态，并导出最终给开发者使用的状态，这里<code>VueHook</code>导出的状态是原状态；</li><li>【必填】dehydrate函数：脱水函数，意思是将响应式状态转换为普通数据，与create是相反的操作，在<code>updateState</code>中；</li><li>【必填】update函数：响应式状态更新函数，<code>alova</code>内部维护的状态更新都是通过此函数完成。此函数接收两个参数，第一个参数是新的数据对象，第二个参数是原响应式状态的map集合，这里你可以固定写一个循环更新<code>states</code>；</li><li>【必填】effectRequest函数：请求发送控制函数，它会在<code>useRequest</code>、<code>useWatcher</code>、<code>useFetcher</code>被调用时立即执行此函数，我们要在这个函数内要完成三件事： <ol><li>当前组件卸载时，调用removeStates函数移除当前组件涉及到的响应式状态，避免内存溢出;</li><li>当调用useWatcher时，绑定状态监听，状态改变时调用sendRequest函数，你可以用<code>states</code>是否为数组判断是否为<code>useWatcher</code>被调用，同时，<code>immediate</code>参数用于判断<code>useWatcher</code>调用时是否需要立即发送请求；</li><li>当调用<code>useRequest</code>和<code>useFetcher</code>时，调用sendRequest发出一次请求，此时<code>states</code>为<code>undefined</code>；</li></ol></li></ol><blockquote><p>⚠️注意：如果statesHook涉及的库是像<code>react</code>，每次重新渲染都会调用<code>alova</code>的use hook的，那么在<code>effectRequest</code>中还需要在每次重新渲染时触发<code>saveStates</code>函数，这是因为<code>react</code>每次重新渲染都会刷新它的状态引用，因此我们需要再次重新保存它们。</p></blockquote>`,6),d={href:"https://github.com/JOU-amjs/alova/blob/main/src/predefine/ReactHook.ts",target:"_blank",rel:"noopener noreferrer"},r=n("p",null,[s("如果你在自定义statesHook后，也希望它可以支持typescript，可以 "),n("a",{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89statesHook%E7%9A%84%E7%B1%BB%E5%9E%8B"},"点此查看")],-1);function k(v,m){const a=i("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",d,[s("ReactHook源码点此查看"),c(a)])]),r])}const h=e(l,[["render",k],["__file","custom-stateshook.html.vue"]]);export{h as default};