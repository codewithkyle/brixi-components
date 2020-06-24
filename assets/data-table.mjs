import{env as t}from"./env.mjs";class e extends HTMLElement{constructor(){super(),this.handleNext=()=>{this.page++,this.page>this.totalPages-1&&(this.page=this.totalPages-1),this.filter()},this.handleBack=()=>{this.page--,this.page<0&&(this.page=0),this.filter()},this.foot=this.querySelector("tfoot"),this.body=this.querySelector("tbody"),this.nextButton=this.querySelector(".js-next"),this.backButton=this.querySelector(".js-back"),this.pageCount=this.querySelector(".js-page-count"),this.emptyMessage=this.querySelector("empty-message"),this.page=0,this.totalPages=0,this.data=[],this.rowsPerPage=3}render(t){this.body.innerHTML="",0===t.length?(this.body.style.display="none",this.foot.style.display="none",this.emptyMessage.style.display="block"):(this.body.style.display="block",this.foot.style.display="block",this.emptyMessage.style.display="none");for(let e=0;e<t.length;e++){const s=document.createElement("tr"),i=document.createElement("td");i.innerText=t[e].col1,s.appendChild(i);const a=document.createElement("td");a.innerText=t[e].col2,s.appendChild(a);const n=document.createElement("td");n.innerText=t[e].col3,s.appendChild(n);const o=document.createElement("td");o.innerText=t[e].col4,s.appendChild(o);const l=document.createElement("td");l.innerText=t[e].col5,s.appendChild(l),this.body.appendChild(s)}this.totalPages>1?(this.foot.style.display="block",this.pageCount.innerText=`Page ${this.page+1} of ${this.totalPages}`,0===this.page?this.backButton.disabled=!0:this.backButton.disabled=!1,this.page===this.totalPages-1?this.nextButton.disabled=!0:this.nextButton.disabled=!1):this.foot.style.display="block"}filter(){const t=[...this.data],e=t.slice(this.page*this.rowsPerPage,this.page*this.rowsPerPage+this.rowsPerPage);this.totalPages=Math.ceil(t.length/this.rowsPerPage),this.render(e)}async fetchData(){const e=t.startLoading(),s=await fetch(location.origin+"/api/v1/data-table.json",{method:"GET",credentials:"include",headers:new Headers({Accept:"application/json"})});if(s.ok){const t=await s.json();if(t.success)this.data=t.data,this.filter();else{(null==t?void 0:t.message)||(null==t||t.error)}}t.stopLoading(e)}connectedCallback(){this.nextButton.addEventListener("click",this.handleNext),this.backButton.addEventListener("click",this.handleBack),this.fetchData()}}customElements.define("data-table",e);