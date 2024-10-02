"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5582],{71749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=n(74848),a=n(28453),s=n(94331);const r={title:"gamma",description:"This page is a guide on how to view the Options Gamma Levels for a specific stock using the '/op gamma' command. It provides an understanding of Delta's rate of change with stock price variations and aids in making informed trading decisions.",keywords:["options gamma levels","stock price changes","delta rate of change","trading decisions","call and put gamma","put wall","call wall","stock ticker","expiry date","/op gamma"]},o=void 0,d={id:"bot/reference/discord/options/gamma",title:"gamma",description:"This page is a guide on how to view the Options Gamma Levels for a specific stock using the '/op gamma' command. It provides an understanding of Delta's rate of change with stock price variations and aids in making informed trading decisions.",source:"@site/content/bot/reference/discord/options/gamma.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/gamma",permalink:"/bot/reference/discord/options/gamma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/options/gamma.md",tags:[],version:"current",lastUpdatedBy:"JC (Jonathan Chen)",lastUpdatedAt:1727896291e3,frontMatter:{title:"gamma",description:"This page is a guide on how to view the Options Gamma Levels for a specific stock using the '/op gamma' command. It provides an understanding of Delta's rate of change with stock price variations and aids in making informed trading decisions.",keywords:["options gamma levels","stock price changes","delta rate of change","trading decisions","call and put gamma","put wall","call wall","stock ticker","expiry date","/op gamma"]},sidebar:"tutorialSidebar",previous:{title:"equitypc",permalink:"/bot/reference/discord/options/equitypc"},next:{title:"highiv",permalink:"/bot/reference/discord/options/highiv"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"options: gamma - Discord Reference | OpenBB Bot Docs"}),"\n",(0,i.jsx)(t.p,{children:"This command allows the user to view the Options Gamma Levels for a particular stock. Options Gamma Levels are important to understanding the rate of change for the option's Delta when the underlying stock price changes. Knowing this information can help traders make informed decisions about which options to purchase."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Zero Gamma"}),(0,i.jsx)(t.td,{children:"Point closest to net zero of Call and Put Gamma"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Put Wall"}),(0,i.jsx)(t.td,{children:"Strike with the largest NET Put Gamma"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Call Wall"}),(0,i.jsx)(t.td,{children:"Strike with the largest NET Call Gamma"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/op gamma ticker [expiry]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Stock Ticker"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Gamma from now until expiry"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op gamma ticker:AMD\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/op gamma ticker:AMD expiry:2022-07-29\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(i.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);