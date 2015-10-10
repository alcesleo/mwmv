// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29028_29042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29029_29043 = null;
var count__29030_29044 = (0);
var i__29031_29045 = (0);
while(true){
if((i__29031_29045 < count__29030_29044)){
var f_29046 = cljs.core._nth.call(null,chunk__29029_29043,i__29031_29045);
cljs.core.println.call(null,"  ",f_29046);

var G__29047 = seq__29028_29042;
var G__29048 = chunk__29029_29043;
var G__29049 = count__29030_29044;
var G__29050 = (i__29031_29045 + (1));
seq__29028_29042 = G__29047;
chunk__29029_29043 = G__29048;
count__29030_29044 = G__29049;
i__29031_29045 = G__29050;
continue;
} else {
var temp__4425__auto___29051 = cljs.core.seq.call(null,seq__29028_29042);
if(temp__4425__auto___29051){
var seq__29028_29052__$1 = temp__4425__auto___29051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29028_29052__$1)){
var c__17109__auto___29053 = cljs.core.chunk_first.call(null,seq__29028_29052__$1);
var G__29054 = cljs.core.chunk_rest.call(null,seq__29028_29052__$1);
var G__29055 = c__17109__auto___29053;
var G__29056 = cljs.core.count.call(null,c__17109__auto___29053);
var G__29057 = (0);
seq__29028_29042 = G__29054;
chunk__29029_29043 = G__29055;
count__29030_29044 = G__29056;
i__29031_29045 = G__29057;
continue;
} else {
var f_29058 = cljs.core.first.call(null,seq__29028_29052__$1);
cljs.core.println.call(null,"  ",f_29058);

var G__29059 = cljs.core.next.call(null,seq__29028_29052__$1);
var G__29060 = null;
var G__29061 = (0);
var G__29062 = (0);
seq__29028_29042 = G__29059;
chunk__29029_29043 = G__29060;
count__29030_29044 = G__29061;
i__29031_29045 = G__29062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29063)))?cljs.core.second.call(null,arglists_29063):arglists_29063));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29033 = null;
var count__29034 = (0);
var i__29035 = (0);
while(true){
if((i__29035 < count__29034)){
var vec__29036 = cljs.core._nth.call(null,chunk__29033,i__29035);
var name = cljs.core.nth.call(null,vec__29036,(0),null);
var map__29037 = cljs.core.nth.call(null,vec__29036,(1),null);
var map__29037__$1 = ((((!((map__29037 == null)))?((((map__29037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29037):map__29037);
var doc = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29064 = seq__29032;
var G__29065 = chunk__29033;
var G__29066 = count__29034;
var G__29067 = (i__29035 + (1));
seq__29032 = G__29064;
chunk__29033 = G__29065;
count__29034 = G__29066;
i__29035 = G__29067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29032);
if(temp__4425__auto__){
var seq__29032__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29032__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__29032__$1);
var G__29068 = cljs.core.chunk_rest.call(null,seq__29032__$1);
var G__29069 = c__17109__auto__;
var G__29070 = cljs.core.count.call(null,c__17109__auto__);
var G__29071 = (0);
seq__29032 = G__29068;
chunk__29033 = G__29069;
count__29034 = G__29070;
i__29035 = G__29071;
continue;
} else {
var vec__29039 = cljs.core.first.call(null,seq__29032__$1);
var name = cljs.core.nth.call(null,vec__29039,(0),null);
var map__29040 = cljs.core.nth.call(null,vec__29039,(1),null);
var map__29040__$1 = ((((!((map__29040 == null)))?((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var doc = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29072 = cljs.core.next.call(null,seq__29032__$1);
var G__29073 = null;
var G__29074 = (0);
var G__29075 = (0);
seq__29032 = G__29072;
chunk__29033 = G__29073;
count__29034 = G__29074;
i__29035 = G__29075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1444419857214