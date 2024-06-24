"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17293],{3239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var a=n(74848),r=n(28453),s=n(94331);const d={title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",keywords:["Box and Whisker Plots","Quantitative Analysis","Yearly Accumulation","External Axes","AAPL","Adjusted Close"]},i=void 0,o={id:"sdk/reference/qa/bw",title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",source:"@site/content/sdk/reference/qa/bw.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/bw",permalink:"/openbb-docs/sdk/reference/qa/bw",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/qa/bw.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"bw",description:"The documentation page depicts the usage and configuration options for the 'bw' function in OpenBB Terminal. The function plots box and whisker graphs for quantitative data analysis based on provided DataFrame and target. An example using stock data for 'AAPL' is provided for a clearer understanding.",keywords:["Box and Whisker Plots","Quantitative Analysis","Yearly Accumulation","External Axes","AAPL","Adjusted Close"]},sidebar:"tutorialSidebar",previous:{title:"acf",permalink:"/openbb-docs/sdk/reference/qa/acf"},next:{title:"calculate_adjusted_var",permalink:"/openbb-docs/sdk/reference/qa/calculate_adjusted_var"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"qa.bw - Reference | OpenBB SDK Docs"}),"\n",(0,a.jsx)(t.p,{children:"Plots box and whisker plots"}),"\n",(0,a.jsxs)(t.p,{children:["Source Code: [",(0,a.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L270",children:"link"}),"]"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'openbb.qa.bw(data: pd.DataFrame, target: str, symbol: str = "", yearly: bool = True, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symbol"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"Name of dataset"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"pd.DataFrame"}),(0,a.jsx)(t.td,{children:"Dataframe to look at"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"target"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"Data column to look at"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"yearly"}),(0,a.jsx)(t.td,{children:"bool"}),(0,a.jsx)(t.td,{children:"Flag to indicate yearly accumulation"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"external_axes"}),(0,a.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,a.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.bw(data=df, target="Adj Close")\n'})}),"\n",(0,a.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(5260),r=n(74848);function s(e){let{title:t}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function d(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);