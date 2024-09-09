"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52360],{35844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453),o=n(94331);const a={title:"Basic Response",sidebar_position:2,description:"This page details the basic response and output that can be expected to be received from the the OpenBB Platform.",keywords:["tutorial","standardized output","OBBject","basic response","provider","results","warnings","chart","extra","command coverage"]},i=void 0,c={id:"platform/user_guides/basic_response",title:"Basic Response",description:"This page details the basic response and output that can be expected to be received from the the OpenBB Platform.",source:"@site/content/platform/user_guides/basic_response.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/basic_response",permalink:"/platform/user_guides/basic_response",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/basic_response.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1725894016e3,sidebarPosition:2,frontMatter:{title:"Basic Response",sidebar_position:2,description:"This page details the basic response and output that can be expected to be received from the the OpenBB Platform.",keywords:["tutorial","standardized output","OBBject","basic response","provider","results","warnings","chart","extra","command coverage"]},sidebar:"tutorialSidebar",previous:{title:"Basic Syntax",permalink:"/platform/user_guides/basic_syntax"},next:{title:"Extensions",permalink:"/platform/user_guides/extensions"}},d={},l=[];function p(e){const t={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{title:"Basic Response - Usage | OpenBB Platform Docs"}),"\n",(0,s.jsxs)(t.p,{children:["The output of every command is an object which contains the results of the request, along with additional information. It is a custom class, ",(0,s.jsx)(t.code,{children:"OBBject"}),", and always returns with the fields listed below:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"id: ...                 # UUID Tag\nresults: ...            # Serializable results.\nprovider: ...           # Provider name.\nwarnings: ...           # List of warnings.\nchart: ...              # Chart object.\nextra: ...              # Extra info.\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb import obb\n\ndata = obb.equity.price.historical("SPY", provider="polygon")\n\ndata\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"OBBject\n\nid: 06520558-d54a-7e53-8000-7aafc8a42694\nresults: [{'date': datetime.datetime(2022, 10, 5, 0, 0), 'open': 375.62, 'high': 37...\nprovider: polygon\nwarnings: None\nchart: None\nextra: {'metadata': {'arguments': {'provider_choices': {'provider': 'polygon'}, 'st...\n"})}),"\n",(0,s.jsx)(t.p,{children:"Additional class methods are helpers for converting the results to a variety of formats."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"to_dict()"}),': converts to a dictionary, accepting all standard "orientation" parameters, i.e., "records"']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"to_df()"})," / ",(0,s.jsx)(t.code,{children:"to_dataframe()"}),": converts to a Pandas DataFrame."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"to_numpy()"}),": converts to a Numpy array."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"to_polars()"}),": converts to a Polars table."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsx)(t.p,{children:"The preferred output type can be set with a user preference."}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'obb.user.preferences.output_type="dataframe"\n'})})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(5260),r=n(74848);function o(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);