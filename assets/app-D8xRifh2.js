const __vite__fileDeps=["assets/index.html-DWv8dnjX.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/intro.html-B6K7pmzQ.js","assets/MPJ的使用.html-Dg4SQLRV.js","assets/MP的使用.html-C7QRvoir.js","assets/Mybatis的使用.html--c50lHmI.js","assets/PageHelper的使用.html-CRoYTrPn.js","assets/index.html-DAlGd_ow.js","assets/lombok.html-ChwbGtNt.js","assets/实体类说明.html-BAmK1x3I.js","assets/开发示例.html-Cf1bCxl3.js","assets/网络地址的使用.html--zGDohFO.js","assets/index.html-CBs6KTaS.js","assets/Vue VSCode Snippets插件.html-BFsA_LFY.js","assets/jeecgboot vue3.html-Sk9Z5fvl.js","assets/json-server.html-Dm42D6qC.js","assets/js实现数据本地存储.html-C-WsCVZb.js","assets/js遍历数组.html-B9pSAUTL.js","assets/vue2基本概念.html-CUoQ-loZ.js","assets/小诺vue3.html-DcdEMjvj.js","assets/开发示例.html-YTMjbMyx.js","assets/若依vue2.html-to85Qukn.js","assets/index.html-DFrojXQ_.js","assets/官网和文档链接.html-COG6jbBM.js","assets/返回顶部（油猴脚本）.html-m98R54Uv.js","assets/index.html-DpD8kij2.js","assets/宝塔面板.html-oBi3Petc.js","assets/运维示例.html-Cl08Jn0Z.js","assets/index.html-C354Tm2X.js","assets/index.html-qKRYqZ1p.js","assets/vue概述.html-C1P3q4Ar.js","assets/安装依赖.html-C94mwYGd.js","assets/index.html-Bn8ZZphJ.js","assets/命令.html-CleJmJHj.js","assets/安装tomcat.html-CEVO1nnz.js","assets/部署war包.html-B_AhF_c2.js","assets/index.html-Br1kz7B9.js","assets/安装JAVA开发环境.html-CIwnuF-S.js","assets/安装JDK.html-j9PHh8vg.js","assets/安装nvm.html-ywqyD4BY.js","assets/软件安装路径说明.html-D8t2VFFm.js","assets/通过压缩包安装软件.html-DhGBS9dU.js","assets/通过安装包安装软件.html-ChMhsIIU.js","assets/index.html-2Xg2oDDI.js","assets/json.html-DLNZ01Qt.js","assets/时间.html-DEzJ0R9W.js","assets/index.html-DwnT41Ad.js","assets/redisConfig.html-CzZLkv-7.js","assets/常见命令.html-DmoNA9ZF.js","assets/操作命令.html-BARQZEWD.js","assets/配置解析.html-z9aFoW2H.js","assets/404.html-CmIn89xY.js","assets/index.html-C1u2AqOk.js","assets/index.html-BacYfVVu.js","assets/index.html-CuLbx3H4.js","assets/index.html-DW8q-bZ-.js","assets/index.html-DmBDsK1J.js","assets/index.html-lMASykL6.js","assets/index.html-cR54gkc7.js","assets/index.html-BLnf7a_d.js","assets/index.html-aho0HDw1.js","assets/index.html-BEDbtuu3.js","assets/index.html-D8B3jqsd.js","assets/index.html-B_qwvknT.js","assets/index.html-CxAI1aav.js","assets/index.html-BqaEL1N-.js","assets/index.html-BvOzQv8I.js","assets/index.html-2YCE-W0p.js","assets/index.html-BEvk-ryv.js","assets/index.html-D84li-X_.js","assets/index.html-J1Mlb2hv.js","assets/index.html-B8rgon-H.js","assets/index.html-DVBtBaGi.js","assets/index.html-B2QW5JCL.js","assets/index.html-9TTkJybH.js","assets/index.html-DzQMD4ik.js","assets/index.html-D8KuPMaz.js","assets/index.html-B1Xq6ONe.js","assets/index.html-Dm-dntDZ.js","assets/index.html-CYcsEa1S.js","assets/index.html-CdXddHDb.js","assets/index.html-BZDu7E-j.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ra(e,t){const n=new Set(e.split(","));return s=>n.has(s)}const we={},mn=[],Qe=()=>{},yu=()=>!1,ss=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),la=e=>e.startsWith("onUpdate:"),Ce=Object.assign,ca=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bu=Object.prototype.hasOwnProperty,le=(e,t)=>bu.call(e,t),Z=Array.isArray,On=e=>Zs(e)==="[object Map]",wu=e=>Zs(e)==="[object Set]",ne=e=>typeof e=="function",Be=e=>typeof e=="string",os=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",mr=e=>(ke(e)||ne(e))&&ne(e.then)&&ne(e.catch),Eu=Object.prototype.toString,Zs=e=>Eu.call(e),_u=e=>Zs(e).slice(8,-1),ku=e=>Zs(e)==="[object Object]",ua=e=>Be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Au=/-(\w)/g,nt=Qs(e=>e.replace(Au,(t,n)=>n?n.toUpperCase():"")),Tu=/\B([A-Z])/g,kn=Qs(e=>e.replace(Tu,"-$1").toLowerCase()),as=Qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),mo=Qs(e=>e?`on${as(e)}`:""),Ht=(e,t)=>!Object.is(e,t),go=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gr=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},xu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Su=e=>{const t=Be(e)?Number(e):NaN;return isNaN(t)?e:t};let Qa;const vr=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(e){if(Z(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Be(s)?Iu(s):da(s);if(o)for(const a in o)t[a]=o[a]}return t}else if(Be(e)||ke(e))return e}const Cu=/;(?![^(]*\))/g,Ru=/:([^]+)/,Lu=/\/\*[^]*?\*\//g;function Iu(e){const t={};return e.replace(Lu,"").split(Cu).forEach(n=>{if(n){const s=n.split(Ru);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function fa(e){let t="";if(Be(e))t=e;else if(Z(e))for(let n=0;n<e.length;n++){const s=fa(e[n]);s&&(t+=s+" ")}else if(ke(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ou=ra(Bu);function yr(e){return!!e||e===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ke;class Pu{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function Du(e,t=Ke){t&&t.active&&t.effects.push(e)}function br(){return Ke}function Nu(e){Ke&&Ke.cleanups.push(e)}let tn;class ha{constructor(t,n,s,o){this.fn=t,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Du(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Vt();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Mu(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Ut()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Mt,n=tn;try{return Mt=!0,tn=this,this._runnings++,ei(this),this.fn()}finally{ti(this),this._runnings--,tn=n,Mt=t}}stop(){this.active&&(ei(this),ti(this),this.onStop&&this.onStop(),this.active=!1)}}function Mu(e){return e.value}function ei(e){e._trackId++,e._depsLength=0}function ti(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)wr(e.deps[t],e);e.deps.length=e._depsLength}}function wr(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Mt=!0,Do=0;const Er=[];function Vt(){Er.push(Mt),Mt=!1}function Ut(){const e=Er.pop();Mt=e===void 0?!0:e}function pa(){Do++}function ma(){for(Do--;!Do&&No.length;)No.shift()()}function _r(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const s=e.deps[e._depsLength];s!==t?(s&&wr(s,e),e.deps[e._depsLength++]=t):e._depsLength++}}const No=[];function kr(e,t,n){pa();for(const s of e.keys()){let o;s._dirtyLevel<t&&(o??(o=e.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=t),s._shouldSchedule&&(o??(o=e.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&No.push(s.scheduler)))}ma()}const Ar=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Us=new WeakMap,nn=Symbol(""),Mo=Symbol("");function Ge(e,t,n){if(Mt&&tn){let s=Us.get(e);s||Us.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=Ar(()=>s.delete(n))),_r(tn,o)}}function _t(e,t,n,s,o,a){const i=Us.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&Z(e)){const c=Number(s);i.forEach((u,d)=>{(d==="length"||!os(d)&&d>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":Z(e)?ua(n)&&l.push(i.get("length")):(l.push(i.get(nn)),On(e)&&l.push(i.get(Mo)));break;case"delete":Z(e)||(l.push(i.get(nn)),On(e)&&l.push(i.get(Mo)));break;case"set":On(e)&&l.push(i.get(nn));break}pa();for(const c of l)c&&kr(c,4);ma()}function Fu(e,t){const n=Us.get(e);return n&&n.get(t)}const Hu=ra("__proto__,__v_isRef,__isVue"),Tr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(os)),ni=zu();function zu(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ce(this);for(let a=0,i=this.length;a<i;a++)Ge(s,"get",a+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(ce)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Vt(),pa();const s=ce(this)[t].apply(this,n);return ma(),Ut(),s}}),e}function $u(e){os(e)||(e=String(e));const t=ce(this);return Ge(t,"has",e),t.hasOwnProperty(e)}class xr{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const o=this._isReadonly,a=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return a;if(n==="__v_raw")return s===(o?a?ed:Lr:a?Rr:Cr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const i=Z(t);if(!o){if(i&&le(ni,n))return Reflect.get(ni,n,s);if(n==="hasOwnProperty")return $u}const l=Reflect.get(t,n,s);return(os(n)?Tr.has(n):Hu(n))||(o||Ge(t,"get",n),a)?l:Oe(l)?i&&ua(n)?l:l.value:ke(l)?o?an(l):is(l):l}}class Sr extends xr{constructor(t=!1){super(!1,t)}set(t,n,s,o){let a=t[n];if(!this._isShallow){const c=Vn(a);if(!qs(s)&&!Vn(s)&&(a=ce(a),s=ce(s)),!Z(t)&&Oe(a)&&!Oe(s))return c?!1:(a.value=s,!0)}const i=Z(t)&&ua(n)?Number(n)<t.length:le(t,n),l=Reflect.set(t,n,s,o);return t===ce(o)&&(i?Ht(s,a)&&_t(t,"set",n,s):_t(t,"add",n,s)),l}deleteProperty(t,n){const s=le(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&_t(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!os(n)||!Tr.has(n))&&Ge(t,"has",n),s}ownKeys(t){return Ge(t,"iterate",Z(t)?"length":nn),Reflect.ownKeys(t)}}class ju extends xr{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Vu=new Sr,Uu=new ju,qu=new Sr(!0);const ga=e=>e,eo=e=>Reflect.getPrototypeOf(e);function Ss(e,t,n=!1,s=!1){e=e.__v_raw;const o=ce(e),a=ce(t);n||(Ht(t,a)&&Ge(o,"get",t),Ge(o,"get",a));const{has:i}=eo(o),l=s?ga:n?ba:Un;if(i.call(o,t))return l(e.get(t));if(i.call(o,a))return l(e.get(a));e!==o&&e.get(t)}function Cs(e,t=!1){const n=this.__v_raw,s=ce(n),o=ce(e);return t||(Ht(e,o)&&Ge(s,"has",e),Ge(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Rs(e,t=!1){return e=e.__v_raw,!t&&Ge(ce(e),"iterate",nn),Reflect.get(e,"size",e)}function si(e){e=ce(e);const t=ce(this);return eo(t).has.call(t,e)||(t.add(e),_t(t,"add",e,e)),this}function oi(e,t){t=ce(t);const n=ce(this),{has:s,get:o}=eo(n);let a=s.call(n,e);a||(e=ce(e),a=s.call(n,e));const i=o.call(n,e);return n.set(e,t),a?Ht(t,i)&&_t(n,"set",e,t):_t(n,"add",e,t),this}function ai(e){const t=ce(this),{has:n,get:s}=eo(t);let o=n.call(t,e);o||(e=ce(e),o=n.call(t,e)),s&&s.call(t,e);const a=t.delete(e);return o&&_t(t,"delete",e,void 0),a}function ii(){const e=ce(this),t=e.size!==0,n=e.clear();return t&&_t(e,"clear",void 0,void 0),n}function Ls(e,t){return function(s,o){const a=this,i=a.__v_raw,l=ce(i),c=t?ga:e?ba:Un;return!e&&Ge(l,"iterate",nn),i.forEach((u,d)=>s.call(o,c(u),c(d),a))}}function Is(e,t,n){return function(...s){const o=this.__v_raw,a=ce(o),i=On(a),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...s),d=n?ga:t?ba:Un;return!t&&Ge(a,"iterate",c?Mo:nn),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:l?[d(f[0]),d(f[1])]:d(f),done:h}},[Symbol.iterator](){return this}}}}function Ct(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Gu(){const e={get(a){return Ss(this,a)},get size(){return Rs(this)},has:Cs,add:si,set:oi,delete:ai,clear:ii,forEach:Ls(!1,!1)},t={get(a){return Ss(this,a,!1,!0)},get size(){return Rs(this)},has:Cs,add:si,set:oi,delete:ai,clear:ii,forEach:Ls(!1,!0)},n={get(a){return Ss(this,a,!0)},get size(){return Rs(this,!0)},has(a){return Cs.call(this,a,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Ls(!0,!1)},s={get(a){return Ss(this,a,!0,!0)},get size(){return Rs(this,!0)},has(a){return Cs.call(this,a,!0)},add:Ct("add"),set:Ct("set"),delete:Ct("delete"),clear:Ct("clear"),forEach:Ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Is(a,!1,!1),n[a]=Is(a,!0,!1),t[a]=Is(a,!1,!0),s[a]=Is(a,!0,!0)}),[e,n,t,s]}const[Wu,Ku,Yu,Ju]=Gu();function va(e,t){const n=t?e?Ju:Yu:e?Ku:Wu;return(s,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(le(n,o)&&o in s?n:s,o,a)}const Xu={get:va(!1,!1)},Zu={get:va(!1,!0)},Qu={get:va(!0,!1)};const Cr=new WeakMap,Rr=new WeakMap,Lr=new WeakMap,ed=new WeakMap;function td(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nd(e){return e.__v_skip||!Object.isExtensible(e)?0:td(_u(e))}function is(e){return Vn(e)?e:ya(e,!1,Vu,Xu,Cr)}function Ir(e){return ya(e,!1,qu,Zu,Rr)}function an(e){return ya(e,!0,Uu,Qu,Lr)}function ya(e,t,n,s,o){if(!ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=nd(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function Pn(e){return Vn(e)?Pn(e.__v_raw):!!(e&&e.__v_isReactive)}function Vn(e){return!!(e&&e.__v_isReadonly)}function qs(e){return!!(e&&e.__v_isShallow)}function Br(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function sd(e){return Object.isExtensible(e)&&gr(e,"__v_skip",!0),e}const Un=e=>ke(e)?is(e):e,ba=e=>ke(e)?an(e):e;class Or{constructor(t,n,s,o){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ha(()=>t(this._value),()=>Dn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=ce(this);return(!t._cacheable||t.effect.dirty)&&Ht(t._value,t._value=t.effect.run())&&Dn(t,4),wa(t),t.effect._dirtyLevel>=2&&Dn(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function od(e,t,n=!1){let s,o;const a=ne(e);return a?(s=e,o=Qe):(s=e.get,o=e.set),new Or(s,o,a||!o,n)}function wa(e){var t;Mt&&tn&&(e=ce(e),_r(tn,(t=e.dep)!=null?t:e.dep=Ar(()=>e.dep=void 0,e instanceof Or?e:void 0)))}function Dn(e,t=4,n){e=ce(e);const s=e.dep;s&&kr(s,t)}function Oe(e){return!!(e&&e.__v_isRef===!0)}function te(e){return Pr(e,!1)}function $e(e){return Pr(e,!0)}function Pr(e,t){return Oe(e)?e:new ad(e,t)}class ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ce(t),this._value=n?t:Un(t)}get value(){return wa(this),this._value}set value(t){const n=this.__v_isShallow||qs(t)||Vn(t);t=n?t:ce(t),Ht(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Un(t),Dn(this,4))}}function sn(e){return Oe(e)?e.value:e}const id={get:(e,t,n)=>sn(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return Oe(o)&&!Oe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Dr(e){return Pn(e)?e:new Proxy(e,id)}class rd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>wa(this),()=>Dn(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Ea(e){return new rd(e)}class ld{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Fu(ce(this._object),this._key)}}class cd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function An(e,t,n){return Oe(e)?e:ne(e)?new cd(e):ke(e)&&arguments.length>1?ud(e,t,n):te(e)}function ud(e,t,n){const s=e[t];return Oe(s)?s:new ld(e,t,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ft(e,t,n,s){try{return s?e(...s):e()}catch(o){rs(o,t,n)}}function tt(e,t,n,s){if(ne(e)){const o=Ft(e,t,n,s);return o&&mr(o)&&o.catch(a=>{rs(a,t,n)}),o}if(Z(e)){const o=[];for(let a=0;a<e.length;a++)o.push(tt(e[a],t,n,s));return o}}function rs(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let a=t.parent;const i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,l)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){Vt(),Ft(c,null,10,[e,i,l]),Ut();return}}dd(e,n,o,s)}function dd(e,t,n,s=!0){console.error(e)}let qn=!1,Fo=!1;const Fe=[];let pt=0;const vn=[];let Bt=null,Zt=0;const Nr=Promise.resolve();let _a=null;function qt(e){const t=_a||Nr;return e?t.then(this?e.bind(this):e):t}function fd(e){let t=pt+1,n=Fe.length;for(;t<n;){const s=t+n>>>1,o=Fe[s],a=Gn(o);a<e||a===e&&o.pre?t=s+1:n=s}return t}function to(e){(!Fe.length||!Fe.includes(e,qn&&e.allowRecurse?pt+1:pt))&&(e.id==null?Fe.push(e):Fe.splice(fd(e.id),0,e),Mr())}function Mr(){!qn&&!Fo&&(Fo=!0,_a=Nr.then(Fr))}function hd(e){const t=Fe.indexOf(e);t>pt&&Fe.splice(t,1)}function pd(e){Z(e)?vn.push(...e):(!Bt||!Bt.includes(e,e.allowRecurse?Zt+1:Zt))&&vn.push(e),Mr()}function ri(e,t,n=qn?pt+1:0){for(;n<Fe.length;n++){const s=Fe[n];if(s&&s.pre){if(e&&s.id!==e.uid)continue;Fe.splice(n,1),n--,s()}}}function Gs(e){if(vn.length){const t=[...new Set(vn)].sort((n,s)=>Gn(n)-Gn(s));if(vn.length=0,Bt){Bt.push(...t);return}for(Bt=t,Zt=0;Zt<Bt.length;Zt++)Bt[Zt]();Bt=null,Zt=0}}const Gn=e=>e.id==null?1/0:e.id,md=(e,t)=>{const n=Gn(e)-Gn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Fr(e){Fo=!1,qn=!0,Fe.sort(md);try{for(pt=0;pt<Fe.length;pt++){const t=Fe[pt];t&&t.active!==!1&&Ft(t,null,14)}}finally{pt=0,Fe.length=0,Gs(),qn=!1,_a=null,(Fe.length||vn.length)&&Fr()}}function gd(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||we;let o=n;const a=t.startsWith("update:"),i=a&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:h}=s[d]||we;h&&(o=n.map(p=>Be(p)?p.trim():p)),f&&(o=n.map(xu))}let l,c=s[l=mo(t)]||s[l=mo(nt(t))];!c&&a&&(c=s[l=mo(kn(t))]),c&&tt(c,e,6,o);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,tt(u,e,6,o)}}function Hr(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!ne(e)){const c=u=>{const d=Hr(u,t,!0);d&&(l=!0,Ce(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(ke(e)&&s.set(e,null),null):(Z(a)?a.forEach(c=>i[c]=null):Ce(i,a),ke(e)&&s.set(e,i),i)}function no(e,t){return!e||!ss(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,kn(t))||le(e,t))}let et=null,zr=null;function Ws(e){const t=et;return et=e,zr=e&&e.type.__scopeId||null,t}function vd(e,t=et,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&bi(-1);const a=Ws(t);let i;try{i=e(...o)}finally{Ws(a),s._d&&bi(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function vo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[a],slots:i,attrs:l,emit:c,render:u,renderCache:d,props:f,data:h,setupState:p,ctx:v,inheritAttrs:E}=e,k=Ws(e);let b,A;try{if(n.shapeFlag&4){const w=o||s,D=w;b=at(u.call(D,w,d,f,p,h,v)),A=l}else{const w=t;b=at(w.length>1?w(f,{attrs:l,slots:i,emit:c}):w(f,null)),A=t.props?l:yd(l)}}catch(w){zn.length=0,rs(w,e,1),b=Se(Je)}let y=b;if(A&&E!==!1){const w=Object.keys(A),{shapeFlag:D}=y;w.length&&D&7&&(a&&w.some(la)&&(A=bd(A,a)),y=zt(y,A,!1,!0))}return n.dirs&&(y=zt(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),b=y,Ws(k),b}const yd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ss(n))&&((t||(t={}))[n]=e[n]);return t},bd=(e,t)=>{const n={};for(const s in e)(!la(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function wd(e,t,n){const{props:s,children:o,component:a}=e,{props:i,children:l,patchFlag:c}=t,u=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?li(s,i,u):!!i;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const h=d[f];if(i[h]!==s[h]&&!no(u,h))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?li(s,i,u):!0:!!i;return!1}function li(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const a=s[o];if(t[a]!==e[a]&&!no(n,a))return!0}return!1}function Ed({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const $r="components";function rt(e,t){return kd($r,e,!0,t)||e}const _d=Symbol.for("v-ndc");function kd(e,t,n=!0,s=!1){const o=et||Ie;if(o){const a=o.type;if(e===$r){const l=wf(a,!1);if(l&&(l===t||l===nt(t)||l===as(nt(t))))return a}const i=ci(o[e]||a[e],t)||ci(o.appContext[e],t);return!i&&s?a:i}}function ci(e,t){return e&&(e[t]||e[nt(t)]||e[as(nt(t))])}const Ad=e=>e.__isSuspense;function jr(e,t){t&&t.pendingBranch?Z(e)?t.effects.push(...e):t.effects.push(e):pd(e)}const Td=Symbol.for("v-scx"),xd=()=>Ee(Td);function Vr(e,t){return ka(e,null,t)}const Bs={};function ue(e,t,n){return ka(e,t,n)}function ka(e,t,{immediate:n,deep:s,flush:o,once:a,onTrack:i,onTrigger:l}=we){if(t&&a){const B=t;t=(...H)=>{B(...H),D()}}const c=Ie,u=B=>s===!0?B:pn(B,s===!1?1:void 0);let d,f=!1,h=!1;if(Oe(e)?(d=()=>e.value,f=qs(e)):Pn(e)?(d=()=>u(e),f=!0):Z(e)?(h=!0,f=e.some(B=>Pn(B)||qs(B)),d=()=>e.map(B=>{if(Oe(B))return B.value;if(Pn(B))return u(B);if(ne(B))return Ft(B,c,2)})):ne(e)?t?d=()=>Ft(e,c,2):d=()=>(p&&p(),tt(e,c,3,[v])):d=Qe,t&&s){const B=d;d=()=>pn(B())}let p,v=B=>{p=y.onStop=()=>{Ft(B,c,4),p=y.onStop=void 0}},E;if(ds)if(v=Qe,t?n&&tt(t,c,3,[d(),h?[]:void 0,v]):d(),o==="sync"){const B=xd();E=B.__watcherHandles||(B.__watcherHandles=[])}else return Qe;let k=h?new Array(e.length).fill(Bs):Bs;const b=()=>{if(!(!y.active||!y.dirty))if(t){const B=y.run();(s||f||(h?B.some((H,O)=>Ht(H,k[O])):Ht(B,k)))&&(p&&p(),tt(t,c,3,[B,k===Bs?void 0:h&&k[0]===Bs?[]:k,v]),k=B)}else y.run()};b.allowRecurse=!!t;let A;o==="sync"?A=b:o==="post"?A=()=>Ve(b,c&&c.suspense):(b.pre=!0,c&&(b.id=c.uid),A=()=>to(b));const y=new ha(d,Qe,A),w=br(),D=()=>{y.stop(),w&&ca(w.effects,y)};return t?n?b():k=y.run():o==="post"?Ve(y.run.bind(y),c&&c.suspense):y.run(),E&&E.push(D),D}function Sd(e,t,n){const s=this.proxy,o=Be(e)?e.includes(".")?Ur(s,e):()=>s[e]:e.bind(s,s);let a;ne(t)?a=t:(a=t.handler,n=t);const i=us(this),l=ka(o,a.bind(s),n);return i(),l}function Ur(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function pn(e,t=1/0,n){if(t<=0||!ke(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Oe(e))pn(e.value,t,n);else if(Z(e))for(let s=0;s<e.length;s++)pn(e[s],t,n);else if(wu(e)||On(e))e.forEach(s=>{pn(s,t,n)});else if(ku(e))for(const s in e)pn(e[s],t,n);return e}function ht(e,t,n,s){const o=e.dirs,a=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let c=l.dir[s];c&&(Vt(),tt(c,n,8,[e.el,l,e,t]),Ut())}}const Ot=Symbol("_leaveCb"),Os=Symbol("_enterCb");function qr(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Re(()=>{e.isMounted=!0}),Jr(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Gr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},Cd={name:"BaseTransition",props:Gr,setup(e,{slots:t}){const n=cs(),s=qr();return()=>{const o=t.default&&Aa(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){for(const h of o)if(h.type!==Je){a=h;break}}const i=ce(e),{mode:l}=i;if(s.isLeaving)return yo(a);const c=ui(a);if(!c)return yo(a);const u=Wn(c,i,s,n);Kn(c,u);const d=n.subTree,f=d&&ui(d);if(f&&f.type!==Je&&!Qt(c,f)){const h=Wn(f,i,s,n);if(Kn(f,h),l==="out-in"&&c.type!==Je)return s.isLeaving=!0,h.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},yo(a);l==="in-out"&&c.type!==Je&&(h.delayLeave=(p,v,E)=>{const k=Wr(s,f);k[String(f.key)]=f,p[Ot]=()=>{v(),p[Ot]=void 0,delete u.delayedLeave},u.delayedLeave=E})}return a}}},Rd=Cd;function Wr(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Wn(e,t,n,s){const{appear:o,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:E,onAppear:k,onAfterAppear:b,onAppearCancelled:A}=t,y=String(e.key),w=Wr(n,e),D=(O,Y)=>{O&&tt(O,s,9,Y)},B=(O,Y)=>{const L=Y[1];D(O,Y),Z(O)?O.every(J=>J.length<=1)&&L():O.length<=1&&L()},H={mode:a,persisted:i,beforeEnter(O){let Y=l;if(!n.isMounted)if(o)Y=E||l;else return;O[Ot]&&O[Ot](!0);const L=w[y];L&&Qt(e,L)&&L.el[Ot]&&L.el[Ot](),D(Y,[O])},enter(O){let Y=c,L=u,J=d;if(!n.isMounted)if(o)Y=k||c,L=b||u,J=A||d;else return;let N=!1;const Q=O[Os]=Te=>{N||(N=!0,Te?D(J,[O]):D(L,[O]),H.delayedLeave&&H.delayedLeave(),O[Os]=void 0)};Y?B(Y,[O,Q]):Q()},leave(O,Y){const L=String(e.key);if(O[Os]&&O[Os](!0),n.isUnmounting)return Y();D(f,[O]);let J=!1;const N=O[Ot]=Q=>{J||(J=!0,Y(),Q?D(v,[O]):D(p,[O]),O[Ot]=void 0,w[L]===e&&delete w[L])};w[L]=e,h?B(h,[O,N]):N()},clone(O){return Wn(O,t,n,s)}};return H}function yo(e){if(ls(e))return e=zt(e),e.children=null,e}function ui(e){if(!ls(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ne(n.default))return n.default()}}function Kn(e,t){e.shapeFlag&6&&e.component?Kn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Aa(e,t=!1,n){let s=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===Ye?(i.patchFlag&128&&o++,s=s.concat(Aa(i.children,t,l))):(t||i.type!==Je)&&s.push(l!=null?zt(i,{key:l}):i)}if(o>1)for(let a=0;a<s.length;a++)s[a].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function j(e,t){return ne(e)?Ce({name:e.name},t,{setup:e}):e}const Nn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ld(e){ne(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,timeout:a,suspensible:i=!0,onError:l}=e;let c=null,u,d=0;const f=()=>(d++,c=null,h()),h=()=>{let p;return c||(p=c=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((E,k)=>{l(v,()=>E(f()),()=>k(v),d+1)});throw v}).then(v=>p!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),u=v,v)))};return j({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return u},setup(){const p=Ie;if(u)return()=>bo(u,p);const v=A=>{c=null,rs(A,p,13,!s)};if(i&&p.suspense||ds)return h().then(A=>()=>bo(A,p)).catch(A=>(v(A),()=>s?Se(s,{error:A}):null));const E=te(!1),k=te(),b=te(!!o);return o&&setTimeout(()=>{b.value=!1},o),a!=null&&setTimeout(()=>{if(!E.value&&!k.value){const A=new Error(`Async component timed out after ${a}ms.`);v(A),k.value=A}},a),h().then(()=>{E.value=!0,p.parent&&ls(p.parent.vnode)&&(p.parent.effect.dirty=!0,to(p.parent.update))}).catch(A=>{v(A),k.value=A}),()=>{if(E.value&&u)return bo(u,p);if(k.value&&s)return Se(s,{error:k.value});if(n&&!b.value)return Se(n)}}})}function bo(e,t){const{ref:n,props:s,children:o,ce:a}=t.vnode,i=Se(e,s,o);return i.ref=n,i.ce=a,delete t.vnode.ce,i}const ls=e=>e.type.__isKeepAlive;function Id(e,t){Kr(e,"a",t)}function Bd(e,t){Kr(e,"da",t)}function Kr(e,t,n=Ie){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(so(t,s,n),n){let o=n.parent;for(;o&&o.parent;)ls(o.parent.vnode)&&Od(s,t,n,o),o=o.parent}}function Od(e,t,n,s){const o=so(t,e,s,!0);Tn(()=>{ca(s[t],o)},n)}function so(e,t,n=Ie,s=!1){if(n){const o=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Vt();const l=us(n),c=tt(t,n,e,i);return l(),Ut(),c});return s?o.unshift(a):o.push(a),a}}const At=e=>(t,n=Ie)=>(!ds||e==="sp")&&so(e,(...s)=>t(...s),n),Pd=At("bm"),Re=At("m"),Dd=At("bu"),Yr=At("u"),Jr=At("bum"),Tn=At("um"),Nd=At("sp"),Md=At("rtg"),Fd=At("rtc");function Hd(e,t=Ie){so("ec",e,t)}const Ho=e=>e?pl(e)?Ca(e)||e.proxy:Ho(e.parent):null,Mn=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ho(e.parent),$root:e=>Ho(e.root),$emit:e=>e.emit,$options:e=>Ta(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,to(e.update)}),$nextTick:e=>e.n||(e.n=qt.bind(e.proxy)),$watch:e=>Sd.bind(e)}),wo=(e,t)=>e!==we&&!e.__isScriptSetup&&le(e,t),zd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:i,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const p=i[t];if(p!==void 0)switch(p){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(wo(s,t))return i[t]=1,s[t];if(o!==we&&le(o,t))return i[t]=2,o[t];if((u=e.propsOptions[0])&&le(u,t))return i[t]=3,a[t];if(n!==we&&le(n,t))return i[t]=4,n[t];zo&&(i[t]=0)}}const d=Mn[t];let f,h;if(d)return t==="$attrs"&&Ge(e.attrs,"get",""),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==we&&le(n,t))return i[t]=4,n[t];if(h=c.config.globalProperties,le(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:a}=e;return wo(o,t)?(o[t]=n,!0):s!==we&&le(s,t)?(s[t]=n,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:a}},i){let l;return!!n[i]||e!==we&&le(e,i)||wo(t,i)||(l=a[0])&&le(l,i)||le(s,i)||le(Mn,i)||le(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function di(e){return Z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zo=!0;function $d(e){const t=Ta(e),n=e.proxy,s=e.ctx;zo=!1,t.beforeCreate&&fi(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:E,deactivated:k,beforeDestroy:b,beforeUnmount:A,destroyed:y,unmounted:w,render:D,renderTracked:B,renderTriggered:H,errorCaptured:O,serverPrefetch:Y,expose:L,inheritAttrs:J,components:N,directives:Q,filters:Te}=t;if(u&&jd(u,s,null),i)for(const se in i){const G=i[se];ne(G)&&(s[se]=G.bind(n))}if(o){const se=o.call(n,n);ke(se)&&(e.data=is(se))}if(zo=!0,a)for(const se in a){const G=a[se],st=ne(G)?G.bind(n,n):ne(G.get)?G.get.bind(n,n):Qe,St=!ne(G)&&ne(G.set)?G.set.bind(n):Qe,dt=_({get:st,set:St});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>dt.value,set:je=>dt.value=je})}if(l)for(const se in l)Xr(l[se],s,n,se);if(c){const se=ne(c)?c.call(n):c;Reflect.ownKeys(se).forEach(G=>{lt(G,se[G])})}d&&fi(d,e,"c");function W(se,G){Z(G)?G.forEach(st=>se(st.bind(n))):G&&se(G.bind(n))}if(W(Pd,f),W(Re,h),W(Dd,p),W(Yr,v),W(Id,E),W(Bd,k),W(Hd,O),W(Fd,B),W(Md,H),W(Jr,A),W(Tn,w),W(Nd,Y),Z(L))if(L.length){const se=e.exposed||(e.exposed={});L.forEach(G=>{Object.defineProperty(se,G,{get:()=>n[G],set:st=>n[G]=st})})}else e.exposed||(e.exposed={});D&&e.render===Qe&&(e.render=D),J!=null&&(e.inheritAttrs=J),N&&(e.components=N),Q&&(e.directives=Q)}function jd(e,t,n=Qe){Z(e)&&(e=$o(e));for(const s in e){const o=e[s];let a;ke(o)?"default"in o?a=Ee(o.from||s,o.default,!0):a=Ee(o.from||s):a=Ee(o),Oe(a)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[s]=a}}function fi(e,t,n){tt(Z(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xr(e,t,n,s){const o=s.includes(".")?Ur(n,s):()=>n[s];if(Be(e)){const a=t[e];ne(a)&&ue(o,a)}else if(ne(e))ue(o,e.bind(n));else if(ke(e))if(Z(e))e.forEach(a=>Xr(a,t,n,s));else{const a=ne(e.handler)?e.handler.bind(n):t[e.handler];ne(a)&&ue(o,a,e)}}function Ta(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(t);let c;return l?c=l:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(u=>Ks(c,u,i,!0)),Ks(c,t,i)),ke(t)&&a.set(t,c),c}function Ks(e,t,n,s=!1){const{mixins:o,extends:a}=t;a&&Ks(e,a,n,!0),o&&o.forEach(i=>Ks(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Vd[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Vd={data:hi,props:pi,emits:pi,methods:In,computed:In,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:In,directives:In,watch:qd,provide:hi,inject:Ud};function hi(e,t){return t?e?function(){return Ce(ne(e)?e.call(this,this):e,ne(t)?t.call(this,this):t)}:t:e}function Ud(e,t){return In($o(e),$o(t))}function $o(e){if(Z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ze(e,t){return e?[...new Set([].concat(e,t))]:t}function In(e,t){return e?Ce(Object.create(null),e,t):t}function pi(e,t){return e?Z(e)&&Z(t)?[...new Set([...e,...t])]:Ce(Object.create(null),di(e),di(t??{})):t}function qd(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const s in t)n[s]=ze(e[s],t[s]);return n}function Zr(){return{app:null,config:{isNativeTag:yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gd=0;function Wd(e,t){return function(s,o=null){ne(s)||(s=Ce({},s)),o!=null&&!ke(o)&&(o=null);const a=Zr(),i=new WeakSet;let l=!1;const c=a.app={_uid:Gd++,_component:s,_props:o,_container:null,_context:a,_instance:null,version:_f,get config(){return a.config},set config(u){},use(u,...d){return i.has(u)||(u&&ne(u.install)?(i.add(u),u.install(c,...d)):ne(u)&&(i.add(u),u(c,...d))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,d){return d?(a.components[u]=d,c):a.components[u]},directive(u,d){return d?(a.directives[u]=d,c):a.directives[u]},mount(u,d,f){if(!l){const h=Se(s,o);return h.appContext=a,f===!0?f="svg":f===!1&&(f=void 0),d&&t?t(h,u):e(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ca(h.component)||h.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return a.provides[u]=d,c},runWithContext(u){const d=Fn;Fn=c;try{return u()}finally{Fn=d}}};return c}}let Fn=null;function lt(e,t){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[e]=t}}function Ee(e,t,n=!1){const s=Ie||et;if(s||Fn){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Fn._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ne(t)?t.call(s&&s.proxy):t}}const Qr={},el=()=>Object.create(Qr),tl=e=>Object.getPrototypeOf(e)===Qr;function Kd(e,t,n,s=!1){const o={},a=el();e.propsDefaults=Object.create(null),nl(e,t,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Ir(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Yd(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=ce(o),[c]=e.propsOptions;let u=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let h=d[f];if(no(e.emitsOptions,h))continue;const p=t[h];if(c)if(le(a,h))p!==a[h]&&(a[h]=p,u=!0);else{const v=nt(h);o[v]=jo(c,l,v,p,e,!1)}else p!==a[h]&&(a[h]=p,u=!0)}}}else{nl(e,t,o,a)&&(u=!0);let d;for(const f in l)(!t||!le(t,f)&&((d=kn(f))===f||!le(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(o[f]=jo(c,l,f,void 0,e,!0)):delete o[f]);if(a!==l)for(const f in a)(!t||!le(t,f))&&(delete a[f],u=!0)}u&&_t(e.attrs,"set","")}function nl(e,t,n,s){const[o,a]=e.propsOptions;let i=!1,l;if(t)for(let c in t){if(gn(c))continue;const u=t[c];let d;o&&le(o,d=nt(c))?!a||!a.includes(d)?n[d]=u:(l||(l={}))[d]=u:no(e.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,i=!0)}if(a){const c=ce(n),u=l||we;for(let d=0;d<a.length;d++){const f=a[d];n[f]=jo(o,c,f,u[f],e,!le(u,f))}}return i}function jo(e,t,n,s,o,a){const i=e[n];if(i!=null){const l=le(i,"default");if(l&&s===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&ne(c)){const{propsDefaults:u}=o;if(n in u)s=u[n];else{const d=us(o);s=u[n]=c.call(null,t),d()}}else s=c}i[0]&&(a&&!l?s=!1:i[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function sl(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const a=e.props,i={},l=[];let c=!1;if(!ne(e)){const d=f=>{c=!0;const[h,p]=sl(f,t,!0);Ce(i,h),p&&l.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!c)return ke(e)&&s.set(e,mn),mn;if(Z(a))for(let d=0;d<a.length;d++){const f=nt(a[d]);mi(f)&&(i[f]=we)}else if(a)for(const d in a){const f=nt(d);if(mi(f)){const h=a[d],p=i[f]=Z(h)||ne(h)?{type:h}:Ce({},h);if(p){const v=yi(Boolean,p.type),E=yi(String,p.type);p[0]=v>-1,p[1]=E<0||v<E,(v>-1||le(p,"default"))&&l.push(f)}}}const u=[i,l];return ke(e)&&s.set(e,u),u}function mi(e){return e[0]!=="$"&&!gn(e)}function gi(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function vi(e,t){return gi(e)===gi(t)}function yi(e,t){return Z(t)?t.findIndex(n=>vi(n,e)):ne(t)&&vi(t,e)?0:-1}const ol=e=>e[0]==="_"||e==="$stable",xa=e=>Z(e)?e.map(at):[at(e)],Jd=(e,t,n)=>{if(t._n)return t;const s=vd((...o)=>xa(t(...o)),n);return s._c=!1,s},al=(e,t,n)=>{const s=e._ctx;for(const o in e){if(ol(o))continue;const a=e[o];if(ne(a))t[o]=Jd(o,a,s);else if(a!=null){const i=xa(a);t[o]=()=>i}}},il=(e,t)=>{const n=xa(t);e.slots.default=()=>n},Xd=(e,t)=>{const n=e.slots=el();if(e.vnode.shapeFlag&32){const s=t._;s?(Ce(n,t),gr(n,"_",s,!0)):al(t,n)}else t&&il(e,t)},Zd=(e,t,n)=>{const{vnode:s,slots:o}=e;let a=!0,i=we;if(s.shapeFlag&32){const l=t._;l?n&&l===1?a=!1:(Ce(o,t),!n&&l===1&&delete o._):(a=!t.$stable,al(t,o)),i=t}else t&&(il(e,t),i={default:1});if(a)for(const l in o)!ol(l)&&i[l]==null&&delete o[l]};function Ys(e,t,n,s,o=!1){if(Z(e)){e.forEach((h,p)=>Ys(h,t&&(Z(t)?t[p]:t),n,s,o));return}if(Nn(s)&&!o)return;const a=s.shapeFlag&4?Ca(s.component)||s.component.proxy:s.el,i=o?null:a,{i:l,r:c}=e,u=t&&t.r,d=l.refs===we?l.refs={}:l.refs,f=l.setupState;if(u!=null&&u!==c&&(Be(u)?(d[u]=null,le(f,u)&&(f[u]=null)):Oe(u)&&(u.value=null)),ne(c))Ft(c,l,12,[i,d]);else{const h=Be(c),p=Oe(c);if(h||p){const v=()=>{if(e.f){const E=h?le(f,c)?f[c]:d[c]:c.value;o?Z(E)&&ca(E,a):Z(E)?E.includes(a)||E.push(a):h?(d[c]=[a],le(f,c)&&(f[c]=d[c])):(c.value=[a],e.k&&(d[e.k]=c.value))}else h?(d[c]=i,le(f,c)&&(f[c]=i)):p&&(c.value=i,e.k&&(d[e.k]=i))};i?(v.id=-1,Ve(v,n)):v()}}}let Rt=!1;const Qd=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",ef=e=>e.namespaceURI.includes("MathML"),Ps=e=>{if(Qd(e))return"svg";if(ef(e))return"mathml"},Ds=e=>e.nodeType===8;function tf(e){const{mt:t,p:n,o:{patchProp:s,createText:o,nextSibling:a,parentNode:i,remove:l,insert:c,createComment:u}}=e,d=(y,w)=>{if(!w.hasChildNodes()){n(null,y,w),Gs(),w._vnode=y;return}Rt=!1,f(w.firstChild,y,null,null,null),Gs(),w._vnode=y,Rt&&console.error("Hydration completed but contains mismatches.")},f=(y,w,D,B,H,O=!1)=>{O=O||!!w.dynamicChildren;const Y=Ds(y)&&y.data==="[",L=()=>E(y,w,D,B,H,Y),{type:J,ref:N,shapeFlag:Q,patchFlag:Te}=w;let xe=y.nodeType;w.el=y,Te===-2&&(O=!1,w.dynamicChildren=null);let W=null;switch(J){case yn:xe!==3?w.children===""?(c(w.el=o(""),i(y),y),W=y):W=L():(y.data!==w.children&&(Rt=!0,y.data=w.children),W=a(y));break;case Je:A(y)?(W=a(y),b(w.el=y.content.firstChild,y,D)):xe!==8||Y?W=L():W=a(y);break;case Hn:if(Y&&(y=a(y),xe=y.nodeType),xe===1||xe===3){W=y;const se=!w.children.length;for(let G=0;G<w.staticCount;G++)se&&(w.children+=W.nodeType===1?W.outerHTML:W.data),G===w.staticCount-1&&(w.anchor=W),W=a(W);return Y?a(W):W}else L();break;case Ye:Y?W=v(y,w,D,B,H,O):W=L();break;default:if(Q&1)(xe!==1||w.type.toLowerCase()!==y.tagName.toLowerCase())&&!A(y)?W=L():W=h(y,w,D,B,H,O);else if(Q&6){w.slotScopeIds=H;const se=i(y);if(Y?W=k(y):Ds(y)&&y.data==="teleport start"?W=k(y,y.data,"teleport end"):W=a(y),t(w,se,null,D,B,Ps(se),O),Nn(w)){let G;Y?(G=Se(Ye),G.anchor=W?W.previousSibling:se.lastChild):G=y.nodeType===3?hl(""):Se("div"),G.el=y,w.component.subTree=G}}else Q&64?xe!==8?W=L():W=w.type.hydrate(y,w,D,B,H,O,e,p):Q&128&&(W=w.type.hydrate(y,w,D,B,Ps(i(y)),H,O,e,f))}return N!=null&&Ys(N,null,B,w),W},h=(y,w,D,B,H,O)=>{O=O||!!w.dynamicChildren;const{type:Y,props:L,patchFlag:J,shapeFlag:N,dirs:Q,transition:Te}=w,xe=Y==="input"||Y==="option";if(xe||J!==-1){Q&&ht(w,null,D,"created");let W=!1;if(A(y)){W=rl(B,Te)&&D&&D.vnode.props&&D.vnode.props.appear;const G=y.content.firstChild;W&&Te.beforeEnter(G),b(G,y,D),w.el=y=G}if(N&16&&!(L&&(L.innerHTML||L.textContent))){let G=p(y.firstChild,w,y,D,B,H,O);for(;G;){Rt=!0;const st=G;G=G.nextSibling,l(st)}}else N&8&&y.textContent!==w.children&&(Rt=!0,y.textContent=w.children);if(L)if(xe||!O||J&48)for(const G in L)(xe&&(G.endsWith("value")||G==="indeterminate")||ss(G)&&!gn(G)||G[0]===".")&&s(y,G,null,L[G],void 0,void 0,D);else L.onClick&&s(y,"onClick",null,L.onClick,void 0,void 0,D);let se;(se=L&&L.onVnodeBeforeMount)&&Ze(se,D,w),Q&&ht(w,null,D,"beforeMount"),((se=L&&L.onVnodeMounted)||Q||W)&&jr(()=>{se&&Ze(se,D,w),W&&Te.enter(y),Q&&ht(w,null,D,"mounted")},B)}return y.nextSibling},p=(y,w,D,B,H,O,Y)=>{Y=Y||!!w.dynamicChildren;const L=w.children,J=L.length;for(let N=0;N<J;N++){const Q=Y?L[N]:L[N]=at(L[N]);if(y)y=f(y,Q,B,H,O,Y);else{if(Q.type===yn&&!Q.children)continue;Rt=!0,n(null,Q,D,null,B,H,Ps(D),O)}}return y},v=(y,w,D,B,H,O)=>{const{slotScopeIds:Y}=w;Y&&(H=H?H.concat(Y):Y);const L=i(y),J=p(a(y),w,L,D,B,H,O);return J&&Ds(J)&&J.data==="]"?a(w.anchor=J):(Rt=!0,c(w.anchor=u("]"),L,J),J)},E=(y,w,D,B,H,O)=>{if(Rt=!0,w.el=null,O){const J=k(y);for(;;){const N=a(y);if(N&&N!==J)l(N);else break}}const Y=a(y),L=i(y);return l(y),n(null,w,L,Y,D,B,Ps(L),H),Y},k=(y,w="[",D="]")=>{let B=0;for(;y;)if(y=a(y),y&&Ds(y)&&(y.data===w&&B++,y.data===D)){if(B===0)return a(y);B--}return y},b=(y,w,D)=>{const B=w.parentNode;B&&B.replaceChild(y,w);let H=D;for(;H;)H.vnode.el===w&&(H.vnode.el=H.subTree.el=y),H=H.parent},A=y=>y.nodeType===1&&y.tagName.toLowerCase()==="template";return[d,f]}const Ve=jr;function nf(e){return sf(e,tf)}function sf(e,t){const n=vr();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:i,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:h,setScopeId:p=Qe,insertStaticContent:v}=e,E=(m,g,T,C=null,x=null,P=null,$=void 0,I=null,F=!!g.dynamicChildren)=>{if(m===g)return;m&&!Qt(m,g)&&(C=S(m),je(m,x,P,!0),m=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:R,ref:U,shapeFlag:X}=g;switch(R){case yn:k(m,g,T,C);break;case Je:b(m,g,T,C);break;case Hn:m==null&&A(g,T,C,$);break;case Ye:N(m,g,T,C,x,P,$,I,F);break;default:X&1?D(m,g,T,C,x,P,$,I,F):X&6?Q(m,g,T,C,x,P,$,I,F):(X&64||X&128)&&R.process(m,g,T,C,x,P,$,I,F,q)}U!=null&&x&&Ys(U,m&&m.ref,P,g||m,!g)},k=(m,g,T,C)=>{if(m==null)s(g.el=l(g.children),T,C);else{const x=g.el=m.el;g.children!==m.children&&u(x,g.children)}},b=(m,g,T,C)=>{m==null?s(g.el=c(g.children||""),T,C):g.el=m.el},A=(m,g,T,C)=>{[m.el,m.anchor]=v(m.children,g,T,C,m.el,m.anchor)},y=({el:m,anchor:g},T,C)=>{let x;for(;m&&m!==g;)x=h(m),s(m,T,C),m=x;s(g,T,C)},w=({el:m,anchor:g})=>{let T;for(;m&&m!==g;)T=h(m),o(m),m=T;o(g)},D=(m,g,T,C,x,P,$,I,F)=>{g.type==="svg"?$="svg":g.type==="math"&&($="mathml"),m==null?B(g,T,C,x,P,$,I,F):Y(m,g,x,P,$,I,F)},B=(m,g,T,C,x,P,$,I)=>{let F,R;const{props:U,shapeFlag:X,transition:K,dirs:ee}=m;if(F=m.el=i(m.type,P,U&&U.is,U),X&8?d(F,m.children):X&16&&O(m.children,F,null,C,x,Eo(m,P),$,I),ee&&ht(m,null,C,"created"),H(F,m,m.scopeId,$,C),U){for(const pe in U)pe!=="value"&&!gn(pe)&&a(F,pe,null,U[pe],P,m.children,C,x,Me);"value"in U&&a(F,"value",null,U.value,P),(R=U.onVnodeBeforeMount)&&Ze(R,C,m)}ee&&ht(m,null,C,"beforeMount");const ae=rl(x,K);ae&&K.beforeEnter(F),s(F,g,T),((R=U&&U.onVnodeMounted)||ae||ee)&&Ve(()=>{R&&Ze(R,C,m),ae&&K.enter(F),ee&&ht(m,null,C,"mounted")},x)},H=(m,g,T,C,x)=>{if(T&&p(m,T),C)for(let P=0;P<C.length;P++)p(m,C[P]);if(x){let P=x.subTree;if(g===P){const $=x.vnode;H(m,$,$.scopeId,$.slotScopeIds,x.parent)}}},O=(m,g,T,C,x,P,$,I,F=0)=>{for(let R=F;R<m.length;R++){const U=m[R]=I?Pt(m[R]):at(m[R]);E(null,U,g,T,C,x,P,$,I)}},Y=(m,g,T,C,x,P,$)=>{const I=g.el=m.el;let{patchFlag:F,dynamicChildren:R,dirs:U}=g;F|=m.patchFlag&16;const X=m.props||we,K=g.props||we;let ee;if(T&&Yt(T,!1),(ee=K.onVnodeBeforeUpdate)&&Ze(ee,T,g,m),U&&ht(g,m,T,"beforeUpdate"),T&&Yt(T,!0),R?L(m.dynamicChildren,R,I,T,C,Eo(g,x),P):$||G(m,g,I,null,T,C,Eo(g,x),P,!1),F>0){if(F&16)J(I,g,X,K,T,C,x);else if(F&2&&X.class!==K.class&&a(I,"class",null,K.class,x),F&4&&a(I,"style",X.style,K.style,x),F&8){const ae=g.dynamicProps;for(let pe=0;pe<ae.length;pe++){const be=ae[pe],Le=X[be],ot=K[be];(ot!==Le||be==="value")&&a(I,be,Le,ot,x,m.children,T,C,Me)}}F&1&&m.children!==g.children&&d(I,g.children)}else!$&&R==null&&J(I,g,X,K,T,C,x);((ee=K.onVnodeUpdated)||U)&&Ve(()=>{ee&&Ze(ee,T,g,m),U&&ht(g,m,T,"updated")},C)},L=(m,g,T,C,x,P,$)=>{for(let I=0;I<g.length;I++){const F=m[I],R=g[I],U=F.el&&(F.type===Ye||!Qt(F,R)||F.shapeFlag&70)?f(F.el):T;E(F,R,U,null,C,x,P,$,!0)}},J=(m,g,T,C,x,P,$)=>{if(T!==C){if(T!==we)for(const I in T)!gn(I)&&!(I in C)&&a(m,I,T[I],null,$,g.children,x,P,Me);for(const I in C){if(gn(I))continue;const F=C[I],R=T[I];F!==R&&I!=="value"&&a(m,I,R,F,$,g.children,x,P,Me)}"value"in C&&a(m,"value",T.value,C.value,$)}},N=(m,g,T,C,x,P,$,I,F)=>{const R=g.el=m?m.el:l(""),U=g.anchor=m?m.anchor:l("");let{patchFlag:X,dynamicChildren:K,slotScopeIds:ee}=g;ee&&(I=I?I.concat(ee):ee),m==null?(s(R,T,C),s(U,T,C),O(g.children||[],T,U,x,P,$,I,F)):X>0&&X&64&&K&&m.dynamicChildren?(L(m.dynamicChildren,K,T,x,P,$,I),(g.key!=null||x&&g===x.subTree)&&ll(m,g,!0)):G(m,g,T,U,x,P,$,I,F)},Q=(m,g,T,C,x,P,$,I,F)=>{g.slotScopeIds=I,m==null?g.shapeFlag&512?x.ctx.activate(g,T,C,$,F):Te(g,T,C,x,P,$,F):xe(m,g,F)},Te=(m,g,T,C,x,P,$)=>{const I=m.component=mf(m,C,x);if(ls(m)&&(I.ctx.renderer=q),gf(I),I.asyncDep){if(x&&x.registerDep(I,W),!m.el){const F=I.subTree=Se(Je);b(null,F,g,T)}}else W(I,m,g,T,x,P,$)},xe=(m,g,T)=>{const C=g.component=m.component;if(wd(m,g,T))if(C.asyncDep&&!C.asyncResolved){se(C,g,T);return}else C.next=g,hd(C.update),C.effect.dirty=!0,C.update();else g.el=m.el,C.vnode=g},W=(m,g,T,C,x,P,$)=>{const I=()=>{if(m.isMounted){let{next:U,bu:X,u:K,parent:ee,vnode:ae}=m;{const fn=cl(m);if(fn){U&&(U.el=ae.el,se(m,U,$)),fn.asyncDep.then(()=>{m.isUnmounted||I()});return}}let pe=U,be;Yt(m,!1),U?(U.el=ae.el,se(m,U,$)):U=ae,X&&go(X),(be=U.props&&U.props.onVnodeBeforeUpdate)&&Ze(be,ee,U,ae),Yt(m,!0);const Le=vo(m),ot=m.subTree;m.subTree=Le,E(ot,Le,f(ot.el),S(ot),m,x,P),U.el=Le.el,pe===null&&Ed(m,Le.el),K&&Ve(K,x),(be=U.props&&U.props.onVnodeUpdated)&&Ve(()=>Ze(be,ee,U,ae),x)}else{let U;const{el:X,props:K}=g,{bm:ee,m:ae,parent:pe}=m,be=Nn(g);if(Yt(m,!1),ee&&go(ee),!be&&(U=K&&K.onVnodeBeforeMount)&&Ze(U,pe,g),Yt(m,!0),X&&ye){const Le=()=>{m.subTree=vo(m),ye(X,m.subTree,m,x,null)};be?g.type.__asyncLoader().then(()=>!m.isUnmounted&&Le()):Le()}else{const Le=m.subTree=vo(m);E(null,Le,T,C,m,x,P),g.el=Le.el}if(ae&&Ve(ae,x),!be&&(U=K&&K.onVnodeMounted)){const Le=g;Ve(()=>Ze(U,pe,Le),x)}(g.shapeFlag&256||pe&&Nn(pe.vnode)&&pe.vnode.shapeFlag&256)&&m.a&&Ve(m.a,x),m.isMounted=!0,g=T=C=null}},F=m.effect=new ha(I,Qe,()=>to(R),m.scope),R=m.update=()=>{F.dirty&&F.run()};R.id=m.uid,Yt(m,!0),R()},se=(m,g,T)=>{g.component=m;const C=m.vnode.props;m.vnode=g,m.next=null,Yd(m,g.props,C,T),Zd(m,g.children,T),Vt(),ri(m),Ut()},G=(m,g,T,C,x,P,$,I,F=!1)=>{const R=m&&m.children,U=m?m.shapeFlag:0,X=g.children,{patchFlag:K,shapeFlag:ee}=g;if(K>0){if(K&128){St(R,X,T,C,x,P,$,I,F);return}else if(K&256){st(R,X,T,C,x,P,$,I,F);return}}ee&8?(U&16&&Me(R,x,P),X!==R&&d(T,X)):U&16?ee&16?St(R,X,T,C,x,P,$,I,F):Me(R,x,P,!0):(U&8&&d(T,""),ee&16&&O(X,T,C,x,P,$,I,F))},st=(m,g,T,C,x,P,$,I,F)=>{m=m||mn,g=g||mn;const R=m.length,U=g.length,X=Math.min(R,U);let K;for(K=0;K<X;K++){const ee=g[K]=F?Pt(g[K]):at(g[K]);E(m[K],ee,T,null,x,P,$,I,F)}R>U?Me(m,x,P,!0,!1,X):O(g,T,C,x,P,$,I,F,X)},St=(m,g,T,C,x,P,$,I,F)=>{let R=0;const U=g.length;let X=m.length-1,K=U-1;for(;R<=X&&R<=K;){const ee=m[R],ae=g[R]=F?Pt(g[R]):at(g[R]);if(Qt(ee,ae))E(ee,ae,T,null,x,P,$,I,F);else break;R++}for(;R<=X&&R<=K;){const ee=m[X],ae=g[K]=F?Pt(g[K]):at(g[K]);if(Qt(ee,ae))E(ee,ae,T,null,x,P,$,I,F);else break;X--,K--}if(R>X){if(R<=K){const ee=K+1,ae=ee<U?g[ee].el:C;for(;R<=K;)E(null,g[R]=F?Pt(g[R]):at(g[R]),T,ae,x,P,$,I,F),R++}}else if(R>K)for(;R<=X;)je(m[R],x,P,!0),R++;else{const ee=R,ae=R,pe=new Map;for(R=ae;R<=K;R++){const We=g[R]=F?Pt(g[R]):at(g[R]);We.key!=null&&pe.set(We.key,R)}let be,Le=0;const ot=K-ae+1;let fn=!1,Ja=0;const Sn=new Array(ot);for(R=0;R<ot;R++)Sn[R]=0;for(R=ee;R<=X;R++){const We=m[R];if(Le>=ot){je(We,x,P,!0);continue}let ft;if(We.key!=null)ft=pe.get(We.key);else for(be=ae;be<=K;be++)if(Sn[be-ae]===0&&Qt(We,g[be])){ft=be;break}ft===void 0?je(We,x,P,!0):(Sn[ft-ae]=R+1,ft>=Ja?Ja=ft:fn=!0,E(We,g[ft],T,null,x,P,$,I,F),Le++)}const Xa=fn?of(Sn):mn;for(be=Xa.length-1,R=ot-1;R>=0;R--){const We=ae+R,ft=g[We],Za=We+1<U?g[We+1].el:C;Sn[R]===0?E(null,ft,T,Za,x,P,$,I,F):fn&&(be<0||R!==Xa[be]?dt(ft,T,Za,2):be--)}}},dt=(m,g,T,C,x=null)=>{const{el:P,type:$,transition:I,children:F,shapeFlag:R}=m;if(R&6){dt(m.component.subTree,g,T,C);return}if(R&128){m.suspense.move(g,T,C);return}if(R&64){$.move(m,g,T,q);return}if($===Ye){s(P,g,T);for(let X=0;X<F.length;X++)dt(F[X],g,T,C);s(m.anchor,g,T);return}if($===Hn){y(m,g,T);return}if(C!==2&&R&1&&I)if(C===0)I.beforeEnter(P),s(P,g,T),Ve(()=>I.enter(P),x);else{const{leave:X,delayLeave:K,afterLeave:ee}=I,ae=()=>s(P,g,T),pe=()=>{X(P,()=>{ae(),ee&&ee()})};K?K(P,ae,pe):pe()}else s(P,g,T)},je=(m,g,T,C=!1,x=!1)=>{const{type:P,props:$,ref:I,children:F,dynamicChildren:R,shapeFlag:U,patchFlag:X,dirs:K}=m;if(I!=null&&Ys(I,null,T,m,!0),U&256){g.ctx.deactivate(m);return}const ee=U&1&&K,ae=!Nn(m);let pe;if(ae&&(pe=$&&$.onVnodeBeforeUnmount)&&Ze(pe,g,m),U&6)xs(m.component,T,C);else{if(U&128){m.suspense.unmount(T,C);return}ee&&ht(m,null,g,"beforeUnmount"),U&64?m.type.remove(m,g,T,x,q,C):R&&(P!==Ye||X>0&&X&64)?Me(R,g,T,!1,!0):(P===Ye&&X&384||!x&&U&16)&&Me(F,g,T),C&&un(m)}(ae&&(pe=$&&$.onVnodeUnmounted)||ee)&&Ve(()=>{pe&&Ze(pe,g,m),ee&&ht(m,null,g,"unmounted")},T)},un=m=>{const{type:g,el:T,anchor:C,transition:x}=m;if(g===Ye){dn(T,C);return}if(g===Hn){w(m);return}const P=()=>{o(T),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(m.shapeFlag&1&&x&&!x.persisted){const{leave:$,delayLeave:I}=x,F=()=>$(T,P);I?I(m.el,P,F):F()}else P()},dn=(m,g)=>{let T;for(;m!==g;)T=h(m),o(m),m=T;o(g)},xs=(m,g,T)=>{const{bum:C,scope:x,update:P,subTree:$,um:I}=m;C&&go(C),x.stop(),P&&(P.active=!1,je($,m,g,T)),I&&Ve(I,g),Ve(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Me=(m,g,T,C=!1,x=!1,P=0)=>{for(let $=P;$<m.length;$++)je(m[$],g,T,C,x)},S=m=>m.shapeFlag&6?S(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let V=!1;const z=(m,g,T)=>{m==null?g._vnode&&je(g._vnode,null,null,!0):E(g._vnode||null,m,g,null,null,null,T),V||(V=!0,ri(),Gs(),V=!1),g._vnode=m},q={p:E,um:je,m:dt,r:un,mt:Te,mc:O,pc:G,pbc:L,n:S,o:e};let fe,ye;return t&&([fe,ye]=t(q)),{render:z,hydrate:fe,createApp:Wd(z,fe)}}function Eo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Yt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ll(e,t,n=!1){const s=e.children,o=t.children;if(Z(s)&&Z(o))for(let a=0;a<s.length;a++){const i=s[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=Pt(o[a]),l.el=i.el),n||ll(i,l)),l.type===yn&&(l.el=i.el)}}function of(e){const t=e.slice(),n=[0];let s,o,a,i,l;const c=e.length;for(s=0;s<c;s++){const u=e[s];if(u!==0){if(o=n[n.length-1],e[o]<u){t[s]=o,n.push(s);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<u?a=l+1:i=l;u<e[n[a]]&&(a>0&&(t[s]=n[a-1]),n[a]=s)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=t[i];return n}function cl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:cl(t)}const af=e=>e.__isTeleport,Ye=Symbol.for("v-fgt"),yn=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Hn=Symbol.for("v-stc"),zn=[];let it=null;function rf(e=!1){zn.push(it=e?null:[])}function lf(){zn.pop(),it=zn[zn.length-1]||null}let Yn=1;function bi(e){Yn+=e}function ul(e){return e.dynamicChildren=Yn>0?it||mn:null,lf(),Yn>0&&it&&it.push(e),e}function ig(e,t,n,s,o,a){return ul(fl(e,t,n,s,o,a,!0))}function cf(e,t,n,s,o){return ul(Se(e,t,n,s,o,!0))}function Vo(e){return e?e.__v_isVNode===!0:!1}function Qt(e,t){return e.type===t.type&&e.key===t.key}const dl=({key:e})=>e??null,$s=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Be(e)||Oe(e)||ne(e)?{i:et,r:e,k:t,f:!!n}:e:null);function fl(e,t=null,n=null,s=0,o=null,a=e===Ye?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&dl(t),ref:t&&$s(t),scopeId:zr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:et};return l?(Sa(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),Yn>0&&!i&&it&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&it.push(c),c}const Se=uf;function uf(e,t=null,n=null,s=0,o=null,a=!1){if((!e||e===_d)&&(e=Je),Vo(e)){const l=zt(e,t,!0);return n&&Sa(l,n),Yn>0&&!a&&it&&(l.shapeFlag&6?it[it.indexOf(e)]=l:it.push(l)),l.patchFlag|=-2,l}if(Ef(e)&&(e=e.__vccOpts),t){t=df(t);let{class:l,style:c}=t;l&&!Be(l)&&(t.class=fa(l)),ke(c)&&(Br(c)&&!Z(c)&&(c=Ce({},c)),t.style=da(c))}const i=Be(e)?1:Ad(e)?128:af(e)?64:ke(e)?4:ne(e)?2:0;return fl(e,t,n,s,o,i,a,!0)}function df(e){return e?Br(e)||tl(e)?Ce({},e):e:null}function zt(e,t,n=!1,s=!1){const{props:o,ref:a,patchFlag:i,children:l,transition:c}=e,u=t?ff(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&dl(u),ref:t&&t.ref?n&&a?Z(a)?a.concat($s(t)):[a,$s(t)]:$s(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&(d.transition=c.clone(d)),d}function hl(e=" ",t=0){return Se(yn,null,e,t)}function rg(e,t){const n=Se(Hn,null,e);return n.staticCount=t,n}function lg(e="",t=!1){return t?(rf(),cf(Je,null,e)):Se(Je,null,e)}function at(e){return e==null||typeof e=="boolean"?Se(Je):Z(e)?Se(Ye,null,e.slice()):typeof e=="object"?Pt(e):Se(yn,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Sa(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Z(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Sa(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!tl(t)?t._ctx=et:o===3&&et&&(et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ne(t)?(t={default:t,_ctx:et},n=32):(t=String(t),s&64?(n=16,t=[hl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ff(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=fa([t.class,s.class]));else if(o==="style")t.style=da([t.style,s.style]);else if(ss(o)){const a=t[o],i=s[o];i&&a!==i&&!(Z(a)&&a.includes(i))&&(t[o]=a?[].concat(a,i):i)}else o!==""&&(t[o]=s[o])}return t}function Ze(e,t,n,s=null){tt(e,t,7,[n,s])}const hf=Zr();let pf=0;function mf(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||hf,a={uid:pf++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sl(s,o),emitsOptions:Hr(s,o),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=gd.bind(null,a),e.ce&&e.ce(a),a}let Ie=null;const cs=()=>Ie||et;let Js,Uo;{const e=vr(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),a=>{o.length>1?o.forEach(i=>i(a)):o[0](a)}};Js=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Uo=t("__VUE_SSR_SETTERS__",n=>ds=n)}const us=e=>{const t=Ie;return Js(e),e.scope.on(),()=>{e.scope.off(),Js(t)}},wi=()=>{Ie&&Ie.scope.off(),Js(null)};function pl(e){return e.vnode.shapeFlag&4}let ds=!1;function gf(e,t=!1){t&&Uo(t);const{props:n,children:s}=e.vnode,o=pl(e);Kd(e,n,o,t),Xd(e,s);const a=o?vf(e,t):void 0;return t&&Uo(!1),a}function vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,zd);const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?bf(e):null,a=us(e);Vt();const i=Ft(s,e,0,[e.props,o]);if(Ut(),a(),mr(i)){if(i.then(wi,wi),t)return i.then(l=>{Ei(e,l,t)}).catch(l=>{rs(l,e,0)});e.asyncDep=i}else Ei(e,i,t)}else ml(e,t)}function Ei(e,t,n){ne(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ke(t)&&(e.setupState=Dr(t)),ml(e,n)}let _i;function ml(e,t,n){const s=e.type;if(!e.render){if(!t&&_i&&!s.render){const o=s.template||Ta(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=s,u=Ce(Ce({isCustomElement:a,delimiters:l},i),c);s.render=_i(o,u)}}e.render=s.render||Qe}{const o=us(e);Vt();try{$d(e)}finally{Ut(),o()}}}const yf={get(e,t){return Ge(e,"get",""),e[t]}};function bf(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yf),slots:e.slots,emit:e.emit,expose:t}}function Ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Dr(sd(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Mn)return Mn[n](e)},has(t,n){return n in t||n in Mn}}))}function wf(e,t=!0){return ne(e)?e.displayName||e.name:e.name||t&&e.__name}function Ef(e){return ne(e)&&"__vccOpts"in e}const _=(e,t)=>od(e,t,ds);function r(e,t,n){const s=arguments.length;return s===2?ke(t)&&!Z(t)?Vo(t)?Se(e,null,[t]):Se(e,t):Se(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vo(n)&&(n=[n]),Se(e,t,n))}const _f="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kf="http://www.w3.org/2000/svg",Af="http://www.w3.org/1998/Math/MathML",Dt=typeof document<"u"?document:null,ki=Dt&&Dt.createElement("template"),Tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Dt.createElementNS(kf,e):t==="mathml"?Dt.createElementNS(Af,e):Dt.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Dt.createTextNode(e),createComment:e=>Dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,a){const i=n?n.previousSibling:t.lastChild;if(o&&(o===a||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{ki.innerHTML=s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e;const l=ki.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt="transition",Cn="animation",bn=Symbol("_vtc"),$t=(e,{slots:t})=>r(Rd,vl(e),t);$t.displayName="Transition";const gl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xf=$t.props=Ce({},Gr,gl),Jt=(e,t=[])=>{Z(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ai=e=>e?Z(e)?e.some(t=>t.length>1):e.length>1:!1;function vl(e){const t={};for(const N in e)N in gl||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:d=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=Sf(o),E=v&&v[0],k=v&&v[1],{onBeforeEnter:b,onEnter:A,onEnterCancelled:y,onLeave:w,onLeaveCancelled:D,onBeforeAppear:B=b,onAppear:H=A,onAppearCancelled:O=y}=t,Y=(N,Q,Te)=>{It(N,Q?d:l),It(N,Q?u:i),Te&&Te()},L=(N,Q)=>{N._isLeaving=!1,It(N,f),It(N,p),It(N,h),Q&&Q()},J=N=>(Q,Te)=>{const xe=N?H:A,W=()=>Y(Q,N,Te);Jt(xe,[Q,W]),Ti(()=>{It(Q,N?c:a),bt(Q,N?d:l),Ai(xe)||xi(Q,s,E,W)})};return Ce(t,{onBeforeEnter(N){Jt(b,[N]),bt(N,a),bt(N,i)},onBeforeAppear(N){Jt(B,[N]),bt(N,c),bt(N,u)},onEnter:J(!1),onAppear:J(!0),onLeave(N,Q){N._isLeaving=!0;const Te=()=>L(N,Q);bt(N,f),bt(N,h),bl(),Ti(()=>{N._isLeaving&&(It(N,f),bt(N,p),Ai(w)||xi(N,s,k,Te))}),Jt(w,[N,Te])},onEnterCancelled(N){Y(N,!1),Jt(y,[N])},onAppearCancelled(N){Y(N,!0),Jt(O,[N])},onLeaveCancelled(N){L(N),Jt(D,[N])}})}function Sf(e){if(e==null)return null;if(ke(e))return[_o(e.enter),_o(e.leave)];{const t=_o(e);return[t,t]}}function _o(e){return Su(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[bn]||(e[bn]=new Set)).add(t)}function It(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[bn];n&&(n.delete(t),n.size||(e[bn]=void 0))}function Ti(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Cf=0;function xi(e,t,n,s){const o=e._endId=++Cf,a=()=>{o===e._endId&&s()};if(n)return setTimeout(a,n);const{type:i,timeout:l,propCount:c}=yl(e,t);if(!i)return s();const u=i+"end";let d=0;const f=()=>{e.removeEventListener(u,h),a()},h=p=>{p.target===e&&++d>=c&&f()};setTimeout(()=>{d<c&&f()},l+1),e.addEventListener(u,h)}function yl(e,t){const n=window.getComputedStyle(e),s=v=>(n[v]||"").split(", "),o=s(`${Lt}Delay`),a=s(`${Lt}Duration`),i=Si(o,a),l=s(`${Cn}Delay`),c=s(`${Cn}Duration`),u=Si(l,c);let d=null,f=0,h=0;t===Lt?i>0&&(d=Lt,f=i,h=a.length):t===Cn?u>0&&(d=Cn,f=u,h=c.length):(f=Math.max(i,u),d=f>0?i>u?Lt:Cn:null,h=d?d===Lt?a.length:c.length:0);const p=d===Lt&&/\b(transform|all)(,|$)/.test(s(`${Lt}Property`).toString());return{type:d,timeout:f,propCount:h,hasTransform:p}}function Si(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Ci(n)+Ci(e[s])))}function Ci(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function bl(){return document.body.offsetHeight}function Rf(e,t,n){const s=e[bn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ri=Symbol("_vod"),Lf=Symbol("_vsh"),If=Symbol(""),Bf=/(^|;)\s*display\s*:/;function Of(e,t,n){const s=e.style,o=Be(n);let a=!1;if(n&&!o){if(t)if(Be(t))for(const i of t.split(";")){const l=i.slice(0,i.indexOf(":")).trim();n[l]==null&&js(s,l,"")}else for(const i in t)n[i]==null&&js(s,i,"");for(const i in n)i==="display"&&(a=!0),js(s,i,n[i])}else if(o){if(t!==n){const i=s[If];i&&(n+=";"+i),s.cssText=n,a=Bf.test(n)}}else t&&e.removeAttribute("style");Ri in e&&(e[Ri]=a?s.display:"",e[Lf]&&(s.display="none"))}const Li=/\s*!important$/;function js(e,t,n){if(Z(n))n.forEach(s=>js(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Pf(e,t);Li.test(n)?e.setProperty(kn(s),n.replace(Li,""),"important"):e[s]=n}}const Ii=["Webkit","Moz","ms"],ko={};function Pf(e,t){const n=ko[t];if(n)return n;let s=nt(t);if(s!=="filter"&&s in e)return ko[t]=s;s=as(s);for(let o=0;o<Ii.length;o++){const a=Ii[o]+s;if(a in e)return ko[t]=a}return t}const Bi="http://www.w3.org/1999/xlink";function Df(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Bi,t.slice(6,t.length)):e.setAttributeNS(Bi,t,n);else{const a=Ou(t);n==null||a&&!yr(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Nf(e,t,n,s,o,a,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,a),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?e.getAttribute("value")||"":e.value,d=n??"";(u!==d||!("_value"in e))&&(e.value=d),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=yr(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Mf(e,t,n,s){e.addEventListener(t,n,s)}function Ff(e,t,n,s){e.removeEventListener(t,n,s)}const Oi=Symbol("_vei");function Hf(e,t,n,s,o=null){const a=e[Oi]||(e[Oi]={}),i=a[t];if(s&&i)i.value=s;else{const[l,c]=zf(t);if(s){const u=a[t]=Vf(s,o);Mf(e,l,u,c)}else i&&(Ff(e,l,i,c),a[t]=void 0)}}const Pi=/(?:Once|Passive|Capture)$/;function zf(e){let t;if(Pi.test(e)){t={};let s;for(;s=e.match(Pi);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):kn(e.slice(2)),t]}let Ao=0;const $f=Promise.resolve(),jf=()=>Ao||($f.then(()=>Ao=0),Ao=Date.now());function Vf(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tt(Uf(s,n.value),t,5,[s])};return n.value=e,n.attached=jf(),n}function Uf(e,t){if(Z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qf=(e,t,n,s,o,a,i,l,c)=>{const u=o==="svg";t==="class"?Rf(e,s,u):t==="style"?Of(e,n,s):ss(t)?la(t)||Hf(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gf(e,t,s,u))?Nf(e,t,s,a,i,l,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Df(e,t,s,u))};function Gf(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Di(t)&&ne(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Di(t)&&Be(n)?!1:t in e}const wl=new WeakMap,El=new WeakMap,Xs=Symbol("_moveCb"),Ni=Symbol("_enterCb"),_l={name:"TransitionGroup",props:Ce({},xf,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=cs(),s=qr();let o,a;return Yr(()=>{if(!o.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!Zf(o[0].el,n.vnode.el,i))return;o.forEach(Yf),o.forEach(Jf);const l=o.filter(Xf);bl(),l.forEach(c=>{const u=c.el,d=u.style;bt(u,i),d.transform=d.webkitTransform=d.transitionDuration="";const f=u[Xs]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",f),u[Xs]=null,It(u,i))};u.addEventListener("transitionend",f)})}),()=>{const i=ce(e),l=vl(i);let c=i.tag||Ye;if(o=[],a)for(let u=0;u<a.length;u++){const d=a[u];d.el&&d.el instanceof Element&&(o.push(d),Kn(d,Wn(d,l,s,n)),wl.set(d,d.el.getBoundingClientRect()))}a=t.default?Aa(t.default()):[];for(let u=0;u<a.length;u++){const d=a[u];d.key!=null&&Kn(d,Wn(d,l,s,n))}return Se(c,null,a)}}},Wf=e=>delete e.mode;_l.props;const Kf=_l;function Yf(e){const t=e.el;t[Xs]&&t[Xs](),t[Ni]&&t[Ni]()}function Jf(e){El.set(e,e.el.getBoundingClientRect())}function Xf(e){const t=wl.get(e),n=El.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const a=e.el.style;return a.transform=a.webkitTransform=`translate(${s}px,${o}px)`,a.transitionDuration="0s",e}}function Zf(e,t,n){const s=e.cloneNode(),o=e[bn];o&&o.forEach(l=>{l.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(s);const{hasTransform:i}=yl(s);return a.removeChild(s),i}const Qf=Ce({patchProp:qf},Tf);let To,Mi=!1;function eh(){return To=Mi?To:nf(Qf),Mi=!0,To}const th=(...e)=>{const t=eh().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=sh(s);if(o)return n(o,!0,nh(o))},t};function nh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function sh(e){return Be(e)?document.querySelector(e):e}var oh=["link","meta","script","style","noscript","template"],ah=["title","base"],ih=([e,t,n])=>ah.includes(e)?e:oh.includes(e)?e==="meta"&&t.name?`${e}.${t.name}`:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,Object.entries(t).map(([s,o])=>typeof o=="boolean"?o?[s,""]:null:[s,o]).filter(s=>s!=null).sort(([s],[o])=>s.localeCompare(o)),n]):null,rh=e=>{const t=new Set,n=[];return e.forEach(s=>{const o=ih(s);o&&!t.has(o)&&(t.add(o),n.push(s))}),n},lh=e=>e[0]==="/"?e:`/${e}`,kl=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,Gt=e=>/^(https?:)?\/\//.test(e),ch=/.md((\?|#).*)?$/,oo=(e,t="/")=>!!(Gt(e)||e.startsWith("/")&&!e.startsWith(t)&&!ch.test(e)),ao=e=>/^[a-z][a-z0-9+.-]*:/.test(e),io=e=>Object.prototype.toString.call(e)==="[object Object]",uh=e=>{const[t,...n]=e.split(/(\?|#)/);if(!t||t.endsWith("/"))return e;let s=t.replace(/(^|\/)README.md$/i,"$1index.html");return s.endsWith(".md")?s=s.substring(0,s.length-3)+".html":s.endsWith(".html")||(s=s+".html"),s.endsWith("/index.html")&&(s=s.substring(0,s.length-10)),s+n.join("")},Ra=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Al=e=>e[0]==="/"?e.slice(1):e,dh=(e,t)=>{const n=Object.keys(e).sort((s,o)=>{const a=o.split("/").length-s.split("/").length;return a!==0?a:o.length-s.length});for(const s of n)if(t.startsWith(s))return s;return"/"},_e=e=>typeof e=="string";const fh="modulepreload",hh=function(e){return"/blog/"+e},Fi={},M=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.all(n.map(l=>{if(l=hh(l),l in Fi)return;Fi[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":fh,c||(d.as="script",d.crossOrigin=""),d.href=l,i&&d.setAttribute("nonce",i),document.head.appendChild(d),c)return new Promise((f,h)=>{d.addEventListener("load",f),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>t()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},ph=JSON.parse("{}"),mh=Object.fromEntries([["/",{loader:()=>M(()=>import("./index.html-DWv8dnjX.js"),__vite__mapDeps([0,1])),meta:{t:"博客主页",i:"home"}}],["/intro.html",{loader:()=>M(()=>import("./intro.html-B6K7pmzQ.js"),__vite__mapDeps([2,1])),meta:{t:"个人介绍",i:"user"}}],["/posts/backend/MPJ%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>M(()=>import("./MPJ的使用.html-Dg4SQLRV.js"),__vite__mapDeps([3,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["框架"],e:`<p><a href="https://mybatisplusjoin.com/" target="_blank" rel="noopener noreferrer">MyBatis-Plus-Join</a> (opens new window)（简称 MPJ）是一个 MyBatis-Plus (opens new window)的增强工具，在 MyBatis-Plus 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
`,r:{minutes:1.3,words:390},t:"MybatisPlusJoin的使用",i:"dragon",O:305,y:"a"}}],["/posts/backend/MP%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>M(()=>import("./MP的使用.html-C7QRvoir.js"),__vite__mapDeps([4,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["框架"],e:`<p><a href="https://mybatis.plus/" target="_blank" rel="noopener noreferrer">MyBatis-Plus</a>（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
`,r:{minutes:.35,words:106},t:"MybatisPlus的使用",i:"dragon",O:303,y:"a"}}],["/posts/backend/Mybatis%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>M(()=>import("./Mybatis的使用.html--c50lHmI.js"),__vite__mapDeps([5,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["后端"],g:["框架"],e:`<p><a href="https://mybatis.net.cn/" target="_blank" rel="noopener noreferrer">MyBatis</a>是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作。MyBatis 可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。</p>
`,r:{minutes:1.5,words:451},t:"Mybatis的使用",i:"dragon",O:301,y:"a"}}],["/posts/backend/PageHelper%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>M(()=>import("./PageHelper的使用.html-CRoYTrPn.js"),__vite__mapDeps([6,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["框架"],e:`<p>PageHelper是一个查询列表时的自动分页工具</p>
`,r:{minutes:1.33,words:400},t:"PageHelper的使用",i:"dragon",O:310,y:"a"}}],["/posts/backend/",{loader:()=>M(()=>import("./index.html-DAlGd_ow.js"),__vite__mapDeps([7,1])),meta:{t:"后端目录",i:"dragon"}}],["/posts/backend/lombok.html",{loader:()=>M(()=>import("./lombok.html-ChwbGtNt.js"),__vite__mapDeps([8,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["开发示例"],e:`<p><a href="https://projectlombok.org/" target="_blank" rel="noopener noreferrer">lombok</a> 是一个 java 库，它会自动插入您的编辑器和构建工具，为您的 Java 增添趣味。</p>
<p>再也不用编写另一个 getter 或 equals 方法了</p>
<p>只需一个注释，您的类就拥有了一个功能齐全的构建器，自动化了您的日志记录变量等等。</p>
`,r:{minutes:4.53,words:1359},t:"lombok的使用",i:"dragon",O:120,y:"a"}}],["/posts/backend/%E5%AE%9E%E4%BD%93%E7%B1%BB%E8%AF%B4%E6%98%8E.html",{loader:()=>M(()=>import("./实体类说明.html-BAmK1x3I.js"),__vite__mapDeps([9,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["基础概念"],e:`<p>该篇对实体类的 PO、VO、BO、DO、DAO、DTO、POJO 进行了区分</p>
`,r:{minutes:2.63,words:789},t:"实体类说明",i:"dragon",O:200,y:"a"}}],["/posts/backend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html",{loader:()=>M(()=>import("./开发示例.html-Cf1bCxl3.js"),__vite__mapDeps([10,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["开发示例"],e:`<p>该篇记录了后端开发中常用的代码</p>
`,r:{minutes:.73,words:220},t:"后端开发示例",i:"dragon",O:100,y:"a"}}],["/posts/backend/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E7%9A%84%E4%BD%BF%E7%94%A8.html",{loader:()=>M(()=>import("./网络地址的使用.html--zGDohFO.js"),__vite__mapDeps([11,1])),meta:{d:171504e7,l:"2024年5月7日",c:["后端"],g:["开发示例"],e:`<p>使用hutool工具包，通过图片的 <strong>网络地址</strong> 或 <strong>本地地址</strong> 对图片进行操作</p>
`,r:{minutes:1.15,words:346},t:"网络地址的使用",i:"dragon",O:101,y:"a"}}],["/posts/frontend/",{loader:()=>M(()=>import("./index.html-CBs6KTaS.js"),__vite__mapDeps([12,1])),meta:{t:"前端目录",i:"rocket"}}],["/posts/frontend/Vue%20VSCode%20Snippets%E6%8F%92%E4%BB%B6.html",{loader:()=>M(()=>import("./Vue VSCode Snippets插件.html-BFsA_LFY.js"),__vite__mapDeps([13,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["ide插件"],e:`<p>我：💘 <a href="https://github.com/sdras/vue-vscode-snippets" target="_blank" rel="noopener noreferrer">VVS</a>，听我说，谢谢你，因为有你，我的吃灰插件又多了一个</p>
<p>VVS：😹 是我不好用吗，你说出来，我优化</p>
<p>我：额，那倒不是，主要是 🥺 🥺 🥺 我不会用</p>
`,r:{minutes:4.05,words:1216},t:"Vue VSCode Snippets插件",i:"rocket",O:500,y:"a"}}],["/posts/frontend/jeecgboot%20vue3.html",{loader:()=>M(()=>import("./jeecgboot vue3.html-Sk9Z5fvl.js"),__vite__mapDeps([14,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发平台"],e:`<p>用惯了若依，再用这个jeecgboot，突然感觉自己不会写代码了 🤡 🤡 🤡</p>
`,r:{minutes:.67,words:202},t:"jeecgboot（vue3）",i:"rocket",O:403,y:"a"}}],["/posts/frontend/json-server.html",{loader:()=>M(()=>import("./json-server.html-Dm42D6qC.js"),__vite__mapDeps([15,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["前端"],g:["开发示例"],e:`<p>JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。 😮 😮 😮</p>
`,r:{minutes:1.67,words:501},t:"json-server",i:"rocket",O:105,y:"a"}}],["/posts/frontend/js%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.html",{loader:()=>M(()=>import("./js实现数据本地存储.html-C-WsCVZb.js"),__vite__mapDeps([16,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发示例"],e:`<p>原来在js中遍历数组的方式有这么多种啊 🤣 🤣 🤣</p>
`,r:{minutes:.29,words:88},t:"js实现数据本地存储",i:"rocket",O:102,y:"a"}}],["/posts/frontend/js%E9%81%8D%E5%8E%86%E6%95%B0%E7%BB%84.html",{loader:()=>M(()=>import("./js遍历数组.html-B9pSAUTL.js"),__vite__mapDeps([17,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发示例"],e:`<p>原来在js中遍历数组的方式有这么多种啊 🤣 🤣 🤣</p>
`,r:{minutes:.45,words:134},t:"js遍历数组",i:"rocket",O:101,y:"a"}}],["/posts/frontend/vue2%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html",{loader:()=>M(()=>import("./vue2基本概念.html-CUoQ-loZ.js"),__vite__mapDeps([18,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["基础概念"],e:`<p>vue2中那必须知道的概念 🙃 🙃 🙃</p>
`,r:{minutes:1.31,words:392},t:"vue2基本概念",i:"rocket",O:200,y:"a"}}],["/posts/frontend/%E5%B0%8F%E8%AF%BAvue3.html",{loader:()=>M(()=>import("./小诺vue3.html-DcdEMjvj.js"),__vite__mapDeps([19,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发平台"],e:`<p>基于vue3的小诺，值得一逝 👻 👻 👻</p>
`,r:{minutes:.4,words:120},t:"小诺（vue3）",i:"rocket",O:401,y:"a"}}],["/posts/frontend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html",{loader:()=>M(()=>import("./开发示例.html-YTMjbMyx.js"),__vite__mapDeps([20,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发示例"],e:`<p>菜鸟的进阶之码，你确定不收藏一下 💯 💯 💯</p>
`,r:{minutes:.98,words:295},t:"前端开发示例",i:"rocket",O:100,y:"a"}}],["/posts/frontend/%E8%8B%A5%E4%BE%9Dvue2.html",{loader:()=>M(()=>import("./若依vue2.html-to85Qukn.js"),__vite__mapDeps([21,1])),meta:{d:17152128e5,l:"2024年5月9日",c:["前端"],g:["开发平台"],e:`<p>都4202年了，不会还有人不知道若依vue2的用法吧 🥶 🥶 🥶</p>
`,r:{minutes:1.09,words:327},t:"若依(vue2)",i:"rocket",O:400,y:"a"}}],["/posts/other/",{loader:()=>M(()=>import("./index.html-DFrojXQ_.js"),__vite__mapDeps([22,1])),meta:{t:"更多目录",i:"infinity"}}],["/posts/other/%E5%AE%98%E7%BD%91%E5%92%8C%E6%96%87%E6%A1%A3%E9%93%BE%E6%8E%A5.html",{loader:()=>M(()=>import("./官网和文档链接.html-COG6jbBM.js"),__vite__mapDeps([23,1])),meta:{t:"官网和文档链接",i:"feather",I:!1}}],["/posts/other/%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%EF%BC%88%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.html",{loader:()=>M(()=>import("./返回顶部（油猴脚本）.html-m98R54Uv.js"),__vite__mapDeps([24,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["其他"],g:["脚本"],e:`<p>油猴是什么？😅</p>
<p>如何添加脚本？😂</p>
<p>为什么要分会顶部？🤣</p>
`,r:{minutes:1.76,words:529},t:"返回顶部（油猴脚本）",i:"seedling",O:105,y:"a"}}],["/posts/server/",{loader:()=>M(()=>import("./index.html-DpD8kij2.js"),__vite__mapDeps([25,1])),meta:{t:"服务器目录",i:"earth-americas"}}],["/posts/server/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.html",{loader:()=>M(()=>import("./宝塔面板.html-oBi3Petc.js"),__vite__mapDeps([26,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["服务器"],g:["linux命令"],e:`<p>什么？你不会维护服务器 😳 😳 😳</p>
<p>那宝塔总会用吧 💪 💪 💪</p>
`,r:{minutes:.41,words:124},t:"宝塔面板",i:"user-secret",O:100,y:"a"}}],["/posts/server/%E8%BF%90%E7%BB%B4%E7%A4%BA%E4%BE%8B.html",{loader:()=>M(()=>import("./运维示例.html-Cl08Jn0Z.js"),__vite__mapDeps([27,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["服务器"],g:["运维示例"],e:`<p>一个合格的程序猿，除了会使用<a href="/blog/posts/server/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.html" target="_blank">宝塔</a>，还要知道这些问题如何解决 🐒 🐒 🐒</p>
`,r:{minutes:.52,words:155},t:"运维示例",i:"user-secret",O:102,y:"a"}}],["/posts/sql/",{loader:()=>M(()=>import("./index.html-C354Tm2X.js"),__vite__mapDeps([28,1])),meta:{t:"数据库",i:"database"}}],["/posts/frontend/vue2/",{loader:()=>M(()=>import("./index.html-qKRYqZ1p.js"),__vite__mapDeps([29,1])),meta:{t:"vue2",i:"anchor"}}],["/posts/frontend/vue2/vue%E6%A6%82%E8%BF%B0.html",{loader:()=>M(()=>import("./vue概述.html-C1P3q4Ar.js"),__vite__mapDeps([30,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["vue2"],g:["学习笔记"],e:`<p>为什么要学习Vue 🐣</p>
<p>什么是Vue 🐤</p>
`,r:{minutes:1.39,words:416},t:"vue概述",i:"seedling",O:100,y:"a"}}],["/posts/frontend/vue2/%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96.html",{loader:()=>M(()=>import("./安装依赖.html-C94mwYGd.js"),__vite__mapDeps([31,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["vue2"],g:["学习笔记"],e:`<p>直接上命令，之后在写下命令的讲解 🐌 🐌 🐌</p>
`,r:{minutes:.48,words:143},t:"安装依赖",i:"seedling",O:200,y:"a"}}],["/posts/server/centos/",{loader:()=>M(()=>import("./index.html-Bn8ZZphJ.js"),__vite__mapDeps([32,1])),meta:{t:"centos",i:"server"}}],["/posts/server/centos/%E5%91%BD%E4%BB%A4.html",{loader:()=>M(()=>import("./命令.html-CleJmJHj.js"),__vite__mapDeps([33,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["服务器"],g:["centos"],e:`<p>这些linux运维命令，你都知道吗 🧛‍♂️ 🧛‍♂️ 🧛‍♂️</p>
`,r:{minutes:1.29,words:387},t:"命令",i:"user-secret",O:200,y:"a"}}],["/posts/server/centos/%E5%AE%89%E8%A3%85tomcat.html",{loader:()=>M(()=>import("./安装tomcat.html-CEVO1nnz.js"),__vite__mapDeps([34,1])),meta:{d:17155584e5,l:"2024年5月13日",c:["服务器"],g:["centos"],e:`<p>安装tomcat前，一定要确认服务器已经安装了jdk 😎 🤓 🥸</p>
`,r:{minutes:.14,words:42},t:"部署tomcat包",i:"user-secret",O:210,y:"a"}}],["/posts/server/centos/%E9%83%A8%E7%BD%B2war%E5%8C%85.html",{loader:()=>M(()=>import("./部署war包.html-B_AhF_c2.js"),__vite__mapDeps([35,1])),meta:{d:17155584e5,l:"2024年5月13日",c:["服务器"],g:["centos"],e:`<p>拿到一台连tomcat都没有配置的服务器，想要部署war包，这不是要命了吗 😮‍💨 😮‍💨 😮‍💨</p>
`,r:{minutes:.17,words:52},t:"部署war包",i:"user-secret",O:205,y:"a"}}],["/posts/server/ubuntu/",{loader:()=>M(()=>import("./index.html-Br1kz7B9.js"),__vite__mapDeps([36,1])),meta:{t:"ubuntu",i:"server"}}],["/posts/server/ubuntu/%E5%AE%89%E8%A3%85JAVA%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html",{loader:()=>M(()=>import("./安装JAVA开发环境.html-CIwnuF-S.js"),__vite__mapDeps([37,1])),meta:{d:171504e7,l:"2024年5月7日",c:["软件安装"],g:["java软件安装"],e:`<ul>
<li>
<p>该篇讲解了安装java开发环境，包括 <code>git</code>、<code>redis</code>、<code>mysql 5.7</code>、<code>maven</code></p>
</li>
<li>
<p>关于 <code>jdk</code> 的安装，是单独的一篇</p>
</li>
</ul>
`,r:{minutes:.99,words:298},t:"安装JAVA开发环境",i:"leaf",O:105,y:"a"}}],["/posts/server/ubuntu/%E5%AE%89%E8%A3%85JDK.html",{loader:()=>M(()=>import("./安装JDK.html-j9PHh8vg.js"),__vite__mapDeps([38,1])),meta:{d:17156448e5,l:"2024年5月14日",c:["软件安装"],g:["java软件安装"],e:`<p>之前对node的管理使用了nvm，jdk一直使用的是1.8，也没想过管理jdk</p>
<p>现在需要安装多个jdk了，想要找一个管理jdk版本的工具</p>
<p>结果。。。</p>
<p>系统有自带的版本管理工具</p>
`,r:{minutes:.6,words:181},t:"安装JDK",i:"leaf",O:100,y:"a"}}],["/posts/server/ubuntu/%E5%AE%89%E8%A3%85nvm.html",{loader:()=>M(()=>import("./安装nvm.html-ywqyD4BY.js"),__vite__mapDeps([39,1])),meta:{d:171504e7,l:"2024年5月7日",c:["软件安装"],g:["web软件安装"],e:`<p><a href="https://nvm.uihtm.com/" target="_blank" rel="noopener noreferrer">nvm</a> 是一个nodejs版本管理工具</p>
`,r:{minutes:.42,words:127},t:"安装node包管理工具nvm",i:"leaf",O:105,y:"a"}}],["/posts/server/ubuntu/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E.html",{loader:()=>M(()=>import("./软件安装路径说明.html-D8t2VFFm.js"),__vite__mapDeps([40,1])),meta:{d:171504e7,l:"2024年5月7日",c:["软件安装"],g:["ubuntu软件安装"],e:`<p>该安装路径是在 <strong>Ubuntu 24.04 LTS</strong> 系统下的路径说明，目的是为了卸载软件时可以清除相应软件的剩余文件</p>
`,r:{minutes:.52,words:155},t:"软件安装路径说明",i:"leaf",O:200,y:"a"}}],["/posts/server/ubuntu/%E9%80%9A%E8%BF%87%E5%8E%8B%E7%BC%A9%E5%8C%85%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html",{loader:()=>M(()=>import("./通过压缩包安装软件.html-DhGBS9dU.js"),__vite__mapDeps([41,1])),meta:{d:171504e7,l:"2024年5月7日",c:["软件安装"],g:["ubuntu软件安装"],e:`<ul>
<li>
<p>在ubuntu中安装软件，可以在 <a href="https://spark-app.store/download" target="_blank" rel="noopener noreferrer"><em><strong>星火应用商店</strong></em></a> 中安装</p>
</li>
<li>
<p>本篇讲述了如何使用 <strong>.tar.gz压缩包</strong> 的方式在ubuntu中完成软件的安装，该方法具有通用性</p>
</li>
<li>
<p>关于安装后的默认路径，在 <a href="/posts/server/ubuntu%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">ubuntu软件安装路径说明</a> 篇中进行了讲述</p>
</li>
<li>
<p>本篇以安装 <em><strong>IDEA</strong></em> 为例进行演示</p>
</li>
</ul>`,r:{minutes:1.24,words:371},t:"通过.tar.gz压缩包安装软件",i:"leaf",O:210,y:"a"}}],["/posts/server/ubuntu/%E9%80%9A%E8%BF%87%E5%AE%89%E8%A3%85%E5%8C%85%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html",{loader:()=>M(()=>import("./通过安装包安装软件.html-ChMhsIIU.js"),__vite__mapDeps([42,1])),meta:{d:171504e7,l:"2024年5月7日",c:["软件安装"],g:["ubuntu软件安装"],e:`<ul>
<li>
<p>在ubuntu中安装软件，可以在 <a href="https://spark-app.store/download" target="_blank" rel="noopener noreferrer"><em><strong>星火应用商店</strong></em></a> 中安装</p>
</li>
<li>
<p>本篇讲述了如何使用 <strong>dpkg安装包</strong> 的方式在ubuntu中完成软件的安装，该方法具有通用性</p>
</li>
<li>
<p>关于安装后的默认路径，在 <a href="/posts/server/ubuntu%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E" target="_blank" rel="noopener noreferrer">ubuntu软件安装路径说明</a> 篇中进行了讲述</p>
</li>
</ul>`,r:{minutes:.54,words:163},t:"通过dpkg安装包安装软件",i:"leaf",O:205,y:"a"}}],["/posts/sql/mysql/",{loader:()=>M(()=>import("./index.html-2Xg2oDDI.js"),__vite__mapDeps([43,1])),meta:{t:"mysql",i:"database"}}],["/posts/sql/mysql/json.html",{loader:()=>M(()=>import("./json.html-DLNZ01Qt.js"),__vite__mapDeps([44,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["mysql"],g:["数据库语法"],e:`<p>json存储，可以减少程序猿的开发时的工作量</p>
<p>至于后期维护嘛，都删库跑路了，爱谁谁</p>
`,r:{minutes:1.83,words:550},t:"json",i:"snowman",O:102,y:"a"}}],["/posts/sql/mysql/%E6%97%B6%E9%97%B4.html",{loader:()=>M(()=>import("./时间.html-DEzJ0R9W.js"),__vite__mapDeps([45,1])),meta:{d:17152992e5,l:"2024年5月10日",c:["mysql"],g:["数据库语法"],e:`<p>做过数据统计吗？</p>
<p>有被 ⏰ 折磨的死去活来的经历吗？</p>
`,r:{minutes:.22,words:65},t:"时间",i:"snowman",O:104,y:"a"}}],["/posts/sql/redis/",{loader:()=>M(()=>import("./index.html-DwnT41Ad.js"),__vite__mapDeps([46,1])),meta:{t:"redis",i:"database"}}],["/posts/sql/redis/redisConfig.html",{loader:()=>M(()=>import("./redisConfig.html-CzZLkv-7.js"),__vite__mapDeps([47,1])),meta:{d:17153856e5,l:"2024年5月11日",c:["redis"],g:["redis配置"],e:`<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code># Redis configuration file example.
#
# Note that in order to read the configuration file, Redis must be
# started with the file path as first argument:
#
# ./redis-server /path/to/redis.conf

# Note on units: when memory size is needed, it is possible to specify
# it in the usual form of 1k 5GB 4M and so forth:
#
# 1k =&gt; 1000 bytes
# 1kb =&gt; 1024 bytes
# 1m =&gt; 1000000 bytes
# 1mb =&gt; 1024*1024 bytes
# 1g =&gt; 1000000000 bytes
# 1gb =&gt; 1024*1024*1024 bytes
#
# units are case insensitive so 1GB 1Gb 1gB are all the same.

################################## INCLUDES ###################################

# Include one or more other config files here.  This is useful if you
# have a standard template that goes to all Redis servers but also need
# to customize a few per-server settings.  Include files can include
# other files, so use this wisely.
#
# Note that option "include" won't be rewritten by command "CONFIG REWRITE"
# from admin or Redis Sentinel. Since Redis always uses the last processed
# line as value of a configuration directive, you'd better put includes
# at the beginning of this file to avoid overwriting config change at runtime.
#
# If instead you are interested in using includes to override configuration
# options, it is better to use include as the last line.
#
# Included paths may contain wildcards. All files matching the wildcards will
# be included in alphabetical order.
# Note that if an include path contains a wildcards but no files match it when
# the server is started, the include statement will be ignored and no error will
# be emitted.  It is safe, therefore, to include wildcard files from empty
# directories.
#
# include /path/to/local.conf
# include /path/to/other.conf
# include /path/to/fragments/*.conf
#

################################## MODULES #####################################

# Load modules at startup. If the server is not able to load modules
# it will abort. It is possible to use multiple loadmodule directives.
#
# loadmodule /path/to/my_module.so
# loadmodule /path/to/other_module.so

################################## NETWORK #####################################

# By default, if no "bind" configuration directive is specified, Redis listens
# for connections from all available network interfaces on the host machine.
# It is possible to listen to just one or multiple selected interfaces using
# the "bind" configuration directive, followed by one or more IP addresses.
# Each address can be prefixed by "-", which means that redis will not fail to
# start if the address is not available. Being not available only refers to
# addresses that does not correspond to any network interface. Addresses that
# are already in use will always fail, and unsupported protocols will always BE
# silently skipped.
#
# Examples:
#
# bind 192.168.1.100 10.0.0.1     # listens on two specific IPv4 addresses
# bind 127.0.0.1 ::1              # listens on loopback IPv4 and IPv6
# bind * -::*                     # like the default, all available interfaces
#
# ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the
# internet, binding to all the interfaces is dangerous and will expose the
# instance to everybody on the internet. So by default we uncomment the
# following bind directive, that will force Redis to listen only on the
# IPv4 and IPv6 (if available) loopback interface addresses (this means Redis
# will only be able to accept client connections from the same host that it is
# running on).
#
# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES
# COMMENT OUT THE FOLLOWING LINE.
#
# You will also need to set a password unless you explicitly disable protected
# mode.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
bind 127.0.0.1 -::1

# By default, outgoing connections (from replica to master, from Sentinel to
# instances, cluster bus, etc.) are not bound to a specific local address. In
# most cases, this means the operating system will handle that based on routing
# and the interface through which the connection goes out.
#
# Using bind-source-addr it is possible to configure a specific address to bind
# to, which may also affect how the connection gets routed.
#
# Example:
#
# bind-source-addr 10.0.0.1

# Protected mode is a layer of security protection, in order to avoid that
# Redis instances left open on the internet are accessed and exploited.
#
# When protected mode is on and the default user has no password, the server
# only accepts local connections from the IPv4 address (127.0.0.1), IPv6 address
# (::1) or Unix domain sockets.
#
# By default protected mode is enabled. You should disable it only if
# you are sure you want clients from other hosts to connect to Redis
# even if no authentication is configured.
protected-mode yes

# Redis uses default hardened security configuration directives to reduce the
# attack surface on innocent users. Therefore, several sensitive configuration
# directives are immutable, and some potentially-dangerous commands are blocked.
#
# Configuration directives that control files that Redis writes to (e.g., 'dir'
# and 'dbfilename') and that aren't usually modified during runtime
# are protected by making them immutable.
#
# Commands that can increase the attack surface of Redis and that aren't usually
# called by users are blocked by default.
#
# These can be exposed to either all connections or just local ones by setting
# each of the configs listed below to either of these values:
#
# no    - Block for any connection (remain immutable)
# yes   - Allow for any connection (no protection)
# local - Allow only for local connections. Ones originating from the
#         IPv4 address (127.0.0.1), IPv6 address (::1) or Unix domain sockets.
#
# enable-protected-configs no
# enable-debug-command no
# enable-module-command no

# Accept connections on the specified port, default is 6379 (IANA #815344).
# If port 0 is specified Redis will not listen on a TCP socket.
port 6379

# TCP listen() backlog.
#
# In high requests-per-second environments you need a high backlog in order
# to avoid slow clients connection issues. Note that the Linux kernel
# will silently truncate it to the value of /proc/sys/net/core/somaxconn so
# make sure to raise both the value of somaxconn and tcp_max_syn_backlog
# in order to get the desired effect.
tcp-backlog 511

# Unix socket.
#
# Specify the path for the Unix socket that will be used to listen for
# incoming connections. There is no default, so Redis will not listen
# on a unix socket when not specified.
#
# unixsocket /run/redis/redis-server.sock
# unixsocketperm 700

# Close the connection after a client is idle for N seconds (0 to disable)
timeout 0

# TCP keepalive.
#
# If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence
# of communication. This is useful for two reasons:
#
# 1) Detect dead peers.
# 2) Force network equipment in the middle to consider the connection to be
#    alive.
#
# On Linux, the specified value (in seconds) is the period used to send ACKs.
# Note that to close the connection the double of the time is needed.
# On other kernels the period depends on the kernel configuration.
#
# A reasonable value for this option is 300 seconds, which is the new
# Redis default starting with Redis 3.2.1.
tcp-keepalive 300

# Apply OS-specific mechanism to mark the listening socket with the specified
# ID, to support advanced routing and filtering capabilities.
#
# On Linux, the ID represents a connection mark.
# On FreeBSD, the ID represents a socket cookie ID.
# On OpenBSD, the ID represents a route table ID.
#
# The default value is 0, which implies no marking is required.
# socket-mark-id 0

################################# TLS/SSL #####################################

# By default, TLS/SSL is disabled. To enable it, the "tls-port" configuration
# directive can be used to define TLS-listening ports. To enable TLS on the
# default port, use:
#
# port 0
# tls-port 6379

# Configure a X.509 certificate and private key to use for authenticating the
# server to connected clients, masters or cluster peers.  These files should be
# PEM formatted.
#
# tls-cert-file redis.crt
# tls-key-file redis.key
#
# If the key file is encrypted using a passphrase, it can be included here
# as well.
#
# tls-key-file-pass secret

# Normally Redis uses the same certificate for both server functions (accepting
# connections) and client functions (replicating from a master, establishing
# cluster bus connections, etc.).
#
# Sometimes certificates are issued with attributes that designate them as
# client-only or server-only certificates. In that case it may be desired to use
# different certificates for incoming (server) and outgoing (client)
# connections. To do that, use the following directives:
#
# tls-client-cert-file client.crt
# tls-client-key-file client.key
#
# If the key file is encrypted using a passphrase, it can be included here
# as well.
#
# tls-client-key-file-pass secret

# Configure a DH parameters file to enable Diffie-Hellman (DH) key exchange,
# required by older versions of OpenSSL (&lt;3.0). Newer versions do not require
# this configuration and recommend against it.
#
# tls-dh-params-file redis.dh

# Configure a CA certificate(s) bundle or directory to authenticate TLS/SSL
# clients and peers.  Redis requires an explicit configuration of at least one
# of these, and will not implicitly use the system wide configuration.
#
# tls-ca-cert-file ca.crt
# tls-ca-cert-dir /etc/ssl/certs

# By default, clients (including replica servers) on a TLS port are required
# to authenticate using valid client side certificates.
#
# If "no" is specified, client certificates are not required and not accepted.
# If "optional" is specified, client certificates are accepted and must be
# valid if provided, but are not required.
#
# tls-auth-clients no
# tls-auth-clients optional

# By default, a Redis replica does not attempt to establish a TLS connection
# with its master.
#
# Use the following directive to enable TLS on replication links.
#
# tls-replication yes

# By default, the Redis Cluster bus uses a plain TCP connection. To enable
# TLS for the bus protocol, use the following directive:
#
# tls-cluster yes

# By default, only TLSv1.2 and TLSv1.3 are enabled and it is highly recommended
# that older formally deprecated versions are kept disabled to reduce the attack surface.
# You can explicitly specify TLS versions to support.
# Allowed values are case insensitive and include "TLSv1", "TLSv1.1", "TLSv1.2",
# "TLSv1.3" (OpenSSL &gt;= 1.1.1) or any combination.
# To enable only TLSv1.2 and TLSv1.3, use:
#
# tls-protocols "TLSv1.2 TLSv1.3"

# Configure allowed ciphers.  See the ciphers(1ssl) manpage for more information
# about the syntax of this string.
#
# Note: this configuration applies only to &lt;= TLSv1.2.
#
# tls-ciphers DEFAULT:!MEDIUM

# Configure allowed TLSv1.3 ciphersuites.  See the ciphers(1ssl) manpage for more
# information about the syntax of this string, and specifically for TLSv1.3
# ciphersuites.
#
# tls-ciphersuites TLS_CHACHA20_POLY1305_SHA256

# When choosing a cipher, use the server's preference instead of the client
# preference. By default, the server follows the client's preference.
#
# tls-prefer-server-ciphers yes

# By default, TLS session caching is enabled to allow faster and less expensive
# reconnections by clients that support it. Use the following directive to disable
# caching.
#
# tls-session-caching no

# Change the default number of TLS sessions cached. A zero value sets the cache
# to unlimited size. The default size is 20480.
#
# tls-session-cache-size 5000

# Change the default timeout of cached TLS sessions. The default timeout is 300
# seconds.
#
# tls-session-cache-timeout 60

################################# GENERAL #####################################

# By default Redis does not run as a daemon. Use 'yes' if you need it.
# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.
# When Redis is supervised by upstart or systemd, this parameter has no impact.
daemonize yes

# If you run Redis from upstart or systemd, Redis can interact with your
# supervision tree. Options:
#   supervised no      - no supervision interaction
#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode
#                        requires "expect stop" in your upstart job config
#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET
#                        on startup, and updating Redis status on a regular
#                        basis.
#   supervised auto    - detect upstart or systemd method based on
#                        UPSTART_JOB or NOTIFY_SOCKET environment variables
# Note: these supervision methods only signal "process is ready."
#       They do not enable continuous pings back to your supervisor.
#
# The default is "no". To run under upstart/systemd, you can simply uncomment
# the line below:
#
# supervised auto

# If a pid file is specified, Redis writes it where specified at startup
# and removes it at exit.
#
# When the server runs non daemonized, no pid file is created if none is
# specified in the configuration. When the server is daemonized, the pid file
# is used even if not specified, defaulting to "/var/run/redis.pid".
#
# Creating a pid file is best effort: if Redis is not able to create it
# nothing bad happens, the server will start and run normally.
#
# Note that on modern Linux systems "/run/redis.pid" is more conforming
# and should be used instead.
pidfile /run/redis/redis-server.pid

# Specify the server verbosity level.
# This can be one of:
# debug (a lot of information, useful for development/testing)
# verbose (many rarely useful info, but not a mess like the debug level)
# notice (moderately verbose, what you want in production probably)
# warning (only very important / critical messages are logged)
loglevel notice

# Specify the log file name. Also the empty string can be used to force
# Redis to log on the standard output. Note that if you use standard
# output for logging but daemonize, logs will be sent to /dev/null
logfile /var/log/redis/redis-server.log

# To enable logging to the system logger, just set 'syslog-enabled' to yes,
# and optionally update the other syslog parameters to suit your needs.
# syslog-enabled no

# Specify the syslog identity.
# syslog-ident redis

# Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.
# syslog-facility local0

# To disable the built in crash log, which will possibly produce cleaner core
# dumps when they are needed, uncomment the following:
#
# crash-log-enabled no

# To disable the fast memory check that's run as part of the crash log, which
# will possibly let redis terminate sooner, uncomment the following:
#
# crash-memcheck-enabled no

# Set the number of databases. The default database is DB 0, you can select
# a different one on a per-connection basis using SELECT &lt;dbid&gt; where
# dbid is a number between 0 and 'databases'-1
databases 16

# By default Redis shows an ASCII art logo only when started to log to the
# standard output and if the standard output is a TTY and syslog logging is
# disabled. Basically this means that normally a logo is displayed only in
# interactive sessions.
#
# However it is possible to force the pre-4.0 behavior and always show a
# ASCII art logo in startup logs by setting the following option to yes.
always-show-logo no

# By default, Redis modifies the process title (as seen in 'top' and 'ps') to
# provide some runtime information. It is possible to disable this and leave
# the process name as executed by setting the following to no.
set-proc-title yes

# When changing the process title, Redis uses the following template to construct
# the modified title.
#
# Template variables are specified in curly brackets. The following variables are
# supported:
#
# {title}           Name of process as executed if parent, or type of child process.
# {listen-addr}     Bind address or '*' followed by TCP or TLS port listening on, or
#                   Unix socket if only that's available.
# {server-mode}     Special mode, i.e. "[sentinel]" or "[cluster]".
# {port}            TCP port listening on, or 0.
# {tls-port}        TLS port listening on, or 0.
# {unixsocket}      Unix domain socket listening on, or "".
# {config-file}     Name of configuration file used.
#
proc-title-template "{title} {listen-addr} {server-mode}"

################################ SNAPSHOTTING  ################################

# Save the DB to disk.
#
# save &lt;seconds&gt; &lt;changes&gt; [&lt;seconds&gt; &lt;changes&gt; ...]
#
# Redis will save the DB if the given number of seconds elapsed and it
# surpassed the given number of write operations against the DB.
#
# Snapshotting can be completely disabled with a single empty string argument
# as in following example:
#
# save ""
#
# Unless specified otherwise, by default Redis will save the DB:
#   * After 3600 seconds (an hour) if at least 1 change was performed
#   * After 300 seconds (5 minutes) if at least 100 changes were performed
#   * After 60 seconds if at least 10000 changes were performed
#
# You can set these explicitly by uncommenting the following line.
#
# save 3600 1 300 100 60 10000

# By default Redis will stop accepting writes if RDB snapshots are enabled
# (at least one save point) and the latest background save failed.
# This will make the user aware (in a hard way) that data is not persisting
# on disk properly, otherwise chances are that no one will notice and some
# disaster will happen.
#
# If the background saving process will start working again Redis will
# automatically allow writes again.
#
# However if you have setup your proper monitoring of the Redis server
# and persistence, you may want to disable this feature so that Redis will
# continue to work as usual even if there are problems with disk,
# permissions, and so forth.
stop-writes-on-bgsave-error yes

# Compress string objects using LZF when dump .rdb databases?
# By default compression is enabled as it's almost always a win.
# If you want to save some CPU in the saving child set it to 'no' but
# the dataset will likely be bigger if you have compressible values or keys.
rdbcompression yes

# Since version 5 of RDB a CRC64 checksum is placed at the end of the file.
# This makes the format more resistant to corruption but there is a performance
# hit to pay (around 10%) when saving and loading RDB files, so you can disable it
# for maximum performances.
#
# RDB files created with checksum disabled have a checksum of zero that will
# tell the loading code to skip the check.
rdbchecksum yes

# Enables or disables full sanitization checks for ziplist and listpack etc when
# loading an RDB or RESTORE payload. This reduces the chances of a assertion or
# crash later on while processing commands.
# Options:
#   no         - Never perform full sanitization
#   yes        - Always perform full sanitization
#   clients    - Perform full sanitization only for user connections.
#                Excludes: RDB files, RESTORE commands received from the master
#                connection, and client connections which have the
#                skip-sanitize-payload ACL flag.
# The default should be 'clients' but since it currently affects cluster
# resharding via MIGRATE, it is temporarily set to 'no' by default.
#
# sanitize-dump-payload no

# The filename where to dump the DB
dbfilename dump.rdb

# Remove RDB files used by replication in instances without persistence
# enabled. By default this option is disabled, however there are environments
# where for regulations or other security concerns, RDB files persisted on
# disk by masters in order to feed replicas, or stored on disk by replicas
# in order to load them for the initial synchronization, should be deleted
# ASAP. Note that this option ONLY WORKS in instances that have both AOF
# and RDB persistence disabled, otherwise is completely ignored.
#
# An alternative (and sometimes better) way to obtain the same effect is
# to use diskless replication on both master and replicas instances. However
# in the case of replicas, diskless is not always an option.
rdb-del-sync-files no

# The working directory.
#
# The DB will be written inside this directory, with the filename specified
# above using the 'dbfilename' configuration directive.
#
# The Append Only File will also be created inside this directory.
#
# Note that you must specify a directory here, not a file name.
dir /var/lib/redis

################################# REPLICATION #################################

# Master-Replica replication. Use replicaof to make a Redis instance a copy of
# another Redis server. A few things to understand ASAP about Redis replication.
#
#   +------------------+      +---------------+
#   |      Master      | ---&gt; |    Replica    |
#   | (receive writes) |      |  (exact copy) |
#   +------------------+      +---------------+
#
# 1) Redis replication is asynchronous, but you can configure a master to
#    stop accepting writes if it appears to be not connected with at least
#    a given number of replicas.
# 2) Redis replicas are able to perform a partial resynchronization with the
#    master if the replication link is lost for a relatively small amount of
#    time. You may want to configure the replication backlog size (see the next
#    sections of this file) with a sensible value depending on your needs.
# 3) Replication is automatic and does not need user intervention. After a
#    network partition replicas automatically try to reconnect to masters
#    and resynchronize with them.
#
# replicaof &lt;masterip&gt; &lt;masterport&gt;

# If the master is password protected (using the "requirepass" configuration
# directive below) it is possible to tell the replica to authenticate before
# starting the replication synchronization process, otherwise the master will
# refuse the replica request.
#
# masterauth &lt;master-password&gt;
#
# However this is not enough if you are using Redis ACLs (for Redis version
# 6 or greater), and the default user is not capable of running the PSYNC
# command and/or other commands needed for replication. In this case it's
# better to configure a special user to use with replication, and specify the
# masteruser configuration as such:
#
# masteruser &lt;username&gt;
#
# When masteruser is specified, the replica will authenticate against its
# master using the new AUTH form: AUTH &lt;username&gt; &lt;password&gt;.

# When a replica loses its connection with the master, or when the replication
# is still in progress, the replica can act in two different ways:
#
# 1) if replica-serve-stale-data is set to 'yes' (the default) the replica will
#    still reply to client requests, possibly with out of date data, or the
#    data set may just be empty if this is the first synchronization.
#
# 2) If replica-serve-stale-data is set to 'no' the replica will reply with error
#    "MASTERDOWN Link with MASTER is down and replica-serve-stale-data is set to 'no'"
#    to all data access commands, excluding commands such as:
#    INFO, REPLICAOF, AUTH, SHUTDOWN, REPLCONF, ROLE, CONFIG, SUBSCRIBE,
#    UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB, COMMAND, POST,
#    HOST and LATENCY.
#
replica-serve-stale-data yes

# You can configure a replica instance to accept writes or not. Writing against
# a replica instance may be useful to store some ephemeral data (because data
# written on a replica will be easily deleted after resync with the master) but
# may also cause problems if clients are writing to it because of a
# misconfiguration.
#
# Since Redis 2.6 by default replicas are read-only.
#
# Note: read only replicas are not designed to be exposed to untrusted clients
# on the internet. It's just a protection layer against misuse of the instance.
# Still a read only replica exports by default all the administrative commands
# such as CONFIG, DEBUG, and so forth. To a limited extent you can improve
# security of read only replicas using 'rename-command' to shadow all the
# administrative / dangerous commands.
replica-read-only yes

# Replication SYNC strategy: disk or socket.
#
# New replicas and reconnecting replicas that are not able to continue the
# replication process just receiving differences, need to do what is called a
# "full synchronization". An RDB file is transmitted from the master to the
# replicas.
#
# The transmission can happen in two different ways:
#
# 1) Disk-backed: The Redis master creates a new process that writes the RDB
#                 file on disk. Later the file is transferred by the parent
#                 process to the replicas incrementally.
# 2) Diskless: The Redis master creates a new process that directly writes the
#              RDB file to replica sockets, without touching the disk at all.
#
# With disk-backed replication, while the RDB file is generated, more replicas
# can be queued and served with the RDB file as soon as the current child
# producing the RDB file finishes its work. With diskless replication instead
# once the transfer starts, new replicas arriving will be queued and a new
# transfer will start when the current one terminates.
#
# When diskless replication is used, the master waits a configurable amount of
# time (in seconds) before starting the transfer in the hope that multiple
# replicas will arrive and the transfer can be parallelized.
#
# With slow disks and fast (large bandwidth) networks, diskless replication
# works better.
repl-diskless-sync yes

# When diskless replication is enabled, it is possible to configure the delay
# the server waits in order to spawn the child that transfers the RDB via socket
# to the replicas.
#
# This is important since once the transfer starts, it is not possible to serve
# new replicas arriving, that will be queued for the next RDB transfer, so the
# server waits a delay in order to let more replicas arrive.
#
# The delay is specified in seconds, and by default is 5 seconds. To disable
# it entirely just set it to 0 seconds and the transfer will start ASAP.
repl-diskless-sync-delay 5

# When diskless replication is enabled with a delay, it is possible to let
# the replication start before the maximum delay is reached if the maximum
# number of replicas expected have connected. Default of 0 means that the
# maximum is not defined and Redis will wait the full delay.
repl-diskless-sync-max-replicas 0

# -----------------------------------------------------------------------------
# WARNING: RDB diskless load is experimental. Since in this setup the replica
# does not immediately store an RDB on disk, it may cause data loss during
# failovers. RDB diskless load + Redis modules not handling I/O reads may also
# cause Redis to abort in case of I/O errors during the initial synchronization
# stage with the master. Use only if you know what you are doing.
# -----------------------------------------------------------------------------
#
# Replica can load the RDB it reads from the replication link directly from the
# socket, or store the RDB to a file and read that file after it was completely
# received from the master.
#
# In many cases the disk is slower than the network, and storing and loading
# the RDB file may increase replication time (and even increase the master's
# Copy on Write memory and replica buffers).
# However, parsing the RDB file directly from the socket may mean that we have
# to flush the contents of the current database before the full rdb was
# received. For this reason we have the following options:
#
# "disabled"    - Don't use diskless load (store the rdb file to the disk first)
# "on-empty-db" - Use diskless load only when it is completely safe.
# "swapdb"      - Keep current db contents in RAM while parsing the data directly
#                 from the socket. Replicas in this mode can keep serving current
#                 data set while replication is in progress, except for cases where
#                 they can't recognize master as having a data set from same
#                 replication history.
#                 Note that this requires sufficient memory, if you don't have it,
#                 you risk an OOM kill.
repl-diskless-load disabled

# Master send PINGs to its replicas in a predefined interval. It's possible to
# change this interval with the repl_ping_replica_period option. The default
# value is 10 seconds.
#
# repl-ping-replica-period 10

# The following option sets the replication timeout for:
#
# 1) Bulk transfer I/O during SYNC, from the point of view of replica.
# 2) Master timeout from the point of view of replicas (data, pings).
# 3) Replica timeout from the point of view of masters (REPLCONF ACK pings).
#
# It is important to make sure that this value is greater than the value
# specified for repl-ping-replica-period otherwise a timeout will be detected
# every time there is low traffic between the master and the replica. The default
# value is 60 seconds.
#
# repl-timeout 60

# Disable TCP_NODELAY on the replica socket after SYNC?
#
# If you select "yes" Redis will use a smaller number of TCP packets and
# less bandwidth to send data to replicas. But this can add a delay for
# the data to appear on the replica side, up to 40 milliseconds with
# Linux kernels using a default configuration.
#
# If you select "no" the delay for data to appear on the replica side will
# be reduced but more bandwidth will be used for replication.
#
# By default we optimize for low latency, but in very high traffic conditions
# or when the master and replicas are many hops away, turning this to "yes" may
# be a good idea.
repl-disable-tcp-nodelay no

# Set the replication backlog size. The backlog is a buffer that accumulates
# replica data when replicas are disconnected for some time, so that when a
# replica wants to reconnect again, often a full resync is not needed, but a
# partial resync is enough, just passing the portion of data the replica
# missed while disconnected.
#
# The bigger the replication backlog, the longer the replica can endure the
# disconnect and later be able to perform a partial resynchronization.
#
# The backlog is only allocated if there is at least one replica connected.
#
# repl-backlog-size 1mb

# After a master has no connected replicas for some time, the backlog will be
# freed. The following option configures the amount of seconds that need to
# elapse, starting from the time the last replica disconnected, for the backlog
# buffer to be freed.
#
# Note that replicas never free the backlog for timeout, since they may be
# promoted to masters later, and should be able to correctly "partially
# resynchronize" with other replicas: hence they should always accumulate backlog.
#
# A value of 0 means to never release the backlog.
#
# repl-backlog-ttl 3600

# The replica priority is an integer number published by Redis in the INFO
# output. It is used by Redis Sentinel in order to select a replica to promote
# into a master if the master is no longer working correctly.
#
# A replica with a low priority number is considered better for promotion, so
# for instance if there are three replicas with priority 10, 100, 25 Sentinel
# will pick the one with priority 10, that is the lowest.
#
# However a special priority of 0 marks the replica as not able to perform the
# role of master, so a replica with priority of 0 will never be selected by
# Redis Sentinel for promotion.
#
# By default the priority is 100.
replica-priority 100

# The propagation error behavior controls how Redis will behave when it is
# unable to handle a command being processed in the replication stream from a master
# or processed while reading from an AOF file. Errors that occur during propagation
# are unexpected, and can cause data inconsistency. However, there are edge cases
# in earlier versions of Redis where it was possible for the server to replicate or persist
# commands that would fail on future versions. For this reason the default behavior
# is to ignore such errors and continue processing commands.
#
# If an application wants to ensure there is no data divergence, this configuration
# should be set to 'panic' instead. The value can also be set to 'panic-on-replicas'
# to only panic when a replica encounters an error on the replication stream. One of
# these two panic values will become the default value in the future once there are
# sufficient safety mechanisms in place to prevent false positive crashes.
#
# propagation-error-behavior ignore

# Replica ignore disk write errors controls the behavior of a replica when it is
# unable to persist a write command received from its master to disk. By default,
# this configuration is set to 'no' and will crash the replica in this condition.
# It is not recommended to change this default, however in order to be compatible
# with older versions of Redis this config can be toggled to 'yes' which will just
# log a warning and execute the write command it got from the master.
#
# replica-ignore-disk-write-errors no

# -----------------------------------------------------------------------------
# By default, Redis Sentinel includes all replicas in its reports. A replica
# can be excluded from Redis Sentinel's announcements. An unannounced replica
# will be ignored by the 'sentinel replicas &lt;master&gt;' command and won't be
# exposed to Redis Sentinel's clients.
#
# This option does not change the behavior of replica-priority. Even with
# replica-announced set to 'no', the replica can be promoted to master. To
# prevent this behavior, set replica-priority to 0.
#
# replica-announced yes

# It is possible for a master to stop accepting writes if there are less than
# N replicas connected, having a lag less or equal than M seconds.
#
# The N replicas need to be in "online" state.
#
# The lag in seconds, that must be &lt;= the specified value, is calculated from
# the last ping received from the replica, that is usually sent every second.
#
# This option does not GUARANTEE that N replicas will accept the write, but
# will limit the window of exposure for lost writes in case not enough replicas
# are available, to the specified number of seconds.
#
# For example to require at least 3 replicas with a lag &lt;= 10 seconds use:
#
# min-replicas-to-write 3
# min-replicas-max-lag 10
#
# Setting one or the other to 0 disables the feature.
#
# By default min-replicas-to-write is set to 0 (feature disabled) and
# min-replicas-max-lag is set to 10.

# A Redis master is able to list the address and port of the attached
# replicas in different ways. For example the "INFO replication" section
# offers this information, which is used, among other tools, by
# Redis Sentinel in order to discover replica instances.
# Another place where this info is available is in the output of the
# "ROLE" command of a master.
#
# The listed IP address and port normally reported by a replica is
# obtained in the following way:
#
#   IP: The address is auto detected by checking the peer address
#   of the socket used by the replica to connect with the master.
#
#   Port: The port is communicated by the replica during the replication
#   handshake, and is normally the port that the replica is using to
#   listen for connections.
#
# However when port forwarding or Network Address Translation (NAT) is
# used, the replica may actually be reachable via different IP and port
# pairs. The following two options can be used by a replica in order to
# report to its master a specific set of IP and port, so that both INFO
# and ROLE will report those values.
#
# There is no need to use both the options if you need to override just
# the port or the IP address.
#
# replica-announce-ip 5.5.5.5
# replica-announce-port 1234

############################### KEYS TRACKING #################################

# Redis implements server assisted support for client side caching of values.
# This is implemented using an invalidation table that remembers, using
# a radix key indexed by key name, what clients have which keys. In turn
# this is used in order to send invalidation messages to clients. Please
# check this page to understand more about the feature:
#
#   https://redis.io/topics/client-side-caching
#
# When tracking is enabled for a client, all the read only queries are assumed
# to be cached: this will force Redis to store information in the invalidation
# table. When keys are modified, such information is flushed away, and
# invalidation messages are sent to the clients. However if the workload is
# heavily dominated by reads, Redis could use more and more memory in order
# to track the keys fetched by many clients.
#
# For this reason it is possible to configure a maximum fill value for the
# invalidation table. By default it is set to 1M of keys, and once this limit
# is reached, Redis will start to evict keys in the invalidation table
# even if they were not modified, just to reclaim memory: this will in turn
# force the clients to invalidate the cached values. Basically the table
# maximum size is a trade off between the memory you want to spend server
# side to track information about who cached what, and the ability of clients
# to retain cached objects in memory.
#
# If you set the value to 0, it means there are no limits, and Redis will
# retain as many keys as needed in the invalidation table.
# In the "stats" INFO section, you can find information about the number of
# keys in the invalidation table at every given moment.
#
# Note: when key tracking is used in broadcasting mode, no memory is used
# in the server side so this setting is useless.
#
# tracking-table-max-keys 1000000

################################## SECURITY ###################################

# Warning: since Redis is pretty fast, an outside user can try up to
# 1 million passwords per second against a modern box. This means that you
# should use very strong passwords, otherwise they will be very easy to break.
# Note that because the password is really a shared secret between the client
# and the server, and should not be memorized by any human, the password
# can be easily a long string from /dev/urandom or whatever, so by using a
# long and unguessable password no brute force attack will be possible.

# Redis ACL users are defined in the following format:
#
#   user &lt;username&gt; ... acl rules ...
#
# For example:
#
#   user worker +@list +@connection ~jobs:* on &gt;ffa9203c493aa99
#
# The special username "default" is used for new connections. If this user
# has the "nopass" rule, then new connections will be immediately authenticated
# as the "default" user without the need of any password provided via the
# AUTH command. Otherwise if the "default" user is not flagged with "nopass"
# the connections will start in not authenticated state, and will require
# AUTH (or the HELLO command AUTH option) in order to be authenticated and
# start to work.
#
# The ACL rules that describe what a user can do are the following:
#
#  on           Enable the user: it is possible to authenticate as this user.
#  off          Disable the user: it's no longer possible to authenticate
#               with this user, however the already authenticated connections
#               will still work.
#  skip-sanitize-payload    RESTORE dump-payload sanitization is skipped.
#  sanitize-payload         RESTORE dump-payload is sanitized (default).
#  +&lt;command&gt;   Allow the execution of that command.
#               May be used with \`|\` for allowing subcommands (e.g "+config|get")
#  -&lt;command&gt;   Disallow the execution of that command.
#               May be used with \`|\` for blocking subcommands (e.g "-config|set")
#  +@&lt;category&gt; Allow the execution of all the commands in such category
#               with valid categories are like @admin, @set, @sortedset, ...
#               and so forth, see the full list in the server.c file where
#               the Redis command table is described and defined.
#               The special category @all means all the commands, but currently
#               present in the server, and that will be loaded in the future
#               via modules.
#  +&lt;command&gt;|first-arg  Allow a specific first argument of an otherwise
#                        disabled command. It is only supported on commands with
#                        no sub-commands, and is not allowed as negative form
#                        like -SELECT|1, only additive starting with "+". This
#                        feature is deprecated and may be removed in the future.
#  allcommands  Alias for +@all. Note that it implies the ability to execute
#               all the future commands loaded via the modules system.
#  nocommands   Alias for -@all.
#  ~&lt;pattern&gt;   Add a pattern of keys that can be mentioned as part of
#               commands. For instance ~* allows all the keys. The pattern
#               is a glob-style pattern like the one of KEYS.
#               It is possible to specify multiple patterns.
# %R~&lt;pattern&gt;  Add key read pattern that specifies which keys can be read 
#               from.
# %W~&lt;pattern&gt;  Add key write pattern that specifies which keys can be
#               written to. 
#  allkeys      Alias for ~*
#  resetkeys    Flush the list of allowed keys patterns.
#  &amp;&lt;pattern&gt;   Add a glob-style pattern of Pub/Sub channels that can be
#               accessed by the user. It is possible to specify multiple channel
#               patterns.
#  allchannels  Alias for &amp;*
#  resetchannels            Flush the list of allowed channel patterns.
#  &gt;&lt;password&gt;  Add this password to the list of valid password for the user.
#               For example &gt;mypass will add "mypass" to the list.
#               This directive clears the "nopass" flag (see later).
#  &lt;&lt;password&gt;  Remove this password from the list of valid passwords.
#  nopass       All the set passwords of the user are removed, and the user
#               is flagged as requiring no password: it means that every
#               password will work against this user. If this directive is
#               used for the default user, every new connection will be
#               immediately authenticated with the default user without
#               any explicit AUTH command required. Note that the "resetpass"
#               directive will clear this condition.
#  resetpass    Flush the list of allowed passwords. Moreover removes the
#               "nopass" status. After "resetpass" the user has no associated
#               passwords and there is no way to authenticate without adding
#               some password (or setting it as "nopass" later).
#  reset        Performs the following actions: resetpass, resetkeys, off,
#               -@all. The user returns to the same state it has immediately
#               after its creation.
# (&lt;options&gt;)   Create a new selector with the options specified within the
#               parentheses and attach it to the user. Each option should be 
#               space separated. The first character must be ( and the last 
#               character must be ).
# clearselectors            Remove all of the currently attached selectors. 
#                           Note this does not change the "root" user permissions,
#                           which are the permissions directly applied onto the
#                           user (outside the parentheses).
#
# ACL rules can be specified in any order: for instance you can start with
# passwords, then flags, or key patterns. However note that the additive
# and subtractive rules will CHANGE MEANING depending on the ordering.
# For instance see the following example:
#
#   user alice on +@all -DEBUG ~* &gt;somepassword
#
# This will allow "alice" to use all the commands with the exception of the
# DEBUG command, since +@all added all the commands to the set of the commands
# alice can use, and later DEBUG was removed. However if we invert the order
# of two ACL rules the result will be different:
#
#   user alice on -DEBUG +@all ~* &gt;somepassword
#
# Now DEBUG was removed when alice had yet no commands in the set of allowed
# commands, later all the commands are added, so the user will be able to
# execute everything.
#
# Basically ACL rules are processed left-to-right.
#
# The following is a list of command categories and their meanings:
# * keyspace - Writing or reading from keys, databases, or their metadata 
#     in a type agnostic way. Includes DEL, RESTORE, DUMP, RENAME, EXISTS, DBSIZE,
#     KEYS, EXPIRE, TTL, FLUSHALL, etc. Commands that may modify the keyspace,
#     key or metadata will also have \`write\` category. Commands that only read
#     the keyspace, key or metadata will have the \`read\` category.
# * read - Reading from keys (values or metadata). Note that commands that don't
#     interact with keys, will not have either \`read\` or \`write\`.
# * write - Writing to keys (values or metadata)
# * admin - Administrative commands. Normal applications will never need to use
#     these. Includes REPLICAOF, CONFIG, DEBUG, SAVE, MONITOR, ACL, SHUTDOWN, etc.
# * dangerous - Potentially dangerous (each should be considered with care for
#     various reasons). This includes FLUSHALL, MIGRATE, RESTORE, SORT, KEYS,
#     CLIENT, DEBUG, INFO, CONFIG, SAVE, REPLICAOF, etc.
# * connection - Commands affecting the connection or other connections.
#     This includes AUTH, SELECT, COMMAND, CLIENT, ECHO, PING, etc.
# * blocking - Potentially blocking the connection until released by another
#     command.
# * fast - Fast O(1) commands. May loop on the number of arguments, but not the
#     number of elements in the key.
# * slow - All commands that are not Fast.
# * pubsub - PUBLISH / SUBSCRIBE related
# * transaction - WATCH / MULTI / EXEC related commands.
# * scripting - Scripting related.
# * set - Data type: sets related.
# * sortedset - Data type: zsets related.
# * list - Data type: lists related.
# * hash - Data type: hashes related.
# * string - Data type: strings related.
# * bitmap - Data type: bitmaps related.
# * hyperloglog - Data type: hyperloglog related.
# * geo - Data type: geo related.
# * stream - Data type: streams related.
#
# For more information about ACL configuration please refer to
# the Redis web site at https://redis.io/topics/acl

# ACL LOG
#
# The ACL Log tracks failed commands and authentication events associated
# with ACLs. The ACL Log is useful to troubleshoot failed commands blocked
# by ACLs. The ACL Log is stored in memory. You can reclaim memory with
# ACL LOG RESET. Define the maximum entry length of the ACL Log below.
acllog-max-len 128

# Using an external ACL file
#
# Instead of configuring users here in this file, it is possible to use
# a stand-alone file just listing users. The two methods cannot be mixed:
# if you configure users here and at the same time you activate the external
# ACL file, the server will refuse to start.
#
# The format of the external ACL user file is exactly the same as the
# format that is used inside redis.conf to describe users.
#
# aclfile /etc/redis/users.acl

# IMPORTANT NOTE: starting with Redis 6 "requirepass" is just a compatibility
# layer on top of the new ACL system. The option effect will be just setting
# the password for the default user. Clients will still authenticate using
# AUTH &lt;password&gt; as usually, or more explicitly with AUTH default &lt;password&gt;
# if they follow the new protocol: both will work.
#
# The requirepass is not compatible with aclfile option and the ACL LOAD
# command, these will cause requirepass to be ignored.
#
# requirepass foobared

# New users are initialized with restrictive permissions by default, via the
# equivalent of this ACL rule 'off resetkeys -@all'. Starting with Redis 6.2, it
# is possible to manage access to Pub/Sub channels with ACL rules as well. The
# default Pub/Sub channels permission if new users is controlled by the
# acl-pubsub-default configuration directive, which accepts one of these values:
#
# allchannels: grants access to all Pub/Sub channels
# resetchannels: revokes access to all Pub/Sub channels
#
# From Redis 7.0, acl-pubsub-default defaults to 'resetchannels' permission.
#
# acl-pubsub-default resetchannels

# Command renaming (DEPRECATED).
#
# ------------------------------------------------------------------------
# WARNING: avoid using this option if possible. Instead use ACLs to remove
# commands from the default user, and put them only in some admin user you
# create for administrative purposes.
# ------------------------------------------------------------------------
#
# It is possible to change the name of dangerous commands in a shared
# environment. For instance the CONFIG command may be renamed into something
# hard to guess so that it will still be available for internal-use tools
# but not available for general clients.
#
# Example:
#
# rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52
#
# It is also possible to completely kill a command by renaming it into
# an empty string:
#
# rename-command CONFIG ""
#
# Please note that changing the name of commands that are logged into the
# AOF file or transmitted to replicas may cause problems.

################################### CLIENTS ####################################

# Set the max number of connected clients at the same time. By default
# this limit is set to 10000 clients, however if the Redis server is not
# able to configure the process file limit to allow for the specified limit
# the max number of allowed clients is set to the current file limit
# minus 32 (as Redis reserves a few file descriptors for internal uses).
#
# Once the limit is reached Redis will close all the new connections sending
# an error 'max number of clients reached'.
#
# IMPORTANT: When Redis Cluster is used, the max number of connections is also
# shared with the cluster bus: every node in the cluster will use two
# connections, one incoming and another outgoing. It is important to size the
# limit accordingly in case of very large clusters.
#
# maxclients 10000

############################## MEMORY MANAGEMENT ################################

# Set a memory usage limit to the specified amount of bytes.
# When the memory limit is reached Redis will try to remove keys
# according to the eviction policy selected (see maxmemory-policy).
#
# If Redis can't remove keys according to the policy, or if the policy is
# set to 'noeviction', Redis will start to reply with errors to commands
# that would use more memory, like SET, LPUSH, and so on, and will continue
# to reply to read-only commands like GET.
#
# This option is usually useful when using Redis as an LRU or LFU cache, or to
# set a hard memory limit for an instance (using the 'noeviction' policy).
#
# WARNING: If you have replicas attached to an instance with maxmemory on,
# the size of the output buffers needed to feed the replicas are subtracted
# from the used memory count, so that network problems / resyncs will
# not trigger a loop where keys are evicted, and in turn the output
# buffer of replicas is full with DELs of keys evicted triggering the deletion
# of more keys, and so forth until the database is completely emptied.
#
# In short... if you have replicas attached it is suggested that you set a lower
# limit for maxmemory so that there is some free RAM on the system for replica
# output buffers (but this is not needed if the policy is 'noeviction').
#
# maxmemory &lt;bytes&gt;

# MAXMEMORY POLICY: how Redis will select what to remove when maxmemory
# is reached. You can select one from the following behaviors:
#
# volatile-lru -&gt; Evict using approximated LRU, only keys with an expire set.
# allkeys-lru -&gt; Evict any key using approximated LRU.
# volatile-lfu -&gt; Evict using approximated LFU, only keys with an expire set.
# allkeys-lfu -&gt; Evict any key using approximated LFU.
# volatile-random -&gt; Remove a random key having an expire set.
# allkeys-random -&gt; Remove a random key, any key.
# volatile-ttl -&gt; Remove the key with the nearest expire time (minor TTL)
# noeviction -&gt; Don't evict anything, just return an error on write operations.
#
# LRU means Least Recently Used
# LFU means Least Frequently Used
#
# Both LRU, LFU and volatile-ttl are implemented using approximated
# randomized algorithms.
#
# Note: with any of the above policies, when there are no suitable keys for
# eviction, Redis will return an error on write operations that require
# more memory. These are usually commands that create new keys, add data or
# modify existing keys. A few examples are: SET, INCR, HSET, LPUSH, SUNIONSTORE,
# SORT (due to the STORE argument), and EXEC (if the transaction includes any
# command that requires memory).
#
# The default is:
#
# maxmemory-policy noeviction

# LRU, LFU and minimal TTL algorithms are not precise algorithms but approximated
# algorithms (in order to save memory), so you can tune it for speed or
# accuracy. By default Redis will check five keys and pick the one that was
# used least recently, you can change the sample size using the following
# configuration directive.
#
# The default of 5 produces good enough results. 10 Approximates very closely
# true LRU but costs more CPU. 3 is faster but not very accurate.
#
# maxmemory-samples 5

# Eviction processing is designed to function well with the default setting.
# If there is an unusually large amount of write traffic, this value may need to
# be increased.  Decreasing this value may reduce latency at the risk of
# eviction processing effectiveness
#   0 = minimum latency, 10 = default, 100 = process without regard to latency
#
# maxmemory-eviction-tenacity 10

# Starting from Redis 5, by default a replica will ignore its maxmemory setting
# (unless it is promoted to master after a failover or manually). It means
# that the eviction of keys will be just handled by the master, sending the
# DEL commands to the replica as keys evict in the master side.
#
# This behavior ensures that masters and replicas stay consistent, and is usually
# what you want, however if your replica is writable, or you want the replica
# to have a different memory setting, and you are sure all the writes performed
# to the replica are idempotent, then you may change this default (but be sure
# to understand what you are doing).
#
# Note that since the replica by default does not evict, it may end using more
# memory than the one set via maxmemory (there are certain buffers that may
# be larger on the replica, or data structures may sometimes take more memory
# and so forth). So make sure you monitor your replicas and make sure they
# have enough memory to never hit a real out-of-memory condition before the
# master hits the configured maxmemory setting.
#
# replica-ignore-maxmemory yes

# Redis reclaims expired keys in two ways: upon access when those keys are
# found to be expired, and also in background, in what is called the
# "active expire key". The key space is slowly and interactively scanned
# looking for expired keys to reclaim, so that it is possible to free memory
# of keys that are expired and will never be accessed again in a short time.
#
# The default effort of the expire cycle will try to avoid having more than
# ten percent of expired keys still in memory, and will try to avoid consuming
# more than 25% of total memory and to add latency to the system. However
# it is possible to increase the expire "effort" that is normally set to
# "1", to a greater value, up to the value "10". At its maximum value the
# system will use more CPU, longer cycles (and technically may introduce
# more latency), and will tolerate less already expired keys still present
# in the system. It's a tradeoff between memory, CPU and latency.
#
# active-expire-effort 1

############################# LAZY FREEING ####################################

# Redis has two primitives to delete keys. One is called DEL and is a blocking
# deletion of the object. It means that the server stops processing new commands
# in order to reclaim all the memory associated with an object in a synchronous
# way. If the key deleted is associated with a small object, the time needed
# in order to execute the DEL command is very small and comparable to most other
# O(1) or O(log_N) commands in Redis. However if the key is associated with an
# aggregated value containing millions of elements, the server can block for
# a long time (even seconds) in order to complete the operation.
#
# For the above reasons Redis also offers non blocking deletion primitives
# such as UNLINK (non blocking DEL) and the ASYNC option of FLUSHALL and
# FLUSHDB commands, in order to reclaim memory in background. Those commands
# are executed in constant time. Another thread will incrementally free the
# object in the background as fast as possible.
#
# DEL, UNLINK and ASYNC option of FLUSHALL and FLUSHDB are user-controlled.
# It's up to the design of the application to understand when it is a good
# idea to use one or the other. However the Redis server sometimes has to
# delete keys or flush the whole database as a side effect of other operations.
# Specifically Redis deletes objects independently of a user call in the
# following scenarios:
#
# 1) On eviction, because of the maxmemory and maxmemory policy configurations,
#    in order to make room for new data, without going over the specified
#    memory limit.
# 2) Because of expire: when a key with an associated time to live (see the
#    EXPIRE command) must be deleted from memory.
# 3) Because of a side effect of a command that stores data on a key that may
#    already exist. For example the RENAME command may delete the old key
#    content when it is replaced with another one. Similarly SUNIONSTORE
#    or SORT with STORE option may delete existing keys. The SET command
#    itself removes any old content of the specified key in order to replace
#    it with the specified string.
# 4) During replication, when a replica performs a full resynchronization with
#    its master, the content of the whole database is removed in order to
#    load the RDB file just transferred.
#
# In all the above cases the default is to delete objects in a blocking way,
# like if DEL was called. However you can configure each case specifically
# in order to instead release memory in a non-blocking way like if UNLINK
# was called, using the following configuration directives.

lazyfree-lazy-eviction no
lazyfree-lazy-expire no
lazyfree-lazy-server-del no
replica-lazy-flush no

# It is also possible, for the case when to replace the user code DEL calls
# with UNLINK calls is not easy, to modify the default behavior of the DEL
# command to act exactly like UNLINK, using the following configuration
# directive:

lazyfree-lazy-user-del no

# FLUSHDB, FLUSHALL, SCRIPT FLUSH and FUNCTION FLUSH support both asynchronous and synchronous
# deletion, which can be controlled by passing the [SYNC|ASYNC] flags into the
# commands. When neither flag is passed, this directive will be used to determine
# if the data should be deleted asynchronously.

lazyfree-lazy-user-flush no

################################ THREADED I/O #################################

# Redis is mostly single threaded, however there are certain threaded
# operations such as UNLINK, slow I/O accesses and other things that are
# performed on side threads.
#
# Now it is also possible to handle Redis clients socket reads and writes
# in different I/O threads. Since especially writing is so slow, normally
# Redis users use pipelining in order to speed up the Redis performances per
# core, and spawn multiple instances in order to scale more. Using I/O
# threads it is possible to easily speedup two times Redis without resorting
# to pipelining nor sharding of the instance.
#
# By default threading is disabled, we suggest enabling it only in machines
# that have at least 4 or more cores, leaving at least one spare core.
# Using more than 8 threads is unlikely to help much. We also recommend using
# threaded I/O only if you actually have performance problems, with Redis
# instances being able to use a quite big percentage of CPU time, otherwise
# there is no point in using this feature.
#
# So for instance if you have a four cores boxes, try to use 2 or 3 I/O
# threads, if you have a 8 cores, try to use 6 threads. In order to
# enable I/O threads use the following configuration directive:
#
# io-threads 4
#
# Setting io-threads to 1 will just use the main thread as usual.
# When I/O threads are enabled, we only use threads for writes, that is
# to thread the write(2) syscall and transfer the client buffers to the
# socket. However it is also possible to enable threading of reads and
# protocol parsing using the following configuration directive, by setting
# it to yes:
#
# io-threads-do-reads no
#
# Usually threading reads doesn't help much.
#
# NOTE 1: This configuration directive cannot be changed at runtime via
# CONFIG SET. Also, this feature currently does not work when SSL is
# enabled.
#
# NOTE 2: If you want to test the Redis speedup using redis-benchmark, make
# sure you also run the benchmark itself in threaded mode, using the
# --threads option to match the number of Redis threads, otherwise you'll not
# be able to notice the improvements.

############################ KERNEL OOM CONTROL ##############################

# On Linux, it is possible to hint the kernel OOM killer on what processes
# should be killed first when out of memory.
#
# Enabling this feature makes Redis actively control the oom_score_adj value
# for all its processes, depending on their role. The default scores will
# attempt to have background child processes killed before all others, and
# replicas killed before masters.
#
# Redis supports these options:
#
# no:       Don't make changes to oom-score-adj (default).
# yes:      Alias to "relative" see below.
# absolute: Values in oom-score-adj-values are written as is to the kernel.
# relative: Values are used relative to the initial value of oom_score_adj when
#           the server starts and are then clamped to a range of -1000 to 1000.
#           Because typically the initial value is 0, they will often match the
#           absolute values.
oom-score-adj no

# When oom-score-adj is used, this directive controls the specific values used
# for master, replica and background child processes. Values range -2000 to
# 2000 (higher means more likely to be killed).
#
# Unprivileged processes (not root, and without CAP_SYS_RESOURCE capabilities)
# can freely increase their value, but not decrease it below its initial
# settings. This means that setting oom-score-adj to "relative" and setting the
# oom-score-adj-values to positive values will always succeed.
oom-score-adj-values 0 200 800


#################### KERNEL transparent hugepage CONTROL ######################

# Usually the kernel Transparent Huge Pages control is set to "madvise" or
# or "never" by default (/sys/kernel/mm/transparent_hugepage/enabled), in which
# case this config has no effect. On systems in which it is set to "always",
# redis will attempt to disable it specifically for the redis process in order
# to avoid latency problems specifically with fork(2) and CoW.
# If for some reason you prefer to keep it enabled, you can set this config to
# "no" and the kernel global to "always".

disable-thp yes

############################## APPEND ONLY MODE ###############################

# By default Redis asynchronously dumps the dataset on disk. This mode is
# good enough in many applications, but an issue with the Redis process or
# a power outage may result into a few minutes of writes lost (depending on
# the configured save points).
#
# The Append Only File is an alternative persistence mode that provides
# much better durability. For instance using the default data fsync policy
# (see later in the config file) Redis can lose just one second of writes in a
# dramatic event like a server power outage, or a single write if something
# wrong with the Redis process itself happens, but the operating system is
# still running correctly.
#
# AOF and RDB persistence can be enabled at the same time without problems.
# If the AOF is enabled on startup Redis will load the AOF, that is the file
# with the better durability guarantees.
#
# Please check https://redis.io/topics/persistence for more information.

appendonly no

# The base name of the append only file.
#
# Redis 7 and newer use a set of append-only files to persist the dataset
# and changes applied to it. There are two basic types of files in use:
#
# - Base files, which are a snapshot representing the complete state of the
#   dataset at the time the file was created. Base files can be either in
#   the form of RDB (binary serialized) or AOF (textual commands).
# - Incremental files, which contain additional commands that were applied
#   to the dataset following the previous file.
#
# In addition, manifest files are used to track the files and the order in
# which they were created and should be applied.
#
# Append-only file names are created by Redis following a specific pattern.
# The file name's prefix is based on the 'appendfilename' configuration
# parameter, followed by additional information about the sequence and type.
#
# For example, if appendfilename is set to appendonly.aof, the following file
# names could be derived:
#
# - appendonly.aof.1.base.rdb as a base file.
# - appendonly.aof.1.incr.aof, appendonly.aof.2.incr.aof as incremental files.
# - appendonly.aof.manifest as a manifest file.

appendfilename "appendonly.aof"

# For convenience, Redis stores all persistent append-only files in a dedicated
# directory. The name of the directory is determined by the appenddirname
# configuration parameter.

appenddirname "appendonlydir"

# The fsync() call tells the Operating System to actually write data on disk
# instead of waiting for more data in the output buffer. Some OS will really flush
# data on disk, some other OS will just try to do it ASAP.
#
# Redis supports three different modes:
#
# no: don't fsync, just let the OS flush the data when it wants. Faster.
# always: fsync after every write to the append only log. Slow, Safest.
# everysec: fsync only one time every second. Compromise.
#
# The default is "everysec", as that's usually the right compromise between
# speed and data safety. It's up to you to understand if you can relax this to
# "no" that will let the operating system flush the output buffer when
# it wants, for better performances (but if you can live with the idea of
# some data loss consider the default persistence mode that's snapshotting),
# or on the contrary, use "always" that's very slow but a bit safer than
# everysec.
#
# More details please check the following article:
# http://antirez.com/post/redis-persistence-demystified.html
#
# If unsure, use "everysec".

# appendfsync always
appendfsync everysec
# appendfsync no

# When the AOF fsync policy is set to always or everysec, and a background
# saving process (a background save or AOF log background rewriting) is
# performing a lot of I/O against the disk, in some Linux configurations
# Redis may block too long on the fsync() call. Note that there is no fix for
# this currently, as even performing fsync in a different thread will block
# our synchronous write(2) call.
#
# In order to mitigate this problem it's possible to use the following option
# that will prevent fsync() from being called in the main process while a
# BGSAVE or BGREWRITEAOF is in progress.
#
# This means that while another child is saving, the durability of Redis is
# the same as "appendfsync no". In practical terms, this means that it is
# possible to lose up to 30 seconds of log in the worst scenario (with the
# default Linux settings).
#
# If you have latency problems turn this to "yes". Otherwise leave it as
# "no" that is the safest pick from the point of view of durability.

no-appendfsync-on-rewrite no

# Automatic rewrite of the append only file.
# Redis is able to automatically rewrite the log file implicitly calling
# BGREWRITEAOF when the AOF log size grows by the specified percentage.
#
# This is how it works: Redis remembers the size of the AOF file after the
# latest rewrite (if no rewrite has happened since the restart, the size of
# the AOF at startup is used).
#
# This base size is compared to the current size. If the current size is
# bigger than the specified percentage, the rewrite is triggered. Also
# you need to specify a minimal size for the AOF file to be rewritten, this
# is useful to avoid rewriting the AOF file even if the percentage increase
# is reached but it is still pretty small.
#
# Specify a percentage of zero in order to disable the automatic AOF
# rewrite feature.

auto-aof-rewrite-percentage 100
auto-aof-rewrite-min-size 64mb

# An AOF file may be found to be truncated at the end during the Redis
# startup process, when the AOF data gets loaded back into memory.
# This may happen when the system where Redis is running
# crashes, especially when an ext4 filesystem is mounted without the
# data=ordered option (however this can't happen when Redis itself
# crashes or aborts but the operating system still works correctly).
#
# Redis can either exit with an error when this happens, or load as much
# data as possible (the default now) and start if the AOF file is found
# to be truncated at the end. The following option controls this behavior.
#
# If aof-load-truncated is set to yes, a truncated AOF file is loaded and
# the Redis server starts emitting a log to inform the user of the event.
# Otherwise if the option is set to no, the server aborts with an error
# and refuses to start. When the option is set to no, the user requires
# to fix the AOF file using the "redis-check-aof" utility before to restart
# the server.
#
# Note that if the AOF file will be found to be corrupted in the middle
# the server will still exit with an error. This option only applies when
# Redis will try to read more data from the AOF file but not enough bytes
# will be found.
aof-load-truncated yes

# Redis can create append-only base files in either RDB or AOF formats. Using
# the RDB format is always faster and more efficient, and disabling it is only
# supported for backward compatibility purposes.
aof-use-rdb-preamble yes

# Redis supports recording timestamp annotations in the AOF to support restoring
# the data from a specific point-in-time. However, using this capability changes
# the AOF format in a way that may not be compatible with existing AOF parsers.
aof-timestamp-enabled no

################################ SHUTDOWN #####################################

# Maximum time to wait for replicas when shutting down, in seconds.
#
# During shut down, a grace period allows any lagging replicas to catch up with
# the latest replication offset before the master exists. This period can
# prevent data loss, especially for deployments without configured disk backups.
#
# The 'shutdown-timeout' value is the grace period's duration in seconds. It is
# only applicable when the instance has replicas. To disable the feature, set
# the value to 0.
#
# shutdown-timeout 10

# When Redis receives a SIGINT or SIGTERM, shutdown is initiated and by default
# an RDB snapshot is written to disk in a blocking operation if save points are configured.
# The options used on signaled shutdown can include the following values:
# default:  Saves RDB snapshot only if save points are configured.
#           Waits for lagging replicas to catch up.
# save:     Forces a DB saving operation even if no save points are configured.
# nosave:   Prevents DB saving operation even if one or more save points are configured.
# now:      Skips waiting for lagging replicas.
# force:    Ignores any errors that would normally prevent the server from exiting.
#
# Any combination of values is allowed as long as "save" and "nosave" are not set simultaneously.
# Example: "nosave force now"
#
# shutdown-on-sigint default
# shutdown-on-sigterm default

################ NON-DETERMINISTIC LONG BLOCKING COMMANDS #####################

# Maximum time in milliseconds for EVAL scripts, functions and in some cases
# modules' commands before Redis can start processing or rejecting other clients.
#
# If the maximum execution time is reached Redis will start to reply to most
# commands with a BUSY error.
#
# In this state Redis will only allow a handful of commands to be executed.
# For instance, SCRIPT KILL, FUNCTION KILL, SHUTDOWN NOSAVE and possibly some
# module specific 'allow-busy' commands.
#
# SCRIPT KILL and FUNCTION KILL will only be able to stop a script that did not
# yet call any write commands, so SHUTDOWN NOSAVE may be the only way to stop
# the server in the case a write command was already issued by the script when
# the user doesn't want to wait for the natural termination of the script.
#
# The default is 5 seconds. It is possible to set it to 0 or a negative value
# to disable this mechanism (uninterrupted execution). Note that in the past
# this config had a different name, which is now an alias, so both of these do
# the same:
# lua-time-limit 5000
# busy-reply-threshold 5000

################################ REDIS CLUSTER  ###############################

# Normal Redis instances can't be part of a Redis Cluster; only nodes that are
# started as cluster nodes can. In order to start a Redis instance as a
# cluster node enable the cluster support uncommenting the following:
#
# cluster-enabled yes

# Every cluster node has a cluster configuration file. This file is not
# intended to be edited by hand. It is created and updated by Redis nodes.
# Every Redis Cluster node requires a different cluster configuration file.
# Make sure that instances running in the same system do not have
# overlapping cluster configuration file names.
#
# cluster-config-file nodes-6379.conf

# Cluster node timeout is the amount of milliseconds a node must be unreachable
# for it to be considered in failure state.
# Most other internal time limits are a multiple of the node timeout.
#
# cluster-node-timeout 15000

# The cluster port is the port that the cluster bus will listen for inbound connections on. When set 
# to the default value, 0, it will be bound to the command port + 10000. Setting this value requires 
# you to specify the cluster bus port when executing cluster meet.
# cluster-port 0

# A replica of a failing master will avoid to start a failover if its data
# looks too old.
#
# There is no simple way for a replica to actually have an exact measure of
# its "data age", so the following two checks are performed:
#
# 1) If there are multiple replicas able to failover, they exchange messages
#    in order to try to give an advantage to the replica with the best
#    replication offset (more data from the master processed).
#    Replicas will try to get their rank by offset, and apply to the start
#    of the failover a delay proportional to their rank.
#
# 2) Every single replica computes the time of the last interaction with
#    its master. This can be the last ping or command received (if the master
#    is still in the "connected" state), or the time that elapsed since the
#    disconnection with the master (if the replication link is currently down).
#    If the last interaction is too old, the replica will not try to failover
#    at all.
#
# The point "2" can be tuned by user. Specifically a replica will not perform
# the failover if, since the last interaction with the master, the time
# elapsed is greater than:
#
#   (node-timeout * cluster-replica-validity-factor) + repl-ping-replica-period
#
# So for example if node-timeout is 30 seconds, and the cluster-replica-validity-factor
# is 10, and assuming a default repl-ping-replica-period of 10 seconds, the
# replica will not try to failover if it was not able to talk with the master
# for longer than 310 seconds.
#
# A large cluster-replica-validity-factor may allow replicas with too old data to failover
# a master, while a too small value may prevent the cluster from being able to
# elect a replica at all.
#
# For maximum availability, it is possible to set the cluster-replica-validity-factor
# to a value of 0, which means, that replicas will always try to failover the
# master regardless of the last time they interacted with the master.
# (However they'll always try to apply a delay proportional to their
# offset rank).
#
# Zero is the only value able to guarantee that when all the partitions heal
# the cluster will always be able to continue.
#
# cluster-replica-validity-factor 10

# Cluster replicas are able to migrate to orphaned masters, that are masters
# that are left without working replicas. This improves the cluster ability
# to resist to failures as otherwise an orphaned master can't be failed over
# in case of failure if it has no working replicas.
#
# Replicas migrate to orphaned masters only if there are still at least a
# given number of other working replicas for their old master. This number
# is the "migration barrier". A migration barrier of 1 means that a replica
# will migrate only if there is at least 1 other working replica for its master
# and so forth. It usually reflects the number of replicas you want for every
# master in your cluster.
#
# Default is 1 (replicas migrate only if their masters remain with at least
# one replica). To disable migration just set it to a very large value or
# set cluster-allow-replica-migration to 'no'.
# A value of 0 can be set but is useful only for debugging and dangerous
# in production.
#
# cluster-migration-barrier 1

# Turning off this option allows to use less automatic cluster configuration.
# It both disables migration to orphaned masters and migration from masters
# that became empty.
#
# Default is 'yes' (allow automatic migrations).
#
# cluster-allow-replica-migration yes

# By default Redis Cluster nodes stop accepting queries if they detect there
# is at least a hash slot uncovered (no available node is serving it).
# This way if the cluster is partially down (for example a range of hash slots
# are no longer covered) all the cluster becomes, eventually, unavailable.
# It automatically returns available as soon as all the slots are covered again.
#
# However sometimes you want the subset of the cluster which is working,
# to continue to accept queries for the part of the key space that is still
# covered. In order to do so, just set the cluster-require-full-coverage
# option to no.
#
# cluster-require-full-coverage yes

# This option, when set to yes, prevents replicas from trying to failover its
# master during master failures. However the replica can still perform a
# manual failover, if forced to do so.
#
# This is useful in different scenarios, especially in the case of multiple
# data center operations, where we want one side to never be promoted if not
# in the case of a total DC failure.
#
# cluster-replica-no-failover no

# This option, when set to yes, allows nodes to serve read traffic while the
# cluster is in a down state, as long as it believes it owns the slots.
#
# This is useful for two cases.  The first case is for when an application
# doesn't require consistency of data during node failures or network partitions.
# One example of this is a cache, where as long as the node has the data it
# should be able to serve it.
#
# The second use case is for configurations that don't meet the recommended
# three shards but want to enable cluster mode and scale later. A
# master outage in a 1 or 2 shard configuration causes a read/write outage to the
# entire cluster without this option set, with it set there is only a write outage.
# Without a quorum of masters, slot ownership will not change automatically.
#
# cluster-allow-reads-when-down no

# This option, when set to yes, allows nodes to serve pubsub shard traffic while
# the cluster is in a down state, as long as it believes it owns the slots.
#
# This is useful if the application would like to use the pubsub feature even when
# the cluster global stable state is not OK. If the application wants to make sure only
# one shard is serving a given channel, this feature should be kept as yes.
#
# cluster-allow-pubsubshard-when-down yes

# Cluster link send buffer limit is the limit on the memory usage of an individual
# cluster bus link's send buffer in bytes. Cluster links would be freed if they exceed
# this limit. This is to primarily prevent send buffers from growing unbounded on links
# toward slow peers (E.g. PubSub messages being piled up).
# This limit is disabled by default. Enable this limit when 'mem_cluster_links' INFO field
# and/or 'send-buffer-allocated' entries in the 'CLUSTER LINKS\` command output continuously increase.
# Minimum limit of 1gb is recommended so that cluster link buffer can fit in at least a single
# PubSub message by default. (client-query-buffer-limit default value is 1gb)
#
# cluster-link-sendbuf-limit 0
 
# Clusters can configure their announced hostname using this config. This is a common use case for 
# applications that need to use TLS Server Name Indication (SNI) or dealing with DNS based
# routing. By default this value is only shown as additional metadata in the CLUSTER SLOTS
# command, but can be changed using 'cluster-preferred-endpoint-type' config. This value is 
# communicated along the clusterbus to all nodes, setting it to an empty string will remove 
# the hostname and also propagate the removal.
#
# cluster-announce-hostname ""

# Clusters can advertise how clients should connect to them using either their IP address,
# a user defined hostname, or by declaring they have no endpoint. Which endpoint is
# shown as the preferred endpoint is set by using the cluster-preferred-endpoint-type
# config with values 'ip', 'hostname', or 'unknown-endpoint'. This value controls how
# the endpoint returned for MOVED/ASKING requests as well as the first field of CLUSTER SLOTS. 
# If the preferred endpoint type is set to hostname, but no announced hostname is set, a '?' 
# will be returned instead.
#
# When a cluster advertises itself as having an unknown endpoint, it's indicating that
# the server doesn't know how clients can reach the cluster. This can happen in certain 
# networking situations where there are multiple possible routes to the node, and the 
# server doesn't know which one the client took. In this case, the server is expecting
# the client to reach out on the same endpoint it used for making the last request, but use
# the port provided in the response.
#
# cluster-preferred-endpoint-type ip

# In order to setup your cluster make sure to read the documentation
# available at https://redis.io web site.

########################## CLUSTER DOCKER/NAT support  ########################

# In certain deployments, Redis Cluster nodes address discovery fails, because
# addresses are NAT-ted or because ports are forwarded (the typical case is
# Docker and other containers).
#
# In order to make Redis Cluster working in such environments, a static
# configuration where each node knows its public address is needed. The
# following four options are used for this scope, and are:
#
# * cluster-announce-ip
# * cluster-announce-port
# * cluster-announce-tls-port
# * cluster-announce-bus-port
#
# Each instructs the node about its address, client ports (for connections
# without and with TLS) and cluster message bus port. The information is then
# published in the header of the bus packets so that other nodes will be able to
# correctly map the address of the node publishing the information.
#
# If cluster-tls is set to yes and cluster-announce-tls-port is omitted or set
# to zero, then cluster-announce-port refers to the TLS port. Note also that
# cluster-announce-tls-port has no effect if cluster-tls is set to no.
#
# If the above options are not used, the normal Redis Cluster auto-detection
# will be used instead.
#
# Note that when remapped, the bus port may not be at the fixed offset of
# clients port + 10000, so you can specify any port and bus-port depending
# on how they get remapped. If the bus-port is not set, a fixed offset of
# 10000 will be used as usual.
#
# Example:
#
# cluster-announce-ip 10.1.1.5
# cluster-announce-tls-port 6379
# cluster-announce-port 0
# cluster-announce-bus-port 6380

################################## SLOW LOG ###################################

# The Redis Slow Log is a system to log queries that exceeded a specified
# execution time. The execution time does not include the I/O operations
# like talking with the client, sending the reply and so forth,
# but just the time needed to actually execute the command (this is the only
# stage of command execution where the thread is blocked and can not serve
# other requests in the meantime).
#
# You can configure the slow log with two parameters: one tells Redis
# what is the execution time, in microseconds, to exceed in order for the
# command to get logged, and the other parameter is the length of the
# slow log. When a new command is logged the oldest one is removed from the
# queue of logged commands.

# The following time is expressed in microseconds, so 1000000 is equivalent
# to one second. Note that a negative number disables the slow log, while
# a value of zero forces the logging of every command.
slowlog-log-slower-than 10000

# There is no limit to this length. Just be aware that it will consume memory.
# You can reclaim memory used by the slow log with SLOWLOG RESET.
slowlog-max-len 128

################################ LATENCY MONITOR ##############################

# The Redis latency monitoring subsystem samples different operations
# at runtime in order to collect data related to possible sources of
# latency of a Redis instance.
#
# Via the LATENCY command this information is available to the user that can
# print graphs and obtain reports.
#
# The system only logs operations that were performed in a time equal or
# greater than the amount of milliseconds specified via the
# latency-monitor-threshold configuration directive. When its value is set
# to zero, the latency monitor is turned off.
#
# By default latency monitoring is disabled since it is mostly not needed
# if you don't have latency issues, and collecting data has a performance
# impact, that while very small, can be measured under big load. Latency
# monitoring can easily be enabled at runtime using the command
# "CONFIG SET latency-monitor-threshold &lt;milliseconds&gt;" if needed.
latency-monitor-threshold 0

################################ LATENCY TRACKING ##############################

# The Redis extended latency monitoring tracks the per command latencies and enables
# exporting the percentile distribution via the INFO latencystats command,
# and cumulative latency distributions (histograms) via the LATENCY command.
#
# By default, the extended latency monitoring is enabled since the overhead
# of keeping track of the command latency is very small.
# latency-tracking yes

# By default the exported latency percentiles via the INFO latencystats command
# are the p50, p99, and p999.
# latency-tracking-info-percentiles 50 99 99.9

############################# EVENT NOTIFICATION ##############################

# Redis can notify Pub/Sub clients about events happening in the key space.
# This feature is documented at https://redis.io/topics/notifications
#
# For instance if keyspace events notification is enabled, and a client
# performs a DEL operation on key "foo" stored in the Database 0, two
# messages will be published via Pub/Sub:
#
# PUBLISH __keyspace@0__:foo del
# PUBLISH __keyevent@0__:del foo
#
# It is possible to select the events that Redis will notify among a set
# of classes. Every class is identified by a single character:
#
#  K     Keyspace events, published with __keyspace@&lt;db&gt;__ prefix.
#  E     Keyevent events, published with __keyevent@&lt;db&gt;__ prefix.
#  g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...
#  $     String commands
#  l     List commands
#  s     Set commands
#  h     Hash commands
#  z     Sorted set commands
#  x     Expired events (events generated every time a key expires)
#  e     Evicted events (events generated when a key is evicted for maxmemory)
#  n     New key events (Note: not included in the 'A' class)
#  t     Stream commands
#  d     Module key type events
#  m     Key-miss events (Note: It is not included in the 'A' class)
#  A     Alias for g$lshzxetd, so that the "AKE" string means all the events
#        (Except key-miss events which are excluded from 'A' due to their
#         unique nature).
#
#  The "notify-keyspace-events" takes as argument a string that is composed
#  of zero or multiple characters. The empty string means that notifications
#  are disabled.
#
#  Example: to enable list and generic events, from the point of view of the
#           event name, use:
#
#  notify-keyspace-events Elg
#
#  Example 2: to get the stream of the expired keys subscribing to channel
#             name __keyevent@0__:expired use:
#
#  notify-keyspace-events Ex
#
#  By default all notifications are disabled because most users don't need
#  this feature and the feature has some overhead. Note that if you don't
#  specify at least one of K or E, no events will be delivered.
notify-keyspace-events ""

############################### ADVANCED CONFIG ###############################

# Hashes are encoded using a memory efficient data structure when they have a
# small number of entries, and the biggest entry does not exceed a given
# threshold. These thresholds can be configured using the following directives.
hash-max-listpack-entries 512
hash-max-listpack-value 64

# Lists are also encoded in a special way to save a lot of space.
# The number of entries allowed per internal list node can be specified
# as a fixed maximum size or a maximum number of elements.
# For a fixed maximum size, use -5 through -1, meaning:
# -5: max size: 64 Kb  &lt;-- not recommended for normal workloads
# -4: max size: 32 Kb  &lt;-- not recommended
# -3: max size: 16 Kb  &lt;-- probably not recommended
# -2: max size: 8 Kb   &lt;-- good
# -1: max size: 4 Kb   &lt;-- good
# Positive numbers mean store up to _exactly_ that number of elements
# per list node.
# The highest performing option is usually -2 (8 Kb size) or -1 (4 Kb size),
# but if your use case is unique, adjust the settings as necessary.
list-max-listpack-size -2

# Lists may also be compressed.
# Compress depth is the number of quicklist ziplist nodes from *each* side of
# the list to *exclude* from compression.  The head and tail of the list
# are always uncompressed for fast push/pop operations.  Settings are:
# 0: disable all list compression
# 1: depth 1 means "don't start compressing until after 1 node into the list,
#    going from either the head or tail"
#    So: [head]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[tail]
#    [head], [tail] will always be uncompressed; inner nodes will compress.
# 2: [head]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[tail]
#    2 here means: don't compress head or head-&gt;next or tail-&gt;prev or tail,
#    but compress all nodes between them.
# 3: [head]-&gt;[next]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[prev]-&gt;[tail]
# etc.
list-compress-depth 0

# Sets have a special encoding in just one case: when a set is composed
# of just strings that happen to be integers in radix 10 in the range
# of 64 bit signed integers.
# The following configuration setting sets the limit in the size of the
# set in order to use this special memory saving encoding.
set-max-intset-entries 512

# Similarly to hashes and lists, sorted sets are also specially encoded in
# order to save a lot of space. This encoding is only used when the length and
# elements of a sorted set are below the following limits:
zset-max-listpack-entries 128
zset-max-listpack-value 64

# HyperLogLog sparse representation bytes limit. The limit includes the
# 16 bytes header. When an HyperLogLog using the sparse representation crosses
# this limit, it is converted into the dense representation.
#
# A value greater than 16000 is totally useless, since at that point the
# dense representation is more memory efficient.
#
# The suggested value is ~ 3000 in order to have the benefits of
# the space efficient encoding without slowing down too much PFADD,
# which is O(N) with the sparse encoding. The value can be raised to
# ~ 10000 when CPU is not a concern, but space is, and the data set is
# composed of many HyperLogLogs with cardinality in the 0 - 15000 range.
hll-sparse-max-bytes 3000

# Streams macro node max size / items. The stream data structure is a radix
# tree of big nodes that encode multiple items inside. Using this configuration
# it is possible to configure how big a single node can be in bytes, and the
# maximum number of items it may contain before switching to a new node when
# appending new stream entries. If any of the following settings are set to
# zero, the limit is ignored, so for instance it is possible to set just a
# max entries limit by setting max-bytes to 0 and max-entries to the desired
# value.
stream-node-max-bytes 4096
stream-node-max-entries 100

# Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in
# order to help rehashing the main Redis hash table (the one mapping top-level
# keys to values). The hash table implementation Redis uses (see dict.c)
# performs a lazy rehashing: the more operation you run into a hash table
# that is rehashing, the more rehashing "steps" are performed, so if the
# server is idle the rehashing is never complete and some more memory is used
# by the hash table.
#
# The default is to use this millisecond 10 times every second in order to
# actively rehash the main dictionaries, freeing memory when possible.
#
# If unsure:
# use "activerehashing no" if you have hard latency requirements and it is
# not a good thing in your environment that Redis can reply from time to time
# to queries with 2 milliseconds delay.
#
# use "activerehashing yes" if you don't have such hard requirements but
# want to free memory asap when possible.
activerehashing yes

# The client output buffer limits can be used to force disconnection of clients
# that are not reading data from the server fast enough for some reason (a
# common reason is that a Pub/Sub client can't consume messages as fast as the
# publisher can produce them).
#
# The limit can be set differently for the three different classes of clients:
#
# normal -&gt; normal clients including MONITOR clients
# replica -&gt; replica clients
# pubsub -&gt; clients subscribed to at least one pubsub channel or pattern
#
# The syntax of every client-output-buffer-limit directive is the following:
#
# client-output-buffer-limit &lt;class&gt; &lt;hard limit&gt; &lt;soft limit&gt; &lt;soft seconds&gt;
#
# A client is immediately disconnected once the hard limit is reached, or if
# the soft limit is reached and remains reached for the specified number of
# seconds (continuously).
# So for instance if the hard limit is 32 megabytes and the soft limit is
# 16 megabytes / 10 seconds, the client will get disconnected immediately
# if the size of the output buffers reach 32 megabytes, but will also get
# disconnected if the client reaches 16 megabytes and continuously overcomes
# the limit for 10 seconds.
#
# By default normal clients are not limited because they don't receive data
# without asking (in a push way), but just after a request, so only
# asynchronous clients may create a scenario where data is requested faster
# than it can read.
#
# Instead there is a default limit for pubsub and replica clients, since
# subscribers and replicas receive data in a push fashion.
#
# Note that it doesn't make sense to set the replica clients output buffer
# limit lower than the repl-backlog-size config (partial sync will succeed
# and then replica will get disconnected).
# Such a configuration is ignored (the size of repl-backlog-size will be used).
# This doesn't have memory consumption implications since the replica client
# will share the backlog buffers memory.
#
# Both the hard or the soft limit can be disabled by setting them to zero.
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60

# Client query buffers accumulate new commands. They are limited to a fixed
# amount by default in order to avoid that a protocol desynchronization (for
# instance due to a bug in the client) will lead to unbound memory usage in
# the query buffer. However you can configure it here if you have very special
# needs, such us huge multi/exec requests or alike.
#
# client-query-buffer-limit 1gb

# In some scenarios client connections can hog up memory leading to OOM
# errors or data eviction. To avoid this we can cap the accumulated memory
# used by all client connections (all pubsub and normal clients). Once we
# reach that limit connections will be dropped by the server freeing up
# memory. The server will attempt to drop the connections using the most 
# memory first. We call this mechanism "client eviction".
#
# Client eviction is configured using the maxmemory-clients setting as follows:
# 0 - client eviction is disabled (default)
#
# A memory value can be used for the client eviction threshold,
# for example:
# maxmemory-clients 1g
#
# A percentage value (between 1% and 100%) means the client eviction threshold
# is based on a percentage of the maxmemory setting. For example to set client
# eviction at 5% of maxmemory:
# maxmemory-clients 5%

# In the Redis protocol, bulk requests, that are, elements representing single
# strings, are normally limited to 512 mb. However you can change this limit
# here, but must be 1mb or greater
#
# proto-max-bulk-len 512mb

# Redis calls an internal function to perform many background tasks, like
# closing connections of clients in timeout, purging expired keys that are
# never requested, and so forth.
#
# Not all tasks are performed with the same frequency, but Redis checks for
# tasks to perform according to the specified "hz" value.
#
# By default "hz" is set to 10. Raising the value will use more CPU when
# Redis is idle, but at the same time will make Redis more responsive when
# there are many keys expiring at the same time, and timeouts may be
# handled with more precision.
#
# The range is between 1 and 500, however a value over 100 is usually not
# a good idea. Most users should use the default of 10 and raise this up to
# 100 only in environments where very low latency is required.
hz 10

# Normally it is useful to have an HZ value which is proportional to the
# number of clients connected. This is useful in order, for instance, to
# avoid too many clients are processed for each background task invocation
# in order to avoid latency spikes.
#
# Since the default HZ value by default is conservatively set to 10, Redis
# offers, and enables by default, the ability to use an adaptive HZ value
# which will temporarily raise when there are many connected clients.
#
# When dynamic HZ is enabled, the actual configured HZ will be used
# as a baseline, but multiples of the configured HZ value will be actually
# used as needed once more clients are connected. In this way an idle
# instance will use very little CPU time while a busy instance will be
# more responsive.
dynamic-hz yes

# When a child rewrites the AOF file, if the following option is enabled
# the file will be fsync-ed every 4 MB of data generated. This is useful
# in order to commit the file to the disk more incrementally and avoid
# big latency spikes.
aof-rewrite-incremental-fsync yes

# When redis saves RDB file, if the following option is enabled
# the file will be fsync-ed every 4 MB of data generated. This is useful
# in order to commit the file to the disk more incrementally and avoid
# big latency spikes.
rdb-save-incremental-fsync yes

# Redis LFU eviction (see maxmemory setting) can be tuned. However it is a good
# idea to start with the default settings and only change them after investigating
# how to improve the performances and how the keys LFU change over time, which
# is possible to inspect via the OBJECT FREQ command.
#
# There are two tunable parameters in the Redis LFU implementation: the
# counter logarithm factor and the counter decay time. It is important to
# understand what the two parameters mean before changing them.
#
# The LFU counter is just 8 bits per key, it's maximum value is 255, so Redis
# uses a probabilistic increment with logarithmic behavior. Given the value
# of the old counter, when a key is accessed, the counter is incremented in
# this way:
#
# 1. A random number R between 0 and 1 is extracted.
# 2. A probability P is calculated as 1/(old_value*lfu_log_factor+1).
# 3. The counter is incremented only if R &lt; P.
#
# The default lfu-log-factor is 10. This is a table of how the frequency
# counter changes with a different number of accesses with different
# logarithmic factors:
#
# +--------+------------+------------+------------+------------+------------+
# | factor | 100 hits   | 1000 hits  | 100K hits  | 1M hits    | 10M hits   |
# +--------+------------+------------+------------+------------+------------+
# | 0      | 104        | 255        | 255        | 255        | 255        |
# +--------+------------+------------+------------+------------+------------+
# | 1      | 18         | 49         | 255        | 255        | 255        |
# +--------+------------+------------+------------+------------+------------+
# | 10     | 10         | 18         | 142        | 255        | 255        |
# +--------+------------+------------+------------+------------+------------+
# | 100    | 8          | 11         | 49         | 143        | 255        |
# +--------+------------+------------+------------+------------+------------+
#
# NOTE: The above table was obtained by running the following commands:
#
#   redis-benchmark -n 1000000 incr foo
#   redis-cli object freq foo
#
# NOTE 2: The counter initial value is 5 in order to give new objects a chance
# to accumulate hits.
#
# The counter decay time is the time, in minutes, that must elapse in order
# for the key counter to be divided by two (or decremented if it has a value
# less &lt;= 10).
#
# The default value for the lfu-decay-time is 1. A special value of 0 means to
# decay the counter every time it happens to be scanned.
#
# lfu-log-factor 10
# lfu-decay-time 1

########################### ACTIVE DEFRAGMENTATION #######################
#
# What is active defragmentation?
# -------------------------------
#
# Active (online) defragmentation allows a Redis server to compact the
# spaces left between small allocations and deallocations of data in memory,
# thus allowing to reclaim back memory.
#
# Fragmentation is a natural process that happens with every allocator (but
# less so with Jemalloc, fortunately) and certain workloads. Normally a server
# restart is needed in order to lower the fragmentation, or at least to flush
# away all the data and create it again. However thanks to this feature
# implemented by Oran Agra for Redis 4.0 this process can happen at runtime
# in a "hot" way, while the server is running.
#
# Basically when the fragmentation is over a certain level (see the
# configuration options below) Redis will start to create new copies of the
# values in contiguous memory regions by exploiting certain specific Jemalloc
# features (in order to understand if an allocation is causing fragmentation
# and to allocate it in a better place), and at the same time, will release the
# old copies of the data. This process, repeated incrementally for all the keys
# will cause the fragmentation to drop back to normal values.
#
# Important things to understand:
#
# 1. This feature is disabled by default, and only works if you compiled Redis
#    to use the copy of Jemalloc we ship with the source code of Redis.
#    This is the default with Linux builds.
#
# 2. You never need to enable this feature if you don't have fragmentation
#    issues.
#
# 3. Once you experience fragmentation, you can enable this feature when
#    needed with the command "CONFIG SET activedefrag yes".
#
# The configuration parameters are able to fine tune the behavior of the
# defragmentation process. If you are not sure about what they mean it is
# a good idea to leave the defaults untouched.

# Active defragmentation is disabled by default
# activedefrag no

# Minimum amount of fragmentation waste to start active defrag
# active-defrag-ignore-bytes 100mb

# Minimum percentage of fragmentation to start active defrag
# active-defrag-threshold-lower 10

# Maximum percentage of fragmentation at which we use maximum effort
# active-defrag-threshold-upper 100

# Minimal effort for defrag in CPU percentage, to be used when the lower
# threshold is reached
# active-defrag-cycle-min 1

# Maximal effort for defrag in CPU percentage, to be used when the upper
# threshold is reached
# active-defrag-cycle-max 25

# Maximum number of set/hash/zset/list fields that will be processed from
# the main dictionary scan
# active-defrag-max-scan-fields 1000

# Jemalloc background thread for purging will be enabled by default
jemalloc-bg-thread yes

# It is possible to pin different threads and processes of Redis to specific
# CPUs in your system, in order to maximize the performances of the server.
# This is useful both in order to pin different Redis threads in different
# CPUs, but also in order to make sure that multiple Redis instances running
# in the same host will be pinned to different CPUs.
#
# Normally you can do this using the "taskset" command, however it is also
# possible to this via Redis configuration directly, both in Linux and FreeBSD.
#
# You can pin the server/IO threads, bio threads, aof rewrite child process, and
# the bgsave child process. The syntax to specify the cpu list is the same as
# the taskset command:
#
# Set redis server/io threads to cpu affinity 0,2,4,6:
# server_cpulist 0-7:2
#
# Set bio threads to cpu affinity 1,3:
# bio_cpulist 1,3
#
# Set aof rewrite child process to cpu affinity 8,9,10,11:
# aof_rewrite_cpulist 8-11
#
# Set bgsave child process to cpu affinity 1,10,11
# bgsave_cpulist 1,10-11

# In some cases redis will emit warnings and even refuse to start if it detects
# that the system is in bad state, it is possible to suppress these warnings
# by setting the following config which takes a space delimited list of warnings
# to suppress
#
# ignore-warnings ARM64-COW-BUG
</code></pre></div>`,r:{minutes:55.32,words:16595},t:"redis config",i:"snowman",O:201,y:"a"}}],["/posts/sql/redis/%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4.html",{loader:()=>M(()=>import("./常见命令.html-DmoNA9ZF.js"),__vite__mapDeps([48,1])),meta:{d:17156448e5,l:"2024年5月14日",c:["redis"],g:["redis操作"],e:`<p>reids的命令太多啦，简直学不完啊</p>
`,r:{minutes:5.66,words:1699},t:"常见命令",i:"snowman",O:205,y:"a"}}],["/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html",{loader:()=>M(()=>import("./操作命令.html-BARQZEWD.js"),__vite__mapDeps([49,1])),meta:{d:17153856e5,l:"2024年5月11日",c:["redis"],g:["redis操作"],e:`<p>redis 的 ▶️ ⏹️ 等命令</p>
`,r:{minutes:.71,words:212},t:"操作命令",i:"snowman",O:100,y:"a"}}],["/posts/sql/redis/%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.html",{loader:()=>M(()=>import("./配置解析.html-z9aFoW2H.js"),__vite__mapDeps([50,1])),meta:{d:17153856e5,l:"2024年5月11日",c:["redis"],g:["redis配置"],e:`<p>操作 <code>redis.conf</code> 文件前，记得作个备份哈 👌 👌 👌</p>
<p><a href="/blog/posts/sql/redis/redisConfig.html" target="_blank">redis config</a></p>
`,r:{minutes:.93,words:280},t:"配置解析",i:"snowman",O:200,y:"a"}}],["/404.html",{loader:()=>M(()=>import("./404.html-CmIn89xY.js"),__vite__mapDeps([51,1])),meta:{t:""}}],["/posts/",{loader:()=>M(()=>import("./index.html-C1u2AqOk.js"),__vite__mapDeps([52,1])),meta:{t:"Posts"}}],["/category/",{loader:()=>M(()=>import("./index.html-BacYfVVu.js"),__vite__mapDeps([53,1])),meta:{t:"分类",I:!1}}],["/category/%E5%90%8E%E7%AB%AF/",{loader:()=>M(()=>import("./index.html-CuLbx3H4.js"),__vite__mapDeps([54,1])),meta:{t:"后端 分类",I:!1}}],["/category/%E5%89%8D%E7%AB%AF/",{loader:()=>M(()=>import("./index.html-DW8q-bZ-.js"),__vite__mapDeps([55,1])),meta:{t:"前端 分类",I:!1}}],["/category/%E5%85%B6%E4%BB%96/",{loader:()=>M(()=>import("./index.html-DmBDsK1J.js"),__vite__mapDeps([56,1])),meta:{t:"其他 分类",I:!1}}],["/category/%E6%9C%8D%E5%8A%A1%E5%99%A8/",{loader:()=>M(()=>import("./index.html-lMASykL6.js"),__vite__mapDeps([57,1])),meta:{t:"服务器 分类",I:!1}}],["/category/vue2/",{loader:()=>M(()=>import("./index.html-cR54gkc7.js"),__vite__mapDeps([58,1])),meta:{t:"vue2 分类",I:!1}}],["/category/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",{loader:()=>M(()=>import("./index.html-BLnf7a_d.js"),__vite__mapDeps([59,1])),meta:{t:"软件安装 分类",I:!1}}],["/category/mysql/",{loader:()=>M(()=>import("./index.html-aho0HDw1.js"),__vite__mapDeps([60,1])),meta:{t:"mysql 分类",I:!1}}],["/category/redis/",{loader:()=>M(()=>import("./index.html-BEDbtuu3.js"),__vite__mapDeps([61,1])),meta:{t:"redis 分类",I:!1}}],["/tag/",{loader:()=>M(()=>import("./index.html-D8B3jqsd.js"),__vite__mapDeps([62,1])),meta:{t:"标签",I:!1}}],["/tag/%E6%A1%86%E6%9E%B6/",{loader:()=>M(()=>import("./index.html-B_qwvknT.js"),__vite__mapDeps([63,1])),meta:{t:"标签: 框架",I:!1}}],["/tag/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B/",{loader:()=>M(()=>import("./index.html-CxAI1aav.js"),__vite__mapDeps([64,1])),meta:{t:"标签: 开发示例",I:!1}}],["/tag/%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/",{loader:()=>M(()=>import("./index.html-BqaEL1N-.js"),__vite__mapDeps([65,1])),meta:{t:"标签: 基础概念",I:!1}}],["/tag/ide%E6%8F%92%E4%BB%B6/",{loader:()=>M(()=>import("./index.html-BvOzQv8I.js"),__vite__mapDeps([66,1])),meta:{t:"标签: ide插件",I:!1}}],["/tag/%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0/",{loader:()=>M(()=>import("./index.html-2YCE-W0p.js"),__vite__mapDeps([67,1])),meta:{t:"标签: 开发平台",I:!1}}],["/tag/%E8%84%9A%E6%9C%AC/",{loader:()=>M(()=>import("./index.html-BEvk-ryv.js"),__vite__mapDeps([68,1])),meta:{t:"标签: 脚本",I:!1}}],["/tag/linux%E5%91%BD%E4%BB%A4/",{loader:()=>M(()=>import("./index.html-D84li-X_.js"),__vite__mapDeps([69,1])),meta:{t:"标签: linux命令",I:!1}}],["/tag/%E8%BF%90%E7%BB%B4%E7%A4%BA%E4%BE%8B/",{loader:()=>M(()=>import("./index.html-J1Mlb2hv.js"),__vite__mapDeps([70,1])),meta:{t:"标签: 运维示例",I:!1}}],["/tag/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",{loader:()=>M(()=>import("./index.html-B8rgon-H.js"),__vite__mapDeps([71,1])),meta:{t:"标签: 学习笔记",I:!1}}],["/tag/centos/",{loader:()=>M(()=>import("./index.html-DVBtBaGi.js"),__vite__mapDeps([72,1])),meta:{t:"标签: centos",I:!1}}],["/tag/java%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",{loader:()=>M(()=>import("./index.html-B2QW5JCL.js"),__vite__mapDeps([73,1])),meta:{t:"标签: java软件安装",I:!1}}],["/tag/web%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",{loader:()=>M(()=>import("./index.html-9TTkJybH.js"),__vite__mapDeps([74,1])),meta:{t:"标签: web软件安装",I:!1}}],["/tag/ubuntu%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",{loader:()=>M(()=>import("./index.html-DzQMD4ik.js"),__vite__mapDeps([75,1])),meta:{t:"标签: ubuntu软件安装",I:!1}}],["/tag/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%AD%E6%B3%95/",{loader:()=>M(()=>import("./index.html-D8KuPMaz.js"),__vite__mapDeps([76,1])),meta:{t:"标签: 数据库语法",I:!1}}],["/tag/redis%E9%85%8D%E7%BD%AE/",{loader:()=>M(()=>import("./index.html-B1Xq6ONe.js"),__vite__mapDeps([77,1])),meta:{t:"标签: redis配置",I:!1}}],["/tag/redis%E6%93%8D%E4%BD%9C/",{loader:()=>M(()=>import("./index.html-Dm-dntDZ.js"),__vite__mapDeps([78,1])),meta:{t:"标签: redis操作",I:!1}}],["/article/",{loader:()=>M(()=>import("./index.html-CYcsEa1S.js"),__vite__mapDeps([79,1])),meta:{t:"文章",I:!1}}],["/star/",{loader:()=>M(()=>import("./index.html-CdXddHDb.js"),__vite__mapDeps([80,1])),meta:{t:"星标",I:!1}}],["/timeline/",{loader:()=>M(()=>import("./index.html-BZDu7E-j.js"),__vite__mapDeps([81,1])),meta:{t:"时间轴",I:!1}}]]);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof document<"u";function gh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const he=Object.assign;function xo(e,t){const n={};for(const s in t){const o=t[s];n[s]=ct(o)?o.map(e):e(o)}return n}const $n=()=>{},ct=Array.isArray,Tl=/#/g,vh=/&/g,yh=/\//g,bh=/=/g,wh=/\?/g,xl=/\+/g,Eh=/%5B/g,_h=/%5D/g,Sl=/%5E/g,kh=/%60/g,Cl=/%7B/g,Ah=/%7C/g,Rl=/%7D/g,Th=/%20/g;function La(e){return encodeURI(""+e).replace(Ah,"|").replace(Eh,"[").replace(_h,"]")}function xh(e){return La(e).replace(Cl,"{").replace(Rl,"}").replace(Sl,"^")}function qo(e){return La(e).replace(xl,"%2B").replace(Th,"+").replace(Tl,"%23").replace(vh,"%26").replace(kh,"`").replace(Cl,"{").replace(Rl,"}").replace(Sl,"^")}function Sh(e){return qo(e).replace(bh,"%3D")}function Ch(e){return La(e).replace(Tl,"%23").replace(wh,"%3F")}function Rh(e){return e==null?"":Ch(e).replace(yh,"%2F")}function Jn(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Lh=/\/$/,Ih=e=>e.replace(Lh,"");function So(e,t,n="/"){let s,o={},a="",i="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=t.slice(0,c),a=t.slice(c+1,l>-1?l:t.length),o=e(a)),l>-1&&(s=s||t.slice(0,l),i=t.slice(l,t.length)),s=Dh(s??t,n),{fullPath:s+(a&&"?")+a+i,path:s,query:o,hash:Jn(i)}}function Bh(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Oh(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&wn(t.matched[s],n.matched[o])&&Ll(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function wn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ph(e[n],t[n]))return!1;return!0}function Ph(e,t){return ct(e)?zi(e,t):ct(t)?zi(t,e):e===t}function zi(e,t){return ct(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function Dh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let a=n.length-1,i,l;for(i=0;i<s.length;i++)if(l=s[i],l!==".")if(l==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+s.slice(i).join("/")}var Xn;(function(e){e.pop="pop",e.push="push"})(Xn||(Xn={}));var jn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(jn||(jn={}));function Nh(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ih(e)}const Mh=/^[^#]+#/;function Fh(e,t){return e.replace(Mh,"#")+t}function Hh(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const ro=()=>({left:window.scrollX,top:window.scrollY});function zh(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Hh(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function $i(e,t){return(history.state?history.state.position-t:-1)+e}const Go=new Map;function $h(e,t){Go.set(e,t)}function jh(e){const t=Go.get(e);return Go.delete(e),t}let Vh=()=>location.protocol+"//"+location.host;function Il(e,t){const{pathname:n,search:s,hash:o}=t,a=e.indexOf("#");if(a>-1){let l=o.includes(e.slice(a))?e.slice(a).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),Hi(c,"")}return Hi(n,e)+s+o}function Uh(e,t,n,s){let o=[],a=[],i=null;const l=({state:h})=>{const p=Il(e,location),v=n.value,E=t.value;let k=0;if(h){if(n.value=p,t.value=h,i&&i===v){i=null;return}k=E?h.position-E.position:0}else s(p);o.forEach(b=>{b(n.value,v,{delta:k,type:Xn.pop,direction:k?k>0?jn.forward:jn.back:jn.unknown})})};function c(){i=n.value}function u(h){o.push(h);const p=()=>{const v=o.indexOf(h);v>-1&&o.splice(v,1)};return a.push(p),p}function d(){const{history:h}=window;h.state&&h.replaceState(he({},h.state,{scroll:ro()}),"")}function f(){for(const h of a)h();a=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function ji(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?ro():null}}function qh(e){const{history:t,location:n}=window,s={value:Il(e,n)},o={value:t.state};o.value||a(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,u,d){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Vh()+e+c;try{t[d?"replaceState":"pushState"](u,"",h),o.value=u}catch(p){console.error(p),n[d?"replace":"assign"](h)}}function i(c,u){const d=he({},t.state,ji(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});a(c,d,!0),s.value=c}function l(c,u){const d=he({},o.value,t.state,{forward:c,scroll:ro()});a(d.current,d,!0);const f=he({},ji(s.value,c,null),{position:d.position+1},u);a(c,f,!1),s.value=c}return{location:s,state:o,push:l,replace:i}}function Gh(e){e=Nh(e);const t=qh(e),n=Uh(e,t.state,t.location,t.replace);function s(a,i=!0){i||n.pauseListeners(),history.go(a)}const o=he({location:"",base:e,go:s,createHref:Fh.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Wh(e){return typeof e=="string"||e&&typeof e=="object"}function Bl(e){return typeof e=="string"||typeof e=="symbol"}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ol=Symbol("");var Vi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Vi||(Vi={}));function En(e,t){return he(new Error,{type:e,[Ol]:!0},t)}function yt(e,t){return e instanceof Error&&Ol in e&&(t==null||!!(e.type&t))}const Ui="[^/]+?",Kh={sensitive:!1,strict:!1,start:!0,end:!0},Yh=/[.+*?^${}()[\]/\\]/g;function Jh(e,t){const n=he({},Kh,t),s=[];let o=n.start?"^":"";const a=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let f=0;f<u.length;f++){const h=u[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(o+="/"),o+=h.value.replace(Yh,"\\$&"),p+=40;else if(h.type===1){const{value:v,repeatable:E,optional:k,regexp:b}=h;a.push({name:v,repeatable:E,optional:k});const A=b||Ui;if(A!==Ui){p+=10;try{new RegExp(`(${A})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${A}): `+w.message)}}let y=E?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(y=k&&u.length<2?`(?:/${y})`:"/"+y),k&&(y+="?"),o+=y,p+=20,k&&(p+=-8),E&&(p+=-20),A===".*"&&(p+=-50)}d.push(p)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const i=new RegExp(o,n.sensitive?"":"i");function l(u){const d=u.match(i),f={};if(!d)return null;for(let h=1;h<d.length;h++){const p=d[h]||"",v=a[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function c(u){let d="",f=!1;for(const h of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const p of h)if(p.type===0)d+=p.value;else if(p.type===1){const{value:v,repeatable:E,optional:k}=p,b=v in u?u[v]:"";if(ct(b)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const A=ct(b)?b.join("/"):b;if(!A)if(k)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);d+=A}}return d||"/"}return{re:i,score:s,keys:a,parse:l,stringify:c}}function Xh(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Zh(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const a=Xh(s[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-s.length)===1){if(qi(s))return 1;if(qi(o))return-1}return o.length-s.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qh={type:0,value:""},ep=/[a-zA-Z0-9_]/;function tp(e){if(!e)return[[]];if(e==="/")return[[Qh]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,s=n;const o=[];let a;function i(){a&&o.push(a),a=[]}let l=0,c,u="",d="";function f(){u&&(n===0?a.push({type:0,value:u}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),i()):c===":"?(f(),n=1):h();break;case 4:h(),n=s;break;case 1:c==="("?n=2:ep.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),i(),o}function np(e,t,n){const s=Jh(tp(e.path),n),o=he(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function sp(e,t){const n=[],s=new Map;t=Ki({strict:!1,end:!0,sensitive:!1},t);function o(d){return s.get(d)}function a(d,f,h){const p=!h,v=op(d);v.aliasOf=h&&h.record;const E=Ki(t,d),k=[v];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of y)k.push(he({},v,{components:h?h.record.components:v.components,path:w,aliasOf:h?h.record:v}))}let b,A;for(const y of k){const{path:w}=y;if(f&&w[0]!=="/"){const D=f.record.path,B=D[D.length-1]==="/"?"":"/";y.path=f.record.path+(w&&B+w)}if(b=np(y,f,E),h?h.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),p&&d.name&&!Wi(b)&&i(d.name)),v.children){const D=v.children;for(let B=0;B<D.length;B++)a(D[B],b,h&&h.children[B])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return A?()=>{i(A)}:$n}function i(d){if(Bl(d)){const f=s.get(d);f&&(s.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(i),f.alias.forEach(i))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&s.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function l(){return n}function c(d){let f=0;for(;f<n.length&&Zh(d,n[f])>=0&&(d.record.path!==n[f].record.path||!Pl(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!Wi(d)&&s.set(d.record.name,d)}function u(d,f){let h,p={},v,E;if("name"in d&&d.name){if(h=s.get(d.name),!h)throw En(1,{location:d});E=h.record.name,p=he(Gi(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&Gi(d.params,h.keys.map(A=>A.name))),v=h.stringify(p)}else if(d.path!=null)v=d.path,h=n.find(A=>A.re.test(v)),h&&(p=h.parse(v),E=h.record.name);else{if(h=f.name?s.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw En(1,{location:d,currentLocation:f});E=h.record.name,p=he({},f.params,d.params),v=h.stringify(p)}const k=[];let b=h;for(;b;)k.unshift(b.record),b=b.parent;return{name:E,path:v,params:p,matched:k,meta:ip(k)}}return e.forEach(d=>a(d)),{addRoute:a,resolve:u,removeRoute:i,getRoutes:l,getRecordMatcher:o}}function Gi(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function op(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ap(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ap(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Wi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ip(e){return e.reduce((t,n)=>he(t,n.meta),{})}function Ki(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Pl(e,t){return t.children.some(n=>n===e||Pl(e,n))}function rp(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const a=s[o].replace(xl," "),i=a.indexOf("="),l=Jn(i<0?a:a.slice(0,i)),c=i<0?null:Jn(a.slice(i+1));if(l in t){let u=t[l];ct(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function Yi(e){let t="";for(let n in e){const s=e[n];if(n=Sh(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(ct(s)?s.map(a=>a&&qo(a)):[s&&qo(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function lp(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=ct(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const cp=Symbol(""),Ji=Symbol(""),lo=Symbol(""),Ia=Symbol(""),Wo=Symbol("");function Rn(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,s,o,a=i=>i()){const i=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((l,c)=>{const u=h=>{h===!1?c(En(4,{from:n,to:t})):h instanceof Error?c(h):Wh(h)?c(En(2,{from:t,to:h})):(i&&s.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),l())},d=a(()=>e.call(s&&s.instances[o],t,n,u));let f=Promise.resolve(d);e.length<3&&(f=f.then(u)),f.catch(h=>c(h))})}function Co(e,t,n,s,o=a=>a()){const a=[];for(const i of e)for(const l in i.components){let c=i.components[l];if(!(t!=="beforeRouteEnter"&&!i.instances[l]))if(up(c)){const d=(c.__vccOpts||c)[t];d&&a.push(Nt(d,n,s,i,l,o))}else{let u=c();a.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${i.path}"`));const f=gh(d)?d.default:d;i.components[l]=f;const p=(f.__vccOpts||f)[t];return p&&Nt(p,n,s,i,l,o)()}))}}return a}function up(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Xi(e){const t=Ee(lo),n=Ee(Ia),s=_(()=>{const c=sn(e.to);return t.resolve(c)}),o=_(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const h=f.findIndex(wn.bind(null,d));if(h>-1)return h;const p=Zi(c[u-2]);return u>1&&Zi(d)===p&&f[f.length-1].path!==p?f.findIndex(wn.bind(null,c[u-2])):h}),a=_(()=>o.value>-1&&pp(n.params,s.value.params)),i=_(()=>o.value>-1&&o.value===n.matched.length-1&&Ll(n.params,s.value.params));function l(c={}){return hp(c)?t[sn(e.replace)?"replace":"push"](sn(e.to)).catch($n):Promise.resolve()}return{route:s,href:_(()=>s.value.href),isActive:a,isExactActive:i,navigate:l}}const dp=j({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(e,{slots:t}){const n=is(Xi(e)),{options:s}=Ee(lo),o=_(()=>({[Qi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:r("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),fp=dp;function hp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pp(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!ct(o)||o.length!==s.length||s.some((a,i)=>a!==o[i]))return!1}return!0}function Zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Qi=(e,t,n)=>e??t??n,mp=j({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Ee(Wo),o=_(()=>e.route||s.value),a=Ee(Ji,0),i=_(()=>{let u=sn(a);const{matched:d}=o.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=_(()=>o.value.matched[i.value]);lt(Ji,_(()=>i.value+1)),lt(cp,l),lt(Wo,o);const c=te();return ue(()=>[c.value,l.value,e.name],([u,d,f],[h,p,v])=>{d&&(d.instances[f]=u,p&&p!==d&&u&&u===h&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),u&&d&&(!p||!wn(d,p)||!h)&&(d.enterCallbacks[f]||[]).forEach(E=>E(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,f=l.value,h=f&&f.components[d];if(!h)return er(n.default,{Component:h,route:u});const p=f.props[d],v=p?p===!0?u.params:typeof p=="function"?p(u):p:null,k=r(h,he({},v,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return er(n.default,{Component:k,route:u})||k}}});function er(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const gp=mp;function vp(e){const t=sp(e.routes,e),n=e.parseQuery||rp,s=e.stringifyQuery||Yi,o=e.history,a=Rn(),i=Rn(),l=Rn(),c=$e(wt);let u=wt;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xo.bind(null,S=>""+S),f=xo.bind(null,Rh),h=xo.bind(null,Jn);function p(S,V){let z,q;return Bl(S)?(z=t.getRecordMatcher(S),q=V):q=S,t.addRoute(q,z)}function v(S){const V=t.getRecordMatcher(S);V&&t.removeRoute(V)}function E(){return t.getRoutes().map(S=>S.record)}function k(S){return!!t.getRecordMatcher(S)}function b(S,V){if(V=he({},V||c.value),typeof S=="string"){const g=So(n,S,V.path),T=t.resolve({path:g.path},V),C=o.createHref(g.fullPath);return he(g,T,{params:h(T.params),hash:Jn(g.hash),redirectedFrom:void 0,href:C})}let z;if(S.path!=null)z=he({},S,{path:So(n,S.path,V.path).path});else{const g=he({},S.params);for(const T in g)g[T]==null&&delete g[T];z=he({},S,{params:f(g)}),V.params=f(V.params)}const q=t.resolve(z,V),fe=S.hash||"";q.params=d(h(q.params));const ye=Bh(s,he({},S,{hash:xh(fe),path:q.path})),m=o.createHref(ye);return he({fullPath:ye,hash:fe,query:s===Yi?lp(S.query):S.query||{}},q,{redirectedFrom:void 0,href:m})}function A(S){return typeof S=="string"?So(n,S,c.value.path):he({},S)}function y(S,V){if(u!==S)return En(8,{from:V,to:S})}function w(S){return H(S)}function D(S){return w(he(A(S),{replace:!0}))}function B(S){const V=S.matched[S.matched.length-1];if(V&&V.redirect){const{redirect:z}=V;let q=typeof z=="function"?z(S):z;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=A(q):{path:q},q.params={}),he({query:S.query,hash:S.hash,params:q.path!=null?{}:S.params},q)}}function H(S,V){const z=u=b(S),q=c.value,fe=S.state,ye=S.force,m=S.replace===!0,g=B(z);if(g)return H(he(A(g),{state:typeof g=="object"?he({},fe,g.state):fe,force:ye,replace:m}),V||z);const T=z;T.redirectedFrom=V;let C;return!ye&&Oh(s,q,z)&&(C=En(16,{to:T,from:q}),dt(q,q,!0,!1)),(C?Promise.resolve(C):L(T,q)).catch(x=>yt(x)?yt(x,2)?x:St(x):G(x,T,q)).then(x=>{if(x){if(yt(x,2))return H(he({replace:m},A(x.to),{state:typeof x.to=="object"?he({},fe,x.to.state):fe,force:ye}),V||T)}else x=N(T,q,!0,m,fe);return J(T,q,x),x})}function O(S,V){const z=y(S,V);return z?Promise.reject(z):Promise.resolve()}function Y(S){const V=dn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(S):S()}function L(S,V){let z;const[q,fe,ye]=yp(S,V);z=Co(q.reverse(),"beforeRouteLeave",S,V);for(const g of q)g.leaveGuards.forEach(T=>{z.push(Nt(T,S,V))});const m=O.bind(null,S,V);return z.push(m),Me(z).then(()=>{z=[];for(const g of a.list())z.push(Nt(g,S,V));return z.push(m),Me(z)}).then(()=>{z=Co(fe,"beforeRouteUpdate",S,V);for(const g of fe)g.updateGuards.forEach(T=>{z.push(Nt(T,S,V))});return z.push(m),Me(z)}).then(()=>{z=[];for(const g of ye)if(g.beforeEnter)if(ct(g.beforeEnter))for(const T of g.beforeEnter)z.push(Nt(T,S,V));else z.push(Nt(g.beforeEnter,S,V));return z.push(m),Me(z)}).then(()=>(S.matched.forEach(g=>g.enterCallbacks={}),z=Co(ye,"beforeRouteEnter",S,V,Y),z.push(m),Me(z))).then(()=>{z=[];for(const g of i.list())z.push(Nt(g,S,V));return z.push(m),Me(z)}).catch(g=>yt(g,8)?g:Promise.reject(g))}function J(S,V,z){l.list().forEach(q=>Y(()=>q(S,V,z)))}function N(S,V,z,q,fe){const ye=y(S,V);if(ye)return ye;const m=V===wt,g=hn?history.state:{};z&&(q||m?o.replace(S.fullPath,he({scroll:m&&g&&g.scroll},fe)):o.push(S.fullPath,fe)),c.value=S,dt(S,V,z,m),St()}let Q;function Te(){Q||(Q=o.listen((S,V,z)=>{if(!xs.listening)return;const q=b(S),fe=B(q);if(fe){H(he(fe,{replace:!0}),q).catch($n);return}u=q;const ye=c.value;hn&&$h($i(ye.fullPath,z.delta),ro()),L(q,ye).catch(m=>yt(m,12)?m:yt(m,2)?(H(m.to,q).then(g=>{yt(g,20)&&!z.delta&&z.type===Xn.pop&&o.go(-1,!1)}).catch($n),Promise.reject()):(z.delta&&o.go(-z.delta,!1),G(m,q,ye))).then(m=>{m=m||N(q,ye,!1),m&&(z.delta&&!yt(m,8)?o.go(-z.delta,!1):z.type===Xn.pop&&yt(m,20)&&o.go(-1,!1)),J(q,ye,m)}).catch($n)}))}let xe=Rn(),W=Rn(),se;function G(S,V,z){St(S);const q=W.list();return q.length?q.forEach(fe=>fe(S,V,z)):console.error(S),Promise.reject(S)}function st(){return se&&c.value!==wt?Promise.resolve():new Promise((S,V)=>{xe.add([S,V])})}function St(S){return se||(se=!S,Te(),xe.list().forEach(([V,z])=>S?z(S):V()),xe.reset()),S}function dt(S,V,z,q){const{scrollBehavior:fe}=e;if(!hn||!fe)return Promise.resolve();const ye=!z&&jh($i(S.fullPath,0))||(q||!z)&&history.state&&history.state.scroll||null;return qt().then(()=>fe(S,V,ye)).then(m=>m&&zh(m)).catch(m=>G(m,S,V))}const je=S=>o.go(S);let un;const dn=new Set,xs={currentRoute:c,listening:!0,addRoute:p,removeRoute:v,hasRoute:k,getRoutes:E,resolve:b,options:e,push:w,replace:D,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:a.add,beforeResolve:i.add,afterEach:l.add,onError:W.add,isReady:st,install(S){const V=this;S.component("RouterLink",fp),S.component("RouterView",gp),S.config.globalProperties.$router=V,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(c)}),hn&&!un&&c.value===wt&&(un=!0,w(o.location).catch(fe=>{}));const z={};for(const fe in wt)Object.defineProperty(z,fe,{get:()=>c.value[fe],enumerable:!0});S.provide(lo,V),S.provide(Ia,Ir(z)),S.provide(Wo,c);const q=S.unmount;dn.add(S),S.unmount=function(){dn.delete(S),dn.size<1&&(u=wt,Q&&Q(),Q=null,c.value=wt,un=!1,se=!1),q()}}};function Me(S){return S.reduce((V,z)=>V.then(()=>Y(z)),Promise.resolve())}return xs}function yp(e,t){const n=[],s=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let i=0;i<a;i++){const l=t.matched[i];l&&(e.matched.find(u=>wn(u,l))?s.push(l):n.push(l));const c=e.matched[i];c&&(t.matched.find(u=>wn(u,c))||o.push(c))}return[n,s,o]}function rn(){return Ee(lo)}function Tt(){return Ee(Ia)}var Ba=Symbol(""),vt=()=>{const e=Ee(Ba);if(!e)throw new Error("useClientData() is called without provider.");return e},bp=()=>vt().pageComponent,ve=()=>vt().pageData,ge=()=>vt().pageFrontmatter,wp=()=>vt().pageHead,Dl=()=>vt().pageLang,Ep=()=>vt().pageLayout,xt=()=>vt().routeLocale,_p=()=>vt().routes,Nl=()=>vt().siteData,fs=()=>vt().siteLocaleData,kp=Symbol(""),Ko=$e(ph),Zn=$e(mh),Ml=e=>{const t=uh(e);if(Zn.value[t])return t;const n=encodeURI(t);return Zn.value[n]?n:Ko.value[t]||Ko.value[n]||t},gt=e=>{const t=Ml(e),n=Zn.value[t]??{...Zn.value["/404.html"],notFound:!0};return{path:t,notFound:!1,...n}},co=j({name:"ClientOnly",setup(e,t){const n=te(!1);return Re(()=>{n.value=!0}),()=>{var s,o;return n.value?(o=(s=t.slots).default)==null?void 0:o.call(s):null}}}),Fl=j({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(e){const t=bp(),n=_(()=>{if(!e.path)return t.value;const s=gt(e.path);return Ld(()=>s.loader().then(({comp:o})=>o))});return()=>r(n.value)}}),ut=(e={})=>e,me=e=>Gt(e)?e:`/blog/${Al(e)}`,Ap=e=>{if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget){const t=e.currentTarget.getAttribute("target");if(t!=null&&t.match(/\b_blank\b/i))return}return e.preventDefault(),!0}},Ae=({active:e=!1,activeClass:t="route-link-active",to:n,...s},{slots:o})=>{var c;const a=rn(),i=Ml(n),l=i.startsWith("#")||i.startsWith("?")?i:me(i);return r("a",{...s,class:["route-link",{[t]:e}],href:l,onClick:(u={})=>{Ap(u)?a.push(n).catch():Promise.resolve()}},(c=o.default)==null?void 0:c.call(o))};Ae.displayName="RouteLink";Ae.props={active:Boolean,activeClass:String,to:String};var Tp="Layout",xp="en-US",Xt=is({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageHead:(e,t,n)=>{const s=_e(t.description)?t.description:n.description,o=[...Array.isArray(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:s}]];return rh(o)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||xp,resolvePageLayout:(e,t)=>{const n=_e(e.frontmatter.layout)?e.frontmatter.layout:Tp;if(!t[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return t[n]},resolveRouteLocale:(e,t)=>dh(e,t),resolveSiteLocaleData:(e,t)=>{var n;return{...e,...e.locales[t],head:[...((n=e.locales[t])==null?void 0:n.head)??[],...e.head??[]]}}});const Sp={},hs=e=>{const t=xt();return _(()=>e[t.value]??{})},mt=(e,t)=>{var s;const n=(s=(t==null?void 0:t._instance)||cs())==null?void 0:s.appContext.components;return n?e in n||nt(e)in n||as(nt(e))in n:!1},Cp=e=>typeof e<"u",Ro=e=>typeof e=="number",Yo=Array.isArray,Qn=(e,t)=>_e(e)&&e.startsWith(t),Rp=(e,t)=>_e(e)&&e.endsWith(t),ps=Object.entries,kt=Object.keys,Oa=e=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},ms=e=>Qn(e,"/"),Lp="http://.",Ip=(e,t)=>{if(ms(e)||typeof t!="string")return gt(e);const n=t.slice(0,t.lastIndexOf("/"));return gt(new URL(`${n}/${encodeURI(e)}`,Lp).pathname)},Hl=e=>new Promise(t=>setTimeout(t,e));function zl(e,t){let n,s,o;const a=te(!0),i=()=>{a.value=!0,o()};ue(e,i,{flush:"sync"});const l=typeof t=="function"?t:t.get,c=typeof t=="function"?void 0:t.set,u=Ea((d,f)=>(s=d,o=f,{get(){return a.value&&(n=l(),a.value=!1),s(),n},set(h){c==null||c(h)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function xn(e){return br()?(Nu(e),!0):!1}function Pe(e){return typeof e=="function"?e():sn(e)}const gs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Bp=Object.prototype.toString,Op=e=>Bp.call(e)==="[object Object]",on=()=>{},tr=Pp();function Pp(){var e,t;return gs&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Pa(e,t){function n(...s){return new Promise((o,a)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(o).catch(a)})}return n}const $l=e=>e();function Dp(e,t={}){let n,s,o=on;const a=l=>{clearTimeout(l),o(),o=on};return l=>{const c=Pe(e),u=Pe(t.maxWait);return n&&a(n),c<=0||u!==void 0&&u<=0?(s&&(a(s),s=null),Promise.resolve(l())):new Promise((d,f)=>{o=t.rejectOnCancel?f:d,u&&!s&&(s=setTimeout(()=>{n&&a(n),s=null,d(l())},u)),n=setTimeout(()=>{s&&a(s),s=null,d(l())},c)})}}function Np(...e){let t=0,n,s=!0,o=on,a,i,l,c,u;!Oe(e[0])&&typeof e[0]=="object"?{delay:i,trailing:l=!0,leading:c=!0,rejectOnCancel:u=!1}=e[0]:[i,l=!0,c=!0,u=!1]=e;const d=()=>{n&&(clearTimeout(n),n=void 0,o(),o=on)};return h=>{const p=Pe(i),v=Date.now()-t,E=()=>a=h();return d(),p<=0?(t=Date.now(),E()):(v>p&&(c||!s)?(t=Date.now(),E()):l&&(a=new Promise((k,b)=>{o=u?b:k,n=setTimeout(()=>{t=Date.now(),s=!0,k(E()),d()},Math.max(0,p-v))})),!c&&!n&&(n=setTimeout(()=>s=!0,p)),s=!1,a)}}function Mp(e=$l){const t=te(!0);function n(){t.value=!1}function s(){t.value=!0}const o=(...a)=>{t.value&&e(...a)};return{isActive:an(t),pause:n,resume:s,eventFilter:o}}function Fp(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const s=t;t=void 0,s&&await s},n}function jl(e){return cs()}function Hp(...e){if(e.length!==1)return An(...e);const t=e[0];return typeof t=="function"?an(Ea(()=>({get:t,set:on}))):te(t)}function zp(e,t=200,n={}){return Pa(Dp(t,n),e)}function $p(e,t=200,n=!1,s=!0,o=!1){return Pa(Np(t,n,s,o),e)}function jp(e,t,n={}){const{eventFilter:s=$l,...o}=n;return ue(e,Pa(s,t),o)}function Vp(e,t,n={}){const{eventFilter:s,...o}=n,{eventFilter:a,pause:i,resume:l,isActive:c}=Mp(s);return{stop:jp(e,t,{...o,eventFilter:a}),pause:i,resume:l,isActive:c}}function uo(e,t=!0,n){jl()?Re(e,n):t?e():qt(e)}function Up(e,t){jl()&&Tn(e,t)}function qp(e,t,n={}){const{immediate:s=!0}=n,o=te(!1);let a=null;function i(){a&&(clearTimeout(a),a=null)}function l(){o.value=!1,i()}function c(...u){i(),o.value=!0,a=setTimeout(()=>{o.value=!1,a=null,e(...u)},Pe(t))}return s&&(o.value=!0,gs&&c()),xn(l),{isPending:an(o),start:c,stop:l}}function Jo(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,o=Oe(e),a=te(e);function i(l){if(arguments.length)return a.value=l,a.value;{const c=Pe(n);return a.value=a.value===c?Pe(s):c,a.value}}return o?i:[a,i]}function Et(e){var t;const n=Pe(e);return(t=n==null?void 0:n.$el)!=null?t:n}const jt=gs?window:void 0,Vl=gs?window.document:void 0,Ul=gs?window.navigator:void 0;function De(...e){let t,n,s,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,o]=e,t=jt):[t,n,s,o]=e,!t)return on;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const a=[],i=()=>{a.forEach(d=>d()),a.length=0},l=(d,f,h,p)=>(d.addEventListener(f,h,p),()=>d.removeEventListener(f,h,p)),c=ue(()=>[Et(t),Pe(o)],([d,f])=>{if(i(),!d)return;const h=Op(f)?{...f}:f;a.push(...n.flatMap(p=>s.map(v=>l(d,p,v,h))))},{immediate:!0,flush:"post"}),u=()=>{c(),i()};return xn(u),u}function Gp(){const e=te(!1),t=cs();return t&&Re(()=>{e.value=!0},t),e}function vs(e){const t=Gp();return _(()=>(t.value,!!e()))}function ql(e,t={}){const{window:n=jt}=t,s=vs(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const a=te(!1),i=u=>{a.value=u.matches},l=()=>{o&&("removeEventListener"in o?o.removeEventListener("change",i):o.removeListener(i))},c=Vr(()=>{s.value&&(l(),o=n.matchMedia(Pe(e)),"addEventListener"in o?o.addEventListener("change",i):o.addListener(i),a.value=o.matches)});return xn(()=>{c(),l(),o=void 0}),a}function nr(e,t={}){const{controls:n=!1,navigator:s=Ul}=t,o=vs(()=>s&&"permissions"in s);let a;const i=typeof e=="string"?{name:e}:e,l=te(),c=()=>{a&&(l.value=a.state)},u=Fp(async()=>{if(o.value){if(!a)try{a=await s.permissions.query(i),De(a,"change",c),c()}catch{l.value="prompt"}return a}});return u(),n?{state:l,isSupported:o,query:u}:l}function Wp(e={}){const{navigator:t=Ul,read:n=!1,source:s,copiedDuring:o=1500,legacy:a=!1}=e,i=vs(()=>t&&"clipboard"in t),l=nr("clipboard-read"),c=nr("clipboard-write"),u=_(()=>i.value||a),d=te(""),f=te(!1),h=qp(()=>f.value=!1,o);function p(){i.value&&b(l.value)?t.clipboard.readText().then(A=>{d.value=A}):d.value=k()}u.value&&n&&De(["copy","cut"],p);async function v(A=Pe(s)){u.value&&A!=null&&(i.value&&b(c.value)?await t.clipboard.writeText(A):E(A),d.value=A,f.value=!0,h.start())}function E(A){const y=document.createElement("textarea");y.value=A??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function k(){var A,y,w;return(w=(y=(A=document==null?void 0:document.getSelection)==null?void 0:A.call(document))==null?void 0:y.toString())!=null?w:""}function b(A){return A==="granted"||A==="prompt"}return{isSupported:u,text:d,copied:f,copy:v}}const Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ms="__vueuse_ssr_handlers__",Kp=Yp();function Yp(){return Ms in Ns||(Ns[Ms]=Ns[Ms]||{}),Ns[Ms]}function Jp(e,t){return Kp[e]||t}function Xp(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const Zp={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},sr="vueuse-storage";function Qp(e,t,n,s={}){var o;const{flush:a="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=jt,eventFilter:h,onError:p=L=>{console.error(L)},initOnMounted:v}=s,E=(d?$e:te)(t);if(!n)try{n=Jp("getDefaultStorage",()=>{var L;return(L=jt)==null?void 0:L.localStorage})()}catch(L){p(L)}if(!n)return E;const k=Pe(t),b=Xp(k),A=(o=s.serializer)!=null?o:Zp[b],{pause:y,resume:w}=Vp(E,()=>B(E.value),{flush:a,deep:i,eventFilter:h});f&&l&&uo(()=>{De(f,"storage",O),De(f,sr,Y),v&&O()}),v||O();function D(L,J){f&&f.dispatchEvent(new CustomEvent(sr,{detail:{key:e,oldValue:L,newValue:J,storageArea:n}}))}function B(L){try{const J=n.getItem(e);if(L==null)D(J,null),n.removeItem(e);else{const N=A.write(L);J!==N&&(n.setItem(e,N),D(J,N))}}catch(J){p(J)}}function H(L){const J=L?L.newValue:n.getItem(e);if(J==null)return c&&k!=null&&n.setItem(e,A.write(k)),k;if(!L&&u){const N=A.read(J);return typeof u=="function"?u(N,k):b==="object"&&!Array.isArray(N)?{...k,...N}:N}else return typeof J!="string"?J:A.read(J)}function O(L){if(!(L&&L.storageArea!==n)){if(L&&L.key==null){E.value=k;return}if(!(L&&L.key!==e)){y();try{(L==null?void 0:L.newValue)!==A.write(E.value)&&(E.value=H(L))}catch(J){p(J)}finally{L?qt(w):w()}}}}function Y(L){O(L.detail)}return E}function em(e){return ql("(prefers-color-scheme: dark)",e)}function tm(e,t,n={}){const{window:s=jt,...o}=n;let a;const i=vs(()=>s&&"ResizeObserver"in s),l=()=>{a&&(a.disconnect(),a=void 0)},c=_(()=>Array.isArray(e)?e.map(f=>Et(f)):[Et(e)]),u=ue(c,f=>{if(l(),i.value&&s){a=new ResizeObserver(t);for(const h of f)h&&a.observe(h,o)}},{immediate:!0,flush:"post"}),d=()=>{l(),u()};return xn(d),{isSupported:i,stop:d}}function nm(e,t={width:0,height:0},n={}){const{window:s=jt,box:o="content-box"}=n,a=_(()=>{var f,h;return(h=(f=Et(e))==null?void 0:f.namespaceURI)==null?void 0:h.includes("svg")}),i=te(t.width),l=te(t.height),{stop:c}=tm(e,([f])=>{const h=o==="border-box"?f.borderBoxSize:o==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(s&&a.value){const p=Et(e);if(p){const v=s.getComputedStyle(p);i.value=Number.parseFloat(v.width),l.value=Number.parseFloat(v.height)}}else if(h){const p=Array.isArray(h)?h:[h];i.value=p.reduce((v,{inlineSize:E})=>v+E,0),l.value=p.reduce((v,{blockSize:E})=>v+E,0)}else i.value=f.contentRect.width,l.value=f.contentRect.height},n);uo(()=>{const f=Et(e);f&&(i.value="offsetWidth"in f?f.offsetWidth:t.width,l.value="offsetHeight"in f?f.offsetHeight:t.height)});const u=ue(()=>Et(e),f=>{i.value=f?t.width:0,l.value=f?t.height:0});function d(){c(),u()}return{width:i,height:l,stop:d}}const or=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Da(e,t={}){const{document:n=Vl,autoExit:s=!1}=t,o=_(()=>{var b;return(b=Et(e))!=null?b:n==null?void 0:n.querySelector("html")}),a=te(!1),i=_(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||o.value&&b in o.value)),l=_(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||o.value&&b in o.value)),c=_(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||o.value&&b in o.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),d=vs(()=>o.value&&n&&i.value!==void 0&&l.value!==void 0&&c.value!==void 0),f=()=>u?(n==null?void 0:n[u])===o.value:!1,h=()=>{if(c.value){if(n&&n[c.value]!=null)return n[c.value];{const b=o.value;if((b==null?void 0:b[c.value])!=null)return!!b[c.value]}}return!1};async function p(){if(!(!d.value||!a.value)){if(l.value)if((n==null?void 0:n[l.value])!=null)await n[l.value]();else{const b=o.value;(b==null?void 0:b[l.value])!=null&&await b[l.value]()}a.value=!1}}async function v(){if(!d.value||a.value)return;h()&&await p();const b=o.value;i.value&&(b==null?void 0:b[i.value])!=null&&(await b[i.value](),a.value=!0)}async function E(){await(a.value?p():v())}const k=()=>{const b=h();(!b||b&&f())&&(a.value=b)};return De(n,or,k,!1),De(()=>Et(o),or,k,!1),s&&xn(p),{isSupported:d,isFullscreen:a,enter:v,exit:p,toggle:E}}function Lo(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function Io(e,t=on,n={}){const{immediate:s=!0,manual:o=!1,type:a="text/javascript",async:i=!0,crossOrigin:l,referrerPolicy:c,noModule:u,defer:d,document:f=Vl,attrs:h={}}=n,p=te(null);let v=null;const E=A=>new Promise((y,w)=>{const D=O=>(p.value=O,y(O),O);if(!f){y(!1);return}let B=!1,H=f.querySelector(`script[src="${Pe(e)}"]`);H?H.hasAttribute("data-loaded")&&D(H):(H=f.createElement("script"),H.type=a,H.async=i,H.src=Pe(e),d&&(H.defer=d),l&&(H.crossOrigin=l),u&&(H.noModule=u),c&&(H.referrerPolicy=c),Object.entries(h).forEach(([O,Y])=>H==null?void 0:H.setAttribute(O,Y)),B=!0),H.addEventListener("error",O=>w(O)),H.addEventListener("abort",O=>w(O)),H.addEventListener("load",()=>{H.setAttribute("data-loaded","true"),t(H),D(H)}),B&&(H=f.head.appendChild(H)),A||D(H)}),k=(A=!0)=>(v||(v=E(A)),v),b=()=>{if(!f)return;v=null,p.value&&(p.value=null);const A=f.querySelector(`script[src="${Pe(e)}"]`);A&&f.head.removeChild(A)};return s&&!o&&uo(k),o||Up(b),{scriptTag:p,load:k,unload:b}}function Gl(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:Gl(n)}}function sm(e){const t=e||window.event,n=t.target;return Gl(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const Fs=new WeakMap;function Wl(e,t=!1){const n=te(t);let s=null;ue(Hp(e),i=>{const l=Lo(Pe(i));if(l){const c=l;Fs.get(c)||Fs.set(c,c.style.overflow),n.value&&(c.style.overflow="hidden")}},{immediate:!0});const o=()=>{const i=Lo(Pe(e));!i||n.value||(tr&&(s=De(i,"touchmove",l=>{sm(l)},{passive:!1})),i.style.overflow="hidden",n.value=!0)},a=()=>{var i;const l=Lo(Pe(e));!l||!n.value||(tr&&(s==null||s()),l.style.overflow=(i=Fs.get(l))!=null?i:"",Fs.delete(l),n.value=!1)};return xn(a),_({get(){return n.value},set(i){i?o():a()}})}function om(e={}){const{window:t=jt,behavior:n="auto"}=e;if(!t)return{x:te(0),y:te(0)};const s=te(t.scrollX),o=te(t.scrollY),a=_({get(){return s.value},set(l){scrollTo({left:l,behavior:n})}}),i=_({get(){return o.value},set(l){scrollTo({top:l,behavior:n})}});return De(t,"scroll",()=>{s.value=t.scrollX,o.value=t.scrollY},{capture:!1,passive:!0}),{x:a,y:i}}function am(e={}){const{window:t=jt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:o=!0,includeScrollbar:a=!0}=e,i=te(n),l=te(s),c=()=>{t&&(a?(i.value=t.innerWidth,l.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};if(c(),uo(c),De("resize",c,{passive:!0}),o){const u=ql("(orientation: portrait)");ue(u,()=>c())}return{width:i,height:l}}var im=j({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=_(()=>{const s=["font-icon icon"],o=`fas fa-${e.icon}`;return s.push("fa-fw fa-sm"),s.push(e.icon.includes(" ")?e.icon:o),s}),n=_(()=>{const s={};return e.color&&(s.color=e.color),e.size&&(s["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),kt(s).length?s:null});return()=>e.icon?r("span",{key:e.icon,class:t.value,style:n.value}):null}});const Kl=({type:e="info",text:t="",vertical:n,color:s},{slots:o})=>{var a;return r("span",{class:["vp-badge",e,{diy:s}],style:{verticalAlign:n??!1,backgroundColor:s??!1}},((a=o.default)==null?void 0:a.call(o))??t)};Kl.displayName="Badge";const Yl=({title:e,desc:t="",logo:n,background:s,color:o,link:a})=>{const i=[n?r("img",{class:"vp-card-logo",src:me(n),loading:"lazy","no-view":""}):null,r("div",{class:"vp-card-content"},[r("div",{class:"vp-card-title",innerHTML:e}),r("hr"),r("div",{class:"vp-card-desc",innerHTML:t})])],l={};return s&&(l.background=s),o&&(l.color=o),a?oo(a)?r("a",{class:"vp-card",href:a,target:"_blank",style:l},i):r(Ae,{to:a,class:"vp-card",style:l},()=>i):r("div",{class:"vp-card",style:l},i)};Yl.displayName="VPCard";const rm=ut({enhance:({app:e})=>{mt("FontIcon")||e.component("FontIcon",im),mt("Badge")||e.component("Badge",Kl),mt("VPCard")||e.component("VPCard",Yl)},setup:()=>{Io("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Io("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),Io("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[]}),ar=async(e,t)=>{const{path:n,query:s}=e.currentRoute.value,{scrollBehavior:o}=e.options;e.options.scrollBehavior=void 0,await e.replace({path:n,query:s,hash:t}),e.options.scrollBehavior=o},lm=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:s=5})=>{const o=rn();De("scroll",zp(()=>{var v,E;const i=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(i-0)<s){ar(o,"");return}const c=window.innerHeight+i,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(u-c)<s,f=Array.from(document.querySelectorAll(e)),p=Array.from(document.querySelectorAll(t)).filter(k=>f.some(b=>b.hash===k.hash));for(let k=0;k<p.length;k++){const b=p[k],A=p[k+1],y=i>=(((v=b.parentElement)==null?void 0:v.offsetTop)??0)-s,w=!A||i<(((E=A.parentElement)==null?void 0:E.offsetTop)??0)-s;if(!(y&&w))continue;const B=decodeURIComponent(o.currentRoute.value.hash),H=decodeURIComponent(b.hash);if(B===H)return;if(d){for(let O=k+1;O<p.length;O++)if(B===decodeURIComponent(p[O].hash))return}ar(o,H);return}},n))},cm=".vp-sidebar-link, .vp-toc-link",um=".header-anchor",dm=200,fm=5,hm=ut({setup(){lm({headerLinkSelector:cm,headerAnchorSelector:um,delay:dm,offset:fm})}});let Jl=e=>_e(e.title)?{title:e.title}:null;const Xl=Symbol(""),pm=e=>{Jl=e},mm=()=>Ee(Xl),gm=e=>{e.provide(Xl,Jl)};var vm={"/":{title:"目录",empty:"暂无目录"}};const ym=j({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=mm(),n=hs(vm),s=ve(),o=_p(),a=Nl(),l=$e(ps(o.value).map(([u,{meta:d}])=>{const f=t(d);if(!f)return null;const h=u.split("/").length;return{level:Rp(u,"/")?h-2:h-1,base:u.replace(/\/[^/]+\/?$/,"/"),path:u,...f}}).filter(u=>io(u)&&_e(u.title))),c=_(()=>{const u=e.base?lh(kl(e.base)):s.value.path.replace(/\/[^/]+$/,"/"),d=u.split("/").length-2,f=[];return l.value.filter(({level:h,path:p})=>{if(!Qn(p,u)||p===u)return!1;if(u==="/"){const v=kt(a.value.locales).filter(E=>E!=="/");if(p==="/404.html"||v.some(E=>Qn(p,E)))return!1}return h-d<=e.level}).sort(({title:h,level:p,order:v},{title:E,level:k,order:b})=>{const A=p-k;return A||(Ro(v)?Ro(b)?v>0?b>0?v-b:-1:b<0?v-b:1:v:Ro(b)?b:h.localeCompare(E))}).forEach(h=>{var E;const{base:p,level:v}=h;switch(v-d){case 1:{f.push(h);break}case 2:{const k=f.find(b=>b.path===p);k&&(k.children??(k.children=[])).push(h);break}default:{const k=f.find(b=>b.path===p.replace(/\/[^/]+\/$/,"/"));if(k){const b=(E=k.children)==null?void 0:E.find(A=>A.path===p);b&&(b.children??(b.children=[])).push(h)}}}}),f});return()=>{const u=c.value.some(d=>d.children);return r("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:r("h2",{class:"vp-catalog-main-title"},n.value.title),c.value.length?r(e.index?"ol":"ul",{class:["vp-catalogs",{deep:u}]},c.value.map(({children:d=[],title:f,path:h,content:p})=>{const v=r(Ae,{class:"vp-catalog-title",to:h},()=>p?r(p):f);return r("li",{class:"vp-catalog"},u?[r("h3",{id:f,class:["vp-catalog-child-title",{"has-children":d.length}]},[r("a",{href:`#${f}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),v]),d.length?r(e.index?"ol":"ul",{class:"vp-child-catalogs"},d.map(({children:E=[],content:k,path:b,title:A})=>r("li",{class:"vp-child-catalog"},[r("div",{class:["vp-catalog-sub-title",{"has-children":E.length}]},[r("a",{href:`#${A}`,class:"vp-catalog-header-anchor"},"#"),r(Ae,{class:"vp-catalog-title",to:b},()=>k?r(k):A)]),E.length?r(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},E.map(({content:y,path:w,title:D})=>e.index?r("li",{class:"vp-sub-catalog"},r(Ae,{to:w},()=>y?r(y):D)):r(Ae,{class:"vp-sub-catalog-link",to:w},()=>y?r(y):D))):null]))):null]:r("div",{class:"vp-catalog-child-title"},v))})):r("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),bm=ut({enhance:({app:e})=>{gm(e),mt("Catalog",e)||e.component("Catalog",ym)}});var wm={"/":{backToTop:"返回顶部"}};const Em=j({name:"BackToTop",setup(){const e=ge(),t=hs(wm),n=$e(),{height:s}=nm(n),{height:o}=am(),{y:a}=om(),i=_(()=>e.value.backToTop!==!1&&a.value>100),l=_(()=>a.value/(s.value-o.value)*100);return Re(()=>{n.value=document.body}),()=>r($t,{name:"back-to-top"},()=>i.value?r("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[r("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":l.value},r("svg",r("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*l.value*.48} ${Math.PI*(100-l.value)*.48}`}))),r("div",{class:"back-to-top-icon"})]):null)}}),_m=ut({rootComponents:[Em]}),km=r("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[r("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Zl=j({name:"ExternalLinkIcon",props:{locales:{type:Object,default:()=>({})}},setup(e){const t=xt(),n=_(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>r("span",[km,r("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var Am={};const Tm=Am,xm=ut({enhance({app:e}){e.component("ExternalLinkIcon",r(Zl,{locales:Tm}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const re={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=re.isStarted();e=Bo(e,re.settings.minimum,1),re.status=e===1?null:e;const n=re.render(!t),s=n.querySelector(re.settings.barSelector),o=re.settings.speed,a=re.settings.easing;return n.offsetWidth,Sm(i=>{Hs(s,{transform:"translate3d("+ir(e)+"%,0,0)",transition:"all "+o+"ms "+a}),e===1?(Hs(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){Hs(n,{transition:"all "+o+"ms linear",opacity:"0"}),setTimeout(function(){re.remove(),i()},o)},o)):setTimeout(()=>i(),o)}),re},isStarted:()=>typeof re.status=="number",start:()=>{re.status||re.set(0);const e=()=>{setTimeout(()=>{re.status&&(re.trickle(),e())},re.settings.trickleSpeed)};return re.settings.trickle&&e(),re},done:e=>!e&&!re.status?re:re.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=re.status;return t?(typeof e!="number"&&(e=(1-t)*Bo(Math.random()*t,.1,.95)),t=Bo(t+e,0,.994),re.set(t)):re.start()},trickle:()=>re.inc(Math.random()*re.settings.trickleRate),render:e=>{if(re.isRendered())return document.getElementById("nprogress");rr(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=re.settings.template;const n=t.querySelector(re.settings.barSelector),s=e?"-100":ir(re.status||0),o=document.querySelector(re.settings.parent);return Hs(n,{transition:"all 0 linear",transform:"translate3d("+s+"%,0,0)"}),o!==document.body&&rr(o,"nprogress-custom-parent"),o==null||o.appendChild(t),t},remove:()=>{lr(document.documentElement,"nprogress-busy"),lr(document.querySelector(re.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Cm(e)},isRendered:()=>!!document.getElementById("nprogress")},Bo=(e,t,n)=>e<t?t:e>n?n:e,ir=e=>(-1+e)*100,Sm=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),Hs=function(){const e=["Webkit","O","Moz","ms"],t={};function n(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(l,c){return c.toUpperCase()})}function s(i){const l=document.body.style;if(i in l)return i;let c=e.length;const u=i.charAt(0).toUpperCase()+i.slice(1);let d;for(;c--;)if(d=e[c]+u,d in l)return d;return i}function o(i){return i=n(i),t[i]??(t[i]=s(i))}function a(i,l,c){l=o(l),i.style[l]=c}return function(i,l){for(const c in l){const u=l[c];u!==void 0&&Object.prototype.hasOwnProperty.call(l,c)&&a(i,c,u)}}}(),Ql=(e,t)=>(typeof e=="string"?e:Na(e)).indexOf(" "+t+" ")>=0,rr=(e,t)=>{const n=Na(e),s=n+t;Ql(n,t)||(e.className=s.substring(1))},lr=(e,t)=>{const n=Na(e);if(!Ql(e,t))return;const s=n.replace(" "+t+" "," ");e.className=s.substring(1,s.length-1)},Na=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Cm=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},Rm=()=>{Re(()=>{const e=rn(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||re.start()}),e.afterEach(n=>{t.add(n.path),re.done()})})},Lm=ut({setup(){Rm()}}),Im=JSON.parse('{"encrypt":{},"repo":"Neumannzc/blog","author":{"name":"Cafe Babe","url":"https://gitee.com/z517890027"},"logo":"/assets/site/body.png","footer":"世界很残酷，你要活得有温度","displayFooter":true,"blog":{"description":"知之 - 行之 - 得之","intro":"/intro.html","avatar":"/assets/site/Squirrel.jpg","medias":{"Gitee":"https://gitee.com/z517890027","GitHub":"https://github.com/Neumannzc"}},"darkmode":"toggle","fullscreen":true,"print":false,"docsDir":"src","locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"navbar":["/",{"text":"文章","icon":"book","prefix":"/posts/","children":[{"text":"后端","prefix":"backend/","children":["README.md"]},{"text":"数据库","prefix":"sql/","children":["README.md"]},{"text":"前端","prefix":"frontend/","children":["README.md"]},{"text":"服务器","prefix":"server/","children":["README.md"]},{"text":"更多","prefix":"other/","children":["README.md"]}]},{"text":"官网和文档","icon":"paperclip","link":"/posts/other/官网和文档链接"}],"sidebar":{"/":[{"text":"后端","icon":"mug-hot","prefix":"posts/backend","collapsible":true,"children":"structure"},{"text":"数据库","icon":"database","prefix":"posts/sql","collapsible":true,"children":"structure"},{"text":"前端","icon":"desktop","collapsible":true,"prefix":"posts/frontend","children":"structure"},{"text":"服务器","icon":"earth-americas","collapsible":true,"prefix":"posts/server","children":"structure"},{"text":"更多","icon":"infinity","prefix":"posts/other","collapsible":true,"children":"structure"},"intro"]}}}}'),Bm=te(Im),ec=()=>Bm,tc=Symbol(""),Om=()=>{const e=Ee(tc);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},Pm=(e,t)=>{const{locales:n,...s}=e;return{...s,...n==null?void 0:n[t]}},Dm=ut({enhance({app:e}){const t=ec(),n=e._context.provides[Ba],s=_(()=>Pm(t.value,n.routeLocale.value));e.provide(tc,s),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return s.value}}})}}),Nm=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,Mm=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&Nm.test(navigator.userAgent),Fm=({delay:e=500,duration:t=2e3,locales:n,selector:s,showInMobile:o})=>{const{copy:a,copied:i}=Wp({legacy:!0,copiedDuring:t}),l=hs(n),c=ve(),u=h=>{if(!h.hasAttribute("copy-code-registered")){const p=document.createElement("button");p.type="button",p.classList.add("vp-copy-code-button"),p.innerHTML='<div class="vp-copy-icon" />',p.setAttribute("aria-label",l.value.copy),p.setAttribute("data-copied",l.value.copied),h.parentElement&&h.parentElement.insertBefore(p,h),h.setAttribute("copy-code-registered","")}},d=()=>{qt().then(()=>Hl(e)).then(()=>{s.forEach(h=>{document.querySelectorAll(h).forEach(u)})})},f=(h,p,v)=>{let{innerText:E=""}=p;/language-(shellscript|shell|bash|sh|zsh)/.test(h.classList.toString())&&(E=E.replace(/^ *(\$|>) /gm,"")),a(E).then(()=>{v.classList.add("copied"),ue(i,()=>{v.classList.remove("copied"),v.blur()},{once:!0})})};Re(()=>{const h=!Mm()||o;h&&d(),De("click",p=>{const v=p.target;if(v.matches('div[class*="language-"] > button.copy')){const E=v.parentElement,k=v.nextElementSibling;k&&f(E,k,v)}else if(v.matches('div[class*="language-"] div.vp-copy-icon')){const E=v.parentElement,k=E.parentElement,b=E.nextElementSibling;b&&f(k,b,E)}}),ue(()=>c.value.path,()=>{h&&d()})})};var Hm={"/":{copy:"复制代码",copied:"已复制"}},zm=['.theme-hope-content div[class*="language-"] pre'];const $m=500,jm=2e3,Vm=Hm,Um=zm,qm=!1,Gm=ut({setup:()=>{Fm({selector:Um,locales:Vm,duration:jm,delay:$m,showInMobile:qm})}}),Wm=()=>{De("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})},Km=ut({enhance:({app:e})=>{},setup:()=>{Wm()}});let Ym={};const nc=Symbol(""),Jm=()=>Ee(nc),Xm=e=>{e.provide(nc,Ym)},Zm='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',Qm=e=>_e(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),sc=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(sc(e)),e.onerror=s=>n(s))}),e1=e=>{const{isSupported:t,toggle:n}=Da();e.on("uiRegister",()=>{t.value&&e.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{n()}}),e.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(s,o)=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),o.on("change",()=>{s.setAttribute("href",o.currSlide.data.src)})}}),e.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(s,o)=>{const a=[];let i=-1;for(let l=0;l<o.getNumItems();l++){const c=document.createElement("div");c.className="photo-swipe-bullet",c.onclick=u=>{o.goTo(a.indexOf(u.target))},a.push(c),s.appendChild(c)}o.on("change",()=>{i>=0&&a[i].classList.remove("active"),a[o.currIndex].classList.add("active"),i=o.currIndex})}})})},t1=(e,t,n=!0)=>M(()=>import("./photoswipe.esm-SzV8tJDW.js"),[]).then(({default:s})=>{let o=null;const a=e.map(i=>({html:Zm,element:i,msrc:i.src}));return e.forEach((i,l)=>{const c=()=>{o==null||o.destroy(),o=new s({preloaderDelay:0,showHideAnimationType:"zoom",...t,dataSource:a,index:l,...n?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),e1(o),o.addFilter("thumbEl",()=>i),o.addFilter("placeholderSrc",()=>i.src),o.init()};i.getAttribute("photo-swipe")||(i.style.cursor="zoom-in",i.addEventListener("click",()=>{c()}),i.addEventListener("keypress",({key:u})=>{u==="Enter"&&c()}),i.setAttribute("photo-swipe","")),sc(i).then(u=>{a.splice(l,1,u),o==null||o.refreshSlideContent(l)})}),n?De("wheel",()=>{o==null||o.close()}):()=>{}}),n1=({selector:e,locales:t,delay:n=500,scrollToClose:s=!0})=>{const o=Jm(),a=hs(t),i=ve(),l=ge();let c=null;const u=()=>{const{photoSwipe:d}=l.value;d!==!1&&qt().then(()=>Hl(n)).then(async()=>{const f=_e(d)?d:e;c=await t1(Qm(f),{...o,...a.value},s)})};Re(()=>{u(),ue(()=>i.value.path,()=>{c==null||c(),u()})}),Tn(()=>{c==null||c()})};var s1={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const o1=".theme-hope-content :not(a) > img:not([no-view])",a1=s1,i1=800,r1=!0,l1=ut({enhance:({app:e})=>{Xm(e)},setup:()=>{n1({selector:o1,delay:i1,locales:a1,scrollToClose:r1})}}),de=({name:e="",color:t="currentColor"},{slots:n})=>{var s;return r("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(s=n.default)==null?void 0:s.call(n))};de.displayName="IconBase";const oc=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},c1=e=>Gt(e)?e:`https://github.com/${e}`,Ma=(e="")=>!Gt(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,ac=()=>r(de,{name:"github"},()=>r("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));ac.displayName="GitHubIcon";const ic=()=>r(de,{name:"gitee"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));ic.displayName="GiteeIcon";const rc=()=>r(de,{name:"bitbucket"},()=>r("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));rc.displayName="BitbucketIcon";const lc=()=>r(de,{name:"source"},()=>r("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));lc.displayName="SourceIcon";const u1=({link:e,type:t=Ma(e??"")})=>{if(!t)return null;const n=t.toLowerCase();return r(n==="bitbucket"?rc:n==="github"?ac:n==="gitlab"?"GitLab":n==="gitee"?ic:lc)},d1=(e,t=0)=>{let n=3735928559^t,s=1103547991^t;for(let o=0,a;o<e.length;o++)a=e.charCodeAt(o),n=Math.imul(n^a,2654435761),s=Math.imul(s^a,1597334677);return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507),s^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&s)+(n>>>0)},fo=(e,t)=>d1(e)%t;let f1=class{constructor(){this.messageElements={};const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const s=document.createElement("div"),o=Date.now();return s.className="message move-in",s.innerHTML=t,this.containerElement.appendChild(s),this.messageElements[o]=s,n>0&&setTimeout(()=>{this.close(o)},n),o}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else kt(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const cc=/#.*$/u,h1=e=>{const t=cc.exec(e);return t?t[0]:""},cr=e=>decodeURI(e).replace(cc,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),uc=(e,t)=>{if(!Cp(t))return!1;const n=cr(e.path),s=cr(t),o=h1(t);return o?o===e.hash&&(!s||n===s):n===s};var p1=e=>Object.prototype.toString.call(e)==="[object Object]",es=e=>typeof e=="string";const dc=Array.isArray,ur=e=>p1(e)&&es(e.name),ts=(e,t=!1)=>e?dc(e)?e.map(n=>es(n)?{name:n}:ur(n)?n:null).filter(n=>n!==null):es(e)?[{name:e}]:ur(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],fc=(e,t)=>{if(e){if(dc(e)&&e.every(es))return e;if(es(e))return[e];console.error(`Expect ${t} to be \`string[] | string | undefined\`, but got`,e)}return[]},hc=e=>fc(e,"category"),pc=e=>fc(e,"tag"),mc=()=>{const e=ve();return _(()=>e.value.readingTime??null)},gc=(e,t)=>{const{minutes:n,words:s}=e,{less1Minute:o,word:a,time:i}=t;return{time:n<1?o:i.replace("$time",Math.round(n).toString()),words:a.replace("$word",s.toString())}};var dr={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const fr={words:"",time:""},Xo=typeof dr>"u"?null:dr,vc=()=>Xo?hs(Xo):_(()=>null),m1=()=>{if(typeof Xo>"u")return _(()=>fr);const e=mc(),t=vc();return _(()=>e.value&&t.value?gc(e.value,t.value):fr)},Wt=()=>ec(),ie=()=>Om(),Vs=()=>null,g1="719px",v1="1440px",y1="false",yc={mobileBreakPoint:g1,pcBreakPoint:v1,enableThemeColor:y1},Fa={"/posts/backend":["开发示例","网络地址的使用","lombok","实体类说明","Mybatis的使用","MP的使用","MPJ的使用","PageHelper的使用"],"/posts/sql":[{text:"mysql",prefix:"mysql/",collapsible:!0,icon:"database",children:["json","时间"]},{text:"redis",prefix:"redis/",collapsible:!0,icon:"database",children:["操作命令","配置解析","redisConfig","常见命令"]}],"/posts/frontend":["开发示例","js遍历数组","js实现数据本地存储","json-server","vue2基本概念","若依vue2","小诺vue3","jeecgboot vue3","Vue VSCode Snippets插件",{text:"vue2",prefix:"vue2/",collapsible:!0,icon:"anchor",children:["vue概述","安装依赖"]}],"/posts/server":["宝塔面板","运维示例",{text:"centos",prefix:"centos/",collapsible:!0,icon:"server",children:["命令","部署war包","安装tomcat"]},{text:"ubuntu",prefix:"ubuntu/",collapsible:!0,icon:"server",children:["安装JDK","安装JAVA开发环境","安装nvm","软件安装路径说明","通过安装包安装软件","通过压缩包安装软件"]}],"/posts/other":["返回顶部（油猴脚本）"]},bc=e=>{const{icon:t="",color:n,size:s}=e,o=n||s?{}:null;return n&&(o.color=n),s&&(o.height=Number.isNaN(Number(s))?s:`${s}px`),Gt(t)?r("img",{class:"icon",src:t,alt:"","no-view":"",style:o}):ms(t)?r("img",{class:"icon",src:me(t),alt:"","aria-hidden":"","no-view":"",style:o}):r(rt("FontIcon"),e)};bc.displayName="HopeIcon";var Ne=bc;const b1="http://.",ln=()=>{const e=rn(),t=Tt();return n=>{if(n)if(ms(n))t.path!==n&&e.push(n);else if(ao(n))window&&window.open(n);else{const s=t.path.slice(0,t.path.lastIndexOf("/"));e.push(new URL(`${s}/${encodeURI(n)}`,b1).pathname)}}},wc=()=>{const e=ie(),t=ge();return _(()=>{const{author:n}=t.value;return n?ts(n):n===!1?[]:ts(e.value.author,!1)})},w1=()=>{const e=ge(),t=Ee(Symbol.for("categoryMap"));return _(()=>hc(e.value.category??e.value.categories).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},E1=()=>{const e=ge(),t=Ee(Symbol.for("tagMap"));return _(()=>pc(e.value.tag??e.value.tags).map(n=>{var s;return{name:n,path:((s=t==null?void 0:t.value.map[n])==null?void 0:s.path)??""}}))},_1=()=>{const e=ge(),t=ve();return _(()=>{const n=Oa(e.value.date);if(n)return n;const{createdTime:s}=t.value.git??{};return s?new Date(s):null})},k1=()=>{const e=ie(),t=ve(),n=ge(),s=wc(),o=w1(),a=E1(),i=_1(),l=mc(),c=m1(),u=_(()=>({author:s.value,category:o.value,date:i.value,localizedDate:t.value.localizedDate,tag:a.value,isOriginal:n.value.isOriginal??!1,readingTime:l.value,readingTimeLocale:c.value,pageview:"pageview"in n.value?n.value.pageview:!0})),d=_(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:u,items:d}},cn=()=>{const e=Wt();return _(()=>!!e.value.pure)},{mobileBreakPoint:A1,pcBreakPoint:T1}=yc,hr=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,ys=()=>{const e=te(!1),t=te(!1),n=()=>{e.value=window.innerWidth<=(hr(A1)??719),t.value=window.innerWidth>=(hr(T1)??1440)};return De("resize",n,!1),De("orientationchange",n,!1),Re(()=>{n()}),{isMobile:e,isPC:t}},Ec=Symbol(""),bs=()=>{const e=Ee(Ec);if(!e)throw new Error("useDarkmode() is called without provider.");return e},x1=e=>{const t=Wt(),n=em(),s=_(()=>t.value.darkmode??"switch"),o=Qp("vuepress-theme-hope-scheme","auto"),a=_(()=>{const l=s.value;return l==="disable"?!1:l==="enable"?!0:l==="auto"?n.value:l==="toggle"?o.value==="dark":o.value==="dark"||o.value==="auto"&&n.value}),i=_(()=>{const l=s.value;return l==="switch"||l==="toggle"});e.provide(Ec,{canToggle:i,config:s,isDarkmode:a,status:o}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>a.value}})},S1=()=>{const{config:e,isDarkmode:t,status:n}=bs();Vr(()=>{e.value==="disable"?n.value="light":e.value==="enable"?n.value="dark":e.value==="toggle"&&n.value==="auto"&&(n.value="light")}),Re(()=>{ue(t,s=>document.documentElement.setAttribute("data-theme",s?"dark":"light"),{immediate:!0})})},ns=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch,"u").test(e.path):uc(e,t.link)?!0:"children"in t&&!n?t.children.some(s=>ns(e,s)):!1,_c=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?_c(e,n):n.type==="page"&&ns(e,n,!0))||"prefix"in t&&uc(e,t.prefix):!1,Zo=e=>!oo(e)&&!ao(e);var Ue=(e=>(e.title="t",e.shortTitle="s",e.icon="i",e.index="I",e.order="O",e.breadcrumbExclude="b",e))(Ue||{}),He=(e=>(e.type="y",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e))(He||{}),kc=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(kc||{});const Ha=(e,t=!1,n)=>{const{meta:s,path:o,notFound:a}=Ip(e,n);return a?{text:o,link:o}:{text:!t&&s[Ue.shortTitle]?s[Ue.shortTitle]:s[Ue.title]||o,link:o,...s[Ue.icon]?{icon:s[Ue.icon]}:{}}},en=(e="",t="")=>ms(t)||ao(t)?t:`${kl(e)}${t}`,Qo=({config:e,prefix:t=""})=>{const n=(s,o=t)=>{const a=_e(s)?Ha(en(o,s)):s.link?{...s,...Zo(s.link)?{link:gt(en(o,s.link)).path}:{}}:s;if("children"in a){const i=en(o,a.prefix),l=a.children==="structure"?Fa[i]:a.children;return{type:"group",...a,prefix:i,children:l.map(c=>n(c,i))}}return{type:"page",...a}};return e.map(s=>n(s))},C1=({config:e,page:t,headerDepth:n})=>{const s=kt(e).sort((o,a)=>a.length-o.length);for(const o of s)if(Qn(decodeURI(t.path),o)){const a=e[o];return a?Qo({config:a==="structure"?Fa[o]:a,page:t,headerDepth:n,prefix:o}):[]}return console.warn(`${t.path} is missing sidebar config.`),[]},R1=({config:e,routeLocale:t,page:n,headerDepth:s})=>e==="structure"?Qo({config:Fa[t],page:n,headerDepth:s,prefix:t}):Yo(e)?Qo({config:e,page:n,headerDepth:s}):io(e)?C1({config:e,page:n,headerDepth:s}):[],Ac=Symbol(""),L1=()=>{const e=ge(),t=ie(),n=ve(),s=xt(),o=_(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),a=_(()=>e.value.headerDepth??t.value.headerDepth??2),i=zl(()=>[o.value,a.value,n.value.path,null],()=>R1({config:o.value,routeLocale:s.value,page:n.value,headerDepth:a.value}));lt(Ac,i)},za=()=>{const e=Ee(Ac);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var I1=j({name:"PageFooter",setup(){const e=Wt(),t=ie(),n=ge(),s=wc(),o=_(()=>{const{copyright:u,footer:d}=n.value;return d!==!1&&!!(u||d||t.value.displayFooter)}),a=_(()=>{const{footer:u}=n.value;return u??t.value.footer}),i=_(()=>s.value.map(({name:u})=>u).join(", ")),l=u=>`Copyright © ${new Date().getFullYear()} ${i.value} ${u?`${u} Licensed`:""}`,c=_(()=>{const{copyright:u,license:d=""}=n.value,{license:f}=e.value,{copyright:h}=t.value;return u??(d?l(d):_e(h)?h:i.value||f?l(f):!1)});return()=>o.value?r("footer",{class:"vp-footer-wrapper"},[a.value?r("div",{class:"vp-footer",innerHTML:a.value}):null,c.value?r("div",{class:"vp-copyright",innerHTML:c.value}):null]):null}}),qe=j({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:s}){const o=Tt(),a=Nl(),i=An(e,"config"),l=_(()=>Gt(i.value.link)),c=_(()=>!l.value&&ao(i.value.link)),u=_(()=>i.value.target??(l.value?"_blank":void 0)),d=_(()=>u.value==="_blank"),f=_(()=>!l.value&&!c.value&&!d.value),h=_(()=>i.value.rel??(d.value?"noopener noreferrer":"")),p=_(()=>i.value.ariaLabel??i.value.text),v=_(()=>{if(e.exact)return!1;const k=kt(a.value.locales);return k.length?k.every(b=>b!==i.value.link):i.value.link!=="/"}),E=_(()=>f.value?i.value.activeMatch?new RegExp(i.value.activeMatch,"u").test(o.path):v.value?Qn(o.path,i.value.link):o.path===i.value.link:!1);return()=>{const{before:k,after:b,default:A}=s,{text:y,icon:w,link:D}=i.value;return f.value?r(Ae,{to:D,"aria-label":p.value,...t,class:["nav-link",{active:E.value},t.class],onFocusout:()=>n("focusout")},()=>A?A():[k?k():r(Ne,{icon:w}),y,b==null?void 0:b()]):r("a",{href:D,rel:h.value,target:u.value,"aria-label":p.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},A?A():[k?k():r(Ne,{icon:w}),y,e.noExternalLinkIcon?null:r(Zl),b==null?void 0:b()])}}}),B1=j({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=ve(),s=An(e,"config"),o=_(()=>s.value.ariaLabel??s.value.text),a=te(!1);ue(()=>n.value.path,()=>{a.value=!1});const i=l=>{l.detail===0&&(a.value=!a.value)};return()=>{var l;return r("div",{class:["dropdown-wrapper",{open:a.value}]},[r("button",{type:"button",class:"dropdown-title","aria-label":o.value,onClick:i},[((l=t.title)==null?void 0:l.call(t))||r("span",{class:"title"},[r(Ne,{icon:s.value.icon}),e.config.text]),r("span",{class:"arrow"}),r("ul",{class:"nav-dropdown"},s.value.children.map((c,u)=>{const d=u===s.value.children.length-1;return r("li",{class:"dropdown-item"},"children"in c?[r("h4",{class:"dropdown-subtitle"},c.link?r(qe,{config:c,onFocusout:()=>{c.children.length===0&&d&&(a.value=!1)}}):r("span",c.text)),r("ul",{class:"dropdown-subitem-wrapper"},c.children.map((f,h)=>r("li",{class:"dropdown-subitem"},r(qe,{config:f,onFocusout:()=>{h===c.children.length-1&&d&&(a.value=!1)}}))))]:r(qe,{config:c,onFocusout:()=>{d&&(a.value=!1)}}))}))])])}}});const Tc=(e,t="")=>_e(e)?Ha(en(t,e)):"children"in e?{...e,...e.link&&Zo(e.link)?{link:gt(en(t,e.link)).path}:{},children:e.children.map(n=>Tc(n,en(t,e.prefix)))}:{...e,link:Zo(e.link)?gt(en(t,e.link)).path:e.link},xc=()=>{const e=ie(),t=()=>(e.value.navbar||[]).map(n=>Tc(n));return zl(()=>e.value.navbar,()=>t())},O1=()=>{const e=ie(),t=_(()=>e.value.repo),n=_(()=>t.value?c1(t.value):null),s=_(()=>t.value?Ma(t.value):null),o=_(()=>n.value?e.value.repoLabel??s.value??"Source":null);return _(()=>!n.value||!o.value||e.value.repoDisplay===!1?null:{type:s.value??"Source",label:o.value,link:n.value})};var P1=j({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=ve(),n=An(e,"config"),s=_(()=>n.value.ariaLabel??n.value.text),o=te(!1);ue(()=>t.value.path,()=>{o.value=!1});const a=(i,l)=>l[l.length-1]===i;return()=>[r("button",{type:"button",class:["nav-screen-dropdown-title",{active:o.value}],"aria-label":s.value,onClick:()=>{o.value=!o.value}},[r("span",{class:"title"},[r(Ne,{icon:n.value.icon}),e.config.text]),r("span",{class:["arrow",o.value?"down":"end"]})]),r("ul",{class:["nav-screen-dropdown",{hide:!o.value}]},n.value.children.map(i=>r("li",{class:"dropdown-item"},"children"in i?[r("h4",{class:"dropdown-subtitle"},i.link?r(qe,{config:i,onFocusout:()=>{a(i,n.value.children)&&i.children.length===0&&(o.value=!1)}}):r("span",i.text)),r("ul",{class:"dropdown-subitem-wrapper"},i.children.map(l=>r("li",{class:"dropdown-subitem"},r(qe,{config:l,onFocusout:()=>{a(l,i.children)&&a(i,n.value.children)&&(o.value=!1)}}))))]:r(qe,{config:i,onFocusout:()=>{a(i,n.value.children)&&(o.value=!1)}}))))]}}),D1=j({name:"NavScreenLinks",setup(){const e=xc();return()=>e.value.length?r("nav",{class:"nav-screen-links"},e.value.map(t=>r("div",{class:"navbar-links-item"},"children"in t?r(P1,{config:t}):r(qe,{config:t})))):null}});const Sc=()=>r(de,{name:"dark"},()=>r("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Sc.displayName="DarkIcon";const Cc=()=>r(de,{name:"light"},()=>r("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Cc.displayName="LightIcon";const Rc=()=>r(de,{name:"auto"},()=>r("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Rc.displayName="AutoIcon";const Lc=()=>r(de,{name:"enter-fullscreen"},()=>r("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Lc.displayName="EnterFullScreenIcon";const Ic=()=>r(de,{name:"cancel-fullscreen"},()=>r("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Ic.displayName="CancelFullScreenIcon";const Bc=()=>r(de,{name:"outlook"},()=>[r("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Bc.displayName="OutlookIcon";var Oc=j({name:"AppearanceSwitch",setup(){const{config:e,isDarkmode:t,status:n}=bs(),s=cn(),o=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},a=async i=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)||!i){o();return}const l=i.clientX,c=i.clientY,u=Math.hypot(Math.max(l,innerWidth-l),Math.max(c,innerHeight-c)),d=t.value;await document.startViewTransition(async()=>{o(),await qt()}).ready,t.value!==d&&document.documentElement.animate({clipPath:t.value?[`circle(${u}px at ${l}px ${c}px)`,`circle(0px at ${l}px ${c}px)`]:[`circle(0px at ${l}px ${c}px)`,`circle(${u}px at ${l}px ${c}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>r("button",{type:"button",id:"appearance-switch",onClick:a},[r(Rc,{style:{display:n.value==="auto"?"block":"none"}}),r(Sc,{style:{display:n.value==="dark"?"block":"none"}}),r(Cc,{style:{display:n.value==="light"?"block":"none"}})])}}),N1=j({name:"AppearanceMode",setup(){const e=ie(),{canToggle:t}=bs(),n=_(()=>e.value.outlookLocales.darkmode);return()=>t.value?r("div",{class:"appearance-wrapper"},[r("label",{class:"appearance-title",for:"appearance-switch"},n.value),r(Oc)]):null}});const Oo=yc.enableThemeColor==="true";var Pc=j({name:"ToggleFullScreenButton",setup(){const e=ie(),{isSupported:t,isFullscreen:n,toggle:s}=Da(),o=_(()=>e.value.outlookLocales.fullscreen);return()=>t?r("div",{class:"full-screen-wrapper"},[r("label",{class:"full-screen-title",for:"full-screen-switch"},o.value),r("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>s()},n.value?r(Ic):r(Lc))]):null}}),Dc=j({name:"OutlookSettings",setup(){const e=Wt(),t=cn(),n=_(()=>!t.value&&e.value.fullscreen);return()=>r(co,()=>[null,r(N1),n.value?r(Pc):null])}}),M1=j({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const s=ve(),{isMobile:o}=ys(),a=$e(),i=Wl(a);return Re(()=>{a.value=document.body,ue(o,l=>{!l&&e.show&&(i.value=!1,t("close"))}),ue(()=>s.value.path,()=>{i.value=!1,t("close")})}),Tn(()=>{i.value=!1}),()=>r($t,{name:"fade",onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>{var l,c;return e.show?r("div",{id:"nav-screen"},r("div",{class:"vp-nav-screen-container"},[(l=n.before)==null?void 0:l.call(n),r(D1),r("div",{class:"vp-outlook-wrapper"},r(Dc)),(c=n.after)==null?void 0:c.call(n)])):null})}}),F1=j({name:"NavbarBrand",setup(){const e=xt(),t=fs(),n=ie(),s=_(()=>n.value.home||e.value),o=_(()=>t.value.title),a=_(()=>n.value.navbarTitle??o.value),i=_(()=>n.value.logo?me(n.value.logo):null),l=_(()=>n.value.logoDark?me(n.value.logoDark):null);return()=>r(Ae,{to:s.value,class:"vp-brand"},()=>[i.value?r("img",{class:["vp-nav-logo",{light:!!l.value}],src:i.value,alt:""}):null,l.value?r("img",{class:["vp-nav-logo dark"],src:l.value,alt:""}):null,a.value?r("span",{class:["vp-site-name",{"hide-in-pad":i.value&&(n.value.hideSiteNameOnMobile??!0)}]},a.value):null])}}),H1=j({name:"NavbarLinks",setup(){const e=xc();return()=>e.value.length?r("nav",{class:"vp-nav-links"},e.value.map(t=>r("div",{class:"vp-nav-item hide-in-mobile"},"children"in t?r(B1,{config:t}):r(qe,{config:t})))):null}}),z1=j({name:"RepoLink",setup(){const e=O1();return()=>e.value?r("div",{class:"vp-nav-item vp-action"},r("a",{class:"vp-action-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},r(u1,{type:e.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Nc=({active:e=!1},{emit:t})=>r("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},r("span",[r("span",{class:"vp-top"}),r("span",{class:"vp-middle"}),r("span",{class:"vp-bottom"})]));Nc.displayName="ToggleNavbarButton";const ea=(e,{emit:t})=>r("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},r("span",{class:"icon"}));ea.displayName="ToggleSidebarButton",ea.emits=["toggle"];var $1=j({name:"OutlookButton",setup(){const{isSupported:e}=Da(),t=Wt(),n=cn(),s=ve(),{canToggle:o}=bs(),a=te(!1),i=_(()=>!n.value&&t.value.fullscreen&&e);return ue(()=>s.value.path,()=>{a.value=!1}),()=>o.value||i.value||Oo?r("div",{class:"vp-nav-item hide-in-mobile"},o.value&&!i.value&&!Oo?r(Oc):i.value&&!o.value&&!Oo?r(Pc):r("button",{type:"button",class:["outlook-button",{open:a.value}],tabindex:"-1","aria-hidden":!0},[r(Bc),r("div",{class:"outlook-dropdown"},r(Dc))])):null}}),j1=j({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const s=ie(),{isMobile:o}=ys(),a=te(!1),i=_(()=>{const{navbarAutoHide:d="mobile"}=s.value;return d!=="none"&&(d==="always"||o.value)}),l=_(()=>s.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),c={Brand:F1,Language:Vs,Links:H1,Repo:z1,Outlook:$1,Search:mt("Docsearch")?rt("Docsearch"):mt("SearchBox")?rt("SearchBox"):Vs},u=d=>c[d]??(mt(d)?rt(d):Vs);return()=>{var d,f,h,p,v,E,k,b,A;return[r("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":i.value}]},[r("div",{class:"vp-navbar-start"},[r(ea,{onToggle:()=>{a.value&&(a.value=!1),t("toggleSidebar")}}),(d=n.startBefore)==null?void 0:d.call(n),(f=l.value.start)==null?void 0:f.map(y=>r(u(y))),(h=n.startAfter)==null?void 0:h.call(n)]),r("div",{class:"vp-navbar-center"},[(p=n.centerBefore)==null?void 0:p.call(n),(v=l.value.center)==null?void 0:v.map(y=>r(u(y))),(E=n.centerAfter)==null?void 0:E.call(n)]),r("div",{class:"vp-navbar-end"},[(k=n.endBefore)==null?void 0:k.call(n),(b=l.value.end)==null?void 0:b.map(y=>r(u(y))),(A=n.endAfter)==null?void 0:A.call(n),r(Nc,{active:a.value,onToggle:()=>{a.value=!a.value}})])]),r(M1,{show:a.value,onClose:()=>{a.value=!1}},{before:()=>{var y;return(y=n.screenTop)==null?void 0:y.call(n)},after:()=>{var y;return(y=n.screenBottom)==null?void 0:y.call(n)}})]}}}),V1=j({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=Tt();return()=>_e(e.config.link)?r(qe,{class:["vp-sidebar-link","vp-sidebar-page",{active:ns(t,e.config,!0)}],exact:!0,config:e.config}):r("p",e,[r(Ne,{icon:e.config.icon}),e.config.text])}}),U1=j({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=Tt(),s=_(()=>ns(n,e.config)),o=_(()=>ns(n,e.config,!0));return()=>{const{collapsible:a,children:i=[],icon:l,prefix:c,link:u,text:d}=e.config;return r("section",{class:"vp-sidebar-group"},[r(a?"button":"p",{class:["vp-sidebar-header",{clickable:a||u,exact:o.value,active:s.value}],...a?{type:"button",onClick:()=>t("toggle"),onKeydown:f=>{f.key==="Enter"&&t("toggle")}}:{}},[r(Ne,{icon:l}),u?r(qe,{class:"vp-sidebar-title",config:{text:d,link:u},noExternalLinkIcon:!0}):r("span",{class:"vp-sidebar-title"},d),a?r("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!a?r(Mc,{key:c,config:i}):null])}}}),Mc=j({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=Tt(),n=te(-1),s=o=>{n.value=o===n.value?-1:o};return ue(()=>t.path,()=>{const o=e.config.findIndex(a=>_c(t,a));n.value=o},{immediate:!0,flush:"post"}),()=>r("ul",{class:"vp-sidebar-links"},e.config.map((o,a)=>r("li",o.type==="group"?r(U1,{config:o,open:a===n.value,onToggle:()=>s(a)}):r(V1,{config:o}))))}}),q1=j({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=Tt(),s=za(),o=$e();return Re(()=>{ue(()=>n.hash,a=>{const i=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${a}"]`);if(!i)return;const{top:l,height:c}=o.value.getBoundingClientRect(),{top:u,height:d}=i.getBoundingClientRect();u<l?i.scrollIntoView(!0):u+d>l+c&&i.scrollIntoView(!1)},{immediate:!0})}),()=>{var a,i,l;return r("aside",{ref:o,key:"sidebar",id:"sidebar",class:"vp-sidebar"},[(a=t.top)==null?void 0:a.call(t),((i=t.default)==null?void 0:i.call(t))??r(Mc,{config:s.value}),(l=t.bottom)==null?void 0:l.call(t)])}}}),$a=j({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=rn(),s=ge(),o=ie(),{isMobile:a,isPC:i}=ys(),[l,c]=Jo(!1),[u,d]=Jo(!1),f=za(),h=te(!1),p=_(()=>e.noNavbar||s.value.navbar===!1||o.value.navbar===!1?!1:!!(o.value.logo??o.value.repo??o.value.navbar)),v=_(()=>e.noSidebar?!1:s.value.sidebar!==!1&&f.value.length!==0&&!s.value.home),E=_(()=>!e.noToc&&!s.value.home&&(s.value.toc??o.value.toc??!0)),k={x:0,y:0},b=w=>{k.x=w.changedTouches[0].clientX,k.y=w.changedTouches[0].clientY},A=w=>{const D=w.changedTouches[0].clientX-k.x,B=w.changedTouches[0].clientY-k.y;Math.abs(D)>Math.abs(B)*1.5&&Math.abs(D)>40&&(D>0&&k.x<=80?c(!0):c(!1))};let y=0;return De("scroll",$p(()=>{const w=window.scrollY;w<=58||w<y?h.value=!1:y+200<w&&!l.value&&(h.value=!0),y=w},300,!0)),ue(a,w=>{w||c(!1)}),Re(()=>{const w=Wl(document.body);ue(l,B=>{w.value=B});const D=n.afterEach(()=>{c(!1)});Tn(()=>{w.value=!1,D()})}),()=>r(mt("GlobalEncrypt")?rt("GlobalEncrypt"):oc,()=>r("div",{class:["theme-container",{"no-navbar":!p.value,"no-sidebar":!v.value&&!t.sidebar&&!t.sidebarTop&&!t.sidebarBottom,"has-toc":E.value,"hide-navbar":h.value,"sidebar-collapsed":!a.value&&!i.value&&u.value,"sidebar-open":a.value&&l.value},e.containerClass,s.value.containerClass??""],onTouchStart:b,onTouchEnd:A},[p.value?r(j1,{onToggleSidebar:()=>c()},{startBefore:()=>{var w;return(w=t.navbarStartBefore)==null?void 0:w.call(t)},startAfter:()=>{var w;return(w=t.navbarStartAfter)==null?void 0:w.call(t)},centerBefore:()=>{var w;return(w=t.navbarCenterBefore)==null?void 0:w.call(t)},centerAfter:()=>{var w;return(w=t.navbarCenterAfter)==null?void 0:w.call(t)},endBefore:()=>{var w;return(w=t.navbarEndBefore)==null?void 0:w.call(t)},endAfter:()=>{var w;return(w=t.navbarEndAfter)==null?void 0:w.call(t)},screenTop:()=>{var w;return(w=t.navScreenTop)==null?void 0:w.call(t)},screenBottom:()=>{var w;return(w=t.navScreenBottom)==null?void 0:w.call(t)}}):null,r($t,{name:"fade"},()=>l.value?r("div",{class:"vp-sidebar-mask",onClick:()=>c(!1)}):null),r($t,{name:"fade"},()=>a.value?null:r("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},r("span",{class:["arrow",u.value?"end":"start"]}))),r(q1,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var w;return(w=t.sidebarTop)==null?void 0:w.call(t)},bottom:()=>{var w;return(w=t.sidebarBottom)==null?void 0:w.call(t)}}),t.default(),r(I1)]))}});const oe=j({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=o=>{o.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,o.style.transform="translateY(-20px)",o.style.opacity="0"},s=o=>{o.style.transform="translateY(0)",o.style.opacity="1"};return()=>{const o={name:"drop",appear:e.appear,onAppear:n,onAfterAppear:s,onEnter:n,onAfterEnter:s,onBeforeLeave:n},a=()=>t.default();return e.type==="group"?r(Kf,o,a):r($t,o,a)}}}),_n=({custom:e})=>r(Fl,{class:["theme-hope-content",{custom:e}]});_n.displayName="MarkdownContent",_n.props={custom:Boolean};const Fc=()=>r(de,{name:"author"},()=>r("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Fc.displayName="AuthorIcon";const Hc=()=>r(de,{name:"calendar"},()=>r("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));Hc.displayName="CalendarIcon";const zc=()=>r(de,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));zc.displayName="CategoryIcon";const $c=()=>r(de,{name:"print"},()=>r("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));$c.displayName="PrintIcon";const jc=()=>r(de,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));jc.displayName="TagIcon";const Vc=()=>r(de,{name:"timer"},()=>r("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Vc.displayName="TimerIcon";const Uc=()=>r(de,{name:"word"},()=>[r("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),r("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Uc.displayName="WordIcon";const Kt=()=>{const e=ie();return _(()=>e.value.metaLocales)};var G1=j({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=Kt();return()=>e.author.length?r("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(Fc),r("span",e.author.map(n=>n.url?r("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):r("span",{class:"page-author-item"},n.name))),r("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),W1=j({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=Kt(),n=ln();return()=>e.category.length?r("span",{class:"page-category-info","aria-label":`${t.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(zc),e.category.map(({name:s,path:o})=>r("span",{class:["page-category-item",{[`category${fo(s,9)}`]:!e.pure,clickable:o}],role:o?"navigation":"",onClick:()=>{o&&n(o)}},s)),r("meta",{property:"articleSection",content:e.category.map(({name:s})=>s).join(",")})]):null}}),K1=j({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=Dl(),n=Kt();return()=>e.date?r("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(Hc),r("span",r(co,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),r("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),Y1=j({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=Kt();return()=>e.isOriginal?r("span",{class:"page-original-info"},t.value.origin):null}}),J1=j({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Kt(),n=_(()=>{if(!e.readingTime)return null;const{minutes:s}=e.readingTime;return s<1?"PT1M":`PT${Math.round(s)}M`});return()=>{var s,o;return(s=e.readingTimeLocale)!=null&&s.time?r("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(Vc),r("span",(o=e.readingTimeLocale)==null?void 0:o.time),r("meta",{property:"timeRequired",content:n.value})]):null}}}),X1=j({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=Kt(),n=ln();return()=>e.tag.length?r("span",{class:"page-tag-info","aria-label":`${t.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(jc),e.tag.map(({name:s,path:o})=>r("span",{class:["page-tag-item",{[`tag${fo(s,9)}`]:!e.pure,clickable:o}],role:o?"navigation":"",onClick:()=>{o&&n(o)}},s)),r("meta",{property:"keywords",content:e.tag.map(({name:s})=>s).join(",")})]):null}}),Z1=j({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=Kt();return()=>{var n,s,o;return(n=e.readingTimeLocale)!=null&&n.words?r("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"up"}},[r(Uc),r("span",(s=e.readingTimeLocale)==null?void 0:s.words),r("meta",{property:"wordCount",content:(o=e.readingTime)==null?void 0:o.words})]):null}}}),qc=j({name:"PageInfo",components:{AuthorInfo:G1,CategoryInfo:W1,DateInfo:K1,OriginalInfo:Y1,PageViewInfo:Vs,ReadingTimeInfo:J1,TagInfo:X1,WordInfo:Z1},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=cn();return()=>e.items?r("div",{class:"page-info"},e.items.map(n=>r(rt(`${n}Info`),{...e.info,pure:t.value}))):null}}),Q1=j({name:"PrintButton",setup(){const e=Wt(),t=ie();return()=>e.value.print===!1?null:r("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},r($c))}}),Gc=j({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=Tt(),s=ve(),o=Kt(),[a,i]=Jo(),l=$e(),c=te("-1.7rem"),u=f=>{var h;(h=l.value)==null||h.scrollTo({top:f,behavior:"smooth"})},d=()=>{if(l.value){const f=document.querySelector(".vp-toc-item.active");f?c.value=`${f.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:c.value="-1.7rem"}else c.value="-1.7rem"};return Re(()=>{ue(()=>n.hash,f=>{if(l.value){const h=document.querySelector(`#toc a.toc-link[href$="${f}"]`);if(!h)return;const{top:p,height:v}=l.value.getBoundingClientRect(),{top:E,height:k}=h.getBoundingClientRect();E<p?u(l.value.scrollTop+E-p):E+k>p+v&&u(l.value.scrollTop+E+k-p-v)}}),ue(()=>n.fullPath,d,{flush:"post",immediate:!0})}),()=>{var v,E;const f=({title:k,level:b,slug:A})=>r(Ae,{to:`#${A}`,class:["vp-toc-link",`level${b}`],onClick:()=>{i()}},()=>k),h=(k,b)=>k.length&&b>0?r("ul",{class:"vp-toc-list"},k.map(A=>{const y=h(A.children,b-1);return[r("li",{class:["vp-toc-item",{active:n.hash===`#${A.slug}`}]},f(A)),y?r("li",y):null]})):null,p=e.items.length?h(e.items,e.headerDepth):s.value.headers?h(s.value.headers,e.headerDepth):null;return p?r("div",{class:"vp-toc-placeholder"},[r("aside",{id:"toc"},[(v=t.before)==null?void 0:v.call(t),r("div",{class:"vp-toc-header",onClick:()=>{i()}},[o.value.toc,r(Q1),r("div",{class:["arrow",a.value?"down":"end"]})]),r("div",{class:["vp-toc-wrapper",a.value?"open":""],ref:l},[p,r("div",{class:"vp-toc-marker",style:{top:c.value}})]),(E=t.after)==null?void 0:E.call(t)])]):null}}}),ja=j({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=ve(),n=ie(),s=$e(),o=({target:a})=>{const i=document.querySelector(a.hash);if(i){const l=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",l)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",l),i.focus(),window.scrollTo(0,0)}};return Re(()=>{ue(()=>t.value.path,()=>s.value.focus())}),()=>[r("span",{ref:s,tabindex:"-1"}),r("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:o},n.value.routeLocales.skipToContent)]}});let Po=null,Ln=null;const ta={wait:()=>Po,pending:()=>{Po=new Promise(e=>{Ln=e})},resolve:()=>{Ln==null||Ln(),Po=null,Ln=null}},Wc=(e,{slots:t})=>r($t,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:ta.resolve,onBeforeLeave:ta.pending},()=>{var n;return(n=t.default)==null?void 0:n.call(t)});Wc.displayName="FadeSlideY";const e0=(e,t)=>{const n=e.replace(t,"/").split("/"),s=[];let o=Ra(t);return n.forEach((a,i)=>{i!==n.length-1?(o+=`${a}/`,s.push({link:o,name:a||"Home"})):a!==""&&(o+=a,s.push({link:o,name:a}))}),s},na=(e,{slots:t})=>{var f,h;const{bgImage:n,bgImageDark:s,bgImageStyle:o,color:a,description:i,image:l,imageDark:c,header:u,features:d=[]}=e;return r("div",{class:"vp-feature-wrapper"},[n?r("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${n})`},o]}):null,s?r("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},o]}):null,r("div",{class:"vp-feature",style:a?{color:a}:{}},[((f=t.image)==null?void 0:f.call(t,e))??[l?r("img",{class:["vp-feature-image",{light:c}],src:me(l),alt:""}):null,c?r("img",{class:"vp-feature-image dark",src:me(c),alt:""}):null],((h=t.info)==null?void 0:h.call(t,e))??[u?r("h2",{class:"vp-feature-header"},u):null,i?r("p",{class:"vp-feature-description",innerHTML:i}):null],d.length?r("div",{class:"vp-features"},d.map(({icon:p,title:v,details:E,link:k})=>{const b=[r("h3",{class:"vp-feature-title"},[r(Ne,{icon:p}),r("span",{innerHTML:v})]),r("p",{class:"vp-feature-details",innerHTML:E})];return k?oo(k)?r("a",{class:"vp-feature-item link",href:k,"aria-label":v,target:"_blank"},b):r(Ae,{class:"vp-feature-item link",to:k,"aria-label":v},()=>b):r("div",{class:"vp-feature-item"},b)})):null])])};na.displayName="FeaturePanel";var t0=j({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=ge(),s=fs(),o=_(()=>n.value.heroFullScreen??!1),a=_(()=>{const{heroText:u,tagline:d}=n.value;return{text:u??s.value.title??"Hello",tagline:d??s.value.description??"",isFullScreen:o.value}}),i=_(()=>{const{heroText:u,heroImage:d,heroImageDark:f,heroAlt:h,heroImageStyle:p}=n.value;return{image:d?me(d):null,imageDark:f?me(f):null,imageStyle:p,alt:h??u??"",isFullScreen:o.value}}),l=_(()=>{const{bgImage:u,bgImageDark:d,bgImageStyle:f}=n.value;return{image:_e(u)?me(u):null,imageDark:_e(d)?me(d):null,bgStyle:f,isFullScreen:o.value}}),c=_(()=>n.value.actions??[]);return()=>{var u,d,f;return r("header",{class:["vp-hero-info-wrapper",{fullscreen:o.value}]},[((u=t.bg)==null?void 0:u.call(t,l.value))??[l.value.image?r("div",{class:["vp-hero-mask",{light:l.value.imageDark}],style:[{"background-image":`url(${l.value.image})`},l.value.bgStyle]}):null,l.value.imageDark?r("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${l.value.imageDark})`},l.value.bgStyle]}):null],r("div",{class:"vp-hero-info"},[((d=t.logo)==null?void 0:d.call(t,i.value))??r(oe,{appear:!0,type:"group"},()=>{const{image:h,imageDark:p,imageStyle:v,alt:E}=i.value;return[h?r("img",{key:"light",class:["vp-hero-image",{light:p}],style:v,src:h,alt:E}):null,p?r("img",{key:"dark",class:"vp-hero-image dark",style:v,src:p,alt:E}):null]}),((f=t.info)==null?void 0:f.call(t,a.value))??r("div",{class:"vp-hero-infos"},[a.value.text?r(oe,{appear:!0,delay:.04},()=>r("h1",{id:"main-title"},a.value.text)):null,a.value.tagline?r(oe,{appear:!0,delay:.08},()=>r("p",{id:"main-description",innerHTML:a.value.tagline})):null,c.value.length?r(oe,{appear:!0,delay:.12},()=>r("p",{class:"vp-hero-actions"},c.value.map(h=>r(qe,{class:["vp-hero-action",h.type??"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>r(Ne,{icon:h.icon})}:{})))):null])])])}}});const Kc=(e,{slots:t})=>{var h,p,v;const{bgImage:n,bgImageDark:s,bgImageStyle:o,color:a,description:i,image:l,imageDark:c,header:u,highlights:d=[],type:f="un-order"}=e;return r("div",{class:"vp-highlight-wrapper",style:a?{color:a}:{}},[n?r("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${n})`},o]}):null,s?r("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},o]}):null,r("div",{class:"vp-highlight"},[((h=t.image)==null?void 0:h.call(t,e))??[l?r("img",{class:["vp-highlight-image",{light:c}],src:me(l),alt:""}):null,c?r("img",{class:"vp-highlight-image dark",src:me(c),alt:""}):null],((p=t.info)==null?void 0:p.call(t,e))??[r("div",{class:"vp-highlight-info-wrapper"},r("div",{class:"vp-highlight-info"},[u?r("h2",{class:"vp-highlight-header",innerHTML:u}):null,i?r("p",{class:"vp-highlight-description",innerHTML:i}):null,((v=t.highlights)==null?void 0:v.call(t,d))??r(f==="order"?"ol":f==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:E,title:k,details:b,link:A})=>{const y=[r(f==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[E?r(Ne,{class:"vp-highlight-icon",icon:E}):null,r("span",{innerHTML:k})]),b?r(f==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return r(f==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:A}]},A?oo(A)?r("a",{class:"vp-highlight-item link",href:A,"aria-label":k,target:"_blank"},y):r(Ae,{class:"vp-highlight-item link",to:A,"aria-label":k},()=>y):r("div",{class:"vp-highlight-item"},y))}))]))]])])};Kc.displayName="HighlightPanel";var n0=j({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=cn(),s=ge(),o=_(()=>{const{features:i}=s.value;return Yo(i)?i:null}),a=_(()=>{const{highlights:i}=s.value;return Yo(i)?i:null});return()=>{var i,l,c,u;return r("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":s.value.heroText===null?"":"main-title"},[(i=t.top)==null?void 0:i.call(t),r(t0),((l=a.value)==null?void 0:l.map(d=>"features"in d?r(na,d):r(Kc,d)))??(o.value?r(oe,{appear:!0,delay:.24},()=>r(na,{features:o.value})):null),(c=t.center)==null?void 0:c.call(t),r(oe,{appear:!0,delay:.32},()=>r(_n)),(u=t.bottom)==null?void 0:u.call(t)])}}}),s0=j({name:"BreadCrumb",setup(){const e=ve(),t=xt(),n=ge(),s=ie(),o=$e([]),a=_(()=>(n.value.breadcrumb??s.value.breadcrumb??!0)&&o.value.length>1),i=_(()=>n.value.breadcrumbIcon??s.value.breadcrumbIcon??!0),l=()=>{const c=e0(e.value.path,t.value).map(({link:u,name:d})=>{const{path:f,meta:h,notFound:p}=gt(u);return p||h[Ue.breadcrumbExclude]?null:{title:h[Ue.shortTitle]||h[Ue.title]||d,icon:h[Ue.icon],path:f}}).filter(u=>u!==null);c.length>1&&(o.value=c)};return Re(()=>{ue(()=>e.value.path,l,{immediate:!0})}),()=>r("nav",{class:["vp-breadcrumb",{disable:!a.value}]},a.value?r("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},o.value.map((c,u)=>r("li",{class:{"is-active":o.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[r(Ae,{to:c.path,property:"item",typeof:"WebPage"},()=>[i.value?r(Ne,{icon:c.icon}):null,r("span",{property:"name"},c.title||"Unknown")]),r("meta",{property:"position",content:u+1})]))):[])}});const pr=(e,t)=>e===!1||io(e)?e:_e(e)?Ha(e,!0,t):null,sa=(e,t,n)=>{const s=e.findIndex(o=>o.link===t);if(s!==-1){const o=e[s+n];return o!=null&&o.link?o:null}for(const o of e)if("children"in o){const a=sa(o.children,t,n);if(a)return a}return null};var o0=j({name:"PageNav",setup(){const e=ie(),t=ge(),n=za(),s=ve(),o=ln(),a=Tt(),i=_(()=>{const c=pr(t.value.prev,a.path);return c===!1?null:c||(e.value.prevLink===!1?null:sa(n.value,s.value.path,-1))}),l=_(()=>{const c=pr(t.value.next,a.path);return c===!1?null:c||(e.value.nextLink===!1?null:sa(n.value,s.value.path,1))});return De("keydown",c=>{c.altKey&&(c.key==="ArrowRight"?l.value&&(o(l.value.link),c.preventDefault()):c.key==="ArrowLeft"&&i.value&&(o(i.value.link),c.preventDefault()))}),()=>i.value||l.value?r("nav",{class:"vp-page-nav"},[i.value?r(qe,{class:"prev",config:i.value},()=>{var c,u;return[r("div",{class:"hint"},[r("span",{class:"arrow start"}),e.value.metaLocales.prev]),r("div",{class:"link"},[r(Ne,{icon:(c=i.value)==null?void 0:c.icon}),(u=i.value)==null?void 0:u.text])]}):null,l.value?r(qe,{class:"next",config:l.value},()=>{var c,u;return[r("div",{class:"hint"},[e.value.metaLocales.next,r("span",{class:"arrow end"})]),r("div",{class:"link"},[(c=l.value)==null?void 0:c.text,r(Ne,{icon:(u=l.value)==null?void 0:u.icon})])]}):null]):null}});const a0=()=>{const e=ie(),t=ve(),n=ge();return _(()=>{var s;return n.value.contributors??e.value.contributors??!0?((s=t.value.git)==null?void 0:s.contributors)??null:null})},i0={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},r0=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:s,editLinkPattern:o})=>{if(!s)return null;const a=Ma(e);let i;return o?i=o:a!==null&&(i=i0[a]),i?i.replace(/:repo/u,Gt(e)?e:`https://github.com/${e}`).replace(/:branch/u,t).replace(/:path/u,Al(`${Ra(n)}/${s}`)):null},l0=()=>{const e=ie(),t=ve(),n=ge();return _(()=>{const{repo:s,docsRepo:o=s,docsBranch:a="main",docsDir:i="",editLink:l,editLinkPattern:c=""}=e.value;if(!(n.value.editLink??l??!0)||!o)return null;const u=r0({docsRepo:o,docsBranch:a,docsDir:i,editLinkPattern:c,filePathRelative:t.value.filePathRelative});return u?{text:e.value.metaLocales.editLink,link:u}:null})},c0=()=>{const e=fs(),t=ie(),n=ve(),s=ge();return _(()=>{var o,a;return!(s.value.lastUpdated??t.value.lastUpdated??!0)||!((o=n.value.git)!=null&&o.updatedTime)?null:new Date((a=n.value.git)==null?void 0:a.updatedTime).toLocaleString(e.value.lang)})};var u0=j({name:"PageTitle",setup(){const e=ve(),t=ge(),n=ie(),{info:s,items:o}=k1();return()=>r("div",{class:"vp-page-title"},[r("h1",[n.value.titleIcon===!1?null:r(Ne,{icon:t.value.icon}),e.value.title]),r(qc,{info:s.value,...o.value===null?{}:{items:o.value}}),r("hr")])}});const Yc=()=>r(de,{name:"edit"},()=>[r("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),r("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Yc.displayName="EditIcon";var d0=j({name:"PageMeta",setup(){const e=ie(),t=l0(),n=c0(),s=a0();return()=>{var a;const{metaLocales:o}=e.value;return r("footer",{class:"vp-page-meta"},[t.value?r("div",{class:"vp-meta-item edit-link"},r(qe,{class:"vp-meta-label",config:t.value},{before:()=>r(Yc)})):null,r("div",{class:"vp-meta-item git-info"},[n.value?r("div",{class:"update-time"},[r("span",{class:"vp-meta-label"},`${o.lastUpdated}: `),r(co,()=>r("span",{class:"vp-meta-info"},n.value))]):null,(a=s.value)!=null&&a.length?r("div",{class:"contributors"},[r("span",{class:"vp-meta-label"},`${o.contributors}: `),s.value.map(({email:i,name:l},c)=>[r("span",{class:"vp-meta-info",title:`email: ${i}`},l),c!==s.value.length-1?",":""])]):null])])}}}),f0=j({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=ge(),{isDarkmode:s}=bs(),o=ie(),a=_(()=>n.value.toc??o.value.toc??!0);return()=>r("main",{id:"main-content",class:"vp-page"},r(mt("LocalEncrypt")?rt("LocalEncrypt"):oc,()=>{var i,l,c,u;return[(i=t.top)==null?void 0:i.call(t),n.value.cover?r("div",{class:"page-cover"},r("img",{src:me(n.value.cover),alt:"","no-view":""})):null,r(s0),r(u0),a.value?r(Gc,{headerDepth:n.value.headerDepth??o.value.headerDepth??2},{before:()=>{var d;return(d=t.tocBefore)==null?void 0:d.call(t)},after:()=>{var d;return(d=t.tocAfter)==null?void 0:d.call(t)}}):null,(l=t.contentBefore)==null?void 0:l.call(t),r(_n),(c=t.contentAfter)==null?void 0:c.call(t),r(d0),r(o0),mt("CommentService")?r(rt("CommentService"),{darkmode:s.value}):null,(u=t.bottom)==null?void 0:u.call(t)]}))}}),h0=j({name:"Layout",slots:Object,setup(e,{slots:t}){const n=Wt(),s=ie(),o=ve(),a=ge(),{isMobile:i}=ys(),l=_(()=>{var c,u;return((c=s.value.blog)==null?void 0:c.sidebarDisplay)??((u=n.value.blog)==null?void 0:u.sidebarDisplay)??"mobile"});return()=>[r(ja),r($a,{},{default:()=>{var c;return((c=t.default)==null?void 0:c.call(t))??(a.value.home?r(n0):r(Wc,()=>r(f0,{key:o.value.path},{top:()=>{var u;return(u=t.top)==null?void 0:u.call(t)},bottom:()=>{var u;return(u=t.bottom)==null?void 0:u.call(t)},contentBefore:()=>{var u;return(u=t.contentBefore)==null?void 0:u.call(t)},contentAfter:()=>{var u;return(u=t.contentAfter)==null?void 0:u.call(t)},tocBefore:()=>{var u;return(u=t.tocBefore)==null?void 0:u.call(t)},tocAfter:()=>{var u;return(u=t.tocAfter)==null?void 0:u.call(t)}})))},...l.value==="none"?{}:{navScreenBottom:()=>r(rt("BloggerInfo"))},...!i.value&&l.value==="always"?{sidebar:()=>r(rt("BloggerInfo"))}:{}})]}}),p0=j({name:"NotFoundHint",setup(){const e=ie(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>r("div",{class:"not-found-hint"},[r("p",{class:"error-code"},"404"),r("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),r("p",{class:"error-hint"},t())])}}),m0=j({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=rn(),s=xt(),o=ie();return()=>[r(ja),r($a,{noSidebar:!0},()=>{var a;return r("main",{id:"main-content",class:"vp-page not-found"},((a=t.default)==null?void 0:a.call(t))??[r(p0),r("div",{class:"actions"},[r("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},o.value.routeLocales.back),r("button",{type:"button",class:"action-button",onClick:()=>{n.push(o.value.home??s.value)}},o.value.routeLocales.home)])])})]}});const g0={Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},v0={category:{"/":{path:"/category/",map:{后端:{path:"/category/%E5%90%8E%E7%AB%AF/",indexes:[0,1,2,3,4,5,6,7]},前端:{path:"/category/%E5%89%8D%E7%AB%AF/",indexes:[8,9,10,11,12,13,14,15,16]},其他:{path:"/category/%E5%85%B6%E4%BB%96/",indexes:[17]},服务器:{path:"/category/%E6%9C%8D%E5%8A%A1%E5%99%A8/",indexes:[18,19,20,21,22]},vue2:{path:"/category/vue2/",indexes:[23,24]},软件安装:{path:"/category/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",indexes:[25,26,27,28,29,30]},mysql:{path:"/category/mysql/",indexes:[31,32]},redis:{path:"/category/redis/",indexes:[33,34,35,36]}}}},tag:{"/":{path:"/tag/",map:{框架:{path:"/tag/%E6%A1%86%E6%9E%B6/",indexes:[0,1,2,3]},开发示例:{path:"/tag/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B/",indexes:[8,11,12,15,4,6,7]},基础概念:{path:"/tag/%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/",indexes:[13,5]},ide插件:{path:"/tag/ide%E6%8F%92%E4%BB%B6/",indexes:[9]},开发平台:{path:"/tag/%E5%BC%80%E5%8F%91%E5%B9%B3%E5%8F%B0/",indexes:[10,14,16]},脚本:{path:"/tag/%E8%84%9A%E6%9C%AC/",indexes:[17]},linux命令:{path:"/tag/linux%E5%91%BD%E4%BB%A4/",indexes:[20]},运维示例:{path:"/tag/%E8%BF%90%E7%BB%B4%E7%A4%BA%E4%BE%8B/",indexes:[21]},学习笔记:{path:"/tag/%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/",indexes:[23,24]},centos:{path:"/tag/centos/",indexes:[18,19,22]},java软件安装:{path:"/tag/java%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",indexes:[25,26]},web软件安装:{path:"/tag/web%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",indexes:[27]},ubuntu软件安装:{path:"/tag/ubuntu%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85/",indexes:[28,29,30]},数据库语法:{path:"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%AF%AD%E6%B3%95/",indexes:[31,32]},redis配置:{path:"/tag/redis%E9%85%8D%E7%BD%AE/",indexes:[34,36]},redis操作:{path:"/tag/redis%E6%93%8D%E4%BD%9C/",indexes:[33,35]}}}}},Jc=["/posts/backend/Mybatis%E7%9A%84%E4%BD%BF%E7%94%A8.html","/posts/backend/MPJ%E7%9A%84%E4%BD%BF%E7%94%A8.html","/posts/backend/MP%E7%9A%84%E4%BD%BF%E7%94%A8.html","/posts/backend/PageHelper%E7%9A%84%E4%BD%BF%E7%94%A8.html","/posts/backend/lombok.html","/posts/backend/%E5%AE%9E%E4%BD%93%E7%B1%BB%E8%AF%B4%E6%98%8E.html","/posts/backend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html","/posts/backend/%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E7%9A%84%E4%BD%BF%E7%94%A8.html","/posts/frontend/json-server.html","/posts/frontend/Vue%20VSCode%20Snippets%E6%8F%92%E4%BB%B6.html","/posts/frontend/jeecgboot%20vue3.html","/posts/frontend/js%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E6%9C%AC%E5%9C%B0%E5%AD%98%E5%82%A8.html","/posts/frontend/js%E9%81%8D%E5%8E%86%E6%95%B0%E7%BB%84.html","/posts/frontend/vue2%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html","/posts/frontend/%E5%B0%8F%E8%AF%BAvue3.html","/posts/frontend/%E5%BC%80%E5%8F%91%E7%A4%BA%E4%BE%8B.html","/posts/frontend/%E8%8B%A5%E4%BE%9Dvue2.html","/posts/other/%E8%BF%94%E5%9B%9E%E9%A1%B6%E9%83%A8%EF%BC%88%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%EF%BC%89.html","/posts/server/centos/%E5%AE%89%E8%A3%85tomcat.html","/posts/server/centos/%E9%83%A8%E7%BD%B2war%E5%8C%85.html","/posts/server/%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF.html","/posts/server/%E8%BF%90%E7%BB%B4%E7%A4%BA%E4%BE%8B.html","/posts/server/centos/%E5%91%BD%E4%BB%A4.html","/posts/frontend/vue2/vue%E6%A6%82%E8%BF%B0.html","/posts/frontend/vue2/%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96.html","/posts/server/ubuntu/%E5%AE%89%E8%A3%85JDK.html","/posts/server/ubuntu/%E5%AE%89%E8%A3%85JAVA%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html","/posts/server/ubuntu/%E5%AE%89%E8%A3%85nvm.html","/posts/server/ubuntu/%E8%BD%AF%E4%BB%B6%E5%AE%89%E8%A3%85%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E.html","/posts/server/ubuntu/%E9%80%9A%E8%BF%87%E5%8E%8B%E7%BC%A9%E5%8C%85%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html","/posts/server/ubuntu/%E9%80%9A%E8%BF%87%E5%AE%89%E8%A3%85%E5%8C%85%E5%AE%89%E8%A3%85%E8%BD%AF%E4%BB%B6.html","/posts/sql/mysql/json.html","/posts/sql/mysql/%E6%97%B6%E9%97%B4.html","/posts/sql/redis/%E5%B8%B8%E8%A7%81%E5%91%BD%E4%BB%A4.html","/posts/sql/redis/redisConfig.html","/posts/sql/redis/%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4.html","/posts/sql/redis/%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.html"],oa=$e(v0);an(oa);const Xc=e=>{const t=ve(),n=ge(),s=xt();return _(()=>{var l;const o=e??((l=n.value.blog)==null?void 0:l.key)??"";if(!o)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!oa.value[o])throw new Error(`useBlogCategory: key ${o} is invalid`);const a=oa.value[o][s.value],i={path:a.path,map:{}};for(const c in a.map){const u=a.map[c];i.map[c]={path:u.path,items:[]};for(const d of u.indexes){const{path:f,meta:h}=gt(Jc[d]);i.map[c].items.push({path:f,info:h})}t.value.path===u.path&&(i.currentItems=i.map[c].items)}return i})},y0={article:{"/":{path:"/article/",indexes:[25,33,18,19,34,35,36,0,8,17,20,21,23,24,22,31,32,9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,26,27,28,29,30]}},star:{"/":{path:"/star/",indexes:[25,26]}},timeline:{"/":{path:"/timeline/",indexes:[25,33,18,19,34,35,36,0,8,17,20,21,23,24,22,31,32,9,10,11,12,13,14,15,16,1,2,3,4,5,6,7,26,27,28,29,30]}}},aa=$e(y0);an(aa);const ho=e=>{const t=ge(),n=xt();return _(()=>{var i;const s=e??((i=t.value.blog)==null?void 0:i.key)??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!aa.value[s])throw new Error(`useBlogType: key ${e} is invalid`);const o=aa.value[s][n.value],a={path:o.path,items:[]};for(const l of o.indexes){const{path:c,meta:u}=gt(Jc[l]);a.items.push({path:c,info:u})}return a})},Zc=()=>r(de,{name:"lock"},()=>r("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Zc.displayName="LockIcon";var b0=[];const Qc=Symbol(""),Va=()=>{const e=Ee(Qc);if(!e)throw new Error("useTimeline() is called without provider.");return e},w0=()=>{const e=ho("timeline"),t=_(()=>{const n=[];return e.value.items.forEach(({info:s,path:o})=>{const a=Oa(s[He.date]);if(a){const i=a.getFullYear(),l=a.getMonth()+1,c=a.getDate();(!n[0]||n[0].year!==i)&&n.unshift({year:i,items:[]}),n[0].items.push({date:`${l}/${c}`,info:s,path:o})}}),{...e.value,config:n.reverse()}});lt(Qc,t)},eu=Symbol(""),ws=()=>{const e=Ee(eu);if(!e)throw new Error("useArticles() is called without provider.");return e},E0=()=>{const e=ho("article");lt(eu,e)},tu=Symbol.for("categoryMap"),Es=()=>{const e=Ee(tu);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},_0=()=>{const e=Xc("category");lt(tu,e)},nu=Symbol(""),Ua=()=>{const e=Ee(nu);if(!e)throw new Error("useStars() is called without provider.");return e},k0=()=>{const e=ho("star");lt(nu,e)},su=Symbol.for("tagMap"),_s=()=>{const e=Ee(su);if(!e)throw new Error("useTagMap() is called without provider.");return e},A0=()=>{const e=Xc("tag");lt(su,e)},T0=()=>{E0(),_0(),k0(),A0(),w0()},ks=()=>{const e=Wt(),t=ie();return _(()=>({...e.value.blog,...t.value.blog}))},x0=e=>{const t=ie();return _(()=>{const{[He.author]:n}=e.value;return n?ts(n):n===!1?[]:ts(t.value.author,!1)})},S0=e=>{const t=Es();return _(()=>hc(e.value[He.category]).map(n=>({name:n,path:t.value.map[n].path})))},C0=e=>{const t=_s();return _(()=>pc(e.value[He.tag]).map(n=>({name:n,path:t.value.map[n].path})))},R0=e=>_(()=>{const{[He.date]:t}=e.value;return Oa(t)}),L0=e=>{const t=An(e,"info"),n=ks(),s=x0(t),o=S0(t),a=C0(t),i=R0(t),l=vc(),c=_(()=>({author:s.value,category:o.value,date:i.value,localizedDate:t.value[He.localizedDate]??"",tag:a.value,isOriginal:t.value[He.isOriginal]??!1,readingTime:t.value[He.readingTime]??null,readingTimeLocale:t.value[He.readingTime]&&l.value?gc(t.value[He.readingTime],l.value):null,pageview:e.path})),u=_(()=>n.value.articleInfo);return{info:c,items:u}},I0=()=>{const e=ie();return _(()=>e.value.author)};var ou=j({name:"SocialMedia",setup(){const e=ks(),t=cn(),n=_(()=>ps(e.value.medias??{}).map(([s,o])=>({name:s,icon:g0[s],url:o})));return()=>n.value.length?r("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:o,url:a})=>r("a",{class:"vp-social-media",href:a,rel:"noopener noreferrer",target:"_blank","aria-label":s||"",...t.value?{}:{"data-balloon-pos":"up"},innerHTML:o}))):null}}),qa=j({name:"BloggerInfo",setup(){const e=ks(),t=fs(),n=ie(),s=ws(),o=Es(),a=_s(),i=Va(),l=ln(),c=_(()=>{var h;return e.value.name??((h=ts(n.value.author)[0])==null?void 0:h.name)??t.value.title}),u=_(()=>e.value.avatar??n.value.logo),d=_(()=>n.value.blogLocales),f=_(()=>e.value.intro);return()=>{const{article:h,category:p,tag:v,timeline:E}=d.value,k=[[s.value.path,s.value.items.length,h],[o.value.path,kt(o.value.map).length,p],[a.value.path,kt(a.value.map).length,v],[i.value.path,i.value.items.length,E]];return r("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[r("div",{class:"vp-blogger",...f.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>l(f.value)}:{}},[u.value?r("img",{class:"vp-blogger-avatar",src:me(u.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,c.value?r("div",{class:"vp-blogger-name",property:"name"},c.value):null,e.value.description?r("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,f.value?r("meta",{property:"url",content:me(f.value)}):null]),r("div",{class:"vp-blog-counts"},k.map(([b,A,y])=>r(Ae,{class:"vp-blog-count",to:b},()=>[r("div",{class:"count"},A),r("div",y)]))),r(ou)])}}});const Ga=()=>r(de,{name:"category"},()=>r("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Ga.displayName="CategoryIcon";const Wa=()=>r(de,{name:"tag"},()=>r("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Wa.displayName="TagIcon";const Ka=()=>r(de,{name:"timeline"},()=>r("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Ka.displayName="TimelineIcon";const au=()=>r(de,{name:"slides"},()=>r("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));au.displayName="SlideIcon";const iu=()=>r(de,{name:"sticky"},()=>[r("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);iu.displayName="StickyIcon";const po=()=>r(de,{name:"article"},()=>r("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));po.displayName="ArticleIcon";const ru=()=>r(de,{name:"book"},()=>r("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));ru.displayName="BookIcon";const lu=()=>r(de,{name:"link"},()=>r("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));lu.displayName="LinkIcon";const cu=()=>r(de,{name:"project"},()=>r("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));cu.displayName="ProjectIcon";const uu=()=>r(de,{name:"friend"},()=>r("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));uu.displayName="FriendIcon";const ia=()=>r(de,{name:"slide-down"},()=>r("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));ia.displayName="SlideDownIcon";const du=()=>r("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});du.displayName="EmptyIcon";var B0=j({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=An(e,"info"),{info:s,items:o}=L0(e);return()=>{var h,p,v;const{[Ue.title]:a,[He.type]:i,[He.isEncrypted]:l=!1,[He.cover]:c,[He.excerpt]:u,[He.sticky]:d}=n.value,f=s.value;return r("div",{class:"vp-article-wrapper"},r("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=t.cover)==null?void 0:h.call(t,{cover:c}))??(c?[r("img",{class:"vp-article-cover",src:me(c),alt:"",loading:"lazy"}),r("meta",{property:"image",content:me(c)})]:[]),d?r(iu):null,r(Ae,{to:e.path},()=>{var E;return((E=t.title)==null?void 0:E.call(t,{title:a,isEncrypted:l,type:i}))??r("header",{class:"vp-article-title"},[l?r(Zc):null,i===kc.slide?r(au):null,r("span",{property:"headline"},a)])}),((p=t.excerpt)==null?void 0:p.call(t,{excerpt:u}))??(u?r("div",{class:"vp-article-excerpt",innerHTML:u}):null),r("hr",{class:"vp-article-hr"}),((v=t.info)==null?void 0:v.call(t,{info:f}))??r(qc,{info:f,...o.value?{items:o.value}:{}})]))}}}),O0=j({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const s=ie(),o=te(""),a=_(()=>s.value.paginationLocales),i=_(()=>Math.ceil(e.total/e.perPage)),l=_(()=>!!i.value&&i.value!==1),c=_(()=>i.value<7?!1:e.current>4),u=_(()=>i.value<7?!1:e.current<i.value-3),d=_(()=>{const{current:p}=e;let v=1,E=i.value;const k=[];i.value>=7&&(p<=4&&p<i.value-3?(v=1,E=5):p>4&&p>=i.value-3?(E=i.value,v=i.value-4):i.value>7&&(v=p-2,E=p+2));for(let b=v;b<=E;b++)k.push(b);return k}),f=p=>t("updateCurrentPage",p),h=p=>{const v=parseInt(p,10);v<=i.value&&v>0?f(v):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${a.value.errorText.replace(/\$page/gu,i.value.toString())}`)};return Re(()=>{n=new f1}),()=>r("div",{class:"vp-pagination"},l.value?r("nav",{class:"vp-pagination-list"},[r("div",{class:"vp-pagination-number "},[e.current>1?r("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>f(e.current-1)},a.value.prev):null,c.value?[r("div",{role:"navigation",onClick:()=>f(1)},1),r("div",{class:"ellipsis"},"...")]:null,d.value.map(p=>r("div",{key:p,class:{active:e.current===p},role:"navigation",onClick:()=>f(p)},p)),u.value?[r("div",{class:"ellipsis"},"..."),r("div",{role:"navigation",onClick:()=>f(i.value)},i.value)]:null,e.current<i.value?r("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>f(e.current+1)},a.value.next):null]),r("div",{class:"vp-pagination-nav"},[r("label",{for:"navigation-text"},`${a.value.navigate}: `),r("input",{id:"navigation-text",value:o.value,onInput:({target:p})=>{o.value=p.value},onKeydown:p=>{p.key==="Enter"&&(p.preventDefault(),h(o.value))}}),r("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:a.value.action,onClick:()=>h(o.value)},a.value.action)])]):[])}}),Ya=j({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=Tt(),n=rn(),s=ks(),o=te(1),a=_(()=>s.value.articlePerPage??10),i=_(()=>e.items.slice((o.value-1)*a.value,o.value*a.value)),l=async c=>{o.value=c;const u={...t.query};!(u.page===c.toString()||c===1&&!u.page)&&(c===1?delete u.page:u.page=c.toString(),await n.push({path:t.path,query:u}))};return Re(()=>{const{page:c}=t.query;l(c?Number(c):1),ue(o,()=>{const u=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,u)},100)})}),()=>r("div",{id:"article-list",class:"vp-article-list",role:"feed"},i.value.length?[...i.value.map(({info:c,path:u},d)=>r(oe,{appear:!0,delay:d*.04},()=>r(B0,{key:u,info:c,path:u}))),r(O0,{current:o.value,perPage:a.value,total:e.items.length,onUpdateCurrentPage:l})]:r(du))}}),fu=j({name:"CategoryList",setup(){const e=ve(),t=Es();return()=>r("ul",{class:"vp-category-list"},ps(t.value.map).sort(([,n],[,s])=>s.items.length-n.items.length).map(([n,{path:s,items:o}])=>r("li",{class:["vp-category",`vp-category${fo(n,9)}`,{active:s===e.value.path}]},r(Ae,{to:s},()=>[n,r("span",{class:"count"},o.length)]))))}}),hu=j({name:"TagList",setup(){const e=ge(),t=_s(),n=s=>{var o;return s===((o=e.value.blog)==null?void 0:o.name)};return()=>r("ul",{class:"tag-list-wrapper"},ps(t.value.map).sort(([,s],[,o])=>o.items.length-s.items.length).map(([s,{path:o,items:a}])=>r("li",{class:["tag",`tag${fo(s,9)}`,{active:n(s)}]},r(Ae,{to:o},()=>[s,r("span",{class:"tag-num"},a.length)]))))}}),P0=j({name:"TimelineList",setup(){const e=ie(),t=Va(),n=ln(),s=_(()=>e.value.blogLocales.timeline);return()=>r("div",{class:"timeline-list-wrapper"},[r("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[r(Ka),r("span",{class:"num"},t.value.items.length),s.value]),r("hr"),r("div",{class:"timeline-content"},r("ul",{class:"timeline-list"},t.value.config.map(({year:o,items:a},i)=>r(oe,{appear:!0,delay:.08*(i+1)},()=>r("li",[r("h3",{class:"timeline-year"},o),r("ul",{class:"timeline-year-wrapper"},a.map(({date:l,info:c,path:u})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},l),r(Ae,{class:"timeline-title",to:u},()=>c[Ue.title])])))])))))])}});const D0={article:po,category:Ga,tag:Wa,timeline:Ka};var pu=j({name:"InfoList",setup(){const e=ie(),t=ws(),n=Es(),s=_(()=>kt(n.value.map).length),o=Ua(),a=_s(),i=_(()=>kt(a.value.map).length),l=ln(),c=te("article"),u=_(()=>e.value.blogLocales);return()=>r("div",{class:"vp-blog-infos"},[r("div",{class:"vp-blog-type-switcher"},ps(D0).map(([d,f])=>r("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{c.value=d}},r("div",{class:["icon-wrapper",{active:c.value===d}],"aria-label":u.value[d],"data-balloon-pos":"up"},r(f))))),r(oe,()=>c.value==="article"?r("div",{class:"vp-star-article-wrapper"},[r("div",{class:"title",onClick:()=>l(t.value.path)},[r(po),r("span",{class:"num"},t.value.items.length),u.value.article]),r("hr"),o.value.items.length?r("ul",{class:"vp-star-articles"},o.value.items.map(({info:d,path:f},h)=>r(oe,{appear:!0,delay:.08*(h+1)},()=>r("li",{class:"vp-star-article"},r(Ae,{to:f},()=>d[Ue.title]))))):r("div",{class:"vp-star-article-empty"},u.value.empty.replace("$text",u.value.star))]):c.value==="category"?r("div",{class:"vp-category-wrapper"},[s.value?[r("div",{class:"title",onClick:()=>l(n.value.path)},[r(Ga),r("span",{class:"num"},s.value),u.value.category]),r("hr"),r(oe,{delay:.04},()=>r(fu))]:r("div",{class:"vp-category-empty"},u.value.empty.replace("$text",u.value.category))]):c.value==="tag"?r("div",{class:"vp-tag-wrapper"},[i.value?[r("div",{class:"title",onClick:()=>l(a.value.path)},[r(Wa),r("span",{class:"num"},i.value),u.value.tag]),r("hr"),r(oe,{delay:.04},()=>r(hu))]:r("div",{class:"vp-tag-empty"},u.value.empty.replace("$text",u.value.tag))]):r(oe,()=>r(P0)))])}}),As=j({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=ys();return()=>[r(ja),r($a,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>r(qa),...n.value?{sidebar:()=>r(pu)}:{}})]}});const Ts=()=>r("aside",{class:"vp-blog-info-wrapper"},[r(oe,()=>r(qa)),r(oe,{delay:.04},()=>r(pu))]);Ts.displayName="InfoPanel";var N0=j({name:"BlogPage",setup(){const e=ve(),t=ge(),n=Es(),s=_s();return()=>{const{key:o="",name:a=""}=t.value.blog||{},i=a?o==="category"?n.value.map[a].items:o==="tag"?s.value.map[a].items:[]:[];return r(As,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(oe,()=>o==="category"?r(fu):o==="tag"?r(hu):null),a?r(oe,{appear:!0,delay:.24},()=>r(Ya,{key:e.value.path,items:i})):null]),r(oe,{delay:.16},()=>r(Ts,{key:"blog"}))])))}}});const M0="//theme-hope-assets.vuejs.press/hero/default.jpg";var F0=j({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=ge(),s=fs(),o=$e(),a=_(()=>n.value.heroFullScreen??!1),i=_(()=>{const{heroText:c,heroImage:u,heroImageDark:d,heroAlt:f,heroImageStyle:h,tagline:p}=n.value;return{text:c??s.value.title??"Hello",tagline:p??"",image:u?me(u):null,imageDark:d?me(d):null,alt:f??c??"",imageStyle:h,isFullScreen:a.value}}),l=_(()=>{const{bgImage:c,bgImageDark:u,bgImageStyle:d}=n.value;return{image:_e(c)?me(c):c===!1?null:M0,imageDark:_e(u)?me(u):null,bgStyle:d,isFullScreen:a.value}});return()=>{var c,u;return n.value.hero===!1?null:r("div",{ref:o,class:["vp-blog-hero",{fullscreen:a.value,"no-bg":!l.value.image}]},[((c=t.bg)==null?void 0:c.call(t,l.value))??[l.value.image?r("div",{class:["vp-blog-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.bgStyle]}):null,l.value.imageDark?r("div",{class:"vp-blog-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.bgStyle]}):null],((u=t.info)==null?void 0:u.call(t,i.value))??[r(oe,{appear:!0,type:"group",delay:.04},()=>{const{image:d,imageDark:f,imageStyle:h,alt:p}=i.value;return[d?r("img",{key:"light",class:["vp-blog-hero-image",{light:f}],style:h,src:d,alt:p}):null,f?r("img",{key:"dark",class:"vp-blog-hero-image dark",style:h,src:f,alt:p}):null]}),r(oe,{appear:!0,delay:.08},()=>i.value.text?r("h1",{class:"vp-blog-hero-title"},i.value.text):null),r(oe,{appear:!0,delay:.12},()=>i.value.tagline?r("p",{class:"vp-blog-hero-description",innerHTML:i.value.tagline}):null)],i.value.isFullScreen?r("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:o.value.clientHeight,behavior:"smooth"})}},[r(ia),r(ia)]):null])}}});const H0=["link","article","book","project","friend"];var z0=j({name:"ProjectPanel",components:{ArticleIcon:po,BookIcon:ru,FriendIcon:uu,LinkIcon:lu,ProjectIcon:cu},props:{items:{type:Array,required:!0}},setup(e){const t=cn(),n=ln(),s=(o="",a="icon")=>H0.includes(o)?r(rt(`${o}-icon`)):Gt(o)?r("img",{class:"vp-project-image",src:o,alt:a}):ms(o)?r("img",{class:"vp-project-image",src:me(o),alt:a}):r(Ne,{icon:o});return()=>r("div",{class:"vp-project-panel"},e.items.map(({icon:o,link:a,name:i,desc:l,background:c},u)=>r("div",{class:["vp-project-card",{[`project${u%9}`]:!t.value&&!c}],...c?{style:c}:{},onClick:()=>n(a)},[s(o,i),r("div",{class:"vp-project-name"},i),r("div",{class:"vp-project-desc"},l)])))}}),$0=j({name:"BlogHomePage",setup(){const e=ws(),t=ge(),n=_(()=>t.value.projects??[]);return()=>r("div",{class:"vp-page vp-blog"},[r(F0),r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?r(oe,{appear:!0,delay:.16},()=>r(z0,{items:n.value})):null,r(oe,{appear:!0,delay:.24},()=>r(Ya,{items:e.value.items}))]),r(oe,{appear:!0,delay:.16},()=>r(Ts,{key:"blog"}))]),r(oe,{appear:!0,delay:.28},()=>r(_n))])}});const mu=()=>r(As,()=>r($0));mu.displayName="BlogHome";var j0=mu,V0=j({name:"ArticleType",setup(){const e=ve(),t=xt(),n=ie(),s=ws(),o=Ua(),a=_(()=>{const i=n.value.blogLocales;return[{text:i.all,path:s.value.path},{text:i.star,path:o.value.path},...b0.map(({key:l,path:c})=>({text:i[l],path:c.replace(/^\//,t.value)}))]});return()=>r("ul",{class:"vp-article-type-wrapper"},a.value.map(i=>r("li",{class:["vp-article-type",{active:i.path===e.value.path}]},r(Ae,{to:i.path},()=>i.text))))}}),U0=j({name:"BlogPage",setup(){const e=ho(),t=ge(),n=ve(),s=ws(),o=Ua(),a=_(()=>{const{key:i="",type:l}=t.value.blog||{};return i==="star"?o.value.items:l==="type"&&i?e.value.items:s.value.items});return()=>r(As,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(oe,()=>r(V0)),r(oe,{appear:!0,delay:.24},()=>r(Ya,{key:n.value.path,items:a.value}))]),r(oe,{delay:.16},()=>r(Ts,{key:"blog"}))])))}}),q0=j({name:"PortfolioHero",slots:Object,setup(e,{slots:t}){const n=I0(),s=ge(),o=te(0),a=_(()=>{var h;return((h=s.value.titles)==null?void 0:h[o.value])??""}),i=te(""),l=_(()=>{const{name:h,avatar:p,avatarDark:v,avatarAlt:E,avatarStyle:k}=s.value;return{name:h??n.value.name,avatar:p?me(p):null,avatarDark:v?me(v):null,avatarStyle:k,alt:E||h||""}}),c=_(()=>{const{bgImage:h,bgImageDark:p,bgImageStyle:v}=s.value;return{image:_e(h)?me(h):null,imageDark:_e(p)?me(p):null,bgStyle:v}}),u=_(()=>{const{welcome:h,name:p,titles:v,medias:E}=s.value;return{name:p??n.value.name,welcome:h??"👋 Hi There, I'm",title:i.value,titles:v??[],medias:E??[]}}),d=()=>{i.value="";let h=0,p=!1;const v=async()=>{if(!p)if(i.value+=a.value[h],h+=1,await qt(),h<a.value.length)setTimeout(()=>{v()},150);else{const E=u.value.titles.length;setTimeout(()=>{o.value=E<=1||o.value===u.value.titles.length-1?0:o.value+1},1e3)}};return v(),()=>{p=!0}};let f;return Re(()=>{ue(a,()=>{f==null||f(),f=d()},{immediate:!0})}),()=>{var h,p,v;return r("section",{id:"portfolio",class:["vp-portfolio-wrapper",{bg:c.value.image}]},[((h=t.bg)==null?void 0:h.call(t,c.value))??[c.value.image?r("div",{class:["vp-portfolio-mask",{light:c.value.imageDark}],style:[{background:`url(${c.value.image}) center/cover no-repeat`},c.value.bgStyle]}):null,c.value.imageDark?r("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${c.value.imageDark}) center/cover no-repeat`},c.value.bgStyle]}):null],((p=t.avatar)==null?void 0:p.call(t,l.value))??r("div",{class:"vp-portfolio-avatar"},[r(oe,{delay:.04},()=>{const{avatarDark:E,name:k,alt:b,avatarStyle:A}=l.value;return[r("img",{key:"light",class:{light:E},src:l.value.avatar,title:k,alt:b,style:A}),E?r("img",{key:"dark",class:"dark",src:E,title:k,alt:b,style:A}):null]})]),r("div",{class:"vp-portfolio-container"},((v=t.info)==null?void 0:v.call(t,u.value))??r("div",{class:"vp-portfolio-info"},[r(oe,{appear:!0,delay:.08},()=>r("h6",{class:"vp-portfolio-welcome"},u.value.welcome)),r(oe,{appear:!0,delay:.12},()=>r("h1",{class:"vp-portfolio-name"},u.value.name)),r(oe,{appear:!0,delay:.16},()=>r("h2",{class:"vp-portfolio-title"},i.value)),r(oe,{appear:!0,delay:.2},()=>u.value.medias.length?r("div",{class:"vp-portfolio-medias"},u.value.medias.map(({name:E,url:k,icon:b})=>r("a",{class:"vp-portfolio-media",href:k,rel:"noopener noreferrer",target:"_blank",...E?{"aria-label":E,"data-balloon-pos":"up"}:{}},r(Ne,{icon:b})))):r(ou))]))])}}});const gu=()=>r(As,()=>[r(q0),r("div",{class:"vp-page vp-portfolio"},r(oe,{appear:!0,delay:.24},()=>r(_n)))]);gu.displayName="PortfolioHome";var G0=gu,W0=j({name:"TimelineItems",setup(){const e=ks(),t=ie(),n=Va(),s=_(()=>e.value.timeline??t.value.blogLocales.timelineTitle),o=_(()=>n.value.config.map(({year:a})=>({title:a.toString(),level:2,slug:a.toString(),children:[]})));return()=>r("div",{class:"timeline-wrapper"},r("ul",{class:"timeline-content"},[r(oe,()=>r("li",{class:"motto"},s.value)),r(Gc,{items:o.value}),n.value.config.map(({year:a,items:i},l)=>r(oe,{appear:!0,delay:.08*(l+1),type:"group"},()=>[r("h3",{key:"title",id:a,class:"timeline-year-title"},r("span",a)),r("li",{key:"content",class:"timeline-year-list"},[r("ul",{class:"timeline-year-wrapper"},i.map(({date:c,info:u,path:d})=>r("li",{class:"timeline-item"},[r("span",{class:"timeline-date"},c),r(Ae,{class:"timeline-title",to:d},()=>u[Ue.title])])))])]))]))}});const vu=()=>r(As,()=>r("div",{class:"vp-page vp-blog"},r("div",{class:"blog-page-wrapper"},[r("main",{id:"main-content",class:"vp-blog-main"},[r(oe,{appear:!0,delay:.24},()=>r(W0))]),r(oe,{delay:.16},()=>r(Ts,{key:"blog"}))])));vu.displayName="Timeline";var K0=vu;pm(e=>{const t=e.t,n=e.I!==!1,s=e.i;return n?{title:t,content:s?()=>[r(Ne,{icon:s}),t]:null,order:e.O,index:e.I}:null});const Y0=ut({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...s)=>(await ta.wait(),n(...s)),x1(e),e.component("HopeIcon",Ne),e.component("BloggerInfo",qa)},setup:()=>{S1(),L1(),T0()},layouts:{Layout:h0,NotFound:m0,BlogCategory:N0,BlogHome:j0,BlogType:U0,PortfolioHome:G0,Timeline:K0}}),zs=[Sp,rm,hm,bm,_m,xm,Lm,Dm,Gm,Km,l1,Y0],J0=JSON.parse('{"base":"/blog/","lang":"zh-CN","title":"Cafe Babe","description":"Cafe Babe的博客","head":[],"locales":{}}');var Bn=$e(J0),X0=Gh,Z0=()=>{const e=vp({history:X0(Ra("/blog/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(t,n,s)=>s||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{if(t.path!==n.path||n===wt){const s=gt(t.path);if(s.path!==t.path)return s.path;const o=await s.loader();t.meta={...s.meta,_pageChunk:o}}else t.path===n.path&&(t.meta=n.meta)}),e},Q0=e=>{e.component("ClientOnly",co),e.component("Content",Fl),e.component("RouteLink",Ae)},eg=(e,t,n)=>{const s=_(()=>t.currentRoute.value.path),o=Ea((k,b)=>({get(){return k(),t.currentRoute.value.meta._pageChunk},set(A){t.currentRoute.value.meta._pageChunk=A,b()}})),a=_(()=>Xt.resolveLayouts(n)),i=_(()=>Xt.resolveRouteLocale(Bn.value.locales,s.value)),l=_(()=>Xt.resolveSiteLocaleData(Bn.value,i.value)),c=_(()=>o.value.comp),u=_(()=>o.value.data),d=_(()=>u.value.frontmatter),f=_(()=>Xt.resolvePageHeadTitle(u.value,l.value)),h=_(()=>Xt.resolvePageHead(f.value,d.value,l.value)),p=_(()=>Xt.resolvePageLang(u.value,l.value)),v=_(()=>Xt.resolvePageLayout(u.value,a.value)),E={layouts:a,pageData:u,pageComponent:c,pageFrontmatter:d,pageHead:h,pageHeadTitle:f,pageLang:p,pageLayout:v,redirects:Ko,routeLocale:i,routePath:s,routes:Zn,siteData:Bn,siteLocaleData:l};return e.provide(Ba,E),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>d.value},$head:{get:()=>h.value},$headTitle:{get:()=>f.value},$lang:{get:()=>p.value},$page:{get:()=>u.value},$routeLocale:{get:()=>i.value},$site:{get:()=>Bn.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>me}}),E},tg=()=>{const e=wp(),t=Dl();let n=[];const s=()=>{e.value.forEach(i=>{const l=ng(i);l&&n.push(l)})},o=()=>{const i=[];return e.value.forEach(l=>{const c=sg(l);c&&i.push(c)}),i},a=()=>{document.documentElement.lang=t.value;const i=o();n.forEach((l,c)=>{const u=i.findIndex(d=>l.isEqualNode(d));u===-1?(l.remove(),delete n[c]):i.splice(u,1)}),i.forEach(l=>document.head.appendChild(l)),n=[...n.filter(l=>!!l),...i]};lt(kp,a),Re(()=>{s(),ue(e,a,{immediate:!1})})},ng=([e,t,n=""])=>{const s=Object.entries(t).map(([l,c])=>_e(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),o=`head > ${e}${s}`;return Array.from(document.querySelectorAll(o)).find(l=>l.innerText===n)||null},sg=([e,t,n])=>{if(!_e(e))return null;const s=document.createElement(e);return io(t)&&Object.entries(t).forEach(([o,a])=>{_e(a)?s.setAttribute(o,a):a===!0&&s.setAttribute(o,"")}),_e(n)&&s.appendChild(document.createTextNode(n)),s},og=th,ag=async()=>{var n;const e=og({name:"Vuepress",setup(){var a;tg();for(const i of zs)(a=i.setup)==null||a.call(i);const s=zs.flatMap(({rootComponents:i=[]})=>i.map(l=>r(l))),o=Ep();return()=>[r(o.value),s]}}),t=Z0();Q0(e),eg(e,t,zs);for(const s of zs)await((n=s.enhance)==null?void 0:n.call(s,{app:e,router:t,siteData:Bn}));return e.use(t),{app:e,router:t}};ag().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{fl as a,hl as b,ig as c,ag as createVueApp,Se as d,lg as e,rg as f,rf as o,rt as r,vd as w};
