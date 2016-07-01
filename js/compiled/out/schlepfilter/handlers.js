// Compiled by ClojureScript 1.7.170 {}
goog.provide('schlepfilter.handlers');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
schlepfilter.handlers.register = (function schlepfilter$handlers$register(){
return re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),re_frame.core.trim_v,(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"submit","submit",-49315317),true);
}));
});

//# sourceMappingURL=handlers.js.map?rel=1467340426181