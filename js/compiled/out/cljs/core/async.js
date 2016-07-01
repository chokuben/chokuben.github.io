// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20518 = [];
var len__17877__auto___20524 = arguments.length;
var i__17878__auto___20525 = (0);
while(true){
if((i__17878__auto___20525 < len__17877__auto___20524)){
args20518.push((arguments[i__17878__auto___20525]));

var G__20526 = (i__17878__auto___20525 + (1));
i__17878__auto___20525 = G__20526;
continue;
} else {
}
break;
}

var G__20520 = args20518.length;
switch (G__20520) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20518.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20521 = (function (f,blockable,meta20522){
this.f = f;
this.blockable = blockable;
this.meta20522 = meta20522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20523,meta20522__$1){
var self__ = this;
var _20523__$1 = this;
return (new cljs.core.async.t_cljs$core$async20521(self__.f,self__.blockable,meta20522__$1));
});

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20523){
var self__ = this;
var _20523__$1 = this;
return self__.meta20522;
});

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20522","meta20522",1718142911,null)], null);
});

cljs.core.async.t_cljs$core$async20521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20521";

cljs.core.async.t_cljs$core$async20521.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20521");
});

cljs.core.async.__GT_t_cljs$core$async20521 = (function cljs$core$async$__GT_t_cljs$core$async20521(f__$1,blockable__$1,meta20522){
return (new cljs.core.async.t_cljs$core$async20521(f__$1,blockable__$1,meta20522));
});

}

return (new cljs.core.async.t_cljs$core$async20521(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20530 = [];
var len__17877__auto___20533 = arguments.length;
var i__17878__auto___20534 = (0);
while(true){
if((i__17878__auto___20534 < len__17877__auto___20533)){
args20530.push((arguments[i__17878__auto___20534]));

var G__20535 = (i__17878__auto___20534 + (1));
i__17878__auto___20534 = G__20535;
continue;
} else {
}
break;
}

var G__20532 = args20530.length;
switch (G__20532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20530.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20537 = [];
var len__17877__auto___20540 = arguments.length;
var i__17878__auto___20541 = (0);
while(true){
if((i__17878__auto___20541 < len__17877__auto___20540)){
args20537.push((arguments[i__17878__auto___20541]));

var G__20542 = (i__17878__auto___20541 + (1));
i__17878__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var G__20539 = args20537.length;
switch (G__20539) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20537.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20544 = [];
var len__17877__auto___20547 = arguments.length;
var i__17878__auto___20548 = (0);
while(true){
if((i__17878__auto___20548 < len__17877__auto___20547)){
args20544.push((arguments[i__17878__auto___20548]));

var G__20549 = (i__17878__auto___20548 + (1));
i__17878__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var G__20546 = args20544.length;
switch (G__20546) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20544.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20551 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20551);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20551,ret){
return (function (){
return fn1.call(null,val_20551);
});})(val_20551,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20552 = [];
var len__17877__auto___20555 = arguments.length;
var i__17878__auto___20556 = (0);
while(true){
if((i__17878__auto___20556 < len__17877__auto___20555)){
args20552.push((arguments[i__17878__auto___20556]));

var G__20557 = (i__17878__auto___20556 + (1));
i__17878__auto___20556 = G__20557;
continue;
} else {
}
break;
}

var G__20554 = args20552.length;
switch (G__20554) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20552.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17722__auto___20559 = n;
var x_20560 = (0);
while(true){
if((x_20560 < n__17722__auto___20559)){
(a[x_20560] = (0));

var G__20561 = (x_20560 + (1));
x_20560 = G__20561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20562 = (i + (1));
i = G__20562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20566 = (function (alt_flag,flag,meta20567){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20567 = meta20567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20568,meta20567__$1){
var self__ = this;
var _20568__$1 = this;
return (new cljs.core.async.t_cljs$core$async20566(self__.alt_flag,self__.flag,meta20567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20568){
var self__ = this;
var _20568__$1 = this;
return self__.meta20567;
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20567","meta20567",1117227195,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20566";

cljs.core.async.t_cljs$core$async20566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20566");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20566(alt_flag__$1,flag__$1,meta20567){
return (new cljs.core.async.t_cljs$core$async20566(alt_flag__$1,flag__$1,meta20567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20566(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20572 = (function (alt_handler,flag,cb,meta20573){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20573 = meta20573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20574,meta20573__$1){
var self__ = this;
var _20574__$1 = this;
return (new cljs.core.async.t_cljs$core$async20572(self__.alt_handler,self__.flag,self__.cb,meta20573__$1));
});

cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20574){
var self__ = this;
var _20574__$1 = this;
return self__.meta20573;
});

cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20573","meta20573",1134848458,null)], null);
});

cljs.core.async.t_cljs$core$async20572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20572";

cljs.core.async.t_cljs$core$async20572.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async20572");
});

cljs.core.async.__GT_t_cljs$core$async20572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20572(alt_handler__$1,flag__$1,cb__$1,meta20573){
return (new cljs.core.async.t_cljs$core$async20572(alt_handler__$1,flag__$1,cb__$1,meta20573));
});

}

return (new cljs.core.async.t_cljs$core$async20572(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20576_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16819__auto__ = wport;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20577 = (i + (1));
i = G__20577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16819__auto__ = ret;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16807__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___20583 = arguments.length;
var i__17878__auto___20584 = (0);
while(true){
if((i__17878__auto___20584 < len__17877__auto___20583)){
args__17884__auto__.push((arguments[i__17878__auto___20584]));

var G__20585 = (i__17878__auto___20584 + (1));
i__17878__auto___20584 = G__20585;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20580){
var map__20581 = p__20580;
var map__20581__$1 = ((((!((map__20581 == null)))?((((map__20581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20581):map__20581);
var opts = map__20581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20578){
var G__20579 = cljs.core.first.call(null,seq20578);
var seq20578__$1 = cljs.core.next.call(null,seq20578);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20579,seq20578__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20586 = [];
var len__17877__auto___20636 = arguments.length;
var i__17878__auto___20637 = (0);
while(true){
if((i__17878__auto___20637 < len__17877__auto___20636)){
args20586.push((arguments[i__17878__auto___20637]));

var G__20638 = (i__17878__auto___20637 + (1));
i__17878__auto___20637 = G__20638;
continue;
} else {
}
break;
}

var G__20588 = args20586.length;
switch (G__20588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20586.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20473__auto___20640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___20640){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___20640){
return (function (state_20612){
var state_val_20613 = (state_20612[(1)]);
if((state_val_20613 === (7))){
var inst_20608 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20614_20641 = state_20612__$1;
(statearr_20614_20641[(2)] = inst_20608);

(statearr_20614_20641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (1))){
var state_20612__$1 = state_20612;
var statearr_20615_20642 = state_20612__$1;
(statearr_20615_20642[(2)] = null);

(statearr_20615_20642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (4))){
var inst_20591 = (state_20612[(7)]);
var inst_20591__$1 = (state_20612[(2)]);
var inst_20592 = (inst_20591__$1 == null);
var state_20612__$1 = (function (){var statearr_20616 = state_20612;
(statearr_20616[(7)] = inst_20591__$1);

return statearr_20616;
})();
if(cljs.core.truth_(inst_20592)){
var statearr_20617_20643 = state_20612__$1;
(statearr_20617_20643[(1)] = (5));

} else {
var statearr_20618_20644 = state_20612__$1;
(statearr_20618_20644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (13))){
var state_20612__$1 = state_20612;
var statearr_20619_20645 = state_20612__$1;
(statearr_20619_20645[(2)] = null);

(statearr_20619_20645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (6))){
var inst_20591 = (state_20612[(7)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20612__$1,(11),to,inst_20591);
} else {
if((state_val_20613 === (3))){
var inst_20610 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20612__$1,inst_20610);
} else {
if((state_val_20613 === (12))){
var state_20612__$1 = state_20612;
var statearr_20620_20646 = state_20612__$1;
(statearr_20620_20646[(2)] = null);

(statearr_20620_20646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (2))){
var state_20612__$1 = state_20612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20612__$1,(4),from);
} else {
if((state_val_20613 === (11))){
var inst_20601 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
if(cljs.core.truth_(inst_20601)){
var statearr_20621_20647 = state_20612__$1;
(statearr_20621_20647[(1)] = (12));

} else {
var statearr_20622_20648 = state_20612__$1;
(statearr_20622_20648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (9))){
var state_20612__$1 = state_20612;
var statearr_20623_20649 = state_20612__$1;
(statearr_20623_20649[(2)] = null);

(statearr_20623_20649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (5))){
var state_20612__$1 = state_20612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20624_20650 = state_20612__$1;
(statearr_20624_20650[(1)] = (8));

} else {
var statearr_20625_20651 = state_20612__$1;
(statearr_20625_20651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (14))){
var inst_20606 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20626_20652 = state_20612__$1;
(statearr_20626_20652[(2)] = inst_20606);

(statearr_20626_20652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (10))){
var inst_20598 = (state_20612[(2)]);
var state_20612__$1 = state_20612;
var statearr_20627_20653 = state_20612__$1;
(statearr_20627_20653[(2)] = inst_20598);

(statearr_20627_20653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20613 === (8))){
var inst_20595 = cljs.core.async.close_BANG_.call(null,to);
var state_20612__$1 = state_20612;
var statearr_20628_20654 = state_20612__$1;
(statearr_20628_20654[(2)] = inst_20595);

(statearr_20628_20654[(1)] = (10));


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
});})(c__20473__auto___20640))
;
return ((function (switch__20361__auto__,c__20473__auto___20640){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_20632 = [null,null,null,null,null,null,null,null];
(statearr_20632[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_20632[(1)] = (1));

return statearr_20632;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_20612){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e20633){if((e20633 instanceof Object)){
var ex__20365__auto__ = e20633;
var statearr_20634_20655 = state_20612;
(statearr_20634_20655[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20656 = state_20612;
state_20612 = G__20656;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_20612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_20612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___20640))
})();
var state__20475__auto__ = (function (){var statearr_20635 = f__20474__auto__.call(null);
(statearr_20635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___20640);

return statearr_20635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___20640))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20840){
var vec__20841 = p__20840;
var v = cljs.core.nth.call(null,vec__20841,(0),null);
var p = cljs.core.nth.call(null,vec__20841,(1),null);
var job = vec__20841;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20473__auto___21023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results){
return (function (state_20846){
var state_val_20847 = (state_20846[(1)]);
if((state_val_20847 === (1))){
var state_20846__$1 = state_20846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20846__$1,(2),res,v);
} else {
if((state_val_20847 === (2))){
var inst_20843 = (state_20846[(2)]);
var inst_20844 = cljs.core.async.close_BANG_.call(null,res);
var state_20846__$1 = (function (){var statearr_20848 = state_20846;
(statearr_20848[(7)] = inst_20843);

return statearr_20848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20846__$1,inst_20844);
} else {
return null;
}
}
});})(c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results))
;
return ((function (switch__20361__auto__,c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_20852 = [null,null,null,null,null,null,null,null];
(statearr_20852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__);

(statearr_20852[(1)] = (1));

return statearr_20852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1 = (function (state_20846){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e20853){if((e20853 instanceof Object)){
var ex__20365__auto__ = e20853;
var statearr_20854_21024 = state_20846;
(statearr_20854_21024[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21025 = state_20846;
state_20846 = G__21025;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = function(state_20846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1.call(this,state_20846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results))
})();
var state__20475__auto__ = (function (){var statearr_20855 = f__20474__auto__.call(null);
(statearr_20855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21023);

return statearr_20855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___21023,res,vec__20841,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20856){
var vec__20857 = p__20856;
var v = cljs.core.nth.call(null,vec__20857,(0),null);
var p = cljs.core.nth.call(null,vec__20857,(1),null);
var job = vec__20857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17722__auto___21026 = n;
var __21027 = (0);
while(true){
if((__21027 < n__17722__auto___21026)){
var G__20858_21028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20858_21028) {
case "compute":
var c__20473__auto___21030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21027,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (__21027,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function (state_20871){
var state_val_20872 = (state_20871[(1)]);
if((state_val_20872 === (1))){
var state_20871__$1 = state_20871;
var statearr_20873_21031 = state_20871__$1;
(statearr_20873_21031[(2)] = null);

(statearr_20873_21031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20872 === (2))){
var state_20871__$1 = state_20871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20871__$1,(4),jobs);
} else {
if((state_val_20872 === (3))){
var inst_20869 = (state_20871[(2)]);
var state_20871__$1 = state_20871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20871__$1,inst_20869);
} else {
if((state_val_20872 === (4))){
var inst_20861 = (state_20871[(2)]);
var inst_20862 = process.call(null,inst_20861);
var state_20871__$1 = state_20871;
if(cljs.core.truth_(inst_20862)){
var statearr_20874_21032 = state_20871__$1;
(statearr_20874_21032[(1)] = (5));

} else {
var statearr_20875_21033 = state_20871__$1;
(statearr_20875_21033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20872 === (5))){
var state_20871__$1 = state_20871;
var statearr_20876_21034 = state_20871__$1;
(statearr_20876_21034[(2)] = null);

(statearr_20876_21034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20872 === (6))){
var state_20871__$1 = state_20871;
var statearr_20877_21035 = state_20871__$1;
(statearr_20877_21035[(2)] = null);

(statearr_20877_21035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20872 === (7))){
var inst_20867 = (state_20871[(2)]);
var state_20871__$1 = state_20871;
var statearr_20878_21036 = state_20871__$1;
(statearr_20878_21036[(2)] = inst_20867);

(statearr_20878_21036[(1)] = (3));


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
});})(__21027,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
;
return ((function (__21027,switch__20361__auto__,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_20882 = [null,null,null,null,null,null,null];
(statearr_20882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__);

(statearr_20882[(1)] = (1));

return statearr_20882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1 = (function (state_20871){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e20883){if((e20883 instanceof Object)){
var ex__20365__auto__ = e20883;
var statearr_20884_21037 = state_20871;
(statearr_20884_21037[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21038 = state_20871;
state_20871 = G__21038;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = function(state_20871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1.call(this,state_20871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__;
})()
;})(__21027,switch__20361__auto__,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
})();
var state__20475__auto__ = (function (){var statearr_20885 = f__20474__auto__.call(null);
(statearr_20885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21030);

return statearr_20885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(__21027,c__20473__auto___21030,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
);


break;
case "async":
var c__20473__auto___21039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21027,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (__21027,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function (state_20898){
var state_val_20899 = (state_20898[(1)]);
if((state_val_20899 === (1))){
var state_20898__$1 = state_20898;
var statearr_20900_21040 = state_20898__$1;
(statearr_20900_21040[(2)] = null);

(statearr_20900_21040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (2))){
var state_20898__$1 = state_20898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20898__$1,(4),jobs);
} else {
if((state_val_20899 === (3))){
var inst_20896 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20898__$1,inst_20896);
} else {
if((state_val_20899 === (4))){
var inst_20888 = (state_20898[(2)]);
var inst_20889 = async.call(null,inst_20888);
var state_20898__$1 = state_20898;
if(cljs.core.truth_(inst_20889)){
var statearr_20901_21041 = state_20898__$1;
(statearr_20901_21041[(1)] = (5));

} else {
var statearr_20902_21042 = state_20898__$1;
(statearr_20902_21042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (5))){
var state_20898__$1 = state_20898;
var statearr_20903_21043 = state_20898__$1;
(statearr_20903_21043[(2)] = null);

(statearr_20903_21043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (6))){
var state_20898__$1 = state_20898;
var statearr_20904_21044 = state_20898__$1;
(statearr_20904_21044[(2)] = null);

(statearr_20904_21044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20899 === (7))){
var inst_20894 = (state_20898[(2)]);
var state_20898__$1 = state_20898;
var statearr_20905_21045 = state_20898__$1;
(statearr_20905_21045[(2)] = inst_20894);

(statearr_20905_21045[(1)] = (3));


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
});})(__21027,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
;
return ((function (__21027,switch__20361__auto__,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_20909 = [null,null,null,null,null,null,null];
(statearr_20909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__);

(statearr_20909[(1)] = (1));

return statearr_20909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1 = (function (state_20898){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e20910){if((e20910 instanceof Object)){
var ex__20365__auto__ = e20910;
var statearr_20911_21046 = state_20898;
(statearr_20911_21046[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21047 = state_20898;
state_20898 = G__21047;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = function(state_20898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1.call(this,state_20898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__;
})()
;})(__21027,switch__20361__auto__,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
})();
var state__20475__auto__ = (function (){var statearr_20912 = f__20474__auto__.call(null);
(statearr_20912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21039);

return statearr_20912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(__21027,c__20473__auto___21039,G__20858_21028,n__17722__auto___21026,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21048 = (__21027 + (1));
__21027 = G__21048;
continue;
} else {
}
break;
}

var c__20473__auto___21049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___21049,jobs,results,process,async){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___21049,jobs,results,process,async){
return (function (state_20934){
var state_val_20935 = (state_20934[(1)]);
if((state_val_20935 === (1))){
var state_20934__$1 = state_20934;
var statearr_20936_21050 = state_20934__$1;
(statearr_20936_21050[(2)] = null);

(statearr_20936_21050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (2))){
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20934__$1,(4),from);
} else {
if((state_val_20935 === (3))){
var inst_20932 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20934__$1,inst_20932);
} else {
if((state_val_20935 === (4))){
var inst_20915 = (state_20934[(7)]);
var inst_20915__$1 = (state_20934[(2)]);
var inst_20916 = (inst_20915__$1 == null);
var state_20934__$1 = (function (){var statearr_20937 = state_20934;
(statearr_20937[(7)] = inst_20915__$1);

return statearr_20937;
})();
if(cljs.core.truth_(inst_20916)){
var statearr_20938_21051 = state_20934__$1;
(statearr_20938_21051[(1)] = (5));

} else {
var statearr_20939_21052 = state_20934__$1;
(statearr_20939_21052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (5))){
var inst_20918 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20934__$1 = state_20934;
var statearr_20940_21053 = state_20934__$1;
(statearr_20940_21053[(2)] = inst_20918);

(statearr_20940_21053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (6))){
var inst_20920 = (state_20934[(8)]);
var inst_20915 = (state_20934[(7)]);
var inst_20920__$1 = cljs.core.async.chan.call(null,(1));
var inst_20921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20922 = [inst_20915,inst_20920__$1];
var inst_20923 = (new cljs.core.PersistentVector(null,2,(5),inst_20921,inst_20922,null));
var state_20934__$1 = (function (){var statearr_20941 = state_20934;
(statearr_20941[(8)] = inst_20920__$1);

return statearr_20941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20934__$1,(8),jobs,inst_20923);
} else {
if((state_val_20935 === (7))){
var inst_20930 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
var statearr_20942_21054 = state_20934__$1;
(statearr_20942_21054[(2)] = inst_20930);

(statearr_20942_21054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (8))){
var inst_20920 = (state_20934[(8)]);
var inst_20925 = (state_20934[(2)]);
var state_20934__$1 = (function (){var statearr_20943 = state_20934;
(statearr_20943[(9)] = inst_20925);

return statearr_20943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20934__$1,(9),results,inst_20920);
} else {
if((state_val_20935 === (9))){
var inst_20927 = (state_20934[(2)]);
var state_20934__$1 = (function (){var statearr_20944 = state_20934;
(statearr_20944[(10)] = inst_20927);

return statearr_20944;
})();
var statearr_20945_21055 = state_20934__$1;
(statearr_20945_21055[(2)] = null);

(statearr_20945_21055[(1)] = (2));


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
});})(c__20473__auto___21049,jobs,results,process,async))
;
return ((function (switch__20361__auto__,c__20473__auto___21049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_20949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__);

(statearr_20949[(1)] = (1));

return statearr_20949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1 = (function (state_20934){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e20950){if((e20950 instanceof Object)){
var ex__20365__auto__ = e20950;
var statearr_20951_21056 = state_20934;
(statearr_20951_21056[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21057 = state_20934;
state_20934 = G__21057;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = function(state_20934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1.call(this,state_20934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___21049,jobs,results,process,async))
})();
var state__20475__auto__ = (function (){var statearr_20952 = f__20474__auto__.call(null);
(statearr_20952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21049);

return statearr_20952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___21049,jobs,results,process,async))
);


var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__,jobs,results,process,async){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__,jobs,results,process,async){
return (function (state_20990){
var state_val_20991 = (state_20990[(1)]);
if((state_val_20991 === (7))){
var inst_20986 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_20992_21058 = state_20990__$1;
(statearr_20992_21058[(2)] = inst_20986);

(statearr_20992_21058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (20))){
var state_20990__$1 = state_20990;
var statearr_20993_21059 = state_20990__$1;
(statearr_20993_21059[(2)] = null);

(statearr_20993_21059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (1))){
var state_20990__$1 = state_20990;
var statearr_20994_21060 = state_20990__$1;
(statearr_20994_21060[(2)] = null);

(statearr_20994_21060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (4))){
var inst_20955 = (state_20990[(7)]);
var inst_20955__$1 = (state_20990[(2)]);
var inst_20956 = (inst_20955__$1 == null);
var state_20990__$1 = (function (){var statearr_20995 = state_20990;
(statearr_20995[(7)] = inst_20955__$1);

return statearr_20995;
})();
if(cljs.core.truth_(inst_20956)){
var statearr_20996_21061 = state_20990__$1;
(statearr_20996_21061[(1)] = (5));

} else {
var statearr_20997_21062 = state_20990__$1;
(statearr_20997_21062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (15))){
var inst_20968 = (state_20990[(8)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20990__$1,(18),to,inst_20968);
} else {
if((state_val_20991 === (21))){
var inst_20981 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_20998_21063 = state_20990__$1;
(statearr_20998_21063[(2)] = inst_20981);

(statearr_20998_21063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (13))){
var inst_20983 = (state_20990[(2)]);
var state_20990__$1 = (function (){var statearr_20999 = state_20990;
(statearr_20999[(9)] = inst_20983);

return statearr_20999;
})();
var statearr_21000_21064 = state_20990__$1;
(statearr_21000_21064[(2)] = null);

(statearr_21000_21064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (6))){
var inst_20955 = (state_20990[(7)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20990__$1,(11),inst_20955);
} else {
if((state_val_20991 === (17))){
var inst_20976 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
if(cljs.core.truth_(inst_20976)){
var statearr_21001_21065 = state_20990__$1;
(statearr_21001_21065[(1)] = (19));

} else {
var statearr_21002_21066 = state_20990__$1;
(statearr_21002_21066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (3))){
var inst_20988 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20990__$1,inst_20988);
} else {
if((state_val_20991 === (12))){
var inst_20965 = (state_20990[(10)]);
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20990__$1,(14),inst_20965);
} else {
if((state_val_20991 === (2))){
var state_20990__$1 = state_20990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20990__$1,(4),results);
} else {
if((state_val_20991 === (19))){
var state_20990__$1 = state_20990;
var statearr_21003_21067 = state_20990__$1;
(statearr_21003_21067[(2)] = null);

(statearr_21003_21067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (11))){
var inst_20965 = (state_20990[(2)]);
var state_20990__$1 = (function (){var statearr_21004 = state_20990;
(statearr_21004[(10)] = inst_20965);

return statearr_21004;
})();
var statearr_21005_21068 = state_20990__$1;
(statearr_21005_21068[(2)] = null);

(statearr_21005_21068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (9))){
var state_20990__$1 = state_20990;
var statearr_21006_21069 = state_20990__$1;
(statearr_21006_21069[(2)] = null);

(statearr_21006_21069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (5))){
var state_20990__$1 = state_20990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21007_21070 = state_20990__$1;
(statearr_21007_21070[(1)] = (8));

} else {
var statearr_21008_21071 = state_20990__$1;
(statearr_21008_21071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (14))){
var inst_20968 = (state_20990[(8)]);
var inst_20970 = (state_20990[(11)]);
var inst_20968__$1 = (state_20990[(2)]);
var inst_20969 = (inst_20968__$1 == null);
var inst_20970__$1 = cljs.core.not.call(null,inst_20969);
var state_20990__$1 = (function (){var statearr_21009 = state_20990;
(statearr_21009[(8)] = inst_20968__$1);

(statearr_21009[(11)] = inst_20970__$1);

return statearr_21009;
})();
if(inst_20970__$1){
var statearr_21010_21072 = state_20990__$1;
(statearr_21010_21072[(1)] = (15));

} else {
var statearr_21011_21073 = state_20990__$1;
(statearr_21011_21073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (16))){
var inst_20970 = (state_20990[(11)]);
var state_20990__$1 = state_20990;
var statearr_21012_21074 = state_20990__$1;
(statearr_21012_21074[(2)] = inst_20970);

(statearr_21012_21074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (10))){
var inst_20962 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_21013_21075 = state_20990__$1;
(statearr_21013_21075[(2)] = inst_20962);

(statearr_21013_21075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (18))){
var inst_20973 = (state_20990[(2)]);
var state_20990__$1 = state_20990;
var statearr_21014_21076 = state_20990__$1;
(statearr_21014_21076[(2)] = inst_20973);

(statearr_21014_21076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20991 === (8))){
var inst_20959 = cljs.core.async.close_BANG_.call(null,to);
var state_20990__$1 = state_20990;
var statearr_21015_21077 = state_20990__$1;
(statearr_21015_21077[(2)] = inst_20959);

(statearr_21015_21077[(1)] = (10));


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
});})(c__20473__auto__,jobs,results,process,async))
;
return ((function (switch__20361__auto__,c__20473__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_21019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__);

(statearr_21019[(1)] = (1));

return statearr_21019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1 = (function (state_20990){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_20990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e21020){if((e21020 instanceof Object)){
var ex__20365__auto__ = e21020;
var statearr_21021_21078 = state_20990;
(statearr_21021_21078[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21079 = state_20990;
state_20990 = G__21079;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__ = function(state_20990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1.call(this,state_20990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__,jobs,results,process,async))
})();
var state__20475__auto__ = (function (){var statearr_21022 = f__20474__auto__.call(null);
(statearr_21022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_21022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__,jobs,results,process,async))
);

return c__20473__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21080 = [];
var len__17877__auto___21083 = arguments.length;
var i__17878__auto___21084 = (0);
while(true){
if((i__17878__auto___21084 < len__17877__auto___21083)){
args21080.push((arguments[i__17878__auto___21084]));

var G__21085 = (i__17878__auto___21084 + (1));
i__17878__auto___21084 = G__21085;
continue;
} else {
}
break;
}

var G__21082 = args21080.length;
switch (G__21082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21080.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21087 = [];
var len__17877__auto___21090 = arguments.length;
var i__17878__auto___21091 = (0);
while(true){
if((i__17878__auto___21091 < len__17877__auto___21090)){
args21087.push((arguments[i__17878__auto___21091]));

var G__21092 = (i__17878__auto___21091 + (1));
i__17878__auto___21091 = G__21092;
continue;
} else {
}
break;
}

var G__21089 = args21087.length;
switch (G__21089) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21087.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21094 = [];
var len__17877__auto___21147 = arguments.length;
var i__17878__auto___21148 = (0);
while(true){
if((i__17878__auto___21148 < len__17877__auto___21147)){
args21094.push((arguments[i__17878__auto___21148]));

var G__21149 = (i__17878__auto___21148 + (1));
i__17878__auto___21148 = G__21149;
continue;
} else {
}
break;
}

var G__21096 = args21094.length;
switch (G__21096) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21094.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20473__auto___21151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___21151,tc,fc){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___21151,tc,fc){
return (function (state_21122){
var state_val_21123 = (state_21122[(1)]);
if((state_val_21123 === (7))){
var inst_21118 = (state_21122[(2)]);
var state_21122__$1 = state_21122;
var statearr_21124_21152 = state_21122__$1;
(statearr_21124_21152[(2)] = inst_21118);

(statearr_21124_21152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (1))){
var state_21122__$1 = state_21122;
var statearr_21125_21153 = state_21122__$1;
(statearr_21125_21153[(2)] = null);

(statearr_21125_21153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (4))){
var inst_21099 = (state_21122[(7)]);
var inst_21099__$1 = (state_21122[(2)]);
var inst_21100 = (inst_21099__$1 == null);
var state_21122__$1 = (function (){var statearr_21126 = state_21122;
(statearr_21126[(7)] = inst_21099__$1);

return statearr_21126;
})();
if(cljs.core.truth_(inst_21100)){
var statearr_21127_21154 = state_21122__$1;
(statearr_21127_21154[(1)] = (5));

} else {
var statearr_21128_21155 = state_21122__$1;
(statearr_21128_21155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (13))){
var state_21122__$1 = state_21122;
var statearr_21129_21156 = state_21122__$1;
(statearr_21129_21156[(2)] = null);

(statearr_21129_21156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (6))){
var inst_21099 = (state_21122[(7)]);
var inst_21105 = p.call(null,inst_21099);
var state_21122__$1 = state_21122;
if(cljs.core.truth_(inst_21105)){
var statearr_21130_21157 = state_21122__$1;
(statearr_21130_21157[(1)] = (9));

} else {
var statearr_21131_21158 = state_21122__$1;
(statearr_21131_21158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (3))){
var inst_21120 = (state_21122[(2)]);
var state_21122__$1 = state_21122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21122__$1,inst_21120);
} else {
if((state_val_21123 === (12))){
var state_21122__$1 = state_21122;
var statearr_21132_21159 = state_21122__$1;
(statearr_21132_21159[(2)] = null);

(statearr_21132_21159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (2))){
var state_21122__$1 = state_21122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21122__$1,(4),ch);
} else {
if((state_val_21123 === (11))){
var inst_21099 = (state_21122[(7)]);
var inst_21109 = (state_21122[(2)]);
var state_21122__$1 = state_21122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21122__$1,(8),inst_21109,inst_21099);
} else {
if((state_val_21123 === (9))){
var state_21122__$1 = state_21122;
var statearr_21133_21160 = state_21122__$1;
(statearr_21133_21160[(2)] = tc);

(statearr_21133_21160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (5))){
var inst_21102 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21103 = cljs.core.async.close_BANG_.call(null,fc);
var state_21122__$1 = (function (){var statearr_21134 = state_21122;
(statearr_21134[(8)] = inst_21102);

return statearr_21134;
})();
var statearr_21135_21161 = state_21122__$1;
(statearr_21135_21161[(2)] = inst_21103);

(statearr_21135_21161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (14))){
var inst_21116 = (state_21122[(2)]);
var state_21122__$1 = state_21122;
var statearr_21136_21162 = state_21122__$1;
(statearr_21136_21162[(2)] = inst_21116);

(statearr_21136_21162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (10))){
var state_21122__$1 = state_21122;
var statearr_21137_21163 = state_21122__$1;
(statearr_21137_21163[(2)] = fc);

(statearr_21137_21163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21123 === (8))){
var inst_21111 = (state_21122[(2)]);
var state_21122__$1 = state_21122;
if(cljs.core.truth_(inst_21111)){
var statearr_21138_21164 = state_21122__$1;
(statearr_21138_21164[(1)] = (12));

} else {
var statearr_21139_21165 = state_21122__$1;
(statearr_21139_21165[(1)] = (13));

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
});})(c__20473__auto___21151,tc,fc))
;
return ((function (switch__20361__auto__,c__20473__auto___21151,tc,fc){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_21143 = [null,null,null,null,null,null,null,null,null];
(statearr_21143[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_21143[(1)] = (1));

return statearr_21143;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_21122){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_21122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e21144){if((e21144 instanceof Object)){
var ex__20365__auto__ = e21144;
var statearr_21145_21166 = state_21122;
(statearr_21145_21166[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21167 = state_21122;
state_21122 = G__21167;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_21122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_21122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___21151,tc,fc))
})();
var state__20475__auto__ = (function (){var statearr_21146 = f__20474__auto__.call(null);
(statearr_21146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21151);

return statearr_21146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___21151,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_21231){
var state_val_21232 = (state_21231[(1)]);
if((state_val_21232 === (7))){
var inst_21227 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
var statearr_21233_21254 = state_21231__$1;
(statearr_21233_21254[(2)] = inst_21227);

(statearr_21233_21254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (1))){
var inst_21211 = init;
var state_21231__$1 = (function (){var statearr_21234 = state_21231;
(statearr_21234[(7)] = inst_21211);

return statearr_21234;
})();
var statearr_21235_21255 = state_21231__$1;
(statearr_21235_21255[(2)] = null);

(statearr_21235_21255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (4))){
var inst_21214 = (state_21231[(8)]);
var inst_21214__$1 = (state_21231[(2)]);
var inst_21215 = (inst_21214__$1 == null);
var state_21231__$1 = (function (){var statearr_21236 = state_21231;
(statearr_21236[(8)] = inst_21214__$1);

return statearr_21236;
})();
if(cljs.core.truth_(inst_21215)){
var statearr_21237_21256 = state_21231__$1;
(statearr_21237_21256[(1)] = (5));

} else {
var statearr_21238_21257 = state_21231__$1;
(statearr_21238_21257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (6))){
var inst_21218 = (state_21231[(9)]);
var inst_21214 = (state_21231[(8)]);
var inst_21211 = (state_21231[(7)]);
var inst_21218__$1 = f.call(null,inst_21211,inst_21214);
var inst_21219 = cljs.core.reduced_QMARK_.call(null,inst_21218__$1);
var state_21231__$1 = (function (){var statearr_21239 = state_21231;
(statearr_21239[(9)] = inst_21218__$1);

return statearr_21239;
})();
if(inst_21219){
var statearr_21240_21258 = state_21231__$1;
(statearr_21240_21258[(1)] = (8));

} else {
var statearr_21241_21259 = state_21231__$1;
(statearr_21241_21259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (3))){
var inst_21229 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21231__$1,inst_21229);
} else {
if((state_val_21232 === (2))){
var state_21231__$1 = state_21231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21231__$1,(4),ch);
} else {
if((state_val_21232 === (9))){
var inst_21218 = (state_21231[(9)]);
var inst_21211 = inst_21218;
var state_21231__$1 = (function (){var statearr_21242 = state_21231;
(statearr_21242[(7)] = inst_21211);

return statearr_21242;
})();
var statearr_21243_21260 = state_21231__$1;
(statearr_21243_21260[(2)] = null);

(statearr_21243_21260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (5))){
var inst_21211 = (state_21231[(7)]);
var state_21231__$1 = state_21231;
var statearr_21244_21261 = state_21231__$1;
(statearr_21244_21261[(2)] = inst_21211);

(statearr_21244_21261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (10))){
var inst_21225 = (state_21231[(2)]);
var state_21231__$1 = state_21231;
var statearr_21245_21262 = state_21231__$1;
(statearr_21245_21262[(2)] = inst_21225);

(statearr_21245_21262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21232 === (8))){
var inst_21218 = (state_21231[(9)]);
var inst_21221 = cljs.core.deref.call(null,inst_21218);
var state_21231__$1 = state_21231;
var statearr_21246_21263 = state_21231__$1;
(statearr_21246_21263[(2)] = inst_21221);

(statearr_21246_21263[(1)] = (10));


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
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20362__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20362__auto____0 = (function (){
var statearr_21250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21250[(0)] = cljs$core$async$reduce_$_state_machine__20362__auto__);

(statearr_21250[(1)] = (1));

return statearr_21250;
});
var cljs$core$async$reduce_$_state_machine__20362__auto____1 = (function (state_21231){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_21231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e21251){if((e21251 instanceof Object)){
var ex__20365__auto__ = e21251;
var statearr_21252_21264 = state_21231;
(statearr_21252_21264[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21265 = state_21231;
state_21231 = G__21265;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20362__auto__ = function(state_21231){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20362__auto____1.call(this,state_21231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20362__auto____0;
cljs$core$async$reduce_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20362__auto____1;
return cljs$core$async$reduce_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_21253 = f__20474__auto__.call(null);
(statearr_21253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_21253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21266 = [];
var len__17877__auto___21318 = arguments.length;
var i__17878__auto___21319 = (0);
while(true){
if((i__17878__auto___21319 < len__17877__auto___21318)){
args21266.push((arguments[i__17878__auto___21319]));

var G__21320 = (i__17878__auto___21319 + (1));
i__17878__auto___21319 = G__21320;
continue;
} else {
}
break;
}

var G__21268 = args21266.length;
switch (G__21268) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21266.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_21293){
var state_val_21294 = (state_21293[(1)]);
if((state_val_21294 === (7))){
var inst_21275 = (state_21293[(2)]);
var state_21293__$1 = state_21293;
var statearr_21295_21322 = state_21293__$1;
(statearr_21295_21322[(2)] = inst_21275);

(statearr_21295_21322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (1))){
var inst_21269 = cljs.core.seq.call(null,coll);
var inst_21270 = inst_21269;
var state_21293__$1 = (function (){var statearr_21296 = state_21293;
(statearr_21296[(7)] = inst_21270);

return statearr_21296;
})();
var statearr_21297_21323 = state_21293__$1;
(statearr_21297_21323[(2)] = null);

(statearr_21297_21323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (4))){
var inst_21270 = (state_21293[(7)]);
var inst_21273 = cljs.core.first.call(null,inst_21270);
var state_21293__$1 = state_21293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21293__$1,(7),ch,inst_21273);
} else {
if((state_val_21294 === (13))){
var inst_21287 = (state_21293[(2)]);
var state_21293__$1 = state_21293;
var statearr_21298_21324 = state_21293__$1;
(statearr_21298_21324[(2)] = inst_21287);

(statearr_21298_21324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (6))){
var inst_21278 = (state_21293[(2)]);
var state_21293__$1 = state_21293;
if(cljs.core.truth_(inst_21278)){
var statearr_21299_21325 = state_21293__$1;
(statearr_21299_21325[(1)] = (8));

} else {
var statearr_21300_21326 = state_21293__$1;
(statearr_21300_21326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (3))){
var inst_21291 = (state_21293[(2)]);
var state_21293__$1 = state_21293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21293__$1,inst_21291);
} else {
if((state_val_21294 === (12))){
var state_21293__$1 = state_21293;
var statearr_21301_21327 = state_21293__$1;
(statearr_21301_21327[(2)] = null);

(statearr_21301_21327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (2))){
var inst_21270 = (state_21293[(7)]);
var state_21293__$1 = state_21293;
if(cljs.core.truth_(inst_21270)){
var statearr_21302_21328 = state_21293__$1;
(statearr_21302_21328[(1)] = (4));

} else {
var statearr_21303_21329 = state_21293__$1;
(statearr_21303_21329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (11))){
var inst_21284 = cljs.core.async.close_BANG_.call(null,ch);
var state_21293__$1 = state_21293;
var statearr_21304_21330 = state_21293__$1;
(statearr_21304_21330[(2)] = inst_21284);

(statearr_21304_21330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (9))){
var state_21293__$1 = state_21293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21305_21331 = state_21293__$1;
(statearr_21305_21331[(1)] = (11));

} else {
var statearr_21306_21332 = state_21293__$1;
(statearr_21306_21332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (5))){
var inst_21270 = (state_21293[(7)]);
var state_21293__$1 = state_21293;
var statearr_21307_21333 = state_21293__$1;
(statearr_21307_21333[(2)] = inst_21270);

(statearr_21307_21333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (10))){
var inst_21289 = (state_21293[(2)]);
var state_21293__$1 = state_21293;
var statearr_21308_21334 = state_21293__$1;
(statearr_21308_21334[(2)] = inst_21289);

(statearr_21308_21334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21294 === (8))){
var inst_21270 = (state_21293[(7)]);
var inst_21280 = cljs.core.next.call(null,inst_21270);
var inst_21270__$1 = inst_21280;
var state_21293__$1 = (function (){var statearr_21309 = state_21293;
(statearr_21309[(7)] = inst_21270__$1);

return statearr_21309;
})();
var statearr_21310_21335 = state_21293__$1;
(statearr_21310_21335[(2)] = null);

(statearr_21310_21335[(1)] = (2));


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
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_21314 = [null,null,null,null,null,null,null,null];
(statearr_21314[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_21314[(1)] = (1));

return statearr_21314;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_21293){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_21293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e21315){if((e21315 instanceof Object)){
var ex__20365__auto__ = e21315;
var statearr_21316_21336 = state_21293;
(statearr_21316_21336[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21337 = state_21293;
state_21293 = G__21337;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_21293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_21293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_21317 = f__20474__auto__.call(null);
(statearr_21317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_21317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17474__auto__ = (((_ == null))?null:_);
var m__17475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,_);
} else {
var m__17475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21559 = (function (mult,ch,cs,meta21560){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21560 = meta21560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21561,meta21560__$1){
var self__ = this;
var _21561__$1 = this;
return (new cljs.core.async.t_cljs$core$async21559(self__.mult,self__.ch,self__.cs,meta21560__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21561){
var self__ = this;
var _21561__$1 = this;
return self__.meta21560;
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21560","meta21560",1140628773,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21559";

cljs.core.async.t_cljs$core$async21559.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21559");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21559 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21559(mult__$1,ch__$1,cs__$1,meta21560){
return (new cljs.core.async.t_cljs$core$async21559(mult__$1,ch__$1,cs__$1,meta21560));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21559(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20473__auto___21780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___21780,cs,m,dchan,dctr,done){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___21780,cs,m,dchan,dctr,done){
return (function (state_21692){
var state_val_21693 = (state_21692[(1)]);
if((state_val_21693 === (7))){
var inst_21688 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21694_21781 = state_21692__$1;
(statearr_21694_21781[(2)] = inst_21688);

(statearr_21694_21781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (20))){
var inst_21593 = (state_21692[(7)]);
var inst_21603 = cljs.core.first.call(null,inst_21593);
var inst_21604 = cljs.core.nth.call(null,inst_21603,(0),null);
var inst_21605 = cljs.core.nth.call(null,inst_21603,(1),null);
var state_21692__$1 = (function (){var statearr_21695 = state_21692;
(statearr_21695[(8)] = inst_21604);

return statearr_21695;
})();
if(cljs.core.truth_(inst_21605)){
var statearr_21696_21782 = state_21692__$1;
(statearr_21696_21782[(1)] = (22));

} else {
var statearr_21697_21783 = state_21692__$1;
(statearr_21697_21783[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (27))){
var inst_21635 = (state_21692[(9)]);
var inst_21640 = (state_21692[(10)]);
var inst_21564 = (state_21692[(11)]);
var inst_21633 = (state_21692[(12)]);
var inst_21640__$1 = cljs.core._nth.call(null,inst_21633,inst_21635);
var inst_21641 = cljs.core.async.put_BANG_.call(null,inst_21640__$1,inst_21564,done);
var state_21692__$1 = (function (){var statearr_21698 = state_21692;
(statearr_21698[(10)] = inst_21640__$1);

return statearr_21698;
})();
if(cljs.core.truth_(inst_21641)){
var statearr_21699_21784 = state_21692__$1;
(statearr_21699_21784[(1)] = (30));

} else {
var statearr_21700_21785 = state_21692__$1;
(statearr_21700_21785[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (1))){
var state_21692__$1 = state_21692;
var statearr_21701_21786 = state_21692__$1;
(statearr_21701_21786[(2)] = null);

(statearr_21701_21786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (24))){
var inst_21593 = (state_21692[(7)]);
var inst_21610 = (state_21692[(2)]);
var inst_21611 = cljs.core.next.call(null,inst_21593);
var inst_21573 = inst_21611;
var inst_21574 = null;
var inst_21575 = (0);
var inst_21576 = (0);
var state_21692__$1 = (function (){var statearr_21702 = state_21692;
(statearr_21702[(13)] = inst_21574);

(statearr_21702[(14)] = inst_21573);

(statearr_21702[(15)] = inst_21610);

(statearr_21702[(16)] = inst_21575);

(statearr_21702[(17)] = inst_21576);

return statearr_21702;
})();
var statearr_21703_21787 = state_21692__$1;
(statearr_21703_21787[(2)] = null);

(statearr_21703_21787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (39))){
var state_21692__$1 = state_21692;
var statearr_21707_21788 = state_21692__$1;
(statearr_21707_21788[(2)] = null);

(statearr_21707_21788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (4))){
var inst_21564 = (state_21692[(11)]);
var inst_21564__$1 = (state_21692[(2)]);
var inst_21565 = (inst_21564__$1 == null);
var state_21692__$1 = (function (){var statearr_21708 = state_21692;
(statearr_21708[(11)] = inst_21564__$1);

return statearr_21708;
})();
if(cljs.core.truth_(inst_21565)){
var statearr_21709_21789 = state_21692__$1;
(statearr_21709_21789[(1)] = (5));

} else {
var statearr_21710_21790 = state_21692__$1;
(statearr_21710_21790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (15))){
var inst_21574 = (state_21692[(13)]);
var inst_21573 = (state_21692[(14)]);
var inst_21575 = (state_21692[(16)]);
var inst_21576 = (state_21692[(17)]);
var inst_21589 = (state_21692[(2)]);
var inst_21590 = (inst_21576 + (1));
var tmp21704 = inst_21574;
var tmp21705 = inst_21573;
var tmp21706 = inst_21575;
var inst_21573__$1 = tmp21705;
var inst_21574__$1 = tmp21704;
var inst_21575__$1 = tmp21706;
var inst_21576__$1 = inst_21590;
var state_21692__$1 = (function (){var statearr_21711 = state_21692;
(statearr_21711[(13)] = inst_21574__$1);

(statearr_21711[(18)] = inst_21589);

(statearr_21711[(14)] = inst_21573__$1);

(statearr_21711[(16)] = inst_21575__$1);

(statearr_21711[(17)] = inst_21576__$1);

return statearr_21711;
})();
var statearr_21712_21791 = state_21692__$1;
(statearr_21712_21791[(2)] = null);

(statearr_21712_21791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (21))){
var inst_21614 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21716_21792 = state_21692__$1;
(statearr_21716_21792[(2)] = inst_21614);

(statearr_21716_21792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (31))){
var inst_21640 = (state_21692[(10)]);
var inst_21644 = done.call(null,null);
var inst_21645 = cljs.core.async.untap_STAR_.call(null,m,inst_21640);
var state_21692__$1 = (function (){var statearr_21717 = state_21692;
(statearr_21717[(19)] = inst_21644);

return statearr_21717;
})();
var statearr_21718_21793 = state_21692__$1;
(statearr_21718_21793[(2)] = inst_21645);

(statearr_21718_21793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (32))){
var inst_21635 = (state_21692[(9)]);
var inst_21632 = (state_21692[(20)]);
var inst_21634 = (state_21692[(21)]);
var inst_21633 = (state_21692[(12)]);
var inst_21647 = (state_21692[(2)]);
var inst_21648 = (inst_21635 + (1));
var tmp21713 = inst_21632;
var tmp21714 = inst_21634;
var tmp21715 = inst_21633;
var inst_21632__$1 = tmp21713;
var inst_21633__$1 = tmp21715;
var inst_21634__$1 = tmp21714;
var inst_21635__$1 = inst_21648;
var state_21692__$1 = (function (){var statearr_21719 = state_21692;
(statearr_21719[(9)] = inst_21635__$1);

(statearr_21719[(20)] = inst_21632__$1);

(statearr_21719[(21)] = inst_21634__$1);

(statearr_21719[(12)] = inst_21633__$1);

(statearr_21719[(22)] = inst_21647);

return statearr_21719;
})();
var statearr_21720_21794 = state_21692__$1;
(statearr_21720_21794[(2)] = null);

(statearr_21720_21794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (40))){
var inst_21660 = (state_21692[(23)]);
var inst_21664 = done.call(null,null);
var inst_21665 = cljs.core.async.untap_STAR_.call(null,m,inst_21660);
var state_21692__$1 = (function (){var statearr_21721 = state_21692;
(statearr_21721[(24)] = inst_21664);

return statearr_21721;
})();
var statearr_21722_21795 = state_21692__$1;
(statearr_21722_21795[(2)] = inst_21665);

(statearr_21722_21795[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (33))){
var inst_21651 = (state_21692[(25)]);
var inst_21653 = cljs.core.chunked_seq_QMARK_.call(null,inst_21651);
var state_21692__$1 = state_21692;
if(inst_21653){
var statearr_21723_21796 = state_21692__$1;
(statearr_21723_21796[(1)] = (36));

} else {
var statearr_21724_21797 = state_21692__$1;
(statearr_21724_21797[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (13))){
var inst_21583 = (state_21692[(26)]);
var inst_21586 = cljs.core.async.close_BANG_.call(null,inst_21583);
var state_21692__$1 = state_21692;
var statearr_21725_21798 = state_21692__$1;
(statearr_21725_21798[(2)] = inst_21586);

(statearr_21725_21798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (22))){
var inst_21604 = (state_21692[(8)]);
var inst_21607 = cljs.core.async.close_BANG_.call(null,inst_21604);
var state_21692__$1 = state_21692;
var statearr_21726_21799 = state_21692__$1;
(statearr_21726_21799[(2)] = inst_21607);

(statearr_21726_21799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (36))){
var inst_21651 = (state_21692[(25)]);
var inst_21655 = cljs.core.chunk_first.call(null,inst_21651);
var inst_21656 = cljs.core.chunk_rest.call(null,inst_21651);
var inst_21657 = cljs.core.count.call(null,inst_21655);
var inst_21632 = inst_21656;
var inst_21633 = inst_21655;
var inst_21634 = inst_21657;
var inst_21635 = (0);
var state_21692__$1 = (function (){var statearr_21727 = state_21692;
(statearr_21727[(9)] = inst_21635);

(statearr_21727[(20)] = inst_21632);

(statearr_21727[(21)] = inst_21634);

(statearr_21727[(12)] = inst_21633);

return statearr_21727;
})();
var statearr_21728_21800 = state_21692__$1;
(statearr_21728_21800[(2)] = null);

(statearr_21728_21800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (41))){
var inst_21651 = (state_21692[(25)]);
var inst_21667 = (state_21692[(2)]);
var inst_21668 = cljs.core.next.call(null,inst_21651);
var inst_21632 = inst_21668;
var inst_21633 = null;
var inst_21634 = (0);
var inst_21635 = (0);
var state_21692__$1 = (function (){var statearr_21729 = state_21692;
(statearr_21729[(9)] = inst_21635);

(statearr_21729[(20)] = inst_21632);

(statearr_21729[(21)] = inst_21634);

(statearr_21729[(27)] = inst_21667);

(statearr_21729[(12)] = inst_21633);

return statearr_21729;
})();
var statearr_21730_21801 = state_21692__$1;
(statearr_21730_21801[(2)] = null);

(statearr_21730_21801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (43))){
var state_21692__$1 = state_21692;
var statearr_21731_21802 = state_21692__$1;
(statearr_21731_21802[(2)] = null);

(statearr_21731_21802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (29))){
var inst_21676 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21732_21803 = state_21692__$1;
(statearr_21732_21803[(2)] = inst_21676);

(statearr_21732_21803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (44))){
var inst_21685 = (state_21692[(2)]);
var state_21692__$1 = (function (){var statearr_21733 = state_21692;
(statearr_21733[(28)] = inst_21685);

return statearr_21733;
})();
var statearr_21734_21804 = state_21692__$1;
(statearr_21734_21804[(2)] = null);

(statearr_21734_21804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (6))){
var inst_21624 = (state_21692[(29)]);
var inst_21623 = cljs.core.deref.call(null,cs);
var inst_21624__$1 = cljs.core.keys.call(null,inst_21623);
var inst_21625 = cljs.core.count.call(null,inst_21624__$1);
var inst_21626 = cljs.core.reset_BANG_.call(null,dctr,inst_21625);
var inst_21631 = cljs.core.seq.call(null,inst_21624__$1);
var inst_21632 = inst_21631;
var inst_21633 = null;
var inst_21634 = (0);
var inst_21635 = (0);
var state_21692__$1 = (function (){var statearr_21735 = state_21692;
(statearr_21735[(9)] = inst_21635);

(statearr_21735[(20)] = inst_21632);

(statearr_21735[(21)] = inst_21634);

(statearr_21735[(12)] = inst_21633);

(statearr_21735[(29)] = inst_21624__$1);

(statearr_21735[(30)] = inst_21626);

return statearr_21735;
})();
var statearr_21736_21805 = state_21692__$1;
(statearr_21736_21805[(2)] = null);

(statearr_21736_21805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (28))){
var inst_21632 = (state_21692[(20)]);
var inst_21651 = (state_21692[(25)]);
var inst_21651__$1 = cljs.core.seq.call(null,inst_21632);
var state_21692__$1 = (function (){var statearr_21737 = state_21692;
(statearr_21737[(25)] = inst_21651__$1);

return statearr_21737;
})();
if(inst_21651__$1){
var statearr_21738_21806 = state_21692__$1;
(statearr_21738_21806[(1)] = (33));

} else {
var statearr_21739_21807 = state_21692__$1;
(statearr_21739_21807[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (25))){
var inst_21635 = (state_21692[(9)]);
var inst_21634 = (state_21692[(21)]);
var inst_21637 = (inst_21635 < inst_21634);
var inst_21638 = inst_21637;
var state_21692__$1 = state_21692;
if(cljs.core.truth_(inst_21638)){
var statearr_21740_21808 = state_21692__$1;
(statearr_21740_21808[(1)] = (27));

} else {
var statearr_21741_21809 = state_21692__$1;
(statearr_21741_21809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (34))){
var state_21692__$1 = state_21692;
var statearr_21742_21810 = state_21692__$1;
(statearr_21742_21810[(2)] = null);

(statearr_21742_21810[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (17))){
var state_21692__$1 = state_21692;
var statearr_21743_21811 = state_21692__$1;
(statearr_21743_21811[(2)] = null);

(statearr_21743_21811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (3))){
var inst_21690 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21692__$1,inst_21690);
} else {
if((state_val_21693 === (12))){
var inst_21619 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21744_21812 = state_21692__$1;
(statearr_21744_21812[(2)] = inst_21619);

(statearr_21744_21812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (2))){
var state_21692__$1 = state_21692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21692__$1,(4),ch);
} else {
if((state_val_21693 === (23))){
var state_21692__$1 = state_21692;
var statearr_21745_21813 = state_21692__$1;
(statearr_21745_21813[(2)] = null);

(statearr_21745_21813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (35))){
var inst_21674 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21746_21814 = state_21692__$1;
(statearr_21746_21814[(2)] = inst_21674);

(statearr_21746_21814[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (19))){
var inst_21593 = (state_21692[(7)]);
var inst_21597 = cljs.core.chunk_first.call(null,inst_21593);
var inst_21598 = cljs.core.chunk_rest.call(null,inst_21593);
var inst_21599 = cljs.core.count.call(null,inst_21597);
var inst_21573 = inst_21598;
var inst_21574 = inst_21597;
var inst_21575 = inst_21599;
var inst_21576 = (0);
var state_21692__$1 = (function (){var statearr_21747 = state_21692;
(statearr_21747[(13)] = inst_21574);

(statearr_21747[(14)] = inst_21573);

(statearr_21747[(16)] = inst_21575);

(statearr_21747[(17)] = inst_21576);

return statearr_21747;
})();
var statearr_21748_21815 = state_21692__$1;
(statearr_21748_21815[(2)] = null);

(statearr_21748_21815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (11))){
var inst_21573 = (state_21692[(14)]);
var inst_21593 = (state_21692[(7)]);
var inst_21593__$1 = cljs.core.seq.call(null,inst_21573);
var state_21692__$1 = (function (){var statearr_21749 = state_21692;
(statearr_21749[(7)] = inst_21593__$1);

return statearr_21749;
})();
if(inst_21593__$1){
var statearr_21750_21816 = state_21692__$1;
(statearr_21750_21816[(1)] = (16));

} else {
var statearr_21751_21817 = state_21692__$1;
(statearr_21751_21817[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (9))){
var inst_21621 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21752_21818 = state_21692__$1;
(statearr_21752_21818[(2)] = inst_21621);

(statearr_21752_21818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (5))){
var inst_21571 = cljs.core.deref.call(null,cs);
var inst_21572 = cljs.core.seq.call(null,inst_21571);
var inst_21573 = inst_21572;
var inst_21574 = null;
var inst_21575 = (0);
var inst_21576 = (0);
var state_21692__$1 = (function (){var statearr_21753 = state_21692;
(statearr_21753[(13)] = inst_21574);

(statearr_21753[(14)] = inst_21573);

(statearr_21753[(16)] = inst_21575);

(statearr_21753[(17)] = inst_21576);

return statearr_21753;
})();
var statearr_21754_21819 = state_21692__$1;
(statearr_21754_21819[(2)] = null);

(statearr_21754_21819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (14))){
var state_21692__$1 = state_21692;
var statearr_21755_21820 = state_21692__$1;
(statearr_21755_21820[(2)] = null);

(statearr_21755_21820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (45))){
var inst_21682 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21756_21821 = state_21692__$1;
(statearr_21756_21821[(2)] = inst_21682);

(statearr_21756_21821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (26))){
var inst_21624 = (state_21692[(29)]);
var inst_21678 = (state_21692[(2)]);
var inst_21679 = cljs.core.seq.call(null,inst_21624);
var state_21692__$1 = (function (){var statearr_21757 = state_21692;
(statearr_21757[(31)] = inst_21678);

return statearr_21757;
})();
if(inst_21679){
var statearr_21758_21822 = state_21692__$1;
(statearr_21758_21822[(1)] = (42));

} else {
var statearr_21759_21823 = state_21692__$1;
(statearr_21759_21823[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (16))){
var inst_21593 = (state_21692[(7)]);
var inst_21595 = cljs.core.chunked_seq_QMARK_.call(null,inst_21593);
var state_21692__$1 = state_21692;
if(inst_21595){
var statearr_21760_21824 = state_21692__$1;
(statearr_21760_21824[(1)] = (19));

} else {
var statearr_21761_21825 = state_21692__$1;
(statearr_21761_21825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (38))){
var inst_21671 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21762_21826 = state_21692__$1;
(statearr_21762_21826[(2)] = inst_21671);

(statearr_21762_21826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (30))){
var state_21692__$1 = state_21692;
var statearr_21763_21827 = state_21692__$1;
(statearr_21763_21827[(2)] = null);

(statearr_21763_21827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (10))){
var inst_21574 = (state_21692[(13)]);
var inst_21576 = (state_21692[(17)]);
var inst_21582 = cljs.core._nth.call(null,inst_21574,inst_21576);
var inst_21583 = cljs.core.nth.call(null,inst_21582,(0),null);
var inst_21584 = cljs.core.nth.call(null,inst_21582,(1),null);
var state_21692__$1 = (function (){var statearr_21764 = state_21692;
(statearr_21764[(26)] = inst_21583);

return statearr_21764;
})();
if(cljs.core.truth_(inst_21584)){
var statearr_21765_21828 = state_21692__$1;
(statearr_21765_21828[(1)] = (13));

} else {
var statearr_21766_21829 = state_21692__$1;
(statearr_21766_21829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (18))){
var inst_21617 = (state_21692[(2)]);
var state_21692__$1 = state_21692;
var statearr_21767_21830 = state_21692__$1;
(statearr_21767_21830[(2)] = inst_21617);

(statearr_21767_21830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (42))){
var state_21692__$1 = state_21692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21692__$1,(45),dchan);
} else {
if((state_val_21693 === (37))){
var inst_21564 = (state_21692[(11)]);
var inst_21660 = (state_21692[(23)]);
var inst_21651 = (state_21692[(25)]);
var inst_21660__$1 = cljs.core.first.call(null,inst_21651);
var inst_21661 = cljs.core.async.put_BANG_.call(null,inst_21660__$1,inst_21564,done);
var state_21692__$1 = (function (){var statearr_21768 = state_21692;
(statearr_21768[(23)] = inst_21660__$1);

return statearr_21768;
})();
if(cljs.core.truth_(inst_21661)){
var statearr_21769_21831 = state_21692__$1;
(statearr_21769_21831[(1)] = (39));

} else {
var statearr_21770_21832 = state_21692__$1;
(statearr_21770_21832[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21693 === (8))){
var inst_21575 = (state_21692[(16)]);
var inst_21576 = (state_21692[(17)]);
var inst_21578 = (inst_21576 < inst_21575);
var inst_21579 = inst_21578;
var state_21692__$1 = state_21692;
if(cljs.core.truth_(inst_21579)){
var statearr_21771_21833 = state_21692__$1;
(statearr_21771_21833[(1)] = (10));

} else {
var statearr_21772_21834 = state_21692__$1;
(statearr_21772_21834[(1)] = (11));

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
});})(c__20473__auto___21780,cs,m,dchan,dctr,done))
;
return ((function (switch__20361__auto__,c__20473__auto___21780,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20362__auto__ = null;
var cljs$core$async$mult_$_state_machine__20362__auto____0 = (function (){
var statearr_21776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21776[(0)] = cljs$core$async$mult_$_state_machine__20362__auto__);

(statearr_21776[(1)] = (1));

return statearr_21776;
});
var cljs$core$async$mult_$_state_machine__20362__auto____1 = (function (state_21692){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_21692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e21777){if((e21777 instanceof Object)){
var ex__20365__auto__ = e21777;
var statearr_21778_21835 = state_21692;
(statearr_21778_21835[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21836 = state_21692;
state_21692 = G__21836;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20362__auto__ = function(state_21692){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20362__auto____1.call(this,state_21692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20362__auto____0;
cljs$core$async$mult_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20362__auto____1;
return cljs$core$async$mult_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___21780,cs,m,dchan,dctr,done))
})();
var state__20475__auto__ = (function (){var statearr_21779 = f__20474__auto__.call(null);
(statearr_21779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___21780);

return statearr_21779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___21780,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21837 = [];
var len__17877__auto___21840 = arguments.length;
var i__17878__auto___21841 = (0);
while(true){
if((i__17878__auto___21841 < len__17877__auto___21840)){
args21837.push((arguments[i__17878__auto___21841]));

var G__21842 = (i__17878__auto___21841 + (1));
i__17878__auto___21841 = G__21842;
continue;
} else {
}
break;
}

var G__21839 = args21837.length;
switch (G__21839) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21837.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,state_map);
} else {
var m__17475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,mode);
} else {
var m__17475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___21854 = arguments.length;
var i__17878__auto___21855 = (0);
while(true){
if((i__17878__auto___21855 < len__17877__auto___21854)){
args__17884__auto__.push((arguments[i__17878__auto___21855]));

var G__21856 = (i__17878__auto___21855 + (1));
i__17878__auto___21855 = G__21856;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21848){
var map__21849 = p__21848;
var map__21849__$1 = ((((!((map__21849 == null)))?((((map__21849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21849):map__21849);
var opts = map__21849__$1;
var statearr_21851_21857 = state;
(statearr_21851_21857[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21849,map__21849__$1,opts){
return (function (val){
var statearr_21852_21858 = state;
(statearr_21852_21858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21849,map__21849__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21853_21859 = state;
(statearr_21853_21859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21844){
var G__21845 = cljs.core.first.call(null,seq21844);
var seq21844__$1 = cljs.core.next.call(null,seq21844);
var G__21846 = cljs.core.first.call(null,seq21844__$1);
var seq21844__$2 = cljs.core.next.call(null,seq21844__$1);
var G__21847 = cljs.core.first.call(null,seq21844__$2);
var seq21844__$3 = cljs.core.next.call(null,seq21844__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21845,G__21846,G__21847,seq21844__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22023 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22024){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22024 = meta22024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22025,meta22024__$1){
var self__ = this;
var _22025__$1 = this;
return (new cljs.core.async.t_cljs$core$async22023(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22024__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22025){
var self__ = this;
var _22025__$1 = this;
return self__.meta22024;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22024","meta22024",1073372548,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22023";

cljs.core.async.t_cljs$core$async22023.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22023");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22023 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22024){
return (new cljs.core.async.t_cljs$core$async22023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22024));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22023(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20473__auto___22186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22123){
var state_val_22124 = (state_22123[(1)]);
if((state_val_22124 === (7))){
var inst_22041 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22125_22187 = state_22123__$1;
(statearr_22125_22187[(2)] = inst_22041);

(statearr_22125_22187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (20))){
var inst_22053 = (state_22123[(7)]);
var state_22123__$1 = state_22123;
var statearr_22126_22188 = state_22123__$1;
(statearr_22126_22188[(2)] = inst_22053);

(statearr_22126_22188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (27))){
var state_22123__$1 = state_22123;
var statearr_22127_22189 = state_22123__$1;
(statearr_22127_22189[(2)] = null);

(statearr_22127_22189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (1))){
var inst_22029 = (state_22123[(8)]);
var inst_22029__$1 = calc_state.call(null);
var inst_22031 = (inst_22029__$1 == null);
var inst_22032 = cljs.core.not.call(null,inst_22031);
var state_22123__$1 = (function (){var statearr_22128 = state_22123;
(statearr_22128[(8)] = inst_22029__$1);

return statearr_22128;
})();
if(inst_22032){
var statearr_22129_22190 = state_22123__$1;
(statearr_22129_22190[(1)] = (2));

} else {
var statearr_22130_22191 = state_22123__$1;
(statearr_22130_22191[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (24))){
var inst_22076 = (state_22123[(9)]);
var inst_22097 = (state_22123[(10)]);
var inst_22083 = (state_22123[(11)]);
var inst_22097__$1 = inst_22076.call(null,inst_22083);
var state_22123__$1 = (function (){var statearr_22131 = state_22123;
(statearr_22131[(10)] = inst_22097__$1);

return statearr_22131;
})();
if(cljs.core.truth_(inst_22097__$1)){
var statearr_22132_22192 = state_22123__$1;
(statearr_22132_22192[(1)] = (29));

} else {
var statearr_22133_22193 = state_22123__$1;
(statearr_22133_22193[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (4))){
var inst_22044 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22044)){
var statearr_22134_22194 = state_22123__$1;
(statearr_22134_22194[(1)] = (8));

} else {
var statearr_22135_22195 = state_22123__$1;
(statearr_22135_22195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (15))){
var inst_22070 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22070)){
var statearr_22136_22196 = state_22123__$1;
(statearr_22136_22196[(1)] = (19));

} else {
var statearr_22137_22197 = state_22123__$1;
(statearr_22137_22197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (21))){
var inst_22075 = (state_22123[(12)]);
var inst_22075__$1 = (state_22123[(2)]);
var inst_22076 = cljs.core.get.call(null,inst_22075__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22077 = cljs.core.get.call(null,inst_22075__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22078 = cljs.core.get.call(null,inst_22075__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22123__$1 = (function (){var statearr_22138 = state_22123;
(statearr_22138[(9)] = inst_22076);

(statearr_22138[(13)] = inst_22077);

(statearr_22138[(12)] = inst_22075__$1);

return statearr_22138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22123__$1,(22),inst_22078);
} else {
if((state_val_22124 === (31))){
var inst_22105 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22105)){
var statearr_22139_22198 = state_22123__$1;
(statearr_22139_22198[(1)] = (32));

} else {
var statearr_22140_22199 = state_22123__$1;
(statearr_22140_22199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (32))){
var inst_22082 = (state_22123[(14)]);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22123__$1,(35),out,inst_22082);
} else {
if((state_val_22124 === (33))){
var inst_22075 = (state_22123[(12)]);
var inst_22053 = inst_22075;
var state_22123__$1 = (function (){var statearr_22141 = state_22123;
(statearr_22141[(7)] = inst_22053);

return statearr_22141;
})();
var statearr_22142_22200 = state_22123__$1;
(statearr_22142_22200[(2)] = null);

(statearr_22142_22200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (13))){
var inst_22053 = (state_22123[(7)]);
var inst_22060 = inst_22053.cljs$lang$protocol_mask$partition0$;
var inst_22061 = (inst_22060 & (64));
var inst_22062 = inst_22053.cljs$core$ISeq$;
var inst_22063 = (inst_22061) || (inst_22062);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22063)){
var statearr_22143_22201 = state_22123__$1;
(statearr_22143_22201[(1)] = (16));

} else {
var statearr_22144_22202 = state_22123__$1;
(statearr_22144_22202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (22))){
var inst_22082 = (state_22123[(14)]);
var inst_22083 = (state_22123[(11)]);
var inst_22081 = (state_22123[(2)]);
var inst_22082__$1 = cljs.core.nth.call(null,inst_22081,(0),null);
var inst_22083__$1 = cljs.core.nth.call(null,inst_22081,(1),null);
var inst_22084 = (inst_22082__$1 == null);
var inst_22085 = cljs.core._EQ_.call(null,inst_22083__$1,change);
var inst_22086 = (inst_22084) || (inst_22085);
var state_22123__$1 = (function (){var statearr_22145 = state_22123;
(statearr_22145[(14)] = inst_22082__$1);

(statearr_22145[(11)] = inst_22083__$1);

return statearr_22145;
})();
if(cljs.core.truth_(inst_22086)){
var statearr_22146_22203 = state_22123__$1;
(statearr_22146_22203[(1)] = (23));

} else {
var statearr_22147_22204 = state_22123__$1;
(statearr_22147_22204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (36))){
var inst_22075 = (state_22123[(12)]);
var inst_22053 = inst_22075;
var state_22123__$1 = (function (){var statearr_22148 = state_22123;
(statearr_22148[(7)] = inst_22053);

return statearr_22148;
})();
var statearr_22149_22205 = state_22123__$1;
(statearr_22149_22205[(2)] = null);

(statearr_22149_22205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (29))){
var inst_22097 = (state_22123[(10)]);
var state_22123__$1 = state_22123;
var statearr_22150_22206 = state_22123__$1;
(statearr_22150_22206[(2)] = inst_22097);

(statearr_22150_22206[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (6))){
var state_22123__$1 = state_22123;
var statearr_22151_22207 = state_22123__$1;
(statearr_22151_22207[(2)] = false);

(statearr_22151_22207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (28))){
var inst_22093 = (state_22123[(2)]);
var inst_22094 = calc_state.call(null);
var inst_22053 = inst_22094;
var state_22123__$1 = (function (){var statearr_22152 = state_22123;
(statearr_22152[(7)] = inst_22053);

(statearr_22152[(15)] = inst_22093);

return statearr_22152;
})();
var statearr_22153_22208 = state_22123__$1;
(statearr_22153_22208[(2)] = null);

(statearr_22153_22208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (25))){
var inst_22119 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22154_22209 = state_22123__$1;
(statearr_22154_22209[(2)] = inst_22119);

(statearr_22154_22209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (34))){
var inst_22117 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22155_22210 = state_22123__$1;
(statearr_22155_22210[(2)] = inst_22117);

(statearr_22155_22210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (17))){
var state_22123__$1 = state_22123;
var statearr_22156_22211 = state_22123__$1;
(statearr_22156_22211[(2)] = false);

(statearr_22156_22211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (3))){
var state_22123__$1 = state_22123;
var statearr_22157_22212 = state_22123__$1;
(statearr_22157_22212[(2)] = false);

(statearr_22157_22212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (12))){
var inst_22121 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22123__$1,inst_22121);
} else {
if((state_val_22124 === (2))){
var inst_22029 = (state_22123[(8)]);
var inst_22034 = inst_22029.cljs$lang$protocol_mask$partition0$;
var inst_22035 = (inst_22034 & (64));
var inst_22036 = inst_22029.cljs$core$ISeq$;
var inst_22037 = (inst_22035) || (inst_22036);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22037)){
var statearr_22158_22213 = state_22123__$1;
(statearr_22158_22213[(1)] = (5));

} else {
var statearr_22159_22214 = state_22123__$1;
(statearr_22159_22214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (23))){
var inst_22082 = (state_22123[(14)]);
var inst_22088 = (inst_22082 == null);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22088)){
var statearr_22160_22215 = state_22123__$1;
(statearr_22160_22215[(1)] = (26));

} else {
var statearr_22161_22216 = state_22123__$1;
(statearr_22161_22216[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (35))){
var inst_22108 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
if(cljs.core.truth_(inst_22108)){
var statearr_22162_22217 = state_22123__$1;
(statearr_22162_22217[(1)] = (36));

} else {
var statearr_22163_22218 = state_22123__$1;
(statearr_22163_22218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (19))){
var inst_22053 = (state_22123[(7)]);
var inst_22072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22053);
var state_22123__$1 = state_22123;
var statearr_22164_22219 = state_22123__$1;
(statearr_22164_22219[(2)] = inst_22072);

(statearr_22164_22219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (11))){
var inst_22053 = (state_22123[(7)]);
var inst_22057 = (inst_22053 == null);
var inst_22058 = cljs.core.not.call(null,inst_22057);
var state_22123__$1 = state_22123;
if(inst_22058){
var statearr_22165_22220 = state_22123__$1;
(statearr_22165_22220[(1)] = (13));

} else {
var statearr_22166_22221 = state_22123__$1;
(statearr_22166_22221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (9))){
var inst_22029 = (state_22123[(8)]);
var state_22123__$1 = state_22123;
var statearr_22167_22222 = state_22123__$1;
(statearr_22167_22222[(2)] = inst_22029);

(statearr_22167_22222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (5))){
var state_22123__$1 = state_22123;
var statearr_22168_22223 = state_22123__$1;
(statearr_22168_22223[(2)] = true);

(statearr_22168_22223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (14))){
var state_22123__$1 = state_22123;
var statearr_22169_22224 = state_22123__$1;
(statearr_22169_22224[(2)] = false);

(statearr_22169_22224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (26))){
var inst_22083 = (state_22123[(11)]);
var inst_22090 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22083);
var state_22123__$1 = state_22123;
var statearr_22170_22225 = state_22123__$1;
(statearr_22170_22225[(2)] = inst_22090);

(statearr_22170_22225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (16))){
var state_22123__$1 = state_22123;
var statearr_22171_22226 = state_22123__$1;
(statearr_22171_22226[(2)] = true);

(statearr_22171_22226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (38))){
var inst_22113 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22172_22227 = state_22123__$1;
(statearr_22172_22227[(2)] = inst_22113);

(statearr_22172_22227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (30))){
var inst_22076 = (state_22123[(9)]);
var inst_22077 = (state_22123[(13)]);
var inst_22083 = (state_22123[(11)]);
var inst_22100 = cljs.core.empty_QMARK_.call(null,inst_22076);
var inst_22101 = inst_22077.call(null,inst_22083);
var inst_22102 = cljs.core.not.call(null,inst_22101);
var inst_22103 = (inst_22100) && (inst_22102);
var state_22123__$1 = state_22123;
var statearr_22173_22228 = state_22123__$1;
(statearr_22173_22228[(2)] = inst_22103);

(statearr_22173_22228[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (10))){
var inst_22029 = (state_22123[(8)]);
var inst_22049 = (state_22123[(2)]);
var inst_22050 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22051 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22052 = cljs.core.get.call(null,inst_22049,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22053 = inst_22029;
var state_22123__$1 = (function (){var statearr_22174 = state_22123;
(statearr_22174[(7)] = inst_22053);

(statearr_22174[(16)] = inst_22052);

(statearr_22174[(17)] = inst_22050);

(statearr_22174[(18)] = inst_22051);

return statearr_22174;
})();
var statearr_22175_22229 = state_22123__$1;
(statearr_22175_22229[(2)] = null);

(statearr_22175_22229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (18))){
var inst_22067 = (state_22123[(2)]);
var state_22123__$1 = state_22123;
var statearr_22176_22230 = state_22123__$1;
(statearr_22176_22230[(2)] = inst_22067);

(statearr_22176_22230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (37))){
var state_22123__$1 = state_22123;
var statearr_22177_22231 = state_22123__$1;
(statearr_22177_22231[(2)] = null);

(statearr_22177_22231[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22124 === (8))){
var inst_22029 = (state_22123[(8)]);
var inst_22046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22029);
var state_22123__$1 = state_22123;
var statearr_22178_22232 = state_22123__$1;
(statearr_22178_22232[(2)] = inst_22046);

(statearr_22178_22232[(1)] = (10));


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
});})(c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20361__auto__,c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20362__auto__ = null;
var cljs$core$async$mix_$_state_machine__20362__auto____0 = (function (){
var statearr_22182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22182[(0)] = cljs$core$async$mix_$_state_machine__20362__auto__);

(statearr_22182[(1)] = (1));

return statearr_22182;
});
var cljs$core$async$mix_$_state_machine__20362__auto____1 = (function (state_22123){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22183){if((e22183 instanceof Object)){
var ex__20365__auto__ = e22183;
var statearr_22184_22233 = state_22123;
(statearr_22184_22233[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22234 = state_22123;
state_22123 = G__22234;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20362__auto__ = function(state_22123){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20362__auto____1.call(this,state_22123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20362__auto____0;
cljs$core$async$mix_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20362__auto____1;
return cljs$core$async$mix_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20475__auto__ = (function (){var statearr_22185 = f__20474__auto__.call(null);
(statearr_22185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22186);

return statearr_22185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22235 = [];
var len__17877__auto___22238 = arguments.length;
var i__17878__auto___22239 = (0);
while(true){
if((i__17878__auto___22239 < len__17877__auto___22238)){
args22235.push((arguments[i__17878__auto___22239]));

var G__22240 = (i__17878__auto___22239 + (1));
i__17878__auto___22239 = G__22240;
continue;
} else {
}
break;
}

var G__22237 = args22235.length;
switch (G__22237) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22235.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22243 = [];
var len__17877__auto___22368 = arguments.length;
var i__17878__auto___22369 = (0);
while(true){
if((i__17878__auto___22369 < len__17877__auto___22368)){
args22243.push((arguments[i__17878__auto___22369]));

var G__22370 = (i__17878__auto___22369 + (1));
i__17878__auto___22369 = G__22370;
continue;
} else {
}
break;
}

var G__22245 = args22243.length;
switch (G__22245) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22243.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16819__auto__,mults){
return (function (p1__22242_SHARP_){
if(cljs.core.truth_(p1__22242_SHARP_.call(null,topic))){
return p1__22242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22246 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22247){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22247 = meta22247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22248,meta22247__$1){
var self__ = this;
var _22248__$1 = this;
return (new cljs.core.async.t_cljs$core$async22246(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22247__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22248){
var self__ = this;
var _22248__$1 = this;
return self__.meta22247;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22247","meta22247",148162627,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22246";

cljs.core.async.t_cljs$core$async22246.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22246");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22246 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22247){
return (new cljs.core.async.t_cljs$core$async22246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22247));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22246(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20473__auto___22372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22372,mults,ensure_mult,p){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22372,mults,ensure_mult,p){
return (function (state_22320){
var state_val_22321 = (state_22320[(1)]);
if((state_val_22321 === (7))){
var inst_22316 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22322_22373 = state_22320__$1;
(statearr_22322_22373[(2)] = inst_22316);

(statearr_22322_22373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (20))){
var state_22320__$1 = state_22320;
var statearr_22323_22374 = state_22320__$1;
(statearr_22323_22374[(2)] = null);

(statearr_22323_22374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (1))){
var state_22320__$1 = state_22320;
var statearr_22324_22375 = state_22320__$1;
(statearr_22324_22375[(2)] = null);

(statearr_22324_22375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (24))){
var inst_22299 = (state_22320[(7)]);
var inst_22308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22299);
var state_22320__$1 = state_22320;
var statearr_22325_22376 = state_22320__$1;
(statearr_22325_22376[(2)] = inst_22308);

(statearr_22325_22376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (4))){
var inst_22251 = (state_22320[(8)]);
var inst_22251__$1 = (state_22320[(2)]);
var inst_22252 = (inst_22251__$1 == null);
var state_22320__$1 = (function (){var statearr_22326 = state_22320;
(statearr_22326[(8)] = inst_22251__$1);

return statearr_22326;
})();
if(cljs.core.truth_(inst_22252)){
var statearr_22327_22377 = state_22320__$1;
(statearr_22327_22377[(1)] = (5));

} else {
var statearr_22328_22378 = state_22320__$1;
(statearr_22328_22378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (15))){
var inst_22293 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22329_22379 = state_22320__$1;
(statearr_22329_22379[(2)] = inst_22293);

(statearr_22329_22379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (21))){
var inst_22313 = (state_22320[(2)]);
var state_22320__$1 = (function (){var statearr_22330 = state_22320;
(statearr_22330[(9)] = inst_22313);

return statearr_22330;
})();
var statearr_22331_22380 = state_22320__$1;
(statearr_22331_22380[(2)] = null);

(statearr_22331_22380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (13))){
var inst_22275 = (state_22320[(10)]);
var inst_22277 = cljs.core.chunked_seq_QMARK_.call(null,inst_22275);
var state_22320__$1 = state_22320;
if(inst_22277){
var statearr_22332_22381 = state_22320__$1;
(statearr_22332_22381[(1)] = (16));

} else {
var statearr_22333_22382 = state_22320__$1;
(statearr_22333_22382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (22))){
var inst_22305 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
if(cljs.core.truth_(inst_22305)){
var statearr_22334_22383 = state_22320__$1;
(statearr_22334_22383[(1)] = (23));

} else {
var statearr_22335_22384 = state_22320__$1;
(statearr_22335_22384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (6))){
var inst_22251 = (state_22320[(8)]);
var inst_22301 = (state_22320[(11)]);
var inst_22299 = (state_22320[(7)]);
var inst_22299__$1 = topic_fn.call(null,inst_22251);
var inst_22300 = cljs.core.deref.call(null,mults);
var inst_22301__$1 = cljs.core.get.call(null,inst_22300,inst_22299__$1);
var state_22320__$1 = (function (){var statearr_22336 = state_22320;
(statearr_22336[(11)] = inst_22301__$1);

(statearr_22336[(7)] = inst_22299__$1);

return statearr_22336;
})();
if(cljs.core.truth_(inst_22301__$1)){
var statearr_22337_22385 = state_22320__$1;
(statearr_22337_22385[(1)] = (19));

} else {
var statearr_22338_22386 = state_22320__$1;
(statearr_22338_22386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (25))){
var inst_22310 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22339_22387 = state_22320__$1;
(statearr_22339_22387[(2)] = inst_22310);

(statearr_22339_22387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (17))){
var inst_22275 = (state_22320[(10)]);
var inst_22284 = cljs.core.first.call(null,inst_22275);
var inst_22285 = cljs.core.async.muxch_STAR_.call(null,inst_22284);
var inst_22286 = cljs.core.async.close_BANG_.call(null,inst_22285);
var inst_22287 = cljs.core.next.call(null,inst_22275);
var inst_22261 = inst_22287;
var inst_22262 = null;
var inst_22263 = (0);
var inst_22264 = (0);
var state_22320__$1 = (function (){var statearr_22340 = state_22320;
(statearr_22340[(12)] = inst_22286);

(statearr_22340[(13)] = inst_22261);

(statearr_22340[(14)] = inst_22264);

(statearr_22340[(15)] = inst_22263);

(statearr_22340[(16)] = inst_22262);

return statearr_22340;
})();
var statearr_22341_22388 = state_22320__$1;
(statearr_22341_22388[(2)] = null);

(statearr_22341_22388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (3))){
var inst_22318 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22320__$1,inst_22318);
} else {
if((state_val_22321 === (12))){
var inst_22295 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22342_22389 = state_22320__$1;
(statearr_22342_22389[(2)] = inst_22295);

(statearr_22342_22389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (2))){
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22320__$1,(4),ch);
} else {
if((state_val_22321 === (23))){
var state_22320__$1 = state_22320;
var statearr_22343_22390 = state_22320__$1;
(statearr_22343_22390[(2)] = null);

(statearr_22343_22390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (19))){
var inst_22251 = (state_22320[(8)]);
var inst_22301 = (state_22320[(11)]);
var inst_22303 = cljs.core.async.muxch_STAR_.call(null,inst_22301);
var state_22320__$1 = state_22320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22320__$1,(22),inst_22303,inst_22251);
} else {
if((state_val_22321 === (11))){
var inst_22261 = (state_22320[(13)]);
var inst_22275 = (state_22320[(10)]);
var inst_22275__$1 = cljs.core.seq.call(null,inst_22261);
var state_22320__$1 = (function (){var statearr_22344 = state_22320;
(statearr_22344[(10)] = inst_22275__$1);

return statearr_22344;
})();
if(inst_22275__$1){
var statearr_22345_22391 = state_22320__$1;
(statearr_22345_22391[(1)] = (13));

} else {
var statearr_22346_22392 = state_22320__$1;
(statearr_22346_22392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (9))){
var inst_22297 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22347_22393 = state_22320__$1;
(statearr_22347_22393[(2)] = inst_22297);

(statearr_22347_22393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (5))){
var inst_22258 = cljs.core.deref.call(null,mults);
var inst_22259 = cljs.core.vals.call(null,inst_22258);
var inst_22260 = cljs.core.seq.call(null,inst_22259);
var inst_22261 = inst_22260;
var inst_22262 = null;
var inst_22263 = (0);
var inst_22264 = (0);
var state_22320__$1 = (function (){var statearr_22348 = state_22320;
(statearr_22348[(13)] = inst_22261);

(statearr_22348[(14)] = inst_22264);

(statearr_22348[(15)] = inst_22263);

(statearr_22348[(16)] = inst_22262);

return statearr_22348;
})();
var statearr_22349_22394 = state_22320__$1;
(statearr_22349_22394[(2)] = null);

(statearr_22349_22394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (14))){
var state_22320__$1 = state_22320;
var statearr_22353_22395 = state_22320__$1;
(statearr_22353_22395[(2)] = null);

(statearr_22353_22395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (16))){
var inst_22275 = (state_22320[(10)]);
var inst_22279 = cljs.core.chunk_first.call(null,inst_22275);
var inst_22280 = cljs.core.chunk_rest.call(null,inst_22275);
var inst_22281 = cljs.core.count.call(null,inst_22279);
var inst_22261 = inst_22280;
var inst_22262 = inst_22279;
var inst_22263 = inst_22281;
var inst_22264 = (0);
var state_22320__$1 = (function (){var statearr_22354 = state_22320;
(statearr_22354[(13)] = inst_22261);

(statearr_22354[(14)] = inst_22264);

(statearr_22354[(15)] = inst_22263);

(statearr_22354[(16)] = inst_22262);

return statearr_22354;
})();
var statearr_22355_22396 = state_22320__$1;
(statearr_22355_22396[(2)] = null);

(statearr_22355_22396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (10))){
var inst_22261 = (state_22320[(13)]);
var inst_22264 = (state_22320[(14)]);
var inst_22263 = (state_22320[(15)]);
var inst_22262 = (state_22320[(16)]);
var inst_22269 = cljs.core._nth.call(null,inst_22262,inst_22264);
var inst_22270 = cljs.core.async.muxch_STAR_.call(null,inst_22269);
var inst_22271 = cljs.core.async.close_BANG_.call(null,inst_22270);
var inst_22272 = (inst_22264 + (1));
var tmp22350 = inst_22261;
var tmp22351 = inst_22263;
var tmp22352 = inst_22262;
var inst_22261__$1 = tmp22350;
var inst_22262__$1 = tmp22352;
var inst_22263__$1 = tmp22351;
var inst_22264__$1 = inst_22272;
var state_22320__$1 = (function (){var statearr_22356 = state_22320;
(statearr_22356[(13)] = inst_22261__$1);

(statearr_22356[(17)] = inst_22271);

(statearr_22356[(14)] = inst_22264__$1);

(statearr_22356[(15)] = inst_22263__$1);

(statearr_22356[(16)] = inst_22262__$1);

return statearr_22356;
})();
var statearr_22357_22397 = state_22320__$1;
(statearr_22357_22397[(2)] = null);

(statearr_22357_22397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (18))){
var inst_22290 = (state_22320[(2)]);
var state_22320__$1 = state_22320;
var statearr_22358_22398 = state_22320__$1;
(statearr_22358_22398[(2)] = inst_22290);

(statearr_22358_22398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22321 === (8))){
var inst_22264 = (state_22320[(14)]);
var inst_22263 = (state_22320[(15)]);
var inst_22266 = (inst_22264 < inst_22263);
var inst_22267 = inst_22266;
var state_22320__$1 = state_22320;
if(cljs.core.truth_(inst_22267)){
var statearr_22359_22399 = state_22320__$1;
(statearr_22359_22399[(1)] = (10));

} else {
var statearr_22360_22400 = state_22320__$1;
(statearr_22360_22400[(1)] = (11));

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
});})(c__20473__auto___22372,mults,ensure_mult,p))
;
return ((function (switch__20361__auto__,c__20473__auto___22372,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_22364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22364[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_22364[(1)] = (1));

return statearr_22364;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_22320){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22365){if((e22365 instanceof Object)){
var ex__20365__auto__ = e22365;
var statearr_22366_22401 = state_22320;
(statearr_22366_22401[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22402 = state_22320;
state_22320 = G__22402;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_22320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_22320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22372,mults,ensure_mult,p))
})();
var state__20475__auto__ = (function (){var statearr_22367 = f__20474__auto__.call(null);
(statearr_22367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22372);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22372,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22403 = [];
var len__17877__auto___22406 = arguments.length;
var i__17878__auto___22407 = (0);
while(true){
if((i__17878__auto___22407 < len__17877__auto___22406)){
args22403.push((arguments[i__17878__auto___22407]));

var G__22408 = (i__17878__auto___22407 + (1));
i__17878__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var G__22405 = args22403.length;
switch (G__22405) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22403.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22410 = [];
var len__17877__auto___22413 = arguments.length;
var i__17878__auto___22414 = (0);
while(true){
if((i__17878__auto___22414 < len__17877__auto___22413)){
args22410.push((arguments[i__17878__auto___22414]));

var G__22415 = (i__17878__auto___22414 + (1));
i__17878__auto___22414 = G__22415;
continue;
} else {
}
break;
}

var G__22412 = args22410.length;
switch (G__22412) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22410.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22417 = [];
var len__17877__auto___22488 = arguments.length;
var i__17878__auto___22489 = (0);
while(true){
if((i__17878__auto___22489 < len__17877__auto___22488)){
args22417.push((arguments[i__17878__auto___22489]));

var G__22490 = (i__17878__auto___22489 + (1));
i__17878__auto___22489 = G__22490;
continue;
} else {
}
break;
}

var G__22419 = args22417.length;
switch (G__22419) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22417.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20473__auto___22492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22458){
var state_val_22459 = (state_22458[(1)]);
if((state_val_22459 === (7))){
var state_22458__$1 = state_22458;
var statearr_22460_22493 = state_22458__$1;
(statearr_22460_22493[(2)] = null);

(statearr_22460_22493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (1))){
var state_22458__$1 = state_22458;
var statearr_22461_22494 = state_22458__$1;
(statearr_22461_22494[(2)] = null);

(statearr_22461_22494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (4))){
var inst_22422 = (state_22458[(7)]);
var inst_22424 = (inst_22422 < cnt);
var state_22458__$1 = state_22458;
if(cljs.core.truth_(inst_22424)){
var statearr_22462_22495 = state_22458__$1;
(statearr_22462_22495[(1)] = (6));

} else {
var statearr_22463_22496 = state_22458__$1;
(statearr_22463_22496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (15))){
var inst_22454 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22464_22497 = state_22458__$1;
(statearr_22464_22497[(2)] = inst_22454);

(statearr_22464_22497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (13))){
var inst_22447 = cljs.core.async.close_BANG_.call(null,out);
var state_22458__$1 = state_22458;
var statearr_22465_22498 = state_22458__$1;
(statearr_22465_22498[(2)] = inst_22447);

(statearr_22465_22498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (6))){
var state_22458__$1 = state_22458;
var statearr_22466_22499 = state_22458__$1;
(statearr_22466_22499[(2)] = null);

(statearr_22466_22499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (3))){
var inst_22456 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22458__$1,inst_22456);
} else {
if((state_val_22459 === (12))){
var inst_22444 = (state_22458[(8)]);
var inst_22444__$1 = (state_22458[(2)]);
var inst_22445 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22444__$1);
var state_22458__$1 = (function (){var statearr_22467 = state_22458;
(statearr_22467[(8)] = inst_22444__$1);

return statearr_22467;
})();
if(cljs.core.truth_(inst_22445)){
var statearr_22468_22500 = state_22458__$1;
(statearr_22468_22500[(1)] = (13));

} else {
var statearr_22469_22501 = state_22458__$1;
(statearr_22469_22501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (2))){
var inst_22421 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22422 = (0);
var state_22458__$1 = (function (){var statearr_22470 = state_22458;
(statearr_22470[(7)] = inst_22422);

(statearr_22470[(9)] = inst_22421);

return statearr_22470;
})();
var statearr_22471_22502 = state_22458__$1;
(statearr_22471_22502[(2)] = null);

(statearr_22471_22502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (11))){
var inst_22422 = (state_22458[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22458,(10),Object,null,(9));
var inst_22431 = chs__$1.call(null,inst_22422);
var inst_22432 = done.call(null,inst_22422);
var inst_22433 = cljs.core.async.take_BANG_.call(null,inst_22431,inst_22432);
var state_22458__$1 = state_22458;
var statearr_22472_22503 = state_22458__$1;
(statearr_22472_22503[(2)] = inst_22433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (9))){
var inst_22422 = (state_22458[(7)]);
var inst_22435 = (state_22458[(2)]);
var inst_22436 = (inst_22422 + (1));
var inst_22422__$1 = inst_22436;
var state_22458__$1 = (function (){var statearr_22473 = state_22458;
(statearr_22473[(7)] = inst_22422__$1);

(statearr_22473[(10)] = inst_22435);

return statearr_22473;
})();
var statearr_22474_22504 = state_22458__$1;
(statearr_22474_22504[(2)] = null);

(statearr_22474_22504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (5))){
var inst_22442 = (state_22458[(2)]);
var state_22458__$1 = (function (){var statearr_22475 = state_22458;
(statearr_22475[(11)] = inst_22442);

return statearr_22475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22458__$1,(12),dchan);
} else {
if((state_val_22459 === (14))){
var inst_22444 = (state_22458[(8)]);
var inst_22449 = cljs.core.apply.call(null,f,inst_22444);
var state_22458__$1 = state_22458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22458__$1,(16),out,inst_22449);
} else {
if((state_val_22459 === (16))){
var inst_22451 = (state_22458[(2)]);
var state_22458__$1 = (function (){var statearr_22476 = state_22458;
(statearr_22476[(12)] = inst_22451);

return statearr_22476;
})();
var statearr_22477_22505 = state_22458__$1;
(statearr_22477_22505[(2)] = null);

(statearr_22477_22505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (10))){
var inst_22426 = (state_22458[(2)]);
var inst_22427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22458__$1 = (function (){var statearr_22478 = state_22458;
(statearr_22478[(13)] = inst_22426);

return statearr_22478;
})();
var statearr_22479_22506 = state_22458__$1;
(statearr_22479_22506[(2)] = inst_22427);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22459 === (8))){
var inst_22440 = (state_22458[(2)]);
var state_22458__$1 = state_22458;
var statearr_22480_22507 = state_22458__$1;
(statearr_22480_22507[(2)] = inst_22440);

(statearr_22480_22507[(1)] = (5));


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
});})(c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20361__auto__,c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_22484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22484[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_22484[(1)] = (1));

return statearr_22484;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_22458){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22485){if((e22485 instanceof Object)){
var ex__20365__auto__ = e22485;
var statearr_22486_22508 = state_22458;
(statearr_22486_22508[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22509 = state_22458;
state_22458 = G__22509;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_22458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_22458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20475__auto__ = (function (){var statearr_22487 = f__20474__auto__.call(null);
(statearr_22487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22492);

return statearr_22487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22492,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22511 = [];
var len__17877__auto___22567 = arguments.length;
var i__17878__auto___22568 = (0);
while(true){
if((i__17878__auto___22568 < len__17877__auto___22567)){
args22511.push((arguments[i__17878__auto___22568]));

var G__22569 = (i__17878__auto___22568 + (1));
i__17878__auto___22568 = G__22569;
continue;
} else {
}
break;
}

var G__22513 = args22511.length;
switch (G__22513) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22511.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___22571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22571,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22571,out){
return (function (state_22543){
var state_val_22544 = (state_22543[(1)]);
if((state_val_22544 === (7))){
var inst_22523 = (state_22543[(7)]);
var inst_22522 = (state_22543[(8)]);
var inst_22522__$1 = (state_22543[(2)]);
var inst_22523__$1 = cljs.core.nth.call(null,inst_22522__$1,(0),null);
var inst_22524 = cljs.core.nth.call(null,inst_22522__$1,(1),null);
var inst_22525 = (inst_22523__$1 == null);
var state_22543__$1 = (function (){var statearr_22545 = state_22543;
(statearr_22545[(7)] = inst_22523__$1);

(statearr_22545[(9)] = inst_22524);

(statearr_22545[(8)] = inst_22522__$1);

return statearr_22545;
})();
if(cljs.core.truth_(inst_22525)){
var statearr_22546_22572 = state_22543__$1;
(statearr_22546_22572[(1)] = (8));

} else {
var statearr_22547_22573 = state_22543__$1;
(statearr_22547_22573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (1))){
var inst_22514 = cljs.core.vec.call(null,chs);
var inst_22515 = inst_22514;
var state_22543__$1 = (function (){var statearr_22548 = state_22543;
(statearr_22548[(10)] = inst_22515);

return statearr_22548;
})();
var statearr_22549_22574 = state_22543__$1;
(statearr_22549_22574[(2)] = null);

(statearr_22549_22574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (4))){
var inst_22515 = (state_22543[(10)]);
var state_22543__$1 = state_22543;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22543__$1,(7),inst_22515);
} else {
if((state_val_22544 === (6))){
var inst_22539 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
var statearr_22550_22575 = state_22543__$1;
(statearr_22550_22575[(2)] = inst_22539);

(statearr_22550_22575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (3))){
var inst_22541 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22543__$1,inst_22541);
} else {
if((state_val_22544 === (2))){
var inst_22515 = (state_22543[(10)]);
var inst_22517 = cljs.core.count.call(null,inst_22515);
var inst_22518 = (inst_22517 > (0));
var state_22543__$1 = state_22543;
if(cljs.core.truth_(inst_22518)){
var statearr_22552_22576 = state_22543__$1;
(statearr_22552_22576[(1)] = (4));

} else {
var statearr_22553_22577 = state_22543__$1;
(statearr_22553_22577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (11))){
var inst_22515 = (state_22543[(10)]);
var inst_22532 = (state_22543[(2)]);
var tmp22551 = inst_22515;
var inst_22515__$1 = tmp22551;
var state_22543__$1 = (function (){var statearr_22554 = state_22543;
(statearr_22554[(10)] = inst_22515__$1);

(statearr_22554[(11)] = inst_22532);

return statearr_22554;
})();
var statearr_22555_22578 = state_22543__$1;
(statearr_22555_22578[(2)] = null);

(statearr_22555_22578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (9))){
var inst_22523 = (state_22543[(7)]);
var state_22543__$1 = state_22543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22543__$1,(11),out,inst_22523);
} else {
if((state_val_22544 === (5))){
var inst_22537 = cljs.core.async.close_BANG_.call(null,out);
var state_22543__$1 = state_22543;
var statearr_22556_22579 = state_22543__$1;
(statearr_22556_22579[(2)] = inst_22537);

(statearr_22556_22579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (10))){
var inst_22535 = (state_22543[(2)]);
var state_22543__$1 = state_22543;
var statearr_22557_22580 = state_22543__$1;
(statearr_22557_22580[(2)] = inst_22535);

(statearr_22557_22580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22544 === (8))){
var inst_22523 = (state_22543[(7)]);
var inst_22515 = (state_22543[(10)]);
var inst_22524 = (state_22543[(9)]);
var inst_22522 = (state_22543[(8)]);
var inst_22527 = (function (){var cs = inst_22515;
var vec__22520 = inst_22522;
var v = inst_22523;
var c = inst_22524;
return ((function (cs,vec__22520,v,c,inst_22523,inst_22515,inst_22524,inst_22522,state_val_22544,c__20473__auto___22571,out){
return (function (p1__22510_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22510_SHARP_);
});
;})(cs,vec__22520,v,c,inst_22523,inst_22515,inst_22524,inst_22522,state_val_22544,c__20473__auto___22571,out))
})();
var inst_22528 = cljs.core.filterv.call(null,inst_22527,inst_22515);
var inst_22515__$1 = inst_22528;
var state_22543__$1 = (function (){var statearr_22558 = state_22543;
(statearr_22558[(10)] = inst_22515__$1);

return statearr_22558;
})();
var statearr_22559_22581 = state_22543__$1;
(statearr_22559_22581[(2)] = null);

(statearr_22559_22581[(1)] = (2));


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
});})(c__20473__auto___22571,out))
;
return ((function (switch__20361__auto__,c__20473__auto___22571,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_22563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22563[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_22563[(1)] = (1));

return statearr_22563;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_22543){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22564){if((e22564 instanceof Object)){
var ex__20365__auto__ = e22564;
var statearr_22565_22582 = state_22543;
(statearr_22565_22582[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22583 = state_22543;
state_22543 = G__22583;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_22543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_22543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22571,out))
})();
var state__20475__auto__ = (function (){var statearr_22566 = f__20474__auto__.call(null);
(statearr_22566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22571);

return statearr_22566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22571,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22584 = [];
var len__17877__auto___22633 = arguments.length;
var i__17878__auto___22634 = (0);
while(true){
if((i__17878__auto___22634 < len__17877__auto___22633)){
args22584.push((arguments[i__17878__auto___22634]));

var G__22635 = (i__17878__auto___22634 + (1));
i__17878__auto___22634 = G__22635;
continue;
} else {
}
break;
}

var G__22586 = args22584.length;
switch (G__22586) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22584.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___22637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22637,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22637,out){
return (function (state_22610){
var state_val_22611 = (state_22610[(1)]);
if((state_val_22611 === (7))){
var inst_22592 = (state_22610[(7)]);
var inst_22592__$1 = (state_22610[(2)]);
var inst_22593 = (inst_22592__$1 == null);
var inst_22594 = cljs.core.not.call(null,inst_22593);
var state_22610__$1 = (function (){var statearr_22612 = state_22610;
(statearr_22612[(7)] = inst_22592__$1);

return statearr_22612;
})();
if(inst_22594){
var statearr_22613_22638 = state_22610__$1;
(statearr_22613_22638[(1)] = (8));

} else {
var statearr_22614_22639 = state_22610__$1;
(statearr_22614_22639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (1))){
var inst_22587 = (0);
var state_22610__$1 = (function (){var statearr_22615 = state_22610;
(statearr_22615[(8)] = inst_22587);

return statearr_22615;
})();
var statearr_22616_22640 = state_22610__$1;
(statearr_22616_22640[(2)] = null);

(statearr_22616_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (4))){
var state_22610__$1 = state_22610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22610__$1,(7),ch);
} else {
if((state_val_22611 === (6))){
var inst_22605 = (state_22610[(2)]);
var state_22610__$1 = state_22610;
var statearr_22617_22641 = state_22610__$1;
(statearr_22617_22641[(2)] = inst_22605);

(statearr_22617_22641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (3))){
var inst_22607 = (state_22610[(2)]);
var inst_22608 = cljs.core.async.close_BANG_.call(null,out);
var state_22610__$1 = (function (){var statearr_22618 = state_22610;
(statearr_22618[(9)] = inst_22607);

return statearr_22618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22610__$1,inst_22608);
} else {
if((state_val_22611 === (2))){
var inst_22587 = (state_22610[(8)]);
var inst_22589 = (inst_22587 < n);
var state_22610__$1 = state_22610;
if(cljs.core.truth_(inst_22589)){
var statearr_22619_22642 = state_22610__$1;
(statearr_22619_22642[(1)] = (4));

} else {
var statearr_22620_22643 = state_22610__$1;
(statearr_22620_22643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (11))){
var inst_22587 = (state_22610[(8)]);
var inst_22597 = (state_22610[(2)]);
var inst_22598 = (inst_22587 + (1));
var inst_22587__$1 = inst_22598;
var state_22610__$1 = (function (){var statearr_22621 = state_22610;
(statearr_22621[(10)] = inst_22597);

(statearr_22621[(8)] = inst_22587__$1);

return statearr_22621;
})();
var statearr_22622_22644 = state_22610__$1;
(statearr_22622_22644[(2)] = null);

(statearr_22622_22644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (9))){
var state_22610__$1 = state_22610;
var statearr_22623_22645 = state_22610__$1;
(statearr_22623_22645[(2)] = null);

(statearr_22623_22645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (5))){
var state_22610__$1 = state_22610;
var statearr_22624_22646 = state_22610__$1;
(statearr_22624_22646[(2)] = null);

(statearr_22624_22646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (10))){
var inst_22602 = (state_22610[(2)]);
var state_22610__$1 = state_22610;
var statearr_22625_22647 = state_22610__$1;
(statearr_22625_22647[(2)] = inst_22602);

(statearr_22625_22647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22611 === (8))){
var inst_22592 = (state_22610[(7)]);
var state_22610__$1 = state_22610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22610__$1,(11),out,inst_22592);
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
});})(c__20473__auto___22637,out))
;
return ((function (switch__20361__auto__,c__20473__auto___22637,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_22629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22629[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_22629[(1)] = (1));

return statearr_22629;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_22610){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22630){if((e22630 instanceof Object)){
var ex__20365__auto__ = e22630;
var statearr_22631_22648 = state_22610;
(statearr_22631_22648[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22649 = state_22610;
state_22610 = G__22649;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_22610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_22610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22637,out))
})();
var state__20475__auto__ = (function (){var statearr_22632 = f__20474__auto__.call(null);
(statearr_22632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22637);

return statearr_22632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22637,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22657 = (function (map_LT_,f,ch,meta22658){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22658 = meta22658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22659,meta22658__$1){
var self__ = this;
var _22659__$1 = this;
return (new cljs.core.async.t_cljs$core$async22657(self__.map_LT_,self__.f,self__.ch,meta22658__$1));
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22659){
var self__ = this;
var _22659__$1 = this;
return self__.meta22658;
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22660 = (function (map_LT_,f,ch,meta22658,_,fn1,meta22661){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22658 = meta22658;
this._ = _;
this.fn1 = fn1;
this.meta22661 = meta22661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22662,meta22661__$1){
var self__ = this;
var _22662__$1 = this;
return (new cljs.core.async.t_cljs$core$async22660(self__.map_LT_,self__.f,self__.ch,self__.meta22658,self__._,self__.fn1,meta22661__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22662){
var self__ = this;
var _22662__$1 = this;
return self__.meta22661;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22650_SHARP_){
return f1.call(null,(((p1__22650_SHARP_ == null))?null:self__.f.call(null,p1__22650_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22658","meta22658",1268331184,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22657","cljs.core.async/t_cljs$core$async22657",-699483900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22661","meta22661",-1050038782,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22660";

cljs.core.async.t_cljs$core$async22660.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22660");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22660 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22660(map_LT___$1,f__$1,ch__$1,meta22658__$1,___$2,fn1__$1,meta22661){
return (new cljs.core.async.t_cljs$core$async22660(map_LT___$1,f__$1,ch__$1,meta22658__$1,___$2,fn1__$1,meta22661));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22660(self__.map_LT_,self__.f,self__.ch,self__.meta22658,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16807__auto__ = ret;
if(cljs.core.truth_(and__16807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22658","meta22658",1268331184,null)], null);
});

cljs.core.async.t_cljs$core$async22657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22657";

cljs.core.async.t_cljs$core$async22657.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22657");
});

cljs.core.async.__GT_t_cljs$core$async22657 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22657(map_LT___$1,f__$1,ch__$1,meta22658){
return (new cljs.core.async.t_cljs$core$async22657(map_LT___$1,f__$1,ch__$1,meta22658));
});

}

return (new cljs.core.async.t_cljs$core$async22657(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22666 = (function (map_GT_,f,ch,meta22667){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22667 = meta22667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22668,meta22667__$1){
var self__ = this;
var _22668__$1 = this;
return (new cljs.core.async.t_cljs$core$async22666(self__.map_GT_,self__.f,self__.ch,meta22667__$1));
});

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22668){
var self__ = this;
var _22668__$1 = this;
return self__.meta22667;
});

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22667","meta22667",1838778581,null)], null);
});

cljs.core.async.t_cljs$core$async22666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22666";

cljs.core.async.t_cljs$core$async22666.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22666");
});

cljs.core.async.__GT_t_cljs$core$async22666 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22666(map_GT___$1,f__$1,ch__$1,meta22667){
return (new cljs.core.async.t_cljs$core$async22666(map_GT___$1,f__$1,ch__$1,meta22667));
});

}

return (new cljs.core.async.t_cljs$core$async22666(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22672 = (function (filter_GT_,p,ch,meta22673){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22673 = meta22673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22674,meta22673__$1){
var self__ = this;
var _22674__$1 = this;
return (new cljs.core.async.t_cljs$core$async22672(self__.filter_GT_,self__.p,self__.ch,meta22673__$1));
});

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22674){
var self__ = this;
var _22674__$1 = this;
return self__.meta22673;
});

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22673","meta22673",-1000483713,null)], null);
});

cljs.core.async.t_cljs$core$async22672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22672";

cljs.core.async.t_cljs$core$async22672.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22672");
});

cljs.core.async.__GT_t_cljs$core$async22672 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22672(filter_GT___$1,p__$1,ch__$1,meta22673){
return (new cljs.core.async.t_cljs$core$async22672(filter_GT___$1,p__$1,ch__$1,meta22673));
});

}

return (new cljs.core.async.t_cljs$core$async22672(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22675 = [];
var len__17877__auto___22719 = arguments.length;
var i__17878__auto___22720 = (0);
while(true){
if((i__17878__auto___22720 < len__17877__auto___22719)){
args22675.push((arguments[i__17878__auto___22720]));

var G__22721 = (i__17878__auto___22720 + (1));
i__17878__auto___22720 = G__22721;
continue;
} else {
}
break;
}

var G__22677 = args22675.length;
switch (G__22677) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22675.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___22723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___22723,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___22723,out){
return (function (state_22698){
var state_val_22699 = (state_22698[(1)]);
if((state_val_22699 === (7))){
var inst_22694 = (state_22698[(2)]);
var state_22698__$1 = state_22698;
var statearr_22700_22724 = state_22698__$1;
(statearr_22700_22724[(2)] = inst_22694);

(statearr_22700_22724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (1))){
var state_22698__$1 = state_22698;
var statearr_22701_22725 = state_22698__$1;
(statearr_22701_22725[(2)] = null);

(statearr_22701_22725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (4))){
var inst_22680 = (state_22698[(7)]);
var inst_22680__$1 = (state_22698[(2)]);
var inst_22681 = (inst_22680__$1 == null);
var state_22698__$1 = (function (){var statearr_22702 = state_22698;
(statearr_22702[(7)] = inst_22680__$1);

return statearr_22702;
})();
if(cljs.core.truth_(inst_22681)){
var statearr_22703_22726 = state_22698__$1;
(statearr_22703_22726[(1)] = (5));

} else {
var statearr_22704_22727 = state_22698__$1;
(statearr_22704_22727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (6))){
var inst_22680 = (state_22698[(7)]);
var inst_22685 = p.call(null,inst_22680);
var state_22698__$1 = state_22698;
if(cljs.core.truth_(inst_22685)){
var statearr_22705_22728 = state_22698__$1;
(statearr_22705_22728[(1)] = (8));

} else {
var statearr_22706_22729 = state_22698__$1;
(statearr_22706_22729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (3))){
var inst_22696 = (state_22698[(2)]);
var state_22698__$1 = state_22698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22698__$1,inst_22696);
} else {
if((state_val_22699 === (2))){
var state_22698__$1 = state_22698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22698__$1,(4),ch);
} else {
if((state_val_22699 === (11))){
var inst_22688 = (state_22698[(2)]);
var state_22698__$1 = state_22698;
var statearr_22707_22730 = state_22698__$1;
(statearr_22707_22730[(2)] = inst_22688);

(statearr_22707_22730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (9))){
var state_22698__$1 = state_22698;
var statearr_22708_22731 = state_22698__$1;
(statearr_22708_22731[(2)] = null);

(statearr_22708_22731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (5))){
var inst_22683 = cljs.core.async.close_BANG_.call(null,out);
var state_22698__$1 = state_22698;
var statearr_22709_22732 = state_22698__$1;
(statearr_22709_22732[(2)] = inst_22683);

(statearr_22709_22732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (10))){
var inst_22691 = (state_22698[(2)]);
var state_22698__$1 = (function (){var statearr_22710 = state_22698;
(statearr_22710[(8)] = inst_22691);

return statearr_22710;
})();
var statearr_22711_22733 = state_22698__$1;
(statearr_22711_22733[(2)] = null);

(statearr_22711_22733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22699 === (8))){
var inst_22680 = (state_22698[(7)]);
var state_22698__$1 = state_22698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22698__$1,(11),out,inst_22680);
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
});})(c__20473__auto___22723,out))
;
return ((function (switch__20361__auto__,c__20473__auto___22723,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_22715 = [null,null,null,null,null,null,null,null,null];
(statearr_22715[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_22715[(1)] = (1));

return statearr_22715;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_22698){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22716){if((e22716 instanceof Object)){
var ex__20365__auto__ = e22716;
var statearr_22717_22734 = state_22698;
(statearr_22717_22734[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_22698;
state_22698 = G__22735;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_22698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_22698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___22723,out))
})();
var state__20475__auto__ = (function (){var statearr_22718 = f__20474__auto__.call(null);
(statearr_22718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___22723);

return statearr_22718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___22723,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22736 = [];
var len__17877__auto___22739 = arguments.length;
var i__17878__auto___22740 = (0);
while(true){
if((i__17878__auto___22740 < len__17877__auto___22739)){
args22736.push((arguments[i__17878__auto___22740]));

var G__22741 = (i__17878__auto___22740 + (1));
i__17878__auto___22740 = G__22741;
continue;
} else {
}
break;
}

var G__22738 = args22736.length;
switch (G__22738) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22736.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_22908){
var state_val_22909 = (state_22908[(1)]);
if((state_val_22909 === (7))){
var inst_22904 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22910_22951 = state_22908__$1;
(statearr_22910_22951[(2)] = inst_22904);

(statearr_22910_22951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (20))){
var inst_22874 = (state_22908[(7)]);
var inst_22885 = (state_22908[(2)]);
var inst_22886 = cljs.core.next.call(null,inst_22874);
var inst_22860 = inst_22886;
var inst_22861 = null;
var inst_22862 = (0);
var inst_22863 = (0);
var state_22908__$1 = (function (){var statearr_22911 = state_22908;
(statearr_22911[(8)] = inst_22885);

(statearr_22911[(9)] = inst_22862);

(statearr_22911[(10)] = inst_22860);

(statearr_22911[(11)] = inst_22861);

(statearr_22911[(12)] = inst_22863);

return statearr_22911;
})();
var statearr_22912_22952 = state_22908__$1;
(statearr_22912_22952[(2)] = null);

(statearr_22912_22952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (1))){
var state_22908__$1 = state_22908;
var statearr_22913_22953 = state_22908__$1;
(statearr_22913_22953[(2)] = null);

(statearr_22913_22953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (4))){
var inst_22849 = (state_22908[(13)]);
var inst_22849__$1 = (state_22908[(2)]);
var inst_22850 = (inst_22849__$1 == null);
var state_22908__$1 = (function (){var statearr_22914 = state_22908;
(statearr_22914[(13)] = inst_22849__$1);

return statearr_22914;
})();
if(cljs.core.truth_(inst_22850)){
var statearr_22915_22954 = state_22908__$1;
(statearr_22915_22954[(1)] = (5));

} else {
var statearr_22916_22955 = state_22908__$1;
(statearr_22916_22955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (15))){
var state_22908__$1 = state_22908;
var statearr_22920_22956 = state_22908__$1;
(statearr_22920_22956[(2)] = null);

(statearr_22920_22956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (21))){
var state_22908__$1 = state_22908;
var statearr_22921_22957 = state_22908__$1;
(statearr_22921_22957[(2)] = null);

(statearr_22921_22957[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (13))){
var inst_22862 = (state_22908[(9)]);
var inst_22860 = (state_22908[(10)]);
var inst_22861 = (state_22908[(11)]);
var inst_22863 = (state_22908[(12)]);
var inst_22870 = (state_22908[(2)]);
var inst_22871 = (inst_22863 + (1));
var tmp22917 = inst_22862;
var tmp22918 = inst_22860;
var tmp22919 = inst_22861;
var inst_22860__$1 = tmp22918;
var inst_22861__$1 = tmp22919;
var inst_22862__$1 = tmp22917;
var inst_22863__$1 = inst_22871;
var state_22908__$1 = (function (){var statearr_22922 = state_22908;
(statearr_22922[(14)] = inst_22870);

(statearr_22922[(9)] = inst_22862__$1);

(statearr_22922[(10)] = inst_22860__$1);

(statearr_22922[(11)] = inst_22861__$1);

(statearr_22922[(12)] = inst_22863__$1);

return statearr_22922;
})();
var statearr_22923_22958 = state_22908__$1;
(statearr_22923_22958[(2)] = null);

(statearr_22923_22958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (22))){
var state_22908__$1 = state_22908;
var statearr_22924_22959 = state_22908__$1;
(statearr_22924_22959[(2)] = null);

(statearr_22924_22959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (6))){
var inst_22849 = (state_22908[(13)]);
var inst_22858 = f.call(null,inst_22849);
var inst_22859 = cljs.core.seq.call(null,inst_22858);
var inst_22860 = inst_22859;
var inst_22861 = null;
var inst_22862 = (0);
var inst_22863 = (0);
var state_22908__$1 = (function (){var statearr_22925 = state_22908;
(statearr_22925[(9)] = inst_22862);

(statearr_22925[(10)] = inst_22860);

(statearr_22925[(11)] = inst_22861);

(statearr_22925[(12)] = inst_22863);

return statearr_22925;
})();
var statearr_22926_22960 = state_22908__$1;
(statearr_22926_22960[(2)] = null);

(statearr_22926_22960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (17))){
var inst_22874 = (state_22908[(7)]);
var inst_22878 = cljs.core.chunk_first.call(null,inst_22874);
var inst_22879 = cljs.core.chunk_rest.call(null,inst_22874);
var inst_22880 = cljs.core.count.call(null,inst_22878);
var inst_22860 = inst_22879;
var inst_22861 = inst_22878;
var inst_22862 = inst_22880;
var inst_22863 = (0);
var state_22908__$1 = (function (){var statearr_22927 = state_22908;
(statearr_22927[(9)] = inst_22862);

(statearr_22927[(10)] = inst_22860);

(statearr_22927[(11)] = inst_22861);

(statearr_22927[(12)] = inst_22863);

return statearr_22927;
})();
var statearr_22928_22961 = state_22908__$1;
(statearr_22928_22961[(2)] = null);

(statearr_22928_22961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (3))){
var inst_22906 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22908__$1,inst_22906);
} else {
if((state_val_22909 === (12))){
var inst_22894 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22929_22962 = state_22908__$1;
(statearr_22929_22962[(2)] = inst_22894);

(statearr_22929_22962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (2))){
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22908__$1,(4),in$);
} else {
if((state_val_22909 === (23))){
var inst_22902 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22930_22963 = state_22908__$1;
(statearr_22930_22963[(2)] = inst_22902);

(statearr_22930_22963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (19))){
var inst_22889 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22931_22964 = state_22908__$1;
(statearr_22931_22964[(2)] = inst_22889);

(statearr_22931_22964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (11))){
var inst_22874 = (state_22908[(7)]);
var inst_22860 = (state_22908[(10)]);
var inst_22874__$1 = cljs.core.seq.call(null,inst_22860);
var state_22908__$1 = (function (){var statearr_22932 = state_22908;
(statearr_22932[(7)] = inst_22874__$1);

return statearr_22932;
})();
if(inst_22874__$1){
var statearr_22933_22965 = state_22908__$1;
(statearr_22933_22965[(1)] = (14));

} else {
var statearr_22934_22966 = state_22908__$1;
(statearr_22934_22966[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (9))){
var inst_22896 = (state_22908[(2)]);
var inst_22897 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22908__$1 = (function (){var statearr_22935 = state_22908;
(statearr_22935[(15)] = inst_22896);

return statearr_22935;
})();
if(cljs.core.truth_(inst_22897)){
var statearr_22936_22967 = state_22908__$1;
(statearr_22936_22967[(1)] = (21));

} else {
var statearr_22937_22968 = state_22908__$1;
(statearr_22937_22968[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (5))){
var inst_22852 = cljs.core.async.close_BANG_.call(null,out);
var state_22908__$1 = state_22908;
var statearr_22938_22969 = state_22908__$1;
(statearr_22938_22969[(2)] = inst_22852);

(statearr_22938_22969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (14))){
var inst_22874 = (state_22908[(7)]);
var inst_22876 = cljs.core.chunked_seq_QMARK_.call(null,inst_22874);
var state_22908__$1 = state_22908;
if(inst_22876){
var statearr_22939_22970 = state_22908__$1;
(statearr_22939_22970[(1)] = (17));

} else {
var statearr_22940_22971 = state_22908__$1;
(statearr_22940_22971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (16))){
var inst_22892 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22941_22972 = state_22908__$1;
(statearr_22941_22972[(2)] = inst_22892);

(statearr_22941_22972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (10))){
var inst_22861 = (state_22908[(11)]);
var inst_22863 = (state_22908[(12)]);
var inst_22868 = cljs.core._nth.call(null,inst_22861,inst_22863);
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22908__$1,(13),out,inst_22868);
} else {
if((state_val_22909 === (18))){
var inst_22874 = (state_22908[(7)]);
var inst_22883 = cljs.core.first.call(null,inst_22874);
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22908__$1,(20),out,inst_22883);
} else {
if((state_val_22909 === (8))){
var inst_22862 = (state_22908[(9)]);
var inst_22863 = (state_22908[(12)]);
var inst_22865 = (inst_22863 < inst_22862);
var inst_22866 = inst_22865;
var state_22908__$1 = state_22908;
if(cljs.core.truth_(inst_22866)){
var statearr_22942_22973 = state_22908__$1;
(statearr_22942_22973[(1)] = (10));

} else {
var statearr_22943_22974 = state_22908__$1;
(statearr_22943_22974[(1)] = (11));

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
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____0 = (function (){
var statearr_22947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__);

(statearr_22947[(1)] = (1));

return statearr_22947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____1 = (function (state_22908){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_22908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e22948){if((e22948 instanceof Object)){
var ex__20365__auto__ = e22948;
var statearr_22949_22975 = state_22908;
(statearr_22949_22975[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22976 = state_22908;
state_22908 = G__22976;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__ = function(state_22908){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____1.call(this,state_22908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20362__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_22950 = f__20474__auto__.call(null);
(statearr_22950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_22950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22977 = [];
var len__17877__auto___22980 = arguments.length;
var i__17878__auto___22981 = (0);
while(true){
if((i__17878__auto___22981 < len__17877__auto___22980)){
args22977.push((arguments[i__17878__auto___22981]));

var G__22982 = (i__17878__auto___22981 + (1));
i__17878__auto___22981 = G__22982;
continue;
} else {
}
break;
}

var G__22979 = args22977.length;
switch (G__22979) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22977.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22984 = [];
var len__17877__auto___22987 = arguments.length;
var i__17878__auto___22988 = (0);
while(true){
if((i__17878__auto___22988 < len__17877__auto___22987)){
args22984.push((arguments[i__17878__auto___22988]));

var G__22989 = (i__17878__auto___22988 + (1));
i__17878__auto___22988 = G__22989;
continue;
} else {
}
break;
}

var G__22986 = args22984.length;
switch (G__22986) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22984.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22991 = [];
var len__17877__auto___23042 = arguments.length;
var i__17878__auto___23043 = (0);
while(true){
if((i__17878__auto___23043 < len__17877__auto___23042)){
args22991.push((arguments[i__17878__auto___23043]));

var G__23044 = (i__17878__auto___23043 + (1));
i__17878__auto___23043 = G__23044;
continue;
} else {
}
break;
}

var G__22993 = args22991.length;
switch (G__22993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22991.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___23046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___23046,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___23046,out){
return (function (state_23017){
var state_val_23018 = (state_23017[(1)]);
if((state_val_23018 === (7))){
var inst_23012 = (state_23017[(2)]);
var state_23017__$1 = state_23017;
var statearr_23019_23047 = state_23017__$1;
(statearr_23019_23047[(2)] = inst_23012);

(statearr_23019_23047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (1))){
var inst_22994 = null;
var state_23017__$1 = (function (){var statearr_23020 = state_23017;
(statearr_23020[(7)] = inst_22994);

return statearr_23020;
})();
var statearr_23021_23048 = state_23017__$1;
(statearr_23021_23048[(2)] = null);

(statearr_23021_23048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (4))){
var inst_22997 = (state_23017[(8)]);
var inst_22997__$1 = (state_23017[(2)]);
var inst_22998 = (inst_22997__$1 == null);
var inst_22999 = cljs.core.not.call(null,inst_22998);
var state_23017__$1 = (function (){var statearr_23022 = state_23017;
(statearr_23022[(8)] = inst_22997__$1);

return statearr_23022;
})();
if(inst_22999){
var statearr_23023_23049 = state_23017__$1;
(statearr_23023_23049[(1)] = (5));

} else {
var statearr_23024_23050 = state_23017__$1;
(statearr_23024_23050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (6))){
var state_23017__$1 = state_23017;
var statearr_23025_23051 = state_23017__$1;
(statearr_23025_23051[(2)] = null);

(statearr_23025_23051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (3))){
var inst_23014 = (state_23017[(2)]);
var inst_23015 = cljs.core.async.close_BANG_.call(null,out);
var state_23017__$1 = (function (){var statearr_23026 = state_23017;
(statearr_23026[(9)] = inst_23014);

return statearr_23026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23017__$1,inst_23015);
} else {
if((state_val_23018 === (2))){
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23017__$1,(4),ch);
} else {
if((state_val_23018 === (11))){
var inst_22997 = (state_23017[(8)]);
var inst_23006 = (state_23017[(2)]);
var inst_22994 = inst_22997;
var state_23017__$1 = (function (){var statearr_23027 = state_23017;
(statearr_23027[(7)] = inst_22994);

(statearr_23027[(10)] = inst_23006);

return statearr_23027;
})();
var statearr_23028_23052 = state_23017__$1;
(statearr_23028_23052[(2)] = null);

(statearr_23028_23052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (9))){
var inst_22997 = (state_23017[(8)]);
var state_23017__$1 = state_23017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23017__$1,(11),out,inst_22997);
} else {
if((state_val_23018 === (5))){
var inst_22997 = (state_23017[(8)]);
var inst_22994 = (state_23017[(7)]);
var inst_23001 = cljs.core._EQ_.call(null,inst_22997,inst_22994);
var state_23017__$1 = state_23017;
if(inst_23001){
var statearr_23030_23053 = state_23017__$1;
(statearr_23030_23053[(1)] = (8));

} else {
var statearr_23031_23054 = state_23017__$1;
(statearr_23031_23054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (10))){
var inst_23009 = (state_23017[(2)]);
var state_23017__$1 = state_23017;
var statearr_23032_23055 = state_23017__$1;
(statearr_23032_23055[(2)] = inst_23009);

(statearr_23032_23055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23018 === (8))){
var inst_22994 = (state_23017[(7)]);
var tmp23029 = inst_22994;
var inst_22994__$1 = tmp23029;
var state_23017__$1 = (function (){var statearr_23033 = state_23017;
(statearr_23033[(7)] = inst_22994__$1);

return statearr_23033;
})();
var statearr_23034_23056 = state_23017__$1;
(statearr_23034_23056[(2)] = null);

(statearr_23034_23056[(1)] = (2));


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
});})(c__20473__auto___23046,out))
;
return ((function (switch__20361__auto__,c__20473__auto___23046,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_23038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23038[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_23038[(1)] = (1));

return statearr_23038;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_23017){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_23017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e23039){if((e23039 instanceof Object)){
var ex__20365__auto__ = e23039;
var statearr_23040_23057 = state_23017;
(statearr_23040_23057[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23058 = state_23017;
state_23017 = G__23058;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_23017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_23017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___23046,out))
})();
var state__20475__auto__ = (function (){var statearr_23041 = f__20474__auto__.call(null);
(statearr_23041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___23046);

return statearr_23041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___23046,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23059 = [];
var len__17877__auto___23129 = arguments.length;
var i__17878__auto___23130 = (0);
while(true){
if((i__17878__auto___23130 < len__17877__auto___23129)){
args23059.push((arguments[i__17878__auto___23130]));

var G__23131 = (i__17878__auto___23130 + (1));
i__17878__auto___23130 = G__23131;
continue;
} else {
}
break;
}

var G__23061 = args23059.length;
switch (G__23061) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23059.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___23133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___23133,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___23133,out){
return (function (state_23099){
var state_val_23100 = (state_23099[(1)]);
if((state_val_23100 === (7))){
var inst_23095 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23101_23134 = state_23099__$1;
(statearr_23101_23134[(2)] = inst_23095);

(statearr_23101_23134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (1))){
var inst_23062 = (new Array(n));
var inst_23063 = inst_23062;
var inst_23064 = (0);
var state_23099__$1 = (function (){var statearr_23102 = state_23099;
(statearr_23102[(7)] = inst_23064);

(statearr_23102[(8)] = inst_23063);

return statearr_23102;
})();
var statearr_23103_23135 = state_23099__$1;
(statearr_23103_23135[(2)] = null);

(statearr_23103_23135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (4))){
var inst_23067 = (state_23099[(9)]);
var inst_23067__$1 = (state_23099[(2)]);
var inst_23068 = (inst_23067__$1 == null);
var inst_23069 = cljs.core.not.call(null,inst_23068);
var state_23099__$1 = (function (){var statearr_23104 = state_23099;
(statearr_23104[(9)] = inst_23067__$1);

return statearr_23104;
})();
if(inst_23069){
var statearr_23105_23136 = state_23099__$1;
(statearr_23105_23136[(1)] = (5));

} else {
var statearr_23106_23137 = state_23099__$1;
(statearr_23106_23137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (15))){
var inst_23089 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23107_23138 = state_23099__$1;
(statearr_23107_23138[(2)] = inst_23089);

(statearr_23107_23138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (13))){
var state_23099__$1 = state_23099;
var statearr_23108_23139 = state_23099__$1;
(statearr_23108_23139[(2)] = null);

(statearr_23108_23139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (6))){
var inst_23064 = (state_23099[(7)]);
var inst_23085 = (inst_23064 > (0));
var state_23099__$1 = state_23099;
if(cljs.core.truth_(inst_23085)){
var statearr_23109_23140 = state_23099__$1;
(statearr_23109_23140[(1)] = (12));

} else {
var statearr_23110_23141 = state_23099__$1;
(statearr_23110_23141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (3))){
var inst_23097 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23099__$1,inst_23097);
} else {
if((state_val_23100 === (12))){
var inst_23063 = (state_23099[(8)]);
var inst_23087 = cljs.core.vec.call(null,inst_23063);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23099__$1,(15),out,inst_23087);
} else {
if((state_val_23100 === (2))){
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23099__$1,(4),ch);
} else {
if((state_val_23100 === (11))){
var inst_23079 = (state_23099[(2)]);
var inst_23080 = (new Array(n));
var inst_23063 = inst_23080;
var inst_23064 = (0);
var state_23099__$1 = (function (){var statearr_23111 = state_23099;
(statearr_23111[(7)] = inst_23064);

(statearr_23111[(8)] = inst_23063);

(statearr_23111[(10)] = inst_23079);

return statearr_23111;
})();
var statearr_23112_23142 = state_23099__$1;
(statearr_23112_23142[(2)] = null);

(statearr_23112_23142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (9))){
var inst_23063 = (state_23099[(8)]);
var inst_23077 = cljs.core.vec.call(null,inst_23063);
var state_23099__$1 = state_23099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23099__$1,(11),out,inst_23077);
} else {
if((state_val_23100 === (5))){
var inst_23064 = (state_23099[(7)]);
var inst_23072 = (state_23099[(11)]);
var inst_23063 = (state_23099[(8)]);
var inst_23067 = (state_23099[(9)]);
var inst_23071 = (inst_23063[inst_23064] = inst_23067);
var inst_23072__$1 = (inst_23064 + (1));
var inst_23073 = (inst_23072__$1 < n);
var state_23099__$1 = (function (){var statearr_23113 = state_23099;
(statearr_23113[(11)] = inst_23072__$1);

(statearr_23113[(12)] = inst_23071);

return statearr_23113;
})();
if(cljs.core.truth_(inst_23073)){
var statearr_23114_23143 = state_23099__$1;
(statearr_23114_23143[(1)] = (8));

} else {
var statearr_23115_23144 = state_23099__$1;
(statearr_23115_23144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (14))){
var inst_23092 = (state_23099[(2)]);
var inst_23093 = cljs.core.async.close_BANG_.call(null,out);
var state_23099__$1 = (function (){var statearr_23117 = state_23099;
(statearr_23117[(13)] = inst_23092);

return statearr_23117;
})();
var statearr_23118_23145 = state_23099__$1;
(statearr_23118_23145[(2)] = inst_23093);

(statearr_23118_23145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (10))){
var inst_23083 = (state_23099[(2)]);
var state_23099__$1 = state_23099;
var statearr_23119_23146 = state_23099__$1;
(statearr_23119_23146[(2)] = inst_23083);

(statearr_23119_23146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23100 === (8))){
var inst_23072 = (state_23099[(11)]);
var inst_23063 = (state_23099[(8)]);
var tmp23116 = inst_23063;
var inst_23063__$1 = tmp23116;
var inst_23064 = inst_23072;
var state_23099__$1 = (function (){var statearr_23120 = state_23099;
(statearr_23120[(7)] = inst_23064);

(statearr_23120[(8)] = inst_23063__$1);

return statearr_23120;
})();
var statearr_23121_23147 = state_23099__$1;
(statearr_23121_23147[(2)] = null);

(statearr_23121_23147[(1)] = (2));


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
});})(c__20473__auto___23133,out))
;
return ((function (switch__20361__auto__,c__20473__auto___23133,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_23125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23125[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_23125[(1)] = (1));

return statearr_23125;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_23099){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_23099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e23126){if((e23126 instanceof Object)){
var ex__20365__auto__ = e23126;
var statearr_23127_23148 = state_23099;
(statearr_23127_23148[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23149 = state_23099;
state_23099 = G__23149;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_23099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_23099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___23133,out))
})();
var state__20475__auto__ = (function (){var statearr_23128 = f__20474__auto__.call(null);
(statearr_23128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___23133);

return statearr_23128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___23133,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23150 = [];
var len__17877__auto___23224 = arguments.length;
var i__17878__auto___23225 = (0);
while(true){
if((i__17878__auto___23225 < len__17877__auto___23224)){
args23150.push((arguments[i__17878__auto___23225]));

var G__23226 = (i__17878__auto___23225 + (1));
i__17878__auto___23225 = G__23226;
continue;
} else {
}
break;
}

var G__23152 = args23150.length;
switch (G__23152) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23150.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20473__auto___23228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto___23228,out){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto___23228,out){
return (function (state_23194){
var state_val_23195 = (state_23194[(1)]);
if((state_val_23195 === (7))){
var inst_23190 = (state_23194[(2)]);
var state_23194__$1 = state_23194;
var statearr_23196_23229 = state_23194__$1;
(statearr_23196_23229[(2)] = inst_23190);

(statearr_23196_23229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (1))){
var inst_23153 = [];
var inst_23154 = inst_23153;
var inst_23155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23194__$1 = (function (){var statearr_23197 = state_23194;
(statearr_23197[(7)] = inst_23154);

(statearr_23197[(8)] = inst_23155);

return statearr_23197;
})();
var statearr_23198_23230 = state_23194__$1;
(statearr_23198_23230[(2)] = null);

(statearr_23198_23230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (4))){
var inst_23158 = (state_23194[(9)]);
var inst_23158__$1 = (state_23194[(2)]);
var inst_23159 = (inst_23158__$1 == null);
var inst_23160 = cljs.core.not.call(null,inst_23159);
var state_23194__$1 = (function (){var statearr_23199 = state_23194;
(statearr_23199[(9)] = inst_23158__$1);

return statearr_23199;
})();
if(inst_23160){
var statearr_23200_23231 = state_23194__$1;
(statearr_23200_23231[(1)] = (5));

} else {
var statearr_23201_23232 = state_23194__$1;
(statearr_23201_23232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (15))){
var inst_23184 = (state_23194[(2)]);
var state_23194__$1 = state_23194;
var statearr_23202_23233 = state_23194__$1;
(statearr_23202_23233[(2)] = inst_23184);

(statearr_23202_23233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (13))){
var state_23194__$1 = state_23194;
var statearr_23203_23234 = state_23194__$1;
(statearr_23203_23234[(2)] = null);

(statearr_23203_23234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (6))){
var inst_23154 = (state_23194[(7)]);
var inst_23179 = inst_23154.length;
var inst_23180 = (inst_23179 > (0));
var state_23194__$1 = state_23194;
if(cljs.core.truth_(inst_23180)){
var statearr_23204_23235 = state_23194__$1;
(statearr_23204_23235[(1)] = (12));

} else {
var statearr_23205_23236 = state_23194__$1;
(statearr_23205_23236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (3))){
var inst_23192 = (state_23194[(2)]);
var state_23194__$1 = state_23194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23194__$1,inst_23192);
} else {
if((state_val_23195 === (12))){
var inst_23154 = (state_23194[(7)]);
var inst_23182 = cljs.core.vec.call(null,inst_23154);
var state_23194__$1 = state_23194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23194__$1,(15),out,inst_23182);
} else {
if((state_val_23195 === (2))){
var state_23194__$1 = state_23194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23194__$1,(4),ch);
} else {
if((state_val_23195 === (11))){
var inst_23162 = (state_23194[(10)]);
var inst_23158 = (state_23194[(9)]);
var inst_23172 = (state_23194[(2)]);
var inst_23173 = [];
var inst_23174 = inst_23173.push(inst_23158);
var inst_23154 = inst_23173;
var inst_23155 = inst_23162;
var state_23194__$1 = (function (){var statearr_23206 = state_23194;
(statearr_23206[(7)] = inst_23154);

(statearr_23206[(8)] = inst_23155);

(statearr_23206[(11)] = inst_23172);

(statearr_23206[(12)] = inst_23174);

return statearr_23206;
})();
var statearr_23207_23237 = state_23194__$1;
(statearr_23207_23237[(2)] = null);

(statearr_23207_23237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (9))){
var inst_23154 = (state_23194[(7)]);
var inst_23170 = cljs.core.vec.call(null,inst_23154);
var state_23194__$1 = state_23194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23194__$1,(11),out,inst_23170);
} else {
if((state_val_23195 === (5))){
var inst_23162 = (state_23194[(10)]);
var inst_23158 = (state_23194[(9)]);
var inst_23155 = (state_23194[(8)]);
var inst_23162__$1 = f.call(null,inst_23158);
var inst_23163 = cljs.core._EQ_.call(null,inst_23162__$1,inst_23155);
var inst_23164 = cljs.core.keyword_identical_QMARK_.call(null,inst_23155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23165 = (inst_23163) || (inst_23164);
var state_23194__$1 = (function (){var statearr_23208 = state_23194;
(statearr_23208[(10)] = inst_23162__$1);

return statearr_23208;
})();
if(cljs.core.truth_(inst_23165)){
var statearr_23209_23238 = state_23194__$1;
(statearr_23209_23238[(1)] = (8));

} else {
var statearr_23210_23239 = state_23194__$1;
(statearr_23210_23239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (14))){
var inst_23187 = (state_23194[(2)]);
var inst_23188 = cljs.core.async.close_BANG_.call(null,out);
var state_23194__$1 = (function (){var statearr_23212 = state_23194;
(statearr_23212[(13)] = inst_23187);

return statearr_23212;
})();
var statearr_23213_23240 = state_23194__$1;
(statearr_23213_23240[(2)] = inst_23188);

(statearr_23213_23240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (10))){
var inst_23177 = (state_23194[(2)]);
var state_23194__$1 = state_23194;
var statearr_23214_23241 = state_23194__$1;
(statearr_23214_23241[(2)] = inst_23177);

(statearr_23214_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23195 === (8))){
var inst_23162 = (state_23194[(10)]);
var inst_23158 = (state_23194[(9)]);
var inst_23154 = (state_23194[(7)]);
var inst_23167 = inst_23154.push(inst_23158);
var tmp23211 = inst_23154;
var inst_23154__$1 = tmp23211;
var inst_23155 = inst_23162;
var state_23194__$1 = (function (){var statearr_23215 = state_23194;
(statearr_23215[(7)] = inst_23154__$1);

(statearr_23215[(8)] = inst_23155);

(statearr_23215[(14)] = inst_23167);

return statearr_23215;
})();
var statearr_23216_23242 = state_23194__$1;
(statearr_23216_23242[(2)] = null);

(statearr_23216_23242[(1)] = (2));


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
});})(c__20473__auto___23228,out))
;
return ((function (switch__20361__auto__,c__20473__auto___23228,out){
return (function() {
var cljs$core$async$state_machine__20362__auto__ = null;
var cljs$core$async$state_machine__20362__auto____0 = (function (){
var statearr_23220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23220[(0)] = cljs$core$async$state_machine__20362__auto__);

(statearr_23220[(1)] = (1));

return statearr_23220;
});
var cljs$core$async$state_machine__20362__auto____1 = (function (state_23194){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_23194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e23221){if((e23221 instanceof Object)){
var ex__20365__auto__ = e23221;
var statearr_23222_23243 = state_23194;
(statearr_23222_23243[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23244 = state_23194;
state_23194 = G__23244;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
cljs$core$async$state_machine__20362__auto__ = function(state_23194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20362__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20362__auto____1.call(this,state_23194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20362__auto____0;
cljs$core$async$state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20362__auto____1;
return cljs$core$async$state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto___23228,out))
})();
var state__20475__auto__ = (function (){var statearr_23223 = f__20474__auto__.call(null);
(statearr_23223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto___23228);

return statearr_23223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto___23228,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1457668828318