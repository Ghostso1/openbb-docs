"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93040],{97479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var n=a(74848),s=a(28453),r=a(94331);const i={title:"Architecture Overview",sidebar_position:1,description:"This guide provides insights into the architecture and components of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes","Core Dependencies"]},o=void 0,d={id:"platform/developer_guide/architecture_overview",title:"Architecture Overview",description:"This guide provides insights into the architecture and components of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",source:"@site/content/platform/developer_guide/architecture_overview.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/architecture_overview",permalink:"/platform/developer_guide/architecture_overview",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/architecture_overview.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1731077387e3,sidebarPosition:1,frontMatter:{title:"Architecture Overview",sidebar_position:1,description:"This guide provides insights into the architecture and components of the OpenBB Platform. It covers the key classes, import statements, and the TET pattern used in building the Fetcher classes.",keywords:["OpenBB Platform Architecture","Key Classes","Import Statements","TET Pattern","Fetcher Classes","Core Dependencies"]},sidebar:"tutorialSidebar",previous:{title:"Developer Guide",permalink:"/platform/developer_guide/"},next:{title:"Standardization",permalink:"/platform/developer_guide/standardization"}},c={},l=[{value:"Core Dependencies",id:"core-dependencies",level:2},{value:"Importance Of A Lean Core",id:"importance-of-a-lean-core",level:3},{value:"Python Interface",id:"python-interface",level:2},{value:"API Interface",id:"api-interface",level:2},{value:"QueryParams Class",id:"queryparams-class",level:2},{value:"Data Class",id:"data-class",level:2},{value:"Fetcher Class",id:"fetcher-class",level:2},{value:"OBBject Class",id:"obbject-class",level:2},{value:"Router Class",id:"router-class",level:2},{value:"Import Statements",id:"import-statements",level:2},{value:"The TET Pattern",id:"the-tet-pattern",level:2},{value:"Data Processing Commands",id:"data-processing-commands",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.A,{title:"Architecture Overview - Developer Guidelines - Development | OpenBB Platform Docs"}),"\n",(0,n.jsx)(t.p,{children:"This page provides a general overview of the OpenBB Platform architecture and the key Python classes most processes interact with."}),"\n",(0,n.jsx)(t.h2,{id:"core-dependencies",children:"Core Dependencies"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:['In reference to, "core", we mean the ',(0,n.jsx)(t.code,{children:"openbb-core"})," package."]})}),"\n",(0,n.jsx)(t.p,{children:"The OpenBB Platform core relies on a set of carefully selected Python libraries. These include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"FastAPI for building the API."}),"\n",(0,n.jsx)(t.li,{children:"Uvicorn as the ASGI server."}),"\n",(0,n.jsx)(t.li,{children:"Pandas for data manipulation and analysis."}),"\n",(0,n.jsx)(t.li,{children:"Pydantic for data validation and serialization using Python type annotations."}),"\n",(0,n.jsx)(t.li,{children:"Requests/AIOHTTP for making HTTP requests."}),"\n",(0,n.jsx)(t.li,{children:"WebSockets for handling WebSocket connections."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These dependencies are specified in the ",(0,n.jsx)(t.code,{children:"pyproject.toml"})," files."]}),"\n",(0,n.jsx)(t.h3,{id:"importance-of-a-lean-core",children:"Importance Of A Lean Core"}),"\n",(0,n.jsx)(t.p,{children:"Keeping the OpenBB Platform core as lean as possible is crucial for maintaining the its performance, ease of use, and flexibility. A lean core means faster installation times, less memory usage, and overall better performance. It also reduces the risk of conflicts between dependencies and makes the platform easier to maintain and update."}),"\n",(0,n.jsx)(t.p,{children:"Moreover, a lean core allows for greater flexibility. Users of the platform can add additional functionality through extensions without being burdened by unnecessary core dependencies. This makes the OpenBB Platform adaptable to a wide range of use cases and requirements."}),"\n",(0,n.jsx)(t.h2,{id:"python-interface",children:"Python Interface"}),"\n",(0,n.jsx)(t.p,{children:"When using the OpenBB Platform from a Python Interface, docstrings and type hints are your best friends as it provides plenty of context on how to use the commands."}),"\n",(0,n.jsxs)(t.p,{children:["For example, ",(0,n.jsx)(t.code,{children:"obb.technical.ema?"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"obb.technical.ema(\n    data: Union[list, dict, pandas.core.frame.DataFrame, List[pandas.core.frame.DataFrame], pandas.core.series.Series, List[pandas.core.series.Series], numpy.ndarray, openbb_core.provider.abstract.data.Data, List[openbb_core.provider.abstract.data.Data]],\n    target: str = 'close',\n    index: str = 'date',\n    length: int = 50,\n    offset: int = 0,\n    chart: bool = False,\n) -> openbb_core.app.model.obbject.OBBject\n"})}),"\n",(0,n.jsxs)(t.p,{children:["We can easily deduct that the ",(0,n.jsx)(t.code,{children:"ema"})," command accepts data in a number of formats."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Other types might be added in the future."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"api-interface",children:"API Interface"}),"\n",(0,n.jsxs)(t.p,{children:["When using the OpenBB Platform via an API Interface, the types are a bit more constrained than the Python interface. For example, we can't use ",(0,n.jsx)(t.code,{children:"pandas.DataFrame"})," as a type. However the same principles apply for what ",(0,n.jsx)(t.code,{children:"Data"})," means - i.e., any data processing command, which are characterized as POST endpoints on the API, will accept data as a list of records, in the ",(0,n.jsx)(t.strong,{children:"request body"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\n    {\n        "open": 80,\n        "high": 80.69,\n        "low": 77.37,\n        "close": 77.62,\n        "volume": 2487300\n    }\n]\n'})}),"\n",(0,n.jsx)(t.h2,{id:"queryparams-class",children:"QueryParams Class"}),"\n",(0,n.jsx)(t.p,{children:"The QueryParams class is a standardized model for handling query input parameters in the OpenBB platform. It extends the BaseModel from the Pydantic library, which provides runtime data validation and serialization."}),"\n",(0,n.jsxs)(t.p,{children:["Below is the ",(0,n.jsx)(t.a,{href:"https://docs.openbb.co/platform/data_models/EquityHistorical",children:"EquityHistorical"})," standard model."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'"""Equity Historical Price Standard Model."""\n\nfrom datetime import (\n    date as dateType,\n    datetime,\n)\nfrom typing import Optional, Union\n\nfrom dateutil import parser\nfrom pydantic import Field, field_validator\n\nfrom openbb_core.provider.abstract.data import Data\nfrom openbb_core.provider.abstract.query_params import QueryParams\nfrom openbb_core.provider.utils.descriptions import (\n    DATA_DESCRIPTIONS,\n    QUERY_DESCRIPTIONS,\n)\n\nclass EquityHistoricalQueryParams(QueryParams):\n    """Equity Historical Price Query."""\n\n    symbol: str = Field(description=QUERY_DESCRIPTIONS.get("symbol", ""))\n    interval: Optional[str] = Field(\n        default="1d",\n        description=QUERY_DESCRIPTIONS.get("interval", ""),\n    )\n    start_date: Optional[dateType] = Field(\n        default=None,\n        description=QUERY_DESCRIPTIONS.get("start_date", ""),\n    )\n    end_date: Optional[dateType] = Field(\n        default=None,\n        description=QUERY_DESCRIPTIONS.get("end_date", ""),\n    )\n\n    @field_validator("symbol", mode="before", check_fields=False)\n    @classmethod\n    def to_upper(cls, v: str) -> str:\n        """Convert field to uppercase."""\n        return v.upper()\n'})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.p,{children:"Note that not all possible parameters are defined here, and can be further refined in the provider-specific model."}),(0,n.jsxs)(t.p,{children:["For example, ",(0,n.jsx)(t.code,{children:"interval"})," is defined as a string in the standard model, but is defined again as a ",(0,n.jsx)(t.code,{children:"Literal"})," with explicit choices specific to that source. Here, it would not be possible to define all valid choices in a way that is compatible with all providers."]})]}),"\n",(0,n.jsxs)(t.p,{children:["The class can have a dictionary, ",(0,n.jsx)(t.code,{children:"__alias_dict__"}),", which can be used to map the original parameter names to aliases. This can be useful when dealing with different data providers that may use different naming conventions for similar parameters."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"__json_schema_extra__"})," dictionary can be used to define whether multiple items are accepted by a parameter."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'__json_schema_extra__ = {\n    "symbol": ["multiple_items_allowed"],\n    "category": ["multiple_items_allowed"],\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"__repr__"})," method provides a string representation of the QueryParams object, which includes the class name and a list of the model's parameters and their values."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"model_config"})," attribute is a ",(0,n.jsx)(t.code,{children:"ConfigDict"})," instance that allows extra fields not defined in the model and populates the model by name."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"model_dump"})," method is used to serialize the model into a dictionary. If the ",(0,n.jsx)(t.code,{children:"__alias_dict__"})," is not empty, it will use the aliases defined in it for the keys in the returned dictionary. If the ",(0,n.jsx)(t.code,{children:"__alias_dict__"})," is empty, it will return the original serialized model."]}),"\n",(0,n.jsx)(t.h2,{id:"data-class",children:"Data Class"}),"\n",(0,n.jsx)(t.p,{children:"The OpenBB Standardized Data Model."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Data"})," class is a flexible Pydantic model designed to accommodate various data structures\nfor OpenBB's data processing pipeline as it's structured to support dynamic field definitions."]}),"\n",(0,n.jsx)(t.p,{children:"The model leverages Pydantic's powerful validation features to ensure data integrity while\nproviding the flexibility to handle extra fields that are not explicitly defined in the model's\nschema."}),"\n",(0,n.jsxs)(t.p,{children:["This makes the ",(0,n.jsx)(t.code,{children:"Data"})," class ideal for working with datasets that may have varying\nstructures or come from heterogeneous sources."]}),"\n",(0,n.jsx)(t.p,{children:"Key Features:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Dynamic field support: Can dynamically handle fields that are not pre-defined in the model,\nallowing for great flexibility in dealing with different data shapes."}),"\n",(0,n.jsx)(t.li,{children:"Alias handling: Utilizes an aliasing mechanism to maintain compatibility with different naming\nconventions across various data formats."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Usage:"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Data"})," class can be instantiated with keyword arguments corresponding to the fields of the\nexpected data. It can also parse and validate data from JSON or other serializable formats, and\nconvert them to a ",(0,n.jsx)(t.code,{children:"Data"})," instance for easy manipulation and access."]}),"\n",(0,n.jsx)(t.p,{children:"Example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_core.provider.abstract.data import Data\n\n# Direct instantiation\ndata_record = Data(name="OpenBB", value=42)\n\n# Conversion from a dictionary\ndata_dict = {"name": "OpenBB", "value": 42}\ndata_record = Data(**data_dict)\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The class is highly extensible and can be subclassed to create more specific models tailored to\nparticular datasets or domains, while still benefiting from the base functionality provided by the\n",(0,n.jsx)(t.code,{children:"Data"})," class."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Data"})," model for the ",(0,n.jsx)(t.code,{children:"EquityHistorical"})," standard model is shown below."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'class EquityHistoricalData(Data):\n    """Equity Historical Price Data."""\n\n    date: Union[dateType, datetime] = Field(\n        description=DATA_DESCRIPTIONS.get("date", "")\n    )\n    open: float = Field(description=DATA_DESCRIPTIONS.get("open", ""))\n    high: float = Field(description=DATA_DESCRIPTIONS.get("high", ""))\n    low: float = Field(description=DATA_DESCRIPTIONS.get("low", ""))\n    close: float = Field(description=DATA_DESCRIPTIONS.get("close", ""))\n    volume: Optional[Union[float, int]] = Field(\n        default=None, description=DATA_DESCRIPTIONS.get("volume", "")\n    )\n    vwap: Optional[float] = Field(\n        default=None, description=DATA_DESCRIPTIONS.get("vwap", "")\n    )\n\n    @field_validator("date", mode="before", check_fields=False)\n    def date_validate(cls, v):\n        """Return formatted datetime."""\n        if ":" in str(v):\n            return parser.isoparse(str(v))\n        return parser.parse(str(v)).date()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"fetcher-class",children:"Fetcher Class"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Fetcher"})," class is an abstract base class designed to provide a structured way to fetch data from various providers. It uses generics to allow for flexibility in the types of queries, data, and return values it handles."]}),"\n",(0,n.jsxs)(t.p,{children:["The class defines a series of methods that must be implemented by any subclass: ",(0,n.jsx)(t.code,{children:"transform_query"}),", ",(0,n.jsx)(t.code,{children:"extract_data"}),", and ",(0,n.jsx)(t.code,{children:"transform_data"}),". These methods represent the core steps of fetching data: transforming input parameters into a provider-specific query, extracting data from the provider using the query, and then transforming the provider-specific data into a desired format."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"fetch_data"})," method orchestrates these steps, taking in parameters and optional credentials, and returning the transformed data."]}),"\n",(0,n.jsx)(t.p,{children:"The class also includes a test method for validating the functionality of a fetcher, performing assertions on each stage of the fetch process."}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, the ",(0,n.jsx)(t.code,{children:"Fetcher"})," class uses a custom ",(0,n.jsx)(t.code,{children:"classproperty"})," decorator to define class-level properties that return the types of the query parameters, return value, and data."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"require_credentials"})," class variable indicates whether credentials are needed to fetch data from the provider. This can be overridden by subclasses as needed."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Fetcher"})," class implementation is based on the ",(0,n.jsx)(t.a,{href:"/platform/developer_guide/architecture_overview#the-tet-pattern",children:"TET pattern"}),". This pattern imposes a standardized structure, namely:"]}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Transform the query: the output of this method should be ",(0,n.jsx)(t.code,{children:"QueryParams"})," child."]}),"\n",(0,n.jsxs)(t.li,{children:["Extract the data: the output of this method can be ",(0,n.jsx)(t.code,{children:"Any"})," but it's recommended to be a ",(0,n.jsx)(t.code,{children:"Dict"})," (will facilitate the next step of the fetcher's action, the data transformation)."]}),"\n",(0,n.jsxs)(t.li,{children:["Transform the data: the output of this method should be a ",(0,n.jsx)(t.code,{children:"List[Data]"})," or ",(0,n.jsx)(t.code,{children:"Data"})," (or a child of it)."]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"obbject-class",children:"OBBject Class"}),"\n",(0,n.jsxs)(t.p,{children:["The OBBject class is a generic class in the OpenBB platform that represents a standardized object for handling and manipulating data fetched from various providers. It extends the ",(0,n.jsx)(t.code,{children:"Tagged"})," class and uses Python's generics to allow flexibility in the type of results it can handle."]}),"\n",(0,n.jsx)(t.p,{children:"The class includes several fields such as results, provider, warnings, chart, and extra, which respectively represent the fetched data, the data provider, any warnings generated during data fetching, an optional chart object for visualizing the data, and a dictionary for any additional information."}),"\n",(0,n.jsxs)(t.p,{children:["The class provides several methods for converting the fetched data into different formats, including ",(0,n.jsx)(t.code,{children:"to_df"})," (or ",(0,n.jsx)(t.code,{children:"to_dataframe"}),") for converting to a pandas DataFrame, ",(0,n.jsx)(t.code,{children:"to_polars"})," for converting to a Polars DataFrame, ",(0,n.jsx)(t.code,{children:"to_numpy"})," for converting to a numpy array, and ",(0,n.jsx)(t.code,{children:"to_dict"})," for converting to a dictionary."]}),"\n",(0,n.jsxs)(t.p,{children:["The class also includes a ",(0,n.jsx)(t.code,{children:"__repr__"})," method for a human-readable representation of the object, as well as the familiar Pydantic BaseModel methods like ",(0,n.jsx)(t.code,{children:"model_dump()"})," and ",(0,n.jsx)(t.code,{children:"model_json_schema()"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"router-class",children:"Router Class"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Router"})," class in the OpenBB platform is responsible for managing and routing API requests. It uses the ",(0,n.jsx)(t.code,{children:"APIRouter"})," from the FastAPI library to handle routing."]}),"\n",(0,n.jsx)(t.p,{children:"The class includes a command method that allows for the registration of callable functions as API endpoints. This method takes care of setting up the API route, including defining the HTTP methods, response models, operation IDs, and other necessary parameters for the API endpoint."}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"include_router"})," method allows for the inclusion of another router, effectively merging the routes from the included router into the current one."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Router"})," class also interacts with the ",(0,n.jsx)(t.code,{children:"SignatureInspector"})," class to validate and complete function signatures, ensuring that the functions registered as API endpoints have the correct parameters and return types."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"api_router"})," property provides access to the underlying APIRouter instance, allowing for direct interaction with the FastAPI routing system if needed."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Router"})," class exposes a ",(0,n.jsx)(t.code,{children:"command"})," decorator that allows for the registration of callable functions as API endpoints. This method takes care of setting up the API route, including defining the HTTP methods, response models, operation IDs, and other necessary parameters for the API endpoint."]}),(0,n.jsxs)(t.p,{children:["This decorator enforces that the decorated function (of type ",(0,n.jsx)(t.code,{children:"Callable"}),") returns an ",(0,n.jsx)(t.code,{children:"OBBject"})," instance. I.e., the signature of a decorated function should translate to ",(0,n.jsx)(t.code,{children:"Callable[P, OBBject]"})," (a callable object (like a function) that takes arguments of type ",(0,n.jsx)(t.code,{children:"P"})," and returns an object of type ",(0,n.jsx)(t.code,{children:"OBBject"}),")."]})]}),"\n",(0,n.jsx)(t.h2,{id:"import-statements",children:"Import Statements"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"\n# The `Data` class\nfrom openbb_core.provider.abstract.data import Data\n\n# The `QueryParams` class\nfrom openbb_core.provider.abstract.query_params import QueryParams\n\n# The `Fetcher` class\nfrom openbb_core.provider.abstract.fetcher import Fetcher\n\n# The `OBBject` class\nfrom openbb_core.app.model.obbject import OBBject\n\n# The `Router` class\nfrom openbb_core.app.router import Router\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"the-tet-pattern",children:"The TET Pattern"}),"\n",(0,n.jsxs)(t.p,{children:["The TET pattern is a pattern that we use to build the ",(0,n.jsx)(t.code,{children:"Fetcher"})," classes. It stands for ",(0,n.jsx)(t.strong,{children:"Transform, Extract, Transform"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/48914296/ae9908be-00c0-40af-8acb-afeeb9629f2b",alt:"Diagram"})}),"\n",(0,n.jsxs)(t.p,{children:["As the OpenBB Platform has its own standardization framework and the data fetcher are a very important part of it, we need to ensure that the data is transformed and extracted in a consistent way, to help us do that, we came up with the ",(0,n.jsx)(t.strong,{children:"TET"})," pattern, which helps us build and ship faster as we have a clear structure on how to build the ",(0,n.jsx)(t.code,{children:"Fetcher"})," classes."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform"})," query"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"transform_query(params: Dict[str, Any])\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Transforms the query parameters. Given a ",(0,n.jsx)(t.code,{children:"params"})," dictionary this method should return the transformed query parameters as a ",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/query_params.py",children:(0,n.jsx)(t.code,{children:"QueryParams"})})," child so that we can leverage the pydantic model schemas and validation into the next step. This might also be the place do perform some transformations on any given parameter, i.e., if you want to transform an empty date into a ",(0,n.jsx)(t.code,{children:"datetime.now().date()"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Extract"})," data"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"extract_data(query: ExampleQueryParams,credentials: Optional[Dict[str, str]],**kwargs: Any,) -> Dict\n"})}),"\n",(0,n.jsx)(t.p,{children:"Makes the request to the API endpoint and returns the raw data. Given the transformed query parameters, the credentials and any other extra arguments, this method should return the raw data as a dictionary."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Transform"})," data"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"transform_data(query: ExampleQueryParams, data: Dict, **kwargs: Any) -> List[ExampleHistoricalData]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Transforms the raw data into the defined data model. Given the transformed query parameters (might be useful for some filtering), the raw data and any other extra arguments, this method should return the transformed data as a list of ",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/data.py",children:(0,n.jsx)(t.code,{children:"Data"})})," children."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"data-processing-commands",children:"Data Processing Commands"}),"\n",(0,n.jsx)(t.p,{children:"The data processing commands are commands that are used to process the data that may or may not come from the OpenBB Platform."}),"\n",(0,n.jsxs)(t.p,{children:["In order to create a data processing framework general enough to be used by any extension, we've created a special abstract class called ",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_platform/core/openbb_core/provider/abstract/data.py",children:(0,n.jsx)(t.code,{children:"Data"})})," which ",(0,n.jsx)(t.strong,{children:"all"})," standardized (and consequently its child classes) will inherit from."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Why is this important?"})}),"\n",(0,n.jsxs)(t.p,{children:["We ensure that all ",(0,n.jsx)(t.code,{children:"OBBject.results"})," will share a common ground on which we can apply out-of-the-box data processing commands, such as the ",(0,n.jsx)(t.code,{children:"ta"}),", ",(0,n.jsx)(t.code,{children:"qa"}),", or the ",(0,n.jsx)(t.code,{children:"econometrics"})," menus."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["But what's really the ",(0,n.jsx)(t.code,{children:"Data"})," class?"]})}),"\n",(0,n.jsxs)(t.p,{children:["It's a pydantic model that inherits from the ",(0,n.jsx)(t.code,{children:"BaseModel"})," and can contain any given number of extra fields. In practice, it looks as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb import obb\n\nres = obb.equity.price.historical("AAPL")\nres.results[0]\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"AVEquityHistoricalData(date=2023-11-03 00:00:00, open=174.24, high=176.82, low=173.35, close=176.65, volume=79829246.0, vwap=None, adj_close=None, dividend_amount=None, split_coefficient=None)\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"AVEquityHistoricalData"})," class, is a child class of the ",(0,n.jsx)(t.code,{children:"Data"})," class."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note how we've indexed to get only the first element of the ",(0,n.jsx)(t.code,{children:"results"})," list (which represents a single row, if we want to think about it as a tabular output)."]}),"\n",(0,n.jsxs)(t.p,{children:["This simply means that we are getting a ",(0,n.jsx)(t.code,{children:"List"})," of ",(0,n.jsx)(t.code,{children:"AVEquityHistoricalData"})," from the ",(0,n.jsx)(t.code,{children:"obb.equity.price.historical"})," command. Or, we can also say that that's equivalent to ",(0,n.jsx)(t.code,{children:"List[Data]"}),"!"]}),"\n",(0,n.jsxs)(t.p,{children:["This is very powerful, as we can now apply any data processing command to the ",(0,n.jsx)(t.code,{children:"results"})," list, without worrying about the underlying data structure."]}),"\n",(0,n.jsxs)(t.p,{children:["That's why, on data processing commands (such as the ",(0,n.jsx)(t.code,{children:"ta"})," menu) we will find on its function signature the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'\ndef ema(\n        self,\n        data: Union[List[Data], pandas.DataFrame],\n        target: str = "close",\n        index: str = "date",\n        length: int = 50,\n        offset: int = 0,\n        chart: bool = False,\n    ) -> OBBject[List[Data]]:\n\n    ...\n\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note that ",(0,n.jsx)(t.code,{children:"data"})," can actually be a different type, but we'll focus on the ",(0,n.jsx)(t.code,{children:"List[Data]"})," case for now."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Does that mean that I can only use the data processing commands if I instantiate a class that inherits from ",(0,n.jsx)(t.code,{children:"Data"}),"?\nNot at all! Consider the following example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'\nfrom openbb_core.provider.abstract.data import Data\nmy_data_item_1 = {"open": 1, "high": 2, "low": 3, "close": 4, "volume": 5, "date": "2020-01-01"}\nmy_data_item_1_as_data = Data.model_validate(my_data_item_1)\nmy_data_item_1_as_data\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'Data(open=1, high=2, low=3, close=4, volume=5, date="2020-01-01")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["This means that the ",(0,n.jsx)(t.code,{children:"Data"})," class is clever enough to understand that you are passing a dictionary and it will try to validate it for you."]}),"\n",(0,n.jsxs)(t.p,{children:["In other words, if you're using data that doesn't come from the OpenBB Platform, you only need to ensure it's parsable by the ",(0,n.jsx)(t.code,{children:"Data"})," class and you'll be able to use the data processing commands."]}),"\n",(0,n.jsxs)(t.p,{children:["In other words, imagine you have a dataframe that you want to use with the ",(0,n.jsx)(t.code,{children:"ta"})," menu. You can do the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'\nres = obb.equity.price.historical("AAPL")\nmy_df = res.to_dataframe() # yes, you can convert your OBBject.results into a dataframe out-of-the-box!\nmy_records = df.to_dict(orient="records")\n\nobb.ta.ema(data=my_record)\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"OBBject\n\nresults: [{'close': 77.62, 'close_EMA_50': None}, {'close': 80.25, 'close_EMA_50': ...}] # this is a `List[Data]` yet again\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note that that for this example we've used the ",(0,n.jsx)(t.code,{children:"OBBject.to_dataframe()"})," method to have an example dataframe, but it could be any other dataframe that you have."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(5260),s=a(74848);function r(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);