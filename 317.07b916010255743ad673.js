(self.webpackChunknwo_mdt=self.webpackChunknwo_mdt||[]).push([[317],{4317:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SettingsModule:()=>h});var o=n(1511),s=n(5846),c=n(6599),a=n(4689),i=n(1572),r=n(9063),l=n(5980);const p=[{path:"",component:(()=>{class t{constructor(t){this.httpClient=t}auth(){console.log("initiate steam login"),this.httpClient.get("https://api.nwo-rp.de/authenticate").pipe((0,c.b)(t=>console.log(t)),(0,c.b)(t=>{window.open(t.authUrl,"_blank")}),(0,c.b)(t=>localStorage.setItem("session",t.session)),(0,a.w)(()=>this.httpClient.get("https://api.nwo-rp.de/event")),(0,c.b)(t=>console.log(t))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(r.eN))},t.\u0275cmp=i.Xpm({type:t,selectors:[["ng-component"]],decls:2,vars:0,consts:[["mat-flat-button","","color","steam",3,"click"]],template:function(t,e){1&t&&(i._uU(0,"settings "),i.TgZ(1,"button",0),i.NdJ("click",function(){return e.auth()}),i.qZA())},directives:[l.lW],styles:["[_nghost-%COMP%]   button[color=steam][_ngcontent-%COMP%]{background:no-repeat 50%;background-image:url(/assets/steam/steam_small.png);background-size:contain;width:154px;height:23px;transform:scale(.75)}"]}),t})(),data:{title:"Einstellungen",parent:"/"}}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,l.ot]]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({providers:[],imports:[[o.ez,s.Bz.forChild(p),u]]}),t})()}}]);