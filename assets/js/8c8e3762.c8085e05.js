"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24139],{83705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var n=r(74848),s=r(28453),i=r(94331);const c={title:"create",description:"This page provides instructions on how to use the 'create' command to set up price alerts for specific trading symbols. It includes usage examples and a detailed description of parameters involved such as the ticker, condition, and price.",keywords:["price alerts","trading symbols","condition","price","creation command"]},o=void 0,d={id:"bot/reference/discord/alerts/create",title:"create",description:"This page provides instructions on how to use the 'create' command to set up price alerts for specific trading symbols. It includes usage examples and a detailed description of parameters involved such as the ticker, condition, and price.",source:"@site/content/bot/reference/discord/alerts/create.md",sourceDirName:"bot/reference/discord/alerts",slug:"/bot/reference/discord/alerts/create",permalink:"/bot/reference/discord/alerts/create",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/alerts/create.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1728661847e3,frontMatter:{title:"create",description:"This page provides instructions on how to use the 'create' command to set up price alerts for specific trading symbols. It includes usage examples and a detailed description of parameters involved such as the ticker, condition, and price.",keywords:["price alerts","trading symbols","condition","price","creation command"]},sidebar:"tutorialSidebar",previous:{title:"alerts",permalink:"/bot/reference/discord/alerts/"},next:{title:"delete",permalink:"/bot/reference/discord/alerts/delete"}},a={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"alerts: create - Discord Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command creates an alert for a given symbol (ex. BTCUSD) that will notify the user when the price is equal to or above the user defined price."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/alerts create ticker condition price\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Ticker to set alert for"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"condition"}),(0,n.jsx)(t.td,{children:"Condition to set alert for"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"Equal or Above, Equal or Below"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"Price to set alert for"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/alerts create ticker:BTCUSD condition:Equal or Above price:1000\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/alerts create ticker:SPY condition:Equal or Below price:400\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);