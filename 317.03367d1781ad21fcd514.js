(self.webpackChunknwo_mdt=self.webpackChunknwo_mdt||[]).push([[317],{4317:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SettingsModule:()=>m});var o=n(1511),s=n(5846),i=n(6599),c=n(4689),r=n(1572),a=n(9063),l=n(5980);const u=[{path:"",component:(()=>{class t{constructor(t,e){this.httpClient=t,this.environment=e}auth(){console.log("initiate steam login"),this.httpClient.get(`${this.environment.endpoint}/authenticate`).pipe((0,i.b)(t=>console.log(t)),(0,i.b)(t=>{window.open(t.authUrl,"_blank")}),(0,i.b)(t=>localStorage.setItem("session",t.session)),(0,c.w)(()=>this.httpClient.get(`${this.environment.endpoint}/event`)),(0,i.b)(t=>console.log(t))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a.eN),r.Y36("environment"))},t.\u0275cmp=r.Xpm({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[["mat-flat-button","","color","steam",3,"click"]],template:function(t,e){1&t&&(r._uU(0,"settings "),r.TgZ(1,"button",0),r.NdJ("click",function(){return e.auth()}),r.qZA())},directives:[l.lW],styles:["[_nghost-%COMP%]   button[color=steam][_ngcontent-%COMP%]{background:no-repeat 50%;background-image:url(/assets/steam/steam_small.png);background-size:contain;width:154px;height:23px;transform:scale(.75)}"]}),t})(),data:{title:"Einstellungen",parent:"/"}}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,l.ot]]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({providers:[],imports:[[o.ez,s.Bz.forChild(u),p]]}),t})()}}]);