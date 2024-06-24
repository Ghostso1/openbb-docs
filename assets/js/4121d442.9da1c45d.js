"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24275],{24438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(74848),i=t(28453),c=t(94331);const r={title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",keywords:["blockchain","active blockchain addresses","tracking blockchain","change command","exchange platform","blockchain data tracking","data fetching","data commands","coinex","bittrex","binance","poloniex","blockchain analytics","glassnode source","command parameters","bitfinex","kraken","okex","bithumb","coinbase","luno"]},o=void 0,s={id:"terminal/reference/crypto/dd/change",title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",source:"@site/content/terminal/reference/crypto/dd/change.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/change",permalink:"/openbb-docs/terminal/reference/crypto/dd/change",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/dd/change.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"change",description:"A detailed guide on how to use the 'change' command for tracking active blockchain addresses over time in various exchanges. It also provides instructions on setting input parameters and explains their usage for more precise data.",keywords:["blockchain","active blockchain addresses","tracking blockchain","change command","exchange platform","blockchain data tracking","data fetching","data commands","coinex","bittrex","binance","poloniex","blockchain analytics","glassnode source","command parameters","bitfinex","kraken","okex","bithumb","coinbase","luno"]},sidebar:"tutorialSidebar",previous:{title:"bc",permalink:"/openbb-docs/terminal/reference/crypto/dd/bc"},next:{title:"desc",permalink:"/openbb-docs/terminal/reference/crypto/dd/desc"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{title:"crypto/dd/change - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsxs)(n.p,{children:["Display active blockchain addresses over time [Source: ",(0,a.jsx)(n.a,{href:"https://glassnode.org",children:"https://glassnode.org"}),"]"," Note that free api keys only allow fetching data with a 1y lag"]}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"change [-e {aggregated,binance,bittrex,coinex,gate.io,gemini,huobi,kucoin,poloniex,bibox,bigone,bitfinex,hitbtc,kraken,okex,bithumb,zb.com,cobinhood,bitmex,bitstamp,coinbase,coincheck,luno}] [-s SINCE] [-u UNTIL]\n"})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default"}),(0,a.jsx)(n.th,{children:"Optional"}),(0,a.jsx)(n.th,{children:"Choices"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"exchange"}),(0,a.jsx)(n.td,{children:"Exchange to check change. Default: aggregated"}),(0,a.jsx)(n.td,{children:"aggregated"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"aggregated, binance, bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"since"}),(0,a.jsx)(n.td,{children:"Initial date. Default: 2 years ago"}),(0,a.jsx)(n.td,{children:"2020-11-25"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"until"}),(0,a.jsx)(n.td,{children:"Final date. Default: 1 year ago"}),(0,a.jsx)(n.td,{children:"2021-11-23"}),(0,a.jsx)(n.td,{children:"True"}),(0,a.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/154060004-c5367c72-d25b-48da-a316-35d8d6e5208e.png",alt:"change"})}),"\n",(0,a.jsx)(n.hr,{})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var a=t(5260),i=t(74848);function c(e){let{title:n}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const i={},c=a.createContext(i);function r(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);