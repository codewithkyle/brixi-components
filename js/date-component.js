class i extends HTMLElement{constructor(){super();this.handleBlur=()=>{if(this.monthInput.value&&this.dayInput.value&&this.yearInput.value){const t=Date.parse(`${this.monthInput.value}/${this.dayInput.value}/${this.yearInput.value}`);isNaN(t)?this.input.value="":this.input.value=new Date(t).toISOString()}else this.input.value="";this.validate()};this.handleInput=this.clearError.bind(this);this.input=this.querySelector('input[type="hidden"]'),this.textEl=this.querySelector("p:not(.label)");const t=document.createElement("p");t.className="error",t.style.display="none";const e=this.querySelector("p:last-of-type");this.insertBefore(t,e),this.errorEl=t,this.monthInput=this.querySelector("input#month"),this.dayInput=this.querySelector("input#day"),this.yearInput=this.querySelector("input#year")}validate(){let t=!0;return this.input.required?this.input.value===""?(t=!1,this.getAttribute("state")!=="invalid"&&this.reportError("This field is required.")):this.clearError():this.clearError(),t}reportError(t){this.errorEl.innerHTML=t,this.errorEl.style.display="block",this.textEl&&(this.textEl.style.display="none"),this.setAttribute("state","invalid")}clearError(){this.errorEl.style.display="none",this.textEl&&(this.textEl.style.display="block"),this.setAttribute("state","valid")}connectedCallback(){this.querySelectorAll("input").forEach(t=>{t.addEventListener("input",this.handleInput),t.addEventListener("blur",this.handleBlur)})}}export{i as default};