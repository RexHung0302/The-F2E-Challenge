(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{"38dd":function(t,o,e){"use strict";e.r(o);var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"index position-relative w-100 h-100"},[e("div",{staticClass:"index__titlePart position-relative"},[e("transition-group",{staticClass:"animateBox position-relative",attrs:{tag:"div",name:"fade"}},t._l(t.allRoomImg,function(o,i){return e("img",{directives:[{name:"show",rawName:"v-show",value:i===t.nowImgActive,expression:"index === nowImgActive"}],key:o,staticClass:"img-fluid titlePart__showImg w-100",attrs:{src:o}})}),0),e("div",{staticClass:"lastPageBtn rounded-circle position-absolute",on:{click:function(o){return t.changePage(t.nowImgActive-1)}}}),e("div",{staticClass:"nextPageBtn rounded-circle position-absolute",on:{click:function(o){return t.changePage(t.nowImgActive+1)}}})],1),e("div",{staticClass:"index__roomShow position-relative w-100 h-100"},[e("h4",{staticClass:"text-left roomTypeTitle"},[t._v("Room type")]),e("div",{staticClass:"row no-gutters"},t._l(t.allRoom,function(o,i){return e("div",{key:i,staticClass:"roomShow__box position-relative col-lg-4 col-md-4 col-sm-2"},[e("div",{staticClass:"blur position-relative w-100 h-100"},[e("img",{staticClass:"img-fluid roomShow__roomImg w-100 h-100",attrs:{src:o.imageUrl}}),e("span",{staticClass:"roomShow__roomName font-weight-bold"},[t._v(t._s(o.name))])])])}),0)])])},a=[],n=e("bc3a"),s="V0QiN5pW8U8HvsXYjEO4XEtYCCgEq10iOZzxN8hKg6RuhEQN5Ao6DQbxvpVW",l="https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",c={name:"index",data:function(){return{allRoomImg:[],nowImgActive:0}},mounted:function(){var t=this;n({method:"get",url:"".concat(l),headers:{Authorization:"Bearer ".concat(s)}}).then(function(o){o&&(console.log(o.data),t.$store.commit("setApi",o.data),t.allRoom.map(function(o,e){t.allRoomImg.push(o.imageUrl)}),t.shuffle(t.allRoomImg))}).catch(function(t){console.log(t)})},methods:{shuffle:function(t){var o=t.length;while(o>0){var e=Math.floor(Math.random()*o);o--;var i=t[o];t[o]=t[e],t[e]=i}return t},changePage:function(t){this.nowImgActive=(t+this.allRoomImg.length)%this.allRoomImg.length}},computed:{allRoom:function(){return this.$store.state.allRoom}}},r=c,m=(e("e120"),e("2877")),u=Object(m["a"])(r,i,a,!1,null,"4b4ce4a4",null);o["default"]=u.exports},e120:function(t,o,e){"use strict";var i=e("f18b"),a=e.n(i);a.a},f18b:function(t,o,e){}}]);
//# sourceMappingURL=index.7ec138f2.js.map