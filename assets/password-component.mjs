export default class t extends HTMLElement{constructor(){super(),this.handleBlur=()=>{this.validateInput()},this.handleInput=()=>{this.setAttribute("state","valid"),this.input.setCustomValidity("")},this.handleClick=()=>{"password"===this.input.type?(this.input.type="text",this.visibleIcon.style.display="none",this.hiddenIcon.style.display="block"):(this.input.type="password",this.visibleIcon.style.display="block",this.hiddenIcon.style.display="none")},this.input=this.querySelector("input"),this.button=this.querySelector("button"),this.visibleIcon=this.querySelector(".js-visible"),this.hiddenIcon=this.querySelector(".js-hidden")}validateInput(){this.input.required&&""===this.input.value?("invalid"!==this.getAttribute("state")&&this.input.reportValidity(),this.setAttribute("state","invalid")):(this.setAttribute("state","valid"),this.input.setCustomValidity(""))}reportError(t){this.input.setCustomValidity(t),this.input.reportValidity(),this.setAttribute("state","invalid")}clearError(){this.input.setCustomValidity(""),this.setAttribute("state","valid")}connectedCallback(){this.input.addEventListener("input",this.handleInput),this.input.addEventListener("blur",this.handleBlur),this.button.addEventListener("click",this.handleClick)}}