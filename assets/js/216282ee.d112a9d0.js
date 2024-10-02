"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[112],{2581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),s=t(28453),i=t(94331);const r={title:"LLM Friendly Mode",sidebar_position:4,description:"This guide provides detailed instructions on how to enable LLM mode in the OpenBB Platform.",keywords:["OpenBB Platform","LLM mode","LLM","ChatGPT","AI","Financial Agents","LLM Compatibility","Finance AI","Custom commands","Python Interface"]},a=void 0,l={id:"platform/user_guides/llm_mode",title:"LLM Friendly Mode",description:"This guide provides detailed instructions on how to enable LLM mode in the OpenBB Platform.",source:"@site/content/platform/user_guides/llm_mode.mdx",sourceDirName:"platform/user_guides",slug:"/platform/user_guides/llm_mode",permalink:"/platform/user_guides/llm_mode",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/user_guides/llm_mode.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1727894897e3,sidebarPosition:4,frontMatter:{title:"LLM Friendly Mode",sidebar_position:4,description:"This guide provides detailed instructions on how to enable LLM mode in the OpenBB Platform.",keywords:["OpenBB Platform","LLM mode","LLM","ChatGPT","AI","Financial Agents","LLM Compatibility","Finance AI","Custom commands","Python Interface"]},sidebar:"tutorialSidebar",previous:{title:"User Settings & Environment Variables",permalink:"/platform/user_guides/settings_and_environment_variables"},next:{title:"Dynamic Command Execution",permalink:"/platform/user_guides/dynamic_command_execution"}},d={},c=[{value:"Enabling LLM Mode",id:"enabling-llm-mode",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"Enable LLM Mode - How-To | OpenBB Platform Docs"}),"\n",(0,o.jsxs)(n.p,{children:["The OpenBB Platform provides a way to enable the Large Language Model (LLM) mode, which allows you to use LLM frameworks such as ",(0,o.jsx)(n.a,{href:"https://github.com/jackmpcollins/magentic",children:"Magentic"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/langchain-ai/langchain",children:"Langchain"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/deepset-ai/haystack",children:"Haystack"}),", and more."]}),"\n",(0,o.jsx)(n.p,{children:"This guide outlines the steps to enable LLM mode in the OpenBB Platform."}),"\n",(0,o.jsx)(n.h2,{id:"enabling-llm-mode",children:"Enabling LLM Mode"}),"\n",(0,o.jsx)(n.p,{children:"We first start by importing the OpenBB Platform:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"from openbb import obb\n"})}),"\n",(0,o.jsx)(n.p,{children:"The LLM mode is made possible by setting the system and user preferences to an LLM-compatible mode."}),"\n",(0,o.jsx)(n.p,{children:"First, we set the user preference:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'obb.user.preferences.output_type="llm"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This line of code converts the ",(0,o.jsx)(n.code,{children:"OBBject"})," response data results into a format that works good with LLM models. This is based on our own experience with building LLM agents for financial data. You can try other output types such as ",(0,o.jsx)(n.code,{children:"dict"}),", or similar. You can also build your custom output type."]}),"\n",(0,o.jsx)(n.p,{children:"Next, we set the system preferences:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"obb.system.python_settings.docstring_sections=['description', 'examples']\n"})}),"\n",(0,o.jsx)(n.p,{children:"This system preference trims the docstrings of the commands so that they can fit into the LLM model's context size and also avoid redundant information. The redundant information comes from the information inside the signature of the command that is also written in the docstring."}),"\n",(0,o.jsx)(n.p,{children:"As our docstrings are modular we can easily choose which section of the docstrings to include. Available docstring sections are the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"description"}),"\n",(0,o.jsx)(n.li,{children:"parameters"}),"\n",(0,o.jsx)(n.li,{children:"returns"}),"\n",(0,o.jsx)(n.li,{children:"examples"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The next step is to limit the size of the docstrings:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"obb.system.python_settings.docstring_max_length=1024\n"})}),"\n",(0,o.jsx)(n.p,{children:"We do this to ensure that the docstrings are not too long for the LLM model to process. The LLM model has a limit on the number of tokens it can process at once, and this setting ensures that the docstrings are within that limit."}),"\n",(0,o.jsxs)(n.p,{children:["Finally, we can import ",(0,o.jsx)(n.code,{children:"openbb"})," and rebuild the Python static assets to apply these system changes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import openbb\nopenbb.build()\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you have successfully enabled LLM mode in the OpenBB Platform. You can now use LLM frameworks to interact with the OpenBB Platform and build financial agents that can understand and respond to financial data."}),"\n",(0,o.jsx)(n.p,{children:"For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from magentic import prompt_chain, FunctionCall, OpenaiChatModel\n\n@prompt_chain(\n    "You are a helpful financial agent that can use function calling to retrieve data.\\nUser Query: {query}",\n    functions=[obb.equity.price.quote],\n    model=OpenaiChatModel(model="gpt-4-turbo-preview")\n)\ndef llm(query: str) -> FunctionCall | str: ...\n\nr = llm(query="What is the current stock price of AAPL?")\nr\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var o=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(o.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);