import{C as e,g as t,x as o}from"./axii.es.c9c93548.js";import{M as i}from"./Menu.07ab95cb.js";import{u as a}from"./useLocation.b8b69302.js";import{S as n}from"./Split.81f7379d.js";import{s as l}from"./index.1d9f6fcb.js";import"./Right.3ca9ec74.js";const c=a(),s={Form:["input","checkbox","datePicker","select","cascader","upload*","timePicker*","radios","autoComplete*","switch*","richText*","editorjs","imageEditor","luckysheet","toastGrid"],Data:["table","tabs","calendar","tree","mindTree","optionTree","collapse*","tooltip*","timeline*","tag*","avatar*","badge*"],Dialog:["message","contextmenu","spin*","alert*","notification*","progress*"],Navigation:["menu","pagination","tabStrip","breadcrumb*","steps*","affix*"],Misc:["button","icon","iconPark"],Layout:["grid*","split"],Utilities:["useForm","useLayer","usePopover","useRouter","useRequest","useLocation","useHistory*"]},r=i.extend((function(e){e.root.elements.container.style((()=>({fontFamily:"Andale Mono",maxWidth:"100%"}))),e.item.elements.name.style((({item:e,level:t})=>({color:e.disabled?l().interactable().inactive().color():t>0?l().color(-5):l().color(5)})))}));function m(){const e=o(c.query.component),i=t=>{e.value=t,c.patchQuery({component:t})};return window.getCurrent=()=>e,window.onChange=i,t("div",{block:!0,"block-height":"100%"},t(n,{asideLeft:!0,"layout:block-height":"100%"},t("div",{block:!0,"block-height":"100%","block-padding-left-10px":!0,"block-padding-top-10px":!0,"block-overflow-y-auto":!0},t("h1",null,"AXII Components"),(()=>Object.entries(s).map((([o,a])=>t("div",null,t("h2",null,o),t(r,{data:a.map((e=>({title:e.replace("*",""),disabled:/\*$/.test(e),key:e}))),activeKey:e,onSetActive:e=>i(e.key)})))))),t("div",{block:!0,"block-height":"100%"},(()=>e.value?t("iframe",{height:"100%",width:"100%",src:`./playground.html?component=${e.value}`}):t("div",null,"choose a component on left to see example.")))))}e(t(m,null),document.getElementById("root"));
