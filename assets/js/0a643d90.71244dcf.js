"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65370],{80348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=r(74848),i=r(28453),s=r(94331);const a={title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",keywords:["trading pairs","binance","openbb.crypto.dd","cryptocurrency","due diligence","openbb terminal","trading parameters","API","ETHBTC symbol","trading functionality"]},o=void 0,d={id:"sdk/reference/crypto/dd/trading_pairs",title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",source:"@site/content/sdk/reference/crypto/dd/trading_pairs.md",sourceDirName:"sdk/reference/crypto/dd",slug:"/sdk/reference/crypto/dd/trading_pairs",permalink:"/sdk/reference/crypto/dd/trading_pairs",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/crypto/dd/trading_pairs.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,frontMatter:{title:"trading_pairs",description:"Information and code snippet on how to get all trading pairs on binance using openbb.crypto.dd.trading_pairs(). Details parameters and returns.",keywords:["trading pairs","binance","openbb.crypto.dd","cryptocurrency","due diligence","openbb terminal","trading parameters","API","ETHBTC symbol","trading functionality"]},sidebar:"tutorialSidebar",previous:{title:"trading_pair_info",permalink:"/sdk/reference/crypto/dd/trading_pair_info"},next:{title:"twitter",permalink:"/sdk/reference/crypto/dd/twitter"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"crypto.dd.trading_pairs - Reference | OpenBB SDK Docs"}),"\n",(0,t.jsx)(n.p,{children:"Helper method that return all trading pairs on binance. Methods ause this data for input for e.g"}),"\n",(0,t.jsxs)(n.p,{children:["Source Code: [",(0,t.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L21",children:"link"}),"]"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"openbb.crypto.dd.trading_pairs()\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.p,{children:"This function does not take any parameters."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Type"}),(0,t.jsx)("td",{children:"Description"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"List[dict]"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.p,{children:"list of dictionaries in format:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"[\n  {\n    'symbol': 'ETHBTC', 'status': 'TRADING', 'baseAsset': 'ETH', 'baseAssetPrecision': 8,\n    'quoteAsset': 'BTC', 'quotePrecision': 8, 'quoteAssetPrecision': 8,\n    'baseCommissionPrecision': 8, 'quoteCommissionPrecision': 8,\n    'orderTypes': ['LIMIT', 'LIMIT_MAKER', 'MARKET', 'STOP_LOSS_LIMIT', 'TAKE_PROFIT_LIMIT'],\n    'icebergAllowed': True,\n    'ocoAllowed': True,\n    'quoteOrderQtyMarketAllowed': True,\n    'isSpotTradingAllowed': True,\n    'isMarginTradingAllowed': True,\n    'filters': [\n      {'filterType': 'PRICE_FILTER', 'minPrice': '0.00000100', 'maxPrice': '922327.00000000', 'tickSize': '0.00000100'},\n      {'filterType': 'PERCENT_PRICE', 'multiplierUp': '5', 'multiplierDown': '0.2', 'avgPriceMins': 5},\n      {'filterType': 'LOT_SIZE', 'minQty': '0.00100000', 'maxQty': '100000.00000000', 'stepSize': '0.00100000'},\n      {'filterType': 'MIN_NOTIONAL', 'minNotional': '0.00010000', 'applyToMarket': True, 'avgPriceMins': 5},\n      {'filterType': 'ICEBERG_PARTS', 'limit': 10},\n      {'filterType': 'MARKET_LOT_SIZE', 'minQty': '0.00000000', 'maxQty': '930.49505347', 'stepSize': '0.00000000'},\n      {'filterType': 'MAX_NUM_ORDERS', 'maxNumOrders': 200},\n      {'filterType': 'MAX_NUM_ALGO_ORDERS', 'maxNumAlgoOrders': 5}\n    ],\n    'permissions': ['SPOT', 'MARGIN']\n  }\n]\n\n"})})]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},94331:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(5260),i=r(74848);function s(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var t=r(96540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);