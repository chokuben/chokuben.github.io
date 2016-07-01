// Compiled by ClojureScript 1.7.170 {}
goog.provide('schlepfilter.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('schlepfilter.routes.index');
goog.require('schlepfilter.handlers');
goog.require('schlepfilter.subs');
cljs.core.enable_console_print_BANG_.call(null);
schlepfilter.handlers.register.call(null);
schlepfilter.subs.register.call(null);
secretary.core.dispatch_BANG_.call(null,location.pathname);

//# sourceMappingURL=core.js.map?rel=1467340426195