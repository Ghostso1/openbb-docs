"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92903],{65271:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(74848),a=r(28453),o=r(94331);const s={title:"Fetch Data From a New Provider",sidebar_position:10,description:"This page demonstrates how to get started mapping Provider extension models to the Provider Interface and Router. By the end, you will have mapped a new Provider extension to World News standard model.",keywords:["OpenBB Platform","Open source","community","code","provider","openbb-provider","data","extension","how-to","new","template","quick start","quickstart","provider interface"]},d=void 0,i={id:"platform/getting_started/map_a_provider_to_a_route",title:"Fetch Data From a New Provider",description:"This page demonstrates how to get started mapping Provider extension models to the Provider Interface and Router. By the end, you will have mapped a new Provider extension to World News standard model.",source:"@site/content/platform/getting_started/map_a_provider_to_a_route.mdx",sourceDirName:"platform/getting_started",slug:"/platform/getting_started/map_a_provider_to_a_route",permalink:"/platform/getting_started/map_a_provider_to_a_route",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/getting_started/map_a_provider_to_a_route.mdx",tags:[],version:"current",lastUpdatedBy:"Andrew",lastUpdatedAt:1726511395e3,sidebarPosition:10,frontMatter:{title:"Fetch Data From a New Provider",sidebar_position:10,description:"This page demonstrates how to get started mapping Provider extension models to the Provider Interface and Router. By the end, you will have mapped a new Provider extension to World News standard model.",keywords:["OpenBB Platform","Open source","community","code","provider","openbb-provider","data","extension","how-to","new","template","quick start","quickstart","provider interface"]},sidebar:"tutorialSidebar",previous:{title:"Create New Provider Extension",permalink:"/platform/getting_started/create_new_provider_extension"},next:{title:"User Guides",permalink:"/platform/user_guides/"}},l={},c=[{value:"Start Mapping",id:"start-mapping",level:2},{value:"Create Model File",id:"create-model-file",level:3},{value:"Import Statements",id:"import-statements",level:3},{value:"Create a QueryParams Model",id:"create-a-queryparams-model",level:3},{value:"Create a Data Model",id:"create-a-data-model",level:3},{value:"Build Fetcher",id:"build-fetcher",level:3},{value:"2. Map Model To Provider Interface",id:"2-map-model-to-provider-interface",level:2},{value:"3. Rebuild Static Assets",id:"3-rebuild-static-assets",level:2},{value:"4. Smoke Test",id:"4-smoke-test",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"Quick Start - Fetch Data From a New Provider - How-To - Development | OpenBB Platform Docs"}),"\n",(0,n.jsx)(t.p,{children:"This page demonstrates how to get started mapping Provider extension models to the Provider Interface and Router."}),"\n",(0,n.jsxs)(t.p,{children:["It continues the example provided ",(0,n.jsx)(t.a,{href:"create_new_provider_extension",children:"here"}),". By the end, you will have mapped a new Provider extension to the World News standard model. This will connect it to the existing command and make it accessible through the ",(0,n.jsx)(t.code,{children:"provider"})," parameter."]}),"\n",(0,n.jsx)(t.p,{children:"All Provider models are made of three elements:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"QueryParams"}),"\n",(0,n.jsx)(t.li,{children:"Data"}),"\n",(0,n.jsx)(t.li,{children:"Fetcher"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"start-mapping",children:"Start Mapping"}),"\n",(0,n.jsx)(t.h3,{id:"create-model-file",children:"Create Model File"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.code,{children:"/models"})," folder of the extension - ",(0,n.jsx)(t.code,{children:"/Users/username/path_to_created_folder/empty_provider/openbb_empty_provider/models"}),' - create a new file called, "world_news.py".']}),"\n",(0,n.jsx)(t.li,{children:"Start the file with a docstring, then a new line."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'"""Empty World News Model."""\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"import-statements",children:"Import Statements"}),"\n",(0,n.jsx)(t.p,{children:"The import schema will follow a pattern similar to this, depending on the specific requirements of the function."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from typing import Any, Dict, List, Literal, Optional\n\nfrom openbb_core.provider.abstract.fetcher import Fetcher\nfrom openbb_core.provider.standard_models.world_news import WorldNewsQueryParams, WorldNewsData\n\nfrom pydantic import Field\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-queryparams-model",children:"Create a QueryParams Model"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a class that inherits from the standard model."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'class EmptyWorldNewsQueryParams(WorldNewsQueryParams):\n    """Empty World News Query Params."""\n\n    some_param: Optional[str] = Field(\n        default=None,\n        description="Some Empty Parameter.",\n    )\n'})}),"\n",(0,n.jsx)(t.p,{children:"Field and model validators are added here, if required."}),"\n",(0,n.jsx)(t.h3,{id:"create-a-data-model",children:"Create a Data Model"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a class that inherits from the standard model."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'class EmptyWorldNewsData(WorldNewsData):\n    """Empty World News Data"""\n\n    some_param: Optional[str] = Field(\n        default=None,\n        description="Some Empty Data Field."\n    )\n'})}),"\n",(0,n.jsx)(t.p,{children:"Field and model validators are added here, if required."}),"\n",(0,n.jsx)(t.h3,{id:"build-fetcher",children:"Build Fetcher"}),"\n",(0,n.jsx)(t.p,{children:"The Fetcher consists of three stages:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Transform Query"}),"\n",(0,n.jsx)(t.li,{children:"Extract Data"}),"\n",(0,n.jsx)(t.li,{children:"Transform Data"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each stage is a static method within the Fetcher class that inherits the QueryParams and Data models."}),"\n",(0,n.jsx)(t.p,{children:"The structure of the methods within should always be the same, and input/output types should match throughout."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'class EmptyWorldNewsFetcher(\n    Fetcher[\n        EmptyWorldNewsQueryParams,\n        List[EmptyWorldNewsData],\n    ]\n):\n    """Empty World News Fetcher."""\n\n    @staticmethod\n    def transform_query(params: Dict[str, Any]) -> EmptyWorldNewsQueryParams:\n        """Transform query params."""\n        new_params = params\n        if params.get("some_param"):\n            new_params["some_param"] = "do_something"\n        return EmptyWorldNewsQueryParams(**new_params)\n\n    @staticmethod\n    async def aextract_data( # The function does not have to be asynchronous. If not, remove the leading \'a\', \'extract_data\'.\n        query: EmptyWorldNewsQueryParams,\n        credentials: Optional[Dict[str, str]],\n        **kwargs: Any,\n    ) -> List[Dict]:\n        """Extract data. Put HTTP Requests here. This should return the closest form of raw data possible."""\n        results = {\n            "date": datetime.now().date(),\n            "title": "Hello from the Empty Provider extension!",\n            "some_param": query.some_param,\n        }\n        return [results]\n\n    @staticmethod\n    def transform_data(\n        query: EmptyWorldNewsQueryParams,\n        data: List[Dict],\n        **kwargs: Any,\n    ) -> List[EmptyWorldNewsData]:\n        """Transform data. Put parsing logic here, if required. This should return validated data models."""\n        return [EmptyWorldNewsData.model_validate(d) for d in data]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"2-map-model-to-provider-interface",children:"2. Map Model To Provider Interface"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["In the ",(0,n.jsx)(t.code,{children:"__init__.py"})," where the Provider class was defined, import the Fetcher from the model file and map it to the router."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'# /Users/username/path_to_created_folder/empty_provider/openbb_empty_provider/__init__.py\n"""Empty Provider Module."""\n\nfrom openbb_empty_provider.models.world_news import EmptyWorldNewsFetcher\nfrom openbb_core.provider.abstract.provider import Provider\n\nempty_provider = Provider(\n    name="empty",\n    website="http://empty.io",\n    description="""The empty provider is a supplier of promises.""",\n    # credentials=["api_key"],\n    fetcher_dict={\n        "WorldNews": EmptyWorldNewsFetcher\n    },\n)\n'})}),"\n",(0,n.jsx)(t.h2,{id:"3-rebuild-static-assets",children:"3. Rebuild Static Assets"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The Python Interface and static assets need to be rebuilt after these changes."}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'python -c "import openbb; openbb.build()"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"4-smoke-test",children:"4. Smoke Test"}),"\n",(0,n.jsxs)(t.p,{children:["The function's docstring should list the new provider, and the command should return an ",(0,n.jsx)(t.code,{children:"OBBject"})," instance."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"    Parameters\n    ----------\n    limit : int\n        The number of data entries to return. The number of articles to return.\n    start_date : Union[datetime.date, None, str]\n        Start date of the data, in YYYY-MM-DD format.\n    end_date : Union[datetime.date, None, str]\n        End date of the data, in YYYY-MM-DD format.\n    provider : Optional[Literal['benzinga', 'empty', 'fmp', 'intrinio', 'tiingo'...\n        The provider to use for the query, by default None.\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb import obb\nobb.news.world(provider="empty")\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"OBBject\n\nid: 066356fc-9661-7448-8000-5885e5120efb\nresults: [{'date': datetime.datetime(2024, 5, 3, 0, 0), 'title': 'Hello from the Em...\nprovider: empty\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'empty'}, 'stan...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The parameters supplied are captured under ",(0,n.jsx)(t.code,{children:'results.extra["metadata"].arguments'}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'response = obb.news.world(provider="empty", some_param="adjustment")\nresponse.extra["metadata"].arguments\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"{\n    'provider_choices': {'provider': 'empty'}, 'standard_params': {'limit': 2500, 'start_date': None, 'end_date': None},\n    'extra_params': {'some_param': 'adjustment'}\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:"The transformed parameters are passed through to the function."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"response.results\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:">>> response.results\n[EmptyWorldNewsData(date=2024-05-03 00:00:00, title=Hello from the Empty Provider extension!, images=None, text=None, url=None, some_param=do_something)]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"This process created, built, and mapped a new OpenBB Platform Provider model to an existing router endpoint and standard model."}),"\n",(0,n.jsxs)(t.p,{children:["The output was validated and returned as an instance of ",(0,n.jsx)(t.code,{children:"OBBject"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Create a new model for each endpoint needing to be mapped."})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(5260),a=r(74848);function o(e){let{title:t}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>d});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);