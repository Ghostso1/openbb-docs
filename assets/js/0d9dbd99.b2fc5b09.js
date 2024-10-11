"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[20408],{81777:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(74848),r=n(28453),a=n(94331);const o={title:"Data and Data Providers",sidebar_position:2,description:"This page contains some frequently asked questions about OpenBB data and providers.",keywords:["provider","data","source","live","platform","api","FastAPI"]},i=void 0,d={id:"platform/faqs/data_providers",title:"Data and Data Providers",description:"This page contains some frequently asked questions about OpenBB data and providers.",source:"@site/content/platform/faqs/data_providers.mdx",sourceDirName:"platform/faqs",slug:"/platform/faqs/data_providers",permalink:"/platform/faqs/data_providers",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/faqs/data_providers.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1728661847e3,sidebarPosition:2,frontMatter:{title:"Data and Data Providers",sidebar_position:2,description:"This page contains some frequently asked questions about OpenBB data and providers.",keywords:["provider","data","source","live","platform","api","FastAPI"]},sidebar:"tutorialSidebar",previous:{title:"Platform vs SDK",permalink:"/platform/faqs/platform_vs_sdk"},next:{title:"Licensing",permalink:"/platform/licensing/"}},l={},c=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"Data Providers FAQ - FAQs | OpenBB Platform Docs"}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Does OpenBB have coverage for [insert type of data]?"}),(0,s.jsx)(t.p,{children:"Equity market coverage will vary by provider and subscription status with them. It is common for free tiers to be US-listings only."}),(0,s.jsxs)(t.p,{children:["You can find all data models ",(0,s.jsx)(t.a,{href:"/platform/data_models",children:"here"}),", or the ",(0,s.jsx)(t.a,{href:"/platform/reference",children:"Reference"})," page of endpoints."]}),(0,s.jsxs)(t.p,{children:["If the type of data you are looking for is not listed there, send us a ",(0,s.jsx)(t.a,{href:"https://openbb.co/request-a-feature",children:"feature request"})," telling us about your use case."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"The router appears to be missing functions."}),(0,s.jsx)(t.p,{children:"The router populates itself from the installed extensions."}),(0,s.jsxs)(t.p,{children:["For example, if the Technical Analysis extension is not installed, the ",(0,s.jsx)(t.code,{children:"obb.technical"})," router path will not be present."]}),(0,s.jsx)(t.p,{children:"The same applies to data extensions. If a provider module is not installed, it will not be displayed as a choice."}),(0,s.jsx)(t.p,{children:"If you have just installed a new extension, the Python interface may need to be rebuilt. This can be triggered manually with:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"import openbb\nopenbb.build()\nexit()\n"})}),(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"Install all toolkits and data providers with:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'pip install "openbb[all]"\n'})}),(0,s.jsxs)(t.p,{children:["or by cloning the GitHub repo, from the ",(0,s.jsx)(t.code,{children:"/openbb_platform/"})," folder:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"python dev_install.py -e\n"})}),(0,s.jsx)(t.p,{children:"The nightly PyPI distribution is another way to install everything, and to be on the bleeding edge of development:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"pip install openbb-nightly\n"})})]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Why is the returned data not matching the start/end date I requested?"}),(0,s.jsxs)(t.p,{children:["The provider may not have data from the requested period, in which case the data will be what they return. For example, ",(0,s.jsx)(t.code,{children:"provider='yfinance'"})," at one-minute intervals will not return beyond one week ago."]}),(0,s.jsx)(t.p,{children:"Another reason could be the data entitlements of your API key. Check the provider's website to know what data coverage to expect."}),(0,s.jsxs)(t.p,{children:["If there is technical problem with a provider or function, please check ",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose",children:"GitHub"})," and raise an issue if one does not already exist."]}),(0,s.jsxs)(t.p,{children:["Or, send us an ",(0,s.jsx)(t.a,{href:"mailto:support@openbb.co",children:"email"})," with the details, your system configuration, the syntax used, and any error messages that are raised."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I load a ticker symbol from India?"}),(0,s.jsx)(t.p,{children:"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb import obb\ndata = obb.equity.price.historical("ricoauto.ns", provider="fmp")\n'})}),(0,s.jsx)(t.p,{children:"The precise naming convention will differ by source, it's best to reference each source's own documentation for conventions."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How can I request a data provider or function?"}),(0,s.jsxs)(t.p,{children:["Please ",(0,s.jsx)(t.a,{href:"https://openbb.co/request-a-feature",children:"request a feature"}),", tell us about your use case."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Can I contribute my own data provider extension?"}),(0,s.jsxs)(t.p,{children:["Yes! Please take a look at our ",(0,s.jsx)(t.a,{href:"/platform/developer_guide/contributing",children:"Development"})," pages for more information."]})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Can my company become a data partner?"}),(0,s.jsxs)(t.p,{children:["Yes! Please visit our website ",(0,s.jsx)(t.a,{href:"https://openbb.co/use-cases/data-vendors",children:"here"})," and fill out the form."]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);