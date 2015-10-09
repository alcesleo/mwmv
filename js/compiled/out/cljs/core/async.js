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
if(typeof cljs.core.async.t_cljs$core$async25020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25020 = (function (fn_handler,f,meta25021){
this.fn_handler = fn_handler;
this.f = f;
this.meta25021 = meta25021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25022,meta25021__$1){
var self__ = this;
var _25022__$1 = this;
return (new cljs.core.async.t_cljs$core$async25020(self__.fn_handler,self__.f,meta25021__$1));
});

cljs.core.async.t_cljs$core$async25020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25022){
var self__ = this;
var _25022__$1 = this;
return self__.meta25021;
});

cljs.core.async.t_cljs$core$async25020.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25021","meta25021",-1197944411,null)], null);
});

cljs.core.async.t_cljs$core$async25020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25020";

cljs.core.async.t_cljs$core$async25020.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25020");
});

cljs.core.async.__GT_t_cljs$core$async25020 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async25020(fn_handler__$1,f__$1,meta25021){
return (new cljs.core.async.t_cljs$core$async25020(fn_handler__$1,f__$1,meta25021));
});

}

return (new cljs.core.async.t_cljs$core$async25020(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args25025 = [];
var len__17364__auto___25028 = arguments.length;
var i__17365__auto___25029 = (0);
while(true){
if((i__17365__auto___25029 < len__17364__auto___25028)){
args25025.push((arguments[i__17365__auto___25029]));

var G__25030 = (i__17365__auto___25029 + (1));
i__17365__auto___25029 = G__25030;
continue;
} else {
}
break;
}

var G__25027 = args25025.length;
switch (G__25027) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25025.length)].join('')));

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
var args25032 = [];
var len__17364__auto___25035 = arguments.length;
var i__17365__auto___25036 = (0);
while(true){
if((i__17365__auto___25036 < len__17364__auto___25035)){
args25032.push((arguments[i__17365__auto___25036]));

var G__25037 = (i__17365__auto___25036 + (1));
i__17365__auto___25036 = G__25037;
continue;
} else {
}
break;
}

var G__25034 = args25032.length;
switch (G__25034) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25032.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25039 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25039);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25039,ret){
return (function (){
return fn1.call(null,val_25039);
});})(val_25039,ret))
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
var args25040 = [];
var len__17364__auto___25043 = arguments.length;
var i__17365__auto___25044 = (0);
while(true){
if((i__17365__auto___25044 < len__17364__auto___25043)){
args25040.push((arguments[i__17365__auto___25044]));

var G__25045 = (i__17365__auto___25044 + (1));
i__17365__auto___25044 = G__25045;
continue;
} else {
}
break;
}

var G__25042 = args25040.length;
switch (G__25042) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25040.length)].join('')));

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
var n__17209__auto___25047 = n;
var x_25048 = (0);
while(true){
if((x_25048 < n__17209__auto___25047)){
(a[x_25048] = (0));

var G__25049 = (x_25048 + (1));
x_25048 = G__25049;
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

var G__25050 = (i + (1));
i = G__25050;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25054 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25054 = (function (alt_flag,flag,meta25055){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25055 = meta25055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25056,meta25055__$1){
var self__ = this;
var _25056__$1 = this;
return (new cljs.core.async.t_cljs$core$async25054(self__.alt_flag,self__.flag,meta25055__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25056){
var self__ = this;
var _25056__$1 = this;
return self__.meta25055;
});})(flag))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25054.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25055","meta25055",-975184149,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25054.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25054";

cljs.core.async.t_cljs$core$async25054.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25054");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25054 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25054(alt_flag__$1,flag__$1,meta25055){
return (new cljs.core.async.t_cljs$core$async25054(alt_flag__$1,flag__$1,meta25055));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25054(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25060 = (function (alt_handler,flag,cb,meta25061){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25061 = meta25061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25062,meta25061__$1){
var self__ = this;
var _25062__$1 = this;
return (new cljs.core.async.t_cljs$core$async25060(self__.alt_handler,self__.flag,self__.cb,meta25061__$1));
});

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25062){
var self__ = this;
var _25062__$1 = this;
return self__.meta25061;
});

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25060.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25061","meta25061",-1164225311,null)], null);
});

cljs.core.async.t_cljs$core$async25060.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25060";

cljs.core.async.t_cljs$core$async25060.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async25060");
});

cljs.core.async.__GT_t_cljs$core$async25060 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25060(alt_handler__$1,flag__$1,cb__$1,meta25061){
return (new cljs.core.async.t_cljs$core$async25060(alt_handler__$1,flag__$1,cb__$1,meta25061));
});

}

return (new cljs.core.async.t_cljs$core$async25060(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25063_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25063_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25064_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25064_SHARP_,port], null));
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
var G__25065 = (i + (1));
i = G__25065;
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
var len__17364__auto___25071 = arguments.length;
var i__17365__auto___25072 = (0);
while(true){
if((i__17365__auto___25072 < len__17364__auto___25071)){
args__17371__auto__.push((arguments[i__17365__auto___25072]));

var G__25073 = (i__17365__auto___25072 + (1));
i__17365__auto___25072 = G__25073;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((1) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17372__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25068){
var map__25069 = p__25068;
var map__25069__$1 = ((((!((map__25069 == null)))?((((map__25069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25069):map__25069);
var opts = map__25069__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25066){
var G__25067 = cljs.core.first.call(null,seq25066);
var seq25066__$1 = cljs.core.next.call(null,seq25066);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25067,seq25066__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25074 = [];
var len__17364__auto___25124 = arguments.length;
var i__17365__auto___25125 = (0);
while(true){
if((i__17365__auto___25125 < len__17364__auto___25124)){
args25074.push((arguments[i__17365__auto___25125]));

var G__25126 = (i__17365__auto___25125 + (1));
i__17365__auto___25125 = G__25126;
continue;
} else {
}
break;
}

var G__25076 = args25074.length;
switch (G__25076) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25074.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19328__auto___25128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___25128){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___25128){
return (function (state_25100){
var state_val_25101 = (state_25100[(1)]);
if((state_val_25101 === (7))){
var inst_25096 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25102_25129 = state_25100__$1;
(statearr_25102_25129[(2)] = inst_25096);

(statearr_25102_25129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (1))){
var state_25100__$1 = state_25100;
var statearr_25103_25130 = state_25100__$1;
(statearr_25103_25130[(2)] = null);

(statearr_25103_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (4))){
var inst_25079 = (state_25100[(7)]);
var inst_25079__$1 = (state_25100[(2)]);
var inst_25080 = (inst_25079__$1 == null);
var state_25100__$1 = (function (){var statearr_25104 = state_25100;
(statearr_25104[(7)] = inst_25079__$1);

return statearr_25104;
})();
if(cljs.core.truth_(inst_25080)){
var statearr_25105_25131 = state_25100__$1;
(statearr_25105_25131[(1)] = (5));

} else {
var statearr_25106_25132 = state_25100__$1;
(statearr_25106_25132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (13))){
var state_25100__$1 = state_25100;
var statearr_25107_25133 = state_25100__$1;
(statearr_25107_25133[(2)] = null);

(statearr_25107_25133[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (6))){
var inst_25079 = (state_25100[(7)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25100__$1,(11),to,inst_25079);
} else {
if((state_val_25101 === (3))){
var inst_25098 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25100__$1,inst_25098);
} else {
if((state_val_25101 === (12))){
var state_25100__$1 = state_25100;
var statearr_25108_25134 = state_25100__$1;
(statearr_25108_25134[(2)] = null);

(statearr_25108_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (2))){
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25100__$1,(4),from);
} else {
if((state_val_25101 === (11))){
var inst_25089 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
if(cljs.core.truth_(inst_25089)){
var statearr_25109_25135 = state_25100__$1;
(statearr_25109_25135[(1)] = (12));

} else {
var statearr_25110_25136 = state_25100__$1;
(statearr_25110_25136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (9))){
var state_25100__$1 = state_25100;
var statearr_25111_25137 = state_25100__$1;
(statearr_25111_25137[(2)] = null);

(statearr_25111_25137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (5))){
var state_25100__$1 = state_25100;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25112_25138 = state_25100__$1;
(statearr_25112_25138[(1)] = (8));

} else {
var statearr_25113_25139 = state_25100__$1;
(statearr_25113_25139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (14))){
var inst_25094 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25114_25140 = state_25100__$1;
(statearr_25114_25140[(2)] = inst_25094);

(statearr_25114_25140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (10))){
var inst_25086 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25115_25141 = state_25100__$1;
(statearr_25115_25141[(2)] = inst_25086);

(statearr_25115_25141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (8))){
var inst_25083 = cljs.core.async.close_BANG_.call(null,to);
var state_25100__$1 = state_25100;
var statearr_25116_25142 = state_25100__$1;
(statearr_25116_25142[(2)] = inst_25083);

(statearr_25116_25142[(1)] = (10));


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
});})(c__19328__auto___25128))
;
return ((function (switch__19307__auto__,c__19328__auto___25128){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_25120 = [null,null,null,null,null,null,null,null];
(statearr_25120[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_25120[(1)] = (1));

return statearr_25120;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_25100){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25121){if((e25121 instanceof Object)){
var ex__19311__auto__ = e25121;
var statearr_25122_25143 = state_25100;
(statearr_25122_25143[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25144 = state_25100;
state_25100 = G__25144;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_25100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_25100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___25128))
})();
var state__19330__auto__ = (function (){var statearr_25123 = f__19329__auto__.call(null);
(statearr_25123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25128);

return statearr_25123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___25128))
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
return (function (p__25328){
var vec__25329 = p__25328;
var v = cljs.core.nth.call(null,vec__25329,(0),null);
var p = cljs.core.nth.call(null,vec__25329,(1),null);
var job = vec__25329;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19328__auto___25511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results){
return (function (state_25334){
var state_val_25335 = (state_25334[(1)]);
if((state_val_25335 === (1))){
var state_25334__$1 = state_25334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25334__$1,(2),res,v);
} else {
if((state_val_25335 === (2))){
var inst_25331 = (state_25334[(2)]);
var inst_25332 = cljs.core.async.close_BANG_.call(null,res);
var state_25334__$1 = (function (){var statearr_25336 = state_25334;
(statearr_25336[(7)] = inst_25331);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25334__$1,inst_25332);
} else {
return null;
}
}
});})(c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results))
;
return ((function (switch__19307__auto__,c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_25340 = [null,null,null,null,null,null,null,null];
(statearr_25340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_25340[(1)] = (1));

return statearr_25340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_25334){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25341){if((e25341 instanceof Object)){
var ex__19311__auto__ = e25341;
var statearr_25342_25512 = state_25334;
(statearr_25342_25512[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25513 = state_25334;
state_25334 = G__25513;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_25334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_25334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results))
})();
var state__19330__auto__ = (function (){var statearr_25343 = f__19329__auto__.call(null);
(statearr_25343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25511);

return statearr_25343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___25511,res,vec__25329,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25344){
var vec__25345 = p__25344;
var v = cljs.core.nth.call(null,vec__25345,(0),null);
var p = cljs.core.nth.call(null,vec__25345,(1),null);
var job = vec__25345;
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
var n__17209__auto___25514 = n;
var __25515 = (0);
while(true){
if((__25515 < n__17209__auto___25514)){
var G__25346_25516 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25346_25516) {
case "compute":
var c__19328__auto___25518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25515,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (__25515,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function (state_25359){
var state_val_25360 = (state_25359[(1)]);
if((state_val_25360 === (1))){
var state_25359__$1 = state_25359;
var statearr_25361_25519 = state_25359__$1;
(statearr_25361_25519[(2)] = null);

(statearr_25361_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (2))){
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25359__$1,(4),jobs);
} else {
if((state_val_25360 === (3))){
var inst_25357 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25359__$1,inst_25357);
} else {
if((state_val_25360 === (4))){
var inst_25349 = (state_25359[(2)]);
var inst_25350 = process.call(null,inst_25349);
var state_25359__$1 = state_25359;
if(cljs.core.truth_(inst_25350)){
var statearr_25362_25520 = state_25359__$1;
(statearr_25362_25520[(1)] = (5));

} else {
var statearr_25363_25521 = state_25359__$1;
(statearr_25363_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (5))){
var state_25359__$1 = state_25359;
var statearr_25364_25522 = state_25359__$1;
(statearr_25364_25522[(2)] = null);

(statearr_25364_25522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (6))){
var state_25359__$1 = state_25359;
var statearr_25365_25523 = state_25359__$1;
(statearr_25365_25523[(2)] = null);

(statearr_25365_25523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25360 === (7))){
var inst_25355 = (state_25359[(2)]);
var state_25359__$1 = state_25359;
var statearr_25366_25524 = state_25359__$1;
(statearr_25366_25524[(2)] = inst_25355);

(statearr_25366_25524[(1)] = (3));


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
});})(__25515,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
;
return ((function (__25515,switch__19307__auto__,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_25370 = [null,null,null,null,null,null,null];
(statearr_25370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_25370[(1)] = (1));

return statearr_25370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_25359){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25371){if((e25371 instanceof Object)){
var ex__19311__auto__ = e25371;
var statearr_25372_25525 = state_25359;
(statearr_25372_25525[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25526 = state_25359;
state_25359 = G__25526;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(__25515,switch__19307__auto__,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_25373 = f__19329__auto__.call(null);
(statearr_25373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25518);

return statearr_25373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(__25515,c__19328__auto___25518,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
);


break;
case "async":
var c__19328__auto___25527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25515,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (__25515,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function (state_25386){
var state_val_25387 = (state_25386[(1)]);
if((state_val_25387 === (1))){
var state_25386__$1 = state_25386;
var statearr_25388_25528 = state_25386__$1;
(statearr_25388_25528[(2)] = null);

(statearr_25388_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (2))){
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25386__$1,(4),jobs);
} else {
if((state_val_25387 === (3))){
var inst_25384 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25386__$1,inst_25384);
} else {
if((state_val_25387 === (4))){
var inst_25376 = (state_25386[(2)]);
var inst_25377 = async.call(null,inst_25376);
var state_25386__$1 = state_25386;
if(cljs.core.truth_(inst_25377)){
var statearr_25389_25529 = state_25386__$1;
(statearr_25389_25529[(1)] = (5));

} else {
var statearr_25390_25530 = state_25386__$1;
(statearr_25390_25530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (5))){
var state_25386__$1 = state_25386;
var statearr_25391_25531 = state_25386__$1;
(statearr_25391_25531[(2)] = null);

(statearr_25391_25531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (6))){
var state_25386__$1 = state_25386;
var statearr_25392_25532 = state_25386__$1;
(statearr_25392_25532[(2)] = null);

(statearr_25392_25532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25387 === (7))){
var inst_25382 = (state_25386[(2)]);
var state_25386__$1 = state_25386;
var statearr_25393_25533 = state_25386__$1;
(statearr_25393_25533[(2)] = inst_25382);

(statearr_25393_25533[(1)] = (3));


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
});})(__25515,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
;
return ((function (__25515,switch__19307__auto__,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_25386){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25398){if((e25398 instanceof Object)){
var ex__19311__auto__ = e25398;
var statearr_25399_25534 = state_25386;
(statearr_25399_25534[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25535 = state_25386;
state_25386 = G__25535;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_25386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_25386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(__25515,switch__19307__auto__,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_25400 = f__19329__auto__.call(null);
(statearr_25400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25527);

return statearr_25400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(__25515,c__19328__auto___25527,G__25346_25516,n__17209__auto___25514,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25536 = (__25515 + (1));
__25515 = G__25536;
continue;
} else {
}
break;
}

var c__19328__auto___25537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___25537,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___25537,jobs,results,process,async){
return (function (state_25422){
var state_val_25423 = (state_25422[(1)]);
if((state_val_25423 === (1))){
var state_25422__$1 = state_25422;
var statearr_25424_25538 = state_25422__$1;
(statearr_25424_25538[(2)] = null);

(statearr_25424_25538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (2))){
var state_25422__$1 = state_25422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25422__$1,(4),from);
} else {
if((state_val_25423 === (3))){
var inst_25420 = (state_25422[(2)]);
var state_25422__$1 = state_25422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25422__$1,inst_25420);
} else {
if((state_val_25423 === (4))){
var inst_25403 = (state_25422[(7)]);
var inst_25403__$1 = (state_25422[(2)]);
var inst_25404 = (inst_25403__$1 == null);
var state_25422__$1 = (function (){var statearr_25425 = state_25422;
(statearr_25425[(7)] = inst_25403__$1);

return statearr_25425;
})();
if(cljs.core.truth_(inst_25404)){
var statearr_25426_25539 = state_25422__$1;
(statearr_25426_25539[(1)] = (5));

} else {
var statearr_25427_25540 = state_25422__$1;
(statearr_25427_25540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (5))){
var inst_25406 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25422__$1 = state_25422;
var statearr_25428_25541 = state_25422__$1;
(statearr_25428_25541[(2)] = inst_25406);

(statearr_25428_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (6))){
var inst_25408 = (state_25422[(8)]);
var inst_25403 = (state_25422[(7)]);
var inst_25408__$1 = cljs.core.async.chan.call(null,(1));
var inst_25409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25410 = [inst_25403,inst_25408__$1];
var inst_25411 = (new cljs.core.PersistentVector(null,2,(5),inst_25409,inst_25410,null));
var state_25422__$1 = (function (){var statearr_25429 = state_25422;
(statearr_25429[(8)] = inst_25408__$1);

return statearr_25429;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25422__$1,(8),jobs,inst_25411);
} else {
if((state_val_25423 === (7))){
var inst_25418 = (state_25422[(2)]);
var state_25422__$1 = state_25422;
var statearr_25430_25542 = state_25422__$1;
(statearr_25430_25542[(2)] = inst_25418);

(statearr_25430_25542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25423 === (8))){
var inst_25408 = (state_25422[(8)]);
var inst_25413 = (state_25422[(2)]);
var state_25422__$1 = (function (){var statearr_25431 = state_25422;
(statearr_25431[(9)] = inst_25413);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25422__$1,(9),results,inst_25408);
} else {
if((state_val_25423 === (9))){
var inst_25415 = (state_25422[(2)]);
var state_25422__$1 = (function (){var statearr_25432 = state_25422;
(statearr_25432[(10)] = inst_25415);

return statearr_25432;
})();
var statearr_25433_25543 = state_25422__$1;
(statearr_25433_25543[(2)] = null);

(statearr_25433_25543[(1)] = (2));


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
});})(c__19328__auto___25537,jobs,results,process,async))
;
return ((function (switch__19307__auto__,c__19328__auto___25537,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0 = (function (){
var statearr_25437 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_25437[(1)] = (1));

return statearr_25437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_25422){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25438){if((e25438 instanceof Object)){
var ex__19311__auto__ = e25438;
var statearr_25439_25544 = state_25422;
(statearr_25439_25544[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25545 = state_25422;
state_25422 = G__25545;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_25422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_25422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___25537,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_25440 = f__19329__auto__.call(null);
(statearr_25440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25537);

return statearr_25440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___25537,jobs,results,process,async))
);


var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__,jobs,results,process,async){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__,jobs,results,process,async){
return (function (state_25478){
var state_val_25479 = (state_25478[(1)]);
if((state_val_25479 === (7))){
var inst_25474 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25480_25546 = state_25478__$1;
(statearr_25480_25546[(2)] = inst_25474);

(statearr_25480_25546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (20))){
var state_25478__$1 = state_25478;
var statearr_25481_25547 = state_25478__$1;
(statearr_25481_25547[(2)] = null);

(statearr_25481_25547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (1))){
var state_25478__$1 = state_25478;
var statearr_25482_25548 = state_25478__$1;
(statearr_25482_25548[(2)] = null);

(statearr_25482_25548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (4))){
var inst_25443 = (state_25478[(7)]);
var inst_25443__$1 = (state_25478[(2)]);
var inst_25444 = (inst_25443__$1 == null);
var state_25478__$1 = (function (){var statearr_25483 = state_25478;
(statearr_25483[(7)] = inst_25443__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25444)){
var statearr_25484_25549 = state_25478__$1;
(statearr_25484_25549[(1)] = (5));

} else {
var statearr_25485_25550 = state_25478__$1;
(statearr_25485_25550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (15))){
var inst_25456 = (state_25478[(8)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25478__$1,(18),to,inst_25456);
} else {
if((state_val_25479 === (21))){
var inst_25469 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25486_25551 = state_25478__$1;
(statearr_25486_25551[(2)] = inst_25469);

(statearr_25486_25551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (13))){
var inst_25471 = (state_25478[(2)]);
var state_25478__$1 = (function (){var statearr_25487 = state_25478;
(statearr_25487[(9)] = inst_25471);

return statearr_25487;
})();
var statearr_25488_25552 = state_25478__$1;
(statearr_25488_25552[(2)] = null);

(statearr_25488_25552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (6))){
var inst_25443 = (state_25478[(7)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25478__$1,(11),inst_25443);
} else {
if((state_val_25479 === (17))){
var inst_25464 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
if(cljs.core.truth_(inst_25464)){
var statearr_25489_25553 = state_25478__$1;
(statearr_25489_25553[(1)] = (19));

} else {
var statearr_25490_25554 = state_25478__$1;
(statearr_25490_25554[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (3))){
var inst_25476 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25478__$1,inst_25476);
} else {
if((state_val_25479 === (12))){
var inst_25453 = (state_25478[(10)]);
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25478__$1,(14),inst_25453);
} else {
if((state_val_25479 === (2))){
var state_25478__$1 = state_25478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25478__$1,(4),results);
} else {
if((state_val_25479 === (19))){
var state_25478__$1 = state_25478;
var statearr_25491_25555 = state_25478__$1;
(statearr_25491_25555[(2)] = null);

(statearr_25491_25555[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (11))){
var inst_25453 = (state_25478[(2)]);
var state_25478__$1 = (function (){var statearr_25492 = state_25478;
(statearr_25492[(10)] = inst_25453);

return statearr_25492;
})();
var statearr_25493_25556 = state_25478__$1;
(statearr_25493_25556[(2)] = null);

(statearr_25493_25556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (9))){
var state_25478__$1 = state_25478;
var statearr_25494_25557 = state_25478__$1;
(statearr_25494_25557[(2)] = null);

(statearr_25494_25557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (5))){
var state_25478__$1 = state_25478;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25495_25558 = state_25478__$1;
(statearr_25495_25558[(1)] = (8));

} else {
var statearr_25496_25559 = state_25478__$1;
(statearr_25496_25559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (14))){
var inst_25458 = (state_25478[(11)]);
var inst_25456 = (state_25478[(8)]);
var inst_25456__$1 = (state_25478[(2)]);
var inst_25457 = (inst_25456__$1 == null);
var inst_25458__$1 = cljs.core.not.call(null,inst_25457);
var state_25478__$1 = (function (){var statearr_25497 = state_25478;
(statearr_25497[(11)] = inst_25458__$1);

(statearr_25497[(8)] = inst_25456__$1);

return statearr_25497;
})();
if(inst_25458__$1){
var statearr_25498_25560 = state_25478__$1;
(statearr_25498_25560[(1)] = (15));

} else {
var statearr_25499_25561 = state_25478__$1;
(statearr_25499_25561[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (16))){
var inst_25458 = (state_25478[(11)]);
var state_25478__$1 = state_25478;
var statearr_25500_25562 = state_25478__$1;
(statearr_25500_25562[(2)] = inst_25458);

(statearr_25500_25562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (10))){
var inst_25450 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25501_25563 = state_25478__$1;
(statearr_25501_25563[(2)] = inst_25450);

(statearr_25501_25563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (18))){
var inst_25461 = (state_25478[(2)]);
var state_25478__$1 = state_25478;
var statearr_25502_25564 = state_25478__$1;
(statearr_25502_25564[(2)] = inst_25461);

(statearr_25502_25564[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25479 === (8))){
var inst_25447 = cljs.core.async.close_BANG_.call(null,to);
var state_25478__$1 = state_25478;
var statearr_25503_25565 = state_25478__$1;
(statearr_25503_25565[(2)] = inst_25447);

(statearr_25503_25565[(1)] = (10));


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
var statearr_25507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__);

(statearr_25507[(1)] = (1));

return statearr_25507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1 = (function (state_25478){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25508){if((e25508 instanceof Object)){
var ex__19311__auto__ = e25508;
var statearr_25509_25566 = state_25478;
(statearr_25509_25566[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25567 = state_25478;
state_25478 = G__25567;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__ = function(state_25478){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1.call(this,state_25478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__,jobs,results,process,async))
})();
var state__19330__auto__ = (function (){var statearr_25510 = f__19329__auto__.call(null);
(statearr_25510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_25510;
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
var args25568 = [];
var len__17364__auto___25571 = arguments.length;
var i__17365__auto___25572 = (0);
while(true){
if((i__17365__auto___25572 < len__17364__auto___25571)){
args25568.push((arguments[i__17365__auto___25572]));

var G__25573 = (i__17365__auto___25572 + (1));
i__17365__auto___25572 = G__25573;
continue;
} else {
}
break;
}

var G__25570 = args25568.length;
switch (G__25570) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25568.length)].join('')));

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
var args25575 = [];
var len__17364__auto___25578 = arguments.length;
var i__17365__auto___25579 = (0);
while(true){
if((i__17365__auto___25579 < len__17364__auto___25578)){
args25575.push((arguments[i__17365__auto___25579]));

var G__25580 = (i__17365__auto___25579 + (1));
i__17365__auto___25579 = G__25580;
continue;
} else {
}
break;
}

var G__25577 = args25575.length;
switch (G__25577) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25575.length)].join('')));

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
var args25582 = [];
var len__17364__auto___25635 = arguments.length;
var i__17365__auto___25636 = (0);
while(true){
if((i__17365__auto___25636 < len__17364__auto___25635)){
args25582.push((arguments[i__17365__auto___25636]));

var G__25637 = (i__17365__auto___25636 + (1));
i__17365__auto___25636 = G__25637;
continue;
} else {
}
break;
}

var G__25584 = args25582.length;
switch (G__25584) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25582.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19328__auto___25639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___25639,tc,fc){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___25639,tc,fc){
return (function (state_25610){
var state_val_25611 = (state_25610[(1)]);
if((state_val_25611 === (7))){
var inst_25606 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25612_25640 = state_25610__$1;
(statearr_25612_25640[(2)] = inst_25606);

(statearr_25612_25640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (1))){
var state_25610__$1 = state_25610;
var statearr_25613_25641 = state_25610__$1;
(statearr_25613_25641[(2)] = null);

(statearr_25613_25641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (4))){
var inst_25587 = (state_25610[(7)]);
var inst_25587__$1 = (state_25610[(2)]);
var inst_25588 = (inst_25587__$1 == null);
var state_25610__$1 = (function (){var statearr_25614 = state_25610;
(statearr_25614[(7)] = inst_25587__$1);

return statearr_25614;
})();
if(cljs.core.truth_(inst_25588)){
var statearr_25615_25642 = state_25610__$1;
(statearr_25615_25642[(1)] = (5));

} else {
var statearr_25616_25643 = state_25610__$1;
(statearr_25616_25643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (13))){
var state_25610__$1 = state_25610;
var statearr_25617_25644 = state_25610__$1;
(statearr_25617_25644[(2)] = null);

(statearr_25617_25644[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (6))){
var inst_25587 = (state_25610[(7)]);
var inst_25593 = p.call(null,inst_25587);
var state_25610__$1 = state_25610;
if(cljs.core.truth_(inst_25593)){
var statearr_25618_25645 = state_25610__$1;
(statearr_25618_25645[(1)] = (9));

} else {
var statearr_25619_25646 = state_25610__$1;
(statearr_25619_25646[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (3))){
var inst_25608 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25610__$1,inst_25608);
} else {
if((state_val_25611 === (12))){
var state_25610__$1 = state_25610;
var statearr_25620_25647 = state_25610__$1;
(statearr_25620_25647[(2)] = null);

(statearr_25620_25647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (2))){
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25610__$1,(4),ch);
} else {
if((state_val_25611 === (11))){
var inst_25587 = (state_25610[(7)]);
var inst_25597 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25610__$1,(8),inst_25597,inst_25587);
} else {
if((state_val_25611 === (9))){
var state_25610__$1 = state_25610;
var statearr_25621_25648 = state_25610__$1;
(statearr_25621_25648[(2)] = tc);

(statearr_25621_25648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (5))){
var inst_25590 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25591 = cljs.core.async.close_BANG_.call(null,fc);
var state_25610__$1 = (function (){var statearr_25622 = state_25610;
(statearr_25622[(8)] = inst_25590);

return statearr_25622;
})();
var statearr_25623_25649 = state_25610__$1;
(statearr_25623_25649[(2)] = inst_25591);

(statearr_25623_25649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (14))){
var inst_25604 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
var statearr_25624_25650 = state_25610__$1;
(statearr_25624_25650[(2)] = inst_25604);

(statearr_25624_25650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (10))){
var state_25610__$1 = state_25610;
var statearr_25625_25651 = state_25610__$1;
(statearr_25625_25651[(2)] = fc);

(statearr_25625_25651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25611 === (8))){
var inst_25599 = (state_25610[(2)]);
var state_25610__$1 = state_25610;
if(cljs.core.truth_(inst_25599)){
var statearr_25626_25652 = state_25610__$1;
(statearr_25626_25652[(1)] = (12));

} else {
var statearr_25627_25653 = state_25610__$1;
(statearr_25627_25653[(1)] = (13));

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
});})(c__19328__auto___25639,tc,fc))
;
return ((function (switch__19307__auto__,c__19328__auto___25639,tc,fc){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_25631 = [null,null,null,null,null,null,null,null,null];
(statearr_25631[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_25631[(1)] = (1));

return statearr_25631;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_25610){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25632){if((e25632 instanceof Object)){
var ex__19311__auto__ = e25632;
var statearr_25633_25654 = state_25610;
(statearr_25633_25654[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25655 = state_25610;
state_25610 = G__25655;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_25610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_25610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___25639,tc,fc))
})();
var state__19330__auto__ = (function (){var statearr_25634 = f__19329__auto__.call(null);
(statearr_25634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___25639);

return statearr_25634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___25639,tc,fc))
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
return (function (state_25702){
var state_val_25703 = (state_25702[(1)]);
if((state_val_25703 === (1))){
var inst_25688 = init;
var state_25702__$1 = (function (){var statearr_25704 = state_25702;
(statearr_25704[(7)] = inst_25688);

return statearr_25704;
})();
var statearr_25705_25720 = state_25702__$1;
(statearr_25705_25720[(2)] = null);

(statearr_25705_25720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25703 === (2))){
var state_25702__$1 = state_25702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25702__$1,(4),ch);
} else {
if((state_val_25703 === (3))){
var inst_25700 = (state_25702[(2)]);
var state_25702__$1 = state_25702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25702__$1,inst_25700);
} else {
if((state_val_25703 === (4))){
var inst_25691 = (state_25702[(8)]);
var inst_25691__$1 = (state_25702[(2)]);
var inst_25692 = (inst_25691__$1 == null);
var state_25702__$1 = (function (){var statearr_25706 = state_25702;
(statearr_25706[(8)] = inst_25691__$1);

return statearr_25706;
})();
if(cljs.core.truth_(inst_25692)){
var statearr_25707_25721 = state_25702__$1;
(statearr_25707_25721[(1)] = (5));

} else {
var statearr_25708_25722 = state_25702__$1;
(statearr_25708_25722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25703 === (5))){
var inst_25688 = (state_25702[(7)]);
var state_25702__$1 = state_25702;
var statearr_25709_25723 = state_25702__$1;
(statearr_25709_25723[(2)] = inst_25688);

(statearr_25709_25723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25703 === (6))){
var inst_25691 = (state_25702[(8)]);
var inst_25688 = (state_25702[(7)]);
var inst_25695 = f.call(null,inst_25688,inst_25691);
var inst_25688__$1 = inst_25695;
var state_25702__$1 = (function (){var statearr_25710 = state_25702;
(statearr_25710[(7)] = inst_25688__$1);

return statearr_25710;
})();
var statearr_25711_25724 = state_25702__$1;
(statearr_25711_25724[(2)] = null);

(statearr_25711_25724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25703 === (7))){
var inst_25698 = (state_25702[(2)]);
var state_25702__$1 = state_25702;
var statearr_25712_25725 = state_25702__$1;
(statearr_25712_25725[(2)] = inst_25698);

(statearr_25712_25725[(1)] = (3));


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
var statearr_25716 = [null,null,null,null,null,null,null,null,null];
(statearr_25716[(0)] = cljs$core$async$reduce_$_state_machine__19308__auto__);

(statearr_25716[(1)] = (1));

return statearr_25716;
});
var cljs$core$async$reduce_$_state_machine__19308__auto____1 = (function (state_25702){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object)){
var ex__19311__auto__ = e25717;
var statearr_25718_25726 = state_25702;
(statearr_25718_25726[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25727 = state_25702;
state_25702 = G__25727;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19308__auto__ = function(state_25702){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19308__auto____1.call(this,state_25702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19308__auto____0;
cljs$core$async$reduce_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19308__auto____1;
return cljs$core$async$reduce_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_25719 = f__19329__auto__.call(null);
(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_25719;
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
var args25728 = [];
var len__17364__auto___25780 = arguments.length;
var i__17365__auto___25781 = (0);
while(true){
if((i__17365__auto___25781 < len__17364__auto___25780)){
args25728.push((arguments[i__17365__auto___25781]));

var G__25782 = (i__17365__auto___25781 + (1));
i__17365__auto___25781 = G__25782;
continue;
} else {
}
break;
}

var G__25730 = args25728.length;
switch (G__25730) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25728.length)].join('')));

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
return (function (state_25755){
var state_val_25756 = (state_25755[(1)]);
if((state_val_25756 === (7))){
var inst_25737 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
var statearr_25757_25784 = state_25755__$1;
(statearr_25757_25784[(2)] = inst_25737);

(statearr_25757_25784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (1))){
var inst_25731 = cljs.core.seq.call(null,coll);
var inst_25732 = inst_25731;
var state_25755__$1 = (function (){var statearr_25758 = state_25755;
(statearr_25758[(7)] = inst_25732);

return statearr_25758;
})();
var statearr_25759_25785 = state_25755__$1;
(statearr_25759_25785[(2)] = null);

(statearr_25759_25785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (4))){
var inst_25732 = (state_25755[(7)]);
var inst_25735 = cljs.core.first.call(null,inst_25732);
var state_25755__$1 = state_25755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25755__$1,(7),ch,inst_25735);
} else {
if((state_val_25756 === (13))){
var inst_25749 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
var statearr_25760_25786 = state_25755__$1;
(statearr_25760_25786[(2)] = inst_25749);

(statearr_25760_25786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (6))){
var inst_25740 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
if(cljs.core.truth_(inst_25740)){
var statearr_25761_25787 = state_25755__$1;
(statearr_25761_25787[(1)] = (8));

} else {
var statearr_25762_25788 = state_25755__$1;
(statearr_25762_25788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (3))){
var inst_25753 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25755__$1,inst_25753);
} else {
if((state_val_25756 === (12))){
var state_25755__$1 = state_25755;
var statearr_25763_25789 = state_25755__$1;
(statearr_25763_25789[(2)] = null);

(statearr_25763_25789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (2))){
var inst_25732 = (state_25755[(7)]);
var state_25755__$1 = state_25755;
if(cljs.core.truth_(inst_25732)){
var statearr_25764_25790 = state_25755__$1;
(statearr_25764_25790[(1)] = (4));

} else {
var statearr_25765_25791 = state_25755__$1;
(statearr_25765_25791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (11))){
var inst_25746 = cljs.core.async.close_BANG_.call(null,ch);
var state_25755__$1 = state_25755;
var statearr_25766_25792 = state_25755__$1;
(statearr_25766_25792[(2)] = inst_25746);

(statearr_25766_25792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (9))){
var state_25755__$1 = state_25755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25767_25793 = state_25755__$1;
(statearr_25767_25793[(1)] = (11));

} else {
var statearr_25768_25794 = state_25755__$1;
(statearr_25768_25794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (5))){
var inst_25732 = (state_25755[(7)]);
var state_25755__$1 = state_25755;
var statearr_25769_25795 = state_25755__$1;
(statearr_25769_25795[(2)] = inst_25732);

(statearr_25769_25795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (10))){
var inst_25751 = (state_25755[(2)]);
var state_25755__$1 = state_25755;
var statearr_25770_25796 = state_25755__$1;
(statearr_25770_25796[(2)] = inst_25751);

(statearr_25770_25796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25756 === (8))){
var inst_25732 = (state_25755[(7)]);
var inst_25742 = cljs.core.next.call(null,inst_25732);
var inst_25732__$1 = inst_25742;
var state_25755__$1 = (function (){var statearr_25771 = state_25755;
(statearr_25771[(7)] = inst_25732__$1);

return statearr_25771;
})();
var statearr_25772_25797 = state_25755__$1;
(statearr_25772_25797[(2)] = null);

(statearr_25772_25797[(1)] = (2));


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
var statearr_25776 = [null,null,null,null,null,null,null,null];
(statearr_25776[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_25776[(1)] = (1));

return statearr_25776;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_25755){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_25755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object)){
var ex__19311__auto__ = e25777;
var statearr_25778_25798 = state_25755;
(statearr_25778_25798[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25799 = state_25755;
state_25755 = G__25799;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_25755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_25755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_25779 = f__19329__auto__.call(null);
(statearr_25779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_25779;
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
if(typeof cljs.core.async.t_cljs$core$async26021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26021 = (function (mult,ch,cs,meta26022){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26022 = meta26022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26023,meta26022__$1){
var self__ = this;
var _26023__$1 = this;
return (new cljs.core.async.t_cljs$core$async26021(self__.mult,self__.ch,self__.cs,meta26022__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26023){
var self__ = this;
var _26023__$1 = this;
return self__.meta26022;
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26022","meta26022",-280868498,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26021";

cljs.core.async.t_cljs$core$async26021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26021");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26021(mult__$1,ch__$1,cs__$1,meta26022){
return (new cljs.core.async.t_cljs$core$async26021(mult__$1,ch__$1,cs__$1,meta26022));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26021(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19328__auto___26242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___26242,cs,m,dchan,dctr,done){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___26242,cs,m,dchan,dctr,done){
return (function (state_26154){
var state_val_26155 = (state_26154[(1)]);
if((state_val_26155 === (7))){
var inst_26150 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26156_26243 = state_26154__$1;
(statearr_26156_26243[(2)] = inst_26150);

(statearr_26156_26243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (20))){
var inst_26055 = (state_26154[(7)]);
var inst_26065 = cljs.core.first.call(null,inst_26055);
var inst_26066 = cljs.core.nth.call(null,inst_26065,(0),null);
var inst_26067 = cljs.core.nth.call(null,inst_26065,(1),null);
var state_26154__$1 = (function (){var statearr_26157 = state_26154;
(statearr_26157[(8)] = inst_26066);

return statearr_26157;
})();
if(cljs.core.truth_(inst_26067)){
var statearr_26158_26244 = state_26154__$1;
(statearr_26158_26244[(1)] = (22));

} else {
var statearr_26159_26245 = state_26154__$1;
(statearr_26159_26245[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (27))){
var inst_26095 = (state_26154[(9)]);
var inst_26026 = (state_26154[(10)]);
var inst_26097 = (state_26154[(11)]);
var inst_26102 = (state_26154[(12)]);
var inst_26102__$1 = cljs.core._nth.call(null,inst_26095,inst_26097);
var inst_26103 = cljs.core.async.put_BANG_.call(null,inst_26102__$1,inst_26026,done);
var state_26154__$1 = (function (){var statearr_26160 = state_26154;
(statearr_26160[(12)] = inst_26102__$1);

return statearr_26160;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26161_26246 = state_26154__$1;
(statearr_26161_26246[(1)] = (30));

} else {
var statearr_26162_26247 = state_26154__$1;
(statearr_26162_26247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (1))){
var state_26154__$1 = state_26154;
var statearr_26163_26248 = state_26154__$1;
(statearr_26163_26248[(2)] = null);

(statearr_26163_26248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (24))){
var inst_26055 = (state_26154[(7)]);
var inst_26072 = (state_26154[(2)]);
var inst_26073 = cljs.core.next.call(null,inst_26055);
var inst_26035 = inst_26073;
var inst_26036 = null;
var inst_26037 = (0);
var inst_26038 = (0);
var state_26154__$1 = (function (){var statearr_26164 = state_26154;
(statearr_26164[(13)] = inst_26038);

(statearr_26164[(14)] = inst_26037);

(statearr_26164[(15)] = inst_26036);

(statearr_26164[(16)] = inst_26035);

(statearr_26164[(17)] = inst_26072);

return statearr_26164;
})();
var statearr_26165_26249 = state_26154__$1;
(statearr_26165_26249[(2)] = null);

(statearr_26165_26249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (39))){
var state_26154__$1 = state_26154;
var statearr_26169_26250 = state_26154__$1;
(statearr_26169_26250[(2)] = null);

(statearr_26169_26250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (4))){
var inst_26026 = (state_26154[(10)]);
var inst_26026__$1 = (state_26154[(2)]);
var inst_26027 = (inst_26026__$1 == null);
var state_26154__$1 = (function (){var statearr_26170 = state_26154;
(statearr_26170[(10)] = inst_26026__$1);

return statearr_26170;
})();
if(cljs.core.truth_(inst_26027)){
var statearr_26171_26251 = state_26154__$1;
(statearr_26171_26251[(1)] = (5));

} else {
var statearr_26172_26252 = state_26154__$1;
(statearr_26172_26252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (15))){
var inst_26038 = (state_26154[(13)]);
var inst_26037 = (state_26154[(14)]);
var inst_26036 = (state_26154[(15)]);
var inst_26035 = (state_26154[(16)]);
var inst_26051 = (state_26154[(2)]);
var inst_26052 = (inst_26038 + (1));
var tmp26166 = inst_26037;
var tmp26167 = inst_26036;
var tmp26168 = inst_26035;
var inst_26035__$1 = tmp26168;
var inst_26036__$1 = tmp26167;
var inst_26037__$1 = tmp26166;
var inst_26038__$1 = inst_26052;
var state_26154__$1 = (function (){var statearr_26173 = state_26154;
(statearr_26173[(18)] = inst_26051);

(statearr_26173[(13)] = inst_26038__$1);

(statearr_26173[(14)] = inst_26037__$1);

(statearr_26173[(15)] = inst_26036__$1);

(statearr_26173[(16)] = inst_26035__$1);

return statearr_26173;
})();
var statearr_26174_26253 = state_26154__$1;
(statearr_26174_26253[(2)] = null);

(statearr_26174_26253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (21))){
var inst_26076 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26178_26254 = state_26154__$1;
(statearr_26178_26254[(2)] = inst_26076);

(statearr_26178_26254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (31))){
var inst_26102 = (state_26154[(12)]);
var inst_26106 = done.call(null,null);
var inst_26107 = cljs.core.async.untap_STAR_.call(null,m,inst_26102);
var state_26154__$1 = (function (){var statearr_26179 = state_26154;
(statearr_26179[(19)] = inst_26106);

return statearr_26179;
})();
var statearr_26180_26255 = state_26154__$1;
(statearr_26180_26255[(2)] = inst_26107);

(statearr_26180_26255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (32))){
var inst_26095 = (state_26154[(9)]);
var inst_26096 = (state_26154[(20)]);
var inst_26097 = (state_26154[(11)]);
var inst_26094 = (state_26154[(21)]);
var inst_26109 = (state_26154[(2)]);
var inst_26110 = (inst_26097 + (1));
var tmp26175 = inst_26095;
var tmp26176 = inst_26096;
var tmp26177 = inst_26094;
var inst_26094__$1 = tmp26177;
var inst_26095__$1 = tmp26175;
var inst_26096__$1 = tmp26176;
var inst_26097__$1 = inst_26110;
var state_26154__$1 = (function (){var statearr_26181 = state_26154;
(statearr_26181[(9)] = inst_26095__$1);

(statearr_26181[(20)] = inst_26096__$1);

(statearr_26181[(11)] = inst_26097__$1);

(statearr_26181[(21)] = inst_26094__$1);

(statearr_26181[(22)] = inst_26109);

return statearr_26181;
})();
var statearr_26182_26256 = state_26154__$1;
(statearr_26182_26256[(2)] = null);

(statearr_26182_26256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (40))){
var inst_26122 = (state_26154[(23)]);
var inst_26126 = done.call(null,null);
var inst_26127 = cljs.core.async.untap_STAR_.call(null,m,inst_26122);
var state_26154__$1 = (function (){var statearr_26183 = state_26154;
(statearr_26183[(24)] = inst_26126);

return statearr_26183;
})();
var statearr_26184_26257 = state_26154__$1;
(statearr_26184_26257[(2)] = inst_26127);

(statearr_26184_26257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (33))){
var inst_26113 = (state_26154[(25)]);
var inst_26115 = cljs.core.chunked_seq_QMARK_.call(null,inst_26113);
var state_26154__$1 = state_26154;
if(inst_26115){
var statearr_26185_26258 = state_26154__$1;
(statearr_26185_26258[(1)] = (36));

} else {
var statearr_26186_26259 = state_26154__$1;
(statearr_26186_26259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (13))){
var inst_26045 = (state_26154[(26)]);
var inst_26048 = cljs.core.async.close_BANG_.call(null,inst_26045);
var state_26154__$1 = state_26154;
var statearr_26187_26260 = state_26154__$1;
(statearr_26187_26260[(2)] = inst_26048);

(statearr_26187_26260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (22))){
var inst_26066 = (state_26154[(8)]);
var inst_26069 = cljs.core.async.close_BANG_.call(null,inst_26066);
var state_26154__$1 = state_26154;
var statearr_26188_26261 = state_26154__$1;
(statearr_26188_26261[(2)] = inst_26069);

(statearr_26188_26261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (36))){
var inst_26113 = (state_26154[(25)]);
var inst_26117 = cljs.core.chunk_first.call(null,inst_26113);
var inst_26118 = cljs.core.chunk_rest.call(null,inst_26113);
var inst_26119 = cljs.core.count.call(null,inst_26117);
var inst_26094 = inst_26118;
var inst_26095 = inst_26117;
var inst_26096 = inst_26119;
var inst_26097 = (0);
var state_26154__$1 = (function (){var statearr_26189 = state_26154;
(statearr_26189[(9)] = inst_26095);

(statearr_26189[(20)] = inst_26096);

(statearr_26189[(11)] = inst_26097);

(statearr_26189[(21)] = inst_26094);

return statearr_26189;
})();
var statearr_26190_26262 = state_26154__$1;
(statearr_26190_26262[(2)] = null);

(statearr_26190_26262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (41))){
var inst_26113 = (state_26154[(25)]);
var inst_26129 = (state_26154[(2)]);
var inst_26130 = cljs.core.next.call(null,inst_26113);
var inst_26094 = inst_26130;
var inst_26095 = null;
var inst_26096 = (0);
var inst_26097 = (0);
var state_26154__$1 = (function (){var statearr_26191 = state_26154;
(statearr_26191[(27)] = inst_26129);

(statearr_26191[(9)] = inst_26095);

(statearr_26191[(20)] = inst_26096);

(statearr_26191[(11)] = inst_26097);

(statearr_26191[(21)] = inst_26094);

return statearr_26191;
})();
var statearr_26192_26263 = state_26154__$1;
(statearr_26192_26263[(2)] = null);

(statearr_26192_26263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (43))){
var state_26154__$1 = state_26154;
var statearr_26193_26264 = state_26154__$1;
(statearr_26193_26264[(2)] = null);

(statearr_26193_26264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (29))){
var inst_26138 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26194_26265 = state_26154__$1;
(statearr_26194_26265[(2)] = inst_26138);

(statearr_26194_26265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (44))){
var inst_26147 = (state_26154[(2)]);
var state_26154__$1 = (function (){var statearr_26195 = state_26154;
(statearr_26195[(28)] = inst_26147);

return statearr_26195;
})();
var statearr_26196_26266 = state_26154__$1;
(statearr_26196_26266[(2)] = null);

(statearr_26196_26266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (6))){
var inst_26086 = (state_26154[(29)]);
var inst_26085 = cljs.core.deref.call(null,cs);
var inst_26086__$1 = cljs.core.keys.call(null,inst_26085);
var inst_26087 = cljs.core.count.call(null,inst_26086__$1);
var inst_26088 = cljs.core.reset_BANG_.call(null,dctr,inst_26087);
var inst_26093 = cljs.core.seq.call(null,inst_26086__$1);
var inst_26094 = inst_26093;
var inst_26095 = null;
var inst_26096 = (0);
var inst_26097 = (0);
var state_26154__$1 = (function (){var statearr_26197 = state_26154;
(statearr_26197[(9)] = inst_26095);

(statearr_26197[(20)] = inst_26096);

(statearr_26197[(11)] = inst_26097);

(statearr_26197[(21)] = inst_26094);

(statearr_26197[(30)] = inst_26088);

(statearr_26197[(29)] = inst_26086__$1);

return statearr_26197;
})();
var statearr_26198_26267 = state_26154__$1;
(statearr_26198_26267[(2)] = null);

(statearr_26198_26267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (28))){
var inst_26094 = (state_26154[(21)]);
var inst_26113 = (state_26154[(25)]);
var inst_26113__$1 = cljs.core.seq.call(null,inst_26094);
var state_26154__$1 = (function (){var statearr_26199 = state_26154;
(statearr_26199[(25)] = inst_26113__$1);

return statearr_26199;
})();
if(inst_26113__$1){
var statearr_26200_26268 = state_26154__$1;
(statearr_26200_26268[(1)] = (33));

} else {
var statearr_26201_26269 = state_26154__$1;
(statearr_26201_26269[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (25))){
var inst_26096 = (state_26154[(20)]);
var inst_26097 = (state_26154[(11)]);
var inst_26099 = (inst_26097 < inst_26096);
var inst_26100 = inst_26099;
var state_26154__$1 = state_26154;
if(cljs.core.truth_(inst_26100)){
var statearr_26202_26270 = state_26154__$1;
(statearr_26202_26270[(1)] = (27));

} else {
var statearr_26203_26271 = state_26154__$1;
(statearr_26203_26271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (34))){
var state_26154__$1 = state_26154;
var statearr_26204_26272 = state_26154__$1;
(statearr_26204_26272[(2)] = null);

(statearr_26204_26272[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (17))){
var state_26154__$1 = state_26154;
var statearr_26205_26273 = state_26154__$1;
(statearr_26205_26273[(2)] = null);

(statearr_26205_26273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (3))){
var inst_26152 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26154__$1,inst_26152);
} else {
if((state_val_26155 === (12))){
var inst_26081 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26206_26274 = state_26154__$1;
(statearr_26206_26274[(2)] = inst_26081);

(statearr_26206_26274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (2))){
var state_26154__$1 = state_26154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26154__$1,(4),ch);
} else {
if((state_val_26155 === (23))){
var state_26154__$1 = state_26154;
var statearr_26207_26275 = state_26154__$1;
(statearr_26207_26275[(2)] = null);

(statearr_26207_26275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (35))){
var inst_26136 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26208_26276 = state_26154__$1;
(statearr_26208_26276[(2)] = inst_26136);

(statearr_26208_26276[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (19))){
var inst_26055 = (state_26154[(7)]);
var inst_26059 = cljs.core.chunk_first.call(null,inst_26055);
var inst_26060 = cljs.core.chunk_rest.call(null,inst_26055);
var inst_26061 = cljs.core.count.call(null,inst_26059);
var inst_26035 = inst_26060;
var inst_26036 = inst_26059;
var inst_26037 = inst_26061;
var inst_26038 = (0);
var state_26154__$1 = (function (){var statearr_26209 = state_26154;
(statearr_26209[(13)] = inst_26038);

(statearr_26209[(14)] = inst_26037);

(statearr_26209[(15)] = inst_26036);

(statearr_26209[(16)] = inst_26035);

return statearr_26209;
})();
var statearr_26210_26277 = state_26154__$1;
(statearr_26210_26277[(2)] = null);

(statearr_26210_26277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (11))){
var inst_26035 = (state_26154[(16)]);
var inst_26055 = (state_26154[(7)]);
var inst_26055__$1 = cljs.core.seq.call(null,inst_26035);
var state_26154__$1 = (function (){var statearr_26211 = state_26154;
(statearr_26211[(7)] = inst_26055__$1);

return statearr_26211;
})();
if(inst_26055__$1){
var statearr_26212_26278 = state_26154__$1;
(statearr_26212_26278[(1)] = (16));

} else {
var statearr_26213_26279 = state_26154__$1;
(statearr_26213_26279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (9))){
var inst_26083 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26214_26280 = state_26154__$1;
(statearr_26214_26280[(2)] = inst_26083);

(statearr_26214_26280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (5))){
var inst_26033 = cljs.core.deref.call(null,cs);
var inst_26034 = cljs.core.seq.call(null,inst_26033);
var inst_26035 = inst_26034;
var inst_26036 = null;
var inst_26037 = (0);
var inst_26038 = (0);
var state_26154__$1 = (function (){var statearr_26215 = state_26154;
(statearr_26215[(13)] = inst_26038);

(statearr_26215[(14)] = inst_26037);

(statearr_26215[(15)] = inst_26036);

(statearr_26215[(16)] = inst_26035);

return statearr_26215;
})();
var statearr_26216_26281 = state_26154__$1;
(statearr_26216_26281[(2)] = null);

(statearr_26216_26281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (14))){
var state_26154__$1 = state_26154;
var statearr_26217_26282 = state_26154__$1;
(statearr_26217_26282[(2)] = null);

(statearr_26217_26282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (45))){
var inst_26144 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26218_26283 = state_26154__$1;
(statearr_26218_26283[(2)] = inst_26144);

(statearr_26218_26283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (26))){
var inst_26086 = (state_26154[(29)]);
var inst_26140 = (state_26154[(2)]);
var inst_26141 = cljs.core.seq.call(null,inst_26086);
var state_26154__$1 = (function (){var statearr_26219 = state_26154;
(statearr_26219[(31)] = inst_26140);

return statearr_26219;
})();
if(inst_26141){
var statearr_26220_26284 = state_26154__$1;
(statearr_26220_26284[(1)] = (42));

} else {
var statearr_26221_26285 = state_26154__$1;
(statearr_26221_26285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (16))){
var inst_26055 = (state_26154[(7)]);
var inst_26057 = cljs.core.chunked_seq_QMARK_.call(null,inst_26055);
var state_26154__$1 = state_26154;
if(inst_26057){
var statearr_26222_26286 = state_26154__$1;
(statearr_26222_26286[(1)] = (19));

} else {
var statearr_26223_26287 = state_26154__$1;
(statearr_26223_26287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (38))){
var inst_26133 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26224_26288 = state_26154__$1;
(statearr_26224_26288[(2)] = inst_26133);

(statearr_26224_26288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (30))){
var state_26154__$1 = state_26154;
var statearr_26225_26289 = state_26154__$1;
(statearr_26225_26289[(2)] = null);

(statearr_26225_26289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (10))){
var inst_26038 = (state_26154[(13)]);
var inst_26036 = (state_26154[(15)]);
var inst_26044 = cljs.core._nth.call(null,inst_26036,inst_26038);
var inst_26045 = cljs.core.nth.call(null,inst_26044,(0),null);
var inst_26046 = cljs.core.nth.call(null,inst_26044,(1),null);
var state_26154__$1 = (function (){var statearr_26226 = state_26154;
(statearr_26226[(26)] = inst_26045);

return statearr_26226;
})();
if(cljs.core.truth_(inst_26046)){
var statearr_26227_26290 = state_26154__$1;
(statearr_26227_26290[(1)] = (13));

} else {
var statearr_26228_26291 = state_26154__$1;
(statearr_26228_26291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (18))){
var inst_26079 = (state_26154[(2)]);
var state_26154__$1 = state_26154;
var statearr_26229_26292 = state_26154__$1;
(statearr_26229_26292[(2)] = inst_26079);

(statearr_26229_26292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (42))){
var state_26154__$1 = state_26154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26154__$1,(45),dchan);
} else {
if((state_val_26155 === (37))){
var inst_26122 = (state_26154[(23)]);
var inst_26026 = (state_26154[(10)]);
var inst_26113 = (state_26154[(25)]);
var inst_26122__$1 = cljs.core.first.call(null,inst_26113);
var inst_26123 = cljs.core.async.put_BANG_.call(null,inst_26122__$1,inst_26026,done);
var state_26154__$1 = (function (){var statearr_26230 = state_26154;
(statearr_26230[(23)] = inst_26122__$1);

return statearr_26230;
})();
if(cljs.core.truth_(inst_26123)){
var statearr_26231_26293 = state_26154__$1;
(statearr_26231_26293[(1)] = (39));

} else {
var statearr_26232_26294 = state_26154__$1;
(statearr_26232_26294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26155 === (8))){
var inst_26038 = (state_26154[(13)]);
var inst_26037 = (state_26154[(14)]);
var inst_26040 = (inst_26038 < inst_26037);
var inst_26041 = inst_26040;
var state_26154__$1 = state_26154;
if(cljs.core.truth_(inst_26041)){
var statearr_26233_26295 = state_26154__$1;
(statearr_26233_26295[(1)] = (10));

} else {
var statearr_26234_26296 = state_26154__$1;
(statearr_26234_26296[(1)] = (11));

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
});})(c__19328__auto___26242,cs,m,dchan,dctr,done))
;
return ((function (switch__19307__auto__,c__19328__auto___26242,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19308__auto__ = null;
var cljs$core$async$mult_$_state_machine__19308__auto____0 = (function (){
var statearr_26238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26238[(0)] = cljs$core$async$mult_$_state_machine__19308__auto__);

(statearr_26238[(1)] = (1));

return statearr_26238;
});
var cljs$core$async$mult_$_state_machine__19308__auto____1 = (function (state_26154){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_26154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e26239){if((e26239 instanceof Object)){
var ex__19311__auto__ = e26239;
var statearr_26240_26297 = state_26154;
(statearr_26240_26297[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26298 = state_26154;
state_26154 = G__26298;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19308__auto__ = function(state_26154){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19308__auto____1.call(this,state_26154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19308__auto____0;
cljs$core$async$mult_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19308__auto____1;
return cljs$core$async$mult_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___26242,cs,m,dchan,dctr,done))
})();
var state__19330__auto__ = (function (){var statearr_26241 = f__19329__auto__.call(null);
(statearr_26241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___26242);

return statearr_26241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___26242,cs,m,dchan,dctr,done))
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
var args26299 = [];
var len__17364__auto___26302 = arguments.length;
var i__17365__auto___26303 = (0);
while(true){
if((i__17365__auto___26303 < len__17364__auto___26302)){
args26299.push((arguments[i__17365__auto___26303]));

var G__26304 = (i__17365__auto___26303 + (1));
i__17365__auto___26303 = G__26304;
continue;
} else {
}
break;
}

var G__26301 = args26299.length;
switch (G__26301) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26299.length)].join('')));

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
var len__17364__auto___26316 = arguments.length;
var i__17365__auto___26317 = (0);
while(true){
if((i__17365__auto___26317 < len__17364__auto___26316)){
args__17371__auto__.push((arguments[i__17365__auto___26317]));

var G__26318 = (i__17365__auto___26317 + (1));
i__17365__auto___26317 = G__26318;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((3) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17372__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26310){
var map__26311 = p__26310;
var map__26311__$1 = ((((!((map__26311 == null)))?((((map__26311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26311):map__26311);
var opts = map__26311__$1;
var statearr_26313_26319 = state;
(statearr_26313_26319[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26311,map__26311__$1,opts){
return (function (val){
var statearr_26314_26320 = state;
(statearr_26314_26320[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26311,map__26311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26315_26321 = state;
(statearr_26315_26321[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26306){
var G__26307 = cljs.core.first.call(null,seq26306);
var seq26306__$1 = cljs.core.next.call(null,seq26306);
var G__26308 = cljs.core.first.call(null,seq26306__$1);
var seq26306__$2 = cljs.core.next.call(null,seq26306__$1);
var G__26309 = cljs.core.first.call(null,seq26306__$2);
var seq26306__$3 = cljs.core.next.call(null,seq26306__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26307,G__26308,G__26309,seq26306__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26485 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26486){
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
this.meta26486 = meta26486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26487,meta26486__$1){
var self__ = this;
var _26487__$1 = this;
return (new cljs.core.async.t_cljs$core$async26485(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26486__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26487){
var self__ = this;
var _26487__$1 = this;
return self__.meta26486;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26485.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26486","meta26486",-1683382261,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26485";

cljs.core.async.t_cljs$core$async26485.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26485");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26485 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26486){
return (new cljs.core.async.t_cljs$core$async26485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26486));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26485(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19328__auto___26648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26585){
var state_val_26586 = (state_26585[(1)]);
if((state_val_26586 === (7))){
var inst_26503 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26587_26649 = state_26585__$1;
(statearr_26587_26649[(2)] = inst_26503);

(statearr_26587_26649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (20))){
var inst_26515 = (state_26585[(7)]);
var state_26585__$1 = state_26585;
var statearr_26588_26650 = state_26585__$1;
(statearr_26588_26650[(2)] = inst_26515);

(statearr_26588_26650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (27))){
var state_26585__$1 = state_26585;
var statearr_26589_26651 = state_26585__$1;
(statearr_26589_26651[(2)] = null);

(statearr_26589_26651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (1))){
var inst_26491 = (state_26585[(8)]);
var inst_26491__$1 = calc_state.call(null);
var inst_26493 = (inst_26491__$1 == null);
var inst_26494 = cljs.core.not.call(null,inst_26493);
var state_26585__$1 = (function (){var statearr_26590 = state_26585;
(statearr_26590[(8)] = inst_26491__$1);

return statearr_26590;
})();
if(inst_26494){
var statearr_26591_26652 = state_26585__$1;
(statearr_26591_26652[(1)] = (2));

} else {
var statearr_26592_26653 = state_26585__$1;
(statearr_26592_26653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (24))){
var inst_26538 = (state_26585[(9)]);
var inst_26545 = (state_26585[(10)]);
var inst_26559 = (state_26585[(11)]);
var inst_26559__$1 = inst_26538.call(null,inst_26545);
var state_26585__$1 = (function (){var statearr_26593 = state_26585;
(statearr_26593[(11)] = inst_26559__$1);

return statearr_26593;
})();
if(cljs.core.truth_(inst_26559__$1)){
var statearr_26594_26654 = state_26585__$1;
(statearr_26594_26654[(1)] = (29));

} else {
var statearr_26595_26655 = state_26585__$1;
(statearr_26595_26655[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (4))){
var inst_26506 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26506)){
var statearr_26596_26656 = state_26585__$1;
(statearr_26596_26656[(1)] = (8));

} else {
var statearr_26597_26657 = state_26585__$1;
(statearr_26597_26657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (15))){
var inst_26532 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26532)){
var statearr_26598_26658 = state_26585__$1;
(statearr_26598_26658[(1)] = (19));

} else {
var statearr_26599_26659 = state_26585__$1;
(statearr_26599_26659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (21))){
var inst_26537 = (state_26585[(12)]);
var inst_26537__$1 = (state_26585[(2)]);
var inst_26538 = cljs.core.get.call(null,inst_26537__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26539 = cljs.core.get.call(null,inst_26537__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26540 = cljs.core.get.call(null,inst_26537__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26585__$1 = (function (){var statearr_26600 = state_26585;
(statearr_26600[(9)] = inst_26538);

(statearr_26600[(12)] = inst_26537__$1);

(statearr_26600[(13)] = inst_26539);

return statearr_26600;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26585__$1,(22),inst_26540);
} else {
if((state_val_26586 === (31))){
var inst_26567 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26567)){
var statearr_26601_26660 = state_26585__$1;
(statearr_26601_26660[(1)] = (32));

} else {
var statearr_26602_26661 = state_26585__$1;
(statearr_26602_26661[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (32))){
var inst_26544 = (state_26585[(14)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26585__$1,(35),out,inst_26544);
} else {
if((state_val_26586 === (33))){
var inst_26537 = (state_26585[(12)]);
var inst_26515 = inst_26537;
var state_26585__$1 = (function (){var statearr_26603 = state_26585;
(statearr_26603[(7)] = inst_26515);

return statearr_26603;
})();
var statearr_26604_26662 = state_26585__$1;
(statearr_26604_26662[(2)] = null);

(statearr_26604_26662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (13))){
var inst_26515 = (state_26585[(7)]);
var inst_26522 = inst_26515.cljs$lang$protocol_mask$partition0$;
var inst_26523 = (inst_26522 & (64));
var inst_26524 = inst_26515.cljs$core$ISeq$;
var inst_26525 = (inst_26523) || (inst_26524);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26525)){
var statearr_26605_26663 = state_26585__$1;
(statearr_26605_26663[(1)] = (16));

} else {
var statearr_26606_26664 = state_26585__$1;
(statearr_26606_26664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (22))){
var inst_26544 = (state_26585[(14)]);
var inst_26545 = (state_26585[(10)]);
var inst_26543 = (state_26585[(2)]);
var inst_26544__$1 = cljs.core.nth.call(null,inst_26543,(0),null);
var inst_26545__$1 = cljs.core.nth.call(null,inst_26543,(1),null);
var inst_26546 = (inst_26544__$1 == null);
var inst_26547 = cljs.core._EQ_.call(null,inst_26545__$1,change);
var inst_26548 = (inst_26546) || (inst_26547);
var state_26585__$1 = (function (){var statearr_26607 = state_26585;
(statearr_26607[(14)] = inst_26544__$1);

(statearr_26607[(10)] = inst_26545__$1);

return statearr_26607;
})();
if(cljs.core.truth_(inst_26548)){
var statearr_26608_26665 = state_26585__$1;
(statearr_26608_26665[(1)] = (23));

} else {
var statearr_26609_26666 = state_26585__$1;
(statearr_26609_26666[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (36))){
var inst_26537 = (state_26585[(12)]);
var inst_26515 = inst_26537;
var state_26585__$1 = (function (){var statearr_26610 = state_26585;
(statearr_26610[(7)] = inst_26515);

return statearr_26610;
})();
var statearr_26611_26667 = state_26585__$1;
(statearr_26611_26667[(2)] = null);

(statearr_26611_26667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (29))){
var inst_26559 = (state_26585[(11)]);
var state_26585__$1 = state_26585;
var statearr_26612_26668 = state_26585__$1;
(statearr_26612_26668[(2)] = inst_26559);

(statearr_26612_26668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (6))){
var state_26585__$1 = state_26585;
var statearr_26613_26669 = state_26585__$1;
(statearr_26613_26669[(2)] = false);

(statearr_26613_26669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (28))){
var inst_26555 = (state_26585[(2)]);
var inst_26556 = calc_state.call(null);
var inst_26515 = inst_26556;
var state_26585__$1 = (function (){var statearr_26614 = state_26585;
(statearr_26614[(7)] = inst_26515);

(statearr_26614[(15)] = inst_26555);

return statearr_26614;
})();
var statearr_26615_26670 = state_26585__$1;
(statearr_26615_26670[(2)] = null);

(statearr_26615_26670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (25))){
var inst_26581 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26616_26671 = state_26585__$1;
(statearr_26616_26671[(2)] = inst_26581);

(statearr_26616_26671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (34))){
var inst_26579 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26617_26672 = state_26585__$1;
(statearr_26617_26672[(2)] = inst_26579);

(statearr_26617_26672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (17))){
var state_26585__$1 = state_26585;
var statearr_26618_26673 = state_26585__$1;
(statearr_26618_26673[(2)] = false);

(statearr_26618_26673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (3))){
var state_26585__$1 = state_26585;
var statearr_26619_26674 = state_26585__$1;
(statearr_26619_26674[(2)] = false);

(statearr_26619_26674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (12))){
var inst_26583 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26585__$1,inst_26583);
} else {
if((state_val_26586 === (2))){
var inst_26491 = (state_26585[(8)]);
var inst_26496 = inst_26491.cljs$lang$protocol_mask$partition0$;
var inst_26497 = (inst_26496 & (64));
var inst_26498 = inst_26491.cljs$core$ISeq$;
var inst_26499 = (inst_26497) || (inst_26498);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26499)){
var statearr_26620_26675 = state_26585__$1;
(statearr_26620_26675[(1)] = (5));

} else {
var statearr_26621_26676 = state_26585__$1;
(statearr_26621_26676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (23))){
var inst_26544 = (state_26585[(14)]);
var inst_26550 = (inst_26544 == null);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26550)){
var statearr_26622_26677 = state_26585__$1;
(statearr_26622_26677[(1)] = (26));

} else {
var statearr_26623_26678 = state_26585__$1;
(statearr_26623_26678[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (35))){
var inst_26570 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
if(cljs.core.truth_(inst_26570)){
var statearr_26624_26679 = state_26585__$1;
(statearr_26624_26679[(1)] = (36));

} else {
var statearr_26625_26680 = state_26585__$1;
(statearr_26625_26680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (19))){
var inst_26515 = (state_26585[(7)]);
var inst_26534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26515);
var state_26585__$1 = state_26585;
var statearr_26626_26681 = state_26585__$1;
(statearr_26626_26681[(2)] = inst_26534);

(statearr_26626_26681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (11))){
var inst_26515 = (state_26585[(7)]);
var inst_26519 = (inst_26515 == null);
var inst_26520 = cljs.core.not.call(null,inst_26519);
var state_26585__$1 = state_26585;
if(inst_26520){
var statearr_26627_26682 = state_26585__$1;
(statearr_26627_26682[(1)] = (13));

} else {
var statearr_26628_26683 = state_26585__$1;
(statearr_26628_26683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (9))){
var inst_26491 = (state_26585[(8)]);
var state_26585__$1 = state_26585;
var statearr_26629_26684 = state_26585__$1;
(statearr_26629_26684[(2)] = inst_26491);

(statearr_26629_26684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (5))){
var state_26585__$1 = state_26585;
var statearr_26630_26685 = state_26585__$1;
(statearr_26630_26685[(2)] = true);

(statearr_26630_26685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (14))){
var state_26585__$1 = state_26585;
var statearr_26631_26686 = state_26585__$1;
(statearr_26631_26686[(2)] = false);

(statearr_26631_26686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (26))){
var inst_26545 = (state_26585[(10)]);
var inst_26552 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26545);
var state_26585__$1 = state_26585;
var statearr_26632_26687 = state_26585__$1;
(statearr_26632_26687[(2)] = inst_26552);

(statearr_26632_26687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (16))){
var state_26585__$1 = state_26585;
var statearr_26633_26688 = state_26585__$1;
(statearr_26633_26688[(2)] = true);

(statearr_26633_26688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (38))){
var inst_26575 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26634_26689 = state_26585__$1;
(statearr_26634_26689[(2)] = inst_26575);

(statearr_26634_26689[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (30))){
var inst_26538 = (state_26585[(9)]);
var inst_26539 = (state_26585[(13)]);
var inst_26545 = (state_26585[(10)]);
var inst_26562 = cljs.core.empty_QMARK_.call(null,inst_26538);
var inst_26563 = inst_26539.call(null,inst_26545);
var inst_26564 = cljs.core.not.call(null,inst_26563);
var inst_26565 = (inst_26562) && (inst_26564);
var state_26585__$1 = state_26585;
var statearr_26635_26690 = state_26585__$1;
(statearr_26635_26690[(2)] = inst_26565);

(statearr_26635_26690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (10))){
var inst_26491 = (state_26585[(8)]);
var inst_26511 = (state_26585[(2)]);
var inst_26512 = cljs.core.get.call(null,inst_26511,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26513 = cljs.core.get.call(null,inst_26511,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26514 = cljs.core.get.call(null,inst_26511,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26515 = inst_26491;
var state_26585__$1 = (function (){var statearr_26636 = state_26585;
(statearr_26636[(7)] = inst_26515);

(statearr_26636[(16)] = inst_26514);

(statearr_26636[(17)] = inst_26512);

(statearr_26636[(18)] = inst_26513);

return statearr_26636;
})();
var statearr_26637_26691 = state_26585__$1;
(statearr_26637_26691[(2)] = null);

(statearr_26637_26691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (18))){
var inst_26529 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
var statearr_26638_26692 = state_26585__$1;
(statearr_26638_26692[(2)] = inst_26529);

(statearr_26638_26692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (37))){
var state_26585__$1 = state_26585;
var statearr_26639_26693 = state_26585__$1;
(statearr_26639_26693[(2)] = null);

(statearr_26639_26693[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (8))){
var inst_26491 = (state_26585[(8)]);
var inst_26508 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26491);
var state_26585__$1 = state_26585;
var statearr_26640_26694 = state_26585__$1;
(statearr_26640_26694[(2)] = inst_26508);

(statearr_26640_26694[(1)] = (10));


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
});})(c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19307__auto__,c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19308__auto__ = null;
var cljs$core$async$mix_$_state_machine__19308__auto____0 = (function (){
var statearr_26644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26644[(0)] = cljs$core$async$mix_$_state_machine__19308__auto__);

(statearr_26644[(1)] = (1));

return statearr_26644;
});
var cljs$core$async$mix_$_state_machine__19308__auto____1 = (function (state_26585){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_26585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e26645){if((e26645 instanceof Object)){
var ex__19311__auto__ = e26645;
var statearr_26646_26695 = state_26585;
(statearr_26646_26695[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26696 = state_26585;
state_26585 = G__26696;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19308__auto__ = function(state_26585){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19308__auto____1.call(this,state_26585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19308__auto____0;
cljs$core$async$mix_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19308__auto____1;
return cljs$core$async$mix_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19330__auto__ = (function (){var statearr_26647 = f__19329__auto__.call(null);
(statearr_26647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___26648);

return statearr_26647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___26648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args26697 = [];
var len__17364__auto___26700 = arguments.length;
var i__17365__auto___26701 = (0);
while(true){
if((i__17365__auto___26701 < len__17364__auto___26700)){
args26697.push((arguments[i__17365__auto___26701]));

var G__26702 = (i__17365__auto___26701 + (1));
i__17365__auto___26701 = G__26702;
continue;
} else {
}
break;
}

var G__26699 = args26697.length;
switch (G__26699) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26697.length)].join('')));

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
var args26705 = [];
var len__17364__auto___26830 = arguments.length;
var i__17365__auto___26831 = (0);
while(true){
if((i__17365__auto___26831 < len__17364__auto___26830)){
args26705.push((arguments[i__17365__auto___26831]));

var G__26832 = (i__17365__auto___26831 + (1));
i__17365__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var G__26707 = args26705.length;
switch (G__26707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26705.length)].join('')));

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
return (function (p1__26704_SHARP_){
if(cljs.core.truth_(p1__26704_SHARP_.call(null,topic))){
return p1__26704_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26704_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16306__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26709 = meta26709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26710,meta26709__$1){
var self__ = this;
var _26710__$1 = this;
return (new cljs.core.async.t_cljs$core$async26708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26709__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26710){
var self__ = this;
var _26710__$1 = this;
return self__.meta26709;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26709","meta26709",1184628781,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26708";

cljs.core.async.t_cljs$core$async26708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async26708");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26708 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26709){
return (new cljs.core.async.t_cljs$core$async26708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26709));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19328__auto___26834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___26834,mults,ensure_mult,p){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___26834,mults,ensure_mult,p){
return (function (state_26782){
var state_val_26783 = (state_26782[(1)]);
if((state_val_26783 === (7))){
var inst_26778 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26784_26835 = state_26782__$1;
(statearr_26784_26835[(2)] = inst_26778);

(statearr_26784_26835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (20))){
var state_26782__$1 = state_26782;
var statearr_26785_26836 = state_26782__$1;
(statearr_26785_26836[(2)] = null);

(statearr_26785_26836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (1))){
var state_26782__$1 = state_26782;
var statearr_26786_26837 = state_26782__$1;
(statearr_26786_26837[(2)] = null);

(statearr_26786_26837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (24))){
var inst_26761 = (state_26782[(7)]);
var inst_26770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26761);
var state_26782__$1 = state_26782;
var statearr_26787_26838 = state_26782__$1;
(statearr_26787_26838[(2)] = inst_26770);

(statearr_26787_26838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (4))){
var inst_26713 = (state_26782[(8)]);
var inst_26713__$1 = (state_26782[(2)]);
var inst_26714 = (inst_26713__$1 == null);
var state_26782__$1 = (function (){var statearr_26788 = state_26782;
(statearr_26788[(8)] = inst_26713__$1);

return statearr_26788;
})();
if(cljs.core.truth_(inst_26714)){
var statearr_26789_26839 = state_26782__$1;
(statearr_26789_26839[(1)] = (5));

} else {
var statearr_26790_26840 = state_26782__$1;
(statearr_26790_26840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (15))){
var inst_26755 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26791_26841 = state_26782__$1;
(statearr_26791_26841[(2)] = inst_26755);

(statearr_26791_26841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (21))){
var inst_26775 = (state_26782[(2)]);
var state_26782__$1 = (function (){var statearr_26792 = state_26782;
(statearr_26792[(9)] = inst_26775);

return statearr_26792;
})();
var statearr_26793_26842 = state_26782__$1;
(statearr_26793_26842[(2)] = null);

(statearr_26793_26842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (13))){
var inst_26737 = (state_26782[(10)]);
var inst_26739 = cljs.core.chunked_seq_QMARK_.call(null,inst_26737);
var state_26782__$1 = state_26782;
if(inst_26739){
var statearr_26794_26843 = state_26782__$1;
(statearr_26794_26843[(1)] = (16));

} else {
var statearr_26795_26844 = state_26782__$1;
(statearr_26795_26844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (22))){
var inst_26767 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26767)){
var statearr_26796_26845 = state_26782__$1;
(statearr_26796_26845[(1)] = (23));

} else {
var statearr_26797_26846 = state_26782__$1;
(statearr_26797_26846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (6))){
var inst_26761 = (state_26782[(7)]);
var inst_26763 = (state_26782[(11)]);
var inst_26713 = (state_26782[(8)]);
var inst_26761__$1 = topic_fn.call(null,inst_26713);
var inst_26762 = cljs.core.deref.call(null,mults);
var inst_26763__$1 = cljs.core.get.call(null,inst_26762,inst_26761__$1);
var state_26782__$1 = (function (){var statearr_26798 = state_26782;
(statearr_26798[(7)] = inst_26761__$1);

(statearr_26798[(11)] = inst_26763__$1);

return statearr_26798;
})();
if(cljs.core.truth_(inst_26763__$1)){
var statearr_26799_26847 = state_26782__$1;
(statearr_26799_26847[(1)] = (19));

} else {
var statearr_26800_26848 = state_26782__$1;
(statearr_26800_26848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (25))){
var inst_26772 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26801_26849 = state_26782__$1;
(statearr_26801_26849[(2)] = inst_26772);

(statearr_26801_26849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (17))){
var inst_26737 = (state_26782[(10)]);
var inst_26746 = cljs.core.first.call(null,inst_26737);
var inst_26747 = cljs.core.async.muxch_STAR_.call(null,inst_26746);
var inst_26748 = cljs.core.async.close_BANG_.call(null,inst_26747);
var inst_26749 = cljs.core.next.call(null,inst_26737);
var inst_26723 = inst_26749;
var inst_26724 = null;
var inst_26725 = (0);
var inst_26726 = (0);
var state_26782__$1 = (function (){var statearr_26802 = state_26782;
(statearr_26802[(12)] = inst_26725);

(statearr_26802[(13)] = inst_26724);

(statearr_26802[(14)] = inst_26723);

(statearr_26802[(15)] = inst_26748);

(statearr_26802[(16)] = inst_26726);

return statearr_26802;
})();
var statearr_26803_26850 = state_26782__$1;
(statearr_26803_26850[(2)] = null);

(statearr_26803_26850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (3))){
var inst_26780 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26782__$1,inst_26780);
} else {
if((state_val_26783 === (12))){
var inst_26757 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26804_26851 = state_26782__$1;
(statearr_26804_26851[(2)] = inst_26757);

(statearr_26804_26851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (2))){
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26782__$1,(4),ch);
} else {
if((state_val_26783 === (23))){
var state_26782__$1 = state_26782;
var statearr_26805_26852 = state_26782__$1;
(statearr_26805_26852[(2)] = null);

(statearr_26805_26852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (19))){
var inst_26763 = (state_26782[(11)]);
var inst_26713 = (state_26782[(8)]);
var inst_26765 = cljs.core.async.muxch_STAR_.call(null,inst_26763);
var state_26782__$1 = state_26782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26782__$1,(22),inst_26765,inst_26713);
} else {
if((state_val_26783 === (11))){
var inst_26737 = (state_26782[(10)]);
var inst_26723 = (state_26782[(14)]);
var inst_26737__$1 = cljs.core.seq.call(null,inst_26723);
var state_26782__$1 = (function (){var statearr_26806 = state_26782;
(statearr_26806[(10)] = inst_26737__$1);

return statearr_26806;
})();
if(inst_26737__$1){
var statearr_26807_26853 = state_26782__$1;
(statearr_26807_26853[(1)] = (13));

} else {
var statearr_26808_26854 = state_26782__$1;
(statearr_26808_26854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (9))){
var inst_26759 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26809_26855 = state_26782__$1;
(statearr_26809_26855[(2)] = inst_26759);

(statearr_26809_26855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (5))){
var inst_26720 = cljs.core.deref.call(null,mults);
var inst_26721 = cljs.core.vals.call(null,inst_26720);
var inst_26722 = cljs.core.seq.call(null,inst_26721);
var inst_26723 = inst_26722;
var inst_26724 = null;
var inst_26725 = (0);
var inst_26726 = (0);
var state_26782__$1 = (function (){var statearr_26810 = state_26782;
(statearr_26810[(12)] = inst_26725);

(statearr_26810[(13)] = inst_26724);

(statearr_26810[(14)] = inst_26723);

(statearr_26810[(16)] = inst_26726);

return statearr_26810;
})();
var statearr_26811_26856 = state_26782__$1;
(statearr_26811_26856[(2)] = null);

(statearr_26811_26856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (14))){
var state_26782__$1 = state_26782;
var statearr_26815_26857 = state_26782__$1;
(statearr_26815_26857[(2)] = null);

(statearr_26815_26857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (16))){
var inst_26737 = (state_26782[(10)]);
var inst_26741 = cljs.core.chunk_first.call(null,inst_26737);
var inst_26742 = cljs.core.chunk_rest.call(null,inst_26737);
var inst_26743 = cljs.core.count.call(null,inst_26741);
var inst_26723 = inst_26742;
var inst_26724 = inst_26741;
var inst_26725 = inst_26743;
var inst_26726 = (0);
var state_26782__$1 = (function (){var statearr_26816 = state_26782;
(statearr_26816[(12)] = inst_26725);

(statearr_26816[(13)] = inst_26724);

(statearr_26816[(14)] = inst_26723);

(statearr_26816[(16)] = inst_26726);

return statearr_26816;
})();
var statearr_26817_26858 = state_26782__$1;
(statearr_26817_26858[(2)] = null);

(statearr_26817_26858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (10))){
var inst_26725 = (state_26782[(12)]);
var inst_26724 = (state_26782[(13)]);
var inst_26723 = (state_26782[(14)]);
var inst_26726 = (state_26782[(16)]);
var inst_26731 = cljs.core._nth.call(null,inst_26724,inst_26726);
var inst_26732 = cljs.core.async.muxch_STAR_.call(null,inst_26731);
var inst_26733 = cljs.core.async.close_BANG_.call(null,inst_26732);
var inst_26734 = (inst_26726 + (1));
var tmp26812 = inst_26725;
var tmp26813 = inst_26724;
var tmp26814 = inst_26723;
var inst_26723__$1 = tmp26814;
var inst_26724__$1 = tmp26813;
var inst_26725__$1 = tmp26812;
var inst_26726__$1 = inst_26734;
var state_26782__$1 = (function (){var statearr_26818 = state_26782;
(statearr_26818[(12)] = inst_26725__$1);

(statearr_26818[(13)] = inst_26724__$1);

(statearr_26818[(17)] = inst_26733);

(statearr_26818[(14)] = inst_26723__$1);

(statearr_26818[(16)] = inst_26726__$1);

return statearr_26818;
})();
var statearr_26819_26859 = state_26782__$1;
(statearr_26819_26859[(2)] = null);

(statearr_26819_26859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (18))){
var inst_26752 = (state_26782[(2)]);
var state_26782__$1 = state_26782;
var statearr_26820_26860 = state_26782__$1;
(statearr_26820_26860[(2)] = inst_26752);

(statearr_26820_26860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26783 === (8))){
var inst_26725 = (state_26782[(12)]);
var inst_26726 = (state_26782[(16)]);
var inst_26728 = (inst_26726 < inst_26725);
var inst_26729 = inst_26728;
var state_26782__$1 = state_26782;
if(cljs.core.truth_(inst_26729)){
var statearr_26821_26861 = state_26782__$1;
(statearr_26821_26861[(1)] = (10));

} else {
var statearr_26822_26862 = state_26782__$1;
(statearr_26822_26862[(1)] = (11));

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
});})(c__19328__auto___26834,mults,ensure_mult,p))
;
return ((function (switch__19307__auto__,c__19328__auto___26834,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_26826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26826[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_26826[(1)] = (1));

return statearr_26826;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_26782){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_26782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e26827){if((e26827 instanceof Object)){
var ex__19311__auto__ = e26827;
var statearr_26828_26863 = state_26782;
(statearr_26828_26863[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26864 = state_26782;
state_26782 = G__26864;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_26782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_26782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___26834,mults,ensure_mult,p))
})();
var state__19330__auto__ = (function (){var statearr_26829 = f__19329__auto__.call(null);
(statearr_26829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___26834);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___26834,mults,ensure_mult,p))
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
var args26865 = [];
var len__17364__auto___26868 = arguments.length;
var i__17365__auto___26869 = (0);
while(true){
if((i__17365__auto___26869 < len__17364__auto___26868)){
args26865.push((arguments[i__17365__auto___26869]));

var G__26870 = (i__17365__auto___26869 + (1));
i__17365__auto___26869 = G__26870;
continue;
} else {
}
break;
}

var G__26867 = args26865.length;
switch (G__26867) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26865.length)].join('')));

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
var args26872 = [];
var len__17364__auto___26875 = arguments.length;
var i__17365__auto___26876 = (0);
while(true){
if((i__17365__auto___26876 < len__17364__auto___26875)){
args26872.push((arguments[i__17365__auto___26876]));

var G__26877 = (i__17365__auto___26876 + (1));
i__17365__auto___26876 = G__26877;
continue;
} else {
}
break;
}

var G__26874 = args26872.length;
switch (G__26874) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26872.length)].join('')));

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
var args26879 = [];
var len__17364__auto___26950 = arguments.length;
var i__17365__auto___26951 = (0);
while(true){
if((i__17365__auto___26951 < len__17364__auto___26950)){
args26879.push((arguments[i__17365__auto___26951]));

var G__26952 = (i__17365__auto___26951 + (1));
i__17365__auto___26951 = G__26952;
continue;
} else {
}
break;
}

var G__26881 = args26879.length;
switch (G__26881) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26879.length)].join('')));

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
var c__19328__auto___26954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26920){
var state_val_26921 = (state_26920[(1)]);
if((state_val_26921 === (7))){
var state_26920__$1 = state_26920;
var statearr_26922_26955 = state_26920__$1;
(statearr_26922_26955[(2)] = null);

(statearr_26922_26955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (1))){
var state_26920__$1 = state_26920;
var statearr_26923_26956 = state_26920__$1;
(statearr_26923_26956[(2)] = null);

(statearr_26923_26956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (4))){
var inst_26884 = (state_26920[(7)]);
var inst_26886 = (inst_26884 < cnt);
var state_26920__$1 = state_26920;
if(cljs.core.truth_(inst_26886)){
var statearr_26924_26957 = state_26920__$1;
(statearr_26924_26957[(1)] = (6));

} else {
var statearr_26925_26958 = state_26920__$1;
(statearr_26925_26958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (15))){
var inst_26916 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26926_26959 = state_26920__$1;
(statearr_26926_26959[(2)] = inst_26916);

(statearr_26926_26959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (13))){
var inst_26909 = cljs.core.async.close_BANG_.call(null,out);
var state_26920__$1 = state_26920;
var statearr_26927_26960 = state_26920__$1;
(statearr_26927_26960[(2)] = inst_26909);

(statearr_26927_26960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (6))){
var state_26920__$1 = state_26920;
var statearr_26928_26961 = state_26920__$1;
(statearr_26928_26961[(2)] = null);

(statearr_26928_26961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (3))){
var inst_26918 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26920__$1,inst_26918);
} else {
if((state_val_26921 === (12))){
var inst_26906 = (state_26920[(8)]);
var inst_26906__$1 = (state_26920[(2)]);
var inst_26907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26906__$1);
var state_26920__$1 = (function (){var statearr_26929 = state_26920;
(statearr_26929[(8)] = inst_26906__$1);

return statearr_26929;
})();
if(cljs.core.truth_(inst_26907)){
var statearr_26930_26962 = state_26920__$1;
(statearr_26930_26962[(1)] = (13));

} else {
var statearr_26931_26963 = state_26920__$1;
(statearr_26931_26963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (2))){
var inst_26883 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26884 = (0);
var state_26920__$1 = (function (){var statearr_26932 = state_26920;
(statearr_26932[(9)] = inst_26883);

(statearr_26932[(7)] = inst_26884);

return statearr_26932;
})();
var statearr_26933_26964 = state_26920__$1;
(statearr_26933_26964[(2)] = null);

(statearr_26933_26964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (11))){
var inst_26884 = (state_26920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26920,(10),Object,null,(9));
var inst_26893 = chs__$1.call(null,inst_26884);
var inst_26894 = done.call(null,inst_26884);
var inst_26895 = cljs.core.async.take_BANG_.call(null,inst_26893,inst_26894);
var state_26920__$1 = state_26920;
var statearr_26934_26965 = state_26920__$1;
(statearr_26934_26965[(2)] = inst_26895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (9))){
var inst_26884 = (state_26920[(7)]);
var inst_26897 = (state_26920[(2)]);
var inst_26898 = (inst_26884 + (1));
var inst_26884__$1 = inst_26898;
var state_26920__$1 = (function (){var statearr_26935 = state_26920;
(statearr_26935[(10)] = inst_26897);

(statearr_26935[(7)] = inst_26884__$1);

return statearr_26935;
})();
var statearr_26936_26966 = state_26920__$1;
(statearr_26936_26966[(2)] = null);

(statearr_26936_26966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (5))){
var inst_26904 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26937 = state_26920;
(statearr_26937[(11)] = inst_26904);

return statearr_26937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26920__$1,(12),dchan);
} else {
if((state_val_26921 === (14))){
var inst_26906 = (state_26920[(8)]);
var inst_26911 = cljs.core.apply.call(null,f,inst_26906);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26920__$1,(16),out,inst_26911);
} else {
if((state_val_26921 === (16))){
var inst_26913 = (state_26920[(2)]);
var state_26920__$1 = (function (){var statearr_26938 = state_26920;
(statearr_26938[(12)] = inst_26913);

return statearr_26938;
})();
var statearr_26939_26967 = state_26920__$1;
(statearr_26939_26967[(2)] = null);

(statearr_26939_26967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (10))){
var inst_26888 = (state_26920[(2)]);
var inst_26889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26920__$1 = (function (){var statearr_26940 = state_26920;
(statearr_26940[(13)] = inst_26888);

return statearr_26940;
})();
var statearr_26941_26968 = state_26920__$1;
(statearr_26941_26968[(2)] = inst_26889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (8))){
var inst_26902 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26942_26969 = state_26920__$1;
(statearr_26942_26969[(2)] = inst_26902);

(statearr_26942_26969[(1)] = (5));


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
});})(c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19307__auto__,c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_26946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26946[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_26946[(1)] = (1));

return statearr_26946;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_26920){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_26920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e26947){if((e26947 instanceof Object)){
var ex__19311__auto__ = e26947;
var statearr_26948_26970 = state_26920;
(statearr_26948_26970[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26971 = state_26920;
state_26920 = G__26971;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19330__auto__ = (function (){var statearr_26949 = f__19329__auto__.call(null);
(statearr_26949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___26954);

return statearr_26949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___26954,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args26973 = [];
var len__17364__auto___27029 = arguments.length;
var i__17365__auto___27030 = (0);
while(true){
if((i__17365__auto___27030 < len__17364__auto___27029)){
args26973.push((arguments[i__17365__auto___27030]));

var G__27031 = (i__17365__auto___27030 + (1));
i__17365__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var G__26975 = args26973.length;
switch (G__26975) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26973.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27033,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27033,out){
return (function (state_27005){
var state_val_27006 = (state_27005[(1)]);
if((state_val_27006 === (7))){
var inst_26984 = (state_27005[(7)]);
var inst_26985 = (state_27005[(8)]);
var inst_26984__$1 = (state_27005[(2)]);
var inst_26985__$1 = cljs.core.nth.call(null,inst_26984__$1,(0),null);
var inst_26986 = cljs.core.nth.call(null,inst_26984__$1,(1),null);
var inst_26987 = (inst_26985__$1 == null);
var state_27005__$1 = (function (){var statearr_27007 = state_27005;
(statearr_27007[(7)] = inst_26984__$1);

(statearr_27007[(8)] = inst_26985__$1);

(statearr_27007[(9)] = inst_26986);

return statearr_27007;
})();
if(cljs.core.truth_(inst_26987)){
var statearr_27008_27034 = state_27005__$1;
(statearr_27008_27034[(1)] = (8));

} else {
var statearr_27009_27035 = state_27005__$1;
(statearr_27009_27035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (1))){
var inst_26976 = cljs.core.vec.call(null,chs);
var inst_26977 = inst_26976;
var state_27005__$1 = (function (){var statearr_27010 = state_27005;
(statearr_27010[(10)] = inst_26977);

return statearr_27010;
})();
var statearr_27011_27036 = state_27005__$1;
(statearr_27011_27036[(2)] = null);

(statearr_27011_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (4))){
var inst_26977 = (state_27005[(10)]);
var state_27005__$1 = state_27005;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27005__$1,(7),inst_26977);
} else {
if((state_val_27006 === (6))){
var inst_27001 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27012_27037 = state_27005__$1;
(statearr_27012_27037[(2)] = inst_27001);

(statearr_27012_27037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (3))){
var inst_27003 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27005__$1,inst_27003);
} else {
if((state_val_27006 === (2))){
var inst_26977 = (state_27005[(10)]);
var inst_26979 = cljs.core.count.call(null,inst_26977);
var inst_26980 = (inst_26979 > (0));
var state_27005__$1 = state_27005;
if(cljs.core.truth_(inst_26980)){
var statearr_27014_27038 = state_27005__$1;
(statearr_27014_27038[(1)] = (4));

} else {
var statearr_27015_27039 = state_27005__$1;
(statearr_27015_27039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (11))){
var inst_26977 = (state_27005[(10)]);
var inst_26994 = (state_27005[(2)]);
var tmp27013 = inst_26977;
var inst_26977__$1 = tmp27013;
var state_27005__$1 = (function (){var statearr_27016 = state_27005;
(statearr_27016[(10)] = inst_26977__$1);

(statearr_27016[(11)] = inst_26994);

return statearr_27016;
})();
var statearr_27017_27040 = state_27005__$1;
(statearr_27017_27040[(2)] = null);

(statearr_27017_27040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (9))){
var inst_26985 = (state_27005[(8)]);
var state_27005__$1 = state_27005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27005__$1,(11),out,inst_26985);
} else {
if((state_val_27006 === (5))){
var inst_26999 = cljs.core.async.close_BANG_.call(null,out);
var state_27005__$1 = state_27005;
var statearr_27018_27041 = state_27005__$1;
(statearr_27018_27041[(2)] = inst_26999);

(statearr_27018_27041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (10))){
var inst_26997 = (state_27005[(2)]);
var state_27005__$1 = state_27005;
var statearr_27019_27042 = state_27005__$1;
(statearr_27019_27042[(2)] = inst_26997);

(statearr_27019_27042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27006 === (8))){
var inst_26984 = (state_27005[(7)]);
var inst_26977 = (state_27005[(10)]);
var inst_26985 = (state_27005[(8)]);
var inst_26986 = (state_27005[(9)]);
var inst_26989 = (function (){var cs = inst_26977;
var vec__26982 = inst_26984;
var v = inst_26985;
var c = inst_26986;
return ((function (cs,vec__26982,v,c,inst_26984,inst_26977,inst_26985,inst_26986,state_val_27006,c__19328__auto___27033,out){
return (function (p1__26972_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26972_SHARP_);
});
;})(cs,vec__26982,v,c,inst_26984,inst_26977,inst_26985,inst_26986,state_val_27006,c__19328__auto___27033,out))
})();
var inst_26990 = cljs.core.filterv.call(null,inst_26989,inst_26977);
var inst_26977__$1 = inst_26990;
var state_27005__$1 = (function (){var statearr_27020 = state_27005;
(statearr_27020[(10)] = inst_26977__$1);

return statearr_27020;
})();
var statearr_27021_27043 = state_27005__$1;
(statearr_27021_27043[(2)] = null);

(statearr_27021_27043[(1)] = (2));


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
});})(c__19328__auto___27033,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27033,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27025[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27025[(1)] = (1));

return statearr_27025;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27005){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27026){if((e27026 instanceof Object)){
var ex__19311__auto__ = e27026;
var statearr_27027_27044 = state_27005;
(statearr_27027_27044[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27045 = state_27005;
state_27005 = G__27045;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27033,out))
})();
var state__19330__auto__ = (function (){var statearr_27028 = f__19329__auto__.call(null);
(statearr_27028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27033);

return statearr_27028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27033,out))
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
var args27046 = [];
var len__17364__auto___27095 = arguments.length;
var i__17365__auto___27096 = (0);
while(true){
if((i__17365__auto___27096 < len__17364__auto___27095)){
args27046.push((arguments[i__17365__auto___27096]));

var G__27097 = (i__17365__auto___27096 + (1));
i__17365__auto___27096 = G__27097;
continue;
} else {
}
break;
}

var G__27048 = args27046.length;
switch (G__27048) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27046.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27099,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27099,out){
return (function (state_27072){
var state_val_27073 = (state_27072[(1)]);
if((state_val_27073 === (7))){
var inst_27054 = (state_27072[(7)]);
var inst_27054__$1 = (state_27072[(2)]);
var inst_27055 = (inst_27054__$1 == null);
var inst_27056 = cljs.core.not.call(null,inst_27055);
var state_27072__$1 = (function (){var statearr_27074 = state_27072;
(statearr_27074[(7)] = inst_27054__$1);

return statearr_27074;
})();
if(inst_27056){
var statearr_27075_27100 = state_27072__$1;
(statearr_27075_27100[(1)] = (8));

} else {
var statearr_27076_27101 = state_27072__$1;
(statearr_27076_27101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (1))){
var inst_27049 = (0);
var state_27072__$1 = (function (){var statearr_27077 = state_27072;
(statearr_27077[(8)] = inst_27049);

return statearr_27077;
})();
var statearr_27078_27102 = state_27072__$1;
(statearr_27078_27102[(2)] = null);

(statearr_27078_27102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (4))){
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27072__$1,(7),ch);
} else {
if((state_val_27073 === (6))){
var inst_27067 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27079_27103 = state_27072__$1;
(statearr_27079_27103[(2)] = inst_27067);

(statearr_27079_27103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (3))){
var inst_27069 = (state_27072[(2)]);
var inst_27070 = cljs.core.async.close_BANG_.call(null,out);
var state_27072__$1 = (function (){var statearr_27080 = state_27072;
(statearr_27080[(9)] = inst_27069);

return statearr_27080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27072__$1,inst_27070);
} else {
if((state_val_27073 === (2))){
var inst_27049 = (state_27072[(8)]);
var inst_27051 = (inst_27049 < n);
var state_27072__$1 = state_27072;
if(cljs.core.truth_(inst_27051)){
var statearr_27081_27104 = state_27072__$1;
(statearr_27081_27104[(1)] = (4));

} else {
var statearr_27082_27105 = state_27072__$1;
(statearr_27082_27105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (11))){
var inst_27049 = (state_27072[(8)]);
var inst_27059 = (state_27072[(2)]);
var inst_27060 = (inst_27049 + (1));
var inst_27049__$1 = inst_27060;
var state_27072__$1 = (function (){var statearr_27083 = state_27072;
(statearr_27083[(10)] = inst_27059);

(statearr_27083[(8)] = inst_27049__$1);

return statearr_27083;
})();
var statearr_27084_27106 = state_27072__$1;
(statearr_27084_27106[(2)] = null);

(statearr_27084_27106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (9))){
var state_27072__$1 = state_27072;
var statearr_27085_27107 = state_27072__$1;
(statearr_27085_27107[(2)] = null);

(statearr_27085_27107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (5))){
var state_27072__$1 = state_27072;
var statearr_27086_27108 = state_27072__$1;
(statearr_27086_27108[(2)] = null);

(statearr_27086_27108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (10))){
var inst_27064 = (state_27072[(2)]);
var state_27072__$1 = state_27072;
var statearr_27087_27109 = state_27072__$1;
(statearr_27087_27109[(2)] = inst_27064);

(statearr_27087_27109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27073 === (8))){
var inst_27054 = (state_27072[(7)]);
var state_27072__$1 = state_27072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27072__$1,(11),out,inst_27054);
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
});})(c__19328__auto___27099,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27099,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27091[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27091[(1)] = (1));

return statearr_27091;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27072){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27092){if((e27092 instanceof Object)){
var ex__19311__auto__ = e27092;
var statearr_27093_27110 = state_27072;
(statearr_27093_27110[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27111 = state_27072;
state_27072 = G__27111;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27099,out))
})();
var state__19330__auto__ = (function (){var statearr_27094 = f__19329__auto__.call(null);
(statearr_27094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27099);

return statearr_27094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27099,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27119 = (function (map_LT_,f,ch,meta27120){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27120 = meta27120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27121,meta27120__$1){
var self__ = this;
var _27121__$1 = this;
return (new cljs.core.async.t_cljs$core$async27119(self__.map_LT_,self__.f,self__.ch,meta27120__$1));
});

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27121){
var self__ = this;
var _27121__$1 = this;
return self__.meta27120;
});

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27122 = (function (map_LT_,f,ch,meta27120,_,fn1,meta27123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27120 = meta27120;
this._ = _;
this.fn1 = fn1;
this.meta27123 = meta27123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27124,meta27123__$1){
var self__ = this;
var _27124__$1 = this;
return (new cljs.core.async.t_cljs$core$async27122(self__.map_LT_,self__.f,self__.ch,self__.meta27120,self__._,self__.fn1,meta27123__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27124){
var self__ = this;
var _27124__$1 = this;
return self__.meta27123;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27112_SHARP_){
return f1.call(null,(((p1__27112_SHARP_ == null))?null:self__.f.call(null,p1__27112_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27122.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27120","meta27120",387527179,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27119","cljs.core.async/t_cljs$core$async27119",843602302,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27123","meta27123",480608006,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27122";

cljs.core.async.t_cljs$core$async27122.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async27122");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27122 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27122(map_LT___$1,f__$1,ch__$1,meta27120__$1,___$2,fn1__$1,meta27123){
return (new cljs.core.async.t_cljs$core$async27122(map_LT___$1,f__$1,ch__$1,meta27120__$1,___$2,fn1__$1,meta27123));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27122(self__.map_LT_,self__.f,self__.ch,self__.meta27120,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27120","meta27120",387527179,null)], null);
});

cljs.core.async.t_cljs$core$async27119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27119";

cljs.core.async.t_cljs$core$async27119.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async27119");
});

cljs.core.async.__GT_t_cljs$core$async27119 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27119(map_LT___$1,f__$1,ch__$1,meta27120){
return (new cljs.core.async.t_cljs$core$async27119(map_LT___$1,f__$1,ch__$1,meta27120));
});

}

return (new cljs.core.async.t_cljs$core$async27119(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27128 = (function (map_GT_,f,ch,meta27129){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27129 = meta27129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27130,meta27129__$1){
var self__ = this;
var _27130__$1 = this;
return (new cljs.core.async.t_cljs$core$async27128(self__.map_GT_,self__.f,self__.ch,meta27129__$1));
});

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27130){
var self__ = this;
var _27130__$1 = this;
return self__.meta27129;
});

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27129","meta27129",-1611733201,null)], null);
});

cljs.core.async.t_cljs$core$async27128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27128";

cljs.core.async.t_cljs$core$async27128.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async27128");
});

cljs.core.async.__GT_t_cljs$core$async27128 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27128(map_GT___$1,f__$1,ch__$1,meta27129){
return (new cljs.core.async.t_cljs$core$async27128(map_GT___$1,f__$1,ch__$1,meta27129));
});

}

return (new cljs.core.async.t_cljs$core$async27128(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27134 = (function (filter_GT_,p,ch,meta27135){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27135 = meta27135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27136,meta27135__$1){
var self__ = this;
var _27136__$1 = this;
return (new cljs.core.async.t_cljs$core$async27134(self__.filter_GT_,self__.p,self__.ch,meta27135__$1));
});

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27136){
var self__ = this;
var _27136__$1 = this;
return self__.meta27135;
});

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27135","meta27135",-860489232,null)], null);
});

cljs.core.async.t_cljs$core$async27134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27134";

cljs.core.async.t_cljs$core$async27134.cljs$lang$ctorPrWriter = (function (this__16904__auto__,writer__16905__auto__,opt__16906__auto__){
return cljs.core._write.call(null,writer__16905__auto__,"cljs.core.async/t_cljs$core$async27134");
});

cljs.core.async.__GT_t_cljs$core$async27134 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27134(filter_GT___$1,p__$1,ch__$1,meta27135){
return (new cljs.core.async.t_cljs$core$async27134(filter_GT___$1,p__$1,ch__$1,meta27135));
});

}

return (new cljs.core.async.t_cljs$core$async27134(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args27137 = [];
var len__17364__auto___27181 = arguments.length;
var i__17365__auto___27182 = (0);
while(true){
if((i__17365__auto___27182 < len__17364__auto___27181)){
args27137.push((arguments[i__17365__auto___27182]));

var G__27183 = (i__17365__auto___27182 + (1));
i__17365__auto___27182 = G__27183;
continue;
} else {
}
break;
}

var G__27139 = args27137.length;
switch (G__27139) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27137.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27185,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27185,out){
return (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (7))){
var inst_27156 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27162_27186 = state_27160__$1;
(statearr_27162_27186[(2)] = inst_27156);

(statearr_27162_27186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (1))){
var state_27160__$1 = state_27160;
var statearr_27163_27187 = state_27160__$1;
(statearr_27163_27187[(2)] = null);

(statearr_27163_27187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (4))){
var inst_27142 = (state_27160[(7)]);
var inst_27142__$1 = (state_27160[(2)]);
var inst_27143 = (inst_27142__$1 == null);
var state_27160__$1 = (function (){var statearr_27164 = state_27160;
(statearr_27164[(7)] = inst_27142__$1);

return statearr_27164;
})();
if(cljs.core.truth_(inst_27143)){
var statearr_27165_27188 = state_27160__$1;
(statearr_27165_27188[(1)] = (5));

} else {
var statearr_27166_27189 = state_27160__$1;
(statearr_27166_27189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (6))){
var inst_27142 = (state_27160[(7)]);
var inst_27147 = p.call(null,inst_27142);
var state_27160__$1 = state_27160;
if(cljs.core.truth_(inst_27147)){
var statearr_27167_27190 = state_27160__$1;
(statearr_27167_27190[(1)] = (8));

} else {
var statearr_27168_27191 = state_27160__$1;
(statearr_27168_27191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (3))){
var inst_27158 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27160__$1,inst_27158);
} else {
if((state_val_27161 === (2))){
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27160__$1,(4),ch);
} else {
if((state_val_27161 === (11))){
var inst_27150 = (state_27160[(2)]);
var state_27160__$1 = state_27160;
var statearr_27169_27192 = state_27160__$1;
(statearr_27169_27192[(2)] = inst_27150);

(statearr_27169_27192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (9))){
var state_27160__$1 = state_27160;
var statearr_27170_27193 = state_27160__$1;
(statearr_27170_27193[(2)] = null);

(statearr_27170_27193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (5))){
var inst_27145 = cljs.core.async.close_BANG_.call(null,out);
var state_27160__$1 = state_27160;
var statearr_27171_27194 = state_27160__$1;
(statearr_27171_27194[(2)] = inst_27145);

(statearr_27171_27194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (10))){
var inst_27153 = (state_27160[(2)]);
var state_27160__$1 = (function (){var statearr_27172 = state_27160;
(statearr_27172[(8)] = inst_27153);

return statearr_27172;
})();
var statearr_27173_27195 = state_27160__$1;
(statearr_27173_27195[(2)] = null);

(statearr_27173_27195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27161 === (8))){
var inst_27142 = (state_27160[(7)]);
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27160__$1,(11),out,inst_27142);
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
});})(c__19328__auto___27185,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27185,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27177 = [null,null,null,null,null,null,null,null,null];
(statearr_27177[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27177[(1)] = (1));

return statearr_27177;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27160){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27178){if((e27178 instanceof Object)){
var ex__19311__auto__ = e27178;
var statearr_27179_27196 = state_27160;
(statearr_27179_27196[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27197 = state_27160;
state_27160 = G__27197;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27185,out))
})();
var state__19330__auto__ = (function (){var statearr_27180 = f__19329__auto__.call(null);
(statearr_27180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27185);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27185,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27198 = [];
var len__17364__auto___27201 = arguments.length;
var i__17365__auto___27202 = (0);
while(true){
if((i__17365__auto___27202 < len__17364__auto___27201)){
args27198.push((arguments[i__17365__auto___27202]));

var G__27203 = (i__17365__auto___27202 + (1));
i__17365__auto___27202 = G__27203;
continue;
} else {
}
break;
}

var G__27200 = args27198.length;
switch (G__27200) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27198.length)].join('')));

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
return (function (state_27370){
var state_val_27371 = (state_27370[(1)]);
if((state_val_27371 === (7))){
var inst_27366 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27372_27413 = state_27370__$1;
(statearr_27372_27413[(2)] = inst_27366);

(statearr_27372_27413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (20))){
var inst_27336 = (state_27370[(7)]);
var inst_27347 = (state_27370[(2)]);
var inst_27348 = cljs.core.next.call(null,inst_27336);
var inst_27322 = inst_27348;
var inst_27323 = null;
var inst_27324 = (0);
var inst_27325 = (0);
var state_27370__$1 = (function (){var statearr_27373 = state_27370;
(statearr_27373[(8)] = inst_27325);

(statearr_27373[(9)] = inst_27322);

(statearr_27373[(10)] = inst_27324);

(statearr_27373[(11)] = inst_27347);

(statearr_27373[(12)] = inst_27323);

return statearr_27373;
})();
var statearr_27374_27414 = state_27370__$1;
(statearr_27374_27414[(2)] = null);

(statearr_27374_27414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (1))){
var state_27370__$1 = state_27370;
var statearr_27375_27415 = state_27370__$1;
(statearr_27375_27415[(2)] = null);

(statearr_27375_27415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (4))){
var inst_27311 = (state_27370[(13)]);
var inst_27311__$1 = (state_27370[(2)]);
var inst_27312 = (inst_27311__$1 == null);
var state_27370__$1 = (function (){var statearr_27376 = state_27370;
(statearr_27376[(13)] = inst_27311__$1);

return statearr_27376;
})();
if(cljs.core.truth_(inst_27312)){
var statearr_27377_27416 = state_27370__$1;
(statearr_27377_27416[(1)] = (5));

} else {
var statearr_27378_27417 = state_27370__$1;
(statearr_27378_27417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (15))){
var state_27370__$1 = state_27370;
var statearr_27382_27418 = state_27370__$1;
(statearr_27382_27418[(2)] = null);

(statearr_27382_27418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (21))){
var state_27370__$1 = state_27370;
var statearr_27383_27419 = state_27370__$1;
(statearr_27383_27419[(2)] = null);

(statearr_27383_27419[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (13))){
var inst_27325 = (state_27370[(8)]);
var inst_27322 = (state_27370[(9)]);
var inst_27324 = (state_27370[(10)]);
var inst_27323 = (state_27370[(12)]);
var inst_27332 = (state_27370[(2)]);
var inst_27333 = (inst_27325 + (1));
var tmp27379 = inst_27322;
var tmp27380 = inst_27324;
var tmp27381 = inst_27323;
var inst_27322__$1 = tmp27379;
var inst_27323__$1 = tmp27381;
var inst_27324__$1 = tmp27380;
var inst_27325__$1 = inst_27333;
var state_27370__$1 = (function (){var statearr_27384 = state_27370;
(statearr_27384[(8)] = inst_27325__$1);

(statearr_27384[(9)] = inst_27322__$1);

(statearr_27384[(10)] = inst_27324__$1);

(statearr_27384[(14)] = inst_27332);

(statearr_27384[(12)] = inst_27323__$1);

return statearr_27384;
})();
var statearr_27385_27420 = state_27370__$1;
(statearr_27385_27420[(2)] = null);

(statearr_27385_27420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (22))){
var state_27370__$1 = state_27370;
var statearr_27386_27421 = state_27370__$1;
(statearr_27386_27421[(2)] = null);

(statearr_27386_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (6))){
var inst_27311 = (state_27370[(13)]);
var inst_27320 = f.call(null,inst_27311);
var inst_27321 = cljs.core.seq.call(null,inst_27320);
var inst_27322 = inst_27321;
var inst_27323 = null;
var inst_27324 = (0);
var inst_27325 = (0);
var state_27370__$1 = (function (){var statearr_27387 = state_27370;
(statearr_27387[(8)] = inst_27325);

(statearr_27387[(9)] = inst_27322);

(statearr_27387[(10)] = inst_27324);

(statearr_27387[(12)] = inst_27323);

return statearr_27387;
})();
var statearr_27388_27422 = state_27370__$1;
(statearr_27388_27422[(2)] = null);

(statearr_27388_27422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (17))){
var inst_27336 = (state_27370[(7)]);
var inst_27340 = cljs.core.chunk_first.call(null,inst_27336);
var inst_27341 = cljs.core.chunk_rest.call(null,inst_27336);
var inst_27342 = cljs.core.count.call(null,inst_27340);
var inst_27322 = inst_27341;
var inst_27323 = inst_27340;
var inst_27324 = inst_27342;
var inst_27325 = (0);
var state_27370__$1 = (function (){var statearr_27389 = state_27370;
(statearr_27389[(8)] = inst_27325);

(statearr_27389[(9)] = inst_27322);

(statearr_27389[(10)] = inst_27324);

(statearr_27389[(12)] = inst_27323);

return statearr_27389;
})();
var statearr_27390_27423 = state_27370__$1;
(statearr_27390_27423[(2)] = null);

(statearr_27390_27423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (3))){
var inst_27368 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27370__$1,inst_27368);
} else {
if((state_val_27371 === (12))){
var inst_27356 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27391_27424 = state_27370__$1;
(statearr_27391_27424[(2)] = inst_27356);

(statearr_27391_27424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (2))){
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27370__$1,(4),in$);
} else {
if((state_val_27371 === (23))){
var inst_27364 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27392_27425 = state_27370__$1;
(statearr_27392_27425[(2)] = inst_27364);

(statearr_27392_27425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (19))){
var inst_27351 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27393_27426 = state_27370__$1;
(statearr_27393_27426[(2)] = inst_27351);

(statearr_27393_27426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (11))){
var inst_27336 = (state_27370[(7)]);
var inst_27322 = (state_27370[(9)]);
var inst_27336__$1 = cljs.core.seq.call(null,inst_27322);
var state_27370__$1 = (function (){var statearr_27394 = state_27370;
(statearr_27394[(7)] = inst_27336__$1);

return statearr_27394;
})();
if(inst_27336__$1){
var statearr_27395_27427 = state_27370__$1;
(statearr_27395_27427[(1)] = (14));

} else {
var statearr_27396_27428 = state_27370__$1;
(statearr_27396_27428[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (9))){
var inst_27358 = (state_27370[(2)]);
var inst_27359 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27370__$1 = (function (){var statearr_27397 = state_27370;
(statearr_27397[(15)] = inst_27358);

return statearr_27397;
})();
if(cljs.core.truth_(inst_27359)){
var statearr_27398_27429 = state_27370__$1;
(statearr_27398_27429[(1)] = (21));

} else {
var statearr_27399_27430 = state_27370__$1;
(statearr_27399_27430[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (5))){
var inst_27314 = cljs.core.async.close_BANG_.call(null,out);
var state_27370__$1 = state_27370;
var statearr_27400_27431 = state_27370__$1;
(statearr_27400_27431[(2)] = inst_27314);

(statearr_27400_27431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (14))){
var inst_27336 = (state_27370[(7)]);
var inst_27338 = cljs.core.chunked_seq_QMARK_.call(null,inst_27336);
var state_27370__$1 = state_27370;
if(inst_27338){
var statearr_27401_27432 = state_27370__$1;
(statearr_27401_27432[(1)] = (17));

} else {
var statearr_27402_27433 = state_27370__$1;
(statearr_27402_27433[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (16))){
var inst_27354 = (state_27370[(2)]);
var state_27370__$1 = state_27370;
var statearr_27403_27434 = state_27370__$1;
(statearr_27403_27434[(2)] = inst_27354);

(statearr_27403_27434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27371 === (10))){
var inst_27325 = (state_27370[(8)]);
var inst_27323 = (state_27370[(12)]);
var inst_27330 = cljs.core._nth.call(null,inst_27323,inst_27325);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27370__$1,(13),out,inst_27330);
} else {
if((state_val_27371 === (18))){
var inst_27336 = (state_27370[(7)]);
var inst_27345 = cljs.core.first.call(null,inst_27336);
var state_27370__$1 = state_27370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27370__$1,(20),out,inst_27345);
} else {
if((state_val_27371 === (8))){
var inst_27325 = (state_27370[(8)]);
var inst_27324 = (state_27370[(10)]);
var inst_27327 = (inst_27325 < inst_27324);
var inst_27328 = inst_27327;
var state_27370__$1 = state_27370;
if(cljs.core.truth_(inst_27328)){
var statearr_27404_27435 = state_27370__$1;
(statearr_27404_27435[(1)] = (10));

} else {
var statearr_27405_27436 = state_27370__$1;
(statearr_27405_27436[(1)] = (11));

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
var statearr_27409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__);

(statearr_27409[(1)] = (1));

return statearr_27409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1 = (function (state_27370){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27410){if((e27410 instanceof Object)){
var ex__19311__auto__ = e27410;
var statearr_27411_27437 = state_27370;
(statearr_27411_27437[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27438 = state_27370;
state_27370 = G__27438;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__ = function(state_27370){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1.call(this,state_27370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19308__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_27412 = f__19329__auto__.call(null);
(statearr_27412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_27412;
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
var args27439 = [];
var len__17364__auto___27442 = arguments.length;
var i__17365__auto___27443 = (0);
while(true){
if((i__17365__auto___27443 < len__17364__auto___27442)){
args27439.push((arguments[i__17365__auto___27443]));

var G__27444 = (i__17365__auto___27443 + (1));
i__17365__auto___27443 = G__27444;
continue;
} else {
}
break;
}

var G__27441 = args27439.length;
switch (G__27441) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27439.length)].join('')));

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
var args27446 = [];
var len__17364__auto___27449 = arguments.length;
var i__17365__auto___27450 = (0);
while(true){
if((i__17365__auto___27450 < len__17364__auto___27449)){
args27446.push((arguments[i__17365__auto___27450]));

var G__27451 = (i__17365__auto___27450 + (1));
i__17365__auto___27450 = G__27451;
continue;
} else {
}
break;
}

var G__27448 = args27446.length;
switch (G__27448) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27446.length)].join('')));

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
var args27453 = [];
var len__17364__auto___27504 = arguments.length;
var i__17365__auto___27505 = (0);
while(true){
if((i__17365__auto___27505 < len__17364__auto___27504)){
args27453.push((arguments[i__17365__auto___27505]));

var G__27506 = (i__17365__auto___27505 + (1));
i__17365__auto___27505 = G__27506;
continue;
} else {
}
break;
}

var G__27455 = args27453.length;
switch (G__27455) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27453.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27508,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27508,out){
return (function (state_27479){
var state_val_27480 = (state_27479[(1)]);
if((state_val_27480 === (7))){
var inst_27474 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27481_27509 = state_27479__$1;
(statearr_27481_27509[(2)] = inst_27474);

(statearr_27481_27509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (1))){
var inst_27456 = null;
var state_27479__$1 = (function (){var statearr_27482 = state_27479;
(statearr_27482[(7)] = inst_27456);

return statearr_27482;
})();
var statearr_27483_27510 = state_27479__$1;
(statearr_27483_27510[(2)] = null);

(statearr_27483_27510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (4))){
var inst_27459 = (state_27479[(8)]);
var inst_27459__$1 = (state_27479[(2)]);
var inst_27460 = (inst_27459__$1 == null);
var inst_27461 = cljs.core.not.call(null,inst_27460);
var state_27479__$1 = (function (){var statearr_27484 = state_27479;
(statearr_27484[(8)] = inst_27459__$1);

return statearr_27484;
})();
if(inst_27461){
var statearr_27485_27511 = state_27479__$1;
(statearr_27485_27511[(1)] = (5));

} else {
var statearr_27486_27512 = state_27479__$1;
(statearr_27486_27512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (6))){
var state_27479__$1 = state_27479;
var statearr_27487_27513 = state_27479__$1;
(statearr_27487_27513[(2)] = null);

(statearr_27487_27513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (3))){
var inst_27476 = (state_27479[(2)]);
var inst_27477 = cljs.core.async.close_BANG_.call(null,out);
var state_27479__$1 = (function (){var statearr_27488 = state_27479;
(statearr_27488[(9)] = inst_27476);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27479__$1,inst_27477);
} else {
if((state_val_27480 === (2))){
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27479__$1,(4),ch);
} else {
if((state_val_27480 === (11))){
var inst_27459 = (state_27479[(8)]);
var inst_27468 = (state_27479[(2)]);
var inst_27456 = inst_27459;
var state_27479__$1 = (function (){var statearr_27489 = state_27479;
(statearr_27489[(10)] = inst_27468);

(statearr_27489[(7)] = inst_27456);

return statearr_27489;
})();
var statearr_27490_27514 = state_27479__$1;
(statearr_27490_27514[(2)] = null);

(statearr_27490_27514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (9))){
var inst_27459 = (state_27479[(8)]);
var state_27479__$1 = state_27479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27479__$1,(11),out,inst_27459);
} else {
if((state_val_27480 === (5))){
var inst_27459 = (state_27479[(8)]);
var inst_27456 = (state_27479[(7)]);
var inst_27463 = cljs.core._EQ_.call(null,inst_27459,inst_27456);
var state_27479__$1 = state_27479;
if(inst_27463){
var statearr_27492_27515 = state_27479__$1;
(statearr_27492_27515[(1)] = (8));

} else {
var statearr_27493_27516 = state_27479__$1;
(statearr_27493_27516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (10))){
var inst_27471 = (state_27479[(2)]);
var state_27479__$1 = state_27479;
var statearr_27494_27517 = state_27479__$1;
(statearr_27494_27517[(2)] = inst_27471);

(statearr_27494_27517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27480 === (8))){
var inst_27456 = (state_27479[(7)]);
var tmp27491 = inst_27456;
var inst_27456__$1 = tmp27491;
var state_27479__$1 = (function (){var statearr_27495 = state_27479;
(statearr_27495[(7)] = inst_27456__$1);

return statearr_27495;
})();
var statearr_27496_27518 = state_27479__$1;
(statearr_27496_27518[(2)] = null);

(statearr_27496_27518[(1)] = (2));


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
});})(c__19328__auto___27508,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27508,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27500[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27500[(1)] = (1));

return statearr_27500;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27479){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27501){if((e27501 instanceof Object)){
var ex__19311__auto__ = e27501;
var statearr_27502_27519 = state_27479;
(statearr_27502_27519[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27520 = state_27479;
state_27479 = G__27520;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27508,out))
})();
var state__19330__auto__ = (function (){var statearr_27503 = f__19329__auto__.call(null);
(statearr_27503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27508);

return statearr_27503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27508,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args27521 = [];
var len__17364__auto___27591 = arguments.length;
var i__17365__auto___27592 = (0);
while(true){
if((i__17365__auto___27592 < len__17364__auto___27591)){
args27521.push((arguments[i__17365__auto___27592]));

var G__27593 = (i__17365__auto___27592 + (1));
i__17365__auto___27592 = G__27593;
continue;
} else {
}
break;
}

var G__27523 = args27521.length;
switch (G__27523) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27521.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27595,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27595,out){
return (function (state_27561){
var state_val_27562 = (state_27561[(1)]);
if((state_val_27562 === (7))){
var inst_27557 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27563_27596 = state_27561__$1;
(statearr_27563_27596[(2)] = inst_27557);

(statearr_27563_27596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (1))){
var inst_27524 = (new Array(n));
var inst_27525 = inst_27524;
var inst_27526 = (0);
var state_27561__$1 = (function (){var statearr_27564 = state_27561;
(statearr_27564[(7)] = inst_27526);

(statearr_27564[(8)] = inst_27525);

return statearr_27564;
})();
var statearr_27565_27597 = state_27561__$1;
(statearr_27565_27597[(2)] = null);

(statearr_27565_27597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (4))){
var inst_27529 = (state_27561[(9)]);
var inst_27529__$1 = (state_27561[(2)]);
var inst_27530 = (inst_27529__$1 == null);
var inst_27531 = cljs.core.not.call(null,inst_27530);
var state_27561__$1 = (function (){var statearr_27566 = state_27561;
(statearr_27566[(9)] = inst_27529__$1);

return statearr_27566;
})();
if(inst_27531){
var statearr_27567_27598 = state_27561__$1;
(statearr_27567_27598[(1)] = (5));

} else {
var statearr_27568_27599 = state_27561__$1;
(statearr_27568_27599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (15))){
var inst_27551 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27569_27600 = state_27561__$1;
(statearr_27569_27600[(2)] = inst_27551);

(statearr_27569_27600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (13))){
var state_27561__$1 = state_27561;
var statearr_27570_27601 = state_27561__$1;
(statearr_27570_27601[(2)] = null);

(statearr_27570_27601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (6))){
var inst_27526 = (state_27561[(7)]);
var inst_27547 = (inst_27526 > (0));
var state_27561__$1 = state_27561;
if(cljs.core.truth_(inst_27547)){
var statearr_27571_27602 = state_27561__$1;
(statearr_27571_27602[(1)] = (12));

} else {
var statearr_27572_27603 = state_27561__$1;
(statearr_27572_27603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (3))){
var inst_27559 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27561__$1,inst_27559);
} else {
if((state_val_27562 === (12))){
var inst_27525 = (state_27561[(8)]);
var inst_27549 = cljs.core.vec.call(null,inst_27525);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27561__$1,(15),out,inst_27549);
} else {
if((state_val_27562 === (2))){
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27561__$1,(4),ch);
} else {
if((state_val_27562 === (11))){
var inst_27541 = (state_27561[(2)]);
var inst_27542 = (new Array(n));
var inst_27525 = inst_27542;
var inst_27526 = (0);
var state_27561__$1 = (function (){var statearr_27573 = state_27561;
(statearr_27573[(7)] = inst_27526);

(statearr_27573[(8)] = inst_27525);

(statearr_27573[(10)] = inst_27541);

return statearr_27573;
})();
var statearr_27574_27604 = state_27561__$1;
(statearr_27574_27604[(2)] = null);

(statearr_27574_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (9))){
var inst_27525 = (state_27561[(8)]);
var inst_27539 = cljs.core.vec.call(null,inst_27525);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27561__$1,(11),out,inst_27539);
} else {
if((state_val_27562 === (5))){
var inst_27529 = (state_27561[(9)]);
var inst_27526 = (state_27561[(7)]);
var inst_27525 = (state_27561[(8)]);
var inst_27534 = (state_27561[(11)]);
var inst_27533 = (inst_27525[inst_27526] = inst_27529);
var inst_27534__$1 = (inst_27526 + (1));
var inst_27535 = (inst_27534__$1 < n);
var state_27561__$1 = (function (){var statearr_27575 = state_27561;
(statearr_27575[(11)] = inst_27534__$1);

(statearr_27575[(12)] = inst_27533);

return statearr_27575;
})();
if(cljs.core.truth_(inst_27535)){
var statearr_27576_27605 = state_27561__$1;
(statearr_27576_27605[(1)] = (8));

} else {
var statearr_27577_27606 = state_27561__$1;
(statearr_27577_27606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (14))){
var inst_27554 = (state_27561[(2)]);
var inst_27555 = cljs.core.async.close_BANG_.call(null,out);
var state_27561__$1 = (function (){var statearr_27579 = state_27561;
(statearr_27579[(13)] = inst_27554);

return statearr_27579;
})();
var statearr_27580_27607 = state_27561__$1;
(statearr_27580_27607[(2)] = inst_27555);

(statearr_27580_27607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (10))){
var inst_27545 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27581_27608 = state_27561__$1;
(statearr_27581_27608[(2)] = inst_27545);

(statearr_27581_27608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (8))){
var inst_27525 = (state_27561[(8)]);
var inst_27534 = (state_27561[(11)]);
var tmp27578 = inst_27525;
var inst_27525__$1 = tmp27578;
var inst_27526 = inst_27534;
var state_27561__$1 = (function (){var statearr_27582 = state_27561;
(statearr_27582[(7)] = inst_27526);

(statearr_27582[(8)] = inst_27525__$1);

return statearr_27582;
})();
var statearr_27583_27609 = state_27561__$1;
(statearr_27583_27609[(2)] = null);

(statearr_27583_27609[(1)] = (2));


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
});})(c__19328__auto___27595,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27595,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27587[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27587[(1)] = (1));

return statearr_27587;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27561){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27588){if((e27588 instanceof Object)){
var ex__19311__auto__ = e27588;
var statearr_27589_27610 = state_27561;
(statearr_27589_27610[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27611 = state_27561;
state_27561 = G__27611;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27595,out))
})();
var state__19330__auto__ = (function (){var statearr_27590 = f__19329__auto__.call(null);
(statearr_27590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27595);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27595,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args27612 = [];
var len__17364__auto___27686 = arguments.length;
var i__17365__auto___27687 = (0);
while(true){
if((i__17365__auto___27687 < len__17364__auto___27686)){
args27612.push((arguments[i__17365__auto___27687]));

var G__27688 = (i__17365__auto___27687 + (1));
i__17365__auto___27687 = G__27688;
continue;
} else {
}
break;
}

var G__27614 = args27612.length;
switch (G__27614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27612.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19328__auto___27690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___27690,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___27690,out){
return (function (state_27656){
var state_val_27657 = (state_27656[(1)]);
if((state_val_27657 === (7))){
var inst_27652 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27658_27691 = state_27656__$1;
(statearr_27658_27691[(2)] = inst_27652);

(statearr_27658_27691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (1))){
var inst_27615 = [];
var inst_27616 = inst_27615;
var inst_27617 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27656__$1 = (function (){var statearr_27659 = state_27656;
(statearr_27659[(7)] = inst_27617);

(statearr_27659[(8)] = inst_27616);

return statearr_27659;
})();
var statearr_27660_27692 = state_27656__$1;
(statearr_27660_27692[(2)] = null);

(statearr_27660_27692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (4))){
var inst_27620 = (state_27656[(9)]);
var inst_27620__$1 = (state_27656[(2)]);
var inst_27621 = (inst_27620__$1 == null);
var inst_27622 = cljs.core.not.call(null,inst_27621);
var state_27656__$1 = (function (){var statearr_27661 = state_27656;
(statearr_27661[(9)] = inst_27620__$1);

return statearr_27661;
})();
if(inst_27622){
var statearr_27662_27693 = state_27656__$1;
(statearr_27662_27693[(1)] = (5));

} else {
var statearr_27663_27694 = state_27656__$1;
(statearr_27663_27694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (15))){
var inst_27646 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27664_27695 = state_27656__$1;
(statearr_27664_27695[(2)] = inst_27646);

(statearr_27664_27695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (13))){
var state_27656__$1 = state_27656;
var statearr_27665_27696 = state_27656__$1;
(statearr_27665_27696[(2)] = null);

(statearr_27665_27696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (6))){
var inst_27616 = (state_27656[(8)]);
var inst_27641 = inst_27616.length;
var inst_27642 = (inst_27641 > (0));
var state_27656__$1 = state_27656;
if(cljs.core.truth_(inst_27642)){
var statearr_27666_27697 = state_27656__$1;
(statearr_27666_27697[(1)] = (12));

} else {
var statearr_27667_27698 = state_27656__$1;
(statearr_27667_27698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (3))){
var inst_27654 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27656__$1,inst_27654);
} else {
if((state_val_27657 === (12))){
var inst_27616 = (state_27656[(8)]);
var inst_27644 = cljs.core.vec.call(null,inst_27616);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27656__$1,(15),out,inst_27644);
} else {
if((state_val_27657 === (2))){
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27656__$1,(4),ch);
} else {
if((state_val_27657 === (11))){
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27634 = (state_27656[(2)]);
var inst_27635 = [];
var inst_27636 = inst_27635.push(inst_27620);
var inst_27616 = inst_27635;
var inst_27617 = inst_27624;
var state_27656__$1 = (function (){var statearr_27668 = state_27656;
(statearr_27668[(7)] = inst_27617);

(statearr_27668[(11)] = inst_27636);

(statearr_27668[(8)] = inst_27616);

(statearr_27668[(12)] = inst_27634);

return statearr_27668;
})();
var statearr_27669_27699 = state_27656__$1;
(statearr_27669_27699[(2)] = null);

(statearr_27669_27699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (9))){
var inst_27616 = (state_27656[(8)]);
var inst_27632 = cljs.core.vec.call(null,inst_27616);
var state_27656__$1 = state_27656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27656__$1,(11),out,inst_27632);
} else {
if((state_val_27657 === (5))){
var inst_27617 = (state_27656[(7)]);
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27624__$1 = f.call(null,inst_27620);
var inst_27625 = cljs.core._EQ_.call(null,inst_27624__$1,inst_27617);
var inst_27626 = cljs.core.keyword_identical_QMARK_.call(null,inst_27617,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27627 = (inst_27625) || (inst_27626);
var state_27656__$1 = (function (){var statearr_27670 = state_27656;
(statearr_27670[(10)] = inst_27624__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27627)){
var statearr_27671_27700 = state_27656__$1;
(statearr_27671_27700[(1)] = (8));

} else {
var statearr_27672_27701 = state_27656__$1;
(statearr_27672_27701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (14))){
var inst_27649 = (state_27656[(2)]);
var inst_27650 = cljs.core.async.close_BANG_.call(null,out);
var state_27656__$1 = (function (){var statearr_27674 = state_27656;
(statearr_27674[(13)] = inst_27649);

return statearr_27674;
})();
var statearr_27675_27702 = state_27656__$1;
(statearr_27675_27702[(2)] = inst_27650);

(statearr_27675_27702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (10))){
var inst_27639 = (state_27656[(2)]);
var state_27656__$1 = state_27656;
var statearr_27676_27703 = state_27656__$1;
(statearr_27676_27703[(2)] = inst_27639);

(statearr_27676_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27657 === (8))){
var inst_27624 = (state_27656[(10)]);
var inst_27620 = (state_27656[(9)]);
var inst_27616 = (state_27656[(8)]);
var inst_27629 = inst_27616.push(inst_27620);
var tmp27673 = inst_27616;
var inst_27616__$1 = tmp27673;
var inst_27617 = inst_27624;
var state_27656__$1 = (function (){var statearr_27677 = state_27656;
(statearr_27677[(7)] = inst_27617);

(statearr_27677[(8)] = inst_27616__$1);

(statearr_27677[(14)] = inst_27629);

return statearr_27677;
})();
var statearr_27678_27704 = state_27656__$1;
(statearr_27678_27704[(2)] = null);

(statearr_27678_27704[(1)] = (2));


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
});})(c__19328__auto___27690,out))
;
return ((function (switch__19307__auto__,c__19328__auto___27690,out){
return (function() {
var cljs$core$async$state_machine__19308__auto__ = null;
var cljs$core$async$state_machine__19308__auto____0 = (function (){
var statearr_27682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27682[(0)] = cljs$core$async$state_machine__19308__auto__);

(statearr_27682[(1)] = (1));

return statearr_27682;
});
var cljs$core$async$state_machine__19308__auto____1 = (function (state_27656){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_27656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e27683){if((e27683 instanceof Object)){
var ex__19311__auto__ = e27683;
var statearr_27684_27705 = state_27656;
(statearr_27684_27705[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27656;
state_27656 = G__27706;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
cljs$core$async$state_machine__19308__auto__ = function(state_27656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19308__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19308__auto____1.call(this,state_27656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19308__auto____0;
cljs$core$async$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19308__auto____1;
return cljs$core$async$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___27690,out))
})();
var state__19330__auto__ = (function (){var statearr_27685 = f__19329__auto__.call(null);
(statearr_27685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___27690);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___27690,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444419595790