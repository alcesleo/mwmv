// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__16294__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16294__auto__)){
return (window["CustomEvent"]);
} else {
return and__16294__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj22745 = {"detail":data};
return obj22745;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args22750 = [];
var len__17364__auto___22756 = arguments.length;
var i__17365__auto___22757 = (0);
while(true){
if((i__17365__auto___22757 < len__17364__auto___22756)){
args22750.push((arguments[i__17365__auto___22757]));

var G__22758 = (i__17365__auto___22757 + (1));
i__17365__auto___22757 = G__22758;
continue;
} else {
}
break;
}

var G__22752 = args22750.length;
switch (G__22752) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22750.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__22753 = cljs.core._EQ_;
var expr__22754 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__22754))){
return ((function (pred__22753,expr__22754){
return (function (p1__22746_SHARP_){
return console.warn(p1__22746_SHARP_);
});
;})(pred__22753,expr__22754))
} else {
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__22754))){
return ((function (pred__22753,expr__22754){
return (function (p1__22747_SHARP_){
return console.debug(p1__22747_SHARP_);
});
;})(pred__22753,expr__22754))
} else {
if(cljs.core.truth_(pred__22753.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__22754))){
return ((function (pred__22753,expr__22754){
return (function (p1__22748_SHARP_){
return console.error(p1__22748_SHARP_);
});
;})(pred__22753,expr__22754))
} else {
return ((function (pred__22753,expr__22754){
return (function (p1__22749_SHARP_){
return console.log(p1__22749_SHARP_);
});
;})(pred__22753,expr__22754))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__22760){
var map__22763 = p__22760;
var map__22763__$1 = ((((!((map__22763 == null)))?((((map__22763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22763):map__22763);
var opts = map__22763__$1;
var eval_fn = cljs.core.get.call(null,map__22763__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1444419592606