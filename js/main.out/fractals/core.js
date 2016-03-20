// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('fractals.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_();
fractals.core.color_str = (function fractals$core$color_str(r,g,b){
return [cljs.core.str("#"),cljs.core.str(r.toString((16))),cljs.core.str(g.toString((16))),cljs.core.str(b.toString((16)))].join('');
});
fractals.core.mandelbrot_color = (function fractals$core$mandelbrot_color(px,py,width,height){
var x0 = ((3.5 * (px / width)) - 2.5);
var y0 = (((3) * (py / height)) - 1.5);
var max_iter = (800);
var x = 0.0;
var y = 0.0;
var iter = (0);
while(true){
if(((((x * x) + (y * y)) < ((2) * (2)))) && ((iter < max_iter))){
var G__12039 = (((x * x) - (y * y)) + x0);
var G__12040 = ((((2) * x) * y) + y0);
var G__12041 = (iter + (1));
x = G__12039;
y = G__12040;
iter = G__12041;
continue;
} else {
var d = ((iter * ((255) / max_iter)) | (0));
return fractals.core.color_str(d,d,d);
}
break;
}
});
fractals.core.draw_mandelbrot_BANG_ = (function fractals$core$draw_mandelbrot_BANG_(){
var canvas = document.getElementById("mandelbrot");
if(cljs.core.truth_(canvas)){
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var img = ctx.createImageData(width,height);
var pixels = img.data;
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ctx,width,height,img,pixels,canvas){
return (function (p__12055){
var vec__12056 = p__12055;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(1),null);
ctx.fillStyle = fractals.core.mandelbrot_color(x,y,width,height);

return ctx.fillRect(x,y,(1),(1));
});})(ctx,width,height,img,pixels,canvas))
,(function (){var iter__7227__auto__ = ((function (ctx,width,height,img,pixels,canvas){
return (function fractals$core$draw_mandelbrot_BANG__$_iter__12057(s__12058){
return (new cljs.core.LazySeq(null,((function (ctx,width,height,img,pixels,canvas){
return (function (){
var s__12058__$1 = s__12058;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12058__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first(xs__4977__auto__);
var iterys__7223__auto__ = ((function (s__12058__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,canvas){
return (function fractals$core$draw_mandelbrot_BANG__$_iter__12057_$_iter__12059(s__12060){
return (new cljs.core.LazySeq(null,((function (s__12058__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,canvas){
return (function (){
var s__12060__$1 = s__12060;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__12060__$1);
if(temp__4425__auto____$1){
var s__12060__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__12060__$2)){
var c__7225__auto__ = cljs.core.chunk_first(s__12060__$2);
var size__7226__auto__ = cljs.core.count(c__7225__auto__);
var b__12062 = cljs.core.chunk_buffer(size__7226__auto__);
if((function (){var i__12061 = (0);
while(true){
if((i__12061 < size__7226__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7225__auto__,i__12061);
cljs.core.chunk_append(b__12062,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__12068 = (i__12061 + (1));
i__12061 = G__12068;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12062),fractals$core$draw_mandelbrot_BANG__$_iter__12057_$_iter__12059(cljs.core.chunk_rest(s__12060__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12062),null);
}
} else {
var y = cljs.core.first(s__12060__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),fractals$core$draw_mandelbrot_BANG__$_iter__12057_$_iter__12059(cljs.core.rest(s__12060__$2)));
}
} else {
return null;
}
break;
}
});})(s__12058__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,canvas))
,null,null));
});})(s__12058__$1,x,xs__4977__auto__,temp__4425__auto__,ctx,width,height,img,pixels,canvas))
;
var fs__7224__auto__ = cljs.core.seq(iterys__7223__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(height)));
if(fs__7224__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7224__auto__,fractals$core$draw_mandelbrot_BANG__$_iter__12057(cljs.core.rest(s__12058__$1)));
} else {
var G__12069 = cljs.core.rest(s__12058__$1);
s__12058__$1 = G__12069;
continue;
}
} else {
return null;
}
break;
}
});})(ctx,width,height,img,pixels,canvas))
,null,null));
});})(ctx,width,height,img,pixels,canvas))
;
return iter__7227__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(width));
})()));
} else {
return null;
}
});
fractals.core.draw_mandelbrot_BANG_();
