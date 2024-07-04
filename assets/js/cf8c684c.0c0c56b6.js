"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3406],{38891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=n(74848),a=n(28453),i=n(94331);const d={title:"ema",description:"Documentation on how to use the EMA (Exponential Moving Average) function with OpenBB Terminal. The function receives a dataset and returns a DataFrame with an added EMA column, providing an indication of price trend movement.",keywords:["EMA","Moving average","Price trend","Forecast","Dataset","Source code"]},s=void 0,c={id:"sdk/reference/forecast/ema",title:"ema",description:"Documentation on how to use the EMA (Exponential Moving Average) function with OpenBB Terminal. The function receives a dataset and returns a DataFrame with an added EMA column, providing an indication of price trend movement.",source:"@site/content/sdk/reference/forecast/ema.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/ema",permalink:"/sdk/reference/forecast/ema",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/forecast/ema.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"ema",description:"Documentation on how to use the EMA (Exponential Moving Average) function with OpenBB Terminal. The function receives a dataset and returns a DataFrame with an added EMA column, providing an indication of price trend movement.",keywords:["EMA","Moving average","Price trend","Forecast","Dataset","Source code"]},sidebar:"tutorialSidebar",previous:{title:"desc",permalink:"/sdk/reference/forecast/desc"},next:{title:"expo",permalink:"/sdk/reference/forecast/expo"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"forecast.ema - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"A moving average provides an indication of the trend of the price movement"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L159",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.forecast.ema(dataset: pd.DataFrame, target_column: str = "close", period: int = 10)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"dataset"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"The dataset you wish to clean"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_column"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The column you wish to add the EMA to"}),(0,r.jsx)(t.td,{children:"close"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"period"}),(0,r.jsx)(t.td,{children:"int"}),(0,r.jsx)(t.td,{children:"Time Span"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe with added EMA column"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),a=n(74848);function i(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>s});var r=n(96540);const a={},i=r.createContext(a);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);