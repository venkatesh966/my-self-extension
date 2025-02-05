(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self;function aa(a,b){a:{var c=["CLOSURE_FLAGS"];for(var d=m,e=0;e<c.length;e++)if(d=d[c[e]],d==null){c=null;break a}c=d}a=c&&c[a];return a!=null?a:b}function ba(a){return a};const ca=(new Date("2024-01-01T00:00:00Z")).getTime();function da(a,b){switch(a){case 0:return b?"&ri=1":"";case 1:return b?"&ri=24":"&ri=27";case 2:return b?"&ri=25":"&ri=26";default:return""}}function ea(a,b){return b?a.g?a.h.slice(0,a.g.index)+b+a.h.slice(a.g.index):a.h+b:a.h}
function fa(a){a=a.B;if(!a)return"";let b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(c=>encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)).join("|")));typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}function ha(a,b){return a.m?typeof a.i!=="string"||a.i.length===0?null:{version:3,D:a.i,u:ea(a,"&act=1"+da(b,!0)+fa(a))}:a.o?{version:4,D:ea(a,"&dct=1&suid="+a.l+da(b,!1)),u:ea(a,"&act=1"+da(b,!0)+("&suid="+a.l))}:null}function ia(a,b){return b===2?ea(a,"&ri=2"):b===0?ea(a,"&ri=16"):a.h}
var ka=class{constructor({url:a,aa:b}){this.h=a;this.B=b;b=/[?&]dsh=1(&|$)/.test(a);this.m=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);this.g=/[?&]adurl=([^&]*)/.exec(a);this.C=!b&&/[?&]aspm=1(&|$)/.test(a);if(this.g&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}this.l=(new Date).getTime()-ca}};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var q=class{constructor(a){this.g=a}toString(){return this.g}},la=new q("about:invalid#zClosurez");class ma{constructor(a){this.ha=a}}function r(a){return new ma(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const na=new ma(a=>/^[^:]*([/?#]|$)/.test(a));var oa=r("http"),qa=r("https"),ra=r("ftp"),sa=r("mailto"),ta=r("intent"),ua=r("market"),va=r("itms"),wa=r("itms-appss");const xa=[r("data"),oa,qa,sa,ra,na];function ya(a,b=xa){if(a instanceof q)return a;for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof ma&&d.ha(a))return new q(a)}}function za(a,b=xa){return ya(a,b)||la}var Aa=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function Ba(a,b){if(b instanceof q)if(b instanceof q)b=b.g;else throw Error("");else b=Aa.test(b)?b:void 0;b!==void 0&&(a.href=b)};function Ca(a,b){a:{const c=a.length,d=typeof a==="string"?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]};function Da(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b};var Ea=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fa(a,b,c){if(Array.isArray(b))for(let d=0;d<b.length;d++)Fa(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}function Ga(a,b,c,d){const e=c.length;for(;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}var Ha=/#|$/;
function Ia(a,b){const c=a.search(Ha);let d=Ga(a,0,b,c);if(d<0)return null;let e=a.indexOf("&",d);if(e<0||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,e!==-1?e:0).replace(/\+/g," "))}var Ja=/[?&]($|#)/;function Ka(a){m.setTimeout(()=>{throw a;},0)};var La=aa(610401301,!1),Ma=aa(653718497,aa(1,!1));var Na;const Oa=m.navigator;Na=Oa?Oa.userAgentData||null:null;function Pa(a){return La?Na?Na.brands.some(({brand:b})=>b&&b.indexOf(a)!=-1):!1:!1}function u(a){var b;a:{if(b=m.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1};function v(){return La?!!Na&&Na.brands.length>0:!1}function Qa(){return v()?Pa("Chromium"):(u("Chrome")||u("CriOS"))&&!(v()?0:u("Edge"))||u("Silk")};function Ra(){return u("iPhone")&&!u("iPod")&&!u("iPad")};function Sa(a){Sa[" "](a);return a}Sa[" "]=function(){};var Ta=Ra(),Ua=u("iPad");var Va=Ra()||u("iPod"),Wa=u("iPad");!u("Android")||Qa();Qa();u("Safari")&&(Qa()||(v()?0:u("Coast"))||(v()?0:u("Opera"))||(v()?0:u("Edge"))||(v()?Pa("Microsoft Edge"):u("Edg/"))||v()&&Pa("Opera"));var Xa={},Ya=null;let Za=void 0;function $a(a){a=Error(a);Da(a,"warning");return a};var ab=new Set;function bb(a,b=!1,c=!1){a=c&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol();b&&ab.add(a);return a}var w=bb("jas",!0,!0),cb=bb(),db=bb(),eb=bb(void 0,!0);function fb(a){a[w]|=34;return a}function gb(a,b){b[w]=(a|0)&-30975}function ib(a,b){b[w]=(a|34)&-30941};function x(a){return Array.prototype.slice.call(a)};var jb={},kb={};function lb(a){return!(!a||typeof a!=="object"||a.ka!==kb)}function nb(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}function ob(a){return!Array.isArray(a)||a.length?!1:(a[w]|0)&1?!0:!1}var pb;const qb=[];qb[w]=55;pb=Object.freeze(qb);function rb(a){if(a&2)throw Error();}
class ub{constructor(a,b,c){this.i=0;this.g=a;this.h=b;this.l=c}next(){if(this.i<this.g.length){const a=this.g[this.i++];return{done:!1,value:this.h?this.h.call(this.l,a):a}}return{done:!0,value:void 0}}[Symbol.iterator](){return new ub(this.g,this.h,this.l)}}function vb(a,b){const c=ba(eb);(b=c?b[c]:void 0)&&(a[eb]=x(b))}var wb=Object.freeze({});var xb=typeof m.BigInt==="function"&&typeof m.BigInt(0)==="bigint";const yb=Number.MIN_SAFE_INTEGER.toString(),zb=xb?BigInt(Number.MIN_SAFE_INTEGER):void 0,Ab=Number.MAX_SAFE_INTEGER.toString(),Bb=xb?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Cb(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(let c=0;c<a.length;c++){const d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}};const Db=Number.isFinite;function Eb(a){if(a!=null&&typeof a!=="boolean"){var b=typeof a;throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);}return a}function Fb(a){if(!Db(a))throw $a("enum");return a|0}function Gb(a){return a==null?a:Db(a)?a|0:void 0}function Hb(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Db(a)?a|0:void 0}function y(a){return a==null||typeof a==="string"?a:void 0}
function Ib(a,b,c,d){if(a!=null&&typeof a==="object"&&a.H===jb)return a;if(!Array.isArray(a))return c?d&2?((a=b[cb])||(a=new b,fb(a.j),a=b[cb]=a),b=a):b=new b:b=void 0,b;let e=c=a[w]|0;e===0&&(e|=d&32);e|=d&2;e!==c&&(a[w]=e);return new b(a)}function Jb(a,b,c){if(b){if(typeof a!=="string")throw Error();return a}let d;return(d=y(a))!=null?d:c?"":void 0};const Kb={},Lb=(()=>class extends Map{constructor(){super()}})();function Mb(a){return a}function Nb(a){if(a.s&2)throw Error("Cannot mutate an immutable Map");}
var z=class extends Lb{constructor(a,b,c=Mb,d=Mb){super();let e=a[w]|0;e|=64;this.s=a[w]=e;this.F=b;this.A=c;this.L=this.F?Ob:d;for(let f=0;f<a.length;f++){const g=a[f],h=c(g[0],!1,!0);let k=g[1];b?k===void 0&&(k=null):k=d(g[1],!1,!0,void 0,void 0,e);super.set(h,k)}}Z(a=Pb){if(this.size!==0)return this.I(a)}I(a=Pb){const b=[],c=super.entries();for(var d;!(d=c.next()).done;)d=d.value,d[0]=a(d[0]),d[1]=a(d[1]),b.push(d);return b}clear(){Nb(this);super.clear()}delete(a){Nb(this);return super.delete(this.A(a,
!0,!1))}entries(){var a=this.X();return new ub(a,Qb,this)}keys(){return this.ia()}values(){var a=this.X();return new ub(a,z.prototype.get,this)}forEach(a,b){super.forEach((c,d)=>{a.call(b,this.get(d),d,this)})}set(a,b){Nb(this);a=this.A(a,!0,!1);return a==null?this:b==null?(super.delete(a),this):super.set(a,this.L(b,!0,!0,this.F,!1,this.s))}has(a){return super.has(this.A(a,!1,!1))}get(a){a=this.A(a,!1,!1);const b=super.get(a);if(b!==void 0){var c=this.F;return c?(c=this.L(b,!1,!0,c,this.ga,this.s),
c!==b&&super.set(a,c),c):b}}X(){return Array.from(super.keys())}ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};z.prototype.toJSON=void 0;z.prototype.ka=kb;function Ob(a,b,c,d,e,f){a=Ib(a,d,c,f);e&&(a=Rb(a));return a}function Pb(a){return a}function Qb(a){return[a,this.get(a)]}let Sb;function Tb(){return Sb||(Sb=new z(fb([]),void 0,void 0,void 0,Kb))};function Ub(a,b){return Vb(b)}
function Vb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return(xb?a>=zb&&a<=Bb:a[0]==="-"?Cb(a,yb):Cb(a,Ab))?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(ob(a))return}else{if(a!=null&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}if(a instanceof z)return a.Z()}}return a}
;function Wb(a,b,c){const d=x(a);var e=d.length;const f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(const g in f)b[g]=c(f[g])}vb(d,a);return d}function Xb(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=ob(a)?void 0:e&&(a[w]|0)&2?a:Yb(a,b,c,d!==void 0,e);else if(nb(a)){const f={};for(let g in a)f[g]=Xb(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Yb(a,b,c,d,e){const f=d||c?a[w]|0:0;d=d?!!(f&32):void 0;const g=x(a);for(let h=0;h<g.length;h++)g[h]=Xb(g[h],b,c,d,e);c&&(vb(g,a),c(f,g));return g}function Zb(a){return Xb(a,$b,void 0,void 0,!1)}function $b(a){return a.H===jb?a.toJSON():a instanceof z?a.Z(Zb):Vb(a)}function ac(a){return Yb(a,$b,void 0,void 0,!1)};function bc(a,b,c=ib){if(a!=null){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=a[w]|0;if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(a[w]=(d|34)&-12293,a):Yb(a,bc,d&4?ib:c,!0,!0)}a.H===jb?(c=a.j,d=c[w]|0,a=d&2?a:new a.constructor(cc(c,d,!0))):a instanceof z&&!(a.s&2)&&(c=fb(a.I(bc)),a=new z(c,a.F,a.A,a.L));return a}}function dc(a){const b=a.j;return new a.constructor(cc(b,b[w]|0,!1))}
function cc(a,b,c){const d=c||b&2?ib:gb,e=!!(b&32);a=Wb(a,b,f=>bc(f,e,d));a[w]=a[w]|32|(c?2:0);return a}function Rb(a){const b=a.j,c=b[w]|0;return c&2?new a.constructor(cc(b,c,!1)):a};function D(a,b){a=a.j;return ec(a,a[w]|0,b)}function ec(a,b,c,d){if(c===-1)return null;const e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null)){if(a[e]!=null&&db!=null){var g;a=(g=Za)!=null?g:Za={};g=a[db]||0;g>=4||(a[db]=g+1,g=Error(),Da(g,"incident"),Ka(g))}return b}if(e<=f)return a[e]}function E(a,b,c){const d=a.j;let e=d[w]|0;rb(e);F(d,e,b,c);return a}
function F(a,b,c,d){const e=b&512?0:-1,f=c+e;var g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(a[g+e]={[c]:d},b|=256,a[w]=b):a[f]=d);return b}function G(a,b,c){return fc(a,b,c)!==void 0}function gc(){return void 0===wb?2:Ma?4:2}
function hc(a,b,c,d,e){const f=a.j;a=f[w]|0;const g=2&a?1:d;e=!!e;d=ic(f,a,b);let h=d[w]|0;if(!(4&h)){4&h&&(d=x(d),h=H(h,a),a=F(f,a,b,d));let k=0,l=0;for(;k<d.length;k++){const n=c(d[k]);n!=null&&(d[l++]=n)}l<k&&(d.length=l);h=jc(h,a);c=(h|20)&-4097;h=c&=-8193;d[w]=h;2&h&&Object.freeze(d)}g===1||g===4&&32&h?I(h)||(e=h,h|=2,h!==e&&(d[w]=h),Object.freeze(d)):(g===2&&I(h)&&(d=x(d),h=H(h,a),h=kc(h,a,e),d[w]=h,a=F(f,a,b,d)),I(h)||(b=h,h=kc(h,a,e),h!==b&&(d[w]=h)));return d}
function ic(a,b,c){a=ec(a,b,c);return Array.isArray(a)?a:pb}function jc(a,b){a===0&&(a=H(a,b));return a|1}function I(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function lc(a,b,c,d,e,f){const g=b&2;a:{var h=c,k=b&2;c=!1;if(h==null){if(k){a=Tb();break a}h=[]}else if(h.constructor===z){if((h.s&2)==0||k){a=h;break a}h=h.I()}else Array.isArray(h)?c=!!((h[w]|0)&2):h=[];if(k){if(!h.length){a=Tb();break a}c||(c=!0,fb(h))}else if(c){c=!1;k=x(h);for(h=0;h<k.length;h++){const l=k[h]=x(k[h]);Array.isArray(l[1])&&(l[1]=fb(l[1]))}h=k}c||((h[w]|0)&64?h[w]&=-33:32&b&&(h[w]|=32));f=new z(h,e,Jb,f);F(a,b,d,f);a=f}!g&&e&&(a.ga=!0);return a}
function mc(a,b){a=a.j;const c=a[w]|0;return lc(a,c,ec(a,c,b),b,void 0,Jb)}function nc(a){var b=oc;a=a.j;const c=a[w]|0;return lc(a,c,ec(a,c,1),1,b)}function fc(a,b,c){a=a.j;let d=a[w]|0;const e=ec(a,d,c,!1);b=Ib(e,b,!1,d);b!==e&&b!=null&&F(a,d,c,b);return b}function J(a,b,c){b=fc(a,b,c);if(b==null)return b;a=a.j;let d=a[w]|0;if(!(d&2)){const e=Rb(b);e!==b&&(b=e,F(a,d,c,b))}return b}function H(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}function kc(a,b,c){32&b&&c||(a&=-33);return a}
function L(a,b,c=!1){a=D(a,b);a=a==null||typeof a==="boolean"?a:typeof a==="number"?!!a:void 0;return a!=null?a:c}function pc(a,b){let c;return(c=Hb(D(a,b)))!=null?c:0}function M(a,b){let c;return(c=y(D(a,b)))!=null?c:""}function N(a,b,c=0){let d;return(d=Gb(D(a,b)))!=null?d:c}function qc(a,b,c){if(c!=null){if(typeof c!=="number")throw $a("int32");if(!Db(c))throw $a("int32");c|=0}E(a,b,c)}function P(a,b,c){if(c!=null&&typeof c!=="string")throw Error();return E(a,b,c)}
function rc(a,b,c){E(a,b,c==null?c:Fb(c))};function sc(a){return a}let R;function tc(a){try{return R=ac,uc(a)}finally{R=void 0}}function vc(a){try{return R=sc,JSON.stringify(uc(a),Ub)}finally{R=void 0}}
var S=class{constructor(a){a:{if(a==null){var b=96;a=[]}else{if(!Array.isArray(a))throw Error("narr");b=a[w]|0;if(b&2048)throw Error("farr");if(b&64)break a;var c=a;b|=64;var d=c.length;if(d&&(--d,nb(c[d]))){b|=256;c=d-(b&512?0:-1);if(c>=1024)throw Error("pvtlmt");b=b&-33521665|(c&1023)<<15}}a[w]=b}this.j=a}toJSON(){const a=!R;try{return a&&(R=ac),uc(this)}finally{a&&(R=void 0)}}};S.prototype.H=jb;S.prototype.toString=function(){try{return R=sc,uc(this).toString()}finally{R=void 0}};
function uc(a){var b=a.j;a=R(b);{b=a!==b;let l=a.length;if(l){var c=a[l-1],d=nb(c);d?l--:c=void 0;var e=a;if(d){b:{var f=c;var g;var h=!1;if(f)for(let n in f)if(isNaN(+n)){let p;((p=g)!=null?p:g={})[n]=f[n]}else if(d=f[n],Array.isArray(d)&&(ob(d)||lb(d)&&d.size===0)&&(d=null),d==null&&(h=!0),d!=null){let p;((p=g)!=null?p:g={})[n]=d}h||(g=f);if(g)for(let n in g){h=g;break b}h=null}f=h==null?c!=null:h!==c}for(;l>0;l--){g=e[l-1];if(!(g==null||ob(g)||lb(g)&&g.size===0))break;var k=!0}if(e!==a||f||k){if(!b)e=
Array.prototype.slice.call(e,0,l);else if(k||f||h)e.length=l;h&&e.push(h)}k=e}else k=a}return k};var wc=class extends S{};var xc=class extends S{};var yc=class extends S{};var zc=class extends S{};var Ac=class extends S{};var Bc=class extends S{v(){return M(this,3)}Y(a){E(this,5,Eb(a))}};var T=class extends S{v(){return M(this,1)}Y(a){E(this,2,Eb(a))}};var Cc=class extends S{};var Dc=class extends S{};function Ec(a){var b=a.j[w]|0,c=b,d=!(2&b);b=gc();a=a.j;var e=!!(2&c);const f=e?1:b;d&&(d=!e);b=ic(a,c,7);var g=b[w]|0;e=!!(4&g);if(!e){g=jc(g,c);var h=b,k=c,l=!!(2&g);l&&(k|=2);let n=!l,p=!0,t=0,B=0;for(;t<h.length;t++){const C=Ib(h[t],Bc,!1,k);if(C instanceof Bc){if(!l){const K=!!((C.j[w]|0)&2);n&&(n=!K);p&&(p=K)}h[B++]=C}}B<t&&(h.length=B);g|=4;g=p?g|16:g&-17;g=n?g|8:g&-9;h[w]=g;l&&Object.freeze(h)}if(d&&!(8&g||!b.length&&(f===1||f===4&&32&g))){I(g)&&(b=x(b),g=H(g,c),c=F(a,c,7,b));d=b;h=g;for(g=
0;g<d.length;g++)k=d[g],l=Rb(k),k!==l&&(d[g]=l);h|=8;h=d.length?h&-17:h|16;g=d[w]=h}f===1||f===4&&32&g?I(g)||(c=g,g|=!b.length||16&g&&(!e||32&g)?2:2048,g!==c&&(b[w]=g),Object.freeze(b)):(f===2&&I(g)&&(b=x(b),g=H(g,c),g=kc(g,c,!1),b[w]=g,c=F(a,c,7,b)),I(g)||(a=g,g=kc(g,c,!1),g!==a&&(b[w]=g)));return b}var oc=class extends S{};var Fc=class extends S{};var Gc=class extends S{};function Hc(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Ic={capture:!0},Jc={passive:!0},Kc=Hc(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});m.addEventListener("test",null,b)}catch(b){}return a});function Lc(a){return a?a.passive&&Kc()?a:a.capture||!1:!1}function U(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Lc(d))};function Mc(a){let b=0;for(const c in a)b++};function Rc(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var Sc=a=>{a.preventDefault?a.preventDefault():a.returnValue=!1};let Tc=[];const Uc=()=>{const a=Tc;Tc=[];for(const b of a)try{b()}catch(c){}};
var Vc=a=>{Tc.push(a);Tc.length==1&&(window.Promise?Promise.resolve().then(Uc):window.setImmediate?setImmediate(Uc):setTimeout(Uc,0))},Wc=a=>{var b=V;b.readyState==="complete"||b.readyState==="interactive"?Vc(a):b.addEventListener("DOMContentLoaded",a)},Xc=a=>{var b=window;b.document.readyState==="complete"?Vc(a):b.addEventListener("load",a)};function Yc(a=document){return a.createElement("img")};function Zc(a,b,c=null,d=!1){$c(a,b,c,d)}function $c(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=Yc(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,e,void 0);h>=0&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,Lc());e.removeEventListener&&e.removeEventListener("error",f,Lc())};U(e,"load",f);U(e,"error",f)}e.src=b;a.google_image_requests.push(e)};let ad=0;function bd(){const a=cd(ad,document.currentScript);a&&(a.dataset.initialized="true")}function dd(a){return(a=cd(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function cd(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function ed(a){if(!(Math.random()>.01)){var b=cd(a,document.currentScript);a=`https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${dd(a)}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Zc(b,a,void 0,!1)}};var V=document,fd=window;var gd=a=>{var b=V;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};var hd=class{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};function id(a){let b=a.toString();a.name&&b.indexOf(a.name)==-1&&(b+=": "+a.name);a.message&&b.indexOf(a.message)==-1&&(b+=": "+a.message);if(a.stack)a:{a=a.stack;var c=b;try{a.indexOf(c)==-1&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n");break a}catch(d){b=c;break a}b=void 0}return b};const jd=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var kd=class{constructor(a,b){this.g=a;this.h=b}},ld=class{constructor(a,b){this.url=a;this.W=!!b;this.depth=null}};let md=null;function nd(){const a=m.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function od(){const a=m.performance;return a&&a.now?a.now():null};var pd=class{constructor(a,b){var c=od()||nd();this.label=a;this.type=b;this.value=c;this.duration=0;this.taskId=this.slotId=void 0;this.uniqueId=Math.random()}};const W=m.performance,qd=!!(W&&W.mark&&W.measure&&W.clearMarks),rd=Hc(()=>{var a;if(a=qd){var b;if(md===null){md="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(md=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=md;a=!!b.indexOf&&b.indexOf("1337")>=0}return a});function sd(a){a&&W&&rd()&&(W.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),W.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))};function td(a,b){const c={};c[a]=b;return[c]}function ud(a,b,c,d,e){const f=[];Rc(a,(g,h)=>{(g=vd(g,b,c,d,e))&&f.push(`${h}=${g}`)});return f.join(b)}
function vd(a,b,c,d,e){if(a==null)return"";b=b||"&";c=c||",$";typeof c==="string"&&(c=c.split(""));if(a instanceof Array){if(d||(d=0),d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(vd(a[g],b,c,d+1,e));return f.join(c[d])}}else if(typeof a==="object")return e||(e=0),e<2?encodeURIComponent(ud(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function wd(a){let b=1;for(const c in a.h)c.length>b&&(b=c.length);return 3997-b-a.i.length-1}
function xd(a,b){let c="https://pagead2.googlesyndication.com"+b,d=wd(a)-b.length;if(d<0)return"";a.g.sort((f,g)=>f-g);b=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let k=0;k<h.length;k++){if(!d){b=b==null?g:b;break}let l=ud(h[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;c+=l;e=a.i;break}b=b==null?g:b}}}a="";b!=null&&(a=`${e}${"trn"}=${b}`);return c+a}var yd=class{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function zd(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{sd(e),c=a.m(b,new hd(f,{message:id(f)}),void 0,void 0)}catch(g){a.l(217,g)}if(c){let g,h;(g=window.console)==null||(h=g.error)==null||h.call(g,f)}else throw f;}return d}function Ad(a,b){var c=Bd;return(...d)=>zd(c,a,()=>b.apply(void 0,d))}
var Ed=class{constructor(a=null){this.pinger=Cd;this.g=a;this.h=null;this.i=!1;this.m=this.l}l(a,b,c,d,e){e=e||"jserror";let f=void 0;try{const O=new yd;var g=O;g.g.push(1);g.h[1]=td("context",a);b.error&&b.meta&&b.id||(b=new hd(b,{message:id(b)}));g=b;if(g.msg){b=O;var h=g.msg.substring(0,512);b.g.push(2);b.h[2]=td("msg",h)}var k=g.meta||{};h=k;if(this.h)try{this.h(h)}catch(A){}if(d)try{d(h)}catch(A){}d=O;k=[k];d.g.push(3);d.h[3]=k;d=m;k=[];let Q;h=null;do{var l=d;try{var n;if(n=!!l&&l.location.href!=
null)b:{try{Sa(l.foo);n=!0;break b}catch(A){}n=!1}var p=n}catch(A){p=!1}p?(Q=l.location.href,h=l.document&&l.document.referrer||null):(Q=h,h=null);k.push(new ld(Q||""));try{d=l.parent}catch(A){d=null}}while(d&&l!=d);for(let A=0,Nc=k.length-1;A<=Nc;++A)k[A].depth=Nc-A;l=m;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==k.length-1)for(p=1;p<k.length;++p){var t=k[p];t.url||(t.url=l.location.ancestorOrigins[p-1]||"",t.W=!0)}var B=k;let Y=new ld(m.location.href,!1);l=null;
const sb=B.length-1;for(t=sb;t>=0;--t){var C=B[t];!l&&jd.test(C.url)&&(l=C);if(C.url&&!C.W){Y=C;break}}C=null;const be=B.length&&B[sb].url;Y.depth!=0&&be&&(C=B[sb]);f=new kd(Y,C);if(f.h){B=O;var K=f.h.url||"";B.g.push(4);B.h[4]=td("top",K)}var tb={url:f.g.url||""};if(f.g.url){const A=f.g.url.match(Ea);var pa=A[1],Oc=A[3],Pc=A[4];K="";pa&&(K+=pa+":");Oc&&(K+="//",K+=Oc,Pc&&(K+=":"+Pc));var Qc=K}else Qc="";pa=O;tb=[tb,{url:Qc}];pa.g.push(5);pa.h[5]=tb;Dd(this.pinger,e,O,this.i,c)}catch(O){try{let Q,
Y;Dd(this.pinger,e,{context:"ecmserr",rctx:a,msg:id(O),url:(Y=(Q=f)==null?void 0:Q.g.url)!=null?Y:""},this.i,c)}catch(Q){}}return!0}};class Fd{};function Dd(a,b,c,d=!1,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof yd?f=c:(f=new yd,Rc(c,(h,k)=>{var l=f;const n=l.l++;h=td(k,h);l.g.push(n);l.h[n]=h}));const g=xd(f,"/pagead/gen_204?id="+b+"&");g&&Zc(m,g)}catch(f){}}function Gd(){var a=Cd,b=window.google_srt;b>=0&&b<=1&&(a.g=b)}class Hd{constructor(){this.g=Math.random()}};const Id=[oa,qa,sa,ra,na,ua,va,ta,wa];function Jd(a,b){if(a instanceof q)return a;const c=za(a,Id);c===la&&b(a);return c}
function Kd(a){var b=`${fd.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c={id:"unsafeurl",ctx:a,url:c};var d=[];for(e in c)Fa(e,c[e],d);var e=d.join("&");if(e){c=b.indexOf("#");c<0&&(c=b.length);d=b.indexOf("?");let f;d<0||d>c?(d=c,f=""):f=b.substring(d+1,c);c=[b.slice(0,d),f,b.slice(c)];d=c[1];c[1]=e?d?d+"&"+e:e:d;e=c[0]+(c[1]?"?"+c[1]:"")+c[2]}else e=b;navigator.sendBeacon&&navigator.sendBeacon(e,"")}};let Cd,Bd;
const X=new class{constructor(a,b){this.h=[];this.i=b||m;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.h=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.g=rd()||(c!=null?c:Math.random()<a)}start(a,b){if(!this.g)return null;a=new pd(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;W&&rd()&&W.mark(b);return a}end(a){if(this.g&&typeof a.value==="number"){a.duration=(od()||nd())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;W&&rd()&&W.mark(b);!this.g||
this.h.length>2048||this.h.push(a)}}}(1,window);var Ld=()=>{window.google_measure_js_timing||(X.g=!1,X.h!==X.i.google_js_reporting_queue&&(rd()&&Array.prototype.forEach.call(X.h,sd,void 0),X.h.length=0))};(a=>{Cd=a!=null?a:new Hd;typeof window.google_srt!=="number"&&(window.google_srt=Math.random());Gd();Bd=new Ed(X);Bd.h=b=>{const c=ad;c!==0&&(b.jc=String(c),b.shv=dd(c))};Bd.i=!0;window.document.readyState=="complete"?Ld():X.g&&U(window,"load",()=>{Ld()})})();
var Md=(a,b)=>Ad(a,b),Nd=(a,b)=>{var c=Fd;var d="V";c.V&&c.hasOwnProperty(d)||(d=new c,c.V=d);c=[];!b.eid&&c.length&&(b.eid=c.toString());Dd(Cd,a,b,!0)};function Od(a=window){return a};Mc({va:0,ua:1,ra:2,ma:3,sa:4,na:5,ta:6,pa:7,qa:8,la:9,oa:10,wa:11});Mc({ya:0,za:1,xa:2});function Pd(a){var b=new Qd;rb(b.j[w]|0);b=hc(b,1,Gb,2,!0);if(Array.isArray(a)){var c=a.length;for(let d=0;d<c;d++)b.push(Fb(a[d]))}else for(c of a)b.push(Fb(c))}var Qd=class extends S{};[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].reduce((a,b)=>a+b);Pd([1,8,9,10,11,12,2,3,4,5,15,16,19,20,21,23]);Pd([1,6,7,9,10,11,12,2,3,4,5,13,14,18,19,20,21,23]);Pd([1,6,7,9,10,11,12,22,2,3,4,5,13,14,17,18,19,20,21,23]);new Qd;var Rd=(a,b)=>{b=M(a,2)||b;if(!b)return"";if(L(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];mc(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Sd=(a,b=[])=>{b=b.length>0?b:gd("data-asoch-targets");a=nc(a);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let k of e)if(!a.has(k)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var g=a.get(e[d]);f=tc(dc(f));g=tc(g);const k=Math.max(f.length,g.length);for(let l=0;l<k;++l)f[l]==null&&(f[l]=g[l]);f=new oc(f)}e=mc(f,4);Gb(D(f,5))!=null&&e.set("nb",N(f,5,0).toString());c.push({element:b[h],data:f})}else Nd("gdn-asoch",{type:1,data:d})}return c},Vd=(a,b,c,d)=>{c=Rd(b,c);if(c.length!==0){var e=d===609;if(Ia(c,"ase")==="2"&&d!==1087){var f;const g=!((f=V.featurePolicy)==null||!f.allowedFeatures().includes("attribution-reporting"));f=e?4:g?6:5;let h="";const k=
ha(new ka({url:c}),0);e||g&&(!k||k.version!==3)?(c=Td(c,"nis",f.toString()),a.setAttribute("attributionsrc",h)):g&&k&&k.version===3&&(h=Td(k.u,"nis",f.toString()),a.setAttribute("attributionsrc",h))}e&&G(b,wc,24)&&(e=J(b,wc,24),a.setAttribute("attributionDestination",M(e,2)),a.setAttribute("attributionSourceNonce",M(e,1)));(e=(e=cd(35))&&e.dataset.expanded?e.dataset.expanded:null)&&d===557&&(c=Ud(c,"expanded",e));Ba(a,Jd(c,Kd(d)));a.target||(a.target=y(D(b,11))!=null?M(b,11):"_top")}},Wd=a=>{for(const b of a)if(a=
b.data,b.element.tagName=="A"&&!L(a,1)){const c=b.element;Vd(c,a,c.href,609)}},Ud=(a,b,c)=>{b=encodeURIComponent(b);const d=encodeURIComponent(c);c=new RegExp("[?&]"+b+"=([^&]+)");const e=c.exec(a);b=b+"="+d;return e?a.replace(c,e[0].charAt(0)+b):a.replace("?","?"+b+"&")},Xd=a=>{const b=m.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&G(a,Cc,8)){const d=M(J(a,Cc,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,M(J(a,Cc,8),6));break}}},Yd=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&G(a,
T,12)&&(d.push(J(a,T,12)),c.push(J(a,T,12).v()));e=(f,g)=>{if(g)for(const h of d)g[h.v()]&&h.Y(!0)};a=m.oneAfmaInstance;for(const f of c){let g;(g=a)==null||g.canOpenAndroidApp(f,e,()=>{},b)}},$d=(a,b,c,d)=>{if(!b||!G(b,Cc,8))return!1;const e=J(b,Cc,8);let f=M(e,2);mc(b,10).forEach((h,k)=>{f=Ud(f,k,h)});Zd(b)&&L(b,15)&&!/[?&]label=/.test(c)&&(c=Td(c,"label","deep_link_fallback"));const g=h=>d.openStoreOverlay(h,void 0,M(e,6));return d.redirectForStoreU2({clickUrl:c,trackingUrl:M(e,3),finalUrl:f,pingFunc:L(b,
13)?d.httpTrack:d.click,openFunc:(a==null?0:L(a,1))?g:d.openIntentOrNativeApp,isExternalClickUrl:L(b,13)})},ae=(a,b,c,d)=>{c&&c.startsWith("intent:")?d.openIntentOrNativeApp(c):a?b?d.openBrowser(c):d.openChromeCustomTab(c):d.openSystemBrowser(c,{useFirstPackage:!0,useRunningProcess:!0})},de=(a,b,c,d,e,f,g,h=!1,k=!1)=>{const l=L(e,15);if(!k&&l&&y(D(e,22))!=null)ae(c,d,M(e,22),g);else{var n=ha(new ka({url:f}),0);k=l&&(n&&n.version===3||k);if(a&&b&&!k&&(f=ce(f,g.click,!0),h&&(e==null?0:L(e,21,!1))))return;
ae(c,d,f,g)}},ce=(a,b=null,c=!1)=>{if(b===null){({aa:b}={});var d=new ka({url:a,aa:b});d.C?(b=ha(d,1))?(fetch(b.u,{method:"GET",keepalive:!0,mode:"no-cors",redirect:"follow"}),b=b.D):b=a:b=(b=ha(d,0))?navigator.sendBeacon?navigator.sendBeacon(b.u,"")?b.D:ia(d,2):ia(d,0):a;return b}d=ha(new ka({url:a}),0);if(!d)return a;a=d.u;if(d.version===4&&c){var e=encodeURIComponent("ase");c=encodeURIComponent("3");e=new RegExp("[?&]"+e+"=([^&]+)","g");let f=0;const g=[];for(let h=e.exec(a);h!==null;){if(h[1]==
c){let k=h[0].charAt(0)=="?"?1:0;g.push(a.slice(f,h.index+k));f=h.index+h[0].length+k}h=e.exec(a)}g.push(a.slice(f));a=g.join("")}b(a);return d.D},ee=(a,b=!0)=>{b&&fd.fetch?fd.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||Zc(fd,a)}):Zc(fd,a)},Td=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));return a.replace("?","?"+b+"="+c+"&")},Zd=a=>{for(const b of Ec(a))if(N(b,1,0)===3&&M(b,2))return!0;return!1};var Z=(a,b)=>a&&(a=a.match(b+"=([^&]+)"))&&a.length==2?a[1]:"";var fe=class extends S{};function ge(a,b){return P(a,2,b)}function he(a,b){return P(a,3,b)}function ie(a,b){return P(a,4,b)}function je(a,b){return P(a,5,b)}function ke(a,b){return P(a,9,b)}function le(a,b){{const l=a.j;let n=l[w]|0;rb(n);if(b==null)F(l,n,10);else{var c=b[w]|0,d=c,e=I(c),f=e||Object.isFrozen(b),g=!0,h=!0;for(let p=0;p<b.length;p++){var k=b[p];e||(k=!!((k.j[w]|0)&2),g&&(g=!k),h&&(h=k))}e||(c=g?13:5,c=h?c|16:c&-17);f&&c===d||(b=x(b),d=0,c=H(c,n),c=kc(c,n,!0));c!==d&&(b[w]=c);F(l,n,10,b)}}return a}
function me(a,b){return E(a,11,Eb(b))}function ne(a,b){return P(a,1,b)}function oe(a,b){return E(a,7,Eb(b))}var pe=class extends S{};const qe="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function re(a){let b;return(b=a.google_tag_data)!=null?b:a.google_tag_data={}}function se(a){let b,c;return typeof((b=a.navigator)==null?void 0:(c=b.userAgentData)==null?void 0:c.getHighEntropyValues)==="function"}
function te(){var a=window;if(!se(a))return null;const b=re(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(qe).then(c=>{b.uach!=null||(b.uach=c);return c});return b.uach_promise=a}
function ue(a){let b;return me(le(je(ge(ne(ie(oe(ke(he(new pe,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),((b=a.fullVersionList)==null?void 0:b.map(c=>{var d=new fe;d=P(d,1,c.brand);return P(d,2,c.version)}))||[]),a.wow64||!1)}function ve(){let a,b;return(b=(a=te())==null?void 0:a.then(c=>ue(c)))!=null?b:null};function we(a){for(const b of a)if(b.element.tagName=="A"){a=b.element;const c=b.data;y(D(c,2))==null&&P(c,2,a.href)}}function xe(a,b){return Ca(a,c=>c.element===b)}function ye(a){Wc(Md(556,()=>{new ze(a||{})}))}
function Ae(a,b){if(!b.defaultPrevented||a.J===b){for(var c,d,e=b.target;(!c||!d)&&e;){d||e.tagName!="A"||(d=e);var f=e.hasAttribute("data-asoch-targets"),g=e.hasAttribute("data-asoch-fixed-value");if(!c)if(g)c=new oc(JSON.parse(e.getAttribute("data-asoch-fixed-value"))||[]);else if(e.tagName=="A"||f)if(f=f&&e.getAttribute("data-asoch-is-dynamic")==="true"?Sd(a.h,[e]):a.g,f=xe(f,e))c=f.data;e=e.parentElement}e=c&&!L(c,1);if(a.G&&a.l&&b.defaultPrevented)Be(a,b,d,e?c:a.l);else{if(e){if(!a.G&&b.defaultPrevented){Be(a,
b,d,c);return}f=c;for(var h of hc(f,6,y,gc()))ee(h)}a.M&&e&&L(c,21,!1)&&(Sc(b),(h=c)&&M(h,2)&&(f=Ud(M(h,2),"ae","1"),P(h,2,f)));if(d&&e){c=e?c:null;(h=xe(a.g,d))?h=h.data:(h=new oc,P(h,2,d.href),P(h,11,d.target||"_top"),a.g.push({element:d,data:h}));Vd(d,c||h,M(h,2),557);Ce(a,b,d,c);for(var k of hc(a.h,17,y,gc()))h=V.body,e={},typeof window.CustomEvent==="function"?f=new CustomEvent(k,e):(f=document.createEvent("CustomEvent"),f.initCustomEvent(k,!!e.bubbles,!!e.cancelable,e.detail)),h.dispatchEvent(f);
var l;if(c==null?0:(l=J(c,Dc,26))==null?0:y(D(l,1))!=null){l=new xc;Gb(D(c,5))!=null?(k=l,h=N(c,5,0),rc(k,1,h)):(k=Z(d.href,"nb"),k!=""&&rc(l,1,+k));k=Z(d.href,"nx");k!=""&&qc(l,2,+k);k=Z(d.href,"ny");k!=""&&qc(l,3,+k);k=Z(d.href,"bg");k!=""&&P(l,4,k);k=Z(d.href,"nm");k!=""&&qc(l,5,+k);k=Z(d.href,"mb");k!=""&&qc(l,6,+k);k=d.href;h=k.search(Ha);e=0;for(g=[];(f=Ga(k,e,"bg",h))>=0;)g.push(k.substring(e,f)),e=Math.min(k.indexOf("&",f)+1||h,h);g.push(k.slice(e));k=g.join("").replace(Ja,"$1");Ba(d,Jd(k,
Kd(1211)));f=M(J(c,Dc,26),1);k=M(J(c,Dc,26),2);h=Hb(D(c,20))!=null?pc(c,20):null;g=vc(l);l=a.o;e=Od(m);var n=new Gc;f=P(n,1,f);f=P(f,4,g);f=P(f,10,Date.now().toString());h!==null&&qc(f,2,h);l!==null&&P(f,3,l);rc(f,9,7);var p;e==null||(p=e.fence)==null||p.setReportEventDataForAutomaticBeacons({eventType:"reserved.top_navigation_start",eventData:JSON.stringify(f),destination:["buyer"],once:!0});var t;e==null||(t=e.fence)==null||t.reportEvent({eventType:"click",eventData:k,destination:["component-seller"]})}L(a.h,
16)||a.P?De(a,b,d,c):(p="",(t=m.oneAfmaInstance)&&(p=t.appendClickSignals(d.href)),Ee(a,b,d,c,p))}}}}
function Be(a,b,c,d){if(a.J===b&&a.K){const f=new zc(a.K),g=M(d,9);var e="";switch(N(f,4,1)){case 2:if(pc(f,2))e="blocked_fast_click";else if(M(f,1)||M(f,7))e="blocked_border_click";break;case 3:e=V;e=e.getElementById?e.getElementById("common_15click_anchor"):null;const h=window;if(typeof h.copfcChm==="function"&&e){d=dc(d);rc(d,5,12);mc(d,4).set("nb",(12).toString());const k=xe(a.g,e);k?k.data=d:a.g.push({element:e,data:d});!a.U&&c&&(Ce(a,b,c,d),P(d,2,c.href));h.copfcChm(b,Rd(d,e.href),null,G(f,
yc,10)?vc(J(f,yc,10)):null);a.U&&Ce(a,b,e,d)}e="onepointfiveclick_first_click"}g&&e&&(c=g+"&label="+e,e==="onepointfiveclick_first_click"&&(c+="&ccx="+b.clientX+"&ccy="+b.clientY),ee(c,!1));ed(a.R)}}
function Ce(a,b,c,d){if(!L(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(Ba(c,Jd(e[0],Kd(557)));!c.id;)if(f="asoch-id-"+(Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),!V.getElementById(f)){c.id=f;break}f=c.id;typeof window.xy==="function"&&window.xy(b,c,V.body);typeof window.mb==="function"&&window.mb(c);typeof window.bgz==="function"&&window.bgz(f);typeof window.ja===
"function"&&window.ja(f,d?N(d,5,0):0);typeof window.vti==="function"&&window.vti(c);a.i&&typeof window.ss==="function"&&(a.T?window.ss(f,1,a.i):window.ss(a.i,1));if(e.length>0){let g;b=a.o.length>0&&(d==null||(g=J(d,Dc,26))==null||y(D(g,1))==null)?c.href+"&uach="+encodeURIComponent(a.o)+e[1]:c.href+e[1];Ba(c,Jd(b,Kd(557)))}}}
async function De(a,b,c,d){let e="";var f=m.oneAfmaInstance;if(f&&(b.preventDefault(),e=await f.appendClickSignalsAsync(c.href)||"",a.P)){if(a.ca)return;if(f=await f.getNativeClickMeta()){if(f.customClickGestureEligible)return;e=Td(e,"nas",f.encodedNas)}}Ee(a,b,c,d,e)}
function Ee(a,b,c,d,e){a.O++;a.B<0&&(a.B=Date.now());const f=L(a.h,2),g=f&&Date.now()-a.S>300,h=m.oneAfmaInstance;h?(Sc(b),(()=>{var k=L(d,13)?e:h.logScionEventAndAddParam(e);if(!a.C&&d&&G(d,T,12)){var l=J(d,T,12).v();var n="";if(Ec(d).length>0)for(const p of Ec(d))n+=M(p,2)+" "+p.v()+" ";L(J(d,T,12),2)?(h.click(k),h.openAndroidApp(l),l=!0):l=!1}else l=!1;l||$d(a.m,d,k,h)||de(f,g,a.ea,a.C,d,k,h,a.M,a.da)})()):(b=window,a.ba&&b.pawsig&&typeof b.pawsig.clk==="function"?(Nd("paw_sigs",{msg:"click",count:a.O.toString(),
elapsed:(Date.now()-a.B).toString()}),b.pawsig.clk(c)):g&&(b=c.getAttribute("attributionsrc")!=null&&Ia(c.getAttribute("attributionsrc"),"nis")==="6"?ce(c.href,()=>{}):ce(c.href),b!==c.href&&Ba(c,Jd(b,Kd(599)))));g&&(a.S=Date.now());ed(a.R)}
var ze=class{constructor(a){this.C=Va||Ta||Wa||Ua;var b=gd("data-asoch-meta");if(b.length!==1)Nd("gdn-asoch",{type:2,data:b.length});else{this.R=70;this.h=new Fc(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.N=a["extra-meta"]?new Fc(JSON.parse(a["extra-meta"])):null;this.P=a["is-fsn"]==="true";this.ca=a["is-tap-disabled-for-fsn"]==="true";this.m=a["ios-store-overlay-config"]?new Ac(JSON.parse(a["ios-store-overlay-config"])):null;this.ea=a["use-cct-over-browser"]==="true";this.U=a["correct-redirect-url-for-och-15-click"]===
"true";this.da=a["spitzer-use-click-url-for-fallback"]==="true";this.G=a["default-msg-in-och"]==="true";this.ba=a["enable-paw"]==="true";this.M=a["allow-redirection-muted-in-och"]==="true";this.o="";b=ve();b!=null&&b.then(d=>{var e=vc(d);d=[];var f=0;for(var g=0;g<e.length;g++){var h=e.charCodeAt(g);h>255&&(d[f++]=h&255,h>>=8);d[f++]=h}e=3;e===void 0&&(e=0);if(!Ya)for(Ya={},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),g=["+/=","+/","-_=","-_.","-_"],h=0;h<5;h++){var k=
f.concat(g[h].split(""));Xa[h]=k;for(var l=0;l<k.length;l++){var n=k[l];Ya[n]===void 0&&(Ya[n]=l)}}e=Xa[e];f=Array(Math.floor(d.length/3));g=e[64]||"";for(h=k=0;k<d.length-2;k+=3){var p=d[k],t=d[k+1];n=d[k+2];l=e[p>>2];p=e[(p&3)<<4|t>>4];t=e[(t&15)<<2|n>>6];n=e[n&63];f[h++]=l+p+t+n}l=0;n=g;switch(d.length-k){case 2:l=d[k+1],n=e[(l&15)<<2]||g;case 1:d=d[k],f[h]=e[d>>2]+e[(d&3)<<4|l>>4]+n+g}this.o=f.join("")});this.g=Sd(this.h);this.G&&(this.l=null,nc(this.h).forEach(d=>{this.l!=null||y(D(d,2))==null||
y(D(d,9))==null||L(d,13)||(this.l=d)}));this.fa=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.S=-Infinity;this.B=this.O=0;this.i=M(this.h,5)||"";this.T=L(this.h,11);this.N&&(this.T=L(this.N,11));this.K=this.J=null;L(this.h,3)||(Wd(this.g),E(this.h,3,Eb(!0)));we(this.g);a=m.oneAfmaInstance;!this.C&&a&&Yd(this.g,this.fa);var c;if(a&&((c=this.m)==null?0:L(c,2)))switch(c=()=>{const d=pc(this.m,4);d>0?m.setTimeout(()=>{Xd(this.g)},d):Xd(this.g)},N(this.m,3,0)){case 1:a.runOnOnShowEvent(c);
break;case 2:Xc(c);break;default:Xd(this.g)}U(V,"click",Md(557,d=>{Ae(this,d)}),Ic);U(V,"auxclick",Md(557,d=>{d.button===1&&Ae(this,d)}),Ic);this.i&&typeof window.ss==="function"&&U(V.body,"mouseover",Md(626,()=>{window.ss(this.i,0)}),Jc);typeof window.ivti==="function"&&window.ivti(V.body);c=window;c.googqscp&&typeof c.googqscp.registerCallback==="function"&&c.googqscp.registerCallback((d,e)=>{this.J=d;this.K=e});bd()}}};var Fe=Md(555,a=>ye(a));ad=70;const Ge=cd(70,document.currentScript);if(Ge==null)throw Error("JSC not found 70");const He={},Ie=Ge.attributes;for(let a=Ie.length-1;a>=0;a--){const b=Ie[a].name;b.indexOf("data-jcp-")===0&&(He[b.substring(9)]=Ie[a].value)}Fe(He);}).call(this);
