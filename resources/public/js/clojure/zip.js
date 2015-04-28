// Compiled by ClojureScript 0.0-3211 {}
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
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862),branch_QMARK_,new cljs.core.Keyword("zip","children","zip/children",-940194589),children,new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591),make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 * given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,new cljs.core.Keyword(null,"content","content",15833224)),(function (node,children){
return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"content","content",15833224),(function (){var and__4259__auto__ = children;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.apply.call(null,cljs.core.vector,children);
} else {
return and__4259__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
return loc.call(null,(0));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
return new cljs.core.Keyword("zip","branch?","zip/branch?",-998880862).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
return new cljs.core.Keyword("zip","children","zip/children",-940194589).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 * children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
return new cljs.core.Keyword("zip","make-node","zip/make-node",1103800591).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1)));
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq.call(null,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1))));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(loc.call(null,(1)));
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 * nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
var vec__6714 = loc;
var node = cljs.core.nth.call(null,vec__6714,(0),null);
var path = cljs.core.nth.call(null,vec__6714,(1),null);
var vec__6715 = clojure.zip.children.call(null,loc);
var c = cljs.core.nth.call(null,vec__6715,(0),null);
var cnext = cljs.core.nthnext.call(null,vec__6715,(1));
var cs = vec__6715;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565),(cljs.core.truth_(path)?cljs.core.conj.call(null,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565).cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),new cljs.core.Keyword(null,"ppath","ppath",-1758182784),path,new cljs.core.Keyword(null,"r","r",-471384190),cnext], null)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 * the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__6718 = loc;
var node = cljs.core.nth.call(null,vec__6718,(0),null);
var map__6719 = cljs.core.nth.call(null,vec__6718,(1),null);
var map__6719__$1 = ((cljs.core.seq_QMARK_.call(null,map__6719))?cljs.core.apply.call(null,cljs.core.hash_map,map__6719):map__6719);
var path = map__6719__$1;
var l = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var r = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var changed_QMARK_ = cljs.core.get.call(null,map__6719__$1,new cljs.core.Keyword(null,"changed?","changed?",-437828330));
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek.call(null,pnodes);
return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,pnode,cljs.core.concat.call(null,l,cljs.core.cons.call(null,node,r))),(function (){var and__4259__auto__ = ppath;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4259__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 * changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)))){
return clojure.zip.node.call(null,loc);
} else {
var p = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(p)){
var G__6720 = p;
loc = G__6720;
continue;
} else {
return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__6724 = loc;
var node = cljs.core.nth.call(null,vec__6724,(0),null);
var map__6725 = cljs.core.nth.call(null,vec__6724,(1),null);
var map__6725__$1 = ((cljs.core.seq_QMARK_.call(null,map__6725))?cljs.core.apply.call(null,cljs.core.hash_map,map__6725):map__6725);
var path = map__6725__$1;
var l = cljs.core.get.call(null,map__6725__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var vec__6726 = cljs.core.get.call(null,map__6725__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var r = cljs.core.nth.call(null,vec__6726,(0),null);
var rnext = cljs.core.nthnext.call(null,vec__6726,(1));
var rs = vec__6726;
if(cljs.core.truth_((function (){var and__4259__auto__ = path;
if(cljs.core.truth_(and__4259__auto__)){
return rs;
} else {
return and__4259__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,node),new cljs.core.Keyword(null,"r","r",-471384190),rnext)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__6729 = loc;
var node = cljs.core.nth.call(null,vec__6729,(0),null);
var map__6730 = cljs.core.nth.call(null,vec__6729,(1),null);
var map__6730__$1 = ((cljs.core.seq_QMARK_.call(null,map__6730))?cljs.core.apply.call(null,cljs.core.hash_map,map__6730):map__6730);
var path = map__6730__$1;
var l = cljs.core.get.call(null,map__6730__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__6730__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4259__auto__ = path;
if(cljs.core.truth_(and__4259__auto__)){
return r;
} else {
return and__4259__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,r),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.apply.call(null,cljs.core.conj,l,node,cljs.core.butlast.call(null,r)),new cljs.core.Keyword(null,"r","r",-471384190),null)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__6733 = loc;
var node = cljs.core.nth.call(null,vec__6733,(0),null);
var map__6734 = cljs.core.nth.call(null,vec__6733,(1),null);
var map__6734__$1 = ((cljs.core.seq_QMARK_.call(null,map__6734))?cljs.core.apply.call(null,cljs.core.hash_map,map__6734):map__6734);
var path = map__6734__$1;
var l = cljs.core.get.call(null,map__6734__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__6734__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4259__auto__ = path;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.seq.call(null,l);
} else {
return and__4259__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,node,r))], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__6737 = loc;
var node = cljs.core.nth.call(null,vec__6737,(0),null);
var map__6738 = cljs.core.nth.call(null,vec__6737,(1),null);
var map__6738__$1 = ((cljs.core.seq_QMARK_.call(null,map__6738))?cljs.core.apply.call(null,cljs.core.hash_map,map__6738):map__6738);
var path = map__6738__$1;
var l = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var r = cljs.core.get.call(null,map__6738__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core.truth_((function (){var and__4259__auto__ = path;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.seq.call(null,l);
} else {
return and__4259__auto__;
}
})())){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.concat.call(null,cljs.core.rest.call(null,l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),r))], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 * without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__6741 = loc;
var node = cljs.core.nth.call(null,vec__6741,(0),null);
var map__6742 = cljs.core.nth.call(null,vec__6741,(1),null);
var map__6742__$1 = ((cljs.core.seq_QMARK_.call(null,map__6742))?cljs.core.apply.call(null,cljs.core.hash_map,map__6742):map__6742);
var path = map__6742__$1;
var l = cljs.core.get.call(null,map__6742__$1,new cljs.core.Keyword(null,"l","l",1395893423));
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.conj.call(null,l,item),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 * without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__6745 = loc;
var node = cljs.core.nth.call(null,vec__6745,(0),null);
var map__6746 = cljs.core.nth.call(null,vec__6745,(1),null);
var map__6746__$1 = ((cljs.core.seq_QMARK_.call(null,map__6746))?cljs.core.apply.call(null,cljs.core.hash_map,map__6746):map__6746);
var path = map__6746__$1;
var r = cljs.core.get.call(null,map__6746__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.cons.call(null,item,r),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__6748 = loc;
var _ = cljs.core.nth.call(null,vec__6748,(0),null);
var path = cljs.core.nth.call(null,vec__6748,(1),null);
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(){
var argseq__5311__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5311__auto__);
});

clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
});

clojure.zip.edit.cljs$lang$maxFixedArity = (2);

clojure.zip.edit.cljs$lang$applyTo = (function (seq6749){
var G__6750 = cljs.core.first.call(null,seq6749);
var seq6749__$1 = cljs.core.next.call(null,seq6749);
var G__6751 = cljs.core.first.call(null,seq6749__$1);
var seq6749__$2 = cljs.core.next.call(null,seq6749__$1);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__6750,G__6751,seq6749__$2);
});
/**
 * Inserts the item as the leftmost child of the node at this loc,
 * without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 * without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 * the end, returns a distinguished loc detectable via end?. If already
 * at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)))){
return loc;
} else {
var or__4271__auto__ = (function (){var and__4259__auto__ = clojure.zip.branch_QMARK_.call(null,loc);
if(cljs.core.truth_(and__4259__auto__)){
return clojure.zip.down.call(null,loc);
} else {
return and__4259__auto__;
}
})();
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
var or__4271__auto____$1 = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(or__4271__auto____$1)){
return or__4271__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p))){
var or__4271__auto____$2 = clojure.zip.right.call(null,clojure.zip.up.call(null,p));
if(cljs.core.truth_(or__4271__auto____$2)){
return or__4271__auto____$2;
} else {
var G__6752 = clojure.zip.up.call(null,p);
p = G__6752;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,p),new cljs.core.Keyword(null,"end","end",-268185958)], null);
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
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__4402__auto__ = clojure.zip.left.call(null,loc);
if(cljs.core.truth_(temp__4402__auto__)){
var lloc = temp__4402__auto__;
var loc__$1 = lloc;
while(true){
var temp__4402__auto____$1 = (function (){var and__4259__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__4259__auto__)){
return clojure.zip.down.call(null,loc__$1);
} else {
return and__4259__auto__;
}
})();
if(cljs.core.truth_(temp__4402__auto____$1)){
var child = temp__4402__auto____$1;
var G__6753 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__6753;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up.call(null,loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"end","end",-268185958),loc.call(null,(1)));
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 * it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__6756 = loc;
var node = cljs.core.nth.call(null,vec__6756,(0),null);
var map__6757 = cljs.core.nth.call(null,vec__6756,(1),null);
var map__6757__$1 = ((cljs.core.seq_QMARK_.call(null,map__6757))?cljs.core.apply.call(null,cljs.core.hash_map,map__6757):map__6757);
var path = map__6757__$1;
var l = cljs.core.get.call(null,map__6757__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__6757__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__6757__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__6757__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count.call(null,l) > (0))){
var loc__$1 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
while(true){
var temp__4402__auto__ = (function (){var and__4259__auto__ = clojure.zip.branch_QMARK_.call(null,loc__$1);
if(cljs.core.truth_(and__4259__auto__)){
return clojure.zip.down.call(null,loc__$1);
} else {
return and__4259__auto__;
}
})();
if(cljs.core.truth_(temp__4402__auto__)){
var child = temp__4402__auto__;
var G__6758 = clojure.zip.rightmost.call(null,child);
loc__$1 = G__6758;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__4259__auto__ = ppath;
if(cljs.core.truth_(and__4259__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__4259__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});
