"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24084],{36165:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=s(74848),n=s(28453),i=s(94331);const d={title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",keywords:["rsi","stock market strategy","short sell","rsi calculation","buy and hold comparison","spy hold comparison","rsi level","periods for calculation","threshold for buying and shorting stock"]},o=void 0,c={id:"terminal/reference/stocks/backtesting/rsi",title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",source:"@site/content/terminal/reference/stocks/backtesting/rsi.md",sourceDirName:"terminal/reference/stocks/backtesting",slug:"/terminal/reference/stocks/backtesting/rsi",permalink:"/openbb-docs/terminal/reference/stocks/backtesting/rsi",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/backtesting/rsi.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"rsi",description:"Understanding the rsi strategy, which buys stock when it's less than a threshold and shorts when it exceeds a threshold. Learn the usage, parameters, and options involved in this strategy.",keywords:["rsi","stock market strategy","short sell","rsi calculation","buy and hold comparison","spy hold comparison","rsi level","periods for calculation","threshold for buying and shorting stock"]},sidebar:"tutorialSidebar",previous:{title:"emacross",permalink:"/openbb-docs/terminal/reference/stocks/backtesting/emacross"},next:{title:"whatif",permalink:"/openbb-docs/terminal/reference/stocks/backtesting/whatif"}},a={},h=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function l(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"stocks/backtesting/rsi - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Strategy that buys when the stock is less than a threshold and shorts when it exceeds a threshold."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"rsi [-p PERIODS] [-u HIGH] [-l LOW] [--spy] [--no_bench] [--no_short]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"periods"}),(0,r.jsx)(t.td,{children:"Number of periods for RSI calculation"}),(0,r.jsx)(t.td,{children:"14"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"high"}),(0,r.jsx)(t.td,{children:"High (upper) RSI Level"}),(0,r.jsx)(t.td,{children:"70"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"low"}),(0,r.jsx)(t.td,{children:"Low RSI Level"}),(0,r.jsx)(t.td,{children:"30"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"spy"}),(0,r.jsx)(t.td,{children:"Flag to add spy hold comparison"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"no_bench"}),(0,r.jsx)(t.td,{children:"Flag to not show buy and hold comparison"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"shortable"}),(0,r.jsx)(t.td,{children:"Flag that disables the short sell"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var r=s(5260),n=s(74848);function i(e){let{title:t}=e;return(0,n.jsx)(r.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>o});var r=s(96540);const n={},i=r.createContext(n);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);