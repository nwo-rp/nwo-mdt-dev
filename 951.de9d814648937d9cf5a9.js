(self.webpackChunknwo_mdt=self.webpackChunknwo_mdt||[]).push([[951],{951:(t,e,n)=>{"use strict";n.r(e),n.d(e,{RealEstateModule:()=>ot});var o=n(1511),r=n(5846),a=n(1572);let i=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,r.Bz]]}),t})();const s=function(){return["..","employees"]},c=function(){return["..","properties"]},l=function(){return["..","workforce_management"]};let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["ng-component"]],decls:6,vars:6,consts:[[3,"routerLink"]],template:function(t,e){1&t&&(a.TgZ(0,"button",0),a._uU(1,"employees list"),a.qZA(),a.TgZ(2,"button",0),a._uU(3,"properties"),a.qZA(),a.TgZ(4,"button",0),a._uU(5," workforce management\n"),a.qZA()),2&t&&(a.Q6J("routerLink",a.DdM(3,s)),a.xp6(2),a.Q6J("routerLink",a.DdM(4,c)),a.xp6(2),a.Q6J("routerLink",a.DdM(5,l)))},directives:[r.rH],styles:["[_nghost-%COMP%]{min-height:100%;display:grid;grid-template-columns:1fr 1fr}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{border:none}"]}),t})();var p=n(3691),u=n(7033);let d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,p.Ps,u.p0]]}),t})();var f=n(9063);let g=(()=>{class t{constructor(t,e){this.httpClient=t,this.environment=e}get(){return this.httpClient.get(`${this.environment.endpoint}/real_estate/employees`)}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(f.eN),a.LFG("environment"))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function h(t,e){1&t&&(a.TgZ(0,"th",10),a.SDv(1,11),a.qZA())}function y(t,e){if(1&t&&(a.TgZ(0,"td",12),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Oqu(t.firstname)}}function b(t,e){1&t&&(a.TgZ(0,"th",10),a.SDv(1,13),a.qZA())}function Z(t,e){if(1&t&&(a.TgZ(0,"td",12),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Oqu(t.lastname)}}function C(t,e){1&t&&(a.TgZ(0,"th",10),a.SDv(1,14),a.qZA())}function _(t,e){if(1&t&&(a.TgZ(0,"td",12),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.Oqu(t.job_grade)}}function w(t,e){1&t&&(a.TgZ(0,"th",10),a.SDv(1,15),a.qZA())}function v(t,e){1&t&&(a.TgZ(0,"td",12),a.TgZ(1,"mat-icon",16),a._uU(2,"edit"),a.qZA(),a.TgZ(3,"mat-icon",16),a._uU(4,"delete"),a.qZA(),a.qZA())}function O(t,e){1&t&&a._UZ(0,"tr",17)}function A(t,e){1&t&&a._UZ(0,"tr",18)}function D(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"table",1),a.ynx(2,2),a.YNc(3,h,2,0,"th",3),a.YNc(4,y,2,1,"td",4),a.BQk(),a.ynx(5,5),a.YNc(6,b,2,0,"th",3),a.YNc(7,Z,2,1,"td",4),a.BQk(),a.ynx(8,6),a.YNc(9,C,2,0,"th",3),a.YNc(10,_,2,1,"td",4),a.BQk(),a.ynx(11,7),a.YNc(12,w,2,0,"th",3),a.YNc(13,v,5,0,"td",4),a.BQk(),a.YNc(14,O,1,0,"tr",8),a.YNc(15,A,1,0,"tr",9),a.qZA(),a.BQk()),2&t){const t=e.ngIf,n=a.oxw();a.xp6(1),a.Q6J("dataSource",t),a.xp6(13),a.Q6J("matHeaderRowDef",n.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",n.displayedColumns)}}let x=(()=>{class t{constructor(t){this.medicEmployeesResource=t,this.employees$=this.medicEmployeesResource.get(),this.displayedColumns=["firstname","lastname","job_grade","actions"]}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(g))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ng-component"]],decls:2,vars:3,consts:function(){let t,e,n,o;return t="Vorname",e="Nachname",n="Berufsgrad",o="Aktionen",[[4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","firstname"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","lastname"],["matColumnDef","job_grade"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],t,["mat-cell",""],e,n,o,[1,"material-icons"],["mat-header-row",""],["mat-row",""]]},template:function(t,e){1&t&&(a.YNc(0,D,16,3,"ng-container",0),a.ALo(1,"async")),2&t&&a.Q6J("ngIf",a.lcZ(1,1,e.employees$))},directives:[o.O5,u.BZ,u.w1,u.fO,u.Dz,u.as,u.nj,u.ge,u.ev,p.Hw,u.XQ,u.Gk],pipes:[o.Ov],styles:["[_nghost-%COMP%]   table[_ngcontent-%COMP%]{table-layout:fixed;width:100%}"]}),t})();var $=n(5980),z=n(5583);let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez]]}),t})();const k={0:"Unbekannt",1:"Schlafzimmer",2:"Wohnzimmer",3:"Badezimmer"};let q=(()=>{class t{transform(t){return k[`${t}`]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Yjl({name:"roomType",type:t,pure:!0}),t})(),M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,r.Bz,p.Ps,u.p0,$.ot,z.LD,P]]}),t})(),T=(()=>{class t{constructor(t,e){this.httpClient=t,this.environment=e}get(){return this.httpClient.get(`${this.environment.endpoint}/real_estate/properties`)}getOne(t){return this.httpClient.get(`${this.environment.endpoint}/real_estate/properties/${t}`)}putOne(t,e){return this.httpClient.put(`${this.environment.endpoint}/real_estate/properties/${t}`,e)}postOne(t){return this.httpClient.post(`${this.environment.endpoint}/real_estate/properties/`,t)}}return t.\u0275fac=function(e){return new(e||t)(a.LFG(f.eN),a.LFG("environment"))},t.\u0275prov=a.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Y(t,e){1&t&&(a.TgZ(0,"th",11),a.SDv(1,12),a.qZA())}function Q(t,e){1&t&&a._UZ(0,"td",13),2&t&&a.Udp("background-image","URL(/assets/real_estate/"+e.$implicit.images[0]+".jpg)")}function N(t,e){1&t&&(a.TgZ(0,"th",11),a.SDv(1,14),a.qZA())}function B(t,e){if(1&t&&(a.TgZ(0,"td",13),a._uU(1),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.AsE(" ",t.area," ",t.street," ")}}function J(t,e){1&t&&(a.TgZ(0,"th",11),a.SDv(1,15),a.qZA())}function U(t,e){if(1&t&&(a.TgZ(0,"li"),a._uU(1),a.ALo(2,"roomType"),a.qZA()),2&t){const t=e.$implicit;a.xp6(1),a.AsE(" ",t.amount,"x ",a.lcZ(2,2,t.type)," ")}}function R(t,e){if(1&t&&(a.TgZ(0,"td",13),a.TgZ(1,"ul"),a.YNc(2,U,3,4,"li",16),a.qZA(),a.qZA()),2&t){const t=e.$implicit;a.xp6(2),a.Q6J("ngForOf",t.rooms)}}function S(t,e){1&t&&a._UZ(0,"tr",17)}const L=function(t){return[t]};function j(t,e){1&t&&a._UZ(0,"tr",18),2&t&&a.Q6J("routerLink",a.VKq(1,L,e.$implicit.id))}function I(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"table",2),a.ynx(2,3),a.YNc(3,Y,2,0,"th",4),a.YNc(4,Q,1,2,"td",5),a.BQk(),a.ynx(5,6),a.YNc(6,N,2,0,"th",4),a.YNc(7,B,2,2,"td",7),a.BQk(),a.ynx(8,8),a.YNc(9,J,2,0,"th",4),a.YNc(10,R,3,1,"td",7),a.BQk(),a.YNc(11,S,1,0,"tr",9),a.YNc(12,j,1,3,"tr",10),a.qZA(),a.BQk()),2&t){const t=e.ngIf,n=a.oxw();a.xp6(1),a.Q6J("dataSource",t),a.xp6(10),a.Q6J("matHeaderRowDef",n.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",n.displayedColumns)}}let F=(()=>{class t{constructor(t){this.realEstatePropertiesResource=t,this.properties$=this.realEstatePropertiesResource.get(),this.displayedColumns=["image","location","rooms"]}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(T))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ng-component"]],decls:5,vars:3,consts:function(){let t,e,n;return t="image",e="location",n="rooms",[[1,"toolbar"],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","image"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"backgroundImage",4,"matCellDef"],["matColumnDef","location"],["mat-cell","",4,"matCellDef"],["matColumnDef","rooms"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"routerLink",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],t,["mat-cell",""],e,n,[4,"ngFor","ngForOf"],["mat-header-row",""],["mat-row","",3,"routerLink"]]},template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"pre"),a._uU(2,"filter (coming soon ...)"),a.qZA(),a.qZA(),a.YNc(3,I,13,3,"ng-container",1),a.ALo(4,"async")),2&t&&(a.xp6(3),a.Q6J("ngIf",a.lcZ(4,1,e.properties$)))},directives:[o.O5,u.BZ,u.w1,u.fO,u.Dz,u.as,u.nj,u.ge,u.ev,o.sg,u.XQ,u.Gk,r.rH],pipes:[o.Ov,q],styles:["[_nghost-%COMP%]   table[_ngcontent-%COMP%]{table-layout:fixed;width:100%}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{height:min(10vh,10vw)}[_nghost-%COMP%]   table[_ngcontent-%COMP%]   .mat-column-image[_ngcontent-%COMP%]{background-size:cover;background-repeat:no-repeat;width:calc(min(10vh, 10vw) * 1.77777777778)}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;padding:0 10px}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:auto 0}[_nghost-%COMP%]   .toolbar[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{width:250px}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{margin:auto;flex:1 1}"]}),t})();var E=n(6073),H=n(6283),G=n(6756);let X=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.ez,E.UX,H.lN,G.c]]}),t})();var K=n(4762),V=n(878),W=n(3835),tt=n(4689),et=n(6599);const nt=[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",component:m,data:{title:"Dashboard",parent:"/"}},{path:"employees",component:x,data:{title:"Angestellte",parent:"../dashboard"}},{path:"properties",component:F,data:{title:"properties",parent:"../dashboard"}},{path:"properties/:PropertiesId",component:(()=>{let t=class{constructor(t,e){this.activatedRoute=t,this.realEstatePropertiesResource=e,this.property$=this.activatedRoute.params.pipe((0,W.h)(t=>void 0!==t.propertyId),(0,tt.w)(t=>"new"===t.propertyId?(0,V.of)({}):this.realEstatePropertiesResource.getOne(t.propertyId))),this.propertyFormSub=this.property$.pipe((0,et.b)(t=>{this.propertyForm.reset(t)})).subscribe(),this.propertyForm=new E.cw({})}};return t.\u0275fac=function(e){return new(e||t)(a.Y36(r.gz),a.Y36(T))},t.\u0275cmp=a.Xpm({type:t,selectors:[["ng-component"]],decls:3,vars:1,consts:[[1,"property-form",3,"formGroup"]],template:function(t,e){1&t&&(a.TgZ(0,"form",0),a.TgZ(1,"pre"),a._uU(2,"    coming soon ...\n  "),a.qZA(),a.qZA()),2&t&&a.Q6J("formGroup",e.propertyForm)},directives:[E._Y,E.JL,E.sg],styles:['[_nghost-%COMP%]   .property-form[_ngcontent-%COMP%]{display:grid;grid-template-areas:"firstname firstname lastname lastname . ." "diagnosis diagnosis diagnosis diagnosis diagnosis diagnosis" "treatment treatment treatment treatment treatment treatment" "comment comment comment comment comment comment";margin:20px}']}),t=(0,K.gn)([function(t){const e=t.prototype.ngOnDestroy;t.prototype.ngOnDestroy=function(){for(const t in this){const e=this[t];"function"==typeof e.subscribe&&e.unsubscribe()}null==e||e.apply()}},(0,K.w6)("design:paramtypes",[r.gz,T])],t),t})(),data:{title:"property",parent:".."}}];let ot=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[],imports:[[o.ez,r.Bz.forChild(nt),i,d,M,X]]}),t})()}}]);