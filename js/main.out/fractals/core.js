// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('fractals.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_();
if(typeof fractals.core.app_state !== 'undefined'){
} else {
fractals.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$iterations,(35)], null));
}
fractals.core.color_str = (function fractals$core$color_str(var_args){
var args12752 = [];
var len__7513__auto___12755 = arguments.length;
var i__7514__auto___12756 = (0);
while(true){
if((i__7514__auto___12756 < len__7513__auto___12755)){
args12752.push((arguments[i__7514__auto___12756]));

var G__12757 = (i__7514__auto___12756 + (1));
i__7514__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var G__12754 = args12752.length;
switch (G__12754) {
case 3:
return fractals.core.color_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return fractals.core.color_str.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12752.length)].join('')));

}
});

fractals.core.color_str.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return [cljs.core.str("#"),cljs.core.str(r.toString((16))),cljs.core.str(g.toString((16))),cljs.core.str(b.toString((16)))].join('');
});

fractals.core.color_str.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return [cljs.core.str("rgba("),cljs.core.str(r),cljs.core.str(", "),cljs.core.str(g),cljs.core.str(", "),cljs.core.str(b),cljs.core.str(", "),cljs.core.str(a),cljs.core.str(")")].join('');
});

fractals.core.color_str.cljs$lang$maxFixedArity = 4;
fractals.core.mandelbrot_color = (function fractals$core$mandelbrot_color(px,py,width,height,max_iter){
var x0 = ((3.5 * (px / width)) - 2.5);
var y0 = (((3) * (py / height)) - 1.5);
var x = 0.0;
var y = 0.0;
var iter = (0);
while(true){
if(((((x * x) + (y * y)) < ((2) * (2)))) && ((iter < max_iter))){
var G__12759 = (((x * x) - (y * y)) + x0);
var G__12760 = ((((2) * x) * y) + y0);
var G__12761 = (iter + (1));
x = G__12759;
y = G__12760;
iter = G__12761;
continue;
} else {
var d = ((255) - ((iter * ((255) / max_iter)) | (0)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$r,d,cljs.core.cst$kw$g,d,cljs.core.cst$kw$b,d,cljs.core.cst$kw$a,(iter * ((255) / max_iter))], null);
}
break;
}
});
fractals.core.draw_remaining = (function fractals$core$draw_remaining(ctx,id,d,width,height,max_iter,coords,t){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12781){
var vec__12782 = p__12781;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12782,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12782,(1),null);
var color = fractals.core.mandelbrot_color(x,y,width,height,max_iter);
(d[(0)] = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(color));

(d[(1)] = cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(color));

(d[(2)] = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(color));

(d[(3)] = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(color));

return ctx.putImageData(id,x,y);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(t,coords)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_iter,cljs.core.cst$kw$iterations.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fractals.core.app_state) : cljs.core.deref.call(null,fractals.core.app_state))))){
var G__12783 = (function (){
return fractals$core$draw_remaining(ctx,id,d,width,height,max_iter,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(t,coords),t);
});
return window.requestAnimationFrame(G__12783);
} else {
return null;
}
});
fractals.core.draw_mandelbrot_BANG_ = (function fractals$core$draw_mandelbrot_BANG_(max_iter){
var canvas = document.getElementById("mandelbrot");
if(cljs.core.truth_(canvas)){
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var img = ctx.createImageData(width,height);
var pixels = img.data;
var id = ctx.createImageData((1),(1));
var d = id.data;
ctx.fillStyle = "#FFFFFF";

ctx.fillRect((0),(0),width,height);

return fractals.core.draw_remaining(ctx,id,d,width,height,max_iter,(function (){var iter__7227__auto__ = ((function (ctx,width,height,img,pixels,id,d,canvas){
return (function fractals$core$draw_mandelbrot_BANG__$_iter__12795(s__12796){
return (new cljs.core.LazySeq(null,((function (ctx,width,height,img,pixels,id,d,canvas){
return (function (){
var s__12796__$1 = s__12796;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12796__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first(xs__4977__auto__);
var iterys__7223__auto__ = ((function (s__12796__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,id,d,canvas){
return (function fractals$core$draw_mandelbrot_BANG__$_iter__12795_$_iter__12797(s__12798){
return (new cljs.core.LazySeq(null,((function (s__12796__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,id,d,canvas){
return (function (){
var s__12798__$1 = s__12798;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__12798__$1);
if(temp__4425__auto____$1){
var s__12798__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12798__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__12798__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__12800 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__12799 = (0);
while(true){
if((i__12799 < size__7226__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__12799);
cljs.core.chunk_append(b__12800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__12806 = (i__12799 + (1));
i__12799 = G__12806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),fractals$core$draw_mandelbrot_BANG__$_iter__12795_$_iter__12797(cljs.core.chunk_rest(s__12798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12800),null);
}
} else {
var y = cljs.core.first(s__12798__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fractals$core$draw_mandelbrot_BANG__$_iter__12795_$_iter__12797(cljs.core.rest(s__12798__$2)));
}
} else {
return null;
}
break;
}
});})(s__12796__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,id,d,canvas))
,null,null));
});})(s__12796__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,id,d,canvas))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height)));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,fractals$core$draw_mandelbrot_BANG__$_iter__12795(cljs.core.rest(s__12796__$1)));
} else {
var G__12807 = cljs.core.rest(s__12796__$1);
s__12796__$1 = G__12807;
continue;
}
} else {
return null;
}
break;
}
});})(ctx,width,height,img,pixels,id,d,canvas))
,null,null));
});})(ctx,width,height,img,pixels,id,d,canvas))
;
return iter__7227__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})(),(2000));
} else {
return null;
}
});
fractals.core.draw_mandelbrot_BANG_(cljs.core.cst$kw$iterations.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fractals.core.app_state) : cljs.core.deref.call(null,fractals.core.app_state))));
fractals.core.on_change_iterations = (function fractals$core$on_change_iterations(event){
var iter = event.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fractals.core.app_state,cljs.core.assoc,cljs.core.cst$kw$iterations,iter);

return fractals.core.draw_mandelbrot_BANG_(iter);
});
fractals.core.app = (function fractals$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"Iterations: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"number",cljs.core.cst$kw$min,(0),cljs.core.cst$kw$step,(1),cljs.core.cst$kw$value,cljs.core.cst$kw$iterations.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(fractals.core.app_state) : cljs.core.deref.call(null,fractals.core.app_state))),cljs.core.cst$kw$on_DASH_change,fractals.core.on_change_iterations], null)], null)], null);
});
fractals.core.run = (function fractals$core$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fractals.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('fractals.core.run', fractals.core.run);
fractals.core.run();
