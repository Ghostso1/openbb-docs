"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54232],{90026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(74848),s=n(28453),i=n(94331);const r={title:"sma",description:"The page explains the simple moving average (SMA) command, used for data smoothing and trend identification. It includes SMA's usage, parameters, and a graphical representation, making it easier to understand how to use SMA to filter data.",keywords:["Moving Average","trend identification","data smoothing","Simple Moving Average","SMA","data filtering","sma command","n_length","n_offset"]},o=void 0,d={id:"terminal/reference/stocks/ta/sma",title:"sma",description:"The page explains the simple moving average (SMA) command, used for data smoothing and trend identification. It includes SMA's usage, parameters, and a graphical representation, making it easier to understand how to use SMA to filter data.",source:"@site/content/terminal/reference/stocks/ta/sma.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/sma",permalink:"/openbb-docs/terminal/reference/stocks/ta/sma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ta/sma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"sma",description:"The page explains the simple moving average (SMA) command, used for data smoothing and trend identification. It includes SMA's usage, parameters, and a graphical representation, making it easier to understand how to use SMA to filter data.",keywords:["Moving Average","trend identification","data smoothing","Simple Moving Average","SMA","data filtering","sma command","n_length","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"rsi",permalink:"/openbb-docs/terminal/reference/stocks/ta/rsi"},next:{title:"stoch",permalink:"/openbb-docs/terminal/reference/stocks/ta/stoch"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"stocks/ta/sma - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple Moving Average is literally the simplest form of a moving average. Each output value is the average of the previous n values. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. This makes it less responsive to recent changes in the data, which can be useful for filtering out those changes."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"sma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(t.td,{children:"20, 50"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311791-5b130d08-55bd-406b-a68e-914a733c5191.png",alt:"sma"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);