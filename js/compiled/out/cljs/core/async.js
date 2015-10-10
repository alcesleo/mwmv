// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async30153 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30153 = (function (fn_handler,f,meta30154){
this.fn_handler = fn_handler;
this.f = f;
this.meta30154 = meta30154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30155,meta30154__$1){
var self__ = this;
var _30155__$1 = this;
return (new cljs.core.async.t_cljs$core$async30153(self__.fn_handler,self__.f,meta30154__$1));
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30155){
var self__ = this;
var _30155__$1 = this;
return self__.meta30154;
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30153.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30154","meta30154",-1787706143,null)], null);
});

cljs.core.async.t_cljs$core$async30153.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30153";

cljs.core.async.t_cljs$core$async30153.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async30153");
});

cljs.core.async.__GT_t_cljs$core$async30153 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async30153(fn_handler__$1,f__$1,meta30154){
return (new cljs.core.async.t_cljs$core$async30153(fn_handler__$1,f__$1,meta30154));
});

}

return (new cljs.core.async.t_cljs$core$async30153(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args30158 = [];
var len__17364__auto___30161 = arguments.length;
var i__17365__auto___30162 = (0);
while(true){
if((i__17365__auto___30162 < len__17364__auto___30161)){
args30158.push((arguments[i__17365__auto___30162]));

var G__30163 = (i__17365__auto___30162 + (1));
i__17365__auto___30162 = G__30163;
continue;
} else {
}
break;
}

var G__30160 = args30158.length;
switch (G__30160) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30158.length)].join('')));

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
var args30165 = [];
var len__17364__auto___30168 = arguments.length;
var i__17365__auto___30169 = (0);
while(true){
if((i__17365__auto___30169 < len__17364__auto___30168)){
args30165.push((arguments[i__17365__auto___30169]));

var G__30170 = (i__17365__auto___30169 + (1));
i__17365__auto___30169 = G__30170;
continue;
} else {
}
break;
}

var G__30167 = args30165.length;
switch (G__30167) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30165.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30172 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30172);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30172,ret){
return (function (){
return fn1.call(null,val_30172);
});})(val_30172,ret))
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
var args30173 = [];
var len__17364__auto___30176 = arguments.length;
var i__17365__auto___30177 = (0);
while(true){
if((i__17365__auto___30177 < len__17364__auto___30176)){
args30173.push((arguments[i__17365__auto___30177]));

var G__30178 = (i__17365__auto___30177 + (1));
i__17365__auto___30177 = G__30178;
continue;
} else {
}
break;
}

var G__30175 = args30173.length;
switch (G__30175) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30173.length)].join('')));

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
var n__17209__auto___30180 = n;
var x_30181 = (0);
while(true){
if((x_30181 < n__17209__auto___30180)){
(a[x_30181] = (0));

var G__30182 = (x_30181 + (1));
x_30181 = G__30182;
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

var G__30183 = (i + (1));
i = G__30183;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30187 = (function (alt_flag,flag,meta30188){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30188 = meta30188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30189,meta30188__$1){
var self__ = this;
var _30189__$1 = this;
return (new cljs.core.async.t_cljs$core$async30187(self__.alt_flag,self__.flag,meta30188__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30189){
var self__ = this;
var _30189__$1 = this;
return self__.meta30188;
});})(flag))
;

cljs.core.async.t_cljs$core$async30187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30187.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30188","meta30188",1627293986,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30187";

cljs.core.async.t_cljs$core$async30187.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async30187");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30187 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30187(alt_flag__$1,flag__$1,meta30188){
return (new cljs.core.async.t_cljs$core$async30187(alt_flag__$1,flag__$1,meta30188));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30187(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30193 = (function (alt_handler,flag,cb,meta30194){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30194 = meta30194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30195,meta30194__$1){
var self__ = this;
var _30195__$1 = this;
return (new cljs.core.async.t_cljs$core$async30193(self__.alt_handler,self__.flag,self__.cb,meta30194__$1));
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30195){
var self__ = this;
var _30195__$1 = this;
return self__.meta30194;
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30193.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30194","meta30194",-523543639,null)], null);
});

cljs.core.async.t_cljs$core$async30193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30193";

cljs.core.async.t_cljs$core$async30193.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async30193");
});

cljs.core.async.__GT_t_cljs$core$async30193 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30193(alt_handler__$1,flag__$1,cb__$1,meta30194){
return (new cljs.core.async.t_cljs$core$async30193(alt_handler__$1,flag__$1,cb__$1,meta30194));
});

}

return (new cljs.core.async.t_cljs$core$async30193(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30196_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30197_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30197_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16306__auto__ = wport;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30198 = (i + (1));
i = G__30198;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16306__auto__ = ret;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16294__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16294__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16294__auto__;
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
var args__17371__auto__ = [];
var len__17364__auto___30204 = arguments.length;
var i__17365__auto___30205 = (0);
while(true){
if((i__17365__auto___30205 < len__17364__auto___30204)){
args__17371__auto__.push((arguments[i__17365__auto___30205]));

var G__30206 = (i__17365__auto___30205 + (1));
i__17365__auto___30205 = G__30206;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30201){
var map__30202 = p__30201;
var map__30202__$1 = ((((!((map__30202 == null)))?((((map__30202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30202):map__30202);
var opts = map__30202__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30199){
var G__30200 = cljs.core.first.call(null,seq30199);
var seq30199__$1 = cljs.core.next.call(null,seq30199);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30200,seq30199__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30207 = [];
var len__17364__auto___30257 = arguments.length;
var i__17365__auto___30258 = (0);
while(true){
if((i__17365__auto___30258 < len__17364__auto___30257)){
args30207.push((arguments[i__17365__auto___30258]));

var G__30259 = (i__17365__auto___30258 + (1));
i__17365__auto___30258 = G__30259;
continue;
} else {
}
break;
}

var G__30209 = args30207.length;
switch (G__30209) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30207.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19328__auto___30261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___30261){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___30261){
return (function (state_30233){
var state_val_30234 = (state_30233[(1)]);
if((state_val_30234 === (7))){
var inst_30229 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30235_30262 = state_30233__$1;
(statearr_30235_30262[(2)] = inst_30229);

(statearr_30235_30262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (1))){
var state_30233__$1 = state_30233;
var statearr_30236_30263 = state_30233__$1;
(statearr_30236_30263[(2)] = null);

(statearr_30236_30263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (4))){
var inst_30212 = (state_30233[(7)]);
var inst_30212__$1 = (state_30233[(2)]);
var inst_30213 = (inst_30212__$1 == null);
var state_30233__$1 = (function (){var statearr_30237 = state_30233;
(statearr_30237[(7)] = inst_30212__$1);

return statearr_30237;
})();
if(cljs.core.truth_(inst_30213)){
var statearr_30238_30264 = state_30233__$1;
(statearr_30238_30264[(1)] = (5));

} else {
var statearr_30239_30265 = state_30233__$1;
(statearr_30239_30265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (13))){
var state_30233__$1 = state_30233;
var statearr_30240_30266 = state_30233__$1;
(statearr_30240_30266[(2)] = null);

(statearr_30240_30266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (6))){
var inst_30212 = (state_30233[(7)]);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(11),to,inst_30212);
} else {
if((state_val_30234 === (3))){
var inst_30231 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30233__$1,inst_30231);
} else {
if((state_val_30234 === (12))){
var state_30233__$1 = state_30233;
var statearr_30241_30267 = state_30233__$1;
(statearr_30241_30267[(2)] = null);

(statearr_30241_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (2))){
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30233__$1,(4),from);
} else {
if((state_val_30234 === (11))){
var inst_30222 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
if(cljs.core.truth_(inst_30222)){
var statearr_30242_30268 = state_30233__$1;
(statearr_30242_30268[(1)] = (12));

} else {
var statearr_30243_30269 = state_30233__$1;
(statearr_30243_30269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (9))){
var state_30233__$1 = state_30233;
var statearr_30244_30270 = state_30233__$1;
(statearr_30244_30270[(2)] = null);

(statearr_30244_30270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (5))){
var state_30233__$1 = state_30233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30245_30271 = state_30233__$1;
(statearr_30245_30271[(1)] = (8));

} else {
var statearr_30246_30272 = state_30233__$1;
(statearr_30246_30272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (14))){
var inst_30227 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30247_30273 = state_30233__$1;
(statearr_30247_30273[(2)] = inst_30227);

(statearr_30247_30273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (10))){
var inst_30219 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30248_30274 = state_30233__$1;
(statearr_30248_30274[(2)] = inst_30219);

(statearr_30248_30274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (8))){
var inst_30216 = cljs.core.async.close_BANG_.call(null,to);
var state_30233__$1 = state_30233;
var statearr_30249_30275 = state_30233__$1;
(statearr_30249_30275[(2)] = inst_30216);

(statearr_30249_30275[(1)] = (10));


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
});})(c__19328__auto___30261))
;
return ((function (switch__19307__auto__,c__19328__auto___30261){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_30253 = [null,null,null,null,null,null,null,null];
(statearr_30253[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_30253[(1)] = (1));

return statearr_30253;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_30233){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30254){if((e30254 instanceof Object)){
var ex__19311__auto__ = e30254;
var statearr_30255_30276 = state_30233;
(statearr_30255_30276[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30277 = state_30233;
state_30233 = G__30277;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_30233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_30233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___30261))
})();
var state__19330__auto__ = (function (){var statearr_30256 = f__19329__auto__.call(null);
(statearr_30256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30261);

return statearr_30256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___30261))
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
return (function (p__30461){
var vec__30462 = p__30461;
var v = cljs.core.nth.call(null,vec__30462,(0),null);
var p = cljs.core.nth.call(null,vec__30462,(1),null);
var job = vec__30462;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19328__auto___30644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results){
return (function (state_30467){
var state_val_30468 = (state_30467[(1)]);
if((state_val_30468 === (1))){
var state_30467__$1 = state_30467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30467__$1,(2),res,v);
} else {
if((state_val_30468 === (2))){
var inst_30464 = (state_30467[(2)]);
var inst_30465 = cljs.core.async.close_BANG_.call(null,res);
var state_30467__$1 = (function (){var statearr_30469 = state_30467;
(statearr_30469[(7)] = inst_30464);

return statearr_30469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30467__$1,inst_30465);
} else {
return null;
}
}
});})(c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results))
;
return ((function (switch__19307__auto__,c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_30473 = [null,null,null,null,null,null,null,null];
(statearr_30473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_30473[(1)] = (1));

return statearr_30473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_30467){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30474){if((e30474 instanceof Object)){
var ex__19311__auto__ = e30474;
var statearr_30475_30645 = state_30467;
(statearr_30475_30645[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30467;
state_30467 = G__30646;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_30467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_30467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results))
})();
var state__19330__auto__ = (function (){var statearr_30476 = f__19329__auto__.call(null);
(statearr_30476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30644);

return statearr_30476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___30644,res,vec__30462,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30477){
var vec__30478 = p__30477;
var v = cljs.core.nth.call(null,vec__30478,(0),null);
var p = cljs.core.nth.call(null,vec__30478,(1),null);
var job = vec__30478;
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
var n__17209__auto___30647 = n;
var __30648 = (0);
while(true){
if((__30648 < n__17209__auto___30647)){
var G__30479_30649 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30479_30649) {
case "compute":
var c__19328__auto___30651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30648,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (__30648,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function (state_30492){
var state_val_30493 = (state_30492[(1)]);
if((state_val_30493 === (1))){
var state_30492__$1 = state_30492;
var statearr_30494_30652 = state_30492__$1;
(statearr_30494_30652[(2)] = null);

(statearr_30494_30652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (2))){
var state_30492__$1 = state_30492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30492__$1,(4),jobs);
} else {
if((state_val_30493 === (3))){
var inst_30490 = (state_30492[(2)]);
var state_30492__$1 = state_30492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30492__$1,inst_30490);
} else {
if((state_val_30493 === (4))){
var inst_30482 = (state_30492[(2)]);
var inst_30483 = process.call(null,inst_30482);
var state_30492__$1 = state_30492;
if(cljs.core.truth_(inst_30483)){
var statearr_30495_30653 = state_30492__$1;
(statearr_30495_30653[(1)] = (5));

} else {
var statearr_30496_30654 = state_30492__$1;
(statearr_30496_30654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (5))){
var state_30492__$1 = state_30492;
var statearr_30497_30655 = state_30492__$1;
(statearr_30497_30655[(2)] = null);

(statearr_30497_30655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (6))){
var state_30492__$1 = state_30492;
var statearr_30498_30656 = state_30492__$1;
(statearr_30498_30656[(2)] = null);

(statearr_30498_30656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30493 === (7))){
var inst_30488 = (state_30492[(2)]);
var state_30492__$1 = state_30492;
var statearr_30499_30657 = state_30492__$1;
(statearr_30499_30657[(2)] = inst_30488);

(statearr_30499_30657[(1)] = (3));


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
});})(__30648,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
;
return ((function (__30648,switch__19307__auto__,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_30503 = [null,null,null,null,null,null,null];
(statearr_30503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_30503[(1)] = (1));

return statearr_30503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_30492){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30504){if((e30504 instanceof Object)){
var ex__19311__auto__ = e30504;
var statearr_30505_30658 = state_30492;
(statearr_30505_30658[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30659 = state_30492;
state_30492 = G__30659;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_30492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_30492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(__30648,switch__19307__auto__,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_30506 = f__19329__auto__.call(null);
(statearr_30506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30651);

return statearr_30506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(__30648,c__19328__auto___30651,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
);


break;
case "async":
var c__19328__auto___30660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30648,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (__30648,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function (state_30519){
var state_val_30520 = (state_30519[(1)]);
if((state_val_30520 === (1))){
var state_30519__$1 = state_30519;
var statearr_30521_30661 = state_30519__$1;
(statearr_30521_30661[(2)] = null);

(statearr_30521_30661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (2))){
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30519__$1,(4),jobs);
} else {
if((state_val_30520 === (3))){
var inst_30517 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30519__$1,inst_30517);
} else {
if((state_val_30520 === (4))){
var inst_30509 = (state_30519[(2)]);
var inst_30510 = async.call(null,inst_30509);
var state_30519__$1 = state_30519;
if(cljs.core.truth_(inst_30510)){
var statearr_30522_30662 = state_30519__$1;
(statearr_30522_30662[(1)] = (5));

} else {
var statearr_30523_30663 = state_30519__$1;
(statearr_30523_30663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (5))){
var state_30519__$1 = state_30519;
var statearr_30524_30664 = state_30519__$1;
(statearr_30524_30664[(2)] = null);

(statearr_30524_30664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (6))){
var state_30519__$1 = state_30519;
var statearr_30525_30665 = state_30519__$1;
(statearr_30525_30665[(2)] = null);

(statearr_30525_30665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30520 === (7))){
var inst_30515 = (state_30519[(2)]);
var state_30519__$1 = state_30519;
var statearr_30526_30666 = state_30519__$1;
(statearr_30526_30666[(2)] = inst_30515);

(statearr_30526_30666[(1)] = (3));


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
});})(__30648,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
;
return ((function (__30648,switch__19307__auto__,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_30530 = [null,null,null,null,null,null,null];
(statearr_30530[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_30530[(1)] = (1));

return statearr_30530;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_30519){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30531){if((e30531 instanceof Object)){
var ex__19311__auto__ = e30531;
var statearr_30532_30667 = state_30519;
(statearr_30532_30667[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30668 = state_30519;
state_30519 = G__30668;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_30519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_30519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(__30648,switch__19307__auto__,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_30533 = f__19329__auto__.call(null);
(statearr_30533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30660);

return statearr_30533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(__30648,c__19328__auto___30660,G__30479_30649,n__17209__auto___30647,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30669 = (__30648 + (1));
__30648 = G__30669;
continue;
} else {
}
break;
}

var c__19328__auto___30670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___30670,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___30670,jobs,results,process,async){
return (function (state_30555){
var state_val_30556 = (state_30555[(1)]);
if((state_val_30556 === (1))){
var state_30555__$1 = state_30555;
var statearr_30557_30671 = state_30555__$1;
(statearr_30557_30671[(2)] = null);

(statearr_30557_30671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (2))){
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30555__$1,(4),from);
} else {
if((state_val_30556 === (3))){
var inst_30553 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30555__$1,inst_30553);
} else {
if((state_val_30556 === (4))){
var inst_30536 = (state_30555[(7)]);
var inst_30536__$1 = (state_30555[(2)]);
var inst_30537 = (inst_30536__$1 == null);
var state_30555__$1 = (function (){var statearr_30558 = state_30555;
(statearr_30558[(7)] = inst_30536__$1);

return statearr_30558;
})();
if(cljs.core.truth_(inst_30537)){
var statearr_30559_30672 = state_30555__$1;
(statearr_30559_30672[(1)] = (5));

} else {
var statearr_30560_30673 = state_30555__$1;
(statearr_30560_30673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (5))){
var inst_30539 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30555__$1 = state_30555;
var statearr_30561_30674 = state_30555__$1;
(statearr_30561_30674[(2)] = inst_30539);

(statearr_30561_30674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (6))){
var inst_30536 = (state_30555[(7)]);
var inst_30541 = (state_30555[(8)]);
var inst_30541__$1 = cljs.core.async.chan.call(null,(1));
var inst_30542 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30543 = [inst_30536,inst_30541__$1];
var inst_30544 = (new cljs.core.PersistentVector(null,2,(5),inst_30542,inst_30543,null));
var state_30555__$1 = (function (){var statearr_30562 = state_30555;
(statearr_30562[(8)] = inst_30541__$1);

return statearr_30562;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30555__$1,(8),jobs,inst_30544);
} else {
if((state_val_30556 === (7))){
var inst_30551 = (state_30555[(2)]);
var state_30555__$1 = state_30555;
var statearr_30563_30675 = state_30555__$1;
(statearr_30563_30675[(2)] = inst_30551);

(statearr_30563_30675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30556 === (8))){
var inst_30541 = (state_30555[(8)]);
var inst_30546 = (state_30555[(2)]);
var state_30555__$1 = (function (){var statearr_30564 = state_30555;
(statearr_30564[(9)] = inst_30546);

return statearr_30564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30555__$1,(9),results,inst_30541);
} else {
if((state_val_30556 === (9))){
var inst_30548 = (state_30555[(2)]);
var state_30555__$1 = (function (){var statearr_30565 = state_30555;
(statearr_30565[(10)] = inst_30548);

return statearr_30565;
})();
var statearr_30566_30676 = state_30555__$1;
(statearr_30566_30676[(2)] = null);

(statearr_30566_30676[(1)] = (2));


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
});})(c__19328__auto___30670,jobs,results,process,async))
;
return ((function (switch__19307__auto__,c__19328__auto___30670,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_30570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_30570[(1)] = (1));

return statearr_30570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_30555){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30571){if((e30571 instanceof Object)){
var ex__19311__auto__ = e30571;
var statearr_30572_30677 = state_30555;
(statearr_30572_30677[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30678 = state_30555;
state_30555 = G__30678;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_30555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_30555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___30670,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_30573 = f__19329__auto__.call(null);
(statearr_30573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30670);

return statearr_30573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___30670,jobs,results,process,async))
);


var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__,jobs,results,process,async){
return (function (state_30611){
var state_val_30612 = (state_30611[(1)]);
if((state_val_30612 === (7))){
var inst_30607 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30613_30679 = state_30611__$1;
(statearr_30613_30679[(2)] = inst_30607);

(statearr_30613_30679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (20))){
var state_30611__$1 = state_30611;
var statearr_30614_30680 = state_30611__$1;
(statearr_30614_30680[(2)] = null);

(statearr_30614_30680[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (1))){
var state_30611__$1 = state_30611;
var statearr_30615_30681 = state_30611__$1;
(statearr_30615_30681[(2)] = null);

(statearr_30615_30681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (4))){
var inst_30576 = (state_30611[(7)]);
var inst_30576__$1 = (state_30611[(2)]);
var inst_30577 = (inst_30576__$1 == null);
var state_30611__$1 = (function (){var statearr_30616 = state_30611;
(statearr_30616[(7)] = inst_30576__$1);

return statearr_30616;
})();
if(cljs.core.truth_(inst_30577)){
var statearr_30617_30682 = state_30611__$1;
(statearr_30617_30682[(1)] = (5));

} else {
var statearr_30618_30683 = state_30611__$1;
(statearr_30618_30683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (15))){
var inst_30589 = (state_30611[(8)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30611__$1,(18),to,inst_30589);
} else {
if((state_val_30612 === (21))){
var inst_30602 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30619_30684 = state_30611__$1;
(statearr_30619_30684[(2)] = inst_30602);

(statearr_30619_30684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (13))){
var inst_30604 = (state_30611[(2)]);
var state_30611__$1 = (function (){var statearr_30620 = state_30611;
(statearr_30620[(9)] = inst_30604);

return statearr_30620;
})();
var statearr_30621_30685 = state_30611__$1;
(statearr_30621_30685[(2)] = null);

(statearr_30621_30685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (6))){
var inst_30576 = (state_30611[(7)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30611__$1,(11),inst_30576);
} else {
if((state_val_30612 === (17))){
var inst_30597 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
if(cljs.core.truth_(inst_30597)){
var statearr_30622_30686 = state_30611__$1;
(statearr_30622_30686[(1)] = (19));

} else {
var statearr_30623_30687 = state_30611__$1;
(statearr_30623_30687[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (3))){
var inst_30609 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30611__$1,inst_30609);
} else {
if((state_val_30612 === (12))){
var inst_30586 = (state_30611[(10)]);
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30611__$1,(14),inst_30586);
} else {
if((state_val_30612 === (2))){
var state_30611__$1 = state_30611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30611__$1,(4),results);
} else {
if((state_val_30612 === (19))){
var state_30611__$1 = state_30611;
var statearr_30624_30688 = state_30611__$1;
(statearr_30624_30688[(2)] = null);

(statearr_30624_30688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (11))){
var inst_30586 = (state_30611[(2)]);
var state_30611__$1 = (function (){var statearr_30625 = state_30611;
(statearr_30625[(10)] = inst_30586);

return statearr_30625;
})();
var statearr_30626_30689 = state_30611__$1;
(statearr_30626_30689[(2)] = null);

(statearr_30626_30689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (9))){
var state_30611__$1 = state_30611;
var statearr_30627_30690 = state_30611__$1;
(statearr_30627_30690[(2)] = null);

(statearr_30627_30690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (5))){
var state_30611__$1 = state_30611;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30628_30691 = state_30611__$1;
(statearr_30628_30691[(1)] = (8));

} else {
var statearr_30629_30692 = state_30611__$1;
(statearr_30629_30692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (14))){
var inst_30591 = (state_30611[(11)]);
var inst_30589 = (state_30611[(8)]);
var inst_30589__$1 = (state_30611[(2)]);
var inst_30590 = (inst_30589__$1 == null);
var inst_30591__$1 = cljs.core.not.call(null,inst_30590);
var state_30611__$1 = (function (){var statearr_30630 = state_30611;
(statearr_30630[(11)] = inst_30591__$1);

(statearr_30630[(8)] = inst_30589__$1);

return statearr_30630;
})();
if(inst_30591__$1){
var statearr_30631_30693 = state_30611__$1;
(statearr_30631_30693[(1)] = (15));

} else {
var statearr_30632_30694 = state_30611__$1;
(statearr_30632_30694[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (16))){
var inst_30591 = (state_30611[(11)]);
var state_30611__$1 = state_30611;
var statearr_30633_30695 = state_30611__$1;
(statearr_30633_30695[(2)] = inst_30591);

(statearr_30633_30695[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (10))){
var inst_30583 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30634_30696 = state_30611__$1;
(statearr_30634_30696[(2)] = inst_30583);

(statearr_30634_30696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (18))){
var inst_30594 = (state_30611[(2)]);
var state_30611__$1 = state_30611;
var statearr_30635_30697 = state_30611__$1;
(statearr_30635_30697[(2)] = inst_30594);

(statearr_30635_30697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30612 === (8))){
var inst_30580 = cljs.core.async.close_BANG_.call(null,to);
var state_30611__$1 = state_30611;
var statearr_30636_30698 = state_30611__$1;
(statearr_30636_30698[(2)] = inst_30580);

(statearr_30636_30698[(1)] = (10));


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
});})(c__19328__auto__,jobs,results,process,async))
;
return ((function (switch__19307__auto__,c__19328__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_30640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30640[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_30640[(1)] = (1));

return statearr_30640;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_30611){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30641){if((e30641 instanceof Object)){
var ex__19311__auto__ = e30641;
var statearr_30642_30699 = state_30611;
(statearr_30642_30699[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30700 = state_30611;
state_30611 = G__30700;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_30611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_30611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_30643 = f__19329__auto__.call(null);
(statearr_30643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_30643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__,jobs,results,process,async))
);

return c__19328__auto__;
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
var args30701 = [];
var len__17364__auto___30704 = arguments.length;
var i__17365__auto___30705 = (0);
while(true){
if((i__17365__auto___30705 < len__17364__auto___30704)){
args30701.push((arguments[i__17365__auto___30705]));

var G__30706 = (i__17365__auto___30705 + (1));
i__17365__auto___30705 = G__30706;
continue;
} else {
}
break;
}

var G__30703 = args30701.length;
switch (G__30703) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30701.length)].join('')));

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
var args30708 = [];
var len__17364__auto___30711 = arguments.length;
var i__17365__auto___30712 = (0);
while(true){
if((i__17365__auto___30712 < len__17364__auto___30711)){
args30708.push((arguments[i__17365__auto___30712]));

var G__30713 = (i__17365__auto___30712 + (1));
i__17365__auto___30712 = G__30713;
continue;
} else {
}
break;
}

var G__30710 = args30708.length;
switch (G__30710) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30708.length)].join('')));

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
var args30715 = [];
var len__17364__auto___30768 = arguments.length;
var i__17365__auto___30769 = (0);
while(true){
if((i__17365__auto___30769 < len__17364__auto___30768)){
args30715.push((arguments[i__17365__auto___30769]));

var G__30770 = (i__17365__auto___30769 + (1));
i__17365__auto___30769 = G__30770;
continue;
} else {
}
break;
}

var G__30717 = args30715.length;
switch (G__30717) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30715.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19328__auto___30772 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___30772,tc,fc){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___30772,tc,fc){
return (function (state_30743){
var state_val_30744 = (state_30743[(1)]);
if((state_val_30744 === (7))){
var inst_30739 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30745_30773 = state_30743__$1;
(statearr_30745_30773[(2)] = inst_30739);

(statearr_30745_30773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (1))){
var state_30743__$1 = state_30743;
var statearr_30746_30774 = state_30743__$1;
(statearr_30746_30774[(2)] = null);

(statearr_30746_30774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (4))){
var inst_30720 = (state_30743[(7)]);
var inst_30720__$1 = (state_30743[(2)]);
var inst_30721 = (inst_30720__$1 == null);
var state_30743__$1 = (function (){var statearr_30747 = state_30743;
(statearr_30747[(7)] = inst_30720__$1);

return statearr_30747;
})();
if(cljs.core.truth_(inst_30721)){
var statearr_30748_30775 = state_30743__$1;
(statearr_30748_30775[(1)] = (5));

} else {
var statearr_30749_30776 = state_30743__$1;
(statearr_30749_30776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (13))){
var state_30743__$1 = state_30743;
var statearr_30750_30777 = state_30743__$1;
(statearr_30750_30777[(2)] = null);

(statearr_30750_30777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (6))){
var inst_30720 = (state_30743[(7)]);
var inst_30726 = p.call(null,inst_30720);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30726)){
var statearr_30751_30778 = state_30743__$1;
(statearr_30751_30778[(1)] = (9));

} else {
var statearr_30752_30779 = state_30743__$1;
(statearr_30752_30779[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (3))){
var inst_30741 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30743__$1,inst_30741);
} else {
if((state_val_30744 === (12))){
var state_30743__$1 = state_30743;
var statearr_30753_30780 = state_30743__$1;
(statearr_30753_30780[(2)] = null);

(statearr_30753_30780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (2))){
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30743__$1,(4),ch);
} else {
if((state_val_30744 === (11))){
var inst_30720 = (state_30743[(7)]);
var inst_30730 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30743__$1,(8),inst_30730,inst_30720);
} else {
if((state_val_30744 === (9))){
var state_30743__$1 = state_30743;
var statearr_30754_30781 = state_30743__$1;
(statearr_30754_30781[(2)] = tc);

(statearr_30754_30781[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (5))){
var inst_30723 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30724 = cljs.core.async.close_BANG_.call(null,fc);
var state_30743__$1 = (function (){var statearr_30755 = state_30743;
(statearr_30755[(8)] = inst_30723);

return statearr_30755;
})();
var statearr_30756_30782 = state_30743__$1;
(statearr_30756_30782[(2)] = inst_30724);

(statearr_30756_30782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (14))){
var inst_30737 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
var statearr_30757_30783 = state_30743__$1;
(statearr_30757_30783[(2)] = inst_30737);

(statearr_30757_30783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (10))){
var state_30743__$1 = state_30743;
var statearr_30758_30784 = state_30743__$1;
(statearr_30758_30784[(2)] = fc);

(statearr_30758_30784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30744 === (8))){
var inst_30732 = (state_30743[(2)]);
var state_30743__$1 = state_30743;
if(cljs.core.truth_(inst_30732)){
var statearr_30759_30785 = state_30743__$1;
(statearr_30759_30785[(1)] = (12));

} else {
var statearr_30760_30786 = state_30743__$1;
(statearr_30760_30786[(1)] = (13));

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
});})(c__19328__auto___30772,tc,fc))
;
return ((function (switch__19307__auto__,c__19328__auto___30772,tc,fc){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_30764 = [null,null,null,null,null,null,null,null,null];
(statearr_30764[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_30764[(1)] = (1));

return statearr_30764;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_30743){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30765){if((e30765 instanceof Object)){
var ex__19311__auto__ = e30765;
var statearr_30766_30787 = state_30743;
(statearr_30766_30787[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30788 = state_30743;
state_30743 = G__30788;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_30743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_30743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___30772,tc,fc))
})();
var state__19330__auto__ = (function (){var statearr_30767 = f__19329__auto__.call(null);
(statearr_30767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___30772);

return statearr_30767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___30772,tc,fc))
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
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_30835){
var state_val_30836 = (state_30835[(1)]);
if((state_val_30836 === (1))){
var inst_30821 = init;
var state_30835__$1 = (function (){var statearr_30837 = state_30835;
(statearr_30837[(7)] = inst_30821);

return statearr_30837;
})();
var statearr_30838_30853 = state_30835__$1;
(statearr_30838_30853[(2)] = null);

(statearr_30838_30853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (2))){
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30835__$1,(4),ch);
} else {
if((state_val_30836 === (3))){
var inst_30833 = (state_30835[(2)]);
var state_30835__$1 = state_30835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30835__$1,inst_30833);
} else {
if((state_val_30836 === (4))){
var inst_30824 = (state_30835[(8)]);
var inst_30824__$1 = (state_30835[(2)]);
var inst_30825 = (inst_30824__$1 == null);
var state_30835__$1 = (function (){var statearr_30839 = state_30835;
(statearr_30839[(8)] = inst_30824__$1);

return statearr_30839;
})();
if(cljs.core.truth_(inst_30825)){
var statearr_30840_30854 = state_30835__$1;
(statearr_30840_30854[(1)] = (5));

} else {
var statearr_30841_30855 = state_30835__$1;
(statearr_30841_30855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (5))){
var inst_30821 = (state_30835[(7)]);
var state_30835__$1 = state_30835;
var statearr_30842_30856 = state_30835__$1;
(statearr_30842_30856[(2)] = inst_30821);

(statearr_30842_30856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (6))){
var inst_30824 = (state_30835[(8)]);
var inst_30821 = (state_30835[(7)]);
var inst_30828 = f.call(null,inst_30821,inst_30824);
var inst_30821__$1 = inst_30828;
var state_30835__$1 = (function (){var statearr_30843 = state_30835;
(statearr_30843[(7)] = inst_30821__$1);

return statearr_30843;
})();
var statearr_30844_30857 = state_30835__$1;
(statearr_30844_30857[(2)] = null);

(statearr_30844_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30836 === (7))){
var inst_30831 = (state_30835[(2)]);
var state_30835__$1 = state_30835;
var statearr_30845_30858 = state_30835__$1;
(statearr_30845_30858[(2)] = inst_30831);

(statearr_30845_30858[(1)] = (3));


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
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19308__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19308__auto____0 = (function (){
var statearr_30849 = [null,null,null,null,null,null,null,null,null];
(statearr_30849[(0)] = cljs$core$async$reduce_$_state_machine__19308__auto__);

(statearr_30849[(1)] = (1));

return statearr_30849;
});
var cljs$core$async$reduce_$_state_machine__19308__auto____1 = (function (state_30835){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30850){if((e30850 instanceof Object)){
var ex__19311__auto__ = e30850;
var statearr_30851_30859 = state_30835;
(statearr_30851_30859[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30860 = state_30835;
state_30835 = G__30860;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19308__auto__ = function(state_30835){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19308__auto____1.call(this,state_30835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19308__auto____0;
cljs$core$async$reduce_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19308__auto____1;
return cljs$core$async$reduce_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_30852 = f__19329__auto__.call(null);
(statearr_30852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_30852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
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
var args30861 = [];
var len__17364__auto___30913 = arguments.length;
var i__17365__auto___30914 = (0);
while(true){
if((i__17365__auto___30914 < len__17364__auto___30913)){
args30861.push((arguments[i__17365__auto___30914]));

var G__30915 = (i__17365__auto___30914 + (1));
i__17365__auto___30914 = G__30915;
continue;
} else {
}
break;
}

var G__30863 = args30861.length;
switch (G__30863) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30861.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_30888){
var state_val_30889 = (state_30888[(1)]);
if((state_val_30889 === (7))){
var inst_30870 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30890_30917 = state_30888__$1;
(statearr_30890_30917[(2)] = inst_30870);

(statearr_30890_30917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (1))){
var inst_30864 = cljs.core.seq.call(null,coll);
var inst_30865 = inst_30864;
var state_30888__$1 = (function (){var statearr_30891 = state_30888;
(statearr_30891[(7)] = inst_30865);

return statearr_30891;
})();
var statearr_30892_30918 = state_30888__$1;
(statearr_30892_30918[(2)] = null);

(statearr_30892_30918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (4))){
var inst_30865 = (state_30888[(7)]);
var inst_30868 = cljs.core.first.call(null,inst_30865);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30888__$1,(7),ch,inst_30868);
} else {
if((state_val_30889 === (13))){
var inst_30882 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30893_30919 = state_30888__$1;
(statearr_30893_30919[(2)] = inst_30882);

(statearr_30893_30919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (6))){
var inst_30873 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
if(cljs.core.truth_(inst_30873)){
var statearr_30894_30920 = state_30888__$1;
(statearr_30894_30920[(1)] = (8));

} else {
var statearr_30895_30921 = state_30888__$1;
(statearr_30895_30921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (3))){
var inst_30886 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30888__$1,inst_30886);
} else {
if((state_val_30889 === (12))){
var state_30888__$1 = state_30888;
var statearr_30896_30922 = state_30888__$1;
(statearr_30896_30922[(2)] = null);

(statearr_30896_30922[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (2))){
var inst_30865 = (state_30888[(7)]);
var state_30888__$1 = state_30888;
if(cljs.core.truth_(inst_30865)){
var statearr_30897_30923 = state_30888__$1;
(statearr_30897_30923[(1)] = (4));

} else {
var statearr_30898_30924 = state_30888__$1;
(statearr_30898_30924[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (11))){
var inst_30879 = cljs.core.async.close_BANG_.call(null,ch);
var state_30888__$1 = state_30888;
var statearr_30899_30925 = state_30888__$1;
(statearr_30899_30925[(2)] = inst_30879);

(statearr_30899_30925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (9))){
var state_30888__$1 = state_30888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30900_30926 = state_30888__$1;
(statearr_30900_30926[(1)] = (11));

} else {
var statearr_30901_30927 = state_30888__$1;
(statearr_30901_30927[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (5))){
var inst_30865 = (state_30888[(7)]);
var state_30888__$1 = state_30888;
var statearr_30902_30928 = state_30888__$1;
(statearr_30902_30928[(2)] = inst_30865);

(statearr_30902_30928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (10))){
var inst_30884 = (state_30888[(2)]);
var state_30888__$1 = state_30888;
var statearr_30903_30929 = state_30888__$1;
(statearr_30903_30929[(2)] = inst_30884);

(statearr_30903_30929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30889 === (8))){
var inst_30865 = (state_30888[(7)]);
var inst_30875 = cljs.core.next.call(null,inst_30865);
var inst_30865__$1 = inst_30875;
var state_30888__$1 = (function (){var statearr_30904 = state_30888;
(statearr_30904[(7)] = inst_30865__$1);

return statearr_30904;
})();
var statearr_30905_30930 = state_30888__$1;
(statearr_30905_30930[(2)] = null);

(statearr_30905_30930[(1)] = (2));


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
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_30909 = [null,null,null,null,null,null,null,null];
(statearr_30909[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_30909[(1)] = (1));

return statearr_30909;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_30888){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_30888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e30910){if((e30910 instanceof Object)){
var ex__19311__auto__ = e30910;
var statearr_30911_30931 = state_30888;
(statearr_30911_30931[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30932 = state_30888;
state_30888 = G__30932;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_30888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_30888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_30912 = f__19329__auto__.call(null);
(statearr_30912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_30912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
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
var x__16961__auto__ = (((_ == null))?null:_);
var m__16962__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,_);
} else {
var m__16962__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,_);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31154 = (function (mult,ch,cs,meta31155){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31155 = meta31155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31156,meta31155__$1){
var self__ = this;
var _31156__$1 = this;
return (new cljs.core.async.t_cljs$core$async31154(self__.mult,self__.ch,self__.cs,meta31155__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31156){
var self__ = this;
var _31156__$1 = this;
return self__.meta31155;
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31155","meta31155",582160174,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31154";

cljs.core.async.t_cljs$core$async31154.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async31154");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31154 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31154(mult__$1,ch__$1,cs__$1,meta31155){
return (new cljs.core.async.t_cljs$core$async31154(mult__$1,ch__$1,cs__$1,meta31155));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31154(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19328__auto___31375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___31375,cs,m,dchan,dctr,done){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___31375,cs,m,dchan,dctr,done){
return (function (state_31287){
var state_val_31288 = (state_31287[(1)]);
if((state_val_31288 === (7))){
var inst_31283 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31289_31376 = state_31287__$1;
(statearr_31289_31376[(2)] = inst_31283);

(statearr_31289_31376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (20))){
var inst_31188 = (state_31287[(7)]);
var inst_31198 = cljs.core.first.call(null,inst_31188);
var inst_31199 = cljs.core.nth.call(null,inst_31198,(0),null);
var inst_31200 = cljs.core.nth.call(null,inst_31198,(1),null);
var state_31287__$1 = (function (){var statearr_31290 = state_31287;
(statearr_31290[(8)] = inst_31199);

return statearr_31290;
})();
if(cljs.core.truth_(inst_31200)){
var statearr_31291_31377 = state_31287__$1;
(statearr_31291_31377[(1)] = (22));

} else {
var statearr_31292_31378 = state_31287__$1;
(statearr_31292_31378[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (27))){
var inst_31228 = (state_31287[(9)]);
var inst_31230 = (state_31287[(10)]);
var inst_31159 = (state_31287[(11)]);
var inst_31235 = (state_31287[(12)]);
var inst_31235__$1 = cljs.core._nth.call(null,inst_31228,inst_31230);
var inst_31236 = cljs.core.async.put_BANG_.call(null,inst_31235__$1,inst_31159,done);
var state_31287__$1 = (function (){var statearr_31293 = state_31287;
(statearr_31293[(12)] = inst_31235__$1);

return statearr_31293;
})();
if(cljs.core.truth_(inst_31236)){
var statearr_31294_31379 = state_31287__$1;
(statearr_31294_31379[(1)] = (30));

} else {
var statearr_31295_31380 = state_31287__$1;
(statearr_31295_31380[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (1))){
var state_31287__$1 = state_31287;
var statearr_31296_31381 = state_31287__$1;
(statearr_31296_31381[(2)] = null);

(statearr_31296_31381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (24))){
var inst_31188 = (state_31287[(7)]);
var inst_31205 = (state_31287[(2)]);
var inst_31206 = cljs.core.next.call(null,inst_31188);
var inst_31168 = inst_31206;
var inst_31169 = null;
var inst_31170 = (0);
var inst_31171 = (0);
var state_31287__$1 = (function (){var statearr_31297 = state_31287;
(statearr_31297[(13)] = inst_31169);

(statearr_31297[(14)] = inst_31171);

(statearr_31297[(15)] = inst_31168);

(statearr_31297[(16)] = inst_31170);

(statearr_31297[(17)] = inst_31205);

return statearr_31297;
})();
var statearr_31298_31382 = state_31287__$1;
(statearr_31298_31382[(2)] = null);

(statearr_31298_31382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (39))){
var state_31287__$1 = state_31287;
var statearr_31302_31383 = state_31287__$1;
(statearr_31302_31383[(2)] = null);

(statearr_31302_31383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (4))){
var inst_31159 = (state_31287[(11)]);
var inst_31159__$1 = (state_31287[(2)]);
var inst_31160 = (inst_31159__$1 == null);
var state_31287__$1 = (function (){var statearr_31303 = state_31287;
(statearr_31303[(11)] = inst_31159__$1);

return statearr_31303;
})();
if(cljs.core.truth_(inst_31160)){
var statearr_31304_31384 = state_31287__$1;
(statearr_31304_31384[(1)] = (5));

} else {
var statearr_31305_31385 = state_31287__$1;
(statearr_31305_31385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (15))){
var inst_31169 = (state_31287[(13)]);
var inst_31171 = (state_31287[(14)]);
var inst_31168 = (state_31287[(15)]);
var inst_31170 = (state_31287[(16)]);
var inst_31184 = (state_31287[(2)]);
var inst_31185 = (inst_31171 + (1));
var tmp31299 = inst_31169;
var tmp31300 = inst_31168;
var tmp31301 = inst_31170;
var inst_31168__$1 = tmp31300;
var inst_31169__$1 = tmp31299;
var inst_31170__$1 = tmp31301;
var inst_31171__$1 = inst_31185;
var state_31287__$1 = (function (){var statearr_31306 = state_31287;
(statearr_31306[(13)] = inst_31169__$1);

(statearr_31306[(14)] = inst_31171__$1);

(statearr_31306[(18)] = inst_31184);

(statearr_31306[(15)] = inst_31168__$1);

(statearr_31306[(16)] = inst_31170__$1);

return statearr_31306;
})();
var statearr_31307_31386 = state_31287__$1;
(statearr_31307_31386[(2)] = null);

(statearr_31307_31386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (21))){
var inst_31209 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31311_31387 = state_31287__$1;
(statearr_31311_31387[(2)] = inst_31209);

(statearr_31311_31387[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (31))){
var inst_31235 = (state_31287[(12)]);
var inst_31239 = done.call(null,null);
var inst_31240 = cljs.core.async.untap_STAR_.call(null,m,inst_31235);
var state_31287__$1 = (function (){var statearr_31312 = state_31287;
(statearr_31312[(19)] = inst_31239);

return statearr_31312;
})();
var statearr_31313_31388 = state_31287__$1;
(statearr_31313_31388[(2)] = inst_31240);

(statearr_31313_31388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (32))){
var inst_31228 = (state_31287[(9)]);
var inst_31230 = (state_31287[(10)]);
var inst_31229 = (state_31287[(20)]);
var inst_31227 = (state_31287[(21)]);
var inst_31242 = (state_31287[(2)]);
var inst_31243 = (inst_31230 + (1));
var tmp31308 = inst_31228;
var tmp31309 = inst_31229;
var tmp31310 = inst_31227;
var inst_31227__$1 = tmp31310;
var inst_31228__$1 = tmp31308;
var inst_31229__$1 = tmp31309;
var inst_31230__$1 = inst_31243;
var state_31287__$1 = (function (){var statearr_31314 = state_31287;
(statearr_31314[(9)] = inst_31228__$1);

(statearr_31314[(10)] = inst_31230__$1);

(statearr_31314[(20)] = inst_31229__$1);

(statearr_31314[(22)] = inst_31242);

(statearr_31314[(21)] = inst_31227__$1);

return statearr_31314;
})();
var statearr_31315_31389 = state_31287__$1;
(statearr_31315_31389[(2)] = null);

(statearr_31315_31389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (40))){
var inst_31255 = (state_31287[(23)]);
var inst_31259 = done.call(null,null);
var inst_31260 = cljs.core.async.untap_STAR_.call(null,m,inst_31255);
var state_31287__$1 = (function (){var statearr_31316 = state_31287;
(statearr_31316[(24)] = inst_31259);

return statearr_31316;
})();
var statearr_31317_31390 = state_31287__$1;
(statearr_31317_31390[(2)] = inst_31260);

(statearr_31317_31390[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (33))){
var inst_31246 = (state_31287[(25)]);
var inst_31248 = cljs.core.chunked_seq_QMARK_.call(null,inst_31246);
var state_31287__$1 = state_31287;
if(inst_31248){
var statearr_31318_31391 = state_31287__$1;
(statearr_31318_31391[(1)] = (36));

} else {
var statearr_31319_31392 = state_31287__$1;
(statearr_31319_31392[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (13))){
var inst_31178 = (state_31287[(26)]);
var inst_31181 = cljs.core.async.close_BANG_.call(null,inst_31178);
var state_31287__$1 = state_31287;
var statearr_31320_31393 = state_31287__$1;
(statearr_31320_31393[(2)] = inst_31181);

(statearr_31320_31393[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (22))){
var inst_31199 = (state_31287[(8)]);
var inst_31202 = cljs.core.async.close_BANG_.call(null,inst_31199);
var state_31287__$1 = state_31287;
var statearr_31321_31394 = state_31287__$1;
(statearr_31321_31394[(2)] = inst_31202);

(statearr_31321_31394[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (36))){
var inst_31246 = (state_31287[(25)]);
var inst_31250 = cljs.core.chunk_first.call(null,inst_31246);
var inst_31251 = cljs.core.chunk_rest.call(null,inst_31246);
var inst_31252 = cljs.core.count.call(null,inst_31250);
var inst_31227 = inst_31251;
var inst_31228 = inst_31250;
var inst_31229 = inst_31252;
var inst_31230 = (0);
var state_31287__$1 = (function (){var statearr_31322 = state_31287;
(statearr_31322[(9)] = inst_31228);

(statearr_31322[(10)] = inst_31230);

(statearr_31322[(20)] = inst_31229);

(statearr_31322[(21)] = inst_31227);

return statearr_31322;
})();
var statearr_31323_31395 = state_31287__$1;
(statearr_31323_31395[(2)] = null);

(statearr_31323_31395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (41))){
var inst_31246 = (state_31287[(25)]);
var inst_31262 = (state_31287[(2)]);
var inst_31263 = cljs.core.next.call(null,inst_31246);
var inst_31227 = inst_31263;
var inst_31228 = null;
var inst_31229 = (0);
var inst_31230 = (0);
var state_31287__$1 = (function (){var statearr_31324 = state_31287;
(statearr_31324[(9)] = inst_31228);

(statearr_31324[(10)] = inst_31230);

(statearr_31324[(27)] = inst_31262);

(statearr_31324[(20)] = inst_31229);

(statearr_31324[(21)] = inst_31227);

return statearr_31324;
})();
var statearr_31325_31396 = state_31287__$1;
(statearr_31325_31396[(2)] = null);

(statearr_31325_31396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (43))){
var state_31287__$1 = state_31287;
var statearr_31326_31397 = state_31287__$1;
(statearr_31326_31397[(2)] = null);

(statearr_31326_31397[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (29))){
var inst_31271 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31327_31398 = state_31287__$1;
(statearr_31327_31398[(2)] = inst_31271);

(statearr_31327_31398[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (44))){
var inst_31280 = (state_31287[(2)]);
var state_31287__$1 = (function (){var statearr_31328 = state_31287;
(statearr_31328[(28)] = inst_31280);

return statearr_31328;
})();
var statearr_31329_31399 = state_31287__$1;
(statearr_31329_31399[(2)] = null);

(statearr_31329_31399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (6))){
var inst_31219 = (state_31287[(29)]);
var inst_31218 = cljs.core.deref.call(null,cs);
var inst_31219__$1 = cljs.core.keys.call(null,inst_31218);
var inst_31220 = cljs.core.count.call(null,inst_31219__$1);
var inst_31221 = cljs.core.reset_BANG_.call(null,dctr,inst_31220);
var inst_31226 = cljs.core.seq.call(null,inst_31219__$1);
var inst_31227 = inst_31226;
var inst_31228 = null;
var inst_31229 = (0);
var inst_31230 = (0);
var state_31287__$1 = (function (){var statearr_31330 = state_31287;
(statearr_31330[(9)] = inst_31228);

(statearr_31330[(10)] = inst_31230);

(statearr_31330[(29)] = inst_31219__$1);

(statearr_31330[(30)] = inst_31221);

(statearr_31330[(20)] = inst_31229);

(statearr_31330[(21)] = inst_31227);

return statearr_31330;
})();
var statearr_31331_31400 = state_31287__$1;
(statearr_31331_31400[(2)] = null);

(statearr_31331_31400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (28))){
var inst_31246 = (state_31287[(25)]);
var inst_31227 = (state_31287[(21)]);
var inst_31246__$1 = cljs.core.seq.call(null,inst_31227);
var state_31287__$1 = (function (){var statearr_31332 = state_31287;
(statearr_31332[(25)] = inst_31246__$1);

return statearr_31332;
})();
if(inst_31246__$1){
var statearr_31333_31401 = state_31287__$1;
(statearr_31333_31401[(1)] = (33));

} else {
var statearr_31334_31402 = state_31287__$1;
(statearr_31334_31402[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (25))){
var inst_31230 = (state_31287[(10)]);
var inst_31229 = (state_31287[(20)]);
var inst_31232 = (inst_31230 < inst_31229);
var inst_31233 = inst_31232;
var state_31287__$1 = state_31287;
if(cljs.core.truth_(inst_31233)){
var statearr_31335_31403 = state_31287__$1;
(statearr_31335_31403[(1)] = (27));

} else {
var statearr_31336_31404 = state_31287__$1;
(statearr_31336_31404[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (34))){
var state_31287__$1 = state_31287;
var statearr_31337_31405 = state_31287__$1;
(statearr_31337_31405[(2)] = null);

(statearr_31337_31405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (17))){
var state_31287__$1 = state_31287;
var statearr_31338_31406 = state_31287__$1;
(statearr_31338_31406[(2)] = null);

(statearr_31338_31406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (3))){
var inst_31285 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31287__$1,inst_31285);
} else {
if((state_val_31288 === (12))){
var inst_31214 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31339_31407 = state_31287__$1;
(statearr_31339_31407[(2)] = inst_31214);

(statearr_31339_31407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (2))){
var state_31287__$1 = state_31287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31287__$1,(4),ch);
} else {
if((state_val_31288 === (23))){
var state_31287__$1 = state_31287;
var statearr_31340_31408 = state_31287__$1;
(statearr_31340_31408[(2)] = null);

(statearr_31340_31408[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (35))){
var inst_31269 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31341_31409 = state_31287__$1;
(statearr_31341_31409[(2)] = inst_31269);

(statearr_31341_31409[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (19))){
var inst_31188 = (state_31287[(7)]);
var inst_31192 = cljs.core.chunk_first.call(null,inst_31188);
var inst_31193 = cljs.core.chunk_rest.call(null,inst_31188);
var inst_31194 = cljs.core.count.call(null,inst_31192);
var inst_31168 = inst_31193;
var inst_31169 = inst_31192;
var inst_31170 = inst_31194;
var inst_31171 = (0);
var state_31287__$1 = (function (){var statearr_31342 = state_31287;
(statearr_31342[(13)] = inst_31169);

(statearr_31342[(14)] = inst_31171);

(statearr_31342[(15)] = inst_31168);

(statearr_31342[(16)] = inst_31170);

return statearr_31342;
})();
var statearr_31343_31410 = state_31287__$1;
(statearr_31343_31410[(2)] = null);

(statearr_31343_31410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (11))){
var inst_31188 = (state_31287[(7)]);
var inst_31168 = (state_31287[(15)]);
var inst_31188__$1 = cljs.core.seq.call(null,inst_31168);
var state_31287__$1 = (function (){var statearr_31344 = state_31287;
(statearr_31344[(7)] = inst_31188__$1);

return statearr_31344;
})();
if(inst_31188__$1){
var statearr_31345_31411 = state_31287__$1;
(statearr_31345_31411[(1)] = (16));

} else {
var statearr_31346_31412 = state_31287__$1;
(statearr_31346_31412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (9))){
var inst_31216 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31347_31413 = state_31287__$1;
(statearr_31347_31413[(2)] = inst_31216);

(statearr_31347_31413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (5))){
var inst_31166 = cljs.core.deref.call(null,cs);
var inst_31167 = cljs.core.seq.call(null,inst_31166);
var inst_31168 = inst_31167;
var inst_31169 = null;
var inst_31170 = (0);
var inst_31171 = (0);
var state_31287__$1 = (function (){var statearr_31348 = state_31287;
(statearr_31348[(13)] = inst_31169);

(statearr_31348[(14)] = inst_31171);

(statearr_31348[(15)] = inst_31168);

(statearr_31348[(16)] = inst_31170);

return statearr_31348;
})();
var statearr_31349_31414 = state_31287__$1;
(statearr_31349_31414[(2)] = null);

(statearr_31349_31414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (14))){
var state_31287__$1 = state_31287;
var statearr_31350_31415 = state_31287__$1;
(statearr_31350_31415[(2)] = null);

(statearr_31350_31415[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (45))){
var inst_31277 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31351_31416 = state_31287__$1;
(statearr_31351_31416[(2)] = inst_31277);

(statearr_31351_31416[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (26))){
var inst_31219 = (state_31287[(29)]);
var inst_31273 = (state_31287[(2)]);
var inst_31274 = cljs.core.seq.call(null,inst_31219);
var state_31287__$1 = (function (){var statearr_31352 = state_31287;
(statearr_31352[(31)] = inst_31273);

return statearr_31352;
})();
if(inst_31274){
var statearr_31353_31417 = state_31287__$1;
(statearr_31353_31417[(1)] = (42));

} else {
var statearr_31354_31418 = state_31287__$1;
(statearr_31354_31418[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (16))){
var inst_31188 = (state_31287[(7)]);
var inst_31190 = cljs.core.chunked_seq_QMARK_.call(null,inst_31188);
var state_31287__$1 = state_31287;
if(inst_31190){
var statearr_31355_31419 = state_31287__$1;
(statearr_31355_31419[(1)] = (19));

} else {
var statearr_31356_31420 = state_31287__$1;
(statearr_31356_31420[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (38))){
var inst_31266 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31357_31421 = state_31287__$1;
(statearr_31357_31421[(2)] = inst_31266);

(statearr_31357_31421[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (30))){
var state_31287__$1 = state_31287;
var statearr_31358_31422 = state_31287__$1;
(statearr_31358_31422[(2)] = null);

(statearr_31358_31422[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (10))){
var inst_31169 = (state_31287[(13)]);
var inst_31171 = (state_31287[(14)]);
var inst_31177 = cljs.core._nth.call(null,inst_31169,inst_31171);
var inst_31178 = cljs.core.nth.call(null,inst_31177,(0),null);
var inst_31179 = cljs.core.nth.call(null,inst_31177,(1),null);
var state_31287__$1 = (function (){var statearr_31359 = state_31287;
(statearr_31359[(26)] = inst_31178);

return statearr_31359;
})();
if(cljs.core.truth_(inst_31179)){
var statearr_31360_31423 = state_31287__$1;
(statearr_31360_31423[(1)] = (13));

} else {
var statearr_31361_31424 = state_31287__$1;
(statearr_31361_31424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (18))){
var inst_31212 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31362_31425 = state_31287__$1;
(statearr_31362_31425[(2)] = inst_31212);

(statearr_31362_31425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (42))){
var state_31287__$1 = state_31287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31287__$1,(45),dchan);
} else {
if((state_val_31288 === (37))){
var inst_31246 = (state_31287[(25)]);
var inst_31255 = (state_31287[(23)]);
var inst_31159 = (state_31287[(11)]);
var inst_31255__$1 = cljs.core.first.call(null,inst_31246);
var inst_31256 = cljs.core.async.put_BANG_.call(null,inst_31255__$1,inst_31159,done);
var state_31287__$1 = (function (){var statearr_31363 = state_31287;
(statearr_31363[(23)] = inst_31255__$1);

return statearr_31363;
})();
if(cljs.core.truth_(inst_31256)){
var statearr_31364_31426 = state_31287__$1;
(statearr_31364_31426[(1)] = (39));

} else {
var statearr_31365_31427 = state_31287__$1;
(statearr_31365_31427[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (8))){
var inst_31171 = (state_31287[(14)]);
var inst_31170 = (state_31287[(16)]);
var inst_31173 = (inst_31171 < inst_31170);
var inst_31174 = inst_31173;
var state_31287__$1 = state_31287;
if(cljs.core.truth_(inst_31174)){
var statearr_31366_31428 = state_31287__$1;
(statearr_31366_31428[(1)] = (10));

} else {
var statearr_31367_31429 = state_31287__$1;
(statearr_31367_31429[(1)] = (11));

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
});})(c__19328__auto___31375,cs,m,dchan,dctr,done))
;
return ((function (switch__19307__auto__,c__19328__auto___31375,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19308__auto__ = null;
var cljs$core$async$mult_$_state_machine__19308__auto____0 = (function (){
var statearr_31371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31371[(0)] = cljs$core$async$mult_$_state_machine__19308__auto__);

(statearr_31371[(1)] = (1));

return statearr_31371;
});
var cljs$core$async$mult_$_state_machine__19308__auto____1 = (function (state_31287){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_31287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e31372){if((e31372 instanceof Object)){
var ex__19311__auto__ = e31372;
var statearr_31373_31430 = state_31287;
(statearr_31373_31430[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31431 = state_31287;
state_31287 = G__31431;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19308__auto__ = function(state_31287){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19308__auto____1.call(this,state_31287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19308__auto____0;
cljs$core$async$mult_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19308__auto____1;
return cljs$core$async$mult_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___31375,cs,m,dchan,dctr,done))
})();
var state__19330__auto__ = (function (){var statearr_31374 = f__19329__auto__.call(null);
(statearr_31374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___31375);

return statearr_31374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___31375,cs,m,dchan,dctr,done))
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
var args31432 = [];
var len__17364__auto___31435 = arguments.length;
var i__17365__auto___31436 = (0);
while(true){
if((i__17365__auto___31436 < len__17364__auto___31435)){
args31432.push((arguments[i__17365__auto___31436]));

var G__31437 = (i__17365__auto___31436 + (1));
i__17365__auto___31436 = G__31437;
continue;
} else {
}
break;
}

var G__31434 = args31432.length;
switch (G__31434) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31432.length)].join('')));

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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,ch);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m);
} else {
var m__16962__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,state_map);
} else {
var m__16962__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,state_map);
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
var x__16961__auto__ = (((m == null))?null:m);
var m__16962__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,m,mode);
} else {
var m__16962__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17371__auto__ = [];
var len__17364__auto___31449 = arguments.length;
var i__17365__auto___31450 = (0);
while(true){
if((i__17365__auto___31450 < len__17364__auto___31449)){
args__17371__auto__.push((arguments[i__17365__auto___31450]));

var G__31451 = (i__17365__auto___31450 + (1));
i__17365__auto___31450 = G__31451;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31443){
var map__31444 = p__31443;
var map__31444__$1 = ((((!((map__31444 == null)))?((((map__31444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31444):map__31444);
var opts = map__31444__$1;
var statearr_31446_31452 = state;
(statearr_31446_31452[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__31444,map__31444__$1,opts){
return (function (val){
var statearr_31447_31453 = state;
(statearr_31447_31453[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31444,map__31444__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_31448_31454 = state;
(statearr_31448_31454[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31439){
var G__31440 = cljs.core.first.call(null,seq31439);
var seq31439__$1 = cljs.core.next.call(null,seq31439);
var G__31441 = cljs.core.first.call(null,seq31439__$1);
var seq31439__$2 = cljs.core.next.call(null,seq31439__$1);
var G__31442 = cljs.core.first.call(null,seq31439__$2);
var seq31439__$3 = cljs.core.next.call(null,seq31439__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31440,G__31441,G__31442,seq31439__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31618 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31618 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31619){
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
this.meta31619 = meta31619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31620,meta31619__$1){
var self__ = this;
var _31620__$1 = this;
return (new cljs.core.async.t_cljs$core$async31618(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31619__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31620){
var self__ = this;
var _31620__$1 = this;
return self__.meta31619;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31618.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31619","meta31619",-1774813902,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31618.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31618";

cljs.core.async.t_cljs$core$async31618.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async31618");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31618 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31618(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31619){
return (new cljs.core.async.t_cljs$core$async31618(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31619));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31618(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19328__auto___31781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (7))){
var inst_31636 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31720_31782 = state_31718__$1;
(statearr_31720_31782[(2)] = inst_31636);

(statearr_31720_31782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (20))){
var inst_31648 = (state_31718[(7)]);
var state_31718__$1 = state_31718;
var statearr_31721_31783 = state_31718__$1;
(statearr_31721_31783[(2)] = inst_31648);

(statearr_31721_31783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (27))){
var state_31718__$1 = state_31718;
var statearr_31722_31784 = state_31718__$1;
(statearr_31722_31784[(2)] = null);

(statearr_31722_31784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (1))){
var inst_31624 = (state_31718[(8)]);
var inst_31624__$1 = calc_state.call(null);
var inst_31626 = (inst_31624__$1 == null);
var inst_31627 = cljs.core.not.call(null,inst_31626);
var state_31718__$1 = (function (){var statearr_31723 = state_31718;
(statearr_31723[(8)] = inst_31624__$1);

return statearr_31723;
})();
if(inst_31627){
var statearr_31724_31785 = state_31718__$1;
(statearr_31724_31785[(1)] = (2));

} else {
var statearr_31725_31786 = state_31718__$1;
(statearr_31725_31786[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (24))){
var inst_31678 = (state_31718[(9)]);
var inst_31671 = (state_31718[(10)]);
var inst_31692 = (state_31718[(11)]);
var inst_31692__$1 = inst_31671.call(null,inst_31678);
var state_31718__$1 = (function (){var statearr_31726 = state_31718;
(statearr_31726[(11)] = inst_31692__$1);

return statearr_31726;
})();
if(cljs.core.truth_(inst_31692__$1)){
var statearr_31727_31787 = state_31718__$1;
(statearr_31727_31787[(1)] = (29));

} else {
var statearr_31728_31788 = state_31718__$1;
(statearr_31728_31788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (4))){
var inst_31639 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31639)){
var statearr_31729_31789 = state_31718__$1;
(statearr_31729_31789[(1)] = (8));

} else {
var statearr_31730_31790 = state_31718__$1;
(statearr_31730_31790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (15))){
var inst_31665 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31665)){
var statearr_31731_31791 = state_31718__$1;
(statearr_31731_31791[(1)] = (19));

} else {
var statearr_31732_31792 = state_31718__$1;
(statearr_31732_31792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (21))){
var inst_31670 = (state_31718[(12)]);
var inst_31670__$1 = (state_31718[(2)]);
var inst_31671 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31672 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31673 = cljs.core.get.call(null,inst_31670__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31718__$1 = (function (){var statearr_31733 = state_31718;
(statearr_31733[(13)] = inst_31672);

(statearr_31733[(12)] = inst_31670__$1);

(statearr_31733[(10)] = inst_31671);

return statearr_31733;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31718__$1,(22),inst_31673);
} else {
if((state_val_31719 === (31))){
var inst_31700 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31700)){
var statearr_31734_31793 = state_31718__$1;
(statearr_31734_31793[(1)] = (32));

} else {
var statearr_31735_31794 = state_31718__$1;
(statearr_31735_31794[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (32))){
var inst_31677 = (state_31718[(14)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31718__$1,(35),out,inst_31677);
} else {
if((state_val_31719 === (33))){
var inst_31670 = (state_31718[(12)]);
var inst_31648 = inst_31670;
var state_31718__$1 = (function (){var statearr_31736 = state_31718;
(statearr_31736[(7)] = inst_31648);

return statearr_31736;
})();
var statearr_31737_31795 = state_31718__$1;
(statearr_31737_31795[(2)] = null);

(statearr_31737_31795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (13))){
var inst_31648 = (state_31718[(7)]);
var inst_31655 = inst_31648.cljs$lang$protocol_mask$partition0$;
var inst_31656 = (inst_31655 & (64));
var inst_31657 = inst_31648.cljs$core$ISeq$;
var inst_31658 = (inst_31656) || (inst_31657);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31658)){
var statearr_31738_31796 = state_31718__$1;
(statearr_31738_31796[(1)] = (16));

} else {
var statearr_31739_31797 = state_31718__$1;
(statearr_31739_31797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (22))){
var inst_31678 = (state_31718[(9)]);
var inst_31677 = (state_31718[(14)]);
var inst_31676 = (state_31718[(2)]);
var inst_31677__$1 = cljs.core.nth.call(null,inst_31676,(0),null);
var inst_31678__$1 = cljs.core.nth.call(null,inst_31676,(1),null);
var inst_31679 = (inst_31677__$1 == null);
var inst_31680 = cljs.core._EQ_.call(null,inst_31678__$1,change);
var inst_31681 = (inst_31679) || (inst_31680);
var state_31718__$1 = (function (){var statearr_31740 = state_31718;
(statearr_31740[(9)] = inst_31678__$1);

(statearr_31740[(14)] = inst_31677__$1);

return statearr_31740;
})();
if(cljs.core.truth_(inst_31681)){
var statearr_31741_31798 = state_31718__$1;
(statearr_31741_31798[(1)] = (23));

} else {
var statearr_31742_31799 = state_31718__$1;
(statearr_31742_31799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (36))){
var inst_31670 = (state_31718[(12)]);
var inst_31648 = inst_31670;
var state_31718__$1 = (function (){var statearr_31743 = state_31718;
(statearr_31743[(7)] = inst_31648);

return statearr_31743;
})();
var statearr_31744_31800 = state_31718__$1;
(statearr_31744_31800[(2)] = null);

(statearr_31744_31800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (29))){
var inst_31692 = (state_31718[(11)]);
var state_31718__$1 = state_31718;
var statearr_31745_31801 = state_31718__$1;
(statearr_31745_31801[(2)] = inst_31692);

(statearr_31745_31801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (6))){
var state_31718__$1 = state_31718;
var statearr_31746_31802 = state_31718__$1;
(statearr_31746_31802[(2)] = false);

(statearr_31746_31802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (28))){
var inst_31688 = (state_31718[(2)]);
var inst_31689 = calc_state.call(null);
var inst_31648 = inst_31689;
var state_31718__$1 = (function (){var statearr_31747 = state_31718;
(statearr_31747[(7)] = inst_31648);

(statearr_31747[(15)] = inst_31688);

return statearr_31747;
})();
var statearr_31748_31803 = state_31718__$1;
(statearr_31748_31803[(2)] = null);

(statearr_31748_31803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (25))){
var inst_31714 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31749_31804 = state_31718__$1;
(statearr_31749_31804[(2)] = inst_31714);

(statearr_31749_31804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (34))){
var inst_31712 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31750_31805 = state_31718__$1;
(statearr_31750_31805[(2)] = inst_31712);

(statearr_31750_31805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (17))){
var state_31718__$1 = state_31718;
var statearr_31751_31806 = state_31718__$1;
(statearr_31751_31806[(2)] = false);

(statearr_31751_31806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (3))){
var state_31718__$1 = state_31718;
var statearr_31752_31807 = state_31718__$1;
(statearr_31752_31807[(2)] = false);

(statearr_31752_31807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (12))){
var inst_31716 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31718__$1,inst_31716);
} else {
if((state_val_31719 === (2))){
var inst_31624 = (state_31718[(8)]);
var inst_31629 = inst_31624.cljs$lang$protocol_mask$partition0$;
var inst_31630 = (inst_31629 & (64));
var inst_31631 = inst_31624.cljs$core$ISeq$;
var inst_31632 = (inst_31630) || (inst_31631);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31632)){
var statearr_31753_31808 = state_31718__$1;
(statearr_31753_31808[(1)] = (5));

} else {
var statearr_31754_31809 = state_31718__$1;
(statearr_31754_31809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (23))){
var inst_31677 = (state_31718[(14)]);
var inst_31683 = (inst_31677 == null);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31683)){
var statearr_31755_31810 = state_31718__$1;
(statearr_31755_31810[(1)] = (26));

} else {
var statearr_31756_31811 = state_31718__$1;
(statearr_31756_31811[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (35))){
var inst_31703 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31703)){
var statearr_31757_31812 = state_31718__$1;
(statearr_31757_31812[(1)] = (36));

} else {
var statearr_31758_31813 = state_31718__$1;
(statearr_31758_31813[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (19))){
var inst_31648 = (state_31718[(7)]);
var inst_31667 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31648);
var state_31718__$1 = state_31718;
var statearr_31759_31814 = state_31718__$1;
(statearr_31759_31814[(2)] = inst_31667);

(statearr_31759_31814[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (11))){
var inst_31648 = (state_31718[(7)]);
var inst_31652 = (inst_31648 == null);
var inst_31653 = cljs.core.not.call(null,inst_31652);
var state_31718__$1 = state_31718;
if(inst_31653){
var statearr_31760_31815 = state_31718__$1;
(statearr_31760_31815[(1)] = (13));

} else {
var statearr_31761_31816 = state_31718__$1;
(statearr_31761_31816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (9))){
var inst_31624 = (state_31718[(8)]);
var state_31718__$1 = state_31718;
var statearr_31762_31817 = state_31718__$1;
(statearr_31762_31817[(2)] = inst_31624);

(statearr_31762_31817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (5))){
var state_31718__$1 = state_31718;
var statearr_31763_31818 = state_31718__$1;
(statearr_31763_31818[(2)] = true);

(statearr_31763_31818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (14))){
var state_31718__$1 = state_31718;
var statearr_31764_31819 = state_31718__$1;
(statearr_31764_31819[(2)] = false);

(statearr_31764_31819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (26))){
var inst_31678 = (state_31718[(9)]);
var inst_31685 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31678);
var state_31718__$1 = state_31718;
var statearr_31765_31820 = state_31718__$1;
(statearr_31765_31820[(2)] = inst_31685);

(statearr_31765_31820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (16))){
var state_31718__$1 = state_31718;
var statearr_31766_31821 = state_31718__$1;
(statearr_31766_31821[(2)] = true);

(statearr_31766_31821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (38))){
var inst_31708 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31767_31822 = state_31718__$1;
(statearr_31767_31822[(2)] = inst_31708);

(statearr_31767_31822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (30))){
var inst_31672 = (state_31718[(13)]);
var inst_31678 = (state_31718[(9)]);
var inst_31671 = (state_31718[(10)]);
var inst_31695 = cljs.core.empty_QMARK_.call(null,inst_31671);
var inst_31696 = inst_31672.call(null,inst_31678);
var inst_31697 = cljs.core.not.call(null,inst_31696);
var inst_31698 = (inst_31695) && (inst_31697);
var state_31718__$1 = state_31718;
var statearr_31768_31823 = state_31718__$1;
(statearr_31768_31823[(2)] = inst_31698);

(statearr_31768_31823[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (10))){
var inst_31624 = (state_31718[(8)]);
var inst_31644 = (state_31718[(2)]);
var inst_31645 = cljs.core.get.call(null,inst_31644,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31646 = cljs.core.get.call(null,inst_31644,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31647 = cljs.core.get.call(null,inst_31644,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31648 = inst_31624;
var state_31718__$1 = (function (){var statearr_31769 = state_31718;
(statearr_31769[(16)] = inst_31645);

(statearr_31769[(17)] = inst_31647);

(statearr_31769[(7)] = inst_31648);

(statearr_31769[(18)] = inst_31646);

return statearr_31769;
})();
var statearr_31770_31824 = state_31718__$1;
(statearr_31770_31824[(2)] = null);

(statearr_31770_31824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (18))){
var inst_31662 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31771_31825 = state_31718__$1;
(statearr_31771_31825[(2)] = inst_31662);

(statearr_31771_31825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (37))){
var state_31718__$1 = state_31718;
var statearr_31772_31826 = state_31718__$1;
(statearr_31772_31826[(2)] = null);

(statearr_31772_31826[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (8))){
var inst_31624 = (state_31718[(8)]);
var inst_31641 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31624);
var state_31718__$1 = state_31718;
var statearr_31773_31827 = state_31718__$1;
(statearr_31773_31827[(2)] = inst_31641);

(statearr_31773_31827[(1)] = (10));


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
});})(c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19307__auto__,c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19308__auto__ = null;
var cljs$core$async$mix_$_state_machine__19308__auto____0 = (function (){
var statearr_31777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31777[(0)] = cljs$core$async$mix_$_state_machine__19308__auto__);

(statearr_31777[(1)] = (1));

return statearr_31777;
});
var cljs$core$async$mix_$_state_machine__19308__auto____1 = (function (state_31718){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_31718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e31778){if((e31778 instanceof Object)){
var ex__19311__auto__ = e31778;
var statearr_31779_31828 = state_31718;
(statearr_31779_31828[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31829 = state_31718;
state_31718 = G__31829;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19308__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19308__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19308__auto____0;
cljs$core$async$mix_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19308__auto____1;
return cljs$core$async$mix_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19330__auto__ = (function (){var statearr_31780 = f__19329__auto__.call(null);
(statearr_31780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___31781);

return statearr_31780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___31781,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16962__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v,ch);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31830 = [];
var len__17364__auto___31833 = arguments.length;
var i__17365__auto___31834 = (0);
while(true){
if((i__17365__auto___31834 < len__17364__auto___31833)){
args31830.push((arguments[i__17365__auto___31834]));

var G__31835 = (i__17365__auto___31834 + (1));
i__17365__auto___31834 = G__31835;
continue;
} else {
}
break;
}

var G__31832 = args31830.length;
switch (G__31832) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31830.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p);
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
var x__16961__auto__ = (((p == null))?null:p);
var m__16962__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16961__auto__)]);
if(!((m__16962__auto__ == null))){
return m__16962__auto__.call(null,p,v);
} else {
var m__16962__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16962__auto____$1 == null))){
return m__16962__auto____$1.call(null,p,v);
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
var args31838 = [];
var len__17364__auto___31963 = arguments.length;
var i__17365__auto___31964 = (0);
while(true){
if((i__17365__auto___31964 < len__17364__auto___31963)){
args31838.push((arguments[i__17365__auto___31964]));

var G__31965 = (i__17365__auto___31964 + (1));
i__17365__auto___31964 = G__31965;
continue;
} else {
}
break;
}

var G__31840 = args31838.length;
switch (G__31840) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31838.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16306__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16306__auto__,mults){
return (function (p1__31837_SHARP_){
if(cljs.core.truth_(p1__31837_SHARP_.call(null,topic))){
return p1__31837_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31837_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16306__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31841 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31842){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31842 = meta31842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31843,meta31842__$1){
var self__ = this;
var _31843__$1 = this;
return (new cljs.core.async.t_cljs$core$async31841(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31842__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31843){
var self__ = this;
var _31843__$1 = this;
return self__.meta31842;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31842","meta31842",-893377611,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31841.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31841";

cljs.core.async.t_cljs$core$async31841.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async31841");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31841 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31841(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31842){
return (new cljs.core.async.t_cljs$core$async31841(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31842));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31841(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19328__auto___31967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___31967,mults,ensure_mult,p){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___31967,mults,ensure_mult,p){
return (function (state_31915){
var state_val_31916 = (state_31915[(1)]);
if((state_val_31916 === (7))){
var inst_31911 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31917_31968 = state_31915__$1;
(statearr_31917_31968[(2)] = inst_31911);

(statearr_31917_31968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (20))){
var state_31915__$1 = state_31915;
var statearr_31918_31969 = state_31915__$1;
(statearr_31918_31969[(2)] = null);

(statearr_31918_31969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (1))){
var state_31915__$1 = state_31915;
var statearr_31919_31970 = state_31915__$1;
(statearr_31919_31970[(2)] = null);

(statearr_31919_31970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (24))){
var inst_31894 = (state_31915[(7)]);
var inst_31903 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31894);
var state_31915__$1 = state_31915;
var statearr_31920_31971 = state_31915__$1;
(statearr_31920_31971[(2)] = inst_31903);

(statearr_31920_31971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (4))){
var inst_31846 = (state_31915[(8)]);
var inst_31846__$1 = (state_31915[(2)]);
var inst_31847 = (inst_31846__$1 == null);
var state_31915__$1 = (function (){var statearr_31921 = state_31915;
(statearr_31921[(8)] = inst_31846__$1);

return statearr_31921;
})();
if(cljs.core.truth_(inst_31847)){
var statearr_31922_31972 = state_31915__$1;
(statearr_31922_31972[(1)] = (5));

} else {
var statearr_31923_31973 = state_31915__$1;
(statearr_31923_31973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (15))){
var inst_31888 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31924_31974 = state_31915__$1;
(statearr_31924_31974[(2)] = inst_31888);

(statearr_31924_31974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (21))){
var inst_31908 = (state_31915[(2)]);
var state_31915__$1 = (function (){var statearr_31925 = state_31915;
(statearr_31925[(9)] = inst_31908);

return statearr_31925;
})();
var statearr_31926_31975 = state_31915__$1;
(statearr_31926_31975[(2)] = null);

(statearr_31926_31975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (13))){
var inst_31870 = (state_31915[(10)]);
var inst_31872 = cljs.core.chunked_seq_QMARK_.call(null,inst_31870);
var state_31915__$1 = state_31915;
if(inst_31872){
var statearr_31927_31976 = state_31915__$1;
(statearr_31927_31976[(1)] = (16));

} else {
var statearr_31928_31977 = state_31915__$1;
(statearr_31928_31977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (22))){
var inst_31900 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
if(cljs.core.truth_(inst_31900)){
var statearr_31929_31978 = state_31915__$1;
(statearr_31929_31978[(1)] = (23));

} else {
var statearr_31930_31979 = state_31915__$1;
(statearr_31930_31979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (6))){
var inst_31846 = (state_31915[(8)]);
var inst_31896 = (state_31915[(11)]);
var inst_31894 = (state_31915[(7)]);
var inst_31894__$1 = topic_fn.call(null,inst_31846);
var inst_31895 = cljs.core.deref.call(null,mults);
var inst_31896__$1 = cljs.core.get.call(null,inst_31895,inst_31894__$1);
var state_31915__$1 = (function (){var statearr_31931 = state_31915;
(statearr_31931[(11)] = inst_31896__$1);

(statearr_31931[(7)] = inst_31894__$1);

return statearr_31931;
})();
if(cljs.core.truth_(inst_31896__$1)){
var statearr_31932_31980 = state_31915__$1;
(statearr_31932_31980[(1)] = (19));

} else {
var statearr_31933_31981 = state_31915__$1;
(statearr_31933_31981[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (25))){
var inst_31905 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31934_31982 = state_31915__$1;
(statearr_31934_31982[(2)] = inst_31905);

(statearr_31934_31982[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (17))){
var inst_31870 = (state_31915[(10)]);
var inst_31879 = cljs.core.first.call(null,inst_31870);
var inst_31880 = cljs.core.async.muxch_STAR_.call(null,inst_31879);
var inst_31881 = cljs.core.async.close_BANG_.call(null,inst_31880);
var inst_31882 = cljs.core.next.call(null,inst_31870);
var inst_31856 = inst_31882;
var inst_31857 = null;
var inst_31858 = (0);
var inst_31859 = (0);
var state_31915__$1 = (function (){var statearr_31935 = state_31915;
(statearr_31935[(12)] = inst_31856);

(statearr_31935[(13)] = inst_31857);

(statearr_31935[(14)] = inst_31881);

(statearr_31935[(15)] = inst_31859);

(statearr_31935[(16)] = inst_31858);

return statearr_31935;
})();
var statearr_31936_31983 = state_31915__$1;
(statearr_31936_31983[(2)] = null);

(statearr_31936_31983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (3))){
var inst_31913 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31915__$1,inst_31913);
} else {
if((state_val_31916 === (12))){
var inst_31890 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31937_31984 = state_31915__$1;
(statearr_31937_31984[(2)] = inst_31890);

(statearr_31937_31984[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (2))){
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31915__$1,(4),ch);
} else {
if((state_val_31916 === (23))){
var state_31915__$1 = state_31915;
var statearr_31938_31985 = state_31915__$1;
(statearr_31938_31985[(2)] = null);

(statearr_31938_31985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (19))){
var inst_31846 = (state_31915[(8)]);
var inst_31896 = (state_31915[(11)]);
var inst_31898 = cljs.core.async.muxch_STAR_.call(null,inst_31896);
var state_31915__$1 = state_31915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31915__$1,(22),inst_31898,inst_31846);
} else {
if((state_val_31916 === (11))){
var inst_31856 = (state_31915[(12)]);
var inst_31870 = (state_31915[(10)]);
var inst_31870__$1 = cljs.core.seq.call(null,inst_31856);
var state_31915__$1 = (function (){var statearr_31939 = state_31915;
(statearr_31939[(10)] = inst_31870__$1);

return statearr_31939;
})();
if(inst_31870__$1){
var statearr_31940_31986 = state_31915__$1;
(statearr_31940_31986[(1)] = (13));

} else {
var statearr_31941_31987 = state_31915__$1;
(statearr_31941_31987[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (9))){
var inst_31892 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31942_31988 = state_31915__$1;
(statearr_31942_31988[(2)] = inst_31892);

(statearr_31942_31988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (5))){
var inst_31853 = cljs.core.deref.call(null,mults);
var inst_31854 = cljs.core.vals.call(null,inst_31853);
var inst_31855 = cljs.core.seq.call(null,inst_31854);
var inst_31856 = inst_31855;
var inst_31857 = null;
var inst_31858 = (0);
var inst_31859 = (0);
var state_31915__$1 = (function (){var statearr_31943 = state_31915;
(statearr_31943[(12)] = inst_31856);

(statearr_31943[(13)] = inst_31857);

(statearr_31943[(15)] = inst_31859);

(statearr_31943[(16)] = inst_31858);

return statearr_31943;
})();
var statearr_31944_31989 = state_31915__$1;
(statearr_31944_31989[(2)] = null);

(statearr_31944_31989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (14))){
var state_31915__$1 = state_31915;
var statearr_31948_31990 = state_31915__$1;
(statearr_31948_31990[(2)] = null);

(statearr_31948_31990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (16))){
var inst_31870 = (state_31915[(10)]);
var inst_31874 = cljs.core.chunk_first.call(null,inst_31870);
var inst_31875 = cljs.core.chunk_rest.call(null,inst_31870);
var inst_31876 = cljs.core.count.call(null,inst_31874);
var inst_31856 = inst_31875;
var inst_31857 = inst_31874;
var inst_31858 = inst_31876;
var inst_31859 = (0);
var state_31915__$1 = (function (){var statearr_31949 = state_31915;
(statearr_31949[(12)] = inst_31856);

(statearr_31949[(13)] = inst_31857);

(statearr_31949[(15)] = inst_31859);

(statearr_31949[(16)] = inst_31858);

return statearr_31949;
})();
var statearr_31950_31991 = state_31915__$1;
(statearr_31950_31991[(2)] = null);

(statearr_31950_31991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (10))){
var inst_31856 = (state_31915[(12)]);
var inst_31857 = (state_31915[(13)]);
var inst_31859 = (state_31915[(15)]);
var inst_31858 = (state_31915[(16)]);
var inst_31864 = cljs.core._nth.call(null,inst_31857,inst_31859);
var inst_31865 = cljs.core.async.muxch_STAR_.call(null,inst_31864);
var inst_31866 = cljs.core.async.close_BANG_.call(null,inst_31865);
var inst_31867 = (inst_31859 + (1));
var tmp31945 = inst_31856;
var tmp31946 = inst_31857;
var tmp31947 = inst_31858;
var inst_31856__$1 = tmp31945;
var inst_31857__$1 = tmp31946;
var inst_31858__$1 = tmp31947;
var inst_31859__$1 = inst_31867;
var state_31915__$1 = (function (){var statearr_31951 = state_31915;
(statearr_31951[(12)] = inst_31856__$1);

(statearr_31951[(13)] = inst_31857__$1);

(statearr_31951[(17)] = inst_31866);

(statearr_31951[(15)] = inst_31859__$1);

(statearr_31951[(16)] = inst_31858__$1);

return statearr_31951;
})();
var statearr_31952_31992 = state_31915__$1;
(statearr_31952_31992[(2)] = null);

(statearr_31952_31992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (18))){
var inst_31885 = (state_31915[(2)]);
var state_31915__$1 = state_31915;
var statearr_31953_31993 = state_31915__$1;
(statearr_31953_31993[(2)] = inst_31885);

(statearr_31953_31993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31916 === (8))){
var inst_31859 = (state_31915[(15)]);
var inst_31858 = (state_31915[(16)]);
var inst_31861 = (inst_31859 < inst_31858);
var inst_31862 = inst_31861;
var state_31915__$1 = state_31915;
if(cljs.core.truth_(inst_31862)){
var statearr_31954_31994 = state_31915__$1;
(statearr_31954_31994[(1)] = (10));

} else {
var statearr_31955_31995 = state_31915__$1;
(statearr_31955_31995[(1)] = (11));

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
});})(c__19328__auto___31967,mults,ensure_mult,p))
;
return ((function (switch__19307__auto__,c__19328__auto___31967,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_31959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31959[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_31959[(1)] = (1));

return statearr_31959;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_31915){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_31915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e31960){if((e31960 instanceof Object)){
var ex__19311__auto__ = e31960;
var statearr_31961_31996 = state_31915;
(statearr_31961_31996[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31997 = state_31915;
state_31915 = G__31997;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_31915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_31915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___31967,mults,ensure_mult,p))
})();
var state__19330__auto__ = (function (){var statearr_31962 = f__19329__auto__.call(null);
(statearr_31962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___31967);

return statearr_31962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___31967,mults,ensure_mult,p))
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
var args31998 = [];
var len__17364__auto___32001 = arguments.length;
var i__17365__auto___32002 = (0);
while(true){
if((i__17365__auto___32002 < len__17364__auto___32001)){
args31998.push((arguments[i__17365__auto___32002]));

var G__32003 = (i__17365__auto___32002 + (1));
i__17365__auto___32002 = G__32003;
continue;
} else {
}
break;
}

var G__32000 = args31998.length;
switch (G__32000) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31998.length)].join('')));

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
var args32005 = [];
var len__17364__auto___32008 = arguments.length;
var i__17365__auto___32009 = (0);
while(true){
if((i__17365__auto___32009 < len__17364__auto___32008)){
args32005.push((arguments[i__17365__auto___32009]));

var G__32010 = (i__17365__auto___32009 + (1));
i__17365__auto___32009 = G__32010;
continue;
} else {
}
break;
}

var G__32007 = args32005.length;
switch (G__32007) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32005.length)].join('')));

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
var args32012 = [];
var len__17364__auto___32083 = arguments.length;
var i__17365__auto___32084 = (0);
while(true){
if((i__17365__auto___32084 < len__17364__auto___32083)){
args32012.push((arguments[i__17365__auto___32084]));

var G__32085 = (i__17365__auto___32084 + (1));
i__17365__auto___32084 = G__32085;
continue;
} else {
}
break;
}

var G__32014 = args32012.length;
switch (G__32014) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32012.length)].join('')));

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
var c__19328__auto___32087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32053){
var state_val_32054 = (state_32053[(1)]);
if((state_val_32054 === (7))){
var state_32053__$1 = state_32053;
var statearr_32055_32088 = state_32053__$1;
(statearr_32055_32088[(2)] = null);

(statearr_32055_32088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (1))){
var state_32053__$1 = state_32053;
var statearr_32056_32089 = state_32053__$1;
(statearr_32056_32089[(2)] = null);

(statearr_32056_32089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (4))){
var inst_32017 = (state_32053[(7)]);
var inst_32019 = (inst_32017 < cnt);
var state_32053__$1 = state_32053;
if(cljs.core.truth_(inst_32019)){
var statearr_32057_32090 = state_32053__$1;
(statearr_32057_32090[(1)] = (6));

} else {
var statearr_32058_32091 = state_32053__$1;
(statearr_32058_32091[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (15))){
var inst_32049 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32059_32092 = state_32053__$1;
(statearr_32059_32092[(2)] = inst_32049);

(statearr_32059_32092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (13))){
var inst_32042 = cljs.core.async.close_BANG_.call(null,out);
var state_32053__$1 = state_32053;
var statearr_32060_32093 = state_32053__$1;
(statearr_32060_32093[(2)] = inst_32042);

(statearr_32060_32093[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (6))){
var state_32053__$1 = state_32053;
var statearr_32061_32094 = state_32053__$1;
(statearr_32061_32094[(2)] = null);

(statearr_32061_32094[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (3))){
var inst_32051 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32053__$1,inst_32051);
} else {
if((state_val_32054 === (12))){
var inst_32039 = (state_32053[(8)]);
var inst_32039__$1 = (state_32053[(2)]);
var inst_32040 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32039__$1);
var state_32053__$1 = (function (){var statearr_32062 = state_32053;
(statearr_32062[(8)] = inst_32039__$1);

return statearr_32062;
})();
if(cljs.core.truth_(inst_32040)){
var statearr_32063_32095 = state_32053__$1;
(statearr_32063_32095[(1)] = (13));

} else {
var statearr_32064_32096 = state_32053__$1;
(statearr_32064_32096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (2))){
var inst_32016 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32017 = (0);
var state_32053__$1 = (function (){var statearr_32065 = state_32053;
(statearr_32065[(7)] = inst_32017);

(statearr_32065[(9)] = inst_32016);

return statearr_32065;
})();
var statearr_32066_32097 = state_32053__$1;
(statearr_32066_32097[(2)] = null);

(statearr_32066_32097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (11))){
var inst_32017 = (state_32053[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32053,(10),Object,null,(9));
var inst_32026 = chs__$1.call(null,inst_32017);
var inst_32027 = done.call(null,inst_32017);
var inst_32028 = cljs.core.async.take_BANG_.call(null,inst_32026,inst_32027);
var state_32053__$1 = state_32053;
var statearr_32067_32098 = state_32053__$1;
(statearr_32067_32098[(2)] = inst_32028);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (9))){
var inst_32017 = (state_32053[(7)]);
var inst_32030 = (state_32053[(2)]);
var inst_32031 = (inst_32017 + (1));
var inst_32017__$1 = inst_32031;
var state_32053__$1 = (function (){var statearr_32068 = state_32053;
(statearr_32068[(10)] = inst_32030);

(statearr_32068[(7)] = inst_32017__$1);

return statearr_32068;
})();
var statearr_32069_32099 = state_32053__$1;
(statearr_32069_32099[(2)] = null);

(statearr_32069_32099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (5))){
var inst_32037 = (state_32053[(2)]);
var state_32053__$1 = (function (){var statearr_32070 = state_32053;
(statearr_32070[(11)] = inst_32037);

return statearr_32070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32053__$1,(12),dchan);
} else {
if((state_val_32054 === (14))){
var inst_32039 = (state_32053[(8)]);
var inst_32044 = cljs.core.apply.call(null,f,inst_32039);
var state_32053__$1 = state_32053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32053__$1,(16),out,inst_32044);
} else {
if((state_val_32054 === (16))){
var inst_32046 = (state_32053[(2)]);
var state_32053__$1 = (function (){var statearr_32071 = state_32053;
(statearr_32071[(12)] = inst_32046);

return statearr_32071;
})();
var statearr_32072_32100 = state_32053__$1;
(statearr_32072_32100[(2)] = null);

(statearr_32072_32100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (10))){
var inst_32021 = (state_32053[(2)]);
var inst_32022 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32053__$1 = (function (){var statearr_32073 = state_32053;
(statearr_32073[(13)] = inst_32021);

return statearr_32073;
})();
var statearr_32074_32101 = state_32053__$1;
(statearr_32074_32101[(2)] = inst_32022);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32053__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32054 === (8))){
var inst_32035 = (state_32053[(2)]);
var state_32053__$1 = state_32053;
var statearr_32075_32102 = state_32053__$1;
(statearr_32075_32102[(2)] = inst_32035);

(statearr_32075_32102[(1)] = (5));


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
});})(c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19307__auto__,c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32079[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32079[(1)] = (1));

return statearr_32079;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32053){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32080){if((e32080 instanceof Object)){
var ex__19311__auto__ = e32080;
var statearr_32081_32103 = state_32053;
(statearr_32081_32103[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32104 = state_32053;
state_32053 = G__32104;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19330__auto__ = (function (){var statearr_32082 = f__19329__auto__.call(null);
(statearr_32082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32087);

return statearr_32082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32087,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32106 = [];
var len__17364__auto___32162 = arguments.length;
var i__17365__auto___32163 = (0);
while(true){
if((i__17365__auto___32163 < len__17364__auto___32162)){
args32106.push((arguments[i__17365__auto___32163]));

var G__32164 = (i__17365__auto___32163 + (1));
i__17365__auto___32163 = G__32164;
continue;
} else {
}
break;
}

var G__32108 = args32106.length;
switch (G__32108) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32106.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32166,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32166,out){
return (function (state_32138){
var state_val_32139 = (state_32138[(1)]);
if((state_val_32139 === (7))){
var inst_32117 = (state_32138[(7)]);
var inst_32118 = (state_32138[(8)]);
var inst_32117__$1 = (state_32138[(2)]);
var inst_32118__$1 = cljs.core.nth.call(null,inst_32117__$1,(0),null);
var inst_32119 = cljs.core.nth.call(null,inst_32117__$1,(1),null);
var inst_32120 = (inst_32118__$1 == null);
var state_32138__$1 = (function (){var statearr_32140 = state_32138;
(statearr_32140[(7)] = inst_32117__$1);

(statearr_32140[(9)] = inst_32119);

(statearr_32140[(8)] = inst_32118__$1);

return statearr_32140;
})();
if(cljs.core.truth_(inst_32120)){
var statearr_32141_32167 = state_32138__$1;
(statearr_32141_32167[(1)] = (8));

} else {
var statearr_32142_32168 = state_32138__$1;
(statearr_32142_32168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (1))){
var inst_32109 = cljs.core.vec.call(null,chs);
var inst_32110 = inst_32109;
var state_32138__$1 = (function (){var statearr_32143 = state_32138;
(statearr_32143[(10)] = inst_32110);

return statearr_32143;
})();
var statearr_32144_32169 = state_32138__$1;
(statearr_32144_32169[(2)] = null);

(statearr_32144_32169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (4))){
var inst_32110 = (state_32138[(10)]);
var state_32138__$1 = state_32138;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32138__$1,(7),inst_32110);
} else {
if((state_val_32139 === (6))){
var inst_32134 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
var statearr_32145_32170 = state_32138__$1;
(statearr_32145_32170[(2)] = inst_32134);

(statearr_32145_32170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (3))){
var inst_32136 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32138__$1,inst_32136);
} else {
if((state_val_32139 === (2))){
var inst_32110 = (state_32138[(10)]);
var inst_32112 = cljs.core.count.call(null,inst_32110);
var inst_32113 = (inst_32112 > (0));
var state_32138__$1 = state_32138;
if(cljs.core.truth_(inst_32113)){
var statearr_32147_32171 = state_32138__$1;
(statearr_32147_32171[(1)] = (4));

} else {
var statearr_32148_32172 = state_32138__$1;
(statearr_32148_32172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (11))){
var inst_32110 = (state_32138[(10)]);
var inst_32127 = (state_32138[(2)]);
var tmp32146 = inst_32110;
var inst_32110__$1 = tmp32146;
var state_32138__$1 = (function (){var statearr_32149 = state_32138;
(statearr_32149[(11)] = inst_32127);

(statearr_32149[(10)] = inst_32110__$1);

return statearr_32149;
})();
var statearr_32150_32173 = state_32138__$1;
(statearr_32150_32173[(2)] = null);

(statearr_32150_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (9))){
var inst_32118 = (state_32138[(8)]);
var state_32138__$1 = state_32138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32138__$1,(11),out,inst_32118);
} else {
if((state_val_32139 === (5))){
var inst_32132 = cljs.core.async.close_BANG_.call(null,out);
var state_32138__$1 = state_32138;
var statearr_32151_32174 = state_32138__$1;
(statearr_32151_32174[(2)] = inst_32132);

(statearr_32151_32174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (10))){
var inst_32130 = (state_32138[(2)]);
var state_32138__$1 = state_32138;
var statearr_32152_32175 = state_32138__$1;
(statearr_32152_32175[(2)] = inst_32130);

(statearr_32152_32175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32139 === (8))){
var inst_32117 = (state_32138[(7)]);
var inst_32119 = (state_32138[(9)]);
var inst_32110 = (state_32138[(10)]);
var inst_32118 = (state_32138[(8)]);
var inst_32122 = (function (){var cs = inst_32110;
var vec__32115 = inst_32117;
var v = inst_32118;
var c = inst_32119;
return ((function (cs,vec__32115,v,c,inst_32117,inst_32119,inst_32110,inst_32118,state_val_32139,c__19328__auto___32166,out){
return (function (p1__32105_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32105_SHARP_);
});
;})(cs,vec__32115,v,c,inst_32117,inst_32119,inst_32110,inst_32118,state_val_32139,c__19328__auto___32166,out))
})();
var inst_32123 = cljs.core.filterv.call(null,inst_32122,inst_32110);
var inst_32110__$1 = inst_32123;
var state_32138__$1 = (function (){var statearr_32153 = state_32138;
(statearr_32153[(10)] = inst_32110__$1);

return statearr_32153;
})();
var statearr_32154_32176 = state_32138__$1;
(statearr_32154_32176[(2)] = null);

(statearr_32154_32176[(1)] = (2));


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
});})(c__19328__auto___32166,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32166,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32158[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32158[(1)] = (1));

return statearr_32158;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32138){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32159){if((e32159 instanceof Object)){
var ex__19311__auto__ = e32159;
var statearr_32160_32177 = state_32138;
(statearr_32160_32177[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32178 = state_32138;
state_32138 = G__32178;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32166,out))
})();
var state__19330__auto__ = (function (){var statearr_32161 = f__19329__auto__.call(null);
(statearr_32161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32166);

return statearr_32161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32166,out))
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
var args32179 = [];
var len__17364__auto___32228 = arguments.length;
var i__17365__auto___32229 = (0);
while(true){
if((i__17365__auto___32229 < len__17364__auto___32228)){
args32179.push((arguments[i__17365__auto___32229]));

var G__32230 = (i__17365__auto___32229 + (1));
i__17365__auto___32229 = G__32230;
continue;
} else {
}
break;
}

var G__32181 = args32179.length;
switch (G__32181) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32179.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32232,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32232,out){
return (function (state_32205){
var state_val_32206 = (state_32205[(1)]);
if((state_val_32206 === (7))){
var inst_32187 = (state_32205[(7)]);
var inst_32187__$1 = (state_32205[(2)]);
var inst_32188 = (inst_32187__$1 == null);
var inst_32189 = cljs.core.not.call(null,inst_32188);
var state_32205__$1 = (function (){var statearr_32207 = state_32205;
(statearr_32207[(7)] = inst_32187__$1);

return statearr_32207;
})();
if(inst_32189){
var statearr_32208_32233 = state_32205__$1;
(statearr_32208_32233[(1)] = (8));

} else {
var statearr_32209_32234 = state_32205__$1;
(statearr_32209_32234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (1))){
var inst_32182 = (0);
var state_32205__$1 = (function (){var statearr_32210 = state_32205;
(statearr_32210[(8)] = inst_32182);

return statearr_32210;
})();
var statearr_32211_32235 = state_32205__$1;
(statearr_32211_32235[(2)] = null);

(statearr_32211_32235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (4))){
var state_32205__$1 = state_32205;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32205__$1,(7),ch);
} else {
if((state_val_32206 === (6))){
var inst_32200 = (state_32205[(2)]);
var state_32205__$1 = state_32205;
var statearr_32212_32236 = state_32205__$1;
(statearr_32212_32236[(2)] = inst_32200);

(statearr_32212_32236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (3))){
var inst_32202 = (state_32205[(2)]);
var inst_32203 = cljs.core.async.close_BANG_.call(null,out);
var state_32205__$1 = (function (){var statearr_32213 = state_32205;
(statearr_32213[(9)] = inst_32202);

return statearr_32213;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32205__$1,inst_32203);
} else {
if((state_val_32206 === (2))){
var inst_32182 = (state_32205[(8)]);
var inst_32184 = (inst_32182 < n);
var state_32205__$1 = state_32205;
if(cljs.core.truth_(inst_32184)){
var statearr_32214_32237 = state_32205__$1;
(statearr_32214_32237[(1)] = (4));

} else {
var statearr_32215_32238 = state_32205__$1;
(statearr_32215_32238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (11))){
var inst_32182 = (state_32205[(8)]);
var inst_32192 = (state_32205[(2)]);
var inst_32193 = (inst_32182 + (1));
var inst_32182__$1 = inst_32193;
var state_32205__$1 = (function (){var statearr_32216 = state_32205;
(statearr_32216[(10)] = inst_32192);

(statearr_32216[(8)] = inst_32182__$1);

return statearr_32216;
})();
var statearr_32217_32239 = state_32205__$1;
(statearr_32217_32239[(2)] = null);

(statearr_32217_32239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (9))){
var state_32205__$1 = state_32205;
var statearr_32218_32240 = state_32205__$1;
(statearr_32218_32240[(2)] = null);

(statearr_32218_32240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (5))){
var state_32205__$1 = state_32205;
var statearr_32219_32241 = state_32205__$1;
(statearr_32219_32241[(2)] = null);

(statearr_32219_32241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (10))){
var inst_32197 = (state_32205[(2)]);
var state_32205__$1 = state_32205;
var statearr_32220_32242 = state_32205__$1;
(statearr_32220_32242[(2)] = inst_32197);

(statearr_32220_32242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32206 === (8))){
var inst_32187 = (state_32205[(7)]);
var state_32205__$1 = state_32205;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32205__$1,(11),out,inst_32187);
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
});})(c__19328__auto___32232,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32232,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32224 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32224[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32224[(1)] = (1));

return statearr_32224;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32205){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32205);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32225){if((e32225 instanceof Object)){
var ex__19311__auto__ = e32225;
var statearr_32226_32243 = state_32205;
(statearr_32226_32243[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32205);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32244 = state_32205;
state_32205 = G__32244;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32232,out))
})();
var state__19330__auto__ = (function (){var statearr_32227 = f__19329__auto__.call(null);
(statearr_32227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32232);

return statearr_32227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32232,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32252 = (function (map_LT_,f,ch,meta32253){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32253 = meta32253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32254,meta32253__$1){
var self__ = this;
var _32254__$1 = this;
return (new cljs.core.async.t_cljs$core$async32252(self__.map_LT_,self__.f,self__.ch,meta32253__$1));
});

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32254){
var self__ = this;
var _32254__$1 = this;
return self__.meta32253;
});

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32255 = (function (map_LT_,f,ch,meta32253,_,fn1,meta32256){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32253 = meta32253;
this._ = _;
this.fn1 = fn1;
this.meta32256 = meta32256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32257,meta32256__$1){
var self__ = this;
var _32257__$1 = this;
return (new cljs.core.async.t_cljs$core$async32255(self__.map_LT_,self__.f,self__.ch,self__.meta32253,self__._,self__.fn1,meta32256__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32257){
var self__ = this;
var _32257__$1 = this;
return self__.meta32256;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32245_SHARP_){
return f1.call(null,(((p1__32245_SHARP_ == null))?null:self__.f.call(null,p1__32245_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32255.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32253","meta32253",-48257420,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32252","cljs.core.async/t_cljs$core$async32252",-137726499,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32256","meta32256",333220434,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32255";

cljs.core.async.t_cljs$core$async32255.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async32255");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32255 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32255(map_LT___$1,f__$1,ch__$1,meta32253__$1,___$2,fn1__$1,meta32256){
return (new cljs.core.async.t_cljs$core$async32255(map_LT___$1,f__$1,ch__$1,meta32253__$1,___$2,fn1__$1,meta32256));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32255(self__.map_LT_,self__.f,self__.ch,self__.meta32253,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16294__auto__ = ret;
if(cljs.core.truth_(and__16294__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16294__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32252.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32253","meta32253",-48257420,null)], null);
});

cljs.core.async.t_cljs$core$async32252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32252";

cljs.core.async.t_cljs$core$async32252.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async32252");
});

cljs.core.async.__GT_t_cljs$core$async32252 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32252(map_LT___$1,f__$1,ch__$1,meta32253){
return (new cljs.core.async.t_cljs$core$async32252(map_LT___$1,f__$1,ch__$1,meta32253));
});

}

return (new cljs.core.async.t_cljs$core$async32252(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32261 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32261 = (function (map_GT_,f,ch,meta32262){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32262 = meta32262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32263,meta32262__$1){
var self__ = this;
var _32263__$1 = this;
return (new cljs.core.async.t_cljs$core$async32261(self__.map_GT_,self__.f,self__.ch,meta32262__$1));
});

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32263){
var self__ = this;
var _32263__$1 = this;
return self__.meta32262;
});

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32262","meta32262",-984269054,null)], null);
});

cljs.core.async.t_cljs$core$async32261.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32261";

cljs.core.async.t_cljs$core$async32261.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async32261");
});

cljs.core.async.__GT_t_cljs$core$async32261 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32261(map_GT___$1,f__$1,ch__$1,meta32262){
return (new cljs.core.async.t_cljs$core$async32261(map_GT___$1,f__$1,ch__$1,meta32262));
});

}

return (new cljs.core.async.t_cljs$core$async32261(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32267 = (function (filter_GT_,p,ch,meta32268){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32268 = meta32268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32269,meta32268__$1){
var self__ = this;
var _32269__$1 = this;
return (new cljs.core.async.t_cljs$core$async32267(self__.filter_GT_,self__.p,self__.ch,meta32268__$1));
});

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32269){
var self__ = this;
var _32269__$1 = this;
return self__.meta32268;
});

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32267.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32268","meta32268",-201950164,null)], null);
});

cljs.core.async.t_cljs$core$async32267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32267";

cljs.core.async.t_cljs$core$async32267.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async32267");
});

cljs.core.async.__GT_t_cljs$core$async32267 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32267(filter_GT___$1,p__$1,ch__$1,meta32268){
return (new cljs.core.async.t_cljs$core$async32267(filter_GT___$1,p__$1,ch__$1,meta32268));
});

}

return (new cljs.core.async.t_cljs$core$async32267(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32270 = [];
var len__17364__auto___32314 = arguments.length;
var i__17365__auto___32315 = (0);
while(true){
if((i__17365__auto___32315 < len__17364__auto___32314)){
args32270.push((arguments[i__17365__auto___32315]));

var G__32316 = (i__17365__auto___32315 + (1));
i__17365__auto___32315 = G__32316;
continue;
} else {
}
break;
}

var G__32272 = args32270.length;
switch (G__32272) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32270.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32318,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32318,out){
return (function (state_32293){
var state_val_32294 = (state_32293[(1)]);
if((state_val_32294 === (7))){
var inst_32289 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32295_32319 = state_32293__$1;
(statearr_32295_32319[(2)] = inst_32289);

(statearr_32295_32319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (1))){
var state_32293__$1 = state_32293;
var statearr_32296_32320 = state_32293__$1;
(statearr_32296_32320[(2)] = null);

(statearr_32296_32320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (4))){
var inst_32275 = (state_32293[(7)]);
var inst_32275__$1 = (state_32293[(2)]);
var inst_32276 = (inst_32275__$1 == null);
var state_32293__$1 = (function (){var statearr_32297 = state_32293;
(statearr_32297[(7)] = inst_32275__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32276)){
var statearr_32298_32321 = state_32293__$1;
(statearr_32298_32321[(1)] = (5));

} else {
var statearr_32299_32322 = state_32293__$1;
(statearr_32299_32322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (6))){
var inst_32275 = (state_32293[(7)]);
var inst_32280 = p.call(null,inst_32275);
var state_32293__$1 = state_32293;
if(cljs.core.truth_(inst_32280)){
var statearr_32300_32323 = state_32293__$1;
(statearr_32300_32323[(1)] = (8));

} else {
var statearr_32301_32324 = state_32293__$1;
(statearr_32301_32324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (3))){
var inst_32291 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32293__$1,inst_32291);
} else {
if((state_val_32294 === (2))){
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32293__$1,(4),ch);
} else {
if((state_val_32294 === (11))){
var inst_32283 = (state_32293[(2)]);
var state_32293__$1 = state_32293;
var statearr_32302_32325 = state_32293__$1;
(statearr_32302_32325[(2)] = inst_32283);

(statearr_32302_32325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (9))){
var state_32293__$1 = state_32293;
var statearr_32303_32326 = state_32293__$1;
(statearr_32303_32326[(2)] = null);

(statearr_32303_32326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (5))){
var inst_32278 = cljs.core.async.close_BANG_.call(null,out);
var state_32293__$1 = state_32293;
var statearr_32304_32327 = state_32293__$1;
(statearr_32304_32327[(2)] = inst_32278);

(statearr_32304_32327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (10))){
var inst_32286 = (state_32293[(2)]);
var state_32293__$1 = (function (){var statearr_32305 = state_32293;
(statearr_32305[(8)] = inst_32286);

return statearr_32305;
})();
var statearr_32306_32328 = state_32293__$1;
(statearr_32306_32328[(2)] = null);

(statearr_32306_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32294 === (8))){
var inst_32275 = (state_32293[(7)]);
var state_32293__$1 = state_32293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32293__$1,(11),out,inst_32275);
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
});})(c__19328__auto___32318,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32318,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32310 = [null,null,null,null,null,null,null,null,null];
(statearr_32310[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32310[(1)] = (1));

return statearr_32310;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32293){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32311){if((e32311 instanceof Object)){
var ex__19311__auto__ = e32311;
var statearr_32312_32329 = state_32293;
(statearr_32312_32329[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32330 = state_32293;
state_32293 = G__32330;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32318,out))
})();
var state__19330__auto__ = (function (){var statearr_32313 = f__19329__auto__.call(null);
(statearr_32313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32318);

return statearr_32313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32318,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32331 = [];
var len__17364__auto___32334 = arguments.length;
var i__17365__auto___32335 = (0);
while(true){
if((i__17365__auto___32335 < len__17364__auto___32334)){
args32331.push((arguments[i__17365__auto___32335]));

var G__32336 = (i__17365__auto___32335 + (1));
i__17365__auto___32335 = G__32336;
continue;
} else {
}
break;
}

var G__32333 = args32331.length;
switch (G__32333) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32331.length)].join('')));

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
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (7))){
var inst_32499 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32505_32546 = state_32503__$1;
(statearr_32505_32546[(2)] = inst_32499);

(statearr_32505_32546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (20))){
var inst_32469 = (state_32503[(7)]);
var inst_32480 = (state_32503[(2)]);
var inst_32481 = cljs.core.next.call(null,inst_32469);
var inst_32455 = inst_32481;
var inst_32456 = null;
var inst_32457 = (0);
var inst_32458 = (0);
var state_32503__$1 = (function (){var statearr_32506 = state_32503;
(statearr_32506[(8)] = inst_32458);

(statearr_32506[(9)] = inst_32457);

(statearr_32506[(10)] = inst_32480);

(statearr_32506[(11)] = inst_32455);

(statearr_32506[(12)] = inst_32456);

return statearr_32506;
})();
var statearr_32507_32547 = state_32503__$1;
(statearr_32507_32547[(2)] = null);

(statearr_32507_32547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (1))){
var state_32503__$1 = state_32503;
var statearr_32508_32548 = state_32503__$1;
(statearr_32508_32548[(2)] = null);

(statearr_32508_32548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (4))){
var inst_32444 = (state_32503[(13)]);
var inst_32444__$1 = (state_32503[(2)]);
var inst_32445 = (inst_32444__$1 == null);
var state_32503__$1 = (function (){var statearr_32509 = state_32503;
(statearr_32509[(13)] = inst_32444__$1);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32445)){
var statearr_32510_32549 = state_32503__$1;
(statearr_32510_32549[(1)] = (5));

} else {
var statearr_32511_32550 = state_32503__$1;
(statearr_32511_32550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (15))){
var state_32503__$1 = state_32503;
var statearr_32515_32551 = state_32503__$1;
(statearr_32515_32551[(2)] = null);

(statearr_32515_32551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (21))){
var state_32503__$1 = state_32503;
var statearr_32516_32552 = state_32503__$1;
(statearr_32516_32552[(2)] = null);

(statearr_32516_32552[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (13))){
var inst_32458 = (state_32503[(8)]);
var inst_32457 = (state_32503[(9)]);
var inst_32455 = (state_32503[(11)]);
var inst_32456 = (state_32503[(12)]);
var inst_32465 = (state_32503[(2)]);
var inst_32466 = (inst_32458 + (1));
var tmp32512 = inst_32457;
var tmp32513 = inst_32455;
var tmp32514 = inst_32456;
var inst_32455__$1 = tmp32513;
var inst_32456__$1 = tmp32514;
var inst_32457__$1 = tmp32512;
var inst_32458__$1 = inst_32466;
var state_32503__$1 = (function (){var statearr_32517 = state_32503;
(statearr_32517[(8)] = inst_32458__$1);

(statearr_32517[(14)] = inst_32465);

(statearr_32517[(9)] = inst_32457__$1);

(statearr_32517[(11)] = inst_32455__$1);

(statearr_32517[(12)] = inst_32456__$1);

return statearr_32517;
})();
var statearr_32518_32553 = state_32503__$1;
(statearr_32518_32553[(2)] = null);

(statearr_32518_32553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (22))){
var state_32503__$1 = state_32503;
var statearr_32519_32554 = state_32503__$1;
(statearr_32519_32554[(2)] = null);

(statearr_32519_32554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (6))){
var inst_32444 = (state_32503[(13)]);
var inst_32453 = f.call(null,inst_32444);
var inst_32454 = cljs.core.seq.call(null,inst_32453);
var inst_32455 = inst_32454;
var inst_32456 = null;
var inst_32457 = (0);
var inst_32458 = (0);
var state_32503__$1 = (function (){var statearr_32520 = state_32503;
(statearr_32520[(8)] = inst_32458);

(statearr_32520[(9)] = inst_32457);

(statearr_32520[(11)] = inst_32455);

(statearr_32520[(12)] = inst_32456);

return statearr_32520;
})();
var statearr_32521_32555 = state_32503__$1;
(statearr_32521_32555[(2)] = null);

(statearr_32521_32555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (17))){
var inst_32469 = (state_32503[(7)]);
var inst_32473 = cljs.core.chunk_first.call(null,inst_32469);
var inst_32474 = cljs.core.chunk_rest.call(null,inst_32469);
var inst_32475 = cljs.core.count.call(null,inst_32473);
var inst_32455 = inst_32474;
var inst_32456 = inst_32473;
var inst_32457 = inst_32475;
var inst_32458 = (0);
var state_32503__$1 = (function (){var statearr_32522 = state_32503;
(statearr_32522[(8)] = inst_32458);

(statearr_32522[(9)] = inst_32457);

(statearr_32522[(11)] = inst_32455);

(statearr_32522[(12)] = inst_32456);

return statearr_32522;
})();
var statearr_32523_32556 = state_32503__$1;
(statearr_32523_32556[(2)] = null);

(statearr_32523_32556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (3))){
var inst_32501 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else {
if((state_val_32504 === (12))){
var inst_32489 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32524_32557 = state_32503__$1;
(statearr_32524_32557[(2)] = inst_32489);

(statearr_32524_32557[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (2))){
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(4),in$);
} else {
if((state_val_32504 === (23))){
var inst_32497 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32525_32558 = state_32503__$1;
(statearr_32525_32558[(2)] = inst_32497);

(statearr_32525_32558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (19))){
var inst_32484 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32526_32559 = state_32503__$1;
(statearr_32526_32559[(2)] = inst_32484);

(statearr_32526_32559[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (11))){
var inst_32455 = (state_32503[(11)]);
var inst_32469 = (state_32503[(7)]);
var inst_32469__$1 = cljs.core.seq.call(null,inst_32455);
var state_32503__$1 = (function (){var statearr_32527 = state_32503;
(statearr_32527[(7)] = inst_32469__$1);

return statearr_32527;
})();
if(inst_32469__$1){
var statearr_32528_32560 = state_32503__$1;
(statearr_32528_32560[(1)] = (14));

} else {
var statearr_32529_32561 = state_32503__$1;
(statearr_32529_32561[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (9))){
var inst_32491 = (state_32503[(2)]);
var inst_32492 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32503__$1 = (function (){var statearr_32530 = state_32503;
(statearr_32530[(15)] = inst_32491);

return statearr_32530;
})();
if(cljs.core.truth_(inst_32492)){
var statearr_32531_32562 = state_32503__$1;
(statearr_32531_32562[(1)] = (21));

} else {
var statearr_32532_32563 = state_32503__$1;
(statearr_32532_32563[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (5))){
var inst_32447 = cljs.core.async.close_BANG_.call(null,out);
var state_32503__$1 = state_32503;
var statearr_32533_32564 = state_32503__$1;
(statearr_32533_32564[(2)] = inst_32447);

(statearr_32533_32564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (14))){
var inst_32469 = (state_32503[(7)]);
var inst_32471 = cljs.core.chunked_seq_QMARK_.call(null,inst_32469);
var state_32503__$1 = state_32503;
if(inst_32471){
var statearr_32534_32565 = state_32503__$1;
(statearr_32534_32565[(1)] = (17));

} else {
var statearr_32535_32566 = state_32503__$1;
(statearr_32535_32566[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (16))){
var inst_32487 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32536_32567 = state_32503__$1;
(statearr_32536_32567[(2)] = inst_32487);

(statearr_32536_32567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (10))){
var inst_32458 = (state_32503[(8)]);
var inst_32456 = (state_32503[(12)]);
var inst_32463 = cljs.core._nth.call(null,inst_32456,inst_32458);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32503__$1,(13),out,inst_32463);
} else {
if((state_val_32504 === (18))){
var inst_32469 = (state_32503[(7)]);
var inst_32478 = cljs.core.first.call(null,inst_32469);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32503__$1,(20),out,inst_32478);
} else {
if((state_val_32504 === (8))){
var inst_32458 = (state_32503[(8)]);
var inst_32457 = (state_32503[(9)]);
var inst_32460 = (inst_32458 < inst_32457);
var inst_32461 = inst_32460;
var state_32503__$1 = state_32503;
if(cljs.core.truth_(inst_32461)){
var statearr_32537_32568 = state_32503__$1;
(statearr_32537_32568[(1)] = (10));

} else {
var statearr_32538_32569 = state_32503__$1;
(statearr_32538_32569[(1)] = (11));

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
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_32542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32542[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__);

(statearr_32542[(1)] = (1));

return statearr_32542;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1 = (function (state_32503){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32543){if((e32543 instanceof Object)){
var ex__19311__auto__ = e32543;
var statearr_32544_32570 = state_32503;
(statearr_32544_32570[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_32503;
state_32503 = G__32571;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_32545 = f__19329__auto__.call(null);
(statearr_32545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32572 = [];
var len__17364__auto___32575 = arguments.length;
var i__17365__auto___32576 = (0);
while(true){
if((i__17365__auto___32576 < len__17364__auto___32575)){
args32572.push((arguments[i__17365__auto___32576]));

var G__32577 = (i__17365__auto___32576 + (1));
i__17365__auto___32576 = G__32577;
continue;
} else {
}
break;
}

var G__32574 = args32572.length;
switch (G__32574) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32572.length)].join('')));

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
var args32579 = [];
var len__17364__auto___32582 = arguments.length;
var i__17365__auto___32583 = (0);
while(true){
if((i__17365__auto___32583 < len__17364__auto___32582)){
args32579.push((arguments[i__17365__auto___32583]));

var G__32584 = (i__17365__auto___32583 + (1));
i__17365__auto___32583 = G__32584;
continue;
} else {
}
break;
}

var G__32581 = args32579.length;
switch (G__32581) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32579.length)].join('')));

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
var args32586 = [];
var len__17364__auto___32637 = arguments.length;
var i__17365__auto___32638 = (0);
while(true){
if((i__17365__auto___32638 < len__17364__auto___32637)){
args32586.push((arguments[i__17365__auto___32638]));

var G__32639 = (i__17365__auto___32638 + (1));
i__17365__auto___32638 = G__32639;
continue;
} else {
}
break;
}

var G__32588 = args32586.length;
switch (G__32588) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32586.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32641,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32641,out){
return (function (state_32612){
var state_val_32613 = (state_32612[(1)]);
if((state_val_32613 === (7))){
var inst_32607 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32614_32642 = state_32612__$1;
(statearr_32614_32642[(2)] = inst_32607);

(statearr_32614_32642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (1))){
var inst_32589 = null;
var state_32612__$1 = (function (){var statearr_32615 = state_32612;
(statearr_32615[(7)] = inst_32589);

return statearr_32615;
})();
var statearr_32616_32643 = state_32612__$1;
(statearr_32616_32643[(2)] = null);

(statearr_32616_32643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (4))){
var inst_32592 = (state_32612[(8)]);
var inst_32592__$1 = (state_32612[(2)]);
var inst_32593 = (inst_32592__$1 == null);
var inst_32594 = cljs.core.not.call(null,inst_32593);
var state_32612__$1 = (function (){var statearr_32617 = state_32612;
(statearr_32617[(8)] = inst_32592__$1);

return statearr_32617;
})();
if(inst_32594){
var statearr_32618_32644 = state_32612__$1;
(statearr_32618_32644[(1)] = (5));

} else {
var statearr_32619_32645 = state_32612__$1;
(statearr_32619_32645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (6))){
var state_32612__$1 = state_32612;
var statearr_32620_32646 = state_32612__$1;
(statearr_32620_32646[(2)] = null);

(statearr_32620_32646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (3))){
var inst_32609 = (state_32612[(2)]);
var inst_32610 = cljs.core.async.close_BANG_.call(null,out);
var state_32612__$1 = (function (){var statearr_32621 = state_32612;
(statearr_32621[(9)] = inst_32609);

return statearr_32621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32612__$1,inst_32610);
} else {
if((state_val_32613 === (2))){
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32612__$1,(4),ch);
} else {
if((state_val_32613 === (11))){
var inst_32592 = (state_32612[(8)]);
var inst_32601 = (state_32612[(2)]);
var inst_32589 = inst_32592;
var state_32612__$1 = (function (){var statearr_32622 = state_32612;
(statearr_32622[(10)] = inst_32601);

(statearr_32622[(7)] = inst_32589);

return statearr_32622;
})();
var statearr_32623_32647 = state_32612__$1;
(statearr_32623_32647[(2)] = null);

(statearr_32623_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (9))){
var inst_32592 = (state_32612[(8)]);
var state_32612__$1 = state_32612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32612__$1,(11),out,inst_32592);
} else {
if((state_val_32613 === (5))){
var inst_32589 = (state_32612[(7)]);
var inst_32592 = (state_32612[(8)]);
var inst_32596 = cljs.core._EQ_.call(null,inst_32592,inst_32589);
var state_32612__$1 = state_32612;
if(inst_32596){
var statearr_32625_32648 = state_32612__$1;
(statearr_32625_32648[(1)] = (8));

} else {
var statearr_32626_32649 = state_32612__$1;
(statearr_32626_32649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (10))){
var inst_32604 = (state_32612[(2)]);
var state_32612__$1 = state_32612;
var statearr_32627_32650 = state_32612__$1;
(statearr_32627_32650[(2)] = inst_32604);

(statearr_32627_32650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32613 === (8))){
var inst_32589 = (state_32612[(7)]);
var tmp32624 = inst_32589;
var inst_32589__$1 = tmp32624;
var state_32612__$1 = (function (){var statearr_32628 = state_32612;
(statearr_32628[(7)] = inst_32589__$1);

return statearr_32628;
})();
var statearr_32629_32651 = state_32612__$1;
(statearr_32629_32651[(2)] = null);

(statearr_32629_32651[(1)] = (2));


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
});})(c__19328__auto___32641,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32641,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32633[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32633[(1)] = (1));

return statearr_32633;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32612){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32634){if((e32634 instanceof Object)){
var ex__19311__auto__ = e32634;
var statearr_32635_32652 = state_32612;
(statearr_32635_32652[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32653 = state_32612;
state_32612 = G__32653;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32641,out))
})();
var state__19330__auto__ = (function (){var statearr_32636 = f__19329__auto__.call(null);
(statearr_32636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32641);

return statearr_32636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32641,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32654 = [];
var len__17364__auto___32724 = arguments.length;
var i__17365__auto___32725 = (0);
while(true){
if((i__17365__auto___32725 < len__17364__auto___32724)){
args32654.push((arguments[i__17365__auto___32725]));

var G__32726 = (i__17365__auto___32725 + (1));
i__17365__auto___32725 = G__32726;
continue;
} else {
}
break;
}

var G__32656 = args32654.length;
switch (G__32656) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32654.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32728,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32728,out){
return (function (state_32694){
var state_val_32695 = (state_32694[(1)]);
if((state_val_32695 === (7))){
var inst_32690 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32696_32729 = state_32694__$1;
(statearr_32696_32729[(2)] = inst_32690);

(statearr_32696_32729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (1))){
var inst_32657 = (new Array(n));
var inst_32658 = inst_32657;
var inst_32659 = (0);
var state_32694__$1 = (function (){var statearr_32697 = state_32694;
(statearr_32697[(7)] = inst_32659);

(statearr_32697[(8)] = inst_32658);

return statearr_32697;
})();
var statearr_32698_32730 = state_32694__$1;
(statearr_32698_32730[(2)] = null);

(statearr_32698_32730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (4))){
var inst_32662 = (state_32694[(9)]);
var inst_32662__$1 = (state_32694[(2)]);
var inst_32663 = (inst_32662__$1 == null);
var inst_32664 = cljs.core.not.call(null,inst_32663);
var state_32694__$1 = (function (){var statearr_32699 = state_32694;
(statearr_32699[(9)] = inst_32662__$1);

return statearr_32699;
})();
if(inst_32664){
var statearr_32700_32731 = state_32694__$1;
(statearr_32700_32731[(1)] = (5));

} else {
var statearr_32701_32732 = state_32694__$1;
(statearr_32701_32732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (15))){
var inst_32684 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32702_32733 = state_32694__$1;
(statearr_32702_32733[(2)] = inst_32684);

(statearr_32702_32733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (13))){
var state_32694__$1 = state_32694;
var statearr_32703_32734 = state_32694__$1;
(statearr_32703_32734[(2)] = null);

(statearr_32703_32734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (6))){
var inst_32659 = (state_32694[(7)]);
var inst_32680 = (inst_32659 > (0));
var state_32694__$1 = state_32694;
if(cljs.core.truth_(inst_32680)){
var statearr_32704_32735 = state_32694__$1;
(statearr_32704_32735[(1)] = (12));

} else {
var statearr_32705_32736 = state_32694__$1;
(statearr_32705_32736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (3))){
var inst_32692 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32694__$1,inst_32692);
} else {
if((state_val_32695 === (12))){
var inst_32658 = (state_32694[(8)]);
var inst_32682 = cljs.core.vec.call(null,inst_32658);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32694__$1,(15),out,inst_32682);
} else {
if((state_val_32695 === (2))){
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32694__$1,(4),ch);
} else {
if((state_val_32695 === (11))){
var inst_32674 = (state_32694[(2)]);
var inst_32675 = (new Array(n));
var inst_32658 = inst_32675;
var inst_32659 = (0);
var state_32694__$1 = (function (){var statearr_32706 = state_32694;
(statearr_32706[(10)] = inst_32674);

(statearr_32706[(7)] = inst_32659);

(statearr_32706[(8)] = inst_32658);

return statearr_32706;
})();
var statearr_32707_32737 = state_32694__$1;
(statearr_32707_32737[(2)] = null);

(statearr_32707_32737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (9))){
var inst_32658 = (state_32694[(8)]);
var inst_32672 = cljs.core.vec.call(null,inst_32658);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32694__$1,(11),out,inst_32672);
} else {
if((state_val_32695 === (5))){
var inst_32667 = (state_32694[(11)]);
var inst_32659 = (state_32694[(7)]);
var inst_32658 = (state_32694[(8)]);
var inst_32662 = (state_32694[(9)]);
var inst_32666 = (inst_32658[inst_32659] = inst_32662);
var inst_32667__$1 = (inst_32659 + (1));
var inst_32668 = (inst_32667__$1 < n);
var state_32694__$1 = (function (){var statearr_32708 = state_32694;
(statearr_32708[(11)] = inst_32667__$1);

(statearr_32708[(12)] = inst_32666);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32668)){
var statearr_32709_32738 = state_32694__$1;
(statearr_32709_32738[(1)] = (8));

} else {
var statearr_32710_32739 = state_32694__$1;
(statearr_32710_32739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (14))){
var inst_32687 = (state_32694[(2)]);
var inst_32688 = cljs.core.async.close_BANG_.call(null,out);
var state_32694__$1 = (function (){var statearr_32712 = state_32694;
(statearr_32712[(13)] = inst_32687);

return statearr_32712;
})();
var statearr_32713_32740 = state_32694__$1;
(statearr_32713_32740[(2)] = inst_32688);

(statearr_32713_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (10))){
var inst_32678 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32714_32741 = state_32694__$1;
(statearr_32714_32741[(2)] = inst_32678);

(statearr_32714_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (8))){
var inst_32667 = (state_32694[(11)]);
var inst_32658 = (state_32694[(8)]);
var tmp32711 = inst_32658;
var inst_32658__$1 = tmp32711;
var inst_32659 = inst_32667;
var state_32694__$1 = (function (){var statearr_32715 = state_32694;
(statearr_32715[(7)] = inst_32659);

(statearr_32715[(8)] = inst_32658__$1);

return statearr_32715;
})();
var statearr_32716_32742 = state_32694__$1;
(statearr_32716_32742[(2)] = null);

(statearr_32716_32742[(1)] = (2));


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
});})(c__19328__auto___32728,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32728,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32720[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32720[(1)] = (1));

return statearr_32720;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32694){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32721){if((e32721 instanceof Object)){
var ex__19311__auto__ = e32721;
var statearr_32722_32743 = state_32694;
(statearr_32722_32743[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32744 = state_32694;
state_32694 = G__32744;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32728,out))
})();
var state__19330__auto__ = (function (){var statearr_32723 = f__19329__auto__.call(null);
(statearr_32723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32728);

return statearr_32723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32728,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32745 = [];
var len__17364__auto___32819 = arguments.length;
var i__17365__auto___32820 = (0);
while(true){
if((i__17365__auto___32820 < len__17364__auto___32819)){
args32745.push((arguments[i__17365__auto___32820]));

var G__32821 = (i__17365__auto___32820 + (1));
i__17365__auto___32820 = G__32821;
continue;
} else {
}
break;
}

var G__32747 = args32745.length;
switch (G__32747) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32745.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___32823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___32823,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___32823,out){
return (function (state_32789){
var state_val_32790 = (state_32789[(1)]);
if((state_val_32790 === (7))){
var inst_32785 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32791_32824 = state_32789__$1;
(statearr_32791_32824[(2)] = inst_32785);

(statearr_32791_32824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (1))){
var inst_32748 = [];
var inst_32749 = inst_32748;
var inst_32750 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32789__$1 = (function (){var statearr_32792 = state_32789;
(statearr_32792[(7)] = inst_32750);

(statearr_32792[(8)] = inst_32749);

return statearr_32792;
})();
var statearr_32793_32825 = state_32789__$1;
(statearr_32793_32825[(2)] = null);

(statearr_32793_32825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (4))){
var inst_32753 = (state_32789[(9)]);
var inst_32753__$1 = (state_32789[(2)]);
var inst_32754 = (inst_32753__$1 == null);
var inst_32755 = cljs.core.not.call(null,inst_32754);
var state_32789__$1 = (function (){var statearr_32794 = state_32789;
(statearr_32794[(9)] = inst_32753__$1);

return statearr_32794;
})();
if(inst_32755){
var statearr_32795_32826 = state_32789__$1;
(statearr_32795_32826[(1)] = (5));

} else {
var statearr_32796_32827 = state_32789__$1;
(statearr_32796_32827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (15))){
var inst_32779 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32797_32828 = state_32789__$1;
(statearr_32797_32828[(2)] = inst_32779);

(statearr_32797_32828[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (13))){
var state_32789__$1 = state_32789;
var statearr_32798_32829 = state_32789__$1;
(statearr_32798_32829[(2)] = null);

(statearr_32798_32829[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (6))){
var inst_32749 = (state_32789[(8)]);
var inst_32774 = inst_32749.length;
var inst_32775 = (inst_32774 > (0));
var state_32789__$1 = state_32789;
if(cljs.core.truth_(inst_32775)){
var statearr_32799_32830 = state_32789__$1;
(statearr_32799_32830[(1)] = (12));

} else {
var statearr_32800_32831 = state_32789__$1;
(statearr_32800_32831[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (3))){
var inst_32787 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32789__$1,inst_32787);
} else {
if((state_val_32790 === (12))){
var inst_32749 = (state_32789[(8)]);
var inst_32777 = cljs.core.vec.call(null,inst_32749);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32789__$1,(15),out,inst_32777);
} else {
if((state_val_32790 === (2))){
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32789__$1,(4),ch);
} else {
if((state_val_32790 === (11))){
var inst_32757 = (state_32789[(10)]);
var inst_32753 = (state_32789[(9)]);
var inst_32767 = (state_32789[(2)]);
var inst_32768 = [];
var inst_32769 = inst_32768.push(inst_32753);
var inst_32749 = inst_32768;
var inst_32750 = inst_32757;
var state_32789__$1 = (function (){var statearr_32801 = state_32789;
(statearr_32801[(7)] = inst_32750);

(statearr_32801[(11)] = inst_32767);

(statearr_32801[(12)] = inst_32769);

(statearr_32801[(8)] = inst_32749);

return statearr_32801;
})();
var statearr_32802_32832 = state_32789__$1;
(statearr_32802_32832[(2)] = null);

(statearr_32802_32832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (9))){
var inst_32749 = (state_32789[(8)]);
var inst_32765 = cljs.core.vec.call(null,inst_32749);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32789__$1,(11),out,inst_32765);
} else {
if((state_val_32790 === (5))){
var inst_32750 = (state_32789[(7)]);
var inst_32757 = (state_32789[(10)]);
var inst_32753 = (state_32789[(9)]);
var inst_32757__$1 = f.call(null,inst_32753);
var inst_32758 = cljs.core._EQ_.call(null,inst_32757__$1,inst_32750);
var inst_32759 = cljs.core.keyword_identical_QMARK_.call(null,inst_32750,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32760 = (inst_32758) || (inst_32759);
var state_32789__$1 = (function (){var statearr_32803 = state_32789;
(statearr_32803[(10)] = inst_32757__$1);

return statearr_32803;
})();
if(cljs.core.truth_(inst_32760)){
var statearr_32804_32833 = state_32789__$1;
(statearr_32804_32833[(1)] = (8));

} else {
var statearr_32805_32834 = state_32789__$1;
(statearr_32805_32834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (14))){
var inst_32782 = (state_32789[(2)]);
var inst_32783 = cljs.core.async.close_BANG_.call(null,out);
var state_32789__$1 = (function (){var statearr_32807 = state_32789;
(statearr_32807[(13)] = inst_32782);

return statearr_32807;
})();
var statearr_32808_32835 = state_32789__$1;
(statearr_32808_32835[(2)] = inst_32783);

(statearr_32808_32835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (10))){
var inst_32772 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32809_32836 = state_32789__$1;
(statearr_32809_32836[(2)] = inst_32772);

(statearr_32809_32836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (8))){
var inst_32757 = (state_32789[(10)]);
var inst_32749 = (state_32789[(8)]);
var inst_32753 = (state_32789[(9)]);
var inst_32762 = inst_32749.push(inst_32753);
var tmp32806 = inst_32749;
var inst_32749__$1 = tmp32806;
var inst_32750 = inst_32757;
var state_32789__$1 = (function (){var statearr_32810 = state_32789;
(statearr_32810[(7)] = inst_32750);

(statearr_32810[(8)] = inst_32749__$1);

(statearr_32810[(14)] = inst_32762);

return statearr_32810;
})();
var statearr_32811_32837 = state_32789__$1;
(statearr_32811_32837[(2)] = null);

(statearr_32811_32837[(1)] = (2));


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
});})(c__19328__auto___32823,out))
;
return ((function (switch__19307__auto__,c__19328__auto___32823,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_32815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32815[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_32815[(1)] = (1));

return statearr_32815;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_32789){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_32789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e32816){if((e32816 instanceof Object)){
var ex__19311__auto__ = e32816;
var statearr_32817_32838 = state_32789;
(statearr_32817_32838[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32839 = state_32789;
state_32789 = G__32839;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_32789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_32789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___32823,out))
})();
var state__19330__auto__ = (function (){var statearr_32818 = f__19329__auto__.call(null);
(statearr_32818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___32823);

return statearr_32818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___32823,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444419859253