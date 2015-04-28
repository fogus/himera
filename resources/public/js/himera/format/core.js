// Compiled by ClojureScript 0.0-3211 {}
goog.provide('himera.format.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.color');
goog.require('domina.xpath');
goog.require('domina');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('goog.style');
himera.format.core.span = (function himera$format$core$span(class$,body){
return [cljs.core.str("<span class='"),cljs.core.str(class$),cljs.core.str("'>"),cljs.core.str(body),cljs.core.str("</span>")].join('');
});
himera.format.core.literal = (function himera$format$core$literal(class$,x){
return himera.format.core.span.call(null,class$,cljs.core.pr_str.call(null,x));
});
himera.format.core.join = (function himera$format$core$join(separator,coll){
return clojure.string.join.call(null,himera.format.core.span.call(null,"separator",separator),cljs.core.map.call(null,himera.format.core.html,coll));
});
himera.format.core.html_collection = (function himera$format$core$html_collection(class$,opener,closer,coll){
return himera.format.core.span.call(null,[cljs.core.str("collection "),cljs.core.str(class$)].join(''),[cljs.core.str(himera.format.core.span.call(null,"opener",opener)),cljs.core.str(himera.format.core.span.call(null,"contents",himera.format.core.join.call(null," ",coll))),cljs.core.str(himera.format.core.span.call(null,"closer",closer))].join(''));
});
himera.format.core.html_keyval = (function himera$format$core$html_keyval(p__6649){
var vec__6651 = p__6649;
var k = cljs.core.nth.call(null,vec__6651,(0),null);
var v = cljs.core.nth.call(null,vec__6651,(1),null);
return himera.format.core.span.call(null,"keyval",[cljs.core.str(himera.format.core.html.call(null,k)),cljs.core.str(himera.format.core.span.call(null,"separator"," ")),cljs.core.str(himera.format.core.html.call(null,v))].join(''));
});
himera.format.core.html_keyvals = (function himera$format$core$html_keyvals(coll){
return clojure.string.join.call(null,himera.format.core.span.call(null,"separator",", "),cljs.core.map.call(null,himera.format.core.html_keyval,coll));
});
himera.format.core.html_map = (function himera$format$core$html_map(coll){
return himera.format.core.span.call(null,"collection map",[cljs.core.str(himera.format.core.span.call(null,"opener","{")),cljs.core.str(himera.format.core.span.call(null,"contents",himera.format.core.html_keyvals.call(null,coll))),cljs.core.str(himera.format.core.span.call(null,"closer","}"))].join(''));
});
himera.format.core.html_string = (function himera$format$core$html_string(s){
return himera.format.core.span.call(null,"string",[cljs.core.str(himera.format.core.span.call(null,"opener","\"")),cljs.core.str(himera.format.core.span.call(null,"contents",s)),cljs.core.str(himera.format.core.span.call(null,"closer","\""))].join(''));
});
himera.format.core.html = (function himera$format$core$html(x){
if(typeof x === 'number'){
return himera.format.core.literal.call(null,"number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return himera.format.core.literal.call(null,"keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return himera.format.core.literal.call(null,"symbol",x);
} else {
if(typeof x === 'string'){
return himera.format.core.html_string.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return himera.format.core.html_map.call(null,x);
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return himera.format.core.html_collection.call(null,"set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return himera.format.core.html_collection.call(null,"vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return himera.format.core.html_collection.call(null,"seq","(",")",x);
} else {
return himera.format.core.literal.call(null,"literal",x);

}
}
}
}
}
}
}
}
});
himera.format.core.overflow_QMARK_ = (function himera$format$core$overflow_QMARK_(child,parent){
var parent_box = goog.style.getBounds(parent).toBox();
var child_box = goog.style.getBounds(child).toBox();
return (parent_box.right < child_box.right);
});
himera.format.core.max_inline_width = (function himera$format$core$max_inline_width(elem,container){
var child = domina.single_node.call(null,elem);
var parent = domina.single_node.call(null,elem).parentNode;
var container_node = domina.single_node.call(null,container);
var left_bound = goog.style.getBounds(child).toBox().left;
var parent_right_bound = goog.style.getBounds(parent).toBox().right;
var container_right_bound = goog.style.getBounds(container_node).toBox().right;
return ((function (){var x__4590__auto__ = parent_right_bound;
var y__4591__auto__ = container_right_bound;
return ((x__4590__auto__ < y__4591__auto__) ? x__4590__auto__ : y__4591__auto__);
})() - left_bound);
});
himera.format.core.width = (function himera$format$core$width(elem){
return goog.style.getBounds(domina.single_node.call(null,elem)).width;
});
himera.format.core.initial_arrange_state = cljs.core.cycle.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#e6f3f7","#f2ffff","#e5f2ff","#ebf7f4","#e5fff1"], null));
himera.format.core.color = cljs.core.first;
himera.format.core.next_state = cljs.core.rest;
himera.format.core.arrange_keyval_BANG_ = (function himera$format$core$arrange_keyval_BANG_(state,elem,container){
var vec__6653 = domina.children.call(null,elem);
var key = cljs.core.nth.call(null,vec__6653,(0),null);
var separator = cljs.core.nth.call(null,vec__6653,(1),null);
var val = cljs.core.nth.call(null,vec__6653,(2),null);
himera.format.core.arrange_element_BANG_.call(null,state,key,container);

himera.format.core.arrange_element_BANG_.call(null,state,val,container);

if(cljs.core.truth_(himera.format.core.overflow_QMARK_.call(null,elem,container))){
domina.set_styles_BANG_.call(null,separator,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));

domina.set_styles_BANG_.call(null,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));

return domina.set_styles_BANG_.call(null,val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"1em"], null));
} else {
return null;
}
});
himera.format.core.collection_styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),new cljs.core.Keyword(null,"border-top-left-radius","border-top-left-radius",1361811342),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941)],["black","10px","10px","5px","2px","1px","2px","inline-block","2px","5px","1ex"]);
himera.format.core.arrange_collection_BANG_ = (function himera$format$core$arrange_collection_BANG_(state,elem,container){
domina.add_class_BANG_.call(null,elem,"arranged");

domina.set_styles_BANG_.call(null,elem,cljs.core.merge.call(null,himera.format.core.collection_styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),himera.format.core.color.call(null,state)], null)));

var vec__6659 = domina.children.call(null,elem);
var opener = cljs.core.nth.call(null,vec__6659,(0),null);
var contents = cljs.core.nth.call(null,vec__6659,(1),null);
var closer = cljs.core.nth.call(null,vec__6659,(2),null);
domina.set_styles_BANG_.call(null,opener,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null));

domina.set_styles_BANG_.call(null,closer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"bottom"], null));

domina.set_styles_BANG_.call(null,contents,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null));

var seq__6660_6664 = cljs.core.seq.call(null,domina.children.call(null,contents));
var chunk__6661_6665 = null;
var count__6662_6666 = (0);
var i__6663_6667 = (0);
while(true){
if((i__6663_6667 < count__6662_6666)){
var child_6668 = cljs.core._nth.call(null,chunk__6661_6665,i__6663_6667);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,child_6668,"separator"))){
domina.set_styles_BANG_.call(null,child_6668,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
} else {
himera.format.core.arrange_element_BANG_.call(null,himera.format.core.next_state.call(null,state),child_6668,container);

domina.set_styles_BANG_.call(null,child_6668,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));
}

var G__6669 = seq__6660_6664;
var G__6670 = chunk__6661_6665;
var G__6671 = count__6662_6666;
var G__6672 = (i__6663_6667 + (1));
seq__6660_6664 = G__6669;
chunk__6661_6665 = G__6670;
count__6662_6666 = G__6671;
i__6663_6667 = G__6672;
continue;
} else {
var temp__4404__auto___6673 = cljs.core.seq.call(null,seq__6660_6664);
if(temp__4404__auto___6673){
var seq__6660_6674__$1 = temp__4404__auto___6673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6660_6674__$1)){
var c__5056__auto___6675 = cljs.core.chunk_first.call(null,seq__6660_6674__$1);
var G__6676 = cljs.core.chunk_rest.call(null,seq__6660_6674__$1);
var G__6677 = c__5056__auto___6675;
var G__6678 = cljs.core.count.call(null,c__5056__auto___6675);
var G__6679 = (0);
seq__6660_6664 = G__6676;
chunk__6661_6665 = G__6677;
count__6662_6666 = G__6678;
i__6663_6667 = G__6679;
continue;
} else {
var child_6680 = cljs.core.first.call(null,seq__6660_6674__$1);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,child_6680,"separator"))){
domina.set_styles_BANG_.call(null,child_6680,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null));
} else {
himera.format.core.arrange_element_BANG_.call(null,himera.format.core.next_state.call(null,state),child_6680,container);

domina.set_styles_BANG_.call(null,child_6680,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null));
}

var G__6681 = cljs.core.next.call(null,seq__6660_6674__$1);
var G__6682 = null;
var G__6683 = (0);
var G__6684 = (0);
seq__6660_6664 = G__6681;
chunk__6661_6665 = G__6682;
count__6662_6666 = G__6683;
i__6663_6667 = G__6684;
continue;
}
} else {
}
}
break;
}

return domina.set_styles_BANG_.call(null,elem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(((himera.format.core.width.call(null,contents) + himera.format.core.width.call(null,opener)) + himera.format.core.width.call(null,closer))),cljs.core.str("px")].join('')], null));
});
himera.format.core.remove_all_styles_BANG_ = (function himera$format$core$remove_all_styles_BANG_(elem){
domina.set_attr_BANG_.call(null,elem,new cljs.core.Keyword(null,"style","style",-496642736),"");

domina.remove_class_BANG_.call(null,elem,"arranged");

var seq__6689 = cljs.core.seq.call(null,domina.children.call(null,elem));
var chunk__6690 = null;
var count__6691 = (0);
var i__6692 = (0);
while(true){
if((i__6692 < count__6691)){
var child = cljs.core._nth.call(null,chunk__6690,i__6692);
himera$format$core$remove_all_styles_BANG_.call(null,child);

var G__6693 = seq__6689;
var G__6694 = chunk__6690;
var G__6695 = count__6691;
var G__6696 = (i__6692 + (1));
seq__6689 = G__6693;
chunk__6690 = G__6694;
count__6691 = G__6695;
i__6692 = G__6696;
continue;
} else {
var temp__4404__auto__ = cljs.core.seq.call(null,seq__6689);
if(temp__4404__auto__){
var seq__6689__$1 = temp__4404__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6689__$1)){
var c__5056__auto__ = cljs.core.chunk_first.call(null,seq__6689__$1);
var G__6697 = cljs.core.chunk_rest.call(null,seq__6689__$1);
var G__6698 = c__5056__auto__;
var G__6699 = cljs.core.count.call(null,c__5056__auto__);
var G__6700 = (0);
seq__6689 = G__6697;
chunk__6690 = G__6698;
count__6691 = G__6699;
i__6692 = G__6700;
continue;
} else {
var child = cljs.core.first.call(null,seq__6689__$1);
himera$format$core$remove_all_styles_BANG_.call(null,child);

var G__6701 = cljs.core.next.call(null,seq__6689__$1);
var G__6702 = null;
var G__6703 = (0);
var G__6704 = (0);
seq__6689 = G__6701;
chunk__6690 = G__6702;
count__6691 = G__6703;
i__6692 = G__6704;
continue;
}
} else {
return null;
}
}
break;
}
});
himera.format.core.condense_collection_BANG_ = (function himera$format$core$condense_collection_BANG_(elem,container){
var vec__6706 = domina.children.call(null,elem);
var opener = cljs.core.nth.call(null,vec__6706,(0),null);
var contents = cljs.core.nth.call(null,vec__6706,(1),null);
var closer = cljs.core.nth.call(null,vec__6706,(2),null);
var w = (himera.format.core.max_inline_width.call(null,elem,container) - ((2) * (himera.format.core.width.call(null,opener) + himera.format.core.width.call(null,closer))));
domina.set_styles_BANG_.call(null,opener,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null));

domina.set_styles_BANG_.call(null,closer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null));

return domina.set_styles_BANG_.call(null,contents,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"gray",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str(w),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis"], null));
});
himera.format.core.arrange_element_BANG_ = (function himera$format$core$arrange_element_BANG_(state,elem,container){
himera.format.core.remove_all_styles_BANG_.call(null,elem);

domina.set_styles_BANG_.call(null,elem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null));

if(cljs.core.truth_(himera.format.core.overflow_QMARK_.call(null,elem,container))){
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"collection"))){
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"condensed"))){
return himera.format.core.condense_collection_BANG_.call(null,elem,container);
} else {
return himera.format.core.arrange_collection_BANG_.call(null,state,elem,container);
}
} else {
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,elem,"keyval"))){
return himera.format.core.arrange_keyval_BANG_.call(null,state,elem,container);
} else {
return null;
}
}
} else {
return null;
}
});
himera.format.core.arrange_BANG_ = (function himera$format$core$arrange_BANG_(elem,container){
return himera.format.core.arrange_element_BANG_.call(null,himera.format.core.initial_arrange_state,elem,container);
});
himera.format.core.find_arranged_parent = (function himera$format$core$find_arranged_parent(elem,container){
while(true){
if(cljs.core._EQ_.call(null,container,elem)){
return elem;
} else {
if(cljs.core.truth_((function (){var and__4259__auto__ = goog.dom.isElement(elem);
if(cljs.core.truth_(and__4259__auto__)){
var and__4259__auto____$1 = domina.has_class_QMARK_.call(null,elem,"collection");
if(cljs.core.truth_(and__4259__auto____$1)){
return domina.has_class_QMARK_.call(null,elem,"arranged");
} else {
return and__4259__auto____$1;
}
} else {
return and__4259__auto__;
}
})())){
return elem;
} else {
var G__6707 = elem.parentNode;
var G__6708 = container;
elem = G__6707;
container = G__6708;
continue;

}
}
break;
}
});
himera.format.core.toggle_BANG_ = (function himera$format$core$toggle_BANG_(target_elem,arranged_elem,container){
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,target_elem,"condensed"))){
domina.remove_class_BANG_.call(null,target_elem,"condensed");
} else {
domina.add_class_BANG_.call(null,target_elem,"condensed");
}

return himera.format.core.arrange_BANG_.call(null,arranged_elem,container);
});
himera.format.core.set_toggle_on_click_BANG_ = (function himera$format$core$set_toggle_on_click_BANG_(elem,container){
return goog.events.listen(domina.single_node.call(null,elem),"click",(function (event){
var t = event.target;
while(true){
if(cljs.core.truth_(t)){
if(cljs.core.truth_((function (){var and__4259__auto__ = goog.dom.isElement(t);
if(cljs.core.truth_(and__4259__auto__)){
var and__4259__auto____$1 = domina.has_class_QMARK_.call(null,t,"collection");
if(cljs.core.truth_(and__4259__auto____$1)){
var or__4271__auto__ = domina.has_class_QMARK_.call(null,t,"condensed");
if(cljs.core.truth_(or__4271__auto__)){
return or__4271__auto__;
} else {
return domina.has_class_QMARK_.call(null,t,"arranged");
}
} else {
return and__4259__auto____$1;
}
} else {
return and__4259__auto__;
}
})())){
event.stopPropagation();

event.preventDefault();

return himera.format.core.toggle_BANG_.call(null,t,elem,container);
} else {
var G__6709 = t.parentNode;
t = G__6709;
continue;
}
} else {
return null;
}
break;
}
}));
});
