"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33289],{15722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),d=r(28453),a=r(94331);const s={title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",keywords:["symbol analysis","start_date","interval","end_date","prepost","source","YahooFinance","weekly data","monthly data","verbose","data extraction","dataframe"]},o=void 0,i={id:"sdk/reference/stocks/load",title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",source:"@site/content/sdk/reference/stocks/load.md",sourceDirName:"sdk/reference/stocks",slug:"/sdk/reference/stocks/load",permalink:"/sdk/reference/stocks/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/load.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"load",description:"Learn how to use the load function within OpenBBTerminal's stocks module to retrieve and analyze data. Provide a symbol (ticker), define start and end dates, interval, choose whether to include pre/post-hours data and the data source. Options to retrieve weekly and monthly data are available. The gathered data is returned as a pandas DataFrame.",keywords:["symbol analysis","start_date","interval","end_date","prepost","source","YahooFinance","weekly data","monthly data","verbose","data extraction","dataframe"]},sidebar:"tutorialSidebar",previous:{title:"print_insider_data",permalink:"/sdk/reference/stocks/ins/print_insider_data"},next:{title:"chains",permalink:"/sdk/reference/stocks/options/chains"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"stocks.load - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Load a symbol to perform analysis using the string above as a template."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/stocks_helper.py#L223",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.load(symbol: str, start_date: Union[datetime.datetime, str, NoneType] = None, interval: int = 1440, end_date: Union[datetime.datetime, str, NoneType] = None, prepost: bool = False, source: str = "YahooFinance", weekly: bool = False, monthly: bool = False, verbose: bool = True)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Ticker to get data"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"str or datetime"}),(0,n.jsx)(t.td,{children:"Start date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Interval (in minutes) to get data 1, 5, 15, 30, 60 or 1440"}),(0,n.jsx)(t.td,{children:"1440"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"str or datetime"}),(0,n.jsx)(t.td,{children:"End date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prepost"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Pre and After hours data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Source of data extracted"}),(0,n.jsx)(t.td,{children:"YahooFinance"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weekly"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to get weekly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Flag to get monthly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"verbose"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Display verbose information on what was the symbol that was loaded"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe of data"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),d=r(74848);function a(e){let{title:t}=e;return(0,d.jsx)(n.A,{children:(0,d.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(96540);const d={},a=n.createContext(d);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);