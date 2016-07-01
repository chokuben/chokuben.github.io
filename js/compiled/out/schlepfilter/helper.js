// Compiled by ClojureScript 1.7.170 {}
goog.provide('schlepfilter.helper');
goog.require('cljs.core');
goog.require('re_frame.core');
schlepfilter.helper.translate = (function schlepfilter$helper$translate(var_args){
var args__17884__auto__ = [];
var len__17877__auto___18024 = arguments.length;
var i__17878__auto___18025 = (0);
while(true){
if((i__17878__auto___18025 < len__17877__auto___18024)){
args__17884__auto__.push((arguments[i__17878__auto___18025]));

var G__18026 = (i__17878__auto___18025 + (1));
i__17878__auto___18025 = G__18026;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return schlepfilter.helper.translate.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

schlepfilter.helper.translate.cljs$core$IFn$_invoke$arity$variadic = (function (ks){
return cljs.core.get_in.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),"Email address",new cljs.core.Keyword(null,"notification-submit","notification-submit",-599082041),"Get notified when we launch",new cljs.core.Keyword(null,"sent","sent",-1537501490),"Thank you!",new cljs.core.Keyword(null,"feedback","feedback",1624587107),"Feedback",new cljs.core.Keyword(null,"feedback-request","feedback-request",773062902),"Tell us what you think",new cljs.core.Keyword(null,"feedback-submit","feedback-submit",-1377359187),"Send feedback"], null),new cljs.core.Keyword(null,"ja","ja",-1704765727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"email","email",1415816706),"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",new cljs.core.Keyword(null,"notification-submit","notification-submit",-599082041),"\u30EA\u30EA\u30FC\u30B9\u6642\u306B\u901A\u77E5\u3092\u53D7\u3051\u53D6\u308B",new cljs.core.Keyword(null,"sent","sent",-1537501490),"\u9001\u4FE1\u5B8C\u4E86",new cljs.core.Keyword(null,"feedback","feedback",1624587107),"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF",new cljs.core.Keyword(null,"feedback-request","feedback-request",773062902),"\u3054\u610F\u898B\u3092\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044",new cljs.core.Keyword(null,"feedback-submit","feedback-submit",-1377359187),"\u30D5\u30A3\u30FC\u30C9\u30D0\u30C3\u30AF\u3092\u9001\u4FE1\u3059\u308B"], null)], null),ks);
});

schlepfilter.helper.translate.cljs$lang$maxFixedArity = (0);

schlepfilter.helper.translate.cljs$lang$applyTo = (function (seq18023){
return schlepfilter.helper.translate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18023));
});
schlepfilter.helper.pathname_component = (function schlepfilter$helper$pathname_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value1","value1",-734063713),new cljs.core.Keyword(null,"value","value",305978217),location.pathname,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null);
});
schlepfilter.helper.make_email_component = (function schlepfilter$helper$make_email_component(language){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value2","value2",180271933),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"email","email",1415816706)),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706)], null)], null);
});
});
schlepfilter.helper.make_email_form_component = (function schlepfilter$helper$make_email_form_component(language){
return (function (submit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4","form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4",-356333210),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),"https://maker.ifttt.com/trigger/post/with/key/ddlyHDwEcvSJJCcs5ZtpReGw61OOMkRWOSGyzbFhsGe",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit","submit",-49315317)], null));
}),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"iframe","iframe",884422026)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schlepfilter.helper.pathname_component], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value2","value2",180271933),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"email","email",1415816706)),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"email","email",1415816706)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.btn-block","button.btn.btn-success.btn-block",465759292),(cljs.core.truth_(submit)?schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"sent","sent",-1537501490)):schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"notification-submit","notification-submit",-599082041)))], null)], null)], null)], null);
});
});
schlepfilter.helper.make_feedback_form_component = (function schlepfilter$helper$make_feedback_form_component(language){
return (function (submit){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.jumbotron","footer.jumbotron",376946638),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"feedback-request","feedback-request",773062902))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4","form.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3.col-lg-4.col-lg-offset-4",-356333210),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"action","action",-811238024),"https://maker.ifttt.com/trigger/post/with/key/ddlyHDwEcvSJJCcs5ZtpReGw61OOMkRWOSGyzbFhsGe",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"submit","submit",-49315317)], null));
}),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"iframe","iframe",884422026)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schlepfilter.helper.pathname_component], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schlepfilter.helper.make_email_component.call(null,language)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value3","value3",-1080218331),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"feedback","feedback",1624587107)),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.btn-block","button.btn.btn-success.btn-block",465759292),(cljs.core.truth_(submit)?schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"sent","sent",-1537501490)):schlepfilter.helper.translate.call(null,language,new cljs.core.Keyword(null,"feedback-submit","feedback-submit",-1377359187)))], null)], null)], null)], null)], null);
});
});

//# sourceMappingURL=helper.js.map?rel=1467340425904