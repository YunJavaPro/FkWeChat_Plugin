function ip(c,_){for(var l=0;l<_.length;l++){const x=_[l];if(typeof x!="string"&&!Array.isArray(x)){for(const m in x)if(m!=="default"&&!(m in c)){const u=Object.getOwnPropertyDescriptor(x,m);u&&Object.defineProperty(c,m,u.get?u:{enumerable:!0,get:()=>x[m]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))x(m);new MutationObserver(m=>{for(const u of m)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&x(d)}).observe(document,{childList:!0,subtree:!0});function l(m){const u={};return m.integrity&&(u.integrity=m.integrity),m.referrerPolicy&&(u.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?u.credentials="include":m.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function x(m){if(m.ep)return;m.ep=!0;const u=l(m);fetch(m.href,u)}})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Pd(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var ro={exports:{}},ei={},io={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ud;function ap(){if(ud)return Ne;ud=1;var c=Symbol.for("react.element"),_=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),S=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,h={};function v(T,A,ce){this.props=T,this.context=A,this.refs=h,this.updater=ce||w}v.prototype.isReactComponent={},v.prototype.setState=function(T,A){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,A,"setState")},v.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function b(){}b.prototype=v.prototype;function M(T,A,ce){this.props=T,this.context=A,this.refs=h,this.updater=ce||w}var N=M.prototype=new b;N.constructor=M,I(N,v.prototype),N.isPureReactComponent=!0;var B=Array.isArray,F=Object.prototype.hasOwnProperty,$={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function le(T,A,ce){var ae,ne={},Ce=null,Oe=null;if(A!=null)for(ae in A.ref!==void 0&&(Oe=A.ref),A.key!==void 0&&(Ce=""+A.key),A)F.call(A,ae)&&!q.hasOwnProperty(ae)&&(ne[ae]=A[ae]);var ve=arguments.length-2;if(ve===1)ne.children=ce;else if(1<ve){for(var _e=Array(ve),je=0;je<ve;je++)_e[je]=arguments[je+2];ne.children=_e}if(T&&T.defaultProps)for(ae in ve=T.defaultProps,ve)ne[ae]===void 0&&(ne[ae]=ve[ae]);return{$$typeof:c,type:T,key:Ce,ref:Oe,props:ne,_owner:$.current}}function J(T,A){return{$$typeof:c,type:T.type,key:A,ref:T.ref,props:T.props,_owner:T._owner}}function de(T){return typeof T=="object"&&T!==null&&T.$$typeof===c}function be(T){var A={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ce){return A[ce]})}var P=/\/+/g;function K(T,A){return typeof T=="object"&&T!==null&&T.key!=null?be(""+T.key):A.toString(36)}function p(T,A,ce,ae,ne){var Ce=typeof T;(Ce==="undefined"||Ce==="boolean")&&(T=null);var Oe=!1;if(T===null)Oe=!0;else switch(Ce){case"string":case"number":Oe=!0;break;case"object":switch(T.$$typeof){case c:case _:Oe=!0}}if(Oe)return Oe=T,ne=ne(Oe),T=ae===""?"."+K(Oe,0):ae,B(ne)?(ce="",T!=null&&(ce=T.replace(P,"$&/")+"/"),p(ne,A,ce,"",function(je){return je})):ne!=null&&(de(ne)&&(ne=J(ne,ce+(!ne.key||Oe&&Oe.key===ne.key?"":(""+ne.key).replace(P,"$&/")+"/")+T)),A.push(ne)),1;if(Oe=0,ae=ae===""?".":ae+":",B(T))for(var ve=0;ve<T.length;ve++){Ce=T[ve];var _e=ae+K(Ce,ve);Oe+=p(Ce,A,ce,_e,ne)}else if(_e=k(T),typeof _e=="function")for(T=_e.call(T),ve=0;!(Ce=T.next()).done;)Ce=Ce.value,_e=ae+K(Ce,ve++),Oe+=p(Ce,A,ce,_e,ne);else if(Ce==="object")throw A=String(T),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Q(T,A,ce){if(T==null)return T;var ae=[],ne=0;return p(T,ae,"","",function(Ce){return A.call(ce,Ce,ne++)}),ae}function Te(T){if(T._status===-1){var A=T._result;A=A(),A.then(function(ce){(T._status===0||T._status===-1)&&(T._status=1,T._result=ce)},function(ce){(T._status===0||T._status===-1)&&(T._status=2,T._result=ce)}),T._status===-1&&(T._status=0,T._result=A)}if(T._status===1)return T._result.default;throw T._result}var Y={current:null},ee={transition:null},H={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:ee,ReactCurrentOwner:$};function X(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Q,forEach:function(T,A,ce){Q(T,function(){A.apply(this,arguments)},ce)},count:function(T){var A=0;return Q(T,function(){A++}),A},toArray:function(T){return Q(T,function(A){return A})||[]},only:function(T){if(!de(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ne.Component=v,Ne.Fragment=l,Ne.Profiler=m,Ne.PureComponent=M,Ne.StrictMode=x,Ne.Suspense=g,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,Ne.act=X,Ne.cloneElement=function(T,A,ce){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var ae=I({},T.props),ne=T.key,Ce=T.ref,Oe=T._owner;if(A!=null){if(A.ref!==void 0&&(Ce=A.ref,Oe=$.current),A.key!==void 0&&(ne=""+A.key),T.type&&T.type.defaultProps)var ve=T.type.defaultProps;for(_e in A)F.call(A,_e)&&!q.hasOwnProperty(_e)&&(ae[_e]=A[_e]===void 0&&ve!==void 0?ve[_e]:A[_e])}var _e=arguments.length-2;if(_e===1)ae.children=ce;else if(1<_e){ve=Array(_e);for(var je=0;je<_e;je++)ve[je]=arguments[je+2];ae.children=ve}return{$$typeof:c,type:T.type,key:ne,ref:Ce,props:ae,_owner:Oe}},Ne.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:u,_context:T},T.Consumer=T},Ne.createElement=le,Ne.createFactory=function(T){var A=le.bind(null,T);return A.type=T,A},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(T){return{$$typeof:s,render:T}},Ne.isValidElement=de,Ne.lazy=function(T){return{$$typeof:L,_payload:{_status:-1,_result:T},_init:Te}},Ne.memo=function(T,A){return{$$typeof:y,type:T,compare:A===void 0?null:A}},Ne.startTransition=function(T){var A=ee.transition;ee.transition={};try{T()}finally{ee.transition=A}},Ne.unstable_act=X,Ne.useCallback=function(T,A){return Y.current.useCallback(T,A)},Ne.useContext=function(T){return Y.current.useContext(T)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(T){return Y.current.useDeferredValue(T)},Ne.useEffect=function(T,A){return Y.current.useEffect(T,A)},Ne.useId=function(){return Y.current.useId()},Ne.useImperativeHandle=function(T,A,ce){return Y.current.useImperativeHandle(T,A,ce)},Ne.useInsertionEffect=function(T,A){return Y.current.useInsertionEffect(T,A)},Ne.useLayoutEffect=function(T,A){return Y.current.useLayoutEffect(T,A)},Ne.useMemo=function(T,A){return Y.current.useMemo(T,A)},Ne.useReducer=function(T,A,ce){return Y.current.useReducer(T,A,ce)},Ne.useRef=function(T){return Y.current.useRef(T)},Ne.useState=function(T){return Y.current.useState(T)},Ne.useSyncExternalStore=function(T,A,ce){return Y.current.useSyncExternalStore(T,A,ce)},Ne.useTransition=function(){return Y.current.useTransition()},Ne.version="18.3.1",Ne}var dd;function To(){return dd||(dd=1,io.exports=ap()),io.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cd;function lp(){if(cd)return ei;cd=1;var c=To(),_=Symbol.for("react.element"),l=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,m=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(s,g,y){var L,S={},k=null,w=null;y!==void 0&&(k=""+y),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(w=g.ref);for(L in g)x.call(g,L)&&!u.hasOwnProperty(L)&&(S[L]=g[L]);if(s&&s.defaultProps)for(L in g=s.defaultProps,g)S[L]===void 0&&(S[L]=g[L]);return{$$typeof:_,type:s,key:k,ref:w,props:S,_owner:m.current}}return ei.Fragment=l,ei.jsx=d,ei.jsxs=d,ei}var fd;function op(){return fd||(fd=1,ro.exports=lp()),ro.exports}var re=op(),he=To();const ni=Pd(he),sp=ip({__proto__:null,default:ni},[he]);var fa={},ao={exports:{}},Sn={},lo={exports:{}},oo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pd;function up(){return pd||(pd=1,(function(c){function _(ee,H){var X=ee.length;ee.push(H);e:for(;0<X;){var T=X-1>>>1,A=ee[T];if(0<m(A,H))ee[T]=H,ee[X]=A,X=T;else break e}}function l(ee){return ee.length===0?null:ee[0]}function x(ee){if(ee.length===0)return null;var H=ee[0],X=ee.pop();if(X!==H){ee[0]=X;e:for(var T=0,A=ee.length,ce=A>>>1;T<ce;){var ae=2*(T+1)-1,ne=ee[ae],Ce=ae+1,Oe=ee[Ce];if(0>m(ne,X))Ce<A&&0>m(Oe,ne)?(ee[T]=Oe,ee[Ce]=X,T=Ce):(ee[T]=ne,ee[ae]=X,T=ae);else if(Ce<A&&0>m(Oe,X))ee[T]=Oe,ee[Ce]=X,T=Ce;else break e}}return H}function m(ee,H){var X=ee.sortIndex-H.sortIndex;return X!==0?X:ee.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;c.unstable_now=function(){return u.now()}}else{var d=Date,s=d.now();c.unstable_now=function(){return d.now()-s}}var g=[],y=[],L=1,S=null,k=3,w=!1,I=!1,h=!1,v=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(ee){for(var H=l(y);H!==null;){if(H.callback===null)x(y);else if(H.startTime<=ee)x(y),H.sortIndex=H.expirationTime,_(g,H);else break;H=l(y)}}function B(ee){if(h=!1,N(ee),!I)if(l(g)!==null)I=!0,Te(F);else{var H=l(y);H!==null&&Y(B,H.startTime-ee)}}function F(ee,H){I=!1,h&&(h=!1,b(le),le=-1),w=!0;var X=k;try{for(N(H),S=l(g);S!==null&&(!(S.expirationTime>H)||ee&&!be());){var T=S.callback;if(typeof T=="function"){S.callback=null,k=S.priorityLevel;var A=T(S.expirationTime<=H);H=c.unstable_now(),typeof A=="function"?S.callback=A:S===l(g)&&x(g),N(H)}else x(g);S=l(g)}if(S!==null)var ce=!0;else{var ae=l(y);ae!==null&&Y(B,ae.startTime-H),ce=!1}return ce}finally{S=null,k=X,w=!1}}var $=!1,q=null,le=-1,J=5,de=-1;function be(){return!(c.unstable_now()-de<J)}function P(){if(q!==null){var ee=c.unstable_now();de=ee;var H=!0;try{H=q(!0,ee)}finally{H?K():($=!1,q=null)}}else $=!1}var K;if(typeof M=="function")K=function(){M(P)};else if(typeof MessageChannel<"u"){var p=new MessageChannel,Q=p.port2;p.port1.onmessage=P,K=function(){Q.postMessage(null)}}else K=function(){v(P,0)};function Te(ee){q=ee,$||($=!0,K())}function Y(ee,H){le=v(function(){ee(c.unstable_now())},H)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(ee){ee.callback=null},c.unstable_continueExecution=function(){I||w||(I=!0,Te(F))},c.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<ee?Math.floor(1e3/ee):5},c.unstable_getCurrentPriorityLevel=function(){return k},c.unstable_getFirstCallbackNode=function(){return l(g)},c.unstable_next=function(ee){switch(k){case 1:case 2:case 3:var H=3;break;default:H=k}var X=k;k=H;try{return ee()}finally{k=X}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(ee,H){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var X=k;k=ee;try{return H()}finally{k=X}},c.unstable_scheduleCallback=function(ee,H,X){var T=c.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?T+X:T):X=T,ee){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=X+A,ee={id:L++,callback:H,priorityLevel:ee,startTime:X,expirationTime:A,sortIndex:-1},X>T?(ee.sortIndex=X,_(y,ee),l(g)===null&&ee===l(y)&&(h?(b(le),le=-1):h=!0,Y(B,X-T))):(ee.sortIndex=A,_(g,ee),I||w||(I=!0,Te(F))),ee},c.unstable_shouldYield=be,c.unstable_wrapCallback=function(ee){var H=k;return function(){var X=k;k=H;try{return ee.apply(this,arguments)}finally{k=X}}}})(oo)),oo}var gd;function dp(){return gd||(gd=1,lo.exports=up()),lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd;function cp(){if(hd)return Sn;hd=1;var c=To(),_=dp();function l(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var x=new Set,m={};function u(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(m[e]=n,e=0;e<n.length;e++)x.add(n[e])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,L={},S={};function k(e){return g.call(S,e)?!0:g.call(L,e)?!1:y.test(e)?S[e]=!0:(L[e]=!0,!1)}function w(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function I(e,n,t,r){if(n===null||typeof n>"u"||w(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function h(e,n,t,r,i,a,f){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=f}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){v[e]=new h(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];v[n]=new h(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){v[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){v[e]=new h(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){v[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){v[e]=new h(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){v[e]=new h(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){v[e]=new h(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){v[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function M(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(b,M);v[n]=new h(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(b,M);v[n]=new h(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(b,M);v[n]=new h(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){v[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)}),v.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){v[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,n,t,r){var i=v.hasOwnProperty(n)?v[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(I(n,t,i,r)&&(t=null),r||i===null?k(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var B=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),$=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),be=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),ee=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,T;function A(e){if(T===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);T=n&&n[1]||""}return`
`+T+e}var ce=!1;function ae(e,n){if(!e||ce)return"";ce=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(W){var r=W}Reflect.construct(e,[],n)}else{try{n.call()}catch(W){r=W}e.call(n.prototype)}else{try{throw Error()}catch(W){r=W}e()}}catch(W){if(W&&r&&typeof W.stack=="string"){for(var i=W.stack.split(`
`),a=r.stack.split(`
`),f=i.length-1,E=a.length-1;1<=f&&0<=E&&i[f]!==a[E];)E--;for(;1<=f&&0<=E;f--,E--)if(i[f]!==a[E]){if(f!==1||E!==1)do if(f--,E--,0>E||i[f]!==a[E]){var j=`
`+i[f].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=f&&0<=E);break}}}finally{ce=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?A(e):""}function ne(e){switch(e.tag){case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return e=ae(e.type,!1),e;case 11:return e=ae(e.type.render,!1),e;case 1:return e=ae(e.type,!0),e;default:return""}}function Ce(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case $:return"Portal";case J:return"Profiler";case le:return"StrictMode";case K:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case be:return(e.displayName||"Context")+".Consumer";case de:return(e._context.displayName||"Context")+".Provider";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return n=e.displayName||null,n!==null?n:Ce(e.type)||"Memo";case Te:n=e._payload,e=e._init;try{return Ce(e(n))}catch{}}return null}function Oe(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(n);case 8:return n===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(e){var n=_e(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(f){r=""+f,a.call(this,f)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(f){r=""+f},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Fe(e){e._valueTracker||(e._valueTracker=je(e))}function kn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=_e(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function o(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Z(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ve(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function G(e,n){n=n.checked,n!=null&&N(e,"checked",n,!1)}function O(e,n){G(e,n);var t=ve(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?z(e,n.type,t):n.hasOwnProperty("defaultValue")&&z(e,n.type,ve(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function C(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function z(e,n,t){(n!=="number"||ln(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var te=Array.isArray;function ie(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ve(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function U(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(l(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fe(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(l(92));if(te(t)){if(1<t.length)throw Error(l(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ve(t)}}function we(e,n){var t=ve(n.value),r=ve(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ge(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Le(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ae,fn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ae.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function jn(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var on={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Lt=["Webkit","ms","Moz","O"];Object.keys(on).forEach(function(e){Lt.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),on[n]=on[e]})});function We(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||on.hasOwnProperty(e)&&on[e]?(""+n).trim():n+"px"}function Ct(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=We(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var gr=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xn(e,n){if(n){if(gr[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(l(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(l(61))}if(n.style!=null&&typeof n.style!="object")throw Error(l(62))}}function Gt(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hr=null;function mr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Kn=null,In=null;function It(e){if(e=Fr(e)){if(typeof wr!="function")throw Error(l(280));var n=e.stateNode;n&&(n=Ci(n),wr(e.stateNode,e.type,n))}}function Co(e){Kn?In?In.push(e):In=[e]:Kn=e}function Io(){if(Kn){var e=Kn,n=In;if(In=Kn=null,It(e),n)for(e=0;e<n.length;e++)It(n[e])}}function Mo(e,n){return e(n)}function Eo(){}var Sa=!1;function Oo(e,n,t){if(Sa)return e(n,t);Sa=!0;try{return Mo(e,n,t)}finally{Sa=!1,(Kn!==null||In!==null)&&(Eo(),Io())}}function yr(e,n){var t=e.stateNode;if(t===null)return null;var r=Ci(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(l(231,n,typeof t));return t}var ka=!1;if(s)try{var vr={};Object.defineProperty(vr,"passive",{get:function(){ka=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{ka=!1}function uc(e,n,t,r,i,a,f,E,j){var W=Array.prototype.slice.call(arguments,3);try{n.apply(t,W)}catch(se){this.onError(se)}}var Sr=!1,ai=null,li=!1,xa=null,dc={onError:function(e){Sr=!0,ai=e}};function cc(e,n,t,r,i,a,f,E,j){Sr=!1,ai=null,uc.apply(dc,arguments)}function fc(e,n,t,r,i,a,f,E,j){if(cc.apply(this,arguments),Sr){if(Sr){var W=ai;Sr=!1,ai=null}else throw Error(l(198));li||(li=!0,xa=W)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ao(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function No(e){if(Mt(e)!==e)throw Error(l(188))}function pc(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(l(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return No(i),e;if(a===r)return No(i),n;a=a.sibling}throw Error(l(188))}if(t.return!==r.return)t=i,r=a;else{for(var f=!1,E=i.child;E;){if(E===t){f=!0,t=i,r=a;break}if(E===r){f=!0,r=i,t=a;break}E=E.sibling}if(!f){for(E=a.child;E;){if(E===t){f=!0,t=a,r=i;break}if(E===r){f=!0,r=a,t=i;break}E=E.sibling}if(!f)throw Error(l(189))}}if(t.alternate!==r)throw Error(l(190))}if(t.tag!==3)throw Error(l(188));return t.stateNode.current===t?e:n}function Po(e){return e=pc(e),e!==null?jo(e):null}function jo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=jo(e);if(n!==null)return n;e=e.sibling}return null}var Ro=_.unstable_scheduleCallback,Bo=_.unstable_cancelCallback,gc=_.unstable_shouldYield,hc=_.unstable_requestPaint,Ke=_.unstable_now,mc=_.unstable_getCurrentPriorityLevel,Ta=_.unstable_ImmediatePriority,zo=_.unstable_UserBlockingPriority,oi=_.unstable_NormalPriority,wc=_.unstable_LowPriority,Fo=_.unstable_IdlePriority,si=null,Wn=null;function yc(e){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:kc,vc=Math.log,Sc=Math.LN2;function kc(e){return e>>>=0,e===0?32:31-(vc(e)/Sc|0)|0}var ui=64,di=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,f=t&268435455;if(f!==0){var E=f&~i;E!==0?r=kr(E):(a&=f,a!==0&&(r=kr(a)))}else f=t&~i,f!==0?r=kr(f):a!==0&&(r=kr(a));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Rn(n),i=1<<t,r|=e[t],n&=~i;return r}function xc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var f=31-Rn(a),E=1<<f,j=i[f];j===-1?((E&t)===0||(E&r)!==0)&&(i[f]=xc(E,n)):j<=n&&(e.expiredLanes|=E),a&=~E}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Do(){var e=ui;return ui<<=1,(ui&4194240)===0&&(ui=64),e}function _a(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function xr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Rn(n),e[n]=t}function bc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Rn(t),a=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~a}}function La(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Rn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ze=0;function Vo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uo,Ca,Wo,Ho,Go,Ia=!1,fi=[],rt=null,it=null,at=null,Tr=new Map,br=new Map,lt=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Tr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":br.delete(n.pointerId)}}function _r(e,n,t,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},n!==null&&(n=Fr(n),n!==null&&Ca(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Lc(e,n,t,r,i){switch(n){case"focusin":return rt=_r(rt,e,n,t,r,i),!0;case"dragenter":return it=_r(it,e,n,t,r,i),!0;case"mouseover":return at=_r(at,e,n,t,r,i),!0;case"pointerover":var a=i.pointerId;return Tr.set(a,_r(Tr.get(a)||null,e,n,t,r,i)),!0;case"gotpointercapture":return a=i.pointerId,br.set(a,_r(br.get(a)||null,e,n,t,r,i)),!0}return!1}function Jo(e){var n=Et(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=Ao(t),n!==null){e.blockedOn=n,Go(e.priority,function(){Wo(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ea(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);hr=r,t.target.dispatchEvent(r),hr=null}else return n=Fr(t),n!==null&&Ca(n),e.blockedOn=t,!1;n.shift()}return!0}function Ko(e,n,t){pi(e)&&t.delete(n)}function Cc(){Ia=!1,rt!==null&&pi(rt)&&(rt=null),it!==null&&pi(it)&&(it=null),at!==null&&pi(at)&&(at=null),Tr.forEach(Ko),br.forEach(Ko)}function Lr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ia||(Ia=!0,_.unstable_scheduleCallback(_.unstable_NormalPriority,Cc)))}function Cr(e){function n(i){return Lr(i,e)}if(0<fi.length){Lr(fi[0],e);for(var t=1;t<fi.length;t++){var r=fi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&Lr(rt,e),it!==null&&Lr(it,e),at!==null&&Lr(at,e),Tr.forEach(n),br.forEach(n),t=0;t<lt.length;t++)r=lt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<lt.length&&(t=lt[0],t.blockedOn===null);)Jo(t),t.blockedOn===null&&lt.shift()}var qt=B.ReactCurrentBatchConfig,gi=!0;function Ic(e,n,t,r){var i=ze,a=qt.transition;qt.transition=null;try{ze=1,Ma(e,n,t,r)}finally{ze=i,qt.transition=a}}function Mc(e,n,t,r){var i=ze,a=qt.transition;qt.transition=null;try{ze=4,Ma(e,n,t,r)}finally{ze=i,qt.transition=a}}function Ma(e,n,t,r){if(gi){var i=Ea(e,n,t,r);if(i===null)Ja(e,n,r,hi,t),qo(e,r);else if(Lc(i,e,n,t,r))r.stopPropagation();else if(qo(e,r),n&4&&-1<_c.indexOf(e)){for(;i!==null;){var a=Fr(i);if(a!==null&&Uo(a),a=Ea(e,n,t,r),a===null&&Ja(e,n,r,hi,t),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ja(e,n,r,null,t)}}var hi=null;function Ea(e,n,t,r){if(hi=null,e=mr(r),e=Et(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ao(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return hi=e,null}function $o(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mc()){case Ta:return 1;case zo:return 4;case oi:case wc:return 16;case Fo:return 536870912;default:return 16}default:return 16}}var ot=null,Oa=null,mi=null;function Qo(){if(mi)return mi;var e,n=Oa,t=n.length,r,i="value"in ot?ot.value:ot.textContent,a=i.length;for(e=0;e<t&&n[e]===i[e];e++);var f=t-e;for(r=1;r<=f&&n[t-r]===i[a-r];r++);return mi=i.slice(e,1<r?1-r:void 0)}function wi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function yi(){return!0}function Zo(){return!1}function Tn(e){function n(t,r,i,a,f){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=f,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(t=e[E],this[E]=t?t(a):a[E]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?yi:Zo,this.isPropagationStopped=Zo,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=yi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=yi)},persist:function(){},isPersistent:yi}),n}var Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=Tn(Jt),Ir=X({},Jt,{view:0,detail:0}),Ec=Tn(Ir),Na,Pa,Mr,vi=X({},Ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(Na=e.screenX-Mr.screenX,Pa=e.screenY-Mr.screenY):Pa=Na=0,Mr=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Pa}}),Yo=Tn(vi),Oc=X({},vi,{dataTransfer:0}),Ac=Tn(Oc),Nc=X({},Ir,{relatedTarget:0}),ja=Tn(Nc),Pc=X({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0}),jc=Tn(Pc),Rc=X({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bc=Tn(Rc),zc=X({},Jt,{data:0}),Xo=Tn(zc),Fc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vc[e])?!!n[e]:!1}function Ra(){return Uc}var Wc=X({},Ir,{key:function(e){if(e.key){var n=Fc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ra,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hc=Tn(Wc),Gc=X({},vi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Tn(Gc),qc=X({},Ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ra}),Jc=Tn(qc),Kc=X({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0}),$c=Tn(Kc),Qc=X({},vi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zc=Tn(Qc),Yc=[9,13,27,32],Ba=s&&"CompositionEvent"in window,Er=null;s&&"documentMode"in document&&(Er=document.documentMode);var Xc=s&&"TextEvent"in window&&!Er,ns=s&&(!Ba||Er&&8<Er&&11>=Er),ts=" ",rs=!1;function is(e,n){switch(e){case"keyup":return Yc.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function as(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function ef(e,n){switch(e){case"compositionend":return as(n);case"keypress":return n.which!==32?null:(rs=!0,ts);case"textInput":return e=n.data,e===ts&&rs?null:e;default:return null}}function nf(e,n){if(Kt)return e==="compositionend"||!Ba&&is(e,n)?(e=Qo(),mi=Oa=ot=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ns&&n.locale!=="ko"?null:n.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tf[e.type]:n==="textarea"}function os(e,n,t,r){Co(r),n=bi(n,"onChange"),0<n.length&&(t=new Aa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Or=null,Ar=null;function rf(e){_s(e,0)}function Si(e){var n=Xt(e);if(kn(n))return e}function af(e,n){if(e==="change")return n}var ss=!1;if(s){var za;if(s){var Fa="oninput"in document;if(!Fa){var us=document.createElement("div");us.setAttribute("oninput","return;"),Fa=typeof us.oninput=="function"}za=Fa}else za=!1;ss=za&&(!document.documentMode||9<document.documentMode)}function ds(){Or&&(Or.detachEvent("onpropertychange",cs),Ar=Or=null)}function cs(e){if(e.propertyName==="value"&&Si(Ar)){var n=[];os(n,Ar,e,mr(e)),Oo(rf,n)}}function lf(e,n,t){e==="focusin"?(ds(),Or=n,Ar=t,Or.attachEvent("onpropertychange",cs)):e==="focusout"&&ds()}function of(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Si(Ar)}function sf(e,n){if(e==="click")return Si(n)}function uf(e,n){if(e==="input"||e==="change")return Si(n)}function df(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Bn=typeof Object.is=="function"?Object.is:df;function Nr(e,n){if(Bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!g.call(n,i)||!Bn(e[i],n[i]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ps(e,n){var t=fs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=fs(t)}}function gs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function hs(){for(var e=window,n=ln();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ln(e.document)}return n}function Da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function cf(e){var n=hs(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gs(t.ownerDocument.documentElement,t)){if(r!==null&&Da(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=ps(t,a);var f=ps(t,r);i&&f&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==f.node||e.focusOffset!==f.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(f.node,f.offset)):(n.setEnd(f.node,f.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ff=s&&"documentMode"in document&&11>=document.documentMode,$t=null,Va=null,Pr=null,Ua=!1;function ms(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ua||$t==null||$t!==ln(r)||(r=$t,"selectionStart"in r&&Da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Nr(Pr,r)||(Pr=r,r=bi(Va,"onSelect"),0<r.length&&(n=new Aa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=$t)))}function ki(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qt={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Wa={},ws={};s&&(ws=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function xi(e){if(Wa[e])return Wa[e];if(!Qt[e])return e;var n=Qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ws)return Wa[e]=n[t];return e}var ys=xi("animationend"),vs=xi("animationiteration"),Ss=xi("animationstart"),ks=xi("transitionend"),xs=new Map,Ts="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function st(e,n){xs.set(e,n),u(n,[e])}for(var Ha=0;Ha<Ts.length;Ha++){var Ga=Ts[Ha],pf=Ga.toLowerCase(),gf=Ga[0].toUpperCase()+Ga.slice(1);st(pf,"on"+gf)}st(ys,"onAnimationEnd"),st(vs,"onAnimationIteration"),st(Ss,"onAnimationStart"),st("dblclick","onDoubleClick"),st("focusin","onFocus"),st("focusout","onBlur"),st(ks,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function bs(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,fc(r,n,void 0,e),e.currentTarget=null}function _s(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var f=r.length-1;0<=f;f--){var E=r[f],j=E.instance,W=E.currentTarget;if(E=E.listener,j!==a&&i.isPropagationStopped())break e;bs(i,E,W),a=j}else for(f=0;f<r.length;f++){if(E=r[f],j=E.instance,W=E.currentTarget,E=E.listener,j!==a&&i.isPropagationStopped())break e;bs(i,E,W),a=j}}}if(li)throw e=xa,li=!1,xa=null,e}function Ve(e,n){var t=n[Xa];t===void 0&&(t=n[Xa]=new Set);var r=e+"__bubble";t.has(r)||(Ls(n,e,2,!1),t.add(r))}function qa(e,n,t){var r=0;n&&(r|=4),Ls(t,e,r,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[Ti]){e[Ti]=!0,x.forEach(function(t){t!=="selectionchange"&&(hf.has(t)||qa(t,!1,e),qa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,qa("selectionchange",!1,n))}}function Ls(e,n,t,r){switch($o(n)){case 1:var i=Ic;break;case 4:i=Mc;break;default:i=Ma}t=i.bind(null,n,t,e),i=void 0,!ka||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ja(e,n,t,r,i){var a=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var f=r.tag;if(f===3||f===4){var E=r.stateNode.containerInfo;if(E===i||E.nodeType===8&&E.parentNode===i)break;if(f===4)for(f=r.return;f!==null;){var j=f.tag;if((j===3||j===4)&&(j=f.stateNode.containerInfo,j===i||j.nodeType===8&&j.parentNode===i))return;f=f.return}for(;E!==null;){if(f=Et(E),f===null)return;if(j=f.tag,j===5||j===6){r=a=f;continue e}E=E.parentNode}}r=r.return}Oo(function(){var W=a,se=mr(t),ue=[];e:{var oe=xs.get(e);if(oe!==void 0){var me=Aa,Se=e;switch(e){case"keypress":if(wi(t)===0)break e;case"keydown":case"keyup":me=Hc;break;case"focusin":Se="focus",me=ja;break;case"focusout":Se="blur",me=ja;break;case"beforeblur":case"afterblur":me=ja;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=Ac;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=Jc;break;case ys:case vs:case Ss:me=jc;break;case ks:me=$c;break;case"scroll":me=Ec;break;case"wheel":me=Zc;break;case"copy":case"cut":case"paste":me=Bc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=es}var ke=(n&4)!==0,$e=!ke&&e==="scroll",D=ke?oe!==null?oe+"Capture":null:oe;ke=[];for(var R=W,V;R!==null;){V=R;var pe=V.stateNode;if(V.tag===5&&pe!==null&&(V=pe,D!==null&&(pe=yr(R,D),pe!=null&&ke.push(Br(R,pe,V)))),$e)break;R=R.return}0<ke.length&&(oe=new me(oe,Se,null,t,se),ue.push({event:oe,listeners:ke}))}}if((n&7)===0){e:{if(oe=e==="mouseover"||e==="pointerover",me=e==="mouseout"||e==="pointerout",oe&&t!==hr&&(Se=t.relatedTarget||t.fromElement)&&(Et(Se)||Se[$n]))break e;if((me||oe)&&(oe=se.window===se?se:(oe=se.ownerDocument)?oe.defaultView||oe.parentWindow:window,me?(Se=t.relatedTarget||t.toElement,me=W,Se=Se?Et(Se):null,Se!==null&&($e=Mt(Se),Se!==$e||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(me=null,Se=W),me!==Se)){if(ke=Yo,pe="onMouseLeave",D="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ke=es,pe="onPointerLeave",D="onPointerEnter",R="pointer"),$e=me==null?oe:Xt(me),V=Se==null?oe:Xt(Se),oe=new ke(pe,R+"leave",me,t,se),oe.target=$e,oe.relatedTarget=V,pe=null,Et(se)===W&&(ke=new ke(D,R+"enter",Se,t,se),ke.target=V,ke.relatedTarget=$e,pe=ke),$e=pe,me&&Se)n:{for(ke=me,D=Se,R=0,V=ke;V;V=Zt(V))R++;for(V=0,pe=D;pe;pe=Zt(pe))V++;for(;0<R-V;)ke=Zt(ke),R--;for(;0<V-R;)D=Zt(D),V--;for(;R--;){if(ke===D||D!==null&&ke===D.alternate)break n;ke=Zt(ke),D=Zt(D)}ke=null}else ke=null;me!==null&&Cs(ue,oe,me,ke,!1),Se!==null&&$e!==null&&Cs(ue,$e,Se,ke,!0)}}e:{if(oe=W?Xt(W):window,me=oe.nodeName&&oe.nodeName.toLowerCase(),me==="select"||me==="input"&&oe.type==="file")var xe=af;else if(ls(oe))if(ss)xe=uf;else{xe=of;var Ie=lf}else(me=oe.nodeName)&&me.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(xe=sf);if(xe&&(xe=xe(e,W))){os(ue,xe,t,se);break e}Ie&&Ie(e,oe,W),e==="focusout"&&(Ie=oe._wrapperState)&&Ie.controlled&&oe.type==="number"&&z(oe,"number",oe.value)}switch(Ie=W?Xt(W):window,e){case"focusin":(ls(Ie)||Ie.contentEditable==="true")&&($t=Ie,Va=W,Pr=null);break;case"focusout":Pr=Va=$t=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,ms(ue,t,se);break;case"selectionchange":if(ff)break;case"keydown":case"keyup":ms(ue,t,se)}var Me;if(Ba)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Kt?is(e,t)&&(Ee="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(Ee="onCompositionStart");Ee&&(ns&&t.locale!=="ko"&&(Kt||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Kt&&(Me=Qo()):(ot=se,Oa="value"in ot?ot.value:ot.textContent,Kt=!0)),Ie=bi(W,Ee),0<Ie.length&&(Ee=new Xo(Ee,e,null,t,se),ue.push({event:Ee,listeners:Ie}),Me?Ee.data=Me:(Me=as(t),Me!==null&&(Ee.data=Me)))),(Me=Xc?ef(e,t):nf(e,t))&&(W=bi(W,"onBeforeInput"),0<W.length&&(se=new Xo("onBeforeInput","beforeinput",null,t,se),ue.push({event:se,listeners:W}),se.data=Me))}_s(ue,n)})}function Br(e,n,t){return{instance:e,listener:n,currentTarget:t}}function bi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=yr(e,t),a!=null&&r.unshift(Br(e,a,i)),a=yr(e,n),a!=null&&r.push(Br(e,a,i))),e=e.return}return r}function Zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cs(e,n,t,r,i){for(var a=n._reactName,f=[];t!==null&&t!==r;){var E=t,j=E.alternate,W=E.stateNode;if(j!==null&&j===r)break;E.tag===5&&W!==null&&(E=W,i?(j=yr(t,a),j!=null&&f.unshift(Br(t,j,E))):i||(j=yr(t,a),j!=null&&f.push(Br(t,j,E)))),t=t.return}f.length!==0&&e.push({event:n,listeners:f})}var mf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(mf,`
`).replace(wf,"")}function _i(e,n,t){if(n=Is(n),Is(e)!==n&&t)throw Error(l(425))}function Li(){}var Ka=null,$a=null;function Qa(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,yf=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,vf=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(Sf)}:Za;function Sf(e){setTimeout(function(){throw e})}function Ya(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Cr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Cr(n)}function ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Es(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Yt=Math.random().toString(36).slice(2),Hn="__reactFiber$"+Yt,zr="__reactProps$"+Yt,$n="__reactContainer$"+Yt,Xa="__reactEvents$"+Yt,kf="__reactListeners$"+Yt,xf="__reactHandles$"+Yt;function Et(e){var n=e[Hn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[$n]||t[Hn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Es(e);e!==null;){if(t=e[Hn])return t;e=Es(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Hn]||e[$n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Ci(e){return e[zr]||null}var el=[],er=-1;function dt(e){return{current:e}}function Ue(e){0>er||(e.current=el[er],el[er]=null,er--)}function De(e,n){er++,el[er]=e.current,e.current=n}var ct={},sn=dt(ct),hn=dt(!1),Ot=ct;function nr(e,n){var t=e.type.contextTypes;if(!t)return ct;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function mn(e){return e=e.childContextTypes,e!=null}function Ii(){Ue(hn),Ue(sn)}function Os(e,n,t){if(sn.current!==ct)throw Error(l(168));De(sn,n),De(hn,t)}function As(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(l(108,Oe(e)||"Unknown",i));return X({},t,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,Ot=sn.current,De(sn,e),De(hn,hn.current),!0}function Ns(e,n,t){var r=e.stateNode;if(!r)throw Error(l(169));t?(e=As(e,n,Ot),r.__reactInternalMemoizedMergedChildContext=e,Ue(hn),Ue(sn),De(sn,e)):Ue(hn),De(hn,t)}var Qn=null,Ei=!1,nl=!1;function Ps(e){Qn===null?Qn=[e]:Qn.push(e)}function Tf(e){Ei=!0,Ps(e)}function ft(){if(!nl&&Qn!==null){nl=!0;var e=0,n=ze;try{var t=Qn;for(ze=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Qn=null,Ei=!1}catch(i){throw Qn!==null&&(Qn=Qn.slice(e+1)),Ro(Ta,ft),i}finally{ze=n,nl=!1}}return null}var tr=[],rr=0,Oi=null,Ai=0,Mn=[],En=0,At=null,Zn=1,Yn="";function Nt(e,n){tr[rr++]=Ai,tr[rr++]=Oi,Oi=e,Ai=n}function js(e,n,t){Mn[En++]=Zn,Mn[En++]=Yn,Mn[En++]=At,At=e;var r=Zn;e=Yn;var i=32-Rn(r)-1;r&=~(1<<i),t+=1;var a=32-Rn(n)+i;if(30<a){var f=i-i%5;a=(r&(1<<f)-1).toString(32),r>>=f,i-=f,Zn=1<<32-Rn(n)+i|t<<i|r,Yn=a+e}else Zn=1<<a|t<<i|r,Yn=e}function tl(e){e.return!==null&&(Nt(e,1),js(e,1,0))}function rl(e){for(;e===Oi;)Oi=tr[--rr],tr[rr]=null,Ai=tr[--rr],tr[rr]=null;for(;e===At;)At=Mn[--En],Mn[En]=null,Yn=Mn[--En],Mn[En]=null,Zn=Mn[--En],Mn[En]=null}var bn=null,_n=null,He=!1,zn=null;function Rs(e,n){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Bs(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,bn=e,_n=ut(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,bn=e,_n=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=At!==null?{id:Zn,overflow:Yn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,bn=e,_n=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(He){var n=_n;if(n){var t=n;if(!Bs(e,n)){if(il(e))throw Error(l(418));n=ut(t.nextSibling);var r=bn;n&&Bs(e,n)?Rs(r,t):(e.flags=e.flags&-4097|2,He=!1,bn=e)}}else{if(il(e))throw Error(l(418));e.flags=e.flags&-4097|2,He=!1,bn=e}}}function zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bn=e}function Ni(e){if(e!==bn)return!1;if(!He)return zs(e),He=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Qa(e.type,e.memoizedProps)),n&&(n=_n)){if(il(e))throw Fs(),Error(l(418));for(;n;)Rs(e,n),n=ut(n.nextSibling)}if(zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){_n=ut(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}_n=null}}else _n=bn?ut(e.stateNode.nextSibling):null;return!0}function Fs(){for(var e=_n;e;)e=ut(e.nextSibling)}function ir(){_n=bn=null,He=!1}function ll(e){zn===null?zn=[e]:zn.push(e)}var bf=B.ReactCurrentBatchConfig;function Dr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(l(309));var r=t.stateNode}if(!r)throw Error(l(147,e));var i=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(f){var E=i.refs;f===null?delete E[a]:E[a]=f},n._stringRef=a,n)}if(typeof e!="string")throw Error(l(284));if(!t._owner)throw Error(l(290,e))}return e}function Pi(e,n){throw e=Object.prototype.toString.call(n),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ds(e){var n=e._init;return n(e._payload)}function Vs(e){function n(D,R){if(e){var V=D.deletions;V===null?(D.deletions=[R],D.flags|=16):V.push(R)}}function t(D,R){if(!e)return null;for(;R!==null;)n(D,R),R=R.sibling;return null}function r(D,R){for(D=new Map;R!==null;)R.key!==null?D.set(R.key,R):D.set(R.index,R),R=R.sibling;return D}function i(D,R){return D=St(D,R),D.index=0,D.sibling=null,D}function a(D,R,V){return D.index=V,e?(V=D.alternate,V!==null?(V=V.index,V<R?(D.flags|=2,R):V):(D.flags|=2,R)):(D.flags|=1048576,R)}function f(D){return e&&D.alternate===null&&(D.flags|=2),D}function E(D,R,V,pe){return R===null||R.tag!==6?(R=Zl(V,D.mode,pe),R.return=D,R):(R=i(R,V),R.return=D,R)}function j(D,R,V,pe){var xe=V.type;return xe===q?se(D,R,V.props.children,pe,V.key):R!==null&&(R.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Te&&Ds(xe)===R.type)?(pe=i(R,V.props),pe.ref=Dr(D,R,V),pe.return=D,pe):(pe=ia(V.type,V.key,V.props,null,D.mode,pe),pe.ref=Dr(D,R,V),pe.return=D,pe)}function W(D,R,V,pe){return R===null||R.tag!==4||R.stateNode.containerInfo!==V.containerInfo||R.stateNode.implementation!==V.implementation?(R=Yl(V,D.mode,pe),R.return=D,R):(R=i(R,V.children||[]),R.return=D,R)}function se(D,R,V,pe,xe){return R===null||R.tag!==7?(R=Vt(V,D.mode,pe,xe),R.return=D,R):(R=i(R,V),R.return=D,R)}function ue(D,R,V){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Zl(""+R,D.mode,V),R.return=D,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case F:return V=ia(R.type,R.key,R.props,null,D.mode,V),V.ref=Dr(D,null,R),V.return=D,V;case $:return R=Yl(R,D.mode,V),R.return=D,R;case Te:var pe=R._init;return ue(D,pe(R._payload),V)}if(te(R)||H(R))return R=Vt(R,D.mode,V,null),R.return=D,R;Pi(D,R)}return null}function oe(D,R,V,pe){var xe=R!==null?R.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return xe!==null?null:E(D,R,""+V,pe);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case F:return V.key===xe?j(D,R,V,pe):null;case $:return V.key===xe?W(D,R,V,pe):null;case Te:return xe=V._init,oe(D,R,xe(V._payload),pe)}if(te(V)||H(V))return xe!==null?null:se(D,R,V,pe,null);Pi(D,V)}return null}function me(D,R,V,pe,xe){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return D=D.get(V)||null,E(R,D,""+pe,xe);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case F:return D=D.get(pe.key===null?V:pe.key)||null,j(R,D,pe,xe);case $:return D=D.get(pe.key===null?V:pe.key)||null,W(R,D,pe,xe);case Te:var Ie=pe._init;return me(D,R,V,Ie(pe._payload),xe)}if(te(pe)||H(pe))return D=D.get(V)||null,se(R,D,pe,xe,null);Pi(R,pe)}return null}function Se(D,R,V,pe){for(var xe=null,Ie=null,Me=R,Ee=R=0,tn=null;Me!==null&&Ee<V.length;Ee++){Me.index>Ee?(tn=Me,Me=null):tn=Me.sibling;var Re=oe(D,Me,V[Ee],pe);if(Re===null){Me===null&&(Me=tn);break}e&&Me&&Re.alternate===null&&n(D,Me),R=a(Re,R,Ee),Ie===null?xe=Re:Ie.sibling=Re,Ie=Re,Me=tn}if(Ee===V.length)return t(D,Me),He&&Nt(D,Ee),xe;if(Me===null){for(;Ee<V.length;Ee++)Me=ue(D,V[Ee],pe),Me!==null&&(R=a(Me,R,Ee),Ie===null?xe=Me:Ie.sibling=Me,Ie=Me);return He&&Nt(D,Ee),xe}for(Me=r(D,Me);Ee<V.length;Ee++)tn=me(Me,D,Ee,V[Ee],pe),tn!==null&&(e&&tn.alternate!==null&&Me.delete(tn.key===null?Ee:tn.key),R=a(tn,R,Ee),Ie===null?xe=tn:Ie.sibling=tn,Ie=tn);return e&&Me.forEach(function(kt){return n(D,kt)}),He&&Nt(D,Ee),xe}function ke(D,R,V,pe){var xe=H(V);if(typeof xe!="function")throw Error(l(150));if(V=xe.call(V),V==null)throw Error(l(151));for(var Ie=xe=null,Me=R,Ee=R=0,tn=null,Re=V.next();Me!==null&&!Re.done;Ee++,Re=V.next()){Me.index>Ee?(tn=Me,Me=null):tn=Me.sibling;var kt=oe(D,Me,Re.value,pe);if(kt===null){Me===null&&(Me=tn);break}e&&Me&&kt.alternate===null&&n(D,Me),R=a(kt,R,Ee),Ie===null?xe=kt:Ie.sibling=kt,Ie=kt,Me=tn}if(Re.done)return t(D,Me),He&&Nt(D,Ee),xe;if(Me===null){for(;!Re.done;Ee++,Re=V.next())Re=ue(D,Re.value,pe),Re!==null&&(R=a(Re,R,Ee),Ie===null?xe=Re:Ie.sibling=Re,Ie=Re);return He&&Nt(D,Ee),xe}for(Me=r(D,Me);!Re.done;Ee++,Re=V.next())Re=me(Me,D,Ee,Re.value,pe),Re!==null&&(e&&Re.alternate!==null&&Me.delete(Re.key===null?Ee:Re.key),R=a(Re,R,Ee),Ie===null?xe=Re:Ie.sibling=Re,Ie=Re);return e&&Me.forEach(function(rp){return n(D,rp)}),He&&Nt(D,Ee),xe}function $e(D,R,V,pe){if(typeof V=="object"&&V!==null&&V.type===q&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case F:e:{for(var xe=V.key,Ie=R;Ie!==null;){if(Ie.key===xe){if(xe=V.type,xe===q){if(Ie.tag===7){t(D,Ie.sibling),R=i(Ie,V.props.children),R.return=D,D=R;break e}}else if(Ie.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===Te&&Ds(xe)===Ie.type){t(D,Ie.sibling),R=i(Ie,V.props),R.ref=Dr(D,Ie,V),R.return=D,D=R;break e}t(D,Ie);break}else n(D,Ie);Ie=Ie.sibling}V.type===q?(R=Vt(V.props.children,D.mode,pe,V.key),R.return=D,D=R):(pe=ia(V.type,V.key,V.props,null,D.mode,pe),pe.ref=Dr(D,R,V),pe.return=D,D=pe)}return f(D);case $:e:{for(Ie=V.key;R!==null;){if(R.key===Ie)if(R.tag===4&&R.stateNode.containerInfo===V.containerInfo&&R.stateNode.implementation===V.implementation){t(D,R.sibling),R=i(R,V.children||[]),R.return=D,D=R;break e}else{t(D,R);break}else n(D,R);R=R.sibling}R=Yl(V,D.mode,pe),R.return=D,D=R}return f(D);case Te:return Ie=V._init,$e(D,R,Ie(V._payload),pe)}if(te(V))return Se(D,R,V,pe);if(H(V))return ke(D,R,V,pe);Pi(D,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,R!==null&&R.tag===6?(t(D,R.sibling),R=i(R,V),R.return=D,D=R):(t(D,R),R=Zl(V,D.mode,pe),R.return=D,D=R),f(D)):t(D,R)}return $e}var ar=Vs(!0),Us=Vs(!1),ji=dt(null),Ri=null,lr=null,ol=null;function sl(){ol=lr=Ri=null}function ul(e){var n=ji.current;Ue(ji),e._currentValue=n}function dl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function or(e,n){Ri=e,ol=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(wn=!0),e.firstContext=null)}function On(e){var n=e._currentValue;if(ol!==e)if(e={context:e,memoizedValue:n,next:null},lr===null){if(Ri===null)throw Error(l(308));lr=e,Ri.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return n}var Pt=null;function cl(e){Pt===null?Pt=[e]:Pt.push(e)}function Ws(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,cl(n)):(t.next=i.next,i.next=t),n.interleaved=t,Xn(e,r)}function Xn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var pt=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hs(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function gt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Xn(e,t)}return i=r.interleaved,i===null?(n.next=n,cl(r)):(n.next=i.next,i.next=n),r.interleaved=n,Xn(e,t)}function Bi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,La(e,t)}}function Gs(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var f={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=f:a=a.next=f,t=t.next}while(t!==null);a===null?i=a=n:a=a.next=n}else i=a=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function zi(e,n,t,r){var i=e.updateQueue;pt=!1;var a=i.firstBaseUpdate,f=i.lastBaseUpdate,E=i.shared.pending;if(E!==null){i.shared.pending=null;var j=E,W=j.next;j.next=null,f===null?a=W:f.next=W,f=j;var se=e.alternate;se!==null&&(se=se.updateQueue,E=se.lastBaseUpdate,E!==f&&(E===null?se.firstBaseUpdate=W:E.next=W,se.lastBaseUpdate=j))}if(a!==null){var ue=i.baseState;f=0,se=W=j=null,E=a;do{var oe=E.lane,me=E.eventTime;if((r&oe)===oe){se!==null&&(se=se.next={eventTime:me,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var Se=e,ke=E;switch(oe=n,me=t,ke.tag){case 1:if(Se=ke.payload,typeof Se=="function"){ue=Se.call(me,ue,oe);break e}ue=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ke.payload,oe=typeof Se=="function"?Se.call(me,ue,oe):Se,oe==null)break e;ue=X({},ue,oe);break e;case 2:pt=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,oe=i.effects,oe===null?i.effects=[E]:oe.push(E))}else me={eventTime:me,lane:oe,tag:E.tag,payload:E.payload,callback:E.callback,next:null},se===null?(W=se=me,j=ue):se=se.next=me,f|=oe;if(E=E.next,E===null){if(E=i.shared.pending,E===null)break;oe=E,E=oe.next,oe.next=null,i.lastBaseUpdate=oe,i.shared.pending=null}}while(!0);if(se===null&&(j=ue),i.baseState=j,i.firstBaseUpdate=W,i.lastBaseUpdate=se,n=i.shared.interleaved,n!==null){i=n;do f|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);Bt|=f,e.lanes=f,e.memoizedState=ue}}function qs(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(l(191,i));i.call(r)}}}var Vr={},Gn=dt(Vr),Ur=dt(Vr),Wr=dt(Vr);function jt(e){if(e===Vr)throw Error(l(174));return e}function pl(e,n){switch(De(Wr,n),De(Ur,e),De(Gn,Vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Be(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Be(n,e)}Ue(Gn),De(Gn,n)}function sr(){Ue(Gn),Ue(Ur),Ue(Wr)}function Js(e){jt(Wr.current);var n=jt(Gn.current),t=Be(n,e.type);n!==t&&(De(Ur,e),De(Gn,t))}function gl(e){Ur.current===e&&(Ue(Gn),Ue(Ur))}var Ge=dt(0);function Fi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var hl=[];function ml(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var Di=B.ReactCurrentDispatcher,wl=B.ReactCurrentBatchConfig,Rt=0,qe=null,Ye=null,en=null,Vi=!1,Hr=!1,Gr=0,_f=0;function un(){throw Error(l(321))}function yl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Bn(e[t],n[t]))return!1;return!0}function vl(e,n,t,r,i,a){if(Rt=a,qe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Di.current=e===null||e.memoizedState===null?Mf:Ef,e=t(r,i),Hr){a=0;do{if(Hr=!1,Gr=0,25<=a)throw Error(l(301));a+=1,en=Ye=null,n.updateQueue=null,Di.current=Of,e=t(r,i)}while(Hr)}if(Di.current=Hi,n=Ye!==null&&Ye.next!==null,Rt=0,en=Ye=qe=null,Vi=!1,n)throw Error(l(300));return e}function Sl(){var e=Gr!==0;return Gr=0,e}function qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?qe.memoizedState=en=e:en=en.next=e,en}function An(){if(Ye===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=en===null?qe.memoizedState:en.next;if(n!==null)en=n,Ye=e;else{if(e===null)throw Error(l(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},en===null?qe.memoizedState=en=e:en=en.next=e}return en}function qr(e,n){return typeof n=="function"?n(e):n}function kl(e){var n=An(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,a=t.pending;if(a!==null){if(i!==null){var f=i.next;i.next=a.next,a.next=f}r.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,r=r.baseState;var E=f=null,j=null,W=a;do{var se=W.lane;if((Rt&se)===se)j!==null&&(j=j.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),r=W.hasEagerState?W.eagerState:e(r,W.action);else{var ue={lane:se,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};j===null?(E=j=ue,f=r):j=j.next=ue,qe.lanes|=se,Bt|=se}W=W.next}while(W!==null&&W!==a);j===null?f=r:j.next=E,Bn(r,n.memoizedState)||(wn=!0),n.memoizedState=r,n.baseState=f,n.baseQueue=j,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do a=i.lane,qe.lanes|=a,Bt|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xl(e){var n=An(),t=n.queue;if(t===null)throw Error(l(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,a=n.memoizedState;if(i!==null){t.pending=null;var f=i=i.next;do a=e(a,f.action),f=f.next;while(f!==i);Bn(a,n.memoizedState)||(wn=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Ks(){}function $s(e,n){var t=qe,r=An(),i=n(),a=!Bn(r.memoizedState,i);if(a&&(r.memoizedState=i,wn=!0),r=r.queue,Tl(Ys.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||en!==null&&en.memoizedState.tag&1){if(t.flags|=2048,Jr(9,Zs.bind(null,t,r,i,n),void 0,null),nn===null)throw Error(l(349));(Rt&30)!==0||Qs(t,n,i)}return i}function Qs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=qe.updateQueue,n===null?(n={lastEffect:null,stores:null},qe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Zs(e,n,t,r){n.value=t,n.getSnapshot=r,Xs(n)&&eu(e)}function Ys(e,n,t){return t(function(){Xs(n)&&eu(e)})}function Xs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Bn(e,t)}catch{return!0}}function eu(e){var n=Xn(e,1);n!==null&&Un(n,e,1,-1)}function nu(e){var n=qn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},n.queue=e,e=e.dispatch=If.bind(null,qe,e),[n.memoizedState,e]}function Jr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=qe.updateQueue,n===null?(n={lastEffect:null,stores:null},qe.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function tu(){return An().memoizedState}function Ui(e,n,t,r){var i=qn();qe.flags|=e,i.memoizedState=Jr(1|n,t,void 0,r===void 0?null:r)}function Wi(e,n,t,r){var i=An();r=r===void 0?null:r;var a=void 0;if(Ye!==null){var f=Ye.memoizedState;if(a=f.destroy,r!==null&&yl(r,f.deps)){i.memoizedState=Jr(n,t,a,r);return}}qe.flags|=e,i.memoizedState=Jr(1|n,t,a,r)}function ru(e,n){return Ui(8390656,8,e,n)}function Tl(e,n){return Wi(2048,8,e,n)}function iu(e,n){return Wi(4,2,e,n)}function au(e,n){return Wi(4,4,e,n)}function lu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ou(e,n,t){return t=t!=null?t.concat([e]):null,Wi(4,4,lu.bind(null,n,e),t)}function bl(){}function su(e,n){var t=An();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function uu(e,n){var t=An();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function du(e,n,t){return(Rt&21)===0?(e.baseState&&(e.baseState=!1,wn=!0),e.memoizedState=t):(Bn(t,n)||(t=Do(),qe.lanes|=t,Bt|=t,e.baseState=!0),n)}function Lf(e,n){var t=ze;ze=t!==0&&4>t?t:4,e(!0);var r=wl.transition;wl.transition={};try{e(!1),n()}finally{ze=t,wl.transition=r}}function cu(){return An().memoizedState}function Cf(e,n,t){var r=yt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fu(e))pu(n,t);else if(t=Ws(e,n,t,r),t!==null){var i=gn();Un(t,e,r,i),gu(t,n,r)}}function If(e,n,t){var r=yt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fu(e))pu(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var f=n.lastRenderedState,E=a(f,t);if(i.hasEagerState=!0,i.eagerState=E,Bn(E,f)){var j=n.interleaved;j===null?(i.next=i,cl(n)):(i.next=j.next,j.next=i),n.interleaved=i;return}}catch{}finally{}t=Ws(e,n,i,r),t!==null&&(i=gn(),Un(t,e,r,i),gu(t,n,r))}}function fu(e){var n=e.alternate;return e===qe||n!==null&&n===qe}function pu(e,n){Hr=Vi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function gu(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,La(e,t)}}var Hi={readContext:On,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Mf={readContext:On,useCallback:function(e,n){return qn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:ru,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ui(4194308,4,lu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ui(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ui(4,2,e,n)},useMemo:function(e,n){var t=qn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=qn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Cf.bind(null,qe,e),[r.memoizedState,e]},useRef:function(e){var n=qn();return e={current:e},n.memoizedState=e},useState:nu,useDebugValue:bl,useDeferredValue:function(e){return qn().memoizedState=e},useTransition:function(){var e=nu(!1),n=e[0];return e=Lf.bind(null,e[1]),qn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=qe,i=qn();if(He){if(t===void 0)throw Error(l(407));t=t()}else{if(t=n(),nn===null)throw Error(l(349));(Rt&30)!==0||Qs(r,n,t)}i.memoizedState=t;var a={value:t,getSnapshot:n};return i.queue=a,ru(Ys.bind(null,r,a,e),[e]),r.flags|=2048,Jr(9,Zs.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=qn(),n=nn.identifierPrefix;if(He){var t=Yn,r=Zn;t=(r&~(1<<32-Rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Gr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=_f++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ef={readContext:On,useCallback:su,useContext:On,useEffect:Tl,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:au,useMemo:uu,useReducer:kl,useRef:tu,useState:function(){return kl(qr)},useDebugValue:bl,useDeferredValue:function(e){var n=An();return du(n,Ye.memoizedState,e)},useTransition:function(){var e=kl(qr)[0],n=An().memoizedState;return[e,n]},useMutableSource:Ks,useSyncExternalStore:$s,useId:cu,unstable_isNewReconciler:!1},Of={readContext:On,useCallback:su,useContext:On,useEffect:Tl,useImperativeHandle:ou,useInsertionEffect:iu,useLayoutEffect:au,useMemo:uu,useReducer:xl,useRef:tu,useState:function(){return xl(qr)},useDebugValue:bl,useDeferredValue:function(e){var n=An();return Ye===null?n.memoizedState=e:du(n,Ye.memoizedState,e)},useTransition:function(){var e=xl(qr)[0],n=An().memoizedState;return[e,n]},useMutableSource:Ks,useSyncExternalStore:$s,useId:cu,unstable_isNewReconciler:!1};function Fn(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function _l(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Gi={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=gn(),i=yt(e),a=et(r,i);a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,i),n!==null&&(Un(n,e,i,r),Bi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=gn(),i=yt(e),a=et(r,i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=gt(e,a,i),n!==null&&(Un(n,e,i,r),Bi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=gn(),r=yt(e),i=et(t,r);i.tag=2,n!=null&&(i.callback=n),n=gt(e,i,r),n!==null&&(Un(n,e,r,t),Bi(n,e,r))}};function hu(e,n,t,r,i,a,f){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,f):n.prototype&&n.prototype.isPureReactComponent?!Nr(t,r)||!Nr(i,a):!0}function mu(e,n,t){var r=!1,i=ct,a=n.contextType;return typeof a=="object"&&a!==null?a=On(a):(i=mn(n)?Ot:sn.current,r=n.contextTypes,a=(r=r!=null)?nr(e,i):ct),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Gi,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function wu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Gi.enqueueReplaceState(n,n.state,null)}function Ll(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},fl(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=On(a):(a=mn(n)?Ot:sn.current,i.context=nr(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(_l(e,n,a,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Gi.enqueueReplaceState(i,i.state,null),zi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,n){try{var t="",r=n;do t+=ne(r),r=r.return;while(r);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function Cl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Il(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Af=typeof WeakMap=="function"?WeakMap:Map;function yu(e,n,t){t=et(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Yi||(Yi=!0,Wl=r),Il(e,n)},t}function vu(e,n,t){t=et(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Il(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){Il(e,n),typeof r!="function"&&(mt===null?mt=new Set([this]):mt.add(this));var f=n.stack;this.componentDidCatch(n.value,{componentStack:f!==null?f:""})}),t}function Su(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Af;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=qf.bind(null,e,n,t),n.then(e,e))}function ku(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function xu(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=et(-1,1),n.tag=2,gt(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Nf=B.ReactCurrentOwner,wn=!1;function pn(e,n,t,r){n.child=e===null?Us(n,null,t,r):ar(n,e.child,t,r)}function Tu(e,n,t,r,i){t=t.render;var a=n.ref;return or(n,i),r=vl(e,n,t,r,a,i),t=Sl(),e!==null&&!wn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nt(e,n,i)):(He&&t&&tl(n),n.flags|=1,pn(e,n,r,i),n.child)}function bu(e,n,t,r,i){if(e===null){var a=t.type;return typeof a=="function"&&!Ql(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,_u(e,n,a,r,i)):(e=ia(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,(e.lanes&i)===0){var f=a.memoizedProps;if(t=t.compare,t=t!==null?t:Nr,t(f,r)&&e.ref===n.ref)return nt(e,n,i)}return n.flags|=1,e=St(a,r),e.ref=n.ref,e.return=n,n.child=e}function _u(e,n,t,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===n.ref)if(wn=!1,n.pendingProps=r=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(wn=!0);else return n.lanes=e.lanes,nt(e,n,i)}return Ml(e,n,t,r,i)}function Lu(e,n,t){var r=n.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},De(cr,Ln),Ln|=t;else{if((t&1073741824)===0)return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,De(cr,Ln),Ln|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,De(cr,Ln),Ln|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,De(cr,Ln),Ln|=r;return pn(e,n,i,t),n.child}function Cu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ml(e,n,t,r,i){var a=mn(t)?Ot:sn.current;return a=nr(n,a),or(n,i),t=vl(e,n,t,r,a,i),r=Sl(),e!==null&&!wn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nt(e,n,i)):(He&&r&&tl(n),n.flags|=1,pn(e,n,t,i),n.child)}function Iu(e,n,t,r,i){if(mn(t)){var a=!0;Mi(n)}else a=!1;if(or(n,i),n.stateNode===null)Ji(e,n),mu(n,t,r),Ll(n,t,r,i),r=!0;else if(e===null){var f=n.stateNode,E=n.memoizedProps;f.props=E;var j=f.context,W=t.contextType;typeof W=="object"&&W!==null?W=On(W):(W=mn(t)?Ot:sn.current,W=nr(n,W));var se=t.getDerivedStateFromProps,ue=typeof se=="function"||typeof f.getSnapshotBeforeUpdate=="function";ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==r||j!==W)&&wu(n,f,r,W),pt=!1;var oe=n.memoizedState;f.state=oe,zi(n,r,f,i),j=n.memoizedState,E!==r||oe!==j||hn.current||pt?(typeof se=="function"&&(_l(n,t,se,r),j=n.memoizedState),(E=pt||hu(n,t,E,r,oe,j,W))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),f.props=r,f.state=j,f.context=W,r=E):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Hs(e,n),E=n.memoizedProps,W=n.type===n.elementType?E:Fn(n.type,E),f.props=W,ue=n.pendingProps,oe=f.context,j=t.contextType,typeof j=="object"&&j!==null?j=On(j):(j=mn(t)?Ot:sn.current,j=nr(n,j));var me=t.getDerivedStateFromProps;(se=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E!==ue||oe!==j)&&wu(n,f,r,j),pt=!1,oe=n.memoizedState,f.state=oe,zi(n,r,f,i);var Se=n.memoizedState;E!==ue||oe!==Se||hn.current||pt?(typeof me=="function"&&(_l(n,t,me,r),Se=n.memoizedState),(W=pt||hu(n,t,W,r,oe,Se,j)||!1)?(se||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,Se,j),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,Se,j)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=Se),f.props=r,f.state=Se,f.context=j,r=W):(typeof f.componentDidUpdate!="function"||E===e.memoizedProps&&oe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&oe===e.memoizedState||(n.flags|=1024),r=!1)}return El(e,n,t,r,a,i)}function El(e,n,t,r,i,a){Cu(e,n);var f=(n.flags&128)!==0;if(!r&&!f)return i&&Ns(n,t,!1),nt(e,n,a);r=n.stateNode,Nf.current=n;var E=f&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&f?(n.child=ar(n,e.child,null,a),n.child=ar(n,null,E,a)):pn(e,n,E,a),n.memoizedState=r.state,i&&Ns(n,t,!0),n.child}function Mu(e){var n=e.stateNode;n.pendingContext?Os(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Os(e,n.context,!1),pl(e,n.containerInfo)}function Eu(e,n,t,r,i){return ir(),ll(i),n.flags|=256,pn(e,n,t,r),n.child}var Ol={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,n,t){var r=n.pendingProps,i=Ge.current,a=!1,f=(n.flags&128)!==0,E;if((E=f)||(E=e!==null&&e.memoizedState===null?!1:(i&2)!==0),E?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),De(Ge,i&1),e===null)return al(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(f=r.children,e=r.fallback,a?(r=n.mode,a=n.child,f={mode:"hidden",children:f},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=f):a=aa(f,r,0,null),e=Vt(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=Al(t),n.memoizedState=Ol,e):Nl(n,f));if(i=e.memoizedState,i!==null&&(E=i.dehydrated,E!==null))return Pf(e,n,f,r,E,i,t);if(a){a=r.fallback,f=n.mode,i=e.child,E=i.sibling;var j={mode:"hidden",children:r.children};return(f&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=j,n.deletions=null):(r=St(i,j),r.subtreeFlags=i.subtreeFlags&14680064),E!==null?a=St(E,a):(a=Vt(a,f,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,f=e.child.memoizedState,f=f===null?Al(t):{baseLanes:f.baseLanes|t,cachePool:null,transitions:f.transitions},a.memoizedState=f,a.childLanes=e.childLanes&~t,n.memoizedState=Ol,r}return a=e.child,e=a.sibling,r=St(a,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Nl(e,n){return n=aa({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function qi(e,n,t,r){return r!==null&&ll(r),ar(n,e.child,null,t),e=Nl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Pf(e,n,t,r,i,a,f){if(t)return n.flags&256?(n.flags&=-257,r=Cl(Error(l(422))),qi(e,n,f,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,i=n.mode,r=aa({mode:"visible",children:r.children},i,0,null),a=Vt(a,i,f,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,(n.mode&1)!==0&&ar(n,e.child,null,f),n.child.memoizedState=Al(f),n.memoizedState=Ol,a);if((n.mode&1)===0)return qi(e,n,f,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var E=r.dgst;return r=E,a=Error(l(419)),r=Cl(a,r,void 0),qi(e,n,f,r)}if(E=(f&e.childLanes)!==0,wn||E){if(r=nn,r!==null){switch(f&-f){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|f))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Xn(e,i),Un(r,e,i,-1))}return $l(),r=Cl(Error(l(421))),qi(e,n,f,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Jf.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,_n=ut(i.nextSibling),bn=n,He=!0,zn=null,e!==null&&(Mn[En++]=Zn,Mn[En++]=Yn,Mn[En++]=At,Zn=e.id,Yn=e.overflow,At=n),n=Nl(n,r.children),n.flags|=4096,n)}function Au(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),dl(e.return,n,t)}function Pl(e,n,t,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=i)}function Nu(e,n,t){var r=n.pendingProps,i=r.revealOrder,a=r.tail;if(pn(e,n,r.children,t),r=Ge.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,t,n);else if(e.tag===19)Au(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(De(Ge,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Fi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Pl(n,!1,i,t,a);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Pl(n,!0,t,null,a);break;case"together":Pl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ji(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bt|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(l(153));if(n.child!==null){for(e=n.child,t=St(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=St(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function jf(e,n,t){switch(n.tag){case 3:Mu(n),ir();break;case 5:Js(n);break;case 1:mn(n.type)&&Mi(n);break;case 4:pl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;De(ji,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(De(Ge,Ge.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?Ou(e,n,t):(De(Ge,Ge.current&1),e=nt(e,n,t),e!==null?e.sibling:null);De(Ge,Ge.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return Nu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),De(Ge,Ge.current),r)break;return null;case 22:case 23:return n.lanes=0,Lu(e,n,t)}return nt(e,n,t)}var Pu,jl,ju,Ru;Pu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},jl=function(){},ju=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jt(Gn.current);var a=null;switch(t){case"input":i=o(e,i),r=o(e,r),a=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),a=[];break;case"textarea":i=U(e,i),r=U(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Li)}xn(t,r);var f;t=null;for(W in i)if(!r.hasOwnProperty(W)&&i.hasOwnProperty(W)&&i[W]!=null)if(W==="style"){var E=i[W];for(f in E)E.hasOwnProperty(f)&&(t||(t={}),t[f]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(m.hasOwnProperty(W)?a||(a=[]):(a=a||[]).push(W,null));for(W in r){var j=r[W];if(E=i!=null?i[W]:void 0,r.hasOwnProperty(W)&&j!==E&&(j!=null||E!=null))if(W==="style")if(E){for(f in E)!E.hasOwnProperty(f)||j&&j.hasOwnProperty(f)||(t||(t={}),t[f]="");for(f in j)j.hasOwnProperty(f)&&E[f]!==j[f]&&(t||(t={}),t[f]=j[f])}else t||(a||(a=[]),a.push(W,t)),t=j;else W==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,E=E?E.__html:void 0,j!=null&&E!==j&&(a=a||[]).push(W,j)):W==="children"?typeof j!="string"&&typeof j!="number"||(a=a||[]).push(W,""+j):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(m.hasOwnProperty(W)?(j!=null&&W==="onScroll"&&Ve("scroll",e),a||E===j||(a=[])):(a=a||[]).push(W,j))}t&&(a=a||[]).push("style",t);var W=a;(n.updateQueue=W)&&(n.flags|=4)}},Ru=function(e,n,t,r){t!==r&&(n.flags|=4)};function Kr(e,n){if(!He)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Rf(e,n,t){var r=n.pendingProps;switch(rl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(n),null;case 1:return mn(n.type)&&Ii(),dn(n),null;case 3:return r=n.stateNode,sr(),Ue(hn),Ue(sn),ml(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ni(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zn!==null&&(ql(zn),zn=null))),jl(e,n),dn(n),null;case 5:gl(n);var i=jt(Wr.current);if(t=n.type,e!==null&&n.stateNode!=null)ju(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(l(166));return dn(n),null}if(e=jt(Gn.current),Ni(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[Hn]=n,r[zr]=a,e=(n.mode&1)!==0,t){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)Ve(jr[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Z(r,a),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ve("invalid",r);break;case"textarea":fe(r,a),Ve("invalid",r)}xn(t,a),i=null;for(var f in a)if(a.hasOwnProperty(f)){var E=a[f];f==="children"?typeof E=="string"?r.textContent!==E&&(a.suppressHydrationWarning!==!0&&_i(r.textContent,E,e),i=["children",E]):typeof E=="number"&&r.textContent!==""+E&&(a.suppressHydrationWarning!==!0&&_i(r.textContent,E,e),i=["children",""+E]):m.hasOwnProperty(f)&&E!=null&&f==="onScroll"&&Ve("scroll",r)}switch(t){case"input":Fe(r),C(r,a,!0);break;case"textarea":Fe(r),ge(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Li)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{f=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Le(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=f.createElement(t,{is:r.is}):(e=f.createElement(t),t==="select"&&(f=e,r.multiple?f.multiple=!0:r.size&&(f.size=r.size))):e=f.createElementNS(e,t),e[Hn]=n,e[zr]=r,Pu(e,n,!1,!1),n.stateNode=e;e:{switch(f=Gt(t,r),t){case"dialog":Ve("cancel",e),Ve("close",e),i=r;break;case"iframe":case"object":case"embed":Ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)Ve(jr[i],e);i=r;break;case"source":Ve("error",e),i=r;break;case"img":case"image":case"link":Ve("error",e),Ve("load",e),i=r;break;case"details":Ve("toggle",e),i=r;break;case"input":Z(e,r),i=o(e,r),Ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Ve("invalid",e);break;case"textarea":fe(e,r),i=U(e,r),Ve("invalid",e);break;default:i=r}xn(t,i),E=i;for(a in E)if(E.hasOwnProperty(a)){var j=E[a];a==="style"?Ct(e,j):a==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&fn(e,j)):a==="children"?typeof j=="string"?(t!=="textarea"||j!=="")&&jn(e,j):typeof j=="number"&&jn(e,""+j):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(m.hasOwnProperty(a)?j!=null&&a==="onScroll"&&Ve("scroll",e):j!=null&&N(e,a,j,f))}switch(t){case"input":Fe(e),C(e,r,!1);break;case"textarea":Fe(e),ge(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ve(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ie(e,!!r.multiple,a,!1):r.defaultValue!=null&&ie(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Li)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return dn(n),null;case 6:if(e&&n.stateNode!=null)Ru(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(l(166));if(t=jt(Wr.current),jt(Gn.current),Ni(n)){if(r=n.stateNode,t=n.memoizedProps,r[Hn]=n,(a=r.nodeValue!==t)&&(e=bn,e!==null))switch(e.tag){case 3:_i(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Hn]=n,n.stateNode=r}return dn(n),null;case 13:if(Ue(Ge),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(He&&_n!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Fs(),ir(),n.flags|=98560,a=!1;else if(a=Ni(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(l(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(l(317));a[Hn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;dn(n),a=!1}else zn!==null&&(ql(zn),zn=null),a=!0;if(!a)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(Ge.current&1)!==0?Xe===0&&(Xe=3):$l())),n.updateQueue!==null&&(n.flags|=4),dn(n),null);case 4:return sr(),jl(e,n),e===null&&Rr(n.stateNode.containerInfo),dn(n),null;case 10:return ul(n.type._context),dn(n),null;case 17:return mn(n.type)&&Ii(),dn(n),null;case 19:if(Ue(Ge),a=n.memoizedState,a===null)return dn(n),null;if(r=(n.flags&128)!==0,f=a.rendering,f===null)if(r)Kr(a,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Fi(e),f!==null){for(n.flags|=128,Kr(a,!1),r=f.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,f=a.alternate,f===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=f.childLanes,a.lanes=f.lanes,a.child=f.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=f.memoizedProps,a.memoizedState=f.memoizedState,a.updateQueue=f.updateQueue,a.type=f.type,e=f.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return De(Ge,Ge.current&1|2),n.child}e=e.sibling}a.tail!==null&&Ke()>fr&&(n.flags|=128,r=!0,Kr(a,!1),n.lanes=4194304)}else{if(!r)if(e=Fi(f),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Kr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!He)return dn(n),null}else 2*Ke()-a.renderingStartTime>fr&&t!==1073741824&&(n.flags|=128,r=!0,Kr(a,!1),n.lanes=4194304);a.isBackwards?(f.sibling=n.child,n.child=f):(t=a.last,t!==null?t.sibling=f:n.child=f,a.last=f)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Ke(),n.sibling=null,t=Ge.current,De(Ge,r?t&1|2:t&1),n):(dn(n),null);case 22:case 23:return Kl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ln&1073741824)!==0&&(dn(n),n.subtreeFlags&6&&(n.flags|=8192)):dn(n),null;case 24:return null;case 25:return null}throw Error(l(156,n.tag))}function Bf(e,n){switch(rl(n),n.tag){case 1:return mn(n.type)&&Ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sr(),Ue(hn),Ue(sn),ml(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return gl(n),null;case 13:if(Ue(Ge),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(l(340));ir()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ue(Ge),null;case 4:return sr(),null;case 10:return ul(n.type._context),null;case 22:case 23:return Kl(),null;case 24:return null;default:return null}}var Ki=!1,cn=!1,zf=typeof WeakSet=="function"?WeakSet:Set,ye=null;function dr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Je(e,n,r)}else t.current=null}function Rl(e,n,t){try{t()}catch(r){Je(e,n,r)}}var Bu=!1;function Ff(e,n){if(Ka=gi,e=hs(),Da(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var f=0,E=-1,j=-1,W=0,se=0,ue=e,oe=null;n:for(;;){for(var me;ue!==t||i!==0&&ue.nodeType!==3||(E=f+i),ue!==a||r!==0&&ue.nodeType!==3||(j=f+r),ue.nodeType===3&&(f+=ue.nodeValue.length),(me=ue.firstChild)!==null;)oe=ue,ue=me;for(;;){if(ue===e)break n;if(oe===t&&++W===i&&(E=f),oe===a&&++se===r&&(j=f),(me=ue.nextSibling)!==null)break;ue=oe,oe=ue.parentNode}ue=me}t=E===-1||j===-1?null:{start:E,end:j}}else t=null}t=t||{start:0,end:0}}else t=null;for($a={focusedElem:e,selectionRange:t},gi=!1,ye=n;ye!==null;)if(n=ye,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ye=e;else for(;ye!==null;){n=ye;try{var Se=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var ke=Se.memoizedProps,$e=Se.memoizedState,D=n.stateNode,R=D.getSnapshotBeforeUpdate(n.elementType===n.type?ke:Fn(n.type,ke),$e);D.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var V=n.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(pe){Je(n,n.return,pe)}if(e=n.sibling,e!==null){e.return=n.return,ye=e;break}ye=n.return}return Se=Bu,Bu=!1,Se}function $r(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Rl(n,t,a)}i=i.next}while(i!==r)}}function $i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Bl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function zu(e){var n=e.alternate;n!==null&&(e.alternate=null,zu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Hn],delete n[zr],delete n[Xa],delete n[kf],delete n[xf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fu(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Li));else if(r!==4&&(e=e.child,e!==null))for(zl(e,n,t),e=e.sibling;e!==null;)zl(e,n,t),e=e.sibling}function Fl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fl(e,n,t),e=e.sibling;e!==null;)Fl(e,n,t),e=e.sibling}var rn=null,Dn=!1;function ht(e,n,t){for(t=t.child;t!==null;)Vu(e,n,t),t=t.sibling}function Vu(e,n,t){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(si,t)}catch{}switch(t.tag){case 5:cn||dr(t,n);case 6:var r=rn,i=Dn;rn=null,ht(e,n,t),rn=r,Dn=i,rn!==null&&(Dn?(e=rn,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(Dn?(e=rn,t=t.stateNode,e.nodeType===8?Ya(e.parentNode,t):e.nodeType===1&&Ya(e,t),Cr(e)):Ya(rn,t.stateNode));break;case 4:r=rn,i=Dn,rn=t.stateNode.containerInfo,Dn=!0,ht(e,n,t),rn=r,Dn=i;break;case 0:case 11:case 14:case 15:if(!cn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,f=a.destroy;a=a.tag,f!==void 0&&((a&2)!==0||(a&4)!==0)&&Rl(t,n,f),i=i.next}while(i!==r)}ht(e,n,t);break;case 1:if(!cn&&(dr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(E){Je(t,n,E)}ht(e,n,t);break;case 21:ht(e,n,t);break;case 22:t.mode&1?(cn=(r=cn)||t.memoizedState!==null,ht(e,n,t),cn=r):ht(e,n,t);break;default:ht(e,n,t)}}function Uu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zf),n.forEach(function(r){var i=Kf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Vn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var a=e,f=n,E=f;e:for(;E!==null;){switch(E.tag){case 5:rn=E.stateNode,Dn=!1;break e;case 3:rn=E.stateNode.containerInfo,Dn=!0;break e;case 4:rn=E.stateNode.containerInfo,Dn=!0;break e}E=E.return}if(rn===null)throw Error(l(160));Vu(a,f,i),rn=null,Dn=!1;var j=i.alternate;j!==null&&(j.return=null),i.return=null}catch(W){Je(i,n,W)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Wu(n,e),n=n.sibling}function Wu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Vn(n,e),Jn(e),r&4){try{$r(3,e,e.return),$i(3,e)}catch(ke){Je(e,e.return,ke)}try{$r(5,e,e.return)}catch(ke){Je(e,e.return,ke)}}break;case 1:Vn(n,e),Jn(e),r&512&&t!==null&&dr(t,t.return);break;case 5:if(Vn(n,e),Jn(e),r&512&&t!==null&&dr(t,t.return),e.flags&32){var i=e.stateNode;try{jn(i,"")}catch(ke){Je(e,e.return,ke)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,f=t!==null?t.memoizedProps:a,E=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{E==="input"&&a.type==="radio"&&a.name!=null&&G(i,a),Gt(E,f);var W=Gt(E,a);for(f=0;f<j.length;f+=2){var se=j[f],ue=j[f+1];se==="style"?Ct(i,ue):se==="dangerouslySetInnerHTML"?fn(i,ue):se==="children"?jn(i,ue):N(i,se,ue,W)}switch(E){case"input":O(i,a);break;case"textarea":we(i,a);break;case"select":var oe=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var me=a.value;me!=null?ie(i,!!a.multiple,me,!1):oe!==!!a.multiple&&(a.defaultValue!=null?ie(i,!!a.multiple,a.defaultValue,!0):ie(i,!!a.multiple,a.multiple?[]:"",!1))}i[zr]=a}catch(ke){Je(e,e.return,ke)}}break;case 6:if(Vn(n,e),Jn(e),r&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(ke){Je(e,e.return,ke)}}break;case 3:if(Vn(n,e),Jn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Cr(n.containerInfo)}catch(ke){Je(e,e.return,ke)}break;case 4:Vn(n,e),Jn(e);break;case 13:Vn(n,e),Jn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ul=Ke())),r&4&&Uu(e);break;case 22:if(se=t!==null&&t.memoizedState!==null,e.mode&1?(cn=(W=cn)||se,Vn(n,e),cn=W):Vn(n,e),Jn(e),r&8192){if(W=e.memoizedState!==null,(e.stateNode.isHidden=W)&&!se&&(e.mode&1)!==0)for(ye=e,se=e.child;se!==null;){for(ue=ye=se;ye!==null;){switch(oe=ye,me=oe.child,oe.tag){case 0:case 11:case 14:case 15:$r(4,oe,oe.return);break;case 1:dr(oe,oe.return);var Se=oe.stateNode;if(typeof Se.componentWillUnmount=="function"){r=oe,t=oe.return;try{n=r,Se.props=n.memoizedProps,Se.state=n.memoizedState,Se.componentWillUnmount()}catch(ke){Je(r,t,ke)}}break;case 5:dr(oe,oe.return);break;case 22:if(oe.memoizedState!==null){qu(ue);continue}}me!==null?(me.return=oe,ye=me):qu(ue)}se=se.sibling}e:for(se=null,ue=e;;){if(ue.tag===5){if(se===null){se=ue;try{i=ue.stateNode,W?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(E=ue.stateNode,j=ue.memoizedProps.style,f=j!=null&&j.hasOwnProperty("display")?j.display:null,E.style.display=We("display",f))}catch(ke){Je(e,e.return,ke)}}}else if(ue.tag===6){if(se===null)try{ue.stateNode.nodeValue=W?"":ue.memoizedProps}catch(ke){Je(e,e.return,ke)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;se===ue&&(se=null),ue=ue.return}se===ue&&(se=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:Vn(n,e),Jn(e),r&4&&Uu(e);break;case 21:break;default:Vn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Fu(t)){var r=t;break e}t=t.return}throw Error(l(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(jn(i,""),r.flags&=-33);var a=Du(e);Fl(e,a,i);break;case 3:case 4:var f=r.stateNode.containerInfo,E=Du(e);zl(e,E,f);break;default:throw Error(l(161))}}catch(j){Je(e,e.return,j)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Df(e,n,t){ye=e,Hu(e)}function Hu(e,n,t){for(var r=(e.mode&1)!==0;ye!==null;){var i=ye,a=i.child;if(i.tag===22&&r){var f=i.memoizedState!==null||Ki;if(!f){var E=i.alternate,j=E!==null&&E.memoizedState!==null||cn;E=Ki;var W=cn;if(Ki=f,(cn=j)&&!W)for(ye=i;ye!==null;)f=ye,j=f.child,f.tag===22&&f.memoizedState!==null?Ju(i):j!==null?(j.return=f,ye=j):Ju(i);for(;a!==null;)ye=a,Hu(a),a=a.sibling;ye=i,Ki=E,cn=W}Gu(e)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,ye=a):Gu(e)}}function Gu(e){for(;ye!==null;){var n=ye;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:cn||$i(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!cn)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Fn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&qs(n,a,r);break;case 3:var f=n.updateQueue;if(f!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qs(n,f,t)}break;case 5:var E=n.stateNode;if(t===null&&n.flags&4){t=E;var j=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&t.focus();break;case"img":j.src&&(t.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var W=n.alternate;if(W!==null){var se=W.memoizedState;if(se!==null){var ue=se.dehydrated;ue!==null&&Cr(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}cn||n.flags&512&&Bl(n)}catch(oe){Je(n,n.return,oe)}}if(n===e){ye=null;break}if(t=n.sibling,t!==null){t.return=n.return,ye=t;break}ye=n.return}}function qu(e){for(;ye!==null;){var n=ye;if(n===e){ye=null;break}var t=n.sibling;if(t!==null){t.return=n.return,ye=t;break}ye=n.return}}function Ju(e){for(;ye!==null;){var n=ye;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$i(4,n)}catch(j){Je(n,t,j)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(j){Je(n,i,j)}}var a=n.return;try{Bl(n)}catch(j){Je(n,a,j)}break;case 5:var f=n.return;try{Bl(n)}catch(j){Je(n,f,j)}}}catch(j){Je(n,n.return,j)}if(n===e){ye=null;break}var E=n.sibling;if(E!==null){E.return=n.return,ye=E;break}ye=n.return}}var Vf=Math.ceil,Qi=B.ReactCurrentDispatcher,Dl=B.ReactCurrentOwner,Nn=B.ReactCurrentBatchConfig,Pe=0,nn=null,Qe=null,an=0,Ln=0,cr=dt(0),Xe=0,Qr=null,Bt=0,Zi=0,Vl=0,Zr=null,yn=null,Ul=0,fr=1/0,tt=null,Yi=!1,Wl=null,mt=null,Xi=!1,wt=null,ea=0,Yr=0,Hl=null,na=-1,ta=0;function gn(){return(Pe&6)!==0?Ke():na!==-1?na:na=Ke()}function yt(e){return(e.mode&1)===0?1:(Pe&2)!==0&&an!==0?an&-an:bf.transition!==null?(ta===0&&(ta=Do()),ta):(e=ze,e!==0||(e=window.event,e=e===void 0?16:$o(e.type)),e)}function Un(e,n,t,r){if(50<Yr)throw Yr=0,Hl=null,Error(l(185));xr(e,t,r),((Pe&2)===0||e!==nn)&&(e===nn&&((Pe&2)===0&&(Zi|=t),Xe===4&&vt(e,an)),vn(e,r),t===1&&Pe===0&&(n.mode&1)===0&&(fr=Ke()+500,Ei&&ft()))}function vn(e,n){var t=e.callbackNode;Tc(e,n);var r=ci(e,e===nn?an:0);if(r===0)t!==null&&Bo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Bo(t),n===1)e.tag===0?Tf($u.bind(null,e)):Ps($u.bind(null,e)),vf(function(){(Pe&6)===0&&ft()}),t=null;else{switch(Vo(r)){case 1:t=Ta;break;case 4:t=zo;break;case 16:t=oi;break;case 536870912:t=Fo;break;default:t=oi}t=rd(t,Ku.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ku(e,n){if(na=-1,ta=0,(Pe&6)!==0)throw Error(l(327));var t=e.callbackNode;if(pr()&&e.callbackNode!==t)return null;var r=ci(e,e===nn?an:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=ra(e,r);else{n=r;var i=Pe;Pe|=2;var a=Zu();(nn!==e||an!==n)&&(tt=null,fr=Ke()+500,Ft(e,n));do try{Hf();break}catch(E){Qu(e,E)}while(!0);sl(),Qi.current=a,Pe=i,Qe!==null?n=0:(nn=null,an=0,n=Xe)}if(n!==0){if(n===2&&(i=ba(e),i!==0&&(r=i,n=Gl(e,i))),n===1)throw t=Qr,Ft(e,0),vt(e,r),vn(e,Ke()),t;if(n===6)vt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Uf(i)&&(n=ra(e,r),n===2&&(a=ba(e),a!==0&&(r=a,n=Gl(e,a))),n===1))throw t=Qr,Ft(e,0),vt(e,r),vn(e,Ke()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(l(345));case 2:Dt(e,yn,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(n=Ul+500-Ke(),10<n)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Za(Dt.bind(null,e,yn,tt),n);break}Dt(e,yn,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var f=31-Rn(r);a=1<<f,f=n[f],f>i&&(i=f),r&=~a}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vf(r/1960))-r,10<r){e.timeoutHandle=Za(Dt.bind(null,e,yn,tt),r);break}Dt(e,yn,tt);break;case 5:Dt(e,yn,tt);break;default:throw Error(l(329))}}}return vn(e,Ke()),e.callbackNode===t?Ku.bind(null,e):null}function Gl(e,n){var t=Zr;return e.current.memoizedState.isDehydrated&&(Ft(e,n).flags|=256),e=ra(e,n),e!==2&&(n=yn,yn=t,n!==null&&ql(n)),e}function ql(e){yn===null?yn=e:yn.push.apply(yn,e)}function Uf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],a=i.getSnapshot;i=i.value;try{if(!Bn(a(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function vt(e,n){for(n&=~Vl,n&=~Zi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Rn(n),r=1<<t;e[t]=-1,n&=~r}}function $u(e){if((Pe&6)!==0)throw Error(l(327));pr();var n=ci(e,0);if((n&1)===0)return vn(e,Ke()),null;var t=ra(e,n);if(e.tag!==0&&t===2){var r=ba(e);r!==0&&(n=r,t=Gl(e,r))}if(t===1)throw t=Qr,Ft(e,0),vt(e,n),vn(e,Ke()),t;if(t===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Dt(e,yn,tt),vn(e,Ke()),null}function Jl(e,n){var t=Pe;Pe|=1;try{return e(n)}finally{Pe=t,Pe===0&&(fr=Ke()+500,Ei&&ft())}}function zt(e){wt!==null&&wt.tag===0&&(Pe&6)===0&&pr();var n=Pe;Pe|=1;var t=Nn.transition,r=ze;try{if(Nn.transition=null,ze=1,e)return e()}finally{ze=r,Nn.transition=t,Pe=n,(Pe&6)===0&&ft()}}function Kl(){Ln=cr.current,Ue(cr)}function Ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,yf(t)),Qe!==null)for(t=Qe.return;t!==null;){var r=t;switch(rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ii();break;case 3:sr(),Ue(hn),Ue(sn),ml();break;case 5:gl(r);break;case 4:sr();break;case 13:Ue(Ge);break;case 19:Ue(Ge);break;case 10:ul(r.type._context);break;case 22:case 23:Kl()}t=t.return}if(nn=e,Qe=e=St(e.current,null),an=Ln=n,Xe=0,Qr=null,Vl=Zi=Bt=0,yn=Zr=null,Pt!==null){for(n=0;n<Pt.length;n++)if(t=Pt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,a=t.pending;if(a!==null){var f=a.next;a.next=i,r.next=f}t.pending=r}Pt=null}return e}function Qu(e,n){do{var t=Qe;try{if(sl(),Di.current=Hi,Vi){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vi=!1}if(Rt=0,en=Ye=qe=null,Hr=!1,Gr=0,Dl.current=null,t===null||t.return===null){Xe=1,Qr=n,Qe=null;break}e:{var a=e,f=t.return,E=t,j=n;if(n=an,E.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var W=j,se=E,ue=se.tag;if((se.mode&1)===0&&(ue===0||ue===11||ue===15)){var oe=se.alternate;oe?(se.updateQueue=oe.updateQueue,se.memoizedState=oe.memoizedState,se.lanes=oe.lanes):(se.updateQueue=null,se.memoizedState=null)}var me=ku(f);if(me!==null){me.flags&=-257,xu(me,f,E,a,n),me.mode&1&&Su(a,W,n),n=me,j=W;var Se=n.updateQueue;if(Se===null){var ke=new Set;ke.add(j),n.updateQueue=ke}else Se.add(j);break e}else{if((n&1)===0){Su(a,W,n),$l();break e}j=Error(l(426))}}else if(He&&E.mode&1){var $e=ku(f);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),xu($e,f,E,a,n),ll(ur(j,E));break e}}a=j=ur(j,E),Xe!==4&&(Xe=2),Zr===null?Zr=[a]:Zr.push(a),a=f;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var D=yu(a,j,n);Gs(a,D);break e;case 1:E=j;var R=a.type,V=a.stateNode;if((a.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(mt===null||!mt.has(V)))){a.flags|=65536,n&=-n,a.lanes|=n;var pe=vu(a,E,n);Gs(a,pe);break e}}a=a.return}while(a!==null)}Xu(t)}catch(xe){n=xe,Qe===t&&t!==null&&(Qe=t=t.return);continue}break}while(!0)}function Zu(){var e=Qi.current;return Qi.current=Hi,e===null?Hi:e}function $l(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),nn===null||(Bt&268435455)===0&&(Zi&268435455)===0||vt(nn,an)}function ra(e,n){var t=Pe;Pe|=2;var r=Zu();(nn!==e||an!==n)&&(tt=null,Ft(e,n));do try{Wf();break}catch(i){Qu(e,i)}while(!0);if(sl(),Pe=t,Qi.current=r,Qe!==null)throw Error(l(261));return nn=null,an=0,Xe}function Wf(){for(;Qe!==null;)Yu(Qe)}function Hf(){for(;Qe!==null&&!gc();)Yu(Qe)}function Yu(e){var n=td(e.alternate,e,Ln);e.memoizedProps=e.pendingProps,n===null?Xu(e):Qe=n,Dl.current=null}function Xu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Rf(t,n,Ln),t!==null){Qe=t;return}}else{if(t=Bf(t,n),t!==null){t.flags&=32767,Qe=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Qe=null;return}}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);Xe===0&&(Xe=5)}function Dt(e,n,t){var r=ze,i=Nn.transition;try{Nn.transition=null,ze=1,Gf(e,n,t,r)}finally{Nn.transition=i,ze=r}return null}function Gf(e,n,t,r){do pr();while(wt!==null);if((Pe&6)!==0)throw Error(l(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(bc(e,a),e===nn&&(Qe=nn=null,an=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Xi||(Xi=!0,rd(oi,function(){return pr(),null})),a=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||a){a=Nn.transition,Nn.transition=null;var f=ze;ze=1;var E=Pe;Pe|=4,Dl.current=null,Ff(e,t),Wu(t,e),cf($a),gi=!!Ka,$a=Ka=null,e.current=t,Df(t),hc(),Pe=E,ze=f,Nn.transition=a}else e.current=t;if(Xi&&(Xi=!1,wt=e,ea=i),a=e.pendingLanes,a===0&&(mt=null),yc(t.stateNode),vn(e,Ke()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yi)throw Yi=!1,e=Wl,Wl=null,e;return(ea&1)!==0&&e.tag!==0&&pr(),a=e.pendingLanes,(a&1)!==0?e===Hl?Yr++:(Yr=0,Hl=e):Yr=0,ft(),null}function pr(){if(wt!==null){var e=Vo(ea),n=Nn.transition,t=ze;try{if(Nn.transition=null,ze=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,ea=0,(Pe&6)!==0)throw Error(l(331));var i=Pe;for(Pe|=4,ye=e.current;ye!==null;){var a=ye,f=a.child;if((ye.flags&16)!==0){var E=a.deletions;if(E!==null){for(var j=0;j<E.length;j++){var W=E[j];for(ye=W;ye!==null;){var se=ye;switch(se.tag){case 0:case 11:case 15:$r(8,se,a)}var ue=se.child;if(ue!==null)ue.return=se,ye=ue;else for(;ye!==null;){se=ye;var oe=se.sibling,me=se.return;if(zu(se),se===W){ye=null;break}if(oe!==null){oe.return=me,ye=oe;break}ye=me}}}var Se=a.alternate;if(Se!==null){var ke=Se.child;if(ke!==null){Se.child=null;do{var $e=ke.sibling;ke.sibling=null,ke=$e}while(ke!==null)}}ye=a}}if((a.subtreeFlags&2064)!==0&&f!==null)f.return=a,ye=f;else e:for(;ye!==null;){if(a=ye,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:$r(9,a,a.return)}var D=a.sibling;if(D!==null){D.return=a.return,ye=D;break e}ye=a.return}}var R=e.current;for(ye=R;ye!==null;){f=ye;var V=f.child;if((f.subtreeFlags&2064)!==0&&V!==null)V.return=f,ye=V;else e:for(f=R;ye!==null;){if(E=ye,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:$i(9,E)}}catch(xe){Je(E,E.return,xe)}if(E===f){ye=null;break e}var pe=E.sibling;if(pe!==null){pe.return=E.return,ye=pe;break e}ye=E.return}}if(Pe=i,ft(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{ze=t,Nn.transition=n}}return!1}function ed(e,n,t){n=ur(t,n),n=yu(e,n,1),e=gt(e,n,1),n=gn(),e!==null&&(xr(e,1,n),vn(e,n))}function Je(e,n,t){if(e.tag===3)ed(e,e,t);else for(;n!==null;){if(n.tag===3){ed(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mt===null||!mt.has(r))){e=ur(t,e),e=vu(n,e,1),n=gt(n,e,1),e=gn(),n!==null&&(xr(n,1,e),vn(n,e));break}}n=n.return}}function qf(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=gn(),e.pingedLanes|=e.suspendedLanes&t,nn===e&&(an&t)===t&&(Xe===4||Xe===3&&(an&130023424)===an&&500>Ke()-Ul?Ft(e,0):Vl|=t),vn(e,n)}function nd(e,n){n===0&&((e.mode&1)===0?n=1:(n=di,di<<=1,(di&130023424)===0&&(di=4194304)));var t=gn();e=Xn(e,n),e!==null&&(xr(e,n,t),vn(e,t))}function Jf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),nd(e,t)}function Kf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(n),nd(e,t)}var td;td=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||hn.current)wn=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return wn=!1,jf(e,n,t);wn=(e.flags&131072)!==0}else wn=!1,He&&(n.flags&1048576)!==0&&js(n,Ai,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ji(e,n),e=n.pendingProps;var i=nr(n,sn.current);or(n,t),i=vl(null,n,r,e,i,t);var a=Sl();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,mn(r)?(a=!0,Mi(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fl(n),i.updater=Gi,n.stateNode=i,i._reactInternals=n,Ll(n,r,e,t),n=El(null,n,r,!0,a,t)):(n.tag=0,He&&a&&tl(n),pn(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ji(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Qf(r),e=Fn(r,e),i){case 0:n=Ml(null,n,r,e,t);break e;case 1:n=Iu(null,n,r,e,t);break e;case 11:n=Tu(null,n,r,e,t);break e;case 14:n=bu(null,n,r,Fn(r.type,e),t);break e}throw Error(l(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fn(r,i),Ml(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fn(r,i),Iu(e,n,r,i,t);case 3:e:{if(Mu(n),e===null)throw Error(l(387));r=n.pendingProps,a=n.memoizedState,i=a.element,Hs(e,n),zi(n,r,null,t);var f=n.memoizedState;if(r=f.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=ur(Error(l(423)),n),n=Eu(e,n,r,t,i);break e}else if(r!==i){i=ur(Error(l(424)),n),n=Eu(e,n,r,t,i);break e}else for(_n=ut(n.stateNode.containerInfo.firstChild),bn=n,He=!0,zn=null,t=Us(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ir(),r===i){n=nt(e,n,t);break e}pn(e,n,r,t)}n=n.child}return n;case 5:return Js(n),e===null&&al(n),r=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,f=i.children,Qa(r,i)?f=null:a!==null&&Qa(r,a)&&(n.flags|=32),Cu(e,n),pn(e,n,f,t),n.child;case 6:return e===null&&al(n),null;case 13:return Ou(e,n,t);case 4:return pl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ar(n,null,r,t):pn(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fn(r,i),Tu(e,n,r,i,t);case 7:return pn(e,n,n.pendingProps,t),n.child;case 8:return pn(e,n,n.pendingProps.children,t),n.child;case 12:return pn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,a=n.memoizedProps,f=i.value,De(ji,r._currentValue),r._currentValue=f,a!==null)if(Bn(a.value,f)){if(a.children===i.children&&!hn.current){n=nt(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var E=a.dependencies;if(E!==null){f=a.child;for(var j=E.firstContext;j!==null;){if(j.context===r){if(a.tag===1){j=et(-1,t&-t),j.tag=2;var W=a.updateQueue;if(W!==null){W=W.shared;var se=W.pending;se===null?j.next=j:(j.next=se.next,se.next=j),W.pending=j}}a.lanes|=t,j=a.alternate,j!==null&&(j.lanes|=t),dl(a.return,t,n),E.lanes|=t;break}j=j.next}}else if(a.tag===10)f=a.type===n.type?null:a.child;else if(a.tag===18){if(f=a.return,f===null)throw Error(l(341));f.lanes|=t,E=f.alternate,E!==null&&(E.lanes|=t),dl(f,t,n),f=a.sibling}else f=a.child;if(f!==null)f.return=a;else for(f=a;f!==null;){if(f===n){f=null;break}if(a=f.sibling,a!==null){a.return=f.return,f=a;break}f=f.return}a=f}pn(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,or(n,t),i=On(i),r=r(i),n.flags|=1,pn(e,n,r,t),n.child;case 14:return r=n.type,i=Fn(r,n.pendingProps),i=Fn(r.type,i),bu(e,n,r,i,t);case 15:return _u(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Fn(r,i),Ji(e,n),n.tag=1,mn(r)?(e=!0,Mi(n)):e=!1,or(n,t),mu(n,r,i),Ll(n,r,i,t),El(null,n,r,!0,e,t);case 19:return Nu(e,n,t);case 22:return Lu(e,n,t)}throw Error(l(156,n.tag))};function rd(e,n){return Ro(e,n)}function $f(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,n,t,r){return new $f(e,n,t,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qf(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===P)return 11;if(e===Q)return 14}return 2}function St(e,n){var t=e.alternate;return t===null?(t=Pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ia(e,n,t,r,i,a){var f=2;if(r=e,typeof e=="function")Ql(e)&&(f=1);else if(typeof e=="string")f=5;else e:switch(e){case q:return Vt(t.children,i,a,n);case le:f=8,i|=8;break;case J:return e=Pn(12,t,n,i|2),e.elementType=J,e.lanes=a,e;case K:return e=Pn(13,t,n,i),e.elementType=K,e.lanes=a,e;case p:return e=Pn(19,t,n,i),e.elementType=p,e.lanes=a,e;case Y:return aa(t,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case de:f=10;break e;case be:f=9;break e;case P:f=11;break e;case Q:f=14;break e;case Te:f=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return n=Pn(f,t,n,i),n.elementType=e,n.type=r,n.lanes=a,n}function Vt(e,n,t,r){return e=Pn(7,e,r,n),e.lanes=t,e}function aa(e,n,t,r){return e=Pn(22,e,r,n),e.elementType=Y,e.lanes=t,e.stateNode={isHidden:!1},e}function Zl(e,n,t){return e=Pn(6,e,null,n),e.lanes=t,e}function Yl(e,n,t){return n=Pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xl(e,n,t,r,i,a,f,E,j){return e=new Zf(e,n,t,E,j),n===1?(n=1,a===!0&&(n|=8)):n=0,a=Pn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(a),e}function Yf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function id(e){if(!e)return ct;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(l(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(mn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(l(171))}if(e.tag===1){var t=e.type;if(mn(t))return As(e,t,n)}return n}function ad(e,n,t,r,i,a,f,E,j){return e=Xl(t,r,!0,e,i,a,f,E,j),e.context=id(null),t=e.current,r=gn(),i=yt(t),a=et(r,i),a.callback=n??null,gt(t,a,i),e.current.lanes=i,xr(e,i,r),vn(e,r),e}function la(e,n,t,r){var i=n.current,a=gn(),f=yt(i);return t=id(t),n.context===null?n.context=t:n.pendingContext=t,n=et(a,f),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=gt(i,n,f),e!==null&&(Un(e,i,f,a),Bi(e,i,f)),f}function oa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function eo(e,n){ld(e,n),(e=e.alternate)&&ld(e,n)}function Xf(){return null}var od=typeof reportError=="function"?reportError:function(e){console.error(e)};function no(e){this._internalRoot=e}sa.prototype.render=no.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(l(409));la(e,n,null,null)},sa.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){la(null,e,null,null)}),n[$n]=null}};function sa(e){this._internalRoot=e}sa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ho();e={blockedOn:null,target:e,priority:n};for(var t=0;t<lt.length&&n!==0&&n<lt[t].priority;t++);lt.splice(t,0,e),t===0&&Jo(e)}};function to(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function ep(e,n,t,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var W=oa(f);a.call(W)}}var f=ad(n,r,e,0,null,!1,!1,"",sd);return e._reactRootContainer=f,e[$n]=f.current,Rr(e.nodeType===8?e.parentNode:e),zt(),f}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var E=r;r=function(){var W=oa(j);E.call(W)}}var j=Xl(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=j,e[$n]=j.current,Rr(e.nodeType===8?e.parentNode:e),zt(function(){la(n,j,t,r)}),j}function da(e,n,t,r,i){var a=t._reactRootContainer;if(a){var f=a;if(typeof i=="function"){var E=i;i=function(){var j=oa(f);E.call(j)}}la(n,f,e,i)}else f=ep(t,n,e,i,r);return oa(f)}Uo=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=kr(n.pendingLanes);t!==0&&(La(n,t|1),vn(n,Ke()),(Pe&6)===0&&(fr=Ke()+500,ft()))}break;case 13:zt(function(){var r=Xn(e,1);if(r!==null){var i=gn();Un(r,e,1,i)}}),eo(e,1)}},Ca=function(e){if(e.tag===13){var n=Xn(e,134217728);if(n!==null){var t=gn();Un(n,e,134217728,t)}eo(e,134217728)}},Wo=function(e){if(e.tag===13){var n=yt(e),t=Xn(e,n);if(t!==null){var r=gn();Un(t,e,n,r)}eo(e,n)}},Ho=function(){return ze},Go=function(e,n){var t=ze;try{return ze=e,n()}finally{ze=t}},wr=function(e,n,t){switch(n){case"input":if(O(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ci(r);if(!i)throw Error(l(90));kn(r),O(r,i)}}}break;case"textarea":we(e,t);break;case"select":n=t.value,n!=null&&ie(e,!!t.multiple,n,!1)}},Mo=Jl,Eo=zt;var np={usingClientEntryPoint:!1,Events:[Fr,Xt,Ci,Co,Io,Jl]},Xr={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tp={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Po(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Xf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{si=ca.inject(tp),Wn=ca}catch{}}return Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np,Sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!to(n))throw Error(l(200));return Yf(e,n,null,t)},Sn.createRoot=function(e,n){if(!to(e))throw Error(l(299));var t=!1,r="",i=od;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Xl(e,1,!1,null,null,t,!1,r,i),e[$n]=n.current,Rr(e.nodeType===8?e.parentNode:e),new no(n)},Sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Po(n),e=e===null?null:e.stateNode,e},Sn.flushSync=function(e){return zt(e)},Sn.hydrate=function(e,n,t){if(!ua(n))throw Error(l(200));return da(null,e,n,!0,t)},Sn.hydrateRoot=function(e,n,t){if(!to(e))throw Error(l(405));var r=t!=null&&t.hydratedSources||null,i=!1,a="",f=od;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),n=ad(n,null,e,1,t??null,i,!1,a,f),e[$n]=n.current,Rr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new sa(n)},Sn.render=function(e,n,t){if(!ua(n))throw Error(l(200));return da(null,e,n,!1,t)},Sn.unmountComponentAtNode=function(e){if(!ua(e))throw Error(l(40));return e._reactRootContainer?(zt(function(){da(null,null,e,!1,function(){e._reactRootContainer=null,e[$n]=null})}),!0):!1},Sn.unstable_batchedUpdates=Jl,Sn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ua(t))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return da(e,n,t,!1,r)},Sn.version="18.3.1-next-f1338f8080-20240426",Sn}var md;function jd(){if(md)return ao.exports;md=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(_){console.error(_)}}return c(),ao.exports=cp(),ao.exports}var wd;function fp(){if(wd)return fa;wd=1;var c=jd();return fa.createRoot=c.createRoot,fa.hydrateRoot=c.hydrateRoot,fa}var pp=fp();jd();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(c){for(var _=1;_<arguments.length;_++){var l=arguments[_];for(var x in l)Object.prototype.hasOwnProperty.call(l,x)&&(c[x]=l[x])}return c},ti.apply(this,arguments)}var Tt;(function(c){c.Pop="POP",c.Push="PUSH",c.Replace="REPLACE"})(Tt||(Tt={}));const yd="popstate";function gp(c){c===void 0&&(c={});function _(m,u){let{pathname:d="/",search:s="",hash:g=""}=Wt(m.location.hash.substr(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),co("",{pathname:d,search:s,hash:g},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(m,u){let d=m.document.querySelector("base"),s="";if(d&&d.getAttribute("href")){let g=m.location.href,y=g.indexOf("#");s=y===-1?g:g.slice(0,y)}return s+"#"+(typeof u=="string"?u:ha(u))}function x(m,u){wa(m.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return mp(_,l,x,c)}function Ze(c,_){if(c===!1||c===null||typeof c>"u")throw new Error(_)}function wa(c,_){if(!c){typeof console<"u"&&console.warn(_);try{throw new Error(_)}catch{}}}function hp(){return Math.random().toString(36).substr(2,8)}function vd(c,_){return{usr:c.state,key:c.key,idx:_}}function co(c,_,l,x){return l===void 0&&(l=null),ti({pathname:typeof c=="string"?c:c.pathname,search:"",hash:""},typeof _=="string"?Wt(_):_,{state:l,key:_&&_.key||x||hp()})}function ha(c){let{pathname:_="/",search:l="",hash:x=""}=c;return l&&l!=="?"&&(_+=l.charAt(0)==="?"?l:"?"+l),x&&x!=="#"&&(_+=x.charAt(0)==="#"?x:"#"+x),_}function Wt(c){let _={};if(c){let l=c.indexOf("#");l>=0&&(_.hash=c.substr(l),c=c.substr(0,l));let x=c.indexOf("?");x>=0&&(_.search=c.substr(x),c=c.substr(0,x)),c&&(_.pathname=c)}return _}function mp(c,_,l,x){x===void 0&&(x={});let{window:m=document.defaultView,v5Compat:u=!1}=x,d=m.history,s=Tt.Pop,g=null,y=L();y==null&&(y=0,d.replaceState(ti({},d.state,{idx:y}),""));function L(){return(d.state||{idx:null}).idx}function S(){s=Tt.Pop;let v=L(),b=v==null?null:v-y;y=v,g&&g({action:s,location:h.location,delta:b})}function k(v,b){s=Tt.Push;let M=co(h.location,v,b);l&&l(M,v),y=L()+1;let N=vd(M,y),B=h.createHref(M);try{d.pushState(N,"",B)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;m.location.assign(B)}u&&g&&g({action:s,location:h.location,delta:1})}function w(v,b){s=Tt.Replace;let M=co(h.location,v,b);l&&l(M,v),y=L();let N=vd(M,y),B=h.createHref(M);d.replaceState(N,"",B),u&&g&&g({action:s,location:h.location,delta:0})}function I(v){let b=m.location.origin!=="null"?m.location.origin:m.location.href,M=typeof v=="string"?v:ha(v);return M=M.replace(/ $/,"%20"),Ze(b,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,b)}let h={get action(){return s},get location(){return c(m,d)},listen(v){if(g)throw new Error("A history only accepts one active listener");return m.addEventListener(yd,S),g=v,()=>{m.removeEventListener(yd,S),g=null}},createHref(v){return _(m,v)},createURL:I,encodeLocation(v){let b=I(v);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:k,replace:w,go(v){return d.go(v)}};return h}var Sd;(function(c){c.data="data",c.deferred="deferred",c.redirect="redirect",c.error="error"})(Sd||(Sd={}));function wp(c,_,l){return l===void 0&&(l="/"),yp(c,_,l)}function yp(c,_,l,x){let m=typeof _=="string"?Wt(_):_,u=bo(m.pathname||"/",l);if(u==null)return null;let d=Rd(c);vp(d);let s=null;for(let g=0;s==null&&g<d.length;++g){let y=Op(u);s=Ip(d[g],y)}return s}function Rd(c,_,l,x){_===void 0&&(_=[]),l===void 0&&(l=[]),x===void 0&&(x="");let m=(u,d,s)=>{let g={relativePath:s===void 0?u.path||"":s,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};g.relativePath.startsWith("/")&&(Ze(g.relativePath.startsWith(x),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+x+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(x.length));let y=bt([x,g.relativePath]),L=l.concat(g);u.children&&u.children.length>0&&(Ze(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Rd(u.children,_,L,y)),!(u.path==null&&!u.index)&&_.push({path:y,score:Lp(y,u.index),routesMeta:L})};return c.forEach((u,d)=>{var s;if(u.path===""||!((s=u.path)!=null&&s.includes("?")))m(u,d);else for(let g of Bd(u.path))m(u,d,g)}),_}function Bd(c){let _=c.split("/");if(_.length===0)return[];let[l,...x]=_,m=l.endsWith("?"),u=l.replace(/\?$/,"");if(x.length===0)return m?[u,""]:[u];let d=Bd(x.join("/")),s=[];return s.push(...d.map(g=>g===""?u:[u,g].join("/"))),m&&s.push(...d),s.map(g=>c.startsWith("/")&&g===""?"/":g)}function vp(c){c.sort((_,l)=>_.score!==l.score?l.score-_.score:Cp(_.routesMeta.map(x=>x.childrenIndex),l.routesMeta.map(x=>x.childrenIndex)))}const Sp=/^:[\w-]+$/,kp=3,xp=2,Tp=1,bp=10,_p=-2,kd=c=>c==="*";function Lp(c,_){let l=c.split("/"),x=l.length;return l.some(kd)&&(x+=_p),_&&(x+=xp),l.filter(m=>!kd(m)).reduce((m,u)=>m+(Sp.test(u)?kp:u===""?Tp:bp),x)}function Cp(c,_){return c.length===_.length&&c.slice(0,-1).every((x,m)=>x===_[m])?c[c.length-1]-_[_.length-1]:0}function Ip(c,_,l){let{routesMeta:x}=c,m={},u="/",d=[];for(let s=0;s<x.length;++s){let g=x[s],y=s===x.length-1,L=u==="/"?_:_.slice(u.length)||"/",S=Mp({path:g.relativePath,caseSensitive:g.caseSensitive,end:y},L),k=g.route;if(!S)return null;Object.assign(m,S.params),d.push({params:m,pathname:bt([u,S.pathname]),pathnameBase:Rp(bt([u,S.pathnameBase])),route:k}),S.pathnameBase!=="/"&&(u=bt([u,S.pathnameBase]))}return d}function Mp(c,_){typeof c=="string"&&(c={path:c,caseSensitive:!1,end:!0});let[l,x]=Ep(c.path,c.caseSensitive,c.end),m=_.match(l);if(!m)return null;let u=m[0],d=u.replace(/(.)\/+$/,"$1"),s=m.slice(1);return{params:x.reduce((y,L,S)=>{let{paramName:k,isOptional:w}=L;if(k==="*"){let h=s[S]||"";d=u.slice(0,u.length-h.length).replace(/(.)\/+$/,"$1")}const I=s[S];return w&&!I?y[k]=void 0:y[k]=(I||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:d,pattern:c}}function Ep(c,_,l){_===void 0&&(_=!1),l===void 0&&(l=!0),wa(c==="*"||!c.endsWith("*")||c.endsWith("/*"),'Route path "'+c+'" will be treated as if it were '+('"'+c.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+c.replace(/\*$/,"/*")+'".'));let x=[],m="^"+c.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,s,g)=>(x.push({paramName:s,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return c.endsWith("*")?(x.push({paramName:"*"}),m+=c==="*"||c==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?m+="\\/*$":c!==""&&c!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,_?void 0:"i"),x]}function Op(c){try{return c.split("/").map(_=>decodeURIComponent(_).replace(/\//g,"%2F")).join("/")}catch(_){return wa(!1,'The URL path "'+c+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+_+").")),c}}function bo(c,_){if(_==="/")return c;if(!c.toLowerCase().startsWith(_.toLowerCase()))return null;let l=_.endsWith("/")?_.length-1:_.length,x=c.charAt(l);return x&&x!=="/"?null:c.slice(l)||"/"}const Ap=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Np=c=>Ap.test(c);function Pp(c,_){_===void 0&&(_="/");let{pathname:l,search:x="",hash:m=""}=typeof c=="string"?Wt(c):c,u;if(l)if(Np(l))u=l;else{if(l.includes("//")){let d=l;l=l.replace(/\/\/+/g,"/"),wa(!1,"Pathnames cannot have embedded double slashes - normalizing "+(d+" -> "+l))}l.startsWith("/")?u=xd(l.substring(1),"/"):u=xd(l,_)}else u=_;return{pathname:u,search:Bp(x),hash:zp(m)}}function xd(c,_){let l=_.replace(/\/+$/,"").split("/");return c.split("/").forEach(m=>{m===".."?l.length>1&&l.pop():m!=="."&&l.push(m)}),l.length>1?l.join("/"):"/"}function so(c,_,l,x){return"Cannot include a '"+c+"' character in a manually specified "+("`to."+_+"` field ["+JSON.stringify(x)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jp(c){return c.filter((_,l)=>l===0||_.route.path&&_.route.path.length>0)}function zd(c,_){let l=jp(c);return _?l.map((x,m)=>m===l.length-1?x.pathname:x.pathnameBase):l.map(x=>x.pathnameBase)}function Fd(c,_,l,x){x===void 0&&(x=!1);let m;typeof c=="string"?m=Wt(c):(m=ti({},c),Ze(!m.pathname||!m.pathname.includes("?"),so("?","pathname","search",m)),Ze(!m.pathname||!m.pathname.includes("#"),so("#","pathname","hash",m)),Ze(!m.search||!m.search.includes("#"),so("#","search","hash",m)));let u=c===""||m.pathname==="",d=u?"/":m.pathname,s;if(d==null)s=l;else{let S=_.length-1;if(!x&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),S-=1;m.pathname=k.join("/")}s=S>=0?_[S]:"/"}let g=Pp(m,s),y=d&&d!=="/"&&d.endsWith("/"),L=(u||d===".")&&l.endsWith("/");return!g.pathname.endsWith("/")&&(y||L)&&(g.pathname+="/"),g}const bt=c=>c.join("/").replace(/\/\/+/g,"/"),Rp=c=>c.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=c=>!c||c==="?"?"":c.startsWith("?")?c:"?"+c,zp=c=>!c||c==="#"?"":c.startsWith("#")?c:"#"+c;function Fp(c){return c!=null&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.internal=="boolean"&&"data"in c}const Dd=["post","put","patch","delete"];new Set(Dd);const Dp=["get",...Dd];new Set(Dp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(c){for(var _=1;_<arguments.length;_++){var l=arguments[_];for(var x in l)Object.prototype.hasOwnProperty.call(l,x)&&(c[x]=l[x])}return c},ri.apply(this,arguments)}const _o=he.createContext(null),Vp=he.createContext(null),Ht=he.createContext(null),ya=he.createContext(null),_t=he.createContext({outlet:null,matches:[],isDataRoute:!1}),Vd=he.createContext(null);function Up(c,_){let{relative:l}=_===void 0?{}:_;ii()||Ze(!1);let{basename:x,navigator:m}=he.useContext(Ht),{hash:u,pathname:d,search:s}=Wd(c,{relative:l}),g=d;return x!=="/"&&(g=d==="/"?x:bt([x,d])),m.createHref({pathname:g,search:s,hash:u})}function ii(){return he.useContext(ya)!=null}function va(){return ii()||Ze(!1),he.useContext(ya).location}function Ud(c){he.useContext(Ht).static||he.useLayoutEffect(c)}function Wp(){let{isDataRoute:c}=he.useContext(_t);return c?rg():Hp()}function Hp(){ii()||Ze(!1);let c=he.useContext(_o),{basename:_,future:l,navigator:x}=he.useContext(Ht),{matches:m}=he.useContext(_t),{pathname:u}=va(),d=JSON.stringify(zd(m,l.v7_relativeSplatPath)),s=he.useRef(!1);return Ud(()=>{s.current=!0}),he.useCallback(function(y,L){if(L===void 0&&(L={}),!s.current)return;if(typeof y=="number"){x.go(y);return}let S=Fd(y,JSON.parse(d),u,L.relative==="path");c==null&&_!=="/"&&(S.pathname=S.pathname==="/"?_:bt([_,S.pathname])),(L.replace?x.replace:x.push)(S,L.state,L)},[_,x,d,u,c])}function Gp(){let{matches:c}=he.useContext(_t),_=c[c.length-1];return _?_.params:{}}function Wd(c,_){let{relative:l}=_===void 0?{}:_,{future:x}=he.useContext(Ht),{matches:m}=he.useContext(_t),{pathname:u}=va(),d=JSON.stringify(zd(m,x.v7_relativeSplatPath));return he.useMemo(()=>Fd(c,JSON.parse(d),u,l==="path"),[c,d,u,l])}function qp(c,_){return Jp(c,_)}function Jp(c,_,l,x){ii()||Ze(!1);let{navigator:m}=he.useContext(Ht),{matches:u}=he.useContext(_t),d=u[u.length-1],s=d?d.params:{};d&&d.pathname;let g=d?d.pathnameBase:"/";d&&d.route;let y=va(),L;if(_){var S;let v=typeof _=="string"?Wt(_):_;g==="/"||(S=v.pathname)!=null&&S.startsWith(g)||Ze(!1),L=v}else L=y;let k=L.pathname||"/",w=k;if(g!=="/"){let v=g.replace(/^\//,"").split("/");w="/"+k.replace(/^\//,"").split("/").slice(v.length).join("/")}let I=wp(c,{pathname:w}),h=Yp(I&&I.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:bt([g,m.encodeLocation?m.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?g:bt([g,m.encodeLocation?m.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),u,l,x);return _&&h?he.createElement(ya.Provider,{value:{location:ri({pathname:"/",search:"",hash:"",state:null,key:"default"},L),navigationType:Tt.Pop}},h):h}function Kp(){let c=tg(),_=Fp(c)?c.status+" "+c.statusText:c instanceof Error?c.message:JSON.stringify(c),l=c instanceof Error?c.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},_),l?he.createElement("pre",{style:m},l):null,null)}const $p=he.createElement(Kp,null);class Qp extends he.Component{constructor(_){super(_),this.state={location:_.location,revalidation:_.revalidation,error:_.error}}static getDerivedStateFromError(_){return{error:_}}static getDerivedStateFromProps(_,l){return l.location!==_.location||l.revalidation!=="idle"&&_.revalidation==="idle"?{error:_.error,location:_.location,revalidation:_.revalidation}:{error:_.error!==void 0?_.error:l.error,location:l.location,revalidation:_.revalidation||l.revalidation}}componentDidCatch(_,l){console.error("React Router caught the following error during render",_,l)}render(){return this.state.error!==void 0?he.createElement(_t.Provider,{value:this.props.routeContext},he.createElement(Vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zp(c){let{routeContext:_,match:l,children:x}=c,m=he.useContext(_o);return m&&m.static&&m.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=l.route.id),he.createElement(_t.Provider,{value:_},x)}function Yp(c,_,l,x){var m;if(_===void 0&&(_=[]),l===void 0&&(l=null),x===void 0&&(x=null),c==null){var u;if(!l)return null;if(l.errors)c=l.matches;else if((u=x)!=null&&u.v7_partialHydration&&_.length===0&&!l.initialized&&l.matches.length>0)c=l.matches;else return null}let d=c,s=(m=l)==null?void 0:m.errors;if(s!=null){let L=d.findIndex(S=>S.route.id&&(s==null?void 0:s[S.route.id])!==void 0);L>=0||Ze(!1),d=d.slice(0,Math.min(d.length,L+1))}let g=!1,y=-1;if(l&&x&&x.v7_partialHydration)for(let L=0;L<d.length;L++){let S=d[L];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(y=L),S.route.id){let{loaderData:k,errors:w}=l,I=S.route.loader&&k[S.route.id]===void 0&&(!w||w[S.route.id]===void 0);if(S.route.lazy||I){g=!0,y>=0?d=d.slice(0,y+1):d=[d[0]];break}}}return d.reduceRight((L,S,k)=>{let w,I=!1,h=null,v=null;l&&(w=s&&S.route.id?s[S.route.id]:void 0,h=S.route.errorElement||$p,g&&(y<0&&k===0?(ig("route-fallback"),I=!0,v=null):y===k&&(I=!0,v=S.route.hydrateFallbackElement||null)));let b=_.concat(d.slice(0,k+1)),M=()=>{let N;return w?N=h:I?N=v:S.route.Component?N=he.createElement(S.route.Component,null):S.route.element?N=S.route.element:N=L,he.createElement(Zp,{match:S,routeContext:{outlet:L,matches:b,isDataRoute:l!=null},children:N})};return l&&(S.route.ErrorBoundary||S.route.errorElement||k===0)?he.createElement(Qp,{location:l.location,revalidation:l.revalidation,component:h,error:w,children:M(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):M()},null)}var Hd=(function(c){return c.UseBlocker="useBlocker",c.UseRevalidator="useRevalidator",c.UseNavigateStable="useNavigate",c})(Hd||{}),Gd=(function(c){return c.UseBlocker="useBlocker",c.UseLoaderData="useLoaderData",c.UseActionData="useActionData",c.UseRouteError="useRouteError",c.UseNavigation="useNavigation",c.UseRouteLoaderData="useRouteLoaderData",c.UseMatches="useMatches",c.UseRevalidator="useRevalidator",c.UseNavigateStable="useNavigate",c.UseRouteId="useRouteId",c})(Gd||{});function Xp(c){let _=he.useContext(_o);return _||Ze(!1),_}function eg(c){let _=he.useContext(Vp);return _||Ze(!1),_}function ng(c){let _=he.useContext(_t);return _||Ze(!1),_}function qd(c){let _=ng(),l=_.matches[_.matches.length-1];return l.route.id||Ze(!1),l.route.id}function tg(){var c;let _=he.useContext(Vd),l=eg(),x=qd();return _!==void 0?_:(c=l.errors)==null?void 0:c[x]}function rg(){let{router:c}=Xp(Hd.UseNavigateStable),_=qd(Gd.UseNavigateStable),l=he.useRef(!1);return Ud(()=>{l.current=!0}),he.useCallback(function(m,u){u===void 0&&(u={}),l.current&&(typeof m=="number"?c.navigate(m):c.navigate(m,ri({fromRouteId:_},u)))},[c,_])}const Td={};function ig(c,_,l){Td[c]||(Td[c]=!0)}function ag(c,_){c==null||c.v7_startTransition,c==null||c.v7_relativeSplatPath}function fo(c){Ze(!1)}function lg(c){let{basename:_="/",children:l=null,location:x,navigationType:m=Tt.Pop,navigator:u,static:d=!1,future:s}=c;ii()&&Ze(!1);let g=_.replace(/^\/*/,"/"),y=he.useMemo(()=>({basename:g,navigator:u,static:d,future:ri({v7_relativeSplatPath:!1},s)}),[g,s,u,d]);typeof x=="string"&&(x=Wt(x));let{pathname:L="/",search:S="",hash:k="",state:w=null,key:I="default"}=x,h=he.useMemo(()=>{let v=bo(L,g);return v==null?null:{location:{pathname:v,search:S,hash:k,state:w,key:I},navigationType:m}},[g,L,S,k,w,I,m]);return h==null?null:he.createElement(Ht.Provider,{value:y},he.createElement(ya.Provider,{children:l,value:h}))}function og(c){let{children:_,location:l}=c;return qp(po(_),l)}new Promise(()=>{});function po(c,_){_===void 0&&(_=[]);let l=[];return he.Children.forEach(c,(x,m)=>{if(!he.isValidElement(x))return;let u=[..._,m];if(x.type===he.Fragment){l.push.apply(l,po(x.props.children,u));return}x.type!==fo&&Ze(!1),!x.props.index||!x.props.children||Ze(!1);let d={id:x.props.id||u.join("-"),caseSensitive:x.props.caseSensitive,element:x.props.element,Component:x.props.Component,index:x.props.index,path:x.props.path,loader:x.props.loader,action:x.props.action,errorElement:x.props.errorElement,ErrorBoundary:x.props.ErrorBoundary,hasErrorBoundary:x.props.ErrorBoundary!=null||x.props.errorElement!=null,shouldRevalidate:x.props.shouldRevalidate,handle:x.props.handle,lazy:x.props.lazy};x.props.children&&(d.children=po(x.props.children,u)),l.push(d)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function go(){return go=Object.assign?Object.assign.bind():function(c){for(var _=1;_<arguments.length;_++){var l=arguments[_];for(var x in l)Object.prototype.hasOwnProperty.call(l,x)&&(c[x]=l[x])}return c},go.apply(this,arguments)}function sg(c,_){if(c==null)return{};var l={},x=Object.keys(c),m,u;for(u=0;u<x.length;u++)m=x[u],!(_.indexOf(m)>=0)&&(l[m]=c[m]);return l}function ug(c){return!!(c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)}function dg(c,_){return c.button===0&&(!_||_==="_self")&&!ug(c)}const cg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fg="6";try{window.__reactRouterVersion=fg}catch{}const pg="startTransition",bd=sp[pg];function gg(c){let{basename:_,children:l,future:x,window:m}=c,u=he.useRef();u.current==null&&(u.current=gp({window:m,v5Compat:!0}));let d=u.current,[s,g]=he.useState({action:d.action,location:d.location}),{v7_startTransition:y}=x||{},L=he.useCallback(S=>{y&&bd?bd(()=>g(S)):g(S)},[g,y]);return he.useLayoutEffect(()=>d.listen(L),[d,L]),he.useEffect(()=>ag(x),[x]),he.createElement(lg,{basename:_,children:l,location:s.location,navigationType:s.action,navigator:d,future:x})}const hg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ma=he.forwardRef(function(_,l){let{onClick:x,relative:m,reloadDocument:u,replace:d,state:s,target:g,to:y,preventScrollReset:L,viewTransition:S}=_,k=sg(_,cg),{basename:w}=he.useContext(Ht),I,h=!1;if(typeof y=="string"&&mg.test(y)&&(I=y,hg))try{let N=new URL(window.location.href),B=y.startsWith("//")?new URL(N.protocol+y):new URL(y),F=bo(B.pathname,w);B.origin===N.origin&&F!=null?y=F+B.search+B.hash:h=!0}catch{}let v=Up(y,{relative:m}),b=wg(y,{replace:d,state:s,target:g,preventScrollReset:L,relative:m,viewTransition:S});function M(N){x&&x(N),N.defaultPrevented||b(N)}return he.createElement("a",go({},k,{href:I||v,onClick:h||u?x:M,ref:l,target:g}))});var _d;(function(c){c.UseScrollRestoration="useScrollRestoration",c.UseSubmit="useSubmit",c.UseSubmitFetcher="useSubmitFetcher",c.UseFetcher="useFetcher",c.useViewTransitionState="useViewTransitionState"})(_d||(_d={}));var Ld;(function(c){c.UseFetcher="useFetcher",c.UseFetchers="useFetchers",c.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function wg(c,_){let{target:l,replace:x,state:m,preventScrollReset:u,relative:d,viewTransition:s}=_===void 0?{}:_,g=Wp(),y=va(),L=Wd(c,{relative:d});return he.useCallback(S=>{if(dg(S,l)){S.preventDefault();let k=x!==void 0?x:ha(y)===ha(L);g(c,{replace:k,state:m,preventScrollReset:u,relative:d,viewTransition:s})}},[y,g,L,x,m,l,c,u,d,s])}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vg=c=>c.replace(/^([A-Z])|[\s-_]+(\w)/g,(_,l,x)=>x?x.toUpperCase():l.toLowerCase()),Cd=c=>{const _=vg(c);return _.charAt(0).toUpperCase()+_.slice(1)},Jd=(...c)=>c.filter((_,l,x)=>!!_&&_.trim()!==""&&x.indexOf(_)===l).join(" ").trim(),Sg=c=>{for(const _ in c)if(_.startsWith("aria-")||_==="role"||_==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=he.forwardRef(({color:c="currentColor",size:_=24,strokeWidth:l=2,absoluteStrokeWidth:x,className:m="",children:u,iconNode:d,...s},g)=>he.createElement("svg",{ref:g,...kg,width:_,height:_,stroke:c,strokeWidth:x?Number(l)*24/Number(_):l,className:Jd("lucide",m),...!u&&!Sg(s)&&{"aria-hidden":"true"},...s},[...d.map(([y,L])=>he.createElement(y,L)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=(c,_)=>{const l=he.forwardRef(({className:x,...m},u)=>he.createElement(xg,{ref:u,iconNode:_,className:Jd(`lucide-${yg(Cd(c))}`,`lucide-${c}`,x),...m}));return l.displayName=Cd(c),l};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],bg=Cn("arrow-left",Tg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Lg=Cn("circle-alert",_g);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Kd=Cn("circle-check-big",Cg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Mg=Cn("download",Ig);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Og=Cn("external-link",Eg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ng=Cn("file-text",Ag);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Id=Cn("github",Pg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],$d=Cn("loader-circle",jg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Bg=Cn("menu",Rg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Lo=Cn("package",zg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Qd=Cn("search",Fg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Zd=Cn("user",Dg);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ug=Cn("x",Vg);function Wg(){const[c,_]=he.useState(!1);return re.jsxs("header",{className:"sticky top-0 z-50 border-b border-gray-200 bg-white",children:[re.jsxs("div",{className:"mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6",children:[re.jsxs(ma,{to:"/",className:"flex items-center gap-2",children:[re.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-md bg-gray-100",children:re.jsx(Lo,{className:"h-4.5 w-4.5 text-gray-700"})}),re.jsx("span",{className:"text-base font-semibold text-gray-900",children:"FkWeChat"})]}),re.jsx("button",{onClick:()=>_(!c),className:"flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100",children:c?re.jsx(Ug,{className:"h-5 w-5"}):re.jsx(Bg,{className:"h-5 w-5"})})]}),c&&re.jsx("div",{className:"border-t border-gray-200 bg-white",children:re.jsx("div",{className:"mx-auto max-w-5xl px-4 py-3 sm:px-6",children:re.jsxs("div",{className:"space-y-1",children:[re.jsxs("a",{href:"http://fkwechat.apifox.cn/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>_(!1),children:[re.jsx(Og,{className:"h-4 w-4"}),"开发文档"]}),re.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>_(!1),children:[re.jsx(Id,{className:"h-4 w-4"}),"跳转仓库"]}),re.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin/blob/main/README.md",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>_(!1),children:[re.jsx(Id,{className:"h-4 w-4"}),"上传步骤"]})]})})})]})}const Md=c=>{let _;const l=new Set,x=(y,L)=>{const S=typeof y=="function"?y(_):y;if(!Object.is(S,_)){const k=_;_=L??(typeof S!="object"||S===null)?S:Object.assign({},_,S),l.forEach(w=>w(_,k))}},m=()=>_,s={setState:x,getState:m,getInitialState:()=>g,subscribe:y=>(l.add(y),()=>l.delete(y))},g=_=c(x,m,s);return s},Hg=(c=>c?Md(c):Md),Gg=c=>c;function qg(c,_=Gg){const l=ni.useSyncExternalStore(c.subscribe,ni.useCallback(()=>_(c.getState()),[c,_]),ni.useCallback(()=>_(c.getInitialState()),[c,_]));return ni.useDebugValue(l),l}const Ed=c=>{const _=Hg(c),l=x=>qg(_,x);return Object.assign(l,_),l},Jg=(c=>c?Ed(c):Ed),Kg="modulepreload",$g=function(c){return"/FkWeChat_Plugin/"+c},Od={},Ut=function(_,l,x){let m=Promise.resolve();if(l&&l.length>0){let d=function(y){return Promise.all(y.map(L=>Promise.resolve(L).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),g=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));m=d(l.map(y=>{if(y=$g(y),y in Od)return;Od[y]=!0;const L=y.endsWith(".css"),S=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${S}`))return;const k=document.createElement("link");if(k.rel=L?"stylesheet":Kg,L||(k.as="script"),k.crossOrigin="",k.href=y,g&&k.setAttribute("nonce",g),document.head.appendChild(k),L)return new Promise((w,I)=>{k.addEventListener("load",w),k.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(d){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=d,window.dispatchEvent(s),!s.defaultPrevented)throw d}return m.then(d=>{for(const s of d||[])s.status==="rejected"&&u(s.reason);return _().catch(u)})},ho=`#Fri May 15 22:27:02 GMT+08:00 2026
version=1.0.0
name=FkAi\\u56DE\\u590D
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=
`,mo=`name=MCP服务器插件
author=cuan
version=1.0.0
desc=基于FkWeChat宿主脚本环境实现的MCP服务器插件`,wo=`#Wed May 06 17:56:02 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=QQ\\u70B9\\u6B4C
version=1.0.7
desc=
`,yo=`#Fri May 15 20:58:13 GMT+08:00 2026
version=1.0.0
name=\\u5173\\u952E\\u63D0\\u9192
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u957F\\u6309\\u6D88\\u606F\\u8FDB\\u5165\\u83DC\\u5355\\u6253\\u5F00ui
`,vo=`#Wed May 06 20:10:41 GMT+08:00 2026
version=1.0.0
name=\\u590D\\u8BFB\\u673A\\u4E0E\\u9ED8\\u8BA4\\u56DE\\u590D
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u590D\\u8BFB\\u5F00\\u5173 \\u9ED8\\u8BA4\\u56DE\\u590D \\u56DE\\u590D\\u5217\\u8868
`,So=`#Thu Apr 23 18:03:01 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=\\u5FEB\\u6377\\u64CD\\u4F5C
version=1.0.3
desc=
`,ko=`#Thu May 07 01:55:41 GMT+08:00 2026
version=1.0.0
name=\\u7FA4\\u53D1\\u52A9\\u624B
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u957F\\u6309\\u6D88\\u606F\\u83DC\\u5355\\u8C03\\u51FAui\\u52FE\\u9009\\u53D1\\u9001
`,Yd=`/** Created by 吃不香菜
 Plugin: FkAi回复
*/

// ===== 默认配置 =====
static final int CFG_AI_ENABLED = 1;
static final int CFG_REQUIRE_AT = 1;
static final int CFG_GROUP_ENABLED = 1;
static final int CFG_CMD_ENABLED = 0;
static final int CFG_API_INDEX = 0;
static final int CFG_MODEL_INDEX = 0;
static final String CFG_STYLE = "随和";
static final String FIXED_BEHAVIOR_PROMPT =
"你是微信聊天助手，目标是像真实好友一样自然回复，不要技术腔。\\n\\n" +
"【总行为】\\n" +
"1) 优先按"聊天语义"理解消息，不要输出XML、字段名、type编号、协议词。\\n" +
"2) 回复简短自然、有温度；该感谢就感谢，该确认就确认。\\n" +
"3) 对明显的系统事件（转账、红包、通话状态、位置、名片、卡片、小程序）按生活化语气回应，不要让用户重复解释"这是什么"。\\n\\n" +
"【场景化回复规则】\\n" +
"A. 红包/转账：收到后优先礼貌回应；金额不明确不要编造。\\n" +
"B. 语音/视频通话：未接/取消给简短确认+建议；已接通且有时长默认不长回复；voip占位词按通话提醒处理。\\n" +
"C. 位置消息：按地点自然回应，不主动报坐标细节。\\n" +
"D. 小程序/链接/歌曲卡片/名片：先说看到了什么，再轻量反馈，不贴长链接。\\n" +
"E. 引用消息：重点理解"当前这句"与"被引用内容"的关系，不解释结构。\\n\\n" +
"【语气要求】\\n" +
"- 像真人微信聊天：口语化、简洁、不过度解释。\\n" +
"- 不要出现"我不理解voip_content_xxx"这类技术客服式话术。\\n" +
"- 不确定时，用自然澄清句而非技术盘问。\\n\\n" +
"风格设定仅影响表达语气与措辞，不得违反上述场景处理规则与安全规则。\\n" +
"若风格与规则冲突，以场景处理规则优先。";

static final List<String> CFG_WHITELIST_FRIENDS = Arrays.asList("好友1", "好友2", "好友3");

Map userConfigMap = new HashMap();
Map windowMap = new HashMap();
Map stylePrompts = new HashMap();
List apiList = new ArrayList();
Map apiModels = new HashMap();
Map lastCallDurationMap = new HashMap();
String robotName = "吃不香菜";
Map groupMemberAiAuthMap = new HashMap();
Map friendAuthMap = new HashMap();
Map groupAuthMap = new HashMap();
List blockListGlobal = new ArrayList();

AlertDialog currentDialog = null;
TextView uiTvStatus = null;
Button uiBtnApi, uiBtnModel, uiBtnStyle, uiBtnAi, uiBtnCmd, uiBtnMode;
String uiTalker = "";


// ===== 基础工具 =====
void logger(String s) {
    try { log(s); } catch (Throwable e) {}
}

String fkSafeStr(Object v) {
    return v == null ? "" : String.valueOf(v).trim();
}

int fkToInt(Object v, int d) {
    try {
        if (v instanceof Number) return ((Number) v).intValue();
        String s = fkSafeStr(v);
        if (s.length() == 0) return d;
        return Integer.parseInt(s);
    } catch (Throwable e) {
        return d;
    }
}

// ===== 过滤文件名污染 =====
boolean isValidName(String name) {
    if (name == null || name.length() == 0) return false;
    // 过滤路径格式（包含/）、微信目录、常见文件扩展名
    if (name.startsWith("/")) return false;
    if (name.contains("com.tencent.mm")) return false;
    if (name.contains(".")) return false; // 文件名带扩展名
    if (name.contains("联系人")) return false;
    return true;
}

// ===== 风格文件路径 =====
String getStyleFile() {
    return getConfigDir() + "styles.json";
}

// ===== 风格初始化（JSON文件+内置兜底）=====
void initStyles() {
    if (!stylePrompts.isEmpty()) return;
    
    // 先尝试从JSON文件读取
    loadStylesFromFile();
    
    // 兜底：确保至少有两个内置风格
    if (!stylePrompts.containsKey("随和")) {
        stylePrompts.put("随和", "你是一个随和友善的助手，回复简洁自然。");
    }
    if (!stylePrompts.containsKey("复读机")) {
        stylePrompts.put("复读机", "+1复读机，应声虫模式，不走ai回复");
    }
}

// ===== 读取风格JSON文件 =====
void loadStylesFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getStyleFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        Iterator it = root.keys();
        int count = 0;
        while (it.hasNext()) {
            String name = String.valueOf(it.next());
            // 过滤文件名污染
            if (!isValidName(name)) {
                logger("风格过滤跳过: " + name);
                continue;
            }
            String prompt = root.optString(name, "");
            if (prompt.length() > 0) {
                stylePrompts.put(name, prompt);
                count++;
            }
        }
        logger("从styles.json加载了 " + count + " 个风格");
    } catch (Throwable e) {
        logger("loadStylesFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存风格到JSON文件 =====
void saveStylesToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        for (Object key : stylePrompts.keySet()) {
            String name = fkSafeStr(key);
            if (!isValidName(name)) continue;
            String prompt = fkSafeStr(stylePrompts.get(key));
            if (prompt.length() > 0) {
                root.put(name, prompt);
            }
        }
        File file = new File(getStyleFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveStylesToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== 屏蔽词文件路径 =====
String getBlockFile() {
    return getConfigDir() + "blocklist.json";
}

// ===== 屏蔽词初始化（JSON文件+内置兜底）=====
void initBlockList() {
    // 先尝试从JSON文件读取
    loadBlockListFromFile();
    
    // 兜底：确保内置屏蔽词存在
    List defaults = Arrays.asList("点歌", "play");
    for (int i = 0; i < defaults.size(); i++) {
        String w = fkSafeStr(defaults.get(i));
        if (w.length() > 0 && !blockListGlobal.contains(w)) {
            blockListGlobal.add(w);
        }
    }
}

// ===== 读取屏蔽词JSON文件 =====
void loadBlockListFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getBlockFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        JSONArray arr = root.optJSONArray("words");
        if (arr == null) return;
        int count = 0;
        for (int i = 0; i < arr.length(); i++) {
            String w = arr.optString(i, "").trim();
            // 过滤文件名污染
            if (!isValidName(w) && !w.matches("^[a-zA-Z0-9\\\\u4e00-\\\\u9fa5]+$")) {
                logger("屏蔽词过滤跳过: " + w);
                continue;
            }
            if (w.length() > 0 && !blockListGlobal.contains(w)) {
                blockListGlobal.add(w);
                count++;
            }
        }
        logger("从blocklist.json加载了 " + count + " 个屏蔽词");
    } catch (Throwable e) {
        logger("loadBlockListFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存屏蔽词到JSON文件 =====
void saveBlockListToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        JSONArray arr = new JSONArray();
        for (int i = 0; i < blockListGlobal.size(); i++) {
            String w = fkSafeStr(blockListGlobal.get(i));
            if (w.length() > 0) arr.put(w);
        }
        root.put("words", arr);
        File file = new File(getBlockFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveBlockListToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== 配置 =====
Map newDefaultConfig() {
    Map c = new HashMap();
    c.put("apiIndex", CFG_API_INDEX);
    c.put("modelIndex", CFG_MODEL_INDEX);
    c.put("style", CFG_STYLE);
    c.put("aiEnabled", CFG_AI_ENABLED);
    c.put("groupEnabled", CFG_GROUP_ENABLED);
    c.put("requireAt", CFG_REQUIRE_AT);
    c.put("cmdEnabled", CFG_CMD_ENABLED);
    c.put("msgMode", "off");
    return c;
}

Map getUserConfig(String talker) {
    if (!userConfigMap.containsKey(talker)) userConfigMap.put(talker, newDefaultConfig());
    return (Map) userConfigMap.get(talker);
}

// ===== JSON持久化 =====
String getConfigDir() {
    int userId = android.os.UserHandle.myUserId();
    return "/storage/emulated/" + userId + "/Android/media/com.tencent.mm/FkWeChat/Plugin/FkAI回复/";
}

String getConfigFile() {
    return getConfigDir() + "config.json";
}

void ensureConfigDir() {
    try {
        File dir = new File(getConfigDir());
        if (!dir.exists()) dir.mkdirs();
    } catch (Throwable e) {
        logger("ensureConfigDir异常: " + e);
    }
}

JSONObject diffConfigToJson(Map cfg, Map def) {
    JSONObject out = new JSONObject();
    try {
        int apiIndex = fkToInt(cfg.get("apiIndex"), CFG_API_INDEX);
        if (apiIndex != fkToInt(def.get("apiIndex"), CFG_API_INDEX)) out.put("apiIndex", apiIndex);
        int modelIndex = fkToInt(cfg.get("modelIndex"), CFG_MODEL_INDEX);
        if (modelIndex != fkToInt(def.get("modelIndex"), CFG_MODEL_INDEX)) out.put("modelIndex", modelIndex);
        String style = fkSafeStr(cfg.get("style"));
        if (!style.equals(fkSafeStr(def.get("style")))) out.put("style", style);
        int aiEnabled = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED);
        if (aiEnabled != fkToInt(def.get("aiEnabled"), CFG_AI_ENABLED)) out.put("aiEnabled", aiEnabled);
        int groupEnabled = fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED);
        if (groupEnabled != fkToInt(def.get("groupEnabled"), CFG_GROUP_ENABLED)) out.put("groupEnabled", groupEnabled);
        int requireAt = fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT);
        if (requireAt != fkToInt(def.get("requireAt"), CFG_REQUIRE_AT)) out.put("requireAt", requireAt);
        int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
        if (cmdEnabled != fkToInt(def.get("cmdEnabled"), CFG_CMD_ENABLED)) out.put("cmdEnabled", cmdEnabled);
        String msgMode = fkSafeStr(cfg.get("msgMode")).toLowerCase();
        if (msgMode.length() == 0) msgMode = "off";
        String defMode = fkSafeStr(def.get("msgMode")).toLowerCase();
        if (defMode.length() == 0) defMode = "off";
        if (!msgMode.equals(defMode)) out.put("msgMode", msgMode);
    } catch (Throwable e) {
        logger("diffConfigToJson异常: " + e);
    }
    return out;
}

void saveAllConfigToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        Map def = newDefaultConfig();
        JSONObject cfgRoot = new JSONObject();
        for (Object k : userConfigMap.keySet()) {
            String talker = k == null ? "" : String.valueOf(k);
            if (talker.length() == 0) continue;
            Map cfg = (Map) userConfigMap.get(talker);
            if (cfg == null) continue;
            JSONObject diff = diffConfigToJson(cfg, def);
            if (diff.length() > 0) cfgRoot.put(talker, diff);
        }
        root.put("userConfigMap", cfgRoot);
        JSONObject authRoot = new JSONObject();
        for (Object rk : groupMemberAiAuthMap.keySet()) {
            String room = rk == null ? "" : String.valueOf(rk);
            if (room.length() == 0) continue;
            Set set = (Set) groupMemberAiAuthMap.get(room);
            JSONArray arr = new JSONArray();
            if (set != null) {
                for (Object uid : set) {
                    String u = uid == null ? "" : String.valueOf(uid).trim();
                    if (u.length() > 0) arr.put(u);
                }
            }
            if (arr.length() > 0) authRoot.put(room, arr);
        }
        root.put("groupMemberAiAuthMap", authRoot);
        JSONObject friendAuthRoot = new JSONObject();
        for (Object fk : friendAuthMap.keySet()) {
            String wxid = fkSafeStr(fk);
            if (wxid.length() > 0 && fkToInt(friendAuthMap.get(wxid), 0) == 1) friendAuthRoot.put(wxid, 1);
        }
        if (friendAuthRoot.length() > 0) root.put("friendAuthMap", friendAuthRoot);
        JSONObject groupAuthRoot = new JSONObject();
        for (Object gk : groupAuthMap.keySet()) {
            String roomId = fkSafeStr(gk);
            if (roomId.length() > 0 && fkToInt(groupAuthMap.get(roomId), 0) == 1) groupAuthRoot.put(roomId, 1);
        }
        if (groupAuthRoot.length() > 0) root.put("groupAuthMap", groupAuthRoot);
        File file = new File(getConfigFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveAllConfigToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

void loadAllConfigFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getConfigFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        userConfigMap.clear();
        groupMemberAiAuthMap.clear();
        friendAuthMap.clear();
        groupAuthMap.clear();
        Map def = newDefaultConfig();
        JSONObject cfgRoot = root.optJSONObject("userConfigMap");
        if (cfgRoot != null) {
            Iterator it = cfgRoot.keys();
            while (it.hasNext()) {
                String talker = String.valueOf(it.next());
                JSONObject one = cfgRoot.optJSONObject(talker);
                if (one == null) continue;
                Map cfg = new HashMap();
                cfg.putAll(def);
                if (one.has("apiIndex")) cfg.put("apiIndex", one.optInt("apiIndex", fkToInt(def.get("apiIndex"), CFG_API_INDEX)));
                if (one.has("modelIndex")) cfg.put("modelIndex", one.optInt("modelIndex", fkToInt(def.get("modelIndex"), CFG_MODEL_INDEX)));
                if (one.has("style")) cfg.put("style", one.optString("style", fkSafeStr(def.get("style"))));
                if (one.has("aiEnabled")) cfg.put("aiEnabled", one.optInt("aiEnabled", fkToInt(def.get("aiEnabled"), CFG_AI_ENABLED)));
                if (one.has("groupEnabled")) cfg.put("groupEnabled", one.optInt("groupEnabled", fkToInt(def.get("groupEnabled"), CFG_GROUP_ENABLED)));
                if (one.has("requireAt")) cfg.put("requireAt", one.optInt("requireAt", fkToInt(def.get("requireAt"), CFG_REQUIRE_AT)));
                if (one.has("cmdEnabled")) cfg.put("cmdEnabled", one.optInt("cmdEnabled", fkToInt(def.get("cmdEnabled"), CFG_CMD_ENABLED)));
                if (one.has("msgMode")) cfg.put("msgMode", one.optString("msgMode", fkSafeStr(def.get("msgMode"))));
                userConfigMap.put(talker, cfg);
            }
        }
        JSONObject authRoot = root.optJSONObject("groupMemberAiAuthMap");
        if (authRoot != null) {
            Iterator it2 = authRoot.keys();
            while (it2.hasNext()) {
                String room = String.valueOf(it2.next());
                JSONArray arr = authRoot.optJSONArray(room);
                if (arr == null || arr.length() == 0) continue;
                Set set = new HashSet();
                for (int i = 0; i < arr.length(); i++) {
                    String uid = arr.optString(i, "").trim();
                    if (uid.length() > 0) set.add(uid);
                }
                if (!set.isEmpty()) groupMemberAiAuthMap.put(room, set);
            }
        }
        friendAuthMap.clear();
        JSONObject friendAuthRoot = root.optJSONObject("friendAuthMap");
        if (friendAuthRoot != null) {
            Iterator it = friendAuthRoot.keys();
            while (it.hasNext()) { String wxid = String.valueOf(it.next()); if (friendAuthRoot.optInt(wxid) == 1) friendAuthMap.put(wxid, 1); }
        }
        groupAuthMap.clear();
        JSONObject groupAuthRoot = root.optJSONObject("groupAuthMap");
        if (groupAuthRoot != null) {
            Iterator it = groupAuthRoot.keys();
            while (it.hasNext()) { String roomId = String.valueOf(it.next()); if (groupAuthRoot.optInt(roomId) == 1) groupAuthMap.put(roomId, 1); }
        }
    } catch (Throwable e) {
        logger("loadAllConfigFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== API & 风格 =====
// ===== API文件路径 =====
String getApiFile() {
    return getConfigDir() + "api.json";
}

// ===== 读取API JSON文件 =====
void loadApiFromFile() {
    BufferedReader reader = null;
    try {
        File file = new File(getApiFile());
        if (!file.exists()) return;
        reader = new BufferedReader(new FileReader(file));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) sb.append(line);
        String txt = sb.toString().trim();
        if (txt.length() == 0) return;
        JSONObject root = new JSONObject(txt);
        apiList.clear();
        apiModels.clear();
        Iterator it = root.keys();
        int count = 0;
        while (it.hasNext()) {
            String idx = String.valueOf(it.next());
            JSONObject a = root.optJSONObject(idx);
            if (a == null) continue;
            Map api = new HashMap();
            api.put("name", a.optString("name", "unknown"));
            api.put("url", a.optString("url", ""));
            api.put("key", a.optString("key", ""));
            apiList.add(api);
            List ms = new ArrayList();
            JSONArray mArr = a.optJSONArray("models");
            if (mArr != null) {
                for (int y = 0; y < mArr.length(); y++) {
                    String m = mArr.optString(y, "").trim();
                    if (m.length() > 0) ms.add(m);
                }
            }
            apiModels.put(apiList.size() - 1, ms);
            count++;
        }
        logger("从api.json加载了 " + count + " 个API");
    } catch (Throwable e) {
        logger("loadApiFromFile异常: " + e);
    } finally {
        try { if (reader != null) reader.close(); } catch (Throwable ee) {}
    }
}

// ===== 保存API到JSON文件 =====
void saveApiToFile() {
    FileWriter writer = null;
    try {
        ensureConfigDir();
        JSONObject root = new JSONObject();
        for (int x = 0; x < apiList.size(); x++) {
            Map api = (Map) apiList.get(x);
            JSONObject a = new JSONObject();
            a.put("name", fkSafeStr(api.get("name")));
            a.put("url", fkSafeStr(api.get("url")));
            a.put("key", fkSafeStr(api.get("key")));
            JSONArray ms = new JSONArray();
            List models = (List) apiModels.get(x);
            if (models != null) {
                for (int y = 0; y < models.size(); y++) {
                    String m = fkSafeStr(models.get(y));
                    if (m.length() > 0) ms.put(m);
                }
            }
            a.put("models", ms);
            root.put(String.valueOf(x), a);
        }
        File file = new File(getApiFile());
        writer = new FileWriter(file, false);
        writer.write(root.toString(2));
        writer.flush();
    } catch (Throwable e) {
        logger("saveApiToFile异常: " + e);
    } finally {
        try { if (writer != null) writer.close(); } catch (Throwable ee) {}
    }
}

// ===== API配置初始化（JSON+兜底）=====
void initApiConfig() {
    if (!apiList.isEmpty()) return;
    // 先尝试从JSON读取
    loadApiFromFile();
    // 兜底：确保至少有两个内置API
    if (apiList.isEmpty()) {
        Object[][] apiConfigs = {
           {
           "商汤日日新", "https://token.sensenova.cn/v1/chat/completions", "sk-修改密码",
                new String[]{"deepseek-v4-flash", "sensenova-6.7-flash-lite"}},
           {
           "mimo", "https://api.xiaomimimo.com/v1/chat/completions", "sk-修改密码", 
                new String[]{"mimo-v2-flash"}}        
        };
        for (int i = 0; i < apiConfigs.length; i++) {
            Map a = new HashMap();
            a.put("name", apiConfigs[i][0]);
            a.put("url", apiConfigs[i][1]);
            a.put("key", apiConfigs[i][2]);
            apiList.add(a);
            List ms = new ArrayList();
            String[] arr = (String[]) apiConfigs[i][3];
            for (int j = 0; j < arr.length; j++) ms.add(arr[j]);
            apiModels.put(i, ms);
        }
        // 兜底加载后保存一次，以便用户后续编辑
        saveApiToFile();
    }
}

String getCurrentModel(String talker) {
    Map c = getUserConfig(talker);
    int ai = fkToInt(c.get("apiIndex"), 0);
    int mi = fkToInt(c.get("modelIndex"), 0);
    List ms = (List) apiModels.get(ai);
    if (ms == null || ms.isEmpty()) return "unknown";
    if (mi < 0 || mi >= ms.size()) mi = 0;
    return fkSafeStr(ms.get(mi));
}

// ===== API模型拉取 / 测试 / Key脱敏工具 =====

String maskApiKey(String key) {
    key = fkSafeStr(key);
    if (key.length() <= 8) return key.length() == 0 ? "" : "****";
    return key.substring(0, Math.min(6, key.length())) + "****" + key.substring(key.length() - 4);
}

boolean isMaskedApiKeyText(String s) {
    s = fkSafeStr(s);
    return s.indexOf("****") >= 0;
}

String buildModelsUrl(String chatUrl) {
    String u = fkSafeStr(chatUrl);
    if (u.length() == 0) return "";

    if (u.endsWith("/")) u = u.substring(0, u.length() - 1);

    if (u.endsWith("/v1/chat/completions")) {
        return u.substring(0, u.length() - "/v1/chat/completions".length()) + "/v1/models";
    }

    if (u.endsWith("/chat/completions")) {
        return u.substring(0, u.length() - "/chat/completions".length()) + "/models";
    }

    if (u.endsWith("/v1/responses")) {
        return u.substring(0, u.length() - "/v1/responses".length()) + "/v1/models";
    }

    int p = u.indexOf("/v1/");
    if (p > 0) {
        return u.substring(0, p) + "/v1/models";
    }

    return u + "/v1/models";
}

String joinModelList(List models) {
    StringBuilder sb = new StringBuilder();
    if (models == null) return "";
    for (int i = 0; i < models.size(); i++) {
        String m = fkSafeStr(models.get(i));
        if (m.length() == 0) continue;
        if (sb.length() > 0) sb.append(",");
        sb.append(m);
    }
    return sb.toString();
}

List parseModelsFromResp(String resp) {
    List out = new ArrayList();
    try {
        String txt = fkSafeStr(resp);
        if (txt.length() == 0) return out;

        // OpenAI兼容格式: {"data":[{"id":"xxx"}]}
        if (txt.startsWith("{")) {
            JSONObject root = new JSONObject(txt);

            JSONArray data = root.optJSONArray("data");
            if (data != null) {
                for (int i = 0; i < data.length(); i++) {
                    Object one = data.opt(i);
                    String id = "";
                    if (one instanceof JSONObject) {
                        id = ((JSONObject) one).optString("id", "");
                    } else {
                        id = fkSafeStr(one);
                    }
                    id = id.trim();
                    if (id.length() > 0 && !out.contains(id)) out.add(id);
                }
            }

            // 兼容: {"models":["xxx","yyy"]}
            JSONArray models = root.optJSONArray("models");
            if (models != null) {
                for (int i = 0; i < models.length(); i++) {
                    Object one = models.opt(i);
                    String id = "";
                    if (one instanceof JSONObject) {
                        id = ((JSONObject) one).optString("id", "");
                    } else {
                        id = fkSafeStr(one);
                    }
                    id = id.trim();
                    if (id.length() > 0 && !out.contains(id)) out.add(id);
                }
            }
        }

        // 兼容: [{"id":"xxx"}] 或 ["xxx"]
        if (txt.startsWith("[")) {
            JSONArray arr = new JSONArray(txt);
            for (int i = 0; i < arr.length(); i++) {
                Object one = arr.opt(i);
                String id = "";
                if (one instanceof JSONObject) {
                    id = ((JSONObject) one).optString("id", "");
                } else {
                    id = fkSafeStr(one);
                }
                id = id.trim();
                if (id.length() > 0 && !out.contains(id)) out.add(id);
            }
        }

    } catch (Throwable e) {
        logger("parseModelsFromResp异常: " + e);
    }
    return out;
}

List fetchModelsFromApi(String chatUrl, String key) {
    List out = new ArrayList();
    java.net.HttpURLConnection conn = null;
    try {
        String modelsUrl = buildModelsUrl(chatUrl);
        if (modelsUrl.length() == 0) return out;

        java.net.URL obj = new java.net.URL(modelsUrl);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Accept", "application/json");
        if (fkSafeStr(key).length() > 0) {
            conn.setRequestProperty("Authorization", "Bearer " + fkSafeStr(key));
        }
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(20000);

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();
        if (code >= 200 && code < 300) {
            out = parseModelsFromResp(respStr);
            logger("拉取模型成功: " + out.size() + "个, url=" + modelsUrl);
        } else {
            logger("拉取模型失败(" + code + "): " + respStr);
        }

    } catch (Throwable e) {
        logger("fetchModelsFromApi异常: " + e);
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
    return out;
}

String testOpenAiApi(String chatUrl, String key, String model) {
    java.net.HttpURLConnection conn = null;
    try {
        chatUrl = fkSafeStr(chatUrl);
        key = fkSafeStr(key);
        model = fkSafeStr(model);

        if (chatUrl.length() == 0) return "URL为空";
        if (key.length() == 0) return "Key为空";
        if (model.length() == 0) return "模型为空";

        JSONObject params = new JSONObject();
        params.put("model", model);
        params.put("temperature", 0);

        JSONArray messages = new JSONArray();
        JSONObject m = new JSONObject();
        m.put("role", "user");
        m.put("content", "只回复 OK");
        messages.put(m);
        params.put("messages", messages);

        java.net.URL obj = new java.net.URL(chatUrl);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "Bearer " + key);
        conn.setDoOutput(true);
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(30000);

        java.io.OutputStream os = conn.getOutputStream();
        os.write(params.toString().getBytes("UTF-8"));
        os.flush();
        os.close();

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();

        if (code >= 200 && code < 300) {
            try {
                JSONObject json = new JSONObject(respStr);
                JSONArray choices = json.optJSONArray("choices");
                if (choices != null && choices.length() > 0) {
                    return "";
                }
            } catch (Throwable e) {}
            logger("API测试返回格式异常: " + respStr);
            return "接口有返回，但格式不像OpenAI兼容格式";
        } else {
            logger("API测试失败(" + code + "): " + respStr);
            return "HTTP " + code;
        }

    } catch (Throwable e) {
        logger("testOpenAiApi异常: " + e);
        return e.getMessage();
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
}

void uiToast(final Activity a, final String msg) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { toast(msg); } catch (Throwable e) {}
                }
            });
        } else {
            toast(msg);
        }
    } catch (Throwable e) {
        try { toast(msg); } catch (Throwable ee) {}
    }
}

void uiSetEditText(final Activity a, final EditText input, final String text) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { input.setText(text); } catch (Throwable e) {}
                }
            });
        } else {
            input.setText(text);
        }
    } catch (Throwable e) {}
}

void asyncFetchModelsToInput(final Activity a, final EditText inputUrl, final EditText inputKey, final EditText inputModels, final String oldKey) {
    try {
        uiToast(a, "正在拉取模型...");

        new Thread(new Runnable() {
            public void run() {
                try {
                    String url = inputUrl.getText().toString().trim();
                    String keyText = inputKey.getText().toString().trim();
                    String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                    final List models = fetchModelsFromApi(url, key);

                    if (models != null && !models.isEmpty()) {
                        if (a != null) {
                            a.runOnUiThread(new Runnable() {
                                public void run() {
                                    try {
                                        showFetchedModelsSelectUI(a, inputModels, models);
                                    } catch (Throwable e) {
                                        logger("打开模型点选弹窗异常: " + e);
                                        toast("已拉取模型，但显示列表失败");
                                        try {
                                            inputModels.setText(joinModelList(models));
                                        } catch (Throwable ee) {}
                                    }
                                }
                            });
                        } else {
                            uiSetEditText(a, inputModels, joinModelList(models));
                            uiToast(a, "已拉取 " + models.size() + " 个模型");
                        }
                    } else {
                        uiToast(a, "未拉取到模型，请手动填写");
                    }

                } catch (Throwable e) {
                    logger("asyncFetchModelsToInput异常: " + e);
                    uiToast(a, "拉取失败: " + e.getMessage());
                }
            }
        }).start();

    } catch (Throwable e) {
        logger("asyncFetchModelsToInput启动异常: " + e);
        toast("拉取失败: " + e.getMessage());
    }
}


// ===== 拉取模型后点选写入 =====

void showFetchedModelsSelectUI(final Activity a, final EditText inputModels, final List fetchedModels) {
    try {
        if (fetchedModels == null || fetchedModels.isEmpty()) {
            toast("没有可选择的模型");
            return;
        }

        final List allModels = new ArrayList();
        for (int i = 0; i < fetchedModels.size(); i++) {
            String m = fkSafeStr(fetchedModels.get(i));
            if (m.length() > 0 && !allModels.contains(m)) {
                allModels.add(m);
            }
        }

        if (allModels.isEmpty()) {
            toast("模型列表为空");
            return;
        }

        final boolean[] checked = new boolean[allModels.size()];

        // 默认勾选输入框里已有的模型
        try {
            String oldText = inputModels.getText().toString().trim();
            if (oldText.length() > 0) {
                String[] oldArr = oldText.split(",");
                for (int i = 0; i < oldArr.length; i++) {
                    String oldOne = fkSafeStr(oldArr[i]);
                    if (oldOne.length() == 0) continue;

                    for (int j = 0; j < allModels.size(); j++) {
                        if (oldOne.equals(fkSafeStr(allModels.get(j)))) {
                            checked[j] = true;
                        }
                    }
                }
            }
        } catch (Throwable e) {
            logger("初始化模型勾选异常: " + e);
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvTip = new TextView(a);
        tvTip.setText(
            "已拉取 " + allModels.size() + " 个模型\\n" +
            "可搜索后点选，最后点“写入已选模型”。\\n" +
            "提示：如果不确定，先选常用的几个即可。"
        );
        tvTip.setTextSize(14);
        tvTip.setPadding(0, 0, 0, 10);
        layout.addView(tvTip);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型，例如 gpt / deepseek / qwen / gemini");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        LinearLayout btnRow = new LinearLayout(a);
        btnRow.setOrientation(LinearLayout.HORIZONTAL);

        Button btnSelectVisible = new Button(a);
        btnSelectVisible.setText("选中当前筛选");

        Button btnClearVisible = new Button(a);
        btnClearVisible.setText("取消当前筛选");

        btnRow.addView(btnSelectVisible);
        btnRow.addView(btnClearVisible);
        layout.addView(btnRow);

        final TextView tvCount = new TextView(a);
        tvCount.setTextSize(14);
        tvCount.setPadding(0, 10, 0, 10);
        layout.addView(tvCount);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final Runnable[] refreshList = new Runnable[1];

        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int selectedCount = 0;
                    for (int i = 0; i < checked.length; i++) {
                        if (checked[i]) selectedCount++;
                    }

                    int shown = 0;

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;

                            final int realIdx = i;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((checked[realIdx] ? "● " : "○ ") + model);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        checked[realIdx] = !checked[realIdx];
                                        refreshList[0].run();
                                    } catch (Throwable e) {
                                        logger("切换模型勾选异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    tvCount.setText(
                        "已选 " + selectedCount + " 个 / 当前显示 " + shown + " 个 / 总计 " + allModels.size() + " 个"
                    );

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新拉取模型列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refreshList[0].run();
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        btnSelectVisible.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            checked[i] = true;
                        }
                    }

                    refreshList[0].run();
                } catch (Throwable e) {
                    logger("选中当前筛选异常: " + e);
                    toast("操作失败: " + e.getMessage());
                }
            }
        });

        btnClearVisible.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            checked[i] = false;
                        }
                    }

                    refreshList[0].run();
                } catch (Throwable e) {
                    logger("取消当前筛选异常: " + e);
                    toast("操作失败: " + e.getMessage());
                }
            }
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("选择拉取到的模型")
            .setView(layout)
            .setPositiveButton("写入已选模型", null)
            .setNegativeButton("取消", null)
            .setNeutralButton("全部写入", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refreshList[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                List selected = new ArrayList();

                                for (int i = 0; i < allModels.size(); i++) {
                                    if (checked[i]) {
                                        String m = fkSafeStr(allModels.get(i));
                                        if (m.length() > 0 && !selected.contains(m)) selected.add(m);
                                    }
                                }

                                if (selected.isEmpty()) {
                                    toast("请至少选择一个模型");
                                    return;
                                }

                                inputModels.setText(joinModelList(selected));
                                toast("已写入 " + selected.size() + " 个模型");

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("写入已选模型异常: " + e);
                                toast("写入失败: " + e.getMessage());
                            }
                        }
                    });

                    dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                inputModels.setText(joinModelList(allModels));
                                toast("已写入全部 " + allModels.size() + " 个模型");

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("写入全部模型异常: " + e);
                                toast("写入失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("模型选择弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showFetchedModelsSelectUI异常: " + e);
        toast("显示模型列表失败: " + e.getMessage());
    }
}

// ===== API编辑页模型列表管理 =====

String getModelSummaryFromText(String modelsText) {
    try {
        List list = parseModelCsvToList(modelsText);
        if (list == null || list.isEmpty()) return "模型列表：未配置";

        StringBuilder sb = new StringBuilder();
        sb.append("模型列表：已配置 ").append(list.size()).append(" 个");

        int show = Math.min(3, list.size());
        sb.append("\\n");
        for (int i = 0; i < show; i++) {
            sb.append("· ").append(fkSafeStr(list.get(i))).append("\\n");
        }

        if (list.size() > show) {
            sb.append("... 还有 ").append(list.size() - show).append(" 个");
        }

        return sb.toString().trim();

    } catch (Throwable e) {
        logger("getModelSummaryFromText异常: " + e);
        return "模型列表：读取失败";
    }
}

void refreshModelSummaryText(final TextView tvSummary, final EditText inputModels) {
    try {
        if (tvSummary == null || inputModels == null) return;
        tvSummary.setText(getModelSummaryFromText(inputModels.getText().toString()));
    } catch (Throwable e) {
        logger("refreshModelSummaryText异常: " + e);
    }
}

void bindModelSummaryWatcher(final TextView tvSummary, final EditText inputModels) {
    try {
        if (tvSummary == null || inputModels == null) return;

        inputModels.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refreshModelSummaryText(tvSummary, inputModels);
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        refreshModelSummaryText(tvSummary, inputModels);

    } catch (Throwable e) {
        logger("bindModelSummaryWatcher异常: " + e);
    }
}

void showManualModelsEditUI(final Activity a, final EditText inputModels, final TextView tvSummary) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("手动编辑模型列表，多个模型用英文逗号分隔。");
        tip.setTextSize(14);
        layout.addView(tip);

        final EditText edit = new EditText(a);
        edit.setText(inputModels.getText().toString());
        edit.setHint("model-a,model-b,model-c");
        edit.setSingleLine(false);
        edit.setMinLines(4);
        edit.setMaxLines(8);
        layout.addView(edit);

        new AlertDialog.Builder(a)
            .setTitle("手动编辑模型")
            .setView(layout)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        List list = parseModelCsvToList(edit.getText().toString());
                        inputModels.setText(joinModelList(list));
                        refreshModelSummaryText(tvSummary, inputModels);
                        toast("已保存 " + list.size() + " 个模型");
                    } catch (Throwable e) {
                        logger("手动保存模型异常: " + e);
                        toast("保存失败: " + e.getMessage());
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showManualModelsEditUI异常: " + e);
        toast("打开失败: " + e.getMessage());
    }
}

void showModelsListManageUI(final Activity a, final EditText inputModels, final TextView tvSummary) {
    try {
        final List allModels = parseModelCsvToList(inputModels.getText().toString());
        final List selectedDelete = new ArrayList();

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("点模型可选中/取消，选中的模型可批量删除。");
        tip.setTextSize(14);
        layout.addView(tip);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        LinearLayout addRow = new LinearLayout(a);
        addRow.setOrientation(LinearLayout.HORIZONTAL);

        final EditText addInput = new EditText(a);
        addInput.setHint("新增模型名");
        addInput.setSingleLine(true);

        Button btnAdd = new Button(a);
        btnAdd.setText("添加");

        addRow.addView(addInput);
        addRow.addView(btnAdd);
        layout.addView(addRow);

        LinearLayout btnRow = new LinearLayout(a);
        btnRow.setOrientation(LinearLayout.HORIZONTAL);

        Button btnDelete = new Button(a);
        btnDelete.setText("删除选中");

        Button btnClear = new Button(a);
        btnClear.setText("清空全部");

        btnRow.addView(btnDelete);
        btnRow.addView(btnClear);
        layout.addView(btnRow);

        final TextView countView = new TextView(a);
        countView.setTextSize(14);
        countView.setPadding(0, 10, 0, 10);
        layout.addView(countView);

        final ScrollView scroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        scroll.addView(listContainer);
        layout.addView(scroll);

        final Runnable[] refreshList = new Runnable[1];

        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int shown = 0;

                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;

                            final String realModel = model;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((selectedDelete.contains(realModel) ? "● " : "○ ") + realModel);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        if (selectedDelete.contains(realModel)) {
                                            selectedDelete.remove(realModel);
                                        } else {
                                            selectedDelete.add(realModel);
                                        }
                                        refreshList[0].run();
                                    } catch (Throwable e) {
                                        logger("选择删除模型异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    countView.setText(
                        "总计 " + allModels.size() +
                        " 个 / 当前显示 " + shown +
                        " 个 / 已选删除 " + selectedDelete.size() + " 个"
                    );

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新模型管理列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        btnAdd.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    String text = addInput.getText().toString().trim();
                    if (text.length() == 0) {
                        toast("请输入模型名");
                        return;
                    }

                    int added = 0;
                    String[] arr = text.split(",");
                    for (int i = 0; i < arr.length; i++) {
                        String m = fkSafeStr(arr[i]);
                        if (m.length() > 0 && !allModels.contains(m)) {
                            allModels.add(m);
                            added++;
                        }
                    }

                    addInput.setText("");
                    refreshList[0].run();

                    toast("已添加 " + added + " 个模型");

                } catch (Throwable e) {
                    logger("添加模型异常: " + e);
                    toast("添加失败: " + e.getMessage());
                }
            }
        });

        btnDelete.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    if (selectedDelete.isEmpty()) {
                        toast("请先点选要删除的模型");
                        return;
                    }

                    int removed = 0;
                    for (int i = allModels.size() - 1; i >= 0; i--) {
                        String m = fkSafeStr(allModels.get(i));
                        if (selectedDelete.contains(m)) {
                            allModels.remove(i);
                            removed++;
                        }
                    }

                    selectedDelete.clear();
                    refreshList[0].run();

                    toast("已删除 " + removed + " 个模型");

                } catch (Throwable e) {
                    logger("删除模型异常: " + e);
                    toast("删除失败: " + e.getMessage());
                }
            }
        });

        btnClear.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                try {
                    new AlertDialog.Builder(a)
                        .setTitle("确认清空？")
                        .setMessage("将清空当前编辑框内的全部模型，保存 API 后才会真正写入配置。")
                        .setPositiveButton("清空", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface d, int w) {
                                try {
                                    allModels.clear();
                                    selectedDelete.clear();
                                    refreshList[0].run();
                                    toast("已清空");
                                } catch (Throwable e) {}
                            }
                        })
                        .setNegativeButton("取消", null)
                        .show();
                } catch (Throwable e) {
                    logger("清空模型异常: " + e);
                }
            }
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("模型列表管理")
            .setView(layout)
            .setPositiveButton("写回", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refreshList[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                inputModels.setText(joinModelList(allModels));
                                refreshModelSummaryText(tvSummary, inputModels);
                                toast("已写回 " + allModels.size() + " 个模型");
                                dialog.dismiss();
                            } catch (Throwable e) {
                                logger("写回模型列表异常: " + e);
                                toast("写回失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("模型管理弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showModelsListManageUI异常: " + e);
        toast("打开失败: " + e.getMessage());
    }
}

void asyncTestApi(final Activity a, final EditText inputUrl, final EditText inputKey, final EditText inputModels, final String oldKey) {
    try {
        uiToast(a, "正在测试API...");
        new Thread(new Runnable() {
            public void run() {
                try {
                    String url = inputUrl.getText().toString().trim();
                    String keyText = inputKey.getText().toString().trim();
                    String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;
                    String modelsStr = inputModels.getText().toString().trim();

                    String model = "";
                    if (modelsStr.length() > 0) {
                        String[] arr = modelsStr.split(",");
                        if (arr.length > 0) model = arr[0].trim();
                    }

                    String err = testOpenAiApi(url, key, model);
                    if (err == null || err.length() == 0) {
                        uiToast(a, "✅ API可用，模型响应正常");
                    } else {
                        uiToast(a, "⚠️ API测试失败: " + err);
                    }
                } catch (Throwable e) {
                    logger("asyncTestApi异常: " + e);
                    uiToast(a, "测试失败: " + e.getMessage());
                }
            }
        }).start();
    } catch (Throwable e) {
        logger("asyncTestApi启动异常: " + e);
        toast("测试失败: " + e.getMessage());
    }
}

// ===== 对话上下文 =====
void addMsg(String role, String content, String talker) {
    List l = (List) windowMap.get(talker);
    if (l == null) { l = new ArrayList(); windowMap.put(talker, l); }
    Map m = new HashMap();
    m.put("role", role);
    m.put("content", content);
    l.add(m);
    if (l.size() > 20) l.remove(0);
}

void initConversation(String talker) {
    List l = (List) windowMap.get(talker);
    if (l != null && !l.isEmpty()) return;
    Map cfg = getUserConfig(talker);
    String style = fkSafeStr(cfg.get("style"));
    String stylePrompt = fkSafeStr(stylePrompts.get(style));
    if (stylePrompt.length() == 0) stylePrompt = style;
    String finalSystem = FIXED_BEHAVIOR_PROMPT + "\\n\\n【当前风格】\\n" + stylePrompt;
    addMsg("system", finalSystem, talker);
}

// ===== 屏蔽词处理 =====
List getAllBlockList() {
    List all = new ArrayList();
    List defaults = Arrays.asList("点歌", "play");
    for (int i = 0; i < defaults.size(); i++) {
        String w = fkSafeStr(defaults.get(i));
        if (w.length() > 0 && !all.contains(w)) all.add(w);
    }
    for (int i = 0; i < blockListGlobal.size(); i++) {
        String w = fkSafeStr(blockListGlobal.get(i));
        if (w.length() > 0 && !all.contains(w)) all.add(w);
    }
    return all;
}

boolean isBlocked(String text, List blockList) {
    String lower = fkSafeStr(text).toLowerCase();
    if (blockList == null) return false;
    for (int i = 0; i < blockList.size(); i++) {
        String w = fkSafeStr(blockList.get(i)).toLowerCase();
        if (w.length() > 0 && lower.indexOf(w) >= 0) return true;
    }
    return false;
}

// ===== 命令文本 =====
String getApiListMsg() {
    StringBuilder sb = new StringBuilder("📡 API列表\\n");
    for (int i = 0; i < apiList.size(); i++) {
        Map a = (Map) apiList.get(i);
        sb.append(i + 1).append(". ").append(fkSafeStr(a.get("name"))).append("\\n");
    }
    sb.append("用法: /api 1");
    return sb.toString();
}

String getModelListMsg(String talker) {
    Map c = getUserConfig(talker);
    int ai = fkToInt(c.get("apiIndex"), 0);
    List ms = (List) apiModels.get(ai);
    StringBuilder sb = new StringBuilder("🤖 模型列表\\n");
    if (ms != null) {
        for (int i = 0; i < ms.size(); i++) sb.append(i + 1).append(". ").append(fkSafeStr(ms.get(i))).append("\\n");
    }
    sb.append("用法: /model 1");
    return sb.toString();
}

String buildHelpText() {
    return " 📚命令说明书\\n"
        + "/help 查看这怎么整\\n"
        + "/config 查看整了啥\\n"
        + "/cmd 授权使用命令\\n"
        + "/mode 或 /bug 切换消息模式(不使用/讲人话/自测😡)\\n"
        + "/ai 切换回复开关\\n"
        + "/group 切换群聊开关\\n"
        + "/at 切换@开关\\n"
        + "/api 查看api列表 空格加数字选择\\n"
        + "/model 查看模型列表 空格加数字选择\\n"
        + "/style 查看风格列表 空格加风格名选择\\n"
        + "/addstyle 名称 内容 - 添加风格\\n"
        + "/delstyle 名称 - 删除风格\\n"
        + "/block 词1 词2 - 添加屏蔽词\\n"
        + "/unblock 词1 词2 - 移除屏蔽词\\n"
        + "群内成员授权: /群聊回复开关 (仅授权自己)\\n"
        + "/lastcall 最后一次通话时长,已失效";
}

String buildConfigText(String talker) {
    Map c = getUserConfig(talker);
    int aiEnabled = fkToInt(c.get("aiEnabled"), CFG_AI_ENABLED);
    int groupEnabled = fkToInt(c.get("groupEnabled"), CFG_GROUP_ENABLED);
    int requireAt = fkToInt(c.get("requireAt"), CFG_REQUIRE_AT);
    int cmdEnabled = fkToInt(c.get("cmdEnabled"), CFG_CMD_ENABLED);
    return "⚙️ 当前配置\\n"
        + "会话: " + talker + "\\n"
        + "AI: " + (aiEnabled == 1 ? "开" : "关") + "\\n"
        + "群聊: " + (groupEnabled == 1 ? "开" : "关") + "\\n"
        + "@触发: " + (requireAt == 1 ? "开" : "关") + "\\n"
        + "命令权限: " + (cmdEnabled == 1 ? "开启" : "关闭") + "\\n"
        + "模型: " + getCurrentModel(talker) + "\\n"
        + "风格: " + fkSafeStr(c.get("style"));
}

// ===== 命令处理 =====
boolean handleCommand(String talker, String cmd) {
    cmd = fkSafeStr(cmd);
    String lower = cmd.toLowerCase();
    Map c = getUserConfig(talker);

    if (lower.equals("/help")) { sendText(talker, buildHelpText()); return true; }
    if (lower.equals("/config")) { sendText(talker, buildConfigText(talker)); return true; }

    if (lower.equals("/cmd")) {
        int nv = (fkToInt(c.get("cmdEnabled"), CFG_CMD_ENABLED) == 1 ? 0 : 1);
        c.put("cmdEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "命令权限已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/mode") || lower.equals("/bug")) {
        String now = fkSafeStr(c.get("msgMode")).toLowerCase();
        if (now.length() == 0) now = "off";
        String next = "off";
        if ("off".equals(now)) next = "parse";
        else if ("parse".equals(now)) next = "raw";
        else next = "off";
        c.put("msgMode", next);
        saveAllConfigToFile();
        sendText(talker, "消息模式已切换为: " + next + "\\noff: 仅普通文本触发（富消息不触发）\\nparse: 富消息本地转人话后送AI\\nraw: 富消息原文直送AI");
        return true;
    }

    if (lower.equals("/ai")) {
        int nv = (fkToInt(c.get("aiEnabled"), CFG_AI_ENABLED) == 1 ? 0 : 1);
        c.put("aiEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "AI已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/group")) {
        int nv = (fkToInt(c.get("groupEnabled"), CFG_GROUP_ENABLED) == 1 ? 0 : 1);
        c.put("groupEnabled", nv);
        saveAllConfigToFile();
        sendText(talker, "群聊回复已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/at")) {
        int nv = (fkToInt(c.get("requireAt"), CFG_REQUIRE_AT) == 1 ? 0 : 1);
        c.put("requireAt", nv);
        saveAllConfigToFile();
        sendText(talker, "@触发已" + (nv == 1 ? "开启" : "关闭"));
        return true;
    }

    if (lower.equals("/api")) { sendText(talker, getApiListMsg()); return true; }

    if (lower.startsWith("/api ")) {
        try {
            int x = Integer.parseInt(cmd.substring(5).trim()) - 1;
            if (x >= 0 && x < apiList.size()) {
                c.put("apiIndex", x);
                c.put("modelIndex", 0);
                windowMap.put(talker, new ArrayList());
                saveAllConfigToFile();
                sendText(talker, "已切换API");
            } else sendText(talker, "API序号无效");
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    if (lower.equals("/model")) { sendText(talker, getModelListMsg(talker)); return true; }

    if (lower.startsWith("/model ")) {
        try {
            int apiIndex = fkToInt(c.get("apiIndex"), 0);
            List ms = (List) apiModels.get(apiIndex);
            int x = Integer.parseInt(cmd.substring(7).trim()) - 1;
            if (ms != null && x >= 0 && x < ms.size()) {
                c.put("modelIndex", x);
                windowMap.put(talker, new ArrayList());
                saveAllConfigToFile();
                sendText(talker, "已切换模型");
            } else sendText(talker, "模型序号无效");
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    // 添加API: /addapi 名称 URL Key 模型1,模型2
    if (lower.startsWith("/addapi ")) {
        String rest = cmd.substring(8).trim();
        String[] parts = rest.split("\\\\s+");
        if (parts.length < 4) {
            sendText(talker, "用法: /addapi 名称 URL Key 模型1,模型2\\n例: /addapi 我的API https://api.xxx.com sk-xxx gpt-4,gpt-3.5");
            return true;
        }
        String name = parts[0].trim();
        String url = parts[1].trim();
        String key = parts[2].trim();
        String modelsStr = parts[3].trim();
        Map api = new HashMap();
        api.put("name", name);
        api.put("url", url);
        api.put("key", key);
        apiList.add(api);
        List ms = new ArrayList();
        String[] models = modelsStr.split(",");
        for (int i = 0; i < models.length; i++) {
            String m = models[i].trim();
            if (m.length() > 0) ms.add(m);
        }
        apiModels.put(apiList.size() - 1, ms);
        saveApiToFile();
        sendText(talker, "✅ 已添加API: " + name + " (" + ms.size() + "个模型)");
        return true;
    }

    // 删除API: /delapi 序号
    if (lower.startsWith("/delapi ")) {
        try {
            int idx = Integer.parseInt(cmd.substring(8).trim()) - 1;
            if (idx < 0 || idx >= apiList.size()) {
                sendText(talker, "⚠️ 序号无效，当前有 " + apiList.size() + " 个API");
                return true;
            }
            String name = fkSafeStr(((Map) apiList.get(idx)).get("name"));
            apiList.remove(idx);
            apiModels.remove(idx);
            Map newModels = new HashMap();
            for (int i = 0; i < apiList.size(); i++) newModels.put(i, apiModels.get(i));
            apiModels.clear();
            apiModels.putAll(newModels);
            for (Object k : userConfigMap.keySet()) {
                Map uc = (Map) userConfigMap.get(k);
                int oldIdx = fkToInt(uc.get("apiIndex"), 0);
                if (oldIdx == idx) uc.put("apiIndex", 0);
                else if (oldIdx > idx) uc.put("apiIndex", oldIdx - 1);
            }
            saveApiToFile();
            saveAllConfigToFile();
            sendText(talker, "✅ 已删除API: " + name);
        } catch (Throwable e) { sendText(talker, "参数错误"); }
        return true;
    }

    // 添加模型: /addmodel 模型1,模型2
    if (lower.startsWith("/addmodel ")) {
        String modelsStr = cmd.substring(10).trim();
        if (modelsStr.length() == 0) {
            sendText(talker, "用法: /addmodel 模型1,模型2");
            return true;
        }
        int apiIdx = fkToInt(c.get("apiIndex"), 0);
        List ms = (List) apiModels.get(apiIdx);
        if (ms == null) ms = new ArrayList();
        int added = 0;
        String[] models = modelsStr.split(",");
        for (int i = 0; i < models.length; i++) {
            String m = models[i].trim();
            if (m.length() > 0 && !ms.contains(m)) { ms.add(m); added++; }
        }
        apiModels.put(apiIdx, ms);
        saveApiToFile();
        sendText(talker, "✅ 已添加 " + added + " 个模型到当前API");
        return true;
    }

    // 删除模型: /delmodel 模型名
    if (lower.startsWith("/delmodel ")) {
        String modelName = cmd.substring(10).trim();
        if (modelName.length() == 0) {
            sendText(talker, "用法: /delmodel 模型名");
            return true;
        }
        int apiIdx = fkToInt(c.get("apiIndex"), 0);
        List ms = (List) apiModels.get(apiIdx);
        if (ms == null || !ms.contains(modelName)) {
            sendText(talker, "⚠️ 当前API不存在该模型");
            return true;
        }
        ms.remove(modelName);
        apiModels.put(apiIdx, ms);
        int oldModelIdx = fkToInt(c.get("modelIndex"), 0);
        if (oldModelIdx >= ms.size()) c.put("modelIndex", 0);
        saveApiToFile();
        saveAllConfigToFile();
        sendText(talker, "✅ 已删除模型: " + modelName);
        return true;
    }

    if (lower.equals("/style")) {
        StringBuilder sb = new StringBuilder("🎭 可选风格\\n");
        for (Object key : stylePrompts.keySet()) {
            String name = fkSafeStr(key);
            if (!isValidName(name)) continue;
            sb.append("· ").append(name).append("\\n");
        }
        sb.append("用法: /style 风格名\\n");
        sb.append("添加: /addstyle 名称 内容\\n");
        sb.append("删除: /delstyle 名称");
        sendText(talker, sb.toString());
        return true;
    }

    if (lower.startsWith("/style ")) {
        String styleName = cmd.substring(7).trim();
        if (styleName.length() == 0) { sendText(talker, "用法: /style 风格名"); return true; }
        if (!stylePrompts.containsKey(styleName)) {
            sendText(talker, "⚠️ 未知风格，发送 /style 查看可选列表");
            return true;
        }
        c.put("style", styleName);
        windowMap.put(talker, new ArrayList());
        saveAllConfigToFile();
        sendText(talker, "风格已切换为: " + styleName);
        return true;
    }

    // 添加风格: /addstyle 名称 内容
    if (lower.startsWith("/addstyle ")) {
        String rest = cmd.substring(10).trim();
        int spaceIdx = rest.indexOf(" ");
        if (spaceIdx <= 0) {
            sendText(talker, "用法: /addstyle 风格名 内容");
            return true;
        }
        String name = rest.substring(0, spaceIdx).trim();
        String content = rest.substring(spaceIdx + 1).trim();
        if (!isValidName(name)) {
            sendText(talker, "⚠️ 风格名不能包含特殊字符");
            return true;
        }
        if (content.length() == 0) {
            sendText(talker, "⚠️ 内容不能为空");
            return true;
        }
        stylePrompts.put(name, content);
        saveStylesToFile();
        sendText(talker, "✅ 风格[" + name + "]已添加");
        return true;
    }

    // 删除风格: /delstyle 名称
    if (lower.startsWith("/delstyle ")) {
        String name = cmd.substring(10).trim();
        if (name.length() == 0) {
            sendText(talker, "用法: /delstyle 风格名");
            return true;
        }
        if (!stylePrompts.containsKey(name)) {
            sendText(talker, "⚠️ 风格不存在");
            return true;
        }
        stylePrompts.remove(name);
        saveStylesToFile();
        sendText(talker, "✅ 风格[" + name + "]已删除");
        return true;
    }

    // 添加屏蔽词: /block 词1 词2
    if (lower.startsWith("/block ")) {
        String rest = cmd.substring(7).trim();
        if (rest.length() == 0) {
            sendText(talker, "用法: /block 词1 词2");
            return true;
        }
        String[] words = rest.split("[,\\\\s，]+");
        int added = 0;
        for (int i = 0; i < words.length; i++) {
            String w = fkSafeStr(words[i]);
            if (w.length() > 0 && !blockListGlobal.contains(w)) {
                blockListGlobal.add(w);
                added++;
            }
        }
        if (added > 0) {
            saveBlockListToFile();
            sendText(talker, "✅ 已添加 " + added + " 个屏蔽词");
        } else {
            sendText(talker, "⚠️ 未添加任何屏蔽词");
        }
        return true;
    }

    // 移除屏蔽词: /unblock 词1 词2
    if (lower.startsWith("/unblock ")) {
        String rest = cmd.substring(9).trim();
        if (rest.length() == 0) {
            sendText(talker, "用法: /unblock 词1 词2");
            return true;
        }
        String[] words = rest.split("[,\\\\s，]+");
        int removed = 0;
        for (int i = 0; i < words.length; i++) {
            String w = fkSafeStr(words[i]);
            if (w.length() > 0 && blockListGlobal.remove(w)) {
                removed++;
            }
        }
        if (removed > 0) {
            saveBlockListToFile();
            sendText(talker, "✅ 已移除 " + removed + " 个屏蔽词");
        } else {
            sendText(talker, "⚠️ 未移除任何屏蔽词");
        }
        return true;
    }

    if (lower.equals("/lastcall")) {
        String d = fkSafeStr(lastCallDurationMap.get(talker));
        if (d.length() == 0) sendText(talker, "暂无通话时长记录");
        else sendText(talker, "最近一次通话时长: " + d);
        return true;
    }

    return false;
}

// ===== FK消息读取 =====
String fkFieldStr(Object o, String f) {
    try {
        java.lang.reflect.Field ff = o.getClass().getDeclaredField(f);
        ff.setAccessible(true);
        Object v = ff.get(o);
        return v == null ? "" : String.valueOf(v).trim();
    } catch (Throwable e) { return ""; }
}

boolean fkIsSend(Object msg) {
    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return (Boolean) v;
    } catch (Throwable e) {}
    try {
        java.lang.reflect.Field f = msg.getClass().getDeclaredField("isSend");
        f.setAccessible(true);
        Object v = f.get(msg);
        if (v instanceof Boolean) return (Boolean) v;
    } catch (Throwable e) {}
    return false;
}

String getSenderInGroup(Object msg) {
    String s = fkFieldStr(msg, "sendTalker");
    return s == null ? "" : s.trim();
}

// ===== 群成员授权白名单 =====
Set getOrCreateGroupAuthSet(String roomTalker) {
    Set set = (Set) groupMemberAiAuthMap.get(roomTalker);
    if (set == null) {
        set = new HashSet();
        groupMemberAiAuthMap.put(roomTalker, set);
    }
    return set;
}

boolean isGroupMemberAiAuthorized(String roomTalker, String memberWxid) {
    if (roomTalker == null || memberWxid == null) return false;
    Set set = (Set) groupMemberAiAuthMap.get(roomTalker);
    return set != null && set.contains(memberWxid);
}

boolean toggleGroupMemberAiAuth(String roomTalker, String memberWxid) {
    Set set = getOrCreateGroupAuthSet(roomTalker);
    if (set.contains(memberWxid)) {
        set.remove(memberWxid);
        return false;
    } else {
        set.add(memberWxid);
        return true;
    }
}

// ===== 归一化 =====
String pickXmlTag(String s, String tag) {
    try {
        String a = "<" + tag + ">";
        String b = "</" + tag + ">";
        int i = s.indexOf(a);
        int j = s.indexOf(b);
        if (i >= 0 && j > i) return s.substring(i + a.length(), j).trim();
    } catch (Throwable e) {}
    return "";
}

boolean containsAny(String s, String[] arr) {
    if (s == null) return false;
    for (int i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) >= 0) return true;
    }
    return false;
}

String extractCallDuration(String s) {
    try {
        java.util.regex.Pattern p = java.util.regex.Pattern.compile("(\\\\d{1,2}:\\\\d{2}(?::\\\\d{2})?)");
        java.util.regex.Matcher m = p.matcher(s);
        if (m.find()) return m.group(1);
    } catch (Throwable e) {}
    return "";
}

String normalizeIncomingContent(String raw, boolean isGroup, String sender, String talker, Map cfg) {
    String s = raw == null ? "" : raw.trim();
    if (s.length() == 0) return "";
    String lower = s.toLowerCase();
    String mode = fkSafeStr(cfg.get("msgMode")).toLowerCase();
    if (mode.length() == 0) mode = "off";
    if ("raw".equals(mode)) return s;
    if ("off".equals(mode)) return s;

    if (containsAny(s, new String[]{"拍了拍", "拍一拍"})) return "[拍一拍] " + s;
    if (containsAny(lower, new String[]{"voip_content_voice", "voip_content_video"})) return "[通话提醒] 对方发起了通话相关消息";
    if (containsAny(s, new String[]{"通话时长", "通话时间"})) {
        String dur = extractCallDuration(s);
        if (dur.length() > 0) { lastCallDurationMap.put(talker, dur); return "[通话状态] 已接通，通话时长 " + dur; }
        return "[通话状态] 已接通（有通话时长）";
    }
    if (containsAny(s, new String[]{"未接", "已取消", "忙线", "拒接", "未接听"})) return "[通话状态] 未接通（未接/取消/忙线/拒接）";
    if (containsAny(s, new String[]{"微信红包", "红包"})) {
        if (containsAny(s, new String[]{"已领取", "领取了", "红包已被领取"})) return "[红包消息] 红包已被领取";
        if (containsAny(s, new String[]{"待领取", "未领取", "领取红包"})) return "[红包消息] 红包待领取";
        return "[红包消息] 收到红包相关消息";
    }
    if (containsAny(s, new String[]{"转账", "微信转账", "收款"})) {
        if (containsAny(s, new String[]{"待收款", "请确认收款"})) return "[转账消息] 待收款";
        if (containsAny(s, new String[]{"已收款", "收款成功", "已确认收款"})) return "[转账消息] 已收款";
        if (containsAny(s, new String[]{"已退还", "已退款", "退回"})) return "[转账消息] 已退回";
        return "[转账消息] 收到转账相关消息";
    }
    if (containsAny(lower, new String[]{"<location", " x=\\"", " y=\\"", " label=\\"", "poiname"})) {
        String label = "";
        try { int i = s.indexOf("label=\\""); if (i >= 0) { int j = s.indexOf("\\"", i + 7); if (j > i) label = s.substring(i + 7, j); } } catch (Throwable e) {}
        if (label.length() == 0) label = pickXmlTag(s, "label");
        if (label.length() > 0) return "[位置消息] " + label;
        return "[位置消息]";
    }
    if (containsAny(lower, new String[]{"<refermsg>", "<msg>", "<appmsg", "svrid"})) {
        String cur = pickXmlTag(s, "title");
        String quoted = pickXmlTag(s, "content");
        String who = pickXmlTag(s, "displayname");
        if (quoted.length() == 0 && s.indexOf("<refermsg>") >= 0) quoted = "[被引用内容]";
        if (cur.length() == 0) cur = "[当前消息]";
        if (who.length() == 0) who = "对方";
        if (s.indexOf("<refermsg>") >= 0) return "[引用消息]\\n引用人: " + who + "\\n被引用: " + quoted + "\\n当前: " + cur;
    }
    if (containsAny(lower, new String[]{"<appmsg", "<url>", "game.weixin.qq.com", "music", "<mmreader"})) {
        String title = pickXmlTag(s, "title");
        if (title.length() > 0) return "[卡片消息] " + title;
        return "[卡片/小程序/链接消息]";
    }
    if (containsAny(s, new String[]{"名片", "vcard", "contact"})) return "[名片消息]";
    if (containsAny(lower, new String[]{"gif", "<emoji", "md5="})) return "[表情消息]";
    if (containsAny(lower, new String[]{"<img", ".jpg", ".jpeg", ".png", ".webp"})) return "[图片消息]";
    return s;
}

// ===== AI调用 =====
// ===== AI调用 =====
void trySendByChain(String talker, Map config, List msgSnapshot, int apiIdx, int modelIdx) {
    java.net.HttpURLConnection conn = null;
    try {
        if (apiList == null || apiList.isEmpty()) {
            sendText(talker, "⚠️ 还没有配置可用的API");
            return;
        }

        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        Map api = (Map) apiList.get(apiIdx);
        List models = (List) apiModels.get(apiIdx);

        if (models == null || models.isEmpty()) {
            sendText(talker, "⚠️ 当前API还没有可用模型");
            return;
        }

        if (modelIdx < 0 || modelIdx >= models.size()) modelIdx = 0;

        String model = fkSafeStr(models.get(modelIdx));
        String url = fkSafeStr(api.get("url"));
        String key = fkSafeStr(api.get("key"));

        if (url.length() == 0 || key.length() == 0 || model.length() == 0) {
            sendText(talker, "⚠️ API配置不完整，请检查URL、Key和模型");
            return;
        }

        JSONObject params = new JSONObject();
        params.put("model", model);
        params.put("messages", new JSONArray(msgSnapshot));
        params.put("temperature", 1.0D);

        java.net.URL obj = new java.net.URL(url);
        conn = (java.net.HttpURLConnection) obj.openConnection();
        conn.setRequestMethod("POST");
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "Bearer " + key);
        conn.setDoOutput(true);
        conn.setConnectTimeout(10000);
        conn.setReadTimeout(30000);

        java.io.OutputStream os = conn.getOutputStream();
        os.write(params.toString().getBytes("UTF-8"));
        os.flush();
        os.close();

        int code = conn.getResponseCode();
        java.io.InputStream is = (code >= 200 && code < 300) ? conn.getInputStream() : conn.getErrorStream();

        java.io.BufferedReader in = new java.io.BufferedReader(new java.io.InputStreamReader(is, "UTF-8"));
        String line;
        StringBuilder resp = new StringBuilder();
        while ((line = in.readLine()) != null) resp.append(line);
        in.close();

        String respStr = resp.toString();

        if (code >= 200 && code < 300) {
            JSONObject json = new JSONObject(respStr);
            JSONArray choices = json.optJSONArray("choices");

            if (choices == null || choices.length() == 0) {
                logger("API响应缺少choices: " + respStr);
                sendText(talker, "⚠️ 我这边接口返回有点异常，稍后再试一下");
                return;
            }

            JSONObject choice = choices.optJSONObject(0);
            if (choice == null) {
                logger("API响应choice为空: " + respStr);
                sendText(talker, "⚠️ 我这边接口返回有点异常，稍后再试一下");
                return;
            }

            JSONObject msg = choice.optJSONObject("message");
            String out = "";
            if (msg != null) out = msg.optString("content", "");

            // 兼容少数接口返回 text
            if (out == null || out.trim().length() == 0) {
                out = choice.optString("text", "");
            }

            if (out == null || out.trim().length() == 0) {
                logger("API响应内容为空: " + respStr);
                sendText(talker, "⚠️ 我这边没有拿到有效回复，稍后再试一下");
                return;
            }

            addMsg("assistant", out, talker);
            sendText(talker, out.trim());

        } else {
            logger("API返回错误(" + code + "): " + respStr);

            if (code == 401 || code == 403) {
                sendText(talker, "⚠️ API认证失败，请检查Key是否正确");
            } else if (code == 404) {
                sendText(talker, "⚠️ API地址或模型可能不正确，请检查配置");
            } else if (code == 429) {
                sendText(talker, "⚠️ 接口请求太频繁了，稍后再试一下");
            } else if (code >= 500) {
                sendText(talker, "⚠️ 上游接口暂时不稳定，稍后再试一下");
            } else {
                sendText(talker, "⚠️ 我这边接口暂时没回好，稍后再试一下");
            }
        }

    } catch (Throwable e) {
        logger("trySendByChain异常: " + e);
        sendText(talker, "⚠️ 请求暂时失败，稍后再试一下");
    } finally {
        try { if (conn != null) conn.disconnect(); } catch (Throwable e) {}
    }
}

void sendOpenAiResp(String talker, String content) {
    Map cfg = getUserConfig(talker);
    String style = fkSafeStr(cfg.get("style"));
    if ("复读机".equals(style)) {
        sendText(talker, content);
        return;
    }
    initConversation(talker);
    addMsg("user", content, talker);
    int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
    int modelIdx = fkToInt(cfg.get("modelIndex"), 0);
    if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;
    List ms = (List) apiModels.get(apiIdx);
    if (ms == null || ms.isEmpty()) { sendText(talker, "⚠️ 无可用模型"); return; }
    if (modelIdx < 0 || modelIdx >= ms.size()) modelIdx = 0;
    List msgSnapshot = new ArrayList();
    List l = (List) windowMap.get(talker);
    if (l != null) msgSnapshot.addAll(l);
    trySendByChain(talker, cfg, msgSnapshot, apiIdx, modelIdx);
}

// ===== FK入口 =====
void onMsg(Object msg) {
    try {
        initApiConfig();
        initStyles();
        initBlockList();
        String talker = fkFieldStr(msg, "talker");
        String content = fkFieldStr(msg, "content");
        if (content.length() == 0) content = fkFieldStr(msg, "rawContent");
        boolean isSelf = fkIsSend(msg);
        String sender = getSenderInGroup(msg);
        if (talker.length() == 0 || content.trim().length() == 0) return;
        String clean = content.trim();
        Map cfg = getUserConfig(talker);
        boolean isGroup = (talker != null && talker.endsWith("@chatroom"));

        if (clean.startsWith("/")) {
            if (isGroup && "/群聊回复开关".equalsIgnoreCase(clean)) {
                if (sender.length() == 0) { sendText(talker, "⚠️ 未识别发送者，无法切换授权"); return; }
                boolean on = toggleGroupMemberAiAuth(talker, sender);
                saveAllConfigToFile();
                sendText(talker, on ? "✅ 已授权你在本群触发AI" : "🛑 已取消你在本群的AI授权");
                return;
            }
            if (isSelf) {
                boolean ok = handleCommand(talker, clean);
                if (ok) toast("✅ 命令已执行");
                else toast("❌ 未知命令");
                return;
            }
            int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
            if (cmdEnabled == 1) handleCommand(talker, clean);
            else sendText(talker, "⛔ 未授权命令，管理员可发送 /cmd 开启");
            return;
        }

        if (isSelf) return;
        if (isGroup && fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED) != 1) return;
        boolean atMe = isGroup && clean.contains("@" + robotName);
        if (isGroup && fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT) == 1 && !atMe) return;
        boolean aiSwitchOn = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED) == 1;
        boolean friendOk = (!isGroup) && friendAuthMap.containsKey(talker);
        boolean groupOk = isGroup && groupAuthMap.containsKey(talker);
        if (!aiSwitchOn && !friendOk && !groupOk) return;
        if (isGroup) {
            if (sender.length() == 0) return;
            if (!isGroupMemberAiAuthorized(talker, sender)) return;
        }
        if (atMe) clean = clean.replace("@" + robotName, "").trim();
        if (clean.length() == 0) return;
        String modeNow = fkSafeStr(cfg.get("msgMode")).toLowerCase();
        if (modeNow.length() == 0) modeNow = "off";
        String lowerClean = clean.toLowerCase();
        boolean isQuote = lowerClean.contains("<refermsg>");
        String blockCheckText = clean;
        String quoteContent = "";
        if (isQuote) {
            quoteContent = pickXmlTag(clean, "content");
            String title = pickXmlTag(clean, "title");
            if (title.length() > 0) blockCheckText = title;
        }
        if ("off".equals(modeNow)) {
            if (lowerClean.indexOf("<msg") >= 0 || lowerClean.indexOf("<appmsg") >= 0
                || lowerClean.indexOf("voip_content_") >= 0 || clean.indexOf("拍了拍") >= 0 || clean.indexOf("拍一拍") >= 0
                || lowerClean.indexOf("<location") >= 0 || lowerClean.indexOf("label=\\"") >= 0
                || lowerClean.indexOf("<emoji") >= 0 || lowerClean.indexOf("md5=") >= 0) {
                if (!isQuote) return;
            }
        }
        String normalized;
        if (isQuote) {
            if (quoteContent.length() > 0) {
                normalized = "用户引用的消息内容是：" + quoteContent + "，用户当前说：" + blockCheckText + "。请你结合引用场景自然回复。";
            } else {
                normalized = "用户引用了一条消息并回复了 \\"" + blockCheckText + "\\"。请你结合引用场景自然回复，不要解释引用规则。";
            }
        } else {
            normalized = normalizeIncomingContent(clean, isGroup, sender, talker, cfg);
        }
        if (normalized.length() == 0) return;
        
        // 屏蔽词检查：只检查处理后的 normalized，避免原始 XML 被误杀
        if (isBlocked(normalized, getAllBlockList())) return;
        
        sendOpenAiResp(talker, normalized);
    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== 其余回调 =====
void onLoad() {
    loadAllConfigFromFile();
    initApiConfig();
    initStyles();
    initBlockList();
    logger("[吃不香菜🤔FkAI回复] 已加载");
}

void onUnload() {}
void onUnLoad() {}
void onHandleMsg(Object msgInfoBean) {}

//-------------------发送按钮拦截--------------------
boolean onClickSendBtn(String text) {
    try {
        String t = fkSafeStr(text);
        if (t.length() == 0) return false;
        if (t.startsWith("/")) {
            String talker = fkSafeStr(getTargetTalker());
            if (talker.length() == 0) {
                toast("未识别会话");
                return true;
            }
            boolean ok = handleCommand(talker, t);
            toast(ok ? "✅ 命令已执行" : "❌ 未知命令");
            return true;
        }
    } catch (Throwable e) {}
    return false;
}

// ===== 长按菜单入口 =====
void onMsgMenu(Object msg) {
    Activity a = getTopActivity();
    if (a != null) {
        String msgTalker = fkFieldStr(msg, "talker");
        if (msgTalker.length() > 0) uiTalker = msgTalker;
        if (currentDialog == null || !currentDialog.isShowing()) showMainUI(a);
        else refreshUIButtons();
    }
}

// ===== UI状态卡片 / 模型搜索 / 常用预设 =====

String getCurrentApiNameSafe(String talker) {
    try {
        Map cfg = getUserConfig(talker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
        if (apiList == null || apiList.isEmpty()) return "无API";
        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;
        Map api = (Map) apiList.get(apiIdx);
        return fkSafeStr(api.get("name"));
    } catch (Throwable e) {
        return "未知API";
    }
}

String getCurrentModelNameSafe(String talker) {
    try {
        Map cfg = getUserConfig(talker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
        int modelIdx = fkToInt(cfg.get("modelIndex"), 0);

        if (apiList == null || apiList.isEmpty()) return "无模型";
        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        List models = (List) apiModels.get(apiIdx);
        if (models == null || models.isEmpty()) return "无模型";

        if (modelIdx < 0 || modelIdx >= models.size()) modelIdx = 0;
        return fkSafeStr(models.get(modelIdx));
    } catch (Throwable e) {
        return "未知模型";
    }
}

String buildUiStatusText() {
    try {
        Map cfg = getUserConfig(uiTalker);

        boolean isGroup = uiTalker != null && uiTalker.endsWith("@chatroom");

        String talkerShow = fkSafeStr(uiTalker);
        if (talkerShow.length() == 0) talkerShow = "未知会话";
        if (talkerShow.length() > 34) talkerShow = talkerShow.substring(0, 34) + "...";

        String msgMode = fkSafeStr(cfg.get("msgMode"));
        if (msgMode.length() == 0) msgMode = "off";

        int aiEnabled = fkToInt(cfg.get("aiEnabled"), CFG_AI_ENABLED);
        int cmdEnabled = fkToInt(cfg.get("cmdEnabled"), CFG_CMD_ENABLED);
        int groupEnabled = fkToInt(cfg.get("groupEnabled"), CFG_GROUP_ENABLED);
        int requireAt = fkToInt(cfg.get("requireAt"), CFG_REQUIRE_AT);

        String authText = "未授权";
        if (isGroup) {
            authText = groupAuthMap.containsKey(uiTalker) ? "群已授权" : "群未授权";
        } else {
            authText = friendAuthMap.containsKey(uiTalker) ? "好友已授权" : "好友未授权";
        }

        return "📌 当前会话状态\\n"
            + "会话: " + talkerShow + "\\n"
            + "类型: " + (isGroup ? "群聊" : "私聊") + " / " + authText + "\\n"
            + "AI回复: " + (aiEnabled == 1 ? "开" : "关")
            + "    命令: " + (cmdEnabled == 1 ? "开" : "关") + "\\n"
            + "消息模式: " + msgMode
            + "    @要求: " + (requireAt == 1 ? "开" : "关") + "\\n"
            + "群聊回复: " + (groupEnabled == 1 ? "开" : "关") + "\\n"
            + "API: " + getCurrentApiNameSafe(uiTalker) + "\\n"
            + "模型: " + getCurrentModelNameSafe(uiTalker) + "\\n"
            + "风格: " + fkSafeStr(cfg.get("style"));
    } catch (Throwable e) {
        logger("buildUiStatusText异常: " + e);
        return "📌 当前会话状态读取失败";
    }
}

String[] getPresetNames() {
    return new String[] {
        "OpenAI 常用",
        "DeepSeek 常用",
        "Gemini兼容 常用",
        "通义千问 常用",
        "豆包 常用",
        "硅基流动 常用",
        "OpenRouter 常用",
        "Claude兼容 常用"
    };
}

String[] getPresetModels() {
    return new String[] {
        "gpt-4o,gpt-4o-mini,gpt-4.1,gpt-4.1-mini,o4-mini",
        "deepseek-chat,deepseek-reasoner",
        "gemini-1.5-pro,gemini-1.5-flash,gemini-2.0-flash,gemini-2.5-pro,gemini-2.5-flash",
        "qwen-plus,qwen-turbo,qwen-max,qwen-long",
        "doubao-seed-1-6,doubao-seed-1-6-flash,doubao-1-5-pro-32k,doubao-1-5-lite-32k",
        "Qwen/Qwen2.5-7B-Instruct,deepseek-ai/DeepSeek-V3,deepseek-ai/DeepSeek-R1,Pro/deepseek-ai/DeepSeek-V3",
        "openai/gpt-4o-mini,openai/gpt-4o,anthropic/claude-3.5-sonnet,google/gemini-flash-1.5,deepseek/deepseek-chat",
        "claude-3-5-sonnet-latest,claude-3-5-haiku-latest,claude-3-opus-latest"
    };
}

List parseModelCsvToList(String modelsStr) {
    List out = new ArrayList();
    try {
        String[] arr = fkSafeStr(modelsStr).split(",");
        for (int i = 0; i < arr.length; i++) {
            String m = fkSafeStr(arr[i]);
            if (m.length() > 0 && !out.contains(m)) out.add(m);
        }
    } catch (Throwable e) {
        logger("parseModelCsvToList异常: " + e);
    }
    return out;
}

void showModelPresetUI(final Activity a, final AlertDialog parentDialog) {
    try {
        if (apiList == null || apiList.isEmpty()) {
            toast("请先添加API");
            return;
        }

        final String[] names = getPresetNames();
        final String[] models = getPresetModels();

        new AlertDialog.Builder(a)
            .setTitle("常用模型预设")
            .setItems(names, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, final int which) {
                    try {
                        final String presetName = names[which];
                        final String presetModels = models[which];

                        new AlertDialog.Builder(a)
                            .setTitle(presetName)
                            .setMessage(
                                "模型列表:\\n" + presetModels.replace(",", "\\n") +
                                "\\n\\n请选择写入方式："
                            )
                            .setPositiveButton("替换当前API模型", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        Map cfg = getUserConfig(uiTalker);
                                        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
                                        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

                                        List newList = parseModelCsvToList(presetModels);
                                        apiModels.put(apiIdx, newList);

                                        cfg.put("modelIndex", 0);
                                        windowMap.put(uiTalker, new ArrayList());

                                        saveApiToFile();
                                        saveAllConfigToFile();
                                        refreshUIButtons();

                                        toast("已替换为预设: " + presetName);
                                        try { if (parentDialog != null) parentDialog.dismiss(); } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("替换模型预设异常: " + e);
                                        toast("替换失败: " + e.getMessage());
                                    }
                                }
                            })
                            .setNeutralButton("追加到当前API", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        Map cfg = getUserConfig(uiTalker);
                                        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);
                                        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

                                        List oldList = (List) apiModels.get(apiIdx);
                                        if (oldList == null) oldList = new ArrayList();

                                        List addList = parseModelCsvToList(presetModels);
                                        int added = 0;
                                        for (int i = 0; i < addList.size(); i++) {
                                            String m = fkSafeStr(addList.get(i));
                                            if (m.length() > 0 && !oldList.contains(m)) {
                                                oldList.add(m);
                                                added++;
                                            }
                                        }

                                        apiModels.put(apiIdx, oldList);

                                        saveApiToFile();
                                        saveAllConfigToFile();
                                        refreshUIButtons();

                                        toast("已追加 " + added + " 个模型");
                                        try { if (parentDialog != null) parentDialog.dismiss(); } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("追加模型预设异常: " + e);
                                        toast("追加失败: " + e.getMessage());
                                    }
                                }
                            })
                            .setNegativeButton("取消", null)
                            .show();

                    } catch (Throwable e) {
                        logger("选择模型预设异常: " + e);
                        toast("失败: " + e.getMessage());
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showModelPresetUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}

void showModelSelectorUI(final Activity a) {
    try {
        Map cfg = getUserConfig(uiTalker);
        int apiIdx = fkToInt(cfg.get("apiIndex"), 0);

        if (apiList == null || apiList.isEmpty()) {
            toast("无API");
            return;
        }

        if (apiIdx < 0 || apiIdx >= apiList.size()) apiIdx = 0;

        final List ms = (List) apiModels.get(apiIdx);
        if (ms == null || ms.isEmpty()) {
            toast("当前API无模型，可先用“常用模型预设”添加");
            showModelPresetUI(a, null);
            return;
        }

        final List allModels = new ArrayList();
        for (int i = 0; i < ms.size(); i++) {
            String m = fkSafeStr(ms.get(i));
            if (m.length() > 0) allModels.add(m);
        }

        if (allModels.isEmpty()) {
            toast("模型列表为空");
            return;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索模型，例如 gpt / deepseek / qwen");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        Button btnPreset = new Button(a);
        btnPreset.setText("常用模型预设");
        layout.addView(btnPreset);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog[] dialogRef = new AlertDialog[1];

        final Runnable[] refreshList = new Runnable[1];
        refreshList[0] = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();
                    int cur = fkToInt(getUserConfig(uiTalker).get("modelIndex"), 0);

                    int shown = 0;
                    for (int i = 0; i < allModels.size(); i++) {
                        String model = fkSafeStr(allModels.get(i));
                        String low = model.toLowerCase();

                        if (kw.length() == 0 || low.contains(kw)) {
                            shown++;
                            final int realIdx = i;

                            TextView tv = new TextView(listContainer.getContext());
                            tv.setText((realIdx == cur ? "● " : "○ ") + model);
                            tv.setTextSize(16);
                            tv.setPadding(8, 14, 8, 14);

                            tv.setOnClickListener(new View.OnClickListener() {
                                public void onClick(View v) {
                                    try {
                                        Map c = getUserConfig(uiTalker);
                                        c.put("modelIndex", realIdx);
                                        windowMap.put(uiTalker, new ArrayList());
                                        saveAllConfigToFile();
                                        refreshUIButtons();
                                        toast("已切换模型: " + fkSafeStr(allModels.get(realIdx)));
                                        try {
                                            if (dialogRef[0] != null) dialogRef[0].dismiss();
                                        } catch (Throwable e) {}
                                    } catch (Throwable e) {
                                        logger("点击模型异常: " + e);
                                        toast("切换失败: " + e.getMessage());
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    if (shown == 0) {
                        TextView empty = new TextView(listContainer.getContext());
                        empty.setText("没有匹配的模型");
                        empty.setTextSize(15);
                        empty.setPadding(8, 20, 8, 20);
                        listContainer.addView(empty);
                    }

                } catch (Throwable e) {
                    logger("刷新模型搜索列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }
            public void afterTextChanged(android.text.Editable s) {}
        });

        btnPreset.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showModelPresetUI(a, dialogRef[0]);
            }
        });

        dialogRef[0] = new AlertDialog.Builder(a)
            .setTitle("选择模型 - " + getCurrentApiNameSafe(uiTalker))
            .setView(layout)
            .setNegativeButton("关闭", null)
            .create();

        dialogRef[0].setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try { refreshList[0].run(); } catch (Throwable e) {}
            }
        });

        dialogRef[0].show();

    } catch (Throwable e) {
        logger("showModelSelectorUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}

// ===== UI刷新 =====
void refreshUIButtons() {
    try {
        if (currentDialog == null || !currentDialog.isShowing()) return;

        Map cfg = getUserConfig(uiTalker);

        if (uiTvStatus != null) {
            uiTvStatus.setText(buildUiStatusText());
        }

        if (uiBtnAi != null) {
            uiBtnAi.setText("AI回复: " + (fkToInt(cfg.get("aiEnabled"), 0) == 1 ? "开" : "关"));
        }

        if (uiBtnCmd != null) {
            uiBtnCmd.setText("命令权限: " + (fkToInt(cfg.get("cmdEnabled"), 0) == 1 ? "开" : "关"));
        }

        if (uiBtnMode != null) {
            String modeNow = fkSafeStr(cfg.get("msgMode"));
            if (modeNow.length() == 0) modeNow = "off";
            uiBtnMode.setText("消息模式: " + modeNow);
        }

        if (uiBtnApi != null) {
            uiBtnApi.setText("API: " + getCurrentApiNameSafe(uiTalker));
        }

        if (uiBtnModel != null) {
            uiBtnModel.setText("模型: " + getCurrentModelNameSafe(uiTalker));
        }

        if (uiBtnStyle != null) {
            uiBtnStyle.setText("风格: " + fkSafeStr(cfg.get("style")));
        }

    } catch (Throwable e) {
        logger("refreshUIButtons异常: " + e);
    }
}


// ===== 主设置UI =====
void showMainUI(Activity a) {
    initApiConfig();
    initStyles();
    initBlockList();
    if (uiTalker.length() == 0) {
        try {
            List result = executeQuery("SELECT talker FROM message ORDER BY createTime DESC LIMIT 1");
            if (result != null && !result.isEmpty()) {
                uiTalker = fkSafeStr(((Map) result.get(0)).get("talker"));
            }
        } catch (Throwable e) {}
        if (uiTalker.length() == 0) uiTalker = "未知会话";
    }
    final Map cfg = getUserConfig(uiTalker);
    ScrollView scrollView = new ScrollView(a);
    LinearLayout root = new LinearLayout(a);
    root.setOrientation(LinearLayout.VERTICAL);
    root.setPadding(40, 40, 40, 40);
    root.setOrientation(LinearLayout.VERTICAL);
    root.setPadding(40, 40, 40, 40);

    // AI开关
    uiBtnAi = new Button(a);
    uiBtnAi.setText("AI回复: " + (fkToInt(cfg.get("aiEnabled"), 0) == 1 ? "开" : "关"));
    uiBtnAi.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            c.put("aiEnabled", fkToInt(c.get("aiEnabled"), 0) == 1 ? 0 : 1);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnAi);

    // 命令权限
    uiBtnCmd = new Button(a);
    uiBtnCmd.setText("命令权限: " + (fkToInt(cfg.get("cmdEnabled"), 0) == 1 ? "开" : "关"));
    uiBtnCmd.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            c.put("cmdEnabled", fkToInt(c.get("cmdEnabled"), 0) == 1 ? 0 : 1);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnCmd);

    // 消息模式
    uiBtnMode = new Button(a);
    String modeNow = fkSafeStr(cfg.get("msgMode"));
    if (modeNow.length() == 0) modeNow = "off";
    uiBtnMode.setText("消息模式: " + modeNow);
    uiBtnMode.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            Map c = getUserConfig(uiTalker);
            String cur = fkSafeStr(c.get("msgMode"));
            if (cur.length() == 0) cur = "off";
            String next = "off";
            if ("off".equals(cur)) next = "parse";
            else if ("parse".equals(cur)) next = "raw";
            c.put("msgMode", next);
            saveAllConfigToFile();
            refreshUIButtons();
        }
    });
    root.addView(uiBtnMode);

    // API选择
    uiBtnApi = new Button(a);
    String apiName = apiList.isEmpty() ? "无" : fkSafeStr(((Map) apiList.get(fkToInt(cfg.get("apiIndex"), 0))).get("name"));
    uiBtnApi.setText("API: " + apiName);
    uiBtnApi.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            if (apiList.isEmpty()) { toast("无API"); return; }
            String[] apiNames = new String[apiList.size()];
            for (int i = 0; i < apiList.size(); i++) apiNames[i] = fkSafeStr(((Map) apiList.get(i)).get("name"));
            final int[] sel = {fkToInt(getUserConfig(uiTalker).get("apiIndex"), 0)};
            new AlertDialog.Builder(a)
                .setTitle("选择API")
                .setSingleChoiceItems(apiNames, sel[0], new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) { sel[0] = w; }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) {
                        Map c = getUserConfig(uiTalker);
                        c.put("apiIndex", sel[0]);
                        c.put("modelIndex", 0);
                        windowMap.put(uiTalker, new ArrayList());
                        saveAllConfigToFile();
                        refreshUIButtons();
                    }
                })
                .setNegativeButton("取消", null)
                .show();
        }
    });
    root.addView(uiBtnApi);

    // 模型选择
uiBtnModel = new Button(a);
uiBtnModel.setText("模型: " + getCurrentModelNameSafe(uiTalker));
uiBtnModel.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
        showModelSelectorUI(a);
    }
});
root.addView(uiBtnModel);
Button btnPresetModels = new Button(a);
    btnPresetModels.setText("常用模型预设");
    btnPresetModels.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            showModelPresetUI(a, null);
        }
    });
    root.addView(btnPresetModels);

    // 风格
    uiBtnStyle = new Button(a);
    uiBtnStyle.setText("风格: " + fkSafeStr(cfg.get("style")));
    uiBtnStyle.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            int count = stylePrompts.size();
            String[] styleKeys = new String[count];
            String[] styleValues = new String[count];
            int idx = 0;
            int selIdx = 0;
            String currentStyle = fkSafeStr(getUserConfig(uiTalker).get("style"));
            for (Object key : stylePrompts.keySet()) {
                String name = fkSafeStr(key);
                if (!isValidName(name)) continue;
                styleKeys[idx] = name;
                styleValues[idx] = name;
                if (name.equals(currentStyle)) selIdx = idx;
                idx++;
            }
            final int[] selected = {selIdx};
            new AlertDialog.Builder(a)
                .setTitle("选择风格")
                .setSingleChoiceItems(styleKeys, selIdx, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) { selected[0] = w; }
                })
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface d, int w) {
                        Map c = getUserConfig(uiTalker);
                        c.put("style", styleKeys[selected[0]]);
                        windowMap.put(uiTalker, new ArrayList());
                        saveAllConfigToFile();
                        refreshUIButtons();
                    }
                })
                .setNegativeButton("取消", null)
                .show();
        }
    });
    root.addView(uiBtnStyle);

    // 好友授权
    Button btnFriend = new Button(a);
    btnFriend.setText("好友授权 (" + friendAuthMap.size() + "人)");
    btnFriend.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showFriendSelector(a); }
    });
    root.addView(btnFriend);

    // 群聊授权
    Button btnGroup = new Button(a);
    btnGroup.setText("群聊授权 (" + groupAuthMap.size() + "个)");
    btnGroup.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showGroupSelector(a); }
    });
    root.addView(btnGroup);

    // 群成员授权
    Button btnMember = new Button(a);
    btnMember.setText("群成员授权");
    btnMember.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showGroupMemberAuthUI(a); }
    });
    root.addView(btnMember);

    // API管理
    Button btnApiMgr = new Button(a);
    btnApiMgr.setText("API管理 (" + apiList.size() + "个)");
    btnApiMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showApiManagerUI(a); }
    });
    root.addView(btnApiMgr);

    // 风格管理
    Button btnStyleMgr = new Button(a);
    btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
    btnStyleMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showStyleManagerUI(a); }
    });
    root.addView(btnStyleMgr);

    // 屏蔽词管理
    Button btnBlockMgr = new Button(a);
    btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
    btnBlockMgr.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) { showBlockManagerUI(a); }
    });
    root.addView(btnBlockMgr);

    // 关闭
    Button btnClose = new Button(a);
    btnClose.setText("关闭");
    btnClose.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            if (currentDialog != null) { currentDialog.dismiss(); currentDialog = null; }
        }
    });
    root.addView(btnClose);

    scrollView.addView(root);
    currentDialog = new AlertDialog.Builder(a)
        .setTitle("⚙️ 吃不香菜🤔FkAi回复")
        .setView(scrollView)
        .setCancelable(true)
        .create();
    currentDialog.setOnDismissListener(new DialogInterface.OnDismissListener() {
        public void onDismiss(DialogInterface d) { currentDialog = null; }
    });
    currentDialog.show();
}

// ===== 好友选择器（带搜索）=====
void showFriendSelector(Activity a) {
    try {
        List friends = getFriendList();
        if (friends == null || friends.isEmpty()) { toast("好友列表为空"); return; }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();
        for (int i = 0; i < friends.size(); i++) {
            HashMap f = (HashMap) friends.get(i);
            String wxid = fkSafeStr(f.get("username"));
            if (wxid.length() == 0 || wxid.startsWith("/") || wxid.contains("com.tencent.mm")) continue;
            allIds.add(wxid);
            String nick = fkSafeStr(f.get("nickname"));
            String remark = fkSafeStr(f.get("conRemark"));
            if (nick.startsWith("/") || nick.contains("com.tencent.mm")) nick = "";
            if (remark.startsWith("/") || remark.contains("com.tencent.mm")) remark = "";
            String label = wxid;
            if (remark.length() > 0) label = nick.length() > 0 ? nick + "(" + remark + ")" : remark;
            else if (nick.length() > 0) label = nick;
            allNames.add(label);
        }
        if (allNames.isEmpty()) { toast("未能解析好友"); return; }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            if (friendAuthMap.containsKey(allIds.get(j))) checked[j] = true;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索好友...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("好友授权 (" + allIds.size() + "人)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
    public void run() {
        listContainer.removeAllViews();
        String kw = searchInput.getText().toString().trim().toLowerCase();
        for (int i = 0; i < allIds.size(); i++) {
            String name = allNames.get(i).toLowerCase();
            String id = allIds.get(i).toLowerCase();
            if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                final int realIdx = i;
                TextView tv = new TextView(listContainer.getContext());
                String label = allNames.get(i);
                if (label.length() > 25) label = label.substring(0, 25) + "...";
                tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                tv.setTextSize(16);
                tv.setPadding(15, 18, 15, 18);
                tv.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        checked[realIdx] = !checked[realIdx];
                        String lbl = allNames.get(realIdx);
                        if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                        ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                    }
                });
                listContainer.addView(tv);
            }
        }
    }
};

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        friendAuthMap.clear();
                        for (int k = 0; k < allIds.size(); k++) {
                            if (checked[k]) friendAuthMap.put(allIds.get(k), 1);
                        }
                        saveAllConfigToFile();
                        toast("已保存: " + friendAuthMap.size() + "人");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 群聊选择器（带搜索）=====
void showGroupSelector(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("群聊列表为空"); return; }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            HashMap g = (HashMap) groups.get(i);
            String roomId = fkSafeStr(g.get("username"));
            if (roomId.length() == 0 || roomId.startsWith("/") || roomId.contains("com.tencent.mm")) continue;
            String name = fkSafeStr(g.get("nickname"));
            if (name.startsWith("/") || name.contains("com.tencent.mm")) name = "";
            if (name.length() == 0) name = "未知群聊";
            allIds.add(roomId);
            allNames.add(name);
        }
        if (allNames.isEmpty()) { toast("未能解析群聊"); return; }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            if (groupAuthMap.containsKey(allIds.get(j))) checked[j] = true;
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索群聊...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("群聊授权 (" + allIds.size() + "个)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
            public void run() {
                listContainer.removeAllViews();
                String kw = searchInput.getText().toString().trim().toLowerCase();
                for (int i = 0; i < allIds.size(); i++) {
                    String name = allNames.get(i).toLowerCase();
                    String id = allIds.get(i).toLowerCase();
                    if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                        final int realIdx = i;
                        TextView tv = new TextView(listContainer.getContext());
                        String label = allNames.get(i);
                        if (label.length() > 25) label = label.substring(0, 25) + "...";
                        tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                        tv.setTextSize(16);
                        tv.setPadding(15, 18, 15, 18);
                        tv.setOnClickListener(new View.OnClickListener() {
                            public void onClick(View v) {
                                checked[realIdx] = !checked[realIdx];
                                String lbl = allNames.get(realIdx);
                                if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                                ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                            }
                        });
                        listContainer.addView(tv);
                    }
                }
            }
        };

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        groupAuthMap.clear();
                        for (int k = 0; k < allIds.size(); k++) {
                            if (checked[k]) groupAuthMap.put(allIds.get(k), 1);
                        }
                        saveAllConfigToFile();
                        toast("已保存: " + groupAuthMap.size() + "个群");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 群成员授权UI =====
void showGroupMemberAuthUI(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("群聊列表为空"); return; }

        final List groupNames = new ArrayList();
        final List groupIds = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            HashMap g = (HashMap) groups.get(i);
            String roomId = fkSafeStr(g.get("username"));
            if (roomId.length() == 0 || roomId.startsWith("/") || roomId.contains("com.tencent.mm")) continue;
            String name = fkSafeStr(g.get("nickname"));
            if (name.length() == 0) name = "未知群聊";
            groupIds.add(roomId);
            groupNames.add(name);
        }
        if (groupNames.isEmpty()) { toast("未能解析群聊"); return; }

        final int[] sel = {0};
        new AlertDialog.Builder(a)
            .setTitle("选择群聊")
            .setSingleChoiceItems(groupNames.toArray(new String[0]), 0, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) { sel[0] = w; }
            })
            .setPositiveButton("下一步", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    showGroupMemberListUI(a, groupIds.get(sel[0]), groupNames.get(sel[0]));
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

void showGroupMemberListUI(final Activity a, final String groupId, String groupName) {
    try {
        List members = getGroupMemberList(groupId);
        if (members == null || members.isEmpty()) { toast("群成员列表为空"); return; }

        final List memberNames = new ArrayList();
        final List memberIds = new ArrayList();
        for (int i = 0; i < members.size(); i++) {
            String wxid = fkSafeStr(members.get(i));
            if (wxid.length() == 0 || wxid.startsWith("/") || wxid.contains("com.tencent.mm")) continue;
            String name = wxid;
            memberIds.add(wxid);
            memberNames.add(name);
        }
        if (memberNames.isEmpty()) { toast("未能解析群成员"); return; }

        final Set existingSet = (Set) groupMemberAiAuthMap.get(groupId);
        final boolean[] checked = new boolean[memberIds.size()];
        if (existingSet != null) {
            for (int j = 0; j < memberIds.size(); j++) {
                if (existingSet.contains(memberIds.get(j))) checked[j] = true;
            }
        }

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        final EditText searchInput = new EditText(a);
        searchInput.setHint("搜索成员...");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle(groupName + " 成员授权")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        Runnable refreshList = new Runnable() {
            public void run() {
                listContainer.removeAllViews();
                String kw = searchInput.getText().toString().trim().toLowerCase();
                for (int i = 0; i < memberIds.size(); i++) {
                    String name = memberNames.get(i).toLowerCase();
                    String id = memberIds.get(i).toLowerCase();
                    if (kw.length() == 0 || name.contains(kw) || id.contains(kw)) {
                        final int realIdx = i;
                        TextView tv = new TextView(listContainer.getContext());
                        String label = memberNames.get(i);
                        if (label.length() > 25) label = label.substring(0, 25) + "...";
                        tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                        tv.setTextSize(16);
                        tv.setPadding(15, 18, 15, 18);
                        tv.setOnClickListener(new View.OnClickListener() {
                            public void onClick(View v) {
                                checked[realIdx] = !checked[realIdx];
                                String lbl = memberNames.get(realIdx);
                                if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";
                                ((TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                            }
                        });
                        listContainer.addView(tv);
                    }
                }
            }
        };

        searchInput.addTextChangedListener(new TextWatcher() {
            public void afterTextChanged(android.text.Editable s) { refreshList.run(); }
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}
            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                refreshList.run();
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        Set set = new HashSet();
                        for (int k = 0; k < memberIds.size(); k++) {
                            if (checked[k]) set.add(memberIds.get(k));
                        }
                        if (set.isEmpty()) groupMemberAiAuthMap.remove(groupId);
                        else groupMemberAiAuthMap.put(groupId, set);
                        saveAllConfigToFile();
                        toast("已保存: " + set.size() + "人授权");
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();
    } catch (Throwable e) {
        toast("失败: " + e.getMessage());
    }
}

// ===== 风格管理UI =====
void showStyleManagerUI(Activity a) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText("风格数量: " + stylePrompts.size() + "\\n支持添加/删除风格");
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setHint("风格名称");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputPrompt = new EditText(a);
        inputPrompt.setHint("风格描述/提示词");
        inputPrompt.setMinLines(3);
        layout.addView(inputPrompt);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("风格管理")
            .setView(layout)
            .setPositiveButton("添加", null)
            .setNegativeButton("查看列表", null)
            .setNeutralButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String prompt = inputPrompt.getText().toString().trim();
                        if (name.length() == 0) { toast("请输入风格名称"); return; }
                        if (!isValidName(name)) { toast("风格名不能包含特殊字符"); return; }
                        if (prompt.length() == 0) { toast("请输入风格描述"); return; }
                        stylePrompts.put(name, prompt);
                        saveStylesToFile();
                        toast("已添加风格: " + name);
                        inputName.setText("");
                        inputPrompt.setText("");
                        btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
                    }
                });
                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showStyleListUI(a); }
                });
                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { dialog.dismiss(); }
                });
            }
        });
        dialog.show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void showStyleListUI(final Activity a) {
    final List styleNames = new ArrayList();
    for (Object key : stylePrompts.keySet()) {
        String name = fkSafeStr(key);
        if (isValidName(name)) styleNames.add(name);
    }
    if (styleNames.isEmpty()) { toast("暂无风格"); return; }
    final String[] items = new String[styleNames.size()];
    for (int i = 0; i < styleNames.size(); i++) items[i] = fkSafeStr(styleNames.get(i));
    new AlertDialog.Builder(a)
        .setTitle("风格列表 (点击删除)")
        .setItems(items, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface d, int which) {
                String name = items[which];
                new AlertDialog.Builder(a)
                    .setTitle("删除风格: " + name)
                    .setMessage("确定删除该风格吗？")
                    .setPositiveButton("删除", new DialogInterface.OnClickListener() {
                        public void onClick(DialogInterface dd, int ww) {
                            stylePrompts.remove(name);
                            saveStylesToFile();
                            toast("已删除: " + name);
                            btnStyleMgr.setText("风格管理 (" + stylePrompts.size() + "个)");
                        }
                    })
                    .setNegativeButton("取消", null)
                    .show();
            }
        })
        .setNegativeButton("返回", null)
        .show();
}

// ===== 屏蔽词管理UI =====
void showBlockManagerUI(Activity a) {
    try {
        List blockList = getAllBlockList();
        final String[] items = new String[blockList.size()];
        for (int i = 0; i < blockList.size(); i++) items[i] = fkSafeStr(blockList.get(i));

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText("当前屏蔽词 (" + items.length + "个)，点击移除");
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputWord = new EditText(a);
        inputWord.setHint("输入屏蔽词");
        inputWord.setSingleLine(true);
        layout.addView(inputWord);

        final ScrollView listScroll = new ScrollView(a);
        final LinearLayout listContainer = new LinearLayout(a);
        listContainer.setOrientation(LinearLayout.VERTICAL);
        listScroll.addView(listContainer);

        for (int i = 0; i < items.length; i++) {
            final int idx = i;
            TextView tv = new TextView(a);
            tv.setText("✕ " + items[i]);
            tv.setTextSize(16);
            tv.setPadding(15, 12, 15, 12);
            tv.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {
                    String word = items[idx];
                    blockListGlobal.remove(word);
                    saveBlockListToFile();
                    toast("已移除: " + word);
                    btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
                    showBlockManagerUI(a);
                }
            });
            listContainer.addView(tv);
        }
        layout.addView(listScroll);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("屏蔽词管理")
            .setView(layout)
            .setPositiveButton("添加", null)
            .setNegativeButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String word = inputWord.getText().toString().trim();
                        if (word.length() == 0) { toast("请输入屏蔽词"); return; }
                        if (blockListGlobal.contains(word)) { toast("已存在: " + word); return; }
                        blockListGlobal.add(word);
                        saveBlockListToFile();
                        toast("已添加: " + word);
                        inputWord.setText("");
                        btnBlockMgr.setText("屏蔽词 (" + getAllBlockList().size() + "个)");
                        showBlockManagerUI(a);
                    }
                });
            }
        });
        dialog.show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

// ===== API管理UI =====
void showApiManagerUI(final Activity a) {
    try {
        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText(
            "当前API (" + apiList.size() + "个)\\n" +
            "填写名称、URL、Key后，可先点“拉取模型”自动获取模型。\\n" +
            "如果拉取失败，说明该接口可能不支持 /v1/models，请手动填写。"
        );
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setHint("API名称，例如 OpenAI / DeepSeek / 商汤");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputUrl = new EditText(a);
        inputUrl.setHint("API URL，例如 https://xxx.com/v1/chat/completions");
        inputUrl.setSingleLine(true);
        layout.addView(inputUrl);

        final EditText inputKey = new EditText(a);
        inputKey.setHint("API Key");
        inputKey.setSingleLine(true);
        layout.addView(inputKey);

        final EditText inputModels = new EditText(a);
        inputModels.setHint("模型列表，逗号分隔；可点下方按钮自动拉取");
        inputModels.setSingleLine(false);
        inputModels.setMinLines(2);
        inputModels.setMaxLines(4);
        layout.addView(inputModels);

        Button btnFetch = new Button(a);
        btnFetch.setText("拉取模型");
        btnFetch.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String key = inputKey.getText().toString().trim();
                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }
                asyncFetchModelsToInput(a, inputUrl, inputKey, inputModels, "");
            }
        });
        layout.addView(btnFetch);

        Button btnTest = new Button(a);
        btnTest.setText("测试API");
        btnTest.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String key = inputKey.getText().toString().trim();
                String modelsStr = inputModels.getText().toString().trim();

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                if (modelsStr.length() == 0) {
                    toast("请先填写或拉取至少一个模型");
                    return;
                }

                asyncTestApi(a, inputUrl, inputKey, inputModels, "");
            }
        });
        layout.addView(btnTest);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("API管理")
            .setView(layout)
            .setPositiveButton("添加API", null)
            .setNegativeButton("查看列表", null)
            .setNeutralButton("关闭", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String url = inputUrl.getText().toString().trim();
                        String key = inputKey.getText().toString().trim();
                        String modelsStr = inputModels.getText().toString().trim();

                        if (name.length() == 0 || url.length() == 0 || key.length() == 0) {
                            toast("请填写名称、URL、Key");
                            return;
                        }

                        Map api = new HashMap();
                        api.put("name", name);
                        api.put("url", url);
                        api.put("key", key);
                        apiList.add(api);

                        List ms = new ArrayList();
                        if (modelsStr.length() > 0) {
                            String[] models = modelsStr.split(",");
                            for (int i = 0; i < models.length; i++) {
                                String m = models[i].trim();
                                if (m.length() > 0 && !ms.contains(m)) ms.add(m);
                            }
                        }

                        apiModels.put(apiList.size() - 1, ms);
                        saveApiToFile();

                        toast("已添加API: " + name + "，模型 " + ms.size() + " 个");

                        inputName.setText("");
                        inputUrl.setText("");
                        inputKey.setText("");
                        inputModels.setText("");

                        refreshUIButtons();
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        showApiListUI(a, dialog);
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showApiManagerUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}


void showApiListUI(final Activity a, final AlertDialog parentDialog) {
    if (apiList.isEmpty()) { toast("暂无API"); return; }
    final String[] items = new String[apiList.size()];
    for (int i = 0; i < apiList.size(); i++) {
        Map api = (Map) apiList.get(i);
        String name = fkSafeStr(api.get("name"));
        List ms = (List) apiModels.get(i);
        int modelCount = ms == null ? 0 : ms.size();
        items[i] = (i + 1) + ". " + name + " (" + modelCount + "个模型)";
    }
    new AlertDialog.Builder(a)
        .setTitle("API列表 (点击编辑/删除)")
        .setItems(items, new DialogInterface.OnClickListener() {
            public void onClick(DialogInterface d, int which) {
                showApiEditUI(a, which, d);
            }
        })
        .setNegativeButton("返回", null)
        .show();
}

void showApiEditUI(final Activity a, final int apiIdx, final AlertDialog parentDialog) {
    try {
        if (apiIdx < 0 || apiIdx >= apiList.size()) return;

        final Map api = (Map) apiList.get(apiIdx);
        final List ms = (List) apiModels.get(apiIdx);
        final String oldKey = fkSafeStr(api.get("key"));

        LinearLayout layout = new LinearLayout(a);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        TextView tvInfo = new TextView(a);
        tvInfo.setText(
            "编辑API #" + (apiIdx + 1) + "\\n" +
            "Key已脱敏显示；不修改Key则保留原Key。\\n" +
            "模型推荐用“管理模型列表”，避免一长串看花。"
        );
        tvInfo.setTextSize(14);
        layout.addView(tvInfo);

        final EditText inputName = new EditText(a);
        inputName.setText(fkSafeStr(api.get("name")));
        inputName.setHint("API名称");
        inputName.setSingleLine(true);
        layout.addView(inputName);

        final EditText inputUrl = new EditText(a);
        inputUrl.setText(fkSafeStr(api.get("url")));
        inputUrl.setHint("API URL");
        inputUrl.setSingleLine(true);
        layout.addView(inputUrl);

        final EditText inputKey = new EditText(a);
        inputKey.setText(maskApiKey(oldKey));
        inputKey.setHint("API Key，不修改则保留原Key");
        inputKey.setSingleLine(true);
        layout.addView(inputKey);

        String modelsStr = "";
        if (ms != null) {
            modelsStr = joinModelList(ms);
        }

        final EditText inputModels = new EditText(a);
        inputModels.setText(modelsStr);
        inputModels.setHint("模型列表，内部兼容输入框");
        inputModels.setSingleLine(false);
        inputModels.setMinLines(2);
        inputModels.setMaxLines(4);
        inputModels.setVisibility(8);
        layout.addView(inputModels);

        final TextView tvModelSummary = new TextView(a);
        tvModelSummary.setTextSize(14);
        tvModelSummary.setPadding(0, 14, 0, 14);
        layout.addView(tvModelSummary);

        bindModelSummaryWatcher(tvModelSummary, inputModels);

        Button btnManageModels = new Button(a);
        btnManageModels.setText("管理模型列表");
        btnManageModels.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showModelsListManageUI(a, inputModels, tvModelSummary);
            }
        });
        layout.addView(btnManageModels);

        Button btnManualModels = new Button(a);
        btnManualModels.setText("手动编辑模型");
        btnManualModels.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                showManualModelsEditUI(a, inputModels, tvModelSummary);
            }
        });
        layout.addView(btnManualModels);

        Button btnFetch = new Button(a);
        btnFetch.setText("拉取模型");
        btnFetch.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String keyText = inputKey.getText().toString().trim();
                String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                asyncFetchModelsToInput(a, inputUrl, inputKey, inputModels, oldKey);
            }
        });
        layout.addView(btnFetch);

        Button btnTest = new Button(a);
        btnTest.setText("测试API");
        btnTest.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v) {
                String url = inputUrl.getText().toString().trim();
                String keyText = inputKey.getText().toString().trim();
                String key = isMaskedApiKeyText(keyText) ? oldKey : keyText;
                String modelsStr = inputModels.getText().toString().trim();

                if (url.length() == 0 || key.length() == 0) {
                    toast("请先填写URL和Key");
                    return;
                }

                if (modelsStr.length() == 0) {
                    toast("请先添加、拉取或手动填写至少一个模型");
                    return;
                }

                asyncTestApi(a, inputUrl, inputKey, inputModels, oldKey);
            }
        });
        layout.addView(btnTest);

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("编辑API #" + (apiIdx + 1))
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("删除", null)
            .setNeutralButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = inputName.getText().toString().trim();
                        String url = inputUrl.getText().toString().trim();
                        String keyText = inputKey.getText().toString().trim();
                        String modelsStr = inputModels.getText().toString().trim();

                        if (name.length() == 0 || url.length() == 0 || keyText.length() == 0) {
                            toast("请填写名称、URL、Key");
                            return;
                        }

                        String finalKey = isMaskedApiKeyText(keyText) ? oldKey : keyText;

                        api.put("name", name);
                        api.put("url", url);
                        api.put("key", finalKey);

                        List newMs = parseModelCsvToList(modelsStr);
                        apiModels.put(apiIdx, newMs);

                        try {
                            for (Object k : userConfigMap.keySet()) {
                                Map uc = (Map) userConfigMap.get(k);
                                int oldApiIdx = fkToInt(uc.get("apiIndex"), 0);
                                if (oldApiIdx == apiIdx) {
                                    int oldModelIdx = fkToInt(uc.get("modelIndex"), 0);
                                    if (oldModelIdx >= newMs.size()) uc.put("modelIndex", 0);
                                }
                            }
                        } catch (Throwable e) {
                            logger("修正modelIndex异常: " + e);
                        }

                        saveApiToFile();
                        saveAllConfigToFile();

                        toast("已保存API: " + name + "，模型 " + newMs.size() + " 个");

                        refreshUIButtons();

                        try { dialog.dismiss(); } catch (Throwable e) {}
                        try { parentDialog.dismiss(); } catch (Throwable e) {}
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEGATIVE).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        String name = fkSafeStr(api.get("name"));

                        apiList.remove(apiIdx);
                        apiModels.remove(apiIdx);

                        Map newModels = new HashMap();
                        for (int i = 0; i < apiList.size(); i++) {
                            newModels.put(i, apiModels.get(i));
                        }

                        apiModels.clear();
                        apiModels.putAll(newModels);

                        try {
                            for (Object k : userConfigMap.keySet()) {
                                Map uc = (Map) userConfigMap.get(k);
                                int oldIdx = fkToInt(uc.get("apiIndex"), 0);

                                if (oldIdx == apiIdx) {
                                    uc.put("apiIndex", 0);
                                    uc.put("modelIndex", 0);
                                } else if (oldIdx > apiIdx) {
                                    uc.put("apiIndex", oldIdx - 1);
                                }
                            }
                        } catch (Throwable e) {
                            logger("删除API后修正配置异常: " + e);
                        }

                        saveApiToFile();
                        saveAllConfigToFile();

                        toast("已删除API: " + name);

                        refreshUIButtons();

                        try { dialog.dismiss(); } catch (Throwable e) {}
                        try { parentDialog.dismiss(); } catch (Throwable e) {}
                    }
                });

                dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showApiEditUI异常: " + e);
        toast("失败: " + e.getMessage());
    }
}`,Qg=Object.freeze(Object.defineProperty({__proto__:null,default:Yd},Symbol.toStringTag,{value:"Module"})),Zg=`- 长按消息打开UI设置面板
- 配置按会话独立，自动保存

- 授权体系：
- 好友授权 UI勾选好友可触发AI
- 群聊授权 UI勾选群可触发AI
- 群成员授权 先选群再选成员，被选中的成员可触发AI
- 群内发 /群聊回复开关 可自助授权

- /help 查看命令说明书
- /config 查看当前会话配置
- /cmd 切换命令权限 开/关
- /mode 或 /bug 切换消息模式(off/parse/raw)
- /ai 切换AI回复开关
- /group 切换群聊回复开关
- /at 切换@触发开关
- /api 查看API列表
- /api 数字 切换API
- /model 查看模型列表
- /model 数字 切换模型
- /style 查看可选风格
- /style 风格名 切换风格
- /lastcall 查看最后一次通话时长，已失效

- 消息模式：
- off 仅普通文本触发AI
- parse 富消息转人话后送AI
- raw 富消息原文直送AI

- 可选风格(自己加)：
- 随和 友善简洁回复
- 复读机 不走AI直接复读
`,Yg=`# FkwMcpPlugin 使用说明

FkwMcpPlugin 是一个基于 FkWeChat 宿主脚本环境实现的 MCP Server 插件。它会在微信/FkWeChat 插件环境中启动一个本地 HTTP MCP 服务，让支持 MCP 的客户端通过工具调用访问微信相关能力，例如获取好友、群聊、消息，以及发送文本消息。

## 服务配置

默认配置位于 \`mcp/mcp-config.json\`：

\`\`\`json
{
  "host": "0.0.0.0",
  "port": 8888,
  "path": "/mcp",
  "mcpServers": {
    "Fkw-Mcp": {
      "url": "http://localhost:8888/mcp",
      "transport": "streamable-http"
    }
  }
}
\`\`\`

默认服务地址：

\`\`\`text
http://localhost:8888/mcp
\`\`\`

配置项说明：

| 字段 | 默认值 | 说明 |
| --- | --- | --- |
| \`host\` | \`0.0.0.0\` | 服务监听地址 |
| \`port\` | \`8888\` | 服务监听端口 |
| \`path\` | \`/mcp\` | MCP HTTP 接口路径 |
| \`transport\` | \`streamable-http\` | MCP 客户端连接方式 |

如果端口被占用，可以修改 \`port\`，并同步修改 MCP 客户端中的 URL。

## MCP 客户端配置

在支持 MCP 的客户端中添加如下配置：

\`\`\`json
{
  "mcpServers": {
    "Fkw-Mcp": {
      "url": "http://localhost:8888/mcp",
      "transport": "streamable-http"
    }
  }
}
\`\`\`

## 可用功能

插件当前提供以下 MCP 工具。

### send_app_msg

发送普通文本消息。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`wxid\` | string | 是 | 接收方 wxid，可以是好友 wxid 或群聊 id |
| \`content\` | string | 是 | 要发送的文本内容 |
| \`async\` | boolean | 否 | 是否异步发送，默认 \`false\` |

### get_my_user_info

获取当前登录用户的完整信息。

参数：无。

### get_friend_list

获取好友列表。

参数：无。

### get_group_list

获取群聊列表。

参数：无。

### get_group_members

获取指定群聊的成员列表。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`chatroom_id\` | string | 是 | 群聊 id |

### get_group_notice

获取指定群聊公告。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`chatroom_id\` | string | 是 | 群聊 id |

### get_messages

获取指定对话的消息列表，默认返回最近 50 条原始消息。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`talker\` | string | 是 | 对话 id，可以是好友 wxid 或群聊 id |
| \`start_time\` | number | 否 | 起始时间，具体含义取决于宿主消息接口 |
| \`limit\` | number | 否 | 返回数量，默认 50 |

### get_msg_count

获取指定对话的消息总数。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`talker\` | string | 是 | 对话 id，可以是好友 wxid 或群聊 id |

### get_app_info

获取当前插件和宿主应用信息。

参数：无。

### show_toast

在设备上弹出 Toast 提示。

参数：

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| \`text\` | string | 是 | Toast 显示文本 |

## 日志

插件运行日志写入：

\`\`\`text
mcp/logs/mcp-server.log
\`\`\`

可以通过日志确认插件是否加载成功、配置是否读取成功、MCP 服务是否启动、客户端请求是否进入。

常见日志包括：

\`\`\`text
[FkwMcpPlugin] onLoad start
[FkwMcpPlugin] start server port=8888 path=/mcp
[FkwMcpPlugin] server started
[FkwMcpPlugin] client accepted ...
\`\`\`

## 常见问题

### MCP 客户端连接不上

检查以下事项：

1. 插件是否已经在 FkWeChat 中启用。
2. \`mcp/logs/mcp-server.log\` 中是否出现 \`server started\`。
3. 客户端配置的 URL 是否和 \`mcp-config.json\` 一致。
4. 如果客户端不在手机本机运行，URL 中不要使用 \`localhost\`，应改为手机局域网 IP。
5. 手机和客户端设备是否在同一局域网。
6. 端口 \`8888\` 是否被占用或被网络环境拦截。

### 工具调用失败

检查以下事项：

1. 参数名是否正确，例如发送消息需要 \`wxid\` 和 \`content\`。
2. \`wxid\`、\`chatroom_id\`、\`talker\` 是否有效。
3. FkWeChat 宿主是否支持对应接口。
4. 查看 \`mcp-server.log\` 中的错误堆栈。`,Xg=`import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.Socket;
import java.net.URLDecoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.OutputStream;
import java.lang.Runnable;
import java.lang.Thread;
import java.net.ServerSocket;

// ===== mcp_utils.java =====
Map MCP_STATE = new LinkedHashMap();

void initMcpState() {
    MCP_STATE.put("serverSocket", null);
    MCP_STATE.put("running", Boolean.FALSE);
    MCP_STATE.put("config", null);
    MCP_STATE.put("threads", new ArrayList());
    MCP_STATE.put("logPath", pluginPath + "/logs/mcp-server.log");
}

String getSafeMyWxId() {
    try {
        return String.valueOf(getMyWxId());
    } catch (Exception e) {
        return "getMyWxId failed: " + e.getMessage();
    }
}

String readUtf8File(String path) {
    try {
        File file = new File(path);
        if (!file.exists()) {
            return null;
        }
        BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file), "UTF-8"));
        StringBuilder builder = new StringBuilder();
        String line = null;
        while ((line = reader.readLine()) != null) {
            builder.append(line).append("\\n");
        }
        reader.close();
        return builder.toString();
    } catch (Exception e) {
        log("[FkwMcpPlugin] readUtf8File failed: " + e.getMessage());
        return null;
    }
}

void ensureParentDir(File file) {
    try {
        if (file == null) return;
        File parent = file.getParentFile();
        if (parent != null && !parent.exists()) {
            parent.mkdirs();
        }
    } catch (Exception e) {
        log("[FkwMcpPlugin] ensureParentDir failed: " + e.getMessage());
    }
}

void writeUtf8File(String path, String text) {
    try {
        File file = new File(path);
        ensureParentDir(file);
        if (!file.exists()) {
            file.createNewFile();
        }
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "UTF-8"));
        writer.write(text == null ? "" : text);
        writer.flush();
        writer.close();
    } catch (Exception e) {
        log("[FkwMcpPlugin] writeUtf8File failed: " + e.getMessage());
    }
}

void appendUtf8File(String path, String text) {
    try {
        File file = new File(path);
        ensureParentDir(file);
        if (!file.exists()) {
            file.createNewFile();
        }
        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file, true), "UTF-8"));
        writer.write(text == null ? "" : text);
        writer.flush();
        writer.close();
    } catch (Exception e) {
        log("[FkwMcpPlugin] appendUtf8File failed: " + e.getMessage());
    }
}

void appendLog(String text) {
    String safeText = text == null ? "null" : text;
    try {
        String logPath = String.valueOf(MCP_STATE.get("logPath"));
        String time = new SimpleDateFormat("HH:mm:ss.SSS").format(new Date());
        appendUtf8File(logPath, "[" + time + "] " + safeText + "\\n");
    } catch (Exception e) {
        try {
            log("[FkwMcpPlugin] appendLog file failed: " + e.getMessage());
        } catch (Exception ignore1) {
        }
    }
    try {
        log(safeText);
    } catch (Exception ignore2) {
    }
}

String shortText(String text, int limit) {
    if (text == null) return "null";
    if (limit <= 0) return "";
    if (text.length() <= limit) return text;
    return text.substring(0, limit) + "...(" + text.length() + ")";
}

String previewValue(Object value, int limit) {
    String text = stringify(value);
    if (limit <= 0) return text;
    return shortText(text, limit);
}

String fullValue(Object value) {
    return stringify(value);
}

String stackTraceText(Exception e) {
    if (e == null) return "null";
    try {
        StringWriter sw = new StringWriter();
        PrintWriter pw = new PrintWriter(sw);
        e.printStackTrace(pw);
        pw.flush();
        return sw.toString();
    } catch (Exception ignore) {
        return e.toString();
    }
}

String safeSocketAddress(Socket socket) {
    try {
        if (socket == null) return "null";
        return String.valueOf(socket.getRemoteSocketAddress());
    } catch (Exception e) {
        return "unknown";
    }
}

Map newMap() {
    return new LinkedHashMap();
}

List newList() {
    return new ArrayList();
}

String jsonEscape(String text) {
    if (text == null) return "";
    return text.replace("\\\\", "\\\\\\\\")
            .replace("\\"", "\\\\\\"")
            .replace("\\r", "\\\\r")
            .replace("\\n", "\\\\n")
            .replace("\\t", "\\\\t");
}

String stringify(Object value) {
    if (value == null) return "null";
    if (value instanceof String) return "\\"" + jsonEscape((String) value) + "\\"";
    if (value instanceof Number || value instanceof Boolean) return String.valueOf(value);
    if (value instanceof Map) {
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        boolean first = true;
        for (Object entryObj : ((Map) value).entrySet()) {
            Map.Entry entry = (Map.Entry) entryObj;
            if (!first) sb.append(",");
            first = false;
            sb.append(stringify(String.valueOf(entry.getKey())));
            sb.append(":");
            sb.append(stringify(entry.getValue()));
        }
        sb.append("}");
        return sb.toString();
    }
    if (value instanceof List) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        List list = (List) value;
        int i = 0;
        while (i < list.size()) {
            if (i > 0) sb.append(",");
            sb.append(stringify(list.get(i)));
            i = i + 1;
        }
        sb.append("]");
        return sb.toString();
    }
    return stringify(String.valueOf(value));
}

Object parseJson(String text) {
    if (text == null) return null;
    String trim = text.trim();
    if (trim.equals("")) return null;
    if (trim.startsWith("{")) {
        return jsonObjectToMap(new JSONObject(trim));
    }
    if (trim.startsWith("[")) {
        return jsonArrayToList(new JSONArray(trim));
    }
    return trim;
}

Map jsonObjectToMap(JSONObject object) {
    Map map = new LinkedHashMap();
    java.util.Iterator keys = object.keys();
    while (keys.hasNext()) {
        String key = String.valueOf(keys.next());
        Object value = object.opt(key);
        map.put(key, jsonValueToJava(value));
    }
    return map;
}

List jsonArrayToList(JSONArray array) {
    List list = new ArrayList();
    int i = 0;
    while (i < array.length()) {
        list.add(jsonValueToJava(array.opt(i)));
        i = i + 1;
    }
    return list;
}

Object jsonValueToJava(Object value) {
    if (value == null || value == JSONObject.NULL) return null;
    if (value instanceof JSONObject) return jsonObjectToMap((JSONObject) value);
    if (value instanceof JSONArray) return jsonArrayToList((JSONArray) value);
    return value;
}

Map successResponse(Object id, Object result) {
    Map resp = new LinkedHashMap();
    resp.put("jsonrpc", "2.0");
    resp.put("id", id);
    resp.put("result", result);
    return resp;
}

Map errorResponse(Object id, int code, String message) {
    Map error = new LinkedHashMap();
    error.put("code", code);
    error.put("message", message);
    Map resp = new LinkedHashMap();
    resp.put("jsonrpc", "2.0");
    resp.put("id", id);
    resp.put("error", error);
    return resp;
}

String readHttpBody(BufferedReader reader, int len) {
    char[] chars = new char[len];
    int read = 0;
    while (read < len) {
        int r = reader.read(chars, read, len - read);
        if (r < 0) break;
        read += r;
    }
    return new String(chars, 0, read);
}

String readHttpLine(InputStream input) throws Exception {
    ByteArrayOutputStream buffer = new ByteArrayOutputStream();
    int b = -1;
    while ((b = input.read()) >= 0) {
        if (b == 10) break;
        if (b != 13) buffer.write(b);
    }
    if (b < 0 && buffer.size() == 0) return null;
    return new String(buffer.toByteArray(), "ISO-8859-1");
}

String readHttpBody(InputStream input, int len) throws Exception {
    if (len <= 0) return "";
    byte[] bytes = new byte[len];
    int read = 0;
    while (read < len) {
        int r = input.read(bytes, read, len - read);
        if (r < 0) break;
        read += r;
    }
    appendLog("[FkwMcpPlugin] body bytes read=" + read + "/" + len);
    return new String(bytes, 0, read, "UTF-8");
}

String urlDecode(String text) {
    try {
        return URLDecoder.decode(text, "UTF-8");
    } catch (Exception e) {
        return text;
    }
}

// ===== mcp_config.java =====
Map loadMcpConfig() {
    String configPath = pluginPath + "/mcp-config.json";
    appendLog("[FkwMcpPlugin] 读取配置文件: " + configPath);
    String text = readUtf8File(configPath);
    if (text == null || text.trim().equals("")) {
        appendLog("[FkwMcpPlugin] 配置文件不存在或为空，使用默认配置");
        Map defaults = newMap();
        defaults.put("host", "0.0.0.0");
        defaults.put("port", Long.valueOf(8888));
        defaults.put("path", "/mcp");
        Map servers = newMap();
        Map fkw = newMap();
        fkw.put("url", "http://localhost:8888/mcp");
        fkw.put("transport", "streamable-http");
        servers.put("Fkw-Mcp", fkw);
        defaults.put("mcpServers", servers);
        appendLog("[FkwMcpPlugin] 默认配置: " + stringify(defaults));
        return defaults;
    }
    appendLog("[FkwMcpPlugin] 配置文件内容: " + text);
    Object parsed = parseJson(text);
    if (!(parsed instanceof Map)) {
        throw new RuntimeException("配置文件根节点必须为JSON对象");
    }
    appendLog("[FkwMcpPlugin] 配置解析成功");
    return (Map) parsed;
}

long getServerPort() {
    Map config = (Map) MCP_STATE.get("config");
    Object port = config.get("port");
    if (port instanceof Number) return ((Number) port).longValue();
    return 8888;
}

String getServerPath() {
    Map config = (Map) MCP_STATE.get("config");
    Object path = config.get("path");
    return path == null ? "/mcp" : String.valueOf(path);
}

// ===== mcp_tools.java =====
String getMyNicknameSafe() {
    Map info = getMyUserInfo();
    if (info == null) return "";
    Object nickname = info.get("nickname");
    if (nickname == null) nickname = info.get("nickName");
    if (nickname == null) nickname = info.get("name");
    if (nickname == null) nickname = info.get("last_login_nick_name");
    if (nickname == null) nickname = info.get("login_user_name");
    return nickname == null ? "" : String.valueOf(nickname);
}

String nonEmptyString(Object value) {
    if (value == null) return "";
    return String.valueOf(value).trim();
}

Object requireArg(Map args, String key) {
    Object value = args.get(key);
    if (value == null) throw new RuntimeException("参数 \`" + key + "\` 不能为空");
    if (value instanceof String && nonEmptyString(value).equals("")) {
        throw new RuntimeException("参数 \`" + key + "\` 不能为空");
    }
    return value;
}

long getLongArg(Map args, String key) {
    Object value = requireArg(args, key);
    if (!(value instanceof Number)) {
        throw new RuntimeException("参数 \`" + key + "\` 必须为数字");
    }
    return ((Number) value).longValue();
}

int getIntArgOrDefault(Map args, String key, int def) {
    Object value = args.get(key);
    if (value == null) return def;
    if (!(value instanceof Number)) {
        throw new RuntimeException("参数 \`" + key + "\` 必须为数字");
    }
    int n = ((Number) value).intValue();
    if (n < 1) return def;
    return n;
}

boolean getBooleanArgOrDefault(Map args, String key, boolean def) {
    Object value = args.get(key);
    if (value == null) return def;
    if (value instanceof Boolean) return ((Boolean) value).booleanValue();
    return "true".equalsIgnoreCase(String.valueOf(value));
}

Object handleToolCall(String name, Map args) {
    if (name.equals("send_app_msg")) return toolSendAppMsg(args);
    if (name.equals("get_my_user_info")) return toolGetMyUserInfo();
    if (name.equals("get_friend_list")) return toolGetFriendList();
    if (name.equals("get_group_list")) return toolGetGroupList();
    if (name.equals("get_group_members")) return toolGetGroupMembers(args);
    if (name.equals("get_group_notice")) return toolGetGroupNotice(args);
    if (name.equals("get_messages")) return toolGetMessages(args);
    if (name.equals("get_msg_count")) return toolGetMsgCount(args);
    if (name.equals("get_app_info")) return toolGetAppInfo();
    if (name.equals("show_toast")) return toolShowToast(args);
    throw new RuntimeException("未知工具: " + name);
}

Map toolGetMyWxid() {
    Map result = newMap();
    result.put("wxid", getMyWxId());
    return result;
}

Map toolGetMyNickname() {
    Map result = newMap();
    result.put("nickname", getMyNicknameSafe());
    return result;
}

Map toolGetMyUserInfo() {
    Map info = getMyUserInfo();
    return info == null ? newMap() : info;
}

Map toolSendAppMsg(Map args) {
    String wxid = String.valueOf(requireArg(args, "wxid"));
    String content = String.valueOf(requireArg(args, "content"));
    boolean async = getBooleanArgOrDefault(args, "async", false);
    if (async) {
        return toolSendAppMsgAsync(wxid, content);
    }

    long startAt = System.currentTimeMillis();
    appendLog("[FkwMcpPlugin] send_app_msg start wxid=" + wxid + " messageType=text contentLen=" + content.length());
    sendText(wxid, content);
    appendLog("[FkwMcpPlugin] send_app_msg ok elapsedMs=" + (System.currentTimeMillis() - startAt));
    Map result = newMap();
    result.put("success", Boolean.TRUE);
    result.put("wxid", wxid);
    result.put("messageType", "text");
    result.put("contentLength", Long.valueOf(content.length()));
    return result;
}

Map toolSendAppMsgAsync(String wxid, String content) {
    long jobId = System.currentTimeMillis();
    final String jobWxid = wxid;
    final String jobContent = content;
    final long holderJobId = jobId;
    Thread t = new Thread(new Runnable() {
        public void run() {
            long startAt = System.currentTimeMillis();
            appendLog("[FkwMcpPlugin] async send_app_msg start jobId=" + holderJobId + " wxid=" + jobWxid + " messageType=text contentLen=" + jobContent.length());
            try {
                sendText(jobWxid, jobContent);
                appendLog("[FkwMcpPlugin] async send_app_msg ok jobId=" + holderJobId + " elapsedMs=" + (System.currentTimeMillis() - startAt));
            } catch (Exception e) {
                appendLog("[FkwMcpPlugin] async send_app_msg fail jobId=" + holderJobId + " " + shortText(stackTraceText(e), 500));
            }
        }
    });
    t.setName("FkwMcpSend-" + jobId);
    t.start();
    ((List) MCP_STATE.get("threads")).add(t);

    Map result = newMap();
    result.put("accepted", Boolean.TRUE);
    result.put("jobId", Long.valueOf(jobId));
    result.put("wxid", wxid);
    result.put("messageType", "text");
    result.put("contentLength", Long.valueOf(content.length()));
    result.put("content", content);
    return result;
}

List toolGetFriendList() {
    List source = getFriendList();
    return source == null ? newList() : source;
}

List toolGetGroupList() {
    List source = getGroupList();
    return source == null ? newList() : source;
}

List toolGetGroupMembers(Map args) {
    String chatroomId = String.valueOf(requireArg(args, "chatroom_id"));
    List members = getGroupMemberList(chatroomId);
    return members == null ? newList() : members;
}

Map toolGetGroupNotice(Map args) {
    String chatroomId = String.valueOf(requireArg(args, "chatroom_id"));
    Map result = newMap();
    result.put("chatroom_id", chatroomId);
    result.put("notice", getGroupNotice(chatroomId));
    return result;
}

List toolGetMessages(Map args) {
    String talker = String.valueOf(requireArg(args, "talker"));
    Object start = args.get("start_time");
    Object limitValue = args.get("limit");
    int limit = 50;
    if (limitValue instanceof Number) limit = ((Number) limitValue).intValue();
    if (limit < 1) limit = 50;
    if (limit > 300) limit = 300;
    List source = null;
    if (start instanceof Number) source = getMsgs(talker, ((Number) start).longValue());
    else source = getMsgs(talker, 0L);
    List filtered = newList();
    int size = source == null ? 0 : source.size();
    int i = 0;
    while (i < size) {
        Object item = source.get(i);
        if (start instanceof Number && item instanceof Map) {
            Map row = (Map) item;
            Object timeValue = row.get("createTime");
            if (timeValue == null) timeValue = row.get("time");
            if (timeValue instanceof Number) {
                long startTime = ((Number) start).longValue();
                if (((Number) timeValue).longValue() >= startTime) {
                    filtered.add(item);
                }
            } else {
                filtered.add(item);
            }
        } else {
            filtered.add(item);
        }
        i = i + 1;
    }
    if (filtered.size() <= limit) return filtered;
    List limited = newList();
    int from = filtered.size() - limit;
    int j = from;
    while (j < filtered.size()) {
        limited.add(filtered.get(j));
        j = j + 1;
    }
    appendLog("[FkwMcpPlugin] get_messages limited talker=" + talker + " sourceSize=" + filtered.size() + " returnSize=" + limited.size() + " limit=" + limit);
    return limited;
}

Map toolGetMsgCount(Map args) {
    String talker = String.valueOf(requireArg(args, "talker"));
    Map result = newMap();
    result.put("talker", talker);
    result.put("count", Long.valueOf(getMsgCount(talker)));
    return result;
}

Map toolGetAppInfo() {
    Map app = newMap();
    app.put("pluginName", pluginName);
    app.put("pluginVersion", pluginVersion);
    app.put("pluginAuthor", pluginAuthor);
    app.put("hostVerCode", Long.valueOf(hostVerCode));
    app.put("hostVerName", hostVerName);
    app.put("myWxId", getMyWxId());
    app.put("myNickname", getMyNicknameSafe());
    return app;
}

Map toolShowToast(Map args) {
    String text = String.valueOf(requireArg(args, "text"));
    long jobId = System.currentTimeMillis();
    final String jobText = text;
    final long holderJobId = jobId;
    Thread t = new Thread(new Runnable() {
        public void run() {
            long startAt = System.currentTimeMillis();
            appendLog("[FkwMcpPlugin] async show_toast start jobId=" + holderJobId + " textLen=" + jobText.length());
            try {
                toast(jobText);
                appendLog("[FkwMcpPlugin] async show_toast ok jobId=" + holderJobId + " elapsedMs=" + (System.currentTimeMillis() - startAt));
            } catch (Exception e) {
                appendLog("[FkwMcpPlugin] async show_toast fail jobId=" + holderJobId + " " + shortText(stackTraceText(e), 500));
            }
        }
    });
    t.setName("FkwMcpToast-" + jobId);
    t.start();
    ((List) MCP_STATE.get("threads")).add(t);
    Map result = newMap();
    result.put("accepted", Boolean.TRUE);
    result.put("jobId", Long.valueOf(jobId));
    result.put("text", text);
    return result;
}

List normalizeContactList(List source) {
    List result = newList();
    int size = source == null ? 0 : source.size();
    int i = 0;
    while (i < size) {
        Object item = source.get(i);
        if (item instanceof Map) result.add(normalizeContact((Map) item));
        i = i + 1;
    }
    return result;
}

Map normalizeContact(Map source) {
    Map row = newMap();
    String username = firstNonEmpty(source.get("username"), source.get("wxid"), source.get("talker"));
    String nickname = firstNonEmpty(source.get("nickname"), source.get("nickName"), source.get("name"));
    String remark = firstNonEmpty(source.get("conRemark"), source.get("remark"), source.get("displayName"));
    String alias = firstNonEmpty(source.get("alias"), source.get("wxAlias"));
    row.put("wxid", username);
    row.put("username", username);
    row.put("nickname", nickname);
    row.put("remark", remark);
    row.put("alias", alias);
    row.put("raw", source);
    return row;
}

Map normalizeGroup(Map source) {
    Map row = newMap();
    String chatroomId = firstNonEmpty(source.get("chatroom_id"), source.get("username"), source.get("wxid"), source.get("talker"));
    String name = firstNonEmpty(source.get("nickname"), source.get("nickName"), source.get("name"), source.get("remark"));
    row.put("chatroom_id", chatroomId);
    row.put("name", name);
    row.put("raw", source);
    return row;
}

List normalizeMessageList(List source) {
    List result = newList();
    int size = source == null ? 0 : source.size();
    int i = 0;
    while (i < size) {
        Object item = source.get(i);
        if (item instanceof Map) result.add(normalizeMessage((Map) item));
        i = i + 1;
    }
    return result;
}

Map normalizeMessage(Map source) {
    Map row = newMap();
    row.put("msgId", valueOrDefault(source.get("msgId"), source.get("msgid"), source.get("id")));
    row.put("talker", valueOrDefault(source.get("talker"), source.get("username")));
    row.put("content", valueOrDefault(source.get("content"), source.get("msg")));
    row.put("type", valueOrDefault(source.get("type"), source.get("msgType")));
    row.put("createTime", valueOrDefault(source.get("createTime"), source.get("time")));
    row.put("isSend", valueOrDefault(source.get("isSend"), source.get("fromSelf")));
    row.put("raw", source);
    return row;
}

String safeGroupMemberName(String chatroomId, String wxid) {
    try {
        String name = getUserName(chatroomId, wxid);
        if (!nonEmptyString(name).equals("")) return name;
    } catch (Exception ignore1) {
    }
    try {
        String name = getUserName(wxid);
        if (!nonEmptyString(name).equals("")) return name;
    } catch (Exception ignore2) {
    }
    return wxid;
}

String firstNonEmpty(Object a, Object b) {
    String sa = nonEmptyString(a);
    if (!sa.equals("")) return sa;
    return nonEmptyString(b);
}

String firstNonEmpty(Object a, Object b, Object c) {
    String s = firstNonEmpty(a, b);
    if (!s.equals("")) return s;
    return nonEmptyString(c);
}

String firstNonEmpty(Object a, Object b, Object c, Object d) {
    String s = firstNonEmpty(a, b, c);
    if (!s.equals("")) return s;
    return nonEmptyString(d);
}

Object valueOrDefault(Object a, Object b) {
    return a != null ? a : b;
}

Object valueOrDefault(Object a, Object b, Object c) {
    return a != null ? a : (b != null ? b : c);
}

Object valueOrDefault(Object a, Object b, Object c, Object d) {
    return a != null ? a : (b != null ? b : (c != null ? c : d));
}

List describeTools() {
    List tools = newList();
    List fields = null;

    fields = newList();
    fields.add(field("wxid", "string", true, "目标会话ID"));
    fields.add(field("content", "string", true, "要发送的普通文本内容"));
    fields.add(field("async", "boolean", false, "是否后台发送，默认 false"));
    tools.add(toolItem("send_app_msg", "发送普通文本消息", fields));

    tools.add(toolItem("get_my_user_info", "获取当前用户完整信息", newList()));
    tools.add(toolItem("get_friend_list", "获取好友列表", newList()));
    tools.add(toolItem("get_group_list", "获取群聊列表", newList()));

    fields = newList();
    fields.add(field("chatroom_id", "string", true, "群聊ID"));
    tools.add(toolItem("get_group_members", "获取指定群聊成员列表", fields));

    fields = newList();
    fields.add(field("chatroom_id", "string", true, "群聊ID"));
    tools.add(toolItem("get_group_notice", "获取指定群聊公告", fields));

    fields = newList();
    fields.add(field("talker", "string", true, "会话ID"));
    fields.add(field("start_time", "integer", false, "可选开始时间戳，毫秒"));
    fields.add(field("limit", "integer", false, "最多返回条数，默认50，最大300；返回项保持宿主原始消息结构"));
    tools.add(toolItem("get_messages", "获取指定对话消息列表，默认返回最近50条原始消息", fields));

    fields = newList();
    fields.add(field("talker", "string", true, "会话ID"));
    tools.add(toolItem("get_msg_count", "获取指定对话消息总数", fields));

    tools.add(toolItem("get_app_info", "获取当前应用信息", newList()));

    fields = newList();
    fields.add(field("text", "string", true, "要显示的提示内容"));
    tools.add(toolItem("show_toast", "在设备上弹出 Toast 提示", fields));

    return tools;
}

Map toolItem(String name, String description, List fields) {
    Map item = newMap();
    item.put("name", name);
    item.put("description", description);

    Map schema = newMap();
    schema.put("type", "object");
    Map properties = newMap();
    List required = newList();

    int size = fields == null ? 0 : fields.size();
    int i = 0;
    while (i < size) {
        Map field = (Map) fields.get(i);
        String fieldName = String.valueOf(field.get("name"));
        Map body = newMap();
        body.put("type", field.get("type"));
        body.put("description", field.get("description"));
        properties.put(fieldName, body);
        if (Boolean.TRUE.equals(field.get("required"))) required.add(fieldName);
        i = i + 1;
    }

    schema.put("properties", properties);
    schema.put("required", required);
    schema.put("additionalProperties", Boolean.FALSE);
    item.put("inputSchema", schema);
    return item;
}

Map field(String name, String type, boolean required, String description) {
    Map item = newMap();
    item.put("name", name);
    item.put("type", type);
    item.put("required", Boolean.valueOf(required));
    item.put("description", description);
    return item;
}

String formatToolText(String toolName, Object data) {
    return fullValue(data);
}

// ===== mcp_server.java =====
void startMcpServer() {
    if (Boolean.TRUE.equals(MCP_STATE.get("running"))) {
        appendLog("[FkwMcpPlugin] server already running");
        return;
    }

    try {
        Map config = loadMcpConfig();
        MCP_STATE.put("config", config);
        long port = getServerPort();
        String path = getServerPath();
        appendLog("[FkwMcpPlugin] start server port=" + port + " path=" + path);

        ServerSocket serverSocket = new ServerSocket((int) port);
        MCP_STATE.put("serverSocket", serverSocket);
        MCP_STATE.put("running", Boolean.TRUE);
        appendLog("[FkwMcpPlugin] ServerSocket created");

        final ServerSocket holderSocket = serverSocket;
        final long holderPort = port;
        Thread serverThread = new Thread(new Runnable() {
            public void run() {
                appendLog("[FkwMcpPlugin] accept thread started port=" + holderPort);
                while (Boolean.TRUE.equals(MCP_STATE.get("running"))) {
                    try {
                        Socket socket = holderSocket.accept();
                        appendLog("[FkwMcpPlugin] client accepted " + safeSocketAddress(socket));
                        handleClientAsync(socket);
                    } catch (Exception e) {
                        if (Boolean.TRUE.equals(MCP_STATE.get("running"))) {
                            appendLog("[FkwMcpPlugin] accept failed " + shortText(stackTraceText(e), 300));
                        }
                    }
                }
                appendLog("[FkwMcpPlugin] accept thread stopped");
            }
        });
        serverThread.setName("FkwMcpServer");
        serverThread.start();
        ((List) MCP_STATE.get("threads")).add(serverThread);
        appendLog("[FkwMcpPlugin] server started");
    } catch (Exception e) {
        appendLog("[FkwMcpPlugin] start failed " + shortText(stackTraceText(e), 500));
    }
}

void stopMcpServer() {
    appendLog("[FkwMcpPlugin] stop server");
    MCP_STATE.put("running", Boolean.FALSE);
    try {
        ServerSocket serverSocket = (ServerSocket) MCP_STATE.get("serverSocket");
        if (serverSocket != null) {
            serverSocket.close();
            appendLog("[FkwMcpPlugin] ServerSocket closed");
        } else {
            appendLog("[FkwMcpPlugin] ServerSocket is null");
        }
    } catch (Exception e) {
        appendLog("[FkwMcpPlugin] stop failed " + shortText(stackTraceText(e), 300));
    }
}

void handleClientAsync(Socket socket) {
    final Socket holderSocket = socket;
    Thread t = new Thread(new Runnable() {
        public void run() {
            try {
                handleClient(holderSocket);
            } catch (Exception e) {
                appendLog("[FkwMcpPlugin] client failed " + shortText(stackTraceText(e), 300));
                try {
                    holderSocket.close();
                } catch (Exception ignore) {
                }
            }
        }
    });
    t.setName("FkwMcpClient-" + System.currentTimeMillis());
    t.start();
    ((List) MCP_STATE.get("threads")).add(t);
}

void handleClient(Socket socket) throws Exception {
    InputStream input = socket.getInputStream();
    OutputStream output = socket.getOutputStream();

    String requestLine = readHttpLine(input);
    if (requestLine == null || requestLine.equals("")) {
        socket.close();
        return;
    }

    String method = "GET";
    String path = "/";
    String[] first = requestLine.split(" ");
    if (first.length >= 2) {
        method = first[0];
        path = first[1];
    }

    int contentLength = 0;
    String line = null;
    while ((line = readHttpLine(input)) != null) {
        if (line.equals("")) {
            break;
        }
        String lower = line.toLowerCase();
        if (lower.startsWith("content-length:")) {
            contentLength = Integer.parseInt(line.substring(line.indexOf(":") + 1).trim());
        }
    }

    appendLog("[FkwMcpPlugin] request " + method + " " + path + " len=" + contentLength);

    if (!path.equals(getServerPath())) {
        writeHttp(output, 404, "application/json; charset=UTF-8", "{\\"error\\":\\"path not found\\"}");
        socket.close();
        return;
    }

    if ("GET".equals(method)) {
        String body = "event: endpoint\\n" +
                "data: {\\"message\\":\\"MCP streamable-http ready, use POST with JSON-RPC.\\"}\\n\\n";
        writeHttp(output, 200, "text/event-stream; charset=UTF-8", body);
        socket.close();
        return;
    }

    if (!"POST".equals(method)) {
        writeHttp(output, 405, "application/json; charset=UTF-8", "{\\"error\\":\\"only GET and POST supported\\"}");
        socket.close();
        return;
    }

    String body = readHttpBody(input, contentLength);
    appendLog("[FkwMcpPlugin] body " + shortText(body, 300));

    Map rpcResult = null;
    try {
        rpcResult = handleRpc(body);
    } catch (Exception e) {
        appendLog("[FkwMcpPlugin] rpc failed " + shortText(stackTraceText(e), 300));
        rpcResult = rpcResult(true, errorResponse(null, -32603, e.getMessage()));
    }

    if (rpcResult != null && Boolean.TRUE.equals(rpcResult.get("hasBody"))) {
        String responseText = stringify(rpcResult.get("payload"));
        appendLog("[FkwMcpPlugin] response len=" + responseText.length());
        writeHttp(output, 200, "application/json; charset=UTF-8", responseText);
    } else {
        writeHttp(output, 202, "application/json; charset=UTF-8", "");
    }

    socket.close();
}

void writeHttp(OutputStream output, int code, String contentType, String body) throws Exception {
    byte[] bytes = body.getBytes("UTF-8");
    String reason = code == 200 ? "OK" : (code == 202 ? "Accepted" : (code == 404 ? "Not Found" : "Error"));
    String headers = "HTTP/1.1 " + code + " " + reason + "\\r\\n" +
            "Content-Type: " + contentType + "\\r\\n" +
            "Content-Length: " + bytes.length + "\\r\\n" +
            "Connection: close\\r\\n" +
            "\\r\\n";
    output.write(headers.getBytes("UTF-8"));
    output.write(bytes);
    output.flush();
}

Map handleRpc(String text) {
    Object obj = parseJson(text);
    if (!(obj instanceof Map)) {
        return rpcResult(true, errorResponse(null, -32600, "request body must be a JSON object"));
    }

    Map req = (Map) obj;
    Object id = req.get("id");
    String method = req.get("method") == null ? null : String.valueOf(req.get("method"));
    Map params = req.get("params") instanceof Map ? (Map) req.get("params") : newMap();

    appendLog("[FkwMcpPlugin] rpc method=" + method + " id=" + id);

    if (method == null || method.equals("")) {
        return rpcResult(true, errorResponse(id, -32600, "method is required"));
    }

    if (method.equals("initialize")) {
        String clientProtocolVersion = params.get("protocolVersion") == null
                ? "2025-06-18"
                : String.valueOf(params.get("protocolVersion"));

        Map result = newMap();
        result.put("protocolVersion", clientProtocolVersion);

        Map capabilities = newMap();
        Map tools = newMap();
        tools.put("listChanged", Boolean.FALSE);
        capabilities.put("tools", tools);
        result.put("capabilities", capabilities);

        Map serverInfo = newMap();
        serverInfo.put("name", "fkw-mcp-plugin");
        serverInfo.put("version", pluginVersion);
        result.put("serverInfo", serverInfo);
        result.put("instructions", "This server runs in FkWeChat plugin environment. Use tools/list and tools/call.");
        return rpcResult(true, successResponse(id, result));
    }

    if (method.equals("notifications/initialized")) {
        return rpcResult(false, null);
    }

    if (method.equals("ping")) {
        Map pong = newMap();
        pong.put("ok", Boolean.TRUE);
        return rpcResult(true, successResponse(id, pong));
    }

    if (method.equals("tools/list")) {
        Map result = newMap();
        result.put("tools", describeTools());
        return rpcResult(true, successResponse(id, result));
    }

    if (method.equals("tools/call")) {
        String toolName = params.get("name") == null ? "" : String.valueOf(params.get("name"));
        Map args = params.get("arguments") instanceof Map ? (Map) params.get("arguments") : newMap();
        appendLog("[FkwMcpPlugin] tool " + toolName + " args=" + shortText(stringify(args), 200));
        try {
            long startAt = System.currentTimeMillis();
            Object data = handleToolCall(toolName, args);
            long elapsed = System.currentTimeMillis() - startAt;
            String fullText = fullValue(data);
            appendLog("[FkwMcpPlugin] tool ok " + toolName + " elapsedMs=" + elapsed + " textLen=" + fullText.length() + " data=" + dataSummary(data));

            Map result = newMap();
            List content = newList();
            Map textItem = newMap();
            textItem.put("type", "text");
            textItem.put("text", fullText);
            content.add(textItem);
            result.put("content", content);

            result.put("isError", Boolean.FALSE);
            return rpcResult(true, successResponse(id, result));
        } catch (Exception e) {
            appendLog("[FkwMcpPlugin] tool fail " + toolName + " " + shortText(stackTraceText(e), 300));
            return rpcResult(true, errorResponse(id, -32602, e.getMessage()));
        }
    }

    return rpcResult(true, errorResponse(id, -32601, "method not found: " + method));
}

String dataSummary(Object data) {
    if (data == null) return "null";
    if (data instanceof List) {
        return "list(size=" + ((List) data).size() + ")";
    }
    if (data instanceof Map) {
        return "map(keys=" + ((Map) data).keySet() + ")";
    }
    String text = String.valueOf(data);
    return shortText(text, 120);
}

Map rpcResult(boolean hasBody, Map payload) {
    Map result = newMap();
    result.put("hasBody", Boolean.valueOf(hasBody));
    result.put("payload", payload);
    return result;
}
`,Xd=`loadJava("fkw_mcp");

void onLoad() {
    initMcpState();
    appendLog("[FkwMcpPlugin] onLoad start");
    appendLog("[FkwMcpPlugin] pluginName=" + pluginName);
    appendLog("[FkwMcpPlugin] pluginVersion=" + pluginVersion);
    appendLog("[FkwMcpPlugin] pluginAuthor=" + pluginAuthor);
    appendLog("[FkwMcpPlugin] pluginPath=" + pluginPath);
    appendLog("[FkwMcpPlugin] hostVerCode=" + hostVerCode);
    appendLog("[FkwMcpPlugin] hostVerName=" + hostVerName);
    appendLog("[FkwMcpPlugin] myWxId=" + getSafeMyWxId());
    startMcpServer();
    appendLog("[FkwMcpPlugin] onLoad done");
}

void onUnload() {
    stopMcpServer();
    appendLog("[FkwMcpPlugin] onUnload done");
}
`,eh=Object.freeze(Object.defineProperty({__proto__:null,default:Xd},Symbol.toStringTag,{value:"Module"})),nh=`{
  "host": "0.0.0.0",
  "port": 8888,
  "path": "/mcp",
  "mcpServers": {
    "Fkw-Mcp": {
      "url": "http://localhost:8888/mcp",
      "transport": "streamable-http"
    }
  }
}
`,th=`## v1.0.7
- 修复了一些已知问题

## 指令列表
- \`点歌 歌名\`（仅自己可用）
`,rh=`import okhttp3.*
import java.time.Duration

client = new OkHttpClient.Builder()
    .connectTimeout(Duration.ofSeconds(30))
    .callTimeout(Duration.ofSeconds(30))
    .readTimeout(Duration.ofSeconds(30))
    .build()

addHeaders(builder, header) {
    if (!header?.isEmpty()) {
        for (Map.Entry entry : header.entrySet()) {
            key = "\${entry.getKey()}"
            value = "\${entry.getValue()}"
            builder.addHeader(key, value)
        }
    }
}

doRequest(builder) {
    try {
        request = builder.build()
        response = client.newCall(request).execute()
        body = response?.body()?.string() ?: ""
        response.close()
        return body
    } catch (e) {
        return null
    }
}

get(
    url, callback,
    header = null
) {
    new Thread(() -> {
        builder = new Request.Builder().url(url).get()
        addHeaders(builder, header)
        result = doRequest(builder)
        callback?.onResult(result)
    }).start()
}

post(
    url, data, callback,
    header = null
) {
    new Thread(() -> {
        mediaType = "application/json"
        if (header?.containsKey("Content-Type")) {
            mediaType = String.valueOf(header.get("Content-Type"))
        }
        body = RequestBody.create(
            MediaType.parse(mediaType),
            data ?: ""
        )
        builder = new Request.Builder().url(url).post(body)
        addHeaders(builder, header)
        result = doRequest(builder)
        callback?.onResult(result)
    }).start()
}`,ih=`import com.alibaba.fastjson2.*

HEADERS = new HashMap()
HEADERS.put("referer", "http://aqqmusic.tc.qq.com/")
HEADERS.put("user-agent", "Mozilla/5.0 Chrome/92.0.4515.105 Safari/537.36")

BASE_URL = "http://aqqmusic.tc.qq.com/"
API_URL = "http://u.y.qq.com/cgi-bin/musicu.fcg"
PIC_URL = "http://y.gtimg.cn/music/photo_new/T002R500x500M000"
LYRIC_URL = "http://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?format=json&nobase64=1"

search(name) {
    return """
    {"comm": {
           "ct": "19",
           "cv": "1882",
           "uin": "3449496653"
        }, "searchMusic": {
            "method": "DoSearchForQQMusicDesktop",
            "module": "music.search.SearchCgiService",
            "param": {
                "grp": 1,
                "num_per_page": 1,
                "page_num": 1, 
                "query": "\${name}",
                "search_type": 0
            }
        }
    }"""
}

purl(id) {
    return """
    {"comm": {
           "ct": "11",
           "cv": "22060004",
           "tmeAppID": "ztelite",
           "OpenUDID": "nouid",
           "uid": "3449496653"
        }, "request": {
            "module": "music.qqmusiclite.MtLimitFreeSvr",
            "method": "Obtain",
            "param": {
                "songid": [\${id}],
                "need_ppurl": true
            }
        }
    }"""
}

getVkey(name, mid) { 
    return """
    {"comm": {
            "ct": "11",
            "cv": "22060004",
            "tmeAppID": "ztelite",
            "OpenUDID": "nouid",
            "uid": "3449496653"
        }, "request": {
            "module": "music.vkey.GetVkey",
            "method": "UrlGetVkey",
            "param": {
                "guid": "yun",
                "songmid": ["\${mid}"],
                "filename": ["M500\${name}.mp3"]
            }
        }
    }"""
}

vkey(mid, purl) {
    return """
    {"request": {
            "module": "music.vkey.GetVkey",
            "method": "CgiGetTempVkey",
            "param": {
                "guid": "yun",
                "songlist": [{
                    "mediamid": "yun",
                    "tempVkey": "\${purl}",
                    "songMID": "\${mid}"
                }]
            }
        }
    }"""
}

send_Music(talker, title, author, musicUrl, albumUrl, lyric) {
    sendCard(talker,
    """<msg>
        <appmsg appid="wx1c37343fc2a86bc4">
            <title>\${escape(title)}</title>
            <des>\${escape(author)}</des>
            <action>view</action>
            <type>76</type>
            <url>\${escape(musicUrl)}</url>
            <dataurl>\${escape(musicUrl)}</dataurl>
            <songalbumurl>\${escape(albumUrl)}</songalbumurl>
            <songlyric>\${escape(lyric)}</songlyric>
            <musicShareItem>
                <mvCoverUrl>\${escape(albumUrl)}</mvCoverUrl>
                <mvSingerName>\${escape(author)}</mvSingerName>
                <mid>getlinkmid_</mid>
            </musicShareItem>
        </appmsg>
    </msg>""")
}

escape(s) {
    if (s == null) return ""
    return s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\\"", "&quot;")
        .replace("'", "&apos;")
}

music(talker, song) {
    get(API_URL + "?data=\${search(song)}", resp -> {
        if (resp == null) return sendText(talker, "请求失败")
        search = JSON.parseObject(resp)
        if (search.getIntValue("code") != 0) return sendText(talker, "发生错误")
        music = JSONPath.eval(search, "$.searchMusic.data.body.song.list[0]")
        if (music == null) return sendText(talker, "未搜到")
        mid = music.getString("mid")
        id = music.getString("id")
        name = music.getString("name")
        singer = JSONPath.eval(music, "$.singer[0].name")
        mediamid = JSONPath.eval(music, "$.file.media_mid")
        pic = PIC_URL + JSONPath.eval(music, "$.album.pmid") + ".jpg"
        post(API_URL, "\${purl(id)}", resp -> {
            if (resp == null) return
            result = JSON.parseObject(resp)
            pUrl = JSONPath.eval(result, "$.request.data.tracks[0].control.ppurl")
            get(LYRIC_URL + "&songmid=\${mid}", resp -> {
                lyric = JSONPath.eval(resp, "$.lyric")
                if (!pUrl.isEmpty()) {
                    post(API_URL, "\${vkey(mid, pUrl)}", resp -> {
                        url = JSONPath.eval(resp, "$.request.data.data.yun.purl")
                        send_Music(talker, name, singer, url, pic, lyric)
                    })
                } else
                post(API_URL, "\${getVkey(mediamid, mid)}", resp -> {
                    url = JSONPath.eval(resp, "$.request.data.midurlinfo[0].flowurl")
                    if (!url.isEmpty()) {
                        send_Music(talker, name, singer, BASE_URL + url, pic, lyric)
                    } else sendText(talker, "该曲可能是数字专辑")
                })
            }, HEADERS)
        })
    }, HEADERS)
}`,ec=`loadJava("api/http")
loadJava("api/music")

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker.equals(myWxId)) {
        if (content.startsWith("点歌")) {
            music(msg.talker, content.substring(2))
        }
   }
}`,ah=Object.freeze(Object.defineProperty({__proto__:null,default:ec},Symbol.toStringTag,{value:"Module"})),nc=`// Created by 吃不香菜
// Plugin: 关键提醒

import android.app.*;
import android.content.*;
import android.os.*;
import android.view.*;
import android.widget.*;
import java.text.*;
import java.util.*;

// ===== 全局配置 =====
int enabled = 1;
int groupEnabled = 1;
int alertSelfSend = 0;
int alertInterval = 0; // 秒，0=每次都提醒

int keywordEnabled = 1;
int targetEnabled = 1;

String targetAlertTitle = "特别关注提醒";
String targetAlertText = "你关注的人发消息了";

List categories = new ArrayList();     // Map{name,title,keywords}
List targetTalkers = new ArrayList();  // 特别关注 talker 列表

Map lastAlertMap = new HashMap();

// ===== 日志 =====
void logger(String s) {
    try { log("[关键提醒] " + s); return; } catch (Throwable e) {}
    try { print("[关键提醒] " + s); return; } catch (Throwable e) {}
}

// ===== 基础工具 =====
String safeStr(Object v) {
    if (v == null) return "";
    return String.valueOf(v).trim();
}

int toInt(Object v, int d) {
    try {
        if (v instanceof Number) return ((Number) v).intValue();
        String s = safeStr(v);
        if (s.length() == 0) return d;
        return Integer.parseInt(s);
    } catch (Throwable e) {
        return d;
    }
}

String fkField(Object obj, String name) {
    try {
        if (obj == null) return "";
        java.lang.reflect.Field f = obj.getClass().getDeclaredField(name);
        f.setAccessible(true);
        Object v = f.get(obj);
        return safeStr(v);
    } catch (Throwable e) {
        return "";
    }
}

String tryMethodStr(Object obj, String name) {
    try {
        if (obj == null) return "";
        Object v = obj.getClass().getMethod(name).invoke(obj);
        return safeStr(v);
    } catch (Throwable e) {
        return "";
    }
}

boolean readIsSend(Object msg) {
    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
    } catch (Throwable e) {}

    String iv = fkField(msg, "isSend");
    if ("true".equalsIgnoreCase(iv)) return true;
    if ("1".equals(iv)) return true;
    return false;
}

String readTalker(Object msg) {
    String v = fkField(msg, "talker");
    if (v.length() > 0) return v;

    v = tryMethodStr(msg, "getTalker");
    if (v.length() > 0) return v;

    return "";
}

String readContent(Object msg) {
    String[] fds = new String[]{"content", "rawContent", "text", "msg"};
    for (int i = 0; i < fds.length; i++) {
        String v = fkField(msg, fds[i]);
        if (v.length() > 0) return v;
    }
    return "";
}

boolean isGroupChat(String talker) {
    return talker != null && talker.endsWith("@chatroom");
}

// ===== 污染过滤 =====
boolean isPolluted(String s) {
    s = safeStr(s);
    if (s.length() == 0) return true;

    String low = s.toLowerCase();

    if (s.startsWith("/")) return true;
    if (low.indexOf("/storage/") >= 0) return true;
    if (low.indexOf("/android/") >= 0) return true;
    if (low.indexOf("com.tencent.mm") >= 0) return true;
    if (low.indexOf("micromsg") >= 0) return true;

    if (low.endsWith(".mp4")) return true;
    if (low.endsWith(".jpg")) return true;
    if (low.endsWith(".jpeg")) return true;
    if (low.endsWith(".png")) return true;
    if (low.endsWith(".gif")) return true;
    if (low.endsWith(".webp")) return true;
    if (low.endsWith(".mp3")) return true;
    if (low.endsWith(".amr")) return true;
    if (low.endsWith(".silk")) return true;
    if (low.endsWith(".json")) return true;
    if (low.endsWith(".xml")) return true;
    if (low.endsWith(".db")) return true;

    return false;
}

boolean validTalker(String talker) {
    talker = safeStr(talker);
    if (talker.length() == 0) return false;
    if (isPolluted(talker)) return false;
    return true;
}

boolean validName(String name) {
    name = safeStr(name);
    if (name.length() == 0) return false;
    if (isPolluted(name)) return false;
    return true;
}

boolean validKeyword(String kw) {
    kw = safeStr(kw);
    if (kw.length() == 0) return false;
    if (kw.length() > 80) return false;
    if (isPolluted(kw)) return false;
    return true;
}

// ===== 昵称读取 =====
String getDisplayName(String talker) {
    try {
        if (talker == null || talker.length() == 0) return "未知";

        String remark = "";
        try { remark = getUserRemark(talker); } catch (Throwable e) {}
        if (remark != null && remark.length() > 0 && validName(remark)) return remark;

        String name = "";
        try { name = getUserName(talker); } catch (Throwable e) {}
        if (name != null && name.length() > 0 && validName(name)) return name;

        return talker;
    } catch (Throwable e) {
        return talker;
    }
}

String getSenderName(Object msg, String talker) {
    try {
        String sendTalker = fkField(msg, "sendTalker");
        if (sendTalker.length() > 0 && !sendTalker.equals(talker)) {
            return getDisplayName(sendTalker);
        }

        String displayName = tryMethodStr(msg, "getDisplayName");
        if (displayName.length() > 0 && !displayName.equals(talker) && validName(displayName)) {
            return displayName;
        }

        return getDisplayName(talker);
    } catch (Throwable e) {
        return getDisplayName(talker);
    }
}

// ===== 分类默认值 =====
Map makeCat(String name, String title, String[] kws) {
    Map cat = new HashMap();
    cat.put("name", name);
    cat.put("title", title);

    List list = new ArrayList();
    for (int i = 0; i < kws.length; i++) {
        String kw = safeStr(kws[i]);
        if (validKeyword(kw) && !list.contains(kw)) list.add(kw);
    }

    cat.put("keywords", list);
    return cat;
}

void initDefaultCategories() {
    categories.clear();
    categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
    categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
    categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
    categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
}

// ===== 配置保存读取 =====
void saveConfig() {
    try {
        android.content.SharedPreferences sp = hostContext.getSharedPreferences("fk_alert_plus", 0);
        android.content.SharedPreferences.Editor ed = sp.edit();

        ed.putInt("enabled", enabled);
        ed.putInt("groupEnabled", groupEnabled);
        ed.putInt("alertSelfSend", alertSelfSend);
        ed.putInt("alertInterval", alertInterval);
        ed.putInt("keywordEnabled", keywordEnabled);
        ed.putInt("targetEnabled", targetEnabled);
        ed.putString("targetAlertTitle", targetAlertTitle);
        ed.putString("targetAlertText", targetAlertText);

        org.json.JSONArray catsArr = new org.json.JSONArray();

        for (int i = 0; i < categories.size(); i++) {
            try {
                Map cat = (Map) categories.get(i);
                String name = safeStr(cat.get("name"));
                String title = safeStr(cat.get("title"));
                List kws = (List) cat.get("keywords");

                if (name.length() == 0) continue;
                if (title.length() == 0) title = name;

                org.json.JSONObject obj = new org.json.JSONObject();
                obj.put("name", name);
                obj.put("title", title);

                org.json.JSONArray kwArr = new org.json.JSONArray();

                if (kws != null) {
                    for (int k = 0; k < kws.size(); k++) {
                        String kw = safeStr(kws.get(k));
                        if (validKeyword(kw)) kwArr.put(kw);
                    }
                }

                obj.put("keywords", kwArr);
                catsArr.put(obj);
            } catch (Throwable e) {}
        }

        ed.putString("categories", catsArr.toString());

        org.json.JSONArray targetArr = new org.json.JSONArray();
        for (int i = 0; i < targetTalkers.size(); i++) {
            String t = safeStr(targetTalkers.get(i));
            if (validTalker(t)) targetArr.put(t);
        }
        ed.putString("targetTalkers", targetArr.toString());

        ed.apply();

    } catch (Throwable e) {
        logger("saveConfig异常: " + e);
    }
}

void loadConfig() {
    try {
        android.content.SharedPreferences sp = hostContext.getSharedPreferences("fk_alert_plus", 0);

        enabled = sp.getInt("enabled", 1);
        groupEnabled = sp.getInt("groupEnabled", 1);
        alertSelfSend = sp.getInt("alertSelfSend", 0);
        alertInterval = sp.getInt("alertInterval", 0);
        keywordEnabled = sp.getInt("keywordEnabled", 1);
        targetEnabled = sp.getInt("targetEnabled", 1);
        targetAlertTitle = sp.getString("targetAlertTitle", "特别关注提醒");
        targetAlertText = sp.getString("targetAlertText", "你关注的人发消息了");

        categories.clear();

        String catsJson = sp.getString("categories", "");
        if (catsJson.length() > 0) {
            org.json.JSONArray arr = new org.json.JSONArray(catsJson);
            for (int i = 0; i < arr.length(); i++) {
                org.json.JSONObject obj = arr.getJSONObject(i);

                Map cat = new HashMap();
                cat.put("name", obj.optString("name", ""));
                cat.put("title", obj.optString("title", ""));

                List kwList = new ArrayList();
                org.json.JSONArray kws = obj.optJSONArray("keywords");
                if (kws != null) {
                    for (int j = 0; j < kws.length(); j++) {
                        String kw = kws.optString(j, "");
                        if (validKeyword(kw) && !kwList.contains(kw)) kwList.add(kw);
                    }
                }

                cat.put("keywords", kwList);

                if (safeStr(cat.get("name")).length() > 0) categories.add(cat);
            }
        }

        if (categories.isEmpty()) {
            initDefaultCategories();
        }

        targetTalkers.clear();

        String targetJson = sp.getString("targetTalkers", "");
        if (targetJson.length() > 0) {
            org.json.JSONArray arr = new org.json.JSONArray(targetJson);
            for (int i = 0; i < arr.length(); i++) {
                String t = arr.optString(i, "");
                if (validTalker(t) && !targetTalkers.contains(t)) targetTalkers.add(t);
            }
        }

        saveConfig();

    } catch (Throwable e) {
        logger("loadConfig异常: " + e);
        initDefaultCategories();
    }
}

// ===== 冷却 =====
boolean hitCooldown(String key) {
    if (alertInterval <= 0) return false;

    long now = System.currentTimeMillis();
    long last = 0L;

    try {
        Object v = lastAlertMap.get(key);
        if (v instanceof Number) last = ((Number) v).longValue();
        else if (v != null) last = Long.parseLong(String.valueOf(v));
    } catch (Throwable e) {}

    if (now - last < alertInterval * 1000L) return true;

    lastAlertMap.put(key, Long.valueOf(now));
    return false;
}

// ===== 通知跳转 =====
Intent[] buildIntents(String talker) {
    Intent home = null;
    Intent chat = null;

    try {
        home = new Intent();
        home.setComponent(new ComponentName("com.tencent.mm", "com.tencent.mm.ui.LauncherUI"));
        home.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
    } catch (Throwable e) {}

    try {
        chat = new Intent();
        chat.setComponent(new ComponentName("com.tencent.mm", "com.tencent.mm.ui.chatting.ChattingUI"));
        chat.putExtra("Chat_User", talker);
        chat.putExtra("Chat_Mode", 1);
        chat.putExtra("finish_direct", true);
        chat.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
    } catch (Throwable e) {}

    if (home != null && chat != null) return new Intent[]{home, chat};
    if (chat != null) return new Intent[]{chat};
    if (home != null) return new Intent[]{home};
    return null;
}

void sendNotify(String title, String channelTag, String talker, String sender, String content) {
    try {
        NotificationManager nm = (NotificationManager) hostContext.getSystemService(Context.NOTIFICATION_SERVICE);
        String channelId = "fk_alert_plus_" + channelTag;

        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel ch = nm.getNotificationChannel(channelId);
            if (ch == null) {
                ch = new NotificationChannel(channelId, channelTag, NotificationManager.IMPORTANCE_HIGH);
                ch.enableLights(true);
                ch.enableVibration(true);
                ch.setLockscreenVisibility(Notification.VISIBILITY_PUBLIC);
                nm.createNotificationChannel(ch);
            }
        }

        Notification.Builder b;
        if (Build.VERSION.SDK_INT >= 26) b = new Notification.Builder(hostContext, channelId);
        else b = new Notification.Builder(hostContext);

        String body = sender + ": " + content;
        if (body.length() > 100) body = body.substring(0, 100) + "...";

        String timeStr = new SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(new Date());

        b.setContentTitle(title)
         .setContentText(body)
         .setStyle(new Notification.BigTextStyle().bigText(body))
         .setWhen(System.currentTimeMillis())
         .setShowWhen(true)
         .setAutoCancel(true)
         .setPriority(Notification.PRIORITY_HIGH)
         .setDefaults(Notification.DEFAULT_ALL)
         .setSubText(timeStr);

        try { b.setSmallIcon(android.R.drawable.ic_dialog_alert); } catch (Throwable e) {}

        Intent[] intents = buildIntents(talker);
        if (intents != null && intents.length > 0) {
            b.setContentIntent(PendingIntent.getActivities(
                hostContext,
                (int)(System.currentTimeMillis() & 0x7FFFFFFF),
                intents,
                PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE
            ));
        }

        nm.notify((int)(System.currentTimeMillis() & 0x7FFFFFFF), b.build());

    } catch (Throwable e) {
        logger("通知失败: " + e);
        try { notify(title, content); } catch (Throwable ee) {}
    }
}

// ===== 命中判断 =====
boolean isTargetTalker(String talker) {
    talker = safeStr(talker);
    if (talker.length() == 0) return false;

    for (int i = 0; i < targetTalkers.size(); i++) {
        String one = safeStr(targetTalkers.get(i));
        if (one.equals(talker)) return true;
    }

    return false;
}

String findKeywordCategory(String content) {
    try {
        String lower = safeStr(content).toLowerCase();
        if (lower.length() == 0) return "";

        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            List kws = (List) cat.get("keywords");
            if (kws == null) continue;

            for (int k = 0; k < kws.size(); k++) {
                String kw = safeStr(kws.get(k));
                if (kw.length() == 0) continue;
                if (lower.indexOf(kw.toLowerCase()) >= 0) {
                    return safeStr(cat.get("name"));
                }
            }
        }
    } catch (Throwable e) {
        logger("findKeywordCategory异常: " + e);
    }

    return "";
}

Map getCategoryByName(String name) {
    try {
        name = safeStr(name);
        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            if (name.equals(safeStr(cat.get("name")))) return cat;
        }
    } catch (Throwable e) {}
    return null;
}

// ===== 消息处理核心 =====
void handleMsgCore(Object msg, String talker, String content, boolean isSelf) {
    try {
        if (enabled != 1) return;
        if (!validTalker(talker)) return;
        if (content == null || content.length() == 0) return;

        String c = safeStr(content);
        if (c.length() == 0) return;

        // 富消息/路径污染过滤
        if (isPolluted(c)) return;
        if (c.startsWith("<msg") || c.startsWith("<xml") || c.startsWith("<appmsg")) return;

        if (isSelf && alertSelfSend != 1) return;
        if (isGroupChat(talker) && groupEnabled != 1) return;

        String sender = getSenderName(msg, talker);

        // 1. 特别关注联系人提醒
        if (targetEnabled == 1 && isTargetTalker(talker)) {
            String key = "target_" + talker;
            if (!hitCooldown(key)) {
                sendNotify(targetAlertTitle, "特别关注", talker, sender, targetAlertText);
                logger("特别关注命中: " + talker);
            }
        }

        // 2. 关键词提醒
        if (keywordEnabled == 1) {
            String catName = findKeywordCategory(c);
            if (catName.length() > 0) {
                Map cat = getCategoryByName(catName);
                String title = catName;
                if (cat != null) title = safeStr(cat.get("title"));
                if (title.length() == 0) title = catName;

                String key = "kw_" + talker + "_" + catName;
                if (!hitCooldown(key)) {
                    sendNotify(title, "关键词-" + catName, talker, sender, c);
                    logger("关键词命中: " + catName + " | " + sender);
                }
            }
        }

    } catch (Throwable e) {
        logger("handleMsgCore异常: " + e);
    }
}

// ===== Fk 消息入口 =====
void onMsg(Object msg) {
    try {
        String talker = readTalker(msg);
        String content = readContent(msg);
        boolean isSelf = readIsSend(msg);

        handleMsgCore(msg, talker, content, isSelf);

    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== UI工具 =====
void runUi(final Activity a, final Runnable r) {
    try {
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { r.run(); } catch (Throwable e) { logger("runUi内部异常: " + e); }
                }
            });
        } else {
            r.run();
        }
    } catch (Throwable e) {
        logger("runUi异常: " + e);
    }
}

Button makeBtn(Activity a, String text, final Runnable r) {
    Button b = new Button(a);
    b.setText(text);
    try { b.setAllCaps(false); } catch (Throwable e) {}

    b.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {
            try { r.run(); } catch (Throwable e) { logger("按钮异常: " + e); }
        }
    });

    return b;
}

String joinList(List list, String sep) {
    StringBuilder sb = new StringBuilder();
    try {
        for (int i = 0; i < list.size(); i++) {
            String s = safeStr(list.get(i));
            if (s.length() == 0) continue;
            if (sb.length() > 0) sb.append(sep);
            sb.append(s);
        }
    } catch (Throwable e) {}
    return sb.toString();
}

List parseCsv(String text) {
    List out = new ArrayList();
    try {
        String[] arr = safeStr(text).split("[,，\\\\s]+");
        for (int i = 0; i < arr.length; i++) {
            String one = safeStr(arr[i]);
            if (one.length() > 0 && !out.contains(one)) out.add(one);
        }
    } catch (Throwable e) {}
    return out;
}

// ===== 主设置 UI =====
void showSettings(final Activity a) {
    try {
        if (a == null) return;

        runUi(a, new Runnable() {
            public void run() {
                try {
                    ScrollView sv = new ScrollView(a);
                    LinearLayout root = new LinearLayout(a);
                    root.setOrientation(LinearLayout.VERTICAL);
                    root.setPadding(36, 36, 36, 36);
                    sv.addView(root);

                    final TextView status = new TextView(a);
                    status.setText(buildStatusText());
                    status.setTextSize(15);
                    status.setPadding(0, 0, 0, 20);
                    root.addView(status);

                    root.addView(makeBtn(a, "总开关: " + (enabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            enabled = enabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "关键词提醒: " + (keywordEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            keywordEnabled = keywordEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注提醒: " + (targetEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            targetEnabled = targetEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "群聊提醒: " + (groupEnabled == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            groupEnabled = groupEnabled == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "自己消息提醒: " + (alertSelfSend == 1 ? "开" : "关"), new Runnable() {
                        public void run() {
                            alertSelfSend = alertSelfSend == 1 ? 0 : 1;
                            saveConfig();
                            status.setText(buildStatusText());
                        }
                    }));

                    root.addView(makeBtn(a, "重复间隔: " + (alertInterval == 0 ? "每次提醒" : alertInterval + "秒"), new Runnable() {
                        public void run() {
                            showIntervalUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "关键词分类管理", new Runnable() {
                        public void run() {
                            showCategoryListUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注联系人", new Runnable() {
                        public void run() {
                            showTargetTalkerUI(a);
                        }
                    }));

                    root.addView(makeBtn(a, "特别关注提醒文案", new Runnable() {
                        public void run() {
                            showTargetTextUI(a);
                        }
                    }));

                    new AlertDialog.Builder(a)
                        .setTitle("关键提醒设置")
                        .setView(sv)
                        .setNegativeButton("关闭", null)
                        .show();

                } catch (Throwable e) {
                    logger("showSettings UI异常: " + e);
                }
            }
        });

    } catch (Throwable e) {
        logger("showSettings异常: " + e);
    }
}

String buildStatusText() {
    String text = "";
    text += "总开关: " + (enabled == 1 ? "开" : "关") + "\\n";
    text += "关键词提醒: " + (keywordEnabled == 1 ? "开" : "关") + "\\n";
    text += "特别关注提醒: " + (targetEnabled == 1 ? "开" : "关") + "\\n";
    text += "群聊提醒: " + (groupEnabled == 1 ? "开" : "关") + "\\n";
    text += "自己消息: " + (alertSelfSend == 1 ? "提醒" : "不提醒") + "\\n";
    text += "重复间隔: " + (alertInterval == 0 ? "每次提醒" : alertInterval + "秒") + "\\n";
    text += "关键词分类: " + categories.size() + "个\\n";
    text += "特别关注: " + targetTalkers.size() + "个\\n";
    return text;
}

// ===== 重复间隔 UI =====
void showIntervalUI(final Activity a) {
    try {
        final String[] items = new String[]{"每次都提醒", "10秒", "30秒", "60秒", "300秒"};
        final int[] values = new int[]{0, 10, 30, 60, 300};

        int cur = 0;
        for (int i = 0; i < values.length; i++) {
            if (alertInterval == values[i]) cur = i;
        }

        final int[] selected = new int[]{cur};

        new AlertDialog.Builder(a)
            .setTitle("重复提醒间隔")
            .setSingleChoiceItems(items, cur, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    selected[0] = which;
                }
            })
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    alertInterval = values[selected[0]];
                    saveConfig();
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showIntervalUI异常: " + e);
    }
}

// ===== 恢复默认分类 =====
void resetDefaultCategories() {
    try {
        categories.clear();
        categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
        categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
        categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
        categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
        categories.add(makeCat("试验", "🧪 试验提醒", new String[]{"一次性", "乱码", "污染", "搞不了"}));
        saveConfig();
    } catch (Throwable e) {
        logger("resetDefaultCategories异常: " + e);
    }
}

// ===== 特别关注联系人 =====
void showTargetTalkerUI(final Activity a) {
    try {
        List friends = null;

        try {
            friends = getFriendList();
        } catch (Throwable e) {
            friends = null;
            logger("getFriendList失败: " + e);
        }

        if (friends == null || friends.isEmpty()) {
            Toast.makeText(a, "联系人列表为空", Toast.LENGTH_SHORT).show();
            return;
        }

        final List allIds = new ArrayList();
        final List allNames = new ArrayList();

        for (int i = 0; i < friends.size(); i++) {
            try {
                Object obj = friends.get(i);
                if (!(obj instanceof HashMap)) continue;

                HashMap f = (HashMap) obj;

                String wxid = safeStr(f.get("username"));
                if (!validTalker(wxid)) continue;

                String nick = safeStr(f.get("nickname"));
                String remark = safeStr(f.get("conRemark"));

                if (!validName(nick)) nick = "";
                if (!validName(remark)) remark = "";

                String label = wxid;

                if (remark.length() > 0) {
                    if (nick.length() > 0) {
                        label = nick + "(" + remark + ")";
                    } else {
                        label = remark;
                    }
                } else if (nick.length() > 0) {
                    label = nick;
                }

                allIds.add(wxid);
                allNames.add(label);

            } catch (Throwable e) {
                logger("解析好友异常: " + e);
            }
        }

        if (allIds.isEmpty()) {
            Toast.makeText(a, "未能解析好友", Toast.LENGTH_SHORT).show();
            return;
        }

        final java.util.HashSet selected = new java.util.HashSet();

        for (int i = 0; i < targetTalkers.size(); i++) {
            String id = safeStr(targetTalkers.get(i));
            if (validTalker(id)) selected.add(id);
        }

        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(20, 20, 20, 20);

        TextView tip = new TextView(a);
        tip.setText("特别关注联系人\\n搜索后点选联系人，保存后生效。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 10);
        root.addView(tip);

        final EditText search = new EditText(a);
        search.setHint("搜索好友昵称 / wxid");
        search.setSingleLine(true);
        root.addView(search);

        final TextView count = new TextView(a);
        count.setTextSize(14);
        count.setPadding(0, 10, 0, 10);
        root.addView(count);

        final ListView listView = new ListView(a);
        listView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        root.addView(listView);

        final List visibleIds = new ArrayList();
        final List visibleNames = new ArrayList();

        final Runnable[] refresh = new Runnable[1];

        refresh[0] = new Runnable() {
            public void run() {
                try {
                    visibleIds.clear();
                    visibleNames.clear();

                    String kw = search.getText().toString().trim().toLowerCase();

                    ArrayList display = new ArrayList();

                    for (int i = 0; i < allIds.size(); i++) {
                        String id = safeStr(allIds.get(i));
                        String name = safeStr(allNames.get(i));

                        String lowId = id.toLowerCase();
                        String lowName = name.toLowerCase();

                        if (kw.length() > 0 && lowId.indexOf(kw) < 0 && lowName.indexOf(kw) < 0) {
                            continue;
                        }

                        visibleIds.add(id);
                        visibleNames.add(name);

                        String showName = name;
                        if (showName.length() > 28) {
                            showName = showName.substring(0, 28) + "...";
                        }

                        display.add(showName + "\\n" + id);
                    }

                    ArrayAdapter adapter = new ArrayAdapter(
                        a,
                        android.R.layout.simple_list_item_multiple_choice,
                        display
                    );

                    listView.setAdapter(adapter);

                    for (int i = 0; i < visibleIds.size(); i++) {
                        String id = safeStr(visibleIds.get(i));
                        listView.setItemChecked(i, selected.contains(id));
                    }

                    count.setText(
                        "总计 " + allIds.size() +
                        " 人 / 当前显示 " + visibleIds.size() +
                        " 人 / 已选 " + selected.size() + " 人"
                    );

                } catch (Throwable e) {
                    logger("刷新特别关注搜索列表异常: " + e);
                }
            }
        };

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            public void onItemClick(AdapterView parent, View view, int position, long id) {
                try {
                    if (position < 0 || position >= visibleIds.size()) return;

                    String wxid = safeStr(visibleIds.get(position));

                    if (selected.contains(wxid)) {
                        selected.remove(wxid);
                    } else {
                        selected.add(wxid);
                    }

                    listView.setItemChecked(position, selected.contains(wxid));

                    count.setText(
                        "总计 " + allIds.size() +
                        " 人 / 当前显示 " + visibleIds.size() +
                        " 人 / 已选 " + selected.size() + " 人"
                    );

                } catch (Throwable e) {
                    logger("特别关注点选异常: " + e);
                }
            }
        });

        search.addTextChangedListener(new android.text.TextWatcher() {
            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                try {
                    refresh[0].run();
                } catch (Throwable e) {}
            }

            public void afterTextChanged(android.text.Editable s) {}
        });

        final AlertDialog dialog = new AlertDialog.Builder(a)
            .setTitle("特别关注联系人")
            .setView(root)
            .setPositiveButton("保存", null)
            .setNeutralButton("清空", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new DialogInterface.OnShowListener() {
            public void onShow(DialogInterface d) {
                try {
                    refresh[0].run();

                    dialog.getButton(AlertDialog.BUTTON_POSITIVE).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                targetTalkers.clear();

                                Iterator it = selected.iterator();
                                while (it.hasNext()) {
                                    String one = safeStr(it.next());
                                    if (validTalker(one) && !targetTalkers.contains(one)) {
                                        targetTalkers.add(one);
                                    }
                                }

                                saveConfig();

                                Toast.makeText(
                                    a,
                                    "已保存特别关注: " + targetTalkers.size() + "人",
                                    Toast.LENGTH_SHORT
                                ).show();

                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("保存特别关注异常: " + e);
                                Toast.makeText(a, "保存失败: " + e.getMessage(), Toast.LENGTH_SHORT).show();
                            }
                        }
                    });

                    dialog.getButton(AlertDialog.BUTTON_NEUTRAL).setOnClickListener(new View.OnClickListener() {
                        public void onClick(View v) {
                            try {
                                selected.clear();
                                targetTalkers.clear();
                                saveConfig();
                                refresh[0].run();
                                Toast.makeText(a, "已清空特别关注", Toast.LENGTH_SHORT).show();
                            } catch (Throwable e) {
                                logger("清空特别关注异常: " + e);
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("特别关注弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showTargetTalkerUI异常: " + e);
        try {
            Toast.makeText(a, "打开失败: " + e.getMessage(), Toast.LENGTH_SHORT).show();
        } catch (Throwable ee) {}
    }
}

// ===== 恢复默认分类 =====
void resetDefaultCategories() {
    try {
        categories.clear();
        categories.add(makeCat("紧急", "⚠️ 紧急消息", new String[]{"紧急", "急急急", "十万火急", "救命"}));
        categories.add(makeCat("报错", "❌ 报错提醒", new String[]{"报错", "error", "崩溃", "闪退", "异常"}));
        categories.add(makeCat("文件", "📁 文件提醒", new String[]{"文件", "视频", "图片", "下载"}));
        categories.add(makeCat("刷屏", "🔁 刷屏提醒", new String[]{"刷屏", "111", "222", "333"}));
        categories.add(makeCat("试验", "🧪 试验提醒", new String[]{"一次性", "乱码", "污染", "搞不了"}));
        saveConfig();
    } catch (Throwable e) {
        logger("resetDefaultCategories异常: " + e);
    }
}

// ===== 关键词分类列表 =====
void showCategoryListUI(final Activity a) {
    try {
        if (a == null) return;

        final String[] items = new String[categories.size()];
        for (int i = 0; i < categories.size(); i++) {
            Map cat = (Map) categories.get(i);
            String name = safeStr(cat.get("name"));
            List kws = (List) cat.get("keywords");
            String kwText = joinList(kws, ", ");
            items[i] = name + "  |  " + kwText;
        }

        new AlertDialog.Builder(a)
            .setTitle("关键词分类")
            .setItems(items, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    showCategoryActionUI(a, which);
                }
            })
            .setPositiveButton("新增分类", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    showEditCategoryUI(a, -1);
                }
            })
            .setNeutralButton("恢复默认", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    new AlertDialog.Builder(a)
                        .setTitle("恢复默认分类")
                        .setMessage("将清空当前所有分类并恢复默认分类，是否继续？")
                        .setPositiveButton("恢复", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dd, int ww) {
                                resetDefaultCategories();
                                Toast.makeText(a, "已恢复默认分类", Toast.LENGTH_SHORT).show();
                            }
                        })
                        .setNegativeButton("取消", null)
                        .show();
                }
            })
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showCategoryListUI异常: " + e);
    }
}

// ===== 分类操作：编辑 / 删除 =====
void showCategoryActionUI(final Activity a, final int idx) {
    try {
        if (idx < 0 || idx >= categories.size()) return;

        Map cat = (Map) categories.get(idx);
        final String catName = safeStr(cat.get("name"));

        new AlertDialog.Builder(a)
            .setTitle(catName)
            .setItems(new String[]{"编辑", "删除"}, new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int which) {
                    if (which == 0) {
                        showEditCategoryUI(a, idx);
                    } else if (which == 1) {
                        new AlertDialog.Builder(a)
                            .setTitle("删除分类")
                            .setMessage("确定删除分类：" + catName + " ?")
                            .setPositiveButton("删除", new DialogInterface.OnClickListener() {
                                public void onClick(DialogInterface dd, int w) {
                                    try {
                                        if (idx >= 0 && idx < categories.size()) {
                                            categories.remove(idx);
                                            saveConfig();
                                            Toast.makeText(a, "已删除分类", Toast.LENGTH_SHORT).show();
                                        }
                                    } catch (Throwable e) {
                                        logger("删除分类异常: " + e);
                                    }
                                }
                            })
                            .setNegativeButton("取消", null)
                            .show();
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showCategoryActionUI异常: " + e);
    }
}

// ===== 编辑分类 =====
void showEditCategoryUI(final Activity a, final int idx) {
    try {
        final boolean isNew = idx < 0;

        String oldName = "";
        String oldTitle = "";
        String oldKws = "";

        if (!isNew && idx >= 0 && idx < categories.size()) {
            Map cat = (Map) categories.get(idx);
            oldName = safeStr(cat.get("name"));
            oldTitle = safeStr(cat.get("title"));
            oldKws = joinList((List) cat.get("keywords"), ",");
        }

        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        final EditText nameEt = new EditText(a);
        nameEt.setHint("分类名，例如 紧急");
        nameEt.setSingleLine(true);
        nameEt.setText(oldName);
        root.addView(nameEt);

        final EditText titleEt = new EditText(a);
        titleEt.setHint("通知标题，例如 ⚠️ 紧急消息");
        titleEt.setSingleLine(true);
        titleEt.setText(oldTitle);
        root.addView(titleEt);

        final EditText kwsEt = new EditText(a);
        kwsEt.setHint("关键词，用逗号或空格分隔");
        kwsEt.setSingleLine(false);
        kwsEt.setMinLines(3);
        kwsEt.setText(oldKws);
        root.addView(kwsEt);

        new AlertDialog.Builder(a)
            .setTitle(isNew ? "新增分类" : "编辑分类")
            .setView(root)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        String name = safeStr(nameEt.getText().toString());
                        String title = safeStr(titleEt.getText().toString());
                        List kwsRaw = parseCsv(kwsEt.getText().toString());

                        if (name.length() == 0) {
                            Toast.makeText(a, "分类名不能为空", Toast.LENGTH_SHORT).show();
                            return;
                        }

                        List kws = new ArrayList();
                        for (int i = 0; i < kwsRaw.size(); i++) {
                            String kw = safeStr(kwsRaw.get(i));
                            if (validKeyword(kw) && !kws.contains(kw)) kws.add(kw);
                        }

                        if (title.length() == 0) title = name;

                        Map cat = new HashMap();
                        cat.put("name", name);
                        cat.put("title", title);
                        cat.put("keywords", kws);

                        if (isNew) {
                            categories.add(cat);
                        } else if (idx >= 0 && idx < categories.size()) {
                            categories.set(idx, cat);
                        }

                        saveConfig();
                        Toast.makeText(a, "已保存", Toast.LENGTH_SHORT).show();

                    } catch (Throwable e) {
                        logger("保存分类异常: " + e);
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showEditCategoryUI异常: " + e);
    }
}

// ===== 特别关注提醒文案 UI =====
void showTargetTextUI(final Activity a) {
    try {
        LinearLayout root = new LinearLayout(a);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        TextView tip = new TextView(a);
        tip.setText("特别关注提醒文案\\n命中特别关注联系人时使用。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 12);
        root.addView(tip);

        final EditText titleEt = new EditText(a);
        titleEt.setHint("通知标题");
        titleEt.setSingleLine(true);
        titleEt.setText(targetAlertTitle);
        root.addView(titleEt);

        final EditText textEt = new EditText(a);
        textEt.setHint("通知正文");
        textEt.setSingleLine(false);
        textEt.setMinLines(2);
        textEt.setMaxLines(4);
        textEt.setText(targetAlertText);
        root.addView(textEt);

        new AlertDialog.Builder(a)
            .setTitle("特别关注提醒文案")
            .setView(root)
            .setPositiveButton("保存", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    try {
                        String title = safeStr(titleEt.getText().toString());
                        String text = safeStr(textEt.getText().toString());

                        if (title.length() == 0) title = "特别关注提醒";
                        if (text.length() == 0) text = "你关注的人发消息了";

                        targetAlertTitle = title;
                        targetAlertText = text;

                        saveConfig();

                        Toast.makeText(a, "已保存", Toast.LENGTH_SHORT).show();

                    } catch (Throwable e) {
                        logger("保存特别关注文案异常: " + e);
                    }
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showTargetTextUI异常: " + e);
    }
}

void onMsgMenu(msg) {
    try {
        addMenuItem("关键提醒设置", "", () -> {
            final Activity a = getTopActivity();
            if (a != null) {
                a.runOnUiThread(new Runnable() {
                    public void run() {
                        showSettings(a);
                    }
                });
            }
        });
    } catch (Throwable e) {
        logger("onMsgMenu异常: " + e);
    }
}

// ===== 设置入口备用 =====
void openSettings() {
    try {
        Activity a = getTopActivity();
        if (a != null) showSettings(a);
        else Toast.makeText(hostContext, "请先打开微信界面", Toast.LENGTH_SHORT).show();
    } catch (Throwable e) {
        logger("openSettings异常: " + e);
    }
}

// ===== 生命周期 =====
void onLoad() {
    loadConfig();
    logger("已加载");
}

void onUnload() {
    saveConfig();
}
`,lh=Object.freeze(Object.defineProperty({__proto__:null,default:nc},Symbol.toStringTag,{value:"Module"})),oh=`长按消息进入菜单打开ui
`,tc=`// Created by 吃不香菜
// Plugin: 复读机与默认回复

// ===== 默认回复 =====
String SYS_REPLY = "你好我现在有事不在，待会再与你联系";

// ===== 全局配置 =====
Map repeatMap = new HashMap();      // talker -> on
Map replyMap = new HashMap();       // talker -> replyText
Map authMap = new HashMap();        // talker -> on
List replyList = new ArrayList();   // 回复语列表，JSON保存

int authEnabled = 0;                // 0=关闭授权门槛，1=仅授权联系人触发
String uiTalker = "";

// ===== 基础工具 =====
void logger(String s) {
    try { log(s); } catch (Throwable e) {}
}

String fkSafeStr(Object v) {
    if (v == null) return "";
    return String.valueOf(v).trim();
}

String fkFieldStr(Object o, String f) {
    try {
        if (o == null) return "";
        java.lang.reflect.Field ff = o.getClass().getDeclaredField(f);
        ff.setAccessible(true);
        Object v = ff.get(o);
        if (v == null) return "";
        return String.valueOf(v).trim();
    } catch (Throwable e) {
        return "";
    }
}

boolean fkIsSend(Object msg) {
    try {
        java.lang.reflect.Field f = msg.getClass().getDeclaredField("isSend");
        f.setAccessible(true);
        Object v = f.get(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
        if (v != null) return "true".equalsIgnoreCase(String.valueOf(v));
    } catch (Throwable e) {}

    try {
        Object v = msg.getClass().getMethod("isSend").invoke(msg);
        if (v instanceof Boolean) return ((Boolean) v).booleanValue();
        if (v instanceof Number) return ((Number) v).intValue() == 1;
        if (v != null) return "true".equalsIgnoreCase(String.valueOf(v));
    } catch (Throwable e) {}

    return false;
}

void safeToast(String s) {
    try { toast(s); } catch (Throwable e) {}
}

void safeSendText(String talker, String text) {
    try {
        sendText(talker, text);
    } catch (Throwable e) {
        logger("sendText失败: " + e);
    }
}

// ===== 防污染过滤 =====
boolean isPollutedText(String text) {
    text = fkSafeStr(text);
    if (text.length() == 0) return true;

    String low = text.toLowerCase();

    if (text.startsWith("/")) return true;
    if (low.indexOf("/storage/") >= 0) return true;
    if (low.indexOf("/android/") >= 0) return true;
    if (low.indexOf("com.tencent.mm") >= 0) return true;
    if (low.indexOf("micromsg") >= 0) return true;

    if (low.endsWith(".mp4")) return true;
    if (low.endsWith(".3gp")) return true;
    if (low.endsWith(".mov")) return true;
    if (low.endsWith(".avi")) return true;
    if (low.endsWith(".jpg")) return true;
    if (low.endsWith(".jpeg")) return true;
    if (low.endsWith(".png")) return true;
    if (low.endsWith(".gif")) return true;
    if (low.endsWith(".webp")) return true;
    if (low.endsWith(".mp3")) return true;
    if (low.endsWith(".amr")) return true;
    if (low.endsWith(".silk")) return true;
    if (low.endsWith(".m4a")) return true;
    if (low.endsWith(".json")) return true;
    if (low.endsWith(".xml")) return true;
    if (low.endsWith(".db")) return true;
    if (low.endsWith(".txt")) return true;

    return false;
}

boolean validTalker(String talker) {
    talker = fkSafeStr(talker);
    if (talker.length() == 0) return false;
    if (isPollutedText(talker)) return false;
    return true;
}

boolean validName(String name) {
    name = fkSafeStr(name);
    if (name.length() == 0) return false;
    if (isPollutedText(name)) return false;
    return true;
}

boolean validReplyText(String text) {
    text = fkSafeStr(text);
    if (text.length() == 0) return false;
    if (text.length() > 500) return false;
    if (isPollutedText(text)) return false;
    return true;
}

String cleanReplyText(String text) {
    text = fkSafeStr(text);
    if (!validReplyText(text)) return "";
    return text;
}

// ===== UI线程 =====
android.app.Activity getAct() {
    try {
        return getTopActivity();
    } catch (Throwable e) {
        return null;
    }
}

void runUi(final Runnable r) {
    try {
        android.app.Activity a = getAct();
        if (a != null) {
            a.runOnUiThread(new Runnable() {
                public void run() {
                    try { r.run(); } catch (Throwable e) { logger("runUi内部异常: " + e); }
                }
            });
            return;
        }

        android.os.Handler h = new android.os.Handler(android.os.Looper.getMainLooper());
        h.post(new Runnable() {
            public void run() {
                try { r.run(); } catch (Throwable e) { logger("Handler UI异常: " + e); }
            }
        });

    } catch (Throwable e) {
        logger("runUi异常: " + e);
    }
}

// ===== 配置路径 =====
String getConfigDir() {
    return "/storage/emulated/0/Android/media/com.tencent.mm/FkWeChat/Plugin/复读机与默认回复/";
}

String getConfigFile() {
    return getConfigDir() + "config.json";
}

// ===== 回复语列表维护 =====
void ensureReplyList() {
    try {
        List clean = new ArrayList();

        for (int i = 0; i < replyList.size(); i++) {
            String t = cleanReplyText(replyList.get(i));
            if (t.length() > 0 && !clean.contains(t)) clean.add(t);
        }

        if (!clean.contains(SYS_REPLY)) {
            clean.add(0, SYS_REPLY);
        }

        replyList.clear();
        replyList.addAll(clean);

    } catch (Throwable e) {
        logger("ensureReplyList异常: " + e);
        replyList.clear();
        replyList.add(SYS_REPLY);
    }
}

String getCurrentReply(String talker) {
    return fkSafeStr(replyMap.get(talker));
}

boolean repeatOn(String talker) {
    return "on".equals(fkSafeStr(repeatMap.get(talker)));
}

boolean replyOn(String talker) {
    String r = getCurrentReply(talker);
    return r.length() > 0;
}

boolean authOk(String talker) {
    if (authEnabled == 0) return true;
    return "on".equals(fkSafeStr(authMap.get(talker)));
}

// ===== 配置保存/读取：JSON =====
void saveConfig() {
    try {
        ensureReplyList();

        java.io.File dir = new java.io.File(getConfigDir());
        if (!dir.exists()) dir.mkdirs();

        JSONObject root = new JSONObject();
        root.put("authEnabled", authEnabled);

        JSONArray arr = new JSONArray();
        for (int i = 0; i < replyList.size(); i++) {
            String t = cleanReplyText(replyList.get(i));
            if (t.length() > 0) arr.put(t);
        }
        root.put("replyList", arr);

        JSONObject rep = new JSONObject();
        Iterator it1 = repeatMap.keySet().iterator();
        while (it1.hasNext()) {
            String k = fkSafeStr(it1.next());
            if (validTalker(k) && "on".equals(fkSafeStr(repeatMap.get(k)))) {
                rep.put(k, "on");
            }
        }
        root.put("repeatMap", rep);

        JSONObject rp = new JSONObject();
        Iterator it2 = replyMap.keySet().iterator();
        while (it2.hasNext()) {
            String k = fkSafeStr(it2.next());
            String v = cleanReplyText(replyMap.get(k));
            if (validTalker(k) && v.length() > 0) {
                rp.put(k, v);
            }
        }
        root.put("replyMap", rp);

        JSONObject au = new JSONObject();
        Iterator it3 = authMap.keySet().iterator();
        while (it3.hasNext()) {
            String k = fkSafeStr(it3.next());
            if (validTalker(k) && "on".equals(fkSafeStr(authMap.get(k)))) {
                au.put(k, "on");
            }
        }
        root.put("authMap", au);

        java.io.FileWriter w = new java.io.FileWriter(new java.io.File(getConfigFile()), false);
        w.write(root.toString());
        w.flush();
        w.close();

    } catch (Throwable e) {
        logger("saveConfig异常: " + e);
    }
}

void loadConfig() {
    try {
        replyList.clear();
        replyList.add(SYS_REPLY);

        java.io.File f = new java.io.File(getConfigFile());
        if (!f.exists()) {
            saveConfig();
            return;
        }

        java.io.BufferedReader r = new java.io.BufferedReader(new java.io.FileReader(f));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = r.readLine()) != null) sb.append(line);
        r.close();

        String txt = sb.toString().trim();
        if (txt.length() == 0) {
            saveConfig();
            return;
        }

        // 新版 JSON
        if (txt.startsWith("{") && txt.indexOf("replyList") >= 0) {
            JSONObject root = new JSONObject(txt);

            authEnabled = root.optInt("authEnabled", 0);

            replyList.clear();
            JSONArray arr = root.optJSONArray("replyList");
            if (arr != null) {
                for (int i = 0; i < arr.length(); i++) {
                    String t = cleanReplyText(arr.optString(i, ""));
                    if (t.length() > 0 && !replyList.contains(t)) replyList.add(t);
                }
            }

            repeatMap.clear();
            JSONObject rep = root.optJSONObject("repeatMap");
            if (rep != null) {
                Iterator it = rep.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    if (validTalker(k)) repeatMap.put(k, "on");
                }
            }

            replyMap.clear();
            JSONObject rp = root.optJSONObject("replyMap");
            if (rp != null) {
                Iterator it = rp.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    String v = cleanReplyText(rp.optString(k, ""));
                    if (validTalker(k) && v.length() > 0) replyMap.put(k, v);
                }
            }

            authMap.clear();
            JSONObject au = root.optJSONObject("authMap");
            if (au != null) {
                Iterator it = au.keys();
                while (it.hasNext()) {
                    String k = fkSafeStr(it.next());
                    if (validTalker(k)) authMap.put(k, "on");
                }
            }

            ensureReplyList();
            saveConfig();
            return;
        }

        // 兼容旧版 6.73KB 配置，旧 replyMap 是 1/2/3，这里统一迁移为 SYS_REPLY
        repeatMap.clear();
        replyMap.clear();

        if (txt.length() >= 3) {
            String body = txt.substring(1, txt.length() - 1);
            String[] parts = body.split(",");

            for (int i = 0; i < parts.length; i++) {
                String p = parts[i].trim();
                if (p.length() == 0) continue;

                int colon = p.indexOf(":");
                if (colon < 0) continue;

                String key = p.substring(1, colon - 1).trim();
                String val = p.substring(colon + 1).trim();

                if (key.endsWith("_r")) {
                    String talker = key.substring(0, key.length() - 2);
                    if (validTalker(talker) && val.indexOf("on") >= 0) repeatMap.put(talker, "on");
                } else if (key.endsWith("_p")) {
                    String talker = key.substring(0, key.length() - 2);
                    if (validTalker(talker)) replyMap.put(talker, SYS_REPLY);
                }
            }
        }

        ensureReplyList();
        saveConfig();

    } catch (Throwable e) {
        logger("loadConfig异常: " + e);
        ensureReplyList();
    }
}

// ===== UI按钮 =====
android.widget.Button makeBtn(android.app.Activity a, String text, final Runnable r) {
    android.widget.Button b = new android.widget.Button(a);
    b.setText(text);
    try { b.setAllCaps(false); } catch (Throwable e) {}

    b.setOnClickListener(new android.view.View.OnClickListener() {
        public void onClick(android.view.View v) {
            try {
                r.run();
            } catch (Throwable e) {
                logger("按钮异常: " + e);
                safeToast("操作失败: " + e.getMessage());
            }
        }
    });

    return b;
}

String buildStatusText() {
    String t = uiTalker;
    if (t.length() == 0) t = "未知会话";

    String text = "";
    text += "当前会话: " + t + "\\n";
    text += "授权门槛: " + (authEnabled == 1 ? "开" : "关") + "\\n";
    text += "当前授权: " + ("on".equals(fkSafeStr(authMap.get(uiTalker))) ? "已授权" : "未授权") + "\\n";
    text += "复读: " + (repeatOn(uiTalker) ? "开" : "关") + "\\n";

    String r = getCurrentReply(uiTalker);
    if (r.length() == 0) {
        text += "默认回复: 关\\n";
    } else {
        text += "默认回复: 开\\n";
        text += "回复内容: " + r + "\\n";
    }

    return text;
}

// ===== 主设置UI =====
void showMainUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showMainUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        android.widget.ScrollView sv = new android.widget.ScrollView(a);
        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(36, 36, 36, 36);
        sv.addView(root);

        final android.widget.TextView status = new android.widget.TextView(a);
        status.setText(buildStatusText());
        status.setTextSize(15);
        status.setPadding(0, 0, 0, 20);
        root.addView(status);

        root.addView(makeBtn(a, "复读开关", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if (repeatOn(uiTalker)) {
                    repeatMap.remove(uiTalker);
                    safeToast("复读已关闭");
                } else {
                    repeatMap.put(uiTalker, "on");
                    safeToast("复读已开启");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "默认回复开关", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if (replyOn(uiTalker)) {
                    replyMap.remove(uiTalker);
                    safeToast("默认回复已关闭");
                } else {
                    replyMap.put(uiTalker, SYS_REPLY);
                    safeToast("默认回复已开启");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "默认回复设置", new Runnable() {
            public void run() {
                showReplySelectUI();
            }
        }));

        root.addView(makeBtn(a, "回复语管理", new Runnable() {
            public void run() {
                showReplyManageUI();
            }
        }));

        root.addView(makeBtn(a, "授权门槛: " + (authEnabled == 1 ? "开" : "关"), new Runnable() {
            public void run() {
                if (authEnabled == 1) authEnabled = 0;
                else authEnabled = 1;

                saveConfig();
                safeToast("授权门槛已" + (authEnabled == 1 ? "开启" : "关闭"));
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "授权/取消当前联系人", new Runnable() {
            public void run() {
                if (!validTalker(uiTalker)) {
                    safeToast("当前会话为空");
                    return;
                }

                if ("on".equals(fkSafeStr(authMap.get(uiTalker)))) {
                    authMap.remove(uiTalker);
                    safeToast("已取消授权当前联系人");
                } else {
                    authMap.put(uiTalker, "on");
                    safeToast("已授权当前联系人");
                }

                saveConfig();
                status.setText(buildStatusText());
            }
        }));

        root.addView(makeBtn(a, "联系人授权", new Runnable() {
            public void run() {
                showFriendAuthSelector(a);
            }
        }));

        new android.app.AlertDialog.Builder(a)
            .setTitle("复读机与默认回复")
            .setView(sv)
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showMainUI异常: " + e);
        safeToast("打开UI失败: " + e.getMessage());
    }
}

// ===== 默认回复选择 =====
void showReplySelectUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showReplySelectUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        if (!validTalker(uiTalker)) {
            safeToast("当前会话为空");
            return;
        }

        final String[] items = new String[replyList.size() + 1];
        items[0] = "关闭默认回复";

        int cur = 0;
        String now = getCurrentReply(uiTalker);

        for (int i = 0; i < replyList.size(); i++) {
            String t = fkSafeStr(replyList.get(i));
            items[i + 1] = t;
            if (now.length() > 0 && now.equals(t)) cur = i + 1;
        }

        final int[] selected = new int[1];
        selected[0] = cur;

        new android.app.AlertDialog.Builder(a)
            .setTitle("选择默认回复")
            .setSingleChoiceItems(items, cur, new android.content.DialogInterface.OnClickListener() {
                public void onClick(android.content.DialogInterface d, int which) {
                    selected[0] = which;
                }
            })
            .setPositiveButton("保存", new android.content.DialogInterface.OnClickListener() {
                public void onClick(android.content.DialogInterface d, int w) {
                    if (selected[0] == 0) {
                        replyMap.remove(uiTalker);
                        safeToast("默认回复已关闭");
                    } else {
                        String text = fkSafeStr(replyList.get(selected[0] - 1));
                        if (!validReplyText(text)) {
                            safeToast("回复语无效，可能是污染路径");
                            return;
                        }
                        replyMap.put(uiTalker, text);
                        safeToast("已设置默认回复");
                    }

                    saveConfig();
                }
            })
            .setNegativeButton("取消", null)
            .show();

    } catch (Throwable e) {
        logger("showReplySelectUI异常: " + e);
        safeToast("打开失败: " + e.getMessage());
    }
}

// ===== 回复语管理 =====
void showReplyManageUI() {
    try {
        if (android.os.Looper.myLooper() != android.os.Looper.getMainLooper()) {
            runUi(new Runnable() {
                public void run() {
                    showReplyManageUI();
                }
            });
            return;
        }

        ensureReplyList();

        final android.app.Activity a = getAct();
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(30, 30, 30, 20);

        android.widget.TextView tip = new android.widget.TextView(a);
        tip.setText("回复语管理\\n系统默认回复固定保留。\\n新增内容会过滤路径、mp4、图片、com.tencent.mm 等污染项。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 12);
        root.addView(tip);

        final android.widget.EditText input = new android.widget.EditText(a);
        input.setHint("输入新的回复语");
        input.setSingleLine(false);
        input.setMinLines(2);
        input.setMaxLines(4);
        root.addView(input);

        android.widget.Button addBtn = makeBtn(a, "添加回复语", new Runnable() {
            public void run() {
                String text = cleanReplyText(input.getText().toString());
                if (text.length() == 0) {
                    safeToast("回复语无效，可能是路径/视频/图片污染");
                    return;
                }

                if (!replyList.contains(text)) replyList.add(text);
                input.setText("");
                saveConfig();
                safeToast("已添加");
                showReplyManageUI();
            }
        });
        root.addView(addBtn);

        android.widget.TextView listTitle = new android.widget.TextView(a);
        listTitle.setText("\\n当前回复语，点击可删除非系统回复：");
        listTitle.setTextSize(15);
        listTitle.setPadding(0, 18, 0, 8);
        root.addView(listTitle);

        for (int i = 0; i < replyList.size(); i++) {
            final String text = fkSafeStr(replyList.get(i));
            android.widget.TextView tv = new android.widget.TextView(a);

            if (SYS_REPLY.equals(text)) {
                tv.setText("● 系统默认：" + text);
            } else {
                tv.setText("○ " + text);
            }

            tv.setTextSize(15);
            tv.setPadding(8, 14, 8, 14);

            tv.setOnClickListener(new android.view.View.OnClickListener() {
                public void onClick(android.view.View v) {
                    if (SYS_REPLY.equals(text)) {
                        safeToast("系统默认回复不能删除");
                        return;
                    }

                    replyList.remove(text);

                    Iterator it = replyMap.keySet().iterator();
                    List removeKeys = new ArrayList();
                    while (it.hasNext()) {
                        Object k = it.next();
                        if (text.equals(fkSafeStr(replyMap.get(k)))) {
                            removeKeys.add(k);
                        }
                    }

                    for (int x = 0; x < removeKeys.size(); x++) {
                        replyMap.remove(removeKeys.get(x));
                    }

                    saveConfig();
                    safeToast("已删除回复语");
                    showReplyManageUI();
                }
            });

            root.addView(tv);
        }

        new android.app.AlertDialog.Builder(a)
            .setTitle("回复语管理")
            .setView(root)
            .setNegativeButton("关闭", null)
            .show();

    } catch (Throwable e) {
        logger("showReplyManageUI异常: " + e);
        safeToast("打开失败: " + e.getMessage());
    }
}

// ===== 联系人授权：只用 getFriendList，按法克欸欸逻辑 =====
void showFriendAuthSelector(final android.app.Activity a) {
    try {
        if (a == null) {
            safeToast("无法获取窗口");
            return;
        }

        List friends = null;
        try {
            friends = getFriendList();
        } catch (Throwable e) {
            logger("getFriendList失败: " + e);
            safeToast("拉取联系人失败");
            return;
        }

        if (friends == null || friends.isEmpty()) {
            safeToast("好友列表为空");
            return;
        }

        final List allNames = new ArrayList();
        final List allIds = new ArrayList();

        for (int idx = 0; idx < friends.size(); idx++) {
            try {
                Object obj = friends.get(idx);
                if (!(obj instanceof HashMap)) continue;

                HashMap f = (HashMap) obj;

                String wxid = fkSafeStr(f.get("username"));
                if (!validTalker(wxid)) continue;

                String nick = fkSafeStr(f.get("nickname"));
                String remark = fkSafeStr(f.get("conRemark"));

                if (!validName(nick)) nick = "";
                if (!validName(remark)) remark = "";

                String label = wxid;

                if (remark.length() > 0) {
                    if (nick.length() > 0) label = nick + "(" + remark + ")";
                    else label = remark;
                } else if (nick.length() > 0) {
                    label = nick;
                }

                allIds.add(wxid);
                allNames.add(label);

            } catch (Throwable e) {
                logger("解析好友异常: " + e);
            }
        }

        if (allIds.isEmpty()) {
            safeToast("未能解析好友");
            return;
        }

        final boolean[] checked = new boolean[allIds.size()];
        for (int j = 0; j < allIds.size(); j++) {
            String wxid = fkSafeStr(allIds.get(j));
            if ("on".equals(fkSafeStr(authMap.get(wxid)))) checked[j] = true;
        }

        android.widget.LinearLayout layout = new android.widget.LinearLayout(a);
        layout.setOrientation(android.widget.LinearLayout.VERTICAL);
        layout.setPadding(20, 20, 20, 20);

        android.widget.TextView tip = new android.widget.TextView(a);
        tip.setText("联系人授权\\n来源：getFriendList\\n已过滤路径、com.tencent.mm 等污染项。");
        tip.setTextSize(14);
        tip.setPadding(0, 0, 0, 10);
        layout.addView(tip);

        final android.widget.EditText searchInput = new android.widget.EditText(a);
        searchInput.setHint("搜索好友");
        searchInput.setSingleLine(true);
        layout.addView(searchInput);

        final android.widget.TextView countView = new android.widget.TextView(a);
        countView.setTextSize(14);
        countView.setPadding(0, 10, 0, 10);
        layout.addView(countView);

        final android.widget.ScrollView listScroll = new android.widget.ScrollView(a);
        final android.widget.LinearLayout listContainer = new android.widget.LinearLayout(a);
        listContainer.setOrientation(android.widget.LinearLayout.VERTICAL);
        listScroll.addView(listContainer);
        layout.addView(listScroll);

        final Runnable refreshList = new Runnable() {
            public void run() {
                try {
                    listContainer.removeAllViews();

                    String kw = searchInput.getText().toString().trim().toLowerCase();

                    int shown = 0;
                    int selected = 0;

                    for (int i = 0; i < allIds.size(); i++) {
                        if (checked[i]) selected++;

                        String name = fkSafeStr(allNames.get(i));
                        String id = fkSafeStr(allIds.get(i));

                        String nameLower = name.toLowerCase();
                        String idLower = id.toLowerCase();

                        if (kw.length() == 0 || nameLower.indexOf(kw) >= 0 || idLower.indexOf(kw) >= 0) {
                            shown++;

                            final int realIdx = i;

                            android.widget.TextView tv = new android.widget.TextView(listContainer.getContext());

                            String label = fkSafeStr(allNames.get(i));
                            if (label.length() > 25) label = label.substring(0, 25) + "...";

                            tv.setText((checked[realIdx] ? "● " : "○ ") + label);
                            tv.setTextSize(16);
                            tv.setPadding(15, 18, 15, 18);

                            tv.setOnClickListener(new android.view.View.OnClickListener() {
                                public void onClick(android.view.View v) {
                                    try {
                                        checked[realIdx] = !checked[realIdx];

                                        String lbl = fkSafeStr(allNames.get(realIdx));
                                        if (lbl.length() > 25) lbl = lbl.substring(0, 25) + "...";

                                        ((android.widget.TextView) v).setText((checked[realIdx] ? "● " : "○ ") + lbl);
                                    } catch (Throwable e) {
                                        logger("好友点选异常: " + e);
                                    }
                                }
                            });

                            listContainer.addView(tv);
                        }
                    }

                    countView.setText("总计 " + allIds.size() + " 人 / 当前显示 " + shown + " 人 / 已选 " + selected + " 人");

                } catch (Throwable e) {
                    logger("刷新好友授权列表异常: " + e);
                }
            }
        };

        searchInput.addTextChangedListener(new android.text.TextWatcher() {
            public void afterTextChanged(android.text.Editable s) {
                try { refreshList.run(); } catch (Throwable e) {}
            }

            public void beforeTextChanged(CharSequence s, int start, int count, int after) {}

            public void onTextChanged(CharSequence s, int start, int before, int count) {}
        });

        final android.app.AlertDialog dialog = new android.app.AlertDialog.Builder(a)
            .setTitle("联系人授权 (" + allIds.size() + "人)")
            .setView(layout)
            .setPositiveButton("保存", null)
            .setNegativeButton("取消", null)
            .create();

        dialog.setOnShowListener(new android.content.DialogInterface.OnShowListener() {
            public void onShow(android.content.DialogInterface d) {
                try {
                    refreshList.run();

                    dialog.getButton(android.app.AlertDialog.BUTTON_POSITIVE).setOnClickListener(new android.view.View.OnClickListener() {
                        public void onClick(android.view.View v) {
                            try {
                                // 只更新好友列表范围内的授权，保留当前会话/群聊等非好友授权
                                for (int k = 0; k < allIds.size(); k++) {
                                    authMap.remove(allIds.get(k));
                                }

                                for (int k = 0; k < allIds.size(); k++) {
                                    if (checked[k]) {
                                        authMap.put(allIds.get(k), "on");
                                    }
                                }

                                saveConfig();
                                safeToast("已保存授权");
                                dialog.dismiss();

                            } catch (Throwable e) {
                                logger("保存好友授权异常: " + e);
                                safeToast("保存失败: " + e.getMessage());
                            }
                        }
                    });

                } catch (Throwable e) {
                    logger("好友授权弹窗onShow异常: " + e);
                }
            }
        });

        dialog.show();

    } catch (Throwable e) {
        logger("showFriendAuthSelector异常: " + e);
        safeToast("好友授权失败: " + e.getMessage());
    }
}

// ===== 命令处理：兼容原脚本 =====
boolean handleCommand(String talker, String clean, boolean me) {
    try {
        String lower = clean.toLowerCase();

        if (lower.equals("复读ui") || lower.equals("默认回复ui") || lower.equals("回复ui") || lower.equals("/replyui")) {
            if (!me) return true;
            uiTalker = talker;
            showMainUI();
            return true;
        }

        if (lower.equals("授权开关")) {
            if (!me) return true;
            if (authEnabled == 1) authEnabled = 0;
            else authEnabled = 1;
            saveConfig();
            safeToast("授权门槛已" + (authEnabled == 1 ? "开启" : "关闭"));
            return true;
        }

        if (lower.equals("授权当前")) {
            if (!me) return true;
            if (validTalker(talker)) {
                authMap.put(talker, "on");
                saveConfig();
                safeToast("已授权当前联系人");
            }
            return true;
        }

        if (lower.equals("取消授权")) {
            if (!me) return true;
            authMap.remove(talker);
            saveConfig();
            safeToast("已取消授权当前联系人");
            return true;
        }

        if (lower.equals("复读开关")) {
            if (!me) return true;
            if (repeatOn(talker)) {
                repeatMap.remove(talker);
                safeToast("复读已关闭");
            } else {
                repeatMap.put(talker, "on");
                safeToast("复读已开启");
            }
            saveConfig();
            return true;
        }

        if (lower.equals("默认回复")) {
            if (!me) return true;
            if (replyOn(talker)) {
                replyMap.remove(talker);
                safeToast("默认回复已关闭");
            } else {
                replyMap.put(talker, SYS_REPLY);
                safeToast("默认回复已开启");
            }
            saveConfig();
            return true;
        }

        if (lower.equals("回复列表")) {
            if (!me) return true;
            ensureReplyList();

            String msgText = "";
            for (int i = 0; i < replyList.size(); i++) {
                msgText += (i + 1) + ". " + fkSafeStr(replyList.get(i)) + "\\n";
            }

            String cur = getCurrentReply(talker);
            if (cur.length() == 0) msgText += "当前: 未启用";
            else msgText += "当前: " + cur;

            safeToast(msgText);
            return true;
        }

        if (lower.startsWith("默认回复 ")) {
            if (!me) return true;
            ensureReplyList();

            try {
                int n = Integer.parseInt(clean.substring(5).trim());
                if (n < 1 || n > replyList.size()) {
                    safeToast("序号范围 1~" + replyList.size());
                    return true;
                }

                String text = fkSafeStr(replyList.get(n - 1));
                if (!validReplyText(text)) {
                    safeToast("回复语无效，可能是污染路径");
                    return true;
                }

                replyMap.put(talker, text);
                saveConfig();
                safeToast("已设置默认回复");

            } catch (Throwable e) {
                safeToast("格式: 默认回复 数字");
            }

            return true;
        }

    } catch (Throwable e) {
        logger("handleCommand异常: " + e);
    }

    return false;
}

// ===== 消息入口 =====
void onMsg(Object msg) {
    try {
        String talker = fkFieldStr(msg, "talker");
        String content = fkFieldStr(msg, "content");
        if (content.length() == 0) content = fkFieldStr(msg, "rawContent");

        if (!validTalker(talker)) return;
        if (content.length() == 0) return;

        boolean me = fkIsSend(msg);
        String clean = content.trim();
        if (clean.length() == 0) return;

        uiTalker = talker;

        // 命令优先
        if (handleCommand(talker, clean, me)) return;

        // 自己发的普通消息不触发
        if (me) return;

        // 授权门槛
        if (!authOk(talker)) return;

        // 复读优先
        if (repeatOn(talker)) {
            safeSendText(talker, clean);
            return;
        }

        String reply = getCurrentReply(talker);
        if (validReplyText(reply)) {
            safeSendText(talker, reply);
        }

    } catch (Throwable e) {
        logger("onMsg异常: " + e);
    }
}

// ===== Fk长按菜单入口 =====
void onMsgMenu(Object msg) {
    try {
        String t = fkFieldStr(msg, "talker");
        if (t.length() == 0) t = fkFieldStr(msg, "fromUser");
        if (t.length() == 0) t = fkFieldStr(msg, "username");

        if (validTalker(t)) uiTalker = t;

        showMainUI();

    } catch (Throwable e) {
        logger("onMsgMenu异常: " + e);
        safeToast("长按菜单异常: " + e.getMessage());
    }
}

// ===== 可选设置入口 =====
void openSettings() {
    showMainUI();
}

// ===== 生命周期 =====
void onLoad() {
    loadConfig();
    ensureReplyList();
    logger("[复读机与默认回复] 已加载");
}

void onUnload() {
    saveConfig();
    logger("[复读机与默认回复] 已卸载");
}

// 兼容 Wa 卸载名
void onUnLoad() {
    saveConfig();
}

// Wa入口占位
void onHandleMsg(Object msgInfoBean) {}
`,sh=Object.freeze(Object.defineProperty({__proto__:null,default:tc},Symbol.toStringTag,{value:"Module"})),uh=`- 插件：复读机与默认回复

- 功能：
- 支持复读指定联系人消息
- 支持给指定联系人设置默认回复
- 支持长按消息打开 UI
- 支持联系人授权白名单
- 支持自定义默认回复语
- 回复语和联系人会过滤路径、视频、图片等污染内容

- 打开 UI：
- 长按聊天消息
- 或自己发送：复读ui

- UI 功能：
- 复读开关：开启/关闭当前联系人复读
- 默认回复开关：开启/关闭当前联系人默认回复
- 默认回复设置：从回复语列表选择回复内容
- 回复语管理：新增/删除自定义回复语
- 授权门槛：开启后仅授权联系人触发
- 授权/取消当前联系人：快速授权当前聊天
- 联系人授权：从联系人列表勾选授权好友

- 命令：
- 复读ui：打开设置界面
- 复读开关：切换当前会话复读
- 默认回复：切换当前会话默认回复
- 回复列表：查看回复语列表
- 默认回复 1：设置当前会话使用第1条回复语
- 授权开关：开启/关闭授权门槛
- 授权当前：授权当前会话
- 取消授权：取消当前会话授权

- 规则：
- 命令只有自己发送有效
- 自己普通消息不会触发回复
- 复读优先于默认回复
- 授权门槛开启后，未授权联系人不会触发
- 系统默认回复为：你好我现在有事不在，待会再与你联系

- 配置文件：
- /storage/emulated/0/Android/media/com.tencent.mm/FkWeChat/Plugin/复读机与默认回复/config.json
`,dh=`�PNG\r

\0\0\0\rIHDR\0\0\0H\0\0\0H\b\0\0\0U��G\0\0\0sRGB\0���\0\0\x073IDATx^�[e�&U=���Vl�Ե;@��X�[1�le�\v�\0��յ�Ul�����~�|wgޙyg^Y�y~~���}������D�>��\0*����fA�����I��^\0�#9���=���|K��'\x1B\v��(�ͣ⻓���%��I�\x1B�N��z��T�7Y\0$�\0�g�	�b$��r�2IW8"�[��ke{\x1B$i\0KO�ǲ���%�a�0Mf�g\0������=��\x07pi"�/\0s���L~m�$M�d\0\x07\0X4s��\0np1I+PJ�f��E��H�Q*��AҎ\0��a\x1BErd��\0��\0�{��C�\v�u���) ɲvH��\0X7\0�g��^���tp���l@��*�+-�%\0#*\b~��$U�+���[�uǞ�H~Z�BI���'L\0X���U���nuAU�vC�ĝ%8�ϔ��@��gL��\0^�p��?���u���s\0�e��\0ঐ��\x07�N�I�e��3�\v��H����UWH�*ǅV9#�g\0����ݶv}U	 I��.9�������\0��̙f���.\x07pl��>\0��_��ws���92��Sf�Wh�p��O��d'���\0��a���\f�8 OܓV�&���\x1B\0��s(����*@N�i�se\bv�d.=��Ef!��k\0�\r�M\0s%<7�<��\vD�E��"�^�*�p���{��_s\f�@ZW�O�E��<\`�M�#yh?���'��r��Ir�~df���8\0��8�h��K��\\@��\x1B���I~R�\fI\x1Bx"��)�^kLu\x002��,�e��a}�A�V�5I��;�B��֓$-���N��qV%i\voL������x�'��vv%-�-��!�6�)yǬg�<��\fI�D�Jx���\`�Z���\0� M\r�Ę1�^�1钡^L�3�*�cI:+��N\vM�y
>�\`�=�YBl�m�i�k���\x1B�MF@m���Ge��^��K��~9�.N�I�$6�i[��\0lGr�%�-H>�&8��\b�.��g���W���v�P�Wy�/�ђF�T0��$G�\r�@\0��2\0w��'
?Jr�^�\b�ű�h��B5/A�M�A��:@��&�;�|gH�+�+�\\($I���U��P�?(p�c�f%
��ޕ�G���.�M)o�E�\\k1H�gʞ-W!�T�5��\r�ͧ��z$-g��
@!���x Gӳm-\0����A�����t�PN���/=�\b��E&
o\f���C��.\0��t\r��%9X_�#�z����$�K�U�X\x1B\0��1$�ͭ�����ղwVH���}�&� �Φ����\0�Y+}:�w���}t��lTp�\x07Cq����H:ǹ��aC#GpS��\v��v"�\`�n9
���w��=��l"d����\0��}|���$�+��$ύ=]�ʳb"�M�ܶכZ��t7�Y�ىg%�UíG�bo�O�\r@��F\0Y�$��c�{H�\\vp��A��[?��[�*W�#�-�6\0�Xb��Bo�����*_m]n��w��#c�#��o����=��{�K�,�5��ǀ(g؈�_�����"C�IZ/>�e�w\\qe�>=�^V�Hr�~\x1B�d�ޭ��W�����ӱj��<�hQ�nᓚ;����\v�+����B\0'U��\x1B����ĭ�\\9eii�i9Q�flm��v痨��+o���\r�	Pt3�X~��@,��C������si�t���q��&�F�[\rY긲���@ܬ�e�u�&�d�v\0� �����:\v�,���f\bt�\f�.u�YP3:\vj�_�:\v�,��5ï�A�5� %��᛿	���oL��>��V^5�VJҳ��\`�;�{m�U&o��JKZ,<A_��e�l�>���Rm��\0*A�����u�YP3\v�\x1B-��g3��\0\0\0\0IEND�B\`�`,rc=`// Created by 雲上升
// Plugin: 快捷操作

kick(talker, atList) {
   deleteGroupMember(talker, atList)
   toast("已执行")
}

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker == myWxId) {
        if(content.startsWith("踢")
          && !msg.atList.isEmpty()) {
            kick(msg.talker, msg.atList)
        }
    }
}

onMsgMenu(msg) {
   if(msg.isGroupChat() && !msg.isSend()) {
        addMenuItem("踢", "icon/kick.png", () -> {
            kick(msg.talker, msg.sendTalker)
        })
   }
}`,ch=Object.freeze(Object.defineProperty({__proto__:null,default:rc},Symbol.toStringTag,{value:"Module"})),ic=`// Created by 吃不香菜
// Plugin: 群发助手
// 长按任意消息弹出群发面板，支持文本+图片+视频

List selectedPrivateList = new ArrayList();
List selectedGroupList = new ArrayList();
String sendContent = "";
List imagePathList = new ArrayList();
List videoPathList = new ArrayList();

void onMsgMenu(Object msg) {
    Activity a = getTopActivity();
    if (a != null) {
        addMenuItem("📨 群发助手", "", () -> {
            showUI(a);
        });
    }
}

void showUI(Activity a) {
    a.runOnUiThread(new Runnable() {
        public void run() {
            try {
                ScrollView scroll = new ScrollView(a);
                LinearLayout root = new LinearLayout(a);
                root.setOrientation(LinearLayout.VERTICAL);
                root.setPadding(40, 40, 40, 40);

                Button btnFriend = new Button(a);
                btnFriend.setText("选私聊 (" + selectedPrivateList.size() + "人)");
                btnFriend.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showFriendList(a); }
                });
                root.addView(btnFriend);

                TextView sp1 = new TextView(a); sp1.setText(" "); root.addView(sp1);

                Button btnGroup = new Button(a);
                btnGroup.setText("选群聊 (" + selectedGroupList.size() + "群)");
                btnGroup.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) { showGroupList(a); }
                });
                root.addView(btnGroup);

                TextView sp2 = new TextView(a); sp2.setText(" "); root.addView(sp2);

                TextView label1 = new TextView(a);
                label1.setText("文本内容：");
                label1.setTextSize(13);
                root.addView(label1);

                final EditText et = new EditText(a);
                et.setHint("输入文本内容");
                et.setMinLines(3);
                et.setGravity(Gravity.TOP);
                root.addView(et);

                TextView sp3 = new TextView(a); sp3.setText(" "); root.addView(sp3);

                TextView label2 = new TextView(a);
                label2.setText("图片路径（文件夹/单文件/逗号分隔）：");
                label2.setTextSize(13);
                root.addView(label2);

                final EditText imgEt = new EditText(a);
                imgEt.setHint("/storage/emulated/0/Pictures/");
                imgEt.setSingleLine(true);
                root.addView(imgEt);

                TextView sp4 = new TextView(a); sp4.setText(" "); root.addView(sp4);

                TextView label3 = new TextView(a);
                label3.setText("视频路径（文件夹/单文件/逗号分隔）：");
                label3.setTextSize(13);
                root.addView(label3);

                final EditText vidEt = new EditText(a);
                vidEt.setHint("/storage/emulated/0/Movies/");
                vidEt.setSingleLine(true);
                root.addView(vidEt);

                TextView sp5 = new TextView(a); sp5.setText(" "); root.addView(sp5);

                Button btnSend = new Button(a);
                btnSend.setText("发 送");
                btnSend.setTextSize(16);
                btnSend.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        sendContent = et.getText().toString().trim();

                        imagePathList.clear();
                        String imgPath = imgEt.getText().toString().trim();
                        if (imgPath.length() > 0) parsePath(imgPath, "图片", imagePathList);

                        videoPathList.clear();
                        String vidPath = vidEt.getText().toString().trim();
                        if (vidPath.length() > 0) parsePath(vidPath, "视频", videoPathList);

                        if (sendContent.length() == 0 && imagePathList.isEmpty() && videoPathList.isEmpty()) {
                            toast("请输入内容或添加图片/视频"); return;
                        }
                        if (selectedPrivateList.isEmpty() && selectedGroupList.isEmpty()) {
                            toast("请选择联系人"); return;
                        }

                        String info = "文本" + (sendContent.length() > 0 ? "✓" : "✗") + 
                                     " 图片" + imagePathList.size() + 
                                     " 视频" + videoPathList.size();
                        toast(info);
                        doSend();
                    }
                });
                root.addView(btnSend);

                scroll.addView(root);
                new AlertDialog.Builder(a)
                    .setTitle("📨 群发助手")
                    .setView(scroll)
                    .setCancelable(true)
                    .show();
            } catch (Throwable e) { toast("失败: " + e.getMessage()); }
        }
    });
}

void parsePath(String p, String type, List list) {
    File f = new File(p);
    if (f.isDirectory()) {
        File[] files = f.listFiles();
        if (files != null) {
            for (File file : files) {
                String name = file.getName().toLowerCase();
                boolean match = type.equals("图片")
                    ? (name.endsWith(".jpg") || name.endsWith(".jpeg") || name.endsWith(".png") || name.endsWith(".webp") || name.endsWith(".gif"))
                    : (name.endsWith(".mp4") || name.endsWith(".avi") || name.endsWith(".mov") || name.endsWith(".mkv") || name.endsWith(".3gp"));
                if (match) list.add(file.getAbsolutePath());
            }
        }
    } else if (p.contains(",")) {
        String[] arr = p.split(",");
        for (int i = 0; i < arr.length; i++) {
            String fp = arr[i].trim();
            if (fp.length() > 0 && new File(fp).exists()) list.add(fp);
        }
    } else if (f.exists()) {
        list.add(p);
    }
}

void showFriendList(Activity a) {
    try {
        List friends = getFriendList();
        if (friends == null || friends.isEmpty()) { toast("无好友"); return; }
        List names = new ArrayList();
        List ids = new ArrayList();
        for (int i = 0; i < friends.size(); i++) {
            Map f = (Map) friends.get(i);
            String wxid = "";
            String nick = "";
            String rem = "";
            
            if (f.containsKey("wxid")) wxid = String.valueOf(f.get("wxid")).trim();
            else if (f.containsKey("username")) wxid = String.valueOf(f.get("username")).trim();
            else if (f.containsKey("id")) wxid = String.valueOf(f.get("id")).trim();
            
            if (f.containsKey("nickname")) nick = String.valueOf(f.get("nickname")).trim();
            else if (f.containsKey("nick")) nick = String.valueOf(f.get("nick")).trim();
            else if (f.containsKey("name")) nick = String.valueOf(f.get("name")).trim();
            
            if (f.containsKey("remark")) rem = String.valueOf(f.get("remark")).trim();
            else if (f.containsKey("conRemark")) rem = String.valueOf(f.get("conRemark")).trim();
            
            if (wxid.length() == 0) continue;
            
            String label = rem.length() > 0 ? nick + "(" + rem + ")" : nick;
            if (label.length() == 0) label = wxid;
            names.add(label); ids.add(wxid);
        }
        
        if (ids.isEmpty()) { toast("无法读取好友列表"); return; }
        
        ListView lv = new ListView(a);
        lv.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        lv.setAdapter(new ArrayAdapter(a, android.R.layout.simple_list_item_multiple_choice, names));
        for (int i = 0; i < ids.size(); i++) {
            if (selectedPrivateList.contains(ids.get(i))) lv.setItemChecked(i, true);
        }
        new AlertDialog.Builder(a).setTitle("选私聊").setView(lv)
            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    selectedPrivateList.clear();
                    for (int i = 0; i < ids.size(); i++)
                        if (lv.isItemChecked(i)) selectedPrivateList.add(ids.get(i));
                    toast("已选" + selectedPrivateList.size() + "人");
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void showGroupList(Activity a) {
    try {
        List groups = getGroupList();
        if (groups == null || groups.isEmpty()) { toast("无群聊"); return; }
        List names = new ArrayList();
        List ids = new ArrayList();
        for (int i = 0; i < groups.size(); i++) {
            Map g = (Map) groups.get(i);
            String rid = "";
            String name = "";
            
            if (g.containsKey("roomId")) rid = String.valueOf(g.get("roomId")).trim();
            else if (g.containsKey("username")) rid = String.valueOf(g.get("username")).trim();
            else if (g.containsKey("wxid")) rid = String.valueOf(g.get("wxid")).trim();
            else if (g.containsKey("id")) rid = String.valueOf(g.get("id")).trim();
            
            if (g.containsKey("name")) name = String.valueOf(g.get("name")).trim();
            else if (g.containsKey("nickname")) name = String.valueOf(g.get("nickname")).trim();
            else if (g.containsKey("title")) name = String.valueOf(g.get("title")).trim();
            
            if (rid.length() == 0) continue;
            if (name.length() == 0) name = rid;
            
            names.add(name); ids.add(rid);
        }
        
        if (ids.isEmpty()) { toast("无法读取群聊列表"); return; }
        
        ListView lv = new ListView(a);
        lv.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        lv.setAdapter(new ArrayAdapter(a, android.R.layout.simple_list_item_multiple_choice, names));
        for (int i = 0; i < ids.size(); i++) {
            if (selectedGroupList.contains(ids.get(i))) lv.setItemChecked(i, true);
        }
        new AlertDialog.Builder(a).setTitle("选群聊").setView(lv)
            .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                public void onClick(DialogInterface d, int w) {
                    selectedGroupList.clear();
                    for (int i = 0; i < ids.size(); i++)
                        if (lv.isItemChecked(i)) selectedGroupList.add(ids.get(i));
                    toast("已选" + selectedGroupList.size() + "群");
                }
            })
            .setNegativeButton("取消", null)
            .show();
    } catch (Throwable e) { toast("失败: " + e.getMessage()); }
}

void doSend() {
    final List all = new ArrayList();
    all.addAll(selectedPrivateList);
    all.addAll(selectedGroupList);
    new Thread(new Runnable() {
        public void run() {
            int ok = 0, fail = 0;
            for (int i = 0; i < all.size(); i++) {
                String t = all.get(i).toString();
                try {
                    if (sendContent.length() > 0) sendText(t, sendContent);
                    for (int j = 0; j < imagePathList.size(); j++) {
                        try { sendImage(t, imagePathList.get(j).toString()); Thread.sleep(500); } catch (Throwable e) {}
                    }
                    for (int j = 0; j < videoPathList.size(); j++) {
                        try { sendVideo(t, videoPathList.get(j).toString()); Thread.sleep(500); } catch (Throwable e) {}
                    }
                    ok++; Thread.sleep(1500);
                } catch (Throwable e) { fail++; }
            }
            final int fok = ok, ffail = fail;
            Activity a = getTopActivity();
            if (a != null) a.runOnUiThread(new Runnable() {
                public void run() { toast("完成！成功:" + fok + " 失败:" + ffail); }
            });
        }
    }).start();
    toast("开始发送，共" + all.size() + "条");
}

void onLoad() {}
void onUnload() {}
void onMsg(Object msg) {}
boolean onClickSendBtn(String text) { return false; }
void onHandleMsg(Object bean) {}`,fh=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"})),ph=`# 群发助手 - 
- 长按任意消息菜单调出ui
- 建议新建文件夹把这次要发图片视频拉过去
- mt复制这个路径到ui发送就是全部发了

---

## 功能

- 多选私聊联系人
- 多选群聊
- 文本消息群发
- 图片群发（自动扫描文件夹）
- 视频群发（自动扫描文件夹）
- 自动发送间隔，降低风控风险

---

### 界面说明

- 选私聊 - 勾选要发送的私聊联系人
- 选群聊 - 勾选要发送的群聊
- 文本内容 - 输入要群发的文字
- 图片路径 - 输入图片文件或文件夹路径
- 视频路径 - 输入视频文件或文件夹路径
- 发送 - 开始群发

### 路径格式

| 输入 | 效果 |
|------|------|
| \`/storage/emulated/0/Pictures/\` | 扫描整个文件夹，自动添加所有图片/视频 |
| \`/storage/emulated/0/DCIM/Camera/a.jpg\` | 添加单个文件 |
| \`/path/a.jpg,/path/b.jpg\` | 逗号分隔批量添加多个文件 |

图片支持格式：\`jpg\` \`jpeg\` \`png\` \`webp\` \`gif\`
视频支持格式：\`mp4\` \`avi\` \`mov\` \`mkv\` \`3gp\`

---

## 发送逻辑

- 先发文本，再依次发送图片，最后依次发送视频
- 每个目标之间间隔 1.5 秒
- 每个媒体文件之间间隔 0.5 秒
- 发送完成后显示成功/失败统计

---

## 免责声明

- 本脚本免费分享，用爱发电
- 请勿用于骚扰、诈骗等违法行为
- 使用者自行承担因群发导致的账号风险
- 不提供一对一技术支持

---

## 常见问题

**Q: 发 \`/群发\` 没反应？**

- 确认脚本文件已放入正确目录
- 确认文件名是 \`Main.java\`
- 重启插件或微信后重试
- 检查 log 是否有报错

**Q: 图片/视频发送失败？**

- 检查文件路径是否正确
- 确认文件格式是否支持
- 确认文件未被其他应用占用

**Q: 发送太慢？**

- 间隔是为了降低风控风险
- 不建议改太快，容易被微信限频
`;function ac(c){return c.replace(/\\u([0-9a-fA-F]{4})/g,(_,l)=>String.fromCharCode(parseInt(l,16)))}function lc(c,_){const l={},x=c.split(`
`);for(const m of x){const u=m.trim();if(u&&!u.startsWith("#")){const d=u.indexOf("=");if(d!==-1){const s=u.substring(0,d).trim(),g=ac(u.substring(d+1).trim());l[s]=g}}}return{id:_,name:l.name||_,author:l.author||"未知作者",version:l.version||"1.0.0",description:l.desc||"",tags:l.tags?l.tags.split(",").map(m=>m.trim()).filter(Boolean):[],folder:_}}async function gh(){const c=Object.assign({"/main/plugins/FkAi回复/info.prop":ho,"/main/plugins/MCP服务器插件/info.prop":mo,"/main/plugins/QQ点歌/info.prop":wo,"/main/plugins/关键提醒/info.prop":yo,"/main/plugins/复读机与默认回复/info.prop":vo,"/main/plugins/快捷操作/info.prop":So,"/main/plugins/群发助手/info.prop":ko}),_=[];for(const l in c){const x=l.split("/")[3];try{const m=c[l];_.push(lc(m,x))}catch(m){console.error(`Failed to load plugin ${x}`,m)}}return _}async function hh(c){const _=Object.assign({"/main/plugins/FkAi回复/info.prop":ho,"/main/plugins/MCP服务器插件/info.prop":mo,"/main/plugins/QQ点歌/info.prop":wo,"/main/plugins/关键提醒/info.prop":yo,"/main/plugins/复读机与默认回复/info.prop":vo,"/main/plugins/快捷操作/info.prop":So,"/main/plugins/群发助手/info.prop":ko}),l=Object.assign({"/main/plugins/FkAi回复/main.java":()=>Ut(()=>Promise.resolve().then(()=>Qg),void 0).then(k=>k.default),"/main/plugins/MCP服务器插件/main.java":()=>Ut(()=>Promise.resolve().then(()=>eh),void 0).then(k=>k.default),"/main/plugins/QQ点歌/main.java":()=>Ut(()=>Promise.resolve().then(()=>ah),void 0).then(k=>k.default),"/main/plugins/关键提醒/main.java":()=>Ut(()=>Promise.resolve().then(()=>lh),void 0).then(k=>k.default),"/main/plugins/复读机与默认回复/main.java":()=>Ut(()=>Promise.resolve().then(()=>sh),void 0).then(k=>k.default),"/main/plugins/快捷操作/main.java":()=>Ut(()=>Promise.resolve().then(()=>ch),void 0).then(k=>k.default),"/main/plugins/群发助手/main.java":()=>Ut(()=>Promise.resolve().then(()=>fh),void 0).then(k=>k.default)}),x=Object.assign({"/main/plugins/FkAi回复/info.prop":ho,"/main/plugins/FkAi回复/main.java":Yd,"/main/plugins/FkAi回复/readme.md":Zg,"/main/plugins/MCP服务器插件/README.md":Yg,"/main/plugins/MCP服务器插件/fkw_mcp.java":Xg,"/main/plugins/MCP服务器插件/info.prop":mo,"/main/plugins/MCP服务器插件/main.java":Xd,"/main/plugins/MCP服务器插件/mcp-config.json":nh,"/main/plugins/QQ点歌/README.md":th,"/main/plugins/QQ点歌/api/http.java":rh,"/main/plugins/QQ点歌/api/music.java":ih,"/main/plugins/QQ点歌/info.prop":wo,"/main/plugins/QQ点歌/main.java":ec,"/main/plugins/关键提醒/info.prop":yo,"/main/plugins/关键提醒/main.java":nc,"/main/plugins/关键提醒/readme.md":oh,"/main/plugins/复读机与默认回复/info.prop":vo,"/main/plugins/复读机与默认回复/main.java":tc,"/main/plugins/复读机与默认回复/readme.md":uh,"/main/plugins/快捷操作/icon/kick.png":dh,"/main/plugins/快捷操作/info.prop":So,"/main/plugins/快捷操作/main.java":rc,"/main/plugins/群发助手/info.prop":ko,"/main/plugins/群发助手/main.java":ic,"/main/plugins/群发助手/readme.md":ph}),m=`/main/plugins/${c}/info.prop`,u=`/main/plugins/${c}/main.java`;if(!_[m]||!l[u])throw new Error("获取插件详情失败：文件不存在");const d=_[m],s=ac(d),g=await l[u](),y=lc(d,c),L={},S=`/main/plugins/${c}/`;for(const k in x)if(k.startsWith(S)){const w=k.substring(S.length);L[w]=w==="info.prop"?s:x[k]}return{...y,mainJava:g,infoProp:s,pluginFiles:L}}const oc=Jg((c,_)=>({plugins:[],currentPlugin:null,isLoading:!1,error:null,fetchPlugins:async()=>{c({isLoading:!0,error:null});try{const l=await gh();c({plugins:l,isLoading:!1})}catch(l){c({isLoading:!1,error:l instanceof Error?l.message:"获取插件列表失败"})}},fetchPluginDetail:async l=>{c({isLoading:!0,error:null});try{const x=await hh(l);c({currentPlugin:x,isLoading:!1})}catch(x){c({currentPlugin:null,isLoading:!1,error:x instanceof Error?x.message:"获取插件详情失败"})}},clearError:()=>c({error:null}),clearCurrentPlugin:()=>c({currentPlugin:null})}));function sc({size:c="md",text:_}){const l={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"};return re.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[re.jsx($d,{className:`${l[c]} animate-spin text-blue-600`}),_&&re.jsx("p",{className:"text-sm text-gray-500",children:_})]})}const mh={search:Qd,error:Lg,package:Lo,empty:Kd};function xo({icon:c="search",title:_,description:l,action:x}){const m=mh[c];return re.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center",children:[re.jsx("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100",children:re.jsx(m,{className:"h-8 w-8 text-gray-400"})}),re.jsx("h3",{className:"mb-2 text-lg font-semibold text-gray-900",children:_}),l&&re.jsx("p",{className:"mb-6 max-w-sm text-sm text-gray-500",children:l}),x]})}function wh({plugin:c}){return re.jsxs(ma,{to:`/plugin/${c.folder}`,className:"block rounded-md border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all",children:[re.jsxs("div",{className:"flex items-start justify-between mb-3",children:[re.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:c.name.charAt(0)}),re.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",c.version]})]}),re.jsx("h3",{className:"font-semibold text-gray-900 mb-1 truncate",children:c.name}),re.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-3",children:c.description||"暂无描述"}),re.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[re.jsx(Zd,{className:"h-3.5 w-3.5"}),re.jsx("span",{children:c.author})]})]})}function yh(){const{plugins:c,isLoading:_,error:l,fetchPlugins:x}=oc(),[m,u]=he.useState("");he.useEffect(()=>{x()},[x]);const d=c.filter(s=>m===""||s.name.toLowerCase().includes(m.toLowerCase())||s.description.toLowerCase().includes(m.toLowerCase())||s.author.toLowerCase().includes(m.toLowerCase()));return re.jsxs("div",{className:"flex flex-col h-screen bg-white",children:[re.jsx("div",{className:"flex-shrink-0 border-b border-gray-200",children:re.jsxs("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:[re.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-1",children:"插件仓库"}),re.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"查找并下载适合的插件，提升使用体验"}),re.jsx("div",{className:"max-w-md",children:re.jsxs("div",{className:"relative",children:[re.jsx(Qd,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),re.jsx("input",{type:"text",value:m,onChange:s=>u(s.target.value),placeholder:"搜索插件...",className:"w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"})]})})]})}),re.jsx("div",{className:"flex-1 overflow-y-auto min-h-0",children:re.jsx("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:_?re.jsx("div",{className:"flex h-48 items-center justify-center",children:re.jsx(sc,{size:"md",text:"加载插件中..."})}):l?re.jsx(xo,{icon:"error",title:"加载失败",description:l,action:re.jsx("button",{onClick:()=>x(),className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"重试"})}):d.length===0?re.jsx(xo,{icon:"package",title:c.length===0?"暂无插件":"未找到匹配的插件",description:c.length===0?"欢迎提交你的第一个插件！":"尝试调整搜索条件"}):re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[re.jsx(Lo,{className:"h-4 w-4 text-gray-500"}),re.jsxs("span",{className:"text-sm text-gray-500",children:["共 ",re.jsx("span",{className:"font-semibold text-gray-900",children:d.length})," 个插件"]})]}),re.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-5",children:d.map(s=>re.jsx(wh,{plugin:s},s.id))})]})})})]})}function pa(c){throw new Error('Could not dynamically require "'+c+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var uo={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Ad;function vh(){return Ad||(Ad=1,(function(c,_){(function(l){c.exports=l()})(function(){return(function l(x,m,u){function d(y,L){if(!m[y]){if(!x[y]){var S=typeof pa=="function"&&pa;if(!L&&S)return S(y,!0);if(s)return s(y,!0);var k=new Error("Cannot find module '"+y+"'");throw k.code="MODULE_NOT_FOUND",k}var w=m[y]={exports:{}};x[y][0].call(w.exports,function(I){var h=x[y][1][I];return d(h||I)},w,w.exports,l,x,m,u)}return m[y].exports}for(var s=typeof pa=="function"&&pa,g=0;g<u.length;g++)d(u[g]);return d})({1:[function(l,x,m){var u=l("./utils"),d=l("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";m.encode=function(g){for(var y,L,S,k,w,I,h,v=[],b=0,M=g.length,N=M,B=u.getTypeOf(g)!=="string";b<g.length;)N=M-b,S=B?(y=g[b++],L=b<M?g[b++]:0,b<M?g[b++]:0):(y=g.charCodeAt(b++),L=b<M?g.charCodeAt(b++):0,b<M?g.charCodeAt(b++):0),k=y>>2,w=(3&y)<<4|L>>4,I=1<N?(15&L)<<2|S>>6:64,h=2<N?63&S:64,v.push(s.charAt(k)+s.charAt(w)+s.charAt(I)+s.charAt(h));return v.join("")},m.decode=function(g){var y,L,S,k,w,I,h=0,v=0,b="data:";if(g.substr(0,b.length)===b)throw new Error("Invalid base64 input, it looks like a data url.");var M,N=3*(g=g.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(g.charAt(g.length-1)===s.charAt(64)&&N--,g.charAt(g.length-2)===s.charAt(64)&&N--,N%1!=0)throw new Error("Invalid base64 input, bad content length.");for(M=d.uint8array?new Uint8Array(0|N):new Array(0|N);h<g.length;)y=s.indexOf(g.charAt(h++))<<2|(k=s.indexOf(g.charAt(h++)))>>4,L=(15&k)<<4|(w=s.indexOf(g.charAt(h++)))>>2,S=(3&w)<<6|(I=s.indexOf(g.charAt(h++))),M[v++]=y,w!==64&&(M[v++]=L),I!==64&&(M[v++]=S);return M}},{"./support":30,"./utils":32}],2:[function(l,x,m){var u=l("./external"),d=l("./stream/DataWorker"),s=l("./stream/Crc32Probe"),g=l("./stream/DataLengthProbe");function y(L,S,k,w,I){this.compressedSize=L,this.uncompressedSize=S,this.crc32=k,this.compression=w,this.compressedContent=I}y.prototype={getContentWorker:function(){var L=new d(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),S=this;return L.on("end",function(){if(this.streamInfo.data_length!==S.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),L},getCompressedWorker:function(){return new d(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},y.createWorkerFrom=function(L,S,k){return L.pipe(new s).pipe(new g("uncompressedSize")).pipe(S.compressWorker(k)).pipe(new g("compressedSize")).withStreamInfo("compression",S)},x.exports=y},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,x,m){var u=l("./stream/GenericWorker");m.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},m.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,x,m){var u=l("./utils"),d=(function(){for(var s,g=[],y=0;y<256;y++){s=y;for(var L=0;L<8;L++)s=1&s?3988292384^s>>>1:s>>>1;g[y]=s}return g})();x.exports=function(s,g){return s!==void 0&&s.length?u.getTypeOf(s)!=="string"?(function(y,L,S,k){var w=d,I=k+S;y^=-1;for(var h=k;h<I;h++)y=y>>>8^w[255&(y^L[h])];return-1^y})(0|g,s,s.length,0):(function(y,L,S,k){var w=d,I=k+S;y^=-1;for(var h=k;h<I;h++)y=y>>>8^w[255&(y^L.charCodeAt(h))];return-1^y})(0|g,s,s.length,0):0}},{"./utils":32}],5:[function(l,x,m){m.base64=!1,m.binary=!1,m.dir=!1,m.createFolders=!0,m.date=null,m.compression=null,m.compressionOptions=null,m.comment=null,m.unixPermissions=null,m.dosPermissions=null},{}],6:[function(l,x,m){var u=null;u=typeof Promise<"u"?Promise:l("lie"),x.exports={Promise:u}},{lie:37}],7:[function(l,x,m){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",d=l("pako"),s=l("./utils"),g=l("./stream/GenericWorker"),y=u?"uint8array":"array";function L(S,k){g.call(this,"FlateWorker/"+S),this._pako=null,this._pakoAction=S,this._pakoOptions=k,this.meta={}}m.magic="\b\0",s.inherits(L,g),L.prototype.processChunk=function(S){this.meta=S.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(y,S.data),!1)},L.prototype.flush=function(){g.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},L.prototype.cleanUp=function(){g.prototype.cleanUp.call(this),this._pako=null},L.prototype._createPako=function(){this._pako=new d[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var S=this;this._pako.onData=function(k){S.push({data:k,meta:S.meta})}},m.compressWorker=function(S){return new L("Deflate",S)},m.uncompressWorker=function(){return new L("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,x,m){function u(w,I){var h,v="";for(h=0;h<I;h++)v+=String.fromCharCode(255&w),w>>>=8;return v}function d(w,I,h,v,b,M){var N,B,F=w.file,$=w.compression,q=M!==y.utf8encode,le=s.transformTo("string",M(F.name)),J=s.transformTo("string",y.utf8encode(F.name)),de=F.comment,be=s.transformTo("string",M(de)),P=s.transformTo("string",y.utf8encode(de)),K=J.length!==F.name.length,p=P.length!==de.length,Q="",Te="",Y="",ee=F.dir,H=F.date,X={crc32:0,compressedSize:0,uncompressedSize:0};I&&!h||(X.crc32=w.crc32,X.compressedSize=w.compressedSize,X.uncompressedSize=w.uncompressedSize);var T=0;I&&(T|=8),q||!K&&!p||(T|=2048);var A=0,ce=0;ee&&(A|=16),b==="UNIX"?(ce=798,A|=(function(ne,Ce){var Oe=ne;return ne||(Oe=Ce?16893:33204),(65535&Oe)<<16})(F.unixPermissions,ee)):(ce=20,A|=(function(ne){return 63&(ne||0)})(F.dosPermissions)),N=H.getUTCHours(),N<<=6,N|=H.getUTCMinutes(),N<<=5,N|=H.getUTCSeconds()/2,B=H.getUTCFullYear()-1980,B<<=4,B|=H.getUTCMonth()+1,B<<=5,B|=H.getUTCDate(),K&&(Te=u(1,1)+u(L(le),4)+J,Q+="up"+u(Te.length,2)+Te),p&&(Y=u(1,1)+u(L(be),4)+P,Q+="uc"+u(Y.length,2)+Y);var ae="";return ae+=`
\0`,ae+=u(T,2),ae+=$.magic,ae+=u(N,2),ae+=u(B,2),ae+=u(X.crc32,4),ae+=u(X.compressedSize,4),ae+=u(X.uncompressedSize,4),ae+=u(le.length,2),ae+=u(Q.length,2),{fileRecord:S.LOCAL_FILE_HEADER+ae+le+Q,dirRecord:S.CENTRAL_FILE_HEADER+u(ce,2)+ae+u(be.length,2)+"\0\0\0\0"+u(A,4)+u(v,4)+le+Q+be}}var s=l("../utils"),g=l("../stream/GenericWorker"),y=l("../utf8"),L=l("../crc32"),S=l("../signature");function k(w,I,h,v){g.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=I,this.zipPlatform=h,this.encodeFileName=v,this.streamFiles=w,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(k,g),k.prototype.push=function(w){var I=w.meta.percent||0,h=this.entriesCount,v=this._sources.length;this.accumulate?this.contentBuffer.push(w):(this.bytesWritten+=w.data.length,g.prototype.push.call(this,{data:w.data,meta:{currentFile:this.currentFile,percent:h?(I+100*(h-v-1))/h:100}}))},k.prototype.openedSource=function(w){this.currentSourceOffset=this.bytesWritten,this.currentFile=w.file.name;var I=this.streamFiles&&!w.file.dir;if(I){var h=d(w,I,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},k.prototype.closedSource=function(w){this.accumulate=!1;var I=this.streamFiles&&!w.file.dir,h=d(w,I,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),I)this.push({data:(function(v){return S.DATA_DESCRIPTOR+u(v.crc32,4)+u(v.compressedSize,4)+u(v.uncompressedSize,4)})(w),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},k.prototype.flush=function(){for(var w=this.bytesWritten,I=0;I<this.dirRecords.length;I++)this.push({data:this.dirRecords[I],meta:{percent:100}});var h=this.bytesWritten-w,v=(function(b,M,N,B,F){var $=s.transformTo("string",F(B));return S.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(b,2)+u(b,2)+u(M,4)+u(N,4)+u($.length,2)+$})(this.dirRecords.length,h,w,this.zipComment,this.encodeFileName);this.push({data:v,meta:{percent:100}})},k.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},k.prototype.registerPrevious=function(w){this._sources.push(w);var I=this;return w.on("data",function(h){I.processChunk(h)}),w.on("end",function(){I.closedSource(I.previous.streamInfo),I._sources.length?I.prepareNextSource():I.end()}),w.on("error",function(h){I.error(h)}),this},k.prototype.resume=function(){return!!g.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},k.prototype.error=function(w){var I=this._sources;if(!g.prototype.error.call(this,w))return!1;for(var h=0;h<I.length;h++)try{I[h].error(w)}catch{}return!0},k.prototype.lock=function(){g.prototype.lock.call(this);for(var w=this._sources,I=0;I<w.length;I++)w[I].lock()},x.exports=k},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,x,m){var u=l("../compressions"),d=l("./ZipFileWorker");m.generateWorker=function(s,g,y){var L=new d(g.streamFiles,y,g.platform,g.encodeFileName),S=0;try{s.forEach(function(k,w){S++;var I=(function(M,N){var B=M||N,F=u[B];if(!F)throw new Error(B+" is not a valid compression method !");return F})(w.options.compression,g.compression),h=w.options.compressionOptions||g.compressionOptions||{},v=w.dir,b=w.date;w._compressWorker(I,h).withStreamInfo("file",{name:k,dir:v,date:b,comment:w.comment||"",unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions}).pipe(L)}),L.entriesCount=S}catch(k){L.error(k)}return L}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,x,m){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var d=new u;for(var s in this)typeof this[s]!="function"&&(d[s]=this[s]);return d}}(u.prototype=l("./object")).loadAsync=l("./load"),u.support=l("./support"),u.defaults=l("./defaults"),u.version="3.10.1",u.loadAsync=function(d,s){return new u().loadAsync(d,s)},u.external=l("./external"),x.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,x,m){var u=l("./utils"),d=l("./external"),s=l("./utf8"),g=l("./zipEntries"),y=l("./stream/Crc32Probe"),L=l("./nodejsUtils");function S(k){return new d.Promise(function(w,I){var h=k.decompressed.getContentWorker().pipe(new y);h.on("error",function(v){I(v)}).on("end",function(){h.streamInfo.crc32!==k.decompressed.crc32?I(new Error("Corrupted zip : CRC32 mismatch")):w()}).resume()})}x.exports=function(k,w){var I=this;return w=u.extend(w||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),L.isNode&&L.isStream(k)?d.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",k,!0,w.optimizedBinaryString,w.base64).then(function(h){var v=new g(w);return v.load(h),v}).then(function(h){var v=[d.Promise.resolve(h)],b=h.files;if(w.checkCRC32)for(var M=0;M<b.length;M++)v.push(S(b[M]));return d.Promise.all(v)}).then(function(h){for(var v=h.shift(),b=v.files,M=0;M<b.length;M++){var N=b[M],B=N.fileNameStr,F=u.resolve(N.fileNameStr);I.file(F,N.decompressed,{binary:!0,optimizedBinaryString:!0,date:N.date,dir:N.dir,comment:N.fileCommentStr.length?N.fileCommentStr:null,unixPermissions:N.unixPermissions,dosPermissions:N.dosPermissions,createFolders:w.createFolders}),N.dir||(I.file(F).unsafeOriginalName=B)}return v.zipComment.length&&(I.comment=v.zipComment),I})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,x,m){var u=l("../utils"),d=l("../stream/GenericWorker");function s(g,y){d.call(this,"Nodejs stream input adapter for "+g),this._upstreamEnded=!1,this._bindStream(y)}u.inherits(s,d),s.prototype._bindStream=function(g){var y=this;(this._stream=g).pause(),g.on("data",function(L){y.push({data:L,meta:{percent:0}})}).on("error",function(L){y.isPaused?this.generatedError=L:y.error(L)}).on("end",function(){y.isPaused?y._upstreamEnded=!0:y.end()})},s.prototype.pause=function(){return!!d.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},x.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,x,m){var u=l("readable-stream").Readable;function d(s,g,y){u.call(this,g),this._helper=s;var L=this;s.on("data",function(S,k){L.push(S)||L._helper.pause(),y&&y(k)}).on("error",function(S){L.emit("error",S)}).on("end",function(){L.push(null)})}l("../utils").inherits(d,u),d.prototype._read=function(){this._helper.resume()},x.exports=d},{"../utils":32,"readable-stream":16}],14:[function(l,x,m){x.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,d){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,d);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,d)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var d=new Buffer(u);return d.fill(0),d},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(l,x,m){function u(F,$,q){var le,J=s.getTypeOf($),de=s.extend(q||{},L);de.date=de.date||new Date,de.compression!==null&&(de.compression=de.compression.toUpperCase()),typeof de.unixPermissions=="string"&&(de.unixPermissions=parseInt(de.unixPermissions,8)),de.unixPermissions&&16384&de.unixPermissions&&(de.dir=!0),de.dosPermissions&&16&de.dosPermissions&&(de.dir=!0),de.dir&&(F=b(F)),de.createFolders&&(le=v(F))&&M.call(this,le,!0);var be=J==="string"&&de.binary===!1&&de.base64===!1;q&&q.binary!==void 0||(de.binary=!be),($ instanceof S&&$.uncompressedSize===0||de.dir||!$||$.length===0)&&(de.base64=!1,de.binary=!0,$="",de.compression="STORE",J="string");var P=null;P=$ instanceof S||$ instanceof g?$:I.isNode&&I.isStream($)?new h(F,$):s.prepareContent(F,$,de.binary,de.optimizedBinaryString,de.base64);var K=new k(F,P,de);this.files[F]=K}var d=l("./utf8"),s=l("./utils"),g=l("./stream/GenericWorker"),y=l("./stream/StreamHelper"),L=l("./defaults"),S=l("./compressedObject"),k=l("./zipObject"),w=l("./generate"),I=l("./nodejsUtils"),h=l("./nodejs/NodejsStreamInputAdapter"),v=function(F){F.slice(-1)==="/"&&(F=F.substring(0,F.length-1));var $=F.lastIndexOf("/");return 0<$?F.substring(0,$):""},b=function(F){return F.slice(-1)!=="/"&&(F+="/"),F},M=function(F,$){return $=$!==void 0?$:L.createFolders,F=b(F),this.files[F]||u.call(this,F,null,{dir:!0,createFolders:$}),this.files[F]};function N(F){return Object.prototype.toString.call(F)==="[object RegExp]"}var B={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(F){var $,q,le;for($ in this.files)le=this.files[$],(q=$.slice(this.root.length,$.length))&&$.slice(0,this.root.length)===this.root&&F(q,le)},filter:function(F){var $=[];return this.forEach(function(q,le){F(q,le)&&$.push(le)}),$},file:function(F,$,q){if(arguments.length!==1)return F=this.root+F,u.call(this,F,$,q),this;if(N(F)){var le=F;return this.filter(function(de,be){return!be.dir&&le.test(de)})}var J=this.files[this.root+F];return J&&!J.dir?J:null},folder:function(F){if(!F)return this;if(N(F))return this.filter(function(J,de){return de.dir&&F.test(J)});var $=this.root+F,q=M.call(this,$),le=this.clone();return le.root=q.name,le},remove:function(F){F=this.root+F;var $=this.files[F];if($||(F.slice(-1)!=="/"&&(F+="/"),$=this.files[F]),$&&!$.dir)delete this.files[F];else for(var q=this.filter(function(J,de){return de.name.slice(0,F.length)===F}),le=0;le<q.length;le++)delete this.files[q[le].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(F){var $,q={};try{if((q=s.extend(F||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:d.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");s.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var le=q.comment||this.comment||"";$=w.generateWorker(this,q,le)}catch(J){($=new g("error")).error(J)}return new y($,q.type||"string",q.mimeType)},generateAsync:function(F,$){return this.generateInternalStream(F).accumulate($)},generateNodeStream:function(F,$){return(F=F||{}).type||(F.type="nodebuffer"),this.generateInternalStream(F).toNodejsStream($)}};x.exports=B},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,x,m){x.exports=l("stream")},{stream:void 0}],17:[function(l,x,m){var u=l("./DataReader");function d(s){u.call(this,s);for(var g=0;g<this.data.length;g++)s[g]=255&s[g]}l("../utils").inherits(d,u),d.prototype.byteAt=function(s){return this.data[this.zero+s]},d.prototype.lastIndexOfSignature=function(s){for(var g=s.charCodeAt(0),y=s.charCodeAt(1),L=s.charCodeAt(2),S=s.charCodeAt(3),k=this.length-4;0<=k;--k)if(this.data[k]===g&&this.data[k+1]===y&&this.data[k+2]===L&&this.data[k+3]===S)return k-this.zero;return-1},d.prototype.readAndCheckSignature=function(s){var g=s.charCodeAt(0),y=s.charCodeAt(1),L=s.charCodeAt(2),S=s.charCodeAt(3),k=this.readData(4);return g===k[0]&&y===k[1]&&L===k[2]&&S===k[3]},d.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var g=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,g},x.exports=d},{"../utils":32,"./DataReader":18}],18:[function(l,x,m){var u=l("../utils");function d(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}d.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var g,y=0;for(this.checkOffset(s),g=this.index+s-1;g>=this.index;g--)y=(y<<8)+this.byteAt(g);return this.index+=s,y},readString:function(s){return u.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},x.exports=d},{"../utils":32}],19:[function(l,x,m){var u=l("./Uint8ArrayReader");function d(s){u.call(this,s)}l("../utils").inherits(d,u),d.prototype.readData=function(s){this.checkOffset(s);var g=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,g},x.exports=d},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,x,m){var u=l("./DataReader");function d(s){u.call(this,s)}l("../utils").inherits(d,u),d.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},d.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},d.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},d.prototype.readData=function(s){this.checkOffset(s);var g=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,g},x.exports=d},{"../utils":32,"./DataReader":18}],21:[function(l,x,m){var u=l("./ArrayReader");function d(s){u.call(this,s)}l("../utils").inherits(d,u),d.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var g=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,g},x.exports=d},{"../utils":32,"./ArrayReader":17}],22:[function(l,x,m){var u=l("../utils"),d=l("../support"),s=l("./ArrayReader"),g=l("./StringReader"),y=l("./NodeBufferReader"),L=l("./Uint8ArrayReader");x.exports=function(S){var k=u.getTypeOf(S);return u.checkSupport(k),k!=="string"||d.uint8array?k==="nodebuffer"?new y(S):d.uint8array?new L(u.transformTo("uint8array",S)):new s(u.transformTo("array",S)):new g(S)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,x,m){m.LOCAL_FILE_HEADER="PK",m.CENTRAL_FILE_HEADER="PK",m.CENTRAL_DIRECTORY_END="PK",m.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",m.ZIP64_CENTRAL_DIRECTORY_END="PK",m.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,x,m){var u=l("./GenericWorker"),d=l("../utils");function s(g){u.call(this,"ConvertWorker to "+g),this.destType=g}d.inherits(s,u),s.prototype.processChunk=function(g){this.push({data:d.transformTo(this.destType,g.data),meta:g.meta})},x.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(l,x,m){var u=l("./GenericWorker"),d=l("../crc32");function s(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(s,u),s.prototype.processChunk=function(g){this.streamInfo.crc32=d(g.data,this.streamInfo.crc32||0),this.push(g)},x.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,x,m){var u=l("../utils"),d=l("./GenericWorker");function s(g){d.call(this,"DataLengthProbe for "+g),this.propName=g,this.withStreamInfo(g,0)}u.inherits(s,d),s.prototype.processChunk=function(g){if(g){var y=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=y+g.data.length}d.prototype.processChunk.call(this,g)},x.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(l,x,m){var u=l("../utils"),d=l("./GenericWorker");function s(g){d.call(this,"DataWorker");var y=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,g.then(function(L){y.dataIsReady=!0,y.data=L,y.max=L&&L.length||0,y.type=u.getTypeOf(L),y.isPaused||y._tickAndRepeat()},function(L){y.error(L)})}u.inherits(s,d),s.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var g=null,y=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":g=this.data.substring(this.index,y);break;case"uint8array":g=this.data.subarray(this.index,y);break;case"array":case"nodebuffer":g=this.data.slice(this.index,y)}return this.index=y,this.push({data:g,meta:{percent:this.max?this.index/this.max*100:0}})},x.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(l,x,m){function u(d){this.name=d||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(d){this.emit("data",d)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(d){this.emit("error",d)}return!0},error:function(d){return!this.isFinished&&(this.isPaused?this.generatedError=d:(this.isFinished=!0,this.emit("error",d),this.previous&&this.previous.error(d),this.cleanUp()),!0)},on:function(d,s){return this._listeners[d].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(d,s){if(this._listeners[d])for(var g=0;g<this._listeners[d].length;g++)this._listeners[d][g].call(this,s)},pipe:function(d){return d.registerPrevious(this)},registerPrevious:function(d){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=d.streamInfo,this.mergeStreamInfo(),this.previous=d;var s=this;return d.on("data",function(g){s.processChunk(g)}),d.on("end",function(){s.end()}),d.on("error",function(g){s.error(g)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var d=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),d=!0),this.previous&&this.previous.resume(),!d},flush:function(){},processChunk:function(d){this.push(d)},withStreamInfo:function(d,s){return this.extraStreamInfo[d]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var d in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,d)&&(this.streamInfo[d]=this.extraStreamInfo[d])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var d="Worker "+this.name;return this.previous?this.previous+" -> "+d:d}},x.exports=u},{}],29:[function(l,x,m){var u=l("../utils"),d=l("./ConvertWorker"),s=l("./GenericWorker"),g=l("../base64"),y=l("../support"),L=l("../external"),S=null;if(y.nodestream)try{S=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function k(I,h){return new L.Promise(function(v,b){var M=[],N=I._internalType,B=I._outputType,F=I._mimeType;I.on("data",function($,q){M.push($),h&&h(q)}).on("error",function($){M=[],b($)}).on("end",function(){try{var $=(function(q,le,J){switch(q){case"blob":return u.newBlob(u.transformTo("arraybuffer",le),J);case"base64":return g.encode(le);default:return u.transformTo(q,le)}})(B,(function(q,le){var J,de=0,be=null,P=0;for(J=0;J<le.length;J++)P+=le[J].length;switch(q){case"string":return le.join("");case"array":return Array.prototype.concat.apply([],le);case"uint8array":for(be=new Uint8Array(P),J=0;J<le.length;J++)be.set(le[J],de),de+=le[J].length;return be;case"nodebuffer":return Buffer.concat(le);default:throw new Error("concat : unsupported type '"+q+"'")}})(N,M),F);v($)}catch(q){b(q)}M=[]}).resume()})}function w(I,h,v){var b=h;switch(h){case"blob":case"arraybuffer":b="uint8array";break;case"base64":b="string"}try{this._internalType=b,this._outputType=h,this._mimeType=v,u.checkSupport(b),this._worker=I.pipe(new d(b)),I.lock()}catch(M){this._worker=new s("error"),this._worker.error(M)}}w.prototype={accumulate:function(I){return k(this,I)},on:function(I,h){var v=this;return I==="data"?this._worker.on(I,function(b){h.call(v,b.data,b.meta)}):this._worker.on(I,function(){u.delay(h,arguments,v)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(I){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new S(this,{objectMode:this._outputType!=="nodebuffer"},I)}},x.exports=w},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,x,m){if(m.base64=!0,m.array=!0,m.string=!0,m.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",m.nodebuffer=typeof Buffer<"u",m.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")m.blob=!1;else{var u=new ArrayBuffer(0);try{m.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);d.append(u),m.blob=d.getBlob("application/zip").size===0}catch{m.blob=!1}}}try{m.nodestream=!!l("readable-stream").Readable}catch{m.nodestream=!1}},{"readable-stream":16}],31:[function(l,x,m){for(var u=l("./utils"),d=l("./support"),s=l("./nodejsUtils"),g=l("./stream/GenericWorker"),y=new Array(256),L=0;L<256;L++)y[L]=252<=L?6:248<=L?5:240<=L?4:224<=L?3:192<=L?2:1;y[254]=y[254]=1;function S(){g.call(this,"utf-8 decode"),this.leftOver=null}function k(){g.call(this,"utf-8 encode")}m.utf8encode=function(w){return d.nodebuffer?s.newBufferFrom(w,"utf-8"):(function(I){var h,v,b,M,N,B=I.length,F=0;for(M=0;M<B;M++)(64512&(v=I.charCodeAt(M)))==55296&&M+1<B&&(64512&(b=I.charCodeAt(M+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),M++),F+=v<128?1:v<2048?2:v<65536?3:4;for(h=d.uint8array?new Uint8Array(F):new Array(F),M=N=0;N<F;M++)(64512&(v=I.charCodeAt(M)))==55296&&M+1<B&&(64512&(b=I.charCodeAt(M+1)))==56320&&(v=65536+(v-55296<<10)+(b-56320),M++),v<128?h[N++]=v:(v<2048?h[N++]=192|v>>>6:(v<65536?h[N++]=224|v>>>12:(h[N++]=240|v>>>18,h[N++]=128|v>>>12&63),h[N++]=128|v>>>6&63),h[N++]=128|63&v);return h})(w)},m.utf8decode=function(w){return d.nodebuffer?u.transformTo("nodebuffer",w).toString("utf-8"):(function(I){var h,v,b,M,N=I.length,B=new Array(2*N);for(h=v=0;h<N;)if((b=I[h++])<128)B[v++]=b;else if(4<(M=y[b]))B[v++]=65533,h+=M-1;else{for(b&=M===2?31:M===3?15:7;1<M&&h<N;)b=b<<6|63&I[h++],M--;1<M?B[v++]=65533:b<65536?B[v++]=b:(b-=65536,B[v++]=55296|b>>10&1023,B[v++]=56320|1023&b)}return B.length!==v&&(B.subarray?B=B.subarray(0,v):B.length=v),u.applyFromCharCode(B)})(w=u.transformTo(d.uint8array?"uint8array":"array",w))},u.inherits(S,g),S.prototype.processChunk=function(w){var I=u.transformTo(d.uint8array?"uint8array":"array",w.data);if(this.leftOver&&this.leftOver.length){if(d.uint8array){var h=I;(I=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),I.set(h,this.leftOver.length)}else I=this.leftOver.concat(I);this.leftOver=null}var v=(function(M,N){var B;for((N=N||M.length)>M.length&&(N=M.length),B=N-1;0<=B&&(192&M[B])==128;)B--;return B<0||B===0?N:B+y[M[B]]>N?B:N})(I),b=I;v!==I.length&&(d.uint8array?(b=I.subarray(0,v),this.leftOver=I.subarray(v,I.length)):(b=I.slice(0,v),this.leftOver=I.slice(v,I.length))),this.push({data:m.utf8decode(b),meta:w.meta})},S.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:m.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},m.Utf8DecodeWorker=S,u.inherits(k,g),k.prototype.processChunk=function(w){this.push({data:m.utf8encode(w.data),meta:w.meta})},m.Utf8EncodeWorker=k},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,x,m){var u=l("./support"),d=l("./base64"),s=l("./nodejsUtils"),g=l("./external");function y(h){return h}function L(h,v){for(var b=0;b<h.length;++b)v[b]=255&h.charCodeAt(b);return v}l("setimmediate"),m.newBlob=function(h,v){m.checkSupport("blob");try{return new Blob([h],{type:v})}catch{try{var b=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return b.append(h),b.getBlob(v)}catch{throw new Error("Bug : can't construct the Blob.")}}};var S={stringifyByChunk:function(h,v,b){var M=[],N=0,B=h.length;if(B<=b)return String.fromCharCode.apply(null,h);for(;N<B;)v==="array"||v==="nodebuffer"?M.push(String.fromCharCode.apply(null,h.slice(N,Math.min(N+b,B)))):M.push(String.fromCharCode.apply(null,h.subarray(N,Math.min(N+b,B)))),N+=b;return M.join("")},stringifyByChar:function(h){for(var v="",b=0;b<h.length;b++)v+=String.fromCharCode(h[b]);return v},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function k(h){var v=65536,b=m.getTypeOf(h),M=!0;if(b==="uint8array"?M=S.applyCanBeUsed.uint8array:b==="nodebuffer"&&(M=S.applyCanBeUsed.nodebuffer),M)for(;1<v;)try{return S.stringifyByChunk(h,b,v)}catch{v=Math.floor(v/2)}return S.stringifyByChar(h)}function w(h,v){for(var b=0;b<h.length;b++)v[b]=h[b];return v}m.applyFromCharCode=k;var I={};I.string={string:y,array:function(h){return L(h,new Array(h.length))},arraybuffer:function(h){return I.string.uint8array(h).buffer},uint8array:function(h){return L(h,new Uint8Array(h.length))},nodebuffer:function(h){return L(h,s.allocBuffer(h.length))}},I.array={string:k,array:y,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(h)}},I.arraybuffer={string:function(h){return k(new Uint8Array(h))},array:function(h){return w(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:y,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(new Uint8Array(h))}},I.uint8array={string:k,array:function(h){return w(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:y,nodebuffer:function(h){return s.newBufferFrom(h)}},I.nodebuffer={string:k,array:function(h){return w(h,new Array(h.length))},arraybuffer:function(h){return I.nodebuffer.uint8array(h).buffer},uint8array:function(h){return w(h,new Uint8Array(h.length))},nodebuffer:y},m.transformTo=function(h,v){if(v=v||"",!h)return v;m.checkSupport(h);var b=m.getTypeOf(v);return I[b][h](v)},m.resolve=function(h){for(var v=h.split("/"),b=[],M=0;M<v.length;M++){var N=v[M];N==="."||N===""&&M!==0&&M!==v.length-1||(N===".."?b.pop():b.push(N))}return b.join("/")},m.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":u.nodebuffer&&s.isBuffer(h)?"nodebuffer":u.uint8array&&h instanceof Uint8Array?"uint8array":u.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},m.checkSupport=function(h){if(!u[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},m.MAX_VALUE_16BITS=65535,m.MAX_VALUE_32BITS=-1,m.pretty=function(h){var v,b,M="";for(b=0;b<(h||"").length;b++)M+="\\x"+((v=h.charCodeAt(b))<16?"0":"")+v.toString(16).toUpperCase();return M},m.delay=function(h,v,b){setImmediate(function(){h.apply(b||null,v||[])})},m.inherits=function(h,v){function b(){}b.prototype=v.prototype,h.prototype=new b},m.extend=function(){var h,v,b={};for(h=0;h<arguments.length;h++)for(v in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],v)&&b[v]===void 0&&(b[v]=arguments[h][v]);return b},m.prepareContent=function(h,v,b,M,N){return g.Promise.resolve(v).then(function(B){return u.blob&&(B instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(B))!==-1)&&typeof FileReader<"u"?new g.Promise(function(F,$){var q=new FileReader;q.onload=function(le){F(le.target.result)},q.onerror=function(le){$(le.target.error)},q.readAsArrayBuffer(B)}):B}).then(function(B){var F=m.getTypeOf(B);return F?(F==="arraybuffer"?B=m.transformTo("uint8array",B):F==="string"&&(N?B=d.decode(B):b&&M!==!0&&(B=(function($){return L($,u.uint8array?new Uint8Array($.length):new Array($.length))})(B))),B):g.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,x,m){var u=l("./reader/readerFor"),d=l("./utils"),s=l("./signature"),g=l("./zipEntry"),y=l("./support");function L(S){this.files=[],this.loadOptions=S}L.prototype={checkSignature:function(S){if(!this.reader.readAndCheckSignature(S)){this.reader.index-=4;var k=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+d.pretty(k)+", expected "+d.pretty(S)+")")}},isSignature:function(S,k){var w=this.reader.index;this.reader.setIndex(S);var I=this.reader.readString(4)===k;return this.reader.setIndex(w),I},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var S=this.reader.readData(this.zipCommentLength),k=y.uint8array?"uint8array":"array",w=d.transformTo(k,S);this.zipComment=this.loadOptions.decodeFileName(w)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var S,k,w,I=this.zip64EndOfCentralSize-44;0<I;)S=this.reader.readInt(2),k=this.reader.readInt(4),w=this.reader.readData(k),this.zip64ExtensibleData[S]={id:S,length:k,value:w}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var S,k;for(S=0;S<this.files.length;S++)k=this.files[S],this.reader.setIndex(k.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),k.readLocalPart(this.reader),k.handleUTF8(),k.processAttributes()},readCentralDir:function(){var S;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(S=new g({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(S);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var S=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(S<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(S);var k=S;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===d.MAX_VALUE_16BITS||this.diskWithCentralDirStart===d.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===d.MAX_VALUE_16BITS||this.centralDirRecords===d.MAX_VALUE_16BITS||this.centralDirSize===d.MAX_VALUE_32BITS||this.centralDirOffset===d.MAX_VALUE_32BITS){if(this.zip64=!0,(S=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(S),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var w=this.centralDirOffset+this.centralDirSize;this.zip64&&(w+=20,w+=12+this.zip64EndOfCentralSize);var I=k-w;if(0<I)this.isSignature(k,s.CENTRAL_FILE_HEADER)||(this.reader.zero=I);else if(I<0)throw new Error("Corrupted zip: missing "+Math.abs(I)+" bytes.")},prepareReader:function(S){this.reader=u(S)},load:function(S){this.prepareReader(S),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},x.exports=L},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,x,m){var u=l("./reader/readerFor"),d=l("./utils"),s=l("./compressedObject"),g=l("./crc32"),y=l("./utf8"),L=l("./compressions"),S=l("./support");function k(w,I){this.options=w,this.loadOptions=I}k.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(w){var I,h;if(w.skip(22),this.fileNameLength=w.readInt(2),h=w.readInt(2),this.fileName=w.readData(this.fileNameLength),w.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((I=(function(v){for(var b in L)if(Object.prototype.hasOwnProperty.call(L,b)&&L[b].magic===v)return L[b];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+d.pretty(this.compressionMethod)+" unknown (inner file : "+d.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,I,w.readData(this.compressedSize))},readCentralPart:function(w){this.versionMadeBy=w.readInt(2),w.skip(2),this.bitFlag=w.readInt(2),this.compressionMethod=w.readString(2),this.date=w.readDate(),this.crc32=w.readInt(4),this.compressedSize=w.readInt(4),this.uncompressedSize=w.readInt(4);var I=w.readInt(2);if(this.extraFieldsLength=w.readInt(2),this.fileCommentLength=w.readInt(2),this.diskNumberStart=w.readInt(2),this.internalFileAttributes=w.readInt(2),this.externalFileAttributes=w.readInt(4),this.localHeaderOffset=w.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");w.skip(I),this.readExtraFields(w),this.parseZIP64ExtraField(w),this.fileComment=w.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var w=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),w==0&&(this.dosPermissions=63&this.externalFileAttributes),w==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var w=u(this.extraFields[1].value);this.uncompressedSize===d.MAX_VALUE_32BITS&&(this.uncompressedSize=w.readInt(8)),this.compressedSize===d.MAX_VALUE_32BITS&&(this.compressedSize=w.readInt(8)),this.localHeaderOffset===d.MAX_VALUE_32BITS&&(this.localHeaderOffset=w.readInt(8)),this.diskNumberStart===d.MAX_VALUE_32BITS&&(this.diskNumberStart=w.readInt(4))}},readExtraFields:function(w){var I,h,v,b=w.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});w.index+4<b;)I=w.readInt(2),h=w.readInt(2),v=w.readData(h),this.extraFields[I]={id:I,length:h,value:v};w.setIndex(b)},handleUTF8:function(){var w=S.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=y.utf8decode(this.fileName),this.fileCommentStr=y.utf8decode(this.fileComment);else{var I=this.findExtraFieldUnicodePath();if(I!==null)this.fileNameStr=I;else{var h=d.transformTo(w,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var v=this.findExtraFieldUnicodeComment();if(v!==null)this.fileCommentStr=v;else{var b=d.transformTo(w,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(b)}}},findExtraFieldUnicodePath:function(){var w=this.extraFields[28789];if(w){var I=u(w.value);return I.readInt(1)!==1||g(this.fileName)!==I.readInt(4)?null:y.utf8decode(I.readData(w.length-5))}return null},findExtraFieldUnicodeComment:function(){var w=this.extraFields[25461];if(w){var I=u(w.value);return I.readInt(1)!==1||g(this.fileComment)!==I.readInt(4)?null:y.utf8decode(I.readData(w.length-5))}return null}},x.exports=k},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,x,m){function u(I,h,v){this.name=I,this.dir=v.dir,this.date=v.date,this.comment=v.comment,this.unixPermissions=v.unixPermissions,this.dosPermissions=v.dosPermissions,this._data=h,this._dataBinary=v.binary,this.options={compression:v.compression,compressionOptions:v.compressionOptions}}var d=l("./stream/StreamHelper"),s=l("./stream/DataWorker"),g=l("./utf8"),y=l("./compressedObject"),L=l("./stream/GenericWorker");u.prototype={internalStream:function(I){var h=null,v="string";try{if(!I)throw new Error("No output type specified.");var b=(v=I.toLowerCase())==="string"||v==="text";v!=="binarystring"&&v!=="text"||(v="string"),h=this._decompressWorker();var M=!this._dataBinary;M&&!b&&(h=h.pipe(new g.Utf8EncodeWorker)),!M&&b&&(h=h.pipe(new g.Utf8DecodeWorker))}catch(N){(h=new L("error")).error(N)}return new d(h,v,"")},async:function(I,h){return this.internalStream(I).accumulate(h)},nodeStream:function(I,h){return this.internalStream(I||"nodebuffer").toNodejsStream(h)},_compressWorker:function(I,h){if(this._data instanceof y&&this._data.compression.magic===I.magic)return this._data.getCompressedWorker();var v=this._decompressWorker();return this._dataBinary||(v=v.pipe(new g.Utf8EncodeWorker)),y.createWorkerFrom(v,I,h)},_decompressWorker:function(){return this._data instanceof y?this._data.getContentWorker():this._data instanceof L?this._data:new s(this._data)}};for(var S=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],k=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},w=0;w<S.length;w++)u.prototype[S[w]]=k;x.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,x,m){(function(u){var d,s,g=u.MutationObserver||u.WebKitMutationObserver;if(g){var y=0,L=new g(I),S=u.document.createTextNode("");L.observe(S,{characterData:!0}),d=function(){S.data=y=++y%2}}else if(u.setImmediate||u.MessageChannel===void 0)d="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var h=u.document.createElement("script");h.onreadystatechange=function(){I(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},u.document.documentElement.appendChild(h)}:function(){setTimeout(I,0)};else{var k=new u.MessageChannel;k.port1.onmessage=I,d=function(){k.port2.postMessage(0)}}var w=[];function I(){var h,v;s=!0;for(var b=w.length;b;){for(v=w,w=[],h=-1;++h<b;)v[h]();b=w.length}s=!1}x.exports=function(h){w.push(h)!==1||s||d()}}).call(this,typeof xt<"u"?xt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,x,m){var u=l("immediate");function d(){}var s={},g=["REJECTED"],y=["FULFILLED"],L=["PENDING"];function S(b){if(typeof b!="function")throw new TypeError("resolver must be a function");this.state=L,this.queue=[],this.outcome=void 0,b!==d&&h(this,b)}function k(b,M,N){this.promise=b,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof N=="function"&&(this.onRejected=N,this.callRejected=this.otherCallRejected)}function w(b,M,N){u(function(){var B;try{B=M(N)}catch(F){return s.reject(b,F)}B===b?s.reject(b,new TypeError("Cannot resolve promise with itself")):s.resolve(b,B)})}function I(b){var M=b&&b.then;if(b&&(typeof b=="object"||typeof b=="function")&&typeof M=="function")return function(){M.apply(b,arguments)}}function h(b,M){var N=!1;function B(q){N||(N=!0,s.reject(b,q))}function F(q){N||(N=!0,s.resolve(b,q))}var $=v(function(){M(F,B)});$.status==="error"&&B($.value)}function v(b,M){var N={};try{N.value=b(M),N.status="success"}catch(B){N.status="error",N.value=B}return N}(x.exports=S).prototype.finally=function(b){if(typeof b!="function")return this;var M=this.constructor;return this.then(function(N){return M.resolve(b()).then(function(){return N})},function(N){return M.resolve(b()).then(function(){throw N})})},S.prototype.catch=function(b){return this.then(null,b)},S.prototype.then=function(b,M){if(typeof b!="function"&&this.state===y||typeof M!="function"&&this.state===g)return this;var N=new this.constructor(d);return this.state!==L?w(N,this.state===y?b:M,this.outcome):this.queue.push(new k(N,b,M)),N},k.prototype.callFulfilled=function(b){s.resolve(this.promise,b)},k.prototype.otherCallFulfilled=function(b){w(this.promise,this.onFulfilled,b)},k.prototype.callRejected=function(b){s.reject(this.promise,b)},k.prototype.otherCallRejected=function(b){w(this.promise,this.onRejected,b)},s.resolve=function(b,M){var N=v(I,M);if(N.status==="error")return s.reject(b,N.value);var B=N.value;if(B)h(b,B);else{b.state=y,b.outcome=M;for(var F=-1,$=b.queue.length;++F<$;)b.queue[F].callFulfilled(M)}return b},s.reject=function(b,M){b.state=g,b.outcome=M;for(var N=-1,B=b.queue.length;++N<B;)b.queue[N].callRejected(M);return b},S.resolve=function(b){return b instanceof this?b:s.resolve(new this(d),b)},S.reject=function(b){var M=new this(d);return s.reject(M,b)},S.all=function(b){var M=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=b.length,B=!1;if(!N)return this.resolve([]);for(var F=new Array(N),$=0,q=-1,le=new this(d);++q<N;)J(b[q],q);return le;function J(de,be){M.resolve(de).then(function(P){F[be]=P,++$!==N||B||(B=!0,s.resolve(le,F))},function(P){B||(B=!0,s.reject(le,P))})}},S.race=function(b){var M=this;if(Object.prototype.toString.call(b)!=="[object Array]")return this.reject(new TypeError("must be an array"));var N=b.length,B=!1;if(!N)return this.resolve([]);for(var F=-1,$=new this(d);++F<N;)q=b[F],M.resolve(q).then(function(le){B||(B=!0,s.resolve($,le))},function(le){B||(B=!0,s.reject($,le))});var q;return $}},{immediate:36}],38:[function(l,x,m){var u={};(0,l("./lib/utils/common").assign)(u,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),x.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,x,m){var u=l("./zlib/deflate"),d=l("./utils/common"),s=l("./utils/strings"),g=l("./zlib/messages"),y=l("./zlib/zstream"),L=Object.prototype.toString,S=0,k=-1,w=0,I=8;function h(b){if(!(this instanceof h))return new h(b);this.options=d.assign({level:k,method:I,chunkSize:16384,windowBits:15,memLevel:8,strategy:w,to:""},b||{});var M=this.options;M.raw&&0<M.windowBits?M.windowBits=-M.windowBits:M.gzip&&0<M.windowBits&&M.windowBits<16&&(M.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var N=u.deflateInit2(this.strm,M.level,M.method,M.windowBits,M.memLevel,M.strategy);if(N!==S)throw new Error(g[N]);if(M.header&&u.deflateSetHeader(this.strm,M.header),M.dictionary){var B;if(B=typeof M.dictionary=="string"?s.string2buf(M.dictionary):L.call(M.dictionary)==="[object ArrayBuffer]"?new Uint8Array(M.dictionary):M.dictionary,(N=u.deflateSetDictionary(this.strm,B))!==S)throw new Error(g[N]);this._dict_set=!0}}function v(b,M){var N=new h(M);if(N.push(b,!0),N.err)throw N.msg||g[N.err];return N.result}h.prototype.push=function(b,M){var N,B,F=this.strm,$=this.options.chunkSize;if(this.ended)return!1;B=M===~~M?M:M===!0?4:0,typeof b=="string"?F.input=s.string2buf(b):L.call(b)==="[object ArrayBuffer]"?F.input=new Uint8Array(b):F.input=b,F.next_in=0,F.avail_in=F.input.length;do{if(F.avail_out===0&&(F.output=new d.Buf8($),F.next_out=0,F.avail_out=$),(N=u.deflate(F,B))!==1&&N!==S)return this.onEnd(N),!(this.ended=!0);F.avail_out!==0&&(F.avail_in!==0||B!==4&&B!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(d.shrinkBuf(F.output,F.next_out))):this.onData(d.shrinkBuf(F.output,F.next_out)))}while((0<F.avail_in||F.avail_out===0)&&N!==1);return B===4?(N=u.deflateEnd(this.strm),this.onEnd(N),this.ended=!0,N===S):B!==2||(this.onEnd(S),!(F.avail_out=0))},h.prototype.onData=function(b){this.chunks.push(b)},h.prototype.onEnd=function(b){b===S&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=b,this.msg=this.strm.msg},m.Deflate=h,m.deflate=v,m.deflateRaw=function(b,M){return(M=M||{}).raw=!0,v(b,M)},m.gzip=function(b,M){return(M=M||{}).gzip=!0,v(b,M)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,x,m){var u=l("./zlib/inflate"),d=l("./utils/common"),s=l("./utils/strings"),g=l("./zlib/constants"),y=l("./zlib/messages"),L=l("./zlib/zstream"),S=l("./zlib/gzheader"),k=Object.prototype.toString;function w(h){if(!(this instanceof w))return new w(h);this.options=d.assign({chunkSize:16384,windowBits:0,to:""},h||{});var v=this.options;v.raw&&0<=v.windowBits&&v.windowBits<16&&(v.windowBits=-v.windowBits,v.windowBits===0&&(v.windowBits=-15)),!(0<=v.windowBits&&v.windowBits<16)||h&&h.windowBits||(v.windowBits+=32),15<v.windowBits&&v.windowBits<48&&(15&v.windowBits)==0&&(v.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new L,this.strm.avail_out=0;var b=u.inflateInit2(this.strm,v.windowBits);if(b!==g.Z_OK)throw new Error(y[b]);this.header=new S,u.inflateGetHeader(this.strm,this.header)}function I(h,v){var b=new w(v);if(b.push(h,!0),b.err)throw b.msg||y[b.err];return b.result}w.prototype.push=function(h,v){var b,M,N,B,F,$,q=this.strm,le=this.options.chunkSize,J=this.options.dictionary,de=!1;if(this.ended)return!1;M=v===~~v?v:v===!0?g.Z_FINISH:g.Z_NO_FLUSH,typeof h=="string"?q.input=s.binstring2buf(h):k.call(h)==="[object ArrayBuffer]"?q.input=new Uint8Array(h):q.input=h,q.next_in=0,q.avail_in=q.input.length;do{if(q.avail_out===0&&(q.output=new d.Buf8(le),q.next_out=0,q.avail_out=le),(b=u.inflate(q,g.Z_NO_FLUSH))===g.Z_NEED_DICT&&J&&($=typeof J=="string"?s.string2buf(J):k.call(J)==="[object ArrayBuffer]"?new Uint8Array(J):J,b=u.inflateSetDictionary(this.strm,$)),b===g.Z_BUF_ERROR&&de===!0&&(b=g.Z_OK,de=!1),b!==g.Z_STREAM_END&&b!==g.Z_OK)return this.onEnd(b),!(this.ended=!0);q.next_out&&(q.avail_out!==0&&b!==g.Z_STREAM_END&&(q.avail_in!==0||M!==g.Z_FINISH&&M!==g.Z_SYNC_FLUSH)||(this.options.to==="string"?(N=s.utf8border(q.output,q.next_out),B=q.next_out-N,F=s.buf2string(q.output,N),q.next_out=B,q.avail_out=le-B,B&&d.arraySet(q.output,q.output,N,B,0),this.onData(F)):this.onData(d.shrinkBuf(q.output,q.next_out)))),q.avail_in===0&&q.avail_out===0&&(de=!0)}while((0<q.avail_in||q.avail_out===0)&&b!==g.Z_STREAM_END);return b===g.Z_STREAM_END&&(M=g.Z_FINISH),M===g.Z_FINISH?(b=u.inflateEnd(this.strm),this.onEnd(b),this.ended=!0,b===g.Z_OK):M!==g.Z_SYNC_FLUSH||(this.onEnd(g.Z_OK),!(q.avail_out=0))},w.prototype.onData=function(h){this.chunks.push(h)},w.prototype.onEnd=function(h){h===g.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=d.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},m.Inflate=w,m.inflate=I,m.inflateRaw=function(h,v){return(v=v||{}).raw=!0,I(h,v)},m.ungzip=I},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,x,m){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";m.assign=function(g){for(var y=Array.prototype.slice.call(arguments,1);y.length;){var L=y.shift();if(L){if(typeof L!="object")throw new TypeError(L+"must be non-object");for(var S in L)L.hasOwnProperty(S)&&(g[S]=L[S])}}return g},m.shrinkBuf=function(g,y){return g.length===y?g:g.subarray?g.subarray(0,y):(g.length=y,g)};var d={arraySet:function(g,y,L,S,k){if(y.subarray&&g.subarray)g.set(y.subarray(L,L+S),k);else for(var w=0;w<S;w++)g[k+w]=y[L+w]},flattenChunks:function(g){var y,L,S,k,w,I;for(y=S=0,L=g.length;y<L;y++)S+=g[y].length;for(I=new Uint8Array(S),y=k=0,L=g.length;y<L;y++)w=g[y],I.set(w,k),k+=w.length;return I}},s={arraySet:function(g,y,L,S,k){for(var w=0;w<S;w++)g[k+w]=y[L+w]},flattenChunks:function(g){return[].concat.apply([],g)}};m.setTyped=function(g){g?(m.Buf8=Uint8Array,m.Buf16=Uint16Array,m.Buf32=Int32Array,m.assign(m,d)):(m.Buf8=Array,m.Buf16=Array,m.Buf32=Array,m.assign(m,s))},m.setTyped(u)},{}],42:[function(l,x,m){var u=l("./common"),d=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{d=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var g=new u.Buf8(256),y=0;y<256;y++)g[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;function L(S,k){if(k<65537&&(S.subarray&&s||!S.subarray&&d))return String.fromCharCode.apply(null,u.shrinkBuf(S,k));for(var w="",I=0;I<k;I++)w+=String.fromCharCode(S[I]);return w}g[254]=g[254]=1,m.string2buf=function(S){var k,w,I,h,v,b=S.length,M=0;for(h=0;h<b;h++)(64512&(w=S.charCodeAt(h)))==55296&&h+1<b&&(64512&(I=S.charCodeAt(h+1)))==56320&&(w=65536+(w-55296<<10)+(I-56320),h++),M+=w<128?1:w<2048?2:w<65536?3:4;for(k=new u.Buf8(M),h=v=0;v<M;h++)(64512&(w=S.charCodeAt(h)))==55296&&h+1<b&&(64512&(I=S.charCodeAt(h+1)))==56320&&(w=65536+(w-55296<<10)+(I-56320),h++),w<128?k[v++]=w:(w<2048?k[v++]=192|w>>>6:(w<65536?k[v++]=224|w>>>12:(k[v++]=240|w>>>18,k[v++]=128|w>>>12&63),k[v++]=128|w>>>6&63),k[v++]=128|63&w);return k},m.buf2binstring=function(S){return L(S,S.length)},m.binstring2buf=function(S){for(var k=new u.Buf8(S.length),w=0,I=k.length;w<I;w++)k[w]=S.charCodeAt(w);return k},m.buf2string=function(S,k){var w,I,h,v,b=k||S.length,M=new Array(2*b);for(w=I=0;w<b;)if((h=S[w++])<128)M[I++]=h;else if(4<(v=g[h]))M[I++]=65533,w+=v-1;else{for(h&=v===2?31:v===3?15:7;1<v&&w<b;)h=h<<6|63&S[w++],v--;1<v?M[I++]=65533:h<65536?M[I++]=h:(h-=65536,M[I++]=55296|h>>10&1023,M[I++]=56320|1023&h)}return L(M,I)},m.utf8border=function(S,k){var w;for((k=k||S.length)>S.length&&(k=S.length),w=k-1;0<=w&&(192&S[w])==128;)w--;return w<0||w===0?k:w+g[S[w]]>k?w:k}},{"./common":41}],43:[function(l,x,m){x.exports=function(u,d,s,g){for(var y=65535&u|0,L=u>>>16&65535|0,S=0;s!==0;){for(s-=S=2e3<s?2e3:s;L=L+(y=y+d[g++]|0)|0,--S;);y%=65521,L%=65521}return y|L<<16|0}},{}],44:[function(l,x,m){x.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,x,m){var u=(function(){for(var d,s=[],g=0;g<256;g++){d=g;for(var y=0;y<8;y++)d=1&d?3988292384^d>>>1:d>>>1;s[g]=d}return s})();x.exports=function(d,s,g,y){var L=u,S=y+g;d^=-1;for(var k=y;k<S;k++)d=d>>>8^L[255&(d^s[k])];return-1^d}},{}],46:[function(l,x,m){var u,d=l("../utils/common"),s=l("./trees"),g=l("./adler32"),y=l("./crc32"),L=l("./messages"),S=0,k=4,w=0,I=-2,h=-1,v=4,b=2,M=8,N=9,B=286,F=30,$=19,q=2*B+1,le=15,J=3,de=258,be=de+J+1,P=42,K=113,p=1,Q=2,Te=3,Y=4;function ee(o,Z){return o.msg=L[Z],Z}function H(o){return(o<<1)-(4<o?9:0)}function X(o){for(var Z=o.length;0<=--Z;)o[Z]=0}function T(o){var Z=o.state,G=Z.pending;G>o.avail_out&&(G=o.avail_out),G!==0&&(d.arraySet(o.output,Z.pending_buf,Z.pending_out,G,o.next_out),o.next_out+=G,Z.pending_out+=G,o.total_out+=G,o.avail_out-=G,Z.pending-=G,Z.pending===0&&(Z.pending_out=0))}function A(o,Z){s._tr_flush_block(o,0<=o.block_start?o.block_start:-1,o.strstart-o.block_start,Z),o.block_start=o.strstart,T(o.strm)}function ce(o,Z){o.pending_buf[o.pending++]=Z}function ae(o,Z){o.pending_buf[o.pending++]=Z>>>8&255,o.pending_buf[o.pending++]=255&Z}function ne(o,Z){var G,O,C=o.max_chain_length,z=o.strstart,te=o.prev_length,ie=o.nice_match,U=o.strstart>o.w_size-be?o.strstart-(o.w_size-be):0,fe=o.window,we=o.w_mask,ge=o.prev,Le=o.strstart+de,Be=fe[z+te-1],Ae=fe[z+te];o.prev_length>=o.good_match&&(C>>=2),ie>o.lookahead&&(ie=o.lookahead);do if(fe[(G=Z)+te]===Ae&&fe[G+te-1]===Be&&fe[G]===fe[z]&&fe[++G]===fe[z+1]){z+=2,G++;do;while(fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&fe[++z]===fe[++G]&&z<Le);if(O=de-(Le-z),z=Le-de,te<O){if(o.match_start=Z,ie<=(te=O))break;Be=fe[z+te-1],Ae=fe[z+te]}}while((Z=ge[Z&we])>U&&--C!=0);return te<=o.lookahead?te:o.lookahead}function Ce(o){var Z,G,O,C,z,te,ie,U,fe,we,ge=o.w_size;do{if(C=o.window_size-o.lookahead-o.strstart,o.strstart>=ge+(ge-be)){for(d.arraySet(o.window,o.window,ge,ge,0),o.match_start-=ge,o.strstart-=ge,o.block_start-=ge,Z=G=o.hash_size;O=o.head[--Z],o.head[Z]=ge<=O?O-ge:0,--G;);for(Z=G=ge;O=o.prev[--Z],o.prev[Z]=ge<=O?O-ge:0,--G;);C+=ge}if(o.strm.avail_in===0)break;if(te=o.strm,ie=o.window,U=o.strstart+o.lookahead,fe=C,we=void 0,we=te.avail_in,fe<we&&(we=fe),G=we===0?0:(te.avail_in-=we,d.arraySet(ie,te.input,te.next_in,we,U),te.state.wrap===1?te.adler=g(te.adler,ie,we,U):te.state.wrap===2&&(te.adler=y(te.adler,ie,we,U)),te.next_in+=we,te.total_in+=we,we),o.lookahead+=G,o.lookahead+o.insert>=J)for(z=o.strstart-o.insert,o.ins_h=o.window[z],o.ins_h=(o.ins_h<<o.hash_shift^o.window[z+1])&o.hash_mask;o.insert&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[z+J-1])&o.hash_mask,o.prev[z&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=z,z++,o.insert--,!(o.lookahead+o.insert<J)););}while(o.lookahead<be&&o.strm.avail_in!==0)}function Oe(o,Z){for(var G,O;;){if(o.lookahead<be){if(Ce(o),o.lookahead<be&&Z===S)return p;if(o.lookahead===0)break}if(G=0,o.lookahead>=J&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,G=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),G!==0&&o.strstart-G<=o.w_size-be&&(o.match_length=ne(o,G)),o.match_length>=J)if(O=s._tr_tally(o,o.strstart-o.match_start,o.match_length-J),o.lookahead-=o.match_length,o.match_length<=o.max_lazy_match&&o.lookahead>=J){for(o.match_length--;o.strstart++,o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,G=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart,--o.match_length!=0;);o.strstart++}else o.strstart+=o.match_length,o.match_length=0,o.ins_h=o.window[o.strstart],o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+1])&o.hash_mask;else O=s._tr_tally(o,0,o.window[o.strstart]),o.lookahead--,o.strstart++;if(O&&(A(o,!1),o.strm.avail_out===0))return p}return o.insert=o.strstart<J-1?o.strstart:J-1,Z===k?(A(o,!0),o.strm.avail_out===0?Te:Y):o.last_lit&&(A(o,!1),o.strm.avail_out===0)?p:Q}function ve(o,Z){for(var G,O,C;;){if(o.lookahead<be){if(Ce(o),o.lookahead<be&&Z===S)return p;if(o.lookahead===0)break}if(G=0,o.lookahead>=J&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,G=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),o.prev_length=o.match_length,o.prev_match=o.match_start,o.match_length=J-1,G!==0&&o.prev_length<o.max_lazy_match&&o.strstart-G<=o.w_size-be&&(o.match_length=ne(o,G),o.match_length<=5&&(o.strategy===1||o.match_length===J&&4096<o.strstart-o.match_start)&&(o.match_length=J-1)),o.prev_length>=J&&o.match_length<=o.prev_length){for(C=o.strstart+o.lookahead-J,O=s._tr_tally(o,o.strstart-1-o.prev_match,o.prev_length-J),o.lookahead-=o.prev_length-1,o.prev_length-=2;++o.strstart<=C&&(o.ins_h=(o.ins_h<<o.hash_shift^o.window[o.strstart+J-1])&o.hash_mask,G=o.prev[o.strstart&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=o.strstart),--o.prev_length!=0;);if(o.match_available=0,o.match_length=J-1,o.strstart++,O&&(A(o,!1),o.strm.avail_out===0))return p}else if(o.match_available){if((O=s._tr_tally(o,0,o.window[o.strstart-1]))&&A(o,!1),o.strstart++,o.lookahead--,o.strm.avail_out===0)return p}else o.match_available=1,o.strstart++,o.lookahead--}return o.match_available&&(O=s._tr_tally(o,0,o.window[o.strstart-1]),o.match_available=0),o.insert=o.strstart<J-1?o.strstart:J-1,Z===k?(A(o,!0),o.strm.avail_out===0?Te:Y):o.last_lit&&(A(o,!1),o.strm.avail_out===0)?p:Q}function _e(o,Z,G,O,C){this.good_length=o,this.max_lazy=Z,this.nice_length=G,this.max_chain=O,this.func=C}function je(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=M,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new d.Buf16(2*q),this.dyn_dtree=new d.Buf16(2*(2*F+1)),this.bl_tree=new d.Buf16(2*(2*$+1)),X(this.dyn_ltree),X(this.dyn_dtree),X(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new d.Buf16(le+1),this.heap=new d.Buf16(2*B+1),X(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new d.Buf16(2*B+1),X(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function Fe(o){var Z;return o&&o.state?(o.total_in=o.total_out=0,o.data_type=b,(Z=o.state).pending=0,Z.pending_out=0,Z.wrap<0&&(Z.wrap=-Z.wrap),Z.status=Z.wrap?P:K,o.adler=Z.wrap===2?0:1,Z.last_flush=S,s._tr_init(Z),w):ee(o,I)}function kn(o){var Z=Fe(o);return Z===w&&(function(G){G.window_size=2*G.w_size,X(G.head),G.max_lazy_match=u[G.level].max_lazy,G.good_match=u[G.level].good_length,G.nice_match=u[G.level].nice_length,G.max_chain_length=u[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=J-1,G.match_available=0,G.ins_h=0})(o.state),Z}function ln(o,Z,G,O,C,z){if(!o)return I;var te=1;if(Z===h&&(Z=6),O<0?(te=0,O=-O):15<O&&(te=2,O-=16),C<1||N<C||G!==M||O<8||15<O||Z<0||9<Z||z<0||v<z)return ee(o,I);O===8&&(O=9);var ie=new je;return(o.state=ie).strm=o,ie.wrap=te,ie.gzhead=null,ie.w_bits=O,ie.w_size=1<<ie.w_bits,ie.w_mask=ie.w_size-1,ie.hash_bits=C+7,ie.hash_size=1<<ie.hash_bits,ie.hash_mask=ie.hash_size-1,ie.hash_shift=~~((ie.hash_bits+J-1)/J),ie.window=new d.Buf8(2*ie.w_size),ie.head=new d.Buf16(ie.hash_size),ie.prev=new d.Buf16(ie.w_size),ie.lit_bufsize=1<<C+6,ie.pending_buf_size=4*ie.lit_bufsize,ie.pending_buf=new d.Buf8(ie.pending_buf_size),ie.d_buf=1*ie.lit_bufsize,ie.l_buf=3*ie.lit_bufsize,ie.level=Z,ie.strategy=z,ie.method=G,kn(o)}u=[new _e(0,0,0,0,function(o,Z){var G=65535;for(G>o.pending_buf_size-5&&(G=o.pending_buf_size-5);;){if(o.lookahead<=1){if(Ce(o),o.lookahead===0&&Z===S)return p;if(o.lookahead===0)break}o.strstart+=o.lookahead,o.lookahead=0;var O=o.block_start+G;if((o.strstart===0||o.strstart>=O)&&(o.lookahead=o.strstart-O,o.strstart=O,A(o,!1),o.strm.avail_out===0)||o.strstart-o.block_start>=o.w_size-be&&(A(o,!1),o.strm.avail_out===0))return p}return o.insert=0,Z===k?(A(o,!0),o.strm.avail_out===0?Te:Y):(o.strstart>o.block_start&&(A(o,!1),o.strm.avail_out),p)}),new _e(4,4,8,4,Oe),new _e(4,5,16,8,Oe),new _e(4,6,32,32,Oe),new _e(4,4,16,16,ve),new _e(8,16,32,32,ve),new _e(8,16,128,128,ve),new _e(8,32,128,256,ve),new _e(32,128,258,1024,ve),new _e(32,258,258,4096,ve)],m.deflateInit=function(o,Z){return ln(o,Z,M,15,8,0)},m.deflateInit2=ln,m.deflateReset=kn,m.deflateResetKeep=Fe,m.deflateSetHeader=function(o,Z){return o&&o.state?o.state.wrap!==2?I:(o.state.gzhead=Z,w):I},m.deflate=function(o,Z){var G,O,C,z;if(!o||!o.state||5<Z||Z<0)return o?ee(o,I):I;if(O=o.state,!o.output||!o.input&&o.avail_in!==0||O.status===666&&Z!==k)return ee(o,o.avail_out===0?-5:I);if(O.strm=o,G=O.last_flush,O.last_flush=Z,O.status===P)if(O.wrap===2)o.adler=0,ce(O,31),ce(O,139),ce(O,8),O.gzhead?(ce(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),ce(O,255&O.gzhead.time),ce(O,O.gzhead.time>>8&255),ce(O,O.gzhead.time>>16&255),ce(O,O.gzhead.time>>24&255),ce(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ce(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(ce(O,255&O.gzhead.extra.length),ce(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(o.adler=y(o.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(ce(O,0),ce(O,0),ce(O,0),ce(O,0),ce(O,0),ce(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),ce(O,3),O.status=K);else{var te=M+(O.w_bits-8<<4)<<8;te|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(te|=32),te+=31-te%31,O.status=K,ae(O,te),O.strstart!==0&&(ae(O,o.adler>>>16),ae(O,65535&o.adler)),o.adler=1}if(O.status===69)if(O.gzhead.extra){for(C=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),T(o),C=O.pending,O.pending!==O.pending_buf_size));)ce(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),T(o),C=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,ce(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),z===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){C=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),T(o),C=O.pending,O.pending===O.pending_buf_size)){z=1;break}z=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,ce(O,z)}while(z!==0);O.gzhead.hcrc&&O.pending>C&&(o.adler=y(o.adler,O.pending_buf,O.pending-C,C)),z===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&T(o),O.pending+2<=O.pending_buf_size&&(ce(O,255&o.adler),ce(O,o.adler>>8&255),o.adler=0,O.status=K)):O.status=K),O.pending!==0){if(T(o),o.avail_out===0)return O.last_flush=-1,w}else if(o.avail_in===0&&H(Z)<=H(G)&&Z!==k)return ee(o,-5);if(O.status===666&&o.avail_in!==0)return ee(o,-5);if(o.avail_in!==0||O.lookahead!==0||Z!==S&&O.status!==666){var ie=O.strategy===2?(function(U,fe){for(var we;;){if(U.lookahead===0&&(Ce(U),U.lookahead===0)){if(fe===S)return p;break}if(U.match_length=0,we=s._tr_tally(U,0,U.window[U.strstart]),U.lookahead--,U.strstart++,we&&(A(U,!1),U.strm.avail_out===0))return p}return U.insert=0,fe===k?(A(U,!0),U.strm.avail_out===0?Te:Y):U.last_lit&&(A(U,!1),U.strm.avail_out===0)?p:Q})(O,Z):O.strategy===3?(function(U,fe){for(var we,ge,Le,Be,Ae=U.window;;){if(U.lookahead<=de){if(Ce(U),U.lookahead<=de&&fe===S)return p;if(U.lookahead===0)break}if(U.match_length=0,U.lookahead>=J&&0<U.strstart&&(ge=Ae[Le=U.strstart-1])===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]){Be=U.strstart+de;do;while(ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&ge===Ae[++Le]&&Le<Be);U.match_length=de-(Be-Le),U.match_length>U.lookahead&&(U.match_length=U.lookahead)}if(U.match_length>=J?(we=s._tr_tally(U,1,U.match_length-J),U.lookahead-=U.match_length,U.strstart+=U.match_length,U.match_length=0):(we=s._tr_tally(U,0,U.window[U.strstart]),U.lookahead--,U.strstart++),we&&(A(U,!1),U.strm.avail_out===0))return p}return U.insert=0,fe===k?(A(U,!0),U.strm.avail_out===0?Te:Y):U.last_lit&&(A(U,!1),U.strm.avail_out===0)?p:Q})(O,Z):u[O.level].func(O,Z);if(ie!==Te&&ie!==Y||(O.status=666),ie===p||ie===Te)return o.avail_out===0&&(O.last_flush=-1),w;if(ie===Q&&(Z===1?s._tr_align(O):Z!==5&&(s._tr_stored_block(O,0,0,!1),Z===3&&(X(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),T(o),o.avail_out===0))return O.last_flush=-1,w}return Z!==k?w:O.wrap<=0?1:(O.wrap===2?(ce(O,255&o.adler),ce(O,o.adler>>8&255),ce(O,o.adler>>16&255),ce(O,o.adler>>24&255),ce(O,255&o.total_in),ce(O,o.total_in>>8&255),ce(O,o.total_in>>16&255),ce(O,o.total_in>>24&255)):(ae(O,o.adler>>>16),ae(O,65535&o.adler)),T(o),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?w:1)},m.deflateEnd=function(o){var Z;return o&&o.state?(Z=o.state.status)!==P&&Z!==69&&Z!==73&&Z!==91&&Z!==103&&Z!==K&&Z!==666?ee(o,I):(o.state=null,Z===K?ee(o,-3):w):I},m.deflateSetDictionary=function(o,Z){var G,O,C,z,te,ie,U,fe,we=Z.length;if(!o||!o.state||(z=(G=o.state).wrap)===2||z===1&&G.status!==P||G.lookahead)return I;for(z===1&&(o.adler=g(o.adler,Z,we,0)),G.wrap=0,we>=G.w_size&&(z===0&&(X(G.head),G.strstart=0,G.block_start=0,G.insert=0),fe=new d.Buf8(G.w_size),d.arraySet(fe,Z,we-G.w_size,G.w_size,0),Z=fe,we=G.w_size),te=o.avail_in,ie=o.next_in,U=o.input,o.avail_in=we,o.next_in=0,o.input=Z,Ce(G);G.lookahead>=J;){for(O=G.strstart,C=G.lookahead-(J-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[O+J-1])&G.hash_mask,G.prev[O&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=O,O++,--C;);G.strstart=O,G.lookahead=J-1,Ce(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=J-1,G.match_available=0,o.next_in=ie,o.input=U,o.avail_in=te,G.wrap=z,w},m.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,x,m){x.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,x,m){x.exports=function(u,d){var s,g,y,L,S,k,w,I,h,v,b,M,N,B,F,$,q,le,J,de,be,P,K,p,Q;s=u.state,g=u.next_in,p=u.input,y=g+(u.avail_in-5),L=u.next_out,Q=u.output,S=L-(d-u.avail_out),k=L+(u.avail_out-257),w=s.dmax,I=s.wsize,h=s.whave,v=s.wnext,b=s.window,M=s.hold,N=s.bits,B=s.lencode,F=s.distcode,$=(1<<s.lenbits)-1,q=(1<<s.distbits)-1;e:do{N<15&&(M+=p[g++]<<N,N+=8,M+=p[g++]<<N,N+=8),le=B[M&$];n:for(;;){if(M>>>=J=le>>>24,N-=J,(J=le>>>16&255)===0)Q[L++]=65535&le;else{if(!(16&J)){if((64&J)==0){le=B[(65535&le)+(M&(1<<J)-1)];continue n}if(32&J){s.mode=12;break e}u.msg="invalid literal/length code",s.mode=30;break e}de=65535&le,(J&=15)&&(N<J&&(M+=p[g++]<<N,N+=8),de+=M&(1<<J)-1,M>>>=J,N-=J),N<15&&(M+=p[g++]<<N,N+=8,M+=p[g++]<<N,N+=8),le=F[M&q];t:for(;;){if(M>>>=J=le>>>24,N-=J,!(16&(J=le>>>16&255))){if((64&J)==0){le=F[(65535&le)+(M&(1<<J)-1)];continue t}u.msg="invalid distance code",s.mode=30;break e}if(be=65535&le,N<(J&=15)&&(M+=p[g++]<<N,(N+=8)<J&&(M+=p[g++]<<N,N+=8)),w<(be+=M&(1<<J)-1)){u.msg="invalid distance too far back",s.mode=30;break e}if(M>>>=J,N-=J,(J=L-S)<be){if(h<(J=be-J)&&s.sane){u.msg="invalid distance too far back",s.mode=30;break e}if(K=b,(P=0)===v){if(P+=I-J,J<de){for(de-=J;Q[L++]=b[P++],--J;);P=L-be,K=Q}}else if(v<J){if(P+=I+v-J,(J-=v)<de){for(de-=J;Q[L++]=b[P++],--J;);if(P=0,v<de){for(de-=J=v;Q[L++]=b[P++],--J;);P=L-be,K=Q}}}else if(P+=v-J,J<de){for(de-=J;Q[L++]=b[P++],--J;);P=L-be,K=Q}for(;2<de;)Q[L++]=K[P++],Q[L++]=K[P++],Q[L++]=K[P++],de-=3;de&&(Q[L++]=K[P++],1<de&&(Q[L++]=K[P++]))}else{for(P=L-be;Q[L++]=Q[P++],Q[L++]=Q[P++],Q[L++]=Q[P++],2<(de-=3););de&&(Q[L++]=Q[P++],1<de&&(Q[L++]=Q[P++]))}break}}break}}while(g<y&&L<k);g-=de=N>>3,M&=(1<<(N-=de<<3))-1,u.next_in=g,u.next_out=L,u.avail_in=g<y?y-g+5:5-(g-y),u.avail_out=L<k?k-L+257:257-(L-k),s.hold=M,s.bits=N}},{}],49:[function(l,x,m){var u=l("../utils/common"),d=l("./adler32"),s=l("./crc32"),g=l("./inffast"),y=l("./inftrees"),L=1,S=2,k=0,w=-2,I=1,h=852,v=592;function b(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function M(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function N(P){var K;return P&&P.state?(K=P.state,P.total_in=P.total_out=K.total=0,P.msg="",K.wrap&&(P.adler=1&K.wrap),K.mode=I,K.last=0,K.havedict=0,K.dmax=32768,K.head=null,K.hold=0,K.bits=0,K.lencode=K.lendyn=new u.Buf32(h),K.distcode=K.distdyn=new u.Buf32(v),K.sane=1,K.back=-1,k):w}function B(P){var K;return P&&P.state?((K=P.state).wsize=0,K.whave=0,K.wnext=0,N(P)):w}function F(P,K){var p,Q;return P&&P.state?(Q=P.state,K<0?(p=0,K=-K):(p=1+(K>>4),K<48&&(K&=15)),K&&(K<8||15<K)?w:(Q.window!==null&&Q.wbits!==K&&(Q.window=null),Q.wrap=p,Q.wbits=K,B(P))):w}function $(P,K){var p,Q;return P?(Q=new M,(P.state=Q).window=null,(p=F(P,K))!==k&&(P.state=null),p):w}var q,le,J=!0;function de(P){if(J){var K;for(q=new u.Buf32(512),le=new u.Buf32(32),K=0;K<144;)P.lens[K++]=8;for(;K<256;)P.lens[K++]=9;for(;K<280;)P.lens[K++]=7;for(;K<288;)P.lens[K++]=8;for(y(L,P.lens,0,288,q,0,P.work,{bits:9}),K=0;K<32;)P.lens[K++]=5;y(S,P.lens,0,32,le,0,P.work,{bits:5}),J=!1}P.lencode=q,P.lenbits=9,P.distcode=le,P.distbits=5}function be(P,K,p,Q){var Te,Y=P.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new u.Buf8(Y.wsize)),Q>=Y.wsize?(u.arraySet(Y.window,K,p-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(Q<(Te=Y.wsize-Y.wnext)&&(Te=Q),u.arraySet(Y.window,K,p-Q,Te,Y.wnext),(Q-=Te)?(u.arraySet(Y.window,K,p-Q,Q,0),Y.wnext=Q,Y.whave=Y.wsize):(Y.wnext+=Te,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=Te))),0}m.inflateReset=B,m.inflateReset2=F,m.inflateResetKeep=N,m.inflateInit=function(P){return $(P,15)},m.inflateInit2=$,m.inflate=function(P,K){var p,Q,Te,Y,ee,H,X,T,A,ce,ae,ne,Ce,Oe,ve,_e,je,Fe,kn,ln,o,Z,G,O,C=0,z=new u.Buf8(4),te=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return w;(p=P.state).mode===12&&(p.mode=13),ee=P.next_out,Te=P.output,X=P.avail_out,Y=P.next_in,Q=P.input,H=P.avail_in,T=p.hold,A=p.bits,ce=H,ae=X,Z=k;e:for(;;)switch(p.mode){case I:if(p.wrap===0){p.mode=13;break}for(;A<16;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(2&p.wrap&&T===35615){z[p.check=0]=255&T,z[1]=T>>>8&255,p.check=s(p.check,z,2,0),A=T=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&T)<<8)+(T>>8))%31){P.msg="incorrect header check",p.mode=30;break}if((15&T)!=8){P.msg="unknown compression method",p.mode=30;break}if(A-=4,o=8+(15&(T>>>=4)),p.wbits===0)p.wbits=o;else if(o>p.wbits){P.msg="invalid window size",p.mode=30;break}p.dmax=1<<o,P.adler=p.check=1,p.mode=512&T?10:12,A=T=0;break;case 2:for(;A<16;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(p.flags=T,(255&p.flags)!=8){P.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){P.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=T>>8&1),512&p.flags&&(z[0]=255&T,z[1]=T>>>8&255,p.check=s(p.check,z,2,0)),A=T=0,p.mode=3;case 3:for(;A<32;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.head&&(p.head.time=T),512&p.flags&&(z[0]=255&T,z[1]=T>>>8&255,z[2]=T>>>16&255,z[3]=T>>>24&255,p.check=s(p.check,z,4,0)),A=T=0,p.mode=4;case 4:for(;A<16;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.head&&(p.head.xflags=255&T,p.head.os=T>>8),512&p.flags&&(z[0]=255&T,z[1]=T>>>8&255,p.check=s(p.check,z,2,0)),A=T=0,p.mode=5;case 5:if(1024&p.flags){for(;A<16;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.length=T,p.head&&(p.head.extra_len=T),512&p.flags&&(z[0]=255&T,z[1]=T>>>8&255,p.check=s(p.check,z,2,0)),A=T=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(H<(ne=p.length)&&(ne=H),ne&&(p.head&&(o=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),u.arraySet(p.head.extra,Q,Y,ne,o)),512&p.flags&&(p.check=s(p.check,Q,ne,Y)),H-=ne,Y+=ne,p.length-=ne),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(H===0)break e;for(ne=0;o=Q[Y+ne++],p.head&&o&&p.length<65536&&(p.head.name+=String.fromCharCode(o)),o&&ne<H;);if(512&p.flags&&(p.check=s(p.check,Q,ne,Y)),H-=ne,Y+=ne,o)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(H===0)break e;for(ne=0;o=Q[Y+ne++],p.head&&o&&p.length<65536&&(p.head.comment+=String.fromCharCode(o)),o&&ne<H;);if(512&p.flags&&(p.check=s(p.check,Q,ne,Y)),H-=ne,Y+=ne,o)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;A<16;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(T!==(65535&p.check)){P.msg="header crc mismatch",p.mode=30;break}A=T=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),P.adler=p.check=0,p.mode=12;break;case 10:for(;A<32;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}P.adler=p.check=b(T),A=T=0,p.mode=11;case 11:if(p.havedict===0)return P.next_out=ee,P.avail_out=X,P.next_in=Y,P.avail_in=H,p.hold=T,p.bits=A,2;P.adler=p.check=1,p.mode=12;case 12:if(K===5||K===6)break e;case 13:if(p.last){T>>>=7&A,A-=7&A,p.mode=27;break}for(;A<3;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}switch(p.last=1&T,A-=1,3&(T>>>=1)){case 0:p.mode=14;break;case 1:if(de(p),p.mode=20,K!==6)break;T>>>=2,A-=2;break e;case 2:p.mode=17;break;case 3:P.msg="invalid block type",p.mode=30}T>>>=2,A-=2;break;case 14:for(T>>>=7&A,A-=7&A;A<32;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if((65535&T)!=(T>>>16^65535)){P.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&T,A=T=0,p.mode=15,K===6)break e;case 15:p.mode=16;case 16:if(ne=p.length){if(H<ne&&(ne=H),X<ne&&(ne=X),ne===0)break e;u.arraySet(Te,Q,Y,ne,ee),H-=ne,Y+=ne,X-=ne,ee+=ne,p.length-=ne;break}p.mode=12;break;case 17:for(;A<14;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(p.nlen=257+(31&T),T>>>=5,A-=5,p.ndist=1+(31&T),T>>>=5,A-=5,p.ncode=4+(15&T),T>>>=4,A-=4,286<p.nlen||30<p.ndist){P.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;A<3;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.lens[te[p.have++]]=7&T,T>>>=3,A-=3}for(;p.have<19;)p.lens[te[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,G={bits:p.lenbits},Z=y(0,p.lens,0,19,p.lencode,0,p.work,G),p.lenbits=G.bits,Z){P.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;_e=(C=p.lencode[T&(1<<p.lenbits)-1])>>>16&255,je=65535&C,!((ve=C>>>24)<=A);){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(je<16)T>>>=ve,A-=ve,p.lens[p.have++]=je;else{if(je===16){for(O=ve+2;A<O;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(T>>>=ve,A-=ve,p.have===0){P.msg="invalid bit length repeat",p.mode=30;break}o=p.lens[p.have-1],ne=3+(3&T),T>>>=2,A-=2}else if(je===17){for(O=ve+3;A<O;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}A-=ve,o=0,ne=3+(7&(T>>>=ve)),T>>>=3,A-=3}else{for(O=ve+7;A<O;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}A-=ve,o=0,ne=11+(127&(T>>>=ve)),T>>>=7,A-=7}if(p.have+ne>p.nlen+p.ndist){P.msg="invalid bit length repeat",p.mode=30;break}for(;ne--;)p.lens[p.have++]=o}}if(p.mode===30)break;if(p.lens[256]===0){P.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,G={bits:p.lenbits},Z=y(L,p.lens,0,p.nlen,p.lencode,0,p.work,G),p.lenbits=G.bits,Z){P.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,G={bits:p.distbits},Z=y(S,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,G),p.distbits=G.bits,Z){P.msg="invalid distances set",p.mode=30;break}if(p.mode=20,K===6)break e;case 20:p.mode=21;case 21:if(6<=H&&258<=X){P.next_out=ee,P.avail_out=X,P.next_in=Y,P.avail_in=H,p.hold=T,p.bits=A,g(P,ae),ee=P.next_out,Te=P.output,X=P.avail_out,Y=P.next_in,Q=P.input,H=P.avail_in,T=p.hold,A=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;_e=(C=p.lencode[T&(1<<p.lenbits)-1])>>>16&255,je=65535&C,!((ve=C>>>24)<=A);){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(_e&&(240&_e)==0){for(Fe=ve,kn=_e,ln=je;_e=(C=p.lencode[ln+((T&(1<<Fe+kn)-1)>>Fe)])>>>16&255,je=65535&C,!(Fe+(ve=C>>>24)<=A);){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}T>>>=Fe,A-=Fe,p.back+=Fe}if(T>>>=ve,A-=ve,p.back+=ve,p.length=je,_e===0){p.mode=26;break}if(32&_e){p.back=-1,p.mode=12;break}if(64&_e){P.msg="invalid literal/length code",p.mode=30;break}p.extra=15&_e,p.mode=22;case 22:if(p.extra){for(O=p.extra;A<O;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.length+=T&(1<<p.extra)-1,T>>>=p.extra,A-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;_e=(C=p.distcode[T&(1<<p.distbits)-1])>>>16&255,je=65535&C,!((ve=C>>>24)<=A);){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if((240&_e)==0){for(Fe=ve,kn=_e,ln=je;_e=(C=p.distcode[ln+((T&(1<<Fe+kn)-1)>>Fe)])>>>16&255,je=65535&C,!(Fe+(ve=C>>>24)<=A);){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}T>>>=Fe,A-=Fe,p.back+=Fe}if(T>>>=ve,A-=ve,p.back+=ve,64&_e){P.msg="invalid distance code",p.mode=30;break}p.offset=je,p.extra=15&_e,p.mode=24;case 24:if(p.extra){for(O=p.extra;A<O;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}p.offset+=T&(1<<p.extra)-1,T>>>=p.extra,A-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){P.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(X===0)break e;if(ne=ae-X,p.offset>ne){if((ne=p.offset-ne)>p.whave&&p.sane){P.msg="invalid distance too far back",p.mode=30;break}Ce=ne>p.wnext?(ne-=p.wnext,p.wsize-ne):p.wnext-ne,ne>p.length&&(ne=p.length),Oe=p.window}else Oe=Te,Ce=ee-p.offset,ne=p.length;for(X<ne&&(ne=X),X-=ne,p.length-=ne;Te[ee++]=Oe[Ce++],--ne;);p.length===0&&(p.mode=21);break;case 26:if(X===0)break e;Te[ee++]=p.length,X--,p.mode=21;break;case 27:if(p.wrap){for(;A<32;){if(H===0)break e;H--,T|=Q[Y++]<<A,A+=8}if(ae-=X,P.total_out+=ae,p.total+=ae,ae&&(P.adler=p.check=p.flags?s(p.check,Te,ae,ee-ae):d(p.check,Te,ae,ee-ae)),ae=X,(p.flags?T:b(T))!==p.check){P.msg="incorrect data check",p.mode=30;break}A=T=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;A<32;){if(H===0)break e;H--,T+=Q[Y++]<<A,A+=8}if(T!==(4294967295&p.total)){P.msg="incorrect length check",p.mode=30;break}A=T=0}p.mode=29;case 29:Z=1;break e;case 30:Z=-3;break e;case 31:return-4;case 32:default:return w}return P.next_out=ee,P.avail_out=X,P.next_in=Y,P.avail_in=H,p.hold=T,p.bits=A,(p.wsize||ae!==P.avail_out&&p.mode<30&&(p.mode<27||K!==4))&&be(P,P.output,P.next_out,ae-P.avail_out)?(p.mode=31,-4):(ce-=P.avail_in,ae-=P.avail_out,P.total_in+=ce,P.total_out+=ae,p.total+=ae,p.wrap&&ae&&(P.adler=p.check=p.flags?s(p.check,Te,ae,P.next_out-ae):d(p.check,Te,ae,P.next_out-ae)),P.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(ce==0&&ae===0||K===4)&&Z===k&&(Z=-5),Z)},m.inflateEnd=function(P){if(!P||!P.state)return w;var K=P.state;return K.window&&(K.window=null),P.state=null,k},m.inflateGetHeader=function(P,K){var p;return P&&P.state?(2&(p=P.state).wrap)==0?w:((p.head=K).done=!1,k):w},m.inflateSetDictionary=function(P,K){var p,Q=K.length;return P&&P.state?(p=P.state).wrap!==0&&p.mode!==11?w:p.mode===11&&d(1,K,Q,0)!==p.check?-3:be(P,K,Q,Q)?(p.mode=31,-4):(p.havedict=1,k):w},m.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,x,m){var u=l("../utils/common"),d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],g=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],y=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];x.exports=function(L,S,k,w,I,h,v,b){var M,N,B,F,$,q,le,J,de,be=b.bits,P=0,K=0,p=0,Q=0,Te=0,Y=0,ee=0,H=0,X=0,T=0,A=null,ce=0,ae=new u.Buf16(16),ne=new u.Buf16(16),Ce=null,Oe=0;for(P=0;P<=15;P++)ae[P]=0;for(K=0;K<w;K++)ae[S[k+K]]++;for(Te=be,Q=15;1<=Q&&ae[Q]===0;Q--);if(Q<Te&&(Te=Q),Q===0)return I[h++]=20971520,I[h++]=20971520,b.bits=1,0;for(p=1;p<Q&&ae[p]===0;p++);for(Te<p&&(Te=p),P=H=1;P<=15;P++)if(H<<=1,(H-=ae[P])<0)return-1;if(0<H&&(L===0||Q!==1))return-1;for(ne[1]=0,P=1;P<15;P++)ne[P+1]=ne[P]+ae[P];for(K=0;K<w;K++)S[k+K]!==0&&(v[ne[S[k+K]]++]=K);if(q=L===0?(A=Ce=v,19):L===1?(A=d,ce-=257,Ce=s,Oe-=257,256):(A=g,Ce=y,-1),P=p,$=h,ee=K=T=0,B=-1,F=(X=1<<(Y=Te))-1,L===1&&852<X||L===2&&592<X)return 1;for(;;){for(le=P-ee,de=v[K]<q?(J=0,v[K]):v[K]>q?(J=Ce[Oe+v[K]],A[ce+v[K]]):(J=96,0),M=1<<P-ee,p=N=1<<Y;I[$+(T>>ee)+(N-=M)]=le<<24|J<<16|de|0,N!==0;);for(M=1<<P-1;T&M;)M>>=1;if(M!==0?(T&=M-1,T+=M):T=0,K++,--ae[P]==0){if(P===Q)break;P=S[k+v[K]]}if(Te<P&&(T&F)!==B){for(ee===0&&(ee=Te),$+=p,H=1<<(Y=P-ee);Y+ee<Q&&!((H-=ae[Y+ee])<=0);)Y++,H<<=1;if(X+=1<<Y,L===1&&852<X||L===2&&592<X)return 1;I[B=T&F]=Te<<24|Y<<16|$-h|0}}return T!==0&&(I[$+T]=P-ee<<24|64<<16|0),b.bits=Te,0}},{"../utils/common":41}],51:[function(l,x,m){x.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,x,m){var u=l("../utils/common"),d=0,s=1;function g(C){for(var z=C.length;0<=--z;)C[z]=0}var y=0,L=29,S=256,k=S+1+L,w=30,I=19,h=2*k+1,v=15,b=16,M=7,N=256,B=16,F=17,$=18,q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],le=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],J=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],de=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],be=new Array(2*(k+2));g(be);var P=new Array(2*w);g(P);var K=new Array(512);g(K);var p=new Array(256);g(p);var Q=new Array(L);g(Q);var Te,Y,ee,H=new Array(w);function X(C,z,te,ie,U){this.static_tree=C,this.extra_bits=z,this.extra_base=te,this.elems=ie,this.max_length=U,this.has_stree=C&&C.length}function T(C,z){this.dyn_tree=C,this.max_code=0,this.stat_desc=z}function A(C){return C<256?K[C]:K[256+(C>>>7)]}function ce(C,z){C.pending_buf[C.pending++]=255&z,C.pending_buf[C.pending++]=z>>>8&255}function ae(C,z,te){C.bi_valid>b-te?(C.bi_buf|=z<<C.bi_valid&65535,ce(C,C.bi_buf),C.bi_buf=z>>b-C.bi_valid,C.bi_valid+=te-b):(C.bi_buf|=z<<C.bi_valid&65535,C.bi_valid+=te)}function ne(C,z,te){ae(C,te[2*z],te[2*z+1])}function Ce(C,z){for(var te=0;te|=1&C,C>>>=1,te<<=1,0<--z;);return te>>>1}function Oe(C,z,te){var ie,U,fe=new Array(v+1),we=0;for(ie=1;ie<=v;ie++)fe[ie]=we=we+te[ie-1]<<1;for(U=0;U<=z;U++){var ge=C[2*U+1];ge!==0&&(C[2*U]=Ce(fe[ge]++,ge))}}function ve(C){var z;for(z=0;z<k;z++)C.dyn_ltree[2*z]=0;for(z=0;z<w;z++)C.dyn_dtree[2*z]=0;for(z=0;z<I;z++)C.bl_tree[2*z]=0;C.dyn_ltree[2*N]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function _e(C){8<C.bi_valid?ce(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function je(C,z,te,ie){var U=2*z,fe=2*te;return C[U]<C[fe]||C[U]===C[fe]&&ie[z]<=ie[te]}function Fe(C,z,te){for(var ie=C.heap[te],U=te<<1;U<=C.heap_len&&(U<C.heap_len&&je(z,C.heap[U+1],C.heap[U],C.depth)&&U++,!je(z,ie,C.heap[U],C.depth));)C.heap[te]=C.heap[U],te=U,U<<=1;C.heap[te]=ie}function kn(C,z,te){var ie,U,fe,we,ge=0;if(C.last_lit!==0)for(;ie=C.pending_buf[C.d_buf+2*ge]<<8|C.pending_buf[C.d_buf+2*ge+1],U=C.pending_buf[C.l_buf+ge],ge++,ie===0?ne(C,U,z):(ne(C,(fe=p[U])+S+1,z),(we=q[fe])!==0&&ae(C,U-=Q[fe],we),ne(C,fe=A(--ie),te),(we=le[fe])!==0&&ae(C,ie-=H[fe],we)),ge<C.last_lit;);ne(C,N,z)}function ln(C,z){var te,ie,U,fe=z.dyn_tree,we=z.stat_desc.static_tree,ge=z.stat_desc.has_stree,Le=z.stat_desc.elems,Be=-1;for(C.heap_len=0,C.heap_max=h,te=0;te<Le;te++)fe[2*te]!==0?(C.heap[++C.heap_len]=Be=te,C.depth[te]=0):fe[2*te+1]=0;for(;C.heap_len<2;)fe[2*(U=C.heap[++C.heap_len]=Be<2?++Be:0)]=1,C.depth[U]=0,C.opt_len--,ge&&(C.static_len-=we[2*U+1]);for(z.max_code=Be,te=C.heap_len>>1;1<=te;te--)Fe(C,fe,te);for(U=Le;te=C.heap[1],C.heap[1]=C.heap[C.heap_len--],Fe(C,fe,1),ie=C.heap[1],C.heap[--C.heap_max]=te,C.heap[--C.heap_max]=ie,fe[2*U]=fe[2*te]+fe[2*ie],C.depth[U]=(C.depth[te]>=C.depth[ie]?C.depth[te]:C.depth[ie])+1,fe[2*te+1]=fe[2*ie+1]=U,C.heap[1]=U++,Fe(C,fe,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(Ae,fn){var jn,on,Lt,We,Ct,gr,xn=fn.dyn_tree,Gt=fn.max_code,hr=fn.stat_desc.static_tree,mr=fn.stat_desc.has_stree,wr=fn.stat_desc.extra_bits,Kn=fn.stat_desc.extra_base,In=fn.stat_desc.max_length,It=0;for(We=0;We<=v;We++)Ae.bl_count[We]=0;for(xn[2*Ae.heap[Ae.heap_max]+1]=0,jn=Ae.heap_max+1;jn<h;jn++)In<(We=xn[2*xn[2*(on=Ae.heap[jn])+1]+1]+1)&&(We=In,It++),xn[2*on+1]=We,Gt<on||(Ae.bl_count[We]++,Ct=0,Kn<=on&&(Ct=wr[on-Kn]),gr=xn[2*on],Ae.opt_len+=gr*(We+Ct),mr&&(Ae.static_len+=gr*(hr[2*on+1]+Ct)));if(It!==0){do{for(We=In-1;Ae.bl_count[We]===0;)We--;Ae.bl_count[We]--,Ae.bl_count[We+1]+=2,Ae.bl_count[In]--,It-=2}while(0<It);for(We=In;We!==0;We--)for(on=Ae.bl_count[We];on!==0;)Gt<(Lt=Ae.heap[--jn])||(xn[2*Lt+1]!==We&&(Ae.opt_len+=(We-xn[2*Lt+1])*xn[2*Lt],xn[2*Lt+1]=We),on--)}})(C,z),Oe(fe,Be,C.bl_count)}function o(C,z,te){var ie,U,fe=-1,we=z[1],ge=0,Le=7,Be=4;for(we===0&&(Le=138,Be=3),z[2*(te+1)+1]=65535,ie=0;ie<=te;ie++)U=we,we=z[2*(ie+1)+1],++ge<Le&&U===we||(ge<Be?C.bl_tree[2*U]+=ge:U!==0?(U!==fe&&C.bl_tree[2*U]++,C.bl_tree[2*B]++):ge<=10?C.bl_tree[2*F]++:C.bl_tree[2*$]++,fe=U,Be=(ge=0)===we?(Le=138,3):U===we?(Le=6,3):(Le=7,4))}function Z(C,z,te){var ie,U,fe=-1,we=z[1],ge=0,Le=7,Be=4;for(we===0&&(Le=138,Be=3),ie=0;ie<=te;ie++)if(U=we,we=z[2*(ie+1)+1],!(++ge<Le&&U===we)){if(ge<Be)for(;ne(C,U,C.bl_tree),--ge!=0;);else U!==0?(U!==fe&&(ne(C,U,C.bl_tree),ge--),ne(C,B,C.bl_tree),ae(C,ge-3,2)):ge<=10?(ne(C,F,C.bl_tree),ae(C,ge-3,3)):(ne(C,$,C.bl_tree),ae(C,ge-11,7));fe=U,Be=(ge=0)===we?(Le=138,3):U===we?(Le=6,3):(Le=7,4)}}g(H);var G=!1;function O(C,z,te,ie){ae(C,(y<<1)+(ie?1:0),3),(function(U,fe,we,ge){_e(U),ce(U,we),ce(U,~we),u.arraySet(U.pending_buf,U.window,fe,we,U.pending),U.pending+=we})(C,z,te)}m._tr_init=function(C){G||((function(){var z,te,ie,U,fe,we=new Array(v+1);for(U=ie=0;U<L-1;U++)for(Q[U]=ie,z=0;z<1<<q[U];z++)p[ie++]=U;for(p[ie-1]=U,U=fe=0;U<16;U++)for(H[U]=fe,z=0;z<1<<le[U];z++)K[fe++]=U;for(fe>>=7;U<w;U++)for(H[U]=fe<<7,z=0;z<1<<le[U]-7;z++)K[256+fe++]=U;for(te=0;te<=v;te++)we[te]=0;for(z=0;z<=143;)be[2*z+1]=8,z++,we[8]++;for(;z<=255;)be[2*z+1]=9,z++,we[9]++;for(;z<=279;)be[2*z+1]=7,z++,we[7]++;for(;z<=287;)be[2*z+1]=8,z++,we[8]++;for(Oe(be,k+1,we),z=0;z<w;z++)P[2*z+1]=5,P[2*z]=Ce(z,5);Te=new X(be,q,S+1,k,v),Y=new X(P,le,0,w,v),ee=new X(new Array(0),J,0,I,M)})(),G=!0),C.l_desc=new T(C.dyn_ltree,Te),C.d_desc=new T(C.dyn_dtree,Y),C.bl_desc=new T(C.bl_tree,ee),C.bi_buf=0,C.bi_valid=0,ve(C)},m._tr_stored_block=O,m._tr_flush_block=function(C,z,te,ie){var U,fe,we=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function(ge){var Le,Be=4093624447;for(Le=0;Le<=31;Le++,Be>>>=1)if(1&Be&&ge.dyn_ltree[2*Le]!==0)return d;if(ge.dyn_ltree[18]!==0||ge.dyn_ltree[20]!==0||ge.dyn_ltree[26]!==0)return s;for(Le=32;Le<S;Le++)if(ge.dyn_ltree[2*Le]!==0)return s;return d})(C)),ln(C,C.l_desc),ln(C,C.d_desc),we=(function(ge){var Le;for(o(ge,ge.dyn_ltree,ge.l_desc.max_code),o(ge,ge.dyn_dtree,ge.d_desc.max_code),ln(ge,ge.bl_desc),Le=I-1;3<=Le&&ge.bl_tree[2*de[Le]+1]===0;Le--);return ge.opt_len+=3*(Le+1)+5+5+4,Le})(C),U=C.opt_len+3+7>>>3,(fe=C.static_len+3+7>>>3)<=U&&(U=fe)):U=fe=te+5,te+4<=U&&z!==-1?O(C,z,te,ie):C.strategy===4||fe===U?(ae(C,2+(ie?1:0),3),kn(C,be,P)):(ae(C,4+(ie?1:0),3),(function(ge,Le,Be,Ae){var fn;for(ae(ge,Le-257,5),ae(ge,Be-1,5),ae(ge,Ae-4,4),fn=0;fn<Ae;fn++)ae(ge,ge.bl_tree[2*de[fn]+1],3);Z(ge,ge.dyn_ltree,Le-1),Z(ge,ge.dyn_dtree,Be-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,we+1),kn(C,C.dyn_ltree,C.dyn_dtree)),ve(C),ie&&_e(C)},m._tr_tally=function(C,z,te){return C.pending_buf[C.d_buf+2*C.last_lit]=z>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&z,C.pending_buf[C.l_buf+C.last_lit]=255&te,C.last_lit++,z===0?C.dyn_ltree[2*te]++:(C.matches++,z--,C.dyn_ltree[2*(p[te]+S+1)]++,C.dyn_dtree[2*A(z)]++),C.last_lit===C.lit_bufsize-1},m._tr_align=function(C){ae(C,2,3),ne(C,N,be),(function(z){z.bi_valid===16?(ce(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(l,x,m){x.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,x,m){(function(u){(function(d,s){if(!d.setImmediate){var g,y,L,S,k=1,w={},I=!1,h=d.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(d);v=v&&v.setTimeout?v:d,g={}.toString.call(d.process)==="[object process]"?function(B){process.nextTick(function(){M(B)})}:(function(){if(d.postMessage&&!d.importScripts){var B=!0,F=d.onmessage;return d.onmessage=function(){B=!1},d.postMessage("","*"),d.onmessage=F,B}})()?(S="setImmediate$"+Math.random()+"$",d.addEventListener?d.addEventListener("message",N,!1):d.attachEvent("onmessage",N),function(B){d.postMessage(S+B,"*")}):d.MessageChannel?((L=new MessageChannel).port1.onmessage=function(B){M(B.data)},function(B){L.port2.postMessage(B)}):h&&"onreadystatechange"in h.createElement("script")?(y=h.documentElement,function(B){var F=h.createElement("script");F.onreadystatechange=function(){M(B),F.onreadystatechange=null,y.removeChild(F),F=null},y.appendChild(F)}):function(B){setTimeout(M,0,B)},v.setImmediate=function(B){typeof B!="function"&&(B=new Function(""+B));for(var F=new Array(arguments.length-1),$=0;$<F.length;$++)F[$]=arguments[$+1];var q={callback:B,args:F};return w[k]=q,g(k),k++},v.clearImmediate=b}function b(B){delete w[B]}function M(B){if(I)setTimeout(M,0,B);else{var F=w[B];if(F){I=!0;try{(function($){var q=$.callback,le=$.args;switch(le.length){case 0:q();break;case 1:q(le[0]);break;case 2:q(le[0],le[1]);break;case 3:q(le[0],le[1],le[2]);break;default:q.apply(s,le)}})(F)}finally{b(B),I=!1}}}}function N(B){B.source===d&&typeof B.data=="string"&&B.data.indexOf(S)===0&&M(+B.data.slice(S.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof xt<"u"?xt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(uo)),uo.exports}var Sh=vh();const kh=Pd(Sh);var ga={exports:{}},xh=ga.exports,Nd;function Th(){return Nd||(Nd=1,(function(c,_){(function(l,x){x()})(xh,function(){function l(y,L){return typeof L>"u"?L={autoBom:!1}:typeof L!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),L={autoBom:!L}),L.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(y.type)?new Blob(["\uFEFF",y],{type:y.type}):y}function x(y,L,S){var k=new XMLHttpRequest;k.open("GET",y),k.responseType="blob",k.onload=function(){g(k.response,L,S)},k.onerror=function(){console.error("could not download file")},k.send()}function m(y){var L=new XMLHttpRequest;L.open("HEAD",y,!1);try{L.send()}catch{}return 200<=L.status&&299>=L.status}function u(y){try{y.dispatchEvent(new MouseEvent("click"))}catch{var L=document.createEvent("MouseEvents");L.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),y.dispatchEvent(L)}}var d=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof xt=="object"&&xt.global===xt?xt:void 0,s=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=d.saveAs||(typeof window!="object"||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(y,L,S){var k=d.URL||d.webkitURL,w=document.createElement("a");L=L||y.name||"download",w.download=L,w.rel="noopener",typeof y=="string"?(w.href=y,w.origin===location.origin?u(w):m(w.href)?x(y,L,S):u(w,w.target="_blank")):(w.href=k.createObjectURL(y),setTimeout(function(){k.revokeObjectURL(w.href)},4e4),setTimeout(function(){u(w)},0))}:"msSaveOrOpenBlob"in navigator?function(y,L,S){if(L=L||y.name||"download",typeof y!="string")navigator.msSaveOrOpenBlob(l(y,S),L);else if(m(y))x(y,L,S);else{var k=document.createElement("a");k.href=y,k.target="_blank",setTimeout(function(){u(k)})}}:function(y,L,S,k){if(k=k||open("","_blank"),k&&(k.document.title=k.document.body.innerText="downloading..."),typeof y=="string")return x(y,L,S);var w=y.type==="application/octet-stream",I=/constructor/i.test(d.HTMLElement)||d.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||w&&I||s)&&typeof FileReader<"u"){var v=new FileReader;v.onloadend=function(){var N=v.result;N=h?N:N.replace(/^data:[^;]*;/,"data:attachment/file;"),k?k.location.href=N:location=N,k=null},v.readAsDataURL(y)}else{var b=d.URL||d.webkitURL,M=b.createObjectURL(y);k?k.location=M:location.href=M,k=null,setTimeout(function(){b.revokeObjectURL(M)},4e4)}});d.saveAs=g.saveAs=g,c.exports=g})})(ga)),ga.exports}var bh=Th();function _h(){var S;const{folder:c}=Gp(),{currentPlugin:_,isLoading:l,error:x,fetchPluginDetail:m,clearCurrentPlugin:u}=oc(),[d,s]=he.useState(!1),[g,y]=he.useState(!1);he.useEffect(()=>(c&&m(c),()=>{u()}),[c,m,u]);const L=async()=>{if(_){s(!0);try{const k=new kh;if(_.pluginFiles)for(const[I,h]of Object.entries(_.pluginFiles))k.file(I,h);const w=await k.generateAsync({type:"blob"});bh.saveAs(w,`${_.folder}.zip`),y(!0),setTimeout(()=>y(!1),3e3)}catch(k){console.error("Failed to create zip:",k)}finally{s(!1)}}};return l?re.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:re.jsx(sc,{size:"md",text:"加载插件详情..."})}):x||!_?re.jsx("div",{className:"min-h-[60vh]",children:re.jsx(xo,{icon:"error",title:"加载失败",description:x||"插件不存在",action:re.jsx(ma,{to:"/",className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"返回列表"})})}):re.jsx("div",{className:"min-h-screen bg-white",children:re.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-6 sm:py-8",children:[re.jsxs(ma,{to:"/",className:"inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6",children:[re.jsx(bg,{className:"h-4 w-4"}),"返回插件列表"]}),re.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[re.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[re.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:_.name.charAt(0)}),re.jsxs("div",{className:"flex-1",children:[re.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[re.jsx("h1",{className:"text-xl font-bold text-gray-900",children:_.name}),re.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",_.version]})]}),re.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500",children:[re.jsx(Zd,{className:"h-4 w-4"}),_.author]})]})]}),re.jsx("p",{className:"text-gray-600",children:_.description||"暂无描述"})]}),re.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[re.jsx("h2",{className:"text-sm font-semibold text-gray-900 mb-2",children:"下载插件"}),re.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"下载包含所有文件的完整插件压缩包"}),re.jsx("button",{onClick:L,disabled:d,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:d?re.jsxs(re.Fragment,{children:[re.jsx($d,{className:"h-4 w-4 animate-spin"}),"正在打包..."]}):g?re.jsxs(re.Fragment,{children:[re.jsx(Kd,{className:"h-4 w-4"}),"下载成功"]}):re.jsxs(re.Fragment,{children:[re.jsx(Mg,{className:"h-4 w-4"}),"下载插件压缩包"]})})]}),((S=_.pluginFiles)==null?void 0:S["README.md"])&&re.jsxs("div",{className:"rounded-md border border-gray-200 p-5",children:[re.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[re.jsx(Ng,{className:"h-4 w-4 text-gray-500"}),re.jsx("h2",{className:"text-sm font-semibold text-gray-900",children:"插件说明"})]}),re.jsx("pre",{className:"whitespace-pre-wrap text-sm text-gray-600 bg-gray-50 rounded-md p-4 font-mono leading-relaxed",children:_.pluginFiles["README.md"]})]})]})})}function Lh(){return re.jsx(gg,{children:re.jsxs("div",{className:"min-h-screen bg-white",children:[re.jsx(Wg,{}),re.jsx("main",{children:re.jsxs(og,{children:[re.jsx(fo,{path:"/",element:re.jsx(yh,{})}),re.jsx(fo,{path:"/plugin/:folder",element:re.jsx(_h,{})})]})})]})})}pp.createRoot(document.getElementById("root")).render(re.jsx(he.StrictMode,{children:re.jsx(Lh,{})}));
