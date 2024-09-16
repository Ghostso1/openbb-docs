"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33178],{83144:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(74848),a=o(28453);const r={title:"Command Coverage",sidebar_position:6,description:"This page details the instructions for determining the command coverage provided by the installed extensions.",keywords:["tutorial","standardized output","OBBject","provider","results","warnings","chart","extra","command coverage"]},d=void 0,i={id:"platform/developer_guide/command_coverage",title:"Command Coverage",description:"This page details the instructions for determining the command coverage provided by the installed extensions.",source:"@site/content/platform/developer_guide/command_coverage.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/command_coverage",permalink:"/platform/developer_guide/command_coverage",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/command_coverage.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1726511395e3,sidebarPosition:6,frontMatter:{title:"Command Coverage",sidebar_position:6,description:"This page details the instructions for determining the command coverage provided by the installed extensions.",keywords:["tutorial","standardized output","OBBject","provider","results","warnings","chart","extra","command coverage"]},sidebar:"tutorialSidebar",previous:{title:"Dependency Management",permalink:"/platform/developer_guide/dependency_management"},next:{title:"Contributing",permalink:"/platform/developer_guide/contributing"}},s={},c=[{value:"Commands and Provider Coverage",id:"commands-and-provider-coverage",level:2}];function m(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"commands-and-provider-coverage",children:"Commands and Provider Coverage"}),"\n",(0,t.jsxs)(n.p,{children:["The installed commands and data providers are found under, ",(0,t.jsx)(n.code,{children:"obb.coverage"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"obb.coverage\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/coverage\n\n    providers\n    commands\n    command_model\n    command_schemas\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"obb.coverage.providers"})," is a dictionary of the installed provider extensions, each with its own list of available commands."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"obb.coverage.commands"})," is a dictionary of commands, each with its own list of available providers for the data."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"obb.coverage.command_model"})," is a dictionary where the keys are the command paths and the values is a nested dictionary of QueryParams and Data models associated with that function."]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>d,x:()=>i});var t=o(96540);const a={},r=t.createContext(a);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);