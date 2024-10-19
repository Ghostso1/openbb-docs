"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85056],{73873:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=n(74848),o=n(28453),a=n(94331),s=n(77968);const i={title:"Database Integrations",sidebar_position:13,description:"Learn about common workflows that you can do with the OpenBB Terminal Pro.",keywords:["workflows","AI","Chart","Tutorials"]},l=void 0,d={id:"pro/database-integrations",title:"Database Integrations",description:"Learn about common workflows that you can do with the OpenBB Terminal Pro.",source:"@site/content/pro/database-integrations.md",sourceDirName:"pro",slug:"/pro/database-integrations",permalink:"/pro/database-integrations",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/database-integrations.md",tags:[],version:"current",lastUpdatedBy:"jose-donato",lastUpdatedAt:1729312116e3,sidebarPosition:13,frontMatter:{title:"Database Integrations",sidebar_position:13,description:"Learn about common workflows that you can do with the OpenBB Terminal Pro.",keywords:["workflows","AI","Chart","Tutorials"]},sidebar:"tutorialSidebar",previous:{title:"API Endpoints",permalink:"/pro/api-endpoints"},next:{title:"Custom Backend",permalink:"/pro/custom-backend/"}},c={},h=[{value:"Current integrations",id:"current-integrations",level:2}];function p(t){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"Database Integrations | OpenBB Terminal Pro Docs"}),"\n","\n",(0,r.jsx)(e.p,{children:"The OpenBB native integrations allows you to connect to Snowflake, MySQL, or SQLite databases directly. You can run any query against your database directly from the Terminal Pro."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Install our Client"}),": Download our free client for ",(0,r.jsx)(e.a,{href:"https://openbb-installers.s3.amazonaws.com/data_connector_0.0.2.dmg",children:"Mac"})," or ",(0,r.jsx)(e.a,{href:"https://openbb-installers.s3.amazonaws.com/OpenBB+Data+Connector_0.0.2_x64_en-US.msi",children:"Windows"})," to get started."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Run the Client"}),": Once installed, simply open the app and type in the port you would like to use. If you are unsure of a good port, feel free to select: ",(0,r.jsx)(e.code,{children:"Recommend Port"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Connect inside the Terminal Pro"}),": Once your client is up and running, click ",(0,r.jsx)(e.a,{href:"https://pro.openbb.co/app/data-connectors",children:"here"})," to enable the connectors - it will ask you for the URL the port is running on - you can find that on the Data Connector Application at the top. Now feel free to enter login credentials for any Snowflake, MySQL, or SQLite database and begin to analyze your data inside of our terminal."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"current-integrations",children:"Current integrations"}),"\n",(0,r.jsx)("ul",{className:"grid grid-cols-1 gap-4 -ml-6",children:(0,r.jsx)(s.A,{title:"Snowflake",description:"",url:"/pro/native-integrations/snowflake"})})]})}function u(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},94331:(t,e,n)=>{n.d(e,{A:()=>a});n(96540);var r=n(5260),o=n(74848);function a(t){let{title:e}=t;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:e})})}},77968:(t,e,n)=>{n.d(e,{A:()=>l});var r=n(28774),o=n(34164),a=(n(96540),n(56347)),s=n(51820),i=n(74848);function l(t){let{title:e,url:n,description:l,command:d}=t;const{pathname:c}=(0,a.zy)(),h=c.replace(/\/v\d+/,""),p=!h.includes("/reference")&&!h.includes("/widgets-library/")&&!h.includes("/data_models");return(0,i.jsxs)(r.A,{className:(0,o.A)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":h.startsWith("/terminal")||h.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":h.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":h.startsWith("/sdk")||h.startsWith("/cli")||h.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":h.startsWith("/excel"),header_docs:!(h.startsWith("/terminal")||h.startsWith("/pro")||h.startsWith("/excel")||h.startsWith("/sdk")||h.startsWith("/platform")||h.startsWith("/bot")||h.startsWith("/cli"))}),to:n,children:[(0,i.jsx)("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsxs)("p",{className:"py-2 font-bold text-lg my-0",children:[e,""]}),p&&(0,i.jsx)(s.A,{className:"ml-auto mr-4"})]}),l?(0,i.jsx)("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0",children:l}):null]})}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var r=n(96540);const o={},a=r.createContext(o);function s(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);