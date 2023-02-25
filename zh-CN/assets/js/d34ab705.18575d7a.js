"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u4f7f\u7528method\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42",sidebar_position:30},i=void 0,s={unversionedId:"next-step/send-request-directly",id:"next-step/send-request-directly",title:"\u4f7f\u7528method\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42",description:"v1.2.0+",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-next-step/03-send-request-directly.md",sourceDirName:"06-next-step",slug:"/next-step/send-request-directly",permalink:"/zh-CN/next-step/send-request-directly",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/03-send-request-directly.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"\u4f7f\u7528method\u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u5171\u4eab\u8bf7\u6c42",permalink:"/zh-CN/next-step/share-request"},next:{title:"Method\u5b9e\u4f8b\u5339\u914d\u5668",permalink:"/zh-CN/next-step/method-instance-matcher"}},l={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"v1.2.0+")),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u53ea\u60f3\u8981\u7b80\u5355\u5730\u53d1\u51fa\u8bf7\u6c42\uff0c\u800c\u4e0d\u662f\u901a\u8fc7 use hook \u7684\u5f62\u5f0f\u83b7\u5f97\u5404\u79cd\u54cd\u5e94\u72b6\u6001\uff0c\u6216\u8005\u5728\u7ec4\u4ef6\u5916\u53d1\u9001\u8bf7\u6c42\uff0c\u6b64\u65f6\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"send"),"\u51fd\u6570\u5373\u53ef\uff0c\u5b83\u5c06\u8fd4\u56de\u4e00\u4e2a\u5e26\u8fd4\u56de\u53c2\u6570\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u83b7\u53d6\u5168\u5c40\u7684\u7528\u6237\u4fe1\u606f\nconst globalUserGetter = alovaInstance.Get('/global/user', {\n  params: {\n    userId: 1\n  },\n  transformData(rawData, headers) {\n    return {\n      data: rawData,\n      respHeaders: headers\n    };\n  }\n});\n\n// send\u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u8868\u793a\u662f\u5426\u5f3a\u5236\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3afalse\nconst { data, respHeaders } = await globalUserGetter.send(true);\n// \u4f7f\u7528\u6570\u636e...\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u7684\u54cd\u5e94\u6570\u636e\u4e5f\u4f1a\u4f9d\u6b21\u88ab\u5168\u5c40\u7684 responsed \u548c\u5f53\u524d",(0,a.kt)("inlineCode",{parentName:"li"},"Method"),"\u5b9e\u4f8b\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"transformData"),"\u5904\u7406\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u673a\u5236\u4f9d\u7136\u6709\u6548\uff0c\u5982\u679c\u547d\u4e2d\u7f13\u5b58\u4e5f\u4f1a\u8fd4\u56de\u7f13\u5b58\u6570\u636e\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"send"),"\u65b9\u6cd5\u4e2d\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u6765\u5f3a\u5236\u53d1\u8d77\u8bf7\u6c42\uff1b"))))}d.isMDXComponent=!0}}]);