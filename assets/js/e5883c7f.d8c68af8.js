"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16776],{65567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(74848),o=t(28453),r=t(94331);const i={title:"HTTP Requests",sidebar_position:6,description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Requests","HTTP","Async","Synchronous","provider","extension","data","fetch"]},a=void 0,c={id:"platform/developer_guide/http_requests",title:"HTTP Requests",description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",source:"@site/content/platform/developer_guide/http_requests.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/http_requests",permalink:"/platform/developer_guide/http_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/http_requests.mdx",tags:[],version:"current",lastUpdatedBy:"\u7f51\u7edc\u7537\u5b69",lastUpdatedAt:1727901322e3,sidebarPosition:6,frontMatter:{title:"HTTP Requests",sidebar_position:6,description:"This guide outlines OpenBB processes for making HTTP requests synchronously and asynchronously. Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher.",keywords:["OpenBB Platform","Open source","Python interface","REST API","Code contribution","Requests","HTTP","Async","Synchronous","provider","extension","data","fetch"]},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/platform/developer_guide/contributing"},next:{title:"Metadata",permalink:"/platform/developer_guide/metadata"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Generate Query String",id:"generate-query-string",level:2},{value:"Asynchronous vs Synchronous",id:"asynchronous-vs-synchronous",level:2},{value:"Why Async?",id:"why-async",level:3},{value:"Synchronous - Requests",id:"synchronous---requests",level:3},{value:"Asynchronous - AIOHTTP",id:"asynchronous---aiohttp",level:3},{value:"Multi-URL Requests",id:"multi-url-requests",level:3},{value:"Custom Callback",id:"custom-callback",level:3},{value:"Asynchronous Fetchers",id:"asynchronous-fetchers",level:3}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"HTTP Requests - Contributor Guidelines - Development | OpenBB Platform Docs"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Any function fetching data requires making an outbound HTTP request. Utility functions within the ",(0,s.jsx)(n.code,{children:"openbb-core"})," simplify the procedure for making both asynchronous and synchronous requests. These cover the majority of typical requests and should be imported for use instead of creating a new client from scratch."]}),"\n",(0,s.jsx)(n.p,{children:"Using the helpers will keep the codebase leaner and easier to maintain by eliminating duplicate processes. Anyone can build effective and efficient data fetchers, this guide outlines how to import and implement either type of request into any fetcher."}),"\n",(0,s.jsx)(n.h2,{id:"generate-query-string",children:"Generate Query String"}),"\n",(0,s.jsxs)(n.p,{children:["To pass parameters to a URL, they need to be formatted as a query string. The helper function, ",(0,s.jsx)(n.code,{children:"get_querystring()"}),", converts a dictionary of parameters to a standard query URL string."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.utils.helpers import get_querystring\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    Parameters\n    ----------\n    items: dict\n        The dictionary to be turned into a querystring.\n\n    exclude: List[str]\n        The keys to be excluded from the querystring.\n\n    Returns\n    -------\n    str\n        The querystring.\n"})}),"\n",(0,s.jsxs)(n.p,{children:['Within the context of the Fetcher, the "query" object is a Pydantic model. To pass the query parameters to the helper function, apply ',(0,s.jsx)(n.code,{children:"model_dump()"})," to the query object. This removes any key",":values"," where the value is ",(0,s.jsx)(n.code,{children:"None"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["There may be parameters that are not intended to be included in the parameters portion of the URL string. Pass those as a ",(0,s.jsx)(n.code,{children:"List"})," to the ",(0,s.jsx)(n.code,{children:"exclude"})," parameter of ",(0,s.jsx)(n.code,{children:"get_querystring()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'query_string = get_querystring(query.model_dump(), ["interval"])\n'})}),"\n",(0,s.jsxs)(n.p,{children:['In the example above, the "base url" is dedicated to the "interval" of the OHLC data. We want to exclude ',(0,s.jsx)(n.code,{children:"&interval=1d"})," from the parameters portion of the final URL. Or, daily/monthly/intraday levels are all different end points from the provider's API."]}),"\n",(0,s.jsx)(n.h2,{id:"asynchronous-vs-synchronous",children:"Asynchronous vs Synchronous"}),"\n",(0,s.jsxs)(n.p,{children:["Every function in the router is asynchronous. This is the only place an asynchronous function ",(0,s.jsx)(n.em,{children:"must"})," be used. Data-fetching router functions all follow the same format."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@router.command(model="MarketSnapshots")\nasync def market_snapshots(\n    cc: CommandContext,\n    provider_choices: ProviderChoices,\n    standard_params: StandardParams,\n    extra_params: ExtraParams,\n) -> OBBject:\n    """Get a current, complete, market snapshot."""\n    return await OBBject.from_query(Query(**locals()))\n'})}),"\n",(0,s.jsx)(n.p,{children:"The code above executes the endpoint consumed by the user. Each data provider model mapped to the model name in the router decorator could be asynchronous or synchronous."}),"\n",(0,s.jsx)(n.h3,{id:"why-async",children:"Why Async?"}),"\n",(0,s.jsx)(n.p,{children:"An asynchronous fetcher is suitable for data sources demanding multiple queries per command. Options chains, for example, could be served as only a single expiration date, but others will provide the complete chain as a single request."}),"\n",(0,s.jsx)(n.p,{children:"In the case of the former, dozens of requests, an asynchronous fetcher will dramatically improve performance. The latter is only one request and the code can be simplified as a synchronous process."}),"\n",(0,s.jsx)(n.p,{children:"Some data providers allow for bulk downloading from a list of symbols, while many do not. It might be desirable to enhance a data source by adding support for bulk downloading. Wrapping it as list of asynchronous tasks makes it an efficient process. The time to download one item should be the same as two because the tasks are carried out concurrently."}),"\n",(0,s.jsx)(n.p,{children:"Ultimately, the choice is at the discretion of the developer. OpenBB has made the implementation of both methods easy and fast, the next sections will elaborate."}),"\n",(0,s.jsx)(n.h3,{id:"synchronous---requests",children:"Synchronous - Requests"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.utils import make_request\n"})}),(0,s.jsxs)(n.p,{children:["This function is an abstract helper to make requests from a URL with potential headers and parameters. It accepts ",(0,s.jsx)(n.code,{children:"**kwargs"})," and returns a ",(0,s.jsx)(n.code,{children:"requests.Response"})," object. If no headers are supplied, it will attempt to use a generic user-agent. Add headers as a dictionary to the ",(0,s.jsx)(n.code,{children:"headers"})," parameter of the query."]}),(0,s.jsxs)(n.p,{children:["All parameters of ",(0,s.jsx)(n.code,{children:"requests.get"})," or ",(0,s.jsx)(n.code,{children:"requests.post"}),"are accessible and passed through as ",(0,s.jsx)(n.code,{children:"**kwargs"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'\n    Parameters\n    ----------\n    url : str\n        Url to make the request to\n    method : str, optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n\n    Returns\n    -------\n    requests.Response\n        Request response object\n\n    Raises\n    ------\n    ValueError\n        If invalid method is passed\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"asynchronous---aiohttp",children:"Asynchronous - AIOHTTP"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(n.p,{children:["Single-URL requests can be made asynchronously. The name of the function now starts with, ",(0,s.jsx)(n.code,{children:"a"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.utils.helpers import amake_request\n"})}),(0,s.jsxs)(n.p,{children:["This function uses the ",(0,s.jsx)(n.code,{children:"aiohttp"})," client and accepts ",(0,s.jsx)(n.code,{children:"kwargs"}),". It has a default callback function that assumes the content is ",(0,s.jsx)(n.code,{children:"json"}),". No post-request object parsing is required, but this behaviour is overridden with the ",(0,s.jsx)(n.code,{children:"response_callback"})," parameter."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'    Parameters\n    ----------\n    url : str\n        Url to make the request to\n    method : str, optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n    response_callback : Callable[[ClientResponse, ClientSession], Awaitable[Union[dict, List[dict]]]], optional\n        Async callback with response and session as arguments that returns the json, by default None\n    session : ClientSession, optional\n        Custom session to use for requests, by default None\n\n\n    Returns\n    -------\n    Union[dict, List[dict]]\n        Response json\n'})}),(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Don't forget to ",(0,s.jsx)(n.code,{children:"await"}),"!"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'url = "https://someurlwithdata.profit"\nresponse_json = await amake_requests(url)\n'})}),(0,s.jsxs)(n.p,{children:["Absent ",(0,s.jsx)(n.code,{children:"await"}),", the response is a coroutine - a task waiting to be executed."]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"multi-url-requests",children:"Multi-URL Requests"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(n.p,{children:["The helper function becomes plural, ",(0,s.jsx)(n.code,{children:"amake_requests"}),", when fetching for a list of URLs. Under the hood, it is using ",(0,s.jsx)(n.code,{children:"asyncio.gather"})," to perform the tasks concurrently. The same default callback function from ",(0,s.jsx)(n.code,{children:"amake_request"})," exists, only here it appends the expected ",(0,s.jsx)(n.code,{children:"json"})," output to a ",(0,s.jsx)(n.code,{children:"List[Dict]"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_core.provider.utils.helpers import amake_requests\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'    Parameters\n    ----------\n    urls : Union[str, List[str]]\n        List of urls to make requests to\n    method : Literal["GET", "POST"], optional\n        HTTP method to use.  Can be "GET" or "POST", by default "GET"\n    timeout : int, optional\n        Timeout in seconds, by default 10.  Can be overwritten by user setting, request_timeout\n    response_callback : Callable[[ClientResponse, ClientSession], Awaitable[Union[dict, List[dict]]]], optional\n        Async callback with response and session as arguments that returns the json, by default None\n    session : ClientSession, optional\n        Custom session to use for requests, by default None\n\n    Returns\n    -------\n    Union[dict, List[dict]]\n        Response json\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"custom-callback",children:"Custom Callback"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)(n.p,{children:"Customize the response parsing by creating a specific callback function. The example below is a method for converting CSV data to a dictionary and appending it to a list."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from io import StringIO\nfrom typing import Any\nfrom pandas import DataFrame\n\nresults = []\n\nasync def response_callback(response, _: Any):\n    """Callback for HTTP Client Response."""\n    response = await response.text()\n    data = DataFrame(StringIO(response), skiprows=2)\n    results.append(data.to_dict("records"))\n'})})]}),"\n",(0,s.jsx)(n.h3,{id:"asynchronous-fetchers",children:"Asynchronous Fetchers"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)(n.p,{children:["When a Fetcher is asynchronous, the ",(0,s.jsx)(n.code,{children:"extract_data"})," static method needs to be defined accordingly - ",(0,s.jsx)(n.code,{children:"aextract_data"})," instead of ",(0,s.jsx)(n.code,{children:"extract_data"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"    @staticmethod\n    async def aextract_data(\n        query: SourceModelQueryParams,\n        credentials: Optional[Dict[str, str]],\n        **kwargs: Any,\n    ) -> List[Dict]:\n"})}),(0,s.jsx)(n.p,{children:"These helper functions simplify and standardize the majority of HTTP requests."}),(0,s.jsx)(n.p,{children:"They are starting points for building or modifying data provider extensions, and they can also be imported as a standalone utility within any Python session."})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),o=t(74848);function r(e){let{title:n}=e;return(0,o.jsx)(s.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);