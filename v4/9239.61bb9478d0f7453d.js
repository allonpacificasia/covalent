"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[9239],{66985:(Z,u,a)=>{a.r(u),a.d(u,{SankeyModule:()=>K});var r=a(69808),p=a(4521),l=a(74107),i=a(63874),h=a(43416),d=a(8370),s=a(34803),g=a(21324),f=a(64966),C=a(37641),A=a(15861),M=a(17606),e=a(5e3),S=a(67322),x=a(90508),D=a(80338),N=a(33241),y=a(80878);function J(n,o){if(1&n&&(e.TgZ(0,"mat-option",9),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t," ")}}function Q(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"mat-icon"),e._uU(2,"device_hub"),e.qZA(),e.TgZ(3,"span",11),e._uU(4),e.qZA(),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(1),e.Udp("color",t.color),e.xp6(3),e.hij(" ",t.data.name," ")}}function k(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"span",11),e._uU(2),e.qZA(),e.TgZ(3,"mat-icon"),e._uU(4,"arrow_forward"),e.qZA(),e.TgZ(5,"span",12),e._uU(6),e.qZA(),e.BQk()),2&n){const t=e.oxw(2).$implicit;e.xp6(2),e.hij(" ",t.data.source," "),e.xp6(4),e.AsE("",t.data.target," : ",t.value,"")}}function F(n,o){if(1&n&&(e.ynx(0),e.TgZ(1,"div",0),e.YNc(2,Q,5,3,"ng-container",10),e.YNc(3,k,7,3,"ng-container",10),e.qZA(),e.BQk()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf","node"===t.dataType),e.xp6(1),e.Q6J("ngIf","edge"===t.dataType)}}function U(n,o){1&n&&e.YNc(0,F,4,2,"ng-container",10),2&n&&e.Q6J("ngIf",o.$implicit)}const j=function(){return{name:"a"}},O=function(){return{name:"b"}},B=function(){return{name:"a1"}},Y=function(){return{name:"a2"}},b=function(){return{name:"b1"}},E=function(){return{name:"c"}},T=function(n,o,t,c,v,m){return[n,o,t,c,v,m]},I=function(){return{source:"a",target:"a1",value:5}},$=function(){return{source:"a",target:"a2",value:3}},H=function(){return{source:"b",target:"b1",value:8}},L=function(){return{source:"a",target:"b1",value:3}},z=function(){return{source:"b1",target:"a1",value:1}},P=function(){return{source:"b1",target:"c",value:2}},G=(0,f.uw)({overviewDemoComponent:(()=>{class n{constructor(t,c){this._cdr=t,this.themeSelector=c,this.themes=(0,d.RC)(),this.config={xAxis:{show:!1},yAxis:{show:!1},grid:{borderColor:"transparent"},color:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],tooltip:{trigger:"item",triggerOn:"mousemove"},animation:!1,series:[{type:"sankey",right:40,left:40,focusNodeAdjacency:"allEdges",data:[{name:"a"},{name:"b"},{name:"a1"},{name:"b1"},{name:"c"},{name:"e"}],links:[{source:"a",target:"a1",value:5},{source:"e",target:"b",value:3},{source:"a",target:"b1",value:3},{source:"b1",target:"a1",value:1},{source:"b1",target:"c",value:2},{source:"b",target:"c",value:1}],label:{position:"top"},lineStyle:{normal:{color:"source",curveness:.5}}}]}}ngOnInit(){var t=this;return(0,A.Z)(function*(){t.selectedTheme=t.themeSelector.selected,t._cdr.markForCheck()})()}selectChartTheme(t){this.themeSelector.select(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO),e.Y36(M.n))},n.\u0275cmp=e.Xpm({type:n,selectors:[["types-sankey"]],decls:11,vars:39,consts:[["layout","row","layout-align","start center"],["hide-xs","",1,"mat-subheading-2","pad-left","pad-right","push-bottom-none"],["floatLabel","never"],[3,"value","valueChange"],[3,"value",4,"ngFor","ngForOf"],[3,"themeName"],["td-sankey","",3,"focusNodeAdjacency","right","left","data","links"],[3,"trigger"],["tdTooltipFormatter",""],[3,"value"],[4,"ngIf"],[1,"mat-caption","pad-left-sm"],[1,"mat-caption"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._uU(2," Chart Theme: "),e.qZA(),e.TgZ(3,"mat-form-field",2),e.TgZ(4,"mat-select",3),e.NdJ("valueChange",function(m){return c.selectedTheme=m})("valueChange",function(m){return c.selectChartTheme(m)}),e.YNc(5,J,2,2,"mat-option",4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"td-chart",5),e.ALo(7,"async"),e.TgZ(8,"td-chart-series",6),e.TgZ(9,"td-chart-tooltip",7),e.YNc(10,U,1,1,"ng-template",8),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("value",c.selectedTheme),e.xp6(1),e.Q6J("ngForOf",c.themes),e.xp6(1),e.Udp("height",300,"px"),e.Q6J("themeName",e.lcZ(7,11,c.themeSelector.selected$)),e.xp6(2),e.Q6J("focusNodeAdjacency","allEdges")("right",40)("left",40)("data",e.HTZ(19,T,e.DdM(13,j),e.DdM(14,O),e.DdM(15,B),e.DdM(16,Y),e.DdM(17,b),e.DdM(18,E)))("links",e.HTZ(32,T,e.DdM(26,I),e.DdM(27,$),e.DdM(28,H),e.DdM(29,L),e.DdM(30,z),e.DdM(31,P))),e.xp6(1),e.Q6J("trigger","item"))},directives:[S.KE,l.gD,r.sg,x.ey,D.L,N.x,y.HN,y.dA,r.O5,i.Hw],pipes:[r.Ov],styles:["[_nghost-%COMP%]{width:100%}"],changeDetection:0}),n})(),id:"sankey"});let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[],imports:[[r.ez,l.LD,i.Ps,d.MX,g.Xi,s.NF,h.q,C.m,p.Bz.forChild(G)]]}),n})()},9782:(Z,u,a)=>{a.d(u,{A0:()=>d});var r=a(69808),p=a(63874),i=(a(31498),a(5e3));let d=(()=>{class s{}return s.\u0275fac=function(f){return new(f||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[[r.ez,p.Ps]]}),s})()}}]);