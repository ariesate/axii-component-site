import{P as e,C as t,g as d}from"./axii.es.c9c93548.js";import{T as n}from"./Table.e09cc84b.js";import"./index.1d9f6fcb.js";const a=[{title:"Name",dataIndex:"name",key:"name",width:100,fixed:"left",filters:[{text:"Joe",value:"Joe"},{text:"John",value:"John"}],onFilter:(e,t)=>0===t.name.indexOf(e)},{title:"Other",children:[{title:"Age",dataIndex:"age",key:"age",width:150,sorter:(e,t)=>e.age-t.age},{title:"Address",children:[{title:"Street",dataIndex:"street",key:"street",width:150},{title:"Block",children:[{title:"Building",dataIndex:"building",key:"building",width:100},{title:"Door No.",dataIndex:"number",key:"number",width:100}]}]}]},{title:"Company",children:[{title:"Company Address",dataIndex:"companyAddress",key:"companyAddress",width:200},{title:"Company Name",dataIndex:"companyName",key:"companyName"}]},{title:"Gender",dataIndex:"gender",key:"gender",width:80,fixed:"right"},{title:"Action",dataIndex:"key",render:()=>d("button",null,"delete")}],i=[];for(let s=0;s<10;s++)i.push({key:s.toString(),name:"John Brown",age:s+1,street:"Lake Park",building:"C",number:2035,companyAddress:"Lake Street 42",companyName:"SoftLake Co",gender:"M"});const r=e(new Set),o=e(new Set),l=e({x:900,y:300});t(d(n,{data:i,columns:a,expandedRowRender:function(e){return d("div",null,JSON.stringify(e))},expandedRowKeys:r,selectedRowKeys:o,scroll:l,fixHeader:!0}),document.getElementById("root"));
