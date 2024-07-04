"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21034],{54276:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(74848),r=o(28453),s=o(94331);const i={title:"show",description:"The OpenBB Terminal's documentation page for the 'show' function, which provides details on retrieving portfolio transactions using the 'PortfolioEngine' class instance. It includes parameters, return types and example usage.",keywords:["Portfolio transactions","PortfolioEngine class instance","Portfolio engine","pandas DataFrame","openbb.portfolio.show","portfolio load"]},l=void 0,a={id:"sdk/reference/portfolio/show",title:"show",description:"The OpenBB Terminal's documentation page for the 'show' function, which provides details on retrieving portfolio transactions using the 'PortfolioEngine' class instance. It includes parameters, return types and example usage.",source:"@site/content/sdk/reference/portfolio/show.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/show",permalink:"/sdk/reference/portfolio/show",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/show.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"show",description:"The OpenBB Terminal's documentation page for the 'show' function, which provides details on retrieving portfolio transactions using the 'PortfolioEngine' class instance. It includes parameters, return types and example usage.",keywords:["Portfolio transactions","PortfolioEngine class instance","Portfolio engine","pandas DataFrame","openbb.portfolio.show","portfolio load"]},sidebar:"tutorialSidebar",previous:{title:"rvol",permalink:"/sdk/reference/portfolio/rvol"},next:{title:"summary",permalink:"/sdk/reference/portfolio/summary"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"portfolio.show - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Get portfolio transactions"}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L68",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.portfolio.show(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Default"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"portfolio_engine"}),(0,t.jsx)(n.td,{children:"PortfolioEngine"}),(0,t.jsxs)(n.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,t.jsx)("br",{}),"Use ",(0,t.jsx)(n.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,t.jsx)(n.td,{children:"None"}),(0,t.jsx)(n.td,{children:"False"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"pd.DataFrame"}),(0,t.jsx)(n.td,{children:"Portfolio transactions"})]})})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.show(p)\n'})}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,n,o)=>{o.d(n,{A:()=>s});o(96540);var t=o(5260),r=o(74848);function s(e){let{title:n}=e;return(0,r.jsx)(t.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);