class t extends HTMLElement{constructor(){super(),this.handleBlur=()=>{this.validateInput()},this.handleInput=()=>{this.setAttribute("state","valid"),this.input.setCustomValidity("")},this.input=this.querySelector("input")}validateInput(){this.input.required?""===this.input.value?("invalid"!==this.getAttribute("state")&&this.input.reportValidity(),this.setAttribute("state","invalid")):new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).test(this.input.value)?(this.setAttribute("state","valid"),this.input.setCustomValidity("")):("invalid"!==this.getAttribute("state")&&(this.input.setCustomValidity("Invalid email format."),this.input.reportValidity()),this.setAttribute("state","invalid")):(this.setAttribute("state","valid"),this.input.setCustomValidity(""))}reportError(t){this.input.setCustomValidity(t),this.input.reportValidity(),this.setAttribute("state","invalid")}clearError(){this.input.setCustomValidity(""),this.setAttribute("state","valid")}connectedCallback(){this.input.addEventListener("input",this.handleInput),this.input.addEventListener("blur",this.handleBlur)}}customElements.define("email-component",t);