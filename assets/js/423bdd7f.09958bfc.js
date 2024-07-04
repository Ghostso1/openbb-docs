"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93165],{74465:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var n=r(74848),s=r(28453),a=r(94331);const c={title:"balance",description:"This page provides a detailed view on the balance data obtained through OpenBB Terminal's stocks comparison analysis. Python source code, parameters for the function and return type are conventionally presented.",keywords:["balance data","stocks comparison analysis","marketwatch model","tickers comparison","quarterly statements","data export","dataframe"]},d=void 0,o={id:"sdk/reference/stocks/ca/balance",title:"balance",description:"This page provides a detailed view on the balance data obtained through OpenBB Terminal's stocks comparison analysis. Python source code, parameters for the function and return type are conventionally presented.",source:"@site/content/sdk/reference/stocks/ca/balance.md",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/balance",permalink:"/sdk/reference/stocks/ca/balance",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/ca/balance.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"balance",description:"This page provides a detailed view on the balance data obtained through OpenBB Terminal's stocks comparison analysis. Python source code, parameters for the function and return type are conventionally presented.",keywords:["balance data","stocks comparison analysis","marketwatch model","tickers comparison","quarterly statements","data export","dataframe"]},sidebar:"tutorialSidebar",previous:{title:"wsb",permalink:"/sdk/reference/stocks/ba/wsb"},next:{title:"cashflow",permalink:"/sdk/reference/stocks/ca/cashflow"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"stocks.ca.balance - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get balance data. [Source: Marketwatch]."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_model.py#L107",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.ca.balance(similar: List[str], timeframe: str = "2021", quarter: bool = False)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"similar"}),(0,n.jsx)(t.td,{children:"List[str]"}),(0,n.jsxs)(t.td,{children:["List of tickers to compare.",(0,n.jsx)("br",{}),"Comparable companies can be accessed through",(0,n.jsx)("br",{}),"finnhub_peers(), finviz_peers(), polygon_peers()."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timeframe"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Column header to compare"}),(0,n.jsx)(t.td,{children:"2021"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"quarter"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to use quarterly statements, by default False"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Format to export data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe of balance comparisons"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>d});var n=r(96540);const s={},a=n.createContext(s);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);