"use strict";(self.webpackChunkWebAppNew=self.webpackChunkWebAppNew||[]).push([[534],{6534:(fe,f,l)=>{l.r(f),l.d(f,{ProfileModule:()=>ue});var u=l(6895),b=l(1670),v=l(4006),T=l(4537),p=l(4270),c=l(5861),P=l(8879),h=l(7873),m=l(5009),x=l(9746),e=l(4650),N=l(6345),g=l(7753),w=l(9653),S=l(1816),A=l(7273),R=l(2839),y=l(6362),$=l(4830),k=l(6188);const L=["followersModal"],D=["followingModal"];function G(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"p",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",t.user.userProfile.name," ")}}function U(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"p",28),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" @",t.user.userNickname.nicknameDisplayed," ")}}function z(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"a",29),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275propertyInterpolate1("href","https://",t.profileUser.languages[0].website,"",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",t.profileUser.languages[0].website," ")}}function B(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"p",30),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.profileUser.languages[0].biography)}}function V(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",31)(1,"button",32),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.main.goTo("/edit-profile"))}),e.\u0275\u0275i18n(2,33),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"button",32),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.clickInsights())}),e.\u0275\u0275i18n(5,34),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",32),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.clickMessage())}),e.\u0275\u0275i18n(8,35),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd()()}2&n&&(e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(3,3,"Edit profile")),e.\u0275\u0275i18nApply(2),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(6,5,"Insights")),e.\u0275\u0275i18nApply(5),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(9,7,"Message")),e.\u0275\u0275i18nApply(8))}function X(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",40),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(i.clickFollow())}),e.\u0275\u0275i18n(1,41),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("disabled",t.carregantBotoFollow),e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,2,"Follow")),e.\u0275\u0275i18nApply(1)}}function Q(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",42),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(3);return e.\u0275\u0275resetView(i.clickUnfollow())}),e.\u0275\u0275i18n(1,43),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275property("disabled",t.carregantBotoFollow),e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,2,"Unfollow")),e.\u0275\u0275i18nApply(1)}}function H(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",31),e.\u0275\u0275template(1,X,3,4,"button",36),e.\u0275\u0275template(2,Q,3,4,"button",37),e.\u0275\u0275elementStart(3,"button",32),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.clickSubscribe())}),e.\u0275\u0275i18n(4,38),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"button",32),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.clickMessage())}),e.\u0275\u0275i18n(7,39),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.estasSeguint),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.estasSeguint),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(5,4,"Subscribe")),e.\u0275\u0275i18nApply(4),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(8,6,"Message")),e.\u0275\u0275i18nApply(7)}}function j(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",44),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.main.goTo("/new/artwork"))}),e.\u0275\u0275element(1,"img",45),e.\u0275\u0275elementEnd()}}function W(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"button",46,47),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275reference(1),o=e.\u0275\u0275nextContext(2);e.\u0275\u0275styleProp("height",t.offsetWidth,"px"),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",null==o.artworksNomesImg[0]?null:o.artworksNomesImg[0].content[0].url,e.\u0275\u0275sanitizeUrl)}}function Z(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"button",46,49),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275reference(1),o=e.\u0275\u0275nextContext(2);e.\u0275\u0275styleProp("height",t.offsetWidth,"px"),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",null==o.artworksNomesImg[1]?null:o.artworksNomesImg[1].content[0].url,e.\u0275\u0275sanitizeUrl)}}function Y(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"button",46,50),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275reference(1),o=e.\u0275\u0275nextContext(2);e.\u0275\u0275styleProp("height",t.offsetWidth,"px"),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",null==o.artworksNomesImg[2]?null:o.artworksNomesImg[2].content[0].url,e.\u0275\u0275sanitizeUrl)}}function J(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"button",46,51),e.\u0275\u0275element(2,"img",48),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275reference(1),o=e.\u0275\u0275nextContext(2);e.\u0275\u0275styleProp("height",t.offsetWidth,"px"),e.\u0275\u0275advance(2),e.\u0275\u0275property("src",null==o.artworksNomesImg[3]?null:o.artworksNomesImg[3].content[0].url,e.\u0275\u0275sanitizeUrl)}}function K(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",13),e.\u0275\u0275listener("dblclick",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.main.logDebug(i.user))}),e.\u0275\u0275elementStart(1,"div",14)(2,"div",15),e.\u0275\u0275element(3,"app-foto-perfil",16),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",17),e.\u0275\u0275template(5,G,2,1,"p",18),e.\u0275\u0275template(6,U,2,1,"p",19),e.\u0275\u0275template(7,z,2,2,"a",20),e.\u0275\u0275template(8,B,2,1,"p",21),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div",22),e.\u0275\u0275template(10,V,10,9,"div",23),e.\u0275\u0275template(11,H,9,8,"div",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",24),e.\u0275\u0275template(13,j,2,0,"button",25),e.\u0275\u0275template(14,W,3,3,"button",26),e.\u0275\u0275template(15,Z,3,3,"button",26),e.\u0275\u0275template(16,Y,3,3,"button",26),e.\u0275\u0275template(17,J,3,3,"button",26),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275property("pictureId",t.user.pictureId)("userId",t.user.userProfile.userId),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.user),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.user),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.profileUser.languages[0]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.profileUser.languages[0]),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.esPerfilPropi()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.esPerfilPropi()),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.esPerfilPropi()),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.artworksNomesImg&&t.artworksNomesImg[0]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.artworksNomesImg&&t.artworksNomesImg[1]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.artworksNomesImg&&t.artworksNomesImg[2]),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.artworksNomesImg&&t.artworksNomesImg[3]&&!t.esPerfilPropi())}}function q(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",52)(1,"h1"),e.\u0275\u0275i18n(2,53),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"h3")(5,"a",54),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.main.goTo("/home"))}),e.\u0275\u0275i18n(6,55),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(8,"button",56),e.\u0275\u0275element(9,"img",57),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"button",56),e.\u0275\u0275element(13,"img",58),e.\u0275\u0275text(14),e.\u0275\u0275pipe(15,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(16," --\x3e "),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(t.paramsUrl.username)(e.\u0275\u0275pipeBind1(3,5,"Not Found")),e.\u0275\u0275i18nApply(2),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(7,7,"Go to Home")),e.\u0275\u0275i18nApply(6),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(11,9,"Back")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(15,11,"Home"))}}function ee(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",59),e.\u0275\u0275element(1,"app-loading"),e.\u0275\u0275elementEnd())}function te(n,r){1&n&&e.\u0275\u0275element(0,"app-publicacio",68),2&n&&e.\u0275\u0275property("p",r.$implicit)}function ne(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",69),e.\u0275\u0275i18n(1,70),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"No artworks found")),e.\u0275\u0275i18nApply(1))}function oe(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",60)(1,"div",61)(2,"button",62),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.tabActiu=2)}),e.\u0275\u0275element(3,"img",63),e.\u0275\u0275elementStart(4,"div"),e.\u0275\u0275i18n(5,64),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"div",65),e.\u0275\u0275template(8,te,1,1,"app-publicacio",66),e.\u0275\u0275template(9,ne,3,3,"div",67),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275attribute("data-open",2==t.tabActiu),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(6,5,"Artworks")),e.\u0275\u0275i18nApply(5),e.\u0275\u0275advance(1),e.\u0275\u0275property("hidden",2!=t.tabActiu),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.posts),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.posts&&!t.posts.length)}}function ie(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",71),e.\u0275\u0275element(1,"app-loading"),e.\u0275\u0275elementEnd())}function re(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275element(1,"app-user-info",75),e.\u0275\u0275elementEnd()),2&n){const t=r.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("user",t)}}function le(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",76),e.\u0275\u0275i18n(1,77),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"No followers found")),e.\u0275\u0275i18nApply(1))}function ae(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ul",72),e.\u0275\u0275template(1,re,2,1,"li",73),e.\u0275\u0275template(2,le,3,3,"div",74),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.followers),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.followers)}}function se(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",71),e.\u0275\u0275element(1,"app-loading"),e.\u0275\u0275elementEnd())}function ce(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275element(1,"app-user-info",75),e.\u0275\u0275elementEnd()),2&n){const t=r.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("user",t)}}function _e(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",76),e.\u0275\u0275i18n(1,78),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"Not following anyone yet")),e.\u0275\u0275i18nApply(1))}function de(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ul",72),e.\u0275\u0275template(1,ce,2,1,"li",73),e.\u0275\u0275template(2,_e,3,3,"div",74),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t.following),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.following)}}P.ZP.use([P.tl]);const pe=[{path:"",children:[{path:"",component:(()=>{class n{constructor(t,o,i,s,_){this.main=t,this.router=o,this.route=i,this.modalService=s,this.store=_,this.user$=this.store.select(h.dy),this.estasSeguint=!1,this.tabActiu=2,this.isArtist=!1,this.postsPerPage=5,this.startIndex=0,this.endIndex=this.startIndex+this.postsPerPage,this.carregantFollowers=!0,this.carregantFollowing=!0,this.carregantBotoFollow=!1,this.carregantPosts=!0,this.carregantArtworks=!0,this.posts=[],t.newPage(this),this.route.params.subscribe(d=>this.paramsUrl=d),this.user$.subscribe(d=>{this.ownUser=d.user})}onWindowScroll(){window,window,window,document}ngOnInit(){var t=this;return(0,c.Z)(function*(){t.subscription=t.route.params.subscribe(function(){var o=(0,c.Z)(function*(i){const s=i.username;yield t.getUserData(s),yield t.getProfileUser(),("anonnymous"==t.paramsUrl.username||"uknown"==t.paramsUrl.username)&&(t.esPerfilPropi()||(yield t.actBotoFollow())),t.carregantProfile=!1,t.carregantPosts=!0,console.log("Id User: ",t.profileUser.userId),t.posts=yield x.SO.getByUserId(t.profileUser.userId).then(_=>(console.log("User Posts: ",_.data),_.data)),t.carregantPosts=!1});return function(i){return o.apply(this,arguments)}}())})()}getProfileUser(){var t=this;return(0,c.Z)(function*(){let o=t.ownUser.userId;t.profileUser=yield m.Iw.getById(o).then(i=>(console.log("User Profile: ",i.data),i.data))})()}getUserData(t){var o=this;return(0,c.Z)(function*(){o.user=yield m.Iw.getByNickname(t).then(i=>(console.log(i.data),i.data))})()}ngOnDestroy(){this.main.onDestroyPage(),this.subscription.unsubscribe()}actBotoFollow(){var t=this;return(0,c.Z)(function*(){t.user&&(t.estasSeguint=0)})()}esPerfilPropi(){return this.ownUser.userId==this.user.id}clickInsights(){this.main.notInMyBeta()}clickOrders(){this.main.notInMyBeta()}clickMessage(){this.main.notInMyBeta()}clickFollow(){var t=this;return(0,c.Z)(function*(){t.main.notInMyBeta()})()}clickUnfollow(){var t=this;return(0,c.Z)(function*(){t.main.notInMyBeta()})()}clickSubscribe(){this.main.notInMyBeta()}openNewModal(){this.main.modalOptions.openModal([{accio:()=>{this.main.goTo("new/artwork")},img:"assets/in2art/icones/Artwork.svg",text:"Artwork",class:"artwork"}])}closeNewModal(){this.main.modalOptions.closeModal()}openMoreModal(){let t={accio:()=>{this.closeMoreModal(),this.main.copy(this.main.urlBase+"/"+this.user.nickname)},img:"assets/in2art/icones/link.svg",text:this.main.t("Copy profile URL"),class:"copy"},o=[];window.isSecureContext&&o.push(t),this.esPerfilPropi(),this.main.modalOptions.openModal(o)}closeMoreModal(){this.main.modalOptions.closeModal()}loadMorePosts(){this.posts.push(...null)}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(N.J),e.\u0275\u0275directiveInject(p.F0),e.\u0275\u0275directiveInject(p.gz),e.\u0275\u0275directiveInject(g.gk),e.\u0275\u0275directiveInject(w.yh))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-profile"]],viewQuery:function(t,o){if(1&t&&(e.\u0275\u0275viewQuery(L,5),e.\u0275\u0275viewQuery(D,5)),2&t){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(o.followersModal=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(o.followingModal=i.first)}},hostBindings:function(t,o){1&t&&e.\u0275\u0275listener("scroll",function(s){return o.onWindowScroll(s)},!1,e.\u0275\u0275resolveWindow)},decls:19,vars:8,consts:function(){let r,t,o,i,s,_,d,C,M,O,F,I,E;return r=$localize`:@@Edit profile:${"\ufffd0\ufffd"}:INTERPOLATION:`,t=$localize`:@@Insights:${"\ufffd0\ufffd"}:INTERPOLATION:`,o=$localize`:@@Message:${"\ufffd0\ufffd"}:INTERPOLATION:`,i=$localize`:@@Subscribe:${"\ufffd0\ufffd"}:INTERPOLATION:`,s=$localize`:@@Message:${"\ufffd0\ufffd"}:INTERPOLATION:`,_=$localize`:@@Follow:${"\ufffd0\ufffd"}:INTERPOLATION:`,d=$localize`:@@Unfollow:${"\ufffd0\ufffd"}:INTERPOLATION:`,C=$localize`:@@User not found:User "${"\ufffd0\ufffd"}:INTERPOLATION:" ${"\ufffd1\ufffd"}:INTERPOLATION_1:`,M=$localize`:@@Go to home:${"\ufffd0\ufffd"}:INTERPOLATION:`,O=$localize`:@@Artworks:${"\ufffd0\ufffd"}:INTERPOLATION:`,F=$localize`:@@No artworks found:${"\ufffd0\ufffd"}:INTERPOLATION: `,I=$localize`:@@No followers found:${"\ufffd0\ufffd"}:INTERPOLATION:`,E=$localize`:@@Not following anyone yet:${"\ufffd0\ufffd"}:INTERPOLATION:`,[[1,"content"],[1,"card"],[1,"card-body"],[3,"dblclick",4,"ngIf"],["class","userNotFound",4,"ngIf"],["class","carregantProfile",4,"ngIf"],["class","publicacions",4,"ngIf"],["id","followersModal"],["followersModal",""],["class","carregant",4,"ngIf"],["class","usuaris",4,"ngIf"],["id","followingModal"],["followingModal",""],[3,"dblclick"],[1,"dadesPerfil","row","no-gutters"],[1,"divFotoPerfil","col-6","col-sm-3","order-1","order-sm-1"],[2,"z-index","0",3,"pictureId","userId"],[1,"dadesUsuari","col-12","col-sm-5","order-3","order-sm-2"],["class","nom",4,"ngIf"],["class","usernick",4,"ngIf"],["class","web",3,"href",4,"ngIf"],["class","bio",4,"ngIf"],[1,"botonsPerfil"],["class","botonsPerfil1 row no-gutters",4,"ngIf"],[1,"highlights"],["class","botoQuadrat botoNew boing",3,"click",4,"ngIf"],["class","botoQuadrat botoHighlight boing",3,"height",4,"ngIf"],[1,"nom"],[1,"usernick"],[1,"web",3,"href"],[1,"bio"],[1,"botonsPerfil1","row","no-gutters"],[1,"boto","botoSecundari","col",3,"click"],r,t,o,["class","boto botoSecundari col",3,"disabled","click",4,"ngIf"],["class","boto botoPrincipal col",3,"disabled","click",4,"ngIf"],i,s,[1,"boto","botoSecundari","col",3,"disabled","click"],_,[1,"boto","botoPrincipal","col",3,"disabled","click"],d,[1,"botoQuadrat","botoNew","boing",3,"click"],["src","assets/in2art/icones/upload.svg",1,"quadrat"],[1,"botoQuadrat","botoHighlight","boing"],["boto1",""],[1,"quadrat",3,"src"],["boto2",""],["boto3",""],["boto4",""],[1,"userNotFound"],C,[1,"link",3,"click"],M,[1,"boto","botoPrincipal"],["src","assets/in2art/icones/backward.svg","alt","back"],["src","assets/in2art/icones/home.svg","alt","home"],[1,"carregantProfile"],[1,"publicacions"],[1,"botonsTab"],[1,"botoTab",3,"click"],["src","assets/in2art/icones/artwork.svg"],O,[1,"artworks",3,"hidden"],[3,"p",4,"ngFor","ngForOf"],["class","noArtworks card",4,"ngIf"],[3,"p"],[1,"noArtworks","card"],F,[1,"carregant"],[1,"usuaris"],[4,"ngFor","ngForOf"],["class","noUsuaris",4,"ngIf"],[3,"user"],[1,"noUsuaris"],I,E]},template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e.\u0275\u0275template(4,K,18,13,"div",3),e.\u0275\u0275template(5,q,17,13,"div",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(6,ee,2,0,"div",5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(7,oe,10,7,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"modal",7,8)(10,"modal-content"),e.\u0275\u0275template(11,ie,2,0,"div",9),e.\u0275\u0275template(12,ae,3,2,"ul",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(13,"modal",11,12)(15,"modal-content"),e.\u0275\u0275template(16,se,2,0,"div",9),e.\u0275\u0275template(17,de,3,2,"ul",10),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(18,"app-modal-delete")),2&t&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",o.user),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.user),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.carregantProfile),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.carregantProfile&&o.user),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",o.carregantFollowers),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.carregantFollowers),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",o.carregantFollowing),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.carregantFollowing))},dependencies:[u.NgForOf,u.NgIf,S.u,A.M,R.d,y.N,$.e,g.zS,g.Ef,k.X$],styles:[".content[_ngcontent-%COMP%]{max-width:940px;padding:100px 0;border:none}.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:40px;padding:20px;margin-bottom:20px}.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{padding:0}.userNotFound[_ngcontent-%COMP%]{text-align:center;padding:4rem 1rem}.dadesPerfil[_ngcontent-%COMP%]{margin-bottom:10px;font-size:1.25rem}.dadesPerfil[_ngcontent-%COMP%]   .divFotoPerfil[_ngcontent-%COMP%]   .fons[_ngcontent-%COMP%]{position:absolute;inset:0;background-color:#0002;background-size:cover;background-position-y:center;opacity:.3;filter:blur(10px) saturate(2);transform:scale(1.1)}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]{padding:20px;display:flex;flex-direction:column;width:70%}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:10px;font-size:25px}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.nom[_ngcontent-%COMP%]{font-weight:700}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.bio[_ngcontent-%COMP%]{font-style:italic;font-size:15px}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.web[_ngcontent-%COMP%]{font-style:italic;font-size:15px;text-decoration:underline;color:orange}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   p.usernick[_ngcontent-%COMP%]{font-size:15px;font-style:italic}.dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%]   a.web[_ngcontent-%COMP%]{font-style:italic;font-size:15px;text-decoration:underline;color:orange;margin-bottom:10px}.dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%]{text-align:right;padding:20px}.dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;margin-left:auto;padding:2px 0;color:#888}.botonsPerfil[_ngcontent-%COMP%]{display:flex;margin-bottom:10px}.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil1[_ngcontent-%COMP%]{width:calc(100% - 50px)}.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil2[_ngcontent-%COMP%]{width:50px}.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil1[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%], .botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil2[_ngcontent-%COMP%]   .boto[_ngcontent-%COMP%]{padding:.125rem .5rem;margin:10px 1%;font-size:1.2rem;border-radius:20px}.botonsPerfil[_ngcontent-%COMP%]   .botonsPerfil2[_ngcontent-%COMP%]   .botoSecundari[_ngcontent-%COMP%]{width:100%;margin:10px}.highlights[_ngcontent-%COMP%]{display:flex}.highlights[_ngcontent-%COMP%]   .botoQuadrat[_ngcontent-%COMP%]{width:25%;margin:5px;padding:0;border:none;border-radius:13%;background:none;overflow:hidden}.highlights[_ngcontent-%COMP%]   .botoQuadrat[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%]{object-fit:cover;width:100%}.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoNew[_ngcontent-%COMP%]{border:2px solid gray;width:calc(25% - 2px)}.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoNew[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%]{width:50%;margin:25%}.highlights[_ngcontent-%COMP%]   .botoQuadrat.botoHighlight[_ngcontent-%COMP%]   img.quadrat[_ngcontent-%COMP%]{height:100%}.carregantProfile[_ngcontent-%COMP%], .carregant[_ngcontent-%COMP%]{padding:50px}.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]{width:100%;height:50px;padding:0;border:var(--border-card);border-radius:15px 15px 0 0;overflow:hidden}.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]{width:100%;height:100%;border:none;background-color:var(--color-fons-card);color:var(--color-text);transition:all .3s}.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[data-open=true][_ngcontent-%COMP%]{background-color:var(--color-tab-obert)}.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;padding:8px}.publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline;vertical-align:middle;font-size:1.5rem}.publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   app-publicacio[_ngcontent-%COMP%]{display:block;margin-bottom:30px}.publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   .noPosts[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .posts[_ngcontent-%COMP%]   .noArtworks[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   .noPosts[_ngcontent-%COMP%], .publicacions[_ngcontent-%COMP%]   .artworks[_ngcontent-%COMP%]   .noArtworks[_ngcontent-%COMP%]{padding:1rem;font-size:1.75rem;text-align:center;border-top:none;border-radius:0 0 15px 15px}[_nghost-%COMP%]     #followersModal .modal-content, [_nghost-%COMP%]     #followingModal .modal-content{overflow:hidden;border:none;border-radius:40px;background:var(--color-fons-card)}[_nghost-%COMP%]     #followersModal .modal-content .modal-header, [_nghost-%COMP%]     #followingModal .modal-content .modal-header{display:none}[_nghost-%COMP%]     #followersModal .modal-content .modal-body, [_nghost-%COMP%]     #followingModal .modal-content .modal-body{padding:0}[_nghost-%COMP%]     #followersModal .modal-content .modal-body ul.usuaris li:hover, [_nghost-%COMP%]     #followingModal .modal-content .modal-body ul.usuaris li:hover{background:rgba(0,153,255,.2666666667)}[_nghost-%COMP%]     #followersModal .modal-content .modal-body ul.usuaris .noUsuaris, [_nghost-%COMP%]     #followingModal .modal-content .modal-body ul.usuaris .noUsuaris{font-size:1.2rem;padding:2rem}[_nghost-%COMP%]     #followersModal .modal-content .modal-footer, [_nghost-%COMP%]     #followingModal .modal-content .modal-footer{display:none}@media only screen and (max-width: 576px){.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{margin:0}.content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .dadesPerfil[_ngcontent-%COMP%]   .dadesUsuari[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .dadesPerfil[_ngcontent-%COMP%]   .grupFollowers[_ngcontent-%COMP%]{padding:10px}.content[_ngcontent-%COMP%]   .publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]{height:40px;border-radius:0;border-left:none;border-right:none}.content[_ngcontent-%COMP%]   .publicacions[_ngcontent-%COMP%]   .botonsTab[_ngcontent-%COMP%]   .botoTab[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:1.2rem}}"]}),n})()}]}];let ge=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[p.Bz.forChild(pe),p.Bz]}),n})(),ue=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[ge,u.CommonModule,b.m,v.u5,T.A0,g.zk]}),n})()}}]);