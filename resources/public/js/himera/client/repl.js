goog.provide('himera.client.repl');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
himera.client.repl.map__GT_js = (function map__GT_js(m){
var out = {};
var seq__3518_3524 = cljs.core.seq.call(null,m);
var chunk__3519_3525 = null;
var count__3520_3526 = 0;
var i__3521_3527 = 0;
while(true){
if((i__3521_3527 < count__3520_3526))
{var vec__3522_3528 = cljs.core._nth.call(null,chunk__3519_3525,i__3521_3527);
var k_3529 = cljs.core.nth.call(null,vec__3522_3528,0,null);
var v_3530 = cljs.core.nth.call(null,vec__3522_3528,1,null);
(out[cljs.core.name.call(null,k_3529)] = v_3530);
{
var G__3531 = seq__3518_3524;
var G__3532 = chunk__3519_3525;
var G__3533 = count__3520_3526;
var G__3534 = (i__3521_3527 + 1);
seq__3518_3524 = G__3531;
chunk__3519_3525 = G__3532;
count__3520_3526 = G__3533;
i__3521_3527 = G__3534;
continue;
}
} else
{var temp__4092__auto___3535 = cljs.core.seq.call(null,seq__3518_3524);
if(temp__4092__auto___3535)
{var seq__3518_3536__$1 = temp__4092__auto___3535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3518_3536__$1))
{var c__3037__auto___3537 = cljs.core.chunk_first.call(null,seq__3518_3536__$1);
{
var G__3538 = cljs.core.chunk_rest.call(null,seq__3518_3536__$1);
var G__3539 = c__3037__auto___3537;
var G__3540 = cljs.core.count.call(null,c__3037__auto___3537);
var G__3541 = 0;
seq__3518_3524 = G__3538;
chunk__3519_3525 = G__3539;
count__3520_3526 = G__3540;
i__3521_3527 = G__3541;
continue;
}
} else
{var vec__3523_3542 = cljs.core.first.call(null,seq__3518_3536__$1);
var k_3543 = cljs.core.nth.call(null,vec__3523_3542,0,null);
var v_3544 = cljs.core.nth.call(null,vec__3523_3542,1,null);
(out[cljs.core.name.call(null,k_3543)] = v_3544);
{
var G__3545 = cljs.core.next.call(null,seq__3518_3536__$1);
var G__3546 = null;
var G__3547 = 0;
var G__3548 = 0;
seq__3518_3524 = G__3545;
chunk__3519_3525 = G__3546;
count__3520_3526 = G__3547;
i__3521_3527 = G__3548;
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
return (function (p1__3549_SHARP_){
return cljs.core.reset_BANG_.call(null,data,cljs.reader.read_string.call(null,p1__3549_SHARP_));
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
himera.client.repl.is_comment_QMARK_ = (function is_comment_QMARK_(p1__3550_SHARP_){
return himera.client.repl.starts_with_QMARK_.call(null,";",p1__3550_SHARP_);
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
}catch (e3552){if((e3552 instanceof Error))
{var e = e3552;
return himera.client.repl.build_msg.call(null,"Compilation error: ",e,"jquery-console-message-error");
} else
{if("\uFDD0:else")
{throw e3552;
} else
{return null;
}
}
}}
}
});
himera.client.repl.go = (function go(){
return jQuery(document).ready((function (){
return controller = (function (){var G__3554 = jQuery("#console");
G__3554.console(himera.client.repl.map__GT_js.call(null,cljs.core.PersistentArrayMap.fromArray(["\uFDD0:welcomeMessage","Himera REPL v0.1.5","\uFDD0:promptLabel","cljs.user> ","\uFDD0:commandValidate",himera.client.repl.on_validate,"\uFDD0:commandHandle",himera.client.repl.on_handle,"\uFDD0:autofocus",true,"\uFDD0:animateScroll",true,"\uFDD0:promptHistory",true], true)));
return G__3554;
})();
}));
});
goog.exportSymbol('himera.client.repl.go', himera.client.repl.go);
