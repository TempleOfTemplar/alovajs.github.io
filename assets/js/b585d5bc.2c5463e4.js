"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{src:t}=e;return n.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},4186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=r(7462),a=r(7294),o=r(3905),i=r(3894);const l=()=>a.createElement(i.Z,{src:"https://codesandbox.io/embed/github/alovajs/alova-examples/tree/main/packages/condition-search?fontsize=14&hidenavigation=1&theme=dark"}),s={title:"Conditional Search",sidebar_position:18},c=void 0,p={unversionedId:"example/condition-search",id:"example/condition-search",title:"Conditional Search",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/02-example/03-condition-search.md",sourceDirName:"02-example",slug:"/example/condition-search",permalink:"/example/condition-search",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/03-condition-search.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{title:"Conditional Search",sidebar_position:18},sidebar:"tutorialSidebar",previous:{title:"form submission",permalink:"/example/submit-form"},next:{title:"Response Cache - Memory Mode",permalink:"/example/memory-cache"}},d={},m=[],u={toc:m};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,o.kt)("a",{parentName:"p",href:"/overview/index"},"Getting Started Guide"),";")),(0,o.kt)(l,{mdxType:"ConditionSearch"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This example mainly shows the simplicity of data search. There is no need for the developer to maintain the state of the request, data, etc., and there is no need to manually trigger the request to send. Just bind the state of the search conditions.")))}f.isMDXComponent=!0}}]);