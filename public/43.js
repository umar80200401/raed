/*! For license information please see 43.js.LICENSE.txt */
"use strict";(self.webpackChunktheme_raed=self.webpackChunktheme_raed||[]).push([[43],{4901:(t,s,a)=>{a.d(s,{H:()=>i}),salla.event.setMaxListeners(20);class e extends salla.AppHelpers{setHost(t){this.host=t}getElement(t){return this.host.querySelector(t)}getAttribute(t,s){var a;return null===(a=this.getElement(t))||void 0===a?void 0:a.getAttribute(s)}val(t){return this.getAttribute(t,"value")}isUser(){return"user"===salla.config.get("user.type")}}const i=new e},8833:(t,s,a)=>{a.d(s,{C:()=>e});const e='\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>check-circle2</title>\n<path d="M29.333 14.133c-0.8 0-1.333 0.533-1.333 1.333v1.2c0 6.667-5.333 12-12 12 0 0 0 0 0 0-6.667 0-12-5.333-12-12s5.333-12 12-12c0 0 0 0 0 0 1.733 0 3.333 0.4 4.933 1.067 0.667 0.267 1.467 0 1.733-0.667s0-1.467-0.667-1.733c-1.867-0.8-3.867-1.333-6-1.333 0 0 0 0 0 0-8.133 0-14.667 6.533-14.667 14.667s6.533 14.667 14.667 14.667c0 0 0 0 0 0 8.133 0 14.667-6.533 14.667-14.667v-1.2c0-0.8-0.533-1.333-1.333-1.333zM12.933 14.4c-0.533-0.533-1.333-0.533-1.867 0s-0.533 1.333 0 1.867l4 4c0.267 0.267 0.533 0.4 0.933 0.4s0.667-0.133 0.933-0.4l13.333-13.333c0.533-0.533 0.533-1.333 0-1.867s-1.333-0.533-1.867 0l-12.4 12.4-3.067-3.067z"></path>\n</svg>\n'},7043:(t,s,a)=>{a.r(s),a.d(s,{salla_rating_modal:()=>n});var e=a(6298),i=a(4901),r=a(8833);const n=class{constructor(t){(0,e.r)(this,t),this.stepsCount=0,this.currentIndex=0,this.submitted=[],this.orderId=salla.config.get("page.id"),this.translationLoaded=!1,i.H.setHost(document),salla.event.on("rating::open",(()=>this.open())),salla.lang.onLoaded((()=>{this.translationLoaded=!0}))}async open(){return this.modal.open().then((()=>this.order||salla.rating.api.order(this.orderId).then((t=>this.order=t.data)))).then((()=>this.modal.setTitle(salla.lang.get("pages.rating.rate_order")+' <span class="unicode">(#'+this.order.id+")</span>"))).then((()=>this.modal.stopLoading())).then((()=>this.stepsCount=[this.order.testimonials_enabled,this.order.products_enabled,this.order.shipping_enabled].filter((t=>t)).length)).then((()=>setTimeout((()=>this.handleWizard()),100)))}async close(){return this.modal.close()}handleWizard(){this.steps=this.modal.querySelectorAll(".s-rating-modal-step"),this.dots=this.modal.querySelectorAll(".s-rating-modal-step-dot"),this.showActiveStep()}showActiveStep(t=null){var s;this.currentTab=t||this.steps[this.currentIndex],i.H.toggleClassIf(".s-rating-modal-step-dot","s-rating-modal-bg-gray","s-rating-modal-bg-primary",(t=>t!=this.dots[this.currentIndex])).toggleClassIf(".s-rating-modal-step","s-rating-modal-active","s-rating-modal-hidden",(t=>t==this.currentTab)),0!=this.currentIndex&&(i.H.toggleElementClassIf(this.currentTab,"s-rating-modal-unactive","s-rating-modal-hidden",(()=>!0)),setTimeout((()=>i.H.toggleElementClassIf(this.currentTab,"s-rating-modal-active","s-rating-modal-unactive",(()=>!0))),300));let a=null===(s=this.steps[this.currentIndex+1])||void 0===s?void 0:s.dataset.type;this.nextBtn.setText(a?salla.lang.get("pages.rating.rate")+" "+salla.lang.get("pages.rating."+a):salla.lang.get("pages.rating.send_ratings")),setTimeout((()=>{var t;return this.body.setAttribute("style","height:"+(null===(t=this.currentTab)||void 0===t?void 0:t.scrollHeight)+"px")}))}previousTab(){this.currentIndex>0&&this.currentIndex--,i.H.toggleElementClassIf(this.backBtn,"s-rating-modal-unvisiable","block",(()=>0==this.currentIndex)),this.showActiveStep()}submit(){this.submittedBefore()||this.validate(),salla.config.canLeave=!1,this.nextBtn.load().then((()=>this.submittedBefore()||this.sendFeedback())).then((()=>this.currentTab.querySelectorAll("[name],.s-rating-modal-btn-star").forEach((t=>t.setAttribute("disabled",""))))).then((()=>this.currentIndex<this.stepsCount&&this.currentIndex++)).then((()=>this.showActiveStep())).then((()=>i.H.toggleClassIf("#prev-btn","block","s-rating-modal-unvisiable",(()=>!0)))).finally((()=>{this.nextBtn.stop(),salla.config.canLeave=!0,this.currentIndex==this.stepsCount&&this.showThankYou(),this.modal.isClosable=!1}))}submittedBefore(){return this.submitted.includes(this.currentIndex)}validate(t=null,s=null){if(!t&&"products"==this.currentTab.dataset.type)return this.currentTab.querySelectorAll(".rating-outer-form").forEach((t=>this.validate(t,"product")));let a=(t=t||this.currentTab).querySelector(".rating_hidden_input").value,e=t.querySelector(".s-rating-modal-comment"),r=t.querySelector(".s-rating-modal-validation-msg");if(a&&e.value&&e.value.length>3)return e.classList.remove("s-has-error"),void(r.innerHTML="");throw s=s||t.dataset.type,i.H.toggleElementClassIf(e,"save","s-has-error",(t=>t.value.length>3)),r.innerHTML=a?salla.lang.get("common.errors.not_less_than_chars",{chars:4})+" "+e.getAttribute("placeholder"):salla.lang.get(`pages.rating.rate_${s}_stars`).replace(" (:item)","")}sendFeedback(){let t={};if(this.currentTab.querySelectorAll("[name]").forEach((s=>{let a=salla.helpers.inputData(s.name,s.value,t);t[a.name]=a.value})),0!=Object.keys(t).length)return t.order_id=this.orderId,t.type=this.currentTab.dataset.type,this.submitted.push(this.currentIndex),salla.rating.api[this.currentTab.dataset.type](t)}showThankYou(){let t=10,s=setInterval((()=>{this.thanksTime.innerHTML="00:0"+t--,t>0||(clearInterval(s),this.thanksTime.remove(),this.close().then((()=>window.location.reload())))}),1e3);this.modal.querySelector(".s-rating-modal-footer").classList.add("s-rating-modal-unvisiable"),this.showActiveStep(this.thanksTab)}render(){return(0,e.h)(e.H,{class:"s-rating"},(0,e.h)("salla-modal",{isLoading:!0,width:"md",ref:t=>this.modal=t},this.order?[(0,e.h)("div",{class:"s-rating-modal-wrapper",ref:t=>this.body=t},this.order.testimonials_enabled?(0,e.h)("div",{class:"rating-outer-form s-rating-modal-step-wrap s-rating-modal-step s-rating-modal-hidden","data-type":"store"},(0,e.h)("div",{class:"s-rating-modal-rounded-icon"},(0,e.h)("img",{src:salla.config.get("store.logo","https://assets.salla.sa/cp/assets/images/logo-new.png"),alt:"store name",class:"s-rating-modal-store-logo"})),(0,e.h)("h2",{class:"s-rating-modal-title"},salla.lang.get("pages.rating.rate_the_store")),(0,e.h)("div",{class:"s-rating-modal-stars-company"},(0,e.h)("salla-rating-stars",{size:"large"})),(0,e.h)("textarea",{name:"comment",class:"s-rating-modal-comment",placeholder:salla.lang.get("pages.rating.write_store_rate")}),(0,e.h)("small",{class:"s-rating-modal-validation-msg"})):"",this.order.products_enabled?(0,e.h)("section",{class:"s-rating-modal-step s-rating-modal-hidden","data-type":"products"},this.order.products.map(((t,s)=>(0,e.h)("div",{class:"rating-outer-form s-rating-modal-product","data-stars-error":salla.lang.get("pages.rating.rate_product_stars")},(0,e.h)("div",{class:"s-rating-modal-product-img-wrap"},(0,e.h)("img",{src:t.product.thumbnail,alt:t.product.name,class:"s-rating-modal-product-img"})),(0,e.h)("div",{class:"s-rating-modal-product-details"},(0,e.h)("h3",{class:"s-rating-modal-product-title"}," ",t.product.name),(0,e.h)("div",{class:"s-rating-modal-stars-product"},(0,e.h)("salla-rating-stars",{size:"small",name:`products[${s}][rating]`})),(0,e.h)("input",{type:"hidden",name:`products[${s}][product_id]`,value:t.product.id}),(0,e.h)("textarea",{placeholder:salla.lang.get("pages.rating.write_product_rate"),name:`products[${s}][comment]`,class:"s-rating-modal-comment"}),(0,e.h)("small",{class:"s-rating-modal-validation-msg"})))))):"",this.order.shipping_enabled?(0,e.h)("div",{class:"rating-outer-form s-rating-modal-step-wrap s-rating-modal-step s-rating-modal-hidden","data-type":"shipping"},(0,e.h)("input",{type:"hidden",name:"shipping_company_id",value:this.order.shipping.company.id}),this.order.shipping.company.logo?(0,e.h)("div",{class:"s-rating-modal-rounded-icon"},(0,e.h)("img",{src:this.order.shipping.company.logo,class:"s-rating-modal-shipping-logo",alt:this.order.shipping.company.name})):(0,e.h)("span",{class:"s-rating-modal-icon",innerHTML:'\x3c!-- Generated by IcoMoon.io --\x3e\n<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">\n<title>shipping-fast</title>\n<path d="M10.667 14.667c0-0.737-0.597-1.333-1.333-1.333h-8c-0.736 0-1.333 0.596-1.333 1.333s0.597 1.333 1.333 1.333h8c0.736 0 1.333-0.596 1.333-1.333zM9.333 18.667c-2.941 0-5.333 2.392-5.333 5.333s2.392 5.333 5.333 5.333 5.333-2.392 5.333-5.333-2.392-5.333-5.333-5.333zM9.333 26.667c-1.471 0-2.667-1.196-2.667-2.667s1.196-2.667 2.667-2.667 2.667 1.196 2.667 2.667-1.196 2.667-2.667 2.667zM1.333 10.667h5.333c0.736 0 1.333-0.596 1.333-1.333s-0.597-1.333-1.333-1.333h-5.333c-0.736 0-1.333 0.596-1.333 1.333s0.597 1.333 1.333 1.333zM31.123 13.103l-3.147-3.935c-1.273-1.589-3.171-2.501-5.205-2.501h-1.437c0-2.205-1.795-4-4-4h-13.333c-0.736 0-1.333 0.596-1.333 1.333s0.597 1.333 1.333 1.333h13.333c0.735 0 1.333 0.597 1.333 1.333v1.333c0 0.248 0.087 0.468 0.204 0.667-0.117 0.199-0.204 0.419-0.204 0.667v5.333c0 0.737 0.597 1.333 1.333 1.333h9.333v6.667h-1.333c-0.063 0-0.117 0.028-0.179 0.036-0.583-2.313-2.664-4.036-5.155-4.036-2.941 0-5.333 2.392-5.333 5.333s2.392 5.333 5.333 5.333c2.491 0 4.572-1.723 5.155-4.036 0.061 0.008 0.116 0.036 0.179 0.036h2.667c0.736 0 1.333-0.596 1.333-1.333v-8.399c0-0.905-0.311-1.792-0.877-2.499zM21.333 13.333v-4h1.437c1.221 0 2.36 0.547 3.124 1.501l1.997 2.499zM22.667 26.667c-1.471 0-2.667-1.196-2.667-2.667s1.196-2.667 2.667-2.667 2.667 1.196 2.667 2.667-1.196 2.667-2.667 2.667z"></path>\n</svg>\n'}),(0,e.h)("div",{class:"s-rating-modal-title"}," ",salla.lang.get("pages.rating.rate_shipping")+" "+this.order.shipping.company.name),(0,e.h)("div",{class:"s-rating-modal-stars-company"},(0,e.h)("salla-rating-stars",{size:"large"})),(0,e.h)("textarea",{name:"comment",class:"s-rating-modal-comment",placeholder:salla.lang.get("pages.rating.write_shipping_rate")}),(0,e.h)("small",{class:"s-rating-modal-validation-msg"})):"",(0,e.h)("div",{class:"s-rating-modal-thanks s-rating-modal-hidden",ref:t=>this.thanksTab=t},(0,e.h)("span",{class:"s-rating-modal-icon",innerHTML:r.C}),(0,e.h)("h3",{class:"s-rating-modal-thanks-title"},salla.lang.get("pages.rating.thanks")),(0,e.h)("div",{class:"s-rating-modal-thanks-msg",innerHTML:this.order.thanks_message}),(0,e.h)("time",{class:"s-rating-modal-thanks-time",ref:t=>this.thanksTime=t}))),(0,e.h)("div",{class:"s-rating-modal-footer"},(0,e.h)("button",{ref:t=>this.backBtn=t,onClick:()=>this.previousTab(),class:"s-rating-modal-btn s-rating-modal-unvisiable"},salla.lang.get("common.elements.back")),this.stepsCount>1?(0,e.h)("ul",{class:"s-rating-modal-dots"},[0,1,2].slice(0,this.stepsCount).map((()=>(0,e.h)("li",{class:"s-rating-modal-bg-gray s-rating-modal-step-dot"})))):"",(0,e.h)("salla-button",{"loader-position":"center",ref:t=>this.nextBtn=t,onClick:()=>this.submit()},salla.lang.get("common.elements.next")))]:""))}componentDidLoad(){salla.event.dispatch("rating::ready",this)}get host(){return(0,e.g)(this)}};n.style=""}}]);