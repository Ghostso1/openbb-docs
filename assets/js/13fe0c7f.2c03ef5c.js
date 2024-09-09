"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34288],{26453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=n(74848),i=n(28453),s=n(94331);const o={title:"API Endpoints",sidebar_position:12,description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},r=void 0,d={id:"pro/api-endpoints",title:"API Endpoints",description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",source:"@site/content/pro/api-endpoints.md",sourceDirName:"pro",slug:"/pro/api-endpoints",permalink:"/pro/api-endpoints",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/api-endpoints.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1725894016e3,sidebarPosition:12,frontMatter:{title:"API Endpoints",sidebar_position:12,description:"Learn how to use the API Endpoint Widget of OpenBB Terminal for seamless integration with your APIs, enabling custom data to be fetched and displayed in an accessible format. Includes features like additional headers and addressing nested JSON data.",keywords:["Data Connectors","API Endpoints","Data Integration","User-friendly Table Format","Additional Headers","Data Key Parameter","Nested JSON","Custom Backend"]},sidebar:"tutorialSidebar",previous:{title:"Upload Files",permalink:"/pro/upload-files"},next:{title:"Custom Backend",permalink:"/pro/custom-backend/"}},l={},c=[{value:"Common Issues and Solutions",id:"common-issues-and-solutions",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"API Endpoint | OpenBB Terminal Pro Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"API endpoints are the fastest way to integrate your custom data into OpenBB Terminal Pro. This method allows you to import data via a URL or endpoint that is directly rendered into a table format providing a quick and easy way to visualize your data."}),"\n",(0,a.jsx)(t.p,{children:"Simply enter your API endpoint along with any required connection details. Once configured, you need to select the metadata and then a corresponding widget will be created. It will then dynamically load and display your data within the Terminal Pro interface."}),"\n",(0,a.jsxs)(t.p,{children:["For something more custom, you should look into creating ",(0,a.jsx)(t.a,{href:"/pro/data-connectors/integrate-your-own-backend",children:"your own backend"}),", or reach out for support."]}),"\n",(0,a.jsx)(t.h2,{id:"common-issues-and-solutions",children:"Common Issues and Solutions"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Why can't I see my data in the table?"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Ensure that the endpoint or url you are using returns data in JSON format"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"I'm getting an error that it can't fetch the url"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Your endpoint might require additional headers to be passed, you can add them using the '+ Add Headers' button."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"My data isn't showing up correctly in the table."})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:['If your API endpoint doesn\'t return a a simple JSON but a nested architecture, you will be prompted with a "Data Key" parameter which you can use to grab the data of interest.\nYou may also need to use our ',(0,a.jsx)(t.a,{href:"/pro/integrate-your-own-backend",children:"Custom Backend"})," if you want to do anything else like processing the data."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If your issue is not listed above, please contact support at ",(0,a.jsx)(t.a,{href:"mailto:support@openbb.finance",children:"support@openbb.finance"})," with details of your problem."]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.p,{children:"Here's a list of public API endpoints that can be used for free:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Widget title"}),(0,a.jsx)(t.th,{children:"Public URL"}),(0,a.jsx)(t.th,{children:"Category"}),(0,a.jsx)(t.th,{children:"Subcategory"}),(0,a.jsx)(t.th,{children:"Source"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Protocols"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://defillama-datasets.llama.fi/lite/v2/protocols",children:"https://defillama-datasets.llama.fi/lite/v2/protocols"})}),(0,a.jsx)(t.td,{children:"DeFi"}),(0,a.jsx)(t.td,{children:"TVL"}),(0,a.jsx)(t.td,{children:"DefiLLama"}),(0,a.jsx)(t.td,{children:"List of all protocols on DefiLlama along with their TVL"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Historical Chain TVL"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://api.llama.fi/v2/historicalChainTvl",children:"https://api.llama.fi/v2/historicalChainTvl"})}),(0,a.jsx)(t.td,{children:"DeFi"}),(0,a.jsx)(t.td,{children:"TVL"}),(0,a.jsx)(t.td,{children:"DefiLLama"}),(0,a.jsx)(t.td,{children:"Get historical TVL (excludes liquid staking and double counted tvl) on DeFi on all chains"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Chains"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://api.llama.fi/v2/chains",children:"https://api.llama.fi/v2/chains"})}),(0,a.jsx)(t.td,{children:"DeFi"}),(0,a.jsx)(t.td,{children:"TVL"}),(0,a.jsx)(t.td,{children:"DefiLLama"}),(0,a.jsx)(t.td,{children:"Get current TVL of all chains"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"TAO stats"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://taostats.io/data.json",children:"https://taostats.io/data.json"})}),(0,a.jsx)(t.td,{children:"Crypto"}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"Tao"}),(0,a.jsx)(t.td,{children:"Latest $TAO token and subnet information"})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(5260),i=n(74848);function s(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(96540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);