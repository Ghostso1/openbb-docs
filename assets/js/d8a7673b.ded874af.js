"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65569],{84800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=r(74848),n=r(28453),s=r(94331);const i={title:"vwap",description:"The page describes Volume Weighted Average Price (VWAP) used to measure the average typical price by volume with intraday charts. It details its usage, parameters, and provides examples.",keywords:["vwap","Volume Weighted Average Price","intraday charts","average typical price","stock analysis"]},c=void 0,d={id:"terminal/reference/crypto/ta/vwap",title:"vwap",description:"The page describes Volume Weighted Average Price (VWAP) used to measure the average typical price by volume with intraday charts. It details its usage, parameters, and provides examples.",source:"@site/content/terminal/reference/crypto/ta/vwap.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/vwap",permalink:"/terminal/reference/crypto/ta/vwap",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/vwap.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"vwap",description:"The page describes Volume Weighted Average Price (VWAP) used to measure the average typical price by volume with intraday charts. It details its usage, parameters, and provides examples.",keywords:["vwap","Volume Weighted Average Price","intraday charts","average typical price","stock analysis"]},sidebar:"tutorialSidebar",previous:{title:"tv",permalink:"/terminal/reference/crypto/ta/tv"},next:{title:"wma",permalink:"/terminal/reference/crypto/ta/wma"}},l={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"crypto/ta/vwap - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"The Volume Weighted Average Price that measures the average typical price by volume. It is typically used with intraday charts to identify general direction."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"vwap [-o N_OFFSET] [--start START] [--end END]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"range(0, 100)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"start"}),(0,a.jsx)(t.td,{children:"Starting date to select"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"end"}),(0,a.jsx)(t.td,{children:"Ending date to select"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:36 (\ud83e\udd8b) /stocks/ta/ $ load GOOGL -i 1\n\nLoading Intraday 1min GOOGL stock with starting period 2022-02-10 for analysis.\n\nDatetime: 2022 Feb 16 11:36\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n2022 Feb 16, 11:36 (\ud83e\udd8b) /stocks/ta/ $ vwap\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154312502-9377c57c-6e34-42a6-b021-674e7d4561dd.png",alt:"vwap"})}),"\n",(0,a.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);