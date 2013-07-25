goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_4770 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper_4771 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper_4772 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col","\uFDD0:default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),cljs.core.PersistentVector.fromArray([0,"",""], true),table_section_wrapper_4771,table_section_wrapper_4771,opt_wrapper_4770,cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),cell_wrapper_4772,table_section_wrapper_4771,cell_wrapper_4772,opt_wrapper_4770,table_section_wrapper_4771,cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),table_section_wrapper_4771]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,tag_name,"table");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?(function (){var and__3941__auto__ = div.firstChild;
if(cljs.core.truth_(and__3941__auto__))
{return div.firstChild.childNodes;
} else
{return and__3941__auto__;
}
})():(((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,start_wrap,"<table>");
if(and__3941__auto__)
{return no_tbody_QMARK_;
} else
{return and__3941__auto__;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var seq__4777 = cljs.core.seq.call(null,tbody);
var chunk__4778 = null;
var count__4779 = 0;
var i__4780 = 0;
while(true){
if((i__4780 < count__4779))
{var child = cljs.core._nth.call(null,chunk__4778,i__4780);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__4781 = seq__4777;
var G__4782 = chunk__4778;
var G__4783 = count__4779;
var G__4784 = (i__4780 + 1);
seq__4777 = G__4781;
chunk__4778 = G__4782;
count__4779 = G__4783;
i__4780 = G__4784;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__4777);
if(temp__4092__auto__)
{var seq__4777__$1 = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4777__$1))
{var c__3037__auto__ = cljs.core.chunk_first.call(null,seq__4777__$1);
{
var G__4785 = cljs.core.chunk_rest.call(null,seq__4777__$1);
var G__4786 = c__3037__auto__;
var G__4787 = cljs.core.count.call(null,c__3037__auto__);
var G__4788 = 0;
seq__4777 = G__4785;
chunk__4778 = G__4786;
count__4779 = G__4787;
i__4780 = G__4788;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__4777__$1);
if((function (){var and__3941__auto__ = cljs.core._EQ_.call(null,child.nodeName,"tbody");
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,child.childNodes.length,0);
} else
{return and__3941__auto__;
}
})())
{child.parentNode.removeChild(child);
} else
{}
{
var G__4789 = cljs.core.next.call(null,seq__4777__$1);
var G__4790 = null;
var G__4791 = 0;
var G__4792 = 0;
seq__4777 = G__4789;
chunk__4778 = G__4790;
count__4779 = G__4791;
i__4780 = G__4792;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__4794 = cljs.core.get.call(null,domina.wrap_map,tag_name,(new cljs.core.Keyword("\uFDD0:default")).call(null,domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__4794,0,null);
var start_wrap = cljs.core.nth.call(null,vec__4794,1,null);
var end_wrap = cljs.core.nth.call(null,vec__4794,2,null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();
var level = depth;
while(true){
if((level > 0))
{{
var G__4795 = wrapper.lastChild;
var G__4796 = (level - 1);
wrapper = G__4795;
level = G__4796;
continue;
}
} else
{return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3941__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto__ = content;
if(and__3941__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__2906__auto__ = (((content == null))?null:content);
return (function (){var or__3943__auto__ = (domina.nodes[goog.typeOf(x__2906__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.nodes["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto__ = nodeseq;
if(and__3941__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__2906__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3943__auto__ = (domina.single_node[goog.typeOf(x__2906__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (domina.single_node["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__4797){
var mesg = cljs.core.seq(arglist__4797);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__4798){
var mesg = cljs.core.seq(arglist__4798);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t4802))
{goog.provide('domina.t4802');

/**
* @constructor
*/
domina.t4802 = (function (class_name,by_class,meta4803){
this.class_name = class_name;
this.by_class = by_class;
this.meta4803 = meta4803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t4802.cljs$lang$type = true;
domina.t4802.cljs$lang$ctorStr = "domina/t4802";
domina.t4802.cljs$lang$ctorPrWriter = (function (this__2847__auto__,writer__2848__auto__,opt__2849__auto__){
return cljs.core._write.call(null,writer__2848__auto__,"domina/t4802");
});
domina.t4802.prototype.domina$DomContent$ = true;
domina.t4802.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t4802.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,self__.class_name)));
});
domina.t4802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4804){
var self__ = this;
return self__.meta4803;
});
domina.t4802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4804,meta4803__$1){
var self__ = this;
return (new domina.t4802(self__.class_name,self__.by_class,meta4803__$1));
});
domina.__GT_t4802 = (function __GT_t4802(class_name__$1,by_class__$1,meta4803){
return (new domina.t4802(class_name__$1,by_class__$1,meta4803));
});
} else
{}
return (new domina.t4802(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return common_ancestor__delegate.call(this, contents);
};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__4805){
var contents = cljs.core.seq(arglist__4805);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__4806_SHARP_){
return p1__4806_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__4807_SHARP_,p2__4808_SHARP_){
return goog.dom.insertChildAt(p1__4807_SHARP_,p2__4808_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4810_SHARP_,p2__4809_SHARP_){
return goog.dom.insertSiblingBefore(p2__4809_SHARP_,p1__4810_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4812_SHARP_,p2__4811_SHARP_){
return goog.dom.insertSiblingAfter(p2__4811_SHARP_,p1__4812_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4814_SHARP_,p2__4813_SHARP_){
return goog.dom.replaceNode(p2__4813_SHARP_,p1__4814_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__4819_4823 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4820_4824 = null;
var count__4821_4825 = 0;
var i__4822_4826 = 0;
while(true){
if((i__4822_4826 < count__4821_4825))
{var n_4827 = cljs.core._nth.call(null,chunk__4820_4824,i__4822_4826);
goog.style.setStyle(n_4827,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4828 = seq__4819_4823;
var G__4829 = chunk__4820_4824;
var G__4830 = count__4821_4825;
var G__4831 = (i__4822_4826 + 1);
seq__4819_4823 = G__4828;
chunk__4820_4824 = G__4829;
count__4821_4825 = G__4830;
i__4822_4826 = G__4831;
continue;
}
} else
{var temp__4092__auto___4832 = cljs.core.seq.call(null,seq__4819_4823);
if(temp__4092__auto___4832)
{var seq__4819_4833__$1 = temp__4092__auto___4832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4819_4833__$1))
{var c__3037__auto___4834 = cljs.core.chunk_first.call(null,seq__4819_4833__$1);
{
var G__4835 = cljs.core.chunk_rest.call(null,seq__4819_4833__$1);
var G__4836 = c__3037__auto___4834;
var G__4837 = cljs.core.count.call(null,c__3037__auto___4834);
var G__4838 = 0;
seq__4819_4823 = G__4835;
chunk__4820_4824 = G__4836;
count__4821_4825 = G__4837;
i__4822_4826 = G__4838;
continue;
}
} else
{var n_4839 = cljs.core.first.call(null,seq__4819_4833__$1);
goog.style.setStyle(n_4839,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4840 = cljs.core.next.call(null,seq__4819_4833__$1);
var G__4841 = null;
var G__4842 = 0;
var G__4843 = 0;
seq__4819_4823 = G__4840;
chunk__4820_4824 = G__4841;
count__4821_4825 = G__4842;
i__4822_4826 = G__4843;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__4844){
var content = cljs.core.first(arglist__4844);
arglist__4844 = cljs.core.next(arglist__4844);
var name = cljs.core.first(arglist__4844);
var value = cljs.core.rest(arglist__4844);
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__4849_4853 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4850_4854 = null;
var count__4851_4855 = 0;
var i__4852_4856 = 0;
while(true){
if((i__4852_4856 < count__4851_4855))
{var n_4857 = cljs.core._nth.call(null,chunk__4850_4854,i__4852_4856);
n_4857.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4858 = seq__4849_4853;
var G__4859 = chunk__4850_4854;
var G__4860 = count__4851_4855;
var G__4861 = (i__4852_4856 + 1);
seq__4849_4853 = G__4858;
chunk__4850_4854 = G__4859;
count__4851_4855 = G__4860;
i__4852_4856 = G__4861;
continue;
}
} else
{var temp__4092__auto___4862 = cljs.core.seq.call(null,seq__4849_4853);
if(temp__4092__auto___4862)
{var seq__4849_4863__$1 = temp__4092__auto___4862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4849_4863__$1))
{var c__3037__auto___4864 = cljs.core.chunk_first.call(null,seq__4849_4863__$1);
{
var G__4865 = cljs.core.chunk_rest.call(null,seq__4849_4863__$1);
var G__4866 = c__3037__auto___4864;
var G__4867 = cljs.core.count.call(null,c__3037__auto___4864);
var G__4868 = 0;
seq__4849_4853 = G__4865;
chunk__4850_4854 = G__4866;
count__4851_4855 = G__4867;
i__4852_4856 = G__4868;
continue;
}
} else
{var n_4869 = cljs.core.first.call(null,seq__4849_4863__$1);
n_4869.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__4870 = cljs.core.next.call(null,seq__4849_4863__$1);
var G__4871 = null;
var G__4872 = 0;
var G__4873 = 0;
seq__4849_4853 = G__4870;
chunk__4850_4854 = G__4871;
count__4851_4855 = G__4872;
i__4852_4856 = G__4873;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__4874){
var content = cljs.core.first(arglist__4874);
arglist__4874 = cljs.core.next(arglist__4874);
var name = cljs.core.first(arglist__4874);
var value = cljs.core.rest(arglist__4874);
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__4879_4883 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4880_4884 = null;
var count__4881_4885 = 0;
var i__4882_4886 = 0;
while(true){
if((i__4882_4886 < count__4881_4885))
{var n_4887 = cljs.core._nth.call(null,chunk__4880_4884,i__4882_4886);
n_4887.removeAttribute(cljs.core.name.call(null,name));
{
var G__4888 = seq__4879_4883;
var G__4889 = chunk__4880_4884;
var G__4890 = count__4881_4885;
var G__4891 = (i__4882_4886 + 1);
seq__4879_4883 = G__4888;
chunk__4880_4884 = G__4889;
count__4881_4885 = G__4890;
i__4882_4886 = G__4891;
continue;
}
} else
{var temp__4092__auto___4892 = cljs.core.seq.call(null,seq__4879_4883);
if(temp__4092__auto___4892)
{var seq__4879_4893__$1 = temp__4092__auto___4892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4879_4893__$1))
{var c__3037__auto___4894 = cljs.core.chunk_first.call(null,seq__4879_4893__$1);
{
var G__4895 = cljs.core.chunk_rest.call(null,seq__4879_4893__$1);
var G__4896 = c__3037__auto___4894;
var G__4897 = cljs.core.count.call(null,c__3037__auto___4894);
var G__4898 = 0;
seq__4879_4883 = G__4895;
chunk__4880_4884 = G__4896;
count__4881_4885 = G__4897;
i__4882_4886 = G__4898;
continue;
}
} else
{var n_4899 = cljs.core.first.call(null,seq__4879_4893__$1);
n_4899.removeAttribute(cljs.core.name.call(null,name));
{
var G__4900 = cljs.core.next.call(null,seq__4879_4893__$1);
var G__4901 = null;
var G__4902 = 0;
var G__4903 = 0;
seq__4879_4883 = G__4900;
chunk__4880_4884 = G__4901;
count__4881_4885 = G__4902;
i__4882_4886 = G__4903;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__4905 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__4905,0,null);
var v = cljs.core.nth.call(null,vec__4905,1,null);
if(cljs.core.truth_((function (){var and__3941__auto__ = k;
if(cljs.core.truth_(and__3941__auto__))
{return v;
} else
{return and__3941__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style))
{return domina.parse_style_attributes.call(null,style);
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__4906_SHARP_){
var attr = attrs__$1.item(p1__4906_SHARP_);
var value = attr.nodeValue;
if((function (){var and__3941__auto__ = cljs.core.not_EQ_.call(null,null,value);
if(and__3941__auto__)
{return cljs.core.not_EQ_.call(null,"",value);
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__4913_4919 = cljs.core.seq.call(null,styles);
var chunk__4914_4920 = null;
var count__4915_4921 = 0;
var i__4916_4922 = 0;
while(true){
if((i__4916_4922 < count__4915_4921))
{var vec__4917_4923 = cljs.core._nth.call(null,chunk__4914_4920,i__4916_4922);
var name_4924 = cljs.core.nth.call(null,vec__4917_4923,0,null);
var value_4925 = cljs.core.nth.call(null,vec__4917_4923,1,null);
domina.set_style_BANG_.call(null,content,name_4924,value_4925);
{
var G__4926 = seq__4913_4919;
var G__4927 = chunk__4914_4920;
var G__4928 = count__4915_4921;
var G__4929 = (i__4916_4922 + 1);
seq__4913_4919 = G__4926;
chunk__4914_4920 = G__4927;
count__4915_4921 = G__4928;
i__4916_4922 = G__4929;
continue;
}
} else
{var temp__4092__auto___4930 = cljs.core.seq.call(null,seq__4913_4919);
if(temp__4092__auto___4930)
{var seq__4913_4931__$1 = temp__4092__auto___4930;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4913_4931__$1))
{var c__3037__auto___4932 = cljs.core.chunk_first.call(null,seq__4913_4931__$1);
{
var G__4933 = cljs.core.chunk_rest.call(null,seq__4913_4931__$1);
var G__4934 = c__3037__auto___4932;
var G__4935 = cljs.core.count.call(null,c__3037__auto___4932);
var G__4936 = 0;
seq__4913_4919 = G__4933;
chunk__4914_4920 = G__4934;
count__4915_4921 = G__4935;
i__4916_4922 = G__4936;
continue;
}
} else
{var vec__4918_4937 = cljs.core.first.call(null,seq__4913_4931__$1);
var name_4938 = cljs.core.nth.call(null,vec__4918_4937,0,null);
var value_4939 = cljs.core.nth.call(null,vec__4918_4937,1,null);
domina.set_style_BANG_.call(null,content,name_4938,value_4939);
{
var G__4940 = cljs.core.next.call(null,seq__4913_4931__$1);
var G__4941 = null;
var G__4942 = 0;
var G__4943 = 0;
seq__4913_4919 = G__4940;
chunk__4914_4920 = G__4941;
count__4915_4921 = G__4942;
i__4916_4922 = G__4943;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__4950_4956 = cljs.core.seq.call(null,attrs);
var chunk__4951_4957 = null;
var count__4952_4958 = 0;
var i__4953_4959 = 0;
while(true){
if((i__4953_4959 < count__4952_4958))
{var vec__4954_4960 = cljs.core._nth.call(null,chunk__4951_4957,i__4953_4959);
var name_4961 = cljs.core.nth.call(null,vec__4954_4960,0,null);
var value_4962 = cljs.core.nth.call(null,vec__4954_4960,1,null);
domina.set_attr_BANG_.call(null,content,name_4961,value_4962);
{
var G__4963 = seq__4950_4956;
var G__4964 = chunk__4951_4957;
var G__4965 = count__4952_4958;
var G__4966 = (i__4953_4959 + 1);
seq__4950_4956 = G__4963;
chunk__4951_4957 = G__4964;
count__4952_4958 = G__4965;
i__4953_4959 = G__4966;
continue;
}
} else
{var temp__4092__auto___4967 = cljs.core.seq.call(null,seq__4950_4956);
if(temp__4092__auto___4967)
{var seq__4950_4968__$1 = temp__4092__auto___4967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4950_4968__$1))
{var c__3037__auto___4969 = cljs.core.chunk_first.call(null,seq__4950_4968__$1);
{
var G__4970 = cljs.core.chunk_rest.call(null,seq__4950_4968__$1);
var G__4971 = c__3037__auto___4969;
var G__4972 = cljs.core.count.call(null,c__3037__auto___4969);
var G__4973 = 0;
seq__4950_4956 = G__4970;
chunk__4951_4957 = G__4971;
count__4952_4958 = G__4972;
i__4953_4959 = G__4973;
continue;
}
} else
{var vec__4955_4974 = cljs.core.first.call(null,seq__4950_4968__$1);
var name_4975 = cljs.core.nth.call(null,vec__4955_4974,0,null);
var value_4976 = cljs.core.nth.call(null,vec__4955_4974,1,null);
domina.set_attr_BANG_.call(null,content,name_4975,value_4976);
{
var G__4977 = cljs.core.next.call(null,seq__4950_4968__$1);
var G__4978 = null;
var G__4979 = 0;
var G__4980 = 0;
seq__4950_4956 = G__4977;
chunk__4951_4957 = G__4978;
count__4952_4958 = G__4979;
i__4953_4959 = G__4980;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__4985_4989 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__4986_4990 = null;
var count__4987_4991 = 0;
var i__4988_4992 = 0;
while(true){
if((i__4988_4992 < count__4987_4991))
{var node_4993 = cljs.core._nth.call(null,chunk__4986_4990,i__4988_4992);
goog.dom.classes.add(node_4993,class$);
{
var G__4994 = seq__4985_4989;
var G__4995 = chunk__4986_4990;
var G__4996 = count__4987_4991;
var G__4997 = (i__4988_4992 + 1);
seq__4985_4989 = G__4994;
chunk__4986_4990 = G__4995;
count__4987_4991 = G__4996;
i__4988_4992 = G__4997;
continue;
}
} else
{var temp__4092__auto___4998 = cljs.core.seq.call(null,seq__4985_4989);
if(temp__4092__auto___4998)
{var seq__4985_4999__$1 = temp__4092__auto___4998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4985_4999__$1))
{var c__3037__auto___5000 = cljs.core.chunk_first.call(null,seq__4985_4999__$1);
{
var G__5001 = cljs.core.chunk_rest.call(null,seq__4985_4999__$1);
var G__5002 = c__3037__auto___5000;
var G__5003 = cljs.core.count.call(null,c__3037__auto___5000);
var G__5004 = 0;
seq__4985_4989 = G__5001;
chunk__4986_4990 = G__5002;
count__4987_4991 = G__5003;
i__4988_4992 = G__5004;
continue;
}
} else
{var node_5005 = cljs.core.first.call(null,seq__4985_4999__$1);
goog.dom.classes.add(node_5005,class$);
{
var G__5006 = cljs.core.next.call(null,seq__4985_4999__$1);
var G__5007 = null;
var G__5008 = 0;
var G__5009 = 0;
seq__4985_4989 = G__5006;
chunk__4986_4990 = G__5007;
count__4987_4991 = G__5008;
i__4988_4992 = G__5009;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__5014_5018 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5015_5019 = null;
var count__5016_5020 = 0;
var i__5017_5021 = 0;
while(true){
if((i__5017_5021 < count__5016_5020))
{var node_5022 = cljs.core._nth.call(null,chunk__5015_5019,i__5017_5021);
goog.dom.classes.remove(node_5022,class$);
{
var G__5023 = seq__5014_5018;
var G__5024 = chunk__5015_5019;
var G__5025 = count__5016_5020;
var G__5026 = (i__5017_5021 + 1);
seq__5014_5018 = G__5023;
chunk__5015_5019 = G__5024;
count__5016_5020 = G__5025;
i__5017_5021 = G__5026;
continue;
}
} else
{var temp__4092__auto___5027 = cljs.core.seq.call(null,seq__5014_5018);
if(temp__4092__auto___5027)
{var seq__5014_5028__$1 = temp__4092__auto___5027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5014_5028__$1))
{var c__3037__auto___5029 = cljs.core.chunk_first.call(null,seq__5014_5028__$1);
{
var G__5030 = cljs.core.chunk_rest.call(null,seq__5014_5028__$1);
var G__5031 = c__3037__auto___5029;
var G__5032 = cljs.core.count.call(null,c__3037__auto___5029);
var G__5033 = 0;
seq__5014_5018 = G__5030;
chunk__5015_5019 = G__5031;
count__5016_5020 = G__5032;
i__5017_5021 = G__5033;
continue;
}
} else
{var node_5034 = cljs.core.first.call(null,seq__5014_5028__$1);
goog.dom.classes.remove(node_5034,class$);
{
var G__5035 = cljs.core.next.call(null,seq__5014_5028__$1);
var G__5036 = null;
var G__5037 = 0;
var G__5038 = 0;
seq__5014_5018 = G__5035;
chunk__5015_5019 = G__5036;
count__5016_5020 = G__5037;
i__5017_5021 = G__5038;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_5047__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__5043_5048 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5044_5049 = null;
var count__5045_5050 = 0;
var i__5046_5051 = 0;
while(true){
if((i__5046_5051 < count__5045_5050))
{var node_5052 = cljs.core._nth.call(null,chunk__5044_5049,i__5046_5051);
goog.dom.classes.set(node_5052,classes_5047__$1);
{
var G__5053 = seq__5043_5048;
var G__5054 = chunk__5044_5049;
var G__5055 = count__5045_5050;
var G__5056 = (i__5046_5051 + 1);
seq__5043_5048 = G__5053;
chunk__5044_5049 = G__5054;
count__5045_5050 = G__5055;
i__5046_5051 = G__5056;
continue;
}
} else
{var temp__4092__auto___5057 = cljs.core.seq.call(null,seq__5043_5048);
if(temp__4092__auto___5057)
{var seq__5043_5058__$1 = temp__4092__auto___5057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5043_5058__$1))
{var c__3037__auto___5059 = cljs.core.chunk_first.call(null,seq__5043_5058__$1);
{
var G__5060 = cljs.core.chunk_rest.call(null,seq__5043_5058__$1);
var G__5061 = c__3037__auto___5059;
var G__5062 = cljs.core.count.call(null,c__3037__auto___5059);
var G__5063 = 0;
seq__5043_5048 = G__5060;
chunk__5044_5049 = G__5061;
count__5045_5050 = G__5062;
i__5046_5051 = G__5063;
continue;
}
} else
{var node_5064 = cljs.core.first.call(null,seq__5043_5058__$1);
goog.dom.classes.set(node_5064,classes_5047__$1);
{
var G__5065 = cljs.core.next.call(null,seq__5043_5058__$1);
var G__5066 = null;
var G__5067 = 0;
var G__5068 = 0;
seq__5043_5048 = G__5065;
chunk__5044_5049 = G__5066;
count__5045_5050 = G__5067;
i__5046_5051 = G__5068;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__5073_5077 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5074_5078 = null;
var count__5075_5079 = 0;
var i__5076_5080 = 0;
while(true){
if((i__5076_5080 < count__5075_5079))
{var node_5081 = cljs.core._nth.call(null,chunk__5074_5078,i__5076_5080);
goog.dom.setTextContent(node_5081,value);
{
var G__5082 = seq__5073_5077;
var G__5083 = chunk__5074_5078;
var G__5084 = count__5075_5079;
var G__5085 = (i__5076_5080 + 1);
seq__5073_5077 = G__5082;
chunk__5074_5078 = G__5083;
count__5075_5079 = G__5084;
i__5076_5080 = G__5085;
continue;
}
} else
{var temp__4092__auto___5086 = cljs.core.seq.call(null,seq__5073_5077);
if(temp__4092__auto___5086)
{var seq__5073_5087__$1 = temp__4092__auto___5086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5073_5087__$1))
{var c__3037__auto___5088 = cljs.core.chunk_first.call(null,seq__5073_5087__$1);
{
var G__5089 = cljs.core.chunk_rest.call(null,seq__5073_5087__$1);
var G__5090 = c__3037__auto___5088;
var G__5091 = cljs.core.count.call(null,c__3037__auto___5088);
var G__5092 = 0;
seq__5073_5077 = G__5089;
chunk__5074_5078 = G__5090;
count__5075_5079 = G__5091;
i__5076_5080 = G__5092;
continue;
}
} else
{var node_5093 = cljs.core.first.call(null,seq__5073_5087__$1);
goog.dom.setTextContent(node_5093,value);
{
var G__5094 = cljs.core.next.call(null,seq__5073_5087__$1);
var G__5095 = null;
var G__5096 = 0;
var G__5097 = 0;
seq__5073_5077 = G__5094;
chunk__5074_5078 = G__5095;
count__5075_5079 = G__5096;
i__5076_5080 = G__5097;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__5102_5106 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5103_5107 = null;
var count__5104_5108 = 0;
var i__5105_5109 = 0;
while(true){
if((i__5105_5109 < count__5104_5108))
{var node_5110 = cljs.core._nth.call(null,chunk__5103_5107,i__5105_5109);
goog.dom.forms.setValue(node_5110,value);
{
var G__5111 = seq__5102_5106;
var G__5112 = chunk__5103_5107;
var G__5113 = count__5104_5108;
var G__5114 = (i__5105_5109 + 1);
seq__5102_5106 = G__5111;
chunk__5103_5107 = G__5112;
count__5104_5108 = G__5113;
i__5105_5109 = G__5114;
continue;
}
} else
{var temp__4092__auto___5115 = cljs.core.seq.call(null,seq__5102_5106);
if(temp__4092__auto___5115)
{var seq__5102_5116__$1 = temp__4092__auto___5115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5102_5116__$1))
{var c__3037__auto___5117 = cljs.core.chunk_first.call(null,seq__5102_5116__$1);
{
var G__5118 = cljs.core.chunk_rest.call(null,seq__5102_5116__$1);
var G__5119 = c__3037__auto___5117;
var G__5120 = cljs.core.count.call(null,c__3037__auto___5117);
var G__5121 = 0;
seq__5102_5106 = G__5118;
chunk__5103_5107 = G__5119;
count__5104_5108 = G__5120;
i__5105_5109 = G__5121;
continue;
}
} else
{var node_5122 = cljs.core.first.call(null,seq__5102_5116__$1);
goog.dom.forms.setValue(node_5122,value);
{
var G__5123 = cljs.core.next.call(null,seq__5102_5116__$1);
var G__5124 = null;
var G__5125 = 0;
var G__5126 = 0;
seq__5102_5106 = G__5123;
chunk__5103_5107 = G__5124;
count__5104_5108 = G__5125;
i__5105_5109 = G__5126;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3941__auto__ = allows_inner_html_QMARK_;
if(and__3941__auto__)
{var and__3941__auto____$1 = (function (){var or__3943__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{var value_5137 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__5133_5138 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__5134_5139 = null;
var count__5135_5140 = 0;
var i__5136_5141 = 0;
while(true){
if((i__5136_5141 < count__5135_5140))
{var node_5142 = cljs.core._nth.call(null,chunk__5134_5139,i__5136_5141);
goog.events.removeAll(node_5142);
node_5142.innerHTML = value_5137;
{
var G__5143 = seq__5133_5138;
var G__5144 = chunk__5134_5139;
var G__5145 = count__5135_5140;
var G__5146 = (i__5136_5141 + 1);
seq__5133_5138 = G__5143;
chunk__5134_5139 = G__5144;
count__5135_5140 = G__5145;
i__5136_5141 = G__5146;
continue;
}
} else
{var temp__4092__auto___5147 = cljs.core.seq.call(null,seq__5133_5138);
if(temp__4092__auto___5147)
{var seq__5133_5148__$1 = temp__4092__auto___5147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5133_5148__$1))
{var c__3037__auto___5149 = cljs.core.chunk_first.call(null,seq__5133_5148__$1);
{
var G__5150 = cljs.core.chunk_rest.call(null,seq__5133_5148__$1);
var G__5151 = c__3037__auto___5149;
var G__5152 = cljs.core.count.call(null,c__3037__auto___5149);
var G__5153 = 0;
seq__5133_5138 = G__5150;
chunk__5134_5139 = G__5151;
count__5135_5140 = G__5152;
i__5136_5141 = G__5153;
continue;
}
} else
{var node_5154 = cljs.core.first.call(null,seq__5133_5148__$1);
goog.events.removeAll(node_5154);
node_5154.innerHTML = value_5137;
{
var G__5155 = cljs.core.next.call(null,seq__5133_5148__$1);
var G__5156 = null;
var G__5157 = 0;
var G__5158 = 0;
seq__5133_5138 = G__5155;
chunk__5134_5139 = G__5156;
count__5135_5140 = G__5157;
i__5136_5141 = G__5158;
continue;
}
}
} else
{}
}
break;
}
}catch (e5132){if((e5132 instanceof Error))
{var e_5159 = e5132;
domina.replace_children_BANG_.call(null,content,value_5137);
} else
{if("\uFDD0:else")
{throw e5132;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3941__auto__ = bubble;
if(cljs.core.truth_(and__3941__auto__))
{return (value == null);
} else
{return and__3941__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;
return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3943__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__5166_5170 = cljs.core.seq.call(null,children);
var chunk__5167_5171 = null;
var count__5168_5172 = 0;
var i__5169_5173 = 0;
while(true){
if((i__5169_5173 < count__5168_5172))
{var child_5174 = cljs.core._nth.call(null,chunk__5167_5171,i__5169_5173);
frag.appendChild(child_5174);
{
var G__5175 = seq__5166_5170;
var G__5176 = chunk__5167_5171;
var G__5177 = count__5168_5172;
var G__5178 = (i__5169_5173 + 1);
seq__5166_5170 = G__5175;
chunk__5167_5171 = G__5176;
count__5168_5172 = G__5177;
i__5169_5173 = G__5178;
continue;
}
} else
{var temp__4092__auto___5179 = cljs.core.seq.call(null,seq__5166_5170);
if(temp__4092__auto___5179)
{var seq__5166_5180__$1 = temp__4092__auto___5179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5166_5180__$1))
{var c__3037__auto___5181 = cljs.core.chunk_first.call(null,seq__5166_5180__$1);
{
var G__5182 = cljs.core.chunk_rest.call(null,seq__5166_5180__$1);
var G__5183 = c__3037__auto___5181;
var G__5184 = cljs.core.count.call(null,c__3037__auto___5181);
var G__5185 = 0;
seq__5166_5170 = G__5182;
chunk__5167_5171 = G__5183;
count__5168_5172 = G__5184;
i__5169_5173 = G__5185;
continue;
}
} else
{var child_5186 = cljs.core.first.call(null,seq__5166_5180__$1);
frag.appendChild(child_5186);
{
var G__5187 = cljs.core.next.call(null,seq__5166_5180__$1);
var G__5188 = null;
var G__5189 = 0;
var G__5190 = 0;
seq__5166_5170 = G__5187;
chunk__5167_5171 = G__5188;
count__5168_5172 = G__5189;
i__5169_5173 = G__5190;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__5160_SHARP_,p2__5161_SHARP_){
return f.call(null,p1__5160_SHARP_,p2__5161_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto__ = obj;
if(cljs.core.truth_(and__3941__auto__))
{return obj.length;
} else
{return and__3941__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__5192 = list_thing;
if(G__5192)
{if((function (){var or__3943__auto__ = (G__5192.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__5192.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__5192.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5192);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5192);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__5193 = content;
if(G__5193)
{if((function (){var or__3943__auto__ = (G__5193.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__5193.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__5193.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5193);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5193);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0:default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__5194 = content;
if(G__5194)
{if((function (){var or__3943__auto__ = (G__5194.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__5194.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__5194.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5194);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__5194);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0:default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}
