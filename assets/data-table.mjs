class t extends HTMLElement{constructor(){super(),this.handleNext=()=>{this.page++,this.page>this.totalPages-1&&(this.page=this.totalPages-1),this.render()},this.handleBack=()=>{this.page--,this.page<0&&(this.page=0),this.render()},this.foot=this.querySelector("tfoot"),this.body=this.querySelector("tbody"),this.nextButton=this.querySelector(".js-next"),this.backButton=this.querySelector(".js-back"),this.pageCount=this.querySelector(".js-page-count"),this.emptyMessage=this.querySelector("empty-message"),this.page=0,this.totalPages=4}render(){this.pageCount.innerText=`Page ${this.page+1} of ${this.totalPages}`,0===this.page?this.backButton.disabled=!0:this.backButton.disabled=!1,this.page===this.totalPages-1?this.nextButton.disabled=!0:this.nextButton.disabled=!1}connectedCallback(){this.nextButton.addEventListener("click",this.handleNext),this.backButton.addEventListener("click",this.handleBack)}}customElements.define("data-table",t);