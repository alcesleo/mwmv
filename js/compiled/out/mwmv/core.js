// Compiled by ClojureScript 1.7.122 {}
goog.provide('mwmv.core');
goog.require('cljs.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
mwmv.core.parse_string = (function mwmv$core$parse_string(s){
return cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
});
mwmv.core.parse_date = (function mwmv$core$parse_date(date){
return (new Date(clojure.string.join.call(null,"-",cljs.core.reverse.call(null,clojure.string.split.call(null,date,/\//)))));
});
mwmv.core.parse_float = (function mwmv$core$parse_float(f){
return window.parseFloat(f);
});
mwmv.core.round_cents = (function mwmv$core$round_cents(f){
return (Math.round(((100) * f)) / (100));
});
mwmv.core.parse_row = (function mwmv$core$parse_row(row){
var columns = clojure.string.split.call(null,row,/,/);
var vec__19720 = columns;
var _ = cljs.core.nth.call(null,vec__19720,(0),null);
var date = cljs.core.nth.call(null,vec__19720,(1),null);
var category = cljs.core.nth.call(null,vec__19720,(2),null);
var description = cljs.core.nth.call(null,vec__19720,(3),null);
var ___$1 = cljs.core.nth.call(null,vec__19720,(4),null);
var ___$2 = cljs.core.nth.call(null,vec__19720,(5),null);
var ___$3 = cljs.core.nth.call(null,vec__19720,(6),null);
var ___$4 = cljs.core.nth.call(null,vec__19720,(7),null);
var ___$5 = cljs.core.nth.call(null,vec__19720,(8),null);
var ___$6 = cljs.core.nth.call(null,vec__19720,(9),null);
var ___$7 = cljs.core.nth.call(null,vec__19720,(10),null);
var amount = cljs.core.nth.call(null,vec__19720,(11),null);
var ___$8 = cljs.core.nth.call(null,vec__19720,(12),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"date","date",-1463434462),mwmv.core.parse_date.call(null,date),new cljs.core.Keyword(null,"category","category",-593092832),mwmv.core.parse_string.call(null,category),new cljs.core.Keyword(null,"description","description",-1428560544),mwmv.core.parse_string.call(null,description),new cljs.core.Keyword(null,"amount","amount",364489504),mwmv.core.parse_float.call(null,amount)], null);
});
mwmv.core.parse_csv = (function mwmv$core$parse_csv(csv){
return cljs.core.map.call(null,mwmv.core.parse_row,cljs.core.rest.call(null,clojure.string.split_lines.call(null,csv)));
});
/**
 * Returns a vector like [2015 2] from a date object in Feb 2015
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
mwmv.core.yearmonth__GT_str = (function mwmv$core$yearmonth__GT_str(p__19721){
var vec__19723 = p__19721;
var year = cljs.core.nth.call(null,vec__19723,(0),null);
var month = cljs.core.nth.call(null,vec__19723,(1),null);
var months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mars","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
return [cljs.core.str(months.call(null,month)),cljs.core.str(" "),cljs.core.str(year)].join('');
});
/**
 * Returns a timespan covering exactly the provided entries
 */
mwmv.core.get_timespan = (function mwmv$core$get_timespan(entries){
return cljs.core.sort.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,mwmv.core.yearmonth,new cljs.core.Keyword(null,"date","date",-1463434462)),entries)));
});
/**
 * Total expenses for every month in timespan
 */
mwmv.core.total_per_month = (function mwmv$core$total_per_month(entries,timespan){
return cljs.core.map.call(null,(function (yearmonth){
return mwmv.core.round_cents.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),cljs.core.map.call(null,cljs.core._,cljs.core.map.call(null,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.filter.call(null,(function (p1__19724_SHARP_){
return cljs.core._EQ_.call(null,yearmonth,mwmv.core.get_yearmonth.call(null,p1__19724_SHARP_));
}),entries)))));
}),timespan);
});
/**
 * Creates a sequence of columns
 */
mwmv.core.columns = (function mwmv$core$columns(entries,timespan){
return cljs.core.map.call(null,(function (p__19727){
var vec__19728 = p__19727;
var category = cljs.core.nth.call(null,vec__19728,(0),null);
var entries__$1 = cljs.core.nth.call(null,vec__19728,(1),null);
return cljs.core.cons.call(null,category,mwmv.core.total_per_month.call(null,entries__$1,timespan));
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"category","category",-593092832),entries));
});
mwmv.core.chart_element_selector = "#chart";
mwmv.core.generate_line_chart = (function mwmv$core$generate_line_chart(entries,timespan){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bindto","bindto",583512213),mwmv.core.chart_element_selector,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),mwmv.core.columns.call(null,entries,timespan)], null),new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"category",new cljs.core.Keyword(null,"categories","categories",178386610),cljs.core.map.call(null,mwmv.core.yearmonth__GT_str,timespan)], null)], null)], null));
});
mwmv.core.render_chart = (function mwmv$core$render_chart(chart){
return c3.generate(chart);
});
mwmv.core.file_input = document.getElementById("csv");
mwmv.core.reader = (new FileReader());
mwmv.core.reader.addEventListener("load",(function (){
return mwmv.core.render_chart.call(null,(function (){var entries = mwmv.core.parse_csv.call(null,mwmv.core.reader.result);
return mwmv.core.generate_line_chart.call(null,entries,mwmv.core.get_timespan.call(null,entries));
})());
}));
mwmv.core.file_input.addEventListener("change",(function (e){
var file = (mwmv.core.file_input.files[(0)]);
cljs.core.println.call(null,file.name);

return mwmv.core.reader.readAsText(file);
}));

//# sourceMappingURL=core.js.map?rel=1444479678193