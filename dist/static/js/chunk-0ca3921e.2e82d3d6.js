(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca3921e"],{"15fd":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("a4d3");function a(t,e){if(null==t)return{};var r={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;r[a]=t[a]}return r}function n(t,e){if(null==t)return{};var r,n,i=a(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}},"1e55":function(t,e,r){"use strict";r.d(e,"h",(function(){return h})),r.d(e,"c",(function(){return p})),r.d(e,"f",(function(){return g})),r.d(e,"m",(function(){return v})),r.d(e,"a",(function(){return y})),r.d(e,"o",(function(){return b})),r.d(e,"j",(function(){return O})),r.d(e,"n",(function(){return D})),r.d(e,"b",(function(){return S})),r.d(e,"q",(function(){return w})),r.d(e,"p",(function(){return j})),r.d(e,"g",(function(){return k})),r.d(e,"d",(function(){return P})),r.d(e,"k",(function(){return I})),r.d(e,"i",(function(){return L})),r.d(e,"l",(function(){return C})),r.d(e,"e",(function(){return z})),r.d(e,"r",(function(){return R}));r("a15b"),r("c7eb"),r("1da1");var a=r("53ca"),n=(r("caad"),r("fb6a"),r("e9c4"),r("b64b"),r("d3b7"),r("2532"),r("bc3a")),i=r.n(n),o=r("5c96"),s=r("4360"),c=(r("5f87"),r("81ae")),u=r("c38a"),d=r("63f0"),l=(r("21a6"),{show:!1});i.a.defaults.headers["Content-Type"]="application/json;charset=utf-8";var f=i.a.create({baseURL:"http://sunkoda.us.to:9002",timeout:1e4});f.interceptors.request.use((function(t){var e=!1===(t.headers||{}).isToken,r=!1===(t.headers||{}).repeatSubmit,n="eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZhMGMzMGU5LWU5YzAtNDk4Ni1iZTRjLTk0NzRhMDM3OGM4MyJ9.xpwt1tZG44qGYW1NA-55T7kAR53lR6-DsTTXY2zQzzCciBRZml5EZrACcGkJYVVp7m0JgI57sdSCNUJkzd6NJg";if(n&&!e&&(t.headers["Authorization"]="Bearer "+n),"get"===t.method&&t.params){var i=t.url+"?"+Object(u["j"])(t.params);i=i.slice(0,-1),t.params={},t.url=i}if(!r&&("post"===t.method||"put"===t.method)){var o={url:t.url,data:"object"===Object(a["a"])(t.data)?JSON.stringify(t.data):t.data,time:(new Date).getTime()},s=d["a"].session.getJSON("sessionObj");if(void 0===s||null===s||""===s)d["a"].session.setJSON("sessionObj",o);else{var c=s.url,l=s.data,f=s.time,m=1e3;if(l===o.data&&o.time-f<m&&c===o.url){var h="数据正在处理，请勿重复提交";return console.warn("[".concat(c,"]: ")+h),Promise.reject(new Error(h))}d["a"].session.setJSON("sessionObj",o)}}return t}),(function(t){console.log(t),Promise.reject(t)})),f.interceptors.response.use((function(t){var e=t.data.code||200,r=c["a"][e]||t.data.msg||c["a"]["default"];return"blob"===t.request.responseType||"arraybuffer"===t.request.responseType?t.data:401===e?(l.show||(l.show=!0,o["MessageBox"].confirm("登录状态已过期，您可以继续留在该页面，或者重新登录","系统提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){l.show=!1,s["a"].dispatch("LogOut").then((function(){location.href="/index"}))})).catch((function(){l.show=!1}))),Promise.reject("无效的会话，或者会话已过期，请重新登录。")):500===e?(Object(o["Message"])({message:r,type:"error"}),Promise.reject(new Error(r))):200!==e?(o["Notification"].error({title:r}),Promise.reject("error")):t.data}),(function(t){console.log("err"+t);var e=t.message;return"Network Error"==e?e="后端接口连接异常":e.includes("timeout")?e="系统接口请求超时":e.includes("Request failed with status code")&&(e="系统接口"+e.substr(e.length-3)+"异常"),Object(o["Message"])({message:e,type:"error",duration:5e3}),Promise.reject(t)}));var m=f,h=function(){return m({url:"/system/StatisticalData/getMapDataList",method:"get"})};function p(t){return m({url:"/system/StatisticalData/getClockInTodayTollCollector",method:"get",params:{deptIds:t}})}function g(t){return m({url:"/system/StatisticalData/getImg",method:"get",params:{imgId:t}})}function v(t){return m({url:"/system/StatisticalData/getPreferentialOrderTypeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function y(t){return m({url:"/system/StatisticalData/getAbnormalOrderTypeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function b(t){return m({url:"/system/StatisticalData/getSourceOfIncomeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function O(t){return m({url:"/system/StatisticalData/getParkingOrderIncomeTotalByDeptId",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function D(t){return m({url:"/system/StatisticalData/getReceiveRecord",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function S(t){return m({url:"/system/StatisticalData/getAccessRecord",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function w(t){return m({url:"/system/StatisticalData/getWarningOrder",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function j(t){return m({url:"/system/StatisticalData/getWarningLock",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function k(t){return m({url:"/system/StatisticalData/getOrderRevenueLineChart",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function P(){return m({url:"/system/StatisticalData/getDeptRelatedInfo",method:"get"})}function I(t){var e="all"==t?"/system/StatisticalData/getParkingOrderTypePieChart":"/system/StatisticalData/getParkingOrderTypePieChart?parkingLotIds=".concat(t);return m({url:e,method:"get"})}function L(t){var e="all"==t?"/system/StatisticalData/getParkingOrderDurationPercentagePieChart":"/system/StatisticalData/getParkingOrderDurationPercentagePieChart?parkingLotIds=".concat(t);return m({url:e,method:"get"})}function C(t){var e="all"==t?"/system/StatisticalData/getParkingRelatedInfo":"/system/StatisticalData/getParkingRelatedInfo?parkingLotIds=".concat(t);return m({url:e,method:"get"})}function z(){return m({url:"/system/StatisticalData/getDeptRelatedInfo",method:"get"})}function R(t){var e="all"==t?"/system/StatisticalData/todayYesterdayDataComparison":"/system/StatisticalData/todayYesterdayDataComparison?parkingLotIds=".concat(t);return m({url:e,method:"get"})}},"52b4":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-view"},[t._m(0),r("div",{ref:"chart",staticClass:"chart-container"})])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-view-title"},[r("div",[t._v("正常&优惠订单占比")]),r("div",[t._v("异常订单占比")])])}],i=r("15fd"),o=(r("99af"),r("7db0"),r("d81d"),r("13d5"),r("b0c0"),r("d3b7"),r("820e"),r("3ca3"),r("ddb0"),r("313e")),s=r("1e55"),c=["hasPermi","total"],u=["hasPermi","total"],d={name:"RevenueProportionChart",props:{parkingLotIds:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,normalOrderData:[],abnormalOrderData:[]}},watch:{parkingLotIds:{handler:function(t,e){this.requestData()},deep:!0}},mounted:function(){this.initChart(),this.requestData()},beforeUnmount:function(){this.chart&&(window.removeEventListener("resize",this.chart.resize),window.removeEventListener("dataScreenResize",this.chart.resize),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=o["init"](this.$refs.chart,null,{renderer:"svg",useDirtyRect:!1}),window.addEventListener("resize",this.chart.resize),window.addEventListener("dataScreenResize",this.chart.resize)},requestData:function(){var t=this;Promise.allSettled([Object(s["m"])(this.parkingLotIds),Object(s["a"])(this.parkingLotIds)]).then((function(e){for(var r=e[0].value.data,a=(r.hasPermi,r.total,Object(i["a"])(r,c)),n=[],o=0,s=["正常收费","新能源","残疾人车牌","包月优惠"];o<s.length;o++){var d=s[o];n.push({name:d,value:a[d]})}t.normalOrderData=n;for(var l=e[1].value.data,f=(l.hasPermi,l.total,Object(i["a"])(l,u)),m=[],h=0,p=["逃费","人工取消"];h<p.length;h++){var g=p[h];m.push({name:g,value:f[g]})}t.abnormalOrderData=m,t.setOptions()})).finally((function(){t.$bus.$emit("screenDataLoaded")}))},getPercent:function(t,e){var r=t.reduce((function(t,e){return t+e.value}),0);if(!r)return 0;var a=t.find((function(t){return t.name===e})).value,n=a/r*100;return Math.floor(100*n)/100},setOptions:function(){var t=this;this.chart.setOption({grid:{top:30,bottom:30,left:0,right:0},tooltip:{scale:.5},legend:[{orient:"vertical",right:12,top:"middle",data:this.abnormalOrderData.map((function(t){return t.name})),textStyle:{color:"#fff",fontSize:12},itemWidth:8,itemHeight:8,icon:"circle",itemGap:4,formatter:function(e){var r=t.getPercent(t.abnormalOrderData,e);return"".concat(e," ").concat(r,"%")}},{orient:"vertical",left:12,top:"middle",data:this.normalOrderData.map((function(t){return t.name})),formatter:function(e){var r=t.getPercent(t.normalOrderData,e);return"".concat(e," ").concat(r,"%")},textStyle:{color:"#fff",fontSize:12},itemWidth:8,itemHeight:8,icon:"circle",itemGap:4}],series:[{name:"异常订单占比",type:"pie",radius:["35%","50%"],data:this.abnormalOrderData,label:{show:!1},color:["#F27A76","#FFD866"],emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)",scaleSize:1.2,scale:!0}},{name:"正常订单占比",type:"pie",radius:["55%","70%"],label:{show:!1},emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)",scaleSize:2,scale:!0},color:["#45A5F6","#80C269","#EA68A1","#E5E5E5"],data:this.normalOrderData}]})}}},l=d,f=(r("8747"),r("2877")),m=Object(f["a"])(l,a,n,!1,null,"15483e75",null);e["default"]=m.exports},"81e7":function(t,e,r){},"820e":function(t,e,r){"use strict";var a=r("23e7"),n=r("c65b"),i=r("59ed"),o=r("f069"),s=r("e667"),c=r("2266");a({target:"Promise",stat:!0},{allSettled:function(t){var e=this,r=o.f(e),a=r.resolve,u=r.reject,d=s((function(){var r=i(e.resolve),o=[],s=0,u=1;c(t,(function(t){var i=s++,c=!1;u++,n(r,e,t).then((function(t){c||(c=!0,o[i]={status:"fulfilled",value:t},--u||a(o))}),(function(t){c||(c=!0,o[i]={status:"rejected",reason:t},--u||a(o))}))})),--u||a(o)}));return d.error&&u(d.value),r.promise}})},8747:function(t,e,r){"use strict";r("81e7")}}]);