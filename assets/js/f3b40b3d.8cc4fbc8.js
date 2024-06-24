"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[50179],{38597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(74848),s=n(28453),i=n(94331),o=n(18228),a=n(19365);const l={title:"panel",description:"Tutorial on how to use OpenBB Terminal's econometric functions with focus on running panel regression models. This includes choosing the type of regression, setting entity and time effects, and interacting with the Python SDK. Provides examples using the 'openbb.econometrics.panel' function, which allows selection of OLS or pooled OLS models, and demonstrates how to read and interpret the model summary. Also explains the 'openbb.econometrics.panel_chart' function, which visualizes regression outcomes.",keywords:["Docusaurus","Econometrics","Panel Regression","Fixed Effects","Python SDK","OLS Regression","Regression Model","Pooled OLS","Regression Chart"]},d=void 0,c={id:"sdk/reference/econometrics/panel",title:"panel",description:"Tutorial on how to use OpenBB Terminal's econometric functions with focus on running panel regression models. This includes choosing the type of regression, setting entity and time effects, and interacting with the Python SDK. Provides examples using the 'openbb.econometrics.panel' function, which allows selection of OLS or pooled OLS models, and demonstrates how to read and interpret the model summary. Also explains the 'openbb.econometrics.panel_chart' function, which visualizes regression outcomes.",source:"@site/content/sdk/reference/econometrics/panel.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/panel",permalink:"/openbb-docs/sdk/reference/econometrics/panel",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/econometrics/panel.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"panel",description:"Tutorial on how to use OpenBB Terminal's econometric functions with focus on running panel regression models. This includes choosing the type of regression, setting entity and time effects, and interacting with the Python SDK. Provides examples using the 'openbb.econometrics.panel' function, which allows selection of OLS or pooled OLS models, and demonstrates how to read and interpret the model summary. Also explains the 'openbb.econometrics.panel_chart' function, which visualizes regression outcomes.",keywords:["Docusaurus","Econometrics","Panel Regression","Fixed Effects","Python SDK","OLS Regression","Regression Model","Pooled OLS","Regression Chart"]},sidebar:"tutorialSidebar",previous:{title:"options",permalink:"/openbb-docs/sdk/reference/econometrics/options"},next:{title:"pols",permalink:"/openbb-docs/sdk/reference/econometrics/pols"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"econometrics.panel - Reference | OpenBB SDK Docs"}),"\n","\n",(0,r.jsxs)(o.A,{children:[(0,r.jsxs)(a.A,{value:"model",label:"Model",default:!0,children:[(0,r.jsx)(t.p,{children:"Based on the regression type, this function decides what regression to run."}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L34",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.econometrics.panel(Y: pd.DataFrame, X: pd.DataFrame, regression_type: str = "OLS", entity_effects: bool = False, time_effects: bool = False)\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe containing the dependent variable."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"X"}),(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe containing the independent variables."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regression_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"The type of regression you wish to execute."}),(0,r.jsx)(t.td,{children:"OLS"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entity_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to apply Fixed Effects on entities."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to apply Fixed Effects on time."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Any"}),(0,r.jsx)(t.td,{children:"A regression model"})]})})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.econometrics.load("wage_panel")\ndf = df.set_index(["nr","year"])\nX = df[["exper","educ","union"]]\nY = df["lwage"]\npooled_ols_model = openbb.econometrics.panel(Y,X,"POLS")\nprint(pooled_ols_model.summary)\n'})}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"PooledOLS Estimation Summary\n================================================================================\nDep. Variable:                  lwage   R-squared:                        0.1634\nEstimator:                  PooledOLS   R-squared (Between):              0.1686\nNo. Observations:                4360   R-squared (Within):               0.1575\nDate:                Sun, Nov 13 2022   R-squared (Overall):              0.1634\nTime:                        13:04:02   Log-likelihood                   -3050.4\nCov. Estimator:            Unadjusted\n                                        F-statistic:                      283.68\nEntities:                         545   P-value                           0.0000\nAvg Obs:                       8.0000   Distribution:                  F(3,4356)\nMin Obs:                       8.0000\nMax Obs:                       8.0000   F-statistic (robust):             283.68\n                                        P-value                           0.0000\nTime periods:                       8   Distribution:                  F(3,4356)\nAvg Obs:                       545.00\nMin Obs:                       545.00\nMax Obs:                       545.00\n                            Parameter Estimates\n==============================================================================\n            Parameter  Std. Err.     T-stat    P-value    Lower CI    Upper CI\n------------------------------------------------------------------------------\nconst         -0.0308     0.0620    -0.4965     0.6196     -0.1523      0.0908\nexper          0.0561     0.0028     20.220     0.0000      0.0507      0.0616\neduc           0.1080     0.0045     24.034     0.0000      0.0992      0.1168\nunion          0.1777     0.0172     10.344     0.0000      0.1441      0.2114\n==============================================================================\n"})}),(0,r.jsx)(t.hr,{})]}),(0,r.jsxs)(a.A,{value:"view",label:"Chart",children:[(0,r.jsx)(t.p,{children:"Based on the regression type, this function decides what regression to run."}),(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L23",children:"link"}),"]"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.econometrics.panel_chart(Y: pd.DataFrame, X: pd.DataFrame, regression_type: str = "OLS", entity_effects: bool = False, time_effects: bool = False, export: str = "")\n'})}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"data"}),(0,r.jsx)(t.td,{children:"dict"}),(0,r.jsx)(t.td,{children:"A dictionary containing the datasets."}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regression_variables"}),(0,r.jsx)(t.td,{children:"list"}),(0,r.jsxs)(t.td,{children:["The regressions variables entered where the first variable is",(0,r.jsx)("br",{}),"the dependent variable.",(0,r.jsx)("br",{}),"each column/dataset combination."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"regression_type"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsxs)(t.td,{children:["The type of regression you wish to execute. Choose from:",(0,r.jsx)("br",{}),"OLS, POLS, RE, BOLS, FE"]}),(0,r.jsx)(t.td,{children:"OLS"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"entity_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to apply Fixed Effects on entities."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"time_effects"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to apply Fixed Effects on time."}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Format to export data"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"The dataset used, the dependent variable, the independent variable and"}),(0,r.jsx)(t.td,{})]})})]}),(0,r.jsx)(t.hr,{})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:n,children:t})}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(96540),s=n(34164),i=n(23104),o=n(56347),a=n(205),l=n(57485),d=n(31682),c=n(89466);function h(e){return function(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??h(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[d,h]=x({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),f=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=n(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var j=n(74848);function g(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,o.zy)(),u=e=>{const t=e.currentTarget,n=d.indexOf(t),s=l[n].value;s!==r&&(c(t),a(s))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:p,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":r===t,"border-b-2 text-[#669dcb] border-[#669dcb]":r===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":r===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":r!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":r!==t&&h.startsWith("/terminal")}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);