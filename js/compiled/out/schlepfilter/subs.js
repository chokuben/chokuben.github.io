// Compiled by ClojureScript 1.7.170 {}
goog.provide('schlepfilter.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
schlepfilter.subs.register = (function schlepfilter$subs$register(){
return re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));
});

//# sourceMappingURL=subs.js.map?rel=1467340426189