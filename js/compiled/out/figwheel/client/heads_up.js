// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17884__auto__ = [];
var len__17877__auto___24539 = arguments.length;
var i__17878__auto___24540 = (0);
while(true){
if((i__17878__auto___24540 < len__17877__auto___24539)){
args__17884__auto__.push((arguments[i__17878__auto___24540]));

var G__24541 = (i__17878__auto___24540 + (1));
i__17878__auto___24540 = G__24541;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((2) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17885__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24531_24542 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24532_24543 = null;
var count__24533_24544 = (0);
var i__24534_24545 = (0);
while(true){
if((i__24534_24545 < count__24533_24544)){
var k_24546 = cljs.core._nth.call(null,chunk__24532_24543,i__24534_24545);
e.setAttribute(cljs.core.name.call(null,k_24546),cljs.core.get.call(null,attrs,k_24546));

var G__24547 = seq__24531_24542;
var G__24548 = chunk__24532_24543;
var G__24549 = count__24533_24544;
var G__24550 = (i__24534_24545 + (1));
seq__24531_24542 = G__24547;
chunk__24532_24543 = G__24548;
count__24533_24544 = G__24549;
i__24534_24545 = G__24550;
continue;
} else {
var temp__4425__auto___24551 = cljs.core.seq.call(null,seq__24531_24542);
if(temp__4425__auto___24551){
var seq__24531_24552__$1 = temp__4425__auto___24551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24531_24552__$1)){
var c__17622__auto___24553 = cljs.core.chunk_first.call(null,seq__24531_24552__$1);
var G__24554 = cljs.core.chunk_rest.call(null,seq__24531_24552__$1);
var G__24555 = c__17622__auto___24553;
var G__24556 = cljs.core.count.call(null,c__17622__auto___24553);
var G__24557 = (0);
seq__24531_24542 = G__24554;
chunk__24532_24543 = G__24555;
count__24533_24544 = G__24556;
i__24534_24545 = G__24557;
continue;
} else {
var k_24558 = cljs.core.first.call(null,seq__24531_24552__$1);
e.setAttribute(cljs.core.name.call(null,k_24558),cljs.core.get.call(null,attrs,k_24558));

var G__24559 = cljs.core.next.call(null,seq__24531_24552__$1);
var G__24560 = null;
var G__24561 = (0);
var G__24562 = (0);
seq__24531_24542 = G__24559;
chunk__24532_24543 = G__24560;
count__24533_24544 = G__24561;
i__24534_24545 = G__24562;
continue;
}
} else {
}
}
break;
}

var seq__24535_24563 = cljs.core.seq.call(null,children);
var chunk__24536_24564 = null;
var count__24537_24565 = (0);
var i__24538_24566 = (0);
while(true){
if((i__24538_24566 < count__24537_24565)){
var ch_24567 = cljs.core._nth.call(null,chunk__24536_24564,i__24538_24566);
e.appendChild(ch_24567);

var G__24568 = seq__24535_24563;
var G__24569 = chunk__24536_24564;
var G__24570 = count__24537_24565;
var G__24571 = (i__24538_24566 + (1));
seq__24535_24563 = G__24568;
chunk__24536_24564 = G__24569;
count__24537_24565 = G__24570;
i__24538_24566 = G__24571;
continue;
} else {
var temp__4425__auto___24572 = cljs.core.seq.call(null,seq__24535_24563);
if(temp__4425__auto___24572){
var seq__24535_24573__$1 = temp__4425__auto___24572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24535_24573__$1)){
var c__17622__auto___24574 = cljs.core.chunk_first.call(null,seq__24535_24573__$1);
var G__24575 = cljs.core.chunk_rest.call(null,seq__24535_24573__$1);
var G__24576 = c__17622__auto___24574;
var G__24577 = cljs.core.count.call(null,c__17622__auto___24574);
var G__24578 = (0);
seq__24535_24563 = G__24575;
chunk__24536_24564 = G__24576;
count__24537_24565 = G__24577;
i__24538_24566 = G__24578;
continue;
} else {
var ch_24579 = cljs.core.first.call(null,seq__24535_24573__$1);
e.appendChild(ch_24579);

var G__24580 = cljs.core.next.call(null,seq__24535_24573__$1);
var G__24581 = null;
var G__24582 = (0);
var G__24583 = (0);
seq__24535_24563 = G__24580;
chunk__24536_24564 = G__24581;
count__24537_24565 = G__24582;
i__24538_24566 = G__24583;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24528){
var G__24529 = cljs.core.first.call(null,seq24528);
var seq24528__$1 = cljs.core.next.call(null,seq24528);
var G__24530 = cljs.core.first.call(null,seq24528__$1);
var seq24528__$2 = cljs.core.next.call(null,seq24528__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24529,G__24530,seq24528__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17736__auto__,method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24584 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24584.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24584.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24584.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24584);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24585,st_map){
var map__24590 = p__24585;
var map__24590__$1 = ((((!((map__24590 == null)))?((((map__24590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24590):map__24590);
var container_el = cljs.core.get.call(null,map__24590__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24590,map__24590__$1,container_el){
return (function (p__24592){
var vec__24593 = p__24592;
var k = cljs.core.nth.call(null,vec__24593,(0),null);
var v = cljs.core.nth.call(null,vec__24593,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24590,map__24590__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24594,dom_str){
var map__24597 = p__24594;
var map__24597__$1 = ((((!((map__24597 == null)))?((((map__24597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24597):map__24597);
var c = map__24597__$1;
var content_area_el = cljs.core.get.call(null,map__24597__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24599){
var map__24602 = p__24599;
var map__24602__$1 = ((((!((map__24602 == null)))?((((map__24602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24602):map__24602);
var content_area_el = cljs.core.get.call(null,map__24602__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_24645){
var state_val_24646 = (state_24645[(1)]);
if((state_val_24646 === (1))){
var inst_24630 = (state_24645[(7)]);
var inst_24630__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24631 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24632 = ["10px","10px","100%","68px","1.0"];
var inst_24633 = cljs.core.PersistentHashMap.fromArrays(inst_24631,inst_24632);
var inst_24634 = cljs.core.merge.call(null,inst_24633,style);
var inst_24635 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24630__$1,inst_24634);
var inst_24636 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24630__$1,msg);
var inst_24637 = cljs.core.async.timeout.call(null,(300));
var state_24645__$1 = (function (){var statearr_24647 = state_24645;
(statearr_24647[(7)] = inst_24630__$1);

(statearr_24647[(8)] = inst_24636);

(statearr_24647[(9)] = inst_24635);

return statearr_24647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24645__$1,(2),inst_24637);
} else {
if((state_val_24646 === (2))){
var inst_24630 = (state_24645[(7)]);
var inst_24639 = (state_24645[(2)]);
var inst_24640 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24641 = ["auto"];
var inst_24642 = cljs.core.PersistentHashMap.fromArrays(inst_24640,inst_24641);
var inst_24643 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24630,inst_24642);
var state_24645__$1 = (function (){var statearr_24648 = state_24645;
(statearr_24648[(10)] = inst_24639);

return statearr_24648;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24645__$1,inst_24643);
} else {
return null;
}
}
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____0 = (function (){
var statearr_24652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24652[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__);

(statearr_24652[(1)] = (1));

return statearr_24652;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____1 = (function (state_24645){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_24645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e24653){if((e24653 instanceof Object)){
var ex__20365__auto__ = e24653;
var statearr_24654_24656 = state_24645;
(statearr_24654_24656[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24657 = state_24645;
state_24645 = G__24657;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__ = function(state_24645){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____1.call(this,state_24645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_24655 = f__20474__auto__.call(null);
(statearr_24655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_24655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__24659 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__24659,(0),null);
var ln = cljs.core.nth.call(null,vec__24659,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24662 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24662,(0),null);
var file_line = cljs.core.nth.call(null,vec__24662,(1),null);
var file_column = cljs.core.nth.call(null,vec__24662,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24662,file_name,file_line,file_column){
return (function (p1__24660_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__24660_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__24662,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16819__auto__ = file_line;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var and__16807__auto__ = cause;
if(cljs.core.truth_(and__16807__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16807__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__24665 = figwheel.client.heads_up.ensure_container.call(null);
var map__24665__$1 = ((((!((map__24665 == null)))?((((map__24665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24665):map__24665);
var content_area_el = cljs.core.get.call(null,map__24665__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_24713){
var state_val_24714 = (state_24713[(1)]);
if((state_val_24714 === (1))){
var inst_24696 = (state_24713[(7)]);
var inst_24696__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24697 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24698 = ["0.0"];
var inst_24699 = cljs.core.PersistentHashMap.fromArrays(inst_24697,inst_24698);
var inst_24700 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24696__$1,inst_24699);
var inst_24701 = cljs.core.async.timeout.call(null,(300));
var state_24713__$1 = (function (){var statearr_24715 = state_24713;
(statearr_24715[(7)] = inst_24696__$1);

(statearr_24715[(8)] = inst_24700);

return statearr_24715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24713__$1,(2),inst_24701);
} else {
if((state_val_24714 === (2))){
var inst_24696 = (state_24713[(7)]);
var inst_24703 = (state_24713[(2)]);
var inst_24704 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_24705 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24706 = cljs.core.PersistentHashMap.fromArrays(inst_24704,inst_24705);
var inst_24707 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24696,inst_24706);
var inst_24708 = cljs.core.async.timeout.call(null,(200));
var state_24713__$1 = (function (){var statearr_24716 = state_24713;
(statearr_24716[(9)] = inst_24703);

(statearr_24716[(10)] = inst_24707);

return statearr_24716;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24713__$1,(3),inst_24708);
} else {
if((state_val_24714 === (3))){
var inst_24696 = (state_24713[(7)]);
var inst_24710 = (state_24713[(2)]);
var inst_24711 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24696,"");
var state_24713__$1 = (function (){var statearr_24717 = state_24713;
(statearr_24717[(11)] = inst_24710);

return statearr_24717;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24713__$1,inst_24711);
} else {
return null;
}
}
}
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20362__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20362__auto____0 = (function (){
var statearr_24721 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24721[(0)] = figwheel$client$heads_up$clear_$_state_machine__20362__auto__);

(statearr_24721[(1)] = (1));

return statearr_24721;
});
var figwheel$client$heads_up$clear_$_state_machine__20362__auto____1 = (function (state_24713){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_24713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e24722){if((e24722 instanceof Object)){
var ex__20365__auto__ = e24722;
var statearr_24723_24725 = state_24713;
(statearr_24723_24725[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24726 = state_24713;
state_24713 = G__24726;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20362__auto__ = function(state_24713){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20362__auto____1.call(this,state_24713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20362__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20362__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_24724 = f__20474__auto__.call(null);
(statearr_24724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_24724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20473__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20473__auto__){
return (function (){
var f__20474__auto__ = (function (){var switch__20361__auto__ = ((function (c__20473__auto__){
return (function (state_24758){
var state_val_24759 = (state_24758[(1)]);
if((state_val_24759 === (1))){
var inst_24748 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_24758__$1 = state_24758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(2),inst_24748);
} else {
if((state_val_24759 === (2))){
var inst_24750 = (state_24758[(2)]);
var inst_24751 = cljs.core.async.timeout.call(null,(400));
var state_24758__$1 = (function (){var statearr_24760 = state_24758;
(statearr_24760[(7)] = inst_24750);

return statearr_24760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(3),inst_24751);
} else {
if((state_val_24759 === (3))){
var inst_24753 = (state_24758[(2)]);
var inst_24754 = figwheel.client.heads_up.clear.call(null);
var state_24758__$1 = (function (){var statearr_24761 = state_24758;
(statearr_24761[(8)] = inst_24753);

return statearr_24761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24758__$1,(4),inst_24754);
} else {
if((state_val_24759 === (4))){
var inst_24756 = (state_24758[(2)]);
var state_24758__$1 = state_24758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24758__$1,inst_24756);
} else {
return null;
}
}
}
}
});})(c__20473__auto__))
;
return ((function (switch__20361__auto__,c__20473__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____0 = (function (){
var statearr_24765 = [null,null,null,null,null,null,null,null,null];
(statearr_24765[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__);

(statearr_24765[(1)] = (1));

return statearr_24765;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____1 = (function (state_24758){
while(true){
var ret_value__20363__auto__ = (function (){try{while(true){
var result__20364__auto__ = switch__20361__auto__.call(null,state_24758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20364__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20364__auto__;
}
break;
}
}catch (e24766){if((e24766 instanceof Object)){
var ex__20365__auto__ = e24766;
var statearr_24767_24769 = state_24758;
(statearr_24767_24769[(5)] = ex__20365__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20363__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24770 = state_24758;
state_24758 = G__24770;
continue;
} else {
return ret_value__20363__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__ = function(state_24758){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____1.call(this,state_24758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20362__auto__;
})()
;})(switch__20361__auto__,c__20473__auto__))
})();
var state__20475__auto__ = (function (){var statearr_24768 = f__20474__auto__.call(null);
(statearr_24768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20473__auto__);

return statearr_24768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20475__auto__);
});})(c__20473__auto__))
);

return c__20473__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1457668829774