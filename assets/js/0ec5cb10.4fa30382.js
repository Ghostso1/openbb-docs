"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63874],{53306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(74848),o=n(28453),r=n(94331);const a={title:"ad",description:"This documentation explains how to use the Accumulation/Distribution Line, an indicator similar to the On Balance Volume to project trends in the price direction of a stock, and how to use specific parameters with the ad function to get the open value of a stock.",keywords:["Accumulation/Distribution Line","On Balance Volume","Marketing","Stock Value","Close Location Value","Price Trend","Price Flattening"]},c=void 0,s={id:"terminal/reference/crypto/ta/ad",title:"ad",description:"This documentation explains how to use the Accumulation/Distribution Line, an indicator similar to the On Balance Volume to project trends in the price direction of a stock, and how to use specific parameters with the ad function to get the open value of a stock.",source:"@site/content/terminal/reference/crypto/ta/ad.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/ad",permalink:"/openbb-docs/terminal/reference/crypto/ta/ad",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/ad.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"ad",description:"This documentation explains how to use the Accumulation/Distribution Line, an indicator similar to the On Balance Volume to project trends in the price direction of a stock, and how to use specific parameters with the ad function to get the open value of a stock.",keywords:["Accumulation/Distribution Line","On Balance Volume","Marketing","Stock Value","Close Location Value","Price Trend","Price Flattening"]},sidebar:"tutorialSidebar",previous:{title:"unitroot",permalink:"/openbb-docs/terminal/reference/crypto/qa/unitroot"},next:{title:"adosc",permalink:"/openbb-docs/terminal/reference/crypto/ta/adosc"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"crypto/ta/ad - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"The Accumulation/Distribution Line is similar to the On Balance Volume (OBV), which sums the volume times +1/-1 based on whether the close is higher than the previous close. The Accumulation/Distribution indicator, however multiplies the volume by the close location value (CLV). The CLV is based on the movement of the issue within a single bar and can be +1, -1 or zero. The Accumulation/Distribution Line is interpreted by looking for a divergence in the direction of the indicator relative to price. If the Accumulation/Distribution Line is trending upward it indicates that the price may follow. Also, if the Accumulation/Distribution Line becomes flat while the price is still rising (or falling) then it signals an impending flattening of the price."}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"ad [--open]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"b_use_open"}),(0,i.jsx)(t.td,{children:"uses open value of stock"}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154309283-9512c6c0-dda3-4348-9350-105238676479.png",alt:"ad"})}),"\n",(0,i.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),o=n(74848);function r(e){let{title:t}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var i=n(96540);const o={},r=i.createContext(o);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);