(function(t){function e(e){for(var i,c,r=e[0],l=e[1],o=e[2],d=0,h=[];d<r.length;d++)c=r[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&h.push(s[c][0]),s[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);v&&v(e);while(h.length)h.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},n=[];function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var v=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01ed":function(t,e,a){},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"15dc":function(t,e,a){"use strict";var i=a("781e"),s=a.n(i);s.a},"163d":function(t,e,a){t.exports=a.p+"img/image11.7bfa9e4c.jpeg"},"1b6b":function(t,e,a){},2933:function(t,e,a){"use strict";var i=a("daf5"),s=a.n(i);s.a},"2a5d":function(t,e,a){t.exports=a.p+"img/image5.6c2199f1.jpeg"},"2bef":function(t,e,a){},"2c42":function(t,e,a){"use strict";var i=a("370a"),s=a.n(i);s.a},"2ee3":function(t,e,a){},"334e":function(t,e,a){t.exports=a.p+"img/image1.134bac71.jpeg"},3361:function(t,e,a){"use strict";var i=a("2bef"),s=a.n(i);s.a},"370a":function(t,e,a){},4913:function(t,e,a){t.exports=a.p+"img/image15.1b4eca49.jpeg"},"50e8":function(t,e,a){t.exports=a.p+"img/image6.0b6ffc59.jpeg"},"52f4":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],c=(a("4160"),a("159b"),{name:"App",mounted:function(){this.preventImageSelect(),this.preventContextMenu()},data:function(){return{}},methods:{preventImageSelect:function(){var t=document.querySelectorAll("img");t.forEach((function(t){t.addEventListener("contextmenu",(function(t){t.preventDefault()}))}))},preventContextMenu:function(){window.addEventListener("contextmenu",(function(t){t.preventDefault()}))}}}),r=c,l=(a("034f"),a("2877")),o=Object(l["a"])(r,s,n,!1,null,null,null),v=o.exports,d=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("main-header"),a("main-view")],1)},_=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainheader"},[a("top-header"),a("tab-header")],1)},g=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader"},[a("div",{staticClass:"topheader__container"},[t._m(0),a("div",{staticClass:"topheader__widgets"},[a("div",{staticClass:"topheader__widgets--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])]),a("div",{staticClass:"topheader__widgets--iconview listview_open"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}})]),a("div",{staticClass:"topheader__listitems"},[t._m(1),t._m(2),t._m(3),t._m(4),a("div",{staticClass:"topheader__tabview",on:{click:t.change_view}},[a("h3",{staticClass:"topheader__tabview--title"},[t._v("Settings")])])])])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader__titlebox"},[a("h3",{staticClass:"topheader__titlebox--text"},[t._v("WhatsApp")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader__tabview"},[a("h3",{staticClass:"topheader__tabview--title"},[t._v("New group")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader__tabview"},[a("h3",{staticClass:"topheader__tabview--title"},[t._v("New broadcast")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader__tabview"},[a("h3",{staticClass:"topheader__tabview--title"},[t._v("WhatsApp Web")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topheader__tabview"},[a("h3",{staticClass:"topheader__tabview--title"},[t._v("Starred messages")])])}],p={name:"Topheader",data:function(){return{}},methods:{change_view:function(){this.$router.push("/settings")}}},f=p,C=(a("69cd"),Object(l["a"])(f,m,w,!1,null,null,null)),x=C.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabheader"},[a("div",{staticClass:"tabheader__container"},[a("div",{staticClass:"tabheader__tabview",class:{selected_tab:"ChatContainer"==t.selectedview},on:{click:function(e){return t.selectTab("ChatContainer")}}},[a("h3",{staticClass:"tabheader__tabview--text"},[t._v("Chats")])]),a("div",{staticClass:"tabheader__tabview",class:{selected_tab:"StatusContainer"==t.selectedview},on:{click:function(e){return t.selectTab("StatusContainer")}}},[a("h3",{staticClass:"tabheader__tabview--text"},[t._v("Status")])]),a("div",{staticClass:"tabheader__tabview",class:{selected_tab:"CallsContainer"==t.selectedview},on:{click:function(e){return t.selectTab("CallsContainer")}}},[a("h3",{staticClass:"tabheader__tabview--text"},[t._v("Calls")])])])])},M=[],z=new i["a"],j=z,y={name:"Tabheader",data:function(){return{selectedview:"ChatContainer"}},mounted:function(){j.$on("selectedtab",this.selected_tab)},methods:{selectTab:function(t){if(!t)return"";j.$emit("selectedtab",t)},selected_tab:function(t){if(!t)return"";this.selectedview=t}}},H=y,k=(a("f02e"),Object(l["a"])(H,b,M,!1,null,null,null)),S=k.exports,$={name:"MainHeader",components:{TopHeader:x,TabHeader:S},data:function(){return{}}},A=$,P=(a("9057"),Object(l["a"])(A,u,g,!1,null,null,null)),B=P.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mainview"},[a("keep-alive",[a(t.selected_view,{tag:"component"})],1)],1)},L=[],O=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chatsview"},[i("div",{staticClass:"chatsview__container"},[t._l(t.profileData,(function(e){return i("div",{key:e.id,staticClass:"chatcard",on:{click:t.openChats}},[i("div",{staticClass:"chatcard__imageview"},[i("img",{staticClass:"chatcard__imageview--image",attrs:{src:a("714b")("./"+e.img),alt:e.name}})]),i("div",{staticClass:"chatsview__textview"},[i("div",{staticClass:"chatsview__viewbox"},[i("h3",{staticClass:"chatsview__viewbox--title"},[t._v(t._s(e.name))]),i("p",{staticClass:"chatsview__viewbox--smtext",class:{"text-green":e.unread}},[t._v(t._s(e.time))])]),i("div",{staticClass:"chatsview__widget"},[i("p",{staticClass:"chatsview__widget--text",class:{"text-unread":e.unread}},[t._v(t._s(e.text))]),e.counter?i("p",{staticClass:"chatsview__widget--counter"},[t._v(t._s(e.counter))]):t._e()])])])})),i("div",{staticClass:"chatsview__chatwidget",on:{click:t.openContacts}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}})])])],2)])},V=[],W={name:"ChatContainer",data:function(){return{profileData:[{id:1,img:"image1.jpeg",name:"Natasha Whitman",time:"13:05 PM",text:"😉😉 I think it's lunch time",counter:3,unread:!0},{id:2,img:"image2.jpeg",name:"Jaykob Wiseman",time:"12:45 PM",text:"So we sent the [Package]",counter:2,unread:!0},{id:3,img:"image3.jpeg",name:"Andrew Kitkat",time:"12:30 PM",text:"Meeting in the afternoon?",counter:1,unread:!0},{id:4,img:"image4.jpeg",name:"Sarah webber",time:"12:05 PM",text:"Am just bored!",counter:null,unread:!1},{id:5,img:"image5.jpeg",name:"Sheila Bushido",time:"11:45 AM",text:"You: I think the code worked today!",counter:null,unread:!1},{id:6,img:"image6.jpeg",name:"{ The Code Gang Group }",time:"11:30 AM",text:"Fred: Code meetup today @1500hrs",counter:5,unread:!0},{id:7,img:"image7.jpeg",name:"Friends of Idiots Group",time:"11:28 AM",text:"You: I guess y'all idiots",counter:null,unread:!1},{id:8,img:"image9.jpeg",name:"Jane Pearson",time:"10:05 AM",text:"😚😚😚 Dinner in the evening?",counter:1,unread:!0},{id:9,img:"image8.jpeg",name:"Andrew Boozeman",time:"Yesterday",text:"You: $$Yo! Friday's coming up!",counter:null,unread:!1},{id:10,img:"image10.jpeg",name:"Monica Monaco",time:"Yesterday",text:"Am moving to Adelide next month",counter:null,unread:!1},{id:11,img:"image11.jpeg",name:"Alex Android",time:"Yesterday",text:"You: It's not working!",counter:null,unread:!1},{id:12,img:"image12.jpeg",name:"Natasha Worker",time:"Yesterday",text:"We have it installed.",counter:null,unread:!1},{id:13,img:"image13.jpeg",name:"Monica Monaco",time:"Yesterday",text:"Am moving to Adelide next month",counter:null,unread:!1},{id:14,img:"image14.jpeg",name:"[ The Drivers Group ]",time:"Yesterday",text:"Sheila: Guys, I just bought a car",counter:null,unread:!1},{id:15,img:"image15.jpeg",name:"Fawaz Anwar",time:"6/5/20",text:"We are working overtime",counter:null,unread:!1}]}},methods:{openChats:function(){this.$router.push("/chats")},openContacts:function(){this.$router.push("/contacts")}}},I=W,D=(a("ec95"),Object(l["a"])(I,O,V,!1,null,null,null)),T=D.exports,Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"statusview"},[i("div",{staticClass:"statusview__container"},[t._m(0),i("div",{staticClass:"statusview__groupview"},[i("h3",{staticClass:"statusview__groupview--title"},[t._v("Recent updates")]),i("div",{staticClass:"statusview__listview"},t._l(t.RecentData,(function(e){return i("div",{key:e.id,staticClass:"statuscard"},[i("div",{staticClass:"statuscard__imageview"},[i("img",{staticClass:"statuscard__imageview--image",attrs:{draggable:"false",src:a("714b")("./"+e.img),alt:e.name}})]),i("div",{staticClass:"statuscard__textview"},[i("h3",{staticClass:"statuscard__textview--title"},[t._v(t._s(e.name))]),i("p",{staticClass:"statuscard__textview--smtext"},[t._v("Yesterday: 20:41")])])])})),0)]),i("div",{staticClass:"statusview__groupview"},[i("h3",{staticClass:"statusview__groupview--title"},[t._v("Viewed updates")]),i("div",{staticClass:"statusview__listview"},t._l(t.ViewedData,(function(e){return i("div",{key:e.id,staticClass:"statuscard"},[i("div",{staticClass:"statuscard__imageview"},[i("img",{staticClass:"statuscard__imageview--image",attrs:{draggable:"false",src:a("714b")("./"+e.img),alt:e.name}})]),i("div",{staticClass:"statuscard__textview"},[i("h3",{staticClass:"statuscard__textview--title"},[t._v(t._s(e.name))]),i("p",{staticClass:"statuscard__textview--smtext"},[t._v("Yesterday: 20:41")])])])})),0)]),i("div",{staticClass:"statusview__iconwidget bg-grey"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}})])]),i("div",{staticClass:"statusview__iconwidget bg-green"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("circle",{attrs:{cx:"12",cy:"12",r:"3.2"}}),i("path",{attrs:{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}})])])])])},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"statuscard"},[i("div",{staticClass:"statuscard__imageview"},[i("img",{staticClass:"statuscard__imageview--image",attrs:{draggable:"false",src:a("61a0"),alt:"status"}})]),i("div",{staticClass:"statuscard__textview"},[i("h3",{staticClass:"statuscard__textview--title"},[t._v("My Status")]),i("p",{staticClass:"statuscard__textview--smtext"},[t._v("Yesterday: 20:41")])])])}],N={name:"Statusview",data:function(){return{RecentData:[{id:1,img:"image1.jpeg",name:"Alice Whitman",time:"13:00 PM",text:"😉😉 I think it's lunch time",counter:3,unread:!0},{id:2,img:"image6.jpeg",name:"Jaykob Watenga",time:"12:45 PM",text:"So we sent the [Package]",counter:2,unread:!0},{id:3,img:"image3.jpeg",name:"Andrew Wiseman",time:"12:30 PM",text:"You: Meeting in the afternoon?",counter:1,unread:!0},{id:4,img:"image4.jpeg",name:"Sarah webber",time:"12:05 PM",text:"Am just bored!",counter:null,unread:!1}],ViewedData:[{id:1,img:"image10.jpeg",name:"Alice Whitman",time:"13:00 PM",text:"😉😉 I think it's lunch time",counter:3,unread:!0},{id:2,img:"image9.jpeg",name:"Jaykob Watenga",time:"12:45 PM",text:"So we sent the [Package]",counter:2,unread:!0},{id:3,img:"image7.jpeg",name:"Andrew Wiseman",time:"12:30 PM",text:"You: Meeting in the afternoon?",counter:1,unread:!0}]}}},F=N,G=(a("2933"),Object(l["a"])(F,Y,J,!1,null,null,null)),R=G.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"callsview"},[i("div",{staticClass:"callsview__container"},[t._l(t.callData,(function(e){return i("div",{key:e.id,staticClass:"callscard"},[i("div",{staticClass:"callscard__imageview"},[i("img",{staticClass:"callscard__imageview--image",attrs:{src:a("714b")("./"+e.img),alt:e.name}})]),i("div",{staticClass:"callscard__textview"},[i("div",{staticClass:"callscard__infobox"},[i("h3",{staticClass:"callscard__infobox--title"},[t._v(t._s(e.name))]),i("div",{staticClass:"callscard__widget"},[i("div",{staticClass:"callscard__widget--iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"}})])]),i("p",{staticClass:"callscard__widget--textselect"},[t._v(t._s(e.time))])])]),i("div",{staticClass:"callscard__iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}})])])])])})),i("div",{staticClass:"callsview__iconwidget bg-green"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM21 6h-3V3h-2v3h-3v2h3v3h2V8h3z"}})])])],2)])},Q=[],U={name:"CallsContainer",data:function(){return{callData:[{id:1,img:"image1.jpeg",name:"Alice Whitman",time:"April 3, 01:38",text:"😉😉 I think it's lunch time",counter:3,unread:!0},{id:2,img:"image3.jpeg",name:"Sheila Bushido",time:"April 12, 11:38",text:"So we sent the [Package]",counter:2,unread:!0},{id:3,img:"image8.jpeg",name:"Jaykob Zhukov",time:"April 15, 22:00",text:"So we sent the [Package]",counter:2,unread:!0},{id:4,img:"image10.jpeg",name:"Andrew Wiseman",time:"June 3, 01:38",text:"So we sent the [Package]",counter:2,unread:!0}]}}},q=U,Z=(a("5d2b"),Object(l["a"])(q,K,Q,!1,null,null,null)),X=Z.exports,tt={name:"MainContainer",components:{ChatContainer:T,StatusContainer:R,CallsContainer:X},mounted:function(){j.$on("selectedtab",this.selectView)},beforeDestroy:function(){j.$off("selectedtab",this.selectView)},methods:{selectView:function(t){this.selected_view=t}},data:function(){return{selected_view:"ChatContainer"}}},et=tt,at=(a("923a"),Object(l["a"])(et,E,L,!1,null,null,null)),it=at.exports,st={name:"HelloWorld",components:{MainHeader:B,MainView:it},data:function(){return{}}},nt=st,ct=Object(l["a"])(nt,h,_,!1,null,null,null),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatview"},[a("div",{staticClass:"chatview__imagebox"}),a("div",{staticClass:"chatview__container"},[a("ChatHeader"),a("ChatArea"),a("ChatInput")],1)])},ot=[],vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatheader"},[a("div",{staticClass:"chatheader__iconback",on:{click:t.backhome}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}})])]),t._m(0),t._m(1),a("div",{staticClass:"chatheader__iconview"},[a("div",{staticClass:"chatheader__iconview--icon",attrs:{title:"Start video"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"}})])]),a("div",{staticClass:"chatheader__iconview--icon",attrs:{title:"Start call"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}})])]),a("div",{staticClass:"chatheader__iconview--icon",attrs:{title:"List view"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}})])])])])},dt=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"chatheader__imageview"},[i("img",{staticClass:"chatheader__imageview--image",attrs:{draggable:"false",src:a("650f"),alt:"user"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatheader__textview"},[a("h3",{staticClass:"chatheader__textview--title"},[t._v("Sarah webber")]),a("p",{staticClass:"chatheader__textview--smtext"},[t._v("Last seen today at 21:03")])])}],ht={name:"ChatHeader",methods:{backhome:function(){this.$router.push("/")}}},_t=ht,ut=(a("edc4"),Object(l["a"])(_t,vt,dt,!1,null,null,null)),gt=ut.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatarea"},[a("div",{staticClass:"chatarea__container"},t._l(t.chatlistdata,(function(e){return a("div",{key:e.id,staticClass:"chatarea__widget align-flex-start",class:{"align-flex-end":e.is_sender}},[a("div",{staticClass:"chatarea__chatitem chat-item-white",class:{"chat-item-green":e.is_sender}},[a("div",{staticClass:"chatarea__chatitem--icontail",class:{"tail-right":e.is_sender,"tail-left":!e.is_sender}},[e.is_sender?e.is_sender?a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 13",width:"8",height:"13"}},[a("path",{attrs:{opacity:".13",d:"M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"}}),a("path",{attrs:{fill:"currentColor",d:"M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"}})]):t._e():a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 13",width:"8",height:"13"}},[a("path",{attrs:{opacity:".13",fill:"#0000000",d:"M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"}}),a("path",{attrs:{fill:"currentColor",d:"M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]),a("div",{staticClass:"chatarea__textview"},[a("p",{staticClass:"chatarea__chatitem--text"},[t._v(t._s(e.text))]),e.is_sender?a("div",{staticClass:"chatarea__flextab"},[a("p",{staticClass:"chatarea__chatitem--smtext"},[t._v("20:32")]),a("div",{staticClass:"chatarea__flextab--icon"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 15",width:"16",height:"15"}},[a("path",{attrs:{fill:"currentColor",d:"M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"}})])])]):a("p",{staticClass:"chatarea__chatitem--smtext"},[t._v(t._s(e.time))])])])])})),0)])},wt=[],pt={name:"ChatArea",computed:{chatlistdata:function(){return this.$store.state.chatData}}},ft=pt,Ct=(a("de5b"),Object(l["a"])(ft,mt,wt,!1,null,null,null)),xt=Ct.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chatinput"},[a("div",{staticClass:"chatinput__container"},[a("div",{staticClass:"chatinput__flexview"},[a("div",{staticClass:"chatinput__iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[a("path",{attrs:{fill:"currentColor",d:"M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"}})])]),a("input",{staticClass:"chatinput__inputview",attrs:{type:"text",placeholder:"Type a message"}}),a("div",{staticClass:"chatinput__iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"}},[a("path",{attrs:{fill:"currentColor",d:"M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"}})])]),a("div",{staticClass:"chatinput__iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("circle",{attrs:{cx:"12",cy:"12",r:"3.2"}}),a("path",{attrs:{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"}})])])]),a("div",{staticClass:"chatinput__iconselect"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"}})])])])])},Mt=[],zt={name:"ChatInput"},jt=zt,yt=(a("e64e"),Object(l["a"])(jt,bt,Mt,!1,null,null,null)),Ht=yt.exports,kt={name:"Chatview",components:{ChatHeader:gt,ChatArea:xt,ChatInput:Ht}},St=kt,$t=(a("2c42"),Object(l["a"])(St,lt,ot,!1,null,null,null)),At=$t.exports,Pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contactview"},[i("div",{staticClass:"contactview__container"},[i("div",{staticClass:"contactview__navtab"},[i("div",{staticClass:"contactview__navbar"},[i("div",{staticClass:"contactview__navbar--iconview",on:{click:t.back_home}},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}})])]),i("div",{staticClass:"contactview__textview"},[i("h3",{staticClass:"contactview__textview--title"},[t._v("Select contact")]),i("p",{staticClass:"contactview__textview--smtext"},[t._v(t._s(t.get_list_length())+" contacts")])])]),i("div",{staticClass:"contactview__widgets"},[i("div",{staticClass:"contactview__widgets--iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}})])]),i("div",{staticClass:"contactview__widgets--iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}})])])])]),i("div",{staticClass:"contactview__listview"},[i("div",{staticClass:"contactview__groupview"},[i("div",{staticClass:"contactview__card"},[i("div",{staticClass:"contactview__card--iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}})])]),i("div",{staticClass:"contactview__card--textview"},[t._v("New group")])]),i("div",{staticClass:"contactview__card"},[i("div",{staticClass:"contactview__card--iconview"},[i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[i("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),i("path",{attrs:{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}})])]),i("div",{staticClass:"contactview__card--textview"},[t._v("New contact")])])]),t._l(t.contactList,(function(e){return i("div",{key:e.id,staticClass:"contactview__cardlist"},[i("div",{staticClass:"contactview__cardselect"},[i("img",{staticClass:"contactview__cardselect--image",attrs:{src:a("714b")("./"+e.img),alt:e.name}})]),i("div",{staticClass:"contactview__textselect"},[i("h3",{staticClass:"contactview__textselect--title"},[t._v(t._s(e.name))]),i("p",{staticClass:"contactview__textselect--text"},[t._v(t._s(e.text))])])])}))],2)])])},Bt=[],Et={name:"Contactview",data:function(){return{contactList:[{id:1,img:"image1.jpeg",name:"Natasha Whitman",time:"13:05 PM",text:"This is just a console message i logged @miko"},{id:2,img:"image2.jpeg",name:"Jaykob Wiseman",time:"13:05 PM",text:"Just coding!"},{id:3,img:"image3.jpeg",name:"Andrew Kitkat",time:"13:05 PM",text:"Just another kitkat!"},{id:4,img:"image4.jpeg",name:"Sarah Webber",time:"13:05 PM",text:""},{id:5,img:"image1.jpeg",name:"Sheila Bushido",time:"13:05 PM",text:"<Sheila />"},{id:6,img:"image6.jpeg",name:"James Pearson",time:"13:05 PM",text:"😎😎 Real Apollo Mission!"},{id:7,img:"image7.jpeg",name:"Andrew Boozeman",time:"13:05 PM",text:"Just my personal thinking capabilities"},{id:8,img:"image8.jpeg",name:"Monica Monaco",time:"13:05 PM",text:"Hi there, Am using Whats my app!"},{id:9,img:"image12.jpeg",name:"Alex Android",time:"13:05 PM",text:"😎😎😎😎😎"},{id:10,img:"image10.jpeg",name:"Fawaz Anwar",time:"13:05 PM",text:"✌️✌️✌️✌️✌️✌️"}]}},methods:{back_home:function(){this.$router.push("/")},get_list_length:function(){var t=this.contactList.length;return t}}},Lt=Et,Ot=(a("3361"),Object(l["a"])(Lt,Pt,Bt,!1,null,null,null)),Vt=Ot.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview"},[a("div",{staticClass:"settingsview__container"},[a("div",{staticClass:"settingsview__navbar"},[a("div",{staticClass:"settingsview__navbar--iconview",on:{click:t.back_home}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}})])]),a("h3",{staticClass:"settingsview__navbar--title"},[t._v("Settings")])]),t._m(0),a("div",{staticClass:"settingsview__listview"},[a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}})])]),t._m(1)]),a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}})])]),t._m(2)]),a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}})])]),t._m(3)]),a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}})])]),t._m(4)]),a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}})])]),t._m(5)])]),a("div",{staticClass:"settingsview__tabview"},[a("div",{staticClass:"settingsview__tabview--iconview"},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"}},[a("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),a("path",{attrs:{d:"M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"}})])]),t._m(6)])])])},It=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"settingsview__widgetview"},[i("div",{staticClass:"settingsview__imagebox"},[i("img",{staticClass:"settingsview__imagebox--image",attrs:{src:a("650f"),alt:"sudo"}})]),i("div",{staticClass:"settingsview__textview"},[i("h3",{staticClass:"settingsview__textview--title"},[t._v("Jaykob's byte")]),i("p",{staticClass:"settingsview__textview--smtext"},[t._v("Just another $programmer$ on steroids 😎😎")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Account")]),a("p",{staticClass:"settingsview__textlayout--smtext"},[t._v("Privacy, security, change number")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Chats")]),a("p",{staticClass:"settingsview__textlayout--smtext"},[t._v("Theme, wallpapers, chat history")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Notifications")]),a("p",{staticClass:"settingsview__textlayout--smtext"},[t._v("Message, group & call tones")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Data and storage usage")]),a("p",{staticClass:"settingsview__textlayout--smtext"},[t._v("Network usage, auto-download")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Help")]),a("p",{staticClass:"settingsview__textlayout--smtext"},[t._v("FAQ, contact us, privacy policy")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settingsview__textlayout"},[a("h3",{staticClass:"settingsview__textlayout--title"},[t._v("Invite a friend")])])}],Dt={name:"Settingsview",data:function(){return{}},methods:{back_home:function(){this.$router.push("/")}}},Tt=Dt,Yt=(a("15dc"),Object(l["a"])(Tt,Wt,It,!1,null,null,null)),Jt=Yt.exports;i["a"].use(d["a"]);var Nt=[{path:"/",name:"HelloWorld",component:rt},{path:"/chats",name:"Chats",component:At},{path:"/contacts",name:"Contacts",component:Vt},{path:"/settings",name:"Settings",component:Jt}],Ft=new d["a"]({routes:Nt}),Gt=Ft,Rt=a("2f62"),Kt={chatData:[{id:"1",is_read:!0,is_sender:!1,time:"20:30",text:"Hi jake, how is your day going?"},{id:"2",is_read:!0,is_sender:!0,time:"20:32",text:"Quite busy. I'm preparing for my presentation tomorrow on our marketing strategy. I'm not even half done yet."},{id:"3",is_read:!0,is_sender:!1,time:"20:35",text:"You must feel stressed out now."},{id:"4",is_read:!0,is_sender:!0,time:"20:30",text:"That's an understatement."},{id:"5",is_read:!0,is_sender:!0,time:"20:30",text:"What are you doing now?"},{id:"6",is_read:!0,is_sender:!1,time:"20:30",text:"I'm playing pool with my friends at a pool hall."},{id:"7",is_read:!0,is_sender:!0,time:"20:30",text:"I didn't know you play pool. Are you having fun?"},{id:"8",is_read:!0,is_sender:!1,time:"20:30",text:"I'm having a great time."},{id:9,is_read:!0,is_sender:!1,time:"20:30",text:"I'm glad I'm not in your shoes."},{id:10,is_read:!0,is_sender:!0,time:"20:30",text:"Okay, have a good day."},{id:11,is_read:!1,is_sender:!1,time:"20:30",text:"Cool! nice time..."}]};i["a"].use(Rt["a"]);var Qt=new Rt["a"].Store({state:Kt});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(v)},router:Gt,store:Qt}).$mount("#app")},"5d2b":function(t,e,a){"use strict";var i=a("bc9a"),s=a.n(i);s.a},"60d3":function(t,e,a){t.exports=a.p+"img/image14.33a449e4.jpeg"},"61a0":function(t,e,a){t.exports=a.p+"img/image2.85277850.jpeg"},"650f":function(t,e,a){t.exports=a.p+"img/image4.04e38616.jpeg"},"69cd":function(t,e,a){"use strict";var i=a("52f4"),s=a.n(i);s.a},"714b":function(t,e,a){var i={"./chatbg.png":"78b4","./image1.jpeg":"334e","./image10.jpeg":"a7e0","./image11.jpeg":"163d","./image12.jpeg":"bf5a","./image13.jpeg":"d66c","./image14.jpeg":"60d3","./image15.jpeg":"4913","./image2.jpeg":"61a0","./image3.jpeg":"cebe","./image4.jpeg":"650f","./image5.jpeg":"2a5d","./image6.jpeg":"50e8","./image7.jpeg":"e257","./image8.jpeg":"e297","./image9.jpeg":"e2c5"};function s(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id="714b"},"781e":function(t,e,a){},"78b4":function(t,e,a){t.exports=a.p+"img/chatbg.9e8a2898.png"},"7af8":function(t,e,a){},"807f":function(t,e,a){},"85ec":function(t,e,a){},9057:function(t,e,a){"use strict";var i=a("807f"),s=a.n(i);s.a},"923a":function(t,e,a){"use strict";var i=a("1b6b"),s=a.n(i);s.a},a789:function(t,e,a){},a7e0:function(t,e,a){t.exports=a.p+"img/image10.0661430e.jpeg"},bc9a:function(t,e,a){},bf5a:function(t,e,a){t.exports=a.p+"img/image12.a542c5f9.jpeg"},c33c:function(t,e,a){},cebe:function(t,e,a){t.exports=a.p+"img/image3.f133e78f.jpeg"},d66c:function(t,e,a){t.exports=a.p+"img/image13.c50796a7.jpeg"},daf5:function(t,e,a){},de5b:function(t,e,a){"use strict";var i=a("01ed"),s=a.n(i);s.a},e257:function(t,e,a){t.exports=a.p+"img/image7.b49b3800.jpeg"},e297:function(t,e,a){t.exports=a.p+"img/image8.9f6cc35e.jpeg"},e2c5:function(t,e,a){t.exports=a.p+"img/image9.7bd70773.jpeg"},e64e:function(t,e,a){"use strict";var i=a("c33c"),s=a.n(i);s.a},ec95:function(t,e,a){"use strict";var i=a("a789"),s=a.n(i);s.a},edc4:function(t,e,a){"use strict";var i=a("2ee3"),s=a.n(i);s.a},f02e:function(t,e,a){"use strict";var i=a("7af8"),s=a.n(i);s.a}});
//# sourceMappingURL=app.d8a3bb46.js.map