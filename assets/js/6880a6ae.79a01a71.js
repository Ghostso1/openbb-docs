"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55302],{20412:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var n=t(74848),a=t(28453),s=t(94331),o=t(18228),l=t(19365);const c={title:"cancel",description:"This page describes two methods to cancel a pending order in OpenBB's forex trading system using Oanda. It includes Python functions to cancel an order by ID from either the model or chart view.",keywords:["cancel pending order","Oanda","forex","python function"]},d=void 0,i={id:"sdk/reference/forex/oanda/cancel",title:"cancel",description:"This page describes two methods to cancel a pending order in OpenBB's forex trading system using Oanda. It includes Python functions to cancel an order by ID from either the model or chart view.",source:"@site/content/sdk/reference/forex/oanda/cancel.md",sourceDirName:"sdk/reference/forex/oanda",slug:"/sdk/reference/forex/oanda/cancel",permalink:"/openbb-docs/sdk/reference/forex/oanda/cancel",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forex/oanda/cancel.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"cancel",description:"This page describes two methods to cancel a pending order in OpenBB's forex trading system using Oanda. It includes Python functions to cancel an order by ID from either the model or chart view.",keywords:["cancel pending order","Oanda","forex","python function"]},sidebar:"tutorialSidebar",previous:{title:"calendar",permalink:"/openbb-docs/sdk/reference/forex/oanda/calendar"},next:{title:"candles",permalink:"/openbb-docs/sdk/reference/forex/oanda/candles"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"forex.oanda.cancel - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(o.A,{children:[(0,n.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(r.p,{children:"Request cancellation of a pending order."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L346",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.cancel(orderID: str, accountID: str = "REPLACE_ME")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"orderID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The pending order ID to cancel."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda account ID, by default cfg.OANDA_ACCOUNT"}),(0,n.jsx)(r.td,{children:"REPLACE_ME"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]}),(0,n.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,n.jsx)(r.p,{children:"Cancel a Pending Order."}),(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L197",children:"link"}),"]"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.oanda.cancel_chart(accountID: str, orderID: str = "")\n'})}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"accountID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Oanda user account ID"}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"orderID"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The pending order ID to cancel."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),(0,n.jsx)(r.hr,{}),(0,n.jsx)(r.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(r.p,{children:"This function does not return anything"}),(0,n.jsx)(r.hr,{})]})]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>I});var n=t(96540),a=t(34164),s=t(23104),o=t(56347),l=t(205),c=t(57485),d=t(31682),i=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[d,u]=f({queryString:t,groupId:a}),[b,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,i.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),m=(()=>{const e=d??b;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const r=e.currentTarget,t=d.indexOf(r),a=c[t].value;a!==n&&(i(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;r=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;r=d[t]??d[d.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=b(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...r}),(0,j.jsx)(g,{...e,...r})]})}function I(e){const r=(0,x.A)();return(0,j.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(96540);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);