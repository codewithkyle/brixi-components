new class{constructor(){self.onmessage=this.handleMessage.bind(this),this.prefetchQueue=[]}handleMessage(e){const{type:t}=e.data;switch(t){case"revision-check":this.checkRevision(e.data.url);break;case"pjax":this.pjax(e.data.url,e.data.requestId,e.data.currentUrl,e.data.followRedirects);break;case"prefetch":const t=this.prefetch.length;this.prefetchQueue=[...this.prefetchQueue,...e.data.urls],t||this.prefetch()}}prefetch(){if(0===this.prefetchQueue.length)return;const e=this.prefetchQueue[0];this.prefetchQueue.splice(0,1),new RegExp(/(http\:\/\/)|(https\:\/\/)/gi).test(e)&&!1===new RegExp(self.location.origin).test(e)?this.prefetch():fetch(e,{method:"GET",credentials:"include",headers:new Headers({"X-Requested-With":"XMLHttpRequest","X-Pjax":"true"})}).then(()=>{}).catch(()=>{}).finally(()=>{this.prefetch()})}async pjax(e,t,s,a){if(new RegExp(/(http\:\/\/)|(https\:\/\/)/gi).test(e)&&!1===new RegExp(self.location.origin).test(e))self.postMessage({type:"pjax",status:"external",url:e,requestId:t});else{if(new RegExp(/\#/g).test(e)){if(e.replace(/\#.*/g,"")===s.replace(/\#.*/g,""))return void self.postMessage({type:"pjax",status:"hash-change",url:e,requestId:t})}try{const s=await fetch(e,{method:"GET",credentials:"include",headers:new Headers({"X-Requested-With":"XMLHttpRequest","X-Pjax":"true"})});if(s.ok&&s.headers.get("Content-Type")&&s.headers.get("Content-Type").match(/(text\/html)/gi)){if(s.redirected&&!a)return void self.postMessage({type:"pjax",status:"error",error:"Request resulted in a redirect and following redirects is disabled",url:e,requestId:t});const r=await s.text();self.postMessage({type:"pjax",status:"ok",body:r,requestId:t,url:e})}else self.postMessage({type:"pjax",status:"error",error:s.statusText,url:e,requestId:t})}catch(s){self.postMessage({type:"pjax",status:"error",error:s,url:e,requestId:t})}}}checkRevision(e){let t=null,s=null;new Promise((t,s)=>{fetch(e,{method:"HEAD",credentials:"include",cache:"no-cache"}).then(e=>{e.ok&&t(e.headers.get("ETag")),t(null)}).catch(()=>{s()})}).then(a=>{t=a,s&&this.checkETags(t,s,e)}).catch(()=>{}),new Promise((t,s)=>{fetch(e,{method:"GET",credentials:"include"}).then(e=>{e.ok&&t(e.headers.get("ETag")),t(null)}).catch(()=>{s()})}).then(a=>{s=a,t&&this.checkETags(t,s,e)}).catch(()=>{})}checkETags(e,t,s){e&&t&&e!==t&&self.postMessage({type:"revision-check",status:"stale",url:s})}};