"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9035],{8132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(74848),i=r(28453),a=r(94331);const s={title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",keywords:["stock ticker","candlestick chart","trading data","chart interval","data visualization","stock market","financial information"]},c=void 0,d={id:"bot/reference/discord/charts/chart",title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",source:"@site/content/bot/reference/discord/charts/chart.md",sourceDirName:"bot/reference/discord/charts",slug:"/bot/reference/discord/charts/chart",permalink:"/bot/reference/discord/charts/chart",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/charts/chart.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"chart",description:"Learn how to retrieve a candlestick chart for specified stock tickers, intervals, and for past days. The chart provides comprehensive trading data including opening and closing prices, as well as highs and lows, and volume.",keywords:["stock ticker","candlestick chart","trading data","chart interval","data visualization","stock market","financial information"]},sidebar:"tutorialSidebar",previous:{title:"cd",permalink:"/bot/reference/discord/charts/cd"},next:{title:"chartfib",permalink:"/bot/reference/discord/charts/chartfib"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"charts: chart - Discord Reference | OpenBB Bot Docs"}),"\n",(0,n.jsx)(t.p,{children:"This command will retrieve a candlestick chart for the ticker/interval provided, with data for the past number of days specified. The interval provided must be a valid time interval (e.g. 5 minute, 15 minute, etc.). The chart will be displayed to the user and will contain information such as the opening and closing prices, the high and low, the volume, and any other relevant information."}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/chart ticker interval [past_days] [extended_hours]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock Ticker"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Chart Interval"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"Daily (1440), Weekly (7200), Monthly (28800), 1 minute (1), 5 minute (5), 10 minute (10), 15 minute (15), 30 minute (30), 1 hour (60)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_days"}),(0,n.jsx)(t.td,{children:"Past Days to Display. Default: 0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"extended_hours"}),(0,n.jsx)(t.td,{children:"Display Full 4am-8pm ET Trading Hours. Default: False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/chart ticker:AMD interval:5 minute past_days:0\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/chart ticker:AMD interval:Daily\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),i=r(74848);function a(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(96540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);