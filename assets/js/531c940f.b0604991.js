"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38794],{24842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=n(74848),s=n(28453),i=n(94331);const a={title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",keywords:["technical data","stock filtering","stock analytics","financial tools","preset filters","stock parameters","data sorting","financial data analysis"]},o=void 0,c={id:"terminal/reference/stocks/screener/technical",title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",source:"@site/content/terminal/reference/stocks/screener/technical.md",sourceDirName:"terminal/reference/stocks/screener",slug:"/terminal/reference/stocks/screener/technical",permalink:"/openbb-docs/terminal/reference/stocks/screener/technical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/screener/technical.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"technical",description:"This page provides a comprehensive guide to the 'technical' functionality of our platform. It explains how to use presets to filter and print technical data of companies, and describes the functions of different parameters.",keywords:["technical data","stock filtering","stock analytics","financial tools","preset filters","stock parameters","data sorting","financial data analysis"]},sidebar:"tutorialSidebar",previous:{title:"set",permalink:"/openbb-docs/terminal/reference/stocks/screener/set"},next:{title:"valuation",permalink:"/openbb-docs/terminal/reference/stocks/screener/valuation"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"stocks/screener/technical - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Prints technical data of the companies that meet the pre-set filtering."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"technical [-p Desired preset.] [-l LIMIT] [-r] [-s {ticker,beta,atr,sma20,sma50,sma200,52whigh,52wlow,rsi,price,change,fromopen,gap,volume}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"preset"}),(0,r.jsx)(t.td,{children:"Filter presets"}),(0,r.jsx)(t.td,{children:"top_gainers"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"template, oversold_under_5dol, potential_reversals, top_performers_all, death_cross, unusual_volume, news_scanner, cheap_bottom_dividend, cheap_dividend, top_performers_healthcare, bull_runs_over_10pct, value_stocks, golden_cross, growth_stocks, channel_up_and_low_debt_and_sma_50and200, buffett_like, continued_momentum_scan, analyst_strong_buy, under_15dol_stocks, 5pct_above_low, cheap_oversold, weak_support_and_top_performers, undervalue, oversold_under_3dol, top_performers_tech, rosenwald_gtfo, recent_growth_and_support, heavy_inst_ins, modified_neff, simplistic_momentum_scanner_under_7dol, golden_cross_penny, break_out_stocks, high_vol_and_low_debt, stocks_strong_support_levels, sexy_year, short_squeeze_scan, oversold, rosenwald, modified_dreman, top_gainers, top_losers, new_high, new_low, most_volatile, most_active, overbought, downgrades, upgrades, earnings_before, earnings_after, recent_insider_buying, recent_insider_selling, major_news, horizontal_sr, tl_resistance, tl_support, wedge_up, wedge_down, wedge, triangle_ascending, triangle_descending, channel_up, channel_down, channel, double_top, double_bottom, multiple_top, multiple_bottom, head_shoulders, head_shoulders_inverse"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"limit"}),(0,r.jsx)(t.td,{children:"Limit of stocks to print"}),(0,r.jsx)(t.td,{children:"10"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"reverse"}),(0,r.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"sort"}),(0,r.jsx)(t.td,{children:"Sort elements of the table."}),(0,r.jsx)(t.td,{children:"Ticker"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"ticker, beta, atr, sma20, sma50, sma200, 52whigh, 52wlow, rsi, price, change, fromopen, gap, volume"})]})]})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);