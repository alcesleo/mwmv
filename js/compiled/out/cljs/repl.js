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
var seq__23052_23066 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23053_23067 = null;
var count__23054_23068 = (0);
var i__23055_23069 = (0);
while(true){
if((i__23055_23069 < count__23054_23068)){
var f_23070 = cljs.core._nth.call(null,chunk__23053_23067,i__23055_23069);
cljs.core.println.call(null,"  ",f_23070);

var G__23071 = seq__23052_23066;
var G__23072 = chunk__23053_23067;
var G__23073 = count__23054_23068;
var G__23074 = (i__23055_23069 + (1));
seq__23052_23066 = G__23071;
chunk__23053_23067 = G__23072;
count__23054_23068 = G__23073;
i__23055_23069 = G__23074;
continue;
} else {
var temp__4425__auto___23075 = cljs.core.seq.call(null,seq__23052_23066);
if(temp__4425__auto___23075){
var seq__23052_23076__$1 = temp__4425__auto___23075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23052_23076__$1)){
var c__17109__auto___23077 = cljs.core.chunk_first.call(null,seq__23052_23076__$1);
var G__23078 = cljs.core.chunk_rest.call(null,seq__23052_23076__$1);
var G__23079 = c__17109__auto___23077;
var G__23080 = cljs.core.count.call(null,c__17109__auto___23077);
var G__23081 = (0);
seq__23052_23066 = G__23078;
chunk__23053_23067 = G__23079;
count__23054_23068 = G__23080;
i__23055_23069 = G__23081;
continue;
} else {
var f_23082 = cljs.core.first.call(null,seq__23052_23076__$1);
cljs.core.println.call(null,"  ",f_23082);

var G__23083 = cljs.core.next.call(null,seq__23052_23076__$1);
var G__23084 = null;
var G__23085 = (0);
var G__23086 = (0);
seq__23052_23066 = G__23083;
chunk__23053_23067 = G__23084;
count__23054_23068 = G__23085;
i__23055_23069 = G__23086;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23087 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16306__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23087);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23087)))?cljs.core.second.call(null,arglists_23087):arglists_23087));
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
var seq__23056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23057 = null;
var count__23058 = (0);
var i__23059 = (0);
while(true){
if((i__23059 < count__23058)){
var vec__23060 = cljs.core._nth.call(null,chunk__23057,i__23059);
var name = cljs.core.nth.call(null,vec__23060,(0),null);
var map__23061 = cljs.core.nth.call(null,vec__23060,(1),null);
var map__23061__$1 = ((((!((map__23061 == null)))?((((map__23061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23061):map__23061);
var doc = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23061__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23088 = seq__23056;
var G__23089 = chunk__23057;
var G__23090 = count__23058;
var G__23091 = (i__23059 + (1));
seq__23056 = G__23088;
chunk__23057 = G__23089;
count__23058 = G__23090;
i__23059 = G__23091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23056);
if(temp__4425__auto__){
var seq__23056__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23056__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__23056__$1);
var G__23092 = cljs.core.chunk_rest.call(null,seq__23056__$1);
var G__23093 = c__17109__auto__;
var G__23094 = cljs.core.count.call(null,c__17109__auto__);
var G__23095 = (0);
seq__23056 = G__23092;
chunk__23057 = G__23093;
count__23058 = G__23094;
i__23059 = G__23095;
continue;
} else {
var vec__23063 = cljs.core.first.call(null,seq__23056__$1);
var name = cljs.core.nth.call(null,vec__23063,(0),null);
var map__23064 = cljs.core.nth.call(null,vec__23063,(1),null);
var map__23064__$1 = ((((!((map__23064 == null)))?((((map__23064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23064):map__23064);
var doc = cljs.core.get.call(null,map__23064__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23064__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23096 = cljs.core.next.call(null,seq__23056__$1);
var G__23097 = null;
var G__23098 = (0);
var G__23099 = (0);
seq__23056 = G__23096;
chunk__23057 = G__23097;
count__23058 = G__23098;
i__23059 = G__23099;
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

//# sourceMappingURL=repl.js.map?rel=1444562457701