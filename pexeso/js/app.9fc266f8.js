(function(t){function s(s){for(var e,o,n=s[0],c=s[1],l=s[2],h=0,d=[];h<n.length;h++)o=n[h],r[o]&&d.push(r[o][0]),r[o]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);u&&u(s);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,s=0;s<a.length;s++){for(var i=a[s],e=!0,n=1;n<i.length;n++){var c=i[n];0!==r[c]&&(e=!1)}e&&(a.splice(s--,1),t=o(o.s=i[0]))}return t}var e={},r={app:0},a=[];function o(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,s,i){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(i,e,function(s){return t[s]}.bind(null,e));return i},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=s,n=n.slice();for(var l=0;l<n.length;l++)s(n[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,s,i){t.exports=i("56d7")},"0fea":function(t,s,i){},2757:function(t,s,i){"use strict";var e=i("0fea"),r=i.n(e);r.a},"56d7":function(t,s,i){"use strict";i.r(s);i("cadf"),i("551c"),i("097d");var e=i("2b0e"),r=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("div",{staticClass:"app row justify-content-around"},[i("div",{staticClass:" col-xl-3"},[i("app-cartcount",{attrs:{count:t.count,formtime:t.formtime,timres:t.timres}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.btnleftshow,expression:"btnleftshow"}]},[i("button",{staticClass:"btn-restart btn-left",on:{click:t.restart}},[t._v(" \n                  Сыграть еще ")])])],1),i("div",{staticClass:"game col-xl-7 row  justify-content-around"},t._l(t.cardclass,function(s,e){return i("div",{key:e,staticClass:"block col-2"},[i("div",{staticClass:"contblock"},[i("div",{staticClass:"shirt",on:{click:function(s){t.onClick(s,e)}}}),i("transition",{attrs:{css:!1},on:{enter:t.enter,leave:t.leave,"after-enter":t.afterEnter}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.showlist[e],expression:"showlist[index]"}],staticClass:"cart",class:t.cardclass[e]})])],1)])}))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.modalshow,expression:"modalshow"}],staticClass:"modal"},[i("transition",{attrs:{"enter-active-class":"animated rubberBand"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.modalshow,expression:"modalshow"}],staticClass:"modal-window"},[i("h2",[t._v("Ваши результаты!")]),i("hr"),t._l(t.timres,function(s,e){return i("p",{key:e},[t._v("Время игры №"+t._s(e+1)+": "+t._s(s))])}),i("div",{staticClass:"close",on:{click:t.btnleft}},[i("span"),i("span")]),i("hr"),i("button",{staticClass:"btn-restart",on:{click:t.restart}},[t._v(" \n                Сыграть еще ")])],2)])],1)])},a=[],o=(i("55dd"),function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),i("div",{staticClass:"cardinfo"},[i("p",{staticClass:"p"},[t._v("Осталось карт: "+t._s(t.count))]),i("p",[t._v("Время: "+t._s(t.formtime))]),t._l(t.timres,function(s,e){return i("p",{key:e},[t._v("Время игры №"+t._s(e+1)+": "+t._s(s))])})],2)])}),n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"namegame"},[i("h2",[t._v("Пексесо")])])}],c={name:"Cartcount",props:["count","formtime","timres"],data:function(){return{tim:0}},computed:{}},l=c,u=(i("d89d"),i("2877")),h=Object(u["a"])(l,o,n,!1,null,"ee18cd4c",null);h.options.__file="Cartcount.vue";var d=h.exports,f={name:"cart",components:{AppCartcount:d},data:function(){return{cards:10,count:20,cardclass:[],cnt:0,obj:[{first:"",last:""}],cardlist:["j","b2","b3","b4","b5","b6","b7","b8","b9","b10","bv","bd","bk","bt","c2","c3","c4","c5","c6","c7","c8","c9","c10","cv","cd","ck","ct","p2","p3","p4","p5","p6","p7","p8","p9","p10","pv","pd","pk","pt","t2","t3","t4","t5","t6","t7","t8","t9","t10","tv","td","tk","tt"],cardlistcopy:[],showlist:[],time:0,timres:[],timestart:!1,formtime:"00:00",stoptimer:"",modalshow:!1,btnleftshow:!1}},created:function(){for(var t=0;t<this.cardlist.length;t++)this.cardlistcopy.push(this.cardlist[t]);for(var s=0;s<this.cards;s++){var i=p(0,this.cardlistcopy.length,!1);this.cardclass.push(this.cardlistcopy[i]),this.cardclass.push(this.cardlistcopy[i]),this.cardlistcopy.splice(i,1),this.showlist.push(!1),this.showlist.push(!1)}this.cardclass.sort(v)},methods:{btnleft:function(){this.modalshow=!1,this.btnleftshow=!0},restart:function(){var t=this;this.cardclass=[],this.cardlistcopy=[],setTimeout(function(){for(var s=0;s<t.cardlist.length;s++)t.cardlistcopy.push(t.cardlist[s]);for(var i=0;i<t.cards;i++){var e=p(0,t.cardlistcopy.length,!1);t.cardclass.push(t.cardlistcopy[e]),t.cardclass.push(t.cardlistcopy[e]),t.cardlistcopy.splice(e,1),t.showlist.push(!1),t.showlist.push(!1)}t.cardclass.sort(v),t.modalshow=!1,t.btnleftshow=!1,t.count=20},0)},enter:function(t,s){var i=this;this.obj[0].first.firstChild.classList.add("shirtactiv"),setTimeout(function(){i.obj[0].first.lastChild.classList.add("cartactiv")},50),""!=this.obj[0].last&&(this.obj[0].last.firstChild.classList.add("shirtactiv"),setTimeout(function(){i.obj[0].last.lastChild.classList.add("cartactiv")},50)),s()},afterEnter:function(t){var s=this;this.cnt<2&&setTimeout(function(){if(""!=s.obj[0].last){s.obj[0].first.firstChild.classList.remove("shirtactiv"),s.obj[0].first.lastChild.classList.remove("cartactiv"),s.obj[0].last.firstChild.classList.remove("shirtactiv"),s.obj[0].last.lastChild.classList.remove("cartactiv"),s.obj[0].first.lastChild.className==s.obj[0].last.lastChild.className&&(s.obj[0].first.remove(),s.obj[0].last.remove(),s.count-=2,0==s.count&&(s.timres.push(s.formtime),s.time=0,s.formtime="00:00",s.timestart=!1,s.modalshow=!0,clearTimeout(s.stoptimer)));for(var t=0;t<s.showlist.length;t++)s.showlist[t]&&s.$set(s.showlist,t,!1)}s.cnt++},1e3)},leave:function(t,s){this.cnt=0,this.obj[0].first="",this.obj[0].last=""},onClick:function(t,s){var i=this;this.timestart||(this.stoptimer=setInterval(function(){i.time++,i.formtime=moment(1e3*i.time).format("mm:ss")},1e3),this.timestart=!0),0==this.cnt&&""==this.obj[0].first&&""==this.obj[0].last&&(this.$set(this.showlist,s,!0),this.obj[0].first=t.target.parentNode),1==this.cnt&&""!=this.obj[0].first&&""==this.obj[0].last&&(this.$set(this.showlist,s,!0),this.obj[0].last=t.target.parentNode)}}};function p(t,s,i){var e=t+Math.random()*(s+1-t);return e=i?e.toFixed(4):Math.floor(e),e}function v(){return Math.random()-.5}var m=f,b=(i("2757"),Object(u["a"])(m,r,a,!1,null,null,null));b.options.__file="App.vue";var w=b.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(w)}}).$mount("#app")},d89d:function(t,s,i){"use strict";var e=i("f472"),r=i.n(e);r.a},f472:function(t,s,i){}});
//# sourceMappingURL=app.9fc266f8.js.map