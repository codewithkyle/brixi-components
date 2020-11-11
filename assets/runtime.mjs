import{djinnjsOutDir as n}from"./config.mjs";import{parse as t}from"./body-parser.mjs";let e=null,o=null,i=null;new class{constructor(){this.init(),document.addEventListener("djinn:use-full",()=>{sessionStorage.setItem("connection-choice","full"),o.collectWebComponents()}),document.addEventListener("djinn:use-lite",()=>{sessionStorage.setItem("connection-choice","lite"),o.collectWebComponents()}),document.addEventListener("djinn:mount-components",this.mountComponents),document.addEventListener("djinn:mount-scripts",n=>{this.mountScripts(n.detail.selectors)}),document.addEventListener("djinn:parse",n=>{this.parseCSS(n.detail.body,n.detail.requestUid)})}async init(){await t(document.documentElement),await this.setup(),await this.finalize(),this.mountComponents()}async finalize(){const t=await import(`${location.origin}/${n}/web-component-manager.mjs`);o=new t.WebComponentManager,e.setDOMState("idling"),i=await import(`${location.origin}/${n}/djinn-utils.mjs`),i.scrollOrResetPage()}async setup(){const t=await import(`${location.origin}/${n}/env.mjs`);e=t.env}async parseCSS(n,e=null){const o=document.implementation.createHTMLDocument("djinn-temp-document");o.documentElement.innerHTML=n,await t(o.documentElement);const i=new CustomEvent("pjax:continue",{detail:{requestUid:e}});document.dispatchEvent(i)}mountComponents(){o.collectWebComponents()}async mountScripts(n){i.handleInlineScripts(n)}};