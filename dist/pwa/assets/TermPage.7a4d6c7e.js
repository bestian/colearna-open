import{Q as D}from"./QPage.5dd436c4.js";import{u as l}from"./use-meta.0abbad3f.js";import{_ as p,d as n,r as B,v as s,D as o,A as a,E as e,G as t,y as u}from"./index.2358dd35.js";import"./render.3b4af165.js";const c=n({name:"TermPage",props:["uid","me","users","user","email","photoURL","isLogout","isInApp"],setup(){const F=B([]);l({title:"\u4F7F\u7528\u8005\u540C\u610F\u66F8",noscript:{default:"This is content for browsers with no JS (or disabled JS)"}});const C=B({totalCount:1200}),E=B(0);return{meta:C,step:E,show:F}},mounted(){},methods:{go(){this.$nextTick(()=>{this.step++})},loginGoogle(){this.$emit("loginGoogle")},logout(){this.$emit("logout")}}}),d=F=>(e("data-v-1005c23a"),F=F(),t(),F),r=d(()=>u("div",{class:"row long-padded"},[u("div",{class:"col-12"},[u("h6",{class:"text-center text-black fluid"}," \u4F7F\u7528\u8005\u540C\u610F\u66F8(\u65BD\u5DE5\u4E2D\uFF0C\u5F85\u4FEE\u6539\uFF0C\u91D1\u6D41\u7684\u90E8\u5206\u9700\u8981\u62FF\u6389) "),u("p",null," \u672C\u4F7F\u7528\u8005\u540C\u610F\u66F8\uFF08\u4E0B\u7A31\u300C\u672C\u540C\u610F\u66F8\u300D\uFF09\u69CB\u6210\u4F7F\u7528\u8005\uFF08\u4E0B\u7A31\u300C\u60A8\u300D\uFF09\u4F7F\u7528\u5171\u5B78\u5CF6\u80A1\u4EFD\u6709\u9650\u516C\u53F8 \uFF08\u4E0B\u7A31\u300C\u672C\u516C\u53F8\u300D\uFF09\u63D0\u4F9B\u4E4B\u300C\u7DDA\u4E0B\u6559\u5B78\u8AB2\u7A0B\u4E4B\u7DB2\u969B\u7DB2\u8DEF\u5A92\u5408\u300D\u670D\u52D9\u4E4B\u6B0A\u5229\u7FA9\u52D9\u95DC\u4FC2\uFF0C\u656C\u8ACB\u4ED4\u7D30\u95B1\u8B80\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C1\u689D\uFF08\u5408\u7D04\u5BE9\u95B1\u671F\u9593\u53CA\u57FA\u672C\u8CC7\u6599\uFF09"),u("p",null," \u672C\u516C\u53F8\u63D0\u4F9B\u4E4B\u300C\u7DDA\u4E0B\u6559\u5B78\u8AB2\u7A0B\u4E4B\u7DB2\u969B\u7DB2\u8DEF\u5A92\u5408\u300D\u670D\u52D9\uFF0C\u4FC2\u6307\u672C\u516C\u53F8\u6388\u6B0A\u60A8\u65BC\u672C\u516C\u53F8\u7DB2\u7AD9\uFF08\u7DB2\u5740\uFF1Awww.colearna.co\uFF0C\u4E0B\u7A31\u300C\u672C\u7DB2\u7AD9\u300D\uFF09\u53CA\u5171\u5B78\u5CF6\uFF08Colearna\uFF09APP\uFF08\u4E0B\u7A31\u300C\u672C\u8EDF\u9AD4\u300D\uFF09\uFF08\u672C\u7DB2\u7AD9\u53CA\u672C\u8EDF\u9AD4\uFF0C\u4E0B\u5408\u7A31\u300C\u672C\u5E73\u53F0\u300D\uFF09\uFF0C\u4F7F\u7528\u672C\u516C\u53F8\u85C9\u7DB2\u969B\u7DB2\u8DEF\u63D0\u4F9B\u4E4B\u7DDA\u4E0B\u6559\u5B78\uFF08\u9762\u5C0D\u9762\u6559\u5B78\uFF09\u5A92\u5408\u670D\u52D9\u6216\u5176\u4ED6\u76F8\u95DC\u670D\u52D9\uFF08\u4E0B\u7A31\u300C\u672C\u670D\u52D9\u300D\uFF09\uFF0C\u5C0B\u627E\u7B26\u5408\u60A8\u5B78\u7FD2\u9700\u6C42\u4E4B\u8AB2\u7A0B\u63D0\u4F9B\u8005\uFF08\u4E0B\u7A31\u300C\u8001\u5E2B\u300D\uFF09\uFF0C\u4E26\u7531\u60A8\u8207\u8001\u5E2B\u9054\u6210\u7DDA\u4E0B\u6559\u5B78\u8AB2\u7A0B\u4E4B\u670D\u52D9\u5354\u8B70\uFF08\u4E0B\u7A31\u300C\u6559\u5B78\u670D\u52D9\u5354\u8B70\u300D\uFF09\u3002\u95DC\u65BC\u672C\u670D\u52D9\u4E4B\u6B0A\u5229\u7FA9\u52D9\uFF0C\u6089\u4F9D\u672C\u540C\u610F\u66F8\u689D\u6B3E\u8A02\u5B9A\u4E4B\u3002 "),u("p",null,"\u7ACB\u7D04\u4EBA\uFF1A"),u("p",null," \u60A8\uFF1A\u5373\u65BC\u7533\u8ACB\u672C\u670D\u52D9\u6642\u52FE\u9078\u300C\u6211\u5DF2\u95B1\u8B80\u4E26\u540C\u610F\u672C\u4F7F\u7528\u8005\u540C\u610F\u66F8\u4E4B\u689D\u6B3E\u300D\u8005\uFF0C\u5373\u8996\u70BA\u60A8\u5DF2\u5BE9\u95B1\u672C\u540C\u610F\u66F8\uFF0C\u4E26\u540C\u610F\u8207\u672C\u516C\u53F8\u7DE0\u7D04\u3002\u5018\u82E5\u60A8\u4E0D\u5177\u6709\u5B8C\u5168\u884C\u70BA\u80FD\u529B\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\u672A\u6EFF\u5341\u516B\u6B72\u4E4B\u672A\u6210\u5E74\u4EBA\uFF09\uFF0C\u8ACB\u65BC\u4F7F\u7528\u672C\u670D\u52D9\u524D\u53D6\u5F97\u60A8\u7684\u6CD5\u5B9A\u4EE3\u7406\u4EBA\u540C\u610F\uFF1B\u5018\u82E5\u60A8\u7E7C\u7E8C\u4F7F\u7528\u672C\u670D\u52D9\uFF0C\u8996\u70BA\u60A8\u5DF2\u53D6\u5F97\u6CD5\u5B9A\u4EE3\u7406\u4EBA\u4E4B\u540C\u610F\u8207\u8A31\u53EF\u3002\u60A8\u7684\u500B\u4EBA\u8CC7\u6599\u8207\u8AB2\u7A0B\u8CC7\u6599\u7686\u5DF2\u8F09\u660E\u65BC\u500B\u4EBA\u9801\u9762/\u6703\u54E1\u4E2D\u5FC3\u8CC7\u6599\u4E2D\u3002 "),u("p",null,"\u672C\u516C\u53F8\uFF1A\u5171\u5B78\u5CF6\u80A1\u4EFD\u6709\u9650\u516C\u53F8"),u("p",null,"\u8CA0\u8CAC\u4EBA\uFF1AChau Chris Yat Kin"),u("p",null,"\u767B\u8A18\u5730\u5740\uFF1A\u81FA\u5317\u5E02\u5927\u5B89\u5340\u6566\u5316\u5357\u8DEF\u4E8C\u6BB577\u865F7\u6A13\u4E4B4"),u("p",null,"\u7D71\u4E00\u7DE8\u865F\uFF1A 90611740"),u("p"),u("p",{class:"bold"},"\u7B2C2\u689D\uFF08\u672C\u670D\u52D9\u5167\u5BB9\uFF09"),u("p",null," \u672C\u670D\u52D9\u7BC4\u570D\u5305\u62EC\u672C\u5E73\u53F0\u5167\u7DDA\u4E0B\u6559\u5B78\u8AB2\u7A0B\u4E4B\u7DB2\u969B\u7DB2\u8DEF\u5A92\u5408\u670D\u52D9\u3002\u60A8\u7406\u89E3\u4E26\u540C\u610F\u672C\u516C\u53F8\u4E26\u975E\u8207\u60A8\u6216\u8207\u8001\u5E2B\u8A02\u7ACB\u6559\u5B78\u670D\u52D9\u5354\u8B70\u4E4B\u4E00\u65B9\u3002\u672C\u516C\u53F8\u7121\u6CD5\u63A7\u5236\u60A8\u9078\u64C7\u54EA\u4F4D\u8001\u5E2B\uFF0C\u4E5F\u7121\u6CD5\u63A7\u5236\u8001\u5E2B\u4F7F\u7528\u4E4B\u6559\u6750\u3001\u6559\u5B78\u6642\u9593\uFF0C\u4EA6\u7121\u6CD5\u4FDD\u8B49\u8001\u5E2B\u5C07\u6301\u7E8C\u5728\u672C\u5E73\u53F0\u6388\u8AB2\u3002\u60A8\u7406\u89E3\u4E26\u540C\u610F\uFF0C\u672C\u516C\u53F8\u7121\u6CD5\u66FF\u8001\u5E2B\u4E4B\u8A00\u8AD6\u53CA\u884C\u70BA\u8CA0\u8CAC\uFF0C\u8001\u5E2B\u4EA6\u975E\u672C\u516C\u53F8\u4E4B\u53D7\u96C7\u4EBA\u3001\u4EE3\u7406\u4EBA\u3002 "),u("p",null," \u4F7F\u7528\u672C\u670D\u52D9\u7684\u60A8\uFF0C\u5EFA\u8B70\u61C9\u5177\u6709\u4E00\u822C\u8B58\u5B57\u80FD\u529B\u57FA\u790E\uFF0C\u60DF\u60A8\u4ECD\u61C9\u4F9D\u64DA\u500B\u4EBA\u72C0\u6CC1\u6216\u53C3\u95B1\u672C\u5E73\u53F0\u670D\u52D9\u4ECB\u7D39\uFF0C\u8A55\u4F30\u662F\u5426\u4F7F\u7528\u672C\u670D\u52D9\u3002 "),u("p",null," \u672C\u670D\u52D9\u63D0\u4F9B\u60A8\u7DDA\u4E0B\u6559\u5B78\u8AB2\u7A0B\u4E4B\u7DB2\u969B\u7DB2\u8DEF\u5A92\u5408\u670D\u52D9\uFF0C\u60A8\u5F97\u65BC\u672C\u5E73\u53F0\u4E0A\u641C\u5C0B\u500B\u5225\u8001\u5E2B\u63D0\u4F9B\u4E4B\u6559\u5B78\u8AB2\u7A0B\u540D\u7A31\u3001\u5167\u5BB9\u3001\u8CBB\u7528\u3001\u5834\u5730\u7B49\u8CC7\u8A0A\uFF0C\u7D93\u60A8\u8A55\u4F30\u7BE9\u9078\u5F8C\uFF0C\u60A8\u5F97\u65BC\u672C\u5E73\u53F0\u9078\u64C7\u5411\u8001\u5E2B\u8CFC\u8CB7\u7279\u5B9A\u4E4B\u6559\u5B78\u8AB2\u7A0B\uFF0C\u4E26\u7531\u8A72\u4F4D\u8001\u5E2B\u8207\u60A8\u9032\u884C\u7DDA\u4E0B\u8AB2\u7A0B\uFF08\u9762\u5C0D\u9762\u6559\u5B78\uFF09\u4E4B\u6559\u5B78\u3002\u60A8\u7406\u89E3\u4E26\u540C\u610F\uFF1A\u672C\u5E73\u53F0\u50C5\u63D0\u4F9B\u7DDA\u4E0B\u6559\u5B78\u4E4B\u5A92\u5408\u670D\u52D9\uFF0C\u4E26\u975E\u6559\u5B78\u8AB2\u7A0B\u4E4B\u88FD\u4F5C\u8005\uFF0C\u4EA6\u975E\u6559\u5B78\u5834\u5730\u4E4B\u63D0\u4F9B\u8005\uFF0C\u5982\u60A8\u65BC\u6559\u5B78\u904E\u7A0B\u4E2D\uFF0C\u60A8\u56E0\u6B64\u53D7\u6709\u4EFB\u4F55\u640D\u5BB3\u6216\u640D\u5931\uFF0C\u60A8\u61C9\u5411\u8001\u5E2B\u6216\u5834\u5730\u63D0\u4F9B\u8005\u6216\u5176\u5408\u4F5C\u696D\u8005\u8ACB\u6C42\u640D\u5BB3\u8CE0\u511F\uFF0C\u672C\u5E73\u53F0\u6982\u4E0D\u8CA0\u8CAC\u3002 "),u("p",null," \u672C\u5E73\u53F0\u4E2D\u7121\u95DC\u65BC\u672C\u670D\u52D9\u4E4B\u6240\u6709\u5EE3\u544A\u5167\u5BB9\u3001\u6587\u5B57\u8207\u5716\u7247\u4E4B\u8AAA\u660E\u3001\u5C55\u793A\u6A23\u54C1\u6216\u5176\u4ED6\u92B7\u552E\u8CC7\u8A0A\uFF0C\u5747\u4FC2\u7531\u5404\u5EE3\u544A\u5546\u3001\u7522\u54C1\u8207\u670D\u52D9\u7684\u4F9B\u61C9\u5546\u6240\u8A2D\u8A08\u8207\u63D0\u51FA\uFF0C\u60A8\u61C9\u5C0D\u65BC\u5EE3\u544A\u4E4B\u6B63\u78BA\u6027\u8207\u53EF\u4FE1\u5EA6\u81EA\u884C\u659F\u914C\u8207\u5224\u65B7\uFF0C\u672C\u5E73\u53F0\u50C5\u63A5\u53D7\u59D4\u8A17\u4E88\u4EE5\u520A\u767B\uFF0C\u4E0D\u5C0D\u524D\u8FF0\u5EE3\u544A\u8CA0\u64D4\u4FDD\u8CAC\u4EFB\u3002 "),u("p",null," \u672C\u516C\u53F8\u6709\u6B0A\u62CD\u7167\u3001\u651D\u5F71\u6559\u5B78\u8AB2\u7A0B\u4E4B\u9032\u884C\uFF0C\u4EE5\u78BA\u4FDD\u60A8\u65BC\u6559\u5B78\u8AB2\u7A0B\u51FA\u73FE\u610F\u5916\u6216\u6709\u722D\u8B70\u4E4B\u72C0\u6CC1\u6642\u6709\u5BA2\u89C0\u7684\u6191\u8B49\u3002\u672C\u516C\u53F8\u6240\u6301\u6709\u4E4B\u7167\u7247\u3001\u5F71\u7247\u5C07\u4E0D\u6703\u4EFB\u610F\u516C\u958B\u4E88\u7B2C\u4E09\u4EBA\uFF08\u9664\u653F\u5E9C\u6216\u6CD5\u898F\u8981\u6C42\uFF09\u3002\u672C\u516C\u53F8\u5C07\u65BC\u6301\u6709\u8A72\u7167\u7247\u3001\u5F71\u7247\u5F8C2\u5E74\u5F8C\u522A\u9664\u3001\u92B7\u6BC0\u4E4B\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C3\u689D\uFF08\u4ED8\u6B3E\u898F\u7BC4\uFF09"),u("p",null," \u7576\u60A8\u65BC\u8CFC\u8CB7\u8AB2\u7A0B\u9801\u9762\u9EDE\u9078\u300C\u524D\u5F80\u4ED8\u6B3E\u300D\u6309\u9215\uFF0C\u60A8\u5373\u6388\u6B0A\u672C\u516C\u53F8\u53CA\u55AC\u777F\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8\uFF08\u4E0B\u7A31\uFF1ATapPay\uFF09\u4F9D\u60A8\u6240\u9078\u64C7\u4ED8\u6B3E\u65B9\u5F0F\uFF08\u4E0D\u8AD6\u662F\u4EE5\u4FE1\u7528\u5361\u4E00\u6B21\u4ED8\u6E05\u6216\u5206\u671F\u4ED8\u6B3E\uFF0C\u6216\u8005\u4EE5\u532F\u6B3E\u65B9\u5F0F\u4ED8\u6B3E\uFF09\u6536\u53D6\u8AB2\u7A0B\u8CBB\u7528\u5F8C\uFF0C\u7D66\u4ED8\u4E88\u672C\u516C\u53F8\u3002\u60A8\u4E26\u540C\u610F\u672C\u516C\u53F8\u3001TapPay\u65BC\u5B8C\u6210\u4EA4\u6613\u76EE\u7684\u7BC4\u570D\u5167\u8490\u96C6\u53CA\u4F7F\u7528\u60A8\u4E4B\u500B\u4EBA\u8CC7\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\u9280\u884C\u5E33\u865F\u3001\u4FE1\u7528\u5361\u865F\u3001\u4FE1\u7528\u5361\u6709\u6548\u671F\u9650\u3001\u806F\u7D61\u65B9\u5F0F\u7B49\u3002 "),u("p",null," \u672C\u670D\u52D9\u63A1\u9762\u5C0D\u9762\u6559\u5B78\uFF0C\u60A8\u53EF\u81EA\u7531\u9078\u64C7\u662F\u5426\u8207\u672C\u516C\u53F8\u914D\u5408\u4E4B\u4FDD\u96AA\u6A5F\u69CB\uFF0C\u65BC\u672C\u670D\u52D9\u4E2D\u52A0\u8CFC\u4FDD\u96AA\u9805\u76EE\uFF0C\u7D93\u60A8\u9EDE\u9078\u52A0\u8CFC\u4E26\u63D0\u4F9B\u5FC5\u8981\u500B\u4EBA\u8CC7\u6599\uFF0C\u60A8\u540C\u610F\u672C\u516C\u53F8\u3001\u4FDD\u96AA\u6A5F\u69CB\u65BC\u5B8C\u6210\u4EA4\u6613\u76EE\u7684\u7BC4\u570D\u5167\u8490\u96C6\u53CA\u4F7F\u7528\u60A8\u4E4B\u500B\u4EBA\u8CC7\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\u4FDD\u96AA\u4EBA\u8207\u88AB\u4FDD\u96AA\u4EBA\u59D3\u540D\u3001\u8EAB\u5206\u8B49\u5B57\u865F\u3001\u751F\u65E5\u7B49\u3002 "),u("p",null," \u5982\u60A8\u903E\u671F\u672A\u7E73\u7D0D\u61C9\u7E73\u7D0D\u5168\u90E8/\u90E8\u4EFD\u4E4B\u8CBB\u7528\uFF0C\u672C\u516C\u53F8\u5F97\u4EE5\u5341\u65E5\u4E4B\u50AC\u544A\u671F\u9593\u8ACB\u6C42\u60A8\u7D66\u4ED8\uFF0C\u903E\u671F\u60A8\u4ECD\u672A\u5B8C\u5168\u7D66\u4ED8\u8005\uFF0C\u672C\u516C\u53F8\u5F97\u7D42\u6B62\u672C\u540C\u610F\u66F8\uFF0C\u7D42\u6B62\u63D0\u4F9B\u672C\u670D\u52D9\u4E26\u5411\u60A8\u8ACB\u6C42\u7A4D\u6B20\u4E4B\u8CBB\u7528\u53CA\u4F9D\u9031\u5E74\u5229\u7387\u767E\u5206\u4E4B\u4E94\u8A08\u7B97\u4E4B\u9072\u5EF6\u5229\u606F\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C4\u689D\uFF08\u9000\u6B3E\u898F\u7BC4\uFF09"),u("p",null," \u60A8\u5F97\u5BC4\u4FE1\u81F3\u672C\u5E73\u53F0\u4E4B\u5BA2\u670D\u4FE1\u7BB1 contact@colearna.co \u7533\u8ACB\u9000\u6B3E\u4E26\u6AA2\u9644\u5408\u7406\u9000\u6B3E\u539F\u56E0\uFF0C\u7D93\u672C\u516C\u53F8\u5BE9\u67E5\u5F8C\uFF0C\u672C\u516C\u53F8\u5F97\u4F9D\u7167\u4E0B\u5217\u898F\u5B9A\uFF0C\u9000\u9084\u5168\u90E8/\u90E8\u4EFD\u5DF2\u4ED8\u6B3E\u9805\uFF08\u4F46\u9000\u6B3E\u91D1\u984D\u9700\u6263\u9664\u8F49\u5E33\u6216\u4FE1\u7528\u5361\u624B\u7E8C\u8CBB\uFF09\uFF1A "),u("p",null,"\u5BE6\u9AD4\u8AB2"),u("p",null,"\u5C1A\u672A\u958B\u8AB2\u8AB2\u7A0B\u4E4B\u9000\u6B3E\u689D\u4EF6\uFF1A"),u("p",null,"(1)\u65BC\u958B\u8AB2\u65E5\u4E03\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u767E\u3002"),u("p",null,"(2)\u65BC\u958B\u8AB2\u65E5\u4E94\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E03\u5341\u3002"),u("p",null,"(3)\u65BC\u958B\u8AB2\u65E5\u4E09\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E94\u5341\u3002"),u("p",null,"(4)\u82E5\u60A8\u932F\u904E\u4E0A\u8FF0\u6240\u5217\u7684\u9000\u6B3E\u671F\u9650\uFF0C\u4E0D\u4E88\u9000\u6B3E"),u("p",null," (5)\u4EE5\u4E0A\u958B\u8AB2\u65E5\u671F\u9593\u4E4B\u8A08\u7B97\uFF0C\u5747\u4E0D\u8A08\u5165\u958B\u8AB2\u65E5\u3002\uFF08\u4F8B\u5982\uFF1A\u958B\u8AB2\u65E5\u70BA1\u67088\u65E5\uFF0C\u5247\u65BC1\u67081\u65E5\u524D\u62161\u67081\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u767E\u3001\u65BC1\u67083\u65E5\u524D\u62161\u67083\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u4E03\u5341\u3001\u65BC1\u67085\u65E5\u524D\u62161\u67085\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u4E94\u5341\uFF0C\u5982\u81F31\u67088\u65E5\u958B\u8AB2\u65E5\u7576\u65E5\u59CB\u7533\u8ACB\u9000\u6B3E\uFF0C\u5247\u4E0D\u4E88\u9000\u6B3E\u3002\uFF09 "),u("p",null,"\u5DF2\u958B\u8AB2\u8AB2\u7A0B\uFF08\u975E\u55AE\u6B21\u8AB2\u7A0B\u4E4B\u60C5\u5F62\uFF09\u4E4B\u9000\u6B3E\u689D\u4EF6\uFF1A"),u("p",null,"(1)\u65BC\u60A8\u8CFC\u8CB7\u8AB2\u7A0B\u4E4B\u7576\u65E5\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u767E\u3002"),u("p",null,"(2)\u65BC\u60A8\u8CFC\u8CB7\u8AB2\u7A0B\u5F8C\u4E09\u65E5\u5167\uFF08\u542B\u7576\u65E5\uFF09\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E03\u5341\u3002"),u("p",null,"(3)\u65BC\u60A8\u8CFC\u8CB7\u8AB2\u7A0B\u5F8C\u4E94\u65E5\u5167\uFF08\u542B\u7576\u65E5\uFF09\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E94\u5341\u3002"),u("p",null,"(4)\u65BC\u60A8\u8CFC\u8CB7\u8AB2\u7A0B\u5F8C\u903E\u4E03\u65E5\uFF08\u542B\u7576\u65E5\uFF09\uFF0C\u4E0D\u4E88\u9000\u6B3E\u3002"),u("p",null," (5)\u4EE5\u4E0A\u8CFC\u8CB7\u8AB2\u7A0B\u65E5\u671F\u4E4B\u8A08\u7B97\uFF0C\u4EE5\u8CFC\u8CB7\u65E5\u8D77\u7B97\u3002\uFF08\u4F8B\u5982\uFF1A\u8CFC\u8CB7\u65E5\u70BA1\u67081\u65E5\uFF0C\u5247\u65BC1\u67081\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u767E\u30011\u67083\u65E5\u524D\u62161\u67083\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u4E03\u5341\u30011\u67085\u65E5\u524D\u62161\u67085\u65E5\u7576\u65E5\u5F97\u9000\u6B3E\u767E\u5206\u4E4B\u4E94\u5341\uFF0C\u5982\u81F31\u67087\u65E5\u59CB\u7533\u8ACB\u9000\u6B3E\uFF0C\u5DF2\u903E\u8CFC\u8CB7\u8AB2\u7A0B\u5F8C\u4E4B\u4E03\u65E5\uFF08\u542B\u7576\u65E5\uFF09\uFF0C\u5247\u4E0D\u4E88\u9000\u6B3E\u3002\uFF09 "),u("p",null,"\u5305\u542B\u7DDA\u4E0A\u5F62\u5F0F\u9032\u884C\u4E4B\u8AB2\u7A0B"),u("p",null,"\u5C1A\u672A\u958B\u8AB2\u8AB2\u7A0B\u4E4B\u9000\u6B3E\u689D\u4EF6\uFF1A"),u("p",null,"(1) \u65BC\u958B\u8AB2\u65E5\u4E03\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u767E\u3002"),u("p",null,"(2) \u65BC\u958B\u8AB2\u65E5\u4E94\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E03\u5341\u3002"),u("p",null,"(3) \u65BC\u958B\u8AB2\u65E5\u4E09\u65E5\uFF08\u542B\u7576\u65E5\uFF09\u524D\uFF0C\u5F97\u9000\u9084\u8A72\u8AB2\u7A0B\u91D1\u984D\u4E4B\u767E\u5206\u4E4B\u4E94\u5341\u3002"),u("p",null," (4) \u82E5\u60A8\u7528\u6236\u932F\u904E\u4E0A\u8FF0\u6240\u5217\u7684\u9000\u6B3E\u671F\u9650\uFF0C\u4E0D\u4E88\u9000\u6B3E\uFF0C\u4F46\u5E73\u53F0\u5C07\u8D08\u9001\u76F8\u540C\u8AB2\u5802\u50F9\u683C\u9762\u984D\uFF08\u6263\u9664\u884C\u653F\u8CBB\u5F8C\uFF09\u4E4B\u6298\u50F9\u5238\u4F9B\u4E0B\u6B21\u65BC\u5E73\u53F0\u8CFC\u8AB2\u4F7F\u7528\u3002 "),u("p",null,"\u5DF2\u958B\u8AB2\u8AB2\u7A0B\uFF08\u975E\u55AE\u6B21\u8AB2\u7A0B\u4E4B\u60C5\u5F62\uFF09\u4E4B\u9000\u6B3E\u689D\u4EF6\uFF1A"),u("p",null,"(1) \u958B\u8AB2\u65E5\u524D\u4E4B\u9000\u6B3E\u8981\u6C42\u7B49\u540C\u4E0A\u8FF0\u55AE\u6B21\u8AB2\u4E4B\u898F\u7BC4\u3002"),u("p",null," (2) \u9996\u7BC0\u8AB2\u5802\u7D50\u675F\u5F8C\u81F3\u7B2C\u4E8C\u5802\u8AB2\u4E4B\u524D\uFF08\u4E0D\u542B\u7576\u65E5\uFF09\uFF0C\u5F97\u9000\u9084\u7B49\u540C\u8A72\u8AB2\u7A0B\u50F9\u503C\u4E4B\u4E4B\u62B5\u7528\u5238\uFF08\u6263\u9664\u884C\u653F\u8CBB\uFF09\u4EE5\u4F9B\u5F80\u5F8C\u65BC\u672C\u5E73\u53F0\u4F7F\u7528\u3002 "),u("p",null," (3) \u65BC\u7B2C\u4E8C\u5802\u8AB2\u7576\u65E5\u53CA\u4EE5\u5F8C\uFF0C\u5E73\u53F0\u5F97\u8996\u4E4E\u5177\u9AD4\u60C5\u6CC1\u6C7A\u5B9A\u5982\u4F55\u8655\u7406\u9000\u6B3E\u7533\u8ACB\u3002 "),u("p",null," \u5982\u8001\u5E2B\u6709\u9055\u53CD\u5176\u8207\u672C\u516C\u53F8\u6240\u7D04\u5B9A\u4E4B\u5408\u7D04\uFF0C\u4E14\u8001\u5E2B\u672A\u4F9D\u672C\u516C\u53F8\u6307\u793A\u9032\u884C\u6539\u5584\u6216\u62D2\u7D55\u4FEE\u6B63\uFF0C\u672C\u516C\u53F8\u5C07\u4E0B\u67B6\u8A72\u8AB2\u7A0B\uFF0C\u4E26\u4F9D\u4E0B\u5217\u65B9\u5F0F\u5411\u60A8\u8FA6\u7406\u9000\u8CBB\uFF08\u4F46\u9000\u6B3E\u91D1\u984D\u9700\u6263\u9664\u8F49\u5E33\u6216\u4FE1\u7528\u5361\u624B\u7E8C\u8CBB\uFF09\uFF1A "),u("p",null,"(1)\u82E5\u4E0B\u67B6\u4E4B\u8AB2\u7A0B\u70BA\u5C1A\u672A\u958B\u8AB2\uFF0C\u672C\u516C\u53F8\u5C07\u5168\u984D\u9000\u6B3E\u3002"),u("p",null," (2)\u82E5\u4E0B\u67B6\u4E4B\u8AB2\u7A0B\u5DF2\u958B\u8AB2\u4E14\u5C1A\u9918\u8AB2\u5802\u6578\uFF0C\u672C\u516C\u53F8\u65BC\u4E0B\u67B6\u8A72\u8AB2\u7A0B\u5F8C\uFF0C\u672C\u516C\u53F8\u5F97\u8996\u5177\u9AD4\u60C5\u6CC1\u662F\u5426\u9000\u6B3E\u53CA\u9000\u6B3E\u91D1\u984D\u3002 "),u("p",null," \u5982\u8AB2\u5802\u65BC\u958B\u8AB2\u524D\u672A\u9054\u6210\u73ED\u4EBA\u6578\uFF08\u5305\u62EC\u55AE\u6B21\u8AB2\u53CA\u8D85\u904E\u4E00\u5802\u8AB2\u7684\u8AB2\u7A0B\uFF0C\u5373\u300C\u591A\u6B21\u8AB2\u300D\uFF09\uFF0C\u5E73\u53F0\u5C07\u63D0\u524D\u901A\u77E5\u3002\u5982\u8AB2\u7A0B\u5C6C\u55AE\u6B21\u8AB2\uFF0C\u5C07\u5B89\u6392\u9000\u6B3E\uFF1B\u5982\u8AB2\u7A0B\u5C6C\u591A\u6B21\u8AB2\uFF0C\u5247\u5B89\u6392\u9000\u6B3E\u4E0D\u6210\u73ED\u4E4B\u8A72\u6B21\u8AB2\u5802\u6B3E\u9805\uFF08\u7528\u6236\u4E4B\u8CFC\u8CB7\u50F9\u683C\u9664\u4EE5\u8AB2\u5802\u6578\u76EE\uFF09\uFF0C\u7528\u6236\u4EA6\u53EF\u7533\u8ACB\u9000\u9084\u9918\u4E0B\u672A\u4E0A\u8AB2\u5802\u4E4B\u8CBB\u7528\u3002 "),u("p",null," \u5982\u5B78\u751F\u9072\u5230/\u7F3A\u5E2D\u4E14\u672A\u6709\u65BC\u8AB2\u5802\u958B\u59CB\u524D\u81F3\u5C11\u4E00\u5C0F\u6642\u544A\u77E5\uFF0C\u6055\u672A\u80FD\u9000\u9084\u8A72\u5802\u6B3E\u9805\u3002\u5982\u8AB2\u5802\u958B\u59CB\u5F8C15\u5206\u9418\u51FA\u5E2D\u5B78\u751F\u6578\u76EE\u4ECD\u672A\u9054\u6210\u73ED\u4EBA\u6578\uFF0C\u8001\u5E2B\u5F97\u6C7A\u5B9A\u662F\u5426\u53D6\u6D88\u8AB2\u5802\uFF0C\u5DF2\u51FA\u5E2D\u4E4B\u5B78\u751F\u5C07\u7372\u9000\u9084\u8A72\u5802\u8CBB\u7528\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C5\u689D\uFF08\u8A2D\u5099\u898F\u683C\uFF09"),u("p",null," \u5229\u7528\u672C\u5E73\u53F0\u4F7F\u7528\u672C\u670D\u52D9\u61C9\u5177\u5099\u4E4B\u5404\u9805\u8EDF\u786C\u9AD4\u8A2D\u5099\u57FA\u672C\u898F\u683C\u53CA\u8981\u6C42\u5982\u4E0B\uFF0C\u60A8\u61C9\u65BC\u4F7F\u7528\u672C\u670D\u52D9\u524D\uFF0C\u81EA\u884C\u6E96\u5099\u4EE5\u4E0B\u8A2D\u5099\uFF0C\u8A2D\u5099\u8981\u6C42\u4E4B\u66F4\u65B0\u8ACB\u8A73\u898B\u672C\u5E73\u53F0\u516C\u544A\uFF1A "),u("p",null,"\u6700\u65B0\u7248\u672C\u4E4BGoogle Chrome\u7DB2\u8DEF\u700F\u89BD\u5668\u3002"),u("p",null," \u5982\u4F7F\u7528\u672C\u8EDF\u9AD4\uFF0C\u61C9\u4E0B\u8F09\u4E26\u5B89\u88DD\u5176\u6700\u65B0\u7248\u672C\u65BC\u5177\u5099iOS\u7CFB\u7D71\u6216Android\u7CFB\u7D71\u4E4B\u624B\u6A5F\u6216\u5E73\u677F\u3002 "),u("p",null," \u60A8\u9023\u7D50\u672C\u5E73\u53F0\u4E4B\u63A5\u53D6\u7DB2\u8DEF\uFF0C\u61C9\u7531\u60A8\u81EA\u884C\u5411\u5408\u6CD5\u7D93\u71DF\u4E4B\u96FB\u4FE1\u4E8B\u696D\u7533\u8ACB\u79DF\u7528\uFF0C\u60A8\u79DF\u7528\u8A72\u63A5\u53D6\u7DB2\u8DEF\u6240\u751F\u4E4B\u6B0A\u5229\u7FA9\u52D9\uFF0C\u4F9D\u60A8\u8207\u8A72\u96FB\u4FE1\u4E8B\u696D\u9593\u5408\u7D04\u8A02\u5B9A\u4E4B\u3002 "),u("p",null," \u4E2D\u570B\u5927\u9678\u5730\u5340\u53CA\u6E2F\u6FB3\u5730\u5340\u56E0\u5730\u5340\u4F7F\u7528\u9650\u5236\u53EF\u80FD\u7121\u6CD5\u4F7F\u7528\u5168\u90E8\u6216\u90E8\u5206\u672C\u670D\u52D9\uFF0C\u60A8\u65BC\u4F7F\u7528\u672C\u670D\u52D9\u524D\u61C9\u81EA\u884C\u78BA\u8A8D\u6240\u5728\u4E4B\u5730\u5340\u662F\u5426\u6709\u524D\u8FF0\u9650\u5236\u3002\u672C\u516C\u53F8\u4E0D\u56E0\u524D\u8FF0\u9650\u5236\u800C\u7D42\u6B62\u672C\u5408\u7D04\u6216\u9000\u8CBB\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C6\u689D\uFF08\u64D4\u4FDD\u6388\u6B0A\uFF09"),u("p",null,"\u672C\u516C\u53F8\u8072\u660E\uFF0C\u672C\u516C\u53F8\u70BA\u672C\u540C\u610F\u66F8\u6388\u6B0A\u60A8\u4F7F\u7528\u4E4B\u670D\u52D9\u5167\u5BB9\u4E4B\u5408\u6CD5\u6B0A\u5229\u4EBA\u3002"),u("p",null,"\u672A\u7D93\u672C\u516C\u53F8\u4E8B\u524D\u4E4B\u66F8\u9762\u540C\u610F\uFF0C\u60A8\u4E0D\u5F97\u5C07\u5176\u4F7F\u7528\u6B0A\u8B93\u8207\u4ED6\u4EBA\u4F7F\u7528\u3002"),u("p"),u("p",{class:"bold"},"\u7B2C7\u689D\uFF08\u4F7F\u7528\u898F\u5247\uFF09"),u("p",null," \u60A8\u6709\u4E0B\u5217\u60C5\u5F62\u4E4B\u4E00\u8005\uFF0C\u7531\u60A8\u81EA\u8CA0\u4E00\u5207\u6CD5\u5F8B\u8CAC\u4EFB\uFF0C\u672C\u516C\u53F8\u4E26\u5F97\u901A\u77E5\u60A8\u7D42\u6B62\u672C\u540C\u610F\u66F8\uFF0C\u60A8\u4E0D\u5F97\u62D2\u7D55\uFF1A "),u("p",null,"\u60A8\u84C4\u610F\u6563\u4F48\u5E72\u64FE\u672C\u516C\u53F8\u7DB2\u8DEF\u7CFB\u7D71\u6B63\u5E38\u904B\u4F5C\u4E4B\u96FB\u8166\u7A0B\u5F0F\u3002"),u("p",null," \u60A8\u5728\u672C\u5E73\u53F0\u4E0A\u6563\u4F48\u6050\u5687\u3001\u6BC0\u8B17\u3001\u4FB5\u5BB3\u4ED6\u4EBA\u96B1\u79C1\u3001\u8272\u60C5\u6216\u5176\u4ED6\u9055\u53CD\u5F37\u5236\u6216\u7981\u6B62\u898F\u5B9A\u3001\u516C\u5E8F\u826F\u4FD7\u4E4B\u6587\u5B57\u3001\u5716\u7247\u6216\u5F71\u50CF\u3002 "),u("p",null," \u60A8\u5229\u7528\u672C\u5E73\u53F0\u5F9E\u4E8B\u5176\u4ED6\u4E0D\u6CD5\u6216\u9055\u53CD\u672C\u540C\u610F\u66F8\u7D04\u5B9A\u4E8B\u9805\u4E4B\u884C\u70BA\uFF0C\u5176\u60C5\u7BC0\u91CD\u5927\uFF0C\u4E14\u7D93\u672C\u516C\u53F8\u901A\u77E5\u60A8\u9650\u671F\u6539\u6B63\u800C\u5C46\u671F\u672A\u6539\u6B63\u8005\uFF0C\u672C\u516C\u53F8\u5F97\u901A\u77E5\u60A8\u7D42\u6B62\u672C\u540C\u610F\u66F8\uFF0C\u60A8\u4E0D\u5F97\u62D2\u7D55\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C8\u689D\uFF08\u4F7F\u7528\u8005\u4E4B\u7FA9\u52D9\uFF09"),u("p",null,"\u60A8\u5C0D\u65BC\u60A8\u4E4B\u4F7F\u7528\u8005\u5E33\u865F\u8207\u500B\u4EBA\u5BC6\u78BC\u6709\u59A5\u5584\u4FDD\u7BA1\u4EE5\u907F\u514D\u7B2C\u4E09\u4EBA\u77E5\u6089\u4E4B\u7FA9\u52D9\u3002"),u("p",null,"\u60A8\u5728\u4F7F\u7528\u672C\u670D\u52D9\u6642\uFF0C\u6709\u9075\u5B88\u672C\u540C\u610F\u66F8\u6240\u7D04\u5B9A\u4E4B\u6388\u6B0A\u4F7F\u7528\u539F\u5247\u4E4B\u7FA9\u52D9\u3002"),u("p",null," \u60A8\u4F9D\u672C\u540C\u610F\u66F8\u4E4B\u7D04\u5B9A\u6240\u8A3B\u518A\u4E4B\u500B\u4EBA\u8CC7\u6599\u6709\u932F\u8AA4\u6216\u5DF2\u8B8A\u66F4\u8005\uFF0C\u61C9\u5118\u901F\u901A\u77E5\u672C\u516C\u53F8\u8ACB\u6C42\u66F4\u6B63\u3002\u5982\u56E0\u60A8\u6020\u65BC\u901A\u77E5\u800C\u81F4\u5176\u6B0A\u76CA\u53D7\u640D\u8005\uFF0C\u61C9\u7531\u60A8\u81EA\u884C\u8CA0\u8CAC\u3002 "),u("p",null," \u70BA\u78BA\u4FDD\u5152\u7AE5\u53CA\u9752\u5C11\u5E74\u4F7F\u7528\u7DB2\u8DEF\u7684\u5B89\u5168\uFF0C\u4E26\u907F\u514D\u96B1\u79C1\u6B0A\u53D7\u5230\u4FB5\u72AF\uFF0C\u672A\u6EFF\u5341\u4E8C\u6B72\u4E4B\u5152\u7AE5\u4F7F\u7528\u672C\u670D\u52D9\u6642\uFF0C\u6CD5\u5B9A\u4EE3\u7406\u4EBA\u61C9\u5168\u7A0B\u5728\u65C1\u966A\u4F34\uFF0C\u5341\u4E8C\u6B72\u4EE5\u4E0A\u672A\u6EFF\u5341\u516B\u6B72\u4E4B\u9752\u5C11\u5E74\u4F7F\u7528\u672C\u670D\u52D9\u524D\uFF0C\u6CD5\u5B9A\u4EE3\u7406\u4EBA\u4EA6\u61C9\u659F\u914C\u662F\u5426\u7D66\u4E88\u540C\u610F\u3002 "),u("p",null," \u60A8\u540C\u610F\u4E0D\u6703\u5C07\u8AB2\u5802\u4E2D\u6240\u62CD\u651D\u6D89\u53CA\u7B2C\u4E09\u4EBA\uFF08\u4F8B\u5982\uFF1A\u5176\u4ED6\u5B78\u54E1\uFF09\u4E4B\u76F8\u7247\u6216\u5F71\u7247\u516C\u958B\uFF0C\u9664\u975E\u5DF2\u5FB5\u5F97\u6240\u6709\u88AB\u62CD\u651D\u8005\u4E4B\u540C\u610F\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C9\u689D\uFF08\u667A\u6167\u8CA1\u7522\u6B0A\u4FDD\u8B77\uFF09"),u("p",null," \u672C\u5E73\u53F0\u6240\u4F7F\u7528\u4E4B\u8EDF\u9AD4\u6216\u7A0B\u5F0F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\u8457\u4F5C\u3001\u5716\u7247\u3001\u6A94\u6848\u3001\u8CC7\u8A0A\u3001\u8CC7\u6599\u3001\u7DB2\u7AD9\u67B6\u69CB\u3001\u7DB2\u7AD9\u756B\u9762\u7684\u5B89\u6392\u3001\u7DB2\u9801\u8A2D\u8A08\uFF0C\u5747\u7531\u672C\u5E73\u53F0\u4F9D\u6CD5\u64C1\u6709\u5176\u667A\u6167\u8CA1\u7522\u6B0A\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\u5546\u6A19\u6B0A\u3001\u5C08\u5229\u6B0A\u3001\u8457\u4F5C\u6B0A\u3001\u71DF\u696D\u79D8\u5BC6\u8207\u5C08\u6709\u6280\u8853\u7B49\u3002 "),u("p",null," \u4EFB\u4F55\u4EBA\u4E0D\u5F97\u9015\u81EA\u4F7F\u7528\u3001\u4FEE\u6539\u3001\u91CD\u88FD\u3001\u516C\u958B\u64AD\u9001\u3001\u6539\u4F5C\u3001\u6563\u4F48\u3001\u767C\u884C\u3001\u516C\u958B\u767C\u8868\u3001\u9032\u884C\u9084\u539F\u5DE5\u7A0B\u3001\u89E3\u7DE8\u6216\u53CD\u5411\u7D44\u8B6F\u672C\u5E73\u53F0\u6240\u4F7F\u7528\u4E4B\u8EDF\u9AD4\u6216\u7A0B\u5F0F\u3002 "),u("p",null," \u82E5\u60A8\u6B32\u5F15\u7528\u6216\u8F49\u8F09\u524D\u8FF0\u8EDF\u9AD4\u3001\u7A0B\u5F0F\uFF0C\u5FC5\u9808\u4F9D\u6CD5\u53D6\u5F97\u672C\u5E73\u53F0\u7684\u4E8B\u524D\u66F8\u9762\u540C\u610F\u3002 "),u("p",null," \u5C0A\u91CD\u667A\u6167\u8CA1\u7522\u6B0A\u662F\u60A8\u61C9\u76E1\u7684\u7FA9\u52D9\uFF0C\u5982\u6709\u9055\u53CD\uFF0C\u60A8\u61C9\u5C0D\u672C\u5E73\u53F0\u8CA0\u640D\u5BB3\u8CE0\u511F\u8CAC\u4EFB\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\uFF1A\u8A34\u8A1F\u8CBB\u7528\u3001\u5F8B\u5E2B\u8CBB\u7528\u7B49\uFF09\u3002 "),u("p",null," \u5728\u5C0A\u91CD\u4ED6\u4EBA\u667A\u6167\u8CA1\u7522\u6B0A\u4E4B\u539F\u5247\u4E0B\uFF0C\u60A8\u540C\u610F\u5728\u4F7F\u7528\u672C\u5E73\u53F0\u4E4B\u670D\u52D9\u6642\uFF0C\u4E0D\u70BA\u4FB5\u5BB3\u4ED6\u4EBA\u667A\u6167\u8CA1\u7522\u6B0A\u4E4B\u884C\u70BA\u3002 "),u("p",null," \u60A8\u77E5\u6089\u4E26\u540C\u610F\uFF1A\u82E5\u60A8\u56E0\u4F7F\u7528\u672C\u5E73\u53F0\u800C\u7522\u751F\u4E4B\u5167\u5BB9\uFF0C\u6216\u5728\u672C\u5E73\u53F0\u300C\u804A\u5929\u5BA4\u300D\u3001\u300C\u8AD6\u58C7\u300D\u53CA\u300C\u7559\u8A00\u677F\u300D\u670D\u52D9\u6216\u985E\u4F3C\u4E4B\u8A0E\u8AD6\u5340\u529F\u80FD\u6709\u6D89\u53CA\u4FB5\u5BB3\u7B2C\u4E09\u4EBA\u667A\u6167\u8CA1\u7522\u6B0A\u6216\u5176\u4ED6\u6B0A\u5229\u3001\u6D89\u72AF\u5211\u4E8B\u72AF\u7F6A\u8005\uFF0C\u672C\u516C\u53F8\u516C\u53F8\u5F97\u5728\u7D93\u6B0A\u5229\u4EBA\u901A\u77E5\u5F8C\uFF0C\u79FB\u9664\u6216\u7981\u6B62\u5B58\u53D6\u8A72\u7B49\u4FB5\u6B0A\u5167\u5BB9\u3002 "),u("p",null," \u82E5\u60A8\u767C\u73FE\u667A\u6167\u8CA1\u7522\u6B0A\u906D\u4FB5\u5BB3\u4E4B\u60C5\u4E8B\uFF0C\u8ACB\u5C07\u6240\u906D\u4FB5\u6B0A\u4E4B\u60C5\u5F62\u53CA\u806F\u7D61\u65B9\u5F0F\uFF0C\u4E26\u9644\u5177\u771F\u5BE6\u9673\u8FF0\u53CA\u64C1\u6709\u5408\u6CD5\u667A\u6167\u8CA1\u7522\u6B0A\u4E4B\u8072\u660E\uFF0C\u4F86\u4FE1\u81F3\u672C\u516C\u53F8\u4E4B\u5BA2\u670D\u4FE1\u7BB1\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C10\u689D\uFF08\u5E33\u865F\u5BC6\u78BC\u975E\u6CD5\u4F7F\u7528\u4E4B\u8655\u7406\uFF09"),u("p",null," \u4EE5\u60A8\u4E4B\u4F7F\u7528\u8005\u5E33\u865F\u8207\u500B\u4EBA\u5BC6\u78BC\uFF0C\u767B\u5165\u672C\u5E73\u53F0\u7CFB\u7D71\u6240\u70BA\u4E4B\u884C\u70BA\uFF0C\u63A8\u5B9A\u70BA\u60A8\u4E4B\u884C\u70BA\u3002 "),u("p",null," \u7576\u60A8\u767C\u73FE\u60A8\u4E4B\u4F7F\u7528\u8005\u5E33\u865F\u6216\u500B\u4EBA\u5BC6\u78BC\u906D\u7B2C\u4E09\u4EBA\u4E0D\u6CD5\u6216\u4E0D\u7576\u4E4B\u4F7F\u7528\u8005\uFF0C\u61C9\u7ACB\u5373\u901A\u77E5\u672C\u516C\u53F8\u3002\u5982\u60A8\u672A\u5373\u6642\u901A\u77E5\u672C\u516C\u53F8\uFF0C\u56E0\u6B64\u81F4\u672C\u516C\u53F8\u6388\u6709\u640D\u5BB3\uFF0C\u60A8\u61C9\u5C0D\u672C\u5E73\u53F0\u8CA0\u640D\u5BB3\u8CE0\u511F\u8CAC\u4EFB\uFF08\u5305\u62EC\u4F46\u4E0D\u9650\u65BC\uFF1A\u8A34\u8A1F\u8CBB\u7528\u3001\u5F8B\u5E2B\u8CBB\u7528\u7B49\uFF09\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C11\u689D\uFF08\u66AB\u505C\u670D\u52D9\u4E4B\u8655\u7406\uFF09"),u("p",null," \u672C\u516C\u53F8\u5C0D\u65BC\u672C\u670D\u52D9\u76F8\u95DC\u8EDF\u786C\u9AD4\u8A2D\u5099\uFF0C\u9032\u884C\u71DF\u904B\u4E0A\u5FC5\u8981\u4E4B\u642C\u9077\u3001\u66F4\u63DB\u3001\u5347\u7D1A\u3001\u4FDD\u990A\u6216\u7DAD\u4FEE\u6642\uFF0C\u5F97\u66AB\u505C\u672C\u670D\u52D9\u4E4B\u5168\u90E8\u6216\u4E00\u90E8\u3002 "),u("p",null," \u672C\u516C\u53F8\u56E0\u672C\u689D\u524D\u9805\u4E8B\u7531\u800C\u66AB\u505C\u672C\u670D\u52D9\u4E4B\u5168\u90E8\u6216\u4E00\u90E8\uFF0C\u5F97\u65BC\u672C\u5E73\u53F0\u7CFB\u7D71\u516C\u544A\u4E4B\uFF0C\u6216\u4EE5\u96FB\u5B50\u90F5\u4EF6\u6216\u66F8\u9762\u901A\u77E5\u60A8\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C12\u689D\uFF08\u5408\u7D04\u4E4B\u8B8A\u66F4\uFF09"),u("p",null," \u672C\u516C\u53F8\u4FEE\u6539\u672C\u540C\u610F\u66F8\u6642\uFF0C\u5C07\u65BC\u672C\u5E73\u53F0\u7CFB\u7D71\u516C\u544A\u4E4B\uFF0C\u6216\u4EE5\u96FB\u5B50\u90F5\u4EF6\u6216\u66F8\u9762\u901A\u77E5\u60A8\u3002 "),u("p",null," \u60A8\u672A\u70BA\u53CD\u5C0D\u4E4B\u8868\u793A\u4E14\u7E7C\u7E8C\u4F7F\u7528\u672C\u670D\u52D9\u8005\uFF0C\u8996\u70BA\u60A8\u5DF2\u540C\u610F\u672C\u540C\u610F\u66F8\u8B8A\u66F4\u5F8C\u4E4B\u5167\u5BB9\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C13\u689D\uFF08\u7D42\u6B62\uFF09"),u("p",null," \u60A8\u5F97\u5BC4\u4FE1\u81F3\u672C\u5E73\u53F0\u4E4B\u5BA2\u670D\u4FE1\u7BB1\u8ACB\u6C42\u7D42\u6B62\u672C\u5408\u7D04\uFF0C\u7D93\u672C\u516C\u53F8\u540C\u610F\u5F8C\uFF0C\u672C\u540C\u610F\u66F8\u5373\u544A\u7D42\u6B62\uFF0C\u60DF\u5982\u672C\u540C\u610F\u66F8\u7D42\u6B62\u4FC2\u56E0\u672C\u540C\u610F\u66F8\u7B2C\u4E03\u689D\u4E4B\u539F\u56E0\u6216\u5176\u4ED6\u53EF\u6B78\u8CAC\u65BC\u60A8\u4E4B\u4E8B\u7531\uFF0C\u5247\u60A8\u540C\u610F\u672C\u516C\u53F8\u6982\u4E0D\u9000\u9084\u5DF2\u6536\u53D6\u4E4B\u6B3E\u9805\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C14\u689D\uFF08\u7533\u8A34\u6B0A\u5229\uFF09"),u("p",null," \u60A8\u5C0D\u65BC\u672C\u516C\u53F8\u6240\u63D0\u4F9B\u4E4B\u672C\u670D\u52D9\uFF0C\u60A8\u5F97\u64A5\u6253\u672C\u516C\u53F8\u96FB\u8A71\u63D0\u51FA\u7533\u8A34\uFF0C\u6216\u5BC4\u4FE1\u81F3\u672C\u5E73\u53F0\u4E4B\u5BA2\u670D\u4FE1\u7BB1\u7533\u8A34\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C15\u689D\uFF08\u7BA1\u8F44\u6CD5\u9662\uFF09"),u("p",null," \u56E0\u672C\u540C\u610F\u66F8\u6240\u751F\u4E4B\u4E00\u5207\u722D\u8B70\uFF0C\u96D9\u65B9\u7576\u4E8B\u4EBA\u540C\u610F\u9069\u7528\u81FA\u7063\u6CD5\u5F8B\u4F5C\u70BA\u5224\u65B7\u4E4B\u6E96\u64DA\uFF0C\u4E26\u4EE5\u81FA\u7063\u81FA\u5317\u5730\u65B9\u6CD5\u9662\u70BA\u7B2C\u4E00\u5BE9\u7BA1\u8F44\u6CD5\u9662\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C16\u689D\uFF08\u901A\u77E5\uFF09"),u("p",null," \u9664\u672C\u540C\u610F\u66F8\u53E6\u6709\u898F\u5B9A\u5916\uFF0C\u672C\u516C\u53F8\u56E0\u672C\u540C\u610F\u66F8\u9700\u5C0D\u60A8\u767C\u51FA\u901A\u77E5\uFF0C\u53EF\u900F\u904E\u672C\u5E73\u53F0\u516C\u544A\u3001\u96FB\u5B50\u90F5\u4EF6\u3001\u624B\u6A5F\u7C21\u8A0A\u6216\u4E00\u822C\u66F8\u9762\u5BC4\u9001\u7B49\u65B9\u5F0F\u9032\u884C\uFF1B\u4E26\u65BC\u901A\u77E5\u767C\u51FA\u4E4B\u65E5\u8996\u70BA\u5DF2\u9001\u9054\u6536\u4EF6\u4EBA\u3002 "),u("p",null," \u60A8\u5C0D\u65BC\u672C\u516C\u53F8\u6216\u672C\u5E73\u53F0\u4E4B\u901A\u77E5\uFF0C\u5F97\u900F\u904E\u672C\u516C\u53F8\u4E4B\u5BA2\u670D\u4FE1\u7BB1\u50B3\u905E\uFF1B\u8A72\u901A\u77E5\u4EE5\u672C\u516C\u53F8\u6216\u672C\u5E73\u53F0\u5BE6\u969B\u6536\u5230\u65E5\u70BA\u9001\u9054\u65E5\u3002 "),u("p"),u("p",{class:"bold"},"\u7B2C17\u689D\uFF08\u5176\u4ED6\uFF09"),u("p",null," \u5982\u672C\u540C\u610F\u66F8\u4E2D\u4E4B\u4EFB\u4F55\u689D\u6B3E\u4E00\u90E8\u6216\u5168\u90E8\u7121\u6548\uFF0C\u5176\u9918\u689D\u6B3E\u4ECD\u61C9\u7DAD\u6301\u6548\u529B\u4E14\u6709\u62D8\u675F\u529B\u3002 \u672C\u540C\u610F\u66F8\u5404\u9805\u6A19\u984C\u50C5\u4F9B\u53C3\u8003\u4E4B\u7528\uFF0C\u4E0D\u5F71\u97FF\u5404\u8A72\u7D04\u6B3E\u4E4B\u89E3\u91CB\u3002 ")])],-1));function i(F,A,C,E,m,_){return s(),o(D,{class:"term"},{default:a(()=>[r]),_:1})}var v=p(c,[["render",i],["__scopeId","data-v-1005c23a"]]);export{v as default};
