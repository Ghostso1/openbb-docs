"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75002],{42618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),o=t(28453),a=t(94331);const s={title:"Developer Guide",sidebar_position:1,description:"The OpenBB Platform supplies core architecture and services for connecting data providers and extensions, consumable through the Python client or the Fast API",keywords:["developer_guide","OpenBB Platform","Python client","Fast API","getting started","authorization","data providers","OpenBB Hub","local environment","environment variables","user settings","command execution","API response","logging","proxy networks","data cleaning","technical analysis","quantitative analysis","charting libraries"]},r=void 0,d={id:"platform/developer_guide/index",title:"Developer Guide",description:"The OpenBB Platform supplies core architecture and services for connecting data providers and extensions, consumable through the Python client or the Fast API",source:"@site/content/platform/developer_guide/index.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/",permalink:"/platform/developer_guide/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/index.mdx",tags:[],version:"current",lastUpdatedBy:"Igor Radovanovic",lastUpdatedAt:1725899481e3,sidebarPosition:1,frontMatter:{title:"Developer Guide",sidebar_position:1,description:"The OpenBB Platform supplies core architecture and services for connecting data providers and extensions, consumable through the Python client or the Fast API",keywords:["developer_guide","OpenBB Platform","Python client","Fast API","getting started","authorization","data providers","OpenBB Hub","local environment","environment variables","user settings","command execution","API response","logging","proxy networks","data cleaning","technical analysis","quantitative analysis","charting libraries"]},sidebar:"tutorialSidebar",previous:{title:"Add Examples to Commands",permalink:"/platform/user_guides/add_command_examples"},next:{title:"Architecture Overview",permalink:"/platform/developer_guide/architecture_overview"}},l={},c=[{value:"What is the OpenBB Platform?",id:"what-is-the-openbb-platform",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"Developer Guide - Usage | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-openbb-platform",children:"What is the OpenBB Platform?"}),"\n",(0,i.jsx)(n.p,{children:"Starting with V4, we have completely restructured the previous version of the OpenBB SDK."}),"\n",(0,i.jsx)(n.p,{children:"Instead of a single monolithic SDK, that comes with dependency nightmares and compatibility issues with things you may not need, we have morphed into the OpenBB Platform, which serves as a collection of building blocks to be used for your own need."}),"\n",(0,i.jsx)(n.p,{children:"We have broken the Platform into two main components:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenBB Core"}),"\n",(0,i.jsxs)(n.li,{children:["OpenBB Extensions","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"OpenBB Providers"}),"\n",(0,i.jsx)(n.li,{children:"OpenBB Toolkits"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The OpenBB Core provides all of the groundwork for building custom applications. It is a lightweight package providing connections with data providers in a standardized way, and the ability to build additional toolkits on top. Additionally, the ",(0,i.jsx)(n.code,{children:"openbb-core"})," library contains the infrastructure for Fast API deployments."]}),"\n",(0,i.jsx)(n.p,{children:"OpenBB Extensions are the pieces that can be added to the core for building on top of. We have grouped them categorically as, Providers and Toolkits."}),"\n",(0,i.jsxs)(n.p,{children:["As the name suggests, Providers are the interface to obtaining any raw data from any data source. The data providers are accessed through asset class extensions, such as ",(0,i.jsx)(n.code,{children:"openbb-equity"}),". OpenBB toolkits, such as ",(0,i.jsx)(n.code,{children:"openbb-technical"}),", provide additional functionalities on top of the raw data access."]}),"\n",(0,i.jsx)(n.p,{children:"When you install the Platform (openbb), we provide a default set of extensions that give access to a wide range of functionalities and data. Additional data and processing tools are available to be installed and used as desired. The reason we are doing this is to avoid an overcomplicated environment with many dependencies that can cause issues. The goal is that OpenBB can be used as a drop-in within any environment for building and extending applications."}),"\n",(0,i.jsx)(n.p,{children:"At its base, the OpenBB Platform supplies core architecture and services for connecting data providers and extensions, consumable through the Python client or the Fast API."}),"\n",(0,i.jsx)(n.p,{children:"The extension framework provides interoperability between as many, or few, services required."}),"\n",(0,i.jsx)(n.p,{children:"Optional extras are not included with the base installation, and these include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Charting libraries and views"}),"\n",(0,i.jsx)(n.li,{children:"Data processing and calculations"}),"\n",(0,i.jsx)(n.li,{children:"Technical/Quantitative Analysis"}),"\n",(0,i.jsx)(n.li,{children:"Community data providers"}),"\n",(0,i.jsx)(n.li,{children:"Toolkit extensions"}),"\n",(0,i.jsx)(n.li,{children:"CLI Terminal"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Refer to ",(0,i.jsx)(n.a,{href:"/platform/user_guides/extensions",children:"Extensions"})," for the list of extensions hosted in the OpenBB GitHub repository that can be installed independently."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var i=t(5260),o=t(74848);function a(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(96540);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);