"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31097],{96300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(74848),i=n(28453),s=n(94331);const r={title:"Build New OBBject Extension",sidebar_position:9,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform","extensions","obbject extension","accessor","decorator","how-to","contributing"]},a=void 0,l={id:"platform/user_guides/add_obbject_extension",title:"Build New OBBject Extension",description:"This page provides information about how to write extensions for the OpenBB OBBject class.",source:"@site/content/platform/user_guides/add_obbject_extension.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/add_obbject_extension",permalink:"/platform/user_guides/add_obbject_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/add_obbject_extension.mdx",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1720548491e3,sidebarPosition:9,frontMatter:{title:"Build New OBBject Extension",sidebar_position:9,description:"This page provides information about how to write extensions for the OpenBB OBBject class.",keywords:["OBBject","Python","Development","OpenBB Platform","extensions","obbject extension","accessor","decorator","how-to","contributing"]},sidebar:"tutorialSidebar",previous:{title:"Build New Toolkit Extension",permalink:"/platform/user_guides/add_toolkit_extension"},next:{title:"Add Provider To An Existing Command",permalink:"/platform/user_guides/add_data_to_existing_endpoint"}},c={},d=[{value:"Folder structure",id:"folder-structure",level:3},{value:"Writing the extension",id:"writing-the-extension",level:3},{value:"Entry Point",id:"entry-point",level:3},{value:"Using the extension",id:"using-the-extension",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{title:"Build New OBBject Extension - How-To | OpenBB Platform Docs"}),"\n",(0,o.jsxs)(t.p,{children:["OpenBB provides some basic methods for interacting with common data structures that will be seen in the results attribute of the ",(0,o.jsx)(t.a,{href:"platform/developer_guide/obbject",children:(0,o.jsx)(t.code,{children:"OBBject"})}),".\nIf you are working with custom data, or adding new endpoints, it is possible that you will want to have your own methods for interacting with the data, and the OpenBB Platform provides a way to extend the OBBject class."]}),"\n",(0,o.jsx)(t.p,{children:"The architecture for extensions was designed to be similar to extensions and accessors for Pandas, and relies on plugins through the Poetry dependency management package."}),"\n",(0,o.jsx)(t.p,{children:"This page will go through the steps for developing a simple extension for the OBBject class."}),"\n",(0,o.jsx)(t.h3,{id:"folder-structure",children:"Folder structure"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:"example\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 openbb_example\n\u2502   \u2514\u2500\u2500 __init__.py\n\u251c\u2500\u2500 poetry.lock\n\u2514\u2500\u2500 pyproject.toml\n"})}),"\n",(0,o.jsx)(t.h3,{id:"writing-the-extension",children:"Writing the extension"}),"\n",(0,o.jsxs)(t.p,{children:["In this example the extension code all lives inside ",(0,o.jsx)(t.code,{children:"__init__.py"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["First we create an ",(0,o.jsx)(t.code,{children:"Extension"})," class instance to tell ",(0,o.jsx)(t.code,{children:"openbb-core"})," our extension name and any required credentials to be available at ",(0,o.jsx)(t.code,{children:"obb.user.credentials"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Credentials are required only if authorization is required for data or services used by this extension.\nIt could also be the connection to a database, or any other information that needs to be passed to the extension."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'from openbb_core.app.model.extension import Extension\n\next = Extension(name="example", credentials=["some_api_key"])\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Then we define the extension's functionality. The decorator, ",(0,o.jsx)(t.code,{children:"@ext.obbject_accessor"}),", registers an accessor in each ",(0,o.jsx)(t.code,{children:"OBBject"})," that is returned when a command is executed. This accessor is just a namespace that will contain the methods defined in the decorated class."]}),"\n",(0,o.jsx)(t.p,{children:"For this example, we just add a method to say hi:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'@ext.obbject_accessor\nclass Example:\n    def __init__(self, obbject):\n        self._obbject = obbject\n\n    def hello(self):\n        api_key = self._obbject._user_settings.credentials.some_api_key.get_secret_value()\n        print(f"Hello, this is my credential: {api_key}!")\n'})}),"\n",(0,o.jsx)(t.h3,{id:"entry-point",children:"Entry Point"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"pyproject.toml"})," file will specify the usual setup and dependency information. Additionally, we need to include the following block:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-toml",children:'[tool.poetry.plugins."openbb_obbject_extension"]\nexample = "openbb_example:ext"\n'})}),"\n",(0,o.jsxs)(t.p,{children:["With this in the file, we can install the extension by running ",(0,o.jsx)(t.code,{children:"poetry install"})," from the extension folder."]}),"\n",(0,o.jsx)(t.h3,{id:"using-the-extension",children:"Using the extension"}),"\n",(0,o.jsxs)(t.p,{children:["Now that the extension is installed and built, we can use it! Because we are extending the ",(0,o.jsx)(t.code,{children:"OBBject"}),", this will be available on any function:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-shell",children:'>>> from openbb import obb\n>>> obb.user.credentials.some_api_key = "test"\n>>> obbject = obb.equity.price.historical("AAPL")\n>>> obbject.example.hello()\nHello, this is my credential: test!\n'})}),"\n",(0,o.jsx)(t.p,{children:"In this example, we have added obbject.example as the extension and can use the .hello() functionality right from our OBBject."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var o=n(5260),i=n(74848);function s(e){let{title:t}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);