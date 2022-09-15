/*! For license information please see 955.cb1061effc6b60f83b92.js.LICENSE.txt */
"use strict";(self.webpackChunkTheme_Raed=self.webpackChunkTheme_Raed||[]).push([[955],{8955:(e,t,i)=>{i.r(t),i.d(t,{salla_select:()=>l});var s=i(6298);const l=class{constructor(e){(0,s.r)(this,e),this.label=void 0,this.items=[],this.itemText="text",this.itemValue="value",this.itemDisabled="disabled",this.size="normal",this.value=void 0,this.autofocus=!1,this.clearable=!1,this.clearIcon="sicon-cancel",this.color="primary",this.flat=void 0,this.disabled=!1,this.loading=!1,this.loadingColor="primary",this.hint=void 0,this.persistHint=!1,this.placeholder=void 0,this.multiple=!1,this.autocomplete=!1,this.required=!1,this.chips=!1,this.shape="outlined",this.returnObject=!1,this.hideDetail=!1}selectClass(){return`s-select-field s-select-${this.shape} ${this.color} ${this.size}`}onSelectedItemChange(e){let t=e.target.selectedIndex;if(t<0)return void(this.value=void 0);let i=this.items[this.placeholder?t-1:t];this.value=this.returnObject?i:i[this.itemValue],console.log("🚀 ~ file: salla-select.tsx ~ line 153 ~ SallaSelect ~ onSelectedItemChange ~ this.value",this.value)}generateHint(){return this.persistHint||this.value?(0,s.h)("div",{class:"s-select-hint"},this.hint):""}checkForSelected(e){return this.returnObject&&this.value?e[this.itemValue]=this.value[this.itemValue]:e[this.itemValue]==this.value}render(){return(0,s.h)(s.H,null,this.label?(0,s.h)("label",{htmlFor:"s-select",class:"s-select-label"},this.label):"",(0,s.h)("select",{multiple:this.multiple,autocomplete:this.autocomplete?"on":"off",disabled:this.disabled,autoFocus:this.autofocus,id:"s-select",class:this.selectClass(),onChange:this.onSelectedItemChange.bind(this)},this.placeholder?(0,s.h)("option",{selected:!this.value},this.placeholder):"",this.items.map((e=>(0,s.h)("option",{label:e[this.itemText],value:e[this.itemValue],selected:this.checkForSelected(e),disabled:e[this.itemDisabled]})))),(0,s.h)("div",{class:{"s-hidden":this.hideDetail}},this.generateHint()))}};l.style=".s-select-label{display:block;margin-bottom:0.5rem;color:#111827;font-size:0.875rem;line-height:1.25rem;font-weight:500}.s-select-underline{display:block;padding-left:0;padding-right:0;padding-top:0.625rem;padding-bottom:0.625rem;background-color:transparent;color:#6B7280;font-size:0.875rem;line-height:1.25rem;width:100%;border-width:0;border-bottom-width:2px;border-color:#E5E7EB;appearance:none}.s-select-outlined{display:block;padding:0.625rem;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:1rem;padding-right:1rem;background-color:#F9FAFB;color:#111827;font-size:0.875rem;line-height:1.25rem;width:100%;border-radius:0.5rem;border-width:1px;border-color:#D1D5DB}.s-select-x-large{height:5rem}.s-select-large{height:4rem}.s-select-normal{height:3rem}.s-select-small{height:3rem}.s-select-x-small{height:2.5rem}.s-select-field{padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.5rem;padding-left:0.5rem;margin:0;font-size:1.125rem;line-height:1.75rem;font-weight:400;line-height:1.75rem;width:100%;border-radius:0.375rem;border-color:#9CA3AF;box-shadow:none}.s-select-hint{margin-top:0.25rem;color:#374151;font-size:0.875rem;line-height:1.25rem;line-height:1.25rem}"}}]);