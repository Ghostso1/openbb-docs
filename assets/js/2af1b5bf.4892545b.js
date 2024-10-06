"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57496],{29187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453),i=t(94331);const o={title:"Help",sidebar_position:5,description:"Help for OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Help"]},c=void 0,a={id:"excel/help",title:"Help",description:"Help for OpenBB Add-in for Excel.",source:"@site/content/excel/help.md",sourceDirName:"excel",slug:"/excel/help",permalink:"/excel/help",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/help.md",tags:[],version:"current",lastUpdatedBy:"Henrique Joaquim",lastUpdatedAt:1728178878e3,sidebarPosition:5,frontMatter:{title:"Help",sidebar_position:5,description:"Help for OpenBB Add-in for Excel.",keywords:["Microsoft Excel","Add-in","Help"]},sidebar:"tutorialSidebar",previous:{title:"Templates",permalink:"/excel/templates"},next:{title:"Reference",permalink:"/excel/reference/"}},l={},d=[];function u(e){const n={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"Help | Get help"}),"\n",(0,r.jsxs)(n.p,{children:["If you face specific issues while using the add-in and the solutions provided here don't resolve them, don't hesitate to reach out to us for further assistance. You can contact us through ",(0,r.jsx)(n.a,{href:"mailto:support@openbb.finance",children:"support@openbb.finance"}),"."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Running an OBB. function returns '#VALUE!'"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Make sure you are using the correct syntax for the function. You can find the correct syntax for each function ",(0,r.jsx)(n.a,{href:"https://docs.openbb.co/excel/reference",children:"here"})]}),"\n",(0,r.jsx)(n.li,{children:"If you have just opened your workbook and the OBB. function returns '#VALUE!', try recalculating the cell again - this is an ongoing issue with Excel add-ins"}),"\n"]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"OBB. functions are not available after installing the add-in"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure OpenBB Add-in for Excel shows in the ribbon"}),"\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.strong,{children:"Insert"})," > ",(0,r.jsx)(n.strong,{children:"Get Add-ins"})," > ",(0,r.jsx)(n.strong,{children:"My Add-ins"})," > Click '...' when hovering OpenBB add-in > remove the add-in and install it again"]}),"\n",(0,r.jsxs)(n.li,{children:["Restart your computer or manually ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/office/dev/add-ins/testing/clear-cache",children:"clear the Office cache"})]}),"\n"]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:'Task pane displays "You don\u2019t have permission to use this add-in. Contact your system administrator to request access."'}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure your account has the necessary permissions to use add-in"}),"\n",(0,r.jsxs)(n.li,{children:["Restart your computer or manually ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/office/dev/add-ins/testing/clear-cache",children:"clear the Office cache"})]}),"\n"]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Editing a workbook in the browser and then on desktop app duplicates the 'OpenBB' tab in the ribbon"}),(0,r.jsx)(n.p,{children:"This is a known Excel issue. Currently, there is no definitive fix for the problem, but there are workarounds you can apply to fix the file depending on your operating system:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows"}),": File > Info > Inspect Workbook > Check \u2018Task Pane Add-ins\u2019 > Click \u2018OK\u2019. This will scan your workbook and remove the stale add-in reference created by Excel in the browser"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Mac"}),": rename your file from .xlsx to .zip > unzip it using WinZip for Mac (don\u2019t use the default unzip tool, otherwise it won\u2019t work) > look for webextensions folder and delete webextension1.xml > rename the file back to .xlsx"]}),"\n"]})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{mdxType:"summary",children:"Cannot retrieve the data added to Terminal Pro through custom backend using OBB.BYOD"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make sure your backend is running and accessible"}),"\n",(0,r.jsx)(n.li,{children:"If you are using Mac or Safari make sure your backend is using HTTPS and has a valid SSL certificate"}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);