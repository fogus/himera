goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.Vector.fromArray([root,null]),cljs.core.ObjMap.fromObject(["﷐'zip/make-node","﷐'zip/children","﷐'zip/branch?"],{"﷐'zip/make-node":make_node,"﷐'zip/children":children,"﷐'zip/branch?":branch_QMARK_}));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"﷐'content"),(function (node,children){
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3546__auto____2873 = children;

if(cljs.core.truth_(and__3546__auto____2873))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3546__auto____2873;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return "﷐'zip/branch?".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return "﷐'zip/children".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return "﷐'zip/make-node".call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return "﷐'pnodes".call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,"﷐'l".call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return "﷐'r".call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__2874__2876 = loc;
var node__2877 = cljs.core.nth.call(null,vec__2874__2876,0,null);
var path__2878 = cljs.core.nth.call(null,vec__2874__2876,1,null);
var vec__2875__2879 = clojure.zip.children.call(null,loc);
var c__2880 = cljs.core.nth.call(null,vec__2875__2879,0,null);
var cnext__2881 = cljs.core.nthnext.call(null,vec__2875__2879,1);
var cs__2882 = vec__2875__2879;

if(cljs.core.truth_(cs__2882))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__2880,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__2878)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__2878),node__2877):cljs.core.Vector.fromArray([node__2877])),"﷐'ppath":path__2878,"﷐'r":cnext__2881})]),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){
var vec__2883__2884 = loc;
var node__2885 = cljs.core.nth.call(null,vec__2883__2884,0,null);
var path__2886 = cljs.core.nth.call(null,vec__2883__2884,1,null);
var path__2887 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2886))?cljs.core.apply.call(null,cljs.core.hash_map,path__2886):path__2886);
var l__2888 = cljs.core.get.call(null,path__2887,"﷐'l");
var ppath__2889 = cljs.core.get.call(null,path__2887,"﷐'ppath");
var pnodes__2890 = cljs.core.get.call(null,path__2887,"﷐'pnodes");
var r__2891 = cljs.core.get.call(null,path__2887,"﷐'r");
var changed_QMARK___2892 = cljs.core.get.call(null,path__2887,"﷐'changed?");

if(cljs.core.truth_(pnodes__2890))
{var pnode__2893 = cljs.core.peek.call(null,pnodes__2890);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___2892)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__2893,cljs.core.concat.call(null,l__2888,cljs.core.cons.call(null,node__2885,r__2891))),(function (){var and__3546__auto____2894 = ppath__2889;

if(cljs.core.truth_(and__3546__auto____2894))
{return cljs.core.assoc.call(null,ppath__2889,"﷐'changed?",true);
} else
{return and__3546__auto____2894;
}
})()]):cljs.core.Vector.fromArray([pnode__2893,ppath__2889])),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return clojure.zip.node.call(null,loc);
} else
{var p__2895 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__2895))
{{
var G__2896 = p__2895;
loc = G__2896;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__2897__2899 = loc;
var node__2900 = cljs.core.nth.call(null,vec__2897__2899,0,null);
var path__2901 = cljs.core.nth.call(null,vec__2897__2899,1,null);
var path__2902 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2901))?cljs.core.apply.call(null,cljs.core.hash_map,path__2901):path__2901);
var l__2903 = cljs.core.get.call(null,path__2902,"﷐'l");
var vec__2898__2904 = cljs.core.get.call(null,path__2902,"﷐'r");
var r__2905 = cljs.core.nth.call(null,vec__2898__2904,0,null);
var rnext__2906 = cljs.core.nthnext.call(null,vec__2898__2904,1);
var rs__2907 = vec__2898__2904;

if(cljs.core.truth_((function (){var and__3546__auto____2908 = path__2902;

if(cljs.core.truth_(and__3546__auto____2908))
{return rs__2907;
} else
{return and__3546__auto____2908;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__2905,cljs.core.assoc.call(null,path__2902,"﷐'l",cljs.core.conj.call(null,l__2903,node__2900),"﷐'r",rnext__2906)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__2909__2910 = loc;
var node__2911 = cljs.core.nth.call(null,vec__2909__2910,0,null);
var path__2912 = cljs.core.nth.call(null,vec__2909__2910,1,null);
var path__2913 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2912))?cljs.core.apply.call(null,cljs.core.hash_map,path__2912):path__2912);
var l__2914 = cljs.core.get.call(null,path__2913,"﷐'l");
var r__2915 = cljs.core.get.call(null,path__2913,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____2916 = path__2913;

if(cljs.core.truth_(and__3546__auto____2916))
{return r__2915;
} else
{return and__3546__auto____2916;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__2915),cljs.core.assoc.call(null,path__2913,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__2914,node__2911,cljs.core.butlast.call(null,r__2915)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__2917__2918 = loc;
var node__2919 = cljs.core.nth.call(null,vec__2917__2918,0,null);
var path__2920 = cljs.core.nth.call(null,vec__2917__2918,1,null);
var path__2921 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2920))?cljs.core.apply.call(null,cljs.core.hash_map,path__2920):path__2920);
var l__2922 = cljs.core.get.call(null,path__2921,"﷐'l");
var r__2923 = cljs.core.get.call(null,path__2921,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____2924 = path__2921;

if(cljs.core.truth_(and__3546__auto____2924))
{return cljs.core.seq.call(null,l__2922);
} else
{return and__3546__auto____2924;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__2922),cljs.core.assoc.call(null,path__2921,"﷐'l",cljs.core.pop.call(null,l__2922),"﷐'r",cljs.core.cons.call(null,node__2919,r__2923))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__2925__2926 = loc;
var node__2927 = cljs.core.nth.call(null,vec__2925__2926,0,null);
var path__2928 = cljs.core.nth.call(null,vec__2925__2926,1,null);
var path__2929 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2928))?cljs.core.apply.call(null,cljs.core.hash_map,path__2928):path__2928);
var l__2930 = cljs.core.get.call(null,path__2929,"﷐'l");
var r__2931 = cljs.core.get.call(null,path__2929,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____2932 = path__2929;

if(cljs.core.truth_(and__3546__auto____2932))
{return cljs.core.seq.call(null,l__2930);
} else
{return and__3546__auto____2932;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__2930),cljs.core.assoc.call(null,path__2929,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__2930),cljs.core.Vector.fromArray([node__2927]),r__2931))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__2933__2934 = loc;
var node__2935 = cljs.core.nth.call(null,vec__2933__2934,0,null);
var path__2936 = cljs.core.nth.call(null,vec__2933__2934,1,null);
var path__2937 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2936))?cljs.core.apply.call(null,cljs.core.hash_map,path__2936):path__2936);
var l__2938 = cljs.core.get.call(null,path__2937,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__2937)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__2935,cljs.core.assoc.call(null,path__2937,"﷐'l",cljs.core.conj.call(null,l__2938,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__2939__2940 = loc;
var node__2941 = cljs.core.nth.call(null,vec__2939__2940,0,null);
var path__2942 = cljs.core.nth.call(null,vec__2939__2940,1,null);
var path__2943 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2942))?cljs.core.apply.call(null,cljs.core.hash_map,path__2942):path__2942);
var r__2944 = cljs.core.get.call(null,path__2943,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__2943)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__2941,cljs.core.assoc.call(null,path__2943,"﷐'r",cljs.core.cons.call(null,item,r__2944),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__2945__2946 = loc;
var ___2947 = cljs.core.nth.call(null,vec__2945__2946,0,null);
var path__2948 = cljs.core.nth.call(null,vec__2945__2946,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__2948,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return edit__delegate.call(this, loc, f, args);
};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__2949){
var loc = cljs.core.first(arglist__2949);
var f = cljs.core.first(cljs.core.next(arglist__2949));
var args = cljs.core.rest(cljs.core.next(arglist__2949));
return edit__delegate.call(this, loc, f, args);
});
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.Vector.fromArray([item]))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return loc;
} else
{var or__3548__auto____2951 = (function (){var and__3546__auto____2950 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3546__auto____2950))
{return clojure.zip.down.call(null,loc);
} else
{return and__3546__auto____2950;
}
})();

if(cljs.core.truth_(or__3548__auto____2951))
{return or__3548__auto____2951;
} else
{var or__3548__auto____2952 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{var p__2953 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__2953)))
{var or__3548__auto____2954 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__2953));

if(cljs.core.truth_(or__3548__auto____2954))
{return or__3548__auto____2954;
} else
{{
var G__2955 = clojure.zip.up.call(null,p__2953);
p__2953 = G__2955;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__2953),"﷐'end"]);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){
var temp__3695__auto____2956 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3695__auto____2956))
{var lloc__2957 = temp__3695__auto____2956;

var loc__2958 = lloc__2957;

while(true){
var temp__3695__auto____2960 = (function (){var and__3546__auto____2959 = clojure.zip.branch_QMARK_.call(null,loc__2958);

if(cljs.core.truth_(and__3546__auto____2959))
{return clojure.zip.down.call(null,loc__2958);
} else
{return and__3546__auto____2959;
}
})();

if(cljs.core.truth_(temp__3695__auto____2960))
{var child__2961 = temp__3695__auto____2960;

{
var G__2962 = clojure.zip.rightmost.call(null,child__2961);
loc__2958 = G__2962;
continue;
}
} else
{return loc__2958;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__2963__2964 = loc;
var node__2965 = cljs.core.nth.call(null,vec__2963__2964,0,null);
var path__2966 = cljs.core.nth.call(null,vec__2963__2964,1,null);
var path__2967 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__2966))?cljs.core.apply.call(null,cljs.core.hash_map,path__2966):path__2966);
var l__2968 = cljs.core.get.call(null,path__2967,"﷐'l");
var ppath__2969 = cljs.core.get.call(null,path__2967,"﷐'ppath");
var pnodes__2970 = cljs.core.get.call(null,path__2967,"﷐'pnodes");
var rs__2971 = cljs.core.get.call(null,path__2967,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__2967)))
{throw "Remove at top";
} else
{if(cljs.core.truth_((cljs.core.count.call(null,l__2968) > 0)))
{var loc__2972 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__2968),cljs.core.assoc.call(null,path__2967,"﷐'l",cljs.core.pop.call(null,l__2968),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3695__auto____2974 = (function (){var and__3546__auto____2973 = clojure.zip.branch_QMARK_.call(null,loc__2972);

if(cljs.core.truth_(and__3546__auto____2973))
{return clojure.zip.down.call(null,loc__2972);
} else
{return and__3546__auto____2973;
}
})();

if(cljs.core.truth_(temp__3695__auto____2974))
{var child__2975 = temp__3695__auto____2974;

{
var G__2977 = clojure.zip.rightmost.call(null,child__2975);
loc__2972 = G__2977;
continue;
}
} else
{return loc__2972;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__2970),rs__2971),(function (){var and__3546__auto____2976 = ppath__2969;

if(cljs.core.truth_(and__3546__auto____2976))
{return cljs.core.assoc.call(null,ppath__2969,"﷐'changed?",true);
} else
{return and__3546__auto____2976;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
