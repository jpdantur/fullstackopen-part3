(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),c=(t(19),t(2)),i=function(e){var n=e.id,t=e.name,a=e.number,u=e.handleDelete;return r.a.createElement("div",null,t," ",a," ",r.a.createElement("button",{onClick:u(n,t)},"delete"))},l=function(e){var n=e.status,t=e.message;return null===t?null:r.a.createElement("div",{className:n},t)},m=t(3),s=t.n(m),d="/api/persons",f=function(){return s.a.get(d).then((function(e){return e.data}))},h=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.searchTerm,t=e.onChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:n,onChange:t}))},p=function(e){var n=e.name,t=e.number,a=e.onNameChange,u=e.onNumberChange,o=e.onSubmit;return r.a.createElement("form",{onSubmit:o},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.persons,t=e.handleDelete;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement(i,{key:e.id,id:e.id,name:e.name,number:e.number,handleDelete:t})})))},w=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),i=Object(c.a)(o,2),m=i[0],s=i[1],d=Object(a.useState)(""),w=Object(c.a)(d,2),j=w[0],O=w[1],C=Object(a.useState)(""),k=Object(c.a)(C,2),S=k[0],D=k[1],T=Object(a.useState)(null),N=Object(c.a)(T,2),y=N[0],B=N[1],J=Object(a.useState)(null),L=Object(c.a)(J,2),W=L[0],x=L[1];Object(a.useEffect)((function(){f().then((function(e){return u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(l,{status:"error",message:y}),r.a.createElement(l,{status:"success",message:W}),r.a.createElement(E,{searchTerm:S,onChange:function(e){D(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(p,{name:m,number:j,onNameChange:function(e){s(e.target.value)},onNumberChange:function(e){O(e.target.value)},onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===m}));void 0===n?h({name:m,number:j}).then((function(e){u(t.concat({name:e.name,number:e.number,id:e.id})),s(""),O(""),x("Added ".concat(e.name)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){s(""),O(""),B(e.response.data.error),setTimeout((function(){B(null)}),5e3)})):window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,{id:n.id,name:n.name,number:j}).then((function(e){s(""),O(""),u(t.map((function(n){return{id:n.id,name:n.name,number:n.id===e.id?e.number:n.number}}))),x("Updated ".concat(e.name)),setTimeout((function(){x(null)}),5e3)})).catch((function(e){s(""),O(""),B(e.response.data.error),setTimeout((function(){B(null)}),5e3)}))}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(g,{handleDelete:function(e,n){return function(){window.confirm("Delete ".concat(n,"?"))&&v(e).then((function(){u(t.filter((function(n){return n.id!==e}))),x("Deleted ".concat(n)),setTimeout((function(){x(null)}),5e3)}))}},persons:t.filter((function(e){return e.name.toLowerCase().includes(S.toLowerCase())}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7fe51127.chunk.js.map