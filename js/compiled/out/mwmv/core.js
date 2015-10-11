// Compiled by ClojureScript 1.7.122 {}
goog.provide('mwmv.core');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
mwmv.core.parse_string = (function mwmv$core$parse_string(s){
return cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
});
mwmv.core.parse_date = (function mwmv$core$parse_date(d){
return (new Date(clojure.string.join.call(null,"-",cljs.core.reverse.call(null,clojure.string.split.call(null,d,/\//)))));
});
mwmv.core.parse_float = (function mwmv$core$parse_float(f){
return window.parseFloat(f);
});
mwmv.core.round_cents = (function mwmv$core$round_cents(f){
return (Math.round(((100) * f)) / (100));
});
/**
 * Turns a row in the csv into a map
 */
mwmv.core.parse_row = (function mwmv$core$parse_row(row){
var columns = clojure.string.split.call(null,row,/,/);
var vec__21881 = columns;
var _ = cljs.core.nth.call(null,vec__21881,(0),null);
var date = cljs.core.nth.call(null,vec__21881,(1),null);
var category = cljs.core.nth.call(null,vec__21881,(2),null);
var description = cljs.core.nth.call(null,vec__21881,(3),null);
var ___$1 = cljs.core.nth.call(null,vec__21881,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__21881,(5),null);
var ___$3 = cljs.core.nth.call(null,vec__21881,(6),null);
var ___$4 = cljs.core.nth.call(null,vec__21881,(7),null);
var ___$5 = cljs.core.nth.call(null,vec__21881,(8),null);
var ___$6 = cljs.core.nth.call(null,vec__21881,(9),null);
var ___$7 = cljs.core.nth.call(null,vec__21881,(10),null);
var amount = cljs.core.nth.call(null,vec__21881,(11),null);
var ___$8 = cljs.core.nth.call(null,vec__21881,(12),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),mwmv.core.parse_date.call(null,date),new cljs.core.Keyword(null,"category","category",-593092832),mwmv.core.parse_string.call(null,category),new cljs.core.Keyword(null,"description","description",-1428560544),mwmv.core.parse_string.call(null,description),new cljs.core.Keyword(null,"amount","amount",364489504),mwmv.core.parse_float.call(null,amount)], null);
});
mwmv.core.parse_csv = (function mwmv$core$parse_csv(csv){
return cljs.core.map.call(null,mwmv.core.parse_row,cljs.core.rest.call(null,clojure.string.split_lines.call(null,csv)));
});
/**
 * Returns a vector like [2015 1] from a date object in Feb 2015
 */
mwmv.core.yearmonth = (function mwmv$core$yearmonth(date){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date.getFullYear(),date.getMonth()], null);
});
/**
 * Returns the yearmonth of an entry
 */
mwmv.core.get_yearmonth = cljs.core.comp.call(null,mwmv.core.yearmonth,new cljs.core.Keyword(null,"date","date",-1463434462));
/**
 * A human readable yearmonth
 */
mwmv.core.yearmonth__GT_str = (function mwmv$core$yearmonth__GT_str(p__21882){
var vec__21884 = p__21882;
var year = cljs.core.nth.call(null,vec__21884,(0),null);
var month = cljs.core.nth.call(null,vec__21884,(1),null);
var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
return [cljs.core.str(months.call(null,month)),cljs.core.str(" "),cljs.core.str(year)].join('');
});
/**
 * Returns a timespan covering exactly the provided entries
 */
mwmv.core.get_timespan = (function mwmv$core$get_timespan(entries){
return cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,mwmv.core.get_yearmonth,entries)));
});
/**
 * The total expense of entries (income is negative)
 */
mwmv.core.total_expense = (function mwmv$core$total_expense(entries){
return mwmv.core.round_cents.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),entries))));
});
/**
 * The total expense of entries in yearmonth
 */
mwmv.core.total_expense_for_month = (function mwmv$core$total_expense_for_month(entries,yearmonth){
return mwmv.core.total_expense.call(null,cljs.core.filter.call(null,(function (p1__21885_SHARP_){
return cljs.core._EQ_.call(null,yearmonth,mwmv.core.get_yearmonth.call(null,p1__21885_SHARP_));
}),entries));
});
/**
 * Total expenses for every month in timespan
 */
mwmv.core.total_expense_per_month = (function mwmv$core$total_expense_per_month(entries,timespan){
return cljs.core.map.call(null,cljs.core.partial.call(null,mwmv.core.total_expense_for_month,entries),timespan);
});
/**
 * Creates a sequence of columns
 */
mwmv.core.columns = (function mwmv$core$columns(entries,timespan){
return cljs.core.map.call(null,(function (p__21888){
var vec__21889 = p__21888;
var category = cljs.core.nth.call(null,vec__21889,(0),null);
var entries__$1 = cljs.core.nth.call(null,vec__21889,(1),null);
return cljs.core.cons.call(null,category,mwmv.core.total_expense_per_month.call(null,entries__$1,timespan));
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",-593092832),entries));
});
mwmv.core.chart_element_selector = "#chart";
mwmv.core.file_input_element = document.getElementById("csv");
mwmv.core.file_reader = (new FileReader());
/**
 * Create the JavaScript structure that c3 needs to render a line graph
 */
mwmv.core.generate_line_chart = (function mwmv$core$generate_line_chart(var_args){
var args21890 = [];
var len__17364__auto___21893 = arguments.length;
var i__17365__auto___21894 = (0);
while(true){
if((i__17365__auto___21894 < len__17364__auto___21893)){
args21890.push((arguments[i__17365__auto___21894]));

var G__21895 = (i__17365__auto___21894 + (1));
i__17365__auto___21894 = G__21895;
continue;
} else {
}
break;
}

var G__21892 = args21890.length;
switch (G__21892) {
case 1:
return mwmv.core.generate_line_chart.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mwmv.core.generate_line_chart.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21890.length)].join('')));

}
});

mwmv.core.generate_line_chart.cljs$core$IFn$_invoke$arity$1 = (function (entries){
return mwmv.core.generate_line_chart.call(null,entries,mwmv.core.get_timespan.call(null,entries));
});

mwmv.core.generate_line_chart.cljs$core$IFn$_invoke$arity$2 = (function (entries,timespan){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindto","bindto",583512213),mwmv.core.chart_element_selector,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),mwmv.core.columns.call(null,entries,timespan)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"category",new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.map.call(null,mwmv.core.yearmonth__GT_str,timespan)], null)], null)], null));
});

mwmv.core.generate_line_chart.cljs$lang$maxFixedArity = 2;
/**
 * Render the chart in the dom
 */
mwmv.core.render_chart = (function mwmv$core$render_chart(chart){
return c3.generate(chart);
});
mwmv.core.file_reader.addEventListener("load",(function (){
return mwmv.core.render_chart.call(null,mwmv.core.generate_line_chart.call(null,mwmv.core.parse_csv.call(null,mwmv.core.file_reader.result)));
}));
mwmv.core.file_input_element.addEventListener("change",(function (e){
var file = (mwmv.core.file_input_element.files[(0)]);
return mwmv.core.file_reader.readAsText(file);
}));

//# sourceMappingURL=core.js.map?rel=1444562456752