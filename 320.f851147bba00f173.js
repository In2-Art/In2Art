"use strict";(self.webpackChunkWebAppNew=self.webpackChunkWebAppNew||[]).push([[320],{9320:(H,M,a)=>{a.r(M),a.d(M,{NewModule:()=>Z});var w=a(349),O=a(6895),I=a(1670),l=a(4006),y=a(4537),p=a(5861),d=a(1274),f=a(8259),W=(a(9746),a(9441)),e=a(4650),T=a(6345),C=a(1481),u=a(7753),$=a(7980),k=a(5219),N=a(7513),G=a(6188);const D=["contentsOrdenables"],x=["previewModal"],L=["acdcDatepicker"];function K(r,s){1&r&&(e.\u0275\u0275elementStart(0,"div",50),e.\u0275\u0275i18n(1,51),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&r&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"Title is required")),e.\u0275\u0275i18nApply(1))}function X(r,s){1&r&&(e.\u0275\u0275elementStart(0,"div",50),e.\u0275\u0275i18n(1,52),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&r&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"Author is required")),e.\u0275\u0275i18nApply(1))}function B(r,s){1&r&&(e.\u0275\u0275elementStart(0,"div",50),e.\u0275\u0275i18n(1,53),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&r&&(e.\u0275\u0275advance(2),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(2,1,"Date is required")),e.\u0275\u0275i18nApply(1))}let z=(()=>{class r{constructor(n,t,o,i,_){this.main=n,this.fb=t,this.domSanitizer=o,this.modalService=i,this.location=_,this.selectedAuthor="2",this.processingFiles=!1,this.files=[],this.validate=!1,this.carregantBotoPublicar=!1,this.mostrarFileRequired=!1,n.newPage(this),this.form=this.fb.group({inputFiles:["",l.kI.required],title:["",l.kI.required],author:[""],authorType:["",l.kI.required],date:[""],mediums:[""],otherMediums:[""],movements:[""],otherMovements:[""],dimensions:[""],technique:[""],price:[""],currency:[""],description:["",l.kI.required],tags:[""],major18:[!1]})}ngOnInit(){return(0,p.Z)(function*(){})()}ngOnDestroy(){this.closePreviewModal(),this.main.onDestroyPage()}close(){this.location.back()}addFiles(){var n=this;return(0,p.Z)(function*(){n.processingFiles=!0;let t=0,o=f(".inputFile")[0].files;for(let i=0;i<o.length;i++){let _=o[i];_&&(_.blob=n.domSanitizer.bypassSecurityTrustUrl(yield d.c.blobToBase64(_)),n.contentsOrdenables.items.push(_),t++,t==o.length&&(f(".inputFile").val(""),n.processingFiles=!1))}})()}othersSeleccionat(n){return n.includes(-1)||n.includes("-1")}corregirTags(){let n=this.form.controls.tags.value;n=n.split(/[\s,]+/).map(t=>d.c.parseTag(t)).filter(t=>t.length).join(", "),this.form.controls.tags.setValue(n)}focusInputAuthor(){f("#at_authorName").prop("checked",!0),f("#author").trigger("focus"),this.form.controls.authorType.setValue("3")}cancelNewArtwork(){var n=this;return(0,p.Z)(function*(){n.main.goToProfile()})()}openPreviewModal(){var n=this;return(0,p.Z)(function*(){n.modalService.open(n.previewModal,{size:"xl",modalClass:"previewModal",backdropClass:"modal-backdrop",hideCloseButton:!0,centered:!0,backdrop:!0,animation:!0,keyboard:!0,closeOnOutsideClick:!1})})()}closePreviewModal(){var n=this;return(0,p.Z)(function*(){try{n.modalService.close(n.previewModal)}catch{}yield d.c.wait(.5),n.preview=null})()}submit(){var n=this;return(0,p.Z)(function*(){if(n.form.markAllAsTouched(),n.acdcDatepicker.touched=!0,n.mostrarFileRequired=!d.c.objPle(n.files),n.corregirTags(),!d.c.objPle(n.files)||!n.form.valid||!n.acdcDatepicker.isValid())return console.log("--- INV\xc0LID ---"),void console.log(n.form);let t="";"y"==n.acdcDatepicker.type&&(t=yield n.acdcDatepicker.getTextAny()),"c"==n.acdcDatepicker.type&&(t=n.acdcDatepicker.getTextSegle().split(" (")[0]);let o=n.form.controls.price.value;o&&(o=o.toFixed(2)+"\u20ac"),n.preview={content:n.contentsOrdenables.getItemsOrdered(),title:n.form.controls.title.value,author:n.form.controls.author.value,dateMaco:t,dimensions:n.form.controls.dimensions.value,description:n.form.controls.description.value,self:n.main.currentUser},console.log("Info from preview: ",n.preview),console.log("--- V\xc0LID ---")})()}dateFormatType(){let n;switch(this.acdcDatepicker.type){case"y":n="Date";break;case"c":n="Roman";break;case"u":n="Unknown"}return n}isMissingSomething(){const n=this.form.get("title"),t=this.form.get("description");return!n?.valid||!t?.valid}publicar(){var n=this;return(0,p.Z)(function*(){n.submit(),n.carregantBotoPublicar=!0;const t=new FormData;t.append("title",n.form.controls.title.value),t.append("authorType",n.form.controls.authorType.value),t.append("date",JSON.stringify(n.acdcDatepicker.getObjData())),t.append("description",n.form.controls.description.value);let o=n.contentsOrdenables.getItemsOrdered();n.base64Info=o[0].blob.changingThisBreaksApplicationSecurity,console.log("Base64: ",n.base64Info);let i={files:[{fileExt:n.findFileExtension(n.base64Info),dataBase64:n.base64Info,data:null}],languages:[{title:n.form.controls.title.value,description:n.form.controls.description.value,langCode:"en-uk"}]},_=n.acdcDatepicker.boolToAcdc("c"==n.acdcDatepicker.type),m={post:i,date:t.get("date").toString(),price:null,dateFormatType:n.dateFormatType(),afterChrist:"d.C."==_,isArtistUser:"1"==n.selectedAuthor,languages:[{langCode:"en-uk"}]};yield W.iB.post(m).then(P=>{200==P.status&&(n.main.toastSuccess("Artwork publicada correctament"),n.main.goToProfile())})})()}findFileExtension(n){const t="data:image/",o=n.indexOf(t);if(-1!==o){const i=n.indexOf(";",o);if(-1!==i){const _=n.substring(o+t.length,i);return console.log("Extension: ",_),_}}return null}}return r.\u0275fac=function(n){return new(n||r)(e.\u0275\u0275directiveInject(T.J),e.\u0275\u0275directiveInject(l.qu),e.\u0275\u0275directiveInject(C.H7),e.\u0275\u0275directiveInject(u.gk),e.\u0275\u0275directiveInject(O.Location))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-new-artwork"]],viewQuery:function(n,t){if(1&n&&(e.\u0275\u0275viewQuery(D,5),e.\u0275\u0275viewQuery(x,5),e.\u0275\u0275viewQuery(L,5)),2&n){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(t.contentsOrdenables=o.first),e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(t.previewModal=o.first),e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(t.acdcDatepicker=o.first)}},decls:77,vars:45,consts:function(){let s,n,t,o,i,_,m,P,g,A,R,S,h,F,v,b;return s=$localize`:@@This is only for finished artworks:${"\ufffd0\ufffd"}:INTERPOLATION:`,n=$localize`:@@Drag to order:${"\ufffd0\ufffd"}:INTERPOLATION:`,t=$localize`:@@You can upload\::${"\ufffd0\ufffd"}:INTERPOLATION:`,o=$localize`:@@Title:${"\ufffd0\ufffd"}:INTERPOLATION:`,i=$localize`:@@Author:${"\ufffd0\ufffd"}:INTERPOLATION:`,_=$localize`:@@Myself:${"\ufffd0\ufffd"}:INTERPOLATION:`,m=$localize`:@@Unknown:${"\ufffd0\ufffd"}:INTERPOLATION:`,P=$localize`:@@Date:${"\ufffd0\ufffd"}:INTERPOLATION:`,g=$localize`:@@Dimensions:${"\ufffd0\ufffd"}:INTERPOLATION:`,A=$localize`:@@Description:Description`,R=$localize`:@@Close:${"\ufffd0\ufffd"}:INTERPOLATION:`,S=$localize`:@@Back:${"\ufffd0\ufffd"}:INTERPOLATION:`,h=$localize`:@@Post:Post`,F=$localize`:@@Title is required:${"\ufffd0\ufffd"}:INTERPOLATION:`,v=$localize`:@@Author is required:${"\ufffd0\ufffd"}:INTERPOLATION:`,b=$localize`:@@Date is required:${"\ufffd0\ufffd"}:INTERPOLATION:`,[[1,"content"],[1,"card"],[1,"card-body"],[1,"content-header"],[1,"notaEnGris"],s,["type","button","aria-label","Close",1,"close","ng-star-inserted"],["aria-hidden","true",3,"click"],[1,"theme-form",3,"formGroup"],["type","file","multiple","","accept",".JPG,.PNG,.GIF,.MP4,.AVI,.MP3,.WAV,.OGG",1,"form-camp","inputFile",3,"disabled","input"],[1,"divContentsOrdenables","clearfix"],[1,"notaEnGris","dragToOrder"],n,["contentsOrdenables",""],t,[1,"form-grup","row","no-gutters"],[1,"col-form-label","col-sm-12","col-xl-3","asterisc"],o,["type","text","formControlName","title",1,"form-camp","col-sm-12","col-xl-9"],["class","textErrorForm",4,"ngIf"],i,[1,"col-sm-12","col-xl-9","m-checkbox-inline"],[1,"grupCadaRadio",2,"min-width","20%"],[1,"radio","radio-primary"],["id","at_myself","type","radio","value","1","name","authorType","formControlName","authorType",3,"ngModel","ngModelChange"],["for","at_myself"],_,["id","at_unknown","type","radio","value","2","name","authorType","formControlName","authorType",3,"ngModel","ngModelChange"],["for","at_unknown"],m,[3,"nomText","control"],P,[1,"col-sm-12","col-xl-9"],["acdcDatepicker",""],[1,"col-form-label","col-sm-12","col-xl-3"],g,["type","text","formControlName","dimensions",1,"form-camp","col-sm-12","col-xl-9"],A,["maxlength","3000","formControlName","description",1,"form-camp","col-sm-12","col-xl-9"],[2,"text-align","center"],["id","cancel",1,"boto","botoPrincipal","botoGran",3,"click"],R,["type","button","value","Post",1,"boto","botoPrincipal","botoGran",3,"disabled","click"],["id","previewModal"],["previewModal",""],[1,"botons"],[1,"boto","botoPrincipal","botoGran","back",3,"click"],S,[1,"boto","botoPrincipal","botoGran","post",3,"disabled","click"],h,[1,"textErrorForm"],F,v,b]},template:function(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"p",4),e.\u0275\u0275i18n(5,5),e.\u0275\u0275pipe(6,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",6)(8,"span",7),e.\u0275\u0275listener("click",function(){return t.close()}),e.\u0275\u0275text(9,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(10,"form",8)(11,"input",9),e.\u0275\u0275listener("input",function(){return t.addFiles()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",10)(13,"p",11),e.\u0275\u0275i18n(14,12),e.\u0275\u0275pipe(15,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"app-contents-ordenables",null,13),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(18,"p",4),e.\u0275\u0275i18n(19,14),e.\u0275\u0275pipe(20,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",15)(22,"label",16),e.\u0275\u0275i18n(23,17),e.\u0275\u0275pipe(24,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(25,"input",18),e.\u0275\u0275template(26,K,3,3,"div",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"div",15)(28,"label",16),e.\u0275\u0275i18n(29,20),e.\u0275\u0275pipe(30,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(31,"div",21)(32,"div",22)(33,"div",23)(34,"input",24),e.\u0275\u0275listener("ngModelChange",function(i){return t.selectedAuthor=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"label",25),e.\u0275\u0275i18n(36,26),e.\u0275\u0275pipe(37,"translate"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(38,"div",22)(39,"div",23)(40,"input",27),e.\u0275\u0275listener("ngModelChange",function(i){return t.selectedAuthor=i}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"label",28),e.\u0275\u0275i18n(42,29),e.\u0275\u0275pipe(43,"translate"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementStart(44,"app-missatge-error-form",30),e.\u0275\u0275listener("control",function(){return t.form.controls.authorType}),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(45,X,3,3,"div",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(46,"div",15)(47,"label",16),e.\u0275\u0275i18n(48,31),e.\u0275\u0275pipe(49,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(50,"app-acdc-datepicker",32,33),e.\u0275\u0275template(52,B,3,3,"div",19),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(53,"div",15)(54,"label",34),e.\u0275\u0275i18n(55,35),e.\u0275\u0275pipe(56,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(57,"input",36),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"div",15)(59,"label",16),e.\u0275\u0275i18n(60,37),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(61,"textarea",38),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(62,"div",39)(63,"button",40),e.\u0275\u0275listener("click",function(){return t.cancelNewArtwork()}),e.\u0275\u0275i18n(64,41),e.\u0275\u0275pipe(65,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(66,"input",42),e.\u0275\u0275listener("click",function(){return t.publicar()}),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(67,"modal",43,44),e.\u0275\u0275element(69,"modal-content"),e.\u0275\u0275elementStart(70,"modal-footer")(71,"div",45)(72,"button",46),e.\u0275\u0275listener("click",function(){return t.closePreviewModal()}),e.\u0275\u0275i18n(73,47),e.\u0275\u0275pipe(74,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(75,"button",48),e.\u0275\u0275listener("click",function(){return t.publicar()}),e.\u0275\u0275i18n(76,49),e.\u0275\u0275elementEnd()()()()),2&n){const o=e.\u0275\u0275reference(17),i=e.\u0275\u0275reference(51);e.\u0275\u0275advance(6),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(6,23,"This is only for finished artworks")),e.\u0275\u0275i18nApply(5),e.\u0275\u0275advance(4),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",t.processingFiles),e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("display",o.items.length?"block":"none"),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(15,25,"Drag to order")),e.\u0275\u0275i18nApply(14),e.\u0275\u0275advance(5),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(20,27,"You can upload")),e.\u0275\u0275i18nApply(19),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(24,29,"Title")),e.\u0275\u0275i18nApply(23),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.form.controls.title.touched&&(null==t.form.controls.title.errors?null:t.form.controls.title.errors.required)),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(30,31,"Author")),e.\u0275\u0275i18nApply(29),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",t.selectedAuthor),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(37,33,"Myself")),e.\u0275\u0275i18nApply(36),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngModel",t.selectedAuthor),e.\u0275\u0275advance(3),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(43,35,"Unknown Author")),e.\u0275\u0275i18nApply(42),e.\u0275\u0275advance(1),e.\u0275\u0275property("nomText","author"),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",3==t.form.controls.authorType.value&&""==t.form.controls.author.value),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(49,37,"Date")),e.\u0275\u0275i18nApply(48),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.touched&&!i.isValid()),e.\u0275\u0275advance(4),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(56,39,"Dimensions")),e.\u0275\u0275i18nApply(55),e.\u0275\u0275advance(9),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(65,41,"Cancel")),e.\u0275\u0275i18nApply(64),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!o.items.length),e.\u0275\u0275advance(8),e.\u0275\u0275i18nExp(e.\u0275\u0275pipeBind1(74,43,"Back")),e.\u0275\u0275i18nApply(73),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",t.carregantBotoPublicar)}},dependencies:[O.NgIf,l._Y,l.Fj,l._,l.JJ,l.JL,l.nD,l.sg,l.u,$.o,k.T,N.D,u.zS,u.YI,u.Ef,G.X$],styles:[".content[_ngcontent-%COMP%]{max-width:940px;padding:100px 0;border:none}.content[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]{margin-bottom:20px}.content[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%]{font-size:2rem;text-align:center}.content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.content[_ngcontent-%COMP%]   .content-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#222;border:none}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]{padding:6px;margin-bottom:1.5rem;border-radius:25px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]::-webkit-file-upload-button{border-radius:25px;border:var(--border-input)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]   .dragToOrder[_ngcontent-%COMP%]{margin-bottom:0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]   app-contents-ordenables[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{margin:0 -1%}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .notaEnGris[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   label.col-form-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0;padding:7px 0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   div.radio[_ngcontent-%COMP%]{margin:auto 0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%]{padding:6px 12px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .grupCadaRadio[_ngcontent-%COMP%], .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .grupCadaRadio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]{padding-left:3px;display:inline-flex;margin:5px 0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .grupCadaRadio[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:0;padding:0 10px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{margin-right:5px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   app-acdc-datepicker[_ngcontent-%COMP%]{padding:0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]     ng-select{padding-right:0;padding-left:0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]     ng-select ng-dropdown-panel{background-color:var(--color-fons-card-2);color:var(--color-text)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]     ng-select ng-dropdown-panel .ng-option{background-color:transparent;color:inherit}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]     ng-select ng-dropdown-panel .ng-option.ng-option-marked{background-color:#09f4}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{overflow:hidden;min-height:100px;max-height:300px;font-size:14px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]:after{transform:scale(1.2)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{border:1px solid #222}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after{transition:transform .2s ease-in}.content[_ngcontent-%COMP%]   #cancel[_ngcontent-%COMP%]{margin-right:10px}  .form-grup ng-select .ng-select-container{border:var(--border-input)}  .form-grup ng-select .ng-arrow{border-top-color:var(--color-text)}  .form-grup ng-select .ng-select-opened .ng-arrow{border-bottom-color:var(--color-text)}  .form-grup ng-select ng-dropdown-panel{overflow:hidden}[_nghost-%COMP%]     #previewModal .modal-content{overflow:hidden;border:none;border-radius:0;background:transparent}[_nghost-%COMP%]     #previewModal .modal-content .modal-header{display:none}[_nghost-%COMP%]     #previewModal .modal-content .modal-body{padding:0}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer{border:none}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer{width:100%}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons{text-align:center}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons button.back, [_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons button.post{margin:0 3%;width:40%;padding:8px 0}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:initial}@media only screen and (max-width: 576px){.titol[_ngcontent-%COMP%]{margin-top:.5rem}.anarAPost[_ngcontent-%COMP%]{margin-left:50%}}"]}),r})();var j=a(1816);const V=["contentsOrdenables"],Q=["previewModal"];function Y(r,s){if(1&r&&e.\u0275\u0275element(0,"app-publicacio",37),2&r){const n=e.\u0275\u0275nextContext();e.\u0275\u0275property("p",n.preview)("preview",!0)}}let q=(()=>{class r{constructor(n,t,o,i){this.main=n,this.fb=t,this.domSanitizer=o,this.modalService=i,this.processingFiles=!1,this.files=[],this.validate=!1,this.carregantBotoPublicar=!1,this.mostrarFileRequired=!1,n.newPage(this),this.form=this.fb.group({inputFiles:[""],description:[""],tags:[""],major18:[!1]})}ngOnInit(){return(0,p.Z)(function*(){})()}ngOnDestroy(){this.closePreviewModal(),this.main.onDestroyPage()}addFiles(){var n=this;return(0,p.Z)(function*(){n.processingFiles=!0;let t=0,o=f(".inputFile")[0].files;for(let i=0;i<o.length;i++){let _=o[i];_&&(_.blob=n.domSanitizer.bypassSecurityTrustUrl(yield d.c.blobToBase64(_)),n.contentsOrdenables.items.push(_),t++,t==o.length&&(f(".inputFile").val(""),n.processingFiles=!1))}})()}corregirTags(){let n=this.form.controls.tags.value;n=n.split(/[\s,]+/).map(t=>d.c.parseTag(t)).filter(t=>t.length).join(", "),this.form.controls.tags.setValue(n)}openPreviewModal(){var n=this;return(0,p.Z)(function*(){n.modalService.open(n.previewModal,{size:"xl",modalClass:"previewModal",backdropClass:"modal-backdrop",hideCloseButton:!0,centered:!0,backdrop:!0,animation:!0,keyboard:!0,closeOnOutsideClick:!1})})()}closePreviewModal(){var n=this;return(0,p.Z)(function*(){try{n.modalService.close(n.previewModal)}catch{}yield d.c.wait(.5),n.preview=null})()}submit(){if(this.form.markAllAsTouched(),this.mostrarFileRequired=!d.c.objPle(this.files),this.corregirTags(),!d.c.objPle(this.files)||!this.form.valid)return console.log("--- INV\xc0LID ---"),void console.log(this.form);this.preview={content:this.contentsOrdenables.getItemsOrdered(),description:this.form.controls.description.value,tags:this.form.controls.tags.value,major18:this.form.controls.major18.value,esObra:!1},console.log(this.form),console.log("--- V\xc0LID ---"),this.preview.tags=this.preview.tags.split(", ").filter(n=>n).map(n=>({text:n})),this.preview.user=this.main.currentUser,this.openPreviewModal()}publicar(){this.carregantBotoPublicar=!0;const n=new FormData;this.preview.content.forEach((t,o)=>{n.append(`content[${o}][type]`,t.type),n.append(`content[${o}][order]`,o),n.append(`content[${o}][text]`,"");var i=new File([d.c.dataURLToBlob(t.blob.changingThisBreaksApplicationSecurity)],"photo.png");n.append(`content[${o}][file]`,i,"photo.png")}),n.append("text_post",this.preview.description),this.preview.tags.forEach(t=>{n.append("tags[]",t.text)}),n.append("major18",this.preview.major18?"1":"0"),d.c.showFormData(n)}}return r.\u0275fac=function(n){return new(n||r)(e.\u0275\u0275directiveInject(T.J),e.\u0275\u0275directiveInject(l.qu),e.\u0275\u0275directiveInject(C.H7),e.\u0275\u0275directiveInject(u.gk))},r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["app-new-post"]],viewQuery:function(n,t){if(1&n&&(e.\u0275\u0275viewQuery(V,5),e.\u0275\u0275viewQuery(Q,5)),2&n){let o;e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(t.contentsOrdenables=o.first),e.\u0275\u0275queryRefresh(o=e.\u0275\u0275loadQuery())&&(t.previewModal=o.first)}},decls:43,vars:7,consts:function(){let s,n,t,o,i,_,m,P;return s=$localize`:@@New post:New post`,n=$localize`:@@Go to new artwork: Go to new artwork ${"\ufffd#9\ufffd"}:START_ITALIC_TEXT:${"\ufffd/#9\ufffd"}:CLOSE_ITALIC_TEXT:`,t=$localize`:@@Drag to order:Drag to order`,o=$localize`:@@You can upload:You can upload: photos (.JPG, .PNG, .GIF) and videos (.MP4, .AVI) `,i=$localize`:@@Description:Description`,_=$localize`:@@Tags:Tags`,m=$localize`:@@Back:Back`,P=$localize`:@@Post:Post`,[[1,"content"],[1,"card"],[1,"card-body"],[1,"content-top","row","no-gutters"],[1,"col-sm-3","col-12"],[1,"col-sm-6","col-12","order-2","order-sm-1","titol"],s,[1,"col-sm-3","col-12","order-1","order-sm-2","boto","botoSecundari","anarAArtwork",3,"click"],n,[1,"fas","fa-chevron-right"],[1,"theme-form",3,"formGroup"],["type","file","multiple","","accept",".JPG,.PNG,.GIF,.MP4,.AVI,.MP3,.WAV,.OGG",1,"form-camp","inputFile",3,"disabled","input"],[1,"divContentsOrdenables","clearfix"],[1,"notaEnGris","dragToOrder"],t,["contentsOrdenables",""],[1,"notaEnGris"],o,[1,"form-grup","row","no-gutters"],[1,"col-form-label","col-sm-12","col-xl-3"],i,["maxlength","3000","formControlName","description",1,"form-camp","col-sm-12","col-xl-9"],_,["type","text","formControlName","tags",1,"form-camp","col-sm-12","col-xl-9",3,"blur"],[1,"form-grup"],["for","major18",1,"d-block","checkbox-label",2,"text-align","center"],["id","major18","type","checkbox","formControlName","major18",1,"checkbox_animated"],[2,"text-align","center"],["type","button","value","Save",1,"boto","botoPrincipal","botoGran",3,"disabled","click"],["id","previewModal"],["previewModal",""],[3,"p","preview",4,"ngIf"],[1,"botons"],[1,"boto","botoPrincipal","botoGran","back",3,"click"],m,[1,"boto","botoPrincipal","botoGran","post",3,"disabled","click"],P,[3,"p","preview"]]},template:function(n,t){if(1&n&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.\u0275\u0275element(4,"div",4),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275i18n(6,6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"button",7),e.\u0275\u0275listener("click",function(){return t.main.goTo("new/artwork")}),e.\u0275\u0275i18nStart(8,8),e.\u0275\u0275element(9,"i",9),e.\u0275\u0275i18nEnd(),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"form",10)(11,"input",11),e.\u0275\u0275listener("input",function(){return t.addFiles()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",12)(13,"p",13),e.\u0275\u0275i18n(14,14),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"app-contents-ordenables",null,15),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"p",16),e.\u0275\u0275i18n(18,17),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(19,"div",18)(20,"label",19),e.\u0275\u0275i18n(21,20),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(22,"textarea",21),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"div",18)(24,"label",19),e.\u0275\u0275i18n(25,22),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(26,"input",23),e.\u0275\u0275listener("blur",function(){return t.corregirTags()}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(27,"div",24)(28,"label",25),e.\u0275\u0275element(29,"input",26),e.\u0275\u0275text(30,"The content uploaded is only for 18+ "),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(31,"div",27)(32,"input",28),e.\u0275\u0275listener("click",function(){return t.submit()}),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(33,"modal",29,30)(35,"modal-content"),e.\u0275\u0275template(36,Y,1,2,"app-publicacio",31),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(37,"modal-footer")(38,"div",32)(39,"button",33),e.\u0275\u0275listener("click",function(){return t.closePreviewModal()}),e.\u0275\u0275i18n(40,34),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(41,"button",35),e.\u0275\u0275listener("click",function(){return t.publicar()}),e.\u0275\u0275i18n(42,36),e.\u0275\u0275elementEnd()()()()),2&n){const o=e.\u0275\u0275reference(16);e.\u0275\u0275advance(10),e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",t.processingFiles),e.\u0275\u0275advance(1),e.\u0275\u0275styleProp("display",o.items.length?"block":"none"),e.\u0275\u0275advance(20),e.\u0275\u0275property("disabled",!o.items.length),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",t.preview),e.\u0275\u0275advance(5),e.\u0275\u0275property("disabled",t.carregantBotoPublicar)}},dependencies:[O.NgIf,l._Y,l.Fj,l.Wl,l.JJ,l.JL,l.nD,l.sg,l.u,j.u,N.D,u.zS,u.YI,u.Ef],styles:[".content[_ngcontent-%COMP%]{max-width:940px;padding:100px 0;border:none}.content[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]{margin-bottom:20px}.content[_ngcontent-%COMP%]   .content-top[_ngcontent-%COMP%]   .titol[_ngcontent-%COMP%]{font-size:2rem;text-align:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]{padding:6px;margin-bottom:1.5rem;border-radius:25px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .inputFile[_ngcontent-%COMP%]::-webkit-file-upload-button{border-radius:25px;border:var(--border-input)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]   .dragToOrder[_ngcontent-%COMP%]{margin-bottom:0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .divContentsOrdenables[_ngcontent-%COMP%]   app-contents-ordenables[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]{margin:0 -1%}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .notaEnGris[_ngcontent-%COMP%]{margin-bottom:1.5rem}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   label.col-form-label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0;padding:7px 0}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   .form-camp[_ngcontent-%COMP%]{padding:6px 12px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:100px;max-height:300px;font-size:14px}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-grup[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:0}[_nghost-%COMP%]     #previewModal .modal-content{overflow:hidden;border:none;border-radius:0;background:transparent}[_nghost-%COMP%]     #previewModal .modal-content .modal-header{display:none}[_nghost-%COMP%]     #previewModal .modal-content .modal-body{padding:0}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer{border:none}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer{width:100%}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons{text-align:center}[_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons button.back, [_nghost-%COMP%]     #previewModal .modal-content .modal-footer modal-footer .botons button.post{margin:0 3%;width:40%;padding:8px 0}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex-shrink:initial}@media only screen and (max-width: 576px){.titol[_ngcontent-%COMP%]{margin-top:.5rem}.anarAArtwork[_ngcontent-%COMP%]{margin-left:50%}}"]}),r})();var E=a(4270);const J=[{path:"",children:[{path:"",redirectTo:"artwork",pathMatch:"full"},{path:"artwork",component:z},{path:"post",component:q}]}];let U=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[E.Bz.forChild(J),E.Bz]}),r})(),Z=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=e.\u0275\u0275defineInjector({imports:[U,O.CommonModule,I.m,l.u5,y.A0,w.qE,u.zk]}),r})()}}]);