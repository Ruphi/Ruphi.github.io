webpackJsonp([7],{BrbD:function(t,r){},X2NO:function(t,r){},txpY:function(t,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var e={name:"Pictures",components:{Header:a("teIl").a},data:function(){return{imgArr:[],resultArr:[],max_result:0,next_cursor:1,snackbar:!1,snackbarY:"top",snackbarX:null,snackbarMode:"",snackbarTimeout:6e3,snackbarText:"没有更多了！",imgDialog:!1,dialogImgSrc:""}},created:function(){var t=this;switch(this.$vuetify.breakpoint.name){case"xs":case"sm":this.max_result=10;break;case"md":case"lg":case"xl":this.max_result=9}t.imgArr=[],t.$axios.get("https://res.cloudinary.com/dcktxc7vt/image/list/ruphill.json",{params:{max_results:t.max_result}}).then(function(r){if(r&&r.data&&r.data.resources){for(var a=r.data.resources,e=0;e<a.length;e++)t.resultArr.push({src:"https://res.cloudinary.com/dcktxc7vt/image/upload/v"+a[e].version+"/"+a[e].public_id+"."+a[e].format,public_id:a[e].public_id});for(var s=0;s<Math.min(t.next_cursor*t.max_result,a.length);s++)t.imgArr.push(t.resultArr[s])}})},methods:{loadMoreImg:function(){var t=this.next_cursor;if(t<Math.ceil(this.resultArr.length/this.max_result)){this.next_cursor+=1;for(var r=t*this.max_result;r<(this.next_cursor*this.max_result>this.resultArr.length?this.resultArr.length:this.next_cursor*this.max_result);r++)this.imgArr.push(this.resultArr[r])}t*this.max_result>=this.resultArr.length&&(this.snackbar=!0)},loadFullImg:function(t){this.dialogImgSrc=t.src,this.imgDialog=!0}}},s={render:function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("v-app",[a("Header"),t._v(" "),a("v-layout",{staticClass:"ruphi-pictures-container"},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-card",[a("v-container",{attrs:{"grid-list-md":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.imgArr,function(r,e){return a("v-flex",{key:e,attrs:{xs6:"",sm4:""}},[a("v-card",{attrs:{tile:""},on:{click:function(a){return t.loadFullImg(r)}}},[a("v-img",{attrs:{src:r.src,height:"250"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"","pa-2":"",color:"blue lighten-5"}})],1)]},proxy:!0}],null,!0)}),t._v(" "),a("v-card-title",[t._v(t._s(r.public_id))])],1)],1)}),1),t._v(" "),a("v-btn",{attrs:{color:"primary"},on:{click:t.loadMoreImg}},[t._v("加载更多")])],1)],1)],1)],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"80%","content-class":"ruphi-image-dialog"},model:{value:t.imgDialog,callback:function(r){t.imgDialog=r},expression:"imgDialog"}},[a("v-window",{staticStyle:{"max-height":"80vh"}},[a("v-card",{staticStyle:{"max-height":"80vh"},attrs:{"pa-2":""},on:{click:function(r){t.imgDialog=!1}}},[a("v-img",{staticStyle:{"max-height":"inherit"},attrs:{src:t.dialogImgSrc,"ma-2":"",contain:""},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[a("v-progress-circular",{attrs:{indeterminate:"","pa-2":"",color:"blue lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{bottom:"bottom"===t.snackbarY,left:"left"===t.snackbarX,"multi-line":"multi-line"===t.snackbarMode,right:"right"===t.snackbarX,timeout:t.snackbarTimeout,top:"top"===t.snackbarY,vertical:"vertical"===t.snackbarMode},model:{value:t.snackbar,callback:function(r){t.snackbar=r},expression:"snackbar"}},[t._v("\n    "+t._s(t.snackbarText)+"\n    "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(r){t.snackbar=!1}}},[t._v("\n      Close\n    ")])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(e,s,!1,function(t){a("X2NO"),a("BrbD")},"data-v-6c33bc46",null);r.default=i.exports}});
//# sourceMappingURL=7.ce45a5240fac6c632a78.js.map