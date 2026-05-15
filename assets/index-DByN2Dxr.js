function Kd(f,C){for(var l=0;l<C.length;l++){const k=C[l];if(typeof k!="string"&&!Array.isArray(k)){for(const g in k)if(g!=="default"&&!(g in f)){const u=Object.getOwnPropertyDescriptor(k,g);u&&Object.defineProperty(f,g,u.get?u:{enumerable:!0,get:()=>k[g]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))k(g);new MutationObserver(g=>{for(const u of g)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&k(c)}).observe(document,{childList:!0,subtree:!0});function l(g){const u={};return g.integrity&&(u.integrity=g.integrity),g.referrerPolicy&&(u.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?u.credentials="include":g.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function k(g){if(g.ep)return;g.ep=!0;const u=l(g);fetch(g.href,u)}})();var Sn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nc(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var ra={exports:{}},Xr={},ia={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc;function Jd(){if(oc)return je;oc=1;var f=Symbol.for("react.element"),C=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),_=Symbol.iterator;function E(S){return S===null||typeof S!="object"?null:(S=_&&S[_]||S["@@iterator"],typeof S=="function"?S:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,m={};function w(S,L,fe){this.props=S,this.context=L,this.refs=m,this.updater=fe||v}w.prototype.isReactComponent={},w.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},w.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function x(){}x.prototype=w.prototype;function T(S,L,fe){this.props=S,this.context=L,this.refs=m,this.updater=fe||v}var j=T.prototype=new x;j.constructor=T,M(j,w.prototype),j.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,Q={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function le(S,L,fe){var oe,te={},be=null,Oe=null;if(L!=null)for(oe in L.ref!==void 0&&(Oe=L.ref),L.key!==void 0&&(be=""+L.key),L)D.call(L,oe)&&!q.hasOwnProperty(oe)&&(te[oe]=L[oe]);var we=arguments.length-2;if(we===1)te.children=fe;else if(1<we){for(var Ce=Array(we),Re=0;Re<we;Re++)Ce[Re]=arguments[Re+2];te.children=Ce}if(S&&S.defaultProps)for(oe in we=S.defaultProps,we)te[oe]===void 0&&(te[oe]=we[oe]);return{$$typeof:f,type:S,key:be,ref:Oe,props:te,_owner:Q.current}}function G(S,L){return{$$typeof:f,type:S.type,key:L,ref:S.ref,props:S.props,_owner:S._owner}}function ce(S){return typeof S=="object"&&S!==null&&S.$$typeof===f}function Ee(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(fe){return L[fe]})}var z=/\/+/g;function Z(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Ee(""+S.key):L.toString(36)}function p(S,L,fe,oe,te){var be=typeof S;(be==="undefined"||be==="boolean")&&(S=null);var Oe=!1;if(S===null)Oe=!0;else switch(be){case"string":case"number":Oe=!0;break;case"object":switch(S.$$typeof){case f:case C:Oe=!0}}if(Oe)return Oe=S,te=te(Oe),S=oe===""?"."+Z(Oe,0):oe,A(te)?(fe="",S!=null&&(fe=S.replace(z,"$&/")+"/"),p(te,L,fe,"",function(Re){return Re})):te!=null&&(ce(te)&&(te=G(te,fe+(!te.key||Oe&&Oe.key===te.key?"":(""+te.key).replace(z,"$&/")+"/")+S)),L.push(te)),1;if(Oe=0,oe=oe===""?".":oe+":",A(S))for(var we=0;we<S.length;we++){be=S[we];var Ce=oe+Z(be,we);Oe+=p(be,L,fe,Ce,te)}else if(Ce=E(S),typeof Ce=="function")for(S=Ce.call(S),we=0;!(be=S.next()).done;)be=be.value,Ce=oe+Z(be,we++),Oe+=p(be,L,fe,Ce,te);else if(be==="object")throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return Oe}function K(S,L,fe){if(S==null)return S;var oe=[],te=0;return p(S,oe,"","",function(be){return L.call(fe,be,te++)}),oe}function xe(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(fe){(S._status===0||S._status===-1)&&(S._status=1,S._result=fe)},function(fe){(S._status===0||S._status===-1)&&(S._status=2,S._result=fe)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var Y={current:null},ee={transition:null},V={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:ee,ReactCurrentOwner:Q};function X(){throw Error("act(...) is not supported in production builds of React.")}return je.Children={map:K,forEach:function(S,L,fe){K(S,function(){L.apply(this,arguments)},fe)},count:function(S){var L=0;return K(S,function(){L++}),L},toArray:function(S){return K(S,function(L){return L})||[]},only:function(S){if(!ce(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},je.Component=w,je.Fragment=l,je.Profiler=g,je.PureComponent=T,je.StrictMode=k,je.Suspense=h,je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,je.act=X,je.cloneElement=function(S,L,fe){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var oe=M({},S.props),te=S.key,be=S.ref,Oe=S._owner;if(L!=null){if(L.ref!==void 0&&(be=L.ref,Oe=Q.current),L.key!==void 0&&(te=""+L.key),S.type&&S.type.defaultProps)var we=S.type.defaultProps;for(Ce in L)D.call(L,Ce)&&!q.hasOwnProperty(Ce)&&(oe[Ce]=L[Ce]===void 0&&we!==void 0?we[Ce]:L[Ce])}var Ce=arguments.length-2;if(Ce===1)oe.children=fe;else if(1<Ce){we=Array(Ce);for(var Re=0;Re<Ce;Re++)we[Re]=arguments[Re+2];oe.children=we}return{$$typeof:f,type:S.type,key:te,ref:be,props:oe,_owner:Oe}},je.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:u,_context:S},S.Consumer=S},je.createElement=le,je.createFactory=function(S){var L=le.bind(null,S);return L.type=S,L},je.createRef=function(){return{current:null}},je.forwardRef=function(S){return{$$typeof:s,render:S}},je.isValidElement=ce,je.lazy=function(S){return{$$typeof:P,_payload:{_status:-1,_result:S},_init:xe}},je.memo=function(S,L){return{$$typeof:y,type:S,compare:L===void 0?null:L}},je.startTransition=function(S){var L=ee.transition;ee.transition={};try{S()}finally{ee.transition=L}},je.unstable_act=X,je.useCallback=function(S,L){return Y.current.useCallback(S,L)},je.useContext=function(S){return Y.current.useContext(S)},je.useDebugValue=function(){},je.useDeferredValue=function(S){return Y.current.useDeferredValue(S)},je.useEffect=function(S,L){return Y.current.useEffect(S,L)},je.useId=function(){return Y.current.useId()},je.useImperativeHandle=function(S,L,fe){return Y.current.useImperativeHandle(S,L,fe)},je.useInsertionEffect=function(S,L){return Y.current.useInsertionEffect(S,L)},je.useLayoutEffect=function(S,L){return Y.current.useLayoutEffect(S,L)},je.useMemo=function(S,L){return Y.current.useMemo(S,L)},je.useReducer=function(S,L,fe){return Y.current.useReducer(S,L,fe)},je.useRef=function(S){return Y.current.useRef(S)},je.useState=function(S){return Y.current.useState(S)},je.useSyncExternalStore=function(S,L,fe){return Y.current.useSyncExternalStore(S,L,fe)},je.useTransition=function(){return Y.current.useTransition()},je.version="18.3.1",je}var lc;function wa(){return lc||(lc=1,ia.exports=Jd()),ia.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Yd(){if(ac)return Xr;ac=1;var f=wa(),C=Symbol.for("react.element"),l=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,g=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(s,h,y){var P,_={},E=null,v=null;y!==void 0&&(E=""+y),h.key!==void 0&&(E=""+h.key),h.ref!==void 0&&(v=h.ref);for(P in h)k.call(h,P)&&!u.hasOwnProperty(P)&&(_[P]=h[P]);if(s&&s.defaultProps)for(P in h=s.defaultProps,h)_[P]===void 0&&(_[P]=h[P]);return{$$typeof:C,type:s,key:E,ref:v,props:_,_owner:g.current}}return Xr.Fragment=l,Xr.jsx=c,Xr.jsxs=c,Xr}var sc;function Xd(){return sc||(sc=1,ra.exports=Yd()),ra.exports}var re=Xd(),me=wa();const ei=Nc(me),ep=Kd({__proto__:null,default:ei},[me]);var fo={},oa={exports:{}},wt={},la={exports:{}},aa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc;function tp(){return uc||(uc=1,(function(f){function C(ee,V){var X=ee.length;ee.push(V);e:for(;0<X;){var S=X-1>>>1,L=ee[S];if(0<g(L,V))ee[S]=V,ee[X]=L,X=S;else break e}}function l(ee){return ee.length===0?null:ee[0]}function k(ee){if(ee.length===0)return null;var V=ee[0],X=ee.pop();if(X!==V){ee[0]=X;e:for(var S=0,L=ee.length,fe=L>>>1;S<fe;){var oe=2*(S+1)-1,te=ee[oe],be=oe+1,Oe=ee[be];if(0>g(te,X))be<L&&0>g(Oe,te)?(ee[S]=Oe,ee[be]=X,S=be):(ee[S]=te,ee[oe]=X,S=oe);else if(be<L&&0>g(Oe,X))ee[S]=Oe,ee[be]=X,S=be;else break e}}return V}function g(ee,V){var X=ee.sortIndex-V.sortIndex;return X!==0?X:ee.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;f.unstable_now=function(){return u.now()}}else{var c=Date,s=c.now();f.unstable_now=function(){return c.now()-s}}var h=[],y=[],P=1,_=null,E=3,v=!1,M=!1,m=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(ee){for(var V=l(y);V!==null;){if(V.callback===null)k(y);else if(V.startTime<=ee)k(y),V.sortIndex=V.expirationTime,C(h,V);else break;V=l(y)}}function A(ee){if(m=!1,j(ee),!M)if(l(h)!==null)M=!0,xe(D);else{var V=l(y);V!==null&&Y(A,V.startTime-ee)}}function D(ee,V){M=!1,m&&(m=!1,x(le),le=-1),v=!0;var X=E;try{for(j(V),_=l(h);_!==null&&(!(_.expirationTime>V)||ee&&!Ee());){var S=_.callback;if(typeof S=="function"){_.callback=null,E=_.priorityLevel;var L=S(_.expirationTime<=V);V=f.unstable_now(),typeof L=="function"?_.callback=L:_===l(h)&&k(h),j(V)}else k(h);_=l(h)}if(_!==null)var fe=!0;else{var oe=l(y);oe!==null&&Y(A,oe.startTime-V),fe=!1}return fe}finally{_=null,E=X,v=!1}}var Q=!1,q=null,le=-1,G=5,ce=-1;function Ee(){return!(f.unstable_now()-ce<G)}function z(){if(q!==null){var ee=f.unstable_now();ce=ee;var V=!0;try{V=q(!0,ee)}finally{V?Z():(Q=!1,q=null)}}else Q=!1}var Z;if(typeof T=="function")Z=function(){T(z)};else if(typeof MessageChannel<"u"){var p=new MessageChannel,K=p.port2;p.port1.onmessage=z,Z=function(){K.postMessage(null)}}else Z=function(){w(z,0)};function xe(ee){q=ee,Q||(Q=!0,Z())}function Y(ee,V){le=w(function(){ee(f.unstable_now())},V)}f.unstable_IdlePriority=5,f.unstable_ImmediatePriority=1,f.unstable_LowPriority=4,f.unstable_NormalPriority=3,f.unstable_Profiling=null,f.unstable_UserBlockingPriority=2,f.unstable_cancelCallback=function(ee){ee.callback=null},f.unstable_continueExecution=function(){M||v||(M=!0,xe(D))},f.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<ee?Math.floor(1e3/ee):5},f.unstable_getCurrentPriorityLevel=function(){return E},f.unstable_getFirstCallbackNode=function(){return l(h)},f.unstable_next=function(ee){switch(E){case 1:case 2:case 3:var V=3;break;default:V=E}var X=E;E=V;try{return ee()}finally{E=X}},f.unstable_pauseExecution=function(){},f.unstable_requestPaint=function(){},f.unstable_runWithPriority=function(ee,V){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var X=E;E=ee;try{return V()}finally{E=X}},f.unstable_scheduleCallback=function(ee,V,X){var S=f.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?S+X:S):X=S,ee){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=X+L,ee={id:P++,callback:V,priorityLevel:ee,startTime:X,expirationTime:L,sortIndex:-1},X>S?(ee.sortIndex=X,C(y,ee),l(h)===null&&ee===l(y)&&(m?(x(le),le=-1):m=!0,Y(A,X-S))):(ee.sortIndex=L,C(h,ee),M||v||(M=!0,xe(D))),ee},f.unstable_shouldYield=Ee,f.unstable_wrapCallback=function(ee){var V=E;return function(){var X=E;E=V;try{return ee.apply(this,arguments)}finally{E=X}}}})(aa)),aa}var cc;function np(){return cc||(cc=1,la.exports=tp()),la.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function rp(){if(fc)return wt;fc=1;var f=wa(),C=np();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k=new Set,g={};function u(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(g[e]=t,e=0;e<t.length;e++)k.add(t[e])}var s=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P={},_={};function E(e){return h.call(_,e)?!0:h.call(P,e)?!1:y.test(e)?_[e]=!0:(P[e]=!0,!1)}function v(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,n,r){if(t===null||typeof t>"u"||v(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function m(e,t,n,r,i,o,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=d}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];w[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,T);w[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,T);w[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,T);w[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,t,n,r){var i=w.hasOwnProperty(t)?w[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,n,i,r)&&(n=null),r||i===null?E(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var A=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),Q=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),ee=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,S;function L(e){if(S===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);S=t&&t[1]||""}return`
`+S+e}var fe=!1;function oe(e,t){if(!e||fe)return"";fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(H){var r=H}Reflect.construct(e,[],t)}else{try{t.call()}catch(H){r=H}e.call(t.prototype)}else{try{throw Error()}catch(H){r=H}e()}}catch(H){if(H&&r&&typeof H.stack=="string"){for(var i=H.stack.split(`
`),o=r.stack.split(`
`),d=i.length-1,N=o.length-1;1<=d&&0<=N&&i[d]!==o[N];)N--;for(;1<=d&&0<=N;d--,N--)if(i[d]!==o[N]){if(d!==1||N!==1)do if(d--,N--,0>N||i[d]!==o[N]){var R=`
`+i[d].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=d&&0<=N);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function te(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function be(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case Q:return"Portal";case G:return"Profiler";case le:return"StrictMode";case Z:return"Suspense";case p:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ee:return(e.displayName||"Context")+".Consumer";case ce:return(e._context.displayName||"Context")+".Provider";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case xe:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}function Oe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(t);case 8:return t===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function we(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Re(e){var t=Ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(d){r=""+d,o.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function De(e){e._valueTracker||(e._valueTracker=Re(e))}function _t(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ce(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ot(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function a(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function J(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=we(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $(e,t){t=t.checked,t!=null&&j(e,"checked",t,!1)}function O(e,t){$(e,t);var n=we(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?F(e,t.type,n):t.hasOwnProperty("defaultValue")&&F(e,t.type,we(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function b(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function F(e,t,n){(t!=="number"||ot(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function ie(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+we(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function W(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function de(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(l(92));if(ne(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:we(n)}}function ve(e,t){var n=we(t.value),r=we(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function he(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pe(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ae(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pe(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Le,ft=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pn=["Webkit","ms","Moz","O"];Object.keys(lt).forEach(function(e){Pn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),lt[t]=lt[e]})});function He(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||lt.hasOwnProperty(e)&&lt[e]?(""+t).trim():t+"px"}function bn(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=He(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var pr=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kt(e,t){if(t){if(pr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Vn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hr=null;function mr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,Gt=null,bt=null;function Mn(e){if(e=Fr(e)){if(typeof gr!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Pi(t),gr(e.stateNode,e.type,t))}}function xa(e){Gt?bt?bt.push(e):bt=[e]:Gt=e}function Ea(){if(Gt){var e=Gt,t=bt;if(bt=Gt=null,Mn(e),t)for(e=0;e<t.length;e++)Mn(t[e])}}function Ca(e,t){return e(t)}function Pa(){}var _o=!1;function ba(e,t,n){if(_o)return e(t,n);_o=!0;try{return Ca(e,t,n)}finally{_o=!1,(Gt!==null||bt!==null)&&(Pa(),Ea())}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ko=!1;if(s)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){ko=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{ko=!1}function tf(e,t,n,r,i,o,d,N,R){var H=Array.prototype.slice.call(arguments,3);try{t.apply(n,H)}catch(se){this.onError(se)}}var wr=!1,ii=null,oi=!1,So=null,nf={onError:function(e){wr=!0,ii=e}};function rf(e,t,n,r,i,o,d,N,R){wr=!1,ii=null,tf.apply(nf,arguments)}function of(e,t,n,r,i,o,d,N,R){if(rf.apply(this,arguments),wr){if(wr){var H=ii;wr=!1,ii=null}else throw Error(l(198));oi||(oi=!0,So=H)}}function Tn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ma(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ta(e){if(Tn(e)!==e)throw Error(l(188))}function lf(e){var t=e.alternate;if(!t){if(t=Tn(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ta(i),e;if(o===r)return Ta(i),t;o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=i,r=o;else{for(var d=!1,N=i.child;N;){if(N===n){d=!0,n=i,r=o;break}if(N===r){d=!0,r=i,n=o;break}N=N.sibling}if(!d){for(N=o.child;N;){if(N===n){d=!0,n=o,r=i;break}if(N===r){d=!0,r=o,n=i;break}N=N.sibling}if(!d)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function Na(e){return e=lf(e),e!==null?Oa(e):null}function Oa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Oa(e);if(t!==null)return t;e=e.sibling}return null}var La=C.unstable_scheduleCallback,ja=C.unstable_cancelCallback,af=C.unstable_shouldYield,sf=C.unstable_requestPaint,Ze=C.unstable_now,uf=C.unstable_getCurrentPriorityLevel,xo=C.unstable_ImmediatePriority,za=C.unstable_UserBlockingPriority,li=C.unstable_NormalPriority,cf=C.unstable_LowPriority,Ra=C.unstable_IdlePriority,ai=null,Wt=null;function ff(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:hf,df=Math.log,pf=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(df(e)/pf|0)|0}var si=64,ui=4194304;function _r(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,d=n&268435455;if(d!==0){var N=d&~i;N!==0?r=_r(N):(o&=d,o!==0&&(r=_r(o)))}else d=n&~i,d!==0?r=_r(d):o!==0&&(r=_r(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function mf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var d=31-Rt(o),N=1<<d,R=i[d];R===-1?((N&n)===0||(N&r)!==0)&&(i[d]=mf(N,t)):R<=t&&(e.expiredLanes|=N),o&=~N}}function Eo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ia(){var e=si;return si<<=1,(si&4194240)===0&&(si=64),e}function Co(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Po(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Fe=0;function Aa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Fa,bo,Da,Ua,Ba,Mo=!1,fi=[],nn=null,rn=null,on=null,Sr=new Map,xr=new Map,ln=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wa(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(t.pointerId)}}function Er(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fr(t),t!==null&&bo(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wf(e,t,n,r,i){switch(t){case"focusin":return nn=Er(nn,e,t,n,r,i),!0;case"dragenter":return rn=Er(rn,e,t,n,r,i),!0;case"mouseover":return on=Er(on,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Sr.set(o,Er(Sr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xr.set(o,Er(xr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ha(e){var t=Nn(e.target);if(t!==null){var n=Tn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ma(n),t!==null){e.blockedOn=t,Ba(e.priority,function(){Da(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=No(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hr=r,n.target.dispatchEvent(r),hr=null}else return t=Fr(n),t!==null&&bo(t),e.blockedOn=n,!1;t.shift()}return!0}function Va(e,t,n){di(e)&&n.delete(t)}function _f(){Mo=!1,nn!==null&&di(nn)&&(nn=null),rn!==null&&di(rn)&&(rn=null),on!==null&&di(on)&&(on=null),Sr.forEach(Va),xr.forEach(Va)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Mo||(Mo=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,_f)))}function Pr(e){function t(i){return Cr(i,e)}if(0<fi.length){Cr(fi[0],e);for(var n=1;n<fi.length;n++){var r=fi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&Cr(nn,e),rn!==null&&Cr(rn,e),on!==null&&Cr(on,e),Sr.forEach(t),xr.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Ha(n),n.blockedOn===null&&ln.shift()}var $n=A.ReactCurrentBatchConfig,pi=!0;function kf(e,t,n,r){var i=Fe,o=$n.transition;$n.transition=null;try{Fe=1,To(e,t,n,r)}finally{Fe=i,$n.transition=o}}function Sf(e,t,n,r){var i=Fe,o=$n.transition;$n.transition=null;try{Fe=4,To(e,t,n,r)}finally{Fe=i,$n.transition=o}}function To(e,t,n,r){if(pi){var i=No(e,t,n,r);if(i===null)Go(e,t,r,hi,n),Wa(e,r);else if(wf(i,e,t,n,r))r.stopPropagation();else if(Wa(e,r),t&4&&-1<yf.indexOf(e)){for(;i!==null;){var o=Fr(i);if(o!==null&&Fa(o),o=No(e,t,n,r),o===null&&Go(e,t,r,hi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Go(e,t,r,null,n)}}var hi=null;function No(e,t,n,r){if(hi=null,e=mr(r),e=Nn(e),e!==null)if(t=Tn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ma(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function $a(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case xo:return 1;case za:return 4;case li:case cf:return 16;case Ra:return 536870912;default:return 16}default:return 16}}var an=null,Oo=null,mi=null;function qa(){if(mi)return mi;var e,t=Oo,n=t.length,r,i="value"in an?an.value:an.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===i[o-r];r++);return mi=i.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function Ga(){return!1}function St(e){function t(n,r,i,o,d){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=d,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(n=e[N],this[N]=n?n(o):o[N]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vi:Ga,this.isPropagationStopped=Ga,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lo=St(qn),br=X({},qn,{view:0,detail:0}),xf=St(br),jo,zo,Mr,yi=X({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Io,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(jo=e.screenX-Mr.screenX,zo=e.screenY-Mr.screenY):zo=jo=0,Mr=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:zo}}),Za=St(yi),Ef=X({},yi,{dataTransfer:0}),Cf=St(Ef),Pf=X({},br,{relatedTarget:0}),Ro=St(Pf),bf=X({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Mf=St(bf),Tf=X({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nf=St(Tf),Of=X({},qn,{data:0}),Qa=St(Of),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zf[e])?!!t[e]:!1}function Io(){return Rf}var If=X({},br,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Io,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Af=St(If),Ff=X({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ka=St(Ff),Df=X({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Io}),Uf=St(Df),Bf=X({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wf=St(Bf),Hf=X({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vf=St(Hf),$f=[9,13,27,32],Ao=s&&"CompositionEvent"in window,Tr=null;s&&"documentMode"in document&&(Tr=document.documentMode);var qf=s&&"TextEvent"in window&&!Tr,Ja=s&&(!Ao||Tr&&8<Tr&&11>=Tr),Ya=" ",Xa=!1;function es(e,t){switch(e){case"keyup":return $f.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ts(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gn=!1;function Gf(e,t){switch(e){case"compositionend":return ts(t);case"keypress":return t.which!==32?null:(Xa=!0,Ya);case"textInput":return e=t.data,e===Ya&&Xa?null:e;default:return null}}function Zf(e,t){if(Gn)return e==="compositionend"||!Ao&&es(e,t)?(e=qa(),mi=Oo=an=null,Gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ja&&t.locale!=="ko"?null:t.data;default:return null}}var Qf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qf[e.type]:t==="textarea"}function rs(e,t,n,r){xa(r),t=xi(t,"onChange"),0<t.length&&(n=new Lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nr=null,Or=null;function Kf(e){ks(e,0)}function wi(e){var t=Yn(e);if(_t(t))return e}function Jf(e,t){if(e==="change")return t}var is=!1;if(s){var Fo;if(s){var Do="oninput"in document;if(!Do){var os=document.createElement("div");os.setAttribute("oninput","return;"),Do=typeof os.oninput=="function"}Fo=Do}else Fo=!1;is=Fo&&(!document.documentMode||9<document.documentMode)}function ls(){Nr&&(Nr.detachEvent("onpropertychange",as),Or=Nr=null)}function as(e){if(e.propertyName==="value"&&wi(Or)){var t=[];rs(t,Or,e,mr(e)),ba(Kf,t)}}function Yf(e,t,n){e==="focusin"?(ls(),Nr=t,Or=n,Nr.attachEvent("onpropertychange",as)):e==="focusout"&&ls()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wi(Or)}function ed(e,t){if(e==="click")return wi(t)}function td(e,t){if(e==="input"||e==="change")return wi(t)}function nd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:nd;function Lr(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!h.call(t,i)||!It(e[i],t[i]))return!1}return!0}function ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function us(e,t){var n=ss(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ss(n)}}function cs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fs(){for(var e=window,t=ot();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ot(e.document)}return t}function Uo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rd(e){var t=fs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cs(n.ownerDocument.documentElement,n)){if(r!==null&&Uo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=us(n,o);var d=us(n,r);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var id=s&&"documentMode"in document&&11>=document.documentMode,Zn=null,Bo=null,jr=null,Wo=!1;function ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||Zn==null||Zn!==ot(r)||(r=Zn,"selectionStart"in r&&Uo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Lr(jr,r)||(jr=r,r=xi(Bo,"onSelect"),0<r.length&&(t=new Lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zn)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},Ho={},ps={};s&&(ps=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function ki(e){if(Ho[e])return Ho[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ps)return Ho[e]=t[n];return e}var hs=ki("animationend"),ms=ki("animationiteration"),gs=ki("animationstart"),vs=ki("transitionend"),ys=new Map,ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){ys.set(e,t),u(t,[e])}for(var Vo=0;Vo<ws.length;Vo++){var $o=ws[Vo],od=$o.toLowerCase(),ld=$o[0].toUpperCase()+$o.slice(1);sn(od,"on"+ld)}sn(hs,"onAnimationEnd"),sn(ms,"onAnimationIteration"),sn(gs,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(vs,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ad=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function _s(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,of(r,t,void 0,e),e.currentTarget=null}function ks(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var d=r.length-1;0<=d;d--){var N=r[d],R=N.instance,H=N.currentTarget;if(N=N.listener,R!==o&&i.isPropagationStopped())break e;_s(i,N,H),o=R}else for(d=0;d<r.length;d++){if(N=r[d],R=N.instance,H=N.currentTarget,N=N.listener,R!==o&&i.isPropagationStopped())break e;_s(i,N,H),o=R}}}if(oi)throw e=So,oi=!1,So=null,e}function Be(e,t){var n=t[Xo];n===void 0&&(n=t[Xo]=new Set);var r=e+"__bubble";n.has(r)||(Ss(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),Ss(n,e,r,t)}var Si="_reactListening"+Math.random().toString(36).slice(2);function Rr(e){if(!e[Si]){e[Si]=!0,k.forEach(function(n){n!=="selectionchange"&&(ad.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Si]||(t[Si]=!0,qo("selectionchange",!1,t))}}function Ss(e,t,n,r){switch($a(t)){case 1:var i=kf;break;case 4:i=Sf;break;default:i=To}n=i.bind(null,t,n,e),i=void 0,!ko||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Go(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var N=r.stateNode.containerInfo;if(N===i||N.nodeType===8&&N.parentNode===i)break;if(d===4)for(d=r.return;d!==null;){var R=d.tag;if((R===3||R===4)&&(R=d.stateNode.containerInfo,R===i||R.nodeType===8&&R.parentNode===i))return;d=d.return}for(;N!==null;){if(d=Nn(N),d===null)return;if(R=d.tag,R===5||R===6){r=o=d;continue e}N=N.parentNode}}r=r.return}ba(function(){var H=o,se=mr(n),ue=[];e:{var ae=ys.get(e);if(ae!==void 0){var ge=Lo,_e=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":ge=Af;break;case"focusin":_e="focus",ge=Ro;break;case"focusout":_e="blur",ge=Ro;break;case"beforeblur":case"afterblur":ge=Ro;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Za;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Cf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Uf;break;case hs:case ms:case gs:ge=Mf;break;case vs:ge=Wf;break;case"scroll":ge=xf;break;case"wheel":ge=Vf;break;case"copy":case"cut":case"paste":ge=Nf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Ka}var ke=(t&4)!==0,Qe=!ke&&e==="scroll",U=ke?ae!==null?ae+"Capture":null:ae;ke=[];for(var I=H,B;I!==null;){B=I;var pe=B.stateNode;if(B.tag===5&&pe!==null&&(B=pe,U!==null&&(pe=vr(I,U),pe!=null&&ke.push(Ir(I,pe,B)))),Qe)break;I=I.return}0<ke.length&&(ae=new ge(ae,_e,null,n,se),ue.push({event:ae,listeners:ke}))}}if((t&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",ge=e==="mouseout"||e==="pointerout",ae&&n!==hr&&(_e=n.relatedTarget||n.fromElement)&&(Nn(_e)||_e[Zt]))break e;if((ge||ae)&&(ae=se.window===se?se:(ae=se.ownerDocument)?ae.defaultView||ae.parentWindow:window,ge?(_e=n.relatedTarget||n.toElement,ge=H,_e=_e?Nn(_e):null,_e!==null&&(Qe=Tn(_e),_e!==Qe||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(ge=null,_e=H),ge!==_e)){if(ke=Za,pe="onMouseLeave",U="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Ka,pe="onPointerLeave",U="onPointerEnter",I="pointer"),Qe=ge==null?ae:Yn(ge),B=_e==null?ae:Yn(_e),ae=new ke(pe,I+"leave",ge,n,se),ae.target=Qe,ae.relatedTarget=B,pe=null,Nn(se)===H&&(ke=new ke(U,I+"enter",_e,n,se),ke.target=B,ke.relatedTarget=Qe,pe=ke),Qe=pe,ge&&_e)t:{for(ke=ge,U=_e,I=0,B=ke;B;B=Kn(B))I++;for(B=0,pe=U;pe;pe=Kn(pe))B++;for(;0<I-B;)ke=Kn(ke),I--;for(;0<B-I;)U=Kn(U),B--;for(;I--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=Kn(ke),U=Kn(U)}ke=null}else ke=null;ge!==null&&xs(ue,ae,ge,ke,!1),_e!==null&&Qe!==null&&xs(ue,Qe,_e,ke,!0)}}e:{if(ae=H?Yn(H):window,ge=ae.nodeName&&ae.nodeName.toLowerCase(),ge==="select"||ge==="input"&&ae.type==="file")var Se=Jf;else if(ns(ae))if(is)Se=td;else{Se=Xf;var Me=Yf}else(ge=ae.nodeName)&&ge.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(Se=ed);if(Se&&(Se=Se(e,H))){rs(ue,Se,n,se);break e}Me&&Me(e,ae,H),e==="focusout"&&(Me=ae._wrapperState)&&Me.controlled&&ae.type==="number"&&F(ae,"number",ae.value)}switch(Me=H?Yn(H):window,e){case"focusin":(ns(Me)||Me.contentEditable==="true")&&(Zn=Me,Bo=H,jr=null);break;case"focusout":jr=Bo=Zn=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,ds(ue,n,se);break;case"selectionchange":if(id)break;case"keydown":case"keyup":ds(ue,n,se)}var Te;if(Ao)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Gn?es(e,n)&&(Ne="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ne="onCompositionStart");Ne&&(Ja&&n.locale!=="ko"&&(Gn||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Gn&&(Te=qa()):(an=se,Oo="value"in an?an.value:an.textContent,Gn=!0)),Me=xi(H,Ne),0<Me.length&&(Ne=new Qa(Ne,e,null,n,se),ue.push({event:Ne,listeners:Me}),Te?Ne.data=Te:(Te=ts(n),Te!==null&&(Ne.data=Te)))),(Te=qf?Gf(e,n):Zf(e,n))&&(H=xi(H,"onBeforeInput"),0<H.length&&(se=new Qa("onBeforeInput","beforeinput",null,n,se),ue.push({event:se,listeners:H}),se.data=Te))}ks(ue,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=vr(e,n),o!=null&&r.unshift(Ir(e,o,i)),o=vr(e,t),o!=null&&r.push(Ir(e,o,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xs(e,t,n,r,i){for(var o=t._reactName,d=[];n!==null&&n!==r;){var N=n,R=N.alternate,H=N.stateNode;if(R!==null&&R===r)break;N.tag===5&&H!==null&&(N=H,i?(R=vr(n,o),R!=null&&d.unshift(Ir(n,R,N))):i||(R=vr(n,o),R!=null&&d.push(Ir(n,R,N)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var sd=/\r\n?/g,ud=/\u0000|\uFFFD/g;function Es(e){return(typeof e=="string"?e:""+e).replace(sd,`
`).replace(ud,"")}function Ei(e,t,n){if(t=Es(t),Es(e)!==t&&n)throw Error(l(425))}function Ci(){}var Zo=null,Qo=null;function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jo=typeof setTimeout=="function"?setTimeout:void 0,cd=typeof clearTimeout=="function"?clearTimeout:void 0,Cs=typeof Promise=="function"?Promise:void 0,fd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cs<"u"?function(e){return Cs.resolve(null).then(e).catch(dd)}:Jo;function dd(e){setTimeout(function(){throw e})}function Yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Jn,Ar="__reactProps$"+Jn,Zt="__reactContainer$"+Jn,Xo="__reactEvents$"+Jn,pd="__reactListeners$"+Jn,hd="__reactHandles$"+Jn;function Nn(e){var t=e[Ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[Ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ps(e);e!==null;){if(n=e[Ht])return n;e=Ps(e)}return t}e=n,n=e.parentNode}return null}function Fr(e){return e=e[Ht]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Pi(e){return e[Ar]||null}var el=[],Xn=-1;function cn(e){return{current:e}}function We(e){0>Xn||(e.current=el[Xn],el[Xn]=null,Xn--)}function Ue(e,t){Xn++,el[Xn]=e.current,e.current=t}var fn={},at=cn(fn),ht=cn(!1),On=fn;function er(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function mt(e){return e=e.childContextTypes,e!=null}function bi(){We(ht),We(at)}function bs(e,t,n){if(at.current!==fn)throw Error(l(168));Ue(at,t),Ue(ht,n)}function Ms(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(l(108,Oe(e)||"Unknown",i));return X({},n,r)}function Mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,On=at.current,Ue(at,e),Ue(ht,ht.current),!0}function Ts(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Ms(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,We(ht),We(at),Ue(at,e)):We(ht),Ue(ht,n)}var Qt=null,Ti=!1,tl=!1;function Ns(e){Qt===null?Qt=[e]:Qt.push(e)}function md(e){Ti=!0,Ns(e)}function dn(){if(!tl&&Qt!==null){tl=!0;var e=0,t=Fe;try{var n=Qt;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Ti=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),La(xo,dn),i}finally{Fe=t,tl=!1}}return null}var tr=[],nr=0,Ni=null,Oi=0,Mt=[],Tt=0,Ln=null,Kt=1,Jt="";function jn(e,t){tr[nr++]=Oi,tr[nr++]=Ni,Ni=e,Oi=t}function Os(e,t,n){Mt[Tt++]=Kt,Mt[Tt++]=Jt,Mt[Tt++]=Ln,Ln=e;var r=Kt;e=Jt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var o=32-Rt(t)+i;if(30<o){var d=i-i%5;o=(r&(1<<d)-1).toString(32),r>>=d,i-=d,Kt=1<<32-Rt(t)+i|n<<i|r,Jt=o+e}else Kt=1<<o|n<<i|r,Jt=e}function nl(e){e.return!==null&&(jn(e,1),Os(e,1,0))}function rl(e){for(;e===Ni;)Ni=tr[--nr],tr[nr]=null,Oi=tr[--nr],tr[nr]=null;for(;e===Ln;)Ln=Mt[--Tt],Mt[Tt]=null,Jt=Mt[--Tt],Mt[Tt]=null,Kt=Mt[--Tt],Mt[Tt]=null}var xt=null,Et=null,Ve=!1,At=null;function Ls(e,t){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xt=e,Et=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xt=e,Et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Kt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xt=e,Et=null,!0):!1;default:return!1}}function il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ol(e){if(Ve){var t=Et;if(t){var n=t;if(!js(e,t)){if(il(e))throw Error(l(418));t=un(n.nextSibling);var r=xt;t&&js(e,t)?Ls(r,n):(e.flags=e.flags&-4097|2,Ve=!1,xt=e)}}else{if(il(e))throw Error(l(418));e.flags=e.flags&-4097|2,Ve=!1,xt=e}}}function zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xt=e}function Li(e){if(e!==xt)return!1;if(!Ve)return zs(e),Ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ko(e.type,e.memoizedProps)),t&&(t=Et)){if(il(e))throw Rs(),Error(l(418));for(;t;)Ls(e,t),t=un(t.nextSibling)}if(zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Et=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Et=null}}else Et=xt?un(e.stateNode.nextSibling):null;return!0}function Rs(){for(var e=Et;e;)e=un(e.nextSibling)}function rr(){Et=xt=null,Ve=!1}function ll(e){At===null?At=[e]:At.push(e)}var gd=A.ReactCurrentBatchConfig;function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(d){var N=i.refs;d===null?delete N[o]:N[o]=d},t._stringRef=o,t)}if(typeof e!="string")throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Is(e){var t=e._init;return t(e._payload)}function As(e){function t(U,I){if(e){var B=U.deletions;B===null?(U.deletions=[I],U.flags|=16):B.push(I)}}function n(U,I){if(!e)return null;for(;I!==null;)t(U,I),I=I.sibling;return null}function r(U,I){for(U=new Map;I!==null;)I.key!==null?U.set(I.key,I):U.set(I.index,I),I=I.sibling;return U}function i(U,I){return U=_n(U,I),U.index=0,U.sibling=null,U}function o(U,I,B){return U.index=B,e?(B=U.alternate,B!==null?(B=B.index,B<I?(U.flags|=2,I):B):(U.flags|=2,I)):(U.flags|=1048576,I)}function d(U){return e&&U.alternate===null&&(U.flags|=2),U}function N(U,I,B,pe){return I===null||I.tag!==6?(I=Jl(B,U.mode,pe),I.return=U,I):(I=i(I,B),I.return=U,I)}function R(U,I,B,pe){var Se=B.type;return Se===q?se(U,I,B.props.children,pe,B.key):I!==null&&(I.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===xe&&Is(Se)===I.type)?(pe=i(I,B.props),pe.ref=Dr(U,I,B),pe.return=U,pe):(pe=ro(B.type,B.key,B.props,null,U.mode,pe),pe.ref=Dr(U,I,B),pe.return=U,pe)}function H(U,I,B,pe){return I===null||I.tag!==4||I.stateNode.containerInfo!==B.containerInfo||I.stateNode.implementation!==B.implementation?(I=Yl(B,U.mode,pe),I.return=U,I):(I=i(I,B.children||[]),I.return=U,I)}function se(U,I,B,pe,Se){return I===null||I.tag!==7?(I=Bn(B,U.mode,pe,Se),I.return=U,I):(I=i(I,B),I.return=U,I)}function ue(U,I,B){if(typeof I=="string"&&I!==""||typeof I=="number")return I=Jl(""+I,U.mode,B),I.return=U,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case D:return B=ro(I.type,I.key,I.props,null,U.mode,B),B.ref=Dr(U,null,I),B.return=U,B;case Q:return I=Yl(I,U.mode,B),I.return=U,I;case xe:var pe=I._init;return ue(U,pe(I._payload),B)}if(ne(I)||V(I))return I=Bn(I,U.mode,B,null),I.return=U,I;ji(U,I)}return null}function ae(U,I,B,pe){var Se=I!==null?I.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return Se!==null?null:N(U,I,""+B,pe);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return B.key===Se?R(U,I,B,pe):null;case Q:return B.key===Se?H(U,I,B,pe):null;case xe:return Se=B._init,ae(U,I,Se(B._payload),pe)}if(ne(B)||V(B))return Se!==null?null:se(U,I,B,pe,null);ji(U,B)}return null}function ge(U,I,B,pe,Se){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return U=U.get(B)||null,N(I,U,""+pe,Se);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case D:return U=U.get(pe.key===null?B:pe.key)||null,R(I,U,pe,Se);case Q:return U=U.get(pe.key===null?B:pe.key)||null,H(I,U,pe,Se);case xe:var Me=pe._init;return ge(U,I,B,Me(pe._payload),Se)}if(ne(pe)||V(pe))return U=U.get(B)||null,se(I,U,pe,Se,null);ji(I,pe)}return null}function _e(U,I,B,pe){for(var Se=null,Me=null,Te=I,Ne=I=0,nt=null;Te!==null&&Ne<B.length;Ne++){Te.index>Ne?(nt=Te,Te=null):nt=Te.sibling;var Ie=ae(U,Te,B[Ne],pe);if(Ie===null){Te===null&&(Te=nt);break}e&&Te&&Ie.alternate===null&&t(U,Te),I=o(Ie,I,Ne),Me===null?Se=Ie:Me.sibling=Ie,Me=Ie,Te=nt}if(Ne===B.length)return n(U,Te),Ve&&jn(U,Ne),Se;if(Te===null){for(;Ne<B.length;Ne++)Te=ue(U,B[Ne],pe),Te!==null&&(I=o(Te,I,Ne),Me===null?Se=Te:Me.sibling=Te,Me=Te);return Ve&&jn(U,Ne),Se}for(Te=r(U,Te);Ne<B.length;Ne++)nt=ge(Te,U,Ne,B[Ne],pe),nt!==null&&(e&&nt.alternate!==null&&Te.delete(nt.key===null?Ne:nt.key),I=o(nt,I,Ne),Me===null?Se=nt:Me.sibling=nt,Me=nt);return e&&Te.forEach(function(kn){return t(U,kn)}),Ve&&jn(U,Ne),Se}function ke(U,I,B,pe){var Se=V(B);if(typeof Se!="function")throw Error(l(150));if(B=Se.call(B),B==null)throw Error(l(151));for(var Me=Se=null,Te=I,Ne=I=0,nt=null,Ie=B.next();Te!==null&&!Ie.done;Ne++,Ie=B.next()){Te.index>Ne?(nt=Te,Te=null):nt=Te.sibling;var kn=ae(U,Te,Ie.value,pe);if(kn===null){Te===null&&(Te=nt);break}e&&Te&&kn.alternate===null&&t(U,Te),I=o(kn,I,Ne),Me===null?Se=kn:Me.sibling=kn,Me=kn,Te=nt}if(Ie.done)return n(U,Te),Ve&&jn(U,Ne),Se;if(Te===null){for(;!Ie.done;Ne++,Ie=B.next())Ie=ue(U,Ie.value,pe),Ie!==null&&(I=o(Ie,I,Ne),Me===null?Se=Ie:Me.sibling=Ie,Me=Ie);return Ve&&jn(U,Ne),Se}for(Te=r(U,Te);!Ie.done;Ne++,Ie=B.next())Ie=ge(Te,U,Ne,Ie.value,pe),Ie!==null&&(e&&Ie.alternate!==null&&Te.delete(Ie.key===null?Ne:Ie.key),I=o(Ie,I,Ne),Me===null?Se=Ie:Me.sibling=Ie,Me=Ie);return e&&Te.forEach(function(Qd){return t(U,Qd)}),Ve&&jn(U,Ne),Se}function Qe(U,I,B,pe){if(typeof B=="object"&&B!==null&&B.type===q&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case D:e:{for(var Se=B.key,Me=I;Me!==null;){if(Me.key===Se){if(Se=B.type,Se===q){if(Me.tag===7){n(U,Me.sibling),I=i(Me,B.props.children),I.return=U,U=I;break e}}else if(Me.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===xe&&Is(Se)===Me.type){n(U,Me.sibling),I=i(Me,B.props),I.ref=Dr(U,Me,B),I.return=U,U=I;break e}n(U,Me);break}else t(U,Me);Me=Me.sibling}B.type===q?(I=Bn(B.props.children,U.mode,pe,B.key),I.return=U,U=I):(pe=ro(B.type,B.key,B.props,null,U.mode,pe),pe.ref=Dr(U,I,B),pe.return=U,U=pe)}return d(U);case Q:e:{for(Me=B.key;I!==null;){if(I.key===Me)if(I.tag===4&&I.stateNode.containerInfo===B.containerInfo&&I.stateNode.implementation===B.implementation){n(U,I.sibling),I=i(I,B.children||[]),I.return=U,U=I;break e}else{n(U,I);break}else t(U,I);I=I.sibling}I=Yl(B,U.mode,pe),I.return=U,U=I}return d(U);case xe:return Me=B._init,Qe(U,I,Me(B._payload),pe)}if(ne(B))return _e(U,I,B,pe);if(V(B))return ke(U,I,B,pe);ji(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,I!==null&&I.tag===6?(n(U,I.sibling),I=i(I,B),I.return=U,U=I):(n(U,I),I=Jl(B,U.mode,pe),I.return=U,U=I),d(U)):n(U,I)}return Qe}var ir=As(!0),Fs=As(!1),zi=cn(null),Ri=null,or=null,al=null;function sl(){al=or=Ri=null}function ul(e){var t=zi.current;We(zi),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function lr(e,t){Ri=e,al=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(gt=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(al!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Ri===null)throw Error(l(308));or=e,Ri.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var zn=null;function fl(e){zn===null?zn=[e]:zn.push(e)}function Ds(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,Yt(e,r)}function Yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Yt(e,n)}return i=r.interleaved,i===null?(t.next=t,fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,Yt(e,n)}function Ii(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}function Bs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=d:o=o.next=d,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ai(e,t,n,r){var i=e.updateQueue;pn=!1;var o=i.firstBaseUpdate,d=i.lastBaseUpdate,N=i.shared.pending;if(N!==null){i.shared.pending=null;var R=N,H=R.next;R.next=null,d===null?o=H:d.next=H,d=R;var se=e.alternate;se!==null&&(se=se.updateQueue,N=se.lastBaseUpdate,N!==d&&(N===null?se.firstBaseUpdate=H:N.next=H,se.lastBaseUpdate=R))}if(o!==null){var ue=i.baseState;d=0,se=H=R=null,N=o;do{var ae=N.lane,ge=N.eventTime;if((r&ae)===ae){se!==null&&(se=se.next={eventTime:ge,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var _e=e,ke=N;switch(ae=t,ge=n,ke.tag){case 1:if(_e=ke.payload,typeof _e=="function"){ue=_e.call(ge,ue,ae);break e}ue=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ke.payload,ae=typeof _e=="function"?_e.call(ge,ue,ae):_e,ae==null)break e;ue=X({},ue,ae);break e;case 2:pn=!0}}N.callback!==null&&N.lane!==0&&(e.flags|=64,ae=i.effects,ae===null?i.effects=[N]:ae.push(N))}else ge={eventTime:ge,lane:ae,tag:N.tag,payload:N.payload,callback:N.callback,next:null},se===null?(H=se=ge,R=ue):se=se.next=ge,d|=ae;if(N=N.next,N===null){if(N=i.shared.pending,N===null)break;ae=N,N=ae.next,ae.next=null,i.lastBaseUpdate=ae,i.shared.pending=null}}while(!0);if(se===null&&(R=ue),i.baseState=R,i.firstBaseUpdate=H,i.lastBaseUpdate=se,t=i.shared.interleaved,t!==null){i=t;do d|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);An|=d,e.lanes=d,e.memoizedState=ue}}function Ws(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(l(191,i));i.call(r)}}}var Ur={},Vt=cn(Ur),Br=cn(Ur),Wr=cn(Ur);function Rn(e){if(e===Ur)throw Error(l(174));return e}function pl(e,t){switch(Ue(Wr,t),Ue(Br,e),Ue(Vt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ae(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ae(t,e)}We(Vt),Ue(Vt,t)}function ar(){We(Vt),We(Br),We(Wr)}function Hs(e){Rn(Wr.current);var t=Rn(Vt.current),n=Ae(t,e.type);t!==n&&(Ue(Br,e),Ue(Vt,n))}function hl(e){Br.current===e&&(We(Vt),We(Br))}var $e=cn(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function gl(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Di=A.ReactCurrentDispatcher,vl=A.ReactCurrentBatchConfig,In=0,qe=null,Ye=null,et=null,Ui=!1,Hr=!1,Vr=0,vd=0;function st(){throw Error(l(321))}function yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function wl(e,t,n,r,i,o){if(In=o,qe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Di.current=e===null||e.memoizedState===null?kd:Sd,e=n(r,i),Hr){o=0;do{if(Hr=!1,Vr=0,25<=o)throw Error(l(301));o+=1,et=Ye=null,t.updateQueue=null,Di.current=xd,e=n(r,i)}while(Hr)}if(Di.current=Hi,t=Ye!==null&&Ye.next!==null,In=0,et=Ye=qe=null,Ui=!1,t)throw Error(l(300));return e}function _l(){var e=Vr!==0;return Vr=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?qe.memoizedState=et=e:et=et.next=e,et}function Ot(){if(Ye===null){var e=qe.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=et===null?qe.memoizedState:et.next;if(t!==null)et=t,Ye=e;else{if(e===null)throw Error(l(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},et===null?qe.memoizedState=et=e:et=et.next=e}return et}function $r(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=Ot(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=Ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var d=i.next;i.next=o.next,o.next=d}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var N=d=null,R=null,H=o;do{var se=H.lane;if((In&se)===se)R!==null&&(R=R.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),r=H.hasEagerState?H.eagerState:e(r,H.action);else{var ue={lane:se,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};R===null?(N=R=ue,d=r):R=R.next=ue,qe.lanes|=se,An|=se}H=H.next}while(H!==null&&H!==o);R===null?d=r:R.next=N,It(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=R,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,qe.lanes|=o,An|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sl(e){var t=Ot(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var d=i=i.next;do o=e(o,d.action),d=d.next;while(d!==i);It(o,t.memoizedState)||(gt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Vs(){}function $s(e,t){var n=qe,r=Ot(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,gt=!0),r=r.queue,xl(Zs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,qr(9,Gs.bind(null,n,r,i,t),void 0,null),tt===null)throw Error(l(349));(In&30)!==0||qs(n,t,i)}return i}function qs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gs(e,t,n,r){t.value=n,t.getSnapshot=r,Qs(t)&&Ks(e)}function Zs(e,t,n){return n(function(){Qs(t)&&Ks(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Ks(e){var t=Yt(e,1);t!==null&&Bt(t,e,1,-1)}function Js(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=_d.bind(null,qe,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=qe.updateQueue,t===null?(t={lastEffect:null,stores:null},qe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ys(){return Ot().memoizedState}function Bi(e,t,n,r){var i=$t();qe.flags|=e,i.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function Wi(e,t,n,r){var i=Ot();r=r===void 0?null:r;var o=void 0;if(Ye!==null){var d=Ye.memoizedState;if(o=d.destroy,r!==null&&yl(r,d.deps)){i.memoizedState=qr(t,n,o,r);return}}qe.flags|=e,i.memoizedState=qr(1|t,n,o,r)}function Xs(e,t){return Bi(8390656,8,e,t)}function xl(e,t){return Wi(2048,8,e,t)}function eu(e,t){return Wi(4,2,e,t)}function tu(e,t){return Wi(4,4,e,t)}function nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ru(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4,4,nu.bind(null,t,e),n)}function El(){}function iu(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ou(e,t){var n=Ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lu(e,t,n){return(In&21)===0?(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n):(It(n,t)||(n=Ia(),qe.lanes|=n,An|=n,e.baseState=!0),t)}function yd(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=vl.transition;vl.transition={};try{e(!1),t()}finally{Fe=n,vl.transition=r}}function au(){return Ot().memoizedState}function wd(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},su(e))uu(t,n);else if(n=Ds(e,t,n,r),n!==null){var i=pt();Bt(n,e,r,i),cu(n,t,r)}}function _d(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(su(e))uu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var d=t.lastRenderedState,N=o(d,n);if(i.hasEagerState=!0,i.eagerState=N,It(N,d)){var R=t.interleaved;R===null?(i.next=i,fl(t)):(i.next=R.next,R.next=i),t.interleaved=i;return}}catch{}finally{}n=Ds(e,t,i,r),n!==null&&(i=pt(),Bt(n,e,r,i),cu(n,t,r))}}function su(e){var t=e.alternate;return e===qe||t!==null&&t===qe}function uu(e,t){Hr=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Po(e,n)}}var Hi={readContext:Nt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},kd={readContext:Nt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:Xs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wd.bind(null,qe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:El,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=yd.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=qe,i=$t();if(Ve){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),tt===null)throw Error(l(349));(In&30)!==0||qs(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xs(Zs.bind(null,r,o,e),[e]),r.flags|=2048,qr(9,Gs.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=tt.identifierPrefix;if(Ve){var n=Jt,r=Kt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Sd={readContext:Nt,useCallback:iu,useContext:Nt,useEffect:xl,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:kl,useRef:Ys,useState:function(){return kl($r)},useDebugValue:El,useDeferredValue:function(e){var t=Ot();return lu(t,Ye.memoizedState,e)},useTransition:function(){var e=kl($r)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Vs,useSyncExternalStore:$s,useId:au,unstable_isNewReconciler:!1},xd={readContext:Nt,useCallback:iu,useContext:Nt,useEffect:xl,useImperativeHandle:ru,useInsertionEffect:eu,useLayoutEffect:tu,useMemo:ou,useReducer:Sl,useRef:Ys,useState:function(){return Sl($r)},useDebugValue:El,useDeferredValue:function(e){var t=Ot();return Ye===null?t.memoizedState=e:lu(t,Ye.memoizedState,e)},useTransition:function(){var e=Sl($r)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Vs,useSyncExternalStore:$s,useId:au,unstable_isNewReconciler:!1};function Ft(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Tn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pt(),i=yn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Bt(t,e,i,r),Ii(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pt(),i=yn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(Bt(t,e,i,r),Ii(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pt(),r=yn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(Bt(t,e,r,n),Ii(t,e,r))}};function fu(e,t,n,r,i,o,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,d):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,o):!0}function du(e,t,n){var r=!1,i=fn,o=t.contextType;return typeof o=="object"&&o!==null?o=Nt(o):(i=mt(t)?On:at.current,r=t.contextTypes,o=(r=r!=null)?er(e,i):fn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function pu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function Pl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},dl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Nt(o):(o=mt(t)?On:at.current,i.context=er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vi.enqueueReplaceState(i,i.state,null),Ai(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function sr(e,t){try{var n="",r=t;do n+=te(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ed=typeof WeakMap=="function"?WeakMap:Map;function hu(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ji||(Ji=!0,Hl=r),Ml(e,t)},n}function mu(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ml(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ml(e,t),typeof r!="function"&&(gn===null?gn=new Set([this]):gn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ed;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Fd.bind(null,e,t,n),t.then(e,e))}function vu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Cd=A.ReactCurrentOwner,gt=!1;function dt(e,t,n,r){t.child=e===null?Fs(t,null,n,r):ir(t,e.child,n,r)}function wu(e,t,n,r,i){n=n.render;var o=t.ref;return lr(t,i),r=wl(e,t,n,r,o,i),n=_l(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Ve&&n&&nl(t),t.flags|=1,dt(e,t,r,i),t.child)}function _u(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Kl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ku(e,t,o,r,i)):(e=ro(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var d=o.memoizedProps;if(n=n.compare,n=n!==null?n:Lr,n(d,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=_n(o,r),e.ref=t.ref,e.return=t,t.child=e}function ku(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Lr(o,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(gt=!0);else return t.lanes=e.lanes,en(e,t,i)}return Tl(e,t,n,r,i)}function Su(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(cr,Ct),Ct|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ue(cr,Ct),Ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Ue(cr,Ct),Ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ue(cr,Ct),Ct|=r;return dt(e,t,i,n),t.child}function xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var o=mt(n)?On:at.current;return o=er(t,o),lr(t,i),n=wl(e,t,n,r,o,i),r=_l(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Ve&&r&&nl(t),t.flags|=1,dt(e,t,n,i),t.child)}function Eu(e,t,n,r,i){if(mt(n)){var o=!0;Mi(t)}else o=!1;if(lr(t,i),t.stateNode===null)qi(e,t),du(t,n,r),Pl(t,n,r,i),r=!0;else if(e===null){var d=t.stateNode,N=t.memoizedProps;d.props=N;var R=d.context,H=n.contextType;typeof H=="object"&&H!==null?H=Nt(H):(H=mt(n)?On:at.current,H=er(t,H));var se=n.getDerivedStateFromProps,ue=typeof se=="function"||typeof d.getSnapshotBeforeUpdate=="function";ue||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N!==r||R!==H)&&pu(t,d,r,H),pn=!1;var ae=t.memoizedState;d.state=ae,Ai(t,r,d,i),R=t.memoizedState,N!==r||ae!==R||ht.current||pn?(typeof se=="function"&&(Cl(t,n,se,r),R=t.memoizedState),(N=pn||fu(t,n,N,r,ae,R,H))?(ue||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=R),d.props=r,d.state=R,d.context=H,r=N):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,Us(e,t),N=t.memoizedProps,H=t.type===t.elementType?N:Ft(t.type,N),d.props=H,ue=t.pendingProps,ae=d.context,R=n.contextType,typeof R=="object"&&R!==null?R=Nt(R):(R=mt(n)?On:at.current,R=er(t,R));var ge=n.getDerivedStateFromProps;(se=typeof ge=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N!==ue||ae!==R)&&pu(t,d,r,R),pn=!1,ae=t.memoizedState,d.state=ae,Ai(t,r,d,i);var _e=t.memoizedState;N!==ue||ae!==_e||ht.current||pn?(typeof ge=="function"&&(Cl(t,n,ge,r),_e=t.memoizedState),(H=pn||fu(t,n,H,r,ae,_e,R)||!1)?(se||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,_e,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,_e,R)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||N===e.memoizedProps&&ae===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&ae===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_e),d.props=r,d.state=_e,d.context=R,r=H):(typeof d.componentDidUpdate!="function"||N===e.memoizedProps&&ae===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&ae===e.memoizedState||(t.flags|=1024),r=!1)}return Nl(e,t,n,r,o,i)}function Nl(e,t,n,r,i,o){xu(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return i&&Ts(t,n,!1),en(e,t,o);r=t.stateNode,Cd.current=t;var N=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=ir(t,e.child,null,o),t.child=ir(t,null,N,o)):dt(e,t,N,o),t.memoizedState=r.state,i&&Ts(t,n,!0),t.child}function Cu(e){var t=e.stateNode;t.pendingContext?bs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&bs(e,t.context,!1),pl(e,t.containerInfo)}function Pu(e,t,n,r,i){return rr(),ll(i),t.flags|=256,dt(e,t,n,r),t.child}var Ol={dehydrated:null,treeContext:null,retryLane:0};function Ll(e){return{baseLanes:e,cachePool:null,transitions:null}}function bu(e,t,n){var r=t.pendingProps,i=$e.current,o=!1,d=(t.flags&128)!==0,N;if((N=d)||(N=e!==null&&e.memoizedState===null?!1:(i&2)!==0),N?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ue($e,i&1),e===null)return ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,o?(r=t.mode,o=t.child,d={mode:"hidden",children:d},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=d):o=io(d,r,0,null),e=Bn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ll(n),t.memoizedState=Ol,e):jl(t,d));if(i=e.memoizedState,i!==null&&(N=i.dehydrated,N!==null))return Pd(e,t,d,r,N,i,n);if(o){o=r.fallback,d=t.mode,i=e.child,N=i.sibling;var R={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=R,t.deletions=null):(r=_n(i,R),r.subtreeFlags=i.subtreeFlags&14680064),N!==null?o=_n(N,o):(o=Bn(o,d,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,d=e.child.memoizedState,d=d===null?Ll(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},o.memoizedState=d,o.childLanes=e.childLanes&~n,t.memoizedState=Ol,r}return o=e.child,e=o.sibling,r=_n(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function jl(e,t){return t=io({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $i(e,t,n,r){return r!==null&&ll(r),ir(t,e.child,null,n),e=jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pd(e,t,n,r,i,o,d){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(l(422))),$i(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=io({mode:"visible",children:r.children},i,0,null),o=Bn(o,i,d,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&ir(t,e.child,null,d),t.child.memoizedState=Ll(d),t.memoizedState=Ol,o);if((t.mode&1)===0)return $i(e,t,d,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var N=r.dgst;return r=N,o=Error(l(419)),r=bl(o,r,void 0),$i(e,t,d,r)}if(N=(d&e.childLanes)!==0,gt||N){if(r=tt,r!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|d))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Yt(e,i),Bt(r,e,i,-1))}return Ql(),r=bl(Error(l(421))),$i(e,t,d,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dd.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Et=un(i.nextSibling),xt=t,Ve=!0,At=null,e!==null&&(Mt[Tt++]=Kt,Mt[Tt++]=Jt,Mt[Tt++]=Ln,Kt=e.id,Jt=e.overflow,Ln=t),t=jl(t,r.children),t.flags|=4096,t)}function Mu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function zl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Tu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(dt(e,t,r.children,n),r=$e.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Mu(e,n,t);else if(e.tag===19)Mu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ue($e,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zl(t,!0,n,null,o);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function bd(e,t,n){switch(t.tag){case 3:Cu(t),rr();break;case 5:Hs(t);break;case 1:mt(t.type)&&Mi(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ue(zi,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ue($e,$e.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?bu(e,t,n):(Ue($e,$e.current&1),e=en(e,t,n),e!==null?e.sibling:null);Ue($e,$e.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Tu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ue($e,$e.current),r)break;return null;case 22:case 23:return t.lanes=0,Su(e,t,n)}return en(e,t,n)}var Nu,Rl,Ou,Lu;Nu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Ou=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(Vt.current);var o=null;switch(n){case"input":i=a(e,i),r=a(e,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=W(e,i),r=W(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ci)}kt(n,r);var d;n=null;for(H in i)if(!r.hasOwnProperty(H)&&i.hasOwnProperty(H)&&i[H]!=null)if(H==="style"){var N=i[H];for(d in N)N.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(g.hasOwnProperty(H)?o||(o=[]):(o=o||[]).push(H,null));for(H in r){var R=r[H];if(N=i!=null?i[H]:void 0,r.hasOwnProperty(H)&&R!==N&&(R!=null||N!=null))if(H==="style")if(N){for(d in N)!N.hasOwnProperty(d)||R&&R.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in R)R.hasOwnProperty(d)&&N[d]!==R[d]&&(n||(n={}),n[d]=R[d])}else n||(o||(o=[]),o.push(H,n)),n=R;else H==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,N=N?N.__html:void 0,R!=null&&N!==R&&(o=o||[]).push(H,R)):H==="children"?typeof R!="string"&&typeof R!="number"||(o=o||[]).push(H,""+R):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(g.hasOwnProperty(H)?(R!=null&&H==="onScroll"&&Be("scroll",e),o||N===R||(o=[])):(o=o||[]).push(H,R))}n&&(o=o||[]).push("style",n);var H=o;(t.updateQueue=H)&&(t.flags|=4)}},Lu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!Ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Md(e,t,n){var r=t.pendingProps;switch(rl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(t),null;case 1:return mt(t.type)&&bi(),ut(t),null;case 3:return r=t.stateNode,ar(),We(ht),We(at),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,At!==null&&(ql(At),At=null))),Rl(e,t),ut(t),null;case 5:hl(t);var i=Rn(Wr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(l(166));return ut(t),null}if(e=Rn(Vt.current),Li(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ht]=t,r[Ar]=o,e=(t.mode&1)!==0,n){case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":case"embed":Be("load",r);break;case"video":case"audio":for(i=0;i<zr.length;i++)Be(zr[i],r);break;case"source":Be("error",r);break;case"img":case"image":case"link":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"input":J(r,o),Be("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Be("invalid",r);break;case"textarea":de(r,o),Be("invalid",r)}kt(n,o),i=null;for(var d in o)if(o.hasOwnProperty(d)){var N=o[d];d==="children"?typeof N=="string"?r.textContent!==N&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,N,e),i=["children",N]):typeof N=="number"&&r.textContent!==""+N&&(o.suppressHydrationWarning!==!0&&Ei(r.textContent,N,e),i=["children",""+N]):g.hasOwnProperty(d)&&N!=null&&d==="onScroll"&&Be("scroll",r)}switch(n){case"input":De(r),b(r,o,!0);break;case"textarea":De(r),he(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ci)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pe(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[Ht]=t,e[Ar]=r,Nu(e,t,!1,!1),t.stateNode=e;e:{switch(d=Vn(n,r),n){case"dialog":Be("cancel",e),Be("close",e),i=r;break;case"iframe":case"object":case"embed":Be("load",e),i=r;break;case"video":case"audio":for(i=0;i<zr.length;i++)Be(zr[i],e);i=r;break;case"source":Be("error",e),i=r;break;case"img":case"image":case"link":Be("error",e),Be("load",e),i=r;break;case"details":Be("toggle",e),i=r;break;case"input":J(e,r),i=a(e,r),Be("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),Be("invalid",e);break;case"textarea":de(e,r),i=W(e,r),Be("invalid",e);break;default:i=r}kt(n,i),N=i;for(o in N)if(N.hasOwnProperty(o)){var R=N[o];o==="style"?bn(e,R):o==="dangerouslySetInnerHTML"?(R=R?R.__html:void 0,R!=null&&ft(e,R)):o==="children"?typeof R=="string"?(n!=="textarea"||R!=="")&&zt(e,R):typeof R=="number"&&zt(e,""+R):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(g.hasOwnProperty(o)?R!=null&&o==="onScroll"&&Be("scroll",e):R!=null&&j(e,o,R,d))}switch(n){case"input":De(e),b(e,r,!1);break;case"textarea":De(e),he(e);break;case"option":r.value!=null&&e.setAttribute("value",""+we(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ie(e,!!r.multiple,o,!1):r.defaultValue!=null&&ie(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ci)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ut(t),null;case 6:if(e&&t.stateNode!=null)Lu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(n=Rn(Wr.current),Rn(Vt.current),Li(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ht]=t,(o=r.nodeValue!==n)&&(e=xt,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=t,t.stateNode=r}return ut(t),null;case 13:if(We($e),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ve&&Et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rs(),rr(),t.flags|=98560,o=!1;else if(o=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(l(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(l(317));o[Ht]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ut(t),o=!1}else At!==null&&(ql(At),At=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||($e.current&1)!==0?Xe===0&&(Xe=3):Ql())),t.updateQueue!==null&&(t.flags|=4),ut(t),null);case 4:return ar(),Rl(e,t),e===null&&Rr(t.stateNode.containerInfo),ut(t),null;case 10:return ul(t.type._context),ut(t),null;case 17:return mt(t.type)&&bi(),ut(t),null;case 19:if(We($e),o=t.memoizedState,o===null)return ut(t),null;if(r=(t.flags&128)!==0,d=o.rendering,d===null)if(r)Gr(o,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Fi(e),d!==null){for(t.flags|=128,Gr(o,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,d=o.alternate,d===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=d.childLanes,o.lanes=d.lanes,o.child=d.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=d.memoizedProps,o.memoizedState=d.memoizedState,o.updateQueue=d.updateQueue,o.type=d.type,e=d.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ue($e,$e.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ze()>fr&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ve)return ut(t),null}else 2*Ze()-o.renderingStartTime>fr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(o,!1),t.lanes=4194304);o.isBackwards?(d.sibling=t.child,t.child=d):(n=o.last,n!==null?n.sibling=d:t.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ze(),t.sibling=null,n=$e.current,Ue($e,r?n&1|2:n&1),t):(ut(t),null);case 22:case 23:return Zl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ct&1073741824)!==0&&(ut(t),t.subtreeFlags&6&&(t.flags|=8192)):ut(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Td(e,t){switch(rl(t),t.tag){case 1:return mt(t.type)&&bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ar(),We(ht),We(at),gl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(We($e),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return We($e),null;case 4:return ar(),null;case 10:return ul(t.type._context),null;case 22:case 23:return Zl(),null;case 24:return null;default:return null}}var Gi=!1,ct=!1,Nd=typeof WeakSet=="function"?WeakSet:Set,ye=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ge(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){Ge(e,t,r)}}var ju=!1;function Od(e,t){if(Zo=pi,e=fs(),Uo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var d=0,N=-1,R=-1,H=0,se=0,ue=e,ae=null;t:for(;;){for(var ge;ue!==n||i!==0&&ue.nodeType!==3||(N=d+i),ue!==o||r!==0&&ue.nodeType!==3||(R=d+r),ue.nodeType===3&&(d+=ue.nodeValue.length),(ge=ue.firstChild)!==null;)ae=ue,ue=ge;for(;;){if(ue===e)break t;if(ae===n&&++H===i&&(N=d),ae===o&&++se===r&&(R=d),(ge=ue.nextSibling)!==null)break;ue=ae,ae=ue.parentNode}ue=ge}n=N===-1||R===-1?null:{start:N,end:R}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qo={focusedElem:e,selectionRange:n},pi=!1,ye=t;ye!==null;)if(t=ye,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ye=e;else for(;ye!==null;){t=ye;try{var _e=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var ke=_e.memoizedProps,Qe=_e.memoizedState,U=t.stateNode,I=U.getSnapshotBeforeUpdate(t.elementType===t.type?ke:Ft(t.type,ke),Qe);U.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var B=t.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(pe){Ge(t,t.return,pe)}if(e=t.sibling,e!==null){e.return=t.return,ye=e;break}ye=t.return}return _e=ju,ju=!1,_e}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Il(t,n,o)}i=i.next}while(i!==r)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Al(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zu(e){var t=e.alternate;t!==null&&(e.alternate=null,zu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ht],delete t[Ar],delete t[Xo],delete t[pd],delete t[hd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ru(e){return e.tag===5||e.tag===3||e.tag===4}function Iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ru(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ci));else if(r!==4&&(e=e.child,e!==null))for(Fl(e,t,n),e=e.sibling;e!==null;)Fl(e,t,n),e=e.sibling}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}var rt=null,Dt=!1;function mn(e,t,n){for(n=n.child;n!==null;)Au(e,t,n),n=n.sibling}function Au(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(ai,n)}catch{}switch(n.tag){case 5:ct||ur(n,t);case 6:var r=rt,i=Dt;rt=null,mn(e,t,n),rt=r,Dt=i,rt!==null&&(Dt?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(Dt?(e=rt,n=n.stateNode,e.nodeType===8?Yo(e.parentNode,n):e.nodeType===1&&Yo(e,n),Pr(e)):Yo(rt,n.stateNode));break;case 4:r=rt,i=Dt,rt=n.stateNode.containerInfo,Dt=!0,mn(e,t,n),rt=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,d=o.destroy;o=o.tag,d!==void 0&&((o&2)!==0||(o&4)!==0)&&Il(n,t,d),i=i.next}while(i!==r)}mn(e,t,n);break;case 1:if(!ct&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(N){Ge(n,t,N)}mn(e,t,n);break;case 21:mn(e,t,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,mn(e,t,n),ct=r):mn(e,t,n);break;default:mn(e,t,n)}}function Fu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nd),t.forEach(function(r){var i=Ud.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,d=t,N=d;e:for(;N!==null;){switch(N.tag){case 5:rt=N.stateNode,Dt=!1;break e;case 3:rt=N.stateNode.containerInfo,Dt=!0;break e;case 4:rt=N.stateNode.containerInfo,Dt=!0;break e}N=N.return}if(rt===null)throw Error(l(160));Au(o,d,i),rt=null,Dt=!1;var R=i.alternate;R!==null&&(R.return=null),i.return=null}catch(H){Ge(i,t,H)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Du(t,e),t=t.sibling}function Du(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ut(t,e),qt(e),r&4){try{Zr(3,e,e.return),Zi(3,e)}catch(ke){Ge(e,e.return,ke)}try{Zr(5,e,e.return)}catch(ke){Ge(e,e.return,ke)}}break;case 1:Ut(t,e),qt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(Ut(t,e),qt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var i=e.stateNode;try{zt(i,"")}catch(ke){Ge(e,e.return,ke)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,d=n!==null?n.memoizedProps:o,N=e.type,R=e.updateQueue;if(e.updateQueue=null,R!==null)try{N==="input"&&o.type==="radio"&&o.name!=null&&$(i,o),Vn(N,d);var H=Vn(N,o);for(d=0;d<R.length;d+=2){var se=R[d],ue=R[d+1];se==="style"?bn(i,ue):se==="dangerouslySetInnerHTML"?ft(i,ue):se==="children"?zt(i,ue):j(i,se,ue,H)}switch(N){case"input":O(i,o);break;case"textarea":ve(i,o);break;case"select":var ae=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var ge=o.value;ge!=null?ie(i,!!o.multiple,ge,!1):ae!==!!o.multiple&&(o.defaultValue!=null?ie(i,!!o.multiple,o.defaultValue,!0):ie(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ar]=o}catch(ke){Ge(e,e.return,ke)}}break;case 6:if(Ut(t,e),qt(e),r&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(ke){Ge(e,e.return,ke)}}break;case 3:if(Ut(t,e),qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(ke){Ge(e,e.return,ke)}break;case 4:Ut(t,e),qt(e);break;case 13:Ut(t,e),qt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Wl=Ze())),r&4&&Fu(e);break;case 22:if(se=n!==null&&n.memoizedState!==null,e.mode&1?(ct=(H=ct)||se,Ut(t,e),ct=H):Ut(t,e),qt(e),r&8192){if(H=e.memoizedState!==null,(e.stateNode.isHidden=H)&&!se&&(e.mode&1)!==0)for(ye=e,se=e.child;se!==null;){for(ue=ye=se;ye!==null;){switch(ae=ye,ge=ae.child,ae.tag){case 0:case 11:case 14:case 15:Zr(4,ae,ae.return);break;case 1:ur(ae,ae.return);var _e=ae.stateNode;if(typeof _e.componentWillUnmount=="function"){r=ae,n=ae.return;try{t=r,_e.props=t.memoizedProps,_e.state=t.memoizedState,_e.componentWillUnmount()}catch(ke){Ge(r,n,ke)}}break;case 5:ur(ae,ae.return);break;case 22:if(ae.memoizedState!==null){Wu(ue);continue}}ge!==null?(ge.return=ae,ye=ge):Wu(ue)}se=se.sibling}e:for(se=null,ue=e;;){if(ue.tag===5){if(se===null){se=ue;try{i=ue.stateNode,H?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(N=ue.stateNode,R=ue.memoizedProps.style,d=R!=null&&R.hasOwnProperty("display")?R.display:null,N.style.display=He("display",d))}catch(ke){Ge(e,e.return,ke)}}}else if(ue.tag===6){if(se===null)try{ue.stateNode.nodeValue=H?"":ue.memoizedProps}catch(ke){Ge(e,e.return,ke)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;se===ue&&(se=null),ue=ue.return}se===ue&&(se=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:Ut(t,e),qt(e),r&4&&Fu(e);break;case 21:break;default:Ut(t,e),qt(e)}}function qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ru(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zt(i,""),r.flags&=-33);var o=Iu(e);Dl(e,o,i);break;case 3:case 4:var d=r.stateNode.containerInfo,N=Iu(e);Fl(e,N,d);break;default:throw Error(l(161))}}catch(R){Ge(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e,t,n){ye=e,Uu(e)}function Uu(e,t,n){for(var r=(e.mode&1)!==0;ye!==null;){var i=ye,o=i.child;if(i.tag===22&&r){var d=i.memoizedState!==null||Gi;if(!d){var N=i.alternate,R=N!==null&&N.memoizedState!==null||ct;N=Gi;var H=ct;if(Gi=d,(ct=R)&&!H)for(ye=i;ye!==null;)d=ye,R=d.child,d.tag===22&&d.memoizedState!==null?Hu(i):R!==null?(R.return=d,ye=R):Hu(i);for(;o!==null;)ye=o,Uu(o),o=o.sibling;ye=i,Gi=N,ct=H}Bu(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,ye=o):Bu(e)}}function Bu(e){for(;ye!==null;){var t=ye;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ct||Zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ct)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ws(t,o,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ws(t,d,n)}break;case 5:var N=t.stateNode;if(n===null&&t.flags&4){n=N;var R=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":R.autoFocus&&n.focus();break;case"img":R.src&&(n.src=R.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var H=t.alternate;if(H!==null){var se=H.memoizedState;if(se!==null){var ue=se.dehydrated;ue!==null&&Pr(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}ct||t.flags&512&&Al(t)}catch(ae){Ge(t,t.return,ae)}}if(t===e){ye=null;break}if(n=t.sibling,n!==null){n.return=t.return,ye=n;break}ye=t.return}}function Wu(e){for(;ye!==null;){var t=ye;if(t===e){ye=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ye=n;break}ye=t.return}}function Hu(e){for(;ye!==null;){var t=ye;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(R){Ge(t,n,R)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(R){Ge(t,i,R)}}var o=t.return;try{Al(t)}catch(R){Ge(t,o,R)}break;case 5:var d=t.return;try{Al(t)}catch(R){Ge(t,d,R)}}}catch(R){Ge(t,t.return,R)}if(t===e){ye=null;break}var N=t.sibling;if(N!==null){N.return=t.return,ye=N;break}ye=t.return}}var jd=Math.ceil,Qi=A.ReactCurrentDispatcher,Ul=A.ReactCurrentOwner,Lt=A.ReactCurrentBatchConfig,ze=0,tt=null,Ke=null,it=0,Ct=0,cr=cn(0),Xe=0,Qr=null,An=0,Ki=0,Bl=0,Kr=null,vt=null,Wl=0,fr=1/0,tn=null,Ji=!1,Hl=null,gn=null,Yi=!1,vn=null,Xi=0,Jr=0,Vl=null,eo=-1,to=0;function pt(){return(ze&6)!==0?Ze():eo!==-1?eo:eo=Ze()}function yn(e){return(e.mode&1)===0?1:(ze&2)!==0&&it!==0?it&-it:gd.transition!==null?(to===0&&(to=Ia()),to):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:$a(e.type)),e)}function Bt(e,t,n,r){if(50<Jr)throw Jr=0,Vl=null,Error(l(185));kr(e,n,r),((ze&2)===0||e!==tt)&&(e===tt&&((ze&2)===0&&(Ki|=n),Xe===4&&wn(e,it)),yt(e,r),n===1&&ze===0&&(t.mode&1)===0&&(fr=Ze()+500,Ti&&dn()))}function yt(e,t){var n=e.callbackNode;gf(e,t);var r=ci(e,e===tt?it:0);if(r===0)n!==null&&ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ja(n),t===1)e.tag===0?md($u.bind(null,e)):Ns($u.bind(null,e)),fd(function(){(ze&6)===0&&dn()}),n=null;else{switch(Aa(r)){case 1:n=xo;break;case 4:n=za;break;case 16:n=li;break;case 536870912:n=Ra;break;default:n=li}n=Xu(n,Vu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Vu(e,t){if(eo=-1,to=0,(ze&6)!==0)throw Error(l(327));var n=e.callbackNode;if(dr()&&e.callbackNode!==n)return null;var r=ci(e,e===tt?it:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=no(e,r);else{t=r;var i=ze;ze|=2;var o=Gu();(tt!==e||it!==t)&&(tn=null,fr=Ze()+500,Dn(e,t));do try{Id();break}catch(N){qu(e,N)}while(!0);sl(),Qi.current=o,ze=i,Ke!==null?t=0:(tt=null,it=0,t=Xe)}if(t!==0){if(t===2&&(i=Eo(e),i!==0&&(r=i,t=$l(e,i))),t===1)throw n=Qr,Dn(e,0),wn(e,r),yt(e,Ze()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!zd(i)&&(t=no(e,r),t===2&&(o=Eo(e),o!==0&&(r=o,t=$l(e,o))),t===1))throw n=Qr,Dn(e,0),wn(e,r),yt(e,Ze()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:Un(e,vt,tn);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Wl+500-Ze(),10<t)){if(ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){pt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jo(Un.bind(null,e,vt,tn),t);break}Un(e,vt,tn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var d=31-Rt(r);o=1<<d,d=t[d],d>i&&(i=d),r&=~o}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jd(r/1960))-r,10<r){e.timeoutHandle=Jo(Un.bind(null,e,vt,tn),r);break}Un(e,vt,tn);break;case 5:Un(e,vt,tn);break;default:throw Error(l(329))}}}return yt(e,Ze()),e.callbackNode===n?Vu.bind(null,e):null}function $l(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=no(e,t),e!==2&&(t=vt,vt=n,t!==null&&ql(t)),e}function ql(e){vt===null?vt=e:vt.push.apply(vt,e)}function zd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Bl,t&=~Ki,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function $u(e){if((ze&6)!==0)throw Error(l(327));dr();var t=ci(e,0);if((t&1)===0)return yt(e,Ze()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=Eo(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Qr,Dn(e,0),wn(e,t),yt(e,Ze()),n;if(n===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,vt,tn),yt(e,Ze()),null}function Gl(e,t){var n=ze;ze|=1;try{return e(t)}finally{ze=n,ze===0&&(fr=Ze()+500,Ti&&dn())}}function Fn(e){vn!==null&&vn.tag===0&&(ze&6)===0&&dr();var t=ze;ze|=1;var n=Lt.transition,r=Fe;try{if(Lt.transition=null,Fe=1,e)return e()}finally{Fe=r,Lt.transition=n,ze=t,(ze&6)===0&&dn()}}function Zl(){Ct=cr.current,We(cr)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cd(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(rl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:ar(),We(ht),We(at),gl();break;case 5:hl(r);break;case 4:ar();break;case 13:We($e);break;case 19:We($e);break;case 10:ul(r.type._context);break;case 22:case 23:Zl()}n=n.return}if(tt=e,Ke=e=_n(e.current,null),it=Ct=t,Xe=0,Qr=null,Bl=Ki=An=0,vt=Kr=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var d=o.next;o.next=i,r.next=d}n.pending=r}zn=null}return e}function qu(e,t){do{var n=Ke;try{if(sl(),Di.current=Hi,Ui){for(var r=qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(In=0,et=Ye=qe=null,Hr=!1,Vr=0,Ul.current=null,n===null||n.return===null){Xe=1,Qr=t,Ke=null;break}e:{var o=e,d=n.return,N=n,R=t;if(t=it,N.flags|=32768,R!==null&&typeof R=="object"&&typeof R.then=="function"){var H=R,se=N,ue=se.tag;if((se.mode&1)===0&&(ue===0||ue===11||ue===15)){var ae=se.alternate;ae?(se.updateQueue=ae.updateQueue,se.memoizedState=ae.memoizedState,se.lanes=ae.lanes):(se.updateQueue=null,se.memoizedState=null)}var ge=vu(d);if(ge!==null){ge.flags&=-257,yu(ge,d,N,o,t),ge.mode&1&&gu(o,H,t),t=ge,R=H;var _e=t.updateQueue;if(_e===null){var ke=new Set;ke.add(R),t.updateQueue=ke}else _e.add(R);break e}else{if((t&1)===0){gu(o,H,t),Ql();break e}R=Error(l(426))}}else if(Ve&&N.mode&1){var Qe=vu(d);if(Qe!==null){(Qe.flags&65536)===0&&(Qe.flags|=256),yu(Qe,d,N,o,t),ll(sr(R,N));break e}}o=R=sr(R,N),Xe!==4&&(Xe=2),Kr===null?Kr=[o]:Kr.push(o),o=d;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var U=hu(o,R,t);Bs(o,U);break e;case 1:N=R;var I=o.type,B=o.stateNode;if((o.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(gn===null||!gn.has(B)))){o.flags|=65536,t&=-t,o.lanes|=t;var pe=mu(o,N,t);Bs(o,pe);break e}}o=o.return}while(o!==null)}Qu(n)}catch(Se){t=Se,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function Gu(){var e=Qi.current;return Qi.current=Hi,e===null?Hi:e}function Ql(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),tt===null||(An&268435455)===0&&(Ki&268435455)===0||wn(tt,it)}function no(e,t){var n=ze;ze|=2;var r=Gu();(tt!==e||it!==t)&&(tn=null,Dn(e,t));do try{Rd();break}catch(i){qu(e,i)}while(!0);if(sl(),ze=n,Qi.current=r,Ke!==null)throw Error(l(261));return tt=null,it=0,Xe}function Rd(){for(;Ke!==null;)Zu(Ke)}function Id(){for(;Ke!==null&&!af();)Zu(Ke)}function Zu(e){var t=Yu(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,t===null?Qu(e):Ke=t,Ul.current=null}function Qu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Md(n,t,Ct),n!==null){Ke=n;return}}else{if(n=Td(n,t),n!==null){n.flags&=32767,Ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,Ke=null;return}}if(t=t.sibling,t!==null){Ke=t;return}Ke=t=e}while(t!==null);Xe===0&&(Xe=5)}function Un(e,t,n){var r=Fe,i=Lt.transition;try{Lt.transition=null,Fe=1,Ad(e,t,n,r)}finally{Lt.transition=i,Fe=r}return null}function Ad(e,t,n,r){do dr();while(vn!==null);if((ze&6)!==0)throw Error(l(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(vf(e,o),e===tt&&(Ke=tt=null,it=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Yi||(Yi=!0,Xu(li,function(){return dr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Lt.transition,Lt.transition=null;var d=Fe;Fe=1;var N=ze;ze|=4,Ul.current=null,Od(e,n),Du(n,e),rd(Qo),pi=!!Zo,Qo=Zo=null,e.current=n,Ld(n),sf(),ze=N,Fe=d,Lt.transition=o}else e.current=n;if(Yi&&(Yi=!1,vn=e,Xi=i),o=e.pendingLanes,o===0&&(gn=null),ff(n.stateNode),yt(e,Ze()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ji)throw Ji=!1,e=Hl,Hl=null,e;return(Xi&1)!==0&&e.tag!==0&&dr(),o=e.pendingLanes,(o&1)!==0?e===Vl?Jr++:(Jr=0,Vl=e):Jr=0,dn(),null}function dr(){if(vn!==null){var e=Aa(Xi),t=Lt.transition,n=Fe;try{if(Lt.transition=null,Fe=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,Xi=0,(ze&6)!==0)throw Error(l(331));var i=ze;for(ze|=4,ye=e.current;ye!==null;){var o=ye,d=o.child;if((ye.flags&16)!==0){var N=o.deletions;if(N!==null){for(var R=0;R<N.length;R++){var H=N[R];for(ye=H;ye!==null;){var se=ye;switch(se.tag){case 0:case 11:case 15:Zr(8,se,o)}var ue=se.child;if(ue!==null)ue.return=se,ye=ue;else for(;ye!==null;){se=ye;var ae=se.sibling,ge=se.return;if(zu(se),se===H){ye=null;break}if(ae!==null){ae.return=ge,ye=ae;break}ye=ge}}}var _e=o.alternate;if(_e!==null){var ke=_e.child;if(ke!==null){_e.child=null;do{var Qe=ke.sibling;ke.sibling=null,ke=Qe}while(ke!==null)}}ye=o}}if((o.subtreeFlags&2064)!==0&&d!==null)d.return=o,ye=d;else e:for(;ye!==null;){if(o=ye,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var U=o.sibling;if(U!==null){U.return=o.return,ye=U;break e}ye=o.return}}var I=e.current;for(ye=I;ye!==null;){d=ye;var B=d.child;if((d.subtreeFlags&2064)!==0&&B!==null)B.return=d,ye=B;else e:for(d=I;ye!==null;){if(N=ye,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Zi(9,N)}}catch(Se){Ge(N,N.return,Se)}if(N===d){ye=null;break e}var pe=N.sibling;if(pe!==null){pe.return=N.return,ye=pe;break e}ye=N.return}}if(ze=i,dn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(ai,e)}catch{}r=!0}return r}finally{Fe=n,Lt.transition=t}}return!1}function Ku(e,t,n){t=sr(n,t),t=hu(e,t,1),e=hn(e,t,1),t=pt(),e!==null&&(kr(e,1,t),yt(e,t))}function Ge(e,t,n){if(e.tag===3)Ku(e,e,n);else for(;t!==null;){if(t.tag===3){Ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gn===null||!gn.has(r))){e=sr(n,e),e=mu(t,e,1),t=hn(t,e,1),e=pt(),t!==null&&(kr(t,1,e),yt(t,e));break}}t=t.return}}function Fd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pt(),e.pingedLanes|=e.suspendedLanes&n,tt===e&&(it&n)===n&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Ze()-Wl?Dn(e,0):Bl|=n),yt(e,t)}function Ju(e,t){t===0&&((e.mode&1)===0?t=1:(t=ui,ui<<=1,(ui&130023424)===0&&(ui=4194304)));var n=pt();e=Yt(e,t),e!==null&&(kr(e,t,n),yt(e,n))}function Dd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Ud(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}r!==null&&r.delete(t),Ju(e,n)}var Yu;Yu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)gt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return gt=!1,bd(e,t,n);gt=(e.flags&131072)!==0}else gt=!1,Ve&&(t.flags&1048576)!==0&&Os(t,Oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=er(t,at.current);lr(t,n),i=wl(null,t,r,e,i,n);var o=_l();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,mt(r)?(o=!0,Mi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dl(t),i.updater=Vi,t.stateNode=i,i._reactInternals=t,Pl(t,r,e,n),t=Nl(null,t,r,!0,o,n)):(t.tag=0,Ve&&o&&nl(t),dt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Wd(r),e=Ft(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Eu(null,t,r,e,n);break e;case 11:t=wu(null,t,r,e,n);break e;case 14:t=_u(null,t,r,Ft(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Tl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),Eu(e,t,r,i,n);case 3:e:{if(Cu(t),e===null)throw Error(l(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Us(e,t),Ai(t,r,null,n);var d=t.memoizedState;if(r=d.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=sr(Error(l(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=sr(Error(l(424)),t),t=Pu(e,t,r,n,i);break e}else for(Et=un(t.stateNode.containerInfo.firstChild),xt=t,Ve=!0,At=null,n=Fs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=en(e,t,n);break e}dt(e,t,r,n)}t=t.child}return t;case 5:return Hs(t),e===null&&ol(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,d=i.children,Ko(r,i)?d=null:o!==null&&Ko(r,o)&&(t.flags|=32),xu(e,t),dt(e,t,d,n),t.child;case 6:return e===null&&ol(t),null;case 13:return bu(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):dt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),wu(e,t,r,i,n);case 7:return dt(e,t,t.pendingProps,n),t.child;case 8:return dt(e,t,t.pendingProps.children,n),t.child;case 12:return dt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,d=i.value,Ue(zi,r._currentValue),r._currentValue=d,o!==null)if(It(o.value,d)){if(o.children===i.children&&!ht.current){t=en(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var N=o.dependencies;if(N!==null){d=o.child;for(var R=N.firstContext;R!==null;){if(R.context===r){if(o.tag===1){R=Xt(-1,n&-n),R.tag=2;var H=o.updateQueue;if(H!==null){H=H.shared;var se=H.pending;se===null?R.next=R:(R.next=se.next,se.next=R),H.pending=R}}o.lanes|=n,R=o.alternate,R!==null&&(R.lanes|=n),cl(o.return,n,t),N.lanes|=n;break}R=R.next}}else if(o.tag===10)d=o.type===t.type?null:o.child;else if(o.tag===18){if(d=o.return,d===null)throw Error(l(341));d.lanes|=n,N=d.alternate,N!==null&&(N.lanes|=n),cl(d,n,t),d=o.sibling}else d=o.child;if(d!==null)d.return=o;else for(d=o;d!==null;){if(d===t){d=null;break}if(o=d.sibling,o!==null){o.return=d.return,d=o;break}d=d.return}o=d}dt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,lr(t,n),i=Nt(i),r=r(i),t.flags|=1,dt(e,t,r,n),t.child;case 14:return r=t.type,i=Ft(r,t.pendingProps),i=Ft(r.type,i),_u(e,t,r,i,n);case 15:return ku(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ft(r,i),qi(e,t),t.tag=1,mt(r)?(e=!0,Mi(t)):e=!1,lr(t,n),du(t,r,i),Pl(t,r,i,n),Nl(null,t,r,!0,e,n);case 19:return Tu(e,t,n);case 22:return Su(e,t,n)}throw Error(l(156,t.tag))};function Xu(e,t){return La(e,t)}function Bd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,r){return new Bd(e,t,n,r)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wd(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===z)return 11;if(e===K)return 14}return 2}function _n(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ro(e,t,n,r,i,o){var d=2;if(r=e,typeof e=="function")Kl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case q:return Bn(n.children,i,o,t);case le:d=8,i|=8;break;case G:return e=jt(12,n,t,i|2),e.elementType=G,e.lanes=o,e;case Z:return e=jt(13,n,t,i),e.elementType=Z,e.lanes=o,e;case p:return e=jt(19,n,t,i),e.elementType=p,e.lanes=o,e;case Y:return io(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ce:d=10;break e;case Ee:d=9;break e;case z:d=11;break e;case K:d=14;break e;case xe:d=16,r=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=jt(d,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Bn(e,t,n,r){return e=jt(7,e,r,t),e.lanes=n,e}function io(e,t,n,r){return e=jt(22,e,r,t),e.elementType=Y,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Yl(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hd(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Co(0),this.expirationTimes=Co(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xl(e,t,n,r,i,o,d,N,R){return e=new Hd(e,t,n,N,R),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(o),e}function Vd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ec(e){if(!e)return fn;e=e._reactInternals;e:{if(Tn(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(mt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var n=e.type;if(mt(n))return Ms(e,n,t)}return t}function tc(e,t,n,r,i,o,d,N,R){return e=Xl(n,r,!0,e,i,o,d,N,R),e.context=ec(null),n=e.current,r=pt(),i=yn(n),o=Xt(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,kr(e,i,r),yt(e,r),e}function oo(e,t,n,r){var i=t.current,o=pt(),d=yn(i);return n=ec(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,d),e!==null&&(Bt(e,i,d,o),Ii(e,i,d)),d}function lo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function nc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){nc(e,t),(e=e.alternate)&&nc(e,t)}function $d(){return null}var rc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}ao.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));oo(e,t,null,null)},ao.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){oo(null,e,null,null)}),t[Zt]=null}};function ao(e){this._internalRoot=e}ao.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ua();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Ha(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function so(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function qd(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var H=lo(d);o.call(H)}}var d=tc(t,r,e,0,null,!1,!1,"",ic);return e._reactRootContainer=d,e[Zt]=d.current,Rr(e.nodeType===8?e.parentNode:e),Fn(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var N=r;r=function(){var H=lo(R);N.call(H)}}var R=Xl(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=R,e[Zt]=R.current,Rr(e.nodeType===8?e.parentNode:e),Fn(function(){oo(t,R,n,r)}),R}function uo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var d=o;if(typeof i=="function"){var N=i;i=function(){var R=lo(d);N.call(R)}}oo(t,d,e,i)}else d=qd(n,t,e,i,r);return lo(d)}Fa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_r(t.pendingLanes);n!==0&&(Po(t,n|1),yt(t,Ze()),(ze&6)===0&&(fr=Ze()+500,dn()))}break;case 13:Fn(function(){var r=Yt(e,1);if(r!==null){var i=pt();Bt(r,e,1,i)}}),ea(e,1)}},bo=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var n=pt();Bt(t,e,134217728,n)}ea(e,134217728)}},Da=function(e){if(e.tag===13){var t=yn(e),n=Yt(e,t);if(n!==null){var r=pt();Bt(n,e,t,r)}ea(e,t)}},Ua=function(){return Fe},Ba=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}},gr=function(e,t,n){switch(t){case"input":if(O(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Pi(r);if(!i)throw Error(l(90));_t(r),O(r,i)}}}break;case"textarea":ve(e,n);break;case"select":t=n.value,t!=null&&ie(e,!!n.multiple,t,!1)}},Ca=Gl,Pa=Fn;var Gd={usingClientEntryPoint:!1,Events:[Fr,Yn,Pi,xa,Ea,Gl]},Yr={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zd={bundleType:Yr.bundleType,version:Yr.version,rendererPackageName:Yr.rendererPackageName,rendererConfig:Yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Na(e),e===null?null:e.stateNode},findFiberByHostInstance:Yr.findFiberByHostInstance||$d,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{ai=co.inject(Zd),Wt=co}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gd,wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(l(200));return Vd(e,t,null,n)},wt.createRoot=function(e,t){if(!na(e))throw Error(l(299));var n=!1,r="",i=rc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Xl(e,1,!1,null,null,n,!1,r,i),e[Zt]=t.current,Rr(e.nodeType===8?e.parentNode:e),new ta(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Na(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return Fn(e)},wt.hydrate=function(e,t,n){if(!so(t))throw Error(l(200));return uo(null,e,t,!0,n)},wt.hydrateRoot=function(e,t,n){if(!na(e))throw Error(l(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",d=rc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=tc(t,null,e,1,n??null,i,!1,o,d),e[Zt]=t.current,Rr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ao(t)},wt.render=function(e,t,n){if(!so(t))throw Error(l(200));return uo(null,e,t,!1,n)},wt.unmountComponentAtNode=function(e){if(!so(e))throw Error(l(40));return e._reactRootContainer?(Fn(function(){uo(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},wt.unstable_batchedUpdates=Gl,wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!so(n))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return uo(e,t,n,!1,r)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var dc;function Oc(){if(dc)return oa.exports;dc=1;function f(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)}catch(C){console.error(C)}}return f(),oa.exports=rp(),oa.exports}var pc;function ip(){if(pc)return fo;pc=1;var f=Oc();return fo.createRoot=f.createRoot,fo.hydrateRoot=f.hydrateRoot,fo}var op=ip();Oc();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(f){for(var C=1;C<arguments.length;C++){var l=arguments[C];for(var k in l)Object.prototype.hasOwnProperty.call(l,k)&&(f[k]=l[k])}return f},ti.apply(this,arguments)}var xn;(function(f){f.Pop="POP",f.Push="PUSH",f.Replace="REPLACE"})(xn||(xn={}));const hc="popstate";function lp(f){f===void 0&&(f={});function C(g,u){let{pathname:c="/",search:s="",hash:h=""}=Wn(g.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),fa("",{pathname:c,search:s,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(g,u){let c=g.document.querySelector("base"),s="";if(c&&c.getAttribute("href")){let h=g.location.href,y=h.indexOf("#");s=y===-1?h:h.slice(0,y)}return s+"#"+(typeof u=="string"?u:mo(u))}function k(g,u){vo(g.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return sp(C,l,k,f)}function Je(f,C){if(f===!1||f===null||typeof f>"u")throw new Error(C)}function vo(f,C){if(!f){typeof console<"u"&&console.warn(C);try{throw new Error(C)}catch{}}}function ap(){return Math.random().toString(36).substr(2,8)}function mc(f,C){return{usr:f.state,key:f.key,idx:C}}function fa(f,C,l,k){return l===void 0&&(l=null),ti({pathname:typeof f=="string"?f:f.pathname,search:"",hash:""},typeof C=="string"?Wn(C):C,{state:l,key:C&&C.key||k||ap()})}function mo(f){let{pathname:C="/",search:l="",hash:k=""}=f;return l&&l!=="?"&&(C+=l.charAt(0)==="?"?l:"?"+l),k&&k!=="#"&&(C+=k.charAt(0)==="#"?k:"#"+k),C}function Wn(f){let C={};if(f){let l=f.indexOf("#");l>=0&&(C.hash=f.substr(l),f=f.substr(0,l));let k=f.indexOf("?");k>=0&&(C.search=f.substr(k),f=f.substr(0,k)),f&&(C.pathname=f)}return C}function sp(f,C,l,k){k===void 0&&(k={});let{window:g=document.defaultView,v5Compat:u=!1}=k,c=g.history,s=xn.Pop,h=null,y=P();y==null&&(y=0,c.replaceState(ti({},c.state,{idx:y}),""));function P(){return(c.state||{idx:null}).idx}function _(){s=xn.Pop;let w=P(),x=w==null?null:w-y;y=w,h&&h({action:s,location:m.location,delta:x})}function E(w,x){s=xn.Push;let T=fa(m.location,w,x);l&&l(T,w),y=P()+1;let j=mc(T,y),A=m.createHref(T);try{c.pushState(j,"",A)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;g.location.assign(A)}u&&h&&h({action:s,location:m.location,delta:1})}function v(w,x){s=xn.Replace;let T=fa(m.location,w,x);l&&l(T,w),y=P();let j=mc(T,y),A=m.createHref(T);c.replaceState(j,"",A),u&&h&&h({action:s,location:m.location,delta:0})}function M(w){let x=g.location.origin!=="null"?g.location.origin:g.location.href,T=typeof w=="string"?w:mo(w);return T=T.replace(/ $/,"%20"),Je(x,"No window.location.(origin|href) available to create URL for href: "+T),new URL(T,x)}let m={get action(){return s},get location(){return f(g,c)},listen(w){if(h)throw new Error("A history only accepts one active listener");return g.addEventListener(hc,_),h=w,()=>{g.removeEventListener(hc,_),h=null}},createHref(w){return C(g,w)},createURL:M,encodeLocation(w){let x=M(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:E,replace:v,go(w){return c.go(w)}};return m}var gc;(function(f){f.data="data",f.deferred="deferred",f.redirect="redirect",f.error="error"})(gc||(gc={}));function up(f,C,l){return l===void 0&&(l="/"),cp(f,C,l)}function cp(f,C,l,k){let g=typeof C=="string"?Wn(C):C,u=_a(g.pathname||"/",l);if(u==null)return null;let c=Lc(f);fp(c);let s=null;for(let h=0;s==null&&h<c.length;++h){let y=xp(u);s=_p(c[h],y)}return s}function Lc(f,C,l,k){C===void 0&&(C=[]),l===void 0&&(l=[]),k===void 0&&(k="");let g=(u,c,s)=>{let h={relativePath:s===void 0?u.path||"":s,caseSensitive:u.caseSensitive===!0,childrenIndex:c,route:u};h.relativePath.startsWith("/")&&(Je(h.relativePath.startsWith(k),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+k+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(k.length));let y=En([k,h.relativePath]),P=l.concat(h);u.children&&u.children.length>0&&(Je(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Lc(u.children,C,P,y)),!(u.path==null&&!u.index)&&C.push({path:y,score:yp(y,u.index),routesMeta:P})};return f.forEach((u,c)=>{var s;if(u.path===""||!((s=u.path)!=null&&s.includes("?")))g(u,c);else for(let h of jc(u.path))g(u,c,h)}),C}function jc(f){let C=f.split("/");if(C.length===0)return[];let[l,...k]=C,g=l.endsWith("?"),u=l.replace(/\?$/,"");if(k.length===0)return g?[u,""]:[u];let c=jc(k.join("/")),s=[];return s.push(...c.map(h=>h===""?u:[u,h].join("/"))),g&&s.push(...c),s.map(h=>f.startsWith("/")&&h===""?"/":h)}function fp(f){f.sort((C,l)=>C.score!==l.score?l.score-C.score:wp(C.routesMeta.map(k=>k.childrenIndex),l.routesMeta.map(k=>k.childrenIndex)))}const dp=/^:[\w-]+$/,pp=3,hp=2,mp=1,gp=10,vp=-2,vc=f=>f==="*";function yp(f,C){let l=f.split("/"),k=l.length;return l.some(vc)&&(k+=vp),C&&(k+=hp),l.filter(g=>!vc(g)).reduce((g,u)=>g+(dp.test(u)?pp:u===""?mp:gp),k)}function wp(f,C){return f.length===C.length&&f.slice(0,-1).every((k,g)=>k===C[g])?f[f.length-1]-C[C.length-1]:0}function _p(f,C,l){let{routesMeta:k}=f,g={},u="/",c=[];for(let s=0;s<k.length;++s){let h=k[s],y=s===k.length-1,P=u==="/"?C:C.slice(u.length)||"/",_=kp({path:h.relativePath,caseSensitive:h.caseSensitive,end:y},P),E=h.route;if(!_)return null;Object.assign(g,_.params),c.push({params:g,pathname:En([u,_.pathname]),pathnameBase:Mp(En([u,_.pathnameBase])),route:E}),_.pathnameBase!=="/"&&(u=En([u,_.pathnameBase]))}return c}function kp(f,C){typeof f=="string"&&(f={path:f,caseSensitive:!1,end:!0});let[l,k]=Sp(f.path,f.caseSensitive,f.end),g=C.match(l);if(!g)return null;let u=g[0],c=u.replace(/(.)\/+$/,"$1"),s=g.slice(1);return{params:k.reduce((y,P,_)=>{let{paramName:E,isOptional:v}=P;if(E==="*"){let m=s[_]||"";c=u.slice(0,u.length-m.length).replace(/(.)\/+$/,"$1")}const M=s[_];return v&&!M?y[E]=void 0:y[E]=(M||"").replace(/%2F/g,"/"),y},{}),pathname:u,pathnameBase:c,pattern:f}}function Sp(f,C,l){C===void 0&&(C=!1),l===void 0&&(l=!0),vo(f==="*"||!f.endsWith("*")||f.endsWith("/*"),'Route path "'+f+'" will be treated as if it were '+('"'+f.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+f.replace(/\*$/,"/*")+'".'));let k=[],g="^"+f.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,s,h)=>(k.push({paramName:s,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return f.endsWith("*")?(k.push({paramName:"*"}),g+=f==="*"||f==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?g+="\\/*$":f!==""&&f!=="/"&&(g+="(?:(?=\\/|$))"),[new RegExp(g,C?void 0:"i"),k]}function xp(f){try{return f.split("/").map(C=>decodeURIComponent(C).replace(/\//g,"%2F")).join("/")}catch(C){return vo(!1,'The URL path "'+f+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+C+").")),f}}function _a(f,C){if(C==="/")return f;if(!f.toLowerCase().startsWith(C.toLowerCase()))return null;let l=C.endsWith("/")?C.length-1:C.length,k=f.charAt(l);return k&&k!=="/"?null:f.slice(l)||"/"}const Ep=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cp=f=>Ep.test(f);function Pp(f,C){C===void 0&&(C="/");let{pathname:l,search:k="",hash:g=""}=typeof f=="string"?Wn(f):f,u;if(l)if(Cp(l))u=l;else{if(l.includes("//")){let c=l;l=l.replace(/\/\/+/g,"/"),vo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(c+" -> "+l))}l.startsWith("/")?u=yc(l.substring(1),"/"):u=yc(l,C)}else u=C;return{pathname:u,search:Tp(k),hash:Np(g)}}function yc(f,C){let l=C.replace(/\/+$/,"").split("/");return f.split("/").forEach(g=>{g===".."?l.length>1&&l.pop():g!=="."&&l.push(g)}),l.length>1?l.join("/"):"/"}function sa(f,C,l,k){return"Cannot include a '"+f+"' character in a manually specified "+("`to."+C+"` field ["+JSON.stringify(k)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bp(f){return f.filter((C,l)=>l===0||C.route.path&&C.route.path.length>0)}function zc(f,C){let l=bp(f);return C?l.map((k,g)=>g===l.length-1?k.pathname:k.pathnameBase):l.map(k=>k.pathnameBase)}function Rc(f,C,l,k){k===void 0&&(k=!1);let g;typeof f=="string"?g=Wn(f):(g=ti({},f),Je(!g.pathname||!g.pathname.includes("?"),sa("?","pathname","search",g)),Je(!g.pathname||!g.pathname.includes("#"),sa("#","pathname","hash",g)),Je(!g.search||!g.search.includes("#"),sa("#","search","hash",g)));let u=f===""||g.pathname==="",c=u?"/":g.pathname,s;if(c==null)s=l;else{let _=C.length-1;if(!k&&c.startsWith("..")){let E=c.split("/");for(;E[0]==="..";)E.shift(),_-=1;g.pathname=E.join("/")}s=_>=0?C[_]:"/"}let h=Pp(g,s),y=c&&c!=="/"&&c.endsWith("/"),P=(u||c===".")&&l.endsWith("/");return!h.pathname.endsWith("/")&&(y||P)&&(h.pathname+="/"),h}const En=f=>f.join("/").replace(/\/\/+/g,"/"),Mp=f=>f.replace(/\/+$/,"").replace(/^\/*/,"/"),Tp=f=>!f||f==="?"?"":f.startsWith("?")?f:"?"+f,Np=f=>!f||f==="#"?"":f.startsWith("#")?f:"#"+f;function Op(f){return f!=null&&typeof f.status=="number"&&typeof f.statusText=="string"&&typeof f.internal=="boolean"&&"data"in f}const Ic=["post","put","patch","delete"];new Set(Ic);const Lp=["get",...Ic];new Set(Lp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(f){for(var C=1;C<arguments.length;C++){var l=arguments[C];for(var k in l)Object.prototype.hasOwnProperty.call(l,k)&&(f[k]=l[k])}return f},ni.apply(this,arguments)}const ka=me.createContext(null),jp=me.createContext(null),Hn=me.createContext(null),yo=me.createContext(null),Cn=me.createContext({outlet:null,matches:[],isDataRoute:!1}),Ac=me.createContext(null);function zp(f,C){let{relative:l}=C===void 0?{}:C;ri()||Je(!1);let{basename:k,navigator:g}=me.useContext(Hn),{hash:u,pathname:c,search:s}=Dc(f,{relative:l}),h=c;return k!=="/"&&(h=c==="/"?k:En([k,c])),g.createHref({pathname:h,search:s,hash:u})}function ri(){return me.useContext(yo)!=null}function wo(){return ri()||Je(!1),me.useContext(yo).location}function Fc(f){me.useContext(Hn).static||me.useLayoutEffect(f)}function Rp(){let{isDataRoute:f}=me.useContext(Cn);return f?Qp():Ip()}function Ip(){ri()||Je(!1);let f=me.useContext(ka),{basename:C,future:l,navigator:k}=me.useContext(Hn),{matches:g}=me.useContext(Cn),{pathname:u}=wo(),c=JSON.stringify(zc(g,l.v7_relativeSplatPath)),s=me.useRef(!1);return Fc(()=>{s.current=!0}),me.useCallback(function(y,P){if(P===void 0&&(P={}),!s.current)return;if(typeof y=="number"){k.go(y);return}let _=Rc(y,JSON.parse(c),u,P.relative==="path");f==null&&C!=="/"&&(_.pathname=_.pathname==="/"?C:En([C,_.pathname])),(P.replace?k.replace:k.push)(_,P.state,P)},[C,k,c,u,f])}function Ap(){let{matches:f}=me.useContext(Cn),C=f[f.length-1];return C?C.params:{}}function Dc(f,C){let{relative:l}=C===void 0?{}:C,{future:k}=me.useContext(Hn),{matches:g}=me.useContext(Cn),{pathname:u}=wo(),c=JSON.stringify(zc(g,k.v7_relativeSplatPath));return me.useMemo(()=>Rc(f,JSON.parse(c),u,l==="path"),[f,c,u,l])}function Fp(f,C){return Dp(f,C)}function Dp(f,C,l,k){ri()||Je(!1);let{navigator:g}=me.useContext(Hn),{matches:u}=me.useContext(Cn),c=u[u.length-1],s=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let y=wo(),P;if(C){var _;let w=typeof C=="string"?Wn(C):C;h==="/"||(_=w.pathname)!=null&&_.startsWith(h)||Je(!1),P=w}else P=y;let E=P.pathname||"/",v=E;if(h!=="/"){let w=h.replace(/^\//,"").split("/");v="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let M=up(f,{pathname:v}),m=Vp(M&&M.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:En([h,g.encodeLocation?g.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?h:En([h,g.encodeLocation?g.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),u,l,k);return C&&m?me.createElement(yo.Provider,{value:{location:ni({pathname:"/",search:"",hash:"",state:null,key:"default"},P),navigationType:xn.Pop}},m):m}function Up(){let f=Zp(),C=Op(f)?f.status+" "+f.statusText:f instanceof Error?f.message:JSON.stringify(f),l=f instanceof Error?f.stack:null,g={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},C),l?me.createElement("pre",{style:g},l):null,null)}const Bp=me.createElement(Up,null);class Wp extends me.Component{constructor(C){super(C),this.state={location:C.location,revalidation:C.revalidation,error:C.error}}static getDerivedStateFromError(C){return{error:C}}static getDerivedStateFromProps(C,l){return l.location!==C.location||l.revalidation!=="idle"&&C.revalidation==="idle"?{error:C.error,location:C.location,revalidation:C.revalidation}:{error:C.error!==void 0?C.error:l.error,location:l.location,revalidation:C.revalidation||l.revalidation}}componentDidCatch(C,l){console.error("React Router caught the following error during render",C,l)}render(){return this.state.error!==void 0?me.createElement(Cn.Provider,{value:this.props.routeContext},me.createElement(Ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hp(f){let{routeContext:C,match:l,children:k}=f,g=me.useContext(ka);return g&&g.static&&g.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(g.staticContext._deepestRenderedBoundaryId=l.route.id),me.createElement(Cn.Provider,{value:C},k)}function Vp(f,C,l,k){var g;if(C===void 0&&(C=[]),l===void 0&&(l=null),k===void 0&&(k=null),f==null){var u;if(!l)return null;if(l.errors)f=l.matches;else if((u=k)!=null&&u.v7_partialHydration&&C.length===0&&!l.initialized&&l.matches.length>0)f=l.matches;else return null}let c=f,s=(g=l)==null?void 0:g.errors;if(s!=null){let P=c.findIndex(_=>_.route.id&&(s==null?void 0:s[_.route.id])!==void 0);P>=0||Je(!1),c=c.slice(0,Math.min(c.length,P+1))}let h=!1,y=-1;if(l&&k&&k.v7_partialHydration)for(let P=0;P<c.length;P++){let _=c[P];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(y=P),_.route.id){let{loaderData:E,errors:v}=l,M=_.route.loader&&E[_.route.id]===void 0&&(!v||v[_.route.id]===void 0);if(_.route.lazy||M){h=!0,y>=0?c=c.slice(0,y+1):c=[c[0]];break}}}return c.reduceRight((P,_,E)=>{let v,M=!1,m=null,w=null;l&&(v=s&&_.route.id?s[_.route.id]:void 0,m=_.route.errorElement||Bp,h&&(y<0&&E===0?(Kp("route-fallback"),M=!0,w=null):y===E&&(M=!0,w=_.route.hydrateFallbackElement||null)));let x=C.concat(c.slice(0,E+1)),T=()=>{let j;return v?j=m:M?j=w:_.route.Component?j=me.createElement(_.route.Component,null):_.route.element?j=_.route.element:j=P,me.createElement(Hp,{match:_,routeContext:{outlet:P,matches:x,isDataRoute:l!=null},children:j})};return l&&(_.route.ErrorBoundary||_.route.errorElement||E===0)?me.createElement(Wp,{location:l.location,revalidation:l.revalidation,component:m,error:v,children:T(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):T()},null)}var Uc=(function(f){return f.UseBlocker="useBlocker",f.UseRevalidator="useRevalidator",f.UseNavigateStable="useNavigate",f})(Uc||{}),Bc=(function(f){return f.UseBlocker="useBlocker",f.UseLoaderData="useLoaderData",f.UseActionData="useActionData",f.UseRouteError="useRouteError",f.UseNavigation="useNavigation",f.UseRouteLoaderData="useRouteLoaderData",f.UseMatches="useMatches",f.UseRevalidator="useRevalidator",f.UseNavigateStable="useNavigate",f.UseRouteId="useRouteId",f})(Bc||{});function $p(f){let C=me.useContext(ka);return C||Je(!1),C}function qp(f){let C=me.useContext(jp);return C||Je(!1),C}function Gp(f){let C=me.useContext(Cn);return C||Je(!1),C}function Wc(f){let C=Gp(),l=C.matches[C.matches.length-1];return l.route.id||Je(!1),l.route.id}function Zp(){var f;let C=me.useContext(Ac),l=qp(),k=Wc();return C!==void 0?C:(f=l.errors)==null?void 0:f[k]}function Qp(){let{router:f}=$p(Uc.UseNavigateStable),C=Wc(Bc.UseNavigateStable),l=me.useRef(!1);return Fc(()=>{l.current=!0}),me.useCallback(function(g,u){u===void 0&&(u={}),l.current&&(typeof g=="number"?f.navigate(g):f.navigate(g,ni({fromRouteId:C},u)))},[f,C])}const wc={};function Kp(f,C,l){wc[f]||(wc[f]=!0)}function Jp(f,C){f==null||f.v7_startTransition,f==null||f.v7_relativeSplatPath}function da(f){Je(!1)}function Yp(f){let{basename:C="/",children:l=null,location:k,navigationType:g=xn.Pop,navigator:u,static:c=!1,future:s}=f;ri()&&Je(!1);let h=C.replace(/^\/*/,"/"),y=me.useMemo(()=>({basename:h,navigator:u,static:c,future:ni({v7_relativeSplatPath:!1},s)}),[h,s,u,c]);typeof k=="string"&&(k=Wn(k));let{pathname:P="/",search:_="",hash:E="",state:v=null,key:M="default"}=k,m=me.useMemo(()=>{let w=_a(P,h);return w==null?null:{location:{pathname:w,search:_,hash:E,state:v,key:M},navigationType:g}},[h,P,_,E,v,M,g]);return m==null?null:me.createElement(Hn.Provider,{value:y},me.createElement(yo.Provider,{children:l,value:m}))}function Xp(f){let{children:C,location:l}=f;return Fp(pa(C),l)}new Promise(()=>{});function pa(f,C){C===void 0&&(C=[]);let l=[];return me.Children.forEach(f,(k,g)=>{if(!me.isValidElement(k))return;let u=[...C,g];if(k.type===me.Fragment){l.push.apply(l,pa(k.props.children,u));return}k.type!==da&&Je(!1),!k.props.index||!k.props.children||Je(!1);let c={id:k.props.id||u.join("-"),caseSensitive:k.props.caseSensitive,element:k.props.element,Component:k.props.Component,index:k.props.index,path:k.props.path,loader:k.props.loader,action:k.props.action,errorElement:k.props.errorElement,ErrorBoundary:k.props.ErrorBoundary,hasErrorBoundary:k.props.ErrorBoundary!=null||k.props.errorElement!=null,shouldRevalidate:k.props.shouldRevalidate,handle:k.props.handle,lazy:k.props.lazy};k.props.children&&(c.children=pa(k.props.children,u)),l.push(c)}),l}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(f){for(var C=1;C<arguments.length;C++){var l=arguments[C];for(var k in l)Object.prototype.hasOwnProperty.call(l,k)&&(f[k]=l[k])}return f},ha.apply(this,arguments)}function eh(f,C){if(f==null)return{};var l={},k=Object.keys(f),g,u;for(u=0;u<k.length;u++)g=k[u],!(C.indexOf(g)>=0)&&(l[g]=f[g]);return l}function th(f){return!!(f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)}function nh(f,C){return f.button===0&&(!C||C==="_self")&&!th(f)}const rh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ih="6";try{window.__reactRouterVersion=ih}catch{}const oh="startTransition",_c=ep[oh];function lh(f){let{basename:C,children:l,future:k,window:g}=f,u=me.useRef();u.current==null&&(u.current=lp({window:g,v5Compat:!0}));let c=u.current,[s,h]=me.useState({action:c.action,location:c.location}),{v7_startTransition:y}=k||{},P=me.useCallback(_=>{y&&_c?_c(()=>h(_)):h(_)},[h,y]);return me.useLayoutEffect(()=>c.listen(P),[c,P]),me.useEffect(()=>Jp(k),[k]),me.createElement(Yp,{basename:C,children:l,location:s.location,navigationType:s.action,navigator:c,future:k})}const ah=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,go=me.forwardRef(function(C,l){let{onClick:k,relative:g,reloadDocument:u,replace:c,state:s,target:h,to:y,preventScrollReset:P,viewTransition:_}=C,E=eh(C,rh),{basename:v}=me.useContext(Hn),M,m=!1;if(typeof y=="string"&&sh.test(y)&&(M=y,ah))try{let j=new URL(window.location.href),A=y.startsWith("//")?new URL(j.protocol+y):new URL(y),D=_a(A.pathname,v);A.origin===j.origin&&D!=null?y=D+A.search+A.hash:m=!0}catch{}let w=zp(y,{relative:g}),x=uh(y,{replace:c,state:s,target:h,preventScrollReset:P,relative:g,viewTransition:_});function T(j){k&&k(j),j.defaultPrevented||x(j)}return me.createElement("a",ha({},E,{href:M||w,onClick:m||u?k:T,ref:l,target:h}))});var kc;(function(f){f.UseScrollRestoration="useScrollRestoration",f.UseSubmit="useSubmit",f.UseSubmitFetcher="useSubmitFetcher",f.UseFetcher="useFetcher",f.useViewTransitionState="useViewTransitionState"})(kc||(kc={}));var Sc;(function(f){f.UseFetcher="useFetcher",f.UseFetchers="useFetchers",f.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function uh(f,C){let{target:l,replace:k,state:g,preventScrollReset:u,relative:c,viewTransition:s}=C===void 0?{}:C,h=Rp(),y=wo(),P=Dc(f,{relative:c});return me.useCallback(_=>{if(nh(_,l)){_.preventDefault();let E=k!==void 0?k:mo(y)===mo(P);h(f,{replace:E,state:g,preventScrollReset:u,relative:c,viewTransition:s})}},[y,h,P,k,g,l,f,u,c,s])}/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=f=>f.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fh=f=>f.replace(/^([A-Z])|[\s-_]+(\w)/g,(C,l,k)=>k?k.toUpperCase():l.toLowerCase()),xc=f=>{const C=fh(f);return C.charAt(0).toUpperCase()+C.slice(1)},Hc=(...f)=>f.filter((C,l,k)=>!!C&&C.trim()!==""&&k.indexOf(C)===l).join(" ").trim(),dh=f=>{for(const C in f)if(C.startsWith("aria-")||C==="role"||C==="title")return!0};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ph={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=me.forwardRef(({color:f="currentColor",size:C=24,strokeWidth:l=2,absoluteStrokeWidth:k,className:g="",children:u,iconNode:c,...s},h)=>me.createElement("svg",{ref:h,...ph,width:C,height:C,stroke:f,strokeWidth:k?Number(l)*24/Number(C):l,className:Hc("lucide",g),...!u&&!dh(s)&&{"aria-hidden":"true"},...s},[...c.map(([y,P])=>me.createElement(y,P)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=(f,C)=>{const l=me.forwardRef(({className:k,...g},u)=>me.createElement(hh,{ref:u,iconNode:C,className:Hc(`lucide-${ch(xc(f))}`,`lucide-${f}`,k),...g}));return l.displayName=xc(f),l};/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],gh=Pt("arrow-left",mh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],yh=Pt("circle-alert",vh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Vc=Pt("circle-check-big",wh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],kh=Pt("download",_h);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],xh=Pt("external-link",Sh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Ch=Pt("file-text",Eh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Ec=Pt("github",Ph);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],$c=Pt("loader-circle",bh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Th=Pt("menu",Mh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Sa=Pt("package",Nh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],qc=Pt("search",Oh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Gc=Pt("user",Lh);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],zh=Pt("x",jh);function Rh(){const[f,C]=me.useState(!1);return re.jsxs("header",{className:"sticky top-0 z-50 border-b border-gray-200 bg-white",children:[re.jsxs("div",{className:"mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6",children:[re.jsxs(go,{to:"/",className:"flex items-center gap-2",children:[re.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-md bg-gray-100",children:re.jsx(Sa,{className:"h-4.5 w-4.5 text-gray-700"})}),re.jsx("span",{className:"text-base font-semibold text-gray-900",children:"FkWeChat"})]}),re.jsx("button",{onClick:()=>C(!f),className:"flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100",children:f?re.jsx(zh,{className:"h-5 w-5"}):re.jsx(Th,{className:"h-5 w-5"})})]}),f&&re.jsx("div",{className:"border-t border-gray-200 bg-white",children:re.jsx("div",{className:"mx-auto max-w-5xl px-4 py-3 sm:px-6",children:re.jsxs("div",{className:"space-y-1",children:[re.jsxs("a",{href:"http://fkwechat.apifox.cn/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>C(!1),children:[re.jsx(xh,{className:"h-4 w-4"}),"开发文档"]}),re.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>C(!1),children:[re.jsx(Ec,{className:"h-4 w-4"}),"跳转仓库"]}),re.jsxs("a",{href:"https://github.com/YunJavaPro/FkWeChat_Plugin/blob/main/README.md",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:()=>C(!1),children:[re.jsx(Ec,{className:"h-4 w-4"}),"上传步骤"]})]})})})]})}const Cc=f=>{let C;const l=new Set,k=(y,P)=>{const _=typeof y=="function"?y(C):y;if(!Object.is(_,C)){const E=C;C=P??(typeof _!="object"||_===null)?_:Object.assign({},C,_),l.forEach(v=>v(C,E))}},g=()=>C,s={setState:k,getState:g,getInitialState:()=>h,subscribe:y=>(l.add(y),()=>l.delete(y))},h=C=f(k,g,s);return s},Ih=(f=>f?Cc(f):Cc),Ah=f=>f;function Fh(f,C=Ah){const l=ei.useSyncExternalStore(f.subscribe,ei.useCallback(()=>C(f.getState()),[f,C]),ei.useCallback(()=>C(f.getInitialState()),[f,C]));return ei.useDebugValue(l),l}const Pc=f=>{const C=Ih(f),l=k=>Fh(C,k);return Object.assign(l,C),l},Dh=(f=>f?Pc(f):Pc),Uh="modulepreload",Bh=function(f){return"/FkWeChat_Plugin/"+f},bc={},ua=function(C,l,k){let g=Promise.resolve();if(l&&l.length>0){let c=function(y){return Promise.all(y.map(P=>Promise.resolve(P).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),h=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));g=c(l.map(y=>{if(y=Bh(y),y in bc)return;bc[y]=!0;const P=y.endsWith(".css"),_=P?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${_}`))return;const E=document.createElement("link");if(E.rel=P?"stylesheet":Uh,P||(E.as="script"),E.crossOrigin="",E.href=y,h&&E.setAttribute("nonce",h),document.head.appendChild(E),P)return new Promise((v,M)=>{E.addEventListener("load",v),E.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(c){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=c,window.dispatchEvent(s),!s.defaultPrevented)throw c}return g.then(c=>{for(const s of c||[])s.status==="rejected"&&u(s.reason);return C().catch(u)})},ma=`name=MCP服务器插件
author=cuan
version=1.0.0
desc=基于FkWeChat宿主脚本环境实现的MCP服务器插件`,ga=`#Wed May 06 17:56:02 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=QQ\\u70B9\\u6B4C
version=1.0.7
desc=
`,va=`#Thu Apr 23 18:03:01 GMT+08:00 2026
author=\\u96F2\\u4E0A\\u5347
name=\\u5FEB\\u6377\\u64CD\\u4F5C
version=1.0.3
desc=
`,Wh=`# FkwMcpPlugin 使用说明

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
4. 查看 \`mcp-server.log\` 中的错误堆栈。`,Hh=`import java.io.BufferedReader;
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
`,Zc=`loadJava("fkw_mcp");

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
`,Vh=Object.freeze(Object.defineProperty({__proto__:null,default:Zc},Symbol.toStringTag,{value:"Module"})),$h=`{
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
`,qh=`## v1.0.7
- 修复了一些已知问题

## 指令列表
- \`点歌 歌名\`（仅自己可用）
`,Gh=`import okhttp3.*
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
}`,Zh=`import com.alibaba.fastjson2.*

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
}`,Qc=`loadJava("api/http")
loadJava("api/music")

onMsg(msg) {
    content = msg.content
    if (msg.sendTalker.equals(myWxId)) {
        if (content.startsWith("点歌")) {
            music(msg.talker, content.substring(2))
        }
   }
}`,Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Qc},Symbol.toStringTag,{value:"Module"})),Kh=`�PNG\r

\0\0\0\rIHDR\0\0\0H\0\0\0H\b\0\0\0U��G\0\0\0sRGB\0���\0\0\x073IDATx^�[e�&U=���Vl�Ե;@��X�[1�le�\v�\0��յ�Ul�����~�|wgޙyg^Y�y~~���}������D�>��\0*����fA�����I��^\0�#9���=���|K��'\x1B\v��(�ͣ⻓���%��I�\x1B�N��z��T�7Y\0$�\0�g�	�b$��r�2IW8"�[��ke{\x1B$i\0KO�ǲ���%�a�0Mf�g\0������=��\x07pi"�/\0s���L~m�$M�d\0\x07\0X4s��\0np1I+PJ�f��E��H�Q*��AҎ\0��a\x1BErd��\0��\0�{��C�\v�u���) ɲvH��\0X7\0�g��^���tp���l@��*�+-�%\0#*\b~��$U�+���[�uǞ�H~Z�BI���'L\0X���U���nuAU�vC�ĝ%8�ϔ��@��gL��\0^�p��?���u���s\0�e��\0ঐ��\x07�N�I�e��3�\v��H����UWH�*ǅV9#�g\0����ݶv}U	 I��.9�������\0��̙f���.\x07pl��>\0��_��ws���92��Sf�Wh�p��O��d'���\0��a���\f�8 OܓV�&���\x1B\0��s(����*@N�i�se\bv�d.=��Ef!��k\0�\r�M\0s%<7�<��\vD�E��"�^�*�p���{��_s\f�@ZW�O�E��<\`�M�#yh?���'��r��Ir�~df���8\0��8�h��K��\\@��\x1B���I~R�\fI\x1Bx"��)�^kLu\x002��,�e��a}�A�V�5I��;�B��֓$-���N��qV%i\voL������x�'��vv%-�-��!�6�)yǬg�<��\fI�D�Jx���\`�Z���\0� M\r�Ę1�^�1钡^L�3�*�cI:+��N\vM�y
>�\`�=�YBl�m�i�k���\x1B�MF@m���Ge��^��K��~9�.N�I�$6�i[��\0lGr�%�-H>�&8��\b�.��g���W���v�P�Wy�/�ђF�T0��$G�\r�@\0��2\0w��'
?Jr�^�\b�ű�h��B5/A�M�A��:@��&�;�|gH�+�+�\\($I���U��P�?(p�c�f%
��ޕ�G���.�M)o�E�\\k1H�gʞ-W!�T�5��\r�ͧ��z$-g��
@!���x Gӳm-\0����A�����t�PN���/=�\b��E&
o\f���C��.\0��t\r��%9X_�#�z����$�K�U�X\x1B\0��1$�ͭ�����ղwVH���}�&� �Φ����\0�Y+}:�w���}t��lTp�\x07Cq����H:ǹ��aC#GpS��\v��v"�\`�n9
���w��=��l"d����\0��}|���$�+��$ύ=]�ʳb"�M�ܶכZ��t7�Y�ىg%�UíG�bo�O�\r@��F\0Y�$��c�{H�\\vp��A��[?��[�*W�#�-�6\0�Xb��Bo�����*_m]n��w��#c�#��o����=��{�K�,�5��ǀ(g؈�_�����"C�IZ/>�e�w\\qe�>=�^V�Hr�~\x1B�d�ޭ��W�����ӱj��<�hQ�nᓚ;����\v�+����B\0'U��\x1B����ĭ�\\9eii�i9Q�flm��v痨��+o���\r�	Pt3�X~��@,��C������si�t���q��&�F�[\rY긲���@ܬ�e�u�&�d�v\0� �����:\v�,���f\bt�\f�.u�YP3:\vj�_�:\v�,��5ï�A�5� %��᛿	���oL��>��V^5�VJҳ��\`�;�{m�U&o��JKZ,<A_��e�l�>���Rm��\0*A�����u�YP3\v�\x1B-��g3��\0\0\0\0IEND�B\`�`,Kc=`// Created by 雲上升
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
}`,Jh=Object.freeze(Object.defineProperty({__proto__:null,default:Kc},Symbol.toStringTag,{value:"Module"}));function Jc(f){return f.replace(/\\u([0-9a-fA-F]{4})/g,(C,l)=>String.fromCharCode(parseInt(l,16)))}function Yc(f,C){const l={},k=f.split(`
`);for(const g of k){const u=g.trim();if(u&&!u.startsWith("#")){const c=u.indexOf("=");if(c!==-1){const s=u.substring(0,c).trim(),h=Jc(u.substring(c+1).trim());l[s]=h}}}return{id:C,name:l.name||C,author:l.author||"未知作者",version:l.version||"1.0.0",description:l.desc||"",tags:l.tags?l.tags.split(",").map(g=>g.trim()).filter(Boolean):[],folder:C}}async function Yh(){const f=Object.assign({"/main/plugins/MCP服务器插件/info.prop":ma,"/main/plugins/QQ点歌/info.prop":ga,"/main/plugins/快捷操作/info.prop":va}),C=[];for(const l in f){const k=l.split("/")[3];try{const g=f[l];C.push(Yc(g,k))}catch(g){console.error(`Failed to load plugin ${k}`,g)}}return C}async function Xh(f){const C=Object.assign({"/main/plugins/MCP服务器插件/info.prop":ma,"/main/plugins/QQ点歌/info.prop":ga,"/main/plugins/快捷操作/info.prop":va}),l=Object.assign({"/main/plugins/MCP服务器插件/main.java":()=>ua(()=>Promise.resolve().then(()=>Vh),void 0).then(E=>E.default),"/main/plugins/QQ点歌/main.java":()=>ua(()=>Promise.resolve().then(()=>Qh),void 0).then(E=>E.default),"/main/plugins/快捷操作/main.java":()=>ua(()=>Promise.resolve().then(()=>Jh),void 0).then(E=>E.default)}),k=Object.assign({"/main/plugins/MCP服务器插件/README.md":Wh,"/main/plugins/MCP服务器插件/fkw_mcp.java":Hh,"/main/plugins/MCP服务器插件/info.prop":ma,"/main/plugins/MCP服务器插件/main.java":Zc,"/main/plugins/MCP服务器插件/mcp-config.json":$h,"/main/plugins/QQ点歌/README.md":qh,"/main/plugins/QQ点歌/api/http.java":Gh,"/main/plugins/QQ点歌/api/music.java":Zh,"/main/plugins/QQ点歌/info.prop":ga,"/main/plugins/QQ点歌/main.java":Qc,"/main/plugins/快捷操作/icon/kick.png":Kh,"/main/plugins/快捷操作/info.prop":va,"/main/plugins/快捷操作/main.java":Kc}),g=`/main/plugins/${f}/info.prop`,u=`/main/plugins/${f}/main.java`;if(!C[g]||!l[u])throw new Error("获取插件详情失败：文件不存在");const c=C[g],s=Jc(c),h=await l[u](),y=Yc(c,f),P={},_=`/main/plugins/${f}/`;for(const E in k)if(E.startsWith(_)){const v=E.substring(_.length);P[v]=v==="info.prop"?s:k[E]}return{...y,mainJava:h,infoProp:s,pluginFiles:P}}const Xc=Dh((f,C)=>({plugins:[],currentPlugin:null,isLoading:!1,error:null,fetchPlugins:async()=>{f({isLoading:!0,error:null});try{const l=await Yh();f({plugins:l,isLoading:!1})}catch(l){f({isLoading:!1,error:l instanceof Error?l.message:"获取插件列表失败"})}},fetchPluginDetail:async l=>{f({isLoading:!0,error:null});try{const k=await Xh(l);f({currentPlugin:k,isLoading:!1})}catch(k){f({currentPlugin:null,isLoading:!1,error:k instanceof Error?k.message:"获取插件详情失败"})}},clearError:()=>f({error:null}),clearCurrentPlugin:()=>f({currentPlugin:null})}));function ef({size:f="md",text:C}){const l={sm:"h-4 w-4",md:"h-6 w-6",lg:"h-8 w-8"};return re.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[re.jsx($c,{className:`${l[f]} animate-spin text-blue-600`}),C&&re.jsx("p",{className:"text-sm text-gray-500",children:C})]})}const em={search:qc,error:yh,package:Sa,empty:Vc};function ya({icon:f="search",title:C,description:l,action:k}){const g=em[f];return re.jsxs("div",{className:"flex flex-col items-center justify-center py-16 text-center",children:[re.jsx("div",{className:"mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100",children:re.jsx(g,{className:"h-8 w-8 text-gray-400"})}),re.jsx("h3",{className:"mb-2 text-lg font-semibold text-gray-900",children:C}),l&&re.jsx("p",{className:"mb-6 max-w-sm text-sm text-gray-500",children:l}),k]})}function tm({plugin:f}){return re.jsxs(go,{to:`/plugin/${f.folder}`,className:"block rounded-md border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition-all",children:[re.jsxs("div",{className:"flex items-start justify-between mb-3",children:[re.jsx("div",{className:"flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:f.name.charAt(0)}),re.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",f.version]})]}),re.jsx("h3",{className:"font-semibold text-gray-900 mb-1 truncate",children:f.name}),re.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-3",children:f.description||"暂无描述"}),re.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-500",children:[re.jsx(Gc,{className:"h-3.5 w-3.5"}),re.jsx("span",{children:f.author})]})]})}function nm(){const{plugins:f,isLoading:C,error:l,fetchPlugins:k}=Xc(),[g,u]=me.useState("");me.useEffect(()=>{k()},[k]);const c=f.filter(s=>g===""||s.name.toLowerCase().includes(g.toLowerCase())||s.description.toLowerCase().includes(g.toLowerCase())||s.author.toLowerCase().includes(g.toLowerCase()));return re.jsxs("div",{className:"flex flex-col h-screen bg-white",children:[re.jsx("div",{className:"flex-shrink-0 border-b border-gray-200",children:re.jsxs("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:[re.jsx("h1",{className:"text-xl font-bold text-gray-900 mb-1",children:"插件仓库"}),re.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"查找并下载适合的插件，提升使用体验"}),re.jsx("div",{className:"max-w-md",children:re.jsxs("div",{className:"relative",children:[re.jsx(qc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),re.jsx("input",{type:"text",value:g,onChange:s=>u(s.target.value),placeholder:"搜索插件...",className:"w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"})]})})]})}),re.jsx("div",{className:"flex-1 overflow-y-auto min-h-0",children:re.jsx("div",{className:"mx-auto max-w-5xl px-4 py-5 sm:px-6",children:C?re.jsx("div",{className:"flex h-48 items-center justify-center",children:re.jsx(ef,{size:"md",text:"加载插件中..."})}):l?re.jsx(ya,{icon:"error",title:"加载失败",description:l,action:re.jsx("button",{onClick:()=>k(),className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"重试"})}):c.length===0?re.jsx(ya,{icon:"package",title:f.length===0?"暂无插件":"未找到匹配的插件",description:f.length===0?"欢迎提交你的第一个插件！":"尝试调整搜索条件"}):re.jsxs(re.Fragment,{children:[re.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[re.jsx(Sa,{className:"h-4 w-4 text-gray-500"}),re.jsxs("span",{className:"text-sm text-gray-500",children:["共 ",re.jsx("span",{className:"font-semibold text-gray-900",children:c.length})," 个插件"]})]}),re.jsx("div",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3 pb-5",children:c.map(s=>re.jsx(tm,{plugin:s},s.id))})]})})})]})}function po(f){throw new Error('Could not dynamically require "'+f+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ca={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Mc;function rm(){return Mc||(Mc=1,(function(f,C){(function(l){f.exports=l()})(function(){return(function l(k,g,u){function c(y,P){if(!g[y]){if(!k[y]){var _=typeof po=="function"&&po;if(!P&&_)return _(y,!0);if(s)return s(y,!0);var E=new Error("Cannot find module '"+y+"'");throw E.code="MODULE_NOT_FOUND",E}var v=g[y]={exports:{}};k[y][0].call(v.exports,function(M){var m=k[y][1][M];return c(m||M)},v,v.exports,l,k,g,u)}return g[y].exports}for(var s=typeof po=="function"&&po,h=0;h<u.length;h++)c(u[h]);return c})({1:[function(l,k,g){var u=l("./utils"),c=l("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";g.encode=function(h){for(var y,P,_,E,v,M,m,w=[],x=0,T=h.length,j=T,A=u.getTypeOf(h)!=="string";x<h.length;)j=T-x,_=A?(y=h[x++],P=x<T?h[x++]:0,x<T?h[x++]:0):(y=h.charCodeAt(x++),P=x<T?h.charCodeAt(x++):0,x<T?h.charCodeAt(x++):0),E=y>>2,v=(3&y)<<4|P>>4,M=1<j?(15&P)<<2|_>>6:64,m=2<j?63&_:64,w.push(s.charAt(E)+s.charAt(v)+s.charAt(M)+s.charAt(m));return w.join("")},g.decode=function(h){var y,P,_,E,v,M,m=0,w=0,x="data:";if(h.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var T,j=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===s.charAt(64)&&j--,h.charAt(h.length-2)===s.charAt(64)&&j--,j%1!=0)throw new Error("Invalid base64 input, bad content length.");for(T=c.uint8array?new Uint8Array(0|j):new Array(0|j);m<h.length;)y=s.indexOf(h.charAt(m++))<<2|(E=s.indexOf(h.charAt(m++)))>>4,P=(15&E)<<4|(v=s.indexOf(h.charAt(m++)))>>2,_=(3&v)<<6|(M=s.indexOf(h.charAt(m++))),T[w++]=y,v!==64&&(T[w++]=P),M!==64&&(T[w++]=_);return T}},{"./support":30,"./utils":32}],2:[function(l,k,g){var u=l("./external"),c=l("./stream/DataWorker"),s=l("./stream/Crc32Probe"),h=l("./stream/DataLengthProbe");function y(P,_,E,v,M){this.compressedSize=P,this.uncompressedSize=_,this.crc32=E,this.compression=v,this.compressedContent=M}y.prototype={getContentWorker:function(){var P=new c(u.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),_=this;return P.on("end",function(){if(this.streamInfo.data_length!==_.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),P},getCompressedWorker:function(){return new c(u.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},y.createWorkerFrom=function(P,_,E){return P.pipe(new s).pipe(new h("uncompressedSize")).pipe(_.compressWorker(E)).pipe(new h("compressedSize")).withStreamInfo("compression",_)},k.exports=y},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(l,k,g){var u=l("./stream/GenericWorker");g.STORE={magic:"\0\0",compressWorker:function(){return new u("STORE compression")},uncompressWorker:function(){return new u("STORE decompression")}},g.DEFLATE=l("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(l,k,g){var u=l("./utils"),c=(function(){for(var s,h=[],y=0;y<256;y++){s=y;for(var P=0;P<8;P++)s=1&s?3988292384^s>>>1:s>>>1;h[y]=s}return h})();k.exports=function(s,h){return s!==void 0&&s.length?u.getTypeOf(s)!=="string"?(function(y,P,_,E){var v=c,M=E+_;y^=-1;for(var m=E;m<M;m++)y=y>>>8^v[255&(y^P[m])];return-1^y})(0|h,s,s.length,0):(function(y,P,_,E){var v=c,M=E+_;y^=-1;for(var m=E;m<M;m++)y=y>>>8^v[255&(y^P.charCodeAt(m))];return-1^y})(0|h,s,s.length,0):0}},{"./utils":32}],5:[function(l,k,g){g.base64=!1,g.binary=!1,g.dir=!1,g.createFolders=!0,g.date=null,g.compression=null,g.compressionOptions=null,g.comment=null,g.unixPermissions=null,g.dosPermissions=null},{}],6:[function(l,k,g){var u=null;u=typeof Promise<"u"?Promise:l("lie"),k.exports={Promise:u}},{lie:37}],7:[function(l,k,g){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",c=l("pako"),s=l("./utils"),h=l("./stream/GenericWorker"),y=u?"uint8array":"array";function P(_,E){h.call(this,"FlateWorker/"+_),this._pako=null,this._pakoAction=_,this._pakoOptions=E,this.meta={}}g.magic="\b\0",s.inherits(P,h),P.prototype.processChunk=function(_){this.meta=_.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(y,_.data),!1)},P.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},P.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},P.prototype._createPako=function(){this._pako=new c[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var _=this;this._pako.onData=function(E){_.push({data:E,meta:_.meta})}},g.compressWorker=function(_){return new P("Deflate",_)},g.uncompressWorker=function(){return new P("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(l,k,g){function u(v,M){var m,w="";for(m=0;m<M;m++)w+=String.fromCharCode(255&v),v>>>=8;return w}function c(v,M,m,w,x,T){var j,A,D=v.file,Q=v.compression,q=T!==y.utf8encode,le=s.transformTo("string",T(D.name)),G=s.transformTo("string",y.utf8encode(D.name)),ce=D.comment,Ee=s.transformTo("string",T(ce)),z=s.transformTo("string",y.utf8encode(ce)),Z=G.length!==D.name.length,p=z.length!==ce.length,K="",xe="",Y="",ee=D.dir,V=D.date,X={crc32:0,compressedSize:0,uncompressedSize:0};M&&!m||(X.crc32=v.crc32,X.compressedSize=v.compressedSize,X.uncompressedSize=v.uncompressedSize);var S=0;M&&(S|=8),q||!Z&&!p||(S|=2048);var L=0,fe=0;ee&&(L|=16),x==="UNIX"?(fe=798,L|=(function(te,be){var Oe=te;return te||(Oe=be?16893:33204),(65535&Oe)<<16})(D.unixPermissions,ee)):(fe=20,L|=(function(te){return 63&(te||0)})(D.dosPermissions)),j=V.getUTCHours(),j<<=6,j|=V.getUTCMinutes(),j<<=5,j|=V.getUTCSeconds()/2,A=V.getUTCFullYear()-1980,A<<=4,A|=V.getUTCMonth()+1,A<<=5,A|=V.getUTCDate(),Z&&(xe=u(1,1)+u(P(le),4)+G,K+="up"+u(xe.length,2)+xe),p&&(Y=u(1,1)+u(P(Ee),4)+z,K+="uc"+u(Y.length,2)+Y);var oe="";return oe+=`
\0`,oe+=u(S,2),oe+=Q.magic,oe+=u(j,2),oe+=u(A,2),oe+=u(X.crc32,4),oe+=u(X.compressedSize,4),oe+=u(X.uncompressedSize,4),oe+=u(le.length,2),oe+=u(K.length,2),{fileRecord:_.LOCAL_FILE_HEADER+oe+le+K,dirRecord:_.CENTRAL_FILE_HEADER+u(fe,2)+oe+u(Ee.length,2)+"\0\0\0\0"+u(L,4)+u(w,4)+le+K+Ee}}var s=l("../utils"),h=l("../stream/GenericWorker"),y=l("../utf8"),P=l("../crc32"),_=l("../signature");function E(v,M,m,w){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=M,this.zipPlatform=m,this.encodeFileName=w,this.streamFiles=v,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(E,h),E.prototype.push=function(v){var M=v.meta.percent||0,m=this.entriesCount,w=this._sources.length;this.accumulate?this.contentBuffer.push(v):(this.bytesWritten+=v.data.length,h.prototype.push.call(this,{data:v.data,meta:{currentFile:this.currentFile,percent:m?(M+100*(m-w-1))/m:100}}))},E.prototype.openedSource=function(v){this.currentSourceOffset=this.bytesWritten,this.currentFile=v.file.name;var M=this.streamFiles&&!v.file.dir;if(M){var m=c(v,M,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:m.fileRecord,meta:{percent:0}})}else this.accumulate=!0},E.prototype.closedSource=function(v){this.accumulate=!1;var M=this.streamFiles&&!v.file.dir,m=c(v,M,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(m.dirRecord),M)this.push({data:(function(w){return _.DATA_DESCRIPTOR+u(w.crc32,4)+u(w.compressedSize,4)+u(w.uncompressedSize,4)})(v),meta:{percent:100}});else for(this.push({data:m.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},E.prototype.flush=function(){for(var v=this.bytesWritten,M=0;M<this.dirRecords.length;M++)this.push({data:this.dirRecords[M],meta:{percent:100}});var m=this.bytesWritten-v,w=(function(x,T,j,A,D){var Q=s.transformTo("string",D(A));return _.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(x,2)+u(x,2)+u(T,4)+u(j,4)+u(Q.length,2)+Q})(this.dirRecords.length,m,v,this.zipComment,this.encodeFileName);this.push({data:w,meta:{percent:100}})},E.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},E.prototype.registerPrevious=function(v){this._sources.push(v);var M=this;return v.on("data",function(m){M.processChunk(m)}),v.on("end",function(){M.closedSource(M.previous.streamInfo),M._sources.length?M.prepareNextSource():M.end()}),v.on("error",function(m){M.error(m)}),this},E.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},E.prototype.error=function(v){var M=this._sources;if(!h.prototype.error.call(this,v))return!1;for(var m=0;m<M.length;m++)try{M[m].error(v)}catch{}return!0},E.prototype.lock=function(){h.prototype.lock.call(this);for(var v=this._sources,M=0;M<v.length;M++)v[M].lock()},k.exports=E},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(l,k,g){var u=l("../compressions"),c=l("./ZipFileWorker");g.generateWorker=function(s,h,y){var P=new c(h.streamFiles,y,h.platform,h.encodeFileName),_=0;try{s.forEach(function(E,v){_++;var M=(function(T,j){var A=T||j,D=u[A];if(!D)throw new Error(A+" is not a valid compression method !");return D})(v.options.compression,h.compression),m=v.options.compressionOptions||h.compressionOptions||{},w=v.dir,x=v.date;v._compressWorker(M,m).withStreamInfo("file",{name:E,dir:w,date:x,comment:v.comment||"",unixPermissions:v.unixPermissions,dosPermissions:v.dosPermissions}).pipe(P)}),P.entriesCount=_}catch(E){P.error(E)}return P}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(l,k,g){function u(){if(!(this instanceof u))return new u;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var c=new u;for(var s in this)typeof this[s]!="function"&&(c[s]=this[s]);return c}}(u.prototype=l("./object")).loadAsync=l("./load"),u.support=l("./support"),u.defaults=l("./defaults"),u.version="3.10.1",u.loadAsync=function(c,s){return new u().loadAsync(c,s)},u.external=l("./external"),k.exports=u},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(l,k,g){var u=l("./utils"),c=l("./external"),s=l("./utf8"),h=l("./zipEntries"),y=l("./stream/Crc32Probe"),P=l("./nodejsUtils");function _(E){return new c.Promise(function(v,M){var m=E.decompressed.getContentWorker().pipe(new y);m.on("error",function(w){M(w)}).on("end",function(){m.streamInfo.crc32!==E.decompressed.crc32?M(new Error("Corrupted zip : CRC32 mismatch")):v()}).resume()})}k.exports=function(E,v){var M=this;return v=u.extend(v||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),P.isNode&&P.isStream(E)?c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):u.prepareContent("the loaded zip file",E,!0,v.optimizedBinaryString,v.base64).then(function(m){var w=new h(v);return w.load(m),w}).then(function(m){var w=[c.Promise.resolve(m)],x=m.files;if(v.checkCRC32)for(var T=0;T<x.length;T++)w.push(_(x[T]));return c.Promise.all(w)}).then(function(m){for(var w=m.shift(),x=w.files,T=0;T<x.length;T++){var j=x[T],A=j.fileNameStr,D=u.resolve(j.fileNameStr);M.file(D,j.decompressed,{binary:!0,optimizedBinaryString:!0,date:j.date,dir:j.dir,comment:j.fileCommentStr.length?j.fileCommentStr:null,unixPermissions:j.unixPermissions,dosPermissions:j.dosPermissions,createFolders:v.createFolders}),j.dir||(M.file(D).unsafeOriginalName=A)}return w.zipComment.length&&(M.comment=w.zipComment),M})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(l,k,g){var u=l("../utils"),c=l("../stream/GenericWorker");function s(h,y){c.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(y)}u.inherits(s,c),s.prototype._bindStream=function(h){var y=this;(this._stream=h).pause(),h.on("data",function(P){y.push({data:P,meta:{percent:0}})}).on("error",function(P){y.isPaused?this.generatedError=P:y.error(P)}).on("end",function(){y.isPaused?y._upstreamEnded=!0:y.end()})},s.prototype.pause=function(){return!!c.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},k.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(l,k,g){var u=l("readable-stream").Readable;function c(s,h,y){u.call(this,h),this._helper=s;var P=this;s.on("data",function(_,E){P.push(_)||P._helper.pause(),y&&y(E)}).on("error",function(_){P.emit("error",_)}).on("end",function(){P.push(null)})}l("../utils").inherits(c,u),c.prototype._read=function(){this._helper.resume()},k.exports=c},{"../utils":32,"readable-stream":16}],14:[function(l,k,g){k.exports={isNode:typeof Buffer<"u",newBufferFrom:function(u,c){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(u,c);if(typeof u=="number")throw new Error('The "data" argument must not be a number');return new Buffer(u,c)},allocBuffer:function(u){if(Buffer.alloc)return Buffer.alloc(u);var c=new Buffer(u);return c.fill(0),c},isBuffer:function(u){return Buffer.isBuffer(u)},isStream:function(u){return u&&typeof u.on=="function"&&typeof u.pause=="function"&&typeof u.resume=="function"}}},{}],15:[function(l,k,g){function u(D,Q,q){var le,G=s.getTypeOf(Q),ce=s.extend(q||{},P);ce.date=ce.date||new Date,ce.compression!==null&&(ce.compression=ce.compression.toUpperCase()),typeof ce.unixPermissions=="string"&&(ce.unixPermissions=parseInt(ce.unixPermissions,8)),ce.unixPermissions&&16384&ce.unixPermissions&&(ce.dir=!0),ce.dosPermissions&&16&ce.dosPermissions&&(ce.dir=!0),ce.dir&&(D=x(D)),ce.createFolders&&(le=w(D))&&T.call(this,le,!0);var Ee=G==="string"&&ce.binary===!1&&ce.base64===!1;q&&q.binary!==void 0||(ce.binary=!Ee),(Q instanceof _&&Q.uncompressedSize===0||ce.dir||!Q||Q.length===0)&&(ce.base64=!1,ce.binary=!0,Q="",ce.compression="STORE",G="string");var z=null;z=Q instanceof _||Q instanceof h?Q:M.isNode&&M.isStream(Q)?new m(D,Q):s.prepareContent(D,Q,ce.binary,ce.optimizedBinaryString,ce.base64);var Z=new E(D,z,ce);this.files[D]=Z}var c=l("./utf8"),s=l("./utils"),h=l("./stream/GenericWorker"),y=l("./stream/StreamHelper"),P=l("./defaults"),_=l("./compressedObject"),E=l("./zipObject"),v=l("./generate"),M=l("./nodejsUtils"),m=l("./nodejs/NodejsStreamInputAdapter"),w=function(D){D.slice(-1)==="/"&&(D=D.substring(0,D.length-1));var Q=D.lastIndexOf("/");return 0<Q?D.substring(0,Q):""},x=function(D){return D.slice(-1)!=="/"&&(D+="/"),D},T=function(D,Q){return Q=Q!==void 0?Q:P.createFolders,D=x(D),this.files[D]||u.call(this,D,null,{dir:!0,createFolders:Q}),this.files[D]};function j(D){return Object.prototype.toString.call(D)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(D){var Q,q,le;for(Q in this.files)le=this.files[Q],(q=Q.slice(this.root.length,Q.length))&&Q.slice(0,this.root.length)===this.root&&D(q,le)},filter:function(D){var Q=[];return this.forEach(function(q,le){D(q,le)&&Q.push(le)}),Q},file:function(D,Q,q){if(arguments.length!==1)return D=this.root+D,u.call(this,D,Q,q),this;if(j(D)){var le=D;return this.filter(function(ce,Ee){return!Ee.dir&&le.test(ce)})}var G=this.files[this.root+D];return G&&!G.dir?G:null},folder:function(D){if(!D)return this;if(j(D))return this.filter(function(G,ce){return ce.dir&&D.test(G)});var Q=this.root+D,q=T.call(this,Q),le=this.clone();return le.root=q.name,le},remove:function(D){D=this.root+D;var Q=this.files[D];if(Q||(D.slice(-1)!=="/"&&(D+="/"),Q=this.files[D]),Q&&!Q.dir)delete this.files[D];else for(var q=this.filter(function(G,ce){return ce.name.slice(0,D.length)===D}),le=0;le<q.length;le++)delete this.files[q[le].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(D){var Q,q={};try{if((q=s.extend(D||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:c.utf8encode})).type=q.type.toLowerCase(),q.compression=q.compression.toUpperCase(),q.type==="binarystring"&&(q.type="string"),!q.type)throw new Error("No output type specified.");s.checkSupport(q.type),q.platform!=="darwin"&&q.platform!=="freebsd"&&q.platform!=="linux"&&q.platform!=="sunos"||(q.platform="UNIX"),q.platform==="win32"&&(q.platform="DOS");var le=q.comment||this.comment||"";Q=v.generateWorker(this,q,le)}catch(G){(Q=new h("error")).error(G)}return new y(Q,q.type||"string",q.mimeType)},generateAsync:function(D,Q){return this.generateInternalStream(D).accumulate(Q)},generateNodeStream:function(D,Q){return(D=D||{}).type||(D.type="nodebuffer"),this.generateInternalStream(D).toNodejsStream(Q)}};k.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(l,k,g){k.exports=l("stream")},{stream:void 0}],17:[function(l,k,g){var u=l("./DataReader");function c(s){u.call(this,s);for(var h=0;h<this.data.length;h++)s[h]=255&s[h]}l("../utils").inherits(c,u),c.prototype.byteAt=function(s){return this.data[this.zero+s]},c.prototype.lastIndexOfSignature=function(s){for(var h=s.charCodeAt(0),y=s.charCodeAt(1),P=s.charCodeAt(2),_=s.charCodeAt(3),E=this.length-4;0<=E;--E)if(this.data[E]===h&&this.data[E+1]===y&&this.data[E+2]===P&&this.data[E+3]===_)return E-this.zero;return-1},c.prototype.readAndCheckSignature=function(s){var h=s.charCodeAt(0),y=s.charCodeAt(1),P=s.charCodeAt(2),_=s.charCodeAt(3),E=this.readData(4);return h===E[0]&&y===E[1]&&P===E[2]&&_===E[3]},c.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,h},k.exports=c},{"../utils":32,"./DataReader":18}],18:[function(l,k,g){var u=l("../utils");function c(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}c.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var h,y=0;for(this.checkOffset(s),h=this.index+s-1;h>=this.index;h--)y=(y<<8)+this.byteAt(h);return this.index+=s,y},readString:function(s){return u.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},k.exports=c},{"../utils":32}],19:[function(l,k,g){var u=l("./Uint8ArrayReader");function c(s){u.call(this,s)}l("../utils").inherits(c,u),c.prototype.readData=function(s){this.checkOffset(s);var h=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,h},k.exports=c},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(l,k,g){var u=l("./DataReader");function c(s){u.call(this,s)}l("../utils").inherits(c,u),c.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},c.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},c.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},c.prototype.readData=function(s){this.checkOffset(s);var h=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,h},k.exports=c},{"../utils":32,"./DataReader":18}],21:[function(l,k,g){var u=l("./ArrayReader");function c(s){u.call(this,s)}l("../utils").inherits(c,u),c.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,h},k.exports=c},{"../utils":32,"./ArrayReader":17}],22:[function(l,k,g){var u=l("../utils"),c=l("../support"),s=l("./ArrayReader"),h=l("./StringReader"),y=l("./NodeBufferReader"),P=l("./Uint8ArrayReader");k.exports=function(_){var E=u.getTypeOf(_);return u.checkSupport(E),E!=="string"||c.uint8array?E==="nodebuffer"?new y(_):c.uint8array?new P(u.transformTo("uint8array",_)):new s(u.transformTo("array",_)):new h(_)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(l,k,g){g.LOCAL_FILE_HEADER="PK",g.CENTRAL_FILE_HEADER="PK",g.CENTRAL_DIRECTORY_END="PK",g.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",g.ZIP64_CENTRAL_DIRECTORY_END="PK",g.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(l,k,g){var u=l("./GenericWorker"),c=l("../utils");function s(h){u.call(this,"ConvertWorker to "+h),this.destType=h}c.inherits(s,u),s.prototype.processChunk=function(h){this.push({data:c.transformTo(this.destType,h.data),meta:h.meta})},k.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(l,k,g){var u=l("./GenericWorker"),c=l("../crc32");function s(){u.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}l("../utils").inherits(s,u),s.prototype.processChunk=function(h){this.streamInfo.crc32=c(h.data,this.streamInfo.crc32||0),this.push(h)},k.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(l,k,g){var u=l("../utils"),c=l("./GenericWorker");function s(h){c.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}u.inherits(s,c),s.prototype.processChunk=function(h){if(h){var y=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=y+h.data.length}c.prototype.processChunk.call(this,h)},k.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(l,k,g){var u=l("../utils"),c=l("./GenericWorker");function s(h){c.call(this,"DataWorker");var y=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(P){y.dataIsReady=!0,y.data=P,y.max=P&&P.length||0,y.type=u.getTypeOf(P),y.isPaused||y._tickAndRepeat()},function(P){y.error(P)})}u.inherits(s,c),s.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,u.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(u.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,y=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,y);break;case"uint8array":h=this.data.subarray(this.index,y);break;case"array":case"nodebuffer":h=this.data.slice(this.index,y)}return this.index=y,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},k.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(l,k,g){function u(c){this.name=c||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}u.prototype={push:function(c){this.emit("data",c)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(c){this.emit("error",c)}return!0},error:function(c){return!this.isFinished&&(this.isPaused?this.generatedError=c:(this.isFinished=!0,this.emit("error",c),this.previous&&this.previous.error(c),this.cleanUp()),!0)},on:function(c,s){return this._listeners[c].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(c,s){if(this._listeners[c])for(var h=0;h<this._listeners[c].length;h++)this._listeners[c][h].call(this,s)},pipe:function(c){return c.registerPrevious(this)},registerPrevious:function(c){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=c.streamInfo,this.mergeStreamInfo(),this.previous=c;var s=this;return c.on("data",function(h){s.processChunk(h)}),c.on("end",function(){s.end()}),c.on("error",function(h){s.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var c=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),c=!0),this.previous&&this.previous.resume(),!c},flush:function(){},processChunk:function(c){this.push(c)},withStreamInfo:function(c,s){return this.extraStreamInfo[c]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var c in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,c)&&(this.streamInfo[c]=this.extraStreamInfo[c])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var c="Worker "+this.name;return this.previous?this.previous+" -> "+c:c}},k.exports=u},{}],29:[function(l,k,g){var u=l("../utils"),c=l("./ConvertWorker"),s=l("./GenericWorker"),h=l("../base64"),y=l("../support"),P=l("../external"),_=null;if(y.nodestream)try{_=l("../nodejs/NodejsStreamOutputAdapter")}catch{}function E(M,m){return new P.Promise(function(w,x){var T=[],j=M._internalType,A=M._outputType,D=M._mimeType;M.on("data",function(Q,q){T.push(Q),m&&m(q)}).on("error",function(Q){T=[],x(Q)}).on("end",function(){try{var Q=(function(q,le,G){switch(q){case"blob":return u.newBlob(u.transformTo("arraybuffer",le),G);case"base64":return h.encode(le);default:return u.transformTo(q,le)}})(A,(function(q,le){var G,ce=0,Ee=null,z=0;for(G=0;G<le.length;G++)z+=le[G].length;switch(q){case"string":return le.join("");case"array":return Array.prototype.concat.apply([],le);case"uint8array":for(Ee=new Uint8Array(z),G=0;G<le.length;G++)Ee.set(le[G],ce),ce+=le[G].length;return Ee;case"nodebuffer":return Buffer.concat(le);default:throw new Error("concat : unsupported type '"+q+"'")}})(j,T),D);w(Q)}catch(q){x(q)}T=[]}).resume()})}function v(M,m,w){var x=m;switch(m){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=m,this._mimeType=w,u.checkSupport(x),this._worker=M.pipe(new c(x)),M.lock()}catch(T){this._worker=new s("error"),this._worker.error(T)}}v.prototype={accumulate:function(M){return E(this,M)},on:function(M,m){var w=this;return M==="data"?this._worker.on(M,function(x){m.call(w,x.data,x.meta)}):this._worker.on(M,function(){u.delay(m,arguments,w)}),this},resume:function(){return u.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(M){if(u.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new _(this,{objectMode:this._outputType!=="nodebuffer"},M)}},k.exports=v},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(l,k,g){if(g.base64=!0,g.array=!0,g.string=!0,g.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",g.nodebuffer=typeof Buffer<"u",g.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")g.blob=!1;else{var u=new ArrayBuffer(0);try{g.blob=new Blob([u],{type:"application/zip"}).size===0}catch{try{var c=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);c.append(u),g.blob=c.getBlob("application/zip").size===0}catch{g.blob=!1}}}try{g.nodestream=!!l("readable-stream").Readable}catch{g.nodestream=!1}},{"readable-stream":16}],31:[function(l,k,g){for(var u=l("./utils"),c=l("./support"),s=l("./nodejsUtils"),h=l("./stream/GenericWorker"),y=new Array(256),P=0;P<256;P++)y[P]=252<=P?6:248<=P?5:240<=P?4:224<=P?3:192<=P?2:1;y[254]=y[254]=1;function _(){h.call(this,"utf-8 decode"),this.leftOver=null}function E(){h.call(this,"utf-8 encode")}g.utf8encode=function(v){return c.nodebuffer?s.newBufferFrom(v,"utf-8"):(function(M){var m,w,x,T,j,A=M.length,D=0;for(T=0;T<A;T++)(64512&(w=M.charCodeAt(T)))==55296&&T+1<A&&(64512&(x=M.charCodeAt(T+1)))==56320&&(w=65536+(w-55296<<10)+(x-56320),T++),D+=w<128?1:w<2048?2:w<65536?3:4;for(m=c.uint8array?new Uint8Array(D):new Array(D),T=j=0;j<D;T++)(64512&(w=M.charCodeAt(T)))==55296&&T+1<A&&(64512&(x=M.charCodeAt(T+1)))==56320&&(w=65536+(w-55296<<10)+(x-56320),T++),w<128?m[j++]=w:(w<2048?m[j++]=192|w>>>6:(w<65536?m[j++]=224|w>>>12:(m[j++]=240|w>>>18,m[j++]=128|w>>>12&63),m[j++]=128|w>>>6&63),m[j++]=128|63&w);return m})(v)},g.utf8decode=function(v){return c.nodebuffer?u.transformTo("nodebuffer",v).toString("utf-8"):(function(M){var m,w,x,T,j=M.length,A=new Array(2*j);for(m=w=0;m<j;)if((x=M[m++])<128)A[w++]=x;else if(4<(T=y[x]))A[w++]=65533,m+=T-1;else{for(x&=T===2?31:T===3?15:7;1<T&&m<j;)x=x<<6|63&M[m++],T--;1<T?A[w++]=65533:x<65536?A[w++]=x:(x-=65536,A[w++]=55296|x>>10&1023,A[w++]=56320|1023&x)}return A.length!==w&&(A.subarray?A=A.subarray(0,w):A.length=w),u.applyFromCharCode(A)})(v=u.transformTo(c.uint8array?"uint8array":"array",v))},u.inherits(_,h),_.prototype.processChunk=function(v){var M=u.transformTo(c.uint8array?"uint8array":"array",v.data);if(this.leftOver&&this.leftOver.length){if(c.uint8array){var m=M;(M=new Uint8Array(m.length+this.leftOver.length)).set(this.leftOver,0),M.set(m,this.leftOver.length)}else M=this.leftOver.concat(M);this.leftOver=null}var w=(function(T,j){var A;for((j=j||T.length)>T.length&&(j=T.length),A=j-1;0<=A&&(192&T[A])==128;)A--;return A<0||A===0?j:A+y[T[A]]>j?A:j})(M),x=M;w!==M.length&&(c.uint8array?(x=M.subarray(0,w),this.leftOver=M.subarray(w,M.length)):(x=M.slice(0,w),this.leftOver=M.slice(w,M.length))),this.push({data:g.utf8decode(x),meta:v.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:g.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},g.Utf8DecodeWorker=_,u.inherits(E,h),E.prototype.processChunk=function(v){this.push({data:g.utf8encode(v.data),meta:v.meta})},g.Utf8EncodeWorker=E},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(l,k,g){var u=l("./support"),c=l("./base64"),s=l("./nodejsUtils"),h=l("./external");function y(m){return m}function P(m,w){for(var x=0;x<m.length;++x)w[x]=255&m.charCodeAt(x);return w}l("setimmediate"),g.newBlob=function(m,w){g.checkSupport("blob");try{return new Blob([m],{type:w})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(m),x.getBlob(w)}catch{throw new Error("Bug : can't construct the Blob.")}}};var _={stringifyByChunk:function(m,w,x){var T=[],j=0,A=m.length;if(A<=x)return String.fromCharCode.apply(null,m);for(;j<A;)w==="array"||w==="nodebuffer"?T.push(String.fromCharCode.apply(null,m.slice(j,Math.min(j+x,A)))):T.push(String.fromCharCode.apply(null,m.subarray(j,Math.min(j+x,A)))),j+=x;return T.join("")},stringifyByChar:function(m){for(var w="",x=0;x<m.length;x++)w+=String.fromCharCode(m[x]);return w},applyCanBeUsed:{uint8array:(function(){try{return u.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return u.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function E(m){var w=65536,x=g.getTypeOf(m),T=!0;if(x==="uint8array"?T=_.applyCanBeUsed.uint8array:x==="nodebuffer"&&(T=_.applyCanBeUsed.nodebuffer),T)for(;1<w;)try{return _.stringifyByChunk(m,x,w)}catch{w=Math.floor(w/2)}return _.stringifyByChar(m)}function v(m,w){for(var x=0;x<m.length;x++)w[x]=m[x];return w}g.applyFromCharCode=E;var M={};M.string={string:y,array:function(m){return P(m,new Array(m.length))},arraybuffer:function(m){return M.string.uint8array(m).buffer},uint8array:function(m){return P(m,new Uint8Array(m.length))},nodebuffer:function(m){return P(m,s.allocBuffer(m.length))}},M.array={string:E,array:y,arraybuffer:function(m){return new Uint8Array(m).buffer},uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return s.newBufferFrom(m)}},M.arraybuffer={string:function(m){return E(new Uint8Array(m))},array:function(m){return v(new Uint8Array(m),new Array(m.byteLength))},arraybuffer:y,uint8array:function(m){return new Uint8Array(m)},nodebuffer:function(m){return s.newBufferFrom(new Uint8Array(m))}},M.uint8array={string:E,array:function(m){return v(m,new Array(m.length))},arraybuffer:function(m){return m.buffer},uint8array:y,nodebuffer:function(m){return s.newBufferFrom(m)}},M.nodebuffer={string:E,array:function(m){return v(m,new Array(m.length))},arraybuffer:function(m){return M.nodebuffer.uint8array(m).buffer},uint8array:function(m){return v(m,new Uint8Array(m.length))},nodebuffer:y},g.transformTo=function(m,w){if(w=w||"",!m)return w;g.checkSupport(m);var x=g.getTypeOf(w);return M[x][m](w)},g.resolve=function(m){for(var w=m.split("/"),x=[],T=0;T<w.length;T++){var j=w[T];j==="."||j===""&&T!==0&&T!==w.length-1||(j===".."?x.pop():x.push(j))}return x.join("/")},g.getTypeOf=function(m){return typeof m=="string"?"string":Object.prototype.toString.call(m)==="[object Array]"?"array":u.nodebuffer&&s.isBuffer(m)?"nodebuffer":u.uint8array&&m instanceof Uint8Array?"uint8array":u.arraybuffer&&m instanceof ArrayBuffer?"arraybuffer":void 0},g.checkSupport=function(m){if(!u[m.toLowerCase()])throw new Error(m+" is not supported by this platform")},g.MAX_VALUE_16BITS=65535,g.MAX_VALUE_32BITS=-1,g.pretty=function(m){var w,x,T="";for(x=0;x<(m||"").length;x++)T+="\\x"+((w=m.charCodeAt(x))<16?"0":"")+w.toString(16).toUpperCase();return T},g.delay=function(m,w,x){setImmediate(function(){m.apply(x||null,w||[])})},g.inherits=function(m,w){function x(){}x.prototype=w.prototype,m.prototype=new x},g.extend=function(){var m,w,x={};for(m=0;m<arguments.length;m++)for(w in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],w)&&x[w]===void 0&&(x[w]=arguments[m][w]);return x},g.prepareContent=function(m,w,x,T,j){return h.Promise.resolve(w).then(function(A){return u.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new h.Promise(function(D,Q){var q=new FileReader;q.onload=function(le){D(le.target.result)},q.onerror=function(le){Q(le.target.error)},q.readAsArrayBuffer(A)}):A}).then(function(A){var D=g.getTypeOf(A);return D?(D==="arraybuffer"?A=g.transformTo("uint8array",A):D==="string"&&(j?A=c.decode(A):x&&T!==!0&&(A=(function(Q){return P(Q,u.uint8array?new Uint8Array(Q.length):new Array(Q.length))})(A))),A):h.Promise.reject(new Error("Can't read the data of '"+m+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(l,k,g){var u=l("./reader/readerFor"),c=l("./utils"),s=l("./signature"),h=l("./zipEntry"),y=l("./support");function P(_){this.files=[],this.loadOptions=_}P.prototype={checkSignature:function(_){if(!this.reader.readAndCheckSignature(_)){this.reader.index-=4;var E=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+c.pretty(E)+", expected "+c.pretty(_)+")")}},isSignature:function(_,E){var v=this.reader.index;this.reader.setIndex(_);var M=this.reader.readString(4)===E;return this.reader.setIndex(v),M},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var _=this.reader.readData(this.zipCommentLength),E=y.uint8array?"uint8array":"array",v=c.transformTo(E,_);this.zipComment=this.loadOptions.decodeFileName(v)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var _,E,v,M=this.zip64EndOfCentralSize-44;0<M;)_=this.reader.readInt(2),E=this.reader.readInt(4),v=this.reader.readData(E),this.zip64ExtensibleData[_]={id:_,length:E,value:v}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var _,E;for(_=0;_<this.files.length;_++)E=this.files[_],this.reader.setIndex(E.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),E.readLocalPart(this.reader),E.handleUTF8(),E.processAttributes()},readCentralDir:function(){var _;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(_=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(_);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var _=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(_<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(_);var E=_;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===c.MAX_VALUE_16BITS||this.diskWithCentralDirStart===c.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===c.MAX_VALUE_16BITS||this.centralDirRecords===c.MAX_VALUE_16BITS||this.centralDirSize===c.MAX_VALUE_32BITS||this.centralDirOffset===c.MAX_VALUE_32BITS){if(this.zip64=!0,(_=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(_),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var v=this.centralDirOffset+this.centralDirSize;this.zip64&&(v+=20,v+=12+this.zip64EndOfCentralSize);var M=E-v;if(0<M)this.isSignature(E,s.CENTRAL_FILE_HEADER)||(this.reader.zero=M);else if(M<0)throw new Error("Corrupted zip: missing "+Math.abs(M)+" bytes.")},prepareReader:function(_){this.reader=u(_)},load:function(_){this.prepareReader(_),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},k.exports=P},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(l,k,g){var u=l("./reader/readerFor"),c=l("./utils"),s=l("./compressedObject"),h=l("./crc32"),y=l("./utf8"),P=l("./compressions"),_=l("./support");function E(v,M){this.options=v,this.loadOptions=M}E.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(v){var M,m;if(v.skip(22),this.fileNameLength=v.readInt(2),m=v.readInt(2),this.fileName=v.readData(this.fileNameLength),v.skip(m),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((M=(function(w){for(var x in P)if(Object.prototype.hasOwnProperty.call(P,x)&&P[x].magic===w)return P[x];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+c.pretty(this.compressionMethod)+" unknown (inner file : "+c.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,M,v.readData(this.compressedSize))},readCentralPart:function(v){this.versionMadeBy=v.readInt(2),v.skip(2),this.bitFlag=v.readInt(2),this.compressionMethod=v.readString(2),this.date=v.readDate(),this.crc32=v.readInt(4),this.compressedSize=v.readInt(4),this.uncompressedSize=v.readInt(4);var M=v.readInt(2);if(this.extraFieldsLength=v.readInt(2),this.fileCommentLength=v.readInt(2),this.diskNumberStart=v.readInt(2),this.internalFileAttributes=v.readInt(2),this.externalFileAttributes=v.readInt(4),this.localHeaderOffset=v.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");v.skip(M),this.readExtraFields(v),this.parseZIP64ExtraField(v),this.fileComment=v.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var v=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),v==0&&(this.dosPermissions=63&this.externalFileAttributes),v==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var v=u(this.extraFields[1].value);this.uncompressedSize===c.MAX_VALUE_32BITS&&(this.uncompressedSize=v.readInt(8)),this.compressedSize===c.MAX_VALUE_32BITS&&(this.compressedSize=v.readInt(8)),this.localHeaderOffset===c.MAX_VALUE_32BITS&&(this.localHeaderOffset=v.readInt(8)),this.diskNumberStart===c.MAX_VALUE_32BITS&&(this.diskNumberStart=v.readInt(4))}},readExtraFields:function(v){var M,m,w,x=v.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});v.index+4<x;)M=v.readInt(2),m=v.readInt(2),w=v.readData(m),this.extraFields[M]={id:M,length:m,value:w};v.setIndex(x)},handleUTF8:function(){var v=_.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=y.utf8decode(this.fileName),this.fileCommentStr=y.utf8decode(this.fileComment);else{var M=this.findExtraFieldUnicodePath();if(M!==null)this.fileNameStr=M;else{var m=c.transformTo(v,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(m)}var w=this.findExtraFieldUnicodeComment();if(w!==null)this.fileCommentStr=w;else{var x=c.transformTo(v,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var v=this.extraFields[28789];if(v){var M=u(v.value);return M.readInt(1)!==1||h(this.fileName)!==M.readInt(4)?null:y.utf8decode(M.readData(v.length-5))}return null},findExtraFieldUnicodeComment:function(){var v=this.extraFields[25461];if(v){var M=u(v.value);return M.readInt(1)!==1||h(this.fileComment)!==M.readInt(4)?null:y.utf8decode(M.readData(v.length-5))}return null}},k.exports=E},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(l,k,g){function u(M,m,w){this.name=M,this.dir=w.dir,this.date=w.date,this.comment=w.comment,this.unixPermissions=w.unixPermissions,this.dosPermissions=w.dosPermissions,this._data=m,this._dataBinary=w.binary,this.options={compression:w.compression,compressionOptions:w.compressionOptions}}var c=l("./stream/StreamHelper"),s=l("./stream/DataWorker"),h=l("./utf8"),y=l("./compressedObject"),P=l("./stream/GenericWorker");u.prototype={internalStream:function(M){var m=null,w="string";try{if(!M)throw new Error("No output type specified.");var x=(w=M.toLowerCase())==="string"||w==="text";w!=="binarystring"&&w!=="text"||(w="string"),m=this._decompressWorker();var T=!this._dataBinary;T&&!x&&(m=m.pipe(new h.Utf8EncodeWorker)),!T&&x&&(m=m.pipe(new h.Utf8DecodeWorker))}catch(j){(m=new P("error")).error(j)}return new c(m,w,"")},async:function(M,m){return this.internalStream(M).accumulate(m)},nodeStream:function(M,m){return this.internalStream(M||"nodebuffer").toNodejsStream(m)},_compressWorker:function(M,m){if(this._data instanceof y&&this._data.compression.magic===M.magic)return this._data.getCompressedWorker();var w=this._decompressWorker();return this._dataBinary||(w=w.pipe(new h.Utf8EncodeWorker)),y.createWorkerFrom(w,M,m)},_decompressWorker:function(){return this._data instanceof y?this._data.getContentWorker():this._data instanceof P?this._data:new s(this._data)}};for(var _=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],E=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},v=0;v<_.length;v++)u.prototype[_[v]]=E;k.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(l,k,g){(function(u){var c,s,h=u.MutationObserver||u.WebKitMutationObserver;if(h){var y=0,P=new h(M),_=u.document.createTextNode("");P.observe(_,{characterData:!0}),c=function(){_.data=y=++y%2}}else if(u.setImmediate||u.MessageChannel===void 0)c="document"in u&&"onreadystatechange"in u.document.createElement("script")?function(){var m=u.document.createElement("script");m.onreadystatechange=function(){M(),m.onreadystatechange=null,m.parentNode.removeChild(m),m=null},u.document.documentElement.appendChild(m)}:function(){setTimeout(M,0)};else{var E=new u.MessageChannel;E.port1.onmessage=M,c=function(){E.port2.postMessage(0)}}var v=[];function M(){var m,w;s=!0;for(var x=v.length;x;){for(w=v,v=[],m=-1;++m<x;)w[m]();x=v.length}s=!1}k.exports=function(m){v.push(m)!==1||s||c()}}).call(this,typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(l,k,g){var u=l("immediate");function c(){}var s={},h=["REJECTED"],y=["FULFILLED"],P=["PENDING"];function _(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=P,this.queue=[],this.outcome=void 0,x!==c&&m(this,x)}function E(x,T,j){this.promise=x,typeof T=="function"&&(this.onFulfilled=T,this.callFulfilled=this.otherCallFulfilled),typeof j=="function"&&(this.onRejected=j,this.callRejected=this.otherCallRejected)}function v(x,T,j){u(function(){var A;try{A=T(j)}catch(D){return s.reject(x,D)}A===x?s.reject(x,new TypeError("Cannot resolve promise with itself")):s.resolve(x,A)})}function M(x){var T=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof T=="function")return function(){T.apply(x,arguments)}}function m(x,T){var j=!1;function A(q){j||(j=!0,s.reject(x,q))}function D(q){j||(j=!0,s.resolve(x,q))}var Q=w(function(){T(D,A)});Q.status==="error"&&A(Q.value)}function w(x,T){var j={};try{j.value=x(T),j.status="success"}catch(A){j.status="error",j.value=A}return j}(k.exports=_).prototype.finally=function(x){if(typeof x!="function")return this;var T=this.constructor;return this.then(function(j){return T.resolve(x()).then(function(){return j})},function(j){return T.resolve(x()).then(function(){throw j})})},_.prototype.catch=function(x){return this.then(null,x)},_.prototype.then=function(x,T){if(typeof x!="function"&&this.state===y||typeof T!="function"&&this.state===h)return this;var j=new this.constructor(c);return this.state!==P?v(j,this.state===y?x:T,this.outcome):this.queue.push(new E(j,x,T)),j},E.prototype.callFulfilled=function(x){s.resolve(this.promise,x)},E.prototype.otherCallFulfilled=function(x){v(this.promise,this.onFulfilled,x)},E.prototype.callRejected=function(x){s.reject(this.promise,x)},E.prototype.otherCallRejected=function(x){v(this.promise,this.onRejected,x)},s.resolve=function(x,T){var j=w(M,T);if(j.status==="error")return s.reject(x,j.value);var A=j.value;if(A)m(x,A);else{x.state=y,x.outcome=T;for(var D=-1,Q=x.queue.length;++D<Q;)x.queue[D].callFulfilled(T)}return x},s.reject=function(x,T){x.state=h,x.outcome=T;for(var j=-1,A=x.queue.length;++j<A;)x.queue[j].callRejected(T);return x},_.resolve=function(x){return x instanceof this?x:s.resolve(new this(c),x)},_.reject=function(x){var T=new this(c);return s.reject(T,x)},_.all=function(x){var T=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var j=x.length,A=!1;if(!j)return this.resolve([]);for(var D=new Array(j),Q=0,q=-1,le=new this(c);++q<j;)G(x[q],q);return le;function G(ce,Ee){T.resolve(ce).then(function(z){D[Ee]=z,++Q!==j||A||(A=!0,s.resolve(le,D))},function(z){A||(A=!0,s.reject(le,z))})}},_.race=function(x){var T=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var j=x.length,A=!1;if(!j)return this.resolve([]);for(var D=-1,Q=new this(c);++D<j;)q=x[D],T.resolve(q).then(function(le){A||(A=!0,s.resolve(Q,le))},function(le){A||(A=!0,s.reject(Q,le))});var q;return Q}},{immediate:36}],38:[function(l,k,g){var u={};(0,l("./lib/utils/common").assign)(u,l("./lib/deflate"),l("./lib/inflate"),l("./lib/zlib/constants")),k.exports=u},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(l,k,g){var u=l("./zlib/deflate"),c=l("./utils/common"),s=l("./utils/strings"),h=l("./zlib/messages"),y=l("./zlib/zstream"),P=Object.prototype.toString,_=0,E=-1,v=0,M=8;function m(x){if(!(this instanceof m))return new m(x);this.options=c.assign({level:E,method:M,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},x||{});var T=this.options;T.raw&&0<T.windowBits?T.windowBits=-T.windowBits:T.gzip&&0<T.windowBits&&T.windowBits<16&&(T.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var j=u.deflateInit2(this.strm,T.level,T.method,T.windowBits,T.memLevel,T.strategy);if(j!==_)throw new Error(h[j]);if(T.header&&u.deflateSetHeader(this.strm,T.header),T.dictionary){var A;if(A=typeof T.dictionary=="string"?s.string2buf(T.dictionary):P.call(T.dictionary)==="[object ArrayBuffer]"?new Uint8Array(T.dictionary):T.dictionary,(j=u.deflateSetDictionary(this.strm,A))!==_)throw new Error(h[j]);this._dict_set=!0}}function w(x,T){var j=new m(T);if(j.push(x,!0),j.err)throw j.msg||h[j.err];return j.result}m.prototype.push=function(x,T){var j,A,D=this.strm,Q=this.options.chunkSize;if(this.ended)return!1;A=T===~~T?T:T===!0?4:0,typeof x=="string"?D.input=s.string2buf(x):P.call(x)==="[object ArrayBuffer]"?D.input=new Uint8Array(x):D.input=x,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new c.Buf8(Q),D.next_out=0,D.avail_out=Q),(j=u.deflate(D,A))!==1&&j!==_)return this.onEnd(j),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(c.shrinkBuf(D.output,D.next_out))):this.onData(c.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&j!==1);return A===4?(j=u.deflateEnd(this.strm),this.onEnd(j),this.ended=!0,j===_):A!==2||(this.onEnd(_),!(D.avail_out=0))},m.prototype.onData=function(x){this.chunks.push(x)},m.prototype.onEnd=function(x){x===_&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},g.Deflate=m,g.deflate=w,g.deflateRaw=function(x,T){return(T=T||{}).raw=!0,w(x,T)},g.gzip=function(x,T){return(T=T||{}).gzip=!0,w(x,T)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(l,k,g){var u=l("./zlib/inflate"),c=l("./utils/common"),s=l("./utils/strings"),h=l("./zlib/constants"),y=l("./zlib/messages"),P=l("./zlib/zstream"),_=l("./zlib/gzheader"),E=Object.prototype.toString;function v(m){if(!(this instanceof v))return new v(m);this.options=c.assign({chunkSize:16384,windowBits:0,to:""},m||{});var w=this.options;w.raw&&0<=w.windowBits&&w.windowBits<16&&(w.windowBits=-w.windowBits,w.windowBits===0&&(w.windowBits=-15)),!(0<=w.windowBits&&w.windowBits<16)||m&&m.windowBits||(w.windowBits+=32),15<w.windowBits&&w.windowBits<48&&(15&w.windowBits)==0&&(w.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new P,this.strm.avail_out=0;var x=u.inflateInit2(this.strm,w.windowBits);if(x!==h.Z_OK)throw new Error(y[x]);this.header=new _,u.inflateGetHeader(this.strm,this.header)}function M(m,w){var x=new v(w);if(x.push(m,!0),x.err)throw x.msg||y[x.err];return x.result}v.prototype.push=function(m,w){var x,T,j,A,D,Q,q=this.strm,le=this.options.chunkSize,G=this.options.dictionary,ce=!1;if(this.ended)return!1;T=w===~~w?w:w===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof m=="string"?q.input=s.binstring2buf(m):E.call(m)==="[object ArrayBuffer]"?q.input=new Uint8Array(m):q.input=m,q.next_in=0,q.avail_in=q.input.length;do{if(q.avail_out===0&&(q.output=new c.Buf8(le),q.next_out=0,q.avail_out=le),(x=u.inflate(q,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&G&&(Q=typeof G=="string"?s.string2buf(G):E.call(G)==="[object ArrayBuffer]"?new Uint8Array(G):G,x=u.inflateSetDictionary(this.strm,Q)),x===h.Z_BUF_ERROR&&ce===!0&&(x=h.Z_OK,ce=!1),x!==h.Z_STREAM_END&&x!==h.Z_OK)return this.onEnd(x),!(this.ended=!0);q.next_out&&(q.avail_out!==0&&x!==h.Z_STREAM_END&&(q.avail_in!==0||T!==h.Z_FINISH&&T!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(j=s.utf8border(q.output,q.next_out),A=q.next_out-j,D=s.buf2string(q.output,j),q.next_out=A,q.avail_out=le-A,A&&c.arraySet(q.output,q.output,j,A,0),this.onData(D)):this.onData(c.shrinkBuf(q.output,q.next_out)))),q.avail_in===0&&q.avail_out===0&&(ce=!0)}while((0<q.avail_in||q.avail_out===0)&&x!==h.Z_STREAM_END);return x===h.Z_STREAM_END&&(T=h.Z_FINISH),T===h.Z_FINISH?(x=u.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===h.Z_OK):T!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(q.avail_out=0))},v.prototype.onData=function(m){this.chunks.push(m)},v.prototype.onEnd=function(m){m===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=c.flattenChunks(this.chunks)),this.chunks=[],this.err=m,this.msg=this.strm.msg},g.Inflate=v,g.inflate=M,g.inflateRaw=function(m,w){return(w=w||{}).raw=!0,M(m,w)},g.ungzip=M},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(l,k,g){var u=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";g.assign=function(h){for(var y=Array.prototype.slice.call(arguments,1);y.length;){var P=y.shift();if(P){if(typeof P!="object")throw new TypeError(P+"must be non-object");for(var _ in P)P.hasOwnProperty(_)&&(h[_]=P[_])}}return h},g.shrinkBuf=function(h,y){return h.length===y?h:h.subarray?h.subarray(0,y):(h.length=y,h)};var c={arraySet:function(h,y,P,_,E){if(y.subarray&&h.subarray)h.set(y.subarray(P,P+_),E);else for(var v=0;v<_;v++)h[E+v]=y[P+v]},flattenChunks:function(h){var y,P,_,E,v,M;for(y=_=0,P=h.length;y<P;y++)_+=h[y].length;for(M=new Uint8Array(_),y=E=0,P=h.length;y<P;y++)v=h[y],M.set(v,E),E+=v.length;return M}},s={arraySet:function(h,y,P,_,E){for(var v=0;v<_;v++)h[E+v]=y[P+v]},flattenChunks:function(h){return[].concat.apply([],h)}};g.setTyped=function(h){h?(g.Buf8=Uint8Array,g.Buf16=Uint16Array,g.Buf32=Int32Array,g.assign(g,c)):(g.Buf8=Array,g.Buf16=Array,g.Buf32=Array,g.assign(g,s))},g.setTyped(u)},{}],42:[function(l,k,g){var u=l("./common"),c=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{c=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var h=new u.Buf8(256),y=0;y<256;y++)h[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;function P(_,E){if(E<65537&&(_.subarray&&s||!_.subarray&&c))return String.fromCharCode.apply(null,u.shrinkBuf(_,E));for(var v="",M=0;M<E;M++)v+=String.fromCharCode(_[M]);return v}h[254]=h[254]=1,g.string2buf=function(_){var E,v,M,m,w,x=_.length,T=0;for(m=0;m<x;m++)(64512&(v=_.charCodeAt(m)))==55296&&m+1<x&&(64512&(M=_.charCodeAt(m+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),m++),T+=v<128?1:v<2048?2:v<65536?3:4;for(E=new u.Buf8(T),m=w=0;w<T;m++)(64512&(v=_.charCodeAt(m)))==55296&&m+1<x&&(64512&(M=_.charCodeAt(m+1)))==56320&&(v=65536+(v-55296<<10)+(M-56320),m++),v<128?E[w++]=v:(v<2048?E[w++]=192|v>>>6:(v<65536?E[w++]=224|v>>>12:(E[w++]=240|v>>>18,E[w++]=128|v>>>12&63),E[w++]=128|v>>>6&63),E[w++]=128|63&v);return E},g.buf2binstring=function(_){return P(_,_.length)},g.binstring2buf=function(_){for(var E=new u.Buf8(_.length),v=0,M=E.length;v<M;v++)E[v]=_.charCodeAt(v);return E},g.buf2string=function(_,E){var v,M,m,w,x=E||_.length,T=new Array(2*x);for(v=M=0;v<x;)if((m=_[v++])<128)T[M++]=m;else if(4<(w=h[m]))T[M++]=65533,v+=w-1;else{for(m&=w===2?31:w===3?15:7;1<w&&v<x;)m=m<<6|63&_[v++],w--;1<w?T[M++]=65533:m<65536?T[M++]=m:(m-=65536,T[M++]=55296|m>>10&1023,T[M++]=56320|1023&m)}return P(T,M)},g.utf8border=function(_,E){var v;for((E=E||_.length)>_.length&&(E=_.length),v=E-1;0<=v&&(192&_[v])==128;)v--;return v<0||v===0?E:v+h[_[v]]>E?v:E}},{"./common":41}],43:[function(l,k,g){k.exports=function(u,c,s,h){for(var y=65535&u|0,P=u>>>16&65535|0,_=0;s!==0;){for(s-=_=2e3<s?2e3:s;P=P+(y=y+c[h++]|0)|0,--_;);y%=65521,P%=65521}return y|P<<16|0}},{}],44:[function(l,k,g){k.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(l,k,g){var u=(function(){for(var c,s=[],h=0;h<256;h++){c=h;for(var y=0;y<8;y++)c=1&c?3988292384^c>>>1:c>>>1;s[h]=c}return s})();k.exports=function(c,s,h,y){var P=u,_=y+h;c^=-1;for(var E=y;E<_;E++)c=c>>>8^P[255&(c^s[E])];return-1^c}},{}],46:[function(l,k,g){var u,c=l("../utils/common"),s=l("./trees"),h=l("./adler32"),y=l("./crc32"),P=l("./messages"),_=0,E=4,v=0,M=-2,m=-1,w=4,x=2,T=8,j=9,A=286,D=30,Q=19,q=2*A+1,le=15,G=3,ce=258,Ee=ce+G+1,z=42,Z=113,p=1,K=2,xe=3,Y=4;function ee(a,J){return a.msg=P[J],J}function V(a){return(a<<1)-(4<a?9:0)}function X(a){for(var J=a.length;0<=--J;)a[J]=0}function S(a){var J=a.state,$=J.pending;$>a.avail_out&&($=a.avail_out),$!==0&&(c.arraySet(a.output,J.pending_buf,J.pending_out,$,a.next_out),a.next_out+=$,J.pending_out+=$,a.total_out+=$,a.avail_out-=$,J.pending-=$,J.pending===0&&(J.pending_out=0))}function L(a,J){s._tr_flush_block(a,0<=a.block_start?a.block_start:-1,a.strstart-a.block_start,J),a.block_start=a.strstart,S(a.strm)}function fe(a,J){a.pending_buf[a.pending++]=J}function oe(a,J){a.pending_buf[a.pending++]=J>>>8&255,a.pending_buf[a.pending++]=255&J}function te(a,J){var $,O,b=a.max_chain_length,F=a.strstart,ne=a.prev_length,ie=a.nice_match,W=a.strstart>a.w_size-Ee?a.strstart-(a.w_size-Ee):0,de=a.window,ve=a.w_mask,he=a.prev,Pe=a.strstart+ce,Ae=de[F+ne-1],Le=de[F+ne];a.prev_length>=a.good_match&&(b>>=2),ie>a.lookahead&&(ie=a.lookahead);do if(de[($=J)+ne]===Le&&de[$+ne-1]===Ae&&de[$]===de[F]&&de[++$]===de[F+1]){F+=2,$++;do;while(de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&de[++F]===de[++$]&&F<Pe);if(O=ce-(Pe-F),F=Pe-ce,ne<O){if(a.match_start=J,ie<=(ne=O))break;Ae=de[F+ne-1],Le=de[F+ne]}}while((J=he[J&ve])>W&&--b!=0);return ne<=a.lookahead?ne:a.lookahead}function be(a){var J,$,O,b,F,ne,ie,W,de,ve,he=a.w_size;do{if(b=a.window_size-a.lookahead-a.strstart,a.strstart>=he+(he-Ee)){for(c.arraySet(a.window,a.window,he,he,0),a.match_start-=he,a.strstart-=he,a.block_start-=he,J=$=a.hash_size;O=a.head[--J],a.head[J]=he<=O?O-he:0,--$;);for(J=$=he;O=a.prev[--J],a.prev[J]=he<=O?O-he:0,--$;);b+=he}if(a.strm.avail_in===0)break;if(ne=a.strm,ie=a.window,W=a.strstart+a.lookahead,de=b,ve=void 0,ve=ne.avail_in,de<ve&&(ve=de),$=ve===0?0:(ne.avail_in-=ve,c.arraySet(ie,ne.input,ne.next_in,ve,W),ne.state.wrap===1?ne.adler=h(ne.adler,ie,ve,W):ne.state.wrap===2&&(ne.adler=y(ne.adler,ie,ve,W)),ne.next_in+=ve,ne.total_in+=ve,ve),a.lookahead+=$,a.lookahead+a.insert>=G)for(F=a.strstart-a.insert,a.ins_h=a.window[F],a.ins_h=(a.ins_h<<a.hash_shift^a.window[F+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[F+G-1])&a.hash_mask,a.prev[F&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=F,F++,a.insert--,!(a.lookahead+a.insert<G)););}while(a.lookahead<Ee&&a.strm.avail_in!==0)}function Oe(a,J){for(var $,O;;){if(a.lookahead<Ee){if(be(a),a.lookahead<Ee&&J===_)return p;if(a.lookahead===0)break}if($=0,a.lookahead>=G&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+G-1])&a.hash_mask,$=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),$!==0&&a.strstart-$<=a.w_size-Ee&&(a.match_length=te(a,$)),a.match_length>=G)if(O=s._tr_tally(a,a.strstart-a.match_start,a.match_length-G),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=G){for(a.match_length--;a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+G-1])&a.hash_mask,$=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart,--a.match_length!=0;);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else O=s._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(O&&(L(a,!1),a.strm.avail_out===0))return p}return a.insert=a.strstart<G-1?a.strstart:G-1,J===E?(L(a,!0),a.strm.avail_out===0?xe:Y):a.last_lit&&(L(a,!1),a.strm.avail_out===0)?p:K}function we(a,J){for(var $,O,b;;){if(a.lookahead<Ee){if(be(a),a.lookahead<Ee&&J===_)return p;if(a.lookahead===0)break}if($=0,a.lookahead>=G&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+G-1])&a.hash_mask,$=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=G-1,$!==0&&a.prev_length<a.max_lazy_match&&a.strstart-$<=a.w_size-Ee&&(a.match_length=te(a,$),a.match_length<=5&&(a.strategy===1||a.match_length===G&&4096<a.strstart-a.match_start)&&(a.match_length=G-1)),a.prev_length>=G&&a.match_length<=a.prev_length){for(b=a.strstart+a.lookahead-G,O=s._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-G),a.lookahead-=a.prev_length-1,a.prev_length-=2;++a.strstart<=b&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+G-1])&a.hash_mask,$=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),--a.prev_length!=0;);if(a.match_available=0,a.match_length=G-1,a.strstart++,O&&(L(a,!1),a.strm.avail_out===0))return p}else if(a.match_available){if((O=s._tr_tally(a,0,a.window[a.strstart-1]))&&L(a,!1),a.strstart++,a.lookahead--,a.strm.avail_out===0)return p}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(O=s._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<G-1?a.strstart:G-1,J===E?(L(a,!0),a.strm.avail_out===0?xe:Y):a.last_lit&&(L(a,!1),a.strm.avail_out===0)?p:K}function Ce(a,J,$,O,b){this.good_length=a,this.max_lazy=J,this.nice_length=$,this.max_chain=O,this.func=b}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=T,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new c.Buf16(2*q),this.dyn_dtree=new c.Buf16(2*(2*D+1)),this.bl_tree=new c.Buf16(2*(2*Q+1)),X(this.dyn_ltree),X(this.dyn_dtree),X(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new c.Buf16(le+1),this.heap=new c.Buf16(2*A+1),X(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new c.Buf16(2*A+1),X(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function De(a){var J;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=x,(J=a.state).pending=0,J.pending_out=0,J.wrap<0&&(J.wrap=-J.wrap),J.status=J.wrap?z:Z,a.adler=J.wrap===2?0:1,J.last_flush=_,s._tr_init(J),v):ee(a,M)}function _t(a){var J=De(a);return J===v&&(function($){$.window_size=2*$.w_size,X($.head),$.max_lazy_match=u[$.level].max_lazy,$.good_match=u[$.level].good_length,$.nice_match=u[$.level].nice_length,$.max_chain_length=u[$.level].max_chain,$.strstart=0,$.block_start=0,$.lookahead=0,$.insert=0,$.match_length=$.prev_length=G-1,$.match_available=0,$.ins_h=0})(a.state),J}function ot(a,J,$,O,b,F){if(!a)return M;var ne=1;if(J===m&&(J=6),O<0?(ne=0,O=-O):15<O&&(ne=2,O-=16),b<1||j<b||$!==T||O<8||15<O||J<0||9<J||F<0||w<F)return ee(a,M);O===8&&(O=9);var ie=new Re;return(a.state=ie).strm=a,ie.wrap=ne,ie.gzhead=null,ie.w_bits=O,ie.w_size=1<<ie.w_bits,ie.w_mask=ie.w_size-1,ie.hash_bits=b+7,ie.hash_size=1<<ie.hash_bits,ie.hash_mask=ie.hash_size-1,ie.hash_shift=~~((ie.hash_bits+G-1)/G),ie.window=new c.Buf8(2*ie.w_size),ie.head=new c.Buf16(ie.hash_size),ie.prev=new c.Buf16(ie.w_size),ie.lit_bufsize=1<<b+6,ie.pending_buf_size=4*ie.lit_bufsize,ie.pending_buf=new c.Buf8(ie.pending_buf_size),ie.d_buf=1*ie.lit_bufsize,ie.l_buf=3*ie.lit_bufsize,ie.level=J,ie.strategy=F,ie.method=$,_t(a)}u=[new Ce(0,0,0,0,function(a,J){var $=65535;for($>a.pending_buf_size-5&&($=a.pending_buf_size-5);;){if(a.lookahead<=1){if(be(a),a.lookahead===0&&J===_)return p;if(a.lookahead===0)break}a.strstart+=a.lookahead,a.lookahead=0;var O=a.block_start+$;if((a.strstart===0||a.strstart>=O)&&(a.lookahead=a.strstart-O,a.strstart=O,L(a,!1),a.strm.avail_out===0)||a.strstart-a.block_start>=a.w_size-Ee&&(L(a,!1),a.strm.avail_out===0))return p}return a.insert=0,J===E?(L(a,!0),a.strm.avail_out===0?xe:Y):(a.strstart>a.block_start&&(L(a,!1),a.strm.avail_out),p)}),new Ce(4,4,8,4,Oe),new Ce(4,5,16,8,Oe),new Ce(4,6,32,32,Oe),new Ce(4,4,16,16,we),new Ce(8,16,32,32,we),new Ce(8,16,128,128,we),new Ce(8,32,128,256,we),new Ce(32,128,258,1024,we),new Ce(32,258,258,4096,we)],g.deflateInit=function(a,J){return ot(a,J,T,15,8,0)},g.deflateInit2=ot,g.deflateReset=_t,g.deflateResetKeep=De,g.deflateSetHeader=function(a,J){return a&&a.state?a.state.wrap!==2?M:(a.state.gzhead=J,v):M},g.deflate=function(a,J){var $,O,b,F;if(!a||!a.state||5<J||J<0)return a?ee(a,M):M;if(O=a.state,!a.output||!a.input&&a.avail_in!==0||O.status===666&&J!==E)return ee(a,a.avail_out===0?-5:M);if(O.strm=a,$=O.last_flush,O.last_flush=J,O.status===z)if(O.wrap===2)a.adler=0,fe(O,31),fe(O,139),fe(O,8),O.gzhead?(fe(O,(O.gzhead.text?1:0)+(O.gzhead.hcrc?2:0)+(O.gzhead.extra?4:0)+(O.gzhead.name?8:0)+(O.gzhead.comment?16:0)),fe(O,255&O.gzhead.time),fe(O,O.gzhead.time>>8&255),fe(O,O.gzhead.time>>16&255),fe(O,O.gzhead.time>>24&255),fe(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),fe(O,255&O.gzhead.os),O.gzhead.extra&&O.gzhead.extra.length&&(fe(O,255&O.gzhead.extra.length),fe(O,O.gzhead.extra.length>>8&255)),O.gzhead.hcrc&&(a.adler=y(a.adler,O.pending_buf,O.pending,0)),O.gzindex=0,O.status=69):(fe(O,0),fe(O,0),fe(O,0),fe(O,0),fe(O,0),fe(O,O.level===9?2:2<=O.strategy||O.level<2?4:0),fe(O,3),O.status=Z);else{var ne=T+(O.w_bits-8<<4)<<8;ne|=(2<=O.strategy||O.level<2?0:O.level<6?1:O.level===6?2:3)<<6,O.strstart!==0&&(ne|=32),ne+=31-ne%31,O.status=Z,oe(O,ne),O.strstart!==0&&(oe(O,a.adler>>>16),oe(O,65535&a.adler)),a.adler=1}if(O.status===69)if(O.gzhead.extra){for(b=O.pending;O.gzindex<(65535&O.gzhead.extra.length)&&(O.pending!==O.pending_buf_size||(O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),S(a),b=O.pending,O.pending!==O.pending_buf_size));)fe(O,255&O.gzhead.extra[O.gzindex]),O.gzindex++;O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),O.gzindex===O.gzhead.extra.length&&(O.gzindex=0,O.status=73)}else O.status=73;if(O.status===73)if(O.gzhead.name){b=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),S(a),b=O.pending,O.pending===O.pending_buf_size)){F=1;break}F=O.gzindex<O.gzhead.name.length?255&O.gzhead.name.charCodeAt(O.gzindex++):0,fe(O,F)}while(F!==0);O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),F===0&&(O.gzindex=0,O.status=91)}else O.status=91;if(O.status===91)if(O.gzhead.comment){b=O.pending;do{if(O.pending===O.pending_buf_size&&(O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),S(a),b=O.pending,O.pending===O.pending_buf_size)){F=1;break}F=O.gzindex<O.gzhead.comment.length?255&O.gzhead.comment.charCodeAt(O.gzindex++):0,fe(O,F)}while(F!==0);O.gzhead.hcrc&&O.pending>b&&(a.adler=y(a.adler,O.pending_buf,O.pending-b,b)),F===0&&(O.status=103)}else O.status=103;if(O.status===103&&(O.gzhead.hcrc?(O.pending+2>O.pending_buf_size&&S(a),O.pending+2<=O.pending_buf_size&&(fe(O,255&a.adler),fe(O,a.adler>>8&255),a.adler=0,O.status=Z)):O.status=Z),O.pending!==0){if(S(a),a.avail_out===0)return O.last_flush=-1,v}else if(a.avail_in===0&&V(J)<=V($)&&J!==E)return ee(a,-5);if(O.status===666&&a.avail_in!==0)return ee(a,-5);if(a.avail_in!==0||O.lookahead!==0||J!==_&&O.status!==666){var ie=O.strategy===2?(function(W,de){for(var ve;;){if(W.lookahead===0&&(be(W),W.lookahead===0)){if(de===_)return p;break}if(W.match_length=0,ve=s._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++,ve&&(L(W,!1),W.strm.avail_out===0))return p}return W.insert=0,de===E?(L(W,!0),W.strm.avail_out===0?xe:Y):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?p:K})(O,J):O.strategy===3?(function(W,de){for(var ve,he,Pe,Ae,Le=W.window;;){if(W.lookahead<=ce){if(be(W),W.lookahead<=ce&&de===_)return p;if(W.lookahead===0)break}if(W.match_length=0,W.lookahead>=G&&0<W.strstart&&(he=Le[Pe=W.strstart-1])===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]){Ae=W.strstart+ce;do;while(he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&he===Le[++Pe]&&Pe<Ae);W.match_length=ce-(Ae-Pe),W.match_length>W.lookahead&&(W.match_length=W.lookahead)}if(W.match_length>=G?(ve=s._tr_tally(W,1,W.match_length-G),W.lookahead-=W.match_length,W.strstart+=W.match_length,W.match_length=0):(ve=s._tr_tally(W,0,W.window[W.strstart]),W.lookahead--,W.strstart++),ve&&(L(W,!1),W.strm.avail_out===0))return p}return W.insert=0,de===E?(L(W,!0),W.strm.avail_out===0?xe:Y):W.last_lit&&(L(W,!1),W.strm.avail_out===0)?p:K})(O,J):u[O.level].func(O,J);if(ie!==xe&&ie!==Y||(O.status=666),ie===p||ie===xe)return a.avail_out===0&&(O.last_flush=-1),v;if(ie===K&&(J===1?s._tr_align(O):J!==5&&(s._tr_stored_block(O,0,0,!1),J===3&&(X(O.head),O.lookahead===0&&(O.strstart=0,O.block_start=0,O.insert=0))),S(a),a.avail_out===0))return O.last_flush=-1,v}return J!==E?v:O.wrap<=0?1:(O.wrap===2?(fe(O,255&a.adler),fe(O,a.adler>>8&255),fe(O,a.adler>>16&255),fe(O,a.adler>>24&255),fe(O,255&a.total_in),fe(O,a.total_in>>8&255),fe(O,a.total_in>>16&255),fe(O,a.total_in>>24&255)):(oe(O,a.adler>>>16),oe(O,65535&a.adler)),S(a),0<O.wrap&&(O.wrap=-O.wrap),O.pending!==0?v:1)},g.deflateEnd=function(a){var J;return a&&a.state?(J=a.state.status)!==z&&J!==69&&J!==73&&J!==91&&J!==103&&J!==Z&&J!==666?ee(a,M):(a.state=null,J===Z?ee(a,-3):v):M},g.deflateSetDictionary=function(a,J){var $,O,b,F,ne,ie,W,de,ve=J.length;if(!a||!a.state||(F=($=a.state).wrap)===2||F===1&&$.status!==z||$.lookahead)return M;for(F===1&&(a.adler=h(a.adler,J,ve,0)),$.wrap=0,ve>=$.w_size&&(F===0&&(X($.head),$.strstart=0,$.block_start=0,$.insert=0),de=new c.Buf8($.w_size),c.arraySet(de,J,ve-$.w_size,$.w_size,0),J=de,ve=$.w_size),ne=a.avail_in,ie=a.next_in,W=a.input,a.avail_in=ve,a.next_in=0,a.input=J,be($);$.lookahead>=G;){for(O=$.strstart,b=$.lookahead-(G-1);$.ins_h=($.ins_h<<$.hash_shift^$.window[O+G-1])&$.hash_mask,$.prev[O&$.w_mask]=$.head[$.ins_h],$.head[$.ins_h]=O,O++,--b;);$.strstart=O,$.lookahead=G-1,be($)}return $.strstart+=$.lookahead,$.block_start=$.strstart,$.insert=$.lookahead,$.lookahead=0,$.match_length=$.prev_length=G-1,$.match_available=0,a.next_in=ie,a.input=W,a.avail_in=ne,$.wrap=F,v},g.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(l,k,g){k.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(l,k,g){k.exports=function(u,c){var s,h,y,P,_,E,v,M,m,w,x,T,j,A,D,Q,q,le,G,ce,Ee,z,Z,p,K;s=u.state,h=u.next_in,p=u.input,y=h+(u.avail_in-5),P=u.next_out,K=u.output,_=P-(c-u.avail_out),E=P+(u.avail_out-257),v=s.dmax,M=s.wsize,m=s.whave,w=s.wnext,x=s.window,T=s.hold,j=s.bits,A=s.lencode,D=s.distcode,Q=(1<<s.lenbits)-1,q=(1<<s.distbits)-1;e:do{j<15&&(T+=p[h++]<<j,j+=8,T+=p[h++]<<j,j+=8),le=A[T&Q];t:for(;;){if(T>>>=G=le>>>24,j-=G,(G=le>>>16&255)===0)K[P++]=65535&le;else{if(!(16&G)){if((64&G)==0){le=A[(65535&le)+(T&(1<<G)-1)];continue t}if(32&G){s.mode=12;break e}u.msg="invalid literal/length code",s.mode=30;break e}ce=65535&le,(G&=15)&&(j<G&&(T+=p[h++]<<j,j+=8),ce+=T&(1<<G)-1,T>>>=G,j-=G),j<15&&(T+=p[h++]<<j,j+=8,T+=p[h++]<<j,j+=8),le=D[T&q];n:for(;;){if(T>>>=G=le>>>24,j-=G,!(16&(G=le>>>16&255))){if((64&G)==0){le=D[(65535&le)+(T&(1<<G)-1)];continue n}u.msg="invalid distance code",s.mode=30;break e}if(Ee=65535&le,j<(G&=15)&&(T+=p[h++]<<j,(j+=8)<G&&(T+=p[h++]<<j,j+=8)),v<(Ee+=T&(1<<G)-1)){u.msg="invalid distance too far back",s.mode=30;break e}if(T>>>=G,j-=G,(G=P-_)<Ee){if(m<(G=Ee-G)&&s.sane){u.msg="invalid distance too far back",s.mode=30;break e}if(Z=x,(z=0)===w){if(z+=M-G,G<ce){for(ce-=G;K[P++]=x[z++],--G;);z=P-Ee,Z=K}}else if(w<G){if(z+=M+w-G,(G-=w)<ce){for(ce-=G;K[P++]=x[z++],--G;);if(z=0,w<ce){for(ce-=G=w;K[P++]=x[z++],--G;);z=P-Ee,Z=K}}}else if(z+=w-G,G<ce){for(ce-=G;K[P++]=x[z++],--G;);z=P-Ee,Z=K}for(;2<ce;)K[P++]=Z[z++],K[P++]=Z[z++],K[P++]=Z[z++],ce-=3;ce&&(K[P++]=Z[z++],1<ce&&(K[P++]=Z[z++]))}else{for(z=P-Ee;K[P++]=K[z++],K[P++]=K[z++],K[P++]=K[z++],2<(ce-=3););ce&&(K[P++]=K[z++],1<ce&&(K[P++]=K[z++]))}break}}break}}while(h<y&&P<E);h-=ce=j>>3,T&=(1<<(j-=ce<<3))-1,u.next_in=h,u.next_out=P,u.avail_in=h<y?y-h+5:5-(h-y),u.avail_out=P<E?E-P+257:257-(P-E),s.hold=T,s.bits=j}},{}],49:[function(l,k,g){var u=l("../utils/common"),c=l("./adler32"),s=l("./crc32"),h=l("./inffast"),y=l("./inftrees"),P=1,_=2,E=0,v=-2,M=1,m=852,w=592;function x(z){return(z>>>24&255)+(z>>>8&65280)+((65280&z)<<8)+((255&z)<<24)}function T(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new u.Buf16(320),this.work=new u.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function j(z){var Z;return z&&z.state?(Z=z.state,z.total_in=z.total_out=Z.total=0,z.msg="",Z.wrap&&(z.adler=1&Z.wrap),Z.mode=M,Z.last=0,Z.havedict=0,Z.dmax=32768,Z.head=null,Z.hold=0,Z.bits=0,Z.lencode=Z.lendyn=new u.Buf32(m),Z.distcode=Z.distdyn=new u.Buf32(w),Z.sane=1,Z.back=-1,E):v}function A(z){var Z;return z&&z.state?((Z=z.state).wsize=0,Z.whave=0,Z.wnext=0,j(z)):v}function D(z,Z){var p,K;return z&&z.state?(K=z.state,Z<0?(p=0,Z=-Z):(p=1+(Z>>4),Z<48&&(Z&=15)),Z&&(Z<8||15<Z)?v:(K.window!==null&&K.wbits!==Z&&(K.window=null),K.wrap=p,K.wbits=Z,A(z))):v}function Q(z,Z){var p,K;return z?(K=new T,(z.state=K).window=null,(p=D(z,Z))!==E&&(z.state=null),p):v}var q,le,G=!0;function ce(z){if(G){var Z;for(q=new u.Buf32(512),le=new u.Buf32(32),Z=0;Z<144;)z.lens[Z++]=8;for(;Z<256;)z.lens[Z++]=9;for(;Z<280;)z.lens[Z++]=7;for(;Z<288;)z.lens[Z++]=8;for(y(P,z.lens,0,288,q,0,z.work,{bits:9}),Z=0;Z<32;)z.lens[Z++]=5;y(_,z.lens,0,32,le,0,z.work,{bits:5}),G=!1}z.lencode=q,z.lenbits=9,z.distcode=le,z.distbits=5}function Ee(z,Z,p,K){var xe,Y=z.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new u.Buf8(Y.wsize)),K>=Y.wsize?(u.arraySet(Y.window,Z,p-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(K<(xe=Y.wsize-Y.wnext)&&(xe=K),u.arraySet(Y.window,Z,p-K,xe,Y.wnext),(K-=xe)?(u.arraySet(Y.window,Z,p-K,K,0),Y.wnext=K,Y.whave=Y.wsize):(Y.wnext+=xe,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=xe))),0}g.inflateReset=A,g.inflateReset2=D,g.inflateResetKeep=j,g.inflateInit=function(z){return Q(z,15)},g.inflateInit2=Q,g.inflate=function(z,Z){var p,K,xe,Y,ee,V,X,S,L,fe,oe,te,be,Oe,we,Ce,Re,De,_t,ot,a,J,$,O,b=0,F=new u.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!z||!z.state||!z.output||!z.input&&z.avail_in!==0)return v;(p=z.state).mode===12&&(p.mode=13),ee=z.next_out,xe=z.output,X=z.avail_out,Y=z.next_in,K=z.input,V=z.avail_in,S=p.hold,L=p.bits,fe=V,oe=X,J=E;e:for(;;)switch(p.mode){case M:if(p.wrap===0){p.mode=13;break}for(;L<16;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(2&p.wrap&&S===35615){F[p.check=0]=255&S,F[1]=S>>>8&255,p.check=s(p.check,F,2,0),L=S=0,p.mode=2;break}if(p.flags=0,p.head&&(p.head.done=!1),!(1&p.wrap)||(((255&S)<<8)+(S>>8))%31){z.msg="incorrect header check",p.mode=30;break}if((15&S)!=8){z.msg="unknown compression method",p.mode=30;break}if(L-=4,a=8+(15&(S>>>=4)),p.wbits===0)p.wbits=a;else if(a>p.wbits){z.msg="invalid window size",p.mode=30;break}p.dmax=1<<a,z.adler=p.check=1,p.mode=512&S?10:12,L=S=0;break;case 2:for(;L<16;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(p.flags=S,(255&p.flags)!=8){z.msg="unknown compression method",p.mode=30;break}if(57344&p.flags){z.msg="unknown header flags set",p.mode=30;break}p.head&&(p.head.text=S>>8&1),512&p.flags&&(F[0]=255&S,F[1]=S>>>8&255,p.check=s(p.check,F,2,0)),L=S=0,p.mode=3;case 3:for(;L<32;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.head&&(p.head.time=S),512&p.flags&&(F[0]=255&S,F[1]=S>>>8&255,F[2]=S>>>16&255,F[3]=S>>>24&255,p.check=s(p.check,F,4,0)),L=S=0,p.mode=4;case 4:for(;L<16;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.head&&(p.head.xflags=255&S,p.head.os=S>>8),512&p.flags&&(F[0]=255&S,F[1]=S>>>8&255,p.check=s(p.check,F,2,0)),L=S=0,p.mode=5;case 5:if(1024&p.flags){for(;L<16;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.length=S,p.head&&(p.head.extra_len=S),512&p.flags&&(F[0]=255&S,F[1]=S>>>8&255,p.check=s(p.check,F,2,0)),L=S=0}else p.head&&(p.head.extra=null);p.mode=6;case 6:if(1024&p.flags&&(V<(te=p.length)&&(te=V),te&&(p.head&&(a=p.head.extra_len-p.length,p.head.extra||(p.head.extra=new Array(p.head.extra_len)),u.arraySet(p.head.extra,K,Y,te,a)),512&p.flags&&(p.check=s(p.check,K,te,Y)),V-=te,Y+=te,p.length-=te),p.length))break e;p.length=0,p.mode=7;case 7:if(2048&p.flags){if(V===0)break e;for(te=0;a=K[Y+te++],p.head&&a&&p.length<65536&&(p.head.name+=String.fromCharCode(a)),a&&te<V;);if(512&p.flags&&(p.check=s(p.check,K,te,Y)),V-=te,Y+=te,a)break e}else p.head&&(p.head.name=null);p.length=0,p.mode=8;case 8:if(4096&p.flags){if(V===0)break e;for(te=0;a=K[Y+te++],p.head&&a&&p.length<65536&&(p.head.comment+=String.fromCharCode(a)),a&&te<V;);if(512&p.flags&&(p.check=s(p.check,K,te,Y)),V-=te,Y+=te,a)break e}else p.head&&(p.head.comment=null);p.mode=9;case 9:if(512&p.flags){for(;L<16;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(S!==(65535&p.check)){z.msg="header crc mismatch",p.mode=30;break}L=S=0}p.head&&(p.head.hcrc=p.flags>>9&1,p.head.done=!0),z.adler=p.check=0,p.mode=12;break;case 10:for(;L<32;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}z.adler=p.check=x(S),L=S=0,p.mode=11;case 11:if(p.havedict===0)return z.next_out=ee,z.avail_out=X,z.next_in=Y,z.avail_in=V,p.hold=S,p.bits=L,2;z.adler=p.check=1,p.mode=12;case 12:if(Z===5||Z===6)break e;case 13:if(p.last){S>>>=7&L,L-=7&L,p.mode=27;break}for(;L<3;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}switch(p.last=1&S,L-=1,3&(S>>>=1)){case 0:p.mode=14;break;case 1:if(ce(p),p.mode=20,Z!==6)break;S>>>=2,L-=2;break e;case 2:p.mode=17;break;case 3:z.msg="invalid block type",p.mode=30}S>>>=2,L-=2;break;case 14:for(S>>>=7&L,L-=7&L;L<32;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if((65535&S)!=(S>>>16^65535)){z.msg="invalid stored block lengths",p.mode=30;break}if(p.length=65535&S,L=S=0,p.mode=15,Z===6)break e;case 15:p.mode=16;case 16:if(te=p.length){if(V<te&&(te=V),X<te&&(te=X),te===0)break e;u.arraySet(xe,K,Y,te,ee),V-=te,Y+=te,X-=te,ee+=te,p.length-=te;break}p.mode=12;break;case 17:for(;L<14;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(p.nlen=257+(31&S),S>>>=5,L-=5,p.ndist=1+(31&S),S>>>=5,L-=5,p.ncode=4+(15&S),S>>>=4,L-=4,286<p.nlen||30<p.ndist){z.msg="too many length or distance symbols",p.mode=30;break}p.have=0,p.mode=18;case 18:for(;p.have<p.ncode;){for(;L<3;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.lens[ne[p.have++]]=7&S,S>>>=3,L-=3}for(;p.have<19;)p.lens[ne[p.have++]]=0;if(p.lencode=p.lendyn,p.lenbits=7,$={bits:p.lenbits},J=y(0,p.lens,0,19,p.lencode,0,p.work,$),p.lenbits=$.bits,J){z.msg="invalid code lengths set",p.mode=30;break}p.have=0,p.mode=19;case 19:for(;p.have<p.nlen+p.ndist;){for(;Ce=(b=p.lencode[S&(1<<p.lenbits)-1])>>>16&255,Re=65535&b,!((we=b>>>24)<=L);){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(Re<16)S>>>=we,L-=we,p.lens[p.have++]=Re;else{if(Re===16){for(O=we+2;L<O;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(S>>>=we,L-=we,p.have===0){z.msg="invalid bit length repeat",p.mode=30;break}a=p.lens[p.have-1],te=3+(3&S),S>>>=2,L-=2}else if(Re===17){for(O=we+3;L<O;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}L-=we,a=0,te=3+(7&(S>>>=we)),S>>>=3,L-=3}else{for(O=we+7;L<O;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}L-=we,a=0,te=11+(127&(S>>>=we)),S>>>=7,L-=7}if(p.have+te>p.nlen+p.ndist){z.msg="invalid bit length repeat",p.mode=30;break}for(;te--;)p.lens[p.have++]=a}}if(p.mode===30)break;if(p.lens[256]===0){z.msg="invalid code -- missing end-of-block",p.mode=30;break}if(p.lenbits=9,$={bits:p.lenbits},J=y(P,p.lens,0,p.nlen,p.lencode,0,p.work,$),p.lenbits=$.bits,J){z.msg="invalid literal/lengths set",p.mode=30;break}if(p.distbits=6,p.distcode=p.distdyn,$={bits:p.distbits},J=y(_,p.lens,p.nlen,p.ndist,p.distcode,0,p.work,$),p.distbits=$.bits,J){z.msg="invalid distances set",p.mode=30;break}if(p.mode=20,Z===6)break e;case 20:p.mode=21;case 21:if(6<=V&&258<=X){z.next_out=ee,z.avail_out=X,z.next_in=Y,z.avail_in=V,p.hold=S,p.bits=L,h(z,oe),ee=z.next_out,xe=z.output,X=z.avail_out,Y=z.next_in,K=z.input,V=z.avail_in,S=p.hold,L=p.bits,p.mode===12&&(p.back=-1);break}for(p.back=0;Ce=(b=p.lencode[S&(1<<p.lenbits)-1])>>>16&255,Re=65535&b,!((we=b>>>24)<=L);){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(Ce&&(240&Ce)==0){for(De=we,_t=Ce,ot=Re;Ce=(b=p.lencode[ot+((S&(1<<De+_t)-1)>>De)])>>>16&255,Re=65535&b,!(De+(we=b>>>24)<=L);){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}S>>>=De,L-=De,p.back+=De}if(S>>>=we,L-=we,p.back+=we,p.length=Re,Ce===0){p.mode=26;break}if(32&Ce){p.back=-1,p.mode=12;break}if(64&Ce){z.msg="invalid literal/length code",p.mode=30;break}p.extra=15&Ce,p.mode=22;case 22:if(p.extra){for(O=p.extra;L<O;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.length+=S&(1<<p.extra)-1,S>>>=p.extra,L-=p.extra,p.back+=p.extra}p.was=p.length,p.mode=23;case 23:for(;Ce=(b=p.distcode[S&(1<<p.distbits)-1])>>>16&255,Re=65535&b,!((we=b>>>24)<=L);){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if((240&Ce)==0){for(De=we,_t=Ce,ot=Re;Ce=(b=p.distcode[ot+((S&(1<<De+_t)-1)>>De)])>>>16&255,Re=65535&b,!(De+(we=b>>>24)<=L);){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}S>>>=De,L-=De,p.back+=De}if(S>>>=we,L-=we,p.back+=we,64&Ce){z.msg="invalid distance code",p.mode=30;break}p.offset=Re,p.extra=15&Ce,p.mode=24;case 24:if(p.extra){for(O=p.extra;L<O;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}p.offset+=S&(1<<p.extra)-1,S>>>=p.extra,L-=p.extra,p.back+=p.extra}if(p.offset>p.dmax){z.msg="invalid distance too far back",p.mode=30;break}p.mode=25;case 25:if(X===0)break e;if(te=oe-X,p.offset>te){if((te=p.offset-te)>p.whave&&p.sane){z.msg="invalid distance too far back",p.mode=30;break}be=te>p.wnext?(te-=p.wnext,p.wsize-te):p.wnext-te,te>p.length&&(te=p.length),Oe=p.window}else Oe=xe,be=ee-p.offset,te=p.length;for(X<te&&(te=X),X-=te,p.length-=te;xe[ee++]=Oe[be++],--te;);p.length===0&&(p.mode=21);break;case 26:if(X===0)break e;xe[ee++]=p.length,X--,p.mode=21;break;case 27:if(p.wrap){for(;L<32;){if(V===0)break e;V--,S|=K[Y++]<<L,L+=8}if(oe-=X,z.total_out+=oe,p.total+=oe,oe&&(z.adler=p.check=p.flags?s(p.check,xe,oe,ee-oe):c(p.check,xe,oe,ee-oe)),oe=X,(p.flags?S:x(S))!==p.check){z.msg="incorrect data check",p.mode=30;break}L=S=0}p.mode=28;case 28:if(p.wrap&&p.flags){for(;L<32;){if(V===0)break e;V--,S+=K[Y++]<<L,L+=8}if(S!==(4294967295&p.total)){z.msg="incorrect length check",p.mode=30;break}L=S=0}p.mode=29;case 29:J=1;break e;case 30:J=-3;break e;case 31:return-4;case 32:default:return v}return z.next_out=ee,z.avail_out=X,z.next_in=Y,z.avail_in=V,p.hold=S,p.bits=L,(p.wsize||oe!==z.avail_out&&p.mode<30&&(p.mode<27||Z!==4))&&Ee(z,z.output,z.next_out,oe-z.avail_out)?(p.mode=31,-4):(fe-=z.avail_in,oe-=z.avail_out,z.total_in+=fe,z.total_out+=oe,p.total+=oe,p.wrap&&oe&&(z.adler=p.check=p.flags?s(p.check,xe,oe,z.next_out-oe):c(p.check,xe,oe,z.next_out-oe)),z.data_type=p.bits+(p.last?64:0)+(p.mode===12?128:0)+(p.mode===20||p.mode===15?256:0),(fe==0&&oe===0||Z===4)&&J===E&&(J=-5),J)},g.inflateEnd=function(z){if(!z||!z.state)return v;var Z=z.state;return Z.window&&(Z.window=null),z.state=null,E},g.inflateGetHeader=function(z,Z){var p;return z&&z.state?(2&(p=z.state).wrap)==0?v:((p.head=Z).done=!1,E):v},g.inflateSetDictionary=function(z,Z){var p,K=Z.length;return z&&z.state?(p=z.state).wrap!==0&&p.mode!==11?v:p.mode===11&&c(1,Z,K,0)!==p.check?-3:Ee(z,Z,K,K)?(p.mode=31,-4):(p.havedict=1,E):v},g.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(l,k,g){var u=l("../utils/common"),c=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],y=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];k.exports=function(P,_,E,v,M,m,w,x){var T,j,A,D,Q,q,le,G,ce,Ee=x.bits,z=0,Z=0,p=0,K=0,xe=0,Y=0,ee=0,V=0,X=0,S=0,L=null,fe=0,oe=new u.Buf16(16),te=new u.Buf16(16),be=null,Oe=0;for(z=0;z<=15;z++)oe[z]=0;for(Z=0;Z<v;Z++)oe[_[E+Z]]++;for(xe=Ee,K=15;1<=K&&oe[K]===0;K--);if(K<xe&&(xe=K),K===0)return M[m++]=20971520,M[m++]=20971520,x.bits=1,0;for(p=1;p<K&&oe[p]===0;p++);for(xe<p&&(xe=p),z=V=1;z<=15;z++)if(V<<=1,(V-=oe[z])<0)return-1;if(0<V&&(P===0||K!==1))return-1;for(te[1]=0,z=1;z<15;z++)te[z+1]=te[z]+oe[z];for(Z=0;Z<v;Z++)_[E+Z]!==0&&(w[te[_[E+Z]]++]=Z);if(q=P===0?(L=be=w,19):P===1?(L=c,fe-=257,be=s,Oe-=257,256):(L=h,be=y,-1),z=p,Q=m,ee=Z=S=0,A=-1,D=(X=1<<(Y=xe))-1,P===1&&852<X||P===2&&592<X)return 1;for(;;){for(le=z-ee,ce=w[Z]<q?(G=0,w[Z]):w[Z]>q?(G=be[Oe+w[Z]],L[fe+w[Z]]):(G=96,0),T=1<<z-ee,p=j=1<<Y;M[Q+(S>>ee)+(j-=T)]=le<<24|G<<16|ce|0,j!==0;);for(T=1<<z-1;S&T;)T>>=1;if(T!==0?(S&=T-1,S+=T):S=0,Z++,--oe[z]==0){if(z===K)break;z=_[E+w[Z]]}if(xe<z&&(S&D)!==A){for(ee===0&&(ee=xe),Q+=p,V=1<<(Y=z-ee);Y+ee<K&&!((V-=oe[Y+ee])<=0);)Y++,V<<=1;if(X+=1<<Y,P===1&&852<X||P===2&&592<X)return 1;M[A=S&D]=xe<<24|Y<<16|Q-m|0}}return S!==0&&(M[Q+S]=z-ee<<24|64<<16|0),x.bits=xe,0}},{"../utils/common":41}],51:[function(l,k,g){k.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(l,k,g){var u=l("../utils/common"),c=0,s=1;function h(b){for(var F=b.length;0<=--F;)b[F]=0}var y=0,P=29,_=256,E=_+1+P,v=30,M=19,m=2*E+1,w=15,x=16,T=7,j=256,A=16,D=17,Q=18,q=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],le=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ce=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ee=new Array(2*(E+2));h(Ee);var z=new Array(2*v);h(z);var Z=new Array(512);h(Z);var p=new Array(256);h(p);var K=new Array(P);h(K);var xe,Y,ee,V=new Array(v);function X(b,F,ne,ie,W){this.static_tree=b,this.extra_bits=F,this.extra_base=ne,this.elems=ie,this.max_length=W,this.has_stree=b&&b.length}function S(b,F){this.dyn_tree=b,this.max_code=0,this.stat_desc=F}function L(b){return b<256?Z[b]:Z[256+(b>>>7)]}function fe(b,F){b.pending_buf[b.pending++]=255&F,b.pending_buf[b.pending++]=F>>>8&255}function oe(b,F,ne){b.bi_valid>x-ne?(b.bi_buf|=F<<b.bi_valid&65535,fe(b,b.bi_buf),b.bi_buf=F>>x-b.bi_valid,b.bi_valid+=ne-x):(b.bi_buf|=F<<b.bi_valid&65535,b.bi_valid+=ne)}function te(b,F,ne){oe(b,ne[2*F],ne[2*F+1])}function be(b,F){for(var ne=0;ne|=1&b,b>>>=1,ne<<=1,0<--F;);return ne>>>1}function Oe(b,F,ne){var ie,W,de=new Array(w+1),ve=0;for(ie=1;ie<=w;ie++)de[ie]=ve=ve+ne[ie-1]<<1;for(W=0;W<=F;W++){var he=b[2*W+1];he!==0&&(b[2*W]=be(de[he]++,he))}}function we(b){var F;for(F=0;F<E;F++)b.dyn_ltree[2*F]=0;for(F=0;F<v;F++)b.dyn_dtree[2*F]=0;for(F=0;F<M;F++)b.bl_tree[2*F]=0;b.dyn_ltree[2*j]=1,b.opt_len=b.static_len=0,b.last_lit=b.matches=0}function Ce(b){8<b.bi_valid?fe(b,b.bi_buf):0<b.bi_valid&&(b.pending_buf[b.pending++]=b.bi_buf),b.bi_buf=0,b.bi_valid=0}function Re(b,F,ne,ie){var W=2*F,de=2*ne;return b[W]<b[de]||b[W]===b[de]&&ie[F]<=ie[ne]}function De(b,F,ne){for(var ie=b.heap[ne],W=ne<<1;W<=b.heap_len&&(W<b.heap_len&&Re(F,b.heap[W+1],b.heap[W],b.depth)&&W++,!Re(F,ie,b.heap[W],b.depth));)b.heap[ne]=b.heap[W],ne=W,W<<=1;b.heap[ne]=ie}function _t(b,F,ne){var ie,W,de,ve,he=0;if(b.last_lit!==0)for(;ie=b.pending_buf[b.d_buf+2*he]<<8|b.pending_buf[b.d_buf+2*he+1],W=b.pending_buf[b.l_buf+he],he++,ie===0?te(b,W,F):(te(b,(de=p[W])+_+1,F),(ve=q[de])!==0&&oe(b,W-=K[de],ve),te(b,de=L(--ie),ne),(ve=le[de])!==0&&oe(b,ie-=V[de],ve)),he<b.last_lit;);te(b,j,F)}function ot(b,F){var ne,ie,W,de=F.dyn_tree,ve=F.stat_desc.static_tree,he=F.stat_desc.has_stree,Pe=F.stat_desc.elems,Ae=-1;for(b.heap_len=0,b.heap_max=m,ne=0;ne<Pe;ne++)de[2*ne]!==0?(b.heap[++b.heap_len]=Ae=ne,b.depth[ne]=0):de[2*ne+1]=0;for(;b.heap_len<2;)de[2*(W=b.heap[++b.heap_len]=Ae<2?++Ae:0)]=1,b.depth[W]=0,b.opt_len--,he&&(b.static_len-=ve[2*W+1]);for(F.max_code=Ae,ne=b.heap_len>>1;1<=ne;ne--)De(b,de,ne);for(W=Pe;ne=b.heap[1],b.heap[1]=b.heap[b.heap_len--],De(b,de,1),ie=b.heap[1],b.heap[--b.heap_max]=ne,b.heap[--b.heap_max]=ie,de[2*W]=de[2*ne]+de[2*ie],b.depth[W]=(b.depth[ne]>=b.depth[ie]?b.depth[ne]:b.depth[ie])+1,de[2*ne+1]=de[2*ie+1]=W,b.heap[1]=W++,De(b,de,1),2<=b.heap_len;);b.heap[--b.heap_max]=b.heap[1],(function(Le,ft){var zt,lt,Pn,He,bn,pr,kt=ft.dyn_tree,Vn=ft.max_code,hr=ft.stat_desc.static_tree,mr=ft.stat_desc.has_stree,gr=ft.stat_desc.extra_bits,Gt=ft.stat_desc.extra_base,bt=ft.stat_desc.max_length,Mn=0;for(He=0;He<=w;He++)Le.bl_count[He]=0;for(kt[2*Le.heap[Le.heap_max]+1]=0,zt=Le.heap_max+1;zt<m;zt++)bt<(He=kt[2*kt[2*(lt=Le.heap[zt])+1]+1]+1)&&(He=bt,Mn++),kt[2*lt+1]=He,Vn<lt||(Le.bl_count[He]++,bn=0,Gt<=lt&&(bn=gr[lt-Gt]),pr=kt[2*lt],Le.opt_len+=pr*(He+bn),mr&&(Le.static_len+=pr*(hr[2*lt+1]+bn)));if(Mn!==0){do{for(He=bt-1;Le.bl_count[He]===0;)He--;Le.bl_count[He]--,Le.bl_count[He+1]+=2,Le.bl_count[bt]--,Mn-=2}while(0<Mn);for(He=bt;He!==0;He--)for(lt=Le.bl_count[He];lt!==0;)Vn<(Pn=Le.heap[--zt])||(kt[2*Pn+1]!==He&&(Le.opt_len+=(He-kt[2*Pn+1])*kt[2*Pn],kt[2*Pn+1]=He),lt--)}})(b,F),Oe(de,Ae,b.bl_count)}function a(b,F,ne){var ie,W,de=-1,ve=F[1],he=0,Pe=7,Ae=4;for(ve===0&&(Pe=138,Ae=3),F[2*(ne+1)+1]=65535,ie=0;ie<=ne;ie++)W=ve,ve=F[2*(ie+1)+1],++he<Pe&&W===ve||(he<Ae?b.bl_tree[2*W]+=he:W!==0?(W!==de&&b.bl_tree[2*W]++,b.bl_tree[2*A]++):he<=10?b.bl_tree[2*D]++:b.bl_tree[2*Q]++,de=W,Ae=(he=0)===ve?(Pe=138,3):W===ve?(Pe=6,3):(Pe=7,4))}function J(b,F,ne){var ie,W,de=-1,ve=F[1],he=0,Pe=7,Ae=4;for(ve===0&&(Pe=138,Ae=3),ie=0;ie<=ne;ie++)if(W=ve,ve=F[2*(ie+1)+1],!(++he<Pe&&W===ve)){if(he<Ae)for(;te(b,W,b.bl_tree),--he!=0;);else W!==0?(W!==de&&(te(b,W,b.bl_tree),he--),te(b,A,b.bl_tree),oe(b,he-3,2)):he<=10?(te(b,D,b.bl_tree),oe(b,he-3,3)):(te(b,Q,b.bl_tree),oe(b,he-11,7));de=W,Ae=(he=0)===ve?(Pe=138,3):W===ve?(Pe=6,3):(Pe=7,4)}}h(V);var $=!1;function O(b,F,ne,ie){oe(b,(y<<1)+(ie?1:0),3),(function(W,de,ve,he){Ce(W),fe(W,ve),fe(W,~ve),u.arraySet(W.pending_buf,W.window,de,ve,W.pending),W.pending+=ve})(b,F,ne)}g._tr_init=function(b){$||((function(){var F,ne,ie,W,de,ve=new Array(w+1);for(W=ie=0;W<P-1;W++)for(K[W]=ie,F=0;F<1<<q[W];F++)p[ie++]=W;for(p[ie-1]=W,W=de=0;W<16;W++)for(V[W]=de,F=0;F<1<<le[W];F++)Z[de++]=W;for(de>>=7;W<v;W++)for(V[W]=de<<7,F=0;F<1<<le[W]-7;F++)Z[256+de++]=W;for(ne=0;ne<=w;ne++)ve[ne]=0;for(F=0;F<=143;)Ee[2*F+1]=8,F++,ve[8]++;for(;F<=255;)Ee[2*F+1]=9,F++,ve[9]++;for(;F<=279;)Ee[2*F+1]=7,F++,ve[7]++;for(;F<=287;)Ee[2*F+1]=8,F++,ve[8]++;for(Oe(Ee,E+1,ve),F=0;F<v;F++)z[2*F+1]=5,z[2*F]=be(F,5);xe=new X(Ee,q,_+1,E,w),Y=new X(z,le,0,v,w),ee=new X(new Array(0),G,0,M,T)})(),$=!0),b.l_desc=new S(b.dyn_ltree,xe),b.d_desc=new S(b.dyn_dtree,Y),b.bl_desc=new S(b.bl_tree,ee),b.bi_buf=0,b.bi_valid=0,we(b)},g._tr_stored_block=O,g._tr_flush_block=function(b,F,ne,ie){var W,de,ve=0;0<b.level?(b.strm.data_type===2&&(b.strm.data_type=(function(he){var Pe,Ae=4093624447;for(Pe=0;Pe<=31;Pe++,Ae>>>=1)if(1&Ae&&he.dyn_ltree[2*Pe]!==0)return c;if(he.dyn_ltree[18]!==0||he.dyn_ltree[20]!==0||he.dyn_ltree[26]!==0)return s;for(Pe=32;Pe<_;Pe++)if(he.dyn_ltree[2*Pe]!==0)return s;return c})(b)),ot(b,b.l_desc),ot(b,b.d_desc),ve=(function(he){var Pe;for(a(he,he.dyn_ltree,he.l_desc.max_code),a(he,he.dyn_dtree,he.d_desc.max_code),ot(he,he.bl_desc),Pe=M-1;3<=Pe&&he.bl_tree[2*ce[Pe]+1]===0;Pe--);return he.opt_len+=3*(Pe+1)+5+5+4,Pe})(b),W=b.opt_len+3+7>>>3,(de=b.static_len+3+7>>>3)<=W&&(W=de)):W=de=ne+5,ne+4<=W&&F!==-1?O(b,F,ne,ie):b.strategy===4||de===W?(oe(b,2+(ie?1:0),3),_t(b,Ee,z)):(oe(b,4+(ie?1:0),3),(function(he,Pe,Ae,Le){var ft;for(oe(he,Pe-257,5),oe(he,Ae-1,5),oe(he,Le-4,4),ft=0;ft<Le;ft++)oe(he,he.bl_tree[2*ce[ft]+1],3);J(he,he.dyn_ltree,Pe-1),J(he,he.dyn_dtree,Ae-1)})(b,b.l_desc.max_code+1,b.d_desc.max_code+1,ve+1),_t(b,b.dyn_ltree,b.dyn_dtree)),we(b),ie&&Ce(b)},g._tr_tally=function(b,F,ne){return b.pending_buf[b.d_buf+2*b.last_lit]=F>>>8&255,b.pending_buf[b.d_buf+2*b.last_lit+1]=255&F,b.pending_buf[b.l_buf+b.last_lit]=255&ne,b.last_lit++,F===0?b.dyn_ltree[2*ne]++:(b.matches++,F--,b.dyn_ltree[2*(p[ne]+_+1)]++,b.dyn_dtree[2*L(F)]++),b.last_lit===b.lit_bufsize-1},g._tr_align=function(b){oe(b,2,3),te(b,j,Ee),(function(F){F.bi_valid===16?(fe(F,F.bi_buf),F.bi_buf=0,F.bi_valid=0):8<=F.bi_valid&&(F.pending_buf[F.pending++]=255&F.bi_buf,F.bi_buf>>=8,F.bi_valid-=8)})(b)}},{"../utils/common":41}],53:[function(l,k,g){k.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(l,k,g){(function(u){(function(c,s){if(!c.setImmediate){var h,y,P,_,E=1,v={},M=!1,m=c.document,w=Object.getPrototypeOf&&Object.getPrototypeOf(c);w=w&&w.setTimeout?w:c,h={}.toString.call(c.process)==="[object process]"?function(A){process.nextTick(function(){T(A)})}:(function(){if(c.postMessage&&!c.importScripts){var A=!0,D=c.onmessage;return c.onmessage=function(){A=!1},c.postMessage("","*"),c.onmessage=D,A}})()?(_="setImmediate$"+Math.random()+"$",c.addEventListener?c.addEventListener("message",j,!1):c.attachEvent("onmessage",j),function(A){c.postMessage(_+A,"*")}):c.MessageChannel?((P=new MessageChannel).port1.onmessage=function(A){T(A.data)},function(A){P.port2.postMessage(A)}):m&&"onreadystatechange"in m.createElement("script")?(y=m.documentElement,function(A){var D=m.createElement("script");D.onreadystatechange=function(){T(A),D.onreadystatechange=null,y.removeChild(D),D=null},y.appendChild(D)}):function(A){setTimeout(T,0,A)},w.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var D=new Array(arguments.length-1),Q=0;Q<D.length;Q++)D[Q]=arguments[Q+1];var q={callback:A,args:D};return v[E]=q,h(E),E++},w.clearImmediate=x}function x(A){delete v[A]}function T(A){if(M)setTimeout(T,0,A);else{var D=v[A];if(D){M=!0;try{(function(Q){var q=Q.callback,le=Q.args;switch(le.length){case 0:q();break;case 1:q(le[0]);break;case 2:q(le[0],le[1]);break;case 3:q(le[0],le[1],le[2]);break;default:q.apply(s,le)}})(D)}finally{x(A),M=!1}}}}function j(A){A.source===c&&typeof A.data=="string"&&A.data.indexOf(_)===0&&T(+A.data.slice(_.length))}})(typeof self>"u"?u===void 0?this:u:self)}).call(this,typeof Sn<"u"?Sn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(ca)),ca.exports}var im=rm();const om=Nc(im);var ho={exports:{}},lm=ho.exports,Tc;function am(){return Tc||(Tc=1,(function(f,C){(function(l,k){k()})(lm,function(){function l(y,P){return typeof P>"u"?P={autoBom:!1}:typeof P!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),P={autoBom:!P}),P.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(y.type)?new Blob(["\uFEFF",y],{type:y.type}):y}function k(y,P,_){var E=new XMLHttpRequest;E.open("GET",y),E.responseType="blob",E.onload=function(){h(E.response,P,_)},E.onerror=function(){console.error("could not download file")},E.send()}function g(y){var P=new XMLHttpRequest;P.open("HEAD",y,!1);try{P.send()}catch{}return 200<=P.status&&299>=P.status}function u(y){try{y.dispatchEvent(new MouseEvent("click"))}catch{var P=document.createEvent("MouseEvents");P.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),y.dispatchEvent(P)}}var c=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Sn=="object"&&Sn.global===Sn?Sn:void 0,s=c.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=c.saveAs||(typeof window!="object"||window!==c?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(y,P,_){var E=c.URL||c.webkitURL,v=document.createElement("a");P=P||y.name||"download",v.download=P,v.rel="noopener",typeof y=="string"?(v.href=y,v.origin===location.origin?u(v):g(v.href)?k(y,P,_):u(v,v.target="_blank")):(v.href=E.createObjectURL(y),setTimeout(function(){E.revokeObjectURL(v.href)},4e4),setTimeout(function(){u(v)},0))}:"msSaveOrOpenBlob"in navigator?function(y,P,_){if(P=P||y.name||"download",typeof y!="string")navigator.msSaveOrOpenBlob(l(y,_),P);else if(g(y))k(y,P,_);else{var E=document.createElement("a");E.href=y,E.target="_blank",setTimeout(function(){u(E)})}}:function(y,P,_,E){if(E=E||open("","_blank"),E&&(E.document.title=E.document.body.innerText="downloading..."),typeof y=="string")return k(y,P,_);var v=y.type==="application/octet-stream",M=/constructor/i.test(c.HTMLElement)||c.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||v&&M||s)&&typeof FileReader<"u"){var w=new FileReader;w.onloadend=function(){var j=w.result;j=m?j:j.replace(/^data:[^;]*;/,"data:attachment/file;"),E?E.location.href=j:location=j,E=null},w.readAsDataURL(y)}else{var x=c.URL||c.webkitURL,T=x.createObjectURL(y);E?E.location=T:location.href=T,E=null,setTimeout(function(){x.revokeObjectURL(T)},4e4)}});c.saveAs=h.saveAs=h,f.exports=h})})(ho)),ho.exports}var sm=am();function um(){var _;const{folder:f}=Ap(),{currentPlugin:C,isLoading:l,error:k,fetchPluginDetail:g,clearCurrentPlugin:u}=Xc(),[c,s]=me.useState(!1),[h,y]=me.useState(!1);me.useEffect(()=>(f&&g(f),()=>{u()}),[f,g,u]);const P=async()=>{if(C){s(!0);try{const E=new om;if(C.pluginFiles)for(const[M,m]of Object.entries(C.pluginFiles))E.file(M,m);const v=await E.generateAsync({type:"blob"});sm.saveAs(v,`${C.folder}.zip`),y(!0),setTimeout(()=>y(!1),3e3)}catch(E){console.error("Failed to create zip:",E)}finally{s(!1)}}};return l?re.jsx("div",{className:"flex min-h-[60vh] items-center justify-center",children:re.jsx(ef,{size:"md",text:"加载插件详情..."})}):k||!C?re.jsx("div",{className:"min-h-[60vh]",children:re.jsx(ya,{icon:"error",title:"加载失败",description:k||"插件不存在",action:re.jsx(go,{to:"/",className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",children:"返回列表"})})}):re.jsx("div",{className:"min-h-screen bg-white",children:re.jsxs("div",{className:"max-w-3xl mx-auto px-4 py-6 sm:py-8",children:[re.jsxs(go,{to:"/",className:"inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-6",children:[re.jsx(gh,{className:"h-4 w-4"}),"返回插件列表"]}),re.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[re.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[re.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-md bg-gray-100 text-gray-700 font-semibold",children:C.name.charAt(0)}),re.jsxs("div",{className:"flex-1",children:[re.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[re.jsx("h1",{className:"text-xl font-bold text-gray-900",children:C.name}),re.jsxs("span",{className:"text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded",children:["v",C.version]})]}),re.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500",children:[re.jsx(Gc,{className:"h-4 w-4"}),C.author]})]})]}),re.jsx("p",{className:"text-gray-600",children:C.description||"暂无描述"})]}),re.jsxs("div",{className:"rounded-md border border-gray-200 p-5 mb-6",children:[re.jsx("h2",{className:"text-sm font-semibold text-gray-900 mb-2",children:"下载插件"}),re.jsx("p",{className:"text-gray-600 text-sm mb-4",children:"下载包含所有文件的完整插件压缩包"}),re.jsx("button",{onClick:P,disabled:c,className:"w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed",children:c?re.jsxs(re.Fragment,{children:[re.jsx($c,{className:"h-4 w-4 animate-spin"}),"正在打包..."]}):h?re.jsxs(re.Fragment,{children:[re.jsx(Vc,{className:"h-4 w-4"}),"下载成功"]}):re.jsxs(re.Fragment,{children:[re.jsx(kh,{className:"h-4 w-4"}),"下载插件压缩包"]})})]}),((_=C.pluginFiles)==null?void 0:_["README.md"])&&re.jsxs("div",{className:"rounded-md border border-gray-200 p-5",children:[re.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[re.jsx(Ch,{className:"h-4 w-4 text-gray-500"}),re.jsx("h2",{className:"text-sm font-semibold text-gray-900",children:"插件说明"})]}),re.jsx("pre",{className:"whitespace-pre-wrap text-sm text-gray-600 bg-gray-50 rounded-md p-4 font-mono leading-relaxed",children:C.pluginFiles["README.md"]})]})]})})}function cm(){return re.jsx(lh,{children:re.jsxs("div",{className:"min-h-screen bg-white",children:[re.jsx(Rh,{}),re.jsx("main",{children:re.jsxs(Xp,{children:[re.jsx(da,{path:"/",element:re.jsx(nm,{})}),re.jsx(da,{path:"/plugin/:folder",element:re.jsx(um,{})})]})})]})})}op.createRoot(document.getElementById("root")).render(re.jsx(me.StrictMode,{children:re.jsx(cm,{})}));
