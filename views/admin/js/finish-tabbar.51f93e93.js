(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["finish-tabbar"],{"072a":function(t,e,a){"use strict";a("1ec7")},"10d2":function(t,e,a){"use strict";a("2ad8")},"1ec7":function(t,e,a){},"1ed8":function(t,e){t.exports=function(t,e,a,n){var o="undefined"!==typeof n?[n,t]:[t],i=new Blob(o,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,e);else{var s=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),l=document.createElement("a");l.style.display="none",l.href=s,l.setAttribute("download",e),"undefined"===typeof l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(s)}),200)}}},"244d":function(t,e,a){},"2ad8":function(t,e,a){},6892:function(t,e,a){"use strict";a("7f67")},"7f67":function(t,e,a){},9892:function(t,e,a){t.exports=a.p+"img/le-upload-applets.8b4e315c.gif"},b9cf:function(t,e,a){},d1d7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"le-matters"},[t.uploadLoading?a("div",{staticClass:"le-upload-loading flex align-center justify-center",on:{touchmove:function(t){t.preventDefault()}}},[t._m(0)]):t._e(),a("div",{staticClass:"tabbar"},[a("div",{staticClass:"tabbar-phone"},[t._m(1),a("div",{staticClass:"tabbar-phone-body"},[a("div",{staticClass:"tabbar-phone-tabbar"},[a("div",{staticClass:"tabbar-phone-opacity"}),a("iframe",{staticClass:"tabbar-phone-iframe",attrs:{frameborder:"0",scrolling:"no",src:t.origin,width:"375px",height:"700px"}}),a("Tabbar",{attrs:{tabbarDes:t.tabbarDes.data,type:t.tabbarDes.tabbarStyle,color:t.tabbarDes.inactive_color,background:t.tabbarDes.background_color}})],1)])]),a("div",{staticClass:"tabbar-attribute"},[a("Attribute",{model:{value:t.tabbarDes,callback:function(e){t.tabbarDes=e},expression:"tabbarDes"}})],1),a("div",{staticClass:"tabbar-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleTabbarSave}},[t._v("保存")])],1)]),a("download",{model:{value:t.isDownload,callback:function(e){t.isDownload=e},expression:"isDownload"}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"le-upload-content"},[n("img",{staticClass:"le-upload-img",attrs:{src:a("9892")}}),n("div",[t._v("下载中...")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar-phone-header"},[a("div",{staticClass:"tabbar-phone-title"},[t._v(" 微页面 ")])])}],i=(a("c5d1"),a("2070"),a("2769"),a("ecf1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{class:{"active-tow":"second"==t.active},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("el-tab-pane",{attrs:{label:"内容设置",name:"first"}},[a("p",{staticClass:"tips"},[t._v(" 至少添加2个导航，最多添加5个导航 "),a("span",{staticStyle:{color:"#623ceb","font-size":"12px",float:"right",cursor:"pointer"},on:{click:t.handleDefault}},[t._v("恢复默认图标")])]),a("el-form",{ref:"form",attrs:{model:t.content,"label-width":"110px",size:"mini","label-position":"left"}},[t._l(t.content.data,(function(e,n){return a("div",{key:n,staticClass:"select-photo"},[0!==n&&t.content.data.length>2?a("i",{staticClass:"le-icon le-icon-cha2 select-photo__close",on:{click:function(e){return t.handleDelete(n)}}}):t._e(),2==t.content.tabbarStyle?a("el-form-item",{attrs:{label:"图标","label-width":"50px"}},[a("div",{staticClass:"select-photo__item"},[a("div",{staticClass:"select-photo__upload"},[a("pictureDialog",{scopedSlots:t._u([{key:"preview",fn:function(e){return a("div",{staticClass:"select-cover__60-edit"},[a("el-image",{attrs:{src:e.url,fit:"cover"}}),a("div",{staticClass:"select-cover__60-tips"},[t._v("替换")])],1)}}],null,!0),model:{value:e.iconPath,callback:function(a){t.$set(e,"iconPath",a)},expression:"item.iconPath"}},[a("div",{staticClass:"select-cover__60-add",attrs:{slot:"upload"},slot:"upload"},[a("i",{staticClass:"le-icon le-icon-add select-cover__60-icon"})])])],1),a("span",[t._v("未选中")])]),a("div",{staticClass:"select-photo__item"},[a("div",{staticClass:"select-photo__upload"},[a("pictureDialog",{scopedSlots:t._u([{key:"preview",fn:function(e){return a("div",{staticClass:"select-cover__60-edit"},[a("el-image",{attrs:{src:e.url,fit:"cover"}}),a("div",{staticClass:"select-cover__60-tips"},[t._v("替换")])],1)}}],null,!0),model:{value:e.selectedIconPath,callback:function(a){t.$set(e,"selectedIconPath",a)},expression:"item.selectedIconPath"}},[a("div",{staticClass:"select-cover__60-add",attrs:{slot:"upload"},slot:"upload"},[a("i",{staticClass:"le-icon le-icon-add select-cover__60-icon"})])])],1),a("span",[t._v("选中")])])]):t._e(),a("el-form-item",{attrs:{label:"名称","label-width":"50px"}},[a("el-input",{attrs:{type:"text",placeholder:"输入名称","data-index":n,maxlength:"4","show-word-limit":""},on:{blur:t.handleInputBlur},model:{value:e.text,callback:function(a){t.$set(e,"text",a)},expression:"item.text"}})],1),a("el-form-item",{attrs:{label:"链接","label-width":"50px"}},[0===n?[t._v(" 店铺首页 ")]:a("hyperlinkSelect",{attrs:{index:n,forbidden:[2,3,7,6,10,11,12]},model:{value:e.link,callback:function(a){t.$set(e,"link",a)},expression:"item.link"}},[t._v("请选择跳转链接")])],2)],1)})),a("div",{staticClass:"button-adddata"},[a("el-button",{attrs:{disabled:5==t.content.data.length},on:{click:t.handleAdditem}},[t._v("新增导航")])],1)],2),a("div",{staticClass:"attribute-footer-empty"})],1),a("el-tab-pane",{attrs:{label:"样式设置",name:"second"}},[a("el-form",{ref:"form",attrs:{model:t.content,"label-width":"110px",size:"mini","label-position":"left"}},[a("div",{staticClass:"control-item-title"},[t._v("选择风格")]),a("el-radio-group",{model:{value:t.content.tabbarStyle,callback:function(e){t.$set(t.content,"tabbarStyle",e)},expression:"content.tabbarStyle"}},[a("el-radio",{attrs:{label:1}},[t._v(" 文字 ")]),a("el-radio",{attrs:{label:2}},[t._v(" 图文 ")])],1),a("el-divider"),a("div",{staticClass:"control-item-title"},[t._v("颜色设置")]),a("el-form-item",{attrs:{label:"背景颜色"}},[a("colour",{attrs:{colour:"#FFFFFF"},model:{value:t.content.background_color,callback:function(e){t.$set(t.content,"background_color",e)},expression:"content.background_color"}})],1),a("el-form-item",{attrs:{label:"未选中文字颜色"}},[a("colour",{attrs:{colour:"#666666"},model:{value:t.content.inactive_color,callback:function(e){t.$set(t.content,"inactive_color",e)},expression:"content.inactive_color"}})],1),a("el-form-item",{attrs:{label:"选中文字颜色"}},[a("colour",{attrs:{colour:"#f5212d"},model:{value:t.content.active_color,callback:function(e){t.$set(t.content,"active_color",e)},expression:"content.active_color"}})],1)],1),a("div",{staticClass:"attribute-footer-empty"})],1)],1)}),s=[],l=(a("23db"),a("db33")),c=a("3ec8"),r=a("5957"),d=a("00ee"),u=a("1ed8"),p=a.n(u),b={components:{control:l["a"],colour:c["a"],pictureSelect:r["a"],hyperlinkSelect:d["a"]},props:{value:{type:[Object,Array]}},data:function(){return{active:"first",errorTips:"",tabbar:{tabbarStyle:2,background_color:"#FFFFFF",inactive_color:"#1A1818",active_color:"#f5212d",data:[{text:"首页",page:"setup",iconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_home_normal.png",selectedIconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_home_selected.png",link:{name:"店铺首页",path:"/pages/index/index",param:{},index:0,extend:!1}},{iconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_classification_normal.png",selectedIconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_classification_selected.png",text:"分类",link:{name:"全部商品",path:"/pages/goods/list",param:{},index:1,extend:!1}},{iconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_shopping-cart_normal.png",selectedIconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_shopping-cart_selected.png",text:"购物车",link:{name:"购物车",path:"/pages/cart/index",param:{},index:4,extend:!1}},{iconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_personal-center_normal.png",selectedIconPath:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/tabbar/nav_personal-center_selected.png",text:"我",link:{name:"个人中心",path:"/pages/user/index",param:{},index:5,extend:!1}}]}}},computed:{content:{get:function(){return this.value.data.length?this.value:JSON.parse(JSON.stringify(this.tabbar))},set:function(t){this.$emit("input",t)}}},methods:{handleInputBlur:function(t){this.errorTips="";var e=this.content.data;if(t.target.dataset.index!=t.target.value){var a=t.target.dataset.index;for(var n in e){var o=e[n];if(o.text==t.target.value)return a===n?void 0:(this.$message({message:"名称不能重复",type:"warning"}),void(this.errorTips="名称不能重复"))}}},handleAdditem:function(){this.content.data.length<5?this.content.data.push({pagePath:"",iconPath:"",selectedIconPath:"",text:"标题",link:{}}):this.$message({message:"最多添加5个导航",type:"warning"})},handleDelete:function(t){this.content.data.length>2?this.content.data.splice(t,1):this.$message({message:"至少保留两个2导航",type:"warning"})},handleDefault:function(){var t=this;this.$confirm("是否要恢复默认图标？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){t.content=JSON.parse(JSON.stringify(t.tabbar)),t.$message({message:"恢复成功",type:"success"})})).catch((function(){}))}}},h=b,f=(a("10d2"),a("4ac2")),v=Object(f["a"])(h,i,s,!1,null,"f941ed14",null),m=v.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabberWarp",style:{background:t.background}},[a("div",{staticClass:"warp",style:{background:t.background}},t._l(t.tabbarDes,(function(e,n){return a("Item",{key:n,attrs:{text:e.text,color:t.color,page:e.page},on:{change:t.getVal}},[2==t.type?a("img",{attrs:{slot:"iconPath",src:e.iconPath},slot:"iconPath"}):t._e(),2==t.type?a("img",{attrs:{slot:"selectedIconPath",src:e.selectedIconPath},slot:"selectedIconPath"}):t._e()])})),1)])},_=[],x=(a("e1d4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"itemWarp flex_mid",on:{click:t.changePage}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.bol,expression:"!bol"}]},[t._t("iconPath")],2),a("span",{directives:[{name:"show",rawName:"v-show",value:t.bol,expression:"bol"}]},[t._t("selectedIconPath")],2),a("span",{style:{color:t.color},domProps:{textContent:t._s(t.text)}})])}),w=[],y={name:"Item",props:{text:{type:String},page:{type:String},color:{type:String,default:"#666666"},sel:{type:String,default:"skin"}},computed:{bol:function(){return this.sel==this.page}},methods:{changePage:function(){}}},k=y,C=(a("072a"),Object(f["a"])(k,x,w,!1,null,null,null)),P=C.exports,S={components:{Item:P},props:{tabbarDes:{type:[Object,Array]},type:{type:Number,default:1},color:{type:String,default:"#666666"},background:{type:String,default:"#FFFFFF"}},data:function(){return{selected:"skin2"}},methods:{getVal:function(t){this.selected=t}}},$=S,D=(a("6892"),Object(f["a"])($,g,_,!1,null,null,null)),F=D.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{width:"532px",visible:t.newVal,"custom-class":"le-download"},on:{"update:visible":function(e){t.newVal=e}}},[a("div",{},[a("div",{staticClass:"le-name"},[t._v("保存成功！如需生效请下载小程序包并上传审核。")]),a("div",[a("span",{staticClass:"le-title"},[t._v("是否已开通小程序直播")]),a("el-radio-group",{model:{value:t.enable_live,callback:function(e){t.enable_live=e},expression:"enable_live"}},[a("el-radio",{attrs:{label:0}},[t._v("未开通")]),a("el-radio",{attrs:{label:1}},[t._v("已开通")])],1)],1),a("div",{staticClass:"le-prompt-text"},[t._v(" 请谨慎选择是否有开通小程序直播功能，否则将影响小程序的发布审核"),a("br"),t._v(" 可前往 "),a("span",{staticClass:"le-prompt"},[t._v("微信公众号平台>小程序>功能>直播")]),t._v(" 开通直播功能 ")]),a("el-button",{staticClass:"le-btn",attrs:{type:"primary"},on:{click:t.download}},[t._v("下载")])],1)])},I=[],q={name:"download",props:{value:{type:Boolean,default:!1}},computed:{newVal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},data:function(){return{enable_live:0}},methods:{download:function(){var t=this;this.$heshop.download({enable_live:this.enable_live}).then((function(e){p()(e,"wxapp.zip"),t.newVal=!1})).catch((function(t){console.error(t)}))}}},T=q,j=(a("ed9d"),a("d40f"),Object(f["a"])(T,O,I,!1,null,"7ac31803",null)),z=j.exports,L={components:{Attribute:m,Tabbar:F,download:z},data:function(){return{tabbarDes:{tabbarStyle:1,background_color:"#FFFFFF",inactive_color:"#666666",active_color:"#f5212d",data:[]},fullHeight:document.documentElement.clientHeight,origin:$_W.AppWEB,uploadLoading:!1,isDownload:!1}},computed:{scrollHeight:function(){return{height:parseInt(this.fullHeight)-65+"px"}}},mounted:function(){var t=this;window.onresize=function(){return function(){window.fullHeight=document.documentElement.clientHeight,t.fullHeight=window.fullHeight}()},this.handleLoadTabbar()},methods:{handleTabbarSave:function(){var t=this;for(var e in this.tabbarDes.data){var a=this.tabbarDes.data[e];if(""==a.text)return void this.$message({message:"名称不能为空",type:"warning"});if(a.link&&0===Object.keys(a.link).length)return void this.$message({message:"链接不能为空",type:"warning"});if(2==this.tabbarDes.tabbarStyle){if(""==a.iconPath)return void this.$message({message:"【未选中】图标不能为空",type:"warning"});if(""==a.selectedIconPath)return void this.$message({message:"【选中】图标不能为空",type:"warning"})}}var n=this.$loading({lock:!0,text:"保存中……",spinner:"el-icon-loading"});this.$heshop.fitment("POST",{keyword:"tabbar",content:JSON.stringify(this.tabbarDes)}).then((function(){n.close(),t.isDownload=!0})).catch((function(t){console.error("错误信息",t)}))},handleLoadTabbar:function(){var t=this;this.$heshop.search("POST",{include:"fitment"},{keyword:"tabbar"}).then((function(e){e&&e.content&&(t.tabbarDes=JSON.parse(e.content))})).catch((function(t){console.error("错误信息",t)}))},changeRadio:function(t){this.enable_live=t}}},E=L,A=(a("f417"),Object(f["a"])(E,n,o,!1,null,"eaa95670",null));e["default"]=A.exports},d40f:function(t,e,a){"use strict";a("244d")},ed9d:function(t,e,a){"use strict";a("b9cf")},f417:function(t,e,a){"use strict";a("f6e7")},f6e7:function(t,e,a){}}]);