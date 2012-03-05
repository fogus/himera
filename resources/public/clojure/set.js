goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__2991 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__2991,cljs.core.remove.call(null,(function (p1__2990_SHARP_){
return (max__2991 === p1__2990_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__2994 = (function (){
return cljs.core.set([]);
});
var union__2995 = (function (s1){
return s1;
});
var union__2996 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__2997 = (function() { 
var G__2999__delegate = function (s1,s2,sets){
var bubbled_sets__2993 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__2993),cljs.core.rest.call(null,bubbled_sets__2993));
};
var G__2999 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2999__delegate.call(this, s1, s2, sets);
};
G__2999.cljs$lang$maxFixedArity = 2;
G__2999.cljs$lang$applyTo = (function (arglist__3000){
var s1 = cljs.core.first(arglist__3000);
var s2 = cljs.core.first(cljs.core.next(arglist__3000));
var sets = cljs.core.rest(cljs.core.next(arglist__3000));
return G__2999__delegate.call(this, s1, s2, sets);
});
return G__2999;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__2994.call(this);
case  1 :
return union__2995.call(this,s1);
case  2 :
return union__2996.call(this,s1,s2);
default:
return union__2997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__2997.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__3002 = (function (s1){
return s1;
});
var intersection__3003 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__3006 = s2;
var G__3007 = s1;
s1 = G__3006;
s2 = G__3007;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__3004 = (function() { 
var G__3008__delegate = function (s1,s2,sets){
var bubbled_sets__3001 = clojure.set.bubble_max_key.call(null,(function (p1__2992_SHARP_){
return (- cljs.core.count.call(null,p1__2992_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__3001),cljs.core.rest.call(null,bubbled_sets__3001));
};
var G__3008 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3008__delegate.call(this, s1, s2, sets);
};
G__3008.cljs$lang$maxFixedArity = 2;
G__3008.cljs$lang$applyTo = (function (arglist__3009){
var s1 = cljs.core.first(arglist__3009);
var s2 = cljs.core.first(cljs.core.next(arglist__3009));
var sets = cljs.core.rest(cljs.core.next(arglist__3009));
return G__3008__delegate.call(this, s1, s2, sets);
});
return G__3008;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__3002.call(this,s1);
case  2 :
return intersection__3003.call(this,s1,s2);
default:
return intersection__3004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__3004.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__3010 = (function (s1){
return s1;
});
var difference__3011 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__3012 = (function() { 
var G__3014__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__3014 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3014__delegate.call(this, s1, s2, sets);
};
G__3014.cljs$lang$maxFixedArity = 2;
G__3014.cljs$lang$applyTo = (function (arglist__3015){
var s1 = cljs.core.first(arglist__3015);
var s2 = cljs.core.first(cljs.core.next(arglist__3015));
var sets = cljs.core.rest(cljs.core.next(arglist__3015));
return G__3014__delegate.call(this, s1, s2, sets);
});
return G__3014;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__3010.call(this,s1);
case  2 :
return difference__3011.call(this,s1,s2);
default:
return difference__3012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__3012.cljs$lang$applyTo;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__3016_SHARP_){
return cljs.core.select_keys.call(null,p1__3016_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__3018){
var vec__3019__3020 = p__3018;
var old__3021 = cljs.core.nth.call(null,vec__3019__3020,0,null);
var new$__3022 = cljs.core.nth.call(null,vec__3019__3020,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____3023 = cljs.core.not_EQ_.call(null,old__3021,new$__3022);

if(cljs.core.truth_(and__3546__auto____3023))
{return cljs.core.contains_QMARK_.call(null,m,old__3021);
} else
{return and__3546__auto____3023;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__3022,cljs.core.get.call(null,m,old__3021)),old__3021);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__3017_SHARP_){
return clojure.set.rename_keys.call(null,p1__3017_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__3024 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__3024,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__3024,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__3029){
var vec__3030__3031 = p__3029;
var k__3032 = cljs.core.nth.call(null,vec__3030__3031,0,null);
var v__3033 = cljs.core.nth.call(null,vec__3030__3031,1,null);

return cljs.core.assoc.call(null,m,v__3033,k__3032);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__3050 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____3035 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____3035))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____3035;
}
})()))
{var ks__3037 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__3036__3038 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel]):cljs.core.Vector.fromArray([yrel,xrel]));
var r__3039 = cljs.core.nth.call(null,vec__3036__3038,0,null);
var s__3040 = cljs.core.nth.call(null,vec__3036__3038,1,null);
var idx__3041 = clojure.set.index.call(null,r__3039,ks__3037);

return cljs.core.reduce.call(null,(function (ret,x){
var found__3042 = idx__3041.call(null,cljs.core.select_keys.call(null,x,ks__3037));

if(cljs.core.truth_(found__3042))
{return cljs.core.reduce.call(null,(function (p1__3025_SHARP_,p2__3026_SHARP_){
return cljs.core.conj.call(null,p1__3025_SHARP_,cljs.core.merge.call(null,p2__3026_SHARP_,x));
}),ret,found__3042);
} else
{return ret;
}
}),cljs.core.set([]),s__3040);
} else
{return cljs.core.set([]);
}
});
var join__3051 = (function (xrel,yrel,km){
var vec__3043__3044 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.Vector.fromArray([yrel,xrel,km]));
var r__3045 = cljs.core.nth.call(null,vec__3043__3044,0,null);
var s__3046 = cljs.core.nth.call(null,vec__3043__3044,1,null);
var k__3047 = cljs.core.nth.call(null,vec__3043__3044,2,null);
var idx__3048 = clojure.set.index.call(null,r__3045,cljs.core.vals.call(null,k__3047));

return cljs.core.reduce.call(null,(function (ret,x){
var found__3049 = idx__3048.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__3047)),k__3047));

if(cljs.core.truth_(found__3049))
{return cljs.core.reduce.call(null,(function (p1__3027_SHARP_,p2__3028_SHARP_){
return cljs.core.conj.call(null,p1__3027_SHARP_,cljs.core.merge.call(null,p2__3028_SHARP_,x));
}),ret,found__3049);
} else
{return ret;
}
}),cljs.core.set([]),s__3046);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__3050.call(this,xrel,yrel);
case  3 :
return join__3051.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3546__auto____3054 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____3054))
{return cljs.core.every_QMARK_.call(null,(function (p1__3034_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__3034_SHARP_);
}),set1);
} else
{return and__3546__auto____3054;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____3055 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____3055))
{return cljs.core.every_QMARK_.call(null,(function (p1__3053_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__3053_SHARP_);
}),set2);
} else
{return and__3546__auto____3055;
}
});
