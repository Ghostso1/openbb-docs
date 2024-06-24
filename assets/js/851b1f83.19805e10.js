"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4489],{55895:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453),i=t(94331);const d={title:"fwd",description:"This documentation page provides the syntax and details for extracting forward rates from fxempire using the OpenBB.finance OpenBBTerminal, including the parameters required and the return type. The page is of significant utility to users seeking to navigate the forex section of the OpenBBTerminal.",keywords:["fwd function","fxempire","Forward rates","forex","OpenBB.finance","currency conversion","USD","EUR","parameters","returns"]},o=void 0,a={id:"sdk/reference/forex/fwd",title:"fwd",description:"This documentation page provides the syntax and details for extracting forward rates from fxempire using the OpenBB.finance OpenBBTerminal, including the parameters required and the return type. The page is of significant utility to users seeking to navigate the forex section of the OpenBBTerminal.",source:"@site/content/sdk/reference/forex/fwd.md",sourceDirName:"sdk/reference/forex",slug:"/sdk/reference/forex/fwd",permalink:"/openbb-docs/sdk/reference/forex/fwd",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forex/fwd.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"fwd",description:"This documentation page provides the syntax and details for extracting forward rates from fxempire using the OpenBB.finance OpenBBTerminal, including the parameters required and the return type. The page is of significant utility to users seeking to navigate the forex section of the OpenBBTerminal.",keywords:["fwd function","fxempire","Forward rates","forex","OpenBB.finance","currency conversion","USD","EUR","parameters","returns"]},sidebar:"tutorialSidebar",previous:{title:"candle",permalink:"/openbb-docs/sdk/reference/forex/candle"},next:{title:"get_currency_list",permalink:"/openbb-docs/sdk/reference/forex/get_currency_list"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"forex.fwd - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(r.p,{children:"Gets forward rates from fxempire"}),"\n",(0,n.jsxs)(r.p,{children:["Source Code: [",(0,n.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/fxempire_model.py#L14",children:"link"}),"]"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'openbb.forex.fwd(to_symbol: str = "USD", from_symbol: str = "EUR")\n'})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"to_symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"To currency"}),(0,n.jsx)(r.td,{children:"USD"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"from_symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"From currency"}),(0,n.jsx)(r.td,{children:"EUR"}),(0,n.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pd.DataFrame"}),(0,n.jsx)(r.td,{children:"Dataframe containing forward rates"})]})})]}),"\n",(0,n.jsx)(r.hr,{})]})}function f(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),s=t(74848);function i(e){let{title:r}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(96540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);