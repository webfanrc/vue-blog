(function(e){function t(t){for(var a,s,r=t[0],u=t[1],c=t[2],d=0,p=[];d<r.length;d++)s=r[d],i[s]&&p.push(i[s][0]),i[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var u=n[r];0!==i[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"header_nav"}},[e._m(0),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Blog")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/experience"}},[e._v("Experience")])],1)]),n("div",{attrs:{id:"main_content"}},[n("router-view")],1)]),e._m(1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header"}},[a("div",{staticClass:"imgContainer"},[a("img",{attrs:{src:n("d0a8")}})]),a("div",{staticClass:"description"},[a("p",{staticClass:"h1"},[e._v("Xie Ruochen")]),a("p",{staticClass:"h2"},[e._v("Aiming for Modern Web Development")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer_nav"}},[n("footer",{attrs:{id:"footer"}},[n("a",{attrs:{href:"https://github.com/ruochen95"}},[n("i",{staticClass:"svg-icon github"})]),n("a",{attrs:{href:"https://www.linkedin.com/in/xieruochen"}},[n("i",{staticClass:"svg-icon linkedin"})]),n("a",{attrs:{href:"https://www.jianshu.com/u/4aff4c1f4f55"}},[n("i",{staticClass:"svg-icon jianshu"})])])])}],s=(n("7c55"),n("2877")),r={},u=Object(s["a"])(r,i,o,!1,null,null,null),c=u.exports,l=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog"},[e.fin?n("div",{directives:[{name:"show",rawName:"v-show",value:e.showInfo,expression:"showInfo"}],staticClass:"infoDiv"},[n("div",[n("p",[e._v("yourIP: "+e._s(e.blogInfo.yourIP))])]),n("a",{on:{click:function(t){e.routerToMoreInfo()}}},[e._v("Statics")])]):e._e(),e._l(e.blogInfo.blogList,function(t,a){return e.fin?n("div",{key:a,staticClass:"blogTag"},[n("p",{staticClass:"h1",on:{click:function(n){e.routerToBlogPage(t.title)}}},[e._v(e._s(t.title))]),n("p",{staticClass:"h2",domProps:{innerHTML:e._s(t.blog_brief)}}),n("p",{staticClass:"readMore",on:{click:function(n){e.routerToBlogPage(t.title)}}},[e._v("Read More")])]):e._e()}),e.fin?e._e():n("div",[e._v("\n    Loading...\n  ")])],2)},p=[],h=(n("28a5"),n("ac6a"),n("f3e2"),n("96cf"),n("3b8d")),f=n("bc3a"),m=n.n(f),_={name:"blog",data:function(){return{blogInfo:{},fin:!1,showInfo:!0}},mounted:function(){this.init()},methods:{init:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/blog/");case 2:t=e.sent,this.blogInfo=t.data,this.blogInfo.blogList.forEach(function(e){e.blog_brief=e.content.split("</p>")[0]}),this.ipAddress("main page"),this.fin=!0;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),routerToBlogPage:function(e){this.ipAddress(e),this.$router.push({path:"blogDetail",query:{title:e}})},routerToMoreInfo:function(){this.$router.push({path:"blogInfo"})},ipAddress:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this,e.next=3,m.a.get("/blog/ipAddress",{params:{user_ip:n.blogInfo.yourIP,view_title:t}});case 3:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}},v=_,g=(n("a58f"),Object(s["a"])(v,d,p,!1,null,null,null)),b=g.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("About")]),n("p",[e._v("\n    Had been a front-end web developer for about two years in Bitmain, I am now having great passion of learning border aspects and want to become more influential. In the future, I want to build my own web application the same as notion or transfix, using the most advanced technology and make people work more effectively.\n  ")]),n("h2",[e._v("\n    Timeline (in 2019)\n  ")]),e._m(0),n("h2",[e._v("\n    Contact me\n  ")]),n("p",{staticClass:"username"},[e._v("Your name: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],domProps:{value:e.user_name},on:{input:function(t){t.target.composing||(e.user_name=t.target.value)}}}),n("p",{staticClass:"useremail"},[e._v("Your email: ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_email,expression:"user_email"}],domProps:{value:e.user_email},on:{input:function(t){t.target.composing||(e.user_email=t.target.value)}}}),n("p",{staticClass:"usermessage"},[e._v("Your message:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user_message,expression:"user_message"}],staticClass:"user_message",domProps:{value:e.user_message},on:{input:function(t){t.target.composing||(e.user_message=t.target.value)}}}),n("button",{directives:[{name:"show",rawName:"v-show",value:e.show_send_button,expression:"show_send_button"}],staticClass:"send_info",on:{click:e.submit}},[e._v("Send")]),n("p",[e._v(e._s(e.clients_message))])])},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("\n      2019.2 - 2019.5: TOFEL (85 -> 90 -> 95);\n    ")]),n("li",[e._v("\n      2019.6 - 2019.9: PAT (preparing);\n    ")])])}],y={data:function(){return{user_name:"",user_email:"",user_message:"",clients_message:"",show_send_button:!0}},methods:{submit:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.clients_message="Sending...",t=this,e.next=4,m.a.get("/blog/sendMessage",{params:{user_name:t.user_name,user_email:t.user_email,user_message:t.user_message}});case 4:n=e.sent,200==n.status?this.clients_message="Send success.":this.clients_message="Something went wrong, please contact me though email: xrc_1995@163.com.";case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},x=y,k=(n("5795"),Object(s["a"])(x,w,A,!1,null,null,null)),C=k.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main_about"},[n("h2",[e._v("Demo")]),n("ul",e._l(e.demo_list,function(t,a){return n("li",{key:a},[n("span",{staticClass:"name"},[e._v(e._s(t.name))]),n("span",[e._v(":")]),n("span",{staticClass:"description"},[e._v(e._s(t.description))]),n("span",[e._v("(")]),"string"==typeof t.source_code?n("a",{staticClass:"source_code ",attrs:{href:t.source_code,target:"_blank"}},[e._v("\n        source code\n      ")]):e._e(),"object"==typeof t.source_code?n("span",{staticClass:"source_code "},e._l(t.source_code,function(a,i){return n("a",{key:i,attrs:{href:a,target:"_blank"}},[e._v("\n          source code "+e._s(i+1)),i<t.source_code.length-1?n("span",[e._v("; ")]):e._e()])}),0):e._e(),""!=t.online_link?n("a",{staticClass:"online_link",attrs:{href:t.online_link,target:"_blank"}},[e._v("\n        ; online link\n      ")]):e._e(),n("span",[e._v(")")])])}),0),n("h2",[e._v("Experience")]),e._m(0)])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("\n      Front-end web Development (In Bitmain.com, 4/2017 - 1/2019)\n    ")])])}],j={name:"blog",data:function(){return{demo_list:[{name:"个人博客",description:"简单的个人博客，前端用了Vue，后端用了Node.js，数据库为mysql，server为nginx，云服务器为Amazon Lightsail",source_code:["https://github.com/RuoChen95/vue-blog","https://github.com/RuoChen95/node-blog"],online_link:"http://xieruochen.info"},{name:"Restaurant List",description:"A crud website using Flask, sql, HTML templates ann OAuth.",source_code:"https://github.com/RuoChen95/simple-flask-web-server",online_link:""},{name:"Todo App",description:"A todo list app using Vue.js and Vue CLI 3.0.",source_code:"https://github.com/RuoChen95/vue-todo-app",online_link:"https://ruochen95.github.io/projects/todoApp"},{name:"Vue Components",description:"Vue.js components, including stepper and img lazyloader.",source_code:"https://github.com/RuoChen95/Learn-Vue-2/tree/master/btm-demo-pkg",online_link:"https://ruochen95.github.io/projects/vueComponents"}],demo_list_zh:[]}},methods:{routerToBlogPage:function(e){this.$router.push({path:"blogDetail",query:{title:e}})}}},E=j,T=Object(s["a"])(E,I,R,!1,null,null,null),S=T.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blogDetail"},[n("h1",[e._v(e._s(e.blogTitle))]),n("div",{domProps:{innerHTML:e._s(e.blog_content)}}),n("div",{staticClass:"date"},[n("p",[e._v(e._s(e.content_date))])])])},P=[],D={name:"blogDetail",data:function(){return{blogTitle:this.$route.query.title,blog_content:"",blog_date:"",content_date:""}},mounted:function(){this.init()},methods:{init:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/blog/detail?title=".concat(this.blogTitle));case 2:t=e.sent,this.blog_content=t.data[0].content,this.blog_date=t.data[0].create_date,this.formateDate(),this.catchIP();case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),formateDate:function(){var e=this.blog_date.split("T")[0].split("-");this.content_date=e[0]+"年"+e[1]+"月"+e[2]+"日"},catchIP:function(){}}},V=D,U=(n("6709"),Object(s["a"])(V,O,P,!1,null,null,null)),M=U.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.fin?n("div",{staticClass:"Statics"},[n("view-table",{attrs:{lineTableData:e.ipInfoFormat}}),0==e.showRawData?n("button",{on:{click:function(t){e.showRawData=!0}}},[e._v("Show raw data")]):e._e(),1==e.showRawData?n("button",{on:{click:function(t){e.showRawData=!1}}},[e._v("Hide raw data")]):e._e(),e.showRawData?n("table",[e._m(0),n("tbody",e._l(e.ipInfo,function(t,a){return n("tr",{key:a},[n("td",[e._v(e._s(t.user_ip))]),n("td",[e._v(e._s(t.view_date))]),n("td",[e._v(e._s(t.view_title))])])}),0)]):e._e()],1):e._e()},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("td",[e._v("user_ip")]),n("td",[e._v("view_date")]),n("td",[e._v("view_title")])])])}],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"viewTable",staticClass:"viewTable"},[n("div",{style:{width:e.defaultWidth,height:e.defaultHeight},attrs:{id:"myChart"}})])},N=[],Y=(n("ef97"),n("2f73"),{name:"ViewTable",data:function(){return{time:[],number:[],defaultWidth:"100%",defaultHeight:"400px",chartStyle:""}},props:["lineTableData"],mounted:function(){this.setData(),this.init()},methods:{setData:function(){var e=this;this.lineTableData.forEach(function(t){e.time.push(t.date),e.number.push(t.count)})},init:function(){var e=this.$echarts.init(document.getElementById("myChart")),t=this;e.setOption({title:{text:"每日访问量"},itemStyle:{width:t.defaultWidth},xAxis:{data:this.time,name:"",type:"category",boundaryGap:!1},yAxis:{type:"value"},series:[{name:"时间",type:"line",data:this.number,smooth:!0,areaStyle:{}}]})}}}),$=Y,q=(n("73f2"),Object(s["a"])($,L,N,!1,null,null,null)),J=q.exports,W={components:{ViewTable:J},data:function(){return{fin:!1,ipInfo:[],ipInfoFormat:[],showRawData:!1}},mounted:function(){this.init()},methods:{init:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/blog/getUserIP");case 2:return t=e.sent,this.ipInfo=t.data.ipList,e.next=6,m.a.get("/blog/getUserIPFormat");case 6:t=e.sent,this.ipInfoFormat=t.data.ipListFormat,console.log(this.ipInfo),console.log(this.ipInfoFormat),this.fin=!0;case 11:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},Z=W,H=Object(s["a"])(Z,B,F,!1,null,null,null),X=H.exports;a["a"].use(l["a"]);var G=new l["a"]({mode:"history",routes:[{path:"/",name:"Blog",component:b},{path:"/about",name:"about",component:C},{path:"/experience",name:"experience",component:S},{path:"/blogDetail",name:"blogDetail",component:M},{path:"/blogInfo",name:"blogInfo",component:X}]}),z=n("2f62");a["a"].use(z["a"]);var K=new z["a"].Store({state:{},mutations:{},actions:{}}),Q=n("313e"),ee=n.n(Q);a["a"].prototype.$echarts=ee.a,m.a.defaults.baseURL="",a["a"].config.productionTip=!1,new a["a"]({router:G,store:K,render:function(e){return e(c)}}).$mount("#app")},5795:function(e,t,n){"use strict";var a=n("6868"),i=n.n(a);i.a},6709:function(e,t,n){"use strict";var a=n("b60a"),i=n.n(a);i.a},6868:function(e,t,n){},"6cb8":function(e,t,n){},"73f2":function(e,t,n){"use strict";var a=n("6cb8"),i=n.n(a);i.a},"7c55":function(e,t,n){"use strict";var a=n("2395"),i=n.n(a);i.a},a58f:function(e,t,n){"use strict";var a=n("e2f0"),i=n.n(a);i.a},b60a:function(e,t,n){},d0a8:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABPCAIAAAAlVg/RAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAH+SURBVHhe7dpNjsIwDAVgjsnVeo2RuAOLrmFTaRZUQvxozjAVRaUqaWLHbvwKRkgsCBIffk7Shs32p/me5+Z7qJ3UtZ+bba+t1/YzJjNPsifZk7y+TZj3rfetad+e9te//nE4itoHP8kvqhwMrp1ShWBkbZgqASNrm+r3/uzX0EtGD0Nru6lRF4yuTYHv+5oxS6Npu1697d4W/EiFWXmG0g7TEhl8vVScvRCOdjIDE8BMKs5duOBiEwW354ztHUJtI+vqDDiLilDb2BbiscoGwBlV7T9iW9sktd9VqIENtUSqJthKy6I+wLm9Oo69idaGatK3ZtTyWktqYa0xtaTWnlpMC0Eto0WhFtACUZfWYlEX1cJRl9MiUhfSglKX0OJS1bXQVF0tOlVX22zrSxs5yZi8pXG9yr1lo319SwRbULVr29/IToKNqAraXRs6L4+A7ahy7fkw9weBINiUKtYeb8PUEzh9moCtqVJtF+PxIwYGoAq1zxinwRhUmXYU4wSYc+jIXUJZ4/PX20mMVwHO1gZijA/O1c7E+AWG6VWFk5HZGEMiB3Bebd8ud7CRMu2wbVgJUqSt6hNr3scZnJdkxh+ycKiy3QXMnoH+g3ptV1g0Ynm9tl5bYlTAh3mSPcngESV+PU+yJ5kYFfBhnmRPMnhEiV/Pk+xJJkYFfNg/D9g+Q3bZU5MAAAAASUVORK5CYII="},e2f0:function(e,t,n){}});
//# sourceMappingURL=app.7511a1ff.js.map