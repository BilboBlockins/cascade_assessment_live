(function(t){function e(e){for(var a,i,s=e[0],o=e[1],l=e[2],d=0,b=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2201:function(t,e,n){},2744:function(t,e,n){},3135:function(t,e,n){"use strict";n("ea0c")},"548a":function(t,e,n){"use strict";n("2744")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"container"};function r(t,e,n,r,i,s){var o=Object(a["m"])("top-bar"),l=Object(a["m"])("user-statement-card");return Object(a["h"])(),Object(a["d"])(a["a"],null,[Object(a["f"])(o),Object(a["e"])("div",c,[Object(a["f"])(l,{user:t.$store.state.user},null,8,["user"])])],64)}n("99af");var i={class:"user-card"},s={class:"bold"},o={class:"row-between"},l={class:"welcome"},u={class:"row-right"},d={class:"row-right"},b={key:0},O=Object(a["e"])("div",{class:"break-line"},null,-1),j=Object(a["e"])("div",{class:"bold heading"},"Pending Transactions:",-1),m={key:0},p=Object(a["e"])("div",{class:"break-line"},null,-1),f={key:1},T=Object(a["e"])("div",{class:"bold heading"},"Completed Transactions:",-1),h={key:0};function A(t,e,n,c,r,A){var v=Object(a["m"])("transaction-card");return Object(a["h"])(),Object(a["d"])("div",i,[Object(a["e"])("div",s,[Object(a["e"])("div",o,[Object(a["e"])("div",l,Object(a["n"])("Welcome ".concat(n.user.firstName," ").concat(n.user.lastName,"!")),1),Object(a["e"])("div",null,"Member Id: "+Object(a["n"])(n.user.userId),1)]),Object(a["e"])("div",u,"Account #: "+Object(a["n"])(n.user.accountNumber),1),Object(a["e"])("div",d,"Account Type: "+Object(a["n"])(n.user.accountType),1),Object(a["e"])("div",null,"Statement Date: "+Object(a["n"])(r.statementDate),1),Object(a["e"])("div",null,"Statement Balance: "+Object(a["n"])(r.statementBalance),1),Object(a["e"])("div",null,"Current Balance: "+Object(a["n"])(r.currentBalance),1)]),t.$store.state.statement.NotSettled.length?(Object(a["h"])(),Object(a["d"])("div",b,[O,j,(Object(a["h"])(!0),Object(a["d"])(a["a"],null,Object(a["l"])(t.$store.state.statement.NotSettled,(function(t){return Object(a["h"])(),Object(a["d"])("div",{key:t.TransactionId},[t.Billed?Object(a["c"])("",!0):(Object(a["h"])(),Object(a["d"])("div",m,[Object(a["f"])(v,{transaction:t},null,8,["transaction"])]))])})),128))])):Object(a["c"])("",!0),p,t.$store.state.statement.Transactions.length?(Object(a["h"])(),Object(a["d"])("div",f,[T,(Object(a["h"])(!0),Object(a["d"])(a["a"],null,Object(a["l"])(t.$store.state.statement.Transactions,(function(t){return Object(a["h"])(),Object(a["d"])("div",{key:t.TransactionId},[t.Billed?(Object(a["h"])(),Object(a["d"])("div",h,[Object(a["f"])(v,{transaction:t},null,8,["transaction"])])):Object(a["c"])("",!0)])})),128))])):Object(a["c"])("",!0)])}n("ac1f"),n("5319"),n("d3b7"),n("159b");var v=function(t){return Object(a["j"])("data-v-bfea0524"),t=t(),Object(a["i"])(),t},g={class:"transaction"},y=v((function(){return Object(a["e"])("div",{class:"spacer"},null,-1)})),S={class:"row-right pad"},B={class:"pad"},D={class:"bold"},C={class:"pad"},E={key:0,class:"row-between"},I={class:"bold"},w={key:1},N={class:"bold"},W=v((function(){return Object(a["e"])("div",{class:"spacer"},null,-1)}));function F(t,e,n,c,r,i){return Object(a["h"])(),Object(a["d"])("div",g,[y,Object(a["e"])("div",S,Object(a["n"])(i.getReadableDateString(n.transaction.TransactionDate)),1),Object(a["e"])("div",B,[Object(a["e"])("div",D,Object(a["n"])(n.transaction.MerchantName)+" - "+Object(a["n"])(n.transaction.MerchantId),1),Object(a["e"])("div",null,"Type: "+Object(a["n"])(n.transaction.TransactionTypeId),1),Object(a["e"])("div",null,Object(a["n"])(n.transaction.Description),1)]),Object(a["e"])("div",C,[n.transaction.Billed?(Object(a["h"])(),Object(a["d"])("div",w,[Object(a["e"])("div",N,"Amount: "+Object(a["n"])(i.getCurrencyString(n.transaction.Amount)),1)])):(Object(a["h"])(),Object(a["d"])("div",E,[Object(a["e"])("div",I,"Amount: "+Object(a["n"])(i.getCurrencyString(n.transaction.Amount)),1),Object(a["e"])("button",{class:"pay-btn",onClick:e[0]||(e[0]=function(t){return i.payInstantly()})},"PAY INSTANTLY")])),W])])}var M={props:{transaction:{type:Object,required:!0}},methods:{getReadableDateString:function(t){var e={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"};return new Date(t).toLocaleDateString("en-US",e)},getCurrencyString:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},payInstantly:function(){this.$store.dispatch("payPending",this.transaction)}}},x=(n("659a"),n("6b0d")),U=n.n(x);const k=U()(M,[["render",F],["__scopeId","data-v-bfea0524"]]);var V=k,J={components:{TransactionCard:V},props:{user:{type:Object,required:!0}},data:function(){return{statementDate:"",statementBalance:"",currentBalance:""}},created:function(){var t=this.getOldestTransaction();this.statementBalance=this.getBalance(t),this.statementDate=this.getDate(t),this.currentBalance=this.getCurrentBalance(),this.$store.dispatch("setUserBalances",{statementBalance:this.statementBalance,currentBalance:this.currentBalance})},updated:function(){this.currentBalance=this.getCurrentBalance()},methods:{getDate:function(t){return new Date(t.TransactionDate).toLocaleDateString()},getBalance:function(t){return this.getCurrencyString(t.AvailableBalance)},getCurrentBalance:function(){var t=parseFloat(this.statementBalance.replace("$","")),e=t,n=this.$store.state.statement.Transactions;return n.forEach((function(t){t.Billed&&(e-=parseFloat(t.Amount))})),this.getCurrencyString(e)},getCurrencyString:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},getOldestTransaction:function(){var t=this.$store.state.statement.Transactions;if(t.length){for(var e=new Date(t[0].TransactionDate),n=t[0],a=0;a<t.length;a++)new Date(t[a].TransactionDate)<e&&(e=new Date(t[a].TransactionDate),n=t[a]);return n}return null}}};n("548a");const G=U()(J,[["render",A]]);var Q=G,H=n("cf05"),L=n.n(H),P=function(t){return Object(a["j"])("data-v-08347afe"),t=t(),Object(a["i"])(),t},K={class:"nav-bar"},q=P((function(){return Object(a["e"])("img",{alt:"Cascade logo",src:L.a},null,-1)})),Z=[q];function R(t,e){return Object(a["h"])(),Object(a["d"])("div",K,Z)}n("3135");const Y={},z=U()(Y,[["render",R],["__scopeId","data-v-08347afe"]]);var X=z,_={components:{TopBar:X,UserStatementCard:Q}};n("d816");const $=U()(_,[["render",r]]);var tt=$,et=n("5530"),nt=(n("4de4"),n("d81d"),n("5502")),at={Statement:{Transactions:[{OriginalTraceAuditNo:null,AccountNumber:"123456789",TransactionTypeId:"Debit",TransactionDate:"2020-08-28T03:36:33",BusinessDate:"2020-08-28T03:36:33",AvailableBalance:400,Amount:12.08,Description:"Other: POS Transaction",Billed:!1,MerchantName:"Good Buy",MerchantId:"GbLV-01",TransactionId:1},{OriginalTraceAuditNo:null,AccountNumber:"123456789",TransactionTypeId:"Debit",TransactionDate:"2020-08-28T03:50:01",BusinessDate:"2020-08-28T03:50:01",AvailableBalance:400,Amount:129.74,Description:"Other: POS Transaction",Billed:!1,MerchantName:"Wally World",MerchantId:"WWV-000-1220",TransactionId:2},{OriginalTraceAuditNo:null,AccountNumber:"123456789",TransactionTypeId:"Debit",TransactionDate:"2020-08-28T06:43:12",BusinessDate:"2020-08-28T06:43:12",AvailableBalance:400,Amount:8.08,Description:"Other: POS Transaction",Billed:!0,MerchantName:"Quickly Gas Stop",MerchantId:"QGS-01",TransactionId:3}],NotSettled:[{OriginalTraceAuditNo:null,AccountNumber:"123456789",TransactionTypeId:"Debit",TransactionDate:"2020-08-28T03:36:33",BusinessDate:"2020-08-28T03:36:33",AvailableBalance:400,Amount:12.08,Description:"Other: POS Transaction",MerchantName:"Good Buy",MerchantId:"GbLV-01",TransactionId:1},{OriginalTraceAuditNo:null,AccountNumber:"123456789",TransactionTypeId:"Debit",TransactionDate:"2020-08-28T03:50:01",BusinessDate:"2020-08-28T03:50:01",AvailableBalance:400,Amount:129.74,Description:"Other: POS Transaction",MerchantName:"Wally World",MerchantId:"WWV-000-1220",TransactionId:2}]}},ct={userId:876543210,firstName:"Brett",lastName:"Hiebert",email:"abretthiebert@gmail.com",age:34,accountType:"Checking",accountNumber:123456789,statementBalance:"$400.00",currentBalance:"$400.00"},rt=Object(nt["a"])({state:{statement:at.Statement,user:ct},mutations:{UPDATE_STATEMENT:function(t,e){t.statement=e},UPDATE_USER:function(t,e){t.user=e}},actions:{setUserBalances:function(t,e){var n=t.state.user,a=Object(et["a"])(Object(et["a"])({},n),e);t.commit("UPDATE_USER",a)},payPending:function(t,e){var n=t.state.statement,a=n.NotSettled,c=a.filter((function(t){return t.TransactionId!==e.TransactionId}));n.NotSettled=c;var r=n.Transactions.map((function(t){return t.TransactionId===e.TransactionId?Object(et["a"])(Object(et["a"])({},t),{},{Billed:!0}):t}));n.Transactions=r,t.commit("UPDATE_STATEMENT",n)}}});Object(a["b"])(tt).use(rt).mount("#app")},"659a":function(t,e,n){"use strict";n("2201")},cf05:function(t,e){t.exports="data:image/png;base64,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"},d816:function(t,e,n){"use strict";n("f721")},ea0c:function(t,e,n){},f721:function(t,e,n){}});
//# sourceMappingURL=app.996ea130.js.map