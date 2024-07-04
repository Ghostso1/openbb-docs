"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12284],{34836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var o=n(74848),r=n(28453),a=n(94331),s=n(69396);const i={title:"Folders",sidebar_position:4,description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",keywords:["Folder creation","Dashboard creation","Investment research","Dashboard organization","Dashboard settings","Move dashboard to folder"]},d=void 0,l={id:"pro/dashboards/folders",title:"Folders",description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",source:"@site/content/pro/dashboards/folders.md",sourceDirName:"pro/dashboards",slug:"/pro/dashboards/folders",permalink:"/pro/dashboards/folders",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/dashboards/folders.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,sidebarPosition:4,frontMatter:{title:"Folders",sidebar_position:4,description:"This documentation page explains how to create and organize dashboards and folders in OpenBB Terminal Pro. This is an essential step to arrange investment research and manage the workspace efficiently.",keywords:["Folder creation","Dashboard creation","Investment research","Dashboard organization","Dashboard settings","Move dashboard to folder"]},sidebar:"tutorialSidebar",previous:{title:"Report",permalink:"/pro/dashboards/report"},next:{title:"Advanced Search",permalink:"/pro/advanced-search"}},c={},h=[];function p(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{title:"Folders | OpenBB Terminal Pro Docs"}),"\n","\n",(0,o.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/sFvzgQULDos?si=fS1wm6YEQAb07vwe",videoLegend:"Short introduction to folders"}),"\n",(0,o.jsx)(t.p,{children:"On the sidebar, users have a plus icon where they are able to create a new dashboard or folder."}),"\n",(0,o.jsx)("img",{className:"pro-border-gradient",width:"2181",alt:"add dash",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c8a88574-7ec4-4abd-8662-9e1f6cf376bc"}),"\n",(0,o.jsx)(t.p,{children:"This allows the creation of a new dashboard to perform investment research, or creating a folder to organize multiple dashboards."}),"\n",(0,o.jsx)(t.p,{children:"Below is an example of a folder that contains multiple dashboards."}),"\n",(0,o.jsx)("img",{className:"pro-border-gradient",width:"247",alt:"folder",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/0c928803-7ef3-4b63-8313-5f5fec767197"}),"\n",(0,o.jsx)(t.p,{children:'A dashboard can be moved into a folder through the dashboard settings with the "Move to", or by dragging the dashboard into the folder.'})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(5260),r=n(74848);function a(e){let{title:t}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:t})})}},69396:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(96540),r=n(23174),a=n(74848);function s(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[s,i]=(0,o.useState)(!0);return(0,a.jsxs)("div",{style:{textAlign:"center"},children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,a.jsx)("p",{children:n}),(0,a.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,a.jsx)(r.Toggle,{isOn:s,handleChange:()=>i(!s)})})]}),s&&(0,a.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,a.jsx)("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,t,n)=>{e.exports=n(49793)},49793:(e,t,n)=>{var o,r=(o=n(96540))&&"object"==typeof o&&"default"in o?o.default:o;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);