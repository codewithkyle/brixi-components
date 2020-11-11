export default class t extends HTMLElement{constructor(){super(),this.handleBlur=()=>{this.validate()},this.handleInput=this.clearError.bind(this),this.input=this.querySelector("input"),this.textEl=this.querySelector("p");const t=document.createElement("p");t.className="error",t.style.display="none",this.insertBefore(t,this.input),this.errorEl=t}validate(){let t=!0;return this.input.required?""===this.input.value?(t=!1,"invalid"!==this.getAttribute("state")&&this.reportError("This field is required.")):new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/g).test(this.input.value)?this.clearError():(t=!1,"invalid"!==this.getAttribute("state")&&this.reportError("Invalid URL format.")):this.clearError(),t}reportError(t){this.errorEl.innerHTML=t,this.errorEl.style.display="block",this.textEl&&(this.textEl.style.display="none"),this.setAttribute("state","invalid")}clearError(){this.errorEl.style.display="none",this.textEl&&(this.textEl.style.display="block"),this.setAttribute("state","valid")}connectedCallback(){this.input.addEventListener("input",this.handleInput),this.input.addEventListener("blur",this.handleBlur)}}