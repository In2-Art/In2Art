"use strict";(self.webpackChunkWebAppNew=self.webpackChunkWebAppNew||[]).push([[141],{6362:(w,M,c)=>{c.d(M,{N:()=>x});var u=c(5861),b=c(4650),p=c(6345),i=c(1572);let x=(()=>{class t{constructor(C){this.main=C,this.freq=3}ngOnInit(){return(0,u.Z)(function*(){})()}timeout(){}}return t.\u0275fac=function(C){return new(C||t)(b.\u0275\u0275directiveInject(p.J))},t.\u0275cmp=b.\u0275\u0275defineComponent({type:t,selectors:[["app-loading"]],decls:1,vars:0,template:function(C,P){1&C&&b.\u0275\u0275element(0,"mat-spinner")},dependencies:[i.Ou],styles:["[_nghost-%COMP%]     mat-spinner{margin:20px auto}[_nghost-%COMP%]     mat-spinner circle{stroke:#cacaca}.logo[_ngcontent-%COMP%]{width:100px;animation:girar 1s linear infinite normal}@keyframes girar{to{transform:rotate(360deg)}}"]}),t})()},2141:(w,M,c)=>{c.d(M,{u:()=>rt});var u=c(5861),b=c(1274),p=c(8259),i=c(8879),t=(c(2474),c(4650)),v=c(6345),C=c(6272),P=c(6895),g=c(6397),I=c(2839);const y=["barra"];function T(o,s){if(1&o&&t.\u0275\u0275element(0,"app-foto-perfil",6),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275styleProp("left",e.section.barValue||0,"%")("transform","translateX("+-e.section.getBarValue()+"%)")("opacity",null===e.section.valueUser?0:1),t.\u0275\u0275property("user",e.main.apiHelpers.currentUser)}}let _=(()=>{class o{constructor(e){this.main=e}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.actValoracio(e.section)})()}input(e){this.section.setBarValue(e.target.value),this.section.setValueUser(this.section.barValue),this.section.setChanged(!0)}actValoracio(e){var n=this;return(0,u.Z)(function*(){null==e?.valueUser?(n.section.setBarValue(0),n.section.setValueUser(0),n.section.setHasVoted(!1)):(n.section.setBarValue(e?.valueUser||0),n.section.setValueUser(e?.valueUser||0),n.section.setHasVoted(!0))})()}setRating(e){this.section.setBarValue(e),this.section.setHasVoted(!0)}submit(e){var n=this;return(0,u.Z)(function*(){!n.section.isChanged()||n.section.isHasVoted()||(n.section.setLoading(!0),n.section.setValueUser(n.section.barValue),n.section.getBarValue(),yield g.QZ.votar(n.idPostTimeLapseID,n.section.getSectionName(),n.section.getValueUser()),n.section.setHasVoted(!0),yield e(),n.actValoracio(n.section),n.section.setLoading(!1))})()}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(v.J))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-barra-rating"]],viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(y,5),2&e){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.barra=a.first)}},inputs:{idPostTimeLapseID:"idPostTimeLapseID",section:"section",votable:"votable"},decls:7,vars:6,consts:[[1,"barraRating"],[1,"fons"],["type","range","min","0","max","100","step","0",1,"barra",3,"value","disabled","input","click"],["barra",""],[3,"user","left","transform","opacity",4,"ngIf"],[1,"textValorRating"],[3,"user"]],template:function(e,n){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"input",2,3),t.\u0275\u0275listener("input",function(l){return n.input(l)})("click",function(l){return n.input(l)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,T,1,7,"app-foto-perfil",4),t.\u0275\u0275elementStart(5,"span",5),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd()()()),2&e&&(t.\u0275\u0275advance(2),t.\u0275\u0275styleProp("opacity",n.section.isChanged()||n.section.isHasVoted()?null:0),t.\u0275\u0275propertyInterpolate("value",n.section.barValue||0),t.\u0275\u0275property("disabled",n.section.isChanged()&&n.section.isHasVoted()),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",n.section.isChanged()&&n.section.isHasVoted()),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1("",n.section.valueUser||"0"," /100"))},dependencies:[P.NgIf,I.d],styles:['@charset "UTF-8";.barraRating[_ngcontent-%COMP%]{position:relative}.barraRating[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]{position:relative;overflow:hidden;margin:10px;border-radius:10000px;height:30px;width:auto;padding:3px;border:2px solid var(--color-text)}.barraRating[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]   input.barra[_ngcontent-%COMP%]{background-color:transparent;margin:auto;-webkit-appearance:none;position:relative;overflow:hidden;width:100%;height:100%;cursor:pointer;border-radius:10000px;transition:opacity .2s ease}.barraRating[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]   input.barra[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:default}.barraRating[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]   app-foto-perfil[_ngcontent-%COMP%]{position:absolute;top:0;border-radius:10000px;width:26px;height:26px;transition:.5s opacity}.barraRating[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]   .textValorRating[_ngcontent-%COMP%]{pointer-events:none;-webkit-user-select:none;user-select:none;position:absolute;right:0;top:50%;transform:translateY(-50%);margin-right:14px;font-weight:700;font-size:16px;color:#ddd;mix-blend-mode:exclusion}.barra[_ngcontent-%COMP%]::-webkit-slider-runnable-track{background:transparent}.barra[_ngcontent-%COMP%]::-webkit-slider-thumb{background:var(--color-text);box-shadow:-10010px 0 0 10000px var(--color-text);width:20px;height:20px;border:none;border-radius:10000px;background-size:cover;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-appearance:none}.barra[_ngcontent-%COMP%]::-moz-range-track{height:30px;background:transparent}.barra[_ngcontent-%COMP%]::-moz-range-thumb{background:var(--color-text);box-shadow:-10010px 0 0 10000px var(--color-text);height:20px;width:20px;border:none;border-radius:10000px;background-size:cover;-moz-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-sizing:border-box}.barra[_ngcontent-%COMP%]::-ms-fill-lower{background:var(--color-text)}.barra[_ngcontent-%COMP%]::-ms-thumb{background:var(--color-text);box-shadow:-10015px 0 0 10000px var(--color-text);height:33px;width:33px;border:none;border-radius:10000px;background-size:cover;-ms-transition:all .2s ease-in-out;transition:all .2s ease-in-out;box-sizing:border-box}.barra[_ngcontent-%COMP%]::-ms-ticks-after{display:none}.barra[_ngcontent-%COMP%]::-ms-ticks-before{display:none}.barra[_ngcontent-%COMP%]::-ms-track{color:transparent;height:30px;border:none}.barra[_ngcontent-%COMP%]::-ms-tooltip{display:none}']}),o})();const m=["barraRating"];function r(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",4)(1,"h5",5),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"app-barra-rating",6,7),t.\u0275\u0275elementEnd()),2&o){const e=s.$implicit,n=t.\u0275\u0275nextContext();t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.name),t.\u0275\u0275advance(1),t.\u0275\u0275property("idPostTimeLapseID",n.idPostTimeLapseID)("section",e.criteri)}}let f=(()=>{class o{constructor(e){this.main=e,this.carregant=!1,this.sections=[]}ngOnInit(){var e=this;return(0,u.Z)(function*(){yield e.getGlobalArtworkRating(e.idPostTimeLapseID),yield e.prepareSections(e.idPostTimeLapseID),console.log(e.sections),e.valoracio={sections:e.sections,barres:yield e.getRating(),ratingGlobal:0},yield e.getUserRatingValue(e.idPostTimeLapseID)})()}prepareValoracio(){var e=this;return(0,u.Z)(function*(){yield e.prepareSections(e.idPostTimeLapseID),yield e.getRating()})()}getRating(){return(0,u.Z)(function*(){})()}mostrarBotoVotar(){if(!this.barresRating)return!1;let e=this.barresRating.toArray();for(let n=0;n<e.length;n++)if(e[n].section.isChanged()&&!e[n].section.isHasVoted())return!0}deshabilitarBotoVotar(){if(!this.barresRating)return!1;let e=this.barresRating.toArray();for(let n=0;n<e.length;n++)return!!e[n].section.isLoaded()}submit(){var e=this;return(0,u.Z)(function*(){let n=e.barresRating.toArray();console.log("barra: ",n);for(let a=0;a<n.length;a++)yield n[a].submit((0,u.Z)(function*(){yield e.getUserRatingValue(e.idPostTimeLapseID,n[a].section.sectionName)}))})()}prepareSections(e){this.sections[0]={name:"ArtistCareer",criteri:new g.TC(this.main.rateType.getArtistCareerId(),"ArtistCareer",void 0,void 0)},this.sections[1]={name:"HistoricalImportance",criteri:new g.TC(this.main.rateType.getHistoricalImportanceId(),"HistoricalImportance",void 0,void 0)},this.sections[2]={name:"PersonalOpinion",criteri:new g.TC(this.main.rateType.getPersonalOpinionId(),"PersonalOpinion",void 0,void 0)},this.sections[3]={name:"StateOfConservation",criteri:new g.TC(this.main.rateType.getStateOfConservationId(),"StateOfConservation",void 0,void 0)},this.sections[4]={name:"TechnicalOpinion",criteri:new g.TC(this.main.rateType.getTechnicalOpinionId(),"TechnicalOpinion",void 0,void 0)}}getUserRatingValue(e,n){var a=this;return(0,u.Z)(function*(){let l;return null!=n||null!=n?l=yield g.QZ.getBarraUserRated(e).then(d=>{d.forEach(O=>{console.log("res from getBarraUserRated",O)})}):(l=yield g.QZ.getBarraUserRated(e).then(d=>d),console.log("res from getBarraUserRated",l),null!=l&&a.sections.forEach(d=>{d.criteri.valueUser=l.get(d.name),d.criteri.barValue=d.criteri.valueUser,d.criteri.hasVoted=!0,d.criteri.changed=!0})),l})()}getGlobalArtworkRating(e){return(0,u.Z)(function*(){let a=[],l=[];yield g.QZ.getRateGlobalJSON().then(d=>{l.push(Array.from(d.keys())),d.forEach(O=>{O.forEach((at,st)=>{if(e==st){let ct=l.shift();a[ct]=at}})}),console.log("arrRatesAvg: ",a)})})()}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(v.J))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-rating"]],viewQuery:function(e,n){if(1&e&&t.\u0275\u0275viewQuery(m,5),2&e){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.barresRating=a)}},inputs:{idPostTimeLapseID:"idPostTimeLapseID"},decls:4,vars:2,consts:function(){let s;return s="Votar",[["class","criteri row no-gutters",4,"ngFor","ngForOf"],[1,"botoVotar"],[1,"boto","botoPrincipal","botoPetit",3,"disabled","click"],s,[1,"criteri","row","no-gutters"],[1,"textCriteri","col-12","col-md-3"],[1,"col-12","col-md-9",3,"idPostTimeLapseID","section"],["barraRating",""]]},template:function(e,n){1&e&&(t.\u0275\u0275template(0,r,5,3,"div",0),t.\u0275\u0275elementStart(1,"div",1)(2,"button",2),t.\u0275\u0275listener("click",function(){return n.submit()}),t.\u0275\u0275i18n(3,3),t.\u0275\u0275elementEnd()()),2&e&&(t.\u0275\u0275property("ngForOf",n.sections),t.\u0275\u0275advance(2),t.\u0275\u0275property("disabled",n.deshabilitarBotoVotar()))},dependencies:[P.NgForOf,_],styles:["*[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.criteri[_ngcontent-%COMP%]   .textCriteri[_ngcontent-%COMP%]{margin:auto;padding:0 15px}.botoVotar[_ngcontent-%COMP%]{text-align:center;margin:10px 20px 20px}"]}),o})();var h=c(7273),E=c(6362);const R=["commentsComponent"],S=["ratingComponent"],V=["post"],A=["swiper"],N=["moreModal"];function U(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"img",32),t.\u0275\u0275listener("error",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext().$implicit;return t.\u0275\u0275resetView(a.url="assets/in2art/imatges/noImageBig.png")}),t.\u0275\u0275elementEnd()}if(2&o){const e=t.\u0275\u0275nextContext().$implicit,n=t.\u0275\u0275nextContext(3);t.\u0275\u0275property("src",n.prepareLink(e.path)||e.url,t.\u0275\u0275sanitizeUrl)("alt",n.alt)}}function k(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",30),t.\u0275\u0275template(1,U,1,2,"img",31),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!0))}function L(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div"),t.\u0275\u0275template(1,k,2,1,"div",29),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",null==e.p.post?null:e.p.post.files)}}function B(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",33),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate((null==e.ratingComponent||null==e.ratingComponent.globalRating?null:e.ratingComponent.globalRating.toFixed(0))||"~")}}function $(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",33),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate("~"))}function D(o,s){if(1&o&&t.\u0275\u0275element(0,"app-user-info",34),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275property("user",e.p.community)}}function F(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",35),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(null==e.p?null:e.p.title)}}function z(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",36),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.p.dateMaco)}}function G(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",36),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("Unknown",e.p.dateMaco,"")}}function Q(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",36),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate2("",e.p.author,"",e.p.dateMaco,"")}}function Z(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",39),t.\u0275\u0275listener("click",function(){const l=t.\u0275\u0275restoreView(e).$implicit,d=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(d.main.goToMedium(l.text))}),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()}if(2&o){const e=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.text)}}function W(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",37),t.\u0275\u0275template(1,Z,2,1,"button",38),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",e.p.mediums)}}function H(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",42),t.\u0275\u0275listener("click",function(){const l=t.\u0275\u0275restoreView(e).$implicit,d=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(d.main.goToMovement(l.text))}),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()}if(2&o){const e=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.text)}}function X(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",40),t.\u0275\u0275template(1,H,2,1,"button",41),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",e.p.movements)}}function j(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",43),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.p.dimensions)}}function K(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",44),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.p.technique)}}function J(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",45),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.p.priceCurrency)}}function Y(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"p",46),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(null==e.p?null:e.p.description)}}function q(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",49),t.\u0275\u0275listener("click",function(){const l=t.\u0275\u0275restoreView(e).$implicit,d=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(d.main.goToTag(l.text))}),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()}if(2&o){const e=s.$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1("#",e.text,"")}}function tt(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",47),t.\u0275\u0275template(1,q,2,1,"button",48),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",e.p.tags)}}function et(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"div",50),t.\u0275\u0275element(1,"app-rating",51,52),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("idPostTimeLapseID",e.p.postTimelapseId)}}function nt(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",3,4),t.\u0275\u0275template(2,L,2,1,"div",5),t.\u0275\u0275elementStart(3,"div",6),t.\u0275\u0275listener("dblclick",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(a.main.logDebug(a))}),t.\u0275\u0275elementStart(4,"div",7)(5,"button",8),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(a.botoView_click())}),t.\u0275\u0275element(6,"img",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"button",10),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(a.openMoreModal())}),t.\u0275\u0275element(8,"img",11),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(9,"div",12)(10,"button",13),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(a.botoRating_click())}),t.\u0275\u0275elementStart(11,"div",14),t.\u0275\u0275i18n(12,15),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(13,B,2,1,"div",16),t.\u0275\u0275template(14,$,2,1,"div",16),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(15,"div",17)(16,"div"),t.\u0275\u0275template(17,D,1,1,"app-user-info",18),t.\u0275\u0275template(18,F,2,1,"p",19),t.\u0275\u0275template(19,z,2,1,"p",20),t.\u0275\u0275template(20,G,2,1,"p",20),t.\u0275\u0275template(21,Q,2,2,"p",20),t.\u0275\u0275template(22,W,2,1,"div",21),t.\u0275\u0275template(23,X,2,1,"div",22),t.\u0275\u0275template(24,j,2,1,"p",23),t.\u0275\u0275template(25,K,2,1,"p",24),t.\u0275\u0275template(26,J,2,1,"p",25),t.\u0275\u0275template(27,Y,2,1,"p",26),t.\u0275\u0275template(28,tt,2,1,"div",27),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(29,et,3,1,"div",28),t.\u0275\u0275elementEnd()}if(2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275classProp("preview",e.preview)("active",e.active),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",0!=(null==e.p||null==e.p.post?null:e.p.post.files)),t.\u0275\u0275advance(11),t.\u0275\u0275property("ngIf",0!=(null==e.ratingComponent?null:e.ratingComponent.globalRating)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",0==(null==e.ratingComponent?null:e.ratingComponent.globalRating)),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",!e.selfUser(null==e.p||null==e.p.community?null:e.p.community.nickname)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==e.p?null:e.p.title),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",1==e.p.authorType),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",2==e.p.authorType),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",3==e.p.authorType),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.mediums),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.movements),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.dimensions),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.technique),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.priceCurrency),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null==e.p?null:e.p.description),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.p.tags),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!e.preview)}}function ot(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",53),t.\u0275\u0275element(1,"app-loading"),t.\u0275\u0275elementEnd())}function it(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",54),t.\u0275\u0275i18n(1,55),t.\u0275\u0275elementEnd())}i.ZP.use([i.W_,i.tl,i.LW,i.eZ]);let rt=(()=>{class o{constructor(e,n){this.main=e,this.route=n,this.preview=!1,this.active=!1,this.viewPostEnviat=!1,this.preparedP="http://192.168.1.136:1339/311c6497-8afb-4a18-b98a-564ff71fe4a2.jpg",this.alt="",this.autoplay=!0,this.viewOpen=!1,this.ratingOpen=!1,this.commentOpen=!1,this.loadingShared=!1,this.swipeContentPublicacioConfig={autoHeight:!0,resistanceRatio:.666,grabCursor:!1,scrollbar:{draggable:!0},threshold:10}}ngOnInit(){var e=this;return(0,u.Z)(function*(){if(!e.p)return;yield e.p.post.getLanguage(e.main.getLocale()).then(l=>{null!=l&&(null!=l.title&&(e.p.title=l.title),null!=l.description&&(e.p.description=l.description))}),e.alt=`${e.p.title||(e.p.esObra?"Artwork":"Post")} from ${e.p.author}. ${e.p.description}`,!e.p.dateMaco&&e.p.date&&(e.p.dateMaco=new Date(e.p.date).toLocaleDateString(e.main.getLocale(),{dateStyle:"long"})),1!=e.p.authorType&&""!=e.p.dateMaco&&(e.p.dateMaco=`, (${e.p.dateMaco})`),p("video").prop("muted",!0),e.marcarPostActiu(),e.reproduirVideoPostActiu();let a=e;p(window).scroll(function(){a.marcarPostActiu()}),e.route.snapshot.queryParams.comment&&e.openDivComment(),console.log(e.p)})()}prepareLink(e){return b.c.prependImagesUrl(e)}isArtwork(e){return!!e.artist}selfUser(e){return e==this.main.apiHelpers.currentUser.nickname}openDivComment(){let e=setInterval(()=>{document.body.contains(document.querySelector(".divComment"))&&(clearInterval(e),this.botoComment_click(),this.findComment(this.route.snapshot.queryParams.comment))},350)}findComment(e){let n=setInterval(()=>{document.body.contains(document.getElementById(`comment-${e}`))&&(clearInterval(n),this.checkComment(e)&&(document.getElementById(`comment-${e}`).parentElement.parentElement.parentElement.style.display="block"),document.getElementById(`comment-${e}`).scrollIntoView({behavior:"smooth"}),document.getElementById(`comment-${e}`).style.background="#9929296e")},350)}checkComment(e){return"mainComment"!=document.getElementById(`comment-${e}`).parentNode.parentElement.className.split(" ")[0]}botoComment_click(){this.viewOpen=!1,this.commentOpen=!this.commentOpen,this.ratingOpen=!1,this.actView(),this.actComment(),this.actRating()}botoView_click(){this.viewOpen=!this.viewOpen,this.commentOpen=!1,this.ratingOpen=!1,this.actView(),this.actComment(),this.actRating()}botoRating_click(){this.viewOpen=!1,this.commentOpen=!1,this.ratingOpen=!this.ratingOpen,this.actView(),this.actComment(),this.actRating()}actComment(){let e=p(this.post.nativeElement).find(".botoComment"),n=p(this.post.nativeElement).find(".divComment");e.attr("data-open",this.commentOpen),this.commentOpen?n.slideDown(300):n.slideUp(300)}actView(){let e=p(this.post.nativeElement).find(".botoView"),n=p(this.post.nativeElement).find(".divInfo");e.attr("data-open",this.viewOpen),this.viewOpen?n.slideDown(300):n.slideUp(300)}actRating(){let e=p(this.post.nativeElement).find(".botoRating"),n=p(this.post.nativeElement).find(".divRating");e.attr("data-open",this.ratingOpen),this.ratingOpen?n.slideDown(300):n.slideUp(300)}marcarPostActiu(){let e=p("swiper.swipeContentPublicacio:in-viewport").first();if(!e.length)return;this.swiperActiu=e[0].swiper;let n=e.parents(".post");this.active=n[0]==this.post?.nativeElement,this.active&&this.reproduirVideoPostActiu()}reproduirVideoPostActiu(){var e=this;return(0,u.Z)(function*(){let n=p(".post.active .swipeContentPublicacio .swiper-slide.swiper-slide-active video").first();n.length&&(yield n[0].play()),e.pausaAltresVideos(n)})()}reproduirVideoAquestSlide(e){var n=this;return(0,u.Z)(function*(){if(n.autoplay){let a=p(e.slides).filter(".swiper-slide.swiper-slide-active").find("video").first();a.length&&(yield a[0].play()),n.pausaAltresVideos(a)}})()}video_click(e){p(e).prop("paused")?this.autoplay||(this.autoplay=!0):this.autoplay=!this.autoplay,this.playPauseVideo(e),this.pausaAltresVideos(e)}playPauseVideo(e){p(e).trigger(p(e).prop("paused")?"play":"pause")}pausaAltresVideos(e){p(".post .swiper-slide video").not(e).trigger("pause")}openMoreModal(){let e={accio:()=>{this.main.notInMyBeta()},img:"assets/in2art/icones/view-collection.svg",text:this.main.t("View collection"),class:"view"},n={accio:()=>{this.main.notInMyBeta()},img:"assets/in2art/icones/save.svg",text:this.main.t("Save"),class:"save"},a={img:"assets/in2art/icones/share.svg",text:this.main.t("Share"),class:"share"},l={accio:()=>{this.main.copy(this.main.urlBase+"/post/"+this.p.idPost)},img:"assets/in2art/icones/link.svg",text:this.main.t("Copy URL"),class:"copy"},d={accio:()=>{this.main.notInMyBeta()},img:"assets/in2art/icones/report.svg",text:this.main.t("Report"),class:"report"},O=[e,n,a];window.isSecureContext&&O.push(l),this.main.currentUser.username!=this.p.user.username&&O.push(d)}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(v.J),t.\u0275\u0275directiveInject(C.gz))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-publicacio"]],viewQuery:function(e,n){if(1&e&&(t.\u0275\u0275viewQuery(R,5),t.\u0275\u0275viewQuery(S,5),t.\u0275\u0275viewQuery(V,5),t.\u0275\u0275viewQuery(A,5),t.\u0275\u0275viewQuery(N,5)),2&e){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.commentsComponent=a.first),t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.ratingComponent=a.first),t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.post=a.first),t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.swiper=a.first),t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.moreModal=a.first)}},inputs:{postId:"postId",p:"p",idObra:"idObra",preview:"preview"},decls:3,vars:3,consts:function(){let s,e;return s="Votar",e="No se ha encontrado ninguna publicaci\xF3n/obra de arte\n",[["class","post",3,"preview","active",4,"ngIf"],["class","carregant",4,"ngIf"],["class","p-4 fs-2 align-center",4,"ngIf"],[1,"post"],["post",""],[4,"ngIf"],[1,"botons","row","no-gutters",3,"dblclick"],[1,"col-5","col-sm-3","row","no-gutters",2,"height","100%"],[1,"col-5","col-sm-5","boto","botoView",3,"click"],["src","assets/in2art/icones/view.svg","alt","View"],[1,"col-5","col-sm-5","boto","botoMore",3,"click"],["src","assets/in2art/icones/more.svg","alt","More"],[1,"col-4","col-sm-7","divBotoRating"],[1,"botoRating","boto","botoPrincipal",3,"click"],[1,"text"],s,["class","puntuacio",4,"ngIf"],[1,"divInfo",2,"display","none"],[3,"user",4,"ngIf"],["class","title",4,"ngIf"],["class","authorAndDate",4,"ngIf"],["class","divMediums",4,"ngIf"],["class","divMovements",4,"ngIf"],["class","dimensions",4,"ngIf"],["class","technique",4,"ngIf"],["class","price",4,"ngIf"],["class","description",4,"ngIf"],["class","divTags",4,"ngIf"],["class","divRating nodrag noselect","style","display: none;",4,"ngIf"],["class","filesImage",4,"ngFor","ngForOf"],[1,"filesImage"],["class","media-content",3,"src","alt","error",4,"ngIf"],[1,"media-content",3,"src","alt","error"],[1,"puntuacio"],[3,"user"],[1,"title"],[1,"authorAndDate"],[1,"divMediums"],["class","boto botoSecundari botoMedium",3,"click",4,"ngFor","ngForOf"],[1,"boto","botoSecundari","botoMedium",3,"click"],[1,"divMovements"],["class","boto botoSecundari botoMovement",3,"click",4,"ngFor","ngForOf"],[1,"boto","botoSecundari","botoMovement",3,"click"],[1,"dimensions"],[1,"technique"],[1,"price"],[1,"description"],[1,"divTags"],["class","boto botoTag",3,"click",4,"ngFor","ngForOf"],[1,"boto","botoTag",3,"click"],[1,"divRating","nodrag","noselect",2,"display","none"],[3,"idPostTimeLapseID"],["ratingComponent",""],[1,"carregant"],[1,"p-4","fs-2","align-center"],e]},template:function(e,n){1&e&&(t.\u0275\u0275template(0,nt,30,20,"div",0),t.\u0275\u0275template(1,ot,2,0,"div",1),t.\u0275\u0275template(2,it,2,0,"div",2)),2&e&&(t.\u0275\u0275property("ngIf",n.p&&0!=(null==n.p.post?null:n.p.post.files)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",void 0===n.p),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",null===n.p))},dependencies:[P.NgForOf,P.NgIf,f,h.M,E.N],styles:['@charset "UTF-8";  .post.preview .botoComment,   .post.preview .botoMore,   .post.preview .botoRating,   .post.preview app-user-info .boto.usuari,   .post.preview .botoMedium,   .post.preview .botoMovement,   .post.preview .botoTag{pointer-events:none}.post[_ngcontent-%COMP%]{background-color:var(--color-fons-card);border:var(--border-card);box-shadow:0 19px 38px #0000004d,0 15px 12px #00000038;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d;border-radius:0;margin:0 auto;overflow:hidden;text-align:left}.post[_ngcontent-%COMP%]   .filesImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:cover;margin-left:auto;margin-right:auto;display:block}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]{height:50px;border-top:var(--border-card)}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoView[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoComment[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoMore[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   .divRating[_ngcontent-%COMP%]{border:none;background:none;height:100%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoComment[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoMore[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   .divRating[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:none;height:80%;width:45%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoView[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:rotateX(0);transition:transform .3s linear}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoView[data-open=true][_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transform:rotateX(180deg)}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   button.botoMore[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:60%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   .divBotoRating[_ngcontent-%COMP%]   button.botoRating[_ngcontent-%COMP%]{display:inline-flex;border-radius:50px;padding:0;margin-top:9px;margin-left:15px;font-size:1rem}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   .divBotoRating[_ngcontent-%COMP%]   button.botoRating[_ngcontent-%COMP%]   div.text[_ngcontent-%COMP%]{font-size:inherit;margin:auto 3px auto 9px}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   .divBotoRating[_ngcontent-%COMP%]   button.botoRating[_ngcontent-%COMP%]   div.puntuacio[_ngcontent-%COMP%]{overflow:hidden;font-size:inherit;background-color:var(--color-fons-card);color:var(--color-text);border-radius:20px;margin:4px;height:24px;width:38px}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   div.botonsSlider[_ngcontent-%COMP%]{height:100%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   div.botonsSlider[_ngcontent-%COMP%]   .botoSlider[_ngcontent-%COMP%]{border:none;background:none;height:100%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   div.botonsSlider[_ngcontent-%COMP%]   .botoSlider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:none;height:50%;width:70%}.post[_ngcontent-%COMP%]   .botons[_ngcontent-%COMP%]   div.botonsSlider[_ngcontent-%COMP%]   .botoSlider[_ngcontent-%COMP%]:disabled{opacity:0}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]{padding:20px;text-align:left}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   app-user-info[_ngcontent-%COMP%]{display:flex;width:-moz-fit-content;width:fit-content;background:var(--color-fons-card-2);border:var(--border-card);border-radius:50px;margin:0px auto 1rem 0;transition:all .2s}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:30px}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .authorAndDate[_ngcontent-%COMP%]{font-size:20px}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMediums[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMovements[_ngcontent-%COMP%]{margin-bottom:1rem}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMediums[_ngcontent-%COMP%]   .botoMedium[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMediums[_ngcontent-%COMP%]   .botoMovement[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMovements[_ngcontent-%COMP%]   .botoMedium[_ngcontent-%COMP%], .post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .divMovements[_ngcontent-%COMP%]   .botoMovement[_ngcontent-%COMP%]{margin:0 10px 5px 0}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-weight:700;color:#b20}.post[_ngcontent-%COMP%]   .divInfo[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{white-space:pre-line;color:gray;font-size:17px}[_nghost-%COMP%]     .post swiper .media-content{width:100%;max-height:80vh;object-fit:contain;display:block;margin:auto}[_nghost-%COMP%]     .post swiper .swiper-scrollbar{width:100%;left:0;bottom:0;height:3px;border-radius:10px;background:rgba(0,0,0,.1333333333)}[_nghost-%COMP%]     .post swiper .swiper-scrollbar .swiper-scrollbar-drag{border-radius:10px;background:var(--color-text)}']}),o})()},7273:(w,M,c)=>{c.d(M,{M:()=>T});var u=c(5861),b=c(1274),p=c(3769),i=c(4650),x=c(6345),t=c(6895),v=c(2839);function C(_,m){if(1&_){const r=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"button",2),i.\u0275\u0275listener("click",function(){i.\u0275\u0275restoreView(r);const h=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(h.checkIfUserIsPublic(h.user.nickname))}),i.\u0275\u0275element(1,"app-foto-perfil",3),i.\u0275\u0275elementStart(2,"div",4)(3,"div",5),i.\u0275\u0275text(4),i.\u0275\u0275elementEnd(),i.\u0275\u0275elementStart(5,"div",6),i.\u0275\u0275text(6),i.\u0275\u0275elementEnd()()()}if(2&_){const r=i.\u0275\u0275nextContext();i.\u0275\u0275advance(1),i.\u0275\u0275property("user",r.user),i.\u0275\u0275advance(3),i.\u0275\u0275textInterpolate2("",r.user.name," ",r.user.lastName,""),i.\u0275\u0275advance(2),i.\u0275\u0275textInterpolate1("@",r.user.nickname,"")}}function P(_,m){1&_&&(i.\u0275\u0275elementStart(0,"div",7),i.\u0275\u0275i18n(1,8),i.\u0275\u0275elementEnd())}function g(_,m){if(1&_&&(i.\u0275\u0275elementStart(0,"div",6),i.\u0275\u0275text(1),i.\u0275\u0275elementEnd()),2&_){const r=i.\u0275\u0275nextContext(2);i.\u0275\u0275advance(1),i.\u0275\u0275textInterpolate1("@",r.user.nickname,"")}}function I(_,m){if(1&_){const r=i.\u0275\u0275getCurrentView();i.\u0275\u0275elementStart(0,"button",2),i.\u0275\u0275listener("click",function(){i.\u0275\u0275restoreView(r);const h=i.\u0275\u0275nextContext();return i.\u0275\u0275resetView(h.checkIfUserIsPublic(h.user.nickname))}),i.\u0275\u0275element(1,"app-foto-perfil",3),i.\u0275\u0275elementStart(2,"div",4)(3,"div",5),i.\u0275\u0275text(4),i.\u0275\u0275elementEnd(),i.\u0275\u0275template(5,g,2,1,"div",9),i.\u0275\u0275elementEnd()()}if(2&_){const r=i.\u0275\u0275nextContext();i.\u0275\u0275advance(1),i.\u0275\u0275property("user",r.user),i.\u0275\u0275advance(3),i.\u0275\u0275textInterpolate2("",r.user.name," ",r.user.lastName,""),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngIf",!(null!=r.user&&r.user.anonNickname))}}function y(_,m){1&_&&(i.\u0275\u0275elementStart(0,"div",7),i.\u0275\u0275i18n(1,10),i.\u0275\u0275elementEnd())}let T=(()=>{class _{constructor(r){this.main=r,this.utils=b.c,this.isAnonUser=!1,this.anonUser={name:"Anonymous",lastName:"",anonNickname:"Anonymous",photo:"assets/in2art/imatges/profileDefaultSolidGray.png"}}ngOnInit(){var r=this;return(0,u.Z)(function*(){"Anonymous"!=r.user?.username&&r.user?.profile?(r.id&&(r.user=yield p.J.getUserById(r.id)),r.username&&(r.user=yield p.J.getUserByNickname(r.username)),r.user&&(r.user=yield p.J.getUserById(r.user.userProfileId))):(null==r.user||null==r.user)&&(r.isAnonUser=!0,r.user=r.anonUser)})()}checkIfUserIsPublic(r){this.isNicknameValid(r)?this.main.goTo(r):this.main.toastDanger("User is not public!")}isNicknameValid(r){return r.toLowerCase(),!("anonymous"==r||"unknown"==r)}}return _.\u0275fac=function(r){return new(r||_)(i.\u0275\u0275directiveInject(x.J))},_.\u0275cmp=i.\u0275\u0275defineComponent({type:_,selectors:[["app-user-info"]],inputs:{id:"id",username:"username",user:"user"},decls:4,vars:4,consts:function(){let m,r;return m="Cargando...",r="Cargando...",[["class","boto botoGeneric usuari",3,"click",4,"ngIf"],["class","loading",4,"ngIf"],[1,"boto","botoGeneric","usuari",3,"click"],[3,"user"],[1,"textosUsuari"],[1,"nom"],[1,"username"],[1,"loading"],m,["class","username",4,"ngIf"],r]},template:function(r,f){1&r&&(i.\u0275\u0275template(0,C,7,4,"button",0),i.\u0275\u0275template(1,P,2,0,"div",1),i.\u0275\u0275template(2,I,6,4,"button",0),i.\u0275\u0275template(3,y,2,0,"div",1)),2&r&&(i.\u0275\u0275property("ngIf",!f.anonUser),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngIf",!f.user),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngIf",f.anonUser),i.\u0275\u0275advance(1),i.\u0275\u0275property("ngIf",!f.user))},dependencies:[t.NgIf,v.d],styles:[".usuari[_ngcontent-%COMP%]{background-color:transparent;height:6rem;padding:1rem;border-radius:inherit;display:inline-flex}.usuari[_ngcontent-%COMP%]   app-foto-perfil[_ngcontent-%COMP%]{height:100%}.usuari[_ngcontent-%COMP%]   .textosUsuari[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}.usuari[_ngcontent-%COMP%]   .textosUsuari[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]{font-size:1.4rem}.usuari[_ngcontent-%COMP%]   .textosUsuari[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-size:1rem;color:gray}.loading[_ngcontent-%COMP%]{line-height:6rem;font-size:1.2rem;padding:0 20px;font-weight:700;animation:loadingText 1s ease infinite alternate}@keyframes loadingText{0%{color:var(--color-text)}to{color:gray}}@media only screen and (max-width: 576px){.textosUsuari[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]{font-size:4vw}.textosUsuari[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]{font-size:2vw}}"]}),_})()}}]);