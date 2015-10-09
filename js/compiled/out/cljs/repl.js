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
var seq__23895_23909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23896_23910 = null;
var count__23897_23911 = (0);
var i__23898_23912 = (0);
while(true){
if((i__23898_23912 < count__23897_23911)){
var f_23913 = cljs.core._nth.call(null,chunk__23896_23910,i__23898_23912);
cljs.core.println.call(null,"  ",f_23913);

var G__23914 = seq__23895_23909;
var G__23915 = chunk__23896_23910;
var G__23916 = count__23897_23911;
var G__23917 = (i__23898_23912 + (1));
seq__23895_23909 = G__23914;
chunk__23896_23910 = G__23915;
count__23897_23911 = G__23916;
i__23898_23912 = G__23917;
continue;
} else {
var temp__4425__auto___23918 = cljs.core.seq.call(null,seq__23895_23909);
if(temp__4425__auto___23918){
var seq__23895_23919__$1 = temp__4425__auto___23918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23895_23919__$1)){
var c__17109__auto___23920 = cljs.core.chunk_first.call(null,seq__23895_23919__$1);
var G__23921 = cljs.core.chunk_rest.call(null,seq__23895_23919__$1);
var G__23922 = c__17109__auto___23920;
var G__23923 = cljs.core.count.call(null,c__17109__auto___23920);
var G__23924 = (0);
seq__23895_23909 = G__23921;
chunk__23896_23910 = G__23922;
count__23897_23911 = G__23923;
i__23898_23912 = G__23924;
continue;
} else {
var f_23925 = cljs.core.first.call(null,seq__23895_23919__$1);
cljs.core.println.call(null,"  ",f_23925);

var G__23926 = cljs.core.next.call(null,seq__23895_23919__$1);
var G__23927 = null;
var G__23928 = (0);
var G__23929 = (0);
seq__23895_23909 = G__23926;
chunk__23896_23910 = G__23927;
count__23897_23911 = G__23928;
i__23898_23912 = G__23929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23930)))?cljs.core.second.call(null,arglists_23930):arglists_23930));
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
var seq__23899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23900 = null;
var count__23901 = (0);
var i__23902 = (0);
while(true){
if((i__23902 < count__23901)){
var vec__23903 = cljs.core._nth.call(null,chunk__23900,i__23902);
var name = cljs.core.nth.call(null,vec__23903,(0),null);
var map__23904 = cljs.core.nth.call(null,vec__23903,(1),null);
var map__23904__$1 = ((((!((map__23904 == null)))?((((map__23904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23904):map__23904);
var doc = cljs.core.get.call(null,map__23904__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23904__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23931 = seq__23899;
var G__23932 = chunk__23900;
var G__23933 = count__23901;
var G__23934 = (i__23902 + (1));
seq__23899 = G__23931;
chunk__23900 = G__23932;
count__23901 = G__23933;
i__23902 = G__23934;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23899);
if(temp__4425__auto__){
var seq__23899__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23899__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__23899__$1);
var G__23935 = cljs.core.chunk_rest.call(null,seq__23899__$1);
var G__23936 = c__17109__auto__;
var G__23937 = cljs.core.count.call(null,c__17109__auto__);
var G__23938 = (0);
seq__23899 = G__23935;
chunk__23900 = G__23936;
count__23901 = G__23937;
i__23902 = G__23938;
continue;
} else {
var vec__23906 = cljs.core.first.call(null,seq__23899__$1);
var name = cljs.core.nth.call(null,vec__23906,(0),null);
var map__23907 = cljs.core.nth.call(null,vec__23906,(1),null);
var map__23907__$1 = ((((!((map__23907 == null)))?((((map__23907.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23907.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23907):map__23907);
var doc = cljs.core.get.call(null,map__23907__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23907__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23939 = cljs.core.next.call(null,seq__23899__$1);
var G__23940 = null;
var G__23941 = (0);
var G__23942 = (0);
seq__23899 = G__23939;
chunk__23900 = G__23940;
count__23901 = G__23941;
i__23902 = G__23942;
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

//# sourceMappingURL=repl.js.map?rel=1444419593690