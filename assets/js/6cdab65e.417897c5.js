"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77009],{28958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var n=r(74848),i=r(28453),s=r(94331);const d={title:"blacklitterman",description:"This article provides an overview of how to optimize your portfolio using Black Litterman estimates. It includes a detailed guide on parameter usage, command line options, and examples to get you up to speed with the utility.",keywords:["Black Litterman","portfolio optimization","portfolio analysis","investment strategies","benchmarking","investment objectives","risk aversion","financial data analysis","financial modelling","portfolio risk management","investment risk"]},l=void 0,o={id:"terminal/reference/portfolio/po/blacklitterman",title:"blacklitterman",description:"This article provides an overview of how to optimize your portfolio using Black Litterman estimates. It includes a detailed guide on parameter usage, command line options, and examples to get you up to speed with the utility.",source:"@site/content/terminal/reference/portfolio/po/blacklitterman.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/blacklitterman",permalink:"/terminal/reference/portfolio/po/blacklitterman",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/portfolio/po/blacklitterman.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"blacklitterman",description:"This article provides an overview of how to optimize your portfolio using Black Litterman estimates. It includes a detailed guide on parameter usage, command line options, and examples to get you up to speed with the utility.",keywords:["Black Litterman","portfolio optimization","portfolio analysis","investment strategies","benchmarking","investment objectives","risk aversion","financial data analysis","financial modelling","portfolio risk management","investment risk"]},sidebar:"tutorialSidebar",previous:{title:"perf",permalink:"/terminal/reference/portfolio/perf"},next:{title:"dividend",permalink:"/terminal/reference/portfolio/po/dividend"}},a={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio/po/blacklitterman - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Optimize portfolio using Black Litterman estimates"}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"blacklitterman [-bm BENCHMARK] [-o {MinRisk,Utility,Sharpe,MaxRet}] [-pv P_VIEWS] [-qv Q_VIEWS] [-ra RISK_AVERSION] [-d DELTA] [-eq] [-op] [-vs SHORT_ALLOCATION] [--file FILE] [--download DOWNLOAD] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"benchmark"}),(0,n.jsx)(t.td,{children:"portfolio name from current portfolio list"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"objective"}),(0,n.jsx)(t.td,{children:"Objective function used to optimize the portfolio"}),(0,n.jsx)(t.td,{children:"Sharpe"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"MinRisk, Utility, Sharpe, MaxRet"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"p_views"}),(0,n.jsx)(t.td,{children:"matrix P of analyst views"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"q_views"}),(0,n.jsx)(t.td,{children:"matrix Q of analyst views"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_aversion"}),(0,n.jsx)(t.td,{children:"Risk aversion parameter"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"delta"}),(0,n.jsx)(t.td,{children:"Risk aversion factor of Black Litterman model"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"equilibrium"}),(0,n.jsx)(t.td,{children:"If True excess returns are based on equilibrium market portfolio, if False excess returns are calculated as historical returns minus risk free rate."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"optimize"}),(0,n.jsx)(t.td,{children:"If True Black Litterman estimates are used as inputs of mean variance model, if False returns equilibrium weights from Black Litterman model"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"short_allocation"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio in short positions"}),(0,n.jsx)(t.td,{children:"0.0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"file"}),(0,n.jsx)(t.td,{children:"Upload an Excel file with views for Black Litterman model"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"download"}),(0,n.jsx)(t.td,{children:"Create a template to design Black Litterman model views"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"nan_fill_method"}),(0,n.jsx)(t.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(t.td,{children:"time"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"categories"}),(0,n.jsx)(t.td,{children:"Show selected categories"}),(0,n.jsx)(t.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"historic_period"}),(0,n.jsx)(t.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(t.td,{children:"3y"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_period"}),(0,n.jsx)(t.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_period"}),(0,n.jsx)(t.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"log_returns"}),(0,n.jsx)(t.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"return_frequency"}),(0,n.jsx)(t.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(t.td,{children:"d"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"d, w, m"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_nan"}),(0,n.jsx)(t.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(t.td,{children:"0.05"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"threshold_value"}),(0,n.jsx)(t.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(t.td,{children:"0.3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"risk_free"}),(0,n.jsx)(t.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(t.td,{children:"0.02924"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"long_allocation"}),(0,n.jsx)(t.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"Save portfolio with personalized or default name"}),(0,n.jsx)(t.td,{children:"BL_0"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"2022 Apr 26, 01:25 (\ud83e\udd8b) /portfolio/po/ $ add AAPL,MSFT,JP,BA\n2022 Apr 26, 01:26 (\ud83e\udd8b) /portfolio/po/ $ maxsharpe\n\n [3 Years] Maximal return/risk ratio portfolio using volatility as risk measure\n\n      Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value    \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 100.00 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502   0.00 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 JP   \u2502   0.00 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502   0.00 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nAnnual (by 252) expected return: 45.46%\nAnnual (by \u221a252) volatility: 34.16%\nSharpe ratio: 1.3209\n"})}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),i=r(74848);function s(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const i={},s=n.createContext(i);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);