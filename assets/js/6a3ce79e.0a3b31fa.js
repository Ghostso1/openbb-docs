"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63532],{56131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),a=t(28453),r=t(94331);const i={title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",keywords:["government","government trading","lobbyist activity","awarded contracts","treasury","representatives","senate","the house","congress"]},o=void 0,c={id:"terminal/menus/stocks/gov",title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",source:"@site/content/terminal/menus/stocks/gov.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/gov",permalink:"/terminal/menus/stocks/gov",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/stocks/gov.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"Government",description:"This documentation pages describes the government trading menu hwere users can access the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department.",keywords:["government","government trading","lobbyist activity","awarded contracts","treasury","representatives","senate","the house","congress"]},sidebar:"tutorialSidebar",previous:{title:"Fundamental Analysis",permalink:"/terminal/menus/stocks/fa"},next:{title:"Insider Trading",permalink:"/terminal/menus/stocks/ins"}},d={},l=[{value:"Usage",id:"usage",level:2},{value:"Lasttrades",id:"lasttrades",level:3},{value:"Toplobbying",id:"toplobbying",level:3},{value:"Lobbying",id:"lobbying",level:3},{value:"Lastcontracts",id:"lastcontracts",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"Government - Stocks - Data Available | OpenBB Terminal Docs"}),"\n",(0,s.jsxs)(n.p,{children:["The features in this menu are intended to show the reported trades of elected officials, lobbyist activity, awarded contracts, and general spending of the United States Treasury Department. This menu only covers the USA, or companies that trade on US exchanges. The information in this menu is compiled by ",(0,s.jsx)("a",{href:"https://www.quiverquant.com/",target:"_blank",rel:"noreferrer noopener",children:"QuiverQuant"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Enter the menu from ",(0,s.jsx)(n.code,{children:"/stocks"})," with ",(0,s.jsx)(n.code,{children:"gov"}),", or via the absolute path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/gov\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The menu is divided into two sections. Features under the ",(0,s.jsx)(n.code,{children:"Explore"})," do not depend on individual tickers, while the commands listed under ",(0,s.jsx)(n.code,{children:"Ticker"})," do."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/51be579a-7fa0-4ef8-b04c-f2f06c9ef099",alt:"Screenshot 2023-11-01 at 11 18 40\u202fAM"})}),"\n",(0,s.jsxs)(n.p,{children:["A symbol can be set by using ",(0,s.jsx)(n.code,{children:"load"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"lasttrades",children:"Lasttrades"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"lasttrades"})," command displays the most recent purchase and sale disclosures by representatives."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/7fe9823e-bdc0-4cb6-8a74-8634f407c145",alt:"Screenshot 2023-11-01 at 11 23 48\u202fAM"})}),"\n",(0,s.jsx)(n.h3,{id:"toplobbying",children:"Toplobbying"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toplobbying"})," shows which public companies are spending the most on lobbying efforts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/gov/toplobbying --limit 1\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9b2564b2-f503-454a-adc4-f397d1b940f2",alt:"Screenshot 2023-11-01 at 11 29 33\u202fAM"})}),"\n",(0,s.jsx)(n.h3,{id:"lobbying",children:"Lobbying"}),"\n",(0,s.jsxs)(n.p,{children:["For descriptions of each lobbying event from a company, load a ticker and then use the ",(0,s.jsx)(n.code,{children:"lobbying"})," command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/gov/load lmt/lobbying --limit 1\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"2023-10-05: LOCKHEED MARTIN CORPORATION $50000\n\nTax matters impacting Lockheed Martin Corporation.\n\nDefense issues impacting Lockheed Martin Corporation.\n\nH.R.2670/S.2226 - National Defense Authorization Act for Fiscal Year 2024.\n\nDefense Appropriations.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"lastcontracts",children:"Lastcontracts"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"lastcontracts"})," is a list of the most recently awarded government contracts."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"/stocks/gov/lastcontracts --limit \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b290c8db-a1b5-4f6c-bea2-65cf16eae3e7",alt:"Screenshot 2023-11-01 at 12 27 34\u202fPM"})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),a=t(74848);function r(e){let{title:n}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);