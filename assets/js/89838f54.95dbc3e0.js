"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71952],{63876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var a=t(74848),s=t(28453),o=t(94331);const r={title:"Commands And Arguments",sidebar_position:4,description:"This page explains how to enter commands and arguments into the OpenBB Platform CLI.",keywords:["help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata","cli","parameters","functions","commands","options"]},i=void 0,d={id:"cli/commands-and-arguments",title:"Commands And Arguments",description:"This page explains how to enter commands and arguments into the OpenBB Platform CLI.",source:"@site/content/cli/commands-and-arguments.md",sourceDirName:"cli",slug:"/cli/commands-and-arguments",permalink:"/cli/commands-and-arguments",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/commands-and-arguments.md",tags:[],version:"current",lastUpdatedBy:"\u7f51\u7edc\u7537\u5b69",lastUpdatedAt:1727901322e3,sidebarPosition:4,frontMatter:{title:"Commands And Arguments",sidebar_position:4,description:"This page explains how to enter commands and arguments into the OpenBB Platform CLI.",keywords:["help arguments","auto-complete","global commands","support command","reset command","command line interface","metadata","cli","parameters","functions","commands","options"]},sidebar:"tutorialSidebar",previous:{title:"Structure and Navigation",permalink:"/cli/structure-and-navigation"},next:{title:"Configuration & Settings",permalink:"/cli/configuration"}},l={},c=[{value:"Help arguments",id:"help-arguments",level:2},{value:"Entering Parameters",id:"entering-parameters",level:2},{value:"Auto-complete",id:"auto-complete",level:2},{value:"Global commands",id:"global-commands",level:2},{value:"Help",id:"help",level:3},{value:"CLS",id:"cls",level:3},{value:"Quit",id:"quit",level:3},{value:"Exit",id:"exit",level:3},{value:"Reset",id:"reset",level:3},{value:"Results",id:"results",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"Commands And Arguments | OpenBB Platform CLI Docs"}),"\n",(0,a.jsxs)(n.p,{children:["Commands are displayed on-screen in a lighter colour, compared with menu items, and they will not be prefaced with, ",(0,a.jsx)(n.code,{children:">"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Functions have a variety of parameters that differ by endpoint and provider. The --help dialogue will provide guidance on nuances of any particular command."}),"\n",(0,a.jsxs)(n.p,{children:["The available data sources for each command are displayed on the right side of the screen, and are selected with the ",(0,a.jsx)(n.code,{children:"--provider"})," argument."]}),"\n",(0,a.jsx)(n.h2,{id:"help-arguments",children:"Help arguments"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"help"})," command shows the current menu. The screen will display all the commands and menus that exist, including a short description for each of these."]}),"\n",(0,a.jsxs)(n.p,{children:["Adding ",(0,a.jsx)(n.code,{children:"--help"}),", or ",(0,a.jsx)(n.code,{children:"-h"}),", to any command will display the description and parameters for that particular function."]}),"\n",(0,a.jsx)(n.h2,{id:"entering-parameters",children:"Entering Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Parameters are all defined through the same pattern, --argument, followed by a space, and then the value."}),"\n",(0,a.jsx)(n.p,{children:"If the parameter is a boolean (true/false), there is no value to enter. Adding the --argument flags the parameter to be the opposite of its default state."}),"\n",(0,a.jsx)(n.p,{children:"Use the auto-complete to prompt choices and reduce the amount of keystrokes required to run a complex function."}),"\n",(0,a.jsx)(n.h2,{id:"auto-complete",children:"Auto-complete"}),"\n",(0,a.jsxs)(n.p,{children:["The OpenBB Platform CLI is equipped with an auto completion engine that presents choices based on the current menu and command. Whenever you start typing, suggestion prompts will appear for existing commands and menus. When the command contains arguments, pressing the ",(0,a.jsx)(n.code,{children:"space bar"})," after typing the command will present the list of available arguments."]}),"\n",(0,a.jsx)(n.p,{children:"This functionality dramatically reduces the number of key strokes required to perform tasks and, in many cases, eliminates the need to consult the help dialogue for reminders. Choices - where they are bound by a defined list - are scrollable with the up and down arrow keys."}),"\n",(0,a.jsx)(n.h2,{id:"global-commands",children:"Global commands"}),"\n",(0,a.jsx)(n.p,{children:"These are commands that can be used throughout the CLI and will work regardless of the menu where they belong."}),"\n",(0,a.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--help"}),", or ",(0,a.jsx)(n.code,{children:"-h"})," can be attached to any command, as described above."]}),"\n",(0,a.jsx)(n.h3,{id:"cls",children:"CLS"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"cls"})," command clears the entire CLI screen."]}),"\n",(0,a.jsx)(n.h3,{id:"quit",children:"Quit"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"quit"})," command (can also use ",(0,a.jsx)(n.code,{children:"q"})," or ",(0,a.jsx)(n.code,{children:".."}),") allows to leave the current menu to go one menu above. If the user is on the root, that will mean leaving the CLI."]}),"\n",(0,a.jsx)(n.h3,{id:"exit",children:"Exit"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"exit"})," command allows the user to exit the CLI."]}),"\n",(0,a.jsx)(n.h3,{id:"reset",children:"Reset"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"reset"})," command will reset the CLI to its default state. This is specially useful for development so you can refresh the CLI without having to close and open it again."]}),"\n",(0,a.jsx)(n.h3,{id:"results",children:"Results"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"results"})," command will display the stack of ",(0,a.jsx)(n.code,{children:"OBBjects"})," that have been generated during the session, which can be later injected on the data processing commands."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(5260),s=t(74848);function o(e){let{title:n}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(96540);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);