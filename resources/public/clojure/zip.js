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
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3546__auto____4670 = children;

if(cljs.core.truth_(and__3546__auto____4670))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3546__auto____4670;
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
{var vec__4671__4673 = loc;
var node__4674 = cljs.core.nth.call(null,vec__4671__4673,0,null);
var path__4675 = cljs.core.nth.call(null,vec__4671__4673,1,null);
var vec__4672__4676 = clojure.zip.children.call(null,loc);
var c__4677 = cljs.core.nth.call(null,vec__4672__4676,0,null);
var cnext__4678 = cljs.core.nthnext.call(null,vec__4672__4676,1);
var cs__4679 = vec__4672__4676;

if(cljs.core.truth_(cs__4679))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__4677,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__4675)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__4675),node__4674):cljs.core.Vector.fromArray([node__4674])),"﷐'ppath":path__4675,"﷐'r":cnext__4678})]),cljs.core.meta.call(null,loc));
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
var vec__4680__4681 = loc;
var node__4682 = cljs.core.nth.call(null,vec__4680__4681,0,null);
var path__4683 = cljs.core.nth.call(null,vec__4680__4681,1,null);
var path__4684 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4683))?cljs.core.apply.call(null,cljs.core.hash_map,path__4683):path__4683);
var l__4685 = cljs.core.get.call(null,path__4684,"﷐'l");
var ppath__4686 = cljs.core.get.call(null,path__4684,"﷐'ppath");
var pnodes__4687 = cljs.core.get.call(null,path__4684,"﷐'pnodes");
var r__4688 = cljs.core.get.call(null,path__4684,"﷐'r");
var changed_QMARK___4689 = cljs.core.get.call(null,path__4684,"﷐'changed?");

if(cljs.core.truth_(pnodes__4687))
{var pnode__4690 = cljs.core.peek.call(null,pnodes__4687);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___4689)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__4690,cljs.core.concat.call(null,l__4685,cljs.core.cons.call(null,node__4682,r__4688))),(function (){var and__3546__auto____4691 = ppath__4686;

if(cljs.core.truth_(and__3546__auto____4691))
{return cljs.core.assoc.call(null,ppath__4686,"﷐'changed?",true);
} else
{return and__3546__auto____4691;
}
})()]):cljs.core.Vector.fromArray([pnode__4690,ppath__4686])),cljs.core.meta.call(null,loc));
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
{var p__4692 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__4692))
{{
var G__4693 = p__4692;
loc = G__4693;
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
var vec__4694__4696 = loc;
var node__4697 = cljs.core.nth.call(null,vec__4694__4696,0,null);
var path__4698 = cljs.core.nth.call(null,vec__4694__4696,1,null);
var path__4699 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4698))?cljs.core.apply.call(null,cljs.core.hash_map,path__4698):path__4698);
var l__4700 = cljs.core.get.call(null,path__4699,"﷐'l");
var vec__4695__4701 = cljs.core.get.call(null,path__4699,"﷐'r");
var r__4702 = cljs.core.nth.call(null,vec__4695__4701,0,null);
var rnext__4703 = cljs.core.nthnext.call(null,vec__4695__4701,1);
var rs__4704 = vec__4695__4701;

if(cljs.core.truth_((function (){var and__3546__auto____4705 = path__4699;

if(cljs.core.truth_(and__3546__auto____4705))
{return rs__4704;
} else
{return and__3546__auto____4705;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__4702,cljs.core.assoc.call(null,path__4699,"﷐'l",cljs.core.conj.call(null,l__4700,node__4697),"﷐'r",rnext__4703)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__4706__4707 = loc;
var node__4708 = cljs.core.nth.call(null,vec__4706__4707,0,null);
var path__4709 = cljs.core.nth.call(null,vec__4706__4707,1,null);
var path__4710 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4709))?cljs.core.apply.call(null,cljs.core.hash_map,path__4709):path__4709);
var l__4711 = cljs.core.get.call(null,path__4710,"﷐'l");
var r__4712 = cljs.core.get.call(null,path__4710,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4713 = path__4710;

if(cljs.core.truth_(and__3546__auto____4713))
{return r__4712;
} else
{return and__3546__auto____4713;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__4712),cljs.core.assoc.call(null,path__4710,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__4711,node__4708,cljs.core.butlast.call(null,r__4712)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__4714__4715 = loc;
var node__4716 = cljs.core.nth.call(null,vec__4714__4715,0,null);
var path__4717 = cljs.core.nth.call(null,vec__4714__4715,1,null);
var path__4718 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4717))?cljs.core.apply.call(null,cljs.core.hash_map,path__4717):path__4717);
var l__4719 = cljs.core.get.call(null,path__4718,"﷐'l");
var r__4720 = cljs.core.get.call(null,path__4718,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4721 = path__4718;

if(cljs.core.truth_(and__3546__auto____4721))
{return cljs.core.seq.call(null,l__4719);
} else
{return and__3546__auto____4721;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4719),cljs.core.assoc.call(null,path__4718,"﷐'l",cljs.core.pop.call(null,l__4719),"﷐'r",cljs.core.cons.call(null,node__4716,r__4720))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__4722__4723 = loc;
var node__4724 = cljs.core.nth.call(null,vec__4722__4723,0,null);
var path__4725 = cljs.core.nth.call(null,vec__4722__4723,1,null);
var path__4726 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4725))?cljs.core.apply.call(null,cljs.core.hash_map,path__4725):path__4725);
var l__4727 = cljs.core.get.call(null,path__4726,"﷐'l");
var r__4728 = cljs.core.get.call(null,path__4726,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4729 = path__4726;

if(cljs.core.truth_(and__3546__auto____4729))
{return cljs.core.seq.call(null,l__4727);
} else
{return and__3546__auto____4729;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__4727),cljs.core.assoc.call(null,path__4726,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__4727),cljs.core.Vector.fromArray([node__4724]),r__4728))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__4730__4731 = loc;
var node__4732 = cljs.core.nth.call(null,vec__4730__4731,0,null);
var path__4733 = cljs.core.nth.call(null,vec__4730__4731,1,null);
var path__4734 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4733))?cljs.core.apply.call(null,cljs.core.hash_map,path__4733):path__4733);
var l__4735 = cljs.core.get.call(null,path__4734,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4734)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4732,cljs.core.assoc.call(null,path__4734,"﷐'l",cljs.core.conj.call(null,l__4735,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__4736__4737 = loc;
var node__4738 = cljs.core.nth.call(null,vec__4736__4737,0,null);
var path__4739 = cljs.core.nth.call(null,vec__4736__4737,1,null);
var path__4740 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4739))?cljs.core.apply.call(null,cljs.core.hash_map,path__4739):path__4739);
var r__4741 = cljs.core.get.call(null,path__4740,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4740)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4738,cljs.core.assoc.call(null,path__4740,"﷐'r",cljs.core.cons.call(null,item,r__4741),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__4742__4743 = loc;
var ___4744 = cljs.core.nth.call(null,vec__4742__4743,0,null);
var path__4745 = cljs.core.nth.call(null,vec__4742__4743,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__4745,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__4746){
var loc = cljs.core.first(arglist__4746);
var f = cljs.core.first(cljs.core.next(arglist__4746));
var args = cljs.core.rest(cljs.core.next(arglist__4746));
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
{var or__3548__auto____4748 = (function (){var and__3546__auto____4747 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3546__auto____4747))
{return clojure.zip.down.call(null,loc);
} else
{return and__3546__auto____4747;
}
})();

if(cljs.core.truth_(or__3548__auto____4748))
{return or__3548__auto____4748;
} else
{var or__3548__auto____4749 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3548__auto____4749))
{return or__3548__auto____4749;
} else
{var p__4750 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__4750)))
{var or__3548__auto____4751 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__4750));

if(cljs.core.truth_(or__3548__auto____4751))
{return or__3548__auto____4751;
} else
{{
var G__4752 = clojure.zip.up.call(null,p__4750);
p__4750 = G__4752;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__4750),"﷐'end"]);
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
var temp__3695__auto____4753 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3695__auto____4753))
{var lloc__4754 = temp__3695__auto____4753;

var loc__4755 = lloc__4754;

while(true){
var temp__3695__auto____4757 = (function (){var and__3546__auto____4756 = clojure.zip.branch_QMARK_.call(null,loc__4755);

if(cljs.core.truth_(and__3546__auto____4756))
{return clojure.zip.down.call(null,loc__4755);
} else
{return and__3546__auto____4756;
}
})();

if(cljs.core.truth_(temp__3695__auto____4757))
{var child__4758 = temp__3695__auto____4757;

{
var G__4759 = clojure.zip.rightmost.call(null,child__4758);
loc__4755 = G__4759;
continue;
}
} else
{return loc__4755;
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
var vec__4760__4761 = loc;
var node__4762 = cljs.core.nth.call(null,vec__4760__4761,0,null);
var path__4763 = cljs.core.nth.call(null,vec__4760__4761,1,null);
var path__4764 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4763))?cljs.core.apply.call(null,cljs.core.hash_map,path__4763):path__4763);
var l__4765 = cljs.core.get.call(null,path__4764,"﷐'l");
var ppath__4766 = cljs.core.get.call(null,path__4764,"﷐'ppath");
var pnodes__4767 = cljs.core.get.call(null,path__4764,"﷐'pnodes");
var rs__4768 = cljs.core.get.call(null,path__4764,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4764)))
{throw "Remove at top";
} else
{if(cljs.core.truth_((cljs.core.count.call(null,l__4765) > 0)))
{var loc__4769 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4765),cljs.core.assoc.call(null,path__4764,"﷐'l",cljs.core.pop.call(null,l__4765),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3695__auto____4771 = (function (){var and__3546__auto____4770 = clojure.zip.branch_QMARK_.call(null,loc__4769);

if(cljs.core.truth_(and__3546__auto____4770))
{return clojure.zip.down.call(null,loc__4769);
} else
{return and__3546__auto____4770;
}
})();

if(cljs.core.truth_(temp__3695__auto____4771))
{var child__4772 = temp__3695__auto____4771;

{
var G__4774 = clojure.zip.rightmost.call(null,child__4772);
loc__4769 = G__4774;
continue;
}
} else
{return loc__4769;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__4767),rs__4768),(function (){var and__3546__auto____4773 = ppath__4766;

if(cljs.core.truth_(and__3546__auto____4773))
{return cljs.core.assoc.call(null,ppath__4766,"﷐'changed?",true);
} else
{return and__3546__auto____4773;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
