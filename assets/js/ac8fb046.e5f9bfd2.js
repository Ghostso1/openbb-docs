"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3041],{15288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(74848),i=n(28453),o=n(94331);const r={title:"Data Sources",sidebar_position:7,description:"This page explains how to select a provider for any specific command, and set a default source for a route.",keywords:["Terminal","CLI","provider","API keys","FinancialModelingPrep","Polygon","AlphaVantage","Intrinio","YahooFinance","source","data","default"]},s=void 0,d={id:"cli/data-sources",title:"Data Sources",description:"This page explains how to select a provider for any specific command, and set a default source for a route.",source:"@site/content/cli/data-sources.md",sourceDirName:"cli",slug:"/cli/data-sources",permalink:"/cli/data-sources",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/data-sources.md",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1731898835e3,sidebarPosition:7,frontMatter:{title:"Data Sources",sidebar_position:7,description:"This page explains how to select a provider for any specific command, and set a default source for a route.",keywords:["Terminal","CLI","provider","API keys","FinancialModelingPrep","Polygon","AlphaVantage","Intrinio","YahooFinance","source","data","default"]},sidebar:"tutorialSidebar",previous:{title:"Hub Synchronization",permalink:"/cli/hub"},next:{title:"OpenBBUserData Folder",permalink:"/cli/openbbuserdata"}},c={},l=[{value:"Data Source In-Command",id:"data-source-in-command",level:2},{value:"Setting The Default Source",id:"setting-the-default-source",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"Data Sources | OpenBB Platform CLI Docs"}),"\n",(0,a.jsx)(t.p,{children:"Many commands have multiple data sources associated with it. This page describes how to select from multiple providers."}),"\n",(0,a.jsxs)(t.admonition,{type:"important",children:[(0,a.jsxs)(t.p,{children:["API credentials are defined in the ",(0,a.jsx)(t.code,{children:"user_settings.json"})," file."]}),(0,a.jsxs)(t.p,{children:["Find all data providers ",(0,a.jsx)(t.a,{href:"/platform/user_guides/extensions/",children:"here"}),", and manage all your credentials directly on the ",(0,a.jsx)(t.a,{href:"https://my.openbb.co/app/platform/credentials",children:"OpenBB Hub"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"data-source-in-command",children:"Data Source In-Command"}),"\n",(0,a.jsxs)(t.p,{children:["To specify the data vendor for that particular command, use the ",(0,a.jsx)(t.code,{children:"--provider"})," argument."]}),"\n",(0,a.jsxs)(t.p,{children:["Parameter choices can be viewed from the help dialogue, ",(0,a.jsx)(t.code,{children:"-h"})," or ",(0,a.jsx)(t.code,{children:"--help"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"/equity/price/historical -h\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"usage: historical --symbol SYMBOL [SYMBOL ...] [--interval INTERVAL] [--start_date START_DATE] [--end_date END_DATE] [--chart]\n                  [--provider {fmp,intrinio,polygon,tiingo,yfinance}] [--start_time START_TIME] [--end_time END_TIME] [--timezone TIMEZONE]\n                  [--source {realtime,delayed,nasdaq_basic}] [--sort {asc,desc}] [--limit LIMIT] [--extended_hours] [--include_actions]\n                  [--adjustment {splits_and_dividends,unadjusted,splits_only}] [--adjusted] [--prepost] [-h] [--export EXPORT]\n                  [--sheet-name SHEET_NAME [SHEET_NAME ...]]\n\nGet historical price data for a given stock. This includes open, high, low, close, and volume.\n\noptions:\n  --interval INTERVAL   Time interval of the data to return.\n  --start_date START_DATE\n                        Start date of the data, in YYYY-MM-DD format.\n  --end_date END_DATE   End date of the data, in YYYY-MM-DD format.\n  --chart               Whether to create a chart or not, by default False.\n  --provider {fmp,intrinio,polygon,tiingo,yfinance}\n                        The provider to use for the query, by default None.\n                            If None, the provider specified in defaults is selected or 'fmp' if there is\n                            no default.\n  --extended_hours      Include Pre and Post market data. (provider: polygon, yfinance)\n  --adjustment {splits_and_dividends,unadjusted,splits_only}\n                        The adjustment factor to apply. Default is splits only. (provider: polygon, yfinance)\n  -h, --help            show this help message\n  --export EXPORT       Export raw data into csv, json, xlsx and figure into png or jpg\n  --sheet-name SHEET_NAME [SHEET_NAME ...]\n                        Name of excel sheet to save data to. Only valid for .xlsx files.\n\nrequired arguments:\n  --symbol SYMBOL [SYMBOL ...]\n                        Symbol to get data for. Multiple comma separated items allowed for provider(s): fmp, polygon, tiingo, yfinance.\n\nintrinio:\n  --start_time START_TIME\n                        Return intervals starting at the specified time on the `start_date` formatted as 'HH:MM:SS'.\n  --end_time END_TIME   Return intervals stopping at the specified time on the `end_date` formatted as 'HH:MM:SS'.\n  --timezone TIMEZONE   Timezone of the data, in the IANA format (Continent/City).\n  --source {realtime,delayed,nasdaq_basic}\n                        The source of the data.\n\npolygon:\n  --sort {asc,desc}     Sort order of the data. This impacts the results in combination with the 'limit' parameter. The results are always returned in ascending order by date.\n  --limit LIMIT         The number of data entries to return.\n\nyfinance:\n  --include_actions     Include dividends and stock splits in results.\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Provider-specific parameters are listed at the bottom of the print out. They are ignored when entered, if it is not supported by the selected provider."})}),"\n",(0,a.jsx)(t.h2,{id:"setting-the-default-source",children:"Setting The Default Source"}),"\n",(0,a.jsxs)(t.p,{children:["The default data providers for each command can be defined within the user configuration file: ",(0,a.jsx)(t.code,{children:"/home/your-user/.openbb_platform/user_settings.json"}),". You can set a single provider or a priority list. If a list is set, the command will use the first provider for which all required credentials set."]}),"\n",(0,a.jsxs)(t.p,{children:["See the example below for ",(0,a.jsx)(t.code,{children:"obb.equity.price.historical"})," command:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'# user_settings.json\n{\n    "defaults": {\n        "commands": {\n            "equity.price.historical": {\n                "provider": "fmp"\n            },\n            "equity.fundamental.balance": {\n                "provider": ["intrinio", "fmp", "polygon"]\n            },\n            ...\n        }\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(5260),i=n(74848);function o(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var a=n(96540);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);