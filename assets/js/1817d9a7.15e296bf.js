"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11621],{13579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=r(74848),s=r(28453),d=r(94331);const i={title:"nhits",description:"The nhits page provide detailed parameters for forecasting using the Temporal Fusion Transformer model for predicting time-series. A step by step guide to use nhits in a command-line along with additional key performance indicators are provided. This is an effective resource for financial market predictions and similar time-series forecasting tasks with tutorial and potential usage for nn models. ",keywords:["nhits","darts forecasting","tft model","time-series forecasting","forecast parameters","nn models","tensorflow models","neural network models","stock market predict","financial forecast","nhits command"]},c=void 0,l={id:"terminal/reference/forecast/nhits",title:"nhits",description:"The nhits page provide detailed parameters for forecasting using the Temporal Fusion Transformer model for predicting time-series. A step by step guide to use nhits in a command-line along with additional key performance indicators are provided. This is an effective resource for financial market predictions and similar time-series forecasting tasks with tutorial and potential usage for nn models. ",source:"@site/content/terminal/reference/forecast/nhits.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/nhits",permalink:"/openbb-docs/terminal/reference/forecast/nhits",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/forecast/nhits.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"nhits",description:"The nhits page provide detailed parameters for forecasting using the Temporal Fusion Transformer model for predicting time-series. A step by step guide to use nhits in a command-line along with additional key performance indicators are provided. This is an effective resource for financial market predictions and similar time-series forecasting tasks with tutorial and potential usage for nn models. ",keywords:["nhits","darts forecasting","tft model","time-series forecasting","forecast parameters","nn models","tensorflow models","neural network models","stock market predict","financial forecast","nhits command"]},sidebar:"tutorialSidebar",previous:{title:"nbeats",permalink:"/openbb-docs/terminal/reference/forecast/nbeats"},next:{title:"plot",permalink:"/openbb-docs/terminal/reference/forecast/plot"}},o={},a=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.A,{title:"forecast /nhits - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["Perform nhits forecast: ",(0,n.jsx)(t.a,{href:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html",children:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html"})]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"nhits [--num-stacks NUM_STACKS] [--num-blocks NUM_BLOCKS] [--num-layers NUM_LAYERS] [--layer_widths LAYER_WIDTHS] [--activation {ReLU,RReLU,PReLU,Softplus,Tanh,SELU,LeakyReLU,Sigmoid}] [--max_pool_1d] [--past-covariates PAST_COVARIATES] [--all-past-covariates] [--naive] [-d {}] [-c TARGET_COLUMN] [-n N_DAYS] [-t TRAIN_SPLIT] [-i INPUT_CHUNK_LENGTH] [-o OUTPUT_CHUNK_LENGTH] [--force-reset FORCE_RESET] [--save-checkpoints SAVE_CHECKPOINTS] [--model-save-name MODEL_SAVE_NAME] [--n-epochs N_EPOCHS] [--dropout DROPOUT] [--batch-size BATCH_SIZE] [--end S_END_DATE] [--start S_START_DATE] [--residuals] [--forecast-only] [--export-pred-raw]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_stacks"}),(0,n.jsx)(t.td,{children:"The number of stacks that make up the model"}),(0,n.jsx)(t.td,{children:"3"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_blocks"}),(0,n.jsx)(t.td,{children:"The number of blocks making up every stack"}),(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"num_layers"}),(0,n.jsx)(t.td,{children:"The number of fully connected layers"}),(0,n.jsx)(t.td,{children:"2"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"layer_widths"}),(0,n.jsx)(t.td,{children:"The number of neurons in each layer"}),(0,n.jsx)(t.td,{children:"512"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"activation"}),(0,n.jsx)(t.td,{children:"The desired activation"}),(0,n.jsx)(t.td,{children:"ReLU"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"ReLU, RReLU, PReLU, Softplus, Tanh, SELU, LeakyReLU, Sigmoid"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxpool1d"}),(0,n.jsx)(t.td,{children:"Whether to use max_pool_1d or AvgPool1d"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"past_covariates"}),(0,n.jsx)(t.td,{children:"Past covariates(columns/features) in same dataset. Comma separated."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"all_past_covariates"}),(0,n.jsx)(t.td,{children:"Adds all rows as past covariates except for date and the target column."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"naive"}),(0,n.jsx)(t.td,{children:"Show the naive baseline for a model."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_dataset"}),(0,n.jsx)(t.td,{children:"The name of the dataset you want to select"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_column"}),(0,n.jsx)(t.td,{children:"The name of the specific column you want to use"}),(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_days"}),(0,n.jsx)(t.td,{children:"prediction days."}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"train_split"}),(0,n.jsx)(t.td,{children:"Start point for rolling training and forecast window. 0.0-1.0"}),(0,n.jsx)(t.td,{children:"0.85"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_chunk_length"}),(0,n.jsx)(t.td,{children:"Number of past time steps for forecasting module at prediction time."}),(0,n.jsx)(t.td,{children:"14"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_chunk_length"}),(0,n.jsx)(t.td,{children:"The length of the forecast of the model."}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"force_reset"}),(0,n.jsx)(t.td,{children:"If set to True, any previously-existing model with the same name will be reset (all checkpoints will be discarded)."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"save_checkpoints"}),(0,n.jsx)(t.td,{children:"Whether to automatically save the untrained model and checkpoints."}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"model_save_name"}),(0,n.jsx)(t.td,{children:"Name of the model to save."}),(0,n.jsx)(t.td,{children:"nhits_model"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_epochs"}),(0,n.jsx)(t.td,{children:"Number of epochs over which to train the model."}),(0,n.jsx)(t.td,{children:"300"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dropout"}),(0,n.jsx)(t.td,{children:"Fraction of neurons affected by Dropout, from 0 to 1."}),(0,n.jsx)(t.td,{children:"0.1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"batch_size"}),(0,n.jsx)(t.td,{children:"Number of time series (input and output) used in each training pass"}),(0,n.jsx)(t.td,{children:"32"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"s_end_date"}),(0,n.jsx)(t.td,{children:"The end date (format YYYY-MM-DD) to select for testing"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"s_start_date"}),(0,n.jsx)(t.td,{children:"The start date (format YYYY-MM-DD) to select for testing"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"residuals"}),(0,n.jsx)(t.td,{children:"Show the residuals for the model."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_only"}),(0,n.jsx)(t.td,{children:"Do not plot the historical data without forecasts."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export_pred_raw"}),(0,n.jsx)(t.td,{children:"Export predictions to a csv file."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"2022 Oct 11, 06:38 D /forecast/ $ load AAPL_20220719_201127.csv\n\n2022 Oct 11, 06:38 D /forecast/ $ nhits AAPL_20220719_201127\nEpoch 153: 100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 25/25 [00:0000:00, 183.87it/s, loss=-1.56, train_loss=-1.60, val_loss=-.954]\nPredicting NHITS for 5 days\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 115/115 [00:0100:00, 92.46it/s]\nNHITS model obtains MAPE: 7.45%\n\n\n\n   Actual price: 147.07\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime   \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-07-19 \u2502 134.84     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-20 \u2502 141.80     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-21 \u2502 131.06     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-22 \u2502 102.95     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-25 \u2502 123.72     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://user-images.githubusercontent.com/72827203/195015203-3644fe8c-e1f7-49ab-9595-a19b474948cc.png",alt:"nbeats"})}),"\n",(0,n.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(5260),s=r(74848);function d(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(96540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);