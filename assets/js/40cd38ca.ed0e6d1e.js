"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<s;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const s={title:"Step 5 - Edit Data",sidebar_position:80},o=void 0,r={unversionedId:"strategy/sensorless-data-interaction/edit-item",id:"strategy/sensorless-data-interaction/edit-item",title:"Step 5 - Edit Data",description:"What should I do when the user needs to edit data when the network is disconnected?",source:"@site/docs/07-strategy/01-sensorless-data-interaction/08-edit-item.md",sourceDirName:"07-strategy/01-sensorless-data-interaction",slug:"/strategy/sensorless-data-interaction/edit-item",permalink:"/strategy/sensorless-data-interaction/edit-item",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/07-strategy/01-sensorless-data-interaction/08-edit-item.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Step 5 - Edit Data",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"Step 4 - Data Compensation",permalink:"/strategy/sensorless-data-interaction/data-compensation"},next:{title:"What more?",permalink:"/strategy/sensorless-data-interaction/what-more"}},l={},d=[{value:"Edit silent commit items",id:"edit-silent-commit-items",level:2},{value:"When the data item being edited is submitted successfully",id:"when-the-data-item-being-edited-is-submitted-successfully",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"What should I do when the user needs to edit data when the network is disconnected?")),(0,i.kt)("p",null,"At this point, two situations need to be explained:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The list data can meet the data echo of the edit page. At this time, the list data can be passed to the edit page without requesting. At this time, all list data supports editing in the silent submission mode;"),(0,i.kt)("li",{parentName:"ol"},"The echo data on the edit page needs to be obtained through the api, and only the locally cached list items can echo the data normally, for example:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"For the list items that have been accessed before the network is disconnected, the request can hit the cache again;"),(0,i.kt)("li",{parentName:"ol"},"Created through the silent submission mode, but the list item has not been successfully submitted, and the submitted data still exists in the silentMethod instance;")))),(0,i.kt)("p",null,"And here we will focus on the case of ",(0,i.kt)("strong",{parentName:"p"},"2-2"),"."),(0,i.kt)("h2",{id:"edit-silent-commit-items"},"Edit silent commit items"),(0,i.kt)("p",null,"In the previous chapters, we know that when the newly created data item has not been successfully submitted, the virtual data will be used as the placeholder for the id. Usually, we also get the data item through the id. At this time, we are in ",(0,i.kt)("inlineCode",{parentName:"p"},"useSQRequeset")," Virtual data interception is implemented on the above, if a request is accompanied by virtual data information, it will be intercepted before sending and the data can be specified to replace the response data, and the request will be abandoned."),(0,i.kt)("p",null,"Remember the ",(0,i.kt)("strong",{parentName:"p"},"silentMethod.reviewData")," saved in ",(0,i.kt)("a",{parentName:"p",href:"/strategy/sensorless-data-interaction/modify-response"},"Step 2 - Adjust Response Handling"),"?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"onSuccess(({ silentMethod }) => {\n  // Construct list data items\n  const editingItem = {\n    ...detail,\n    id: id || data.id\n  };\n  //...\n  if (silentMethod) {\n    // highlight-start\n    // Setting the name is to find the corresponding silentMethod instance when intercepting\n    silentMethod.entity.setName('edit' + editingItem.id);\n    silentMethod.reviewData = {\n      operate: id ? 'edit' : 'add',\n      data: editingItem\n    };\n    // Don't forget to call save\n    silentMethod.save();\n    // highlight-end\n  }\n});\n")),(0,i.kt)("p",null,"It can be used not only for data compensation, but also for echoing data in edit pages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { loading, data } = useSQRequest(id => todoDetail(id), {\n  initialData: {\n    title: '',\n    time: new Date()\n  },\n  immediate: false,\n\n  // highlight-start\n  // Set the interception function, the function will be called when there is virtual data in this request\n  // If reviewData is returned, it will replace the response data and give up this request, otherwise the request will still be initiated\n  vDataCaptured: () => {\n    const targetSM = filterSilentMethods('edit' + todoId).pop();\n    if (targetSM?.reviewData) {\n      return { ...targetSM.reviewData.data };\n    }\n  }\n  // highlight-end\n});\n")),(0,i.kt)("admonition",{title:"Caution",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You can save enough data in ",(0,i.kt)("strong",{parentName:"p"},"silentMethod.reviewData")," to satisfy both list data compensation and edit page data echo.")),(0,i.kt)("p",null,"So far, data items created through silent commit mode also support editing! What's the problem, um... and one last one."),(0,i.kt)("h2",{id:"when-the-data-item-being-edited-is-submitted-successfully"},"When the data item being edited is submitted successfully"),(0,i.kt)("p",null,"When the user is editing a data item that has not been successfully submitted, it suddenly submits successfully! At this time, we need to replace the virtual data used in the edit page with actual data, for example, replace the virtual id with the actual id, and use the actual id to submit in the next edit. This is also very simple, we only need to monitor This is done by silently submitting the success event, which will receive a data collection consisting of virtual data and real data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { onSilentSubmitSuccess, stringifyVData } from '@alova/scene-*';\n\n//...\n// id is virtual data during initialization\nlet id = /* todo virtual id */;\n\n// highlight-start\n// Binding listener silently submits the successful event to update the id, and returns the unbind function, don't forget to call the unbind function when the component is destroyed\nconst unbindEvent = onSilentSubmitSuccess(event => {\n   const vDataId = stringifyVData(id);\n   if (event. vDataResponse[vDataId]) {\n     id = event.vDataResponse[vDataId];\n\n     // The following is to change the virtual id in the url to the actual id\n     history.replaceState(null, '', '?id=' + currentId);\n   }\n});\n// highlight-end\n")),(0,i.kt)("p",null,"Here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"event.vDataResponse")," value is a collection of virtual data id and actual data, and its format is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n   '[vd:aaaaaa]': { id: 1 },\n   '[vd:bbbbbb]': 1\n}\n")),(0,i.kt)("p",null,"So far, we have completed all the content of a simple list of non-inductive interaction, but in other application scenarios such as editing applications, complex list management, etc., we may encounter more different needs. What else does alova have at this time? What are the features we can use? Please read the next chapter!"))}u.isMDXComponent=!0}}]);