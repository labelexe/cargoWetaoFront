(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{347:function(t,e,r){var content=r(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(145).default)("19fb48e0",content,!0,{sourceMap:!1})},366:function(t,e,r){"use strict";var n=r(2),c=r(4),o=r(54),l=r(215),f=r(214),d=r(3),v=RangeError,y=String,C=Math.floor,x=c(f),k=c("".slice),m=c(1..toFixed),R=function(t,e,r){return 0===e?r:e%2==1?R(t,e-1,r*t):R(t*t,e/2,r)},B=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=C(n/1e7)},h=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=C(r/t),r=r%t*1e7},w=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=y(data[t]);s=""===s?e:s+x("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!d((function(){m({})}))},{toFixed:function(t){var e,r,n,c,f=l(this),d=o(t),data=[0,0,0,0,0,0],C="",m="0";if(d<0||d>20)throw new v("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return y(f);if(f<0&&(C="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*R(2,69,1))-69)<0?f*R(2,-e,1):f/R(2,e,1),r*=4503599627370496,(e=52-e)>0){for(B(data,0,r),n=d;n>=7;)B(data,1e7,0),n-=7;for(B(data,R(10,n,1),0),n=e-1;n>=23;)h(data,1<<23),n-=23;h(data,1<<n),B(data,1,1),h(data,2),m=w(data)}else B(data,0,r),B(data,1<<-e,0),m=w(data)+x("0",d);return m=d>0?C+((c=m.length)<=d?"0."+x("0",d-c)+m:k(m,0,c-d)+"."+k(m,c-d)):C+m}})},367:function(t,e,r){"use strict";r(347)},368:function(t,e,r){var n=r(144)((function(i){return i[1]}));n.push([t.i,'.CurrencyRatesBlock[data-v-72d2cc48]{background:transparent;border:1px solid #f3f3f3;border-radius:10px;padding:16px 20px}.CurrencyRatesBlock .CurrencyRatesBlockWrapper[data-v-72d2cc48]{align-items:center;display:flex;flex-flow:row wrap}.CurrencyRatesBlock .CurrencyRatesBlockHeading[data-v-72d2cc48]{display:flex;flex:1;justify-content:flex-start}.CurrencyRatesBlock .CurrencyRatesBlockHeading .CurrencyRatesBlockHeadingTitle[data-v-72d2cc48]{color:var(--text-accent-color);font-family:"Roboto",sans-serif;font-size:14px;font-style:normal;font-weight:600;letter-spacing:-.28px;line-height:normal;text-align:center}.CurrencyRatesBlock .CurrencyRatesBlockCurList[data-v-72d2cc48]{display:flex;flex:auto;flex-flow:row wrap;justify-content:flex-end}.BlockCurListItemWrapper[data-v-72d2cc48]{display:flex}.BlockCurListItem[data-v-72d2cc48]{color:var(--text-second-color);font-family:"Roboto",sans-serif;font-size:14px;font-style:normal;font-weight:500;letter-spacing:-.28px;line-height:normal;text-align:center}.BlockCurListItemSym[data-v-72d2cc48]{margin-left:16px}',""]),n.locals={},t.exports=n},395:function(t,e,r){"use strict";r.r(e);var n=r(5),c=(r(22),r(366),{name:"CurrencyRateBlock",data:function(){return{currencyRates:[]}},methods:{rounded:function(t){return+t.toFixed(2)},fetchCurrencyData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/v1/payment/currency/rate");case 2:r=e.sent,n=r.result,t.currencyRates=n;case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.fetchCurrencyData()}}),o=(r(367),r(53)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"CurrencyRatesBlock"},[e("div",{staticClass:"CurrencyRatesBlockWrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"CurrencyRatesBlockCurList"},t._l(t.currencyRates,(function(r){return e("div",{staticClass:"BlockCurListItem"},[e("div",{staticClass:"BlockCurListItemWrapper"},[e("div",{staticClass:"BlockCurListItemSym"},[t._v("\n            "+t._s(r.currency_sym)+"\n          ")]),t._v(" "),e("div",{staticClass:"BlockCurListItemValue"},[t._v("\n            "+t._s(t.rounded(r.Value))+"\n          ")])])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"CurrencyRatesBlockHeading"},[t("div",{staticClass:"CurrencyRatesBlockHeadingTitle"},[this._v("\n        Курс валют\n      ")])])}],!1,null,"72d2cc48",null);e.default=component.exports}}]);