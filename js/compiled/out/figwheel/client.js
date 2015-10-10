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
var G__27935__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27935 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27936__i = 0, G__27936__a = new Array(arguments.length -  0);
while (G__27936__i < G__27936__a.length) {G__27936__a[G__27936__i] = arguments[G__27936__i + 0]; ++G__27936__i;}
  args = new cljs.core.IndexedSeq(G__27936__a,0);
} 
return G__27935__delegate.call(this,args);};
G__27935.cljs$lang$maxFixedArity = 0;
G__27935.cljs$lang$applyTo = (function (arglist__27937){
var args = cljs.core.seq(arglist__27937);
return G__27935__delegate(args);
});
G__27935.cljs$core$IFn$_invoke$arity$variadic = G__27935__delegate;
return G__27935;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27938){
var map__27941 = p__27938;
var map__27941__$1 = ((((!((map__27941 == null)))?((((map__27941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27941):map__27941);
var message = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19328__auto___28089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___28089,ch){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___28089,ch){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28061_28090 = state_28059__$1;
(statearr_28061_28090[(2)] = inst_28055);

(statearr_28061_28090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (1))){
var state_28059__$1 = state_28059;
var statearr_28062_28091 = state_28059__$1;
(statearr_28062_28091[(2)] = null);

(statearr_28062_28091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (4))){
var inst_28018 = (state_28059[(7)]);
var inst_28018__$1 = (state_28059[(2)]);
var state_28059__$1 = (function (){var statearr_28063 = state_28059;
(statearr_28063[(7)] = inst_28018__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28018__$1)){
var statearr_28064_28092 = state_28059__$1;
(statearr_28064_28092[(1)] = (5));

} else {
var statearr_28065_28093 = state_28059__$1;
(statearr_28065_28093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (15))){
var inst_28025 = (state_28059[(8)]);
var inst_28040 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28025);
var inst_28041 = cljs.core.first.call(null,inst_28040);
var inst_28042 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28041);
var inst_28043 = console.warn("Figwheel: Not loading code with warnings - ",inst_28042);
var state_28059__$1 = state_28059;
var statearr_28066_28094 = state_28059__$1;
(statearr_28066_28094[(2)] = inst_28043);

(statearr_28066_28094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (13))){
var inst_28048 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28067_28095 = state_28059__$1;
(statearr_28067_28095[(2)] = inst_28048);

(statearr_28067_28095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var state_28059__$1 = state_28059;
var statearr_28068_28096 = state_28059__$1;
(statearr_28068_28096[(2)] = null);

(statearr_28068_28096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (17))){
var inst_28046 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28069_28097 = state_28059__$1;
(statearr_28069_28097[(2)] = inst_28046);

(statearr_28069_28097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (3))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (12))){
var inst_28024 = (state_28059[(9)]);
var inst_28038 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28024,opts);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28038)){
var statearr_28070_28098 = state_28059__$1;
(statearr_28070_28098[(1)] = (15));

} else {
var statearr_28071_28099 = state_28059__$1;
(statearr_28071_28099[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (2))){
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(4),ch);
} else {
if((state_val_28060 === (11))){
var inst_28025 = (state_28059[(8)]);
var inst_28030 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28031 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28025);
var inst_28032 = cljs.core.async.timeout.call(null,(1000));
var inst_28033 = [inst_28031,inst_28032];
var inst_28034 = (new cljs.core.PersistentVector(null,2,(5),inst_28030,inst_28033,null));
var state_28059__$1 = state_28059;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28059__$1,(14),inst_28034);
} else {
if((state_val_28060 === (9))){
var state_28059__$1 = state_28059;
var statearr_28072_28100 = state_28059__$1;
(statearr_28072_28100[(2)] = null);

(statearr_28072_28100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (5))){
var inst_28018 = (state_28059[(7)]);
var inst_28020 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28021 = (new cljs.core.PersistentArrayMap(null,2,inst_28020,null));
var inst_28022 = (new cljs.core.PersistentHashSet(null,inst_28021,null));
var inst_28023 = figwheel.client.focus_msgs.call(null,inst_28022,inst_28018);
var inst_28024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28023);
var inst_28025 = cljs.core.first.call(null,inst_28023);
var inst_28026 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28059__$1 = (function (){var statearr_28073 = state_28059;
(statearr_28073[(9)] = inst_28024);

(statearr_28073[(8)] = inst_28025);

return statearr_28073;
})();
if(cljs.core.truth_(inst_28026)){
var statearr_28074_28101 = state_28059__$1;
(statearr_28074_28101[(1)] = (8));

} else {
var statearr_28075_28102 = state_28059__$1;
(statearr_28075_28102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (14))){
var inst_28036 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28076_28103 = state_28059__$1;
(statearr_28076_28103[(2)] = inst_28036);

(statearr_28076_28103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (16))){
var state_28059__$1 = state_28059;
var statearr_28077_28104 = state_28059__$1;
(statearr_28077_28104[(2)] = null);

(statearr_28077_28104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (10))){
var inst_28051 = (state_28059[(2)]);
var state_28059__$1 = (function (){var statearr_28078 = state_28059;
(statearr_28078[(10)] = inst_28051);

return statearr_28078;
})();
var statearr_28079_28105 = state_28059__$1;
(statearr_28079_28105[(2)] = null);

(statearr_28079_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (8))){
var inst_28024 = (state_28059[(9)]);
var inst_28028 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28024,opts);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28028)){
var statearr_28080_28106 = state_28059__$1;
(statearr_28080_28106[(1)] = (11));

} else {
var statearr_28081_28107 = state_28059__$1;
(statearr_28081_28107[(1)] = (12));

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
});})(c__19328__auto___28089,ch))
;
return ((function (switch__19307__auto__,c__19328__auto___28089,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0 = (function (){
var statearr_28085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28085[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__);

(statearr_28085[(1)] = (1));

return statearr_28085;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1 = (function (state_28059){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28086){if((e28086 instanceof Object)){
var ex__19311__auto__ = e28086;
var statearr_28087_28108 = state_28059;
(statearr_28087_28108[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28059;
state_28059 = G__28109;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19308__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___28089,ch))
})();
var state__19330__auto__ = (function (){var statearr_28088 = f__19329__auto__.call(null);
(statearr_28088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___28089);

return statearr_28088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___28089,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28110_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28110_SHARP_));
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
var base_path_28117 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28117){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28116 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28115,_STAR_print_newline_STAR_28116,base_path_28117){
return (function() { 
var G__28118__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28119__i = 0, G__28119__a = new Array(arguments.length -  0);
while (G__28119__i < G__28119__a.length) {G__28119__a[G__28119__i] = arguments[G__28119__i + 0]; ++G__28119__i;}
  args = new cljs.core.IndexedSeq(G__28119__a,0);
} 
return G__28118__delegate.call(this,args);};
G__28118.cljs$lang$maxFixedArity = 0;
G__28118.cljs$lang$applyTo = (function (arglist__28120){
var args = cljs.core.seq(arglist__28120);
return G__28118__delegate(args);
});
G__28118.cljs$core$IFn$_invoke$arity$variadic = G__28118__delegate;
return G__28118;
})()
;})(_STAR_print_fn_STAR_28115,_STAR_print_newline_STAR_28116,base_path_28117))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28116;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28115;
}}catch (e28114){if((e28114 instanceof Error)){
var e = e28114;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28117], null));
} else {
var e = e28114;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28117))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28121){
var map__28128 = p__28121;
var map__28128__$1 = ((((!((map__28128 == null)))?((((map__28128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28128):map__28128);
var opts = map__28128__$1;
var build_id = cljs.core.get.call(null,map__28128__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28128,map__28128__$1,opts,build_id){
return (function (p__28130){
var vec__28131 = p__28130;
var map__28132 = cljs.core.nth.call(null,vec__28131,(0),null);
var map__28132__$1 = ((((!((map__28132 == null)))?((((map__28132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28132):map__28132);
var msg = map__28132__$1;
var msg_name = cljs.core.get.call(null,map__28132__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28131,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28131,map__28132,map__28132__$1,msg,msg_name,_,map__28128,map__28128__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28131,map__28132,map__28132__$1,msg,msg_name,_,map__28128,map__28128__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28128,map__28128__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28138){
var vec__28139 = p__28138;
var map__28140 = cljs.core.nth.call(null,vec__28139,(0),null);
var map__28140__$1 = ((((!((map__28140 == null)))?((((map__28140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28140):map__28140);
var msg = map__28140__$1;
var msg_name = cljs.core.get.call(null,map__28140__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28139,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28142){
var map__28152 = p__28142;
var map__28152__$1 = ((((!((map__28152 == null)))?((((map__28152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28152):map__28152);
var on_compile_warning = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28152__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28152,map__28152__$1,on_compile_warning,on_compile_fail){
return (function (p__28154){
var vec__28155 = p__28154;
var map__28156 = cljs.core.nth.call(null,vec__28155,(0),null);
var map__28156__$1 = ((((!((map__28156 == null)))?((((map__28156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28156):map__28156);
var msg = map__28156__$1;
var msg_name = cljs.core.get.call(null,map__28156__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28155,(1));
var pred__28158 = cljs.core._EQ_;
var expr__28159 = msg_name;
if(cljs.core.truth_(pred__28158.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28159))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28158.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28159))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28152,map__28152__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__,msg_hist,msg_names,msg){
return (function (state_28375){
var state_val_28376 = (state_28375[(1)]);
if((state_val_28376 === (7))){
var inst_28299 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28299)){
var statearr_28377_28423 = state_28375__$1;
(statearr_28377_28423[(1)] = (8));

} else {
var statearr_28378_28424 = state_28375__$1;
(statearr_28378_28424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (20))){
var inst_28369 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28379_28425 = state_28375__$1;
(statearr_28379_28425[(2)] = inst_28369);

(statearr_28379_28425[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (27))){
var inst_28365 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28380_28426 = state_28375__$1;
(statearr_28380_28426[(2)] = inst_28365);

(statearr_28380_28426[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (1))){
var inst_28292 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28292)){
var statearr_28381_28427 = state_28375__$1;
(statearr_28381_28427[(1)] = (2));

} else {
var statearr_28382_28428 = state_28375__$1;
(statearr_28382_28428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (24))){
var inst_28367 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28383_28429 = state_28375__$1;
(statearr_28383_28429[(2)] = inst_28367);

(statearr_28383_28429[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (4))){
var inst_28373 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28375__$1,inst_28373);
} else {
if((state_val_28376 === (15))){
var inst_28371 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28384_28430 = state_28375__$1;
(statearr_28384_28430[(2)] = inst_28371);

(statearr_28384_28430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (21))){
var inst_28330 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28385_28431 = state_28375__$1;
(statearr_28385_28431[(2)] = inst_28330);

(statearr_28385_28431[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (31))){
var inst_28354 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28354)){
var statearr_28386_28432 = state_28375__$1;
(statearr_28386_28432[(1)] = (34));

} else {
var statearr_28387_28433 = state_28375__$1;
(statearr_28387_28433[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (32))){
var inst_28363 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28388_28434 = state_28375__$1;
(statearr_28388_28434[(2)] = inst_28363);

(statearr_28388_28434[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (33))){
var inst_28352 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28389_28435 = state_28375__$1;
(statearr_28389_28435[(2)] = inst_28352);

(statearr_28389_28435[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (13))){
var inst_28313 = figwheel.client.heads_up.clear.call(null);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(16),inst_28313);
} else {
if((state_val_28376 === (22))){
var inst_28334 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28335 = figwheel.client.heads_up.append_message.call(null,inst_28334);
var state_28375__$1 = state_28375;
var statearr_28390_28436 = state_28375__$1;
(statearr_28390_28436[(2)] = inst_28335);

(statearr_28390_28436[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (36))){
var inst_28361 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28391_28437 = state_28375__$1;
(statearr_28391_28437[(2)] = inst_28361);

(statearr_28391_28437[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (29))){
var inst_28345 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28392_28438 = state_28375__$1;
(statearr_28392_28438[(2)] = inst_28345);

(statearr_28392_28438[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (6))){
var inst_28294 = (state_28375[(7)]);
var state_28375__$1 = state_28375;
var statearr_28393_28439 = state_28375__$1;
(statearr_28393_28439[(2)] = inst_28294);

(statearr_28393_28439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (28))){
var inst_28341 = (state_28375[(2)]);
var inst_28342 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28343 = figwheel.client.heads_up.display_warning.call(null,inst_28342);
var state_28375__$1 = (function (){var statearr_28394 = state_28375;
(statearr_28394[(8)] = inst_28341);

return statearr_28394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(29),inst_28343);
} else {
if((state_val_28376 === (25))){
var inst_28339 = figwheel.client.heads_up.clear.call(null);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(28),inst_28339);
} else {
if((state_val_28376 === (34))){
var inst_28356 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(37),inst_28356);
} else {
if((state_val_28376 === (17))){
var inst_28321 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28395_28440 = state_28375__$1;
(statearr_28395_28440[(2)] = inst_28321);

(statearr_28395_28440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (3))){
var inst_28311 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28311)){
var statearr_28396_28441 = state_28375__$1;
(statearr_28396_28441[(1)] = (13));

} else {
var statearr_28397_28442 = state_28375__$1;
(statearr_28397_28442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (12))){
var inst_28307 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28398_28443 = state_28375__$1;
(statearr_28398_28443[(2)] = inst_28307);

(statearr_28398_28443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (2))){
var inst_28294 = (state_28375[(7)]);
var inst_28294__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_28375__$1 = (function (){var statearr_28399 = state_28375;
(statearr_28399[(7)] = inst_28294__$1);

return statearr_28399;
})();
if(cljs.core.truth_(inst_28294__$1)){
var statearr_28400_28444 = state_28375__$1;
(statearr_28400_28444[(1)] = (5));

} else {
var statearr_28401_28445 = state_28375__$1;
(statearr_28401_28445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (23))){
var inst_28337 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28337)){
var statearr_28402_28446 = state_28375__$1;
(statearr_28402_28446[(1)] = (25));

} else {
var statearr_28403_28447 = state_28375__$1;
(statearr_28403_28447[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (35))){
var state_28375__$1 = state_28375;
var statearr_28404_28448 = state_28375__$1;
(statearr_28404_28448[(2)] = null);

(statearr_28404_28448[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (19))){
var inst_28332 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28332)){
var statearr_28405_28449 = state_28375__$1;
(statearr_28405_28449[(1)] = (22));

} else {
var statearr_28406_28450 = state_28375__$1;
(statearr_28406_28450[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (11))){
var inst_28303 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28407_28451 = state_28375__$1;
(statearr_28407_28451[(2)] = inst_28303);

(statearr_28407_28451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (9))){
var inst_28305 = figwheel.client.heads_up.clear.call(null);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(12),inst_28305);
} else {
if((state_val_28376 === (5))){
var inst_28296 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28375__$1 = state_28375;
var statearr_28408_28452 = state_28375__$1;
(statearr_28408_28452[(2)] = inst_28296);

(statearr_28408_28452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (14))){
var inst_28323 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28323)){
var statearr_28409_28453 = state_28375__$1;
(statearr_28409_28453[(1)] = (18));

} else {
var statearr_28410_28454 = state_28375__$1;
(statearr_28410_28454[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (26))){
var inst_28347 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28375__$1 = state_28375;
if(cljs.core.truth_(inst_28347)){
var statearr_28411_28455 = state_28375__$1;
(statearr_28411_28455[(1)] = (30));

} else {
var statearr_28412_28456 = state_28375__$1;
(statearr_28412_28456[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (16))){
var inst_28315 = (state_28375[(2)]);
var inst_28316 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28317 = figwheel.client.format_messages.call(null,inst_28316);
var inst_28318 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28319 = figwheel.client.heads_up.display_error.call(null,inst_28317,inst_28318);
var state_28375__$1 = (function (){var statearr_28413 = state_28375;
(statearr_28413[(9)] = inst_28315);

return statearr_28413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(17),inst_28319);
} else {
if((state_val_28376 === (30))){
var inst_28349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28350 = figwheel.client.heads_up.display_warning.call(null,inst_28349);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(33),inst_28350);
} else {
if((state_val_28376 === (10))){
var inst_28309 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28414_28457 = state_28375__$1;
(statearr_28414_28457[(2)] = inst_28309);

(statearr_28414_28457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (18))){
var inst_28325 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28326 = figwheel.client.format_messages.call(null,inst_28325);
var inst_28327 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28328 = figwheel.client.heads_up.display_error.call(null,inst_28326,inst_28327);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(21),inst_28328);
} else {
if((state_val_28376 === (37))){
var inst_28358 = (state_28375[(2)]);
var state_28375__$1 = state_28375;
var statearr_28415_28458 = state_28375__$1;
(statearr_28415_28458[(2)] = inst_28358);

(statearr_28415_28458[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28376 === (8))){
var inst_28301 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28375__$1 = state_28375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28375__$1,(11),inst_28301);
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
var statearr_28419 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28419[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__);

(statearr_28419[(1)] = (1));

return statearr_28419;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1 = (function (state_28375){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28420){if((e28420 instanceof Object)){
var ex__19311__auto__ = e28420;
var statearr_28421_28459 = state_28375;
(statearr_28421_28459[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28460 = state_28375;
state_28375 = G__28460;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__ = function(state_28375){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1.call(this,state_28375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__,msg_hist,msg_names,msg))
})();
var state__19330__auto__ = (function (){var statearr_28422 = f__19329__auto__.call(null);
(statearr_28422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_28422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__,msg_hist,msg_names,msg))
);

return c__19328__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19328__auto___28523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto___28523,ch){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto___28523,ch){
return (function (state_28506){
var state_val_28507 = (state_28506[(1)]);
if((state_val_28507 === (1))){
var state_28506__$1 = state_28506;
var statearr_28508_28524 = state_28506__$1;
(statearr_28508_28524[(2)] = null);

(statearr_28508_28524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (2))){
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28506__$1,(4),ch);
} else {
if((state_val_28507 === (3))){
var inst_28504 = (state_28506[(2)]);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28506__$1,inst_28504);
} else {
if((state_val_28507 === (4))){
var inst_28494 = (state_28506[(7)]);
var inst_28494__$1 = (state_28506[(2)]);
var state_28506__$1 = (function (){var statearr_28509 = state_28506;
(statearr_28509[(7)] = inst_28494__$1);

return statearr_28509;
})();
if(cljs.core.truth_(inst_28494__$1)){
var statearr_28510_28525 = state_28506__$1;
(statearr_28510_28525[(1)] = (5));

} else {
var statearr_28511_28526 = state_28506__$1;
(statearr_28511_28526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (5))){
var inst_28494 = (state_28506[(7)]);
var inst_28496 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28494);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28506__$1,(8),inst_28496);
} else {
if((state_val_28507 === (6))){
var state_28506__$1 = state_28506;
var statearr_28512_28527 = state_28506__$1;
(statearr_28512_28527[(2)] = null);

(statearr_28512_28527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (7))){
var inst_28502 = (state_28506[(2)]);
var state_28506__$1 = state_28506;
var statearr_28513_28528 = state_28506__$1;
(statearr_28513_28528[(2)] = inst_28502);

(statearr_28513_28528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28507 === (8))){
var inst_28498 = (state_28506[(2)]);
var state_28506__$1 = (function (){var statearr_28514 = state_28506;
(statearr_28514[(8)] = inst_28498);

return statearr_28514;
})();
var statearr_28515_28529 = state_28506__$1;
(statearr_28515_28529[(2)] = null);

(statearr_28515_28529[(1)] = (2));


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
});})(c__19328__auto___28523,ch))
;
return ((function (switch__19307__auto__,c__19328__auto___28523,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0 = (function (){
var statearr_28519 = [null,null,null,null,null,null,null,null,null];
(statearr_28519[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19308__auto__);

(statearr_28519[(1)] = (1));

return statearr_28519;
});
var figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1 = (function (state_28506){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28520){if((e28520 instanceof Object)){
var ex__19311__auto__ = e28520;
var statearr_28521_28530 = state_28506;
(statearr_28521_28530[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28531 = state_28506;
state_28506 = G__28531;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__ = function(state_28506){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1.call(this,state_28506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19308__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19308__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto___28523,ch))
})();
var state__19330__auto__ = (function (){var statearr_28522 = f__19329__auto__.call(null);
(statearr_28522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto___28523);

return statearr_28522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto___28523,ch))
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
return (function (state_28552){
var state_val_28553 = (state_28552[(1)]);
if((state_val_28553 === (1))){
var inst_28547 = cljs.core.async.timeout.call(null,(3000));
var state_28552__$1 = state_28552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28552__$1,(2),inst_28547);
} else {
if((state_val_28553 === (2))){
var inst_28549 = (state_28552[(2)]);
var inst_28550 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28552__$1 = (function (){var statearr_28554 = state_28552;
(statearr_28554[(7)] = inst_28549);

return statearr_28554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28552__$1,inst_28550);
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
var statearr_28558 = [null,null,null,null,null,null,null,null];
(statearr_28558[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__);

(statearr_28558[(1)] = (1));

return statearr_28558;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1 = (function (state_28552){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28559){if((e28559 instanceof Object)){
var ex__19311__auto__ = e28559;
var statearr_28560_28562 = state_28552;
(statearr_28560_28562[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28563 = state_28552;
state_28552 = G__28563;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__ = function(state_28552){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1.call(this,state_28552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19308__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_28561 = f__19329__auto__.call(null);
(statearr_28561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_28561;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28564){
var map__28571 = p__28564;
var map__28571__$1 = ((((!((map__28571 == null)))?((((map__28571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28571):map__28571);
var ed = map__28571__$1;
var formatted_exception = cljs.core.get.call(null,map__28571__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28571__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28571__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28573_28577 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28574_28578 = null;
var count__28575_28579 = (0);
var i__28576_28580 = (0);
while(true){
if((i__28576_28580 < count__28575_28579)){
var msg_28581 = cljs.core._nth.call(null,chunk__28574_28578,i__28576_28580);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28581);

var G__28582 = seq__28573_28577;
var G__28583 = chunk__28574_28578;
var G__28584 = count__28575_28579;
var G__28585 = (i__28576_28580 + (1));
seq__28573_28577 = G__28582;
chunk__28574_28578 = G__28583;
count__28575_28579 = G__28584;
i__28576_28580 = G__28585;
continue;
} else {
var temp__4425__auto___28586 = cljs.core.seq.call(null,seq__28573_28577);
if(temp__4425__auto___28586){
var seq__28573_28587__$1 = temp__4425__auto___28586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28573_28587__$1)){
var c__17109__auto___28588 = cljs.core.chunk_first.call(null,seq__28573_28587__$1);
var G__28589 = cljs.core.chunk_rest.call(null,seq__28573_28587__$1);
var G__28590 = c__17109__auto___28588;
var G__28591 = cljs.core.count.call(null,c__17109__auto___28588);
var G__28592 = (0);
seq__28573_28577 = G__28589;
chunk__28574_28578 = G__28590;
count__28575_28579 = G__28591;
i__28576_28580 = G__28592;
continue;
} else {
var msg_28593 = cljs.core.first.call(null,seq__28573_28587__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28593);

var G__28594 = cljs.core.next.call(null,seq__28573_28587__$1);
var G__28595 = null;
var G__28596 = (0);
var G__28597 = (0);
seq__28573_28577 = G__28594;
chunk__28574_28578 = G__28595;
count__28575_28579 = G__28596;
i__28576_28580 = G__28597;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28598){
var map__28601 = p__28598;
var map__28601__$1 = ((((!((map__28601 == null)))?((((map__28601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28601):map__28601);
var w = map__28601__$1;
var message = cljs.core.get.call(null,map__28601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__28609 = cljs.core.seq.call(null,plugins);
var chunk__28610 = null;
var count__28611 = (0);
var i__28612 = (0);
while(true){
if((i__28612 < count__28611)){
var vec__28613 = cljs.core._nth.call(null,chunk__28610,i__28612);
var k = cljs.core.nth.call(null,vec__28613,(0),null);
var plugin = cljs.core.nth.call(null,vec__28613,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28615 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28609,chunk__28610,count__28611,i__28612,pl_28615,vec__28613,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28615.call(null,msg_hist);
});})(seq__28609,chunk__28610,count__28611,i__28612,pl_28615,vec__28613,k,plugin))
);
} else {
}

var G__28616 = seq__28609;
var G__28617 = chunk__28610;
var G__28618 = count__28611;
var G__28619 = (i__28612 + (1));
seq__28609 = G__28616;
chunk__28610 = G__28617;
count__28611 = G__28618;
i__28612 = G__28619;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28609);
if(temp__4425__auto__){
var seq__28609__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28609__$1)){
var c__17109__auto__ = cljs.core.chunk_first.call(null,seq__28609__$1);
var G__28620 = cljs.core.chunk_rest.call(null,seq__28609__$1);
var G__28621 = c__17109__auto__;
var G__28622 = cljs.core.count.call(null,c__17109__auto__);
var G__28623 = (0);
seq__28609 = G__28620;
chunk__28610 = G__28621;
count__28611 = G__28622;
i__28612 = G__28623;
continue;
} else {
var vec__28614 = cljs.core.first.call(null,seq__28609__$1);
var k = cljs.core.nth.call(null,vec__28614,(0),null);
var plugin = cljs.core.nth.call(null,vec__28614,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28624 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28609,chunk__28610,count__28611,i__28612,pl_28624,vec__28614,k,plugin,seq__28609__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28624.call(null,msg_hist);
});})(seq__28609,chunk__28610,count__28611,i__28612,pl_28624,vec__28614,k,plugin,seq__28609__$1,temp__4425__auto__))
);
} else {
}

var G__28625 = cljs.core.next.call(null,seq__28609__$1);
var G__28626 = null;
var G__28627 = (0);
var G__28628 = (0);
seq__28609 = G__28625;
chunk__28610 = G__28626;
count__28611 = G__28627;
i__28612 = G__28628;
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
var args28629 = [];
var len__17364__auto___28632 = arguments.length;
var i__17365__auto___28633 = (0);
while(true){
if((i__17365__auto___28633 < len__17364__auto___28632)){
args28629.push((arguments[i__17365__auto___28633]));

var G__28634 = (i__17365__auto___28633 + (1));
i__17365__auto___28633 = G__28634;
continue;
} else {
}
break;
}

var G__28631 = args28629.length;
switch (G__28631) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28629.length)].join('')));

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
var len__17364__auto___28640 = arguments.length;
var i__17365__auto___28641 = (0);
while(true){
if((i__17365__auto___28641 < len__17364__auto___28640)){
args__17371__auto__.push((arguments[i__17365__auto___28641]));

var G__28642 = (i__17365__auto___28641 + (1));
i__17365__auto___28641 = G__28642;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((0) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17372__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28637){
var map__28638 = p__28637;
var map__28638__$1 = ((((!((map__28638 == null)))?((((map__28638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);
var opts = map__28638__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28636){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28636));
});

//# sourceMappingURL=client.js.map?rel=1444419856742