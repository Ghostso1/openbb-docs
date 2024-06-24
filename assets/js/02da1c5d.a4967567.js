"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98891],{6777:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var s=r(74848),n=r(28453),a=r(94331);const t={title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},c=void 0,l={id:"terminal/reference/stocks/search",title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",source:"@site/content/terminal/reference/stocks/search.md",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/search",permalink:"/openbb-docs/terminal/reference/stocks/search",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/search.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719230718e3,frontMatter:{title:"search",description:"The 'search' documentation provides a detailed guide to using various search commands on our platform. This includes usage, parameters, and term definitions for finding company tickers, filtering stocks based on country, sector, industry or specific exchange country.",keywords:["Search Documentation","Company Tickers","Stock Market Search","Search By Country","Search By Sector","Search By Industry","Search By Exchange Country"]},sidebar:"tutorialSidebar",previous:{title:"view",permalink:"/openbb-docs/terminal/reference/stocks/screener/view"},next:{title:"country",permalink:"/openbb-docs/terminal/reference/stocks/sia/country"}},o={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function m(e){const i={code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"stocks /search - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(i.p,{children:"Show companies matching the search query"}),"\n",(0,s.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-python",children:"search [-q QUERY [QUERY ...]] [-c country] [-s sector] [-i industry] [-e exchange]\n"})}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default"}),(0,s.jsx)(i.th,{children:"Optional"}),(0,s.jsx)(i.th,{children:"Choices"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"query"}),(0,s.jsx)(i.td,{children:"The search term used to find company tickers"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"True"}),(0,s.jsx)(i.td,{children:"None"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"country"}),(0,s.jsx)(i.td,{children:"Search by country to find stocks matching the criteria"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"True"}),(0,s.jsx)(i.td,{children:"afghanistan, anguilla, argentina, australia, austria, azerbaijan, bahamas, bangladesh, barbados, belgium, belize, bermuda, botswana, brazil, british_virgin_islands, cambodia, canada, cayman_islands, chile, china, colombia, costa_rica, cyprus, czech_republic, denmark, dominican_republic, egypt, estonia, falkland_islands, finland, france, french_guiana, gabon, georgia, germany, ghana, gibraltar, greece, greenland, guernsey, hong_kong, hungary, iceland, india, indonesia, ireland, isle_of_man, israel, italy, ivory_coast, japan, jersey, jordan, kazakhstan, kyrgyzstan, latvia, liechtenstein, lithuania, luxembourg, macau, macedonia, malaysia, malta, mauritius, mexico, monaco, mongolia, montenegro, morocco, mozambique, myanmar, namibia, netherlands, netherlands_antilles, new_zealand, nigeria, norway, panama, papua_new_guinea, peru, philippines, poland, portugal, qatar, reunion, romania, russia, saudi_arabia, senegal, singapore, slovakia, slovenia, south_africa, south_korea, spain, suriname, sweden, switzerland, taiwan, tanzania, thailand, turkey, ukraine, united_arab_emirates, united_kingdom, united_states, uruguay, vietnam, zambia"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"sector"}),(0,s.jsx)(i.td,{children:"Search by sector to find stocks matching the criteria"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"True"}),(0,s.jsx)(i.td,{children:", basic_materials, communication_services, conglomerates, consumer_cyclical, consumer_defensive, consumer_goods, energy, financial, financial_services, healthcare, industrial_goods, industrials, real_estate, services, technology, utilities"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"industry"}),(0,s.jsx)(i.td,{children:"Search by industry to find stocks matching the criteria"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"True"}),(0,s.jsxs)(i.td,{children:[", advertising_agencies, aerospace_&",(0,s.jsx)(i.em,{children:"defense, aerospace_defense"}),"-",(0,s.jsx)(i.em,{children:"major_diversified, aerospace_defense_products"}),"&",(0,s.jsx)(i.em,{children:"services, agricultural_chemicals, agricultural_inputs, air_delivery"}),"&",(0,s.jsx)(i.em,{children:"freight_services, airlines, airports"}),"&",(0,s.jsx)(i.em,{children:"air_services, aluminum, apparel_manufacturing, apparel_retail, apparel_stores, asset_management, auto"}),"&",(0,s.jsx)(i.em,{children:"truck_dealerships, auto_dealerships, auto_manufacturers, auto_manufacturers"}),"-",(0,s.jsx)(i.em,{children:"major, auto_parts, banks"}),"-",(0,s.jsx)(i.em,{children:"diversified, banks"}),"-",(0,s.jsx)(i.em,{children:"regional, beverages"}),"-",(0,s.jsx)(i.em,{children:"brewers, beverages"}),"-",(0,s.jsx)(i.em,{children:"non-alcoholic, beverages"}),"-",(0,s.jsx)(i.em,{children:"soft_drinks, beverages"}),"-",(0,s.jsx)(i.em,{children:"wineries"}),"&",(0,s.jsx)(i.em,{children:"distilleries, beverages"}),"-",(0,s.jsx)(i.em,{children:"wineries"}),"&",(0,s.jsx)(i.em,{children:"distillers, biotechnology, broadcasting, broadcasting"}),"-",(0,s.jsx)(i.em,{children:"tv, building_materials, building_products"}),"&",(0,s.jsx)(i.em,{children:"equipment, business_equipment, business_equipment"}),"&",(0,s.jsx)(i.em,{children:"supplies, business_services, business_software"}),"&",(0,s.jsx)(i.em,{children:"services, capital_markets, chemicals, chemicals"}),"-",(0,s.jsx)(i.em,{children:"major_diversified, cigarettes, closed-end_fund"}),"-",(0,s.jsx)(i.em,{children:"equity, coking_coal, communication_equipment, computer_based_systems, computer_hardware, confectioners, conglomerates, consulting_services, consumer_electronics, copper, credit_services, department_stores, diagnostics"}),"&_research, discount_stores, discount,",(0,s.jsx)(i.em,{children:"variety_stores, diversified_computer_systems, diversified_electronics, diversified_investments, diversified_machinery, diversified_utilities, drug_manufacturers"}),"-",(0,s.jsx)(i.em,{children:"general, drug_manufacturers"}),"-",(0,s.jsx)(i.em,{children:"major, drug_manufacturers"}),"-",(0,s.jsx)(i.em,{children:"other, drug_manufacturers"}),"-",(0,s.jsx)(i.em,{children:"specialty"}),"&",(0,s.jsx)(i.em,{children:"generic, drugs"}),"-",(0,s.jsx)(i.em,{children:"generic, education"}),"&",(0,s.jsx)(i.em,{children:"training_services, electric_utilities, electrical_equipment"}),"&",(0,s.jsx)(i.em,{children:"parts, electronic_components, electronic_equipment, electronic_gaming"}),"&",(0,s.jsx)(i.em,{children:"multimedia, electronics"}),"&",(0,s.jsx)(i.em,{children:"computer_distribution, electronics_wholesale, engineering"}),"&",(0,s.jsx)(i.em,{children:"construction, entertainment, entertainment"}),"-",(0,s.jsx)(i.em,{children:"diversified, farm"}),"&",(0,s.jsx)(i.em,{children:"construction_machinery, farm"}),"&",(0,s.jsx)(i.em,{children:"heavy_construction_machinery, farm_products, financial_conglomerates, financial_data"}),"&",(0,s.jsx)(i.em,{children:"stock_exchanges, food"}),"-",(0,s.jsx)(i.em,{children:"major_diversified, food_distribution, food_wholesale, footwear"}),"&_accessories, furnishings,",(0,s.jsx)(i.em,{children:"fixtures"}),"&",(0,s.jsx)(i.em,{children:"appliances, gambling, gaming_activities, general_building_materials, general_contractors, gold, grocery_stores, health_care_plans, health_information_services, healthcare_information_services, healthcare_plans, heavy_construction, home_furnishings"}),"&",(0,s.jsx)(i.em,{children:"fixtures, home_improvement_retail, hospitals, household"}),"&",(0,s.jsx)(i.em,{children:"personal_products, independent_oil"}),"&",(0,s.jsx)(i.em,{children:"gas, industrial_distribution, industrial_equipment_wholesale, industrial_metals"}),"&",(0,s.jsx)(i.em,{children:"minerals, information_technology_services, infrastructure_operations, insurance"}),"-",(0,s.jsx)(i.em,{children:"diversified, insurance"}),"-",(0,s.jsx)(i.em,{children:"life, insurance"}),"-",(0,s.jsx)(i.em,{children:"property"}),"&",(0,s.jsx)(i.em,{children:"casualty, insurance"}),"-",(0,s.jsx)(i.em,{children:"reinsurance, insurance"}),"-",(0,s.jsx)(i.em,{children:"specialty, insurance_brokers, integrated_freight"}),"&",(0,s.jsx)(i.em,{children:"logistics, internet_content"}),"&",(0,s.jsx)(i.em,{children:"information, internet_information_providers, internet_retail, internet_service_providers, internet_software"}),"&",(0,s.jsx)(i.em,{children:"services, investment_brokerage"}),"-",(0,s.jsx)(i.em,{children:"national, jewelry_stores, leisure, life_insurance, lodging, long_distance_carriers, lumber"}),"&_wood_production, lumber,",(0,s.jsx)(i.em,{children:"wood_production, luxury_goods, machine_tools"}),"&",(0,s.jsx)(i.em,{children:"accessories, major_airlines, major_integrated_oil"}),"&",(0,s.jsx)(i.em,{children:"gas, marine_shipping, marketing_services, medical_appliances"}),"&",(0,s.jsx)(i.em,{children:"equipment, medical_care_facilities, medical_devices, medical_distribution, medical_instruments"}),"&",(0,s.jsx)(i.em,{children:"supplies, medical_laboratories"}),"&",(0,s.jsx)(i.em,{children:"research, metal_fabrication, money_center_banks, mortgage_finance, mortgage_investment, multimedia"}),"&",(0,s.jsx)(i.em,{children:"graphics_software, networking"}),"&",(0,s.jsx)(i.em,{children:"communication_devices, nonmetallic_mineral_mining, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_drilling, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_drilling"}),"&",(0,s.jsx)(i.em,{children:"exploration, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_e&p, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_equipment"}),"&",(0,s.jsx)(i.em,{children:"services, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_integrated, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_midstream, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_pipelines, oil"}),"&",(0,s.jsx)(i.em,{children:"gas_refining"}),"&",(0,s.jsx)(i.em,{children:"marketing, other_industrial_metals"}),"&",(0,s.jsx)(i.em,{children:"mining, other_precious_metals"}),"&",(0,s.jsx)(i.em,{children:"mining, packaged_foods, packaging"}),"&",(0,s.jsx)(i.em,{children:"containers, paper"}),"&",(0,s.jsx)(i.em,{children:"paper_products, personal_products, personal_services, pharmaceutical_retailers, pollution"}),"&",(0,s.jsx)(i.em,{children:"treatment_controls, printed_circuit_boards, processed"}),"&",(0,s.jsx)(i.em,{children:"packaged_goods, property"}),"&",(0,s.jsx)(i.em,{children:"casualty_insurance, property_management, publishing, publishing"}),"-",(0,s.jsx)(i.em,{children:"newspapers, reit"}),"-",(0,s.jsx)(i.em,{children:"diversified, reit"}),"-",(0,s.jsx)(i.em,{children:"healthcare_facilities, reit"}),"-",(0,s.jsx)(i.em,{children:"hotel"}),"&",(0,s.jsx)(i.em,{children:"motel, reit"}),"-",(0,s.jsx)(i.em,{children:"industrial, reit"}),"-",(0,s.jsx)(i.em,{children:"mortgage, reit"}),"-",(0,s.jsx)(i.em,{children:"office, reit"}),"-",(0,s.jsx)(i.em,{children:"residential, reit"}),"-",(0,s.jsx)(i.em,{children:"retail, reit"}),"-",(0,s.jsx)(i.em,{children:"specialty, railroads, real_estate"}),"-",(0,s.jsx)(i.em,{children:"development, real_estate"}),"-_diversified, real_estate_development, real_estate_services, recreational_goods,",(0,s.jsx)(i.em,{children:"other, recreational_vehicles, regional"}),"-",(0,s.jsx)(i.em,{children:"mid-atlantic_banks, rental"}),"&",(0,s.jsx)(i.em,{children:"leasing_services, research_services, residential_construction, resorts"}),"&",(0,s.jsx)(i.em,{children:"casinos, restaurants, rubber"}),"&",(0,s.jsx)(i.em,{children:"plastics, scientific"}),"&",(0,s.jsx)(i.em,{children:"technical_instruments, security"}),"&",(0,s.jsx)(i.em,{children:"protection_services, security_software"}),"&",(0,s.jsx)(i.em,{children:"services, semiconductor"}),"-",(0,s.jsx)(i.em,{children:"broad_line, semiconductor_equipment"}),"&_materials, semiconductor-",(0,s.jsx)(i.em,{children:"memory_chips, semiconductors, shell_companies, shipping, silver, software"}),"-",(0,s.jsx)(i.em,{children:"application, software"}),"-_infrastructure, solar, specialized_health_services, specialty_business_services, specialty_chemicals, specialty_industrial_machinery, specialty_retail, specialty_retail,",(0,s.jsx)(i.em,{children:"other, staffing"}),"&",(0,s.jsx)(i.em,{children:"employment_services, staffing"}),"&",(0,s.jsx)(i.em,{children:"outsourcing_services, steel, steel"}),"&",(0,s.jsx)(i.em,{children:"iron, technical"}),"&",(0,s.jsx)(i.em,{children:"system_software, telecom_services, textile"}),"-",(0,s.jsx)(i.em,{children:"apparel_clothing, textile"}),"-",(0,s.jsx)(i.em,{children:"apparel_footwear"}),"&_accessories, textile_industrial, textile_manufacturing, thermal_coal, tobacco, tobacco_products,",(0,s.jsx)(i.em,{children:"other, tools"}),"&",(0,s.jsx)(i.em,{children:"accessories, travel_services, trucking, trucks"}),"&",(0,s.jsx)(i.em,{children:"other_vehicles, uranium, utilities"}),"-",(0,s.jsx)(i.em,{children:"diversified, utilities"}),"-",(0,s.jsx)(i.em,{children:"independent_power_producers, utilities"}),"-",(0,s.jsx)(i.em,{children:"regulated_electric, utilities"}),"-",(0,s.jsx)(i.em,{children:"regulated_gas, utilities"}),"-",(0,s.jsx)(i.em,{children:"regulated_water, utilities"}),"-_renewable, waste_management, water_utilities, wireless_communications"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"exchange_country"}),(0,s.jsx)(i.td,{children:"Search by a specific exchange country to find stocks matching the criteria"}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"True"}),(0,s.jsx)(i.td,{children:"united_states, argentina, austria, australia, belgium, brazil, canada, chile, china, czech_republic, denmark, egypt, estonia, europe, finland, france, germany, greece, hong_kong, hungary, iceland, india, indonesia, ireland, israel, italy, japan, latvia, lithuania, malaysia, mexico, netherlands, new_zealand, norway, portugal, qatar, russia, singapore, south_africa, south_korea, spain, saudi_arabia, sweden, switzerland, taiwan, thailand, turkey, united_kingdom, venezuela"})]})]})]}),"\n",(0,s.jsx)(i.hr,{})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},94331:(e,i,r)=>{r.d(i,{A:()=>a});r(96540);var s=r(5260),n=r(74848);function a(e){let{title:i}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:i})})}},28453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>c});var s=r(96540);const n={},a=s.createContext(n);function t(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);