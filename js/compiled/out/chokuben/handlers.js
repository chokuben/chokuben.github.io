// Compiled by ClojureScript 1.7.170 {}
goog.provide('chokuben.handlers');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('re_frame.core');
chokuben.handlers.register = (function chokuben$handlers$register(){
return re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317),re_frame.core.trim_v,(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"submit","submit",-49315317),true);
}));
});

//# sourceMappingURL=handlers.js.map?rel=1467340643116