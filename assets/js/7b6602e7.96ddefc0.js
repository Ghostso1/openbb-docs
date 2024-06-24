"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38678],{53521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var n=r(74848),c=r(28453),s=r(94331);const d={title:"load",description:"The documentation page describes the crypto currency load function in OpenBB's Terminal. It helps to get data for any crypto currency by specifying parameters such as symbol, start date, interval, exchange, vs_currency, end_date and the source of the data. It then returns a PD DataFrame with price and volume data.",keywords:["cryptocurrency","crypto load","crypto currency data","parameters","CCXT","CoinGecko","YahooFinance","Binance","PD Dataframe","interval","exchange","vs currency","symbol"]},a=void 0,o={id:"sdk/reference/crypto/load",title:"load",description:"The documentation page describes the crypto currency load function in OpenBB's Terminal. It helps to get data for any crypto currency by specifying parameters such as symbol, start date, interval, exchange, vs_currency, end_date and the source of the data. It then returns a PD DataFrame with price and volume data.",source:"@site/content/sdk/reference/crypto/load.md",sourceDirName:"sdk/reference/crypto",slug:"/sdk/reference/crypto/load",permalink:"/openbb-docs/sdk/reference/crypto/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"load",description:"The documentation page describes the crypto currency load function in OpenBB's Terminal. It helps to get data for any crypto currency by specifying parameters such as symbol, start date, interval, exchange, vs_currency, end_date and the source of the data. It then returns a PD DataFrame with price and volume data.",keywords:["cryptocurrency","crypto load","crypto currency data","parameters","CCXT","CoinGecko","YahooFinance","Binance","PD Dataframe","interval","exchange","vs currency","symbol"]},sidebar:"tutorialSidebar",previous:{title:"find",permalink:"/openbb-docs/sdk/reference/crypto/find"},next:{title:"collections",permalink:"/openbb-docs/sdk/reference/crypto/nft/collections"}},i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"crypto.load - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Load crypto currency to get data for"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/cryptocurrency_helpers.py#L488",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.crypto.load(symbol: str, start_date: Union[datetime.datetime, str, NoneType] = None, interval: Union[str, int] = "1440", exchange: str = "binance", vs_currency: str = "usdt", end_date: Union[datetime.datetime, str, NoneType] = None, source: str = "CCXT")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Coin to get"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Union[datetime, Union[str, None]]"}),(0,n.jsx)(t.td,{children:"Start date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Union[str, int]"}),(0,n.jsxs)(t.td,{children:["The interval between data points in minutes.",(0,n.jsx)("br",{}),"Choose from: 1, 15, 30, 60, 240, 1440, 10080, 43200"]}),(0,n.jsx)(t.td,{children:"1440"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"exchange"}),(0,n.jsx)(t.td,{children:"str:"}),(0,n.jsx)(t.td,{children:"The exchange to get data from."}),(0,n.jsx)(t.td,{children:"binance"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"vs_currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Quote Currency (Defaults to usdt)"}),(0,n.jsx)(t.td,{children:"usdt"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Union[datetime, Union[str, None]]"}),(0,n.jsx)(t.td,{children:"End date to get data from with. - datetime or string format (YYYY-MM-DD)"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["The source of the data",(0,n.jsx)("br",{}),"Choose from: CCXT, CoinGecko, YahooFinance"]}),(0,n.jsx)(t.td,{children:"CCXT"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"Dataframe consisting of price and volume data"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var n=r(5260),c=r(74848);function s(e){let{title:t}=e;return(0,c.jsx)(n.A,{children:(0,c.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const c={},s=n.createContext(c);function d(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);