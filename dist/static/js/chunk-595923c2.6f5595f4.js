(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595923c2"],{"1e55":function(t,e,a){"use strict";a.d(e,"h",(function(){return g})),a.d(e,"c",(function(){return h})),a.d(e,"f",(function(){return p})),a.d(e,"m",(function(){return y})),a.d(e,"a",(function(){return v})),a.d(e,"o",(function(){return b})),a.d(e,"j",(function(){return D})),a.d(e,"n",(function(){return k})),a.d(e,"b",(function(){return S})),a.d(e,"q",(function(){return L})),a.d(e,"p",(function(){return I})),a.d(e,"g",(function(){return j})),a.d(e,"d",(function(){return w})),a.d(e,"k",(function(){return O})),a.d(e,"i",(function(){return x})),a.d(e,"l",(function(){return P})),a.d(e,"e",(function(){return T})),a.d(e,"r",(function(){return z}));a("a15b"),a("c7eb"),a("1da1");var r=a("53ca"),n=(a("caad"),a("fb6a"),a("e9c4"),a("b64b"),a("d3b7"),a("2532"),a("bc3a")),i=a.n(n),o=a("5c96"),s=a("4360"),u=(a("5f87"),a("81ae")),c=a("c38a"),d=a("63f0"),l=(a("21a6"),{show:!1});i.a.defaults.headers["Content-Type"]="application/json;charset=utf-8";var m=i.a.create({baseURL:"http://sunkoda.us.to:9002",timeout:1e4});m.interceptors.request.use((function(t){var e=!1===(t.headers||{}).isToken,a=!1===(t.headers||{}).repeatSubmit,n="eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjZhMGMzMGU5LWU5YzAtNDk4Ni1iZTRjLTk0NzRhMDM3OGM4MyJ9.xpwt1tZG44qGYW1NA-55T7kAR53lR6-DsTTXY2zQzzCciBRZml5EZrACcGkJYVVp7m0JgI57sdSCNUJkzd6NJg";if(n&&!e&&(t.headers["Authorization"]="Bearer "+n),"get"===t.method&&t.params){var i=t.url+"?"+Object(c["j"])(t.params);i=i.slice(0,-1),t.params={},t.url=i}if(!a&&("post"===t.method||"put"===t.method)){var o={url:t.url,data:"object"===Object(r["a"])(t.data)?JSON.stringify(t.data):t.data,time:(new Date).getTime()},s=d["a"].session.getJSON("sessionObj");if(void 0===s||null===s||""===s)d["a"].session.setJSON("sessionObj",o);else{var u=s.url,l=s.data,m=s.time,f=1e3;if(l===o.data&&o.time-m<f&&u===o.url){var g="数据正在处理，请勿重复提交";return console.warn("[".concat(u,"]: ")+g),Promise.reject(new Error(g))}d["a"].session.setJSON("sessionObj",o)}}return t}),(function(t){console.log(t),Promise.reject(t)})),m.interceptors.response.use((function(t){var e=t.data.code||200,a=u["a"][e]||t.data.msg||u["a"]["default"];return"blob"===t.request.responseType||"arraybuffer"===t.request.responseType?t.data:401===e?(l.show||(l.show=!0,o["MessageBox"].confirm("登录状态已过期，您可以继续留在该页面，或者重新登录","系统提示",{confirmButtonText:"重新登录",cancelButtonText:"取消",type:"warning"}).then((function(){l.show=!1,s["a"].dispatch("LogOut").then((function(){location.href="/index"}))})).catch((function(){l.show=!1}))),Promise.reject("无效的会话，或者会话已过期，请重新登录。")):500===e?(Object(o["Message"])({message:a,type:"error"}),Promise.reject(new Error(a))):200!==e?(o["Notification"].error({title:a}),Promise.reject("error")):t.data}),(function(t){console.log("err"+t);var e=t.message;return"Network Error"==e?e="后端接口连接异常":e.includes("timeout")?e="系统接口请求超时":e.includes("Request failed with status code")&&(e="系统接口"+e.substr(e.length-3)+"异常"),Object(o["Message"])({message:e,type:"error",duration:5e3}),Promise.reject(t)}));var f=m,g=function(){return f({url:"/system/StatisticalData/getMapDataList",method:"get"})};function h(t){return f({url:"/system/StatisticalData/getClockInTodayTollCollector",method:"get",params:{deptIds:t}})}function p(t){return f({url:"/system/StatisticalData/getImg",method:"get",params:{imgId:t}})}function y(t){return f({url:"/system/StatisticalData/getPreferentialOrderTypeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function v(t){return f({url:"/system/StatisticalData/getAbnormalOrderTypeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function b(t){return f({url:"/system/StatisticalData/getSourceOfIncomeProportion",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function D(t){return f({url:"/system/StatisticalData/getParkingOrderIncomeTotalByDeptId",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function k(t){return f({url:"/system/StatisticalData/getReceiveRecord",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function S(t){return f({url:"/system/StatisticalData/getAccessRecord",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function L(t){return f({url:"/system/StatisticalData/getWarningOrder",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function I(t){return f({url:"/system/StatisticalData/getWarningLock",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function j(t){return f({url:"/system/StatisticalData/getOrderRevenueLineChart",method:"get",params:{parkingLotIds:null===t||void 0===t?void 0:t.join(",")}})}function w(){return f({url:"/system/StatisticalData/getDeptRelatedInfo",method:"get"})}function O(t){var e="all"==t?"/system/StatisticalData/getParkingOrderTypePieChart":"/system/StatisticalData/getParkingOrderTypePieChart?parkingLotIds=".concat(t);return f({url:e,method:"get"})}function x(t){var e="all"==t?"/system/StatisticalData/getParkingOrderDurationPercentagePieChart":"/system/StatisticalData/getParkingOrderDurationPercentagePieChart?parkingLotIds=".concat(t);return f({url:e,method:"get"})}function P(t){var e="all"==t?"/system/StatisticalData/getParkingRelatedInfo":"/system/StatisticalData/getParkingRelatedInfo?parkingLotIds=".concat(t);return f({url:e,method:"get"})}function T(){return f({url:"/system/StatisticalData/getDeptRelatedInfo",method:"get"})}function z(t){var e="all"==t?"/system/StatisticalData/todayYesterdayDataComparison":"/system/StatisticalData/todayYesterdayDataComparison?parkingLotIds=".concat(t);return f({url:e,method:"get"})}},"29b3":function(t,e,a){"use strict";a("ba19")},"3dfc":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"chart",staticClass:"page-view"})},n=[],i=(a("d3b7"),a("313e")),o=a("1e55"),s={name:"RevenueProportionChart",props:{parkingLotIds:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,xData:[],yAxis:[]}},watch:{parkingLotIds:{handler:function(t,e){this.requestData()},deep:!0}},mounted:function(){this.initChart(),this.requestData()},beforeUnmount:function(){this.chart&&(window.removeEventListener("resize",this.chart.resize),window.removeEventListener("dataScreenResize",this.chart.resize),this.chart.dispose(),this.chart=null)},methods:{requestData:function(){var t=this;Object(o["g"])(this.parkingLotIds).then((function(e){var a=e.data,r=a.xData,n=a.yAxis;t.xData=r,t.yAxis=n,t.setOptions()})).finally((function(){t.$bus.$emit("screenDataLoaded")}))},initChart:function(){this.chart=i["init"](this.$refs.chart,null,{renderer:"svg",useDirtyRect:!1}),window.addEventListener("resize",this.chart.resize),window.addEventListener("dataScreenResize",this.chart.resize)},setOptions:function(){this.chart.setOption({grid:{top:40,bottom:14,left:16,right:54,containLabel:!0},dataZoom:{type:"inside",filterMode:"none",xAxisIndex:[0],startValue:0,endValue:24},xAxis:{type:"category",data:this.xData,name:"时间",axisLabel:{color:"#fff"}},tooltip:{trigger:"axis"},yAxis:{type:"value",name:"总收入",nameTextStyle:{},symbolSize:0,splitLine:{lineStyle:{type:"dashed",color:"#606266"}},axisLine:{show:!1},axisLabel:{color:"#fff"}},series:[{color:"#46A5F7",data:this.yAxis,type:"line",symbolSize:0}]})}}},u=s,c=(a("29b3"),a("2877")),d=Object(c["a"])(u,r,n,!1,null,"1b449420",null);e["default"]=d.exports},ba19:function(t,e,a){}}]);