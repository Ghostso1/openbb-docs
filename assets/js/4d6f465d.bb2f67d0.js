"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31282],{9063:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=i(74848),r=i(28453),n=i(94331);const o={title:"vsurf",description:"This page provides instructions on how to use the 'vsurf' command to retrieve an options volatility surface for a specific stock ticker, detailing implied volatilities, open interest, and last price.",keywords:["vsurf command","options volatility surface","stock ticker","implied volatilities","open interest","last price","command usage"]},c=void 0,l={id:"bot/reference/discord/options/vsurf",title:"vsurf",description:"This page provides instructions on how to use the 'vsurf' command to retrieve an options volatility surface for a specific stock ticker, detailing implied volatilities, open interest, and last price.",source:"@site/content/bot/reference/discord/options/vsurf.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/vsurf",permalink:"/bot/reference/discord/options/vsurf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/discord/options/vsurf.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1720548491e3,frontMatter:{title:"vsurf",description:"This page provides instructions on how to use the 'vsurf' command to retrieve an options volatility surface for a specific stock ticker, detailing implied volatilities, open interest, and last price.",keywords:["vsurf command","options volatility surface","stock ticker","implied volatilities","open interest","last price","command usage"]},sidebar:"tutorialSidebar",previous:{title:"vol",permalink:"/bot/reference/discord/options/vol"},next:{title:"pop",permalink:"/bot/reference/discord/pop/"}},d={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.A,{title:"options: vsurf - Discord Reference | OpenBB Bot Docs"}),"\n",(0,s.jsx)(t.p,{children:"This command allows the user to retrieve an options volatility surface for the ticker symbol. Specifically, it will provide a surface based on implied volatilities calculated from options prices, indicating the relationship between the stock price and the implied volatility of options on the stock."}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/op vsurf ticker z\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"ticker"}),(0,s.jsx)(t.td,{children:"Stock Ticker"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"z"}),(0,s.jsx)(t.td,{children:"The variable for the Z axis"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"Volatility (IV), Open Interest (OI), Last Price (LP)"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/op vsurf ticker:AMD z:Volatility\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/op vsurf ticker:AMD z:Open Interest\n"})}),"\n",(0,s.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,t,i)=>{i.d(t,{A:()=>n});i(96540);var s=i(5260),r=i(74848);function n(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var s=i(96540);const r={},n=s.createContext(r);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);