export default class e extends HTMLElement{constructor(){super(...arguments),this.handleClick=()=>{const e=location.pathname.replace(/(https:\/\/components.codewithkyle.com\/)|[\/]/g,"").toLowerCase().trim(),t=document.createElement("a");t.target="_blank",t.href=`${location.origin}/downloads/${e}.zip`,t.download=e,t.click()}}connectedCallback(){this.addEventListener("click",this.handleClick)}}