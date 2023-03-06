"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5538],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),u=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,v=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?n.createElement(v,l(l({ref:a},p),{},{components:t})):n.createElement(v,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const o="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(7462),r=t(7294),o=t(6010),l=t(2466),s=t(6550),i=t(1980),u=t(7392),p=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function d(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[i,u]=v({queryString:t,groupId:n}),[c,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,p.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),b=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=t(2389);const g="tabList__CuJ",k="tabItem_LNqP";function h(e){let{className:a,block:t,selectedValue:s,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const a=e.currentTarget,t=p.indexOf(a),n=u[t].value;n!==s&&(c(a),i(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,null==l?void 0:l.className,{"tabs__item--active":s===a})}),t??a)})))}function x(e){let{lazy:a,children:t,selectedValue:n}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function y(e){const a=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(h,(0,n.Z)({},e,a)),r.createElement(x,(0,n.Z)({},e,a)))}function N(e){const a=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(a)},e))}},2285:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),o=t(4866),l=t(5162);const s={title:"axios\u9002\u914d\u5668",sidebar_position:40},i=void 0,u={unversionedId:"extension/alova-adapter-axios",id:"extension/alova-adapter-axios",title:"axios\u9002\u914d\u5668",description:"\u5b89\u88c5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/10-extension/04-alova-adapter-axios.md",sourceDirName:"10-extension",slug:"/extension/alova-adapter-axios",permalink:"/zh-CN/extension/alova-adapter-axios",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/10-extension/04-alova-adapter-axios.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"axios\u9002\u914d\u5668",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"Taro\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-taro"},next:{title:"Others",permalink:"/zh-CN/category/others"}},p={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3},{value:"\u9519\u8bef",id:"\u9519\u8bef",level:3}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-axios --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-axios\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,r.kt)("h3",{id:"\u521b\u5efa-alova"},"\u521b\u5efa alova"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"axiosRequestAdapter")," \u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport { axiosRequestAdapter } from '@alova/adapter-axios';\n\nconst alovaInst = createAlova(\n  // ...\n  requestAdapter: axiosResponseAdapter(),\n  // ...\n);\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,r.kt)("p",null,"\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.kt)("strong",{parentName:"p"},"axios"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),"\u652f\u6301\u7684",(0,r.kt)("a",{parentName:"p",href:"https://axios-http.com/docs/req_config"},"\u5168\u90e8\u914d\u7f6e\u9879")),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <div v-if=\"loading\">\u52a0\u8f7d\u4e2d...</div>\n  <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</div>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const list = () =>\n  alovaInst.Get('/list', {\n    // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n    paramsSerializer: params => {\n      return Qs.stringify(params, {arrayFormat: 'brackets'})\n    },\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <div>\u52a0\u8f7d\u4e2d...</div> : null }\n    <div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</div>\n  )\n};\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9axios\n      paramsSerializer: params => {\n        return Qs.stringify(params, { arrayFormat: 'brackets' });\n      }\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n\n{#if $loading}\n<div>\u52a0\u8f7d\u4e2d...</div>\n{/if}\n<div>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ data }</div>\n")))),(0,r.kt)("h3",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"FormData"),"\u4e0a\u4f20\u6587\u4ef6\uff0c\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"FormData"),"\u5b9e\u4f8b\u4f1a\u88ab\u4f20\u9012\u5230 axios \u4e2d\uff0c\u4e0e axios \u4e0a\u4f20\u6587\u4ef6\u7528\u6cd5\u4fdd\u6301\u4e86\u4e00\u81f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const uploadFile = imageFile => {\n  const formData = new FormData();\n  formData.append('file', imageFile);\n  return alovaInst.Post('/uploadImg', formData, {\n    // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n    enableUpload: true\n  });\n};\n\nconst {\n  loading,\n  data,\n  uploading,\n  send: sendUpload\n} = useRequest(uploadFile, {\n  immediate: false\n});\n\n// \u56fe\u7247\u9009\u62e9\u4e8b\u4ef6\u56de\u8c03\nconst handleImageChoose = ({ target }) => {\n  sendUpload(target.files[0]);\n};\n")),(0,r.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,r.kt)("p",null,"\u5c06\u8bf7\u6c42 url \u6307\u5411\u6587\u4ef6\u5730\u5740\u5373\u53ef\u4e0b\u8f7d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},"enableDownload"),"\u8bbe\u7f6e\u4e3a true \u6765\u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const downloadFile = () =>\n  alovaInst.Get('/bigImage.jpg', {\n    // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n    enableDownload: true,\n    responseType: 'blob'\n  });\n\nconst { loading, data, downloading, send, onSuccess } = useRequest(downloadFile, {\n  immediate: false\n});\nonSuccess(({ data: imageBlob }) => {\n  // \u4e0b\u8f7d\u56fe\u7247\n  const anchor = document.createElement('a');\n  anchor.href = URL.createObjectURL(blob);\n  anchor.download = 'image.jpg';\n  anchor.click();\n  URL.revokeObjectURL(anchor.href);\n});\nconst handleImageDownload = () => {\n  send();\n};\n")),(0,r.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"),(0,r.kt)("p",null,"\u5728\u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\u3002\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.kt)("a",{parentName:"p",href:"/extension/alova-mock"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,r.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u4f7f\u7528 axios \u9002\u914d\u5668\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f",(0,r.kt)("strong",{parentName:"p"},"AxiosResponse"),"\u517c\u5bb9\u7684\uff0c\u9519\u8bef\u5b9e\u4f8b\u662f",(0,r.kt)("strong",{parentName:"p"},"AxiosError"),"\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528",(0,r.kt)("strong",{parentName:"p"},"@alova/adapter-axios"),"\u5305\u4e2d\u5bfc\u51fa\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"axiosMockResponse"),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport { axiosRequestAdapter, axiosMockResponse } from '@alova/adapter-axios';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9ataro\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: axiosRequestAdapter(),\n\n  // axiosMockResponse\u4e2d\u5305\u542b\u4e86onMockResponse\u548conMockError\n  // \u7528\u4e8e\u5c06\u6a21\u62df\u6570\u636e\u8f6c\u6362\u4e3aAxiosResponse\u548cAxiosError\u517c\u5bb9\u7684\u683c\u5f0f\n  ...axiosMockResponse\n});\n\nexport const alovaInst = createAlova({\n  // ...\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : axiosRequestAdapter()\n});\n")),(0,r.kt)("h2",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"axios \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e axios \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"),(0,r.kt)("h3",{id:"method-\u914d\u7f6e"},"method \u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosRequestConfig"),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * axios\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n * \u53bb\u6389\u4e86\u4e0emethod\u51b2\u7a81\u7684\u5c5e\u6027\n */\nexport type AlovaAxiosRequestConfig = Omit<\n  AxiosRequestConfig,\n  | 'url'\n  | 'method'\n  | 'baseURL'\n  | 'headers'\n  | 'params'\n  | 'data'\n  | 'timeout'\n  | 'cancelToken'\n  | 'signal'\n  | 'onUploadProgress'\n  | 'onDownloadProgress'\n>;\n")),(0,r.kt)("h3",{id:"\u54cd\u5e94\u6570\u636e"},"\u54cd\u5e94\u6570\u636e"),(0,r.kt)("p",null,"axios \u7684\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosResponse"),"\uff0c\u5f53\u4f60\u4f7f\u7528 axios \u9002\u914d\u5668\u65f6\uff0c\u4e5f\u5c06\u83b7\u5f97\u76f8\u540c\u683c\u5f0f\u7684\u54cd\u5e94\u6570\u636e\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  requestAdapter: axiosRequestAdapter(),\n  responsed(response) {\n    // response\u81ea\u52a8\u88ab\u63a8\u65ad\u4e3aAxiosResponse\u7c7b\u578b\n    return response.data;\n  }\n});\n")),(0,r.kt)("h3",{id:"\u9519\u8bef"},"\u9519\u8bef"),(0,r.kt)("p",null,"\u5f53 axios \u9047\u5230\u975e 20x \u548c 30x \u7684\u54cd\u5e94\u72b6\u6001\u7801\u65f6\u5c06\u4f1a\u629b\u51fa\u9519\u8bef\uff0c\u4e3a\u4e86\u5305\u542b\u66f4\u591a\u4fe1\u606f\uff0caxios \u5c06\u9519\u8bef\u5b9e\u4f8b\u81ea\u5b9a\u4e49\u8bbe\u8ba1\u6210\u4e86\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"AxiosError"),"\u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f\u666e\u901a\u7684 Error \u5b9e\u4f8b\uff0c\u56e0\u6b64\u5f53\u9047\u5230\u670d\u52a1\u7aef\u9519\u8bef\u6216\u7f51\u7edc\u9519\u8bef\u65f6\u90fd\u5c06\u629b\u51fa\u4e00\u4e2a\u9519\u8bef\uff0c\u4f60\u53ef\u4ee5\u5728\u5168\u5c40\u7684\u9519\u8bef\u56de\u8c03\u4e2d\u6355\u83b7\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  requestAdapter: axiosRequestAdapter(),\n  responsed: {\n    onSuccess(response) {\n      // response\u81ea\u52a8\u88ab\u63a8\u65ad\u4e3aAxiosResponse\u7c7b\u578b\n      return response.data;\n    },\n    onError(err: AxiosError) {\n      // err\u9ed8\u8ba4\u4e3aany\uff0c\u4f60\u53ef\u4ee5\u5f3a\u5236\u8f6c\u6362\u4e3aAxiosError\u5904\u7406\n      // ...\n    }\n  }\n});\n")))}m.isMDXComponent=!0}}]);