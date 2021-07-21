(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{38:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n,c,r=a(17),s=a.n(r),i=(a(38),a(12)),o=a(4),l=a(9),u=l.c,d=a(0);!function(e){e.TOGGLE_DARK_MODE="dark mode",e.TOGGLE_LIGHT_MODE="light mode",e.START_LOADING="loading start",e.STOP_LOADING="loading stop"}(n||(n={})),function(e){e.DARK="dark",e.LIGHT="light"}(c||(c={}));var j,b=function(){return localStorage.setItem("mode",c.DARK),{type:n.TOGGLE_DARK_MODE}},O=function(){return localStorage.setItem("mode",c.LIGHT),{type:n.TOGGLE_LIGHT_MODE}},m=a(1),f=function(){var e=u((function(e){return e.app.mode})),t=Object(l.b)();return Object(m.jsx)("header",{className:"header",children:Object(m.jsxs)("div",{className:"container header__content",children:[Object(m.jsx)("h1",{className:"header__logo",children:"Where in the world?"}),Object(m.jsxs)("div",{onClick:function(){var a=e===c.LIGHT?b:O;t(a())},className:"header__theme-switch",children:[Object(m.jsx)("i",{className:e===c.LIGHT?"far fa-moon":"fas fa-moon"}),Object(m.jsx)("div",{className:"header__theme-switch_title",children:"Dark Mode"})]})]})})},p=a(3),v=a(33),h=a(11),x=a.n(h),g=a(14);!function(e){e.INITIAL="initial",e.FILTER="filter",e.SEARCH="search",e.FIND="find"}(j||(j={}));var N=a(19),y=a.n(N),_=function(){var e=Object(g.a)(x.a.mark((function e(t,a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:n.START_LOADING}),e.prev=1,e.next=4,a(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:t({type:n.STOP_LOADING});case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e="All",t=Object(d.useState)(!1),a=Object(v.a)(t,2),n=a[0],c=a[1],r=u((function(e){return e.country.region})),s=u((function(e){return e.country.name})),i=Object(l.b)(),o={arrow:{transform:n?"rotateZ(-180deg)":""},dropDown:{maxHeight:n?"300px":""}},b=function(t){var a,n=t.currentTarget.innerText,r=n===e?"":n;c(!1),i((a=r,{type:j.FILTER,payload:a}))};return Object(m.jsxs)("div",{className:"selector",children:[Object(m.jsxs)("div",{className:"selector_search",children:[Object(m.jsx)("i",{className:"fas fa-search"}),Object(m.jsx)("input",{onChange:function(e){e.preventDefault();var t,a=e.target.value;i((t=a,{type:j.SEARCH,payload:t}))},placeholder:"Search for a country",type:"text",value:s})]}),Object(m.jsxs)("div",{className:"selector_filter",children:[Object(m.jsxs)("div",{onClick:function(){c((function(e){return!e}))},className:"selector_filter_main",children:[r||"Filter by Region",Object(m.jsx)("i",{style:Object(p.a)({},o.arrow),className:"fas fa-chevron-down"})]}),Object(m.jsx)("ul",{style:Object(p.a)({},o.dropDown),className:"selector_filter_dropdown",children:[e,"Africa","Americas","Asia","Europe","Oceania"].map((function(e){return Object(m.jsx)("li",{onClick:b,className:"selector_filter_dropdown-item",children:e},e)}))})]})]})},L=function(e){return Object(m.jsxs)("div",{className:"country",children:[Object(m.jsx)("img",{className:"country_flag",src:e.flag,alt:e.name}),Object(m.jsxs)("div",{className:"country_content",children:[Object(m.jsx)("h2",{className:"country_content-title",children:e.name}),Object(m.jsxs)("div",{className:"country_content-stat",children:["Population:"," ",Object(m.jsx)("span",{className:"country_content-stat-value",children:e.population})]}),Object(m.jsxs)("div",{className:"country_content-stat",children:["Region:"," ",Object(m.jsx)("span",{className:"country_content-stat-value",children:e.region})]}),Object(m.jsxs)("div",{className:"country_content-stat",children:["Capital:"," ",Object(m.jsx)("span",{className:"country_content-stat-value",children:e.capital})]})]})]})},T=function(){var e=u((function(e){return e.country.countries}));return Object(m.jsx)("div",{className:"country-list",children:e.map((function(e){return Object(m.jsx)(i.b,{to:"/details/".concat(e.name),children:Object(m.jsx)(L,Object(p.a)({},e))},e.name)}))})};a(64);function w(){return Object(m.jsxs)("div",{className:"lds-ellipsis",children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})}var D=function(){var e=u((function(e){return e.app.loading})),t=u((function(e){return e.country.countries})),a=Object(l.b)();return Object(d.useEffect)((function(){console.log(t),0===t.length&&a(function(){var e=Object(g.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){var e=Object(g.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://restcountries.eu/rest/v2/all");case 2:a=e.sent,t({type:j.INITIAL,payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_(t,a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),e?Object(m.jsx)(w,{}):Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{}),Object(m.jsx)(T,{})]})},A=function(){var e=Object(l.b)(),t=Object(o.g)().name,a=Object(o.f)(),n=u((function(e){return e.country.detailedCountry})),c=u((function(e){return e.app.loading}));if(Object(d.useEffect)((function(){(!n||n.name!==t)&&e(function(e){return function(){var t=Object(g.a)(x.a.mark((function t(a){var n,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="https://restcountries.eu/rest/v2/name/".concat(e),c=function(){var e=Object(g.a)(x.a.mark((function e(t){var a,c,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(n);case 2:return a=e.sent,e.next=5,y.a.get("https://restcountries.eu/rest/v2/all");case 5:c=e.sent,r=c.data,a.data[0].borders=a.data[0].borders.map((function(e){var t;return(null===(t=r.find((function(t){return t.alpha3Code===e})))||void 0===t?void 0:t.name)||e})),t({type:j.FIND,payload:a.data[0]});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_(a,c);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t]),console.log(t),c||!n||n.name!==t)return Object(m.jsx)(w,{});var r=[{stat:"Native name",value:n.nativeName},{stat:"Population",value:n.population},{stat:"Region",value:n.region},{stat:"Sub Region",value:n.subregion},{stat:"Capital",value:n.capital}],s=[{stat:"Top Level Domain",value:n.topLevelDomain.join(" ")},{stat:"Currencies",value:n.currencies.map((function(e){return e.name})).join(" ")},{stat:"Languages",value:n.languages.map((function(e){return e.name})).join(" ")}],b=function(e){return e.map((function(e){return Object(m.jsxs)("div",{className:"country_content-stat",children:["".concat(e.stat,": "),Object(m.jsx)("span",{className:"country_content-stat-value",children:e.value})]},e.stat)}))};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("button",{onClick:function(){a.push("/")},className:"go-back",children:[Object(m.jsx)("i",{className:"fas fa-long-arrow-alt-left"}),"Back"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{className:"flag",src:n.flag,alt:n.name}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsx)("h2",{className:"details-title",children:n.name}),Object(m.jsxs)("div",{className:"details-stats",children:[Object(m.jsx)("div",{className:"details-stats_main",children:b(r)}),Object(m.jsx)("div",{className:"details-stats_secondary",children:b(s)})]}),Object(m.jsxs)("div",{className:"border-countries",children:[Object(m.jsx)("div",{className:"border-countries_title",children:"Border Countries"}),Object(m.jsx)("div",{className:"border-countries_values",children:n.borders.map((function(e){return Object(m.jsx)(i.b,{to:"/details/".concat(e),className:"border-countries_values-item",children:e},e)}))})]})]})]})]})};var G=function(){var e=u((function(e){return e.app.mode}));return Object(m.jsx)("div",{className:"theme--".concat(e),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(f,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(i.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(D,{})}),Object(m.jsx)(o.a,{exact:!0,path:"/details/:name",children:Object(m.jsx)(A,{})})]})})})]})})},E=a(16),C={mode:localStorage.getItem("mode")||c.DARK,loading:!0},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.TOGGLE_DARK_MODE:return Object(p.a)(Object(p.a)({},e),{},{mode:c.DARK});case n.TOGGLE_LIGHT_MODE:return Object(p.a)(Object(p.a)({},e),{},{mode:c.LIGHT});case n.START_LOADING:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case n.STOP_LOADING:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},k={countries:[],region:"",name:"",detailedCountry:void 0},S=[],H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.INITIAL:return S=t.payload,Object(p.a)(Object(p.a)({},e),{},{countries:t.payload});case j.FILTER:var a=function(a){var n=""===t.payload||a.region===t.payload,c=!0;return e.name&&(c=a.name.toLowerCase().startsWith(e.name.toLowerCase())),c&&n};return Object(p.a)(Object(p.a)({},e),{},{countries:S.filter(a),region:t.payload});case j.SEARCH:var n=function(a){var n=a.name.toLowerCase().startsWith(t.payload.toLowerCase()),c=!0;return e.region&&(c=a.region===e.region),n&&c};return Object(p.a)(Object(p.a)({},e),{},{countries:S.filter(n),name:t.payload});case j.FIND:return Object(p.a)(Object(p.a)({},e),{},{detailedCountry:t.payload});default:return e}},F=Object(E.b)({app:R,country:H}),K=a(32),M=Object(E.c)(F,Object(E.a)(K.a)),P=Object(m.jsx)(l.a,{store:M,children:Object(m.jsx)(G,{})});s.a.render(P,document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b6001896.chunk.js.map