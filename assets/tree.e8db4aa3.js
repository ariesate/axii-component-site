import{U as e,O as t,j as l,R as i,$ as o,z as a}from"./vendor.3b3f849b.js";import{C as s}from"./Checkbox.093bc40d.js";import{a as c}from"./Menu.37a7ef10.js";import"./index.f7e44da3.js";const n=e=>{e.item.modify(((e,{item:t,level:i,data:o,onSelect:a})=>{e.children[0].children.splice(1,0,l("checkbox",{use:s,onChange:({value:e})=>a(e.value)}))}))};n.propTypes={onSelect:e.callback.default((()=>(e,{activeKey:t})=>{console.log(t.value)}))},n.Style=e=>{};var r=t(c,[n]);const d=i([{title:"title1",key:"title1",children:[{title:"sub1",key:"sub1",children:[{title:"sub1 of sub1"}]}]},{title:"title2",key:"title2",children:[{title:"sub1 of title2",key:"sub1 of title2"}]},{title:"title3",key:"title3"}]),u=o("sub1");a(l(r,{data:d,activeKey:u}),document.getElementById("root"));
