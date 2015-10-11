// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16306__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16306__auto__){
return or__16306__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16306__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23104_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23104_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23109 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23110 = null;
var count__23111 = (0);
var i__23112 = (0);
while(true){
if((i__23112 < count__23111)){
var n = cljs.core._nth.call(null,chunk__23110,i__23112);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23113 = seq__23109;
var G__23114 = chunk__23110;
var G__23115 = count__23111;
var G__23116 = (i__23112 + (1));
seq__23109 = G__23113;
chunk__23110 = G__23114;
count__23111 = G__23115;
i__23112 = G__23116;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23109);
if(temp__4425__auto__){
var seq__23109__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23109__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__23109__$1);
var G__23117 = cljs.core.chunk_rest.call(null,seq__23109__$1);
var G__23118 = c__17109__auto__;
var G__23119 = cljs.core.count.call(null,c__17109__auto__);
var G__23120 = (0);
seq__23109 = G__23117;
chunk__23110 = G__23118;
count__23111 = G__23119;
i__23112 = G__23120;
continue;
} else {
var n = cljs.core.first.call(null,seq__23109__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23121 = cljs.core.next.call(null,seq__23109__$1);
var G__23122 = null;
var G__23123 = (0);
var G__23124 = (0);
seq__23109 = G__23121;
chunk__23110 = G__23122;
count__23111 = G__23123;
i__23112 = G__23124;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23163_23170 = cljs.core.seq.call(null,deps);
var chunk__23164_23171 = null;
var count__23165_23172 = (0);
var i__23166_23173 = (0);
while(true){
if((i__23166_23173 < count__23165_23172)){
var dep_23174 = cljs.core._nth.call(null,chunk__23164_23171,i__23166_23173);
topo_sort_helper_STAR_.call(null,dep_23174,(depth + (1)),state);

var G__23175 = seq__23163_23170;
var G__23176 = chunk__23164_23171;
var G__23177 = count__23165_23172;
var G__23178 = (i__23166_23173 + (1));
seq__23163_23170 = G__23175;
chunk__23164_23171 = G__23176;
count__23165_23172 = G__23177;
i__23166_23173 = G__23178;
continue;
} else {
var temp__4425__auto___23179 = cljs.core.seq.call(null,seq__23163_23170);
if(temp__4425__auto___23179){
var seq__23163_23180__$1 = temp__4425__auto___23179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23163_23180__$1)){
var c__17109__auto___23181 = cljs.core.chunk_first.call(null,seq__23163_23180__$1);
var G__23182 = cljs.core.chunk_rest.call(null,seq__23163_23180__$1);
var G__23183 = c__17109__auto___23181;
var G__23184 = cljs.core.count.call(null,c__17109__auto___23181);
var G__23185 = (0);
seq__23163_23170 = G__23182;
chunk__23164_23171 = G__23183;
count__23165_23172 = G__23184;
i__23166_23173 = G__23185;
continue;
} else {
var dep_23186 = cljs.core.first.call(null,seq__23163_23180__$1);
topo_sort_helper_STAR_.call(null,dep_23186,(depth + (1)),state);

var G__23187 = cljs.core.next.call(null,seq__23163_23180__$1);
var G__23188 = null;
var G__23189 = (0);
var G__23190 = (0);
seq__23163_23170 = G__23187;
chunk__23164_23171 = G__23188;
count__23165_23172 = G__23189;
i__23166_23173 = G__23190;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23167){
var vec__23169 = p__23167;
var x = cljs.core.nth.call(null,vec__23169,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23169,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23169,x,xs,get_deps__$1){
return (function (p1__23125_SHARP_){
return clojure.set.difference.call(null,p1__23125_SHARP_,x);
});})(vec__23169,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23203 = cljs.core.seq.call(null,provides);
var chunk__23204 = null;
var count__23205 = (0);
var i__23206 = (0);
while(true){
if((i__23206 < count__23205)){
var prov = cljs.core._nth.call(null,chunk__23204,i__23206);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23207_23215 = cljs.core.seq.call(null,requires);
var chunk__23208_23216 = null;
var count__23209_23217 = (0);
var i__23210_23218 = (0);
while(true){
if((i__23210_23218 < count__23209_23217)){
var req_23219 = cljs.core._nth.call(null,chunk__23208_23216,i__23210_23218);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23219,prov);

var G__23220 = seq__23207_23215;
var G__23221 = chunk__23208_23216;
var G__23222 = count__23209_23217;
var G__23223 = (i__23210_23218 + (1));
seq__23207_23215 = G__23220;
chunk__23208_23216 = G__23221;
count__23209_23217 = G__23222;
i__23210_23218 = G__23223;
continue;
} else {
var temp__4425__auto___23224 = cljs.core.seq.call(null,seq__23207_23215);
if(temp__4425__auto___23224){
var seq__23207_23225__$1 = temp__4425__auto___23224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23207_23225__$1)){
var c__17109__auto___23226 = cljs.core.chunk_first.call(null,seq__23207_23225__$1);
var G__23227 = cljs.core.chunk_rest.call(null,seq__23207_23225__$1);
var G__23228 = c__17109__auto___23226;
var G__23229 = cljs.core.count.call(null,c__17109__auto___23226);
var G__23230 = (0);
seq__23207_23215 = G__23227;
chunk__23208_23216 = G__23228;
count__23209_23217 = G__23229;
i__23210_23218 = G__23230;
continue;
} else {
var req_23231 = cljs.core.first.call(null,seq__23207_23225__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23231,prov);

var G__23232 = cljs.core.next.call(null,seq__23207_23225__$1);
var G__23233 = null;
var G__23234 = (0);
var G__23235 = (0);
seq__23207_23215 = G__23232;
chunk__23208_23216 = G__23233;
count__23209_23217 = G__23234;
i__23210_23218 = G__23235;
continue;
}
} else {
}
}
break;
}

var G__23236 = seq__23203;
var G__23237 = chunk__23204;
var G__23238 = count__23205;
var G__23239 = (i__23206 + (1));
seq__23203 = G__23236;
chunk__23204 = G__23237;
count__23205 = G__23238;
i__23206 = G__23239;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23203);
if(temp__4425__auto__){
var seq__23203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23203__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__23203__$1);
var G__23240 = cljs.core.chunk_rest.call(null,seq__23203__$1);
var G__23241 = c__17109__auto__;
var G__23242 = cljs.core.count.call(null,c__17109__auto__);
var G__23243 = (0);
seq__23203 = G__23240;
chunk__23204 = G__23241;
count__23205 = G__23242;
i__23206 = G__23243;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23203__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23211_23244 = cljs.core.seq.call(null,requires);
var chunk__23212_23245 = null;
var count__23213_23246 = (0);
var i__23214_23247 = (0);
while(true){
if((i__23214_23247 < count__23213_23246)){
var req_23248 = cljs.core._nth.call(null,chunk__23212_23245,i__23214_23247);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23248,prov);

var G__23249 = seq__23211_23244;
var G__23250 = chunk__23212_23245;
var G__23251 = count__23213_23246;
var G__23252 = (i__23214_23247 + (1));
seq__23211_23244 = G__23249;
chunk__23212_23245 = G__23250;
count__23213_23246 = G__23251;
i__23214_23247 = G__23252;
continue;
} else {
var temp__4425__auto___23253__$1 = cljs.core.seq.call(null,seq__23211_23244);
if(temp__4425__auto___23253__$1){
var seq__23211_23254__$1 = temp__4425__auto___23253__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23211_23254__$1)){
var c__17109__auto___23255 = cljs.core.chunk_first.call(null,seq__23211_23254__$1);
var G__23256 = cljs.core.chunk_rest.call(null,seq__23211_23254__$1);
var G__23257 = c__17109__auto___23255;
var G__23258 = cljs.core.count.call(null,c__17109__auto___23255);
var G__23259 = (0);
seq__23211_23244 = G__23256;
chunk__23212_23245 = G__23257;
count__23213_23246 = G__23258;
i__23214_23247 = G__23259;
continue;
} else {
var req_23260 = cljs.core.first.call(null,seq__23211_23254__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23260,prov);

var G__23261 = cljs.core.next.call(null,seq__23211_23254__$1);
var G__23262 = null;
var G__23263 = (0);
var G__23264 = (0);
seq__23211_23244 = G__23261;
chunk__23212_23245 = G__23262;
count__23213_23246 = G__23263;
i__23214_23247 = G__23264;
continue;
}
} else {
}
}
break;
}

var G__23265 = cljs.core.next.call(null,seq__23203__$1);
var G__23266 = null;
var G__23267 = (0);
var G__23268 = (0);
seq__23203 = G__23265;
chunk__23204 = G__23266;
count__23205 = G__23267;
i__23206 = G__23268;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23273_23277 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23274_23278 = null;
var count__23275_23279 = (0);
var i__23276_23280 = (0);
while(true){
if((i__23276_23280 < count__23275_23279)){
var ns_23281 = cljs.core._nth.call(null,chunk__23274_23278,i__23276_23280);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23281);

var G__23282 = seq__23273_23277;
var G__23283 = chunk__23274_23278;
var G__23284 = count__23275_23279;
var G__23285 = (i__23276_23280 + (1));
seq__23273_23277 = G__23282;
chunk__23274_23278 = G__23283;
count__23275_23279 = G__23284;
i__23276_23280 = G__23285;
continue;
} else {
var temp__4425__auto___23286 = cljs.core.seq.call(null,seq__23273_23277);
if(temp__4425__auto___23286){
var seq__23273_23287__$1 = temp__4425__auto___23286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23273_23287__$1)){
var c__17109__auto___23288 = cljs.core.chunk_first.call(null,seq__23273_23287__$1);
var G__23289 = cljs.core.chunk_rest.call(null,seq__23273_23287__$1);
var G__23290 = c__17109__auto___23288;
var G__23291 = cljs.core.count.call(null,c__17109__auto___23288);
var G__23292 = (0);
seq__23273_23277 = G__23289;
chunk__23274_23278 = G__23290;
count__23275_23279 = G__23291;
i__23276_23280 = G__23292;
continue;
} else {
var ns_23293 = cljs.core.first.call(null,seq__23273_23287__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23293);

var G__23294 = cljs.core.next.call(null,seq__23273_23287__$1);
var G__23295 = null;
var G__23296 = (0);
var G__23297 = (0);
seq__23273_23277 = G__23294;
chunk__23274_23278 = G__23295;
count__23275_23279 = G__23296;
i__23276_23280 = G__23297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16306__auto__ = goog.require__;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23298__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23299__i = 0, G__23299__a = new Array(arguments.length -  0);
while (G__23299__i < G__23299__a.length) {G__23299__a[G__23299__i] = arguments[G__23299__i + 0]; ++G__23299__i;}
  args = new cljs.core.IndexedSeq(G__23299__a,0);
} 
return G__23298__delegate.call(this,args);};
G__23298.cljs$lang$maxFixedArity = 0;
G__23298.cljs$lang$applyTo = (function (arglist__23300){
var args = cljs.core.seq(arglist__23300);
return G__23298__delegate(args);
});
G__23298.cljs$core$IFn$_invoke$arity$variadic = G__23298__delegate;
return G__23298;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23301 = cljs.core._EQ_;
var expr__23302 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23301.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23302))){
return ((function (pred__23301,expr__23302){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23304){if((e23304 instanceof Error)){
var e = e23304;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23304;

}
}})());
});
;})(pred__23301,expr__23302))
} else {
if(cljs.core.truth_(pred__23301.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23302))){
return ((function (pred__23301,expr__23302){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23301,expr__23302){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23301,expr__23302))
);

return deferred.addErrback(((function (deferred,pred__23301,expr__23302){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23301,expr__23302))
);
});
;})(pred__23301,expr__23302))
} else {
return ((function (pred__23301,expr__23302){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23301,expr__23302))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23305,callback){
var map__23308 = p__23305;
var map__23308__$1 = ((((!((map__23308 == null)))?((((map__23308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23308):map__23308);
var file_msg = map__23308__$1;
var request_url = cljs.core.get.call(null,map__23308__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23308,map__23308__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23308,map__23308__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__){
return (function (state_23332){
var state_val_23333 = (state_23332[(1)]);
if((state_val_23333 === (7))){
var inst_23328 = (state_23332[(2)]);
var state_23332__$1 = state_23332;
var statearr_23334_23354 = state_23332__$1;
(statearr_23334_23354[(2)] = inst_23328);

(statearr_23334_23354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (1))){
var state_23332__$1 = state_23332;
var statearr_23335_23355 = state_23332__$1;
(statearr_23335_23355[(2)] = null);

(statearr_23335_23355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (4))){
var inst_23312 = (state_23332[(7)]);
var inst_23312__$1 = (state_23332[(2)]);
var state_23332__$1 = (function (){var statearr_23336 = state_23332;
(statearr_23336[(7)] = inst_23312__$1);

return statearr_23336;
})();
if(cljs.core.truth_(inst_23312__$1)){
var statearr_23337_23356 = state_23332__$1;
(statearr_23337_23356[(1)] = (5));

} else {
var statearr_23338_23357 = state_23332__$1;
(statearr_23338_23357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (6))){
var state_23332__$1 = state_23332;
var statearr_23339_23358 = state_23332__$1;
(statearr_23339_23358[(2)] = null);

(statearr_23339_23358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (3))){
var inst_23330 = (state_23332[(2)]);
var state_23332__$1 = state_23332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23332__$1,inst_23330);
} else {
if((state_val_23333 === (2))){
var state_23332__$1 = state_23332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23332__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23333 === (11))){
var inst_23324 = (state_23332[(2)]);
var state_23332__$1 = (function (){var statearr_23340 = state_23332;
(statearr_23340[(8)] = inst_23324);

return statearr_23340;
})();
var statearr_23341_23359 = state_23332__$1;
(statearr_23341_23359[(2)] = null);

(statearr_23341_23359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (9))){
var inst_23316 = (state_23332[(9)]);
var inst_23318 = (state_23332[(10)]);
var inst_23320 = inst_23318.call(null,inst_23316);
var state_23332__$1 = state_23332;
var statearr_23342_23360 = state_23332__$1;
(statearr_23342_23360[(2)] = inst_23320);

(statearr_23342_23360[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (5))){
var inst_23312 = (state_23332[(7)]);
var inst_23314 = figwheel.client.file_reloading.blocking_load.call(null,inst_23312);
var state_23332__$1 = state_23332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23332__$1,(8),inst_23314);
} else {
if((state_val_23333 === (10))){
var inst_23316 = (state_23332[(9)]);
var inst_23322 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23316);
var state_23332__$1 = state_23332;
var statearr_23343_23361 = state_23332__$1;
(statearr_23343_23361[(2)] = inst_23322);

(statearr_23343_23361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23333 === (8))){
var inst_23312 = (state_23332[(7)]);
var inst_23318 = (state_23332[(10)]);
var inst_23316 = (state_23332[(2)]);
var inst_23317 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23318__$1 = cljs.core.get.call(null,inst_23317,inst_23312);
var state_23332__$1 = (function (){var statearr_23344 = state_23332;
(statearr_23344[(9)] = inst_23316);

(statearr_23344[(10)] = inst_23318__$1);

return statearr_23344;
})();
if(cljs.core.truth_(inst_23318__$1)){
var statearr_23345_23362 = state_23332__$1;
(statearr_23345_23362[(1)] = (9));

} else {
var statearr_23346_23363 = state_23332__$1;
(statearr_23346_23363[(1)] = (10));

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
});})(c__19340__auto__))
;
return ((function (switch__19319__auto__,c__19340__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19320__auto__ = null;
var figwheel$client$file_reloading$state_machine__19320__auto____0 = (function (){
var statearr_23350 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23350[(0)] = figwheel$client$file_reloading$state_machine__19320__auto__);

(statearr_23350[(1)] = (1));

return statearr_23350;
});
var figwheel$client$file_reloading$state_machine__19320__auto____1 = (function (state_23332){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_23332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e23351){if((e23351 instanceof Object)){
var ex__19323__auto__ = e23351;
var statearr_23352_23364 = state_23332;
(statearr_23352_23364[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23365 = state_23332;
state_23332 = G__23365;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19320__auto__ = function(state_23332){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19320__auto____1.call(this,state_23332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19320__auto____0;
figwheel$client$file_reloading$state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19320__auto____1;
return figwheel$client$file_reloading$state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__))
})();
var state__19342__auto__ = (function (){var statearr_23353 = f__19341__auto__.call(null);
(statearr_23353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_23353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__))
);

return c__19340__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23366,callback){
var map__23369 = p__23366;
var map__23369__$1 = ((((!((map__23369 == null)))?((((map__23369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23369):map__23369);
var file_msg = map__23369__$1;
var namespace = cljs.core.get.call(null,map__23369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23369,map__23369__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23369,map__23369__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23371){
var map__23374 = p__23371;
var map__23374__$1 = ((((!((map__23374 == null)))?((((map__23374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23374):map__23374);
var file_msg = map__23374__$1;
var namespace = cljs.core.get.call(null,map__23374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16294__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16294__auto__){
var or__16306__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
var or__16306__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16306__auto____$1)){
return or__16306__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16294__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23376,callback){
var map__23379 = p__23376;
var map__23379__$1 = ((((!((map__23379 == null)))?((((map__23379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23379):map__23379);
var file_msg = map__23379__$1;
var request_url = cljs.core.get.call(null,map__23379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19340__auto___23467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___23467,out){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___23467,out){
return (function (state_23449){
var state_val_23450 = (state_23449[(1)]);
if((state_val_23450 === (1))){
var inst_23427 = cljs.core.nth.call(null,files,(0),null);
var inst_23428 = cljs.core.nthnext.call(null,files,(1));
var inst_23429 = files;
var state_23449__$1 = (function (){var statearr_23451 = state_23449;
(statearr_23451[(7)] = inst_23429);

(statearr_23451[(8)] = inst_23428);

(statearr_23451[(9)] = inst_23427);

return statearr_23451;
})();
var statearr_23452_23468 = state_23449__$1;
(statearr_23452_23468[(2)] = null);

(statearr_23452_23468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (2))){
var inst_23429 = (state_23449[(7)]);
var inst_23432 = (state_23449[(10)]);
var inst_23432__$1 = cljs.core.nth.call(null,inst_23429,(0),null);
var inst_23433 = cljs.core.nthnext.call(null,inst_23429,(1));
var inst_23434 = (inst_23432__$1 == null);
var inst_23435 = cljs.core.not.call(null,inst_23434);
var state_23449__$1 = (function (){var statearr_23453 = state_23449;
(statearr_23453[(10)] = inst_23432__$1);

(statearr_23453[(11)] = inst_23433);

return statearr_23453;
})();
if(inst_23435){
var statearr_23454_23469 = state_23449__$1;
(statearr_23454_23469[(1)] = (4));

} else {
var statearr_23455_23470 = state_23449__$1;
(statearr_23455_23470[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (3))){
var inst_23447 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23449__$1,inst_23447);
} else {
if((state_val_23450 === (4))){
var inst_23432 = (state_23449[(10)]);
var inst_23437 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23432);
var state_23449__$1 = state_23449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23449__$1,(7),inst_23437);
} else {
if((state_val_23450 === (5))){
var inst_23443 = cljs.core.async.close_BANG_.call(null,out);
var state_23449__$1 = state_23449;
var statearr_23456_23471 = state_23449__$1;
(statearr_23456_23471[(2)] = inst_23443);

(statearr_23456_23471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (6))){
var inst_23445 = (state_23449[(2)]);
var state_23449__$1 = state_23449;
var statearr_23457_23472 = state_23449__$1;
(statearr_23457_23472[(2)] = inst_23445);

(statearr_23457_23472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23450 === (7))){
var inst_23433 = (state_23449[(11)]);
var inst_23439 = (state_23449[(2)]);
var inst_23440 = cljs.core.async.put_BANG_.call(null,out,inst_23439);
var inst_23429 = inst_23433;
var state_23449__$1 = (function (){var statearr_23458 = state_23449;
(statearr_23458[(7)] = inst_23429);

(statearr_23458[(12)] = inst_23440);

return statearr_23458;
})();
var statearr_23459_23473 = state_23449__$1;
(statearr_23459_23473[(2)] = null);

(statearr_23459_23473[(1)] = (2));


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
});})(c__19340__auto___23467,out))
;
return ((function (switch__19319__auto__,c__19340__auto___23467,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____0 = (function (){
var statearr_23463 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23463[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__);

(statearr_23463[(1)] = (1));

return statearr_23463;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____1 = (function (state_23449){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_23449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e23464){if((e23464 instanceof Object)){
var ex__19323__auto__ = e23464;
var statearr_23465_23474 = state_23449;
(statearr_23465_23474[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23475 = state_23449;
state_23449 = G__23475;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__ = function(state_23449){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____1.call(this,state_23449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___23467,out))
})();
var state__19342__auto__ = (function (){var statearr_23466 = f__19341__auto__.call(null);
(statearr_23466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___23467);

return statearr_23466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___23467,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23476,opts){
var map__23480 = p__23476;
var map__23480__$1 = ((((!((map__23480 == null)))?((((map__23480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23480):map__23480);
var eval_body__$1 = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23480__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16294__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16294__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16294__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23482){var e = e23482;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23483_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23483_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23488){
var vec__23489 = p__23488;
var k = cljs.core.nth.call(null,vec__23489,(0),null);
var v = cljs.core.nth.call(null,vec__23489,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23490){
var vec__23491 = p__23490;
var k = cljs.core.nth.call(null,vec__23491,(0),null);
var v = cljs.core.nth.call(null,vec__23491,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23495,p__23496){
var map__23743 = p__23495;
var map__23743__$1 = ((((!((map__23743 == null)))?((((map__23743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23743):map__23743);
var opts = map__23743__$1;
var before_jsload = cljs.core.get.call(null,map__23743__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23743__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23743__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23744 = p__23496;
var map__23744__$1 = ((((!((map__23744 == null)))?((((map__23744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23744):map__23744);
var msg = map__23744__$1;
var files = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23744__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23897){
var state_val_23898 = (state_23897[(1)]);
if((state_val_23898 === (7))){
var inst_23761 = (state_23897[(7)]);
var inst_23758 = (state_23897[(8)]);
var inst_23759 = (state_23897[(9)]);
var inst_23760 = (state_23897[(10)]);
var inst_23766 = cljs.core._nth.call(null,inst_23759,inst_23761);
var inst_23767 = figwheel.client.file_reloading.eval_body.call(null,inst_23766,opts);
var inst_23768 = (inst_23761 + (1));
var tmp23899 = inst_23758;
var tmp23900 = inst_23759;
var tmp23901 = inst_23760;
var inst_23758__$1 = tmp23899;
var inst_23759__$1 = tmp23900;
var inst_23760__$1 = tmp23901;
var inst_23761__$1 = inst_23768;
var state_23897__$1 = (function (){var statearr_23902 = state_23897;
(statearr_23902[(7)] = inst_23761__$1);

(statearr_23902[(8)] = inst_23758__$1);

(statearr_23902[(11)] = inst_23767);

(statearr_23902[(9)] = inst_23759__$1);

(statearr_23902[(10)] = inst_23760__$1);

return statearr_23902;
})();
var statearr_23903_23989 = state_23897__$1;
(statearr_23903_23989[(2)] = null);

(statearr_23903_23989[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (20))){
var inst_23801 = (state_23897[(12)]);
var inst_23809 = figwheel.client.file_reloading.sort_files.call(null,inst_23801);
var state_23897__$1 = state_23897;
var statearr_23904_23990 = state_23897__$1;
(statearr_23904_23990[(2)] = inst_23809);

(statearr_23904_23990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (27))){
var state_23897__$1 = state_23897;
var statearr_23905_23991 = state_23897__$1;
(statearr_23905_23991[(2)] = null);

(statearr_23905_23991[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (1))){
var inst_23750 = (state_23897[(13)]);
var inst_23747 = before_jsload.call(null,files);
var inst_23748 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23749 = (function (){return ((function (inst_23750,inst_23747,inst_23748,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23492_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23492_SHARP_);
});
;})(inst_23750,inst_23747,inst_23748,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23750__$1 = cljs.core.filter.call(null,inst_23749,files);
var inst_23751 = cljs.core.not_empty.call(null,inst_23750__$1);
var state_23897__$1 = (function (){var statearr_23906 = state_23897;
(statearr_23906[(13)] = inst_23750__$1);

(statearr_23906[(14)] = inst_23747);

(statearr_23906[(15)] = inst_23748);

return statearr_23906;
})();
if(cljs.core.truth_(inst_23751)){
var statearr_23907_23992 = state_23897__$1;
(statearr_23907_23992[(1)] = (2));

} else {
var statearr_23908_23993 = state_23897__$1;
(statearr_23908_23993[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (24))){
var state_23897__$1 = state_23897;
var statearr_23909_23994 = state_23897__$1;
(statearr_23909_23994[(2)] = null);

(statearr_23909_23994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (39))){
var inst_23851 = (state_23897[(16)]);
var state_23897__$1 = state_23897;
var statearr_23910_23995 = state_23897__$1;
(statearr_23910_23995[(2)] = inst_23851);

(statearr_23910_23995[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (46))){
var inst_23892 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23911_23996 = state_23897__$1;
(statearr_23911_23996[(2)] = inst_23892);

(statearr_23911_23996[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (4))){
var inst_23795 = (state_23897[(2)]);
var inst_23796 = cljs.core.List.EMPTY;
var inst_23797 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23796);
var inst_23798 = (function (){return ((function (inst_23795,inst_23796,inst_23797,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23493_SHARP_){
var and__16294__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23493_SHARP_);
if(cljs.core.truth_(and__16294__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23493_SHARP_));
} else {
return and__16294__auto__;
}
});
;})(inst_23795,inst_23796,inst_23797,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23799 = cljs.core.filter.call(null,inst_23798,files);
var inst_23800 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23801 = cljs.core.concat.call(null,inst_23799,inst_23800);
var state_23897__$1 = (function (){var statearr_23912 = state_23897;
(statearr_23912[(12)] = inst_23801);

(statearr_23912[(17)] = inst_23795);

(statearr_23912[(18)] = inst_23797);

return statearr_23912;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23913_23997 = state_23897__$1;
(statearr_23913_23997[(1)] = (16));

} else {
var statearr_23914_23998 = state_23897__$1;
(statearr_23914_23998[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (15))){
var inst_23785 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23915_23999 = state_23897__$1;
(statearr_23915_23999[(2)] = inst_23785);

(statearr_23915_23999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (21))){
var inst_23811 = (state_23897[(19)]);
var inst_23811__$1 = (state_23897[(2)]);
var inst_23812 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23811__$1);
var state_23897__$1 = (function (){var statearr_23916 = state_23897;
(statearr_23916[(19)] = inst_23811__$1);

return statearr_23916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23897__$1,(22),inst_23812);
} else {
if((state_val_23898 === (31))){
var inst_23895 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23897__$1,inst_23895);
} else {
if((state_val_23898 === (32))){
var inst_23851 = (state_23897[(16)]);
var inst_23856 = inst_23851.cljs$lang$protocol_mask$partition0$;
var inst_23857 = (inst_23856 & (64));
var inst_23858 = inst_23851.cljs$core$ISeq$;
var inst_23859 = (inst_23857) || (inst_23858);
var state_23897__$1 = state_23897;
if(cljs.core.truth_(inst_23859)){
var statearr_23917_24000 = state_23897__$1;
(statearr_23917_24000[(1)] = (35));

} else {
var statearr_23918_24001 = state_23897__$1;
(statearr_23918_24001[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (40))){
var inst_23872 = (state_23897[(20)]);
var inst_23871 = (state_23897[(2)]);
var inst_23872__$1 = cljs.core.get.call(null,inst_23871,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23873 = cljs.core.get.call(null,inst_23871,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23874 = cljs.core.not_empty.call(null,inst_23872__$1);
var state_23897__$1 = (function (){var statearr_23919 = state_23897;
(statearr_23919[(21)] = inst_23873);

(statearr_23919[(20)] = inst_23872__$1);

return statearr_23919;
})();
if(cljs.core.truth_(inst_23874)){
var statearr_23920_24002 = state_23897__$1;
(statearr_23920_24002[(1)] = (41));

} else {
var statearr_23921_24003 = state_23897__$1;
(statearr_23921_24003[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (33))){
var state_23897__$1 = state_23897;
var statearr_23922_24004 = state_23897__$1;
(statearr_23922_24004[(2)] = false);

(statearr_23922_24004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (13))){
var inst_23771 = (state_23897[(22)]);
var inst_23775 = cljs.core.chunk_first.call(null,inst_23771);
var inst_23776 = cljs.core.chunk_rest.call(null,inst_23771);
var inst_23777 = cljs.core.count.call(null,inst_23775);
var inst_23758 = inst_23776;
var inst_23759 = inst_23775;
var inst_23760 = inst_23777;
var inst_23761 = (0);
var state_23897__$1 = (function (){var statearr_23923 = state_23897;
(statearr_23923[(7)] = inst_23761);

(statearr_23923[(8)] = inst_23758);

(statearr_23923[(9)] = inst_23759);

(statearr_23923[(10)] = inst_23760);

return statearr_23923;
})();
var statearr_23924_24005 = state_23897__$1;
(statearr_23924_24005[(2)] = null);

(statearr_23924_24005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (22))){
var inst_23814 = (state_23897[(23)]);
var inst_23815 = (state_23897[(24)]);
var inst_23819 = (state_23897[(25)]);
var inst_23811 = (state_23897[(19)]);
var inst_23814__$1 = (state_23897[(2)]);
var inst_23815__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23814__$1);
var inst_23816 = (function (){var all_files = inst_23811;
var res_SINGLEQUOTE_ = inst_23814__$1;
var res = inst_23815__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23814,inst_23815,inst_23819,inst_23811,inst_23814__$1,inst_23815__$1,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23494_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23494_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23814,inst_23815,inst_23819,inst_23811,inst_23814__$1,inst_23815__$1,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23817 = cljs.core.filter.call(null,inst_23816,inst_23814__$1);
var inst_23818 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23819__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23818);
var inst_23820 = cljs.core.not_empty.call(null,inst_23819__$1);
var state_23897__$1 = (function (){var statearr_23925 = state_23897;
(statearr_23925[(23)] = inst_23814__$1);

(statearr_23925[(24)] = inst_23815__$1);

(statearr_23925[(25)] = inst_23819__$1);

(statearr_23925[(26)] = inst_23817);

return statearr_23925;
})();
if(cljs.core.truth_(inst_23820)){
var statearr_23926_24006 = state_23897__$1;
(statearr_23926_24006[(1)] = (23));

} else {
var statearr_23927_24007 = state_23897__$1;
(statearr_23927_24007[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (36))){
var state_23897__$1 = state_23897;
var statearr_23928_24008 = state_23897__$1;
(statearr_23928_24008[(2)] = false);

(statearr_23928_24008[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (41))){
var inst_23872 = (state_23897[(20)]);
var inst_23876 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23877 = cljs.core.map.call(null,inst_23876,inst_23872);
var inst_23878 = cljs.core.pr_str.call(null,inst_23877);
var inst_23879 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23878)].join('');
var inst_23880 = figwheel.client.utils.log.call(null,inst_23879);
var state_23897__$1 = state_23897;
var statearr_23929_24009 = state_23897__$1;
(statearr_23929_24009[(2)] = inst_23880);

(statearr_23929_24009[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (43))){
var inst_23873 = (state_23897[(21)]);
var inst_23883 = (state_23897[(2)]);
var inst_23884 = cljs.core.not_empty.call(null,inst_23873);
var state_23897__$1 = (function (){var statearr_23930 = state_23897;
(statearr_23930[(27)] = inst_23883);

return statearr_23930;
})();
if(cljs.core.truth_(inst_23884)){
var statearr_23931_24010 = state_23897__$1;
(statearr_23931_24010[(1)] = (44));

} else {
var statearr_23932_24011 = state_23897__$1;
(statearr_23932_24011[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (29))){
var inst_23851 = (state_23897[(16)]);
var inst_23814 = (state_23897[(23)]);
var inst_23815 = (state_23897[(24)]);
var inst_23819 = (state_23897[(25)]);
var inst_23811 = (state_23897[(19)]);
var inst_23817 = (state_23897[(26)]);
var inst_23847 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23850 = (function (){var all_files = inst_23811;
var res_SINGLEQUOTE_ = inst_23814;
var res = inst_23815;
var files_not_loaded = inst_23817;
var dependencies_that_loaded = inst_23819;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23851,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23847,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23849){
var map__23933 = p__23849;
var map__23933__$1 = ((((!((map__23933 == null)))?((((map__23933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23933):map__23933);
var namespace = cljs.core.get.call(null,map__23933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23851,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23847,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23851__$1 = cljs.core.group_by.call(null,inst_23850,inst_23817);
var inst_23853 = (inst_23851__$1 == null);
var inst_23854 = cljs.core.not.call(null,inst_23853);
var state_23897__$1 = (function (){var statearr_23935 = state_23897;
(statearr_23935[(16)] = inst_23851__$1);

(statearr_23935[(28)] = inst_23847);

return statearr_23935;
})();
if(inst_23854){
var statearr_23936_24012 = state_23897__$1;
(statearr_23936_24012[(1)] = (32));

} else {
var statearr_23937_24013 = state_23897__$1;
(statearr_23937_24013[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (44))){
var inst_23873 = (state_23897[(21)]);
var inst_23886 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23873);
var inst_23887 = cljs.core.pr_str.call(null,inst_23886);
var inst_23888 = [cljs.core.str("not required: "),cljs.core.str(inst_23887)].join('');
var inst_23889 = figwheel.client.utils.log.call(null,inst_23888);
var state_23897__$1 = state_23897;
var statearr_23938_24014 = state_23897__$1;
(statearr_23938_24014[(2)] = inst_23889);

(statearr_23938_24014[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (6))){
var inst_23792 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23939_24015 = state_23897__$1;
(statearr_23939_24015[(2)] = inst_23792);

(statearr_23939_24015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (28))){
var inst_23817 = (state_23897[(26)]);
var inst_23844 = (state_23897[(2)]);
var inst_23845 = cljs.core.not_empty.call(null,inst_23817);
var state_23897__$1 = (function (){var statearr_23940 = state_23897;
(statearr_23940[(29)] = inst_23844);

return statearr_23940;
})();
if(cljs.core.truth_(inst_23845)){
var statearr_23941_24016 = state_23897__$1;
(statearr_23941_24016[(1)] = (29));

} else {
var statearr_23942_24017 = state_23897__$1;
(statearr_23942_24017[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (25))){
var inst_23815 = (state_23897[(24)]);
var inst_23831 = (state_23897[(2)]);
var inst_23832 = cljs.core.not_empty.call(null,inst_23815);
var state_23897__$1 = (function (){var statearr_23943 = state_23897;
(statearr_23943[(30)] = inst_23831);

return statearr_23943;
})();
if(cljs.core.truth_(inst_23832)){
var statearr_23944_24018 = state_23897__$1;
(statearr_23944_24018[(1)] = (26));

} else {
var statearr_23945_24019 = state_23897__$1;
(statearr_23945_24019[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (34))){
var inst_23866 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
if(cljs.core.truth_(inst_23866)){
var statearr_23946_24020 = state_23897__$1;
(statearr_23946_24020[(1)] = (38));

} else {
var statearr_23947_24021 = state_23897__$1;
(statearr_23947_24021[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (17))){
var state_23897__$1 = state_23897;
var statearr_23948_24022 = state_23897__$1;
(statearr_23948_24022[(2)] = recompile_dependents);

(statearr_23948_24022[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (3))){
var state_23897__$1 = state_23897;
var statearr_23949_24023 = state_23897__$1;
(statearr_23949_24023[(2)] = null);

(statearr_23949_24023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (12))){
var inst_23788 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23950_24024 = state_23897__$1;
(statearr_23950_24024[(2)] = inst_23788);

(statearr_23950_24024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (2))){
var inst_23750 = (state_23897[(13)]);
var inst_23757 = cljs.core.seq.call(null,inst_23750);
var inst_23758 = inst_23757;
var inst_23759 = null;
var inst_23760 = (0);
var inst_23761 = (0);
var state_23897__$1 = (function (){var statearr_23951 = state_23897;
(statearr_23951[(7)] = inst_23761);

(statearr_23951[(8)] = inst_23758);

(statearr_23951[(9)] = inst_23759);

(statearr_23951[(10)] = inst_23760);

return statearr_23951;
})();
var statearr_23952_24025 = state_23897__$1;
(statearr_23952_24025[(2)] = null);

(statearr_23952_24025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (23))){
var inst_23814 = (state_23897[(23)]);
var inst_23815 = (state_23897[(24)]);
var inst_23819 = (state_23897[(25)]);
var inst_23811 = (state_23897[(19)]);
var inst_23817 = (state_23897[(26)]);
var inst_23822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23824 = (function (){var all_files = inst_23811;
var res_SINGLEQUOTE_ = inst_23814;
var res = inst_23815;
var files_not_loaded = inst_23817;
var dependencies_that_loaded = inst_23819;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23822,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23823){
var map__23953 = p__23823;
var map__23953__$1 = ((((!((map__23953 == null)))?((((map__23953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23953):map__23953);
var request_url = cljs.core.get.call(null,map__23953__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23822,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23825 = cljs.core.reverse.call(null,inst_23819);
var inst_23826 = cljs.core.map.call(null,inst_23824,inst_23825);
var inst_23827 = cljs.core.pr_str.call(null,inst_23826);
var inst_23828 = figwheel.client.utils.log.call(null,inst_23827);
var state_23897__$1 = (function (){var statearr_23955 = state_23897;
(statearr_23955[(31)] = inst_23822);

return statearr_23955;
})();
var statearr_23956_24026 = state_23897__$1;
(statearr_23956_24026[(2)] = inst_23828);

(statearr_23956_24026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (35))){
var state_23897__$1 = state_23897;
var statearr_23957_24027 = state_23897__$1;
(statearr_23957_24027[(2)] = true);

(statearr_23957_24027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (19))){
var inst_23801 = (state_23897[(12)]);
var inst_23807 = figwheel.client.file_reloading.expand_files.call(null,inst_23801);
var state_23897__$1 = state_23897;
var statearr_23958_24028 = state_23897__$1;
(statearr_23958_24028[(2)] = inst_23807);

(statearr_23958_24028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (11))){
var state_23897__$1 = state_23897;
var statearr_23959_24029 = state_23897__$1;
(statearr_23959_24029[(2)] = null);

(statearr_23959_24029[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (9))){
var inst_23790 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23960_24030 = state_23897__$1;
(statearr_23960_24030[(2)] = inst_23790);

(statearr_23960_24030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (5))){
var inst_23761 = (state_23897[(7)]);
var inst_23760 = (state_23897[(10)]);
var inst_23763 = (inst_23761 < inst_23760);
var inst_23764 = inst_23763;
var state_23897__$1 = state_23897;
if(cljs.core.truth_(inst_23764)){
var statearr_23961_24031 = state_23897__$1;
(statearr_23961_24031[(1)] = (7));

} else {
var statearr_23962_24032 = state_23897__$1;
(statearr_23962_24032[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (14))){
var inst_23771 = (state_23897[(22)]);
var inst_23780 = cljs.core.first.call(null,inst_23771);
var inst_23781 = figwheel.client.file_reloading.eval_body.call(null,inst_23780,opts);
var inst_23782 = cljs.core.next.call(null,inst_23771);
var inst_23758 = inst_23782;
var inst_23759 = null;
var inst_23760 = (0);
var inst_23761 = (0);
var state_23897__$1 = (function (){var statearr_23963 = state_23897;
(statearr_23963[(7)] = inst_23761);

(statearr_23963[(8)] = inst_23758);

(statearr_23963[(32)] = inst_23781);

(statearr_23963[(9)] = inst_23759);

(statearr_23963[(10)] = inst_23760);

return statearr_23963;
})();
var statearr_23964_24033 = state_23897__$1;
(statearr_23964_24033[(2)] = null);

(statearr_23964_24033[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (45))){
var state_23897__$1 = state_23897;
var statearr_23965_24034 = state_23897__$1;
(statearr_23965_24034[(2)] = null);

(statearr_23965_24034[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (26))){
var inst_23814 = (state_23897[(23)]);
var inst_23815 = (state_23897[(24)]);
var inst_23819 = (state_23897[(25)]);
var inst_23811 = (state_23897[(19)]);
var inst_23817 = (state_23897[(26)]);
var inst_23834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23836 = (function (){var all_files = inst_23811;
var res_SINGLEQUOTE_ = inst_23814;
var res = inst_23815;
var files_not_loaded = inst_23817;
var dependencies_that_loaded = inst_23819;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23834,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23835){
var map__23966 = p__23835;
var map__23966__$1 = ((((!((map__23966 == null)))?((((map__23966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23966):map__23966);
var namespace = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23966__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23834,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23837 = cljs.core.map.call(null,inst_23836,inst_23815);
var inst_23838 = cljs.core.pr_str.call(null,inst_23837);
var inst_23839 = figwheel.client.utils.log.call(null,inst_23838);
var inst_23840 = (function (){var all_files = inst_23811;
var res_SINGLEQUOTE_ = inst_23814;
var res = inst_23815;
var files_not_loaded = inst_23817;
var dependencies_that_loaded = inst_23819;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23834,inst_23836,inst_23837,inst_23838,inst_23839,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23814,inst_23815,inst_23819,inst_23811,inst_23817,inst_23834,inst_23836,inst_23837,inst_23838,inst_23839,state_val_23898,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23841 = setTimeout(inst_23840,(10));
var state_23897__$1 = (function (){var statearr_23968 = state_23897;
(statearr_23968[(33)] = inst_23839);

(statearr_23968[(34)] = inst_23834);

return statearr_23968;
})();
var statearr_23969_24035 = state_23897__$1;
(statearr_23969_24035[(2)] = inst_23841);

(statearr_23969_24035[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (16))){
var state_23897__$1 = state_23897;
var statearr_23970_24036 = state_23897__$1;
(statearr_23970_24036[(2)] = reload_dependents);

(statearr_23970_24036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (38))){
var inst_23851 = (state_23897[(16)]);
var inst_23868 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23851);
var state_23897__$1 = state_23897;
var statearr_23971_24037 = state_23897__$1;
(statearr_23971_24037[(2)] = inst_23868);

(statearr_23971_24037[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (30))){
var state_23897__$1 = state_23897;
var statearr_23972_24038 = state_23897__$1;
(statearr_23972_24038[(2)] = null);

(statearr_23972_24038[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (10))){
var inst_23771 = (state_23897[(22)]);
var inst_23773 = cljs.core.chunked_seq_QMARK_.call(null,inst_23771);
var state_23897__$1 = state_23897;
if(inst_23773){
var statearr_23973_24039 = state_23897__$1;
(statearr_23973_24039[(1)] = (13));

} else {
var statearr_23974_24040 = state_23897__$1;
(statearr_23974_24040[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (18))){
var inst_23805 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
if(cljs.core.truth_(inst_23805)){
var statearr_23975_24041 = state_23897__$1;
(statearr_23975_24041[(1)] = (19));

} else {
var statearr_23976_24042 = state_23897__$1;
(statearr_23976_24042[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (42))){
var state_23897__$1 = state_23897;
var statearr_23977_24043 = state_23897__$1;
(statearr_23977_24043[(2)] = null);

(statearr_23977_24043[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (37))){
var inst_23863 = (state_23897[(2)]);
var state_23897__$1 = state_23897;
var statearr_23978_24044 = state_23897__$1;
(statearr_23978_24044[(2)] = inst_23863);

(statearr_23978_24044[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23898 === (8))){
var inst_23758 = (state_23897[(8)]);
var inst_23771 = (state_23897[(22)]);
var inst_23771__$1 = cljs.core.seq.call(null,inst_23758);
var state_23897__$1 = (function (){var statearr_23979 = state_23897;
(statearr_23979[(22)] = inst_23771__$1);

return statearr_23979;
})();
if(inst_23771__$1){
var statearr_23980_24045 = state_23897__$1;
(statearr_23980_24045[(1)] = (10));

} else {
var statearr_23981_24046 = state_23897__$1;
(statearr_23981_24046[(1)] = (11));

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
}
});})(c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19319__auto__,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____0 = (function (){
var statearr_23985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23985[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__);

(statearr_23985[(1)] = (1));

return statearr_23985;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____1 = (function (state_23897){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_23897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e23986){if((e23986 instanceof Object)){
var ex__19323__auto__ = e23986;
var statearr_23987_24047 = state_23897;
(statearr_23987_24047[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24048 = state_23897;
state_23897 = G__24048;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__ = function(state_23897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____1.call(this,state_23897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19342__auto__ = (function (){var statearr_23988 = f__19341__auto__.call(null);
(statearr_23988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_23988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__,map__23743,map__23743__$1,opts,before_jsload,on_jsload,reload_dependents,map__23744,map__23744__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19340__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24051,link){
var map__24054 = p__24051;
var map__24054__$1 = ((((!((map__24054 == null)))?((((map__24054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24054):map__24054);
var file = cljs.core.get.call(null,map__24054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24054,map__24054__$1,file){
return (function (p1__24049_SHARP_,p2__24050_SHARP_){
if(cljs.core._EQ_.call(null,p1__24049_SHARP_,p2__24050_SHARP_)){
return p1__24049_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24054,map__24054__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24060){
var map__24061 = p__24060;
var map__24061__$1 = ((((!((map__24061 == null)))?((((map__24061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24061):map__24061);
var match_length = cljs.core.get.call(null,map__24061__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24061__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24056_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24056_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24063 = [];
var len__17364__auto___24066 = arguments.length;
var i__17365__auto___24067 = (0);
while(true){
if((i__17365__auto___24067 < len__17364__auto___24066)){
args24063.push((arguments[i__17365__auto___24067]));

var G__24068 = (i__17365__auto___24067 + (1));
i__17365__auto___24067 = G__24068;
continue;
} else {
}
break;
}

var G__24065 = args24063.length;
switch (G__24065) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24063.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24070_SHARP_,p2__24071_SHARP_){
return cljs.core.assoc.call(null,p1__24070_SHARP_,cljs.core.get.call(null,p2__24071_SHARP_,key),p2__24071_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24072){
var map__24075 = p__24072;
var map__24075__$1 = ((((!((map__24075 == null)))?((((map__24075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24075):map__24075);
var f_data = map__24075__$1;
var file = cljs.core.get.call(null,map__24075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24077,files_msg){
var map__24084 = p__24077;
var map__24084__$1 = ((((!((map__24084 == null)))?((((map__24084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24084):map__24084);
var opts = map__24084__$1;
var on_cssload = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24086_24090 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24087_24091 = null;
var count__24088_24092 = (0);
var i__24089_24093 = (0);
while(true){
if((i__24089_24093 < count__24088_24092)){
var f_24094 = cljs.core._nth.call(null,chunk__24087_24091,i__24089_24093);
figwheel.client.file_reloading.reload_css_file.call(null,f_24094);

var G__24095 = seq__24086_24090;
var G__24096 = chunk__24087_24091;
var G__24097 = count__24088_24092;
var G__24098 = (i__24089_24093 + (1));
seq__24086_24090 = G__24095;
chunk__24087_24091 = G__24096;
count__24088_24092 = G__24097;
i__24089_24093 = G__24098;
continue;
} else {
var temp__4425__auto___24099 = cljs.core.seq.call(null,seq__24086_24090);
if(temp__4425__auto___24099){
var seq__24086_24100__$1 = temp__4425__auto___24099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24086_24100__$1)){
var c__17109__auto___24101 = cljs.core.chunk_first.call(null,seq__24086_24100__$1);
var G__24102 = cljs.core.chunk_rest.call(null,seq__24086_24100__$1);
var G__24103 = c__17109__auto___24101;
var G__24104 = cljs.core.count.call(null,c__17109__auto___24101);
var G__24105 = (0);
seq__24086_24090 = G__24102;
chunk__24087_24091 = G__24103;
count__24088_24092 = G__24104;
i__24089_24093 = G__24105;
continue;
} else {
var f_24106 = cljs.core.first.call(null,seq__24086_24100__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24106);

var G__24107 = cljs.core.next.call(null,seq__24086_24100__$1);
var G__24108 = null;
var G__24109 = (0);
var G__24110 = (0);
seq__24086_24090 = G__24107;
chunk__24087_24091 = G__24108;
count__24088_24092 = G__24109;
i__24089_24093 = G__24110;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24084,map__24084__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24084,map__24084__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444562458170