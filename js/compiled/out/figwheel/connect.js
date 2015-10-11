// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('mwmv.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21875__delegate = function (x){
if(cljs.core.truth_(mwmv.core.on_js_reload)){
return cljs.core.apply.call(null,mwmv.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mwmv.core/on-js-reload' is missing");
}
};
var G__21875 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21876__i = 0, G__21876__a = new Array(arguments.length -  0);
while (G__21876__i < G__21876__a.length) {G__21876__a[G__21876__i] = arguments[G__21876__i + 0]; ++G__21876__i;}
  x = new cljs.core.IndexedSeq(G__21876__a,0);
} 
return G__21875__delegate.call(this,x);};
G__21875.cljs$lang$maxFixedArity = 0;
G__21875.cljs$lang$applyTo = (function (arglist__21877){
var x = cljs.core.seq(arglist__21877);
return G__21875__delegate(x);
});
G__21875.cljs$core$IFn$_invoke$arity$variadic = G__21875__delegate;
return G__21875;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1444562456713