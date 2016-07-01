// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16819__auto__){
return or__16819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23330_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23330_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23335 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23336 = null;
var count__23337 = (0);
var i__23338 = (0);
while(true){
if((i__23338 < count__23337)){
var n = cljs.core._nth.call(null,chunk__23336,i__23338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23339 = seq__23335;
var G__23340 = chunk__23336;
var G__23341 = count__23337;
var G__23342 = (i__23338 + (1));
seq__23335 = G__23339;
chunk__23336 = G__23340;
count__23337 = G__23341;
i__23338 = G__23342;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23335);
if(temp__4425__auto__){
var seq__23335__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23335__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__23335__$1);
var G__23343 = cljs.core.chunk_rest.call(null,seq__23335__$1);
var G__23344 = c__17622__auto__;
var G__23345 = cljs.core.count.call(null,c__17622__auto__);
var G__23346 = (0);
seq__23335 = G__23343;
chunk__23336 = G__23344;
count__23337 = G__23345;
i__23338 = G__23346;
continue;
} else {
var n = cljs.core.first.call(null,seq__23335__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23347 = cljs.core.next.call(null,seq__23335__$1);
var G__23348 = null;
var G__23349 = (0);
var G__23350 = (0);
seq__23335 = G__23347;
chunk__23336 = G__23348;
count__23337 = G__23349;
i__23338 = G__23350;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23389_23396 = cljs.core.seq.call(null,deps);
var chunk__23390_23397 = null;
var count__23391_23398 = (0);
var i__23392_23399 = (0);
while(true){
if((i__23392_23399 < count__23391_23398)){
var dep_23400 = cljs.core._nth.call(null,chunk__23390_23397,i__23392_23399);
topo_sort_helper_STAR_.call(null,dep_23400,(depth + (1)),state);

var G__23401 = seq__23389_23396;
var G__23402 = chunk__23390_23397;
var G__23403 = count__23391_23398;
var G__23404 = (i__23392_23399 + (1));
seq__23389_23396 = G__23401;
chunk__23390_23397 = G__23402;
count__23391_23398 = G__23403;
i__23392_23399 = G__23404;
continue;
} else {
var temp__4425__auto___23405 = cljs.core.seq.call(null,seq__23389_23396);
if(temp__4425__auto___23405){
var seq__23389_23406__$1 = temp__4425__auto___23405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23389_23406__$1)){
var c__17622__auto___23407 = cljs.core.chunk_first.call(null,seq__23389_23406__$1);
var G__23408 = cljs.core.chunk_rest.call(null,seq__23389_23406__$1);
var G__23409 = c__17622__auto___23407;
var G__23410 = cljs.core.count.call(null,c__17622__auto___23407);
var G__23411 = (0);
seq__23389_23396 = G__23408;
chunk__23390_23397 = G__23409;
count__23391_23398 = G__23410;
i__23392_23399 = G__23411;
continue;
} else {
var dep_23412 = cljs.core.first.call(null,seq__23389_23406__$1);
topo_sort_helper_STAR_.call(null,dep_23412,(depth + (1)),state);

var G__23413 = cljs.core.next.call(null,seq__23389_23406__$1);
var G__23414 = null;
var G__23415 = (0);
var G__23416 = (0);
seq__23389_23396 = G__23413;
chunk__23390_23397 = G__23414;
count__23391_23398 = G__23415;
i__23392_23399 = G__23416;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23393){
var vec__23395 = p__23393;
var x = cljs.core.nth.call(null,vec__23395,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23395,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23395,x,xs,get_deps__$1){
return (function (p1__23351_SHARP_){
return clojure.set.difference.call(null,p1__23351_SHARP_,x);
});})(vec__23395,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23429 = cljs.core.seq.call(null,provides);
var chunk__23430 = null;
var count__23431 = (0);
var i__23432 = (0);
while(true){
if((i__23432 < count__23431)){
var prov = cljs.core._nth.call(null,chunk__23430,i__23432);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23433_23441 = cljs.core.seq.call(null,requires);
var chunk__23434_23442 = null;
var count__23435_23443 = (0);
var i__23436_23444 = (0);
while(true){
if((i__23436_23444 < count__23435_23443)){
var req_23445 = cljs.core._nth.call(null,chunk__23434_23442,i__23436_23444);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23445,prov);

var G__23446 = seq__23433_23441;
var G__23447 = chunk__23434_23442;
var G__23448 = count__23435_23443;
var G__23449 = (i__23436_23444 + (1));
seq__23433_23441 = G__23446;
chunk__23434_23442 = G__23447;
count__23435_23443 = G__23448;
i__23436_23444 = G__23449;
continue;
} else {
var temp__4425__auto___23450 = cljs.core.seq.call(null,seq__23433_23441);
if(temp__4425__auto___23450){
var seq__23433_23451__$1 = temp__4425__auto___23450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23433_23451__$1)){
var c__17622__auto___23452 = cljs.core.chunk_first.call(null,seq__23433_23451__$1);
var G__23453 = cljs.core.chunk_rest.call(null,seq__23433_23451__$1);
var G__23454 = c__17622__auto___23452;
var G__23455 = cljs.core.count.call(null,c__17622__auto___23452);
var G__23456 = (0);
seq__23433_23441 = G__23453;
chunk__23434_23442 = G__23454;
count__23435_23443 = G__23455;
i__23436_23444 = G__23456;
continue;
} else {
var req_23457 = cljs.core.first.call(null,seq__23433_23451__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23457,prov);

var G__23458 = cljs.core.next.call(null,seq__23433_23451__$1);
var G__23459 = null;
var G__23460 = (0);
var G__23461 = (0);
seq__23433_23441 = G__23458;
chunk__23434_23442 = G__23459;
count__23435_23443 = G__23460;
i__23436_23444 = G__23461;
continue;
}
} else {
}
}
break;
}

var G__23462 = seq__23429;
var G__23463 = chunk__23430;
var G__23464 = count__23431;
var G__23465 = (i__23432 + (1));
seq__23429 = G__23462;
chunk__23430 = G__23463;
count__23431 = G__23464;
i__23432 = G__23465;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23429);
if(temp__4425__auto__){
var seq__23429__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23429__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__23429__$1);
var G__23466 = cljs.core.chunk_rest.call(null,seq__23429__$1);
var G__23467 = c__17622__auto__;
var G__23468 = cljs.core.count.call(null,c__17622__auto__);
var G__23469 = (0);
seq__23429 = G__23466;
chunk__23430 = G__23467;
count__23431 = G__23468;
i__23432 = G__23469;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23429__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23437_23470 = cljs.core.seq.call(null,requires);
var chunk__23438_23471 = null;
var count__23439_23472 = (0);
var i__23440_23473 = (0);
while(true){
if((i__23440_23473 < count__23439_23472)){
var req_23474 = cljs.core._nth.call(null,chunk__23438_23471,i__23440_23473);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23474,prov);

var G__23475 = seq__23437_23470;
var G__23476 = chunk__23438_23471;
var G__23477 = count__23439_23472;
var G__23478 = (i__23440_23473 + (1));
seq__23437_23470 = G__23475;
chunk__23438_23471 = G__23476;
count__23439_23472 = G__23477;
i__23440_23473 = G__23478;
continue;
} else {
var temp__4425__auto___23479__$1 = cljs.core.seq.call(null,seq__23437_23470);
if(temp__4425__auto___23479__$1){
var seq__23437_23480__$1 = temp__4425__auto___23479__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23437_23480__$1)){
var c__17622__auto___23481 = cljs.core.chunk_first.call(null,seq__23437_23480__$1);
var G__23482 = cljs.core.chunk_rest.call(null,seq__23437_23480__$1);
var G__23483 = c__17622__auto___23481;
var G__23484 = cljs.core.count.call(null,c__17622__auto___23481);
var G__23485 = (0);
seq__23437_23470 = G__23482;
chunk__23438_23471 = G__23483;
count__23439_23472 = G__23484;
i__23440_23473 = G__23485;
continue;
} else {
var req_23486 = cljs.core.first.call(null,seq__23437_23480__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23486,prov);

var G__23487 = cljs.core.next.call(null,seq__23437_23480__$1);
var G__23488 = null;
var G__23489 = (0);
var G__23490 = (0);
seq__23437_23470 = G__23487;
chunk__23438_23471 = G__23488;
count__23439_23472 = G__23489;
i__23440_23473 = G__23490;
continue;
}
} else {
}
}
break;
}

var G__23491 = cljs.core.next.call(null,seq__23429__$1);
var G__23492 = null;
var G__23493 = (0);
var G__23494 = (0);
seq__23429 = G__23491;
chunk__23430 = G__23492;
count__23431 = G__23493;
i__23432 = G__23494;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23499_23503 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23500_23504 = null;
var count__23501_23505 = (0);
var i__23502_23506 = (0);
while(true){
if((i__23502_23506 < count__23501_23505)){
var ns_23507 = cljs.core._nth.call(null,chunk__23500_23504,i__23502_23506);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23507);

var G__23508 = seq__23499_23503;
var G__23509 = chunk__23500_23504;
var G__23510 = count__23501_23505;
var G__23511 = (i__23502_23506 + (1));
seq__23499_23503 = G__23508;
chunk__23500_23504 = G__23509;
count__23501_23505 = G__23510;
i__23502_23506 = G__23511;
continue;
} else {
var temp__4425__auto___23512 = cljs.core.seq.call(null,seq__23499_23503);
if(temp__4425__auto___23512){
var seq__23499_23513__$1 = temp__4425__auto___23512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23499_23513__$1)){
var c__17622__auto___23514 = cljs.core.chunk_first.call(null,seq__23499_23513__$1);
var G__23515 = cljs.core.chunk_rest.call(null,seq__23499_23513__$1);
var G__23516 = c__17622__auto___23514;
var G__23517 = cljs.core.count.call(null,c__17622__auto___23514);
var G__23518 = (0);
seq__23499_23503 = G__23515;
chunk__23500_23504 = G__23516;
count__23501_23505 = G__23517;
i__23502_23506 = G__23518;
continue;
} else {
var ns_23519 = cljs.core.first.call(null,seq__23499_23513__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23519);

var G__23520 = cljs.core.next.call(null,seq__23499_23513__$1);
var G__23521 = null;
var G__23522 = (0);
var G__23523 = (0);
seq__23499_23503 = G__23520;
chunk__23500_23504 = G__23521;
count__23501_23505 = G__23522;
i__23502_23506 = G__23523;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16819__auto__ = goog.require__;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23524__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23525__i = 0, G__23525__a = new Array(arguments.length -  0);
while (G__23525__i < G__23525__a.length) {G__23525__a[G__23525__i] = arguments[G__23525__i + 0]; ++G__23525__i;}
  args = new cljs.core.IndexedSeq(G__23525__a,0);
} 
return G__23524__delegate.call(this,args);};
G__23524.cljs$lang$maxFixedArity = 0;
G__23524.cljs$lang$applyTo = (function (arglist__23526){
var args = cljs.core.seq(arglist__23526);
return G__23524__delegate(args);
});
G__23524.cljs$core$IFn$_invoke$arity$variadic = G__23524__delegate;
return G__23524;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23528 = cljs.core._EQ_;
var expr__23529 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23528.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23529))){
var path_parts = ((function (pred__23528,expr__23529){
return (function (p1__23527_SHARP_){
return clojure.string.split.call(null,p1__23527_SHARP_,/[\/\\]/);
});})(pred__23528,expr__23529))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23528,expr__23529){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23531){if((e23531 instanceof Error)){
var e = e23531;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23531;

}
}})());
});
;})(path_parts,sep,root,pred__23528,expr__23529))
} else {
if(cljs.core.truth_(pred__23528.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23529))){
return ((function (pred__23528,expr__23529){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23528,expr__23529){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23528,expr__23529))
);

return deferred.addErrback(((function (deferred,pred__23528,expr__23529){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23528,expr__23529))
);
});
;})(pred__23528,expr__23529))
} else {
return ((function (pred__23528,expr__23529){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23528,expr__23529))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23532,callback){
var map__23535 = p__23532;
var map__23535__$1 = ((((!((map__23535 == null)))?((((map__23535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23535):map__23535);
var file_msg = map__23535__$1;
var request_url = cljs.core.get.call(null,map__23535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23535,map__23535__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23535,map__23535__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_23559){
var state_val_23560 = (state_23559[(1)]);
if((state_val_23560 === (7))){
var inst_23555 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
var statearr_23561_23581 = state_23559__$1;
(statearr_23561_23581[(2)] = inst_23555);

(statearr_23561_23581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (1))){
var state_23559__$1 = state_23559;
var statearr_23562_23582 = state_23559__$1;
(statearr_23562_23582[(2)] = null);

(statearr_23562_23582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (4))){
var inst_23539 = (state_23559[(7)]);
var inst_23539__$1 = (state_23559[(2)]);
var state_23559__$1 = (function (){var statearr_23563 = state_23559;
(statearr_23563[(7)] = inst_23539__$1);

return statearr_23563;
})();
if(cljs.core.truth_(inst_23539__$1)){
var statearr_23564_23583 = state_23559__$1;
(statearr_23564_23583[(1)] = (5));

} else {
var statearr_23565_23584 = state_23559__$1;
(statearr_23565_23584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (6))){
var state_23559__$1 = state_23559;
var statearr_23566_23585 = state_23559__$1;
(statearr_23566_23585[(2)] = null);

(statearr_23566_23585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (3))){
var inst_23557 = (state_23559[(2)]);
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23559__$1,inst_23557);
} else {
if((state_val_23560 === (2))){
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23559__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23560 === (11))){
var inst_23551 = (state_23559[(2)]);
var state_23559__$1 = (function (){var statearr_23567 = state_23559;
(statearr_23567[(8)] = inst_23551);

return statearr_23567;
})();
var statearr_23568_23586 = state_23559__$1;
(statearr_23568_23586[(2)] = null);

(statearr_23568_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (9))){
var inst_23543 = (state_23559[(9)]);
var inst_23545 = (state_23559[(10)]);
var inst_23547 = inst_23545.call(null,inst_23543);
var state_23559__$1 = state_23559;
var statearr_23569_23587 = state_23559__$1;
(statearr_23569_23587[(2)] = inst_23547);

(statearr_23569_23587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (5))){
var inst_23539 = (state_23559[(7)]);
var inst_23541 = figwheel.client.file_reloading.blocking_load.call(null,inst_23539);
var state_23559__$1 = state_23559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23559__$1,(8),inst_23541);
} else {
if((state_val_23560 === (10))){
var inst_23543 = (state_23559[(9)]);
var inst_23549 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23543);
var state_23559__$1 = state_23559;
var statearr_23570_23588 = state_23559__$1;
(statearr_23570_23588[(2)] = inst_23549);

(statearr_23570_23588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23560 === (8))){
var inst_23545 = (state_23559[(10)]);
var inst_23539 = (state_23559[(7)]);
var inst_23543 = (state_23559[(2)]);
var inst_23544 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23545__$1 = cljs.core.get.call(null,inst_23544,inst_23539);
var state_23559__$1 = (function (){var statearr_23571 = state_23559;
(statearr_23571[(9)] = inst_23543);

(statearr_23571[(10)] = inst_23545__$1);

return statearr_23571;
})();
if(cljs.core.truth_(inst_23545__$1)){
var statearr_23572_23589 = state_23559__$1;
(statearr_23572_23589[(1)] = (9));

} else {
var statearr_23573_23590 = state_23559__$1;
(statearr_23573_23590[(1)] = (10));

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
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20362__auto__ = null;
var figwheel$client$file_reloading$state_machine__20362__auto____0 = (function (){
var statearr_23577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23577[(0)] = figwheel$client$file_reloading$state_machine__20362__auto__);

(statearr_23577[(1)] = (1));

return statearr_23577;
});
var figwheel$client$file_reloading$state_machine__20362__auto____1 = (function (state_23559){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_23559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e23578){if((e23578 instanceof Object)){
var ex__20365__auto__ = e23578;
var statearr_23579_23591 = state_23559;
(statearr_23579_23591[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23592 = state_23559;
state_23559 = G__23592;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20362__auto__ = function(state_23559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20362__auto____1.call(this,state_23559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20362__auto____0;
figwheel$client$file_reloading$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20362__auto____1;
return figwheel$client$file_reloading$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_23580 = f__20474__auto__.call(null);
(statearr_23580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_23580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23593,callback){
var map__23596 = p__23593;
var map__23596__$1 = ((((!((map__23596 == null)))?((((map__23596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23596):map__23596);
var file_msg = map__23596__$1;
var namespace = cljs.core.get.call(null,map__23596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23596,map__23596__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23596,map__23596__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23598){
var map__23601 = p__23598;
var map__23601__$1 = ((((!((map__23601 == null)))?((((map__23601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23601):map__23601);
var file_msg = map__23601__$1;
var namespace = cljs.core.get.call(null,map__23601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16807__auto__){
var or__16819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var or__16819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto____$1)){
return or__16819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23603,callback){
var map__23606 = p__23603;
var map__23606__$1 = ((((!((map__23606 == null)))?((((map__23606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23606):map__23606);
var file_msg = map__23606__$1;
var request_url = cljs.core.get.call(null,map__23606__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20473__auto___23694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___23694,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___23694,out){
return (function (state_23676){
var state_val_23677 = (state_23676[(1)]);
if((state_val_23677 === (1))){
var inst_23654 = cljs.core.nth.call(null,files,(0),null);
var inst_23655 = cljs.core.nthnext.call(null,files,(1));
var inst_23656 = files;
var state_23676__$1 = (function (){var statearr_23678 = state_23676;
(statearr_23678[(7)] = inst_23655);

(statearr_23678[(8)] = inst_23656);

(statearr_23678[(9)] = inst_23654);

return statearr_23678;
})();
var statearr_23679_23695 = state_23676__$1;
(statearr_23679_23695[(2)] = null);

(statearr_23679_23695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (2))){
var inst_23656 = (state_23676[(8)]);
var inst_23659 = (state_23676[(10)]);
var inst_23659__$1 = cljs.core.nth.call(null,inst_23656,(0),null);
var inst_23660 = cljs.core.nthnext.call(null,inst_23656,(1));
var inst_23661 = (inst_23659__$1 == null);
var inst_23662 = cljs.core.not.call(null,inst_23661);
var state_23676__$1 = (function (){var statearr_23680 = state_23676;
(statearr_23680[(10)] = inst_23659__$1);

(statearr_23680[(11)] = inst_23660);

return statearr_23680;
})();
if(inst_23662){
var statearr_23681_23696 = state_23676__$1;
(statearr_23681_23696[(1)] = (4));

} else {
var statearr_23682_23697 = state_23676__$1;
(statearr_23682_23697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (3))){
var inst_23674 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23676__$1,inst_23674);
} else {
if((state_val_23677 === (4))){
var inst_23659 = (state_23676[(10)]);
var inst_23664 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23659);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23676__$1,(7),inst_23664);
} else {
if((state_val_23677 === (5))){
var inst_23670 = cljs.core.async.close_BANG_.call(null,out);
var state_23676__$1 = state_23676;
var statearr_23683_23698 = state_23676__$1;
(statearr_23683_23698[(2)] = inst_23670);

(statearr_23683_23698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (6))){
var inst_23672 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
var statearr_23684_23699 = state_23676__$1;
(statearr_23684_23699[(2)] = inst_23672);

(statearr_23684_23699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (7))){
var inst_23660 = (state_23676[(11)]);
var inst_23666 = (state_23676[(2)]);
var inst_23667 = cljs.core.async.put_BANG_.call(null,out,inst_23666);
var inst_23656 = inst_23660;
var state_23676__$1 = (function (){var statearr_23685 = state_23676;
(statearr_23685[(8)] = inst_23656);

(statearr_23685[(12)] = inst_23667);

return statearr_23685;
})();
var statearr_23686_23700 = state_23676__$1;
(statearr_23686_23700[(2)] = null);

(statearr_23686_23700[(1)] = (2));


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
});})(c__20473__auto___23694,out))
;
return ((function (switch__20361__auto__,c__20473__auto___23694,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____0 = (function (){
var statearr_23690 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23690[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__);

(statearr_23690[(1)] = (1));

return statearr_23690;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____1 = (function (state_23676){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_23676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e23691){if((e23691 instanceof Object)){
var ex__20365__auto__ = e23691;
var statearr_23692_23701 = state_23676;
(statearr_23692_23701[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23702 = state_23676;
state_23676 = G__23702;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__ = function(state_23676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____1.call(this,state_23676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___23694,out))
})();
var state__20475__auto__ = (function (){var statearr_23693 = f__20474__auto__.call(null);
(statearr_23693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___23694);

return statearr_23693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___23694,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23703,opts){
var map__23707 = p__23703;
var map__23707__$1 = ((((!((map__23707 == null)))?((((map__23707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);
var eval_body__$1 = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23709){var e = e23709;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23710_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23710_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23715){
var vec__23716 = p__23715;
var k = cljs.core.nth.call(null,vec__23716,(0),null);
var v = cljs.core.nth.call(null,vec__23716,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23717){
var vec__23718 = p__23717;
var k = cljs.core.nth.call(null,vec__23718,(0),null);
var v = cljs.core.nth.call(null,vec__23718,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23722,p__23723){
var map__23970 = p__23722;
var map__23970__$1 = ((((!((map__23970 == null)))?((((map__23970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23970):map__23970);
var opts = map__23970__$1;
var before_jsload = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23970__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23971 = p__23723;
var map__23971__$1 = ((((!((map__23971 == null)))?((((map__23971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23971):map__23971);
var msg = map__23971__$1;
var files = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23971__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24124){
var state_val_24125 = (state_24124[(1)]);
if((state_val_24125 === (7))){
var inst_23986 = (state_24124[(7)]);
var inst_23987 = (state_24124[(8)]);
var inst_23988 = (state_24124[(9)]);
var inst_23985 = (state_24124[(10)]);
var inst_23993 = cljs.core._nth.call(null,inst_23986,inst_23988);
var inst_23994 = figwheel.client.file_reloading.eval_body.call(null,inst_23993,opts);
var inst_23995 = (inst_23988 + (1));
var tmp24126 = inst_23986;
var tmp24127 = inst_23987;
var tmp24128 = inst_23985;
var inst_23985__$1 = tmp24128;
var inst_23986__$1 = tmp24126;
var inst_23987__$1 = tmp24127;
var inst_23988__$1 = inst_23995;
var state_24124__$1 = (function (){var statearr_24129 = state_24124;
(statearr_24129[(7)] = inst_23986__$1);

(statearr_24129[(8)] = inst_23987__$1);

(statearr_24129[(9)] = inst_23988__$1);

(statearr_24129[(10)] = inst_23985__$1);

(statearr_24129[(11)] = inst_23994);

return statearr_24129;
})();
var statearr_24130_24216 = state_24124__$1;
(statearr_24130_24216[(2)] = null);

(statearr_24130_24216[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (20))){
var inst_24028 = (state_24124[(12)]);
var inst_24036 = figwheel.client.file_reloading.sort_files.call(null,inst_24028);
var state_24124__$1 = state_24124;
var statearr_24131_24217 = state_24124__$1;
(statearr_24131_24217[(2)] = inst_24036);

(statearr_24131_24217[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (27))){
var state_24124__$1 = state_24124;
var statearr_24132_24218 = state_24124__$1;
(statearr_24132_24218[(2)] = null);

(statearr_24132_24218[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (1))){
var inst_23977 = (state_24124[(13)]);
var inst_23974 = before_jsload.call(null,files);
var inst_23975 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23976 = (function (){return ((function (inst_23977,inst_23974,inst_23975,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23719_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23719_SHARP_);
});
;})(inst_23977,inst_23974,inst_23975,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23977__$1 = cljs.core.filter.call(null,inst_23976,files);
var inst_23978 = cljs.core.not_empty.call(null,inst_23977__$1);
var state_24124__$1 = (function (){var statearr_24133 = state_24124;
(statearr_24133[(14)] = inst_23975);

(statearr_24133[(15)] = inst_23974);

(statearr_24133[(13)] = inst_23977__$1);

return statearr_24133;
})();
if(cljs.core.truth_(inst_23978)){
var statearr_24134_24219 = state_24124__$1;
(statearr_24134_24219[(1)] = (2));

} else {
var statearr_24135_24220 = state_24124__$1;
(statearr_24135_24220[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (24))){
var state_24124__$1 = state_24124;
var statearr_24136_24221 = state_24124__$1;
(statearr_24136_24221[(2)] = null);

(statearr_24136_24221[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (39))){
var inst_24078 = (state_24124[(16)]);
var state_24124__$1 = state_24124;
var statearr_24137_24222 = state_24124__$1;
(statearr_24137_24222[(2)] = inst_24078);

(statearr_24137_24222[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (46))){
var inst_24119 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24138_24223 = state_24124__$1;
(statearr_24138_24223[(2)] = inst_24119);

(statearr_24138_24223[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (4))){
var inst_24022 = (state_24124[(2)]);
var inst_24023 = cljs.core.List.EMPTY;
var inst_24024 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24023);
var inst_24025 = (function (){return ((function (inst_24022,inst_24023,inst_24024,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23720_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23720_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23720_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_24022,inst_24023,inst_24024,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24026 = cljs.core.filter.call(null,inst_24025,files);
var inst_24027 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24028 = cljs.core.concat.call(null,inst_24026,inst_24027);
var state_24124__$1 = (function (){var statearr_24139 = state_24124;
(statearr_24139[(12)] = inst_24028);

(statearr_24139[(17)] = inst_24022);

(statearr_24139[(18)] = inst_24024);

return statearr_24139;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24140_24224 = state_24124__$1;
(statearr_24140_24224[(1)] = (16));

} else {
var statearr_24141_24225 = state_24124__$1;
(statearr_24141_24225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (15))){
var inst_24012 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24142_24226 = state_24124__$1;
(statearr_24142_24226[(2)] = inst_24012);

(statearr_24142_24226[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (21))){
var inst_24038 = (state_24124[(19)]);
var inst_24038__$1 = (state_24124[(2)]);
var inst_24039 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24038__$1);
var state_24124__$1 = (function (){var statearr_24143 = state_24124;
(statearr_24143[(19)] = inst_24038__$1);

return statearr_24143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24124__$1,(22),inst_24039);
} else {
if((state_val_24125 === (31))){
var inst_24122 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24124__$1,inst_24122);
} else {
if((state_val_24125 === (32))){
var inst_24078 = (state_24124[(16)]);
var inst_24083 = inst_24078.cljs$lang$protocol_mask$partition0$;
var inst_24084 = (inst_24083 & (64));
var inst_24085 = inst_24078.cljs$core$ISeq$;
var inst_24086 = (inst_24084) || (inst_24085);
var state_24124__$1 = state_24124;
if(cljs.core.truth_(inst_24086)){
var statearr_24144_24227 = state_24124__$1;
(statearr_24144_24227[(1)] = (35));

} else {
var statearr_24145_24228 = state_24124__$1;
(statearr_24145_24228[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (40))){
var inst_24099 = (state_24124[(20)]);
var inst_24098 = (state_24124[(2)]);
var inst_24099__$1 = cljs.core.get.call(null,inst_24098,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24100 = cljs.core.get.call(null,inst_24098,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24101 = cljs.core.not_empty.call(null,inst_24099__$1);
var state_24124__$1 = (function (){var statearr_24146 = state_24124;
(statearr_24146[(20)] = inst_24099__$1);

(statearr_24146[(21)] = inst_24100);

return statearr_24146;
})();
if(cljs.core.truth_(inst_24101)){
var statearr_24147_24229 = state_24124__$1;
(statearr_24147_24229[(1)] = (41));

} else {
var statearr_24148_24230 = state_24124__$1;
(statearr_24148_24230[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (33))){
var state_24124__$1 = state_24124;
var statearr_24149_24231 = state_24124__$1;
(statearr_24149_24231[(2)] = false);

(statearr_24149_24231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (13))){
var inst_23998 = (state_24124[(22)]);
var inst_24002 = cljs.core.chunk_first.call(null,inst_23998);
var inst_24003 = cljs.core.chunk_rest.call(null,inst_23998);
var inst_24004 = cljs.core.count.call(null,inst_24002);
var inst_23985 = inst_24003;
var inst_23986 = inst_24002;
var inst_23987 = inst_24004;
var inst_23988 = (0);
var state_24124__$1 = (function (){var statearr_24150 = state_24124;
(statearr_24150[(7)] = inst_23986);

(statearr_24150[(8)] = inst_23987);

(statearr_24150[(9)] = inst_23988);

(statearr_24150[(10)] = inst_23985);

return statearr_24150;
})();
var statearr_24151_24232 = state_24124__$1;
(statearr_24151_24232[(2)] = null);

(statearr_24151_24232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (22))){
var inst_24046 = (state_24124[(23)]);
var inst_24041 = (state_24124[(24)]);
var inst_24038 = (state_24124[(19)]);
var inst_24042 = (state_24124[(25)]);
var inst_24041__$1 = (state_24124[(2)]);
var inst_24042__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24041__$1);
var inst_24043 = (function (){var all_files = inst_24038;
var res_SINGLEQUOTE_ = inst_24041__$1;
var res = inst_24042__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24046,inst_24041,inst_24038,inst_24042,inst_24041__$1,inst_24042__$1,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23721_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23721_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24046,inst_24041,inst_24038,inst_24042,inst_24041__$1,inst_24042__$1,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24044 = cljs.core.filter.call(null,inst_24043,inst_24041__$1);
var inst_24045 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24046__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24045);
var inst_24047 = cljs.core.not_empty.call(null,inst_24046__$1);
var state_24124__$1 = (function (){var statearr_24152 = state_24124;
(statearr_24152[(23)] = inst_24046__$1);

(statearr_24152[(26)] = inst_24044);

(statearr_24152[(24)] = inst_24041__$1);

(statearr_24152[(25)] = inst_24042__$1);

return statearr_24152;
})();
if(cljs.core.truth_(inst_24047)){
var statearr_24153_24233 = state_24124__$1;
(statearr_24153_24233[(1)] = (23));

} else {
var statearr_24154_24234 = state_24124__$1;
(statearr_24154_24234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (36))){
var state_24124__$1 = state_24124;
var statearr_24155_24235 = state_24124__$1;
(statearr_24155_24235[(2)] = false);

(statearr_24155_24235[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (41))){
var inst_24099 = (state_24124[(20)]);
var inst_24103 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24104 = cljs.core.map.call(null,inst_24103,inst_24099);
var inst_24105 = cljs.core.pr_str.call(null,inst_24104);
var inst_24106 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24105)].join('');
var inst_24107 = figwheel.client.utils.log.call(null,inst_24106);
var state_24124__$1 = state_24124;
var statearr_24156_24236 = state_24124__$1;
(statearr_24156_24236[(2)] = inst_24107);

(statearr_24156_24236[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (43))){
var inst_24100 = (state_24124[(21)]);
var inst_24110 = (state_24124[(2)]);
var inst_24111 = cljs.core.not_empty.call(null,inst_24100);
var state_24124__$1 = (function (){var statearr_24157 = state_24124;
(statearr_24157[(27)] = inst_24110);

return statearr_24157;
})();
if(cljs.core.truth_(inst_24111)){
var statearr_24158_24237 = state_24124__$1;
(statearr_24158_24237[(1)] = (44));

} else {
var statearr_24159_24238 = state_24124__$1;
(statearr_24159_24238[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (29))){
var inst_24046 = (state_24124[(23)]);
var inst_24078 = (state_24124[(16)]);
var inst_24044 = (state_24124[(26)]);
var inst_24041 = (state_24124[(24)]);
var inst_24038 = (state_24124[(19)]);
var inst_24042 = (state_24124[(25)]);
var inst_24074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24077 = (function (){var all_files = inst_24038;
var res_SINGLEQUOTE_ = inst_24041;
var res = inst_24042;
var files_not_loaded = inst_24044;
var dependencies_that_loaded = inst_24046;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24078,inst_24044,inst_24041,inst_24038,inst_24042,inst_24074,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24076){
var map__24160 = p__24076;
var map__24160__$1 = ((((!((map__24160 == null)))?((((map__24160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24160):map__24160);
var namespace = cljs.core.get.call(null,map__24160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24078,inst_24044,inst_24041,inst_24038,inst_24042,inst_24074,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24078__$1 = cljs.core.group_by.call(null,inst_24077,inst_24044);
var inst_24080 = (inst_24078__$1 == null);
var inst_24081 = cljs.core.not.call(null,inst_24080);
var state_24124__$1 = (function (){var statearr_24162 = state_24124;
(statearr_24162[(16)] = inst_24078__$1);

(statearr_24162[(28)] = inst_24074);

return statearr_24162;
})();
if(inst_24081){
var statearr_24163_24239 = state_24124__$1;
(statearr_24163_24239[(1)] = (32));

} else {
var statearr_24164_24240 = state_24124__$1;
(statearr_24164_24240[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (44))){
var inst_24100 = (state_24124[(21)]);
var inst_24113 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24100);
var inst_24114 = cljs.core.pr_str.call(null,inst_24113);
var inst_24115 = [cljs.core.str("not required: "),cljs.core.str(inst_24114)].join('');
var inst_24116 = figwheel.client.utils.log.call(null,inst_24115);
var state_24124__$1 = state_24124;
var statearr_24165_24241 = state_24124__$1;
(statearr_24165_24241[(2)] = inst_24116);

(statearr_24165_24241[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (6))){
var inst_24019 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24166_24242 = state_24124__$1;
(statearr_24166_24242[(2)] = inst_24019);

(statearr_24166_24242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (28))){
var inst_24044 = (state_24124[(26)]);
var inst_24071 = (state_24124[(2)]);
var inst_24072 = cljs.core.not_empty.call(null,inst_24044);
var state_24124__$1 = (function (){var statearr_24167 = state_24124;
(statearr_24167[(29)] = inst_24071);

return statearr_24167;
})();
if(cljs.core.truth_(inst_24072)){
var statearr_24168_24243 = state_24124__$1;
(statearr_24168_24243[(1)] = (29));

} else {
var statearr_24169_24244 = state_24124__$1;
(statearr_24169_24244[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (25))){
var inst_24042 = (state_24124[(25)]);
var inst_24058 = (state_24124[(2)]);
var inst_24059 = cljs.core.not_empty.call(null,inst_24042);
var state_24124__$1 = (function (){var statearr_24170 = state_24124;
(statearr_24170[(30)] = inst_24058);

return statearr_24170;
})();
if(cljs.core.truth_(inst_24059)){
var statearr_24171_24245 = state_24124__$1;
(statearr_24171_24245[(1)] = (26));

} else {
var statearr_24172_24246 = state_24124__$1;
(statearr_24172_24246[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (34))){
var inst_24093 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
if(cljs.core.truth_(inst_24093)){
var statearr_24173_24247 = state_24124__$1;
(statearr_24173_24247[(1)] = (38));

} else {
var statearr_24174_24248 = state_24124__$1;
(statearr_24174_24248[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (17))){
var state_24124__$1 = state_24124;
var statearr_24175_24249 = state_24124__$1;
(statearr_24175_24249[(2)] = recompile_dependents);

(statearr_24175_24249[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (3))){
var state_24124__$1 = state_24124;
var statearr_24176_24250 = state_24124__$1;
(statearr_24176_24250[(2)] = null);

(statearr_24176_24250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (12))){
var inst_24015 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24177_24251 = state_24124__$1;
(statearr_24177_24251[(2)] = inst_24015);

(statearr_24177_24251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (2))){
var inst_23977 = (state_24124[(13)]);
var inst_23984 = cljs.core.seq.call(null,inst_23977);
var inst_23985 = inst_23984;
var inst_23986 = null;
var inst_23987 = (0);
var inst_23988 = (0);
var state_24124__$1 = (function (){var statearr_24178 = state_24124;
(statearr_24178[(7)] = inst_23986);

(statearr_24178[(8)] = inst_23987);

(statearr_24178[(9)] = inst_23988);

(statearr_24178[(10)] = inst_23985);

return statearr_24178;
})();
var statearr_24179_24252 = state_24124__$1;
(statearr_24179_24252[(2)] = null);

(statearr_24179_24252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (23))){
var inst_24046 = (state_24124[(23)]);
var inst_24044 = (state_24124[(26)]);
var inst_24041 = (state_24124[(24)]);
var inst_24038 = (state_24124[(19)]);
var inst_24042 = (state_24124[(25)]);
var inst_24049 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24051 = (function (){var all_files = inst_24038;
var res_SINGLEQUOTE_ = inst_24041;
var res = inst_24042;
var files_not_loaded = inst_24044;
var dependencies_that_loaded = inst_24046;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24049,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24050){
var map__24180 = p__24050;
var map__24180__$1 = ((((!((map__24180 == null)))?((((map__24180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24180):map__24180);
var request_url = cljs.core.get.call(null,map__24180__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24049,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24052 = cljs.core.reverse.call(null,inst_24046);
var inst_24053 = cljs.core.map.call(null,inst_24051,inst_24052);
var inst_24054 = cljs.core.pr_str.call(null,inst_24053);
var inst_24055 = figwheel.client.utils.log.call(null,inst_24054);
var state_24124__$1 = (function (){var statearr_24182 = state_24124;
(statearr_24182[(31)] = inst_24049);

return statearr_24182;
})();
var statearr_24183_24253 = state_24124__$1;
(statearr_24183_24253[(2)] = inst_24055);

(statearr_24183_24253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (35))){
var state_24124__$1 = state_24124;
var statearr_24184_24254 = state_24124__$1;
(statearr_24184_24254[(2)] = true);

(statearr_24184_24254[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (19))){
var inst_24028 = (state_24124[(12)]);
var inst_24034 = figwheel.client.file_reloading.expand_files.call(null,inst_24028);
var state_24124__$1 = state_24124;
var statearr_24185_24255 = state_24124__$1;
(statearr_24185_24255[(2)] = inst_24034);

(statearr_24185_24255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (11))){
var state_24124__$1 = state_24124;
var statearr_24186_24256 = state_24124__$1;
(statearr_24186_24256[(2)] = null);

(statearr_24186_24256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (9))){
var inst_24017 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24187_24257 = state_24124__$1;
(statearr_24187_24257[(2)] = inst_24017);

(statearr_24187_24257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (5))){
var inst_23987 = (state_24124[(8)]);
var inst_23988 = (state_24124[(9)]);
var inst_23990 = (inst_23988 < inst_23987);
var inst_23991 = inst_23990;
var state_24124__$1 = state_24124;
if(cljs.core.truth_(inst_23991)){
var statearr_24188_24258 = state_24124__$1;
(statearr_24188_24258[(1)] = (7));

} else {
var statearr_24189_24259 = state_24124__$1;
(statearr_24189_24259[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (14))){
var inst_23998 = (state_24124[(22)]);
var inst_24007 = cljs.core.first.call(null,inst_23998);
var inst_24008 = figwheel.client.file_reloading.eval_body.call(null,inst_24007,opts);
var inst_24009 = cljs.core.next.call(null,inst_23998);
var inst_23985 = inst_24009;
var inst_23986 = null;
var inst_23987 = (0);
var inst_23988 = (0);
var state_24124__$1 = (function (){var statearr_24190 = state_24124;
(statearr_24190[(7)] = inst_23986);

(statearr_24190[(8)] = inst_23987);

(statearr_24190[(9)] = inst_23988);

(statearr_24190[(32)] = inst_24008);

(statearr_24190[(10)] = inst_23985);

return statearr_24190;
})();
var statearr_24191_24260 = state_24124__$1;
(statearr_24191_24260[(2)] = null);

(statearr_24191_24260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (45))){
var state_24124__$1 = state_24124;
var statearr_24192_24261 = state_24124__$1;
(statearr_24192_24261[(2)] = null);

(statearr_24192_24261[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (26))){
var inst_24046 = (state_24124[(23)]);
var inst_24044 = (state_24124[(26)]);
var inst_24041 = (state_24124[(24)]);
var inst_24038 = (state_24124[(19)]);
var inst_24042 = (state_24124[(25)]);
var inst_24061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24063 = (function (){var all_files = inst_24038;
var res_SINGLEQUOTE_ = inst_24041;
var res = inst_24042;
var files_not_loaded = inst_24044;
var dependencies_that_loaded = inst_24046;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24061,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24062){
var map__24193 = p__24062;
var map__24193__$1 = ((((!((map__24193 == null)))?((((map__24193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);
var namespace = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24061,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24064 = cljs.core.map.call(null,inst_24063,inst_24042);
var inst_24065 = cljs.core.pr_str.call(null,inst_24064);
var inst_24066 = figwheel.client.utils.log.call(null,inst_24065);
var inst_24067 = (function (){var all_files = inst_24038;
var res_SINGLEQUOTE_ = inst_24041;
var res = inst_24042;
var files_not_loaded = inst_24044;
var dependencies_that_loaded = inst_24046;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24061,inst_24063,inst_24064,inst_24065,inst_24066,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24046,inst_24044,inst_24041,inst_24038,inst_24042,inst_24061,inst_24063,inst_24064,inst_24065,inst_24066,state_val_24125,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24068 = setTimeout(inst_24067,(10));
var state_24124__$1 = (function (){var statearr_24195 = state_24124;
(statearr_24195[(33)] = inst_24061);

(statearr_24195[(34)] = inst_24066);

return statearr_24195;
})();
var statearr_24196_24262 = state_24124__$1;
(statearr_24196_24262[(2)] = inst_24068);

(statearr_24196_24262[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (16))){
var state_24124__$1 = state_24124;
var statearr_24197_24263 = state_24124__$1;
(statearr_24197_24263[(2)] = reload_dependents);

(statearr_24197_24263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (38))){
var inst_24078 = (state_24124[(16)]);
var inst_24095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24078);
var state_24124__$1 = state_24124;
var statearr_24198_24264 = state_24124__$1;
(statearr_24198_24264[(2)] = inst_24095);

(statearr_24198_24264[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (30))){
var state_24124__$1 = state_24124;
var statearr_24199_24265 = state_24124__$1;
(statearr_24199_24265[(2)] = null);

(statearr_24199_24265[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (10))){
var inst_23998 = (state_24124[(22)]);
var inst_24000 = cljs.core.chunked_seq_QMARK_.call(null,inst_23998);
var state_24124__$1 = state_24124;
if(inst_24000){
var statearr_24200_24266 = state_24124__$1;
(statearr_24200_24266[(1)] = (13));

} else {
var statearr_24201_24267 = state_24124__$1;
(statearr_24201_24267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (18))){
var inst_24032 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
if(cljs.core.truth_(inst_24032)){
var statearr_24202_24268 = state_24124__$1;
(statearr_24202_24268[(1)] = (19));

} else {
var statearr_24203_24269 = state_24124__$1;
(statearr_24203_24269[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (42))){
var state_24124__$1 = state_24124;
var statearr_24204_24270 = state_24124__$1;
(statearr_24204_24270[(2)] = null);

(statearr_24204_24270[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (37))){
var inst_24090 = (state_24124[(2)]);
var state_24124__$1 = state_24124;
var statearr_24205_24271 = state_24124__$1;
(statearr_24205_24271[(2)] = inst_24090);

(statearr_24205_24271[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24125 === (8))){
var inst_23998 = (state_24124[(22)]);
var inst_23985 = (state_24124[(10)]);
var inst_23998__$1 = cljs.core.seq.call(null,inst_23985);
var state_24124__$1 = (function (){var statearr_24206 = state_24124;
(statearr_24206[(22)] = inst_23998__$1);

return statearr_24206;
})();
if(inst_23998__$1){
var statearr_24207_24272 = state_24124__$1;
(statearr_24207_24272[(1)] = (10));

} else {
var statearr_24208_24273 = state_24124__$1;
(statearr_24208_24273[(1)] = (11));

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
});})(c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20361__auto__,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____0 = (function (){
var statearr_24212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24212[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__);

(statearr_24212[(1)] = (1));

return statearr_24212;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____1 = (function (state_24124){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_24124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e24213){if((e24213 instanceof Object)){
var ex__20365__auto__ = e24213;
var statearr_24214_24274 = state_24124;
(statearr_24214_24274[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24275 = state_24124;
state_24124 = G__24275;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__ = function(state_24124){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____1.call(this,state_24124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20475__auto__ = (function (){var statearr_24215 = f__20474__auto__.call(null);
(statearr_24215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_24215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__,map__23970,map__23970__$1,opts,before_jsload,on_jsload,reload_dependents,map__23971,map__23971__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20473__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24278,link){
var map__24281 = p__24278;
var map__24281__$1 = ((((!((map__24281 == null)))?((((map__24281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24281):map__24281);
var file = cljs.core.get.call(null,map__24281__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24281,map__24281__$1,file){
return (function (p1__24276_SHARP_,p2__24277_SHARP_){
if(cljs.core._EQ_.call(null,p1__24276_SHARP_,p2__24277_SHARP_)){
return p1__24276_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24281,map__24281__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24287){
var map__24288 = p__24287;
var map__24288__$1 = ((((!((map__24288 == null)))?((((map__24288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24288):map__24288);
var match_length = cljs.core.get.call(null,map__24288__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24288__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24283_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24283_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24290 = [];
var len__17877__auto___24293 = arguments.length;
var i__17878__auto___24294 = (0);
while(true){
if((i__17878__auto___24294 < len__17877__auto___24293)){
args24290.push((arguments[i__17878__auto___24294]));

var G__24295 = (i__17878__auto___24294 + (1));
i__17878__auto___24294 = G__24295;
continue;
} else {
}
break;
}

var G__24292 = args24290.length;
switch (G__24292) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24290.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24297_SHARP_,p2__24298_SHARP_){
return cljs.core.assoc.call(null,p1__24297_SHARP_,cljs.core.get.call(null,p2__24298_SHARP_,key),p2__24298_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24299){
var map__24302 = p__24299;
var map__24302__$1 = ((((!((map__24302 == null)))?((((map__24302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24302):map__24302);
var f_data = map__24302__$1;
var file = cljs.core.get.call(null,map__24302__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24304,files_msg){
var map__24311 = p__24304;
var map__24311__$1 = ((((!((map__24311 == null)))?((((map__24311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24311):map__24311);
var opts = map__24311__$1;
var on_cssload = cljs.core.get.call(null,map__24311__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24313_24317 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24314_24318 = null;
var count__24315_24319 = (0);
var i__24316_24320 = (0);
while(true){
if((i__24316_24320 < count__24315_24319)){
var f_24321 = cljs.core._nth.call(null,chunk__24314_24318,i__24316_24320);
figwheel.client.file_reloading.reload_css_file.call(null,f_24321);

var G__24322 = seq__24313_24317;
var G__24323 = chunk__24314_24318;
var G__24324 = count__24315_24319;
var G__24325 = (i__24316_24320 + (1));
seq__24313_24317 = G__24322;
chunk__24314_24318 = G__24323;
count__24315_24319 = G__24324;
i__24316_24320 = G__24325;
continue;
} else {
var temp__4425__auto___24326 = cljs.core.seq.call(null,seq__24313_24317);
if(temp__4425__auto___24326){
var seq__24313_24327__$1 = temp__4425__auto___24326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24313_24327__$1)){
var c__17622__auto___24328 = cljs.core.chunk_first.call(null,seq__24313_24327__$1);
var G__24329 = cljs.core.chunk_rest.call(null,seq__24313_24327__$1);
var G__24330 = c__17622__auto___24328;
var G__24331 = cljs.core.count.call(null,c__17622__auto___24328);
var G__24332 = (0);
seq__24313_24317 = G__24329;
chunk__24314_24318 = G__24330;
count__24315_24319 = G__24331;
i__24316_24320 = G__24332;
continue;
} else {
var f_24333 = cljs.core.first.call(null,seq__24313_24327__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24333);

var G__24334 = cljs.core.next.call(null,seq__24313_24327__$1);
var G__24335 = null;
var G__24336 = (0);
var G__24337 = (0);
seq__24313_24317 = G__24334;
chunk__24314_24318 = G__24335;
count__24315_24319 = G__24336;
i__24316_24320 = G__24337;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24311,map__24311__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24311,map__24311__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1457668829153