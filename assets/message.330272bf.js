var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(n,t,r)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,a=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&s(e,t,n[t]);if(r)for(var t of r(n))i.call(n,t)&&s(e,t,n[t]);return e};import{j as l,m as c,$ as u,E as d,z as f}from"./vendor.3b3f849b.js";import{l as p}from"./layer.1de5bf64.js";import{c as g,s as y}from"./index.f7e44da3.js";function b(){const e=document.createElement("div");return document.body.appendChild(e),e}function m(){return{}}function v(){return e=a({},p),r={padding:y().spacing()},n(e,t(r));var e,r}function w(){return{display:"inline-flex",justifyContent:"center",alignItems:"center",marginTop:20}}function h(e,n,t){return l(c,null,l("indicator",{inline:!0,"flex-align-self-stretch":!0,"inline-width-4px":!0,style:{background:n}}),l("span",{inline:!0,"inline-padding-left-10px":!0,"inline-padding-right-10px":!0},e))}var j=function({createContainer:e=b,getPosition:n=m,getStyle:t=v,getLayoutStyle:r=w,duration:o=2e3,createCommonMessage:i=h}={}){const s=e(),c=u([]),p=u(!0),y=d((()=>({display:p.value?"block":"none",position:"fixed",top:0,left:0,width:"100%",pointerEvents:"none",zIndex:999}))),j={display:"flex",width:"100%",pointerEvents:"none",justifyContent:"center"},C=d((()=>{const e=n(s.getBoundingClientRect()),o=t(),i=r();return a(a(a({display:"inline-block"},e),o),i)})),x=e=>{c.value=c.value.concat(e),setTimeout((()=>{c.value=c.value.filter((n=>n!==e))}),o)};function O(){return l("container",{style:y},(()=>c.value.map((e=>l("messageContainer",{style:j},l("message",{style:C},e))))))}return f(l(O,null),s),{success:e=>x(h(e,g.green())),warning:e=>x(h(e,g.gold())),error:e=>x(h(e,g.red())),info:e=>x(h(e,g.blue())),show:x}}();function C(){return setTimeout((()=>{j.success("asdfasdfsadf"),j.error("asdfasdfsadf")}),100),l("div",null,l("button",{onClick:()=>j.success("success")},"show success message"),l("button",{onClick:()=>j.warning("warning")},"warning"),l("button",{onClick:()=>j.info("info")},"info"),l("button",{onClick:()=>j.error("error")},"error"),l("button",{onClick:()=>j.show("anything")},"show"))}f(l(C,null),document.getElementById("root"));
