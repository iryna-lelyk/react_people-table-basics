(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(2)),s=(c(23),c(6)),j=c.n(s),i=c(0),l=function(e){var t=e.to,c=e.text;return Object(i.jsx)(a.b,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:c})},o=c(8),b=c(9),h=c(12),d=c(4),x=c(1);function O(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(25);var u=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.person,c=e.isSelected,n=t.slug,a=t.name,r=t.born,s=t.died,l=t.sex,o=t.motherName,b=t.mother,h=t.fatherName,d=t.father;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"#/people/".concat(n),className:j()({"has-text-danger":"f"===l}),children:a})}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:b?Object(i.jsx)("a",{className:"has-text-danger",href:"#/people/".concat(b.slug),children:b.name}):o||"-"}),Object(i.jsx)("td",{children:d?Object(i.jsx)("a",{href:"#/people/".concat(d.slug),children:d.name}):h||"-"})]})},m=function(){var e=Object(x.useState)(!1),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(x.useState)([]),s=Object(d.a)(a,2),j=s[0],l=s[1],m=Object(x.useState)(!1),f=Object(d.a)(m,2),v=f[0],g=f[1],N=Object(r.h)().slug,y=function(){var e=Object(h.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!1),n(!0),e.next=5,O();case 5:t=e.sent,l(t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})}))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),g(!0);case 12:return e.prev=12,n(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(x.useEffect)((function(){y()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(u,{}),v&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&!j.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!c&&j.length>0&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:j.map((function(e){return Object(i.jsx)(p,{person:e,isSelected:e.slug===N},e.slug)}))})]})]})})]})},f=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(l,{to:"/",text:"Home"}),Object(i.jsx)(l,{to:"/people",text:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(r.d,{children:[Object(i.jsx)(r.b,{path:"/home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsx)(r.b,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})}),Object(i.jsxs)(r.b,{path:"/people",children:[Object(i.jsx)(r.b,{index:!0,element:Object(i.jsx)(m,{})}),Object(i.jsx)(r.b,{path:":slug",element:Object(i.jsx)(m,{})})]})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(f,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.58652031.chunk.js.map