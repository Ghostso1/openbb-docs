"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28597],{69893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),s=r(94331),o=r(18228),l=r(19365);const i={title:"omega",description:"Learn about the omega series and ratio in the OpenBB quantitative analysis toolkit. The documentation provides information on how to generate the omega series and plot the omega ratio from stock dataframes.",keywords:["omega series","quantitative analysis","numpy","pandas","dataframe","stock data","threshold range","annualized target return","omega ratio","plotting","chart"]},d=void 0,c={id:"sdk/reference/qa/omega",title:"omega",description:"Learn about the omega series and ratio in the OpenBB quantitative analysis toolkit. The documentation provides information on how to generate the omega series and plot the omega ratio from stock dataframes.",source:"@site/content/sdk/reference/qa/omega.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/omega",permalink:"/openbb-docs/sdk/reference/qa/omega",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/qa/omega.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"omega",description:"Learn about the omega series and ratio in the OpenBB quantitative analysis toolkit. The documentation provides information on how to generate the omega series and plot the omega ratio from stock dataframes.",keywords:["omega series","quantitative analysis","numpy","pandas","dataframe","stock data","threshold range","annualized target return","omega ratio","plotting","chart"]},sidebar:"tutorialSidebar",previous:{title:"normality",permalink:"/openbb-docs/sdk/reference/qa/normality"},next:{title:"qqplot",permalink:"/openbb-docs/sdk/reference/qa/qqplot"}},u={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"qa.omega - Reference | OpenBB SDK Docs"}),"\n","\n",(0,a.jsxs)(o.A,{children:[(0,a.jsxs)(l.A,{value:"model",label:"Model",default:!0,children:[(0,a.jsx)(t.p,{children:"Get the omega series"}),(0,a.jsxs)(t.p,{children:["Source Code: [",(0,a.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L639",children:"link"}),"]"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"openbb.qa.omega(data: pd.DataFrame, threshold_start: float = 0, threshold_end: float = 1.5)\n"})}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"pd.DataFrame"}),(0,a.jsx)(t.td,{children:"stock dataframe"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"threshold_start"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"annualized target return threshold start of plotted threshold range"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"threshold_end"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"annualized target return threshold end of plotted threshold range"}),(0,a.jsx)(t.td,{children:"1.5"}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pd.DataFrame"}),(0,a.jsx)(t.td,{children:"omega series"})]})})]}),(0,a.jsx)(t.hr,{})]}),(0,a.jsxs)(l.A,{value:"view",label:"Chart",children:[(0,a.jsx)(t.p,{children:"Plots the omega ratio"}),(0,a.jsxs)(t.p,{children:["Source Code: [",(0,a.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1214",children:"link"}),"]"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"openbb.qa.omega_chart(data: pd.DataFrame, threshold_start: float = 0, threshold_end: float = 1.5)\n"})}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"pd.DataFrame"}),(0,a.jsx)(t.td,{children:"stock dataframe"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"threshold_start"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"annualized target return threshold start of plotted threshold range"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"threshold_end"}),(0,a.jsx)(t.td,{children:"float"}),(0,a.jsx)(t.td,{children:"annualized target return threshold end of plotted threshold range"}),(0,a.jsx)(t.td,{children:"1.5"}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,a.jsx)(t.p,{children:"This function does not return anything"}),(0,a.jsx)(t.hr,{})]})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,o),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(96540),n=r(34164),s=r(23104),o=r(56347),l=r(205),i=r(57485),d=r(31682),c=r(89466);function u(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:r,groupId:n}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=d??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=r(92303);const b={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:u}=(0,o.zy)(),h=e=>{const t=e.currentTarget,r=d.indexOf(t),n=i[r].value;n!==a&&(c(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:p,onClick:h,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",b.tabItem,s?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function k(e){const t=(0,x.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var a=r(96540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);