"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87184],{49075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(74848),d=t(28453),i=t(94331);const r={title:"widgets.json",sidebar_position:13,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},l=void 0,a={id:"terminal/custom-backend/widgets.json",title:"widgets.json",description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",source:"@site/content/terminal/custom-backend/widgets.json.md",sourceDirName:"terminal/custom-backend",slug:"/terminal/custom-backend/widgets.json",permalink:"/terminal/custom-backend/widgets.json",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/custom-backend/widgets.json.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:173197409e4,sidebarPosition:13,frontMatter:{title:"widgets.json",sidebar_position:13,description:"Learn how to integrate your own backend with OpenBB Terminal Pro using the cookie-cutter or language-agnostic API approaches, with illustrative guides and principles for handling widget.json files, APIs, interfaces, Python, FastAPI and more.",keywords:["widgets.json","OpenBB API","Endpoint integration","widget configuration","Language-Agnostic API","API implementation","Python","FastAPI","Terminal Pro widgets","Widget definitions"]},sidebar:"tutorialSidebar",previous:{title:"Custom Backend",permalink:"/terminal/custom-backend/"},next:{title:"Open Source Platform Integration",permalink:"/terminal/platform-installer"}},c={},o=[{value:"Example widgets.json",id:"example-widgetsjson",level:2},{value:"Special Properties",id:"special-properties",level:2},{value:"Date Modifier",id:"date-modifier",level:3},{value:"Examples",id:"examples",level:4},{value:"ChartView chart types",id:"chartview-chart-types",level:3},{value:"formatterFn",id:"formatterfn",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Widgets.json | OpenBB Terminal Pro Docs"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"widgets.json"})," file is the bridge between your backend and OpenBB Terminal widgets. Each entry in this file will directly map to a widget in the app. You can find examples ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Below are all of the values you can set along with a description for each."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," (required)"]}),(0,s.jsxs)(n.td,{children:["The display name of the widget shown to the user. Example: ",(0,s.jsx)(n.code,{children:'"Chains chart example"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"description"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," (required)"]}),(0,s.jsxs)(n.td,{children:["A brief description of the widget for user info and selection menu. Example: ",(0,s.jsx)(n.code,{children:'"Get current TVL of all chains and plot it!"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"endpoint"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"})," (required)"]}),(0,s.jsxs)(n.td,{children:["The backend API endpoint for retrieving data. Example: ",(0,s.jsx)(n.code,{children:'"chains"'}),". Possible values: Any valid API endpoint path as a string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"category"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The category for organizing widgets. Example: ",(0,s.jsx)(n.code,{children:'"crypto"'}),". Possible values: Any string representing a category."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subCategory"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Secondary category for refining search results. Example: ",(0,s.jsx)(n.code,{children:'"fundamentals"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defaultViz"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Default visualization type for the widget. Possible values: ",(0,s.jsx)(n.code,{children:'"chart"'}),", ",(0,s.jsx)(n.code,{children:'"table"'}),". Default: ",(0,s.jsx)(n.code,{children:'"table"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gridData.w"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["The width of the widget in grid units. Example: ",(0,s.jsx)(n.code,{children:"20"}),". Possible values: Any positive integer. Maximum value : ",(0,s.jsx)(n.code,{children:"40"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gridData.h"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["The height of the widget in grid units. Example: ",(0,s.jsx)(n.code,{children:"9"}),". Possible values: Any positive integer. Maximum value : ",(0,s.jsx)(n.code,{children:"100"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.dataKey"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["A key to identify the data within the widget. Example: ",(0,s.jsx)(n.code,{children:'"customDataKey"'}),". Possible values: Any string representing a data key."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.enableCharts"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Enables chart visualization for table data. Example: ",(0,s.jsx)(n.code,{children:"true"}),". Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.showAll"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Displays all available data in the table. Example: ",(0,s.jsx)(n.code,{children:"true"}),". Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.chartView.enabled"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Sets the chart view as the default view. Example: ",(0,s.jsx)(n.code,{children:"true"}),". Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.chartView.chartType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies the type of chart to display. Example: ",(0,s.jsx)(n.code,{children:'"column"'}),". Possible values: ",(0,s.jsx)(n.a,{href:"#chartview-chart-types",children:"ChartView chart types"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object[]"})}),(0,s.jsx)(n.td,{children:"A list of the column definitions to be configured for the widget."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.field"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The name of the field from the JSON data. Example: ",(0,s.jsx)(n.code,{children:'"column1"'}),". Possible values: Any string matching a key in the data source."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.headerName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The display name of the column header. Example: ",(0,s.jsx)(n.code,{children:'"Column 1"'}),". Possible values: Any string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.chartDataType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies how data is treated in a chart. Example: ",(0,s.jsx)(n.code,{children:'"category"'}),". Possible values: ",(0,s.jsx)(n.code,{children:'"category"'}),", ",(0,s.jsx)(n.code,{children:'"series"'}),", ",(0,s.jsx)(n.code,{children:'"time"'}),", ",(0,s.jsx)(n.code,{children:'"excluded"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.cellDataType"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies the data type of the cell. Example: ",(0,s.jsx)(n.code,{children:'"text"'}),". Possible values: ",(0,s.jsx)(n.code,{children:'"text"'}),", ",(0,s.jsx)(n.code,{children:'"number"'}),", ",(0,s.jsx)(n.code,{children:'"boolean"'}),", ",(0,s.jsx)(n.code,{children:'"date"'}),", ",(0,s.jsx)(n.code,{children:'"dateString"'}),", ",(0,s.jsx)(n.code,{children:'"object"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.formatterFn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies how to format the data. Example: ",(0,s.jsx)(n.code,{children:'"int"'}),". Possible values: ",(0,s.jsx)(n.a,{href:"#formatterfn",children:(0,s.jsx)(n.code,{children:"formatterFn"})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.renderFn"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Specifies a rendering function for cell data. Example: ",(0,s.jsx)(n.code,{children:'"titleCase"'}),". Possible values: ",(0,s.jsx)(n.code,{children:'"greenRed"'}),", ",(0,s.jsx)(n.code,{children:'"titleCase"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.width"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Specifies the width of the column in pixels. Example: ",(0,s.jsx)(n.code,{children:"100"}),". Possible values: Any positive integer."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.maxWidth"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Specifies the maximum width of the column in pixels. Example: ",(0,s.jsx)(n.code,{children:"200"}),". Possible values: Any positive integer."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.minWidth"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Specifies the minimum width of the column in pixels. Example: ",(0,s.jsx)(n.code,{children:"50"}),". Possible values: Any positive integer."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.hide"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Hides the column from the table. Example: ",(0,s.jsx)(n.code,{children:"false"}),". Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"data.table.columnsDefs.pinned"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Pins the column to the left or right of the table. Example: ",(0,s.jsx)(n.code,{children:'"left"'}),". Possible values: ",(0,s.jsx)(n.code,{children:'"left"'}),", ",(0,s.jsx)(n.code,{children:'"right"'}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"object[]"})}),(0,s.jsx)(n.td,{children:"A list of query parameters that can be configured for the widget - these will be passed to your API."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The type of the parameter. Example: ",(0,s.jsx)(n.code,{children:'"date"'}),". Possible values: ",(0,s.jsx)(n.code,{children:'"date"'}),", ",(0,s.jsx)(n.code,{children:'"text"'}),", ",(0,s.jsx)(n.code,{children:'"ticker"'}),", ",(0,s.jsx)(n.code,{children:'"number"'}),", ",(0,s.jsx)(n.code,{children:'"boolean"'}),". (note: ",(0,s.jsx)(n.code,{children:"ticker"})," will use our equity list)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.paramName"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The name of the parameter in the URL. Example: ",(0,s.jsx)(n.code,{children:'"startDate"'}),". Possible values: Any string representing a query parameter name."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.value"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"number"}),", ",(0,s.jsx)(n.code,{children:"boolean"})]}),(0,s.jsxs)(n.td,{children:["The default value of the parameter. Example: ",(0,s.jsx)(n.code,{children:'"2024-01-01"'}),". Possible values : ",(0,s.jsx)(n.code,{children:'"text"'}),", ",(0,s.jsx)(n.code,{children:'"number"'}),", ",(0,s.jsx)(n.code,{children:'"boolean"'}),", ",(0,s.jsx)(n.a,{href:"#date-modifier",children:(0,s.jsx)(n.code,{children:"DateModifierValue"})})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.label"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The label to display in the UI for the parameter. Example: ",(0,s.jsx)(n.code,{children:'"Start Date"'}),". Possible values: Any string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.show"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["Displays the parameter in the UI. Example: ",(0,s.jsx)(n.code,{children:"true"}),". Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.description"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["Description of the parameter, shown on hover. Example: ",(0,s.jsx)(n.code,{children:'"The start date for the data"'}),". Possible values: Any string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.multiSelect"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsxs)(n.td,{children:["If you want to allow multiple values to be selected from your parameter options Possible values: Possible values: ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.options.label"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})}),(0,s.jsxs)(n.td,{children:["The label for a dropdown option. Example: ",(0,s.jsx)(n.code,{children:'"Option 1"'}),". Possible values: Any string."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params.options.value"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"number"}),", ",(0,s.jsx)(n.code,{children:"boolean"})]}),(0,s.jsxs)(n.td,{children:["The value for a dropdown option. Example: ",(0,s.jsx)(n.code,{children:'"option1"'}),". Possible values: A value corresponding to the ",(0,s.jsx)(n.code,{children:"type"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"array of strings"})}),(0,s.jsxs)(n.td,{children:["Specifies the data source(s) for the widget. Example: ",(0,s.jsx)(n.code,{children:'["API", "Database"]'}),". Possible values: Any string describing a data source."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refetchInterval"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Time in milliseconds before the widget's data will refresh if on the page - default: ",(0,s.jsx)(n.code,{children:"900000"})," (15m)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"staleTime"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsxs)(n.td,{children:["Time in milliseconds before the widget's data is considered stale and will refresh on the next visit to the dashboard. default: ",(0,s.jsx)(n.code,{children:"300000"}),". milliseconds. (5m)"]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-widgetsjson",children:"Example widgets.json"}),"\n",(0,s.jsxs)(n.p,{children:["Below is an example ",(0,s.jsx)(n.code,{children:"widgets.json"})," with a single widget defined. This widget will default to a column chart but have the ability to switch between a table and chart view."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "custom_widget": {\n        "name": "Custom Widget Example",\n        "description": "A widget to demonstrate custom configuration",\n        "endpoint": "custom-endpoint",\n        "data": {\n            "dataKey": "customDataKey",\n            "table": {\n                "enableCharts": true,\n                "showAll": true,\n                "chartView": {\n                    "enabled": true,\n                    "chartType": "column"\n                },\n                "columnsDefs": [\n                    {\n                        "field": "column1",\n                        "headerName": "Column 1",\n                        "chartDataType": "category",\n                        "cellDataType": "text",\n                        "formatterFn": "none",\n                        "renderFn": "titleCase",\n                        "width": 100,\n                        "maxWidth": 200,\n                        "minWidth": 50,\n                        "hide": false,\n                        "pinned": "left"\n                    },\n                    {\n                        "field": "column2",\n                        "headerName": "Column 2",\n                        "chartDataType": "series",\n                        "cellDataType": "number",\n                        "formatterFn": "int",\n                        "renderFn": "greenRed",\n                        "width": 150\n                    }\n                ]\n            }\n        },\n        "params": [\n            {\n                "type": "date",\n                "paramName": "startDate",\n                "value": "2024-01-01",\n                "label": "Start Date",\n                "show": true,\n                "description": "The start date for the data",\n            },\n            {\n                "type": "text",\n                "paramName": "ticker",\n                "value": "AAPL",\n                "label": "Ticker",\n                "show": true,\n                "description": "Stock ticker symbol",\n            },\n            {\n                "type": "text",\n                "paramName": "colors",\n                "value": "red",\n                "label": "Colors",\n                "show": true,\n                "description": "Stock ticker symbol",\n                "multiSelect": true,\n                "options": [\n                  { "label": "Red", "value": "red" },\n                  { "label": "Green", "value": "green" },\n                  { "label": "Blue", "value": "blue" }\n                ],\n            }\n        ],\n        "source": [\n            "My First API"\n        ],\n        "refetchInterval" : 900000,\n        "staleTime": 300000\n    }\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"special-properties",children:"Special Properties"}),"\n",(0,s.jsx)(n.h3,{id:"date-modifier",children:"Date Modifier"}),"\n",(0,s.jsx)(n.p,{children:"This is used to display a dynamic date."}),"\n",(0,s.jsxs)(n.p,{children:["The reference is ",(0,s.jsx)(n.code,{children:"$currentDate"})," and if a user wants to add or substract they need to append to the variable:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"h, for hour"}),"\n",(0,s.jsx)(n.li,{children:"d, for day"}),"\n",(0,s.jsx)(n.li,{children:"w, for week"}),"\n",(0,s.jsx)(n.li,{children:"M, for month"}),"\n",(0,s.jsx)(n.li,{children:"y, for year"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For instance, ",(0,s.jsx)(n.code,{children:"$currentDate-1w"})," stands for 1 week ago."]}),"\n",(0,s.jsxs)(n.p,{children:["If you don't want to set a date you can omit the value parameter or pass ",(0,s.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "paramName": "start_date",\n    "value": "$currentDate-2y",\n    "label": "Start Date",\n    "type": "date",\n    "description": "Current Date for the stock price"\n  },\n  {\n    "paramName": "end_date",\n    "value": "$currentDate+1d",\n    "label": "End Date",\n    "type": "date",\n    "description": "End Date for the stock price"\n  },\n    {\n    "paramName": "end_date",\n    "value": null,\n    "label": "End Date",\n    "type": "date",\n    "description": "End Date for the stock price"\n  },\n  {\n    "paramName": "interval",\n    "value": "1d",\n    "label": "Interval",\n    "options": [\n      { "label": "Daily", "value": "1d" },\n      { "label": "Weekly", "value": "1w" },\n      { "label": "Monthly", "value": "1m" }\n    ],\n    "type": "text",\n    "description": "Select the interval"\n  }\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"chartview-chart-types",children:"ChartView chart types"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"chartType"})}),": The type of chart to display by default. These charts are provided using the AgGrid library. Custom charts can also be created using Plotly. For examples, refer to the ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/backend-for-terminal-pro/tree/main",children:"GitHub repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Allowed values:"})," column, groupedColumn, stackedColumn, normalizedColumn, bar, groupedBar, stackedBar, normalizedBar, line, scatter, bubble, pie, donut, doughnut, area, stackedArea, normalizedArea, histogram, radarLine, radarArea, nightingale, radialColumn, radialBar, sunburst, rangeBar, rangeArea, boxPlot, treemap, heatmap, waterfall"]}),"\n",(0,s.jsx)(n.h2,{id:"formatterfn",children:"formatterFn"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"formatterFn"})," (optional): Specifies the function used to format the data in the table. The following values are allowed:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"int"}),": Formats the number as an integer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"none"}),": Does not format the number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"percent"}),": Adds ",(0,s.jsx)(n.code,{children:"%"})," to the number."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"normalized"}),": Multiplies the number by 100."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"normalizedPercent"}),": Multiplies the number by 100 and adds ",(0,s.jsx)(n.code,{children:"%"})," (e.g., ",(0,s.jsx)(n.code,{children:"0.5"})," becomes ",(0,s.jsx)(n.code,{children:"50 %"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"dateToYear"}),": Converts a date to just the year."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(5260),d=t(74848);function i(e){let{title:n}=e;return(0,d.jsx)(s.A,{children:(0,d.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const d={},i=s.createContext(d);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);