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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29080_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29080_SHARP_));
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
var seq__29085 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29086 = null;
var count__29087 = (0);
var i__29088 = (0);
while(true){
if((i__29088 < count__29087)){
var n = cljs.core._nth.call(null,chunk__29086,i__29088);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29089 = seq__29085;
var G__29090 = chunk__29086;
var G__29091 = count__29087;
var G__29092 = (i__29088 + (1));
seq__29085 = G__29089;
chunk__29086 = G__29090;
count__29087 = G__29091;
i__29088 = G__29092;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29085);
if(temp__4425__auto__){
var seq__29085__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29085__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__29085__$1);
var G__29093 = cljs.core.chunk_rest.call(null,seq__29085__$1);
var G__29094 = c__17109__auto__;
var G__29095 = cljs.core.count.call(null,c__17109__auto__);
var G__29096 = (0);
seq__29085 = G__29093;
chunk__29086 = G__29094;
count__29087 = G__29095;
i__29088 = G__29096;
continue;
} else {
var n = cljs.core.first.call(null,seq__29085__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29097 = cljs.core.next.call(null,seq__29085__$1);
var G__29098 = null;
var G__29099 = (0);
var G__29100 = (0);
seq__29085 = G__29097;
chunk__29086 = G__29098;
count__29087 = G__29099;
i__29088 = G__29100;
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

var seq__29139_29146 = cljs.core.seq.call(null,deps);
var chunk__29140_29147 = null;
var count__29141_29148 = (0);
var i__29142_29149 = (0);
while(true){
if((i__29142_29149 < count__29141_29148)){
var dep_29150 = cljs.core._nth.call(null,chunk__29140_29147,i__29142_29149);
topo_sort_helper_STAR_.call(null,dep_29150,(depth + (1)),state);

var G__29151 = seq__29139_29146;
var G__29152 = chunk__29140_29147;
var G__29153 = count__29141_29148;
var G__29154 = (i__29142_29149 + (1));
seq__29139_29146 = G__29151;
chunk__29140_29147 = G__29152;
count__29141_29148 = G__29153;
i__29142_29149 = G__29154;
continue;
} else {
var temp__4425__auto___29155 = cljs.core.seq.call(null,seq__29139_29146);
if(temp__4425__auto___29155){
var seq__29139_29156__$1 = temp__4425__auto___29155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29139_29156__$1)){
var c__17109__auto___29157 = cljs.core.chunk_first.call(null,seq__29139_29156__$1);
var G__29158 = cljs.core.chunk_rest.call(null,seq__29139_29156__$1);
var G__29159 = c__17109__auto___29157;
var G__29160 = cljs.core.count.call(null,c__17109__auto___29157);
var G__29161 = (0);
seq__29139_29146 = G__29158;
chunk__29140_29147 = G__29159;
count__29141_29148 = G__29160;
i__29142_29149 = G__29161;
continue;
} else {
var dep_29162 = cljs.core.first.call(null,seq__29139_29156__$1);
topo_sort_helper_STAR_.call(null,dep_29162,(depth + (1)),state);

var G__29163 = cljs.core.next.call(null,seq__29139_29156__$1);
var G__29164 = null;
var G__29165 = (0);
var G__29166 = (0);
seq__29139_29146 = G__29163;
chunk__29140_29147 = G__29164;
count__29141_29148 = G__29165;
i__29142_29149 = G__29166;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29143){
var vec__29145 = p__29143;
var x = cljs.core.nth.call(null,vec__29145,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29145,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29145,x,xs,get_deps__$1){
return (function (p1__29101_SHARP_){
return clojure.set.difference.call(null,p1__29101_SHARP_,x);
});})(vec__29145,x,xs,get_deps__$1))
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
var seq__29179 = cljs.core.seq.call(null,provides);
var chunk__29180 = null;
var count__29181 = (0);
var i__29182 = (0);
while(true){
if((i__29182 < count__29181)){
var prov = cljs.core._nth.call(null,chunk__29180,i__29182);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29183_29191 = cljs.core.seq.call(null,requires);
var chunk__29184_29192 = null;
var count__29185_29193 = (0);
var i__29186_29194 = (0);
while(true){
if((i__29186_29194 < count__29185_29193)){
var req_29195 = cljs.core._nth.call(null,chunk__29184_29192,i__29186_29194);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29195,prov);

var G__29196 = seq__29183_29191;
var G__29197 = chunk__29184_29192;
var G__29198 = count__29185_29193;
var G__29199 = (i__29186_29194 + (1));
seq__29183_29191 = G__29196;
chunk__29184_29192 = G__29197;
count__29185_29193 = G__29198;
i__29186_29194 = G__29199;
continue;
} else {
var temp__4425__auto___29200 = cljs.core.seq.call(null,seq__29183_29191);
if(temp__4425__auto___29200){
var seq__29183_29201__$1 = temp__4425__auto___29200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29183_29201__$1)){
var c__17109__auto___29202 = cljs.core.chunk_first.call(null,seq__29183_29201__$1);
var G__29203 = cljs.core.chunk_rest.call(null,seq__29183_29201__$1);
var G__29204 = c__17109__auto___29202;
var G__29205 = cljs.core.count.call(null,c__17109__auto___29202);
var G__29206 = (0);
seq__29183_29191 = G__29203;
chunk__29184_29192 = G__29204;
count__29185_29193 = G__29205;
i__29186_29194 = G__29206;
continue;
} else {
var req_29207 = cljs.core.first.call(null,seq__29183_29201__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29207,prov);

var G__29208 = cljs.core.next.call(null,seq__29183_29201__$1);
var G__29209 = null;
var G__29210 = (0);
var G__29211 = (0);
seq__29183_29191 = G__29208;
chunk__29184_29192 = G__29209;
count__29185_29193 = G__29210;
i__29186_29194 = G__29211;
continue;
}
} else {
}
}
break;
}

var G__29212 = seq__29179;
var G__29213 = chunk__29180;
var G__29214 = count__29181;
var G__29215 = (i__29182 + (1));
seq__29179 = G__29212;
chunk__29180 = G__29213;
count__29181 = G__29214;
i__29182 = G__29215;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29179);
if(temp__4425__auto__){
var seq__29179__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29179__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__29179__$1);
var G__29216 = cljs.core.chunk_rest.call(null,seq__29179__$1);
var G__29217 = c__17109__auto__;
var G__29218 = cljs.core.count.call(null,c__17109__auto__);
var G__29219 = (0);
seq__29179 = G__29216;
chunk__29180 = G__29217;
count__29181 = G__29218;
i__29182 = G__29219;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29179__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29187_29220 = cljs.core.seq.call(null,requires);
var chunk__29188_29221 = null;
var count__29189_29222 = (0);
var i__29190_29223 = (0);
while(true){
if((i__29190_29223 < count__29189_29222)){
var req_29224 = cljs.core._nth.call(null,chunk__29188_29221,i__29190_29223);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29224,prov);

var G__29225 = seq__29187_29220;
var G__29226 = chunk__29188_29221;
var G__29227 = count__29189_29222;
var G__29228 = (i__29190_29223 + (1));
seq__29187_29220 = G__29225;
chunk__29188_29221 = G__29226;
count__29189_29222 = G__29227;
i__29190_29223 = G__29228;
continue;
} else {
var temp__4425__auto___29229__$1 = cljs.core.seq.call(null,seq__29187_29220);
if(temp__4425__auto___29229__$1){
var seq__29187_29230__$1 = temp__4425__auto___29229__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29187_29230__$1)){
var c__17109__auto___29231 = cljs.core.chunk_first.call(null,seq__29187_29230__$1);
var G__29232 = cljs.core.chunk_rest.call(null,seq__29187_29230__$1);
var G__29233 = c__17109__auto___29231;
var G__29234 = cljs.core.count.call(null,c__17109__auto___29231);
var G__29235 = (0);
seq__29187_29220 = G__29232;
chunk__29188_29221 = G__29233;
count__29189_29222 = G__29234;
i__29190_29223 = G__29235;
continue;
} else {
var req_29236 = cljs.core.first.call(null,seq__29187_29230__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29236,prov);

var G__29237 = cljs.core.next.call(null,seq__29187_29230__$1);
var G__29238 = null;
var G__29239 = (0);
var G__29240 = (0);
seq__29187_29220 = G__29237;
chunk__29188_29221 = G__29238;
count__29189_29222 = G__29239;
i__29190_29223 = G__29240;
continue;
}
} else {
}
}
break;
}

var G__29241 = cljs.core.next.call(null,seq__29179__$1);
var G__29242 = null;
var G__29243 = (0);
var G__29244 = (0);
seq__29179 = G__29241;
chunk__29180 = G__29242;
count__29181 = G__29243;
i__29182 = G__29244;
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
var seq__29249_29253 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29250_29254 = null;
var count__29251_29255 = (0);
var i__29252_29256 = (0);
while(true){
if((i__29252_29256 < count__29251_29255)){
var ns_29257 = cljs.core._nth.call(null,chunk__29250_29254,i__29252_29256);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29257);

var G__29258 = seq__29249_29253;
var G__29259 = chunk__29250_29254;
var G__29260 = count__29251_29255;
var G__29261 = (i__29252_29256 + (1));
seq__29249_29253 = G__29258;
chunk__29250_29254 = G__29259;
count__29251_29255 = G__29260;
i__29252_29256 = G__29261;
continue;
} else {
var temp__4425__auto___29262 = cljs.core.seq.call(null,seq__29249_29253);
if(temp__4425__auto___29262){
var seq__29249_29263__$1 = temp__4425__auto___29262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29249_29263__$1)){
var c__17109__auto___29264 = cljs.core.chunk_first.call(null,seq__29249_29263__$1);
var G__29265 = cljs.core.chunk_rest.call(null,seq__29249_29263__$1);
var G__29266 = c__17109__auto___29264;
var G__29267 = cljs.core.count.call(null,c__17109__auto___29264);
var G__29268 = (0);
seq__29249_29253 = G__29265;
chunk__29250_29254 = G__29266;
count__29251_29255 = G__29267;
i__29252_29256 = G__29268;
continue;
} else {
var ns_29269 = cljs.core.first.call(null,seq__29249_29263__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29269);

var G__29270 = cljs.core.next.call(null,seq__29249_29263__$1);
var G__29271 = null;
var G__29272 = (0);
var G__29273 = (0);
seq__29249_29253 = G__29270;
chunk__29250_29254 = G__29271;
count__29251_29255 = G__29272;
i__29252_29256 = G__29273;
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
var G__29274__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29275__i = 0, G__29275__a = new Array(arguments.length -  0);
while (G__29275__i < G__29275__a.length) {G__29275__a[G__29275__i] = arguments[G__29275__i + 0]; ++G__29275__i;}
  args = new cljs.core.IndexedSeq(G__29275__a,0);
} 
return G__29274__delegate.call(this,args);};
G__29274.cljs$lang$maxFixedArity = 0;
G__29274.cljs$lang$applyTo = (function (arglist__29276){
var args = cljs.core.seq(arglist__29276);
return G__29274__delegate(args);
});
G__29274.cljs$core$IFn$_invoke$arity$variadic = G__29274__delegate;
return G__29274;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29277 = cljs.core._EQ_;
var expr__29278 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29277.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29278))){
return ((function (pred__29277,expr__29278){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29280){if((e29280 instanceof Error)){
var e = e29280;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29280;

}
}})());
});
;})(pred__29277,expr__29278))
} else {
if(cljs.core.truth_(pred__29277.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29278))){
return ((function (pred__29277,expr__29278){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29277,expr__29278){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29277,expr__29278))
);

return deferred.addErrback(((function (deferred,pred__29277,expr__29278){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29277,expr__29278))
);
});
;})(pred__29277,expr__29278))
} else {
return ((function (pred__29277,expr__29278){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29277,expr__29278))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29281,callback){
var map__29284 = p__29281;
var map__29284__$1 = ((((!((map__29284 == null)))?((((map__29284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29284):map__29284);
var file_msg = map__29284__$1;
var request_url = cljs.core.get.call(null,map__29284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29284,map__29284__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29284,map__29284__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_29308){
var state_val_29309 = (state_29308[(1)]);
if((state_val_29309 === (7))){
var inst_29304 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
var statearr_29310_29330 = state_29308__$1;
(statearr_29310_29330[(2)] = inst_29304);

(statearr_29310_29330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (1))){
var state_29308__$1 = state_29308;
var statearr_29311_29331 = state_29308__$1;
(statearr_29311_29331[(2)] = null);

(statearr_29311_29331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (4))){
var inst_29288 = (state_29308[(7)]);
var inst_29288__$1 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29312 = state_29308;
(statearr_29312[(7)] = inst_29288__$1);

return statearr_29312;
})();
if(cljs.core.truth_(inst_29288__$1)){
var statearr_29313_29332 = state_29308__$1;
(statearr_29313_29332[(1)] = (5));

} else {
var statearr_29314_29333 = state_29308__$1;
(statearr_29314_29333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (6))){
var state_29308__$1 = state_29308;
var statearr_29315_29334 = state_29308__$1;
(statearr_29315_29334[(2)] = null);

(statearr_29315_29334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (3))){
var inst_29306 = (state_29308[(2)]);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29308__$1,inst_29306);
} else {
if((state_val_29309 === (2))){
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29308__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29309 === (11))){
var inst_29300 = (state_29308[(2)]);
var state_29308__$1 = (function (){var statearr_29316 = state_29308;
(statearr_29316[(8)] = inst_29300);

return statearr_29316;
})();
var statearr_29317_29335 = state_29308__$1;
(statearr_29317_29335[(2)] = null);

(statearr_29317_29335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (9))){
var inst_29294 = (state_29308[(9)]);
var inst_29292 = (state_29308[(10)]);
var inst_29296 = inst_29294.call(null,inst_29292);
var state_29308__$1 = state_29308;
var statearr_29318_29336 = state_29308__$1;
(statearr_29318_29336[(2)] = inst_29296);

(statearr_29318_29336[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (5))){
var inst_29288 = (state_29308[(7)]);
var inst_29290 = figwheel.client.file_reloading.blocking_load.call(null,inst_29288);
var state_29308__$1 = state_29308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29308__$1,(8),inst_29290);
} else {
if((state_val_29309 === (10))){
var inst_29292 = (state_29308[(10)]);
var inst_29298 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29292);
var state_29308__$1 = state_29308;
var statearr_29319_29337 = state_29308__$1;
(statearr_29319_29337[(2)] = inst_29298);

(statearr_29319_29337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29309 === (8))){
var inst_29294 = (state_29308[(9)]);
var inst_29288 = (state_29308[(7)]);
var inst_29292 = (state_29308[(2)]);
var inst_29293 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29294__$1 = cljs.core.get.call(null,inst_29293,inst_29288);
var state_29308__$1 = (function (){var statearr_29320 = state_29308;
(statearr_29320[(9)] = inst_29294__$1);

(statearr_29320[(10)] = inst_29292);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29294__$1)){
var statearr_29321_29338 = state_29308__$1;
(statearr_29321_29338[(1)] = (9));

} else {
var statearr_29322_29339 = state_29308__$1;
(statearr_29322_29339[(1)] = (10));

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
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19308__auto__ = null;
var figwheel$client$file_reloading$state_machine__19308__auto____0 = (function (){
var statearr_29326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29326[(0)] = figwheel$client$file_reloading$state_machine__19308__auto__);

(statearr_29326[(1)] = (1));

return statearr_29326;
});
var figwheel$client$file_reloading$state_machine__19308__auto____1 = (function (state_29308){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_29308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e29327){if((e29327 instanceof Object)){
var ex__19311__auto__ = e29327;
var statearr_29328_29340 = state_29308;
(statearr_29328_29340[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29341 = state_29308;
state_29308 = G__29341;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19308__auto__ = function(state_29308){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19308__auto____1.call(this,state_29308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19308__auto____0;
figwheel$client$file_reloading$state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19308__auto____1;
return figwheel$client$file_reloading$state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_29329 = f__19329__auto__.call(null);
(statearr_29329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_29329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29342,callback){
var map__29345 = p__29342;
var map__29345__$1 = ((((!((map__29345 == null)))?((((map__29345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29345):map__29345);
var file_msg = map__29345__$1;
var namespace = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29345,map__29345__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29345,map__29345__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29347){
var map__29350 = p__29347;
var map__29350__$1 = ((((!((map__29350 == null)))?((((map__29350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29350):map__29350);
var file_msg = map__29350__$1;
var namespace = cljs.core.get.call(null,map__29350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29352,callback){
var map__29355 = p__29352;
var map__29355__$1 = ((((!((map__29355 == null)))?((((map__29355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29355):map__29355);
var file_msg = map__29355__$1;
var request_url = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19328__auto___29443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___29443,out){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___29443,out){
return (function (state_29425){
var state_val_29426 = (state_29425[(1)]);
if((state_val_29426 === (1))){
var inst_29403 = cljs.core.nth.call(null,files,(0),null);
var inst_29404 = cljs.core.nthnext.call(null,files,(1));
var inst_29405 = files;
var state_29425__$1 = (function (){var statearr_29427 = state_29425;
(statearr_29427[(7)] = inst_29404);

(statearr_29427[(8)] = inst_29403);

(statearr_29427[(9)] = inst_29405);

return statearr_29427;
})();
var statearr_29428_29444 = state_29425__$1;
(statearr_29428_29444[(2)] = null);

(statearr_29428_29444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (2))){
var inst_29408 = (state_29425[(10)]);
var inst_29405 = (state_29425[(9)]);
var inst_29408__$1 = cljs.core.nth.call(null,inst_29405,(0),null);
var inst_29409 = cljs.core.nthnext.call(null,inst_29405,(1));
var inst_29410 = (inst_29408__$1 == null);
var inst_29411 = cljs.core.not.call(null,inst_29410);
var state_29425__$1 = (function (){var statearr_29429 = state_29425;
(statearr_29429[(10)] = inst_29408__$1);

(statearr_29429[(11)] = inst_29409);

return statearr_29429;
})();
if(inst_29411){
var statearr_29430_29445 = state_29425__$1;
(statearr_29430_29445[(1)] = (4));

} else {
var statearr_29431_29446 = state_29425__$1;
(statearr_29431_29446[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (3))){
var inst_29423 = (state_29425[(2)]);
var state_29425__$1 = state_29425;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29425__$1,inst_29423);
} else {
if((state_val_29426 === (4))){
var inst_29408 = (state_29425[(10)]);
var inst_29413 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29408);
var state_29425__$1 = state_29425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29425__$1,(7),inst_29413);
} else {
if((state_val_29426 === (5))){
var inst_29419 = cljs.core.async.close_BANG_.call(null,out);
var state_29425__$1 = state_29425;
var statearr_29432_29447 = state_29425__$1;
(statearr_29432_29447[(2)] = inst_29419);

(statearr_29432_29447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (6))){
var inst_29421 = (state_29425[(2)]);
var state_29425__$1 = state_29425;
var statearr_29433_29448 = state_29425__$1;
(statearr_29433_29448[(2)] = inst_29421);

(statearr_29433_29448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29426 === (7))){
var inst_29409 = (state_29425[(11)]);
var inst_29415 = (state_29425[(2)]);
var inst_29416 = cljs.core.async.put_BANG_.call(null,out,inst_29415);
var inst_29405 = inst_29409;
var state_29425__$1 = (function (){var statearr_29434 = state_29425;
(statearr_29434[(12)] = inst_29416);

(statearr_29434[(9)] = inst_29405);

return statearr_29434;
})();
var statearr_29435_29449 = state_29425__$1;
(statearr_29435_29449[(2)] = null);

(statearr_29435_29449[(1)] = (2));


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
});})(c__19328__auto___29443,out))
;
return ((function (switch__19307__auto__,c__19328__auto___29443,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____0 = (function (){
var statearr_29439 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29439[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__);

(statearr_29439[(1)] = (1));

return statearr_29439;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____1 = (function (state_29425){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_29425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e29440){if((e29440 instanceof Object)){
var ex__19311__auto__ = e29440;
var statearr_29441_29450 = state_29425;
(statearr_29441_29450[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29451 = state_29425;
state_29425 = G__29451;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__ = function(state_29425){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____1.call(this,state_29425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___29443,out))
})();
var state__19330__auto__ = (function (){var statearr_29442 = f__19329__auto__.call(null);
(statearr_29442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___29443);

return statearr_29442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___29443,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29452,opts){
var map__29456 = p__29452;
var map__29456__$1 = ((((!((map__29456 == null)))?((((map__29456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29456):map__29456);
var eval_body__$1 = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29458){var e = e29458;
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
return (function (p1__29459_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29459_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29464){
var vec__29465 = p__29464;
var k = cljs.core.nth.call(null,vec__29465,(0),null);
var v = cljs.core.nth.call(null,vec__29465,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29466){
var vec__29467 = p__29466;
var k = cljs.core.nth.call(null,vec__29467,(0),null);
var v = cljs.core.nth.call(null,vec__29467,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29471,p__29472){
var map__29719 = p__29471;
var map__29719__$1 = ((((!((map__29719 == null)))?((((map__29719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29719):map__29719);
var opts = map__29719__$1;
var before_jsload = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29720 = p__29472;
var map__29720__$1 = ((((!((map__29720 == null)))?((((map__29720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29720):map__29720);
var msg = map__29720__$1;
var files = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29720__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29873){
var state_val_29874 = (state_29873[(1)]);
if((state_val_29874 === (7))){
var inst_29736 = (state_29873[(7)]);
var inst_29737 = (state_29873[(8)]);
var inst_29734 = (state_29873[(9)]);
var inst_29735 = (state_29873[(10)]);
var inst_29742 = cljs.core._nth.call(null,inst_29735,inst_29737);
var inst_29743 = figwheel.client.file_reloading.eval_body.call(null,inst_29742,opts);
var inst_29744 = (inst_29737 + (1));
var tmp29875 = inst_29736;
var tmp29876 = inst_29734;
var tmp29877 = inst_29735;
var inst_29734__$1 = tmp29876;
var inst_29735__$1 = tmp29877;
var inst_29736__$1 = tmp29875;
var inst_29737__$1 = inst_29744;
var state_29873__$1 = (function (){var statearr_29878 = state_29873;
(statearr_29878[(7)] = inst_29736__$1);

(statearr_29878[(8)] = inst_29737__$1);

(statearr_29878[(9)] = inst_29734__$1);

(statearr_29878[(11)] = inst_29743);

(statearr_29878[(10)] = inst_29735__$1);

return statearr_29878;
})();
var statearr_29879_29965 = state_29873__$1;
(statearr_29879_29965[(2)] = null);

(statearr_29879_29965[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (20))){
var inst_29777 = (state_29873[(12)]);
var inst_29785 = figwheel.client.file_reloading.sort_files.call(null,inst_29777);
var state_29873__$1 = state_29873;
var statearr_29880_29966 = state_29873__$1;
(statearr_29880_29966[(2)] = inst_29785);

(statearr_29880_29966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (27))){
var state_29873__$1 = state_29873;
var statearr_29881_29967 = state_29873__$1;
(statearr_29881_29967[(2)] = null);

(statearr_29881_29967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (1))){
var inst_29726 = (state_29873[(13)]);
var inst_29723 = before_jsload.call(null,files);
var inst_29724 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29725 = (function (){return ((function (inst_29726,inst_29723,inst_29724,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29468_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29468_SHARP_);
});
;})(inst_29726,inst_29723,inst_29724,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29726__$1 = cljs.core.filter.call(null,inst_29725,files);
var inst_29727 = cljs.core.not_empty.call(null,inst_29726__$1);
var state_29873__$1 = (function (){var statearr_29882 = state_29873;
(statearr_29882[(13)] = inst_29726__$1);

(statearr_29882[(14)] = inst_29723);

(statearr_29882[(15)] = inst_29724);

return statearr_29882;
})();
if(cljs.core.truth_(inst_29727)){
var statearr_29883_29968 = state_29873__$1;
(statearr_29883_29968[(1)] = (2));

} else {
var statearr_29884_29969 = state_29873__$1;
(statearr_29884_29969[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (24))){
var state_29873__$1 = state_29873;
var statearr_29885_29970 = state_29873__$1;
(statearr_29885_29970[(2)] = null);

(statearr_29885_29970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (39))){
var inst_29827 = (state_29873[(16)]);
var state_29873__$1 = state_29873;
var statearr_29886_29971 = state_29873__$1;
(statearr_29886_29971[(2)] = inst_29827);

(statearr_29886_29971[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (46))){
var inst_29868 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29887_29972 = state_29873__$1;
(statearr_29887_29972[(2)] = inst_29868);

(statearr_29887_29972[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (4))){
var inst_29771 = (state_29873[(2)]);
var inst_29772 = cljs.core.List.EMPTY;
var inst_29773 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29772);
var inst_29774 = (function (){return ((function (inst_29771,inst_29772,inst_29773,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29469_SHARP_){
var and__16294__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29469_SHARP_);
if(cljs.core.truth_(and__16294__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29469_SHARP_));
} else {
return and__16294__auto__;
}
});
;})(inst_29771,inst_29772,inst_29773,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29775 = cljs.core.filter.call(null,inst_29774,files);
var inst_29776 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29777 = cljs.core.concat.call(null,inst_29775,inst_29776);
var state_29873__$1 = (function (){var statearr_29888 = state_29873;
(statearr_29888[(17)] = inst_29771);

(statearr_29888[(12)] = inst_29777);

(statearr_29888[(18)] = inst_29773);

return statearr_29888;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29889_29973 = state_29873__$1;
(statearr_29889_29973[(1)] = (16));

} else {
var statearr_29890_29974 = state_29873__$1;
(statearr_29890_29974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (15))){
var inst_29761 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29891_29975 = state_29873__$1;
(statearr_29891_29975[(2)] = inst_29761);

(statearr_29891_29975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (21))){
var inst_29787 = (state_29873[(19)]);
var inst_29787__$1 = (state_29873[(2)]);
var inst_29788 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29787__$1);
var state_29873__$1 = (function (){var statearr_29892 = state_29873;
(statearr_29892[(19)] = inst_29787__$1);

return statearr_29892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29873__$1,(22),inst_29788);
} else {
if((state_val_29874 === (31))){
var inst_29871 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29873__$1,inst_29871);
} else {
if((state_val_29874 === (32))){
var inst_29827 = (state_29873[(16)]);
var inst_29832 = inst_29827.cljs$lang$protocol_mask$partition0$;
var inst_29833 = (inst_29832 & (64));
var inst_29834 = inst_29827.cljs$core$ISeq$;
var inst_29835 = (inst_29833) || (inst_29834);
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29835)){
var statearr_29893_29976 = state_29873__$1;
(statearr_29893_29976[(1)] = (35));

} else {
var statearr_29894_29977 = state_29873__$1;
(statearr_29894_29977[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (40))){
var inst_29848 = (state_29873[(20)]);
var inst_29847 = (state_29873[(2)]);
var inst_29848__$1 = cljs.core.get.call(null,inst_29847,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29849 = cljs.core.get.call(null,inst_29847,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29850 = cljs.core.not_empty.call(null,inst_29848__$1);
var state_29873__$1 = (function (){var statearr_29895 = state_29873;
(statearr_29895[(20)] = inst_29848__$1);

(statearr_29895[(21)] = inst_29849);

return statearr_29895;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29896_29978 = state_29873__$1;
(statearr_29896_29978[(1)] = (41));

} else {
var statearr_29897_29979 = state_29873__$1;
(statearr_29897_29979[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (33))){
var state_29873__$1 = state_29873;
var statearr_29898_29980 = state_29873__$1;
(statearr_29898_29980[(2)] = false);

(statearr_29898_29980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (13))){
var inst_29747 = (state_29873[(22)]);
var inst_29751 = cljs.core.chunk_first.call(null,inst_29747);
var inst_29752 = cljs.core.chunk_rest.call(null,inst_29747);
var inst_29753 = cljs.core.count.call(null,inst_29751);
var inst_29734 = inst_29752;
var inst_29735 = inst_29751;
var inst_29736 = inst_29753;
var inst_29737 = (0);
var state_29873__$1 = (function (){var statearr_29899 = state_29873;
(statearr_29899[(7)] = inst_29736);

(statearr_29899[(8)] = inst_29737);

(statearr_29899[(9)] = inst_29734);

(statearr_29899[(10)] = inst_29735);

return statearr_29899;
})();
var statearr_29900_29981 = state_29873__$1;
(statearr_29900_29981[(2)] = null);

(statearr_29900_29981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (22))){
var inst_29790 = (state_29873[(23)]);
var inst_29791 = (state_29873[(24)]);
var inst_29795 = (state_29873[(25)]);
var inst_29787 = (state_29873[(19)]);
var inst_29790__$1 = (state_29873[(2)]);
var inst_29791__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29790__$1);
var inst_29792 = (function (){var all_files = inst_29787;
var res_SINGLEQUOTE_ = inst_29790__$1;
var res = inst_29791__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29790,inst_29791,inst_29795,inst_29787,inst_29790__$1,inst_29791__$1,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29470_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29470_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29790,inst_29791,inst_29795,inst_29787,inst_29790__$1,inst_29791__$1,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29793 = cljs.core.filter.call(null,inst_29792,inst_29790__$1);
var inst_29794 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29795__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29794);
var inst_29796 = cljs.core.not_empty.call(null,inst_29795__$1);
var state_29873__$1 = (function (){var statearr_29901 = state_29873;
(statearr_29901[(23)] = inst_29790__$1);

(statearr_29901[(24)] = inst_29791__$1);

(statearr_29901[(25)] = inst_29795__$1);

(statearr_29901[(26)] = inst_29793);

return statearr_29901;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_29902_29982 = state_29873__$1;
(statearr_29902_29982[(1)] = (23));

} else {
var statearr_29903_29983 = state_29873__$1;
(statearr_29903_29983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (36))){
var state_29873__$1 = state_29873;
var statearr_29904_29984 = state_29873__$1;
(statearr_29904_29984[(2)] = false);

(statearr_29904_29984[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (41))){
var inst_29848 = (state_29873[(20)]);
var inst_29852 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29853 = cljs.core.map.call(null,inst_29852,inst_29848);
var inst_29854 = cljs.core.pr_str.call(null,inst_29853);
var inst_29855 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29854)].join('');
var inst_29856 = figwheel.client.utils.log.call(null,inst_29855);
var state_29873__$1 = state_29873;
var statearr_29905_29985 = state_29873__$1;
(statearr_29905_29985[(2)] = inst_29856);

(statearr_29905_29985[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (43))){
var inst_29849 = (state_29873[(21)]);
var inst_29859 = (state_29873[(2)]);
var inst_29860 = cljs.core.not_empty.call(null,inst_29849);
var state_29873__$1 = (function (){var statearr_29906 = state_29873;
(statearr_29906[(27)] = inst_29859);

return statearr_29906;
})();
if(cljs.core.truth_(inst_29860)){
var statearr_29907_29986 = state_29873__$1;
(statearr_29907_29986[(1)] = (44));

} else {
var statearr_29908_29987 = state_29873__$1;
(statearr_29908_29987[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (29))){
var inst_29827 = (state_29873[(16)]);
var inst_29790 = (state_29873[(23)]);
var inst_29791 = (state_29873[(24)]);
var inst_29795 = (state_29873[(25)]);
var inst_29787 = (state_29873[(19)]);
var inst_29793 = (state_29873[(26)]);
var inst_29823 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29826 = (function (){var all_files = inst_29787;
var res_SINGLEQUOTE_ = inst_29790;
var res = inst_29791;
var files_not_loaded = inst_29793;
var dependencies_that_loaded = inst_29795;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29823,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29825){
var map__29909 = p__29825;
var map__29909__$1 = ((((!((map__29909 == null)))?((((map__29909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29909):map__29909);
var namespace = cljs.core.get.call(null,map__29909__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29827,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29823,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29827__$1 = cljs.core.group_by.call(null,inst_29826,inst_29793);
var inst_29829 = (inst_29827__$1 == null);
var inst_29830 = cljs.core.not.call(null,inst_29829);
var state_29873__$1 = (function (){var statearr_29911 = state_29873;
(statearr_29911[(16)] = inst_29827__$1);

(statearr_29911[(28)] = inst_29823);

return statearr_29911;
})();
if(inst_29830){
var statearr_29912_29988 = state_29873__$1;
(statearr_29912_29988[(1)] = (32));

} else {
var statearr_29913_29989 = state_29873__$1;
(statearr_29913_29989[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (44))){
var inst_29849 = (state_29873[(21)]);
var inst_29862 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29849);
var inst_29863 = cljs.core.pr_str.call(null,inst_29862);
var inst_29864 = [cljs.core.str("not required: "),cljs.core.str(inst_29863)].join('');
var inst_29865 = figwheel.client.utils.log.call(null,inst_29864);
var state_29873__$1 = state_29873;
var statearr_29914_29990 = state_29873__$1;
(statearr_29914_29990[(2)] = inst_29865);

(statearr_29914_29990[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (6))){
var inst_29768 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29915_29991 = state_29873__$1;
(statearr_29915_29991[(2)] = inst_29768);

(statearr_29915_29991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (28))){
var inst_29793 = (state_29873[(26)]);
var inst_29820 = (state_29873[(2)]);
var inst_29821 = cljs.core.not_empty.call(null,inst_29793);
var state_29873__$1 = (function (){var statearr_29916 = state_29873;
(statearr_29916[(29)] = inst_29820);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29821)){
var statearr_29917_29992 = state_29873__$1;
(statearr_29917_29992[(1)] = (29));

} else {
var statearr_29918_29993 = state_29873__$1;
(statearr_29918_29993[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (25))){
var inst_29791 = (state_29873[(24)]);
var inst_29807 = (state_29873[(2)]);
var inst_29808 = cljs.core.not_empty.call(null,inst_29791);
var state_29873__$1 = (function (){var statearr_29919 = state_29873;
(statearr_29919[(30)] = inst_29807);

return statearr_29919;
})();
if(cljs.core.truth_(inst_29808)){
var statearr_29920_29994 = state_29873__$1;
(statearr_29920_29994[(1)] = (26));

} else {
var statearr_29921_29995 = state_29873__$1;
(statearr_29921_29995[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (34))){
var inst_29842 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29842)){
var statearr_29922_29996 = state_29873__$1;
(statearr_29922_29996[(1)] = (38));

} else {
var statearr_29923_29997 = state_29873__$1;
(statearr_29923_29997[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (17))){
var state_29873__$1 = state_29873;
var statearr_29924_29998 = state_29873__$1;
(statearr_29924_29998[(2)] = recompile_dependents);

(statearr_29924_29998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (3))){
var state_29873__$1 = state_29873;
var statearr_29925_29999 = state_29873__$1;
(statearr_29925_29999[(2)] = null);

(statearr_29925_29999[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (12))){
var inst_29764 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29926_30000 = state_29873__$1;
(statearr_29926_30000[(2)] = inst_29764);

(statearr_29926_30000[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (2))){
var inst_29726 = (state_29873[(13)]);
var inst_29733 = cljs.core.seq.call(null,inst_29726);
var inst_29734 = inst_29733;
var inst_29735 = null;
var inst_29736 = (0);
var inst_29737 = (0);
var state_29873__$1 = (function (){var statearr_29927 = state_29873;
(statearr_29927[(7)] = inst_29736);

(statearr_29927[(8)] = inst_29737);

(statearr_29927[(9)] = inst_29734);

(statearr_29927[(10)] = inst_29735);

return statearr_29927;
})();
var statearr_29928_30001 = state_29873__$1;
(statearr_29928_30001[(2)] = null);

(statearr_29928_30001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (23))){
var inst_29790 = (state_29873[(23)]);
var inst_29791 = (state_29873[(24)]);
var inst_29795 = (state_29873[(25)]);
var inst_29787 = (state_29873[(19)]);
var inst_29793 = (state_29873[(26)]);
var inst_29798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29800 = (function (){var all_files = inst_29787;
var res_SINGLEQUOTE_ = inst_29790;
var res = inst_29791;
var files_not_loaded = inst_29793;
var dependencies_that_loaded = inst_29795;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29798,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29799){
var map__29929 = p__29799;
var map__29929__$1 = ((((!((map__29929 == null)))?((((map__29929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29929):map__29929);
var request_url = cljs.core.get.call(null,map__29929__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29798,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29801 = cljs.core.reverse.call(null,inst_29795);
var inst_29802 = cljs.core.map.call(null,inst_29800,inst_29801);
var inst_29803 = cljs.core.pr_str.call(null,inst_29802);
var inst_29804 = figwheel.client.utils.log.call(null,inst_29803);
var state_29873__$1 = (function (){var statearr_29931 = state_29873;
(statearr_29931[(31)] = inst_29798);

return statearr_29931;
})();
var statearr_29932_30002 = state_29873__$1;
(statearr_29932_30002[(2)] = inst_29804);

(statearr_29932_30002[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (35))){
var state_29873__$1 = state_29873;
var statearr_29933_30003 = state_29873__$1;
(statearr_29933_30003[(2)] = true);

(statearr_29933_30003[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (19))){
var inst_29777 = (state_29873[(12)]);
var inst_29783 = figwheel.client.file_reloading.expand_files.call(null,inst_29777);
var state_29873__$1 = state_29873;
var statearr_29934_30004 = state_29873__$1;
(statearr_29934_30004[(2)] = inst_29783);

(statearr_29934_30004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (11))){
var state_29873__$1 = state_29873;
var statearr_29935_30005 = state_29873__$1;
(statearr_29935_30005[(2)] = null);

(statearr_29935_30005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (9))){
var inst_29766 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29936_30006 = state_29873__$1;
(statearr_29936_30006[(2)] = inst_29766);

(statearr_29936_30006[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (5))){
var inst_29736 = (state_29873[(7)]);
var inst_29737 = (state_29873[(8)]);
var inst_29739 = (inst_29737 < inst_29736);
var inst_29740 = inst_29739;
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29740)){
var statearr_29937_30007 = state_29873__$1;
(statearr_29937_30007[(1)] = (7));

} else {
var statearr_29938_30008 = state_29873__$1;
(statearr_29938_30008[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (14))){
var inst_29747 = (state_29873[(22)]);
var inst_29756 = cljs.core.first.call(null,inst_29747);
var inst_29757 = figwheel.client.file_reloading.eval_body.call(null,inst_29756,opts);
var inst_29758 = cljs.core.next.call(null,inst_29747);
var inst_29734 = inst_29758;
var inst_29735 = null;
var inst_29736 = (0);
var inst_29737 = (0);
var state_29873__$1 = (function (){var statearr_29939 = state_29873;
(statearr_29939[(7)] = inst_29736);

(statearr_29939[(8)] = inst_29737);

(statearr_29939[(9)] = inst_29734);

(statearr_29939[(32)] = inst_29757);

(statearr_29939[(10)] = inst_29735);

return statearr_29939;
})();
var statearr_29940_30009 = state_29873__$1;
(statearr_29940_30009[(2)] = null);

(statearr_29940_30009[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (45))){
var state_29873__$1 = state_29873;
var statearr_29941_30010 = state_29873__$1;
(statearr_29941_30010[(2)] = null);

(statearr_29941_30010[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (26))){
var inst_29790 = (state_29873[(23)]);
var inst_29791 = (state_29873[(24)]);
var inst_29795 = (state_29873[(25)]);
var inst_29787 = (state_29873[(19)]);
var inst_29793 = (state_29873[(26)]);
var inst_29810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29812 = (function (){var all_files = inst_29787;
var res_SINGLEQUOTE_ = inst_29790;
var res = inst_29791;
var files_not_loaded = inst_29793;
var dependencies_that_loaded = inst_29795;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29810,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29811){
var map__29942 = p__29811;
var map__29942__$1 = ((((!((map__29942 == null)))?((((map__29942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29942):map__29942);
var namespace = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29942__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29810,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29813 = cljs.core.map.call(null,inst_29812,inst_29791);
var inst_29814 = cljs.core.pr_str.call(null,inst_29813);
var inst_29815 = figwheel.client.utils.log.call(null,inst_29814);
var inst_29816 = (function (){var all_files = inst_29787;
var res_SINGLEQUOTE_ = inst_29790;
var res = inst_29791;
var files_not_loaded = inst_29793;
var dependencies_that_loaded = inst_29795;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29810,inst_29812,inst_29813,inst_29814,inst_29815,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29790,inst_29791,inst_29795,inst_29787,inst_29793,inst_29810,inst_29812,inst_29813,inst_29814,inst_29815,state_val_29874,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29817 = setTimeout(inst_29816,(10));
var state_29873__$1 = (function (){var statearr_29944 = state_29873;
(statearr_29944[(33)] = inst_29815);

(statearr_29944[(34)] = inst_29810);

return statearr_29944;
})();
var statearr_29945_30011 = state_29873__$1;
(statearr_29945_30011[(2)] = inst_29817);

(statearr_29945_30011[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (16))){
var state_29873__$1 = state_29873;
var statearr_29946_30012 = state_29873__$1;
(statearr_29946_30012[(2)] = reload_dependents);

(statearr_29946_30012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (38))){
var inst_29827 = (state_29873[(16)]);
var inst_29844 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29827);
var state_29873__$1 = state_29873;
var statearr_29947_30013 = state_29873__$1;
(statearr_29947_30013[(2)] = inst_29844);

(statearr_29947_30013[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (30))){
var state_29873__$1 = state_29873;
var statearr_29948_30014 = state_29873__$1;
(statearr_29948_30014[(2)] = null);

(statearr_29948_30014[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (10))){
var inst_29747 = (state_29873[(22)]);
var inst_29749 = cljs.core.chunked_seq_QMARK_.call(null,inst_29747);
var state_29873__$1 = state_29873;
if(inst_29749){
var statearr_29949_30015 = state_29873__$1;
(statearr_29949_30015[(1)] = (13));

} else {
var statearr_29950_30016 = state_29873__$1;
(statearr_29950_30016[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (18))){
var inst_29781 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
if(cljs.core.truth_(inst_29781)){
var statearr_29951_30017 = state_29873__$1;
(statearr_29951_30017[(1)] = (19));

} else {
var statearr_29952_30018 = state_29873__$1;
(statearr_29952_30018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (42))){
var state_29873__$1 = state_29873;
var statearr_29953_30019 = state_29873__$1;
(statearr_29953_30019[(2)] = null);

(statearr_29953_30019[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (37))){
var inst_29839 = (state_29873[(2)]);
var state_29873__$1 = state_29873;
var statearr_29954_30020 = state_29873__$1;
(statearr_29954_30020[(2)] = inst_29839);

(statearr_29954_30020[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29874 === (8))){
var inst_29734 = (state_29873[(9)]);
var inst_29747 = (state_29873[(22)]);
var inst_29747__$1 = cljs.core.seq.call(null,inst_29734);
var state_29873__$1 = (function (){var statearr_29955 = state_29873;
(statearr_29955[(22)] = inst_29747__$1);

return statearr_29955;
})();
if(inst_29747__$1){
var statearr_29956_30021 = state_29873__$1;
(statearr_29956_30021[(1)] = (10));

} else {
var statearr_29957_30022 = state_29873__$1;
(statearr_29957_30022[(1)] = (11));

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
});})(c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19307__auto__,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____0 = (function (){
var statearr_29961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29961[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__);

(statearr_29961[(1)] = (1));

return statearr_29961;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____1 = (function (state_29873){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_29873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e29962){if((e29962 instanceof Object)){
var ex__19311__auto__ = e29962;
var statearr_29963_30023 = state_29873;
(statearr_29963_30023[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_29873;
state_29873 = G__30024;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__ = function(state_29873){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____1.call(this,state_29873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19330__auto__ = (function (){var statearr_29964 = f__19329__auto__.call(null);
(statearr_29964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_29964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__,map__29719,map__29719__$1,opts,before_jsload,on_jsload,reload_dependents,map__29720,map__29720__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19328__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30027,link){
var map__30030 = p__30027;
var map__30030__$1 = ((((!((map__30030 == null)))?((((map__30030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30030):map__30030);
var file = cljs.core.get.call(null,map__30030__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30030,map__30030__$1,file){
return (function (p1__30025_SHARP_,p2__30026_SHARP_){
if(cljs.core._EQ_.call(null,p1__30025_SHARP_,p2__30026_SHARP_)){
return p1__30025_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30030,map__30030__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30036){
var map__30037 = p__30036;
var map__30037__$1 = ((((!((map__30037 == null)))?((((map__30037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30037):map__30037);
var match_length = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30037__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30032_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30032_SHARP_);
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
var args30039 = [];
var len__17364__auto___30042 = arguments.length;
var i__17365__auto___30043 = (0);
while(true){
if((i__17365__auto___30043 < len__17364__auto___30042)){
args30039.push((arguments[i__17365__auto___30043]));

var G__30044 = (i__17365__auto___30043 + (1));
i__17365__auto___30043 = G__30044;
continue;
} else {
}
break;
}

var G__30041 = args30039.length;
switch (G__30041) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30039.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30046_SHARP_,p2__30047_SHARP_){
return cljs.core.assoc.call(null,p1__30046_SHARP_,cljs.core.get.call(null,p2__30047_SHARP_,key),p2__30047_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30048){
var map__30051 = p__30048;
var map__30051__$1 = ((((!((map__30051 == null)))?((((map__30051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30051):map__30051);
var f_data = map__30051__$1;
var file = cljs.core.get.call(null,map__30051__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30053,files_msg){
var map__30060 = p__30053;
var map__30060__$1 = ((((!((map__30060 == null)))?((((map__30060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30060):map__30060);
var opts = map__30060__$1;
var on_cssload = cljs.core.get.call(null,map__30060__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30062_30066 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30063_30067 = null;
var count__30064_30068 = (0);
var i__30065_30069 = (0);
while(true){
if((i__30065_30069 < count__30064_30068)){
var f_30070 = cljs.core._nth.call(null,chunk__30063_30067,i__30065_30069);
figwheel.client.file_reloading.reload_css_file.call(null,f_30070);

var G__30071 = seq__30062_30066;
var G__30072 = chunk__30063_30067;
var G__30073 = count__30064_30068;
var G__30074 = (i__30065_30069 + (1));
seq__30062_30066 = G__30071;
chunk__30063_30067 = G__30072;
count__30064_30068 = G__30073;
i__30065_30069 = G__30074;
continue;
} else {
var temp__4425__auto___30075 = cljs.core.seq.call(null,seq__30062_30066);
if(temp__4425__auto___30075){
var seq__30062_30076__$1 = temp__4425__auto___30075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30062_30076__$1)){
var c__17109__auto___30077 = cljs.core.chunk_first.call(null,seq__30062_30076__$1);
var G__30078 = cljs.core.chunk_rest.call(null,seq__30062_30076__$1);
var G__30079 = c__17109__auto___30077;
var G__30080 = cljs.core.count.call(null,c__17109__auto___30077);
var G__30081 = (0);
seq__30062_30066 = G__30078;
chunk__30063_30067 = G__30079;
count__30064_30068 = G__30080;
i__30065_30069 = G__30081;
continue;
} else {
var f_30082 = cljs.core.first.call(null,seq__30062_30076__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30082);

var G__30083 = cljs.core.next.call(null,seq__30062_30076__$1);
var G__30084 = null;
var G__30085 = (0);
var G__30086 = (0);
seq__30062_30066 = G__30083;
chunk__30063_30067 = G__30084;
count__30064_30068 = G__30085;
i__30065_30069 = G__30086;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30060,map__30060__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30060,map__30060__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444419857656