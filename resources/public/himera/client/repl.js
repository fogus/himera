goog.provide('himera.client.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.zip');
himera.client.repl.map__GT_js = (function map__GT_js(m){
var out__2980 = cljs.core.js_obj.call(null);

var G__2981__2982 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__2981__2982))
{var G__2984__2986 = cljs.core.first.call(null,G__2981__2982);
var vec__2985__2987 = G__2984__2986;
var k__2988 = cljs.core.nth.call(null,vec__2985__2987,0,null);
var v__2989 = cljs.core.nth.call(null,vec__2985__2987,1,null);
var G__2981__2990 = G__2981__2982;

var G__2984__2991 = G__2984__2986;
var G__2981__2992 = G__2981__2990;

while(true){
var vec__2993__2994 = G__2984__2991;
var k__2995 = cljs.core.nth.call(null,vec__2993__2994,0,null);
var v__2996 = cljs.core.nth.call(null,vec__2993__2994,1,null);
var G__2981__2997 = G__2981__2992;

(out__2980[cljs.core.name.call(null,k__2995)] = v__2996);
var temp__3698__auto____2998 = cljs.core.next.call(null,G__2981__2997);

if(cljs.core.truth_(temp__3698__auto____2998))
{var G__2981__2999 = temp__3698__auto____2998;

{
var G__3000 = cljs.core.first.call(null,G__2981__2999);
var G__3001 = G__2981__2999;
G__2984__2991 = G__3000;
G__2981__2992 = G__3001;
continue;
}
} else
{}
break;
}
} else
{}
return out__2980;
});
himera.client.repl.go_compile = (function go_compile(code){
var data__3002 = cljs.core.atom.call(null,null);
var params__3003 = himera.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'url","﷐'data","﷐'contentType","﷐'async","﷐'type","﷐'dataType","﷐'success"],{"﷐'url":"/compile","﷐'data":cljs.core.str.call(null,"{:expr ",code,"}"),"﷐'contentType":"application/clojure; charset=utf-8","﷐'async":false,"﷐'type":"POST","﷐'dataType":"text","﷐'success":(function (p1__2979_SHARP_){
return cljs.core.reset_BANG_.call(null,data__3002,cljs.reader.read_string.call(null,p1__2979_SHARP_));
})}));

jQuery.ajax(params__3003);
return cljs.core.deref.call(null,data__3002);
});
himera.client.repl.on_validate = (function on_validate(input){
return cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,input));
});
himera.client.repl.build_msg = (function build_msg(title,msg,klass){
return cljs.core.array.call(null,himera.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'msg","﷐'className"],{"﷐'msg":cljs.core.str.call(null,title,msg),"﷐'className":klass})));
});
himera.client.repl.starts_with_QMARK_ = (function starts_with_QMARK_(o,s){
return cljs.core._EQ_.call(null,clojure.string.trim.call(null,s).slice(0,o.length),o);
});
himera.client.repl.is_comment_QMARK_ = (function is_comment_QMARK_(p1__3004_SHARP_){
return himera.client.repl.starts_with_QMARK_.call(null,";",p1__3004_SHARP_);
});
himera.client.repl.on_handle = (function on_handle(line,report){
if(cljs.core.truth_(himera.client.repl.is_comment_QMARK_.call(null,line)))
{return himera.client.repl.build_msg.call(null,"","","jquery-console-message-value");
} else
{var input__3005 = jQuery.trim(line);
var compiled__3006 = himera.client.repl.go_compile.call(null,input__3005);

var temp__3695__auto____3008 = (function (){var and__3546__auto____3007 = compiled__3006;

if(cljs.core.truth_(and__3546__auto____3007))
{return "﷐'error".call(null,compiled__3006);
} else
{return and__3546__auto____3007;
}
})();

if(cljs.core.truth_(temp__3695__auto____3008))
{var err__3009 = temp__3695__auto____3008;

return himera.client.repl.build_msg.call(null,"Compilation error: ",err__3009,"jquery-console-message-error");
} else
{try{return himera.client.repl.build_msg.call(null,"",cljs.core.pr_str.call(null,eval.call(null,"﷐'js".call(null,compiled__3006))),"jquery-console-message-value");
}catch (e3010){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e3010)))
{var e__3011 = e3010;

return himera.client.repl.build_msg.call(null,"Compilation error: ",e__3011,"jquery-console-message-error");
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3010;
} else
{return null;
}
}
}}
}
});
himera.client.repl.go = (function go(){
return jQuery.call(null,document).ready((function (){
return controller = (function (){var G__3012__3013 = jQuery.call(null,"#console");

G__3012__3013.console(himera.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'welcomeMessage","﷐'promptLabel","﷐'commandValidate","﷐'commandHandle","﷐'autofocus","﷐'animateScroll","﷐'promptHistory"],{"﷐'welcomeMessage":"Himera REPL v0.1.5","﷐'promptLabel":"cljs.user> ","﷐'commandValidate":himera.client.repl.on_validate,"﷐'commandHandle":himera.client.repl.on_handle,"﷐'autofocus":true,"﷐'animateScroll":true,"﷐'promptHistory":true})));
return G__3012__3013;
})();
}));
});
goog.exportSymbol('himera.client.repl.go', himera.client.repl.go);
