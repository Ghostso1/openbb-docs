"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69873],{1641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>i,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=t(74848),s=t(28453),a=t(94331),d=t(18228),l=t(19365);const c={title:"cot_search",description:"Learn about curated Commitment of Traders Reports series information  and how to perform a search for specific data. Find details on the parameters,  data returned, and available CFTC codes.",keywords:["Commitment of Traders Reports","curated COT Reports series","CFTC Code","underlying asset","search query","provider","results","warnings","chart object","metadata info","CFTC"]},i=void 0,o={id:"platform/reference/regulators/cftc/cot_search",title:"cot_search",description:"Learn about curated Commitment of Traders Reports series information  and how to perform a search for specific data. Find details on the parameters,  data returned, and available CFTC codes.",source:"@site/content/platform/reference/regulators/cftc/cot_search.md",sourceDirName:"platform/reference/regulators/cftc",slug:"/platform/reference/regulators/cftc/cot_search",permalink:"/platform/reference/regulators/cftc/cot_search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/cftc/cot_search.md",tags:[],version:"current",frontMatter:{title:"cot_search",description:"Learn about curated Commitment of Traders Reports series information  and how to perform a search for specific data. Find details on the parameters,  data returned, and available CFTC codes.",keywords:["Commitment of Traders Reports","curated COT Reports series","CFTC Code","underlying asset","search query","provider","results","warnings","chart object","metadata info","CFTC"]},sidebar:"tutorialSidebar",previous:{title:"cot",permalink:"/platform/reference/regulators/cftc/cot"},next:{title:"Sec",permalink:"/platform/reference/regulators/sec/"}},h={},u=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function x(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"regulators/cftc/cot_search - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get the current Commitment of Traders Reports."}),"\n",(0,n.jsx)(r.p,{children:"Search a list of the current Commitment of Traders Reports series information."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.regulators.cftc.cot_search(provider='cftc')\nobb.regulators.cftc.cot_search(query='gold', provider='cftc')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(l.A,{value:"cftc",label:"cftc",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})})]})}),(0,n.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"query"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Search query."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"})]})})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[COTSearch]\n        Serializable results.\n\n    provider : Optional[Literal['cftc', 'nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"code"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"CFTC market contract code of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"category"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Category of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"subcategory"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Subcategory of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"units"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The units for one contract."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]})]})]})}),(0,n.jsx)(l.A,{value:"cftc",label:"cftc",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"code"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"CFTC market contract code of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"category"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Category of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"subcategory"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Subcategory of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"units"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The units for one contract."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"commodity"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the commodity."})]})]})]})}),(0,n.jsx)(l.A,{value:"nasdaq",label:"nasdaq",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"code"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"CFTC market contract code of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Name of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"category"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Category of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"subcategory"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Subcategory of the underlying asset."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"units"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The units for one contract."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol representing the entity requested in the data."})]})]})]})})]})]})}function j(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>d});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function d(e){let{children:r,hidden:t,className:d}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var n=t(5260),s=t(74848);function a(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>C});var n=t(96540),s=t(34164),a=t(23104),d=t(56347),l=t(205),c=t(57485),i=t(31682),o=t(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}function u(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??h(t);return function(e){const r=(0,i.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const s=(0,d.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=u(e),[d,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[i,h]=j({queryString:t,groupId:s}),[f,p]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,o.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=i??f;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,a]),tabValues:a}}var p=t(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=t(74848);function y(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),{pathname:h}=(0,d.zy)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),s=c[t].value;s!==n&&(o(r),l(s))},x=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:c.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:x,onClick:u,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,a?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&h.startsWith("/terminal")}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function v(e){const r=f(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(y,{...e,...r}),(0,b.jsx)(g,{...e,...r})]})}function C(e){const r=(0,p.A)();return(0,b.jsx)(v,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(96540);const s={},a=n.createContext(s);function d(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);