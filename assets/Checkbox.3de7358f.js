import{M as e,x as l,h as a,g as n}from"./axii.es.c9c93548.js";import{s as i}from"./index.1d9f6fcb.js";function o({value:e,disabled:l,onChange:a,children:o}){return n("container",{use:"label",inline:!0,"flex-display-inline":!0,"flex-align-items-center":!0},n("input",{type:"checkbox",value:"",disabled:l,checked:e,onChange:a}),n("affix",{inline:!0,"inline-padding-left":i().small().spacing()},o))}o.propTypes={value:e.bool.default((()=>l(!1))),disabled:e.bool.default((()=>l(!1))),onChange:e.callback.default((()=>({value:e})=>{e.value=!e.value}))},o.Style=e=>{e.root.elements.input.style({lineHeight:"14px"})},o.Style.propTypes={focused:e.bool.default((()=>l(!1))),onChangeFocus:e.callback.default((()=>(e,{focused:l})=>l.value=e))};var s=a(o);export{s as C};
