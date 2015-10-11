// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21959__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__21959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21960__i = 0, G__21960__a = new Array(arguments.length -  0);
while (G__21960__i < G__21960__a.length) {G__21960__a[G__21960__i] = arguments[G__21960__i + 0]; ++G__21960__i;}
  args = new cljs.core.IndexedSeq(G__21960__a,0);
} 
return G__21959__delegate.call(this,args);};
G__21959.cljs$lang$maxFixedArity = 0;
G__21959.cljs$lang$applyTo = (function (arglist__21961){
var args = cljs.core.seq(arglist__21961);
return G__21959__delegate(args);
});
G__21959.cljs$core$IFn$_invoke$arity$variadic = G__21959__delegate;
return G__21959;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__21962){
var map__21965 = p__21962;
var map__21965__$1 = ((((!((map__21965 == null)))?((((map__21965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21965):map__21965);
var message = cljs.core.get.call(null,map__21965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__21965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16306__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16294__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16294__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16294__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19340__auto___22113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___22113,ch){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___22113,ch){
return (function (state_22083){
var state_val_22084 = (state_22083[(1)]);
if((state_val_22084 === (7))){
var inst_22079 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22085_22114 = state_22083__$1;
(statearr_22085_22114[(2)] = inst_22079);

(statearr_22085_22114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (1))){
var state_22083__$1 = state_22083;
var statearr_22086_22115 = state_22083__$1;
(statearr_22086_22115[(2)] = null);

(statearr_22086_22115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (4))){
var inst_22042 = (state_22083[(7)]);
var inst_22042__$1 = (state_22083[(2)]);
var state_22083__$1 = (function (){var statearr_22087 = state_22083;
(statearr_22087[(7)] = inst_22042__$1);

return statearr_22087;
})();
if(cljs.core.truth_(inst_22042__$1)){
var statearr_22088_22116 = state_22083__$1;
(statearr_22088_22116[(1)] = (5));

} else {
var statearr_22089_22117 = state_22083__$1;
(statearr_22089_22117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (15))){
var inst_22049 = (state_22083[(8)]);
var inst_22064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22049);
var inst_22065 = cljs.core.first.call(null,inst_22064);
var inst_22066 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22065);
var inst_22067 = console.warn("Figwheel: Not loading code with warnings - ",inst_22066);
var state_22083__$1 = state_22083;
var statearr_22090_22118 = state_22083__$1;
(statearr_22090_22118[(2)] = inst_22067);

(statearr_22090_22118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (13))){
var inst_22072 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22091_22119 = state_22083__$1;
(statearr_22091_22119[(2)] = inst_22072);

(statearr_22091_22119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (6))){
var state_22083__$1 = state_22083;
var statearr_22092_22120 = state_22083__$1;
(statearr_22092_22120[(2)] = null);

(statearr_22092_22120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (17))){
var inst_22070 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22093_22121 = state_22083__$1;
(statearr_22093_22121[(2)] = inst_22070);

(statearr_22093_22121[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (3))){
var inst_22081 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22083__$1,inst_22081);
} else {
if((state_val_22084 === (12))){
var inst_22048 = (state_22083[(9)]);
var inst_22062 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22048,opts);
var state_22083__$1 = state_22083;
if(cljs.core.truth_(inst_22062)){
var statearr_22094_22122 = state_22083__$1;
(statearr_22094_22122[(1)] = (15));

} else {
var statearr_22095_22123 = state_22083__$1;
(statearr_22095_22123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (2))){
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22083__$1,(4),ch);
} else {
if((state_val_22084 === (11))){
var inst_22049 = (state_22083[(8)]);
var inst_22054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22055 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22049);
var inst_22056 = cljs.core.async.timeout.call(null,(1000));
var inst_22057 = [inst_22055,inst_22056];
var inst_22058 = (new cljs.core.PersistentVector(null,2,(5),inst_22054,inst_22057,null));
var state_22083__$1 = state_22083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22083__$1,(14),inst_22058);
} else {
if((state_val_22084 === (9))){
var state_22083__$1 = state_22083;
var statearr_22096_22124 = state_22083__$1;
(statearr_22096_22124[(2)] = null);

(statearr_22096_22124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (5))){
var inst_22042 = (state_22083[(7)]);
var inst_22044 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22045 = (new cljs.core.PersistentArrayMap(null,2,inst_22044,null));
var inst_22046 = (new cljs.core.PersistentHashSet(null,inst_22045,null));
var inst_22047 = figwheel.client.focus_msgs.call(null,inst_22046,inst_22042);
var inst_22048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22047);
var inst_22049 = cljs.core.first.call(null,inst_22047);
var inst_22050 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_22083__$1 = (function (){var statearr_22097 = state_22083;
(statearr_22097[(8)] = inst_22049);

(statearr_22097[(9)] = inst_22048);

return statearr_22097;
})();
if(cljs.core.truth_(inst_22050)){
var statearr_22098_22125 = state_22083__$1;
(statearr_22098_22125[(1)] = (8));

} else {
var statearr_22099_22126 = state_22083__$1;
(statearr_22099_22126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (14))){
var inst_22060 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22100_22127 = state_22083__$1;
(statearr_22100_22127[(2)] = inst_22060);

(statearr_22100_22127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (16))){
var state_22083__$1 = state_22083;
var statearr_22101_22128 = state_22083__$1;
(statearr_22101_22128[(2)] = null);

(statearr_22101_22128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (10))){
var inst_22075 = (state_22083[(2)]);
var state_22083__$1 = (function (){var statearr_22102 = state_22083;
(statearr_22102[(10)] = inst_22075);

return statearr_22102;
})();
var statearr_22103_22129 = state_22083__$1;
(statearr_22103_22129[(2)] = null);

(statearr_22103_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (8))){
var inst_22048 = (state_22083[(9)]);
var inst_22052 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22048,opts);
var state_22083__$1 = state_22083;
if(cljs.core.truth_(inst_22052)){
var statearr_22104_22130 = state_22083__$1;
(statearr_22104_22130[(1)] = (11));

} else {
var statearr_22105_22131 = state_22083__$1;
(statearr_22105_22131[(1)] = (12));

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
});})(c__19340__auto___22113,ch))
;
return ((function (switch__19319__auto__,c__19340__auto___22113,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____0 = (function (){
var statearr_22109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22109[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__);

(statearr_22109[(1)] = (1));

return statearr_22109;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____1 = (function (state_22083){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_22083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e22110){if((e22110 instanceof Object)){
var ex__19323__auto__ = e22110;
var statearr_22111_22132 = state_22083;
(statearr_22111_22132[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22133 = state_22083;
state_22083 = G__22133;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__ = function(state_22083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____1.call(this,state_22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19320__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___22113,ch))
})();
var state__19342__auto__ = (function (){var statearr_22112 = f__19341__auto__.call(null);
(statearr_22112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___22113);

return statearr_22112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___22113,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22134_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22134_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_22141 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22141){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22139 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22140 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22139,_STAR_print_newline_STAR_22140,base_path_22141){
return (function() { 
var G__22142__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22143__i = 0, G__22143__a = new Array(arguments.length -  0);
while (G__22143__i < G__22143__a.length) {G__22143__a[G__22143__i] = arguments[G__22143__i + 0]; ++G__22143__i;}
  args = new cljs.core.IndexedSeq(G__22143__a,0);
} 
return G__22142__delegate.call(this,args);};
G__22142.cljs$lang$maxFixedArity = 0;
G__22142.cljs$lang$applyTo = (function (arglist__22144){
var args = cljs.core.seq(arglist__22144);
return G__22142__delegate(args);
});
G__22142.cljs$core$IFn$_invoke$arity$variadic = G__22142__delegate;
return G__22142;
})()
;})(_STAR_print_fn_STAR_22139,_STAR_print_newline_STAR_22140,base_path_22141))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22140;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22139;
}}catch (e22138){if((e22138 instanceof Error)){
var e = e22138;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22141], null));
} else {
var e = e22138;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22141))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22145){
var map__22152 = p__22145;
var map__22152__$1 = ((((!((map__22152 == null)))?((((map__22152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22152):map__22152);
var opts = map__22152__$1;
var build_id = cljs.core.get.call(null,map__22152__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22152,map__22152__$1,opts,build_id){
return (function (p__22154){
var vec__22155 = p__22154;
var map__22156 = cljs.core.nth.call(null,vec__22155,(0),null);
var map__22156__$1 = ((((!((map__22156 == null)))?((((map__22156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22156):map__22156);
var msg = map__22156__$1;
var msg_name = cljs.core.get.call(null,map__22156__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22155,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22155,map__22156,map__22156__$1,msg,msg_name,_,map__22152,map__22152__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22155,map__22156,map__22156__$1,msg,msg_name,_,map__22152,map__22152__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22152,map__22152__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__22162){
var vec__22163 = p__22162;
var map__22164 = cljs.core.nth.call(null,vec__22163,(0),null);
var map__22164__$1 = ((((!((map__22164 == null)))?((((map__22164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22164):map__22164);
var msg = map__22164__$1;
var msg_name = cljs.core.get.call(null,map__22164__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22163,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__22166){
var map__22176 = p__22166;
var map__22176__$1 = ((((!((map__22176 == null)))?((((map__22176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22176):map__22176);
var on_compile_warning = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__22176__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__22176,map__22176__$1,on_compile_warning,on_compile_fail){
return (function (p__22178){
var vec__22179 = p__22178;
var map__22180 = cljs.core.nth.call(null,vec__22179,(0),null);
var map__22180__$1 = ((((!((map__22180 == null)))?((((map__22180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22180):map__22180);
var msg = map__22180__$1;
var msg_name = cljs.core.get.call(null,map__22180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22179,(1));
var pred__22182 = cljs.core._EQ_;
var expr__22183 = msg_name;
if(cljs.core.truth_(pred__22182.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22183))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22182.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22183))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22176,map__22176__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__,msg_hist,msg_names,msg){
return (function (state_22399){
var state_val_22400 = (state_22399[(1)]);
if((state_val_22400 === (7))){
var inst_22323 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22323)){
var statearr_22401_22447 = state_22399__$1;
(statearr_22401_22447[(1)] = (8));

} else {
var statearr_22402_22448 = state_22399__$1;
(statearr_22402_22448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (20))){
var inst_22393 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22403_22449 = state_22399__$1;
(statearr_22403_22449[(2)] = inst_22393);

(statearr_22403_22449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (27))){
var inst_22389 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22404_22450 = state_22399__$1;
(statearr_22404_22450[(2)] = inst_22389);

(statearr_22404_22450[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (1))){
var inst_22316 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22316)){
var statearr_22405_22451 = state_22399__$1;
(statearr_22405_22451[(1)] = (2));

} else {
var statearr_22406_22452 = state_22399__$1;
(statearr_22406_22452[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (24))){
var inst_22391 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22407_22453 = state_22399__$1;
(statearr_22407_22453[(2)] = inst_22391);

(statearr_22407_22453[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (4))){
var inst_22397 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22399__$1,inst_22397);
} else {
if((state_val_22400 === (15))){
var inst_22395 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22408_22454 = state_22399__$1;
(statearr_22408_22454[(2)] = inst_22395);

(statearr_22408_22454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (21))){
var inst_22354 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22409_22455 = state_22399__$1;
(statearr_22409_22455[(2)] = inst_22354);

(statearr_22409_22455[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (31))){
var inst_22378 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22378)){
var statearr_22410_22456 = state_22399__$1;
(statearr_22410_22456[(1)] = (34));

} else {
var statearr_22411_22457 = state_22399__$1;
(statearr_22411_22457[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (32))){
var inst_22387 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22412_22458 = state_22399__$1;
(statearr_22412_22458[(2)] = inst_22387);

(statearr_22412_22458[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (33))){
var inst_22376 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22413_22459 = state_22399__$1;
(statearr_22413_22459[(2)] = inst_22376);

(statearr_22413_22459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (13))){
var inst_22337 = figwheel.client.heads_up.clear.call(null);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(16),inst_22337);
} else {
if((state_val_22400 === (22))){
var inst_22358 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22359 = figwheel.client.heads_up.append_message.call(null,inst_22358);
var state_22399__$1 = state_22399;
var statearr_22414_22460 = state_22399__$1;
(statearr_22414_22460[(2)] = inst_22359);

(statearr_22414_22460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (36))){
var inst_22385 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22415_22461 = state_22399__$1;
(statearr_22415_22461[(2)] = inst_22385);

(statearr_22415_22461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (29))){
var inst_22369 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22416_22462 = state_22399__$1;
(statearr_22416_22462[(2)] = inst_22369);

(statearr_22416_22462[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (6))){
var inst_22318 = (state_22399[(7)]);
var state_22399__$1 = state_22399;
var statearr_22417_22463 = state_22399__$1;
(statearr_22417_22463[(2)] = inst_22318);

(statearr_22417_22463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (28))){
var inst_22365 = (state_22399[(2)]);
var inst_22366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22367 = figwheel.client.heads_up.display_warning.call(null,inst_22366);
var state_22399__$1 = (function (){var statearr_22418 = state_22399;
(statearr_22418[(8)] = inst_22365);

return statearr_22418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(29),inst_22367);
} else {
if((state_val_22400 === (25))){
var inst_22363 = figwheel.client.heads_up.clear.call(null);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(28),inst_22363);
} else {
if((state_val_22400 === (34))){
var inst_22380 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(37),inst_22380);
} else {
if((state_val_22400 === (17))){
var inst_22345 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22419_22464 = state_22399__$1;
(statearr_22419_22464[(2)] = inst_22345);

(statearr_22419_22464[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (3))){
var inst_22335 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22335)){
var statearr_22420_22465 = state_22399__$1;
(statearr_22420_22465[(1)] = (13));

} else {
var statearr_22421_22466 = state_22399__$1;
(statearr_22421_22466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (12))){
var inst_22331 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22422_22467 = state_22399__$1;
(statearr_22422_22467[(2)] = inst_22331);

(statearr_22422_22467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (2))){
var inst_22318 = (state_22399[(7)]);
var inst_22318__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_22399__$1 = (function (){var statearr_22423 = state_22399;
(statearr_22423[(7)] = inst_22318__$1);

return statearr_22423;
})();
if(cljs.core.truth_(inst_22318__$1)){
var statearr_22424_22468 = state_22399__$1;
(statearr_22424_22468[(1)] = (5));

} else {
var statearr_22425_22469 = state_22399__$1;
(statearr_22425_22469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (23))){
var inst_22361 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22361)){
var statearr_22426_22470 = state_22399__$1;
(statearr_22426_22470[(1)] = (25));

} else {
var statearr_22427_22471 = state_22399__$1;
(statearr_22427_22471[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (35))){
var state_22399__$1 = state_22399;
var statearr_22428_22472 = state_22399__$1;
(statearr_22428_22472[(2)] = null);

(statearr_22428_22472[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (19))){
var inst_22356 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22356)){
var statearr_22429_22473 = state_22399__$1;
(statearr_22429_22473[(1)] = (22));

} else {
var statearr_22430_22474 = state_22399__$1;
(statearr_22430_22474[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (11))){
var inst_22327 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22431_22475 = state_22399__$1;
(statearr_22431_22475[(2)] = inst_22327);

(statearr_22431_22475[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (9))){
var inst_22329 = figwheel.client.heads_up.clear.call(null);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(12),inst_22329);
} else {
if((state_val_22400 === (5))){
var inst_22320 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_22399__$1 = state_22399;
var statearr_22432_22476 = state_22399__$1;
(statearr_22432_22476[(2)] = inst_22320);

(statearr_22432_22476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (14))){
var inst_22347 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22347)){
var statearr_22433_22477 = state_22399__$1;
(statearr_22433_22477[(1)] = (18));

} else {
var statearr_22434_22478 = state_22399__$1;
(statearr_22434_22478[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (26))){
var inst_22371 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22399__$1 = state_22399;
if(cljs.core.truth_(inst_22371)){
var statearr_22435_22479 = state_22399__$1;
(statearr_22435_22479[(1)] = (30));

} else {
var statearr_22436_22480 = state_22399__$1;
(statearr_22436_22480[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (16))){
var inst_22339 = (state_22399[(2)]);
var inst_22340 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22341 = figwheel.client.format_messages.call(null,inst_22340);
var inst_22342 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22343 = figwheel.client.heads_up.display_error.call(null,inst_22341,inst_22342);
var state_22399__$1 = (function (){var statearr_22437 = state_22399;
(statearr_22437[(9)] = inst_22339);

return statearr_22437;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(17),inst_22343);
} else {
if((state_val_22400 === (30))){
var inst_22373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22374 = figwheel.client.heads_up.display_warning.call(null,inst_22373);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(33),inst_22374);
} else {
if((state_val_22400 === (10))){
var inst_22333 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22438_22481 = state_22399__$1;
(statearr_22438_22481[(2)] = inst_22333);

(statearr_22438_22481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (18))){
var inst_22349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22350 = figwheel.client.format_messages.call(null,inst_22349);
var inst_22351 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22352 = figwheel.client.heads_up.display_error.call(null,inst_22350,inst_22351);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(21),inst_22352);
} else {
if((state_val_22400 === (37))){
var inst_22382 = (state_22399[(2)]);
var state_22399__$1 = state_22399;
var statearr_22439_22482 = state_22399__$1;
(statearr_22439_22482[(2)] = inst_22382);

(statearr_22439_22482[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22400 === (8))){
var inst_22325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22399__$1 = state_22399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22399__$1,(11),inst_22325);
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
});})(c__19340__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19319__auto__,c__19340__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____0 = (function (){
var statearr_22443 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22443[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__);

(statearr_22443[(1)] = (1));

return statearr_22443;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____1 = (function (state_22399){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_22399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e22444){if((e22444 instanceof Object)){
var ex__19323__auto__ = e22444;
var statearr_22445_22483 = state_22399;
(statearr_22445_22483[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22484 = state_22399;
state_22399 = G__22484;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__ = function(state_22399){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____1.call(this,state_22399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__,msg_hist,msg_names,msg))
})();
var state__19342__auto__ = (function (){var statearr_22446 = f__19341__auto__.call(null);
(statearr_22446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_22446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__,msg_hist,msg_names,msg))
);

return c__19340__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19340__auto___22547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto___22547,ch){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto___22547,ch){
return (function (state_22530){
var state_val_22531 = (state_22530[(1)]);
if((state_val_22531 === (1))){
var state_22530__$1 = state_22530;
var statearr_22532_22548 = state_22530__$1;
(statearr_22532_22548[(2)] = null);

(statearr_22532_22548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (2))){
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22530__$1,(4),ch);
} else {
if((state_val_22531 === (3))){
var inst_22528 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22530__$1,inst_22528);
} else {
if((state_val_22531 === (4))){
var inst_22518 = (state_22530[(7)]);
var inst_22518__$1 = (state_22530[(2)]);
var state_22530__$1 = (function (){var statearr_22533 = state_22530;
(statearr_22533[(7)] = inst_22518__$1);

return statearr_22533;
})();
if(cljs.core.truth_(inst_22518__$1)){
var statearr_22534_22549 = state_22530__$1;
(statearr_22534_22549[(1)] = (5));

} else {
var statearr_22535_22550 = state_22530__$1;
(statearr_22535_22550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (5))){
var inst_22518 = (state_22530[(7)]);
var inst_22520 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_22518);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22530__$1,(8),inst_22520);
} else {
if((state_val_22531 === (6))){
var state_22530__$1 = state_22530;
var statearr_22536_22551 = state_22530__$1;
(statearr_22536_22551[(2)] = null);

(statearr_22536_22551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (7))){
var inst_22526 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22537_22552 = state_22530__$1;
(statearr_22537_22552[(2)] = inst_22526);

(statearr_22537_22552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (8))){
var inst_22522 = (state_22530[(2)]);
var state_22530__$1 = (function (){var statearr_22538 = state_22530;
(statearr_22538[(8)] = inst_22522);

return statearr_22538;
})();
var statearr_22539_22553 = state_22530__$1;
(statearr_22539_22553[(2)] = null);

(statearr_22539_22553[(1)] = (2));


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
});})(c__19340__auto___22547,ch))
;
return ((function (switch__19319__auto__,c__19340__auto___22547,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19320__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19320__auto____0 = (function (){
var statearr_22543 = [null,null,null,null,null,null,null,null,null];
(statearr_22543[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19320__auto__);

(statearr_22543[(1)] = (1));

return statearr_22543;
});
var figwheel$client$heads_up_plugin_$_state_machine__19320__auto____1 = (function (state_22530){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_22530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e22544){if((e22544 instanceof Object)){
var ex__19323__auto__ = e22544;
var statearr_22545_22554 = state_22530;
(statearr_22545_22554[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22555 = state_22530;
state_22530 = G__22555;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19320__auto__ = function(state_22530){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19320__auto____1.call(this,state_22530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19320__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19320__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto___22547,ch))
})();
var state__19342__auto__ = (function (){var statearr_22546 = f__19341__auto__.call(null);
(statearr_22546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto___22547);

return statearr_22546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto___22547,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19340__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19340__auto__){
return (function (){
var f__19341__auto__ = (function (){var switch__19319__auto__ = ((function (c__19340__auto__){
return (function (state_22576){
var state_val_22577 = (state_22576[(1)]);
if((state_val_22577 === (1))){
var inst_22571 = cljs.core.async.timeout.call(null,(3000));
var state_22576__$1 = state_22576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22576__$1,(2),inst_22571);
} else {
if((state_val_22577 === (2))){
var inst_22573 = (state_22576[(2)]);
var inst_22574 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_22576__$1 = (function (){var statearr_22578 = state_22576;
(statearr_22578[(7)] = inst_22573);

return statearr_22578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22576__$1,inst_22574);
} else {
return null;
}
}
});})(c__19340__auto__))
;
return ((function (switch__19319__auto__,c__19340__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____0 = (function (){
var statearr_22582 = [null,null,null,null,null,null,null,null];
(statearr_22582[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__);

(statearr_22582[(1)] = (1));

return statearr_22582;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____1 = (function (state_22576){
while(true){
var ret_value__19321__auto__ = (function (){try{while(true){
var result__19322__auto__ = switch__19319__auto__.call(null,state_22576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19322__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19322__auto__;
}
break;
}
}catch (e22583){if((e22583 instanceof Object)){
var ex__19323__auto__ = e22583;
var statearr_22584_22586 = state_22576;
(statearr_22584_22586[(5)] = ex__19323__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22587 = state_22576;
state_22576 = G__22587;
continue;
} else {
return ret_value__19321__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__ = function(state_22576){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____1.call(this,state_22576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19320__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19320__auto__;
})()
;})(switch__19319__auto__,c__19340__auto__))
})();
var state__19342__auto__ = (function (){var statearr_22585 = f__19341__auto__.call(null);
(statearr_22585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19340__auto__);

return statearr_22585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19342__auto__);
});})(c__19340__auto__))
);

return c__19340__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__22588){
var map__22595 = p__22588;
var map__22595__$1 = ((((!((map__22595 == null)))?((((map__22595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22595):map__22595);
var ed = map__22595__$1;
var formatted_exception = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__22595__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__22597_22601 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__22598_22602 = null;
var count__22599_22603 = (0);
var i__22600_22604 = (0);
while(true){
if((i__22600_22604 < count__22599_22603)){
var msg_22605 = cljs.core._nth.call(null,chunk__22598_22602,i__22600_22604);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22605);

var G__22606 = seq__22597_22601;
var G__22607 = chunk__22598_22602;
var G__22608 = count__22599_22603;
var G__22609 = (i__22600_22604 + (1));
seq__22597_22601 = G__22606;
chunk__22598_22602 = G__22607;
count__22599_22603 = G__22608;
i__22600_22604 = G__22609;
continue;
} else {
var temp__4425__auto___22610 = cljs.core.seq.call(null,seq__22597_22601);
if(temp__4425__auto___22610){
var seq__22597_22611__$1 = temp__4425__auto___22610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22597_22611__$1)){
var c__17109__auto___22612 = cljs.core.chunk_first.call(null,seq__22597_22611__$1);
var G__22613 = cljs.core.chunk_rest.call(null,seq__22597_22611__$1);
var G__22614 = c__17109__auto___22612;
var G__22615 = cljs.core.count.call(null,c__17109__auto___22612);
var G__22616 = (0);
seq__22597_22601 = G__22613;
chunk__22598_22602 = G__22614;
count__22599_22603 = G__22615;
i__22600_22604 = G__22616;
continue;
} else {
var msg_22617 = cljs.core.first.call(null,seq__22597_22611__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_22617);

var G__22618 = cljs.core.next.call(null,seq__22597_22611__$1);
var G__22619 = null;
var G__22620 = (0);
var G__22621 = (0);
seq__22597_22601 = G__22618;
chunk__22598_22602 = G__22619;
count__22599_22603 = G__22620;
i__22600_22604 = G__22621;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__22622){
var map__22625 = p__22622;
var map__22625__$1 = ((((!((map__22625 == null)))?((((map__22625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22625):map__22625);
var w = map__22625__$1;
var message = cljs.core.get.call(null,map__22625__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16294__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16294__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16294__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__22633 = cljs.core.seq.call(null,plugins);
var chunk__22634 = null;
var count__22635 = (0);
var i__22636 = (0);
while(true){
if((i__22636 < count__22635)){
var vec__22637 = cljs.core._nth.call(null,chunk__22634,i__22636);
var k = cljs.core.nth.call(null,vec__22637,(0),null);
var plugin = cljs.core.nth.call(null,vec__22637,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22639 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22633,chunk__22634,count__22635,i__22636,pl_22639,vec__22637,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_22639.call(null,msg_hist);
});})(seq__22633,chunk__22634,count__22635,i__22636,pl_22639,vec__22637,k,plugin))
);
} else {
}

var G__22640 = seq__22633;
var G__22641 = chunk__22634;
var G__22642 = count__22635;
var G__22643 = (i__22636 + (1));
seq__22633 = G__22640;
chunk__22634 = G__22641;
count__22635 = G__22642;
i__22636 = G__22643;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22633);
if(temp__4425__auto__){
var seq__22633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22633__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__22633__$1);
var G__22644 = cljs.core.chunk_rest.call(null,seq__22633__$1);
var G__22645 = c__17109__auto__;
var G__22646 = cljs.core.count.call(null,c__17109__auto__);
var G__22647 = (0);
seq__22633 = G__22644;
chunk__22634 = G__22645;
count__22635 = G__22646;
i__22636 = G__22647;
continue;
} else {
var vec__22638 = cljs.core.first.call(null,seq__22633__$1);
var k = cljs.core.nth.call(null,vec__22638,(0),null);
var plugin = cljs.core.nth.call(null,vec__22638,(1),null);
if(cljs.core.truth_(plugin)){
var pl_22648 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__22633,chunk__22634,count__22635,i__22636,pl_22648,vec__22638,k,plugin,seq__22633__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_22648.call(null,msg_hist);
});})(seq__22633,chunk__22634,count__22635,i__22636,pl_22648,vec__22638,k,plugin,seq__22633__$1,temp__4425__auto__))
);
} else {
}

var G__22649 = cljs.core.next.call(null,seq__22633__$1);
var G__22650 = null;
var G__22651 = (0);
var G__22652 = (0);
seq__22633 = G__22649;
chunk__22634 = G__22650;
count__22635 = G__22651;
i__22636 = G__22652;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args22653 = [];
var len__17364__auto___22656 = arguments.length;
var i__17365__auto___22657 = (0);
while(true){
if((i__17365__auto___22657 < len__17364__auto___22656)){
args22653.push((arguments[i__17365__auto___22657]));

var G__22658 = (i__17365__auto___22657 + (1));
i__17365__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var G__22655 = args22653.length;
switch (G__22655) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22653.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17371__auto__ = [];
var len__17364__auto___22664 = arguments.length;
var i__17365__auto___22665 = (0);
while(true){
if((i__17365__auto___22665 < len__17364__auto___22664)){
args__17371__auto__.push((arguments[i__17365__auto___22665]));

var G__22666 = (i__17365__auto___22665 + (1));
i__17365__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((0) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__22661){
var map__22662 = p__22661;
var map__22662__$1 = ((((!((map__22662 == null)))?((((map__22662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22662):map__22662);
var opts = map__22662__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq22660){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22660));
});

//# sourceMappingURL=client.js.map?rel=1444562457240