"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74469],{48800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=t(74848),r=t(28453),i=t(94331);const l={title:"Create New Router Extension",sidebar_position:8,description:"This page will walk through creating a new OpenBB Router Extension from scratch. By the end, you will have the code structure for a new router path and an api endpoint.",keywords:["OpenBB Platform","Open source","community","code","router","openbb-core","data","extension","how-to","new","endpoint","template","quickstart"]},a=void 0,s={id:"platform/getting_started/create_new_router_extension",title:"Create New Router Extension",description:"This page will walk through creating a new OpenBB Router Extension from scratch. By the end, you will have the code structure for a new router path and an api endpoint.",source:"@site/content/platform/getting_started/create_new_router_extension.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/create_new_router_extension",permalink:"/platform/getting_started/create_new_router_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/getting_started/create_new_router_extension.mdx",tags:[],version:"current",lastUpdatedBy:"\u7f51\u7edc\u7537\u5b69",lastUpdatedAt:1727901322e3,sidebarPosition:8,frontMatter:{title:"Create New Router Extension",sidebar_position:8,description:"This page will walk through creating a new OpenBB Router Extension from scratch. By the end, you will have the code structure for a new router path and an api endpoint.",keywords:["OpenBB Platform","Open source","community","code","router","openbb-core","data","extension","how-to","new","endpoint","template","quickstart"]},sidebar:"tutorialSidebar",previous:{title:"REST API Requests",permalink:"/platform/getting_started/api_requests"},next:{title:"Create New Provider Extension",permalink:"/platform/getting_started/create_new_provider_extension"}},c={},d=[{value:"Preparation",id:"preparation",level:2},{value:"Create Project Folder",id:"create-project-folder",level:3},{value:"Create <code>pyproject.toml</code> File",id:"create-pyprojecttoml-file",level:3},{value:"Create <code>README.md</code> File",id:"create-readmemd-file",level:3},{value:"Create Sub-Folder For Code",id:"create-sub-folder-for-code",level:3},{value:"Create <code>__init__.py</code> File",id:"create-__init__py-file",level:3},{value:"Create Router File",id:"create-router-file",level:3},{value:"Build Lock File",id:"build-lock-file",level:2},{value:"Install Extension In Editable Mode",id:"install-extension-in-editable-mode",level:2},{value:"Build Static Assets",id:"build-static-assets",level:2},{value:"Smoke Test",id:"smoke-test",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"Quick Start - New Provider Extension - Getting Started - Development | OpenBB Platform Docs"}),"\n",(0,o.jsx)(n.p,{children:"This page will walk through creating a new OpenBB router extension from scratch. By the end, you will have the shell structure for adding commands to the OpenBB Platform's interfaces."}),"\n",(0,o.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,o.jsx)(n.h3,{id:"create-project-folder",children:"Create Project Folder"}),"\n",(0,o.jsxs)(n.p,{children:["Create a folder for the project. For this example, we will name the folder, ",(0,o.jsx)(n.code,{children:"empty_router"}),"."]}),"\n",(0,o.jsxs)(n.h3,{id:"create-pyprojecttoml-file",children:["Create ",(0,o.jsx)(n.code,{children:"pyproject.toml"})," File"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Open the folder and create a new file called, ",(0,o.jsx)(n.code,{children:"pyproject.toml"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[tool.poetry]\nname = "openbb-empty-router"\nversion = "0.0.1"\ndescription = "An empty OpenBB Router extension"\nauthors = ["OpenBB Team <hello@openbb.co>"]\nreadme = "README.md"\npackages = [{ include = "openbb_empty_router" }]\n\n[tool.poetry.dependencies]\npython = "^3.8,<3.12"\nopenbb = "^4.2.0"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_core_extension"]\nempty = "openbb_empty_router.empty_router:router"\n'})}),"\n",(0,o.jsxs)(n.h3,{id:"create-readmemd-file",children:["Create ",(0,o.jsx)(n.code,{children:"README.md"})," File"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the same location, create a new file called, ",(0,o.jsx)(n.code,{children:"README.md"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Open the file, then add a title and any other high-level information about the extension."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"# Empty OpenBB Router Extension\n\nAn example Router extension for the OpenBB Platform.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"create-sub-folder-for-code",children:"Create Sub-Folder For Code"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a sub-folder that begins with ",(0,o.jsx)(n.code,{children:"openbb"})," and is followed by the name of the project folder, ",(0,o.jsx)(n.code,{children:"openbb_empty_router"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"create-__init__py-file",children:["Create ",(0,o.jsx)(n.code,{children:"__init__.py"})," File"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the new sub-folder, create a new file called, ",(0,o.jsx)(n.code,{children:"__init__.py"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Add a docstring on the first line, followed by an empty line."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'"""Empty Router Module."""\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"create-router-file",children:"Create Router File"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In the same location as the file just saved, create a new file called, ",(0,o.jsx)(n.code,{children:"empty_router.py"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["This is the file mapped at the bottom of the ",(0,o.jsx)(n.code,{children:"pyproject.toml"})," file."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-toml",children:'[tool.poetry.plugins."openbb_core_extension"]\nempty = "openbb_empty_router.empty_router:router"\n'})})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Insert code for our command route."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'"""Empty Router"""\n\nfrom typing import Any, Dict, List, Literal, Optional\nfrom openbb_core.app.model.command_context import CommandContext\nfrom openbb_core.app.model.obbject import OBBject\nfrom openbb_core.app.provider_interface import (\n    ExtraParams,\n    ProviderChoices,\n    StandardParams,\n)\nfrom openbb_core.provider.abstract.data import Data\nfrom openbb_core.app.query import Query\nfrom openbb_core.app.router import Router\nfrom openbb_core.app.model.obbject import OBBject\n\nrouter = Router(prefix="", description="An Empty OpenBB Router Extension.")\n\n@router.command(methods=["GET"])\nasync def hello() -> OBBject[str]: # The output of every router command must be an instance of `OBBject`.\n    """OpenBB Hello World."""\n    return OBBject(results="Hello from the Empty Router extension!")\n\n# This is a clone of `obb.equity.price.historical`.\n# The model can be replaced with a a different model from the Provider Interface.\n@router.command(\n    model="EquityHistorical",\n)\nasync def empty_function(\n    cc: CommandContext,\n    provider_choices: ProviderChoices,\n    standard_params: StandardParams,\n    extra_params: ExtraParams,\n) -> OBBject[Data]:\n    """An empty function using the Provider Interface."""\n    return await OBBject.from_query(Query(**locals()))\n'})}),"\n",(0,o.jsx)(n.h2,{id:"build-lock-file",children:"Build Lock File"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Python environment should have ",(0,o.jsx)(n.code,{children:"toml"})," and ",(0,o.jsx)(n.code,{children:"poetry"})," installed as packages from PyPI."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"pip install toml poetry\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate into the main folder, and with the environment active, enter:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"poetry lock\n"})}),"\n",(0,o.jsx)(n.h2,{id:"install-extension-in-editable-mode",children:"Install Extension In Editable Mode"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"pip install -e .\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The installation can be verified, and it should display a path similar to the one below.\nEverything else is installed under the ",(0,o.jsx)(n.code,{children:"site-packages"})," of the environment."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"pip list | grep openbb\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"openbb                  4.1.7\nopenbb-benzinga         1.1.5\nopenbb-commodity        1.0.4\nopenbb-core             1.1.6\nopenbb-crypto           1.1.5\nopenbb-currency         1.1.5\nopenbb-derivatives      1.1.5\nopenbb-economy          1.1.5\nopenbb-empty-router     0.0.1        /Users/username/path_to_created_folder/empty_router\n...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"build-static-assets",children:"Build Static Assets"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:'python -c "import openbb; openbb.build()"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The installation can be verified by inspecting ",(0,o.jsx)(n.code,{children:"obb.reference"}),". Start a Python session and import the OpenBB Platform."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from openbb import obb\n\nobb.reference["info"]["extensions"]["openbb_core_extension"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The list should include the newly created and installed extension, ",(0,o.jsx)(n.code,{children:"empty@0.0.1"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"smoke-test",children:"Smoke Test"}),"\n",(0,o.jsx)(n.p,{children:"Run the added commands."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"obb.empty.hello()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-console",children:"OBBject\n\nid: 0663956f-a01d-751b-8000-b44c72e60664\nresults: Hello from the Empty Router extension!\nprovider: None\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {}, 'standard_params': {}, '...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"This process created, built, and installed a new OpenBB router extension from scratch."}),"\n",(0,o.jsx)(n.p,{children:"The next step is to map Provider Interface models, and/or create custom GET/POST request functions to import directly for use in the router."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(o.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>a});var o=t(96540);const r={},i=o.createContext(r);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);