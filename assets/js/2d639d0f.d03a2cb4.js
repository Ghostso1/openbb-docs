"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13141],{87407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var i=r(74848),n=r(28453),s=r(94331);const d={title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",keywords:["Black Litterman model","Portfolio optimization","Portfolio weights","Risk management","Return estimates","Sharpe ratio","Equilibrium portfolio"]},o=void 0,l={id:"sdk/reference/portfolio/po/blacklitterman",title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",source:"@site/content/sdk/reference/portfolio/po/blacklitterman.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/blacklitterman",permalink:"/openbb-docs/sdk/reference/portfolio/po/blacklitterman",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/po/blacklitterman.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"blacklitterman",description:"The page describes the Python method for the Black Litterman model implemented in the OpenBB library for optimizing portfolio weights. This method provides an advanced approach in risk management and return estimation by taking into account various parameters like risk-free rate, risk aversion factor, and objectives like maximizing Sharpe ratio or minimizing risk.",keywords:["Black Litterman model","Portfolio optimization","Portfolio weights","Risk management","Return estimates","Sharpe ratio","Equilibrium portfolio"]},sidebar:"tutorialSidebar",previous:{title:"perf",permalink:"/openbb-docs/sdk/reference/portfolio/perf"},next:{title:"dividend",permalink:"/openbb-docs/sdk/reference/portfolio/po/dividend"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"portfolio.po.blacklitterman - Reference | OpenBB SDK Docs"}),"\n",(0,i.jsx)(t.p,{children:"Optimize decorrelation weights"}),"\n",(0,i.jsxs)(t.p,{children:["Source Code: [",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L1019",children:"link"}),"]"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"openbb.portfolio.po.blacklitterman(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"portfolio_engine"}),(0,i.jsx)(t.td,{children:"PoEngine"}),(0,i.jsxs)(t.td,{children:["Portfolio optimization engine, by default None",(0,i.jsx)("br",{}),"Use ",(0,i.jsx)(t.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"symbols"}),(0,i.jsx)(t.td,{children:"List[str]"}),(0,i.jsx)(t.td,{children:"List of symbols, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"interval"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Interval to get data, by default '3y'"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start_date"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"end_date"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log_returns"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"freq"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"maxnan"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"threshold"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"method"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["Method used to fill nan values, by default 'time'",(0,i.jsx)("br",{}),"For more information see ",(0,i.jsx)(t.a,{href:"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html",children:(0,i.jsx)(t.code,{children:"interpolate"})}),"."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value_short"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"benchmark"}),(0,i.jsx)(t.td,{children:"Dict"}),(0,i.jsx)(t.td,{children:"Dict of portfolio weights, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"p_views"}),(0,i.jsx)(t.td,{children:"List"}),(0,i.jsx)(t.td,{children:"Matrix P of views that shows relationships among assets and returns, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"q_views"}),(0,i.jsx)(t.td,{children:"List"}),(0,i.jsx)(t.td,{children:"Matrix Q of expected returns of views, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"objective"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsxs)(t.td,{children:["Objective function of the optimization model, by default 'Sharpe'",(0,i.jsx)("br",{}),"Possible values are:",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"- 'MinRisk': Minimize the selected risk measure.",(0,i.jsx)("br",{}),"- 'Utility': Maximize the risk averse utility function.",(0,i.jsx)("br",{}),"- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.",(0,i.jsx)("br",{}),"- 'MaxRet': Maximize the expected return of the portfolio."]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"risk_free_rate"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"risk_aversion"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Risk aversion factor of the 'Utility' objective function, by default 1.0"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"delta"}),(0,i.jsx)(t.td,{children:"float"}),(0,i.jsx)(t.td,{children:"Risk aversion factor of Black Litterman model, by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"equilibrium"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsxs)(t.td,{children:["If True excess returns are based on equilibrium market portfolio, if False",(0,i.jsx)("br",{}),"excess returns are calculated as historical returns minus risk free rate, by default True"]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"optimize"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsxs)(t.td,{children:["If True Black Litterman estimates are used as inputs of mean variance model,",(0,i.jsx)("br",{}),"if False returns equilibrium weights from Black Litterman model, by default True"]}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,i.jsx)(t.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.blacklitterman(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"(        value\n AAPL  0.48920\n MSFT  0.28391\n AMZN  0.22689,\n {'Return': 0.2563301105112327,\n  'Volatility': 0.33132073874339424,\n  'Sharpe ratio': 0.7736615325784322})\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.blacklitterman(portfolio_engine=p)\n'})}),"\n",(0,i.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var i=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var i=r(96540);const n={},s=i.createContext(n);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);