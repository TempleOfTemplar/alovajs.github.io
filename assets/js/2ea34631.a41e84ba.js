"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,v=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),s=n(7392),c=n(7094),i=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:d,groupId:v,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,s.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:x}=(0,c.U)(),[O,E]=(0,r.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=v){const e=g[v];null!=e&&e!==O&&f.some((t=>t.value===e))&&E(e)}const T=e=>{const t=e.currentTarget,n=w.indexOf(t),a=f[n].value;a!==O&&(N(t),E(a),null!=v&&x(v,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>w.push(e),onKeyDown:j,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},c=void 0,i={unversionedId:"extension/alova-mock",id:"extension/alova-mock",title:"\u6a21\u62df\u6570\u636e",description:"\u901a\u8fc7alova\u7684mock\u63d2\u4ef6\uff0c\u4e0e\u4f20\u7edf\u7684Proxy\u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528mock\u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002",source:"@site/docs/09-extension/01-alova-mock.md",sourceDirName:"09-extension",slug:"/extension/alova-mock",permalink:"/extension/alova-mock",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/09-extension/01-alova-mock.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u6a21\u62df\u6570\u636e",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"useWindowFocusedRequest",permalink:"/extension/alova-hooks/useWindowFocusedRequest"},next:{title:"Taro\u9002\u914d\u5668",permalink:"/extension/alova-adapter-taro"}},u={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5b9a\u4e49mock\u63a5\u53e3",id:"\u5b9a\u4e49mock\u63a5\u53e3",level:2},{value:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7alova\u7684mock\u63d2\u4ef6\uff0c\u4e0e\u4f20\u7edf\u7684Proxy\u5f62\u5f0f\u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u5f88\u597d\u5730\u63a7\u5236\u4f7f\u7528mock\u6570\u636e\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5168\u5c40\u8303\u56f4\u3001\u67d0\u4e00\u7ec4\u63a5\u53e3\u8303\u56f4\uff0c\u751a\u81f3\u662f\u67d0\u4e00\u4e2a\u63a5\u53e3\u7684\u542f\u7528\u548c\u7981\u7528\uff0c\u8fd9\u5728\u6211\u4eec\u5b9e\u9645\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\u662f\u5f88\u6709\u7528\u7684\uff0c\u6bcf\u4e00\u6b21\u7684\u8fed\u4ee3\u90fd\u4f1a\u65b0\u589e\u6216\u4fee\u6539\u4e00\u7ec4\u63a5\u53e3\uff0c\u6211\u4eec\u5e0c\u671b\u8ba9\u4e4b\u524d\u7684\u529f\u80fd\u8fd8\u662f\u8d70\u5df2\u5f00\u53d1\u597d\u7684\u63a5\u53e3\uff0c\u800c\u8ba9\u65b0\u589e\u6216\u4fee\u6539\u7684\u63a5\u53e3\u8d70\u6a21\u62df\u6570\u636e\uff0c\u6b64\u65f6\u5c31\u53ef\u4ee5\u5c06\u6bcf\u4e2a\u5f00\u53d1\u4eba\u5458\u9488\u5bf9\u672c\u6b21\u8fed\u4ee3\u6d89\u53ca\u5230\u7684\u63a5\u53e3\u5206\u4e3a\u4e00\u7ec4\uff0c\u5e76\u5bf9\u5b83\u4eec\u8fdb\u884c\u5f00\u542f\u6216\u5173\u95ed\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/mock --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/mock\n")))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u4f7f\u7528\u6d41\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u5b9a\u4e49mock\u63a5\u53e3"},"\u5b9a\u4e49mock\u63a5\u53e3"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"defineMock"),"\u5b9a\u4e49\u4e00\u7ec4mock\u63a5\u53e3\uff0c\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e00\u9879\u6a21\u62df\u63a5\u53e3\u4e2d\u76f4\u63a5\u6307\u5b9a\u8fd4\u56de\u54cd\u5e94\u6570\u636e\uff0c\u6216\u6307\u5b9a\u4e3a\u56de\u8c03\u51fd\u6570\u52a8\u6001\u8ba1\u7b97\u54cd\u5e94\u6570\u636e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=mockGrou1.js",title:"mockGrou1.js"},"import { defineMock } from '@alova/mock';\n\nexport default defineMock({\n  // \u6355\u83b7get\u8bf7\u6c42\n  '/todo': [1, 2, 3, 4],\n\n  // rest\u98ce\u683c\u8bf7\u6c42\n  '/todo/{id}': ({ params }) => {\n    const id = params.id;\n    // ...\n    return {\n      title: '...',\n      time: '10:00'\n    };\n  },\n\n  // \u6355\u83b7post\u8bf7\u6c42\n  '[POST]/todo': ({ query, data }) => {\n    // ...\n    return { success: true };\n  },\n\n  // key\u524d\u9762\u6dfb\u52a0`-`\uff0c\u8868\u793a\u7981\u7528\u6b64mock\u63a5\u53e3\n  '-[DELETE]/todo/{id}': ({ params }) => {\n    // ...\n    return { success: true };\n  }\n}, true);  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u8868\u793a\u662f\u5426\u542f\u7528\u672c\u7ec4mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e3afalse\u5173\u95ed\n")),(0,r.kt)("h2",{id:"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"},"\u521b\u5efa\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"),(0,r.kt)("p",null,"\u5728\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"createAlova"),"\u65f6\u521b\u5efa\u4e00\u4e2a\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5e76\u5c06mock\u63a5\u53e3\u4f20\u5165\u5373\u53ef\u5b8c\u6210\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import GlobalFetch from 'alova/GlobalFetch';\nimport { createAlovaMockAdapter } from '@alova/mock';\nimport mockGroup1 from './mockGroup1';\n\n// highlight-start\nconst globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1, /** ... */], {\n  // \u5168\u5c40\u63a7\u5236\u662f\u5426\u542f\u7528mock\u63a5\u53e3\uff0c\u9ed8\u8ba4\u4e3atrue\n  enable: true,\n\n  // \u975e\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u7528\u4e8e\u672a\u5339\u914dmock\u63a5\u53e3\u65f6\u53d1\u9001\u8bf7\u6c42\n    httpAdapter: globalFetch,\n\n  // mock\u63a5\u53e3\u54cd\u5e94\u5ef6\u8fdf\uff0c\u5355\u4f4d\u6beb\u79d2\n    delay: 1000,\n\n  // \u662f\u5426\u6253\u5370mock\u63a5\u53e3\u8bf7\u6c42\u4fe1\u606f\n    mockRequestLogger: process.env.NODE_ENV === 'development'\n});\n// highlight-end\n\nexport const alovaInst = createAlova({\n    baseURL: 'http://xxx',\n\n  // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u90e8\u7f72\u73af\u5883\u4e0b\uff0c\u4e0d\u4f1a\u5c06mock\u76f8\u5173\u4ee3\u7801\u6253\u5305\u8fdb\u53bb\n    requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch,\n    statesHook: /** ... */\n});\n")),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u5c31\u53ef\u4ee5\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u548c\u5e73\u65f6\u4e00\u6837\u4f7f\u7528alova\u4e86\u3002"))}d.isMDXComponent=!0}}]);