(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4749)}])},4749:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return _}});var n=t(5893),l=t(9008),r=t.n(l),s=t(7294),o=t(3764),i=t(6154),c=t(6288),d=t.n(c),u=()=>{let[e,a]=(0,s.useState)("cpp"),[t,l]=(0,s.useState)("vs-dark"),[r,c]=(0,s.useState)(""),[u,_]=(0,s.useState)(""),[h,x]=(0,s.useState)(""),[v,j]=(0,s.useState)('#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n  cout << "Hello World!" << endl;\n  \n  return 0;\n}'),m=async()=>{try{let e=await i.Z.post("/api/compile",{code:v,input:r});_(e.data.stdout),x(e.data.stderr)}catch(e){x("An error occurred during execution.")}};return(0,n.jsxs)("div",{className:d().editorContainer,children:[(0,n.jsxs)("div",{className:d().dropdownContainer,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:d().label,children:" Language: "}),(0,n.jsx)("select",{className:d().select,value:e,onChange:e=>{a(e.target.value)},children:[{value:"cpp",label:"C++"}].map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:d().label,children:" Theme: "}),(0,n.jsx)("select",{className:d().select,value:t,onChange:e=>{l(e.target.value)},children:[{value:"vs",label:"Light"},{value:"vs-dark",label:"Dark"}].map(e=>(0,n.jsx)("option",{value:e.value,children:e.label},e.value))})]})]}),(0,n.jsx)("div",{className:d().editor,children:(0,n.jsx)(o.ZP,{height:"60vh",language:e,theme:t,value:v,onChange:e=>{j(e)}})}),(0,n.jsxs)("div",{className:d().runButtonContainer,children:[(0,n.jsx)("button",{className:d().runButton,onClick:m,children:"Compile & Run"}),(0,n.jsx)("button",{className:d().clearButton,onClick:()=>{_(""),x("")},children:"Clear"})]}),(0,n.jsxs)("div",{className:d().resultContainer,children:[(0,n.jsxs)("div",{className:d().resultField,children:[(0,n.jsx)("label",{children:"Input:"}),(0,n.jsx)("textarea",{className:d().resultTextarea,value:r,onChange:e=>{c(e.target.value)}})]}),(0,n.jsxs)("div",{className:d().resultField,children:[(0,n.jsx)("label",{children:"Output:"}),(0,n.jsx)("textarea",{className:d().resultTextarea,value:u,readOnly:!0,wrap:"off"})]}),(0,n.jsxs)("div",{className:d().resultField,children:[(0,n.jsx)("label",{children:"Error:"}),(0,n.jsx)("textarea",{className:d().resultTextarea,value:h,readOnly:!0})]})]})]})},_=()=>(0,n.jsxs)("div",{children:[(0,n.jsx)(r(),{children:(0,n.jsx)("title",{children:"VSOJ"})}),(0,n.jsx)("main",{children:(0,n.jsx)(u,{})})]})},6288:function(e){e.exports={editorContainer:"MonacoEditor_editorContainer__YrHNe",dropdownContainer:"MonacoEditor_dropdownContainer__honYl",label:"MonacoEditor_label__GCA_m",select:"MonacoEditor_select__4WBxN",editor:"MonacoEditor_editor__FmrUv",textarea:"MonacoEditor_textarea__4v6W_",resultContainer:"MonacoEditor_resultContainer__lBzd9",resultField:"MonacoEditor_resultField__bBJGs",resultTextarea:"MonacoEditor_resultTextarea__1FyVa",runButtonContainer:"MonacoEditor_runButtonContainer__g9ag5",runButton:"MonacoEditor_runButton__Iwhpl",clearButton:"MonacoEditor_clearButton__60qYo"}}},function(e){e.O(0,[200,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);