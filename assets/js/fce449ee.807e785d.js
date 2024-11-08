"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45026],{76436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=r(74848),n=r(28453),d=r(94331);const i={title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",keywords:["stock market","day command","flow data","ticker symbol","expiry date","strike price","option type","stock trading","commands","parameter","examples"]},s=void 0,a={id:"bot/reference/discord/flow/day",title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",source:"@site/content/bot/reference/discord/flow/day.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/day",permalink:"/bot/reference/discord/flow/day",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/flow/day.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1731077387e3,frontMatter:{title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",keywords:["stock market","day command","flow data","ticker symbol","expiry date","strike price","option type","stock trading","commands","parameter","examples"]},sidebar:"tutorialSidebar",previous:{title:"bigflow",permalink:"/bot/reference/discord/flow/bigflow"},next:{title:"opening",permalink:"/bot/reference/discord/flow/opening"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.A,{title:"flow: day - Discord Reference | OpenBB Bot Docs"}),"\n",(0,o.jsx)(t.p,{children:"This command retrieves the most recent flow for a stock with the specified ticker symbol. The command will return the most up-to-date flow data for that stock over $25,000."}),"\n",(0,o.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/flow day ticker [expiry] [strike] [opt_type]\n"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Name"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Optional"}),(0,o.jsx)(t.th,{children:"Choices"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"ticker"}),(0,o.jsx)(t.td,{children:"Stock Ticker"}),(0,o.jsx)(t.td,{children:"False"}),(0,o.jsx)(t.td,{children:"None"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"expiry"}),(0,o.jsx)(t.td,{children:"Expiry Date (YYYY-MM-DD) (Optional)"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"strike"}),(0,o.jsx)(t.td,{children:"Strike Price (Optional)"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"None"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"opt_type"}),(0,o.jsx)(t.td,{children:"Option Type (Calls or Puts) (Optional)"}),(0,o.jsx)(t.td,{children:"True"}),(0,o.jsx)(t.td,{children:"Calls (C), Puts (P)"})]})]})]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/flow day ticker:AMD\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/flow day ticker:AMD expiry:2022-07-29 strike:60 opt_type:Puts\n"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"/flow day ticker:AMD expiry:2022-07-29 strike:60\n"})}),"\n",(0,o.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var o=r(5260),n=r(74848);function d(e){let{title:t}=e;return(0,n.jsx)(o.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var o=r(96540);const n={},d=o.createContext(n);function i(e){const t=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(d.Provider,{value:t},e.children)}}}]);