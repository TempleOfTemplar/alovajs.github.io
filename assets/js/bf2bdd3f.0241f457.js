"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1087],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||o;return a?t.createElement(g,l(l({ref:n},u),{},{components:a})):t.createElement(g,l({ref:n},u))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>c});var t=a(7462),r=a(7294),o=a(6010),l=a(2389),i=a(7392),s=a(7094),d=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var n;const{lazy:a,block:l,defaultValue:m,values:c,groupId:g,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),k=(0,i.l)(h,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==b&&!h.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[R,P]=(0,r.useState)(b),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=g){const e=y[g];null!=e&&e!==R&&h.some((n=>n.value===e))&&P(e)}const T=e=>{const n=e.currentTarget,a=S.indexOf(n),t=h[a].value;t!==R&&(x(n),P(t),null!=g&&N(g,String(t)))},E=e=>{var n;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;a=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;a=S[n]??S[S.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:R===n?0:-1,"aria-selected":R===n,key:n,ref:e=>S.push(e),onKeyDown:E,onClick:T},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":R===n})}),a??n)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===R))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==R})))))}function c(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},2307:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var t=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={title:"usePagination",sidebar_position:20},s=void 0,d={unversionedId:"extension/alova-hooks/usePagination",id:"extension/alova-hooks/usePagination",title:"usePagination",description:"\u5b89\u88c5",source:"@site/docs/09-extension/02-alova-hooks/01-usePagination.md",sourceDirName:"09-extension/02-alova-hooks",slug:"/extension/alova-hooks/usePagination",permalink:"/extension/alova-hooks/usePagination",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/09-extension/02-alova-hooks/01-usePagination.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"usePagination",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55hooks",permalink:"/category/\u6269\u5c55hooks"},next:{title:"useIntervalRequest",permalink:"/extension/alova-hooks/useIntervalRequest"}},u={},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5f15\u5165",id:"\u5f15\u5165",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u5217\u8868\u64cd\u4f5c\u51fd\u6570\u8bf4\u660e",id:"\u5217\u8868\u64cd\u4f5c\u51fd\u6570\u8bf4\u660e",level:2},{value:"\u63d2\u5165\u5217\u8868\u9879",id:"\u63d2\u5165\u5217\u8868\u9879",level:3},{value:"\u79fb\u9664\u5217\u8868\u9879",id:"\u79fb\u9664\u5217\u8868\u9879",level:3},{value:"\u66f4\u65b0\u6570\u636e\u9879",id:"\u66f4\u65b0\u6570\u636e\u9879",level:3},{value:"\u5237\u65b0\u6307\u5b9a\u9875\u7684\u6570\u636e",id:"\u5237\u65b0\u6307\u5b9a\u9875\u7684\u6570\u636e",level:3},{value:"\u91cd\u7f6e\u5217\u8868",id:"\u91cd\u7f6e\u5217\u8868",level:3},{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u9650\u5236",id:"\u9650\u5236",level:2}],m={toc:p};function c(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/hooks --save\n"))),(0,r.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/hooks\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528\u6269\u5c55hooks\u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86alova\u7684\u57fa\u672c\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u4e3a\u5206\u9875\u573a\u666f\u4e0b\u8bbe\u8ba1\u7684hook\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0b\u62c9\u52a0\u8f7d\u548c\u9875\u7801\u7ffb\u9875\u4e24\u79cd\u5206\u9875\u573a\u666f\u4e0b\u4f7f\u7528\u5b83\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u6b64hook\u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u7279\u6027\uff0c\u52a9\u4f60\u7684\u5e94\u7528\u6253\u9020\u6027\u80fd\u66f4\u597d\uff0c\u4f7f\u7528\u66f4\u4fbf\u6377\u7684\u5206\u9875\u529f\u80fd"),"\u3002"),(0,r.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2728\u4e30\u5bcc\u5168\u9762\u7684\u5206\u9875\u72b6\u6001\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u4e30\u5bcc\u5168\u9762\u7684\u5206\u9875\u4e8b\u4ef6\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u66f4\u6539page\u3001pageSize\u81ea\u52a8\u83b7\u53d6\u6307\u5b9a\u5206\u9875\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u6570\u636e\u7f13\u5b58\uff0c\u65e0\u9700\u91cd\u590d\u8bf7\u6c42\u76f8\u540c\u53c2\u6570\u7684\u5217\u8868\u6570\u636e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u524d\u540e\u9875\u9884\u52a0\u8f7d\uff0c\u7ffb\u9875\u4e0d\u518d\u7b49\u5f85\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u641c\u7d22\u6761\u4ef6\u76d1\u542c\u81ea\u52a8\u91cd\u65b0\u83b7\u53d6\u9875\u6570\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u652f\u6301\u5217\u8868\u6570\u636e\u7684\u65b0\u589e\u3001\u7f16\u8f91\u3001\u5220\u9664\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u652f\u6301\u5237\u65b0\u6307\u5b9a\u9875\u7684\u6570\u636e\uff0c\u65e0\u9700\u91cd\u7f6e\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u2728\u8bf7\u6c42\u7ea7\u641c\u7d22\u9632\u6296\uff0c\u65e0\u9700\u81ea\u884c\u7ef4\u62a4\uff1b")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../example/paginated-list"},"\u9875\u7801\u5217\u8868")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../example/load-more"},"\u4e0b\u62c9\u52a0\u8f7d\u66f4\u591a")),(0,r.kt)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { usePagination } from '@alova/hooks/vue';\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { usePagination } from '@alova/hooks/react';\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { usePagination } from '@alova/hooks/svelte';\n")))),(0,r.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)("p",null,"\u5c55\u793a\u548c\u64cd\u4f5c\u5b66\u751f\u5217\u8868\uff0c\u4ee5vue\u4e3a\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { ref, watchEffect } from 'vue';\nimport { queryStudents, removeStudent, editStudent } from './api.js';\nimport { usePagination } from '@alova/hooks/vue';\nimport { useRequest } from 'alova';\n\n// \u641c\u7d22\u6761\u4ef6\u72b6\u6001\nconst studentName = ref('');\nconst clsName = ref('');\n\nconst {\n  // \u52a0\u8f7d\u72b6\u6001\n  loading,\n\n  // \u5217\u8868\u6570\u636e\n  data,\n\n  // \u662f\u5426\u4e3a\u6700\u540e\u4e00\u9875\n  // \u4e0b\u62c9\u52a0\u8f7d\u65f6\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\u5224\u65ad\u662f\u5426\u8fd8\u9700\u8981\u52a0\u8f7d\n  isLastPage,\n\n  // \u5f53\u524d\u9875\u7801\uff0c\u6539\u53d8\u6b64\u9875\u7801\u5c06\u81ea\u52a8\u89e6\u53d1\u8bf7\u6c42\n  page,\n\n  // \u6bcf\u9875\u6570\u636e\u6761\u6570\n  pageSize,\n\n  // \u5217\u8868\u9879\u79fb\u9664\u51fd\u6570\n  remove,\n\n  // \u5217\u8868\u9879\u63d2\u5165\u51fd\u6570\n  insert,\n\n  // \u5237\u65b0\u51fd\u6570,\u4f60\u53ef\u4ee5\u6307\u5b9a\u5237\u65b0\u67d0\u4e00\u9875\u6570\u636e\n  refresh,\n\n  // \u91cd\u7f6e\u51fd\u6570\uff0c\u8c03\u7528\u540e\u5c06\u6e05\u7a7a\u6570\u636e\u5e76\u91cd\u65b0\u52a0\u8f7d\u7b2c\u4e00\u9875\n  reload\n} = usePagination(\n  // Method\u5b9e\u4f8b\u83b7\u53d6\u51fd\u6570\uff0c\u5b83\u5c06\u63a5\u6536page\u548cpageSize\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2aMethod\u5b9e\u4f8b\n  (page, pageSize) => queryStudents(page, pageSize, studentName.value, clsName.value),\n  {\n    watchingStates: [studentName, clsName], // \u5916\u90e8\u76d1\u542c\u7684\u72b6\u6001\uff0c\u5982\u641c\u7d22\u6761\u4ef6\n    initialData: [], // \u8bf7\u6c42\u524d\u7684\u521d\u59cb\u6570\u636e\uff0c\n    debounce: 300, // \u9632\u6296\u53c2\u6570\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u6570\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6570\u7ec4\u5bf9watchingStates\u5355\u72ec\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4\n    // append: true, // \u662f\u5426\u542f\u7528\u8ffd\u52a0\u6a21\u5f0f\uff0c\u5728\u4e0b\u62c9\u52a0\u8f7d\u65f6\u9700\u8bbe\u7f6e\u4e3atrue\uff0c\u9ed8\u8ba4\u4e3afalse\n    // preloadPreviousPage: true, // \u662f\u5426\u9884\u52a0\u8f7d\u4e0a\u4e00\u9875\u6570\u636e\uff0c\u9ed8\u8ba4\u4e3atrue\n    // preloadNextPage: true, // \u662f\u5426\u9884\u52a0\u8f7d\u4e0b\u4e00\u9875\u6570\u636e\uff0c\u9ed8\u8ba4\u4e3atrue\n    // total: data => data['total'], // \u6307\u5b9a\u5982\u4f55\u83b7\u53d6\u5217\u8868\u9879\u603b\u6570\u503c\uff0cdata\u4e3a\u54cd\u5e94\u6570\u636e\uff0c\u9ed8\u8ba4\u83b7\u53d6data.total\n    // data: data['data'], // \u6307\u5b9a\u5982\u4f55\u83b7\u53d6\u5217\u8868\u6570\u636e\uff0cdata\u4e3a\u54cd\u5e94\u6570\u636e\uff0c\u9ed8\u8ba4\u83b7\u53d6data.data\n    // initialPage: 1, // \u521d\u59cb\u9875\u7801\uff0c\u9ed8\u8ba4\u4e3a1\n    // initialPageSize: 10, // \u521d\u59cb\u6bcf\u9875\u6570\u636e\u6761\u6570\uff0c\u9ed8\u8ba4\u4e3a10\n    // immediate: true // \u662f\u5426\u7acb\u5373\u53d1\u51fa\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3atrue\n  }\n);\n\n\n// \u4e0b\u4e00\u9875\nconst handleNextPage = () => {\n  page.value++;\n};\n\n// \u901a\u8fc7\u9759\u9ed8\u63d0\u4ea4\u79fb\u9664\u5217\u8868\u9879\nconst {\n  send: removeSend,\n  onSuccess: onRemoveSuccess\n} = useRequest(id => removeStudent(id), {\n  immediate: false,\n  silent: true,\n});\nonRemoveSuccess((_, removeId) => {\n  // \u4f20\u5165\u79fb\u9664\u7684\u7d22\u5f15\u9879\u79fb\u9664\u5236\u5b9a\u9879\n  remove(students.value.findIndex((s) => s.id === removeId));\n});\n\n\n// \u65b0\u589e\u6216\u7f16\u8f91\u5217\u8868\u9879\nconst detail = ref({\n  name: '',\n  cls: '',\n});\nconst {\n  loading: submiting,\n  send: sendStudentEdit,\n  onSuccess,\n} = useRequest(\n  selectedId => editStudent(detail.value.name, detail.value.cls, selectedId),\n  {\n    immediate: false,\n    silent: true,\n  }\n);\nonSuccess((_, selectedId) => {\n  if (selectedId) {\n    // \u7f16\u8f91\u65f6\uff0c\u5237\u65b0\u66f4\u65b0\u7684\u5217\u8868\u9879\u6240\u5728\u9875\uff0c\u65e0\u9700\u91cd\u7f6e\u5217\u8868\n    const refreshPage = Math.floor(students.value.findIndex(({ id }) => id === selectedId) / pageSize.value) + 1;\n    refresh(refreshPage);\n  } else {\n    // \u6dfb\u52a0\u65f6\uff0c\u91cd\u7f6e\u5217\u8868\n    reload();\n  }\n});\n\n// \u63d0\u4ea4\u5b66\u751f\u4fe1\u606f\u56de\u8c03\uff0cselectedId\u6709\u503c\u8868\u793a\u7f16\u8f91\uff0c\u5426\u5219\u4e3a\u65b0\u589e\nconst handleSubmit = selectedId => {\n  sendStudentEdit(selectedId);\n};\n")),(0,r.kt)("admonition",{title:"debounce\u53c2\u6570\u8bf4\u660e",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"debounce\u53c2\u6570\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u6570\u7ec4\uff0c\u5bf9\u76d1\u542c\u72b6\u6001(watchingStates)\u53d8\u5316\u5355\u72ec\u8bbe\u7f6e\u9632\u6296\u65f6\u95f4\uff0c\u5b83\u662f\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"../../request-timing/use-watcher#%E8%AF%B7%E6%B1%82%E9%98%B2%E6%8A%96"},(0,r.kt)("strong",{parentName:"a"},"useWatcher"))," \u6765\u5b9e\u73b0\u7684\u3002",(0,r.kt)("strong",{parentName:"p"},"\u76d1\u542c\u72b6\u6001\u672b\u5c3e\u5206\u522b\u8fd8\u6709page\u548cpageSize\u4e24\u4e2a\u9690\u85cf\u7684\u76d1\u542c\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7debounce\u6765\u8bbe\u7f6e\u3002"))),(0,r.kt)("h2",{id:"\u5217\u8868\u64cd\u4f5c\u51fd\u6570\u8bf4\u660e"},"\u5217\u8868\u64cd\u4f5c\u51fd\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"usePagination\u63d0\u4f9b\u4e86\u529f\u80fd\u5b8c\u5584\u7684\u5217\u8868\u64cd\u4f5c\u51fd\u6570\uff0c\u5b83\u53ef\u4ee5\u5728\u4e0d\u91cd\u65b0\u8bf7\u6c42\u5217\u8868\u7684\u60c5\u51b5\u4e0b\uff0c\u505a\u5230\u4e0e\u91cd\u65b0\u8bf7\u6c42\u5217\u8868\u4e00\u81f4\u7684\u6548\u679c\uff0c\u5927\u5927\u63d0\u9ad8\u4e86\u9875\u9762\u7684\u4ea4\u4e92\u4f53\u9a8c\uff0c\u5177\u4f53\u7684\u51fd\u6570\u8bf4\u660e\u7ee7\u7eed\u5f80\u4e0b\u770b\u5427\uff01"),(0,r.kt)("h3",{id:"\u63d2\u5165\u5217\u8868\u9879"},"\u63d2\u5165\u5217\u8868\u9879"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u5b83\u63d2\u5165\u5217\u8868\u9879\u5230\u5217\u8868\u4efb\u610f\u4f4d\u7f6e\uff0c\u5b83\u5c06\u4f1a\u5728\u63d2\u5165\u4e4b\u540e\u53bb\u6389\u672b\u5c3e\u7684\u4e00\u9879\uff0c\u6765\u4fdd\u8bc1\u548c\u91cd\u65b0\u8bf7\u6c42\u5f53\u524d\u9875\u6570\u636e\u4e00\u81f4\u7684\u6548\u679c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u63d2\u5165\u4e00\u6761\u6570\u636e\uff0c\u672a\u4f20\u5165index\u65f6\u9ed8\u8ba4\u63d2\u5165\u5230\u6700\u524d\u9762\n * @param item \u63d2\u5165\u9879\n * @param index \u63d2\u5165\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09\n */\ninsert: (item: LD[number], index?: number) => void;\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u975eappend\u6a21\u5f0f"),"\u4e0b\uff08\u9875\u7801\u7ffb\u9875\u573a\u666f\uff09\uff0c\u8fd4\u56de\u7b2c\u4e00\u9875\u518d\u63d2\u5165\u5217\u8868\u9879\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"page.value = 1;\nnextTick(() => {\n  insert(newItem, 0);\n});\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u5728",(0,r.kt)("strong",{parentName:"p"},"append\u6a21\u5f0f"),"\u4e0b\uff08\u4e0b\u62c9\u52a0\u8f7d\u573a\u666f\uff09\uff0c\u63d2\u5165\u5217\u8868\u9879\u540e\u6eda\u52a8\u5230\u6700\u9876\u90e8\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"insert(newItem, 0);\nnextTick(() => {\n  window.scrollTo(0, {});\n});\n")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"onBefore\u3001\u63d2\u5165\u64cd\u4f5c\u3001onAfter\u90fd\u662f\u4e32\u884c\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u6b64\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"onBefore"),"\u4e2d\u66f4\u6539\u4e86\u72b6\u6001\uff0c\u89c6\u56fe\u5c06\u4f1a\u5237\u65b0\u518d\u6267\u884c\u63d2\u5165\u64cd\u4f5c\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u8ba9\u6570\u636e\u6b63\u786e\uff0cinsert\u51fd\u6570\u8c03\u7528\u4f1a\u6e05\u9664\u5168\u90e8\u7f13\u5b58\u3002")),(0,r.kt)("h3",{id:"\u79fb\u9664\u5217\u8868\u9879"},"\u79fb\u9664\u5217\u8868\u9879"),(0,r.kt)("p",null,"\u5728\u4e0b\u4e00\u9875\u6709\u7f13\u5b58\u7684\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u4f1a\u5728\u79fb\u9664\u4e00\u9879\u540e\u4f7f\u7528\u4e0b\u4e00\u9875\u7684\u7f13\u5b58\u8865\u5145\u5230\u5217\u8868\u9879\u5c3e\u90e8\uff0c\u6765\u4fdd\u8bc1\u548c\u91cd\u65b0\u8bf7\u6c42\u5f53\u524d\u9875\u6570\u636e\u4e00\u81f4\u7684\u6548\u679c\uff0c\u5728",(0,r.kt)("strong",{parentName:"p"},"append\u6a21\u5f0f"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u975eappend\u6a21\u5f0f"),"\u4e0b\u8868\u73b0\u76f8\u540c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u79fb\u9664\u4e00\u6761\u6570\u636e\n * @param index \u79fb\u9664\u7684\u7d22\u5f15\n */\nremove: (index: number) => void;\n")),(0,r.kt)("p",null,"\u4f46\u5728\u4ee5\u4e0b\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u5c06\u91cd\u65b0\u53d1\u8d77\u8bf7\u6c42\u5237\u65b0\u5bf9\u5e94\u9875\u7684\u6570\u636e\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u4e00\u9875\u6ca1\u6709\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ol"},"\u540c\u6b65\u8fde\u7eed\u8c03\u7528\u4e86\u8d85\u8fc7\u4e0b\u4e00\u9875\u7f13\u5b58\u5217\u8868\u9879\u7684\u6570\u636e\uff0c\u7f13\u5b58\u6570\u636e\u5df2\u7ecf\u4e0d\u591f\u8865\u5145\u5230\u5f53\u524d\u9875\u5217\u8868\u4e86\u3002")),(0,r.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u8ba9\u6570\u636e\u6b63\u786e\uff0cremove\u51fd\u6570\u8c03\u7528\u4f1a\u6e05\u9664\u5168\u90e8\u7f13\u5b58\u3002")),(0,r.kt)("h3",{id:"\u66f4\u65b0\u6570\u636e\u9879"},"\u66f4\u65b0\u6570\u636e\u9879"),(0,r.kt)("p",null,"\u5f53\u4f60\u60f3\u8981\u66f4\u65b0\u5217\u8868\u9879\u65f6\uff0c\u4f7f\u7528\u6b64\u51fd\u6570\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u66ff\u6362\u4e00\u6761\u6570\u636e\n * @param item \u66ff\u6362\u9879\n * @param index \u66ff\u6362\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09\n */\nreplace: (item: LD[number], index: number) => void;\n")),(0,r.kt)("h3",{id:"\u5237\u65b0\u6307\u5b9a\u9875\u7684\u6570\u636e"},"\u5237\u65b0\u6307\u5b9a\u9875\u7684\u6570\u636e"),(0,r.kt)("p",null,"\u5f53\u4f60\u5728\u6570\u636e\u64cd\u4f5c\u540e\u4e0d\u5e0c\u671b\u672c\u5730\u66f4\u65b0\u5217\u8868\u9879\uff0c\u800c\u662f\u91cd\u65b0\u8bf7\u6c42\u670d\u52a1\u7aef\u7684\u6570\u636e\uff0c\u4f60\u53ef\u4ee5\u7528refresh\u5237\u65b0\u4efb\u610f\u9875\u7684\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u91cd\u7f6e\u5217\u8868\u6570\u636e\u8ba9\u7528\u6237\u53c8\u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u6d4f\u89c8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u5237\u65b0\u6307\u5b9a\u9875\u7801\u6570\u636e\uff0c\u6b64\u51fd\u6570\u5c06\u5ffd\u7565\u7f13\u5b58\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\n * @param refreshPage \u5237\u65b0\u7684\u9875\u7801\n */\nrefresh: (refreshPage: number) => void;\n")),(0,r.kt)("h3",{id:"\u91cd\u7f6e\u5217\u8868"},"\u91cd\u7f6e\u5217\u8868"),(0,r.kt)("p",null,"\u5b83\u5c06\u6e05\u7a7a\u5168\u90e8\u7f13\u5b58\uff0c\u5e76\u91cd\u65b0\u52a0\u8f7d\u7b2c\u4e00\u9875\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * \u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u91cd\u65b0\u52a0\u8f7d\u5217\u8868\uff0c\u5e76\u6e05\u7a7a\u7f13\u5b58\n */\nreload: () => void;\n")),(0,r.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface UsePaginationReturnType<LD extends any[], R> {\n    loading: Ref<boolean>;\n    error: Ref<Error | undefined>;\n    downloading: Ref<Progress>;\n    uploading: Ref<Progress>;\n    page: Ref<number>;\n    pageSize: Ref<number>;\n    data: Ref<LD>;\n    pageCount: ComputedRef<number | undefined>;\n    total: ComputedRef<number | undefined>;\n    isLastPage: ComputedRef<boolean>;\n\n    abort: () => void;\n    send: (...args: any[]) => Promise<R>;\n    onSuccess: (handler: SuccessHandler<R>) => void;\n    onError: (handler: ErrorHandler) => void;\n    onComplete: (handler: CompleteHandler) => void;\n\n    fetching: Ref<boolean>;\n    onFetchSuccess: (handler: SuccessHandler<R>) => void;\n    onFetchError: (handler: ErrorHandler) => void;\n    onFetchComplete: (handler: CompleteHandler) => void;\n\n    /**\n     * \u5237\u65b0\u6307\u5b9a\u9875\u7801\u6570\u636e\uff0c\u6b64\u51fd\u6570\u5c06\u5ffd\u7565\u7f13\u5b58\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\n     * @param refreshPage \u5237\u65b0\u7684\u9875\u7801\n     */\n    refresh: (refreshPage: number) => void;\n\n    /**\n     * \u63d2\u5165\u4e00\u6761\u6570\u636e\n     * onBefore\u3001\u63d2\u5165\u64cd\u4f5c\u3001onAfter\u4e09\u4e2a\u90fd\u9700\u8981\u5206\u522b\u987a\u5e8f\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u4e3a\u9700\u8981\u7b49\u5f85\u89c6\u56fe\u66f4\u65b0\u518d\u6267\u884c\n     * @param item \u63d2\u5165\u9879\n     * @param config \u63d2\u5165\u914d\u7f6e\n     */\n    insert: (item: LD[number], config?: InsertConfig) => void;\n\n    /**\n     * \u79fb\u9664\u4e00\u6761\u6570\u636e\n     * @param index \u79fb\u9664\u7684\u7d22\u5f15\n     */\n    remove: (index: any) => void;\n\n    /**\n     * \u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u91cd\u65b0\u52a0\u8f7d\u5217\u8868\uff0c\u5e76\u6e05\u7a7a\u7f13\u5b58\n     */\n    reload: () => void;\n}\n\n/**\n * \u57fa\u4e8ealova.js\u7684vue\u5206\u9875hook\n * \u5206\u9875\u76f8\u5173\u72b6\u6001\u81ea\u52a8\u7ba1\u7406\u3001\u524d\u540e\u4e00\u9875\u9884\u52a0\u8f7d\u3001\u81ea\u52a8\u7ef4\u62a4\u6570\u636e\u7684\u65b0\u589e/\u7f16\u8f91/\u66ff\u6362/\u79fb\u9664\n *\n * @param handler method\u521b\u5efa\u51fd\u6570\n * @param config pagination hook\u914d\u7f6e\n * @returns {UsePaginationReturnType}\n */\nexport declare function usePagination<S extends Ref, E extends Ref, R, T, RC, RE, RH, LD extends any[], WS extends WatchSource[]>(\n    handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,\n    config: PaginationConfig<R, LD, WS>\n): UsePaginationReturnType<LD, R>;\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReactState<S> = [S, Dispatch<SetStateAction<S>>];\ninterface UsePaginationReturnType<LD extends any[], R> {\n    loading: boolean;\n    error: Error | undefined;\n    downloading: Progress;\n    uploading: Progress;\n    page: ReactState<number>;\n    pageSize: ReactState<number>;\n    data: LD;\n    pageCount: number | undefined;\n    total: number | undefined;\n    isLastPage: boolean;\n\n    abort: () => void;\n    send: (...args: any[]) => Promise<R>;\n    onSuccess: (handler: SuccessHandler<R>) => void;\n    onError: (handler: ErrorHandler) => void;\n    onComplete: (handler: CompleteHandler) => void;\n\n    fetching: boolean;\n    onFetchSuccess: (handler: SuccessHandler<R>) => void;\n    onFetchError: (handler: ErrorHandler) => void;\n    onFetchComplete: (handler: CompleteHandler) => void;\n\n    /**\n     * \u5237\u65b0\u6307\u5b9a\u9875\u7801\u6570\u636e\uff0c\u6b64\u51fd\u6570\u5c06\u5ffd\u7565\u7f13\u5b58\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\n     * @param refreshPage \u5237\u65b0\u7684\u9875\u7801\n     */\n    refresh: (refreshPage: number) => void;\n\n    /**\n     * \u63d2\u5165\u4e00\u6761\u6570\u636e\n     * onBefore\u3001\u63d2\u5165\u64cd\u4f5c\u3001onAfter\u4e09\u4e2a\u90fd\u9700\u8981\u5206\u522b\u987a\u5e8f\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u4e3a\u9700\u8981\u7b49\u5f85\u89c6\u56fe\u66f4\u65b0\u518d\u6267\u884c\n     * @param item \u63d2\u5165\u9879\n     * @param config \u63d2\u5165\u914d\u7f6e\n     */\n    insert: (item: LD[number], config?: InsertConfig) => void;\n\n    /**\n     * \u79fb\u9664\u4e00\u6761\u6570\u636e\n     * @param index \u79fb\u9664\u7684\u7d22\u5f15\n     */\n    remove: (index: any) => void;\n\n    /**\n     * \u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u91cd\u65b0\u52a0\u8f7d\u5217\u8868\uff0c\u5e76\u6e05\u7a7a\u7f13\u5b58\n     */\n    reload: () => void;\n}\n\n/**\n * \u57fa\u4e8ealova.js\u7684react\u5206\u9875hook\n * \u5206\u9875\u76f8\u5173\u72b6\u6001\u81ea\u52a8\u7ba1\u7406\u3001\u524d\u540e\u4e00\u9875\u9884\u52a0\u8f7d\u3001\u81ea\u52a8\u7ef4\u62a4\u6570\u636e\u7684\u65b0\u589e/\u7f16\u8f91/\u79fb\u9664\n *\n * @param handler method\u521b\u5efa\u51fd\u6570\n * @param config pagination hook\u914d\u7f6e\n * @returns {UsePaginationReturnType}\n */\nexport declare function usePagination<S, E, R, T, RC, RE, RH, LD extends any[], WS extends DependencyList>(\n    handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,\n    config: PaginationConfig<R, LD, WS>\n): UsePaginationReturnType<LD, R>;\n\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface UsePaginationReturnType<LD extends any[], R> {\n    loading: Writable<boolean>;\n    error: Writable<Error | undefined>;\n    downloading: Writable<Progress>;\n    uploading: Writable<Progress>;\n    page: Writable<number>;\n    pageSize: Writable<number>;\n    data: Writable<LD>;\n    pageCount: Readable<number | undefined>;\n    total: Readable<number | undefined>;\n    isLastPage: Readonly<Readable<boolean>>;\n\n    abort: () => void;\n    send: (...args: any[]) => Promise<R>;\n    onSuccess: (handler: SuccessHandler<R>) => void;\n    onError: (handler: ErrorHandler) => void;\n    onComplete: (handler: CompleteHandler) => void;\n\n    fetching: Writable<boolean>;\n    onFetchSuccess: (handler: SuccessHandler<R>) => void;\n    onFetchError: (handler: ErrorHandler) => void;\n    onFetchComplete: (handler: CompleteHandler) => void;\n\n    /**\n     * \u5237\u65b0\u6307\u5b9a\u9875\u7801\u6570\u636e\uff0c\u6b64\u51fd\u6570\u5c06\u5ffd\u7565\u7f13\u5b58\u5f3a\u5236\u53d1\u9001\u8bf7\u6c42\n     * @param refreshPage \u5237\u65b0\u7684\u9875\u7801\n     */\n    refresh: (refreshPage: number) => void;\n\n    /**\n     * \u63d2\u5165\u4e00\u6761\u6570\u636e\n     * onBefore\u3001\u63d2\u5165\u64cd\u4f5c\u3001onAfter\u4e09\u4e2a\u90fd\u9700\u8981\u5206\u522b\u987a\u5e8f\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u4e3a\u9700\u8981\u7b49\u5f85\u89c6\u56fe\u66f4\u65b0\u518d\u6267\u884c\n     * @param item \u63d2\u5165\u9879\n     * @param config \u63d2\u5165\u914d\u7f6e\n     */\n    insert: (item: LD[number], config?: InsertConfig) => void;\n\n    /**\n     * \u79fb\u9664\u4e00\u6761\u6570\u636e\n     * @param index \u79fb\u9664\u7684\u7d22\u5f15\n     */\n    remove: (index: any) => void;\n\n    /**\n     * \u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u91cd\u65b0\u52a0\u8f7d\u5217\u8868\uff0c\u5e76\u6e05\u7a7a\u7f13\u5b58\n     */\n    reload: () => void;\n}\n\n/**\n * \u57fa\u4e8ealova.js\u7684svelte\u5206\u9875hook\n * \u5206\u9875\u76f8\u5173\u72b6\u6001\u81ea\u52a8\u7ba1\u7406\u3001\u524d\u540e\u4e00\u9875\u9884\u52a0\u8f7d\u3001\u81ea\u52a8\u7ef4\u62a4\u6570\u636e\u7684\u65b0\u589e/\u7f16\u8f91/\u79fb\u9664\n *\n * @param handler method\u521b\u5efa\u51fd\u6570\n * @param config pagination hook\u914d\u7f6e\n * @returns {UsePaginationReturnType}\n */\nexport declare function usePagination<S extends Writable<any>, E extends Writable<any>, R, T, RC, RE, RH, LD extends any[], WS extends Readable<any>[]>(\n    handler: (page: number, pageSize: number) => Method<S, E, R, T, RC, RE, RH>,\n    config: PaginationConfig<R, LD, WS>\n): UsePaginationReturnType<LD, R>;\n")))),(0,r.kt)("h2",{id:"\u9650\u5236"},"\u9650\u5236"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5217\u8868\u8bf7\u6c42\u652f\u6301\u7f13\u5b58\u529f\u80fd\uff0c\u5b83\u6781\u5927\u5730\u63d0\u9ad8\u4e86\u5217\u8868\u6027\u80fd\uff0c\u5f53\u4f60\u5bf9\u5217\u8868\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u5176\u5185\u90e8\u90fd\u4f1a\u81ea\u884c\u7ef4\u62a4\u5b83\u6240\u4ea7\u751f\u7684\u7f13\u5b58\uff0c\u76ee\u524d\u662f\u901a\u8fc7\u4fee\u6539\u6bcf\u4e2aMethod\u5b9e\u4f8b\u7684",(0,r.kt)("strong",{parentName:"li"},"name"),"\u5c5e\u6027\u5b9e\u73b0\u8ffd\u8e2a\u7684\uff0c\u56e0\u6b64\u4f20\u5165usePagination\u7684Method\u5b9e\u4f8b\u6682\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49name\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u4f60\u5bf9Method\u7684\u7ba1\u7406\uff0c\u540e\u7eed\u7684\u7248\u672c\u4e2d\u6211\u4eec\u4e5f\u5c06\u5bf9\u5b83\u8fdb\u884c\u4f18\u5316\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"insert"),"\u51fd\u6570\u9650\u5236\uff0c\u56e0\u4e3ausePagination\u6240\u8fd4\u56de\u7684data\u5e76\u4e0d\u662fuseWatcher\u8fd4\u56de\u7684data\uff0c\u76ee\u524d\u6682\u65e0\u6cd5\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"/next-step/delayed-data-update"},"\u5ef6\u8fdf\u6570\u636e\u66f4\u65b0"),"\u529f\u80fd\uff0c\u5982\u679c\u4f60\u7684\u65b0\u589e\u5217\u8868\u9879\u4f9d\u8d56\u670d\u52a1\u7aef\u6570\u636e\uff0c\u5efa\u8bae\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"refresh"),"\u6216",(0,r.kt)("inlineCode",{parentName:"li"},"reload"),"\u91cd\u65b0\u8bf7\u6c42\u6570\u636e\uff0c\u540c\u65f6\u6211\u4eec\u5c06\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\u9646\u7eed\u652f\u6301\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f")," \u548c ",(0,r.kt)("strong",{parentName:"li"},"\u6062\u590d\u6a21\u5f0f")," \u6682\u65f6\u65e0\u6548\u3002")))}c.isMDXComponent=!0}}]);