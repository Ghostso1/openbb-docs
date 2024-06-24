"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64628],{43949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453),a=n(94331);const i={title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",keywords:["dwat","autocorrelation tests","Durbin-Watson","OLS","independent variables","dependent variables","regression results","plot","residuals","multicollinearity","numerical problems","analytics","statistics","econometrics","statistical analysis"]},o=void 0,c={id:"terminal/reference/econometrics/dwat",title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",source:"@site/content/terminal/reference/econometrics/dwat.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/dwat",permalink:"/openbb-docs/terminal/reference/econometrics/dwat",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/econometrics/dwat.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"dwat",description:"The 'dwat' documentation page provides comprehensive information about Durbin-Watson autocorrelation test, its usage with Ordinary Least Squares (OLS) regression, and potential issues and solutions with multi-collinearity and numerical problems. The page features examples with a Python command, its parameters, and regression results to provide a practical understanding of the concepts.",keywords:["dwat","autocorrelation tests","Durbin-Watson","OLS","independent variables","dependent variables","regression results","plot","residuals","multicollinearity","numerical problems","analytics","statistics","econometrics","statistical analysis"]},sidebar:"tutorialSidebar",previous:{title:"desc",permalink:"/openbb-docs/terminal/reference/econometrics/desc"},next:{title:"export",permalink:"/openbb-docs/terminal/reference/econometrics/export"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"econometrics /dwat - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Show autocorrelation tests from Durbin-Watson. Needs OLS to be run in advance with independent and dependent variables"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"dwat [-p]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plot"}),(0,s.jsx)(t.td,{children:"Plot the residuals"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"2022 Feb 24, 05:59 (\ud83e\udd8b) /econometrics/ $ ols -d adj_close-msft -i adj_close-aapl -i adj_close-googl -i adj_close-tsla\n                            OLS Regression Results\n==============================================================================\nDep. Variable:         adj_close_msft   R-squared:                       0.977\nModel:                            OLS   Adj. R-squared:                  0.977\nMethod:                 Least Squares   F-statistic:                 1.068e+04\nDate:                Thu, 24 Feb 2022   Prob (F-statistic):               0.00\nTime:                        12:00:01   Log-Likelihood:                -2830.6\nNo. Observations:                 759   AIC:                             5669.\nDf Residuals:                     755   BIC:                             5688.\nDf Model:                           3\nCovariance Type:            nonrobust\n===================================================================================\n                      coef    std err          t      P|t|      [0.025      0.975]\n-----------------------------------------------------------------------------------\nIntercept          27.7984      2.166     12.832      0.000      23.546      32.051\nadj_close_aapl      0.8662      0.034     25.503      0.000       0.800       0.933\nadj_close_googl     0.0508      0.002     30.374      0.000       0.048       0.054\nadj_close_tsla     -0.0007      0.004     -0.181      0.856      -0.009       0.007\n==============================================================================\nOmnibus:                       41.445   Durbin-Watson:                   0.044\nProb(Omnibus):                  0.000   Jarque-Bera (JB):               47.398\nSkew:                           0.612   Prob(JB):                     5.10e-11\nKurtosis:                       2.995   Cond. No.                     1.16e+04\n==============================================================================\n\nNotes:\n[1] Standard Errors assume that the covariance matrix of the errors is correctly specified.\n[2] The condition number is large, 1.16e+04. This might indicate that there are\nstrong multicollinearity or other numerical problems.\n\n2022 Feb 24, 06:00 (\ud83e\udd8b) /statistics/ $ dwat -p\nThe result 0.04 is outside the range 1.5 and 2.5 and therefore autocorrelation can be problematic.\nPlease consider lags of the dependent or independent variable.\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/155514788-caaa65a2-1f5f-41d0-8db2-06e682d5a53e.png",alt:"durbin_watson example"})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);