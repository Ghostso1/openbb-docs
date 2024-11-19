"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18892],{76707:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var t=i(74848),l=i(28453),s=i(94331);const o={title:"Installation",sidebar_position:2,description:"This page provides installation instructions for the OpenBB Platform CLI.",keywords:["OpenBB Platform","Python","CLI","installation","pip","pypi"]},a=void 0,r={id:"cli/installation",title:"Installation",description:"This page provides installation instructions for the OpenBB Platform CLI.",source:"@site/content/cli/installation.md",sourceDirName:"cli",slug:"/cli/installation",permalink:"/cli/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/installation.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:173197409e4,sidebarPosition:2,frontMatter:{title:"Installation",sidebar_position:2,description:"This page provides installation instructions for the OpenBB Platform CLI.",keywords:["OpenBB Platform","Python","CLI","installation","pip","pypi"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cli/"},next:{title:"Quick Start",permalink:"/cli/quickstart"}},d={},c=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Windows",id:"windows",level:3},{value:"Linux Requirements",id:"linux-requirements",level:3},{value:"Rust",id:"rust",level:4},{value:"Webkit",id:"webkit",level:4},{value:"PyPI",id:"pypi",level:2},{value:"Source",id:"source",level:2},{value:"Installing New Modules",id:"installing-new-modules",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"Installation | OpenBB Platform CLI Docs"}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-Requisites"}),"\n",(0,t.jsxs)(n.p,{children:["The OpenBB Platform CLI is a wrapper around the ",(0,t.jsx)(n.a,{href:"/platform",children:"Platform"}),", and should be installed along side an existing OpenBB installation."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A Python virtual environment with a version between 3.9 and 3.11, inclusive, is required."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/platform/installation",children:"OpenBB Platform install documentation"})," for instructions and more information."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If the OpenBB Platform is not already installed, the ",(0,t.jsx)(n.code,{children:"openbb-cli"})," package  will install all available components."]})}),"\n",(0,t.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,t.jsx)(n.p,{children:"The machine may need to have an installation of Visual C++ Build Tools available. Download the elements highlighted in the images below."}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{mdxType:"summary",children:'"Microsoft Visual C++ 14.0 or greater is required"'}),(0,t.jsxs)(n.p,{children:["Download and install ",(0,t.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"C++ Build Tools"}),", restart the machine, then continue."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"})})]}),"\n",(0,t.jsx)(n.h3,{id:"linux-requirements",children:"Linux Requirements"}),"\n",(0,t.jsx)(n.p,{children:"Linux users will need to take additional steps prior to installation."}),"\n",(0,t.jsx)(n.h4,{id:"rust",children:"Rust"}),"\n",(0,t.jsx)(n.p,{children:"Rust and Cargo must be installed, system-level, and in the PATH. Follow the instructions on-screen to install and add to PATH in the shell profile."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl --proto '=https' --tlsv1.3 https://sh.rustup.rs -sSf | sh\n"})}),"\n",(0,t.jsx)(n.h4,{id:"webkit",children:"Webkit"}),"\n",(0,t.jsx)(n.p,{children:"Next, install webkit."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Debian-based / Ubuntu / Mint: ",(0,t.jsx)(n.code,{children:"sudo apt install libwebkit2gtk-4.0-dev"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Arch Linux / Manjaro: ",(0,t.jsx)(n.code,{children:"sudo pacman -S webkit2gtk"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fedora: ",(0,t.jsx)(n.code,{children:"sudo dnf install gtk3-devel webkit2gtk3-devel"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pypi",children:"PyPI"}),"\n",(0,t.jsxs)(n.p,{children:["Within your existing OpenBB environment, install ",(0,t.jsx)(n.code,{children:"openbb-cli"})," with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"pip install openbb-cli\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The installation script adds ",(0,t.jsx)(n.code,{children:"openbb"})," to the PATH within your Python environment. The application can be launched from any path, as long as the environment is active."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"openbb\n\nWelcome to OpenBB Platform CLI v1.0.0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"source",children:"Source"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the instructions ",(0,t.jsx)(n.a,{href:"/platform/installation#source",children:"here"})," to clone the GitHub repo and install the OpenBB Platform from the source code."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, navigate into the folder: ",(0,t.jsx)(n.code,{children:"~/OpenBBTerminal/openbb_platform"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["The Python environment should have ",(0,t.jsx)(n.code,{children:"poetry"})," installed."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install poetry\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"Finally, enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"python dev_install.py -e --cli\n"})}),"\n",(0,t.jsx)(n.h2,{id:"installing-new-modules",children:"Installing New Modules"}),"\n",(0,t.jsx)(n.p,{children:"New extensions, or removals, are automatically added (removed) to the CLI on the next launch."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(5260),l=i(74848);function s(e){let{title:n}=e;return(0,l.jsx)(t.A,{children:(0,l.jsx)("title",{children:n})})}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);