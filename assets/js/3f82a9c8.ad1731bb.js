"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53905],{72086:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(74848),n=i(28453),s=i(94331);const o={title:"smile",description:"The page provides a user guide on how to retrieve the Options Volatility Smile for a specific stock ticker and expiry, offering examples and parameters for enhanced understanding.",keywords:["Options Volatility Smile","Volatility","Market Sentiment","expiry","Minimum Strike Price","Maximum Strike Price"]},l=void 0,a={id:"bot/reference/telegram/options/smile",title:"smile",description:"The page provides a user guide on how to retrieve the Options Volatility Smile for a specific stock ticker and expiry, offering examples and parameters for enhanced understanding.",source:"@site/content/bot/reference/telegram/options/smile.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/smile",permalink:"/bot/reference/telegram/options/smile",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/telegram/options/smile.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1721102964e3,frontMatter:{title:"smile",description:"The page provides a user guide on how to retrieve the Options Volatility Smile for a specific stock ticker and expiry, offering examples and parameters for enhanced understanding.",keywords:["Options Volatility Smile","Volatility","Market Sentiment","expiry","Minimum Strike Price","Maximum Strike Price"]},sidebar:"tutorialSidebar",previous:{title:"opstats",permalink:"/bot/reference/telegram/options/opstats"},next:{title:"topoi",permalink:"/bot/reference/telegram/options/topoi"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"options: smile - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,r.jsx)(t.p,{children:"This command allows the user to retrieve the Options Volatility Smile for the given ticker and expiry. The Options Volatility Smile is a graphical representation of the implied volatility for a given option that can be used to gauge the market sentiment for a particular security."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/smile ticker expiry [min_sp] [max_sp]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"ticker"}),(0,r.jsx)(t.td,{children:"Stock Ticker"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"expiry"}),(0,r.jsx)(t.td,{children:"Expiration Date"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"min_sp"}),(0,r.jsx)(t.td,{children:"Minimum Strike Price"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"max_sp"}),(0,r.jsx)(t.td,{children:"Maximum Strike Price"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/smile AMD 2022-07-29\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"/smile AMD 2022-07-29 10 100\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>s});i(96540);var r=i(5260),n=i(74848);function s(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);