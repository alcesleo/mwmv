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
var G__22802__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22803__i = 0, G__22803__a = new Array(arguments.length -  0);
while (G__22803__i < G__22803__a.length) {G__22803__a[G__22803__i] = arguments[G__22803__i + 0]; ++G__22803__i;}
  args = new cljs.core.IndexedSeq(G__22803__a,0);
} 
return G__22802__delegate.call(this,args);};
G__22802.cljs$lang$maxFixedArity = 0;
G__22802.cljs$lang$applyTo = (function (arglist__22804){
var args = cljs.core.seq(arglist__22804);
return G__22802__delegate(args);
});
G__22802.cljs$core$IFn$_invoke$arity$variadic = G__22802__delegate;
return G__22802;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__22805){
var map__22808 = p__22805;
var map__22808__$1 = ((((!((map__22808 == null)))?((((map__22808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22808):map__22808);
var message = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__22808__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19328__auto___22956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___22956,ch){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___22956,ch){
return (function (state_22926){
var state_val_22927 = (state_22926[(1)]);
if((state_val_22927 === (7))){
var inst_22922 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22928_22957 = state_22926__$1;
(statearr_22928_22957[(2)] = inst_22922);

(statearr_22928_22957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (1))){
var state_22926__$1 = state_22926;
var statearr_22929_22958 = state_22926__$1;
(statearr_22929_22958[(2)] = null);

(statearr_22929_22958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (4))){
var inst_22885 = (state_22926[(7)]);
var inst_22885__$1 = (state_22926[(2)]);
var state_22926__$1 = (function (){var statearr_22930 = state_22926;
(statearr_22930[(7)] = inst_22885__$1);

return statearr_22930;
})();
if(cljs.core.truth_(inst_22885__$1)){
var statearr_22931_22959 = state_22926__$1;
(statearr_22931_22959[(1)] = (5));

} else {
var statearr_22932_22960 = state_22926__$1;
(statearr_22932_22960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (15))){
var inst_22892 = (state_22926[(8)]);
var inst_22907 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22892);
var inst_22908 = cljs.core.first.call(null,inst_22907);
var inst_22909 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22908);
var inst_22910 = console.warn("Figwheel: Not loading code with warnings - ",inst_22909);
var state_22926__$1 = state_22926;
var statearr_22933_22961 = state_22926__$1;
(statearr_22933_22961[(2)] = inst_22910);

(statearr_22933_22961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (13))){
var inst_22915 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22934_22962 = state_22926__$1;
(statearr_22934_22962[(2)] = inst_22915);

(statearr_22934_22962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (6))){
var state_22926__$1 = state_22926;
var statearr_22935_22963 = state_22926__$1;
(statearr_22935_22963[(2)] = null);

(statearr_22935_22963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (17))){
var inst_22913 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22936_22964 = state_22926__$1;
(statearr_22936_22964[(2)] = inst_22913);

(statearr_22936_22964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (3))){
var inst_22924 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22926__$1,inst_22924);
} else {
if((state_val_22927 === (12))){
var inst_22891 = (state_22926[(9)]);
var inst_22905 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22891,opts);
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22905)){
var statearr_22937_22965 = state_22926__$1;
(statearr_22937_22965[(1)] = (15));

} else {
var statearr_22938_22966 = state_22926__$1;
(statearr_22938_22966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (2))){
var state_22926__$1 = state_22926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22926__$1,(4),ch);
} else {
if((state_val_22927 === (11))){
var inst_22892 = (state_22926[(8)]);
var inst_22897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22898 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22892);
var inst_22899 = cljs.core.async.timeout.call(null,(1000));
var inst_22900 = [inst_22898,inst_22899];
var inst_22901 = (new cljs.core.PersistentVector(null,2,(5),inst_22897,inst_22900,null));
var state_22926__$1 = state_22926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22926__$1,(14),inst_22901);
} else {
if((state_val_22927 === (9))){
var state_22926__$1 = state_22926;
var statearr_22939_22967 = state_22926__$1;
(statearr_22939_22967[(2)] = null);

(statearr_22939_22967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (5))){
var inst_22885 = (state_22926[(7)]);
var inst_22887 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22888 = (new cljs.core.PersistentArrayMap(null,2,inst_22887,null));
var inst_22889 = (new cljs.core.PersistentHashSet(null,inst_22888,null));
var inst_22890 = figwheel.client.focus_msgs.call(null,inst_22889,inst_22885);
var inst_22891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22890);
var inst_22892 = cljs.core.first.call(null,inst_22890);
var inst_22893 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_22926__$1 = (function (){var statearr_22940 = state_22926;
(statearr_22940[(8)] = inst_22892);

(statearr_22940[(9)] = inst_22891);

return statearr_22940;
})();
if(cljs.core.truth_(inst_22893)){
var statearr_22941_22968 = state_22926__$1;
(statearr_22941_22968[(1)] = (8));

} else {
var statearr_22942_22969 = state_22926__$1;
(statearr_22942_22969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (14))){
var inst_22903 = (state_22926[(2)]);
var state_22926__$1 = state_22926;
var statearr_22943_22970 = state_22926__$1;
(statearr_22943_22970[(2)] = inst_22903);

(statearr_22943_22970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (16))){
var state_22926__$1 = state_22926;
var statearr_22944_22971 = state_22926__$1;
(statearr_22944_22971[(2)] = null);

(statearr_22944_22971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (10))){
var inst_22918 = (state_22926[(2)]);
var state_22926__$1 = (function (){var statearr_22945 = state_22926;
(statearr_22945[(10)] = inst_22918);

return statearr_22945;
})();
var statearr_22946_22972 = state_22926__$1;
(statearr_22946_22972[(2)] = null);

(statearr_22946_22972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22927 === (8))){
var inst_22891 = (state_22926[(9)]);
var inst_22895 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22891,opts);
var state_22926__$1 = state_22926;
if(cljs.core.truth_(inst_22895)){
var statearr_22947_22973 = state_22926__$1;
(statearr_22947_22973[(1)] = (11));

} else {
var statearr_22948_22974 = state_22926__$1;
(statearr_22948_22974[(1)] = (12));

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
});})(c__19328__auto___22956,ch))
;
return ((function (switch__19307__auto__,c__19328__auto___22956,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0 = (function (){
var statearr_22952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22952[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__);

(statearr_22952[(1)] = (1));

return statearr_22952;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1 = (function (state_22926){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_22926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e22953){if((e22953 instanceof Object)){
var ex__19311__auto__ = e22953;
var statearr_22954_22975 = state_22926;
(statearr_22954_22975[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22976 = state_22926;
state_22926 = G__22976;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__ = function(state_22926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1.call(this,state_22926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___22956,ch))
})();
var state__19330__auto__ = (function (){var statearr_22955 = f__19329__auto__.call(null);
(statearr_22955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___22956);

return statearr_22955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___22956,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__22977_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22977_SHARP_));
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
var base_path_22984 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_22984){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_22982 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22983 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22982,_STAR_print_newline_STAR_22983,base_path_22984){
return (function() { 
var G__22985__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22986__i = 0, G__22986__a = new Array(arguments.length -  0);
while (G__22986__i < G__22986__a.length) {G__22986__a[G__22986__i] = arguments[G__22986__i + 0]; ++G__22986__i;}
  args = new cljs.core.IndexedSeq(G__22986__a,0);
} 
return G__22985__delegate.call(this,args);};
G__22985.cljs$lang$maxFixedArity = 0;
G__22985.cljs$lang$applyTo = (function (arglist__22987){
var args = cljs.core.seq(arglist__22987);
return G__22985__delegate(args);
});
G__22985.cljs$core$IFn$_invoke$arity$variadic = G__22985__delegate;
return G__22985;
})()
;})(_STAR_print_fn_STAR_22982,_STAR_print_newline_STAR_22983,base_path_22984))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22983;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22982;
}}catch (e22981){if((e22981 instanceof Error)){
var e = e22981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_22984], null));
} else {
var e = e22981;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_22984))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__22988){
var map__22995 = p__22988;
var map__22995__$1 = ((((!((map__22995 == null)))?((((map__22995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22995):map__22995);
var opts = map__22995__$1;
var build_id = cljs.core.get.call(null,map__22995__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22995,map__22995__$1,opts,build_id){
return (function (p__22997){
var vec__22998 = p__22997;
var map__22999 = cljs.core.nth.call(null,vec__22998,(0),null);
var map__22999__$1 = ((((!((map__22999 == null)))?((((map__22999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22999):map__22999);
var msg = map__22999__$1;
var msg_name = cljs.core.get.call(null,map__22999__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22998,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__22998,map__22999,map__22999__$1,msg,msg_name,_,map__22995,map__22995__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22998,map__22999,map__22999__$1,msg,msg_name,_,map__22995,map__22995__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22995,map__22995__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23005){
var vec__23006 = p__23005;
var map__23007 = cljs.core.nth.call(null,vec__23006,(0),null);
var map__23007__$1 = ((((!((map__23007 == null)))?((((map__23007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23007):map__23007);
var msg = map__23007__$1;
var msg_name = cljs.core.get.call(null,map__23007__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23006,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23009){
var map__23019 = p__23009;
var map__23019__$1 = ((((!((map__23019 == null)))?((((map__23019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23019):map__23019);
var on_compile_warning = cljs.core.get.call(null,map__23019__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23019__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23019,map__23019__$1,on_compile_warning,on_compile_fail){
return (function (p__23021){
var vec__23022 = p__23021;
var map__23023 = cljs.core.nth.call(null,vec__23022,(0),null);
var map__23023__$1 = ((((!((map__23023 == null)))?((((map__23023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23023):map__23023);
var msg = map__23023__$1;
var msg_name = cljs.core.get.call(null,map__23023__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23022,(1));
var pred__23025 = cljs.core._EQ_;
var expr__23026 = msg_name;
if(cljs.core.truth_(pred__23025.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23026))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23025.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23026))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23019,map__23019__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__,msg_hist,msg_names,msg){
return (function (state_23242){
var state_val_23243 = (state_23242[(1)]);
if((state_val_23243 === (7))){
var inst_23166 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23166)){
var statearr_23244_23290 = state_23242__$1;
(statearr_23244_23290[(1)] = (8));

} else {
var statearr_23245_23291 = state_23242__$1;
(statearr_23245_23291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (20))){
var inst_23236 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23246_23292 = state_23242__$1;
(statearr_23246_23292[(2)] = inst_23236);

(statearr_23246_23292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (27))){
var inst_23232 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23247_23293 = state_23242__$1;
(statearr_23247_23293[(2)] = inst_23232);

(statearr_23247_23293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (1))){
var inst_23159 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23159)){
var statearr_23248_23294 = state_23242__$1;
(statearr_23248_23294[(1)] = (2));

} else {
var statearr_23249_23295 = state_23242__$1;
(statearr_23249_23295[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (24))){
var inst_23234 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23250_23296 = state_23242__$1;
(statearr_23250_23296[(2)] = inst_23234);

(statearr_23250_23296[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (4))){
var inst_23240 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23242__$1,inst_23240);
} else {
if((state_val_23243 === (15))){
var inst_23238 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23251_23297 = state_23242__$1;
(statearr_23251_23297[(2)] = inst_23238);

(statearr_23251_23297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (21))){
var inst_23197 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23252_23298 = state_23242__$1;
(statearr_23252_23298[(2)] = inst_23197);

(statearr_23252_23298[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (31))){
var inst_23221 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23221)){
var statearr_23253_23299 = state_23242__$1;
(statearr_23253_23299[(1)] = (34));

} else {
var statearr_23254_23300 = state_23242__$1;
(statearr_23254_23300[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (32))){
var inst_23230 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23255_23301 = state_23242__$1;
(statearr_23255_23301[(2)] = inst_23230);

(statearr_23255_23301[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (33))){
var inst_23219 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23256_23302 = state_23242__$1;
(statearr_23256_23302[(2)] = inst_23219);

(statearr_23256_23302[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (13))){
var inst_23180 = figwheel.client.heads_up.clear.call(null);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(16),inst_23180);
} else {
if((state_val_23243 === (22))){
var inst_23201 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23202 = figwheel.client.heads_up.append_message.call(null,inst_23201);
var state_23242__$1 = state_23242;
var statearr_23257_23303 = state_23242__$1;
(statearr_23257_23303[(2)] = inst_23202);

(statearr_23257_23303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (36))){
var inst_23228 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23258_23304 = state_23242__$1;
(statearr_23258_23304[(2)] = inst_23228);

(statearr_23258_23304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (29))){
var inst_23212 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23259_23305 = state_23242__$1;
(statearr_23259_23305[(2)] = inst_23212);

(statearr_23259_23305[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (6))){
var inst_23161 = (state_23242[(7)]);
var state_23242__$1 = state_23242;
var statearr_23260_23306 = state_23242__$1;
(statearr_23260_23306[(2)] = inst_23161);

(statearr_23260_23306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (28))){
var inst_23208 = (state_23242[(2)]);
var inst_23209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23210 = figwheel.client.heads_up.display_warning.call(null,inst_23209);
var state_23242__$1 = (function (){var statearr_23261 = state_23242;
(statearr_23261[(8)] = inst_23208);

return statearr_23261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(29),inst_23210);
} else {
if((state_val_23243 === (25))){
var inst_23206 = figwheel.client.heads_up.clear.call(null);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(28),inst_23206);
} else {
if((state_val_23243 === (34))){
var inst_23223 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(37),inst_23223);
} else {
if((state_val_23243 === (17))){
var inst_23188 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23262_23307 = state_23242__$1;
(statearr_23262_23307[(2)] = inst_23188);

(statearr_23262_23307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (3))){
var inst_23178 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23178)){
var statearr_23263_23308 = state_23242__$1;
(statearr_23263_23308[(1)] = (13));

} else {
var statearr_23264_23309 = state_23242__$1;
(statearr_23264_23309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (12))){
var inst_23174 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23265_23310 = state_23242__$1;
(statearr_23265_23310[(2)] = inst_23174);

(statearr_23265_23310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (2))){
var inst_23161 = (state_23242[(7)]);
var inst_23161__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_23242__$1 = (function (){var statearr_23266 = state_23242;
(statearr_23266[(7)] = inst_23161__$1);

return statearr_23266;
})();
if(cljs.core.truth_(inst_23161__$1)){
var statearr_23267_23311 = state_23242__$1;
(statearr_23267_23311[(1)] = (5));

} else {
var statearr_23268_23312 = state_23242__$1;
(statearr_23268_23312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (23))){
var inst_23204 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23204)){
var statearr_23269_23313 = state_23242__$1;
(statearr_23269_23313[(1)] = (25));

} else {
var statearr_23270_23314 = state_23242__$1;
(statearr_23270_23314[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (35))){
var state_23242__$1 = state_23242;
var statearr_23271_23315 = state_23242__$1;
(statearr_23271_23315[(2)] = null);

(statearr_23271_23315[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (19))){
var inst_23199 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23199)){
var statearr_23272_23316 = state_23242__$1;
(statearr_23272_23316[(1)] = (22));

} else {
var statearr_23273_23317 = state_23242__$1;
(statearr_23273_23317[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (11))){
var inst_23170 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23274_23318 = state_23242__$1;
(statearr_23274_23318[(2)] = inst_23170);

(statearr_23274_23318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (9))){
var inst_23172 = figwheel.client.heads_up.clear.call(null);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(12),inst_23172);
} else {
if((state_val_23243 === (5))){
var inst_23163 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23242__$1 = state_23242;
var statearr_23275_23319 = state_23242__$1;
(statearr_23275_23319[(2)] = inst_23163);

(statearr_23275_23319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (14))){
var inst_23190 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23190)){
var statearr_23276_23320 = state_23242__$1;
(statearr_23276_23320[(1)] = (18));

} else {
var statearr_23277_23321 = state_23242__$1;
(statearr_23277_23321[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (26))){
var inst_23214 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23242__$1 = state_23242;
if(cljs.core.truth_(inst_23214)){
var statearr_23278_23322 = state_23242__$1;
(statearr_23278_23322[(1)] = (30));

} else {
var statearr_23279_23323 = state_23242__$1;
(statearr_23279_23323[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (16))){
var inst_23182 = (state_23242[(2)]);
var inst_23183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23184 = figwheel.client.format_messages.call(null,inst_23183);
var inst_23185 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23186 = figwheel.client.heads_up.display_error.call(null,inst_23184,inst_23185);
var state_23242__$1 = (function (){var statearr_23280 = state_23242;
(statearr_23280[(9)] = inst_23182);

return statearr_23280;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(17),inst_23186);
} else {
if((state_val_23243 === (30))){
var inst_23216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23217 = figwheel.client.heads_up.display_warning.call(null,inst_23216);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(33),inst_23217);
} else {
if((state_val_23243 === (10))){
var inst_23176 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23281_23324 = state_23242__$1;
(statearr_23281_23324[(2)] = inst_23176);

(statearr_23281_23324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (18))){
var inst_23192 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23193 = figwheel.client.format_messages.call(null,inst_23192);
var inst_23194 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23195 = figwheel.client.heads_up.display_error.call(null,inst_23193,inst_23194);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(21),inst_23195);
} else {
if((state_val_23243 === (37))){
var inst_23225 = (state_23242[(2)]);
var state_23242__$1 = state_23242;
var statearr_23282_23325 = state_23242__$1;
(statearr_23282_23325[(2)] = inst_23225);

(statearr_23282_23325[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23243 === (8))){
var inst_23168 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23242__$1 = state_23242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23242__$1,(11),inst_23168);
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
});})(c__19328__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19307__auto__,c__19328__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____0 = (function (){
var statearr_23286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23286[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__);

(statearr_23286[(1)] = (1));

return statearr_23286;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1 = (function (state_23242){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_23242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e23287){if((e23287 instanceof Object)){
var ex__19311__auto__ = e23287;
var statearr_23288_23326 = state_23242;
(statearr_23288_23326[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23327 = state_23242;
state_23242 = G__23327;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__ = function(state_23242){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1.call(this,state_23242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__,msg_hist,msg_names,msg))
})();
var state__19330__auto__ = (function (){var statearr_23289 = f__19329__auto__.call(null);
(statearr_23289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_23289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__,msg_hist,msg_names,msg))
);

return c__19328__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19328__auto___23390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___23390,ch){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___23390,ch){
return (function (state_23373){
var state_val_23374 = (state_23373[(1)]);
if((state_val_23374 === (1))){
var state_23373__$1 = state_23373;
var statearr_23375_23391 = state_23373__$1;
(statearr_23375_23391[(2)] = null);

(statearr_23375_23391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (2))){
var state_23373__$1 = state_23373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23373__$1,(4),ch);
} else {
if((state_val_23374 === (3))){
var inst_23371 = (state_23373[(2)]);
var state_23373__$1 = state_23373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23373__$1,inst_23371);
} else {
if((state_val_23374 === (4))){
var inst_23361 = (state_23373[(7)]);
var inst_23361__$1 = (state_23373[(2)]);
var state_23373__$1 = (function (){var statearr_23376 = state_23373;
(statearr_23376[(7)] = inst_23361__$1);

return statearr_23376;
})();
if(cljs.core.truth_(inst_23361__$1)){
var statearr_23377_23392 = state_23373__$1;
(statearr_23377_23392[(1)] = (5));

} else {
var statearr_23378_23393 = state_23373__$1;
(statearr_23378_23393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (5))){
var inst_23361 = (state_23373[(7)]);
var inst_23363 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23361);
var state_23373__$1 = state_23373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23373__$1,(8),inst_23363);
} else {
if((state_val_23374 === (6))){
var state_23373__$1 = state_23373;
var statearr_23379_23394 = state_23373__$1;
(statearr_23379_23394[(2)] = null);

(statearr_23379_23394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (7))){
var inst_23369 = (state_23373[(2)]);
var state_23373__$1 = state_23373;
var statearr_23380_23395 = state_23373__$1;
(statearr_23380_23395[(2)] = inst_23369);

(statearr_23380_23395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23374 === (8))){
var inst_23365 = (state_23373[(2)]);
var state_23373__$1 = (function (){var statearr_23381 = state_23373;
(statearr_23381[(8)] = inst_23365);

return statearr_23381;
})();
var statearr_23382_23396 = state_23373__$1;
(statearr_23382_23396[(2)] = null);

(statearr_23382_23396[(1)] = (2));


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
});})(c__19328__auto___23390,ch))
;
return ((function (switch__19307__auto__,c__19328__auto___23390,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0 = (function (){
var statearr_23386 = [null,null,null,null,null,null,null,null,null];
(statearr_23386[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19308__auto__);

(statearr_23386[(1)] = (1));

return statearr_23386;
});
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1 = (function (state_23373){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_23373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object)){
var ex__19311__auto__ = e23387;
var statearr_23388_23397 = state_23373;
(statearr_23388_23397[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23398 = state_23373;
state_23373 = G__23398;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__ = function(state_23373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1.call(this,state_23373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___23390,ch))
})();
var state__19330__auto__ = (function (){var statearr_23389 = f__19329__auto__.call(null);
(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___23390);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___23390,ch))
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
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_23419){
var state_val_23420 = (state_23419[(1)]);
if((state_val_23420 === (1))){
var inst_23414 = cljs.core.async.timeout.call(null,(3000));
var state_23419__$1 = state_23419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23419__$1,(2),inst_23414);
} else {
if((state_val_23420 === (2))){
var inst_23416 = (state_23419[(2)]);
var inst_23417 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23419__$1 = (function (){var statearr_23421 = state_23419;
(statearr_23421[(7)] = inst_23416);

return statearr_23421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23419__$1,inst_23417);
} else {
return null;
}
}
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____0 = (function (){
var statearr_23425 = [null,null,null,null,null,null,null,null];
(statearr_23425[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__);

(statearr_23425[(1)] = (1));

return statearr_23425;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1 = (function (state_23419){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_23419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e23426){if((e23426 instanceof Object)){
var ex__19311__auto__ = e23426;
var statearr_23427_23429 = state_23419;
(statearr_23427_23429[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23430 = state_23419;
state_23419 = G__23430;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__ = function(state_23419){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1.call(this,state_23419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_23428 = f__19329__auto__.call(null);
(statearr_23428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_23428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__23431){
var map__23438 = p__23431;
var map__23438__$1 = ((((!((map__23438 == null)))?((((map__23438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23438):map__23438);
var ed = map__23438__$1;
var formatted_exception = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__23438__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23440_23444 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23441_23445 = null;
var count__23442_23446 = (0);
var i__23443_23447 = (0);
while(true){
if((i__23443_23447 < count__23442_23446)){
var msg_23448 = cljs.core._nth.call(null,chunk__23441_23445,i__23443_23447);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23448);

var G__23449 = seq__23440_23444;
var G__23450 = chunk__23441_23445;
var G__23451 = count__23442_23446;
var G__23452 = (i__23443_23447 + (1));
seq__23440_23444 = G__23449;
chunk__23441_23445 = G__23450;
count__23442_23446 = G__23451;
i__23443_23447 = G__23452;
continue;
} else {
var temp__4425__auto___23453 = cljs.core.seq.call(null,seq__23440_23444);
if(temp__4425__auto___23453){
var seq__23440_23454__$1 = temp__4425__auto___23453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23440_23454__$1)){
var c__17109__auto___23455 = cljs.core.chunk_first.call(null,seq__23440_23454__$1);
var G__23456 = cljs.core.chunk_rest.call(null,seq__23440_23454__$1);
var G__23457 = c__17109__auto___23455;
var G__23458 = cljs.core.count.call(null,c__17109__auto___23455);
var G__23459 = (0);
seq__23440_23444 = G__23456;
chunk__23441_23445 = G__23457;
count__23442_23446 = G__23458;
i__23443_23447 = G__23459;
continue;
} else {
var msg_23460 = cljs.core.first.call(null,seq__23440_23454__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23460);

var G__23461 = cljs.core.next.call(null,seq__23440_23454__$1);
var G__23462 = null;
var G__23463 = (0);
var G__23464 = (0);
seq__23440_23444 = G__23461;
chunk__23441_23445 = G__23462;
count__23442_23446 = G__23463;
i__23443_23447 = G__23464;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__23465){
var map__23468 = p__23465;
var map__23468__$1 = ((((!((map__23468 == null)))?((((map__23468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23468):map__23468);
var w = map__23468__$1;
var message = cljs.core.get.call(null,map__23468__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__23476 = cljs.core.seq.call(null,plugins);
var chunk__23477 = null;
var count__23478 = (0);
var i__23479 = (0);
while(true){
if((i__23479 < count__23478)){
var vec__23480 = cljs.core._nth.call(null,chunk__23477,i__23479);
var k = cljs.core.nth.call(null,vec__23480,(0),null);
var plugin = cljs.core.nth.call(null,vec__23480,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23482 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23476,chunk__23477,count__23478,i__23479,pl_23482,vec__23480,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23482.call(null,msg_hist);
});})(seq__23476,chunk__23477,count__23478,i__23479,pl_23482,vec__23480,k,plugin))
);
} else {
}

var G__23483 = seq__23476;
var G__23484 = chunk__23477;
var G__23485 = count__23478;
var G__23486 = (i__23479 + (1));
seq__23476 = G__23483;
chunk__23477 = G__23484;
count__23478 = G__23485;
i__23479 = G__23486;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23476);
if(temp__4425__auto__){
var seq__23476__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23476__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__23476__$1);
var G__23487 = cljs.core.chunk_rest.call(null,seq__23476__$1);
var G__23488 = c__17109__auto__;
var G__23489 = cljs.core.count.call(null,c__17109__auto__);
var G__23490 = (0);
seq__23476 = G__23487;
chunk__23477 = G__23488;
count__23478 = G__23489;
i__23479 = G__23490;
continue;
} else {
var vec__23481 = cljs.core.first.call(null,seq__23476__$1);
var k = cljs.core.nth.call(null,vec__23481,(0),null);
var plugin = cljs.core.nth.call(null,vec__23481,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23491 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23476,chunk__23477,count__23478,i__23479,pl_23491,vec__23481,k,plugin,seq__23476__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23491.call(null,msg_hist);
});})(seq__23476,chunk__23477,count__23478,i__23479,pl_23491,vec__23481,k,plugin,seq__23476__$1,temp__4425__auto__))
);
} else {
}

var G__23492 = cljs.core.next.call(null,seq__23476__$1);
var G__23493 = null;
var G__23494 = (0);
var G__23495 = (0);
seq__23476 = G__23492;
chunk__23477 = G__23493;
count__23478 = G__23494;
i__23479 = G__23495;
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
var args23496 = [];
var len__17364__auto___23499 = arguments.length;
var i__17365__auto___23500 = (0);
while(true){
if((i__17365__auto___23500 < len__17364__auto___23499)){
args23496.push((arguments[i__17365__auto___23500]));

var G__23501 = (i__17365__auto___23500 + (1));
i__17365__auto___23500 = G__23501;
continue;
} else {
}
break;
}

var G__23498 = args23496.length;
switch (G__23498) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23496.length)].join('')));

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
var len__17364__auto___23507 = arguments.length;
var i__17365__auto___23508 = (0);
while(true){
if((i__17365__auto___23508 < len__17364__auto___23507)){
args__17371__auto__.push((arguments[i__17365__auto___23508]));

var G__23509 = (i__17365__auto___23508 + (1));
i__17365__auto___23508 = G__23509;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((0) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__23504){
var map__23505 = p__23504;
var map__23505__$1 = ((((!((map__23505 == null)))?((((map__23505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23505):map__23505);
var opts = map__23505__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq23503){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23503));
});

//# sourceMappingURL=client.js.map?rel=1444419593136