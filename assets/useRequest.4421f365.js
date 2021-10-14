var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,s=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(n)for(var r of n(t))a.call(t,r)&&i(e,r,t[r]);return e},u=(e,n)=>t(e,r(n));import{$ as c,u as f,v as l,d as p,z as d,j as h,E as m,F as v}from"./vendor.3b3f849b.js";import{T as g}from"./Table.6edcbef1.js";import{P as y}from"./Pagination.c579953b.js";import"./index.f7e44da3.js";var b={exports:{}},w=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},x=w,E=Object.prototype.toString;function j(e){return"[object Array]"===E.call(e)}function O(e){return void 0===e}function C(e){return null!==e&&"object"==typeof e}function R(e){if("[object Object]"!==E.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function S(e){return"[object Function]"===E.call(e)}function A(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),j(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var P={isArray:j,isArrayBuffer:function(e){return"[object ArrayBuffer]"===E.call(e)},isBuffer:function(e){return null!==e&&!O(e)&&null!==e.constructor&&!O(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:C,isPlainObject:R,isUndefined:O,isDate:function(e){return"[object Date]"===E.call(e)},isFile:function(e){return"[object File]"===E.call(e)},isBlob:function(e){return"[object Blob]"===E.call(e)},isFunction:S,isStream:function(e){return C(e)&&S(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:A,merge:function e(){var t={};function r(r,n){R(t[n])&&R(r)?t[n]=e(t[n],r):R(r)?t[n]=e({},r):j(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)A(arguments[n],r);return t},extend:function(e,t,r){return A(t,(function(t,n){e[n]=r&&"function"==typeof t?x(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},N=P;function T(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var U=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(N.isURLSearchParams(t))n=t.toString();else{var o=[];N.forEach(t,(function(e,t){null!=e&&(N.isArray(e)?t+="[]":e=[e],N.forEach(e,(function(e){N.isDate(e)?e=e.toISOString():N.isObject(e)&&(e=JSON.stringify(e)),o.push(T(t)+"="+T(e))})))})),n=o.join("&")}if(n){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},B=P;function L(){this.handlers=[]}L.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},L.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},L.prototype.forEach=function(e){B.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var q=L,k=P,D=function(e){return!(!e||!e.__CANCEL__)},F=P,I=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},H=function(e,t,r,n,o){var a=new Error(e);return I(a,t,r,n,o)},z=H,$=P,_=$.isStandardBrowserEnv()?{write:function(e,t,r,n,o,a){var i=[];i.push(e+"="+encodeURIComponent(t)),$.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),$.isString(n)&&i.push("path="+n),$.isString(o)&&i.push("domain="+o),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},M=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},J=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},X=P,V=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],K=P,G=K.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=K.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},W=P,Y=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(z("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},Q=_,Z=U,ee=function(e,t){return e&&!M(t)?J(e,t):t},te=function(e){var t,r,n,o={};return e?(X.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=X.trim(e.substr(0,n)).toLowerCase(),r=X.trim(e.substr(n+1)),t){if(o[t]&&V.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},re=G,ne=H,oe=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers;W.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",s=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+s)}var u=ee(e.baseURL,e.url);if(a.open(e.method.toUpperCase(),Z(u,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,a.onreadystatechange=function(){if(a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in a?te(a.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};Y(t,r,o),a=null}},a.onabort=function(){a&&(r(ne("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(ne("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(ne(t,e,"ECONNABORTED",a)),a=null},W.isStandardBrowserEnv()){var c=(e.withCredentials||re(u))&&e.xsrfCookieName?Q.read(e.xsrfCookieName):void 0;c&&(o[e.xsrfHeaderName]=c)}if("setRequestHeader"in a&&W.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),W.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),e.responseType)try{a.responseType=e.responseType}catch(f){if("json"!==e.responseType)throw f}"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},ae=P,ie=function(e,t){F.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},se={"Content-Type":"application/x-www-form-urlencoded"};function ue(e,t){!ae.isUndefined(e)&&ae.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ce,fe={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ce=oe),ce),transformRequest:[function(e,t){return ie(t,"Accept"),ie(t,"Content-Type"),ae.isFormData(e)||ae.isArrayBuffer(e)||ae.isBuffer(e)||ae.isStream(e)||ae.isFile(e)||ae.isBlob(e)?e:ae.isArrayBufferView(e)?e.buffer:ae.isURLSearchParams(e)?(ue(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ae.isObject(e)?(ue(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};fe.headers={common:{Accept:"application/json, text/plain, */*"}},ae.forEach(["delete","get","head"],(function(e){fe.headers[e]={}})),ae.forEach(["post","put","patch"],(function(e){fe.headers[e]=ae.merge(se)}));var le=fe,pe=P,de=function(e,t,r){return k.forEach(r,(function(r){e=r(e,t)})),e},he=D,me=le;function ve(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ge=P,ye=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function s(e,t){return ge.isPlainObject(e)&&ge.isPlainObject(t)?ge.merge(e,t):ge.isPlainObject(t)?ge.merge({},t):ge.isArray(t)?t.slice():t}function u(n){ge.isUndefined(t[n])?ge.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}ge.forEach(n,(function(e){ge.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),ge.forEach(o,u),ge.forEach(a,(function(n){ge.isUndefined(t[n])?ge.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),ge.forEach(i,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var c=n.concat(o).concat(a).concat(i),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return ge.forEach(f,u),r},be=P,we=U,xe=q,Ee=function(e){return ve(e),e.headers=e.headers||{},e.data=de(e.data,e.headers,e.transformRequest),e.headers=pe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||me.adapter)(e).then((function(t){return ve(e),t.data=de(t.data,t.headers,e.transformResponse),t}),(function(t){return he(t)||(ve(e),t&&t.response&&(t.response.data=de(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},je=ye;function Oe(e){this.defaults=e,this.interceptors={request:new xe,response:new xe}}Oe.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=je(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[Ee,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},Oe.prototype.getUri=function(e){return e=je(this.defaults,e),we(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},be.forEach(["delete","get","head","options"],(function(e){Oe.prototype[e]=function(t,r){return this.request(je(r||{},{method:e,url:t,data:(r||{}).data}))}})),be.forEach(["post","put","patch"],(function(e){Oe.prototype[e]=function(t,r,n){return this.request(je(n||{},{method:e,url:t,data:r}))}}));var Ce=Oe;function Re(e){this.message=e}Re.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Re.prototype.__CANCEL__=!0;var Se=Re,Ae=Se;function Pe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new Ae(e),t(r.reason))}))}Pe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Pe.source=function(){var e;return{token:new Pe((function(t){e=t})),cancel:e}};var Ne=Pe,Te=P,Ue=w,Be=Ce,Le=ye;function qe(e){var t=new Be(e),r=Ue(Be.prototype.request,t);return Te.extend(r,Be.prototype,t),Te.extend(r,t),r}var ke=qe(le);ke.Axios=Be,ke.create=function(e){return qe(Le(ke.defaults,e))},ke.Cancel=Se,ke.CancelToken=Ne,ke.isCancel=D,ke.all=function(e){return Promise.all(e)},ke.spread=function(e){return function(t){return e.apply(null,t)}},ke.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},b.exports=ke,b.exports.default=ke;var De=b.exports;var Fe,Ie=(Fe=De,function(e,t={}){const{manual:r,manualRerun:n,processData:o={},data:a=c(),error:i=c(),status:d=c(),loading:h=c(),createReactiveData:m=(()=>{}),processResponse:v=(()=>{}),processError:g=(()=>{})}=t;let y;if("function"==typeof e)y=e;else{const t="string"==typeof e?{url:e}:e;y=e=>Fe(Object.assign({},t,e))}const{create:b=(()=>c()),receive:w=((e,t)=>e.value=t)}=o,x=m(),E=s({data:a,error:i,status:d,loading:h},x);let j=0;async function O(...e){const t=++j;let r,o;h.value=!0,i.value=null,d.value=void 0;try{if(n)r=await y(...e);else{let t;f((()=>{t=y(...e)}),(()=>{l((()=>O(...e)))})),r=await t}}catch(s){o=s}if(t===j){if(o?(console.error(o),p((()=>{w(a,void 0),o.response?(i.value=o.response.data,d.value=o.response.status):o.request?i.value="no response":i.value="client error",g(E,o)}))):p((()=>{w(a,r.data),d.value=r.status,v(E,r)})),h.value=!1,o)throw o;return a}}return r||O(),u(s({},E),{run:O})});function He(){const e=c(),t=c(10),r=m((()=>{var r;return(null==(r=e.value)?void 0:r.result.length)||t.value})),i=c(0),f=y.useInfinitePageHelper(i,t,r),{currentPage:l}=f,d=((e,t)=>{var r={};for(var i in e)o.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&n)for(var i of n(e))t.indexOf(i)<0&&a.call(e,i)&&(r[i]=e[i]);return r})(f,["currentPage"]),{loading:b}=Ie((()=>(console.log("sending request"),De({url:`https://api.apiopen.top/getWangYiNews?page=${l.value}&count=${t.value}`}))),{data:e,processData:{receive(e,t){console.log("receiving...."),e.value=t}}}),{error:w,loading:x}=Ie("http://error"),E=v((()=>e.value?e.value.result:[]));return h("div",null,h("div",null,(()=>b.value?"loading":"load complete")),h(g,{columns:[{title:"标题",dataIndex:"title"},{title:"事件",dataIndex:"passtime"}],data:E}),h(y,u(s({currentPage:l},d),{onChange:e=>{p((()=>{i.value=(e-1)*t.value}))}})),h("div",null,(()=>x.value?"error example loading":"error completed")," "),h("div",null,(()=>`error: ${JSON.stringify(w.value)}`)))}d(h(He,null),document.getElementById("root"));
