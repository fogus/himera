// Compiled by ClojureScript 0.0-3211 {}
goog.provide('himera.client.repl');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cljs.reader');
himera.client.repl.map__GT_js = (function himera$client$repl$map__GT_js(m){
var out = (function (){var obj6438 = {};
return obj6438;
})();
var seq__6439_6445 = cljs.core.seq.call(null,m);
var chunk__6440_6446 = null;
var count__6441_6447 = (0);
var i__6442_6448 = (0);
while(true){
if((i__6442_6448 < count__6441_6447)){
var vec__6443_6449 = cljs.core._nth.call(null,chunk__6440_6446,i__6442_6448);
var k_6450 = cljs.core.nth.call(null,vec__6443_6449,(0),null);
var v_6451 = cljs.core.nth.call(null,vec__6443_6449,(1),null);
(out[cljs.core.name.call(null,k_6450)] = v_6451);

var G__6452 = seq__6439_6445;
var G__6453 = chunk__6440_6446;
var G__6454 = count__6441_6447;
var G__6455 = (i__6442_6448 + (1));
seq__6439_6445 = G__6452;
chunk__6440_6446 = G__6453;
count__6441_6447 = G__6454;
i__6442_6448 = G__6455;
continue;
} else {
var temp__4404__auto___6456 = cljs.core.seq.call(null,seq__6439_6445);
if(temp__4404__auto___6456){
var seq__6439_6457__$1 = temp__4404__auto___6456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6439_6457__$1)){
var c__5056__auto___6458 = cljs.core.chunk_first.call(null,seq__6439_6457__$1);
var G__6459 = cljs.core.chunk_rest.call(null,seq__6439_6457__$1);
var G__6460 = c__5056__auto___6458;
var G__6461 = cljs.core.count.call(null,c__5056__auto___6458);
var G__6462 = (0);
seq__6439_6445 = G__6459;
chunk__6440_6446 = G__6460;
count__6441_6447 = G__6461;
i__6442_6448 = G__6462;
continue;
} else {
var vec__6444_6463 = cljs.core.first.call(null,seq__6439_6457__$1);
var k_6464 = cljs.core.nth.call(null,vec__6444_6463,(0),null);
var v_6465 = cljs.core.nth.call(null,vec__6444_6463,(1),null);
(out[cljs.core.name.call(null,k_6464)] = v_6465);

var G__6466 = cljs.core.next.call(null,seq__6439_6457__$1);
var G__6467 = null;
var G__6468 = (0);
var G__6469 = (0);
seq__6439_6445 = G__6466;
chunk__6440_6446 = G__6467;
count__6441_6447 = G__6468;
i__6442_6448 = G__6469;
continue;
}
} else {
}
}
break;
}

return out;
});
himera.client.repl.go_compile = (function himera$client$repl$go_compile(code){
var data = cljs.core.atom.call(null,null);
var params = himera.client.repl.map__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"url","url",276297046),"/compile",new cljs.core.Keyword(null,"data","data",-232669377),[cljs.core.str("{:expr "),cljs.core.str(code),cljs.core.str("}")].join(''),new cljs.core.Keyword(null,"contentType","contentType",-1462509576),"application/clojure; charset=utf-8",new cljs.core.Keyword(null,"async","async",1050769601),false,new cljs.core.Keyword(null,"type","type",1174270348),"POST",new cljs.core.Keyword(null,"dataType","dataType",1069893619),"text",new cljs.core.Keyword(null,"success","success",1890645906),((function (data){
return (function (p1__6470_SHARP_){
return cljs.core.reset_BANG_.call(null,data,cljs.reader.read_string.call(null,p1__6470_SHARP_));
});})(data))
], null));
jQuery.ajax(params);

return cljs.core.deref.call(null,data);
});
himera.client.repl.on_validate = (function himera$client$repl$on_validate(input){
return !(cljs.core.empty_QMARK_.call(null,input));
});
himera.client.repl.build_msg = (function himera$client$repl$build_msg(title,msg,klass){
return [himera.client.repl.map__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"msg","msg",-1386103444),[cljs.core.str(title),cljs.core.str(msg)].join(''),new cljs.core.Keyword(null,"className","className",-1983287057),klass], null))];
});
himera.client.repl.starts_with_QMARK_ = (function himera$client$repl$starts_with_QMARK_(o,s){
return cljs.core._EQ_.call(null,clojure.string.trim.call(null,s).slice((0),o.length),o);
});
himera.client.repl.is_comment_QMARK_ = (function himera$client$repl$is_comment_QMARK_(p1__6471_SHARP_){
return himera.client.repl.starts_with_QMARK_.call(null,";",p1__6471_SHARP_);
});
himera.client.repl.on_handle = (function himera$client$repl$on_handle(line,report){
if(cljs.core.truth_(himera.client.repl.is_comment_QMARK_.call(null,line))){
return himera.client.repl.build_msg.call(null,"","","jquery-console-message-value");
} else {
var input = jQuery.trim(line);
var compiled = himera.client.repl.go_compile.call(null,input);
var temp__4402__auto__ = (function (){var and__4259__auto__ = compiled;
if(cljs.core.truth_(and__4259__auto__)){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(compiled);
} else {
return and__4259__auto__;
}
})();
if(cljs.core.truth_(temp__4402__auto__)){
var err = temp__4402__auto__;
return himera.client.repl.build_msg.call(null,"Compilation error: ",err,"jquery-console-message-error");
} else {
try{return himera.client.repl.build_msg.call(null,"",cljs.core.pr_str.call(null,eval(new cljs.core.Keyword(null,"js","js",1768080579).cljs$core$IFn$_invoke$arity$1(compiled))),"jquery-console-message-value");
}catch (e6473){if((e6473 instanceof Error)){
var e = e6473;
return himera.client.repl.build_msg.call(null,"Compilation error: ",e,"jquery-console-message-error");
} else {
throw e6473;

}
}}
}
});
himera.client.repl.go = (function himera$client$repl$go(){
return jQuery(document).ready((function (){
return controller = (function (){var G__6475 = jQuery("#console");
G__6475.console(himera.client.repl.map__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"welcomeMessage","welcomeMessage",477308394),"Himera REPL v0.2.6",new cljs.core.Keyword(null,"promptLabel","promptLabel",-1453236022),"cljs.user> ",new cljs.core.Keyword(null,"commandValidate","commandValidate",358275692),himera.client.repl.on_validate,new cljs.core.Keyword(null,"commandHandle","commandHandle",949526675),himera.client.repl.on_handle,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"animateScroll","animateScroll",-1082623181),true,new cljs.core.Keyword(null,"promptHistory","promptHistory",1167665660),true], null)));

return G__6475;
})();
}));
});
goog.exportSymbol('himera.client.repl.go', himera.client.repl.go);
