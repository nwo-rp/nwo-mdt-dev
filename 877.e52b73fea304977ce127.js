(self.webpackChunknwo_mdt=self.webpackChunknwo_mdt||[]).push([[877],{5877:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AdminModule:()=>D});var o=n(1511),s=n(3548),i=n(1572);const a=function(){return["..","vehicles"]},r=function(){return["..","mlos"]};let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:4,vars:4,consts:[[3,"routerLink"]],template:function(e,t){1&e&&(i.TgZ(0,"button",0),i._uU(1,"vehicles"),i.qZA(),i.TgZ(2,"button",0),i._uU(3,"mlos"),i.qZA()),2&e&&(i.Q6J("routerLink",i.DdM(2,a)),i.xp6(2),i.Q6J("routerLink",i.DdM(3,r)))},directives:[s.rH],styles:["[_nghost-%COMP%]{min-height:100%;display:grid;grid-template-columns:1fr 1fr}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{border:none}"],changeDetection:0}),e})();var c=n(8512),h=n(4689),u=n(9996),p=n(9063);let d=(()=>{class e{constructor(e,t){this.httpClient=e,this.environment=t}getVehicles(){return this.httpClient.get(`${this.environment.endpoint}/admin/vehicles`)}getBrands(){return this.httpClient.get(`${this.environment.endpoint}/admin/vehicles/brands`)}getCategories(){return this.httpClient.get(`${this.environment.endpoint}/admin/vehicles/categories`)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(p.eN),i.LFG("environment"))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=n(6073),g=n(6599),f=n(6283),b=n(5583),v=n(1522);function k(e,t){if(1&e&&(i.TgZ(0,"span",5),i._uU(1),i.qZA()),2&e){const e=t.$implicit;i.xp6(1),i.Oqu(e.name)}}function y(e,t){if(1&e&&(i.TgZ(0,"mat-option",6),i._uU(1),i.qZA()),2&e){const e=t.$implicit;i.Q6J("value",e),i.xp6(1),i.Oqu(e.name)}}let w=(()=>{class e{constructor(){this.vehicles=[],this.brands=[],this.categories=[],this.filterChange=new i.vpe,this.form=new m.cw({brand:new m.NI}),this.form.valueChanges.pipe((0,g.b)(e=>this.filterChange.emit(e))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["mdt-admin-vehicle-filter"]],inputs:{vehicles:"vehicles",brands:"brands",categories:"categories"},outputs:{filterChange:"filterChange"},decls:8,vars:3,consts:[[3,"formGroup"],["appearance","fill"],["formControlName","brand","multiple",""],["class","list",4,"ngFor","ngForOf"],[3,"value",4,"ngFor","ngForOf"],[1,"list"],[3,"value"]],template:function(e,t){if(1&e&&(i.ynx(0,0),i.TgZ(1,"mat-form-field",1),i.TgZ(2,"mat-label"),i._uU(3,"Brand"),i.qZA(),i.TgZ(4,"mat-select",2),i.TgZ(5,"mat-select-trigger"),i.YNc(6,k,2,1,"span",3),i.qZA(),i.YNc(7,y,2,2,"mat-option",4),i.qZA(),i.qZA(),i.BQk()),2&e){let e;i.Q6J("formGroup",t.form),i.xp6(6),i.Q6J("ngForOf",null==(e=t.form.get("brand"))?null:e.value),i.xp6(1),i.Q6J("ngForOf",t.brands)}},directives:[m.JL,m.sg,f.KE,f.hX,b.gD,m.JJ,m.u,b.$L,o.sg,v.ey],styles:['[_nghost-%COMP%]   .list[_ngcontent-%COMP%] ~ .list[_ngcontent-%COMP%]:before{content:", "}']}),e})(),_=(()=>{class e{transform(e,t){var n;return(null===(n=t.find(({id:t})=>t===e))||void 0===n?void 0:n.name)||"?"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Yjl({name:"vehicleBrand",type:e,pure:!0}),e})();function x(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"li",1),i.NdJ("click",function(){const t=i.CHM(e).$implicit;return i.oxw().selectedVehicleChange.next(t)}),i.TgZ(1,"span"),i._uU(2),i.ALo(3,"vehicleBrand"),i.qZA(),i.qZA()}if(2&e){const e=t.$implicit,n=i.oxw();i.xp6(2),i.AsE(" ",i.xi3(3,2,e.brand,n.brands)," ",e.name||"<"+e.model+">"," ")}}let C=(()=>{class e{constructor(){this.vehicles=[],this.brands=[],this.categories=[],this.selectedVehicleChange=new i.vpe}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["mdt-admin-vehicle-list"]],inputs:{vehicles:"vehicles",brands:"brands",categories:"categories"},outputs:{selectedVehicleChange:"selectedVehicleChange"},decls:2,vars:1,consts:[[3,"click",4,"ngFor","ngForOf"],[3,"click"]],template:function(e,t){1&e&&(i.TgZ(0,"ul"),i.YNc(1,x,4,5,"li",0),i.qZA()),2&e&&(i.xp6(1),i.Q6J("ngForOf",t.vehicles))},directives:[o.sg],pipes:[_],styles:["[_nghost-%COMP%]{overflow:auto;display:flex;height:100%}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}"]}),e})();const Z=function(){return[]};let O=(()=>{class e{constructor(e,t,n){this.adminVehiclesResource=e,this.router=t,this.activatedRoute=n,this.vehicles$=this.adminVehiclesResource.getVehicles().pipe((0,h.w)(e=>this.filter.pipe((0,u.U)(t=>this.filterVehicles(e,t))))),this.brands$=this.adminVehiclesResource.getBrands(),this.categories$=this.adminVehiclesResource.getCategories(),this.filter=new c.X({})}selectVehicle(e){this.router.navigate([e.model],{relativeTo:this.activatedRoute})}filterVehicles(e,t){return e.filter(e=>{var n;let o=!0;return o&&(o=0===((null===(n=null==t?void 0:t.brand)||void 0===n?void 0:n.length)||0)||((null==t?void 0:t.brand)||[]).find(({id:t})=>t===e.brand)),o})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(d),i.Y36(s.F0),i.Y36(s.gz))},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:12,vars:24,consts:[[1,"toolbar"],[3,"vehicles","brands","categories","filterChange"],[1,"content"],[3,"vehicles","brands","categories","selectedVehicleChange"]],template:function(e,t){1&e&&(i._UZ(0,"div",0),i.TgZ(1,"mdt-admin-vehicle-filter",1),i.NdJ("filterChange",function(e){return t.filter.next(e)}),i.ALo(2,"async"),i.ALo(3,"async"),i.ALo(4,"async"),i.qZA(),i.TgZ(5,"div",2),i.TgZ(6,"mdt-admin-vehicle-list",3),i.NdJ("selectedVehicleChange",function(e){return t.selectVehicle(e)}),i.ALo(7,"async"),i.ALo(8,"async"),i.ALo(9,"async"),i.qZA(),i.TgZ(10,"div"),i._UZ(11,"router-outlet"),i.qZA(),i.qZA()),2&e&&(i.xp6(1),i.Q6J("vehicles",i.lcZ(2,6,t.vehicles$)||i.DdM(18,Z))("brands",i.lcZ(3,8,t.brands$)||i.DdM(19,Z))("categories",i.lcZ(4,10,t.categories$)||i.DdM(20,Z)),i.xp6(5),i.Q6J("vehicles",i.lcZ(7,12,t.vehicles$)||i.DdM(21,Z))("brands",i.lcZ(8,14,t.brands$)||i.DdM(22,Z))("categories",i.lcZ(9,16,t.categories$)||i.DdM(23,Z)))},directives:[w,C,s.lC],pipes:[o.Ov],styles:["[_nghost-%COMP%]{overflow:hidden;display:flex;flex-direction:column;height:100%}[_nghost-%COMP%] > .content[_ngcontent-%COMP%]{display:flex;height:100%;overflow:hidden}[_nghost-%COMP%] > .content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{width:33%}[_nghost-%COMP%] > .content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{flex-grow:1}"],changeDetection:0}),e})();var M=n(7527);let A=(()=>{class e{constructor(e,t){this.adminVehiclesPage=e,this.activatedRoute=t,this.vehicle$=this.activatedRoute.params.pipe((0,h.w)(({model:e})=>this.adminVehiclesPage.vehicles$.pipe((0,u.U)(t=>t.find(t=>t.model===e)))),(0,M.d)())}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(O),i.Y36(s.gz))},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:5,vars:5,consts:[[1,"toolbar"]],template:function(e,t){1&e&&(i._UZ(0,"div",0),i.TgZ(1,"pre"),i._uU(2),i.ALo(3,"json"),i.ALo(4,"async"),i.qZA()),2&e&&(i.xp6(2),i.hij("  ",i.lcZ(3,1,i.lcZ(4,3,t.vehicle$)),"\n"))},pipes:[o.Ts,o.Ov],styles:[""],changeDetection:0}),e})();var z=n(878),P=n(3080);const $=[[716.6316,4190.387,44.8,"?","logcabin",!1],[227.2616,-414.1805,80.70842,"?","court",!1],[271.3272,-298.7798,57.90149,"?","swimminghall",!1],[178.7814,-246.3762,57.82899,"?","crucialhightime",!1],[94.8838,-229.1035,53.7193,"?","apteka3",!1],[340.4365,-215.926,58.8085,"?","pinkcage",!1],[95.90417,-215.3261,59.78911,"?","mimis_burger",!1],[178.6673,-246.4261,57.75567,"?","white_widow",!1],[-2653.614,1320.525,144.2943,"?","modernhouse",!1],[1692.76,2462.202,50.94669,"?","prison",!1],[-151.5952,-256.5893,42.93513,"?","bowling",!1],[-551.0138,-193.8526,45.22602,"?","cityhall",!1],[-451.4737,-33.34594,48.88171,"?","cockatoos",!1],[-339.73,-122.978,41.867,"?","lsc",!1],[-34.17771,-214.9746,46.86451,"?","drivingschool",!1],[-509.9642,-28.98996,46.74071,"?","cafe",!1],[-181.1788,-35.21217,52.72738,"?","gym",!1],[-209.0678,-322.5095,55.16773,"?","whitewiddow",!1],[-451.4737,-33.34594,48.88171,"?","icecream",!1],[-438.9247,39.94738,48.27082,"?","gallery",!1],[-141.2937,-1601.667,34.04364,"?","families_gang",!1],[-239.8031,-1517.871,35.60846,"?","recreation",!1],[-199.8787,-1716.867,34.87752,"?","families",!1],[-1488.24,4980.37,64.38931,"?","parkranger",!1],[-1106.557,4944.965,223.6063,"?","thebarn",!1],[-3223.096,793.0368,7.509024,"?","malibu_mansion",!1],[358.0311,3565.935,25.44608,"?","methlab",!1],[2290.154,4840.345,33.96772,"?","methlab",!1],[968.2704,-2195.72,20.21774,"?","carmeet",!1],[741.6929,-1956.667,31.69077,"?","anonymous",!1],[1009.785,-2394.711,29.13866,"?","hydra",!1],[168.0907,-1679.55,28.77988,"?","mechanic",!1],[167.8676,-1469.21,35.14285,"?","popeyes",!1],[219.9957,-1511.407,37.21851,"?","nailstu",!1],[219.9957,-1511.407,37.21851,"?","club",!1],[335.8775,-1640.109,33.89598,"?","court",!1],[326.588,-1568.549,33.88669,"?","dmv",!1],[161.4899,-1550.386,28.25765,"?","ron",!1],[245.856,-1601.001,32.28317,"?","library",!1],[167.8676,-1469.21,35.14285,"?","luckyplucker",!1],[7.511308,-1500.115,30.79943,"?","church",!1],[69.27415,-1776.352,28.29079,"?","walmart",!1],[461.9053,-1593.7,33.2714,"?","motel",!1],[225.9637,-1769.592,32.84112,"?","shop",!1],[379.0889,-1609.938,33.57272,"?","sheriff",!1],[23.65392,-1588.059,37.40468,"?","taco",!1],[327.6702,-1737.72,30.0813,"?","baraky",!1],[294.8831,-1780.547,28.7823,"?","baraky",!1],[145.6087,-1938.864,22.88416,"?","grove",!1],[-5.639894,-1825.111,24.70162,"?","groveshop",!1],[167.7735,-1802.496,28.3221,"?","keyshop",!1],[98.25155,-1670.919,29.65432,"?","rottehullet",!1],[-1402.74,-622.4767,40.17081,"?","bahama",!1],[-1315.93,-833.3821,15.8216,"?","bank",!1],[-1422.655,-683.9182,29.52224,"?","customs",!1],[-1570.268,-464.6097,37.1548,"?","secret_room",!1],[-1403.928,-438.5865,37.05873,"?","vetclinic",!1],[-1529.86,-403.2239,36.29635,"?","digitalden",!1],[-1563.66,-403.3152,48.41727,"?","apartments",!1],[-1245.75,-808.0391,16.07668,"?","icebox",!1],[-1310.745,-936.4059,16.71882,"?","vmotel",!1],[-1625.165,-1021.432,12.12802,"?","pd",!1],[-1829.493,-1201.892,20.31456,"?","pearls",!1],[-1257.744,-740.6294,19.83502,"?","limey",!1],[-1497.868,-668.8192,32.3826,"?","bestperera",!1],[-281.8592,-730.6284,124.3267,"?","penthouse",!1],[344.5654,208.7942,107.7955,"?","cinema",!1],[71.98336,122.5135,78.60868,"?","post",!1],[393.5533,82.39963,110.9371,"?","backpack",!1],[376.913,275.425,90.196,"?","galaxy_nightclub",!1],[101.2339,280.0064,108.4857,"?","burger",!1],[293.9182,100.3975,117.8885,"?","cinema",!1],[411.0028,-10.47957,116.1886,"?","mafia_hotel",!1],[-1690.122,240.0359,61.30142,"?","gym",!1],[293.7137,353.1475,107.1561,"?","workeroffice",!1],[480.6685,155.9749,103.8991,"?","pizza",!1],[574.1517,-10.64558,87.69301,"?","pd",!1],[230.7984,372.8647,105.1142,"?","autoscool",!1],[479.0532,211.3754,107.3143,"?","bestmotel",!1],[309.696,219.6688,116.5357,"?","yakudza_club",!1],[221.5549,332.0757,104.3588,"?","pitchers",!1],[543.8566,111.6461,97.63795,"?","dominos",!1],[809.6395,-494.2791,31.20197,"?","medical_01",!1],[815.528,-104.8991,83.97532,"?","irishpub",!1],[901.7607,-149.5292,75.55829,"?","taxi",!1],[974.8634,-201.5168,79.64267,"?","motel",!1],[347.2753,-2717.005,6.025581,"?","narcohideout",!1],[137.7009,-3029.304,11.7953,"?","tuner",!1],[1107.72,-2329.511,32.7677,"?","weapon_room",!1],[1333.599,-1668.052,52.85912,"?","lester",!1],[1438.397,-1489.909,62.70303,"?","marabunta",!1],[1448.557,-1667.193,65.1437,"?","mara",!1],[1333.599,-1668.052,52.85912,"?","shop",!1],[1552.25,2172.685,82.78545,"?","barn",!1],[1105.731,2653.485,38.28083,"?","sandymotel",!1],[1542.921,2228.565,79.31849,"?","farmhouse",!1],[1224.678,2734.646,39.97196,"?","larry",!1],[1197.326,2650.953,40.47719,"?","sandyfree",!1],[722.3332,2527.422,75.41304,"?","rebelradio",!1],[910.9479,3578.414,32.11914,"?","mc",!1],[47.36504,2793.203,58.84937,"?","oldxero",!1],[1761.055,3330.805,40.42191,"?","sandytowyard",!1],[1989.651,3049.499,51.2502,"?","yellowjack",!1],[2023.431,4987.428,41.96359,"?","420farm",!1],[1928.355,4622.056,46.42995,"?","askammer",!1],[1652.499,4855.072,41.07887,"?","bank",!1],[1649.471,4874.449,41.11556,"?","barber",!1],[1684.513,4862.983,41.45467,"?","liquor",!1],[2473.247,4097.181,38.64723,"?","office",!1],[1687.683,4873.132,44.27142,"?","sheriff",!1],[1948.686,5180.159,52.69095,"?","wharvest",!1],[-1135.946,362.9708,72.19209,"?","villa05",!1],[-1188.772,291.6909,74.24424,"?","cartel",!1],[-1357.784,62.54268,56.37249,"?","golfclub",!1],[-1099.875,425.322,78.0381,"?","spanish_2",!1],[-1099.875,425.322,78.0381,"?","spanish_3",!1],[560.2896,2771.7,44.60244,"?","armurerie",!1],[1163.711,2671.233,37.03318,"?","harmony",!1],[344.1326,2613.49,46.07623,"?","motel",!1],[506.9227,2605.878,42.70515,"?","houseband",!1],[647.5629,2727.47,41.09817,"?","taco",!1],[562.8,2745.72,41.87698,"?","petshop",!1],[133.4603,-144.4608,59.63214,"?","dealership",!1],[54.19692,-126.501,56.33855,"?","treybaker",!1],[194.3503,-30.12566,68.88607,"?","247",!1],[-2541.843,2310.058,32.41076,"?","gasstation",!1],[734.4701,-1291.29,27.18828,"?","warehouse",!1],[847.2112,-1289.337,30.3602,"?","hp",!1],[939.9469,-1476.031,32.69083,"?","warehouse",!1],[743.265,-816.7122,21.66042,"?","arcade",!1],[972.7678,-1843.525,30.169,"?","bloods2",!1],[802.034,-740.312,28.7184,"?","diner",!1],[813.4654,-809.4253,25.30519,"?","ottosautos",!1],[-1035.4,-1379.961,6.527908,"?","realtor",!1],[-1124.604,-1441.168,5.934439,"?","skateshop",!1],[-1120.258,-1456.491,4.08108,"?","cafe_prego",!1],[-1109.387,-1493.27,8.230699,"?","freehouse",!1],[-860.3604,-1290.513,6.669515,"?","yachtclub",!1],[-1204.811,-1571.516,7.398,"?","muscle_sands",!1],[-331.6645,-1479.544,36.83344,"?","shop3_1",!1],[635.1577,269.7281,109.3843,"?","shop3_2",!1],[-786.5088,-1349.061,10.85601,"?","boatdealer",!1],[-761.8011,-1321.049,10.62505,"?","scars",!1],[-341.3441,-1570.145,24.39579,"?","trash",!1],[-635.3799,-1232.476,16.49479,"?","knoodle",!1],[-1326.152,-1526.94,6.401885,"?","plage_decat",!1],[-1096.472,-1668.65,8.804261,"?","beachcon",!1],[-1195.541,-1788.192,14.16838,"?","beachtower",!1],[210.5142,-903.149,41.41555,"?","legion",!1],[-517.787,-692.405,32.16293,"?","cluckin",!1],[-827.0417,-706.2427,29.06411,"?","pc_club",!1],[-666.1041,-882.207,23.43166,"?","chinese",!1],[-555.5261,-599.8705,47.25884,"?","center",!1],[-775.1229,-709.1484,29.04388,"?","church",!1],[-686.5579,-867.212,23.51062,"?","gunchinatown",!1],[-659.0441,-858.4583,24.9797,"?","magazel",!1],[-722.1335,-864.6488,25.50134,"?","triada",!1],[-582.9239,-923.0363,30.99052,"?","weazelnews",!1],[-775.8005,-1034.389,23.60514,"?","bilfirma",!1],[-532.1032,-1227.235,17.454,"?","xerogasstation",!1],[-879.0321,-2389.793,29.21572,"?","glg_start",!1],[-934.6928,-2041.547,13.86964,"?","license",!1],[-1055.359,-2830.375,31.55733,"?","airport",!1],[-903.7936,-2342.764,5.889873,"?","hertz",!1],[1243.696,-358.9592,71.09134,"?","wingstop",!1],[1230.119,-409.4958,70.66043,"?","tavern",!1],[1393.178,-598.0845,77.2814,"?","houses",!1],[1367.798,-614.9162,77.50622,"?","houses",!1],[1375.076,-549.6224,74.90658,"?","houses",!1],[1338.033,-602.7987,74.92441,"?","houses",!1],[1330.238,-529.8164,72.66046,"?","houses",!1],[899.1117,-620.6396,58.6579,"?","houses",!1],[985.1263,-623.5605,59.43939,"?","houses",!1],[1396.433,-565.7233,77.29372,"?","houses",!1],[1320.435,-590.9601,76.04231,"?","houses",!1],[1299.153,-582.354,74.52678,"?","houses",!1],[1305.457,-519.4153,74.25638,"?","houses",!1],[1351.103,-538.9197,76.68624,"?","houses",!1],[1109.39,-411.4899,70.35045,"?","houses",!1],[902.393,-482.1002,62.23084,"?","houses",!1],[915.5793,-562.4006,61.15937,"?","houses",!1],[952.9717,-674.4143,61.24682,"?","houses",!1],[941.7329,-654.5335,57.03674,"?","house",!1],[946.6959,-520.7587,59.23354,"?","house",!1],[1223.452,-668.9,62.1012,"?","house",!1],[982.2393,-724.1914,56.82206,"?","house",!1],[1106.961,-442.6829,66.39171,"?","house",!1],[1246.767,-501.1992,68.5079,"?","house",!1],[1150.308,-435.5226,65.28154,"?","gamble",!1],[1237.92,-567.8883,68.24742,"?","gamer_den",!1],[1167.726,-318.5025,72.50674,"?","gbmarket",!1],[1216.942,-476.1577,71.24632,"?","illegal_hospital",!1],[370.6346,-925.9468,28.4049,"?","church",!1],[727.6299,-706.0401,31.89073,"?","stones",!1],[330.882,-908.1974,44.39355,"?","elk",!1],[362.1677,-1014.521,28.53238,"?","tims",!1],[451.0129,-993.3741,29.1718,"?","mrpd",!1],[303.8311,-979.1513,27.84139,"?","pizza",!1],[330.9062,-908.1974,44.29675,"?","cyber",!1],[265.7241,-1008.499,46.65365,"?","shenanigans_bar",!1],[256.7513,-1023.676,31.04518,"?","limeys",!1],[381.8307,-1077.431,29.73933,"?","krnt",!1],[-1508.469,-204.0238,49.78938,"?","gunshop",!1],[-1461.14,-346.2225,48.71705,"?","italianrestaurant",!1],[-1325.467,-396.2242,42.38815,"?","shopblock",!1],[-1424.784,-263.0464,45.25001,"?","gasstation",!1],[2228.238,5614.427,56.73502,"?","highwayfarm",!1],[1588.818,6456.459,26.32583,"?","diner",!1],[2556.344,6183.76,164.2644,"?","littlehouse",!1],[2811.729,5979.688,351.9688,"?","hory",!1],[220.1107,-1846.383,27.89752,"?","laundry",!1],[1171.255,-1214.455,28.28808,"?","coke_labs",!1],[-2187.273,4285.016,50.23131,"?","hookies",!1],[-2066.99,-325.9439,12.33951,"?","gasstation3",!1],[-1685.06,-277.2893,60.31789,"?","church",!1],[-2206.605,-386.8322,13.51093,"?","sasp",!1],[-1985.812,-503.8116,11.14814,"?","vbh",!1],[165.0811,6642.239,30.71056,"?","247",!1],[161.7301,6643.95,34.31718,"?","keyseller",!1],[115.9629,6629.912,34.43843,"?","mecano",!1],[115.9629,6629.912,34.43843,"?","wc",!1],[-102.0537,6337.461,35.45515,"?","motel",!1],[-233.1526,6217.409,32.37047,"?","cardealer",!1],[-146.9581,6303.675,31.55903,"?","cityhall",!1],[-462.4675,6007.517,34.83319,"?","sheriff",!1],[-166.1449,6325.858,34.23246,"?","comedy",!1],[-135.4852,6563.049,24.89555,"?","pb1",!1],[-367.8359,6113.111,37.81647,"?","fd",!1],[79.2085,6525.55,30.22727,"?","garage",!1],[-364.8389,6050.863,30.34199,"?","gym",!1],[-276.6409,6182.605,32.54719,"?","hobc",!1],[-160.7955,6324.666,30.96863,"?","liquor",!1],[-403.0523,6071.232,35.26741,"?","mc",!1],[-262.1392,6325.47,34.24238,"?","medical",!1],[-128.4239,6374.236,34.19179,"?","mojito",!1],[-322.012,6153.701,37.45001,"?","church",!1],[-230.0171,6337.922,33.22972,"?","loans",!1],[-301.3466,6179.042,34.58591,"?","pawnshop",!1],[-175.6765,6385.318,30.5772,"?","pills",!1],[-10.41679,6484.978,33.71506,"?","rays",!1],[-302.9332,6267.124,35.27686,"?","saloon",!1],[3.421335,6610.483,33.44522,"?","paletobarak1",!1],[-41.56155,6576.966,30.35477,"?","paletobarak2",!1],[-104.0585,6527.378,30.96707,"?","paletobarak3",!1],[-438.0274,6252.173,30.77748,"?","paletobarak4",!1],[-221.4535,6440.626,33.93364,"?","paletobarak",!1],[-10.41679,6484.978,33.71506,"?","vangelico",!1],[-49.1653,6383.193,35.31042,"?","warehouse",!1],[-227.9086,6224.449,35.88586,"?","workshop",!1],[-1600.841,5200.511,4.762334,"?","fishshop",!1],[-675.3189,5836.144,17.70478,"?","genstore",!1],[-772.3289,5597.824,33.00244,"?","huntingshop",!1],[-694.7067,5803.086,16.3339,"?","lodgecafe",!1],[-690.9912,5755.469,18.05249,"?","motel",!1],[248.1296,-1092.03,41.84622,"qnx","court",!1],[121.4631,-1038.155,30.14746,"lks","craftbar",!1],[267.352,-824.0897,28.40057,"ukn","crucialfix",!1],[-207.3712,-826.8987,45.50166,"dons","skybar",!1],[-813.1025,-726.8006,104.0806,"dons","skybar",!1],[302.2818,-732.5388,28.2896,"ukn","apteka4",!1],[148.6777,-683.9937,41.10013,"ukn","fib",!1],[52.17702,-804.5498,33.52157,"ukn","ground_pound",!1],[-241.6028,-909.8527,31.3122,"verpi","jobcenter",!1],[135.47,-1040.072,44.91901,"nwo","shop1",!1],[-281.4706,-957.6355,23.15992,"pugs","undergroundparking",!1],[-225.4265,-835.5941,78.26048,"tm","g6",!1],[44.96015,-1005.655,31.54951,"ukn","hotdogs",!1],[-50.34,-1056.272,34.80213,"molo","tabac",!1],[412.7176,-1506.938,35.2292,"brofx","mafia",!1],[490.2003,-1478.887,34.19581,"dons","chopshop",!1],[462.3481,-1562.738,33.49164,"pablito","lvabar",!1],[420.7456,-1910.356,32.45093,"ukn","taco",!1],[545.5889,-1753.617,39.05267,"ukn","clhotel",!1],[386.4506,-1798.931,29.69335,"igor","motel",!1],[381.8894,-1784.316,30.01977,"igor","shop",!1],[465.6385,-1879.092,33.48078,"ult","atomic",!1],[-1831.373,4526.79,6.91213,"lks","bnkr",!1],[796.1104,2176.561,56.30579,"brofx","farmhouse",!1],[-1574.635,16.775,62.8,"ukn","baszawes",!1],[-1481.609,-43.61344,59.63858,"brofx","mansion07",!1],[-1803.327,438.7091,131.6495,"brofx","mansion08",!1],[-1536.384,112.6292,63.13172,"brofx","mansion10",!1],[-1733.847,359.7685,89.18531,"dons","rh1",!1],[-1488.653,438.7401,112.7623,"dons","house1",!1],[-1555.066,215.8077,61.58462,"uj","horrorschool",!1],[-1537.57,413.8185,108.0952,"ug","mansion02",!1],[-1248.758,-278.8254,42.18369,"tiwabs","bakery",!1],[-774.5197,-10.7344,53.61136,"rh_brofx_church",!1],[-817.5481,271.2291,86.37543,"brofx","mansion09",!1],[-852.1983,-28.98417,42.904,"ed","h02",!1],[-887.4969,48.8258,52.7032,"ed","whitemansion",!1],[-451.5607,-317.6688,35.79,"gnm","mzmc",!1],[-627.7792,-291.8723,36.32455,"h3fty","mob",!1],[-1248.758,-278.8254,42.18369,"hane","limeys",!1],[-644.1272,-281.783,34.5775,"ukn","ifruit",!1],[-1075.946,-246.6766,46.25331,"ukn","lifeinvader",!1],[-1248.758,-278.8254,42.18369,"m4a","noodle",!1],[-669.6585,-157.9072,41.8543,"prompt","parasha_flat",!1],[-1235.782,-370.3234,53.48513,"patoche","concess",!1],[-639.4352,-109.955,41.61554,"prompt","sfd",!1],[-1252.258,-284.7297,38.6194,"hane","subway",!1],[-937.8027,-168.2381,38.44372,"tiwabs","driving_school",!1],[-693.704,-401.4603,50.5202,"ukn","cloth_shop",!1],[-719.7207,-256.1119,47.38764,"ukn","losvendos",!1],[-709.8119,-150.6267,35.75312,"ukn","ponsonbys",!1],[-788.0319,-221.0418,38.54338,"lbc","vximports",!1],[-602.0968,-268.2936,46.46397,"ukn","weeding_store",!1],[-1044.154,303.7161,71.26326,"ukn","yakuza",!1],[1395.273,3637.881,35.3131,"hane","storage",!1],[1852.057,3692.036,34.98832,"hedwig","sheriff",!1],[1510.43,3584.181,41.33319,"ukn","apartments",!1],[1852.057,3692.036,34.98832,"slb2k11","medical",!1],[1959.688,3844.558,34.54492,"smokey","irish",!1],[1701.245,3783.088,35.82606,"ukn","stadthalle",!1],[1993.224,3785.198,31.18413,"tobis","gasstation",!1],[1521.663,3808.713,38.569,"ukn","boath",!1],[2706.75,3480.173,62.7826,"slb2k11","youtool",!1],[113.2469,3607.648,-25,"ukn","hangar",!1],[-53.23052,-1404.289,31.76911,"breze","basketball",!1],[171.0052,-1256.568,13.19834,"ukn","fightclub",!1],[-25.6603,-1404.159,28.5234,"ukn","green",!1],[80.48116,-1567.538,28.60976,"ukn","gun",!1],[343.5766,-1418.791,52.71193,"ukn","hospital",!1],[141.3803,-1344.413,36.33084,"nwo","apartment1",!1],[177.7606,-1315.865,28.36774,"pablito","pawnshop",!1],[-20.93922,-1503.57,35.37562,"pablito","shop_2",!1],[-312.857,-1359.028,25.57935,"ukn","underground",!1],[171.0052,-1266.568,13.19834,"gabz","vanilla",!1],[209.594,-1392.014,32.33036,"verpi","dv_school",!1],[295.4819,-1264.976,28.51804,"ukn","xerogasstation",!1],[1211.986,-3280.568,11.30893,"patoche","stock",!1],[348.1464,-780.1651,34.03671,"pw","krapea",!1],[361.533,-784.6838,49.61207,"ukn","bakery",!1],[478.47,-743.4511,26.34898,"ukn","juicer",!1],[378.6421,-821.9661,30.05758,"ukn","weedshop",!1],[-2797.708,1434.527,99.68897,"k4mb1","banham_canyon",!1],[-2628.157,1700.865,140.6705,"ukn","designerhouse",!1],[-2594.015,1897.012,161.5048,"ukn","devinwestonvilla",!1],[-1882.722,2067.618,139.9843,"ukn","vine",!1],[-1508.253,1507.484,113.6459,"ukn","whitewater",!1],[-1192.939,-1397.63,11.3425,"ukn","ji_it_cf",!1],[-1189.611,-1160.893,10.81227,"dons","cindys",!1],[-1015.028,-752.5662,46.86977,"dons","hotel",!1],[-1163.895,-985.6457,6.265209,"dons","vbch1",!1],[-1189.611,-1160.893,10.81227,"hane","coolbeans",!1],[-1029.933,-988.3876,7.420302,"hane","villas1",!1],[-998.5205,-1093.958,7.442586,"hane","villas1",!1],[-1107.377,-1078.822,7.293438,"hane","villas1",!1],[-989.6573,-885.8148,7.293941,"hane","villas1",!1],[-944.5436,-946.1192,7.442719,"hane","villas1",!1],[-1027.887,-1156.656,7.442719,"hane","villas1",!1],[-1189.611,-1160.893,10.81227,"m4a","noodle02",!1],[-1338.02,-1073.559,5.314173,"matus","pizza",!1],[-936.2693,-1173.864,4.019726,"milos","cookies",!1],[-1190.244,-888.7842,12.98282,"np","burgershot",!1],[-1941.749,548.459,117.1222,"breze","mafia",!1],[-59.21824,832.8979,239.77,"brofx","mansion05",!1],[-116.95,995.82,240.8899,"brofx","mansion06",!1],[-542.0955,811.892,196.5173,"brofx","villa01",!1],[-699.7985,616.1919,154.305,"brofx","villa02",!1],[-511.5942,503.6933,109.171,"brofx","villa04",!1],[-1118.068,492.5964,84.90072,"dons","richman2",!1],[-953.5451,561.4868,104.0391,"k4mb1","modernhouse",!1],[-729.7767,497.6899,110.0808,"lks","blackhouse",!1],[-1056.976,722.6419,164.7538,"lks","sunrise",!1],[-341.3545,516.7669,121.2883,"lks","vnwdhse",!1],[-2012.261,440.3939,102.9294,"lusino","house",!1],[-1285.796,506.5949,99.41862,"mystc","house",!1],[-1512.372,847.1569,180.586,"pw","rehab",!1],[382.783,796.699,189.533,"sanhje","parkranger",!1],[649.8075,526.3099,131.04,"ukn","stage",!1],[-443.0322,1596.979,358.7103,"ukn","big_juice",!1],[2740.922,4415.464,48.86538,"ukn","big_juice",!1],[-764.6009,804.85,216.1005,"ukn","hills",!1],[935.105,42.56564,71.2737,"uj","casino",!1],[27.478,143.0223,97.9288,"k4mb1","artgallery",!1],[-483.3539,203.5518,84.27629,"dons","cont1",!1],[-163.7359,225.463,100.0501,"nwo","sotw",!1],[-167.4832,411.3385,114.775,"flu","vinewood1134",!1],[-572.9328,235.2013,76.87005,"lks","hckrspc",!1],[-348.7703,54.89852,57.08533,"lks","hotel",!1],[-488.1914,283.6568,88.62415,"pla","digitalden",!1],[-174.1826,227.9937,88.16829,"ukn","sexshop",!1],[-84.09413,27.05405,73.72976,"slb2k11","cellphone_store",!1],[-627.2067,238.1175,80.89209,"ukn","beanmachine",!1],[-710.7653,269.3421,86.979,"ukn","dynasty8",!1],[-272.4669,238.2987,89.57464,"ukn","hps",!1],[-379.0805,206.0971,81.24745,"ukn","mai",!1],[-439.4414,272.8415,86.35978,"ukn","splitsides",!1]];function J(e,t){if(1&e&&(i.ynx(0),i._UZ(1,"div",4),i.BQk()),2&e){const e=t.$implicit,n=i.oxw().$implicit;i.xp6(1),i.Udp("background-image","url(assets/map/row-"+n+"-column-"+e+".png)")}}function q(e,t){if(1&e&&(i.ynx(0),i.YNc(1,J,2,2,"ng-container",3),i.BQk()),2&e){const e=i.oxw();i.xp6(1),i.Q6J("ngForOf",e.columns)}}function T(e,t){if(1&e&&(i.ynx(0),i.TgZ(1,"div",5),i._uU(2," \u2717 "),i.qZA(),i.BQk()),2&e){const e=t.$implicit;i.xp6(1),i.Udp("transform","translate("+e.x+"px, "+e.y+"px)"),i.Q6J("title",e.label)}}const B=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:l,data:{title:"Administration",parent:"/"}},{path:"vehicles",component:O,data:{title:"Fahrzeuge",parent:"../dashboard"},children:[{path:":model",component:A}]},{path:"mlos",component:(()=>{class e{constructor(e){this.elementRef=e,this.rows=new Array(32).fill(void 0).map((e,t)=>t+1),this.columns=new Array(32).fill(void 0).map((e,t)=>t+1),this.gameScaleX=.66,this.gameScaleY=.66,this.offsetX=3750,this.offsetY=5515,this.offsetZ=0,this.scale$=new c.X(64),this.mlos$=(0,z.of)($),this.marker$=(0,P.aj)([this.scale$,this.mlos$]).pipe((0,u.U)(([e,t])=>t.map(([t,n,o,s,i,a])=>({x:(+t*this.gameScaleX+this.offsetX)/256*e,y:(-n*this.gameScaleY+this.offsetY)/256*e,z:+o+this.offsetZ,label:i}))))}ngAfterContentInit(){setTimeout(()=>{const e=this.elementRef.nativeElement.querySelector(".content");if(e){const t=JSON.parse(localStorage.getItem("admin:scroll")||"{}");e.scrollLeft=t.x||0,e.scrollTop=t.y||0,e.addEventListener("scroll",function(e){var t,n;console.log(e),localStorage.setItem("admin:scroll",JSON.stringify({x:null===(t=null==e?void 0:e.target)||void 0===t?void 0:t.scrollLeft,y:null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.scrollTop}))},{passive:!0})}})}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(i.SBq))},e.\u0275cmp=i.Xpm({type:e,selectors:[["ng-component"]],decls:6,vars:4,consts:[[1,"toolbar"],[1,"content"],[1,"wrapper"],[4,"ngFor","ngForOf"],[1,"mapseg"],[1,"marker",3,"title"]],template:function(e,t){1&e&&(i._UZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.YNc(3,q,2,1,"ng-container",3),i.YNc(4,T,3,3,"ng-container",3),i.ALo(5,"async"),i.qZA(),i.qZA()),2&e&&(i.xp6(3),i.Q6J("ngForOf",t.rows),i.xp6(1),i.Q6J("ngForOf",i.lcZ(5,2,t.marker$)))},directives:[o.sg],pipes:[o.Ov],styles:["[_nghost-%COMP%]{height:100%;overflow:hidden;display:block}[_nghost-%COMP%]   .content[_ngcontent-%COMP%]{height:100%;overflow:hidden;display:block;overflow:scroll}[_nghost-%COMP%]   .content[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-rows:repeat(32,64px);grid-template-columns:repeat(32,64px)}[_nghost-%COMP%]   .content[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > div.mapseg[_ngcontent-%COMP%]{width:100%;height:100%;background-size:100%;background-position:50%;background-repeat:no-repeat}[_nghost-%COMP%]   .content[_ngcontent-%COMP%] > .wrapper[_ngcontent-%COMP%] > div.marker[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);color:#c00;font-weight:900;text-shadow:-1px -1px 0 #00000088,1px -1px 0 #00000088,-1px 1px 0 #00000088,1px 1px 0 #00000088}"],changeDetection:0}),e})(),data:{title:"mlos",parent:"../dashboard"}}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,s.Bz]]}),e})();var L=n(5980);let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[]]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,s.Bz,U]]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,s.Bz,m.u5,m.UX,b.LD,U]]}),e})(),V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,s.Bz,L.ot,F,S]]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez]]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez]]}),e})(),D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[],imports:[[o.ez,s.Bz.forChild(B),j,V,Y,Q]]}),e})()}}]);