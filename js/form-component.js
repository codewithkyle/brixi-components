class i extends HTMLElement{constructor(){super();this.handleSubmit=async o=>{if(o.preventDefault(),this.validate()){const r=new FormData(this.form),e=await fetch(`${location.origin}/login/route`,{method:"POST",headers:new Headers({Accept:"application/json"}),body:r}),t=await e.json();if(e.ok)if(t.success)location.reload();else for(const n in t.errors){const s=this.form.querySelector(`[name="${n}"]`)?.closest("[web-component]")??null;s&&s?.reportError?s.reportError(t.errors[n]):console.error(`Failed to locate a web component containing: [name="${n}"]`)}else console.error(`A network or server error occured. ${e.status}: ${e.statusText}`)}};this.form=this.querySelector("form")}validate(){const o=Array.from(this.form.querySelectorAll("input-component, select-component, textarea-component, radio-group, checkbox-group, pin-component, phone-component, password-component, email-component, date-picker, date-component"));let r=!0;for(let e=0;e<o.length;e++)(o[e]?.validate()??!0)||(r=!1);return r}connectedCallback(){this.form.addEventListener("submit",this.handleSubmit)}}export{i as default};