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
if(typeof cljs.core.async.t_cljs$core$async24177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24177 = (function (fn_handler,f,meta24178){
this.fn_handler = fn_handler;
this.f = f;
this.meta24178 = meta24178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24179,meta24178__$1){
var self__ = this;
var _24179__$1 = this;
return (new cljs.core.async.t_cljs$core$async24177(self__.fn_handler,self__.f,meta24178__$1));
});

cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24179){
var self__ = this;
var _24179__$1 = this;
return self__.meta24178;
});

cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta24178","meta24178",1050013501,null)], null);
});

cljs.core.async.t_cljs$core$async24177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24177";

cljs.core.async.t_cljs$core$async24177.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24177");
});

cljs.core.async.__GT_t_cljs$core$async24177 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async24177(fn_handler__$1,f__$1,meta24178){
return (new cljs.core.async.t_cljs$core$async24177(fn_handler__$1,f__$1,meta24178));
});

}

return (new cljs.core.async.t_cljs$core$async24177(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args24182 = [];
var len__17364__auto___24185 = arguments.length;
var i__17365__auto___24186 = (0);
while(true){
if((i__17365__auto___24186 < len__17364__auto___24185)){
args24182.push((arguments[i__17365__auto___24186]));

var G__24187 = (i__17365__auto___24186 + (1));
i__17365__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

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
var args24189 = [];
var len__17364__auto___24192 = arguments.length;
var i__17365__auto___24193 = (0);
while(true){
if((i__17365__auto___24193 < len__17364__auto___24192)){
args24189.push((arguments[i__17365__auto___24193]));

var G__24194 = (i__17365__auto___24193 + (1));
i__17365__auto___24193 = G__24194;
continue;
} else {
}
break;
}

var G__24191 = args24189.length;
switch (G__24191) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24189.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24196 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24196);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24196,ret){
return (function (){
return fn1.call(null,val_24196);
});})(val_24196,ret))
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
var args24197 = [];
var len__17364__auto___24200 = arguments.length;
var i__17365__auto___24201 = (0);
while(true){
if((i__17365__auto___24201 < len__17364__auto___24200)){
args24197.push((arguments[i__17365__auto___24201]));

var G__24202 = (i__17365__auto___24201 + (1));
i__17365__auto___24201 = G__24202;
continue;
} else {
}
break;
}

var G__24199 = args24197.length;
switch (G__24199) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24197.length)].join('')));

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
var n__17209__auto___24204 = n;
var x_24205 = (0);
while(true){
if((x_24205 < n__17209__auto___24204)){
(a[x_24205] = (0));

var G__24206 = (x_24205 + (1));
x_24205 = G__24206;
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

var G__24207 = (i + (1));
i = G__24207;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24211 = (function (alt_flag,flag,meta24212){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24212 = meta24212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24213,meta24212__$1){
var self__ = this;
var _24213__$1 = this;
return (new cljs.core.async.t_cljs$core$async24211(self__.alt_flag,self__.flag,meta24212__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24213){
var self__ = this;
var _24213__$1 = this;
return self__.meta24212;
});})(flag))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24211.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24212","meta24212",53834096,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24211";

cljs.core.async.t_cljs$core$async24211.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24211");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24211 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24211(alt_flag__$1,flag__$1,meta24212){
return (new cljs.core.async.t_cljs$core$async24211(alt_flag__$1,flag__$1,meta24212));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24211(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24217 = (function (alt_handler,flag,cb,meta24218){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24218 = meta24218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24219,meta24218__$1){
var self__ = this;
var _24219__$1 = this;
return (new cljs.core.async.t_cljs$core$async24217(self__.alt_handler,self__.flag,self__.cb,meta24218__$1));
});

cljs.core.async.t_cljs$core$async24217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24219){
var self__ = this;
var _24219__$1 = this;
return self__.meta24218;
});

cljs.core.async.t_cljs$core$async24217.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24218","meta24218",212585490,null)], null);
});

cljs.core.async.t_cljs$core$async24217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24217";

cljs.core.async.t_cljs$core$async24217.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async24217");
});

cljs.core.async.__GT_t_cljs$core$async24217 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24217(alt_handler__$1,flag__$1,cb__$1,meta24218){
return (new cljs.core.async.t_cljs$core$async24217(alt_handler__$1,flag__$1,cb__$1,meta24218));
});

}

return (new cljs.core.async.t_cljs$core$async24217(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24220_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24220_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24221_SHARP_,port], null));
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
var G__24222 = (i + (1));
i = G__24222;
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
var len__17364__auto___24228 = arguments.length;
var i__17365__auto___24229 = (0);
while(true){
if((i__17365__auto___24229 < len__17364__auto___24228)){
args__17371__auto__.push((arguments[i__17365__auto___24229]));

var G__24230 = (i__17365__auto___24229 + (1));
i__17365__auto___24229 = G__24230;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24225){
var map__24226 = p__24225;
var map__24226__$1 = ((((!((map__24226 == null)))?((((map__24226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24226):map__24226);
var opts = map__24226__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24223){
var G__24224 = cljs.core.first.call(null,seq24223);
var seq24223__$1 = cljs.core.next.call(null,seq24223);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24224,seq24223__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args24231 = [];
var len__17364__auto___24281 = arguments.length;
var i__17365__auto___24282 = (0);
while(true){
if((i__17365__auto___24282 < len__17364__auto___24281)){
args24231.push((arguments[i__17365__auto___24282]));

var G__24283 = (i__17365__auto___24282 + (1));
i__17365__auto___24282 = G__24283;
continue;
} else {
}
break;
}

var G__24233 = args24231.length;
switch (G__24233) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24231.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19340__auto___24285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___24285){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___24285){
return (function (state_24257){
var state_val_24258 = (state_24257[(1)]);
if((state_val_24258 === (7))){
var inst_24253 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24259_24286 = state_24257__$1;
(statearr_24259_24286[(2)] = inst_24253);

(statearr_24259_24286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (1))){
var state_24257__$1 = state_24257;
var statearr_24260_24287 = state_24257__$1;
(statearr_24260_24287[(2)] = null);

(statearr_24260_24287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (4))){
var inst_24236 = (state_24257[(7)]);
var inst_24236__$1 = (state_24257[(2)]);
var inst_24237 = (inst_24236__$1 == null);
var state_24257__$1 = (function (){var statearr_24261 = state_24257;
(statearr_24261[(7)] = inst_24236__$1);

return statearr_24261;
})();
if(cljs.core.truth_(inst_24237)){
var statearr_24262_24288 = state_24257__$1;
(statearr_24262_24288[(1)] = (5));

} else {
var statearr_24263_24289 = state_24257__$1;
(statearr_24263_24289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (13))){
var state_24257__$1 = state_24257;
var statearr_24264_24290 = state_24257__$1;
(statearr_24264_24290[(2)] = null);

(statearr_24264_24290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (6))){
var inst_24236 = (state_24257[(7)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24257__$1,(11),to,inst_24236);
} else {
if((state_val_24258 === (3))){
var inst_24255 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24257__$1,inst_24255);
} else {
if((state_val_24258 === (12))){
var state_24257__$1 = state_24257;
var statearr_24265_24291 = state_24257__$1;
(statearr_24265_24291[(2)] = null);

(statearr_24265_24291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (2))){
var state_24257__$1 = state_24257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24257__$1,(4),from);
} else {
if((state_val_24258 === (11))){
var inst_24246 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
if(cljs.core.truth_(inst_24246)){
var statearr_24266_24292 = state_24257__$1;
(statearr_24266_24292[(1)] = (12));

} else {
var statearr_24267_24293 = state_24257__$1;
(statearr_24267_24293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (9))){
var state_24257__$1 = state_24257;
var statearr_24268_24294 = state_24257__$1;
(statearr_24268_24294[(2)] = null);

(statearr_24268_24294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (5))){
var state_24257__$1 = state_24257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24269_24295 = state_24257__$1;
(statearr_24269_24295[(1)] = (8));

} else {
var statearr_24270_24296 = state_24257__$1;
(statearr_24270_24296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (14))){
var inst_24251 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24271_24297 = state_24257__$1;
(statearr_24271_24297[(2)] = inst_24251);

(statearr_24271_24297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (10))){
var inst_24243 = (state_24257[(2)]);
var state_24257__$1 = state_24257;
var statearr_24272_24298 = state_24257__$1;
(statearr_24272_24298[(2)] = inst_24243);

(statearr_24272_24298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24258 === (8))){
var inst_24240 = cljs.core.async.close_BANG_.call(null,to);
var state_24257__$1 = state_24257;
var statearr_24273_24299 = state_24257__$1;
(statearr_24273_24299[(2)] = inst_24240);

(statearr_24273_24299[(1)] = (10));


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
});})(c__19340__auto___24285))
;
return ((function (switch__19319__auto__,c__19340__auto___24285){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_24277 = [null,null,null,null,null,null,null,null];
(statearr_24277[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_24277[(1)] = (1));

return statearr_24277;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_24257){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24278){if((e24278 instanceof Object)){
var ex__19323__auto__ = e24278;
var statearr_24279_24300 = state_24257;
(statearr_24279_24300[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24301 = state_24257;
state_24257 = G__24301;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_24257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_24257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___24285))
})();
var state__19342__auto__ = (function (){var statearr_24280 = f__19341__auto__.call(null);
(statearr_24280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24285);

return statearr_24280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___24285))
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
return (function (p__24485){
var vec__24486 = p__24485;
var v = cljs.core.nth.call(null,vec__24486,(0),null);
var p = cljs.core.nth.call(null,vec__24486,(1),null);
var job = vec__24486;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19340__auto___24668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results){
return (function (state_24491){
var state_val_24492 = (state_24491[(1)]);
if((state_val_24492 === (1))){
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24491__$1,(2),res,v);
} else {
if((state_val_24492 === (2))){
var inst_24488 = (state_24491[(2)]);
var inst_24489 = cljs.core.async.close_BANG_.call(null,res);
var state_24491__$1 = (function (){var statearr_24493 = state_24491;
(statearr_24493[(7)] = inst_24488);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24491__$1,inst_24489);
} else {
return null;
}
}
});})(c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results))
;
return ((function (switch__19319__auto__,c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_24497 = [null,null,null,null,null,null,null,null];
(statearr_24497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__);

(statearr_24497[(1)] = (1));

return statearr_24497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1 = (function (state_24491){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24498){if((e24498 instanceof Object)){
var ex__19323__auto__ = e24498;
var statearr_24499_24669 = state_24491;
(statearr_24499_24669[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24670 = state_24491;
state_24491 = G__24670;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = function(state_24491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1.call(this,state_24491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results))
})();
var state__19342__auto__ = (function (){var statearr_24500 = f__19341__auto__.call(null);
(statearr_24500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24668);

return statearr_24500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___24668,res,vec__24486,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24501){
var vec__24502 = p__24501;
var v = cljs.core.nth.call(null,vec__24502,(0),null);
var p = cljs.core.nth.call(null,vec__24502,(1),null);
var job = vec__24502;
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
var n__17209__auto___24671 = n;
var __24672 = (0);
while(true){
if((__24672 < n__17209__auto___24671)){
var G__24503_24673 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24503_24673) {
case "compute":
var c__19340__auto___24675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24672,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (__24672,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function (state_24516){
var state_val_24517 = (state_24516[(1)]);
if((state_val_24517 === (1))){
var state_24516__$1 = state_24516;
var statearr_24518_24676 = state_24516__$1;
(statearr_24518_24676[(2)] = null);

(statearr_24518_24676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24517 === (2))){
var state_24516__$1 = state_24516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24516__$1,(4),jobs);
} else {
if((state_val_24517 === (3))){
var inst_24514 = (state_24516[(2)]);
var state_24516__$1 = state_24516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24516__$1,inst_24514);
} else {
if((state_val_24517 === (4))){
var inst_24506 = (state_24516[(2)]);
var inst_24507 = process.call(null,inst_24506);
var state_24516__$1 = state_24516;
if(cljs.core.truth_(inst_24507)){
var statearr_24519_24677 = state_24516__$1;
(statearr_24519_24677[(1)] = (5));

} else {
var statearr_24520_24678 = state_24516__$1;
(statearr_24520_24678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24517 === (5))){
var state_24516__$1 = state_24516;
var statearr_24521_24679 = state_24516__$1;
(statearr_24521_24679[(2)] = null);

(statearr_24521_24679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24517 === (6))){
var state_24516__$1 = state_24516;
var statearr_24522_24680 = state_24516__$1;
(statearr_24522_24680[(2)] = null);

(statearr_24522_24680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24517 === (7))){
var inst_24512 = (state_24516[(2)]);
var state_24516__$1 = state_24516;
var statearr_24523_24681 = state_24516__$1;
(statearr_24523_24681[(2)] = inst_24512);

(statearr_24523_24681[(1)] = (3));


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
});})(__24672,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
;
return ((function (__24672,switch__19319__auto__,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_24527 = [null,null,null,null,null,null,null];
(statearr_24527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__);

(statearr_24527[(1)] = (1));

return statearr_24527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1 = (function (state_24516){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24528){if((e24528 instanceof Object)){
var ex__19323__auto__ = e24528;
var statearr_24529_24682 = state_24516;
(statearr_24529_24682[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24683 = state_24516;
state_24516 = G__24683;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = function(state_24516){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1.call(this,state_24516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__;
})()
;})(__24672,switch__19319__auto__,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
})();
var state__19342__auto__ = (function (){var statearr_24530 = f__19341__auto__.call(null);
(statearr_24530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24675);

return statearr_24530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(__24672,c__19340__auto___24675,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
);


break;
case "async":
var c__19340__auto___24684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24672,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (__24672,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (1))){
var state_24543__$1 = state_24543;
var statearr_24545_24685 = state_24543__$1;
(statearr_24545_24685[(2)] = null);

(statearr_24545_24685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (2))){
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24543__$1,(4),jobs);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (4))){
var inst_24533 = (state_24543[(2)]);
var inst_24534 = async.call(null,inst_24533);
var state_24543__$1 = state_24543;
if(cljs.core.truth_(inst_24534)){
var statearr_24546_24686 = state_24543__$1;
(statearr_24546_24686[(1)] = (5));

} else {
var statearr_24547_24687 = state_24543__$1;
(statearr_24547_24687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (5))){
var state_24543__$1 = state_24543;
var statearr_24548_24688 = state_24543__$1;
(statearr_24548_24688[(2)] = null);

(statearr_24548_24688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (6))){
var state_24543__$1 = state_24543;
var statearr_24549_24689 = state_24543__$1;
(statearr_24549_24689[(2)] = null);

(statearr_24549_24689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (7))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24550_24690 = state_24543__$1;
(statearr_24550_24690[(2)] = inst_24539);

(statearr_24550_24690[(1)] = (3));


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
});})(__24672,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
;
return ((function (__24672,switch__19319__auto__,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_24554 = [null,null,null,null,null,null,null];
(statearr_24554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__);

(statearr_24554[(1)] = (1));

return statearr_24554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1 = (function (state_24543){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24555){if((e24555 instanceof Object)){
var ex__19323__auto__ = e24555;
var statearr_24556_24691 = state_24543;
(statearr_24556_24691[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24692 = state_24543;
state_24543 = G__24692;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__;
})()
;})(__24672,switch__19319__auto__,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
})();
var state__19342__auto__ = (function (){var statearr_24557 = f__19341__auto__.call(null);
(statearr_24557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24684);

return statearr_24557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(__24672,c__19340__auto___24684,G__24503_24673,n__17209__auto___24671,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24693 = (__24672 + (1));
__24672 = G__24693;
continue;
} else {
}
break;
}

var c__19340__auto___24694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___24694,jobs,results,process,async){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___24694,jobs,results,process,async){
return (function (state_24579){
var state_val_24580 = (state_24579[(1)]);
if((state_val_24580 === (1))){
var state_24579__$1 = state_24579;
var statearr_24581_24695 = state_24579__$1;
(statearr_24581_24695[(2)] = null);

(statearr_24581_24695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (2))){
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24579__$1,(4),from);
} else {
if((state_val_24580 === (3))){
var inst_24577 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24579__$1,inst_24577);
} else {
if((state_val_24580 === (4))){
var inst_24560 = (state_24579[(7)]);
var inst_24560__$1 = (state_24579[(2)]);
var inst_24561 = (inst_24560__$1 == null);
var state_24579__$1 = (function (){var statearr_24582 = state_24579;
(statearr_24582[(7)] = inst_24560__$1);

return statearr_24582;
})();
if(cljs.core.truth_(inst_24561)){
var statearr_24583_24696 = state_24579__$1;
(statearr_24583_24696[(1)] = (5));

} else {
var statearr_24584_24697 = state_24579__$1;
(statearr_24584_24697[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (5))){
var inst_24563 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24579__$1 = state_24579;
var statearr_24585_24698 = state_24579__$1;
(statearr_24585_24698[(2)] = inst_24563);

(statearr_24585_24698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (6))){
var inst_24565 = (state_24579[(8)]);
var inst_24560 = (state_24579[(7)]);
var inst_24565__$1 = cljs.core.async.chan.call(null,(1));
var inst_24566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24567 = [inst_24560,inst_24565__$1];
var inst_24568 = (new cljs.core.PersistentVector(null,2,(5),inst_24566,inst_24567,null));
var state_24579__$1 = (function (){var statearr_24586 = state_24579;
(statearr_24586[(8)] = inst_24565__$1);

return statearr_24586;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24579__$1,(8),jobs,inst_24568);
} else {
if((state_val_24580 === (7))){
var inst_24575 = (state_24579[(2)]);
var state_24579__$1 = state_24579;
var statearr_24587_24699 = state_24579__$1;
(statearr_24587_24699[(2)] = inst_24575);

(statearr_24587_24699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24580 === (8))){
var inst_24565 = (state_24579[(8)]);
var inst_24570 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24588 = state_24579;
(statearr_24588[(9)] = inst_24570);

return statearr_24588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24579__$1,(9),results,inst_24565);
} else {
if((state_val_24580 === (9))){
var inst_24572 = (state_24579[(2)]);
var state_24579__$1 = (function (){var statearr_24589 = state_24579;
(statearr_24589[(10)] = inst_24572);

return statearr_24589;
})();
var statearr_24590_24700 = state_24579__$1;
(statearr_24590_24700[(2)] = null);

(statearr_24590_24700[(1)] = (2));


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
});})(c__19340__auto___24694,jobs,results,process,async))
;
return ((function (switch__19319__auto__,c__19340__auto___24694,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_24594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__);

(statearr_24594[(1)] = (1));

return statearr_24594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1 = (function (state_24579){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24595){if((e24595 instanceof Object)){
var ex__19323__auto__ = e24595;
var statearr_24596_24701 = state_24579;
(statearr_24596_24701[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24702 = state_24579;
state_24579 = G__24702;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = function(state_24579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1.call(this,state_24579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___24694,jobs,results,process,async))
})();
var state__19342__auto__ = (function (){var statearr_24597 = f__19341__auto__.call(null);
(statearr_24597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24694);

return statearr_24597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___24694,jobs,results,process,async))
);


var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__,jobs,results,process,async){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__,jobs,results,process,async){
return (function (state_24635){
var state_val_24636 = (state_24635[(1)]);
if((state_val_24636 === (7))){
var inst_24631 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24637_24703 = state_24635__$1;
(statearr_24637_24703[(2)] = inst_24631);

(statearr_24637_24703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (20))){
var state_24635__$1 = state_24635;
var statearr_24638_24704 = state_24635__$1;
(statearr_24638_24704[(2)] = null);

(statearr_24638_24704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (1))){
var state_24635__$1 = state_24635;
var statearr_24639_24705 = state_24635__$1;
(statearr_24639_24705[(2)] = null);

(statearr_24639_24705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (4))){
var inst_24600 = (state_24635[(7)]);
var inst_24600__$1 = (state_24635[(2)]);
var inst_24601 = (inst_24600__$1 == null);
var state_24635__$1 = (function (){var statearr_24640 = state_24635;
(statearr_24640[(7)] = inst_24600__$1);

return statearr_24640;
})();
if(cljs.core.truth_(inst_24601)){
var statearr_24641_24706 = state_24635__$1;
(statearr_24641_24706[(1)] = (5));

} else {
var statearr_24642_24707 = state_24635__$1;
(statearr_24642_24707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (15))){
var inst_24613 = (state_24635[(8)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24635__$1,(18),to,inst_24613);
} else {
if((state_val_24636 === (21))){
var inst_24626 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24643_24708 = state_24635__$1;
(statearr_24643_24708[(2)] = inst_24626);

(statearr_24643_24708[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (13))){
var inst_24628 = (state_24635[(2)]);
var state_24635__$1 = (function (){var statearr_24644 = state_24635;
(statearr_24644[(9)] = inst_24628);

return statearr_24644;
})();
var statearr_24645_24709 = state_24635__$1;
(statearr_24645_24709[(2)] = null);

(statearr_24645_24709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (6))){
var inst_24600 = (state_24635[(7)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(11),inst_24600);
} else {
if((state_val_24636 === (17))){
var inst_24621 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
if(cljs.core.truth_(inst_24621)){
var statearr_24646_24710 = state_24635__$1;
(statearr_24646_24710[(1)] = (19));

} else {
var statearr_24647_24711 = state_24635__$1;
(statearr_24647_24711[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (3))){
var inst_24633 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24635__$1,inst_24633);
} else {
if((state_val_24636 === (12))){
var inst_24610 = (state_24635[(10)]);
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(14),inst_24610);
} else {
if((state_val_24636 === (2))){
var state_24635__$1 = state_24635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24635__$1,(4),results);
} else {
if((state_val_24636 === (19))){
var state_24635__$1 = state_24635;
var statearr_24648_24712 = state_24635__$1;
(statearr_24648_24712[(2)] = null);

(statearr_24648_24712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (11))){
var inst_24610 = (state_24635[(2)]);
var state_24635__$1 = (function (){var statearr_24649 = state_24635;
(statearr_24649[(10)] = inst_24610);

return statearr_24649;
})();
var statearr_24650_24713 = state_24635__$1;
(statearr_24650_24713[(2)] = null);

(statearr_24650_24713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (9))){
var state_24635__$1 = state_24635;
var statearr_24651_24714 = state_24635__$1;
(statearr_24651_24714[(2)] = null);

(statearr_24651_24714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (5))){
var state_24635__$1 = state_24635;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24652_24715 = state_24635__$1;
(statearr_24652_24715[(1)] = (8));

} else {
var statearr_24653_24716 = state_24635__$1;
(statearr_24653_24716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (14))){
var inst_24615 = (state_24635[(11)]);
var inst_24613 = (state_24635[(8)]);
var inst_24613__$1 = (state_24635[(2)]);
var inst_24614 = (inst_24613__$1 == null);
var inst_24615__$1 = cljs.core.not.call(null,inst_24614);
var state_24635__$1 = (function (){var statearr_24654 = state_24635;
(statearr_24654[(11)] = inst_24615__$1);

(statearr_24654[(8)] = inst_24613__$1);

return statearr_24654;
})();
if(inst_24615__$1){
var statearr_24655_24717 = state_24635__$1;
(statearr_24655_24717[(1)] = (15));

} else {
var statearr_24656_24718 = state_24635__$1;
(statearr_24656_24718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (16))){
var inst_24615 = (state_24635[(11)]);
var state_24635__$1 = state_24635;
var statearr_24657_24719 = state_24635__$1;
(statearr_24657_24719[(2)] = inst_24615);

(statearr_24657_24719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (10))){
var inst_24607 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24658_24720 = state_24635__$1;
(statearr_24658_24720[(2)] = inst_24607);

(statearr_24658_24720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (18))){
var inst_24618 = (state_24635[(2)]);
var state_24635__$1 = state_24635;
var statearr_24659_24721 = state_24635__$1;
(statearr_24659_24721[(2)] = inst_24618);

(statearr_24659_24721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24636 === (8))){
var inst_24604 = cljs.core.async.close_BANG_.call(null,to);
var state_24635__$1 = state_24635;
var statearr_24660_24722 = state_24635__$1;
(statearr_24660_24722[(2)] = inst_24604);

(statearr_24660_24722[(1)] = (10));


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
});})(c__19340__auto__,jobs,results,process,async))
;
return ((function (switch__19319__auto__,c__19340__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_24664 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24664[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__);

(statearr_24664[(1)] = (1));

return statearr_24664;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1 = (function (state_24635){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24665){if((e24665 instanceof Object)){
var ex__19323__auto__ = e24665;
var statearr_24666_24723 = state_24635;
(statearr_24666_24723[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24724 = state_24635;
state_24635 = G__24724;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__ = function(state_24635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1.call(this,state_24635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__,jobs,results,process,async))
})();
var state__19342__auto__ = (function (){var statearr_24667 = f__19341__auto__.call(null);
(statearr_24667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_24667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__,jobs,results,process,async))
);

return c__19340__auto__;
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
var args24725 = [];
var len__17364__auto___24728 = arguments.length;
var i__17365__auto___24729 = (0);
while(true){
if((i__17365__auto___24729 < len__17364__auto___24728)){
args24725.push((arguments[i__17365__auto___24729]));

var G__24730 = (i__17365__auto___24729 + (1));
i__17365__auto___24729 = G__24730;
continue;
} else {
}
break;
}

var G__24727 = args24725.length;
switch (G__24727) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24725.length)].join('')));

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
var args24732 = [];
var len__17364__auto___24735 = arguments.length;
var i__17365__auto___24736 = (0);
while(true){
if((i__17365__auto___24736 < len__17364__auto___24735)){
args24732.push((arguments[i__17365__auto___24736]));

var G__24737 = (i__17365__auto___24736 + (1));
i__17365__auto___24736 = G__24737;
continue;
} else {
}
break;
}

var G__24734 = args24732.length;
switch (G__24734) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24732.length)].join('')));

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
var args24739 = [];
var len__17364__auto___24792 = arguments.length;
var i__17365__auto___24793 = (0);
while(true){
if((i__17365__auto___24793 < len__17364__auto___24792)){
args24739.push((arguments[i__17365__auto___24793]));

var G__24794 = (i__17365__auto___24793 + (1));
i__17365__auto___24793 = G__24794;
continue;
} else {
}
break;
}

var G__24741 = args24739.length;
switch (G__24741) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24739.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19340__auto___24796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___24796,tc,fc){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___24796,tc,fc){
return (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24763 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24769_24797 = state_24767__$1;
(statearr_24769_24797[(2)] = inst_24763);

(statearr_24769_24797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (1))){
var state_24767__$1 = state_24767;
var statearr_24770_24798 = state_24767__$1;
(statearr_24770_24798[(2)] = null);

(statearr_24770_24798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (4))){
var inst_24744 = (state_24767[(7)]);
var inst_24744__$1 = (state_24767[(2)]);
var inst_24745 = (inst_24744__$1 == null);
var state_24767__$1 = (function (){var statearr_24771 = state_24767;
(statearr_24771[(7)] = inst_24744__$1);

return statearr_24771;
})();
if(cljs.core.truth_(inst_24745)){
var statearr_24772_24799 = state_24767__$1;
(statearr_24772_24799[(1)] = (5));

} else {
var statearr_24773_24800 = state_24767__$1;
(statearr_24773_24800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (13))){
var state_24767__$1 = state_24767;
var statearr_24774_24801 = state_24767__$1;
(statearr_24774_24801[(2)] = null);

(statearr_24774_24801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (6))){
var inst_24744 = (state_24767[(7)]);
var inst_24750 = p.call(null,inst_24744);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24750)){
var statearr_24775_24802 = state_24767__$1;
(statearr_24775_24802[(1)] = (9));

} else {
var statearr_24776_24803 = state_24767__$1;
(statearr_24776_24803[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (3))){
var inst_24765 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (12))){
var state_24767__$1 = state_24767;
var statearr_24777_24804 = state_24767__$1;
(statearr_24777_24804[(2)] = null);

(statearr_24777_24804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (2))){
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24767__$1,(4),ch);
} else {
if((state_val_24768 === (11))){
var inst_24744 = (state_24767[(7)]);
var inst_24754 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24767__$1,(8),inst_24754,inst_24744);
} else {
if((state_val_24768 === (9))){
var state_24767__$1 = state_24767;
var statearr_24778_24805 = state_24767__$1;
(statearr_24778_24805[(2)] = tc);

(statearr_24778_24805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (5))){
var inst_24747 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24748 = cljs.core.async.close_BANG_.call(null,fc);
var state_24767__$1 = (function (){var statearr_24779 = state_24767;
(statearr_24779[(8)] = inst_24747);

return statearr_24779;
})();
var statearr_24780_24806 = state_24767__$1;
(statearr_24780_24806[(2)] = inst_24748);

(statearr_24780_24806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (14))){
var inst_24761 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24781_24807 = state_24767__$1;
(statearr_24781_24807[(2)] = inst_24761);

(statearr_24781_24807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (10))){
var state_24767__$1 = state_24767;
var statearr_24782_24808 = state_24767__$1;
(statearr_24782_24808[(2)] = fc);

(statearr_24782_24808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (8))){
var inst_24756 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24756)){
var statearr_24783_24809 = state_24767__$1;
(statearr_24783_24809[(1)] = (12));

} else {
var statearr_24784_24810 = state_24767__$1;
(statearr_24784_24810[(1)] = (13));

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
});})(c__19340__auto___24796,tc,fc))
;
return ((function (switch__19319__auto__,c__19340__auto___24796,tc,fc){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_24788 = [null,null,null,null,null,null,null,null,null];
(statearr_24788[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_24788[(1)] = (1));

return statearr_24788;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_24767){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object)){
var ex__19323__auto__ = e24789;
var statearr_24790_24811 = state_24767;
(statearr_24790_24811[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24812 = state_24767;
state_24767 = G__24812;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___24796,tc,fc))
})();
var state__19342__auto__ = (function (){var statearr_24791 = f__19341__auto__.call(null);
(statearr_24791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___24796);

return statearr_24791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___24796,tc,fc))
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
var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__){
return (function (state_24859){
var state_val_24860 = (state_24859[(1)]);
if((state_val_24860 === (1))){
var inst_24845 = init;
var state_24859__$1 = (function (){var statearr_24861 = state_24859;
(statearr_24861[(7)] = inst_24845);

return statearr_24861;
})();
var statearr_24862_24877 = state_24859__$1;
(statearr_24862_24877[(2)] = null);

(statearr_24862_24877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24860 === (2))){
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24859__$1,(4),ch);
} else {
if((state_val_24860 === (3))){
var inst_24857 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24859__$1,inst_24857);
} else {
if((state_val_24860 === (4))){
var inst_24848 = (state_24859[(8)]);
var inst_24848__$1 = (state_24859[(2)]);
var inst_24849 = (inst_24848__$1 == null);
var state_24859__$1 = (function (){var statearr_24863 = state_24859;
(statearr_24863[(8)] = inst_24848__$1);

return statearr_24863;
})();
if(cljs.core.truth_(inst_24849)){
var statearr_24864_24878 = state_24859__$1;
(statearr_24864_24878[(1)] = (5));

} else {
var statearr_24865_24879 = state_24859__$1;
(statearr_24865_24879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24860 === (5))){
var inst_24845 = (state_24859[(7)]);
var state_24859__$1 = state_24859;
var statearr_24866_24880 = state_24859__$1;
(statearr_24866_24880[(2)] = inst_24845);

(statearr_24866_24880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24860 === (6))){
var inst_24845 = (state_24859[(7)]);
var inst_24848 = (state_24859[(8)]);
var inst_24852 = f.call(null,inst_24845,inst_24848);
var inst_24845__$1 = inst_24852;
var state_24859__$1 = (function (){var statearr_24867 = state_24859;
(statearr_24867[(7)] = inst_24845__$1);

return statearr_24867;
})();
var statearr_24868_24881 = state_24859__$1;
(statearr_24868_24881[(2)] = null);

(statearr_24868_24881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24860 === (7))){
var inst_24855 = (state_24859[(2)]);
var state_24859__$1 = state_24859;
var statearr_24869_24882 = state_24859__$1;
(statearr_24869_24882[(2)] = inst_24855);

(statearr_24869_24882[(1)] = (3));


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
});})(c__19340__auto__))
;
return ((function (switch__19319__auto__,c__19340__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19320__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19320__auto____0 = (function (){
var statearr_24873 = [null,null,null,null,null,null,null,null,null];
(statearr_24873[(0)] = cljs$core$async$reduce_$_state_machine__19320__auto__);

(statearr_24873[(1)] = (1));

return statearr_24873;
});
var cljs$core$async$reduce_$_state_machine__19320__auto____1 = (function (state_24859){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24874){if((e24874 instanceof Object)){
var ex__19323__auto__ = e24874;
var statearr_24875_24883 = state_24859;
(statearr_24875_24883[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24884 = state_24859;
state_24859 = G__24884;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19320__auto__ = function(state_24859){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19320__auto____1.call(this,state_24859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19320__auto____0;
cljs$core$async$reduce_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19320__auto____1;
return cljs$core$async$reduce_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__))
})();
var state__19342__auto__ = (function (){var statearr_24876 = f__19341__auto__.call(null);
(statearr_24876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_24876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__))
);

return c__19340__auto__;
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
var args24885 = [];
var len__17364__auto___24937 = arguments.length;
var i__17365__auto___24938 = (0);
while(true){
if((i__17365__auto___24938 < len__17364__auto___24937)){
args24885.push((arguments[i__17365__auto___24938]));

var G__24939 = (i__17365__auto___24938 + (1));
i__17365__auto___24938 = G__24939;
continue;
} else {
}
break;
}

var G__24887 = args24885.length;
switch (G__24887) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24885.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__){
return (function (state_24912){
var state_val_24913 = (state_24912[(1)]);
if((state_val_24913 === (7))){
var inst_24894 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24914_24941 = state_24912__$1;
(statearr_24914_24941[(2)] = inst_24894);

(statearr_24914_24941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (1))){
var inst_24888 = cljs.core.seq.call(null,coll);
var inst_24889 = inst_24888;
var state_24912__$1 = (function (){var statearr_24915 = state_24912;
(statearr_24915[(7)] = inst_24889);

return statearr_24915;
})();
var statearr_24916_24942 = state_24912__$1;
(statearr_24916_24942[(2)] = null);

(statearr_24916_24942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (4))){
var inst_24889 = (state_24912[(7)]);
var inst_24892 = cljs.core.first.call(null,inst_24889);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(7),ch,inst_24892);
} else {
if((state_val_24913 === (13))){
var inst_24906 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24917_24943 = state_24912__$1;
(statearr_24917_24943[(2)] = inst_24906);

(statearr_24917_24943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (6))){
var inst_24897 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
if(cljs.core.truth_(inst_24897)){
var statearr_24918_24944 = state_24912__$1;
(statearr_24918_24944[(1)] = (8));

} else {
var statearr_24919_24945 = state_24912__$1;
(statearr_24919_24945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (3))){
var inst_24910 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24912__$1,inst_24910);
} else {
if((state_val_24913 === (12))){
var state_24912__$1 = state_24912;
var statearr_24920_24946 = state_24912__$1;
(statearr_24920_24946[(2)] = null);

(statearr_24920_24946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (2))){
var inst_24889 = (state_24912[(7)]);
var state_24912__$1 = state_24912;
if(cljs.core.truth_(inst_24889)){
var statearr_24921_24947 = state_24912__$1;
(statearr_24921_24947[(1)] = (4));

} else {
var statearr_24922_24948 = state_24912__$1;
(statearr_24922_24948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (11))){
var inst_24903 = cljs.core.async.close_BANG_.call(null,ch);
var state_24912__$1 = state_24912;
var statearr_24923_24949 = state_24912__$1;
(statearr_24923_24949[(2)] = inst_24903);

(statearr_24923_24949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (9))){
var state_24912__$1 = state_24912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24924_24950 = state_24912__$1;
(statearr_24924_24950[(1)] = (11));

} else {
var statearr_24925_24951 = state_24912__$1;
(statearr_24925_24951[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (5))){
var inst_24889 = (state_24912[(7)]);
var state_24912__$1 = state_24912;
var statearr_24926_24952 = state_24912__$1;
(statearr_24926_24952[(2)] = inst_24889);

(statearr_24926_24952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (10))){
var inst_24908 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24927_24953 = state_24912__$1;
(statearr_24927_24953[(2)] = inst_24908);

(statearr_24927_24953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (8))){
var inst_24889 = (state_24912[(7)]);
var inst_24899 = cljs.core.next.call(null,inst_24889);
var inst_24889__$1 = inst_24899;
var state_24912__$1 = (function (){var statearr_24928 = state_24912;
(statearr_24928[(7)] = inst_24889__$1);

return statearr_24928;
})();
var statearr_24929_24954 = state_24912__$1;
(statearr_24929_24954[(2)] = null);

(statearr_24929_24954[(1)] = (2));


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
});})(c__19340__auto__))
;
return ((function (switch__19319__auto__,c__19340__auto__){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_24933 = [null,null,null,null,null,null,null,null];
(statearr_24933[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_24933[(1)] = (1));

return statearr_24933;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_24912){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_24912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e24934){if((e24934 instanceof Object)){
var ex__19323__auto__ = e24934;
var statearr_24935_24955 = state_24912;
(statearr_24935_24955[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24956 = state_24912;
state_24912 = G__24956;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_24912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_24912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__))
})();
var state__19342__auto__ = (function (){var statearr_24936 = f__19341__auto__.call(null);
(statearr_24936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_24936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__))
);

return c__19340__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async25178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25178 = (function (mult,ch,cs,meta25179){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25179 = meta25179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25180,meta25179__$1){
var self__ = this;
var _25180__$1 = this;
return (new cljs.core.async.t_cljs$core$async25178(self__.mult,self__.ch,self__.cs,meta25179__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25180){
var self__ = this;
var _25180__$1 = this;
return self__.meta25179;
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25179","meta25179",-367598564,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25178";

cljs.core.async.t_cljs$core$async25178.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25178");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25178 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25178(mult__$1,ch__$1,cs__$1,meta25179){
return (new cljs.core.async.t_cljs$core$async25178(mult__$1,ch__$1,cs__$1,meta25179));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25178(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19340__auto___25399 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___25399,cs,m,dchan,dctr,done){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___25399,cs,m,dchan,dctr,done){
return (function (state_25311){
var state_val_25312 = (state_25311[(1)]);
if((state_val_25312 === (7))){
var inst_25307 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25313_25400 = state_25311__$1;
(statearr_25313_25400[(2)] = inst_25307);

(statearr_25313_25400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (20))){
var inst_25212 = (state_25311[(7)]);
var inst_25222 = cljs.core.first.call(null,inst_25212);
var inst_25223 = cljs.core.nth.call(null,inst_25222,(0),null);
var inst_25224 = cljs.core.nth.call(null,inst_25222,(1),null);
var state_25311__$1 = (function (){var statearr_25314 = state_25311;
(statearr_25314[(8)] = inst_25223);

return statearr_25314;
})();
if(cljs.core.truth_(inst_25224)){
var statearr_25315_25401 = state_25311__$1;
(statearr_25315_25401[(1)] = (22));

} else {
var statearr_25316_25402 = state_25311__$1;
(statearr_25316_25402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (27))){
var inst_25259 = (state_25311[(9)]);
var inst_25183 = (state_25311[(10)]);
var inst_25254 = (state_25311[(11)]);
var inst_25252 = (state_25311[(12)]);
var inst_25259__$1 = cljs.core._nth.call(null,inst_25252,inst_25254);
var inst_25260 = cljs.core.async.put_BANG_.call(null,inst_25259__$1,inst_25183,done);
var state_25311__$1 = (function (){var statearr_25317 = state_25311;
(statearr_25317[(9)] = inst_25259__$1);

return statearr_25317;
})();
if(cljs.core.truth_(inst_25260)){
var statearr_25318_25403 = state_25311__$1;
(statearr_25318_25403[(1)] = (30));

} else {
var statearr_25319_25404 = state_25311__$1;
(statearr_25319_25404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (1))){
var state_25311__$1 = state_25311;
var statearr_25320_25405 = state_25311__$1;
(statearr_25320_25405[(2)] = null);

(statearr_25320_25405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (24))){
var inst_25212 = (state_25311[(7)]);
var inst_25229 = (state_25311[(2)]);
var inst_25230 = cljs.core.next.call(null,inst_25212);
var inst_25192 = inst_25230;
var inst_25193 = null;
var inst_25194 = (0);
var inst_25195 = (0);
var state_25311__$1 = (function (){var statearr_25321 = state_25311;
(statearr_25321[(13)] = inst_25192);

(statearr_25321[(14)] = inst_25229);

(statearr_25321[(15)] = inst_25194);

(statearr_25321[(16)] = inst_25195);

(statearr_25321[(17)] = inst_25193);

return statearr_25321;
})();
var statearr_25322_25406 = state_25311__$1;
(statearr_25322_25406[(2)] = null);

(statearr_25322_25406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (39))){
var state_25311__$1 = state_25311;
var statearr_25326_25407 = state_25311__$1;
(statearr_25326_25407[(2)] = null);

(statearr_25326_25407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (4))){
var inst_25183 = (state_25311[(10)]);
var inst_25183__$1 = (state_25311[(2)]);
var inst_25184 = (inst_25183__$1 == null);
var state_25311__$1 = (function (){var statearr_25327 = state_25311;
(statearr_25327[(10)] = inst_25183__$1);

return statearr_25327;
})();
if(cljs.core.truth_(inst_25184)){
var statearr_25328_25408 = state_25311__$1;
(statearr_25328_25408[(1)] = (5));

} else {
var statearr_25329_25409 = state_25311__$1;
(statearr_25329_25409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (15))){
var inst_25192 = (state_25311[(13)]);
var inst_25194 = (state_25311[(15)]);
var inst_25195 = (state_25311[(16)]);
var inst_25193 = (state_25311[(17)]);
var inst_25208 = (state_25311[(2)]);
var inst_25209 = (inst_25195 + (1));
var tmp25323 = inst_25192;
var tmp25324 = inst_25194;
var tmp25325 = inst_25193;
var inst_25192__$1 = tmp25323;
var inst_25193__$1 = tmp25325;
var inst_25194__$1 = tmp25324;
var inst_25195__$1 = inst_25209;
var state_25311__$1 = (function (){var statearr_25330 = state_25311;
(statearr_25330[(13)] = inst_25192__$1);

(statearr_25330[(15)] = inst_25194__$1);

(statearr_25330[(16)] = inst_25195__$1);

(statearr_25330[(17)] = inst_25193__$1);

(statearr_25330[(18)] = inst_25208);

return statearr_25330;
})();
var statearr_25331_25410 = state_25311__$1;
(statearr_25331_25410[(2)] = null);

(statearr_25331_25410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (21))){
var inst_25233 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25335_25411 = state_25311__$1;
(statearr_25335_25411[(2)] = inst_25233);

(statearr_25335_25411[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (31))){
var inst_25259 = (state_25311[(9)]);
var inst_25263 = done.call(null,null);
var inst_25264 = cljs.core.async.untap_STAR_.call(null,m,inst_25259);
var state_25311__$1 = (function (){var statearr_25336 = state_25311;
(statearr_25336[(19)] = inst_25263);

return statearr_25336;
})();
var statearr_25337_25412 = state_25311__$1;
(statearr_25337_25412[(2)] = inst_25264);

(statearr_25337_25412[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (32))){
var inst_25254 = (state_25311[(11)]);
var inst_25252 = (state_25311[(12)]);
var inst_25251 = (state_25311[(20)]);
var inst_25253 = (state_25311[(21)]);
var inst_25266 = (state_25311[(2)]);
var inst_25267 = (inst_25254 + (1));
var tmp25332 = inst_25252;
var tmp25333 = inst_25251;
var tmp25334 = inst_25253;
var inst_25251__$1 = tmp25333;
var inst_25252__$1 = tmp25332;
var inst_25253__$1 = tmp25334;
var inst_25254__$1 = inst_25267;
var state_25311__$1 = (function (){var statearr_25338 = state_25311;
(statearr_25338[(11)] = inst_25254__$1);

(statearr_25338[(12)] = inst_25252__$1);

(statearr_25338[(20)] = inst_25251__$1);

(statearr_25338[(21)] = inst_25253__$1);

(statearr_25338[(22)] = inst_25266);

return statearr_25338;
})();
var statearr_25339_25413 = state_25311__$1;
(statearr_25339_25413[(2)] = null);

(statearr_25339_25413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (40))){
var inst_25279 = (state_25311[(23)]);
var inst_25283 = done.call(null,null);
var inst_25284 = cljs.core.async.untap_STAR_.call(null,m,inst_25279);
var state_25311__$1 = (function (){var statearr_25340 = state_25311;
(statearr_25340[(24)] = inst_25283);

return statearr_25340;
})();
var statearr_25341_25414 = state_25311__$1;
(statearr_25341_25414[(2)] = inst_25284);

(statearr_25341_25414[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (33))){
var inst_25270 = (state_25311[(25)]);
var inst_25272 = cljs.core.chunked_seq_QMARK_.call(null,inst_25270);
var state_25311__$1 = state_25311;
if(inst_25272){
var statearr_25342_25415 = state_25311__$1;
(statearr_25342_25415[(1)] = (36));

} else {
var statearr_25343_25416 = state_25311__$1;
(statearr_25343_25416[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (13))){
var inst_25202 = (state_25311[(26)]);
var inst_25205 = cljs.core.async.close_BANG_.call(null,inst_25202);
var state_25311__$1 = state_25311;
var statearr_25344_25417 = state_25311__$1;
(statearr_25344_25417[(2)] = inst_25205);

(statearr_25344_25417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (22))){
var inst_25223 = (state_25311[(8)]);
var inst_25226 = cljs.core.async.close_BANG_.call(null,inst_25223);
var state_25311__$1 = state_25311;
var statearr_25345_25418 = state_25311__$1;
(statearr_25345_25418[(2)] = inst_25226);

(statearr_25345_25418[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (36))){
var inst_25270 = (state_25311[(25)]);
var inst_25274 = cljs.core.chunk_first.call(null,inst_25270);
var inst_25275 = cljs.core.chunk_rest.call(null,inst_25270);
var inst_25276 = cljs.core.count.call(null,inst_25274);
var inst_25251 = inst_25275;
var inst_25252 = inst_25274;
var inst_25253 = inst_25276;
var inst_25254 = (0);
var state_25311__$1 = (function (){var statearr_25346 = state_25311;
(statearr_25346[(11)] = inst_25254);

(statearr_25346[(12)] = inst_25252);

(statearr_25346[(20)] = inst_25251);

(statearr_25346[(21)] = inst_25253);

return statearr_25346;
})();
var statearr_25347_25419 = state_25311__$1;
(statearr_25347_25419[(2)] = null);

(statearr_25347_25419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (41))){
var inst_25270 = (state_25311[(25)]);
var inst_25286 = (state_25311[(2)]);
var inst_25287 = cljs.core.next.call(null,inst_25270);
var inst_25251 = inst_25287;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25311__$1 = (function (){var statearr_25348 = state_25311;
(statearr_25348[(27)] = inst_25286);

(statearr_25348[(11)] = inst_25254);

(statearr_25348[(12)] = inst_25252);

(statearr_25348[(20)] = inst_25251);

(statearr_25348[(21)] = inst_25253);

return statearr_25348;
})();
var statearr_25349_25420 = state_25311__$1;
(statearr_25349_25420[(2)] = null);

(statearr_25349_25420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (43))){
var state_25311__$1 = state_25311;
var statearr_25350_25421 = state_25311__$1;
(statearr_25350_25421[(2)] = null);

(statearr_25350_25421[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (29))){
var inst_25295 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25351_25422 = state_25311__$1;
(statearr_25351_25422[(2)] = inst_25295);

(statearr_25351_25422[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (44))){
var inst_25304 = (state_25311[(2)]);
var state_25311__$1 = (function (){var statearr_25352 = state_25311;
(statearr_25352[(28)] = inst_25304);

return statearr_25352;
})();
var statearr_25353_25423 = state_25311__$1;
(statearr_25353_25423[(2)] = null);

(statearr_25353_25423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (6))){
var inst_25243 = (state_25311[(29)]);
var inst_25242 = cljs.core.deref.call(null,cs);
var inst_25243__$1 = cljs.core.keys.call(null,inst_25242);
var inst_25244 = cljs.core.count.call(null,inst_25243__$1);
var inst_25245 = cljs.core.reset_BANG_.call(null,dctr,inst_25244);
var inst_25250 = cljs.core.seq.call(null,inst_25243__$1);
var inst_25251 = inst_25250;
var inst_25252 = null;
var inst_25253 = (0);
var inst_25254 = (0);
var state_25311__$1 = (function (){var statearr_25354 = state_25311;
(statearr_25354[(29)] = inst_25243__$1);

(statearr_25354[(30)] = inst_25245);

(statearr_25354[(11)] = inst_25254);

(statearr_25354[(12)] = inst_25252);

(statearr_25354[(20)] = inst_25251);

(statearr_25354[(21)] = inst_25253);

return statearr_25354;
})();
var statearr_25355_25424 = state_25311__$1;
(statearr_25355_25424[(2)] = null);

(statearr_25355_25424[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (28))){
var inst_25270 = (state_25311[(25)]);
var inst_25251 = (state_25311[(20)]);
var inst_25270__$1 = cljs.core.seq.call(null,inst_25251);
var state_25311__$1 = (function (){var statearr_25356 = state_25311;
(statearr_25356[(25)] = inst_25270__$1);

return statearr_25356;
})();
if(inst_25270__$1){
var statearr_25357_25425 = state_25311__$1;
(statearr_25357_25425[(1)] = (33));

} else {
var statearr_25358_25426 = state_25311__$1;
(statearr_25358_25426[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (25))){
var inst_25254 = (state_25311[(11)]);
var inst_25253 = (state_25311[(21)]);
var inst_25256 = (inst_25254 < inst_25253);
var inst_25257 = inst_25256;
var state_25311__$1 = state_25311;
if(cljs.core.truth_(inst_25257)){
var statearr_25359_25427 = state_25311__$1;
(statearr_25359_25427[(1)] = (27));

} else {
var statearr_25360_25428 = state_25311__$1;
(statearr_25360_25428[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (34))){
var state_25311__$1 = state_25311;
var statearr_25361_25429 = state_25311__$1;
(statearr_25361_25429[(2)] = null);

(statearr_25361_25429[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (17))){
var state_25311__$1 = state_25311;
var statearr_25362_25430 = state_25311__$1;
(statearr_25362_25430[(2)] = null);

(statearr_25362_25430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (3))){
var inst_25309 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25311__$1,inst_25309);
} else {
if((state_val_25312 === (12))){
var inst_25238 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25363_25431 = state_25311__$1;
(statearr_25363_25431[(2)] = inst_25238);

(statearr_25363_25431[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (2))){
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25311__$1,(4),ch);
} else {
if((state_val_25312 === (23))){
var state_25311__$1 = state_25311;
var statearr_25364_25432 = state_25311__$1;
(statearr_25364_25432[(2)] = null);

(statearr_25364_25432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (35))){
var inst_25293 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25365_25433 = state_25311__$1;
(statearr_25365_25433[(2)] = inst_25293);

(statearr_25365_25433[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (19))){
var inst_25212 = (state_25311[(7)]);
var inst_25216 = cljs.core.chunk_first.call(null,inst_25212);
var inst_25217 = cljs.core.chunk_rest.call(null,inst_25212);
var inst_25218 = cljs.core.count.call(null,inst_25216);
var inst_25192 = inst_25217;
var inst_25193 = inst_25216;
var inst_25194 = inst_25218;
var inst_25195 = (0);
var state_25311__$1 = (function (){var statearr_25366 = state_25311;
(statearr_25366[(13)] = inst_25192);

(statearr_25366[(15)] = inst_25194);

(statearr_25366[(16)] = inst_25195);

(statearr_25366[(17)] = inst_25193);

return statearr_25366;
})();
var statearr_25367_25434 = state_25311__$1;
(statearr_25367_25434[(2)] = null);

(statearr_25367_25434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (11))){
var inst_25192 = (state_25311[(13)]);
var inst_25212 = (state_25311[(7)]);
var inst_25212__$1 = cljs.core.seq.call(null,inst_25192);
var state_25311__$1 = (function (){var statearr_25368 = state_25311;
(statearr_25368[(7)] = inst_25212__$1);

return statearr_25368;
})();
if(inst_25212__$1){
var statearr_25369_25435 = state_25311__$1;
(statearr_25369_25435[(1)] = (16));

} else {
var statearr_25370_25436 = state_25311__$1;
(statearr_25370_25436[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (9))){
var inst_25240 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25371_25437 = state_25311__$1;
(statearr_25371_25437[(2)] = inst_25240);

(statearr_25371_25437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (5))){
var inst_25190 = cljs.core.deref.call(null,cs);
var inst_25191 = cljs.core.seq.call(null,inst_25190);
var inst_25192 = inst_25191;
var inst_25193 = null;
var inst_25194 = (0);
var inst_25195 = (0);
var state_25311__$1 = (function (){var statearr_25372 = state_25311;
(statearr_25372[(13)] = inst_25192);

(statearr_25372[(15)] = inst_25194);

(statearr_25372[(16)] = inst_25195);

(statearr_25372[(17)] = inst_25193);

return statearr_25372;
})();
var statearr_25373_25438 = state_25311__$1;
(statearr_25373_25438[(2)] = null);

(statearr_25373_25438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (14))){
var state_25311__$1 = state_25311;
var statearr_25374_25439 = state_25311__$1;
(statearr_25374_25439[(2)] = null);

(statearr_25374_25439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (45))){
var inst_25301 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25375_25440 = state_25311__$1;
(statearr_25375_25440[(2)] = inst_25301);

(statearr_25375_25440[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (26))){
var inst_25243 = (state_25311[(29)]);
var inst_25297 = (state_25311[(2)]);
var inst_25298 = cljs.core.seq.call(null,inst_25243);
var state_25311__$1 = (function (){var statearr_25376 = state_25311;
(statearr_25376[(31)] = inst_25297);

return statearr_25376;
})();
if(inst_25298){
var statearr_25377_25441 = state_25311__$1;
(statearr_25377_25441[(1)] = (42));

} else {
var statearr_25378_25442 = state_25311__$1;
(statearr_25378_25442[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (16))){
var inst_25212 = (state_25311[(7)]);
var inst_25214 = cljs.core.chunked_seq_QMARK_.call(null,inst_25212);
var state_25311__$1 = state_25311;
if(inst_25214){
var statearr_25379_25443 = state_25311__$1;
(statearr_25379_25443[(1)] = (19));

} else {
var statearr_25380_25444 = state_25311__$1;
(statearr_25380_25444[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (38))){
var inst_25290 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25381_25445 = state_25311__$1;
(statearr_25381_25445[(2)] = inst_25290);

(statearr_25381_25445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (30))){
var state_25311__$1 = state_25311;
var statearr_25382_25446 = state_25311__$1;
(statearr_25382_25446[(2)] = null);

(statearr_25382_25446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (10))){
var inst_25195 = (state_25311[(16)]);
var inst_25193 = (state_25311[(17)]);
var inst_25201 = cljs.core._nth.call(null,inst_25193,inst_25195);
var inst_25202 = cljs.core.nth.call(null,inst_25201,(0),null);
var inst_25203 = cljs.core.nth.call(null,inst_25201,(1),null);
var state_25311__$1 = (function (){var statearr_25383 = state_25311;
(statearr_25383[(26)] = inst_25202);

return statearr_25383;
})();
if(cljs.core.truth_(inst_25203)){
var statearr_25384_25447 = state_25311__$1;
(statearr_25384_25447[(1)] = (13));

} else {
var statearr_25385_25448 = state_25311__$1;
(statearr_25385_25448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (18))){
var inst_25236 = (state_25311[(2)]);
var state_25311__$1 = state_25311;
var statearr_25386_25449 = state_25311__$1;
(statearr_25386_25449[(2)] = inst_25236);

(statearr_25386_25449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (42))){
var state_25311__$1 = state_25311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25311__$1,(45),dchan);
} else {
if((state_val_25312 === (37))){
var inst_25279 = (state_25311[(23)]);
var inst_25270 = (state_25311[(25)]);
var inst_25183 = (state_25311[(10)]);
var inst_25279__$1 = cljs.core.first.call(null,inst_25270);
var inst_25280 = cljs.core.async.put_BANG_.call(null,inst_25279__$1,inst_25183,done);
var state_25311__$1 = (function (){var statearr_25387 = state_25311;
(statearr_25387[(23)] = inst_25279__$1);

return statearr_25387;
})();
if(cljs.core.truth_(inst_25280)){
var statearr_25388_25450 = state_25311__$1;
(statearr_25388_25450[(1)] = (39));

} else {
var statearr_25389_25451 = state_25311__$1;
(statearr_25389_25451[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25312 === (8))){
var inst_25194 = (state_25311[(15)]);
var inst_25195 = (state_25311[(16)]);
var inst_25197 = (inst_25195 < inst_25194);
var inst_25198 = inst_25197;
var state_25311__$1 = state_25311;
if(cljs.core.truth_(inst_25198)){
var statearr_25390_25452 = state_25311__$1;
(statearr_25390_25452[(1)] = (10));

} else {
var statearr_25391_25453 = state_25311__$1;
(statearr_25391_25453[(1)] = (11));

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
});})(c__19340__auto___25399,cs,m,dchan,dctr,done))
;
return ((function (switch__19319__auto__,c__19340__auto___25399,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19320__auto__ = null;
var cljs$core$async$mult_$_state_machine__19320__auto____0 = (function (){
var statearr_25395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = cljs$core$async$mult_$_state_machine__19320__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var cljs$core$async$mult_$_state_machine__19320__auto____1 = (function (state_25311){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_25311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__19323__auto__ = e25396;
var statearr_25397_25454 = state_25311;
(statearr_25397_25454[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25311;
state_25311 = G__25455;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19320__auto__ = function(state_25311){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19320__auto____1.call(this,state_25311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19320__auto____0;
cljs$core$async$mult_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19320__auto____1;
return cljs$core$async$mult_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___25399,cs,m,dchan,dctr,done))
})();
var state__19342__auto__ = (function (){var statearr_25398 = f__19341__auto__.call(null);
(statearr_25398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___25399);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___25399,cs,m,dchan,dctr,done))
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
var args25456 = [];
var len__17364__auto___25459 = arguments.length;
var i__17365__auto___25460 = (0);
while(true){
if((i__17365__auto___25460 < len__17364__auto___25459)){
args25456.push((arguments[i__17365__auto___25460]));

var G__25461 = (i__17365__auto___25460 + (1));
i__17365__auto___25460 = G__25461;
continue;
} else {
}
break;
}

var G__25458 = args25456.length;
switch (G__25458) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25456.length)].join('')));

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
var len__17364__auto___25473 = arguments.length;
var i__17365__auto___25474 = (0);
while(true){
if((i__17365__auto___25474 < len__17364__auto___25473)){
args__17371__auto__.push((arguments[i__17365__auto___25474]));

var G__25475 = (i__17365__auto___25474 + (1));
i__17365__auto___25474 = G__25475;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25467){
var map__25468 = p__25467;
var map__25468__$1 = ((((!((map__25468 == null)))?((((map__25468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25468):map__25468);
var opts = map__25468__$1;
var statearr_25470_25476 = state;
(statearr_25470_25476[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25468,map__25468__$1,opts){
return (function (val){
var statearr_25471_25477 = state;
(statearr_25471_25477[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25468,map__25468__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25472_25478 = state;
(statearr_25472_25478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25463){
var G__25464 = cljs.core.first.call(null,seq25463);
var seq25463__$1 = cljs.core.next.call(null,seq25463);
var G__25465 = cljs.core.first.call(null,seq25463__$1);
var seq25463__$2 = cljs.core.next.call(null,seq25463__$1);
var G__25466 = cljs.core.first.call(null,seq25463__$2);
var seq25463__$3 = cljs.core.next.call(null,seq25463__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25464,G__25465,G__25466,seq25463__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25642 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25643){
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
this.meta25643 = meta25643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25644,meta25643__$1){
var self__ = this;
var _25644__$1 = this;
return (new cljs.core.async.t_cljs$core$async25642(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25644){
var self__ = this;
var _25644__$1 = this;
return self__.meta25643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25643","meta25643",1126321587,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25642";

cljs.core.async.t_cljs$core$async25642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25642(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25643){
return (new cljs.core.async.t_cljs$core$async25642(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25642(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19340__auto___25805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25742){
var state_val_25743 = (state_25742[(1)]);
if((state_val_25743 === (7))){
var inst_25660 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25744_25806 = state_25742__$1;
(statearr_25744_25806[(2)] = inst_25660);

(statearr_25744_25806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (20))){
var inst_25672 = (state_25742[(7)]);
var state_25742__$1 = state_25742;
var statearr_25745_25807 = state_25742__$1;
(statearr_25745_25807[(2)] = inst_25672);

(statearr_25745_25807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (27))){
var state_25742__$1 = state_25742;
var statearr_25746_25808 = state_25742__$1;
(statearr_25746_25808[(2)] = null);

(statearr_25746_25808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (1))){
var inst_25648 = (state_25742[(8)]);
var inst_25648__$1 = calc_state.call(null);
var inst_25650 = (inst_25648__$1 == null);
var inst_25651 = cljs.core.not.call(null,inst_25650);
var state_25742__$1 = (function (){var statearr_25747 = state_25742;
(statearr_25747[(8)] = inst_25648__$1);

return statearr_25747;
})();
if(inst_25651){
var statearr_25748_25809 = state_25742__$1;
(statearr_25748_25809[(1)] = (2));

} else {
var statearr_25749_25810 = state_25742__$1;
(statearr_25749_25810[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (24))){
var inst_25702 = (state_25742[(9)]);
var inst_25716 = (state_25742[(10)]);
var inst_25695 = (state_25742[(11)]);
var inst_25716__$1 = inst_25695.call(null,inst_25702);
var state_25742__$1 = (function (){var statearr_25750 = state_25742;
(statearr_25750[(10)] = inst_25716__$1);

return statearr_25750;
})();
if(cljs.core.truth_(inst_25716__$1)){
var statearr_25751_25811 = state_25742__$1;
(statearr_25751_25811[(1)] = (29));

} else {
var statearr_25752_25812 = state_25742__$1;
(statearr_25752_25812[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (4))){
var inst_25663 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25663)){
var statearr_25753_25813 = state_25742__$1;
(statearr_25753_25813[(1)] = (8));

} else {
var statearr_25754_25814 = state_25742__$1;
(statearr_25754_25814[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (15))){
var inst_25689 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25689)){
var statearr_25755_25815 = state_25742__$1;
(statearr_25755_25815[(1)] = (19));

} else {
var statearr_25756_25816 = state_25742__$1;
(statearr_25756_25816[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (21))){
var inst_25694 = (state_25742[(12)]);
var inst_25694__$1 = (state_25742[(2)]);
var inst_25695 = cljs.core.get.call(null,inst_25694__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25696 = cljs.core.get.call(null,inst_25694__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25697 = cljs.core.get.call(null,inst_25694__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25742__$1 = (function (){var statearr_25757 = state_25742;
(statearr_25757[(12)] = inst_25694__$1);

(statearr_25757[(13)] = inst_25696);

(statearr_25757[(11)] = inst_25695);

return statearr_25757;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25742__$1,(22),inst_25697);
} else {
if((state_val_25743 === (31))){
var inst_25724 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25724)){
var statearr_25758_25817 = state_25742__$1;
(statearr_25758_25817[(1)] = (32));

} else {
var statearr_25759_25818 = state_25742__$1;
(statearr_25759_25818[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (32))){
var inst_25701 = (state_25742[(14)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25742__$1,(35),out,inst_25701);
} else {
if((state_val_25743 === (33))){
var inst_25694 = (state_25742[(12)]);
var inst_25672 = inst_25694;
var state_25742__$1 = (function (){var statearr_25760 = state_25742;
(statearr_25760[(7)] = inst_25672);

return statearr_25760;
})();
var statearr_25761_25819 = state_25742__$1;
(statearr_25761_25819[(2)] = null);

(statearr_25761_25819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (13))){
var inst_25672 = (state_25742[(7)]);
var inst_25679 = inst_25672.cljs$lang$protocol_mask$partition0$;
var inst_25680 = (inst_25679 & (64));
var inst_25681 = inst_25672.cljs$core$ISeq$;
var inst_25682 = (inst_25680) || (inst_25681);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25682)){
var statearr_25762_25820 = state_25742__$1;
(statearr_25762_25820[(1)] = (16));

} else {
var statearr_25763_25821 = state_25742__$1;
(statearr_25763_25821[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (22))){
var inst_25701 = (state_25742[(14)]);
var inst_25702 = (state_25742[(9)]);
var inst_25700 = (state_25742[(2)]);
var inst_25701__$1 = cljs.core.nth.call(null,inst_25700,(0),null);
var inst_25702__$1 = cljs.core.nth.call(null,inst_25700,(1),null);
var inst_25703 = (inst_25701__$1 == null);
var inst_25704 = cljs.core._EQ_.call(null,inst_25702__$1,change);
var inst_25705 = (inst_25703) || (inst_25704);
var state_25742__$1 = (function (){var statearr_25764 = state_25742;
(statearr_25764[(14)] = inst_25701__$1);

(statearr_25764[(9)] = inst_25702__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25705)){
var statearr_25765_25822 = state_25742__$1;
(statearr_25765_25822[(1)] = (23));

} else {
var statearr_25766_25823 = state_25742__$1;
(statearr_25766_25823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (36))){
var inst_25694 = (state_25742[(12)]);
var inst_25672 = inst_25694;
var state_25742__$1 = (function (){var statearr_25767 = state_25742;
(statearr_25767[(7)] = inst_25672);

return statearr_25767;
})();
var statearr_25768_25824 = state_25742__$1;
(statearr_25768_25824[(2)] = null);

(statearr_25768_25824[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (29))){
var inst_25716 = (state_25742[(10)]);
var state_25742__$1 = state_25742;
var statearr_25769_25825 = state_25742__$1;
(statearr_25769_25825[(2)] = inst_25716);

(statearr_25769_25825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (6))){
var state_25742__$1 = state_25742;
var statearr_25770_25826 = state_25742__$1;
(statearr_25770_25826[(2)] = false);

(statearr_25770_25826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (28))){
var inst_25712 = (state_25742[(2)]);
var inst_25713 = calc_state.call(null);
var inst_25672 = inst_25713;
var state_25742__$1 = (function (){var statearr_25771 = state_25742;
(statearr_25771[(15)] = inst_25712);

(statearr_25771[(7)] = inst_25672);

return statearr_25771;
})();
var statearr_25772_25827 = state_25742__$1;
(statearr_25772_25827[(2)] = null);

(statearr_25772_25827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (25))){
var inst_25738 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25773_25828 = state_25742__$1;
(statearr_25773_25828[(2)] = inst_25738);

(statearr_25773_25828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (34))){
var inst_25736 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25774_25829 = state_25742__$1;
(statearr_25774_25829[(2)] = inst_25736);

(statearr_25774_25829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (17))){
var state_25742__$1 = state_25742;
var statearr_25775_25830 = state_25742__$1;
(statearr_25775_25830[(2)] = false);

(statearr_25775_25830[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (3))){
var state_25742__$1 = state_25742;
var statearr_25776_25831 = state_25742__$1;
(statearr_25776_25831[(2)] = false);

(statearr_25776_25831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (12))){
var inst_25740 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25742__$1,inst_25740);
} else {
if((state_val_25743 === (2))){
var inst_25648 = (state_25742[(8)]);
var inst_25653 = inst_25648.cljs$lang$protocol_mask$partition0$;
var inst_25654 = (inst_25653 & (64));
var inst_25655 = inst_25648.cljs$core$ISeq$;
var inst_25656 = (inst_25654) || (inst_25655);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25656)){
var statearr_25777_25832 = state_25742__$1;
(statearr_25777_25832[(1)] = (5));

} else {
var statearr_25778_25833 = state_25742__$1;
(statearr_25778_25833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (23))){
var inst_25701 = (state_25742[(14)]);
var inst_25707 = (inst_25701 == null);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25707)){
var statearr_25779_25834 = state_25742__$1;
(statearr_25779_25834[(1)] = (26));

} else {
var statearr_25780_25835 = state_25742__$1;
(statearr_25780_25835[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (35))){
var inst_25727 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
if(cljs.core.truth_(inst_25727)){
var statearr_25781_25836 = state_25742__$1;
(statearr_25781_25836[(1)] = (36));

} else {
var statearr_25782_25837 = state_25742__$1;
(statearr_25782_25837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (19))){
var inst_25672 = (state_25742[(7)]);
var inst_25691 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25672);
var state_25742__$1 = state_25742;
var statearr_25783_25838 = state_25742__$1;
(statearr_25783_25838[(2)] = inst_25691);

(statearr_25783_25838[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (11))){
var inst_25672 = (state_25742[(7)]);
var inst_25676 = (inst_25672 == null);
var inst_25677 = cljs.core.not.call(null,inst_25676);
var state_25742__$1 = state_25742;
if(inst_25677){
var statearr_25784_25839 = state_25742__$1;
(statearr_25784_25839[(1)] = (13));

} else {
var statearr_25785_25840 = state_25742__$1;
(statearr_25785_25840[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (9))){
var inst_25648 = (state_25742[(8)]);
var state_25742__$1 = state_25742;
var statearr_25786_25841 = state_25742__$1;
(statearr_25786_25841[(2)] = inst_25648);

(statearr_25786_25841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (5))){
var state_25742__$1 = state_25742;
var statearr_25787_25842 = state_25742__$1;
(statearr_25787_25842[(2)] = true);

(statearr_25787_25842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (14))){
var state_25742__$1 = state_25742;
var statearr_25788_25843 = state_25742__$1;
(statearr_25788_25843[(2)] = false);

(statearr_25788_25843[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (26))){
var inst_25702 = (state_25742[(9)]);
var inst_25709 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25702);
var state_25742__$1 = state_25742;
var statearr_25789_25844 = state_25742__$1;
(statearr_25789_25844[(2)] = inst_25709);

(statearr_25789_25844[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (16))){
var state_25742__$1 = state_25742;
var statearr_25790_25845 = state_25742__$1;
(statearr_25790_25845[(2)] = true);

(statearr_25790_25845[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (38))){
var inst_25732 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25791_25846 = state_25742__$1;
(statearr_25791_25846[(2)] = inst_25732);

(statearr_25791_25846[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (30))){
var inst_25702 = (state_25742[(9)]);
var inst_25696 = (state_25742[(13)]);
var inst_25695 = (state_25742[(11)]);
var inst_25719 = cljs.core.empty_QMARK_.call(null,inst_25695);
var inst_25720 = inst_25696.call(null,inst_25702);
var inst_25721 = cljs.core.not.call(null,inst_25720);
var inst_25722 = (inst_25719) && (inst_25721);
var state_25742__$1 = state_25742;
var statearr_25792_25847 = state_25742__$1;
(statearr_25792_25847[(2)] = inst_25722);

(statearr_25792_25847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (10))){
var inst_25648 = (state_25742[(8)]);
var inst_25668 = (state_25742[(2)]);
var inst_25669 = cljs.core.get.call(null,inst_25668,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25670 = cljs.core.get.call(null,inst_25668,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25671 = cljs.core.get.call(null,inst_25668,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25672 = inst_25648;
var state_25742__$1 = (function (){var statearr_25793 = state_25742;
(statearr_25793[(16)] = inst_25669);

(statearr_25793[(17)] = inst_25671);

(statearr_25793[(7)] = inst_25672);

(statearr_25793[(18)] = inst_25670);

return statearr_25793;
})();
var statearr_25794_25848 = state_25742__$1;
(statearr_25794_25848[(2)] = null);

(statearr_25794_25848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (18))){
var inst_25686 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25795_25849 = state_25742__$1;
(statearr_25795_25849[(2)] = inst_25686);

(statearr_25795_25849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (37))){
var state_25742__$1 = state_25742;
var statearr_25796_25850 = state_25742__$1;
(statearr_25796_25850[(2)] = null);

(statearr_25796_25850[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (8))){
var inst_25648 = (state_25742[(8)]);
var inst_25665 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25648);
var state_25742__$1 = state_25742;
var statearr_25797_25851 = state_25742__$1;
(statearr_25797_25851[(2)] = inst_25665);

(statearr_25797_25851[(1)] = (10));


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
});})(c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19319__auto__,c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19320__auto__ = null;
var cljs$core$async$mix_$_state_machine__19320__auto____0 = (function (){
var statearr_25801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25801[(0)] = cljs$core$async$mix_$_state_machine__19320__auto__);

(statearr_25801[(1)] = (1));

return statearr_25801;
});
var cljs$core$async$mix_$_state_machine__19320__auto____1 = (function (state_25742){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_25742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e25802){if((e25802 instanceof Object)){
var ex__19323__auto__ = e25802;
var statearr_25803_25852 = state_25742;
(statearr_25803_25852[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25853 = state_25742;
state_25742 = G__25853;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19320__auto__ = function(state_25742){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19320__auto____1.call(this,state_25742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19320__auto____0;
cljs$core$async$mix_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19320__auto____1;
return cljs$core$async$mix_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19342__auto__ = (function (){var statearr_25804 = f__19341__auto__.call(null);
(statearr_25804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___25805);

return statearr_25804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___25805,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args25854 = [];
var len__17364__auto___25857 = arguments.length;
var i__17365__auto___25858 = (0);
while(true){
if((i__17365__auto___25858 < len__17364__auto___25857)){
args25854.push((arguments[i__17365__auto___25858]));

var G__25859 = (i__17365__auto___25858 + (1));
i__17365__auto___25858 = G__25859;
continue;
} else {
}
break;
}

var G__25856 = args25854.length;
switch (G__25856) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25854.length)].join('')));

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
var args25862 = [];
var len__17364__auto___25987 = arguments.length;
var i__17365__auto___25988 = (0);
while(true){
if((i__17365__auto___25988 < len__17364__auto___25987)){
args25862.push((arguments[i__17365__auto___25988]));

var G__25989 = (i__17365__auto___25988 + (1));
i__17365__auto___25988 = G__25989;
continue;
} else {
}
break;
}

var G__25864 = args25862.length;
switch (G__25864) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25862.length)].join('')));

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
return (function (p1__25861_SHARP_){
if(cljs.core.truth_(p1__25861_SHARP_.call(null,topic))){
return p1__25861_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25861_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16306__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25865 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25866){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25866 = meta25866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25867,meta25866__$1){
var self__ = this;
var _25867__$1 = this;
return (new cljs.core.async.t_cljs$core$async25865(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25866__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25867){
var self__ = this;
var _25867__$1 = this;
return self__.meta25866;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25866","meta25866",620523955,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25865";

cljs.core.async.t_cljs$core$async25865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25865");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25865 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25866){
return (new cljs.core.async.t_cljs$core$async25865(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25866));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25865(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19340__auto___25991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___25991,mults,ensure_mult,p){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___25991,mults,ensure_mult,p){
return (function (state_25939){
var state_val_25940 = (state_25939[(1)]);
if((state_val_25940 === (7))){
var inst_25935 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25941_25992 = state_25939__$1;
(statearr_25941_25992[(2)] = inst_25935);

(statearr_25941_25992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (20))){
var state_25939__$1 = state_25939;
var statearr_25942_25993 = state_25939__$1;
(statearr_25942_25993[(2)] = null);

(statearr_25942_25993[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (1))){
var state_25939__$1 = state_25939;
var statearr_25943_25994 = state_25939__$1;
(statearr_25943_25994[(2)] = null);

(statearr_25943_25994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (24))){
var inst_25918 = (state_25939[(7)]);
var inst_25927 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25918);
var state_25939__$1 = state_25939;
var statearr_25944_25995 = state_25939__$1;
(statearr_25944_25995[(2)] = inst_25927);

(statearr_25944_25995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (4))){
var inst_25870 = (state_25939[(8)]);
var inst_25870__$1 = (state_25939[(2)]);
var inst_25871 = (inst_25870__$1 == null);
var state_25939__$1 = (function (){var statearr_25945 = state_25939;
(statearr_25945[(8)] = inst_25870__$1);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25871)){
var statearr_25946_25996 = state_25939__$1;
(statearr_25946_25996[(1)] = (5));

} else {
var statearr_25947_25997 = state_25939__$1;
(statearr_25947_25997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (15))){
var inst_25912 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25948_25998 = state_25939__$1;
(statearr_25948_25998[(2)] = inst_25912);

(statearr_25948_25998[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (21))){
var inst_25932 = (state_25939[(2)]);
var state_25939__$1 = (function (){var statearr_25949 = state_25939;
(statearr_25949[(9)] = inst_25932);

return statearr_25949;
})();
var statearr_25950_25999 = state_25939__$1;
(statearr_25950_25999[(2)] = null);

(statearr_25950_25999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (13))){
var inst_25894 = (state_25939[(10)]);
var inst_25896 = cljs.core.chunked_seq_QMARK_.call(null,inst_25894);
var state_25939__$1 = state_25939;
if(inst_25896){
var statearr_25951_26000 = state_25939__$1;
(statearr_25951_26000[(1)] = (16));

} else {
var statearr_25952_26001 = state_25939__$1;
(statearr_25952_26001[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (22))){
var inst_25924 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25924)){
var statearr_25953_26002 = state_25939__$1;
(statearr_25953_26002[(1)] = (23));

} else {
var statearr_25954_26003 = state_25939__$1;
(statearr_25954_26003[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (6))){
var inst_25920 = (state_25939[(11)]);
var inst_25918 = (state_25939[(7)]);
var inst_25870 = (state_25939[(8)]);
var inst_25918__$1 = topic_fn.call(null,inst_25870);
var inst_25919 = cljs.core.deref.call(null,mults);
var inst_25920__$1 = cljs.core.get.call(null,inst_25919,inst_25918__$1);
var state_25939__$1 = (function (){var statearr_25955 = state_25939;
(statearr_25955[(11)] = inst_25920__$1);

(statearr_25955[(7)] = inst_25918__$1);

return statearr_25955;
})();
if(cljs.core.truth_(inst_25920__$1)){
var statearr_25956_26004 = state_25939__$1;
(statearr_25956_26004[(1)] = (19));

} else {
var statearr_25957_26005 = state_25939__$1;
(statearr_25957_26005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (25))){
var inst_25929 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25958_26006 = state_25939__$1;
(statearr_25958_26006[(2)] = inst_25929);

(statearr_25958_26006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (17))){
var inst_25894 = (state_25939[(10)]);
var inst_25903 = cljs.core.first.call(null,inst_25894);
var inst_25904 = cljs.core.async.muxch_STAR_.call(null,inst_25903);
var inst_25905 = cljs.core.async.close_BANG_.call(null,inst_25904);
var inst_25906 = cljs.core.next.call(null,inst_25894);
var inst_25880 = inst_25906;
var inst_25881 = null;
var inst_25882 = (0);
var inst_25883 = (0);
var state_25939__$1 = (function (){var statearr_25959 = state_25939;
(statearr_25959[(12)] = inst_25880);

(statearr_25959[(13)] = inst_25881);

(statearr_25959[(14)] = inst_25883);

(statearr_25959[(15)] = inst_25905);

(statearr_25959[(16)] = inst_25882);

return statearr_25959;
})();
var statearr_25960_26007 = state_25939__$1;
(statearr_25960_26007[(2)] = null);

(statearr_25960_26007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (3))){
var inst_25937 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25939__$1,inst_25937);
} else {
if((state_val_25940 === (12))){
var inst_25914 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25961_26008 = state_25939__$1;
(statearr_25961_26008[(2)] = inst_25914);

(statearr_25961_26008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (2))){
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25939__$1,(4),ch);
} else {
if((state_val_25940 === (23))){
var state_25939__$1 = state_25939;
var statearr_25962_26009 = state_25939__$1;
(statearr_25962_26009[(2)] = null);

(statearr_25962_26009[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (19))){
var inst_25920 = (state_25939[(11)]);
var inst_25870 = (state_25939[(8)]);
var inst_25922 = cljs.core.async.muxch_STAR_.call(null,inst_25920);
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25939__$1,(22),inst_25922,inst_25870);
} else {
if((state_val_25940 === (11))){
var inst_25880 = (state_25939[(12)]);
var inst_25894 = (state_25939[(10)]);
var inst_25894__$1 = cljs.core.seq.call(null,inst_25880);
var state_25939__$1 = (function (){var statearr_25963 = state_25939;
(statearr_25963[(10)] = inst_25894__$1);

return statearr_25963;
})();
if(inst_25894__$1){
var statearr_25964_26010 = state_25939__$1;
(statearr_25964_26010[(1)] = (13));

} else {
var statearr_25965_26011 = state_25939__$1;
(statearr_25965_26011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (9))){
var inst_25916 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25966_26012 = state_25939__$1;
(statearr_25966_26012[(2)] = inst_25916);

(statearr_25966_26012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (5))){
var inst_25877 = cljs.core.deref.call(null,mults);
var inst_25878 = cljs.core.vals.call(null,inst_25877);
var inst_25879 = cljs.core.seq.call(null,inst_25878);
var inst_25880 = inst_25879;
var inst_25881 = null;
var inst_25882 = (0);
var inst_25883 = (0);
var state_25939__$1 = (function (){var statearr_25967 = state_25939;
(statearr_25967[(12)] = inst_25880);

(statearr_25967[(13)] = inst_25881);

(statearr_25967[(14)] = inst_25883);

(statearr_25967[(16)] = inst_25882);

return statearr_25967;
})();
var statearr_25968_26013 = state_25939__$1;
(statearr_25968_26013[(2)] = null);

(statearr_25968_26013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (14))){
var state_25939__$1 = state_25939;
var statearr_25972_26014 = state_25939__$1;
(statearr_25972_26014[(2)] = null);

(statearr_25972_26014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (16))){
var inst_25894 = (state_25939[(10)]);
var inst_25898 = cljs.core.chunk_first.call(null,inst_25894);
var inst_25899 = cljs.core.chunk_rest.call(null,inst_25894);
var inst_25900 = cljs.core.count.call(null,inst_25898);
var inst_25880 = inst_25899;
var inst_25881 = inst_25898;
var inst_25882 = inst_25900;
var inst_25883 = (0);
var state_25939__$1 = (function (){var statearr_25973 = state_25939;
(statearr_25973[(12)] = inst_25880);

(statearr_25973[(13)] = inst_25881);

(statearr_25973[(14)] = inst_25883);

(statearr_25973[(16)] = inst_25882);

return statearr_25973;
})();
var statearr_25974_26015 = state_25939__$1;
(statearr_25974_26015[(2)] = null);

(statearr_25974_26015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (10))){
var inst_25880 = (state_25939[(12)]);
var inst_25881 = (state_25939[(13)]);
var inst_25883 = (state_25939[(14)]);
var inst_25882 = (state_25939[(16)]);
var inst_25888 = cljs.core._nth.call(null,inst_25881,inst_25883);
var inst_25889 = cljs.core.async.muxch_STAR_.call(null,inst_25888);
var inst_25890 = cljs.core.async.close_BANG_.call(null,inst_25889);
var inst_25891 = (inst_25883 + (1));
var tmp25969 = inst_25880;
var tmp25970 = inst_25881;
var tmp25971 = inst_25882;
var inst_25880__$1 = tmp25969;
var inst_25881__$1 = tmp25970;
var inst_25882__$1 = tmp25971;
var inst_25883__$1 = inst_25891;
var state_25939__$1 = (function (){var statearr_25975 = state_25939;
(statearr_25975[(12)] = inst_25880__$1);

(statearr_25975[(13)] = inst_25881__$1);

(statearr_25975[(14)] = inst_25883__$1);

(statearr_25975[(17)] = inst_25890);

(statearr_25975[(16)] = inst_25882__$1);

return statearr_25975;
})();
var statearr_25976_26016 = state_25939__$1;
(statearr_25976_26016[(2)] = null);

(statearr_25976_26016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (18))){
var inst_25909 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25977_26017 = state_25939__$1;
(statearr_25977_26017[(2)] = inst_25909);

(statearr_25977_26017[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (8))){
var inst_25883 = (state_25939[(14)]);
var inst_25882 = (state_25939[(16)]);
var inst_25885 = (inst_25883 < inst_25882);
var inst_25886 = inst_25885;
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25886)){
var statearr_25978_26018 = state_25939__$1;
(statearr_25978_26018[(1)] = (10));

} else {
var statearr_25979_26019 = state_25939__$1;
(statearr_25979_26019[(1)] = (11));

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
});})(c__19340__auto___25991,mults,ensure_mult,p))
;
return ((function (switch__19319__auto__,c__19340__auto___25991,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_25983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25983[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_25983[(1)] = (1));

return statearr_25983;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_25939){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_25939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e25984){if((e25984 instanceof Object)){
var ex__19323__auto__ = e25984;
var statearr_25985_26020 = state_25939;
(statearr_25985_26020[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26021 = state_25939;
state_25939 = G__26021;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_25939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_25939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___25991,mults,ensure_mult,p))
})();
var state__19342__auto__ = (function (){var statearr_25986 = f__19341__auto__.call(null);
(statearr_25986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___25991);

return statearr_25986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___25991,mults,ensure_mult,p))
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
var args26022 = [];
var len__17364__auto___26025 = arguments.length;
var i__17365__auto___26026 = (0);
while(true){
if((i__17365__auto___26026 < len__17364__auto___26025)){
args26022.push((arguments[i__17365__auto___26026]));

var G__26027 = (i__17365__auto___26026 + (1));
i__17365__auto___26026 = G__26027;
continue;
} else {
}
break;
}

var G__26024 = args26022.length;
switch (G__26024) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26022.length)].join('')));

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
var args26029 = [];
var len__17364__auto___26032 = arguments.length;
var i__17365__auto___26033 = (0);
while(true){
if((i__17365__auto___26033 < len__17364__auto___26032)){
args26029.push((arguments[i__17365__auto___26033]));

var G__26034 = (i__17365__auto___26033 + (1));
i__17365__auto___26033 = G__26034;
continue;
} else {
}
break;
}

var G__26031 = args26029.length;
switch (G__26031) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26029.length)].join('')));

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
var args26036 = [];
var len__17364__auto___26107 = arguments.length;
var i__17365__auto___26108 = (0);
while(true){
if((i__17365__auto___26108 < len__17364__auto___26107)){
args26036.push((arguments[i__17365__auto___26108]));

var G__26109 = (i__17365__auto___26108 + (1));
i__17365__auto___26108 = G__26109;
continue;
} else {
}
break;
}

var G__26038 = args26036.length;
switch (G__26038) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26036.length)].join('')));

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
var c__19340__auto___26111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26077){
var state_val_26078 = (state_26077[(1)]);
if((state_val_26078 === (7))){
var state_26077__$1 = state_26077;
var statearr_26079_26112 = state_26077__$1;
(statearr_26079_26112[(2)] = null);

(statearr_26079_26112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (1))){
var state_26077__$1 = state_26077;
var statearr_26080_26113 = state_26077__$1;
(statearr_26080_26113[(2)] = null);

(statearr_26080_26113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (4))){
var inst_26041 = (state_26077[(7)]);
var inst_26043 = (inst_26041 < cnt);
var state_26077__$1 = state_26077;
if(cljs.core.truth_(inst_26043)){
var statearr_26081_26114 = state_26077__$1;
(statearr_26081_26114[(1)] = (6));

} else {
var statearr_26082_26115 = state_26077__$1;
(statearr_26082_26115[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (15))){
var inst_26073 = (state_26077[(2)]);
var state_26077__$1 = state_26077;
var statearr_26083_26116 = state_26077__$1;
(statearr_26083_26116[(2)] = inst_26073);

(statearr_26083_26116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (13))){
var inst_26066 = cljs.core.async.close_BANG_.call(null,out);
var state_26077__$1 = state_26077;
var statearr_26084_26117 = state_26077__$1;
(statearr_26084_26117[(2)] = inst_26066);

(statearr_26084_26117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (6))){
var state_26077__$1 = state_26077;
var statearr_26085_26118 = state_26077__$1;
(statearr_26085_26118[(2)] = null);

(statearr_26085_26118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (3))){
var inst_26075 = (state_26077[(2)]);
var state_26077__$1 = state_26077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26077__$1,inst_26075);
} else {
if((state_val_26078 === (12))){
var inst_26063 = (state_26077[(8)]);
var inst_26063__$1 = (state_26077[(2)]);
var inst_26064 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26063__$1);
var state_26077__$1 = (function (){var statearr_26086 = state_26077;
(statearr_26086[(8)] = inst_26063__$1);

return statearr_26086;
})();
if(cljs.core.truth_(inst_26064)){
var statearr_26087_26119 = state_26077__$1;
(statearr_26087_26119[(1)] = (13));

} else {
var statearr_26088_26120 = state_26077__$1;
(statearr_26088_26120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (2))){
var inst_26040 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26041 = (0);
var state_26077__$1 = (function (){var statearr_26089 = state_26077;
(statearr_26089[(9)] = inst_26040);

(statearr_26089[(7)] = inst_26041);

return statearr_26089;
})();
var statearr_26090_26121 = state_26077__$1;
(statearr_26090_26121[(2)] = null);

(statearr_26090_26121[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (11))){
var inst_26041 = (state_26077[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26077,(10),Object,null,(9));
var inst_26050 = chs__$1.call(null,inst_26041);
var inst_26051 = done.call(null,inst_26041);
var inst_26052 = cljs.core.async.take_BANG_.call(null,inst_26050,inst_26051);
var state_26077__$1 = state_26077;
var statearr_26091_26122 = state_26077__$1;
(statearr_26091_26122[(2)] = inst_26052);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (9))){
var inst_26041 = (state_26077[(7)]);
var inst_26054 = (state_26077[(2)]);
var inst_26055 = (inst_26041 + (1));
var inst_26041__$1 = inst_26055;
var state_26077__$1 = (function (){var statearr_26092 = state_26077;
(statearr_26092[(10)] = inst_26054);

(statearr_26092[(7)] = inst_26041__$1);

return statearr_26092;
})();
var statearr_26093_26123 = state_26077__$1;
(statearr_26093_26123[(2)] = null);

(statearr_26093_26123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (5))){
var inst_26061 = (state_26077[(2)]);
var state_26077__$1 = (function (){var statearr_26094 = state_26077;
(statearr_26094[(11)] = inst_26061);

return statearr_26094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26077__$1,(12),dchan);
} else {
if((state_val_26078 === (14))){
var inst_26063 = (state_26077[(8)]);
var inst_26068 = cljs.core.apply.call(null,f,inst_26063);
var state_26077__$1 = state_26077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26077__$1,(16),out,inst_26068);
} else {
if((state_val_26078 === (16))){
var inst_26070 = (state_26077[(2)]);
var state_26077__$1 = (function (){var statearr_26095 = state_26077;
(statearr_26095[(12)] = inst_26070);

return statearr_26095;
})();
var statearr_26096_26124 = state_26077__$1;
(statearr_26096_26124[(2)] = null);

(statearr_26096_26124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (10))){
var inst_26045 = (state_26077[(2)]);
var inst_26046 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26077__$1 = (function (){var statearr_26097 = state_26077;
(statearr_26097[(13)] = inst_26045);

return statearr_26097;
})();
var statearr_26098_26125 = state_26077__$1;
(statearr_26098_26125[(2)] = inst_26046);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26077__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26078 === (8))){
var inst_26059 = (state_26077[(2)]);
var state_26077__$1 = state_26077;
var statearr_26099_26126 = state_26077__$1;
(statearr_26099_26126[(2)] = inst_26059);

(statearr_26099_26126[(1)] = (5));


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
});})(c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19319__auto__,c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26103[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26103[(1)] = (1));

return statearr_26103;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26077){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26104){if((e26104 instanceof Object)){
var ex__19323__auto__ = e26104;
var statearr_26105_26127 = state_26077;
(statearr_26105_26127[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26128 = state_26077;
state_26077 = G__26128;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19342__auto__ = (function (){var statearr_26106 = f__19341__auto__.call(null);
(statearr_26106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26111);

return statearr_26106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26111,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26130 = [];
var len__17364__auto___26186 = arguments.length;
var i__17365__auto___26187 = (0);
while(true){
if((i__17365__auto___26187 < len__17364__auto___26186)){
args26130.push((arguments[i__17365__auto___26187]));

var G__26188 = (i__17365__auto___26187 + (1));
i__17365__auto___26187 = G__26188;
continue;
} else {
}
break;
}

var G__26132 = args26130.length;
switch (G__26132) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26130.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26190,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26190,out){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (7))){
var inst_26142 = (state_26162[(7)]);
var inst_26141 = (state_26162[(8)]);
var inst_26141__$1 = (state_26162[(2)]);
var inst_26142__$1 = cljs.core.nth.call(null,inst_26141__$1,(0),null);
var inst_26143 = cljs.core.nth.call(null,inst_26141__$1,(1),null);
var inst_26144 = (inst_26142__$1 == null);
var state_26162__$1 = (function (){var statearr_26164 = state_26162;
(statearr_26164[(7)] = inst_26142__$1);

(statearr_26164[(9)] = inst_26143);

(statearr_26164[(8)] = inst_26141__$1);

return statearr_26164;
})();
if(cljs.core.truth_(inst_26144)){
var statearr_26165_26191 = state_26162__$1;
(statearr_26165_26191[(1)] = (8));

} else {
var statearr_26166_26192 = state_26162__$1;
(statearr_26166_26192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (1))){
var inst_26133 = cljs.core.vec.call(null,chs);
var inst_26134 = inst_26133;
var state_26162__$1 = (function (){var statearr_26167 = state_26162;
(statearr_26167[(10)] = inst_26134);

return statearr_26167;
})();
var statearr_26168_26193 = state_26162__$1;
(statearr_26168_26193[(2)] = null);

(statearr_26168_26193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (4))){
var inst_26134 = (state_26162[(10)]);
var state_26162__$1 = state_26162;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26162__$1,(7),inst_26134);
} else {
if((state_val_26163 === (6))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26169_26194 = state_26162__$1;
(statearr_26169_26194[(2)] = inst_26158);

(statearr_26169_26194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (2))){
var inst_26134 = (state_26162[(10)]);
var inst_26136 = cljs.core.count.call(null,inst_26134);
var inst_26137 = (inst_26136 > (0));
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26137)){
var statearr_26171_26195 = state_26162__$1;
(statearr_26171_26195[(1)] = (4));

} else {
var statearr_26172_26196 = state_26162__$1;
(statearr_26172_26196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (11))){
var inst_26134 = (state_26162[(10)]);
var inst_26151 = (state_26162[(2)]);
var tmp26170 = inst_26134;
var inst_26134__$1 = tmp26170;
var state_26162__$1 = (function (){var statearr_26173 = state_26162;
(statearr_26173[(11)] = inst_26151);

(statearr_26173[(10)] = inst_26134__$1);

return statearr_26173;
})();
var statearr_26174_26197 = state_26162__$1;
(statearr_26174_26197[(2)] = null);

(statearr_26174_26197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (9))){
var inst_26142 = (state_26162[(7)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26162__$1,(11),out,inst_26142);
} else {
if((state_val_26163 === (5))){
var inst_26156 = cljs.core.async.close_BANG_.call(null,out);
var state_26162__$1 = state_26162;
var statearr_26175_26198 = state_26162__$1;
(statearr_26175_26198[(2)] = inst_26156);

(statearr_26175_26198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (10))){
var inst_26154 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26176_26199 = state_26162__$1;
(statearr_26176_26199[(2)] = inst_26154);

(statearr_26176_26199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26142 = (state_26162[(7)]);
var inst_26143 = (state_26162[(9)]);
var inst_26141 = (state_26162[(8)]);
var inst_26134 = (state_26162[(10)]);
var inst_26146 = (function (){var cs = inst_26134;
var vec__26139 = inst_26141;
var v = inst_26142;
var c = inst_26143;
return ((function (cs,vec__26139,v,c,inst_26142,inst_26143,inst_26141,inst_26134,state_val_26163,c__19340__auto___26190,out){
return (function (p1__26129_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26129_SHARP_);
});
;})(cs,vec__26139,v,c,inst_26142,inst_26143,inst_26141,inst_26134,state_val_26163,c__19340__auto___26190,out))
})();
var inst_26147 = cljs.core.filterv.call(null,inst_26146,inst_26134);
var inst_26134__$1 = inst_26147;
var state_26162__$1 = (function (){var statearr_26177 = state_26162;
(statearr_26177[(10)] = inst_26134__$1);

return statearr_26177;
})();
var statearr_26178_26200 = state_26162__$1;
(statearr_26178_26200[(2)] = null);

(statearr_26178_26200[(1)] = (2));


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
});})(c__19340__auto___26190,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26190,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26182 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26182[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26182[(1)] = (1));

return statearr_26182;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26162){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26183){if((e26183 instanceof Object)){
var ex__19323__auto__ = e26183;
var statearr_26184_26201 = state_26162;
(statearr_26184_26201[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26162;
state_26162 = G__26202;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26190,out))
})();
var state__19342__auto__ = (function (){var statearr_26185 = f__19341__auto__.call(null);
(statearr_26185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26190);

return statearr_26185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26190,out))
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
var args26203 = [];
var len__17364__auto___26252 = arguments.length;
var i__17365__auto___26253 = (0);
while(true){
if((i__17365__auto___26253 < len__17364__auto___26252)){
args26203.push((arguments[i__17365__auto___26253]));

var G__26254 = (i__17365__auto___26253 + (1));
i__17365__auto___26253 = G__26254;
continue;
} else {
}
break;
}

var G__26205 = args26203.length;
switch (G__26205) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26203.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26256,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26256,out){
return (function (state_26229){
var state_val_26230 = (state_26229[(1)]);
if((state_val_26230 === (7))){
var inst_26211 = (state_26229[(7)]);
var inst_26211__$1 = (state_26229[(2)]);
var inst_26212 = (inst_26211__$1 == null);
var inst_26213 = cljs.core.not.call(null,inst_26212);
var state_26229__$1 = (function (){var statearr_26231 = state_26229;
(statearr_26231[(7)] = inst_26211__$1);

return statearr_26231;
})();
if(inst_26213){
var statearr_26232_26257 = state_26229__$1;
(statearr_26232_26257[(1)] = (8));

} else {
var statearr_26233_26258 = state_26229__$1;
(statearr_26233_26258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (1))){
var inst_26206 = (0);
var state_26229__$1 = (function (){var statearr_26234 = state_26229;
(statearr_26234[(8)] = inst_26206);

return statearr_26234;
})();
var statearr_26235_26259 = state_26229__$1;
(statearr_26235_26259[(2)] = null);

(statearr_26235_26259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (4))){
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26229__$1,(7),ch);
} else {
if((state_val_26230 === (6))){
var inst_26224 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26236_26260 = state_26229__$1;
(statearr_26236_26260[(2)] = inst_26224);

(statearr_26236_26260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (3))){
var inst_26226 = (state_26229[(2)]);
var inst_26227 = cljs.core.async.close_BANG_.call(null,out);
var state_26229__$1 = (function (){var statearr_26237 = state_26229;
(statearr_26237[(9)] = inst_26226);

return statearr_26237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26229__$1,inst_26227);
} else {
if((state_val_26230 === (2))){
var inst_26206 = (state_26229[(8)]);
var inst_26208 = (inst_26206 < n);
var state_26229__$1 = state_26229;
if(cljs.core.truth_(inst_26208)){
var statearr_26238_26261 = state_26229__$1;
(statearr_26238_26261[(1)] = (4));

} else {
var statearr_26239_26262 = state_26229__$1;
(statearr_26239_26262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (11))){
var inst_26206 = (state_26229[(8)]);
var inst_26216 = (state_26229[(2)]);
var inst_26217 = (inst_26206 + (1));
var inst_26206__$1 = inst_26217;
var state_26229__$1 = (function (){var statearr_26240 = state_26229;
(statearr_26240[(10)] = inst_26216);

(statearr_26240[(8)] = inst_26206__$1);

return statearr_26240;
})();
var statearr_26241_26263 = state_26229__$1;
(statearr_26241_26263[(2)] = null);

(statearr_26241_26263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (9))){
var state_26229__$1 = state_26229;
var statearr_26242_26264 = state_26229__$1;
(statearr_26242_26264[(2)] = null);

(statearr_26242_26264[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (5))){
var state_26229__$1 = state_26229;
var statearr_26243_26265 = state_26229__$1;
(statearr_26243_26265[(2)] = null);

(statearr_26243_26265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (10))){
var inst_26221 = (state_26229[(2)]);
var state_26229__$1 = state_26229;
var statearr_26244_26266 = state_26229__$1;
(statearr_26244_26266[(2)] = inst_26221);

(statearr_26244_26266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26230 === (8))){
var inst_26211 = (state_26229[(7)]);
var state_26229__$1 = state_26229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26229__$1,(11),out,inst_26211);
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
});})(c__19340__auto___26256,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26256,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26248[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26248[(1)] = (1));

return statearr_26248;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26229){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26249){if((e26249 instanceof Object)){
var ex__19323__auto__ = e26249;
var statearr_26250_26267 = state_26229;
(statearr_26250_26267[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26268 = state_26229;
state_26229 = G__26268;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26256,out))
})();
var state__19342__auto__ = (function (){var statearr_26251 = f__19341__auto__.call(null);
(statearr_26251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26256);

return statearr_26251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26256,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26276 = (function (map_LT_,f,ch,meta26277){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26277 = meta26277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26278,meta26277__$1){
var self__ = this;
var _26278__$1 = this;
return (new cljs.core.async.t_cljs$core$async26276(self__.map_LT_,self__.f,self__.ch,meta26277__$1));
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26278){
var self__ = this;
var _26278__$1 = this;
return self__.meta26277;
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26279 = (function (map_LT_,f,ch,meta26277,_,fn1,meta26280){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26277 = meta26277;
this._ = _;
this.fn1 = fn1;
this.meta26280 = meta26280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26281,meta26280__$1){
var self__ = this;
var _26281__$1 = this;
return (new cljs.core.async.t_cljs$core$async26279(self__.map_LT_,self__.f,self__.ch,self__.meta26277,self__._,self__.fn1,meta26280__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26281){
var self__ = this;
var _26281__$1 = this;
return self__.meta26280;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26279.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26269_SHARP_){
return f1.call(null,(((p1__26269_SHARP_ == null))?null:self__.f.call(null,p1__26269_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26279.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26277","meta26277",1135938011,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26276","cljs.core.async/t_cljs$core$async26276",1240236277,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26280","meta26280",1897366756,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26279";

cljs.core.async.t_cljs$core$async26279.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26279");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26279 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26279(map_LT___$1,f__$1,ch__$1,meta26277__$1,___$2,fn1__$1,meta26280){
return (new cljs.core.async.t_cljs$core$async26279(map_LT___$1,f__$1,ch__$1,meta26277__$1,___$2,fn1__$1,meta26280));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26279(self__.map_LT_,self__.f,self__.ch,self__.meta26277,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26276.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26277","meta26277",1135938011,null)], null);
});

cljs.core.async.t_cljs$core$async26276.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26276.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26276";

cljs.core.async.t_cljs$core$async26276.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26276");
});

cljs.core.async.__GT_t_cljs$core$async26276 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26276(map_LT___$1,f__$1,ch__$1,meta26277){
return (new cljs.core.async.t_cljs$core$async26276(map_LT___$1,f__$1,ch__$1,meta26277));
});

}

return (new cljs.core.async.t_cljs$core$async26276(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26285 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26285 = (function (map_GT_,f,ch,meta26286){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26286 = meta26286;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26287,meta26286__$1){
var self__ = this;
var _26287__$1 = this;
return (new cljs.core.async.t_cljs$core$async26285(self__.map_GT_,self__.f,self__.ch,meta26286__$1));
});

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26287){
var self__ = this;
var _26287__$1 = this;
return self__.meta26286;
});

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26285.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26285.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26286","meta26286",835914526,null)], null);
});

cljs.core.async.t_cljs$core$async26285.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26285.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26285";

cljs.core.async.t_cljs$core$async26285.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26285");
});

cljs.core.async.__GT_t_cljs$core$async26285 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26285(map_GT___$1,f__$1,ch__$1,meta26286){
return (new cljs.core.async.t_cljs$core$async26285(map_GT___$1,f__$1,ch__$1,meta26286));
});

}

return (new cljs.core.async.t_cljs$core$async26285(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26291 = (function (filter_GT_,p,ch,meta26292){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26292 = meta26292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26293,meta26292__$1){
var self__ = this;
var _26293__$1 = this;
return (new cljs.core.async.t_cljs$core$async26291(self__.filter_GT_,self__.p,self__.ch,meta26292__$1));
});

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26293){
var self__ = this;
var _26293__$1 = this;
return self__.meta26292;
});

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26291.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26292","meta26292",1266051460,null)], null);
});

cljs.core.async.t_cljs$core$async26291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26291";

cljs.core.async.t_cljs$core$async26291.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26291");
});

cljs.core.async.__GT_t_cljs$core$async26291 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26291(filter_GT___$1,p__$1,ch__$1,meta26292){
return (new cljs.core.async.t_cljs$core$async26291(filter_GT___$1,p__$1,ch__$1,meta26292));
});

}

return (new cljs.core.async.t_cljs$core$async26291(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26294 = [];
var len__17364__auto___26338 = arguments.length;
var i__17365__auto___26339 = (0);
while(true){
if((i__17365__auto___26339 < len__17364__auto___26338)){
args26294.push((arguments[i__17365__auto___26339]));

var G__26340 = (i__17365__auto___26339 + (1));
i__17365__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var G__26296 = args26294.length;
switch (G__26296) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26294.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26342,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26342,out){
return (function (state_26317){
var state_val_26318 = (state_26317[(1)]);
if((state_val_26318 === (7))){
var inst_26313 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26319_26343 = state_26317__$1;
(statearr_26319_26343[(2)] = inst_26313);

(statearr_26319_26343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (1))){
var state_26317__$1 = state_26317;
var statearr_26320_26344 = state_26317__$1;
(statearr_26320_26344[(2)] = null);

(statearr_26320_26344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (4))){
var inst_26299 = (state_26317[(7)]);
var inst_26299__$1 = (state_26317[(2)]);
var inst_26300 = (inst_26299__$1 == null);
var state_26317__$1 = (function (){var statearr_26321 = state_26317;
(statearr_26321[(7)] = inst_26299__$1);

return statearr_26321;
})();
if(cljs.core.truth_(inst_26300)){
var statearr_26322_26345 = state_26317__$1;
(statearr_26322_26345[(1)] = (5));

} else {
var statearr_26323_26346 = state_26317__$1;
(statearr_26323_26346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (6))){
var inst_26299 = (state_26317[(7)]);
var inst_26304 = p.call(null,inst_26299);
var state_26317__$1 = state_26317;
if(cljs.core.truth_(inst_26304)){
var statearr_26324_26347 = state_26317__$1;
(statearr_26324_26347[(1)] = (8));

} else {
var statearr_26325_26348 = state_26317__$1;
(statearr_26325_26348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (3))){
var inst_26315 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26317__$1,inst_26315);
} else {
if((state_val_26318 === (2))){
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26317__$1,(4),ch);
} else {
if((state_val_26318 === (11))){
var inst_26307 = (state_26317[(2)]);
var state_26317__$1 = state_26317;
var statearr_26326_26349 = state_26317__$1;
(statearr_26326_26349[(2)] = inst_26307);

(statearr_26326_26349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (9))){
var state_26317__$1 = state_26317;
var statearr_26327_26350 = state_26317__$1;
(statearr_26327_26350[(2)] = null);

(statearr_26327_26350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (5))){
var inst_26302 = cljs.core.async.close_BANG_.call(null,out);
var state_26317__$1 = state_26317;
var statearr_26328_26351 = state_26317__$1;
(statearr_26328_26351[(2)] = inst_26302);

(statearr_26328_26351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (10))){
var inst_26310 = (state_26317[(2)]);
var state_26317__$1 = (function (){var statearr_26329 = state_26317;
(statearr_26329[(8)] = inst_26310);

return statearr_26329;
})();
var statearr_26330_26352 = state_26317__$1;
(statearr_26330_26352[(2)] = null);

(statearr_26330_26352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26318 === (8))){
var inst_26299 = (state_26317[(7)]);
var state_26317__$1 = state_26317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26317__$1,(11),out,inst_26299);
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
});})(c__19340__auto___26342,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26342,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26334 = [null,null,null,null,null,null,null,null,null];
(statearr_26334[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26334[(1)] = (1));

return statearr_26334;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26317){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object)){
var ex__19323__auto__ = e26335;
var statearr_26336_26353 = state_26317;
(statearr_26336_26353[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26354 = state_26317;
state_26317 = G__26354;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26342,out))
})();
var state__19342__auto__ = (function (){var statearr_26337 = f__19341__auto__.call(null);
(statearr_26337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26342);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26342,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26355 = [];
var len__17364__auto___26358 = arguments.length;
var i__17365__auto___26359 = (0);
while(true){
if((i__17365__auto___26359 < len__17364__auto___26358)){
args26355.push((arguments[i__17365__auto___26359]));

var G__26360 = (i__17365__auto___26359 + (1));
i__17365__auto___26359 = G__26360;
continue;
} else {
}
break;
}

var G__26357 = args26355.length;
switch (G__26357) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26355.length)].join('')));

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
var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__){
return (function (state_26527){
var state_val_26528 = (state_26527[(1)]);
if((state_val_26528 === (7))){
var inst_26523 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26529_26570 = state_26527__$1;
(statearr_26529_26570[(2)] = inst_26523);

(statearr_26529_26570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (20))){
var inst_26493 = (state_26527[(7)]);
var inst_26504 = (state_26527[(2)]);
var inst_26505 = cljs.core.next.call(null,inst_26493);
var inst_26479 = inst_26505;
var inst_26480 = null;
var inst_26481 = (0);
var inst_26482 = (0);
var state_26527__$1 = (function (){var statearr_26530 = state_26527;
(statearr_26530[(8)] = inst_26504);

(statearr_26530[(9)] = inst_26479);

(statearr_26530[(10)] = inst_26481);

(statearr_26530[(11)] = inst_26480);

(statearr_26530[(12)] = inst_26482);

return statearr_26530;
})();
var statearr_26531_26571 = state_26527__$1;
(statearr_26531_26571[(2)] = null);

(statearr_26531_26571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (1))){
var state_26527__$1 = state_26527;
var statearr_26532_26572 = state_26527__$1;
(statearr_26532_26572[(2)] = null);

(statearr_26532_26572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (4))){
var inst_26468 = (state_26527[(13)]);
var inst_26468__$1 = (state_26527[(2)]);
var inst_26469 = (inst_26468__$1 == null);
var state_26527__$1 = (function (){var statearr_26533 = state_26527;
(statearr_26533[(13)] = inst_26468__$1);

return statearr_26533;
})();
if(cljs.core.truth_(inst_26469)){
var statearr_26534_26573 = state_26527__$1;
(statearr_26534_26573[(1)] = (5));

} else {
var statearr_26535_26574 = state_26527__$1;
(statearr_26535_26574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (15))){
var state_26527__$1 = state_26527;
var statearr_26539_26575 = state_26527__$1;
(statearr_26539_26575[(2)] = null);

(statearr_26539_26575[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (21))){
var state_26527__$1 = state_26527;
var statearr_26540_26576 = state_26527__$1;
(statearr_26540_26576[(2)] = null);

(statearr_26540_26576[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (13))){
var inst_26479 = (state_26527[(9)]);
var inst_26481 = (state_26527[(10)]);
var inst_26480 = (state_26527[(11)]);
var inst_26482 = (state_26527[(12)]);
var inst_26489 = (state_26527[(2)]);
var inst_26490 = (inst_26482 + (1));
var tmp26536 = inst_26479;
var tmp26537 = inst_26481;
var tmp26538 = inst_26480;
var inst_26479__$1 = tmp26536;
var inst_26480__$1 = tmp26538;
var inst_26481__$1 = tmp26537;
var inst_26482__$1 = inst_26490;
var state_26527__$1 = (function (){var statearr_26541 = state_26527;
(statearr_26541[(9)] = inst_26479__$1);

(statearr_26541[(10)] = inst_26481__$1);

(statearr_26541[(11)] = inst_26480__$1);

(statearr_26541[(12)] = inst_26482__$1);

(statearr_26541[(14)] = inst_26489);

return statearr_26541;
})();
var statearr_26542_26577 = state_26527__$1;
(statearr_26542_26577[(2)] = null);

(statearr_26542_26577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (22))){
var state_26527__$1 = state_26527;
var statearr_26543_26578 = state_26527__$1;
(statearr_26543_26578[(2)] = null);

(statearr_26543_26578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (6))){
var inst_26468 = (state_26527[(13)]);
var inst_26477 = f.call(null,inst_26468);
var inst_26478 = cljs.core.seq.call(null,inst_26477);
var inst_26479 = inst_26478;
var inst_26480 = null;
var inst_26481 = (0);
var inst_26482 = (0);
var state_26527__$1 = (function (){var statearr_26544 = state_26527;
(statearr_26544[(9)] = inst_26479);

(statearr_26544[(10)] = inst_26481);

(statearr_26544[(11)] = inst_26480);

(statearr_26544[(12)] = inst_26482);

return statearr_26544;
})();
var statearr_26545_26579 = state_26527__$1;
(statearr_26545_26579[(2)] = null);

(statearr_26545_26579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (17))){
var inst_26493 = (state_26527[(7)]);
var inst_26497 = cljs.core.chunk_first.call(null,inst_26493);
var inst_26498 = cljs.core.chunk_rest.call(null,inst_26493);
var inst_26499 = cljs.core.count.call(null,inst_26497);
var inst_26479 = inst_26498;
var inst_26480 = inst_26497;
var inst_26481 = inst_26499;
var inst_26482 = (0);
var state_26527__$1 = (function (){var statearr_26546 = state_26527;
(statearr_26546[(9)] = inst_26479);

(statearr_26546[(10)] = inst_26481);

(statearr_26546[(11)] = inst_26480);

(statearr_26546[(12)] = inst_26482);

return statearr_26546;
})();
var statearr_26547_26580 = state_26527__$1;
(statearr_26547_26580[(2)] = null);

(statearr_26547_26580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (3))){
var inst_26525 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26527__$1,inst_26525);
} else {
if((state_val_26528 === (12))){
var inst_26513 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26548_26581 = state_26527__$1;
(statearr_26548_26581[(2)] = inst_26513);

(statearr_26548_26581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (2))){
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26527__$1,(4),in$);
} else {
if((state_val_26528 === (23))){
var inst_26521 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26549_26582 = state_26527__$1;
(statearr_26549_26582[(2)] = inst_26521);

(statearr_26549_26582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (19))){
var inst_26508 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26550_26583 = state_26527__$1;
(statearr_26550_26583[(2)] = inst_26508);

(statearr_26550_26583[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (11))){
var inst_26493 = (state_26527[(7)]);
var inst_26479 = (state_26527[(9)]);
var inst_26493__$1 = cljs.core.seq.call(null,inst_26479);
var state_26527__$1 = (function (){var statearr_26551 = state_26527;
(statearr_26551[(7)] = inst_26493__$1);

return statearr_26551;
})();
if(inst_26493__$1){
var statearr_26552_26584 = state_26527__$1;
(statearr_26552_26584[(1)] = (14));

} else {
var statearr_26553_26585 = state_26527__$1;
(statearr_26553_26585[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (9))){
var inst_26515 = (state_26527[(2)]);
var inst_26516 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26527__$1 = (function (){var statearr_26554 = state_26527;
(statearr_26554[(15)] = inst_26515);

return statearr_26554;
})();
if(cljs.core.truth_(inst_26516)){
var statearr_26555_26586 = state_26527__$1;
(statearr_26555_26586[(1)] = (21));

} else {
var statearr_26556_26587 = state_26527__$1;
(statearr_26556_26587[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (5))){
var inst_26471 = cljs.core.async.close_BANG_.call(null,out);
var state_26527__$1 = state_26527;
var statearr_26557_26588 = state_26527__$1;
(statearr_26557_26588[(2)] = inst_26471);

(statearr_26557_26588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (14))){
var inst_26493 = (state_26527[(7)]);
var inst_26495 = cljs.core.chunked_seq_QMARK_.call(null,inst_26493);
var state_26527__$1 = state_26527;
if(inst_26495){
var statearr_26558_26589 = state_26527__$1;
(statearr_26558_26589[(1)] = (17));

} else {
var statearr_26559_26590 = state_26527__$1;
(statearr_26559_26590[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (16))){
var inst_26511 = (state_26527[(2)]);
var state_26527__$1 = state_26527;
var statearr_26560_26591 = state_26527__$1;
(statearr_26560_26591[(2)] = inst_26511);

(statearr_26560_26591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26528 === (10))){
var inst_26480 = (state_26527[(11)]);
var inst_26482 = (state_26527[(12)]);
var inst_26487 = cljs.core._nth.call(null,inst_26480,inst_26482);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26527__$1,(13),out,inst_26487);
} else {
if((state_val_26528 === (18))){
var inst_26493 = (state_26527[(7)]);
var inst_26502 = cljs.core.first.call(null,inst_26493);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26527__$1,(20),out,inst_26502);
} else {
if((state_val_26528 === (8))){
var inst_26481 = (state_26527[(10)]);
var inst_26482 = (state_26527[(12)]);
var inst_26484 = (inst_26482 < inst_26481);
var inst_26485 = inst_26484;
var state_26527__$1 = state_26527;
if(cljs.core.truth_(inst_26485)){
var statearr_26561_26592 = state_26527__$1;
(statearr_26561_26592[(1)] = (10));

} else {
var statearr_26562_26593 = state_26527__$1;
(statearr_26562_26593[(1)] = (11));

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
});})(c__19340__auto__))
;
return ((function (switch__19319__auto__,c__19340__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____0 = (function (){
var statearr_26566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26566[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__);

(statearr_26566[(1)] = (1));

return statearr_26566;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____1 = (function (state_26527){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26567){if((e26567 instanceof Object)){
var ex__19323__auto__ = e26567;
var statearr_26568_26594 = state_26527;
(statearr_26568_26594[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26595 = state_26527;
state_26527 = G__26595;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__ = function(state_26527){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____1.call(this,state_26527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19320__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__))
})();
var state__19342__auto__ = (function (){var statearr_26569 = f__19341__auto__.call(null);
(statearr_26569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_26569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__))
);

return c__19340__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26596 = [];
var len__17364__auto___26599 = arguments.length;
var i__17365__auto___26600 = (0);
while(true){
if((i__17365__auto___26600 < len__17364__auto___26599)){
args26596.push((arguments[i__17365__auto___26600]));

var G__26601 = (i__17365__auto___26600 + (1));
i__17365__auto___26600 = G__26601;
continue;
} else {
}
break;
}

var G__26598 = args26596.length;
switch (G__26598) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26596.length)].join('')));

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
var args26603 = [];
var len__17364__auto___26606 = arguments.length;
var i__17365__auto___26607 = (0);
while(true){
if((i__17365__auto___26607 < len__17364__auto___26606)){
args26603.push((arguments[i__17365__auto___26607]));

var G__26608 = (i__17365__auto___26607 + (1));
i__17365__auto___26607 = G__26608;
continue;
} else {
}
break;
}

var G__26605 = args26603.length;
switch (G__26605) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26603.length)].join('')));

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
var args26610 = [];
var len__17364__auto___26661 = arguments.length;
var i__17365__auto___26662 = (0);
while(true){
if((i__17365__auto___26662 < len__17364__auto___26661)){
args26610.push((arguments[i__17365__auto___26662]));

var G__26663 = (i__17365__auto___26662 + (1));
i__17365__auto___26662 = G__26663;
continue;
} else {
}
break;
}

var G__26612 = args26610.length;
switch (G__26612) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26610.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26665,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26665,out){
return (function (state_26636){
var state_val_26637 = (state_26636[(1)]);
if((state_val_26637 === (7))){
var inst_26631 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26638_26666 = state_26636__$1;
(statearr_26638_26666[(2)] = inst_26631);

(statearr_26638_26666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (1))){
var inst_26613 = null;
var state_26636__$1 = (function (){var statearr_26639 = state_26636;
(statearr_26639[(7)] = inst_26613);

return statearr_26639;
})();
var statearr_26640_26667 = state_26636__$1;
(statearr_26640_26667[(2)] = null);

(statearr_26640_26667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (4))){
var inst_26616 = (state_26636[(8)]);
var inst_26616__$1 = (state_26636[(2)]);
var inst_26617 = (inst_26616__$1 == null);
var inst_26618 = cljs.core.not.call(null,inst_26617);
var state_26636__$1 = (function (){var statearr_26641 = state_26636;
(statearr_26641[(8)] = inst_26616__$1);

return statearr_26641;
})();
if(inst_26618){
var statearr_26642_26668 = state_26636__$1;
(statearr_26642_26668[(1)] = (5));

} else {
var statearr_26643_26669 = state_26636__$1;
(statearr_26643_26669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (6))){
var state_26636__$1 = state_26636;
var statearr_26644_26670 = state_26636__$1;
(statearr_26644_26670[(2)] = null);

(statearr_26644_26670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (3))){
var inst_26633 = (state_26636[(2)]);
var inst_26634 = cljs.core.async.close_BANG_.call(null,out);
var state_26636__$1 = (function (){var statearr_26645 = state_26636;
(statearr_26645[(9)] = inst_26633);

return statearr_26645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26636__$1,inst_26634);
} else {
if((state_val_26637 === (2))){
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26636__$1,(4),ch);
} else {
if((state_val_26637 === (11))){
var inst_26616 = (state_26636[(8)]);
var inst_26625 = (state_26636[(2)]);
var inst_26613 = inst_26616;
var state_26636__$1 = (function (){var statearr_26646 = state_26636;
(statearr_26646[(7)] = inst_26613);

(statearr_26646[(10)] = inst_26625);

return statearr_26646;
})();
var statearr_26647_26671 = state_26636__$1;
(statearr_26647_26671[(2)] = null);

(statearr_26647_26671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (9))){
var inst_26616 = (state_26636[(8)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26636__$1,(11),out,inst_26616);
} else {
if((state_val_26637 === (5))){
var inst_26613 = (state_26636[(7)]);
var inst_26616 = (state_26636[(8)]);
var inst_26620 = cljs.core._EQ_.call(null,inst_26616,inst_26613);
var state_26636__$1 = state_26636;
if(inst_26620){
var statearr_26649_26672 = state_26636__$1;
(statearr_26649_26672[(1)] = (8));

} else {
var statearr_26650_26673 = state_26636__$1;
(statearr_26650_26673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (10))){
var inst_26628 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26651_26674 = state_26636__$1;
(statearr_26651_26674[(2)] = inst_26628);

(statearr_26651_26674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (8))){
var inst_26613 = (state_26636[(7)]);
var tmp26648 = inst_26613;
var inst_26613__$1 = tmp26648;
var state_26636__$1 = (function (){var statearr_26652 = state_26636;
(statearr_26652[(7)] = inst_26613__$1);

return statearr_26652;
})();
var statearr_26653_26675 = state_26636__$1;
(statearr_26653_26675[(2)] = null);

(statearr_26653_26675[(1)] = (2));


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
});})(c__19340__auto___26665,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26665,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26657[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26657[(1)] = (1));

return statearr_26657;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26636){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26658){if((e26658 instanceof Object)){
var ex__19323__auto__ = e26658;
var statearr_26659_26676 = state_26636;
(statearr_26659_26676[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26677 = state_26636;
state_26636 = G__26677;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26665,out))
})();
var state__19342__auto__ = (function (){var statearr_26660 = f__19341__auto__.call(null);
(statearr_26660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26665);

return statearr_26660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26665,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26678 = [];
var len__17364__auto___26748 = arguments.length;
var i__17365__auto___26749 = (0);
while(true){
if((i__17365__auto___26749 < len__17364__auto___26748)){
args26678.push((arguments[i__17365__auto___26749]));

var G__26750 = (i__17365__auto___26749 + (1));
i__17365__auto___26749 = G__26750;
continue;
} else {
}
break;
}

var G__26680 = args26678.length;
switch (G__26680) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26678.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26752 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26752,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26752,out){
return (function (state_26718){
var state_val_26719 = (state_26718[(1)]);
if((state_val_26719 === (7))){
var inst_26714 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26720_26753 = state_26718__$1;
(statearr_26720_26753[(2)] = inst_26714);

(statearr_26720_26753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (1))){
var inst_26681 = (new Array(n));
var inst_26682 = inst_26681;
var inst_26683 = (0);
var state_26718__$1 = (function (){var statearr_26721 = state_26718;
(statearr_26721[(7)] = inst_26682);

(statearr_26721[(8)] = inst_26683);

return statearr_26721;
})();
var statearr_26722_26754 = state_26718__$1;
(statearr_26722_26754[(2)] = null);

(statearr_26722_26754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (4))){
var inst_26686 = (state_26718[(9)]);
var inst_26686__$1 = (state_26718[(2)]);
var inst_26687 = (inst_26686__$1 == null);
var inst_26688 = cljs.core.not.call(null,inst_26687);
var state_26718__$1 = (function (){var statearr_26723 = state_26718;
(statearr_26723[(9)] = inst_26686__$1);

return statearr_26723;
})();
if(inst_26688){
var statearr_26724_26755 = state_26718__$1;
(statearr_26724_26755[(1)] = (5));

} else {
var statearr_26725_26756 = state_26718__$1;
(statearr_26725_26756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (15))){
var inst_26708 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26726_26757 = state_26718__$1;
(statearr_26726_26757[(2)] = inst_26708);

(statearr_26726_26757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (13))){
var state_26718__$1 = state_26718;
var statearr_26727_26758 = state_26718__$1;
(statearr_26727_26758[(2)] = null);

(statearr_26727_26758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (6))){
var inst_26683 = (state_26718[(8)]);
var inst_26704 = (inst_26683 > (0));
var state_26718__$1 = state_26718;
if(cljs.core.truth_(inst_26704)){
var statearr_26728_26759 = state_26718__$1;
(statearr_26728_26759[(1)] = (12));

} else {
var statearr_26729_26760 = state_26718__$1;
(statearr_26729_26760[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (3))){
var inst_26716 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26718__$1,inst_26716);
} else {
if((state_val_26719 === (12))){
var inst_26682 = (state_26718[(7)]);
var inst_26706 = cljs.core.vec.call(null,inst_26682);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26718__$1,(15),out,inst_26706);
} else {
if((state_val_26719 === (2))){
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26718__$1,(4),ch);
} else {
if((state_val_26719 === (11))){
var inst_26698 = (state_26718[(2)]);
var inst_26699 = (new Array(n));
var inst_26682 = inst_26699;
var inst_26683 = (0);
var state_26718__$1 = (function (){var statearr_26730 = state_26718;
(statearr_26730[(7)] = inst_26682);

(statearr_26730[(10)] = inst_26698);

(statearr_26730[(8)] = inst_26683);

return statearr_26730;
})();
var statearr_26731_26761 = state_26718__$1;
(statearr_26731_26761[(2)] = null);

(statearr_26731_26761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (9))){
var inst_26682 = (state_26718[(7)]);
var inst_26696 = cljs.core.vec.call(null,inst_26682);
var state_26718__$1 = state_26718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26718__$1,(11),out,inst_26696);
} else {
if((state_val_26719 === (5))){
var inst_26682 = (state_26718[(7)]);
var inst_26691 = (state_26718[(11)]);
var inst_26686 = (state_26718[(9)]);
var inst_26683 = (state_26718[(8)]);
var inst_26690 = (inst_26682[inst_26683] = inst_26686);
var inst_26691__$1 = (inst_26683 + (1));
var inst_26692 = (inst_26691__$1 < n);
var state_26718__$1 = (function (){var statearr_26732 = state_26718;
(statearr_26732[(11)] = inst_26691__$1);

(statearr_26732[(12)] = inst_26690);

return statearr_26732;
})();
if(cljs.core.truth_(inst_26692)){
var statearr_26733_26762 = state_26718__$1;
(statearr_26733_26762[(1)] = (8));

} else {
var statearr_26734_26763 = state_26718__$1;
(statearr_26734_26763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (14))){
var inst_26711 = (state_26718[(2)]);
var inst_26712 = cljs.core.async.close_BANG_.call(null,out);
var state_26718__$1 = (function (){var statearr_26736 = state_26718;
(statearr_26736[(13)] = inst_26711);

return statearr_26736;
})();
var statearr_26737_26764 = state_26718__$1;
(statearr_26737_26764[(2)] = inst_26712);

(statearr_26737_26764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (10))){
var inst_26702 = (state_26718[(2)]);
var state_26718__$1 = state_26718;
var statearr_26738_26765 = state_26718__$1;
(statearr_26738_26765[(2)] = inst_26702);

(statearr_26738_26765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26719 === (8))){
var inst_26682 = (state_26718[(7)]);
var inst_26691 = (state_26718[(11)]);
var tmp26735 = inst_26682;
var inst_26682__$1 = tmp26735;
var inst_26683 = inst_26691;
var state_26718__$1 = (function (){var statearr_26739 = state_26718;
(statearr_26739[(7)] = inst_26682__$1);

(statearr_26739[(8)] = inst_26683);

return statearr_26739;
})();
var statearr_26740_26766 = state_26718__$1;
(statearr_26740_26766[(2)] = null);

(statearr_26740_26766[(1)] = (2));


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
});})(c__19340__auto___26752,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26752,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26744[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26744[(1)] = (1));

return statearr_26744;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26718){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26745){if((e26745 instanceof Object)){
var ex__19323__auto__ = e26745;
var statearr_26746_26767 = state_26718;
(statearr_26746_26767[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26768 = state_26718;
state_26718 = G__26768;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26752,out))
})();
var state__19342__auto__ = (function (){var statearr_26747 = f__19341__auto__.call(null);
(statearr_26747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26752);

return statearr_26747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26752,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26769 = [];
var len__17364__auto___26843 = arguments.length;
var i__17365__auto___26844 = (0);
while(true){
if((i__17365__auto___26844 < len__17364__auto___26843)){
args26769.push((arguments[i__17365__auto___26844]));

var G__26845 = (i__17365__auto___26844 + (1));
i__17365__auto___26844 = G__26845;
continue;
} else {
}
break;
}

var G__26771 = args26769.length;
switch (G__26771) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26769.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19340__auto___26847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___26847,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___26847,out){
return (function (state_26813){
var state_val_26814 = (state_26813[(1)]);
if((state_val_26814 === (7))){
var inst_26809 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26815_26848 = state_26813__$1;
(statearr_26815_26848[(2)] = inst_26809);

(statearr_26815_26848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (1))){
var inst_26772 = [];
var inst_26773 = inst_26772;
var inst_26774 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26813__$1 = (function (){var statearr_26816 = state_26813;
(statearr_26816[(7)] = inst_26773);

(statearr_26816[(8)] = inst_26774);

return statearr_26816;
})();
var statearr_26817_26849 = state_26813__$1;
(statearr_26817_26849[(2)] = null);

(statearr_26817_26849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (4))){
var inst_26777 = (state_26813[(9)]);
var inst_26777__$1 = (state_26813[(2)]);
var inst_26778 = (inst_26777__$1 == null);
var inst_26779 = cljs.core.not.call(null,inst_26778);
var state_26813__$1 = (function (){var statearr_26818 = state_26813;
(statearr_26818[(9)] = inst_26777__$1);

return statearr_26818;
})();
if(inst_26779){
var statearr_26819_26850 = state_26813__$1;
(statearr_26819_26850[(1)] = (5));

} else {
var statearr_26820_26851 = state_26813__$1;
(statearr_26820_26851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (15))){
var inst_26803 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26821_26852 = state_26813__$1;
(statearr_26821_26852[(2)] = inst_26803);

(statearr_26821_26852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (13))){
var state_26813__$1 = state_26813;
var statearr_26822_26853 = state_26813__$1;
(statearr_26822_26853[(2)] = null);

(statearr_26822_26853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (6))){
var inst_26773 = (state_26813[(7)]);
var inst_26798 = inst_26773.length;
var inst_26799 = (inst_26798 > (0));
var state_26813__$1 = state_26813;
if(cljs.core.truth_(inst_26799)){
var statearr_26823_26854 = state_26813__$1;
(statearr_26823_26854[(1)] = (12));

} else {
var statearr_26824_26855 = state_26813__$1;
(statearr_26824_26855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (3))){
var inst_26811 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26813__$1,inst_26811);
} else {
if((state_val_26814 === (12))){
var inst_26773 = (state_26813[(7)]);
var inst_26801 = cljs.core.vec.call(null,inst_26773);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26813__$1,(15),out,inst_26801);
} else {
if((state_val_26814 === (2))){
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26813__$1,(4),ch);
} else {
if((state_val_26814 === (11))){
var inst_26781 = (state_26813[(10)]);
var inst_26777 = (state_26813[(9)]);
var inst_26791 = (state_26813[(2)]);
var inst_26792 = [];
var inst_26793 = inst_26792.push(inst_26777);
var inst_26773 = inst_26792;
var inst_26774 = inst_26781;
var state_26813__$1 = (function (){var statearr_26825 = state_26813;
(statearr_26825[(7)] = inst_26773);

(statearr_26825[(8)] = inst_26774);

(statearr_26825[(11)] = inst_26791);

(statearr_26825[(12)] = inst_26793);

return statearr_26825;
})();
var statearr_26826_26856 = state_26813__$1;
(statearr_26826_26856[(2)] = null);

(statearr_26826_26856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (9))){
var inst_26773 = (state_26813[(7)]);
var inst_26789 = cljs.core.vec.call(null,inst_26773);
var state_26813__$1 = state_26813;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26813__$1,(11),out,inst_26789);
} else {
if((state_val_26814 === (5))){
var inst_26781 = (state_26813[(10)]);
var inst_26774 = (state_26813[(8)]);
var inst_26777 = (state_26813[(9)]);
var inst_26781__$1 = f.call(null,inst_26777);
var inst_26782 = cljs.core._EQ_.call(null,inst_26781__$1,inst_26774);
var inst_26783 = cljs.core.keyword_identical_QMARK_.call(null,inst_26774,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26784 = (inst_26782) || (inst_26783);
var state_26813__$1 = (function (){var statearr_26827 = state_26813;
(statearr_26827[(10)] = inst_26781__$1);

return statearr_26827;
})();
if(cljs.core.truth_(inst_26784)){
var statearr_26828_26857 = state_26813__$1;
(statearr_26828_26857[(1)] = (8));

} else {
var statearr_26829_26858 = state_26813__$1;
(statearr_26829_26858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (14))){
var inst_26806 = (state_26813[(2)]);
var inst_26807 = cljs.core.async.close_BANG_.call(null,out);
var state_26813__$1 = (function (){var statearr_26831 = state_26813;
(statearr_26831[(13)] = inst_26806);

return statearr_26831;
})();
var statearr_26832_26859 = state_26813__$1;
(statearr_26832_26859[(2)] = inst_26807);

(statearr_26832_26859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (10))){
var inst_26796 = (state_26813[(2)]);
var state_26813__$1 = state_26813;
var statearr_26833_26860 = state_26813__$1;
(statearr_26833_26860[(2)] = inst_26796);

(statearr_26833_26860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26814 === (8))){
var inst_26773 = (state_26813[(7)]);
var inst_26781 = (state_26813[(10)]);
var inst_26777 = (state_26813[(9)]);
var inst_26786 = inst_26773.push(inst_26777);
var tmp26830 = inst_26773;
var inst_26773__$1 = tmp26830;
var inst_26774 = inst_26781;
var state_26813__$1 = (function (){var statearr_26834 = state_26813;
(statearr_26834[(7)] = inst_26773__$1);

(statearr_26834[(14)] = inst_26786);

(statearr_26834[(8)] = inst_26774);

return statearr_26834;
})();
var statearr_26835_26861 = state_26813__$1;
(statearr_26835_26861[(2)] = null);

(statearr_26835_26861[(1)] = (2));


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
});})(c__19340__auto___26847,out))
;
return ((function (switch__19319__auto__,c__19340__auto___26847,out){
return (function() {
var cljs$core$async$state_machine__19320__auto__ = null;
var cljs$core$async$state_machine__19320__auto____0 = (function (){
var statearr_26839 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26839[(0)] = cljs$core$async$state_machine__19320__auto__);

(statearr_26839[(1)] = (1));

return statearr_26839;
});
var cljs$core$async$state_machine__19320__auto____1 = (function (state_26813){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_26813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e26840){if((e26840 instanceof Object)){
var ex__19323__auto__ = e26840;
var statearr_26841_26862 = state_26813;
(statearr_26841_26862[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26813;
state_26813 = G__26863;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
cljs$core$async$state_machine__19320__auto__ = function(state_26813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19320__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19320__auto____1.call(this,state_26813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19320__auto____0;
cljs$core$async$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19320__auto____1;
return cljs$core$async$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___26847,out))
})();
var state__19342__auto__ = (function (){var statearr_26842 = f__19341__auto__.call(null);
(statearr_26842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___26847);

return statearr_26842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___26847,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444562459489