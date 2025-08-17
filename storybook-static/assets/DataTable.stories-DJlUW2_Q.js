import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CIT5aZQc.js";import"./preload-helper-D9Z9MdNV.js";const y=({data:p,columns:g,loading:x=!1,selectable:h=!1,onRowSelect:S})=>{const[t,T]=u.useState([]),[r,j]=u.useState(null),[i,N]=u.useState("asc"),v=e=>{if(!e.accessor)return;const a=r===e.accessor&&i==="asc"?"desc":"asc";j(String(e.accessor)),N(a)},C=[...p].sort((e,a)=>{if(!r)return 0;const n=e[r],f=a[r];return i==="asc"?n>f?1:-1:n<f?1:-1}),w=e=>{let a;t.includes(e)?a=t.filter(n=>n!==e):a=[...t,e],T(a),S?.(a)};return x?s.jsx("p",{className:"p-4 text-gray-500",children:"Loading..."}):p.length?s.jsxs("table",{className:"w-full border border-gray-200 rounded-lg",children:[s.jsx("thead",{className:"bg-gray-100",children:s.jsxs("tr",{children:[h&&s.jsx("th",{className:"p-2",children:"Select"}),g.map(e=>s.jsxs("th",{className:"p-2 cursor-pointer",onClick:()=>v(e),children:[e.header," ",r===e.accessor?i==="asc"?"⬆️":"⬇️":""]},e.header))]})}),s.jsx("tbody",{children:C.map(e=>s.jsxs("tr",{className:"border-t",children:[h&&s.jsx("td",{className:"p-2",children:s.jsx("input",{type:"checkbox",checked:t.includes(e),onChange:()=>w(e)})}),g.map(a=>s.jsx("td",{className:"p-2",children:a.cell?a.cell(e):e[a.accessor]},a.header))]},e.id))})]}):s.jsx("p",{className:"p-4 text-gray-400",children:"No data available"})};y.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column",elements:[{name:"T"}],raw:"Column<T>"}],raw:"Column<T>[]"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedRows: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"selectedRows"}],return:{name:"void"}}},description:""}}};const b=[{id:1,name:"Alice",email:"alice@test.com"},{id:2,name:"Bob",email:"bob@test.com"},{id:3,name:"Charlie",email:"charlie@test.com"}],m=[{header:"Name",accessor:"name"},{header:"Email",accessor:"email"}],q={title:"Components/DataTable",component:y,tags:["autodocs"]},c={args:{data:b,columns:m}},o={args:{data:b,columns:m,selectable:!0}},l={args:{data:[],columns:m,loading:!0}},d={args:{data:[],columns:m}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    columns
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data,
    columns,
    selectable: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns,
    loading: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: [],
    columns
  }
}`,...d.parameters?.docs?.source}}};const A=["Default","Selectable","Loading","Empty"];export{c as Default,d as Empty,l as Loading,o as Selectable,A as __namedExportsOrder,q as default};
