(this["webpackJsonpmb-expense-tracker"]=this["webpackJsonpmb-expense-tracker"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),l=(n(9),n(1)),s=(n(10),n(11),n(12),function(){return c.a.createElement("section",{className:"user-section"},c.a.createElement("img",{src:"https://api.time.com/wp-content/uploads/2017/07/1f9dd-w-5-320px.png",alt:"user image"}),c.a.createElement("p",null,"Salome Lopez"))}),i=function(){return c.a.createElement("nav",null,c.a.createElement("h1",null,"MB Tracker"),c.a.createElement("section",null,c.a.createElement(s,null)))},u=(n(13),function(e){var t=e.categories;e.addCategory;return console.log("Category",t),c.a.createElement("section",{className:"category_section"},c.a.createElement("h2",null,"Category"),c.a.createElement("div",{className:"category_list"},t.map((function(e){return c.a.createElement("section",{style:{backgroundColor:"".concat(e.color)},className:"category_"},c.a.createElement("p",null,e.categoryTitle))})),c.a.createElement("button",{type:"button"},"+")))}),m=function(){return c.a.createElement("section",null,c.a.createElement("p",null,"Account"))},p=function(){return c.a.createElement("section",null,c.a.createElement("p",null,"Expenses"))},E=function(){var e=c.a.useState([{expenseID:1,expense:49.9,locationName:"Whole Foods",date:"2020-15-03",accountId:"20",categoryId:"15"}]),t=Object(l.a)(e,2),n=t[0],a=t[1],o=c.a.useState([{accountID:20,accountTitle:"London Trip",color:"#9381FF",type:"bank account"}]),r=Object(l.a)(o,2),s=r[0],E=r[1],d=c.a.useState([{categoryID:15,categoryTitle:"groceries",color:"#FFD8BE"}]),g=Object(l.a)(d,2),f=g[0],y=g[1];return c.a.createElement("section",{className:"App"},c.a.createElement(i,null),c.a.createElement("section",{className:"cat_expenses_section"},c.a.createElement(u,{categories:f,addCategory:function(e){y(e)}}),c.a.createElement(p,{expenses:n,addExpense:function(e){a(e)}})),c.a.createElement("section",{className:"app_account_section"},c.a.createElement(m,{accounts:s,addAccount:function(e){E(e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.53fce506.chunk.js.map