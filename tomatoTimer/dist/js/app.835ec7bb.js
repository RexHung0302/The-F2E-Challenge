(function(t){function e(e){for(var n,a,l=e[0],c=e[1],r=e[2],A=0,u=[];A<l.length;A++)a=l[A],i[a]&&u.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,r||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=s[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=n,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=o(t);return s(e)}function o(t){var e=n[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("14c6"),s("08c1"),s("4842"),s("d9fc");var n,i,o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},l=[],c=(s("5c0b"),s("2877")),r={},d=Object(c["a"])(r,a,l,!1,null,null,null),A=d.exports,u=s("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index row",attrs:{id:"indexPage"}},[n("transition",{attrs:{name:"slide",mode:"out-in",appear:""}},[t.isMenuShow?t._e():n("div",{staticClass:"index__leftPart col-8"},[n("div",{staticClass:"index__leftPartBox"},[n("div",{staticClass:"index__leftPartMissionInsideBox text-left"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTodo,expression:"newTodo",modifiers:{trim:!0}}],staticClass:"index__leftPartBox-input index__leftPartBox-input--active",attrs:{placeholder:"ADD A NEW MISSION"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoHandler(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("font-awesome-icon",{staticClass:"index__leftPartBox-plus index__leftPartBox-plus--active",attrs:{icon:["fa","plus"]},on:{click:t.addTodoHandler}})],1),t.nonDoneLists.length?n("div",{staticClass:"index__leftPartTitleBox"},[n("div",{staticClass:"index__leftPartTitleBox-leftPart"},[n("div",{staticClass:"index__leftPartTitleBox-leftPart-circleIcon",on:{click:function(e){t.nonDoneLists[0].isDone=0==t.nonDoneLists[0].isDone}}})]),n("div",{staticClass:"index__leftPartTitleBox-rightPart"},[t.nonDoneLists?n("div",{staticClass:"index__leftPartTitleBox-rightPart-title"},[n("span",[t._v(t._s(t.nonDoneLists[0].content))])]):t._e(),n("div",{staticClass:"index__leftPartTitleBox-rightPart-tomatoBox"},[n("img",{staticClass:"index__leftPartTitleBox-rightPart-tomatoImg",attrs:{src:s("abb4")}}),n("img",{staticClass:"index__leftPartTitleBox-rightPart-tomatoImg",attrs:{src:s("abb4")}}),n("img",{staticClass:"index__leftPartTitleBox-rightPart-tomatoImg",attrs:{src:s("abb4")}})])])]):t._e(),t.nonDoneLists.length?t._e():n("div",{staticClass:"index__leftPartTitleBox"},[n("span",{staticClass:"index__leftPartTitleBox-remindText font-weight-bold"},[t._v("You Need Add A Task.     ")])]),t.nonDoneLists.length?n("div",{staticClass:"index__leftPartTimeBox"},[n("div",{staticClass:"index__leftPartTime index__leftPartTime--active"},[t._v("25:00")])]):t._e(),n("div",{staticClass:"index__leftPartTodoListBox"},[t._l(t.nonDoneLists.slice(1,3),function(e){return n("div",{key:e.id,staticClass:"index__leftPartTodoList"},[e.isDone?t._e():n("div",{staticClass:"circleIcon d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}),e.isDone?n("div",{staticClass:"circleIcon circleIcon-done d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isDone?n("span",{staticClass:"index__leftPartTodoSpan index__leftPartTodoSpan--done"},[t._v(t._s(e.content))]):n("span",{staticClass:"index__leftPartTodoSpan"},[t._v(t._s(e.content))])]),n("font-awesome-icon",{staticClass:"index__leftPartPlayIcon",attrs:{icon:["fa","play-circle"]}})],1)}),t.nonDoneLists.length>3?n("div",{staticClass:"index__leftPartTodoMore"},[t.isMenuShow?t._e():n("span",{staticClass:"index__leftPartTodoMore-span",on:{click:function(e){return t.dropMenuHandler("todo")}}},[t._v("More")])]):t._e()],2)]),n("div",{staticClass:"index__TimeBox position-absolute"},[n("div",{staticClass:"timeBox position-relative"},[n("div",{staticClass:"timeBox__insideBox position-relative"},[n("div",{staticClass:"timeBox__buttonBox position-relative"},[n("div",{staticClass:"timeBox__buttonBox-button position-relative"},[n("div",{staticClass:"timeBox__buttonBox-endButton position-absolute"})])])])])])])]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isMenuShow?n("div",{staticClass:"index__leftMenuPart position-absolute col-9 h-100"},[n("div",{staticClass:"row no-gutters pl-4"},[n("div",{staticClass:"index__leftMenuPartBox col-6"},[n("ul",{staticClass:"index__leftMenuList text-left"},[n("li",{class:t.className.todo,on:{click:function(e){return t.selectMenuList("todo")}}},[n("font-awesome-icon",{staticClass:"pr-3",attrs:{icon:["fas","list-ul"]}}),n("span",[t._v("TO-DO LIST")])],1),n("li",{class:t.className.analytics,on:{click:function(e){return t.selectMenuList("analytics")}}},[n("font-awesome-icon",{staticClass:"pr-3",attrs:{icon:["fas","chart-bar"]}}),n("span",[t._v("ANALYTICS")])],1),n("li",{class:t.className.ringtones,on:{click:function(e){return t.selectMenuList("ringtones")}}},[n("font-awesome-icon",{staticClass:"pr-3",attrs:{icon:["fas","music"]}}),n("span",[t._v("RINGTONES")])],1)])]),n("transition",{attrs:{name:"menuItemFade",mode:"out-in"}},[t.isMenuTodoShow?n("div",{staticClass:"index__leftContentPartBox position-relative col-6"},[n("div",{staticClass:"index__leftContentPartMissionInsideBox text-left w-100"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newTodo,expression:"newTodo",modifiers:{trim:!0}}],staticClass:"index__leftContentPartBox-input index__leftContentPartBox-input--active",attrs:{placeholder:"ADD A NEW MISSION"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodoHandler(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("font-awesome-icon",{staticClass:"index__leftContentPartBox-plus index__leftContentPartBox-plus--active",attrs:{icon:["fa","plus"]},on:{click:t.addTodoHandler}}),n("div",{staticClass:"index__leftContentPartBox-todoListsBox position-relative"},[n("div",{staticClass:"position-relative index__leftContentPartBox-todoListsInsideBox"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"todoLists",expression:"'todoLists'"}],staticClass:"index__leftContentPartBox-todoListsItem text-left font-weight-bold",attrs:{block:""},on:{click:function(e){t.isTodoDropShow=0==t.isTodoDropShow}}},[t._v("TO-DO")]),n("transition",{attrs:{name:"todoDropTurnDown",mode:"out-in"}},[t.isTodoDropShow?n("font-awesome-icon",{staticClass:"index__leftContentPartBox-todoListsIcon position-absolute",attrs:{icon:["fas","caret-down"]}}):t._e()],1),n("transition",{attrs:{name:"todoDropTurnUp",mode:"out-in"}},[t.isTodoDropShow?t._e():n("font-awesome-icon",{staticClass:"index__leftContentPartBox-todoListsIcon position-absolute",attrs:{icon:["fas","caret-up"]}})],1),n("b-collapse",{staticClass:"index__leftContentPartBox-todoListsItemContent position-relative",attrs:{id:"todoLists",visible:""}},[n("div",{staticClass:"index__leftContentPartBox-todoLists position-relative"},t._l(t.nonDoneLists,function(e){return n("div",{key:e.id,staticClass:"index__leftContentPartTodoList"},[e.isDone?t._e():n("div",{staticClass:"index__leftContentPartCircleIcon d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}),e.isDone?n("div",{staticClass:"index__leftContentPartCircleIcon index__leftContentPartCircleIcon-done d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isDone?n("span",{staticClass:"index__leftContentPartTodoSpan index__leftContentPartTodoSpan--done"},[t._v(t._s(e.content))]):n("span",{staticClass:"index__leftContentPartTodoSpan"},[t._v(t._s(e.content))])]),n("font-awesome-icon",{staticClass:"index__leftContentPartPlayIcon",attrs:{icon:["fa","play-circle"]}})],1)}),0)])],1),n("div",{staticClass:"position-relative index__leftContentPartBox-todoListsInsideBox"},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"doneTodoLists",expression:"'doneTodoLists'"}],staticClass:"index__leftContentPartBox-todoListsItem text-left font-weight-bold mt-5",attrs:{block:""},on:{click:function(e){t.isDoneDropShow=0==t.isDoneDropShow}}},[t._v("DONE")]),n("transition",{attrs:{name:"doneTodoDropTurnDown",mode:"out-in"}},[t.isDoneDropShow?t._e():n("font-awesome-icon",{staticClass:"index__leftContentPartBox-todoListsIcon position-absolute",attrs:{icon:["fas","caret-down"]}})],1),n("transition",{attrs:{name:"doneTodoDropTurnUp",mode:"out-in"}},[t.isDoneDropShow?n("font-awesome-icon",{staticClass:"index__leftContentPartBox-todoListsIcon position-absolute",attrs:{icon:["fas","caret-up"]}}):t._e()],1),n("b-collapse",{staticClass:"index__leftContentPartBox-todoListsItemContent position-relative",attrs:{id:"doneTodoLists"}},[n("div",{staticClass:"index__leftContentPartBox-todoLists position-relative"},t._l(t.doneLists,function(e,s){return n("div",{key:s,staticClass:"index__leftContentPartTodoList"},[e.isDone?t._e():n("div",{staticClass:"index__leftContentPartCircleIcon d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}),e.isDone?n("div",{staticClass:"index__leftContentPartCircleIcon index__leftContentPartCircleIcon-done d-inline-block",on:{click:function(t){e.isDone=0==e.isDone}}}):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.isDone?n("span",{staticClass:"index__leftContentPartTodoSpan index__leftContentPartTodoSpan--done"},[t._v(t._s(e.content))]):n("span",{staticClass:"index__leftContentPartTodoSpan"},[t._v(t._s(e.content))])]),n("font-awesome-icon",{staticClass:"index__leftContentPartPlayIcon",attrs:{icon:["fa","play-circle"]}})],1)}),0)])],1)])],1)]):t._e()]),n("transition",{attrs:{name:"menuItemFade",mode:"out-in"}},[t.isMenuAnalyticsShow?n("div",{staticClass:"index__leftContentPartBox position-relative col-6"},[n("div",{staticClass:"index__analyticsBox position-relative w-100"},[n("div",{staticClass:"index__itemTitle font-weight-bold text-left"},[t._v("FOCUS TIME")]),n("div",{staticClass:"row no-gutters text-left pt-3 pb-5"},[n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-0"},[t._v("TODAY")]),n("span",{staticClass:"index__itemTomatoNum font-weight-bold"},[t._v("20")]),n("span",{staticClass:"index__itemTomatoText font-weight-bold pl-2"},[t._v("/ TOMATO")])]),n("div",{staticClass:"col-6"},[n("h5",{staticClass:"mb-0"},[t._v("WEEK")]),n("span",{staticClass:"index__itemTomatoNum font-weight-bold"},[t._v("108")]),n("span",{staticClass:"index__itemTomatoText font-weight-bold pl-2"},[t._v("/ TOMATO")])])]),n("div",{staticClass:"index__itemTitle font-weight-bold text-left"},[t._v("CHART"),n("div",{staticClass:"small"},[n("line-chart",{attrs:{chartData:t.chartApi}})],1)])])]):t._e()]),n("transition",{attrs:{name:"menuItemFade",mode:"out-in"}},[t.isMenuRingtonesShow?n("div",{staticClass:"index__leftContentPartBox position-relative col-6"},[n("div",{staticClass:"index__ringtonesBox position-relative w-100"},[n("div",{staticClass:"index__itemTitle font-weight-bold text-left pb-3"},[t._v("WORK")]),n("b-form-radio-group",{staticClass:"pt-4 pb-5",attrs:{options:t.workOptions,plain:"",name:"plain-inline"},model:{value:t.workSelected,callback:function(e){t.workSelected=e},expression:"workSelected"}}),n("div",{staticClass:"index__itemTitle font-weight-bold text-left pb-3"},[t._v("BREAK")]),n("b-form-radio-group",{staticClass:"pt-4",attrs:{options:t.breakOptions,plain:"",name:"breakSelect"},model:{value:t.breakSelected,callback:function(e){t.breakSelected=e},expression:"breakSelected"}})],1)]):t._e()])],1)]):t._e()]),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{staticClass:"index__rightPart col"},[n("div",{staticClass:"row w-100 h-100"},[n("div",{staticClass:"index__rightPartIconBox"},[t.isMenuShow?t._e():n("div",{staticClass:"index__rightPartIconBox-icon",on:{click:function(e){return t.dropMenuHandler("todo")}}},[n("font-awesome-icon",{attrs:{icon:["fas","list-ul"]}}),n("span",{staticClass:"mi mi-face"})],1),t.isMenuShow?t._e():n("div",{staticClass:"index__rightPartIconBox-icon",on:{click:function(e){return t.dropMenuHandler("analytics")}}},[n("font-awesome-icon",{attrs:{icon:["fas","chart-bar"]}})],1),t.isMenuShow?t._e():n("div",{staticClass:"index__rightPartIconBox-icon",on:{click:function(e){return t.dropMenuHandler("ringtones")}}},[n("font-awesome-icon",{attrs:{icon:["fas","music"]}})],1),t.isMenuShow?n("div",{staticClass:"index__rightPartIconBox-icon",on:{click:function(e){t.isMenuShow=0==t.isMenuShow}}},[n("font-awesome-icon",{attrs:{icon:["fas","times"],size:"lg"}})],1):t._e()]),n("div",{staticClass:"index__rightPartTextBox font-weight-bold"},[n("span",{staticClass:"index__rightPartTextBox-span w-100 h-100"},[t._v("POMODORO ")])])])])])],1)},_=[],x=s("1fca"),p={extends:x["a"],props:["chartData"],mounted:function(){this.renderChart(this.chartData)}},m=p,v=Object(c["a"])(m,n,i,!1,null,null,null),b=v.exports,h={name:"index",components:{LineChart:b},data:function(){return{isMenuShow:!1,isTodoDropShow:!0,isDoneDropShow:!1,isMenuTodoShow:!1,isMenuAnalyticsShow:!1,isMenuRingtonesShow:!1,newTodo:null,lists:[{id:1,index:1,content:"The First Thing To Do Today.",isDone:!1},{id:2,index:2,content:"The Second Thing To Do Today.",isDone:!1},{id:3,index:3,content:"The Third Thing To Do Today.",isDone:!0},{id:4,index:4,content:"The Forth Thing To Do Today.",isDone:!1},{id:5,index:5,content:"The Fiveth Thing To Do Today.",isDone:!0}],className:{todo:"index__leftMenuList-item",analytics:"index__leftMenuList-item",ringtones:"index__leftMenuList-item"},workSelected:"0",workOptions:[{text:"NONE",value:"0"},{text:"Default",value:"1"},{text:"ALARM",value:"2"},{text:"ALERT",value:"3"},{text:"BEEP",value:"4"},{text:"BELL",value:"5"},{text:"BIRD",value:"6"},{text:"BUGLE",value:"7"},{text:"DIGITAL",value:"8"},{text:"DROP",value:"9"},{text:"HORN",value:"10"},{text:"MUSIC",value:"11"},{text:"RING",value:"12"},{text:"WARNING",value:"13"},{text:"WHISTLE",value:"14"}],breakSelected:"0",breakOptions:[{text:"NONE",value:"0"},{text:"Default",value:"1"},{text:"ALARM",value:"2"},{text:"ALERT",value:"3"},{text:"BEEP",value:"4"},{text:"BELL",value:"5"},{text:"BIRD",value:"6"},{text:"BUGLE",value:"7"},{text:"DIGITAL",value:"8"},{text:"DROP",value:"9"},{text:"HORN",value:"10"},{text:"MUSIC",value:"11"},{text:"RING",value:"12"},{text:"WARNING",value:"13"},{text:"WHISTLE",value:"14"}],chartApi:{labels:["19/07/20","19/07/21","19/07/22","19/07/23","19/07/24","19/07/25","19/07/26"],datasets:[{label:"Tomato Count",backgroundColor:"#fff",data:[16,5,10,18,20,7,24]}]}}},methods:{addTodoHandler:function(){null!==this.newTodo&&""!==this.newTodo&&(this.lists.push({id:this.lists.length+1,content:this.newTodo,isDone:!1}),this.newTodo=null)},dropMenuHandler:function(t){this.isMenuShow=0==this.isMenuShow,this.selectMenuList(t)},selectMenuList:function(t){switch(this.className={todo:"index__leftMenuList-item",analytics:"index__leftMenuList-item",ringtones:"index__leftMenuList-item"},this.isMenuTodoShow=!1,this.isMenuAnalyticsShow=!1,this.isMenuRingtonesShow=!1,t){case"todo":this.className.todo+=" index__leftMenuList-item--active",this.isMenuTodoShow=!0;break;case"analytics":this.className.analytics+=" index__leftMenuList-item--active",this.isMenuAnalyticsShow=!0;break;case"ringtones":this.className.ringtones+=" index__leftMenuList-item--active",this.isMenuRingtonesShow=!0;break}},checkDone:function(t){return!0===t.isDone}},computed:{nonDoneLists:function(){var t=this,e=[];return t.lists.map(function(t){!1===t.isDone&&e.push(t)}),e},doneLists:function(){var t=this,e=[];return t.lists.map(function(t){!0===t.isDone&&e.push(t)}),e}}},C=h,j=(s("64d2"),Object(c["a"])(C,f,_,!1,null,"2acaa079",null)),w=j.exports;o["default"].use(u["a"]);var g=new u["a"]({routes:[{path:"/index",name:"index",component:w},{path:"*",redirect:"/index"}]}),T=s("2f62");o["default"].use(T["a"]);var B=new T["a"].Store({state:{},mutations:{},actions:{}}),k=s("5f5b"),D=(s("f9e3"),s("2dd8"),s("ecee")),P=s("ad3d"),M=s("c074");o["default"].use(k["a"]),D["d"].add(M["i"],M["g"],M["f"],M["d"],M["c"],M["e"],M["h"],M["a"],M["b"]),D["b"].watch(),o["default"].component("font-awesome-icon",P["a"]),o["default"].config.productionTip=!1,new o["default"]({router:g,store:B,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var n=s("5e27"),i=s.n(n);i.a},"5e27":function(t,e,s){},"64d2":function(t,e,s){"use strict";var n=s("f709"),i=s.n(n);i.a},abb4:function(t,e){t.exports="data:image/png;base64,R0lGODdhHgAeAOYAAAAAABEAACEAACwAADQAAD0AAEIAAEsAAFUAAFwAAGUAAGoAAHUAAHsAAIIAAI0AAJMAAJwAAKQAAKsAALMAALwAAMIAAMsAANMAANwAAOUAAOsAAPIAAP8AAOILAN4PAAAQAOYTANsVANgYANQaAIMgAMwiANYkAMUnACsrAMMsALwtALcvALMxAAA0AKs0AKU1AF04AKE4AAA5AJw5AGQ8AJM8AIo+AIc/AEBAAIFBAI1BAJZBAHtCAABEAGtEABZFAFFFAGdFAFJIAEJJAGtJAD9KABNLADZLAABMABpMACNMACpNAAxOABJRAChTAAFUAAxdAA5jACtjAABkABJkAB1rABVzABl0ABt7AACAACCDAB+HACOOAAD/AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAAGAALAAAAAAeAB4AAAf/gGCCg4SFhoeIiYlJio2CSYyPkY6ET0tKkoOTlAQLAwBgUE1gkJmOAAsSFhgXFBINPklNkUkzpFBQoYYAExoVEBYaIScwJUyQST4+VVhZWVxduYQAqwwRFyY0PTY7RUtHkFFZW1iCVVGF1BgHERgrMCQbGy0/kE5YWFeb6RTrFBkaPshDQUQIjBX1rFSJhSwdhAwIIEzAsEGDhmwm5G0YkgRIkiWJBmSQ8MBChQsWNcSruOHGjxtJjkDZNwgChgEIJmSomFKDPB1ENLxAciMIkhi7LEgQ8IDCqp4XbcjQwIGGDhM/aPCwUGjABQYFIECQ0CuliRYjWOJg4cGIiB0//3yMEqQggwIDEihUwABVXsobHz70yGChRQ1CC+wOgEChMUCoKVVsIHFDgwMOFQjVVfBgwgSTKCFvMCFisg0NNikQSrABggIHEyr4hBzQhE8SKiwAwFABlKDdFQY4kLCXNlQPHioo4EDBtyAJGAiM1Wm85wYMBiZsUL06gwMGJSlWt7hBKYcNE9JduEBgQgSe1TdEKGBBngNDCuQXqLAzvuVgG2RAwC4RaLCAAihpxFKA6BXwAEsQIELNBg3s9QB0/VyTQAMJSJAgdxJKkIFsFhSQAAAJJBCARBVoNIFziWRHlU9OlbfBeQHeR4kgDXy2E0s+XQBBAjsacsCBCiSgAAQDjQQCADs="},f709:function(t,e,s){}});
//# sourceMappingURL=app.835ec7bb.js.map