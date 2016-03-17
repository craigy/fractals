// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6455__auto__ = (function (){var and__6443__auto__ = typeof ReactDOM !== 'undefined';
if(and__6443__auto__){
return ReactDOM;
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
var and__6443__auto__ = typeof require !== 'undefined';
if(and__6443__auto__){
return require("react-dom");
} else {
return and__6443__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$dom], 0)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12621 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12621) : cljs.core.atom.call(null,G__12621));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12624 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12624){
return (function (){
var _STAR_always_update_STAR_12625 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12625;
}});})(_STAR_always_update_STAR_12624))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12624;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12626 = [];
var len__7513__auto___12629 = arguments.length;
var i__7514__auto___12630 = (0);
while(true){
if((i__7514__auto___12630 < len__7513__auto___12629)){
args12626.push((arguments[i__7514__auto___12630]));

var G__12631 = (i__7514__auto___12630 + (1));
i__7514__auto___12630 = G__12631;
continue;
} else {
}
break;
}

var G__12628 = args12626.length;
switch (G__12628) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12626.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__12637_12641 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12638_12642 = null;
var count__12639_12643 = (0);
var i__12640_12644 = (0);
while(true){
if((i__12640_12644 < count__12639_12643)){
var v_12645 = chunk__12638_12642.cljs$core$IIndexed$_nth$arity$2(null,i__12640_12644);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12645);

var G__12646 = seq__12637_12641;
var G__12647 = chunk__12638_12642;
var G__12648 = count__12639_12643;
var G__12649 = (i__12640_12644 + (1));
seq__12637_12641 = G__12646;
chunk__12638_12642 = G__12647;
count__12639_12643 = G__12648;
i__12640_12644 = G__12649;
continue;
} else {
var temp__4425__auto___12650 = cljs.core.seq(seq__12637_12641);
if(temp__4425__auto___12650){
var seq__12637_12651__$1 = temp__4425__auto___12650;
if(cljs.core.chunked_seq_QMARK_(seq__12637_12651__$1)){
var c__7258__auto___12652 = cljs.core.chunk_first(seq__12637_12651__$1);
var G__12653 = cljs.core.chunk_rest(seq__12637_12651__$1);
var G__12654 = c__7258__auto___12652;
var G__12655 = cljs.core.count(c__7258__auto___12652);
var G__12656 = (0);
seq__12637_12641 = G__12653;
chunk__12638_12642 = G__12654;
count__12639_12643 = G__12655;
i__12640_12644 = G__12656;
continue;
} else {
var v_12657 = cljs.core.first(seq__12637_12651__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12657);

var G__12658 = cljs.core.next(seq__12637_12651__$1);
var G__12659 = null;
var G__12660 = (0);
var G__12661 = (0);
seq__12637_12641 = G__12658;
chunk__12638_12642 = G__12659;
count__12639_12643 = G__12660;
i__12640_12644 = G__12661;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
