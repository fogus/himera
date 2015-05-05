// Compiled by ClojureScript 0.0-3211 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6930 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6931 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6932 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6932,opt_wrapper_6930,table_section_wrapper_6931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6930,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6931,cell_wrapper_6932,table_section_wrapper_6931,table_section_wrapper_6931]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4259__auto__ = div.firstChild;
if(cljs.core.truth_(and__4259__auto__)){
return div.firstChild.childNodes;
} else {
return and__4259__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6937 = cljs.core.seq.call(null,tbody);
var chunk__6938 = null;
var count__6939 = (0);
var i__6940 = (0);
while(true){
if((i__6940 < count__6939)){
var child = cljs.core._nth.call(null,chunk__6938,i__6940);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6941 = seq__6937;
var G__6942 = chunk__6938;
var G__6943 = count__6939;
var G__6944 = (i__6940 + (1));
seq__6937 = G__6941;
chunk__6938 = G__6942;
count__6939 = G__6943;
i__6940 = G__6944;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq.call(null,seq__6937);
if(temp__4404__auto__){
var seq__6937__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6937__$1)){
var c__5056__auto__ = cljs.core.chunk_first.call(null,seq__6937__$1);
var G__6945 = cljs.core.chunk_rest.call(null,seq__6937__$1);
var G__6946 = c__5056__auto__;
var G__6947 = cljs.core.count.call(null,c__5056__auto__);
var G__6948 = (0);
seq__6937 = G__6945;
chunk__6938 = G__6946;
count__6939 = G__6947;
i__6940 = G__6948;
continue;
} else {
var child = cljs.core.first.call(null,seq__6937__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6949 = cljs.core.next.call(null,seq__6937__$1);
var G__6950 = null;
var G__6951 = (0);
var G__6952 = (0);
seq__6937 = G__6949;
chunk__6938 = G__6950;
count__6939 = G__6951;
i__6940 = G__6952;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__6954 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__6954,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6954,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6954,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6955 = wrapper.lastChild;
var G__6956 = (level - (1));
wrapper = G__6955;
level = G__6956;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__4259__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4259__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__4259__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj6958 = {};
return obj6958;
})();

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((function (){var and__4259__auto__ = content;
if(and__4259__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__4259__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4907__auto__ = (((content == null))?null:content);
return (function (){var or__4271__auto__ = (domina.nodes[goog.typeOf(x__4907__auto__)]);
if(or__4271__auto__){
return or__4271__auto__;
} else {
var or__4271__auto____$1 = (domina.nodes["_"]);
if(or__4271__auto____$1){
return or__4271__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((function (){var and__4259__auto__ = nodeseq;
if(and__4259__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__4259__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4907__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__4271__auto__ = (domina.single_node[goog.typeOf(x__4907__auto__)]);
if(or__4271__auto__){
return or__4271__auto__;
} else {
var or__4271__auto____$1 = (domina.single_node["_"]);
if(or__4271__auto____$1){
return or__4271__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(){
var argseq__5311__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5311__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__4259__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__4259__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__4259__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq6959){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6959));
});
domina.log = (function domina$log(){
var argseq__5311__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5311__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq6960){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6960));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(){
var argseq__5311__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__5311__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq6961){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6961));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__6962_SHARP_){
return p1__6962_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__6963_SHARP_,p2__6964_SHARP_){
return goog.dom.insertChildAt(p1__6963_SHARP_,p2__6964_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6966_SHARP_,p2__6965_SHARP_){
return goog.dom.insertSiblingBefore(p2__6965_SHARP_,p1__6966_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6968_SHARP_,p2__6967_SHARP_){
return goog.dom.insertSiblingAfter(p2__6967_SHARP_,p1__6968_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6970_SHARP_,p2__6969_SHARP_){
return goog.dom.replaceNode(p2__6969_SHARP_,p1__6970_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(){
var argseq__5311__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5311__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6974_6978 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6975_6979 = null;
var count__6976_6980 = (0);
var i__6977_6981 = (0);
while(true){
if((i__6977_6981 < count__6976_6980)){
var n_6982 = cljs.core._nth.call(null,chunk__6975_6979,i__6977_6981);
goog.style.setStyle(n_6982,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6983 = seq__6974_6978;
var G__6984 = chunk__6975_6979;
var G__6985 = count__6976_6980;
var G__6986 = (i__6977_6981 + (1));
seq__6974_6978 = G__6983;
chunk__6975_6979 = G__6984;
count__6976_6980 = G__6985;
i__6977_6981 = G__6986;
continue;
} else {
var temp__4404__auto___6987 = cljs.core.seq.call(null,seq__6974_6978);
if(temp__4404__auto___6987){
var seq__6974_6988__$1 = temp__4404__auto___6987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6974_6988__$1)){
var c__5056__auto___6989 = cljs.core.chunk_first.call(null,seq__6974_6988__$1);
var G__6990 = cljs.core.chunk_rest.call(null,seq__6974_6988__$1);
var G__6991 = c__5056__auto___6989;
var G__6992 = cljs.core.count.call(null,c__5056__auto___6989);
var G__6993 = (0);
seq__6974_6978 = G__6990;
chunk__6975_6979 = G__6991;
count__6976_6980 = G__6992;
i__6977_6981 = G__6993;
continue;
} else {
var n_6994 = cljs.core.first.call(null,seq__6974_6988__$1);
goog.style.setStyle(n_6994,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6995 = cljs.core.next.call(null,seq__6974_6988__$1);
var G__6996 = null;
var G__6997 = (0);
var G__6998 = (0);
seq__6974_6978 = G__6995;
chunk__6975_6979 = G__6996;
count__6976_6980 = G__6997;
i__6977_6981 = G__6998;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq6971){
var G__6972 = cljs.core.first.call(null,seq6971);
var seq6971__$1 = cljs.core.next.call(null,seq6971);
var G__6973 = cljs.core.first.call(null,seq6971__$1);
var seq6971__$2 = cljs.core.next.call(null,seq6971__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6972,G__6973,seq6971__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(){
var argseq__5311__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5311__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__7002_7006 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7003_7007 = null;
var count__7004_7008 = (0);
var i__7005_7009 = (0);
while(true){
if((i__7005_7009 < count__7004_7008)){
var n_7010 = cljs.core._nth.call(null,chunk__7003_7007,i__7005_7009);
n_7010.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7011 = seq__7002_7006;
var G__7012 = chunk__7003_7007;
var G__7013 = count__7004_7008;
var G__7014 = (i__7005_7009 + (1));
seq__7002_7006 = G__7011;
chunk__7003_7007 = G__7012;
count__7004_7008 = G__7013;
i__7005_7009 = G__7014;
continue;
} else {
var temp__4404__auto___7015 = cljs.core.seq.call(null,seq__7002_7006);
if(temp__4404__auto___7015){
var seq__7002_7016__$1 = temp__4404__auto___7015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7002_7016__$1)){
var c__5056__auto___7017 = cljs.core.chunk_first.call(null,seq__7002_7016__$1);
var G__7018 = cljs.core.chunk_rest.call(null,seq__7002_7016__$1);
var G__7019 = c__5056__auto___7017;
var G__7020 = cljs.core.count.call(null,c__5056__auto___7017);
var G__7021 = (0);
seq__7002_7006 = G__7018;
chunk__7003_7007 = G__7019;
count__7004_7008 = G__7020;
i__7005_7009 = G__7021;
continue;
} else {
var n_7022 = cljs.core.first.call(null,seq__7002_7016__$1);
n_7022.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__7023 = cljs.core.next.call(null,seq__7002_7016__$1);
var G__7024 = null;
var G__7025 = (0);
var G__7026 = (0);
seq__7002_7006 = G__7023;
chunk__7003_7007 = G__7024;
count__7004_7008 = G__7025;
i__7005_7009 = G__7026;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq6999){
var G__7000 = cljs.core.first.call(null,seq6999);
var seq6999__$1 = cljs.core.next.call(null,seq6999);
var G__7001 = cljs.core.first.call(null,seq6999__$1);
var seq6999__$2 = cljs.core.next.call(null,seq6999__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7000,G__7001,seq6999__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__7031_7035 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7032_7036 = null;
var count__7033_7037 = (0);
var i__7034_7038 = (0);
while(true){
if((i__7034_7038 < count__7033_7037)){
var n_7039 = cljs.core._nth.call(null,chunk__7032_7036,i__7034_7038);
n_7039.removeAttribute(cljs.core.name.call(null,name));

var G__7040 = seq__7031_7035;
var G__7041 = chunk__7032_7036;
var G__7042 = count__7033_7037;
var G__7043 = (i__7034_7038 + (1));
seq__7031_7035 = G__7040;
chunk__7032_7036 = G__7041;
count__7033_7037 = G__7042;
i__7034_7038 = G__7043;
continue;
} else {
var temp__4404__auto___7044 = cljs.core.seq.call(null,seq__7031_7035);
if(temp__4404__auto___7044){
var seq__7031_7045__$1 = temp__4404__auto___7044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7031_7045__$1)){
var c__5056__auto___7046 = cljs.core.chunk_first.call(null,seq__7031_7045__$1);
var G__7047 = cljs.core.chunk_rest.call(null,seq__7031_7045__$1);
var G__7048 = c__5056__auto___7046;
var G__7049 = cljs.core.count.call(null,c__5056__auto___7046);
var G__7050 = (0);
seq__7031_7035 = G__7047;
chunk__7032_7036 = G__7048;
count__7033_7037 = G__7049;
i__7034_7038 = G__7050;
continue;
} else {
var n_7051 = cljs.core.first.call(null,seq__7031_7045__$1);
n_7051.removeAttribute(cljs.core.name.call(null,name));

var G__7052 = cljs.core.next.call(null,seq__7031_7045__$1);
var G__7053 = null;
var G__7054 = (0);
var G__7055 = (0);
seq__7031_7035 = G__7052;
chunk__7032_7036 = G__7053;
count__7033_7037 = G__7054;
i__7034_7038 = G__7055;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__7057 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__7057,(0),null);
var v = cljs.core.nth.call(null,vec__7057,(1),null);
if(cljs.core.truth_((function (){var and__4259__auto__ = k;
if(cljs.core.truth_(and__4259__auto__)){
return v;
} else {
return and__4259__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__7058_SHARP_){
var attr = attrs__$1.item(p1__7058_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__7065_7071 = cljs.core.seq.call(null,styles);
var chunk__7066_7072 = null;
var count__7067_7073 = (0);
var i__7068_7074 = (0);
while(true){
if((i__7068_7074 < count__7067_7073)){
var vec__7069_7075 = cljs.core._nth.call(null,chunk__7066_7072,i__7068_7074);
var name_7076 = cljs.core.nth.call(null,vec__7069_7075,(0),null);
var value_7077 = cljs.core.nth.call(null,vec__7069_7075,(1),null);
domina.set_style_BANG_.call(null,content,name_7076,value_7077);

var G__7078 = seq__7065_7071;
var G__7079 = chunk__7066_7072;
var G__7080 = count__7067_7073;
var G__7081 = (i__7068_7074 + (1));
seq__7065_7071 = G__7078;
chunk__7066_7072 = G__7079;
count__7067_7073 = G__7080;
i__7068_7074 = G__7081;
continue;
} else {
var temp__4404__auto___7082 = cljs.core.seq.call(null,seq__7065_7071);
if(temp__4404__auto___7082){
var seq__7065_7083__$1 = temp__4404__auto___7082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7065_7083__$1)){
var c__5056__auto___7084 = cljs.core.chunk_first.call(null,seq__7065_7083__$1);
var G__7085 = cljs.core.chunk_rest.call(null,seq__7065_7083__$1);
var G__7086 = c__5056__auto___7084;
var G__7087 = cljs.core.count.call(null,c__5056__auto___7084);
var G__7088 = (0);
seq__7065_7071 = G__7085;
chunk__7066_7072 = G__7086;
count__7067_7073 = G__7087;
i__7068_7074 = G__7088;
continue;
} else {
var vec__7070_7089 = cljs.core.first.call(null,seq__7065_7083__$1);
var name_7090 = cljs.core.nth.call(null,vec__7070_7089,(0),null);
var value_7091 = cljs.core.nth.call(null,vec__7070_7089,(1),null);
domina.set_style_BANG_.call(null,content,name_7090,value_7091);

var G__7092 = cljs.core.next.call(null,seq__7065_7083__$1);
var G__7093 = null;
var G__7094 = (0);
var G__7095 = (0);
seq__7065_7071 = G__7092;
chunk__7066_7072 = G__7093;
count__7067_7073 = G__7094;
i__7068_7074 = G__7095;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__7102_7108 = cljs.core.seq.call(null,attrs);
var chunk__7103_7109 = null;
var count__7104_7110 = (0);
var i__7105_7111 = (0);
while(true){
if((i__7105_7111 < count__7104_7110)){
var vec__7106_7112 = cljs.core._nth.call(null,chunk__7103_7109,i__7105_7111);
var name_7113 = cljs.core.nth.call(null,vec__7106_7112,(0),null);
var value_7114 = cljs.core.nth.call(null,vec__7106_7112,(1),null);
domina.set_attr_BANG_.call(null,content,name_7113,value_7114);

var G__7115 = seq__7102_7108;
var G__7116 = chunk__7103_7109;
var G__7117 = count__7104_7110;
var G__7118 = (i__7105_7111 + (1));
seq__7102_7108 = G__7115;
chunk__7103_7109 = G__7116;
count__7104_7110 = G__7117;
i__7105_7111 = G__7118;
continue;
} else {
var temp__4404__auto___7119 = cljs.core.seq.call(null,seq__7102_7108);
if(temp__4404__auto___7119){
var seq__7102_7120__$1 = temp__4404__auto___7119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7102_7120__$1)){
var c__5056__auto___7121 = cljs.core.chunk_first.call(null,seq__7102_7120__$1);
var G__7122 = cljs.core.chunk_rest.call(null,seq__7102_7120__$1);
var G__7123 = c__5056__auto___7121;
var G__7124 = cljs.core.count.call(null,c__5056__auto___7121);
var G__7125 = (0);
seq__7102_7108 = G__7122;
chunk__7103_7109 = G__7123;
count__7104_7110 = G__7124;
i__7105_7111 = G__7125;
continue;
} else {
var vec__7107_7126 = cljs.core.first.call(null,seq__7102_7120__$1);
var name_7127 = cljs.core.nth.call(null,vec__7107_7126,(0),null);
var value_7128 = cljs.core.nth.call(null,vec__7107_7126,(1),null);
domina.set_attr_BANG_.call(null,content,name_7127,value_7128);

var G__7129 = cljs.core.next.call(null,seq__7102_7120__$1);
var G__7130 = null;
var G__7131 = (0);
var G__7132 = (0);
seq__7102_7108 = G__7129;
chunk__7103_7109 = G__7130;
count__7104_7110 = G__7131;
i__7105_7111 = G__7132;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__7137_7141 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7138_7142 = null;
var count__7139_7143 = (0);
var i__7140_7144 = (0);
while(true){
if((i__7140_7144 < count__7139_7143)){
var node_7145 = cljs.core._nth.call(null,chunk__7138_7142,i__7140_7144);
goog.dom.classes.add(node_7145,class$);

var G__7146 = seq__7137_7141;
var G__7147 = chunk__7138_7142;
var G__7148 = count__7139_7143;
var G__7149 = (i__7140_7144 + (1));
seq__7137_7141 = G__7146;
chunk__7138_7142 = G__7147;
count__7139_7143 = G__7148;
i__7140_7144 = G__7149;
continue;
} else {
var temp__4404__auto___7150 = cljs.core.seq.call(null,seq__7137_7141);
if(temp__4404__auto___7150){
var seq__7137_7151__$1 = temp__4404__auto___7150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7137_7151__$1)){
var c__5056__auto___7152 = cljs.core.chunk_first.call(null,seq__7137_7151__$1);
var G__7153 = cljs.core.chunk_rest.call(null,seq__7137_7151__$1);
var G__7154 = c__5056__auto___7152;
var G__7155 = cljs.core.count.call(null,c__5056__auto___7152);
var G__7156 = (0);
seq__7137_7141 = G__7153;
chunk__7138_7142 = G__7154;
count__7139_7143 = G__7155;
i__7140_7144 = G__7156;
continue;
} else {
var node_7157 = cljs.core.first.call(null,seq__7137_7151__$1);
goog.dom.classes.add(node_7157,class$);

var G__7158 = cljs.core.next.call(null,seq__7137_7151__$1);
var G__7159 = null;
var G__7160 = (0);
var G__7161 = (0);
seq__7137_7141 = G__7158;
chunk__7138_7142 = G__7159;
count__7139_7143 = G__7160;
i__7140_7144 = G__7161;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__7166_7170 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7167_7171 = null;
var count__7168_7172 = (0);
var i__7169_7173 = (0);
while(true){
if((i__7169_7173 < count__7168_7172)){
var node_7174 = cljs.core._nth.call(null,chunk__7167_7171,i__7169_7173);
goog.dom.classes.remove(node_7174,class$);

var G__7175 = seq__7166_7170;
var G__7176 = chunk__7167_7171;
var G__7177 = count__7168_7172;
var G__7178 = (i__7169_7173 + (1));
seq__7166_7170 = G__7175;
chunk__7167_7171 = G__7176;
count__7168_7172 = G__7177;
i__7169_7173 = G__7178;
continue;
} else {
var temp__4404__auto___7179 = cljs.core.seq.call(null,seq__7166_7170);
if(temp__4404__auto___7179){
var seq__7166_7180__$1 = temp__4404__auto___7179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7166_7180__$1)){
var c__5056__auto___7181 = cljs.core.chunk_first.call(null,seq__7166_7180__$1);
var G__7182 = cljs.core.chunk_rest.call(null,seq__7166_7180__$1);
var G__7183 = c__5056__auto___7181;
var G__7184 = cljs.core.count.call(null,c__5056__auto___7181);
var G__7185 = (0);
seq__7166_7170 = G__7182;
chunk__7167_7171 = G__7183;
count__7168_7172 = G__7184;
i__7169_7173 = G__7185;
continue;
} else {
var node_7186 = cljs.core.first.call(null,seq__7166_7180__$1);
goog.dom.classes.remove(node_7186,class$);

var G__7187 = cljs.core.next.call(null,seq__7166_7180__$1);
var G__7188 = null;
var G__7189 = (0);
var G__7190 = (0);
seq__7166_7170 = G__7187;
chunk__7167_7171 = G__7188;
count__7168_7172 = G__7189;
i__7169_7173 = G__7190;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__7195_7199 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7196_7200 = null;
var count__7197_7201 = (0);
var i__7198_7202 = (0);
while(true){
if((i__7198_7202 < count__7197_7201)){
var node_7203 = cljs.core._nth.call(null,chunk__7196_7200,i__7198_7202);
goog.dom.classes.toggle(node_7203,class$);

var G__7204 = seq__7195_7199;
var G__7205 = chunk__7196_7200;
var G__7206 = count__7197_7201;
var G__7207 = (i__7198_7202 + (1));
seq__7195_7199 = G__7204;
chunk__7196_7200 = G__7205;
count__7197_7201 = G__7206;
i__7198_7202 = G__7207;
continue;
} else {
var temp__4404__auto___7208 = cljs.core.seq.call(null,seq__7195_7199);
if(temp__4404__auto___7208){
var seq__7195_7209__$1 = temp__4404__auto___7208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7195_7209__$1)){
var c__5056__auto___7210 = cljs.core.chunk_first.call(null,seq__7195_7209__$1);
var G__7211 = cljs.core.chunk_rest.call(null,seq__7195_7209__$1);
var G__7212 = c__5056__auto___7210;
var G__7213 = cljs.core.count.call(null,c__5056__auto___7210);
var G__7214 = (0);
seq__7195_7199 = G__7211;
chunk__7196_7200 = G__7212;
count__7197_7201 = G__7213;
i__7198_7202 = G__7214;
continue;
} else {
var node_7215 = cljs.core.first.call(null,seq__7195_7209__$1);
goog.dom.classes.toggle(node_7215,class$);

var G__7216 = cljs.core.next.call(null,seq__7195_7209__$1);
var G__7217 = null;
var G__7218 = (0);
var G__7219 = (0);
seq__7195_7199 = G__7216;
chunk__7196_7200 = G__7217;
count__7197_7201 = G__7218;
i__7198_7202 = G__7219;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 * be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_7228__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__7224_7229 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7225_7230 = null;
var count__7226_7231 = (0);
var i__7227_7232 = (0);
while(true){
if((i__7227_7232 < count__7226_7231)){
var node_7233 = cljs.core._nth.call(null,chunk__7225_7230,i__7227_7232);
goog.dom.classes.set(node_7233,classes_7228__$1);

var G__7234 = seq__7224_7229;
var G__7235 = chunk__7225_7230;
var G__7236 = count__7226_7231;
var G__7237 = (i__7227_7232 + (1));
seq__7224_7229 = G__7234;
chunk__7225_7230 = G__7235;
count__7226_7231 = G__7236;
i__7227_7232 = G__7237;
continue;
} else {
var temp__4404__auto___7238 = cljs.core.seq.call(null,seq__7224_7229);
if(temp__4404__auto___7238){
var seq__7224_7239__$1 = temp__4404__auto___7238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7224_7239__$1)){
var c__5056__auto___7240 = cljs.core.chunk_first.call(null,seq__7224_7239__$1);
var G__7241 = cljs.core.chunk_rest.call(null,seq__7224_7239__$1);
var G__7242 = c__5056__auto___7240;
var G__7243 = cljs.core.count.call(null,c__5056__auto___7240);
var G__7244 = (0);
seq__7224_7229 = G__7241;
chunk__7225_7230 = G__7242;
count__7226_7231 = G__7243;
i__7227_7232 = G__7244;
continue;
} else {
var node_7245 = cljs.core.first.call(null,seq__7224_7239__$1);
goog.dom.classes.set(node_7245,classes_7228__$1);

var G__7246 = cljs.core.next.call(null,seq__7224_7239__$1);
var G__7247 = null;
var G__7248 = (0);
var G__7249 = (0);
seq__7224_7229 = G__7246;
chunk__7225_7230 = G__7247;
count__7226_7231 = G__7248;
i__7227_7232 = G__7249;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__7254_7258 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7255_7259 = null;
var count__7256_7260 = (0);
var i__7257_7261 = (0);
while(true){
if((i__7257_7261 < count__7256_7260)){
var node_7262 = cljs.core._nth.call(null,chunk__7255_7259,i__7257_7261);
goog.dom.setTextContent(node_7262,value);

var G__7263 = seq__7254_7258;
var G__7264 = chunk__7255_7259;
var G__7265 = count__7256_7260;
var G__7266 = (i__7257_7261 + (1));
seq__7254_7258 = G__7263;
chunk__7255_7259 = G__7264;
count__7256_7260 = G__7265;
i__7257_7261 = G__7266;
continue;
} else {
var temp__4404__auto___7267 = cljs.core.seq.call(null,seq__7254_7258);
if(temp__4404__auto___7267){
var seq__7254_7268__$1 = temp__4404__auto___7267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7254_7268__$1)){
var c__5056__auto___7269 = cljs.core.chunk_first.call(null,seq__7254_7268__$1);
var G__7270 = cljs.core.chunk_rest.call(null,seq__7254_7268__$1);
var G__7271 = c__5056__auto___7269;
var G__7272 = cljs.core.count.call(null,c__5056__auto___7269);
var G__7273 = (0);
seq__7254_7258 = G__7270;
chunk__7255_7259 = G__7271;
count__7256_7260 = G__7272;
i__7257_7261 = G__7273;
continue;
} else {
var node_7274 = cljs.core.first.call(null,seq__7254_7268__$1);
goog.dom.setTextContent(node_7274,value);

var G__7275 = cljs.core.next.call(null,seq__7254_7268__$1);
var G__7276 = null;
var G__7277 = (0);
var G__7278 = (0);
seq__7254_7258 = G__7275;
chunk__7255_7259 = G__7276;
count__7256_7260 = G__7277;
i__7257_7261 = G__7278;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__7283_7287 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7284_7288 = null;
var count__7285_7289 = (0);
var i__7286_7290 = (0);
while(true){
if((i__7286_7290 < count__7285_7289)){
var node_7291 = cljs.core._nth.call(null,chunk__7284_7288,i__7286_7290);
goog.dom.forms.setValue(node_7291,value);

var G__7292 = seq__7283_7287;
var G__7293 = chunk__7284_7288;
var G__7294 = count__7285_7289;
var G__7295 = (i__7286_7290 + (1));
seq__7283_7287 = G__7292;
chunk__7284_7288 = G__7293;
count__7285_7289 = G__7294;
i__7286_7290 = G__7295;
continue;
} else {
var temp__4404__auto___7296 = cljs.core.seq.call(null,seq__7283_7287);
if(temp__4404__auto___7296){
var seq__7283_7297__$1 = temp__4404__auto___7296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7283_7297__$1)){
var c__5056__auto___7298 = cljs.core.chunk_first.call(null,seq__7283_7297__$1);
var G__7299 = cljs.core.chunk_rest.call(null,seq__7283_7297__$1);
var G__7300 = c__5056__auto___7298;
var G__7301 = cljs.core.count.call(null,c__5056__auto___7298);
var G__7302 = (0);
seq__7283_7287 = G__7299;
chunk__7284_7288 = G__7300;
count__7285_7289 = G__7301;
i__7286_7290 = G__7302;
continue;
} else {
var node_7303 = cljs.core.first.call(null,seq__7283_7297__$1);
goog.dom.forms.setValue(node_7303,value);

var G__7304 = cljs.core.next.call(null,seq__7283_7297__$1);
var G__7305 = null;
var G__7306 = (0);
var G__7307 = (0);
seq__7283_7287 = G__7304;
chunk__7284_7288 = G__7305;
count__7285_7289 = G__7306;
i__7286_7290 = G__7307;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__4259__auto__ = allows_inner_html_QMARK_;
if(and__4259__auto__){
var and__4259__auto____$1 = (function (){var or__4271__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__4259__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__4259__auto____$1;
}
} else {
return and__4259__auto__;
}
})())){
var value_7318 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__7314_7319 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7315_7320 = null;
var count__7316_7321 = (0);
var i__7317_7322 = (0);
while(true){
if((i__7317_7322 < count__7316_7321)){
var node_7323 = cljs.core._nth.call(null,chunk__7315_7320,i__7317_7322);
node_7323.innerHTML = value_7318;

var G__7324 = seq__7314_7319;
var G__7325 = chunk__7315_7320;
var G__7326 = count__7316_7321;
var G__7327 = (i__7317_7322 + (1));
seq__7314_7319 = G__7324;
chunk__7315_7320 = G__7325;
count__7316_7321 = G__7326;
i__7317_7322 = G__7327;
continue;
} else {
var temp__4404__auto___7328 = cljs.core.seq.call(null,seq__7314_7319);
if(temp__4404__auto___7328){
var seq__7314_7329__$1 = temp__4404__auto___7328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7314_7329__$1)){
var c__5056__auto___7330 = cljs.core.chunk_first.call(null,seq__7314_7329__$1);
var G__7331 = cljs.core.chunk_rest.call(null,seq__7314_7329__$1);
var G__7332 = c__5056__auto___7330;
var G__7333 = cljs.core.count.call(null,c__5056__auto___7330);
var G__7334 = (0);
seq__7314_7319 = G__7331;
chunk__7315_7320 = G__7332;
count__7316_7321 = G__7333;
i__7317_7322 = G__7334;
continue;
} else {
var node_7335 = cljs.core.first.call(null,seq__7314_7329__$1);
node_7335.innerHTML = value_7318;

var G__7336 = cljs.core.next.call(null,seq__7314_7329__$1);
var G__7337 = null;
var G__7338 = (0);
var G__7339 = (0);
seq__7314_7319 = G__7336;
chunk__7315_7320 = G__7337;
count__7316_7321 = G__7338;
i__7317_7322 = G__7339;
continue;
}
} else {
}
}
break;
}
}catch (e7313){if((e7313 instanceof Error)){
var e_7340 = e7313;
domina.replace_children_BANG_.call(null,content,value_7318);
} else {
throw e7313;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 * content is a single node. If the bubble parameter is set to true,
 * will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(){
var G__7342 = arguments.length;
switch (G__7342) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4259__auto__ = bubble;
if(cljs.core.truth_(and__4259__auto__)){
return (value == null);
} else {
return and__4259__auto__;
}
})())){
var temp__4404__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4404__auto__)){
var parent = temp__4404__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 * single node. Data should be ClojureScript values and data structures
 * only; using other objects as data may result in memory leaks on some
 * browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__4271__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
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
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__7350_7354 = cljs.core.seq.call(null,children);
var chunk__7351_7355 = null;
var count__7352_7356 = (0);
var i__7353_7357 = (0);
while(true){
if((i__7353_7357 < count__7352_7356)){
var child_7358 = cljs.core._nth.call(null,chunk__7351_7355,i__7353_7357);
frag.appendChild(child_7358);

var G__7359 = seq__7350_7354;
var G__7360 = chunk__7351_7355;
var G__7361 = count__7352_7356;
var G__7362 = (i__7353_7357 + (1));
seq__7350_7354 = G__7359;
chunk__7351_7355 = G__7360;
count__7352_7356 = G__7361;
i__7353_7357 = G__7362;
continue;
} else {
var temp__4404__auto___7363 = cljs.core.seq.call(null,seq__7350_7354);
if(temp__4404__auto___7363){
var seq__7350_7364__$1 = temp__4404__auto___7363;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7350_7364__$1)){
var c__5056__auto___7365 = cljs.core.chunk_first.call(null,seq__7350_7364__$1);
var G__7366 = cljs.core.chunk_rest.call(null,seq__7350_7364__$1);
var G__7367 = c__5056__auto___7365;
var G__7368 = cljs.core.count.call(null,c__5056__auto___7365);
var G__7369 = (0);
seq__7350_7354 = G__7366;
chunk__7351_7355 = G__7367;
count__7352_7356 = G__7368;
i__7353_7357 = G__7369;
continue;
} else {
var child_7370 = cljs.core.first.call(null,seq__7350_7364__$1);
frag.appendChild(child_7370);

var G__7371 = cljs.core.next.call(null,seq__7350_7364__$1);
var G__7372 = null;
var G__7373 = (0);
var G__7374 = (0);
seq__7350_7354 = G__7371;
chunk__7351_7355 = G__7372;
count__7352_7356 = G__7373;
i__7353_7357 = G__7374;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__7344_SHARP_,p2__7345_SHARP_){
return f.call(null,p1__7344_SHARP_,p2__7345_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(){
var G__7376 = arguments.length;
switch (G__7376) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(){
var G__7379 = arguments.length;
switch (G__7379) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__4259__auto__ = obj;
if(cljs.core.truth_(and__4259__auto__)){
var and__4259__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4259__auto____$1){
return obj.length;
} else {
return and__4259__auto____$1;
}
} else {
return and__4259__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 * respond to .length, but are not arrays nor NodeSets. This returns a
 * real sequence view of such objects. If passed an object that is not
 * a logical sequence at all, returns a single-item seq containing the
 * object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__7382 = list_thing;
if(G__7382){
var bit__4945__auto__ = (G__7382.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4945__auto__) || (G__7382.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7382.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7382);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__7383 = content;
if(G__7383){
var bit__4945__auto__ = (G__7383.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4945__auto__) || (G__7383.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7383.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7383);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7383);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__7384 = content;
if(G__7384){
var bit__4945__auto__ = (G__7384.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4945__auto__) || (G__7384.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7384.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7384);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7384);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}
