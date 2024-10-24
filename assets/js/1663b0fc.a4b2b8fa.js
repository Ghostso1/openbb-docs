"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74996],{75760:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(74848),i=r(28453),a=r(94331);const s={title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",keywords:["Update command","Price alert","Active alerts","Update condition","Deactivate alert"]},d=void 0,o={id:"bot/reference/discord/alerts/update",title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",source:"@site/content/bot/reference/discord/alerts/update.md",sourceDirName:"bot/reference/discord/alerts",slug:"/bot/reference/discord/alerts/update",permalink:"/bot/reference/discord/alerts/update",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/alerts/update.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1729789333e3,frontMatter:{title:"update",description:"This page provides description and usage of the 'update' command within the context of active alerts. It includes details on how to change the condition of an active alert, specifically for price alerts.",keywords:["Update command","Price alert","Active alerts","Update condition","Deactivate alert"]},sidebar:"tutorialSidebar",previous:{title:"list",permalink:"/bot/reference/discord/alerts/list"},next:{title:"autopost",permalink:"/bot/reference/discord/autopost/"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"alerts: update - Discord Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command allows the user to update the condition on an active alert, such as changing the value of a price alert. The command will update the alert with the new condition and keep the alert active until it is manually deactivated or the alert's condition is met."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/alerts update alerts condition price\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"alerts"}),(0,n.jsx)(t.td,{children:"Your active alerts"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"condition"}),(0,n.jsx)(t.td,{children:"Update condition for alert"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"Equal or Above (above or equal), Equal or Below (below or equal)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"price"}),(0,n.jsx)(t.td,{children:"Update alert to this price"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/alerts update alerts: condition: price:\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),i=r(74848);function a(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);