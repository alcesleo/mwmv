// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17371__auto__ = [];
var len__17364__auto___28780 = arguments.length;
var i__17365__auto___28781 = (0);
while(true){
if((i__17365__auto___28781 < len__17364__auto___28780)){
args__17371__auto__.push((arguments[i__17365__auto___28781]));

var G__28782 = (i__17365__auto___28781 + (1));
i__17365__auto___28781 = G__28782;
continue;
} else {
}
break;
}

var argseq__17372__auto__ = ((((2) < args__17371__auto__.length))?(new cljs.core.IndexedSeq(args__17371__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17372__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28772_28783 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28773_28784 = null;
var count__28774_28785 = (0);
var i__28775_28786 = (0);
while(true){
if((i__28775_28786 < count__28774_28785)){
var k_28787 = cljs.core._nth.call(null,chunk__28773_28784,i__28775_28786);
e.setAttribute(cljs.core.name.call(null,k_28787),cljs.core.get.call(null,attrs,k_28787));

var G__28788 = seq__28772_28783;
var G__28789 = chunk__28773_28784;
var G__28790 = count__28774_28785;
var G__28791 = (i__28775_28786 + (1));
seq__28772_28783 = G__28788;
chunk__28773_28784 = G__28789;
count__28774_28785 = G__28790;
i__28775_28786 = G__28791;
continue;
} else {
var temp__4425__auto___28792 = cljs.core.seq.call(null,seq__28772_28783);
if(temp__4425__auto___28792){
var seq__28772_28793__$1 = temp__4425__auto___28792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28772_28793__$1)){
var c__17109__auto___28794 = cljs.core.chunk_first.call(null,seq__28772_28793__$1);
var G__28795 = cljs.core.chunk_rest.call(null,seq__28772_28793__$1);
var G__28796 = c__17109__auto___28794;
var G__28797 = cljs.core.count.call(null,c__17109__auto___28794);
var G__28798 = (0);
seq__28772_28783 = G__28795;
chunk__28773_28784 = G__28796;
count__28774_28785 = G__28797;
i__28775_28786 = G__28798;
continue;
} else {
var k_28799 = cljs.core.first.call(null,seq__28772_28793__$1);
e.setAttribute(cljs.core.name.call(null,k_28799),cljs.core.get.call(null,attrs,k_28799));

var G__28800 = cljs.core.next.call(null,seq__28772_28793__$1);
var G__28801 = null;
var G__28802 = (0);
var G__28803 = (0);
seq__28772_28783 = G__28800;
chunk__28773_28784 = G__28801;
count__28774_28785 = G__28802;
i__28775_28786 = G__28803;
continue;
}
} else {
}
}
break;
}

var seq__28776_28804 = cljs.core.seq.call(null,children);
var chunk__28777_28805 = null;
var count__28778_28806 = (0);
var i__28779_28807 = (0);
while(true){
if((i__28779_28807 < count__28778_28806)){
var ch_28808 = cljs.core._nth.call(null,chunk__28777_28805,i__28779_28807);
e.appendChild(ch_28808);

var G__28809 = seq__28776_28804;
var G__28810 = chunk__28777_28805;
var G__28811 = count__28778_28806;
var G__28812 = (i__28779_28807 + (1));
seq__28776_28804 = G__28809;
chunk__28777_28805 = G__28810;
count__28778_28806 = G__28811;
i__28779_28807 = G__28812;
continue;
} else {
var temp__4425__auto___28813 = cljs.core.seq.call(null,seq__28776_28804);
if(temp__4425__auto___28813){
var seq__28776_28814__$1 = temp__4425__auto___28813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28776_28814__$1)){
var c__17109__auto___28815 = cljs.core.chunk_first.call(null,seq__28776_28814__$1);
var G__28816 = cljs.core.chunk_rest.call(null,seq__28776_28814__$1);
var G__28817 = c__17109__auto___28815;
var G__28818 = cljs.core.count.call(null,c__17109__auto___28815);
var G__28819 = (0);
seq__28776_28804 = G__28816;
chunk__28777_28805 = G__28817;
count__28778_28806 = G__28818;
i__28779_28807 = G__28819;
continue;
} else {
var ch_28820 = cljs.core.first.call(null,seq__28776_28814__$1);
e.appendChild(ch_28820);

var G__28821 = cljs.core.next.call(null,seq__28776_28814__$1);
var G__28822 = null;
var G__28823 = (0);
var G__28824 = (0);
seq__28776_28804 = G__28821;
chunk__28777_28805 = G__28822;
count__28778_28806 = G__28823;
i__28779_28807 = G__28824;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28769){
var G__28770 = cljs.core.first.call(null,seq28769);
var seq28769__$1 = cljs.core.next.call(null,seq28769);
var G__28771 = cljs.core.first.call(null,seq28769__$1);
var seq28769__$2 = cljs.core.next.call(null,seq28769__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28770,G__28771,seq28769__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17219__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17223__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__,hierarchy__17223__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__,hierarchy__17223__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17223__auto__,method_table__17219__auto__,prefer_table__17220__auto__,method_cache__17221__auto__,cached_hierarchy__17222__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28825 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28825.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28825.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28825.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28825);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28826,st_map){
var map__28831 = p__28826;
var map__28831__$1 = ((((!((map__28831 == null)))?((((map__28831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28831):map__28831);
var container_el = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28831,map__28831__$1,container_el){
return (function (p__28833){
var vec__28834 = p__28833;
var k = cljs.core.nth.call(null,vec__28834,(0),null);
var v = cljs.core.nth.call(null,vec__28834,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28831,map__28831__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28835,dom_str){
var map__28838 = p__28835;
var map__28838__$1 = ((((!((map__28838 == null)))?((((map__28838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28838):map__28838);
var c = map__28838__$1;
var content_area_el = cljs.core.get.call(null,map__28838__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28840){
var map__28843 = p__28840;
var map__28843__$1 = ((((!((map__28843 == null)))?((((map__28843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28843):map__28843);
var content_area_el = cljs.core.get.call(null,map__28843__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_28886){
var state_val_28887 = (state_28886[(1)]);
if((state_val_28887 === (1))){
var inst_28871 = (state_28886[(7)]);
var inst_28871__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28872 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28873 = ["10px","10px","100%","68px","1.0"];
var inst_28874 = cljs.core.PersistentHashMap.fromArrays(inst_28872,inst_28873);
var inst_28875 = cljs.core.merge.call(null,inst_28874,style);
var inst_28876 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28871__$1,inst_28875);
var inst_28877 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28871__$1,msg);
var inst_28878 = cljs.core.async.timeout.call(null,(300));
var state_28886__$1 = (function (){var statearr_28888 = state_28886;
(statearr_28888[(7)] = inst_28871__$1);

(statearr_28888[(8)] = inst_28877);

(statearr_28888[(9)] = inst_28876);

return statearr_28888;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28886__$1,(2),inst_28878);
} else {
if((state_val_28887 === (2))){
var inst_28871 = (state_28886[(7)]);
var inst_28880 = (state_28886[(2)]);
var inst_28881 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28882 = ["auto"];
var inst_28883 = cljs.core.PersistentHashMap.fromArrays(inst_28881,inst_28882);
var inst_28884 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28871,inst_28883);
var state_28886__$1 = (function (){var statearr_28889 = state_28886;
(statearr_28889[(10)] = inst_28880);

return statearr_28889;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28886__$1,inst_28884);
} else {
return null;
}
}
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____0 = (function (){
var statearr_28893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28893[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__);

(statearr_28893[(1)] = (1));

return statearr_28893;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____1 = (function (state_28886){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28894){if((e28894 instanceof Object)){
var ex__19311__auto__ = e28894;
var statearr_28895_28897 = state_28886;
(statearr_28895_28897[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28898 = state_28886;
state_28886 = G__28898;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__ = function(state_28886){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____1.call(this,state_28886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_28896 = f__19329__auto__.call(null);
(statearr_28896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_28896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28900 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28900,(0),null);
var ln = cljs.core.nth.call(null,vec__28900,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28903 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28903,(0),null);
var file_line = cljs.core.nth.call(null,vec__28903,(1),null);
var file_column = cljs.core.nth.call(null,vec__28903,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28903,file_name,file_line,file_column){
return (function (p1__28901_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28901_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28903,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16306__auto__ = file_line;
if(cljs.core.truth_(or__16306__auto__)){
return or__16306__auto__;
} else {
var and__16294__auto__ = cause;
if(cljs.core.truth_(and__16294__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16294__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28906 = figwheel.client.heads_up.ensure_container.call(null);
var map__28906__$1 = ((((!((map__28906 == null)))?((((map__28906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28906):map__28906);
var content_area_el = cljs.core.get.call(null,map__28906__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_28954){
var state_val_28955 = (state_28954[(1)]);
if((state_val_28955 === (1))){
var inst_28937 = (state_28954[(7)]);
var inst_28937__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28938 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28939 = ["0.0"];
var inst_28940 = cljs.core.PersistentHashMap.fromArrays(inst_28938,inst_28939);
var inst_28941 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28937__$1,inst_28940);
var inst_28942 = cljs.core.async.timeout.call(null,(300));
var state_28954__$1 = (function (){var statearr_28956 = state_28954;
(statearr_28956[(8)] = inst_28941);

(statearr_28956[(7)] = inst_28937__$1);

return statearr_28956;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28954__$1,(2),inst_28942);
} else {
if((state_val_28955 === (2))){
var inst_28937 = (state_28954[(7)]);
var inst_28944 = (state_28954[(2)]);
var inst_28945 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28946 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28947 = cljs.core.PersistentHashMap.fromArrays(inst_28945,inst_28946);
var inst_28948 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28937,inst_28947);
var inst_28949 = cljs.core.async.timeout.call(null,(200));
var state_28954__$1 = (function (){var statearr_28957 = state_28954;
(statearr_28957[(9)] = inst_28948);

(statearr_28957[(10)] = inst_28944);

return statearr_28957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28954__$1,(3),inst_28949);
} else {
if((state_val_28955 === (3))){
var inst_28937 = (state_28954[(7)]);
var inst_28951 = (state_28954[(2)]);
var inst_28952 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28937,"");
var state_28954__$1 = (function (){var statearr_28958 = state_28954;
(statearr_28958[(11)] = inst_28951);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28954__$1,inst_28952);
} else {
return null;
}
}
}
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19308__auto____0 = (function (){
var statearr_28962 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28962[(0)] = figwheel$client$heads_up$clear_$_state_machine__19308__auto__);

(statearr_28962[(1)] = (1));

return statearr_28962;
});
var figwheel$client$heads_up$clear_$_state_machine__19308__auto____1 = (function (state_28954){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e28963){if((e28963 instanceof Object)){
var ex__19311__auto__ = e28963;
var statearr_28964_28966 = state_28954;
(statearr_28964_28966[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28967 = state_28954;
state_28954 = G__28967;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19308__auto__ = function(state_28954){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19308__auto____1.call(this,state_28954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19308__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19308__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_28965 = f__19329__auto__.call(null);
(statearr_28965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_28965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19328__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19328__auto__){
return (function (){
var f__19329__auto__ = (function (){var switch__19307__auto__ = ((function (c__19328__auto__){
return (function (state_28999){
var state_val_29000 = (state_28999[(1)]);
if((state_val_29000 === (1))){
var inst_28989 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(2),inst_28989);
} else {
if((state_val_29000 === (2))){
var inst_28991 = (state_28999[(2)]);
var inst_28992 = cljs.core.async.timeout.call(null,(400));
var state_28999__$1 = (function (){var statearr_29001 = state_28999;
(statearr_29001[(7)] = inst_28991);

return statearr_29001;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(3),inst_28992);
} else {
if((state_val_29000 === (3))){
var inst_28994 = (state_28999[(2)]);
var inst_28995 = figwheel.client.heads_up.clear.call(null);
var state_28999__$1 = (function (){var statearr_29002 = state_28999;
(statearr_29002[(8)] = inst_28994);

return statearr_29002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,(4),inst_28995);
} else {
if((state_val_29000 === (4))){
var inst_28997 = (state_28999[(2)]);
var state_28999__$1 = state_28999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else {
return null;
}
}
}
}
});})(c__19328__auto__))
;
return ((function (switch__19307__auto__,c__19328__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____0 = (function (){
var statearr_29006 = [null,null,null,null,null,null,null,null,null];
(statearr_29006[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__);

(statearr_29006[(1)] = (1));

return statearr_29006;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____1 = (function (state_28999){
while(true){
var ret_value__19309__auto__ = (function (){try{while(true){
var result__19310__auto__ = switch__19307__auto__.call(null,state_28999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19310__auto__;
}
break;
}
}catch (e29007){if((e29007 instanceof Object)){
var ex__19311__auto__ = e29007;
var statearr_29008_29010 = state_28999;
(statearr_29008_29010[(5)] = ex__19311__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19309__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29011 = state_28999;
state_28999 = G__29011;
continue;
} else {
return ret_value__19309__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19308__auto__;
})()
;})(switch__19307__auto__,c__19328__auto__))
})();
var state__19330__auto__ = (function (){var statearr_29009 = f__19329__auto__.call(null);
(statearr_29009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19328__auto__);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19330__auto__);
});})(c__19328__auto__))
);

return c__19328__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1444419857163