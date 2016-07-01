// Compiled by ClojureScript 1.7.170 {}
goog.provide('chokuben.routes.index');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('secretary.core');
chokuben.routes.index.app = (function chokuben$routes$index$app(){
var state = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),""], null);
});
var action__18032__auto___19609 = (function (params__18033__auto__){
if(cljs.core.map_QMARK_.call(null,params__18033__auto__)){
var map__19606 = params__18033__auto__;
var map__19606__$1 = ((((!((map__19606 == null)))?((((map__19606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19606):map__19606);
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chokuben.routes.index.app], null),document.getElementById("app"));
} else {
if(cljs.core.vector_QMARK_.call(null,params__18033__auto__)){
var vec__19608 = params__18033__auto__;
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chokuben.routes.index.app], null),document.getElementById("app"));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__18032__auto___19609);


//# sourceMappingURL=index.js.map?rel=1467365957652