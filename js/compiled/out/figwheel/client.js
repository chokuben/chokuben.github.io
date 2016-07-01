// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24773 = cljs.core._EQ_;
var expr__24774 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e24777){if((e24777 instanceof Error)){
var e = e24777;
return false;
} else {
throw e24777;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24773.call(null,"true",expr__24774))){
return true;
} else {
if(cljs.core.truth_(pred__24773.call(null,"false",expr__24774))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24774)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24779){if((e24779 instanceof Error)){
var e = e24779;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24779;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17884__auto__ = [];
var len__17877__auto___24781 = arguments.length;
var i__17878__auto___24782 = (0);
while(true){
if((i__17878__auto___24782 < len__17877__auto___24781)){
args__17884__auto__.push((arguments[i__17878__auto___24782]));

var G__24783 = (i__17878__auto___24782 + (1));
i__17878__auto___24782 = G__24783;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24780){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24780));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24784){
var map__24787 = p__24784;
var map__24787__$1 = ((((!((map__24787 == null)))?((((map__24787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24787):map__24787);
var message = cljs.core.get.call(null,map__24787__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24787__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16807__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20473__auto___24949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___24949,ch){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___24949,ch){
return (function (state_24918){
var state_val_24919 = (state_24918[(1)]);
if((state_val_24919 === (7))){
var inst_24914 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24920_24950 = state_24918__$1;
(statearr_24920_24950[(2)] = inst_24914);

(statearr_24920_24950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (1))){
var state_24918__$1 = state_24918;
var statearr_24921_24951 = state_24918__$1;
(statearr_24921_24951[(2)] = null);

(statearr_24921_24951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (4))){
var inst_24871 = (state_24918[(7)]);
var inst_24871__$1 = (state_24918[(2)]);
var state_24918__$1 = (function (){var statearr_24922 = state_24918;
(statearr_24922[(7)] = inst_24871__$1);

return statearr_24922;
})();
if(cljs.core.truth_(inst_24871__$1)){
var statearr_24923_24952 = state_24918__$1;
(statearr_24923_24952[(1)] = (5));

} else {
var statearr_24924_24953 = state_24918__$1;
(statearr_24924_24953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (15))){
var inst_24878 = (state_24918[(8)]);
var inst_24893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24878);
var inst_24894 = cljs.core.first.call(null,inst_24893);
var inst_24895 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24894);
var inst_24896 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24895)].join('');
var inst_24897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24896);
var state_24918__$1 = state_24918;
var statearr_24925_24954 = state_24918__$1;
(statearr_24925_24954[(2)] = inst_24897);

(statearr_24925_24954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (13))){
var inst_24902 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24926_24955 = state_24918__$1;
(statearr_24926_24955[(2)] = inst_24902);

(statearr_24926_24955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (6))){
var state_24918__$1 = state_24918;
var statearr_24927_24956 = state_24918__$1;
(statearr_24927_24956[(2)] = null);

(statearr_24927_24956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (17))){
var inst_24900 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24928_24957 = state_24918__$1;
(statearr_24928_24957[(2)] = inst_24900);

(statearr_24928_24957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (3))){
var inst_24916 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24918__$1,inst_24916);
} else {
if((state_val_24919 === (12))){
var inst_24877 = (state_24918[(9)]);
var inst_24891 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24877,opts);
var state_24918__$1 = state_24918;
if(cljs.core.truth_(inst_24891)){
var statearr_24929_24958 = state_24918__$1;
(statearr_24929_24958[(1)] = (15));

} else {
var statearr_24930_24959 = state_24918__$1;
(statearr_24930_24959[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (2))){
var state_24918__$1 = state_24918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24918__$1,(4),ch);
} else {
if((state_val_24919 === (11))){
var inst_24878 = (state_24918[(8)]);
var inst_24883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24884 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24878);
var inst_24885 = cljs.core.async.timeout.call(null,(1000));
var inst_24886 = [inst_24884,inst_24885];
var inst_24887 = (new cljs.core.PersistentVector(null,2,(5),inst_24883,inst_24886,null));
var state_24918__$1 = state_24918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24918__$1,(14),inst_24887);
} else {
if((state_val_24919 === (9))){
var inst_24878 = (state_24918[(8)]);
var inst_24904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24905 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24878);
var inst_24906 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24905);
var inst_24907 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24906)].join('');
var inst_24908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24907);
var state_24918__$1 = (function (){var statearr_24931 = state_24918;
(statearr_24931[(10)] = inst_24904);

return statearr_24931;
})();
var statearr_24932_24960 = state_24918__$1;
(statearr_24932_24960[(2)] = inst_24908);

(statearr_24932_24960[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (5))){
var inst_24871 = (state_24918[(7)]);
var inst_24873 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24874 = (new cljs.core.PersistentArrayMap(null,2,inst_24873,null));
var inst_24875 = (new cljs.core.PersistentHashSet(null,inst_24874,null));
var inst_24876 = figwheel.client.focus_msgs.call(null,inst_24875,inst_24871);
var inst_24877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24876);
var inst_24878 = cljs.core.first.call(null,inst_24876);
var inst_24879 = figwheel.client.autoload_QMARK_.call(null);
var state_24918__$1 = (function (){var statearr_24933 = state_24918;
(statearr_24933[(8)] = inst_24878);

(statearr_24933[(9)] = inst_24877);

return statearr_24933;
})();
if(cljs.core.truth_(inst_24879)){
var statearr_24934_24961 = state_24918__$1;
(statearr_24934_24961[(1)] = (8));

} else {
var statearr_24935_24962 = state_24918__$1;
(statearr_24935_24962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (14))){
var inst_24889 = (state_24918[(2)]);
var state_24918__$1 = state_24918;
var statearr_24936_24963 = state_24918__$1;
(statearr_24936_24963[(2)] = inst_24889);

(statearr_24936_24963[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (16))){
var state_24918__$1 = state_24918;
var statearr_24937_24964 = state_24918__$1;
(statearr_24937_24964[(2)] = null);

(statearr_24937_24964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (10))){
var inst_24910 = (state_24918[(2)]);
var state_24918__$1 = (function (){var statearr_24938 = state_24918;
(statearr_24938[(11)] = inst_24910);

return statearr_24938;
})();
var statearr_24939_24965 = state_24918__$1;
(statearr_24939_24965[(2)] = null);

(statearr_24939_24965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24919 === (8))){
var inst_24877 = (state_24918[(9)]);
var inst_24881 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24877,opts);
var state_24918__$1 = state_24918;
if(cljs.core.truth_(inst_24881)){
var statearr_24940_24966 = state_24918__$1;
(statearr_24940_24966[(1)] = (11));

} else {
var statearr_24941_24967 = state_24918__$1;
(statearr_24941_24967[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20473__auto___24949,ch))
;
return ((function (switch__20361__auto__,c__20473__auto___24949,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____0 = (function (){
var statearr_24945 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24945[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__);

(statearr_24945[(1)] = (1));

return statearr_24945;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____1 = (function (state_24918){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_24918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e24946){if((e24946 instanceof Object)){
var ex__20365__auto__ = e24946;
var statearr_24947_24968 = state_24918;
(statearr_24947_24968[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24969 = state_24918;
state_24918 = G__24969;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__ = function(state_24918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____1.call(this,state_24918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20362__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___24949,ch))
})();
var state__20475__auto__ = (function (){var statearr_24948 = f__20474__auto__.call(null);
(statearr_24948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___24949);

return statearr_24948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___24949,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24970_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24970_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24977 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24977){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24975 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24976 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24976;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24975;
}}catch (e24974){if((e24974 instanceof Error)){
var e = e24974;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24977], null));
} else {
var e = e24974;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24977))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24978){
var map__24985 = p__24978;
var map__24985__$1 = ((((!((map__24985 == null)))?((((map__24985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24985):map__24985);
var opts = map__24985__$1;
var build_id = cljs.core.get.call(null,map__24985__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24985,map__24985__$1,opts,build_id){
return (function (p__24987){
var vec__24988 = p__24987;
var map__24989 = cljs.core.nth.call(null,vec__24988,(0),null);
var map__24989__$1 = ((((!((map__24989 == null)))?((((map__24989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24989):map__24989);
var msg = map__24989__$1;
var msg_name = cljs.core.get.call(null,map__24989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24988,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24988,map__24989,map__24989__$1,msg,msg_name,_,map__24985,map__24985__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24988,map__24989,map__24989__$1,msg,msg_name,_,map__24985,map__24985__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24985,map__24985__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24995){
var vec__24996 = p__24995;
var map__24997 = cljs.core.nth.call(null,vec__24996,(0),null);
var map__24997__$1 = ((((!((map__24997 == null)))?((((map__24997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24997):map__24997);
var msg = map__24997__$1;
var msg_name = cljs.core.get.call(null,map__24997__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24996,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24999){
var map__25009 = p__24999;
var map__25009__$1 = ((((!((map__25009 == null)))?((((map__25009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25009):map__25009);
var on_compile_warning = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25009__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25009,map__25009__$1,on_compile_warning,on_compile_fail){
return (function (p__25011){
var vec__25012 = p__25011;
var map__25013 = cljs.core.nth.call(null,vec__25012,(0),null);
var map__25013__$1 = ((((!((map__25013 == null)))?((((map__25013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25013):map__25013);
var msg = map__25013__$1;
var msg_name = cljs.core.get.call(null,map__25013__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25012,(1));
var pred__25015 = cljs.core._EQ_;
var expr__25016 = msg_name;
if(cljs.core.truth_(pred__25015.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25016))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25015.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25016))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25009,map__25009__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__,msg_hist,msg_names,msg){
return (function (state_25232){
var state_val_25233 = (state_25232[(1)]);
if((state_val_25233 === (7))){
var inst_25156 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25156)){
var statearr_25234_25280 = state_25232__$1;
(statearr_25234_25280[(1)] = (8));

} else {
var statearr_25235_25281 = state_25232__$1;
(statearr_25235_25281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (20))){
var inst_25226 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25236_25282 = state_25232__$1;
(statearr_25236_25282[(2)] = inst_25226);

(statearr_25236_25282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (27))){
var inst_25222 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25237_25283 = state_25232__$1;
(statearr_25237_25283[(2)] = inst_25222);

(statearr_25237_25283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (1))){
var inst_25149 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25149)){
var statearr_25238_25284 = state_25232__$1;
(statearr_25238_25284[(1)] = (2));

} else {
var statearr_25239_25285 = state_25232__$1;
(statearr_25239_25285[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (24))){
var inst_25224 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25240_25286 = state_25232__$1;
(statearr_25240_25286[(2)] = inst_25224);

(statearr_25240_25286[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (4))){
var inst_25230 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25232__$1,inst_25230);
} else {
if((state_val_25233 === (15))){
var inst_25228 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25241_25287 = state_25232__$1;
(statearr_25241_25287[(2)] = inst_25228);

(statearr_25241_25287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (21))){
var inst_25187 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25242_25288 = state_25232__$1;
(statearr_25242_25288[(2)] = inst_25187);

(statearr_25242_25288[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (31))){
var inst_25211 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25211)){
var statearr_25243_25289 = state_25232__$1;
(statearr_25243_25289[(1)] = (34));

} else {
var statearr_25244_25290 = state_25232__$1;
(statearr_25244_25290[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (32))){
var inst_25220 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25245_25291 = state_25232__$1;
(statearr_25245_25291[(2)] = inst_25220);

(statearr_25245_25291[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (33))){
var inst_25209 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25246_25292 = state_25232__$1;
(statearr_25246_25292[(2)] = inst_25209);

(statearr_25246_25292[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (13))){
var inst_25170 = figwheel.client.heads_up.clear.call(null);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(16),inst_25170);
} else {
if((state_val_25233 === (22))){
var inst_25191 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25192 = figwheel.client.heads_up.append_message.call(null,inst_25191);
var state_25232__$1 = state_25232;
var statearr_25247_25293 = state_25232__$1;
(statearr_25247_25293[(2)] = inst_25192);

(statearr_25247_25293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (36))){
var inst_25218 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25248_25294 = state_25232__$1;
(statearr_25248_25294[(2)] = inst_25218);

(statearr_25248_25294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (29))){
var inst_25202 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25249_25295 = state_25232__$1;
(statearr_25249_25295[(2)] = inst_25202);

(statearr_25249_25295[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (6))){
var inst_25151 = (state_25232[(7)]);
var state_25232__$1 = state_25232;
var statearr_25250_25296 = state_25232__$1;
(statearr_25250_25296[(2)] = inst_25151);

(statearr_25250_25296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (28))){
var inst_25198 = (state_25232[(2)]);
var inst_25199 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25200 = figwheel.client.heads_up.display_warning.call(null,inst_25199);
var state_25232__$1 = (function (){var statearr_25251 = state_25232;
(statearr_25251[(8)] = inst_25198);

return statearr_25251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(29),inst_25200);
} else {
if((state_val_25233 === (25))){
var inst_25196 = figwheel.client.heads_up.clear.call(null);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(28),inst_25196);
} else {
if((state_val_25233 === (34))){
var inst_25213 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(37),inst_25213);
} else {
if((state_val_25233 === (17))){
var inst_25178 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25252_25297 = state_25232__$1;
(statearr_25252_25297[(2)] = inst_25178);

(statearr_25252_25297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (3))){
var inst_25168 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25168)){
var statearr_25253_25298 = state_25232__$1;
(statearr_25253_25298[(1)] = (13));

} else {
var statearr_25254_25299 = state_25232__$1;
(statearr_25254_25299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (12))){
var inst_25164 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25255_25300 = state_25232__$1;
(statearr_25255_25300[(2)] = inst_25164);

(statearr_25255_25300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (2))){
var inst_25151 = (state_25232[(7)]);
var inst_25151__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25232__$1 = (function (){var statearr_25256 = state_25232;
(statearr_25256[(7)] = inst_25151__$1);

return statearr_25256;
})();
if(cljs.core.truth_(inst_25151__$1)){
var statearr_25257_25301 = state_25232__$1;
(statearr_25257_25301[(1)] = (5));

} else {
var statearr_25258_25302 = state_25232__$1;
(statearr_25258_25302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (23))){
var inst_25194 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25194)){
var statearr_25259_25303 = state_25232__$1;
(statearr_25259_25303[(1)] = (25));

} else {
var statearr_25260_25304 = state_25232__$1;
(statearr_25260_25304[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (35))){
var state_25232__$1 = state_25232;
var statearr_25261_25305 = state_25232__$1;
(statearr_25261_25305[(2)] = null);

(statearr_25261_25305[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (19))){
var inst_25189 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25189)){
var statearr_25262_25306 = state_25232__$1;
(statearr_25262_25306[(1)] = (22));

} else {
var statearr_25263_25307 = state_25232__$1;
(statearr_25263_25307[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (11))){
var inst_25160 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25264_25308 = state_25232__$1;
(statearr_25264_25308[(2)] = inst_25160);

(statearr_25264_25308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (9))){
var inst_25162 = figwheel.client.heads_up.clear.call(null);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(12),inst_25162);
} else {
if((state_val_25233 === (5))){
var inst_25153 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25232__$1 = state_25232;
var statearr_25265_25309 = state_25232__$1;
(statearr_25265_25309[(2)] = inst_25153);

(statearr_25265_25309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (14))){
var inst_25180 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25180)){
var statearr_25266_25310 = state_25232__$1;
(statearr_25266_25310[(1)] = (18));

} else {
var statearr_25267_25311 = state_25232__$1;
(statearr_25267_25311[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (26))){
var inst_25204 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25232__$1 = state_25232;
if(cljs.core.truth_(inst_25204)){
var statearr_25268_25312 = state_25232__$1;
(statearr_25268_25312[(1)] = (30));

} else {
var statearr_25269_25313 = state_25232__$1;
(statearr_25269_25313[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (16))){
var inst_25172 = (state_25232[(2)]);
var inst_25173 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25174 = figwheel.client.format_messages.call(null,inst_25173);
var inst_25175 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25176 = figwheel.client.heads_up.display_error.call(null,inst_25174,inst_25175);
var state_25232__$1 = (function (){var statearr_25270 = state_25232;
(statearr_25270[(9)] = inst_25172);

return statearr_25270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(17),inst_25176);
} else {
if((state_val_25233 === (30))){
var inst_25206 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25207 = figwheel.client.heads_up.display_warning.call(null,inst_25206);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(33),inst_25207);
} else {
if((state_val_25233 === (10))){
var inst_25166 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25271_25314 = state_25232__$1;
(statearr_25271_25314[(2)] = inst_25166);

(statearr_25271_25314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (18))){
var inst_25182 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25183 = figwheel.client.format_messages.call(null,inst_25182);
var inst_25184 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25185 = figwheel.client.heads_up.display_error.call(null,inst_25183,inst_25184);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(21),inst_25185);
} else {
if((state_val_25233 === (37))){
var inst_25215 = (state_25232[(2)]);
var state_25232__$1 = state_25232;
var statearr_25272_25315 = state_25232__$1;
(statearr_25272_25315[(2)] = inst_25215);

(statearr_25272_25315[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25233 === (8))){
var inst_25158 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25232__$1 = state_25232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25232__$1,(11),inst_25158);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20473__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20361__auto__,c__20473__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____0 = (function (){
var statearr_25276 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25276[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__);

(statearr_25276[(1)] = (1));

return statearr_25276;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____1 = (function (state_25232){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_25232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e25277){if((e25277 instanceof Object)){
var ex__20365__auto__ = e25277;
var statearr_25278_25316 = state_25232;
(statearr_25278_25316[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25317 = state_25232;
state_25232 = G__25317;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__ = function(state_25232){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____1.call(this,state_25232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__,msg_hist,msg_names,msg))
})();
var state__20475__auto__ = (function (){var statearr_25279 = f__20474__auto__.call(null);
(statearr_25279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_25279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__,msg_hist,msg_names,msg))
);

return c__20473__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20473__auto___25380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___25380,ch){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___25380,ch){
return (function (state_25363){
var state_val_25364 = (state_25363[(1)]);
if((state_val_25364 === (1))){
var state_25363__$1 = state_25363;
var statearr_25365_25381 = state_25363__$1;
(statearr_25365_25381[(2)] = null);

(statearr_25365_25381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25364 === (2))){
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25363__$1,(4),ch);
} else {
if((state_val_25364 === (3))){
var inst_25361 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25363__$1,inst_25361);
} else {
if((state_val_25364 === (4))){
var inst_25351 = (state_25363[(7)]);
var inst_25351__$1 = (state_25363[(2)]);
var state_25363__$1 = (function (){var statearr_25366 = state_25363;
(statearr_25366[(7)] = inst_25351__$1);

return statearr_25366;
})();
if(cljs.core.truth_(inst_25351__$1)){
var statearr_25367_25382 = state_25363__$1;
(statearr_25367_25382[(1)] = (5));

} else {
var statearr_25368_25383 = state_25363__$1;
(statearr_25368_25383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25364 === (5))){
var inst_25351 = (state_25363[(7)]);
var inst_25353 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25351);
var state_25363__$1 = state_25363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25363__$1,(8),inst_25353);
} else {
if((state_val_25364 === (6))){
var state_25363__$1 = state_25363;
var statearr_25369_25384 = state_25363__$1;
(statearr_25369_25384[(2)] = null);

(statearr_25369_25384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25364 === (7))){
var inst_25359 = (state_25363[(2)]);
var state_25363__$1 = state_25363;
var statearr_25370_25385 = state_25363__$1;
(statearr_25370_25385[(2)] = inst_25359);

(statearr_25370_25385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25364 === (8))){
var inst_25355 = (state_25363[(2)]);
var state_25363__$1 = (function (){var statearr_25371 = state_25363;
(statearr_25371[(8)] = inst_25355);

return statearr_25371;
})();
var statearr_25372_25386 = state_25363__$1;
(statearr_25372_25386[(2)] = null);

(statearr_25372_25386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20473__auto___25380,ch))
;
return ((function (switch__20361__auto__,c__20473__auto___25380,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20362__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20362__auto____0 = (function (){
var statearr_25376 = [null,null,null,null,null,null,null,null,null];
(statearr_25376[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20362__auto__);

(statearr_25376[(1)] = (1));

return statearr_25376;
});
var figwheel$client$heads_up_plugin_$_state_machine__20362__auto____1 = (function (state_25363){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_25363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e25377){if((e25377 instanceof Object)){
var ex__20365__auto__ = e25377;
var statearr_25378_25387 = state_25363;
(statearr_25378_25387[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25388 = state_25363;
state_25363 = G__25388;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20362__auto__ = function(state_25363){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20362__auto____1.call(this,state_25363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20362__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20362__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___25380,ch))
})();
var state__20475__auto__ = (function (){var statearr_25379 = f__20474__auto__.call(null);
(statearr_25379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___25380);

return statearr_25379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___25380,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_25409){
var state_val_25410 = (state_25409[(1)]);
if((state_val_25410 === (1))){
var inst_25404 = cljs.core.async.timeout.call(null,(3000));
var state_25409__$1 = state_25409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25409__$1,(2),inst_25404);
} else {
if((state_val_25410 === (2))){
var inst_25406 = (state_25409[(2)]);
var inst_25407 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25409__$1 = (function (){var statearr_25411 = state_25409;
(statearr_25411[(7)] = inst_25406);

return statearr_25411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25409__$1,inst_25407);
} else {
return null;
}
}
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____0 = (function (){
var statearr_25415 = [null,null,null,null,null,null,null,null];
(statearr_25415[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__);

(statearr_25415[(1)] = (1));

return statearr_25415;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____1 = (function (state_25409){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_25409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e25416){if((e25416 instanceof Object)){
var ex__20365__auto__ = e25416;
var statearr_25417_25419 = state_25409;
(statearr_25417_25419[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25420 = state_25409;
state_25409 = G__25420;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__ = function(state_25409){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____1.call(this,state_25409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20362__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_25418 = f__20474__auto__.call(null);
(statearr_25418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_25418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25421){
var map__25428 = p__25421;
var map__25428__$1 = ((((!((map__25428 == null)))?((((map__25428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25428):map__25428);
var ed = map__25428__$1;
var formatted_exception = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25428__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25430_25434 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25431_25435 = null;
var count__25432_25436 = (0);
var i__25433_25437 = (0);
while(true){
if((i__25433_25437 < count__25432_25436)){
var msg_25438 = cljs.core._nth.call(null,chunk__25431_25435,i__25433_25437);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25438);

var G__25439 = seq__25430_25434;
var G__25440 = chunk__25431_25435;
var G__25441 = count__25432_25436;
var G__25442 = (i__25433_25437 + (1));
seq__25430_25434 = G__25439;
chunk__25431_25435 = G__25440;
count__25432_25436 = G__25441;
i__25433_25437 = G__25442;
continue;
} else {
var temp__4425__auto___25443 = cljs.core.seq.call(null,seq__25430_25434);
if(temp__4425__auto___25443){
var seq__25430_25444__$1 = temp__4425__auto___25443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25430_25444__$1)){
var c__17622__auto___25445 = cljs.core.chunk_first.call(null,seq__25430_25444__$1);
var G__25446 = cljs.core.chunk_rest.call(null,seq__25430_25444__$1);
var G__25447 = c__17622__auto___25445;
var G__25448 = cljs.core.count.call(null,c__17622__auto___25445);
var G__25449 = (0);
seq__25430_25434 = G__25446;
chunk__25431_25435 = G__25447;
count__25432_25436 = G__25448;
i__25433_25437 = G__25449;
continue;
} else {
var msg_25450 = cljs.core.first.call(null,seq__25430_25444__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25450);

var G__25451 = cljs.core.next.call(null,seq__25430_25444__$1);
var G__25452 = null;
var G__25453 = (0);
var G__25454 = (0);
seq__25430_25434 = G__25451;
chunk__25431_25435 = G__25452;
count__25432_25436 = G__25453;
i__25433_25437 = G__25454;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25455){
var map__25458 = p__25455;
var map__25458__$1 = ((((!((map__25458 == null)))?((((map__25458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25458):map__25458);
var w = map__25458__$1;
var message = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16807__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25466 = cljs.core.seq.call(null,plugins);
var chunk__25467 = null;
var count__25468 = (0);
var i__25469 = (0);
while(true){
if((i__25469 < count__25468)){
var vec__25470 = cljs.core._nth.call(null,chunk__25467,i__25469);
var k = cljs.core.nth.call(null,vec__25470,(0),null);
var plugin = cljs.core.nth.call(null,vec__25470,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25472 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25466,chunk__25467,count__25468,i__25469,pl_25472,vec__25470,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25472.call(null,msg_hist);
});})(seq__25466,chunk__25467,count__25468,i__25469,pl_25472,vec__25470,k,plugin))
);
} else {
}

var G__25473 = seq__25466;
var G__25474 = chunk__25467;
var G__25475 = count__25468;
var G__25476 = (i__25469 + (1));
seq__25466 = G__25473;
chunk__25467 = G__25474;
count__25468 = G__25475;
i__25469 = G__25476;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25466);
if(temp__4425__auto__){
var seq__25466__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25466__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__25466__$1);
var G__25477 = cljs.core.chunk_rest.call(null,seq__25466__$1);
var G__25478 = c__17622__auto__;
var G__25479 = cljs.core.count.call(null,c__17622__auto__);
var G__25480 = (0);
seq__25466 = G__25477;
chunk__25467 = G__25478;
count__25468 = G__25479;
i__25469 = G__25480;
continue;
} else {
var vec__25471 = cljs.core.first.call(null,seq__25466__$1);
var k = cljs.core.nth.call(null,vec__25471,(0),null);
var plugin = cljs.core.nth.call(null,vec__25471,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25481 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25466,chunk__25467,count__25468,i__25469,pl_25481,vec__25471,k,plugin,seq__25466__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25481.call(null,msg_hist);
});})(seq__25466,chunk__25467,count__25468,i__25469,pl_25481,vec__25471,k,plugin,seq__25466__$1,temp__4425__auto__))
);
} else {
}

var G__25482 = cljs.core.next.call(null,seq__25466__$1);
var G__25483 = null;
var G__25484 = (0);
var G__25485 = (0);
seq__25466 = G__25482;
chunk__25467 = G__25483;
count__25468 = G__25484;
i__25469 = G__25485;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25486 = [];
var len__17877__auto___25489 = arguments.length;
var i__17878__auto___25490 = (0);
while(true){
if((i__17878__auto___25490 < len__17877__auto___25489)){
args25486.push((arguments[i__17878__auto___25490]));

var G__25491 = (i__17878__auto___25490 + (1));
i__17878__auto___25490 = G__25491;
continue;
} else {
}
break;
}

var G__25488 = args25486.length;
switch (G__25488) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25486.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17884__auto__ = [];
var len__17877__auto___25497 = arguments.length;
var i__17878__auto___25498 = (0);
while(true){
if((i__17878__auto___25498 < len__17877__auto___25497)){
args__17884__auto__.push((arguments[i__17878__auto___25498]));

var G__25499 = (i__17878__auto___25498 + (1));
i__17878__auto___25498 = G__25499;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25494){
var map__25495 = p__25494;
var map__25495__$1 = ((((!((map__25495 == null)))?((((map__25495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25495):map__25495);
var opts = map__25495__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25493){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25493));
});

//# sourceMappingURL=client.js.map?rel=1457668830198