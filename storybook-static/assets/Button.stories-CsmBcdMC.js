import{B as s}from"./Button-Brdg18Zs.js";import"./jsx-runtime-D_zvdyIk.js";const{fn:t}=__STORYBOOK_MODULE_TEST__,l={title:"Example/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:t()}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"}},e={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};const m=["Primary","Secondary","Large","Small"];export{e as Large,r as Primary,a as Secondary,o as Small,m as __namedExportsOrder,l as default};
