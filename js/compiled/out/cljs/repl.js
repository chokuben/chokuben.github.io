// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24354_24368 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24355_24369 = null;
var count__24356_24370 = (0);
var i__24357_24371 = (0);
while(true){
if((i__24357_24371 < count__24356_24370)){
var f_24372 = cljs.core._nth.call(null,chunk__24355_24369,i__24357_24371);
cljs.core.println.call(null,"  ",f_24372);

var G__24373 = seq__24354_24368;
var G__24374 = chunk__24355_24369;
var G__24375 = count__24356_24370;
var G__24376 = (i__24357_24371 + (1));
seq__24354_24368 = G__24373;
chunk__24355_24369 = G__24374;
count__24356_24370 = G__24375;
i__24357_24371 = G__24376;
continue;
} else {
var temp__4425__auto___24377 = cljs.core.seq.call(null,seq__24354_24368);
if(temp__4425__auto___24377){
var seq__24354_24378__$1 = temp__4425__auto___24377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24354_24378__$1)){
var c__17622__auto___24379 = cljs.core.chunk_first.call(null,seq__24354_24378__$1);
var G__24380 = cljs.core.chunk_rest.call(null,seq__24354_24378__$1);
var G__24381 = c__17622__auto___24379;
var G__24382 = cljs.core.count.call(null,c__17622__auto___24379);
var G__24383 = (0);
seq__24354_24368 = G__24380;
chunk__24355_24369 = G__24381;
count__24356_24370 = G__24382;
i__24357_24371 = G__24383;
continue;
} else {
var f_24384 = cljs.core.first.call(null,seq__24354_24378__$1);
cljs.core.println.call(null,"  ",f_24384);

var G__24385 = cljs.core.next.call(null,seq__24354_24378__$1);
var G__24386 = null;
var G__24387 = (0);
var G__24388 = (0);
seq__24354_24368 = G__24385;
chunk__24355_24369 = G__24386;
count__24356_24370 = G__24387;
i__24357_24371 = G__24388;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24389 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24389);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24389)))?cljs.core.second.call(null,arglists_24389):arglists_24389));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24359 = null;
var count__24360 = (0);
var i__24361 = (0);
while(true){
if((i__24361 < count__24360)){
var vec__24362 = cljs.core._nth.call(null,chunk__24359,i__24361);
var name = cljs.core.nth.call(null,vec__24362,(0),null);
var map__24363 = cljs.core.nth.call(null,vec__24362,(1),null);
var map__24363__$1 = ((((!((map__24363 == null)))?((((map__24363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24363):map__24363);
var doc = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24363__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24390 = seq__24358;
var G__24391 = chunk__24359;
var G__24392 = count__24360;
var G__24393 = (i__24361 + (1));
seq__24358 = G__24390;
chunk__24359 = G__24391;
count__24360 = G__24392;
i__24361 = G__24393;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24358);
if(temp__4425__auto__){
var seq__24358__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24358__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24358__$1);
var G__24394 = cljs.core.chunk_rest.call(null,seq__24358__$1);
var G__24395 = c__17622__auto__;
var G__24396 = cljs.core.count.call(null,c__17622__auto__);
var G__24397 = (0);
seq__24358 = G__24394;
chunk__24359 = G__24395;
count__24360 = G__24396;
i__24361 = G__24397;
continue;
} else {
var vec__24365 = cljs.core.first.call(null,seq__24358__$1);
var name = cljs.core.nth.call(null,vec__24365,(0),null);
var map__24366 = cljs.core.nth.call(null,vec__24365,(1),null);
var map__24366__$1 = ((((!((map__24366 == null)))?((((map__24366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24366):map__24366);
var doc = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24366__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24398 = cljs.core.next.call(null,seq__24358__$1);
var G__24399 = null;
var G__24400 = (0);
var G__24401 = (0);
seq__24358 = G__24398;
chunk__24359 = G__24399;
count__24360 = G__24400;
i__24361 = G__24401;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1457668829238