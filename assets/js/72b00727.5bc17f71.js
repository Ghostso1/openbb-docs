"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[280],{65968:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(74848),s=n(28453),i=n(94331);const o={title:"API Endpoints",sidebar_position:12,description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},d=void 0,r={id:"terminal/api-endpoints",title:"API Endpoints",description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",source:"@site/content/terminal/api-endpoints.md",sourceDirName:"terminal",slug:"/terminal/api-endpoints",permalink:"/terminal/api-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/api-endpoints.md",tags:[],version:"current",lastUpdatedBy:"DidierRLopes",lastUpdatedAt:1729789333e3,sidebarPosition:12,frontMatter:{title:"API Endpoints",sidebar_position:12,description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Upload Files",permalink:"/terminal/upload-files"},next:{title:"Database Integrations",permalink:"/terminal/database-integrations/"}},l={},c=[{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"Examples",id:"examples",level:2}];function h(t){const e={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"API Endpoint | OpenBB Terminal Pro Docs"}),"\n","\n",(0,a.jsx)(e.p,{children:"API endpoints are the fastest way to integrate your custom data into OpenBB Terminal Pro. This method allows you to import data via a URL or endpoint that is directly rendered into a table format providing a quick and easy way to visualize your data."}),"\n",(0,a.jsx)(e.p,{children:"Simply enter your API endpoint along with any required connection details. Once configured, you need to select the metadata and then a corresponding widget will be created. It will then dynamically load and display your data within the Terminal Pro interface."}),"\n",(0,a.jsxs)(e.p,{children:["For something more custom, you should look into creating ",(0,a.jsx)(e.a,{href:"/terminal/custom-backend",children:"your own backend"}),", or reach out for support."]}),"\n",(0,a.jsx)(e.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Why can't I see my data in the table?"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"Ensure that the endpoint or url you are using returns data in JSON format"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"I'm getting an error that it can't fetch the url"})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsx)(e.p,{children:"Your endpoint might require additional headers to be passed, you can add them using the '+ Add Headers' button."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"My data isn't showing up correctly in the table."})}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:['If your API endpoint doesn\'t return a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.\nYou may also need to use our ',(0,a.jsx)(e.a,{href:"/terminal/custom-backend",children:"Custom Backend"})," if you want to do anything else like processing the data."]}),"\n"]}),"\n",(0,a.jsxs)(e.p,{children:["If your issue is not listed above, please contact support at ",(0,a.jsx)(e.a,{href:"mailto:support@openbb.finance",children:"support@openbb.finance"})," with details of your problem."]}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.p,{children:"Here's a list of public API endpoints that can be used for free:"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Widget title"}),(0,a.jsx)(e.th,{children:"Public URL"}),(0,a.jsx)(e.th,{children:"Category"}),(0,a.jsx)(e.th,{children:"Subcategory"}),(0,a.jsx)(e.th,{children:"Source"}),(0,a.jsx)(e.th,{children:"Description"}),(0,a.jsx)(e.th,{children:"Add to Pro"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Protocols"}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.a,{href:"https://defillama-datasets.llama.fi/lite/v2/protocols",children:"https://defillama-datasets.llama.fi/lite/v2/protocols"})}),(0,a.jsx)(e.td,{children:"DeFi"}),(0,a.jsx)(e.td,{children:"TVL"}),(0,a.jsx)(e.td,{children:"DefiLLama"}),(0,a.jsx)(e.td,{children:"List of all protocols on DefiLlama along with their TVL"}),(0,a.jsx)(e.td,{children:(0,a.jsxs)("a",{href:"https://pro.openbb.co/app/data-connectors?modal=data-connectors&dcTab=single&endpoint=https://defillama-datasets.llama.fi/lite/v2/protocols&name=Protocols",target:"_blank",children:[" ",(0,a.jsx)("button",{className:"_btn text-xs",children:"Add"})," "]})})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Historical Chain TVL"}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.a,{href:"https://api.llama.fi/v2/historicalChainTvl",children:"https://api.llama.fi/v2/historicalChainTvl"})}),(0,a.jsx)(e.td,{children:"DeFi"}),(0,a.jsx)(e.td,{children:"TVL"}),(0,a.jsx)(e.td,{children:"DefiLLama"}),(0,a.jsx)(e.td,{children:"Get historical TVL (excludes liquid staking and double counted tvl) on DeFi on all chains"}),(0,a.jsx)(e.td,{children:(0,a.jsxs)("a",{href:"https://pro.openbb.co/app/data-connectors?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/historicalChainTvl&name=Historical Chain TVL",target:"_blank",children:[" ",(0,a.jsx)("button",{className:"_btn text-xs",children:"Add"})," "]})})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Chains"}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.a,{href:"https://api.llama.fi/v2/chains",children:"https://api.llama.fi/v2/chains"})}),(0,a.jsx)(e.td,{children:"DeFi"}),(0,a.jsx)(e.td,{children:"TVL"}),(0,a.jsx)(e.td,{children:"DefiLLama"}),(0,a.jsx)(e.td,{children:"Get current TVL of all chains"}),(0,a.jsx)(e.td,{children:(0,a.jsxs)("a",{href:"https://pro.openbb.co/app/data-connectors?modal=data-connectors&dcTab=single&endpoint=https://api.llama.fi/v2/chains&name=Chains",target:"_blank",children:[" ",(0,a.jsx)("button",{className:"_btn text-xs",children:"Add"})," "]})})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"TAO stats"}),(0,a.jsx)(e.td,{children:(0,a.jsx)(e.a,{href:"https://taostats.io/data.json",children:"https://taostats.io/data.json"})}),(0,a.jsx)(e.td,{children:"Crypto"}),(0,a.jsx)(e.td,{}),(0,a.jsx)(e.td,{children:"Tao"}),(0,a.jsx)(e.td,{children:"Latest $TAO token and subnet information"}),(0,a.jsx)(e.td,{children:(0,a.jsxs)("a",{href:"https://pro.openbb.co/app/data-connectors?modal=data-connectors&dcTab=single&endpoint=https://taostats.io/data.json&name=TAO stats",target:"_blank",children:[" ",(0,a.jsx)("button",{className:"_btn text-xs",children:"Add"})," "]})})]})]})]})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},94331:(t,e,n)=>{n.d(e,{A:()=>i});n(96540);var a=n(5260),s=n(74848);function i(t){let{title:e}=t;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:e})})}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>d});var a=n(96540);const s={},i=a.createContext(s);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);