// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18791,handler){
var map__18792 = p__18791;
var map__18792__$1 = ((((!((map__18792 == null)))?((((map__18792.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18792.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18792):map__18792);
var uri = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18792__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18792,map__18792__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18790_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18790_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18792,map__18792__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18800 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18800)){
var response_type_18801 = temp__4425__auto___18800;
this$__$1.responseType = cljs.core.name.call(null,response_type_18801);
} else {
}

var seq__18794_18802 = cljs.core.seq.call(null,headers);
var chunk__18795_18803 = null;
var count__18796_18804 = (0);
var i__18797_18805 = (0);
while(true){
if((i__18797_18805 < count__18796_18804)){
var vec__18798_18806 = cljs.core._nth.call(null,chunk__18795_18803,i__18797_18805);
var k_18807 = cljs.core.nth.call(null,vec__18798_18806,(0),null);
var v_18808 = cljs.core.nth.call(null,vec__18798_18806,(1),null);
this$__$1.setRequestHeader(k_18807,v_18808);

var G__18809 = seq__18794_18802;
var G__18810 = chunk__18795_18803;
var G__18811 = count__18796_18804;
var G__18812 = (i__18797_18805 + (1));
seq__18794_18802 = G__18809;
chunk__18795_18803 = G__18810;
count__18796_18804 = G__18811;
i__18797_18805 = G__18812;
continue;
} else {
var temp__4425__auto___18813 = cljs.core.seq.call(null,seq__18794_18802);
if(temp__4425__auto___18813){
var seq__18794_18814__$1 = temp__4425__auto___18813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18794_18814__$1)){
var c__17622__auto___18815 = cljs.core.chunk_first.call(null,seq__18794_18814__$1);
var G__18816 = cljs.core.chunk_rest.call(null,seq__18794_18814__$1);
var G__18817 = c__17622__auto___18815;
var G__18818 = cljs.core.count.call(null,c__17622__auto___18815);
var G__18819 = (0);
seq__18794_18802 = G__18816;
chunk__18795_18803 = G__18817;
count__18796_18804 = G__18818;
i__18797_18805 = G__18819;
continue;
} else {
var vec__18799_18820 = cljs.core.first.call(null,seq__18794_18814__$1);
var k_18821 = cljs.core.nth.call(null,vec__18799_18820,(0),null);
var v_18822 = cljs.core.nth.call(null,vec__18799_18820,(1),null);
this$__$1.setRequestHeader(k_18821,v_18822);

var G__18823 = cljs.core.next.call(null,seq__18794_18814__$1);
var G__18824 = null;
var G__18825 = (0);
var G__18826 = (0);
seq__18794_18802 = G__18823;
chunk__18795_18803 = G__18824;
count__18796_18804 = G__18825;
i__18797_18805 = G__18826;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16819__auto__ = body;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1457668825097