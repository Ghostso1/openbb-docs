"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63494],{37877:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(74848),o=t(28453),r=t(94331);const s={title:"Build New Provider Extension",sidebar_position:7,description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},a=void 0,d={id:"platform/user_guides/add_data_provider_extension",title:"Build New Provider Extension",description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",source:"@site/content/platform/user_guides/add_data_provider_extension.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/add_data_provider_extension",permalink:"/platform/user_guides/add_data_provider_extension",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/add_data_provider_extension.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:172011826e4,sidebarPosition:7,frontMatter:{title:"Build New Provider Extension",sidebar_position:7,description:"This guide outlines the process for adding a new data provider extension to the OpenBB Platform.",keywords:["OpenBB Platform","Open source","Python interface","REST API","contribution","contributing","documentation","code","provider","data","endpoint","existing","OpenBB extensions","OpenBB provider","standard model","provider model","how to","new","template"]},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/platform/user_guides/rest_api"},next:{title:"Build New Toolkit Extension",permalink:"/platform/user_guides/add_toolkit_extension"}},l={},c=[{value:"Template For Getting Started",id:"template-for-getting-started",level:2},{value:"Cookiecutter",id:"cookiecutter",level:3},{value:"Dependencies",id:"dependencies",level:2},{value:"Authorization Credentials",id:"authorization-credentials",level:2},{value:"Filtering Out Secrets From Unit Tests",id:"filtering-out-secrets-from-unit-tests",level:2},{value:"Rebuild the Python Interface and Static Assets",id:"rebuild-the-python-interface-and-static-assets",level:2},{value:"Get Building",id:"get-building",level:2},{value:"Publish Extension To PyPI",id:"publish-extension-to-pypi",level:2},{value:"Setup",id:"setup",level:3},{value:"Release",id:"release",level:3},{value:"Publish",id:"publish",level:3}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"Build New Provider Extension - How-To | OpenBB Platform Docs"}),"\n",(0,i.jsx)(n.p,{children:"This page will walk through adding a new data provider extension to the OpenBB Platform.\nBy the end, you will have an extension that is ready to be published, or submitted as a pull request."}),"\n",(0,i.jsx)(n.h2,{id:"template-for-getting-started",children:"Template For Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["If you've already been through some of the other data provider tasks - ",(0,i.jsx)(n.a,{href:"add_data_to_existing_endpoint",children:"How To Add Data To An Existing Endpoint"})," & ",(0,i.jsx)(n.a,{href:"add_endpoint_to_existing_provider",children:"How To Add A New Data Endpoint With An Existing Provider"})," - these steps will simply tag on to the beginning. Instead of editing the ",(0,i.jsx)(n.code,{children:"__init__.py"})," file, we will create it."]}),"\n",(0,i.jsxs)(n.p,{children:["An easy way to get started is to copy and paste something existing. In the OpenBB GitHub repository, provider extensions are located ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/develop/openbb_platform/providers",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For convenience's sake, download this template ",(0,i.jsx)(n.a,{href:"ttps://github.com/OpenBB-finance/OpenBBTerminal/files/14519701/provider_extension_template.zip",children:"zip file"}),". It contains the basic folder structure and everything required to get started creating new data models."]}),"\n",(0,i.jsx)(n.p,{children:"For demonstration purposes, we'll assume this is from the perspective of somebody who will open a pull request and contribute the code to the OpenBB repository. The process, however, also applies to publishing directly via PyPI. Anyone can make an OpenBB extension."}),"\n",(0,i.jsx)(n.p,{children:"The structure of the folder will look something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:"template/\n\u251c\u2500\u2500 openbb_template/\n\u2502 \u251c\u2500\u2500 models/\n\u2502 \u2502 \u251c\u2500\u2500 **init**.py\n\u2502 \u2502 \u2514\u2500\u2500 some_model.py\n\u2502 \u251c\u2500\u2500 utils/\n\u2502 \u2502 \u251c\u2500\u2500 **init**.py\n\u2502 \u2502 \u2514\u2500\u2500 helpers.py\n\u2502 \u251c\u2500\u2500 tests/\n\u2502 \u2502 \u251c\u2500\u2500 record/\n\u2502 \u2502 \u251c\u2500\u2500 **init**.py\n\u2502 \u2502 \u2514\u2500\u2500 test_template_fetchers.py\n\u2502 \u251c\u2500\u2500 **init**.py\n\u251c\u2500\u2500 **init**.py\n\u251c\u2500\u2500 pyproject.toml\n\u2514\u2500\u2500 README.md\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"__init__.py"})," file where models are mapped to the router is under, ",(0,i.jsx)(n.code,{children:"/openbb_template"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"To get started:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Unpack the downloaded ",(0,i.jsx)(n.a,{href:"ttps://github.com/OpenBB-finance/OpenBBTerminal/files/14519701/provider_extension_template.zip",children:"zip"})," file."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If working with a cloned GitHub repo, the folder is:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"~/OpenBBTerminal/openbb_platform/providers\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'Rename everything, "template", to suit. File names, models, import statements, docstrings.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add any provider-specific package requirements in the ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Update the Provider information in the ",(0,i.jsx)(n.code,{children:"__init__.py"})," file."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If credentials are required, add a line to the Provider class initialization."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'credentials=["api_key", "account_type"], # account_type is either "sandbox" or "live"\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'From a terminal command line, navigate into the folder where the extension is, then install the empty blank package in "editable" mode.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"poetry lock\npip install -e .\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Start creating data models using the steps outlined ",(0,i.jsx)(n.a,{href:"add_data_to_existing_endpoint",children:"here"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cookiecutter",children:"Cookiecutter"}),"\n",(0,i.jsxs)(n.p,{children:["In order to speed up the process of building an extension, we have created a ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/openbb-cookiecutter",children:(0,i.jsx)(n.strong,{children:"Cookiecutter"})})," template."]}),"\n",(0,i.jsxs)(n.p,{children:["It serves as a jumpstart for your extension development, and can be used instead of the template ZIP referenced earlier. Instructions are located on the ",(0,i.jsx)(n.a,{href:"https://github.com/OpenBB-finance/openbb-cookiecutter",children:"GitHub page"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The cookiecutter tool will get you most of the way there, but it still requires some tweaks to the file names and initializations."})}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," file defines the package itself."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Before adding any dependency, ensure it aligns with the Platform's existing dependencies."}),"\n",(0,i.jsx)(n.li,{children:"If possible, use loose versioning."}),"\n"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[tool.poetry]\nname = "openbb-template"\nversion = "1.0.0"\ndescription = "Template Provider Extension for the OpenBB Platform"\nauthors = ["Name <my@emailaddress.com>"]\nreadme = "README.md"\npackages = [{ include = "openbb_template" }]\n\n[tool.poetry.dependencies]\npython = ">=3.8,<3.12"\nopenbb = "^4.1.7"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_provider_extension"]\ntemplate = "openbb_template:template_provider"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The last line (poetry.plugins) maps to the provider defined in the ",(0,i.jsx)(n.code,{children:"__init__.py"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, for local extensions, you can add this line in the ",(0,i.jsx)(n.code,{children:"LOCAL_DEPS"})," variable in the ",(0,i.jsx)(n.code,{children:"dev_install.py"})," file, located in ",(0,i.jsx)(n.code,{children:"~/OpenBBTerminal/openbb_platform/"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'# If this is a community dependency, add this under "Community dependencies",\n# with additional argument optional = true\nopenbb-extension = { path = "<relative-path-to-the-extension>", develop = true }\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Now you can use the ",(0,i.jsx)(n.code,{children:"python dev_install.py [-e]"})," command to install the local extension."]}),"\n",(0,i.jsx)(n.h2,{id:"authorization-credentials",children:"Authorization Credentials"}),"\n",(0,i.jsx)(n.p,{children:"Access to most data sources is authorized with an API key, issued by the source. Sometimes there are multiple authorization fields, and other times there may be a need to change the base URL depending on the type of account."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"If no authorization is required, leave out the 'credentials' parameter."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Below is the contents from the template's ",(0,i.jsx)(n.code,{children:"__init__.py"})," file, modified to create a provider extension for ",(0,i.jsx)(n.a,{href:"https://documentation.tradier.com/brokerage-api/overview/endpoints",children:"Tradier"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'"""Tradier Provider Module."""\n\nfrom openbb_core.provider.abstract.provider import Provider\nfrom openbb_tradier.models.options_chains import TradierOptionsChainsFetcher\n\ntradier_provider = Provider(\n    name="tradier",\n    website="https://tradier.com",\n    description= "Tradier provides a full range of services in a scalable, secure,"\n        + " and easy-to-use REST-based API for businesses and individual developers."\n        + " Fast, secure, simple. Start in minutes."\n        + " Get access to trading, account management, and market-data for"\n        + " Tradier Brokerage accounts through our APIs.",\n    credentials=["api_key", "account_type"], # account_type is either "sandbox" or "live"\n    fetcher_dict={\n        "OptionsChains": TradierOptionsChainsFetcher,\n    },\n)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"filtering-out-secrets-from-unit-tests",children:"Filtering Out Secrets From Unit Tests"}),"\n",(0,i.jsx)(n.p,{children:"The template extension has a starting point for building unit tests, but filters might need to be updated for the specific provider."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'@pytest.fixture(scope="module")\ndef vcr_config():\n    return {\n        "filter_headers": [\n            ("User-Agent", None),\n            ("api_key", "MOCK_API_KEY"),\n            ("x-api-token", "MOCK_API_KEY"),\n        ],\n        "filter_query_parameters": [\n            ("api_key", "MOCK_API_KEY"),\n            ("x-api-token", "MOCK_API_KEY"),\n        ],\n    }\n'})}),"\n",(0,i.jsxs)(n.p,{children:['For Tradier, authorization is sent in the request headers as "Authorization". We will need to replace ',(0,i.jsx)(n.code,{children:"api_key"})," header filters with ",(0,i.jsx)(n.code,{children:"Authorization"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsx)(n.p,{children:"Inspect captured test cassettes to verify that no secrets are recorded."})}),"\n",(0,i.jsx)(n.h2,{id:"rebuild-the-python-interface-and-static-assets",children:"Rebuild the Python Interface and Static Assets"}),"\n",(0,i.jsxs)(n.p,{children:["The application will need to rebuild the static files in order to recognize any changes to the ",(0,i.jsx)(n.code,{children:"fetcher_dict"})," in the ",(0,i.jsx)(n.code,{children:"__init__.py"})," file.\nThis is also required to reflect any changes to parameters, docstrings and function signatures."]}),"\n",(0,i.jsx)(n.p,{children:"Open a terminal, start a new Python session, then enter:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import openbb\n\nopenbb.build()\n\nexit()\n"})}),"\n",(0,i.jsx)(n.p,{children:"The updated endpoint's function signature will now display the additional provider."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"Signature:\nobb.derivatives.options.chains(\n    symbol: typing.Annotated[str, OpenBBField(description='Symbol to get data for.')],\n    provider: Optional[Literal['cboe', 'intrinio', 'tmx', 'tradier']] = None,\n    **kwargs,\n) -> openbb_core.app.model.obbject.OBBject\n"})}),"\n",(0,i.jsx)(n.h2,{id:"get-building",children:"Get Building"}),"\n",(0,i.jsxs)(n.p,{children:["Following either path, ",(0,i.jsx)(n.a,{href:"add_data_to_existing_endpoint",children:"How To Add Data To An Existing Endpoint"})," & ",(0,i.jsx)(n.a,{href:"add_endpoint_to_existing_provider",children:"How To Add A New Data Endpoint With An Existing Provider"}),", will take this from an empty provider extension to a finished product."]}),"\n",(0,i.jsx)(n.p,{children:"The new extension can be self-published on PyPI and hosted in an independent GitHub repo. You will then be able to maintain the code, and the release schedule."}),"\n",(0,i.jsxs)(n.p,{children:["If not contributing directly to the OpenBB GitHub, we still want to know about your creation. Share it with us on social media, and add ",(0,i.jsx)(n.code,{children:"openbb"})," as a topic tag in your GitHub repo."]}),"\n",(0,i.jsx)(n.h2,{id:"publish-extension-to-pypi",children:"Publish Extension To PyPI"}),"\n",(0,i.jsx)(n.p,{children:"To publish your extension to PyPI, you'll need to have a PyPI account and a PyPI API token."}),"\n",(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(n.p,{children:["Create an account and get an API token from ",(0,i.jsx)(n.a,{href:"https://pypi.org/manage/account/token/",children:"https://pypi.org/manage/account/token/"})]}),"\n",(0,i.jsx)(n.p,{children:"Store the token with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"poetry config pypi-token.pypi pypi-YYYYYYYY\n"})}),"\n",(0,i.jsx)(n.h3,{id:"release",children:"Release"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cd"})," into the directory where your extension ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," lives and make sure that the ",(0,i.jsx)(n.code,{children:"pyproject.toml"})," specifies the version tag you want to release and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"poetry build\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create a ",(0,i.jsx)(n.code,{children:"/dist"})," folder in the directory, which will contain the ",(0,i.jsx)(n.code,{children:".whl"})," and ",(0,i.jsx)(n.code,{children:"tar.gz"})," files matching the version to release."]}),"\n",(0,i.jsx)(n.p,{children:"If you want to test your package locally you can do it with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install dist/openbb_[FILE_NAME].whl\n"})}),"\n",(0,i.jsx)(n.h3,{id:"publish",children:"Publish"}),"\n",(0,i.jsx)(n.p,{children:"To publish your package to PyPI run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"poetry publish\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, you can pip install your package from PyPI with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install openbb-some_ext\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(5260),o=t(74848);function r(e){let{title:n}=e;return(0,o.jsx)(i.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);