"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78271],{98225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(74848),i=n(28453),a=n(94331);const s={title:"OpenBB Copilot",sidebar_position:8,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",keywords:["OpenBB Copilot","copilot","voice command","agent","assistant","Natural language processing","Large language model","OpenAI"]},r=void 0,l={id:"pro/openbb-copilot",title:"OpenBB Copilot",description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",source:"@site/content/pro/openbb-copilot.md",sourceDirName:"pro",slug:"/pro/openbb-copilot",permalink:"/pro/openbb-copilot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/pro/openbb-copilot.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1727894897e3,sidebarPosition:8,frontMatter:{title:"OpenBB Copilot",sidebar_position:8,description:"Learn how to use OpenBB Copilot to interact with the OpenBB Terminal Pro",keywords:["OpenBB Copilot","copilot","voice command","agent","assistant","Natural language processing","Large language model","OpenAI"]},sidebar:"tutorialSidebar",previous:{title:"Bring your own data",permalink:"/pro/tutorials/bring-data"},next:{title:"Overview",permalink:"/pro/data-connector"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How chats work",id:"how-chats-work",level:2},{value:"General question answering",id:"general-question-answering",level:2},{value:"Interacting with Data using OpenBB Copilot",id:"interacting-with-data-using-openbb-copilot",level:2},{value:"Adding widgets explicitly as context",id:"adding-widgets-explicitly-as-context",level:3},{value:"Automatically using data from the dashboard",id:"automatically-using-data-from-the-dashboard",level:3},{value:"Using your own files",id:"using-your-own-files",level:3},{value:"Adding custom data as a widget",id:"adding-custom-data-as-a-widget",level:3},{value:"Automatically using data sources available to Terminal",id:"automatically-using-data-sources-available-to-terminal",level:3},{value:"Searching the Web",id:"searching-the-web",level:3},{value:"Citations, Status Updates, and Artifacts",id:"citations-status-updates-and-artifacts",level:2},{value:"Artifacts",id:"artifacts",level:3},{value:"Creating widgets from OpenBB Copilot responses",id:"creating-widgets-from-openbb-copilot-responses",level:2},{value:"Prompting guidelines",id:"prompting-guidelines",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.A,{title:"Copilot | OpenBB Terminal Docs"}),"\n",(0,o.jsx)(t.p,{children:"OpenBB copilot is your companion to interact with the OpenBB Terminal."}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/open_copilot.jpg",alt:"open openbb copilot",width:"70%",height:"70%"})}),"\n",(0,o.jsx)(t.p,{children:"To open OpenBB Copilot, click on the purple icon located at the center right of the\nTerminal screen."}),"\n",(0,o.jsx)(t.p,{children:"Under most circumstances, you can treat OpenBB Copilot like your very own\npersonal research assistant. OpenBB Copilot has access to the widgets on your\ndashboard, the OpenBB API and any custom endpoints you have added, as well as\nyour uploaded files. Using all of these sources, OpenBB Copilot can assist you in\nperforming a wide variety of tasks."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/copilot_opened.jpg",alt:"opened openbb copilot",width:"70%",height:"70%"})}),"\n",(0,o.jsx)(t.p,{children:"We'll be exploring each of these features in the following sections below."}),"\n",(0,o.jsx)(t.h2,{id:"how-chats-work",children:"How chats work"}),"\n",(0,o.jsx)(t.p,{children:"OpenBB Copilot is a chat-based assistant that uses the conversation history to\nhelp answer your queries.  This allows you to ask follow-up questions or guide\nOpenBB Copilot while performing tasks."}),"\n",(0,o.jsx)(t.p,{children:"For example, if you ask about the price-to-earnings (P/E) ratio, and then follow\nup by asking about other important financial ratios, OpenBB Copilot will\nremember the context and suggest relevant ratios:"}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/pe_ratio_chat_example.jpg",alt:"chat history openbb copilot",width:"40%",height:"40%"})}),"\n",(0,o.jsx)(t.p,{children:"If you'd like to clear the history of the current conversation, you can do so by\nclicking on the trashcan icon in the OpenBB Copilot chatbox in the upper right\ncorner. It is usually a good idea to clear the chat history when you have a new\nquestion that is unrelated to your current conversation."}),"\n",(0,o.jsx)(t.table,{children:(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/clear_chat_button.jpg",alt:"clear chat button openbb copilot"})}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/cleared_chat.jpg",alt:"cleared chat openbb copilot"})})]})})}),"\n",(0,o.jsx)(t.h2,{id:"general-question-answering",children:"General question answering"}),"\n",(0,o.jsx)(t.p,{children:"OpenBB Copilot is capable of answering general financial questions and answers.\nFor example, you can ask Copilot things like:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:'"What\'s the difference between stocks and bonds?"'}),"\n",(0,o.jsx)(t.li,{children:'"Explain inflation."'}),"\n",(0,o.jsx)(t.li,{children:'"Can you explain the concept of dollar-cost averaging?"'}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For general financial questions, OpenBB Copilot will rely on its underlying\nmodel's extensive training data to formulate answers. We encourage users to\nexplore this functionality with in-depth and varied questions."}),"\n",(0,o.jsx)(t.h2,{id:"interacting-with-data-using-openbb-copilot",children:"Interacting with Data using OpenBB Copilot"}),"\n",(0,o.jsx)(t.h3,{id:"adding-widgets-explicitly-as-context",children:"Adding widgets explicitly as context"}),"\n",(0,o.jsx)(t.p,{children:"Sometimes, you might want OpenBB Copilot to analyze only specific widgets on your dashboard. For example, if you want to deep dive into an earnings transcript without considering other data, you can do that."}),"\n",(0,o.jsx)(t.p,{children:'To focus on certain widgets, click the "Add widgets as context" button on the widgets you want OpenBB Copilot to use. Once selected, OpenBB Copilot will only access data from those widgets, ignoring all others. This allows you to carry out a more targeted analysis while using OpenBB Copilot.'}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/add_specific_widget_context.jpg",alt:"add widget context openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_earnings_transcript_chat_example.jpg",alt:"query widget context openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.h3,{id:"automatically-using-data-from-the-dashboard",children:"Automatically using data from the dashboard"}),"\n",(0,o.jsx)(t.p,{children:"OpenBB Copilot is incredibly powerful, as it can access information from all widgets on your current dashboards, the OpenBB API, and your uploaded data. It will begin by scanning your dashboard for relevant information based on your queries. If one is not found, it will move on to the other available sources listed above."}),"\n",(0,o.jsx)(t.p,{children:"For example, if you ask for a summary of the latest news about Apple, OpenBB\nCopilot will retrieve the Company News widget data on your dashboard (provided\nthe widget has been added to the dashboard) to provide an answer."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/aapl_+news_chat_example.jpg",alt:"aapl news openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.p,{children:"Since OpenBB Copilot can access data from any widget in the active dashboard, we\nencourage users to experiment with adding different kinds of widgets and\nexperimenting with various queries."}),"\n",(0,o.jsx)(t.p,{children:'For example, OpenBB Copilot is particularly effective at summarizing earnings call transcripts\nfrom the "Earnings Transcripts" widget.'}),"\n",(0,o.jsx)(t.h3,{id:"using-your-own-files",children:"Using your own files"}),"\n",(0,o.jsx)(t.p,{children:"OpenBB Copilot can also analyze and answer questions using files you provide, such as TXT, PDF, CSV, and XLSX files. To upload a file, simply drag and drop it into the OpenBB Copilot chat box or click the paper clip icon."}),"\n",(0,o.jsx)(t.p,{children:"Once uploaded, OpenBB Copilot can use the data from these files to answer your questions. If it does, it will cite the specific files (for PDFs, the exact page) it referenced."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["When uploading files directly to OpenBB Copilot, we use filenames to determine if a file is relevant to your query. For best results, use descriptive filenames.\nFor example, if you have a technical report from Tesla released in 2024, a good filename would be ",(0,o.jsx)(t.code,{children:"tsla_technical_report_2024.pdf"}),"."]})}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/add_custom_data_chat_example.jpg",alt:"add custom data openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/custom_data_chat_example.jpg",alt:"query custom data openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.h3,{id:"adding-custom-data-as-a-widget",children:"Adding custom data as a widget"}),"\n",(0,o.jsx)(t.p,{children:"You can also add custom data as a widget to your dashboard. This allows you to analyze the data in the same way you would with any other widget.  The custom data can either be your own files, API endpoints, custom backends or databases."}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://docs.openbb.co/pro/data-connector",children:"Input Data"})," for more details."]}),"\n",(0,o.jsx)(t.h3,{id:"automatically-using-data-sources-available-to-terminal",children:"Automatically using data sources available to Terminal"}),"\n",(0,o.jsx)(t.p,{children:"As mentioned earlier, OpenBB Copilot can also access external data sources to provide additional insights. This allows you to ask questions that go beyond the data displayed on your dashboard."}),"\n",(0,o.jsx)(t.p,{children:"External data can either be the OpenBB API or your own custom endpoints."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Querying the OpenBB API"})}),"\n",(0,o.jsx)(t.p,{children:"For example, you can ask OpenBB Copilot to fetch the latest stock price for a specific company, or to provide a summary of the latest news for a particular stock without having to add a widget to your dashboard."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/news_openbb_api_chat_example.jpg",alt:"openbb copilot api",width:"50%",height:"50%"})}),"\n",(0,o.jsxs)(t.p,{children:["To query a custom endpoint, please explore the ",(0,o.jsx)(t.a,{href:"/pro/custom-backend/custom-backend",children:"Custom Backend"})," documentation."]}),"\n",(0,o.jsx)(t.h3,{id:"searching-the-web",children:"Searching the Web"}),"\n",(0,o.jsx)(t.p,{children:"The OpenBB Copilot has the ability to search the web for information that is not available in the data sources it has access to. This allows you to ask questions that go beyond the data displayed on your dashboard."}),"\n",(0,o.jsxs)(t.p,{children:["To search the web, the user needs to be explicit in their query by adding the ",(0,o.jsx)(t.code,{children:"@web"})," keyword in the query."]}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/web_search_chat_example.jpg",alt:"web search openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.h2,{id:"citations-status-updates-and-artifacts",children:"Citations, Status Updates, and Artifacts"}),"\n",(0,o.jsx)(t.p,{children:"When querying OpenBB Copilot, it is important to understand which data OpenBB\nCopilot used to answer your query. As a result, OpenBB Copilot will always cite the data\nsource it referenced when responding to your query."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/citation_chat_example.jpg",alt:"citations openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.p,{children:'We go one step further by providing live status updates which notify the user on actions taken by the OpenBB Copilot.\nFor example, if the OpenBB Copilot is querying your uploaded data, it will provide a status update saying "Querying user files".'}),"\n",(0,o.jsx)(t.h3,{id:"artifacts",children:"Artifacts"}),"\n",(0,o.jsx)(t.p,{children:"A special kind of status update is the result artifact which has the final data used to answer the query. It either be a text or a table.\nThe contents of the artifact are produced by the reasoning of the OpenBB Copilot."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/artifact_chat_example.jpg",alt:"result artifact openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.p,{children:"To ensure transparency and extend the analysis, OpenBB Copilot will also return intermediate result artifacts that were used as reasoning steps to arrive to the final artifact and thus the answer."}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/intermediate_result_artifact_chat_example.jpg",alt:"intermediate result artifact openbb copilot",width:"80%",height:"80%"})}),"\n",(0,o.jsx)(t.h2,{id:"creating-widgets-from-openbb-copilot-responses",children:"Creating widgets from OpenBB Copilot responses"}),"\n",(0,o.jsx)(t.p,{children:'Each time OpenBB Copilot generates a response, it will have a "Create widget from text" or "Create widget from table" button. Clicking this button will create a new widget on your dashboard based on the response.'}),"\n",(0,o.jsx)(t.table,{children:(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation_button.jpg",alt:"widget generate button openbb copilot"})}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_creation.jpg",alt:"widget generate button openbb copilot"})}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/text_widget_created.jpg",alt:"widget generate button openbb copilot"})})]})})}),"\n",(0,o.jsx)(t.table,{children:(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation_button.jpg",alt:"widget generate button openbb copilot"})}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_creation.jpg",alt:"widget generate button openbb copilot"})}),(0,o.jsx)(t.th,{style:{textAlign:"center"},children:(0,o.jsx)(t.img,{src:"https://openbb-assets.s3.amazonaws.com/docs/copilot/table_widget_created.jpg",alt:"widget generate button openbb copilot"})})]})})}),"\n",(0,o.jsx)(t.h2,{id:"prompting-guidelines",children:"Prompting guidelines"}),"\n",(0,o.jsx)(t.p,{children:"The OpenBB Copilot is designed to assist you in your research and analysis. To get the most out of OpenBB Copilot, it is\nimportant to have a good understanding of prompting techniques."}),"\n",(0,o.jsxs)(t.p,{children:["We recommend reading through the ",(0,o.jsx)(t.a,{href:"https://beta.openai.com/docs/guides/prompt-engineering",children:"OpenAI Prompt Engineering Guide"})," to learn more about how to structure your prompts to get the best results."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var o=n(5260),i=n(74848);function a(e){let{title:t}=e;return(0,i.jsx)(o.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);