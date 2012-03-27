goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3014 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3014))
{return or__3548__auto____3014;
} else
{var or__3548__auto____3015 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3015))
{return or__3548__auto____3015;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__3079 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3016 = this$;

if(cljs.core.truth_(and__3546__auto____3016))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3016;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3017 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3017))
{return or__3548__auto____3017;
} else
{var or__3548__auto____3018 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3018))
{return or__3548__auto____3018;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3080 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3019 = this$;

if(cljs.core.truth_(and__3546__auto____3019))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3019;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3020 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3020))
{return or__3548__auto____3020;
} else
{var or__3548__auto____3021 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3021))
{return or__3548__auto____3021;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3081 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3022 = this$;

if(cljs.core.truth_(and__3546__auto____3022))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3022;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3023 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3023))
{return or__3548__auto____3023;
} else
{var or__3548__auto____3024 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3024))
{return or__3548__auto____3024;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3082 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3025 = this$;

if(cljs.core.truth_(and__3546__auto____3025))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3025;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3026 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3026))
{return or__3548__auto____3026;
} else
{var or__3548__auto____3027 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3027))
{return or__3548__auto____3027;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3083 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3028 = this$;

if(cljs.core.truth_(and__3546__auto____3028))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3028;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3029 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{var or__3548__auto____3030 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3084 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3031 = this$;

if(cljs.core.truth_(and__3546__auto____3031))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3031;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3032 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{var or__3548__auto____3033 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3085 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3034 = this$;

if(cljs.core.truth_(and__3546__auto____3034))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3034;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3035 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3035))
{return or__3548__auto____3035;
} else
{var or__3548__auto____3036 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3036))
{return or__3548__auto____3036;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3086 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3037 = this$;

if(cljs.core.truth_(and__3546__auto____3037))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3037;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3038 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3038))
{return or__3548__auto____3038;
} else
{var or__3548__auto____3039 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3039))
{return or__3548__auto____3039;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3087 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3040 = this$;

if(cljs.core.truth_(and__3546__auto____3040))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3040;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3041 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3041))
{return or__3548__auto____3041;
} else
{var or__3548__auto____3042 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3088 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3043 = this$;

if(cljs.core.truth_(and__3546__auto____3043))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3043;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3044 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
} else
{var or__3548__auto____3045 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3089 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3046 = this$;

if(cljs.core.truth_(and__3546__auto____3046))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3046;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3047 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{var or__3548__auto____3048 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3048))
{return or__3548__auto____3048;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3090 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3049 = this$;

if(cljs.core.truth_(and__3546__auto____3049))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3049;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3050 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3050))
{return or__3548__auto____3050;
} else
{var or__3548__auto____3051 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3091 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3052 = this$;

if(cljs.core.truth_(and__3546__auto____3052))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3052;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3053 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{var or__3548__auto____3054 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3092 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3055 = this$;

if(cljs.core.truth_(and__3546__auto____3055))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3055;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3056 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
} else
{var or__3548__auto____3057 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3093 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3058 = this$;

if(cljs.core.truth_(and__3546__auto____3058))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3058;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3059 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{var or__3548__auto____3060 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3094 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3061 = this$;

if(cljs.core.truth_(and__3546__auto____3061))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3061;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3062 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{var or__3548__auto____3063 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3095 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3064 = this$;

if(cljs.core.truth_(and__3546__auto____3064))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3064;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3065 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
} else
{var or__3548__auto____3066 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3096 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3067 = this$;

if(cljs.core.truth_(and__3546__auto____3067))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3067;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3068 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{var or__3548__auto____3069 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3069))
{return or__3548__auto____3069;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3097 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3070 = this$;

if(cljs.core.truth_(and__3546__auto____3070))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3070;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3071 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
} else
{var or__3548__auto____3072 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3072))
{return or__3548__auto____3072;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3098 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3073 = this$;

if(cljs.core.truth_(and__3546__auto____3073))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3073;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3074 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3074))
{return or__3548__auto____3074;
} else
{var or__3548__auto____3075 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3075))
{return or__3548__auto____3075;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3099 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3076 = this$;

if(cljs.core.truth_(and__3546__auto____3076))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3076;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3077 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3077))
{return or__3548__auto____3077;
} else
{var or__3548__auto____3078 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__3079.call(this,this$);
case  2 :
return _invoke__3080.call(this,this$,a);
case  3 :
return _invoke__3081.call(this,this$,a,b);
case  4 :
return _invoke__3082.call(this,this$,a,b,c);
case  5 :
return _invoke__3083.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3084.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3085.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3086.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3087.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3088.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3089.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3090.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3091.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3092.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3093.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3094.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3095.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3096.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3097.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3098.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3099.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3101 = coll;

if(cljs.core.truth_(and__3546__auto____3101))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3101;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3102 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3102))
{return or__3548__auto____3102;
} else
{var or__3548__auto____3103 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3103))
{return or__3548__auto____3103;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3104 = coll;

if(cljs.core.truth_(and__3546__auto____3104))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3104;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3105 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3105))
{return or__3548__auto____3105;
} else
{var or__3548__auto____3106 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3106))
{return or__3548__auto____3106;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3107 = coll;

if(cljs.core.truth_(and__3546__auto____3107))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3107;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3108 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3108))
{return or__3548__auto____3108;
} else
{var or__3548__auto____3109 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3116 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3110 = coll;

if(cljs.core.truth_(and__3546__auto____3110))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3110;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3111 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3111))
{return or__3548__auto____3111;
} else
{var or__3548__auto____3112 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3117 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3113 = coll;

if(cljs.core.truth_(and__3546__auto____3113))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3113;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3114 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3114))
{return or__3548__auto____3114;
} else
{var or__3548__auto____3115 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3116.call(this,coll,n);
case  3 :
return _nth__3117.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3119 = coll;

if(cljs.core.truth_(and__3546__auto____3119))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3119;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3120 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3122 = coll;

if(cljs.core.truth_(and__3546__auto____3122))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3122;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3123 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{var or__3548__auto____3124 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3131 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3125 = o;

if(cljs.core.truth_(and__3546__auto____3125))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3125;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3126 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3132 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3128 = o;

if(cljs.core.truth_(and__3546__auto____3128))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3128;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3129 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3129))
{return or__3548__auto____3129;
} else
{var or__3548__auto____3130 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3131.call(this,o,k);
case  3 :
return _lookup__3132.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3134 = coll;

if(cljs.core.truth_(and__3546__auto____3134))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3134;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3135 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var or__3548__auto____3136 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3137 = coll;

if(cljs.core.truth_(and__3546__auto____3137))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3137;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3138 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3140 = coll;

if(cljs.core.truth_(and__3546__auto____3140))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3140;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3141 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3143 = coll;

if(cljs.core.truth_(and__3546__auto____3143))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3143;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3144 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3146 = coll;

if(cljs.core.truth_(and__3546__auto____3146))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3146;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3147 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{var or__3548__auto____3148 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3149 = coll;

if(cljs.core.truth_(and__3546__auto____3149))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3149;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3150 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3152 = coll;

if(cljs.core.truth_(and__3546__auto____3152))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3152;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3153 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3155 = o;

if(cljs.core.truth_(and__3546__auto____3155))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3155;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3156 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3158 = o;

if(cljs.core.truth_(and__3546__auto____3158))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3158;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3159 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{var or__3548__auto____3160 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3161 = o;

if(cljs.core.truth_(and__3546__auto____3161))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3161;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3162 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{var or__3548__auto____3163 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3164 = o;

if(cljs.core.truth_(and__3546__auto____3164))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3164;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3165 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var or__3548__auto____3166 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3173 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3167 = coll;

if(cljs.core.truth_(and__3546__auto____3167))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3167;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3168 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var or__3548__auto____3169 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3174 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3170 = coll;

if(cljs.core.truth_(and__3546__auto____3170))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3170;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3171 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{var or__3548__auto____3172 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3173.call(this,coll,f);
case  3 :
return _reduce__3174.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3176 = o;

if(cljs.core.truth_(and__3546__auto____3176))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3176;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3177 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3179 = o;

if(cljs.core.truth_(and__3546__auto____3179))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3179;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3180 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3182 = o;

if(cljs.core.truth_(and__3546__auto____3182))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3182;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3183 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3185 = o;

if(cljs.core.truth_(and__3546__auto____3185))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3185;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3186 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3188 = d;

if(cljs.core.truth_(and__3546__auto____3188))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3188;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3189 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3189))
{return or__3548__auto____3189;
} else
{var or__3548__auto____3190 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3190))
{return or__3548__auto____3190;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3191 = this$;

if(cljs.core.truth_(and__3546__auto____3191))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3191;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3192 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3194 = this$;

if(cljs.core.truth_(and__3546__auto____3194))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3194;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3195 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3197 = this$;

if(cljs.core.truth_(and__3546__auto____3197))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3197;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3198 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3200 = null;
var G__3200__3201 = (function (o,k){
return null;
});
var G__3200__3202 = (function (o,k,not_found){
return not_found;
});
G__3200 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3200__3201.call(this,o,k);
case  3 :
return G__3200__3202.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3200;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3204 = null;
var G__3204__3205 = (function (_,f){
return f.call(null);
});
var G__3204__3206 = (function (_,f,start){
return start;
});
G__3204 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3204__3205.call(this,_,f);
case  3 :
return G__3204__3206.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3204;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3208 = null;
var G__3208__3209 = (function (_,n){
return null;
});
var G__3208__3210 = (function (_,n,not_found){
return not_found;
});
G__3208 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3208__3209.call(this,_,n);
case  3 :
return G__3208__3210.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3208;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3218 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3212 = cljs.core._nth.call(null,cicoll,0);
var n__3213 = 1;

while(true){
if(cljs.core.truth_((n__3213 < cljs.core._count.call(null,cicoll))))
{{
var G__3222 = f.call(null,val__3212,cljs.core._nth.call(null,cicoll,n__3213));
var G__3223 = (n__3213 + 1);
val__3212 = G__3222;
n__3213 = G__3223;
continue;
}
} else
{return val__3212;
}
break;
}
}
});
var ci_reduce__3219 = (function (cicoll,f,val){
var val__3214 = val;
var n__3215 = 0;

while(true){
if(cljs.core.truth_((n__3215 < cljs.core._count.call(null,cicoll))))
{{
var G__3224 = f.call(null,val__3214,cljs.core._nth.call(null,cicoll,n__3215));
var G__3225 = (n__3215 + 1);
val__3214 = G__3224;
n__3215 = G__3225;
continue;
}
} else
{return val__3214;
}
break;
}
});
var ci_reduce__3220 = (function (cicoll,f,val,idx){
var val__3216 = val;
var n__3217 = idx;

while(true){
if(cljs.core.truth_((n__3217 < cljs.core._count.call(null,cicoll))))
{{
var G__3226 = f.call(null,val__3216,cljs.core._nth.call(null,cicoll,n__3217));
var G__3227 = (n__3217 + 1);
val__3216 = G__3226;
n__3217 = G__3227;
continue;
}
} else
{return val__3216;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3218.call(this,cicoll,f);
case  3 :
return ci_reduce__3219.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3220.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3228 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3241 = null;
var G__3241__3242 = (function (_,f){
var this__3229 = this;
return cljs.core.ci_reduce.call(null,this__3229.a,f,(this__3229.a[this__3229.i]),(this__3229.i + 1));
});
var G__3241__3243 = (function (_,f,start){
var this__3230 = this;
return cljs.core.ci_reduce.call(null,this__3230.a,f,start,this__3230.i);
});
G__3241 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3241__3242.call(this,_,f);
case  3 :
return G__3241__3243.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3241;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3231 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3232 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3245 = null;
var G__3245__3246 = (function (coll,n){
var this__3233 = this;
var i__3234 = (n + this__3233.i);

if(cljs.core.truth_((i__3234 < this__3233.a.length)))
{return (this__3233.a[i__3234]);
} else
{return null;
}
});
var G__3245__3247 = (function (coll,n,not_found){
var this__3235 = this;
var i__3236 = (n + this__3235.i);

if(cljs.core.truth_((i__3236 < this__3235.a.length)))
{return (this__3235.a[i__3236]);
} else
{return not_found;
}
});
G__3245 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3245__3246.call(this,coll,n);
case  3 :
return G__3245__3247.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3245;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3237 = this;
return (this__3237.a.length - this__3237.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3238 = this;
return (this__3238.a[this__3238.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3239 = this;
if(cljs.core.truth_(((this__3239.i + 1) < this__3239.a.length)))
{return (new cljs.core.IndexedSeq(this__3239.a,(this__3239.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3240 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3249 = null;
var G__3249__3250 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3249__3251 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3249 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3249__3250.call(this,array,f);
case  3 :
return G__3249__3251.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3249;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3253 = null;
var G__3253__3254 = (function (array,k){
return (array[k]);
});
var G__3253__3255 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3253 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3253__3254.call(this,array,k);
case  3 :
return G__3253__3255.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3253;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3257 = null;
var G__3257__3258 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3257__3259 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3257 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3257__3258.call(this,array,n);
case  3 :
return G__3257__3259.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3257;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3261 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3261))
{var s__3262 = temp__3698__auto____3261;

return cljs.core._first.call(null,s__3262);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3263 = cljs.core.next.call(null,s);
s = G__3263;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3264 = cljs.core.seq.call(null,x);
var n__3265 = 0;

while(true){
if(cljs.core.truth_(s__3264))
{{
var G__3266 = cljs.core.next.call(null,s__3264);
var G__3267 = (n__3265 + 1);
s__3264 = G__3266;
n__3265 = G__3267;
continue;
}
} else
{return n__3265;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3268 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3269 = (function() { 
var G__3271__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3272 = conj.call(null,coll,x);
var G__3273 = cljs.core.first.call(null,xs);
var G__3274 = cljs.core.next.call(null,xs);
coll = G__3272;
x = G__3273;
xs = G__3274;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3271 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3271__delegate.call(this, coll, x, xs);
};
G__3271.cljs$lang$maxFixedArity = 2;
G__3271.cljs$lang$applyTo = (function (arglist__3275){
var coll = cljs.core.first(arglist__3275);
var x = cljs.core.first(cljs.core.next(arglist__3275));
var xs = cljs.core.rest(cljs.core.next(arglist__3275));
return G__3271__delegate.call(this, coll, x, xs);
});
return G__3271;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3268.call(this,coll,x);
default:
return conj__3269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3269.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3276 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3277 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3276.call(this,coll,n);
case  3 :
return nth__3277.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3279 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3280 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3279.call(this,o,k);
case  3 :
return get__3280.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3283 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3284 = (function() { 
var G__3286__delegate = function (coll,k,v,kvs){
while(true){
var ret__3282 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3287 = ret__3282;
var G__3288 = cljs.core.first.call(null,kvs);
var G__3289 = cljs.core.second.call(null,kvs);
var G__3290 = cljs.core.nnext.call(null,kvs);
coll = G__3287;
k = G__3288;
v = G__3289;
kvs = G__3290;
continue;
}
} else
{return ret__3282;
}
break;
}
};
var G__3286 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3286__delegate.call(this, coll, k, v, kvs);
};
G__3286.cljs$lang$maxFixedArity = 3;
G__3286.cljs$lang$applyTo = (function (arglist__3291){
var coll = cljs.core.first(arglist__3291);
var k = cljs.core.first(cljs.core.next(arglist__3291));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3291)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3291)));
return G__3286__delegate.call(this, coll, k, v, kvs);
});
return G__3286;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3283.call(this,coll,k,v);
default:
return assoc__3284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3284.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3293 = (function (coll){
return coll;
});
var dissoc__3294 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3295 = (function() { 
var G__3297__delegate = function (coll,k,ks){
while(true){
var ret__3292 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3298 = ret__3292;
var G__3299 = cljs.core.first.call(null,ks);
var G__3300 = cljs.core.next.call(null,ks);
coll = G__3298;
k = G__3299;
ks = G__3300;
continue;
}
} else
{return ret__3292;
}
break;
}
};
var G__3297 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3297__delegate.call(this, coll, k, ks);
};
G__3297.cljs$lang$maxFixedArity = 2;
G__3297.cljs$lang$applyTo = (function (arglist__3301){
var coll = cljs.core.first(arglist__3301);
var k = cljs.core.first(cljs.core.next(arglist__3301));
var ks = cljs.core.rest(cljs.core.next(arglist__3301));
return G__3297__delegate.call(this, coll, k, ks);
});
return G__3297;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3293.call(this,coll);
case  2 :
return dissoc__3294.call(this,coll,k);
default:
return dissoc__3295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3295.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____3302 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3303 = x__445__auto____3302;

if(cljs.core.truth_(and__3546__auto____3303))
{var and__3546__auto____3304 = x__445__auto____3302.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3304))
{return cljs.core.not.call(null,x__445__auto____3302.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3304;
}
} else
{return and__3546__auto____3303;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____3302);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3306 = (function (coll){
return coll;
});
var disj__3307 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3308 = (function() { 
var G__3310__delegate = function (coll,k,ks){
while(true){
var ret__3305 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3311 = ret__3305;
var G__3312 = cljs.core.first.call(null,ks);
var G__3313 = cljs.core.next.call(null,ks);
coll = G__3311;
k = G__3312;
ks = G__3313;
continue;
}
} else
{return ret__3305;
}
break;
}
};
var G__3310 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3310__delegate.call(this, coll, k, ks);
};
G__3310.cljs$lang$maxFixedArity = 2;
G__3310.cljs$lang$applyTo = (function (arglist__3314){
var coll = cljs.core.first(arglist__3314);
var k = cljs.core.first(cljs.core.next(arglist__3314));
var ks = cljs.core.rest(cljs.core.next(arglist__3314));
return G__3310__delegate.call(this, coll, k, ks);
});
return G__3310;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3306.call(this,coll);
case  2 :
return disj__3307.call(this,coll,k);
default:
return disj__3308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3308.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3315 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3316 = x__445__auto____3315;

if(cljs.core.truth_(and__3546__auto____3316))
{var and__3546__auto____3317 = x__445__auto____3315.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3317))
{return cljs.core.not.call(null,x__445__auto____3315.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3317;
}
} else
{return and__3546__auto____3316;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____3315);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3318 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3319 = x__445__auto____3318;

if(cljs.core.truth_(and__3546__auto____3319))
{var and__3546__auto____3320 = x__445__auto____3318.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3320))
{return cljs.core.not.call(null,x__445__auto____3318.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3320;
}
} else
{return and__3546__auto____3319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____3318);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____3321 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3322 = x__445__auto____3321;

if(cljs.core.truth_(and__3546__auto____3322))
{var and__3546__auto____3323 = x__445__auto____3321.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3323))
{return cljs.core.not.call(null,x__445__auto____3321.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3323;
}
} else
{return and__3546__auto____3322;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____3321);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____3324 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3325 = x__445__auto____3324;

if(cljs.core.truth_(and__3546__auto____3325))
{var and__3546__auto____3326 = x__445__auto____3324.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3326))
{return cljs.core.not.call(null,x__445__auto____3324.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3326;
}
} else
{return and__3546__auto____3325;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____3324);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____3327 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3328 = x__445__auto____3327;

if(cljs.core.truth_(and__3546__auto____3328))
{var and__3546__auto____3329 = x__445__auto____3327.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3329))
{return cljs.core.not.call(null,x__445__auto____3327.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3329;
}
} else
{return and__3546__auto____3328;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____3327);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3330 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3331 = x__445__auto____3330;

if(cljs.core.truth_(and__3546__auto____3331))
{var and__3546__auto____3332 = x__445__auto____3330.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3332))
{return cljs.core.not.call(null,x__445__auto____3330.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3332;
}
} else
{return and__3546__auto____3331;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____3330);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____3333 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3334 = x__445__auto____3333;

if(cljs.core.truth_(and__3546__auto____3334))
{var and__3546__auto____3335 = x__445__auto____3333.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3335))
{return cljs.core.not.call(null,x__445__auto____3333.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3335;
}
} else
{return and__3546__auto____3334;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____3333);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3336 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3336.push(key);
}));
return keys__3336;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____3337 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3338 = x__445__auto____3337;

if(cljs.core.truth_(and__3546__auto____3338))
{var and__3546__auto____3339 = x__445__auto____3337.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3339))
{return cljs.core.not.call(null,x__445__auto____3337.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3339;
}
} else
{return and__3546__auto____3338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____3337);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3340 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3340))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3341 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3341))
{return or__3548__auto____3341;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3340;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3342 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3342))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3342;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3343 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3343))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3343;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3344 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3344))
{return (n == n.toFixed());
} else
{return and__3546__auto____3344;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3345 = coll;

if(cljs.core.truth_(and__3546__auto____3345))
{var and__3546__auto____3346 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3346))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3346;
}
} else
{return and__3546__auto____3345;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3351 = (function (x){
return true;
});
var distinct_QMARK___3352 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3353 = (function() { 
var G__3355__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3347 = cljs.core.set([y,x]);
var xs__3348 = more;

while(true){
var x__3349 = cljs.core.first.call(null,xs__3348);
var etc__3350 = cljs.core.next.call(null,xs__3348);

if(cljs.core.truth_(xs__3348))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3347,x__3349)))
{return false;
} else
{{
var G__3356 = cljs.core.conj.call(null,s__3347,x__3349);
var G__3357 = etc__3350;
s__3347 = G__3356;
xs__3348 = G__3357;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3355 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3355__delegate.call(this, x, y, more);
};
G__3355.cljs$lang$maxFixedArity = 2;
G__3355.cljs$lang$applyTo = (function (arglist__3358){
var x = cljs.core.first(arglist__3358);
var y = cljs.core.first(cljs.core.next(arglist__3358));
var more = cljs.core.rest(cljs.core.next(arglist__3358));
return G__3355__delegate.call(this, x, y, more);
});
return G__3355;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3351.call(this,x);
case  2 :
return distinct_QMARK___3352.call(this,x,y);
default:
return distinct_QMARK___3353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3353.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3359 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3359)))
{return r__3359;
} else
{if(cljs.core.truth_(r__3359))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3361 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3362 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3360 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3360,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3360);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3361.call(this,comp);
case  2 :
return sort__3362.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3364 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3365 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3364.call(this,keyfn,comp);
case  3 :
return sort_by__3365.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3367 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3368 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3367.call(this,f,val);
case  3 :
return reduce__3368.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3374 = (function (f,coll){
var temp__3695__auto____3370 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3370))
{var s__3371 = temp__3695__auto____3370;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3371),cljs.core.next.call(null,s__3371));
} else
{return f.call(null);
}
});
var seq_reduce__3375 = (function (f,val,coll){
var val__3372 = val;
var coll__3373 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3373))
{{
var G__3377 = f.call(null,val__3372,cljs.core.first.call(null,coll__3373));
var G__3378 = cljs.core.next.call(null,coll__3373);
val__3372 = G__3377;
coll__3373 = G__3378;
continue;
}
} else
{return val__3372;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3374.call(this,f,val);
case  3 :
return seq_reduce__3375.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3379 = null;
var G__3379__3380 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3379__3381 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3379 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3379__3380.call(this,coll,f);
case  3 :
return G__3379__3381.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3379;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3383 = (function (){
return 0;
});
var _PLUS___3384 = (function (x){
return x;
});
var _PLUS___3385 = (function (x,y){
return (x + y);
});
var _PLUS___3386 = (function() { 
var G__3388__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3388__delegate.call(this, x, y, more);
};
G__3388.cljs$lang$maxFixedArity = 2;
G__3388.cljs$lang$applyTo = (function (arglist__3389){
var x = cljs.core.first(arglist__3389);
var y = cljs.core.first(cljs.core.next(arglist__3389));
var more = cljs.core.rest(cljs.core.next(arglist__3389));
return G__3388__delegate.call(this, x, y, more);
});
return G__3388;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3383.call(this);
case  1 :
return _PLUS___3384.call(this,x);
case  2 :
return _PLUS___3385.call(this,x,y);
default:
return _PLUS___3386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3386.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3390 = (function (x){
return (- x);
});
var ___3391 = (function (x,y){
return (x - y);
});
var ___3392 = (function() { 
var G__3394__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3394__delegate.call(this, x, y, more);
};
G__3394.cljs$lang$maxFixedArity = 2;
G__3394.cljs$lang$applyTo = (function (arglist__3395){
var x = cljs.core.first(arglist__3395);
var y = cljs.core.first(cljs.core.next(arglist__3395));
var more = cljs.core.rest(cljs.core.next(arglist__3395));
return G__3394__delegate.call(this, x, y, more);
});
return G__3394;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3390.call(this,x);
case  2 :
return ___3391.call(this,x,y);
default:
return ___3392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3392.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3396 = (function (){
return 1;
});
var _STAR___3397 = (function (x){
return x;
});
var _STAR___3398 = (function (x,y){
return (x * y);
});
var _STAR___3399 = (function() { 
var G__3401__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3401 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3401__delegate.call(this, x, y, more);
};
G__3401.cljs$lang$maxFixedArity = 2;
G__3401.cljs$lang$applyTo = (function (arglist__3402){
var x = cljs.core.first(arglist__3402);
var y = cljs.core.first(cljs.core.next(arglist__3402));
var more = cljs.core.rest(cljs.core.next(arglist__3402));
return G__3401__delegate.call(this, x, y, more);
});
return G__3401;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3396.call(this);
case  1 :
return _STAR___3397.call(this,x);
case  2 :
return _STAR___3398.call(this,x,y);
default:
return _STAR___3399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3399.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3403 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3404 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___3405 = (function() { 
var G__3407__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3407__delegate.call(this, x, y, more);
};
G__3407.cljs$lang$maxFixedArity = 2;
G__3407.cljs$lang$applyTo = (function (arglist__3408){
var x = cljs.core.first(arglist__3408);
var y = cljs.core.first(cljs.core.next(arglist__3408));
var more = cljs.core.rest(cljs.core.next(arglist__3408));
return G__3407__delegate.call(this, x, y, more);
});
return G__3407;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3403.call(this,x);
case  2 :
return _SLASH___3404.call(this,x,y);
default:
return _SLASH___3405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3405.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3409 = (function (x){
return true;
});
var _LT___3410 = (function (x,y){
return (x < y);
});
var _LT___3411 = (function() { 
var G__3413__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3414 = y;
var G__3415 = cljs.core.first.call(null,more);
var G__3416 = cljs.core.next.call(null,more);
x = G__3414;
y = G__3415;
more = G__3416;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3413 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3413__delegate.call(this, x, y, more);
};
G__3413.cljs$lang$maxFixedArity = 2;
G__3413.cljs$lang$applyTo = (function (arglist__3417){
var x = cljs.core.first(arglist__3417);
var y = cljs.core.first(cljs.core.next(arglist__3417));
var more = cljs.core.rest(cljs.core.next(arglist__3417));
return G__3413__delegate.call(this, x, y, more);
});
return G__3413;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3409.call(this,x);
case  2 :
return _LT___3410.call(this,x,y);
default:
return _LT___3411.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3411.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3418 = (function (x){
return true;
});
var _LT__EQ___3419 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3420 = (function() { 
var G__3422__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3423 = y;
var G__3424 = cljs.core.first.call(null,more);
var G__3425 = cljs.core.next.call(null,more);
x = G__3423;
y = G__3424;
more = G__3425;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3422__delegate.call(this, x, y, more);
};
G__3422.cljs$lang$maxFixedArity = 2;
G__3422.cljs$lang$applyTo = (function (arglist__3426){
var x = cljs.core.first(arglist__3426);
var y = cljs.core.first(cljs.core.next(arglist__3426));
var more = cljs.core.rest(cljs.core.next(arglist__3426));
return G__3422__delegate.call(this, x, y, more);
});
return G__3422;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3418.call(this,x);
case  2 :
return _LT__EQ___3419.call(this,x,y);
default:
return _LT__EQ___3420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3420.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3427 = (function (x){
return true;
});
var _GT___3428 = (function (x,y){
return (x > y);
});
var _GT___3429 = (function() { 
var G__3431__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3432 = y;
var G__3433 = cljs.core.first.call(null,more);
var G__3434 = cljs.core.next.call(null,more);
x = G__3432;
y = G__3433;
more = G__3434;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3431 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3431__delegate.call(this, x, y, more);
};
G__3431.cljs$lang$maxFixedArity = 2;
G__3431.cljs$lang$applyTo = (function (arglist__3435){
var x = cljs.core.first(arglist__3435);
var y = cljs.core.first(cljs.core.next(arglist__3435));
var more = cljs.core.rest(cljs.core.next(arglist__3435));
return G__3431__delegate.call(this, x, y, more);
});
return G__3431;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3427.call(this,x);
case  2 :
return _GT___3428.call(this,x,y);
default:
return _GT___3429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3429.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3436 = (function (x){
return true;
});
var _GT__EQ___3437 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3438 = (function() { 
var G__3440__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3441 = y;
var G__3442 = cljs.core.first.call(null,more);
var G__3443 = cljs.core.next.call(null,more);
x = G__3441;
y = G__3442;
more = G__3443;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3440 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3440__delegate.call(this, x, y, more);
};
G__3440.cljs$lang$maxFixedArity = 2;
G__3440.cljs$lang$applyTo = (function (arglist__3444){
var x = cljs.core.first(arglist__3444);
var y = cljs.core.first(cljs.core.next(arglist__3444));
var more = cljs.core.rest(cljs.core.next(arglist__3444));
return G__3440__delegate.call(this, x, y, more);
});
return G__3440;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3436.call(this,x);
case  2 :
return _GT__EQ___3437.call(this,x,y);
default:
return _GT__EQ___3438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3438.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3445 = (function (x){
return x;
});
var max__3446 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3447 = (function() { 
var G__3449__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3449 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3449__delegate.call(this, x, y, more);
};
G__3449.cljs$lang$maxFixedArity = 2;
G__3449.cljs$lang$applyTo = (function (arglist__3450){
var x = cljs.core.first(arglist__3450);
var y = cljs.core.first(cljs.core.next(arglist__3450));
var more = cljs.core.rest(cljs.core.next(arglist__3450));
return G__3449__delegate.call(this, x, y, more);
});
return G__3449;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3445.call(this,x);
case  2 :
return max__3446.call(this,x,y);
default:
return max__3447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3447.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3451 = (function (x){
return x;
});
var min__3452 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3453 = (function() { 
var G__3455__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3455__delegate.call(this, x, y, more);
};
G__3455.cljs$lang$maxFixedArity = 2;
G__3455.cljs$lang$applyTo = (function (arglist__3456){
var x = cljs.core.first(arglist__3456);
var y = cljs.core.first(cljs.core.next(arglist__3456));
var more = cljs.core.rest(cljs.core.next(arglist__3456));
return G__3455__delegate.call(this, x, y, more);
});
return G__3455;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3451.call(this,x);
case  2 :
return min__3452.call(this,x,y);
default:
return min__3453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3453.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3457 = (n % d);

return cljs.core.fix.call(null,((n - rem__3457) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3458 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3458));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3459 = (function (){
return Math.random.call(null);
});
var rand__3460 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3459.call(this);
case  1 :
return rand__3460.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3462 = (function (x){
return true;
});
var _EQ__EQ___3463 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3464 = (function() { 
var G__3466__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3467 = y;
var G__3468 = cljs.core.first.call(null,more);
var G__3469 = cljs.core.next.call(null,more);
x = G__3467;
y = G__3468;
more = G__3469;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3466 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3466__delegate.call(this, x, y, more);
};
G__3466.cljs$lang$maxFixedArity = 2;
G__3466.cljs$lang$applyTo = (function (arglist__3470){
var x = cljs.core.first(arglist__3470);
var y = cljs.core.first(cljs.core.next(arglist__3470));
var more = cljs.core.rest(cljs.core.next(arglist__3470));
return G__3466__delegate.call(this, x, y, more);
});
return G__3466;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3462.call(this,x);
case  2 :
return _EQ__EQ___3463.call(this,x,y);
default:
return _EQ__EQ___3464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3464.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3471 = n;
var xs__3472 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3473 = xs__3472;

if(cljs.core.truth_(and__3546__auto____3473))
{return (n__3471 > 0);
} else
{return and__3546__auto____3473;
}
})()))
{{
var G__3474 = (n__3471 - 1);
var G__3475 = cljs.core.next.call(null,xs__3472);
n__3471 = G__3474;
xs__3472 = G__3475;
continue;
}
} else
{return xs__3472;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3480 = null;
var G__3480__3481 = (function (coll,n){
var temp__3695__auto____3476 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3476))
{var xs__3477 = temp__3695__auto____3476;

return cljs.core.first.call(null,xs__3477);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3480__3482 = (function (coll,n,not_found){
var temp__3695__auto____3478 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3478))
{var xs__3479 = temp__3695__auto____3478;

return cljs.core.first.call(null,xs__3479);
} else
{return not_found;
}
});
G__3480 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3480__3481.call(this,coll,n);
case  3 :
return G__3480__3482.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3480;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3484 = (function (){
return "";
});
var str_STAR___3485 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3486 = (function() { 
var G__3488__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3489 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3490 = cljs.core.next.call(null,more);
sb = G__3489;
more = G__3490;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3488 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3488__delegate.call(this, x, ys);
};
G__3488.cljs$lang$maxFixedArity = 1;
G__3488.cljs$lang$applyTo = (function (arglist__3491){
var x = cljs.core.first(arglist__3491);
var ys = cljs.core.rest(arglist__3491);
return G__3488__delegate.call(this, x, ys);
});
return G__3488;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3484.call(this);
case  1 :
return str_STAR___3485.call(this,x);
default:
return str_STAR___3486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3486.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3492 = (function (){
return "";
});
var str__3493 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3494 = (function() { 
var G__3496__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3496 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3496__delegate.call(this, x, ys);
};
G__3496.cljs$lang$maxFixedArity = 1;
G__3496.cljs$lang$applyTo = (function (arglist__3497){
var x = cljs.core.first(arglist__3497);
var ys = cljs.core.rest(arglist__3497);
return G__3496__delegate.call(this, x, ys);
});
return G__3496;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3492.call(this);
case  1 :
return str__3493.call(this,x);
default:
return str__3494.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3494.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3498 = (function (s,start){
return s.substring(start);
});
var subs__3499 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3498.call(this,s,start);
case  3 :
return subs__3499.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3501 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__3502 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3501.call(this,ns);
case  2 :
return symbol__3502.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3504 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__3505 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3504.call(this,ns);
case  2 :
return keyword__3505.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3507 = cljs.core.seq.call(null,x);
var ys__3508 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3507)))
{return cljs.core.nil_QMARK_.call(null,ys__3508);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3508)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3507),cljs.core.first.call(null,ys__3508))))
{{
var G__3509 = cljs.core.next.call(null,xs__3507);
var G__3510 = cljs.core.next.call(null,ys__3508);
xs__3507 = G__3509;
ys__3508 = G__3510;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3511_SHARP_,p2__3512_SHARP_){
return cljs.core.hash_combine.call(null,p1__3511_SHARP_,cljs.core.hash.call(null,p2__3512_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3513__3514 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3513__3514))
{var G__3516__3518 = cljs.core.first.call(null,G__3513__3514);
var vec__3517__3519 = G__3516__3518;
var key_name__3520 = cljs.core.nth.call(null,vec__3517__3519,0,null);
var f__3521 = cljs.core.nth.call(null,vec__3517__3519,1,null);
var G__3513__3522 = G__3513__3514;

var G__3516__3523 = G__3516__3518;
var G__3513__3524 = G__3513__3522;

while(true){
var vec__3525__3526 = G__3516__3523;
var key_name__3527 = cljs.core.nth.call(null,vec__3525__3526,0,null);
var f__3528 = cljs.core.nth.call(null,vec__3525__3526,1,null);
var G__3513__3529 = G__3513__3524;

var str_name__3530 = cljs.core.name.call(null,key_name__3527);

obj[str_name__3530] = f__3528;
var temp__3698__auto____3531 = cljs.core.next.call(null,G__3513__3529);

if(cljs.core.truth_(temp__3698__auto____3531))
{var G__3513__3532 = temp__3698__auto____3531;

{
var G__3533 = cljs.core.first.call(null,G__3513__3532);
var G__3534 = G__3513__3532;
G__3516__3523 = G__3533;
G__3513__3524 = G__3534;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3535 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3536 = this;
return (new cljs.core.List(this__3536.meta,o,coll,(this__3536.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3537 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3538 = this;
return this__3538.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3539 = this;
return this__3539.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3540 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3541 = this;
return this__3541.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3542 = this;
return this__3542.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3544 = this;
return (new cljs.core.List(meta,this__3544.first,this__3544.rest,this__3544.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3545 = this;
return this__3545.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3546 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3547 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3548 = this;
return (new cljs.core.List(this__3548.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3549 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3550 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3551 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3552 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3553 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3554 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3555 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3556 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3557 = this;
return this__3557.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3558 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3559){
var items = cljs.core.seq( arglist__3559 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3560 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3561 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3562 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3563 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3563.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3564 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3565 = this;
return this__3565.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3566 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3566.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3566.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3567 = this;
return this__3567.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3568 = this;
return (new cljs.core.Cons(meta,this__3568.first,this__3568.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3569 = null;
var G__3569__3570 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3569__3571 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3569 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3569__3570.call(this,string,f);
case  3 :
return G__3569__3571.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3569;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3573 = null;
var G__3573__3574 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3573__3575 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3573 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3573__3574.call(this,string,k);
case  3 :
return G__3573__3575.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3573;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3577 = null;
var G__3577__3578 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3577__3579 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3577 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3577__3578.call(this,string,n);
case  3 :
return G__3577__3579.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3577;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3581 = null;
var G__3581__3582 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__3581__3583 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__3581 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__3581__3582.call(this,this$,coll);
case  3 :
return G__3581__3583.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3581;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3585 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3585;
} else
{lazy_seq.x = x__3585.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3586 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3587 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3589 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3589.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3590 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3591 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3592 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3593 = this;
return this__3593.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3594 = this;
return (new cljs.core.LazySeq(meta,this__3594.realized,this__3594.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3595 = cljs.core.array.call(null);

var s__3596 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3596)))
{ary__3595.push(cljs.core.first.call(null,s__3596));
{
var G__3597 = cljs.core.next.call(null,s__3596);
s__3596 = G__3597;
continue;
}
} else
{return ary__3595;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3598 = s;
var i__3599 = n;
var sum__3600 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3601 = (i__3599 > 0);

if(cljs.core.truth_(and__3546__auto____3601))
{return cljs.core.seq.call(null,s__3598);
} else
{return and__3546__auto____3601;
}
})()))
{{
var G__3602 = cljs.core.next.call(null,s__3598);
var G__3603 = (i__3599 - 1);
var G__3604 = (sum__3600 + 1);
s__3598 = G__3602;
i__3599 = G__3603;
sum__3600 = G__3604;
continue;
}
} else
{return sum__3600;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3608 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3609 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3610 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3605 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3605))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3605),concat.call(null,cljs.core.rest.call(null,s__3605),y));
} else
{return y;
}
})));
});
var concat__3611 = (function() { 
var G__3613__delegate = function (x,y,zs){
var cat__3607 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3606 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3606))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3606),cat.call(null,cljs.core.rest.call(null,xys__3606),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3607.call(null,concat.call(null,x,y),zs);
};
var G__3613 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3613__delegate.call(this, x, y, zs);
};
G__3613.cljs$lang$maxFixedArity = 2;
G__3613.cljs$lang$applyTo = (function (arglist__3614){
var x = cljs.core.first(arglist__3614);
var y = cljs.core.first(cljs.core.next(arglist__3614));
var zs = cljs.core.rest(cljs.core.next(arglist__3614));
return G__3613__delegate.call(this, x, y, zs);
});
return G__3613;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3608.call(this);
case  1 :
return concat__3609.call(this,x);
case  2 :
return concat__3610.call(this,x,y);
default:
return concat__3611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3611.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3615 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3616 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3617 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3618 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3619 = (function() { 
var G__3621__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3621 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3621__delegate.call(this, a, b, c, d, more);
};
G__3621.cljs$lang$maxFixedArity = 4;
G__3621.cljs$lang$applyTo = (function (arglist__3622){
var a = cljs.core.first(arglist__3622);
var b = cljs.core.first(cljs.core.next(arglist__3622));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3622)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3622))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3622))));
return G__3621__delegate.call(this, a, b, c, d, more);
});
return G__3621;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3615.call(this,a);
case  2 :
return list_STAR___3616.call(this,a,b);
case  3 :
return list_STAR___3617.call(this,a,b,c);
case  4 :
return list_STAR___3618.call(this,a,b,c,d);
default:
return list_STAR___3619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3619.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3632 = (function (f,args){
var fixed_arity__3623 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3623 + 1)) <= fixed_arity__3623)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3633 = (function (f,x,args){
var arglist__3624 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3625 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3624,fixed_arity__3625) <= fixed_arity__3625)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3624));
} else
{return f.cljs$lang$applyTo(arglist__3624);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3624));
}
});
var apply__3634 = (function (f,x,y,args){
var arglist__3626 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3627 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3626,fixed_arity__3627) <= fixed_arity__3627)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3626));
} else
{return f.cljs$lang$applyTo(arglist__3626);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3626));
}
});
var apply__3635 = (function (f,x,y,z,args){
var arglist__3628 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3629 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3628,fixed_arity__3629) <= fixed_arity__3629)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3628));
} else
{return f.cljs$lang$applyTo(arglist__3628);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3628));
}
});
var apply__3636 = (function() { 
var G__3638__delegate = function (f,a,b,c,d,args){
var arglist__3630 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3631 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3630,fixed_arity__3631) <= fixed_arity__3631)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3630));
} else
{return f.cljs$lang$applyTo(arglist__3630);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3630));
}
};
var G__3638 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3638__delegate.call(this, f, a, b, c, d, args);
};
G__3638.cljs$lang$maxFixedArity = 5;
G__3638.cljs$lang$applyTo = (function (arglist__3639){
var f = cljs.core.first(arglist__3639);
var a = cljs.core.first(cljs.core.next(arglist__3639));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3639)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3639))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3639)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3639)))));
return G__3638__delegate.call(this, f, a, b, c, d, args);
});
return G__3638;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3632.call(this,f,a);
case  3 :
return apply__3633.call(this,f,a,b);
case  4 :
return apply__3634.call(this,f,a,b,c);
case  5 :
return apply__3635.call(this,f,a,b,c,d);
default:
return apply__3636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3636.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3640){
var obj = cljs.core.first(arglist__3640);
var f = cljs.core.first(cljs.core.next(arglist__3640));
var args = cljs.core.rest(cljs.core.next(arglist__3640));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3641 = (function (x){
return false;
});
var not_EQ___3642 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3643 = (function() { 
var G__3645__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3645 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3645__delegate.call(this, x, y, more);
};
G__3645.cljs$lang$maxFixedArity = 2;
G__3645.cljs$lang$applyTo = (function (arglist__3646){
var x = cljs.core.first(arglist__3646);
var y = cljs.core.first(cljs.core.next(arglist__3646));
var more = cljs.core.rest(cljs.core.next(arglist__3646));
return G__3645__delegate.call(this, x, y, more);
});
return G__3645;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3641.call(this,x);
case  2 :
return not_EQ___3642.call(this,x,y);
default:
return not_EQ___3643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3643.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3647 = pred;
var G__3648 = cljs.core.next.call(null,coll);
pred = G__3647;
coll = G__3648;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3649 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3649))
{return or__3548__auto____3649;
} else
{{
var G__3650 = pred;
var G__3651 = cljs.core.next.call(null,coll);
pred = G__3650;
coll = G__3651;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3652 = null;
var G__3652__3653 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3652__3654 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3652__3655 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3652__3656 = (function() { 
var G__3658__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3658 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3658__delegate.call(this, x, y, zs);
};
G__3658.cljs$lang$maxFixedArity = 2;
G__3658.cljs$lang$applyTo = (function (arglist__3659){
var x = cljs.core.first(arglist__3659);
var y = cljs.core.first(cljs.core.next(arglist__3659));
var zs = cljs.core.rest(cljs.core.next(arglist__3659));
return G__3658__delegate.call(this, x, y, zs);
});
return G__3658;
})()
;
G__3652 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3652__3653.call(this);
case  1 :
return G__3652__3654.call(this,x);
case  2 :
return G__3652__3655.call(this,x,y);
default:
return G__3652__3656.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3652.cljs$lang$maxFixedArity = 2;
G__3652.cljs$lang$applyTo = G__3652__3656.cljs$lang$applyTo;
return G__3652;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3660__delegate = function (args){
return x;
};
var G__3660 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3660__delegate.call(this, args);
};
G__3660.cljs$lang$maxFixedArity = 0;
G__3660.cljs$lang$applyTo = (function (arglist__3661){
var args = cljs.core.seq( arglist__3661 );;
return G__3660__delegate.call(this, args);
});
return G__3660;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3665 = (function (){
return cljs.core.identity;
});
var comp__3666 = (function (f){
return f;
});
var comp__3667 = (function (f,g){
return (function() {
var G__3671 = null;
var G__3671__3672 = (function (){
return f.call(null,g.call(null));
});
var G__3671__3673 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3671__3674 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3671__3675 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3671__3676 = (function() { 
var G__3678__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3678 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3678__delegate.call(this, x, y, z, args);
};
G__3678.cljs$lang$maxFixedArity = 3;
G__3678.cljs$lang$applyTo = (function (arglist__3679){
var x = cljs.core.first(arglist__3679);
var y = cljs.core.first(cljs.core.next(arglist__3679));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3679)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3679)));
return G__3678__delegate.call(this, x, y, z, args);
});
return G__3678;
})()
;
G__3671 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3671__3672.call(this);
case  1 :
return G__3671__3673.call(this,x);
case  2 :
return G__3671__3674.call(this,x,y);
case  3 :
return G__3671__3675.call(this,x,y,z);
default:
return G__3671__3676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3671.cljs$lang$maxFixedArity = 3;
G__3671.cljs$lang$applyTo = G__3671__3676.cljs$lang$applyTo;
return G__3671;
})()
});
var comp__3668 = (function (f,g,h){
return (function() {
var G__3680 = null;
var G__3680__3681 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3680__3682 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3680__3683 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3680__3684 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3680__3685 = (function() { 
var G__3687__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3687__delegate.call(this, x, y, z, args);
};
G__3687.cljs$lang$maxFixedArity = 3;
G__3687.cljs$lang$applyTo = (function (arglist__3688){
var x = cljs.core.first(arglist__3688);
var y = cljs.core.first(cljs.core.next(arglist__3688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3688)));
return G__3687__delegate.call(this, x, y, z, args);
});
return G__3687;
})()
;
G__3680 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3680__3681.call(this);
case  1 :
return G__3680__3682.call(this,x);
case  2 :
return G__3680__3683.call(this,x,y);
case  3 :
return G__3680__3684.call(this,x,y,z);
default:
return G__3680__3685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3680.cljs$lang$maxFixedArity = 3;
G__3680.cljs$lang$applyTo = G__3680__3685.cljs$lang$applyTo;
return G__3680;
})()
});
var comp__3669 = (function() { 
var G__3689__delegate = function (f1,f2,f3,fs){
var fs__3662 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3690__delegate = function (args){
var ret__3663 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3662),args);
var fs__3664 = cljs.core.next.call(null,fs__3662);

while(true){
if(cljs.core.truth_(fs__3664))
{{
var G__3691 = cljs.core.first.call(null,fs__3664).call(null,ret__3663);
var G__3692 = cljs.core.next.call(null,fs__3664);
ret__3663 = G__3691;
fs__3664 = G__3692;
continue;
}
} else
{return ret__3663;
}
break;
}
};
var G__3690 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3690__delegate.call(this, args);
};
G__3690.cljs$lang$maxFixedArity = 0;
G__3690.cljs$lang$applyTo = (function (arglist__3693){
var args = cljs.core.seq( arglist__3693 );;
return G__3690__delegate.call(this, args);
});
return G__3690;
})()
;
};
var G__3689 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3689__delegate.call(this, f1, f2, f3, fs);
};
G__3689.cljs$lang$maxFixedArity = 3;
G__3689.cljs$lang$applyTo = (function (arglist__3694){
var f1 = cljs.core.first(arglist__3694);
var f2 = cljs.core.first(cljs.core.next(arglist__3694));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3694)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3694)));
return G__3689__delegate.call(this, f1, f2, f3, fs);
});
return G__3689;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3665.call(this);
case  1 :
return comp__3666.call(this,f1);
case  2 :
return comp__3667.call(this,f1,f2);
case  3 :
return comp__3668.call(this,f1,f2,f3);
default:
return comp__3669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3669.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3695 = (function (f,arg1){
return (function() { 
var G__3700__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3700 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3700__delegate.call(this, args);
};
G__3700.cljs$lang$maxFixedArity = 0;
G__3700.cljs$lang$applyTo = (function (arglist__3701){
var args = cljs.core.seq( arglist__3701 );;
return G__3700__delegate.call(this, args);
});
return G__3700;
})()
;
});
var partial__3696 = (function (f,arg1,arg2){
return (function() { 
var G__3702__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3702 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3702__delegate.call(this, args);
};
G__3702.cljs$lang$maxFixedArity = 0;
G__3702.cljs$lang$applyTo = (function (arglist__3703){
var args = cljs.core.seq( arglist__3703 );;
return G__3702__delegate.call(this, args);
});
return G__3702;
})()
;
});
var partial__3697 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3704__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3704 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3704__delegate.call(this, args);
};
G__3704.cljs$lang$maxFixedArity = 0;
G__3704.cljs$lang$applyTo = (function (arglist__3705){
var args = cljs.core.seq( arglist__3705 );;
return G__3704__delegate.call(this, args);
});
return G__3704;
})()
;
});
var partial__3698 = (function() { 
var G__3706__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3707__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3707 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3707__delegate.call(this, args);
};
G__3707.cljs$lang$maxFixedArity = 0;
G__3707.cljs$lang$applyTo = (function (arglist__3708){
var args = cljs.core.seq( arglist__3708 );;
return G__3707__delegate.call(this, args);
});
return G__3707;
})()
;
};
var G__3706 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3706__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3706.cljs$lang$maxFixedArity = 4;
G__3706.cljs$lang$applyTo = (function (arglist__3709){
var f = cljs.core.first(arglist__3709);
var arg1 = cljs.core.first(cljs.core.next(arglist__3709));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3709)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3709))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3709))));
return G__3706__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3706;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3695.call(this,f,arg1);
case  3 :
return partial__3696.call(this,f,arg1,arg2);
case  4 :
return partial__3697.call(this,f,arg1,arg2,arg3);
default:
return partial__3698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3698.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3710 = (function (f,x){
return (function() {
var G__3714 = null;
var G__3714__3715 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3714__3716 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3714__3717 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3714__3718 = (function() { 
var G__3720__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3720 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3720__delegate.call(this, a, b, c, ds);
};
G__3720.cljs$lang$maxFixedArity = 3;
G__3720.cljs$lang$applyTo = (function (arglist__3721){
var a = cljs.core.first(arglist__3721);
var b = cljs.core.first(cljs.core.next(arglist__3721));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3721)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3721)));
return G__3720__delegate.call(this, a, b, c, ds);
});
return G__3720;
})()
;
G__3714 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3714__3715.call(this,a);
case  2 :
return G__3714__3716.call(this,a,b);
case  3 :
return G__3714__3717.call(this,a,b,c);
default:
return G__3714__3718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3714.cljs$lang$maxFixedArity = 3;
G__3714.cljs$lang$applyTo = G__3714__3718.cljs$lang$applyTo;
return G__3714;
})()
});
var fnil__3711 = (function (f,x,y){
return (function() {
var G__3722 = null;
var G__3722__3723 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3722__3724 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3722__3725 = (function() { 
var G__3727__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3727 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3727__delegate.call(this, a, b, c, ds);
};
G__3727.cljs$lang$maxFixedArity = 3;
G__3727.cljs$lang$applyTo = (function (arglist__3728){
var a = cljs.core.first(arglist__3728);
var b = cljs.core.first(cljs.core.next(arglist__3728));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3728)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3728)));
return G__3727__delegate.call(this, a, b, c, ds);
});
return G__3727;
})()
;
G__3722 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3722__3723.call(this,a,b);
case  3 :
return G__3722__3724.call(this,a,b,c);
default:
return G__3722__3725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3722.cljs$lang$maxFixedArity = 3;
G__3722.cljs$lang$applyTo = G__3722__3725.cljs$lang$applyTo;
return G__3722;
})()
});
var fnil__3712 = (function (f,x,y,z){
return (function() {
var G__3729 = null;
var G__3729__3730 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3729__3731 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3729__3732 = (function() { 
var G__3734__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3734 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3734__delegate.call(this, a, b, c, ds);
};
G__3734.cljs$lang$maxFixedArity = 3;
G__3734.cljs$lang$applyTo = (function (arglist__3735){
var a = cljs.core.first(arglist__3735);
var b = cljs.core.first(cljs.core.next(arglist__3735));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3735)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3735)));
return G__3734__delegate.call(this, a, b, c, ds);
});
return G__3734;
})()
;
G__3729 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3729__3730.call(this,a,b);
case  3 :
return G__3729__3731.call(this,a,b,c);
default:
return G__3729__3732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3729.cljs$lang$maxFixedArity = 3;
G__3729.cljs$lang$applyTo = G__3729__3732.cljs$lang$applyTo;
return G__3729;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3710.call(this,f,x);
case  3 :
return fnil__3711.call(this,f,x,y);
case  4 :
return fnil__3712.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3738 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3736))
{var s__3737 = temp__3698__auto____3736;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3737)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3737)));
} else
{return null;
}
})));
});

return mapi__3738.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3739 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3739))
{var s__3740 = temp__3698__auto____3739;

var x__3741 = f.call(null,cljs.core.first.call(null,s__3740));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3741)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3740));
} else
{return cljs.core.cons.call(null,x__3741,keep.call(null,f,cljs.core.rest.call(null,s__3740)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3751 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3748))
{var s__3749 = temp__3698__auto____3748;

var x__3750 = f.call(null,idx,cljs.core.first.call(null,s__3749));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3750)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3749));
} else
{return cljs.core.cons.call(null,x__3750,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3749)));
}
} else
{return null;
}
})));
});

return keepi__3751.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3796 = (function (p){
return (function() {
var ep1 = null;
var ep1__3801 = (function (){
return true;
});
var ep1__3802 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3803 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3758 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3758))
{return p.call(null,y);
} else
{return and__3546__auto____3758;
}
})());
});
var ep1__3804 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3759 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3759))
{var and__3546__auto____3760 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3760))
{return p.call(null,z);
} else
{return and__3546__auto____3760;
}
} else
{return and__3546__auto____3759;
}
})());
});
var ep1__3805 = (function() { 
var G__3807__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3761 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3761))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3761;
}
})());
};
var G__3807 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3807__delegate.call(this, x, y, z, args);
};
G__3807.cljs$lang$maxFixedArity = 3;
G__3807.cljs$lang$applyTo = (function (arglist__3808){
var x = cljs.core.first(arglist__3808);
var y = cljs.core.first(cljs.core.next(arglist__3808));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3808)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3808)));
return G__3807__delegate.call(this, x, y, z, args);
});
return G__3807;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3801.call(this);
case  1 :
return ep1__3802.call(this,x);
case  2 :
return ep1__3803.call(this,x,y);
case  3 :
return ep1__3804.call(this,x,y,z);
default:
return ep1__3805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3805.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3797 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3809 = (function (){
return true;
});
var ep2__3810 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3762 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3762))
{return p2.call(null,x);
} else
{return and__3546__auto____3762;
}
})());
});
var ep2__3811 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3763 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3763))
{var and__3546__auto____3764 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3764))
{var and__3546__auto____3765 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3765))
{return p2.call(null,y);
} else
{return and__3546__auto____3765;
}
} else
{return and__3546__auto____3764;
}
} else
{return and__3546__auto____3763;
}
})());
});
var ep2__3812 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3766 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3766))
{var and__3546__auto____3767 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3767))
{var and__3546__auto____3768 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3768))
{var and__3546__auto____3769 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3769))
{var and__3546__auto____3770 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3770))
{return p2.call(null,z);
} else
{return and__3546__auto____3770;
}
} else
{return and__3546__auto____3769;
}
} else
{return and__3546__auto____3768;
}
} else
{return and__3546__auto____3767;
}
} else
{return and__3546__auto____3766;
}
})());
});
var ep2__3813 = (function() { 
var G__3815__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3771 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3771))
{return cljs.core.every_QMARK_.call(null,(function (p1__3742_SHARP_){
var and__3546__auto____3772 = p1.call(null,p1__3742_SHARP_);

if(cljs.core.truth_(and__3546__auto____3772))
{return p2.call(null,p1__3742_SHARP_);
} else
{return and__3546__auto____3772;
}
}),args);
} else
{return and__3546__auto____3771;
}
})());
};
var G__3815 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3815__delegate.call(this, x, y, z, args);
};
G__3815.cljs$lang$maxFixedArity = 3;
G__3815.cljs$lang$applyTo = (function (arglist__3816){
var x = cljs.core.first(arglist__3816);
var y = cljs.core.first(cljs.core.next(arglist__3816));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3816)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3816)));
return G__3815__delegate.call(this, x, y, z, args);
});
return G__3815;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3809.call(this);
case  1 :
return ep2__3810.call(this,x);
case  2 :
return ep2__3811.call(this,x,y);
case  3 :
return ep2__3812.call(this,x,y,z);
default:
return ep2__3813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3813.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3798 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3817 = (function (){
return true;
});
var ep3__3818 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3773 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3773))
{var and__3546__auto____3774 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3774))
{return p3.call(null,x);
} else
{return and__3546__auto____3774;
}
} else
{return and__3546__auto____3773;
}
})());
});
var ep3__3819 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3775 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3775))
{var and__3546__auto____3776 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3776))
{var and__3546__auto____3777 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3777))
{var and__3546__auto____3778 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3778))
{var and__3546__auto____3779 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3779))
{return p3.call(null,y);
} else
{return and__3546__auto____3779;
}
} else
{return and__3546__auto____3778;
}
} else
{return and__3546__auto____3777;
}
} else
{return and__3546__auto____3776;
}
} else
{return and__3546__auto____3775;
}
})());
});
var ep3__3820 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3780 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3780))
{var and__3546__auto____3781 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3781))
{var and__3546__auto____3782 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3782))
{var and__3546__auto____3783 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3783))
{var and__3546__auto____3784 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3784))
{var and__3546__auto____3785 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3785))
{var and__3546__auto____3786 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3786))
{var and__3546__auto____3787 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3787))
{return p3.call(null,z);
} else
{return and__3546__auto____3787;
}
} else
{return and__3546__auto____3786;
}
} else
{return and__3546__auto____3785;
}
} else
{return and__3546__auto____3784;
}
} else
{return and__3546__auto____3783;
}
} else
{return and__3546__auto____3782;
}
} else
{return and__3546__auto____3781;
}
} else
{return and__3546__auto____3780;
}
})());
});
var ep3__3821 = (function() { 
var G__3823__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3788 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3788))
{return cljs.core.every_QMARK_.call(null,(function (p1__3743_SHARP_){
var and__3546__auto____3789 = p1.call(null,p1__3743_SHARP_);

if(cljs.core.truth_(and__3546__auto____3789))
{var and__3546__auto____3790 = p2.call(null,p1__3743_SHARP_);

if(cljs.core.truth_(and__3546__auto____3790))
{return p3.call(null,p1__3743_SHARP_);
} else
{return and__3546__auto____3790;
}
} else
{return and__3546__auto____3789;
}
}),args);
} else
{return and__3546__auto____3788;
}
})());
};
var G__3823 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3823__delegate.call(this, x, y, z, args);
};
G__3823.cljs$lang$maxFixedArity = 3;
G__3823.cljs$lang$applyTo = (function (arglist__3824){
var x = cljs.core.first(arglist__3824);
var y = cljs.core.first(cljs.core.next(arglist__3824));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3824)));
return G__3823__delegate.call(this, x, y, z, args);
});
return G__3823;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3817.call(this);
case  1 :
return ep3__3818.call(this,x);
case  2 :
return ep3__3819.call(this,x,y);
case  3 :
return ep3__3820.call(this,x,y,z);
default:
return ep3__3821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3821.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3799 = (function() { 
var G__3825__delegate = function (p1,p2,p3,ps){
var ps__3791 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3826 = (function (){
return true;
});
var epn__3827 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3744_SHARP_){
return p1__3744_SHARP_.call(null,x);
}),ps__3791);
});
var epn__3828 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3745_SHARP_){
var and__3546__auto____3792 = p1__3745_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3792))
{return p1__3745_SHARP_.call(null,y);
} else
{return and__3546__auto____3792;
}
}),ps__3791);
});
var epn__3829 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3746_SHARP_){
var and__3546__auto____3793 = p1__3746_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3793))
{var and__3546__auto____3794 = p1__3746_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3794))
{return p1__3746_SHARP_.call(null,z);
} else
{return and__3546__auto____3794;
}
} else
{return and__3546__auto____3793;
}
}),ps__3791);
});
var epn__3830 = (function() { 
var G__3832__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3795 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3795))
{return cljs.core.every_QMARK_.call(null,(function (p1__3747_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3747_SHARP_,args);
}),ps__3791);
} else
{return and__3546__auto____3795;
}
})());
};
var G__3832 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3832__delegate.call(this, x, y, z, args);
};
G__3832.cljs$lang$maxFixedArity = 3;
G__3832.cljs$lang$applyTo = (function (arglist__3833){
var x = cljs.core.first(arglist__3833);
var y = cljs.core.first(cljs.core.next(arglist__3833));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3833)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3833)));
return G__3832__delegate.call(this, x, y, z, args);
});
return G__3832;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3826.call(this);
case  1 :
return epn__3827.call(this,x);
case  2 :
return epn__3828.call(this,x,y);
case  3 :
return epn__3829.call(this,x,y,z);
default:
return epn__3830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3830.cljs$lang$applyTo;
return epn;
})()
};
var G__3825 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3825__delegate.call(this, p1, p2, p3, ps);
};
G__3825.cljs$lang$maxFixedArity = 3;
G__3825.cljs$lang$applyTo = (function (arglist__3834){
var p1 = cljs.core.first(arglist__3834);
var p2 = cljs.core.first(cljs.core.next(arglist__3834));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3834)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3834)));
return G__3825__delegate.call(this, p1, p2, p3, ps);
});
return G__3825;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3796.call(this,p1);
case  2 :
return every_pred__3797.call(this,p1,p2);
case  3 :
return every_pred__3798.call(this,p1,p2,p3);
default:
return every_pred__3799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3799.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3874 = (function (p){
return (function() {
var sp1 = null;
var sp1__3879 = (function (){
return null;
});
var sp1__3880 = (function (x){
return p.call(null,x);
});
var sp1__3881 = (function (x,y){
var or__3548__auto____3836 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3836))
{return or__3548__auto____3836;
} else
{return p.call(null,y);
}
});
var sp1__3882 = (function (x,y,z){
var or__3548__auto____3837 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3837))
{return or__3548__auto____3837;
} else
{var or__3548__auto____3838 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3838))
{return or__3548__auto____3838;
} else
{return p.call(null,z);
}
}
});
var sp1__3883 = (function() { 
var G__3885__delegate = function (x,y,z,args){
var or__3548__auto____3839 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3839))
{return or__3548__auto____3839;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3885 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3885__delegate.call(this, x, y, z, args);
};
G__3885.cljs$lang$maxFixedArity = 3;
G__3885.cljs$lang$applyTo = (function (arglist__3886){
var x = cljs.core.first(arglist__3886);
var y = cljs.core.first(cljs.core.next(arglist__3886));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3886)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3886)));
return G__3885__delegate.call(this, x, y, z, args);
});
return G__3885;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3879.call(this);
case  1 :
return sp1__3880.call(this,x);
case  2 :
return sp1__3881.call(this,x,y);
case  3 :
return sp1__3882.call(this,x,y,z);
default:
return sp1__3883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3883.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3875 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3887 = (function (){
return null;
});
var sp2__3888 = (function (x){
var or__3548__auto____3840 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3840))
{return or__3548__auto____3840;
} else
{return p2.call(null,x);
}
});
var sp2__3889 = (function (x,y){
var or__3548__auto____3841 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3841))
{return or__3548__auto____3841;
} else
{var or__3548__auto____3842 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3842))
{return or__3548__auto____3842;
} else
{var or__3548__auto____3843 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3843))
{return or__3548__auto____3843;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3890 = (function (x,y,z){
var or__3548__auto____3844 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3844))
{return or__3548__auto____3844;
} else
{var or__3548__auto____3845 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3845))
{return or__3548__auto____3845;
} else
{var or__3548__auto____3846 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3846))
{return or__3548__auto____3846;
} else
{var or__3548__auto____3847 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3847))
{return or__3548__auto____3847;
} else
{var or__3548__auto____3848 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3848))
{return or__3548__auto____3848;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3891 = (function() { 
var G__3893__delegate = function (x,y,z,args){
var or__3548__auto____3849 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3849))
{return or__3548__auto____3849;
} else
{return cljs.core.some.call(null,(function (p1__3752_SHARP_){
var or__3548__auto____3850 = p1.call(null,p1__3752_SHARP_);

if(cljs.core.truth_(or__3548__auto____3850))
{return or__3548__auto____3850;
} else
{return p2.call(null,p1__3752_SHARP_);
}
}),args);
}
};
var G__3893 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3893__delegate.call(this, x, y, z, args);
};
G__3893.cljs$lang$maxFixedArity = 3;
G__3893.cljs$lang$applyTo = (function (arglist__3894){
var x = cljs.core.first(arglist__3894);
var y = cljs.core.first(cljs.core.next(arglist__3894));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3894)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3894)));
return G__3893__delegate.call(this, x, y, z, args);
});
return G__3893;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3887.call(this);
case  1 :
return sp2__3888.call(this,x);
case  2 :
return sp2__3889.call(this,x,y);
case  3 :
return sp2__3890.call(this,x,y,z);
default:
return sp2__3891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3891.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3876 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3895 = (function (){
return null;
});
var sp3__3896 = (function (x){
var or__3548__auto____3851 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3851))
{return or__3548__auto____3851;
} else
{var or__3548__auto____3852 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3852))
{return or__3548__auto____3852;
} else
{return p3.call(null,x);
}
}
});
var sp3__3897 = (function (x,y){
var or__3548__auto____3853 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3853))
{return or__3548__auto____3853;
} else
{var or__3548__auto____3854 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3854))
{return or__3548__auto____3854;
} else
{var or__3548__auto____3855 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3855))
{return or__3548__auto____3855;
} else
{var or__3548__auto____3856 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3856))
{return or__3548__auto____3856;
} else
{var or__3548__auto____3857 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3857))
{return or__3548__auto____3857;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3898 = (function (x,y,z){
var or__3548__auto____3858 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3858))
{return or__3548__auto____3858;
} else
{var or__3548__auto____3859 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3859))
{return or__3548__auto____3859;
} else
{var or__3548__auto____3860 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3860))
{return or__3548__auto____3860;
} else
{var or__3548__auto____3861 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3861))
{return or__3548__auto____3861;
} else
{var or__3548__auto____3862 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3862))
{return or__3548__auto____3862;
} else
{var or__3548__auto____3863 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3863))
{return or__3548__auto____3863;
} else
{var or__3548__auto____3864 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3864))
{return or__3548__auto____3864;
} else
{var or__3548__auto____3865 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3865))
{return or__3548__auto____3865;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3899 = (function() { 
var G__3901__delegate = function (x,y,z,args){
var or__3548__auto____3866 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3866))
{return or__3548__auto____3866;
} else
{return cljs.core.some.call(null,(function (p1__3753_SHARP_){
var or__3548__auto____3867 = p1.call(null,p1__3753_SHARP_);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{var or__3548__auto____3868 = p2.call(null,p1__3753_SHARP_);

if(cljs.core.truth_(or__3548__auto____3868))
{return or__3548__auto____3868;
} else
{return p3.call(null,p1__3753_SHARP_);
}
}
}),args);
}
};
var G__3901 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3901__delegate.call(this, x, y, z, args);
};
G__3901.cljs$lang$maxFixedArity = 3;
G__3901.cljs$lang$applyTo = (function (arglist__3902){
var x = cljs.core.first(arglist__3902);
var y = cljs.core.first(cljs.core.next(arglist__3902));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3902)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3902)));
return G__3901__delegate.call(this, x, y, z, args);
});
return G__3901;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3895.call(this);
case  1 :
return sp3__3896.call(this,x);
case  2 :
return sp3__3897.call(this,x,y);
case  3 :
return sp3__3898.call(this,x,y,z);
default:
return sp3__3899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3899.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3877 = (function() { 
var G__3903__delegate = function (p1,p2,p3,ps){
var ps__3869 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3904 = (function (){
return null;
});
var spn__3905 = (function (x){
return cljs.core.some.call(null,(function (p1__3754_SHARP_){
return p1__3754_SHARP_.call(null,x);
}),ps__3869);
});
var spn__3906 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3755_SHARP_){
var or__3548__auto____3870 = p1__3755_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3870))
{return or__3548__auto____3870;
} else
{return p1__3755_SHARP_.call(null,y);
}
}),ps__3869);
});
var spn__3907 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3756_SHARP_){
var or__3548__auto____3871 = p1__3756_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3871))
{return or__3548__auto____3871;
} else
{var or__3548__auto____3872 = p1__3756_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3872))
{return or__3548__auto____3872;
} else
{return p1__3756_SHARP_.call(null,z);
}
}
}),ps__3869);
});
var spn__3908 = (function() { 
var G__3910__delegate = function (x,y,z,args){
var or__3548__auto____3873 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3873))
{return or__3548__auto____3873;
} else
{return cljs.core.some.call(null,(function (p1__3757_SHARP_){
return cljs.core.some.call(null,p1__3757_SHARP_,args);
}),ps__3869);
}
};
var G__3910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3910__delegate.call(this, x, y, z, args);
};
G__3910.cljs$lang$maxFixedArity = 3;
G__3910.cljs$lang$applyTo = (function (arglist__3911){
var x = cljs.core.first(arglist__3911);
var y = cljs.core.first(cljs.core.next(arglist__3911));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3911)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3911)));
return G__3910__delegate.call(this, x, y, z, args);
});
return G__3910;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3904.call(this);
case  1 :
return spn__3905.call(this,x);
case  2 :
return spn__3906.call(this,x,y);
case  3 :
return spn__3907.call(this,x,y,z);
default:
return spn__3908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3908.cljs$lang$applyTo;
return spn;
})()
};
var G__3903 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3903__delegate.call(this, p1, p2, p3, ps);
};
G__3903.cljs$lang$maxFixedArity = 3;
G__3903.cljs$lang$applyTo = (function (arglist__3912){
var p1 = cljs.core.first(arglist__3912);
var p2 = cljs.core.first(cljs.core.next(arglist__3912));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3912)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3912)));
return G__3903__delegate.call(this, p1, p2, p3, ps);
});
return G__3903;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3874.call(this,p1);
case  2 :
return some_fn__3875.call(this,p1,p2);
case  3 :
return some_fn__3876.call(this,p1,p2,p3);
default:
return some_fn__3877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3877.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3925 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3913 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3913))
{var s__3914 = temp__3698__auto____3913;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3914)),map.call(null,f,cljs.core.rest.call(null,s__3914)));
} else
{return null;
}
})));
});
var map__3926 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3915 = cljs.core.seq.call(null,c1);
var s2__3916 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3917 = s1__3915;

if(cljs.core.truth_(and__3546__auto____3917))
{return s2__3916;
} else
{return and__3546__auto____3917;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3915),cljs.core.first.call(null,s2__3916)),map.call(null,f,cljs.core.rest.call(null,s1__3915),cljs.core.rest.call(null,s2__3916)));
} else
{return null;
}
})));
});
var map__3927 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3918 = cljs.core.seq.call(null,c1);
var s2__3919 = cljs.core.seq.call(null,c2);
var s3__3920 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3921 = s1__3918;

if(cljs.core.truth_(and__3546__auto____3921))
{var and__3546__auto____3922 = s2__3919;

if(cljs.core.truth_(and__3546__auto____3922))
{return s3__3920;
} else
{return and__3546__auto____3922;
}
} else
{return and__3546__auto____3921;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3918),cljs.core.first.call(null,s2__3919),cljs.core.first.call(null,s3__3920)),map.call(null,f,cljs.core.rest.call(null,s1__3918),cljs.core.rest.call(null,s2__3919),cljs.core.rest.call(null,s3__3920)));
} else
{return null;
}
})));
});
var map__3928 = (function() { 
var G__3930__delegate = function (f,c1,c2,c3,colls){
var step__3924 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3923 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3923)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3923),step.call(null,map.call(null,cljs.core.rest,ss__3923)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3835_SHARP_){
return cljs.core.apply.call(null,f,p1__3835_SHARP_);
}),step__3924.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3930 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3930__delegate.call(this, f, c1, c2, c3, colls);
};
G__3930.cljs$lang$maxFixedArity = 4;
G__3930.cljs$lang$applyTo = (function (arglist__3931){
var f = cljs.core.first(arglist__3931);
var c1 = cljs.core.first(cljs.core.next(arglist__3931));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3931)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3931))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3931))));
return G__3930__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3930;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3925.call(this,f,c1);
case  3 :
return map__3926.call(this,f,c1,c2);
case  4 :
return map__3927.call(this,f,c1,c2,c3);
default:
return map__3928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3928.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3932))
{var s__3933 = temp__3698__auto____3932;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3933),take.call(null,(n - 1),cljs.core.rest.call(null,s__3933)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3936 = (function (n,coll){
while(true){
var s__3934 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3935 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3935))
{return s__3934;
} else
{return and__3546__auto____3935;
}
})()))
{{
var G__3937 = (n - 1);
var G__3938 = cljs.core.rest.call(null,s__3934);
n = G__3937;
coll = G__3938;
continue;
}
} else
{return s__3934;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3936.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3939 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3940 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3939.call(this,n);
case  2 :
return drop_last__3940.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3942 = cljs.core.seq.call(null,coll);
var lead__3943 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3943))
{{
var G__3944 = cljs.core.next.call(null,s__3942);
var G__3945 = cljs.core.next.call(null,lead__3943);
s__3942 = G__3944;
lead__3943 = G__3945;
continue;
}
} else
{return s__3942;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3948 = (function (pred,coll){
while(true){
var s__3946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3947 = s__3946;

if(cljs.core.truth_(and__3546__auto____3947))
{return pred.call(null,cljs.core.first.call(null,s__3946));
} else
{return and__3546__auto____3947;
}
})()))
{{
var G__3949 = pred;
var G__3950 = cljs.core.rest.call(null,s__3946);
pred = G__3949;
coll = G__3950;
continue;
}
} else
{return s__3946;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3948.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3951 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3951))
{var s__3952 = temp__3698__auto____3951;

return cljs.core.concat.call(null,s__3952,cycle.call(null,s__3952));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3953 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3954 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3953.call(this,n);
case  2 :
return repeat__3954.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3956 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3957 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3956.call(this,n);
case  2 :
return repeatedly__3957.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3963 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3959 = cljs.core.seq.call(null,c1);
var s2__3960 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3961 = s1__3959;

if(cljs.core.truth_(and__3546__auto____3961))
{return s2__3960;
} else
{return and__3546__auto____3961;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3959),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3960),interleave.call(null,cljs.core.rest.call(null,s1__3959),cljs.core.rest.call(null,s2__3960))));
} else
{return null;
}
})));
});
var interleave__3964 = (function() { 
var G__3966__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3962 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3962)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3962),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3962)));
} else
{return null;
}
})));
};
var G__3966 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3966__delegate.call(this, c1, c2, colls);
};
G__3966.cljs$lang$maxFixedArity = 2;
G__3966.cljs$lang$applyTo = (function (arglist__3967){
var c1 = cljs.core.first(arglist__3967);
var c2 = cljs.core.first(cljs.core.next(arglist__3967));
var colls = cljs.core.rest(cljs.core.next(arglist__3967));
return G__3966__delegate.call(this, c1, c2, colls);
});
return G__3966;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3963.call(this,c1,c2);
default:
return interleave__3964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3964.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3970 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3968 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3968))
{var coll__3969 = temp__3695__auto____3968;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3969),cat.call(null,cljs.core.rest.call(null,coll__3969),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3970.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3971 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3972 = (function() { 
var G__3974__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3974 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3974__delegate.call(this, f, coll, colls);
};
G__3974.cljs$lang$maxFixedArity = 2;
G__3974.cljs$lang$applyTo = (function (arglist__3975){
var f = cljs.core.first(arglist__3975);
var coll = cljs.core.first(cljs.core.next(arglist__3975));
var colls = cljs.core.rest(cljs.core.next(arglist__3975));
return G__3974__delegate.call(this, f, coll, colls);
});
return G__3974;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3971.call(this,f,coll);
default:
return mapcat__3972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3972.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3976 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3976))
{var s__3977 = temp__3698__auto____3976;

var f__3978 = cljs.core.first.call(null,s__3977);
var r__3979 = cljs.core.rest.call(null,s__3977);

if(cljs.core.truth_(pred.call(null,f__3978)))
{return cljs.core.cons.call(null,f__3978,filter.call(null,pred,r__3979));
} else
{return filter.call(null,pred,r__3979);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3981 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3981.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3980_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3980_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3988 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3989 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3982))
{var s__3983 = temp__3698__auto____3982;

var p__3984 = cljs.core.take.call(null,n,s__3983);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3984))))
{return cljs.core.cons.call(null,p__3984,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3983)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3990 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3985 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3985))
{var s__3986 = temp__3698__auto____3985;

var p__3987 = cljs.core.take.call(null,n,s__3986);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3987))))
{return cljs.core.cons.call(null,p__3987,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3986)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3987,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3988.call(this,n,step);
case  3 :
return partition__3989.call(this,n,step,pad);
case  4 :
return partition__3990.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3996 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3997 = (function (m,ks,not_found){
var sentinel__3992 = cljs.core.lookup_sentinel;
var m__3993 = m;
var ks__3994 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3994))
{var m__3995 = cljs.core.get.call(null,m__3993,cljs.core.first.call(null,ks__3994),sentinel__3992);

if(cljs.core.truth_((sentinel__3992 === m__3995)))
{return not_found;
} else
{{
var G__3999 = sentinel__3992;
var G__4000 = m__3995;
var G__4001 = cljs.core.next.call(null,ks__3994);
sentinel__3992 = G__3999;
m__3993 = G__4000;
ks__3994 = G__4001;
continue;
}
}
} else
{return m__3993;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3996.call(this,m,ks);
case  3 :
return get_in__3997.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4002,v){
var vec__4003__4004 = p__4002;
var k__4005 = cljs.core.nth.call(null,vec__4003__4004,0,null);
var ks__4006 = cljs.core.nthnext.call(null,vec__4003__4004,1);

if(cljs.core.truth_(ks__4006))
{return cljs.core.assoc.call(null,m,k__4005,assoc_in.call(null,cljs.core.get.call(null,m,k__4005),ks__4006,v));
} else
{return cljs.core.assoc.call(null,m,k__4005,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4007,f,args){
var vec__4008__4009 = p__4007;
var k__4010 = cljs.core.nth.call(null,vec__4008__4009,0,null);
var ks__4011 = cljs.core.nthnext.call(null,vec__4008__4009,1);

if(cljs.core.truth_(ks__4011))
{return cljs.core.assoc.call(null,m,k__4010,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4010),ks__4011,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4010,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4010),args));
}
};
var update_in = function (m,p__4007,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4007, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4012){
var m = cljs.core.first(arglist__4012);
var p__4007 = cljs.core.first(cljs.core.next(arglist__4012));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4012)));
return update_in__delegate.call(this, m, p__4007, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4013 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4040 = null;
var G__4040__4041 = (function (coll,k){
var this__4014 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4040__4042 = (function (coll,k,not_found){
var this__4015 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4040 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4040__4041.call(this,coll,k);
case  3 :
return G__4040__4042.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4040;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4016 = this;
var new_array__4017 = cljs.core.aclone.call(null,this__4016.array);

(new_array__4017[k] = v);
return (new cljs.core.Vector(this__4016.meta,new_array__4017));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4044 = null;
var G__4044__4045 = (function (coll,k){
var this__4018 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4044__4046 = (function (coll,k,not_found){
var this__4019 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4044 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4044__4045.call(this,coll,k);
case  3 :
return G__4044__4046.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4044;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4020 = this;
var new_array__4021 = cljs.core.aclone.call(null,this__4020.array);

new_array__4021.push(o);
return (new cljs.core.Vector(this__4020.meta,new_array__4021));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4048 = null;
var G__4048__4049 = (function (v,f){
var this__4022 = this;
return cljs.core.ci_reduce.call(null,this__4022.array,f);
});
var G__4048__4050 = (function (v,f,start){
var this__4023 = this;
return cljs.core.ci_reduce.call(null,this__4023.array,f,start);
});
G__4048 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4048__4049.call(this,v,f);
case  3 :
return G__4048__4050.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4048;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4024 = this;
if(cljs.core.truth_((this__4024.array.length > 0)))
{var vector_seq__4025 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4024.array.length)))
{return cljs.core.cons.call(null,(this__4024.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4025.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4026 = this;
return this__4026.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4027 = this;
var count__4028 = this__4027.array.length;

if(cljs.core.truth_((count__4028 > 0)))
{return (this__4027.array[(count__4028 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4029 = this;
if(cljs.core.truth_((this__4029.array.length > 0)))
{var new_array__4030 = cljs.core.aclone.call(null,this__4029.array);

new_array__4030.pop();
return (new cljs.core.Vector(this__4029.meta,new_array__4030));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4031 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4032 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4033 = this;
return (new cljs.core.Vector(meta,this__4033.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4034 = this;
return this__4034.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4052 = null;
var G__4052__4053 = (function (coll,n){
var this__4035 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4036 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4036))
{return (n < this__4035.array.length);
} else
{return and__3546__auto____4036;
}
})()))
{return (this__4035.array[n]);
} else
{return null;
}
});
var G__4052__4054 = (function (coll,n,not_found){
var this__4037 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4038 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4038))
{return (n < this__4037.array.length);
} else
{return and__3546__auto____4038;
}
})()))
{return (this__4037.array[n]);
} else
{return not_found;
}
});
G__4052 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4052__4053.call(this,coll,n);
case  3 :
return G__4052__4054.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4052;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4039 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4039.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4056){
var args = cljs.core.seq( arglist__4056 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4057 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4079 = null;
var G__4079__4080 = (function (coll,k){
var this__4058 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4079__4081 = (function (coll,k,not_found){
var this__4059 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4079 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4079__4080.call(this,coll,k);
case  3 :
return G__4079__4081.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4079;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4060 = this;
var v_pos__4061 = (this__4060.start + key);

return (new cljs.core.Subvec(this__4060.meta,cljs.core._assoc.call(null,this__4060.v,v_pos__4061,val),this__4060.start,((this__4060.end > (v_pos__4061 + 1)) ? this__4060.end : (v_pos__4061 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4083 = null;
var G__4083__4084 = (function (coll,k){
var this__4062 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4083__4085 = (function (coll,k,not_found){
var this__4063 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4083 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4083__4084.call(this,coll,k);
case  3 :
return G__4083__4085.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4083;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4064 = this;
return (new cljs.core.Subvec(this__4064.meta,cljs.core._assoc_n.call(null,this__4064.v,this__4064.end,o),this__4064.start,(this__4064.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4087 = null;
var G__4087__4088 = (function (coll,f){
var this__4065 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4087__4089 = (function (coll,f,start){
var this__4066 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4087 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4087__4088.call(this,coll,f);
case  3 :
return G__4087__4089.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4087;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4067 = this;
var subvec_seq__4068 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4067.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4067.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4068.call(null,this__4067.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4069 = this;
return (this__4069.end - this__4069.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4070 = this;
return cljs.core._nth.call(null,this__4070.v,(this__4070.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4071 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4071.start,this__4071.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4071.meta,this__4071.v,this__4071.start,(this__4071.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4072 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4073 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4074 = this;
return (new cljs.core.Subvec(meta,this__4074.v,this__4074.start,this__4074.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4075 = this;
return this__4075.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4091 = null;
var G__4091__4092 = (function (coll,n){
var this__4076 = this;
return cljs.core._nth.call(null,this__4076.v,(this__4076.start + n));
});
var G__4091__4093 = (function (coll,n,not_found){
var this__4077 = this;
return cljs.core._nth.call(null,this__4077.v,(this__4077.start + n),not_found);
});
G__4091 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4091__4092.call(this,coll,n);
case  3 :
return G__4091__4093.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4091;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4078 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4078.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4095 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4096 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4095.call(this,v,start);
case  3 :
return subvec__4096.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4098 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4100 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4101 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4101.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4102 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4103 = this;
return cljs.core._first.call(null,this__4103.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4104 = this;
var temp__3695__auto____4105 = cljs.core.next.call(null,this__4104.front);

if(cljs.core.truth_(temp__3695__auto____4105))
{var f1__4106 = temp__3695__auto____4105;

return (new cljs.core.PersistentQueueSeq(this__4104.meta,f1__4106,this__4104.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4104.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4104.meta,this__4104.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4107 = this;
return this__4107.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4108 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4108.front,this__4108.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4109 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4110 = this;
if(cljs.core.truth_(this__4110.front))
{return (new cljs.core.PersistentQueue(this__4110.meta,(this__4110.count + 1),this__4110.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4111 = this__4110.rear;

if(cljs.core.truth_(or__3548__auto____4111))
{return or__3548__auto____4111;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4110.meta,(this__4110.count + 1),cljs.core.conj.call(null,this__4110.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4112 = this;
var rear__4113 = cljs.core.seq.call(null,this__4112.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4114 = this__4112.front;

if(cljs.core.truth_(or__3548__auto____4114))
{return or__3548__auto____4114;
} else
{return rear__4113;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4112.front,cljs.core.seq.call(null,rear__4113)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4115 = this;
return this__4115.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4116 = this;
return cljs.core._first.call(null,this__4116.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4117 = this;
if(cljs.core.truth_(this__4117.front))
{var temp__3695__auto____4118 = cljs.core.next.call(null,this__4117.front);

if(cljs.core.truth_(temp__3695__auto____4118))
{var f1__4119 = temp__3695__auto____4118;

return (new cljs.core.PersistentQueue(this__4117.meta,(this__4117.count - 1),f1__4119,this__4117.rear));
} else
{return (new cljs.core.PersistentQueue(this__4117.meta,(this__4117.count - 1),cljs.core.seq.call(null,this__4117.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4120 = this;
return cljs.core.first.call(null,this__4120.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4121 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4122 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4123 = this;
return (new cljs.core.PersistentQueue(meta,this__4123.count,this__4123.front,this__4123.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4124 = this;
return this__4124.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4125 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4126 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4127 = array.length;

var i__4128 = 0;

while(true){
if(cljs.core.truth_((i__4128 < len__4127)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4128]))))
{return i__4128;
} else
{{
var G__4129 = (i__4128 + incr);
i__4128 = G__4129;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4131 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4132 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4130 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4130))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4130;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4131.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4132.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4135 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4156 = null;
var G__4156__4157 = (function (coll,k){
var this__4136 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4156__4158 = (function (coll,k,not_found){
var this__4137 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4137.strobj,(this__4137.strobj[k]),not_found);
});
G__4156 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4156__4157.call(this,coll,k);
case  3 :
return G__4156__4158.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4156;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4138 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4139 = goog.object.clone.call(null,this__4138.strobj);
var overwrite_QMARK___4140 = new_strobj__4139.hasOwnProperty(k);

(new_strobj__4139[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4140))
{return (new cljs.core.ObjMap(this__4138.meta,this__4138.keys,new_strobj__4139));
} else
{var new_keys__4141 = cljs.core.aclone.call(null,this__4138.keys);

new_keys__4141.push(k);
return (new cljs.core.ObjMap(this__4138.meta,new_keys__4141,new_strobj__4139));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4138.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4142 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4142.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4160 = null;
var G__4160__4161 = (function (coll,k){
var this__4143 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4160__4162 = (function (coll,k,not_found){
var this__4144 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4160 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4160__4161.call(this,coll,k);
case  3 :
return G__4160__4162.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4160;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4145 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4146 = this;
if(cljs.core.truth_((this__4146.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4134_SHARP_){
return cljs.core.vector.call(null,p1__4134_SHARP_,(this__4146.strobj[p1__4134_SHARP_]));
}),this__4146.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4147 = this;
return this__4147.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4148 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4149 = this;
return (new cljs.core.ObjMap(meta,this__4149.keys,this__4149.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4150 = this;
return this__4150.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4151 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4151.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4152 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4153 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4153))
{return this__4152.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4153;
}
})()))
{var new_keys__4154 = cljs.core.aclone.call(null,this__4152.keys);
var new_strobj__4155 = goog.object.clone.call(null,this__4152.strobj);

new_keys__4154.splice(cljs.core.scan_array.call(null,1,k,new_keys__4154),1);
cljs.core.js_delete.call(null,new_strobj__4155,k);
return (new cljs.core.ObjMap(this__4152.meta,new_keys__4154,new_strobj__4155));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4165 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4197 = null;
var G__4197__4198 = (function (coll,k){
var this__4166 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4197__4199 = (function (coll,k,not_found){
var this__4167 = this;
var bucket__4168 = (this__4167.hashobj[cljs.core.hash.call(null,k)]);
var i__4169 = (cljs.core.truth_(bucket__4168)?cljs.core.scan_array.call(null,2,k,bucket__4168):null);

if(cljs.core.truth_(i__4169))
{return (bucket__4168[(i__4169 + 1)]);
} else
{return not_found;
}
});
G__4197 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4197__4198.call(this,coll,k);
case  3 :
return G__4197__4199.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4197;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4170 = this;
var h__4171 = cljs.core.hash.call(null,k);
var bucket__4172 = (this__4170.hashobj[h__4171]);

if(cljs.core.truth_(bucket__4172))
{var new_bucket__4173 = cljs.core.aclone.call(null,bucket__4172);
var new_hashobj__4174 = goog.object.clone.call(null,this__4170.hashobj);

(new_hashobj__4174[h__4171] = new_bucket__4173);
var temp__3695__auto____4175 = cljs.core.scan_array.call(null,2,k,new_bucket__4173);

if(cljs.core.truth_(temp__3695__auto____4175))
{var i__4176 = temp__3695__auto____4175;

(new_bucket__4173[(i__4176 + 1)] = v);
return (new cljs.core.HashMap(this__4170.meta,this__4170.count,new_hashobj__4174));
} else
{new_bucket__4173.push(k,v);
return (new cljs.core.HashMap(this__4170.meta,(this__4170.count + 1),new_hashobj__4174));
}
} else
{var new_hashobj__4177 = goog.object.clone.call(null,this__4170.hashobj);

(new_hashobj__4177[h__4171] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4170.meta,(this__4170.count + 1),new_hashobj__4177));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4178 = this;
var bucket__4179 = (this__4178.hashobj[cljs.core.hash.call(null,k)]);
var i__4180 = (cljs.core.truth_(bucket__4179)?cljs.core.scan_array.call(null,2,k,bucket__4179):null);

if(cljs.core.truth_(i__4180))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4201 = null;
var G__4201__4202 = (function (coll,k){
var this__4181 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4201__4203 = (function (coll,k,not_found){
var this__4182 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4201 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4201__4202.call(this,coll,k);
case  3 :
return G__4201__4203.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4201;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4183 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4184 = this;
if(cljs.core.truth_((this__4184.count > 0)))
{var hashes__4185 = cljs.core.js_keys.call(null,this__4184.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4164_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4184.hashobj[p1__4164_SHARP_])));
}),hashes__4185);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4186 = this;
return this__4186.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4187 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4188 = this;
return (new cljs.core.HashMap(meta,this__4188.count,this__4188.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4189 = this;
return this__4189.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4190 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4190.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4191 = this;
var h__4192 = cljs.core.hash.call(null,k);
var bucket__4193 = (this__4191.hashobj[h__4192]);
var i__4194 = (cljs.core.truth_(bucket__4193)?cljs.core.scan_array.call(null,2,k,bucket__4193):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4194)))
{return coll;
} else
{var new_hashobj__4195 = goog.object.clone.call(null,this__4191.hashobj);

if(cljs.core.truth_((3 > bucket__4193.length)))
{cljs.core.js_delete.call(null,new_hashobj__4195,h__4192);
} else
{var new_bucket__4196 = cljs.core.aclone.call(null,bucket__4193);

new_bucket__4196.splice(i__4194,2);
(new_hashobj__4195[h__4192] = new_bucket__4196);
}
return (new cljs.core.HashMap(this__4191.meta,(this__4191.count - 1),new_hashobj__4195));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4205 = ks.length;

var i__4206 = 0;
var out__4207 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4206 < len__4205)))
{{
var G__4208 = (i__4206 + 1);
var G__4209 = cljs.core.assoc.call(null,out__4207,(ks[i__4206]),(vs[i__4206]));
i__4206 = G__4208;
out__4207 = G__4209;
continue;
}
} else
{return out__4207;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4210 = cljs.core.seq.call(null,keyvals);
var out__4211 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4210))
{{
var G__4212 = cljs.core.nnext.call(null,in$__4210);
var G__4213 = cljs.core.assoc.call(null,out__4211,cljs.core.first.call(null,in$__4210),cljs.core.second.call(null,in$__4210));
in$__4210 = G__4212;
out__4211 = G__4213;
continue;
}
} else
{return out__4211;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4214){
var keyvals = cljs.core.seq( arglist__4214 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4215_SHARP_,p2__4216_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4217 = p1__4215_SHARP_;

if(cljs.core.truth_(or__3548__auto____4217))
{return or__3548__auto____4217;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4216_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4218){
var maps = cljs.core.seq( arglist__4218 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4221 = (function (m,e){
var k__4219 = cljs.core.first.call(null,e);
var v__4220 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4219)))
{return cljs.core.assoc.call(null,m,k__4219,f.call(null,cljs.core.get.call(null,m,k__4219),v__4220));
} else
{return cljs.core.assoc.call(null,m,k__4219,v__4220);
}
});
var merge2__4223 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4221,(function (){var or__3548__auto____4222 = m1;

if(cljs.core.truth_(or__3548__auto____4222))
{return or__3548__auto____4222;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4223,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4224){
var f = cljs.core.first(arglist__4224);
var maps = cljs.core.rest(arglist__4224);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4226 = cljs.core.ObjMap.fromObject([],{});
var keys__4227 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4227))
{var key__4228 = cljs.core.first.call(null,keys__4227);
var entry__4229 = cljs.core.get.call(null,map,key__4228,"﷐'user/not-found");

{
var G__4230 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4229,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4226,key__4228,entry__4229):ret__4226);
var G__4231 = cljs.core.next.call(null,keys__4227);
ret__4226 = G__4230;
keys__4227 = G__4231;
continue;
}
} else
{return ret__4226;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4232 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4247 = null;
var G__4247__4248 = (function (coll,v){
var this__4233 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4247__4249 = (function (coll,v,not_found){
var this__4234 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4234.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4247 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4247__4248.call(this,coll,v);
case  3 :
return G__4247__4249.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4247;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4251 = null;
var G__4251__4252 = (function (coll,k){
var this__4235 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4251__4253 = (function (coll,k,not_found){
var this__4236 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4251 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4251__4252.call(this,coll,k);
case  3 :
return G__4251__4253.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4251;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4237 = this;
return (new cljs.core.Set(this__4237.meta,cljs.core.assoc.call(null,this__4237.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4238 = this;
return cljs.core.keys.call(null,this__4238.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4239 = this;
return (new cljs.core.Set(this__4239.meta,cljs.core.dissoc.call(null,this__4239.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4240 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4241 = this;
var and__3546__auto____4242 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4242))
{var and__3546__auto____4243 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4243))
{return cljs.core.every_QMARK_.call(null,(function (p1__4225_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4225_SHARP_);
}),other);
} else
{return and__3546__auto____4243;
}
} else
{return and__3546__auto____4242;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4244 = this;
return (new cljs.core.Set(meta,this__4244.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4245 = this;
return this__4245.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4246 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4246.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4256 = cljs.core.seq.call(null,coll);
var out__4257 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4256))))
{{
var G__4258 = cljs.core.rest.call(null,in$__4256);
var G__4259 = cljs.core.conj.call(null,out__4257,cljs.core.first.call(null,in$__4256));
in$__4256 = G__4258;
out__4257 = G__4259;
continue;
}
} else
{return out__4257;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4260 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4261 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4261))
{var e__4262 = temp__3695__auto____4261;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4262));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4260,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4255_SHARP_){
var temp__3695__auto____4263 = cljs.core.find.call(null,smap,p1__4255_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4263))
{var e__4264 = temp__3695__auto____4263;

return cljs.core.second.call(null,e__4264);
} else
{return p1__4255_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4272 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4265,seen){
while(true){
var vec__4266__4267 = p__4265;
var f__4268 = cljs.core.nth.call(null,vec__4266__4267,0,null);
var xs__4269 = vec__4266__4267;

var temp__3698__auto____4270 = cljs.core.seq.call(null,xs__4269);

if(cljs.core.truth_(temp__3698__auto____4270))
{var s__4271 = temp__3698__auto____4270;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4268)))
{{
var G__4273 = cljs.core.rest.call(null,s__4271);
var G__4274 = seen;
p__4265 = G__4273;
seen = G__4274;
continue;
}
} else
{return cljs.core.cons.call(null,f__4268,step.call(null,cljs.core.rest.call(null,s__4271),cljs.core.conj.call(null,seen,f__4268)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4272.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4275 = cljs.core.Vector.fromArray([]);
var s__4276 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4276)))
{{
var G__4277 = cljs.core.conj.call(null,ret__4275,cljs.core.first.call(null,s__4276));
var G__4278 = cljs.core.next.call(null,s__4276);
ret__4275 = G__4277;
s__4276 = G__4278;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4275);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4279 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4279))
{return or__3548__auto____4279;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4280 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4280 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4280 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4281 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4281))
{return or__3548__auto____4281;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4282 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4282 > -1)))
{return cljs.core.subs.call(null,x,2,i__4282);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4285 = cljs.core.ObjMap.fromObject([],{});
var ks__4286 = cljs.core.seq.call(null,keys);
var vs__4287 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4288 = ks__4286;

if(cljs.core.truth_(and__3546__auto____4288))
{return vs__4287;
} else
{return and__3546__auto____4288;
}
})()))
{{
var G__4289 = cljs.core.assoc.call(null,map__4285,cljs.core.first.call(null,ks__4286),cljs.core.first.call(null,vs__4287));
var G__4290 = cljs.core.next.call(null,ks__4286);
var G__4291 = cljs.core.next.call(null,vs__4287);
map__4285 = G__4289;
ks__4286 = G__4290;
vs__4287 = G__4291;
continue;
}
} else
{return map__4285;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4294 = (function (k,x){
return x;
});
var max_key__4295 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4296 = (function() { 
var G__4298__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4283_SHARP_,p2__4284_SHARP_){
return max_key.call(null,k,p1__4283_SHARP_,p2__4284_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4298 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4298__delegate.call(this, k, x, y, more);
};
G__4298.cljs$lang$maxFixedArity = 3;
G__4298.cljs$lang$applyTo = (function (arglist__4299){
var k = cljs.core.first(arglist__4299);
var x = cljs.core.first(cljs.core.next(arglist__4299));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4299)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4299)));
return G__4298__delegate.call(this, k, x, y, more);
});
return G__4298;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4294.call(this,k,x);
case  3 :
return max_key__4295.call(this,k,x,y);
default:
return max_key__4296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4296.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4300 = (function (k,x){
return x;
});
var min_key__4301 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4302 = (function() { 
var G__4304__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4292_SHARP_,p2__4293_SHARP_){
return min_key.call(null,k,p1__4292_SHARP_,p2__4293_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4304 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4304__delegate.call(this, k, x, y, more);
};
G__4304.cljs$lang$maxFixedArity = 3;
G__4304.cljs$lang$applyTo = (function (arglist__4305){
var k = cljs.core.first(arglist__4305);
var x = cljs.core.first(cljs.core.next(arglist__4305));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4305)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4305)));
return G__4304__delegate.call(this, k, x, y, more);
});
return G__4304;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4300.call(this,k,x);
case  3 :
return min_key__4301.call(this,k,x,y);
default:
return min_key__4302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4302.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4308 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4309 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4306 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4306))
{var s__4307 = temp__3698__auto____4306;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4307),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4307)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4308.call(this,n,step);
case  3 :
return partition_all__4309.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4311 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4311))
{var s__4312 = temp__3698__auto____4311;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4312))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4312),take_while.call(null,pred,cljs.core.rest.call(null,s__4312)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4313 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4314 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4330 = null;
var G__4330__4331 = (function (rng,f){
var this__4315 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4330__4332 = (function (rng,f,s){
var this__4316 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4330 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4330__4331.call(this,rng,f);
case  3 :
return G__4330__4332.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4330;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4317 = this;
var comp__4318 = (cljs.core.truth_((this__4317.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4318.call(null,this__4317.start,this__4317.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4319 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4319.end - this__4319.start) / this__4319.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4320 = this;
return this__4320.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4321 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4321.meta,(this__4321.start + this__4321.step),this__4321.end,this__4321.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4322 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4323 = this;
return (new cljs.core.Range(meta,this__4323.start,this__4323.end,this__4323.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4324 = this;
return this__4324.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4334 = null;
var G__4334__4335 = (function (rng,n){
var this__4325 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4325.start + (n * this__4325.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4326 = (this__4325.start > this__4325.end);

if(cljs.core.truth_(and__3546__auto____4326))
{return cljs.core._EQ_.call(null,this__4325.step,0);
} else
{return and__3546__auto____4326;
}
})()))
{return this__4325.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4334__4336 = (function (rng,n,not_found){
var this__4327 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4327.start + (n * this__4327.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4328 = (this__4327.start > this__4327.end);

if(cljs.core.truth_(and__3546__auto____4328))
{return cljs.core._EQ_.call(null,this__4327.step,0);
} else
{return and__3546__auto____4328;
}
})()))
{return this__4327.start;
} else
{return not_found;
}
}
});
G__4334 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4334__4335.call(this,rng,n);
case  3 :
return G__4334__4336.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4334;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4329 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4329.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4338 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4339 = (function (end){
return range.call(null,0,end,1);
});
var range__4340 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4341 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4338.call(this);
case  1 :
return range__4339.call(this,start);
case  2 :
return range__4340.call(this,start,end);
case  3 :
return range__4341.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4343 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4343))
{var s__4344 = temp__3698__auto____4343;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4344),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4344)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4346 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4346))
{var s__4347 = temp__3698__auto____4346;

var fst__4348 = cljs.core.first.call(null,s__4347);
var fv__4349 = f.call(null,fst__4348);
var run__4350 = cljs.core.cons.call(null,fst__4348,cljs.core.take_while.call(null,(function (p1__4345_SHARP_){
return cljs.core._EQ_.call(null,fv__4349,f.call(null,p1__4345_SHARP_));
}),cljs.core.next.call(null,s__4347)));

return cljs.core.cons.call(null,run__4350,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4350),s__4347))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4365 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4361 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4361))
{var s__4362 = temp__3695__auto____4361;

return reductions.call(null,f,cljs.core.first.call(null,s__4362),cljs.core.rest.call(null,s__4362));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4366 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4363))
{var s__4364 = temp__3698__auto____4363;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4364)),cljs.core.rest.call(null,s__4364));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4365.call(this,f,init);
case  3 :
return reductions__4366.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4369 = (function (f){
return (function() {
var G__4374 = null;
var G__4374__4375 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4374__4376 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4374__4377 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4374__4378 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4374__4379 = (function() { 
var G__4381__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4381__delegate.call(this, x, y, z, args);
};
G__4381.cljs$lang$maxFixedArity = 3;
G__4381.cljs$lang$applyTo = (function (arglist__4382){
var x = cljs.core.first(arglist__4382);
var y = cljs.core.first(cljs.core.next(arglist__4382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4382)));
return G__4381__delegate.call(this, x, y, z, args);
});
return G__4381;
})()
;
G__4374 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4374__4375.call(this);
case  1 :
return G__4374__4376.call(this,x);
case  2 :
return G__4374__4377.call(this,x,y);
case  3 :
return G__4374__4378.call(this,x,y,z);
default:
return G__4374__4379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4374.cljs$lang$maxFixedArity = 3;
G__4374.cljs$lang$applyTo = G__4374__4379.cljs$lang$applyTo;
return G__4374;
})()
});
var juxt__4370 = (function (f,g){
return (function() {
var G__4383 = null;
var G__4383__4384 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4383__4385 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4383__4386 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4383__4387 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4383__4388 = (function() { 
var G__4390__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4390 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4390__delegate.call(this, x, y, z, args);
};
G__4390.cljs$lang$maxFixedArity = 3;
G__4390.cljs$lang$applyTo = (function (arglist__4391){
var x = cljs.core.first(arglist__4391);
var y = cljs.core.first(cljs.core.next(arglist__4391));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4391)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4391)));
return G__4390__delegate.call(this, x, y, z, args);
});
return G__4390;
})()
;
G__4383 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4383__4384.call(this);
case  1 :
return G__4383__4385.call(this,x);
case  2 :
return G__4383__4386.call(this,x,y);
case  3 :
return G__4383__4387.call(this,x,y,z);
default:
return G__4383__4388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4383.cljs$lang$maxFixedArity = 3;
G__4383.cljs$lang$applyTo = G__4383__4388.cljs$lang$applyTo;
return G__4383;
})()
});
var juxt__4371 = (function (f,g,h){
return (function() {
var G__4392 = null;
var G__4392__4393 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4392__4394 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4392__4395 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4392__4396 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4392__4397 = (function() { 
var G__4399__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4399 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4399__delegate.call(this, x, y, z, args);
};
G__4399.cljs$lang$maxFixedArity = 3;
G__4399.cljs$lang$applyTo = (function (arglist__4400){
var x = cljs.core.first(arglist__4400);
var y = cljs.core.first(cljs.core.next(arglist__4400));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4400)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4400)));
return G__4399__delegate.call(this, x, y, z, args);
});
return G__4399;
})()
;
G__4392 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4392__4393.call(this);
case  1 :
return G__4392__4394.call(this,x);
case  2 :
return G__4392__4395.call(this,x,y);
case  3 :
return G__4392__4396.call(this,x,y,z);
default:
return G__4392__4397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4392.cljs$lang$maxFixedArity = 3;
G__4392.cljs$lang$applyTo = G__4392__4397.cljs$lang$applyTo;
return G__4392;
})()
});
var juxt__4372 = (function() { 
var G__4401__delegate = function (f,g,h,fs){
var fs__4368 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4402 = null;
var G__4402__4403 = (function (){
return cljs.core.reduce.call(null,(function (p1__4351_SHARP_,p2__4352_SHARP_){
return cljs.core.conj.call(null,p1__4351_SHARP_,p2__4352_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4368);
});
var G__4402__4404 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4353_SHARP_,p2__4354_SHARP_){
return cljs.core.conj.call(null,p1__4353_SHARP_,p2__4354_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4368);
});
var G__4402__4405 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4355_SHARP_,p2__4356_SHARP_){
return cljs.core.conj.call(null,p1__4355_SHARP_,p2__4356_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4368);
});
var G__4402__4406 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4357_SHARP_,p2__4358_SHARP_){
return cljs.core.conj.call(null,p1__4357_SHARP_,p2__4358_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4368);
});
var G__4402__4407 = (function() { 
var G__4409__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4359_SHARP_,p2__4360_SHARP_){
return cljs.core.conj.call(null,p1__4359_SHARP_,cljs.core.apply.call(null,p2__4360_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4368);
};
var G__4409 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4409__delegate.call(this, x, y, z, args);
};
G__4409.cljs$lang$maxFixedArity = 3;
G__4409.cljs$lang$applyTo = (function (arglist__4410){
var x = cljs.core.first(arglist__4410);
var y = cljs.core.first(cljs.core.next(arglist__4410));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4410)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4410)));
return G__4409__delegate.call(this, x, y, z, args);
});
return G__4409;
})()
;
G__4402 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4402__4403.call(this);
case  1 :
return G__4402__4404.call(this,x);
case  2 :
return G__4402__4405.call(this,x,y);
case  3 :
return G__4402__4406.call(this,x,y,z);
default:
return G__4402__4407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4402.cljs$lang$maxFixedArity = 3;
G__4402.cljs$lang$applyTo = G__4402__4407.cljs$lang$applyTo;
return G__4402;
})()
};
var G__4401 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4401__delegate.call(this, f, g, h, fs);
};
G__4401.cljs$lang$maxFixedArity = 3;
G__4401.cljs$lang$applyTo = (function (arglist__4411){
var f = cljs.core.first(arglist__4411);
var g = cljs.core.first(cljs.core.next(arglist__4411));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4411)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4411)));
return G__4401__delegate.call(this, f, g, h, fs);
});
return G__4401;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4369.call(this,f);
case  2 :
return juxt__4370.call(this,f,g);
case  3 :
return juxt__4371.call(this,f,g,h);
default:
return juxt__4372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4372.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4413 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4416 = cljs.core.next.call(null,coll);
coll = G__4416;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4414 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4412 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4412))
{return (n > 0);
} else
{return and__3546__auto____4412;
}
})()))
{{
var G__4417 = (n - 1);
var G__4418 = cljs.core.next.call(null,coll);
n = G__4417;
coll = G__4418;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4413.call(this,n);
case  2 :
return dorun__4414.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4419 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4420 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4419.call(this,n);
case  2 :
return doall__4420.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4422 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4422),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4422),1)))
{return cljs.core.first.call(null,matches__4422);
} else
{return cljs.core.vec.call(null,matches__4422);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4423 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4423)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4423),1)))
{return cljs.core.first.call(null,matches__4423);
} else
{return cljs.core.vec.call(null,matches__4423);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4424 = cljs.core.re_find.call(null,re,s);
var match_idx__4425 = s.search(re);
var match_str__4426 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4424))?cljs.core.first.call(null,match_data__4424):match_data__4424);
var post_match__4427 = cljs.core.subs.call(null,s,(match_idx__4425 + cljs.core.count.call(null,match_str__4426)));

if(cljs.core.truth_(match_data__4424))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4424,re_seq.call(null,re,post_match__4427));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4428_SHARP_){
return print_one.call(null,p1__4428_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4429 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4429))
{var and__3546__auto____4433 = (function (){var x__445__auto____4430 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4431 = x__445__auto____4430;

if(cljs.core.truth_(and__3546__auto____4431))
{var and__3546__auto____4432 = x__445__auto____4430.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4432))
{return cljs.core.not.call(null,x__445__auto____4430.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4432;
}
} else
{return and__3546__auto____4431;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____4430);
}
})();

if(cljs.core.truth_(and__3546__auto____4433))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4433;
}
} else
{return and__3546__auto____4429;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____4434 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4435 = x__445__auto____4434;

if(cljs.core.truth_(and__3546__auto____4435))
{var and__3546__auto____4436 = x__445__auto____4434.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4436))
{return cljs.core.not.call(null,x__445__auto____4434.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4436;
}
} else
{return and__3546__auto____4435;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____4434);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4437 = cljs.core.first.call(null,objs);
var sb__4438 = (new goog.string.StringBuffer());

var G__4439__4440 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4439__4440))
{var obj__4441 = cljs.core.first.call(null,G__4439__4440);
var G__4439__4442 = G__4439__4440;

while(true){
if(cljs.core.truth_((obj__4441 === first_obj__4437)))
{} else
{sb__4438.append(" ");
}
var G__4443__4444 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4441,opts));

if(cljs.core.truth_(G__4443__4444))
{var string__4445 = cljs.core.first.call(null,G__4443__4444);
var G__4443__4446 = G__4443__4444;

while(true){
sb__4438.append(string__4445);
var temp__3698__auto____4447 = cljs.core.next.call(null,G__4443__4446);

if(cljs.core.truth_(temp__3698__auto____4447))
{var G__4443__4448 = temp__3698__auto____4447;

{
var G__4451 = cljs.core.first.call(null,G__4443__4448);
var G__4452 = G__4443__4448;
string__4445 = G__4451;
G__4443__4446 = G__4452;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4449 = cljs.core.next.call(null,G__4439__4442);

if(cljs.core.truth_(temp__3698__auto____4449))
{var G__4439__4450 = temp__3698__auto____4449;

{
var G__4453 = cljs.core.first.call(null,G__4439__4450);
var G__4454 = G__4439__4450;
obj__4441 = G__4453;
G__4439__4442 = G__4454;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4438);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4455 = cljs.core.first.call(null,objs);

var G__4456__4457 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4456__4457))
{var obj__4458 = cljs.core.first.call(null,G__4456__4457);
var G__4456__4459 = G__4456__4457;

while(true){
if(cljs.core.truth_((obj__4458 === first_obj__4455)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4460__4461 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4458,opts));

if(cljs.core.truth_(G__4460__4461))
{var string__4462 = cljs.core.first.call(null,G__4460__4461);
var G__4460__4463 = G__4460__4461;

while(true){
cljs.core.string_print.call(null,string__4462);
var temp__3698__auto____4464 = cljs.core.next.call(null,G__4460__4463);

if(cljs.core.truth_(temp__3698__auto____4464))
{var G__4460__4465 = temp__3698__auto____4464;

{
var G__4468 = cljs.core.first.call(null,G__4460__4465);
var G__4469 = G__4460__4465;
string__4462 = G__4468;
G__4460__4463 = G__4469;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4466 = cljs.core.next.call(null,G__4456__4459);

if(cljs.core.truth_(temp__3698__auto____4466))
{var G__4456__4467 = temp__3698__auto____4466;

{
var G__4470 = cljs.core.first.call(null,G__4456__4467);
var G__4471 = G__4456__4467;
obj__4458 = G__4470;
G__4456__4459 = G__4471;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4472){
var objs = cljs.core.seq( arglist__4472 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4473){
var objs = cljs.core.seq( arglist__4473 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4474){
var objs = cljs.core.seq( arglist__4474 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4475){
var objs = cljs.core.seq( arglist__4475 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4476){
var objs = cljs.core.seq( arglist__4476 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4477 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4477,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4478 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4478))
{var nspc__4479 = temp__3698__auto____4478;

return cljs.core.str.call(null,nspc__4479,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4480 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4480))
{var nspc__4481 = temp__3698__auto____4480;

return cljs.core.str.call(null,nspc__4481,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4482 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4482,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4483 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4484 = this;
var G__4485__4486 = cljs.core.seq.call(null,this__4484.watches);

if(cljs.core.truth_(G__4485__4486))
{var G__4488__4490 = cljs.core.first.call(null,G__4485__4486);
var vec__4489__4491 = G__4488__4490;
var key__4492 = cljs.core.nth.call(null,vec__4489__4491,0,null);
var f__4493 = cljs.core.nth.call(null,vec__4489__4491,1,null);
var G__4485__4494 = G__4485__4486;

var G__4488__4495 = G__4488__4490;
var G__4485__4496 = G__4485__4494;

while(true){
var vec__4497__4498 = G__4488__4495;
var key__4499 = cljs.core.nth.call(null,vec__4497__4498,0,null);
var f__4500 = cljs.core.nth.call(null,vec__4497__4498,1,null);
var G__4485__4501 = G__4485__4496;

f__4500.call(null,key__4499,this$,oldval,newval);
var temp__3698__auto____4502 = cljs.core.next.call(null,G__4485__4501);

if(cljs.core.truth_(temp__3698__auto____4502))
{var G__4485__4503 = temp__3698__auto____4502;

{
var G__4510 = cljs.core.first.call(null,G__4485__4503);
var G__4511 = G__4485__4503;
G__4488__4495 = G__4510;
G__4485__4496 = G__4511;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4504 = this;
return this$.watches = cljs.core.assoc.call(null,this__4504.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4505 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4505.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4506 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4506.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4507 = this;
return this__4507.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4508 = this;
return this__4508.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4509 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4518 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4519 = (function() { 
var G__4521__delegate = function (x,p__4512){
var map__4513__4514 = p__4512;
var map__4513__4515 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4513__4514))?cljs.core.apply.call(null,cljs.core.hash_map,map__4513__4514):map__4513__4514);
var validator__4516 = cljs.core.get.call(null,map__4513__4515,"﷐'validator");
var meta__4517 = cljs.core.get.call(null,map__4513__4515,"﷐'meta");

return (new cljs.core.Atom(x,meta__4517,validator__4516,null));
};
var G__4521 = function (x,var_args){
var p__4512 = null;
if (goog.isDef(var_args)) {
  p__4512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4521__delegate.call(this, x, p__4512);
};
G__4521.cljs$lang$maxFixedArity = 1;
G__4521.cljs$lang$applyTo = (function (arglist__4522){
var x = cljs.core.first(arglist__4522);
var p__4512 = cljs.core.rest(arglist__4522);
return G__4521__delegate.call(this, x, p__4512);
});
return G__4521;
})()
;
atom = function(x,var_args){
var p__4512 = var_args;
switch(arguments.length){
case  1 :
return atom__4518.call(this,x);
default:
return atom__4519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4519.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4523 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4523))
{var validate__4524 = temp__3698__auto____4523;

if(cljs.core.truth_(validate__4524.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__4525 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4525,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4526 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4527 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4528 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4529 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4530 = (function() { 
var G__4532__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4532 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4532__delegate.call(this, a, f, x, y, z, more);
};
G__4532.cljs$lang$maxFixedArity = 5;
G__4532.cljs$lang$applyTo = (function (arglist__4533){
var a = cljs.core.first(arglist__4533);
var f = cljs.core.first(cljs.core.next(arglist__4533));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4533)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4533))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4533)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4533)))));
return G__4532__delegate.call(this, a, f, x, y, z, more);
});
return G__4532;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4526.call(this,a,f);
case  3 :
return swap_BANG___4527.call(this,a,f,x);
case  4 :
return swap_BANG___4528.call(this,a,f,x,y);
case  5 :
return swap_BANG___4529.call(this,a,f,x,y,z);
default:
return swap_BANG___4530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4530.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4534){
var iref = cljs.core.first(arglist__4534);
var f = cljs.core.first(cljs.core.next(arglist__4534));
var args = cljs.core.rest(cljs.core.next(arglist__4534));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4535 = (function (){
return gensym.call(null,"G__");
});
var gensym__4536 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4535.call(this);
case  1 :
return gensym__4536.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4538 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4538.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4539 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4539.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4539.state,this__4539.f);
}
return cljs.core.deref.call(null,this__4539.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__4540){
var body = cljs.core.seq( arglist__4540 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4541__4542 = options;
var map__4541__4543 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4541__4542))?cljs.core.apply.call(null,cljs.core.hash_map,map__4541__4542):map__4541__4542);
var keywordize_keys__4544 = cljs.core.get.call(null,map__4541__4543,"﷐'keywordize-keys");
var keyfn__4545 = (cljs.core.truth_(keywordize_keys__4544)?cljs.core.keyword:cljs.core.str);
var f__4551 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____4550 = (function iter__4546(s__4547){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4547__4548 = s__4547;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4547__4548)))
{var k__4549 = cljs.core.first.call(null,s__4547__4548);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4545.call(null,k__4549),thisfn.call(null,(x[k__4549]))]),iter__4546.call(null,cljs.core.rest.call(null,s__4547__4548)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____4550.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4551.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4552){
var x = cljs.core.first(arglist__4552);
var options = cljs.core.rest(arglist__4552);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4553 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4557__delegate = function (args){
var temp__3695__auto____4554 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4553),args);

if(cljs.core.truth_(temp__3695__auto____4554))
{var v__4555 = temp__3695__auto____4554;

return v__4555;
} else
{var ret__4556 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4553,cljs.core.assoc,args,ret__4556);
return ret__4556;
}
};
var G__4557 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4557__delegate.call(this, args);
};
G__4557.cljs$lang$maxFixedArity = 0;
G__4557.cljs$lang$applyTo = (function (arglist__4558){
var args = cljs.core.seq( arglist__4558 );;
return G__4557__delegate.call(this, args);
});
return G__4557;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4560 = (function (f){
while(true){
var ret__4559 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4559)))
{{
var G__4563 = ret__4559;
f = G__4563;
continue;
}
} else
{return ret__4559;
}
break;
}
});
var trampoline__4561 = (function() { 
var G__4564__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4564 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4564__delegate.call(this, f, args);
};
G__4564.cljs$lang$maxFixedArity = 1;
G__4564.cljs$lang$applyTo = (function (arglist__4565){
var f = cljs.core.first(arglist__4565);
var args = cljs.core.rest(arglist__4565);
return G__4564__delegate.call(this, f, args);
});
return G__4564;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4560.call(this,f);
default:
return trampoline__4561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4561.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4566 = (function (){
return rand.call(null,1);
});
var rand__4567 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4566.call(this);
case  1 :
return rand__4567.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4569 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4569,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4569,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4578 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4579 = (function (h,child,parent){
var or__3548__auto____4570 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4570))
{return or__3548__auto____4570;
} else
{var or__3548__auto____4571 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4571))
{return or__3548__auto____4571;
} else
{var and__3546__auto____4572 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4572))
{var and__3546__auto____4573 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4573))
{var and__3546__auto____4574 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4574))
{var ret__4575 = true;
var i__4576 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4577 = cljs.core.not.call(null,ret__4575);

if(cljs.core.truth_(or__3548__auto____4577))
{return or__3548__auto____4577;
} else
{return cljs.core._EQ_.call(null,i__4576,cljs.core.count.call(null,parent));
}
})()))
{return ret__4575;
} else
{{
var G__4581 = isa_QMARK_.call(null,h,child.call(null,i__4576),parent.call(null,i__4576));
var G__4582 = (i__4576 + 1);
ret__4575 = G__4581;
i__4576 = G__4582;
continue;
}
}
break;
}
} else
{return and__3546__auto____4574;
}
} else
{return and__3546__auto____4573;
}
} else
{return and__3546__auto____4572;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4578.call(this,h,child);
case  3 :
return isa_QMARK___4579.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4583 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4584 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4583.call(this,h);
case  2 :
return parents__4584.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4586 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4587 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4586.call(this,h);
case  2 :
return ancestors__4587.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4589 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4590 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4589.call(this,h);
case  2 :
return descendants__4590.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4600 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4601 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__4595 = "﷐'parents".call(null,h);
var td__4596 = "﷐'descendants".call(null,h);
var ta__4597 = "﷐'ancestors".call(null,h);
var tf__4598 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4599 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4595.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4597.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4597.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4595,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4598.call(null,"﷐'ancestors".call(null,h),tag,td__4596,parent,ta__4597),"﷐'descendants":tf__4598.call(null,"﷐'descendants".call(null,h),parent,ta__4597,tag,td__4596)});
})());

if(cljs.core.truth_(or__3548__auto____4599))
{return or__3548__auto____4599;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4600.call(this,h,tag);
case  3 :
return derive__4601.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4607 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4608 = (function (h,tag,parent){
var parentMap__4603 = "﷐'parents".call(null,h);
var childsParents__4604 = (cljs.core.truth_(parentMap__4603.call(null,tag))?cljs.core.disj.call(null,parentMap__4603.call(null,tag),parent):cljs.core.set([]));
var newParents__4605 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4604))?cljs.core.assoc.call(null,parentMap__4603,tag,childsParents__4604):cljs.core.dissoc.call(null,parentMap__4603,tag));
var deriv_seq__4606 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4592_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4592_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4592_SHARP_),cljs.core.second.call(null,p1__4592_SHARP_)));
}),cljs.core.seq.call(null,newParents__4605)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4603.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4593_SHARP_,p2__4594_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4593_SHARP_,p2__4594_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4606));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4607.call(this,h,tag);
case  3 :
return underive__4608.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4610 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4612 = (cljs.core.truth_((function (){var and__3546__auto____4611 = xprefs__4610;

if(cljs.core.truth_(and__3546__auto____4611))
{return xprefs__4610.call(null,y);
} else
{return and__3546__auto____4611;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4612))
{return or__3548__auto____4612;
} else
{var or__3548__auto____4614 = (function (){var ps__4613 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4613) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4613),prefer_table)))
{} else
{}
{
var G__4617 = cljs.core.rest.call(null,ps__4613);
ps__4613 = G__4617;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4614))
{return or__3548__auto____4614;
} else
{var or__3548__auto____4616 = (function (){var ps__4615 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4615) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4615),y,prefer_table)))
{} else
{}
{
var G__4618 = cljs.core.rest.call(null,ps__4615);
ps__4615 = G__4618;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4616))
{return or__3548__auto____4616;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4619 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4619))
{return or__3548__auto____4619;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4628 = cljs.core.reduce.call(null,(function (be,p__4620){
var vec__4621__4622 = p__4620;
var k__4623 = cljs.core.nth.call(null,vec__4621__4622,0,null);
var ___4624 = cljs.core.nth.call(null,vec__4621__4622,1,null);
var e__4625 = vec__4621__4622;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4623)))
{var be2__4627 = (cljs.core.truth_((function (){var or__3548__auto____4626 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4626))
{return or__3548__auto____4626;
} else
{return cljs.core.dominates.call(null,k__4623,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4625:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4627),k__4623,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4623," and ",cljs.core.first.call(null,be2__4627),", and neither is preferred")));
}
return be2__4627;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4628))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4628));
return cljs.core.second.call(null,best_entry__4628);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4629 = mf;

if(cljs.core.truth_(and__3546__auto____4629))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4629;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4630 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4630))
{return or__3548__auto____4630;
} else
{var or__3548__auto____4631 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4631))
{return or__3548__auto____4631;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4632 = mf;

if(cljs.core.truth_(and__3546__auto____4632))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4632;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4633 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4633))
{return or__3548__auto____4633;
} else
{var or__3548__auto____4634 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4634))
{return or__3548__auto____4634;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4635 = mf;

if(cljs.core.truth_(and__3546__auto____4635))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4635;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4636 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4636))
{return or__3548__auto____4636;
} else
{var or__3548__auto____4637 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4637))
{return or__3548__auto____4637;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4638 = mf;

if(cljs.core.truth_(and__3546__auto____4638))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4638;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4639 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4639))
{return or__3548__auto____4639;
} else
{var or__3548__auto____4640 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4640))
{return or__3548__auto____4640;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4641 = mf;

if(cljs.core.truth_(and__3546__auto____4641))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4641;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4642 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4642))
{return or__3548__auto____4642;
} else
{var or__3548__auto____4643 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4643))
{return or__3548__auto____4643;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4644 = mf;

if(cljs.core.truth_(and__3546__auto____4644))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4644;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4645 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4645))
{return or__3548__auto____4645;
} else
{var or__3548__auto____4646 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4646))
{return or__3548__auto____4646;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4647 = mf;

if(cljs.core.truth_(and__3546__auto____4647))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4647;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4648 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4648))
{return or__3548__auto____4648;
} else
{var or__3548__auto____4649 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4649))
{return or__3548__auto____4649;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4650 = mf;

if(cljs.core.truth_(and__3546__auto____4650))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4650;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4651 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4651))
{return or__3548__auto____4651;
} else
{var or__3548__auto____4652 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4652))
{return or__3548__auto____4652;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4653 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4654 = cljs.core._get_method.call(null,mf,dispatch_val__4653);

if(cljs.core.truth_(target_fn__4654))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4653)));
}
return cljs.core.apply.call(null,target_fn__4654,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4655 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4656 = this;
cljs.core.swap_BANG_.call(null,this__4656.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4656.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4656.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4656.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4657 = this;
cljs.core.swap_BANG_.call(null,this__4657.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4657.method_cache,this__4657.method_table,this__4657.cached_hierarchy,this__4657.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4658 = this;
cljs.core.swap_BANG_.call(null,this__4658.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4658.method_cache,this__4658.method_table,this__4658.cached_hierarchy,this__4658.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4659 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4659.cached_hierarchy),cljs.core.deref.call(null,this__4659.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4659.method_cache,this__4659.method_table,this__4659.cached_hierarchy,this__4659.hierarchy);
}
var temp__3695__auto____4660 = cljs.core.deref.call(null,this__4659.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4660))
{var target_fn__4661 = temp__3695__auto____4660;

return target_fn__4661;
} else
{var temp__3695__auto____4662 = cljs.core.find_and_cache_best_method.call(null,this__4659.name,dispatch_val,this__4659.hierarchy,this__4659.method_table,this__4659.prefer_table,this__4659.method_cache,this__4659.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4662))
{var target_fn__4663 = temp__3695__auto____4662;

return target_fn__4663;
} else
{return cljs.core.deref.call(null,this__4659.method_table).call(null,this__4659.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4664 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4664.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4664.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4664.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4664.method_cache,this__4664.method_table,this__4664.cached_hierarchy,this__4664.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4665 = this;
return cljs.core.deref.call(null,this__4665.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4666 = this;
return cljs.core.deref.call(null,this__4666.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4667 = this;
return cljs.core.do_dispatch.call(null,mf,this__4667.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4668__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4668 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4668__delegate.call(this, _, args);
};
G__4668.cljs$lang$maxFixedArity = 1;
G__4668.cljs$lang$applyTo = (function (arglist__4669){
var _ = cljs.core.first(arglist__4669);
var args = cljs.core.rest(arglist__4669);
return G__4668__delegate.call(this, _, args);
});
return G__4668;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
