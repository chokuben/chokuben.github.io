// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('chokuben.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19614__delegate = function (x){
if(cljs.core.truth_(chokuben.core.on_js_reload)){
return cljs.core.apply.call(null,chokuben.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chokuben.core/on-js-reload' is missing");
}
};
var G__19614 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19615__i = 0, G__19615__a = new Array(arguments.length -  0);
while (G__19615__i < G__19615__a.length) {G__19615__a[G__19615__i] = arguments[G__19615__i + 0]; ++G__19615__i;}
  x = new cljs.core.IndexedSeq(G__19615__a,0);
} 
return G__19614__delegate.call(this,x);};
G__19614.cljs$lang$maxFixedArity = 0;
G__19614.cljs$lang$applyTo = (function (arglist__19616){
var x = cljs.core.seq(arglist__19616);
return G__19614__delegate(x);
});
G__19614.cljs$core$IFn$_invoke$arity$variadic = G__19614__delegate;
return G__19614;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1467365957673