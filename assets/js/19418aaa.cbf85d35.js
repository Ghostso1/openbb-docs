"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34375],{52048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),i=r(28453),s=r(94331),a=r(18228),d=r(19365);const o={title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},l=void 0,c={id:"excel/reference/equity/ownership/insider_trading",title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",source:"@site/content/excel/reference/equity/ownership/insider_trading.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/insider_trading",permalink:"/excel/reference/equity/ownership/insider_trading",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/ownership/insider_trading.md",tags:[],version:"current",frontMatter:{title:"INSIDER_TRADING",description:"Learn how to use the stock insider trading Python function to get information about insider trading, including parameter details, return types, and data descriptions.",keywords:["stock insider trading","equity ownership","Python function","parameter details","data description","symbol","transaction type","limit","provider","returns","results","chart","metadata","data","filing date","transaction date","reporting CIK","securities owned","company CIK","reporting name","type of owner","acquisition or disposition","form type","securities transacted","price","security name","link"]},sidebar:"tutorialSidebar",previous:{title:"EQUITY.OWNERSHIP",permalink:"/excel/reference/equity/ownership/"},next:{title:"INSTITUTIONAL",permalink:"/excel/reference/equity/ownership/institutional"}},h={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function x(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"EQUITY.OWNERSHIP.INSIDER_TRADING | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get data about trading by a company's management team and board of directors."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING(symbol,[limit],[transactionType])\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING("AAPL")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.OWNERSHIP.INSIDER_TRADING("AAPL",500)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"Number"}),(0,n.jsx)(t.td,{children:"The number of data entries to return."}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transactionType"}),(0,n.jsx)(t.td,{children:"Text"}),(0,n.jsx)(t.td,{children:"Type of the transaction. Options: award, conversion, return, expire_short, in_kind, gift, expire_long, discretionary, other, small, exempt, otm, purchase, sale, tender, will, itm, trust."}),(0,n.jsx)(t.td,{children:"False"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(d.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_cik"}),(0,n.jsx)(t.td,{children:"CIK number of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_date"}),(0,n.jsx)(t.td,{children:"Filing date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_date"}),(0,n.jsx)(t.td,{children:"Date of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_cik"}),(0,n.jsx)(t.td,{children:"Reporting individual's CIK."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_name"}),(0,n.jsx)(t.td,{children:"Name of the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"owner_title"}),(0,n.jsx)(t.td,{children:"The title held by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_type"}),(0,n.jsx)(t.td,{children:"Type of transaction being reported."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"acquisition_or_disposition"}),(0,n.jsx)(t.td,{children:"Acquisition or disposition of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"security_type"}),(0,n.jsx)(t.td,{children:"The type of security transacted."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_owned"}),(0,n.jsx)(t.td,{children:"Number of securities owned by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"securities_transacted"}),(0,n.jsx)(t.td,{children:"Number of securities transacted by the reporting individual."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transaction_price"}),(0,n.jsx)(t.td,{children:"The price of the transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filing_url"}),(0,n.jsx)(t.td,{children:"URL of the filing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"company_name"}),(0,n.jsx)(t.td,{children:"Name of the company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"conversion_exercise_price"}),(0,n.jsx)(t.td,{children:"Conversion/Exercise price of the shares."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"deemed_execution_date"}),(0,n.jsx)(t.td,{children:"Deemed execution date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exercise_date"}),(0,n.jsx)(t.td,{children:"Exercise date of the trade."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"expiration_date"}),(0,n.jsx)(t.td,{children:"Expiration date of the derivative."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_security_title"}),(0,n.jsx)(t.td,{children:"Name of the underlying non-derivative security related to this derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"underlying_shares"}),(0,n.jsx)(t.td,{children:"Number of underlying shares related to this derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nature_of_ownership"}),(0,n.jsx)(t.td,{children:"Nature of ownership of the insider trading."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"director"}),(0,n.jsx)(t.td,{children:"Whether the owner is a director."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"officer"}),(0,n.jsx)(t.td,{children:"Whether the owner is an officer."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ten_percent_owner"}),(0,n.jsx)(t.td,{children:"Whether the owner is a 10% owner."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"other_relation"}),(0,n.jsx)(t.td,{children:"Whether the owner is having another relation."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"derivative_transaction"}),(0,n.jsx)(t.td,{children:"Whether the owner is having a derivative transaction."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"report_line_number"}),(0,n.jsx)(t.td,{children:"Report line number of the insider trading."})]})]})]})})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const i={tabItem:"tabItem_Ymn6"};var s=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),i=r(34164),s=r(23104),a=r(56347),d=r(205),o=r(57485),l=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:i}}=e;return{value:t,label:r,attributes:n,default:i}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const i=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:i}=e,s=u(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,h]=p({queryString:r,groupId:i}),[j,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Dv)(r);return[i,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),m=(()=>{const e=l??j;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),i=o[r].value;i!==n&&(c(t),d(i))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:x,onClick:u,...s,className:(0,i.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,s?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:i}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=j(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);