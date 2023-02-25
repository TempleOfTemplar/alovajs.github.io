"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8008],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var v=n(2389);const k="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(c(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},1928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:20},i=void 0,u={unversionedId:"request-timing/use-watcher",id:"request-timing/use-watcher",title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",description:"\u5728\u4e00\u4e9b\u9700\u8981\u968f\u6570\u636e\u53d8\u5316\u800c\u91cd\u65b0\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\uff0c\u53ef\u4ee5\u4f7f\u7528useWatcher \u6765\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/04-request-timing/02-use-watcher.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-watcher",permalink:"/zh-CN/request-timing/use-watcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/04-request-timing/02-use-watcher.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u8bf7\u6c42",permalink:"/zh-CN/request-timing/use-request"},next:{title:"\u6570\u636e\u62c9\u53d6",permalink:"/zh-CN/request-timing/use-fetcher"}},d={},c=[{value:"\u5173\u952e\u5b57\u641c\u7d22",id:"\u5173\u952e\u5b57\u641c\u7d22",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42",id:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u8bbe\u7f6e\u9759\u6001\u503c",id:"\u8bbe\u7f6e\u9759\u6001\u503c",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e force \u503c",id:"\u52a8\u6001\u8bbe\u7f6e-force-\u503c",level:3},{value:"send \u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219",id:"send-\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219",level:2},{value:"useWatcher \u56de\u8c03\u51fd\u6570",id:"usewatcher-\u56de\u8c03\u51fd\u6570",level:3},{value:"\u5728 onSuccess\u3001onError\u3001onComplete \u56de\u8c03\u51fd\u6570\u4e2d\u63a5\u6536",id:"\u5728-onsuccessonerroroncomplete-\u56de\u8c03\u51fd\u6570\u4e2d\u63a5\u6536",level:3},{value:"\u5728 force \u51fd\u6570\u4e2d\u63a5\u6536",id:"\u5728-force-\u51fd\u6570\u4e2d\u63a5\u6536",level:3},{value:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e",id:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e",level:2},{value:"\u8bf7\u6c42\u9632\u6296",id:"\u8bf7\u6c42\u9632\u6296",level:2},{value:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4",id:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4",level:3},{value:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4",id:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4",level:3},{value:"\u624b\u52a8\u4fee\u6539\u72b6\u6001\u503c",id:"\u624b\u52a8\u4fee\u6539\u72b6\u6001\u503c",level:2},{value:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42",id:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e00\u4e9b\u9700\u8981\u968f\u6570\u636e\u53d8\u5316\u800c\u91cd\u65b0\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher")," \u6765\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("h2",{id:"\u5173\u952e\u5b57\u641c\u7d22"},"\u5173\u952e\u5b57\u641c\u7d22"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5\u641c\u7d22 todo \u9879\u4e3a\u4f8b\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 --\x3e\n  <input v-model="keyword" />\n\n  \x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n  <div v-if="loading">Loading...</div>\n  <template v-else>\n    <div v-for="todo in data">\n      <div class="todo-title">{{ todo.title }}</div>\n      <div class="todo-time">{{ todo.time }}</div>\n    </div>\n  </template>\n</template>\n\n<script setup>\n  // \u521b\u5efamethod\u5b9e\u4f8b\n  const filterTodoList = keyword => {\n    return alovaInstance.Get(\'/todo/list/search\', {\n      params: {\n        keyword\n      }\n    });\n  };\n  const keyword = ref(\'\');\n  const {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n  } = useWatcher(\n    () => filterTodoList(keyword.value),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [keyword],\n    {\n      // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n      debounce: 500\n    }\n  );\n<\/script>\n'))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = keyword => {\n  return alovaInstance.Get('/todo/list/search', {\n    params: {\n      keyword\n    }\n  });\n};\n\nconst App = () => {\n  const [keyword, setKeyword] = useState('');\n  const {\n    loading,\n    data,\n    error\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n  } = useWatcher(\n    () => filterTodoList(keyword),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [keyword],\n    {\n      // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n      debounce: 500\n    }\n  );\n\n  return (\n    <>\n      {/* keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 */}\n      <input\n        value={keyword}\n        onInput={e => setKeyword(e.target.value)}\n      />\n\n      {/* \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 */}\n      {loading ? <div>Loading...</div> : null}\n      {!loading ? (\n        <>\n          {data.map(todo => (\n            <div>\n              <div class=\"todo-title\">{todo.title}</div>\n              <div class=\"todo-time\">{todo.time}</div>\n            </div>\n          ))}\n        </>\n      ) : null}\n    </>\n  );\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  import { writable } from \'svelte/store\';\n\n  // \u521b\u5efamethod\u5b9e\u4f8b\n  const filterTodoList = text => {\n    return alovaInstance.Get(\'/todo/list/search\', {\n      params: {\n        keyword: text\n      }\n    });\n  };\n  const keyword = writable(\'\');\n\n  const {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n  } = useWatcher(\n    () => filterTodoList($keyword),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [keyword],\n    {\n      // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n      debounce: 500\n    }\n  );\n\n  const updateKeyword = e => {\n    $keyword = e.target.value;\n  };\n<\/script>\n\x3c!-- keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 --\x3e\n<input\n  value="{$keyword}"\n  on:input="{updateKeyword}" />\n\n\x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n{#if $loading}\n<div>Loading...</div>\n{:else} {#each $data as todo}\n<div>\n  <div class="todo-title">{ todo.title }</div>\n  <div class="todo-time">{ todo.time }</div>\n</div>\n{/each} {/if}\n')))),(0,r.kt)("h2",{id:"\u5206\u9875"},"\u5206\u9875"),(0,r.kt)("p",null,"\u4ee5 todo \u5217\u8868\u5206\u9875\u8bf7\u6c42\u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const currentPage = ref(1);\n  const {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n  } = useWatcher(\n    () => getTodoList(currentPage.value),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n      immediate: true\n    }\n  );\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\n\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/todo/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst App = () => {\n  const [currentPage, setCurrentPage] = useState(1);\n  const {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n  } = useWatcher(\n    () => getTodoList(currentPage),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n      immediate: true\n    }\n  );\n\n  return {\n    /* ... */\n  };\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { writable } from 'svelte/store';\n\n  // method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const currentPage = writable(1);\n  const {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n  } = useWatcher(\n    () => getTodoList($currentPage),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n      // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n      // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n      immediate: true\n    }\n  );\n<\/script>\n\n\x3c!-- ... --\x3e\n")))),(0,r.kt)("h2",{id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42"},"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u5728\u76d1\u542c\u72b6\u6001\u672a\u53d8\u5316\u65f6\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\uff08\u5982\u670d\u52a1\u7aef\u6570\u636e\u5df2\u66f4\u65b0\uff09\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"send"),"\u51fd\u6570\u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\uff0c\u7528\u6cd5\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u76f8\u540c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  send\n  // highlight-end\n} = useWatcher(\n  () => getTodoList($currentPage),\n  // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n  [currentPage],\n  {\n    immediate: true\n  }\n);\n\n// highlight-start\nsend();\n// highlight-end\n")),(0,r.kt)("h2",{id:"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42"},"\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,"\u7f13\u5b58\u6570\u636e\u53ef\u4ee5\u5f88\u597d\u5730\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\u548c\u51cf\u5c0f\u670d\u52a1\u7aef\u538b\u529b\uff0c\u4f46\u540c\u65f6\u4e5f\u5b58\u5728\u7740\u6570\u636e\u8fc7\u671f\u7684\u95ee\u9898\uff0c\u5f53\u4f60\u5e0c\u671b\u7a7f\u900f\u7f13\u5b58\u83b7\u53d6\u6700\u65b0\u6570\u636e\u65f6\uff0c\u5728 use hooks \u7684\u914d\u7f6e\u4e2d\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"force"),"\u5c5e\u6027\u53ef\u4ee5\u5e2e\u52a9\u4f60\u3002"),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u9759\u6001\u503c"},"\u8bbe\u7f6e\u9759\u6001\u503c"),(0,r.kt)("p",null,"force \u9ed8\u8ba4\u4e3a false\uff0c\u8bbe\u7f6e\u4e3a true \u65f6\u5c06\u6bcf\u6b21\u7a7f\u900f\u7f13\u5b58\uff0c\u5e76\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useWatcher(\n  () => alovaInstance.Get('/todo'),\n  [\n    /* watchingStates */\n  ],\n  {\n    force: true\n  }\n);\n")),(0,r.kt)("h3",{id:"\u52a8\u6001\u8bbe\u7f6e-force-\u503c"},"\u52a8\u6001\u8bbe\u7f6e force \u503c"),(0,r.kt)("p",null,"\u5b9e\u9645\u60c5\u51b5\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u6839\u636e\u4e0d\u540c\u60c5\u51b5\u6765\u8bbe\u7f6e\u662f\u5426\u9700\u8981\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\uff0c\u6b64\u65f6\u53ef\u4ee5\u5c06 force \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u53ef\u901a\u8fc7 send \u51fd\u6570\u4f20\u5165\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useWatcher(\n  alovaInstance.Get('/todo'),\n  [\n    /* watchingStates */\n  ],\n  {\n    force: id => {\n      return !!id;\n    }\n  }\n);\nsend(1);\n")),(0,r.kt)("h2",{id:"send-\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219"},"send \u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u8c03\u7528 send \u51fd\u6570\u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\uff0c\u5b83\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u591a\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u5c06\u5206\u522b\u88ab\u4ee5\u4e0b 4 \u4e2a\u51fd\u6570\u63a5\u6536\uff1a"),(0,r.kt)("h3",{id:"usewatcher-\u56de\u8c03\u51fd\u6570"},"useWatcher \u56de\u8c03\u51fd\u6570"),(0,r.kt)("p",null,"useWatcher \u7684\u56de\u8c03\u51fd\u6570\u53ef\u63a5\u6536\u5230\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useWatcher(currentPage => getTodoList(currentPage));\nsend(1); // \u4e0a\u9762\u56de\u8c03\u51fd\u6570\u4e2d\u7684currentPage\u5c06\u63a5\u6536\u52301\n")),(0,r.kt)("h3",{id:"\u5728-onsuccessonerroroncomplete-\u56de\u8c03\u51fd\u6570\u4e2d\u63a5\u6536"},"\u5728 onSuccess\u3001onError\u3001onComplete \u56de\u8c03\u51fd\u6570\u4e2d\u63a5\u6536"),(0,r.kt)("p",null,"onSuccess\u3001onError\u3001onComplete \u56de\u8c03\u51fd\u6570\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"event.sendArgs"),"\u4ee5\u6570\u7ec4\u5f62\u5f0f\u63a5\u6536"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onSuccess, onError, onComplete } = useWatcher(currentPage => getTodoList(currentPage));\nonSuccess(event => {\n  // sendArgs\u7684\u503c\u4e3a[1]\n  console.log(event.sendArgs);\n});\nonError(event => {\n  // sendArgs\u7684\u503c\u4e3a[1]\n  console.log(event.sendArgs);\n});\nonComplete(event => {\n  // sendArgs\u7684\u503c\u4e3a[1]\n  console.log(event.sendArgs);\n});\nsend(1);\n")),(0,r.kt)("h3",{id:"\u5728-force-\u51fd\u6570\u4e2d\u63a5\u6536"},"\u5728 force \u51fd\u6570\u4e2d\u63a5\u6536"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useWatcher(\n  alovaInstance.Get('/todo'),\n  [\n    /* watchingStates */\n  ],\n  {\n    force: id => {\n      return !!id;\n    }\n  }\n);\nsend(1);\n")),(0,r.kt)("h2",{id:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e"},"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"\u4e00\u4e2a\u9875\u9762\u5728\u83b7\u53d6\u5230\u521d\u59cb\u6570\u636e\u524d\uff0c\u4e0d\u53ef\u907f\u514d\u5730\u9700\u8981\u7b49\u5f85\u670d\u52a1\u7aef\u54cd\u5e94\uff0c\u5728\u54cd\u5e94\u524d\u4e00\u822c\u9700\u8981\u5148\u5c06\u72b6\u6001\u521d\u59cb\u5316\u4e3a\u4e00\u4e2a\u7a7a\u6570\u7ec4\u6216\u7a7a\u5bf9\u8c61\uff0c\u4ee5\u514d\u9020\u6210\u9875\u9762\u62a5\u9519\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5b9e\u73b0\u521d\u59cb\u6570\u636e\u7684\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728useWatcher\u4e2d\u540c\u6837\u53ef\u4ee5\u8bbe\u7f6edata\u7684\u521d\u59cb\u503c\nconst {\n  // \u54cd\u5e94\u524ddata\u7684\u521d\u59cb\u503c\u4e3a[]\uff0c\u800c\u4e0d\u662fundefined\n  data\n} = useWatcher(\n  () => getTodoList(/* \u53c2\u6570 */),\n  [\n    /* \u76d1\u542c\u72b6\u6001 */\n  ],\n  {\n    initialData: []\n  }\n);\n")),(0,r.kt)("h2",{id:"\u8bf7\u6c42\u9632\u6296"},"\u8bf7\u6c42\u9632\u6296"),(0,r.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u90fd\u4f1a\u5728\u9891\u7e41\u89e6\u53d1\u7684\u4e8b\u4ef6\u5c42\u9762\u7f16\u5199\u9632\u6296\u4ee3\u7801\uff0c\u8fd9\u6b21\u6211\u4eec\u5728\u8bf7\u6c42\u5c42\u9762\u5b9e\u73b0\u4e86\u9632\u6296\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u518d\u4e5f\u4e0d\u7528\u5728\u6a21\u7cca\u641c\u7d22\u529f\u80fd\u4e2d\u81ea\u5df1\u5b9e\u73b0\u9632\u6296\u4e86\uff0c\u7528\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\u3002"),(0,r.kt)("admonition",{title:"Tips\uff1a\u4ec0\u4e48\u662f\u51fd\u6570\u9632\u6296",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u51fd\u6570\u9632\u6296\uff08debounce\uff09\uff0c\u5c31\u662f\u6307\u89e6\u53d1\u4e8b\u4ef6\u540e\uff0c\u5728 n \u79d2\u5185\u51fd\u6570\u53ea\u80fd\u6267\u884c\u4e00\u6b21\uff0c\u5982\u679c\u89e6\u53d1\u4e8b\u4ef6\u540e\u5728 n \u79d2\u5185\u53c8\u89e6\u53d1\u4e86\u4e8b\u4ef6\uff0c\u5219\u4f1a\u91cd\u65b0\u8ba1\u7b97\u51fd\u6570\u5ef6\u6267\u884c\u65f6\u95f4\uff08\u5728\u8fd9\u91cc\u548c\u51fd\u6570\u8282\u6d41\u533a\u5206\u4e00\u4e0b\uff0c\u51fd\u6570\u8282\u6d41\u662f\u5728\u89e6\u53d1\u5b8c\u4e8b\u4ef6\u4e4b\u540e\u7684\u4e00\u6bb5\u65f6\u95f4\u4e4b\u5185\u4e0d\u80fd\u518d\u6b21\u89e6\u53d1\u4e8b\u4ef6\uff09")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4"},"\u8bbe\u7f6e\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\n  // highlight-start\n  // \u8bbe\u7f6edebounce\u4e3a\u6570\u5b57\u65f6\u8868\u793a\u4e3a\u6240\u6709\u76d1\u542c\u72b6\u6001\u7684\u9632\u6296\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\n  // \u5982\u8fd9\u8fb9\u8868\u793a\u5f53\u72b6\u6001keyword\u3001date\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53d8\u5316\u65f6\uff0c\u5c06\u5728500ms\u540e\u624d\u53d1\u9001\u8bf7\u6c42\n  debounce: 500\n  // highlight-end\n});\n")),(0,r.kt)("h3",{id:"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4"},"\u4e3a\u5355\u4e2a\u76d1\u542c\u72b6\u6001\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4"),(0,r.kt)("p",null,"\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5bf9\u67d0\u51e0\u4e2a\u9891\u7e41\u53d8\u5316\u7684\u76d1\u542c\u72b6\u6001\u8fdb\u884c\u9632\u6296\uff0c\u5982\u6587\u672c\u6846\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"onInput"),"\u89e6\u53d1\u7684\u72b6\u6001\u53d8\u5316\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, data, error } = useWatcher(() => filterTodoList(keyword, date), [keyword, date], {\n  // highlight-start\n  // \u4ee5\u76d1\u542c\u72b6\u6001\u7684\u6570\u7ec4\u987a\u5e8f\u5206\u522b\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4\uff0c0\u6216\u4e0d\u4f20\u8868\u793a\u4e0d\u9632\u6296\n  // \u8fd9\u8fb9\u76d1\u542c\u72b6\u6001\u7684\u987a\u5e8f\u662f[keyword, date]\uff0c\u9632\u6296\u6570\u7ec4\u8bbe\u7f6e\u7684\u662f[500, 0]\uff0c\u8868\u793a\u53ea\u5bf9keyword\u5355\u72ec\u8bbe\u7f6e\u9632\u6296\n  debounce: [500, 0]\n  // \u4e5f\u53ef\u4ee5\u8fd9\u4e48\u6309\u5982\u4e0b\u8bbe\u7f6e:\n  // debounce: [500],\n  // highlight-end\n});\n")),(0,r.kt)("h2",{id:"\u624b\u52a8\u4fee\u6539\u72b6\u6001\u503c"},"\u624b\u52a8\u4fee\u6539\u72b6\u6001\u503c"),(0,r.kt)("p",null,"\u5728 alova \u4e2d\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u8fd4\u56de\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"loading"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"\u7b49\u5404\u9879\u72b6\u6001\u662f\u5141\u8bb8\u81ea\u5b9a\u4e49\u4fee\u6539\u7684\uff0c\u8fd9\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\u5c06\u53d8\u5f97\u5f88\u65b9\u4fbf\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const watchingState = ref('');\nconst { data, loading, error } = useWatcher(todoListGetter, [watchingState]);\n\n// ...\n// \u76f4\u63a5\u4fee\u6539data\u503c\ndata.value = {};\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728 react \u4e2d\uff0c\u8fd4\u56de\u7684\u72b6\u6001\u662f\u76f4\u63a5\u53ef\u4f7f\u7528\u7684\u6570\u636e\uff0c\u56e0\u6b64\u9700\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"update"),"\u51fd\u6570\u6765\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const [watchingState, setWatchingState] = useState('');\nconst { data, loading, error, update } = useWatcher(todoListGetter, [watchingState]);\n\n// ...\n// \u901a\u8fc7update\u4fee\u6539data\u503c\nupdate({\n  data: {}\n});\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5728 svelte \u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u8fd4\u56de\u7684\u72b6\u6001\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"writable"),"\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const watchingState = writable('');\nconst { data, loading, error } = useWatcher(todoListGetter, [watchingState]);\n\n// ...\n// \u76f4\u63a5\u4fee\u6539data\u503c\n$data = {};\n// \u6216data.update(d => ({}));\n")))),(0,r.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"\u81ea\u5b9a\u4e49\u4fee\u6539\u7684\u503c\u5c06\u4f1a\u88ab",(0,r.kt)("inlineCode",{parentName:"li"},"useWatcher"),"\u5185\u90e8\u7684\u72b6\u6001\u7ba1\u7406\u673a\u5236\u8986\u76d6\uff0c\u5982\u5f53\u4f60\u4fee\u6539\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u503c\uff0c\u518d\u6b21\u8bf7\u6c42\u540e",(0,r.kt)("inlineCode",{parentName:"li"},"data"),"\u503c\u5c06\u88ab\u8d4b\u503c\u4e3a\u6700\u65b0\u7684\u54cd\u5e94\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u76f4\u63a5\u4fee\u6539\u7684\u72b6\u6001\u503c\u4e0d\u4f1a\u540c\u6b65\u4fee\u6539\u7f13\u5b58\u6570\u636e\uff0c\u5982\u9700\u8981\u540c\u6b65\u4fee\u6539\u7f13\u5b58\u6570\u636e\uff0c\u5efa\u8bae\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"/response-data-management/update-response-data-across-modules"},"updateState")))),(0,r.kt)("h2",{id:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42"},"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42"),(0,r.kt)("p",null,"\u672a\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"timeout"),"\u53c2\u6570\u65f6\u8bf7\u6c42\u662f\u6c38\u4e0d\u8d85\u65f6\u7684\uff0c\u5982\u679c\u9700\u8981\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42\uff0c\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u51fd\u6570\u88ab\u8c03\u7528\u65f6\u63a5\u6536",(0,r.kt)("inlineCode",{parentName:"p"},"abort"),"\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  // abort\u51fd\u6570\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\n  abort\n  // highlight-end\n} = useWatcher(() => filterTodoList(keyword), [keyword]);\n\n// highlight-start\n// \u8c03\u7528abort\u5373\u53ef\u4e2d\u65ad\u8bf7\u6c42\nconst handleCancel = () => {\n  abort();\n};\n// highlight-end\n")))}m.isMDXComponent=!0}}]);