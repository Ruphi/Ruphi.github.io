webpackJsonp([7],{"7QkH":function(t,e){},"7zck":function(t,e){},GGpf:function(t,e){},"H1+D":function(t,e){},"L/Ra":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},a,!1,function(t){n("kljk")},null,null).exports,o=n("/ocq"),s={name:"index",data:function(){return{}},methods:{toIndex:function(){console.log(this),this.$router.push("/index")}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-card",[n("v-layout",{attrs:{row:"","fill-height":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{attrs:{src:"https://res.cloudinary.com/dcktxc7vt/image/upload/v1552567785/personal-site-for-project/personal-bg.jpg",height:"100vh"}},[n("iframe",{attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"330",height:"86",src:"//music.163.com/outchain/player?type=2&id=453413861&auto=1&height=66"}}),t._v(" "),n("div",{staticClass:"card-img-text",staticStyle:{"margin-right":"30px"}},[n("h2",{staticClass:"second"},[t._v(" 前進する")])]),t._v(" "),n("div",{staticClass:"card-img-text"},[n("h2",{staticClass:"first"},[t._v("一颗橡皮")])]),t._v(" "),n("v-container",{staticStyle:{float:"right"}},[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticStyle:{"text-align":"left","margin-top":"10vh"}},[n("div",{staticStyle:{padding:"8px",color:"#009688"}},[n("h3",{staticClass:"headline mb-0"},[t._v("生活，")]),t._v(" "),n("h3",{staticClass:"headline mb-0"},[t._v("不只有")]),t._v(" "),n("h3",{staticClass:"headline mb-0"},[t._v("苟且；")]),t._v(" "),n("h3",{staticClass:"headline mb-0"},[t._v("还有")]),t._v(" "),n("h3",{staticClass:"headline mb-0"},[t._v("诗和远方。")])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",outline:"",color:"orange"},on:{click:t.toIndex}},[t._v("进入空间")])],1)],1)]),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"10px",right:"5px"}})],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var l=n("VU/8")(s,c,!1,function(t){n("OW4M")},"data-v-0fd21f11",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"ruphi-header",attrs:{color:"primary",fixed:"",clipped:"",dark:""}},[n("v-btn",{staticClass:"hidden-md-and-up",attrs:{icon:""},on:{click:t.setDrawerAsTrue}},[n("v-icon",[t._v("menu")])],1),t._v(" "),n("v-avatar",{staticClass:"hidden-sm-and-down"},[n("v-img",{attrs:{src:"https://res.cloudinary.com/dcktxc7vt/image/upload/v1552743889/personal-site-for-project/king.jpg"}})],1),t._v(" "),n("v-toolbar-title",{staticClass:"hidden-sm-and-down"},[n("router-link",{staticClass:"ruphi-router-link",attrs:{to:"/index"}},[t._v("一颗橡皮")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:""}},[t._v("文章")]),t._v(" "),n("v-btn",{attrs:{flat:""},on:{click:t.toPictures}},[t._v("图库")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("音乐")]),t._v(" "),n("v-btn",{attrs:{flat:"","active-class":"default-class"},on:{click:t.toAdmin}},[t._v("管理")]),t._v(" "),n("v-btn",{attrs:{flat:""}},[t._v("关于我")])],1),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-md-and-up"},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("library_books")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.toPictures}},[n("v-icon",[t._v("photo_library")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("library_music")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.toAdmin}},[n("v-icon",[t._v("settings_applications")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("perm_identity")])],1)],1)],1)},staticRenderFns:[]};var u=n("VU/8")({name:"Header",methods:{setDrawerAsTrue:function(){this.$store.commit("setDrawerAsTrue")},toAdmin:function(){this.$router.push("/admin/dashboard/todo")},toPictures:function(){this.$router.push("/pictures")}}},d,!1,function(t){n("7QkH")},"data-v-4c048502",null).exports,v={admin:[{action:"dashboard",title:"管理面板",component:"admin/dashboard",items:[{title:"To Do",to:"/admin/dashboard/todo",component:"todo"},{title:"图片上传",to:"/admin/dashboard/imgUpload",component:"imgUpload"},{title:"写文章",to:"/admin/dashboard/editor",component:"editor"}]}],index:[{action:"widgets",title:"实战、练习",component:"index/projects",items:[{title:"百度IFE",to:"/index/projects/ife",component:"ife"}]}]},h={name:"SideBarList",data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/")[1];this.items=v[t]},methods:{}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-list",{attrs:{dense:"",expand:""}},t._l(t.items,function(e){return n("v-list-group",{key:e.component,attrs:{"prepend-icon":e.action,group:e.component,"no-action":""}},[[n("v-list-tile",{attrs:{slot:"activator",ripple:"ripple"},slot:"activator"},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)],t._v(" "),t._l(e.items,function(e){return n("v-list-tile",{key:e.title,attrs:{href:"#"+e.to,to:{path:e.to},ripple:"ripple"}},[n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1),t._v(" "),n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.action))])],1)],1)})],2)}),1)],1)},staticRenderFns:[]};var m=n("VU/8")(h,p,!1,function(t){n("GGpf")},"data-v-0a714a3b",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",[e("v-list",{staticClass:"pa-1 hidden-md-and-up"},[e("v-list-tile",{attrs:{avatar:""}},[e("v-list-tile-avatar",[e("v-img",{attrs:{src:"https://res.cloudinary.com/dcktxc7vt/image/upload/v1552743889/personal-site-for-project/king.jpg"}})],1),this._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[e("router-link",{staticClass:"ruphi-router-link",attrs:{to:"/index"}},[this._v("一颗橡皮")])],1)],1)],1)],1)],1)},staticRenderFns:[]};var g={name:"SideBar",components:{SideBarHeader:n("VU/8")({name:"SideBarHeader",methods:{}},f,!1,function(t){n("Uhxo")},"data-v-78bbe71b",null).exports,SideBarList:m},data:function(){return{}},created:function(){switch(this.$vuetify.breakpoint.name){case"xs":case"sm":this.$store.commit("toggleDrawer")}},methods:{setDrawerByInput:function(t){this.$store.commit("setDrawerByInput",t)},toggleDrawer:function(){this.$store.commit("toggleDrawer")}},computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(){}}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticClass:"ruphi-index-sidebar",attrs:{clipped:"",fixed:"",app:"","mobile-break-point":"960"},on:{input:t.setDrawerByInput},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"ruphi-limit-max-height"},[n("SideBarHeader"),t._v(" "),n("SideBarList")],1),t._v(" "),n("v-bottom-nav",{staticClass:"ruphi-bottom-nav"},[n("span",{staticClass:"pa-3"},[t._v("Ruphi © "+t._s((new Date).getFullYear()))])]),t._v(" "),n("v-btn",{staticClass:"ruphi-collect-index-sidebar-btn hidden-sm-and-down",attrs:{fab:"",small:"",dark:"",right:"",color:"indigo"},on:{click:function(e){return e.stopPropagation(),t.toggleDrawer(e)}}},[n("v-icon",[t._v("chevron_left")])],1)],1)},staticRenderFns:[]};var b=n("VU/8")(g,_,!1,function(t){n("Z9IL")},"data-v-aaf7c9b2",null).exports,x={name:"Index",components:{SideBar:b,Header:u},data:function(){return{}},computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(){this.drawer=!this.drawer}}},methods:{toggleDrawer:function(){this.$store.commit("toggleDrawer")}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Header"),this._v(" "),e("v-content",[e("SideBar"),this._v(" "),e("v-content",{staticClass:"ruphi-index-content"},[this.drawer?this._e():e("v-btn",{staticClass:"ruphi-spread-index-sidebar-btn hidden-sm-and-down",attrs:{fab:"",small:"",dark:"",left:"",fixed:"",color:"indigo"},on:{click:this.toggleDrawer}},[e("v-icon",[this._v("chevron_right")])],1),this._v(" "),e("router-view")],1)],1)],1)},staticRenderFns:[]};var w=n("VU/8")(x,k,!1,function(t){n("gz8e")},"data-v-3d11acd6",null).exports,y={name:"Admin",components:{SideBar:b,Header:u},data:function(){return{}},computed:{drawer:{get:function(){return this.$store.state.drawer},set:function(){}}},methods:{toggleDrawer:function(){this.$store.commit("toggleDrawer")}}},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Header"),this._v(" "),e("v-content",[e("SideBar"),this._v(" "),e("v-content",{staticClass:"ruphi-index-content"},[this.drawer?this._e():e("v-btn",{staticClass:"ruphi-spread-index-sidebar-btn hidden-sm-and-down",attrs:{fab:"",small:"",dark:"",left:"",fixed:"",color:"indigo"},on:{click:this.toggleDrawer}},[e("v-icon",[this._v("chevron_right")])],1),this._v(" "),e("router-view")],1)],1)],1)},staticRenderFns:[]};var D=n("VU/8")(y,C,!1,function(t){n("H1+D")},"data-v-52917ef2",null).exports,A={name:"Pictures",components:{Header:u},data:function(){return{imgArr:[],resultArr:[],next_cursor:1,snackbar:!1,snackbarY:"top",snackbarX:null,snackbarMode:"",snackbarTimeout:6e3,snackbarText:"没有更多了！",imgDialog:!1,dialogImgSrc:""}},created:function(){var t=this;t.imgArr=[],t.$axios.get("https://res.cloudinary.com/dcktxc7vt/image/list/ruphill.json",{params:{max_results:9}}).then(function(e){if(e&&e.data&&e.data.resources){for(var n=e.data.resources,r=0;r<n.length;r++)t.resultArr.push("https://res.cloudinary.com/dcktxc7vt/image/upload/v"+n[r].version+"/"+n[r].public_id+"."+n[r].format);for(var a=0;a<9*t.next_cursor;a++)t.imgArr.push(t.resultArr[a])}})},methods:{loadMoreImg:function(){var t=this.next_cursor;if(t<Math.ceil(this.resultArr.length/9)){this.next_cursor+=1;for(var e=9*t;e<(9*this.next_cursor>this.resultArr.length?this.resultArr.length:9*this.next_cursor);e++)this.imgArr.push(this.resultArr[e])}9*t>=this.resultArr.length&&(this.snackbar=!0)},loadFullImg:function(t){this.dialogImgSrc=t,this.imgDialog=!0}}},S={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),t._v(" "),n("v-layout",{staticClass:"ruphi-pictures-container"},[n("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[n("v-card",[n("v-container",{attrs:{"grid-list-md":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.imgArr,function(e,r){return n("v-flex",{key:r,attrs:{xs6:"",sm4:""}},[n("v-card",{attrs:{tile:""},on:{click:function(n){return t.loadFullImg(e)}}},[n("v-img",{attrs:{src:e,height:"250"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[n("v-progress-circular",{attrs:{indeterminate:"","pa-2":"",color:"blue lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)}),1),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.loadMoreImg}},[t._v("加载更多")])],1)],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"80%"},model:{value:t.imgDialog,callback:function(e){t.imgDialog=e},expression:"imgDialog"}},[n("v-window",{staticStyle:{"max-height":"80vh"}},[n("v-card",{attrs:{"pa-2":""},on:{click:function(e){t.imgDialog=!1}}},[n("v-img",{attrs:{src:t.dialogImgSrc,"ma-2":""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[n("v-progress-circular",{attrs:{indeterminate:"","pa-2":"",color:"blue lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1),t._v(" "),n("v-snackbar",{attrs:{bottom:"bottom"===t.snackbarY,left:"left"===t.snackbarX,"multi-line":"multi-line"===t.snackbarMode,right:"right"===t.snackbarX,timeout:t.snackbarTimeout,top:"top"===t.snackbarY,vertical:"vertical"===t.snackbarMode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n    "),n("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},staticRenderFns:[]};var $=n("VU/8")(A,S,!1,function(t){n("L/Ra")},"data-v-369eda46",null).exports;r.default.use(o.a);var I=new o.a({linkActiveClass:"active",routes:[{path:"/",name:"Welcome",component:l},{path:"/index",name:"Index",component:w,children:[{path:"/",component:function(t){return n.e(4).then(function(){var e=[n("FoCj")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"projects/ife",component:function(t){return n.e(5).then(function(){var e=[n("0qa+")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/admin",name:"Admin",component:D,query:{componentPage:"Admin"},children:[{path:"/",component:function(t){return n.e(3).then(function(){var e=[n("8fWL")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"dashboard/todo",component:function(t){return n.e(1).then(function(){var e=[n("+/1k")];t.apply(null,e)}.bind(this)).catch(n.oe)},query:{componentPage:"Index"}},{path:"dashboard/imgUpload",component:function(t){return n.e(2).then(function(){var e=[n("gsth")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"dashboard/editor",component:function(t){return n.e(0).then(function(){var e=[n("7ior")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/pictures",name:"Pictures",component:$}]}),j=n("mtWM"),H=n.n(j),B=n("3EgV"),F=n.n(B),U=n("ESwS"),E=n.n(U),R=(n("7zck"),n("gJtD"),n("NYxO"));r.default.use(R.a);var M=new R.a.Store({state:{drawer:!0},mutations:{toggleDrawer:function(t){t.drawer=!t.drawer},setDrawerAsTrue:function(t){t.drawer=!0},setDrawerByInput:function(t,e){t.drawer=e}}});r.default.use(F.a,{iconfont:"md"}),r.default.use(E.a),r.default.prototype.$axios=H.a,r.default.config.productionTip=!1,new r.default({el:"#app",store:M,router:I,components:{App:i},template:"<App/>"})},OW4M:function(t,e){},Uhxo:function(t,e){},Z9IL:function(t,e){},gJtD:function(t,e){},gz8e:function(t,e){},kljk:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.70660b145d3245a1d39a.js.map