goog.provide('himera.client.repl');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
himera.client.repl.map__GT_js = (function map__GT_js(m){
var out = {};
var seq__3520_3526 = cljs.core.seq.call(null,m);
var chunk__3521_3527 = null;
var count__3522_3528 = 0;
var i__3523_3529 = 0;
while(true){
if((i__3523_3529 < count__3522_3528))
{var vec__3524_3530 = cljs.core._nth.call(null,chunk__3521_3527,i__3523_3529);
var k_3531 = cljs.core.nth.call(null,vec__3524_3530,0,null);
var v_3532 = cljs.core.nth.call(null,vec__3524_3530,1,null);
(out[cljs.core.name.call(null,k_3531)] = v_3532);
{
var G__3533 = seq__3520_3526;
var G__3534 = chunk__3521_3527;
var G__3535 = count__3522_3528;
var G__3536 = (i__3523_3529 + 1);
seq__3520_3526 = G__3533;
chunk__3521_3527 = G__3534;
count__3522_3528 = G__3535;
i__3523_3529 = G__3536;
continue;
}
} else
{var temp__4092__auto___3537 = cljs.core.seq.call(null,seq__3520_3526);
if(temp__4092__auto___3537)
{var seq__3520_3538__$1 = temp__4092__auto___3537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3520_3538__$1))
{var c__3039__auto___3539 = cljs.core.chunk_first.call(null,seq__3520_3538__$1);
{
var G__3540 = cljs.core.chunk_rest.call(null,seq__3520_3538__$1);
var G__3541 = c__3039__auto___3539;
var G__3542 = cljs.core.count.call(null,c__3039__auto___3539);
var G__3543 = 0;
seq__3520_3526 = G__3540;
chunk__3521_3527 = G__3541;
count__3522_3528 = G__3542;
i__3523_3529 = G__3543;
continue;
}
} else
{var vec__3525_3544 = cljs.core.first.call(null,seq__3520_3538__$1);
var k_3545 = cljs.core.nth.call(null,vec__3525_3544,0,null);
var v_3546 = cljs.core.nth.call(null,vec__3525_3544,1,null);
(out[cljs.core.name.call(null,k_3545)] = v_3546);
{
var G__3547 = cljs.core.next.call(null,seq__3520_3538__$1);
var G__3548 = null;
var G__3549 = 0;
var G__3550 = 0;
seq__3520_3526 = G__3547;
chunk__3521_3527 = G__3548;
count__3522_3528 = G__3549;
i__3523_3529 = G__3550;
continue;
}
}
} else
{}
}
break;
}
return out;
});
himera.client.repl.go_compile = (function go_compile(code){
var data = cljs.core.atom.call(null,null);
var params = himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:url","/compile","\uFDD0:data",[cljs.core.str("{:expr "),cljs.core.str(code),cljs.core.str("}")].join(''),"\uFDD0:contentType","application/clojure; charset=utf-8","\uFDD0:async",false,"\uFDD0:type","POST","\uFDD0:dataType","text","\uFDD0:success",((function (data){
return (function (p1__3551_SHARP_){
return cljs.core.reset_BANG_.call(null,data,cljs.reader.read_string.call(null,p1__3551_SHARP_));
});})(data))
], true));
jQuery.ajax(params);
return cljs.core.deref.call(null,data);
});
himera.client.repl.on_validate = (function on_validate(input){
return !(cljs.core.empty_QMARK_.call(null,input));
});
himera.client.repl.build_msg = (function build_msg(title,msg,klass){
return [himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:msg",[cljs.core.str(title),cljs.core.str(msg)].join(''),"\uFDD0:className",klass], true))];
});
himera.client.repl.starts_with_QMARK_ = (function starts_with_QMARK_(o,s){
return cljs.core._EQ_.call(null,clojure.string.trim.call(null,s).slice(0,o.length),o);
});
himera.client.repl.is_comment_QMARK_ = (function is_comment_QMARK_(p1__3552_SHARP_){
return himera.client.repl.starts_with_QMARK_.call(null,";",p1__3552_SHARP_);
});
himera.client.repl.on_handle = (function on_handle(line,report){
if(cljs.core.truth_(himera.client.repl.is_comment_QMARK_.call(null,line)))
{return himera.client.repl.build_msg.call(null,"","","jquery-console-message-value");
} else
{var input = jQuery.trim(line);
var compiled = himera.client.repl.go_compile.call(null,input);
var temp__4090__auto__ = (function (){var and__3941__auto__ = compiled;
if(cljs.core.truth_(and__3941__auto__))
{return (new cljs.core.Keyword("\uFDD0:error")).call(null,compiled);
} else
{return and__3941__auto__;
}
})();
if(cljs.core.truth_(temp__4090__auto__))
{var err = temp__4090__auto__;
return himera.client.repl.build_msg.call(null,"Compilation error: ",err,"jquery-console-message-error");
} else
{try{return himera.client.repl.build_msg.call(null,"",cljs.core.pr_str.call(null,eval((new cljs.core.Keyword("\uFDD0:js")).call(null,compiled))),"jquery-console-message-value");
}catch (e3554){if((e3554 instanceof Error))
{var e = e3554;
return himera.client.repl.build_msg.call(null,"Compilation error: ",e,"jquery-console-message-error");
} else
{if("\uFDD0:else")
{throw e3554;
} else
{return null;
}
}
}}
}
});
himera.client.repl.go = (function go(){
return jQuery(document).ready((function (){
return controller = (function (){var G__3556 = jQuery("#console");
G__3556.console(himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:welcomeMessage","Himera REPL v0.2.6","\uFDD0:promptLabel","cljs.user> ","\uFDD0:commandValidate",himera.client.repl.on_validate,"\uFDD0:commandHandle",himera.client.repl.on_handle,"\uFDD0:autofocus",true,"\uFDD0:animateScroll",true,"\uFDD0:promptHistory",true], true)));
return G__3556;
})();
}));
});
goog.exportSymbol('himera.client.repl.go', himera.client.repl.go);
