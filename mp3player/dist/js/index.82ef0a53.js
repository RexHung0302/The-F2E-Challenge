(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["index"],{9207:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home w-100 h-100 position-relative"},[e("article",{staticClass:"w-100 h-100 row no-gutters"},[e("sideBar"),e("div",{staticClass:"col"},[e("router-view")],1)],1)])},a=[],o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-2 sideBar BrandBg position-relative h-100",class:{hidden:t.isClose}},[e("font-awesome-icon",{staticClass:"position-absolute hamburgerBtn",attrs:{icon:["fa","hamburger"]},on:{click:function(s){t.isClose?t.isClose=!1:t.isClose=!0}}}),e("div",{staticClass:"sideBar__profileBox position-relative w-100"},[e("div",{staticClass:"profile__imgBox position-relative rounded-circle"},[e("img",{staticClass:"profileImgBox__img w-100 h-100",attrs:{src:t.profileImg}})]),e("span",{staticClass:"profile__name d-block"},[t._v("Rex Hung")]),e("button",{staticClass:"profile__logOutBtn"},[t._v("登出")])]),e("div",{staticClass:"sideBar__itemBox position-relative w-100 text-left"},[e("div",{staticClass:"itemBox__title",class:{active:"index"===t.nowSelect}},[e("router-link",{attrs:{to:"/taiwansongking/home/index"}},[e("span",{staticClass:"title__span cursor-pointer",on:{click:function(s){t.nowSelect="index"}}},[t._v("首頁")])])],1),t._m(0),e("div",{staticClass:"itemBox__listItem",class:{active:"songList"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fa","folder"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="songList"}}},[t._v("你的歌單")])],1),e("div",{staticClass:"itemBox__listItem",class:{active:"search"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fa","search"]}}),e("router-link",{attrs:{to:"/taiwansongking/home/search"}},[e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="search"}}},[t._v("搜尋歌曲")])])],1),e("div",{staticClass:"itemBox__listItem itemBox__lastListItem",class:{active:"hotSong"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fa","music"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="hotSong"}}},[t._v("熱門點播   ")])],1),t._m(1),e("div",{staticClass:"itemBox__listItem",class:{active:"youtube"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","youtube"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="youtube",t.jumpToOtherPlace("youtube")}}},[t._v("Youtube")])],1),e("div",{staticClass:"itemBox__listItem",class:{active:"facebook"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","facebook"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="facebook",t.jumpToOtherPlace("facebook")}}},[t._v("Facebook")])],1),e("div",{staticClass:"itemBox__listItem",class:{active:"github"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fab","github"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="github",t.jumpToOtherPlace("GitHub")}}},[t._v("GitHub")])],1),e("div",{staticClass:"itemBox__listItem",class:{active:"share"===t.nowSelect}},[e("font-awesome-icon",{staticClass:"mr-2",attrs:{icon:["fa","share"]}}),e("span",{staticClass:"listItem__span",on:{click:function(s){t.nowSelect="share"}}},[t._v("分享        ")])],1)])],1)},c=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"itemBox__title"},[e("span",{staticClass:"title__span"},[t._v("音樂庫 ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"itemBox__title"},[e("span",{staticClass:"title__span"},[t._v("關注我們")])])}],n={name:"sideBar",data:function(){return{profileImg:null,nowSelect:"index",isClose:!1}},mounted:function(){this.profileImg=this.$store.state.profileImg},methods:{jumpToOtherPlace:function(t){switch(t){case"youtube":window.location.href="https://www.youtube.com/";break;case"facebook":window.location.href="https://www.facebook.com/groups/173311386703334/?epa=SEARCH_BOX";break;case"GitHub":window.location.href="https://github.com/RexHung0302/The-F2E-Challenge";break}}}},l=n,r=e("2877"),_=Object(r["a"])(l,o,c,!1,null,null,null),m=_.exports,u={name:"home",components:{sideBar:m}},f=u,p=Object(r["a"])(f,i,a,!1,null,null,null);s["default"]=p.exports}}]);
//# sourceMappingURL=index.82ef0a53.js.map