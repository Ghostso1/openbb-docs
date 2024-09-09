"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76354],{77826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>i,metadata:()=>o,toc:()=>x});var d=r(74848),s=r(28453),n=r(94331),c=r(18228),a=r(19365);const i={title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",keywords:["Commitment of Traders Reports","lookup","series ID","CFTC","regulators","default report","provider","data type","legacy format","report type","measure","start date","end date","transform","results","metadata","warnings","chart","traders","date"]},l=void 0,o={id:"platform/reference/regulators/cftc/cot",title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",source:"@site/content/platform/reference/regulators/cftc/cot.md",sourceDirName:"platform/reference/regulators/cftc",slug:"/platform/reference/regulators/cftc/cot",permalink:"/platform/reference/regulators/cftc/cot",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/regulators/cftc/cot.md",tags:[],version:"current",frontMatter:{title:"cot",description:"Learn how to lookup Commitment of Traders Reports by series ID and view  the results, metadata, warnings, and charts associated with the reports. Understand  the available parameters such as default report, provider, data type, legacy format,  report type, measure, start date, end date, and transform.",keywords:["Commitment of Traders Reports","lookup","series ID","CFTC","regulators","default report","provider","data type","legacy format","report type","measure","start date","end date","transform","results","metadata","warnings","chart","traders","date"]},sidebar:"tutorialSidebar",previous:{title:"Cftc",permalink:"/platform/reference/regulators/cftc/"},next:{title:"cot_search",permalink:"/platform/reference/regulators/cftc/cot_search"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.A,{title:"regulators/cftc/cot - Reference | OpenBB Platform Docs"}),"\n","\n",(0,d.jsx)(t.p,{children:"Get Commitment of Traders Reports."}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get the latest report for all items classified as, GOLD.\nobb.regulators.cftc.cot(id='gold', provider='cftc')\n# Enter the entire history for a single CFTC Market Contract Code.\nobb.regulators.cftc.cot(id='088691', provider='cftc')\n# Get the report for futures only.\nobb.regulators.cftc.cot(id='088691', futures_only=True, provider='cftc')\n# Get the most recent Commodity Index Traders Supplemental Report.\nobb.regulators.cftc.cot(id='all', report_type=supplemental, provider='cftc')\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(c.A,{children:[(0,d.jsx)(a.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"A string with the CFTC market code or other identifying string, such as the contract market name, commodity name, or commodity group - i.e, 'gold' or 'japanese yen'.Default report is Fed Funds Futures. Use the 'cftc_market_code' for an exact match."}),(0,d.jsx)(t.td,{children:"045601"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format. Default is the most recent report."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(a.A,{value:"cftc",label:"cftc",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"A string with the CFTC market code or other identifying string, such as the contract market name, commodity name, or commodity group - i.e, 'gold' or 'japanese yen'.Default report is Fed Funds Futures. Use the 'cftc_market_code' for an exact match."}),(0,d.jsx)(t.td,{children:"045601"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format. Default is the most recent report."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"End date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"report_type"}),(0,d.jsx)(t.td,{children:"Literal['legacy', 'disaggregated', 'financial', 'supplemental']"}),(0,d.jsxs)(t.td,{children:["The type of report to retrieve. Set ",(0,d.jsx)(t.code,{children:"id"})," as 'all' to return all items in the report; type (default date range returns the latest report). The Legacy report is broken down by exchange; with reported open interest further broken down into three trader classifications: commercial,; non-commercial and non-reportable. The Disaggregated reports are broken down by Agriculture and; Natural Resource contracts. The Disaggregated reports break down reportable open interest positions; into four classifications: Producer/Merchant, Swap Dealers, Managed Money and Other Reportables. The Traders in Financial Futures (TFF) report includes financial contracts. The TFF report breaks; down the reported open interest into five classifications: Dealer, Asset Manager, Leveraged Money,; Other Reportables and Non-Reportables."]}),(0,d.jsx)(t.td,{children:"legacy"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futures_only"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"Returns the futures-only report. Default is False, for the combined report."}),(0,d.jsx)(t.td,{children:"False"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})}),(0,d.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Optional"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"id"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC series ID.  Use search_cot() to find the ID. IDs not listed in the curated list, but are published on the Nasdaq Data Link website, are valid. Certain symbols, such as 'ES=F', or exact names are also valid. Default report is Two-Year Treasury Note Futures."}),(0,d.jsx)(t.td,{children:"042601"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"start_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"end_date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"Start date of the data, in YYYY-MM-DD format."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"data_type"}),(0,d.jsx)(t.td,{children:"Literal['F', 'FO', 'CITS']"}),(0,d.jsx)(t.td,{children:"The type of data to reuturn. Default is 'FO'. ; F = Futures only; ; FO = Futures and Options; ; CITS = Commodity Index Trader Supplemental. Only valid for commodities."}),(0,d.jsx)(t.td,{children:"FO"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"legacy_format"}),(0,d.jsx)(t.td,{children:"bool"}),(0,d.jsx)(t.td,{children:"Returns the legacy format of report. Default is False."}),(0,d.jsx)(t.td,{children:"False"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"report_type"}),(0,d.jsx)(t.td,{children:"Literal['ALL', 'CHG', 'OLD', 'OTR']"}),(0,d.jsx)(t.td,{children:"The type of report to return. Default is 'ALL'. ; ALL = All; ; CHG = Change in Positions; ; OLD = Old Crop Years; ; OTR = Other Crop Years"}),(0,d.jsx)(t.td,{children:"ALL"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"measure"}),(0,d.jsx)(t.td,{children:"Literal['CR', 'NT', 'OI', 'CHG']"}),(0,d.jsx)(t.td,{children:"The measure to return. Default is None. ; CR = Concentration Ratios; ; NT = Number of Traders; ; OI = Percent of Open Interest; ; CHG = Change in Positions. Only valid when data_type is 'CITS'."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"transform"}),(0,d.jsx)(t.td,{children:"Literal['diff', 'rdiff', 'cumul', 'normalize']"}),(0,d.jsx)(t.td,{children:"Transform the data as difference, percent change, cumulative, or normalize."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"collapse"}),(0,d.jsx)(t.td,{children:"Literal['daily', 'weekly', 'monthly', 'quarterly', 'annual']"}),(0,d.jsx)(t.td,{children:"Collapse the frequency of the time series."}),(0,d.jsx)(t.td,{children:"None"}),(0,d.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[COT]\n        Serializable results.\n\n    provider : Optional[Literal['cftc', 'nasdaq']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,d.jsx)(t.hr,{}),"\n",(0,d.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,d.jsxs)(c.A,{children:[(0,d.jsx)(a.A,{value:"standard",label:"standard",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"report_week"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Report week for the year."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"market_and_exchange_names"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Market and exchange names."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_region_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC region code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_subgroup_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC subgroup code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_group"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity group name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_subgroup"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity subgroup name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futonly_or_combined"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the report is futures-only or combined."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"contract_units"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Contract units."})]})]})]})}),(0,d.jsx)(a.A,{value:"cftc",label:"cftc",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"report_week"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Report week for the year."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"market_and_exchange_names"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Market and exchange names."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_region_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC region code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_subgroup_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC subgroup code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_group"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity group name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_subgroup"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity subgroup name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futonly_or_combined"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the report is futures-only or combined."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"contract_units"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Contract units."})]})]})]})}),(0,d.jsx)(a.A,{value:"nasdaq",label:"nasdaq",children:(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Name"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"date"}),(0,d.jsx)(t.td,{children:"Union[date, str]"}),(0,d.jsx)(t.td,{children:"The date of the data."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"report_week"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Report week for the year."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"market_and_exchange_names"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Market and exchange names."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_region_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC region code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_contract_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC contract market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_market_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC market code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_commodity_code_quotes"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC commodity code quotes."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"cftc_subgroup_code"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"CFTC subgroup code."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_group"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity group name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"commodity_subgroup"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Commodity subgroup name."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"futonly_or_combined"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"If the report is futures-only or combined."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"contract_units"}),(0,d.jsx)(t.td,{children:"str"}),(0,d.jsx)(t.td,{children:"Contract units."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>c});r(96540);var d=r(34164);const s={tabItem:"tabItem_Ymn6"};var n=r(74848);function c(e){let{children:t,hidden:r,className:c}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,d.A)(s.tabItem,c),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var d=r(5260),s=r(74848);function n(e){let{title:t}=e;return(0,s.jsx)(d.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>_});var d=r(96540),s=r(34164),n=r(23104),c=r(56347),a=r(205),i=r(57485),l=r(31682),o=r(89466);function h(e){return function(e){return d.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,d.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:d,default:s}}=e;return{value:t,label:r,attributes:d,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,d.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,c.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(n),(0,d.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,n=x(e),[c,i]=(0,d.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const d=r.find((e=>e.default))??r[0];if(!d)throw new Error("Unexpected error: 0 tabValues");return d.value}({defaultValue:t,tabValues:n}))),[l,h]=j({queryString:r,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,o.Dv)(r);return[s,(0,d.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:s}),f=(()=>{const e=l??m;return u({value:e,tabValues:n})?e:null})();(0,a.A)((()=>{f&&i(f)}),[f]);return{selectedValue:c,selectValue:(0,d.useCallback)((e=>{if(!u({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),p(e)}),[h,p,n]),tabValues:n}}var p=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function y(e){let{className:t,block:r,selectedValue:d,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,n.a_)(),{pathname:h}=(0,c.zy)(),x=e=>{const t=e.currentTarget,r=l.indexOf(t),s=i[r].value;s!==d&&(o(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:i.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,ref:e=>l.push(e),onKeyDown:u,onClick:x,...n,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,n?.className,{"border-b-2 pointer-events-none":d===t,"border-b-2 text-[#669dcb] border-[#669dcb]":d===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":d===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":d!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":d!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,d.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,d.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function C(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function _(e){const t=(0,p.A)();return(0,b.jsx)(C,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var d=r(96540);const s={},n=d.createContext(s);function c(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);