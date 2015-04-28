// Compiled by ClojureScript 0.0-3211 {}
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function domina$xpath$select_node_STAR_(path,node,technique_1,technique_2){
var doc = goog.dom.getOwnerDocument(node);
if(cljs.core.truth_((function (){var and__4259__auto__ = node.selectSingleNode;
if(cljs.core.truth_(and__4259__auto__)){
return doc.setProperty;
} else {
return and__4259__auto__;
}
})())){
doc.setProperty("SelectionLanguage","XPath");

return technique_1.call(null,node,path);
} else {
if(cljs.core.truth_(doc.evaluate)){
return technique_2.call(null,null,doc,node,path);
} else {
throw (new Error("Could not find XPath support in this browser."));

}
}
});
/**
 * Selects a single node using an XPath expression and a root node
 */
domina.xpath.select_node = (function domina$xpath$select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);
return result.singleNodeValue;
}));
});
/**
 * Selects multiple nodes using an XPath expression and a root node
 */
domina.xpath.select_nodes = (function domina$xpath$select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){
return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){
var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results = result.snapshotLength;
var i = (0);
var acc = null;
while(true){
if((i < num_results)){
var G__12703 = (i + (1));
var G__12704 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__12703;
acc = G__12704;
continue;
} else {
return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function domina$xpath$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.xpath.xpath = (function domina$xpath$xpath(){
var G__12706 = arguments.length;
switch (G__12706) {
case 1:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.xpath.xpath.call(null,domina.xpath.root_element.call(null),expr);
});

domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.xpath.t12707 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.xpath.t12707 = (function (base,expr,meta12708){
this.base = base;
this.expr = expr;
this.meta12708 = meta12708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.xpath.t12707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12709,meta12708__$1){
var self__ = this;
var _12709__$1 = this;
return (new domina.xpath.t12707(self__.base,self__.expr,meta12708__$1));
});

domina.xpath.t12707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12709){
var self__ = this;
var _12709__$1 = this;
return self__.meta12708;
});

domina.xpath.t12707.prototype.domina$DomContent$ = true;

domina.xpath.t12707.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});

domina.xpath.t12707.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});

domina.xpath.t12707.cljs$lang$type = true;

domina.xpath.t12707.cljs$lang$ctorStr = "domina.xpath/t12707";

domina.xpath.t12707.cljs$lang$ctorPrWriter = (function (this__4850__auto__,writer__4851__auto__,opt__4852__auto__){
return cljs.core._write.call(null,writer__4851__auto__,"domina.xpath/t12707");
});

domina.xpath.__GT_t12707 = (function domina$xpath$__GT_t12707(base__$1,expr__$1,meta12708){
return (new domina.xpath.t12707(base__$1,expr__$1,meta12708));
});

}

return (new domina.xpath.t12707(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.xpath.xpath.cljs$lang$maxFixedArity = 2;
