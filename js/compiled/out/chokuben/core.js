// Compiled by ClojureScript 1.7.170 {}
goog.provide('chokuben.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('chokuben.routes.index');
goog.require('chokuben.handlers');
goog.require('chokuben.subs');
cljs.core.enable_console_print_BANG_.call(null);
chokuben.handlers.register.call(null);
chokuben.subs.register.call(null);
secretary.core.dispatch_BANG_.call(null,location.pathname);

//# sourceMappingURL=core.js.map?rel=1467365957663