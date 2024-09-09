"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6342],{49678:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var n=t(74848),a=t(28453),s=t(94331),l=t(18228),i=t(19365);const d={title:"undervalued_large_caps",description:"Learn how to get undervalued large cap equities and explore equity discovery  using the OBB equity API. Understand the parameters available, such as sorting undervalued  large caps and selecting the yfinance provider. Retrieve useful equity data, including  the symbol, name, price, change, percent change, volume, market cap, average volume,  and PE ratio.",keywords:["undervalued large cap equities","equity discovery","sorting undervalued large caps","yfinance provider","equity data","symbol","name","price","change","percent change","volume","market cap","average volume","PE ratio"]},c=void 0,o={id:"platform/reference/equity/discovery/undervalued_large_caps",title:"undervalued_large_caps",description:"Learn how to get undervalued large cap equities and explore equity discovery  using the OBB equity API. Understand the parameters available, such as sorting undervalued  large caps and selecting the yfinance provider. Retrieve useful equity data, including  the symbol, name, price, change, percent change, volume, market cap, average volume,  and PE ratio.",source:"@site/content/platform/reference/equity/discovery/undervalued_large_caps.md",sourceDirName:"platform/reference/equity/discovery",slug:"/platform/reference/equity/discovery/undervalued_large_caps",permalink:"/platform/reference/equity/discovery/undervalued_large_caps",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/discovery/undervalued_large_caps.md",tags:[],version:"current",frontMatter:{title:"undervalued_large_caps",description:"Learn how to get undervalued large cap equities and explore equity discovery  using the OBB equity API. Understand the parameters available, such as sorting undervalued  large caps and selecting the yfinance provider. Retrieve useful equity data, including  the symbol, name, price, change, percent change, volume, market cap, average volume,  and PE ratio.",keywords:["undervalued large cap equities","equity discovery","sorting undervalued large caps","yfinance provider","equity data","symbol","name","price","change","percent change","volume","market cap","average volume","PE ratio"]},sidebar:"tutorialSidebar",previous:{title:"undervalued_growth",permalink:"/platform/reference/equity/discovery/undervalued_growth"},next:{title:"Estimates",permalink:"/platform/reference/equity/estimates/"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"equity/discovery/undervalued_large_caps - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get potentially undervalued large cap stocks."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.discovery.undervalued_large_caps(provider='yfinance')\nobb.equity.discovery.undervalued_large_caps(sort='desc', provider='yfinance')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sort"}),(0,n.jsx)(r.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(r.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(r.td,{children:"desc"}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(i.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"sort"}),(0,n.jsx)(r.td,{children:"Literal['asc', 'desc']"}),(0,n.jsx)(r.td,{children:"Sort order. Possible values: 'asc', 'desc'. Default: 'desc'."}),(0,n.jsx)(r.td,{children:"desc"}),(0,n.jsx)(r.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[EquityUndervaluedLargeCaps]\n        Serializable results.\n\n    provider : Optional[Literal['yfinance']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsx)(i.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the entity."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Last price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Change in price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"percent_change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Percent change."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"Union[int, float]"}),(0,n.jsx)(r.td,{children:"The trading volume."})]})]})]})}),(0,n.jsx)(i.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the entity."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"price"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Last price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Change in price."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"percent_change"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Percent change."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"volume"}),(0,n.jsx)(r.td,{children:"Union[int, float]"}),(0,n.jsx)(r.td,{children:"The trading volume."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"market_cap"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Market Cap."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"avg_volume_3_months"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"Average volume over the last 3 months in millions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pe_ratio_ttm"}),(0,n.jsx)(r.td,{children:"float"}),(0,n.jsx)(r.td,{children:"PE Ratio (TTM)."})]})]})]})})]})]})}function x(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),a=t(74848);function s(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>q});var n=t(96540),a=t(34164),s=t(23104),l=t(56347),i=t(205),d=t(57485),c=t(31682),o=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,d.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[v,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,o.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),f=(()=>{const e=c??v;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),{pathname:u}=(0,l.zy)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),a=d[t].value;a!==n&&(o(r),i(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:d.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:p,onClick:h,...s,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,s?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=v(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...e,...r}),(0,j.jsx)(g,{...e,...r})]})}function q(e){const r=(0,m.A)();return(0,j.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);