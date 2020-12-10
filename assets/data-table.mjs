import{html as t,render as e}from"https://unpkg.com/lit-html?module";import{Component as s}from"./component.mjs";export default class a extends s{constructor(){super(),this.foot=this.querySelector("tfoot"),this.body=this.querySelector("tbody"),this.emptyMessage=this.querySelector("empty-message"),this.state={rowsPerPage:3,page:0,totalPages:0,rows:[]}}async fetchData(){const t=await fetch(location.origin+"/api/v1/data-table.json",{method:"GET",credentials:"include",headers:new Headers({Accept:"application/json"})});if(t.ok){const e=await t.json();if(e.success)this.setState({rows:e.data,totalPages:Math.ceil(e.data.length/this.state.rowsPerPage)});else{(null==e?void 0:e.message)||(null==e||e.error)}}}next(){const t={...this.state};t.page++,t.page>this.state.totalPages-1&&(t.page=this.state.totalPages-1),this.setState(t)}back(){const t={...this.state};t.page--,t.page<0&&(t.page=0),this.setState(t)}connected(){this.fetchData()}render(){if(this.state.rows.length){this.body.style.display="block",this.emptyMessage.style.display="none";const s=this.state.rows.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage),a=t`
                ${s.map(e=>t`
                        <tr>
                            ${Object.values(e).map(e=>t`<td>${e}</td>`)}
                        </tr>
                    `)}
            `;if(e(a,this.body),this.state.totalPages>1){this.foot.style.display="block";const s=t`
                    <tr>
                        <td>Page ${this.state.page+1} of ${this.state.totalPages}</td>
                        <td>
                            <button @click=${t=>this.back()} ?disabled=${0===this.state.page}>
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        fill="currentColor"
                                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                                    ></path>
                                </svg>
                            </button>
                        </td>
                        <td>
                            <button @click=${t=>this.next()} ?disabled=${this.state.page===this.state.totalPages-1}>
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path
                                        fill="currentColor"
                                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                                    ></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                `;e(s,this.foot)}}else this.foot.style.display="none",this.body.style.display="none",this.emptyMessage.innerText="Failed to load. Try refreshing the page.",this.emptyMessage.style.display="block"}}