(this["webpackJsonpreims-js-2103-project2-wild-code-tails"]=this["webpackJsonpreims-js-2103-project2-wild-code-tails"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(31),r=n.n(i),a=(n(39),n(10)),l=n(21),j=n(4),o=(n(40),n(11)),d=n(3),u=n(32),b=n.n(u),O=(n(59),n(1)),h=function(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"column",children:[Object(O.jsx)("h1",{children:"About Us"}),Object(O.jsxs)("div",{className:"icons",children:[Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/allan-caplain-79019a159/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Allan Caplain"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/bastien-le-brun-3417b4137/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Bastien Le Brun"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/calvinhyacinthmsc/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Calvin Hyacinth"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/c%C3%A9dric-guyot-17231b209/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"C\xe9dric Guyot"})}),Object(O.jsx)("a",{className:"icon",href:"https://www.linkedin.com/in/cyril-david-928403176/",children:Object(O.jsx)("p",{className:"fa-fa-linkedin",children:"Cyril David"})})]})]})})})};n(30);var f=function(e){var t=e.children,n=Object(c.useState)(!1),s=Object(j.a)(n,2),i=s[0],r=s[1];return!1===i?Object(O.jsx)("button",{className:"modalButton",type:"button",onClick:function(){r(!0)},children:"Details"}):Object(O.jsx)("div",{id:"myModal",className:"modal",children:Object(O.jsxs)("div",{className:"modal-content",children:[t,Object(O.jsx)("button",{className:"card-button",type:"button",onClick:function(){r(!1)},children:"Close"})]})})};function v(e){var t=e.ingredient1,n=e.ingredient2,c=e.ingredient3,s=e.ingredient4,i=e.ingredient5,r=e.ingredient6,a=e.instructions,l=e.measure1,j=e.measure2,o=e.measure3,d=e.measure4,u=e.measure5,b=e.measure6;return Object(O.jsxs)("div",{className:"ingredient",children:[Object(O.jsx)("p",{children:l}),Object(O.jsx)("p",{children:j}),Object(O.jsx)("p",{children:o}),Object(O.jsx)("p",{children:d}),Object(O.jsx)("p",{children:u}),Object(O.jsx)("p",{children:b}),Object(O.jsx)("p",{children:t}),Object(O.jsx)("p",{children:n}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("p",{children:s}),Object(O.jsx)("p",{children:i}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("div",{className:"instructions",children:a})]})}v.defaultProps={measure1:null,measure2:null,measure3:null,measure4:null,measure5:null,measure6:null,ingredient1:null,ingredient2:null,ingredient3:null,ingredient4:null,ingredient5:null,ingredient6:null,instructions:null};var m=v,x=n(18);var g=function(e){var t=e.cocktail,n=e.favorites,c=e.setFavorites;return Object(O.jsx)("div",{children:-1===n.findIndex((function(e){return e.idDrink===t.idDrink}))?Object(O.jsx)(x.b,{size:15,onClick:function(){return function(){var e=[].concat(Object(a.a)(n),[t]);c(e)}()}}):Object(O.jsx)(x.a,{size:15,onClick:function(){return function(){var e=n.filter((function(e){return e.idDrink!==t.idDrink}));c(e)}()}})})};var p=function(e){var t=e.data,n=e.favorites,c=e.setFavorites;return Object(O.jsx)("div",{className:"cards",children:Object(O.jsx)("div",{className:"card",children:Object(O.jsxs)("div",{className:"card-header",children:[Object(O.jsx)(g,{cocktail:t,favorites:n,setFavorites:c}),Object(O.jsx)("img",{className:"card-img",src:t.strDrinkThumb,alt:"illustration"}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h2",{className:"card-title",children:t.strDrink}),Object(O.jsx)(f,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:"card-title",children:t.strDrink}),Object(O.jsx)("img",{className:"modal-img",src:t.strDrinkThumb,alt:"illustration"}),Object(O.jsx)(m,{mesure1:t.strMeasure1,mesure2:t.strMeasure2,mesure3:t.strMeasure3,mesure4:t.strMeasure4,mesure5:t.strMeasure5,mesure6:t.strMeasure6,ingredient1:t.strIngredient1,ingredient2:t.strIngredient2,ingredient3:t.strIngredient3,ingredient4:t.strIngredient4,ingredient5:t.strIngredient5,ingredient6:t.strIngredient6,instructions:t.strInstructions})]})})]})]})})})},N=function(e){var t=e.cocktails,n=e.favorites,s=e.setFavorites,i=Object(c.useState)(1),r=Object(j.a)(i,2),a=r[0],l=r[1];return Object(c.useEffect)((function(){l(1)}),[t]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"contenu",children:t.slice(14*(a-1),14*a).map((function(e){return Object(O.jsx)(p,{data:e,favorites:n,setFavorites:s},e.idDrink)}))}),Object(O.jsxs)("div",{className:"pagination",children:[a>1&&Object(O.jsx)("button",{className:"pagebutton",type:"button",onClick:function(){return l(a-1)},children:"Previous page"}),14*a<t.length&&Object(O.jsx)("button",{className:"pagebutton",type:"button",onClick:function(){return l(a+1)},children:"Next page"})]})]})};n(61);var k=function(e){var t=e.getQuery,n=Object(c.useState)(""),s=Object(j.a)(n,2),i=s[0],r=s[1];return Object(O.jsx)("div",{className:"searchBar",children:Object(O.jsx)("input",{type:"search",className:"form-control",placeholder:"Search Cocktails",results:"0",value:i,onChange:function(e){return n=e.target.value,r(n),void t(n);var n}})})},C=function(e){var t=e.cocktails,n=e.favorites,s=e.setFavorites,i=Object(c.useState)(""),r=Object(j.a)(i,2),a=r[0],l=r[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{getQuery:function(e){return l(e)}}),Object(O.jsx)(N,{cocktails:t.filter((function(e){return e.strDrink.toLowerCase().includes(a.toLowerCase())})),favorites:n,setFavorites:s})]})},I=(n(62),n.p+"static/media/headerLogo.e79643a7.png"),w=function(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsxs)("div",{className:"gridstyle",children:[Object(O.jsx)("img",{className:"codeTailsImg",src:I,alt:"logo"}),Object(O.jsx)("h1",{children:"WELCOME TO WILD CODE'TAILS"})]}),Object(O.jsx)("div",{className:"thefourth",children:Object(O.jsxs)("nav",{className:"navlist",children:[Object(O.jsx)(o.b,{className:"link",activeClassName:"active",exact:!0,to:"/",children:"Search"}),Object(O.jsx)(o.b,{className:"link",activeClassName:"active",exact:!0,to:"/create",children:"Create"}),Object(O.jsx)(o.b,{className:"link",activeClassName:"active",exact:!0,to:"/cocktail-of-the-day",children:"Try me !"}),Object(O.jsx)(o.b,{className:"link",activeClassName:"active",exact:!0,to:"/favorites",children:"Favorites"})]})})]})};var F=function(e){var t=e.ingredients,n=e.selectedIngredient,c=e.setSelectedIngredient;return Object(O.jsxs)("select",{className:"select",onChange:function(e){c(e.target.value)},value:n,children:[Object(O.jsx)("option",{value:"",children:"Select Ingredient"}),t.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))]})},S=function(e){return e.reduce((function(e,t){var n=[].concat(Object(a.a)(e),Object(a.a)(t.strIngredients)),c=new Set(n);return Object(a.a)(c)}),[]).sort()};var y=function(e){var t=e.cocktails,n=e.favorites,s=e.setFavorites,i=Object(c.useState)([]),r=Object(j.a)(i,2),a=r[0],l=r[1],o=Object(c.useState)([]),d=Object(j.a)(o,2),u=d[0],b=d[1],h=Object(c.useState)(""),f=Object(j.a)(h,2),v=f[0],m=f[1],x=Object(c.useState)(""),g=Object(j.a)(x,2),p=g[0],k=g[1];return Object(c.useEffect)((function(){var e=S(t);l(e),b(e),m(""),k("")}),[t]),Object(c.useEffect)((function(){var e=S(t.filter((function(e){return""===v||e.strIngredients.includes(v)})));b(e.filter((function(e){return e!==v}))),k("")}),[v]),Object(O.jsxs)("div",{className:"strIngredient",children:[Object(O.jsxs)("div",{className:"strIngredientSelectors",children:[Object(O.jsx)(F,{ingredients:a,selectedIngredient:v,setSelectedIngredient:m}),Object(O.jsx)(F,{ingredients:u,selectedIngredient:p,setSelectedIngredient:k})]}),Object(O.jsx)(N,{cocktails:t.filter((function(e){return(""===v||e.strIngredients.includes(v))&&(""===p||e.strIngredients.includes(p))})),favorites:n,setFavorites:s})]})},D=n(34);n(71);var M=function(e){var t=e.cocktails,n=e.favorites,s=e.setFavorites,i=Object(c.useState)(),r=Object(j.a)(i,2),a=r[0],l=r[1],o=function(){var e=Math.floor(Math.random()*t.length);l(t[e])};return Object(c.useEffect)((function(){null==a&&t.length>=1&&o()}),[t]),Object(O.jsx)("div",{className:"dayscocktail",children:a&&Object(O.jsxs)("div",{className:"drinking",children:[Object(O.jsx)(p,{data:a,favorites:n,setFavorites:s}),Object(O.jsxs)("div",{className:"drink",children:[Object(O.jsx)(D.a,{size:70,className:"button",p:!0,onClick:function(){return o()},type:"button"}),Object(O.jsx)("div",{className:"text",children:Object(O.jsx)("text",{children:Object(O.jsx)("p",{children:"CHANGE"})})})]})]})})};n(72);var E=function(e){var t=e.favorites,n=e.setFavorites;return Object(O.jsx)("div",{className:"myFavorites",children:t.map((function(e){return Object(O.jsx)(p,{data:e,favorites:t,setFavorites:n},e.idDrink)}))})},L=function(e,t){var n=localStorage.getItem(e),s=n?JSON.parse(n):t,i=Object(c.useState)(s),r=Object(j.a)(i,2),a=r[0],l=r[1];return[a,function(t){localStorage.setItem(e,JSON.stringify(t)),l(t)}]};var T=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=L("favorite-cocktails",[]),r=Object(j.a)(i,2),u=r[0],f=r[1];return Object(c.useEffect)((function(){Promise.all("abcdefghijklmnopqrstuvwxyz0123456789".split("").map((function(e){return b.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(e))}))).then((function(e){s(e.reduce((function(e,t){if(null==t.data.drinks)return e;var n=t.data.drinks.map((function(e){for(var t=[],n=1;n<=15;n+=1){var c=e["strIngredient".concat(n)];null!=c&&""!==c&&t.push(c.toLowerCase())}return Object(l.a)(Object(l.a)({},e),{},{strIngredients:t})}));return[].concat(Object(a.a)(e),Object(a.a)(n.sort((function(e,t){return e.strDrink.localeCompare(t.strDrink)}))))}),[]))}))}),[]),Object(O.jsxs)(o.a,{basename:"/reims-js-2103-project2-wild-code-tails",children:[Object(O.jsx)(w,{}),Object(O.jsxs)("main",{children:[Object(O.jsx)(d.a,{path:"/",exact:!0,children:Object(O.jsx)(C,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/create",exact:!0,children:Object(O.jsx)(y,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/cocktail-of-the-day",exact:!0,children:Object(O.jsx)(M,{cocktails:n,favorites:u,setFavorites:f})}),Object(O.jsx)(d.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(E,{favorites:u,setFavorites:f})})]}),Object(O.jsx)(h,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),B()}},[[73,1,2]]]);
//# sourceMappingURL=main.0bbb4c5f.chunk.js.map