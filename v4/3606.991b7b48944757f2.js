"use strict";var ht=Object.defineProperty,vt=(D,k,b)=>k in D?ht(D,k,{enumerable:!0,configurable:!0,writable:!0,value:b}):D[k]=b,E=(D,k,b)=>(vt(D,"symbol"!=typeof k?k+"":k,b),b);(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[3606],{23606:(D,k,b)=>{b.r(k),b.d(k,{CompletionAdapter:()=>Le,DefinitionAdapter:()=>ot,DiagnosticsAdapter:()=>Ze,DocumentColorAdapter:()=>dt,DocumentFormattingEditProvider:()=>oe,DocumentHighlightAdapter:()=>re,DocumentLinkAdapter:()=>ae,DocumentRangeFormattingEditProvider:()=>se,DocumentSymbolAdapter:()=>ie,FoldingRangeAdapter:()=>ue,HoverAdapter:()=>te,ReferenceAdapter:()=>st,RenameAdapter:()=>ne,SelectionRangeAdapter:()=>ce,WorkerManager:()=>G,fromPosition:()=>y,fromRange:()=>ee,setupMode:()=>lt,setupMode1:()=>ft,toRange:()=>_,toTextEdit:()=>F});var ze=b(68349),Xe=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyNames,Qe=Object.prototype.hasOwnProperty,c={};((t,n,i,r)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let e of $e(n))!Qe.call(t,e)&&"default"!==e&&Xe(t,e,{get:()=>n[e],enumerable:!(r=Be(n,e))||r.enumerable})})(c,ze);var C,t,p,J,de,Y,ge,fe,G=class{constructor(t){E(this,"_defaults"),E(this,"_idleCheckInterval"),E(this,"_lastUsedTime"),E(this,"_configChangeListener"),E(this,"_worker"),E(this,"_client"),this._defaults=t,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/html/htmlWorker",createData:{languageSettings:this._defaults.options,languageId:this._defaults.languageId},label:this._defaults.languageId}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...t){let n;return this._getClient().then(i=>{n=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(t)}).then(i=>n)}},j=(()=>{return(t=j||(j={})).MIN_VALUE=0,t.MAX_VALUE=2147483647,j;var t})();(t=C||(C={})).create=function n(r,e){return r===Number.MAX_VALUE&&(r=j.MAX_VALUE),e===Number.MAX_VALUE&&(e=j.MAX_VALUE),{line:r,character:e}},t.is=function i(r){var e=r;return s.objectLiteral(e)&&s.uinteger(e.line)&&s.uinteger(e.character)},function(t){t.create=function n(r,e,a,o){if(s.uinteger(r)&&s.uinteger(e)&&s.uinteger(a)&&s.uinteger(o))return{start:C.create(r,e),end:C.create(a,o)};if(C.is(r)&&C.is(e))return{start:r,end:e};throw new Error("Range#create called with invalid arguments["+r+", "+e+", "+a+", "+o+"]")},t.is=function i(r){var e=r;return s.objectLiteral(e)&&C.is(e.start)&&C.is(e.end)}}(p||(p={})),function(t){t.create=function n(r,e){return{uri:r,range:e}},t.is=function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.string(e.uri)||s.undefined(e.uri))}}(J||(J={})),function(t){t.create=function n(r,e,a,o){return{targetUri:r,targetRange:e,targetSelectionRange:a,originSelectionRange:o}},t.is=function i(r){var e=r;return s.defined(e)&&p.is(e.targetRange)&&s.string(e.targetUri)&&(p.is(e.targetSelectionRange)||s.undefined(e.targetSelectionRange))&&(p.is(e.originSelectionRange)||s.undefined(e.originSelectionRange))}}(de||(de={})),function(t){t.create=function n(r,e,a,o){return{red:r,green:e,blue:a,alpha:o}},t.is=function i(r){var e=r;return s.numberRange(e.red,0,1)&&s.numberRange(e.green,0,1)&&s.numberRange(e.blue,0,1)&&s.numberRange(e.alpha,0,1)}}(Y||(Y={})),function(t){t.create=function n(r,e){return{range:r,color:e}},t.is=function i(r){var e=r;return p.is(e.range)&&Y.is(e.color)}}(ge||(ge={})),function(t){t.create=function n(r,e,a){return{label:r,textEdit:e,additionalTextEdits:a}},t.is=function i(r){var e=r;return s.string(e.label)&&(s.undefined(e.textEdit)||x.is(e))&&(s.undefined(e.additionalTextEdits)||s.typedArray(e.additionalTextEdits,x.is))}}(fe||(fe={}));var le,Z,P=(()=>(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"}(P||(P={})),P))();!function(t){t.create=function n(r,e,a,o,u){var f={startLine:r,endLine:e};return s.defined(a)&&(f.startCharacter=a),s.defined(o)&&(f.endCharacter=o),s.defined(u)&&(f.kind=u),f},t.is=function i(r){var e=r;return s.uinteger(e.startLine)&&s.uinteger(e.startLine)&&(s.undefined(e.startCharacter)||s.uinteger(e.startCharacter))&&(s.undefined(e.endCharacter)||s.uinteger(e.endCharacter))&&(s.undefined(e.kind)||s.string(e.kind))}}(le||(le={})),function(t){t.create=function n(r,e){return{location:r,message:e}},t.is=function i(r){var e=r;return s.defined(e)&&J.is(e.location)&&s.string(e.message)}}(Z||(Z={}));var he,U,N,x,R,m,I,V,W,H,O,q,T=(()=>(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4}(T||(T={})),T))();!function(t){t.is=function n(i){return null!=i&&s.string(i.href)}}(he||(he={})),function(t){t.create=function n(r,e,a,o,u,f){var d={range:r,message:e};return s.defined(a)&&(d.severity=a),s.defined(o)&&(d.code=o),s.defined(u)&&(d.source=u),s.defined(f)&&(d.relatedInformation=f),d},t.is=function i(r){var e,a=r;return s.defined(a)&&p.is(a.range)&&s.string(a.message)&&(s.number(a.severity)||s.undefined(a.severity))&&(s.integer(a.code)||s.string(a.code)||s.undefined(a.code))&&(s.undefined(a.codeDescription)||s.string(null===(e=a.codeDescription)||void 0===e?void 0:e.href))&&(s.string(a.source)||s.undefined(a.source))&&(s.undefined(a.relatedInformation)||s.typedArray(a.relatedInformation,Z.is))}}(U||(U={})),function(t){t.create=function n(r,e){for(var a=[],o=2;o<arguments.length;o++)a[o-2]=arguments[o];var u={title:r,command:e};return s.defined(a)&&a.length>0&&(u.arguments=a),u},t.is=function i(r){var e=r;return s.defined(e)&&s.string(e.title)&&s.string(e.command)}}(N||(N={})),function(t){t.replace=function n(a,o){return{range:a,newText:o}},t.insert=function i(a,o){return{range:{start:a,end:a},newText:o}},t.del=function r(a){return{range:a,newText:""}},t.is=function e(a){var o=a;return s.objectLiteral(o)&&s.string(o.newText)&&p.is(o.range)}}(x||(x={})),function(t){t.create=function n(r,e,a){var o={label:r};return void 0!==e&&(o.needsConfirmation=e),void 0!==a&&(o.description=a),o},t.is=function i(r){var e=r;return void 0!==e&&s.objectLiteral(e)&&s.string(e.label)&&(s.boolean(e.needsConfirmation)||void 0===e.needsConfirmation)&&(s.string(e.description)||void 0===e.description)}}(R||(R={})),function(t){t.is=function n(i){return"string"==typeof i}}(m||(m={})),function(t){t.replace=function n(a,o,u){return{range:a,newText:o,annotationId:u}},t.insert=function i(a,o,u){return{range:{start:a,end:a},newText:o,annotationId:u}},t.del=function r(a,o){return{range:a,newText:"",annotationId:o}},t.is=function e(a){var o=a;return x.is(o)&&(R.is(o.annotationId)||m.is(o.annotationId))}}(I||(I={})),function(t){t.create=function n(r,e){return{textDocument:r,edits:e}},t.is=function i(r){var e=r;return s.defined(e)&&X.is(e.textDocument)&&Array.isArray(e.edits)}}(V||(V={})),function(t){t.create=function n(r,e,a){var o={kind:"create",uri:r};return void 0!==e&&(void 0!==e.overwrite||void 0!==e.ignoreIfExists)&&(o.options=e),void 0!==a&&(o.annotationId=a),o},t.is=function i(r){var e=r;return e&&"create"===e.kind&&s.string(e.uri)&&(void 0===e.options||(void 0===e.options.overwrite||s.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||s.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||m.is(e.annotationId))}}(W||(W={})),function(t){t.create=function n(r,e,a,o){var u={kind:"rename",oldUri:r,newUri:e};return void 0!==a&&(void 0!==a.overwrite||void 0!==a.ignoreIfExists)&&(u.options=a),void 0!==o&&(u.annotationId=o),u},t.is=function i(r){var e=r;return e&&"rename"===e.kind&&s.string(e.oldUri)&&s.string(e.newUri)&&(void 0===e.options||(void 0===e.options.overwrite||s.boolean(e.options.overwrite))&&(void 0===e.options.ignoreIfExists||s.boolean(e.options.ignoreIfExists)))&&(void 0===e.annotationId||m.is(e.annotationId))}}(H||(H={})),function(t){t.create=function n(r,e,a){var o={kind:"delete",uri:r};return void 0!==e&&(void 0!==e.recursive||void 0!==e.ignoreIfNotExists)&&(o.options=e),void 0!==a&&(o.annotationId=a),o},t.is=function i(r){var e=r;return e&&"delete"===e.kind&&s.string(e.uri)&&(void 0===e.options||(void 0===e.options.recursive||s.boolean(e.options.recursive))&&(void 0===e.options.ignoreIfNotExists||s.boolean(e.options.ignoreIfNotExists)))&&(void 0===e.annotationId||m.is(e.annotationId))}}(O||(O={})),function(t){t.is=function n(i){return i&&(void 0!==i.changes||void 0!==i.documentChanges)&&(void 0===i.documentChanges||i.documentChanges.every(function(e){return s.string(e.kind)?W.is(e)||H.is(e)||O.is(e):V.is(e)}))}}(q||(q={}));var pe,me,X,_e,z=function(){function t(n,i){this.edits=n,this.changeAnnotations=i}return t.prototype.insert=function(n,i,r){var e,a;if(void 0===r?e=x.insert(n,i):m.is(r)?(a=r,e=I.insert(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),e=I.insert(n,i,a)),this.edits.push(e),void 0!==a)return a},t.prototype.replace=function(n,i,r){var e,a;if(void 0===r?e=x.replace(n,i):m.is(r)?(a=r,e=I.replace(n,i,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),e=I.replace(n,i,a)),this.edits.push(e),void 0!==a)return a},t.prototype.delete=function(n,i){var r,e;if(void 0===i?r=x.del(n):m.is(i)?(e=i,r=I.del(n,i)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(i),r=I.del(n,e)),this.edits.push(r),void 0!==e)return e},t.prototype.add=function(n){this.edits.push(n)},t.prototype.all=function(){return this.edits},t.prototype.clear=function(){this.edits.splice(0,this.edits.length)},t.prototype.assertChangeAnnotations=function(n){if(void 0===n)throw new Error("Text edit change is not configured to manage change annotations.")},t}(),ve=function(){function t(n){this._annotations=void 0===n?Object.create(null):n,this._counter=0,this._size=0}return t.prototype.all=function(){return this._annotations},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),t.prototype.manage=function(n,i){var r;if(m.is(n)?r=n:(r=this.nextId(),i=n),void 0!==this._annotations[r])throw new Error("Id "+r+" is already in use.");if(void 0===i)throw new Error("No annotation provided for id "+r);return this._annotations[r]=i,this._size++,r},t.prototype.nextId=function(){return this._counter++,this._counter.toString()},t}();!function(){function t(n){var i=this;this._textEditChanges=Object.create(null),void 0!==n?(this._workspaceEdit=n,n.documentChanges?(this._changeAnnotations=new ve(n.changeAnnotations),n.changeAnnotations=this._changeAnnotations.all(),n.documentChanges.forEach(function(r){if(V.is(r)){var e=new z(r.edits,i._changeAnnotations);i._textEditChanges[r.textDocument.uri]=e}})):n.changes&&Object.keys(n.changes).forEach(function(r){var e=new z(n.changes[r]);i._textEditChanges[r]=e})):this._workspaceEdit={}}Object.defineProperty(t.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(this._workspaceEdit.changeAnnotations=0===this._changeAnnotations.size?void 0:this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),t.prototype.getTextEditChange=function(n){if(X.is(n)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i={uri:n.uri,version:n.version};return(r=this._textEditChanges[i.uri])||(this._workspaceEdit.documentChanges.push({textDocument:i,edits:e=[]}),r=new z(e,this._changeAnnotations),this._textEditChanges[i.uri]=r),r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r,e;return(r=this._textEditChanges[n])||(this._workspaceEdit.changes[n]=e=[],r=new z(e),this._textEditChanges[n]=r),r},t.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new ve,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},t.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},t.prototype.createFile=function(n,i,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,a,o;if(R.is(i)||m.is(i)?e=i:r=i,void 0===e?a=W.create(n,r):(o=m.is(e)?e:this._changeAnnotations.manage(e),a=W.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),void 0!==o)return o},t.prototype.renameFile=function(n,i,r,e){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var a,o,u;if(R.is(r)||m.is(r)?a=r:e=r,void 0===a?o=H.create(n,i,e):(u=m.is(a)?a:this._changeAnnotations.manage(a),o=H.create(n,i,e,u)),this._workspaceEdit.documentChanges.push(o),void 0!==u)return u},t.prototype.deleteFile=function(n,i,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var e,a,o;if(R.is(i)||m.is(i)?e=i:r=i,void 0===e?a=O.create(n,r):(o=m.is(e)?e:this._changeAnnotations.manage(e),a=O.create(n,r,o)),this._workspaceEdit.documentChanges.push(a),void 0!==o)return o}}(),function(t){t.create=function n(r){return{uri:r}},t.is=function i(r){var e=r;return s.defined(e)&&s.string(e.uri)}}(pe||(pe={})),function(t){t.create=function n(r,e){return{uri:r,version:e}},t.is=function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&s.integer(e.version)}}(me||(me={})),function(t){t.create=function n(r,e){return{uri:r,version:e}},t.is=function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&(null===e.version||s.integer(e.version))}}(X||(X={})),function(t){t.create=function n(r,e,a,o){return{uri:r,languageId:e,version:a,text:o}},t.is=function i(r){var e=r;return s.defined(e)&&s.string(e.uri)&&s.string(e.languageId)&&s.integer(e.version)&&s.string(e.text)}}(_e||(_e={}));var K,M=(()=>(function(t){t.PlainText="plaintext",t.Markdown="markdown"}(M||(M={})),M))();!function(t){t.is=function n(i){return i===t.PlainText||i===t.Markdown}}(M||(M={})),function(t){t.is=function n(i){var r=i;return s.objectLiteral(i)&&M.is(r.kind)&&s.string(r.value)}}(K||(K={}));var we,ke,Ce,$,be,Ae,Ee,l=(()=>(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25}(l||(l={})),l))(),B=(()=>(function(t){t.PlainText=1,t.Snippet=2}(B||(B={})),B))();!function(t){t.create=function n(r,e,a){return{newText:r,insert:e,replace:a}},t.is=function i(r){var e=r;return e&&s.string(e.newText)&&p.is(e.insert)&&p.is(e.replace)}}(we||(we={})),function(t){t.create=function n(i){return{label:i}}}(ke||(ke={})),function(t){t.create=function n(i,r){return{items:i||[],isIncomplete:!!r}}}(Ce||(Ce={})),function(t){t.fromPlainText=function n(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},t.is=function i(r){var e=r;return s.string(e)||s.objectLiteral(e)&&s.string(e.language)&&s.string(e.value)}}($||($={})),function(t){t.is=function n(i){var r=i;return!!r&&s.objectLiteral(r)&&(K.is(r.contents)||$.is(r.contents)||s.typedArray(r.contents,$.is))&&(void 0===i.range||p.is(i.range))}}(be||(be={})),function(t){t.create=function n(i,r){return r?{label:i,documentation:r}:{label:i}}}(Ae||(Ae={})),function(t){t.create=function n(i,r){for(var e=[],a=2;a<arguments.length;a++)e[a-2]=arguments[a];var o={label:i};return s.defined(r)&&(o.documentation=r),o.parameters=s.defined(e)?e:[],o}}(Ee||(Ee={}));var xe,S=(()=>(function(t){t.Text=1,t.Read=2,t.Write=3}(S||(S={})),S))();!function(t){t.create=function n(i,r){var e={range:i};return s.number(r)&&(e.kind=r),e}}(xe||(xe={}));var Ie,ye,Te,De,Pe,Re,Me,Se,Fe,h=(()=>(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26}(h||(h={})),h))();!function(t){t.create=function n(i,r,e,a,o){var u={name:i,kind:r,location:{uri:a,range:e}};return o&&(u.containerName=o),u}}(Ie||(Ie={})),function(t){t.create=function n(r,e,a,o,u,f){var d={name:r,detail:e,kind:a,range:o,selectionRange:u};return void 0!==f&&(d.children=f),d},t.is=function i(r){var e=r;return e&&s.string(e.name)&&s.number(e.kind)&&p.is(e.range)&&p.is(e.selectionRange)&&(void 0===e.detail||s.string(e.detail))&&(void 0===e.deprecated||s.boolean(e.deprecated))&&(void 0===e.children||Array.isArray(e.children))&&(void 0===e.tags||Array.isArray(e.tags))}}(ye||(ye={})),function(t){t.create=function n(r,e){var a={diagnostics:r};return null!=e&&(a.only=e),a},t.is=function i(r){var e=r;return s.defined(e)&&s.typedArray(e.diagnostics,U.is)&&(void 0===e.only||s.typedArray(e.only,s.string))}}(Te||(Te={})),function(t){t.create=function n(r,e,a){var o={title:r},u=!0;return"string"==typeof e?(u=!1,o.kind=e):N.is(e)?o.command=e:o.edit=e,u&&void 0!==a&&(o.kind=a),o},t.is=function i(r){var e=r;return e&&s.string(e.title)&&(void 0===e.diagnostics||s.typedArray(e.diagnostics,U.is))&&(void 0===e.kind||s.string(e.kind))&&(void 0!==e.edit||void 0!==e.command)&&(void 0===e.command||N.is(e.command))&&(void 0===e.isPreferred||s.boolean(e.isPreferred))&&(void 0===e.edit||q.is(e.edit))}}(De||(De={})),function(t){t.create=function n(r,e){var a={range:r};return s.defined(e)&&(a.data=e),a},t.is=function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.undefined(e.command)||N.is(e.command))}}(Pe||(Pe={})),function(t){t.create=function n(r,e){return{tabSize:r,insertSpaces:e}},t.is=function i(r){var e=r;return s.defined(e)&&s.uinteger(e.tabSize)&&s.boolean(e.insertSpaces)}}(Re||(Re={})),function(t){t.create=function n(r,e,a){return{range:r,target:e,data:a}},t.is=function i(r){var e=r;return s.defined(e)&&p.is(e.range)&&(s.undefined(e.target)||s.string(e.target))}}(Me||(Me={})),function(t){t.create=function n(r,e){return{range:r,parent:e}},t.is=function i(r){var e=r;return void 0!==e&&p.is(e.range)&&(void 0===e.parent||t.is(e.parent))}}(Se||(Se={})),function(t){function e(a,o){if(a.length<=1)return a;var u=a.length/2|0,f=a.slice(0,u),d=a.slice(u);e(f,o),e(d,o);for(var v=0,w=0,A=0;v<f.length&&w<d.length;){var g=o(f[v],d[w]);a[A++]=g<=0?f[v++]:d[w++]}for(;v<f.length;)a[A++]=f[v++];for(;w<d.length;)a[A++]=d[w++];return a}t.create=function n(a,o,u,f){return new Ye(a,o,u,f)},t.is=function i(a){var o=a;return!!(s.defined(o)&&s.string(o.uri)&&(s.undefined(o.languageId)||s.string(o.languageId))&&s.uinteger(o.lineCount)&&s.func(o.getText)&&s.func(o.positionAt)&&s.func(o.offsetAt))},t.applyEdits=function r(a,o){for(var u=a.getText(),f=e(o,function(L,Q){var Ve=L.range.start.line-Q.range.start.line;return 0===Ve?L.range.start.character-Q.range.start.character:Ve}),d=u.length,v=f.length-1;v>=0;v--){var w=f[v],A=a.offsetAt(w.range.start),g=a.offsetAt(w.range.end);if(!(g<=d))throw new Error("Overlapping edit");u=u.substring(0,A)+w.newText+u.substring(g,u.length),d=A}return u}}(Fe||(Fe={}));var s,Ye=function(){function t(n,i,r,e){this._uri=n,this._languageId=i,this._version=r,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),t.prototype.getText=function(n){if(n){var i=this.offsetAt(n.start),r=this.offsetAt(n.end);return this._content.substring(i,r)}return this._content},t.prototype.update=function(n,i){this._content=n.text,this._version=i,this._lineOffsets=void 0},t.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var n=[],i=this._content,r=!0,e=0;e<i.length;e++){r&&(n.push(e),r=!1);var a=i.charAt(e);r="\r"===a||"\n"===a,"\r"===a&&e+1<i.length&&"\n"===i.charAt(e+1)&&e++}r&&i.length>0&&n.push(i.length),this._lineOffsets=n}return this._lineOffsets},t.prototype.positionAt=function(n){n=Math.max(Math.min(n,this._content.length),0);var i=this.getLineOffsets(),r=0,e=i.length;if(0===e)return C.create(0,n);for(;r<e;){var a=Math.floor((r+e)/2);i[a]>n?e=a:r=a+1}var o=r-1;return C.create(o,n-i[o])},t.prototype.offsetAt=function(n){var i=this.getLineOffsets();if(n.line>=i.length)return this._content.length;if(n.line<0)return 0;var r=i[n.line];return Math.max(Math.min(r+n.character,n.line+1<i.length?i[n.line+1]:this._content.length),r)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),t}();!function(t){var n=Object.prototype.toString;t.defined=function i(g){return void 0!==g},t.undefined=function r(g){return void 0===g},t.boolean=function e(g){return!0===g||!1===g},t.string=function a(g){return"[object String]"===n.call(g)},t.number=function o(g){return"[object Number]"===n.call(g)},t.numberRange=function u(g,L,Q){return"[object Number]"===n.call(g)&&L<=g&&g<=Q},t.integer=function f(g){return"[object Number]"===n.call(g)&&-2147483648<=g&&g<=2147483647},t.uinteger=function d(g){return"[object Number]"===n.call(g)&&0<=g&&g<=2147483647},t.func=function v(g){return"[object Function]"===n.call(g)},t.objectLiteral=function w(g){return null!==g&&"object"==typeof g},t.typedArray=function A(g,L){return Array.isArray(g)&&g.every(L)}}(s||(s={}));var Ze=class{constructor(t,n,i){E(this,"_disposables",[]),E(this,"_listener",Object.create(null)),this._languageId=t,this._worker=n;const r=a=>{let u,o=a.getLanguageId();o===this._languageId&&(this._listener[a.uri.toString()]=a.onDidChangeContent(()=>{window.clearTimeout(u),u=window.setTimeout(()=>this._doValidate(a.uri,o),500)}),this._doValidate(a.uri,o))},e=a=>{c.editor.setModelMarkers(a,this._languageId,[]);let o=a.uri.toString(),u=this._listener[o];u&&(u.dispose(),delete this._listener[o])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(e)),this._disposables.push(c.editor.onDidChangeModelLanguage(a=>{e(a.model),r(a.model)})),this._disposables.push(i(a=>{c.editor.getModels().forEach(o=>{o.getLanguageId()===this._languageId&&(e(o),r(o))})})),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(e);for(let a in this._listener)this._listener[a].dispose()}}),c.editor.getModels().forEach(r)}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables.length=0}_doValidate(t,n){this._worker(t).then(i=>i.doValidation(t.toString())).then(i=>{const r=i.map(a=>function Ke(t,n){let i="number"==typeof n.code?String(n.code):n.code;return{severity:qe(n.severity),startLineNumber:n.range.start.line+1,startColumn:n.range.start.character+1,endLineNumber:n.range.end.line+1,endColumn:n.range.end.character+1,message:n.message,code:i,source:n.source}}(0,a));let e=c.editor.getModel(t);e&&e.getLanguageId()===n&&c.editor.setModelMarkers(e,n,r)}).then(void 0,i=>{console.error(i)})}};function qe(t){switch(t){case T.Error:return c.MarkerSeverity.Error;case T.Warning:return c.MarkerSeverity.Warning;case T.Information:return c.MarkerSeverity.Info;case T.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}var Le=class{constructor(t,n){this._worker=t,this._triggerCharacters=n}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.doComplete(e.toString(),y(n))).then(a=>{if(!a)return;const o=t.getWordUntilPosition(n),u=new c.Range(n.lineNumber,o.startColumn,n.lineNumber,o.endColumn),f=a.items.map(d=>{const v={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:rt(d.command),range:u,kind:tt(d.kind)};return d.textEdit&&(v.range=function et(t){return void 0!==t.insert&&void 0!==t.replace}(d.textEdit)?{insert:_(d.textEdit.insert),replace:_(d.textEdit.replace)}:_(d.textEdit.range),v.insertText=d.textEdit.newText),d.additionalTextEdits&&(v.additionalTextEdits=d.additionalTextEdits.map(F)),d.insertTextFormat===B.Snippet&&(v.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),v});return{isIncomplete:a.isIncomplete,suggestions:f}})}};function y(t){if(t)return{character:t.column-1,line:t.lineNumber-1}}function ee(t){if(t)return{start:{line:t.startLineNumber-1,character:t.startColumn-1},end:{line:t.endLineNumber-1,character:t.endColumn-1}}}function _(t){if(t)return new c.Range(t.start.line+1,t.start.character+1,t.end.line+1,t.end.character+1)}function tt(t){const n=c.languages.CompletionItemKind;switch(t){case l.Text:return n.Text;case l.Method:return n.Method;case l.Function:return n.Function;case l.Constructor:return n.Constructor;case l.Field:return n.Field;case l.Variable:return n.Variable;case l.Class:return n.Class;case l.Interface:return n.Interface;case l.Module:return n.Module;case l.Property:return n.Property;case l.Unit:return n.Unit;case l.Value:return n.Value;case l.Enum:return n.Enum;case l.Keyword:return n.Keyword;case l.Snippet:return n.Snippet;case l.Color:return n.Color;case l.File:return n.File;case l.Reference:return n.Reference}return n.Property}function F(t){if(t)return{range:_(t.range),text:t.newText}}function rt(t){return t&&"editor.action.triggerSuggest"===t.command?{id:t.command,title:t.title,arguments:t.arguments}:void 0}var te=class{constructor(t){this._worker=t}provideHover(t,n,i){let r=t.uri;return this._worker(r).then(e=>e.doHover(r.toString(),y(n))).then(e=>{if(e)return{range:_(e.range),contents:it(e.contents)}})}};function je(t){return"string"==typeof t?{value:t}:function nt(t){return t&&"object"==typeof t&&"string"==typeof t.kind}(t)?"plaintext"===t.kind?{value:t.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:t.value}:{value:"```"+t.language+"\n"+t.value+"\n```\n"}}function it(t){if(t)return Array.isArray(t)?t.map(je):[je(t)]}var re=class{constructor(t){this._worker=t}provideDocumentHighlights(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.findDocumentHighlights(r.toString(),y(n))).then(e=>{if(e)return e.map(a=>({range:_(a.range),kind:at(a.kind)}))})}};function at(t){switch(t){case S.Read:return c.languages.DocumentHighlightKind.Read;case S.Write:return c.languages.DocumentHighlightKind.Write;case S.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var ot=class{constructor(t){this._worker=t}provideDefinition(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.findDefinition(r.toString(),y(n))).then(e=>{if(e)return[Ne(e)]})}};function Ne(t){return{uri:c.Uri.parse(t.uri),range:_(t.range)}}var st=class{constructor(t){this._worker=t}provideReferences(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.findReferences(e.toString(),y(n))).then(a=>{if(a)return a.map(Ne)})}},ne=class{constructor(t){this._worker=t}provideRenameEdits(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.doRename(e.toString(),y(n),i)).then(a=>function ut(t){if(!t||!t.changes)return;let n=[];for(let i in t.changes){const r=c.Uri.parse(i);for(let e of t.changes[i])n.push({resource:r,edit:{range:_(e.range),text:e.newText}})}return{edits:n}}(a))}},ie=class{constructor(t){this._worker=t}provideDocumentSymbols(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentSymbols(i.toString())).then(r=>{if(r)return r.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:ct(e.kind),range:_(e.location.range),selectionRange:_(e.location.range),tags:[]}))})}};function ct(t){let n=c.languages.SymbolKind;switch(t){case h.File:return n.Array;case h.Module:return n.Module;case h.Namespace:return n.Namespace;case h.Package:return n.Package;case h.Class:return n.Class;case h.Method:return n.Method;case h.Property:return n.Property;case h.Field:return n.Field;case h.Constructor:return n.Constructor;case h.Enum:return n.Enum;case h.Interface:return n.Interface;case h.Function:return n.Function;case h.Variable:return n.Variable;case h.Constant:return n.Constant;case h.String:return n.String;case h.Number:return n.Number;case h.Boolean:return n.Boolean;case h.Array:return n.Array}return n.Function}var ae=class{constructor(t){this._worker=t}provideLinks(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentLinks(i.toString())).then(r=>{if(r)return{links:r.map(e=>({range:_(e.range),url:e.target}))}})}},oe=class{constructor(t){this._worker=t}provideDocumentFormattingEdits(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.format(r.toString(),null,We(n)).then(a=>{if(a&&0!==a.length)return a.map(F)}))}},se=class{constructor(t){this._worker=t}provideDocumentRangeFormattingEdits(t,n,i,r){const e=t.uri;return this._worker(e).then(a=>a.format(e.toString(),ee(n),We(i)).then(o=>{if(o&&0!==o.length)return o.map(F)}))}};function We(t){return{tabSize:t.tabSize,insertSpaces:t.insertSpaces}}var dt=class{constructor(t){this._worker=t}provideDocumentColors(t,n){const i=t.uri;return this._worker(i).then(r=>r.findDocumentColors(i.toString())).then(r=>{if(r)return r.map(e=>({color:e.color,range:_(e.range)}))})}provideColorPresentations(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getColorPresentations(r.toString(),n.color,ee(n.range))).then(e=>{if(e)return e.map(a=>{let o={label:a.label};return a.textEdit&&(o.textEdit=F(a.textEdit)),a.additionalTextEdits&&(o.additionalTextEdits=a.additionalTextEdits.map(F)),o})})}},ue=class{constructor(t){this._worker=t}provideFoldingRanges(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getFoldingRanges(r.toString(),n)).then(e=>{if(e)return e.map(a=>{const o={start:a.startLine+1,end:a.endLine+1};return void 0!==a.kind&&(o.kind=function gt(t){switch(t){case P.Comment:return c.languages.FoldingRangeKind.Comment;case P.Imports:return c.languages.FoldingRangeKind.Imports;case P.Region:return c.languages.FoldingRangeKind.Region}}(a.kind)),o})})}},ce=class{constructor(t){this._worker=t}provideSelectionRanges(t,n,i){const r=t.uri;return this._worker(r).then(e=>e.getSelectionRanges(r.toString(),n.map(y))).then(e=>{if(e)return e.map(a=>{const o=[];for(;a;)o.push({range:_(a.range)}),a=a.parent;return o})})}},He=class extends Le{constructor(t){super(t,[".",":","<",'"',"=","/"])}};function ft(t){const n=new G(t),i=(...e)=>n.getLanguageServiceWorker(...e);let r=t.languageId;c.languages.registerCompletionItemProvider(r,new He(i)),c.languages.registerHoverProvider(r,new te(i)),c.languages.registerDocumentHighlightProvider(r,new re(i)),c.languages.registerLinkProvider(r,new ae(i)),c.languages.registerFoldingRangeProvider(r,new ue(i)),c.languages.registerDocumentSymbolProvider(r,new ie(i)),c.languages.registerSelectionRangeProvider(r,new ce(i)),c.languages.registerRenameProvider(r,new ne(i)),"html"===r&&(c.languages.registerDocumentFormattingEditProvider(r,new oe(i)),c.languages.registerDocumentRangeFormattingEditProvider(r,new se(i)))}function lt(t){const n=[],i=[],r=new G(t);n.push(r);const e=(...o)=>r.getLanguageServiceWorker(...o);return function a(){const{languageId:o,modeConfiguration:u}=t;Ue(i),u.completionItems&&i.push(c.languages.registerCompletionItemProvider(o,new He(e))),u.hovers&&i.push(c.languages.registerHoverProvider(o,new te(e))),u.documentHighlights&&i.push(c.languages.registerDocumentHighlightProvider(o,new re(e))),u.links&&i.push(c.languages.registerLinkProvider(o,new ae(e))),u.documentSymbols&&i.push(c.languages.registerDocumentSymbolProvider(o,new ie(e))),u.rename&&i.push(c.languages.registerRenameProvider(o,new ne(e))),u.foldingRanges&&i.push(c.languages.registerFoldingRangeProvider(o,new ue(e))),u.selectionRanges&&i.push(c.languages.registerSelectionRangeProvider(o,new ce(e))),u.documentFormattingEdits&&i.push(c.languages.registerDocumentFormattingEditProvider(o,new oe(e))),u.documentRangeFormattingEdits&&i.push(c.languages.registerDocumentRangeFormattingEditProvider(o,new se(e)))}(),n.push(Oe(i)),Oe(n)}function Oe(t){return{dispose:()=>Ue(t)}}function Ue(t){for(;t.length;)t.pop().dispose()}}}]);