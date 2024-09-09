"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76202],{39399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=n(74848),o=n(28453),a=n(94331);const i={title:"OBBject",sidebar_position:4,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy","extensions"]},r=void 0,d={id:"platform/developer_guide/obbject",title:"OBBject",description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",source:"@site/content/platform/developer_guide/obbject.mdx",sourceDirName:"platform/developer_guide",slug:"/platform/developer_guide/obbject",permalink:"/platform/developer_guide/obbject",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/developer_guide/obbject.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1725894016e3,sidebarPosition:4,frontMatter:{title:"OBBject",sidebar_position:4,description:"This page provides information about the OBBject class in the OpenBB Platform.  This class provides the interface to interact with commands",keywords:["OBBject","Python","Development","OpenBB Platform","Results","Commands","Pandas","DataFrame","Polars","Numpy","extensions"]},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/platform/developer_guide/extensions"},next:{title:"Dependency Management",permalink:"/platform/developer_guide/dependency_management"}},c={},l=[{value:"Example",id:"example",level:2},{value:"OBBject Methods",id:"obbject-methods",level:2},{value:"OBBject Extensions",id:"obbject-extensions",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"OBBject - Developer Guidelines - Development | OpenBB Platform Docs"}),"\n",(0,s.jsx)(t.p,{children:"The OBBject (OpenBB Object) is at the heart of developing around the OpenBB Platform. Every command will return this class as the command output."}),"\n",(0,s.jsx)(t.p,{children:"This class contains the following attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["results","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"This contains serializable data that was obtained by running the command."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["provider","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The name of the provider that was used to obtain the data."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["warnings","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any warnings that were generated by the command."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["extra","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Additional metadata about the command run, including any arguments, the route, the timestamp, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, the OBBject class contains a class variable, ",(0,s.jsx)(t.code,{children:"accessors"}),", which is used to register extensions to the class. This is done by using the ",(0,s.jsx)(t.code,{children:"@obbject_accessor"})," decorator. This decorator will register the class as an accessor to the OBBject class, and will be available on every OBBject returned by a command."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'\nfrom openbb import obb\nres = obb.equity.price.historical("AAPL")\nres.accessors\n'})}),"\n",(0,s.jsxs)(t.p,{children:["An example with the ",(0,s.jsx)(t.code,{children:"openbb-charting"})," extension would output:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"{'charting'}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["Find more about ",(0,s.jsx)(t.code,{children:"OBBject"})," extensions ",(0,s.jsx)(t.a,{href:"how-to/add_obbject_extension",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"In the python interface, the OBBject class is returned by every command. The following example shows how to access the results of a command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb import obb\n\nobbject = obb.equity.price.historical("AAPL", provider="fmp")\n\ndisplay(obbject)\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"OBBject\n\nid: 0655d06a-8797-7310-8000-4daaa1d47936\nresults: [{'date': datetime.datetime(2023, 11, 21, 0, 0), 'open': 191.41, 'high': 1...\nprovider: fmp\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'fmp'}, 'standa...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The output type is ",(0,s.jsx)(t.code,{children:"<class 'openbb_core.app.model.obbject.OBBject'>"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"If we look at the results attribute, we see that we are returned a list of the Data models used, i.e"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"obbject.results[0]\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"FMPEquityHistoricalData(date=2023-11-21 00:00:00, open=191.41, high=191.5, low=189.74, close=190.375, volume=24029603, vwap=190.54, label=November 21, 23, adj_close=190.375, unadjusted_volume=24029603.0, change=-1.03, change_percent=-0.5407241, change_over_time=-0.005407241)\n"})}),"\n",(0,s.jsx)(t.p,{children:"In general, this will not be how you want to ingest or modify your data, so to help with this we have provided some methods."}),"\n",(0,s.jsx)(t.h2,{id:"obbject-methods",children:"OBBject Methods"}),"\n",(0,s.jsxs)(t.p,{children:["We understand that there is no one size fits all solution for data ingestion and manipulation, so we have provided a few methods to help with this and handle the conversion from Obbject to your preferred data type. These methods are accessed by running ",(0,s.jsx)(t.code,{children:"obbject.<method>"}),"."]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"to_dataframe()"}),(0,s.jsx)(t.p,{children:"One of the most popular libraries for python data manipulation, this method will return a pandas dataframe with the results."}),(0,s.jsxs)(t.p,{children:["We have designed this function to work with various data structures we have encountered. Given the time series nature of the data, we set the index to be ",(0,s.jsx)(t.code,{children:"date"})," if that column appears in the models."]}),(0,s.jsxs)(t.p,{children:["This also has the shorter alias ",(0,s.jsx)(t.code,{children:"to_df()"}),"."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'type(obb.equity.price.historical("AAPL", provider="fmp").to_dataframe())\n'})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"<class 'pandas.core.frame.DataFrame'>\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"to_dict()"}),(0,s.jsxs)(t.p,{children:["A very common data structure is to return the data in a dictionary. This model provides an interface to do so, with options to return the dictionary in different orientations, just as in the pandas ",(0,s.jsx)(t.code,{children:"to_dict()"})," method. The default method will return a dictionary that allows you to index to obtain data:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'to_dict = obb.equity.price.historical("AAPL", provider="fmp").to_dict()["open"][:10]\n'})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"[150.16, 148.13, 149.45, 148.31, 145.14, 144.29, 141.4, 148.21, 145.96, 147.77]\n"})}),(0,s.jsx)(t.p,{children:"Orienting as records will give you a list of dictionaries, commonly used in JSON data structures:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'obb.equity.price.historical("AAPL", provider="fmp").to_dict("records")[0]\n'})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"{'date': datetime.date(2023, 3, 6),\n 'open': 153.79,\n 'high': 156.3,\n 'low': 153.46,\n 'close': 153.83,\n 'volume': 87558000,\n 'vwap': 154.53,\n 'label': 'March 06, 23',\n 'adj_close': 153.01,\n 'unadjusted_volume': 87558000.0,\n 'change': 0.04,\n 'change_percent': 0.02600949,\n 'change_over_time': 0.0002600949}\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"to_numpy()"}),(0,s.jsx)(t.p,{children:"Returns numpy arrays of the results. Note that this loses the column names, so you will need to index the array to obtain the data."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'to_numpy = obb.equity.price.historical("AAPL", provider="fmp").to_numpy()[:1]\n'})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"[\n  [datetime.date(2023, 5, 19), 176.39, 176.39, 174.94, 175.16,\n  55809475, 175.72, 174.23, 55809475.0, -1.23, -0.0069732]\n],\n...\n"})})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"to_polars()"}),(0,s.jsx)(t.p,{children:"Growing in popularity, polars is a blazingly fast dataframe library. This method will return a polars dataframe."}),(0,s.jsx)(t.p,{children:"Note that we do not include polars in the core dependency tree, so it needs to be installed separately."})]}),"\n",(0,s.jsxs)(n,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"show()"}),(0,s.jsxs)(t.p,{children:["When a charting extension is installed, this method will display the chart if it was computed during the execution of the command, by setting the ",(0,s.jsx)(t.code,{children:"chart"})," parameter to ",(0,s.jsx)(t.code,{children:"True"}),"."]})]}),"\n",(0,s.jsx)(t.h2,{id:"obbject-extensions",children:"OBBject Extensions"}),"\n",(0,s.jsx)(t.p,{children:"OBBject extensions registers an accessor in each OBBject that is returned when a command is executed."}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.a,{href:"/platform/user_guides/add_obbject_extension",children:"page"})," details the process for extending the OBBject class."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(5260),o=n(74848);function a(e){let{title:t}=e;return(0,o.jsx)(s.A,{children:(0,o.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);