"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45876],{39534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(74848),a=n(28453),d=n(94331);const s={title:"candle",description:"This documentation is for the 'candle' function used to show loaded fx data. It provides usage details, parameters explanations and choices, including plotly, sort, reverse, raw, trendlines, moving averages, and more, along with a graphical presentation.",keywords:["candle function","loaded fx data","interactive plotly chart","sort data","reverse flag","raw data","trendlines","moving average","log scale","fx data visualization"]},i=void 0,l={id:"terminal/reference/forex/candle",title:"candle",description:"This documentation is for the 'candle' function used to show loaded fx data. It provides usage details, parameters explanations and choices, including plotly, sort, reverse, raw, trendlines, moving averages, and more, along with a graphical presentation.",source:"@site/content/terminal/reference/forex/candle.md",sourceDirName:"terminal/reference/forex",slug:"/terminal/reference/forex/candle",permalink:"/terminal/reference/forex/candle",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/forex/candle.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"candle",description:"This documentation is for the 'candle' function used to show loaded fx data. It provides usage details, parameters explanations and choices, including plotly, sort, reverse, raw, trendlines, moving averages, and more, along with a graphical presentation.",keywords:["candle function","loaded fx data","interactive plotly chart","sort data","reverse flag","raw data","trendlines","moving average","log scale","fx data visualization"]},sidebar:"tutorialSidebar",previous:{title:"forex",permalink:"/terminal/reference/forex/"},next:{title:"fwd",permalink:"/terminal/reference/forex/fwd"}},o={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:"forex/candle - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Show candle for loaded fx data"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"candle [-p] [--sort {adjclose,open,close,high,low,volume,logret}] [-r] [--raw] [-t] [--ma MOV_AVG] [--log]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"plotly"}),(0,r.jsx)(t.td,{children:"Flag to show interactive plotly chart"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sort"}),(0,r.jsx)(t.td,{children:"Choose a column to sort by. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"adjclose, open, close, high, low, volume, logret"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"raw"}),(0,r.jsx)(t.td,{children:"Shows raw data instead of chart."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"trendlines"}),(0,r.jsx)(t.td,{children:"Flag to add high and low trends to candle"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"mov_avg"}),(0,r.jsx)(t.td,{children:"Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"logy"}),(0,r.jsx)(t.td,{children:"Plot with y axis on log scale"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154029283-2e5e472b-4c2b-4e88-8fbe-f6a0925898b8.png",alt:"candle"})}),"\n",(0,r.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(5260),a=n(74848);function d(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(96540);const a={},d=r.createContext(a);function s(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);