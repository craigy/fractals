// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('fractals.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
if(typeof fractals.core.app_state !== 'undefined'){
} else {
fractals.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$roster,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$result,null], null));
}
fractals.core.canvas_component = (function fractals$core$canvas_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"canvas",cljs.core.cst$kw$width,"380",cljs.core.cst$kw$height,"380"], null)], null);
});
fractals.core.app = (function fractals$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/craigy/fractals"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Fractals"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fractals.core.canvas_component], null)], null);
});
if(cljs.core.truth_(cljs.core.cst$kw$interval.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fractals.core.app_state) : cljs.core.deref.call(null,fractals.core.app_state))))){
var G__12752_12753 = cljs.core.cst$kw$interval.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fractals.core.app_state) : cljs.core.deref.call(null,fractals.core.app_state)));
clearInterval(G__12752_12753);
} else {
}
fractals.core.rand_color = (function fractals$core$rand_color(){
return [cljs.core.str("#"),cljs.core.str((cljs.core.rand.cljs$core$IFn$_invoke$arity$1((16777215)) | (0)).toString((16)))].join('');
});
var interval_12756 = (function (){var G__12754 = (function (){
var canvas = document.getElementById("canvas");
if(cljs.core.truth_(canvas)){
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var img = ctx.createImageData(width,height);
var pixels = img.data;
ctx.fillStyle = fractals.core.rand_color();

return ctx.fillRect((0),(0),width,height);
} else {
return null;
}
});
var G__12755 = (1000);
return setInterval(G__12754,G__12755);
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fractals.core.app_state,cljs.core.assoc,cljs.core.cst$kw$interval,interval_12756);
fractals.core.run = (function fractals$core$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fractals.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('fractals.core.run', fractals.core.run);
fractals.core.run();
