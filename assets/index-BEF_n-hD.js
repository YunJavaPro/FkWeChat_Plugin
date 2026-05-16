function Yy(e,i){for(var r=0;r<i.length;r++){const a=i[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const u=Object.getOwnPropertyDescriptor(a,s);u&&Object.defineProperty(e,s,u.get?u:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const l of u.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=r(s);fetch(s.href,u)}})();var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fa(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lu={exports:{}},xa={},su={exports:{}},en={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Jy(){if($f)return en;$f=1;var e=Symbol.for("react.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.iterator;function w(A){return A===null||typeof A!="object"?null:(A=g&&A[g]||A["@@iterator"],typeof A=="function"?A:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,S={};function _(A,P,M){this.props=A,this.context=P,this.refs=S,this.updater=M||m}_.prototype.isReactComponent={},_.prototype.setState=function(A,P){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,P,"setState")},_.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function k(){}k.prototype=_.prototype;function C(A,P,M){this.props=A,this.context=P,this.refs=S,this.updater=M||m}var I=C.prototype=new k;I.constructor=C,v(I,_.prototype),I.isPureReactComponent=!0;var D=Array.isArray,B=Object.prototype.hasOwnProperty,R={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function Q(A,P,M){var ue,le={},Ce=null,Ue=null;if(P!=null)for(ue in P.ref!==void 0&&(Ue=P.ref),P.key!==void 0&&(Ce=""+P.key),P)B.call(P,ue)&&!$.hasOwnProperty(ue)&&(le[ue]=P[ue]);var Ie=arguments.length-2;if(Ie===1)le.children=M;else if(1<Ie){for(var Pe=Array(Ie),Ye=0;Ye<Ie;Ye++)Pe[Ye]=arguments[Ye+2];le.children=Pe}if(A&&A.defaultProps)for(ue in Ie=A.defaultProps,Ie)le[ue]===void 0&&(le[ue]=Ie[ue]);return{$$typeof:e,type:A,key:Ce,ref:Ue,props:le,_owner:R.current}}function G(A,P){return{$$typeof:e,type:A.type,key:P,ref:A.ref,props:A.props,_owner:A._owner}}function U(A){return typeof A=="object"&&A!==null&&A.$$typeof===e}function oe(A){var P={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(M){return P[M]})}var O=/\/+/g;function Y(A,P){return typeof A=="object"&&A!==null&&A.key!=null?oe(""+A.key):P.toString(36)}function x(A,P,M,ue,le){var Ce=typeof A;(Ce==="undefined"||Ce==="boolean")&&(A=null);var Ue=!1;if(A===null)Ue=!0;else switch(Ce){case"string":case"number":Ue=!0;break;case"object":switch(A.$$typeof){case e:case i:Ue=!0}}if(Ue)return Ue=A,le=le(Ue),A=ue===""?"."+Y(Ue,0):ue,D(le)?(M="",A!=null&&(M=A.replace(O,"$&/")+"/"),x(le,P,M,"",function(Ye){return Ye})):le!=null&&(U(le)&&(le=G(le,M+(!le.key||Ue&&Ue.key===le.key?"":(""+le.key).replace(O,"$&/")+"/")+A)),P.push(le)),1;if(Ue=0,ue=ue===""?".":ue+":",D(A))for(var Ie=0;Ie<A.length;Ie++){Ce=A[Ie];var Pe=ue+Y(Ce,Ie);Ue+=x(Ce,P,M,Pe,le)}else if(Pe=w(A),typeof Pe=="function")for(A=Pe.call(A),Ie=0;!(Ce=A.next()).done;)Ce=Ce.value,Pe=ue+Y(Ce,Ie++),Ue+=x(Ce,P,M,Pe,le);else if(Ce==="object")throw P=String(A),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return Ue}function V(A,P,M){if(A==null)return A;var ue=[],le=0;return x(A,ue,"","",function(Ce){return P.call(M,Ce,le++)}),ue}function ge(A){if(A._status===-1){var P=A._result;P=P(),P.then(function(M){(A._status===0||A._status===-1)&&(A._status=1,A._result=M)},function(M){(A._status===0||A._status===-1)&&(A._status=2,A._result=M)}),A._status===-1&&(A._status=0,A._result=P)}if(A._status===1)return A._result.default;throw A._result}var ie={current:null},ne={transition:null},Z={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:ne,ReactCurrentOwner:R};function L(){throw Error("act(...) is not supported in production builds of React.")}return en.Children={map:V,forEach:function(A,P,M){V(A,function(){P.apply(this,arguments)},M)},count:function(A){var P=0;return V(A,function(){P++}),P},toArray:function(A){return V(A,function(P){return P})||[]},only:function(A){if(!U(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},en.Component=_,en.Fragment=r,en.Profiler=s,en.PureComponent=C,en.StrictMode=a,en.Suspense=f,en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,en.act=L,en.cloneElement=function(A,P,M){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var ue=v({},A.props),le=A.key,Ce=A.ref,Ue=A._owner;if(P!=null){if(P.ref!==void 0&&(Ce=P.ref,Ue=R.current),P.key!==void 0&&(le=""+P.key),A.type&&A.type.defaultProps)var Ie=A.type.defaultProps;for(Pe in P)B.call(P,Pe)&&!$.hasOwnProperty(Pe)&&(ue[Pe]=P[Pe]===void 0&&Ie!==void 0?Ie[Pe]:P[Pe])}var Pe=arguments.length-2;if(Pe===1)ue.children=M;else if(1<Pe){Ie=Array(Pe);for(var Ye=0;Ye<Pe;Ye++)Ie[Ye]=arguments[Ye+2];ue.children=Ie}return{$$typeof:e,type:A.type,key:le,ref:Ce,props:ue,_owner:Ue}},en.createContext=function(A){return A={$$typeof:l,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:u,_context:A},A.Consumer=A},en.createElement=Q,en.createFactory=function(A){var P=Q.bind(null,A);return P.type=A,P},en.createRef=function(){return{current:null}},en.forwardRef=function(A){return{$$typeof:c,render:A}},en.isValidElement=U,en.lazy=function(A){return{$$typeof:h,_payload:{_status:-1,_result:A},_init:ge}},en.memo=function(A,P){return{$$typeof:p,type:A,compare:P===void 0?null:P}},en.startTransition=function(A){var P=ne.transition;ne.transition={};try{A()}finally{ne.transition=P}},en.unstable_act=L,en.useCallback=function(A,P){return ie.current.useCallback(A,P)},en.useContext=function(A){return ie.current.useContext(A)},en.useDebugValue=function(){},en.useDeferredValue=function(A){return ie.current.useDeferredValue(A)},en.useEffect=function(A,P){return ie.current.useEffect(A,P)},en.useId=function(){return ie.current.useId()},en.useImperativeHandle=function(A,P,M){return ie.current.useImperativeHandle(A,P,M)},en.useInsertionEffect=function(A,P){return ie.current.useInsertionEffect(A,P)},en.useLayoutEffect=function(A,P){return ie.current.useLayoutEffect(A,P)},en.useMemo=function(A,P){return ie.current.useMemo(A,P)},en.useReducer=function(A,P,M){return ie.current.useReducer(A,P,M)},en.useRef=function(A){return ie.current.useRef(A)},en.useState=function(A){return ie.current.useState(A)},en.useSyncExternalStore=function(A,P,M){return ie.current.useSyncExternalStore(A,P,M)},en.useTransition=function(){return ie.current.useTransition()},en.version="18.3.1",en}var Gf;function ac(){return Gf||(Gf=1,su.exports=Jy()),su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function Zy(){if(Kf)return xa;Kf=1;var e=ac(),i=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function l(c,f,p){var h,g={},w=null,m=null;p!==void 0&&(w=""+p),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(m=f.ref);for(h in f)a.call(f,h)&&!u.hasOwnProperty(h)&&(g[h]=f[h]);if(c&&c.defaultProps)for(h in f=c.defaultProps,f)g[h]===void 0&&(g[h]=f[h]);return{$$typeof:i,type:c,key:w,ref:m,props:g,_owner:s.current}}return xa.Fragment=r,xa.jsx=l,xa.jsxs=l,xa}var qf;function Xy(){return qf||(qf=1,lu.exports=Zy()),lu.exports}var ae=Xy(),Ae=ac();const La=Fa(Ae),Qy=Yy({__proto__:null,default:La},[Ae]);var Xo={},uu={exports:{}},mt={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function ew(){return Yf||(Yf=1,(function(e){function i(ne,Z){var L=ne.length;ne.push(Z);e:for(;0<L;){var A=L-1>>>1,P=ne[A];if(0<s(P,Z))ne[A]=Z,ne[L]=P,L=A;else break e}}function r(ne){return ne.length===0?null:ne[0]}function a(ne){if(ne.length===0)return null;var Z=ne[0],L=ne.pop();if(L!==Z){ne[0]=L;e:for(var A=0,P=ne.length,M=P>>>1;A<M;){var ue=2*(A+1)-1,le=ne[ue],Ce=ue+1,Ue=ne[Ce];if(0>s(le,L))Ce<P&&0>s(Ue,le)?(ne[A]=Ue,ne[Ce]=L,A=Ce):(ne[A]=le,ne[ue]=L,A=ue);else if(Ce<P&&0>s(Ue,L))ne[A]=Ue,ne[Ce]=L,A=Ce;else break e}}return Z}function s(ne,Z){var L=ne.sortIndex-Z.sortIndex;return L!==0?L:ne.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var f=[],p=[],h=1,g=null,w=3,m=!1,v=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(ne){for(var Z=r(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=ne)a(p),Z.sortIndex=Z.expirationTime,i(f,Z);else break;Z=r(p)}}function D(ne){if(S=!1,I(ne),!v)if(r(f)!==null)v=!0,ge(B);else{var Z=r(p);Z!==null&&ie(D,Z.startTime-ne)}}function B(ne,Z){v=!1,S&&(S=!1,k(Q),Q=-1),m=!0;var L=w;try{for(I(Z),g=r(f);g!==null&&(!(g.expirationTime>Z)||ne&&!oe());){var A=g.callback;if(typeof A=="function"){g.callback=null,w=g.priorityLevel;var P=A(g.expirationTime<=Z);Z=e.unstable_now(),typeof P=="function"?g.callback=P:g===r(f)&&a(f),I(Z)}else a(f);g=r(f)}if(g!==null)var M=!0;else{var ue=r(p);ue!==null&&ie(D,ue.startTime-Z),M=!1}return M}finally{g=null,w=L,m=!1}}var R=!1,$=null,Q=-1,G=5,U=-1;function oe(){return!(e.unstable_now()-U<G)}function O(){if($!==null){var ne=e.unstable_now();U=ne;var Z=!0;try{Z=$(!0,ne)}finally{Z?Y():(R=!1,$=null)}}else R=!1}var Y;if(typeof C=="function")Y=function(){C(O)};else if(typeof MessageChannel<"u"){var x=new MessageChannel,V=x.port2;x.port1.onmessage=O,Y=function(){V.postMessage(null)}}else Y=function(){_(O,0)};function ge(ne){$=ne,R||(R=!0,Y())}function ie(ne,Z){Q=_(function(){ne(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ne){ne.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,ge(B))},e.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<ne?Math.floor(1e3/ne):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(ne){switch(w){case 1:case 2:case 3:var Z=3;break;default:Z=w}var L=w;w=Z;try{return ne()}finally{w=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ne,Z){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var L=w;w=ne;try{return Z()}finally{w=L}},e.unstable_scheduleCallback=function(ne,Z,L){var A=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?A+L:A):L=A,ne){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=L+P,ne={id:h++,callback:Z,priorityLevel:ne,startTime:L,expirationTime:P,sortIndex:-1},L>A?(ne.sortIndex=L,i(p,ne),r(f)===null&&ne===r(p)&&(S?(k(Q),Q=-1):S=!0,ie(D,L-A))):(ne.sortIndex=P,i(f,ne),v||m||(v=!0,ge(B))),ne},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(ne){var Z=w;return function(){var L=w;w=Z;try{return ne.apply(this,arguments)}finally{w=L}}}})(du)),du}var Jf;function nw(){return Jf||(Jf=1,cu.exports=ew()),cu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function tw(){if(Zf)return mt;Zf=1;var e=ac(),i=nw();function r(n){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function u(n,t){l(n,t),l(n+"Capture",t)}function l(n,t){for(s[n]=t,n=0;n<t.length;n++)a.add(t[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},g={};function w(n){return f.call(g,n)?!0:f.call(h,n)?!1:p.test(n)?g[n]=!0:(h[n]=!0,!1)}function m(n,t,o,d){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return d?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,t,o,d){if(t===null||typeof t>"u"||m(n,t,o,d))return!0;if(d)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function S(n,t,o,d,y,b,T){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=d,this.attributeNamespace=y,this.mustUseProperty=o,this.propertyName=n,this.type=t,this.sanitizeURL=b,this.removeEmptyString=T}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new S(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var t=n[0];_[t]=new S(t,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new S(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new S(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new S(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new S(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new S(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new S(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new S(n,5,!1,n.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var t=n.replace(k,C);_[t]=new S(t,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var t=n.replace(k,C);_[t]=new S(t,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var t=n.replace(k,C);_[t]=new S(t,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new S(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new S(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,t,o,d){var y=_.hasOwnProperty(t)?_[t]:null;(y!==null?y.type!==0:d||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(v(t,o,y,d)&&(o=null),d||y===null?w(t)&&(o===null?n.removeAttribute(t):n.setAttribute(t,""+o)):y.mustUseProperty?n[y.propertyName]=o===null?y.type===3?!1:"":o:(t=y.attributeName,d=y.attributeNamespace,o===null?n.removeAttribute(t):(y=y.type,o=y===3||y===4&&o===!0?"":""+o,d?n.setAttributeNS(d,t,o):n.setAttribute(t,o))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),R=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),oe=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),ne=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var L=Object.assign,A;function P(n){if(A===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+n}var M=!1;function ue(n,t){if(!n||M)return"";M=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(re){var d=re}Reflect.construct(n,[],t)}else{try{t.call()}catch(re){d=re}n.call(t.prototype)}else{try{throw Error()}catch(re){d=re}n()}}catch(re){if(re&&d&&typeof re.stack=="string"){for(var y=re.stack.split(`
`),b=d.stack.split(`
`),T=y.length-1,z=b.length-1;1<=T&&0<=z&&y[T]!==b[z];)z--;for(;1<=T&&0<=z;T--,z--)if(y[T]!==b[z]){if(T!==1||z!==1)do if(T--,z--,0>z||y[T]!==b[z]){var W=`
`+y[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=z);break}}}finally{M=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?P(n):""}function le(n){switch(n.tag){case 5:return P(n.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return n=ue(n.type,!1),n;case 11:return n=ue(n.type.render,!1),n;case 1:return n=ue(n.type,!0),n;default:return""}}function Ce(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case $:return"Fragment";case R:return"Portal";case G:return"Profiler";case Q:return"StrictMode";case Y:return"Suspense";case x:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case oe:return(n.displayName||"Context")+".Consumer";case U:return(n._context.displayName||"Context")+".Provider";case O:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return t=n.displayName||null,t!==null?t:Ce(n.type)||"Memo";case ge:t=n._payload,n=n._init;try{return Ce(n(t))}catch{}}return null}function Ue(n){var t=n.type;switch(n.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=t.render,n=n.displayName||n.name||"",t.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ie(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ye(n){var t=Pe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,t),d=""+n[t];if(!n.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var y=o.get,b=o.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return y.call(this)},set:function(T){d=""+T,b.call(this,T)}}),Object.defineProperty(n,t,{enumerable:o.enumerable}),{getValue:function(){return d},setValue:function(T){d=""+T},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function an(n){n._valueTracker||(n._valueTracker=Ye(n))}function Fn(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var o=t.getValue(),d="";return n&&(d=Pe(n)?n.checked?"true":"false":n.value),n=d,n!==o?(t.setValue(n),!0):!1}function In(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function E(n,t){var o=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function se(n,t){var o=t.defaultValue==null?"":t.defaultValue,d=t.checked!=null?t.checked:t.defaultChecked;o=Ie(t.value!=null?t.value:o),n._wrapperState={initialChecked:d,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function J(n,t){t=t.checked,t!=null&&I(n,"checked",t,!1)}function F(n,t){J(n,t);var o=Ie(t.value),d=t.type;if(o!=null)d==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?K(n,t.type,o):t.hasOwnProperty("defaultValue")&&K(n,t.type,Ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function N(n,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var d=t.type;if(!(d!=="submit"&&d!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+n._wrapperState.initialValue,o||t===n.value||(n.value=t),n.defaultValue=t}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function K(n,t,o){(t!=="number"||In(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var de=Array.isArray;function pe(n,t,o,d){if(n=n.options,t){t={};for(var y=0;y<o.length;y++)t["$"+o[y]]=!0;for(o=0;o<n.length;o++)y=t.hasOwnProperty("$"+n[o].value),n[o].selected!==y&&(n[o].selected=y),y&&d&&(n[o].defaultSelected=!0)}else{for(o=""+Ie(o),t=null,y=0;y<n.length;y++){if(n[y].value===o){n[y].selected=!0,d&&(n[y].defaultSelected=!0);return}t!==null||n[y].disabled||(t=n[y])}t!==null&&(t.selected=!0)}}function ee(n,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function we(n,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(r(92));if(de(o)){if(1<o.length)throw Error(r(93));o=o[0]}t=o}t==null&&(t=""),o=t}n._wrapperState={initialValue:Ie(o)}}function Ee(n,t){var o=Ie(t.value),d=Ie(t.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),t.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),d!=null&&(n.defaultValue=""+d)}function be(n){var t=n.textContent;t===n._wrapperState.initialValue&&t!==""&&t!==null&&(n.value=t)}function q(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fe(n,t){return n==null||n==="http://www.w3.org/1999/xhtml"?q(t):n==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var _e,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,d,y){MSApp.execUnsafeLocalFunction(function(){return n(t,o,d,y)})}:n})(function(n,t){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=t;else{for(_e=_e||document.createElement("div"),_e.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_e.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;t.firstChild;)n.appendChild(t.firstChild)}});function Ze(n,t){if(t){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=t;return}}n.textContent=t}var dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gn=["Webkit","ms","Moz","O"];Object.keys(dn).forEach(function(n){Gn.forEach(function(t){t=t+n.charAt(0).toUpperCase()+n.substring(1),dn[t]=dn[n]})});function rn(n,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||dn.hasOwnProperty(n)&&dn[n]?(""+t).trim():t+"px"}function Yn(n,t){n=n.style;for(var o in t)if(t.hasOwnProperty(o)){var d=o.indexOf("--")===0,y=rn(o,t[o],d);o==="float"&&(o="cssFloat"),d?n.setProperty(o,y):n[o]=y}}var bt=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fn(n,t){if(t){if(bt[n]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,n));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!="object")throw Error(r(62))}}function tt(n,t){if(n.indexOf("-")===-1)return typeof t.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zn=null;function cr(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var dr=null,Pt=null,rt=null;function ct(n){if(n=ua(n)){if(typeof dr!="function")throw Error(r(280));var t=n.stateNode;t&&(t=po(t),dr(n.stateNode,n.type,t))}}function j(n){Pt?rt?rt.push(n):rt=[n]:Pt=n}function ce(){if(Pt){var n=Pt,t=rt;if(rt=Pt=null,ct(n),t)for(n=0;n<t.length;n++)ct(t[n])}}function Te(n,t){return n(t)}function Ke(){}var bn=!1;function vn(n,t,o){if(bn)return n(t,o);bn=!0;try{return Te(n,t,o)}finally{bn=!1,(Pt!==null||rt!==null)&&(Ke(),ce())}}function Oe(n,t){var o=n.stateNode;if(o===null)return null;var d=po(o);if(d===null)return null;o=d[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(r(231,t,typeof o));return o}var Me=!1;if(c)try{var Ve={};Object.defineProperty(Ve,"passive",{get:function(){Me=!0}}),window.addEventListener("test",Ve,Ve),window.removeEventListener("test",Ve,Ve)}catch{Me=!1}function Rn(n,t,o,d,y,b,T,z,W){var re=Array.prototype.slice.call(arguments,3);try{t.apply(o,re)}catch(me){this.onError(me)}}var mn=!1,Ht=null,fr=!1,zr=null,Cl={onError:function(n){mn=!0,Ht=n}};function Wi(n,t,o,d,y,b,T,z,W){mn=!1,Ht=null,Rn.apply(Cl,arguments)}function Il(n,t,o,d,y,b,T,z,W){if(Wi.apply(this,arguments),mn){if(mn){var re=Ht;mn=!1,Ht=null}else throw Error(r(198));fr||(fr=!0,zr=re)}}function er(n){var t=n,o=n;if(n.alternate)for(;t.return;)t=t.return;else{n=t;do t=n,(t.flags&4098)!==0&&(o=t.return),n=t.return;while(n)}return t.tag===3?o:null}function Ha(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function Hi(n){if(er(n)!==n)throw Error(r(188))}function ui(n){var t=n.alternate;if(!t){if(t=er(n),t===null)throw Error(r(188));return t!==n?null:n}for(var o=n,d=t;;){var y=o.return;if(y===null)break;var b=y.alternate;if(b===null){if(d=y.return,d!==null){o=d;continue}break}if(y.child===b.child){for(b=y.child;b;){if(b===o)return Hi(y),n;if(b===d)return Hi(y),t;b=b.sibling}throw Error(r(188))}if(o.return!==d.return)o=y,d=b;else{for(var T=!1,z=y.child;z;){if(z===o){T=!0,o=y,d=b;break}if(z===d){T=!0,d=y,o=b;break}z=z.sibling}if(!T){for(z=b.child;z;){if(z===o){T=!0,o=b,d=y;break}if(z===d){T=!0,d=b,o=y;break}z=z.sibling}if(!T)throw Error(r(189))}}if(o.alternate!==d)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?n:t}function $a(n){return n=ui(n),n!==null?Ga(n):null}function Ga(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var t=Ga(n);if(t!==null)return t;n=n.sibling}return null}var Ka=i.unstable_scheduleCallback,Dt=i.unstable_cancelCallback,qa=i.unstable_shouldYield,Ya=i.unstable_requestPaint,xn=i.unstable_now,Al=i.unstable_getCurrentPriorityLevel,$i=i.unstable_ImmediatePriority,Ur=i.unstable_UserBlockingPriority,ci=i.unstable_NormalPriority,ke=i.unstable_LowPriority,ze=i.unstable_IdlePriority,Qe=null,nn=null;function Mn(n){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Qe,n,void 0,(n.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:it,$t=Math.log,di=Math.LN2;function it(n){return n>>>=0,n===0?32:31-($t(n)/di|0)|0}var at=64,jr=4194304;function pr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Vr(n,t){var o=n.pendingLanes;if(o===0)return 0;var d=0,y=n.suspendedLanes,b=n.pingedLanes,T=o&268435455;if(T!==0){var z=T&~y;z!==0?d=pr(z):(b&=T,b!==0&&(d=pr(b)))}else T=o&~y,T!==0?d=pr(T):b!==0&&(d=pr(b));if(d===0)return 0;if(t!==0&&t!==d&&(t&y)===0&&(y=d&-d,b=t&-t,y>=b||y===16&&(b&4194240)!==0))return t;if((d&4)!==0&&(d|=o&16),t=n.entangledLanes,t!==0)for(n=n.entanglements,t&=d;0<t;)o=31-En(t),y=1<<o,d|=n[o],t&=~y;return d}function Ll(n,t){switch(n){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(n,t){for(var o=n.suspendedLanes,d=n.pingedLanes,y=n.expirationTimes,b=n.pendingLanes;0<b;){var T=31-En(b),z=1<<T,W=y[T];W===-1?((z&o)===0||(z&d)!==0)&&(y[T]=Ll(z,t)):W<=t&&(n.expiredLanes|=z),b&=~z}}function Gi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ja(){var n=at;return at<<=1,(at&4194240)===0&&(at=64),n}function gr(n){for(var t=[],o=0;31>o;o++)t.push(n);return t}function hr(n,t,o){n.pendingLanes|=t,t!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,t=31-En(t),n[t]=o}function Ct(n,t){var o=n.pendingLanes&~t;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=t,n.mutableReadLanes&=t,n.entangledLanes&=t,t=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<o;){var y=31-En(o),b=1<<y;t[y]=0,d[y]=-1,n[y]=-1,o&=~b}}function Ki(n,t){var o=n.entangledLanes|=t;for(n=n.entanglements;o;){var d=31-En(o),y=1<<d;y&t|n[d]&t&&(n[d]|=t),o&=~y}}var sn=0;function Je(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qi,On,pn,Wr,Gt,Hr=!1,mr=[],xe=null,Ne=null,Ge=null,on=new Map,An=new Map,Vn=[],Ol="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(n,t){switch(n){case"focusin":case"focusout":xe=null;break;case"dragenter":case"dragleave":Ne=null;break;case"mouseover":case"mouseout":Ge=null;break;case"pointerover":case"pointerout":on.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function Yi(n,t,o,d,y,b){return n===null||n.nativeEvent!==b?(n={blockedOn:t,domEventName:o,eventSystemFlags:d,nativeEvent:b,targetContainers:[y]},t!==null&&(t=ua(t),t!==null&&On(t)),n):(n.eventSystemFlags|=d,t=n.targetContainers,y!==null&&t.indexOf(y)===-1&&t.push(y),n)}function wm(n,t,o,d,y){switch(t){case"focusin":return xe=Yi(xe,n,t,o,d,y),!0;case"dragenter":return Ne=Yi(Ne,n,t,o,d,y),!0;case"mouseover":return Ge=Yi(Ge,n,t,o,d,y),!0;case"pointerover":var b=y.pointerId;return on.set(b,Yi(on.get(b)||null,n,t,o,d,y)),!0;case"gotpointercapture":return b=y.pointerId,An.set(b,Yi(An.get(b)||null,n,t,o,d,y)),!0}return!1}function Ic(n){var t=$r(n.target);if(t!==null){var o=er(t);if(o!==null){if(t=o.tag,t===13){if(t=Ha(o),t!==null){n.blockedOn=t,Gt(n.priority,function(){pn(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xa(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var o=Rl(n.domEventName,n.eventSystemFlags,t[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var d=new o.constructor(o.type,o);zn=d,o.target.dispatchEvent(d),zn=null}else return t=ua(o),t!==null&&On(t),n.blockedOn=o,!1;t.shift()}return!0}function Ac(n,t,o){Xa(n)&&o.delete(t)}function bm(){Hr=!1,xe!==null&&Xa(xe)&&(xe=null),Ne!==null&&Xa(Ne)&&(Ne=null),Ge!==null&&Xa(Ge)&&(Ge=null),on.forEach(Ac),An.forEach(Ac)}function Ji(n,t){n.blockedOn===t&&(n.blockedOn=null,Hr||(Hr=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,bm)))}function Zi(n){function t(y){return Ji(y,n)}if(0<mr.length){Ji(mr[0],n);for(var o=1;o<mr.length;o++){var d=mr[o];d.blockedOn===n&&(d.blockedOn=null)}}for(xe!==null&&Ji(xe,n),Ne!==null&&Ji(Ne,n),Ge!==null&&Ji(Ge,n),on.forEach(t),An.forEach(t),o=0;o<Vn.length;o++)d=Vn[o],d.blockedOn===n&&(d.blockedOn=null);for(;0<Vn.length&&(o=Vn[0],o.blockedOn===null);)Ic(o),o.blockedOn===null&&Vn.shift()}var fi=D.ReactCurrentBatchConfig,Qa=!0;function Sm(n,t,o,d){var y=sn,b=fi.transition;fi.transition=null;try{sn=1,Nl(n,t,o,d)}finally{sn=y,fi.transition=b}}function km(n,t,o,d){var y=sn,b=fi.transition;fi.transition=null;try{sn=4,Nl(n,t,o,d)}finally{sn=y,fi.transition=b}}function Nl(n,t,o,d){if(Qa){var y=Rl(n,t,o,d);if(y===null)Zl(n,t,d,eo,o),Za(n,d);else if(wm(y,n,t,o,d))d.stopPropagation();else if(Za(n,d),t&4&&-1<Ol.indexOf(n)){for(;y!==null;){var b=ua(y);if(b!==null&&qi(b),b=Rl(n,t,o,d),b===null&&Zl(n,t,d,eo,o),b===y)break;y=b}y!==null&&d.stopPropagation()}else Zl(n,t,d,null,o)}}var eo=null;function Rl(n,t,o,d){if(eo=null,n=cr(d),n=$r(n),n!==null)if(t=er(n),t===null)n=null;else if(o=t.tag,o===13){if(n=Ha(t),n!==null)return n;n=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null);return eo=n,null}function Lc(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Al()){case $i:return 1;case Ur:return 4;case ci:case ke:return 16;case ze:return 536870912;default:return 16}default:return 16}}var yr=null,Pl=null,no=null;function Mc(){if(no)return no;var n,t=Pl,o=t.length,d,y="value"in yr?yr.value:yr.textContent,b=y.length;for(n=0;n<o&&t[n]===y[n];n++);var T=o-n;for(d=1;d<=T&&t[o-d]===y[b-d];d++);return no=y.slice(n,1<d?1-d:void 0)}function to(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function ro(){return!0}function Oc(){return!1}function St(n){function t(o,d,y,b,T){this._reactName=o,this._targetInst=y,this.type=d,this.nativeEvent=b,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(o=n[z],this[z]=o?o(b):b[z]);return this.isDefaultPrevented=(b.defaultPrevented!=null?b.defaultPrevented:b.returnValue===!1)?ro:Oc,this.isPropagationStopped=Oc,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),t}var pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=St(pi),Xi=L({},pi,{view:0,detail:0}),vm=St(Xi),Bl,Fl,Qi,io=L({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ul,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Qi&&(Qi&&n.type==="mousemove"?(Bl=n.screenX-Qi.screenX,Fl=n.screenY-Qi.screenY):Fl=Bl=0,Qi=n),Bl)},movementY:function(n){return"movementY"in n?n.movementY:Fl}}),Nc=St(io),_m=L({},io,{dataTransfer:0}),xm=St(_m),Em=L({},Xi,{relatedTarget:0}),zl=St(Em),Tm=L({},pi,{animationName:0,elapsedTime:0,pseudoElement:0}),Cm=St(Tm),Im=L({},pi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Am=St(Im),Lm=L({},pi,{data:0}),Rc=St(Lm),Mm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Om={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rm(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=Nm[n])?!!t[n]:!1}function Ul(){return Rm}var Pm=L({},Xi,{key:function(n){if(n.key){var t=Mm[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=to(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Om[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ul,charCode:function(n){return n.type==="keypress"?to(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?to(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Dm=St(Pm),Bm=L({},io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=St(Bm),Fm=L({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ul}),zm=St(Fm),Um=L({},pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=St(Um),Vm=L({},io,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wm=St(Vm),Hm=[9,13,27,32],jl=c&&"CompositionEvent"in window,ea=null;c&&"documentMode"in document&&(ea=document.documentMode);var $m=c&&"TextEvent"in window&&!ea,Dc=c&&(!jl||ea&&8<ea&&11>=ea),Bc=" ",Fc=!1;function zc(n,t){switch(n){case"keyup":return Hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gi=!1;function Gm(n,t){switch(n){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(Fc=!0,Bc);case"textInput":return n=t.data,n===Bc&&Fc?null:n;default:return null}}function Km(n,t){if(gi)return n==="compositionend"||!jl&&zc(n,t)?(n=Mc(),no=Pl=yr=null,gi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dc&&t.locale!=="ko"?null:t.data;default:return null}}var qm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!qm[n.type]:t==="textarea"}function Vc(n,t,o,d){j(d),t=uo(t,"onChange"),0<t.length&&(o=new Dl("onChange","change",null,o,d),n.push({event:o,listeners:t}))}var na=null,ta=null;function Ym(n){od(n,0)}function ao(n){var t=bi(n);if(Fn(t))return n}function Jm(n,t){if(n==="change")return t}var Wc=!1;if(c){var Vl;if(c){var Wl="oninput"in document;if(!Wl){var Hc=document.createElement("div");Hc.setAttribute("oninput","return;"),Wl=typeof Hc.oninput=="function"}Vl=Wl}else Vl=!1;Wc=Vl&&(!document.documentMode||9<document.documentMode)}function $c(){na&&(na.detachEvent("onpropertychange",Gc),ta=na=null)}function Gc(n){if(n.propertyName==="value"&&ao(ta)){var t=[];Vc(t,ta,n,cr(n)),vn(Ym,t)}}function Zm(n,t,o){n==="focusin"?($c(),na=t,ta=o,na.attachEvent("onpropertychange",Gc)):n==="focusout"&&$c()}function Xm(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ao(ta)}function Qm(n,t){if(n==="click")return ao(t)}function ey(n,t){if(n==="input"||n==="change")return ao(t)}function ny(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Bt=typeof Object.is=="function"?Object.is:ny;function ra(n,t){if(Bt(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var o=Object.keys(n),d=Object.keys(t);if(o.length!==d.length)return!1;for(d=0;d<o.length;d++){var y=o[d];if(!f.call(t,y)||!Bt(n[y],t[y]))return!1}return!0}function Kc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qc(n,t){var o=Kc(n);n=0;for(var d;o;){if(o.nodeType===3){if(d=n+o.textContent.length,n<=t&&d>=t)return{node:o,offset:t-n};n=d}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kc(o)}}function Yc(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Yc(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var n=window,t=In();t instanceof n.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)n=t.contentWindow;else break;t=In(n.document)}return t}function Hl(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}function ty(n){var t=Jc(),o=n.focusedElem,d=n.selectionRange;if(t!==o&&o&&o.ownerDocument&&Yc(o.ownerDocument.documentElement,o)){if(d!==null&&Hl(o)){if(t=d.start,n=d.end,n===void 0&&(n=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(n,o.value.length);else if(n=(t=o.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var y=o.textContent.length,b=Math.min(d.start,y);d=d.end===void 0?b:Math.min(d.end,y),!n.extend&&b>d&&(y=d,d=b,b=y),y=qc(o,b);var T=qc(o,d);y&&T&&(n.rangeCount!==1||n.anchorNode!==y.node||n.anchorOffset!==y.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(t=t.createRange(),t.setStart(y.node,y.offset),n.removeAllRanges(),b>d?(n.addRange(t),n.extend(T.node,T.offset)):(t.setEnd(T.node,T.offset),n.addRange(t)))}}for(t=[],n=o;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)n=t[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ry=c&&"documentMode"in document&&11>=document.documentMode,hi=null,$l=null,ia=null,Gl=!1;function Zc(n,t,o){var d=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Gl||hi==null||hi!==In(d)||(d=hi,"selectionStart"in d&&Hl(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),ia&&ra(ia,d)||(ia=d,d=uo($l,"onSelect"),0<d.length&&(t=new Dl("onSelect","select",null,t,o),n.push({event:t,listeners:d}),t.target=hi)))}function oo(n,t){var o={};return o[n.toLowerCase()]=t.toLowerCase(),o["Webkit"+n]="webkit"+t,o["Moz"+n]="moz"+t,o}var mi={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},Kl={},Xc={};c&&(Xc=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function lo(n){if(Kl[n])return Kl[n];if(!mi[n])return n;var t=mi[n],o;for(o in t)if(t.hasOwnProperty(o)&&o in Xc)return Kl[n]=t[o];return n}var Qc=lo("animationend"),ed=lo("animationiteration"),nd=lo("animationstart"),td=lo("transitionend"),rd=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(n,t){rd.set(n,t),u(t,[n])}for(var ql=0;ql<id.length;ql++){var Yl=id[ql],iy=Yl.toLowerCase(),ay=Yl[0].toUpperCase()+Yl.slice(1);wr(iy,"on"+ay)}wr(Qc,"onAnimationEnd"),wr(ed,"onAnimationIteration"),wr(nd,"onAnimationStart"),wr("dblclick","onDoubleClick"),wr("focusin","onFocus"),wr("focusout","onBlur"),wr(td,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function ad(n,t,o){var d=n.type||"unknown-event";n.currentTarget=o,Il(d,t,void 0,n),n.currentTarget=null}function od(n,t){t=(t&4)!==0;for(var o=0;o<n.length;o++){var d=n[o],y=d.event;d=d.listeners;e:{var b=void 0;if(t)for(var T=d.length-1;0<=T;T--){var z=d[T],W=z.instance,re=z.currentTarget;if(z=z.listener,W!==b&&y.isPropagationStopped())break e;ad(y,z,re),b=W}else for(T=0;T<d.length;T++){if(z=d[T],W=z.instance,re=z.currentTarget,z=z.listener,W!==b&&y.isPropagationStopped())break e;ad(y,z,re),b=W}}}if(fr)throw n=zr,fr=!1,zr=null,n}function Sn(n,t){var o=t[rs];o===void 0&&(o=t[rs]=new Set);var d=n+"__bubble";o.has(d)||(ld(t,n,2,!1),o.add(d))}function Jl(n,t,o){var d=0;t&&(d|=4),ld(o,n,d,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function oa(n){if(!n[so]){n[so]=!0,a.forEach(function(o){o!=="selectionchange"&&(oy.has(o)||Jl(o,!1,n),Jl(o,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[so]||(t[so]=!0,Jl("selectionchange",!1,t))}}function ld(n,t,o,d){switch(Lc(t)){case 1:var y=Sm;break;case 4:y=km;break;default:y=Nl}o=y.bind(null,t,o,n),y=void 0,!Me||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(y=!0),d?y!==void 0?n.addEventListener(t,o,{capture:!0,passive:y}):n.addEventListener(t,o,!0):y!==void 0?n.addEventListener(t,o,{passive:y}):n.addEventListener(t,o,!1)}function Zl(n,t,o,d,y){var b=d;if((t&1)===0&&(t&2)===0&&d!==null)e:for(;;){if(d===null)return;var T=d.tag;if(T===3||T===4){var z=d.stateNode.containerInfo;if(z===y||z.nodeType===8&&z.parentNode===y)break;if(T===4)for(T=d.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===y||W.nodeType===8&&W.parentNode===y))return;T=T.return}for(;z!==null;){if(T=$r(z),T===null)return;if(W=T.tag,W===5||W===6){d=b=T;continue e}z=z.parentNode}}d=d.return}vn(function(){var re=b,me=cr(o),ye=[];e:{var he=rd.get(n);if(he!==void 0){var Le=Dl,De=n;switch(n){case"keypress":if(to(o)===0)break e;case"keydown":case"keyup":Le=Dm;break;case"focusin":De="focus",Le=zl;break;case"focusout":De="blur",Le=zl;break;case"beforeblur":case"afterblur":Le=zl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Nc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=xm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=zm;break;case Qc:case ed:case nd:Le=Cm;break;case td:Le=jm;break;case"scroll":Le=vm;break;case"wheel":Le=Wm;break;case"copy":case"cut":case"paste":Le=Am;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Pc}var Be=(t&4)!==0,Nn=!Be&&n==="scroll",X=Be?he!==null?he+"Capture":null:he;Be=[];for(var H=re,te;H!==null;){te=H;var ve=te.stateNode;if(te.tag===5&&ve!==null&&(te=ve,X!==null&&(ve=Oe(H,X),ve!=null&&Be.push(la(H,ve,te)))),Nn)break;H=H.return}0<Be.length&&(he=new Le(he,De,null,o,me),ye.push({event:he,listeners:Be}))}}if((t&7)===0){e:{if(he=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",he&&o!==zn&&(De=o.relatedTarget||o.fromElement)&&($r(De)||De[nr]))break e;if((Le||he)&&(he=me.window===me?me:(he=me.ownerDocument)?he.defaultView||he.parentWindow:window,Le?(De=o.relatedTarget||o.toElement,Le=re,De=De?$r(De):null,De!==null&&(Nn=er(De),De!==Nn||De.tag!==5&&De.tag!==6)&&(De=null)):(Le=null,De=re),Le!==De)){if(Be=Nc,ve="onMouseLeave",X="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Be=Pc,ve="onPointerLeave",X="onPointerEnter",H="pointer"),Nn=Le==null?he:bi(Le),te=De==null?he:bi(De),he=new Be(ve,H+"leave",Le,o,me),he.target=Nn,he.relatedTarget=te,ve=null,$r(me)===re&&(Be=new Be(X,H+"enter",De,o,me),Be.target=te,Be.relatedTarget=Nn,ve=Be),Nn=ve,Le&&De)n:{for(Be=Le,X=De,H=0,te=Be;te;te=yi(te))H++;for(te=0,ve=X;ve;ve=yi(ve))te++;for(;0<H-te;)Be=yi(Be),H--;for(;0<te-H;)X=yi(X),te--;for(;H--;){if(Be===X||X!==null&&Be===X.alternate)break n;Be=yi(Be),X=yi(X)}Be=null}else Be=null;Le!==null&&sd(ye,he,Le,Be,!1),De!==null&&Nn!==null&&sd(ye,Nn,De,Be,!0)}}e:{if(he=re?bi(re):window,Le=he.nodeName&&he.nodeName.toLowerCase(),Le==="select"||Le==="input"&&he.type==="file")var Fe=Jm;else if(jc(he))if(Wc)Fe=ey;else{Fe=Xm;var We=Zm}else(Le=he.nodeName)&&Le.toLowerCase()==="input"&&(he.type==="checkbox"||he.type==="radio")&&(Fe=Qm);if(Fe&&(Fe=Fe(n,re))){Vc(ye,Fe,o,me);break e}We&&We(n,he,re),n==="focusout"&&(We=he._wrapperState)&&We.controlled&&he.type==="number"&&K(he,"number",he.value)}switch(We=re?bi(re):window,n){case"focusin":(jc(We)||We.contentEditable==="true")&&(hi=We,$l=re,ia=null);break;case"focusout":ia=$l=hi=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Zc(ye,o,me);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Zc(ye,o,me)}var He;if(jl)e:{switch(n){case"compositionstart":var qe="onCompositionStart";break e;case"compositionend":qe="onCompositionEnd";break e;case"compositionupdate":qe="onCompositionUpdate";break e}qe=void 0}else gi?zc(n,o)&&(qe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(qe="onCompositionStart");qe&&(Dc&&o.locale!=="ko"&&(gi||qe!=="onCompositionStart"?qe==="onCompositionEnd"&&gi&&(He=Mc()):(yr=me,Pl="value"in yr?yr.value:yr.textContent,gi=!0)),We=uo(re,qe),0<We.length&&(qe=new Rc(qe,n,null,o,me),ye.push({event:qe,listeners:We}),He?qe.data=He:(He=Uc(o),He!==null&&(qe.data=He)))),(He=$m?Gm(n,o):Km(n,o))&&(re=uo(re,"onBeforeInput"),0<re.length&&(me=new Rc("onBeforeInput","beforeinput",null,o,me),ye.push({event:me,listeners:re}),me.data=He))}od(ye,t)})}function la(n,t,o){return{instance:n,listener:t,currentTarget:o}}function uo(n,t){for(var o=t+"Capture",d=[];n!==null;){var y=n,b=y.stateNode;y.tag===5&&b!==null&&(y=b,b=Oe(n,o),b!=null&&d.unshift(la(n,b,y)),b=Oe(n,t),b!=null&&d.push(la(n,b,y))),n=n.return}return d}function yi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function sd(n,t,o,d,y){for(var b=t._reactName,T=[];o!==null&&o!==d;){var z=o,W=z.alternate,re=z.stateNode;if(W!==null&&W===d)break;z.tag===5&&re!==null&&(z=re,y?(W=Oe(o,b),W!=null&&T.unshift(la(o,W,z))):y||(W=Oe(o,b),W!=null&&T.push(la(o,W,z)))),o=o.return}T.length!==0&&n.push({event:t,listeners:T})}var ly=/\r\n?/g,sy=/\u0000|\uFFFD/g;function ud(n){return(typeof n=="string"?n:""+n).replace(ly,`
`).replace(sy,"")}function co(n,t,o){if(t=ud(t),ud(n)!==t&&o)throw Error(r(425))}function fo(){}var Xl=null,Ql=null;function es(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,uy=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,cy=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(n){return cd.resolve(null).then(n).catch(dy)}:ns;function dy(n){setTimeout(function(){throw n})}function ts(n,t){var o=t,d=0;do{var y=o.nextSibling;if(n.removeChild(o),y&&y.nodeType===8)if(o=y.data,o==="/$"){if(d===0){n.removeChild(y),Zi(t);return}d--}else o!=="$"&&o!=="$?"&&o!=="$!"||d++;o=y}while(o);Zi(t)}function br(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return n}function dd(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return n;t--}else o==="/$"&&t++}n=n.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+wi,sa="__reactProps$"+wi,nr="__reactContainer$"+wi,rs="__reactEvents$"+wi,fy="__reactListeners$"+wi,py="__reactHandles$"+wi;function $r(n){var t=n[Kt];if(t)return t;for(var o=n.parentNode;o;){if(t=o[nr]||o[Kt]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(n=dd(n);n!==null;){if(o=n[Kt])return o;n=dd(n)}return t}n=o,o=n.parentNode}return null}function ua(n){return n=n[Kt]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bi(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(r(33))}function po(n){return n[sa]||null}var is=[],Si=-1;function Sr(n){return{current:n}}function kn(n){0>Si||(n.current=is[Si],is[Si]=null,Si--)}function yn(n,t){Si++,is[Si]=n.current,n.current=t}var kr={},Jn=Sr(kr),dt=Sr(!1),Gr=kr;function ki(n,t){var o=n.type.contextTypes;if(!o)return kr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===t)return d.__reactInternalMemoizedMaskedChildContext;var y={},b;for(b in o)y[b]=t[b];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=t,n.__reactInternalMemoizedMaskedChildContext=y),y}function ft(n){return n=n.childContextTypes,n!=null}function go(){kn(dt),kn(Jn)}function fd(n,t,o){if(Jn.current!==kr)throw Error(r(168));yn(Jn,t),yn(dt,o)}function pd(n,t,o){var d=n.stateNode;if(t=t.childContextTypes,typeof d.getChildContext!="function")return o;d=d.getChildContext();for(var y in d)if(!(y in t))throw Error(r(108,Ue(n)||"Unknown",y));return L({},o,d)}function ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,Gr=Jn.current,yn(Jn,n),yn(dt,dt.current),!0}function gd(n,t,o){var d=n.stateNode;if(!d)throw Error(r(169));o?(n=pd(n,t,Gr),d.__reactInternalMemoizedMergedChildContext=n,kn(dt),kn(Jn),yn(Jn,n)):kn(dt),yn(dt,o)}var tr=null,mo=!1,as=!1;function hd(n){tr===null?tr=[n]:tr.push(n)}function gy(n){mo=!0,hd(n)}function vr(){if(!as&&tr!==null){as=!0;var n=0,t=sn;try{var o=tr;for(sn=1;n<o.length;n++){var d=o[n];do d=d(!0);while(d!==null)}tr=null,mo=!1}catch(y){throw tr!==null&&(tr=tr.slice(n+1)),Ka($i,vr),y}finally{sn=t,as=!1}}return null}var vi=[],_i=0,yo=null,wo=0,It=[],At=0,Kr=null,rr=1,ir="";function qr(n,t){vi[_i++]=wo,vi[_i++]=yo,yo=n,wo=t}function md(n,t,o){It[At++]=rr,It[At++]=ir,It[At++]=Kr,Kr=n;var d=rr;n=ir;var y=32-En(d)-1;d&=~(1<<y),o+=1;var b=32-En(t)+y;if(30<b){var T=y-y%5;b=(d&(1<<T)-1).toString(32),d>>=T,y-=T,rr=1<<32-En(t)+y|o<<y|d,ir=b+n}else rr=1<<b|o<<y|d,ir=n}function os(n){n.return!==null&&(qr(n,1),md(n,1,0))}function ls(n){for(;n===yo;)yo=vi[--_i],vi[_i]=null,wo=vi[--_i],vi[_i]=null;for(;n===Kr;)Kr=It[--At],It[At]=null,ir=It[--At],It[At]=null,rr=It[--At],It[At]=null}var kt=null,vt=null,_n=!1,Ft=null;function yd(n,t){var o=Nt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=n,t=n.deletions,t===null?(n.deletions=[o],n.flags|=16):t.push(o)}function wd(n,t){switch(n.tag){case 5:var o=n.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(n.stateNode=t,kt=n,vt=br(t.firstChild),!0):!1;case 6:return t=n.pendingProps===""||t.nodeType!==3?null:t,t!==null?(n.stateNode=t,kt=n,vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=Kr!==null?{id:rr,overflow:ir}:null,n.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Nt(18,null,null,0),o.stateNode=t,o.return=n,n.child=o,kt=n,vt=null,!0):!1;default:return!1}}function ss(n){return(n.mode&1)!==0&&(n.flags&128)===0}function us(n){if(_n){var t=vt;if(t){var o=t;if(!wd(n,t)){if(ss(n))throw Error(r(418));t=br(o.nextSibling);var d=kt;t&&wd(n,t)?yd(d,o):(n.flags=n.flags&-4097|2,_n=!1,kt=n)}}else{if(ss(n))throw Error(r(418));n.flags=n.flags&-4097|2,_n=!1,kt=n}}}function bd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;kt=n}function bo(n){if(n!==kt)return!1;if(!_n)return bd(n),_n=!0,!1;var t;if((t=n.tag!==3)&&!(t=n.tag!==5)&&(t=n.type,t=t!=="head"&&t!=="body"&&!es(n.type,n.memoizedProps)),t&&(t=vt)){if(ss(n))throw Sd(),Error(r(418));for(;t;)yd(n,t),t=br(t.nextSibling)}if(bd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));e:{for(n=n.nextSibling,t=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(t===0){vt=br(n.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}n=n.nextSibling}vt=null}}else vt=kt?br(n.stateNode.nextSibling):null;return!0}function Sd(){for(var n=vt;n;)n=br(n.nextSibling)}function xi(){vt=kt=null,_n=!1}function cs(n){Ft===null?Ft=[n]:Ft.push(n)}var hy=D.ReactCurrentBatchConfig;function ca(n,t,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(r(309));var d=o.stateNode}if(!d)throw Error(r(147,n));var y=d,b=""+n;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===b?t.ref:(t=function(T){var z=y.refs;T===null?delete z[b]:z[b]=T},t._stringRef=b,t)}if(typeof n!="string")throw Error(r(284));if(!o._owner)throw Error(r(290,n))}return n}function So(n,t){throw n=Object.prototype.toString.call(t),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n))}function kd(n){var t=n._init;return t(n._payload)}function vd(n){function t(X,H){if(n){var te=X.deletions;te===null?(X.deletions=[H],X.flags|=16):te.push(H)}}function o(X,H){if(!n)return null;for(;H!==null;)t(X,H),H=H.sibling;return null}function d(X,H){for(X=new Map;H!==null;)H.key!==null?X.set(H.key,H):X.set(H.index,H),H=H.sibling;return X}function y(X,H){return X=Lr(X,H),X.index=0,X.sibling=null,X}function b(X,H,te){return X.index=te,n?(te=X.alternate,te!==null?(te=te.index,te<H?(X.flags|=2,H):te):(X.flags|=2,H)):(X.flags|=1048576,H)}function T(X){return n&&X.alternate===null&&(X.flags|=2),X}function z(X,H,te,ve){return H===null||H.tag!==6?(H=nu(te,X.mode,ve),H.return=X,H):(H=y(H,te),H.return=X,H)}function W(X,H,te,ve){var Fe=te.type;return Fe===$?me(X,H,te.props.children,ve,te.key):H!==null&&(H.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===ge&&kd(Fe)===H.type)?(ve=y(H,te.props),ve.ref=ca(X,H,te),ve.return=X,ve):(ve=Ho(te.type,te.key,te.props,null,X.mode,ve),ve.ref=ca(X,H,te),ve.return=X,ve)}function re(X,H,te,ve){return H===null||H.tag!==4||H.stateNode.containerInfo!==te.containerInfo||H.stateNode.implementation!==te.implementation?(H=tu(te,X.mode,ve),H.return=X,H):(H=y(H,te.children||[]),H.return=X,H)}function me(X,H,te,ve,Fe){return H===null||H.tag!==7?(H=ti(te,X.mode,ve,Fe),H.return=X,H):(H=y(H,te),H.return=X,H)}function ye(X,H,te){if(typeof H=="string"&&H!==""||typeof H=="number")return H=nu(""+H,X.mode,te),H.return=X,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return te=Ho(H.type,H.key,H.props,null,X.mode,te),te.ref=ca(X,null,H),te.return=X,te;case R:return H=tu(H,X.mode,te),H.return=X,H;case ge:var ve=H._init;return ye(X,ve(H._payload),te)}if(de(H)||Z(H))return H=ti(H,X.mode,te,null),H.return=X,H;So(X,H)}return null}function he(X,H,te,ve){var Fe=H!==null?H.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Fe!==null?null:z(X,H,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case B:return te.key===Fe?W(X,H,te,ve):null;case R:return te.key===Fe?re(X,H,te,ve):null;case ge:return Fe=te._init,he(X,H,Fe(te._payload),ve)}if(de(te)||Z(te))return Fe!==null?null:me(X,H,te,ve,null);So(X,te)}return null}function Le(X,H,te,ve,Fe){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return X=X.get(te)||null,z(H,X,""+ve,Fe);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case B:return X=X.get(ve.key===null?te:ve.key)||null,W(H,X,ve,Fe);case R:return X=X.get(ve.key===null?te:ve.key)||null,re(H,X,ve,Fe);case ge:var We=ve._init;return Le(X,H,te,We(ve._payload),Fe)}if(de(ve)||Z(ve))return X=X.get(te)||null,me(H,X,ve,Fe,null);So(H,ve)}return null}function De(X,H,te,ve){for(var Fe=null,We=null,He=H,qe=H=0,$n=null;He!==null&&qe<te.length;qe++){He.index>qe?($n=He,He=null):$n=He.sibling;var cn=he(X,He,te[qe],ve);if(cn===null){He===null&&(He=$n);break}n&&He&&cn.alternate===null&&t(X,He),H=b(cn,H,qe),We===null?Fe=cn:We.sibling=cn,We=cn,He=$n}if(qe===te.length)return o(X,He),_n&&qr(X,qe),Fe;if(He===null){for(;qe<te.length;qe++)He=ye(X,te[qe],ve),He!==null&&(H=b(He,H,qe),We===null?Fe=He:We.sibling=He,We=He);return _n&&qr(X,qe),Fe}for(He=d(X,He);qe<te.length;qe++)$n=Le(He,X,qe,te[qe],ve),$n!==null&&(n&&$n.alternate!==null&&He.delete($n.key===null?qe:$n.key),H=b($n,H,qe),We===null?Fe=$n:We.sibling=$n,We=$n);return n&&He.forEach(function(Mr){return t(X,Mr)}),_n&&qr(X,qe),Fe}function Be(X,H,te,ve){var Fe=Z(te);if(typeof Fe!="function")throw Error(r(150));if(te=Fe.call(te),te==null)throw Error(r(151));for(var We=Fe=null,He=H,qe=H=0,$n=null,cn=te.next();He!==null&&!cn.done;qe++,cn=te.next()){He.index>qe?($n=He,He=null):$n=He.sibling;var Mr=he(X,He,cn.value,ve);if(Mr===null){He===null&&(He=$n);break}n&&He&&Mr.alternate===null&&t(X,He),H=b(Mr,H,qe),We===null?Fe=Mr:We.sibling=Mr,We=Mr,He=$n}if(cn.done)return o(X,He),_n&&qr(X,qe),Fe;if(He===null){for(;!cn.done;qe++,cn=te.next())cn=ye(X,cn.value,ve),cn!==null&&(H=b(cn,H,qe),We===null?Fe=cn:We.sibling=cn,We=cn);return _n&&qr(X,qe),Fe}for(He=d(X,He);!cn.done;qe++,cn=te.next())cn=Le(He,X,qe,cn.value,ve),cn!==null&&(n&&cn.alternate!==null&&He.delete(cn.key===null?qe:cn.key),H=b(cn,H,qe),We===null?Fe=cn:We.sibling=cn,We=cn);return n&&He.forEach(function(qy){return t(X,qy)}),_n&&qr(X,qe),Fe}function Nn(X,H,te,ve){if(typeof te=="object"&&te!==null&&te.type===$&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case B:e:{for(var Fe=te.key,We=H;We!==null;){if(We.key===Fe){if(Fe=te.type,Fe===$){if(We.tag===7){o(X,We.sibling),H=y(We,te.props.children),H.return=X,X=H;break e}}else if(We.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===ge&&kd(Fe)===We.type){o(X,We.sibling),H=y(We,te.props),H.ref=ca(X,We,te),H.return=X,X=H;break e}o(X,We);break}else t(X,We);We=We.sibling}te.type===$?(H=ti(te.props.children,X.mode,ve,te.key),H.return=X,X=H):(ve=Ho(te.type,te.key,te.props,null,X.mode,ve),ve.ref=ca(X,H,te),ve.return=X,X=ve)}return T(X);case R:e:{for(We=te.key;H!==null;){if(H.key===We)if(H.tag===4&&H.stateNode.containerInfo===te.containerInfo&&H.stateNode.implementation===te.implementation){o(X,H.sibling),H=y(H,te.children||[]),H.return=X,X=H;break e}else{o(X,H);break}else t(X,H);H=H.sibling}H=tu(te,X.mode,ve),H.return=X,X=H}return T(X);case ge:return We=te._init,Nn(X,H,We(te._payload),ve)}if(de(te))return De(X,H,te,ve);if(Z(te))return Be(X,H,te,ve);So(X,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,H!==null&&H.tag===6?(o(X,H.sibling),H=y(H,te),H.return=X,X=H):(o(X,H),H=nu(te,X.mode,ve),H.return=X,X=H),T(X)):o(X,H)}return Nn}var Ei=vd(!0),_d=vd(!1),ko=Sr(null),vo=null,Ti=null,ds=null;function fs(){ds=Ti=vo=null}function ps(n){var t=ko.current;kn(ko),n._currentValue=t}function gs(n,t,o){for(;n!==null;){var d=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,d!==null&&(d.childLanes|=t)):d!==null&&(d.childLanes&t)!==t&&(d.childLanes|=t),n===o)break;n=n.return}}function Ci(n,t){vo=n,ds=Ti=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&t)!==0&&(pt=!0),n.firstContext=null)}function Lt(n){var t=n._currentValue;if(ds!==n)if(n={context:n,memoizedValue:t,next:null},Ti===null){if(vo===null)throw Error(r(308));Ti=n,vo.dependencies={lanes:0,firstContext:n}}else Ti=Ti.next=n;return t}var Yr=null;function hs(n){Yr===null?Yr=[n]:Yr.push(n)}function xd(n,t,o,d){var y=t.interleaved;return y===null?(o.next=o,hs(t)):(o.next=y.next,y.next=o),t.interleaved=o,ar(n,d)}function ar(n,t){n.lanes|=t;var o=n.alternate;for(o!==null&&(o.lanes|=t),o=n,n=n.return;n!==null;)n.childLanes|=t,o=n.alternate,o!==null&&(o.childLanes|=t),o=n,n=n.return;return o.tag===3?o.stateNode:null}var _r=!1;function ms(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ed(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,t){return{eventTime:n,lane:t,tag:0,payload:null,callback:null,next:null}}function xr(n,t,o){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(un&2)!==0){var y=d.pending;return y===null?t.next=t:(t.next=y.next,y.next=t),d.pending=t,ar(n,o)}return y=d.interleaved,y===null?(t.next=t,hs(d)):(t.next=y.next,y.next=t),d.interleaved=t,ar(n,o)}function _o(n,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var d=t.lanes;d&=n.pendingLanes,o|=d,t.lanes=o,Ki(n,o)}}function Td(n,t){var o=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,o===d)){var y=null,b=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};b===null?y=b=T:b=b.next=T,o=o.next}while(o!==null);b===null?y=b=t:b=b.next=t}else y=b=t;o={baseState:d.baseState,firstBaseUpdate:y,lastBaseUpdate:b,shared:d.shared,effects:d.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=t:n.next=t,o.lastBaseUpdate=t}function xo(n,t,o,d){var y=n.updateQueue;_r=!1;var b=y.firstBaseUpdate,T=y.lastBaseUpdate,z=y.shared.pending;if(z!==null){y.shared.pending=null;var W=z,re=W.next;W.next=null,T===null?b=re:T.next=re,T=W;var me=n.alternate;me!==null&&(me=me.updateQueue,z=me.lastBaseUpdate,z!==T&&(z===null?me.firstBaseUpdate=re:z.next=re,me.lastBaseUpdate=W))}if(b!==null){var ye=y.baseState;T=0,me=re=W=null,z=b;do{var he=z.lane,Le=z.eventTime;if((d&he)===he){me!==null&&(me=me.next={eventTime:Le,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var De=n,Be=z;switch(he=t,Le=o,Be.tag){case 1:if(De=Be.payload,typeof De=="function"){ye=De.call(Le,ye,he);break e}ye=De;break e;case 3:De.flags=De.flags&-65537|128;case 0:if(De=Be.payload,he=typeof De=="function"?De.call(Le,ye,he):De,he==null)break e;ye=L({},ye,he);break e;case 2:_r=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,he=y.effects,he===null?y.effects=[z]:he.push(z))}else Le={eventTime:Le,lane:he,tag:z.tag,payload:z.payload,callback:z.callback,next:null},me===null?(re=me=Le,W=ye):me=me.next=Le,T|=he;if(z=z.next,z===null){if(z=y.shared.pending,z===null)break;he=z,z=he.next,he.next=null,y.lastBaseUpdate=he,y.shared.pending=null}}while(!0);if(me===null&&(W=ye),y.baseState=W,y.firstBaseUpdate=re,y.lastBaseUpdate=me,t=y.shared.interleaved,t!==null){y=t;do T|=y.lane,y=y.next;while(y!==t)}else b===null&&(y.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=ye}}function Cd(n,t,o){if(n=t.effects,t.effects=null,n!==null)for(t=0;t<n.length;t++){var d=n[t],y=d.callback;if(y!==null){if(d.callback=null,d=o,typeof y!="function")throw Error(r(191,y));y.call(d)}}}var da={},qt=Sr(da),fa=Sr(da),pa=Sr(da);function Jr(n){if(n===da)throw Error(r(174));return n}function ys(n,t){switch(yn(pa,t),yn(fa,n),yn(qt,da),n=t.nodeType,n){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fe(null,"");break;default:n=n===8?t.parentNode:t,t=n.namespaceURI||null,n=n.tagName,t=fe(t,n)}kn(qt),yn(qt,t)}function Ii(){kn(qt),kn(fa),kn(pa)}function Id(n){Jr(pa.current);var t=Jr(qt.current),o=fe(t,n.type);t!==o&&(yn(fa,n),yn(qt,o))}function ws(n){fa.current===n&&(kn(qt),kn(fa))}var Tn=Sr(0);function Eo(n){for(var t=n;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=[];function Ss(){for(var n=0;n<bs.length;n++)bs[n]._workInProgressVersionPrimary=null;bs.length=0}var To=D.ReactCurrentDispatcher,ks=D.ReactCurrentBatchConfig,Zr=0,Cn=null,Un=null,Wn=null,Co=!1,ga=!1,ha=0,my=0;function Zn(){throw Error(r(321))}function vs(n,t){if(t===null)return!1;for(var o=0;o<t.length&&o<n.length;o++)if(!Bt(n[o],t[o]))return!1;return!0}function _s(n,t,o,d,y,b){if(Zr=b,Cn=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=n===null||n.memoizedState===null?Sy:ky,n=o(d,y),ga){b=0;do{if(ga=!1,ha=0,25<=b)throw Error(r(301));b+=1,Wn=Un=null,t.updateQueue=null,To.current=vy,n=o(d,y)}while(ga)}if(To.current=Lo,t=Un!==null&&Un.next!==null,Zr=0,Wn=Un=Cn=null,Co=!1,t)throw Error(r(300));return n}function xs(){var n=ha!==0;return ha=0,n}function Yt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wn===null?Cn.memoizedState=Wn=n:Wn=Wn.next=n,Wn}function Mt(){if(Un===null){var n=Cn.alternate;n=n!==null?n.memoizedState:null}else n=Un.next;var t=Wn===null?Cn.memoizedState:Wn.next;if(t!==null)Wn=t,Un=n;else{if(n===null)throw Error(r(310));Un=n,n={memoizedState:Un.memoizedState,baseState:Un.baseState,baseQueue:Un.baseQueue,queue:Un.queue,next:null},Wn===null?Cn.memoizedState=Wn=n:Wn=Wn.next=n}return Wn}function ma(n,t){return typeof t=="function"?t(n):t}function Es(n){var t=Mt(),o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var d=Un,y=d.baseQueue,b=o.pending;if(b!==null){if(y!==null){var T=y.next;y.next=b.next,b.next=T}d.baseQueue=y=b,o.pending=null}if(y!==null){b=y.next,d=d.baseState;var z=T=null,W=null,re=b;do{var me=re.lane;if((Zr&me)===me)W!==null&&(W=W.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),d=re.hasEagerState?re.eagerState:n(d,re.action);else{var ye={lane:me,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};W===null?(z=W=ye,T=d):W=W.next=ye,Cn.lanes|=me,Xr|=me}re=re.next}while(re!==null&&re!==b);W===null?T=d:W.next=z,Bt(d,t.memoizedState)||(pt=!0),t.memoizedState=d,t.baseState=T,t.baseQueue=W,o.lastRenderedState=d}if(n=o.interleaved,n!==null){y=n;do b=y.lane,Cn.lanes|=b,Xr|=b,y=y.next;while(y!==n)}else y===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Ts(n){var t=Mt(),o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=n;var d=o.dispatch,y=o.pending,b=t.memoizedState;if(y!==null){o.pending=null;var T=y=y.next;do b=n(b,T.action),T=T.next;while(T!==y);Bt(b,t.memoizedState)||(pt=!0),t.memoizedState=b,t.baseQueue===null&&(t.baseState=b),o.lastRenderedState=b}return[b,d]}function Ad(){}function Ld(n,t){var o=Cn,d=Mt(),y=t(),b=!Bt(d.memoizedState,y);if(b&&(d.memoizedState=y,pt=!0),d=d.queue,Cs(Nd.bind(null,o,d,n),[n]),d.getSnapshot!==t||b||Wn!==null&&Wn.memoizedState.tag&1){if(o.flags|=2048,ya(9,Od.bind(null,o,d,y,t),void 0,null),Hn===null)throw Error(r(349));(Zr&30)!==0||Md(o,t,y)}return y}function Md(n,t,o){n.flags|=16384,n={getSnapshot:t,value:o},t=Cn.updateQueue,t===null?(t={lastEffect:null,stores:null},Cn.updateQueue=t,t.stores=[n]):(o=t.stores,o===null?t.stores=[n]:o.push(n))}function Od(n,t,o,d){t.value=o,t.getSnapshot=d,Rd(t)&&Pd(n)}function Nd(n,t,o){return o(function(){Rd(t)&&Pd(n)})}function Rd(n){var t=n.getSnapshot;n=n.value;try{var o=t();return!Bt(n,o)}catch{return!0}}function Pd(n){var t=ar(n,1);t!==null&&Vt(t,n,1,-1)}function Dd(n){var t=Yt();return typeof n=="function"&&(n=n()),t.memoizedState=t.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},t.queue=n,n=n.dispatch=by.bind(null,Cn,n),[t.memoizedState,n]}function ya(n,t,o,d){return n={tag:n,create:t,destroy:o,deps:d,next:null},t=Cn.updateQueue,t===null?(t={lastEffect:null,stores:null},Cn.updateQueue=t,t.lastEffect=n.next=n):(o=t.lastEffect,o===null?t.lastEffect=n.next=n:(d=o.next,o.next=n,n.next=d,t.lastEffect=n)),n}function Bd(){return Mt().memoizedState}function Io(n,t,o,d){var y=Yt();Cn.flags|=n,y.memoizedState=ya(1|t,o,void 0,d===void 0?null:d)}function Ao(n,t,o,d){var y=Mt();d=d===void 0?null:d;var b=void 0;if(Un!==null){var T=Un.memoizedState;if(b=T.destroy,d!==null&&vs(d,T.deps)){y.memoizedState=ya(t,o,b,d);return}}Cn.flags|=n,y.memoizedState=ya(1|t,o,b,d)}function Fd(n,t){return Io(8390656,8,n,t)}function Cs(n,t){return Ao(2048,8,n,t)}function zd(n,t){return Ao(4,2,n,t)}function Ud(n,t){return Ao(4,4,n,t)}function jd(n,t){if(typeof t=="function")return n=n(),t(n),function(){t(null)};if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function Vd(n,t,o){return o=o!=null?o.concat([n]):null,Ao(4,4,jd.bind(null,t,n),o)}function Is(){}function Wd(n,t){var o=Mt();t=t===void 0?null:t;var d=o.memoizedState;return d!==null&&t!==null&&vs(t,d[1])?d[0]:(o.memoizedState=[n,t],n)}function Hd(n,t){var o=Mt();t=t===void 0?null:t;var d=o.memoizedState;return d!==null&&t!==null&&vs(t,d[1])?d[0]:(n=n(),o.memoizedState=[n,t],n)}function $d(n,t,o){return(Zr&21)===0?(n.baseState&&(n.baseState=!1,pt=!0),n.memoizedState=o):(Bt(o,t)||(o=Ja(),Cn.lanes|=o,Xr|=o,n.baseState=!0),t)}function yy(n,t){var o=sn;sn=o!==0&&4>o?o:4,n(!0);var d=ks.transition;ks.transition={};try{n(!1),t()}finally{sn=o,ks.transition=d}}function Gd(){return Mt().memoizedState}function wy(n,t,o){var d=Ir(n);if(o={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null},Kd(n))qd(t,o);else if(o=xd(n,t,o,d),o!==null){var y=lt();Vt(o,n,d,y),Yd(o,t,d)}}function by(n,t,o){var d=Ir(n),y={lane:d,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kd(n))qd(t,y);else{var b=n.alternate;if(n.lanes===0&&(b===null||b.lanes===0)&&(b=t.lastRenderedReducer,b!==null))try{var T=t.lastRenderedState,z=b(T,o);if(y.hasEagerState=!0,y.eagerState=z,Bt(z,T)){var W=t.interleaved;W===null?(y.next=y,hs(t)):(y.next=W.next,W.next=y),t.interleaved=y;return}}catch{}finally{}o=xd(n,t,y,d),o!==null&&(y=lt(),Vt(o,n,d,y),Yd(o,t,d))}}function Kd(n){var t=n.alternate;return n===Cn||t!==null&&t===Cn}function qd(n,t){ga=Co=!0;var o=n.pending;o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t}function Yd(n,t,o){if((o&4194240)!==0){var d=t.lanes;d&=n.pendingLanes,o|=d,t.lanes=o,Ki(n,o)}}var Lo={readContext:Lt,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},Sy={readContext:Lt,useCallback:function(n,t){return Yt().memoizedState=[n,t===void 0?null:t],n},useContext:Lt,useEffect:Fd,useImperativeHandle:function(n,t,o){return o=o!=null?o.concat([n]):null,Io(4194308,4,jd.bind(null,t,n),o)},useLayoutEffect:function(n,t){return Io(4194308,4,n,t)},useInsertionEffect:function(n,t){return Io(4,2,n,t)},useMemo:function(n,t){var o=Yt();return t=t===void 0?null:t,n=n(),o.memoizedState=[n,t],n},useReducer:function(n,t,o){var d=Yt();return t=o!==void 0?o(t):t,d.memoizedState=d.baseState=t,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:t},d.queue=n,n=n.dispatch=wy.bind(null,Cn,n),[d.memoizedState,n]},useRef:function(n){var t=Yt();return n={current:n},t.memoizedState=n},useState:Dd,useDebugValue:Is,useDeferredValue:function(n){return Yt().memoizedState=n},useTransition:function(){var n=Dd(!1),t=n[0];return n=yy.bind(null,n[1]),Yt().memoizedState=n,[t,n]},useMutableSource:function(){},useSyncExternalStore:function(n,t,o){var d=Cn,y=Yt();if(_n){if(o===void 0)throw Error(r(407));o=o()}else{if(o=t(),Hn===null)throw Error(r(349));(Zr&30)!==0||Md(d,t,o)}y.memoizedState=o;var b={value:o,getSnapshot:t};return y.queue=b,Fd(Nd.bind(null,d,b,n),[n]),d.flags|=2048,ya(9,Od.bind(null,d,b,o,t),void 0,null),o},useId:function(){var n=Yt(),t=Hn.identifierPrefix;if(_n){var o=ir,d=rr;o=(d&~(1<<32-En(d)-1)).toString(32)+o,t=":"+t+"R"+o,o=ha++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=my++,t=":"+t+"r"+o.toString(32)+":";return n.memoizedState=t},unstable_isNewReconciler:!1},ky={readContext:Lt,useCallback:Wd,useContext:Lt,useEffect:Cs,useImperativeHandle:Vd,useInsertionEffect:zd,useLayoutEffect:Ud,useMemo:Hd,useReducer:Es,useRef:Bd,useState:function(){return Es(ma)},useDebugValue:Is,useDeferredValue:function(n){var t=Mt();return $d(t,Un.memoizedState,n)},useTransition:function(){var n=Es(ma)[0],t=Mt().memoizedState;return[n,t]},useMutableSource:Ad,useSyncExternalStore:Ld,useId:Gd,unstable_isNewReconciler:!1},vy={readContext:Lt,useCallback:Wd,useContext:Lt,useEffect:Cs,useImperativeHandle:Vd,useInsertionEffect:zd,useLayoutEffect:Ud,useMemo:Hd,useReducer:Ts,useRef:Bd,useState:function(){return Ts(ma)},useDebugValue:Is,useDeferredValue:function(n){var t=Mt();return Un===null?t.memoizedState=n:$d(t,Un.memoizedState,n)},useTransition:function(){var n=Ts(ma)[0],t=Mt().memoizedState;return[n,t]},useMutableSource:Ad,useSyncExternalStore:Ld,useId:Gd,unstable_isNewReconciler:!1};function zt(n,t){if(n&&n.defaultProps){t=L({},t),n=n.defaultProps;for(var o in n)t[o]===void 0&&(t[o]=n[o]);return t}return t}function As(n,t,o,d){t=n.memoizedState,o=o(d,t),o=o==null?t:L({},t,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Mo={isMounted:function(n){return(n=n._reactInternals)?er(n)===n:!1},enqueueSetState:function(n,t,o){n=n._reactInternals;var d=lt(),y=Ir(n),b=or(d,y);b.payload=t,o!=null&&(b.callback=o),t=xr(n,b,y),t!==null&&(Vt(t,n,y,d),_o(t,n,y))},enqueueReplaceState:function(n,t,o){n=n._reactInternals;var d=lt(),y=Ir(n),b=or(d,y);b.tag=1,b.payload=t,o!=null&&(b.callback=o),t=xr(n,b,y),t!==null&&(Vt(t,n,y,d),_o(t,n,y))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var o=lt(),d=Ir(n),y=or(o,d);y.tag=2,t!=null&&(y.callback=t),t=xr(n,y,d),t!==null&&(Vt(t,n,d,o),_o(t,n,d))}};function Jd(n,t,o,d,y,b,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,b,T):t.prototype&&t.prototype.isPureReactComponent?!ra(o,d)||!ra(y,b):!0}function Zd(n,t,o){var d=!1,y=kr,b=t.contextType;return typeof b=="object"&&b!==null?b=Lt(b):(y=ft(t)?Gr:Jn.current,d=t.contextTypes,b=(d=d!=null)?ki(n,y):kr),t=new t(o,b),n.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,n.stateNode=t,t._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=y,n.__reactInternalMemoizedMaskedChildContext=b),t}function Xd(n,t,o,d){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,d),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,d),t.state!==n&&Mo.enqueueReplaceState(t,t.state,null)}function Ls(n,t,o,d){var y=n.stateNode;y.props=o,y.state=n.memoizedState,y.refs={},ms(n);var b=t.contextType;typeof b=="object"&&b!==null?y.context=Lt(b):(b=ft(t)?Gr:Jn.current,y.context=ki(n,b)),y.state=n.memoizedState,b=t.getDerivedStateFromProps,typeof b=="function"&&(As(n,t,b,o),y.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(t=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),t!==y.state&&Mo.enqueueReplaceState(y,y.state,null),xo(n,o,y,d),y.state=n.memoizedState),typeof y.componentDidMount=="function"&&(n.flags|=4194308)}function Ai(n,t){try{var o="",d=t;do o+=le(d),d=d.return;while(d);var y=o}catch(b){y=`
Error generating stack: `+b.message+`
`+b.stack}return{value:n,source:t,stack:y,digest:null}}function Ms(n,t,o){return{value:n,source:null,stack:o??null,digest:t??null}}function Os(n,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function Qd(n,t,o){o=or(-1,o),o.tag=3,o.payload={element:null};var d=t.value;return o.callback=function(){Fo||(Fo=!0,Ks=d),Os(n,t)},o}function ef(n,t,o){o=or(-1,o),o.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var y=t.value;o.payload=function(){return d(y)},o.callback=function(){Os(n,t)}}var b=n.stateNode;return b!==null&&typeof b.componentDidCatch=="function"&&(o.callback=function(){Os(n,t),typeof d!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=t.stack;this.componentDidCatch(t.value,{componentStack:T!==null?T:""})}),o}function nf(n,t,o){var d=n.pingCache;if(d===null){d=n.pingCache=new _y;var y=new Set;d.set(t,y)}else y=d.get(t),y===void 0&&(y=new Set,d.set(t,y));y.has(o)||(y.add(o),n=By.bind(null,n,t,o),t.then(n,n))}function tf(n){do{var t;if((t=n.tag===13)&&(t=n.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return n;n=n.return}while(n!==null);return null}function rf(n,t,o,d,y){return(n.mode&1)===0?(n===t?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=or(-1,1),t.tag=2,xr(o,t,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=y,n)}var xy=D.ReactCurrentOwner,pt=!1;function ot(n,t,o,d){t.child=n===null?_d(t,null,o,d):Ei(t,n.child,o,d)}function af(n,t,o,d,y){o=o.render;var b=t.ref;return Ci(t,y),d=_s(n,t,o,d,b,y),o=xs(),n!==null&&!pt?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~y,lr(n,t,y)):(_n&&o&&os(t),t.flags|=1,ot(n,t,d,y),t.child)}function of(n,t,o,d,y){if(n===null){var b=o.type;return typeof b=="function"&&!eu(b)&&b.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=b,lf(n,t,b,d,y)):(n=Ho(o.type,null,d,t,t.mode,y),n.ref=t.ref,n.return=t,t.child=n)}if(b=n.child,(n.lanes&y)===0){var T=b.memoizedProps;if(o=o.compare,o=o!==null?o:ra,o(T,d)&&n.ref===t.ref)return lr(n,t,y)}return t.flags|=1,n=Lr(b,d),n.ref=t.ref,n.return=t,t.child=n}function lf(n,t,o,d,y){if(n!==null){var b=n.memoizedProps;if(ra(b,d)&&n.ref===t.ref)if(pt=!1,t.pendingProps=d=b,(n.lanes&y)!==0)(n.flags&131072)!==0&&(pt=!0);else return t.lanes=n.lanes,lr(n,t,y)}return Ns(n,t,o,d,y)}function sf(n,t,o){var d=t.pendingProps,y=d.children,b=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},yn(Mi,_t),_t|=o;else{if((o&1073741824)===0)return n=b!==null?b.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:n,cachePool:null,transitions:null},t.updateQueue=null,yn(Mi,_t),_t|=n,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=b!==null?b.baseLanes:o,yn(Mi,_t),_t|=d}else b!==null?(d=b.baseLanes|o,t.memoizedState=null):d=o,yn(Mi,_t),_t|=d;return ot(n,t,y,o),t.child}function uf(n,t){var o=t.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Ns(n,t,o,d,y){var b=ft(o)?Gr:Jn.current;return b=ki(t,b),Ci(t,y),o=_s(n,t,o,d,b,y),d=xs(),n!==null&&!pt?(t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~y,lr(n,t,y)):(_n&&d&&os(t),t.flags|=1,ot(n,t,o,y),t.child)}function cf(n,t,o,d,y){if(ft(o)){var b=!0;ho(t)}else b=!1;if(Ci(t,y),t.stateNode===null)No(n,t),Zd(t,o,d),Ls(t,o,d,y),d=!0;else if(n===null){var T=t.stateNode,z=t.memoizedProps;T.props=z;var W=T.context,re=o.contextType;typeof re=="object"&&re!==null?re=Lt(re):(re=ft(o)?Gr:Jn.current,re=ki(t,re));var me=o.getDerivedStateFromProps,ye=typeof me=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==d||W!==re)&&Xd(t,T,d,re),_r=!1;var he=t.memoizedState;T.state=he,xo(t,d,T,y),W=t.memoizedState,z!==d||he!==W||dt.current||_r?(typeof me=="function"&&(As(t,o,me,d),W=t.memoizedState),(z=_r||Jd(t,o,z,d,he,W,re))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(t.flags|=4194308)):(typeof T.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=d,t.memoizedState=W),T.props=d,T.state=W,T.context=re,d=z):(typeof T.componentDidMount=="function"&&(t.flags|=4194308),d=!1)}else{T=t.stateNode,Ed(n,t),z=t.memoizedProps,re=t.type===t.elementType?z:zt(t.type,z),T.props=re,ye=t.pendingProps,he=T.context,W=o.contextType,typeof W=="object"&&W!==null?W=Lt(W):(W=ft(o)?Gr:Jn.current,W=ki(t,W));var Le=o.getDerivedStateFromProps;(me=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==ye||he!==W)&&Xd(t,T,d,W),_r=!1,he=t.memoizedState,T.state=he,xo(t,d,T,y);var De=t.memoizedState;z!==ye||he!==De||dt.current||_r?(typeof Le=="function"&&(As(t,o,Le,d),De=t.memoizedState),(re=_r||Jd(t,o,re,d,he,De,W)||!1)?(me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(d,De,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(d,De,W)),typeof T.componentDidUpdate=="function"&&(t.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&he===n.memoizedState||(t.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&he===n.memoizedState||(t.flags|=1024),t.memoizedProps=d,t.memoizedState=De),T.props=d,T.state=De,T.context=W,d=re):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&he===n.memoizedState||(t.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&he===n.memoizedState||(t.flags|=1024),d=!1)}return Rs(n,t,o,d,b,y)}function Rs(n,t,o,d,y,b){uf(n,t);var T=(t.flags&128)!==0;if(!d&&!T)return y&&gd(t,o,!1),lr(n,t,b);d=t.stateNode,xy.current=t;var z=T&&typeof o.getDerivedStateFromError!="function"?null:d.render();return t.flags|=1,n!==null&&T?(t.child=Ei(t,n.child,null,b),t.child=Ei(t,null,z,b)):ot(n,t,z,b),t.memoizedState=d.state,y&&gd(t,o,!0),t.child}function df(n){var t=n.stateNode;t.pendingContext?fd(n,t.pendingContext,t.pendingContext!==t.context):t.context&&fd(n,t.context,!1),ys(n,t.containerInfo)}function ff(n,t,o,d,y){return xi(),cs(y),t.flags|=256,ot(n,t,o,d),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ds(n){return{baseLanes:n,cachePool:null,transitions:null}}function pf(n,t,o){var d=t.pendingProps,y=Tn.current,b=!1,T=(t.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(y&2)!==0),z?(b=!0,t.flags&=-129):(n===null||n.memoizedState!==null)&&(y|=1),yn(Tn,y&1),n===null)return us(t),n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((t.mode&1)===0?t.lanes=1:n.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(T=d.children,n=d.fallback,b?(d=t.mode,b=t.child,T={mode:"hidden",children:T},(d&1)===0&&b!==null?(b.childLanes=0,b.pendingProps=T):b=$o(T,d,0,null),n=ti(n,d,o,null),b.return=t,n.return=t,b.sibling=n,t.child=b,t.child.memoizedState=Ds(o),t.memoizedState=Ps,n):Bs(t,T));if(y=n.memoizedState,y!==null&&(z=y.dehydrated,z!==null))return Ey(n,t,T,d,z,y,o);if(b){b=d.fallback,T=t.mode,y=n.child,z=y.sibling;var W={mode:"hidden",children:d.children};return(T&1)===0&&t.child!==y?(d=t.child,d.childLanes=0,d.pendingProps=W,t.deletions=null):(d=Lr(y,W),d.subtreeFlags=y.subtreeFlags&14680064),z!==null?b=Lr(z,b):(b=ti(b,T,o,null),b.flags|=2),b.return=t,d.return=t,d.sibling=b,t.child=d,d=b,b=t.child,T=n.child.memoizedState,T=T===null?Ds(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},b.memoizedState=T,b.childLanes=n.childLanes&~o,t.memoizedState=Ps,d}return b=n.child,n=b.sibling,d=Lr(b,{mode:"visible",children:d.children}),(t.mode&1)===0&&(d.lanes=o),d.return=t,d.sibling=null,n!==null&&(o=t.deletions,o===null?(t.deletions=[n],t.flags|=16):o.push(n)),t.child=d,t.memoizedState=null,d}function Bs(n,t){return t=$o({mode:"visible",children:t},n.mode,0,null),t.return=n,n.child=t}function Oo(n,t,o,d){return d!==null&&cs(d),Ei(t,n.child,null,o),n=Bs(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Ey(n,t,o,d,y,b,T){if(o)return t.flags&256?(t.flags&=-257,d=Ms(Error(r(422))),Oo(n,t,T,d)):t.memoizedState!==null?(t.child=n.child,t.flags|=128,null):(b=d.fallback,y=t.mode,d=$o({mode:"visible",children:d.children},y,0,null),b=ti(b,y,T,null),b.flags|=2,d.return=t,b.return=t,d.sibling=b,t.child=d,(t.mode&1)!==0&&Ei(t,n.child,null,T),t.child.memoizedState=Ds(T),t.memoizedState=Ps,b);if((t.mode&1)===0)return Oo(n,t,T,null);if(y.data==="$!"){if(d=y.nextSibling&&y.nextSibling.dataset,d)var z=d.dgst;return d=z,b=Error(r(419)),d=Ms(b,d,void 0),Oo(n,t,T,d)}if(z=(T&n.childLanes)!==0,pt||z){if(d=Hn,d!==null){switch(T&-T){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=(y&(d.suspendedLanes|T))!==0?0:y,y!==0&&y!==b.retryLane&&(b.retryLane=y,ar(n,y),Vt(d,n,y,-1))}return Qs(),d=Ms(Error(r(421))),Oo(n,t,T,d)}return y.data==="$?"?(t.flags|=128,t.child=n.child,t=Fy.bind(null,n),y._reactRetry=t,null):(n=b.treeContext,vt=br(y.nextSibling),kt=t,_n=!0,Ft=null,n!==null&&(It[At++]=rr,It[At++]=ir,It[At++]=Kr,rr=n.id,ir=n.overflow,Kr=t),t=Bs(t,d.children),t.flags|=4096,t)}function gf(n,t,o){n.lanes|=t;var d=n.alternate;d!==null&&(d.lanes|=t),gs(n.return,t,o)}function Fs(n,t,o,d,y){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:d,tail:o,tailMode:y}:(b.isBackwards=t,b.rendering=null,b.renderingStartTime=0,b.last=d,b.tail=o,b.tailMode=y)}function hf(n,t,o){var d=t.pendingProps,y=d.revealOrder,b=d.tail;if(ot(n,t,d.children,o),d=Tn.current,(d&2)!==0)d=d&1|2,t.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gf(n,o,t);else if(n.tag===19)gf(n,o,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(yn(Tn,d),(t.mode&1)===0)t.memoizedState=null;else switch(y){case"forwards":for(o=t.child,y=null;o!==null;)n=o.alternate,n!==null&&Eo(n)===null&&(y=o),o=o.sibling;o=y,o===null?(y=t.child,t.child=null):(y=o.sibling,o.sibling=null),Fs(t,!1,y,o,b);break;case"backwards":for(o=null,y=t.child,t.child=null;y!==null;){if(n=y.alternate,n!==null&&Eo(n)===null){t.child=y;break}n=y.sibling,y.sibling=o,o=y,y=n}Fs(t,!0,o,null,b);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(n,t){(t.mode&1)===0&&n!==null&&(n.alternate=null,t.alternate=null,t.flags|=2)}function lr(n,t,o){if(n!==null&&(t.dependencies=n.dependencies),Xr|=t.lanes,(o&t.childLanes)===0)return null;if(n!==null&&t.child!==n.child)throw Error(r(153));if(t.child!==null){for(n=t.child,o=Lr(n,n.pendingProps),t.child=o,o.return=t;n.sibling!==null;)n=n.sibling,o=o.sibling=Lr(n,n.pendingProps),o.return=t;o.sibling=null}return t.child}function Ty(n,t,o){switch(t.tag){case 3:df(t),xi();break;case 5:Id(t);break;case 1:ft(t.type)&&ho(t);break;case 4:ys(t,t.stateNode.containerInfo);break;case 10:var d=t.type._context,y=t.memoizedProps.value;yn(ko,d._currentValue),d._currentValue=y;break;case 13:if(d=t.memoizedState,d!==null)return d.dehydrated!==null?(yn(Tn,Tn.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?pf(n,t,o):(yn(Tn,Tn.current&1),n=lr(n,t,o),n!==null?n.sibling:null);yn(Tn,Tn.current&1);break;case 19:if(d=(o&t.childLanes)!==0,(n.flags&128)!==0){if(d)return hf(n,t,o);t.flags|=128}if(y=t.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),yn(Tn,Tn.current),d)break;return null;case 22:case 23:return t.lanes=0,sf(n,t,o)}return lr(n,t,o)}var mf,zs,yf,wf;mf=function(n,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zs=function(){},yf=function(n,t,o,d){var y=n.memoizedProps;if(y!==d){n=t.stateNode,Jr(qt.current);var b=null;switch(o){case"input":y=E(n,y),d=E(n,d),b=[];break;case"select":y=L({},y,{value:void 0}),d=L({},d,{value:void 0}),b=[];break;case"textarea":y=ee(n,y),d=ee(n,d),b=[];break;default:typeof y.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=fo)}fn(o,d);var T;o=null;for(re in y)if(!d.hasOwnProperty(re)&&y.hasOwnProperty(re)&&y[re]!=null)if(re==="style"){var z=y[re];for(T in z)z.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?b||(b=[]):(b=b||[]).push(re,null));for(re in d){var W=d[re];if(z=y!=null?y[re]:void 0,d.hasOwnProperty(re)&&W!==z&&(W!=null||z!=null))if(re==="style")if(z){for(T in z)!z.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in W)W.hasOwnProperty(T)&&z[T]!==W[T]&&(o||(o={}),o[T]=W[T])}else o||(b||(b=[]),b.push(re,o)),o=W;else re==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,z=z?z.__html:void 0,W!=null&&z!==W&&(b=b||[]).push(re,W)):re==="children"?typeof W!="string"&&typeof W!="number"||(b=b||[]).push(re,""+W):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(W!=null&&re==="onScroll"&&Sn("scroll",n),b||z===W||(b=[])):(b=b||[]).push(re,W))}o&&(b=b||[]).push("style",o);var re=b;(t.updateQueue=re)&&(t.flags|=4)}},wf=function(n,t,o,d){o!==d&&(t.flags|=4)};function wa(n,t){if(!_n)switch(n.tailMode){case"hidden":t=n.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var d=null;o!==null;)o.alternate!==null&&(d=o),o=o.sibling;d===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function Xn(n){var t=n.alternate!==null&&n.alternate.child===n.child,o=0,d=0;if(t)for(var y=n.child;y!==null;)o|=y.lanes|y.childLanes,d|=y.subtreeFlags&14680064,d|=y.flags&14680064,y.return=n,y=y.sibling;else for(y=n.child;y!==null;)o|=y.lanes|y.childLanes,d|=y.subtreeFlags,d|=y.flags,y.return=n,y=y.sibling;return n.subtreeFlags|=d,n.childLanes=o,t}function Cy(n,t,o){var d=t.pendingProps;switch(ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xn(t),null;case 1:return ft(t.type)&&go(),Xn(t),null;case 3:return d=t.stateNode,Ii(),kn(dt),kn(Jn),Ss(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(bo(t)?t.flags|=4:n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ft!==null&&(Js(Ft),Ft=null))),zs(n,t),Xn(t),null;case 5:ws(t);var y=Jr(pa.current);if(o=t.type,n!==null&&t.stateNode!=null)yf(n,t,o,d,y),n.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!d){if(t.stateNode===null)throw Error(r(166));return Xn(t),null}if(n=Jr(qt.current),bo(t)){d=t.stateNode,o=t.type;var b=t.memoizedProps;switch(d[Kt]=t,d[sa]=b,n=(t.mode&1)!==0,o){case"dialog":Sn("cancel",d),Sn("close",d);break;case"iframe":case"object":case"embed":Sn("load",d);break;case"video":case"audio":for(y=0;y<aa.length;y++)Sn(aa[y],d);break;case"source":Sn("error",d);break;case"img":case"image":case"link":Sn("error",d),Sn("load",d);break;case"details":Sn("toggle",d);break;case"input":se(d,b),Sn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!b.multiple},Sn("invalid",d);break;case"textarea":we(d,b),Sn("invalid",d)}fn(o,b),y=null;for(var T in b)if(b.hasOwnProperty(T)){var z=b[T];T==="children"?typeof z=="string"?d.textContent!==z&&(b.suppressHydrationWarning!==!0&&co(d.textContent,z,n),y=["children",z]):typeof z=="number"&&d.textContent!==""+z&&(b.suppressHydrationWarning!==!0&&co(d.textContent,z,n),y=["children",""+z]):s.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Sn("scroll",d)}switch(o){case"input":an(d),N(d,b,!0);break;case"textarea":an(d),be(d);break;case"select":case"option":break;default:typeof b.onClick=="function"&&(d.onclick=fo)}d=y,t.updateQueue=d,d!==null&&(t.flags|=4)}else{T=y.nodeType===9?y:y.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=q(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=T.createElement(o,{is:d.is}):(n=T.createElement(o),o==="select"&&(T=n,d.multiple?T.multiple=!0:d.size&&(T.size=d.size))):n=T.createElementNS(n,o),n[Kt]=t,n[sa]=d,mf(n,t,!1,!1),t.stateNode=n;e:{switch(T=tt(o,d),o){case"dialog":Sn("cancel",n),Sn("close",n),y=d;break;case"iframe":case"object":case"embed":Sn("load",n),y=d;break;case"video":case"audio":for(y=0;y<aa.length;y++)Sn(aa[y],n);y=d;break;case"source":Sn("error",n),y=d;break;case"img":case"image":case"link":Sn("error",n),Sn("load",n),y=d;break;case"details":Sn("toggle",n),y=d;break;case"input":se(n,d),y=E(n,d),Sn("invalid",n);break;case"option":y=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},y=L({},d,{value:void 0}),Sn("invalid",n);break;case"textarea":we(n,d),y=ee(n,d),Sn("invalid",n);break;default:y=d}fn(o,y),z=y;for(b in z)if(z.hasOwnProperty(b)){var W=z[b];b==="style"?Yn(n,W):b==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&je(n,W)):b==="children"?typeof W=="string"?(o!=="textarea"||W!=="")&&Ze(n,W):typeof W=="number"&&Ze(n,""+W):b!=="suppressContentEditableWarning"&&b!=="suppressHydrationWarning"&&b!=="autoFocus"&&(s.hasOwnProperty(b)?W!=null&&b==="onScroll"&&Sn("scroll",n):W!=null&&I(n,b,W,T))}switch(o){case"input":an(n),N(n,d,!1);break;case"textarea":an(n),be(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Ie(d.value));break;case"select":n.multiple=!!d.multiple,b=d.value,b!=null?pe(n,!!d.multiple,b,!1):d.defaultValue!=null&&pe(n,!!d.multiple,d.defaultValue,!0);break;default:typeof y.onClick=="function"&&(n.onclick=fo)}switch(o){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xn(t),null;case 6:if(n&&t.stateNode!=null)wf(n,t,n.memoizedProps,d);else{if(typeof d!="string"&&t.stateNode===null)throw Error(r(166));if(o=Jr(pa.current),Jr(qt.current),bo(t)){if(d=t.stateNode,o=t.memoizedProps,d[Kt]=t,(b=d.nodeValue!==o)&&(n=kt,n!==null))switch(n.tag){case 3:co(d.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&co(d.nodeValue,o,(n.mode&1)!==0)}b&&(t.flags|=4)}else d=(o.nodeType===9?o:o.ownerDocument).createTextNode(d),d[Kt]=t,t.stateNode=d}return Xn(t),null;case 13:if(kn(Tn),d=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(_n&&vt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sd(),xi(),t.flags|=98560,b=!1;else if(b=bo(t),d!==null&&d.dehydrated!==null){if(n===null){if(!b)throw Error(r(318));if(b=t.memoizedState,b=b!==null?b.dehydrated:null,!b)throw Error(r(317));b[Kt]=t}else xi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xn(t),b=!1}else Ft!==null&&(Js(Ft),Ft=null),b=!0;if(!b)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(t.child.flags|=8192,(t.mode&1)!==0&&(n===null||(Tn.current&1)!==0?jn===0&&(jn=3):Qs())),t.updateQueue!==null&&(t.flags|=4),Xn(t),null);case 4:return Ii(),zs(n,t),n===null&&oa(t.stateNode.containerInfo),Xn(t),null;case 10:return ps(t.type._context),Xn(t),null;case 17:return ft(t.type)&&go(),Xn(t),null;case 19:if(kn(Tn),b=t.memoizedState,b===null)return Xn(t),null;if(d=(t.flags&128)!==0,T=b.rendering,T===null)if(d)wa(b,!1);else{if(jn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(T=Eo(n),T!==null){for(t.flags|=128,wa(b,!1),d=T.updateQueue,d!==null&&(t.updateQueue=d,t.flags|=4),t.subtreeFlags=0,d=o,o=t.child;o!==null;)b=o,n=d,b.flags&=14680066,T=b.alternate,T===null?(b.childLanes=0,b.lanes=n,b.child=null,b.subtreeFlags=0,b.memoizedProps=null,b.memoizedState=null,b.updateQueue=null,b.dependencies=null,b.stateNode=null):(b.childLanes=T.childLanes,b.lanes=T.lanes,b.child=T.child,b.subtreeFlags=0,b.deletions=null,b.memoizedProps=T.memoizedProps,b.memoizedState=T.memoizedState,b.updateQueue=T.updateQueue,b.type=T.type,n=T.dependencies,b.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return yn(Tn,Tn.current&1|2),t.child}n=n.sibling}b.tail!==null&&xn()>Oi&&(t.flags|=128,d=!0,wa(b,!1),t.lanes=4194304)}else{if(!d)if(n=Eo(T),n!==null){if(t.flags|=128,d=!0,o=n.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),wa(b,!0),b.tail===null&&b.tailMode==="hidden"&&!T.alternate&&!_n)return Xn(t),null}else 2*xn()-b.renderingStartTime>Oi&&o!==1073741824&&(t.flags|=128,d=!0,wa(b,!1),t.lanes=4194304);b.isBackwards?(T.sibling=t.child,t.child=T):(o=b.last,o!==null?o.sibling=T:t.child=T,b.last=T)}return b.tail!==null?(t=b.tail,b.rendering=t,b.tail=t.sibling,b.renderingStartTime=xn(),t.sibling=null,o=Tn.current,yn(Tn,d?o&1|2:o&1),t):(Xn(t),null);case 22:case 23:return Xs(),d=t.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(t.flags|=8192),d&&(t.mode&1)!==0?(_t&1073741824)!==0&&(Xn(t),t.subtreeFlags&6&&(t.flags|=8192)):Xn(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function Iy(n,t){switch(ls(t),t.tag){case 1:return ft(t.type)&&go(),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return Ii(),kn(dt),kn(Jn),Ss(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 5:return ws(t),null;case 13:if(kn(Tn),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(r(340));xi()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return kn(Tn),null;case 4:return Ii(),null;case 10:return ps(t.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Ro=!1,Qn=!1,Ay=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Li(n,t){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(d){Ln(n,t,d)}else o.current=null}function Us(n,t,o){try{o()}catch(d){Ln(n,t,d)}}var bf=!1;function Ly(n,t){if(Xl=Qa,n=Jc(),Hl(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var d=o.getSelection&&o.getSelection();if(d&&d.rangeCount!==0){o=d.anchorNode;var y=d.anchorOffset,b=d.focusNode;d=d.focusOffset;try{o.nodeType,b.nodeType}catch{o=null;break e}var T=0,z=-1,W=-1,re=0,me=0,ye=n,he=null;n:for(;;){for(var Le;ye!==o||y!==0&&ye.nodeType!==3||(z=T+y),ye!==b||d!==0&&ye.nodeType!==3||(W=T+d),ye.nodeType===3&&(T+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)he=ye,ye=Le;for(;;){if(ye===n)break n;if(he===o&&++re===y&&(z=T),he===b&&++me===d&&(W=T),(Le=ye.nextSibling)!==null)break;ye=he,he=ye.parentNode}ye=Le}o=z===-1||W===-1?null:{start:z,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ql={focusedElem:n,selectionRange:o},Qa=!1,Re=t;Re!==null;)if(t=Re,n=t.child,(t.subtreeFlags&1028)!==0&&n!==null)n.return=t,Re=n;else for(;Re!==null;){t=Re;try{var De=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(De!==null){var Be=De.memoizedProps,Nn=De.memoizedState,X=t.stateNode,H=X.getSnapshotBeforeUpdate(t.elementType===t.type?Be:zt(t.type,Be),Nn);X.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var te=t.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ve){Ln(t,t.return,ve)}if(n=t.sibling,n!==null){n.return=t.return,Re=n;break}Re=t.return}return De=bf,bf=!1,De}function ba(n,t,o){var d=t.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var y=d=d.next;do{if((y.tag&n)===n){var b=y.destroy;y.destroy=void 0,b!==void 0&&Us(t,o,b)}y=y.next}while(y!==d)}}function Po(n,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&n)===n){var d=o.create;o.destroy=d()}o=o.next}while(o!==t)}}function js(n){var t=n.ref;if(t!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof t=="function"?t(n):t.current=n}}function Sf(n){var t=n.alternate;t!==null&&(n.alternate=null,Sf(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&(delete t[Kt],delete t[sa],delete t[rs],delete t[fy],delete t[py])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kf(n){return n.tag===5||n.tag===3||n.tag===4}function vf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vs(n,t,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(n,t):o.insertBefore(n,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(n,o)):(t=o,t.appendChild(n)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=fo));else if(d!==4&&(n=n.child,n!==null))for(Vs(n,t,o),n=n.sibling;n!==null;)Vs(n,t,o),n=n.sibling}function Ws(n,t,o){var d=n.tag;if(d===5||d===6)n=n.stateNode,t?o.insertBefore(n,t):o.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Ws(n,t,o),n=n.sibling;n!==null;)Ws(n,t,o),n=n.sibling}var Kn=null,Ut=!1;function Er(n,t,o){for(o=o.child;o!==null;)_f(n,t,o),o=o.sibling}function _f(n,t,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Qe,o)}catch{}switch(o.tag){case 5:Qn||Li(o,t);case 6:var d=Kn,y=Ut;Kn=null,Er(n,t,o),Kn=d,Ut=y,Kn!==null&&(Ut?(n=Kn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Kn.removeChild(o.stateNode));break;case 18:Kn!==null&&(Ut?(n=Kn,o=o.stateNode,n.nodeType===8?ts(n.parentNode,o):n.nodeType===1&&ts(n,o),Zi(n)):ts(Kn,o.stateNode));break;case 4:d=Kn,y=Ut,Kn=o.stateNode.containerInfo,Ut=!0,Er(n,t,o),Kn=d,Ut=y;break;case 0:case 11:case 14:case 15:if(!Qn&&(d=o.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){y=d=d.next;do{var b=y,T=b.destroy;b=b.tag,T!==void 0&&((b&2)!==0||(b&4)!==0)&&Us(o,t,T),y=y.next}while(y!==d)}Er(n,t,o);break;case 1:if(!Qn&&(Li(o,t),d=o.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=o.memoizedProps,d.state=o.memoizedState,d.componentWillUnmount()}catch(z){Ln(o,t,z)}Er(n,t,o);break;case 21:Er(n,t,o);break;case 22:o.mode&1?(Qn=(d=Qn)||o.memoizedState!==null,Er(n,t,o),Qn=d):Er(n,t,o);break;default:Er(n,t,o)}}function xf(n){var t=n.updateQueue;if(t!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Ay),t.forEach(function(d){var y=zy.bind(null,n,d);o.has(d)||(o.add(d),d.then(y,y))})}}function jt(n,t){var o=t.deletions;if(o!==null)for(var d=0;d<o.length;d++){var y=o[d];try{var b=n,T=t,z=T;e:for(;z!==null;){switch(z.tag){case 5:Kn=z.stateNode,Ut=!1;break e;case 3:Kn=z.stateNode.containerInfo,Ut=!0;break e;case 4:Kn=z.stateNode.containerInfo,Ut=!0;break e}z=z.return}if(Kn===null)throw Error(r(160));_f(b,T,y),Kn=null,Ut=!1;var W=y.alternate;W!==null&&(W.return=null),y.return=null}catch(re){Ln(y,t,re)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ef(t,n),t=t.sibling}function Ef(n,t){var o=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jt(t,n),Jt(n),d&4){try{ba(3,n,n.return),Po(3,n)}catch(Be){Ln(n,n.return,Be)}try{ba(5,n,n.return)}catch(Be){Ln(n,n.return,Be)}}break;case 1:jt(t,n),Jt(n),d&512&&o!==null&&Li(o,o.return);break;case 5:if(jt(t,n),Jt(n),d&512&&o!==null&&Li(o,o.return),n.flags&32){var y=n.stateNode;try{Ze(y,"")}catch(Be){Ln(n,n.return,Be)}}if(d&4&&(y=n.stateNode,y!=null)){var b=n.memoizedProps,T=o!==null?o.memoizedProps:b,z=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{z==="input"&&b.type==="radio"&&b.name!=null&&J(y,b),tt(z,T);var re=tt(z,b);for(T=0;T<W.length;T+=2){var me=W[T],ye=W[T+1];me==="style"?Yn(y,ye):me==="dangerouslySetInnerHTML"?je(y,ye):me==="children"?Ze(y,ye):I(y,me,ye,re)}switch(z){case"input":F(y,b);break;case"textarea":Ee(y,b);break;case"select":var he=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!b.multiple;var Le=b.value;Le!=null?pe(y,!!b.multiple,Le,!1):he!==!!b.multiple&&(b.defaultValue!=null?pe(y,!!b.multiple,b.defaultValue,!0):pe(y,!!b.multiple,b.multiple?[]:"",!1))}y[sa]=b}catch(Be){Ln(n,n.return,Be)}}break;case 6:if(jt(t,n),Jt(n),d&4){if(n.stateNode===null)throw Error(r(162));y=n.stateNode,b=n.memoizedProps;try{y.nodeValue=b}catch(Be){Ln(n,n.return,Be)}}break;case 3:if(jt(t,n),Jt(n),d&4&&o!==null&&o.memoizedState.isDehydrated)try{Zi(t.containerInfo)}catch(Be){Ln(n,n.return,Be)}break;case 4:jt(t,n),Jt(n);break;case 13:jt(t,n),Jt(n),y=n.child,y.flags&8192&&(b=y.memoizedState!==null,y.stateNode.isHidden=b,!b||y.alternate!==null&&y.alternate.memoizedState!==null||(Gs=xn())),d&4&&xf(n);break;case 22:if(me=o!==null&&o.memoizedState!==null,n.mode&1?(Qn=(re=Qn)||me,jt(t,n),Qn=re):jt(t,n),Jt(n),d&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!me&&(n.mode&1)!==0)for(Re=n,me=n.child;me!==null;){for(ye=Re=me;Re!==null;){switch(he=Re,Le=he.child,he.tag){case 0:case 11:case 14:case 15:ba(4,he,he.return);break;case 1:Li(he,he.return);var De=he.stateNode;if(typeof De.componentWillUnmount=="function"){d=he,o=he.return;try{t=d,De.props=t.memoizedProps,De.state=t.memoizedState,De.componentWillUnmount()}catch(Be){Ln(d,o,Be)}}break;case 5:Li(he,he.return);break;case 22:if(he.memoizedState!==null){If(ye);continue}}Le!==null?(Le.return=he,Re=Le):If(ye)}me=me.sibling}e:for(me=null,ye=n;;){if(ye.tag===5){if(me===null){me=ye;try{y=ye.stateNode,re?(b=y.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none"):(z=ye.stateNode,W=ye.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,z.style.display=rn("display",T))}catch(Be){Ln(n,n.return,Be)}}}else if(ye.tag===6){if(me===null)try{ye.stateNode.nodeValue=re?"":ye.memoizedProps}catch(Be){Ln(n,n.return,Be)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;me===ye&&(me=null),ye=ye.return}me===ye&&(me=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:jt(t,n),Jt(n),d&4&&xf(n);break;case 21:break;default:jt(t,n),Jt(n)}}function Jt(n){var t=n.flags;if(t&2){try{e:{for(var o=n.return;o!==null;){if(kf(o)){var d=o;break e}o=o.return}throw Error(r(160))}switch(d.tag){case 5:var y=d.stateNode;d.flags&32&&(Ze(y,""),d.flags&=-33);var b=vf(n);Ws(n,b,y);break;case 3:case 4:var T=d.stateNode.containerInfo,z=vf(n);Vs(n,z,T);break;default:throw Error(r(161))}}catch(W){Ln(n,n.return,W)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function My(n,t,o){Re=n,Tf(n)}function Tf(n,t,o){for(var d=(n.mode&1)!==0;Re!==null;){var y=Re,b=y.child;if(y.tag===22&&d){var T=y.memoizedState!==null||Ro;if(!T){var z=y.alternate,W=z!==null&&z.memoizedState!==null||Qn;z=Ro;var re=Qn;if(Ro=T,(Qn=W)&&!re)for(Re=y;Re!==null;)T=Re,W=T.child,T.tag===22&&T.memoizedState!==null?Af(y):W!==null?(W.return=T,Re=W):Af(y);for(;b!==null;)Re=b,Tf(b),b=b.sibling;Re=y,Ro=z,Qn=re}Cf(n)}else(y.subtreeFlags&8772)!==0&&b!==null?(b.return=y,Re=b):Cf(n)}}function Cf(n){for(;Re!==null;){var t=Re;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qn||Po(5,t);break;case 1:var d=t.stateNode;if(t.flags&4&&!Qn)if(o===null)d.componentDidMount();else{var y=t.elementType===t.type?o.memoizedProps:zt(t.type,o.memoizedProps);d.componentDidUpdate(y,o.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var b=t.updateQueue;b!==null&&Cd(t,b,d);break;case 3:var T=t.updateQueue;if(T!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Cd(t,T,o)}break;case 5:var z=t.stateNode;if(o===null&&t.flags&4){o=z;var W=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&o.focus();break;case"img":W.src&&(o.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var re=t.alternate;if(re!==null){var me=re.memoizedState;if(me!==null){var ye=me.dehydrated;ye!==null&&Zi(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Qn||t.flags&512&&js(t)}catch(he){Ln(t,t.return,he)}}if(t===n){Re=null;break}if(o=t.sibling,o!==null){o.return=t.return,Re=o;break}Re=t.return}}function If(n){for(;Re!==null;){var t=Re;if(t===n){Re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Re=o;break}Re=t.return}}function Af(n){for(;Re!==null;){var t=Re;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{Po(4,t)}catch(W){Ln(t,o,W)}break;case 1:var d=t.stateNode;if(typeof d.componentDidMount=="function"){var y=t.return;try{d.componentDidMount()}catch(W){Ln(t,y,W)}}var b=t.return;try{js(t)}catch(W){Ln(t,b,W)}break;case 5:var T=t.return;try{js(t)}catch(W){Ln(t,T,W)}}}catch(W){Ln(t,t.return,W)}if(t===n){Re=null;break}var z=t.sibling;if(z!==null){z.return=t.return,Re=z;break}Re=t.return}}var Oy=Math.ceil,Do=D.ReactCurrentDispatcher,Hs=D.ReactCurrentOwner,Ot=D.ReactCurrentBatchConfig,un=0,Hn=null,Pn=null,qn=0,_t=0,Mi=Sr(0),jn=0,Sa=null,Xr=0,Bo=0,$s=0,ka=null,gt=null,Gs=0,Oi=1/0,sr=null,Fo=!1,Ks=null,Tr=null,zo=!1,Cr=null,Uo=0,va=0,qs=null,jo=-1,Vo=0;function lt(){return(un&6)!==0?xn():jo!==-1?jo:jo=xn()}function Ir(n){return(n.mode&1)===0?1:(un&2)!==0&&qn!==0?qn&-qn:hy.transition!==null?(Vo===0&&(Vo=Ja()),Vo):(n=sn,n!==0||(n=window.event,n=n===void 0?16:Lc(n.type)),n)}function Vt(n,t,o,d){if(50<va)throw va=0,qs=null,Error(r(185));hr(n,o,d),((un&2)===0||n!==Hn)&&(n===Hn&&((un&2)===0&&(Bo|=o),jn===4&&Ar(n,qn)),ht(n,d),o===1&&un===0&&(t.mode&1)===0&&(Oi=xn()+500,mo&&vr()))}function ht(n,t){var o=n.callbackNode;Ml(n,t);var d=Vr(n,n===Hn?qn:0);if(d===0)o!==null&&Dt(o),n.callbackNode=null,n.callbackPriority=0;else if(t=d&-d,n.callbackPriority!==t){if(o!=null&&Dt(o),t===1)n.tag===0?gy(Mf.bind(null,n)):hd(Mf.bind(null,n)),cy(function(){(un&6)===0&&vr()}),o=null;else{switch(Je(d)){case 1:o=$i;break;case 4:o=Ur;break;case 16:o=ci;break;case 536870912:o=ze;break;default:o=ci}o=zf(o,Lf.bind(null,n))}n.callbackPriority=t,n.callbackNode=o}}function Lf(n,t){if(jo=-1,Vo=0,(un&6)!==0)throw Error(r(327));var o=n.callbackNode;if(Ni()&&n.callbackNode!==o)return null;var d=Vr(n,n===Hn?qn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||t)t=Wo(n,d);else{t=d;var y=un;un|=2;var b=Nf();(Hn!==n||qn!==t)&&(sr=null,Oi=xn()+500,ei(n,t));do try{Py();break}catch(z){Of(n,z)}while(!0);fs(),Do.current=b,un=y,Pn!==null?t=0:(Hn=null,qn=0,t=jn)}if(t!==0){if(t===2&&(y=Gi(n),y!==0&&(d=y,t=Ys(n,y))),t===1)throw o=Sa,ei(n,0),Ar(n,d),ht(n,xn()),o;if(t===6)Ar(n,d);else{if(y=n.current.alternate,(d&30)===0&&!Ny(y)&&(t=Wo(n,d),t===2&&(b=Gi(n),b!==0&&(d=b,t=Ys(n,b))),t===1))throw o=Sa,ei(n,0),Ar(n,d),ht(n,xn()),o;switch(n.finishedWork=y,n.finishedLanes=d,t){case 0:case 1:throw Error(r(345));case 2:ni(n,gt,sr);break;case 3:if(Ar(n,d),(d&130023424)===d&&(t=Gs+500-xn(),10<t)){if(Vr(n,0)!==0)break;if(y=n.suspendedLanes,(y&d)!==d){lt(),n.pingedLanes|=n.suspendedLanes&y;break}n.timeoutHandle=ns(ni.bind(null,n,gt,sr),t);break}ni(n,gt,sr);break;case 4:if(Ar(n,d),(d&4194240)===d)break;for(t=n.eventTimes,y=-1;0<d;){var T=31-En(d);b=1<<T,T=t[T],T>y&&(y=T),d&=~b}if(d=y,d=xn()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Oy(d/1960))-d,10<d){n.timeoutHandle=ns(ni.bind(null,n,gt,sr),d);break}ni(n,gt,sr);break;case 5:ni(n,gt,sr);break;default:throw Error(r(329))}}}return ht(n,xn()),n.callbackNode===o?Lf.bind(null,n):null}function Ys(n,t){var o=ka;return n.current.memoizedState.isDehydrated&&(ei(n,t).flags|=256),n=Wo(n,t),n!==2&&(t=gt,gt=o,t!==null&&Js(t)),n}function Js(n){gt===null?gt=n:gt.push.apply(gt,n)}function Ny(n){for(var t=n;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var d=0;d<o.length;d++){var y=o[d],b=y.getSnapshot;y=y.value;try{if(!Bt(b(),y))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ar(n,t){for(t&=~$s,t&=~Bo,n.suspendedLanes|=t,n.pingedLanes&=~t,n=n.expirationTimes;0<t;){var o=31-En(t),d=1<<o;n[o]=-1,t&=~d}}function Mf(n){if((un&6)!==0)throw Error(r(327));Ni();var t=Vr(n,0);if((t&1)===0)return ht(n,xn()),null;var o=Wo(n,t);if(n.tag!==0&&o===2){var d=Gi(n);d!==0&&(t=d,o=Ys(n,d))}if(o===1)throw o=Sa,ei(n,0),Ar(n,t),ht(n,xn()),o;if(o===6)throw Error(r(345));return n.finishedWork=n.current.alternate,n.finishedLanes=t,ni(n,gt,sr),ht(n,xn()),null}function Zs(n,t){var o=un;un|=1;try{return n(t)}finally{un=o,un===0&&(Oi=xn()+500,mo&&vr())}}function Qr(n){Cr!==null&&Cr.tag===0&&(un&6)===0&&Ni();var t=un;un|=1;var o=Ot.transition,d=sn;try{if(Ot.transition=null,sn=1,n)return n()}finally{sn=d,Ot.transition=o,un=t,(un&6)===0&&vr()}}function Xs(){_t=Mi.current,kn(Mi)}function ei(n,t){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,uy(o)),Pn!==null)for(o=Pn.return;o!==null;){var d=o;switch(ls(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&go();break;case 3:Ii(),kn(dt),kn(Jn),Ss();break;case 5:ws(d);break;case 4:Ii();break;case 13:kn(Tn);break;case 19:kn(Tn);break;case 10:ps(d.type._context);break;case 22:case 23:Xs()}o=o.return}if(Hn=n,Pn=n=Lr(n.current,null),qn=_t=t,jn=0,Sa=null,$s=Bo=Xr=0,gt=ka=null,Yr!==null){for(t=0;t<Yr.length;t++)if(o=Yr[t],d=o.interleaved,d!==null){o.interleaved=null;var y=d.next,b=o.pending;if(b!==null){var T=b.next;b.next=y,d.next=T}o.pending=d}Yr=null}return n}function Of(n,t){do{var o=Pn;try{if(fs(),To.current=Lo,Co){for(var d=Cn.memoizedState;d!==null;){var y=d.queue;y!==null&&(y.pending=null),d=d.next}Co=!1}if(Zr=0,Wn=Un=Cn=null,ga=!1,ha=0,Hs.current=null,o===null||o.return===null){jn=1,Sa=t,Pn=null;break}e:{var b=n,T=o.return,z=o,W=t;if(t=qn,z.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var re=W,me=z,ye=me.tag;if((me.mode&1)===0&&(ye===0||ye===11||ye===15)){var he=me.alternate;he?(me.updateQueue=he.updateQueue,me.memoizedState=he.memoizedState,me.lanes=he.lanes):(me.updateQueue=null,me.memoizedState=null)}var Le=tf(T);if(Le!==null){Le.flags&=-257,rf(Le,T,z,b,t),Le.mode&1&&nf(b,re,t),t=Le,W=re;var De=t.updateQueue;if(De===null){var Be=new Set;Be.add(W),t.updateQueue=Be}else De.add(W);break e}else{if((t&1)===0){nf(b,re,t),Qs();break e}W=Error(r(426))}}else if(_n&&z.mode&1){var Nn=tf(T);if(Nn!==null){(Nn.flags&65536)===0&&(Nn.flags|=256),rf(Nn,T,z,b,t),cs(Ai(W,z));break e}}b=W=Ai(W,z),jn!==4&&(jn=2),ka===null?ka=[b]:ka.push(b),b=T;do{switch(b.tag){case 3:b.flags|=65536,t&=-t,b.lanes|=t;var X=Qd(b,W,t);Td(b,X);break e;case 1:z=W;var H=b.type,te=b.stateNode;if((b.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Tr===null||!Tr.has(te)))){b.flags|=65536,t&=-t,b.lanes|=t;var ve=ef(b,z,t);Td(b,ve);break e}}b=b.return}while(b!==null)}Pf(o)}catch(Fe){t=Fe,Pn===o&&o!==null&&(Pn=o=o.return);continue}break}while(!0)}function Nf(){var n=Do.current;return Do.current=Lo,n===null?Lo:n}function Qs(){(jn===0||jn===3||jn===2)&&(jn=4),Hn===null||(Xr&268435455)===0&&(Bo&268435455)===0||Ar(Hn,qn)}function Wo(n,t){var o=un;un|=2;var d=Nf();(Hn!==n||qn!==t)&&(sr=null,ei(n,t));do try{Ry();break}catch(y){Of(n,y)}while(!0);if(fs(),un=o,Do.current=d,Pn!==null)throw Error(r(261));return Hn=null,qn=0,jn}function Ry(){for(;Pn!==null;)Rf(Pn)}function Py(){for(;Pn!==null&&!qa();)Rf(Pn)}function Rf(n){var t=Ff(n.alternate,n,_t);n.memoizedProps=n.pendingProps,t===null?Pf(n):Pn=t,Hs.current=null}function Pf(n){var t=n;do{var o=t.alternate;if(n=t.return,(t.flags&32768)===0){if(o=Cy(o,t,_t),o!==null){Pn=o;return}}else{if(o=Iy(o,t),o!==null){o.flags&=32767,Pn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{jn=6,Pn=null;return}}if(t=t.sibling,t!==null){Pn=t;return}Pn=t=n}while(t!==null);jn===0&&(jn=5)}function ni(n,t,o){var d=sn,y=Ot.transition;try{Ot.transition=null,sn=1,Dy(n,t,o,d)}finally{Ot.transition=y,sn=d}return null}function Dy(n,t,o,d){do Ni();while(Cr!==null);if((un&6)!==0)throw Error(r(327));o=n.finishedWork;var y=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(r(177));n.callbackNode=null,n.callbackPriority=0;var b=o.lanes|o.childLanes;if(Ct(n,b),n===Hn&&(Pn=Hn=null,qn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||zo||(zo=!0,zf(ci,function(){return Ni(),null})),b=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||b){b=Ot.transition,Ot.transition=null;var T=sn;sn=1;var z=un;un|=4,Hs.current=null,Ly(n,o),Ef(o,n),ty(Ql),Qa=!!Xl,Ql=Xl=null,n.current=o,My(o),Ya(),un=z,sn=T,Ot.transition=b}else n.current=o;if(zo&&(zo=!1,Cr=n,Uo=y),b=n.pendingLanes,b===0&&(Tr=null),Mn(o.stateNode),ht(n,xn()),t!==null)for(d=n.onRecoverableError,o=0;o<t.length;o++)y=t[o],d(y.value,{componentStack:y.stack,digest:y.digest});if(Fo)throw Fo=!1,n=Ks,Ks=null,n;return(Uo&1)!==0&&n.tag!==0&&Ni(),b=n.pendingLanes,(b&1)!==0?n===qs?va++:(va=0,qs=n):va=0,vr(),null}function Ni(){if(Cr!==null){var n=Je(Uo),t=Ot.transition,o=sn;try{if(Ot.transition=null,sn=16>n?16:n,Cr===null)var d=!1;else{if(n=Cr,Cr=null,Uo=0,(un&6)!==0)throw Error(r(331));var y=un;for(un|=4,Re=n.current;Re!==null;){var b=Re,T=b.child;if((Re.flags&16)!==0){var z=b.deletions;if(z!==null){for(var W=0;W<z.length;W++){var re=z[W];for(Re=re;Re!==null;){var me=Re;switch(me.tag){case 0:case 11:case 15:ba(8,me,b)}var ye=me.child;if(ye!==null)ye.return=me,Re=ye;else for(;Re!==null;){me=Re;var he=me.sibling,Le=me.return;if(Sf(me),me===re){Re=null;break}if(he!==null){he.return=Le,Re=he;break}Re=Le}}}var De=b.alternate;if(De!==null){var Be=De.child;if(Be!==null){De.child=null;do{var Nn=Be.sibling;Be.sibling=null,Be=Nn}while(Be!==null)}}Re=b}}if((b.subtreeFlags&2064)!==0&&T!==null)T.return=b,Re=T;else e:for(;Re!==null;){if(b=Re,(b.flags&2048)!==0)switch(b.tag){case 0:case 11:case 15:ba(9,b,b.return)}var X=b.sibling;if(X!==null){X.return=b.return,Re=X;break e}Re=b.return}}var H=n.current;for(Re=H;Re!==null;){T=Re;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Re=te;else e:for(T=H;Re!==null;){if(z=Re,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Po(9,z)}}catch(Fe){Ln(z,z.return,Fe)}if(z===T){Re=null;break e}var ve=z.sibling;if(ve!==null){ve.return=z.return,Re=ve;break e}Re=z.return}}if(un=y,vr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Qe,n)}catch{}d=!0}return d}finally{sn=o,Ot.transition=t}}return!1}function Df(n,t,o){t=Ai(o,t),t=Qd(n,t,1),n=xr(n,t,1),t=lt(),n!==null&&(hr(n,1,t),ht(n,t))}function Ln(n,t,o){if(n.tag===3)Df(n,n,o);else for(;t!==null;){if(t.tag===3){Df(t,n,o);break}else if(t.tag===1){var d=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Tr===null||!Tr.has(d))){n=Ai(o,n),n=ef(t,n,1),t=xr(t,n,1),n=lt(),t!==null&&(hr(t,1,n),ht(t,n));break}}t=t.return}}function By(n,t,o){var d=n.pingCache;d!==null&&d.delete(t),t=lt(),n.pingedLanes|=n.suspendedLanes&o,Hn===n&&(qn&o)===o&&(jn===4||jn===3&&(qn&130023424)===qn&&500>xn()-Gs?ei(n,0):$s|=o),ht(n,t)}function Bf(n,t){t===0&&((n.mode&1)===0?t=1:(t=jr,jr<<=1,(jr&130023424)===0&&(jr=4194304)));var o=lt();n=ar(n,t),n!==null&&(hr(n,t,o),ht(n,o))}function Fy(n){var t=n.memoizedState,o=0;t!==null&&(o=t.retryLane),Bf(n,o)}function zy(n,t){var o=0;switch(n.tag){case 13:var d=n.stateNode,y=n.memoizedState;y!==null&&(o=y.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(r(314))}d!==null&&d.delete(t),Bf(n,o)}var Ff;Ff=function(n,t,o){if(n!==null)if(n.memoizedProps!==t.pendingProps||dt.current)pt=!0;else{if((n.lanes&o)===0&&(t.flags&128)===0)return pt=!1,Ty(n,t,o);pt=(n.flags&131072)!==0}else pt=!1,_n&&(t.flags&1048576)!==0&&md(t,wo,t.index);switch(t.lanes=0,t.tag){case 2:var d=t.type;No(n,t),n=t.pendingProps;var y=ki(t,Jn.current);Ci(t,o),y=_s(null,t,d,n,y,o);var b=xs();return t.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(d)?(b=!0,ho(t)):b=!1,t.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,ms(t),y.updater=Mo,t.stateNode=y,y._reactInternals=t,Ls(t,d,n,o),t=Rs(null,t,d,!0,b,o)):(t.tag=0,_n&&b&&os(t),ot(null,t,y,o),t=t.child),t;case 16:d=t.elementType;e:{switch(No(n,t),n=t.pendingProps,y=d._init,d=y(d._payload),t.type=d,y=t.tag=jy(d),n=zt(d,n),y){case 0:t=Ns(null,t,d,n,o);break e;case 1:t=cf(null,t,d,n,o);break e;case 11:t=af(null,t,d,n,o);break e;case 14:t=of(null,t,d,zt(d.type,n),o);break e}throw Error(r(306,d,""))}return t;case 0:return d=t.type,y=t.pendingProps,y=t.elementType===d?y:zt(d,y),Ns(n,t,d,y,o);case 1:return d=t.type,y=t.pendingProps,y=t.elementType===d?y:zt(d,y),cf(n,t,d,y,o);case 3:e:{if(df(t),n===null)throw Error(r(387));d=t.pendingProps,b=t.memoizedState,y=b.element,Ed(n,t),xo(t,d,null,o);var T=t.memoizedState;if(d=T.element,b.isDehydrated)if(b={element:d,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},t.updateQueue.baseState=b,t.memoizedState=b,t.flags&256){y=Ai(Error(r(423)),t),t=ff(n,t,d,o,y);break e}else if(d!==y){y=Ai(Error(r(424)),t),t=ff(n,t,d,o,y);break e}else for(vt=br(t.stateNode.containerInfo.firstChild),kt=t,_n=!0,Ft=null,o=_d(t,null,d,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(xi(),d===y){t=lr(n,t,o);break e}ot(n,t,d,o)}t=t.child}return t;case 5:return Id(t),n===null&&us(t),d=t.type,y=t.pendingProps,b=n!==null?n.memoizedProps:null,T=y.children,es(d,y)?T=null:b!==null&&es(d,b)&&(t.flags|=32),uf(n,t),ot(n,t,T,o),t.child;case 6:return n===null&&us(t),null;case 13:return pf(n,t,o);case 4:return ys(t,t.stateNode.containerInfo),d=t.pendingProps,n===null?t.child=Ei(t,null,d,o):ot(n,t,d,o),t.child;case 11:return d=t.type,y=t.pendingProps,y=t.elementType===d?y:zt(d,y),af(n,t,d,y,o);case 7:return ot(n,t,t.pendingProps,o),t.child;case 8:return ot(n,t,t.pendingProps.children,o),t.child;case 12:return ot(n,t,t.pendingProps.children,o),t.child;case 10:e:{if(d=t.type._context,y=t.pendingProps,b=t.memoizedProps,T=y.value,yn(ko,d._currentValue),d._currentValue=T,b!==null)if(Bt(b.value,T)){if(b.children===y.children&&!dt.current){t=lr(n,t,o);break e}}else for(b=t.child,b!==null&&(b.return=t);b!==null;){var z=b.dependencies;if(z!==null){T=b.child;for(var W=z.firstContext;W!==null;){if(W.context===d){if(b.tag===1){W=or(-1,o&-o),W.tag=2;var re=b.updateQueue;if(re!==null){re=re.shared;var me=re.pending;me===null?W.next=W:(W.next=me.next,me.next=W),re.pending=W}}b.lanes|=o,W=b.alternate,W!==null&&(W.lanes|=o),gs(b.return,o,t),z.lanes|=o;break}W=W.next}}else if(b.tag===10)T=b.type===t.type?null:b.child;else if(b.tag===18){if(T=b.return,T===null)throw Error(r(341));T.lanes|=o,z=T.alternate,z!==null&&(z.lanes|=o),gs(T,o,t),T=b.sibling}else T=b.child;if(T!==null)T.return=b;else for(T=b;T!==null;){if(T===t){T=null;break}if(b=T.sibling,b!==null){b.return=T.return,T=b;break}T=T.return}b=T}ot(n,t,y.children,o),t=t.child}return t;case 9:return y=t.type,d=t.pendingProps.children,Ci(t,o),y=Lt(y),d=d(y),t.flags|=1,ot(n,t,d,o),t.child;case 14:return d=t.type,y=zt(d,t.pendingProps),y=zt(d.type,y),of(n,t,d,y,o);case 15:return lf(n,t,t.type,t.pendingProps,o);case 17:return d=t.type,y=t.pendingProps,y=t.elementType===d?y:zt(d,y),No(n,t),t.tag=1,ft(d)?(n=!0,ho(t)):n=!1,Ci(t,o),Zd(t,d,y),Ls(t,d,y,o),Rs(null,t,d,!0,n,o);case 19:return hf(n,t,o);case 22:return sf(n,t,o)}throw Error(r(156,t.tag))};function zf(n,t){return Ka(n,t)}function Uy(n,t,o,d){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(n,t,o,d){return new Uy(n,t,o,d)}function eu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jy(n){if(typeof n=="function")return eu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===V)return 14}return 2}function Lr(n,t){var o=n.alternate;return o===null?(o=Nt(n.tag,t,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=t,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,t=n.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ho(n,t,o,d,y,b){var T=2;if(d=n,typeof n=="function")eu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case $:return ti(o.children,y,b,t);case Q:T=8,y|=8;break;case G:return n=Nt(12,o,t,y|2),n.elementType=G,n.lanes=b,n;case Y:return n=Nt(13,o,t,y),n.elementType=Y,n.lanes=b,n;case x:return n=Nt(19,o,t,y),n.elementType=x,n.lanes=b,n;case ie:return $o(o,y,b,t);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case U:T=10;break e;case oe:T=9;break e;case O:T=11;break e;case V:T=14;break e;case ge:T=16,d=null;break e}throw Error(r(130,n==null?n:typeof n,""))}return t=Nt(T,o,t,y),t.elementType=n,t.type=d,t.lanes=b,t}function ti(n,t,o,d){return n=Nt(7,n,d,t),n.lanes=o,n}function $o(n,t,o,d){return n=Nt(22,n,d,t),n.elementType=ie,n.lanes=o,n.stateNode={isHidden:!1},n}function nu(n,t,o){return n=Nt(6,n,null,t),n.lanes=o,n}function tu(n,t,o){return t=Nt(4,n.children!==null?n.children:[],n.key,t),t.lanes=o,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}function Vy(n,t,o,d,y){this.tag=t,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gr(0),this.expirationTimes=gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gr(0),this.identifierPrefix=d,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function ru(n,t,o,d,y,b,T,z,W){return n=new Vy(n,t,o,z,W),t===1?(t=1,b===!0&&(t|=8)):t=0,b=Nt(3,null,null,t),n.current=b,b.stateNode=n,b.memoizedState={element:d,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ms(b),n}function Wy(n,t,o){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:d==null?null:""+d,children:n,containerInfo:t,implementation:o}}function Uf(n){if(!n)return kr;n=n._reactInternals;e:{if(er(n)!==n||n.tag!==1)throw Error(r(170));var t=n;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(r(171))}if(n.tag===1){var o=n.type;if(ft(o))return pd(n,o,t)}return t}function jf(n,t,o,d,y,b,T,z,W){return n=ru(o,d,!0,n,y,b,T,z,W),n.context=Uf(null),o=n.current,d=lt(),y=Ir(o),b=or(d,y),b.callback=t??null,xr(o,b,y),n.current.lanes=y,hr(n,y,d),ht(n,d),n}function Go(n,t,o,d){var y=t.current,b=lt(),T=Ir(y);return o=Uf(o),t.context===null?t.context=o:t.pendingContext=o,t=or(b,T),t.payload={element:n},d=d===void 0?null:d,d!==null&&(t.callback=d),n=xr(y,t,T),n!==null&&(Vt(n,y,T,b),_o(n,y,T)),T}function Ko(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vf(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<t?o:t}}function iu(n,t){Vf(n,t),(n=n.alternate)&&Vf(n,t)}function Hy(){return null}var Wf=typeof reportError=="function"?reportError:function(n){console.error(n)};function au(n){this._internalRoot=n}qo.prototype.render=au.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(r(409));Go(n,t,null,null)},qo.prototype.unmount=au.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Qr(function(){Go(null,n,null,null)}),t[nr]=null}};function qo(n){this._internalRoot=n}qo.prototype.unstable_scheduleHydration=function(n){if(n){var t=Wr();n={blockedOn:null,target:n,priority:t};for(var o=0;o<Vn.length&&t!==0&&t<Vn[o].priority;o++);Vn.splice(o,0,n),o===0&&Ic(n)}};function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hf(){}function $y(n,t,o,d,y){if(y){if(typeof d=="function"){var b=d;d=function(){var re=Ko(T);b.call(re)}}var T=jf(t,d,n,0,null,!1,!1,"",Hf);return n._reactRootContainer=T,n[nr]=T.current,oa(n.nodeType===8?n.parentNode:n),Qr(),T}for(;y=n.lastChild;)n.removeChild(y);if(typeof d=="function"){var z=d;d=function(){var re=Ko(W);z.call(re)}}var W=ru(n,0,!1,null,null,!1,!1,"",Hf);return n._reactRootContainer=W,n[nr]=W.current,oa(n.nodeType===8?n.parentNode:n),Qr(function(){Go(t,W,o,d)}),W}function Jo(n,t,o,d,y){var b=o._reactRootContainer;if(b){var T=b;if(typeof y=="function"){var z=y;y=function(){var W=Ko(T);z.call(W)}}Go(t,T,n,y)}else T=$y(o,t,n,y,d);return Ko(T)}qi=function(n){switch(n.tag){case 3:var t=n.stateNode;if(t.current.memoizedState.isDehydrated){var o=pr(t.pendingLanes);o!==0&&(Ki(t,o|1),ht(t,xn()),(un&6)===0&&(Oi=xn()+500,vr()))}break;case 13:Qr(function(){var d=ar(n,1);if(d!==null){var y=lt();Vt(d,n,1,y)}}),iu(n,1)}},On=function(n){if(n.tag===13){var t=ar(n,134217728);if(t!==null){var o=lt();Vt(t,n,134217728,o)}iu(n,134217728)}},pn=function(n){if(n.tag===13){var t=Ir(n),o=ar(n,t);if(o!==null){var d=lt();Vt(o,n,t,d)}iu(n,t)}},Wr=function(){return sn},Gt=function(n,t){var o=sn;try{return sn=n,t()}finally{sn=o}},dr=function(n,t,o){switch(t){case"input":if(F(n,o),t=o.name,o.type==="radio"&&t!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var d=o[t];if(d!==n&&d.form===n.form){var y=po(d);if(!y)throw Error(r(90));Fn(d),F(d,y)}}}break;case"textarea":Ee(n,o);break;case"select":t=o.value,t!=null&&pe(n,!!o.multiple,t,!1)}},Te=Zs,Ke=Qr;var Gy={usingClientEntryPoint:!1,Events:[ua,bi,po,j,ce,Zs]},_a={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ky={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$a(n),n===null?null:n.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||Hy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Qe=Zo.inject(Ky),nn=Zo}catch{}}return mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gy,mt.createPortal=function(n,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ou(t))throw Error(r(200));return Wy(n,t,null,o)},mt.createRoot=function(n,t){if(!ou(n))throw Error(r(299));var o=!1,d="",y=Wf;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(d=t.identifierPrefix),t.onRecoverableError!==void 0&&(y=t.onRecoverableError)),t=ru(n,1,!1,null,null,o,!1,d,y),n[nr]=t.current,oa(n.nodeType===8?n.parentNode:n),new au(t)},mt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=$a(t),n=n===null?null:n.stateNode,n},mt.flushSync=function(n){return Qr(n)},mt.hydrate=function(n,t,o){if(!Yo(t))throw Error(r(200));return Jo(null,n,t,!0,o)},mt.hydrateRoot=function(n,t,o){if(!ou(n))throw Error(r(405));var d=o!=null&&o.hydratedSources||null,y=!1,b="",T=Wf;if(o!=null&&(o.unstable_strictMode===!0&&(y=!0),o.identifierPrefix!==void 0&&(b=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),t=jf(t,null,n,1,o??null,y,!1,b,T),n[nr]=t.current,oa(n),d)for(n=0;n<d.length;n++)o=d[n],y=o._getVersion,y=y(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,y]:t.mutableSourceEagerHydrationData.push(o,y);return new qo(t)},mt.render=function(n,t,o){if(!Yo(t))throw Error(r(200));return Jo(null,n,t,!1,o)},mt.unmountComponentAtNode=function(n){if(!Yo(n))throw Error(r(40));return n._reactRootContainer?(Qr(function(){Jo(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1},mt.unstable_batchedUpdates=Zs,mt.unstable_renderSubtreeIntoContainer=function(n,t,o,d){if(!Yo(o))throw Error(r(200));if(n==null||n._reactInternals===void 0)throw Error(r(38));return Jo(n,t,o,!1,d)},mt.version="18.3.1-next-f1338f8080-20240426",mt}var Xf;function wg(){if(Xf)return uu.exports;Xf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),uu.exports=tw(),uu.exports}var Qf;function rw(){if(Qf)return Xo;Qf=1;var e=wg();return Xo.createRoot=e.createRoot,Xo.hydrateRoot=e.hydrateRoot,Xo}var iw=rw();wg();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Ra.apply(this,arguments)}var Pr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Pr||(Pr={}));const ep="popstate";function aw(e){e===void 0&&(e={});function i(s,u){let{pathname:l="/",search:c="",hash:f=""}=ai(s.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Ru("",{pathname:l,search:c,hash:f},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(s,u){let l=s.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let f=s.location.href,p=f.indexOf("#");c=p===-1?f:f.slice(0,p)}return c+"#"+(typeof u=="string"?u:dl(u))}function a(s,u){bl(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return lw(i,r,a,e)}function Bn(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function bl(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ow(){return Math.random().toString(36).substr(2,8)}function np(e,i){return{usr:e.state,key:e.key,idx:i}}function Ru(e,i,r,a){return r===void 0&&(r=null),Ra({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof i=="string"?ai(i):i,{state:r,key:i&&i.key||a||ow()})}function dl(e){let{pathname:i="/",search:r="",hash:a=""}=e;return r&&r!=="?"&&(i+=r.charAt(0)==="?"?r:"?"+r),a&&a!=="#"&&(i+=a.charAt(0)==="#"?a:"#"+a),i}function ai(e){let i={};if(e){let r=e.indexOf("#");r>=0&&(i.hash=e.substr(r),e=e.substr(0,r));let a=e.indexOf("?");a>=0&&(i.search=e.substr(a),e=e.substr(0,a)),e&&(i.pathname=e)}return i}function lw(e,i,r,a){a===void 0&&(a={});let{window:s=document.defaultView,v5Compat:u=!1}=a,l=s.history,c=Pr.Pop,f=null,p=h();p==null&&(p=0,l.replaceState(Ra({},l.state,{idx:p}),""));function h(){return(l.state||{idx:null}).idx}function g(){c=Pr.Pop;let _=h(),k=_==null?null:_-p;p=_,f&&f({action:c,location:S.location,delta:k})}function w(_,k){c=Pr.Push;let C=Ru(S.location,_,k);r&&r(C,_),p=h()+1;let I=np(C,p),D=S.createHref(C);try{l.pushState(I,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;s.location.assign(D)}u&&f&&f({action:c,location:S.location,delta:1})}function m(_,k){c=Pr.Replace;let C=Ru(S.location,_,k);r&&r(C,_),p=h();let I=np(C,p),D=S.createHref(C);l.replaceState(I,"",D),u&&f&&f({action:c,location:S.location,delta:0})}function v(_){let k=s.location.origin!=="null"?s.location.origin:s.location.href,C=typeof _=="string"?_:dl(_);return C=C.replace(/ $/,"%20"),Bn(k,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,k)}let S={get action(){return c},get location(){return e(s,l)},listen(_){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(ep,g),f=_,()=>{s.removeEventListener(ep,g),f=null}},createHref(_){return i(s,_)},createURL:v,encodeLocation(_){let k=v(_);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:w,replace:m,go(_){return l.go(_)}};return S}var tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tp||(tp={}));function sw(e,i,r){return r===void 0&&(r="/"),uw(e,i,r)}function uw(e,i,r,a){let s=typeof i=="string"?ai(i):i,u=oc(s.pathname||"/",r);if(u==null)return null;let l=bg(e);cw(l);let c=null;for(let f=0;c==null&&f<l.length;++f){let p=vw(u);c=bw(l[f],p)}return c}function bg(e,i,r,a){i===void 0&&(i=[]),r===void 0&&(r=[]),a===void 0&&(a="");let s=(u,l,c)=>{let f={relativePath:c===void 0?u.path||"":c,caseSensitive:u.caseSensitive===!0,childrenIndex:l,route:u};f.relativePath.startsWith("/")&&(Bn(f.relativePath.startsWith(a),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(a.length));let p=Dr([a,f.relativePath]),h=r.concat(f);u.children&&u.children.length>0&&(Bn(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),bg(u.children,i,h,p)),!(u.path==null&&!u.index)&&i.push({path:p,score:yw(p,u.index),routesMeta:h})};return e.forEach((u,l)=>{var c;if(u.path===""||!((c=u.path)!=null&&c.includes("?")))s(u,l);else for(let f of Sg(u.path))s(u,l,f)}),i}function Sg(e){let i=e.split("/");if(i.length===0)return[];let[r,...a]=i,s=r.endsWith("?"),u=r.replace(/\?$/,"");if(a.length===0)return s?[u,""]:[u];let l=Sg(a.join("/")),c=[];return c.push(...l.map(f=>f===""?u:[u,f].join("/"))),s&&c.push(...l),c.map(f=>e.startsWith("/")&&f===""?"/":f)}function cw(e){e.sort((i,r)=>i.score!==r.score?r.score-i.score:ww(i.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}const dw=/^:[\w-]+$/,fw=3,pw=2,gw=1,hw=10,mw=-2,rp=e=>e==="*";function yw(e,i){let r=e.split("/"),a=r.length;return r.some(rp)&&(a+=mw),i&&(a+=pw),r.filter(s=>!rp(s)).reduce((s,u)=>s+(dw.test(u)?fw:u===""?gw:hw),a)}function ww(e,i){return e.length===i.length&&e.slice(0,-1).every((a,s)=>a===i[s])?e[e.length-1]-i[i.length-1]:0}function bw(e,i,r){let{routesMeta:a}=e,s={},u="/",l=[];for(let c=0;c<a.length;++c){let f=a[c],p=c===a.length-1,h=u==="/"?i:i.slice(u.length)||"/",g=Sw({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},h),w=f.route;if(!g)return null;Object.assign(s,g.params),l.push({params:s,pathname:Dr([u,g.pathname]),pathnameBase:Cw(Dr([u,g.pathnameBase])),route:w}),g.pathnameBase!=="/"&&(u=Dr([u,g.pathnameBase]))}return l}function Sw(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=kw(e.path,e.caseSensitive,e.end),s=i.match(r);if(!s)return null;let u=s[0],l=u.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:a.reduce((p,h,g)=>{let{paramName:w,isOptional:m}=h;if(w==="*"){let S=c[g]||"";l=u.slice(0,u.length-S.length).replace(/(.)\/+$/,"$1")}const v=c[g];return m&&!v?p[w]=void 0:p[w]=(v||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:l,pattern:e}}function kw(e,i,r){i===void 0&&(i=!1),r===void 0&&(r=!0),bl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,f)=>(a.push({paramName:c,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),a]}function vw(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return bl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),e}}function oc(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}const _w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xw=e=>_w.test(e);function Ew(e,i){i===void 0&&(i="/");let{pathname:r,search:a="",hash:s=""}=typeof e=="string"?ai(e):e,u;if(r)if(xw(r))u=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),bl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?u=ip(r.substring(1),"/"):u=ip(r,i)}else u=i;return{pathname:u,search:Iw(a),hash:Aw(s)}}function ip(e,i){let r=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function fu(e,i,r,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Tw(e){return e.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function kg(e,i){let r=Tw(e);return i?r.map((a,s)=>s===r.length-1?a.pathname:a.pathnameBase):r.map(a=>a.pathnameBase)}function vg(e,i,r,a){a===void 0&&(a=!1);let s;typeof e=="string"?s=ai(e):(s=Ra({},e),Bn(!s.pathname||!s.pathname.includes("?"),fu("?","pathname","search",s)),Bn(!s.pathname||!s.pathname.includes("#"),fu("#","pathname","hash",s)),Bn(!s.search||!s.search.includes("#"),fu("#","search","hash",s)));let u=e===""||s.pathname==="",l=u?"/":s.pathname,c;if(l==null)c=r;else{let g=i.length-1;if(!a&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),g-=1;s.pathname=w.join("/")}c=g>=0?i[g]:"/"}let f=Ew(s,c),p=l&&l!=="/"&&l.endsWith("/"),h=(u||l===".")&&r.endsWith("/");return!f.pathname.endsWith("/")&&(p||h)&&(f.pathname+="/"),f}const Dr=e=>e.join("/").replace(/\/\/+/g,"/"),Cw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Iw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Aw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _g=["post","put","patch","delete"];new Set(_g);const Mw=["get",..._g];new Set(Mw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Pa.apply(this,arguments)}const lc=Ae.createContext(null),Ow=Ae.createContext(null),oi=Ae.createContext(null),Sl=Ae.createContext(null),Br=Ae.createContext({outlet:null,matches:[],isDataRoute:!1}),xg=Ae.createContext(null);function Nw(e,i){let{relative:r}=i===void 0?{}:i;za()||Bn(!1);let{basename:a,navigator:s}=Ae.useContext(oi),{hash:u,pathname:l,search:c}=Tg(e,{relative:r}),f=l;return a!=="/"&&(f=l==="/"?a:Dr([a,l])),s.createHref({pathname:f,search:c,hash:u})}function za(){return Ae.useContext(Sl)!=null}function kl(){return za()||Bn(!1),Ae.useContext(Sl).location}function Eg(e){Ae.useContext(oi).static||Ae.useLayoutEffect(e)}function Rw(){let{isDataRoute:e}=Ae.useContext(Br);return e?qw():Pw()}function Pw(){za()||Bn(!1);let e=Ae.useContext(lc),{basename:i,future:r,navigator:a}=Ae.useContext(oi),{matches:s}=Ae.useContext(Br),{pathname:u}=kl(),l=JSON.stringify(kg(s,r.v7_relativeSplatPath)),c=Ae.useRef(!1);return Eg(()=>{c.current=!0}),Ae.useCallback(function(p,h){if(h===void 0&&(h={}),!c.current)return;if(typeof p=="number"){a.go(p);return}let g=vg(p,JSON.parse(l),u,h.relative==="path");e==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:Dr([i,g.pathname])),(h.replace?a.replace:a.push)(g,h.state,h)},[i,a,l,u,e])}function Dw(){let{matches:e}=Ae.useContext(Br),i=e[e.length-1];return i?i.params:{}}function Tg(e,i){let{relative:r}=i===void 0?{}:i,{future:a}=Ae.useContext(oi),{matches:s}=Ae.useContext(Br),{pathname:u}=kl(),l=JSON.stringify(kg(s,a.v7_relativeSplatPath));return Ae.useMemo(()=>vg(e,JSON.parse(l),u,r==="path"),[e,l,u,r])}function Bw(e,i){return Fw(e,i)}function Fw(e,i,r,a){za()||Bn(!1);let{navigator:s}=Ae.useContext(oi),{matches:u}=Ae.useContext(Br),l=u[u.length-1],c=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let p=kl(),h;if(i){var g;let _=typeof i=="string"?ai(i):i;f==="/"||(g=_.pathname)!=null&&g.startsWith(f)||Bn(!1),h=_}else h=p;let w=h.pathname||"/",m=w;if(f!=="/"){let _=f.replace(/^\//,"").split("/");m="/"+w.replace(/^\//,"").split("/").slice(_.length).join("/")}let v=sw(e,{pathname:m}),S=Ww(v&&v.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:Dr([f,s.encodeLocation?s.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?f:Dr([f,s.encodeLocation?s.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),u,r,a);return i&&S?Ae.createElement(Sl.Provider,{value:{location:Pa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Pr.Pop}},S):S}function zw(){let e=Kw(),i=Lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ae.createElement(Ae.Fragment,null,Ae.createElement("h2",null,"Unexpected Application Error!"),Ae.createElement("h3",{style:{fontStyle:"italic"}},i),r?Ae.createElement("pre",{style:s},r):null,null)}const Uw=Ae.createElement(zw,null);class jw extends Ae.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,r){return r.location!==i.location||r.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:r.error,location:r.location,revalidation:i.revalidation||r.revalidation}}componentDidCatch(i,r){console.error("React Router caught the following error during render",i,r)}render(){return this.state.error!==void 0?Ae.createElement(Br.Provider,{value:this.props.routeContext},Ae.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vw(e){let{routeContext:i,match:r,children:a}=e,s=Ae.useContext(lc);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),Ae.createElement(Br.Provider,{value:i},a)}function Ww(e,i,r,a){var s;if(i===void 0&&(i=[]),r===void 0&&(r=null),a===void 0&&(a=null),e==null){var u;if(!r)return null;if(r.errors)e=r.matches;else if((u=a)!=null&&u.v7_partialHydration&&i.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,c=(s=r)==null?void 0:s.errors;if(c!=null){let h=l.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);h>=0||Bn(!1),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,p=-1;if(r&&a&&a.v7_partialHydration)for(let h=0;h<l.length;h++){let g=l[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=h),g.route.id){let{loaderData:w,errors:m}=r,v=g.route.loader&&w[g.route.id]===void 0&&(!m||m[g.route.id]===void 0);if(g.route.lazy||v){f=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}return l.reduceRight((h,g,w)=>{let m,v=!1,S=null,_=null;r&&(m=c&&g.route.id?c[g.route.id]:void 0,S=g.route.errorElement||Uw,f&&(p<0&&w===0?(Yw("route-fallback"),v=!0,_=null):p===w&&(v=!0,_=g.route.hydrateFallbackElement||null)));let k=i.concat(l.slice(0,w+1)),C=()=>{let I;return m?I=S:v?I=_:g.route.Component?I=Ae.createElement(g.route.Component,null):g.route.element?I=g.route.element:I=h,Ae.createElement(Vw,{match:g,routeContext:{outlet:h,matches:k,isDataRoute:r!=null},children:I})};return r&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?Ae.createElement(jw,{location:r.location,revalidation:r.revalidation,component:S,error:m,children:C(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):C()},null)}var Cg=(function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e})(Cg||{}),Ig=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Ig||{});function Hw(e){let i=Ae.useContext(lc);return i||Bn(!1),i}function $w(e){let i=Ae.useContext(Ow);return i||Bn(!1),i}function Gw(e){let i=Ae.useContext(Br);return i||Bn(!1),i}function Ag(e){let i=Gw(),r=i.matches[i.matches.length-1];return r.route.id||Bn(!1),r.route.id}function Kw(){var e;let i=Ae.useContext(xg),r=$w(),a=Ag();return i!==void 0?i:(e=r.errors)==null?void 0:e[a]}function qw(){let{router:e}=Hw(Cg.UseNavigateStable),i=Ag(Ig.UseNavigateStable),r=Ae.useRef(!1);return Eg(()=>{r.current=!0}),Ae.useCallback(function(s,u){u===void 0&&(u={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Pa({fromRouteId:i},u)))},[e,i])}const ap={};function Yw(e,i,r){ap[e]||(ap[e]=!0)}function Jw(e,i){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pu(e){Bn(!1)}function Zw(e){let{basename:i="/",children:r=null,location:a,navigationType:s=Pr.Pop,navigator:u,static:l=!1,future:c}=e;za()&&Bn(!1);let f=i.replace(/^\/*/,"/"),p=Ae.useMemo(()=>({basename:f,navigator:u,static:l,future:Pa({v7_relativeSplatPath:!1},c)}),[f,c,u,l]);typeof a=="string"&&(a=ai(a));let{pathname:h="/",search:g="",hash:w="",state:m=null,key:v="default"}=a,S=Ae.useMemo(()=>{let _=oc(h,f);return _==null?null:{location:{pathname:_,search:g,hash:w,state:m,key:v},navigationType:s}},[f,h,g,w,m,v,s]);return S==null?null:Ae.createElement(oi.Provider,{value:p},Ae.createElement(Sl.Provider,{children:r,value:S}))}function Xw(e){let{children:i,location:r}=e;return Bw(Du(i),r)}new Promise(()=>{});function Du(e,i){i===void 0&&(i=[]);let r=[];return Ae.Children.forEach(e,(a,s)=>{if(!Ae.isValidElement(a))return;let u=[...i,s];if(a.type===Ae.Fragment){r.push.apply(r,Du(a.props.children,u));return}a.type!==Pu&&Bn(!1),!a.props.index||!a.props.children||Bn(!1);let l={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(l.children=Du(a.props.children,u)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bu(){return Bu=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Bu.apply(this,arguments)}function Qw(e,i){if(e==null)return{};var r={},a=Object.keys(e),s,u;for(u=0;u<a.length;u++)s=a[u],!(i.indexOf(s)>=0)&&(r[s]=e[s]);return r}function eb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nb(e,i){return e.button===0&&(!i||i==="_self")&&!eb(e)}const tb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rb="6";try{window.__reactRouterVersion=rb}catch{}const ib="startTransition",op=Qy[ib];function ab(e){let{basename:i,children:r,future:a,window:s}=e,u=Ae.useRef();u.current==null&&(u.current=aw({window:s,v5Compat:!0}));let l=u.current,[c,f]=Ae.useState({action:l.action,location:l.location}),{v7_startTransition:p}=a||{},h=Ae.useCallback(g=>{p&&op?op(()=>f(g)):f(g)},[f,p]);return Ae.useLayoutEffect(()=>l.listen(h),[l,h]),Ae.useEffect(()=>Jw(a),[a]),Ae.createElement(Zw,{basename:i,children:r,location:c.location,navigationType:c.action,navigator:l,future:a})}const ob=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fl=Ae.forwardRef(function(i,r){let{onClick:a,relative:s,reloadDocument:u,replace:l,state:c,target:f,to:p,preventScrollReset:h,viewTransition:g}=i,w=Qw(i,tb),{basename:m}=Ae.useContext(oi),v,S=!1;if(typeof p=="string"&&lb.test(p)&&(v=p,ob))try{let I=new URL(window.location.href),D=p.startsWith("//")?new URL(I.protocol+p):new URL(p),B=oc(D.pathname,m);D.origin===I.origin&&B!=null?p=B+D.search+D.hash:S=!0}catch{}let _=Nw(p,{relative:s}),k=sb(p,{replace:l,state:c,target:f,preventScrollReset:h,relative:s,viewTransition:g});function C(I){a&&a(I),I.defaultPrevented||k(I)}return Ae.createElement("a",Bu({},w,{href:v||_,onClick:S||u?a:C,ref:r,target:f}))});var lp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lp||(lp={}));var sp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sp||(sp={}));function sb(e,i){let{target:r,replace:a,state:s,preventScrollReset:u,relative:l,viewTransition:c}=i===void 0?{}:i,f=Rw(),p=kl(),h=Tg(e,{relative:l});return Ae.useCallback(g=>{if(nb(g,r)){g.preventDefault();let w=a!==void 0?a:dl(p)===dl(h);f(e,{replace:w,state:s,preventScrollReset:u,relative:l,viewTransition:c})}},[p,f,h,a,s,r,e,u,l,c])}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cb=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,r,a)=>a?a.toUpperCase():r.toLowerCase()),up=e=>{const i=cb(e);return i.charAt(0).toUpperCase()+i.slice(1)},Lg=(...e)=>e.filter((i,r,a)=>!!i&&i.trim()!==""&&a.indexOf(i)===r).join(" ").trim(),db=e=>{for(const i in e)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=Ae.forwardRef(({color:e="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:s="",children:u,iconNode:l,...c},f)=>Ae.createElement("svg",{ref:f,...fb,width:i,height:i,stroke:e,strokeWidth:a?Number(r)*24/Number(i):r,className:Lg("lucide",s),...!u&&!db(c)&&{"aria-hidden":"true"},...c},[...l.map(([p,h])=>Ae.createElement(p,h)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(e,i)=>{const r=Ae.forwardRef(({className:a,...s},u)=>Ae.createElement(pb,{ref:u,iconNode:i,className:Lg(`lucide-${ub(up(e))}`,`lucide-${e}`,a),...s}));return r.displayName=up(e),r};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hb=Tt("arrow-left",gb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],yb=Tt("circle-alert",mb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Mg=Tt("circle-check-big",wb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Sb=Tt("download",bb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],vb=Tt("external-link",kb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],xb=Tt("file-text",_b);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],cp=Tt("github",Eb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Og=Tt("loader-circle",Tb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Ib=Tt("menu",Cb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],sc=Tt("package",Ab);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ng=Tt("search",Lb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Rg=Tt("user",Mb);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Nb=Tt("x",Ob);function Rb(){const[e,i]=Ae.useState(!1);return ae.jsxs("header",{className:"sticky top-0 z-50 border-b border-gray-200 bg-white",children:[ae.jsxs("div",{className:"mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6",children:[ae.jsxs(fl,{to:"/",className:"flex items-center gap-2",children:[ae.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-md bg-gray-100",children:ae.jsx(sc,{className:"h-4.5 w-4.5 text-gray-700"})}),ae.jsx("span",{className:"text-base font-semibold text-gray-900",children:"FkWeChat"})]}),ae.jsx("button",{onClick:()=>i(!e),className:"flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100",children:e?ae.jsx(Nb,{className:"h-5 w-5"}):ae.jsx(Ib,{className:"h-5 w-5"})})]}),e&&ae.jsx("div",{className:"border-t border-gray-200 bg-white",children:ae.jsx("div",{className:"mx-auto max-w-5xl px-4 py-3 sm:px-6",children:ae.jsxs("div",{className:"space-y-1",children:[ae.jsxs("a",{href:"http://fkwechat.apifox.cn/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>i(!1),children:[ae.jsx(vb,{className:"h-4 w-4"}),"开发文档"]}),ae.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>i(!1),children:[ae.jsx(cp,{className:"h-4 w-4"}),"跳转仓库"]}),ae.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin/blob/main/README.md",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>i(!1),children:[ae.jsx(cp,{className:"h-4 w-4"}),"上传步骤"]})]})})})]})}const dp=e=>{let i;const r=new Set,a=(p,h)=>{const g=typeof p=="function"?p(i):p;if(!Object.is(g,i)){const w=i;i=h??(typeof g!="object"||g===null)?g:Object.assign({},i,g),r.forEach(m=>m(i,w))}},s=()=>i,c={setState:a,getState:s,getInitialState:()=>f,subscribe:p=>(r.add(p),()=>r.delete(p))},f=i=e(a,s,c);return c},Pb=(e=>e?dp(e):dp),Db=e=>e;function Bb(e,i=Db){const r=La.useSyncExternalStore(e.subscribe,La.useCallback(()=>i(e.getState()),[e,i]),La.useCallback(()=>i(e.getInitialState()),[e,i]));return La.useDebugValue(r),r}const fp=e=>{const i=Pb(e),r=a=>Bb(i,a);return Object.assign(r,i),r},Fb=(e=>e?fp(e):fp),zb="modulepreload",Ub=function(e){return"/FkWeChat_Plugin/"+e},pp={},Or=function(i,r,a){let s=Promise.resolve();if(r&&r.length>0){let l=function(p){return Promise.all(p.map(h=>Promise.resolve(h).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=l(r.map(p=>{if(p=Ub(p),p in pp)return;pp[p]=!0;const h=p.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const w=document.createElement("link");if(w.rel=h?"stylesheet":zb,h||(w.as="script"),w.crossOrigin="",w.href=p,f&&w.setAttribute("nonce",f),document.head.appendChild(w),h)return new Promise((m,v)=>{w.addEventListener("load",m),w.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${p}`)))})}))}function u(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return s.then(l=>{for(const c of l||[])c.status==="rejected"&&u(c.reason);return i().catch(u)})},Fu=`#Tue May 12 23:38:11 GMT+08:00 2026
version=3.0.0
name=AI\\u81EA\\u52A8\\u56DE\\u590D
author=\\u6A0A\\u658C
desc=\\u589E\\u5F3A\\u7248AI\\u81EA\\u52A8\\u56DE\\u590D\\uFF0C\\u652F\\u6301\\u8BED\\u97F3\\u3001\\u8BB0\\u5FC6\\u3001\\u4EBA\\u683C\\u3001RAG\\u3001\\u9891\\u7387\\u63A7\\u5236\\u3001\\u9ED1\\u767D\\u540D\\u5355
`,zu=`#Fri May 15 22:27:02 GMT+08:00 2026
version=1.0.0
name=FkAi\\u56DE\\u590D
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=
`,Uu=`name=MCP服务器插件
author=cuan
version=1.0.0
desc=基于FkWeChat宿主脚本环境实现的MCP服务器插件`,ju=`#Wed May 06 17:56:02 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=QQ\\u70B9\\u6B4C
version=1.0.7
desc=
`,Vu=`#Fri May 15 20:58:13 GMT+08:00 2026
version=1.0.0
name=\\u5173\\u952E\\u63D0\\u9192
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u957F\\u6309\\u6D88\\u606F\\u8FDB\\u5165\\u83DC\\u5355\\u6253\\u5F00ui
`,Wu=`#Wed May 06 20:10:41 GMT+08:00 2026
version=1.0.0
name=\\u590D\\u8BFB\\u673A\\u4E0E\\u9ED8\\u8BA4\\u56DE\\u590D
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u590D\\u8BFB\\u5F00\\u5173 \\u9ED8\\u8BA4\\u56DE\\u590D \\u56DE\\u590D\\u5217\\u8868
`,Hu=`#Thu Apr 23 18:03:01 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=\\u5FEB\\u6377\\u64CD\\u4F5C
version=1.0.3
desc=
`,$u=`#Thu May 07 01:55:41 GMT+08:00 2026
version=1.0.0
name=\\u7FA4\\u53D1\\u52A9\\u624B
author=\\u5403\\u4E0D\\u9999\\u83DC
desc=\\u957F\\u6309\\u6D88\\u606F\\u83DC\\u5355\\u8C03\\u51FAui\\u52FE\\u9009\\u53D1\\u9001
`,Pg=`// ======================== AI 自动回复 Plus v3.1 ========================
// FkWeChat 插件主脚本（修复 6 个关键问题）

final String SELF_ID = myWxId;
AlertDialog currentDialog = null;

// ------------------------ AI API 配置 ------------------------
String AI_API_URL = "https://api.siliconflow.cn/v1/chat/completions";
String AI_API_KEY = "";
String AI_MODEL = "deepseek-ai/DeepSeek-V4-Flash";

// ------------------------ 语音识别配置 ------------------------
String ASR_API_URL = "";
String ASR_API_KEY = "";

// ------------------------ 开关与权限 ------------------------
Map contactSwitch = new HashMap();
Map groupSwitch = new HashMap();
Set blacklist = new HashSet();
Set whitelist = new HashSet();
boolean useWhitelist = false;
Set allMemoryKeys = new HashSet();  // 记录所有存过记忆的会话ID
static final String PREF_MEM_KEYS = "mem_keys"; // 持久化键

// ------------------------ 记忆系统 ------------------------
Map memoryCache = new HashMap();
int memorySize = 20;

// ------------------------ 人格模板 ------------------------
Map personaTemplates = new HashMap();
String currentPersona = "default";

// ------------------------ 频率限制 ------------------------
Map lastReplyTime = new HashMap();
Map replyCountInWindow = new HashMap();
long cooldownWindow = 1 * 60 * 1000;
int maxRepliesPerWindow = 3;

// ------------------------ 会话风格学习 ------------------------
Map styleProfileCache = new HashMap();
static final String PREF_STYLE_PREFIX = "style_";
String stylePromptTemplate = "请用一段中文总结他对这个好友的说话风格，直接给出描述文本，要足够详细精准，从以下方面描述：1. 基础打字习惯（标点，换行/分段，常用缩写/口癖，错别字/固定写法)2. 聊天节奏：发消息习惯（长句/短句/拆多条)，是否爱发表情，如果有，常用哪几个表情3. 核心语气（整体语气，距离感，说话软硬，情绪外露程度，关心程度，整体气质)4. 高频固定句式（开场常用，回应常用，结尾常用)5. 最关键的3个特征。";
static final String PREF_STYLE_PROMPT = "style_prompt";

// ------------------------ AI 发送记录（防样本污染） ------------------------
Map aiSentCache = new HashMap();

// ------------------------ 固定样本 ------------------------
Map fixedSamples = new HashMap();
static final String PREF_FIXED_SAMPLE = "fixed_sample_";

// ------------------------ 高级参数 ------------------------
double temperature = 0.8;
double topP = -1;
int maxTokens = 500;
int sampleCount = 50;
static final String PREF_TEMPERATURE = "temperature";
static final String PREF_TOPP = "top_p";
static final String PREF_MAX_TOKENS = "max_tokens";
static final String PREF_SAMPLE_COUNT = "sample_count";

// ------------------------ 持久化键前缀 ------------------------
static final String PREF_AI_URL = "ai_api_url";
static final String PREF_AI_KEY = "ai_api_key";
static final String PREF_AI_MODEL = "ai_model";
static final String PREF_ASR_URL = "asr_api_url";
static final String PREF_ASR_KEY = "asr_api_key";
static final String PREF_PERSONA = "persona";
static final String PREF_USE_WHITELIST = "use_whitelist";
static final String PREF_MEMORY_SIZE = "memory_size";
static final String PREF_COOLDOWN = "cooldown";
static final String PREF_MAX_REPLIES = "max_replies";
static final String PREF_BLACKLIST = "blacklist";
static final String PREF_WHITELIST = "whitelist";
static final String PREF_SWITCHES = "switches_export";
static final String PREF_GSWITCHES = "gswitches_export";

// ======================== 插件生命周期 ========================
onLoad() {
    loadJava("utils");

    AI_API_URL = getString(PREF_AI_URL, "https://api.siliconflow.cn/v1/chat/completions");
    AI_API_KEY = getString(PREF_AI_KEY, "");
    AI_MODEL = getString(PREF_AI_MODEL, "deepseek-ai/DeepSeek-V4-Flash");
    ASR_API_URL = getString(PREF_ASR_URL, "");
    ASR_API_KEY = getString(PREF_ASR_KEY, "");
    currentPersona = getString(PREF_PERSONA, "default");
    useWhitelist = getBoolean(PREF_USE_WHITELIST, false);
    memorySize = getInt(PREF_MEMORY_SIZE, 10);
    cooldownWindow = getLong(PREF_COOLDOWN, 5 * 60 * 1000);
    maxRepliesPerWindow = getInt(PREF_MAX_REPLIES, 3);
    stylePromptTemplate = getString(PREF_STYLE_PROMPT, stylePromptTemplate);

    // ★ 加载语音解码库（libsilk.so + SilkCodec.jar）
    try {
        String privateLibDir = "/data/data/com.tencent.mm/files/FkWeChat/lib/";
        File libDir = new File(privateLibDir);
        if (!libDir.exists()) libDir.mkdirs();

        String pluginSoPath = pluginPath + "/libsilk.so";
        String privateSoPath = privateLibDir + "libsilk.so";

        File pluginSo = new File(pluginSoPath);
        File privateSo = new File(privateSoPath);

        // 如果私有目录已有旧版本，先删除
        if (privateSo.exists() && privateSo.length() > 0) {
            privateSo.delete();
        }

        // 复制 so 文件
        java.io.FileInputStream fis = new java.io.FileInputStream(pluginSo);
        java.io.FileOutputStream fos = new java.io.FileOutputStream(privateSo);
        byte[] buf = new byte[8192];
        int len;
        while ((len = fis.read(buf)) != -1) fos.write(buf, 0, len);
        fis.close();
        fos.close();
        log("✅ 已复制 libsilk.so 到应用私有目录");

        // 加载 so
        System.load(privateSoPath);
        log("✅ 已成功加载 libsilk.so");

        // 加载 jar
        loadJar(pluginPath + "/SilkCodec.jar");
        log("✅ SilkCodec 解码库加载成功");
    } catch (Exception e) {
        log("⚠️ 语音解码库加载失败，语音功能不可用：" + e.getMessage());
        // 不影响文本回复功能，继续执行
    }

    temperature = safeParseDouble(getString(PREF_TEMPERATURE, "0.8"), 0.8);
    topP = safeParseDouble(getString(PREF_TOPP, "-1"), -1);
    maxTokens = safeParseInt(getString(PREF_MAX_TOKENS, "500"), 500);
    sampleCount = getInt(PREF_SAMPLE_COUNT, 50);
    String memKeysStr = getString(PREF_MEM_KEYS, "");
    if (!memKeysStr.isEmpty()) {
        String[] keys = memKeysStr.split("\\u0001");
        for (int i = 0; i < keys.length; i++) {
            if (!keys[i].isEmpty()) allMemoryKeys.add(keys[i]);
        }
    }

    initPersonas();
    loadBlacklist();
    loadWhitelist();
    loadSwitches();

    log("🤖 AI自动回复Plus v3.1 已加载");
    log("模型: " + AI_MODEL + " 人格: " + currentPersona + " 白名单模式: " + useWhitelist);
}

onUnload() {
    setString(PREF_AI_URL, AI_API_URL);
    setString(PREF_AI_KEY, AI_API_KEY);
    setString(PREF_AI_MODEL, AI_MODEL);
    setString(PREF_ASR_URL, ASR_API_URL);
    setString(PREF_ASR_KEY, ASR_API_KEY);
    setString(PREF_PERSONA, currentPersona);
    setBoolean(PREF_USE_WHITELIST, useWhitelist);
    setInt(PREF_MEMORY_SIZE, memorySize);
    setLong(PREF_COOLDOWN, cooldownWindow);
    setInt(PREF_MAX_REPLIES, maxRepliesPerWindow);
    setString(PREF_STYLE_PROMPT, stylePromptTemplate);
    setString(PREF_TEMPERATURE, String.valueOf(temperature));
    setString(PREF_TOPP, String.valueOf(topP));
    setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
    setInt(PREF_SAMPLE_COUNT, sampleCount);
    setString(PREF_MEM_KEYS, join("\\u0001", allMemoryKeys));

    for (Object key : contactSwitch.keySet()) {
        setBoolean("switch_" + key, (Boolean) contactSwitch.get(key));
    }
    for (Object key : groupSwitch.keySet()) {
        setBoolean("gswitch_" + key, (Boolean) groupSwitch.get(key));
    }
    for (Object entry : memoryCache.entrySet()) {
        Map.Entry e = (Map.Entry) entry;
        setString("mem_" + e.getKey(), join("\\u0002", (List) e.getValue()));
    }
    for (Object entry : styleProfileCache.entrySet()) {
        Map.Entry e = (Map.Entry) entry;
        setString(PREF_STYLE_PREFIX + e.getKey(), (String) e.getValue());
    }
    saveBlacklist();
    saveWhitelist();
    log("AI自动回复插件已卸载，配置已保存");
}

// ======================== 人格初始化 ========================
void initPersonas() {
    personaTemplates.put("default", "你是一个友好的微信好友，分析当前会话氛围，给出最得体、自然的回复，回复口语化，自然。");
    personaTemplates.put("humor", "你是一个幽默风趣的朋友，语气随性自然，有幽默感，不要官方和生硬。");
    personaTemplates.put("professional", "你是一个专业可靠的朋友，言简意赅、逻辑清晰。");
    personaTemplates.put("gentle", "你是一个温柔体贴的朋友，说话非常有艺术，能够化解尴尬，照顾对方感受，充满智慧。");
    personaTemplates.put("sarcastic", "你是毒舌但善良的朋友，吐槽有度。");
}

// ======================== 消息处理主入口 ========================
onMsg(msg) {
    if (!msg.isText() && !msg.isVoice()) return;

    boolean isSelf = msg.isSend();
    String talker = msg.talker;
    boolean isGroup = msg.isGroupChat();
    String content = msg.content;

    if (msg.isText() && handleControlCommand(content, talker, isGroup, isSelf)) {
        return;
    }

    if (isSelf) return;

    if (msg.isVoice()) {
        String voicePath = getMediaPath(msg);
        if (voicePath != null && !voicePath.isEmpty()) {
            content = speechToText(voicePath);
            if (content == null || content.isEmpty()) return;
            log("🎤 语音识别结果: " + content);
        } else {
            return;
        }
    }

    if (!isAllowed(talker)) return;
    if (!checkRateLimit(talker)) return;
    if (!shouldAutoReply(talker, isGroup, msg)) return;
    processAIReply(talker, content);
}

// ======================== 长按消息菜单 ========================
onMsgMenu(msg) {
    String talker = msg.talker;
    boolean isGroup = msg.isGroupChat();
    boolean enabled = shouldAutoReply(talker, isGroup, null);
    String title = enabled ? "🔔 关闭AI自动回复" : "🔕 开启AI自动回复";
    addMenuItem(title, "", () -> {
        setAutoReplySwitch(talker, isGroup, !enabled);
        toast(!enabled ? "已开启AI自动回复" : "已关闭AI自动回复");
    });
    
    addMenuItem("⚙️ 控制面板", "", () -> {
        android.app.Activity a = getTopActivity();
        if (a != null) {
            showConfigDialog(a, talker);
        } else {
            sendText(talker, buildControlPanel(talker));
        }
    });
}
// ======================== 控制命令处理 ========================
boolean handleControlCommand(String content, String talker, boolean isGroup, boolean isSelf) {
    // 敏感命令列表
    Set adminCommands = new HashSet();
    adminCommands.add("/setkey");
    adminCommands.add("/seturl");
    adminCommands.add("/model");
    adminCommands.add("/asrurl");
    adminCommands.add("/asrkey");
    adminCommands.add("/memorysize");
    adminCommands.add("/cooldown");
    adminCommands.add("/maxreplies");
    adminCommands.add("/temperature");
    adminCommands.add("/topp");
    adminCommands.add("/maxtokens");
    adminCommands.add("/blacklist");
    adminCommands.add("/whitelist");
    adminCommands.add("/reset switches");
    adminCommands.add("/export");
    adminCommands.add("/import");
    adminCommands.add("/clearmemory");
    adminCommands.add("/learnstyle");
    adminCommands.add("/clearstyle");
    adminCommands.add("/setstyle");
    adminCommands.add("/setstyleprompt");
    adminCommands.add("/samplenum");
    adminCommands.add("/locksample");
    adminCommands.add("/unlocksample");

    boolean isAdminCmd = false;
    for (Object cmd : adminCommands) {
        if (content.startsWith((String) cmd)) {
            isAdminCmd = true;
            break;
        }
    }
    if (isAdminCmd && !isSelf) {
        sendText(talker, "⛔ 只有插件主人才能使用管理命令");
        return true;
    }

    if (content.equals("启用AI") || content.equals("/ai on")) {
        setAutoReplySwitch(talker, isGroup, true);
        sendText(talker, "✅ AI自动回复已开启");
        return true;
    }
    if (content.equals("关闭AI") || content.equals("/ai off")) {
        setAutoReplySwitch(talker, isGroup, false);
        sendText(talker, "❌ AI自动回复已关闭");
        return true;
    }

    if (content.startsWith("/setkey ")) {
        AI_API_KEY = content.substring(8).trim();
        setString(PREF_AI_KEY, AI_API_KEY);
        sendText(talker, "🔑 AI Key 已更新");
        return true;
    }
    if (content.startsWith("/seturl ")) {
        AI_API_URL = content.substring(8).trim();
        setString(PREF_AI_URL, AI_API_URL);
        sendText(talker, "🌐 AI URL 已更新");
        return true;
    }
    if (content.startsWith("/model ")) {
        AI_MODEL = content.substring(7).trim();
        setString(PREF_AI_MODEL, AI_MODEL);
        sendText(talker, "🤖 模型已切换: " + AI_MODEL);
        return true;
    }

    if (content.startsWith("/asrurl ")) {
        ASR_API_URL = content.substring(8).trim();
        setString(PREF_ASR_URL, ASR_API_URL);
        sendText(talker, "🎤 ASR地址已更新");
        return true;
    }
    if (content.startsWith("/asrkey ")) {
        ASR_API_KEY = content.substring(8).trim();
        setString(PREF_ASR_KEY, ASR_API_KEY);
        sendText(talker, "🔑 ASR Key 已更新");
        return true;
    }

    if (content.startsWith("/persona ")) {
        String p = content.substring(9).trim().toLowerCase();
        if (personaTemplates.containsKey(p)) {
            currentPersona = p;
            setString(PREF_PERSONA, p);
            sendText(talker, "🎭 人格已切换: " + p);
        } else {
            sendText(talker, "可用人格: " + join(",", personaTemplates.keySet()));
        }
        return true;
    }

    if (content.startsWith("/memorysize ")) {
        try {
            int size = Integer.parseInt(content.substring(12).trim());
            if (size < 2 || size > 30) {
                sendText(talker, "记忆轮数范围 2~30");
            } else {
                memorySize = size;
                setInt(PREF_MEMORY_SIZE, size);
                for (Object key : memoryCache.keySet()) {
                    List m = (List) memoryCache.get(key);
                    while (m.size() > memorySize) m.remove(0);
                    setString("mem_" + key, join("\\u0002", m));
                }
                sendText(talker, "🧠 记忆轮数已设为 " + size);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /memorysize 数字");
        }
        return true;
    }

    if (content.startsWith("/cooldown ")) {
        try {
            int mins = Integer.parseInt(content.substring(10).trim());
            if (mins < 0 || mins > 1440) {
                sendText(talker, "冷却时间范围 0~1440 分钟");
            } else {
                cooldownWindow = mins * 60 * 1000L;
                setLong(PREF_COOLDOWN, cooldownWindow);
                sendText(talker, "⏱️ 冷却时间已设为 " + mins + " 分钟");
            }
        } catch (Exception e) {
            sendText(talker, "用法: /cooldown 分钟数");
        }
        return true;
    }
    if (content.startsWith("/maxreplies ")) {
        try {
            int max = Integer.parseInt(content.substring(12).trim());
            if (max < 1 || max > 20) {
                sendText(talker, "最大回复数范围 1~20");
            } else {
                maxRepliesPerWindow = max;
                setInt(PREF_MAX_REPLIES, max);
                sendText(talker, "📊 窗口最大回复数已设为 " + max);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /maxreplies 次数");
        }
        return true;
    }

    if (content.startsWith("/temperature ")) {
        temperature = Double.parseDouble(content.substring(13).trim());
        setString(PREF_TEMPERATURE, String.valueOf(temperature));
        sendText(talker, "🌡️ 温度已设为 " + temperature);
        return true;
    }
    if (content.startsWith("/topp ")) {
        topP = Double.parseDouble(content.substring(6).trim());
        setString(PREF_TOPP, String.valueOf(topP));
        sendText(talker, "🎯 top_p 已设为 " + topP);
        return true;
    }
    if (content.startsWith("/maxtokens ")) {
        maxTokens = Integer.parseInt(content.substring(11).trim());
        setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
        sendText(talker, "📝 max_tokens 已设为 " + maxTokens);
        return true;
    }

    if (content.startsWith("/blacklist add ")) {
        blacklist.add(content.substring(15).trim());
        saveBlacklist();
        sendText(talker, "🚫 已加入黑名单: " + content.substring(15).trim());
        return true;
    }
    if (content.startsWith("/blacklist remove ")) {
        blacklist.remove(content.substring(18).trim());
        saveBlacklist();
        sendText(talker, "✅ 已移除黑名单: " + content.substring(18).trim());
        return true;
    }
    if (content.equals("/blacklist list")) {
        sendText(talker, "黑名单: " + (blacklist.isEmpty() ? "空" : join(",", blacklist)));
        return true;
    }
    if (content.startsWith("/whitelist add ")) {
        whitelist.add(content.substring(15).trim());
        saveWhitelist();
        sendText(talker, "➕ 已加入白名单: " + content.substring(15).trim());
        return true;
    }
    if (content.startsWith("/whitelist remove ")) {
        whitelist.remove(content.substring(18).trim());
        saveWhitelist();
        sendText(talker, "✅ 已移除白名单: " + content.substring(18).trim());
        return true;
    }
    if (content.equals("/whitelist list")) {
        sendText(talker, "白名单: " + (whitelist.isEmpty() ? "空" : join(",", whitelist)));
        return true;
    }
    if (content.equals("/whitelist on")) {
        useWhitelist = true;
        setBoolean(PREF_USE_WHITELIST, true);
        sendText(talker, "🛡️ 已切换为白名单模式");
        return true;
    }
    if (content.equals("/whitelist off")) {
        useWhitelist = false;
        setBoolean(PREF_USE_WHITELIST, false);
        sendText(talker, "🚫 已切换为黑名单模式");
        return true;
    }

    if (content.startsWith("/clearmemory")) {
        String target = content.length() > 13 ? content.substring(13).trim() : "";
        if (!target.isEmpty()) {
            memoryCache.remove(target);
            setString("mem_" + target, "");
            allMemoryKeys.remove(target);
            saveAllMemoryKeys();
            sendText(talker, "🧹 已清除会话 " + target + " 的记忆");
        } else {
            // 遍历删除所有持久化记忆
            for (Object key : allMemoryKeys) {
                setString("mem_" + key, "");
            }
            allMemoryKeys.clear();
            memoryCache.clear();
            saveAllMemoryKeys();
            sendText(talker, "🧹 已清除全部会话记忆（立即生效）");
        }
        return true;
    }

    if (content.equals("/reset switches")) {
        // 清空内存
        contactSwitch.clear();
        groupSwitch.clear();
        // 清空聚合持久化
        setString(PREF_SWITCHES, "");
        setString(PREF_GSWITCHES, "");
        // 清空所有单独的开关持久化键（无法枚举所有键，但可以尝试清空已知会话的键）
        // 由于无法遍历键，只能提示用户重启后生效，但至少聚合键已清空，重启后不会恢复
        sendText(talker, "🔄 所有会话开关已重置，重启后不再恢复");
        return true;
    }

    // ---- 风格学习 ----
    // ---- 风格学习 ----
if (content.equals("/learnstyle") || content.startsWith("/learnstyle ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    learnMyStyleForChat(targetId);
    String style = getChatStyle(targetId);
    if (style != null && !style.isEmpty()) {
        sendText(talker, "✅ 会话 " + targetId + " 风格学习完成：\\n" + style);
    } else {
        sendText(talker, "❌ 风格学习失败，会话 " + targetId + " 发言可能太少");
    }
    return true;
}
    if (content.equals("/clearstyle")) {
        styleProfileCache.remove(talker);
        setString(PREF_STYLE_PREFIX + talker, "");
        sendText(talker, "🧹 已清除当前会话的风格学习记录");
        return true;
    }
if (content.equals("/clearstyle") || content.startsWith("/clearstyle ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    styleProfileCache.remove(targetId);
    setString(PREF_STYLE_PREFIX + targetId, "");
    sendText(talker, "🧹 已清除会话 " + targetId + " 的风格学习记录");
    return true;
}
    if (content.startsWith("/setstyleprompt ")) {
        stylePromptTemplate = content.substring(16).trim();
        setString(PREF_STYLE_PROMPT, stylePromptTemplate);
        sendText(talker, "✍️ 风格分析提示已更新");
        return true;
    }

    // ---- 锁样本 ----
// ---- 锁样本 ----
if (content.equals("/locksample") || content.startsWith("/locksample ")) {
    String targetId = talker;
    if (content.length() > 12) targetId = content.substring(12).trim();
    String samples = getRecentSamples(targetId, sampleCount);
    if (samples == null || samples.isEmpty()) {
        sendText(talker, "❌ 会话 " + targetId + " 未找到真实样本，请先正常聊天");
        return true;
    }
    fixedSamples.put(targetId, samples);
    setString(PREF_FIXED_SAMPLE + targetId, samples);
    sendText(talker, "🔒 已锁定会话 " + targetId + " 的样本为固定模板（条数: " + sampleCount + "）");
    return true;
}
if (content.equals("/unlocksample") || content.startsWith("/unlocksample ")) {
    String targetId = talker;
    if (content.length() > 14) targetId = content.substring(14).trim();
    fixedSamples.remove(targetId);
    setString(PREF_FIXED_SAMPLE + targetId, "");
    sendText(talker, "🔓 已解除会话 " + targetId + " 的固定样本，恢复动态采样");
    return true;
}

    if (content.equals("/export")) {
        sendText(talker, "📋 当前配置:\\n" + buildConfigExport(talker));
        return true;
    }
    if (content.startsWith("/import ")) {
        boolean ok = applyConfigImport(content.substring(8).trim());
        sendText(talker, ok ? "✅ 配置已导入" : "❌ 导入失败，格式错误");
        return true;
    }

if (content.equals("/panel") || content.startsWith("/panel ")) {
    String targetId = talker;
    if (content.length() > 7) targetId = content.substring(7).trim();
    sendText(talker, buildControlPanel(targetId));
    return true;
}
    
    if (content.startsWith("/samplenum ")) {
        try {
            int num = Integer.parseInt(content.substring(11).trim());
            if (num < 10 || num > 1000) {
                sendText(talker, "样本条数范围 10~1000");
            } else {
                sampleCount = num;
                setInt(PREF_SAMPLE_COUNT, num);
                sendText(talker, "📋 风格样本条数已设为 " + num);
            }
        } catch (Exception e) {
            sendText(talker, "用法: /samplenum 数字");
        }
        return true;
    }

    if (content.equals("/ai status")) {
        StringBuilder sb = new StringBuilder();
        sb.append("🤖 模型: ").append(AI_MODEL).append("\\n");
        sb.append("🎭 人格: ").append(currentPersona).append("\\n");
        sb.append("📌 当前会话: ").append(shouldAutoReply(talker, isGroup, null) ? "已开启" : "已关闭").append("\\n");
        sb.append("🛡️ 模式: ").append(useWhitelist ? "白名单" : "黑名单");
        sendText(talker, sb.toString());
        return true;
    }
    return false;
}

// ======================== 控制面板 ========================
String buildControlPanel(String chatId) {
    StringBuilder sb = new StringBuilder();
    sb.append("╔══════════════════════════════╗\\n");
    sb.append("║      🤖 控制面板 v3.1       ║\\n");
    sb.append("╚══════════════════════════════╝\\n\\n");
    
    sb.append("【AI 接口】\\n");
    sb.append("模型: ").append(AI_MODEL).append("\\n");
    sb.append("URL: ").append(AI_API_URL).append("\\n");
    sb.append("Key: ").append(AI_API_KEY.isEmpty() ? "未设置" : "已设置（隐藏）").append("\\n\\n");

    sb.append("【语音识别】\\n");
    sb.append("URL: ").append(ASR_API_URL.isEmpty() ? "未设置" : ASR_API_URL).append("\\n");
    sb.append("Key: ").append(ASR_API_KEY.isEmpty() ? "未设置" : "已设置（隐藏）").append("\\n\\n");

    sb.append("【回复风格】\\n");
    sb.append("当前人格: ").append(currentPersona).append("\\n");
    sb.append("可选: ").append(join(",", personaTemplates.keySet())).append("\\n");
    String chatStyle = getChatStyle(chatId);
    if (chatStyle != null && !chatStyle.isEmpty()) {
        sb.append("当前会话专属风格: ").append(chatStyle).append("\\n");
    } else {
        sb.append("当前会话未学习专属风格\\n");
    }
    boolean isLocked = fixedSamples.containsKey(chatId);
    sb.append("固定样本: ").append(isLocked ? "已锁定" : "动态采样").append("\\n");
    sb.append("学习命令: /learnstyle  清除: /clearstyle\\n");
    sb.append("分析提示: ").append(stylePromptTemplate).append("\\n");
    sb.append("已学习风格会话数: ").append(styleProfileCache.size()).append("\\n\\n");

    sb.append("【记忆系统】\\n");
    sb.append("记忆轮数: ").append(memorySize).append(" (2~1000)\\n");
    sb.append("已存会话数: ").append(memoryCache.size()).append("\\n\\n");

    sb.append("【频率限制】\\n");
    sb.append("冷却时间: ").append(cooldownWindow/60000).append(" 分钟\\n");
    sb.append("窗口上限: ").append(maxRepliesPerWindow).append(" 条\\n\\n");

    sb.append("【高级参数】\\n");
    sb.append("温度: ").append(temperature).append("\\n");
    sb.append("top_p: ").append(topP).append("\\n");
    sb.append("max_tokens: ").append(maxTokens).append("\\n");
    sb.append("风格样本条数: ").append(sampleCount).append("\\n\\n");

    sb.append("【黑白名单】\\n");
    sb.append("模式: ").append(useWhitelist ? "白名单" : "黑名单").append("\\n");
    sb.append("黑名单数: ").append(blacklist.size()).append(" | 白名单数: ").append(whitelist.size()).append("\\n\\n");

    sb.append("【快捷设置命令】\\n");
    sb.append("/model /seturl /setkey /asrurl /asrkey\\n");
    sb.append("/persona /memorysize /cooldown /maxreplies\\n");
    sb.append("/temperature /topp /maxtokens /samplenum\\n");
    sb.append("/whitelist on/off\\n");
    sb.append("/clearmemory [会话ID]\\n");
    sb.append("/reset switches\\n");
    sb.append("/learnstyle /clearstyle /setstyle /setstyleprompt\\n");
    sb.append("/locksample /unlocksample\\n");
    sb.append("/export /import /panel\\n");

    return sb.toString();
}

// ======================== 风格相关 ========================
String getChatStyle(String chatId) {
    String style = (String) styleProfileCache.get(chatId);
    if (style == null) {
        style = getString(PREF_STYLE_PREFIX + chatId, "");
        if (!style.isEmpty()) styleProfileCache.put(chatId, style);
    }
    return style;
}

void learnMyStyleForChat(String chatId) {
    log("📚 开始分析你在会话 " + chatId + " 中的聊天风格...");
    StringBuilder samples = new StringBuilder();
    int maxSamplesLength = 3000;
    long startTime = System.currentTimeMillis() - 120L * 24 * 60 * 60 * 1000;
    
    List msgs = getMsgs(chatId, startTime);
    int totalMsgCount = msgs != null ? msgs.size() : 0;
    int myMsgCount = 0;
    
    for (Object obj : msgs) {
        if (samples.length() >= maxSamplesLength) break;
        Map m = (Map) obj;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        
        // 过滤控制命令
        if (text.startsWith("/")) continue;
        
        Object isSendObj = m.get("isSend");
        if (isSendObj == null) continue;
        
        boolean isMine = false;
        if (isSendObj instanceof Number) {
            isMine = ((Number) isSendObj).intValue() == 1;
        } else if (isSendObj instanceof Boolean) {
            isMine = ((Boolean) isSendObj).booleanValue();
        } else if (isSendObj instanceof String) {
            String s = (String) isSendObj;
            isMine = s.equals("1") || s.equalsIgnoreCase("true");
        }
        if (!isMine) continue;
        
        if (text.length() < 500) {
            samples.append(text).append("\\n");
            myMsgCount++;
        }
    }
    
    log("📊 总消息: " + totalMsgCount + ", 自己消息: " + myMsgCount + ", 样本长度: " + samples.length());
    
    if (samples.length() < 30) {
        log("⚠️ 发言样本不足（当前长度: " + samples.length() + "）");
        return;
    }
    
    String prompt = "以下是某人和特定好友在微信上的聊天记录片段（只包含他自己的发言）\\n\\n" + samples.toString() + "\\n\\n" + stylePromptTemplate;
    String systemMsg = "你是一个擅长分析语言风格的助手。";
    String styleDesc = callAIAPI(systemMsg, prompt);
    
    if (styleDesc != null && !styleDesc.isEmpty()) {
        styleProfileCache.put(chatId, styleDesc.trim());
        setString(PREF_STYLE_PREFIX + chatId, styleDesc.trim());
        log("✅ 风格学习完成 (" + chatId + "): " + styleDesc.trim());
    } else {
        log("❌ 风格分析失败，请检查网络或API配置");
    }
}

// ======================== 配置导入导出 ========================
String buildConfigExport(String chatId) {
    StringBuilder sb = new StringBuilder();
    sb.append("AI_URL=").append(AI_API_URL).append("\\n");
    sb.append("AI_KEY=").append(AI_API_KEY).append("\\n");
    sb.append("AI_MODEL=").append(AI_MODEL).append("\\n");
    sb.append("ASR_URL=").append(ASR_API_URL).append("\\n");
    sb.append("ASR_KEY=").append(ASR_API_KEY).append("\\n");
    sb.append("PERSONA=").append(currentPersona).append("\\n");
    sb.append("MEMORY_SIZE=").append(memorySize).append("\\n");
    sb.append("COOLDOWN=").append(cooldownWindow).append("\\n");
    sb.append("MAX_REPLIES=").append(maxRepliesPerWindow).append("\\n");
    sb.append("WHITELIST_MODE=").append(useWhitelist).append("\\n");
    sb.append("STYLE_PROMPT=").append(stylePromptTemplate).append("\\n");
    sb.append("TEMPERATURE=").append(temperature).append("\\n");
    sb.append("TOP_P=").append(topP).append("\\n");
    sb.append("MAX_TOKENS=").append(maxTokens).append("\\n");
    sb.append("SAMPLE_COUNT=").append(sampleCount).append("\\n");
    // 导出黑白名单
    sb.append("BLACKLIST=").append(join(",", blacklist)).append("\\n");
    sb.append("WHITELIST=").append(join(",", whitelist)).append("\\n");
    // 导出当前会话开关
    if (chatId != null) {
        Boolean sw = (Boolean) contactSwitch.get(chatId);
        Boolean gsw = (Boolean) groupSwitch.get(chatId);
        if (sw != null) sb.append("SWITCH_").append(chatId).append("=").append(sw).append("\\n");
        if (gsw != null) sb.append("GSWITCH_").append(chatId).append("=").append(gsw).append("\\n");
    }
    return sb.toString();
}

boolean applyConfigImport(String configStr) {
    try {
        String[] lines = configStr.split("\\n");
        for (int i = 0; i < lines.length; i++) {
            String line = lines[i];
            if (!line.contains("=")) continue;
            int eqIdx = line.indexOf("=");
            String key = line.substring(0, eqIdx).trim();
            String val = line.substring(eqIdx + 1).trim();
            switch (key) {
                case "AI_URL": AI_API_URL = val; setString(PREF_AI_URL, val); break;
                case "AI_KEY": AI_API_KEY = val; setString(PREF_AI_KEY, val); break;
                case "AI_MODEL": AI_MODEL = val; setString(PREF_AI_MODEL, val); break;
                case "ASR_URL": ASR_API_URL = val; setString(PREF_ASR_URL, val); break;
                case "ASR_KEY": ASR_API_KEY = val; setString(PREF_ASR_KEY, val); break;
                case "PERSONA": currentPersona = val; setString(PREF_PERSONA, val); break;
                case "MEMORY_SIZE": memorySize = Integer.parseInt(val); setInt(PREF_MEMORY_SIZE, memorySize); break;
                case "COOLDOWN": cooldownWindow = Long.parseLong(val); setLong(PREF_COOLDOWN, cooldownWindow); break;
                case "MAX_REPLIES": maxRepliesPerWindow = Integer.parseInt(val); setInt(PREF_MAX_REPLIES, maxRepliesPerWindow); break;
                case "WHITELIST_MODE": useWhitelist = Boolean.parseBoolean(val); setBoolean(PREF_USE_WHITELIST, useWhitelist); break;
                case "STYLE_PROMPT": stylePromptTemplate = val; setString(PREF_STYLE_PROMPT, val); break;
                case "TEMPERATURE": temperature = Double.parseDouble(val); setString(PREF_TEMPERATURE, val); break;
                case "TOP_P": topP = Double.parseDouble(val); setString(PREF_TOPP, val); break;
                case "MAX_TOKENS": maxTokens = Integer.parseInt(val); setString(PREF_MAX_TOKENS, val); break;
                case "SAMPLE_COUNT": sampleCount = Integer.parseInt(val); setInt(PREF_SAMPLE_COUNT, sampleCount); break;
                case "BLACKLIST":
                    blacklist.clear();
                    if (!val.isEmpty()) for (String s : val.split(",")) if (!s.isEmpty()) blacklist.add(s);
                    saveBlacklist();
                    break;
                case "WHITELIST":
                    whitelist.clear();
                    if (!val.isEmpty()) for (String s : val.split(",")) if (!s.isEmpty()) whitelist.add(s);
                    saveWhitelist();
                    break;
                default:
                    if (key.startsWith("SWITCH_")) {
                        String cid = key.substring(7);
                        contactSwitch.put(cid, Boolean.parseBoolean(val));
                        setBoolean("switch_" + cid, Boolean.parseBoolean(val));
                    } else if (key.startsWith("GSWITCH_")) {
                        String cid = key.substring(8);
                        groupSwitch.put(cid, Boolean.parseBoolean(val));
                        setBoolean("gswitch_" + cid, Boolean.parseBoolean(val));
                    }
                    break;
            }
        }
        return true;
    } catch (Exception e) {
        log("导入配置失败: " + e.getMessage());
        return false;
    }
}

// ======================== 权限与频率控制 ========================
boolean isAllowed(String talker) {
    return useWhitelist ? whitelist.contains(talker) : !blacklist.contains(talker);
}

boolean checkRateLimit(String talker) {
    long now = System.currentTimeMillis();
    Long last = (Long) lastReplyTime.get(talker);
    Integer cnt = (Integer) replyCountInWindow.get(talker);
    if (last == null || now - last > cooldownWindow) {
        lastReplyTime.put(talker, now);
        replyCountInWindow.put(talker, 1);
        return true;
    }
    if (cnt != null && cnt < maxRepliesPerWindow) {
        replyCountInWindow.put(talker, cnt + 1);
        return true;
    }
    return false;
}

boolean shouldAutoReply(String talker, boolean isGroup, msg) {
    if (isGroup) {
        Boolean e = (Boolean) groupSwitch.get(talker);
        if (e == null) e = getBoolean("gswitch_" + talker, false);
        groupSwitch.put(talker, e);
        if (msg != null && !msg.isAtMe()) return false;
        return e;
    } else {
        Boolean e = (Boolean) contactSwitch.get(talker);
        if (e == null) e = getBoolean("switch_" + talker, false);
        contactSwitch.put(talker, e);
        return e;
    }
}

void setAutoReplySwitch(String talker, boolean isGroup, boolean v) {
    if (isGroup) {
        groupSwitch.put(talker, v);
        setBoolean("gswitch_" + talker, v);
    } else {
        contactSwitch.put(talker, v);
        setBoolean("switch_" + talker, v);
    }
    saveSwitches();  // 立即持久化聚合字符串
}

void saveSwitches() {
    StringBuilder sb = new StringBuilder();
    for (Object key : contactSwitch.keySet()) {
        if (sb.length() > 0) sb.append(",");
        sb.append(key).append("=").append(contactSwitch.get(key));
    }
    setString(PREF_SWITCHES, sb.toString());
    
    sb.setLength(0);
    for (Object key : groupSwitch.keySet()) {
        if (sb.length() > 0) sb.append(",");
        sb.append(key).append("=").append(groupSwitch.get(key));
    }
    setString(PREF_GSWITCHES, sb.toString());
}
// ======================== 开关持久化加载 ========================
void loadSwitches() {
    String savedContact = getString(PREF_SWITCHES, "");
    if (!savedContact.isEmpty()) {
        String[] parts = savedContact.split(",");
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            if (part.isEmpty()) continue;
            int eqIdx = part.indexOf("=");
            if (eqIdx > 0) {
                String cid = part.substring(0, eqIdx);
                boolean val = "true".equals(part.substring(eqIdx + 1));
                contactSwitch.put(cid, val);
                setBoolean("switch_" + cid, val);
            }
        }
    }
    String savedGroup = getString(PREF_GSWITCHES, "");
    if (!savedGroup.isEmpty()) {
        String[] parts = savedGroup.split(",");
        for (int i = 0; i < parts.length; i++) {
            String part = parts[i];
            if (part.isEmpty()) continue;
            int eqIdx = part.indexOf("=");
            if (eqIdx > 0) {
                String cid = part.substring(0, eqIdx);
                boolean val = "true".equals(part.substring(eqIdx + 1));
                groupSwitch.put(cid, val);
                setBoolean("gswitch_" + cid, val);
            }
        }
    }
}

void saveAllMemoryKeys() {
    setString(PREF_MEM_KEYS, join("\\u0001", allMemoryKeys));
}

// ======================== AI 回复核心 ========================
void processAIReply(String chatId, String incomingMsg) {
    try {
        long startTime = System.currentTimeMillis() - 7L * 24 * 60 * 60 * 1000;
        List historyMsgs = getMsgs(chatId, startTime);

        List memory = (List) memoryCache.get(chatId);
        if (memory == null) {
            memory = new java.util.LinkedList();
            memoryCache.put(chatId, memory);
        }

        String ragContext = retrieveRelevantContext(historyMsgs, incomingMsg);
        String recentSamples = getEffectiveSamples(chatId);

        String systemPrompt = buildSystemPrompt(chatId, memory, recentSamples, ragContext);
        String userPrompt = buildUserPrompt(memory, ragContext, incomingMsg);

        String aiResponse = callAIAPI(systemPrompt, userPrompt);
        aiResponse = cleanResponse(aiResponse);

        if (aiResponse != null && !aiResponse.isEmpty()) {
            String[] lines = aiResponse.split("\\n");
            for (int i = 0; i < lines.length; i++) {
                String line = lines[i].trim();
                if (line.isEmpty()) continue;
                sendText(chatId, line + "\\u200B\\u200B");  // 加零宽标记
                addAiSent(chatId, line);
                if (i < lines.length - 1) {
                    try { Thread.sleep(300); } catch (InterruptedException e) {}
                }
            }
            updateMemory(chatId, "对方: " + incomingMsg);
            updateMemory(chatId, "我: " + aiResponse);
            log("✅ 自动回复: " + aiResponse);
        }
    } catch (Exception e) {
        log("❌ AI回复异常: " + e.getMessage());
    }
}

// ======================== AI 发送记录 ========================
void addAiSent(String chatId, String text) {
    Set sentSet = (Set) aiSentCache.get(chatId);
    if (sentSet == null) {
        sentSet = new HashSet();
        aiSentCache.put(chatId, sentSet);
    }
    sentSet.add(text);
}

boolean isAiSent(String chatId, String text) {
    Set sentSet = (Set) aiSentCache.get(chatId);
    return sentSet != null && sentSet.contains(text);
}

// ======================== 样本获取 ========================
String getEffectiveSamples(String chatId) {
    // 优先用固定样本
    String fixed = (String) fixedSamples.get(chatId);
    if (fixed == null) fixed = getString(PREF_FIXED_SAMPLE + chatId, "");
    if (fixed != null && !fixed.isEmpty()) return fixed;
    // 否则动态采样
    return getRecentSamples(chatId, sampleCount);
}

String getRecentSamples(String chatId, int count) {
    long startTime = System.currentTimeMillis() - 60L * 24 * 60 * 60 * 1000;
    List msgs = getMsgs(chatId, startTime);
    if (msgs == null) return "";
    
    StringBuilder samples = new StringBuilder();
    int found = 0;
    
    for (int i = msgs.size() - 1; i >= 0 && found < count; i--) {
        Map m = (Map) msgs.get(i);
        
        boolean isMine = false;
        Object isSendObj = m.get("isSend");
        if (isSendObj != null) {
            if (isSendObj instanceof Number) {
                isMine = ((Number) isSendObj).intValue() == 1;
            } else if (isSendObj instanceof Boolean) {
                isMine = ((Boolean) isSendObj).booleanValue();
            } else if (isSendObj instanceof String) {
                String s = (String) isSendObj;
                isMine = s.equals("1") || s.equalsIgnoreCase("true");
            }
        }
        if (!isMine) continue;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        
        // 过滤控制命令
        if (text.startsWith("/")) continue;
        
        // 排除 AI 生成的消息
        if (text.contains("\\u200B\\u200B")) continue;  // 包含AI标记则跳过
        
        samples.insert(0, "[我的真实发言]: " + text + "\\n");
        found++;
    }
    return samples.toString().trim();
}

// ======================== 系统提示词构建 ========================
String buildSystemPrompt(String chatId, List memory, String recentSamples, String ragContext) {
    StringBuilder sb = new StringBuilder();
    
    // 1. 最高优先级：真实说话样本
    if (recentSamples != null && !recentSamples.isEmpty()) {
        sb.append("## 【最高优先级】以下是我的真实聊天记录，你必须严格模仿我的风格\\n");
        sb.append("请逐字逐句分析我的用词、标点、表情、句子长度和语气等各种方面，回复时完全复现这种风格。\\n");
        sb.append("\`\`\`\\n").append(recentSamples).append("\\n\`\`\`\\n\\n");
    }
    
    // 2. 风格总结（如果存在）
    String chatStyle = getChatStyle(chatId);
    if (chatStyle != null && !chatStyle.isEmpty()) {
        sb.append("## 我的风格特征总结\\n").append(chatStyle).append("\\n\\n");
    }
    
    // 3. 对方最近相关消息（提供上下文，帮助理解当前话题）
    if (ragContext != null && !ragContext.isEmpty()) {
        sb.append("## 对方最近相关消息（用于理解话题，不要模仿对方的风格）\\n");
        sb.append(ragContext).append("\\n\\n");
    }
    
    // 4. 人格模板（降级为辅助，仅在没有足够真实样本时参考）
    String personaDesc = (String) personaTemplates.getOrDefault(currentPersona, "");
    if (!personaDesc.isEmpty()) {
        sb.append("## 辅助角色设定（仅在上述真实样本不足时参考）\\n");
        sb.append(personaDesc).append("\\n\\n");
    }
    
    // 5. 核心要求
    sb.append("## 核心要求\\n");
    sb.append("- 必须以【最高优先级】中的真实聊天记录为准，不要使用辅助角色设定覆盖我的真实风格\\n");
    sb.append("- 口语化、自然，像真人微信聊天，不要使用“首先、其次、总之”等书面语\\n");
    sb.append("- 不要使用“作为一个人工智能”、“作为一个AI”等暴露身份的词\\n");
    sb.append("- 回复长度、标点、表情使用频率等各种方面都要与我历史记录一致\\n");
    if (memory != null && !memory.isEmpty()) {
        sb.append("- 保持与之前对话的连贯性\\n");
    }
    
    return sb.toString();
}


String buildUserPrompt(List memory, String ragContext, String incomingMsg) {
    StringBuilder sb = new StringBuilder();
    if (memory != null && !memory.isEmpty()) {
        sb.append("【近期记忆】\\n").append(join("\\n", memory)).append("\\n\\n");
    }
    if (ragContext != null && !ragContext.isEmpty()) {
        sb.append("【相似历史对话】\\n").append(ragContext).append("\\n\\n");
    }
    sb.append("【对方的最新消息】\\n").append(incomingMsg).append("\\n\\n");
    sb.append("请以「我」的身份回复：");
    return sb.toString();
}

// ======================== AI API 调用（带重试） ========================
String callAIAPI(String systemPrompt, String userPrompt) {
    int maxRetries = 3;

    for (int attempt = 0; attempt < maxRetries; attempt++) {
        HttpURLConnection conn = null;
        try {
            if (attempt > 0) {
                int retryDelay = 1500 * attempt; // 递增延迟：1.5s, 3s, 4.5s
                log("⏳ 等待 " + retryDelay + "ms 后重试第 " + attempt + " 次...");
                Thread.sleep(retryDelay);
            }

            org.json.JSONObject body = new org.json.JSONObject();
            body.put("model", AI_MODEL);
            org.json.JSONArray messages = new org.json.JSONArray();
            messages.put(new org.json.JSONObject().put("role", "system").put("content", systemPrompt));
            messages.put(new org.json.JSONObject().put("role", "user").put("content", userPrompt));
            body.put("messages", messages);
            body.put("temperature", temperature);
            body.put("max_tokens", maxTokens);
            if (topP >= 0) body.put("top_p", topP);
            String jsonBody = body.toString();

            URL url = new URL(AI_API_URL);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Authorization", "Bearer " + AI_API_KEY);
            conn.setDoOutput(true);
            conn.setConnectTimeout(15000);
            conn.setReadTimeout(30000);

            OutputStream os = conn.getOutputStream();
            os.write(jsonBody.getBytes("UTF-8"));
            os.close();

            int responseCode = conn.getResponseCode();
            if (responseCode == 200) {
                BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
                StringBuilder resp = new StringBuilder();
                String line;
                while ((line = br.readLine()) != null) resp.append(line);
                br.close();
                String result = parseContent(resp.toString());
                if (result != null && !result.isEmpty()) return result;
                log("❌ 解析回复内容为空");
            } else {
                log("❌ API请求失败: " + responseCode);
                if (responseCode == 401 || responseCode == 403) {
                    log("❌ 认证失败，请检查 API Key 是否正确");
                    break; // 不重试
                }
                if (responseCode >= 500 || responseCode == 429) {
                    continue; // 服务器错误或限流，重试
                } else {
                    break; // 其他客户端错误，不重试
                }
            }
        } catch (java.net.SocketTimeoutException e) {
            log("❌ 请求超时: " + e.getMessage());
        } catch (Exception e) {
            log("❌ API异常: " + e.getMessage());
            break;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }
    return null;
}

String parseContent(String json) {
    if (json == null || json.trim().isEmpty()) return null;
    try {
        org.json.JSONObject root = new org.json.JSONObject(json);
        if (!root.has("choices")) {
            log("❌ 响应缺少 choices 字段");
            return null;
        }
        org.json.JSONArray choices = root.getJSONArray("choices");
        if (choices.length() == 0) {
            log("❌ choices 为空");
            return null;
        }
        org.json.JSONObject choice = choices.getJSONObject(0);
        if (!choice.has("message")) {
            log("❌ choice 缺少 message 字段");
            return null;
        }
        org.json.JSONObject message = choice.getJSONObject("message");
        if (!message.has("content")) {
            log("❌ message 缺少 content 字段");
            return null;
        }
        return message.getString("content");
    } catch (Exception e) {
        log("❌ 解析回复失败: " + e.getMessage());
        return null;
    }
}

String cleanResponse(String raw) {
    if (raw == null) return null;
    return raw.replaceAll("^(我:|回复:)", "").trim();
}

// ======================== 记忆管理 ========================
List getMemory(String talker) {
    List m = (List) memoryCache.get(talker);
    if (m == null) {
        String saved = getString("mem_" + talker, "");
        if (!saved.isEmpty()) {
            String[] parts = saved.split("\\u0002");
            m = new java.util.LinkedList();
            for (int i = 0; i < parts.length; i++) m.add(parts[i]);
        } else {
            m = new java.util.LinkedList();
        }
        memoryCache.put(talker, m);
        // 确保记忆键被记录（修复遗漏）
        if (!allMemoryKeys.contains(talker)) {
            allMemoryKeys.add(talker);
            saveAllMemoryKeys();
        }
    }
    return m;
}

void updateMemory(String talker, String text) {
    List m = getMemory(talker);
    m.add(text);
    while (m.size() > memorySize) m.remove(0);
    setString("mem_" + talker, join("\\u0002", m));
    if (!allMemoryKeys.contains(talker)) {
        allMemoryKeys.add(talker);
    }
    saveAllMemoryKeys();
    
    // ★ 手动限制最大会话数（替代 LinkedHashMap 的 LRU）
    if (memoryCache.size() > 500) {
        // 随机删一个旧会话（简单粗暴但有效）
        Object oldest = memoryCache.keySet().iterator().next();
        memoryCache.remove(oldest);
    }
}

// ======================== RAG 增强检索（带时间衰减） ========================
String retrieveRelevantContext(List historyMsgs, String query) {
    if (historyMsgs == null || historyMsgs.isEmpty() || query == null || query.trim().isEmpty()) {
        return "";
    }

    List docList = new ArrayList();
    List timeList = new ArrayList();
    int maxHistory = Math.min(historyMsgs.size(), 100);
    int startIdx = historyMsgs.size() - maxHistory;
    long now = System.currentTimeMillis();
    for (int i = startIdx; i < historyMsgs.size(); i++) {
        Map m = (Map) historyMsgs.get(i);
        if (m == null) continue;
        
        boolean isOther = false;
        Object isSendObj = m.get("isSend");
        if (isSendObj != null) {
            if (isSendObj instanceof Number) {
                isOther = ((Number) isSendObj).intValue() == 0;
            } else if (isSendObj instanceof Boolean) {
                isOther = !((Boolean) isSendObj).booleanValue();
            } else if (isSendObj instanceof String) {
                String s = (String) isSendObj;
                isOther = s.equals("0") || s.equalsIgnoreCase("false");
            }
        }
        if (!isOther) continue;
        
        String text = (String) m.getOrDefault("content", "");
        if (text == null || text.trim().isEmpty()) continue;
        if (text.length() > 200) continue;
        
        docList.add(text);
        // 计算时间权重（越近权重越高，指数衰减，半衰期约2小时）
        Object timeObj = m.get("createTime");
        long msgTime = 0;
        if (timeObj instanceof Number) msgTime = ((Number) timeObj).longValue();
        double hoursAgo;
        if (msgTime > 0) {
            hoursAgo = (now - msgTime) / (1000.0 * 3600.0);
        } else {
            hoursAgo = 48; // 缺失时间字段，默认48小时前（低权重）
        }
        double timeWeight = Math.pow(0.7, hoursAgo / 2.0);
        timeList.add(Double.valueOf(timeWeight));
    }

    if (docList.isEmpty()) return "";

    Set queryKeywords = extractKeywords(query);
    if (queryKeywords.isEmpty()) return "";

    List scoreList = new ArrayList();
    for (int i = 0; i < docList.size(); i++) {
        String doc = (String) docList.get(i);
        double timeW = ((Double) timeList.get(i)).doubleValue();
        double contentScore = calculateScore(doc, queryKeywords, query);
        double finalScore = contentScore * timeW;
        if (finalScore > 0.03) {
            Map entry = new HashMap();
            entry.put("text", doc);
            entry.put("score", Double.valueOf(finalScore));
            scoreList.add(entry);
        }
    }

    java.util.Collections.sort(scoreList, new java.util.Comparator() {
        public int compare(Object a, Object b) {
            double s1 = ((Double) ((Map) a).get("score")).doubleValue();
            double s2 = ((Double) ((Map) b).get("score")).doubleValue();
            return Double.compare(s2, s1);
        }
    });

    StringBuilder result = new StringBuilder();
    int count = 0;
    for (int i = 0; i < scoreList.size() && count < 5; i++) {
        Map entry = (Map) scoreList.get(i);
        String text = (String) entry.get("text");
        result.append(text).append("\\n");
        count++;
    }

    return result.toString().trim();
}

Set extractKeywords(String text) {
    Set keywords = new HashSet();
    if (text == null || text.trim().isEmpty()) return keywords;
    String[] words = text.split("[，。！？；：、\\\\s]+");
    for (int i = 0; i < words.length; i++) {
        String word = words[i].trim();
        if (word.length() >= 2 && word.length() <= 10) {
            keywords.add(word);
        }
    }
    return keywords;
}

double calculateScore(String doc, Set queryKeywords, String query) {
    double keywordScore = 0.0;
    int matchCount = 0;
    for (Object obj : queryKeywords) {
        String kw = (String) obj;
        if (doc.contains(kw)) matchCount++;
    }
    if (!queryKeywords.isEmpty()) {
        keywordScore = (double) matchCount / queryKeywords.size();
    }

    Set queryBigrams = getBigrams(query);
    Set docBigrams = getBigrams(doc);
    double bigramScore = 0.0;
    if (!queryBigrams.isEmpty() && !docBigrams.isEmpty()) {
        int intersect = 0;
        for (Object obj : queryBigrams) {
            if (docBigrams.contains(obj)) intersect++;
        }
        double union = queryBigrams.size() + docBigrams.size() - intersect;
        bigramScore = union > 0 ? intersect / union : 0.0;
    }

    return 0.6 * keywordScore + 0.4 * bigramScore;
}

// ======================== Bigram 生成 ========================
Set getBigrams(String s) {
    Set set = new HashSet();
    if (s == null || s.length() < 2) return set;
    for (int i = 0; i < s.length() - 1; i++) {
        set.add(s.substring(i, i + 2));
    }
    return set;
}

// ======================== 语音识别 ========================
String speechToText(String silkPath) {
    if (ASR_API_URL.isEmpty()) {
        log("⚠️ 未配置语音识别API，跳过语音消息");
        return null;
    }
    String mp3Path = "/sdcard/fkplugin/temp_" + System.currentTimeMillis() + ".mp3";
    try {
        File dir = new File("/sdcard/fkplugin");
        if (!dir.exists()) dir.mkdirs();

        // 用 SilkCodec 代替 silkToMp3
        me.yun.silk.SilkCodec codec = new me.yun.silk.SilkCodec();
        int code = codec.silkToMp3(silkPath, mp3Path, 24000);

        log("🔍 SilkCodec 返回码: " + code);
        if (code != 0) {
            log("❌ Silk转MP3失败, code=" + code);
            return null;
        }

        File mp3File = new File(mp3Path);
        if (!mp3File.exists()) return null;

        String result = httpPostFile(ASR_API_URL, mp3File, "Authorization", "Bearer " + ASR_API_KEY);
        return parseASRResult(result);
    } catch (Exception e) {
        log("❌ 语音识别异常: " + e.getMessage());
        return null;
    } finally {
        try { deleteFile(new File(mp3Path)); } catch (Exception ignored) {}
    }
}

String parseASRResult(String json) {
    if (json == null) return null;
    int idx = json.indexOf("\\"text\\":\\"");
    if (idx == -1) return null;
    idx += 8;
    int end = json.indexOf("\\"", idx);
    return end > idx ? json.substring(idx, end) : null;
}

// ======================== 黑白名单持久化 ========================
void loadBlacklist() {
    String saved = getString(PREF_BLACKLIST, "");
    if (!saved.isEmpty()) for (String s : saved.split(",")) if (!s.isEmpty()) blacklist.add(s);
}
void saveBlacklist() { setString(PREF_BLACKLIST, join(",", blacklist)); }

void loadWhitelist() {
    String saved = getString(PREF_WHITELIST, "");
    if (!saved.isEmpty()) for (String s : saved.split(",")) if (!s.isEmpty()) whitelist.add(s);
}
void saveWhitelist() { setString(PREF_WHITELIST, join(",", whitelist)); }

// ======================== 持久化辅助 ========================
int getInt(String key, int def) {
    String v = getString(key, "");
    if (v.isEmpty()) return def;
    try { return Integer.parseInt(v); } catch (Exception e) { return def; }
}
void setInt(String key, int val) { setString(key, String.valueOf(val)); }

long getLong(String key, long def) {
    String v = getString(key, "");
    if (v.isEmpty()) return def;
    try { return Long.parseLong(v); } catch (Exception e) { return def; }
}
void setLong(String key, long val) { setString(key, String.valueOf(val)); }

double safeParseDouble(String s, double def) {
    if (s == null || s.trim().isEmpty()) return def;
    try { return Double.parseDouble(s); } catch (Exception e) { return def; }
}

int safeParseInt(String s, int def) {
    if (s == null || s.trim().isEmpty()) return def;
    try { return Integer.parseInt(s); } catch (Exception e) { return def; }
}

// ======================== 工具函数 ========================
String join(String sep, Collection c) {
    if (c == null || c.isEmpty()) return "";
    StringBuilder sb = new StringBuilder();
    boolean first = true;
    for (Object o : c) {
        if (!first) sb.append(sep);
        sb.append(o);
        first = false;
    }
    return sb.toString();
}

// ======================== UI 控制面板（基于 AlertDialog，与第二段逻辑相同） ========================
void showConfigDialog(android.app.Activity a, String chatId) {
    try {
        android.widget.ScrollView scrollView = new android.widget.ScrollView(a);
        android.widget.LinearLayout root = new android.widget.LinearLayout(a);
        root.setOrientation(android.widget.LinearLayout.VERTICAL);
        root.setPadding(40, 40, 40, 40);

        // 状态文字
        android.widget.TextView tvStatus = new android.widget.TextView(a);
        tvStatus.setText("会话: " + chatId + "\\n" + buildUiStatusShort(chatId));
        tvStatus.setPadding(0, 0, 0, 20);
        root.addView(tvStatus);

        // 1. AI 开关
        android.widget.Button btnAi = new android.widget.Button(a);
        btnAi.setText("AI回复: " + (shouldAutoReply(chatId, false, null) ? "开" : "关"));
        btnAi.setOnClickListener(v -> {
            boolean cur = shouldAutoReply(chatId, false, null);
            setAutoReplySwitch(chatId, false, !cur);
            btnAi.setText("AI回复: " + (!cur ? "开" : "关"));
            toast("AI回复已" + (!cur ? "开启" : "关闭"));
        });
        root.addView(btnAi);

        // 2. 人格切换
        android.widget.Button btnStyle = new android.widget.Button(a);
        btnStyle.setText("人格: " + currentPersona);
        btnStyle.setOnClickListener(v -> {
            String[] names = new String[personaTemplates.size()];
            int idx = 0;
            for (Object k : personaTemplates.keySet()) names[idx++] = (String) k;
            new android.app.AlertDialog.Builder(a)
                .setTitle("选择人格")
                .setItems(names, (d, w) -> {
                    currentPersona = names[w];
                    setString(PREF_PERSONA, currentPersona);
                    btnStyle.setText("人格: " + currentPersona);
                    toast("已切换: " + currentPersona);
                })
                .show();
        });
        root.addView(btnStyle);

        // 3. API 设置
        android.widget.Button btnApi = new android.widget.Button(a);
        btnApi.setText("AI接口设置");
        btnApi.setOnClickListener(v -> {
            android.widget.LinearLayout apiLayout = new android.widget.LinearLayout(a);
            apiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etUrl = new android.widget.EditText(a);
            etUrl.setText(AI_API_URL); etUrl.setHint("API URL");
            android.widget.EditText etKey = new android.widget.EditText(a);
            etKey.setText(AI_API_KEY); etKey.setHint("API Key");
            android.widget.EditText etModel = new android.widget.EditText(a);
            etModel.setText(AI_MODEL); etModel.setHint("Model");
            apiLayout.addView(etUrl);
            apiLayout.addView(etKey);
            apiLayout.addView(etModel);
            new android.app.AlertDialog.Builder(a)
                .setTitle("AI 接口")
                .setView(apiLayout)
                .setPositiveButton("保存", (d, w) -> {
                    AI_API_URL = etUrl.getText().toString().trim();
                    AI_API_KEY = etKey.getText().toString().trim();
                    AI_MODEL = etModel.getText().toString().trim();
                    setString(PREF_AI_URL, AI_API_URL);
                    setString(PREF_AI_KEY, AI_API_KEY);
                    setString(PREF_AI_MODEL, AI_MODEL);
                    toast("API配置已更新");
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnApi);

        // 4. 记忆与频率
        android.widget.Button btnFreq = new android.widget.Button(a);
        btnFreq.setText("记忆与频率");
        btnFreq.setOnClickListener(v -> {
            android.widget.LinearLayout freqLayout = new android.widget.LinearLayout(a);
            freqLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etMem = new android.widget.EditText(a);
            etMem.setInputType(0x0002); etMem.setText(String.valueOf(memorySize));
            android.widget.EditText etCool = new android.widget.EditText(a);
            etCool.setInputType(0x0002); etCool.setText(String.valueOf(cooldownWindow / 60000));
            android.widget.EditText etMax = new android.widget.EditText(a);
            etMax.setInputType(0x0002); etMax.setText(String.valueOf(maxRepliesPerWindow));
            freqLayout.addView(etMem);
            freqLayout.addView(etCool);
            freqLayout.addView(etMax);
            new android.app.AlertDialog.Builder(a)
                .setTitle("记忆轮数 / 冷却(分钟) / 上限")
                .setView(freqLayout)
                .setPositiveButton("保存", (d, w) -> {
                    try {
                        memorySize = Integer.parseInt(etMem.getText().toString());
                        cooldownWindow = Integer.parseInt(etCool.getText().toString()) * 60 * 1000L;
                        maxRepliesPerWindow = Integer.parseInt(etMax.getText().toString());
                        setInt(PREF_MEMORY_SIZE, memorySize);
                        setLong(PREF_COOLDOWN, cooldownWindow);
                        setInt(PREF_MAX_REPLIES, maxRepliesPerWindow);
                        toast("已更新");
                    } catch (Exception e) {}
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnFreq);

        // 5. 高级参数
        android.widget.Button btnAdv = new android.widget.Button(a);
        btnAdv.setText("高级参数");
        btnAdv.setOnClickListener(v -> {
            android.widget.LinearLayout advLayout = new android.widget.LinearLayout(a);
            advLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
            android.widget.EditText etTemp = new android.widget.EditText(a);
            etTemp.setText(String.valueOf(temperature));
            android.widget.EditText etTopp = new android.widget.EditText(a);
            etTopp.setText(String.valueOf(topP));
            android.widget.EditText etTok = new android.widget.EditText(a);
            etTok.setText(String.valueOf(maxTokens));
            android.widget.EditText etSamp = new android.widget.EditText(a);
            etSamp.setText(String.valueOf(sampleCount));
            advLayout.addView(etTemp);
            advLayout.addView(etTopp);
            advLayout.addView(etTok);
            advLayout.addView(etSamp);
            new android.app.AlertDialog.Builder(a)
                .setTitle("温度 / top_p / max_tokens / 样本数")
                .setView(advLayout)
                .setPositiveButton("保存", (d, w) -> {
                    temperature = Double.parseDouble(etTemp.getText().toString());
                    topP = Double.parseDouble(etTopp.getText().toString());
                    maxTokens = Integer.parseInt(etTok.getText().toString());
                    sampleCount = Integer.parseInt(etSamp.getText().toString());
                    setString(PREF_TEMPERATURE, String.valueOf(temperature));
                    setString(PREF_TOPP, String.valueOf(topP));
                    setString(PREF_MAX_TOKENS, String.valueOf(maxTokens));
                    setInt(PREF_SAMPLE_COUNT, sampleCount);
                    toast("高级参数已更新");
                })
                .setNegativeButton("取消", null)
                .show();
        });
        root.addView(btnAdv);

        // 6. 风格学习
        android.widget.Button btnLearn = new android.widget.Button(a);
        btnLearn.setText("风格学习");
        btnLearn.setOnClickListener(v -> {
            new android.app.AlertDialog.Builder(a)
                .setTitle("风格管理")
                .setItems(new String[]{"学习风格", "锁定样本", "解锁样本", "清除风格"}, (d, w) -> {
                    switch (w) {
                        case 0: sendText(chatId, "/learnstyle"); toast("正在学习..."); break;
                        case 1: sendText(chatId, "/locksample"); toast("已锁定"); break;
                        case 2: sendText(chatId, "/unlocksample"); toast("已解锁"); break;
                        case 3: sendText(chatId, "/clearstyle"); toast("已清除"); break;
                    }
                })
                .show();
        });
        root.addView(btnLearn);

        // 7. 黑白名单
        android.widget.Button btnBlock = new android.widget.Button(a);
        btnBlock.setText("黑白名单");
        btnBlock.setOnClickListener(v -> {
            new android.app.AlertDialog.Builder(a)
                .setTitle("黑白名单")
                .setItems(new String[]{"查看黑名单", "查看白名单", "添加黑名单", "添加白名单"}, (d, w) -> {
                    if (w == 0) sendText(chatId, "/blacklist list");
                    else if (w == 1) sendText(chatId, "/whitelist list");
                    else inputId(a, chatId, w == 2 ? "blacklist" : "whitelist");
                })
                .show();
        });
        root.addView(btnBlock);

        // 关闭按钮
        android.widget.Button btnClose = new android.widget.Button(a);
        btnClose.setText("关闭");
        btnClose.setOnClickListener(v -> {
            if (currentDialog != null) {
                currentDialog.dismiss();
                currentDialog = null;
            }
        });
        root.addView(btnClose);

        scrollView.addView(root);
        currentDialog = new android.app.AlertDialog.Builder(a)
            .setTitle("⚙️ AI 控制面板")
            .setView(scrollView)
            .setCancelable(true)
            .create();
        currentDialog.show();
    } catch (Exception e) {
        sendText(chatId, buildControlPanel(chatId));
    }
}

String buildUiStatusShort(String chatId) {
    return "AI: " + (shouldAutoReply(chatId, false, null) ? "开" : "关") +
           " | 人格: " + currentPersona +
           " | 模式: " + (useWhitelist ? "白名单" : "黑名单");
}

void inputId(android.app.Activity a, String chatId, String type) {
    android.widget.EditText input = new android.widget.EditText(a);
    new android.app.AlertDialog.Builder(a)
        .setTitle("输入ID")
        .setView(input)
        .setPositiveButton("确定", (d, w) -> {
            sendText(chatId, "/" + type + " add " + input.getText().toString().trim());
        })
        .setNegativeButton("取消", null)
        .show();
}
`,jb=Object.freeze(Object.defineProperty({__proto__:null,default:Pg},Symbol.toStringTag,{value:"Module"})),Vb=`
`,Wb=`🤖 AI 自动回复 Plus v3.1 使用说明书

一、插件简介

AI 自动回复 Plus 是一款运行在 FkWeChat 框架上的微信插件，能够自动学习你的聊天风格，在你忙碌时用“像你本人”的语气帮你回复好友。本插件集成了多项独创技术，让自动回复更自然、更安全、更懂你。

核心亮点：
双轨风格学习
插件独创双轨学习系统：每次回复前，从你与好友近60天的聊天中提取N条真实发言作为“黄金样本”，AI严格模仿你的用词、标点、表情和句长；同时AI自动总结你对不同好友的说话习惯，独立记录专属风格。两者叠加，让你对死党随意、对同事客气，千人千面。

RAG增强检索与记忆
智能记忆系统记住近期对话，确保回复连贯不跳戏。结合关键词匹配与Bigram相似度算法，从对方最近发言中检索最相关的5条消息，配合时间衰减算法（越近权重越高），让回复贴切又自然。

AI防污染
插件在AI发出的每条消息末尾附加零宽标记，后续提取风格样本时自动检测并跳过，从根本上杜绝“AI学AI”的污染问题，确保学到的永远是“真我”，越用越像。

命令鉴权
所有关键设置（API密钥、黑白名单等）只有你自己可以修改，他人发送管理指令会被自动拒绝。API调用失败时自动重试，保障稳定性。

图形化控制面板
长按消息即可弹出可视化配置界面，随时调整回复语气、频率、记忆深度等参数，无需记忆命令。

群聊精细控制
支持群聊自动回复，可设置必须@才回复。每个群的开关与私聊独立，互不干扰。

配置导入导出
支持一键导出/导入全部配置，换手机或重装插件时粘贴即可恢复所有设置。

一. 开启 AI 自动回复

有两种方式：

方式一：命令方式
在想要开启 AI 回复的聊天框中输入：
/ai on
插件会回复 ✅ AI自动回复已开启。

方式二：长按菜单方式
长按任意消息 → 选择「🔕 开启AI自动回复」。

方式三：打开UI面板，点击AI回复按钮

3.3 验证是否生效

让好友给你发一条消息，如果 AI 自动回复了，说明配置成功。如果回复的是类似“作为一个人工智能…”的套话，说明 API Key 未设置或无效，请重新 /setkey。

---

二、控制面板（可视化配置）

插件提供两种控制面板入口：

2.1 长按菜单控制面板

长按任意消息 → 选择「⚙️ 控制面板」→ 弹出图形化配置界面，包含以下功能模块：

· AI 开关：一键开启/关闭当前会话的自动回复
· 人格切换：从列表中选择回复语气
· AI 接口设置：修改 API URL、密钥、模型名称
· 记忆与频率：调整记忆轮数、冷却时间、窗口上限
· 高级参数：设置温度、top_p、max_tokens、样本条数
· 风格学习：一键学习/锁定/解锁/清除风格
· 黑白名单：查看或添加黑名单/白名单

2.2 文本控制面板

输入 /panel 可获取一张包含所有配置项和快捷命令的文本面板，点击命令即可跳转修改。

---

三、所有命令速查表

3.1 基础开关

命令 说明
启用AI 或 /ai on 在当前会话开启 AI 回复
关闭AI 或 /ai off 在当前会话关闭 AI 回复
/ai status 查看当前会话的基本状态

3.2 API 配置

命令 示例 说明
/setkey /setkey sk-xxxx 设置 API 密钥
/seturl /seturl https://api.siliconflow.cn/v1/chat/completions 修改 API 地址
/model /model deepseek-ai/DeepSeek-V4-Flash 切换 AI 模型

3.3 人格切换(作为真实样本风格的辅助)

命令 说明
/persona default 友好自然（默认）
/persona humor 幽默风趣
/persona professional 专业可靠
/persona gentle 温柔体贴
/persona sarcastic 毒舌善良

3.4 记忆与频率

命令 示例 说明
/memorysize /memorysize 15 记忆轮数（2~30），越大对话越连贯
/cooldown /cooldown 3 冷却时间（分钟），两次回复的最小间隔
/maxreplies /maxreplies 5 每个时间窗口内最多回复几条
/clearmemory /clearmemory wxid_xxx 清除指定会话的记忆（不填 ID 则清空全部）

3.5 黑白名单

命令 示例 说明
/blacklist add <wxid> /blacklist add wxid_123 加入黑名单
/blacklist remove <wxid> /blacklist remove wxid_123 移出黑名单
/blacklist list 查看黑名单 
/whitelist add/remove/list 类似上面 
/whitelist on 切换为白名单模式（只回复白名单内的人） 
/whitelist off 切换回黑名单模式 

3.6 风格学习

命令 说明
/learnstyle [wxid] 学习当前会话（或指定会话）的聊天风格
/clearstyle [wxid] 清除已学习的风格
/setstyleprompt <文本> 自定义风格分析时的提示词
/locksample [wxid] 锁定当前真实样本为固定模仿模板
/unlocksample [wxid] 解除锁定，恢复动态采样

3.7 高级参数

命令 示例 说明
/temperature /temperature 0.3 回复随机性（0~2，越低越确定，越高越天马行空）
/topp /topp 0.6 核采样参数（-1 表示不使用）
/maxtokens /maxtokens 300 单次回复最大 token 数
/samplenum /samplenum 20 风格样本条数

3.8 工具命令

命令 说明
/panel [wxid] 查看控制面板（可指定会话）
/export 导出当前核心配置
/import <文本> 导入之前导出的配置
/reset switches 重置所有会话开关

---

四、核心功能详解

4.1 风格学习（让 AI 像你）

这是插件的核心功能。原理是：分析你与某个好友的历史聊天记录，提取你的用词、标点、表情、句长等特征，生成一段风格描述。之后每次自动回复时，AI 会同时参考这段描述和你最近的几条真实发言，尽量模仿你的语气。

操作步骤：

1. 在目标聊天框输入 /learnstyle（或输入 /learnstyle wxid_xxx 在文件传输助手中远程学习）。
2. 等待数秒，AI 会返回类似：
   \`\`\`
   ✅ 会话 wxid_fel8jew78n1g22 风格学习完成：
   他说话喜欢用简短的句子，常用表情😂👍，偶尔用“hhh”表示好笑，语气随和…
   \`\`\`
3. 风格描述会自动持久化，下次该好友发消息时 AI 会参考这个风格。

注意：风格学习需要你与该好友有较多的聊天记录（至少 30 个字符的自我发言）。如果提示“发言样本不足”，说明聊天记录太少，可以多聊几句后再学。

4.2 样本锁定（固定风格）

如果觉得某个风格的模仿效果很好，想一直保持，可以使用：

· /locksample：把当前提取到的真实样本锁定，之后不再随时间变化。
· /unlocksample：解除锁定，恢复动态采样。

4.3 AI 消息防污染

插件会自动在 AI 发送的每条消息末尾加上不可见标记（零宽字符），下次提取样本时会自动跳过带标记的消息，确保学到的永远是“真我”的发言，而不是 AI 自己的回复。

4.4 群聊支持

· 群聊中默认需要 @机器人 才会回复。
· 可以通过 /ai on 在群内开启自动回复，/ai off 关闭。
· 群聊的开关和私聊独立，互不影响。

4.5 频率限制

为了防止频繁回复引起注意，插件内置了频率控制：

· 冷却时间：两次回复之间的最小间隔（默认 1 分钟）。
· 窗口上限：每个时间窗口内最多回复条数（默认 3 条）。
  可根据需要自行调整。

---

七、隐私与安全

7.1 命令鉴权

所有管理命令（/setkey、/blacklist、/import 等）只有你自己可以执行。其他人如果给你发管理命令，会被拒绝并提示“只有插件主人才能使用管理命令”。

7.2 隐私建议

· 建议在 文件传输助手 中执行所有管理操作，这样命令和回复都不会被其他人看到。
· API Key 会持久化存储，/export 导出配置时请勿分享给他人。

---

八、常见问题(仅供参考，实际需要你自己测试)

Q1：为什么 AI 回复不像我？

· 检查是否已执行 /learnstyle 学习风格。
· 尝试调整参数：/temperature 0.3、/topp 0.6、/maxtokens 300、/samplenum 20。
· 确保历史聊天记录足够（至少 30 字符自我发言）。

Q2：为什么回复很慢？

· AI API 调用需要时间，通常 3-10 秒。
· 可尝试设置 /cooldown 0 关闭冷却（但会增加风控风险）。

Q3：为什么 API 返回 401 错误？

· API Key 未设置或无效，请重新 /setkey。
· 检查 API 地址是否正确。

Q4：为什么输入命令没有反应？

· 确保消息是自己发送的，且没有被其他消息覆盖。
· 命令区分大小写，请使用小写。

Q5：如何迁移配置到新手机？

· 在老手机输入 /export，复制输出的文本。
· 在新手机安装插件后，输入 /import （注意冒号后粘贴之前复制的文本）。

---

九、参数推荐值(仅供参考)

场景 temperature top_p max_tokens sampleCount memorySize
最像自己 0.3 0.6 300 20 10
默认通用 0.8 -1 500 50 20
创意模式 1.2 0.9 800 30 15
极简模式 0.2 0.5 150 10 5

---

以上即为 AI 自动回复 Plus v3.1 的完整使用说明。如有其他问题，可随时在聊天中发送 /panel 查看当前配置状态，或参考插件日志排查
`,Dg=`/** Created by 吃不香菜
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
}`,Hb=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),$b=`- 长按消息打开UI设置面板
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
`,Gb=`# FkwMcpPlugin 使用说明

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
4. 查看 \`mcp-server.log\` 中的错误堆栈。`,Kb=`import java.io.BufferedReader;
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
`,Bg=`loadJava("fkw_mcp");

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
`,qb=Object.freeze(Object.defineProperty({__proto__:null,default:Bg},Symbol.toStringTag,{value:"Module"})),Yb=`{
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
`,Jb=`## v1.0.7
- 修复了一些已知问题

## 指令列表
- \`点歌 歌名\`（仅自己可用）
`,Zb=`import okhttp3.*
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
}`,Xb=`import com.alibaba.fastjson2.*

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
}`,Fg=`loadJava("api/http")
loadJava("api/music")

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker.equals(myWxId)) {
        if (content.startsWith("点歌")) {
            music(msg.talker, content.substring(2))
        }
   }
}`,Qb=Object.freeze(Object.defineProperty({__proto__:null,default:Fg},Symbol.toStringTag,{value:"Module"})),zg=`// Created by 吃不香菜
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
`,e0=Object.freeze(Object.defineProperty({__proto__:null,default:zg},Symbol.toStringTag,{value:"Module"})),n0=`长按消息进入菜单打开ui
`,Ug=`// Created by 吃不香菜
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
`,t0=Object.freeze(Object.defineProperty({__proto__:null,default:Ug},Symbol.toStringTag,{value:"Module"})),r0=`- 插件：复读机与默认回复

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
`,i0=`�PNG\r

\0\0\0\rIHDR\0\0\0H\0\0\0H\b\0\0\0U��G\0\0\0sRGB\0���\0\0\x073IDATx^�[e�&U=���Vl�Ե;@��X�[1�le�\v�\0��յ�Ul�����~�|wgޙyg^Y�y~~���}������D�>��\0*����fA�����I��^\0�#9���=���|K��'\x1B\v��(�ͣ⻓���%��I�\x1B�N��z��T�7Y\0$�\0�g�	�b$��r�2IW8"�[��ke{\x1B$i\0KO�ǲ���%�a�0Mf�g\0������=��\x07pi"�/\0s���L~m�$M�d\0\x07\0X4s��\0np1I+PJ�f��E��H�Q*��AҎ\0��a\x1BErd��\0��\0�{��C�\v�u���) ɲvH��\0X7\0�g��^���tp���l@��*�+-�%\0#*\b~��$U�+���[�uǞ�H~Z�BI���'L\0X���U���nuAU�vC�ĝ%8�ϔ��@��gL��\0^�p��?���u���s\0�e��\0ঐ��\x07�N�I�e��3�\v��H����UWH�*ǅV9#�g\0����ݶv}U	 I��.9�������\0��̙f���.\x07pl��>\0��_��ws���92��Sf�Wh�p��O��d'���\0��a���\f�8 OܓV�&���\x1B\0��s(����*@N�i�se\bv�d.=��Ef!��k\0�\r�M\0s%<7�<��\vD�E��"�^�*�p���{��_s\f�@ZW�O�E��<\`�M�#yh?���'��r��Ir�~df���8\0��8�h��K��\\@��\x1B���I~R�\fI\x1Bx"��)�^kLu\x002��,�e��a}�A�V�5I��;�B��֓$-���N��qV%i\voL������x�'��vv%-�-��!�6�)yǬg�<��\fI�D�Jx���\`�Z���\0� M\r�Ę1�^�1钡^L�3�*�cI:+��N\vM�y
>�\`�=�YBl�m�i�k���\x1B�MF@m���Ge��^��K��~9�.N�I�$6�i[��\0lGr�%�-H>�&8��\b�.��g���W���v�P�Wy�/�ђF�T0��$G�\r�@\0��2\0w��'
?Jr�^�\b�ű�h��B5/A�M�A��:@��&�;�|gH�+�+�\\($I���U��P�?(p�c�f%
��ޕ�G���.�M)o�E�\\k1H�gʞ-W!�T�5��\r�ͧ��z$-g��
@!���x Gӳm-\0����A�����t�PN���/=�\b��E&
o\f���C��.\0��t\r��%9X_�#�z����$�K�U�X\x1B\0��1$�ͭ�����ղwVH���}�&� �Φ����\0�Y+}:�w���}t��lTp�\x07Cq����H:ǹ��aC#GpS��\v��v"�\`�n9
���w��=��l"d����\0��}|���$�+��$ύ=]�ʳb"�M�ܶכZ��t7�Y�ىg%�UíG�bo�O�\r@��F\0Y�$��c�{H�\\vp��A��[?��[�*W�#�-�6\0�Xb��Bo�����*_m]n��w��#c�#��o����=��{�K�,�5��ǀ(g؈�_�����"C�IZ/>�e�w\\qe�>=�^V�Hr�~\x1B�d�ޭ��W�����ӱj��<�hQ�nᓚ;����\v�+����B\0'U��\x1B����ĭ�\\9eii�i9Q�flm��v痨��+o���\r�	Pt3�X~��@,��C������si�t���q��&�F�[\rY긲���@ܬ�e�u�&�d�v\0� �����:\v�,���f\bt�\f�.u�YP3:\vj�_�:\v�,��5ï�A�5� %��᛿	���oL��>��V^5�VJҳ��\`�;�{m�U&o��JKZ,<A_��e�l�>���Rm��\0*A�����u�YP3\v�\x1B-��g3��\0\0\0\0IEND�B\`�`,jg=`// Created by 雲上升
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
}`,a0=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"})),Vg=`// Created by 吃不香菜
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
void onHandleMsg(Object bean) {}`,o0=Object.freeze(Object.defineProperty({__proto__:null,default:Vg},Symbol.toStringTag,{value:"Module"})),l0=`# 群发助手 - 
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
`;function Wg(e){return e.replace(/\\u([0-9a-fA-F]{4})/g,(i,r)=>String.fromCharCode(parseInt(r,16)))}function Hg(e,i){const r={},a=e.split(`
`);for(const s of a){const u=s.trim();if(u&&!u.startsWith("#")){const l=u.indexOf("=");if(l!==-1){const c=u.substring(0,l).trim(),f=Wg(u.substring(l+1).trim());r[c]=f}}}return{id:i,name:r.name||i,author:r.author||"未知作者",version:r.version||"1.0.0",description:r.desc||"",tags:r.tags?r.tags.split(",").map(s=>s.trim()).filter(Boolean):[],folder:i}}async function s0(){const e=Object.assign({"/main/plugins/AI自动回复拟人版/info.prop":Fu,"/main/plugins/FkAi回复/info.prop":zu,"/main/plugins/MCP服务器插件/info.prop":Uu,"/main/plugins/QQ点歌/info.prop":ju,"/main/plugins/关键提醒/info.prop":Vu,"/main/plugins/复读机与默认回复/info.prop":Wu,"/main/plugins/快捷操作/info.prop":Hu,"/main/plugins/群发助手/info.prop":$u}),i=[];for(const r in e){const a=r.split("/")[3];try{const s=e[r];i.push(Hg(s,a))}catch(s){console.error(`Failed to load plugin ${a}`,s)}}return i}async function u0(e){const i=Object.assign({"/main/plugins/AI自动回复拟人版/info.prop":Fu,"/main/plugins/FkAi回复/info.prop":zu,"/main/plugins/MCP服务器插件/info.prop":Uu,"/main/plugins/QQ点歌/info.prop":ju,"/main/plugins/关键提醒/info.prop":Vu,"/main/plugins/复读机与默认回复/info.prop":Wu,"/main/plugins/快捷操作/info.prop":Hu,"/main/plugins/群发助手/info.prop":$u}),r=Object.assign({"/main/plugins/AI自动回复拟人版/main.java":()=>Or(()=>Promise.resolve().then(()=>jb),void 0).then(w=>w.default),"/main/plugins/FkAi回复/main.java":()=>Or(()=>Promise.resolve().then(()=>Hb),void 0).then(w=>w.default),"/main/plugins/MCP服务器插件/main.java":()=>Or(()=>Promise.resolve().then(()=>qb),void 0).then(w=>w.default),"/main/plugins/QQ点歌/main.java":()=>Or(()=>Promise.resolve().then(()=>Qb),void 0).then(w=>w.default),"/main/plugins/关键提醒/main.java":()=>Or(()=>Promise.resolve().then(()=>e0),void 0).then(w=>w.default),"/main/plugins/复读机与默认回复/main.java":()=>Or(()=>Promise.resolve().then(()=>t0),void 0).then(w=>w.default),"/main/plugins/快捷操作/main.java":()=>Or(()=>Promise.resolve().then(()=>a0),void 0).then(w=>w.default),"/main/plugins/群发助手/main.java":()=>Or(()=>Promise.resolve().then(()=>o0),void 0).then(w=>w.default)}),a=Object.assign({"/main/plugins/AI自动回复拟人版/info.prop":Fu,"/main/plugins/AI自动回复拟人版/main.java":Pg,"/main/plugins/AI自动回复拟人版/语音消音部分我不会弄等待有能人":Vb,"/main/plugins/AI自动回复拟人版/说明书":Wb,"/main/plugins/FkAi回复/info.prop":zu,"/main/plugins/FkAi回复/main.java":Dg,"/main/plugins/FkAi回复/readme.md":$b,"/main/plugins/MCP服务器插件/README.md":Gb,"/main/plugins/MCP服务器插件/fkw_mcp.java":Kb,"/main/plugins/MCP服务器插件/info.prop":Uu,"/main/plugins/MCP服务器插件/main.java":Bg,"/main/plugins/MCP服务器插件/mcp-config.json":Yb,"/main/plugins/QQ点歌/README.md":Jb,"/main/plugins/QQ点歌/api/http.java":Zb,"/main/plugins/QQ点歌/api/music.java":Xb,"/main/plugins/QQ点歌/info.prop":ju,"/main/plugins/QQ点歌/main.java":Fg,"/main/plugins/关键提醒/info.prop":Vu,"/main/plugins/关键提醒/main.java":zg,"/main/plugins/关键提醒/readme.md":n0,"/main/plugins/复读机与默认回复/info.prop":Wu,"/main/plugins/复读机与默认回复/main.java":Ug,"/main/plugins/复读机与默认回复/readme.md":r0,"/main/plugins/快捷操作/icon/kick.png":i0,"/main/plugins/快捷操作/info.prop":Hu,"/main/plugins/快捷操作/main.java":jg,"/main/plugins/群发助手/info.prop":$u,"/main/plugins/群发助手/main.java":Vg,"/main/plugins/群发助手/readme.md":l0}),s=`/main/plugins/${e}/info.prop`,u=`/main/plugins/${e}/main.java`;if(!i[s]||!r[u])throw new Error("获取插件详情失败：文件不存在");const l=i[s],c=Wg(l),f=await r[u](),p=Hg(l,e),h={},g=`/main/plugins/${e}/`;for(const w in a)if(w.startsWith(g)){const m=w.substring(g.length);h[m]=m==="info.prop"?c:a[w]}return{...p,mainJava:f,infoProp:c,pluginFiles:h}}const $g=Fb((e,i)=>({plugins:[],currentPlugin:null,isLoading:!1,error:null,fetchPlugins:async()=>{e({isLoading:!0,error:null});try{const r=await s0();e({plugins:r,isLoading:!1})}catch(r){e({isLoading:!1,error:r instanceof Error?r.message:"获取插件列表失败"})}},fetchPluginDetail:async r=>{e({isLoading:!0,error:null});try{const a=await u0(r);e({currentPlugin:a,isLoading:!1})}catch(a){e({currentPlugin:null,isLoading:!1,error:a instanceof Error?a.message:"获取插件详情失败"})}},clearError:()=>e({error:null}),clearCurrentPlugin:()=>e({currentPlugin:null})}));function Gg({size:e="md",text:i}){const r={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"};return ae.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[ae.jsx(Og,{className:`${r[e]} animate-spin text-blue-600`}),i&&ae.jsx("p",{className:"text-sm text-gray-500",children:i})]})}const c0={search:Ng,error:yb,package:sc,empty:Mg};function Gu({icon:e="search",title:i,description:r,action:a}){const s=c0[e];return ae.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center",children:[ae.jsx("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100",children:ae.jsx(s,{className:"h-8 w-8 text-gray-400"})}),ae.jsx("h3",{className:"mb-2 text-lg font-semibold text-gray-900",children:i}),r&&ae.jsx("p",{className:"mb-6 max-w-sm text-sm text-gray-500",children:r}),a]})}function d0({plugin:e}){return ae.jsxs(fl,{to:`/plugin/${e.folder}`,className:"block rounded-md border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all",children:[ae.jsxs("div",{className:"flex items-start justify-between mb-3",children:[ae.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:e.name.charAt(0)}),ae.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",e.version]})]}),ae.jsx("h3",{className:"font-semibold text-gray-900 mb-1 truncate",children:e.name}),ae.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-3",children:e.description||"暂无描述"}),ae.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[ae.jsx(Rg,{className:"h-3.5 w-3.5"}),ae.jsx("span",{children:e.author})]})]})}let gp=0;function f0(){const{plugins:e,isLoading:i,error:r,fetchPlugins:a}=$g(),[s,u]=Ae.useState(""),l=Ae.useRef(null);Ae.useEffect(()=>{a()},[a]),Ae.useEffect(()=>{const f=l.current;f&&(f.scrollTop=gp);const p=()=>{f&&(gp=f.scrollTop)};return f==null||f.addEventListener("scroll",p),()=>{f==null||f.removeEventListener("scroll",p)}},[]);const c=e.filter(f=>s===""||f.name.toLowerCase().includes(s.toLowerCase())||f.description.toLowerCase().includes(s.toLowerCase())||f.author.toLowerCase().includes(s.toLowerCase()));return ae.jsxs("div",{className:"flex flex-col h-screen bg-white",children:[ae.jsx("div",{className:"flex-shrink-0 border-b border-gray-200",children:ae.jsxs("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:[ae.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-1",children:"插件仓库"}),ae.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"查找并下载适合的插件，提升使用体验"}),ae.jsx("div",{className:"max-w-md",children:ae.jsxs("div",{className:"relative",children:[ae.jsx(Ng,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),ae.jsx("input",{type:"text",value:s,onChange:f=>u(f.target.value),placeholder:"搜索插件...",className:"w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"})]})})]})}),!i&&!r&&c.length>0&&ae.jsx("div",{className:"flex-shrink-0 bg-white",children:ae.jsx("div",{className:"mx-auto max-w-5xl px-4 py-3 sm:px-6",children:ae.jsxs("div",{className:"flex items-center gap-2",children:[ae.jsx(sc,{className:"h-4 w-4 text-gray-500"}),ae.jsxs("span",{className:"text-sm text-gray-500",children:["共 ",ae.jsx("span",{className:"font-semibold text-gray-900",children:c.length})," 个插件"]})]})})}),ae.jsx("div",{ref:l,className:"flex-1 overflow-y-auto min-h-0",children:ae.jsx("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:i?ae.jsx("div",{className:"flex h-48 items-center justify-center",children:ae.jsx(Gg,{size:"md",text:"加载插件中..."})}):r?ae.jsx(Gu,{icon:"error",title:"加载失败",description:r,action:ae.jsx("button",{onClick:()=>a(),className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"重试"})}):c.length===0?ae.jsx(Gu,{icon:"package",title:e.length===0?"暂无插件":"未找到匹配的插件",description:e.length===0?"欢迎提交你的第一个插件！":"尝试调整搜索条件"}):ae.jsx(ae.Fragment,{children:ae.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-5",children:c.map(f=>ae.jsx(d0,{plugin:f},f.id))})})})})]})}function Qo(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var pu={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var hp;function p0(){return hp||(hp=1,(function(e,i){(function(r){e.exports=r()})(function(){return(function r(a,s,u){function l(p,h){if(!s[p]){if(!a[p]){var g=typeof Qo=="function"&&Qo;if(!h&&g)return g(p,!0);if(c)return c(p,!0);var w=new Error("Cannot find module '"+p+"'");throw w.code="MODULE_NOT_FOUND",w}var m=s[p]={exports:{}};a[p][0].call(m.exports,function(v){var S=a[p][1][v];return l(S||v)},m,m.exports,r,a,s,u)}return s[p].exports}for(var c=typeof Qo=="function"&&Qo,f=0;f<u.length;f++)l(u[f]);return l})({1:[function(r,a,s){var u=r("./utils"),l=r("./support"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(f){for(var p,h,g,w,m,v,S,_=[],k=0,C=f.length,I=C,D=u.getTypeOf(f)!=="string";k<f.length;)I=C-k,g=D?(p=f[k++],h=k<C?f[k++]:0,k<C?f[k++]:0):(p=f.charCodeAt(k++),h=k<C?f.charCodeAt(k++):0,k<C?f.charCodeAt(k++):0),w=p>>2,m=(3&p)<<4|h>>4,v=1<I?(15&h)<<2|g>>6:64,S=2<I?63&g:64,_.push(c.charAt(w)+c.charAt(m)+c.charAt(v)+c.charAt(S));return _.join("")},s.decode=function(f){var p,h,g,w,m,v,S=0,_=0,k="data:";if(f.substr(0,k.length)===k)throw new Error("Invalid base64 input, it looks like a data url.");var C,I=3*(f=f.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(f.charAt(f.length-1)===c.charAt(64)&&I--,f.charAt(f.length-2)===c.charAt(64)&&I--,I%1!=0)throw new Error("Invalid base64 input, bad content length.");for(C=l.uint8array?new Uint8Array(0|I):new Array(0|I);S<f.length;)p=c.indexOf(f.charAt(S++))<<2|(w=c.indexOf(f.charAt(S++)))>>4,h=(15&w)<<4|(m=c.indexOf(f.charAt(S++)))>>2,g=(3&m)<<6|(v=c.indexOf(f.charAt(S++))),C[_++]=p,m!==64&&(C[_++]=h),v!==64&&(C[_++]=g);return C}},{"./support":30,"./utils":32}],2:[function(r,a,s){var u=r("./external"),l=r("./stream/DataWorker"),c=r("./stream/Crc32Probe"),f=r("./stream/DataLengthProbe");function p(h,g,w,m,v){this.compressedSize=h,this.uncompressedSize=g,this.crc32=w,this.compression=m,this.compressedContent=v}p.prototype={getContentWorker:function(){var h=new l(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new f("data_length")),g=this;return h.on("end",function(){if(this.streamInfo.data_length!==g.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),h},getCompressedWorker:function(){return new l(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},p.createWorkerFrom=function(h,g,w){return h.pipe(new c).pipe(new f("uncompressedSize")).pipe(g.compressWorker(w)).pipe(new f("compressedSize")).withStreamInfo("compression",g)},a.exports=p},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,a,s){var u=r("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},s.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,a,s){var u=r("./utils"),l=(function(){for(var c,f=[],p=0;p<256;p++){c=p;for(var h=0;h<8;h++)c=1&c?3988292384^c>>>1:c>>>1;f[p]=c}return f})();a.exports=function(c,f){return c!==void 0&&c.length?u.getTypeOf(c)!=="string"?(function(p,h,g,w){var m=l,v=w+g;p^=-1;for(var S=w;S<v;S++)p=p>>>8^m[255&(p^h[S])];return-1^p})(0|f,c,c.length,0):(function(p,h,g,w){var m=l,v=w+g;p^=-1;for(var S=w;S<v;S++)p=p>>>8^m[255&(p^h.charCodeAt(S))];return-1^p})(0|f,c,c.length,0):0}},{"./utils":32}],5:[function(r,a,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(r,a,s){var u=null;u=typeof Promise<"u"?Promise:r("lie"),a.exports={Promise:u}},{lie:37}],7:[function(r,a,s){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=r("pako"),c=r("./utils"),f=r("./stream/GenericWorker"),p=u?"uint8array":"array";function h(g,w){f.call(this,"FlateWorker/"+g),this._pako=null,this._pakoAction=g,this._pakoOptions=w,this.meta={}}s.magic="\b\0",c.inherits(h,f),h.prototype.processChunk=function(g){this.meta=g.meta,this._pako===null&&this._createPako(),this._pako.push(c.transformTo(p,g.data),!1)},h.prototype.flush=function(){f.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},h.prototype.cleanUp=function(){f.prototype.cleanUp.call(this),this._pako=null},h.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var g=this;this._pako.onData=function(w){g.push({data:w,meta:g.meta})}},s.compressWorker=function(g){return new h("Deflate",g)},s.uncompressWorker=function(){return new h("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,a,s){function u(m,v){var S,_="";for(S=0;S<v;S++)_+=String.fromCharCode(255&m),m>>>=8;return _}function l(m,v,S,_,k,C){var I,D,B=m.file,R=m.compression,$=C!==p.utf8encode,Q=c.transformTo("string",C(B.name)),G=c.transformTo("string",p.utf8encode(B.name)),U=B.comment,oe=c.transformTo("string",C(U)),O=c.transformTo("string",p.utf8encode(U)),Y=G.length!==B.name.length,x=O.length!==U.length,V="",ge="",ie="",ne=B.dir,Z=B.date,L={crc32:0,compressedSize:0,uncompressedSize:0};v&&!S||(L.crc32=m.crc32,L.compressedSize=m.compressedSize,L.uncompressedSize=m.uncompressedSize);var A=0;v&&(A|=8),$||!Y&&!x||(A|=2048);var P=0,M=0;ne&&(P|=16),k==="UNIX"?(M=798,P|=(function(le,Ce){var Ue=le;return le||(Ue=Ce?16893:33204),(65535&Ue)<<16})(B.unixPermissions,ne)):(M=20,P|=(function(le){return 63&(le||0)})(B.dosPermissions)),I=Z.getUTCHours(),I<<=6,I|=Z.getUTCMinutes(),I<<=5,I|=Z.getUTCSeconds()/2,D=Z.getUTCFullYear()-1980,D<<=4,D|=Z.getUTCMonth()+1,D<<=5,D|=Z.getUTCDate(),Y&&(ge=u(1,1)+u(h(Q),4)+G,V+="up"+u(ge.length,2)+ge),x&&(ie=u(1,1)+u(h(oe),4)+O,V+="uc"+u(ie.length,2)+ie);var ue="";return ue+=`
\0`,ue+=u(A,2),ue+=R.magic,ue+=u(I,2),ue+=u(D,2),ue+=u(L.crc32,4),ue+=u(L.compressedSize,4),ue+=u(L.uncompressedSize,4),ue+=u(Q.length,2),ue+=u(V.length,2),{fileRecord:g.LOCAL_FILE_HEADER+ue+Q+V,dirRecord:g.CENTRAL_FILE_HEADER+u(M,2)+ue+u(oe.length,2)+"\0\0\0\0"+u(P,4)+u(_,4)+Q+V+oe}}var c=r("../utils"),f=r("../stream/GenericWorker"),p=r("../utf8"),h=r("../crc32"),g=r("../signature");function w(m,v,S,_){f.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=S,this.encodeFileName=_,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}c.inherits(w,f),w.prototype.push=function(m){var v=m.meta.percent||0,S=this.entriesCount,_=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,f.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:S?(v+100*(S-_-1))/S:100}}))},w.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var v=this.streamFiles&&!m.file.dir;if(v){var S=l(m,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:S.fileRecord,meta:{percent:0}})}else this.accumulate=!0},w.prototype.closedSource=function(m){this.accumulate=!1;var v=this.streamFiles&&!m.file.dir,S=l(m,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(S.dirRecord),v)this.push({data:(function(_){return g.DATA_DESCRIPTOR+u(_.crc32,4)+u(_.compressedSize,4)+u(_.uncompressedSize,4)})(m),meta:{percent:100}});else for(this.push({data:S.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},w.prototype.flush=function(){for(var m=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var S=this.bytesWritten-m,_=(function(k,C,I,D,B){var R=c.transformTo("string",B(D));return g.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(k,2)+u(k,2)+u(C,4)+u(I,4)+u(R.length,2)+R})(this.dirRecords.length,S,m,this.zipComment,this.encodeFileName);this.push({data:_,meta:{percent:100}})},w.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},w.prototype.registerPrevious=function(m){this._sources.push(m);var v=this;return m.on("data",function(S){v.processChunk(S)}),m.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),m.on("error",function(S){v.error(S)}),this},w.prototype.resume=function(){return!!f.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},w.prototype.error=function(m){var v=this._sources;if(!f.prototype.error.call(this,m))return!1;for(var S=0;S<v.length;S++)try{v[S].error(m)}catch{}return!0},w.prototype.lock=function(){f.prototype.lock.call(this);for(var m=this._sources,v=0;v<m.length;v++)m[v].lock()},a.exports=w},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,a,s){var u=r("../compressions"),l=r("./ZipFileWorker");s.generateWorker=function(c,f,p){var h=new l(f.streamFiles,p,f.platform,f.encodeFileName),g=0;try{c.forEach(function(w,m){g++;var v=(function(C,I){var D=C||I,B=u[D];if(!B)throw new Error(D+" is not a valid compression method !");return B})(m.options.compression,f.compression),S=m.options.compressionOptions||f.compressionOptions||{},_=m.dir,k=m.date;m._compressWorker(v,S).withStreamInfo("file",{name:w,dir:_,date:k,comment:m.comment||"",unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions}).pipe(h)}),h.entriesCount=g}catch(w){h.error(w)}return h}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,a,s){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new u;for(var c in this)typeof this[c]!="function"&&(l[c]=this[c]);return l}}(u.prototype=r("./object")).loadAsync=r("./load"),u.support=r("./support"),u.defaults=r("./defaults"),u.version="3.10.1",u.loadAsync=function(l,c){return new u().loadAsync(l,c)},u.external=r("./external"),a.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,a,s){var u=r("./utils"),l=r("./external"),c=r("./utf8"),f=r("./zipEntries"),p=r("./stream/Crc32Probe"),h=r("./nodejsUtils");function g(w){return new l.Promise(function(m,v){var S=w.decompressed.getContentWorker().pipe(new p);S.on("error",function(_){v(_)}).on("end",function(){S.streamInfo.crc32!==w.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):m()}).resume()})}a.exports=function(w,m){var v=this;return m=u.extend(m||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:c.utf8decode}),h.isNode&&h.isStream(w)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",w,!0,m.optimizedBinaryString,m.base64).then(function(S){var _=new f(m);return _.load(S),_}).then(function(S){var _=[l.Promise.resolve(S)],k=S.files;if(m.checkCRC32)for(var C=0;C<k.length;C++)_.push(g(k[C]));return l.Promise.all(_)}).then(function(S){for(var _=S.shift(),k=_.files,C=0;C<k.length;C++){var I=k[C],D=I.fileNameStr,B=u.resolve(I.fileNameStr);v.file(B,I.decompressed,{binary:!0,optimizedBinaryString:!0,date:I.date,dir:I.dir,comment:I.fileCommentStr.length?I.fileCommentStr:null,unixPermissions:I.unixPermissions,dosPermissions:I.dosPermissions,createFolders:m.createFolders}),I.dir||(v.file(B).unsafeOriginalName=D)}return _.zipComment.length&&(v.comment=_.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,a,s){var u=r("../utils"),l=r("../stream/GenericWorker");function c(f,p){l.call(this,"Nodejs stream input adapter for "+f),this._upstreamEnded=!1,this._bindStream(p)}u.inherits(c,l),c.prototype._bindStream=function(f){var p=this;(this._stream=f).pause(),f.on("data",function(h){p.push({data:h,meta:{percent:0}})}).on("error",function(h){p.isPaused?this.generatedError=h:p.error(h)}).on("end",function(){p.isPaused?p._upstreamEnded=!0:p.end()})},c.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},c.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},a.exports=c},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,a,s){var u=r("readable-stream").Readable;function l(c,f,p){u.call(this,f),this._helper=c;var h=this;c.on("data",function(g,w){h.push(g)||h._helper.pause(),p&&p(w)}).on("error",function(g){h.emit("error",g)}).on("end",function(){h.push(null)})}r("../utils").inherits(l,u),l.prototype._read=function(){this._helper.resume()},a.exports=l},{"../utils":32,"readable-stream":16}],14:[function(r,a,s){a.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,l);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,l)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var l=new Buffer(u);return l.fill(0),l},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(r,a,s){function u(B,R,$){var Q,G=c.getTypeOf(R),U=c.extend($||{},h);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(B=k(B)),U.createFolders&&(Q=_(B))&&C.call(this,Q,!0);var oe=G==="string"&&U.binary===!1&&U.base64===!1;$&&$.binary!==void 0||(U.binary=!oe),(R instanceof g&&R.uncompressedSize===0||U.dir||!R||R.length===0)&&(U.base64=!1,U.binary=!0,R="",U.compression="STORE",G="string");var O=null;O=R instanceof g||R instanceof f?R:v.isNode&&v.isStream(R)?new S(B,R):c.prepareContent(B,R,U.binary,U.optimizedBinaryString,U.base64);var Y=new w(B,O,U);this.files[B]=Y}var l=r("./utf8"),c=r("./utils"),f=r("./stream/GenericWorker"),p=r("./stream/StreamHelper"),h=r("./defaults"),g=r("./compressedObject"),w=r("./zipObject"),m=r("./generate"),v=r("./nodejsUtils"),S=r("./nodejs/NodejsStreamInputAdapter"),_=function(B){B.slice(-1)==="/"&&(B=B.substring(0,B.length-1));var R=B.lastIndexOf("/");return 0<R?B.substring(0,R):""},k=function(B){return B.slice(-1)!=="/"&&(B+="/"),B},C=function(B,R){return R=R!==void 0?R:h.createFolders,B=k(B),this.files[B]||u.call(this,B,null,{dir:!0,createFolders:R}),this.files[B]};function I(B){return Object.prototype.toString.call(B)==="[object RegExp]"}var D={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(B){var R,$,Q;for(R in this.files)Q=this.files[R],($=R.slice(this.root.length,R.length))&&R.slice(0,this.root.length)===this.root&&B($,Q)},filter:function(B){var R=[];return this.forEach(function($,Q){B($,Q)&&R.push(Q)}),R},file:function(B,R,$){if(arguments.length!==1)return B=this.root+B,u.call(this,B,R,$),this;if(I(B)){var Q=B;return this.filter(function(U,oe){return!oe.dir&&Q.test(U)})}var G=this.files[this.root+B];return G&&!G.dir?G:null},folder:function(B){if(!B)return this;if(I(B))return this.filter(function(G,U){return U.dir&&B.test(G)});var R=this.root+B,$=C.call(this,R),Q=this.clone();return Q.root=$.name,Q},remove:function(B){B=this.root+B;var R=this.files[B];if(R||(B.slice(-1)!=="/"&&(B+="/"),R=this.files[B]),R&&!R.dir)delete this.files[B];else for(var $=this.filter(function(G,U){return U.name.slice(0,B.length)===B}),Q=0;Q<$.length;Q++)delete this.files[$[Q].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(B){var R,$={};try{if(($=c.extend(B||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=$.type.toLowerCase(),$.compression=$.compression.toUpperCase(),$.type==="binarystring"&&($.type="string"),!$.type)throw new Error("No output type specified.");c.checkSupport($.type),$.platform!=="darwin"&&$.platform!=="freebsd"&&$.platform!=="linux"&&$.platform!=="sunos"||($.platform="UNIX"),$.platform==="win32"&&($.platform="DOS");var Q=$.comment||this.comment||"";R=m.generateWorker(this,$,Q)}catch(G){(R=new f("error")).error(G)}return new p(R,$.type||"string",$.mimeType)},generateAsync:function(B,R){return this.generateInternalStream(B).accumulate(R)},generateNodeStream:function(B,R){return(B=B||{}).type||(B.type="nodebuffer"),this.generateInternalStream(B).toNodejsStream(R)}};a.exports=D},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,a,s){a.exports=r("stream")},{stream:void 0}],17:[function(r,a,s){var u=r("./DataReader");function l(c){u.call(this,c);for(var f=0;f<this.data.length;f++)c[f]=255&c[f]}r("../utils").inherits(l,u),l.prototype.byteAt=function(c){return this.data[this.zero+c]},l.prototype.lastIndexOfSignature=function(c){for(var f=c.charCodeAt(0),p=c.charCodeAt(1),h=c.charCodeAt(2),g=c.charCodeAt(3),w=this.length-4;0<=w;--w)if(this.data[w]===f&&this.data[w+1]===p&&this.data[w+2]===h&&this.data[w+3]===g)return w-this.zero;return-1},l.prototype.readAndCheckSignature=function(c){var f=c.charCodeAt(0),p=c.charCodeAt(1),h=c.charCodeAt(2),g=c.charCodeAt(3),w=this.readData(4);return f===w[0]&&p===w[1]&&h===w[2]&&g===w[3]},l.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var f=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,f},a.exports=l},{"../utils":32,"./DataReader":18}],18:[function(r,a,s){var u=r("../utils");function l(c){this.data=c,this.length=c.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(c){this.checkIndex(this.index+c)},checkIndex:function(c){if(this.length<this.zero+c||c<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")},setIndex:function(c){this.checkIndex(c),this.index=c},skip:function(c){this.setIndex(this.index+c)},byteAt:function(){},readInt:function(c){var f,p=0;for(this.checkOffset(c),f=this.index+c-1;f>=this.index;f--)p=(p<<8)+this.byteAt(f);return this.index+=c,p},readString:function(c){return u.transformTo("string",this.readData(c))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var c=this.readInt(4);return new Date(Date.UTC(1980+(c>>25&127),(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1))}},a.exports=l},{"../utils":32}],19:[function(r,a,s){var u=r("./Uint8ArrayReader");function l(c){u.call(this,c)}r("../utils").inherits(l,u),l.prototype.readData=function(c){this.checkOffset(c);var f=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,f},a.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,a,s){var u=r("./DataReader");function l(c){u.call(this,c)}r("../utils").inherits(l,u),l.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},l.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},l.prototype.readAndCheckSignature=function(c){return c===this.readData(4)},l.prototype.readData=function(c){this.checkOffset(c);var f=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,f},a.exports=l},{"../utils":32,"./DataReader":18}],21:[function(r,a,s){var u=r("./ArrayReader");function l(c){u.call(this,c)}r("../utils").inherits(l,u),l.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var f=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,f},a.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(r,a,s){var u=r("../utils"),l=r("../support"),c=r("./ArrayReader"),f=r("./StringReader"),p=r("./NodeBufferReader"),h=r("./Uint8ArrayReader");a.exports=function(g){var w=u.getTypeOf(g);return u.checkSupport(w),w!=="string"||l.uint8array?w==="nodebuffer"?new p(g):l.uint8array?new h(u.transformTo("uint8array",g)):new c(u.transformTo("array",g)):new f(g)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,a,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,a,s){var u=r("./GenericWorker"),l=r("../utils");function c(f){u.call(this,"ConvertWorker to "+f),this.destType=f}l.inherits(c,u),c.prototype.processChunk=function(f){this.push({data:l.transformTo(this.destType,f.data),meta:f.meta})},a.exports=c},{"../utils":32,"./GenericWorker":28}],25:[function(r,a,s){var u=r("./GenericWorker"),l=r("../crc32");function c(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(c,u),c.prototype.processChunk=function(f){this.streamInfo.crc32=l(f.data,this.streamInfo.crc32||0),this.push(f)},a.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,a,s){var u=r("../utils"),l=r("./GenericWorker");function c(f){l.call(this,"DataLengthProbe for "+f),this.propName=f,this.withStreamInfo(f,0)}u.inherits(c,l),c.prototype.processChunk=function(f){if(f){var p=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=p+f.data.length}l.prototype.processChunk.call(this,f)},a.exports=c},{"../utils":32,"./GenericWorker":28}],27:[function(r,a,s){var u=r("../utils"),l=r("./GenericWorker");function c(f){l.call(this,"DataWorker");var p=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,f.then(function(h){p.dataIsReady=!0,p.data=h,p.max=h&&h.length||0,p.type=u.getTypeOf(h),p.isPaused||p._tickAndRepeat()},function(h){p.error(h)})}u.inherits(c,l),c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var f=null,p=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":f=this.data.substring(this.index,p);break;case"uint8array":f=this.data.subarray(this.index,p);break;case"array":case"nodebuffer":f=this.data.slice(this.index,p)}return this.index=p,this.push({data:f,meta:{percent:this.max?this.index/this.max*100:0}})},a.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(r,a,s){function u(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,c){return this._listeners[l].push(c),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,c){if(this._listeners[l])for(var f=0;f<this._listeners[l].length;f++)this._listeners[l][f].call(this,c)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var c=this;return l.on("data",function(f){c.processChunk(f)}),l.on("end",function(){c.end()}),l.on("error",function(f){c.error(f)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,c){return this.extraStreamInfo[l]=c,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},a.exports=u},{}],29:[function(r,a,s){var u=r("../utils"),l=r("./ConvertWorker"),c=r("./GenericWorker"),f=r("../base64"),p=r("../support"),h=r("../external"),g=null;if(p.nodestream)try{g=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function w(v,S){return new h.Promise(function(_,k){var C=[],I=v._internalType,D=v._outputType,B=v._mimeType;v.on("data",function(R,$){C.push(R),S&&S($)}).on("error",function(R){C=[],k(R)}).on("end",function(){try{var R=(function($,Q,G){switch($){case"blob":return u.newBlob(u.transformTo("arraybuffer",Q),G);case"base64":return f.encode(Q);default:return u.transformTo($,Q)}})(D,(function($,Q){var G,U=0,oe=null,O=0;for(G=0;G<Q.length;G++)O+=Q[G].length;switch($){case"string":return Q.join("");case"array":return Array.prototype.concat.apply([],Q);case"uint8array":for(oe=new Uint8Array(O),G=0;G<Q.length;G++)oe.set(Q[G],U),U+=Q[G].length;return oe;case"nodebuffer":return Buffer.concat(Q);default:throw new Error("concat : unsupported type '"+$+"'")}})(I,C),B);_(R)}catch($){k($)}C=[]}).resume()})}function m(v,S,_){var k=S;switch(S){case"blob":case"arraybuffer":k="uint8array";break;case"base64":k="string"}try{this._internalType=k,this._outputType=S,this._mimeType=_,u.checkSupport(k),this._worker=v.pipe(new l(k)),v.lock()}catch(C){this._worker=new c("error"),this._worker.error(C)}}m.prototype={accumulate:function(v){return w(this,v)},on:function(v,S){var _=this;return v==="data"?this._worker.on(v,function(k){S.call(_,k.data,k.meta)}):this._worker.on(v,function(){u.delay(S,arguments,_)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new g(this,{objectMode:this._outputType!=="nodebuffer"},v)}},a.exports=m},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,a,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var u=new ArrayBuffer(0);try{s.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(u),s.blob=l.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!r("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(r,a,s){for(var u=r("./utils"),l=r("./support"),c=r("./nodejsUtils"),f=r("./stream/GenericWorker"),p=new Array(256),h=0;h<256;h++)p[h]=252<=h?6:248<=h?5:240<=h?4:224<=h?3:192<=h?2:1;p[254]=p[254]=1;function g(){f.call(this,"utf-8 decode"),this.leftOver=null}function w(){f.call(this,"utf-8 encode")}s.utf8encode=function(m){return l.nodebuffer?c.newBufferFrom(m,"utf-8"):(function(v){var S,_,k,C,I,D=v.length,B=0;for(C=0;C<D;C++)(64512&(_=v.charCodeAt(C)))==55296&&C+1<D&&(64512&(k=v.charCodeAt(C+1)))==56320&&(_=65536+(_-55296<<10)+(k-56320),C++),B+=_<128?1:_<2048?2:_<65536?3:4;for(S=l.uint8array?new Uint8Array(B):new Array(B),C=I=0;I<B;C++)(64512&(_=v.charCodeAt(C)))==55296&&C+1<D&&(64512&(k=v.charCodeAt(C+1)))==56320&&(_=65536+(_-55296<<10)+(k-56320),C++),_<128?S[I++]=_:(_<2048?S[I++]=192|_>>>6:(_<65536?S[I++]=224|_>>>12:(S[I++]=240|_>>>18,S[I++]=128|_>>>12&63),S[I++]=128|_>>>6&63),S[I++]=128|63&_);return S})(m)},s.utf8decode=function(m){return l.nodebuffer?u.transformTo("nodebuffer",m).toString("utf-8"):(function(v){var S,_,k,C,I=v.length,D=new Array(2*I);for(S=_=0;S<I;)if((k=v[S++])<128)D[_++]=k;else if(4<(C=p[k]))D[_++]=65533,S+=C-1;else{for(k&=C===2?31:C===3?15:7;1<C&&S<I;)k=k<<6|63&v[S++],C--;1<C?D[_++]=65533:k<65536?D[_++]=k:(k-=65536,D[_++]=55296|k>>10&1023,D[_++]=56320|1023&k)}return D.length!==_&&(D.subarray?D=D.subarray(0,_):D.length=_),u.applyFromCharCode(D)})(m=u.transformTo(l.uint8array?"uint8array":"array",m))},u.inherits(g,f),g.prototype.processChunk=function(m){var v=u.transformTo(l.uint8array?"uint8array":"array",m.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var S=v;(v=new Uint8Array(S.length+this.leftOver.length)).set(this.leftOver,0),v.set(S,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var _=(function(C,I){var D;for((I=I||C.length)>C.length&&(I=C.length),D=I-1;0<=D&&(192&C[D])==128;)D--;return D<0||D===0?I:D+p[C[D]]>I?D:I})(v),k=v;_!==v.length&&(l.uint8array?(k=v.subarray(0,_),this.leftOver=v.subarray(_,v.length)):(k=v.slice(0,_),this.leftOver=v.slice(_,v.length))),this.push({data:s.utf8decode(k),meta:m.meta})},g.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=g,u.inherits(w,f),w.prototype.processChunk=function(m){this.push({data:s.utf8encode(m.data),meta:m.meta})},s.Utf8EncodeWorker=w},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,a,s){var u=r("./support"),l=r("./base64"),c=r("./nodejsUtils"),f=r("./external");function p(S){return S}function h(S,_){for(var k=0;k<S.length;++k)_[k]=255&S.charCodeAt(k);return _}r("setimmediate"),s.newBlob=function(S,_){s.checkSupport("blob");try{return new Blob([S],{type:_})}catch{try{var k=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return k.append(S),k.getBlob(_)}catch{throw new Error("Bug : can't construct the Blob.")}}};var g={stringifyByChunk:function(S,_,k){var C=[],I=0,D=S.length;if(D<=k)return String.fromCharCode.apply(null,S);for(;I<D;)_==="array"||_==="nodebuffer"?C.push(String.fromCharCode.apply(null,S.slice(I,Math.min(I+k,D)))):C.push(String.fromCharCode.apply(null,S.subarray(I,Math.min(I+k,D)))),I+=k;return C.join("")},stringifyByChar:function(S){for(var _="",k=0;k<S.length;k++)_+=String.fromCharCode(S[k]);return _},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,c.allocBuffer(1)).length===1}catch{return!1}})()}};function w(S){var _=65536,k=s.getTypeOf(S),C=!0;if(k==="uint8array"?C=g.applyCanBeUsed.uint8array:k==="nodebuffer"&&(C=g.applyCanBeUsed.nodebuffer),C)for(;1<_;)try{return g.stringifyByChunk(S,k,_)}catch{_=Math.floor(_/2)}return g.stringifyByChar(S)}function m(S,_){for(var k=0;k<S.length;k++)_[k]=S[k];return _}s.applyFromCharCode=w;var v={};v.string={string:p,array:function(S){return h(S,new Array(S.length))},arraybuffer:function(S){return v.string.uint8array(S).buffer},uint8array:function(S){return h(S,new Uint8Array(S.length))},nodebuffer:function(S){return h(S,c.allocBuffer(S.length))}},v.array={string:w,array:p,arraybuffer:function(S){return new Uint8Array(S).buffer},uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return c.newBufferFrom(S)}},v.arraybuffer={string:function(S){return w(new Uint8Array(S))},array:function(S){return m(new Uint8Array(S),new Array(S.byteLength))},arraybuffer:p,uint8array:function(S){return new Uint8Array(S)},nodebuffer:function(S){return c.newBufferFrom(new Uint8Array(S))}},v.uint8array={string:w,array:function(S){return m(S,new Array(S.length))},arraybuffer:function(S){return S.buffer},uint8array:p,nodebuffer:function(S){return c.newBufferFrom(S)}},v.nodebuffer={string:w,array:function(S){return m(S,new Array(S.length))},arraybuffer:function(S){return v.nodebuffer.uint8array(S).buffer},uint8array:function(S){return m(S,new Uint8Array(S.length))},nodebuffer:p},s.transformTo=function(S,_){if(_=_||"",!S)return _;s.checkSupport(S);var k=s.getTypeOf(_);return v[k][S](_)},s.resolve=function(S){for(var _=S.split("/"),k=[],C=0;C<_.length;C++){var I=_[C];I==="."||I===""&&C!==0&&C!==_.length-1||(I===".."?k.pop():k.push(I))}return k.join("/")},s.getTypeOf=function(S){return typeof S=="string"?"string":Object.prototype.toString.call(S)==="[object Array]"?"array":u.nodebuffer&&c.isBuffer(S)?"nodebuffer":u.uint8array&&S instanceof Uint8Array?"uint8array":u.arraybuffer&&S instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(S){if(!u[S.toLowerCase()])throw new Error(S+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(S){var _,k,C="";for(k=0;k<(S||"").length;k++)C+="\\x"+((_=S.charCodeAt(k))<16?"0":"")+_.toString(16).toUpperCase();return C},s.delay=function(S,_,k){setImmediate(function(){S.apply(k||null,_||[])})},s.inherits=function(S,_){function k(){}k.prototype=_.prototype,S.prototype=new k},s.extend=function(){var S,_,k={};for(S=0;S<arguments.length;S++)for(_ in arguments[S])Object.prototype.hasOwnProperty.call(arguments[S],_)&&k[_]===void 0&&(k[_]=arguments[S][_]);return k},s.prepareContent=function(S,_,k,C,I){return f.Promise.resolve(_).then(function(D){return u.blob&&(D instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(D))!==-1)&&typeof FileReader<"u"?new f.Promise(function(B,R){var $=new FileReader;$.onload=function(Q){B(Q.target.result)},$.onerror=function(Q){R(Q.target.error)},$.readAsArrayBuffer(D)}):D}).then(function(D){var B=s.getTypeOf(D);return B?(B==="arraybuffer"?D=s.transformTo("uint8array",D):B==="string"&&(I?D=l.decode(D):k&&C!==!0&&(D=(function(R){return h(R,u.uint8array?new Uint8Array(R.length):new Array(R.length))})(D))),D):f.Promise.reject(new Error("Can't read the data of '"+S+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,a,s){var u=r("./reader/readerFor"),l=r("./utils"),c=r("./signature"),f=r("./zipEntry"),p=r("./support");function h(g){this.files=[],this.loadOptions=g}h.prototype={checkSignature:function(g){if(!this.reader.readAndCheckSignature(g)){this.reader.index-=4;var w=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(w)+", expected "+l.pretty(g)+")")}},isSignature:function(g,w){var m=this.reader.index;this.reader.setIndex(g);var v=this.reader.readString(4)===w;return this.reader.setIndex(m),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var g=this.reader.readData(this.zipCommentLength),w=p.uint8array?"uint8array":"array",m=l.transformTo(w,g);this.zipComment=this.loadOptions.decodeFileName(m)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var g,w,m,v=this.zip64EndOfCentralSize-44;0<v;)g=this.reader.readInt(2),w=this.reader.readInt(4),m=this.reader.readData(w),this.zip64ExtensibleData[g]={id:g,length:w,value:m}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var g,w;for(g=0;g<this.files.length;g++)w=this.files[g],this.reader.setIndex(w.localHeaderOffset),this.checkSignature(c.LOCAL_FILE_HEADER),w.readLocalPart(this.reader),w.handleUTF8(),w.processAttributes()},readCentralDir:function(){var g;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);)(g=new f({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(g);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var g=this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);if(g<0)throw this.isSignature(0,c.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(g);var w=g;if(this.checkSignature(c.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(g=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(g),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,c.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var m=this.centralDirOffset+this.centralDirSize;this.zip64&&(m+=20,m+=12+this.zip64EndOfCentralSize);var v=w-m;if(0<v)this.isSignature(w,c.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(g){this.reader=u(g)},load:function(g){this.prepareReader(g),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},a.exports=h},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,a,s){var u=r("./reader/readerFor"),l=r("./utils"),c=r("./compressedObject"),f=r("./crc32"),p=r("./utf8"),h=r("./compressions"),g=r("./support");function w(m,v){this.options=m,this.loadOptions=v}w.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(m){var v,S;if(m.skip(22),this.fileNameLength=m.readInt(2),S=m.readInt(2),this.fileName=m.readData(this.fileNameLength),m.skip(S),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=(function(_){for(var k in h)if(Object.prototype.hasOwnProperty.call(h,k)&&h[k].magic===_)return h[k];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new c(this.compressedSize,this.uncompressedSize,this.crc32,v,m.readData(this.compressedSize))},readCentralPart:function(m){this.versionMadeBy=m.readInt(2),m.skip(2),this.bitFlag=m.readInt(2),this.compressionMethod=m.readString(2),this.date=m.readDate(),this.crc32=m.readInt(4),this.compressedSize=m.readInt(4),this.uncompressedSize=m.readInt(4);var v=m.readInt(2);if(this.extraFieldsLength=m.readInt(2),this.fileCommentLength=m.readInt(2),this.diskNumberStart=m.readInt(2),this.internalFileAttributes=m.readInt(2),this.externalFileAttributes=m.readInt(4),this.localHeaderOffset=m.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");m.skip(v),this.readExtraFields(m),this.parseZIP64ExtraField(m),this.fileComment=m.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var m=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),m==0&&(this.dosPermissions=63&this.externalFileAttributes),m==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var m=u(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=m.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=m.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=m.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=m.readInt(4))}},readExtraFields:function(m){var v,S,_,k=m.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});m.index+4<k;)v=m.readInt(2),S=m.readInt(2),_=m.readData(S),this.extraFields[v]={id:v,length:S,value:_};m.setIndex(k)},handleUTF8:function(){var m=g.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=p.utf8decode(this.fileName),this.fileCommentStr=p.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var S=l.transformTo(m,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(S)}var _=this.findExtraFieldUnicodeComment();if(_!==null)this.fileCommentStr=_;else{var k=l.transformTo(m,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(k)}}},findExtraFieldUnicodePath:function(){var m=this.extraFields[28789];if(m){var v=u(m.value);return v.readInt(1)!==1||f(this.fileName)!==v.readInt(4)?null:p.utf8decode(v.readData(m.length-5))}return null},findExtraFieldUnicodeComment:function(){var m=this.extraFields[25461];if(m){var v=u(m.value);return v.readInt(1)!==1||f(this.fileComment)!==v.readInt(4)?null:p.utf8decode(v.readData(m.length-5))}return null}},a.exports=w},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,a,s){function u(v,S,_){this.name=v,this.dir=_.dir,this.date=_.date,this.comment=_.comment,this.unixPermissions=_.unixPermissions,this.dosPermissions=_.dosPermissions,this._data=S,this._dataBinary=_.binary,this.options={compression:_.compression,compressionOptions:_.compressionOptions}}var l=r("./stream/StreamHelper"),c=r("./stream/DataWorker"),f=r("./utf8"),p=r("./compressedObject"),h=r("./stream/GenericWorker");u.prototype={internalStream:function(v){var S=null,_="string";try{if(!v)throw new Error("No output type specified.");var k=(_=v.toLowerCase())==="string"||_==="text";_!=="binarystring"&&_!=="text"||(_="string"),S=this._decompressWorker();var C=!this._dataBinary;C&&!k&&(S=S.pipe(new f.Utf8EncodeWorker)),!C&&k&&(S=S.pipe(new f.Utf8DecodeWorker))}catch(I){(S=new h("error")).error(I)}return new l(S,_,"")},async:function(v,S){return this.internalStream(v).accumulate(S)},nodeStream:function(v,S){return this.internalStream(v||"nodebuffer").toNodejsStream(S)},_compressWorker:function(v,S){if(this._data instanceof p&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var _=this._decompressWorker();return this._dataBinary||(_=_.pipe(new f.Utf8EncodeWorker)),p.createWorkerFrom(_,v,S)},_decompressWorker:function(){return this._data instanceof p?this._data.getContentWorker():this._data instanceof h?this._data:new c(this._data)}};for(var g=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],w=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},m=0;m<g.length;m++)u.prototype[g[m]]=w;a.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,a,s){(function(u){var l,c,f=u.MutationObserver||u.WebKitMutationObserver;if(f){var p=0,h=new f(v),g=u.document.createTextNode("");h.observe(g,{characterData:!0}),l=function(){g.data=p=++p%2}}else if(u.setImmediate||u.MessageChannel===void 0)l="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var S=u.document.createElement("script");S.onreadystatechange=function(){v(),S.onreadystatechange=null,S.parentNode.removeChild(S),S=null},u.document.documentElement.appendChild(S)}:function(){setTimeout(v,0)};else{var w=new u.MessageChannel;w.port1.onmessage=v,l=function(){w.port2.postMessage(0)}}var m=[];function v(){var S,_;c=!0;for(var k=m.length;k;){for(_=m,m=[],S=-1;++S<k;)_[S]();k=m.length}c=!1}a.exports=function(S){m.push(S)!==1||c||l()}}).call(this,typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,a,s){var u=r("immediate");function l(){}var c={},f=["REJECTED"],p=["FULFILLED"],h=["PENDING"];function g(k){if(typeof k!="function")throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,k!==l&&S(this,k)}function w(k,C,I){this.promise=k,typeof C=="function"&&(this.onFulfilled=C,this.callFulfilled=this.otherCallFulfilled),typeof I=="function"&&(this.onRejected=I,this.callRejected=this.otherCallRejected)}function m(k,C,I){u(function(){var D;try{D=C(I)}catch(B){return c.reject(k,B)}D===k?c.reject(k,new TypeError("Cannot resolve promise with itself")):c.resolve(k,D)})}function v(k){var C=k&&k.then;if(k&&(typeof k=="object"||typeof k=="function")&&typeof C=="function")return function(){C.apply(k,arguments)}}function S(k,C){var I=!1;function D($){I||(I=!0,c.reject(k,$))}function B($){I||(I=!0,c.resolve(k,$))}var R=_(function(){C(B,D)});R.status==="error"&&D(R.value)}function _(k,C){var I={};try{I.value=k(C),I.status="success"}catch(D){I.status="error",I.value=D}return I}(a.exports=g).prototype.finally=function(k){if(typeof k!="function")return this;var C=this.constructor;return this.then(function(I){return C.resolve(k()).then(function(){return I})},function(I){return C.resolve(k()).then(function(){throw I})})},g.prototype.catch=function(k){return this.then(null,k)},g.prototype.then=function(k,C){if(typeof k!="function"&&this.state===p||typeof C!="function"&&this.state===f)return this;var I=new this.constructor(l);return this.state!==h?m(I,this.state===p?k:C,this.outcome):this.queue.push(new w(I,k,C)),I},w.prototype.callFulfilled=function(k){c.resolve(this.promise,k)},w.prototype.otherCallFulfilled=function(k){m(this.promise,this.onFulfilled,k)},w.prototype.callRejected=function(k){c.reject(this.promise,k)},w.prototype.otherCallRejected=function(k){m(this.promise,this.onRejected,k)},c.resolve=function(k,C){var I=_(v,C);if(I.status==="error")return c.reject(k,I.value);var D=I.value;if(D)S(k,D);else{k.state=p,k.outcome=C;for(var B=-1,R=k.queue.length;++B<R;)k.queue[B].callFulfilled(C)}return k},c.reject=function(k,C){k.state=f,k.outcome=C;for(var I=-1,D=k.queue.length;++I<D;)k.queue[I].callRejected(C);return k},g.resolve=function(k){return k instanceof this?k:c.resolve(new this(l),k)},g.reject=function(k){var C=new this(l);return c.reject(C,k)},g.all=function(k){var C=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=k.length,D=!1;if(!I)return this.resolve([]);for(var B=new Array(I),R=0,$=-1,Q=new this(l);++$<I;)G(k[$],$);return Q;function G(U,oe){C.resolve(U).then(function(O){B[oe]=O,++R!==I||D||(D=!0,c.resolve(Q,B))},function(O){D||(D=!0,c.reject(Q,O))})}},g.race=function(k){var C=this;if(Object.prototype.toString.call(k)!=="[object Array]")return this.reject(new TypeError("must be an array"));var I=k.length,D=!1;if(!I)return this.resolve([]);for(var B=-1,R=new this(l);++B<I;)$=k[B],C.resolve($).then(function(Q){D||(D=!0,c.resolve(R,Q))},function(Q){D||(D=!0,c.reject(R,Q))});var $;return R}},{immediate:36}],38:[function(r,a,s){var u={};(0,r("./lib/utils/common").assign)(u,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),a.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,a,s){var u=r("./zlib/deflate"),l=r("./utils/common"),c=r("./utils/strings"),f=r("./zlib/messages"),p=r("./zlib/zstream"),h=Object.prototype.toString,g=0,w=-1,m=0,v=8;function S(k){if(!(this instanceof S))return new S(k);this.options=l.assign({level:w,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},k||{});var C=this.options;C.raw&&0<C.windowBits?C.windowBits=-C.windowBits:C.gzip&&0<C.windowBits&&C.windowBits<16&&(C.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new p,this.strm.avail_out=0;var I=u.deflateInit2(this.strm,C.level,C.method,C.windowBits,C.memLevel,C.strategy);if(I!==g)throw new Error(f[I]);if(C.header&&u.deflateSetHeader(this.strm,C.header),C.dictionary){var D;if(D=typeof C.dictionary=="string"?c.string2buf(C.dictionary):h.call(C.dictionary)==="[object ArrayBuffer]"?new Uint8Array(C.dictionary):C.dictionary,(I=u.deflateSetDictionary(this.strm,D))!==g)throw new Error(f[I]);this._dict_set=!0}}function _(k,C){var I=new S(C);if(I.push(k,!0),I.err)throw I.msg||f[I.err];return I.result}S.prototype.push=function(k,C){var I,D,B=this.strm,R=this.options.chunkSize;if(this.ended)return!1;D=C===~~C?C:C===!0?4:0,typeof k=="string"?B.input=c.string2buf(k):h.call(k)==="[object ArrayBuffer]"?B.input=new Uint8Array(k):B.input=k,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new l.Buf8(R),B.next_out=0,B.avail_out=R),(I=u.deflate(B,D))!==1&&I!==g)return this.onEnd(I),!(this.ended=!0);B.avail_out!==0&&(B.avail_in!==0||D!==4&&D!==2)||(this.options.to==="string"?this.onData(c.buf2binstring(l.shrinkBuf(B.output,B.next_out))):this.onData(l.shrinkBuf(B.output,B.next_out)))}while((0<B.avail_in||B.avail_out===0)&&I!==1);return D===4?(I=u.deflateEnd(this.strm),this.onEnd(I),this.ended=!0,I===g):D!==2||(this.onEnd(g),!(B.avail_out=0))},S.prototype.onData=function(k){this.chunks.push(k)},S.prototype.onEnd=function(k){k===g&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=k,this.msg=this.strm.msg},s.Deflate=S,s.deflate=_,s.deflateRaw=function(k,C){return(C=C||{}).raw=!0,_(k,C)},s.gzip=function(k,C){return(C=C||{}).gzip=!0,_(k,C)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,a,s){var u=r("./zlib/inflate"),l=r("./utils/common"),c=r("./utils/strings"),f=r("./zlib/constants"),p=r("./zlib/messages"),h=r("./zlib/zstream"),g=r("./zlib/gzheader"),w=Object.prototype.toString;function m(S){if(!(this instanceof m))return new m(S);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},S||{});var _=this.options;_.raw&&0<=_.windowBits&&_.windowBits<16&&(_.windowBits=-_.windowBits,_.windowBits===0&&(_.windowBits=-15)),!(0<=_.windowBits&&_.windowBits<16)||S&&S.windowBits||(_.windowBits+=32),15<_.windowBits&&_.windowBits<48&&(15&_.windowBits)==0&&(_.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new h,this.strm.avail_out=0;var k=u.inflateInit2(this.strm,_.windowBits);if(k!==f.Z_OK)throw new Error(p[k]);this.header=new g,u.inflateGetHeader(this.strm,this.header)}function v(S,_){var k=new m(_);if(k.push(S,!0),k.err)throw k.msg||p[k.err];return k.result}m.prototype.push=function(S,_){var k,C,I,D,B,R,$=this.strm,Q=this.options.chunkSize,G=this.options.dictionary,U=!1;if(this.ended)return!1;C=_===~~_?_:_===!0?f.Z_FINISH:f.Z_NO_FLUSH,typeof S=="string"?$.input=c.binstring2buf(S):w.call(S)==="[object ArrayBuffer]"?$.input=new Uint8Array(S):$.input=S,$.next_in=0,$.avail_in=$.input.length;do{if($.avail_out===0&&($.output=new l.Buf8(Q),$.next_out=0,$.avail_out=Q),(k=u.inflate($,f.Z_NO_FLUSH))===f.Z_NEED_DICT&&G&&(R=typeof G=="string"?c.string2buf(G):w.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,k=u.inflateSetDictionary(this.strm,R)),k===f.Z_BUF_ERROR&&U===!0&&(k=f.Z_OK,U=!1),k!==f.Z_STREAM_END&&k!==f.Z_OK)return this.onEnd(k),!(this.ended=!0);$.next_out&&($.avail_out!==0&&k!==f.Z_STREAM_END&&($.avail_in!==0||C!==f.Z_FINISH&&C!==f.Z_SYNC_FLUSH)||(this.options.to==="string"?(I=c.utf8border($.output,$.next_out),D=$.next_out-I,B=c.buf2string($.output,I),$.next_out=D,$.avail_out=Q-D,D&&l.arraySet($.output,$.output,I,D,0),this.onData(B)):this.onData(l.shrinkBuf($.output,$.next_out)))),$.avail_in===0&&$.avail_out===0&&(U=!0)}while((0<$.avail_in||$.avail_out===0)&&k!==f.Z_STREAM_END);return k===f.Z_STREAM_END&&(C=f.Z_FINISH),C===f.Z_FINISH?(k=u.inflateEnd(this.strm),this.onEnd(k),this.ended=!0,k===f.Z_OK):C!==f.Z_SYNC_FLUSH||(this.onEnd(f.Z_OK),!($.avail_out=0))},m.prototype.onData=function(S){this.chunks.push(S)},m.prototype.onEnd=function(S){S===f.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg},s.Inflate=m,s.inflate=v,s.inflateRaw=function(S,_){return(_=_||{}).raw=!0,v(S,_)},s.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,a,s){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(f){for(var p=Array.prototype.slice.call(arguments,1);p.length;){var h=p.shift();if(h){if(typeof h!="object")throw new TypeError(h+"must be non-object");for(var g in h)h.hasOwnProperty(g)&&(f[g]=h[g])}}return f},s.shrinkBuf=function(f,p){return f.length===p?f:f.subarray?f.subarray(0,p):(f.length=p,f)};var l={arraySet:function(f,p,h,g,w){if(p.subarray&&f.subarray)f.set(p.subarray(h,h+g),w);else for(var m=0;m<g;m++)f[w+m]=p[h+m]},flattenChunks:function(f){var p,h,g,w,m,v;for(p=g=0,h=f.length;p<h;p++)g+=f[p].length;for(v=new Uint8Array(g),p=w=0,h=f.length;p<h;p++)m=f[p],v.set(m,w),w+=m.length;return v}},c={arraySet:function(f,p,h,g,w){for(var m=0;m<g;m++)f[w+m]=p[h+m]},flattenChunks:function(f){return[].concat.apply([],f)}};s.setTyped=function(f){f?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,l)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,c))},s.setTyped(u)},{}],42:[function(r,a,s){var u=r("./common"),l=!0,c=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{c=!1}for(var f=new u.Buf8(256),p=0;p<256;p++)f[p]=252<=p?6:248<=p?5:240<=p?4:224<=p?3:192<=p?2:1;function h(g,w){if(w<65537&&(g.subarray&&c||!g.subarray&&l))return String.fromCharCode.apply(null,u.shrinkBuf(g,w));for(var m="",v=0;v<w;v++)m+=String.fromCharCode(g[v]);return m}f[254]=f[254]=1,s.string2buf=function(g){var w,m,v,S,_,k=g.length,C=0;for(S=0;S<k;S++)(64512&(m=g.charCodeAt(S)))==55296&&S+1<k&&(64512&(v=g.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),S++),C+=m<128?1:m<2048?2:m<65536?3:4;for(w=new u.Buf8(C),S=_=0;_<C;S++)(64512&(m=g.charCodeAt(S)))==55296&&S+1<k&&(64512&(v=g.charCodeAt(S+1)))==56320&&(m=65536+(m-55296<<10)+(v-56320),S++),m<128?w[_++]=m:(m<2048?w[_++]=192|m>>>6:(m<65536?w[_++]=224|m>>>12:(w[_++]=240|m>>>18,w[_++]=128|m>>>12&63),w[_++]=128|m>>>6&63),w[_++]=128|63&m);return w},s.buf2binstring=function(g){return h(g,g.length)},s.binstring2buf=function(g){for(var w=new u.Buf8(g.length),m=0,v=w.length;m<v;m++)w[m]=g.charCodeAt(m);return w},s.buf2string=function(g,w){var m,v,S,_,k=w||g.length,C=new Array(2*k);for(m=v=0;m<k;)if((S=g[m++])<128)C[v++]=S;else if(4<(_=f[S]))C[v++]=65533,m+=_-1;else{for(S&=_===2?31:_===3?15:7;1<_&&m<k;)S=S<<6|63&g[m++],_--;1<_?C[v++]=65533:S<65536?C[v++]=S:(S-=65536,C[v++]=55296|S>>10&1023,C[v++]=56320|1023&S)}return h(C,v)},s.utf8border=function(g,w){var m;for((w=w||g.length)>g.length&&(w=g.length),m=w-1;0<=m&&(192&g[m])==128;)m--;return m<0||m===0?w:m+f[g[m]]>w?m:w}},{"./common":41}],43:[function(r,a,s){a.exports=function(u,l,c,f){for(var p=65535&u|0,h=u>>>16&65535|0,g=0;c!==0;){for(c-=g=2e3<c?2e3:c;h=h+(p=p+l[f++]|0)|0,--g;);p%=65521,h%=65521}return p|h<<16|0}},{}],44:[function(r,a,s){a.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,a,s){var u=(function(){for(var l,c=[],f=0;f<256;f++){l=f;for(var p=0;p<8;p++)l=1&l?3988292384^l>>>1:l>>>1;c[f]=l}return c})();a.exports=function(l,c,f,p){var h=u,g=p+f;l^=-1;for(var w=p;w<g;w++)l=l>>>8^h[255&(l^c[w])];return-1^l}},{}],46:[function(r,a,s){var u,l=r("../utils/common"),c=r("./trees"),f=r("./adler32"),p=r("./crc32"),h=r("./messages"),g=0,w=4,m=0,v=-2,S=-1,_=4,k=2,C=8,I=9,D=286,B=30,R=19,$=2*D+1,Q=15,G=3,U=258,oe=U+G+1,O=42,Y=113,x=1,V=2,ge=3,ie=4;function ne(E,se){return E.msg=h[se],se}function Z(E){return(E<<1)-(4<E?9:0)}function L(E){for(var se=E.length;0<=--se;)E[se]=0}function A(E){var se=E.state,J=se.pending;J>E.avail_out&&(J=E.avail_out),J!==0&&(l.arraySet(E.output,se.pending_buf,se.pending_out,J,E.next_out),E.next_out+=J,se.pending_out+=J,E.total_out+=J,E.avail_out-=J,se.pending-=J,se.pending===0&&(se.pending_out=0))}function P(E,se){c._tr_flush_block(E,0<=E.block_start?E.block_start:-1,E.strstart-E.block_start,se),E.block_start=E.strstart,A(E.strm)}function M(E,se){E.pending_buf[E.pending++]=se}function ue(E,se){E.pending_buf[E.pending++]=se>>>8&255,E.pending_buf[E.pending++]=255&se}function le(E,se){var J,F,N=E.max_chain_length,K=E.strstart,de=E.prev_length,pe=E.nice_match,ee=E.strstart>E.w_size-oe?E.strstart-(E.w_size-oe):0,we=E.window,Ee=E.w_mask,be=E.prev,q=E.strstart+U,fe=we[K+de-1],_e=we[K+de];E.prev_length>=E.good_match&&(N>>=2),pe>E.lookahead&&(pe=E.lookahead);do if(we[(J=se)+de]===_e&&we[J+de-1]===fe&&we[J]===we[K]&&we[++J]===we[K+1]){K+=2,J++;do;while(we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&we[++K]===we[++J]&&K<q);if(F=U-(q-K),K=q-U,de<F){if(E.match_start=se,pe<=(de=F))break;fe=we[K+de-1],_e=we[K+de]}}while((se=be[se&Ee])>ee&&--N!=0);return de<=E.lookahead?de:E.lookahead}function Ce(E){var se,J,F,N,K,de,pe,ee,we,Ee,be=E.w_size;do{if(N=E.window_size-E.lookahead-E.strstart,E.strstart>=be+(be-oe)){for(l.arraySet(E.window,E.window,be,be,0),E.match_start-=be,E.strstart-=be,E.block_start-=be,se=J=E.hash_size;F=E.head[--se],E.head[se]=be<=F?F-be:0,--J;);for(se=J=be;F=E.prev[--se],E.prev[se]=be<=F?F-be:0,--J;);N+=be}if(E.strm.avail_in===0)break;if(de=E.strm,pe=E.window,ee=E.strstart+E.lookahead,we=N,Ee=void 0,Ee=de.avail_in,we<Ee&&(Ee=we),J=Ee===0?0:(de.avail_in-=Ee,l.arraySet(pe,de.input,de.next_in,Ee,ee),de.state.wrap===1?de.adler=f(de.adler,pe,Ee,ee):de.state.wrap===2&&(de.adler=p(de.adler,pe,Ee,ee)),de.next_in+=Ee,de.total_in+=Ee,Ee),E.lookahead+=J,E.lookahead+E.insert>=G)for(K=E.strstart-E.insert,E.ins_h=E.window[K],E.ins_h=(E.ins_h<<E.hash_shift^E.window[K+1])&E.hash_mask;E.insert&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[K+G-1])&E.hash_mask,E.prev[K&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=K,K++,E.insert--,!(E.lookahead+E.insert<G)););}while(E.lookahead<oe&&E.strm.avail_in!==0)}function Ue(E,se){for(var J,F;;){if(E.lookahead<oe){if(Ce(E),E.lookahead<oe&&se===g)return x;if(E.lookahead===0)break}if(J=0,E.lookahead>=G&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+G-1])&E.hash_mask,J=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),J!==0&&E.strstart-J<=E.w_size-oe&&(E.match_length=le(E,J)),E.match_length>=G)if(F=c._tr_tally(E,E.strstart-E.match_start,E.match_length-G),E.lookahead-=E.match_length,E.match_length<=E.max_lazy_match&&E.lookahead>=G){for(E.match_length--;E.strstart++,E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+G-1])&E.hash_mask,J=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart,--E.match_length!=0;);E.strstart++}else E.strstart+=E.match_length,E.match_length=0,E.ins_h=E.window[E.strstart],E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+1])&E.hash_mask;else F=c._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++;if(F&&(P(E,!1),E.strm.avail_out===0))return x}return E.insert=E.strstart<G-1?E.strstart:G-1,se===w?(P(E,!0),E.strm.avail_out===0?ge:ie):E.last_lit&&(P(E,!1),E.strm.avail_out===0)?x:V}function Ie(E,se){for(var J,F,N;;){if(E.lookahead<oe){if(Ce(E),E.lookahead<oe&&se===g)return x;if(E.lookahead===0)break}if(J=0,E.lookahead>=G&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+G-1])&E.hash_mask,J=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),E.prev_length=E.match_length,E.prev_match=E.match_start,E.match_length=G-1,J!==0&&E.prev_length<E.max_lazy_match&&E.strstart-J<=E.w_size-oe&&(E.match_length=le(E,J),E.match_length<=5&&(E.strategy===1||E.match_length===G&&4096<E.strstart-E.match_start)&&(E.match_length=G-1)),E.prev_length>=G&&E.match_length<=E.prev_length){for(N=E.strstart+E.lookahead-G,F=c._tr_tally(E,E.strstart-1-E.prev_match,E.prev_length-G),E.lookahead-=E.prev_length-1,E.prev_length-=2;++E.strstart<=N&&(E.ins_h=(E.ins_h<<E.hash_shift^E.window[E.strstart+G-1])&E.hash_mask,J=E.prev[E.strstart&E.w_mask]=E.head[E.ins_h],E.head[E.ins_h]=E.strstart),--E.prev_length!=0;);if(E.match_available=0,E.match_length=G-1,E.strstart++,F&&(P(E,!1),E.strm.avail_out===0))return x}else if(E.match_available){if((F=c._tr_tally(E,0,E.window[E.strstart-1]))&&P(E,!1),E.strstart++,E.lookahead--,E.strm.avail_out===0)return x}else E.match_available=1,E.strstart++,E.lookahead--}return E.match_available&&(F=c._tr_tally(E,0,E.window[E.strstart-1]),E.match_available=0),E.insert=E.strstart<G-1?E.strstart:G-1,se===w?(P(E,!0),E.strm.avail_out===0?ge:ie):E.last_lit&&(P(E,!1),E.strm.avail_out===0)?x:V}function Pe(E,se,J,F,N){this.good_length=E,this.max_lazy=se,this.nice_length=J,this.max_chain=F,this.func=N}function Ye(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=C,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*$),this.dyn_dtree=new l.Buf16(2*(2*B+1)),this.bl_tree=new l.Buf16(2*(2*R+1)),L(this.dyn_ltree),L(this.dyn_dtree),L(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(Q+1),this.heap=new l.Buf16(2*D+1),L(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*D+1),L(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function an(E){var se;return E&&E.state?(E.total_in=E.total_out=0,E.data_type=k,(se=E.state).pending=0,se.pending_out=0,se.wrap<0&&(se.wrap=-se.wrap),se.status=se.wrap?O:Y,E.adler=se.wrap===2?0:1,se.last_flush=g,c._tr_init(se),m):ne(E,v)}function Fn(E){var se=an(E);return se===m&&(function(J){J.window_size=2*J.w_size,L(J.head),J.max_lazy_match=u[J.level].max_lazy,J.good_match=u[J.level].good_length,J.nice_match=u[J.level].nice_length,J.max_chain_length=u[J.level].max_chain,J.strstart=0,J.block_start=0,J.lookahead=0,J.insert=0,J.match_length=J.prev_length=G-1,J.match_available=0,J.ins_h=0})(E.state),se}function In(E,se,J,F,N,K){if(!E)return v;var de=1;if(se===S&&(se=6),F<0?(de=0,F=-F):15<F&&(de=2,F-=16),N<1||I<N||J!==C||F<8||15<F||se<0||9<se||K<0||_<K)return ne(E,v);F===8&&(F=9);var pe=new Ye;return(E.state=pe).strm=E,pe.wrap=de,pe.gzhead=null,pe.w_bits=F,pe.w_size=1<<pe.w_bits,pe.w_mask=pe.w_size-1,pe.hash_bits=N+7,pe.hash_size=1<<pe.hash_bits,pe.hash_mask=pe.hash_size-1,pe.hash_shift=~~((pe.hash_bits+G-1)/G),pe.window=new l.Buf8(2*pe.w_size),pe.head=new l.Buf16(pe.hash_size),pe.prev=new l.Buf16(pe.w_size),pe.lit_bufsize=1<<N+6,pe.pending_buf_size=4*pe.lit_bufsize,pe.pending_buf=new l.Buf8(pe.pending_buf_size),pe.d_buf=1*pe.lit_bufsize,pe.l_buf=3*pe.lit_bufsize,pe.level=se,pe.strategy=K,pe.method=J,Fn(E)}u=[new Pe(0,0,0,0,function(E,se){var J=65535;for(J>E.pending_buf_size-5&&(J=E.pending_buf_size-5);;){if(E.lookahead<=1){if(Ce(E),E.lookahead===0&&se===g)return x;if(E.lookahead===0)break}E.strstart+=E.lookahead,E.lookahead=0;var F=E.block_start+J;if((E.strstart===0||E.strstart>=F)&&(E.lookahead=E.strstart-F,E.strstart=F,P(E,!1),E.strm.avail_out===0)||E.strstart-E.block_start>=E.w_size-oe&&(P(E,!1),E.strm.avail_out===0))return x}return E.insert=0,se===w?(P(E,!0),E.strm.avail_out===0?ge:ie):(E.strstart>E.block_start&&(P(E,!1),E.strm.avail_out),x)}),new Pe(4,4,8,4,Ue),new Pe(4,5,16,8,Ue),new Pe(4,6,32,32,Ue),new Pe(4,4,16,16,Ie),new Pe(8,16,32,32,Ie),new Pe(8,16,128,128,Ie),new Pe(8,32,128,256,Ie),new Pe(32,128,258,1024,Ie),new Pe(32,258,258,4096,Ie)],s.deflateInit=function(E,se){return In(E,se,C,15,8,0)},s.deflateInit2=In,s.deflateReset=Fn,s.deflateResetKeep=an,s.deflateSetHeader=function(E,se){return E&&E.state?E.state.wrap!==2?v:(E.state.gzhead=se,m):v},s.deflate=function(E,se){var J,F,N,K;if(!E||!E.state||5<se||se<0)return E?ne(E,v):v;if(F=E.state,!E.output||!E.input&&E.avail_in!==0||F.status===666&&se!==w)return ne(E,E.avail_out===0?-5:v);if(F.strm=E,J=F.last_flush,F.last_flush=se,F.status===O)if(F.wrap===2)E.adler=0,M(F,31),M(F,139),M(F,8),F.gzhead?(M(F,(F.gzhead.text?1:0)+(F.gzhead.hcrc?2:0)+(F.gzhead.extra?4:0)+(F.gzhead.name?8:0)+(F.gzhead.comment?16:0)),M(F,255&F.gzhead.time),M(F,F.gzhead.time>>8&255),M(F,F.gzhead.time>>16&255),M(F,F.gzhead.time>>24&255),M(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),M(F,255&F.gzhead.os),F.gzhead.extra&&F.gzhead.extra.length&&(M(F,255&F.gzhead.extra.length),M(F,F.gzhead.extra.length>>8&255)),F.gzhead.hcrc&&(E.adler=p(E.adler,F.pending_buf,F.pending,0)),F.gzindex=0,F.status=69):(M(F,0),M(F,0),M(F,0),M(F,0),M(F,0),M(F,F.level===9?2:2<=F.strategy||F.level<2?4:0),M(F,3),F.status=Y);else{var de=C+(F.w_bits-8<<4)<<8;de|=(2<=F.strategy||F.level<2?0:F.level<6?1:F.level===6?2:3)<<6,F.strstart!==0&&(de|=32),de+=31-de%31,F.status=Y,ue(F,de),F.strstart!==0&&(ue(F,E.adler>>>16),ue(F,65535&E.adler)),E.adler=1}if(F.status===69)if(F.gzhead.extra){for(N=F.pending;F.gzindex<(65535&F.gzhead.extra.length)&&(F.pending!==F.pending_buf_size||(F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),A(E),N=F.pending,F.pending!==F.pending_buf_size));)M(F,255&F.gzhead.extra[F.gzindex]),F.gzindex++;F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),F.gzindex===F.gzhead.extra.length&&(F.gzindex=0,F.status=73)}else F.status=73;if(F.status===73)if(F.gzhead.name){N=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),A(E),N=F.pending,F.pending===F.pending_buf_size)){K=1;break}K=F.gzindex<F.gzhead.name.length?255&F.gzhead.name.charCodeAt(F.gzindex++):0,M(F,K)}while(K!==0);F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),K===0&&(F.gzindex=0,F.status=91)}else F.status=91;if(F.status===91)if(F.gzhead.comment){N=F.pending;do{if(F.pending===F.pending_buf_size&&(F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),A(E),N=F.pending,F.pending===F.pending_buf_size)){K=1;break}K=F.gzindex<F.gzhead.comment.length?255&F.gzhead.comment.charCodeAt(F.gzindex++):0,M(F,K)}while(K!==0);F.gzhead.hcrc&&F.pending>N&&(E.adler=p(E.adler,F.pending_buf,F.pending-N,N)),K===0&&(F.status=103)}else F.status=103;if(F.status===103&&(F.gzhead.hcrc?(F.pending+2>F.pending_buf_size&&A(E),F.pending+2<=F.pending_buf_size&&(M(F,255&E.adler),M(F,E.adler>>8&255),E.adler=0,F.status=Y)):F.status=Y),F.pending!==0){if(A(E),E.avail_out===0)return F.last_flush=-1,m}else if(E.avail_in===0&&Z(se)<=Z(J)&&se!==w)return ne(E,-5);if(F.status===666&&E.avail_in!==0)return ne(E,-5);if(E.avail_in!==0||F.lookahead!==0||se!==g&&F.status!==666){var pe=F.strategy===2?(function(ee,we){for(var Ee;;){if(ee.lookahead===0&&(Ce(ee),ee.lookahead===0)){if(we===g)return x;break}if(ee.match_length=0,Ee=c._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++,Ee&&(P(ee,!1),ee.strm.avail_out===0))return x}return ee.insert=0,we===w?(P(ee,!0),ee.strm.avail_out===0?ge:ie):ee.last_lit&&(P(ee,!1),ee.strm.avail_out===0)?x:V})(F,se):F.strategy===3?(function(ee,we){for(var Ee,be,q,fe,_e=ee.window;;){if(ee.lookahead<=U){if(Ce(ee),ee.lookahead<=U&&we===g)return x;if(ee.lookahead===0)break}if(ee.match_length=0,ee.lookahead>=G&&0<ee.strstart&&(be=_e[q=ee.strstart-1])===_e[++q]&&be===_e[++q]&&be===_e[++q]){fe=ee.strstart+U;do;while(be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&be===_e[++q]&&q<fe);ee.match_length=U-(fe-q),ee.match_length>ee.lookahead&&(ee.match_length=ee.lookahead)}if(ee.match_length>=G?(Ee=c._tr_tally(ee,1,ee.match_length-G),ee.lookahead-=ee.match_length,ee.strstart+=ee.match_length,ee.match_length=0):(Ee=c._tr_tally(ee,0,ee.window[ee.strstart]),ee.lookahead--,ee.strstart++),Ee&&(P(ee,!1),ee.strm.avail_out===0))return x}return ee.insert=0,we===w?(P(ee,!0),ee.strm.avail_out===0?ge:ie):ee.last_lit&&(P(ee,!1),ee.strm.avail_out===0)?x:V})(F,se):u[F.level].func(F,se);if(pe!==ge&&pe!==ie||(F.status=666),pe===x||pe===ge)return E.avail_out===0&&(F.last_flush=-1),m;if(pe===V&&(se===1?c._tr_align(F):se!==5&&(c._tr_stored_block(F,0,0,!1),se===3&&(L(F.head),F.lookahead===0&&(F.strstart=0,F.block_start=0,F.insert=0))),A(E),E.avail_out===0))return F.last_flush=-1,m}return se!==w?m:F.wrap<=0?1:(F.wrap===2?(M(F,255&E.adler),M(F,E.adler>>8&255),M(F,E.adler>>16&255),M(F,E.adler>>24&255),M(F,255&E.total_in),M(F,E.total_in>>8&255),M(F,E.total_in>>16&255),M(F,E.total_in>>24&255)):(ue(F,E.adler>>>16),ue(F,65535&E.adler)),A(E),0<F.wrap&&(F.wrap=-F.wrap),F.pending!==0?m:1)},s.deflateEnd=function(E){var se;return E&&E.state?(se=E.state.status)!==O&&se!==69&&se!==73&&se!==91&&se!==103&&se!==Y&&se!==666?ne(E,v):(E.state=null,se===Y?ne(E,-3):m):v},s.deflateSetDictionary=function(E,se){var J,F,N,K,de,pe,ee,we,Ee=se.length;if(!E||!E.state||(K=(J=E.state).wrap)===2||K===1&&J.status!==O||J.lookahead)return v;for(K===1&&(E.adler=f(E.adler,se,Ee,0)),J.wrap=0,Ee>=J.w_size&&(K===0&&(L(J.head),J.strstart=0,J.block_start=0,J.insert=0),we=new l.Buf8(J.w_size),l.arraySet(we,se,Ee-J.w_size,J.w_size,0),se=we,Ee=J.w_size),de=E.avail_in,pe=E.next_in,ee=E.input,E.avail_in=Ee,E.next_in=0,E.input=se,Ce(J);J.lookahead>=G;){for(F=J.strstart,N=J.lookahead-(G-1);J.ins_h=(J.ins_h<<J.hash_shift^J.window[F+G-1])&J.hash_mask,J.prev[F&J.w_mask]=J.head[J.ins_h],J.head[J.ins_h]=F,F++,--N;);J.strstart=F,J.lookahead=G-1,Ce(J)}return J.strstart+=J.lookahead,J.block_start=J.strstart,J.insert=J.lookahead,J.lookahead=0,J.match_length=J.prev_length=G-1,J.match_available=0,E.next_in=pe,E.input=ee,E.avail_in=de,J.wrap=K,m},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,a,s){a.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,a,s){a.exports=function(u,l){var c,f,p,h,g,w,m,v,S,_,k,C,I,D,B,R,$,Q,G,U,oe,O,Y,x,V;c=u.state,f=u.next_in,x=u.input,p=f+(u.avail_in-5),h=u.next_out,V=u.output,g=h-(l-u.avail_out),w=h+(u.avail_out-257),m=c.dmax,v=c.wsize,S=c.whave,_=c.wnext,k=c.window,C=c.hold,I=c.bits,D=c.lencode,B=c.distcode,R=(1<<c.lenbits)-1,$=(1<<c.distbits)-1;e:do{I<15&&(C+=x[f++]<<I,I+=8,C+=x[f++]<<I,I+=8),Q=D[C&R];n:for(;;){if(C>>>=G=Q>>>24,I-=G,(G=Q>>>16&255)===0)V[h++]=65535&Q;else{if(!(16&G)){if((64&G)==0){Q=D[(65535&Q)+(C&(1<<G)-1)];continue n}if(32&G){c.mode=12;break e}u.msg="invalid literal/length code",c.mode=30;break e}U=65535&Q,(G&=15)&&(I<G&&(C+=x[f++]<<I,I+=8),U+=C&(1<<G)-1,C>>>=G,I-=G),I<15&&(C+=x[f++]<<I,I+=8,C+=x[f++]<<I,I+=8),Q=B[C&$];t:for(;;){if(C>>>=G=Q>>>24,I-=G,!(16&(G=Q>>>16&255))){if((64&G)==0){Q=B[(65535&Q)+(C&(1<<G)-1)];continue t}u.msg="invalid distance code",c.mode=30;break e}if(oe=65535&Q,I<(G&=15)&&(C+=x[f++]<<I,(I+=8)<G&&(C+=x[f++]<<I,I+=8)),m<(oe+=C&(1<<G)-1)){u.msg="invalid distance too far back",c.mode=30;break e}if(C>>>=G,I-=G,(G=h-g)<oe){if(S<(G=oe-G)&&c.sane){u.msg="invalid distance too far back",c.mode=30;break e}if(Y=k,(O=0)===_){if(O+=v-G,G<U){for(U-=G;V[h++]=k[O++],--G;);O=h-oe,Y=V}}else if(_<G){if(O+=v+_-G,(G-=_)<U){for(U-=G;V[h++]=k[O++],--G;);if(O=0,_<U){for(U-=G=_;V[h++]=k[O++],--G;);O=h-oe,Y=V}}}else if(O+=_-G,G<U){for(U-=G;V[h++]=k[O++],--G;);O=h-oe,Y=V}for(;2<U;)V[h++]=Y[O++],V[h++]=Y[O++],V[h++]=Y[O++],U-=3;U&&(V[h++]=Y[O++],1<U&&(V[h++]=Y[O++]))}else{for(O=h-oe;V[h++]=V[O++],V[h++]=V[O++],V[h++]=V[O++],2<(U-=3););U&&(V[h++]=V[O++],1<U&&(V[h++]=V[O++]))}break}}break}}while(f<p&&h<w);f-=U=I>>3,C&=(1<<(I-=U<<3))-1,u.next_in=f,u.next_out=h,u.avail_in=f<p?p-f+5:5-(f-p),u.avail_out=h<w?w-h+257:257-(h-w),c.hold=C,c.bits=I}},{}],49:[function(r,a,s){var u=r("../utils/common"),l=r("./adler32"),c=r("./crc32"),f=r("./inffast"),p=r("./inftrees"),h=1,g=2,w=0,m=-2,v=1,S=852,_=592;function k(O){return(O>>>24&255)+(O>>>8&65280)+((65280&O)<<8)+((255&O)<<24)}function C(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function I(O){var Y;return O&&O.state?(Y=O.state,O.total_in=O.total_out=Y.total=0,O.msg="",Y.wrap&&(O.adler=1&Y.wrap),Y.mode=v,Y.last=0,Y.havedict=0,Y.dmax=32768,Y.head=null,Y.hold=0,Y.bits=0,Y.lencode=Y.lendyn=new u.Buf32(S),Y.distcode=Y.distdyn=new u.Buf32(_),Y.sane=1,Y.back=-1,w):m}function D(O){var Y;return O&&O.state?((Y=O.state).wsize=0,Y.whave=0,Y.wnext=0,I(O)):m}function B(O,Y){var x,V;return O&&O.state?(V=O.state,Y<0?(x=0,Y=-Y):(x=1+(Y>>4),Y<48&&(Y&=15)),Y&&(Y<8||15<Y)?m:(V.window!==null&&V.wbits!==Y&&(V.window=null),V.wrap=x,V.wbits=Y,D(O))):m}function R(O,Y){var x,V;return O?(V=new C,(O.state=V).window=null,(x=B(O,Y))!==w&&(O.state=null),x):m}var $,Q,G=!0;function U(O){if(G){var Y;for($=new u.Buf32(512),Q=new u.Buf32(32),Y=0;Y<144;)O.lens[Y++]=8;for(;Y<256;)O.lens[Y++]=9;for(;Y<280;)O.lens[Y++]=7;for(;Y<288;)O.lens[Y++]=8;for(p(h,O.lens,0,288,$,0,O.work,{bits:9}),Y=0;Y<32;)O.lens[Y++]=5;p(g,O.lens,0,32,Q,0,O.work,{bits:5}),G=!1}O.lencode=$,O.lenbits=9,O.distcode=Q,O.distbits=5}function oe(O,Y,x,V){var ge,ie=O.state;return ie.window===null&&(ie.wsize=1<<ie.wbits,ie.wnext=0,ie.whave=0,ie.window=new u.Buf8(ie.wsize)),V>=ie.wsize?(u.arraySet(ie.window,Y,x-ie.wsize,ie.wsize,0),ie.wnext=0,ie.whave=ie.wsize):(V<(ge=ie.wsize-ie.wnext)&&(ge=V),u.arraySet(ie.window,Y,x-V,ge,ie.wnext),(V-=ge)?(u.arraySet(ie.window,Y,x-V,V,0),ie.wnext=V,ie.whave=ie.wsize):(ie.wnext+=ge,ie.wnext===ie.wsize&&(ie.wnext=0),ie.whave<ie.wsize&&(ie.whave+=ge))),0}s.inflateReset=D,s.inflateReset2=B,s.inflateResetKeep=I,s.inflateInit=function(O){return R(O,15)},s.inflateInit2=R,s.inflate=function(O,Y){var x,V,ge,ie,ne,Z,L,A,P,M,ue,le,Ce,Ue,Ie,Pe,Ye,an,Fn,In,E,se,J,F,N=0,K=new u.Buf8(4),de=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!O||!O.state||!O.output||!O.input&&O.avail_in!==0)return m;(x=O.state).mode===12&&(x.mode=13),ne=O.next_out,ge=O.output,L=O.avail_out,ie=O.next_in,V=O.input,Z=O.avail_in,A=x.hold,P=x.bits,M=Z,ue=L,se=w;e:for(;;)switch(x.mode){case v:if(x.wrap===0){x.mode=13;break}for(;P<16;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(2&x.wrap&&A===35615){K[x.check=0]=255&A,K[1]=A>>>8&255,x.check=c(x.check,K,2,0),P=A=0,x.mode=2;break}if(x.flags=0,x.head&&(x.head.done=!1),!(1&x.wrap)||(((255&A)<<8)+(A>>8))%31){O.msg="incorrect header check",x.mode=30;break}if((15&A)!=8){O.msg="unknown compression method",x.mode=30;break}if(P-=4,E=8+(15&(A>>>=4)),x.wbits===0)x.wbits=E;else if(E>x.wbits){O.msg="invalid window size",x.mode=30;break}x.dmax=1<<E,O.adler=x.check=1,x.mode=512&A?10:12,P=A=0;break;case 2:for(;P<16;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(x.flags=A,(255&x.flags)!=8){O.msg="unknown compression method",x.mode=30;break}if(57344&x.flags){O.msg="unknown header flags set",x.mode=30;break}x.head&&(x.head.text=A>>8&1),512&x.flags&&(K[0]=255&A,K[1]=A>>>8&255,x.check=c(x.check,K,2,0)),P=A=0,x.mode=3;case 3:for(;P<32;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.head&&(x.head.time=A),512&x.flags&&(K[0]=255&A,K[1]=A>>>8&255,K[2]=A>>>16&255,K[3]=A>>>24&255,x.check=c(x.check,K,4,0)),P=A=0,x.mode=4;case 4:for(;P<16;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.head&&(x.head.xflags=255&A,x.head.os=A>>8),512&x.flags&&(K[0]=255&A,K[1]=A>>>8&255,x.check=c(x.check,K,2,0)),P=A=0,x.mode=5;case 5:if(1024&x.flags){for(;P<16;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.length=A,x.head&&(x.head.extra_len=A),512&x.flags&&(K[0]=255&A,K[1]=A>>>8&255,x.check=c(x.check,K,2,0)),P=A=0}else x.head&&(x.head.extra=null);x.mode=6;case 6:if(1024&x.flags&&(Z<(le=x.length)&&(le=Z),le&&(x.head&&(E=x.head.extra_len-x.length,x.head.extra||(x.head.extra=new Array(x.head.extra_len)),u.arraySet(x.head.extra,V,ie,le,E)),512&x.flags&&(x.check=c(x.check,V,le,ie)),Z-=le,ie+=le,x.length-=le),x.length))break e;x.length=0,x.mode=7;case 7:if(2048&x.flags){if(Z===0)break e;for(le=0;E=V[ie+le++],x.head&&E&&x.length<65536&&(x.head.name+=String.fromCharCode(E)),E&&le<Z;);if(512&x.flags&&(x.check=c(x.check,V,le,ie)),Z-=le,ie+=le,E)break e}else x.head&&(x.head.name=null);x.length=0,x.mode=8;case 8:if(4096&x.flags){if(Z===0)break e;for(le=0;E=V[ie+le++],x.head&&E&&x.length<65536&&(x.head.comment+=String.fromCharCode(E)),E&&le<Z;);if(512&x.flags&&(x.check=c(x.check,V,le,ie)),Z-=le,ie+=le,E)break e}else x.head&&(x.head.comment=null);x.mode=9;case 9:if(512&x.flags){for(;P<16;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(A!==(65535&x.check)){O.msg="header crc mismatch",x.mode=30;break}P=A=0}x.head&&(x.head.hcrc=x.flags>>9&1,x.head.done=!0),O.adler=x.check=0,x.mode=12;break;case 10:for(;P<32;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}O.adler=x.check=k(A),P=A=0,x.mode=11;case 11:if(x.havedict===0)return O.next_out=ne,O.avail_out=L,O.next_in=ie,O.avail_in=Z,x.hold=A,x.bits=P,2;O.adler=x.check=1,x.mode=12;case 12:if(Y===5||Y===6)break e;case 13:if(x.last){A>>>=7&P,P-=7&P,x.mode=27;break}for(;P<3;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}switch(x.last=1&A,P-=1,3&(A>>>=1)){case 0:x.mode=14;break;case 1:if(U(x),x.mode=20,Y!==6)break;A>>>=2,P-=2;break e;case 2:x.mode=17;break;case 3:O.msg="invalid block type",x.mode=30}A>>>=2,P-=2;break;case 14:for(A>>>=7&P,P-=7&P;P<32;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if((65535&A)!=(A>>>16^65535)){O.msg="invalid stored block lengths",x.mode=30;break}if(x.length=65535&A,P=A=0,x.mode=15,Y===6)break e;case 15:x.mode=16;case 16:if(le=x.length){if(Z<le&&(le=Z),L<le&&(le=L),le===0)break e;u.arraySet(ge,V,ie,le,ne),Z-=le,ie+=le,L-=le,ne+=le,x.length-=le;break}x.mode=12;break;case 17:for(;P<14;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(x.nlen=257+(31&A),A>>>=5,P-=5,x.ndist=1+(31&A),A>>>=5,P-=5,x.ncode=4+(15&A),A>>>=4,P-=4,286<x.nlen||30<x.ndist){O.msg="too many length or distance symbols",x.mode=30;break}x.have=0,x.mode=18;case 18:for(;x.have<x.ncode;){for(;P<3;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.lens[de[x.have++]]=7&A,A>>>=3,P-=3}for(;x.have<19;)x.lens[de[x.have++]]=0;if(x.lencode=x.lendyn,x.lenbits=7,J={bits:x.lenbits},se=p(0,x.lens,0,19,x.lencode,0,x.work,J),x.lenbits=J.bits,se){O.msg="invalid code lengths set",x.mode=30;break}x.have=0,x.mode=19;case 19:for(;x.have<x.nlen+x.ndist;){for(;Pe=(N=x.lencode[A&(1<<x.lenbits)-1])>>>16&255,Ye=65535&N,!((Ie=N>>>24)<=P);){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(Ye<16)A>>>=Ie,P-=Ie,x.lens[x.have++]=Ye;else{if(Ye===16){for(F=Ie+2;P<F;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(A>>>=Ie,P-=Ie,x.have===0){O.msg="invalid bit length repeat",x.mode=30;break}E=x.lens[x.have-1],le=3+(3&A),A>>>=2,P-=2}else if(Ye===17){for(F=Ie+3;P<F;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}P-=Ie,E=0,le=3+(7&(A>>>=Ie)),A>>>=3,P-=3}else{for(F=Ie+7;P<F;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}P-=Ie,E=0,le=11+(127&(A>>>=Ie)),A>>>=7,P-=7}if(x.have+le>x.nlen+x.ndist){O.msg="invalid bit length repeat",x.mode=30;break}for(;le--;)x.lens[x.have++]=E}}if(x.mode===30)break;if(x.lens[256]===0){O.msg="invalid code -- missing end-of-block",x.mode=30;break}if(x.lenbits=9,J={bits:x.lenbits},se=p(h,x.lens,0,x.nlen,x.lencode,0,x.work,J),x.lenbits=J.bits,se){O.msg="invalid literal/lengths set",x.mode=30;break}if(x.distbits=6,x.distcode=x.distdyn,J={bits:x.distbits},se=p(g,x.lens,x.nlen,x.ndist,x.distcode,0,x.work,J),x.distbits=J.bits,se){O.msg="invalid distances set",x.mode=30;break}if(x.mode=20,Y===6)break e;case 20:x.mode=21;case 21:if(6<=Z&&258<=L){O.next_out=ne,O.avail_out=L,O.next_in=ie,O.avail_in=Z,x.hold=A,x.bits=P,f(O,ue),ne=O.next_out,ge=O.output,L=O.avail_out,ie=O.next_in,V=O.input,Z=O.avail_in,A=x.hold,P=x.bits,x.mode===12&&(x.back=-1);break}for(x.back=0;Pe=(N=x.lencode[A&(1<<x.lenbits)-1])>>>16&255,Ye=65535&N,!((Ie=N>>>24)<=P);){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(Pe&&(240&Pe)==0){for(an=Ie,Fn=Pe,In=Ye;Pe=(N=x.lencode[In+((A&(1<<an+Fn)-1)>>an)])>>>16&255,Ye=65535&N,!(an+(Ie=N>>>24)<=P);){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}A>>>=an,P-=an,x.back+=an}if(A>>>=Ie,P-=Ie,x.back+=Ie,x.length=Ye,Pe===0){x.mode=26;break}if(32&Pe){x.back=-1,x.mode=12;break}if(64&Pe){O.msg="invalid literal/length code",x.mode=30;break}x.extra=15&Pe,x.mode=22;case 22:if(x.extra){for(F=x.extra;P<F;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.length+=A&(1<<x.extra)-1,A>>>=x.extra,P-=x.extra,x.back+=x.extra}x.was=x.length,x.mode=23;case 23:for(;Pe=(N=x.distcode[A&(1<<x.distbits)-1])>>>16&255,Ye=65535&N,!((Ie=N>>>24)<=P);){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if((240&Pe)==0){for(an=Ie,Fn=Pe,In=Ye;Pe=(N=x.distcode[In+((A&(1<<an+Fn)-1)>>an)])>>>16&255,Ye=65535&N,!(an+(Ie=N>>>24)<=P);){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}A>>>=an,P-=an,x.back+=an}if(A>>>=Ie,P-=Ie,x.back+=Ie,64&Pe){O.msg="invalid distance code",x.mode=30;break}x.offset=Ye,x.extra=15&Pe,x.mode=24;case 24:if(x.extra){for(F=x.extra;P<F;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}x.offset+=A&(1<<x.extra)-1,A>>>=x.extra,P-=x.extra,x.back+=x.extra}if(x.offset>x.dmax){O.msg="invalid distance too far back",x.mode=30;break}x.mode=25;case 25:if(L===0)break e;if(le=ue-L,x.offset>le){if((le=x.offset-le)>x.whave&&x.sane){O.msg="invalid distance too far back",x.mode=30;break}Ce=le>x.wnext?(le-=x.wnext,x.wsize-le):x.wnext-le,le>x.length&&(le=x.length),Ue=x.window}else Ue=ge,Ce=ne-x.offset,le=x.length;for(L<le&&(le=L),L-=le,x.length-=le;ge[ne++]=Ue[Ce++],--le;);x.length===0&&(x.mode=21);break;case 26:if(L===0)break e;ge[ne++]=x.length,L--,x.mode=21;break;case 27:if(x.wrap){for(;P<32;){if(Z===0)break e;Z--,A|=V[ie++]<<P,P+=8}if(ue-=L,O.total_out+=ue,x.total+=ue,ue&&(O.adler=x.check=x.flags?c(x.check,ge,ue,ne-ue):l(x.check,ge,ue,ne-ue)),ue=L,(x.flags?A:k(A))!==x.check){O.msg="incorrect data check",x.mode=30;break}P=A=0}x.mode=28;case 28:if(x.wrap&&x.flags){for(;P<32;){if(Z===0)break e;Z--,A+=V[ie++]<<P,P+=8}if(A!==(4294967295&x.total)){O.msg="incorrect length check",x.mode=30;break}P=A=0}x.mode=29;case 29:se=1;break e;case 30:se=-3;break e;case 31:return-4;case 32:default:return m}return O.next_out=ne,O.avail_out=L,O.next_in=ie,O.avail_in=Z,x.hold=A,x.bits=P,(x.wsize||ue!==O.avail_out&&x.mode<30&&(x.mode<27||Y!==4))&&oe(O,O.output,O.next_out,ue-O.avail_out)?(x.mode=31,-4):(M-=O.avail_in,ue-=O.avail_out,O.total_in+=M,O.total_out+=ue,x.total+=ue,x.wrap&&ue&&(O.adler=x.check=x.flags?c(x.check,ge,ue,O.next_out-ue):l(x.check,ge,ue,O.next_out-ue)),O.data_type=x.bits+(x.last?64:0)+(x.mode===12?128:0)+(x.mode===20||x.mode===15?256:0),(M==0&&ue===0||Y===4)&&se===w&&(se=-5),se)},s.inflateEnd=function(O){if(!O||!O.state)return m;var Y=O.state;return Y.window&&(Y.window=null),O.state=null,w},s.inflateGetHeader=function(O,Y){var x;return O&&O.state?(2&(x=O.state).wrap)==0?m:((x.head=Y).done=!1,w):m},s.inflateSetDictionary=function(O,Y){var x,V=Y.length;return O&&O.state?(x=O.state).wrap!==0&&x.mode!==11?m:x.mode===11&&l(1,Y,V,0)!==x.check?-3:oe(O,Y,V,V)?(x.mode=31,-4):(x.havedict=1,w):m},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,a,s){var u=r("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],f=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],p=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];a.exports=function(h,g,w,m,v,S,_,k){var C,I,D,B,R,$,Q,G,U,oe=k.bits,O=0,Y=0,x=0,V=0,ge=0,ie=0,ne=0,Z=0,L=0,A=0,P=null,M=0,ue=new u.Buf16(16),le=new u.Buf16(16),Ce=null,Ue=0;for(O=0;O<=15;O++)ue[O]=0;for(Y=0;Y<m;Y++)ue[g[w+Y]]++;for(ge=oe,V=15;1<=V&&ue[V]===0;V--);if(V<ge&&(ge=V),V===0)return v[S++]=20971520,v[S++]=20971520,k.bits=1,0;for(x=1;x<V&&ue[x]===0;x++);for(ge<x&&(ge=x),O=Z=1;O<=15;O++)if(Z<<=1,(Z-=ue[O])<0)return-1;if(0<Z&&(h===0||V!==1))return-1;for(le[1]=0,O=1;O<15;O++)le[O+1]=le[O]+ue[O];for(Y=0;Y<m;Y++)g[w+Y]!==0&&(_[le[g[w+Y]]++]=Y);if($=h===0?(P=Ce=_,19):h===1?(P=l,M-=257,Ce=c,Ue-=257,256):(P=f,Ce=p,-1),O=x,R=S,ne=Y=A=0,D=-1,B=(L=1<<(ie=ge))-1,h===1&&852<L||h===2&&592<L)return 1;for(;;){for(Q=O-ne,U=_[Y]<$?(G=0,_[Y]):_[Y]>$?(G=Ce[Ue+_[Y]],P[M+_[Y]]):(G=96,0),C=1<<O-ne,x=I=1<<ie;v[R+(A>>ne)+(I-=C)]=Q<<24|G<<16|U|0,I!==0;);for(C=1<<O-1;A&C;)C>>=1;if(C!==0?(A&=C-1,A+=C):A=0,Y++,--ue[O]==0){if(O===V)break;O=g[w+_[Y]]}if(ge<O&&(A&B)!==D){for(ne===0&&(ne=ge),R+=x,Z=1<<(ie=O-ne);ie+ne<V&&!((Z-=ue[ie+ne])<=0);)ie++,Z<<=1;if(L+=1<<ie,h===1&&852<L||h===2&&592<L)return 1;v[D=A&B]=ge<<24|ie<<16|R-S|0}}return A!==0&&(v[R+A]=O-ne<<24|64<<16|0),k.bits=ge,0}},{"../utils/common":41}],51:[function(r,a,s){a.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,a,s){var u=r("../utils/common"),l=0,c=1;function f(N){for(var K=N.length;0<=--K;)N[K]=0}var p=0,h=29,g=256,w=g+1+h,m=30,v=19,S=2*w+1,_=15,k=16,C=7,I=256,D=16,B=17,R=18,$=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Q=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],oe=new Array(2*(w+2));f(oe);var O=new Array(2*m);f(O);var Y=new Array(512);f(Y);var x=new Array(256);f(x);var V=new Array(h);f(V);var ge,ie,ne,Z=new Array(m);function L(N,K,de,pe,ee){this.static_tree=N,this.extra_bits=K,this.extra_base=de,this.elems=pe,this.max_length=ee,this.has_stree=N&&N.length}function A(N,K){this.dyn_tree=N,this.max_code=0,this.stat_desc=K}function P(N){return N<256?Y[N]:Y[256+(N>>>7)]}function M(N,K){N.pending_buf[N.pending++]=255&K,N.pending_buf[N.pending++]=K>>>8&255}function ue(N,K,de){N.bi_valid>k-de?(N.bi_buf|=K<<N.bi_valid&65535,M(N,N.bi_buf),N.bi_buf=K>>k-N.bi_valid,N.bi_valid+=de-k):(N.bi_buf|=K<<N.bi_valid&65535,N.bi_valid+=de)}function le(N,K,de){ue(N,de[2*K],de[2*K+1])}function Ce(N,K){for(var de=0;de|=1&N,N>>>=1,de<<=1,0<--K;);return de>>>1}function Ue(N,K,de){var pe,ee,we=new Array(_+1),Ee=0;for(pe=1;pe<=_;pe++)we[pe]=Ee=Ee+de[pe-1]<<1;for(ee=0;ee<=K;ee++){var be=N[2*ee+1];be!==0&&(N[2*ee]=Ce(we[be]++,be))}}function Ie(N){var K;for(K=0;K<w;K++)N.dyn_ltree[2*K]=0;for(K=0;K<m;K++)N.dyn_dtree[2*K]=0;for(K=0;K<v;K++)N.bl_tree[2*K]=0;N.dyn_ltree[2*I]=1,N.opt_len=N.static_len=0,N.last_lit=N.matches=0}function Pe(N){8<N.bi_valid?M(N,N.bi_buf):0<N.bi_valid&&(N.pending_buf[N.pending++]=N.bi_buf),N.bi_buf=0,N.bi_valid=0}function Ye(N,K,de,pe){var ee=2*K,we=2*de;return N[ee]<N[we]||N[ee]===N[we]&&pe[K]<=pe[de]}function an(N,K,de){for(var pe=N.heap[de],ee=de<<1;ee<=N.heap_len&&(ee<N.heap_len&&Ye(K,N.heap[ee+1],N.heap[ee],N.depth)&&ee++,!Ye(K,pe,N.heap[ee],N.depth));)N.heap[de]=N.heap[ee],de=ee,ee<<=1;N.heap[de]=pe}function Fn(N,K,de){var pe,ee,we,Ee,be=0;if(N.last_lit!==0)for(;pe=N.pending_buf[N.d_buf+2*be]<<8|N.pending_buf[N.d_buf+2*be+1],ee=N.pending_buf[N.l_buf+be],be++,pe===0?le(N,ee,K):(le(N,(we=x[ee])+g+1,K),(Ee=$[we])!==0&&ue(N,ee-=V[we],Ee),le(N,we=P(--pe),de),(Ee=Q[we])!==0&&ue(N,pe-=Z[we],Ee)),be<N.last_lit;);le(N,I,K)}function In(N,K){var de,pe,ee,we=K.dyn_tree,Ee=K.stat_desc.static_tree,be=K.stat_desc.has_stree,q=K.stat_desc.elems,fe=-1;for(N.heap_len=0,N.heap_max=S,de=0;de<q;de++)we[2*de]!==0?(N.heap[++N.heap_len]=fe=de,N.depth[de]=0):we[2*de+1]=0;for(;N.heap_len<2;)we[2*(ee=N.heap[++N.heap_len]=fe<2?++fe:0)]=1,N.depth[ee]=0,N.opt_len--,be&&(N.static_len-=Ee[2*ee+1]);for(K.max_code=fe,de=N.heap_len>>1;1<=de;de--)an(N,we,de);for(ee=q;de=N.heap[1],N.heap[1]=N.heap[N.heap_len--],an(N,we,1),pe=N.heap[1],N.heap[--N.heap_max]=de,N.heap[--N.heap_max]=pe,we[2*ee]=we[2*de]+we[2*pe],N.depth[ee]=(N.depth[de]>=N.depth[pe]?N.depth[de]:N.depth[pe])+1,we[2*de+1]=we[2*pe+1]=ee,N.heap[1]=ee++,an(N,we,1),2<=N.heap_len;);N.heap[--N.heap_max]=N.heap[1],(function(_e,je){var Ze,dn,Gn,rn,Yn,bt,fn=je.dyn_tree,tt=je.max_code,zn=je.stat_desc.static_tree,cr=je.stat_desc.has_stree,dr=je.stat_desc.extra_bits,Pt=je.stat_desc.extra_base,rt=je.stat_desc.max_length,ct=0;for(rn=0;rn<=_;rn++)_e.bl_count[rn]=0;for(fn[2*_e.heap[_e.heap_max]+1]=0,Ze=_e.heap_max+1;Ze<S;Ze++)rt<(rn=fn[2*fn[2*(dn=_e.heap[Ze])+1]+1]+1)&&(rn=rt,ct++),fn[2*dn+1]=rn,tt<dn||(_e.bl_count[rn]++,Yn=0,Pt<=dn&&(Yn=dr[dn-Pt]),bt=fn[2*dn],_e.opt_len+=bt*(rn+Yn),cr&&(_e.static_len+=bt*(zn[2*dn+1]+Yn)));if(ct!==0){do{for(rn=rt-1;_e.bl_count[rn]===0;)rn--;_e.bl_count[rn]--,_e.bl_count[rn+1]+=2,_e.bl_count[rt]--,ct-=2}while(0<ct);for(rn=rt;rn!==0;rn--)for(dn=_e.bl_count[rn];dn!==0;)tt<(Gn=_e.heap[--Ze])||(fn[2*Gn+1]!==rn&&(_e.opt_len+=(rn-fn[2*Gn+1])*fn[2*Gn],fn[2*Gn+1]=rn),dn--)}})(N,K),Ue(we,fe,N.bl_count)}function E(N,K,de){var pe,ee,we=-1,Ee=K[1],be=0,q=7,fe=4;for(Ee===0&&(q=138,fe=3),K[2*(de+1)+1]=65535,pe=0;pe<=de;pe++)ee=Ee,Ee=K[2*(pe+1)+1],++be<q&&ee===Ee||(be<fe?N.bl_tree[2*ee]+=be:ee!==0?(ee!==we&&N.bl_tree[2*ee]++,N.bl_tree[2*D]++):be<=10?N.bl_tree[2*B]++:N.bl_tree[2*R]++,we=ee,fe=(be=0)===Ee?(q=138,3):ee===Ee?(q=6,3):(q=7,4))}function se(N,K,de){var pe,ee,we=-1,Ee=K[1],be=0,q=7,fe=4;for(Ee===0&&(q=138,fe=3),pe=0;pe<=de;pe++)if(ee=Ee,Ee=K[2*(pe+1)+1],!(++be<q&&ee===Ee)){if(be<fe)for(;le(N,ee,N.bl_tree),--be!=0;);else ee!==0?(ee!==we&&(le(N,ee,N.bl_tree),be--),le(N,D,N.bl_tree),ue(N,be-3,2)):be<=10?(le(N,B,N.bl_tree),ue(N,be-3,3)):(le(N,R,N.bl_tree),ue(N,be-11,7));we=ee,fe=(be=0)===Ee?(q=138,3):ee===Ee?(q=6,3):(q=7,4)}}f(Z);var J=!1;function F(N,K,de,pe){ue(N,(p<<1)+(pe?1:0),3),(function(ee,we,Ee,be){Pe(ee),M(ee,Ee),M(ee,~Ee),u.arraySet(ee.pending_buf,ee.window,we,Ee,ee.pending),ee.pending+=Ee})(N,K,de)}s._tr_init=function(N){J||((function(){var K,de,pe,ee,we,Ee=new Array(_+1);for(ee=pe=0;ee<h-1;ee++)for(V[ee]=pe,K=0;K<1<<$[ee];K++)x[pe++]=ee;for(x[pe-1]=ee,ee=we=0;ee<16;ee++)for(Z[ee]=we,K=0;K<1<<Q[ee];K++)Y[we++]=ee;for(we>>=7;ee<m;ee++)for(Z[ee]=we<<7,K=0;K<1<<Q[ee]-7;K++)Y[256+we++]=ee;for(de=0;de<=_;de++)Ee[de]=0;for(K=0;K<=143;)oe[2*K+1]=8,K++,Ee[8]++;for(;K<=255;)oe[2*K+1]=9,K++,Ee[9]++;for(;K<=279;)oe[2*K+1]=7,K++,Ee[7]++;for(;K<=287;)oe[2*K+1]=8,K++,Ee[8]++;for(Ue(oe,w+1,Ee),K=0;K<m;K++)O[2*K+1]=5,O[2*K]=Ce(K,5);ge=new L(oe,$,g+1,w,_),ie=new L(O,Q,0,m,_),ne=new L(new Array(0),G,0,v,C)})(),J=!0),N.l_desc=new A(N.dyn_ltree,ge),N.d_desc=new A(N.dyn_dtree,ie),N.bl_desc=new A(N.bl_tree,ne),N.bi_buf=0,N.bi_valid=0,Ie(N)},s._tr_stored_block=F,s._tr_flush_block=function(N,K,de,pe){var ee,we,Ee=0;0<N.level?(N.strm.data_type===2&&(N.strm.data_type=(function(be){var q,fe=4093624447;for(q=0;q<=31;q++,fe>>>=1)if(1&fe&&be.dyn_ltree[2*q]!==0)return l;if(be.dyn_ltree[18]!==0||be.dyn_ltree[20]!==0||be.dyn_ltree[26]!==0)return c;for(q=32;q<g;q++)if(be.dyn_ltree[2*q]!==0)return c;return l})(N)),In(N,N.l_desc),In(N,N.d_desc),Ee=(function(be){var q;for(E(be,be.dyn_ltree,be.l_desc.max_code),E(be,be.dyn_dtree,be.d_desc.max_code),In(be,be.bl_desc),q=v-1;3<=q&&be.bl_tree[2*U[q]+1]===0;q--);return be.opt_len+=3*(q+1)+5+5+4,q})(N),ee=N.opt_len+3+7>>>3,(we=N.static_len+3+7>>>3)<=ee&&(ee=we)):ee=we=de+5,de+4<=ee&&K!==-1?F(N,K,de,pe):N.strategy===4||we===ee?(ue(N,2+(pe?1:0),3),Fn(N,oe,O)):(ue(N,4+(pe?1:0),3),(function(be,q,fe,_e){var je;for(ue(be,q-257,5),ue(be,fe-1,5),ue(be,_e-4,4),je=0;je<_e;je++)ue(be,be.bl_tree[2*U[je]+1],3);se(be,be.dyn_ltree,q-1),se(be,be.dyn_dtree,fe-1)})(N,N.l_desc.max_code+1,N.d_desc.max_code+1,Ee+1),Fn(N,N.dyn_ltree,N.dyn_dtree)),Ie(N),pe&&Pe(N)},s._tr_tally=function(N,K,de){return N.pending_buf[N.d_buf+2*N.last_lit]=K>>>8&255,N.pending_buf[N.d_buf+2*N.last_lit+1]=255&K,N.pending_buf[N.l_buf+N.last_lit]=255&de,N.last_lit++,K===0?N.dyn_ltree[2*de]++:(N.matches++,K--,N.dyn_ltree[2*(x[de]+g+1)]++,N.dyn_dtree[2*P(K)]++),N.last_lit===N.lit_bufsize-1},s._tr_align=function(N){ue(N,2,3),le(N,I,oe),(function(K){K.bi_valid===16?(M(K,K.bi_buf),K.bi_buf=0,K.bi_valid=0):8<=K.bi_valid&&(K.pending_buf[K.pending++]=255&K.bi_buf,K.bi_buf>>=8,K.bi_valid-=8)})(N)}},{"../utils/common":41}],53:[function(r,a,s){a.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,a,s){(function(u){(function(l,c){if(!l.setImmediate){var f,p,h,g,w=1,m={},v=!1,S=l.document,_=Object.getPrototypeOf&&Object.getPrototypeOf(l);_=_&&_.setTimeout?_:l,f={}.toString.call(l.process)==="[object process]"?function(D){process.nextTick(function(){C(D)})}:(function(){if(l.postMessage&&!l.importScripts){var D=!0,B=l.onmessage;return l.onmessage=function(){D=!1},l.postMessage("","*"),l.onmessage=B,D}})()?(g="setImmediate$"+Math.random()+"$",l.addEventListener?l.addEventListener("message",I,!1):l.attachEvent("onmessage",I),function(D){l.postMessage(g+D,"*")}):l.MessageChannel?((h=new MessageChannel).port1.onmessage=function(D){C(D.data)},function(D){h.port2.postMessage(D)}):S&&"onreadystatechange"in S.createElement("script")?(p=S.documentElement,function(D){var B=S.createElement("script");B.onreadystatechange=function(){C(D),B.onreadystatechange=null,p.removeChild(B),B=null},p.appendChild(B)}):function(D){setTimeout(C,0,D)},_.setImmediate=function(D){typeof D!="function"&&(D=new Function(""+D));for(var B=new Array(arguments.length-1),R=0;R<B.length;R++)B[R]=arguments[R+1];var $={callback:D,args:B};return m[w]=$,f(w),w++},_.clearImmediate=k}function k(D){delete m[D]}function C(D){if(v)setTimeout(C,0,D);else{var B=m[D];if(B){v=!0;try{(function(R){var $=R.callback,Q=R.args;switch(Q.length){case 0:$();break;case 1:$(Q[0]);break;case 2:$(Q[0],Q[1]);break;case 3:$(Q[0],Q[1],Q[2]);break;default:$.apply(c,Q)}})(B)}finally{k(D),v=!1}}}}function I(D){D.source===l&&typeof D.data=="string"&&D.data.indexOf(g)===0&&C(+D.data.slice(g.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(pu)),pu.exports}var g0=p0();const h0=Fa(g0);var ul={exports:{}},m0=ul.exports,mp;function y0(){return mp||(mp=1,(function(e,i){(function(r,a){a()})(m0,function(){function r(p,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p}function a(p,h,g){var w=new XMLHttpRequest;w.open("GET",p),w.responseType="blob",w.onload=function(){f(w.response,h,g)},w.onerror=function(){console.error("could not download file")},w.send()}function s(p){var h=new XMLHttpRequest;h.open("HEAD",p,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function u(p){try{p.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),p.dispatchEvent(h)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Rr=="object"&&Rr.global===Rr?Rr:void 0,c=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(p,h,g){var w=l.URL||l.webkitURL,m=document.createElement("a");h=h||p.name||"download",m.download=h,m.rel="noopener",typeof p=="string"?(m.href=p,m.origin===location.origin?u(m):s(m.href)?a(p,h,g):u(m,m.target="_blank")):(m.href=w.createObjectURL(p),setTimeout(function(){w.revokeObjectURL(m.href)},4e4),setTimeout(function(){u(m)},0))}:"msSaveOrOpenBlob"in navigator?function(p,h,g){if(h=h||p.name||"download",typeof p!="string")navigator.msSaveOrOpenBlob(r(p,g),h);else if(s(p))a(p,h,g);else{var w=document.createElement("a");w.href=p,w.target="_blank",setTimeout(function(){u(w)})}}:function(p,h,g,w){if(w=w||open("","_blank"),w&&(w.document.title=w.document.body.innerText="downloading..."),typeof p=="string")return a(p,h,g);var m=p.type==="application/octet-stream",v=/constructor/i.test(l.HTMLElement)||l.safari,S=/CriOS\/[\d]+/.test(navigator.userAgent);if((S||m&&v||c)&&typeof FileReader<"u"){var _=new FileReader;_.onloadend=function(){var I=_.result;I=S?I:I.replace(/^data:[^;]*;/,"data:attachment/file;"),w?w.location.href=I:location=I,w=null},_.readAsDataURL(p)}else{var k=l.URL||l.webkitURL,C=k.createObjectURL(p);w?w.location=C:location.href=C,w=null,setTimeout(function(){k.revokeObjectURL(C)},4e4)}});l.saveAs=f.saveAs=f,e.exports=f})})(ul)),ul.exports}var w0=y0();function b0(e,i){const r={};return(e[e.length-1]===""?[...e,""]:e).join((r.padRight?" ":"")+","+(r.padLeft===!1?"":" ")).trim()}const S0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,k0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,v0={};function yp(e,i){return(v0.jsx?k0:S0).test(e)}const _0=/[ \t\n\f\r]/g;function x0(e){return typeof e=="object"?e.type==="text"?wp(e.value):!1:wp(e)}function wp(e){return e.replace(_0,"")===""}class Ua{constructor(i,r,a){this.normal=r,this.property=i,a&&(this.space=a)}}Ua.prototype.normal={};Ua.prototype.property={};Ua.prototype.space=void 0;function Kg(e,i){const r={},a={};for(const s of e)Object.assign(r,s.property),Object.assign(a,s.normal);return new Ua(r,a,i)}function Ku(e){return e.toLowerCase()}class wt{constructor(i,r){this.attribute=r,this.property=i}}wt.prototype.attribute="";wt.prototype.booleanish=!1;wt.prototype.boolean=!1;wt.prototype.commaOrSpaceSeparated=!1;wt.prototype.commaSeparated=!1;wt.prototype.defined=!1;wt.prototype.mustUseProperty=!1;wt.prototype.number=!1;wt.prototype.overloadedBoolean=!1;wt.prototype.property="";wt.prototype.spaceSeparated=!1;wt.prototype.space=void 0;let E0=0;const Xe=li(),Dn=li(),qu=li(),Se=li(),wn=li(),zi=li(),xt=li();function li(){return 2**++E0}const Yu=Object.freeze(Object.defineProperty({__proto__:null,boolean:Xe,booleanish:Dn,commaOrSpaceSeparated:xt,commaSeparated:zi,number:Se,overloadedBoolean:qu,spaceSeparated:wn},Symbol.toStringTag,{value:"Module"})),gu=Object.keys(Yu);class uc extends wt{constructor(i,r,a,s){let u=-1;if(super(i,r),bp(this,"space",s),typeof a=="number")for(;++u<gu.length;){const l=gu[u];bp(this,gu[u],(a&Yu[l])===Yu[l])}}}uc.prototype.defined=!0;function bp(e,i,r){r&&(e[i]=r)}function ji(e){const i={},r={};for(const[a,s]of Object.entries(e.properties)){const u=new uc(a,e.transform(e.attributes||{},a),s,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(u.mustUseProperty=!0),i[a]=u,r[Ku(a)]=a,r[Ku(u.attribute)]=a}return new Ua(i,r,e.space)}const qg=ji({properties:{ariaActiveDescendant:null,ariaAtomic:Dn,ariaAutoComplete:null,ariaBusy:Dn,ariaChecked:Dn,ariaColCount:Se,ariaColIndex:Se,ariaColSpan:Se,ariaControls:wn,ariaCurrent:null,ariaDescribedBy:wn,ariaDetails:null,ariaDisabled:Dn,ariaDropEffect:wn,ariaErrorMessage:null,ariaExpanded:Dn,ariaFlowTo:wn,ariaGrabbed:Dn,ariaHasPopup:null,ariaHidden:Dn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:wn,ariaLevel:Se,ariaLive:null,ariaModal:Dn,ariaMultiLine:Dn,ariaMultiSelectable:Dn,ariaOrientation:null,ariaOwns:wn,ariaPlaceholder:null,ariaPosInSet:Se,ariaPressed:Dn,ariaReadOnly:Dn,ariaRelevant:null,ariaRequired:Dn,ariaRoleDescription:wn,ariaRowCount:Se,ariaRowIndex:Se,ariaRowSpan:Se,ariaSelected:Dn,ariaSetSize:Se,ariaSort:null,ariaValueMax:Se,ariaValueMin:Se,ariaValueNow:Se,ariaValueText:null,role:null},transform(e,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function Yg(e,i){return i in e?e[i]:i}function Jg(e,i){return Yg(e,i.toLowerCase())}const T0=ji({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:zi,acceptCharset:wn,accessKey:wn,action:null,allow:null,allowFullScreen:Xe,allowPaymentRequest:Xe,allowUserMedia:Xe,alt:null,as:null,async:Xe,autoCapitalize:null,autoComplete:wn,autoFocus:Xe,autoPlay:Xe,blocking:wn,capture:null,charSet:null,checked:Xe,cite:null,className:wn,cols:Se,colSpan:null,content:null,contentEditable:Dn,controls:Xe,controlsList:wn,coords:Se|zi,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Xe,defer:Xe,dir:null,dirName:null,disabled:Xe,download:qu,draggable:Dn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Xe,formTarget:null,headers:wn,height:Se,hidden:qu,high:Se,href:null,hrefLang:null,htmlFor:wn,httpEquiv:wn,id:null,imageSizes:null,imageSrcSet:null,inert:Xe,inputMode:null,integrity:null,is:null,isMap:Xe,itemId:null,itemProp:wn,itemRef:wn,itemScope:Xe,itemType:wn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Xe,low:Se,manifest:null,max:null,maxLength:Se,media:null,method:null,min:null,minLength:Se,multiple:Xe,muted:Xe,name:null,nonce:null,noModule:Xe,noValidate:Xe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Xe,optimum:Se,pattern:null,ping:wn,placeholder:null,playsInline:Xe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Xe,referrerPolicy:null,rel:wn,required:Xe,reversed:Xe,rows:Se,rowSpan:Se,sandbox:wn,scope:null,scoped:Xe,seamless:Xe,selected:Xe,shadowRootClonable:Xe,shadowRootDelegatesFocus:Xe,shadowRootMode:null,shape:null,size:Se,sizes:null,slot:null,span:Se,spellCheck:Dn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Se,step:null,style:null,tabIndex:Se,target:null,title:null,translate:null,type:null,typeMustMatch:Xe,useMap:null,value:Dn,width:Se,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:wn,axis:null,background:null,bgColor:null,border:Se,borderColor:null,bottomMargin:Se,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Xe,declare:Xe,event:null,face:null,frame:null,frameBorder:null,hSpace:Se,leftMargin:Se,link:null,longDesc:null,lowSrc:null,marginHeight:Se,marginWidth:Se,noResize:Xe,noHref:Xe,noShade:Xe,noWrap:Xe,object:null,profile:null,prompt:null,rev:null,rightMargin:Se,rules:null,scheme:null,scrolling:Dn,standby:null,summary:null,text:null,topMargin:Se,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Se,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Xe,disableRemotePlayback:Xe,prefix:null,property:null,results:Se,security:null,unselectable:null},space:"html",transform:Jg}),C0=ji({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:xt,accentHeight:Se,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Se,amplitude:Se,arabicForm:null,ascent:Se,attributeName:null,attributeType:null,azimuth:Se,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Se,by:null,calcMode:null,capHeight:Se,className:wn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Se,diffuseConstant:Se,direction:null,display:null,dur:null,divisor:Se,dominantBaseline:null,download:Xe,dx:null,dy:null,edgeMode:null,editable:null,elevation:Se,enableBackground:null,end:null,event:null,exponent:Se,externalResourcesRequired:null,fill:null,fillOpacity:Se,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:zi,g2:zi,glyphName:zi,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Se,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Se,horizOriginX:Se,horizOriginY:Se,id:null,ideographic:Se,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Se,k:Se,k1:Se,k2:Se,k3:Se,k4:Se,kernelMatrix:xt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Se,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Se,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Se,overlineThickness:Se,paintOrder:null,panose1:null,path:null,pathLength:Se,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:wn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Se,pointsAtY:Se,pointsAtZ:Se,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:xt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:xt,rev:xt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:xt,requiredFeatures:xt,requiredFonts:xt,requiredFormats:xt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Se,specularExponent:Se,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Se,strikethroughThickness:Se,string:null,stroke:null,strokeDashArray:xt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Se,strokeOpacity:Se,strokeWidth:null,style:null,surfaceScale:Se,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:xt,tabIndex:Se,tableValues:null,target:null,targetX:Se,targetY:Se,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:xt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Se,underlineThickness:Se,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Se,values:null,vAlphabetic:Se,vMathematical:Se,vectorEffect:null,vHanging:Se,vIdeographic:Se,version:null,vertAdvY:Se,vertOriginX:Se,vertOriginY:Se,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Se,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Yg}),Zg=ji({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,i){return"xlink:"+i.slice(5).toLowerCase()}}),Xg=ji({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Jg}),Qg=ji({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,i){return"xml:"+i.slice(3).toLowerCase()}}),I0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},A0=/[A-Z]/g,Sp=/-[a-z]/g,L0=/^data[-\w.:]+$/i;function M0(e,i){const r=Ku(i);let a=i,s=wt;if(r in e.normal)return e.property[e.normal[r]];if(r.length>4&&r.slice(0,4)==="data"&&L0.test(i)){if(i.charAt(4)==="-"){const u=i.slice(5).replace(Sp,N0);a="data"+u.charAt(0).toUpperCase()+u.slice(1)}else{const u=i.slice(4);if(!Sp.test(u)){let l=u.replace(A0,O0);l.charAt(0)!=="-"&&(l="-"+l),i="data"+l}}s=uc}return new s(a,i)}function O0(e){return"-"+e.toLowerCase()}function N0(e){return e.charAt(1).toUpperCase()}const R0=Kg([qg,T0,Zg,Xg,Qg],"html"),cc=Kg([qg,C0,Zg,Xg,Qg],"svg");function P0(e){return e.join(" ").trim()}var Ri={},hu,kp;function D0(){if(kp)return hu;kp=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,r=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,s=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,c=/^\s+|\s+$/g,f=`
`,p="/",h="*",g="",w="comment",m="declaration";function v(_,k){if(typeof _!="string")throw new TypeError("First argument must be a string");if(!_)return[];k=k||{};var C=1,I=1;function D(x){var V=x.match(i);V&&(C+=V.length);var ge=x.lastIndexOf(f);I=~ge?x.length-ge:I+x.length}function B(){var x={line:C,column:I};return function(V){return V.position=new R(x),G(),V}}function R(x){this.start=x,this.end={line:C,column:I},this.source=k.source}R.prototype.content=_;function $(x){var V=new Error(k.source+":"+C+":"+I+": "+x);if(V.reason=x,V.filename=k.source,V.line=C,V.column=I,V.source=_,!k.silent)throw V}function Q(x){var V=x.exec(_);if(V){var ge=V[0];return D(ge),_=_.slice(ge.length),V}}function G(){Q(r)}function U(x){var V;for(x=x||[];V=oe();)V!==!1&&x.push(V);return x}function oe(){var x=B();if(!(p!=_.charAt(0)||h!=_.charAt(1))){for(var V=2;g!=_.charAt(V)&&(h!=_.charAt(V)||p!=_.charAt(V+1));)++V;if(V+=2,g===_.charAt(V-1))return $("End of comment missing");var ge=_.slice(2,V-2);return I+=2,D(ge),_=_.slice(V),I+=2,x({type:w,comment:ge})}}function O(){var x=B(),V=Q(a);if(V){if(oe(),!Q(s))return $("property missing ':'");var ge=Q(u),ie=x({type:m,property:S(V[0].replace(e,g)),value:ge?S(ge[0].replace(e,g)):g});return Q(l),ie}}function Y(){var x=[];U(x);for(var V;V=O();)V!==!1&&(x.push(V),U(x));return x}return G(),Y()}function S(_){return _?_.replace(c,g):g}return hu=v,hu}var vp;function B0(){if(vp)return Ri;vp=1;var e=Ri&&Ri.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ri,"__esModule",{value:!0}),Ri.default=r;const i=e(D0());function r(a,s){let u=null;if(!a||typeof a!="string")return u;const l=(0,i.default)(a),c=typeof s=="function";return l.forEach(f=>{if(f.type!=="declaration")return;const{property:p,value:h}=f;c?s(p,h,f):h&&(u=u||{},u[p]=h)}),u}return Ri}var Ea={},_p;function F0(){if(_p)return Ea;_p=1,Object.defineProperty(Ea,"__esModule",{value:!0}),Ea.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,r=/^[^-]+$/,a=/^-(webkit|moz|ms|o|khtml)-/,s=/^-(ms)-/,u=function(p){return!p||r.test(p)||e.test(p)},l=function(p,h){return h.toUpperCase()},c=function(p,h){return"".concat(h,"-")},f=function(p,h){return h===void 0&&(h={}),u(p)?p:(p=p.toLowerCase(),h.reactCompat?p=p.replace(s,c):p=p.replace(a,c),p.replace(i,l))};return Ea.camelCase=f,Ea}var Ta,xp;function z0(){if(xp)return Ta;xp=1;var e=Ta&&Ta.__importDefault||function(s){return s&&s.__esModule?s:{default:s}},i=e(B0()),r=F0();function a(s,u){var l={};return!s||typeof s!="string"||(0,i.default)(s,function(c,f){c&&f&&(l[(0,r.camelCase)(c,u)]=f)}),l}return a.default=a,Ta=a,Ta}var U0=z0();const j0=Fa(U0),eh=nh("end"),dc=nh("start");function nh(e){return i;function i(r){const a=r&&r.position&&r.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function V0(e){const i=dc(e),r=eh(e);if(i&&r)return{start:i,end:r}}function Ma(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ep(e.position):"start"in e||"end"in e?Ep(e):"line"in e||"column"in e?Ju(e):""}function Ju(e){return Tp(e&&e.line)+":"+Tp(e&&e.column)}function Ep(e){return Ju(e&&e.start)+"-"+Ju(e&&e.end)}function Tp(e){return e&&typeof e=="number"?e:1}class nt extends Error{constructor(i,r,a){super(),typeof r=="string"&&(a=r,r=void 0);let s="",u={},l=!1;if(r&&("line"in r&&"column"in r?u={place:r}:"start"in r&&"end"in r?u={place:r}:"type"in r?u={ancestors:[r],place:r.position}:u={...r}),typeof i=="string"?s=i:!u.cause&&i&&(l=!0,s=i.message,u.cause=i),!u.ruleId&&!u.source&&typeof a=="string"){const f=a.indexOf(":");f===-1?u.ruleId=a:(u.source=a.slice(0,f),u.ruleId=a.slice(f+1))}if(!u.place&&u.ancestors&&u.ancestors){const f=u.ancestors[u.ancestors.length-1];f&&(u.place=f.position)}const c=u.place&&"start"in u.place?u.place.start:u.place;this.ancestors=u.ancestors||void 0,this.cause=u.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file="",this.message=s,this.line=c?c.line:void 0,this.name=Ma(u.place)||"1:1",this.place=u.place||void 0,this.reason=this.message,this.ruleId=u.ruleId||void 0,this.source=u.source||void 0,this.stack=l&&u.cause&&typeof u.cause.stack=="string"?u.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}nt.prototype.file="";nt.prototype.name="";nt.prototype.reason="";nt.prototype.message="";nt.prototype.stack="";nt.prototype.column=void 0;nt.prototype.line=void 0;nt.prototype.ancestors=void 0;nt.prototype.cause=void 0;nt.prototype.fatal=void 0;nt.prototype.place=void 0;nt.prototype.ruleId=void 0;nt.prototype.source=void 0;const fc={}.hasOwnProperty,W0=new Map,H0=/[A-Z]/g,$0=new Set(["table","tbody","thead","tfoot","tr"]),G0=new Set(["td","th"]),th="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function K0(e,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=i.filePath||void 0;let a;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=nS(r,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=eS(r,i.jsx,i.jsxs)}const s={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:a,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?cc:R0,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},u=rh(s,e,void 0);return u&&typeof u!="string"?u:s.create(e,s.Fragment,{children:u||void 0},void 0)}function rh(e,i,r){if(i.type==="element")return q0(e,i,r);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return Y0(e,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return Z0(e,i,r);if(i.type==="mdxjsEsm")return J0(e,i);if(i.type==="root")return X0(e,i,r);if(i.type==="text")return Q0(e,i)}function q0(e,i,r){const a=e.schema;let s=a;i.tagName.toLowerCase()==="svg"&&a.space==="html"&&(s=cc,e.schema=s),e.ancestors.push(i);const u=ah(e,i.tagName,!1),l=tS(e,i);let c=gc(e,i);return $0.has(i.tagName)&&(c=c.filter(function(f){return typeof f=="string"?!x0(f):!0})),ih(e,l,u,i),pc(l,c),e.ancestors.pop(),e.schema=a,e.create(i,u,l,r)}function Y0(e,i){if(i.data&&i.data.estree&&e.evaluater){const a=i.data.estree.body[0];return a.type,e.evaluater.evaluateExpression(a.expression)}Da(e,i.position)}function J0(e,i){if(i.data&&i.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(i.data.estree);Da(e,i.position)}function Z0(e,i,r){const a=e.schema;let s=a;i.name==="svg"&&a.space==="html"&&(s=cc,e.schema=s),e.ancestors.push(i);const u=i.name===null?e.Fragment:ah(e,i.name,!0),l=rS(e,i),c=gc(e,i);return ih(e,l,u,i),pc(l,c),e.ancestors.pop(),e.schema=a,e.create(i,u,l,r)}function X0(e,i,r){const a={};return pc(a,gc(e,i)),e.create(i,e.Fragment,a,r)}function Q0(e,i){return i.value}function ih(e,i,r,a){typeof r!="string"&&r!==e.Fragment&&e.passNode&&(i.node=a)}function pc(e,i){if(i.length>0){const r=i.length>1?i:i[0];r&&(e.children=r)}}function eS(e,i,r){return a;function a(s,u,l,c){const p=Array.isArray(l.children)?r:i;return c?p(u,l,c):p(u,l)}}function nS(e,i){return r;function r(a,s,u,l){const c=Array.isArray(u.children),f=dc(a);return i(s,u,l,c,{columnNumber:f?f.column-1:void 0,fileName:e,lineNumber:f?f.line:void 0},void 0)}}function tS(e,i){const r={};let a,s;for(s in i.properties)if(s!=="children"&&fc.call(i.properties,s)){const u=iS(e,s,i.properties[s]);if(u){const[l,c]=u;e.tableCellAlignToStyle&&l==="align"&&typeof c=="string"&&G0.has(i.tagName)?a=c:r[l]=c}}if(a){const u=r.style||(r.style={});u[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return r}function rS(e,i){const r={};for(const a of i.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const u=a.data.estree.body[0];u.type;const l=u.expression;l.type;const c=l.properties[0];c.type,Object.assign(r,e.evaluater.evaluateExpression(c.argument))}else Da(e,i.position);else{const s=a.name;let u;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const c=a.value.data.estree.body[0];c.type,u=e.evaluater.evaluateExpression(c.expression)}else Da(e,i.position);else u=a.value===null?!0:a.value;r[s]=u}return r}function gc(e,i){const r=[];let a=-1;const s=e.passKeys?new Map:W0;for(;++a<i.children.length;){const u=i.children[a];let l;if(e.passKeys){const f=u.type==="element"?u.tagName:u.type==="mdxJsxFlowElement"||u.type==="mdxJsxTextElement"?u.name:void 0;if(f){const p=s.get(f)||0;l=f+"-"+p,s.set(f,p+1)}}const c=rh(e,u,l);c!==void 0&&r.push(c)}return r}function iS(e,i,r){const a=M0(e.schema,i);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=a.commaSeparated?b0(r):P0(r)),a.property==="style"){let s=typeof r=="object"?r:aS(e,String(r));return e.stylePropertyNameCase==="css"&&(s=oS(s)),["style",s]}return[e.elementAttributeNameCase==="react"&&a.space?I0[a.property]||a.property:a.attribute,r]}}function aS(e,i){try{return j0(i,{reactCompat:!0})}catch(r){if(e.ignoreInvalidStyle)return{};const a=r,s=new nt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=e.filePath||void 0,s.url=th+"#cannot-parse-style-attribute",s}}function ah(e,i,r){let a;if(!r)a={type:"Literal",value:i};else if(i.includes(".")){const s=i.split(".");let u=-1,l;for(;++u<s.length;){const c=yp(s[u])?{type:"Identifier",name:s[u]}:{type:"Literal",value:s[u]};l=l?{type:"MemberExpression",object:l,property:c,computed:!!(u&&c.type==="Literal"),optional:!1}:c}a=l}else a=yp(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(a.type==="Literal"){const s=a.value;return fc.call(e.components,s)?e.components[s]:s}if(e.evaluater)return e.evaluater.evaluateExpression(a);Da(e)}function Da(e,i){const r=new nt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=th+"#cannot-handle-mdx-estrees-without-createevaluater",r}function oS(e){const i={};let r;for(r in e)fc.call(e,r)&&(i[lS(r)]=e[r]);return i}function lS(e){let i=e.replace(H0,sS);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function sS(e){return"-"+e.toLowerCase()}const mu={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},uS={};function hc(e,i){const r=uS,a=typeof r.includeImageAlt=="boolean"?r.includeImageAlt:!0,s=typeof r.includeHtml=="boolean"?r.includeHtml:!0;return oh(e,a,s)}function oh(e,i,r){if(cS(e)){if("value"in e)return e.type==="html"&&!r?"":e.value;if(i&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Cp(e.children,i,r)}return Array.isArray(e)?Cp(e,i,r):""}function Cp(e,i,r){const a=[];let s=-1;for(;++s<e.length;)a[s]=oh(e[s],i,r);return a.join("")}function cS(e){return!!(e&&typeof e=="object")}const Ip=document.createElement("i");function mc(e){const i="&"+e+";";Ip.innerHTML=i;const r=Ip.textContent;return r.charCodeAt(r.length-1)===59&&e!=="semi"||r===i?!1:r}function Et(e,i,r,a){const s=e.length;let u=0,l;if(i<0?i=-i>s?0:s+i:i=i>s?s:i,r=r>0?r:0,a.length<1e4)l=Array.from(a),l.unshift(i,r),e.splice(...l);else for(r&&e.splice(i,r);u<a.length;)l=a.slice(u,u+1e4),l.unshift(i,0),e.splice(...l),u+=1e4,i+=1e4}function Rt(e,i){return e.length>0?(Et(e,e.length,0,i),e):i}const Ap={}.hasOwnProperty;function lh(e){const i={};let r=-1;for(;++r<e.length;)dS(i,e[r]);return i}function dS(e,i){let r;for(r in i){const s=(Ap.call(e,r)?e[r]:void 0)||(e[r]={}),u=i[r];let l;if(u)for(l in u){Ap.call(s,l)||(s[l]=[]);const c=u[l];fS(s[l],Array.isArray(c)?c:c?[c]:[])}}}function fS(e,i){let r=-1;const a=[];for(;++r<i.length;)(i[r].add==="after"?e:a).push(i[r]);Et(e,0,0,a)}function sh(e,i){const r=Number.parseInt(e,i);return r<9||r===11||r>13&&r<32||r>126&&r<160||r>55295&&r<57344||r>64975&&r<65008||(r&65535)===65535||(r&65535)===65534||r>1114111?"�":String.fromCodePoint(r)}function Wt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ut=Fr(/[A-Za-z]/),et=Fr(/[\dA-Za-z]/),pS=Fr(/[#-'*+\--9=?A-Z^-~]/);function pl(e){return e!==null&&(e<32||e===127)}const Zu=Fr(/\d/),gS=Fr(/[\dA-Fa-f]/),hS=Fr(/[!-/:-@[-`{-~]/);function $e(e){return e!==null&&e<-2}function hn(e){return e!==null&&(e<0||e===32)}function tn(e){return e===-2||e===-1||e===32}const vl=Fr(new RegExp("\\p{P}|\\p{S}","u")),ii=Fr(/\s/);function Fr(e){return i;function i(r){return r!==null&&r>-1&&e.test(String.fromCharCode(r))}}function Vi(e){const i=[];let r=-1,a=0,s=0;for(;++r<e.length;){const u=e.charCodeAt(r);let l="";if(u===37&&et(e.charCodeAt(r+1))&&et(e.charCodeAt(r+2)))s=2;else if(u<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u))||(l=String.fromCharCode(u));else if(u>55295&&u<57344){const c=e.charCodeAt(r+1);u<56320&&c>56319&&c<57344?(l=String.fromCharCode(u,c),s=1):l="�"}else l=String.fromCharCode(u);l&&(i.push(e.slice(a,r),encodeURIComponent(l)),a=r+s+1,l=""),s&&(r+=s,s=0)}return i.join("")+e.slice(a)}function ln(e,i,r,a){const s=a?a-1:Number.POSITIVE_INFINITY;let u=0;return l;function l(f){return tn(f)?(e.enter(r),c(f)):i(f)}function c(f){return tn(f)&&u++<s?(e.consume(f),c):(e.exit(r),i(f))}}const mS={tokenize:yS};function yS(e){const i=e.attempt(this.parser.constructs.contentInitial,a,s);let r;return i;function a(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),ln(e,i,"linePrefix")}function s(c){return e.enter("paragraph"),u(c)}function u(c){const f=e.enter("chunkText",{contentType:"text",previous:r});return r&&(r.next=f),r=f,l(c)}function l(c){if(c===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(c);return}return $e(c)?(e.consume(c),e.exit("chunkText"),u):(e.consume(c),l)}}const wS={tokenize:bS},Lp={tokenize:SS};function bS(e){const i=this,r=[];let a=0,s,u,l;return c;function c(I){if(a<r.length){const D=r[a];return i.containerState=D[1],e.attempt(D[0].continuation,f,p)(I)}return p(I)}function f(I){if(a++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,s&&C();const D=i.events.length;let B=D,R;for(;B--;)if(i.events[B][0]==="exit"&&i.events[B][1].type==="chunkFlow"){R=i.events[B][1].end;break}k(a);let $=D;for(;$<i.events.length;)i.events[$][1].end={...R},$++;return Et(i.events,B+1,0,i.events.slice(D)),i.events.length=$,p(I)}return c(I)}function p(I){if(a===r.length){if(!s)return w(I);if(s.currentConstruct&&s.currentConstruct.concrete)return v(I);i.interrupt=!!(s.currentConstruct&&!s._gfmTableDynamicInterruptHack)}return i.containerState={},e.check(Lp,h,g)(I)}function h(I){return s&&C(),k(a),w(I)}function g(I){return i.parser.lazy[i.now().line]=a!==r.length,l=i.now().offset,v(I)}function w(I){return i.containerState={},e.attempt(Lp,m,v)(I)}function m(I){return a++,r.push([i.currentConstruct,i.containerState]),w(I)}function v(I){if(I===null){s&&C(),k(0),e.consume(I);return}return s=s||i.parser.flow(i.now()),e.enter("chunkFlow",{_tokenizer:s,contentType:"flow",previous:u}),S(I)}function S(I){if(I===null){_(e.exit("chunkFlow"),!0),k(0),e.consume(I);return}return $e(I)?(e.consume(I),_(e.exit("chunkFlow")),a=0,i.interrupt=void 0,c):(e.consume(I),S)}function _(I,D){const B=i.sliceStream(I);if(D&&B.push(null),I.previous=u,u&&(u.next=I),u=I,s.defineSkip(I.start),s.write(B),i.parser.lazy[I.start.line]){let R=s.events.length;for(;R--;)if(s.events[R][1].start.offset<l&&(!s.events[R][1].end||s.events[R][1].end.offset>l))return;const $=i.events.length;let Q=$,G,U;for(;Q--;)if(i.events[Q][0]==="exit"&&i.events[Q][1].type==="chunkFlow"){if(G){U=i.events[Q][1].end;break}G=!0}for(k(a),R=$;R<i.events.length;)i.events[R][1].end={...U},R++;Et(i.events,Q+1,0,i.events.slice($)),i.events.length=R}}function k(I){let D=r.length;for(;D-- >I;){const B=r[D];i.containerState=B[1],B[0].exit.call(i,e)}r.length=I}function C(){s.write([null]),u=void 0,s=void 0,i.containerState._closeFlow=void 0}}function SS(e,i,r){return ln(e,e.attempt(this.parser.constructs.document,i,r),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Ui(e){if(e===null||hn(e)||ii(e))return 1;if(vl(e))return 2}function _l(e,i,r){const a=[];let s=-1;for(;++s<e.length;){const u=e[s].resolveAll;u&&!a.includes(u)&&(i=u(i,r),a.push(u))}return i}const Xu={name:"attention",resolveAll:kS,tokenize:vS};function kS(e,i){let r=-1,a,s,u,l,c,f,p,h;for(;++r<e.length;)if(e[r][0]==="enter"&&e[r][1].type==="attentionSequence"&&e[r][1]._close){for(a=r;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&i.sliceSerialize(e[a][1]).charCodeAt(0)===i.sliceSerialize(e[r][1]).charCodeAt(0)){if((e[a][1]._close||e[r][1]._open)&&(e[r][1].end.offset-e[r][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[r][1].end.offset-e[r][1].start.offset)%3))continue;f=e[a][1].end.offset-e[a][1].start.offset>1&&e[r][1].end.offset-e[r][1].start.offset>1?2:1;const g={...e[a][1].end},w={...e[r][1].start};Mp(g,-f),Mp(w,f),l={type:f>1?"strongSequence":"emphasisSequence",start:g,end:{...e[a][1].end}},c={type:f>1?"strongSequence":"emphasisSequence",start:{...e[r][1].start},end:w},u={type:f>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[r][1].start}},s={type:f>1?"strong":"emphasis",start:{...l.start},end:{...c.end}},e[a][1].end={...l.start},e[r][1].start={...c.end},p=[],e[a][1].end.offset-e[a][1].start.offset&&(p=Rt(p,[["enter",e[a][1],i],["exit",e[a][1],i]])),p=Rt(p,[["enter",s,i],["enter",l,i],["exit",l,i],["enter",u,i]]),p=Rt(p,_l(i.parser.constructs.insideSpan.null,e.slice(a+1,r),i)),p=Rt(p,[["exit",u,i],["enter",c,i],["exit",c,i],["exit",s,i]]),e[r][1].end.offset-e[r][1].start.offset?(h=2,p=Rt(p,[["enter",e[r][1],i],["exit",e[r][1],i]])):h=0,Et(e,a-1,r-a+3,p),r=a+p.length-h-2;break}}for(r=-1;++r<e.length;)e[r][1].type==="attentionSequence"&&(e[r][1].type="data");return e}function vS(e,i){const r=this.parser.constructs.attentionMarkers.null,a=this.previous,s=Ui(a);let u;return l;function l(f){return u=f,e.enter("attentionSequence"),c(f)}function c(f){if(f===u)return e.consume(f),c;const p=e.exit("attentionSequence"),h=Ui(f),g=!h||h===2&&s||r.includes(f),w=!s||s===2&&h||r.includes(a);return p._open=!!(u===42?g:g&&(s||!w)),p._close=!!(u===42?w:w&&(h||!g)),i(f)}}function Mp(e,i){e.column+=i,e.offset+=i,e._bufferIndex+=i}const _S={name:"autolink",tokenize:xS};function xS(e,i,r){let a=0;return s;function s(m){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),u}function u(m){return ut(m)?(e.consume(m),l):m===64?r(m):p(m)}function l(m){return m===43||m===45||m===46||et(m)?(a=1,c(m)):p(m)}function c(m){return m===58?(e.consume(m),a=0,f):(m===43||m===45||m===46||et(m))&&a++<32?(e.consume(m),c):(a=0,p(m))}function f(m){return m===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),i):m===null||m===32||m===60||pl(m)?r(m):(e.consume(m),f)}function p(m){return m===64?(e.consume(m),h):pS(m)?(e.consume(m),p):r(m)}function h(m){return et(m)?g(m):r(m)}function g(m){return m===46?(e.consume(m),a=0,h):m===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(m),e.exit("autolinkMarker"),e.exit("autolink"),i):w(m)}function w(m){if((m===45||et(m))&&a++<63){const v=m===45?w:g;return e.consume(m),v}return r(m)}}const ja={partial:!0,tokenize:ES};function ES(e,i,r){return a;function a(u){return tn(u)?ln(e,s,"linePrefix")(u):s(u)}function s(u){return u===null||$e(u)?i(u):r(u)}}const uh={continuation:{tokenize:CS},exit:IS,name:"blockQuote",tokenize:TS};function TS(e,i,r){const a=this;return s;function s(l){if(l===62){const c=a.containerState;return c.open||(e.enter("blockQuote",{_container:!0}),c.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),u}return r(l)}function u(l){return tn(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),i):(e.exit("blockQuotePrefix"),i(l))}}function CS(e,i,r){const a=this;return s;function s(l){return tn(l)?ln(e,u,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):u(l)}function u(l){return e.attempt(uh,i,r)(l)}}function IS(e){e.exit("blockQuote")}const ch={name:"characterEscape",tokenize:AS};function AS(e,i,r){return a;function a(u){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(u),e.exit("escapeMarker"),s}function s(u){return hS(u)?(e.enter("characterEscapeValue"),e.consume(u),e.exit("characterEscapeValue"),e.exit("characterEscape"),i):r(u)}}const dh={name:"characterReference",tokenize:LS};function LS(e,i,r){const a=this;let s=0,u,l;return c;function c(g){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),f}function f(g){return g===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(g),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),u=31,l=et,h(g))}function p(g){return g===88||g===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(g),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),u=6,l=gS,h):(e.enter("characterReferenceValue"),u=7,l=Zu,h(g))}function h(g){if(g===59&&s){const w=e.exit("characterReferenceValue");return l===et&&!mc(a.sliceSerialize(w))?r(g):(e.enter("characterReferenceMarker"),e.consume(g),e.exit("characterReferenceMarker"),e.exit("characterReference"),i)}return l(g)&&s++<u?(e.consume(g),h):r(g)}}const Op={partial:!0,tokenize:OS},Np={concrete:!0,name:"codeFenced",tokenize:MS};function MS(e,i,r){const a=this,s={partial:!0,tokenize:B};let u=0,l=0,c;return f;function f(R){return p(R)}function p(R){const $=a.events[a.events.length-1];return u=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,c=R,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),h(R)}function h(R){return R===c?(l++,e.consume(R),h):l<3?r(R):(e.exit("codeFencedFenceSequence"),tn(R)?ln(e,g,"whitespace")(R):g(R))}function g(R){return R===null||$e(R)?(e.exit("codeFencedFence"),a.interrupt?i(R):e.check(Op,S,D)(R)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),w(R))}function w(R){return R===null||$e(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),g(R)):tn(R)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ln(e,m,"whitespace")(R)):R===96&&R===c?r(R):(e.consume(R),w)}function m(R){return R===null||$e(R)?g(R):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),v(R))}function v(R){return R===null||$e(R)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),g(R)):R===96&&R===c?r(R):(e.consume(R),v)}function S(R){return e.attempt(s,D,_)(R)}function _(R){return e.enter("lineEnding"),e.consume(R),e.exit("lineEnding"),k}function k(R){return u>0&&tn(R)?ln(e,C,"linePrefix",u+1)(R):C(R)}function C(R){return R===null||$e(R)?e.check(Op,S,D)(R):(e.enter("codeFlowValue"),I(R))}function I(R){return R===null||$e(R)?(e.exit("codeFlowValue"),C(R)):(e.consume(R),I)}function D(R){return e.exit("codeFenced"),i(R)}function B(R,$,Q){let G=0;return U;function U(V){return R.enter("lineEnding"),R.consume(V),R.exit("lineEnding"),oe}function oe(V){return R.enter("codeFencedFence"),tn(V)?ln(R,O,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):O(V)}function O(V){return V===c?(R.enter("codeFencedFenceSequence"),Y(V)):Q(V)}function Y(V){return V===c?(G++,R.consume(V),Y):G>=l?(R.exit("codeFencedFenceSequence"),tn(V)?ln(R,x,"whitespace")(V):x(V)):Q(V)}function x(V){return V===null||$e(V)?(R.exit("codeFencedFence"),$(V)):Q(V)}}}function OS(e,i,r){const a=this;return s;function s(l){return l===null?r(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),u)}function u(l){return a.parser.lazy[a.now().line]?r(l):i(l)}}const yu={name:"codeIndented",tokenize:RS},NS={partial:!0,tokenize:PS};function RS(e,i,r){const a=this;return s;function s(p){return e.enter("codeIndented"),ln(e,u,"linePrefix",5)(p)}function u(p){const h=a.events[a.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?l(p):r(p)}function l(p){return p===null?f(p):$e(p)?e.attempt(NS,l,f)(p):(e.enter("codeFlowValue"),c(p))}function c(p){return p===null||$e(p)?(e.exit("codeFlowValue"),l(p)):(e.consume(p),c)}function f(p){return e.exit("codeIndented"),i(p)}}function PS(e,i,r){const a=this;return s;function s(l){return a.parser.lazy[a.now().line]?r(l):$e(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),s):ln(e,u,"linePrefix",5)(l)}function u(l){const c=a.events[a.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?i(l):$e(l)?s(l):r(l)}}const DS={name:"codeText",previous:FS,resolve:BS,tokenize:zS};function BS(e){let i=e.length-4,r=3,a,s;if((e[r][1].type==="lineEnding"||e[r][1].type==="space")&&(e[i][1].type==="lineEnding"||e[i][1].type==="space")){for(a=r;++a<i;)if(e[a][1].type==="codeTextData"){e[r][1].type="codeTextPadding",e[i][1].type="codeTextPadding",r+=2,i-=2;break}}for(a=r-1,i++;++a<=i;)s===void 0?a!==i&&e[a][1].type!=="lineEnding"&&(s=a):(a===i||e[a][1].type==="lineEnding")&&(e[s][1].type="codeTextData",a!==s+2&&(e[s][1].end=e[a-1][1].end,e.splice(s+2,a-s-2),i-=a-s-2,a=s+2),s=void 0);return e}function FS(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function zS(e,i,r){let a=0,s,u;return l;function l(g){return e.enter("codeText"),e.enter("codeTextSequence"),c(g)}function c(g){return g===96?(e.consume(g),a++,c):(e.exit("codeTextSequence"),f(g))}function f(g){return g===null?r(g):g===32?(e.enter("space"),e.consume(g),e.exit("space"),f):g===96?(u=e.enter("codeTextSequence"),s=0,h(g)):$e(g)?(e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),f):(e.enter("codeTextData"),p(g))}function p(g){return g===null||g===32||g===96||$e(g)?(e.exit("codeTextData"),f(g)):(e.consume(g),p)}function h(g){return g===96?(e.consume(g),s++,h):s===a?(e.exit("codeTextSequence"),e.exit("codeText"),i(g)):(u.type="codeTextData",p(g))}}class US{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,r){const a=r??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(i,a):i>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(i,r,a){const s=r||0;this.setCursor(Math.trunc(i));const u=this.right.splice(this.right.length-s,Number.POSITIVE_INFINITY);return a&&Ca(this.left,a),u.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ca(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ca(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const r=this.left.splice(i,Number.POSITIVE_INFINITY);Ca(this.right,r.reverse())}else{const r=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ca(this.left,r.reverse())}}}function Ca(e,i){let r=0;if(i.length<1e4)e.push(...i);else for(;r<i.length;)e.push(...i.slice(r,r+1e4)),r+=1e4}function fh(e){const i={};let r=-1,a,s,u,l,c,f,p;const h=new US(e);for(;++r<h.length;){for(;r in i;)r=i[r];if(a=h.get(r),r&&a[1].type==="chunkFlow"&&h.get(r-1)[1].type==="listItemPrefix"&&(f=a[1]._tokenizer.events,u=0,u<f.length&&f[u][1].type==="lineEndingBlank"&&(u+=2),u<f.length&&f[u][1].type==="content"))for(;++u<f.length&&f[u][1].type!=="content";)f[u][1].type==="chunkText"&&(f[u][1]._isInFirstContentOfListItem=!0,u++);if(a[0]==="enter")a[1].contentType&&(Object.assign(i,jS(h,r)),r=i[r],p=!0);else if(a[1]._container){for(u=r,s=void 0;u--;)if(l=h.get(u),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(s&&(h.get(s)[1].type="lineEndingBlank"),l[1].type="lineEnding",s=u);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;s&&(a[1].end={...h.get(s)[1].start},c=h.slice(s,r),c.unshift(a),h.splice(s,r-s+1,c))}}return Et(e,0,Number.POSITIVE_INFINITY,h.slice(0)),!p}function jS(e,i){const r=e.get(i)[1],a=e.get(i)[2];let s=i-1;const u=[];let l=r._tokenizer;l||(l=a.parser[r.contentType](r.start),r._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const c=l.events,f=[],p={};let h,g,w=-1,m=r,v=0,S=0;const _=[S];for(;m;){for(;e.get(++s)[1]!==m;);u.push(s),m._tokenizer||(h=a.sliceStream(m),m.next||h.push(null),g&&l.defineSkip(m.start),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(h),m._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),g=m,m=m.next}for(m=r;++w<c.length;)c[w][0]==="exit"&&c[w-1][0]==="enter"&&c[w][1].type===c[w-1][1].type&&c[w][1].start.line!==c[w][1].end.line&&(S=w+1,_.push(S),m._tokenizer=void 0,m.previous=void 0,m=m.next);for(l.events=[],m?(m._tokenizer=void 0,m.previous=void 0):_.pop(),w=_.length;w--;){const k=c.slice(_[w],_[w+1]),C=u.pop();f.push([C,C+k.length-1]),e.splice(C,2,k)}for(f.reverse(),w=-1;++w<f.length;)p[v+f[w][0]]=v+f[w][1],v+=f[w][1]-f[w][0]-1;return p}const VS={resolve:HS,tokenize:$S},WS={partial:!0,tokenize:GS};function HS(e){return fh(e),e}function $S(e,i){let r;return a;function a(c){return e.enter("content"),r=e.enter("chunkContent",{contentType:"content"}),s(c)}function s(c){return c===null?u(c):$e(c)?e.check(WS,l,u)(c):(e.consume(c),s)}function u(c){return e.exit("chunkContent"),e.exit("content"),i(c)}function l(c){return e.consume(c),e.exit("chunkContent"),r.next=e.enter("chunkContent",{contentType:"content",previous:r}),r=r.next,s}}function GS(e,i,r){const a=this;return s;function s(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ln(e,u,"linePrefix")}function u(l){if(l===null||$e(l))return r(l);const c=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?i(l):e.interrupt(a.parser.constructs.flow,r,i)(l)}}function ph(e,i,r,a,s,u,l,c,f){const p=f||Number.POSITIVE_INFINITY;let h=0;return g;function g(k){return k===60?(e.enter(a),e.enter(s),e.enter(u),e.consume(k),e.exit(u),w):k===null||k===32||k===41||pl(k)?r(k):(e.enter(a),e.enter(l),e.enter(c),e.enter("chunkString",{contentType:"string"}),S(k))}function w(k){return k===62?(e.enter(u),e.consume(k),e.exit(u),e.exit(s),e.exit(a),i):(e.enter(c),e.enter("chunkString",{contentType:"string"}),m(k))}function m(k){return k===62?(e.exit("chunkString"),e.exit(c),w(k)):k===null||k===60||$e(k)?r(k):(e.consume(k),k===92?v:m)}function v(k){return k===60||k===62||k===92?(e.consume(k),m):m(k)}function S(k){return!h&&(k===null||k===41||hn(k))?(e.exit("chunkString"),e.exit(c),e.exit(l),e.exit(a),i(k)):h<p&&k===40?(e.consume(k),h++,S):k===41?(e.consume(k),h--,S):k===null||k===32||k===40||pl(k)?r(k):(e.consume(k),k===92?_:S)}function _(k){return k===40||k===41||k===92?(e.consume(k),S):S(k)}}function gh(e,i,r,a,s,u){const l=this;let c=0,f;return p;function p(m){return e.enter(a),e.enter(s),e.consume(m),e.exit(s),e.enter(u),h}function h(m){return c>999||m===null||m===91||m===93&&!f||m===94&&!c&&"_hiddenFootnoteSupport"in l.parser.constructs?r(m):m===93?(e.exit(u),e.enter(s),e.consume(m),e.exit(s),e.exit(a),i):$e(m)?(e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),h):(e.enter("chunkString",{contentType:"string"}),g(m))}function g(m){return m===null||m===91||m===93||$e(m)||c++>999?(e.exit("chunkString"),h(m)):(e.consume(m),f||(f=!tn(m)),m===92?w:g)}function w(m){return m===91||m===92||m===93?(e.consume(m),c++,g):g(m)}}function hh(e,i,r,a,s,u){let l;return c;function c(w){return w===34||w===39||w===40?(e.enter(a),e.enter(s),e.consume(w),e.exit(s),l=w===40?41:w,f):r(w)}function f(w){return w===l?(e.enter(s),e.consume(w),e.exit(s),e.exit(a),i):(e.enter(u),p(w))}function p(w){return w===l?(e.exit(u),f(l)):w===null?r(w):$e(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),ln(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),h(w))}function h(w){return w===l||w===null||$e(w)?(e.exit("chunkString"),p(w)):(e.consume(w),w===92?g:h)}function g(w){return w===l||w===92?(e.consume(w),h):h(w)}}function Oa(e,i){let r;return a;function a(s){return $e(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),r=!0,a):tn(s)?ln(e,a,r?"linePrefix":"lineSuffix")(s):i(s)}}const KS={name:"definition",tokenize:YS},qS={partial:!0,tokenize:JS};function YS(e,i,r){const a=this;let s;return u;function u(m){return e.enter("definition"),l(m)}function l(m){return gh.call(a,e,c,r,"definitionLabel","definitionLabelMarker","definitionLabelString")(m)}function c(m){return s=Wt(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),m===58?(e.enter("definitionMarker"),e.consume(m),e.exit("definitionMarker"),f):r(m)}function f(m){return hn(m)?Oa(e,p)(m):p(m)}function p(m){return ph(e,h,r,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(m)}function h(m){return e.attempt(qS,g,g)(m)}function g(m){return tn(m)?ln(e,w,"whitespace")(m):w(m)}function w(m){return m===null||$e(m)?(e.exit("definition"),a.parser.defined.push(s),i(m)):r(m)}}function JS(e,i,r){return a;function a(c){return hn(c)?Oa(e,s)(c):r(c)}function s(c){return hh(e,u,r,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function u(c){return tn(c)?ln(e,l,"whitespace")(c):l(c)}function l(c){return c===null||$e(c)?i(c):r(c)}}const ZS={name:"hardBreakEscape",tokenize:XS};function XS(e,i,r){return a;function a(u){return e.enter("hardBreakEscape"),e.consume(u),s}function s(u){return $e(u)?(e.exit("hardBreakEscape"),i(u)):r(u)}}const QS={name:"headingAtx",resolve:ek,tokenize:nk};function ek(e,i){let r=e.length-2,a=3,s,u;return e[a][1].type==="whitespace"&&(a+=2),r-2>a&&e[r][1].type==="whitespace"&&(r-=2),e[r][1].type==="atxHeadingSequence"&&(a===r-1||r-4>a&&e[r-2][1].type==="whitespace")&&(r-=a+1===r?2:4),r>a&&(s={type:"atxHeadingText",start:e[a][1].start,end:e[r][1].end},u={type:"chunkText",start:e[a][1].start,end:e[r][1].end,contentType:"text"},Et(e,a,r-a+1,[["enter",s,i],["enter",u,i],["exit",u,i],["exit",s,i]])),e}function nk(e,i,r){let a=0;return s;function s(h){return e.enter("atxHeading"),u(h)}function u(h){return e.enter("atxHeadingSequence"),l(h)}function l(h){return h===35&&a++<6?(e.consume(h),l):h===null||hn(h)?(e.exit("atxHeadingSequence"),c(h)):r(h)}function c(h){return h===35?(e.enter("atxHeadingSequence"),f(h)):h===null||$e(h)?(e.exit("atxHeading"),i(h)):tn(h)?ln(e,c,"whitespace")(h):(e.enter("atxHeadingText"),p(h))}function f(h){return h===35?(e.consume(h),f):(e.exit("atxHeadingSequence"),c(h))}function p(h){return h===null||h===35||hn(h)?(e.exit("atxHeadingText"),c(h)):(e.consume(h),p)}}const tk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Rp=["pre","script","style","textarea"],rk={concrete:!0,name:"htmlFlow",resolveTo:ok,tokenize:lk},ik={partial:!0,tokenize:uk},ak={partial:!0,tokenize:sk};function ok(e){let i=e.length;for(;i--&&!(e[i][0]==="enter"&&e[i][1].type==="htmlFlow"););return i>1&&e[i-2][1].type==="linePrefix"&&(e[i][1].start=e[i-2][1].start,e[i+1][1].start=e[i-2][1].start,e.splice(i-2,2)),e}function lk(e,i,r){const a=this;let s,u,l,c,f;return p;function p(M){return h(M)}function h(M){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(M),g}function g(M){return M===33?(e.consume(M),w):M===47?(e.consume(M),u=!0,S):M===63?(e.consume(M),s=3,a.interrupt?i:L):ut(M)?(e.consume(M),l=String.fromCharCode(M),_):r(M)}function w(M){return M===45?(e.consume(M),s=2,m):M===91?(e.consume(M),s=5,c=0,v):ut(M)?(e.consume(M),s=4,a.interrupt?i:L):r(M)}function m(M){return M===45?(e.consume(M),a.interrupt?i:L):r(M)}function v(M){const ue="CDATA[";return M===ue.charCodeAt(c++)?(e.consume(M),c===ue.length?a.interrupt?i:O:v):r(M)}function S(M){return ut(M)?(e.consume(M),l=String.fromCharCode(M),_):r(M)}function _(M){if(M===null||M===47||M===62||hn(M)){const ue=M===47,le=l.toLowerCase();return!ue&&!u&&Rp.includes(le)?(s=1,a.interrupt?i(M):O(M)):tk.includes(l.toLowerCase())?(s=6,ue?(e.consume(M),k):a.interrupt?i(M):O(M)):(s=7,a.interrupt&&!a.parser.lazy[a.now().line]?r(M):u?C(M):I(M))}return M===45||et(M)?(e.consume(M),l+=String.fromCharCode(M),_):r(M)}function k(M){return M===62?(e.consume(M),a.interrupt?i:O):r(M)}function C(M){return tn(M)?(e.consume(M),C):U(M)}function I(M){return M===47?(e.consume(M),U):M===58||M===95||ut(M)?(e.consume(M),D):tn(M)?(e.consume(M),I):U(M)}function D(M){return M===45||M===46||M===58||M===95||et(M)?(e.consume(M),D):B(M)}function B(M){return M===61?(e.consume(M),R):tn(M)?(e.consume(M),B):I(M)}function R(M){return M===null||M===60||M===61||M===62||M===96?r(M):M===34||M===39?(e.consume(M),f=M,$):tn(M)?(e.consume(M),R):Q(M)}function $(M){return M===f?(e.consume(M),f=null,G):M===null||$e(M)?r(M):(e.consume(M),$)}function Q(M){return M===null||M===34||M===39||M===47||M===60||M===61||M===62||M===96||hn(M)?B(M):(e.consume(M),Q)}function G(M){return M===47||M===62||tn(M)?I(M):r(M)}function U(M){return M===62?(e.consume(M),oe):r(M)}function oe(M){return M===null||$e(M)?O(M):tn(M)?(e.consume(M),oe):r(M)}function O(M){return M===45&&s===2?(e.consume(M),ge):M===60&&s===1?(e.consume(M),ie):M===62&&s===4?(e.consume(M),A):M===63&&s===3?(e.consume(M),L):M===93&&s===5?(e.consume(M),Z):$e(M)&&(s===6||s===7)?(e.exit("htmlFlowData"),e.check(ik,P,Y)(M)):M===null||$e(M)?(e.exit("htmlFlowData"),Y(M)):(e.consume(M),O)}function Y(M){return e.check(ak,x,P)(M)}function x(M){return e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),V}function V(M){return M===null||$e(M)?Y(M):(e.enter("htmlFlowData"),O(M))}function ge(M){return M===45?(e.consume(M),L):O(M)}function ie(M){return M===47?(e.consume(M),l="",ne):O(M)}function ne(M){if(M===62){const ue=l.toLowerCase();return Rp.includes(ue)?(e.consume(M),A):O(M)}return ut(M)&&l.length<8?(e.consume(M),l+=String.fromCharCode(M),ne):O(M)}function Z(M){return M===93?(e.consume(M),L):O(M)}function L(M){return M===62?(e.consume(M),A):M===45&&s===2?(e.consume(M),L):O(M)}function A(M){return M===null||$e(M)?(e.exit("htmlFlowData"),P(M)):(e.consume(M),A)}function P(M){return e.exit("htmlFlow"),i(M)}}function sk(e,i,r){const a=this;return s;function s(l){return $e(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),u):r(l)}function u(l){return a.parser.lazy[a.now().line]?r(l):i(l)}}function uk(e,i,r){return a;function a(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),e.attempt(ja,i,r)}}const ck={name:"htmlText",tokenize:dk};function dk(e,i,r){const a=this;let s,u,l;return c;function c(L){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(L),f}function f(L){return L===33?(e.consume(L),p):L===47?(e.consume(L),B):L===63?(e.consume(L),I):ut(L)?(e.consume(L),Q):r(L)}function p(L){return L===45?(e.consume(L),h):L===91?(e.consume(L),u=0,v):ut(L)?(e.consume(L),C):r(L)}function h(L){return L===45?(e.consume(L),m):r(L)}function g(L){return L===null?r(L):L===45?(e.consume(L),w):$e(L)?(l=g,ie(L)):(e.consume(L),g)}function w(L){return L===45?(e.consume(L),m):g(L)}function m(L){return L===62?ge(L):L===45?w(L):g(L)}function v(L){const A="CDATA[";return L===A.charCodeAt(u++)?(e.consume(L),u===A.length?S:v):r(L)}function S(L){return L===null?r(L):L===93?(e.consume(L),_):$e(L)?(l=S,ie(L)):(e.consume(L),S)}function _(L){return L===93?(e.consume(L),k):S(L)}function k(L){return L===62?ge(L):L===93?(e.consume(L),k):S(L)}function C(L){return L===null||L===62?ge(L):$e(L)?(l=C,ie(L)):(e.consume(L),C)}function I(L){return L===null?r(L):L===63?(e.consume(L),D):$e(L)?(l=I,ie(L)):(e.consume(L),I)}function D(L){return L===62?ge(L):I(L)}function B(L){return ut(L)?(e.consume(L),R):r(L)}function R(L){return L===45||et(L)?(e.consume(L),R):$(L)}function $(L){return $e(L)?(l=$,ie(L)):tn(L)?(e.consume(L),$):ge(L)}function Q(L){return L===45||et(L)?(e.consume(L),Q):L===47||L===62||hn(L)?G(L):r(L)}function G(L){return L===47?(e.consume(L),ge):L===58||L===95||ut(L)?(e.consume(L),U):$e(L)?(l=G,ie(L)):tn(L)?(e.consume(L),G):ge(L)}function U(L){return L===45||L===46||L===58||L===95||et(L)?(e.consume(L),U):oe(L)}function oe(L){return L===61?(e.consume(L),O):$e(L)?(l=oe,ie(L)):tn(L)?(e.consume(L),oe):G(L)}function O(L){return L===null||L===60||L===61||L===62||L===96?r(L):L===34||L===39?(e.consume(L),s=L,Y):$e(L)?(l=O,ie(L)):tn(L)?(e.consume(L),O):(e.consume(L),x)}function Y(L){return L===s?(e.consume(L),s=void 0,V):L===null?r(L):$e(L)?(l=Y,ie(L)):(e.consume(L),Y)}function x(L){return L===null||L===34||L===39||L===60||L===61||L===96?r(L):L===47||L===62||hn(L)?G(L):(e.consume(L),x)}function V(L){return L===47||L===62||hn(L)?G(L):r(L)}function ge(L){return L===62?(e.consume(L),e.exit("htmlTextData"),e.exit("htmlText"),i):r(L)}function ie(L){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(L),e.exit("lineEnding"),ne}function ne(L){return tn(L)?ln(e,Z,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(L):Z(L)}function Z(L){return e.enter("htmlTextData"),l(L)}}const yc={name:"labelEnd",resolveAll:hk,resolveTo:mk,tokenize:yk},fk={tokenize:wk},pk={tokenize:bk},gk={tokenize:Sk};function hk(e){let i=-1;const r=[];for(;++i<e.length;){const a=e[i][1];if(r.push(e[i]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const s=a.type==="labelImage"?4:2;a.type="data",i+=s}}return e.length!==r.length&&Et(e,0,e.length,r),e}function mk(e,i){let r=e.length,a=0,s,u,l,c;for(;r--;)if(s=e[r][1],u){if(s.type==="link"||s.type==="labelLink"&&s._inactive)break;e[r][0]==="enter"&&s.type==="labelLink"&&(s._inactive=!0)}else if(l){if(e[r][0]==="enter"&&(s.type==="labelImage"||s.type==="labelLink")&&!s._balanced&&(u=r,s.type!=="labelLink")){a=2;break}}else s.type==="labelEnd"&&(l=r);const f={type:e[u][1].type==="labelLink"?"link":"image",start:{...e[u][1].start},end:{...e[e.length-1][1].end}},p={type:"label",start:{...e[u][1].start},end:{...e[l][1].end}},h={type:"labelText",start:{...e[u+a+2][1].end},end:{...e[l-2][1].start}};return c=[["enter",f,i],["enter",p,i]],c=Rt(c,e.slice(u+1,u+a+3)),c=Rt(c,[["enter",h,i]]),c=Rt(c,_l(i.parser.constructs.insideSpan.null,e.slice(u+a+4,l-3),i)),c=Rt(c,[["exit",h,i],e[l-2],e[l-1],["exit",p,i]]),c=Rt(c,e.slice(l+1)),c=Rt(c,[["exit",f,i]]),Et(e,u,e.length,c),e}function yk(e,i,r){const a=this;let s=a.events.length,u,l;for(;s--;)if((a.events[s][1].type==="labelImage"||a.events[s][1].type==="labelLink")&&!a.events[s][1]._balanced){u=a.events[s][1];break}return c;function c(w){return u?u._inactive?g(w):(l=a.parser.defined.includes(Wt(a.sliceSerialize({start:u.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelEnd"),f):r(w)}function f(w){return w===40?e.attempt(fk,h,l?h:g)(w):w===91?e.attempt(pk,h,l?p:g)(w):l?h(w):g(w)}function p(w){return e.attempt(gk,h,g)(w)}function h(w){return i(w)}function g(w){return u._balanced=!0,r(w)}}function wk(e,i,r){return a;function a(g){return e.enter("resource"),e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),s}function s(g){return hn(g)?Oa(e,u)(g):u(g)}function u(g){return g===41?h(g):ph(e,l,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function l(g){return hn(g)?Oa(e,f)(g):h(g)}function c(g){return r(g)}function f(g){return g===34||g===39||g===40?hh(e,p,r,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):h(g)}function p(g){return hn(g)?Oa(e,h)(g):h(g)}function h(g){return g===41?(e.enter("resourceMarker"),e.consume(g),e.exit("resourceMarker"),e.exit("resource"),i):r(g)}}function bk(e,i,r){const a=this;return s;function s(c){return gh.call(a,e,u,l,"reference","referenceMarker","referenceString")(c)}function u(c){return a.parser.defined.includes(Wt(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?i(c):r(c)}function l(c){return r(c)}}function Sk(e,i,r){return a;function a(u){return e.enter("reference"),e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),s}function s(u){return u===93?(e.enter("referenceMarker"),e.consume(u),e.exit("referenceMarker"),e.exit("reference"),i):r(u)}}const kk={name:"labelStartImage",resolveAll:yc.resolveAll,tokenize:vk};function vk(e,i,r){const a=this;return s;function s(c){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(c),e.exit("labelImageMarker"),u}function u(c){return c===91?(e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelImage"),l):r(c)}function l(c){return c===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(c):i(c)}}const _k={name:"labelStartLink",resolveAll:yc.resolveAll,tokenize:xk};function xk(e,i,r){const a=this;return s;function s(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),u}function u(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?r(l):i(l)}}const wu={name:"lineEnding",tokenize:Ek};function Ek(e,i){return r;function r(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ln(e,i,"linePrefix")}}const cl={name:"thematicBreak",tokenize:Tk};function Tk(e,i,r){let a=0,s;return u;function u(p){return e.enter("thematicBreak"),l(p)}function l(p){return s=p,c(p)}function c(p){return p===s?(e.enter("thematicBreakSequence"),f(p)):a>=3&&(p===null||$e(p))?(e.exit("thematicBreak"),i(p)):r(p)}function f(p){return p===s?(e.consume(p),a++,f):(e.exit("thematicBreakSequence"),tn(p)?ln(e,c,"whitespace")(p):c(p))}}const yt={continuation:{tokenize:Lk},exit:Ok,name:"list",tokenize:Ak},Ck={partial:!0,tokenize:Nk},Ik={partial:!0,tokenize:Mk};function Ak(e,i,r){const a=this,s=a.events[a.events.length-1];let u=s&&s[1].type==="linePrefix"?s[2].sliceSerialize(s[1],!0).length:0,l=0;return c;function c(m){const v=a.containerState.type||(m===42||m===43||m===45?"listUnordered":"listOrdered");if(v==="listUnordered"?!a.containerState.marker||m===a.containerState.marker:Zu(m)){if(a.containerState.type||(a.containerState.type=v,e.enter(v,{_container:!0})),v==="listUnordered")return e.enter("listItemPrefix"),m===42||m===45?e.check(cl,r,p)(m):p(m);if(!a.interrupt||m===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),f(m)}return r(m)}function f(m){return Zu(m)&&++l<10?(e.consume(m),f):(!a.interrupt||l<2)&&(a.containerState.marker?m===a.containerState.marker:m===41||m===46)?(e.exit("listItemValue"),p(m)):r(m)}function p(m){return e.enter("listItemMarker"),e.consume(m),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||m,e.check(ja,a.interrupt?r:h,e.attempt(Ck,w,g))}function h(m){return a.containerState.initialBlankLine=!0,u++,w(m)}function g(m){return tn(m)?(e.enter("listItemPrefixWhitespace"),e.consume(m),e.exit("listItemPrefixWhitespace"),w):r(m)}function w(m){return a.containerState.size=u+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,i(m)}}function Lk(e,i,r){const a=this;return a.containerState._closeFlow=void 0,e.check(ja,s,u);function s(c){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,ln(e,i,"listItemIndent",a.containerState.size+1)(c)}function u(c){return a.containerState.furtherBlankLines||!tn(c)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,l(c)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(Ik,i,l)(c))}function l(c){return a.containerState._closeFlow=!0,a.interrupt=void 0,ln(e,e.attempt(yt,i,r),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function Mk(e,i,r){const a=this;return ln(e,s,"listItemIndent",a.containerState.size+1);function s(u){const l=a.events[a.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===a.containerState.size?i(u):r(u)}}function Ok(e){e.exit(this.containerState.type)}function Nk(e,i,r){const a=this;return ln(e,s,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function s(u){const l=a.events[a.events.length-1];return!tn(u)&&l&&l[1].type==="listItemPrefixWhitespace"?i(u):r(u)}}const Pp={name:"setextUnderline",resolveTo:Rk,tokenize:Pk};function Rk(e,i){let r=e.length,a,s,u;for(;r--;)if(e[r][0]==="enter"){if(e[r][1].type==="content"){a=r;break}e[r][1].type==="paragraph"&&(s=r)}else e[r][1].type==="content"&&e.splice(r,1),!u&&e[r][1].type==="definition"&&(u=r);const l={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[s][1].type="setextHeadingText",u?(e.splice(s,0,["enter",l,i]),e.splice(u+1,0,["exit",e[a][1],i]),e[a][1].end={...e[u][1].end}):e[a][1]=l,e.push(["exit",l,i]),e}function Pk(e,i,r){const a=this;let s;return u;function u(p){let h=a.events.length,g;for(;h--;)if(a.events[h][1].type!=="lineEnding"&&a.events[h][1].type!=="linePrefix"&&a.events[h][1].type!=="content"){g=a.events[h][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||g)?(e.enter("setextHeadingLine"),s=p,l(p)):r(p)}function l(p){return e.enter("setextHeadingLineSequence"),c(p)}function c(p){return p===s?(e.consume(p),c):(e.exit("setextHeadingLineSequence"),tn(p)?ln(e,f,"lineSuffix")(p):f(p))}function f(p){return p===null||$e(p)?(e.exit("setextHeadingLine"),i(p)):r(p)}}const Dk={tokenize:Bk};function Bk(e){const i=this,r=e.attempt(ja,a,e.attempt(this.parser.constructs.flowInitial,s,ln(e,e.attempt(this.parser.constructs.flow,s,e.attempt(VS,s)),"linePrefix")));return r;function a(u){if(u===null){e.consume(u);return}return e.enter("lineEndingBlank"),e.consume(u),e.exit("lineEndingBlank"),i.currentConstruct=void 0,r}function s(u){if(u===null){e.consume(u);return}return e.enter("lineEnding"),e.consume(u),e.exit("lineEnding"),i.currentConstruct=void 0,r}}const Fk={resolveAll:yh()},zk=mh("string"),Uk=mh("text");function mh(e){return{resolveAll:yh(e==="text"?jk:void 0),tokenize:i};function i(r){const a=this,s=this.parser.constructs[e],u=r.attempt(s,l,c);return l;function l(h){return p(h)?u(h):c(h)}function c(h){if(h===null){r.consume(h);return}return r.enter("data"),r.consume(h),f}function f(h){return p(h)?(r.exit("data"),u(h)):(r.consume(h),f)}function p(h){if(h===null)return!0;const g=s[h];let w=-1;if(g)for(;++w<g.length;){const m=g[w];if(!m.previous||m.previous.call(a,a.previous))return!0}return!1}}}function yh(e){return i;function i(r,a){let s=-1,u;for(;++s<=r.length;)u===void 0?r[s]&&r[s][1].type==="data"&&(u=s,s++):(!r[s]||r[s][1].type!=="data")&&(s!==u+2&&(r[u][1].end=r[s-1][1].end,r.splice(u+2,s-u-2),s=u+2),u=void 0);return e?e(r,a):r}}function jk(e,i){let r=0;for(;++r<=e.length;)if((r===e.length||e[r][1].type==="lineEnding")&&e[r-1][1].type==="data"){const a=e[r-1][1],s=i.sliceStream(a);let u=s.length,l=-1,c=0,f;for(;u--;){const p=s[u];if(typeof p=="string"){for(l=p.length;p.charCodeAt(l-1)===32;)c++,l--;if(l)break;l=-1}else if(p===-2)f=!0,c++;else if(p!==-1){u++;break}}if(i._contentTypeTextTrailing&&r===e.length&&(c=0),c){const p={type:r===e.length||f||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:u?l:a.start._bufferIndex+l,_index:a.start._index+u,line:a.end.line,column:a.end.column-c,offset:a.end.offset-c},end:{...a.end}};a.end={...p.start},a.start.offset===a.end.offset?Object.assign(a,p):(e.splice(r,0,["enter",p,i],["exit",p,i]),r+=2)}r++}return e}const Vk={42:yt,43:yt,45:yt,48:yt,49:yt,50:yt,51:yt,52:yt,53:yt,54:yt,55:yt,56:yt,57:yt,62:uh},Wk={91:KS},Hk={[-2]:yu,[-1]:yu,32:yu},$k={35:QS,42:cl,45:[Pp,cl],60:rk,61:Pp,95:cl,96:Np,126:Np},Gk={38:dh,92:ch},Kk={[-5]:wu,[-4]:wu,[-3]:wu,33:kk,38:dh,42:Xu,60:[_S,ck],91:_k,92:[ZS,ch],93:yc,95:Xu,96:DS},qk={null:[Xu,Fk]},Yk={null:[42,95]},Jk={null:[]},Zk=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Yk,contentInitial:Wk,disable:Jk,document:Vk,flow:$k,flowInitial:Hk,insideSpan:qk,string:Gk,text:Kk},Symbol.toStringTag,{value:"Module"}));function Xk(e,i,r){let a={_bufferIndex:-1,_index:0,line:r&&r.line||1,column:r&&r.column||1,offset:r&&r.offset||0};const s={},u=[];let l=[],c=[];const f={attempt:$(B),check:$(R),consume:C,enter:I,exit:D,interrupt:$(R,{interrupt:!0})},p={code:null,containerState:{},defineSkip:S,events:[],now:v,parser:e,previous:null,sliceSerialize:w,sliceStream:m,write:g};let h=i.tokenize.call(p,f);return i.resolveAll&&u.push(i),p;function g(oe){return l=Rt(l,oe),_(),l[l.length-1]!==null?[]:(Q(i,0),p.events=_l(u,p.events,p),p.events)}function w(oe,O){return ev(m(oe),O)}function m(oe){return Qk(l,oe)}function v(){const{_bufferIndex:oe,_index:O,line:Y,column:x,offset:V}=a;return{_bufferIndex:oe,_index:O,line:Y,column:x,offset:V}}function S(oe){s[oe.line]=oe.column,U()}function _(){let oe;for(;a._index<l.length;){const O=l[a._index];if(typeof O=="string")for(oe=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===oe&&a._bufferIndex<O.length;)k(O.charCodeAt(a._bufferIndex));else k(O)}}function k(oe){h=h(oe)}function C(oe){$e(oe)?(a.line++,a.column=1,a.offset+=oe===-3?2:1,U()):oe!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===l[a._index].length&&(a._bufferIndex=-1,a._index++)),p.previous=oe}function I(oe,O){const Y=O||{};return Y.type=oe,Y.start=v(),p.events.push(["enter",Y,p]),c.push(Y),Y}function D(oe){const O=c.pop();return O.end=v(),p.events.push(["exit",O,p]),O}function B(oe,O){Q(oe,O.from)}function R(oe,O){O.restore()}function $(oe,O){return Y;function Y(x,V,ge){let ie,ne,Z,L;return Array.isArray(x)?P(x):"tokenize"in x?P([x]):A(x);function A(Ce){return Ue;function Ue(Ie){const Pe=Ie!==null&&Ce[Ie],Ye=Ie!==null&&Ce.null,an=[...Array.isArray(Pe)?Pe:Pe?[Pe]:[],...Array.isArray(Ye)?Ye:Ye?[Ye]:[]];return P(an)(Ie)}}function P(Ce){return ie=Ce,ne=0,Ce.length===0?ge:M(Ce[ne])}function M(Ce){return Ue;function Ue(Ie){return L=G(),Z=Ce,Ce.partial||(p.currentConstruct=Ce),Ce.name&&p.parser.constructs.disable.null.includes(Ce.name)?le():Ce.tokenize.call(O?Object.assign(Object.create(p),O):p,f,ue,le)(Ie)}}function ue(Ce){return oe(Z,L),V}function le(Ce){return L.restore(),++ne<ie.length?M(ie[ne]):ge}}}function Q(oe,O){oe.resolveAll&&!u.includes(oe)&&u.push(oe),oe.resolve&&Et(p.events,O,p.events.length-O,oe.resolve(p.events.slice(O),p)),oe.resolveTo&&(p.events=oe.resolveTo(p.events,p))}function G(){const oe=v(),O=p.previous,Y=p.currentConstruct,x=p.events.length,V=Array.from(c);return{from:x,restore:ge};function ge(){a=oe,p.previous=O,p.currentConstruct=Y,p.events.length=x,c=V,U()}}function U(){a.line in s&&a.column<2&&(a.column=s[a.line],a.offset+=s[a.line]-1)}}function Qk(e,i){const r=i.start._index,a=i.start._bufferIndex,s=i.end._index,u=i.end._bufferIndex;let l;if(r===s)l=[e[r].slice(a,u)];else{if(l=e.slice(r,s),a>-1){const c=l[0];typeof c=="string"?l[0]=c.slice(a):l.shift()}u>0&&l.push(e[s].slice(0,u))}return l}function ev(e,i){let r=-1;const a=[];let s;for(;++r<e.length;){const u=e[r];let l;if(typeof u=="string")l=u;else switch(u){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=i?" ":"	";break}case-1:{if(!i&&s)continue;l=" ";break}default:l=String.fromCharCode(u)}s=u===-2,a.push(l)}return a.join("")}function nv(e){const a={constructs:lh([Zk,...(e||{}).extensions||[]]),content:s(mS),defined:[],document:s(wS),flow:s(Dk),lazy:{},string:s(zk),text:s(Uk)};return a;function s(u){return l;function l(c){return Xk(a,u,c)}}}function tv(e){for(;!fh(e););return e}const Dp=/[\0\t\n\r]/g;function rv(){let e=1,i="",r=!0,a;return s;function s(u,l,c){const f=[];let p,h,g,w,m;for(u=i+(typeof u=="string"?u.toString():new TextDecoder(l||void 0).decode(u)),g=0,i="",r&&(u.charCodeAt(0)===65279&&g++,r=void 0);g<u.length;){if(Dp.lastIndex=g,p=Dp.exec(u),w=p&&p.index!==void 0?p.index:u.length,m=u.charCodeAt(w),!p){i=u.slice(g);break}if(m===10&&g===w&&a)f.push(-3),a=void 0;else switch(a&&(f.push(-5),a=void 0),g<w&&(f.push(u.slice(g,w)),e+=w-g),m){case 0:{f.push(65533),e++;break}case 9:{for(h=Math.ceil(e/4)*4,f.push(-2);e++<h;)f.push(-1);break}case 10:{f.push(-4),e=1;break}default:a=!0,e=1}g=w+1}return c&&(a&&f.push(-5),i&&f.push(i),f.push(null)),f}}const iv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function av(e){return e.replace(iv,ov)}function ov(e,i,r){if(i)return i;if(r.charCodeAt(0)===35){const s=r.charCodeAt(1),u=s===120||s===88;return sh(r.slice(u?2:1),u?16:10)}return mc(r)||e}const wh={}.hasOwnProperty;function lv(e,i,r){return i&&typeof i=="object"&&(r=i,i=void 0),sv(r)(tv(nv(r).document().write(rv()(e,i,!0))))}function sv(e){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:u(K),autolinkProtocol:G,autolinkEmail:G,atxHeading:u(se),blockQuote:u(Ye),characterEscape:G,characterReference:G,codeFenced:u(an),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:u(an,l),codeText:u(Fn,l),codeTextData:G,data:G,codeFlowValue:G,definition:u(In),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:u(E),hardBreakEscape:u(J),hardBreakTrailing:u(J),htmlFlow:u(F,l),htmlFlowData:G,htmlText:u(F,l),htmlTextData:G,image:u(N),label:l,link:u(K),listItem:u(pe),listItemValue:w,listOrdered:u(de,g),listUnordered:u(de),paragraph:u(ee),reference:M,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:u(se),strong:u(we),thematicBreak:u(be)},exit:{atxHeading:f(),atxHeadingSequence:B,autolink:f(),autolinkEmail:Pe,autolinkProtocol:Ie,blockQuote:f(),characterEscapeValue:U,characterReferenceMarkerHexadecimal:le,characterReferenceMarkerNumeric:le,characterReferenceValue:Ce,characterReference:Ue,codeFenced:f(_),codeFencedFence:S,codeFencedFenceInfo:m,codeFencedFenceMeta:v,codeFlowValue:U,codeIndented:f(k),codeText:f(V),codeTextData:U,data:U,definition:f(),definitionDestinationString:D,definitionLabelString:C,definitionTitleString:I,emphasis:f(),hardBreakEscape:f(O),hardBreakTrailing:f(O),htmlFlow:f(Y),htmlFlowData:U,htmlText:f(x),htmlTextData:U,image:f(ie),label:Z,labelText:ne,lineEnding:oe,link:f(ge),listItem:f(),listOrdered:f(),listUnordered:f(),paragraph:f(),referenceString:ue,resourceDestinationString:L,resourceTitleString:A,resource:P,setextHeading:f(Q),setextHeadingLineSequence:$,setextHeadingText:R,strong:f(),thematicBreak:f()}};bh(i,(e||{}).mdastExtensions||[]);const r={};return a;function a(q){let fe={type:"root",children:[]};const _e={stack:[fe],tokenStack:[],config:i,enter:c,exit:p,buffer:l,resume:h,data:r},je=[];let Ze=-1;for(;++Ze<q.length;)if(q[Ze][1].type==="listOrdered"||q[Ze][1].type==="listUnordered")if(q[Ze][0]==="enter")je.push(Ze);else{const dn=je.pop();Ze=s(q,dn,Ze)}for(Ze=-1;++Ze<q.length;){const dn=i[q[Ze][0]];wh.call(dn,q[Ze][1].type)&&dn[q[Ze][1].type].call(Object.assign({sliceSerialize:q[Ze][2].sliceSerialize},_e),q[Ze][1])}if(_e.tokenStack.length>0){const dn=_e.tokenStack[_e.tokenStack.length-1];(dn[1]||Bp).call(_e,void 0,dn[0])}for(fe.position={start:Nr(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:Nr(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Ze=-1;++Ze<i.transforms.length;)fe=i.transforms[Ze](fe)||fe;return fe}function s(q,fe,_e){let je=fe-1,Ze=-1,dn=!1,Gn,rn,Yn,bt;for(;++je<=_e;){const fn=q[je];switch(fn[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{fn[0]==="enter"?Ze++:Ze--,bt=void 0;break}case"lineEndingBlank":{fn[0]==="enter"&&(Gn&&!bt&&!Ze&&!Yn&&(Yn=je),bt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:bt=void 0}if(!Ze&&fn[0]==="enter"&&fn[1].type==="listItemPrefix"||Ze===-1&&fn[0]==="exit"&&(fn[1].type==="listUnordered"||fn[1].type==="listOrdered")){if(Gn){let tt=je;for(rn=void 0;tt--;){const zn=q[tt];if(zn[1].type==="lineEnding"||zn[1].type==="lineEndingBlank"){if(zn[0]==="exit")continue;rn&&(q[rn][1].type="lineEndingBlank",dn=!0),zn[1].type="lineEnding",rn=tt}else if(!(zn[1].type==="linePrefix"||zn[1].type==="blockQuotePrefix"||zn[1].type==="blockQuotePrefixWhitespace"||zn[1].type==="blockQuoteMarker"||zn[1].type==="listItemIndent"))break}Yn&&(!rn||Yn<rn)&&(Gn._spread=!0),Gn.end=Object.assign({},rn?q[rn][1].start:fn[1].end),q.splice(rn||je,0,["exit",Gn,fn[2]]),je++,_e++}if(fn[1].type==="listItemPrefix"){const tt={type:"listItem",_spread:!1,start:Object.assign({},fn[1].start),end:void 0};Gn=tt,q.splice(je,0,["enter",tt,fn[2]]),je++,_e++,Yn=void 0,bt=!0}}}return q[fe][1]._spread=dn,_e}function u(q,fe){return _e;function _e(je){c.call(this,q(je),je),fe&&fe.call(this,je)}}function l(){this.stack.push({type:"fragment",children:[]})}function c(q,fe,_e){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([fe,_e||void 0]),q.position={start:Nr(fe.start),end:void 0}}function f(q){return fe;function fe(_e){q&&q.call(this,_e),p.call(this,_e)}}function p(q,fe){const _e=this.stack.pop(),je=this.tokenStack.pop();if(je)je[0].type!==q.type&&(fe?fe.call(this,q,je[0]):(je[1]||Bp).call(this,q,je[0]));else throw new Error("Cannot close `"+q.type+"` ("+Ma({start:q.start,end:q.end})+"): it’s not open");_e.position.end=Nr(q.end)}function h(){return hc(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function w(q){if(this.data.expectingFirstListItemValue){const fe=this.stack[this.stack.length-2];fe.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function m(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.lang=q}function v(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.meta=q}function S(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function k(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.value=q.replace(/(\r?\n|\r)$/g,"")}function C(q){const fe=this.resume(),_e=this.stack[this.stack.length-1];_e.label=fe,_e.identifier=Wt(this.sliceSerialize(q)).toLowerCase()}function I(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.title=q}function D(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.url=q}function B(q){const fe=this.stack[this.stack.length-1];if(!fe.depth){const _e=this.sliceSerialize(q).length;fe.depth=_e}}function R(){this.data.setextHeadingSlurpLineEnding=!0}function $(q){const fe=this.stack[this.stack.length-1];fe.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function Q(){this.data.setextHeadingSlurpLineEnding=void 0}function G(q){const _e=this.stack[this.stack.length-1].children;let je=_e[_e.length-1];(!je||je.type!=="text")&&(je=Ee(),je.position={start:Nr(q.start),end:void 0},_e.push(je)),this.stack.push(je)}function U(q){const fe=this.stack.pop();fe.value+=this.sliceSerialize(q),fe.position.end=Nr(q.end)}function oe(q){const fe=this.stack[this.stack.length-1];if(this.data.atHardBreak){const _e=fe.children[fe.children.length-1];_e.position.end=Nr(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(fe.type)&&(G.call(this,q),U.call(this,q))}function O(){this.data.atHardBreak=!0}function Y(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.value=q}function x(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.value=q}function V(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.value=q}function ge(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const fe=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=fe,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ie(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const fe=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=fe,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ne(q){const fe=this.sliceSerialize(q),_e=this.stack[this.stack.length-2];_e.label=av(fe),_e.identifier=Wt(fe).toLowerCase()}function Z(){const q=this.stack[this.stack.length-1],fe=this.resume(),_e=this.stack[this.stack.length-1];if(this.data.inReference=!0,_e.type==="link"){const je=q.children;_e.children=je}else _e.alt=fe}function L(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.url=q}function A(){const q=this.resume(),fe=this.stack[this.stack.length-1];fe.title=q}function P(){this.data.inReference=void 0}function M(){this.data.referenceType="collapsed"}function ue(q){const fe=this.resume(),_e=this.stack[this.stack.length-1];_e.label=fe,_e.identifier=Wt(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function le(q){this.data.characterReferenceType=q.type}function Ce(q){const fe=this.sliceSerialize(q),_e=this.data.characterReferenceType;let je;_e?(je=sh(fe,_e==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):je=mc(fe);const Ze=this.stack[this.stack.length-1];Ze.value+=je}function Ue(q){const fe=this.stack.pop();fe.position.end=Nr(q.end)}function Ie(q){U.call(this,q);const fe=this.stack[this.stack.length-1];fe.url=this.sliceSerialize(q)}function Pe(q){U.call(this,q);const fe=this.stack[this.stack.length-1];fe.url="mailto:"+this.sliceSerialize(q)}function Ye(){return{type:"blockquote",children:[]}}function an(){return{type:"code",lang:null,meta:null,value:""}}function Fn(){return{type:"inlineCode",value:""}}function In(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function E(){return{type:"emphasis",children:[]}}function se(){return{type:"heading",depth:0,children:[]}}function J(){return{type:"break"}}function F(){return{type:"html",value:""}}function N(){return{type:"image",title:null,url:"",alt:null}}function K(){return{type:"link",title:null,url:"",children:[]}}function de(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function pe(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function ee(){return{type:"paragraph",children:[]}}function we(){return{type:"strong",children:[]}}function Ee(){return{type:"text",value:""}}function be(){return{type:"thematicBreak"}}}function Nr(e){return{line:e.line,column:e.column,offset:e.offset}}function bh(e,i){let r=-1;for(;++r<i.length;){const a=i[r];Array.isArray(a)?bh(e,a):uv(e,a)}}function uv(e,i){let r;for(r in i)if(wh.call(i,r))switch(r){case"canContainEols":{const a=i[r];a&&e[r].push(...a);break}case"transforms":{const a=i[r];a&&e[r].push(...a);break}case"enter":case"exit":{const a=i[r];a&&Object.assign(e[r],a);break}}}function Bp(e,i){throw e?new Error("Cannot close `"+e.type+"` ("+Ma({start:e.start,end:e.end})+"): a different token (`"+i.type+"`, "+Ma({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+Ma({start:i.start,end:i.end})+") is still open")}function cv(e){const i=this;i.parser=r;function r(a){return lv(a,{...i.data("settings"),...e,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function dv(e,i){const r={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(i),!0)};return e.patch(i,r),e.applyData(i,r)}function fv(e,i){const r={type:"element",tagName:"br",properties:{},children:[]};return e.patch(i,r),[e.applyData(i,r),{type:"text",value:`
`}]}function pv(e,i){const r=i.value?i.value+`
`:"",a={},s=i.lang?i.lang.split(/\s+/):[];s.length>0&&(a.className=["language-"+s[0]]);let u={type:"element",tagName:"code",properties:a,children:[{type:"text",value:r}]};return i.meta&&(u.data={meta:i.meta}),e.patch(i,u),u=e.applyData(i,u),u={type:"element",tagName:"pre",properties:{},children:[u]},e.patch(i,u),u}function gv(e,i){const r={type:"element",tagName:"del",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function hv(e,i){const r={type:"element",tagName:"em",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function mv(e,i){const r=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(i.identifier).toUpperCase(),s=Vi(a.toLowerCase()),u=e.footnoteOrder.indexOf(a);let l,c=e.footnoteCounts.get(a);c===void 0?(c=0,e.footnoteOrder.push(a),l=e.footnoteOrder.length):l=u+1,c+=1,e.footnoteCounts.set(a,c);const f={type:"element",tagName:"a",properties:{href:"#"+r+"fn-"+s,id:r+"fnref-"+s+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(i,f);const p={type:"element",tagName:"sup",properties:{},children:[f]};return e.patch(i,p),e.applyData(i,p)}function yv(e,i){const r={type:"element",tagName:"h"+i.depth,properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function wv(e,i){if(e.options.allowDangerousHtml){const r={type:"raw",value:i.value};return e.patch(i,r),e.applyData(i,r)}}function Sh(e,i){const r=i.referenceType;let a="]";if(r==="collapsed"?a+="[]":r==="full"&&(a+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+a}];const s=e.all(i),u=s[0];u&&u.type==="text"?u.value="["+u.value:s.unshift({type:"text",value:"["});const l=s[s.length-1];return l&&l.type==="text"?l.value+=a:s.push({type:"text",value:a}),s}function bv(e,i){const r=String(i.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return Sh(e,i);const s={src:Vi(a.url||""),alt:i.alt};a.title!==null&&a.title!==void 0&&(s.title=a.title);const u={type:"element",tagName:"img",properties:s,children:[]};return e.patch(i,u),e.applyData(i,u)}function Sv(e,i){const r={src:Vi(i.url)};i.alt!==null&&i.alt!==void 0&&(r.alt=i.alt),i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(i,a),e.applyData(i,a)}function kv(e,i){const r={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};e.patch(i,r);const a={type:"element",tagName:"code",properties:{},children:[r]};return e.patch(i,a),e.applyData(i,a)}function vv(e,i){const r=String(i.identifier).toUpperCase(),a=e.definitionById.get(r);if(!a)return Sh(e,i);const s={href:Vi(a.url||"")};a.title!==null&&a.title!==void 0&&(s.title=a.title);const u={type:"element",tagName:"a",properties:s,children:e.all(i)};return e.patch(i,u),e.applyData(i,u)}function _v(e,i){const r={href:Vi(i.url)};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"a",properties:r,children:e.all(i)};return e.patch(i,a),e.applyData(i,a)}function xv(e,i,r){const a=e.all(i),s=r?Ev(r):kh(i),u={},l=[];if(typeof i.checked=="boolean"){const h=a[0];let g;h&&h.type==="element"&&h.tagName==="p"?g=h:(g={type:"element",tagName:"p",properties:{},children:[]},a.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),u.className=["task-list-item"]}let c=-1;for(;++c<a.length;){const h=a[c];(s||c!==0||h.type!=="element"||h.tagName!=="p")&&l.push({type:"text",value:`
`}),h.type==="element"&&h.tagName==="p"&&!s?l.push(...h.children):l.push(h)}const f=a[a.length-1];f&&(s||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:u,children:l};return e.patch(i,p),e.applyData(i,p)}function Ev(e){let i=!1;if(e.type==="list"){i=e.spread||!1;const r=e.children;let a=-1;for(;!i&&++a<r.length;)i=kh(r[a])}return i}function kh(e){const i=e.spread;return i??e.children.length>1}function Tv(e,i){const r={},a=e.all(i);let s=-1;for(typeof i.start=="number"&&i.start!==1&&(r.start=i.start);++s<a.length;){const l=a[s];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){r.className=["contains-task-list"];break}}const u={type:"element",tagName:i.ordered?"ol":"ul",properties:r,children:e.wrap(a,!0)};return e.patch(i,u),e.applyData(i,u)}function Cv(e,i){const r={type:"element",tagName:"p",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function Iv(e,i){const r={type:"root",children:e.wrap(e.all(i))};return e.patch(i,r),e.applyData(i,r)}function Av(e,i){const r={type:"element",tagName:"strong",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}function Lv(e,i){const r=e.all(i),a=r.shift(),s=[];if(a){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(i.children[0],l),s.push(l)}if(r.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(r,!0)},c=dc(i.children[1]),f=eh(i.children[i.children.length-1]);c&&f&&(l.position={start:c,end:f}),s.push(l)}const u={type:"element",tagName:"table",properties:{},children:e.wrap(s,!0)};return e.patch(i,u),e.applyData(i,u)}function Mv(e,i,r){const a=r?r.children:void 0,u=(a?a.indexOf(i):1)===0?"th":"td",l=r&&r.type==="table"?r.align:void 0,c=l?l.length:i.children.length;let f=-1;const p=[];for(;++f<c;){const g=i.children[f],w={},m=l?l[f]:void 0;m&&(w.align=m);let v={type:"element",tagName:u,properties:w,children:[]};g&&(v.children=e.all(g),e.patch(g,v),v=e.applyData(g,v)),p.push(v)}const h={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(i,h),e.applyData(i,h)}function Ov(e,i){const r={type:"element",tagName:"td",properties:{},children:e.all(i)};return e.patch(i,r),e.applyData(i,r)}const Fp=9,zp=32;function Nv(e){const i=String(e),r=/\r?\n|\r/g;let a=r.exec(i),s=0;const u=[];for(;a;)u.push(Up(i.slice(s,a.index),s>0,!0),a[0]),s=a.index+a[0].length,a=r.exec(i);return u.push(Up(i.slice(s),s>0,!1)),u.join("")}function Up(e,i,r){let a=0,s=e.length;if(i){let u=e.codePointAt(a);for(;u===Fp||u===zp;)a++,u=e.codePointAt(a)}if(r){let u=e.codePointAt(s-1);for(;u===Fp||u===zp;)s--,u=e.codePointAt(s-1)}return s>a?e.slice(a,s):""}function Rv(e,i){const r={type:"text",value:Nv(String(i.value))};return e.patch(i,r),e.applyData(i,r)}function Pv(e,i){const r={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(i,r),e.applyData(i,r)}const Dv={blockquote:dv,break:fv,code:pv,delete:gv,emphasis:hv,footnoteReference:mv,heading:yv,html:wv,imageReference:bv,image:Sv,inlineCode:kv,linkReference:vv,link:_v,listItem:xv,list:Tv,paragraph:Cv,root:Iv,strong:Av,table:Lv,tableCell:Ov,tableRow:Mv,text:Rv,thematicBreak:Pv,toml:el,yaml:el,definition:el,footnoteDefinition:el};function el(){}const vh=-1,xl=0,Na=1,gl=2,wc=3,bc=4,Sc=5,kc=6,_h=7,xh=8,Bv=typeof self=="object"?self:globalThis,jp=(e,i)=>{switch(e){case"Function":case"SharedWorker":case"Worker":case"eval":case"setInterval":case"setTimeout":throw new TypeError("unable to deserialize "+e)}return new Bv[e](i)},Fv=(e,i)=>{const r=(s,u)=>(e.set(u,s),s),a=s=>{if(e.has(s))return e.get(s);const[u,l]=i[s];switch(u){case xl:case vh:return r(l,s);case Na:{const c=r([],s);for(const f of l)c.push(a(f));return c}case gl:{const c=r({},s);for(const[f,p]of l)c[a(f)]=a(p);return c}case wc:return r(new Date(l),s);case bc:{const{source:c,flags:f}=l;return r(new RegExp(c,f),s)}case Sc:{const c=r(new Map,s);for(const[f,p]of l)c.set(a(f),a(p));return c}case kc:{const c=r(new Set,s);for(const f of l)c.add(a(f));return c}case _h:{const{name:c,message:f}=l;return r(jp(c,f),s)}case xh:return r(BigInt(l),s);case"BigInt":return r(Object(BigInt(l)),s);case"ArrayBuffer":return r(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:c}=new Uint8Array(l);return r(new DataView(c),l)}}return r(jp(u,l),s)};return a},Vp=e=>Fv(new Map,e)(0),Pi="",{toString:zv}={},{keys:Uv}=Object,Ia=e=>{const i=typeof e;if(i!=="object"||!e)return[xl,i];const r=zv.call(e).slice(8,-1);switch(r){case"Array":return[Na,Pi];case"Object":return[gl,Pi];case"Date":return[wc,Pi];case"RegExp":return[bc,Pi];case"Map":return[Sc,Pi];case"Set":return[kc,Pi];case"DataView":return[Na,r]}return r.includes("Array")?[Na,r]:r.includes("Error")?[_h,r]:[gl,r]},nl=([e,i])=>e===xl&&(i==="function"||i==="symbol"),jv=(e,i,r,a)=>{const s=(l,c)=>{const f=a.push(l)-1;return r.set(c,f),f},u=l=>{if(r.has(l))return r.get(l);let[c,f]=Ia(l);switch(c){case xl:{let h=l;switch(f){case"bigint":c=xh,h=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+f);h=null;break;case"undefined":return s([vh],l)}return s([c,h],l)}case Na:{if(f){let w=l;return f==="DataView"?w=new Uint8Array(l.buffer):f==="ArrayBuffer"&&(w=new Uint8Array(l)),s([f,[...w]],l)}const h=[],g=s([c,h],l);for(const w of l)h.push(u(w));return g}case gl:{if(f)switch(f){case"BigInt":return s([f,l.toString()],l);case"Boolean":case"Number":case"String":return s([f,l.valueOf()],l)}if(i&&"toJSON"in l)return u(l.toJSON());const h=[],g=s([c,h],l);for(const w of Uv(l))(e||!nl(Ia(l[w])))&&h.push([u(w),u(l[w])]);return g}case wc:return s([c,l.toISOString()],l);case bc:{const{source:h,flags:g}=l;return s([c,{source:h,flags:g}],l)}case Sc:{const h=[],g=s([c,h],l);for(const[w,m]of l)(e||!(nl(Ia(w))||nl(Ia(m))))&&h.push([u(w),u(m)]);return g}case kc:{const h=[],g=s([c,h],l);for(const w of l)(e||!nl(Ia(w)))&&h.push(u(w));return g}}const{message:p}=l;return s([c,{name:f,message:p}],l)};return u},Wp=(e,{json:i,lossy:r}={})=>{const a=[];return jv(!(i||r),!!i,new Map,a)(e),a},hl=typeof structuredClone=="function"?(e,i)=>i&&("json"in i||"lossy"in i)?Vp(Wp(e,i)):structuredClone(e):(e,i)=>Vp(Wp(e,i));function Vv(e,i){const r=[{type:"text",value:"↩"}];return i>1&&r.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),r}function Wv(e,i){return"Back to reference "+(e+1)+(i>1?"-"+i:"")}function Hv(e){const i=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=e.options.footnoteBackContent||Vv,a=e.options.footnoteBackLabel||Wv,s=e.options.footnoteLabel||"Footnotes",u=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let f=-1;for(;++f<e.footnoteOrder.length;){const p=e.footnoteById.get(e.footnoteOrder[f]);if(!p)continue;const h=e.all(p),g=String(p.identifier).toUpperCase(),w=Vi(g.toLowerCase());let m=0;const v=[],S=e.footnoteCounts.get(g);for(;S!==void 0&&++m<=S;){v.length>0&&v.push({type:"text",value:" "});let C=typeof r=="string"?r:r(f,m);typeof C=="string"&&(C={type:"text",value:C}),v.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+w+(m>1?"-"+m:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(f,m),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const _=h[h.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const C=_.children[_.children.length-1];C&&C.type==="text"?C.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...v)}else h.push(...v);const k={type:"element",tagName:"li",properties:{id:i+"fn-"+w},children:e.wrap(h,!0)};e.patch(p,k),c.push(k)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:u,properties:{...hl(l),id:"footnote-label"},children:[{type:"text",value:s}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(c,!0)},{type:"text",value:`
`}]}}const Va=(function(e){if(e==null)return qv;if(typeof e=="function")return El(e);if(typeof e=="object")return Array.isArray(e)?$v(e):Gv(e);if(typeof e=="string")return Kv(e);throw new Error("Expected function, string, or object as test")});function $v(e){const i=[];let r=-1;for(;++r<e.length;)i[r]=Va(e[r]);return El(a);function a(...s){let u=-1;for(;++u<i.length;)if(i[u].apply(this,s))return!0;return!1}}function Gv(e){const i=e;return El(r);function r(a){const s=a;let u;for(u in e)if(s[u]!==i[u])return!1;return!0}}function Kv(e){return El(i);function i(r){return r&&r.type===e}}function El(e){return i;function i(r,a,s){return!!(Yv(r)&&e.call(this,r,typeof a=="number"?a:void 0,s||void 0))}}function qv(){return!0}function Yv(e){return e!==null&&typeof e=="object"&&"type"in e}const Eh=[],Jv=!0,Qu=!1,Zv="skip";function Th(e,i,r,a){let s;typeof i=="function"&&typeof r!="function"?(a=r,r=i):s=i;const u=Va(s),l=a?-1:1;c(e,void 0,[])();function c(f,p,h){const g=f&&typeof f=="object"?f:{};if(typeof g.type=="string"){const m=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(f.type+(m?"<"+m+">":""))+")"})}return w;function w(){let m=Eh,v,S,_;if((!i||u(f,p,h[h.length-1]||void 0))&&(m=Xv(r(f,h)),m[0]===Qu))return m;if("children"in f&&f.children){const k=f;if(k.children&&m[0]!==Zv)for(S=(a?k.children.length:-1)+l,_=h.concat(k);S>-1&&S<k.children.length;){const C=k.children[S];if(v=c(C,S,_)(),v[0]===Qu)return v;S=typeof v[1]=="number"?v[1]:S+l}}return m}}}function Xv(e){return Array.isArray(e)?e:typeof e=="number"?[Jv,e]:e==null?Eh:[e]}function Tl(e,i,r,a){let s,u,l;typeof i=="function"&&typeof r!="function"?(u=void 0,l=i,s=r):(u=i,l=r,s=a),Th(e,u,c,s);function c(f,p){const h=p[p.length-1],g=h?h.children.indexOf(f):void 0;return l(f,g,h)}}const ec={}.hasOwnProperty,Qv={};function e_(e,i){const r=i||Qv,a=new Map,s=new Map,u=new Map,l={...Dv,...r.handlers},c={all:p,applyData:t_,definitionById:a,footnoteById:s,footnoteCounts:u,footnoteOrder:[],handlers:l,one:f,options:r,patch:n_,wrap:i_};return Tl(e,function(h){if(h.type==="definition"||h.type==="footnoteDefinition"){const g=h.type==="definition"?a:s,w=String(h.identifier).toUpperCase();g.has(w)||g.set(w,h)}}),c;function f(h,g){const w=h.type,m=c.handlers[w];if(ec.call(c.handlers,w)&&m)return m(c,h,g);if(c.options.passThrough&&c.options.passThrough.includes(w)){if("children"in h){const{children:S,..._}=h,k=hl(_);return k.children=c.all(h),k}return hl(h)}return(c.options.unknownHandler||r_)(c,h,g)}function p(h){const g=[];if("children"in h){const w=h.children;let m=-1;for(;++m<w.length;){const v=c.one(w[m],h);if(v){if(m&&w[m-1].type==="break"&&(!Array.isArray(v)&&v.type==="text"&&(v.value=Hp(v.value)),!Array.isArray(v)&&v.type==="element")){const S=v.children[0];S&&S.type==="text"&&(S.value=Hp(S.value))}Array.isArray(v)?g.push(...v):g.push(v)}}}return g}}function n_(e,i){e.position&&(i.position=V0(e))}function t_(e,i){let r=i;if(e&&e.data){const a=e.data.hName,s=e.data.hChildren,u=e.data.hProperties;if(typeof a=="string")if(r.type==="element")r.tagName=a;else{const l="children"in r?r.children:[r];r={type:"element",tagName:a,properties:{},children:l}}r.type==="element"&&u&&Object.assign(r.properties,hl(u)),"children"in r&&r.children&&s!==null&&s!==void 0&&(r.children=s)}return r}function r_(e,i){const r=i.data||{},a="value"in i&&!(ec.call(r,"hProperties")||ec.call(r,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:e.all(i)};return e.patch(i,a),e.applyData(i,a)}function i_(e,i){const r=[];let a=-1;for(i&&r.push({type:"text",value:`
`});++a<e.length;)a&&r.push({type:"text",value:`
`}),r.push(e[a]);return i&&e.length>0&&r.push({type:"text",value:`
`}),r}function Hp(e){let i=0,r=e.charCodeAt(i);for(;r===9||r===32;)i++,r=e.charCodeAt(i);return e.slice(i)}function $p(e,i){const r=e_(e,i),a=r.one(e,void 0),s=Hv(r),u=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return s&&u.children.push({type:"text",value:`
`},s),u}function a_(e,i){return e&&"run"in e?async function(r,a){const s=$p(r,{file:a,...i});await e.run(s,a)}:function(r,a){return $p(r,{file:a,...e||i})}}function Gp(e){if(e)throw e}var bu,Kp;function o_(){if(Kp)return bu;Kp=1;var e=Object.prototype.hasOwnProperty,i=Object.prototype.toString,r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=function(p){return typeof Array.isArray=="function"?Array.isArray(p):i.call(p)==="[object Array]"},u=function(p){if(!p||i.call(p)!=="[object Object]")return!1;var h=e.call(p,"constructor"),g=p.constructor&&p.constructor.prototype&&e.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!h&&!g)return!1;var w;for(w in p);return typeof w>"u"||e.call(p,w)},l=function(p,h){r&&h.name==="__proto__"?r(p,h.name,{enumerable:!0,configurable:!0,value:h.newValue,writable:!0}):p[h.name]=h.newValue},c=function(p,h){if(h==="__proto__")if(e.call(p,h)){if(a)return a(p,h).value}else return;return p[h]};return bu=function f(){var p,h,g,w,m,v,S=arguments[0],_=1,k=arguments.length,C=!1;for(typeof S=="boolean"&&(C=S,S=arguments[1]||{},_=2),(S==null||typeof S!="object"&&typeof S!="function")&&(S={});_<k;++_)if(p=arguments[_],p!=null)for(h in p)g=c(S,h),w=c(p,h),S!==w&&(C&&w&&(u(w)||(m=s(w)))?(m?(m=!1,v=g&&s(g)?g:[]):v=g&&u(g)?g:{},l(S,{name:h,newValue:f(C,v,w)})):typeof w<"u"&&l(S,{name:h,newValue:w}));return S},bu}var l_=o_();const Su=Fa(l_);function nc(e){if(typeof e!="object"||e===null)return!1;const i=Object.getPrototypeOf(e);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function s_(){const e=[],i={run:r,use:a};return i;function r(...s){let u=-1;const l=s.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);c(null,...s);function c(f,...p){const h=e[++u];let g=-1;if(f){l(f);return}for(;++g<s.length;)(p[g]===null||p[g]===void 0)&&(p[g]=s[g]);s=p,h?u_(h,c)(...p):l(null,...p)}}function a(s){if(typeof s!="function")throw new TypeError("Expected `middelware` to be a function, not "+s);return e.push(s),i}}function u_(e,i){let r;return a;function a(...l){const c=e.length>l.length;let f;c&&l.push(s);try{f=e.apply(this,l)}catch(p){const h=p;if(c&&r)throw h;return s(h)}c||(f&&f.then&&typeof f.then=="function"?f.then(u,s):f instanceof Error?s(f):u(f))}function s(l,...c){r||(r=!0,i(l,...c))}function u(l){s(null,l)}}const Xt={basename:c_,dirname:d_,extname:f_,join:p_,sep:"/"};function c_(e,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');Wa(e);let r=0,a=-1,s=e.length,u;if(i===void 0||i.length===0||i.length>e.length){for(;s--;)if(e.codePointAt(s)===47){if(u){r=s+1;break}}else a<0&&(u=!0,a=s+1);return a<0?"":e.slice(r,a)}if(i===e)return"";let l=-1,c=i.length-1;for(;s--;)if(e.codePointAt(s)===47){if(u){r=s+1;break}}else l<0&&(u=!0,l=s+1),c>-1&&(e.codePointAt(s)===i.codePointAt(c--)?c<0&&(a=s):(c=-1,a=l));return r===a?a=l:a<0&&(a=e.length),e.slice(r,a)}function d_(e){if(Wa(e),e.length===0)return".";let i=-1,r=e.length,a;for(;--r;)if(e.codePointAt(r)===47){if(a){i=r;break}}else a||(a=!0);return i<0?e.codePointAt(0)===47?"/":".":i===1&&e.codePointAt(0)===47?"//":e.slice(0,i)}function f_(e){Wa(e);let i=e.length,r=-1,a=0,s=-1,u=0,l;for(;i--;){const c=e.codePointAt(i);if(c===47){if(l){a=i+1;break}continue}r<0&&(l=!0,r=i+1),c===46?s<0?s=i:u!==1&&(u=1):s>-1&&(u=-1)}return s<0||r<0||u===0||u===1&&s===r-1&&s===a+1?"":e.slice(s,r)}function p_(...e){let i=-1,r;for(;++i<e.length;)Wa(e[i]),e[i]&&(r=r===void 0?e[i]:r+"/"+e[i]);return r===void 0?".":g_(r)}function g_(e){Wa(e);const i=e.codePointAt(0)===47;let r=h_(e,!i);return r.length===0&&!i&&(r="."),r.length>0&&e.codePointAt(e.length-1)===47&&(r+="/"),i?"/"+r:r}function h_(e,i){let r="",a=0,s=-1,u=0,l=-1,c,f;for(;++l<=e.length;){if(l<e.length)c=e.codePointAt(l);else{if(c===47)break;c=47}if(c===47){if(!(s===l-1||u===1))if(s!==l-1&&u===2){if(r.length<2||a!==2||r.codePointAt(r.length-1)!==46||r.codePointAt(r.length-2)!==46){if(r.length>2){if(f=r.lastIndexOf("/"),f!==r.length-1){f<0?(r="",a=0):(r=r.slice(0,f),a=r.length-1-r.lastIndexOf("/")),s=l,u=0;continue}}else if(r.length>0){r="",a=0,s=l,u=0;continue}}i&&(r=r.length>0?r+"/..":"..",a=2)}else r.length>0?r+="/"+e.slice(s+1,l):r=e.slice(s+1,l),a=l-s-1;s=l,u=0}else c===46&&u>-1?u++:u=-1}return r}function Wa(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const m_={cwd:y_};function y_(){return"/"}function tc(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function w_(e){if(typeof e=="string")e=new URL(e);else if(!tc(e)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(e.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return b_(e)}function b_(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const i=e.pathname;let r=-1;for(;++r<i.length;)if(i.codePointAt(r)===37&&i.codePointAt(r+1)===50){const a=i.codePointAt(r+2);if(a===70||a===102){const s=new TypeError("File URL path must not include encoded / characters");throw s.code="ERR_INVALID_FILE_URL_PATH",s}}return decodeURIComponent(i)}const ku=["history","path","basename","stem","extname","dirname"];class Ch{constructor(i){let r;i?tc(i)?r={path:i}:typeof i=="string"||S_(i)?r={value:i}:r=i:r={},this.cwd="cwd"in r?"":m_.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<ku.length;){const u=ku[a];u in r&&r[u]!==void 0&&r[u]!==null&&(this[u]=u==="history"?[...r[u]]:r[u])}let s;for(s in r)ku.includes(s)||(this[s]=r[s])}get basename(){return typeof this.path=="string"?Xt.basename(this.path):void 0}set basename(i){_u(i,"basename"),vu(i,"basename"),this.path=Xt.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?Xt.dirname(this.path):void 0}set dirname(i){qp(this.basename,"dirname"),this.path=Xt.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?Xt.extname(this.path):void 0}set extname(i){if(vu(i,"extname"),qp(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Xt.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){tc(i)&&(i=w_(i)),_u(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?Xt.basename(this.path,this.extname):void 0}set stem(i){_u(i,"stem"),vu(i,"stem"),this.path=Xt.join(this.dirname||"",i+(this.extname||""))}fail(i,r,a){const s=this.message(i,r,a);throw s.fatal=!0,s}info(i,r,a){const s=this.message(i,r,a);return s.fatal=void 0,s}message(i,r,a){const s=new nt(i,r,a);return this.path&&(s.name=this.path+":"+s.name,s.file=this.path),s.fatal=!1,this.messages.push(s),s}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function vu(e,i){if(e&&e.includes(Xt.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+Xt.sep+"`")}function _u(e,i){if(!e)throw new Error("`"+i+"` cannot be empty")}function qp(e,i){if(!e)throw new Error("Setting `"+i+"` requires `path` to be set too")}function S_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const k_=(function(e){const a=this.constructor.prototype,s=a[e],u=function(){return s.apply(u,arguments)};return Object.setPrototypeOf(u,a),u}),v_={}.hasOwnProperty;class vc extends k_{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=s_()}copy(){const i=new vc;let r=-1;for(;++r<this.attachers.length;){const a=this.attachers[r];i.use(...a)}return i.data(Su(!0,{},this.namespace)),i}data(i,r){return typeof i=="string"?arguments.length===2?(Tu("data",this.frozen),this.namespace[i]=r,this):v_.call(this.namespace,i)&&this.namespace[i]||void 0:i?(Tu("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[r,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const s=r.call(i,...a);typeof s=="function"&&this.transformers.use(s)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const r=tl(i),a=this.parser||this.Parser;return xu("parse",a),a(String(r),r)}process(i,r){const a=this;return this.freeze(),xu("process",this.parser||this.Parser),Eu("process",this.compiler||this.Compiler),r?s(void 0,r):new Promise(s);function s(u,l){const c=tl(i),f=a.parse(c);a.run(f,c,function(h,g,w){if(h||!g||!w)return p(h);const m=g,v=a.stringify(m,w);E_(v)?w.value=v:w.result=v,p(h,w)});function p(h,g){h||!g?l(h):u?u(g):r(void 0,g)}}}processSync(i){let r=!1,a;return this.freeze(),xu("processSync",this.parser||this.Parser),Eu("processSync",this.compiler||this.Compiler),this.process(i,s),Jp("processSync","process",r),a;function s(u,l){r=!0,Gp(u),a=l}}run(i,r,a){Yp(i),this.freeze();const s=this.transformers;return!a&&typeof r=="function"&&(a=r,r=void 0),a?u(void 0,a):new Promise(u);function u(l,c){const f=tl(r);s.run(i,f,p);function p(h,g,w){const m=g||i;h?c(h):l?l(m):a(void 0,m,w)}}}runSync(i,r){let a=!1,s;return this.run(i,r,u),Jp("runSync","run",a),s;function u(l,c){Gp(l),s=c,a=!0}}stringify(i,r){this.freeze();const a=tl(r),s=this.compiler||this.Compiler;return Eu("stringify",s),Yp(i),s(i,a)}use(i,...r){const a=this.attachers,s=this.namespace;if(Tu("use",this.frozen),i!=null)if(typeof i=="function")f(i,r);else if(typeof i=="object")Array.isArray(i)?c(i):l(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function u(p){if(typeof p=="function")f(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[h,...g]=p;f(h,g)}else l(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function l(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(p.plugins),p.settings&&(s.settings=Su(!0,s.settings,p.settings))}function c(p){let h=-1;if(p!=null)if(Array.isArray(p))for(;++h<p.length;){const g=p[h];u(g)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function f(p,h){let g=-1,w=-1;for(;++g<a.length;)if(a[g][0]===p){w=g;break}if(w===-1)a.push([p,...h]);else if(h.length>0){let[m,...v]=h;const S=a[w][1];nc(S)&&nc(m)&&(m=Su(!0,S,m)),a[w]=[p,m,...v]}}}}const __=new vc().freeze();function xu(e,i){if(typeof i!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Eu(e,i){if(typeof i!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Tu(e,i){if(i)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Yp(e){if(!nc(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Jp(e,i,r){if(!r)throw new Error("`"+e+"` finished async. Use `"+i+"` instead")}function tl(e){return x_(e)?e:new Ch(e)}function x_(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function E_(e){return typeof e=="string"||T_(e)}function T_(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const C_="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Zp=[],Xp={allowDangerousHtml:!0},I_=/^(https?|ircs?|mailto|xmpp)$/i,A_=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function L_(e){const i=M_(e),r=O_(e);return N_(i.runSync(i.parse(r),r),e)}function M_(e){const i=e.rehypePlugins||Zp,r=e.remarkPlugins||Zp,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Xp}:Xp;return __().use(cv).use(r).use(a_,a).use(i)}function O_(e){const i=e.children||"",r=new Ch;return typeof i=="string"&&(r.value=i),r}function N_(e,i){const r=i.allowedElements,a=i.allowElement,s=i.components,u=i.disallowedElements,l=i.skipHtml,c=i.unwrapDisallowed,f=i.urlTransform||R_;for(const h of A_)Object.hasOwn(i,h.from)&&(""+h.from+(h.to?"use `"+h.to+"` instead":"remove it")+C_+h.id,void 0);return Tl(e,p),K0(e,{Fragment:ae.Fragment,components:s,ignoreInvalidStyle:!0,jsx:ae.jsx,jsxs:ae.jsxs,passKeys:!0,passNode:!0});function p(h,g,w){if(h.type==="raw"&&w&&typeof g=="number")return l?w.children.splice(g,1):w.children[g]={type:"text",value:h.value},g;if(h.type==="element"){let m;for(m in mu)if(Object.hasOwn(mu,m)&&Object.hasOwn(h.properties,m)){const v=h.properties[m],S=mu[m];(S===null||S.includes(h.tagName))&&(h.properties[m]=f(String(v||""),m,h))}}if(h.type==="element"){let m=r?!r.includes(h.tagName):u?u.includes(h.tagName):!1;if(!m&&a&&typeof g=="number"&&(m=!a(h,g,w)),m&&w&&typeof g=="number")return c&&h.children?w.children.splice(g,1,...h.children):w.children.splice(g,1),g}}}function R_(e){const i=e.indexOf(":"),r=e.indexOf("?"),a=e.indexOf("#"),s=e.indexOf("/");return i===-1||s!==-1&&i>s||r!==-1&&i>r||a!==-1&&i>a||I_.test(e.slice(0,i))?e:""}function Qp(e,i){const r=String(e);if(typeof i!="string")throw new TypeError("Expected character");let a=0,s=r.indexOf(i);for(;s!==-1;)a++,s=r.indexOf(i,s+i.length);return a}function P_(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function D_(e,i,r){const s=Va((r||{}).ignore||[]),u=B_(i);let l=-1;for(;++l<u.length;)Th(e,"text",c);function c(p,h){let g=-1,w;for(;++g<h.length;){const m=h[g],v=w?w.children:void 0;if(s(m,v?v.indexOf(m):void 0,w))return;w=m}if(w)return f(p,h)}function f(p,h){const g=h[h.length-1],w=u[l][0],m=u[l][1];let v=0;const _=g.children.indexOf(p);let k=!1,C=[];w.lastIndex=0;let I=w.exec(p.value);for(;I;){const D=I.index,B={index:I.index,input:I.input,stack:[...h,p]};let R=m(...I,B);if(typeof R=="string"&&(R=R.length>0?{type:"text",value:R}:void 0),R===!1?w.lastIndex=D+1:(v!==D&&C.push({type:"text",value:p.value.slice(v,D)}),Array.isArray(R)?C.push(...R):R&&C.push(R),v=D+I[0].length,k=!0),!w.global)break;I=w.exec(p.value)}return k?(v<p.value.length&&C.push({type:"text",value:p.value.slice(v)}),g.children.splice(_,1,...C)):C=[p],_+C.length}}function B_(e){const i=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const r=!e[0]||Array.isArray(e[0])?e:[e];let a=-1;for(;++a<r.length;){const s=r[a];i.push([F_(s[0]),z_(s[1])])}return i}function F_(e){return typeof e=="string"?new RegExp(P_(e),"g"):e}function z_(e){return typeof e=="function"?e:function(){return e}}const Cu="phrasing",Iu=["autolink","link","image","label"];function U_(){return{transforms:[K_],enter:{literalAutolink:V_,literalAutolinkEmail:Au,literalAutolinkHttp:Au,literalAutolinkWww:Au},exit:{literalAutolink:G_,literalAutolinkEmail:$_,literalAutolinkHttp:W_,literalAutolinkWww:H_}}}function j_(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Cu,notInConstruct:Iu},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Cu,notInConstruct:Iu},{character:":",before:"[ps]",after:"\\/",inConstruct:Cu,notInConstruct:Iu}]}}function V_(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Au(e){this.config.enter.autolinkProtocol.call(this,e)}function W_(e){this.config.exit.autolinkProtocol.call(this,e)}function H_(e){this.config.exit.data.call(this,e);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(e)}function $_(e){this.config.exit.autolinkEmail.call(this,e)}function G_(e){this.exit(e)}function K_(e){D_(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,q_],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Y_]],{ignore:["link","linkReference"]})}function q_(e,i,r,a,s){let u="";if(!Ih(s)||(/^w/i.test(i)&&(r=i+r,i="",u="http://"),!J_(r)))return!1;const l=Z_(r+a);if(!l[0])return!1;const c={type:"link",title:null,url:u+i+l[0],children:[{type:"text",value:i+l[0]}]};return l[1]?[c,{type:"text",value:l[1]}]:c}function Y_(e,i,r,a){return!Ih(a,!0)||/[-\d_]$/.test(r)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+r,children:[{type:"text",value:i+"@"+r}]}}function J_(e){const i=e.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function Z_(e){const i=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!i)return[e,void 0];e=e.slice(0,i.index);let r=i[0],a=r.indexOf(")");const s=Qp(e,"(");let u=Qp(e,")");for(;a!==-1&&s>u;)e+=r.slice(0,a+1),r=r.slice(a+1),a=r.indexOf(")"),u++;return[e,r]}function Ih(e,i){const r=e.input.charCodeAt(e.index-1);return(e.index===0||ii(r)||vl(r))&&(!i||r!==47)}Ah.peek=ox;function X_(){this.buffer()}function Q_(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function ex(){this.buffer()}function nx(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function tx(e){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=Wt(this.sliceSerialize(e)).toLowerCase(),r.label=i}function rx(e){this.exit(e)}function ix(e){const i=this.resume(),r=this.stack[this.stack.length-1];r.type,r.identifier=Wt(this.sliceSerialize(e)).toLowerCase(),r.label=i}function ax(e){this.exit(e)}function ox(){return"["}function Ah(e,i,r,a){const s=r.createTracker(a);let u=s.move("[^");const l=r.enter("footnoteReference"),c=r.enter("reference");return u+=s.move(r.safe(r.associationId(e),{after:"]",before:u})),c(),l(),u+=s.move("]"),u}function lx(){return{enter:{gfmFootnoteCallString:X_,gfmFootnoteCall:Q_,gfmFootnoteDefinitionLabelString:ex,gfmFootnoteDefinition:nx},exit:{gfmFootnoteCallString:tx,gfmFootnoteCall:rx,gfmFootnoteDefinitionLabelString:ix,gfmFootnoteDefinition:ax}}}function sx(e){let i=!1;return e&&e.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:r,footnoteReference:Ah},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function r(a,s,u,l){const c=u.createTracker(l);let f=c.move("[^");const p=u.enter("footnoteDefinition"),h=u.enter("label");return f+=c.move(u.safe(u.associationId(a),{before:f,after:"]"})),h(),f+=c.move("]:"),a.children&&a.children.length>0&&(c.shift(4),f+=c.move((i?`
`:" ")+u.indentLines(u.containerFlow(a,c.current()),i?Lh:ux))),p(),f}}function ux(e,i,r){return i===0?e:Lh(e,i,r)}function Lh(e,i,r){return(r?"":"    ")+e}const cx=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Mh.peek=hx;function dx(){return{canContainEols:["delete"],enter:{strikethrough:px},exit:{strikethrough:gx}}}function fx(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:cx}],handlers:{delete:Mh}}}function px(e){this.enter({type:"delete",children:[]},e)}function gx(e){this.exit(e)}function Mh(e,i,r,a){const s=r.createTracker(a),u=r.enter("strikethrough");let l=s.move("~~");return l+=r.containerPhrasing(e,{...s.current(),before:l,after:"~"}),l+=s.move("~~"),u(),l}function hx(){return"~"}function mx(e){return e.length}function yx(e,i){const r=i||{},a=(r.align||[]).concat(),s=r.stringLength||mx,u=[],l=[],c=[],f=[];let p=0,h=-1;for(;++h<e.length;){const S=[],_=[];let k=-1;for(e[h].length>p&&(p=e[h].length);++k<e[h].length;){const C=wx(e[h][k]);if(r.alignDelimiters!==!1){const I=s(C);_[k]=I,(f[k]===void 0||I>f[k])&&(f[k]=I)}S.push(C)}l[h]=S,c[h]=_}let g=-1;if(typeof a=="object"&&"length"in a)for(;++g<p;)u[g]=eg(a[g]);else{const S=eg(a);for(;++g<p;)u[g]=S}g=-1;const w=[],m=[];for(;++g<p;){const S=u[g];let _="",k="";S===99?(_=":",k=":"):S===108?_=":":S===114&&(k=":");let C=r.alignDelimiters===!1?1:Math.max(1,f[g]-_.length-k.length);const I=_+"-".repeat(C)+k;r.alignDelimiters!==!1&&(C=_.length+C+k.length,C>f[g]&&(f[g]=C),m[g]=C),w[g]=I}l.splice(1,0,w),c.splice(1,0,m),h=-1;const v=[];for(;++h<l.length;){const S=l[h],_=c[h];g=-1;const k=[];for(;++g<p;){const C=S[g]||"";let I="",D="";if(r.alignDelimiters!==!1){const B=f[g]-(_[g]||0),R=u[g];R===114?I=" ".repeat(B):R===99?B%2?(I=" ".repeat(B/2+.5),D=" ".repeat(B/2-.5)):(I=" ".repeat(B/2),D=I):D=" ".repeat(B)}r.delimiterStart!==!1&&!g&&k.push("|"),r.padding!==!1&&!(r.alignDelimiters===!1&&C==="")&&(r.delimiterStart!==!1||g)&&k.push(" "),r.alignDelimiters!==!1&&k.push(I),k.push(C),r.alignDelimiters!==!1&&k.push(D),r.padding!==!1&&k.push(" "),(r.delimiterEnd!==!1||g!==p-1)&&k.push("|")}v.push(r.delimiterEnd===!1?k.join("").replace(/ +$/,""):k.join(""))}return v.join(`
`)}function wx(e){return e==null?"":String(e)}function eg(e){const i=typeof e=="string"?e.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function bx(e,i,r,a){const s=r.enter("blockquote"),u=r.createTracker(a);u.move("> "),u.shift(2);const l=r.indentLines(r.containerFlow(e,u.current()),Sx);return s(),l}function Sx(e,i,r){return">"+(r?"":" ")+e}function kx(e,i){return ng(e,i.inConstruct,!0)&&!ng(e,i.notInConstruct,!1)}function ng(e,i,r){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return r;let a=-1;for(;++a<i.length;)if(e.includes(i[a]))return!0;return!1}function tg(e,i,r,a){let s=-1;for(;++s<r.unsafe.length;)if(r.unsafe[s].character===`
`&&kx(r.stack,r.unsafe[s]))return/[ \t]/.test(a.before)?"":" ";return`\\
`}function vx(e,i){const r=String(e);let a=r.indexOf(i),s=a,u=0,l=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;a!==-1;)a===s?++u>l&&(l=u):u=1,s=a+i.length,a=r.indexOf(i,s);return l}function _x(e,i){return!!(i.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function xx(e){const i=e.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function Ex(e,i,r,a){const s=xx(r),u=e.value||"",l=s==="`"?"GraveAccent":"Tilde";if(_x(e,r)){const g=r.enter("codeIndented"),w=r.indentLines(u,Tx);return g(),w}const c=r.createTracker(a),f=s.repeat(Math.max(vx(u,s)+1,3)),p=r.enter("codeFenced");let h=c.move(f);if(e.lang){const g=r.enter(`codeFencedLang${l}`);h+=c.move(r.safe(e.lang,{before:h,after:" ",encode:["`"],...c.current()})),g()}if(e.lang&&e.meta){const g=r.enter(`codeFencedMeta${l}`);h+=c.move(" "),h+=c.move(r.safe(e.meta,{before:h,after:`
`,encode:["`"],...c.current()})),g()}return h+=c.move(`
`),u&&(h+=c.move(u+`
`)),h+=c.move(f),p(),h}function Tx(e,i,r){return(r?"":"    ")+e}function _c(e){const i=e.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function Cx(e,i,r,a){const s=_c(r),u=s==='"'?"Quote":"Apostrophe",l=r.enter("definition");let c=r.enter("label");const f=r.createTracker(a);let p=f.move("[");return p+=f.move(r.safe(r.associationId(e),{before:p,after:"]",...f.current()})),p+=f.move("]: "),c(),!e.url||/[\0- \u007F]/.test(e.url)?(c=r.enter("destinationLiteral"),p+=f.move("<"),p+=f.move(r.safe(e.url,{before:p,after:">",...f.current()})),p+=f.move(">")):(c=r.enter("destinationRaw"),p+=f.move(r.safe(e.url,{before:p,after:e.title?" ":`
`,...f.current()}))),c(),e.title&&(c=r.enter(`title${u}`),p+=f.move(" "+s),p+=f.move(r.safe(e.title,{before:p,after:s,...f.current()})),p+=f.move(s),c()),l(),p}function Ix(e){const i=e.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function Ba(e){return"&#x"+e.toString(16).toUpperCase()+";"}function ml(e,i,r){const a=Ui(e),s=Ui(i);return a===void 0?s===void 0?r==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:a===1?s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:s===void 0?{inside:!1,outside:!1}:s===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Oh.peek=Ax;function Oh(e,i,r,a){const s=Ix(r),u=r.enter("emphasis"),l=r.createTracker(a),c=l.move(s);let f=l.move(r.containerPhrasing(e,{after:s,before:c,...l.current()}));const p=f.charCodeAt(0),h=ml(a.before.charCodeAt(a.before.length-1),p,s);h.inside&&(f=Ba(p)+f.slice(1));const g=f.charCodeAt(f.length-1),w=ml(a.after.charCodeAt(0),g,s);w.inside&&(f=f.slice(0,-1)+Ba(g));const m=l.move(s);return u(),r.attentionEncodeSurroundingInfo={after:w.outside,before:h.outside},c+f+m}function Ax(e,i,r){return r.options.emphasis||"*"}function Lx(e,i){let r=!1;return Tl(e,function(a){if("value"in a&&/\r?\n|\r/.test(a.value)||a.type==="break")return r=!0,Qu}),!!((!e.depth||e.depth<3)&&hc(e)&&(i.options.setext||r))}function Mx(e,i,r,a){const s=Math.max(Math.min(6,e.depth||1),1),u=r.createTracker(a);if(Lx(e,r)){const h=r.enter("headingSetext"),g=r.enter("phrasing"),w=r.containerPhrasing(e,{...u.current(),before:`
`,after:`
`});return g(),h(),w+`
`+(s===1?"=":"-").repeat(w.length-(Math.max(w.lastIndexOf("\r"),w.lastIndexOf(`
`))+1))}const l="#".repeat(s),c=r.enter("headingAtx"),f=r.enter("phrasing");u.move(l+" ");let p=r.containerPhrasing(e,{before:"# ",after:`
`,...u.current()});return/^[\t ]/.test(p)&&(p=Ba(p.charCodeAt(0))+p.slice(1)),p=p?l+" "+p:l,r.options.closeAtx&&(p+=" "+l),f(),c(),p}Nh.peek=Ox;function Nh(e){return e.value||""}function Ox(){return"<"}Rh.peek=Nx;function Rh(e,i,r,a){const s=_c(r),u=s==='"'?"Quote":"Apostrophe",l=r.enter("image");let c=r.enter("label");const f=r.createTracker(a);let p=f.move("![");return p+=f.move(r.safe(e.alt,{before:p,after:"]",...f.current()})),p+=f.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=r.enter("destinationLiteral"),p+=f.move("<"),p+=f.move(r.safe(e.url,{before:p,after:">",...f.current()})),p+=f.move(">")):(c=r.enter("destinationRaw"),p+=f.move(r.safe(e.url,{before:p,after:e.title?" ":")",...f.current()}))),c(),e.title&&(c=r.enter(`title${u}`),p+=f.move(" "+s),p+=f.move(r.safe(e.title,{before:p,after:s,...f.current()})),p+=f.move(s),c()),p+=f.move(")"),l(),p}function Nx(){return"!"}Ph.peek=Rx;function Ph(e,i,r,a){const s=e.referenceType,u=r.enter("imageReference");let l=r.enter("label");const c=r.createTracker(a);let f=c.move("![");const p=r.safe(e.alt,{before:f,after:"]",...c.current()});f+=c.move(p+"]["),l();const h=r.stack;r.stack=[],l=r.enter("reference");const g=r.safe(r.associationId(e),{before:f,after:"]",...c.current()});return l(),r.stack=h,u(),s==="full"||!p||p!==g?f+=c.move(g+"]"):s==="shortcut"?f=f.slice(0,-1):f+=c.move("]"),f}function Rx(){return"!"}Dh.peek=Px;function Dh(e,i,r){let a=e.value||"",s="`",u=-1;for(;new RegExp("(^|[^`])"+s+"([^`]|$)").test(a);)s+="`";for(/[^ \r\n]/.test(a)&&(/^[ \r\n]/.test(a)&&/[ \r\n]$/.test(a)||/^`|`$/.test(a))&&(a=" "+a+" ");++u<r.unsafe.length;){const l=r.unsafe[u],c=r.compilePattern(l);let f;if(l.atBreak)for(;f=c.exec(a);){let p=f.index;a.charCodeAt(p)===10&&a.charCodeAt(p-1)===13&&p--,a=a.slice(0,p)+" "+a.slice(f.index+1)}}return s+a+s}function Px(){return"`"}function Bh(e,i){const r=hc(e);return!!(!i.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(r===e.url||"mailto:"+r===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Fh.peek=Dx;function Fh(e,i,r,a){const s=_c(r),u=s==='"'?"Quote":"Apostrophe",l=r.createTracker(a);let c,f;if(Bh(e,r)){const h=r.stack;r.stack=[],c=r.enter("autolink");let g=l.move("<");return g+=l.move(r.containerPhrasing(e,{before:g,after:">",...l.current()})),g+=l.move(">"),c(),r.stack=h,g}c=r.enter("link"),f=r.enter("label");let p=l.move("[");return p+=l.move(r.containerPhrasing(e,{before:p,after:"](",...l.current()})),p+=l.move("]("),f(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(f=r.enter("destinationLiteral"),p+=l.move("<"),p+=l.move(r.safe(e.url,{before:p,after:">",...l.current()})),p+=l.move(">")):(f=r.enter("destinationRaw"),p+=l.move(r.safe(e.url,{before:p,after:e.title?" ":")",...l.current()}))),f(),e.title&&(f=r.enter(`title${u}`),p+=l.move(" "+s),p+=l.move(r.safe(e.title,{before:p,after:s,...l.current()})),p+=l.move(s),f()),p+=l.move(")"),c(),p}function Dx(e,i,r){return Bh(e,r)?"<":"["}zh.peek=Bx;function zh(e,i,r,a){const s=e.referenceType,u=r.enter("linkReference");let l=r.enter("label");const c=r.createTracker(a);let f=c.move("[");const p=r.containerPhrasing(e,{before:f,after:"]",...c.current()});f+=c.move(p+"]["),l();const h=r.stack;r.stack=[],l=r.enter("reference");const g=r.safe(r.associationId(e),{before:f,after:"]",...c.current()});return l(),r.stack=h,u(),s==="full"||!p||p!==g?f+=c.move(g+"]"):s==="shortcut"?f=f.slice(0,-1):f+=c.move("]"),f}function Bx(){return"["}function xc(e){const i=e.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function Fx(e){const i=xc(e),r=e.options.bulletOther;if(!r)return i==="*"?"-":"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(r===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+r+"`) to be different");return r}function zx(e){const i=e.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function Uh(e){const i=e.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function Ux(e,i,r,a){const s=r.enter("list"),u=r.bulletCurrent;let l=e.ordered?zx(r):xc(r);const c=e.ordered?l==="."?")":".":Fx(r);let f=i&&r.bulletLastUsed?l===r.bulletLastUsed:!1;if(!e.ordered){const h=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&h&&(!h.children||!h.children[0])&&r.stack[r.stack.length-1]==="list"&&r.stack[r.stack.length-2]==="listItem"&&r.stack[r.stack.length-3]==="list"&&r.stack[r.stack.length-4]==="listItem"&&r.indexStack[r.indexStack.length-1]===0&&r.indexStack[r.indexStack.length-2]===0&&r.indexStack[r.indexStack.length-3]===0&&(f=!0),Uh(r)===l&&h){let g=-1;for(;++g<e.children.length;){const w=e.children[g];if(w&&w.type==="listItem"&&w.children&&w.children[0]&&w.children[0].type==="thematicBreak"){f=!0;break}}}}f&&(l=c),r.bulletCurrent=l;const p=r.containerFlow(e,a);return r.bulletLastUsed=l,r.bulletCurrent=u,s(),p}function jx(e){const i=e.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function Vx(e,i,r,a){const s=jx(r);let u=r.bulletCurrent||xc(r);i&&i.type==="list"&&i.ordered&&(u=(typeof i.start=="number"&&i.start>-1?i.start:1)+(r.options.incrementListMarker===!1?0:i.children.indexOf(e))+u);let l=u.length+1;(s==="tab"||s==="mixed"&&(i&&i.type==="list"&&i.spread||e.spread))&&(l=Math.ceil(l/4)*4);const c=r.createTracker(a);c.move(u+" ".repeat(l-u.length)),c.shift(l);const f=r.enter("listItem"),p=r.indentLines(r.containerFlow(e,c.current()),h);return f(),p;function h(g,w,m){return w?(m?"":" ".repeat(l))+g:(m?u:u+" ".repeat(l-u.length))+g}}function Wx(e,i,r,a){const s=r.enter("paragraph"),u=r.enter("phrasing"),l=r.containerPhrasing(e,a);return u(),s(),l}const Hx=Va(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function $x(e,i,r,a){return(e.children.some(function(l){return Hx(l)})?r.containerPhrasing:r.containerFlow).call(r,e,a)}function Gx(e){const i=e.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}jh.peek=Kx;function jh(e,i,r,a){const s=Gx(r),u=r.enter("strong"),l=r.createTracker(a),c=l.move(s+s);let f=l.move(r.containerPhrasing(e,{after:s,before:c,...l.current()}));const p=f.charCodeAt(0),h=ml(a.before.charCodeAt(a.before.length-1),p,s);h.inside&&(f=Ba(p)+f.slice(1));const g=f.charCodeAt(f.length-1),w=ml(a.after.charCodeAt(0),g,s);w.inside&&(f=f.slice(0,-1)+Ba(g));const m=l.move(s+s);return u(),r.attentionEncodeSurroundingInfo={after:w.outside,before:h.outside},c+f+m}function Kx(e,i,r){return r.options.strong||"*"}function qx(e,i,r,a){return r.safe(e.value,a)}function Yx(e){const i=e.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function Jx(e,i,r){const a=(Uh(r)+(r.options.ruleSpaces?" ":"")).repeat(Yx(r));return r.options.ruleSpaces?a.slice(0,-1):a}const Vh={blockquote:bx,break:tg,code:Ex,definition:Cx,emphasis:Oh,hardBreak:tg,heading:Mx,html:Nh,image:Rh,imageReference:Ph,inlineCode:Dh,link:Fh,linkReference:zh,list:Ux,listItem:Vx,paragraph:Wx,root:$x,strong:jh,text:qx,thematicBreak:Jx};function Zx(){return{enter:{table:Xx,tableData:rg,tableHeader:rg,tableRow:eE},exit:{codeText:nE,table:Qx,tableData:Lu,tableHeader:Lu,tableRow:Lu}}}function Xx(e){const i=e._align;this.enter({type:"table",align:i.map(function(r){return r==="none"?null:r}),children:[]},e),this.data.inTable=!0}function Qx(e){this.exit(e),this.data.inTable=void 0}function eE(e){this.enter({type:"tableRow",children:[]},e)}function Lu(e){this.exit(e)}function rg(e){this.enter({type:"tableCell",children:[]},e)}function nE(e){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,tE));const r=this.stack[this.stack.length-1];r.type,r.value=i,this.exit(e)}function tE(e,i){return i==="|"?i:e}function rE(e){const i=e||{},r=i.tableCellPadding,a=i.tablePipeAlign,s=i.stringLength,u=r?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:w,table:l,tableCell:f,tableRow:c}};function l(m,v,S,_){return p(h(m,S,_),m.align)}function c(m,v,S,_){const k=g(m,S,_),C=p([k]);return C.slice(0,C.indexOf(`
`))}function f(m,v,S,_){const k=S.enter("tableCell"),C=S.enter("phrasing"),I=S.containerPhrasing(m,{..._,before:u,after:u});return C(),k(),I}function p(m,v){return yx(m,{align:v,alignDelimiters:a,padding:r,stringLength:s})}function h(m,v,S){const _=m.children;let k=-1;const C=[],I=v.enter("table");for(;++k<_.length;)C[k]=g(_[k],v,S);return I(),C}function g(m,v,S){const _=m.children;let k=-1;const C=[],I=v.enter("tableRow");for(;++k<_.length;)C[k]=f(_[k],m,v,S);return I(),C}function w(m,v,S){let _=Vh.inlineCode(m,v,S);return S.stack.includes("tableCell")&&(_=_.replace(/\|/g,"\\$&")),_}}function iE(){return{exit:{taskListCheckValueChecked:ig,taskListCheckValueUnchecked:ig,paragraph:oE}}}function aE(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:lE}}}function ig(e){const i=this.stack[this.stack.length-2];i.type,i.checked=e.type==="taskListCheckValueChecked"}function oE(e){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const r=this.stack[this.stack.length-1];r.type;const a=r.children[0];if(a&&a.type==="text"){const s=i.children;let u=-1,l;for(;++u<s.length;){const c=s[u];if(c.type==="paragraph"){l=c;break}}l===r&&(a.value=a.value.slice(1),a.value.length===0?r.children.shift():r.position&&a.position&&typeof a.position.start.offset=="number"&&(a.position.start.column++,a.position.start.offset++,r.position.start=Object.assign({},a.position.start)))}}this.exit(e)}function lE(e,i,r,a){const s=e.children[0],u=typeof e.checked=="boolean"&&s&&s.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",c=r.createTracker(a);u&&c.move(l);let f=Vh.listItem(e,i,r,{...a,...c.current()});return u&&(f=f.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),f;function p(h){return h+l}}function sE(){return[U_(),lx(),dx(),Zx(),iE()]}function uE(e){return{extensions:[j_(),sx(e),fx(),rE(e),aE()]}}const cE={tokenize:mE,partial:!0},Wh={tokenize:yE,partial:!0},Hh={tokenize:wE,partial:!0},$h={tokenize:bE,partial:!0},dE={tokenize:SE,partial:!0},Gh={name:"wwwAutolink",tokenize:gE,previous:qh},Kh={name:"protocolAutolink",tokenize:hE,previous:Yh},ur={name:"emailAutolink",tokenize:pE,previous:Jh},Qt={};function fE(){return{text:Qt}}let ri=48;for(;ri<123;)Qt[ri]=ur,ri++,ri===58?ri=65:ri===91&&(ri=97);Qt[43]=ur;Qt[45]=ur;Qt[46]=ur;Qt[95]=ur;Qt[72]=[ur,Kh];Qt[104]=[ur,Kh];Qt[87]=[ur,Gh];Qt[119]=[ur,Gh];function pE(e,i,r){const a=this;let s,u;return l;function l(g){return!rc(g)||!Jh.call(a,a.previous)||Ec(a.events)?r(g):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),c(g))}function c(g){return rc(g)?(e.consume(g),c):g===64?(e.consume(g),f):r(g)}function f(g){return g===46?e.check(dE,h,p)(g):g===45||g===95||et(g)?(u=!0,e.consume(g),f):h(g)}function p(g){return e.consume(g),s=!0,f}function h(g){return u&&s&&ut(a.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),i(g)):r(g)}}function gE(e,i,r){const a=this;return s;function s(l){return l!==87&&l!==119||!qh.call(a,a.previous)||Ec(a.events)?r(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(cE,e.attempt(Wh,e.attempt(Hh,u),r),r)(l))}function u(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),i(l)}}function hE(e,i,r){const a=this;let s="",u=!1;return l;function l(g){return(g===72||g===104)&&Yh.call(a,a.previous)&&!Ec(a.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),s+=String.fromCodePoint(g),e.consume(g),c):r(g)}function c(g){if(ut(g)&&s.length<5)return s+=String.fromCodePoint(g),e.consume(g),c;if(g===58){const w=s.toLowerCase();if(w==="http"||w==="https")return e.consume(g),f}return r(g)}function f(g){return g===47?(e.consume(g),u?p:(u=!0,f)):r(g)}function p(g){return g===null||pl(g)||hn(g)||ii(g)||vl(g)?r(g):e.attempt(Wh,e.attempt(Hh,h),r)(g)}function h(g){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),i(g)}}function mE(e,i,r){let a=0;return s;function s(l){return(l===87||l===119)&&a<3?(a++,e.consume(l),s):l===46&&a===3?(e.consume(l),u):r(l)}function u(l){return l===null?r(l):i(l)}}function yE(e,i,r){let a,s,u;return l;function l(p){return p===46||p===95?e.check($h,f,c)(p):p===null||hn(p)||ii(p)||p!==45&&vl(p)?f(p):(u=!0,e.consume(p),l)}function c(p){return p===95?a=!0:(s=a,a=void 0),e.consume(p),l}function f(p){return s||a||!u?r(p):i(p)}}function wE(e,i){let r=0,a=0;return s;function s(l){return l===40?(r++,e.consume(l),s):l===41&&a<r?u(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check($h,i,u)(l):l===null||hn(l)||ii(l)?i(l):(e.consume(l),s)}function u(l){return l===41&&a++,e.consume(l),s}}function bE(e,i,r){return a;function a(c){return c===33||c===34||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===63||c===95||c===126?(e.consume(c),a):c===38?(e.consume(c),u):c===93?(e.consume(c),s):c===60||c===null||hn(c)||ii(c)?i(c):r(c)}function s(c){return c===null||c===40||c===91||hn(c)||ii(c)?i(c):a(c)}function u(c){return ut(c)?l(c):r(c)}function l(c){return c===59?(e.consume(c),a):ut(c)?(e.consume(c),l):r(c)}}function SE(e,i,r){return a;function a(u){return e.consume(u),s}function s(u){return et(u)?r(u):i(u)}}function qh(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||hn(e)}function Yh(e){return!ut(e)}function Jh(e){return!(e===47||rc(e))}function rc(e){return e===43||e===45||e===46||e===95||et(e)}function Ec(e){let i=e.length,r=!1;for(;i--;){const a=e[i][1];if((a.type==="labelLink"||a.type==="labelImage")&&!a._balanced){r=!0;break}if(a._gfmAutolinkLiteralWalkedInto){r=!1;break}}return e.length>0&&!r&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),r}const kE={tokenize:AE,partial:!0};function vE(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:TE,continuation:{tokenize:CE},exit:IE}},text:{91:{name:"gfmFootnoteCall",tokenize:EE},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:_E,resolveTo:xE}}}}function _E(e,i,r){const a=this;let s=a.events.length;const u=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let l;for(;s--;){const f=a.events[s][1];if(f.type==="labelImage"){l=f;break}if(f.type==="gfmFootnoteCall"||f.type==="labelLink"||f.type==="label"||f.type==="image"||f.type==="link")break}return c;function c(f){if(!l||!l._balanced)return r(f);const p=Wt(a.sliceSerialize({start:l.end,end:a.now()}));return p.codePointAt(0)!==94||!u.includes(p.slice(1))?r(f):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(f),e.exit("gfmFootnoteCallLabelMarker"),i(f))}}function xE(e,i){let r=e.length;for(;r--;)if(e[r][1].type==="labelImage"&&e[r][0]==="enter"){e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const a={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},s={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};s.end.column++,s.end.offset++,s.end._bufferIndex++;const u={type:"gfmFootnoteCallString",start:Object.assign({},s.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},u.start),end:Object.assign({},u.end)},c=[e[r+1],e[r+2],["enter",a,i],e[r+3],e[r+4],["enter",s,i],["exit",s,i],["enter",u,i],["enter",l,i],["exit",l,i],["exit",u,i],e[e.length-2],e[e.length-1],["exit",a,i]];return e.splice(r,e.length-r+1,...c),e}function EE(e,i,r){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u=0,l;return c;function c(g){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),f}function f(g){return g!==94?r(g):(e.enter("gfmFootnoteCallMarker"),e.consume(g),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(g){if(u>999||g===93&&!l||g===null||g===91||hn(g))return r(g);if(g===93){e.exit("chunkString");const w=e.exit("gfmFootnoteCallString");return s.includes(Wt(a.sliceSerialize(w)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(g),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),i):r(g)}return hn(g)||(l=!0),u++,e.consume(g),g===92?h:p}function h(g){return g===91||g===92||g===93?(e.consume(g),u++,p):p(g)}}function TE(e,i,r){const a=this,s=a.parser.gfmFootnotes||(a.parser.gfmFootnotes=[]);let u,l=0,c;return f;function f(v){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(v){return v===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",h):r(v)}function h(v){if(l>999||v===93&&!c||v===null||v===91||hn(v))return r(v);if(v===93){e.exit("chunkString");const S=e.exit("gfmFootnoteDefinitionLabelString");return u=Wt(a.sliceSerialize(S)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(v),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),w}return hn(v)||(c=!0),l++,e.consume(v),v===92?g:h}function g(v){return v===91||v===92||v===93?(e.consume(v),l++,h):h(v)}function w(v){return v===58?(e.enter("definitionMarker"),e.consume(v),e.exit("definitionMarker"),s.includes(u)||s.push(u),ln(e,m,"gfmFootnoteDefinitionWhitespace")):r(v)}function m(v){return i(v)}}function CE(e,i,r){return e.check(ja,i,e.attempt(kE,i,r))}function IE(e){e.exit("gfmFootnoteDefinition")}function AE(e,i,r){const a=this;return ln(e,s,"gfmFootnoteDefinitionIndent",5);function s(u){const l=a.events[a.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?i(u):r(u)}}function LE(e){let r=(e||{}).singleTilde;const a={name:"strikethrough",tokenize:u,resolveAll:s};return r==null&&(r=!0),{text:{126:a},insideSpan:{null:[a]},attentionMarkers:{null:[126]}};function s(l,c){let f=-1;for(;++f<l.length;)if(l[f][0]==="enter"&&l[f][1].type==="strikethroughSequenceTemporary"&&l[f][1]._close){let p=f;for(;p--;)if(l[p][0]==="exit"&&l[p][1].type==="strikethroughSequenceTemporary"&&l[p][1]._open&&l[f][1].end.offset-l[f][1].start.offset===l[p][1].end.offset-l[p][1].start.offset){l[f][1].type="strikethroughSequence",l[p][1].type="strikethroughSequence";const h={type:"strikethrough",start:Object.assign({},l[p][1].start),end:Object.assign({},l[f][1].end)},g={type:"strikethroughText",start:Object.assign({},l[p][1].end),end:Object.assign({},l[f][1].start)},w=[["enter",h,c],["enter",l[p][1],c],["exit",l[p][1],c],["enter",g,c]],m=c.parser.constructs.insideSpan.null;m&&Et(w,w.length,0,_l(m,l.slice(p+1,f),c)),Et(w,w.length,0,[["exit",g,c],["enter",l[f][1],c],["exit",l[f][1],c],["exit",h,c]]),Et(l,p-1,f-p+3,w),f=p+w.length-2;break}}for(f=-1;++f<l.length;)l[f][1].type==="strikethroughSequenceTemporary"&&(l[f][1].type="data");return l}function u(l,c,f){const p=this.previous,h=this.events;let g=0;return w;function w(v){return p===126&&h[h.length-1][1].type!=="characterEscape"?f(v):(l.enter("strikethroughSequenceTemporary"),m(v))}function m(v){const S=Ui(p);if(v===126)return g>1?f(v):(l.consume(v),g++,m);if(g<2&&!r)return f(v);const _=l.exit("strikethroughSequenceTemporary"),k=Ui(v);return _._open=!k||k===2&&!!S,_._close=!S||S===2&&!!k,c(v)}}}class ME{constructor(){this.map=[]}add(i,r,a){OE(this,i,r,a)}consume(i){if(this.map.sort(function(u,l){return u[0]-l[0]}),this.map.length===0)return;let r=this.map.length;const a=[];for(;r>0;)r-=1,a.push(i.slice(this.map[r][0]+this.map[r][1]),this.map[r][2]),i.length=this.map[r][0];a.push(i.slice()),i.length=0;let s=a.pop();for(;s;){for(const u of s)i.push(u);s=a.pop()}this.map.length=0}}function OE(e,i,r,a){let s=0;if(!(r===0&&a.length===0)){for(;s<e.map.length;){if(e.map[s][0]===i){e.map[s][1]+=r,e.map[s][2].push(...a);return}s+=1}e.map.push([i,r,a])}}function NE(e,i){let r=!1;const a=[];for(;i<e.length;){const s=e[i];if(r){if(s[0]==="enter")s[1].type==="tableContent"&&a.push(e[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(s[1].type==="tableContent"){if(e[i-1][1].type==="tableDelimiterMarker"){const u=a.length-1;a[u]=a[u]==="left"?"center":"right"}}else if(s[1].type==="tableDelimiterRow")break}else s[0]==="enter"&&s[1].type==="tableDelimiterRow"&&(r=!0);i+=1}return a}function RE(){return{flow:{null:{name:"table",tokenize:PE,resolveAll:DE}}}}function PE(e,i,r){const a=this;let s=0,u=0,l;return c;function c(U){let oe=a.events.length-1;for(;oe>-1;){const x=a.events[oe][1].type;if(x==="lineEnding"||x==="linePrefix")oe--;else break}const O=oe>-1?a.events[oe][1].type:null,Y=O==="tableHead"||O==="tableRow"?R:f;return Y===R&&a.parser.lazy[a.now().line]?r(U):Y(U)}function f(U){return e.enter("tableHead"),e.enter("tableRow"),p(U)}function p(U){return U===124||(l=!0,u+=1),h(U)}function h(U){return U===null?r(U):$e(U)?u>1?(u=0,a.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(U),e.exit("lineEnding"),m):r(U):tn(U)?ln(e,h,"whitespace")(U):(u+=1,l&&(l=!1,s+=1),U===124?(e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),l=!0,h):(e.enter("data"),g(U)))}function g(U){return U===null||U===124||hn(U)?(e.exit("data"),h(U)):(e.consume(U),U===92?w:g)}function w(U){return U===92||U===124?(e.consume(U),g):g(U)}function m(U){return a.interrupt=!1,a.parser.lazy[a.now().line]?r(U):(e.enter("tableDelimiterRow"),l=!1,tn(U)?ln(e,v,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):v(U))}function v(U){return U===45||U===58?_(U):U===124?(l=!0,e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),S):B(U)}function S(U){return tn(U)?ln(e,_,"whitespace")(U):_(U)}function _(U){return U===58?(u+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(U),e.exit("tableDelimiterMarker"),k):U===45?(u+=1,k(U)):U===null||$e(U)?D(U):B(U)}function k(U){return U===45?(e.enter("tableDelimiterFiller"),C(U)):B(U)}function C(U){return U===45?(e.consume(U),C):U===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(U),e.exit("tableDelimiterMarker"),I):(e.exit("tableDelimiterFiller"),I(U))}function I(U){return tn(U)?ln(e,D,"whitespace")(U):D(U)}function D(U){return U===124?v(U):U===null||$e(U)?!l||s!==u?B(U):(e.exit("tableDelimiterRow"),e.exit("tableHead"),i(U)):B(U)}function B(U){return r(U)}function R(U){return e.enter("tableRow"),$(U)}function $(U){return U===124?(e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),$):U===null||$e(U)?(e.exit("tableRow"),i(U)):tn(U)?ln(e,$,"whitespace")(U):(e.enter("data"),Q(U))}function Q(U){return U===null||U===124||hn(U)?(e.exit("data"),$(U)):(e.consume(U),U===92?G:Q)}function G(U){return U===92||U===124?(e.consume(U),Q):Q(U)}}function DE(e,i){let r=-1,a=!0,s=0,u=[0,0,0,0],l=[0,0,0,0],c=!1,f=0,p,h,g;const w=new ME;for(;++r<e.length;){const m=e[r],v=m[1];m[0]==="enter"?v.type==="tableHead"?(c=!1,f!==0&&(ag(w,i,f,p,h),h=void 0,f=0),p={type:"table",start:Object.assign({},v.start),end:Object.assign({},v.end)},w.add(r,0,[["enter",p,i]])):v.type==="tableRow"||v.type==="tableDelimiterRow"?(a=!0,g=void 0,u=[0,0,0,0],l=[0,r+1,0,0],c&&(c=!1,h={type:"tableBody",start:Object.assign({},v.start),end:Object.assign({},v.end)},w.add(r,0,[["enter",h,i]])),s=v.type==="tableDelimiterRow"?2:h?3:1):s&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")?(a=!1,l[2]===0&&(u[1]!==0&&(l[0]=l[1],g=rl(w,i,u,s,void 0,g),u=[0,0,0,0]),l[2]=r)):v.type==="tableCellDivider"&&(a?a=!1:(u[1]!==0&&(l[0]=l[1],g=rl(w,i,u,s,void 0,g)),u=l,l=[u[1],r,0,0])):v.type==="tableHead"?(c=!0,f=r):v.type==="tableRow"||v.type==="tableDelimiterRow"?(f=r,u[1]!==0?(l[0]=l[1],g=rl(w,i,u,s,r,g)):l[1]!==0&&(g=rl(w,i,l,s,r,g)),s=0):s&&(v.type==="data"||v.type==="tableDelimiterMarker"||v.type==="tableDelimiterFiller")&&(l[3]=r)}for(f!==0&&ag(w,i,f,p,h),w.consume(i.events),r=-1;++r<i.events.length;){const m=i.events[r];m[0]==="enter"&&m[1].type==="table"&&(m[1]._align=NE(i.events,r))}return e}function rl(e,i,r,a,s,u){const l=a===1?"tableHeader":a===2?"tableDelimiter":"tableData",c="tableContent";r[0]!==0&&(u.end=Object.assign({},Di(i.events,r[0])),e.add(r[0],0,[["exit",u,i]]));const f=Di(i.events,r[1]);if(u={type:l,start:Object.assign({},f),end:Object.assign({},f)},e.add(r[1],0,[["enter",u,i]]),r[2]!==0){const p=Di(i.events,r[2]),h=Di(i.events,r[3]),g={type:c,start:Object.assign({},p),end:Object.assign({},h)};if(e.add(r[2],0,[["enter",g,i]]),a!==2){const w=i.events[r[2]],m=i.events[r[3]];if(w[1].end=Object.assign({},m[1].end),w[1].type="chunkText",w[1].contentType="text",r[3]>r[2]+1){const v=r[2]+1,S=r[3]-r[2]-1;e.add(v,S,[])}}e.add(r[3]+1,0,[["exit",g,i]])}return s!==void 0&&(u.end=Object.assign({},Di(i.events,s)),e.add(s,0,[["exit",u,i]]),u=void 0),u}function ag(e,i,r,a,s){const u=[],l=Di(i.events,r);s&&(s.end=Object.assign({},l),u.push(["exit",s,i])),a.end=Object.assign({},l),u.push(["exit",a,i]),e.add(r+1,0,u)}function Di(e,i){const r=e[i],a=r[0]==="enter"?"start":"end";return r[1][a]}const BE={name:"tasklistCheck",tokenize:zE};function FE(){return{text:{91:BE}}}function zE(e,i,r){const a=this;return s;function s(f){return a.previous!==null||!a._gfmTasklistFirstContentOfListItem?r(f):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),u)}function u(f){return hn(f)?(e.enter("taskListCheckValueUnchecked"),e.consume(f),e.exit("taskListCheckValueUnchecked"),l):f===88||f===120?(e.enter("taskListCheckValueChecked"),e.consume(f),e.exit("taskListCheckValueChecked"),l):r(f)}function l(f){return f===93?(e.enter("taskListCheckMarker"),e.consume(f),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),c):r(f)}function c(f){return $e(f)?i(f):tn(f)?e.check({tokenize:UE},i,r)(f):r(f)}}function UE(e,i,r){return ln(e,a,"whitespace");function a(s){return s===null?r(s):i(s)}}function jE(e){return lh([fE(),vE(),LE(e),RE(),FE()])}const VE={};function WE(e){const i=this,r=e||VE,a=i.data(),s=a.micromarkExtensions||(a.micromarkExtensions=[]),u=a.fromMarkdownExtensions||(a.fromMarkdownExtensions=[]),l=a.toMarkdownExtensions||(a.toMarkdownExtensions=[]);s.push(jE(r)),u.push(sE()),l.push(uE(r))}const og=(function(e,i,r){const a=Va(r);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof i=="number"){if(i<0||i===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(i=e.children.indexOf(i),i<0)throw new Error("Expected child node or index");for(;++i<e.children.length;)if(a(e.children[i],i,e))return e.children[i]}),si=(function(e){if(e==null)return GE;if(typeof e=="string")return $E(e);if(typeof e=="object")return HE(e);if(typeof e=="function")return Tc(e);throw new Error("Expected function, string, or array as `test`")});function HE(e){const i=[];let r=-1;for(;++r<e.length;)i[r]=si(e[r]);return Tc(a);function a(...s){let u=-1;for(;++u<i.length;)if(i[u].apply(this,s))return!0;return!1}}function $E(e){return Tc(i);function i(r){return r.tagName===e}}function Tc(e){return i;function i(r,a,s){return!!(KE(r)&&e.call(this,r,typeof a=="number"?a:void 0,s||void 0))}}function GE(e){return!!(e&&typeof e=="object"&&"type"in e&&e.type==="element"&&"tagName"in e&&typeof e.tagName=="string")}function KE(e){return e!==null&&typeof e=="object"&&"type"in e&&"tagName"in e}const lg=/\n/g,sg=/[\t ]+/g,ic=si("br"),ug=si(nT),qE=si("p"),cg=si("tr"),YE=si(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",eT,tT]),Zh=si(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","li","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function JE(e,i){const r=i||{},a="children"in e?e.children:[],s=Zh(e),u=em(e,{whitespace:r.whitespace||"normal"}),l=[];(e.type==="text"||e.type==="comment")&&l.push(...Qh(e,{breakBefore:!0,breakAfter:!0}));let c=-1;for(;++c<a.length;)l.push(...Xh(a[c],e,{whitespace:u,breakBefore:c?void 0:s,breakAfter:c<a.length-1?ic(a[c+1]):s}));const f=[];let p;for(c=-1;++c<l.length;){const h=l[c];typeof h=="number"?p!==void 0&&h>p&&(p=h):h&&(p!==void 0&&p>-1&&f.push(`
`.repeat(p)||" "),p=-1,f.push(h))}return f.join("")}function Xh(e,i,r){return e.type==="element"?ZE(e,i,r):e.type==="text"?r.whitespace==="normal"?Qh(e,r):XE(e):[]}function ZE(e,i,r){const a=em(e,r),s=e.children||[];let u=-1,l=[];if(YE(e))return l;let c,f;for(ic(e)||cg(e)&&og(i,e,cg)?f=`
`:qE(e)?(c=2,f=2):Zh(e)&&(c=1,f=1);++u<s.length;)l=l.concat(Xh(s[u],e,{whitespace:a,breakBefore:u?void 0:c,breakAfter:u<s.length-1?ic(s[u+1]):f}));return ug(e)&&og(i,e,ug)&&l.push("	"),c&&l.unshift(c),f&&l.push(f),l}function Qh(e,i){const r=String(e.value),a=[],s=[];let u=0;for(;u<=r.length;){lg.lastIndex=u;const f=lg.exec(r),p=f&&"index"in f?f.index:r.length;a.push(QE(r.slice(u,p).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),u===0?i.breakBefore:!0,p===r.length?i.breakAfter:!0)),u=p+1}let l=-1,c;for(;++l<a.length;)a[l].charCodeAt(a[l].length-1)===8203||l<a.length-1&&a[l+1].charCodeAt(0)===8203?(s.push(a[l]),c=void 0):a[l]?(typeof c=="number"&&s.push(c),s.push(a[l]),c=0):(l===0||l===a.length-1)&&s.push(0);return s}function XE(e){return[String(e.value)]}function QE(e,i,r){const a=[];let s=0,u;for(;s<e.length;){sg.lastIndex=s;const l=sg.exec(e);u=l?l.index:e.length,!s&&!u&&l&&!i&&a.push(""),s!==u&&a.push(e.slice(s,u)),s=l?u+l[0].length:u}return s!==u&&!r&&a.push(""),a.join(" ")}function em(e,i){if(e.type==="element"){const r=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return r.wrap?"pre-wrap":"pre";case"td":case"th":return r.noWrap?"nowrap":i.whitespace;case"textarea":return"pre-wrap"}}return i.whitespace}function eT(e){return!!(e.properties||{}).hidden}function nT(e){return e.tagName==="td"||e.tagName==="th"}function tT(e){return e.tagName==="dialog"&&!(e.properties||{}).open}function rT(e){const i=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",l="(?!struct)("+a+"|"+i.optional(s)+"[a-zA-Z_]\\w*"+i.optional("<[^<>]+>")+")",c={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},g={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},w={className:"title",begin:i.optional(s)+e.IDENT_RE,relevance:0},m=i.optional(s)+e.IDENT_RE+"\\s*\\(",v=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],S=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],_=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],k=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],D={type:S,keyword:v,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:_},B={className:"function.dispatch",relevance:0,keywords:{_hint:k},begin:i.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,i.lookahead(/(<[^<>]+>|)\s*\(/))},R=[B,g,c,r,e.C_BLOCK_COMMENT_MODE,h,p],$={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:D,contains:R.concat([{begin:/\(/,end:/\)/,keywords:D,contains:R.concat(["self"]),relevance:0}]),relevance:0},Q={className:"function",begin:"("+l+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:D,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:D,relevance:0},{begin:m,returnBegin:!0,contains:[w],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[p,h]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,p,h,c,{begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,p,h,c]}]},c,r,e.C_BLOCK_COMMENT_MODE,g]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:D,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat($,Q,B,R,[g,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:D,contains:["self",c]},{begin:e.IDENT_RE+"::",keywords:D},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function iT(e){const i={type:["boolean","byte","word","String"],built_in:["KeyboardController","MouseController","SoftwareSerial","EthernetServer","EthernetClient","LiquidCrystal","RobotControl","GSMVoiceCall","EthernetUDP","EsploraTFT","HttpClient","RobotMotor","WiFiClient","GSMScanner","FileSystem","Scheduler","GSMServer","YunClient","YunServer","IPAddress","GSMClient","GSMModem","Keyboard","Ethernet","Console","GSMBand","Esplora","Stepper","Process","WiFiUDP","GSM_SMS","Mailbox","USBHost","Firmata","PImage","Client","Server","GSMPIN","FileIO","Bridge","Serial","EEPROM","Stream","Mouse","Audio","Servo","File","Task","GPRS","WiFi","Wire","TFT","GSM","SPI","SD"],_hints:["setup","loop","runShellCommandAsynchronously","analogWriteResolution","retrieveCallingNumber","printFirmwareVersion","analogReadResolution","sendDigitalPortPair","noListenOnLocalhost","readJoystickButton","setFirmwareVersion","readJoystickSwitch","scrollDisplayRight","getVoiceCallStatus","scrollDisplayLeft","writeMicroseconds","delayMicroseconds","beginTransmission","getSignalStrength","runAsynchronously","getAsynchronously","listenOnLocalhost","getCurrentCarrier","readAccelerometer","messageAvailable","sendDigitalPorts","lineFollowConfig","countryNameWrite","runShellCommand","readStringUntil","rewindDirectory","readTemperature","setClockDivider","readLightSensor","endTransmission","analogReference","detachInterrupt","countryNameRead","attachInterrupt","encryptionType","readBytesUntil","robotNameWrite","readMicrophone","robotNameRead","cityNameWrite","userNameWrite","readJoystickY","readJoystickX","mouseReleased","openNextFile","scanNetworks","noInterrupts","digitalWrite","beginSpeaker","mousePressed","isActionDone","mouseDragged","displayLogos","noAutoscroll","addParameter","remoteNumber","getModifiers","keyboardRead","userNameRead","waitContinue","processInput","parseCommand","printVersion","readNetworks","writeMessage","blinkVersion","cityNameRead","readMessage","setDataMode","parsePacket","isListening","setBitOrder","beginPacket","isDirectory","motorsWrite","drawCompass","digitalRead","clearScreen","serialEvent","rightToLeft","setTextSize","leftToRight","requestFrom","keyReleased","compassRead","analogWrite","interrupts","WiFiServer","disconnect","playMelody","parseFloat","autoscroll","getPINUsed","setPINUsed","setTimeout","sendAnalog","readSlider","analogRead","beginWrite","createChar","motorsStop","keyPressed","tempoWrite","readButton","subnetMask","debugPrint","macAddress","writeGreen","randomSeed","attachGPRS","readString","sendString","remotePort","releaseAll","mouseMoved","background","getXChange","getYChange","answerCall","getResult","voiceCall","endPacket","constrain","getSocket","writeJSON","getButton","available","connected","findUntil","readBytes","exitValue","readGreen","writeBlue","startLoop","IPAddress","isPressed","sendSysex","pauseMode","gatewayIP","setCursor","getOemKey","tuneWrite","noDisplay","loadImage","switchPIN","onRequest","onReceive","changePIN","playFile","noBuffer","parseInt","overflow","checkPIN","knobRead","beginTFT","bitClear","updateIR","bitWrite","position","writeRGB","highByte","writeRed","setSpeed","readBlue","noStroke","remoteIP","transfer","shutdown","hangCall","beginSMS","endWrite","attached","maintain","noCursor","checkReg","checkPUK","shiftOut","isValid","shiftIn","pulseIn","connect","println","localIP","pinMode","getIMEI","display","noBlink","process","getBand","running","beginSD","drawBMP","lowByte","setBand","release","bitRead","prepare","pointTo","readRed","setMode","noFill","remove","listen","stroke","detach","attach","noTone","exists","buffer","height","bitSet","circle","config","cursor","random","IRread","setDNS","endSMS","getKey","micros","millis","begin","print","write","ready","flush","width","isPIN","blink","clear","press","mkdir","rmdir","close","point","yield","image","BSSID","click","delay","read","text","move","peek","beep","rect","line","open","seek","fill","size","turn","stop","home","find","step","tone","sqrt","RSSI","SSID","end","bit","tan","cos","sin","pow","map","abs","max","min","get","run","put"],literal:["DIGITAL_MESSAGE","FIRMATA_STRING","ANALOG_MESSAGE","REPORT_DIGITAL","REPORT_ANALOG","INPUT_PULLUP","SET_PIN_MODE","INTERNAL2V56","SYSTEM_RESET","LED_BUILTIN","INTERNAL1V1","SYSEX_START","INTERNAL","EXTERNAL","DEFAULT","OUTPUT","INPUT","HIGH","LOW"]},r=rT(e),a=r.keywords;return a.type=[...a.type,...i.type],a.literal=[...a.literal,...i.literal],a.built_in=[...a.built_in,...i.built_in],a._hints=i._hints,r.name="Arduino",r.aliases=["ino"],r.supersetOf="cpp",r}function aT(e){const i=e.regex,r={},a={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[r]}]};Object.assign(r,{className:"variable",variants:[{begin:i.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},a]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},u=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),l={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,s]};s.contains.push(c);const f={match:/\\"/},p={className:"string",begin:/'/,end:/'/},h={match:/\\'/},g={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,r]},w=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],m=e.SHEBANG({binary:`(${w.join("|")})`,relevance:10}),v={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},S=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],_=["true","false"],k={match:/(\/[a-z._-]+)+/},C=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],I=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],D=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],B=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:S,literal:_,built_in:[...C,...I,"set","shopt",...D,...B]},contains:[m,e.SHEBANG(),v,g,u,l,k,c,f,p,h,r]}}function oT(e){const i=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",l="("+a+"|"+i.optional(s)+"[a-zA-Z_]\\w*"+i.optional("<[^<>]+>")+")",c={className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{match:/\batomic_[a-z]{3,6}\b/}]},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{match:/\b(0b[01']+)/},{match:/(-?)\b([\d']+(\.[\d']*)?|\.[\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)/},{match:/(-?)\b(0[xX][a-fA-F0-9]+(?:'[a-fA-F0-9]+)*(?:\.[a-fA-F0-9]*(?:'[a-fA-F0-9]*)*)?(?:[pP][-+]?[0-9]+)?(l|L)?(u|U)?)/},{match:/(-?)\b\d+(?:'\d+)*(?:\.\d*(?:'\d*)*)?(?:[eE][-+]?\d+)?/}],relevance:0},g={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef elifdef elifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},w={className:"title",begin:i.optional(s)+e.IDENT_RE,relevance:0},m=i.optional(s)+e.IDENT_RE+"\\s*\\(",_={keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","typeof","typeof_unqual","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_BitInt","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal96","_Decimal128","_Decimal64x","_Decimal128x","_Float16","_Float32","_Float64","_Float128","_Float32x","_Float64x","_Float128x","const","static","constexpr","complex","bool","imaginary"],literal:"true false NULL",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"},k=[g,c,r,e.C_BLOCK_COMMENT_MODE,h,p],C={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:_,contains:k.concat([{begin:/\(/,end:/\)/,keywords:_,contains:k.concat(["self"]),relevance:0}]),relevance:0},I={begin:"("+l+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:_,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:_,relevance:0},{begin:m,returnBegin:!0,contains:[e.inherit(w,{className:"title.function"})],relevance:0},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,p,h,c,{begin:/\(/,end:/\)/,keywords:_,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,p,h,c]}]},c,r,e.C_BLOCK_COMMENT_MODE,g]};return{name:"C",aliases:["h"],keywords:_,disableAutodetect:!0,illegal:"</",contains:[].concat(C,I,k,[g,{begin:e.IDENT_RE+"::",keywords:_},{className:"class",beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:g,strings:p,keywords:_}}}function lT(e){const i=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",s="[a-zA-Z_]\\w*::",l="(?!struct)("+a+"|"+i.optional(s)+"[a-zA-Z_]\\w*"+i.optional("<[^<>]+>")+")",c={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},p={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+"\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)"+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},h={className:"number",variants:[{begin:"[+-]?(?:(?:[0-9](?:'?[0-9])*\\.(?:[0-9](?:'?[0-9])*)?|\\.[0-9](?:'?[0-9])*)(?:[Ee][+-]?[0-9](?:'?[0-9])*)?|[0-9](?:'?[0-9])*[Ee][+-]?[0-9](?:'?[0-9])*|0[Xx](?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*(?:\\.(?:[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)?)?|\\.[0-9A-Fa-f](?:'?[0-9A-Fa-f])*)[Pp][+-]?[0-9](?:'?[0-9])*)(?:[Ff](?:16|32|64|128)?|(BF|bf)16|[Ll]|)"},{begin:"[+-]?\\b(?:0[Bb][01](?:'?[01])*|0[Xx][0-9A-Fa-f](?:'?[0-9A-Fa-f])*|0(?:'?[0-7])*|[1-9](?:'?[0-9])*)(?:[Uu](?:LL?|ll?)|[Uu][Zz]?|(?:LL?|ll?)[Uu]?|[Zz][Uu]|)"}],relevance:0},g={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(p,{className:"string"}),{className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},w={className:"title",begin:i.optional(s)+e.IDENT_RE,relevance:0},m=i.optional(s)+e.IDENT_RE+"\\s*\\(",v=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],S=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],_=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","flat_map","flat_set","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],k=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],D={type:S,keyword:v,literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],_type_hints:_},B={className:"function.dispatch",relevance:0,keywords:{_hint:k},begin:i.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,i.lookahead(/(<[^<>]+>|)\s*\(/))},R=[B,g,c,r,e.C_BLOCK_COMMENT_MODE,h,p],$={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:D,contains:R.concat([{begin:/\(/,end:/\)/,keywords:D,contains:R.concat(["self"]),relevance:0}]),relevance:0},Q={className:"function",begin:"("+l+"[\\*&\\s]+)+"+m,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:D,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:D,relevance:0},{begin:m,returnBegin:!0,contains:[w],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[p,h]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,p,h,c,{begin:/\(/,end:/\)/,keywords:D,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,p,h,c]}]},c,r,e.C_BLOCK_COMMENT_MODE,g]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:D,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat($,Q,B,R,[g,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function|flat_map|flat_set)\\s*<(?!<)",end:">",keywords:D,contains:["self",c]},{begin:e.IDENT_RE+"::",keywords:D},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}function sT(e){const i=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],r=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],a=["default","false","null","true"],s=["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","scoped","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],u=["add","alias","and","ascending","args","async","await","by","descending","dynamic","equals","file","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","record","remove","required","scoped","select","set","unmanaged","value|0","var","when","where","with","yield"],l={keyword:s.concat(u),built_in:i,literal:a},c=e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),f={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},p={className:"string",begin:/"""("*)(?!")(.|\n)*?"""\1/,relevance:1},h={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},g=e.inherit(h,{illegal:/\n/}),w={className:"subst",begin:/\{/,end:/\}/,keywords:l},m=e.inherit(w,{illegal:/\n/}),v={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},e.BACKSLASH_ESCAPE,m]},S={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},w]},_=e.inherit(S,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},m]});w.contains=[S,v,h,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,e.C_BLOCK_COMMENT_MODE],m.contains=[_,v,g,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];const k={variants:[p,S,v,h,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},C={begin:"<",end:">",contains:[{beginKeywords:"in out"},c]},I=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",D={begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:l,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{keyword:"if else elif endif define undef warning error line region endregion pragma checksum"}},k,f,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},c,C,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[c,C,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+I+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:l,contains:[{beginKeywords:r.join(" "),relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,contains:[e.TITLE_MODE,C],relevance:0},{match:/\(\)/},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,relevance:0,contains:[k,f,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},D]}}const uT=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),cT=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],dT=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],fT=[...cT,...dT],pT=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),gT=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),hT=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),mT=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function yT(e){const i=e.regex,r=uT(e),a={begin:/-(webkit|moz|ms|o)-(?=[a-z])/},s="and or not only",u=/@-?\w[\w]*(-\w+)*/,l="[a-zA-Z-][a-zA-Z0-9_-]*",c=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[r.BLOCK_COMMENT,a,r.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\."+l,relevance:0},r.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+gT.join("|")+")"},{begin:":(:)?("+hT.join("|")+")"}]},r.CSS_VARIABLE,{className:"attribute",begin:"\\b("+mT.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,contains:[r.BLOCK_COMMENT,r.HEXCOLOR,r.IMPORTANT,r.CSS_NUMBER_MODE,...c,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[...c,{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},r.FUNCTION_DISPATCH]},{begin:i.lookahead(/@/),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:u},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:s,attribute:pT.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...c,r.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+fT.join("|")+")\\b"}]}}function wT(e){const i=e.regex;return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,match:i.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)},{className:"comment",variants:[{begin:i.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}function bT(e){const u={keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],literal:["true","false","iota","nil"],built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]};return{name:"Go",aliases:["golang"],keywords:u,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{match:/-?\b0[xX]\.[a-fA-F0-9](_?[a-fA-F0-9])*[pP][+-]?\d(_?\d)*i?/,relevance:0},{match:/-?\b0[xX](_?[a-fA-F0-9])+((\.([a-fA-F0-9](_?[a-fA-F0-9])*)?)?[pP][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b0[oO](_?[0-7])*i?/,relevance:0},{match:/-?\.\d(_?\d)*([eE][+-]?\d(_?\d)*)?i?/,relevance:0},{match:/-?\b\d(_?\d)*(\.(\d(_?\d)*)?)?([eE][+-]?\d(_?\d)*)?i?/,relevance:0}]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:u,illegal:/["']/}]}]}}function ST(e){const i=e.regex,r=/[_A-Za-z][_0-9A-Za-z]*/;return{name:"GraphQL",aliases:["gql"],case_insensitive:!0,disableAutodetect:!1,keywords:{keyword:["query","mutation","subscription","type","input","schema","directive","interface","union","scalar","fragment","enum","on"],literal:["true","false","null"]},contains:[e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{scope:"punctuation",match:/[.]{3}/,relevance:0},{scope:"punctuation",begin:/[\!\(\)\:\=\[\]\{\|\}]{1}/,relevance:0},{scope:"variable",begin:/\$/,end:/\W/,excludeEnd:!0,relevance:0},{scope:"meta",match:/@\w+/,excludeEnd:!0},{scope:"symbol",begin:i.concat(r,i.lookahead(/\s*:/)),relevance:0}],illegal:[/[;<']/,/BEGIN/]}}function kT(e){const i=e.regex,r={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},a=e.COMMENT();a.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const s={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},u={className:"literal",begin:/\bon|off|true|false|yes|no\b/},l={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},c={begin:/\[/,end:/\]/,contains:[a,u,s,l,r,"self"],relevance:0},f=/[A-Za-z0-9_-]+/,p=/"(\\"|[^"])*"/,h=/'[^']*'/,g=i.either(f,p,h),w=i.concat(g,"(\\s*\\.\\s*",g,")*",i.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[a,{className:"section",begin:/\[+/,end:/\]+/},{begin:w,className:"attr",starts:{end:/$/,contains:[a,c,u,s,l,r]}}]}}var Bi="[0-9](_*[0-9])*",il=`\\.(${Bi})`,al="[0-9a-fA-F](_*[0-9a-fA-F])*",dg={className:"number",variants:[{begin:`(\\b(${Bi})((${il})|\\.)?|(${il}))[eE][+-]?(${Bi})[fFdD]?\\b`},{begin:`\\b(${Bi})((${il})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${il})[fFdD]?\\b`},{begin:`\\b(${Bi})[fFdD]\\b`},{begin:`\\b0[xX]((${al})\\.?|(${al})?\\.(${al}))[pP][+-]?(${Bi})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${al})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function nm(e,i,r){return r===-1?"":e.replace(i,a=>nm(e,i,r-1))}function vT(e){const i=e.regex,r="[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",a=r+nm("(?:<"+r+"~~~(?:\\s*,\\s*"+r+"~~~)*>)?",/~~~/g,2),f={keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed","yield","permits","goto","when"],literal:["false","true","null"],type:["char","boolean","long","float","int","byte","short","double"],built_in:["super","this"]},p={className:"meta",begin:"@"+r,contains:[{begin:/\(/,end:/\)/,contains:["self"]}]},h={className:"params",begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0};return{name:"Java",aliases:["jsp"],keywords:f,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{begin:/import java\.[a-z]+\./,keywords:"import",relevance:2},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,className:"string",contains:[e.BACKSLASH_ESCAPE]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,r],className:{1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{begin:[i.concat(/(?!else)/,r),/\s+/,r,/\s+/,/=(?!=)/],className:{1:"type",3:"variable",5:"operator"}},{begin:[/record/,/\s+/,r],className:{1:"keyword",3:"title.class"},contains:[h,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new throw return else",relevance:0},{begin:["(?:"+a+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{2:"title.function"},keywords:f,contains:[{className:"params",begin:/\(/,end:/\)/,keywords:f,relevance:0,contains:[p,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,dg,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},dg,p]}}const fg="[A-Za-z$_][0-9A-Za-z$_]*",_T=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],xT=["true","false","null","undefined","NaN","Infinity"],tm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],rm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],im=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ET=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],TT=[].concat(im,tm,rm);function CT(e){const i=e.regex,r=(ne,{after:Z})=>{const L="</"+ne[0].slice(1);return ne.input.indexOf(L,Z)!==-1},a=fg,s={begin:"<>",end:"</>"},u=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(ne,Z)=>{const L=ne[0].length+ne.index,A=ne.input[L];if(A==="<"||A===","){Z.ignoreMatch();return}A===">"&&(r(ne,{after:L})||Z.ignoreMatch());let P;const M=ne.input.substring(L);if(P=M.match(/^\s*=/)){Z.ignoreMatch();return}if((P=M.match(/^\s+extends\s+/))&&P.index===0){Z.ignoreMatch();return}}},c={$pattern:fg,keyword:_T,literal:xT,built_in:TT,"variable.language":ET},f="[0-9](_?[0-9])*",p=`\\.(${f})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${h})((${p})|\\.)?|(${p}))[eE][+-]?(${f})\\b`},{begin:`\\b(${h})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"css"}},S={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"graphql"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,w]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,S,_,{match:/\$\d+/},g];w.contains=I.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(I)});const D=[].concat(C,w.contains),B=D.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(D)}]),R={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:B},$={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,i.concat(a,"(",i.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...tm,...rm]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},U={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function O(ne){return i.concat("(?!",ne.join("|"),")")}const Y={match:i.concat(/\b/,O([...im,"super","import"].map(ne=>`${ne}\\s*\\(`)),a,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},x={begin:i.concat(/\./,i.lookahead(i.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},V={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ie={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:B,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,S,_,C,{match:/\$\d+/},g,Q,{scope:"attr",match:a+i.lookahead(":"),relevance:0},ie,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:B}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:u},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},U,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},Y,oe,$,V,{match:/\$[(.]/}]}}function IT(e){const i={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},r={match:/[{}[\],:]/,className:"punctuation",relevance:0},a=["true","false","null"],s={scope:"literal",beginKeywords:a.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:a},contains:[i,r,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}var Fi="[0-9](_*[0-9])*",ol=`\\.(${Fi})`,ll="[0-9a-fA-F](_*[0-9a-fA-F])*",AT={className:"number",variants:[{begin:`(\\b(${Fi})((${ol})|\\.)?|(${ol}))[eE][+-]?(${Fi})[fFdD]?\\b`},{begin:`\\b(${Fi})((${ol})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{begin:`(${ol})[fFdD]?\\b`},{begin:`\\b(${Fi})[fFdD]\\b`},{begin:`\\b0[xX]((${ll})\\.?|(${ll})?\\.(${ll}))[pP][+-]?(${Fi})[fFdD]?\\b`},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${ll})[lL]?\\b`},{begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],relevance:0};function LT(e){const i={keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",literal:"true false null"},r={className:"keyword",begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",begin:/@\w+/}]}},a={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"},s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},u={className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},l={className:"string",variants:[{begin:'"""',end:'"""(?=[^"])',contains:[u,s]},{begin:"'",end:"'",illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,u,s]}]};s.contains.push(l);const c={className:"meta",begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"},f={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,end:/\)/,contains:[e.inherit(l,{className:"string"}),"self"]}]},p=AT,h=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),g={variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,contains:[]}]},w=g;return w.variants[1].contains=[g],g.variants[1].contains=[w],{name:"Kotlin",aliases:["kt","kts"],keywords:i,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,h,r,a,c,f,{className:"function",beginKeywords:"fun",end:"[(]|$",returnBegin:!0,excludeEnd:!0,keywords:i,relevance:5,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,endsParent:!0,keywords:i,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,endsWithParent:!0,contains:[g,e.C_LINE_COMMENT_MODE,h],relevance:0},e.C_LINE_COMMENT_MODE,h,c,f,l,e.C_NUMBER_MODE]},h]},{begin:[/class|interface|trait/,/\s+/,e.UNDERSCORE_IDENT_RE],beginScope:{3:"title.class"},keywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,illegal:"extends implements",contains:[{beginKeywords:"public protected internal private constructor"},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,){\s]|$/,excludeBegin:!0,returnEnd:!0},c,f]},l,{className:"meta",begin:"^#!/usr/bin/env",end:"$",illegal:`
`},p]}}const MT=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),OT=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],NT=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],RT=[...OT,...NT],PT=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),am=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),om=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),DT=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse(),BT=am.concat(om).sort().reverse();function FT(e){const i=MT(e),r=BT,a="and or not only",s="[\\w-]+",u="("+s+"|@\\{"+s+"\\})",l=[],c=[],f=function(I){return{className:"string",begin:"~?"+I+".*?"+I}},p=function(I,D,B){return{className:I,begin:D,relevance:B}},h={$pattern:/[a-z-]+/,keyword:a,attribute:PT.join(" ")},g={begin:"\\(",end:"\\)",contains:c,keywords:h,relevance:0};c.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,f("'"),f('"'),i.CSS_NUMBER_MODE,{begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",excludeEnd:!0}},i.HEXCOLOR,g,p("variable","@@?"+s,10),p("variable","@\\{"+s+"\\}"),p("built_in","~?`[^`]*?`"),{className:"attribute",begin:s+"\\s*:",end:":",returnBegin:!0,excludeEnd:!0},i.IMPORTANT,{beginKeywords:"and not"},i.FUNCTION_DISPATCH);const w=c.concat({begin:/\{/,end:/\}/,contains:l}),m={beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"}].concat(c)},v={begin:u+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,contains:[{begin:/-(webkit|moz|ms|o)-/},i.CSS_VARIABLE,{className:"attribute",begin:"\\b("+DT.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,illegal:"[<=$]",relevance:0,contains:c}}]},S={className:"keyword",begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{end:"[;{}]",keywords:h,returnEnd:!0,contains:c,relevance:0}},_={className:"variable",variants:[{begin:"@"+s+"\\s*:",relevance:15},{begin:"@"+s}],starts:{end:"[;}]",returnEnd:!0,contains:w}},k={variants:[{begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:u,end:/\{/}],returnBegin:!0,returnEnd:!0,illegal:`[<='$"]`,relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,m,p("keyword","all\\b"),p("variable","@\\{"+s+"\\}"),{begin:"\\b("+RT.join("|")+")\\b",className:"selector-tag"},i.CSS_NUMBER_MODE,p("selector-tag",u,0),p("selector-id","#"+u),p("selector-class","\\."+u,0),p("selector-tag","&",0),i.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",begin:":("+am.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+om.join("|")+")"},{begin:/\(/,end:/\)/,relevance:0,contains:w},{begin:"!important"},i.FUNCTION_DISPATCH]},C={begin:s+`:(:)?(${r.join("|")})`,returnBegin:!0,contains:[k]};return l.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,S,_,C,v,k,m,i.FUNCTION_DISPATCH),{name:"Less",case_insensitive:!0,illegal:`[=>'/<($"]`,contains:l}}function zT(e){const i="\\[=*\\[",r="\\]=*\\]",a={begin:i,end:r,contains:["self"]},s=[e.COMMENT("--(?!"+i+")","$"),e.COMMENT("--"+i,r,{contains:[a],relevance:10})];return{name:"Lua",aliases:["pluto"],keywords:{$pattern:e.UNDERSCORE_IDENT_RE,literal:"true false nil",keyword:"and break do else elseif end for goto if in local not or repeat return then until while",built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"},contains:s.concat([{className:"function",beginKeywords:"function",end:"\\)",contains:[e.inherit(e.TITLE_MODE,{begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",begin:"\\(",endsWithParent:!0,contains:s}].concat(s)},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",begin:i,end:r,contains:[a],relevance:5}])}}function UT(e){const i={className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},r={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]},a={className:"variable",begin:/\$\([\w-]+\s/,end:/\)/,keywords:{built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},contains:[i,r]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},u={className:"meta",begin:/^\.PHONY:/,end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},l={className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"},contains:[e.HASH_COMMENT_MODE,i,r,a,s,u,l]}}function jT(e){const i=e.regex,r={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},a={begin:"^[-\\*]{3,}",end:"$"},s={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},u={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},l={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},c=/[A-Za-z][A-Za-z0-9+.-]*/,f={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:i.concat(/\[.+?\]\(/,c,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},p={className:"strong",contains:[],variants:[{begin:/_{2}(?!\s)/,end:/_{2}/},{begin:/\*{2}(?!\s)/,end:/\*{2}/}]},h={className:"emphasis",contains:[],variants:[{begin:/\*(?![*\s])/,end:/\*/},{begin:/_(?![_\s])/,end:/_/,relevance:0}]},g=e.inherit(p,{contains:[]}),w=e.inherit(h,{contains:[]});p.contains.push(w),h.contains.push(g);let m=[r,f];return[p,h,g,w].forEach(k=>{k.contains=k.contains.concat(m)}),m=m.concat(p,h),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:m},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:m}]}]},r,u,p,h,{className:"quote",begin:"^>\\s+",contains:m,end:"$"},s,a,f,l,{scope:"literal",match:/&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/}]}}function VT(e){const i={className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},r=/[a-zA-Z@][a-zA-Z0-9_]*/,c={"variable.language":["this","super"],$pattern:r,keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]},f={$pattern:r,keyword:["@interface","@class","@protocol","@implementation"]};return{name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:c,illegal:"</",contains:[i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",begin:"("+f.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:f,contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}function WT(e){const i=e.regex,r=["abs","accept","alarm","and","atan2","bind","binmode","bless","break","caller","chdir","chmod","chomp","chop","chown","chr","chroot","class","close","closedir","connect","continue","cos","crypt","dbmclose","dbmopen","defined","delete","die","do","dump","each","else","elsif","endgrent","endhostent","endnetent","endprotoent","endpwent","endservent","eof","eval","exec","exists","exit","exp","fcntl","field","fileno","flock","for","foreach","fork","format","formline","getc","getgrent","getgrgid","getgrnam","gethostbyaddr","gethostbyname","gethostent","getlogin","getnetbyaddr","getnetbyname","getnetent","getpeername","getpgrp","getpriority","getprotobyname","getprotobynumber","getprotoent","getpwent","getpwnam","getpwuid","getservbyname","getservbyport","getservent","getsockname","getsockopt","given","glob","gmtime","goto","grep","gt","hex","if","index","int","ioctl","join","keys","kill","last","lc","lcfirst","length","link","listen","local","localtime","log","lstat","lt","ma","map","method","mkdir","msgctl","msgget","msgrcv","msgsnd","my","ne","next","no","not","oct","open","opendir","or","ord","our","pack","package","pipe","pop","pos","print","printf","prototype","push","q|0","qq","quotemeta","qw","qx","rand","read","readdir","readline","readlink","readpipe","recv","redo","ref","rename","require","reset","return","reverse","rewinddir","rindex","rmdir","say","scalar","seek","seekdir","select","semctl","semget","semop","send","setgrent","sethostent","setnetent","setpgrp","setpriority","setprotoent","setpwent","setservent","setsockopt","shift","shmctl","shmget","shmread","shmwrite","shutdown","sin","sleep","socket","socketpair","sort","splice","split","sprintf","sqrt","srand","stat","state","study","sub","substr","symlink","syscall","sysopen","sysread","sysseek","system","syswrite","tell","telldir","tie","tied","time","times","tr","truncate","uc","ucfirst","umask","undef","unless","unlink","unpack","unshift","untie","until","use","utime","values","vec","wait","waitpid","wantarray","warn","when","while","write","x|0","xor","y|0"],a=/[dualxmsipngr]{0,12}/,s={$pattern:/[\w.]+/,keyword:r.join(" ")},u={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:s},l={begin:/->\{/,end:/\}/},c={scope:"attr",match:/\s+:\s*\w+(\s*\(.*?\))?/},f={scope:"variable",variants:[{begin:/\$\d/},{begin:i.concat(/[$%@](?!")(\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")},{begin:/[$%@](?!")[^\s\w{=]|\$=/,relevance:0}],contains:[c]},p={className:"number",variants:[{match:/0?\.[0-9][0-9_]+\b/},{match:/\bv?(0|[1-9][0-9_]*(\.[0-9_]+)?|[1-9][0-9_]*)\b/},{match:/\b0[0-7][0-7_]*\b/},{match:/\b0x[0-9a-fA-F][0-9a-fA-F_]*\b/},{match:/\b0b[0-1][0-1_]*\b/}],relevance:0},h=[e.BACKSLASH_ESCAPE,u,f],g=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],w=(S,_,k="\\1")=>{const C=k==="\\1"?k:i.concat(k,_);return i.concat(i.concat("(?:",S,")"),_,/(?:\\.|[^\\\/])*?/,C,/(?:\\.|[^\\\/])*?/,k,a)},m=(S,_,k)=>i.concat(i.concat("(?:",S,")"),_,/(?:\\.|[^\\\/])*?/,k,a),v=[f,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{endsWithParent:!0}),l,{className:"string",contains:h,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{begin:"-?\\w+\\s*=>",relevance:0}]},p,{begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{begin:w("s|tr|y",i.either(...g,{capture:!0}))},{begin:w("s|tr|y","\\(","\\)")},{begin:w("s|tr|y","\\[","\\]")},{begin:w("s|tr|y","\\{","\\}")}],relevance:2},{className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{begin:m("(?:m|qr)?",/\//,/\//)},{begin:m("m|qr",i.either(...g,{capture:!0}),/\1/)},{begin:m("m|qr",/\(/,/\)/)},{begin:m("m|qr",/\[/,/\]/)},{begin:m("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub method",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE,c]},{className:"class",beginKeywords:"class",end:"[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE,c,p]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return u.contains=v,l.contains=v,{name:"Perl",aliases:["pl","pm"],keywords:s,contains:v}}function HT(e){const i=e.regex,r=/(?![A-Za-z0-9])(?![$])/,a=i.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,r),s=i.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,r),u=i.concat(/[A-Z]+/,r),l={scope:"variable",match:"\\$+"+a},c={scope:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{begin:/\?>/}]},f={scope:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]},p=e.inherit(e.APOS_STRING_MODE,{illegal:null}),h=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(f)}),g={begin:/<<<[ \t]*(?:(\w+)|"(\w+)")\n/,end:/[ \t]*(\w+)\b/,contains:e.QUOTE_STRING_MODE.contains.concat(f),"on:begin":(x,V)=>{V.data._beginMatch=x[1]||x[2]},"on:end":(x,V)=>{V.data._beginMatch!==x[1]&&V.ignoreMatch()}},w=e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*'(\w+)'\n/,end:/[ \t]*(\w+)\b/}),m=`[ 	
]`,v={scope:"string",variants:[h,p,g,w]},S={scope:"number",variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],relevance:0},_=["false","null","true"],k=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],C=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],D={keyword:k,literal:(x=>{const V=[];return x.forEach(ge=>{V.push(ge),ge.toLowerCase()===ge?V.push(ge.toUpperCase()):V.push(ge.toLowerCase())}),V})(_),built_in:C},B=x=>x.map(V=>V.replace(/\|\d+$/,"")),R={variants:[{match:[/new/,i.concat(m,"+"),i.concat("(?!",B(C).join("\\b|"),"\\b)"),s],scope:{1:"keyword",4:"title.class"}}]},$=i.concat(a,"\\b(?!\\()"),Q={variants:[{match:[i.concat(/::/,i.lookahead(/(?!class\b)/)),$],scope:{2:"variable.constant"}},{match:[/::/,/class/],scope:{2:"variable.language"}},{match:[s,i.concat(/::/,i.lookahead(/(?!class\b)/)),$],scope:{1:"title.class",3:"variable.constant"}},{match:[s,i.concat("::",i.lookahead(/(?!class\b)/))],scope:{1:"title.class"}},{match:[s,/::/,/class/],scope:{1:"title.class",3:"variable.language"}}]},G={scope:"attr",match:i.concat(a,i.lookahead(":"),i.lookahead(/(?!::)/))},U={relevance:0,begin:/\(/,end:/\)/,keywords:D,contains:[G,l,Q,e.C_BLOCK_COMMENT_MODE,v,S,R]},oe={relevance:0,match:[/\b/,i.concat("(?!fn\\b|function\\b|",B(k).join("\\b|"),"|",B(C).join("\\b|"),"\\b)"),a,i.concat(m,"*"),i.lookahead(/(?=\()/)],scope:{3:"title.function.invoke"},contains:[U]};U.contains.push(oe);const O=[G,Q,e.C_BLOCK_COMMENT_MODE,v,S,R],Y={begin:i.concat(/#\[\s*\\?/,i.either(s,u)),beginScope:"meta",end:/]/,endScope:"meta",keywords:{literal:_,keyword:["new","array"]},contains:[{begin:/\[/,end:/]/,keywords:{literal:_,keyword:["new","array"]},contains:["self",...O]},...O,{scope:"meta",variants:[{match:s},{match:u}]}]};return{case_insensitive:!1,keywords:D,contains:[Y,e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},c,{scope:"variable.language",match:/\$this\b/},l,oe,Q,{match:[/const/,/\s/,a],scope:{1:"keyword",3:"variable.constant"}},R,{scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:D,contains:["self",Y,l,Q,e.C_BLOCK_COMMENT_MODE,v,S]}]},{scope:"class",variants:[{beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{beginKeywords:"use",relevance:0,end:";",contains:[{match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},v,S]}}function $T(e){return{name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]}]}}function GT(e){return{name:"Plain text",aliases:["text","txt"],disableAutodetect:!0}}function KT(e){const i=e.regex,r=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),a=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],c={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:a,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},f={className:"meta",begin:/^(>>>|\.\.\.) /},p={className:"subst",begin:/\{/,end:/\}/,keywords:c,illegal:/#/},h={begin:/\{\{/,relevance:0},g={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,f],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,f],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,f,h,p]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,f,h,p]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,h,p]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,h,p]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},w="[0-9](_?[0-9])*",m=`(\\b(${w}))?\\.(${w})|\\b(${w})\\.`,v=`\\b|${a.join("|")}`,S={className:"number",relevance:0,variants:[{begin:`(\\b(${w})|(${m}))[eE][+-]?(${w})[jJ]?(?=${v})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${v})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${v})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`},{begin:`\\b(${w})[jJ](?=${v})`}]},_={className:"comment",begin:i.lookahead(/# type:/),end:/$/,keywords:c,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},k={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:["self",f,S,g,e.HASH_COMMENT_MODE]}]};return p.contains=[g,S,f],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:c,illegal:/(<\/|\?)|=>/,contains:[f,S,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},g,_,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[k]},{variants:[{match:[/\bclass/,/\s+/,r,/\s*/,/\(\s*/,r,/\s*\)/]},{match:[/\bclass/,/\s+/,r]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[S,k,g]}]}}function qT(e){return{aliases:["pycon"],contains:[{className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}}function YT(e){const i=e.regex,r=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,a=i.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,u=i.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/);return{name:"R",keywords:{$pattern:r,keyword:"function if in break next repeat else for while",literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,starts:{end:i.lookahead(i.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{scope:"variable",variants:[{match:r},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{1:"operator",2:"number"},match:[s,a]},{scope:{1:"operator",2:"number"},match:[/%[^%]*%/,a]},{scope:{1:"punctuation",2:"number"},match:[u,a]},{scope:{2:"number"},match:[/[^a-zA-Z0-9._]|^/,a]}]},{scope:{3:"operator"},match:[r,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:u},{begin:"`",end:"`",contains:[{begin:/\\./}]}]}}function JT(e){const i=e.regex,r="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",a=i.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),s=i.concat(a,/(::\w+)*/),l={"variable.constant":["__FILE__","__LINE__","__ENCODING__"],"variable.language":["self","super"],keyword:["alias","and","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield",...["include","extend","prepend","public","private","protected","raise","throw"]],built_in:["proc","lambda","attr_accessor","attr_reader","attr_writer","define_method","private_constant","module_function"],literal:["true","false","nil"]},c={className:"doctag",begin:"@[A-Za-z]+"},f={begin:"#<",end:">"},p=[e.COMMENT("#","$",{contains:[c]}),e.COMMENT("^=begin","^=end",{contains:[c],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],h={className:"subst",begin:/#\{/,end:/\}/,keywords:l},g={className:"string",contains:[e.BACKSLASH_ESCAPE,h],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{begin:i.concat(/<<[-~]?'?/,i.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,contains:[e.BACKSLASH_ESCAPE,h]})]}]},w="[1-9](_?[0-9])*|0",m="[0-9](_?[0-9])*",v={className:"number",relevance:0,variants:[{begin:`\\b(${w})(\\.(${m}))?([eE][+-]?(${m})|r)?i?\\b`},{begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{begin:"\\b0(_?[0-7])+r?i?\\b"}]},S={variants:[{match:/\(\)/},{className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,keywords:l}]},R=[g,{variants:[{match:[/class\s+/,s,/\s+<\s+/,s]},{match:[/\b(class|module)\s+/,s]}],scope:{2:"title.class",4:"title.class.inherited"},keywords:l},{match:[/(include|extend)\s+/,s],scope:{2:"title.class"},keywords:l},{relevance:0,match:[s,/\.new[. (]/],scope:{1:"title.class"}},{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{relevance:0,match:a,scope:"title.class"},{match:[/def/,/\s+/,r],scope:{1:"keyword",3:"title.function"},contains:[S]},{begin:e.IDENT_RE+"::"},{className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",begin:":(?!\\s)",contains:[g,{begin:r}],relevance:0},v,{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{className:"params",begin:/\|(?!=)/,end:/\|/,excludeBegin:!0,excludeEnd:!0,relevance:0,keywords:l},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,h],illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]}].concat(f,p),relevance:0}].concat(f,p);h.contains=R,S.contains=R;const U=[{begin:/^\s*=>/,starts:{end:"$",contains:R}},{className:"meta.prompt",begin:"^("+"[>?]>"+"|"+"[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]"+"|"+"(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>"+")(?=[ ])",starts:{end:"$",keywords:l,contains:R}}];return p.unshift(f),{name:"Ruby",aliases:["rb","gemspec","podspec","thor","irb"],keywords:l,illegal:/\/\*/,contains:[e.SHEBANG({binary:"ruby"})].concat(U).concat(p).concat(R)}}function ZT(e){const i=e.regex,r=/(r#)?/,a=i.concat(r,e.UNDERSCORE_IDENT_RE),s=i.concat(r,e.IDENT_RE),u={className:"title.function.invoke",relevance:0,begin:i.concat(/\b/,/(?!let|for|while|if|else|match\b)/,s,i.lookahead(/\s*\(/))},l="([ui](8|16|32|64|128|size)|f(32|64))?",c=["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","union","unsafe","unsized","use","virtual","where","while","yield"],f=["true","false","Some","None","Ok","Err"],p=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","eprintln!","panic!","file!","format!","format_args!","include_bytes!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"],h=["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"];return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",type:h,keyword:c,literal:f,built_in:p},illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{className:"symbol",begin:/'[a-zA-Z_][a-zA-Z0-9_]*(?!')/},{scope:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{begin:/b?'/,end:/'/,contains:[{scope:"char.escape",match:/\\('|\w|x\w{2}|u\w{4}|U\w{8})/}]}]},{className:"number",variants:[{begin:"\\b0b([01_]+)"+l},{begin:"\\b0o([0-7_]+)"+l},{begin:"\\b0x([A-Fa-f0-9_]+)"+l},{begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+l}],relevance:0},{begin:[/fn/,/\s+/,a],className:{1:"keyword",3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]}]},{begin:[/let/,/\s+/,/(?:mut\s+)?/,a],className:{1:"keyword",3:"keyword",4:"variable"}},{begin:[/for/,/\s+/,a,/\s+/,/in/],className:{1:"keyword",3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,a],className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{keyword:"Self",built_in:p,type:h}},{className:"punctuation",begin:"->"},u]}}const XT=e=>({IMPORTANT:{scope:"meta",begin:"!important"},BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{scope:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z_][A-Za-z0-9_-]*/}}),QT=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","optgroup","option","p","picture","q","quote","samp","section","select","source","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],e1=["defs","g","marker","mask","pattern","svg","switch","symbol","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","linearGradient","radialGradient","stop","circle","ellipse","image","line","path","polygon","polyline","rect","text","use","textPath","tspan","foreignObject","clipPath"],n1=[...QT,...e1],t1=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"].sort().reverse(),r1=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"].sort().reverse(),i1=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"].sort().reverse(),a1=["accent-color","align-content","align-items","align-self","alignment-baseline","all","anchor-name","animation","animation-composition","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-range","animation-range-end","animation-range-start","animation-timeline","animation-timing-function","appearance","aspect-ratio","backdrop-filter","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-position-x","background-position-y","background-repeat","background-size","baseline-shift","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-end-end-radius","border-end-start-radius","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-start-end-radius","border-start-start-radius","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-align","box-decoration-break","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","color-scheme","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","contain-intrinsic-block-size","contain-intrinsic-height","contain-intrinsic-inline-size","contain-intrinsic-size","contain-intrinsic-width","container","container-name","container-type","content","content-visibility","counter-increment","counter-reset","counter-set","cue","cue-after","cue-before","cursor","cx","cy","direction","display","dominant-baseline","empty-cells","enable-background","field-sizing","fill","fill-opacity","fill-rule","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flood-color","flood-opacity","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-optical-sizing","font-palette","font-size","font-size-adjust","font-smooth","font-smoothing","font-stretch","font-style","font-synthesis","font-synthesis-position","font-synthesis-small-caps","font-synthesis-style","font-synthesis-weight","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-emoji","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","forced-color-adjust","gap","glyph-orientation-horizontal","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphenate-character","hyphenate-limit-chars","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","initial-letter","initial-letter-align","inline-size","inset","inset-area","inset-block","inset-block-end","inset-block-start","inset-inline","inset-inline-end","inset-inline-start","isolation","justify-content","justify-items","justify-self","kerning","left","letter-spacing","lighting-color","line-break","line-height","line-height-step","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","margin-trim","marker","marker-end","marker-mid","marker-start","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","masonry-auto-flow","math-depth","math-shift","math-style","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","offset","offset-anchor","offset-distance","offset-path","offset-position","offset-rotate","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-anchor","overflow-block","overflow-clip-margin","overflow-inline","overflow-wrap","overflow-x","overflow-y","overlay","overscroll-behavior","overscroll-behavior-block","overscroll-behavior-inline","overscroll-behavior-x","overscroll-behavior-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","paint-order","pause","pause-after","pause-before","perspective","perspective-origin","place-content","place-items","place-self","pointer-events","position","position-anchor","position-visibility","print-color-adjust","quotes","r","resize","rest","rest-after","rest-before","right","rotate","row-gap","ruby-align","ruby-position","scale","scroll-behavior","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scroll-timeline","scroll-timeline-axis","scroll-timeline-name","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","shape-rendering","speak","speak-as","src","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","table-layout","text-align","text-align-all","text-align-last","text-anchor","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-skip-ink","text-decoration-style","text-decoration-thickness","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-size-adjust","text-transform","text-underline-offset","text-underline-position","text-wrap","text-wrap-mode","text-wrap-style","timeline-scope","top","touch-action","transform","transform-box","transform-origin","transform-style","transition","transition-behavior","transition-delay","transition-duration","transition-property","transition-timing-function","translate","unicode-bidi","user-modify","user-select","vector-effect","vertical-align","view-timeline","view-timeline-axis","view-timeline-inset","view-timeline-name","view-transition-name","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","white-space-collapse","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","x","y","z-index","zoom"].sort().reverse();function o1(e){const i=XT(e),r=i1,a=r1,s="@[a-z-]+",u="and or not only",c={className:"variable",begin:"(\\$"+"[a-zA-Z-][a-zA-Z0-9_-]*"+")\\b",relevance:0};return{name:"SCSS",case_insensitive:!0,illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i.CSS_NUMBER_MODE,{className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},i.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",begin:"\\b("+n1.join("|")+")\\b",relevance:0},{className:"selector-pseudo",begin:":("+a.join("|")+")"},{className:"selector-pseudo",begin:":(:)?("+r.join("|")+")"},c,{begin:/\(/,end:/\)/,contains:[i.CSS_NUMBER_MODE]},i.CSS_VARIABLE,{className:"attribute",begin:"\\b("+a1.join("|")+")\\b"},{begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{begin:/:/,end:/[;}{]/,relevance:0,contains:[i.BLOCK_COMMENT,c,i.HEXCOLOR,i.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,i.IMPORTANT,i.FUNCTION_DISPATCH]},{begin:"@(page|font-face)",keywords:{$pattern:s,keyword:"@page @font-face"}},{begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,keyword:u,attribute:t1.join(" ")},contains:[{begin:s,className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"},c,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,i.HEXCOLOR,i.CSS_NUMBER_MODE]},i.FUNCTION_DISPATCH]}}function l1(e){return{name:"Shell Session",aliases:["console","shellsession"],contains:[{className:"meta.prompt",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}function s1(e){const i=e.regex,r=e.COMMENT("--","$"),a={scope:"string",variants:[{begin:/'/,end:/'/,contains:[{match:/''/}]}]},s={begin:/"/,end:/"/,contains:[{match:/""/}]},u=["true","false","unknown"],l=["double precision","large object","with timezone","without timezone"],c=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],f=["add","asc","collation","desc","final","first","last","view"],p=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],h=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],g=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],w=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],m=h,v=[...p,...f].filter(B=>!h.includes(B)),S={scope:"variable",match:/@[a-z0-9][a-z0-9_]*/},_={scope:"operator",match:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},k={match:i.concat(/\b/,i.either(...m),/\s*\(/),relevance:0,keywords:{built_in:m}};function C(B){return i.concat(/\b/,i.either(...B.map(R=>R.replace(/\s+/,"\\s+"))),/\b/)}const I={scope:"keyword",match:C(w),relevance:0};function D(B,{exceptions:R,when:$}={}){const Q=$;return R=R||[],B.map(G=>G.match(/\|\d+$/)||R.includes(G)?G:Q(G)?`${G}|0`:G)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:D(v,{when:B=>B.length<3}),literal:u,type:c,built_in:g},contains:[{scope:"type",match:C(l)},I,k,S,a,s,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,r,_]}}function lm(e){return e?typeof e=="string"?e:e.source:null}function Aa(e){return gn("(?=",e,")")}function gn(...e){return e.map(r=>lm(r)).join("")}function u1(e){const i=e[e.length-1];return typeof i=="object"&&i.constructor===Object?(e.splice(e.length-1,1),i):{}}function st(...e){return"("+(u1(e).capture?"":"?:")+e.map(a=>lm(a)).join("|")+")"}const Cc=e=>gn(/\b/,e,/\w$/.test(e)?/\b/:/\B/),c1=["Protocol","Type"].map(Cc),pg=["init","self"].map(Cc),d1=["Any","Self"],Mu=["actor","any","associatedtype","async","await",/as\?/,/as!/,"as","borrowing","break","case","catch","class","consume","consuming","continue","convenience","copy","default","defer","deinit","didSet","distributed","do","dynamic","each","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","macro","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","package","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],gg=["false","nil","true"],f1=["assignment","associativity","higherThan","left","lowerThan","none","right"],p1=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warning"],hg=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],sm=st(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),um=st(sm,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Ou=gn(sm,um,"*"),cm=st(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),yl=st(cm,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Zt=gn(cm,yl,"*"),sl=gn(/[A-Z]/,yl,"*"),g1=["attached","autoclosure",gn(/convention\(/,st("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","freestanding","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",gn(/objc\(/,Zt,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","Sendable","testable","UIApplicationMain","unchecked","unknown","usableFromInline","warn_unqualified_access"],h1=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function m1(e){const i={match:/\s+/,relevance:0},r=e.COMMENT("/\\*","\\*/",{contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,r],s={match:[/\./,st(...c1,...pg)],className:{2:"keyword"}},u={match:gn(/\./,st(...Mu)),relevance:0},l=Mu.filter(J=>typeof J=="string").concat(["_|0"]),c=Mu.filter(J=>typeof J!="string").concat(d1).map(Cc),f={variants:[{className:"keyword",match:st(...c,...pg)}]},p={$pattern:st(/\b\w+/,/#\w+/),keyword:l.concat(p1),literal:gg},h=[s,u,f],g={match:gn(/\./,st(...hg)),relevance:0},w={className:"built_in",match:gn(/\b/,st(...hg),/(?=\()/)},m=[g,w],v={match:/->/,relevance:0},S={className:"operator",relevance:0,variants:[{match:Ou},{match:`\\.(\\.|${um})+`}]},_=[v,S],k="([0-9]_*)+",C="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{match:`\\b(${k})(\\.(${k}))?([eE][+-]?(${k}))?\\b`},{match:`\\b0x(${C})(\\.(${C}))?([pP][+-]?(${k}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},D=(J="")=>({className:"subst",variants:[{match:gn(/\\/,J,/[0\\tnr"']/)},{match:gn(/\\/,J,/u\{[0-9a-fA-F]{1,8}\}/)}]}),B=(J="")=>({className:"subst",match:gn(/\\/,J,/[\t ]*(?:[\r\n]|\r\n)/)}),R=(J="")=>({className:"subst",label:"interpol",begin:gn(/\\/,J,/\(/),end:/\)/}),$=(J="")=>({begin:gn(J,/"""/),end:gn(/"""/,J),contains:[D(J),B(J),R(J)]}),Q=(J="")=>({begin:gn(J,/"/),end:gn(/"/,J),contains:[D(J),R(J)]}),G={className:"string",variants:[$(),$("#"),$("##"),$("###"),Q(),Q("#"),Q("##"),Q("###")]},U=[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}],oe={begin:/\/[^\s](?=[^/\n]*\/)/,end:/\//,contains:U},O=J=>{const F=gn(J,/\//),N=gn(/\//,J);return{begin:F,end:N,contains:[...U,{scope:"comment",begin:`#(?!.*${N})`,end:/$/}]}},Y={scope:"regexp",variants:[O("###"),O("##"),O("#"),oe]},x={match:gn(/`/,Zt,/`/)},V={className:"variable",match:/\$\d+/},ge={className:"variable",match:`\\$${yl}+`},ie=[x,V,ge],ne={match:/(@|#(un)?)available/,scope:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:h1,contains:[..._,I,G]}]}},Z={scope:"keyword",match:gn(/@/,st(...g1),Aa(st(/\(/,/\s+/)))},L={scope:"meta",match:gn(/@/,Zt)},A=[ne,Z,L],P={match:Aa(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:gn(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,yl,"+")},{className:"type",match:sl,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:gn(/\s+&\s+/,Aa(sl)),relevance:0}]},M={begin:/</,end:/>/,keywords:p,contains:[...a,...h,...A,v,P]};P.contains.push(M);const ue={match:gn(Zt,/\s*:/),keywords:"_|0",relevance:0},le={begin:/\(/,end:/\)/,relevance:0,keywords:p,contains:["self",ue,...a,Y,...h,...m,..._,I,G,...ie,...A,P]},Ce={begin:/</,end:/>/,keywords:"repeat each",contains:[...a,P]},Ue={begin:st(Aa(gn(Zt,/\s*:/)),Aa(gn(Zt,/\s+/,Zt,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Zt}]},Ie={begin:/\(/,end:/\)/,keywords:p,contains:[Ue,...a,...h,..._,I,G,...A,P,le],endsParent:!0,illegal:/["']/},Pe={match:[/(func|macro)/,/\s+/,st(x.match,Zt,Ou)],className:{1:"keyword",3:"title.function"},contains:[Ce,Ie,i],illegal:[/\[/,/%/]},Ye={match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},contains:[Ce,Ie,i],illegal:/\[|%/},an={match:[/operator/,/\s+/,Ou],className:{1:"keyword",3:"title"}},Fn={begin:[/precedencegroup/,/\s+/,sl],className:{1:"keyword",3:"title"},contains:[P],keywords:[...f1,...gg],end:/}/},In={match:[/class\b/,/\s+/,/func\b/,/\s+/,/\b[A-Za-z_][A-Za-z0-9_]*\b/],scope:{1:"keyword",3:"keyword",5:"title.function"}},E={match:[/class\b/,/\s+/,/var\b/],scope:{1:"keyword",3:"keyword"}},se={begin:[/(struct|protocol|class|extension|enum|actor)/,/\s+/,Zt,/\s*/],beginScope:{1:"keyword",3:"title.class"},keywords:p,contains:[Ce,...h,{begin:/:/,end:/\{/,keywords:p,contains:[{scope:"title.class.inherited",match:sl},...h],relevance:0}]};for(const J of G.variants){const F=J.contains.find(K=>K.label==="interpol");F.keywords=p;const N=[...h,...m,..._,I,G,...ie];F.contains=[...N,{begin:/\(/,end:/\)/,contains:["self",...N]}]}return{name:"Swift",keywords:p,contains:[...a,Pe,Ye,In,E,se,an,Fn,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0},Y,...h,...m,..._,I,G,...ie,...A,P,le]}}const wl="[A-Za-z$_][0-9A-Za-z$_]*",dm=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],fm=["true","false","null","undefined","NaN","Infinity"],pm=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],gm=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],hm=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],mm=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],ym=[].concat(hm,pm,gm);function y1(e){const i=e.regex,r=(ne,{after:Z})=>{const L="</"+ne[0].slice(1);return ne.input.indexOf(L,Z)!==-1},a=wl,s={begin:"<>",end:"</>"},u=/<[A-Za-z0-9\\._:-]+\s*\/>/,l={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(ne,Z)=>{const L=ne[0].length+ne.index,A=ne.input[L];if(A==="<"||A===","){Z.ignoreMatch();return}A===">"&&(r(ne,{after:L})||Z.ignoreMatch());let P;const M=ne.input.substring(L);if(P=M.match(/^\s*=/)){Z.ignoreMatch();return}if((P=M.match(/^\s+extends\s+/))&&P.index===0){Z.ignoreMatch();return}}},c={$pattern:wl,keyword:dm,literal:fm,built_in:ym,"variable.language":mm},f="[0-9](_?[0-9])*",p=`\\.(${f})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={className:"number",variants:[{begin:`(\\b(${h})((${p})|\\.)?|(${p}))[eE][+-]?(${f})\\b`},{begin:`\\b(${h})\\b((${p})\\b|\\.)?|(${p})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},w={className:"subst",begin:"\\$\\{",end:"\\}",keywords:c,contains:[]},m={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"xml"}},v={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"css"}},S={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,w],subLanguage:"graphql"}},_={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,w]},C={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},I=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,S,_,{match:/\$\d+/},g];w.contains=I.concat({begin:/\{/,end:/\}/,keywords:c,contains:["self"].concat(I)});const D=[].concat(C,w.contains),B=D.concat([{begin:/(\s*)\(/,end:/\)/,keywords:c,contains:["self"].concat(D)}]),R={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:B},$={variants:[{match:[/class/,/\s+/,a,/\s+/,/extends/,/\s+/,i.concat(a,"(",i.concat(/\./,a),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,a],scope:{1:"keyword",3:"title.class"}}]},Q={relevance:0,match:i.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...pm,...gm]}},G={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},U={variants:[{match:[/function/,/\s+/,a,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[R],illegal:/%/},oe={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function O(ne){return i.concat("(?!",ne.join("|"),")")}const Y={match:i.concat(/\b/,O([...hm,"super","import"].map(ne=>`${ne}\\s*\\(`)),a,i.lookahead(/\s*\(/)),className:"title.function",relevance:0},x={begin:i.concat(/\./,i.lookahead(i.concat(a,/(?![0-9A-Za-z$_(])/))),end:a,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},V={match:[/get|set/,/\s+/,a,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},R]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",ie={match:[/const|var|let/,/\s+/,a,/\s*/,/=\s*/,/(async\s*)?/,i.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[R]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:c,exports:{PARAMS_CONTAINS:B,CLASS_REFERENCE:Q},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),G,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,m,v,S,_,C,{match:/\$\d+/},g,Q,{scope:"attr",match:a+i.lookahead(":"),relevance:0},ie,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[C,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:c,contains:B}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:u},{begin:l.begin,"on:begin":l.isTrulyOpeningTag,end:l.end}],subLanguage:"xml",contains:[{begin:l.begin,end:l.end,skip:!0,contains:["self"]}]}]},U,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[R,e.inherit(e.TITLE_MODE,{begin:a,className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+a,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[R]},Y,oe,$,V,{match:/\$[(.]/}]}}function w1(e){const i=e.regex,r=y1(e),a=wl,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],u={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},l={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[r.exports.CLASS_REFERENCE]},c={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},f=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],p={$pattern:wl,keyword:dm.concat(f),literal:fm,built_in:ym.concat(s),"variable.language":mm},h={className:"meta",begin:"@"+a},g=(S,_,k)=>{const C=S.contains.findIndex(I=>I.label===_);if(C===-1)throw new Error("can not find mode to replace");S.contains.splice(C,1,k)};Object.assign(r.keywords,p),r.exports.PARAMS_CONTAINS.push(h);const w=r.contains.find(S=>S.scope==="attr"),m=Object.assign({},w,{match:i.concat(a,i.lookahead(/\s*\?:/))});r.exports.PARAMS_CONTAINS.push([r.exports.CLASS_REFERENCE,w,m]),r.contains=r.contains.concat([h,u,l,m]),g(r,"shebang",e.SHEBANG()),g(r,"use_strict",c);const v=r.contains.find(S=>S.label==="func.def");return v.relevance=0,Object.assign(r,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),r}function b1(e){const i=e.regex,r={className:"string",begin:/"(""|[^/n])"C\b/},a={className:"string",begin:/"/,end:/"/,illegal:/\n/,contains:[{begin:/""/}]},s=/\d{1,2}\/\d{1,2}\/\d{4}/,u=/\d{4}-\d{1,2}-\d{1,2}/,l=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,c=/\d{1,2}(:\d{1,2}){1,2}/,f={className:"literal",variants:[{begin:i.concat(/# */,i.either(u,s),/ *#/)},{begin:i.concat(/# */,c,/ *#/)},{begin:i.concat(/# */,l,/ *#/)},{begin:i.concat(/# */,i.either(u,s),/ +/,i.either(l,c),/ *#/)}]},p={className:"number",relevance:0,variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},h={className:"label",begin:/^\w+:/},g=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]}),w=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",literal:"true false nothing"},illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[r,a,f,p,h,g,w,{className:"meta",begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,end:/$/,keywords:{keyword:"const disable else elseif enable end externalsource if region then"},contains:[w]}]}}function S1(e){e.regex;const i=e.COMMENT(/\(;/,/;\)/);i.contains.push("self");const r=e.COMMENT(/;;/,/$/),a=["anyfunc","block","br","br_if","br_table","call","call_indirect","data","drop","elem","else","end","export","func","global.get","global.set","local.get","local.set","local.tee","get_global","get_local","global","if","import","local","loop","memory","memory.grow","memory.size","module","mut","nop","offset","param","result","return","select","set_global","set_local","start","table","tee_local","then","type","unreachable"],s={begin:[/(?:func|call|call_indirect)/,/\s+/,/\$[^\s)]+/],className:{1:"keyword",3:"title.function"}},u={className:"variable",begin:/\$[\w_]+/},l={match:/(\((?!;)|\))+/,className:"punctuation",relevance:0},c={className:"number",relevance:0,match:/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/},f={match:/(i32|i64|f32|f64)(?!\.)/,className:"type"},p={className:"keyword",match:/\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/};return{name:"WebAssembly",keywords:{$pattern:/[\w.]+/,keyword:a},contains:[r,i,{match:[/(?:offset|align)/,/\s*/,/=/],className:{1:"keyword",3:"operator"}},u,l,s,e.QUOTE_STRING_MODE,f,p,c]}}function k1(e){const i=e.regex,r=i.concat(/[\p{L}_]/u,i.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),a=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},u={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},l=e.inherit(u,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{className:"string"}),f=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),p={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:a,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[u,f,c,l,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[u,l,f,c]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[f]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[p],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[p],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:i.concat(/</,i.lookahead(i.concat(r,i.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:r,relevance:0,starts:p}]},{className:"tag",begin:i.concat(/<\//,i.lookahead(i.concat(r,/>/))),contains:[{className:"name",begin:r,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function v1(e){const i="true false yes no null",r="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},s={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},u={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},l={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,s]},c=e.inherit(l,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),w={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},m={end:",",endsWithParent:!0,excludeEnd:!0,keywords:i,relevance:0},v={begin:/\{/,end:/\}/,contains:[m],illegal:"\\n",relevance:0},S={begin:"\\[",end:"\\]",contains:[m],illegal:"\\n",relevance:0},_=[a,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+r},{className:"type",begin:"!<"+r+">"},{className:"type",begin:"!"+r},{className:"type",begin:"!!"+r},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:i,keywords:{literal:i}},w,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},v,S,u,l],k=[..._];return k.pop(),k.push(c),m.contains=k,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:_}}const _1={arduino:iT,bash:aT,c:oT,cpp:lT,csharp:sT,css:yT,diff:wT,go:bT,graphql:ST,ini:kT,java:vT,javascript:CT,json:IT,kotlin:LT,less:FT,lua:zT,makefile:UT,markdown:jT,objectivec:VT,perl:WT,php:HT,"php-template":$T,plaintext:GT,python:KT,"python-repl":qT,r:YT,ruby:JT,rust:ZT,scss:o1,shell:l1,sql:s1,swift:m1,typescript:w1,vbnet:b1,wasm:S1,xml:k1,yaml:v1};var Nu,mg;function x1(){if(mg)return Nu;mg=1;function e(j){return j instanceof Map?j.clear=j.delete=j.set=function(){throw new Error("map is read-only")}:j instanceof Set&&(j.add=j.clear=j.delete=function(){throw new Error("set is read-only")}),Object.freeze(j),Object.getOwnPropertyNames(j).forEach(ce=>{const Te=j[ce],Ke=typeof Te;(Ke==="object"||Ke==="function")&&!Object.isFrozen(Te)&&e(Te)}),j}class i{constructor(ce){ce.data===void 0&&(ce.data={}),this.data=ce.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(j){return j.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function a(j,...ce){const Te=Object.create(null);for(const Ke in j)Te[Ke]=j[Ke];return ce.forEach(function(Ke){for(const bn in Ke)Te[bn]=Ke[bn]}),Te}const s="</span>",u=j=>!!j.scope,l=(j,{prefix:ce})=>{if(j.startsWith("language:"))return j.replace("language:","language-");if(j.includes(".")){const Te=j.split(".");return[`${ce}${Te.shift()}`,...Te.map((Ke,bn)=>`${Ke}${"_".repeat(bn+1)}`)].join(" ")}return`${ce}${j}`};class c{constructor(ce,Te){this.buffer="",this.classPrefix=Te.classPrefix,ce.walk(this)}addText(ce){this.buffer+=r(ce)}openNode(ce){if(!u(ce))return;const Te=l(ce.scope,{prefix:this.classPrefix});this.span(Te)}closeNode(ce){u(ce)&&(this.buffer+=s)}value(){return this.buffer}span(ce){this.buffer+=`<span class="${ce}">`}}const f=(j={})=>{const ce={children:[]};return Object.assign(ce,j),ce};class p{constructor(){this.rootNode=f(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(ce){this.top.children.push(ce)}openNode(ce){const Te=f({scope:ce});this.add(Te),this.stack.push(Te)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(ce){return this.constructor._walk(ce,this.rootNode)}static _walk(ce,Te){return typeof Te=="string"?ce.addText(Te):Te.children&&(ce.openNode(Te),Te.children.forEach(Ke=>this._walk(ce,Ke)),ce.closeNode(Te)),ce}static _collapse(ce){typeof ce!="string"&&ce.children&&(ce.children.every(Te=>typeof Te=="string")?ce.children=[ce.children.join("")]:ce.children.forEach(Te=>{p._collapse(Te)}))}}class h extends p{constructor(ce){super(),this.options=ce}addText(ce){ce!==""&&this.add(ce)}startScope(ce){this.openNode(ce)}endScope(){this.closeNode()}__addSublanguage(ce,Te){const Ke=ce.root;Te&&(Ke.scope=`language:${Te}`),this.add(Ke)}toHTML(){return new c(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function g(j){return j?typeof j=="string"?j:j.source:null}function w(j){return S("(?=",j,")")}function m(j){return S("(?:",j,")*")}function v(j){return S("(?:",j,")?")}function S(...j){return j.map(Te=>g(Te)).join("")}function _(j){const ce=j[j.length-1];return typeof ce=="object"&&ce.constructor===Object?(j.splice(j.length-1,1),ce):{}}function k(...j){return"("+(_(j).capture?"":"?:")+j.map(Ke=>g(Ke)).join("|")+")"}function C(j){return new RegExp(j.toString()+"|").exec("").length-1}function I(j,ce){const Te=j&&j.exec(ce);return Te&&Te.index===0}const D=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function B(j,{joinWith:ce}){let Te=0;return j.map(Ke=>{Te+=1;const bn=Te;let vn=g(Ke),Oe="";for(;vn.length>0;){const Me=D.exec(vn);if(!Me){Oe+=vn;break}Oe+=vn.substring(0,Me.index),vn=vn.substring(Me.index+Me[0].length),Me[0][0]==="\\"&&Me[1]?Oe+="\\"+String(Number(Me[1])+bn):(Oe+=Me[0],Me[0]==="("&&Te++)}return Oe}).map(Ke=>`(${Ke})`).join(ce)}const R=/\b\B/,$="[a-zA-Z]\\w*",Q="[a-zA-Z_]\\w*",G="\\b\\d+(\\.\\d+)?",U="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",oe="\\b(0b[01]+)",O="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Y=(j={})=>{const ce=/^#![ ]*\//;return j.binary&&(j.begin=S(ce,/.*\b/,j.binary,/\b.*/)),a({scope:"meta",begin:ce,end:/$/,relevance:0,"on:begin":(Te,Ke)=>{Te.index!==0&&Ke.ignoreMatch()}},j)},x={begin:"\\\\[\\s\\S]",relevance:0},V={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[x]},ge={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[x]},ie={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ne=function(j,ce,Te={}){const Ke=a({scope:"comment",begin:j,end:ce,contains:[]},Te);Ke.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const bn=k("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return Ke.contains.push({begin:S(/[ ]+/,"(",bn,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),Ke},Z=ne("//","$"),L=ne("/\\*","\\*/"),A=ne("#","$"),P={scope:"number",begin:G,relevance:0},M={scope:"number",begin:U,relevance:0},ue={scope:"number",begin:oe,relevance:0},le={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[x,{begin:/\[/,end:/\]/,relevance:0,contains:[x]}]},Ce={scope:"title",begin:$,relevance:0},Ue={scope:"title",begin:Q,relevance:0},Ie={begin:"\\.\\s*"+Q,relevance:0};var Ye=Object.freeze({__proto__:null,APOS_STRING_MODE:V,BACKSLASH_ESCAPE:x,BINARY_NUMBER_MODE:ue,BINARY_NUMBER_RE:oe,COMMENT:ne,C_BLOCK_COMMENT_MODE:L,C_LINE_COMMENT_MODE:Z,C_NUMBER_MODE:M,C_NUMBER_RE:U,END_SAME_AS_BEGIN:function(j){return Object.assign(j,{"on:begin":(ce,Te)=>{Te.data._beginMatch=ce[1]},"on:end":(ce,Te)=>{Te.data._beginMatch!==ce[1]&&Te.ignoreMatch()}})},HASH_COMMENT_MODE:A,IDENT_RE:$,MATCH_NOTHING_RE:R,METHOD_GUARD:Ie,NUMBER_MODE:P,NUMBER_RE:G,PHRASAL_WORDS_MODE:ie,QUOTE_STRING_MODE:ge,REGEXP_MODE:le,RE_STARTERS_RE:O,SHEBANG:Y,TITLE_MODE:Ce,UNDERSCORE_IDENT_RE:Q,UNDERSCORE_TITLE_MODE:Ue});function an(j,ce){j.input[j.index-1]==="."&&ce.ignoreMatch()}function Fn(j,ce){j.className!==void 0&&(j.scope=j.className,delete j.className)}function In(j,ce){ce&&j.beginKeywords&&(j.begin="\\b("+j.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",j.__beforeBegin=an,j.keywords=j.keywords||j.beginKeywords,delete j.beginKeywords,j.relevance===void 0&&(j.relevance=0))}function E(j,ce){Array.isArray(j.illegal)&&(j.illegal=k(...j.illegal))}function se(j,ce){if(j.match){if(j.begin||j.end)throw new Error("begin & end are not supported with match");j.begin=j.match,delete j.match}}function J(j,ce){j.relevance===void 0&&(j.relevance=1)}const F=(j,ce)=>{if(!j.beforeMatch)return;if(j.starts)throw new Error("beforeMatch cannot be used with starts");const Te=Object.assign({},j);Object.keys(j).forEach(Ke=>{delete j[Ke]}),j.keywords=Te.keywords,j.begin=S(Te.beforeMatch,w(Te.begin)),j.starts={relevance:0,contains:[Object.assign(Te,{endsParent:!0})]},j.relevance=0,delete Te.beforeMatch},N=["of","and","for","in","not","or","if","then","parent","list","value"],K="keyword";function de(j,ce,Te=K){const Ke=Object.create(null);return typeof j=="string"?bn(Te,j.split(" ")):Array.isArray(j)?bn(Te,j):Object.keys(j).forEach(function(vn){Object.assign(Ke,de(j[vn],ce,vn))}),Ke;function bn(vn,Oe){ce&&(Oe=Oe.map(Me=>Me.toLowerCase())),Oe.forEach(function(Me){const Ve=Me.split("|");Ke[Ve[0]]=[vn,pe(Ve[0],Ve[1])]})}}function pe(j,ce){return ce?Number(ce):ee(j)?0:1}function ee(j){return N.includes(j.toLowerCase())}const we={},Ee=j=>{console.error(j)},be=(j,...ce)=>{console.log(`WARN: ${j}`,...ce)},q=(j,ce)=>{we[`${j}/${ce}`]||(console.log(`Deprecated as of ${j}. ${ce}`),we[`${j}/${ce}`]=!0)},fe=new Error;function _e(j,ce,{key:Te}){let Ke=0;const bn=j[Te],vn={},Oe={};for(let Me=1;Me<=ce.length;Me++)Oe[Me+Ke]=bn[Me],vn[Me+Ke]=!0,Ke+=C(ce[Me-1]);j[Te]=Oe,j[Te]._emit=vn,j[Te]._multi=!0}function je(j){if(Array.isArray(j.begin)){if(j.skip||j.excludeBegin||j.returnBegin)throw Ee("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof j.beginScope!="object"||j.beginScope===null)throw Ee("beginScope must be object"),fe;_e(j,j.begin,{key:"beginScope"}),j.begin=B(j.begin,{joinWith:""})}}function Ze(j){if(Array.isArray(j.end)){if(j.skip||j.excludeEnd||j.returnEnd)throw Ee("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof j.endScope!="object"||j.endScope===null)throw Ee("endScope must be object"),fe;_e(j,j.end,{key:"endScope"}),j.end=B(j.end,{joinWith:""})}}function dn(j){j.scope&&typeof j.scope=="object"&&j.scope!==null&&(j.beginScope=j.scope,delete j.scope)}function Gn(j){dn(j),typeof j.beginScope=="string"&&(j.beginScope={_wrap:j.beginScope}),typeof j.endScope=="string"&&(j.endScope={_wrap:j.endScope}),je(j),Ze(j)}function rn(j){function ce(Oe,Me){return new RegExp(g(Oe),"m"+(j.case_insensitive?"i":"")+(j.unicodeRegex?"u":"")+(Me?"g":""))}class Te{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(Me,Ve){Ve.position=this.position++,this.matchIndexes[this.matchAt]=Ve,this.regexes.push([Ve,Me]),this.matchAt+=C(Me)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const Me=this.regexes.map(Ve=>Ve[1]);this.matcherRe=ce(B(Me,{joinWith:"|"}),!0),this.lastIndex=0}exec(Me){this.matcherRe.lastIndex=this.lastIndex;const Ve=this.matcherRe.exec(Me);if(!Ve)return null;const Rn=Ve.findIndex((Ht,fr)=>fr>0&&Ht!==void 0),mn=this.matchIndexes[Rn];return Ve.splice(0,Rn),Object.assign(Ve,mn)}}class Ke{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(Me){if(this.multiRegexes[Me])return this.multiRegexes[Me];const Ve=new Te;return this.rules.slice(Me).forEach(([Rn,mn])=>Ve.addRule(Rn,mn)),Ve.compile(),this.multiRegexes[Me]=Ve,Ve}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(Me,Ve){this.rules.push([Me,Ve]),Ve.type==="begin"&&this.count++}exec(Me){const Ve=this.getMatcher(this.regexIndex);Ve.lastIndex=this.lastIndex;let Rn=Ve.exec(Me);if(this.resumingScanAtSamePosition()&&!(Rn&&Rn.index===this.lastIndex)){const mn=this.getMatcher(0);mn.lastIndex=this.lastIndex+1,Rn=mn.exec(Me)}return Rn&&(this.regexIndex+=Rn.position+1,this.regexIndex===this.count&&this.considerAll()),Rn}}function bn(Oe){const Me=new Ke;return Oe.contains.forEach(Ve=>Me.addRule(Ve.begin,{rule:Ve,type:"begin"})),Oe.terminatorEnd&&Me.addRule(Oe.terminatorEnd,{type:"end"}),Oe.illegal&&Me.addRule(Oe.illegal,{type:"illegal"}),Me}function vn(Oe,Me){const Ve=Oe;if(Oe.isCompiled)return Ve;[Fn,se,Gn,F].forEach(mn=>mn(Oe,Me)),j.compilerExtensions.forEach(mn=>mn(Oe,Me)),Oe.__beforeBegin=null,[In,E,J].forEach(mn=>mn(Oe,Me)),Oe.isCompiled=!0;let Rn=null;return typeof Oe.keywords=="object"&&Oe.keywords.$pattern&&(Oe.keywords=Object.assign({},Oe.keywords),Rn=Oe.keywords.$pattern,delete Oe.keywords.$pattern),Rn=Rn||/\w+/,Oe.keywords&&(Oe.keywords=de(Oe.keywords,j.case_insensitive)),Ve.keywordPatternRe=ce(Rn,!0),Me&&(Oe.begin||(Oe.begin=/\B|\b/),Ve.beginRe=ce(Ve.begin),!Oe.end&&!Oe.endsWithParent&&(Oe.end=/\B|\b/),Oe.end&&(Ve.endRe=ce(Ve.end)),Ve.terminatorEnd=g(Ve.end)||"",Oe.endsWithParent&&Me.terminatorEnd&&(Ve.terminatorEnd+=(Oe.end?"|":"")+Me.terminatorEnd)),Oe.illegal&&(Ve.illegalRe=ce(Oe.illegal)),Oe.contains||(Oe.contains=[]),Oe.contains=[].concat(...Oe.contains.map(function(mn){return bt(mn==="self"?Oe:mn)})),Oe.contains.forEach(function(mn){vn(mn,Ve)}),Oe.starts&&vn(Oe.starts,Me),Ve.matcher=bn(Ve),Ve}if(j.compilerExtensions||(j.compilerExtensions=[]),j.contains&&j.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return j.classNameAliases=a(j.classNameAliases||{}),vn(j)}function Yn(j){return j?j.endsWithParent||Yn(j.starts):!1}function bt(j){return j.variants&&!j.cachedVariants&&(j.cachedVariants=j.variants.map(function(ce){return a(j,{variants:null},ce)})),j.cachedVariants?j.cachedVariants:Yn(j)?a(j,{starts:j.starts?a(j.starts):null}):Object.isFrozen(j)?a(j):j}var fn="11.11.1";class tt extends Error{constructor(ce,Te){super(ce),this.name="HTMLInjectionError",this.html=Te}}const zn=r,cr=a,dr=Symbol("nomatch"),Pt=7,rt=function(j){const ce=Object.create(null),Te=Object.create(null),Ke=[];let bn=!0;const vn="Could not find the language '{}', did you forget to load/include a language module?",Oe={disableAutodetect:!0,name:"Plain text",contains:[]};let Me={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:h};function Ve(ke){return Me.noHighlightRe.test(ke)}function Rn(ke){let ze=ke.className+" ";ze+=ke.parentNode?ke.parentNode.className:"";const Qe=Me.languageDetectRe.exec(ze);if(Qe){const nn=Dt(Qe[1]);return nn||(be(vn.replace("{}",Qe[1])),be("Falling back to no-highlight mode for this block.",ke)),nn?Qe[1]:"no-highlight"}return ze.split(/\s+/).find(nn=>Ve(nn)||Dt(nn))}function mn(ke,ze,Qe){let nn="",Mn="";typeof ze=="object"?(nn=ke,Qe=ze.ignoreIllegals,Mn=ze.language):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),q("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Mn=ke,nn=ze),Qe===void 0&&(Qe=!0);const En={code:nn,language:Mn};Ur("before:highlight",En);const $t=En.result?En.result:Ht(En.language,En.code,Qe);return $t.code=En.code,Ur("after:highlight",$t),$t}function Ht(ke,ze,Qe,nn){const Mn=Object.create(null);function En(xe,Ne){return xe.keywords[Ne]}function $t(){if(!Je.keywords){On.addText(pn);return}let xe=0;Je.keywordPatternRe.lastIndex=0;let Ne=Je.keywordPatternRe.exec(pn),Ge="";for(;Ne;){Ge+=pn.substring(xe,Ne.index);const on=Ct.case_insensitive?Ne[0].toLowerCase():Ne[0],An=En(Je,on);if(An){const[Vn,Ol]=An;if(On.addText(Ge),Ge="",Mn[on]=(Mn[on]||0)+1,Mn[on]<=Pt&&(Wr+=Ol),Vn.startsWith("_"))Ge+=Ne[0];else{const Za=Ct.classNameAliases[Vn]||Vn;at(Ne[0],Za)}}else Ge+=Ne[0];xe=Je.keywordPatternRe.lastIndex,Ne=Je.keywordPatternRe.exec(pn)}Ge+=pn.substring(xe),On.addText(Ge)}function di(){if(pn==="")return;let xe=null;if(typeof Je.subLanguage=="string"){if(!ce[Je.subLanguage]){On.addText(pn);return}xe=Ht(Je.subLanguage,pn,!0,qi[Je.subLanguage]),qi[Je.subLanguage]=xe._top}else xe=zr(pn,Je.subLanguage.length?Je.subLanguage:null);Je.relevance>0&&(Wr+=xe.relevance),On.__addSublanguage(xe._emitter,xe.language)}function it(){Je.subLanguage!=null?di():$t(),pn=""}function at(xe,Ne){xe!==""&&(On.startScope(Ne),On.addText(xe),On.endScope())}function jr(xe,Ne){let Ge=1;const on=Ne.length-1;for(;Ge<=on;){if(!xe._emit[Ge]){Ge++;continue}const An=Ct.classNameAliases[xe[Ge]]||xe[Ge],Vn=Ne[Ge];An?at(Vn,An):(pn=Vn,$t(),pn=""),Ge++}}function pr(xe,Ne){return xe.scope&&typeof xe.scope=="string"&&On.openNode(Ct.classNameAliases[xe.scope]||xe.scope),xe.beginScope&&(xe.beginScope._wrap?(at(pn,Ct.classNameAliases[xe.beginScope._wrap]||xe.beginScope._wrap),pn=""):xe.beginScope._multi&&(jr(xe.beginScope,Ne),pn="")),Je=Object.create(xe,{parent:{value:Je}}),Je}function Vr(xe,Ne,Ge){let on=I(xe.endRe,Ge);if(on){if(xe["on:end"]){const An=new i(xe);xe["on:end"](Ne,An),An.isMatchIgnored&&(on=!1)}if(on){for(;xe.endsParent&&xe.parent;)xe=xe.parent;return xe}}if(xe.endsWithParent)return Vr(xe.parent,Ne,Ge)}function Ll(xe){return Je.matcher.regexIndex===0?(pn+=xe[0],1):(mr=!0,0)}function Ml(xe){const Ne=xe[0],Ge=xe.rule,on=new i(Ge),An=[Ge.__beforeBegin,Ge["on:begin"]];for(const Vn of An)if(Vn&&(Vn(xe,on),on.isMatchIgnored))return Ll(Ne);return Ge.skip?pn+=Ne:(Ge.excludeBegin&&(pn+=Ne),it(),!Ge.returnBegin&&!Ge.excludeBegin&&(pn=Ne)),pr(Ge,xe),Ge.returnBegin?0:Ne.length}function Gi(xe){const Ne=xe[0],Ge=ze.substring(xe.index),on=Vr(Je,xe,Ge);if(!on)return dr;const An=Je;Je.endScope&&Je.endScope._wrap?(it(),at(Ne,Je.endScope._wrap)):Je.endScope&&Je.endScope._multi?(it(),jr(Je.endScope,xe)):An.skip?pn+=Ne:(An.returnEnd||An.excludeEnd||(pn+=Ne),it(),An.excludeEnd&&(pn=Ne));do Je.scope&&On.closeNode(),!Je.skip&&!Je.subLanguage&&(Wr+=Je.relevance),Je=Je.parent;while(Je!==on.parent);return on.starts&&pr(on.starts,xe),An.returnEnd?0:Ne.length}function Ja(){const xe=[];for(let Ne=Je;Ne!==Ct;Ne=Ne.parent)Ne.scope&&xe.unshift(Ne.scope);xe.forEach(Ne=>On.openNode(Ne))}let gr={};function hr(xe,Ne){const Ge=Ne&&Ne[0];if(pn+=xe,Ge==null)return it(),0;if(gr.type==="begin"&&Ne.type==="end"&&gr.index===Ne.index&&Ge===""){if(pn+=ze.slice(Ne.index,Ne.index+1),!bn){const on=new Error(`0 width match regex (${ke})`);throw on.languageName=ke,on.badRule=gr.rule,on}return 1}if(gr=Ne,Ne.type==="begin")return Ml(Ne);if(Ne.type==="illegal"&&!Qe){const on=new Error('Illegal lexeme "'+Ge+'" for mode "'+(Je.scope||"<unnamed>")+'"');throw on.mode=Je,on}else if(Ne.type==="end"){const on=Gi(Ne);if(on!==dr)return on}if(Ne.type==="illegal"&&Ge==="")return pn+=`
`,1;if(Hr>1e5&&Hr>Ne.index*3)throw new Error("potential infinite loop, way more iterations than matches");return pn+=Ge,Ge.length}const Ct=Dt(ke);if(!Ct)throw Ee(vn.replace("{}",ke)),new Error('Unknown language: "'+ke+'"');const Ki=rn(Ct);let sn="",Je=nn||Ki;const qi={},On=new Me.__emitter(Me);Ja();let pn="",Wr=0,Gt=0,Hr=0,mr=!1;try{if(Ct.__emitTokens)Ct.__emitTokens(ze,On);else{for(Je.matcher.considerAll();;){Hr++,mr?mr=!1:Je.matcher.considerAll(),Je.matcher.lastIndex=Gt;const xe=Je.matcher.exec(ze);if(!xe)break;const Ne=ze.substring(Gt,xe.index),Ge=hr(Ne,xe);Gt=xe.index+Ge}hr(ze.substring(Gt))}return On.finalize(),sn=On.toHTML(),{language:ke,value:sn,relevance:Wr,illegal:!1,_emitter:On,_top:Je}}catch(xe){if(xe.message&&xe.message.includes("Illegal"))return{language:ke,value:zn(ze),illegal:!0,relevance:0,_illegalBy:{message:xe.message,index:Gt,context:ze.slice(Gt-100,Gt+100),mode:xe.mode,resultSoFar:sn},_emitter:On};if(bn)return{language:ke,value:zn(ze),illegal:!1,relevance:0,errorRaised:xe,_emitter:On,_top:Je};throw xe}}function fr(ke){const ze={value:zn(ke),illegal:!1,relevance:0,_top:Oe,_emitter:new Me.__emitter(Me)};return ze._emitter.addText(ke),ze}function zr(ke,ze){ze=ze||Me.languages||Object.keys(ce);const Qe=fr(ke),nn=ze.filter(Dt).filter(Ya).map(it=>Ht(it,ke,!1));nn.unshift(Qe);const Mn=nn.sort((it,at)=>{if(it.relevance!==at.relevance)return at.relevance-it.relevance;if(it.language&&at.language){if(Dt(it.language).supersetOf===at.language)return 1;if(Dt(at.language).supersetOf===it.language)return-1}return 0}),[En,$t]=Mn,di=En;return di.secondBest=$t,di}function Cl(ke,ze,Qe){const nn=ze&&Te[ze]||Qe;ke.classList.add("hljs"),ke.classList.add(`language-${nn}`)}function Wi(ke){let ze=null;const Qe=Rn(ke);if(Ve(Qe))return;if(Ur("before:highlightElement",{el:ke,language:Qe}),ke.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",ke);return}if(ke.children.length>0&&(Me.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(ke)),Me.throwUnescapedHTML))throw new tt("One of your code blocks includes unescaped HTML.",ke.innerHTML);ze=ke;const nn=ze.textContent,Mn=Qe?mn(nn,{language:Qe,ignoreIllegals:!0}):zr(nn);ke.innerHTML=Mn.value,ke.dataset.highlighted="yes",Cl(ke,Qe,Mn.language),ke.result={language:Mn.language,re:Mn.relevance,relevance:Mn.relevance},Mn.secondBest&&(ke.secondBest={language:Mn.secondBest.language,relevance:Mn.secondBest.relevance}),Ur("after:highlightElement",{el:ke,result:Mn,text:nn})}function Il(ke){Me=cr(Me,ke)}const er=()=>{ui(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ha(){ui(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Hi=!1;function ui(){function ke(){ui()}if(document.readyState==="loading"){Hi||window.addEventListener("DOMContentLoaded",ke,!1),Hi=!0;return}document.querySelectorAll(Me.cssSelector).forEach(Wi)}function $a(ke,ze){let Qe=null;try{Qe=ze(j)}catch(nn){if(Ee("Language definition for '{}' could not be registered.".replace("{}",ke)),bn)Ee(nn);else throw nn;Qe=Oe}Qe.name||(Qe.name=ke),ce[ke]=Qe,Qe.rawDefinition=ze.bind(null,j),Qe.aliases&&qa(Qe.aliases,{languageName:ke})}function Ga(ke){delete ce[ke];for(const ze of Object.keys(Te))Te[ze]===ke&&delete Te[ze]}function Ka(){return Object.keys(ce)}function Dt(ke){return ke=(ke||"").toLowerCase(),ce[ke]||ce[Te[ke]]}function qa(ke,{languageName:ze}){typeof ke=="string"&&(ke=[ke]),ke.forEach(Qe=>{Te[Qe.toLowerCase()]=ze})}function Ya(ke){const ze=Dt(ke);return ze&&!ze.disableAutodetect}function xn(ke){ke["before:highlightBlock"]&&!ke["before:highlightElement"]&&(ke["before:highlightElement"]=ze=>{ke["before:highlightBlock"](Object.assign({block:ze.el},ze))}),ke["after:highlightBlock"]&&!ke["after:highlightElement"]&&(ke["after:highlightElement"]=ze=>{ke["after:highlightBlock"](Object.assign({block:ze.el},ze))})}function Al(ke){xn(ke),Ke.push(ke)}function $i(ke){const ze=Ke.indexOf(ke);ze!==-1&&Ke.splice(ze,1)}function Ur(ke,ze){const Qe=ke;Ke.forEach(function(nn){nn[Qe]&&nn[Qe](ze)})}function ci(ke){return q("10.7.0","highlightBlock will be removed entirely in v12.0"),q("10.7.0","Please use highlightElement now."),Wi(ke)}Object.assign(j,{highlight:mn,highlightAuto:zr,highlightAll:ui,highlightElement:Wi,highlightBlock:ci,configure:Il,initHighlighting:er,initHighlightingOnLoad:Ha,registerLanguage:$a,unregisterLanguage:Ga,listLanguages:Ka,getLanguage:Dt,registerAliases:qa,autoDetection:Ya,inherit:cr,addPlugin:Al,removePlugin:$i}),j.debugMode=function(){bn=!1},j.safeMode=function(){bn=!0},j.versionString=fn,j.regex={concat:S,lookahead:w,either:k,optional:v,anyNumberOfTimes:m};for(const ke in Ye)typeof Ye[ke]=="object"&&e(Ye[ke]);return Object.assign(j,Ye),j},ct=rt({});return ct.newInstance=()=>rt({}),Nu=ct,ct.HighlightJS=ct,ct.default=ct,Nu}var E1=x1();const T1=Fa(E1),yg={},C1="hljs-";function I1(e){const i=T1.newInstance();return e&&u(e),{highlight:r,highlightAuto:a,listLanguages:s,register:u,registerAlias:l,registered:c};function r(f,p,h){const g=h||yg,w=typeof g.prefix=="string"?g.prefix:C1;if(!i.getLanguage(f))throw new Error("Unknown language: `"+f+"` is not registered");i.configure({__emitter:A1,classPrefix:w});const m=i.highlight(p,{ignoreIllegals:!0,language:f});if(m.errorRaised)throw new Error("Could not highlight with `Highlight.js`",{cause:m.errorRaised});const v=m._emitter.root,S=v.data;return S.language=m.language,S.relevance=m.relevance,v}function a(f,p){const g=(p||yg).subset||s();let w=-1,m=0,v;for(;++w<g.length;){const S=g[w];if(!i.getLanguage(S))continue;const _=r(S,f,p);_.data&&_.data.relevance!==void 0&&_.data.relevance>m&&(m=_.data.relevance,v=_)}return v||{type:"root",children:[],data:{language:void 0,relevance:m}}}function s(){return i.listLanguages()}function u(f,p){if(typeof f=="string")i.registerLanguage(f,p);else{let h;for(h in f)Object.hasOwn(f,h)&&i.registerLanguage(h,f[h])}}function l(f,p){if(typeof f=="string")i.registerAliases(typeof p=="string"?p:[...p],{languageName:f});else{let h;for(h in f)if(Object.hasOwn(f,h)){const g=f[h];i.registerAliases(typeof g=="string"?g:[...g],{languageName:h})}}}function c(f){return!!i.getLanguage(f)}}class A1{constructor(i){this.options=i,this.root={type:"root",children:[],data:{language:void 0,relevance:0}},this.stack=[this.root]}addText(i){if(i==="")return;const r=this.stack[this.stack.length-1],a=r.children[r.children.length-1];a&&a.type==="text"?a.value+=i:r.children.push({type:"text",value:i})}startScope(i){this.openNode(String(i))}endScope(){this.closeNode()}__addSublanguage(i,r){const a=this.stack[this.stack.length-1],s=i.root.children;r?a.children.push({type:"element",tagName:"span",properties:{className:[r]},children:s}):a.children.push(...s)}openNode(i){const r=this,a=i.split(".").map(function(l,c){return c?l+"_".repeat(c):r.options.classPrefix+l}),s=this.stack[this.stack.length-1],u={type:"element",tagName:"span",properties:{className:a},children:[]};s.children.push(u),this.stack.push(u)}closeNode(){this.stack.pop()}finalize(){}toHTML(){return""}}const L1={};function M1(e){const i=e||L1,r=i.aliases,a=i.detect||!1,s=i.languages||_1,u=i.plainText,l=i.prefix,c=i.subset;let f="hljs";const p=I1(s);if(r&&p.registerAlias(r),l){const h=l.indexOf("-");f=h===-1?l:l.slice(0,h)}return function(h,g){Tl(h,"element",function(w,m,v){if(w.tagName!=="code"||!v||v.type!=="element"||v.tagName!=="pre")return;const S=O1(w);if(S===!1||!S&&!a||S&&u&&u.includes(S))return;Array.isArray(w.properties.className)||(w.properties.className=[]),w.properties.className.includes(f)||w.properties.className.unshift(f);const _=JE(w,{whitespace:"pre"});let k;try{k=S?p.highlight(S,_,{prefix:l}):p.highlightAuto(_,{prefix:l,subset:c})}catch(C){const I=C;if(S&&/Unknown language/.test(I.message)){g.message("Cannot highlight as `"+S+"`, it’s not registered",{ancestors:[v,w],cause:I,place:w.position,ruleId:"missing-language",source:"rehype-highlight"});return}throw I}!S&&k.data&&k.data.language&&w.properties.className.push("language-"+k.data.language),k.children.length>0&&(w.children=k.children)})}}function O1(e){const i=e.properties.className;let r=-1;if(!Array.isArray(i))return;let a;for(;++r<i.length;){const s=String(i[r]);if(s==="no-highlight"||s==="nohighlight")return!1;!a&&s.slice(0,5)==="lang-"&&(a=s.slice(5)),!a&&s.slice(0,9)==="language-"&&(a=s.slice(9))}return a}function N1(){const{folder:e}=Dw(),{currentPlugin:i,isLoading:r,error:a,fetchPluginDetail:s,clearCurrentPlugin:u}=$g(),[l,c]=Ae.useState(!1),[f,p]=Ae.useState(!1);Ae.useEffect(()=>(e&&s(e),()=>{u()}),[e,s,u]);const h=async()=>{if(i){c(!0);try{const g=new h0;if(i.pluginFiles)for(const[m,v]of Object.entries(i.pluginFiles))g.file(m,v);const w=await g.generateAsync({type:"blob"});w0.saveAs(w,`${i.folder}.zip`),p(!0),setTimeout(()=>p(!1),3e3)}catch(g){console.error("Failed to create zip:",g)}finally{c(!1)}}};return r?ae.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:ae.jsx(Gg,{size:"md",text:"加载插件详情..."})}):a||!i?ae.jsx("div",{className:"min-h-[60vh]",children:ae.jsx(Gu,{icon:"error",title:"加载失败",description:a||"插件不存在",action:ae.jsx(fl,{to:"/",className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"返回列表"})})}):ae.jsxs("div",{className:"min-h-screen bg-white",children:[ae.jsx("div",{className:"fixed top-0 left-0 right-0 z-40 bg-white",children:ae.jsx("div",{className:"max-w-3xl mx-auto px-4 py-4 flex items-center gap-2",children:ae.jsxs(fl,{to:"/",className:"inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900",children:[ae.jsx(hb,{className:"h-4 w-4"}),"返回插件列表"]})})}),ae.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-6 sm:py-8 pt-16",children:[ae.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[ae.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[ae.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:i.name.charAt(0)}),ae.jsxs("div",{className:"flex-1",children:[ae.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[ae.jsx("h1",{className:"text-xl font-bold text-gray-900",children:i.name}),ae.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",i.version]})]}),ae.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500",children:[ae.jsx(Rg,{className:"h-4 w-4"}),i.author]})]})]}),ae.jsx("p",{className:"text-gray-600",children:i.description||"暂无描述"})]}),ae.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[ae.jsx("h2",{className:"text-sm font-semibold text-gray-900 mb-2",children:"下载插件"}),ae.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"下载包含所有文件的完整插件压缩包"}),ae.jsx("button",{onClick:h,disabled:l,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:l?ae.jsxs(ae.Fragment,{children:[ae.jsx(Og,{className:"h-4 w-4 animate-spin"}),"正在打包..."]}):f?ae.jsxs(ae.Fragment,{children:[ae.jsx(Mg,{className:"h-4 w-4"}),"下载成功"]}):ae.jsxs(ae.Fragment,{children:[ae.jsx(Sb,{className:"h-4 w-4"}),"下载插件压缩包"]})})]}),(()=>{const g=Object.keys(i.pluginFiles||{}).find(m=>m.toLowerCase()==="readme.md"),w=g?i.pluginFiles[g]:null;return w?ae.jsxs("div",{className:"rounded-md border border-gray-200 p-5",children:[ae.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[ae.jsx(xb,{className:"h-4 w-4 text-gray-500"}),ae.jsx("h2",{className:"text-sm font-semibold text-gray-900",children:"插件说明"})]}),ae.jsx("div",{className:"markdown-body max-w-full overflow-x-auto text-gray-700",children:ae.jsx(L_,{remarkPlugins:[WE],rehypePlugins:[M1],components:{h1:({...m})=>ae.jsx("h1",{className:"text-2xl font-bold mt-6 mb-4 border-b border-gray-200 pb-2",...m}),h2:({...m})=>ae.jsx("h2",{className:"text-xl font-bold mt-5 mb-3 border-b border-gray-200 pb-1",...m}),h3:({...m})=>ae.jsx("h3",{className:"text-lg font-semibold mt-4 mb-2",...m}),h4:({...m})=>ae.jsx("h4",{className:"text-base font-semibold mt-3 mb-1",...m}),p:({...m})=>ae.jsx("p",{className:"mb-3 leading-relaxed",...m}),ul:({...m})=>ae.jsx("ul",{className:"list-disc list-inside mb-3 space-y-1",...m}),ol:({...m})=>ae.jsx("ol",{className:"list-decimal list-inside mb-3 space-y-1",...m}),li:({...m})=>ae.jsx("li",{className:"text-gray-700",...m}),blockquote:({...m})=>ae.jsx("blockquote",{className:"border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600 bg-gray-50 rounded-r-md py-2 pr-2",...m}),code:({className:m,children:v,...S})=>/language-(\w+)/.exec(m||"")?ae.jsx("div",{className:"my-4 rounded-md overflow-hidden",children:ae.jsx("pre",{className:"bg-gray-50 p-4 overflow-x-auto text-sm",children:ae.jsx("code",{className:m,...S,children:v})})}):ae.jsx("code",{className:"bg-gray-100 text-blue-600 px-1.5 py-0.5 rounded text-sm font-mono",...S,children:v}),pre:({...m})=>ae.jsx(ae.Fragment,{children:m.children}),a:({...m})=>ae.jsx("a",{className:"text-blue-600 hover:text-blue-800 hover:underline",target:"_blank",rel:"noopener noreferrer",...m}),table:({...m})=>ae.jsx("div",{className:"my-4 overflow-x-auto",children:ae.jsx("table",{className:"min-w-full border-collapse border border-gray-300",...m})}),thead:({...m})=>ae.jsx("thead",{className:"bg-gray-50",...m}),th:({...m})=>ae.jsx("th",{className:"border border-gray-300 px-4 py-2 text-left font-semibold",...m}),td:({...m})=>ae.jsx("td",{className:"border border-gray-300 px-4 py-2",...m}),img:({...m})=>ae.jsx("img",{className:"max-w-full h-auto rounded-md my-4",loading:"lazy",...m})},children:w})})]}):null})()]})]})}function R1(){return ae.jsx(ab,{children:ae.jsxs("div",{className:"min-h-screen bg-white",children:[ae.jsx(Rb,{}),ae.jsx("main",{children:ae.jsxs(Xw,{children:[ae.jsx(Pu,{path:"/",element:ae.jsx(f0,{})}),ae.jsx(Pu,{path:"/plugin/:folder",element:ae.jsx(N1,{})})]})})]})})}iw.createRoot(document.getElementById("root")).render(ae.jsx(Ae.StrictMode,{children:ae.jsx(R1,{})}));
