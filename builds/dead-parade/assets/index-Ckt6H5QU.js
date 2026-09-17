(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="180",gc=0,no=1,_c=2,Rl=1,Cl=2,Sn=3,Un=0,Ft=1,Ht=2,Ln=0,Ti=1,io=2,so=3,ro=4,xc=5,Xn=100,vc=101,Mc=102,Sc=103,Ec=104,yc=200,Tc=201,bc=202,Ac=203,Vr=204,Wr=205,wc=206,Rc=207,Cc=208,Pc=209,Ic=210,Lc=211,Dc=212,Uc=213,Nc=214,Xr=0,qr=1,Yr=2,Ai=3,$r=4,Kr=5,Zr=6,jr=7,Pl=0,Fc=1,Oc=2,Dn=0,Bc=1,zc=2,kc=3,Il=4,Hc=5,Gc=6,Vc=7,Ll=300,wi=301,Ri=302,Jr=303,Qr=304,Qs=306,Ws=1e3,Yn=1001,ea=1002,Gt=1003,Wc=1004,cs=1005,on=1006,sr=1007,$n=1008,un=1009,Dl=1010,Ul=1011,ji=1012,Ua=1013,jn=1014,ln=1015,rs=1016,Na=1017,Fa=1018,Ji=1020,Nl=35902,Fl=35899,Ol=1021,Bl=1022,Qt=1023,Qi=1026,es=1027,Oa=1028,Ba=1029,zl=1030,za=1031,ka=1033,zs=33776,ks=33777,Hs=33778,Gs=33779,ta=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,la=37808,ca=37809,ha=37810,da=37811,ua=37812,fa=37813,pa=37814,ma=37815,ga=37816,_a=37817,xa=37818,va=37819,Ma=37820,Sa=37821,Ea=36492,ya=36494,Ta=36495,ba=36283,Aa=36284,wa=36285,Ra=36286,Xc=3200,qc=3201,kl=0,Yc=1,In="",Pt="srgb",Ci="srgb-linear",Xs="linear",je="srgb",ri=7680,ao=519,$c=512,Kc=513,Zc=514,Hl=515,jc=516,Jc=517,Qc=518,eh=519,oo=35044,qi=35048,lo="300 es",cn=2e3,qs=2001;class Li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let co=1234567;const Yi=Math.PI/180,ts=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function Ha(s,e){return(s%e+e)%e}function th(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function nh(s,e,t){return s!==e?(t-s)/(e-s):0}function $i(s,e,t){return(1-t)*s+t*e}function ih(s,e,t,n){return $i(s,e,1-Math.exp(-t*n))}function sh(s,e=1){return e-Math.abs(Ha(s,e*2)-e)}function rh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ah(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function oh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function lh(s,e){return s+Math.random()*(e-s)}function ch(s){return s*(.5-Math.random())}function hh(s){s!==void 0&&(co=s);let e=co+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dh(s){return s*Yi}function uh(s){return s*ts}function fh(s){return(s&s-1)===0&&s!==0}function ph(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function mh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ca={DEG2RAD:Yi,RAD2DEG:ts,generateUUID:Di,clamp:Ve,euclideanModulo:Ha,mapLinear:th,inverseLerp:nh,lerp:$i,damp:ih,pingpong:sh,smoothstep:rh,smootherstep:ah,randInt:oh,randFloat:lh,randFloatSpread:ch,seededRandom:hh,degToRad:dh,radToDeg:uh,isPowerOfTwo:fh,ceilPowerOfTwo:ph,floorPowerOfTwo:mh,setQuaternionFromProperEuler:gh,normalize:wt,denormalize:Si};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*x,T=u>=0?1:-1,S=1-u*u;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,u*T);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*T;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,d=d*m+x*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ho.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ho.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rr.copy(this).projectOnVector(e),this.sub(rr)}reflect(e){return this.sub(rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rr=new D,ho=new Jn;class Fe{constructor(e,t,n,i,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],u=i[6],T=i[1],S=i[4],v=i[7],A=i[2],w=i[5],C=i[8];return r[0]=a*x+o*T+l*A,r[3]=a*m+o*S+l*w,r[6]=a*u+o*v+l*C,r[1]=c*x+h*T+d*A,r[4]=c*m+h*S+d*w,r[7]=c*u+h*v+d*C,r[2]=f*x+p*T+g*A,r[5]=f*m+p*S+g*w,r[8]=f*u+p*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*d+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ar.makeScale(e,t)),this}rotate(e){return this.premultiply(ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ar=new Fe;function Gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _h(){const s=Ys("canvas");return s.style.display="block",s}const uo={};function ns(s){s in uo||(uo[s]=!0,console.warn(s))}function xh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const fo=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),po=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vh(){const s={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===je&&(i.r=yn(i.r),i.g=yn(i.g),i.b=yn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===je&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?Xs:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ci]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:je,toXYZ:fo,fromXYZ:po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),s}const Ye=vh();function yn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ai;class Mh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ai===void 0&&(ai=Ys("canvas")),ai.width=e.width,ai.height=e.height;const i=ai.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yn(t[n]/255)*255):t[n]=yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class Ga{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(or(i[a].image)):r.push(or(i[a]))}else r=or(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function or(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Mh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;const lr=new D;class Tt extends Li{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Yn,i=Yn,r=on,a=$n,o=Qt,l=un,c=Tt.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Di(),this.name="",this.source=new Ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lr).x}get height(){return this.source.getSize(lr).y}get depth(){return this.source.getSize(lr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ll)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Ll;Tt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,A=(u+1)/2,w=(h+f)/4,C=(d+x)/4,I=(g+m)/4;return S>v&&S>A?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=C/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=I/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(f-h)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yh extends Li{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Tt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ga(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vl extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Th extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hs.copy(n.boundingBox)),hs.applyMatrix4(e.matrixWorld),this.union(hs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fi),ds.subVectors(this.max,Fi),oi.subVectors(e.a,Fi),li.subVectors(e.b,Fi),ci.subVectors(e.c,Fi),bn.subVectors(li,oi),An.subVectors(ci,li),On.subVectors(oi,ci);let t=[0,-bn.z,bn.y,0,-An.z,An.y,0,-On.z,On.y,bn.z,0,-bn.x,An.z,0,-An.x,On.z,0,-On.x,-bn.y,bn.x,0,-An.y,An.x,0,-On.y,On.x,0];return!cr(t,oi,li,ci,ds)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,oi,li,ci,ds))?!1:(us.crossVectors(bn,An),t=[us.x,us.y,us.z],cr(t,oi,li,ci,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new D,new D,new D,new D,new D,new D,new D,new D],Kt=new D,hs=new ti,oi=new D,li=new D,ci=new D,bn=new D,An=new D,On=new D,Fi=new D,ds=new D,us=new D,Bn=new D;function cr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bh=new ti,Oi=new D,hr=new D;class ni{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(hr)),this.expandByPoint(Oi.copy(e.center).sub(hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new D,dr=new D,fs=new D,wn=new D,ur=new D,ps=new D,fr=new D;class er{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dr.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(dr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=wn.dot(this.direction),l=-wn.dot(fs),c=wn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(dr).addScaledVector(fs,f),p}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),i=gn.dot(gn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,i,r){ur.subVectors(t,e),ps.subVectors(n,e),fr.crossVectors(ur,ps);let a=this.direction.dot(fr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(ps.crossVectors(wn,ps));if(l<0)return null;const c=o*this.direction.dot(ur.cross(wn));if(c<0||l+c>a)return null;const h=-o*wn.dot(fr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,d,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hi.setFromMatrixColumn(e,0).length(),r=1/hi.setFromMatrixColumn(e,1).length(),a=1/hi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f-x*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=a*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ah,e,wh)}lookAt(e,t,n){const i=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Rn.crossVectors(n,zt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Rn.crossVectors(n,zt)),Rn.normalize(),ms.crossVectors(zt,Rn),i[0]=Rn.x,i[4]=ms.x,i[8]=zt.x,i[1]=Rn.y,i[5]=ms.y,i[9]=zt.y,i[2]=Rn.z,i[6]=ms.z,i[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],u=n[14],T=n[3],S=n[7],v=n[11],A=n[15],w=i[0],C=i[4],I=i[8],y=i[12],E=i[1],P=i[5],F=i[9],k=i[13],q=i[2],W=i[6],X=i[10],Z=i[14],H=i[3],re=i[7],ce=i[11],ye=i[15];return r[0]=a*w+o*E+l*q+c*H,r[4]=a*C+o*P+l*W+c*re,r[8]=a*I+o*F+l*X+c*ce,r[12]=a*y+o*k+l*Z+c*ye,r[1]=h*w+d*E+f*q+p*H,r[5]=h*C+d*P+f*W+p*re,r[9]=h*I+d*F+f*X+p*ce,r[13]=h*y+d*k+f*Z+p*ye,r[2]=g*w+x*E+m*q+u*H,r[6]=g*C+x*P+m*W+u*re,r[10]=g*I+x*F+m*X+u*ce,r[14]=g*y+x*k+m*Z+u*ye,r[3]=T*w+S*E+v*q+A*H,r[7]=T*C+S*P+v*W+A*re,r[11]=T*I+S*F+v*X+A*ce,r[15]=T*y+S*k+v*Z+A*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*l*d-i*c*d-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-i*a*p+i*c*h-r*l*h)+m*(+t*c*d-t*o*p-r*a*d+n*a*p+r*o*h-n*c*h)+u*(-i*o*h-t*l*d+t*o*f+i*a*d-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],T=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,S=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,v=h*x*c-g*d*c+g*o*p-a*x*p-h*o*u+a*d*u,A=g*d*l-h*x*l-g*o*f+a*x*f+h*o*m-a*d*m,w=t*T+n*S+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=T*C,e[1]=(x*f*r-d*m*r-x*i*p+n*m*p+d*i*u-n*f*u)*C,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*u+n*l*u)*C,e[3]=(d*l*r-o*f*r-d*i*c+n*f*c+o*i*p-n*l*p)*C,e[4]=S*C,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*u+t*f*u)*C,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*u-t*l*u)*C,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*p+t*l*p)*C,e[8]=v*C,e[9]=(g*d*r-h*x*r-g*n*p+t*x*p+h*n*u-t*d*u)*C,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*u+t*o*u)*C,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*p-t*o*p)*C,e[12]=A*C,e[13]=(h*x*i-g*d*i+g*n*f-t*x*f-h*n*m+t*d*m)*C,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*d*i-h*o*i+h*n*l-t*d*l-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,g=r*d,x=a*h,m=a*d,u=o*d,T=l*c,S=l*h,v=l*d,A=n.x,w=n.y,C=n.z;return i[0]=(1-(x+u))*A,i[1]=(p+v)*A,i[2]=(g-S)*A,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(f+u))*w,i[6]=(m+T)*w,i[7]=0,i[8]=(g+S)*C,i[9]=(m-T)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hi.set(i[0],i[1],i[2]).length();const a=hi.set(i[4],i[5],i[6]).length(),o=hi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/r,h=1/a,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=cn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===cn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===qs)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=cn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===cn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===qs)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hi=new D,Zt=new Je,Ah=new D(0,0,0),wh=new D(1,1,1),Rn=new D,ms=new D,zt=new D,mo=new Je,go=new Jn;class fn{constructor(e=0,t=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return go.setFromEuler(this),this.setFromQuaternion(go,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class Va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rh=0;const _o=new D,di=new Jn,_n=new Je,gs=new D,Bi=new D,Ch=new D,Ph=new Jn,xo=new D(1,0,0),vo=new D(0,1,0),Mo=new D(0,0,1),So={type:"added"},Ih={type:"removed"},ui={type:"childadded",child:null},pr={type:"childremoved",child:null};class it extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new D,t=new fn,n=new Jn,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new Fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(xo,e)}rotateY(e){return this.rotateOnAxis(vo,e)}rotateZ(e){return this.rotateOnAxis(Mo,e)}translateOnAxis(e,t){return _o.copy(e).applyQuaternion(this.quaternion),this.position.add(_o.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xo,e)}translateY(e){return this.translateOnAxis(vo,e)}translateZ(e){return this.translateOnAxis(Mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Bi,gs,this.up):_n.lookAt(gs,Bi,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),di.setFromRotationMatrix(_n),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(So),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),pr.child=e,this.dispatchEvent(pr),pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(So),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Ch),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,Ph,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new D(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new D,xn=new D,mr=new D,vn=new D,fi=new D,pi=new D,Eo=new D,gr=new D,_r=new D,xr=new D,vr=new ut,Mr=new ut,Sr=new ut;class Jt{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){jt.subVectors(i,t),xn.subVectors(n,t),mr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(xn),l=jt.dot(mr),c=xn.dot(xn),h=xn.dot(mr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return vr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),vr.fromBufferAttribute(e,t),Mr.fromBufferAttribute(e,n),Sr.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(vr,r.x),a.addScaledVector(Mr,r.y),a.addScaledVector(Sr,r.z),a}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),xn.subVectors(e,t),jt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Jt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;fi.subVectors(i,n),pi.subVectors(r,n),gr.subVectors(e,n);const l=fi.dot(gr),c=pi.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,i);const h=fi.dot(_r),d=pi.dot(_r);if(h>=0&&d<=h)return t.copy(i);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(fi,a);xr.subVectors(e,r);const p=fi.dot(xr),g=pi.dot(xr);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(pi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Eo.subVectors(r,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Eo,o);const u=1/(m+x+f);return a=x*u,o=f*u,t.copy(n).addScaledVector(fi,a).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Er(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Ha(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Er(a,r,e+1/3),this.g=Er(a,r,e),this.b=Er(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Wl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Ye.workingToColorSpace(yt.copy(this),e),Math.round(Ve(yt.r*255,0,255))*65536+Math.round(Ve(yt.g*255,0,255))*256+Math.round(Ve(yt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Pt){Ye.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(_s);const n=$i(Cn.h,_s.h,t),i=$i(Cn.s,_s.s,t),r=$i(Cn.l,_s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ie;Ie.NAMES=Wl;let Lh=0;class ii extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ti,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Wr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class It extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new D,xs=new We;let Dh=0;class Dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class Xl extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ql extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uh=0;const Xt=new Je,yr=new it,mi=new D,kt=new ti,zi=new ti,vt=new D;class bt extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gl(e)?ql:Xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(kt.min,zi.min),kt.expandByPoint(vt),vt.addVectors(kt.max,zi.max),kt.expandByPoint(vt)):(kt.expandByPoint(zi.min),kt.expandByPoint(zi.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)vt.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(e,c),vt.add(mi)),i=Math.max(i,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new D,l[I]=new D;const c=new D,h=new D,d=new D,f=new We,p=new We,g=new We,x=new D,m=new D;function u(I,y,E){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[I].add(x),o[y].add(x),o[E].add(x),l[I].add(m),l[y].add(m),l[E].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let I=0,y=T.length;I<y;++I){const E=T[I],P=E.start,F=E.count;for(let k=P,q=P+F;k<q;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new D,v=new D,A=new D,w=new D;function C(I){A.fromBufferAttribute(i,I),w.copy(A);const y=o[I];S.copy(y),S.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(w,y);const P=v.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,y=T.length;I<y;++I){const E=T[I],P=E.start,F=E.count;for(let k=P,q=P+F;k<q;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new Dt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yo=new Je,zn=new er,vs=new ni,To=new D,Ms=new D,Ss=new D,Es=new D,Tr=new D,ys=new D,bo=new D,Ts=new D;class ht extends it{constructor(e=new bt,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Tr.fromBufferAttribute(d,e),a?ys.addScaledVector(Tr,h):ys.addScaledVector(Tr.sub(t),h))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(vs.containsPoint(zn.origin)===!1&&(zn.intersectSphere(vs,To)===null||zn.origin.distanceToSquared(To)>(e.far-e.near)**2))&&(yo.copy(r).invert(),zn.copy(e.ray).applyMatrix4(yo),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,A=S;v<A;v+=3){const w=o.getX(v),C=o.getX(v+1),I=o.getX(v+2);i=bs(this,u,e,n,c,h,d,w,C,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const T=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);i=bs(this,a,e,n,c,h,d,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=T,A=S;v<A;v+=3){const w=v,C=v+1,I=v+2;i=bs(this,u,e,n,c,h,d,w,C,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const T=m,S=m+1,v=m+2;i=bs(this,a,e,n,c,h,d,T,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Nh(s,e,t,n,i,r,a,o){let l;if(e.side===Ft?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;Ts.copy(o),Ts.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:s}}function bs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ms),s.getVertexPosition(l,Ss),s.getVertexPosition(c,Es);const h=Nh(s,e,t,n,Ms,Ss,Es,bo);if(h){const d=new D;Jt.getBarycoord(bo,Ms,Ss,Es,d),i&&(h.uv=Jt.getInterpolatedAttribute(i,o,l,c,d,new We)),r&&(h.uv1=Jt.getInterpolatedAttribute(r,o,l,c,d,new We)),a&&(h.normal=Jt.getInterpolatedAttribute(a,o,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};Jt.getNormal(Ms,Ss,Es,f.normal),h.face=f,h.barycoord=d}return h}class qt extends bt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(d,2));function g(x,m,u,T,S,v,A,w,C,I,y){const E=v/C,P=A/I,F=v/2,k=A/2,q=w/2,W=C+1,X=I+1;let Z=0,H=0;const re=new D;for(let ce=0;ce<X;ce++){const ye=ce*P-k;for(let He=0;He<W;He++){const et=He*E-F;re[x]=et*T,re[m]=ye*S,re[u]=q,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[u]=w>0?1:-1,h.push(re.x,re.y,re.z),d.push(He/C),d.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let ye=0;ye<C;ye++){const He=f+ye+W*ce,et=f+ye+W*(ce+1),st=f+(ye+1)+W*(ce+1),$e=f+(ye+1)+W*ce;l.push(He,et,$e),l.push(et,st,$e),H+=6}o.addGroup(p,H,y),p+=H,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const n=Pi(s[t]);for(const i in n)e[i]=n[i]}return e}function Fh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Oh={clone:Pi,merge:Rt};var Bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bh,this.fragmentShader=zh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pi(e.uniforms),this.uniformsGroups=Fh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $l extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new D,Ao=new We,wo=new We;class Yt extends $l{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Ao,wo),t.subVectors(wo,Ao)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,_i=1;class kh extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(gi,_i,e,t);i.layers=this.layers,this.add(i);const r=new Yt(gi,_i,e,t);r.layers=this.layers,this.add(r);const a=new Yt(gi,_i,e,t);a.layers=this.layers,this.add(a);const o=new Yt(gi,_i,e,t);o.layers=this.layers,this.add(o);const l=new Yt(gi,_i,e,t);l.layers=this.layers,this.add(l);const c=new Yt(gi,_i,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Kl extends Tt{constructor(e=[],t=wi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hh extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qt(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Ln});r.uniforms.tEquirect.value=t;const a=new ht(i,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=on),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class En extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gh={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new Wa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vh extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wh extends Tt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Gt,h=Gt,d,f){super(null,a,o,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro extends Dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const xi=new Je,Co=new Je,As=[],Po=new ti,Xh=new Je,ki=new ht,Hi=new ni;class Kn extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ro(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xh)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ti),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Po.copy(e.boundingBox).applyMatrix4(xi),this.boundingBox.union(Po)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xi),Hi.copy(e.boundingSphere).applyMatrix4(xi),this.boundingSphere.union(Hi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ki.geometry=this.geometry,ki.material=this.material,ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hi.copy(this.boundingSphere),Hi.applyMatrix4(n),e.ray.intersectsSphere(Hi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xi),Co.multiplyMatrices(n,xi),ki.matrixWorld=Co,ki.raycast(e,As);for(let a=0,o=As.length;a<o;a++){const l=As[a];l.instanceId=r,l.object=this,t.push(l)}As.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ro(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wh(new Float32Array(i*this.count),i,this.count,Oa,ln));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ar=new D,qh=new D,Yh=new Fe;class Vn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ar.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yh.getNormalMatrix(e),i=this.coplanarPoint(Ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ni,$h=new We(.5,.5),ws=new D;class Xa{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],u=r[11],T=r[12],S=r[13],v=r[14],A=r[15];if(i[0].setComponents(c-a,p-h,u-g,A-T).normalize(),i[1].setComponents(c+a,p+h,u+g,A+T).normalize(),i[2].setComponents(c+o,p+d,u+x,A+S).normalize(),i[3].setComponents(c-o,p-d,u-x,A-S).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,p-f,u-m,A-v).normalize();else if(i[4].setComponents(c-l,p-f,u-m,A-v).normalize(),t===cn)i[5].setComponents(c+l,p+f,u+m,A+v).normalize();else if(t===qs)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){kn.center.set(0,0,0);const t=$h.distanceTo(e.center);return kn.radius=.7071067811865476+t,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ws.x=i.normal.x>0?e.max.x:e.min.x,ws.y=i.normal.y>0?e.max.y:e.min.y,ws.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zl extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $s=new D,Ks=new D,Io=new Je,Gi=new er,Rs=new ni,wr=new D,Lo=new D;class Kh extends it{constructor(e=new bt,t=new Zl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)$s.fromBufferAttribute(t,i-1),Ks.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=$s.distanceTo(Ks);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;Io.copy(i).invert(),Gi.copy(e.ray).applyMatrix4(Io);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const u=h.getX(x),T=h.getX(x+1),S=Cs(this,e,Gi,l,u,T,x);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),u=Cs(this,e,Gi,l,x,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const u=Cs(this,e,Gi,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Cs(this,e,Gi,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cs(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if($s.fromBufferAttribute(o,i),Ks.fromBufferAttribute(o,r),t.distanceSqToSegment($s,Ks,wr,Lo)>n)return;wr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(wr);if(!(c<e.near||c>e.far))return{distance:c,point:Lo.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Do=new D,Uo=new D;class Zh extends Kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Do.fromBufferAttribute(t,i),Uo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Do.distanceTo(Uo);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const No=new Je,Pa=new er,Ps=new ni,Is=new D;class Fo extends it{constructor(e=new bt,t=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(i),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;No.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(No);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);Is.fromBufferAttribute(d,m),Oo(Is,m,l,i,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,x=p;g<x;g++)Is.fromBufferAttribute(d,g),Oo(Is,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(s,e,t,n,i,r,a){const o=Pa.distanceSqToPoint(s);if(o<t){const l=new D;Pa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class jl extends Tt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jl extends Tt{constructor(e,t,n=jn,i,r,a,o=Gt,l=Gt,c,h=Qi,d=1){if(h!==Qi&&h!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ql extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class as extends bt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],p=[];let g=0;const x=[],m=n/2;let u=0;T(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(p,2));function T(){const v=new D,A=new D;let w=0;const C=(t-e)/n;for(let I=0;I<=r;I++){const y=[],E=I/r,P=E*(t-e)+e;for(let F=0;F<=i;F++){const k=F/i,q=k*l+o,W=Math.sin(q),X=Math.cos(q);A.x=P*W,A.y=-E*n+m,A.z=P*X,d.push(A.x,A.y,A.z),v.set(W,C,X).normalize(),f.push(v.x,v.y,v.z),p.push(k,1-E),y.push(g++)}x.push(y)}for(let I=0;I<i;I++)for(let y=0;y<r;y++){const E=x[y][I],P=x[y+1][I],F=x[y+1][I+1],k=x[y][I+1];(e>0||y!==0)&&(h.push(E,P,k),w+=3),(t>0||y!==r-1)&&(h.push(P,F,k),w+=3)}c.addGroup(u,w,0),u+=w}function S(v){const A=g,w=new We,C=new D;let I=0;const y=v===!0?e:t,E=v===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const q=F/i*l+o,W=Math.cos(q),X=Math.sin(q);C.x=y*X,C.y=m*E,C.z=y*W,d.push(C.x,C.y,C.z),f.push(0,E,0),w.x=W*.5+.5,w.y=X*.5*E+.5,p.push(w.x,w.y),g++}for(let F=0;F<i;F++){const k=A+F,q=P+F;v===!0?h.push(q,q+1,k):h.push(q+1,q,k),I+=3}c.addGroup(u,I,v===!0?1:2),u+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qa extends as{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new qa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const S=new D,v=new D,A=new D;for(let w=0;w<t.length;w+=3)p(t[w+0],S),p(t[w+1],v),p(t[w+2],A),l(S,v,A,T)}function l(T,S,v,A){const w=A+1,C=[];for(let I=0;I<=w;I++){C[I]=[];const y=T.clone().lerp(v,I/w),E=S.clone().lerp(v,I/w),P=w-I;for(let F=0;F<=P;F++)F===0&&I===w?C[I][F]=y:C[I][F]=y.clone().lerp(E,F/P)}for(let I=0;I<w;I++)for(let y=0;y<2*(w-I)-1;y++){const E=Math.floor(y/2);y%2===0?(f(C[I][E+1]),f(C[I+1][E]),f(C[I][E])):(f(C[I][E+1]),f(C[I+1][E+1]),f(C[I+1][E]))}}function c(T){const S=new D;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(T),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const T=new D;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const v=m(T)/2/Math.PI+.5,A=u(T)/Math.PI+.5;a.push(v,1-A)}g(),d()}function d(){for(let T=0;T<a.length;T+=6){const S=a[T+0],v=a[T+2],A=a[T+4],w=Math.max(S,v,A),C=Math.min(S,v,A);w>.9&&C<.1&&(S<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),A<.2&&(a[T+4]+=1))}}function f(T){r.push(T.x,T.y,T.z)}function p(T,S){const v=T*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const T=new D,S=new D,v=new D,A=new D,w=new We,C=new We,I=new We;for(let y=0,E=0;y<r.length;y+=9,E+=6){T.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),w.set(a[E+0],a[E+1]),C.set(a[E+2],a[E+3]),I.set(a[E+4],a[E+5]),A.copy(T).add(S).add(v).divideScalar(3);const P=m(A);x(w,E+0,T,P),x(C,E+2,S,P),x(I,E+4,v,P)}}function x(T,S,v,A){A<0&&T.x===1&&(a[S]=T.x-1),v.x===0&&v.z===0&&(a[S]=A/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function u(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.vertices,e.indices,e.radius,e.details)}}class ei extends Ya{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ei(e.radius,e.detail)}}class Ii extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const T=u*f-a;for(let S=0;S<c;S++){const v=S*d-r;g.push(v,-T,0),x.push(0,0,1),m.push(S/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){const S=T+c*u,v=T+c*(u+1),A=T+1+c*(u+1),w=T+1+c*u;p.push(S,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class is extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/i,p=new D,g=new We;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const u=r+m/n*a;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let u=0;u<n;u++){const T=u+m,S=T,v=T+n+1,A=T+n+2,w=T+1;o.push(S,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zs extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new D,f=new D,p=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){const T=[],S=u/n;let v=0;u===0&&a===0?v=.5/t:u===n&&l===Math.PI&&(v=-.5/t);for(let A=0;A<=t;A++){const w=A/t;d.x=-e*Math.cos(i+w*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(i+w*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(w+v,1-S),T.push(c++)}h.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){const S=h[u][T+1],v=h[u][T],A=h[u+1][T],w=h[u+1][T+1];(u!==0||a>0)&&p.push(S,v,w),(u!==n-1||l<Math.PI)&&p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $a extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new D,d=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*r,m=p/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,u=(i+1)*(p-1)+g,T=(i+1)*p+g;a.push(x,m,T),a.push(m,u,T)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ei extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jh extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qh extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ec extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ed extends ec{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Rr=new Je,Bo=new D,zo=new D;class td{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bo),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tc extends $l{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nd extends td{constructor(){super(new tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ko extends ec{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new nd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class id extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ho=new Je;class sd{constructor(e,t,n=0,i=1/0){this.ray=new er(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ho.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ho),this}intersectObject(e,t=!0,n=[]){return Ia(e,this,n,t),n.sort(Go),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ia(e[i],this,n,t);return n.sort(Go),n}}function Go(s,e){return s.distance-e.distance}function Ia(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ia(r[a],e,t,!0)}}function Vo(s,e,t,n){const i=rd(n);switch(t){case Ol:return s*e;case Oa:return s*e/i.components*i.byteLength;case Ba:return s*e/i.components*i.byteLength;case zl:return s*e*2/i.components*i.byteLength;case za:return s*e*2/i.components*i.byteLength;case Bl:return s*e*3/i.components*i.byteLength;case Qt:return s*e*4/i.components*i.byteLength;case ka:return s*e*4/i.components*i.byteLength;case zs:case ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hs:case Gs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case na:case sa:return Math.max(s,16)*Math.max(e,8)/4;case ta:case ia:return Math.max(s,8)*Math.max(e,8)/2;case ra:case aa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ha:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case da:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ua:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ma:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ga:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case va:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sa:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ea:case ya:case Ta:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ba:case Aa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wa:case Ra:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rd(s){switch(s){case un:case Dl:return{byteLength:1,components:1};case ji:case Ul:case rs:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case jn:case Ua:case ln:return{byteLength:4,components:1};case Nl:case Fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ad(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ld=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,md=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$d=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ru=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,au=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ou=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Su=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Du=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ou=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ku=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$u=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ju=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ef=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Af=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:od,alphahash_pars_fragment:ld,alphamap_fragment:cd,alphamap_pars_fragment:hd,alphatest_fragment:dd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:pd,batching_pars_vertex:md,batching_vertex:gd,begin_vertex:_d,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:Md,bumpmap_pars_fragment:Sd,clipping_planes_fragment:Ed,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Td,clipping_planes_vertex:bd,color_fragment:Ad,color_pars_fragment:wd,color_pars_vertex:Rd,color_vertex:Cd,common:Pd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Fd,colorspace_fragment:Od,colorspace_pars_fragment:Bd,envmap_fragment:zd,envmap_common_pars_fragment:kd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:Qd,envmap_vertex:Vd,fog_vertex:Wd,fog_pars_vertex:Xd,fog_fragment:qd,fog_pars_fragment:Yd,gradientmap_pars_fragment:$d,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:jd,lights_pars_begin:Jd,lights_toon_fragment:eu,lights_toon_pars_fragment:tu,lights_phong_fragment:nu,lights_phong_pars_fragment:iu,lights_physical_fragment:su,lights_physical_pars_fragment:ru,lights_fragment_begin:au,lights_fragment_maps:ou,lights_fragment_end:lu,logdepthbuf_fragment:cu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:du,logdepthbuf_vertex:uu,map_fragment:fu,map_pars_fragment:pu,map_particle_fragment:mu,map_particle_pars_fragment:gu,metalnessmap_fragment:_u,metalnessmap_pars_fragment:xu,morphinstance_vertex:vu,morphcolor_vertex:Mu,morphnormal_vertex:Su,morphtarget_pars_vertex:Eu,morphtarget_vertex:yu,normal_fragment_begin:Tu,normal_fragment_maps:bu,normal_pars_fragment:Au,normal_pars_vertex:wu,normal_vertex:Ru,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Pu,clearcoat_normal_fragment_maps:Iu,clearcoat_pars_fragment:Lu,iridescence_pars_fragment:Du,opaque_fragment:Uu,packing:Nu,premultiplied_alpha_fragment:Fu,project_vertex:Ou,dithering_fragment:Bu,dithering_pars_fragment:zu,roughnessmap_fragment:ku,roughnessmap_pars_fragment:Hu,shadowmap_pars_fragment:Gu,shadowmap_pars_vertex:Vu,shadowmap_vertex:Wu,shadowmask_pars_fragment:Xu,skinbase_vertex:qu,skinning_pars_vertex:Yu,skinning_vertex:$u,skinnormal_vertex:Ku,specularmap_fragment:Zu,specularmap_pars_fragment:ju,tonemapping_fragment:Ju,tonemapping_pars_fragment:Qu,transmission_fragment:ef,transmission_pars_fragment:tf,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:af,background_vert:of,background_frag:lf,backgroundCube_vert:cf,backgroundCube_frag:hf,cube_vert:df,cube_frag:uf,depth_vert:ff,depth_frag:pf,distanceRGBA_vert:mf,distanceRGBA_frag:gf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:vf,linedashed_frag:Mf,meshbasic_vert:Sf,meshbasic_frag:Ef,meshlambert_vert:yf,meshlambert_frag:Tf,meshmatcap_vert:bf,meshmatcap_frag:Af,meshnormal_vert:wf,meshnormal_frag:Rf,meshphong_vert:Cf,meshphong_frag:Pf,meshphysical_vert:If,meshphysical_frag:Lf,meshtoon_vert:Df,meshtoon_frag:Uf,points_vert:Nf,points_frag:Ff,shadow_vert:Of,shadow_frag:Bf,sprite_vert:zf,sprite_frag:kf},se={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},an={basic:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Rt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Rt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Rt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Rt([se.points,se.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Rt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Rt([se.common,se.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Rt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Rt([se.sprite,se.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Rt([se.common,se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Rt([se.lights,se.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};an.physical={uniforms:Rt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ls={r:0,b:0,g:0},Hn=new fn,Hf=new Je;function Gf(s,e,t,n,i,r,a){const o=new Ie(0);let l=r===!0?0:1,c,h,d=null,f=0,p=null;function g(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?t:e).get(v)),v}function x(S){let v=!1;const A=g(S);A===null?u(o,l):A&&A.isColor&&(u(A,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Qs)?(h===void 0&&(h=new ht(new qt(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Pi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(v.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(Hn)),h.material.toneMapped=Ye.getTransfer(A.colorSpace)!==je,(d!==A||f!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ht(new Ii(2,2),new Tn({name:"BackgroundMaterial",uniforms:Pi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(A.colorSpace)!==je,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function u(S,v){S.getRGB(Ls,Yl(s)),n.buffers.color.setClear(Ls.r,Ls.g,Ls.b,v,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,v=1){o.set(S),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,u(o,l)},render:x,addToRenderList:m,dispose:T}}function Vf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(E,P,F,k,q){let W=!1;const X=d(k,F,P);r!==X&&(r=X,c(r.object)),W=p(E,k,F,q),W&&g(E,k,F,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(E,P,F,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function d(E,P,F){const k=F.wireframe===!0;let q=n[E.id];q===void 0&&(q={},n[E.id]=q);let W=q[P.id];W===void 0&&(W={},q[P.id]=W);let X=W[k];return X===void 0&&(X=f(l()),W[k]=X),X}function f(E){const P=[],F=[],k=[];for(let q=0;q<t;q++)P[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function p(E,P,F,k){const q=r.attributes,W=P.attributes;let X=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const ce=q[H];let ye=W[H];if(ye===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor)),ce===void 0||ce.attribute!==ye||ye&&ce.data!==ye.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(E,P,F,k){const q={},W=P.attributes;let X=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let ce=W[H];ce===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor));const ye={};ye.attribute=ce,ce&&ce.data&&(ye.data=ce.data),q[H]=ye,X++}r.attributes=q,r.attributesNum=X,r.index=k}function x(){const E=r.newAttributes;for(let P=0,F=E.length;P<F;P++)E[P]=0}function m(E){u(E,0)}function u(E,P){const F=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;F[E]=1,k[E]===0&&(s.enableVertexAttribArray(E),k[E]=1),q[E]!==P&&(s.vertexAttribDivisor(E,P),q[E]=P)}function T(){const E=r.newAttributes,P=r.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==E[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function S(E,P,F,k,q,W,X){X===!0?s.vertexAttribIPointer(E,P,F,q,W):s.vertexAttribPointer(E,P,F,k,q,W)}function v(E,P,F,k){x();const q=k.attributes,W=F.getAttributes(),X=P.defaultAttributeValues;for(const Z in W){const H=W[Z];if(H.location>=0){let re=q[Z];if(re===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const ce=re.normalized,ye=re.itemSize,He=e.get(re);if(He===void 0)continue;const et=He.buffer,st=He.type,$e=He.bytesPerElement,Y=st===s.INT||st===s.UNSIGNED_INT||re.gpuType===Ua;if(re.isInterleavedBufferAttribute){const j=re.data,fe=j.stride,Pe=re.offset;if(j.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)u(H.location+Ee,j.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)m(H.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,et);for(let Ee=0;Ee<H.locationSize;Ee++)S(H.location+Ee,ye/H.locationSize,st,ce,fe*$e,(Pe+ye/H.locationSize*Ee)*$e,Y)}else{if(re.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)u(H.location+j,re.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);s.bindBuffer(s.ARRAY_BUFFER,et);for(let j=0;j<H.locationSize;j++)S(H.location+j,ye/H.locationSize,st,ce,ye*$e,ye/H.locationSize*j*$e,Y)}}else if(X!==void 0){const ce=X[Z];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(H.location,ce);break;case 3:s.vertexAttrib3fv(H.location,ce);break;case 4:s.vertexAttrib4fv(H.location,ce);break;default:s.vertexAttrib1fv(H.location,ce)}}}}T()}function A(){I();for(const E in n){const P=n[E];for(const F in P){const k=P[F];for(const q in k)h(k[q].object),delete k[q];delete P[F]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const F in P){const k=P[F];for(const q in k)h(k[q].object),delete k[q];delete P[F]}delete n[E.id]}function C(E){for(const P in n){const F=n[P];if(F[E.id]===void 0)continue;const k=F[E.id];for(const q in k)h(k[q].object),delete k[q];delete F[E.id]}}function I(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Wf(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==Qt&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const I=C===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==un&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),u=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function qf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Vn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,S=T*4;let v=u.clippingState||null;l.value=v,v=h(g,f,S,p);for(let A=0;A!==S;++A)v[A]=t[A];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let S=0,v=p;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Yf(s){let e=new WeakMap;function t(a,o){return o===Jr?a.mapping=wi:o===Qr&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Jr||o===Qr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Hh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const yi=4,Wo=[.125,.215,.35,.446,.526,.582],qn=20,Cr=new tc,Xo=new Ie;let Pr=null,Ir=0,Lr=0,Dr=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,qo=[new D(-Wn,vi,0),new D(Wn,vi,0),new D(-vi,0,Wn),new D(vi,0,Wn),new D(0,Wn,-vi),new D(0,Wn,vi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],$f=new D;class Yo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=$f}=r;Pr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr,Ir,Lr),this._renderer.xr.enabled=Dr,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Dr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:rs,format:Qt,colorSpace:Ci,depthBuffer:!1},i=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kf(r)),this._blurMaterial=Zf(r,e,t)}return i}_compileMaterial(e){const t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Xo),d.toneMapping=Dn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const x=new It({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new ht(new qt,x);let u=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(Xo),u=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const A=this._cubeSize;Ds(i,v*A,S>2?A:0,A,A),d.setRenderTarget(i),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=qo[(i-r-1)%qo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ht(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const u=[];let T=0;for(let C=0;C<qn;++C){const I=C/x,y=Math.exp(-I*I/2);u.push(y),C===0?T+=y:C<m&&(T+=2*y)}for(let C=0;C<u.length;C++)u[C]=u[C]/T;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[i],A=3*v*(i>S-yi?i-S+yi:0),w=4*(this._cubeSize-v);Ds(t,A,w,3*v,2*v),l.setRenderTarget(t),l.render(d,Cr)}}function Kf(s){const e=[],t=[],n=[];let i=s;const r=s-yi+1+Wo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-yi?l=Wo[a-s+yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,T=new Float32Array(x*g*p),S=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,I=w>2?0:-1,y=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];T.set(y,x*g*w),S.set(f,m*g*w);const E=[w,w,w,w,w,w];v.set(E,u*g*w)}const A=new bt;A.setAttribute("position",new Dt(T,x)),A.setAttribute("uv",new Dt(S,m)),A.setAttribute("faceIndex",new Dt(v,u)),e.push(A),i>yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(s,e,t){const n=new Qn(s,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Zf(s,e,t){const n=new Float32Array(qn),i=new D(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ko(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Zo(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Jr||l===Qr,h=l===wi||l===Ri;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Yo(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Yo(s)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qf(s,e,t,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let S=0,v=T.length;S<v;S+=3){const A=T[S+0],w=T[S+1],C=T[S+2];f.push(A,w,w,C,C,A)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const A=S+0,w=S+1,C=S+2;f.push(A,w,w,C,C,A)}}else return;const m=new(Gl(f)?ql:Xl)(f,1);m.version=x;const u=r.get(d);u&&e.remove(u),r.set(d,m)}function h(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ep(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,n,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let u=0;for(let T=0;T<g;T++)u+=p[T]*x[T];t.update(u,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function np(s,e,t){const n=new WeakMap,i=new ut;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*w*4*d),I=new Vl(C,A,w,d);I.type=ln,I.needsUpdate=!0;const y=v*4;for(let P=0;P<d;P++){const F=u[P],k=T[P],q=S[P],W=A*w*4*P;for(let X=0;X<F.count;X++){const Z=X*y;g===!0&&(i.fromBufferAttribute(F,X),C[W+Z+0]=i.x,C[W+Z+1]=i.y,C[W+Z+2]=i.z,C[W+Z+3]=0),x===!0&&(i.fromBufferAttribute(k,X),C[W+Z+4]=i.x,C[W+Z+5]=i.y,C[W+Z+6]=i.z,C[W+Z+7]=0),m===!0&&(i.fromBufferAttribute(q,X),C[W+Z+8]=i.x,C[W+Z+9]=i.y,C[W+Z+10]=i.z,C[W+Z+11]=q.itemSize===4?i.w:1)}}f={count:d,texture:I,size:new We(A,w)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ip(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ic=new Tt,jo=new Jl(1,1),sc=new Vl,rc=new Th,ac=new Kl,Jo=[],Qo=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function Ui(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Jo[i];if(r===void 0&&(r=new Float32Array(i),Jo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function gt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function tr(s,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function sp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function op(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function lp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;nl.set(n),s.uniformMatrix2fv(this.addr,!1,nl),_t(t,n)}}function cp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;tl.set(n),s.uniformMatrix3fv(this.addr,!1,tl),_t(t,n)}}function hp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;el.set(n),s.uniformMatrix4fv(this.addr,!1,el),_t(t,n)}}function dp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function mp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function _p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function vp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jo.compareFunction=Hl,r=jo):r=ic,t.setTexture2D(e||r,i)}function Mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rc,i)}function Sp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ac,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sc,i)}function yp(s){switch(s){case 5126:return sp;case 35664:return rp;case 35665:return ap;case 35666:return op;case 35674:return lp;case 35675:return cp;case 35676:return hp;case 5124:case 35670:return dp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return pp;case 5125:return mp;case 36294:return gp;case 36295:return _p;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function Tp(s,e){s.uniform1fv(this.addr,e)}function bp(s,e){const t=Ui(e,this.size,2);s.uniform2fv(this.addr,t)}function Ap(s,e){const t=Ui(e,this.size,3);s.uniform3fv(this.addr,t)}function wp(s,e){const t=Ui(e,this.size,4);s.uniform4fv(this.addr,t)}function Rp(s,e){const t=Ui(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cp(s,e){const t=Ui(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Pp(s,e){const t=Ui(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ip(s,e){s.uniform1iv(this.addr,e)}function Lp(s,e){s.uniform2iv(this.addr,e)}function Dp(s,e){s.uniform3iv(this.addr,e)}function Up(s,e){s.uniform4iv(this.addr,e)}function Np(s,e){s.uniform1uiv(this.addr,e)}function Fp(s,e){s.uniform2uiv(this.addr,e)}function Op(s,e){s.uniform3uiv(this.addr,e)}function Bp(s,e){s.uniform4uiv(this.addr,e)}function zp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ic,r[a])}function kp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||rc,r[a])}function Hp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ac,r[a])}function Gp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);gt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||sc,r[a])}function Vp(s){switch(s){case 5126:return Tp;case 35664:return bp;case 35665:return Ap;case 35666:return wp;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Ip;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Fp;case 36295:return Op;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}}class Xp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class qp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function il(s,e){s.seq.push(e),s.map[e.id]=e}function Yp(s,e,t){const n=s.name,i=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){il(t,c===void 0?new Wp(o,s,e):new Xp(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new qp(o),il(t,d)),t=d}}}class Vs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Yp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function sl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $p=37297;let Kp=0;function Zp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const rl=new Fe;function jp(s){Ye._getMatrix(rl,Ye.workingColorSpace,s);const e=`mat3( ${rl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case Xs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function al(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zp(s.getShaderSource(e),o)}else return r}function Jp(s,e){const t=jp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qp(s,e){let t;switch(e){case Bc:t="Linear";break;case zc:t="Reinhard";break;case kc:t="Cineon";break;case Il:t="ACESFilmic";break;case Gc:t="AgX";break;case Vc:t="Neutral";break;case Hc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Us=new D;function em(){Ye.getLuminanceCoefficients(Us);const s=Us.x.toFixed(4),e=Us.y.toFixed(4),t=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function nm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function im(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Xi(s){return s!==""}function ol(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ll(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(s){return s.replace(sm,am)}const rm=new Map;function am(s,e){let t=Be[e];if(t===void 0){const n=rm.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return La(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(s){return s.replace(om,lm)}function lm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function hm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ri:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function um(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pl:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Oc:e="ENVMAP_BLENDING_ADD";break}return e}function fm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cm(t),c=hm(t),h=dm(t),d=um(t),f=fm(t),p=tm(t),g=nm(r),x=i.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xi).join(`
`),u.length>0&&(u+=`
`)):(m=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),u=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Jp("linearToOutputTexel",t.outputColorSpace),em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xi).join(`
`)),a=La(a),a=ol(a,t),a=ll(a,t),o=La(o),o=ol(o,t),o=ll(o,t),a=cl(a),o=cl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=T+m+a,v=T+u+o,A=sl(i,i.VERTEX_SHADER,S),w=sl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,A),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(w)||"",W=F.trim(),X=k.trim(),Z=q.trim();let H=!0,re=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,w);else{const ce=al(i,A,"vertex"),ye=al(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ce+`
`+ye)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Z==="")&&(re=!1);re&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:Z,prefix:u}})}i.deleteShader(A),i.deleteShader(w),I=new Vs(i,x),y=im(i,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,$p)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let mm=0;class gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _m(e),t.set(e,n)),n}}class _m{constructor(e){this.id=mm++,this.code=e,this.usedTimes=0}}function xm(s,e,t,n,i,r,a){const o=new Va,l=new gm,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,P,F,k){const q=F.fog,W=k.geometry,X=y.isMeshStandardMaterial?F.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),H=Z&&Z.mapping===Qs?Z.image.height:null,re=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ce=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ye=ce!==void 0?ce.length:0;let He=0;W.morphAttributes.position!==void 0&&(He=1),W.morphAttributes.normal!==void 0&&(He=2),W.morphAttributes.color!==void 0&&(He=3);let et,st,$e,Y;if(re){const Ke=an[re];et=Ke.vertexShader,st=Ke.fragmentShader}else et=y.vertexShader,st=y.fragmentShader,l.update(y),$e=l.getVertexShaderID(y),Y=l.getFragmentShaderID(y);const j=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Pe=k.isInstancedMesh===!0,Ee=k.isBatchedMesh===!0,Xe=!!y.map,St=!!y.matcap,R=!!Z,rt=!!y.aoMap,Ue=!!y.lightMap,Re=!!y.bumpMap,ge=!!y.normalMap,at=!!y.displacementMap,_e=!!y.emissiveMap,Oe=!!y.metalnessMap,xt=!!y.roughnessMap,ft=y.anisotropy>0,b=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,V=y.sheen>0,K=y.transmission>0,G=ft&&!!y.anisotropyMap,Se=b&&!!y.clearcoatMap,ne=b&&!!y.clearcoatNormalMap,xe=b&&!!y.clearcoatRoughnessMap,ve=O&&!!y.iridescenceMap,ee=O&&!!y.iridescenceThicknessMap,le=V&&!!y.sheenColorMap,we=V&&!!y.sheenRoughnessMap,Me=!!y.specularMap,ae=!!y.specularColorMap,Ne=!!y.specularIntensityMap,L=K&&!!y.transmissionMap,te=K&&!!y.thicknessMap,ie=!!y.gradientMap,de=!!y.alphaMap,J=y.alphaTest>0,$=!!y.alphaHash,me=!!y.extensions;let Le=Dn;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Le=s.toneMapping);const tt={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:st,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&k._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&k.instanceColor!==null,instancingMorph:Pe&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ci,alphaToCoverage:!!y.alphaToCoverage,map:Xe,matcap:St,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:H,aoMap:rt,lightMap:Ue,bumpMap:Re,normalMap:ge,displacementMap:f&&at,emissiveMap:_e,normalMapObjectSpace:ge&&y.normalMapType===Yc,normalMapTangentSpace:ge&&y.normalMapType===kl,metalnessMap:Oe,roughnessMap:xt,anisotropy:ft,anisotropyMap:G,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:ne,clearcoatRoughnessMap:xe,dispersion:_,iridescence:O,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:V,sheenColorMap:le,sheenRoughnessMap:we,specularMap:Me,specularColorMap:ae,specularIntensityMap:Ne,transmission:K,transmissionMap:L,thicknessMap:te,gradientMap:ie,opaque:y.transparent===!1&&y.blending===Ti&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:$,combine:y.combine,mapUv:Xe&&x(y.map.channel),aoMapUv:rt&&x(y.aoMap.channel),lightMapUv:Ue&&x(y.lightMap.channel),bumpMapUv:Re&&x(y.bumpMap.channel),normalMapUv:ge&&x(y.normalMap.channel),displacementMapUv:at&&x(y.displacementMap.channel),emissiveMapUv:_e&&x(y.emissiveMap.channel),metalnessMapUv:Oe&&x(y.metalnessMap.channel),roughnessMapUv:xt&&x(y.roughnessMap.channel),anisotropyMapUv:G&&x(y.anisotropyMap.channel),clearcoatMapUv:Se&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(y.sheenRoughnessMap.channel),specularMapUv:Me&&x(y.specularMap.channel),specularColorMapUv:ae&&x(y.specularColorMap.channel),specularIntensityMapUv:Ne&&x(y.specularIntensityMap.channel),transmissionMapUv:L&&x(y.transmissionMap.channel),thicknessMapUv:te&&x(y.thicknessMap.channel),alphaMapUv:de&&x(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ge||ft),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Xe||de),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:Xe&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===je,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(y.emissiveMap.colorSpace)===je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ht,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:me&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&y.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(E,y),S(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function T(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const E=g[y.type];let P;if(E){const F=an[E];P=Oh.clone(F.uniforms)}else P=y.uniforms;return P}function A(y,E){let P;for(let F=0,k=h.length;F<k;F++){const q=h[F];if(q.cacheKey===E){P=q,++P.usedTimes;break}}return P===void 0&&(P=new pm(s,E,y,r),h.push(P)),P}function w(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function vm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Mm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function dl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ul(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,f,p,g,x,m){let u=s[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,f,p,g,x,m){const u=a(d,f,p,g,x,m);p.transmission>0?n.push(u):p.transparent===!0?i.push(u):t.push(u)}function l(d,f,p,g,x,m){const u=a(d,f,p,g,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?i.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||Mm),n.length>1&&n.sort(f||dl),i.length>1&&i.sort(f||dl)}function h(){for(let d=e,f=s.length;d<f;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Sm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ul,s.set(n,[a])):i>=r.length?(a=new ul,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Em(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ie};break;case"SpotLight":t={position:new D,direction:new D,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function ym(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Tm=0;function bm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Am(s){const e=new Em,t=ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Je,a=new Je;function o(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,T=0,S=0,v=0,A=0,w=0,C=0;c.sort(bm);for(let y=0,E=c.length;y<E;y++){const P=c[y],F=P.color,k=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*k,d+=F.g*k,f+=F.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,T++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const Z=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=Z.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=W,v++}x++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Z=P.shadow,H=t.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=X,u++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==u||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=u,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=A,I.numLightProbes=C,n.version=Tm++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const S=c[u];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function fl(s){const e=new Am(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function wm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new fl(s),e.set(i,[o])):r>=a.length?(o=new fl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Pm(s,e,t){let n=new Xa;const i=new We,r=new We,a=new ut,o=new Jh({depthPacking:qc}),l=new Qh,c={},h=t.maxTextureSize,d={[Un]:Ft,[Ft]:Un,[Ht]:Ht},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Rm,fragmentShader:Cm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let u=this.type;this.render=function(w,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),E=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==Sn&&this.type===Sn,q=u===Sn&&this.type!==Sn;for(let W=0,X=w.length;W<X;W++){const Z=w[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const re=H.getFrameExtents();if(i.multiply(re),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||k===!0||q===!0){const ye=this.type!==Sn?{minFilter:Gt,magFilter:Gt}:{};H.map!==null&&H.map.dispose(),H.map=new Qn(i.x,i.y,ye),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ce=H.getViewportCount();for(let ye=0;ye<ce;ye++){const He=H.getViewport(ye);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),F.viewport(a),H.updateMatrices(Z,ye),n=H.getFrustum(),v(C,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&T(H,I),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(y,E,P)};function T(w,C){const I=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Qn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,I,p,x,null)}function S(w,C,I,y){let E=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=I.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=E.uuid,k=C.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let W=q[k];W===void 0&&(W=E.clone(),q[k]=W,C.addEventListener("dispose",A)),E=W}if(E.visible=C.visible,E.wireframe=C.wireframe,y===Sn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=s.properties.get(E);F.light=I}return E}function v(w,C,I,y,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Sn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const k=e.update(w),q=w.material;if(Array.isArray(q)){const W=k.groups;for(let X=0,Z=W.length;X<Z;X++){const H=W[X],re=q[H.materialIndex];if(re&&re.visible){const ce=S(w,re,y,E);w.onBeforeShadow(s,w,C,I,k,ce,H),s.renderBufferDirect(I,null,k,ce,w,H),w.onAfterShadow(s,w,C,I,k,ce,H)}}}else if(q.visible){const W=S(w,q,y,E);w.onBeforeShadow(s,w,C,I,k,W,null),s.renderBufferDirect(I,null,k,W,w,null),w.onAfterShadow(s,w,C,I,k,W,null)}}const F=w.children;for(let k=0,q=F.length;k<q;k++)v(F[k],C,I,y,E)}function A(w){w.target.removeEventListener("dispose",A);for(const I in c){const y=c[I],E=w.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}const Im={[Xr]:qr,[Yr]:Zr,[$r]:jr,[Ai]:Kr,[qr]:Xr,[Zr]:Yr,[jr]:$r,[Kr]:Ai};function Lm(s,e){function t(){let L=!1;const te=new ut;let ie=null;const de=new ut(0,0,0,0);return{setMask:function(J){ie!==J&&!L&&(s.colorMask(J,J,J,J),ie=J)},setLocked:function(J){L=J},setClear:function(J,$,me,Le,tt){tt===!0&&(J*=Le,$*=Le,me*=Le),te.set(J,$,me,Le),de.equals(te)===!1&&(s.clearColor(J,$,me,Le),de.copy(te))},reset:function(){L=!1,ie=null,de.set(-1,0,0,0)}}}function n(){let L=!1,te=!1,ie=null,de=null,J=null;return{setReversed:function($){if(te!==$){const me=e.get("EXT_clip_control");$?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=$;const Le=J;J=null,this.setClear(Le)}},getReversed:function(){return te},setTest:function($){$?j(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function($){ie!==$&&!L&&(s.depthMask($),ie=$)},setFunc:function($){if(te&&($=Im[$]),de!==$){switch($){case Xr:s.depthFunc(s.NEVER);break;case qr:s.depthFunc(s.ALWAYS);break;case Yr:s.depthFunc(s.LESS);break;case Ai:s.depthFunc(s.LEQUAL);break;case $r:s.depthFunc(s.EQUAL);break;case Kr:s.depthFunc(s.GEQUAL);break;case Zr:s.depthFunc(s.GREATER);break;case jr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=$}},setLocked:function($){L=$},setClear:function($){J!==$&&(te&&($=1-$),s.clearDepth($),J=$)},reset:function(){L=!1,ie=null,de=null,J=null,te=!1}}}function i(){let L=!1,te=null,ie=null,de=null,J=null,$=null,me=null,Le=null,tt=null;return{setTest:function(Ke){L||(Ke?j(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!L&&(s.stencilMask(Ke),te=Ke)},setFunc:function(Ke,pn,en){(ie!==Ke||de!==pn||J!==en)&&(s.stencilFunc(Ke,pn,en),ie=Ke,de=pn,J=en)},setOp:function(Ke,pn,en){($!==Ke||me!==pn||Le!==en)&&(s.stencilOp(Ke,pn,en),$=Ke,me=pn,Le=en)},setLocked:function(Ke){L=Ke},setClear:function(Ke){tt!==Ke&&(s.clearStencil(Ke),tt=Ke)},reset:function(){L=!1,te=null,ie=null,de=null,J=null,$=null,me=null,Le=null,tt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,S=null,v=null,A=null,w=null,C=new Ie(0,0,0),I=0,y=!1,E=null,P=null,F=null,k=null,q=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Z>=2);let re=null,ce={};const ye=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),et=new ut().fromArray(ye),st=new ut().fromArray(He);function $e(L,te,ie,de){const J=new Uint8Array(4),$=s.createTexture();s.bindTexture(L,$),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let me=0;me<ie;me++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(te+me,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return $}const Y={};Y[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(Ai),Re(!1),ge(no),j(s.CULL_FACE),rt(Ln);function j(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function fe(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Pe(L,te){return d[L]!==te?(s.bindFramebuffer(L,te),d[L]=te,L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=te),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Ee(L,te){let ie=p,de=!1;if(L){ie=f.get(te),ie===void 0&&(ie=[],f.set(te,ie));const J=L.textures;if(ie.length!==J.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let $=0,me=J.length;$<me;$++)ie[$]=s.COLOR_ATTACHMENT0+$;ie.length=J.length,de=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,de=!0);de&&s.drawBuffers(ie)}function Xe(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const St={[Xn]:s.FUNC_ADD,[vc]:s.FUNC_SUBTRACT,[Mc]:s.FUNC_REVERSE_SUBTRACT};St[Sc]=s.MIN,St[Ec]=s.MAX;const R={[yc]:s.ZERO,[Tc]:s.ONE,[bc]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Ic]:s.SRC_ALPHA_SATURATE,[Cc]:s.DST_COLOR,[wc]:s.DST_ALPHA,[Ac]:s.ONE_MINUS_SRC_COLOR,[Wr]:s.ONE_MINUS_SRC_ALPHA,[Pc]:s.ONE_MINUS_DST_COLOR,[Rc]:s.ONE_MINUS_DST_ALPHA,[Lc]:s.CONSTANT_COLOR,[Dc]:s.ONE_MINUS_CONSTANT_COLOR,[Uc]:s.CONSTANT_ALPHA,[Nc]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(L,te,ie,de,J,$,me,Le,tt,Ke){if(L===Ln){x===!0&&(fe(s.BLEND),x=!1);return}if(x===!1&&(j(s.BLEND),x=!0),L!==xc){if(L!==m||Ke!==y){if((u!==Xn||v!==Xn)&&(s.blendEquation(s.FUNC_ADD),u=Xn,v=Xn),Ke)switch(L){case Ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case io:s.blendFunc(s.ONE,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case io:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case so:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ro:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,S=null,A=null,w=null,C.set(0,0,0),I=0,m=L,y=Ke}return}J=J||te,$=$||ie,me=me||de,(te!==u||J!==v)&&(s.blendEquationSeparate(St[te],St[J]),u=te,v=J),(ie!==T||de!==S||$!==A||me!==w)&&(s.blendFuncSeparate(R[ie],R[de],R[$],R[me]),T=ie,S=de,A=$,w=me),(Le.equals(C)===!1||tt!==I)&&(s.blendColor(Le.r,Le.g,Le.b,tt),C.copy(Le),I=tt),m=L,y=!1}function Ue(L,te){L.side===Ht?fe(s.CULL_FACE):j(s.CULL_FACE);let ie=L.side===Ft;te&&(ie=!ie),Re(ie),L.blending===Ti&&L.transparent===!1?rt(Ln):rt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_e(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){E!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),E=L)}function ge(L){L!==gc?(j(s.CULL_FACE),L!==P&&(L===no?s.cullFace(s.BACK):L===_c?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),P=L}function at(L){L!==F&&(X&&s.lineWidth(L),F=L)}function _e(L,te,ie){L?(j(s.POLYGON_OFFSET_FILL),(k!==te||q!==ie)&&(s.polygonOffset(te,ie),k=te,q=ie)):fe(s.POLYGON_OFFSET_FILL)}function Oe(L){L?j(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function xt(L){L===void 0&&(L=s.TEXTURE0+W-1),re!==L&&(s.activeTexture(L),re=L)}function ft(L,te,ie){ie===void 0&&(re===null?ie=s.TEXTURE0+W-1:ie=re);let de=ce[ie];de===void 0&&(de={type:void 0,texture:void 0},ce[ie]=de),(de.type!==L||de.texture!==te)&&(re!==ie&&(s.activeTexture(ie),re=ie),s.bindTexture(L,te||Y[L]),de.type=L,de.texture=te)}function b(){const L=ce[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{s.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{s.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(L){et.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function we(L){st.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Me(L,te){let ie=c.get(te);ie===void 0&&(ie=new WeakMap,c.set(te,ie));let de=ie.get(L);de===void 0&&(de=s.getUniformBlockIndex(te,L.name),ie.set(L,de))}function ae(L,te){const de=c.get(te).get(L);l.get(te)!==de&&(s.uniformBlockBinding(te,de,L.__bindingPointIndex),l.set(te,de))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,ce={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,T=null,S=null,v=null,A=null,w=null,C=new Ie(0,0,0),I=0,y=!1,E=null,P=null,F=null,k=null,q=null,et.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:fe,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:Xe,setBlending:rt,setMaterial:Ue,setFlipSided:Re,setCullFace:ge,setLineWidth:at,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:xt,bindTexture:ft,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:ve,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:xe,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Se,scissor:le,viewport:we,reset:Ne}}function Dm(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Ys("canvas")}function x(b,_,O){let V=1;const K=ft(b);if((K.width>O||K.height>O)&&(V=O/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(V*K.width),Se=Math.floor(V*K.height);d===void 0&&(d=g(G,Se));const ne=_?g(G,Se):d;return ne.width=G,ne.height=Se,ne.getContext("2d").drawImage(b,0,0,G,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Se+")."),ne}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){s.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(b,_,O,V,K=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=_;if(_===s.RED&&(O===s.FLOAT&&(G=s.R32F),O===s.HALF_FLOAT&&(G=s.R16F),O===s.UNSIGNED_BYTE&&(G=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.R8UI),O===s.UNSIGNED_SHORT&&(G=s.R16UI),O===s.UNSIGNED_INT&&(G=s.R32UI),O===s.BYTE&&(G=s.R8I),O===s.SHORT&&(G=s.R16I),O===s.INT&&(G=s.R32I)),_===s.RG&&(O===s.FLOAT&&(G=s.RG32F),O===s.HALF_FLOAT&&(G=s.RG16F),O===s.UNSIGNED_BYTE&&(G=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RG8UI),O===s.UNSIGNED_SHORT&&(G=s.RG16UI),O===s.UNSIGNED_INT&&(G=s.RG32UI),O===s.BYTE&&(G=s.RG8I),O===s.SHORT&&(G=s.RG16I),O===s.INT&&(G=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGB8UI),O===s.UNSIGNED_SHORT&&(G=s.RGB16UI),O===s.UNSIGNED_INT&&(G=s.RGB32UI),O===s.BYTE&&(G=s.RGB8I),O===s.SHORT&&(G=s.RGB16I),O===s.INT&&(G=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),O===s.UNSIGNED_INT&&(G=s.RGBA32UI),O===s.BYTE&&(G=s.RGBA8I),O===s.SHORT&&(G=s.RGBA16I),O===s.INT&&(G=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),_===s.RGBA){const Se=K?Xs:Ye.getTransfer(V);O===s.FLOAT&&(G=s.RGBA32F),O===s.HALF_FLOAT&&(G=s.RGBA16F),O===s.UNSIGNED_BYTE&&(G=Se===je?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(b,_){let O;return b?_===null||_===jn||_===Ji?O=s.DEPTH24_STENCIL8:_===ln?O=s.DEPTH32F_STENCIL8:_===ji&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===Ji?O=s.DEPTH_COMPONENT24:_===ln?O=s.DEPTH_COMPONENT32F:_===ji&&(O=s.DEPTH_COMPONENT16),O}function A(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Gt&&b.minFilter!==on?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){const _=b.target;_.removeEventListener("dispose",w),I(_),_.isVideoTexture&&h.delete(_)}function C(b){const _=b.target;_.removeEventListener("dispose",C),E(_)}function I(b){const _=n.get(b);if(_.__webglInit===void 0)return;const O=b.source,V=f.get(O);if(V){const K=V[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(b),Object.keys(V).length===0&&f.delete(O)}n.remove(b)}function y(b){const _=n.get(b);s.deleteTexture(_.__webglTexture);const O=b.source,V=f.get(O);delete V[_.__cacheKey],a.memory.textures--}function E(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let K=0;K<_.__webglFramebuffer[V].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[V][K]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=b.textures;for(let V=0,K=O.length;V<K;V++){const G=n.get(O[V]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(b)}let P=0;function F(){P=0}function k(){const b=P;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),P+=1,b}function q(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function W(b,_){const O=n.get(b);if(b.isVideoTexture&&Oe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,b,_);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function X(b,_){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function Z(b,_){const O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){Y(O,b,_);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function H(b,_){const O=n.get(b);if(b.version>0&&O.__version!==b.version){j(O,b,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const re={[Ws]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[ea]:s.MIRRORED_REPEAT},ce={[Gt]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[sr]:s.LINEAR_MIPMAP_NEAREST,[$n]:s.LINEAR_MIPMAP_LINEAR},ye={[$c]:s.NEVER,[eh]:s.ALWAYS,[Kc]:s.LESS,[Hl]:s.LEQUAL,[Zc]:s.EQUAL,[Qc]:s.GEQUAL,[jc]:s.GREATER,[Jc]:s.NOTEQUAL};function He(b,_){if(_.type===ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===on||_.magFilter===sr||_.magFilter===cs||_.magFilter===$n||_.minFilter===on||_.minFilter===sr||_.minFilter===cs||_.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,re[_.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,re[_.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,re[_.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ce[_.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==cs&&_.minFilter!==$n||_.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function et(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));const V=_.source;let K=f.get(V);K===void 0&&(K={},f.set(V,K));const G=q(_);if(G!==b.__cacheKey){K[G]===void 0&&(K[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[G].usedTimes++;const Se=K[b.__cacheKey];Se!==void 0&&(K[b.__cacheKey].usedTimes--,Se.usedTimes===0&&y(_)),b.__cacheKey=G,b.__webglTexture=K[G].texture}return O}function st(b,_,O){return Math.floor(Math.floor(b/O)/_)}function $e(b,_,O,V){const G=b.updateRanges;if(G.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{G.sort((ee,le)=>ee.start-le.start);let Se=0;for(let ee=1;ee<G.length;ee++){const le=G[Se],we=G[ee],Me=le.start+le.count,ae=st(we.start,_.width,4),Ne=st(le.start,_.width,4);we.start<=Me+1&&ae===Ne&&st(we.start+we.count-1,_.width,4)===ae?le.count=Math.max(le.count,we.start+we.count-le.start):(++Se,G[Se]=we)}G.length=Se+1;const ne=s.getParameter(s.UNPACK_ROW_LENGTH),xe=s.getParameter(s.UNPACK_SKIP_PIXELS),ve=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let ee=0,le=G.length;ee<le;ee++){const we=G[ee],Me=Math.floor(we.start/4),ae=Math.ceil(we.count/4),Ne=Me%_.width,L=Math.floor(Me/_.width),te=ae,ie=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,Ne,L,te,ie,O,V,_.data)}b.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,ve)}}function Y(b,_,O){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);const K=et(b,_),G=_.source;t.bindTexture(V,b.__webglTexture,s.TEXTURE0+O);const Se=n.get(G);if(G.version!==Se.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const ne=Ye.getPrimaries(Ye.workingColorSpace),xe=_.colorSpace===In?null:Ye.getPrimaries(_.colorSpace),ve=_.colorSpace===In||ne===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=x(_.image,!1,i.maxTextureSize);ee=xt(_,ee);const le=r.convert(_.format,_.colorSpace),we=r.convert(_.type);let Me=S(_.internalFormat,le,we,_.colorSpace,_.isVideoTexture);He(V,_);let ae;const Ne=_.mipmaps,L=_.isVideoTexture!==!0,te=Se.__version===void 0||K===!0,ie=G.dataReady,de=A(_,ee);if(_.isDepthTexture)Me=v(_.format===es,_.type),te&&(L?t.texStorage2D(s.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,le,we,null));else if(_.isDataTexture)if(Ne.length>0){L&&te&&t.texStorage2D(s.TEXTURE_2D,de,Me,Ne[0].width,Ne[0].height);for(let J=0,$=Ne.length;J<$;J++)ae=Ne[J],L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,we,ae.data):t.texImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,le,we,ae.data);_.generateMipmaps=!1}else L?(te&&t.texStorage2D(s.TEXTURE_2D,de,Me,ee.width,ee.height),ie&&$e(_,ee,le,we)):t.texImage2D(s.TEXTURE_2D,0,Me,ee.width,ee.height,0,le,we,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Me,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,$=Ne.length;J<$;J++)if(ae=Ne[J],_.format!==Qt)if(le!==null)if(L){if(ie)if(_.layerUpdates.size>0){const me=Vo(ae.width,ae.height,_.format,_.type);for(const Le of _.layerUpdates){const tt=ae.data.subarray(Le*me/ae.data.BYTES_PER_ELEMENT,(Le+1)*me/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Le,ae.width,ae.height,1,le,tt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ae.width,ae.height,ee.depth,le,we,ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,J,Me,ae.width,ae.height,ee.depth,0,le,we,ae.data)}else{L&&te&&t.texStorage2D(s.TEXTURE_2D,de,Me,Ne[0].width,Ne[0].height);for(let J=0,$=Ne.length;J<$;J++)ae=Ne[J],_.format!==Qt?le!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,ae.width,ae.height,le,we,ae.data):t.texImage2D(s.TEXTURE_2D,J,Me,ae.width,ae.height,0,le,we,ae.data)}else if(_.isDataArrayTexture)if(L){if(te&&t.texStorage3D(s.TEXTURE_2D_ARRAY,de,Me,ee.width,ee.height,ee.depth),ie)if(_.layerUpdates.size>0){const J=Vo(ee.width,ee.height,_.format,_.type);for(const $ of _.layerUpdates){const me=ee.data.subarray($*J/ee.data.BYTES_PER_ELEMENT,($+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,le,we,me)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(_.isData3DTexture)L?(te&&t.texStorage3D(s.TEXTURE_3D,de,Me,ee.width,ee.height,ee.depth),ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(_.isFramebufferTexture){if(te)if(L)t.texStorage2D(s.TEXTURE_2D,de,Me,ee.width,ee.height);else{let J=ee.width,$=ee.height;for(let me=0;me<de;me++)t.texImage2D(s.TEXTURE_2D,me,Me,J,$,0,le,we,null),J>>=1,$>>=1}}else if(Ne.length>0){if(L&&te){const J=ft(Ne[0]);t.texStorage2D(s.TEXTURE_2D,de,Me,J.width,J.height)}for(let J=0,$=Ne.length;J<$;J++)ae=Ne[J],L?ie&&t.texSubImage2D(s.TEXTURE_2D,J,0,0,le,we,ae):t.texImage2D(s.TEXTURE_2D,J,Me,le,we,ae);_.generateMipmaps=!1}else if(L){if(te){const J=ft(ee);t.texStorage2D(s.TEXTURE_2D,de,Me,J.width,J.height)}ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,le,we,ee)}else t.texImage2D(s.TEXTURE_2D,0,Me,le,we,ee);m(_)&&u(V),Se.__version=G.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function j(b,_,O){if(_.image.length!==6)return;const V=et(b,_),K=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const G=n.get(K);if(K.version!==G.__version||V===!0){t.activeTexture(s.TEXTURE0+O);const Se=Ye.getPrimaries(Ye.workingColorSpace),ne=_.colorSpace===In?null:Ye.getPrimaries(_.colorSpace),xe=_.colorSpace===In||Se===ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ve=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,le=[];for(let $=0;$<6;$++)!ve&&!ee?le[$]=x(_.image[$],!0,i.maxCubemapSize):le[$]=ee?_.image[$].image:_.image[$],le[$]=xt(_,le[$]);const we=le[0],Me=r.convert(_.format,_.colorSpace),ae=r.convert(_.type),Ne=S(_.internalFormat,Me,ae,_.colorSpace),L=_.isVideoTexture!==!0,te=G.__version===void 0||V===!0,ie=K.dataReady;let de=A(_,we);He(s.TEXTURE_CUBE_MAP,_);let J;if(ve){L&&te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ne,we.width,we.height);for(let $=0;$<6;$++){J=le[$].mipmaps;for(let me=0;me<J.length;me++){const Le=J[me];_.format!==Qt?Me!==null?L?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,0,0,Le.width,Le.height,Me,ae,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me,Ne,Le.width,Le.height,0,Me,ae,Le.data)}}}else{if(J=_.mipmaps,L&&te){J.length>0&&de++;const $=ft(le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,Ne,$.width,$.height)}for(let $=0;$<6;$++)if(ee){L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,le[$].width,le[$].height,Me,ae,le[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,le[$].width,le[$].height,0,Me,ae,le[$].data);for(let me=0;me<J.length;me++){const tt=J[me].image[$].image;L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,tt.width,tt.height,Me,ae,tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,tt.width,tt.height,0,Me,ae,tt.data)}}else{L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,ae,le[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ne,Me,ae,le[$]);for(let me=0;me<J.length;me++){const Le=J[me];L?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,0,0,Me,ae,Le.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,me+1,Ne,Me,ae,Le.image[$])}}}m(_)&&u(s.TEXTURE_CUBE_MAP),G.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function fe(b,_,O,V,K,G){const Se=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),xe=S(O.internalFormat,Se,ne,O.colorSpace),ve=n.get(_),ee=n.get(O);if(ee.__renderTarget=_,!ve.__hasExternalTextures){const le=Math.max(1,_.width>>G),we=Math.max(1,_.height>>G);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?t.texImage3D(K,G,xe,le,we,_.depth,0,Se,ne,null):t.texImage2D(K,G,xe,le,we,0,Se,ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,K,ee.__webglTexture,0,at(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,K,ee.__webglTexture,G),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(b,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),_.depthBuffer){const V=_.depthTexture,K=V&&V.isDepthTexture?V.type:null,G=v(_.stencilBuffer,K),Se=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=at(_);_e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,G,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,G,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,G,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,b)}else{const V=_.textures;for(let K=0;K<V.length;K++){const G=V[K],Se=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),xe=S(G.internalFormat,Se,ne,G.colorSpace),ve=at(_);O&&_e(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,xe,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,xe,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,xe,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const K=V.__webglTexture,G=at(_);if(_.depthTexture.format===Qi)_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(_.depthTexture.format===es)_e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const _=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=V}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=b.texture.mipmaps;V&&V.length>0?Ee(_.__webglFramebuffer[0],b):Ee(_.__webglFramebuffer,b)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),Pe(_.__webglDepthbuffer[V],b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Pe(_.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,G)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(b,_,O){const V=n.get(b);_!==void 0&&fe(V.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Xe(b)}function R(b){const _=b.texture,O=n.get(b),V=n.get(_);b.addEventListener("dispose",C);const K=b.textures,G=b.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,a.memory.textures++),G){O.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ne]=[];for(let xe=0;xe<_.mipmaps.length;xe++)O.__webglFramebuffer[ne][xe]=s.createFramebuffer()}else O.__webglFramebuffer[ne]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ne=0;ne<_.mipmaps.length;ne++)O.__webglFramebuffer[ne]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Se)for(let ne=0,xe=K.length;ne<xe;ne++){const ve=n.get(K[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&_e(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const xe=K[ne];O.__webglColorRenderbuffer[ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ne]);const ve=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),le=S(xe.internalFormat,ve,ee,xe.colorSpace,b.isXRRenderTarget===!0),we=at(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,we,le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ne,s.RENDERBUFFER,O.__webglColorRenderbuffer[ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pe(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),He(s.TEXTURE_CUBE_MAP,_);for(let ne=0;ne<6;ne++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)fe(O.__webglFramebuffer[ne][xe],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe);else fe(O.__webglFramebuffer[ne],b,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(_)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ne=0,xe=K.length;ne<xe;ne++){const ve=K[ne],ee=n.get(ve);let le=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),He(le,ve),fe(O.__webglFramebuffer,b,ve,s.COLOR_ATTACHMENT0+ne,le,0),m(ve)&&u(le)}t.unbindTexture()}else{let ne=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ne=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,V.__webglTexture),He(ne,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)fe(O.__webglFramebuffer[xe],b,_,s.COLOR_ATTACHMENT0,ne,xe);else fe(O.__webglFramebuffer,b,_,s.COLOR_ATTACHMENT0,ne,0);m(_)&&u(ne),t.unbindTexture()}b.depthBuffer&&Xe(b)}function rt(b){const _=b.textures;for(let O=0,V=_.length;O<V;O++){const K=_[O];if(m(K)){const G=T(b),Se=n.get(K).__webglTexture;t.bindTexture(G,Se),u(G),t.unbindTexture()}}}const Ue=[],Re=[];function ge(b){if(b.samples>0){if(_e(b)===!1){const _=b.textures,O=b.width,V=b.height;let K=s.COLOR_BUFFER_BIT;const G=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(b),ne=_.length>1;if(ne)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=n.get(_[ve]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,K,s.NEAREST),l===!0&&(Ue.length=0,Re.length=0,Ue.push(s.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ue.push(G),Re.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ve]);const ee=n.get(_[ve]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function at(b){return Math.min(i.maxSamples,b.samples)}function _e(b){const _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(b){const _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function xt(b,_){const O=b.colorSpace,V=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Ci&&O!==In&&(Ye.getTransfer(O)===je?(V!==Qt||K!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function ft(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=St,this.setupRenderTarget=R,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Um(s,e){function t(n,i=In){let r;const a=Ye.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===Na)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dl)return s.BYTE;if(n===Ul)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===Ua)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===rs)return s.HALF_FLOAT;if(n===Ol)return s.ALPHA;if(n===Bl)return s.RGB;if(n===Qt)return s.RGBA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===es)return s.DEPTH_STENCIL;if(n===Oa)return s.RED;if(n===Ba)return s.RED_INTEGER;if(n===zl)return s.RG;if(n===za)return s.RG_INTEGER;if(n===ka)return s.RGBA_INTEGER;if(n===zs||n===ks||n===Hs||n===Gs)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===aa)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===la||n===ca||n===ha||n===da||n===ua||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===Ma||n===Sa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===la)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ca)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ua)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===va)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ma)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===ya||n===Ta)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===Aa||n===wa||n===Ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ji?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:Nm,fragmentShader:Fm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bm extends Li{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Om,u={},T=t.getContextAttributes();let S=null,v=null;const A=[],w=[],C=new We;let I=null;const y=new Yt;y.viewport=new ut;const E=new Yt;E.viewport=new ut;const P=[y,E],F=new id;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let j=A[Y];return j===void 0&&(j=new br,A[Y]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Y){let j=A[Y];return j===void 0&&(j=new br,A[Y]=j),j.getGripSpace()},this.getHand=function(Y){let j=A[Y];return j===void 0&&(j=new br,A[Y]=j),j.getHandSpace()};function W(Y){const j=w.indexOf(Y.inputSource);if(j===-1)return;const fe=A[j];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<A.length;Y++){const j=w[Y];j!==null&&(w[Y]=null,A[Y].disconnect(j))}k=null,q=null,m.reset();for(const Y in u)delete u[Y];e.setRenderTarget(S),p=null,f=null,d=null,i=null,v=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,Ee=null;T.depth&&(Ee=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=T.stencil?es:Qi,Pe=T.stencil?Ji:jn);const Xe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Xe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Qn(f.textureWidth,f.textureHeight,{format:Qt,type:un,depthTexture:new Jl(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Qn(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let j=0;j<Y.removed.length;j++){const fe=Y.removed[j],Pe=w.indexOf(fe);Pe>=0&&(w[Pe]=null,A[Pe].disconnect(fe))}for(let j=0;j<Y.added.length;j++){const fe=Y.added[j];let Pe=w.indexOf(fe);if(Pe===-1){for(let Xe=0;Xe<A.length;Xe++)if(Xe>=w.length){w.push(fe),Pe=Xe;break}else if(w[Xe]===null){w[Xe]=fe,Pe=Xe;break}if(Pe===-1)break}const Ee=A[Pe];Ee&&Ee.connect(fe)}}const H=new D,re=new D;function ce(Y,j,fe){H.setFromMatrixPosition(j.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const Pe=H.distanceTo(re),Ee=j.projectionMatrix.elements,Xe=fe.projectionMatrix.elements,St=Ee[14]/(Ee[10]-1),R=Ee[14]/(Ee[10]+1),rt=(Ee[9]+1)/Ee[5],Ue=(Ee[9]-1)/Ee[5],Re=(Ee[8]-1)/Ee[0],ge=(Xe[8]+1)/Xe[0],at=St*Re,_e=St*ge,Oe=Pe/(-Re+ge),xt=Oe*-Re;if(j.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xt),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ft=St+Oe,b=R+Oe,_=at-xt,O=_e+(Pe-xt),V=rt*R/b*ft,K=Ue*R/b*ft;Y.projectionMatrix.makePerspective(_,O,V,K,ft,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ye(Y,j){j===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(j.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let j=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),F.near=E.near=y.near=j,F.far=E.far=y.far=fe,(k!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=Y.layers.mask|6,y.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const Pe=Y.parent,Ee=F.cameras;ye(F,Pe);for(let Xe=0;Xe<Ee.length;Xe++)ye(Ee[Xe],Pe);Ee.length===2?ce(F,y,E):F.projectionMatrix.copy(y.projectionMatrix),He(Y,F,Pe)};function He(Y,j,fe){fe===null?Y.matrix.copy(j.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(j.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(j.projectionMatrix),Y.projectionMatrixInverse.copy(j.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ts*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return u[Y]};let et=null;function st(Y,j){if(h=j.getViewerPose(c||a),g=j,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Pe=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Pe=!0);for(let R=0;R<fe.length;R++){const rt=fe[R];let Ue=null;if(p!==null)Ue=p.getViewport(rt);else{const ge=d.getViewSubImage(f,rt);Ue=ge.viewport,R===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let Re=P[R];Re===void 0&&(Re=new Yt,Re.layers.enable(R),Re.viewport=new ut,P[R]=Re),Re.matrix.fromArray(rt.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(rt.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),R===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pe===!0&&F.cameras.push(Re)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const R=d.getDepthInformation(fe[0]);R&&R.isValid&&R.texture&&m.init(R,i.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let R=0;R<fe.length;R++){const rt=fe[R].camera;if(rt){let Ue=u[rt];Ue||(Ue=new Ql,u[rt]=Ue);const Re=d.getCameraImage(rt);Ue.sourceTexture=Re}}}}for(let fe=0;fe<A.length;fe++){const Pe=w[fe],Ee=A[fe];Pe!==null&&Ee!==void 0&&Ee.update(Pe,j,c||a)}et&&et(Y,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const $e=new nc;$e.setAnimationLoop(st),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}}const Gn=new fn,zm=new Je;function km(s,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Yl(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,T,S,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,T,S):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ft&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ft&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),S=T.envMap,v=T.envMapRotation;S&&(m.envMap.value=S,Gn.copy(v),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(zm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,S){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=S*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ft&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Hm(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const v=S.program;n.uniformBlockBinding(T,v)}function c(T,S){let v=i[T.id];v===void 0&&(g(T),v=h(T),i[T.id]=v,T.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(T,A);const w=e.render.frame;r[T.id]!==w&&(f(T),r[T.id]=w)}function h(T){const S=d();T.__bindingPointIndex=S;const v=s.createBuffer(),A=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=i[T.id],v=T.uniforms,A=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,C=v.length;w<C;w++){const I=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,E=I.length;y<E;y++){const P=I[y];if(p(P,w,y,A)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let W=0;W<k.length;W++){const X=k[W],Z=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,S,v,A){const w=T.value,C=S+"_"+v;if(A[C]===void 0)return typeof w=="number"||typeof w=="boolean"?A[C]=w:A[C]=w.clone(),!0;{const I=A[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return A[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(T){const S=T.uniforms;let v=0;const A=16;for(let C=0,I=S.length;C<I;C++){const y=Array.isArray(S[C])?S[C]:[S[C]];for(let E=0,P=y.length;E<P;E++){const F=y[E],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,W=k.length;q<W;q++){const X=k[q],Z=x(X),H=v%A,re=H%Z.boundary,ce=H+re;v+=re,ce!==0&&A-ce<Z.storage&&(v+=A-ce),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=Z.storage}}}const w=v%A;return w>0&&(v+=A-w),T.__size=v,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function u(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:u}}class Gm{constructor(e={}){const{canvas:t=_h(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const T=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Pt;let w=0,C=0,I=null,y=-1,E=null;const P=new ut,F=new ut;let k=null;const q=new Ie(0);let W=0,X=t.width,Z=t.height,H=1,re=null,ce=null;const ye=new ut(0,0,X,Z),He=new ut(0,0,X,Z);let et=!1;const st=new Xa;let $e=!1,Y=!1;const j=new Je,fe=new D,Pe=new ut,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function St(){return I===null?H:1}let R=n;function rt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",J,!1),R===null){const U="webgl2";if(R=rt(U,M),R===null)throw rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ue,Re,ge,at,_e,Oe,xt,ft,b,_,O,V,K,G,Se,ne,xe,ve,ee,le,we,Me,ae,Ne;function L(){Ue=new Jf(R),Ue.init(),Me=new Um(R,Ue),Re=new Xf(R,Ue,e,Me),ge=new Lm(R,Ue),Re.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),at=new tp(R),_e=new vm,Oe=new Dm(R,Ue,ge,_e,Re,Me,at),xt=new Yf(v),ft=new jf(v),b=new ad(R),ae=new Vf(R,b),_=new Qf(R,b,at,ae),O=new ip(R,_,b,at),ee=new np(R,Re,Oe),ne=new qf(_e),V=new xm(v,xt,ft,Ue,Re,ae,ne),K=new km(v,_e),G=new Sm,Se=new wm(Ue),ve=new Gf(v,xt,ft,ge,O,p,l),xe=new Pm(v,O,Re),Ne=new Hm(R,at,Re,ge),le=new Wf(R,Ue,at),we=new ep(R,Ue,at),at.programs=V.programs,v.capabilities=Re,v.extensions=Ue,v.properties=_e,v.renderLists=G,v.shadowMap=xe,v.state=ge,v.info=at}L();const te=new Bm(v,R);this.xr=te,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Ue.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ue.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(X,Z,!1))},this.getSize=function(M){return M.set(X,Z)},this.setSize=function(M,U,B=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Z=U,t.width=Math.floor(M*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*H,Z*H).floor()},this.setDrawingBufferSize=function(M,U,B){X=M,Z=U,H=B,t.width=Math.floor(M*B),t.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ye)},this.setViewport=function(M,U,B,z){M.isVector4?ye.set(M.x,M.y,M.z,M.w):ye.set(M,U,B,z),ge.viewport(P.copy(ye).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,U,B,z){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,U,B,z),ge.scissor(F.copy(He).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){ge.setScissorTest(et=M)},this.setOpaqueSort=function(M){re=M},this.setTransparentSort=function(M){ce=M},this.getClearColor=function(M){return M.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,B=!0){let z=0;if(M){let N=!1;if(I!==null){const Q=I.texture.format;N=Q===ka||Q===za||Q===Ba}if(N){const Q=I.texture.type,oe=Q===un||Q===jn||Q===ji||Q===Ji||Q===Na||Q===Fa,pe=ve.getClearColor(),he=ve.getClearAlpha(),Ae=pe.r,Ce=pe.g,Te=pe.b;oe?(g[0]=Ae,g[1]=Ce,g[2]=Te,g[3]=he,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ae,x[1]=Ce,x[2]=Te,x[3]=he,R.clearBufferiv(R.COLOR,0,x))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",J,!1),ve.dispose(),G.dispose(),Se.dispose(),_e.dispose(),xt.dispose(),ft.dispose(),O.dispose(),ae.dispose(),Ne.dispose(),V.dispose(),te.dispose(),te.removeEventListener("sessionstart",en),te.removeEventListener("sessionend",Za),Nn.stop()};function ie(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=at.autoReset,U=xe.enabled,B=xe.autoUpdate,z=xe.needsUpdate,N=xe.type;L(),at.autoReset=M,xe.enabled=U,xe.autoUpdate=B,xe.needsUpdate=z,xe.type=N}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $(M){const U=M.target;U.removeEventListener("dispose",$),me(U)}function me(M){Le(M),_e.remove(M)}function Le(M){const U=_e.get(M).programs;U!==void 0&&(U.forEach(function(B){V.releaseProgram(B)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,z,N,Q){U===null&&(U=Ee);const oe=N.isMesh&&N.matrixWorld.determinant()<0,pe=hc(M,U,B,z,N);ge.setMaterial(z,oe);let he=B.index,Ae=1;if(z.wireframe===!0){if(he=_.getWireframeAttribute(B),he===void 0)return;Ae=2}const Ce=B.drawRange,Te=B.attributes.position;let Ge=Ce.start*Ae,Ze=(Ce.start+Ce.count)*Ae;Q!==null&&(Ge=Math.max(Ge,Q.start*Ae),Ze=Math.min(Ze,(Q.start+Q.count)*Ae)),he!==null?(Ge=Math.max(Ge,0),Ze=Math.min(Ze,he.count)):Te!=null&&(Ge=Math.max(Ge,0),Ze=Math.min(Ze,Te.count));const dt=Ze-Ge;if(dt<0||dt===1/0)return;ae.setup(N,z,pe,B,he);let nt,Qe=le;if(he!==null&&(nt=b.get(he),Qe=we,Qe.setIndex(nt)),N.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*St()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(N.isLine){let be=z.linewidth;be===void 0&&(be=1),ge.setLineWidth(be*St()),N.isLineSegments?Qe.setMode(R.LINES):N.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else N.isPoints?Qe.setMode(R.POINTS):N.isSprite&&Qe.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,lt=N._multiDrawCounts,qe=N._multiDrawCount,Ot=he?b.get(he).bytesPerElement:1,si=_e.get(z).currentProgram.getUniforms();for(let Bt=0;Bt<qe;Bt++)si.setValue(R,"_gl_DrawID",Bt),Qe.render(be[Bt]/Ot,lt[Bt])}else if(N.isInstancedMesh)Qe.renderInstances(Ge,dt,N.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,lt=Math.min(B.instanceCount,be);Qe.renderInstances(Ge,dt,lt)}else Qe.render(Ge,dt)};function tt(M,U,B){M.transparent===!0&&M.side===Ht&&M.forceSinglePass===!1?(M.side=Ft,M.needsUpdate=!0,ls(M,U,B),M.side=Un,M.needsUpdate=!0,ls(M,U,B),M.side=Ht):ls(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),u=Se.get(B),u.init(U),S.push(u),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){const pe=Q[oe];tt(pe,B,N),z.add(pe)}else tt(Q,B,N),z.add(Q)}),u=S.pop(),z},this.compileAsync=function(M,U,B=null){const z=this.compile(M,U,B);return new Promise(N=>{function Q(){if(z.forEach(function(oe){_e.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){N(M);return}setTimeout(Q,10)}Ue.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ke=null;function pn(M){Ke&&Ke(M)}function en(){Nn.stop()}function Za(){Nn.start()}const Nn=new nc;Nn.setAnimationLoop(pn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(M){Ke=M,te.setAnimationLoop(M),M===null?Nn.stop():Nn.start()},te.addEventListener("sessionstart",en),te.addEventListener("sessionend",Za),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(U),U=te.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,I),u=Se.get(M,S.length),u.init(U),S.push(u),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(j,cn,U.reversedDepth),Y=this.localClippingEnabled,$e=ne.init(this.clippingPlanes,Y),m=G.get(M,T.length),m.init(),T.push(m),te.enabled===!0&&te.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&nr(Q,U,-1/0,v.sortObjects)}nr(M,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,ce),Xe=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Xe&&ve.addToRenderList(m,M),this.info.render.frame++,$e===!0&&ne.beginShadows();const B=u.state.shadowsArray;xe.render(B,M,U),$e===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(u.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let oe=0,pe=Q.length;oe<pe;oe++){const he=Q[oe];Ja(z,N,M,he)}Xe&&ve.render(M);for(let oe=0,pe=Q.length;oe<pe;oe++){const he=Q[oe];ja(m,M,he,he.viewport)}}else N.length>0&&Ja(z,N,M,U),Xe&&ve.render(M),ja(m,M,U);I!==null&&C===0&&(Oe.updateMultisampleRenderTarget(I),Oe.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(v,M,U),ae.resetDefaultState(),y=-1,E=null,S.pop(),S.length>0?(u=S[S.length-1],$e===!0&&ne.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function nr(M,U,B,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||st.intersectsSprite(M)){z&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const oe=O.update(M),pe=M.material;pe.visible&&m.push(M,oe,pe,B,Pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||st.intersectsObject(M))){const oe=O.update(M),pe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Pe.copy(oe.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(pe)){const he=oe.groups;for(let Ae=0,Ce=he.length;Ae<Ce;Ae++){const Te=he[Ae],Ge=pe[Te.materialIndex];Ge&&Ge.visible&&m.push(M,oe,Ge,B,Pe.z,Te)}}else pe.visible&&m.push(M,oe,pe,B,Pe.z,null)}}const Q=M.children;for(let oe=0,pe=Q.length;oe<pe;oe++)nr(Q[oe],U,B,z)}function ja(M,U,B,z){const N=M.opaque,Q=M.transmissive,oe=M.transparent;u.setupLightsView(B),$e===!0&&ne.setGlobalState(v.clippingPlanes,B),z&&ge.viewport(P.copy(z)),N.length>0&&os(N,U,B),Q.length>0&&os(Q,U,B),oe.length>0&&os(oe,U,B),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ja(M,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Qn(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?rs:un,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const Q=u.state.transmissionRenderTarget[z.id],oe=z.viewport||P;Q.setSize(oe.z*v.transmissionResolutionScale,oe.w*v.transmissionResolutionScale);const pe=v.getRenderTarget(),he=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(q),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&ve.render(B);const Ce=v.toneMapping;v.toneMapping=Dn;const Te=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),$e===!0&&ne.setGlobalState(v.clippingPlanes,z),os(M,B,z),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ze=0,dt=U.length;Ze<dt;Ze++){const nt=U[Ze],Qe=nt.object,be=nt.geometry,lt=nt.material,qe=nt.group;if(lt.side===Ht&&Qe.layers.test(z.layers)){const Ot=lt.side;lt.side=Ft,lt.needsUpdate=!0,Qa(Qe,B,z,be,lt,qe),lt.side=Ot,lt.needsUpdate=!0,Ge=!0}}Ge===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}v.setRenderTarget(pe,he,Ae),v.setClearColor(q,W),Te!==void 0&&(z.viewport=Te),v.toneMapping=Ce}function os(M,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=M.length;N<Q;N++){const oe=M[N],pe=oe.object,he=oe.geometry,Ae=oe.group;let Ce=oe.material;Ce.allowOverride===!0&&z!==null&&(Ce=z),pe.layers.test(B.layers)&&Qa(pe,U,B,he,Ce,Ae)}}function Qa(M,U,B,z,N,Q){M.onBeforeRender(v,U,B,z,N,Q),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,U,B,z,M,Q),N.transparent===!0&&N.side===Ht&&N.forceSinglePass===!1?(N.side=Ft,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,Q),N.side=Un,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,Q),N.side=Ht):v.renderBufferDirect(B,U,z,N,M,Q),M.onAfterRender(v,U,B,z,N,Q)}function ls(M,U,B){U.isScene!==!0&&(U=Ee);const z=_e.get(M),N=u.state.lights,Q=u.state.shadowsArray,oe=N.state.version,pe=V.getParameters(M,N.state,Q,U,B),he=V.getProgramCacheKey(pe);let Ae=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?ft:xt).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",$),Ae=new Map,z.programs=Ae);let Ce=Ae.get(he);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===oe)return to(M,pe),Ce}else pe.uniforms=V.getUniforms(M),M.onBeforeCompile(pe,v),Ce=V.acquireProgram(pe,he),Ae.set(he,Ce),z.uniforms=pe.uniforms;const Te=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Te.clippingPlanes=ne.uniform),to(M,pe),z.needsLights=uc(M),z.lightsStateVersion=oe,z.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function eo(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Vs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function to(M,U){const B=_e.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function hc(M,U,B,z,N){U.isScene!==!0&&(U=Ee),Oe.resetTextureUnits();const Q=U.fog,oe=z.isMeshStandardMaterial?U.environment:null,pe=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ci,he=(z.isMeshStandardMaterial?ft:xt).get(z.envMap||oe),Ae=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ce=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,Ge=!!B.morphAttributes.normal,Ze=!!B.morphAttributes.color;let dt=Dn;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=v.toneMapping);const nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=nt!==void 0?nt.length:0,be=_e.get(z),lt=u.state.lights;if($e===!0&&(Y===!0||M!==E)){const At=M===E&&z.id===y;ne.setState(z,M,At)}let qe=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==lt.state.version||be.outputColorSpace!==pe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==he||z.fog===!0&&be.fog!==Q||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==Ae||be.vertexTangents!==Ce||be.morphTargets!==Te||be.morphNormals!==Ge||be.morphColors!==Ze||be.toneMapping!==dt||be.morphTargetsCount!==Qe)&&(qe=!0):(qe=!0,be.__version=z.version);let Ot=be.currentProgram;qe===!0&&(Ot=ls(z,U,N));let si=!1,Bt=!1,Ni=!1;const ct=Ot.getUniforms(),Vt=be.uniforms;if(ge.useProgram(Ot.program)&&(si=!0,Bt=!0,Ni=!0),z.id!==y&&(y=z.id,Bt=!0),si||E!==M){ge.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",M.projectionMatrix),ct.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ut=ct.map.cameraPosition;Ut!==void 0&&Ut.setValue(R,fe.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ct.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Bt=!0,Ni=!0)}if(N.isSkinnedMesh){ct.setOptional(R,N,"bindMatrix"),ct.setOptional(R,N,"bindMatrixInverse");const At=N.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ct.setValue(R,"boneTexture",At.boneTexture,Oe))}N.isBatchedMesh&&(ct.setOptional(R,N,"batchingTexture"),ct.setValue(R,"batchingTexture",N._matricesTexture,Oe),ct.setOptional(R,N,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",N._indirectTexture,Oe),ct.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",N._colorsTexture,Oe));const Wt=B.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&ee.update(N,B,Ot),(Bt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,ct.setValue(R,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Vt.envMap.value=he,Vt.flipEnvMap.value=he.isCubeTexture&&he.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Vt.envMapIntensity.value=U.environmentIntensity),Bt&&(ct.setValue(R,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&dc(Vt,Ni),Q&&z.fog===!0&&K.refreshFogUniforms(Vt,Q),K.refreshMaterialUniforms(Vt,z,H,Z,u.state.transmissionRenderTarget[M.id]),Vs.upload(R,eo(be),Vt,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vs.upload(R,eo(be),Vt,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ct.setValue(R,"center",N.center),ct.setValue(R,"modelViewMatrix",N.modelViewMatrix),ct.setValue(R,"normalMatrix",N.normalMatrix),ct.setValue(R,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const At=z.uniformsGroups;for(let Ut=0,ir=At.length;Ut<ir;Ut++){const Fn=At[Ut];Ne.update(Fn,Ot),Ne.bind(Fn,Ot)}}return Ot}function dc(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function uc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,B){const z=_e.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),_e.get(M.texture).__webglTexture=U,_e.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const B=_e.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const fc=R.createFramebuffer();this.setRenderTarget=function(M,U=0,B=0){I=M,w=U,C=B;let z=!0,N=null,Q=!1,oe=!1;if(M){const he=_e.get(M);if(he.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(he.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(he.__hasExternalTextures)Oe.rebindTextures(M,_e.get(M.texture).__webglTexture,_e.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(he.__boundDepthTexture!==Te){if(Te!==null&&_e.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(oe=!0);const Ce=_e.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?N=Ce[U][B]:N=Ce[U],Q=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?N=_e.get(M).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[B]:N=Ce,P.copy(M.viewport),F.copy(M.scissor),k=M.scissorTest}else P.copy(ye).multiplyScalar(H).floor(),F.copy(He).multiplyScalar(H).floor(),k=et;if(B!==0&&(N=fc),ge.bindFramebuffer(R.FRAMEBUFFER,N)&&z&&ge.drawBuffers(M,N),ge.viewport(P),ge.scissor(F),ge.setScissorTest(k),Q){const he=_e.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,he.__webglTexture,B)}else if(oe){const he=U;for(let Ae=0;Ae<M.textures.length;Ae++){const Ce=_e.get(M.textures[Ae]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,B,he)}}else if(M!==null&&B!==0){const he=_e.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,he.__webglTexture,B)}y=-1},this.readRenderTargetPixels=function(M,U,B,z,N,Q,oe,pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he){ge.bindFramebuffer(R.FRAMEBUFFER,he);try{const Ae=M.textures[pe],Ce=Ae.format,Te=Ae.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,B,z,N,Me.convert(Ce),Me.convert(Te),Q))}finally{const Ae=I!==null?_e.get(I).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,z,N,Q,oe,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=_e.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&oe!==void 0&&(he=he[oe]),he)if(U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N){ge.bindFramebuffer(R.FRAMEBUFFER,he);const Ae=M.textures[pe],Ce=Ae.format,Te=Ae.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.bufferData(R.PIXEL_PACK_BUFFER,Q.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pe),R.readPixels(U,B,z,N,Me.convert(Ce),Me.convert(Te),0);const Ze=I!==null?_e.get(I).__webglFramebuffer:null;ge.bindFramebuffer(R.FRAMEBUFFER,Ze);const dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xh(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Q),R.deleteBuffer(Ge),R.deleteSync(dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(M.image.width*z),Q=Math.floor(M.image.height*z),oe=U!==null?U.x:0,pe=U!==null?U.y:0;Oe.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,oe,pe,N,Q),ge.unbindTexture()};const pc=R.createFramebuffer(),mc=R.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,z=null,N=0,Q=null){Q===null&&(N!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let oe,pe,he,Ae,Ce,Te,Ge,Ze,dt;const nt=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(B!==null)oe=B.max.x-B.min.x,pe=B.max.y-B.min.y,he=B.isBox3?B.max.z-B.min.z:1,Ae=B.min.x,Ce=B.min.y,Te=B.isBox3?B.min.z:0;else{const Wt=Math.pow(2,-N);oe=Math.floor(nt.width*Wt),pe=Math.floor(nt.height*Wt),M.isDataArrayTexture?he=nt.depth:M.isData3DTexture?he=Math.floor(nt.depth*Wt):he=1,Ae=0,Ce=0,Te=0}z!==null?(Ge=z.x,Ze=z.y,dt=z.z):(Ge=0,Ze=0,dt=0);const Qe=Me.convert(U.format),be=Me.convert(U.type);let lt;U.isData3DTexture?(Oe.setTexture3D(U,0),lt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Oe.setTexture2DArray(U,0),lt=R.TEXTURE_2D_ARRAY):(Oe.setTexture2D(U,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const qe=R.getParameter(R.UNPACK_ROW_LENGTH),Ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),si=R.getParameter(R.UNPACK_SKIP_PIXELS),Bt=R.getParameter(R.UNPACK_SKIP_ROWS),Ni=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,nt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,nt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ae),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ce),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);const ct=M.isDataArrayTexture||M.isData3DTexture,Vt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const Wt=_e.get(M),At=_e.get(U),Ut=_e.get(Wt.__renderTarget),ir=_e.get(At.__renderTarget);ge.bindFramebuffer(R.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Fn=0;Fn<he;Fn++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(M).__webglTexture,N,Te+Fn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_e.get(U).__webglTexture,Q,dt+Fn)),R.blitFramebuffer(Ae,Ce,oe,pe,Ge,Ze,oe,pe,R.DEPTH_BUFFER_BIT,R.NEAREST);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||_e.has(M)){const Wt=_e.get(M),At=_e.get(U);ge.bindFramebuffer(R.READ_FRAMEBUFFER,pc),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,mc);for(let Ut=0;Ut<he;Ut++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Wt.__webglTexture,N,Te+Ut):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Wt.__webglTexture,N),Vt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,At.__webglTexture,Q,dt+Ut):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,At.__webglTexture,Q),N!==0?R.blitFramebuffer(Ae,Ce,oe,pe,Ge,Ze,oe,pe,R.COLOR_BUFFER_BIT,R.NEAREST):Vt?R.copyTexSubImage3D(lt,Q,Ge,Ze,dt+Ut,Ae,Ce,oe,pe):R.copyTexSubImage2D(lt,Q,Ge,Ze,Ae,Ce,oe,pe);ge.bindFramebuffer(R.READ_FRAMEBUFFER,null),ge.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Vt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(lt,Q,Ge,Ze,dt,oe,pe,he,Qe,be,nt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,Q,Ge,Ze,dt,oe,pe,he,Qe,nt.data):R.texSubImage3D(lt,Q,Ge,Ze,dt,oe,pe,he,Qe,be,nt):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Q,Ge,Ze,oe,pe,Qe,be,nt.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Q,Ge,Ze,nt.width,nt.height,Qe,nt.data):R.texSubImage2D(R.TEXTURE_2D,Q,Ge,Ze,oe,pe,Qe,be,nt);R.pixelStorei(R.UNPACK_ROW_LENGTH,qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,si),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ni),Q===0&&U.generateMipmaps&&R.generateMipmap(lt),ge.unbindTexture()},this.initRenderTarget=function(M){_e.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,ge.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Vm{constructor(e){this.camera=e}yaw=0;pitch=.45;distance=12;focus=new D;desired=new D;direction=new D;raycaster=new sd;hits=[];initialized=!1;rotate(e,t,n=1){this.yaw-=e*.002*n,this.pitch=Ca.clamp(this.pitch+t*.002*n,.12,1.15)}update(e,t,n=!1,i=5,r=[]){this.focus.copy(e),this.focus.y+=1.4;const a=this.distance+Math.min(5,i*.018);this.direction.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),this.raycaster.set(this.focus,this.direction),this.raycaster.far=a,this.hits.length=0,this.raycaster.intersectObjects(r,!0,this.hits);const o=this.hits.length?Math.max(.3,this.hits[0].distance-.3):a;this.desired.copy(this.focus).addScaledVector(this.direction,o),!this.initialized||this.hits.length?this.camera.position.copy(this.desired):this.camera.position.lerp(this.desired,1-Math.exp(-12*t)),this.initialized=!0,this.camera.lookAt(this.focus),this.camera.fov=Ca.damp(this.camera.fov,n?65:58,8,t),this.camera.updateProjectionMatrix()}reset(){this.initialized=!1,this.yaw=0,this.pitch=.45}}class Wm{constructor(e,t=256){this.capacity=t,this.positions=new Float32Array(t*3),this.velocities=new Float32Array(t*3),this.life=new Float32Array(t),this.mesh=new Kn(new ei(.12,0),new It({color:16777215}),t),this.mesh.instanceMatrix.setUsage(qi),this.mesh.frustumCulled=!1,this.transform.scale.setScalar(0),this.transform.updateMatrix();for(let n=0;n<t;n++)this.mesh.setMatrixAt(n,this.transform.matrix),this.mesh.setColorAt(n,this.color);e.add(this.mesh)}mesh;positions;velocities;life;transform=new it;color=new Ie;cursor=0;burst(e,t,n,i=10406715,r=12){this.color.setHex(i);for(let a=0;a<Math.min(r,this.capacity);a++){const o=this.cursor;this.cursor=(this.cursor+1)%this.capacity;const l=o*3;this.positions[l]=e,this.positions[l+1]=t,this.positions[l+2]=n,this.velocities[l]=(Math.random()-.5)*6,this.velocities[l+1]=2+Math.random()*3,this.velocities[l+2]=(Math.random()-.5)*6,this.life[o]=.5+Math.random()*.4,this.mesh.setColorAt(o,this.color)}this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(e){for(let t=0;t<this.capacity;t++){if(this.life[t]<=0)continue;const n=t*3;this.life[t]=Math.max(0,this.life[t]-e),this.velocities[n+1]-=9.8*e;for(let i=0;i<3;i++)this.positions[n+i]+=this.velocities[n+i]*e;this.transform.position.fromArray(this.positions,n),this.transform.scale.setScalar(Math.min(1,this.life[t]*5)),this.transform.updateMatrix(),this.mesh.setMatrixAt(t,this.transform.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.life.fill(0),this.transform.scale.setScalar(0),this.transform.updateMatrix();for(let e=0;e<this.capacity;e++)this.mesh.setMatrixAt(e,this.transform.matrix);this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh.dispose()}}const Xm={name:"",kicker:"",goal:"",seed:1,civs:24,guards:0,riflemen:0,shotgunners:0,grenadiers:0,riot:0,heavies:0,flamers:0,snipers:0,drones:0,sappers:0,barricadeLines:0,shelters:1,infectionTarget:.62,note:"",biome:0,weather:0,hpScale:1,elite:!1},Ct=s=>({...Xm,...s}),Ki=[Ct({name:"SUBURBS",kicker:"DISTRICT 1 / 5",goal:"GROW THE HORDE",seed:1337,civs:30,guards:2,infectionTarget:.55,biome:0,weather:0,note:"Quiet streets. Loud soon."}),Ct({name:"DOWNTOWN",kicker:"DISTRICT 2 / 5",goal:"INFECT THE SHOPPING DISTRICT",seed:2401,civs:36,guards:4,riflemen:4,shotgunners:2,barricadeLines:1,shelters:2,infectionTarget:.6,biome:1,weather:1,note:"Police first response."}),Ct({name:"POLICE BLOCK",kicker:"DISTRICT 3 / 5",goal:"BREAK THE POLICE LINE",seed:3505,civs:26,guards:3,riflemen:6,shotgunners:3,grenadiers:2,riot:2,barricadeLines:2,infectionTarget:.62,biome:2,weather:4,note:"They brought grenades."}),Ct({name:"INDUSTRIAL BELT",kicker:"DISTRICT 4 / 5",goal:"OVERRUN THE FACTORY FLOOR",seed:4608,civs:30,guards:2,riflemen:7,shotgunners:3,grenadiers:3,riot:2,heavies:1,barricadeLines:2,infectionTarget:.65,biome:3,weather:5,note:"Toxic pipes, tight alleys."}),Ct({name:"LAST EVACUATION",kicker:"DISTRICT 5 / 5",goal:"BREAK THE FINAL LINE",seed:5701,civs:22,guards:4,riflemen:8,shotgunners:4,grenadiers:3,riot:2,heavies:2,barricadeLines:2,infectionTarget:.75,biome:4,weather:1,note:"The last buses are leaving."})],Vi=[Ct({name:"WINTER HEIGHTS",kicker:"SECTOR 6",seed:6103,civs:28,guards:4,riflemen:8,shotgunners:4,grenadiers:3,riot:2,heavies:2,snipers:1,drones:2,barricadeLines:2,infectionTarget:.64,biome:5,weather:2,hpScale:1.15,note:"Snow muffles the screaming."}),Ct({name:"ASHEN FIELDS",kicker:"SECTOR 7",seed:6209,civs:30,guards:3,riflemen:9,shotgunners:3,grenadiers:4,riot:2,heavies:2,flamers:2,drones:3,barricadeLines:2,infectionTarget:.64,biome:6,weather:5,hpScale:1.2,note:"The crops burn on their own."}),Ct({name:"FROZEN QUARTER",kicker:"SECTOR 8",seed:6317,civs:26,guards:5,riflemen:8,shotgunners:4,grenadiers:3,riot:3,heavies:2,snipers:2,sappers:2,barricadeLines:3,infectionTarget:.66,biome:7,weather:2,hpScale:1.25,note:"Riot shields in the blizzard."}),Ct({name:"SUNBAKED ROWS",kicker:"SECTOR 9",seed:6421,civs:32,guards:4,riflemen:9,shotgunners:4,grenadiers:4,riot:2,heavies:3,flamers:2,drones:3,barricadeLines:2,infectionTarget:.64,biome:8,weather:3,hpScale:1.3,note:"Heat haze, hot lead."}),Ct({name:"EMBER GROVE",kicker:"SECTOR 10",seed:6527,civs:28,guards:4,riflemen:10,shotgunners:4,grenadiers:4,riot:3,heavies:3,flamers:3,snipers:2,barricadeLines:3,infectionTarget:.66,biome:9,weather:5,hpScale:1.35,note:"The orchard is a firewall."}),Ct({name:"PETROL STATION ROW",kicker:"SECTOR 11",seed:6631,civs:30,guards:5,riflemen:9,shotgunners:5,grenadiers:4,riot:3,heavies:3,flamers:2,sappers:3,drones:2,barricadeLines:2,infectionTarget:.66,biome:10,weather:3,hpScale:1.4,note:"Everything here explodes."}),Ct({name:"HARVEST HILLS",kicker:"SECTOR 12",seed:6737,civs:34,guards:4,riflemen:10,shotgunners:4,grenadiers:4,riot:3,heavies:3,snipers:2,drones:4,barricadeLines:3,infectionTarget:.68,biome:11,weather:0,hpScale:1.4,note:"Autumn leaves, autumn bones."}),Ct({name:"GREEN DISTRICT",kicker:"SECTOR 13",seed:6841,civs:30,guards:5,riflemen:11,shotgunners:5,grenadiers:5,riot:3,heavies:3,flamers:3,snipers:2,sappers:2,barricadeLines:3,infectionTarget:.68,biome:12,weather:1,hpScale:1.45,note:"Overgrowth hides the guns."}),Ct({name:"CRYO DEPOT",kicker:"SECTOR 14",seed:6953,civs:26,guards:5,riflemen:11,shotgunners:5,grenadiers:5,riot:4,heavies:3,snipers:3,drones:4,barricadeLines:3,infectionTarget:.7,biome:13,weather:2,hpScale:1.5,note:"They froze the sample. It woke up."}),Ct({name:"MOLTEN YARD",kicker:"SECTOR 15",seed:7069,civs:28,guards:6,riflemen:12,shotgunners:5,grenadiers:5,riot:4,heavies:4,flamers:4,snipers:2,sappers:3,barricadeLines:3,infectionTarget:.7,hpScale:1.55,elite:!0,biome:14,weather:5,note:"Scrap, fire, and the last holdouts."})],tn=(s,e)=>Math.min(14,Math.round(s*1.22**Math.min(e,16)));function ss(s){if(s<Ki.length)return Ki[s];const e=s-Ki.length;if(e<Vi.length)return Vi[e];const t=Math.floor(e/Vi.length),n=Vi[e%Vi.length];return{...n,kicker:`SECTOR ${s+1} · DEPTH ${t+1}`,seed:n.seed+t*97>>>0,civs:Math.min(40,n.civs+t*2),guards:tn(n.guards,t),riflemen:tn(n.riflemen,t),shotgunners:tn(n.shotgunners,t),grenadiers:tn(n.grenadiers,t),riot:tn(n.riot,t),heavies:tn(n.heavies,t),flamers:tn(n.flamers,t),snipers:tn(n.snipers,t),drones:tn(n.drones,t),sappers:tn(n.sappers,t),barricadeLines:Math.min(3,n.barricadeLines+t%2),hpScale:n.hpScale*(1+4*t/(t+12)),elite:t>0||n.elite}}const ue={turquoise:8102816,turquoiseDark:5209209,cream:14208436,creamDark:12364169,mustard:13214255,mustardDark:10714399,fadedRed:10501677,petrol:3104080,windowWarm:16763002,windowCold:11455999,neonTurquoise:4317398,neonRed:16729139,neonYellow:16766282,shadowWrap:1316120};function qm(s,e,t,n){const i=document.createElement("canvas");i.width=s,i.height=e;const r=i.getContext("2d");if(!r)throw new Error("Canvas 2D is required for procedural textures");const a=r.createImageData(s,e);let o=1234567;const l=()=>(o=Math.imul(o^o>>>15,o|1),o^=Math.imul(o^o>>>7,o|61),((o^o>>>14)>>>0)/4294967296),c=new Ie(t);for(let d=0;d<e;d++)for(let f=0;f<s;f++){const p=1+(l()-.5)*2*n,g=c.clone().multiplyScalar(Math.min(p,1.6)),x=(d*s+f)*4;a.data[x]=Math.round(g.r*255),a.data[x+1]=Math.round(g.g*255),a.data[x+2]=Math.round(g.b*255),a.data[x+3]=255}r.putImageData(a,0,0);const h=new jl(i);return h.colorSpace=Pt,h.anisotropy=4,h}function Ym(s,e,t,n=512,i=192){const r=document.createElement("canvas");r.width=n,r.height=i;const a=r.getContext("2d");if(!a)throw new Error("Canvas 2D is required for signage");const o=new Ie(t);a.fillStyle=`rgb(${Math.round(o.r*255)},${Math.round(o.g*255)},${Math.round(o.b*255)})`,a.fillRect(0,0,n,i);const l=new Ie(e);a.strokeStyle=`rgb(${Math.round(l.r*255)},${Math.round(l.g*255)},${Math.round(l.b*255)})`,a.lineWidth=10,a.strokeRect(4,4,n-8,i-8),a.fillStyle=a.strokeStyle,a.font=`bold ${Math.round(i*.52)}px "Arial Black", "Impact", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,n/2,i/2+8);let c=99;const h=()=>(c=Math.imul(c^c>>>15,c|1),c^=Math.imul(c^c>>>7,c|61),((c^c>>>14)>>>0)/4294967296);for(let f=0;f<26;f++)a.fillStyle=`rgba(0,0,0,${.04+h()*.1})`,a.fillRect(h()*n,h()*i,n*(.05+h()*.2),3+h()*7);const d=new jl(r);return d.colorSpace=Pt,d.anisotropy=4,d}const $m=[{ground:4353098,road:3360838,pavement:9016451,foliage:3572299,tips:9549909,roof:7439212,wall:7771771,sky:8629681,sun:16772290,fog:.0105},{ground:9142346,road:6641478,pavement:12167810,foliage:6781755,tips:11182159,roof:11575419,wall:12360293,sky:12889477,sun:16761214,fog:.011},{ground:7755836,road:4472379,pavement:9995893,foliage:10833449,tips:13998905,roof:8874064,wall:10189148,sky:10261904,sun:16765089,fog:.013},{ground:12900828,road:7112593,pavement:11849172,foliage:5405564,tips:14937583,roof:14805480,wall:8428973,sky:10468297,sun:13428991,fog:.016}],pl=[0,1,2,2,0,3,2,3,1,2,1,2,0,3,1];class ml{constructor(e){this.index=e;const t=ss(e);this.seed=t.seed,this.archetype=e<5?e:5+(e-5)%10,this.atmosphere=$m[pl[t.biome]??0],this.data={index:e,boxes:[],barriers:[],shelters:[],spawn:{x:0,z:45},exit:{x:0,z:-48},biome:t.biome,weather:t.weather},this.ground();const n=this.archetype,r=[["MOONLIGHT DINER","SUNSET HOMES","GOOD DAY MART","RADIO REPAIR","PALM PHARMACY","LAST CALL"],["STARDUST MOTEL","RECORD ROOM","ATOMIC LAUNDRY","THE ORBIT","FRESH FARE","NIGHT OWL"],["PRECINCT 09","CIVIL DEFENSE","CITY RECORDS","POLICE GARAGE","COURTHOUSE","SAFE ZONE"],["NOVA CHEMICAL","LOADING BAY 04","UNION WORKS","PRESSURE CO.","NIGHT SHIFT","DANGER"],["EVAC TERMINAL","TICKET OFFICE","GATE B","LAST DEPARTURE","TRANSIT AUTH.","NO RETURN"],["FROSTLINE MOTEL","SKI & SURVIVAL","GLACIER GAS","WINTER RECORDS","SNOWPLOW CO.","COLD STORAGE"],["ASH TOBACCO","BURN BAR","CINDER CAFE","CHARCOAL CO.","SMOKE SIGNALS","FIREWATCH"],["PERMAFROST BANK","ICY DONUTS","POLAR PLUMBING","FROSTBIT FASHION","COLD CUTS","THAW & GO"],["MIRAGE MOTEL","SUNSHINE SOLAR","DESERT DINER","OASIS OIL","TAN LINES","HEAT INDEX"],["EMBER ORCHARDS","CIDER CELLAR","SMOKEHOUSE 12","FLAMEBROIL","CAMP SUPPLY","BURN BAN"],["OCTANE STATION","PUMP 66","LUBE & TUNE","DIESEL DEN","TIRE TIME","NO SMOKING"],["HARVEST HALL","GRAIN & GROAN","CIDER PRESS","SILO SUPPLY","SCARECROW CO.","PUMPKIN PATCH"],["OVERGROWTH FLORAL","VINE DINER","GREENHOUSE 9","COMPOST CO.","RAINFOREST FM","WEED WACKERS"],["CRYO STORAGE","ICE DELIVERY","FROSTBITE FX","DEEP FREEZE","COLD CHAIN","ABSOLUTE ZERO"],["FOUNDRY 7","SCRAP KING","MAGMA MFG","RED HOT WELDING","ALLOY & ANVIL","MELTDOWN"]][n];for(const a of[-1,1])for(let o=0;o<4;o++){const l=n>=5,c=n===6||n===9||n===11||n===12;if(l&&c&&o%2===(a>0?1:0))continue;const h=34-o*25+(l?(this.rand()-.5)*4:0),d=l?12+this.rand()*5:19,f=l?(c?12:15)+this.rand()*5:19,p=n===0?5+this.rand()*3:c||n===8||n===10?4.8+this.rand()*3:n===3||n===14?8+this.rand()*5:9+this.rand()*9,g=a*(l?19+d/2+this.rand()*2:25.5);this.building(g,h,d,p,f,r[(o+(a>0?2:0))%r.length],a,o)}for(let a=0;a<12;a++){const o=a%2?-1:1,l=45-Math.floor(a/2)*18;this.lamp(o*11.9,l,o),a%3!==1&&Math.abs(l+5-8)>4&&Math.abs(l+5+31)>4&&this.tree(o*14,l+5,n===3||n===14?.65:1),a%2===0&&n!==9&&n!==11&&n!==12&&this.car(o*(9.8+(n>=5?this.rand():0)),l-7,a%4===0?ue.turquoise:ue.fadedRed,n===2||n===4),this.add("box",o*12.4,.5,l+2,.55,1,.6,ue.mustardDark),this.add("box",o*12.4,1.03,l+2,.7,.1,.75,ue.petrol),this.add("box",o*13.2,.62,l-3,.7,.16,2.1,ue.creamDark);for(const c of[-.75,.75])this.add("pole",o*13.2,.3,l-3+c,.09,.6,.09,ue.shadowWrap)}(n===3||n===14)&&this.factory(),n===4&&this.terminal(),n>=5&&this.sectorProps(),this.shelters(t.shelters);for(let a=0;a<t.barricadeLines;a++)this.barrier({id:100+a,x:0,z:t.barricadeLines===3?18-a*27:a===0?-12:-39,hx:7.6,hz:.65,hp:n===4?1100:420+Math.min(e,24)*130,maxHp:n===4?1100:420+Math.min(e,24)*130,kind:n===4&&a===1?"gate":n>1?"police":"wood",open:!1});this.exitMarker=this.marker(e>=5?"INFECTION SPREADS":"NEXT DISTRICT",0,-48,ue.neonTurquoise),this.root.add(this.exitMarker),this.flush(),this.createWeather()}root=new En;obstacles=[];data;exitMarker;atmosphere;archetype;pieces={box:[],round:[],pole:[],glow:[]};dummy=new it;barrierViews=new Map;textures=[];weatherMaterial;seed;rand(){return this.seed=Math.imul(1664525,this.seed)+1013904223|0,(this.seed>>>0)/4294967296}add(e,t,n,i,r,a,o,l,c=0,h=0,d=0){this.dummy.position.set(t,n,i),this.dummy.scale.set(r,a,o),this.dummy.rotation.set(c,h,d),this.dummy.updateMatrix(),this.pieces[e].push({matrix:this.dummy.matrix.clone(),color:l})}ground(){const e=qm(128,128,8689047,.12);e.wrapS=e.wrapT=Ws,e.repeat.set(30,40),this.textures.push(e);const t=new ht(new Ii(300,300),new Ei({color:this.atmosphere.ground,map:e,roughness:1}));t.rotation.x=-Math.PI/2,t.position.y=-.05,t.receiveShadow=!0,this.root.add(t),this.add("box",0,-.025,0,19,.04,124,this.atmosphere.road);for(const n of[-1,1]){this.add("box",n*12.6,.055,0,6.2,.13,122,this.atmosphere.pavement),this.add("box",n*9.65,.13,0,.3,.26,122,ue.creamDark);for(let i=-59;i<60;i+=4)this.add("box",n*12.6,.125,i,6.1,.014,.055,4150099);this.add("box",n*40,.8,0,1,1.6,120,3691860),this.data.boxes.push({x:n*40,z:0,hx:.5,hz:60})}for(let n=-57;n<60;n+=7)this.add("box",-.2,.007,n,.1,.025,3,ue.mustard),this.add("box",.2,.007,n,.1,.025,3,ue.mustard);for(const n of[21.5,-3.5,-28.5]){this.add("box",0,.002,n,80,.025,4,this.atmosphere.road);for(let i=-7;i<=7;i+=2)this.add("box",i,.025,n+2.5,1.1,.025,2.7,10923416)}this.data.boxes.push({x:0,z:60,hx:40,hz:.5},{x:0,z:-60,hx:40,hz:.5}),this.add("box",0,.5,60,80,1,1,ue.petrol),this.add("box",0,.5,-60,80,1,1,ue.petrol);for(let n=0;n<100;n++){const i=n%2?-1:1,r=i*(10.3+this.rand()*7.5),a=(this.rand()-.5)*114;this.add("box",r,.145,a,.3+this.rand()*1.4,.03,.2+this.rand()*.8,this.atmosphere.tips,0,this.rand()*Math.PI)}for(let n=0;n<50;n++){const i=(this.rand()-.5)*260,r=-90-this.rand()*65,a=12+this.rand()*35;this.add("box",i,a/2-1,r,7+this.rand()*9,a,10,2313044)}}building(e,t,n,i,r,a,o,l){const c=[this.atmosphere.wall,this.atmosphere.pavement,9135703,this.atmosphere.wall,6650737],h=e-o*n/2;this.data.boxes.push({x:e,z:t,hx:n/2,hz:r/2});const d=new ht(new qt(n,i,r),new It({visible:!1}));d.position.set(e,i/2,t),this.root.add(d),this.obstacles.push(d),this.add("box",e,i/2,t,n,i,r,c[(l+this.archetype)%c.length]),this.add("box",e,i+.15,t,n+.5,.35,r+.5,this.atmosphere.roof),this.add("box",e,i+.5,t,n-1,.5,r-1,this.atmosphere.roof),this.add("box",h-o*.22,1.5,t,.35,3,r,2705996),this.add("box",h-o*.55,3.2,t,1.6,.32,r+.4,l%2?ue.mustard:ue.fadedRed);for(let f=-r/2+2;f<=r/2-2;f+=3.6)this.add("box",h-o*.24,1.75,t+f,.1,1.8,2.9,1191477),this.add("glow",h-o*.3,1.8,t+f,.05,1.35,2.55,l%2?15119977:8372924),this.add("box",h-o*.35,1.8,t+f,.1,1.8,.075,ue.creamDark);for(let f=5;f<i-1;f+=2.9)for(let p=-r/2+2;p<=r/2-2;p+=3.5)this.add("box",h-o*.06,f,t+p,.18,2.05,1.85,2112835),this.add(this.rand()>.35?"glow":"box",h-o*.17,f,t+p,.035,1.7,1.5,this.rand()>.4?12297836:5146765),this.add("box",h-o*.2,f,t+p,.06,1.75,.08,ue.petrol);this.sign(a,h-o*.45,4.1,t,Math.min(13,r-1),1.45,-o*Math.PI/2,l%2?ue.neonYellow:ue.neonTurquoise),this.add("box",e+3,i+1,t+3,3.6,1.5,3,4547944);for(let f=0;f<3;f++)this.add("box",e+1.7+f*1.2,i+1.8,t+3,.1,.2,3,ue.creamDark);if(this.index===0&&l===0){for(let f=-9;f<10;f+=1.2)this.add("box",h-o*.9,3.5,t+f,2.2,.28,.6,ue.cream,0,0,o*.12);this.sign("OPEN 24 / 7",h-o*.8,5.8,t,8,1.25,-o*Math.PI/2,ue.neonRed)}this.index===1&&l===0&&(this.add("pole",h-o*2,6,t+8,.12,12,.12,ue.creamDark),this.sign("MOTEL",h-o*2,10,t+8,3.6,2,0,ue.neonRed),this.sign("VACANCY",h-o*2,8.4,t+8,3.6,.8,0,ue.neonYellow))}sign(e,t,n,i,r,a,o,l){const c=Ym(e,l,1654083,1024,160);this.textures.push(c);const h=new ht(new Ii(r,a),new It({map:c,side:Ht,toneMapped:!1}));return h.position.set(t,n,i),h.rotation.y=o,this.root.add(h),h}lamp(e,t,n){this.add("pole",e,3.1,t,.11,6.2,.11,2639952),this.add("box",e-n*.7,6.1,t,1.5,.15,.14,ue.petrol),this.add("box",e-n*1.4,5.95,t,.75,.25,.7,ue.petrol),this.add("glow",e-n*1.4,5.79,t,.65,.045,.6,ue.windowWarm),this.add("box",e-n*1.6,.024,t,2.5,.013,2.4,6977636)}tree(e,t,n){this.add("pole",e,1.5*n,t,.23,3*n,.23,6576964),this.add("round",e,3.8*n,t,2.1*n,2.8*n,2.1*n,this.atmosphere.foliage),this.add("round",e+.7,4.5*n,t+.2,1.8*n,2.1*n,1.6*n,this.atmosphere.tips),this.add("box",e,.16,t,2.5,.25,2.5,this.atmosphere.pavement),this.data.boxes.push({x:e,z:t,hx:.23,hz:.23})}car(e,t,n,i){this.data.boxes.push({x:e,z:t,hx:1.05,hz:2.21}),this.add("box",e,.72,t,1.8,.7,4.2,i?ue.cream:n),this.add("box",e,1.25,t+.25,1.55,.8,2.2,i?2374467:n),this.add("box",e,1.39,t+.25,1.6,.45,1.8,2180431),this.add("box",e,1.71,t+.25,1.6,.15,2.1,i?ue.cream:n),this.add("box",e,.5,t+2.13,1.9,.22,.15,ue.creamDark);for(const r of[-.93,.93])for(const a of[-1.3,1.3])this.add("pole",e+r,.43,t+a,.43,.24,.43,1584434,0,0,Math.PI/2);for(const r of[-.58,.58])this.add("glow",e+r,.8,t+2.14,.35,.26,.03,ue.windowWarm);i&&(this.add("glow",e-.35,1.89,t+.25,.55,.2,.35,ue.neonRed),this.add("glow",e+.35,1.89,t+.25,.55,.2,.35,ue.neonTurquoise))}cover(e,t,n,i,r,a){this.add("box",e,i/2,t,n,i,r,a),this.data.boxes.push({x:e,z:t,hx:n/2,hz:r/2})}sectorProps(){for(let e=0;e<8;e++){const t=e%2?-1:1,n=t*16.8,i=38-Math.floor(e/2)*24+(this.rand()-.5)*4;switch(this.archetype){case 5:this.cover(n,i,2.8,.85,7,this.atmosphere.roof),this.tree(t*18,i+6,1.25);break;case 6:this.cover(n,i,2.4,1.2,3.8,4799280);for(let r=0;r<4;r++)this.add("pole",n,1.8,i+3+r*1.4,.12,3.6,.12,3354152),this.add("box",n+t*.3,2.5,i+3+r*1.4,.8,.13,.13,3354152,0,0,t*.4);break;case 7:this.cover(n,i,2.8,1.8,6,9416379),this.add("box",n,1.9,i,3,.2,6.2,this.atmosphere.roof),this.add("glow",n-t*1.42,1.1,i,.04,.16,4.8,ue.neonTurquoise);break;case 8:this.cover(n,i,2.6,1,4,12817498),this.add("box",n,3,i,3.4,.18,5,ue.mustard);for(const r of[-2,2])this.add("pole",n,1.5,i+r,.08,3,.08,ue.creamDark);break;case 9:this.cover(n,i,2.3,1.1,3,9528636);for(const r of[-6,6])this.tree(n,i+r,1.2);this.add("round",n,1.45,i,2.2,.8,2.8,12941365);break;case 10:this.cover(n,i,2,1.8,2,ue.fadedRed),this.add("box",n,2.2,i,1.6,.8,1.8,ue.cream),this.add("glow",n-t*.81,2.2,i,.03,.35,1.3,ue.neonTurquoise),this.add("box",n,4,i,3.8,.3,7,ue.fadedRed),this.add("pole",n+t*1.4,2,i,.12,4,.12,ue.creamDark);break;case 11:if(this.cover(n,i,2.6,1.5,4.5,11635523),this.add("box",n,1.52,i,2.6,.06,.25,7691065),e<2){const r=t*27,a=t>0?9:34;this.add("pole",r,4,a,3,8,3,10724500),this.data.boxes.push({x:r,z:a,hx:3,hz:3}),this.add("round",r,8,a,6,2,6,ue.creamDark)}break;case 12:this.cover(n,i,2.8,.9,5,5666394);for(const r of[-1.5,1.5])this.add("round",n,1.2,i+r,2.7,1.5,2.7,this.atmosphere.tips);this.tree(t*18,i+7,1.5);break;case 13:this.cover(n,i,2.8,3.4,9,11717585);for(let r=-4;r<=4;r++)this.add("box",n-t*1.42,1.7,i+r,.06,3.1,.07,6654357);this.add("glow",n-t*1.46,2.9,i,.04,.12,7.8,ue.neonTurquoise);break;case 14:this.cover(n,i,2.8,2.1,4,5524291),this.add("glow",n,2.12,i,2.4,.03,3.6,16747317),this.add("pole",n,4,i+4,.45,8,.45,7885627),this.data.boxes.push({x:n,z:i+4,hx:.45,hz:.45});break}e%2===0&&this.cover(t*(6.5+this.rand()),i-3,2.2,.8+this.rand()*.8,2+this.rand()*2,this.atmosphere.wall)}}factory(){for(const e of[-19,19])for(let t=16;t>-50;t-=25){this.add("pole",e,11,t,.7,22,.7,8612948),this.data.boxes.push({x:e,z:t,hx:.7,hz:.7});for(let n=12;n<22;n+=2)this.add("pole",e,n,t,.76,.5,.76,ue.fadedRed);this.add("pole",e,8.8,t,.7,12,.7,ue.mustard,Math.PI/2),this.add("round",e+1,24,t,3,4,3,5008754)}for(let e=0;e<4;e++){const t=e%2?32:-32,n=19-e*17;this.add("box",t,1.4,n,4.4,2.8,7,e%2?ue.fadedRed:ue.turquoiseDark),this.data.boxes.push({x:t,z:n,hx:2.2,hz:3.5});for(let i=-3;i<=3;i+=.5)this.add("box",t-Math.sign(t)*2.23,1.4,n+i,.08,2.7,.08,ue.creamDark)}}terminal(){for(const e of[-6,6]){this.data.boxes.push({x:e,z:-54,hx:1.8,hz:4.6}),this.add("box",e,1.7,-54,3.4,3.1,9,ue.mustard),this.add("box",e,2.5,-54,3.5,1.05,7.5,2112838),this.add("box",e,3.35,-54,3.6,.35,9.2,ue.cream);for(let n=-3;n<=3;n++)this.add("box",e,2.5,-54+n,3.6,1.1,.1,ue.creamDark);for(const n of[-1.65,1.65])for(const i of[-2.8,2.8])this.add("pole",e+n,.65,-54+i,.6,.3,.6,1584434,0,0,Math.PI/2)}for(const e of[-13,13])this.add("pole",e,5.5,-46,.16,11,.16,ue.creamDark),this.add("glow",e,10.9,-46,2,.5,.6,ue.windowCold);this.sign("EVACUATION / FINAL BOARDING",0,8.7,-48,23,2.5,0,ue.neonYellow),this.add("box",0,8.7,-48.1,24,3,.4,ue.petrol);for(const e of[-12,12])this.add("pole",e,4.3,-48,.2,8.6,.2,ue.creamDark)}shelters(e){for(let t=0;t<e;t++){const n=t%2?-14.4:14.4,i=t===0?8:-31,r=200+t;this.data.shelters.push({x:n,z:i,barrierId:r,opened:!1}),this.barrier({id:r,x:n,z:i,hx:.5,hz:2.3,hp:230+Math.min(this.index,24)*110,maxHp:230+Math.min(this.index,24)*110,kind:"shelter",open:!1}),this.sign("CIVILIAN SHELTER",n-Math.sign(n)*.55,4.5,i,7,1.2,-Math.sign(n)*Math.PI/2,ue.neonYellow),this.sign("BREAK IN",n-Math.sign(n)*.58,3.25,i,3.5,.6,-Math.sign(n)*Math.PI/2,ue.cream)}}barrier(e){this.data.barriers.push(e);const t=new En;t.position.set(e.x,0,e.z),e.kind==="shelter"&&(t.rotation.y=Math.PI/2);const n=e.kind==="shelter"?e.hz*2:e.hx*2,i=(e.kind==="shelter"?e.hx:e.hz)*2,r=e.kind==="gate"?3.5:e.kind==="shelter"?2.7:1.6,a=new Ei({color:e.kind==="wood"?10056520:4549745,roughness:.8}),o=[];for(let c=-n/2+.35;c<=n/2-.35;c+=.85){const h=new ht(new qt(.7,r,i),a);h.position.set(c,r/2,0),h.castShadow=!0,t.add(h),o.push(h)}for(const c of[.4,r-.25]){const h=new ht(new qt(n,.22,i),new Ei({color:ue.mustard}));h.position.y=c,t.add(h),o.push(h)}const l=new ht(new qt(n*.48,.12,.045),new It({color:ue.neonRed}));l.position.set(0,r+.16,i/2+.03),t.add(l),this.root.add(t),this.barrierViews.set(e.id,{root:t,slats:o,lamp:l})}marker(e,t,n,i){const r=new En;r.position.set(t,.05,n);const a=new ht(new is(2.7,2.85,48),new It({color:i,transparent:!0,opacity:.75,side:Ht}));a.rotation.x=-Math.PI/2,r.add(a);for(let l=0;l<3;l++){const c=new ht(new qa(.55,.75,3),new It({color:i}));c.rotation.x=-Math.PI/2,c.position.set(0,.12,1.2-l),r.add(c)}const o=this.sign(e,t,2.2,n,5,.7,0,i);return o.removeFromParent(),r.add(o),o.position.set(0,2.2,0),r}flush(){const e={box:new qt(1,1,1),round:new ei(.5,1),pole:new as(1,1,1,7),glow:new qt(1,1,1)},t=new Ie;for(const n of Object.keys(this.pieces)){const i=this.pieces[n],r=new Kn(e[n],n==="glow"?new It({color:16777215}):new Ei({color:16777215,roughness:.85,flatShading:!0}),i.length);for(let a=0;a<i.length;a++)r.setMatrixAt(a,i[a].matrix),r.setColorAt(a,t.setHex(i[a].color));r.castShadow=n!=="glow",r.receiveShadow=n!=="glow",r.computeBoundingSphere(),this.root.add(r),i.length=0}}createWeather(){const e=this.data.weather;if(e===0&&pl[this.data.biome]!==2)return;const t=e===0?6:e,n=t===1?1400:t===2?1e3:t===4?96:520,i=new Float32Array(n*3),r=new Float32Array(n);for(let l=0;l<n;l++)i[l*3]=(this.rand()-.5)*58,i[l*3+1]=this.rand()*18,i[l*3+2]=(this.rand()-.5)*118,r[l]=this.rand();const a=new bt;a.setAttribute("position",new Dt(i,3)),a.setAttribute("phase",new Dt(r,1)),this.weatherMaterial=new Tn({transparent:!0,depthWrite:!1,toneMapped:!1,uniforms:{time:{value:0},mode:{value:t},tint:{value:new Ie(t===1?12114152:t===2?15727359:t===3?15255941:t===4?11715265:t===5?13212544:13600828)}},vertexShader:`
        attribute float phase;
        uniform float time;
        uniform float mode;
        varying float vPhase;
        void main() {
          vPhase = phase;
          vec3 p = position;
          float speed = mode == 1.0 ? 19.0 : mode == 2.0 ? 2.0 : mode == 5.0 ? 0.8 : 0.5;
          p.y = mod(p.y - time * speed * (0.75 + phase * 0.5), 18.0) + 0.2;
          p.x = mod(p.x + 29.0 + time * (mode == 1.0 ? 2.7 : 1.3), 58.0) - 29.0;
          if (mode != 1.0) p.x += sin(time * 0.9 + phase * 30.0) * 0.8;
          if (mode == 3.0 || mode == 4.0) p.y = 0.5 + position.y * 0.15 + sin(time * 0.4 + phase * 20.0) * 0.3;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float size = mode == 1.0 ? 0.65 : mode == 2.0 ? 0.17 : mode == 4.0 ? 8.0 : mode == 3.0 ? 1.5 : 0.18;
          gl_PointSize = clamp(size * 650.0 / max(1.0, -mv.z), 1.0, 160.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float time;
        uniform float mode;
        uniform vec3 tint;
        varying float vPhase;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          if (mode == 1.0) uv.x = uv.x * 8.0 + uv.y * 0.8;
          float radius = length(uv);
          float alpha = 1.0 - smoothstep(0.08, 0.5, radius);
          alpha *= mode == 4.0 ? 0.045 : mode == 3.0 ? 0.075 : mode == 1.0 ? 0.38 : 0.72;
          if (mode == 3.0) alpha *= 0.5 + 0.5 * sin(time * 2.0 + vPhase * 30.0);
          if (alpha < 0.005) discard;
          gl_FragColor = vec4(tint, alpha);
        }`});const o=new Fo(a,this.weatherMaterial);o.frustumCulled=!1,this.root.add(o)}update(e,t){this.weatherMaterial&&(this.weatherMaterial.uniforms.time.value=e),this.exitMarker.visible=t,this.exitMarker.position.y=.06+Math.sin(e*3)*.025;for(const n of this.data.barriers){const i=this.barrierViews.get(n.id),r=1-Math.max(0,n.hp/n.maxHp);i.lamp.scale.x=Math.max(.02,1-r),i.lamp.material.color.setHex(n.open?ue.neonTurquoise:ue.neonRed);for(let a=0;a<i.slats.length;a++){const o=i.slats[a];o.rotation.z=n.open||n.hp<=0?(a%2?-1:1)*1.35:Math.sin(a*7)*r*.17,o.scale.y=n.open||n.hp<=0?.12:1-r*(a%3===0?.3:0),(n.open||n.hp<=0)&&(o.position.y=.12)}}}dispose(){this.root.removeFromParent();const e=new Set,t=new Set;this.root.traverse(n=>{if(n instanceof ht||n instanceof Fo){e.add(n.geometry);for(const i of Array.isArray(n.material)?n.material:[n.material])t.add(i);n instanceof Kn&&n.dispose()}});for(const n of e)n.dispose();for(const n of t)n.dispose();for(const n of this.textures)n.dispose();this.weatherMaterial=void 0,this.textures.length=0,this.barrierViews.clear(),this.obstacles.length=0,this.root.clear()}}const Km={leader:{skin:10797420,shirt:2706762,pants:2504508,accent:14769220,scale:1.25,width:1},walker:{skin:9615727,shirt:5863019,pants:3426646,accent:14006900,scale:1,width:1},runner:{skin:10802554,shirt:12752193,pants:3691862,accent:16766310,scale:.95,width:.78},brute:{skin:7839090,shirt:5524591,pants:3488593,accent:13281008,scale:1.52,width:1.5},bomber:{skin:14008170,shirt:10768439,pants:5784374,accent:16751168,scale:1.12,width:1.35},spitter:{skin:8767112,shirt:4221282,pants:3494732,accent:10157936,scale:1.08,width:.95},civilian:{skin:13937284,shirt:11892576,pants:3753816,accent:14992779,scale:1,width:.94},athlete:{skin:12158566,shirt:12891234,pants:3300706,accent:15982509,scale:1.05,width:.87},heavyCivilian:{skin:12818295,shirt:8429216,pants:4740203,accent:14470299,scale:1.08,width:1.3},worker:{skin:13672566,shirt:12554556,pants:5071721,accent:16767066,scale:1.03,width:1.08},medic:{skin:14004633,shirt:14013620,pants:5340278,accent:15031367,scale:1,width:.9},guard:{skin:13082752,shirt:5534344,pants:3557985,accent:15057765,scale:1.05,width:1},rifleman:{skin:12952189,shirt:6649702,pants:4216396,accent:14267772,scale:1.08,width:1.05},shotgunner:{skin:12095603,shirt:7364179,pants:3754322,accent:15636572,scale:1.12,width:1.15},grenadier:{skin:12690310,shirt:6517061,pants:4675139,accent:15377478,scale:1.1,width:1.12},riot:{skin:11506816,shirt:3889001,pants:2834513,accent:10143961,scale:1.13,width:1.13},heavy:{skin:11574662,shirt:4085340,pants:2703175,accent:15188592,scale:1.35,width:1.4},flamer:{skin:12950141,shirt:9062956,pants:4864556,accent:16742954,scale:1.14,width:1.18},sniper:{skin:12755332,shirt:5003844,pants:3622191,accent:14221266,scale:1.02,width:.88},drone:{skin:10135725,shirt:7175040,pants:4148048,accent:8385279,scale:.72,width:.8},sapper:{skin:12425078,shirt:8219194,pants:4998195,accent:16765503,scale:1.1,width:1.05}};class Zm{root=new En;capacity=0;meshes={};counts={box:0,head:0,orb:0,glow:0};geometries={box:new qt(1,1,1),head:new ei(.5,1),orb:new Zs(.5,7,5),glow:new Zs(.5,6,4)};solid=new Ei({color:16777215,roughness:.85,flatShading:!0});glow=new It({color:16777215});base=new it;part=new it;matrix=new Je;color=new Ie;up=new D(0,1,0);direction=new D;rootQuat=new Jn;leanQuat=new Jn;axisX=new D(1,0,0);axisY=new D(0,1,0);highlight="";constructor(){this.reserve(64)}reserve(e){if(!(e<=this.capacity)){this.capacity=Math.max(64,Ca.ceilPowerOfTwo(e));for(const t of Object.keys(this.meshes))this.meshes[t].removeFromParent(),this.meshes[t].dispose();for(const t of Object.keys(this.counts)){const n=new Kn(this.geometries[t],t==="glow"?this.glow:this.solid,this.capacity*(t==="box"?48:12));n.instanceMatrix.setUsage(qi),n.frustumCulled=!1,n.castShadow=t!=="glow",n.receiveShadow=!0,this.meshes[t]=n,this.root.add(n)}}}piece(e,t,n,i,r,a,o,l,c=0,h=0){this.part.position.set(t,n,i),this.part.scale.set(r,a,o),this.part.rotation.set(c,0,h),this.part.updateMatrix(),this.matrix.multiplyMatrices(this.base.matrix,this.part.matrix);const d=this.counts[e]++;this.meshes[e].setMatrixAt(d,this.matrix),this.meshes[e].setColorAt(d,this.color.setHex(l))}limb(e,t,n,i,r,a,o,l){this.direction.set(i-e,r-t,a-n),this.part.position.set((e+i)/2,(t+r)/2,(n+a)/2),this.part.scale.set(o,this.direction.length()+o*.2,o),this.part.quaternion.setFromUnitVectors(this.up,this.direction.normalize()),this.part.updateMatrix(),this.matrix.multiplyMatrices(this.base.matrix,this.part.matrix);const c=this.counts.box++;this.meshes.box.setMatrixAt(c,this.matrix),this.meshes.box.setColorAt(c,this.color.setHex(l))}update(e,t,n,i,r=""){this.reserve(e.length+1),this.highlight=r,this.counts.box=this.counts.head=this.counts.orb=this.counts.glow=0;for(let a=0;a<e.length;a++){const o=e[a],l=o.x-n.position.x,c=o.z-n.position.z,h=o.kind==="leader"||l*l+c*c<(i==="low"?650:1800);this.actor(o,t,h)}for(const a of Object.keys(this.counts)){const o=this.meshes[a];o.count=this.counts[a],o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0)}}actor(e,t,n){const i=Km[e.kind],r=e.kind==="leader",a=r||e.kind==="walker"||e.kind==="runner"||e.kind==="brute"||e.kind==="bomber"||e.kind==="spitter"||e.infected,o=e.kind==="guard"||e.kind==="rifleman"||e.kind==="shotgunner"||e.kind==="grenadier"||e.kind==="riot"||e.kind==="heavy"||e.kind==="flamer"||e.kind==="sniper"||e.kind==="sapper",l=e.state==="dead"||e.state==="down",c=e.state==="infected"||e.state==="rising",h=Math.min(1,Math.hypot(e.vx,e.vz)/2.5),d=n?e.anim*(e.kind==="runner"?13:8)+e.id*1.71:Math.floor(t*5)*1.4+e.id,f=Math.sin(d)*(.035+h*.47),p=e.attack>0?Math.sin(Math.min(1,e.attack*4)*Math.PI):0,g=Math.abs(Math.cos(d))*.07*h,x=l?-1.48:c?-1.2*Math.max(0,Math.min(1,e.timer)):e.state==="lock"||e.kind==="drone"?0:(a?.12:-.035)+p*.3;this.base.position.set(e.x,e.y+(l?.22:g),e.z),this.rootQuat.setFromAxisAngle(this.axisY,e.angle),this.leanQuat.setFromAxisAngle(this.axisX,x),this.base.quaternion.copy(this.rootQuat).multiply(this.leanQuat),this.base.scale.set(i.scale,i.scale,i.scale),this.base.updateMatrix();const m=i.width,u=e.infected?9679982:i.skin,T=this.highlight&&r?16765034:i.accent;if(e.kind==="drone"){this.piece("box",0,1.2,0,1.1,.4,.85,i.shirt),this.piece("head",0,.9,.35,.6,.55,.65,i.pants),this.piece("glow",0,.95,.69,.28,.2,.12,l?2571069:i.accent);for(let S=0;S<4;S++){const v=S%2?.95:-.95,A=S<2?-.8:.8;this.limb(0,1.25,0,v,1.25,A,.14,i.pants),this.piece("orb",v,1.3,A,.38,.25,.38,i.shirt);const w=l?0:t*35+S;this.limb(v+Math.sin(w)*.5,1.45,A+Math.cos(w)*.5,v-Math.sin(w)*.5,1.45,A-Math.cos(w)*.5,.085,i.accent)}this.piece("box",0,.8,.9,.18,.17,.6,i.pants);return}for(const S of[-1,1]){const v=f*S,A=S*.19*m;this.limb(A,.95,0,A,.55,v*.62,.21*m,i.pants),this.limb(A,.55,v*.62,A,.15+Math.max(0,v)*.22,v,.17*m,i.pants),this.piece("box",A,.095+Math.max(0,v)*.22,v+.095,.23*m,.17,.4,r&&/sole|sneaker/.test(this.highlight)?T:2306866)}this.piece("box",0,1.15,0,.67*m,.69,.38*m,i.shirt,.035),this.piece("box",0,.94,0,.66*m,.12,.4*m,2243390),this.piece("box",0,.95,.22*m,.11,.1,.035,i.accent),(e.kind==="brute"||e.kind==="heavy"||e.kind==="heavyCivilian")&&this.piece("head",0,1.13,.13,.95*m,.85,.57,i.shirt);for(const S of[-1,1]){const v=S*.43*m,A=o?.25:a?.28-f*S*.3:-f*S*.5,w=o?.55:a?.52+p*.33-f*S*.3:-f*S,C=a?1.17+p*.1:o?1.13:.99,I=o?1.25:a?1.12+p*.2:.68;this.limb(v,1.4,0,v*1.14,C,A,.24*m,i.shirt),this.limb(v*1.14,C,A,v*.91,I,w,.16*m,u),this.piece("head",v*.91,I,w,.2*m,.22*m,.23*m,u)}if(this.piece("box",0,1.59,.08,.24,.24,.24,u),this.piece("head",0,1.93,.075,r?.79:.6,r?.83:.69,r?.7:.59,u,-.08),this.piece("box",0,1.7-p*.08,.27+p*.1,r?.52:.39,.2,.34,u,p*.35),n){this.piece("box",0,1.775,.405,r?.45:.3,.09+p*.12,.045,3484968),this.piece("box",.035,1.81,.431,.29,.055,.03,15655603);for(const S of[-1,1])this.piece("orb",S*(r?.2:.145),2.015,r?.39:.34,r?.25:.145,r?.28:.16,r?.2:.11,a?15395249:15719095),this.piece("glow",S*(r?.2:.145),2.01,r?.492:.399,r?.08:.057,r?.09:.062,.045,a?13362796:2964284),this.piece("head",S*(r?.4:.31),1.94,.06,.16,.23,.16,u),this.piece("box",S*.16,2.13,.34,.22,.055,.08,4217405,0,S*-.19);this.piece("head",.02,1.9,.41,.13,.19,.17,u),this.piece("box",-.12,2.21,-.05,.42,.1,.36,a?3492409:5456695,0,-.2),this.piece("box",-.22,2.15,-.12,.13,.24,.35,a?3492409:5456695)}else this.piece("glow",0,2,.355,.35,.075,.04,a?14477728:3157547);if(r){this.piece("box",-.12,1.41,.23,.22,.3,.055,14866092,0,-.35),this.piece("box",.12,1.41,.23,.22,.3,.055,14866092,0,.35),this.piece("box",0,1.19,.285,.13,.47,.06,T,.15,Math.sin(t*3)*.1),this.piece("head",0,1.44,.285,.17,.15,.1,T);for(let S=0;S<3;S++)this.piece("box",-.22+S*.18,.88,-.1,.17,.26,.2,i.shirt,0,(S-1)*.15);if(this.piece("box",.22,1.37,.229,.15,.025,.04,14996133),/rib|spine|bone|femur|marrow/.test(this.highlight))for(let S=0;S<4;S++)this.piece("glow",0,1.07+S*.13,-.25,.24,.09,.12,T);/gland|brain|heart|lung|cortex/.test(this.highlight)&&this.piece("glow",.2,1.33,.31,.28,.26,.13,15235461),/horn|tooth|amulet/.test(this.highlight)&&this.piece("glow",0,1.18,.34,.23,.24,.12,T)}if(o&&(this.piece("head",0,2.18,.055,.67,.31,.68,i.shirt),this.piece("box",0,2.13,.34,.65,.06,.22,i.shirt),this.piece("box",0,1.27,.24*m,.49*m,.4,.12,2637632),this.piece("box",.28,1.25,.71,.12,.17,e.kind==="guard"?.39:.87,2306614,-.05),this.piece("box",.28,1.1,.52,.1,.21,.14,2571069,-.24),e.kind==="riot"&&(this.piece("box",-.35,1.02,.65,.67,1.25,.12,4548984),this.piece("box",-.35,1.35,.719,.46,.19,.025,8567745),this.piece("box",-.35,.8,.719,.48,.11,.025,13750449)),e.kind==="grenadier"))for(let S=0;S<3;S++)this.piece("orb",-.2+S*.18,1.24,.35,.13,.2,.14,i.accent);if(e.kind==="flamer"){for(const S of[-1,1])this.piece("orb",S*.25,1.35,-.4,.4,1.15,.48,i.accent),this.piece("box",S*.25,1.35,-.66,.28,.14,.08,3157547);if(this.piece("box",0,1.91,.43,.48,.3,.28,3157547),this.piece("box",0,2.06,.44,.48,.1,.08,i.accent),this.piece("box",.28,1.25,1.15,.3,.3,.45,i.accent),this.limb(.3,1,-.4,.46,1.1,.7,.15,3157547),!l&&!c&&e.attack>0)for(let S=0;S<5;S++)this.piece("glow",.28,1.25,1.7+S*1.9,.6+S*.85,.6+S*.26,2.3,S%2?16753708:16733988)}if(e.kind==="sniper"&&(this.piece("head",0,2.03,-.04,.85,.9,.8,i.shirt),this.piece("box",0,1.88,.39,.48,.13,.08,2306614),this.piece("box",0,1.15,-.3,.95,1.3,.12,i.shirt,-.12),this.piece("box",.28,1.25,1.28,.095,.1,1.65,2306614),this.piece("box",.28,1.46,.87,.18,.18,.5,2306614),this.piece("glow",.28,1.46,1.13,.13,.13,.025,i.accent),!l&&e.state==="lock"&&this.piece("box",.28,1.25,23,.035,.035,42,16728381)),e.kind==="sapper"){this.piece("box",0,1.32,-.4,.86,.95,.47,i.accent),this.piece("box",-.37,2,-.42,.055,1.1,.055,2306614),this.piece("glow",-.37,2.55,-.42,.14,.14,.14,e.state==="deploy"?16728381:i.accent),this.piece("box",.28,1.3,1,.42,.4,.85,4998195),this.piece("box",.28,1.3,1.44,.3,.28,.035,1515299);for(const S of[-1,1])this.piece("box",S*.53,1.48,0,.32,.35,.57,i.accent);this.piece("box",0,2,.42,.53,.28,.1,2306614)}if(e.kind==="worker"&&(this.piece("head",0,2.23,.075,.66,.32,.68,i.accent),this.piece("box",0,2.16,.09,.71,.07,.73,i.accent)),e.kind==="medic"&&(this.piece("box",0,1.27,.225,.1,.31,.045,i.accent),this.piece("box",0,1.27,.23,.28,.1,.045,i.accent)),e.kind==="bomber"){this.piece("glow",0,1.12,.29,.68,.7,.35,i.accent);for(const S of[-1,1])this.piece("glow",S*.38,1.52,0,.23,.24,.25,16761692)}if(e.kind==="spitter"&&(this.piece("glow",0,1.67,.33,.47,.43,.36,i.accent),this.piece("head",0,1.39,-.28,.67,.9,.49,6852165)),e.kind==="brute")for(const S of[-1,1])this.piece("head",S*.63,1.45,0,.55,.48,.55,i.accent)}}const jm={bite:12835699,infection:11000937,shot:16766882,explosion:16753748,hit:12158036,debris:13940098,surge:9168852,acid:11070841};function Nr(s,e,t,n){return{id:s,kind:e,x:t,z:n,y:0,angle:0,hp:100,maxHp:100,state:"idle",anim:0,attack:0,infected:!1,timer:0,vx:0,vz:0,cooldown:0,ammo:0,heal:!1}}class Jm{renderer;scene=new Vh;cameraRig;camera=new Yt(54,1,.1,260);actors=new Zm;vfx;world;sunlight=new ko(16766368,3.1);skylight=new ed(12708075,4016690,2.5);rim=new ko(9362909,1.6);focus=new D;cameraTarget=new D;sunTarget=new it;mode="menu";quality="high";elapsed=0;preview="";previewPulse=0;previewActors=[Nr(-1,"leader",0,0)];menuActors=[Nr(-1,"leader",4,39)];platform=new En;transform=new it;color=new Ie;warning;projectileMesh;cloudMesh;leaderRing;traces=Array.from({length:96},()=>({x:0,y:0,z:0,tx:0,tz:0,life:0,color:16777215}));traceCursor=0;linePositions=new Float32Array(24576);lineColors=new Float32Array(24576);lineGeometry=new bt;lines;lineCount=0;markerCapacity=256;constructor(e){this.renderer=new Gm({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Pt,this.renderer.toneMapping=Il,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Cl,this.scene.background=new Ie(5538702),this.scene.fog=new Wa(5538702,.0105),this.scene.add(this.skylight),this.sunlight.position.set(-25,38,25),this.sunlight.castShadow=!0,this.sunlight.shadow.mapSize.set(2048,2048),this.sunlight.shadow.camera.left=this.sunlight.shadow.camera.bottom=-32,this.sunlight.shadow.camera.right=this.sunlight.shadow.camera.top=32,this.sunlight.shadow.camera.near=1,this.sunlight.shadow.camera.far=110,this.sunlight.shadow.normalBias=.055,this.sunlight.shadow.bias=-2e-4,this.scene.add(this.sunlight,this.sunTarget),this.sunlight.target=this.sunTarget,this.rim.position.set(20,15,-30),this.scene.add(this.rim),this.world=new ml(0),this.scene.add(this.world.root,this.actors.root),this.environment(),this.vfx=new Wm(this.scene,640),this.cameraRig=new Vm(this.camera),this.cameraRig.distance=10,this.warning=new Kn(new is(.91,1,32),new It({color:16777215,transparent:!0,opacity:.8,side:Ht,depthWrite:!1}),this.markerCapacity),this.projectileMesh=new Kn(new ei(.17,1),new It({color:16777215}),this.markerCapacity),this.cloudMesh=new Kn(new ei(1,1),new It({color:11720813,transparent:!0,opacity:.17,depthWrite:!1}),this.markerCapacity*4);for(const r of[this.warning,this.projectileMesh,this.cloudMesh])r.count=0,r.frustumCulled=!1,r.instanceMatrix.setUsage(qi),this.scene.add(r);this.lineGeometry.setAttribute("position",new Dt(this.linePositions,3).setUsage(qi)),this.lineGeometry.setAttribute("color",new Dt(this.lineColors,3).setUsage(qi)),this.lineGeometry.setDrawRange(0,0),this.lines=new Zh(this.lineGeometry,new Zl({vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),this.lines.frustumCulled=!1,this.scene.add(this.lines),this.leaderRing=new ht(new is(.74,.81,40),new It({color:14935211,transparent:!0,opacity:.65,side:Ht,depthWrite:!1})),this.leaderRing.rotation.x=-Math.PI/2,this.scene.add(this.leaderRing);const t=new ht(new as(1.5,1.65,.16,64),new Ei({color:2707019,metalness:.2,roughness:.65}));t.position.y=-.09,t.receiveShadow=!0,this.platform.add(t);const n=new ht(new $a(1.5,.018,6,80),new It({color:13292166}));n.rotation.x=Math.PI/2,this.platform.add(n),this.platform.visible=!1,this.scene.add(this.platform);const i=["walker","walker","runner","walker","brute","spitter","walker","bomber","walker","runner","walker","walker"];for(let r=0;r<24;r++)this.menuActors.push(Nr(-2-r,i[r%i.length],(r%6-2.5)*1.55,32.5-Math.floor(r/6)*2.5));this.resize(),this.update(void 0,0,"menu")}zone(e){this.world.dispose(),this.world=new ml(Math.max(0,Math.floor(e))),this.scene.add(this.world.root),this.environment(),this.cameraRig.reset(),this.vfx.clear();for(const t of this.traces)t.life=0;return this.world.data}environment(){const e=this.world.atmosphere,t=this.world.data.weather,n=t===1||t===2||t===4||t===5;this.scene.background.setHex(e.sky);const i=this.scene.fog;i.color.setHex(e.sky),i.density=t===4?.029:t===5?.019:t===2?.02:e.fog,this.sunlight.color.setHex(e.sun),this.sunlight.intensity=n?2.1:3.3,this.skylight.color.setHex(e.sky),this.skylight.groundColor.setHex(e.ground),this.skylight.intensity=n?2.3:2.7,this.rim.color.setHex(e.sky),this.rim.intensity=n?1.2:1.6,this.renderer.toneMappingExposure=t===5?1.04:1.15}resize(){const e=Math.max(1,this.renderer.domElement.clientWidth||window.innerWidth),t=Math.max(1,this.renderer.domElement.clientHeight||window.innerHeight);this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.quality==="low"?1:this.quality==="medium"?1.5:2)),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.composition(),this.camera.updateProjectionMatrix()}composition(){const e=Math.max(1,this.renderer.domElement.clientWidth||window.innerWidth),t=Math.max(1,this.renderer.domElement.clientHeight||window.innerHeight);this.camera.clearViewOffset(),this.mode==="menu"&&this.camera.setViewOffset(e,t,-e*.2,0,e,t),this.mode==="loadout"&&this.camera.setViewOffset(e,t,e*.28,0,e,t)}setQuality(e,t){this.quality=t.toLowerCase(),this.renderer.shadowMap.enabled=e,this.sunlight.castShadow=e,this.resize()}previewItem(e){this.preview=e,this.previewPulse=1}update(e,t,n){if(t=Math.min(.1,Math.max(0,t)),this.elapsed+=t,n!==this.mode){this.mode=n,this.cameraRig.reset(),this.composition(),n!=="loadout"&&(this.preview="",this.previewPulse=0),this.vfx.clear();for(const r of this.traces)r.life=0}this.platform.visible=n==="loadout",this.world.root.visible=n!=="loadout",this.leaderRing.visible=n==="playing",this.warning.visible=this.projectileMesh.visible=this.cloudMesh.visible=this.lines.visible=n==="playing"||n==="end";let i;if(n==="loadout"){const r=this.previewActors[0];r.angle=.18+Math.sin(this.elapsed*.27)*.5+this.previewPulse*.25,r.anim+=t,r.y=Math.sin(this.previewPulse*Math.PI)*.07,r.attack=this.previewPulse>.7?.15:0,this.previewPulse=Math.max(0,this.previewPulse-t*1.5),this.camera.position.set(1,2.6,6.5),this.camera.lookAt(0,1.42,0),this.camera.fov=39,i=this.previewActors,this.focus.set(0,0,0)}else if(n==="menu"||!e){for(const r of this.menuActors)r.anim+=t,r.angle=Math.sin(this.elapsed*.2+r.id)*.13;this.camera.position.set(6.2+Math.sin(this.elapsed*.08)*.7,3.8,47.4),this.camera.lookAt(4,1.6,39),this.camera.fov=49,i=this.menuActors,this.focus.set(4,0,39),this.world.update(this.elapsed,!1)}else i=e.actors,this.focus.set(e.leader.x,e.leader.y,e.leader.z),n==="end"?(this.cameraTarget.set(this.focus.x+12,this.focus.y+13,this.focus.z+15),this.camera.position.lerp(this.cameraTarget,1-Math.exp(-t*.7)),this.camera.lookAt(this.focus),this.camera.fov=55):this.cameraRig.update(this.focus,t,Math.hypot(e.leader.vx,e.leader.vz)>8,e.hordeCounts.reduce((r,a)=>r+a,0),this.world.obstacles),this.leaderRing.position.set(e.leader.x,.04,e.leader.z),this.leaderRing.material.color.setHex(e.surgeTime>0?7798752:13887149),this.world.update(e.time,e.readyExit),this.effects(e,t);this.camera.updateProjectionMatrix(),this.sunlight.position.set(this.focus.x-23,35,this.focus.z+18),this.sunTarget.position.copy(this.focus),this.actors.update(i,this.elapsed,this.camera,this.quality,n==="loadout"?this.preview:""),this.vfx.update(t),this.renderer.render(this.scene,this.camera)}line(e,t,n,i,r,a,o){if(this.lineCount+6>this.linePositions.length)return;let l=this.lineCount;this.linePositions[l]=e,this.linePositions[l+1]=t,this.linePositions[l+2]=n,this.linePositions[l+3]=i,this.linePositions[l+4]=r,this.linePositions[l+5]=a,this.color.setHex(o);for(let c=0;c<2;c++,l+=3)this.lineColors[l]=this.color.r,this.lineColors[l+1]=this.color.g,this.lineColors[l+2]=this.color.b;this.lineCount+=6}effects(e,t){for(const a of e.effects){const o=a.color??jm[a.kind];if(a.kind==="shot"){const l=this.traces[this.traceCursor];this.traceCursor=(this.traceCursor+1)%this.traces.length,l.x=a.x,l.y=a.y||1.35,l.z=a.z,l.tx=a.tx??a.x,l.tz=a.tz??a.z,l.color=o,l.life=.095}else this.vfx.burst(a.x,a.y||1,a.z,o,a.kind==="explosion"?36:a.kind==="surge"?30:9)}this.lineCount=0;for(const a of this.traces)a.life<=0||(a.life-=t,this.line(a.x,a.y,a.z,a.tx,1.1,a.tz,a.color));let n=0,i=0,r=0;for(const a of e.projectiles){if(!a.active||i>=this.markerCapacity)continue;const o=a.friendly?10940792:16738119;this.transform.position.set(a.x,Math.max(.18,a.y),a.z),this.transform.rotation.set(this.elapsed*5,0,this.elapsed*4),this.transform.scale.setScalar(a.kind==="mortar"?1.8:1),this.transform.updateMatrix(),this.projectileMesh.setMatrixAt(i,this.transform.matrix),this.projectileMesh.setColorAt(i++,this.color.setHex(o));const l=a.kind==="grenade"?Math.max(0,a.timer):Math.max(0,(a.vy+Math.sqrt(a.vy*a.vy+19.6*Math.max(0,a.y)))/9.8),c=a.x+a.vx*l,h=a.z+a.vz*l;if(this.transform.position.set(c,.045,h),this.transform.rotation.set(-Math.PI/2,0,0),this.transform.scale.setScalar(Math.max(.3,a.radius)*(.96+Math.sin(this.elapsed*12)*.04)),this.transform.updateMatrix(),this.warning.setMatrixAt(n,this.transform.matrix),this.warning.setColorAt(n++,this.color.setHex(o)),a.kind!=="grenade"){let d=a.x,f=a.y,p=a.z;for(let g=1;g<=8;g++){const x=l*g/8,m=a.x+a.vx*x,u=a.z+a.vz*x,T=Math.max(.1,a.y+a.vy*x-4.9*x*x);this.line(d,f,p,m,T,u,o),d=m,f=T,p=u}}}for(const a of e.clouds)if(!(!a.active||n>=this.markerCapacity||r+4>=this.markerCapacity*4)){this.transform.position.set(a.x,.055,a.z),this.transform.rotation.set(-Math.PI/2,0,0),this.transform.scale.setScalar(a.radius),this.transform.updateMatrix(),this.warning.setMatrixAt(n,this.transform.matrix),this.warning.setColorAt(n++,this.color.setHex(11788137));for(let o=0;o<4;o++){const l=this.elapsed*.65+o*Math.PI/2;this.transform.position.set(a.x+Math.cos(l)*a.radius*.35,.3+o*.12,a.z+Math.sin(l)*a.radius*.35),this.transform.rotation.set(0,l,0),this.transform.scale.set(a.radius*.65,.55+Math.sin(l)*.1,a.radius*.65),this.transform.updateMatrix(),this.cloudMesh.setMatrixAt(r++,this.transform.matrix)}}this.warning.count=n,this.projectileMesh.count=i,this.cloudMesh.count=r;for(const a of[this.warning,this.projectileMesh,this.cloudMesh])a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0);this.lineGeometry.setDrawRange(0,this.lineCount/3),this.lineGeometry.attributes.position.needsUpdate=!0,this.lineGeometry.attributes.color.needsUpdate=!0}}class gl{cell;map=new Map;constructor(e=6){this.cell=e}key(e,t){return(e&65535)*65536+(t&65535)}clear(){this.map.clear()}insert(e){const t=Math.floor(e.x/this.cell),n=Math.floor(e.z/this.cell),i=this.key(t,n);let r=this.map.get(i);r||(r={items:[]},this.map.set(i,r)),r.items.push(e)}query(e,t,n,i){i.length=0;const r=Math.floor((e-n)/this.cell),a=Math.floor((e+n)/this.cell),o=Math.floor((t-n)/this.cell),l=Math.floor((t+n)/this.cell);for(let c=r;c<=a;c++)for(let h=o;h<=l;h++){const d=this.map.get(this.key(c,h));if(!d)continue;const f=d.items;for(let p=0;p<f.length;p++){const g=f[p],x=g.x-e,m=g.z-t,u=n+g.r;x*x+m*m<=u*u&&i.push(g)}}return i.length}nearest(e,t,n,i){if(this.query(e,t,n,i)===0)return null;let a=null,o=1/0;for(let l=0;l<i.length;l++){const c=i[l],h=(c.x-e)*(c.x-e)+(c.z-t)*(c.z-t);h<o&&(o=h,a=c)}return a}}const nn=(s,e,t)=>Math.max(e,Math.min(t,s));function Qm(s,e,t){let n=(e-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*t}function Wi(s,e,t,n){return Qm(s,e,1-Math.exp(-t*n))}const Mt={hpMax:130,speed:6.4,sprintMul:1.55,turnRate:14,dashSpeed:22,dashTime:.22,dashCooldown:2.6,biteRange:2.4,biteCone:100*Math.PI/180,biteCooldown:.75,biteDamage:60,iFrames:.55},Fr={startCount:5,surgeTime:4,surgeCooldown:15},Mn={infect:12,civKill:4,guardKill:18,barricade:20,shelter:90,district:120,levelBase:60,levelGrowth:1.32},_l={radius:5.2,fuse:2},Or={cloudR:4.6,dps:26,life:6},Br={riseDelay:1.3,toxicChance:.8,explosionChance:.35},Ns={panicRadius:17,fleeSpeed:4.4,athleteSpeed:6.4,heavySpeed:1.9},zr=["COMMON","UNCOMMON","RARE","MUTATED"];function Zi(){return{hordeHp:1,hordeDmg:1,hordeSpeed:1,runnerChance:1,bruteChance:1,bomberChance:1,spitterChance:1,riseSpeed:1,aggroRange:1,biteDmg:1,biteSpeed:1,leaderHp:1,leaderSpeed:1,dashCd:1,mutationDur:1,xpGain:1,explodeInfect:1,hordeRegen:0,surgeCd:1,surgeDur:1,bruteArmor:0,bomberRadius:1,spitterRange:1,spitterPuddle:0,toxicInfect:1,leaderThorns:0,magnet:1}}const js=[{id:"pack_hunger",name:"PACK HUNGER",desc:"Horde damage +15%",rarity:0,maxRank:4,apply:s=>{s.hordeDmg*=1.15}},{id:"bad_blood",name:"BAD BLOOD",desc:"Infection rise speed +35%",rarity:0,maxRank:4,apply:s=>{s.riseSpeed*=1.35}},{id:"thick_skulls",name:"THICK SKULLS",desc:"All zombies gain +18% HP",rarity:0,maxRank:4,apply:s=>{s.hordeHp*=1.18}},{id:"rottengrip",name:"ROTTEN GRIP",desc:"Bite damage +25%",rarity:0,maxRank:4,apply:s=>{s.biteDmg*=1.25}},{id:"shambling_speed",name:"SHAMBLING SPEED",desc:"Horde moves 12% faster",rarity:0,maxRank:4,apply:s=>{s.hordeSpeed*=1.12}},{id:"leader_vigor",name:"LEADER VIGOR",desc:"Leader max HP +25%",rarity:0,maxRank:4,apply:s=>{s.leaderHp*=1.25}},{id:"long_nose",name:"LONG NOSE",desc:"Horde detection range +25%",rarity:0,maxRank:4,apply:s=>{s.aggroRange*=1.25}},{id:"hunger_xp",name:"GRAVE APPETITE",desc:"XP gain +20%",rarity:0,maxRank:4,apply:s=>{s.xpGain*=1.2}},{id:"quick_dash",name:"TIGHT TWIST",desc:"Dash cooldown -25%",rarity:0,maxRank:4,apply:s=>{s.dashCd*=.75}},{id:"fast_rise",name:"QUICK ROT",desc:"Rise speed +20%, explosion infection chance +10%",rarity:1,maxRank:3,apply:s=>{s.riseSpeed*=1.2,s.explodeInfect*=1.1}},{id:"runner_strain",name:"RUNNER STRAIN",desc:"Runner conversion weight +60%",rarity:1,maxRank:3,apply:s=>{s.runnerChance*=1.6}},{id:"brute_strain",name:"BRUTE STRAIN",desc:"Brute conversion weight +50%, armor +10 percentage points",rarity:1,maxRank:3,apply:s=>{s.bruteChance*=1.5,s.bruteArmor+=.1}},{id:"bomber_strain",name:"BOMBER STRAIN",desc:"Bomber conversion weight +50%, blast radius +20%",rarity:1,maxRank:3,apply:s=>{s.bomberChance*=1.5,s.bomberRadius*=1.2}},{id:"spitter_strain",name:"SPITTER STRAIN",desc:"Spitter conversion weight +50%, range +25%",rarity:1,maxRank:3,apply:s=>{s.spitterChance*=1.5,s.spitterRange*=1.25}},{id:"alpha_jaw",name:"ALPHA JAW",desc:"Bite damage +40%, bite speed +15%",rarity:1,maxRank:3,apply:s=>{s.biteDmg*=1.4,s.biteSpeed*=1.15}},{id:"horde_regen",name:"PUTRID HEALING",desc:"Zombies regenerate +1.5 HP each second",rarity:1,maxRank:3,apply:s=>{s.hordeRegen+=1.5}},{id:"surge_long",name:"LONG HOWL",desc:"Surge lasts +40%",rarity:1,maxRank:3,apply:s=>{s.surgeDur*=1.4}},{id:"surge_fast",name:"EAGER DEAD",desc:"Surge cooldown -30%",rarity:1,maxRank:3,apply:s=>{s.surgeCd*=.7}},{id:"leader_muscle",name:"TOMB TONE",desc:"Leader speed +15%, HP +10%",rarity:1,maxRank:3,apply:s=>{s.leaderSpeed*=1.15,s.leaderHp*=1.1}},{id:"toxic_bite",name:"TOXIC BITE",desc:"Toxic infection chance +30%, explosion infection chance +15%",rarity:2,maxRank:2,apply:s=>{s.toxicInfect*=1.3,s.explodeInfect*=1.15}},{id:"acidic_corpses",name:"ACIDIC CORPSES",desc:"Spitter pool radius +50% of base, toxic infection chance +20%",rarity:2,maxRank:2,apply:s=>{s.spitterPuddle+=.5,s.toxicInfect*=1.2}},{id:"mutant_dna",name:"MUTANT DNA",desc:"Mutations last 50% longer",rarity:2,maxRank:2,apply:s=>{s.mutationDur*=1.5}},{id:"bomb_magnet",name:"FRAG FRENZY",desc:"Explosion infection chance +40%",rarity:2,maxRank:2,apply:s=>{s.explodeInfect*=1.4}},{id:"thick_hide",name:"THICK HIDE",desc:"Brute armor +25 percentage points (75% cap), conversion weight +20%",rarity:2,maxRank:2,apply:s=>{s.bruteArmor+=.25,s.bruteChance*=1.2}},{id:"apex_predator",name:"APEX PREDATOR",desc:"Bite damage +60%, leader speed +10%",rarity:3,maxRank:1,apply:s=>{s.biteDmg*=1.6,s.leaderSpeed*=1.1}},{id:"horde_titan",name:"TITAN STRAIN",desc:"All zombies +30% HP, +10% damage",rarity:3,maxRank:1,apply:s=>{s.hordeHp*=1.3,s.hordeDmg*=1.1}},{id:"plague_lord",name:"PLEASURE OF PLAGUE",desc:"XP gain +30%, rise speed +25%",rarity:3,maxRank:1,apply:s=>{s.xpGain*=1.3,s.riseSpeed*=1.25}},{id:"unholy_speed",name:"UNHOLY SPEED",desc:"Horde speed +20%, runner conversion weight +40%",rarity:3,maxRank:1,apply:s=>{s.hordeSpeed*=1.2,s.runnerChance*=1.4}},{id:"barbed_crown",name:"BARBED CROWN",desc:"Return 20% of damage to attackers; leader HP +10%. Punish the gun line.",rarity:2,maxRank:3,apply:s=>{s.leaderThorns+=.2,s.leaderHp*=1.1}},{id:"breach_runner",name:"BREACH RUNNER",desc:"Dash cooldown -15%, leader speed +8%. Slip past accurate shooters.",rarity:1,maxRank:3,apply:s=>{s.dashCd*=.85,s.leaderSpeed*=1.08}},{id:"rolling_thunder",name:"ROLLING THUNDER",desc:"Surge duration +20%, horde speed +8%. Keep the charge together.",rarity:1,maxRank:3,apply:s=>{s.surgeDur*=1.2,s.hordeSpeed*=1.08}},{id:"marrow_reserve",name:"MARROW RESERVE",desc:"Horde HP +12%, regeneration +1 HP/sec. Preserve veteran followers.",rarity:1,maxRank:3,apply:s=>{s.hordeHp*=1.12,s.hordeRegen+=1}},{id:"chain_outbreak",name:"CHAIN OUTBREAK",desc:"Explosion infection chance +20%, rise speed +25%. Blasts become reinforcements.",rarity:2,maxRank:2,apply:s=>{s.explodeInfect*=1.2,s.riseSpeed*=1.25}},{id:"acid_horizon",name:"ACID HORIZON",desc:"Spitter range +20%, pool radius +25% of base. Saturate distant defenses.",rarity:2,maxRank:2,apply:s=>{s.spitterRange*=1.2,s.spitterPuddle+=.25}},{id:"siege_culture",name:"SIEGE CULTURE",desc:"Horde damage +15%, blast radius +15%. Feed bombers and mortar together.",rarity:2,maxRank:2,apply:s=>{s.hordeDmg*=1.15,s.bomberRadius*=1.15}},{id:"iron_procession",name:"IRON PROCESSION",desc:"Brute armor +10 points (75% cap), horde speed +10%. Bring shields to the front.",rarity:1,maxRank:3,apply:s=>{s.bruteArmor+=.1,s.hordeSpeed*=1.1}},{id:"feral_memory",name:"FERAL MEMORY",desc:"Mutation duration +25%, bite speed +20%. Hold your borrowed form and keep feeding.",rarity:2,maxRank:2,apply:s=>{s.mutationDur*=1.25,s.biteSpeed*=1.2}},{id:"outbreak_network",name:"OUTBREAK NETWORK",desc:"Detection range +15%, XP gain +15%. Find new hosts and evolve sooner.",rarity:0,maxRank:4,apply:s=>{s.aggroRange*=1.15,s.xpGain*=1.15}}],xl=["walker","runner","brute","spitter","bomber"],oc={guard:"guards",rifleman:"riflemen",shotgunner:"shotgunners",grenadier:"grenadiers",riot:"riot",heavy:"heavies",flamer:"flamers",sniper:"snipers",drone:"drones",sapper:"sappers"},e0=Object.keys(oc),vl=300,Ml=["feral","behemoth","toxic","mortar"],kr=1/60,Mi={guard:{hp:85,ammo:9,reload:2.1,rate:.85,range:21,damage:8,spread:.12},rifleman:{hp:115,ammo:18,reload:2.6,rate:.16,range:29,damage:7,spread:.055},shotgunner:{hp:155,ammo:5,reload:3,rate:1.5,range:16,damage:6,spread:.2},grenadier:{hp:130,ammo:3,reload:4.4,rate:4.6,range:28,damage:42,spread:.12},riot:{hp:240,ammo:8,reload:2.5,rate:1.05,range:16,damage:8,spread:.13},heavy:{hp:380,ammo:42,reload:4,rate:.12,range:31,damage:6,spread:.15},flamer:{hp:170,ammo:26,reload:3.6,rate:.34,range:12,damage:7,spread:.3},sniper:{hp:95,ammo:4,reload:3.2,rate:2.6,range:44,damage:34,spread:.02},drone:{hp:55,ammo:14,reload:2.8,rate:.5,range:24,damage:5,spread:.16},sapper:{hp:120,ammo:2,reload:5,rate:2.2,range:30,damage:30,spread:.06}};class t0{constructor(e,t=!1){this.zoneFactory=e,this.endless=t,this.reset(Zi())}snapshot;units=[];pool=[];allies=new gl(6);humans=new gl(6);near=[];neighbors=[];blastTargets=[];shotTargets=[];nextId=1;seed=1;accumulator=0;frame=0;dashTime=0;dashX=0;dashZ=-1;surgeX=0;surgeZ=-1;selected="toxic";downTime=0;zoneInfected=0;potential=1;unrecoverable=0;waves=0;waveClock=0;reserveCivilians=0;reserveEnemies=[];shelterPopulation=0;definition=ss(0);enemyHpScale=1;endless=!1;reset(e){this.pool.push(...this.units),this.units=[],this.nextId=1,this.seed=1337,this.accumulator=this.frame=this.dashTime=this.downTime=0,this.selected="toxic";const t=this.zoneFactory(0),n=this.create("leader",t.spawn.x,t.spawn.z,e),i=e.startMutation;this.snapshot={actors:this.units,zone:t,leader:n,projectiles:[],clouds:[],mods:{...e},stats:{runTime:0,totalInfected:0,peakHorde:5,humansDefeated:0,sheltersOverrun:0,zombiesLost:0,levelReached:1},time:0,district:0,infection:0,objective:"",readyExit:!1,xp:0,xpNext:Mn.levelBase,level:1,mutation:i&&Ml.includes(i.toLowerCase())?i.toLowerCase():"",mutationTime:i?20*e.mutationDur:0,surgeCooldown:0,surgeTime:0,dashCooldown:0,abilityCooldown:0,hordeCounts:[5,0,0,0,0],effects:[],notices:[],pendingLevel:!1,won:!1,lost:!1,upgrades:[],endless:void 0};for(let r=0;r<Fr.startCount;r++)this.spawn("walker",n.x+(r-2)*1.15,n.z+2.4);this.populate(),this.rebuildGrids(),this.objective()}update(e,t){const n=this.snapshot;if(n.won||n.lost||n.pendingLevel)return;t.select>=1&&t.select<=4&&(this.selected=Ml[t.select-1],this.notice(`${this.selected.toUpperCase()} selected · E to unleash`));const i=n.leader,r=t.x*Math.cos(t.yaw)-t.z*Math.sin(t.yaw),a=-t.x*Math.sin(t.yaw)-t.z*Math.cos(t.yaw);if(i.hp>0){if(t.dash&&n.dashCooldown<=0){const o=Math.hypot(r,a);this.dashX=o>.01?r/o:Math.sin(i.angle),this.dashZ=o>.01?a/o:Math.cos(i.angle),this.dashTime=Mt.dashTime,n.dashCooldown=Mt.dashCooldown*n.mods.dashCd,i.invulnerable=Mt.iFrames}t.surge&&n.surgeCooldown<=0&&(n.surgeTime=Fr.surgeTime*n.mods.surgeDur,n.surgeCooldown=Fr.surgeCooldown*n.mods.surgeCd,this.surgeX=i.x+Math.sin(i.angle)*22,this.surgeZ=i.z+Math.cos(i.angle)*22,this.emit("surge",i.x,i.z),this.notice("DEAD PARADE! Horde surging toward your facing.")),t.ability&&n.abilityCooldown<=0&&this.ability()}for(this.accumulator+=nn(e,0,.2);this.accumulator>=kr&&!n.pendingLevel&&!n.won&&!n.lost;)this.accumulator-=kr,this.step(kr,r,a,t.sprint);n.pendingLevel&&(this.accumulator=0)}chooseUpgrade(e){const t=this.snapshot;if(!t.pendingLevel)return;const n=js.find(a=>a.id===e);if(!n||t.upgrades.reduce((a,o)=>a+ +(o===e),0)>=n.maxRank)return;const i=t.mods.leaderHp,r=t.mods.hordeHp;n.apply(t.mods),t.upgrades.push(e);for(const a of this.units){if(a.team!==0||a.hp<=0)continue;const o=a.kind==="leader"?t.mods.leaderHp/i:t.mods.hordeHp/r;a.maxHp*=o,a.hp=Math.min(a.maxHp,a.hp*o+(a.kind==="leader"?12:0))}t.pendingLevel=!1,this.checkLevel()}random(){return this.seed=Math.imul(this.seed,1664525)+1013904223|0,(this.seed>>>0)/4294967296}create(e,t,n,i=this.snapshot.mods){const r=this.pool.pop()??{},a=xl.includes(e),o=e==="leader"?Mt.hpMax*i.leaderHp:a?(e==="brute"?240:e==="runner"?62:e==="walker"?78:92)*i.hordeHp:Mi[e]?Math.round(Mi[e].hp*this.enemyHpScale):e==="heavyCivilian"?100:45;return Object.assign(r,{id:this.nextId++,kind:e,x:t,z:n,y:0,angle:Math.PI,hp:o,maxHp:o,state:"idle",anim:this.random()*6,attack:0,infected:!1,timer:0,vx:0,vz:0,cooldown:this.random()*.5,ammo:Mi[e]?.ammo??0,heal:e==="medic",r:e==="brute"||e==="heavy"?.65:.38,team:a||e==="leader"?0:1,origin:e,ai:0,invulnerable:0,burst:0,wander:this.random()*Math.PI*2}),this.units.push(r),r}spawn(e,t,n){const i=e==="brute"||e==="heavy"?.65:.4;if(t=nn(t,-36,36),n=nn(n,-52,52),this.blocked(t,n,i)){const r=t,a=n;let o=!1;for(let l=1;l<30&&!o;l++)for(let c=0;c<12;c++){const h=c*Math.PI/6,d=nn(r+Math.cos(h)*l*.8,-36,36),f=nn(a+Math.sin(h)*l*.8,-52,52);if(!this.blocked(d,f,i)){t=d,n=f,o=!0;break}}o||(t=this.snapshot.zone.spawn.x,n=this.snapshot.zone.spawn.z)}return this.create(e,t,n)}civilianKind(){const e=this.random();return e<.13?"athlete":e<.24?"heavyCivilian":e<.38?"worker":e<.46?"medic":"civilian"}populate(){const e=this.snapshot,t=this.definition=ss(e.district);this.enemyHpScale=t.hpScale*(t.elite?1.15:1),this.waveClock=0,this.seed=t.seed,this.zoneInfected=this.unrecoverable=this.waves=0,this.shelterPopulation=18+Math.min(12,e.district)*4,this.reserveCivilians=24+Math.min(12,e.district)*6,this.reserveEnemies.length=0;const n=[];for(const i of e0){const r=t[oc[i]];for(let a=0;a<r;a++)n.push(i)}for(let i=n.length-1;i>0;i--){const r=Math.floor(this.random()*(i+1));[n[i],n[r]]=[n[r],n[i]]}for(const i of n)this.random()<.34?this.reserveEnemies.push(i):this.spawn(i,(this.random()-.5)*16,-7-this.random()*33);this.potential=t.civs+this.reserveCivilians+e.zone.shelters.length*this.shelterPopulation+n.length;for(let i=0;i<t.civs;i++){const r=i<6?e.zone.spawn.z-7-this.random()*6:33-this.random()*72;this.spawn(this.civilianKind(),(this.random()-.5)*(i<6?8:29),r)}e.readyExit=!1,e.infection=0,e.endless=e.district>=5?{sector:e.district+1,tier:1+Math.floor((e.district-5)/10),elite:t.elite}:void 0,this.notice(`${t.name} · ${t.note}`)}step(e,t,n,i){const r=this.snapshot,a=r.leader;r.time+=e,r.stats.runTime+=e,this.frame++,r.surgeCooldown=Math.max(0,r.surgeCooldown-e),r.surgeTime=Math.max(0,r.surgeTime-e),r.dashCooldown=Math.max(0,r.dashCooldown-e),r.abilityCooldown=Math.max(0,r.abilityCooldown-e),r.mutationTime>0&&(r.mutationTime=Math.max(0,r.mutationTime-e),r.mutationTime||(r.mutation="",this.notice("Mutation faded. Hunt another special civilian."))),this.rebuildGrids(),a.hp>0?this.player(e,t,n,i):(this.downTime+=e,this.downTime>=2.2&&(r.lost=!0));for(let o=this.units.length-1;o>=0;o--){const l=this.units[o];if(l.anim+=e*(1+Math.hypot(l.vx,l.vz)*.38),l.attack=Math.max(0,l.attack-e),l.cooldown=Math.max(0,l.cooldown-e),l.invulnerable=Math.max(0,l.invulnerable-e),l.kind==="leader")continue;if(l.state==="infected"){l.timer-=e,l.timer<=0&&this.rise(l);continue}if(l.hp<=0){l.timer-=e,l.timer<=0&&(this.units.splice(o,1),this.pool.push(l));continue}const c=Math.hypot(l.x-a.x,l.z-a.z),h=c<32?1:c<65?3:8;if(l.ai+=e,(this.frame+l.id)%h!==0)continue;const d=l.ai;l.ai=0,l.team===0?this.zombie(l,d,c):Mi[l.kind]?this.enemy(l,d):this.civilian(l,d)}this.projectiles(e),this.clouds(e),this.director(e),this.countHorde(),this.objective(),a.hp>0&&r.readyExit&&Math.hypot(a.x-r.zone.exit.x,a.z-r.zone.exit.z)<4.5&&this.advance()}rebuildGrids(){this.allies.clear(),this.humans.clear();for(const e of this.units)e.hp>0&&e.state!=="infected"&&(e.team===0?this.allies:this.humans).insert(e)}player(e,t,n,i){const r=this.snapshot,a=r.leader,o=Math.hypot(t,n);o>1&&(t/=o,n/=o),o>.01&&(a.angle=Wi(a.angle,Math.atan2(t,n),Mt.turnRate,e));const l=Mt.speed*r.mods.leaderSpeed*(i?Mt.sprintMul:1)*(r.mutation==="feral"?1.22:r.mutation==="behemoth"?.85:1),c=1-Math.exp(-26*e/4);if(a.vx+=(t*l-a.vx)*c,a.vz+=(n*l-a.vz)*c,this.dashTime>0?(this.dashTime-=e,this.move(a,this.dashX*Mt.dashSpeed*e,this.dashZ*Mt.dashSpeed*e,!1),a.state="dash"):(this.move(a,a.vx*e,a.vz*e,!1),a.state=o>.01?"run":"idle"),a.cooldown>0)return;this.humans.query(a.x,a.z,Mt.biteRange,this.near);let h=null,d=1/0;const f=Math.sin(a.angle),p=Math.cos(a.angle);for(const g of this.near){const x=g.x-a.x,m=g.z-a.z,u=Math.hypot(x,m);g.hp<=0||u>Mt.biteRange+g.r||u>.65&&(x*f+m*p)/u<Math.cos(Mt.biteCone/2)||!this.los(a.x,a.z,g.x,g.z)||u<d&&(h=g,d=u)}if(h)a.cooldown=Mt.biteCooldown/r.mods.biteSpeed,a.attack=.32,this.damage(h,Mt.biteDamage*r.mods.biteDmg*(r.mutation==="behemoth"?1.6:1),"melee",a),this.emit("bite",h.x,h.z);else{const g=this.nearestBarrier(a.x,a.z,2.5,f,p);g&&(this.hitBarrier(g,Mt.biteDamage*r.mods.biteDmg*(r.mutation==="behemoth"?2.4:1)),a.attack=.3,a.cooldown=Mt.biteCooldown/r.mods.biteSpeed)}}zombie(e,t,n){const i=this.snapshot,r=i.leader;e.hp=Math.min(e.maxHp,e.hp+i.mods.hordeRegen*t);const a=(e.kind==="spitter"?18*i.mods.spitterRange:13)*i.mods.aggroRange;this.humans.query(e.x,e.z,a,this.near);let o=null,l=1/0;for(const u of this.near){if(u.hp<=0||u.state==="infected")continue;const T=(u.x-e.x)**2+(u.z-e.z)**2;T<l&&this.los(e.x,e.z,u.x,u.z)&&(o=u,l=T)}let c,h;if(o){c=o.x,h=o.z;const u=Math.sqrt(l);if(e.angle=Wi(e.angle,Math.atan2(c-e.x,h-e.z),12,t),e.kind==="spitter"&&u<18*i.mods.spitterRange&&e.cooldown<=0&&(this.throwProjectile("acid",e.x,e.z,c,h,!0,Math.max(.35,u/19),2.3),e.cooldown=2.2,e.attack=.4),u<(e.kind==="brute"?2.05:1.45)&&e.cooldown<=0){if(e.attack=.35,e.cooldown=e.kind==="runner"?.52:e.kind==="brute"?1.2:.92,e.kind==="bomber"){this.explode(e.x,e.z,5*i.mods.bomberRadius,105*i.mods.hordeDmg,!0),this.killZombie(e);return}this.damage(o,(e.kind==="brute"?46:e.kind==="runner"?16:22)*i.mods.hordeDmg,"melee",e),this.emit("bite",o.x,o.z)}if(u<(e.kind==="spitter"?8:1.15)){e.vx=e.vz=0,e.state="attack";return}}else{const u=Math.sqrt(Math.min(i.stats.peakHorde,350))*.53,T=e.id*2.399963,S=1.8+e.id%11/10*u;if(c=i.surgeTime>0?this.surgeX:r.x+Math.sin(T)*S,h=i.surgeTime>0?this.surgeZ:r.z+Math.cos(T)*S,Math.hypot(c-e.x,h-e.z)<.9){e.vx=e.vz=0,e.state="idle";return}const v=this.nearestBarrier(e.x,e.z,e.kind==="brute"?2.6:1.9);v&&e.cooldown<=0&&(this.hitBarrier(v,(e.kind==="brute"?105:19)*i.mods.hordeDmg),e.attack=.3,e.cooldown=e.kind==="brute"?.85:1.1)}let d=c-e.x,f=h-e.z,p=Math.hypot(d,f)||1;d/=p,f/=p,this.allies.query(e.x,e.z,1.15,this.neighbors);let g=0;for(const u of this.neighbors){if(u===e||u.hp<=0)continue;const T=e.x-u.x,S=e.z-u.z,v=T*T+S*S;if(v>.001&&v<1.8){const A=.4/Math.max(.16,v);d+=T*A,f+=S*A}if(++g>=14)break}p=Math.hypot(d,f)||1,d/=p,f/=p;const m=(e.kind==="runner"?8.1:e.kind==="brute"?3.65:e.kind==="spitter"?4.4:4.85)*i.mods.hordeSpeed*(n>18?1.5:1)*(i.surgeTime>0?1.6:1);e.vx=d*m,e.vz=f*m,this.move(e,e.vx*t,e.vz*t,!0),e.angle=Wi(e.angle,Math.atan2(d,f),9,t),e.state="run"}civilian(e,t){const n=this.allies.nearest(e.x,e.z,Ns.panicRadius,this.near);let i=Math.sin(e.wander),r=Math.cos(e.wander),a=.65;n?(i=e.x-n.x,r=e.z-n.z,Math.abs(e.z)>44&&(r+=-Math.sign(e.z)*10,i+=Math.sin(e.wander)*4),Math.abs(e.x)>29&&(i-=Math.sign(e.x)*8),a=e.kind==="athlete"?Ns.athleteSpeed:e.kind==="heavyCivilian"?Ns.heavySpeed:Ns.fleeSpeed,e.state="panic"):(e.wander+=(this.random()-.5)*t,e.state="walk");const o=Math.hypot(i,r)||1;if(e.vx=i/o*a,e.vz=r/o*a,this.move(e,e.vx*t,e.vz*t,!0),e.angle=Wi(e.angle,Math.atan2(i,r),10,t),e.kind==="medic"&&e.cooldown<=0){this.humans.query(e.x,e.z,6,this.neighbors);for(const l of this.neighbors)l.hp>0&&l.hp<l.maxHp&&(l.hp=Math.min(l.maxHp,l.hp+5));e.cooldown=2}}enemy(e,t){const n=Mi[e.kind];if(e.kind==="drone"&&(e.y=.7+Math.sin(this.snapshot.time*3+e.id)*.16),e.state==="reload")if(e.timer-=t,e.vx=e.vz=0,e.timer<=0)e.ammo=n.ammo,e.state="idle";else return;this.allies.query(e.x,e.z,n.range+5,this.near);let i=null,r=1/0;for(const d of this.near){if(d.hp<=0)continue;const f=(e.x-d.x)**2+(e.z-d.z)**2;f<r&&this.los(e.x,e.z,d.x,d.z)&&(i=d,r=f)}if(!i){e.state="idle",e.timer=0,e.vx=e.vz=0;return}const a=i.x-e.x,o=i.z-e.z,l=Math.sqrt(r)||.01;if(e.state==="lock"||e.state==="deploy"){if(e.vx=e.vz=0,e.timer-=t,e.timer>0)return;e.state==="lock"?this.fire(e,i,n,n.spread,e.wander):this.throwProjectile("mortar",e.x,e.z,e.wander,e.burst,!1,2.1,4.2),e.ammo--,e.attack=.3,e.cooldown=n.rate,e.state="aim";return}e.angle=Wi(e.angle,Math.atan2(a,o),e.kind==="riot"?3:e.kind==="flamer"?2.5:8,t);const c=e.kind==="riot"?4:e.kind==="flamer"?7:e.kind==="shotgunner"?10:e.kind==="sniper"?32:e.kind==="sapper"?23:17;let h=l<c-3?-1.7:l>n.range-2?1.8:0;if(e.kind==="heavy"&&(h*=.55),e.vx=a/l*h,e.vz=o/l*h,e.kind==="drone"){const d=Math.sin(this.snapshot.time*.8+e.id)>=0?3.8:-3.8;e.vx+=o/l*d,e.vz-=a/l*d}if(this.move(e,e.vx*t,e.vz*t,!0),e.state=e.vx||e.vz?"run":"aim",!(l>n.range||e.cooldown>0)){if(e.ammo<=0){e.state="reload",e.timer=n.reload,e.burst=0;return}if(e.kind==="sniper"){e.state="lock",e.timer=1.05,e.wander=Math.atan2(a,o),e.angle=e.wander,e.vx=e.vz=0;return}if(e.kind==="sapper"){e.state="deploy",e.timer=.85,e.wander=i.x,e.burst=i.z,e.vx=e.vz=0;return}if(e.ammo--,e.attack=.15,e.kind==="grenadier"){const d=i.x+i.vx*.25,f=i.z+i.vz*.25,p=this.snapshot.district>=3?3:1;for(let g=0;g<p;g++)this.throwProjectile("grenade",e.x,e.z,d+(g-(p-1)/2)*2.6,f+g%2*2,!1,_l.fuse,_l.radius)}else if(e.kind==="flamer"){const d=Math.sin(e.angle),f=Math.cos(e.angle);this.allies.query(e.x,e.z,n.range,this.shotTargets);for(const p of this.shotTargets){const g=p.x-e.x,x=p.z-e.z,m=Math.hypot(g,x);p.hp>0&&m<=n.range&&g*d+x*f>=m*.88&&this.los(e.x,e.z,p.x,p.z)&&this.damage(p,n.damage*(1+2*this.snapshot.district/(this.snapshot.district+24)),"toxic",e)}}else{const d=e.kind==="shotgunner"?6:1;for(let f=0;f<d;f++)this.fire(e,i,n,l<5?n.spread*1.8:n.spread)}e.cooldown=n.rate,e.kind==="rifleman"&&++e.burst>=3&&(e.burst=0,e.cooldown=1.2),e.kind==="heavy"&&++e.burst>=12&&(e.burst=0,e.cooldown=1.1)}}fire(e,t,n,i,r=Math.atan2(t.x-e.x,t.z-e.z)){const a=r+(this.random()+this.random()-1)*i,o=Math.sin(a),l=Math.cos(a);let c=n.range;for(const d of this.snapshot.zone.boxes)c=Math.min(c,this.rayBox(e.x,e.z,o,l,c,d));for(const d of this.snapshot.zone.barriers)d.open||(c=Math.min(c,this.rayBox(e.x,e.z,o,l,c,d)));this.allies.query(e.x,e.z,c,this.shotTargets);let h=null;for(const d of this.shotTargets){if(d.hp<=0)continue;const f=d.x-e.x,p=d.z-e.z,g=f*o+p*l;if(g<0||g>c)continue;Math.abs(f*l-p*o)<d.r+.22&&(c=g,h=d)}this.emit("shot",e.x,e.z,e.x+o*c,e.z+l*c),h&&this.damage(h,n.damage*(1+2*this.snapshot.district/(this.snapshot.district+24)),"bullet",e)}ability(){const e=this.snapshot,t=e.leader,n=e.mutation||this.selected,i=n==="feral"?1:n==="behemoth"?2:n==="mortar"?4:-1;if(!e.mutation&&i>=0&&e.hordeCounts[i]===0){this.notice(`${n.toUpperCase()} needs a living ${i===1?"runner":i===2?"brute":"bomber"} in your horde. Use 3 for toxic.`);return}const r=Math.sin(t.angle),a=Math.cos(t.angle);if(t.attack=.6,n==="feral"){this.dashX=r,this.dashZ=a,this.dashTime=.38,t.invulnerable=.8,this.humans.query(t.x+r*3.5,t.z+a*3.5,6,this.near);for(const o of this.near)o.hp>0&&this.los(t.x,t.z,o.x,o.z)&&this.damage(o,115*e.mods.biteDmg,"melee",t);this.emit("surge",t.x,t.z),e.abilityCooldown=7}else if(n==="behemoth"){this.humans.query(t.x,t.z,7,this.near);for(const o of this.near){const l=o.x-t.x,c=o.z-t.z;l*r+c*a>-.5&&this.los(t.x,t.z,o.x,o.z)&&this.damage(o,145*e.mods.biteDmg,"melee",t)}for(const o of e.zone.barriers)!o.open&&Math.hypot(o.x-t.x,o.z-t.z)<7+Math.max(o.hx,o.hz)&&(o.x-t.x)*r+(o.z-t.z)*a>-1&&this.hitBarrier(o,320);this.emit("explosion",t.x+r*2,t.z+a*2),e.abilityCooldown=10}else n==="mortar"?(this.throwProjectile("mortar",t.x,t.z,t.x+r*18,t.z+a*18,!0,1.3,7*e.mods.bomberRadius),e.abilityCooldown=11):(this.addCloud(t.x+r*3,t.z+a*3,Or.cloudR,Or.life),this.emit("acid",t.x,t.z),e.abilityCooldown=10);this.notice(`${n.toUpperCase()} unleashed`)}damage(e,t,n,i){if(e.hp<=0||e.state==="infected"||e.invulnerable>0)return;const r=this.snapshot;if(e.kind==="riot"&&i){const o=i.x-e.x,l=i.z-e.z,c=Math.hypot(o,l)||1;(o*Math.sin(e.angle)+l*Math.cos(e.angle))/c>.2&&n!=="toxic"&&(t*=.28)}if(e.kind==="brute"&&(t*=Math.max(.25,1-r.mods.bruteArmor)),e.kind==="leader"&&(r.mutation==="behemoth"&&(t*=.6),e.invulnerable=n==="explosion"?.45:.2,r.mods.leaderThorns&&i?.team===1&&this.damage(i,t*r.mods.leaderThorns,"melee",e)),e.hp=Math.max(0,e.hp-t),this.emit("hit",e.x,e.z),e.hp>0)return;if(e.vx=e.vz=0,e.team===0){e.kind==="leader"?(e.state="down",this.downTime=0,this.notice("The alpha has fallen...")):(e.kind==="bomber"&&this.explode(e.x,e.z,5*r.mods.bomberRadius,95*r.mods.hordeDmg,!0),this.killZombie(e));return}r.stats.humansDefeated++;const a=n==="melee"?1:n==="toxic"?Br.toxicChance*r.mods.toxicInfect:n==="explosion"?Br.explosionChance*r.mods.explodeInfect:0;if(this.gainXp(Mi[e.kind]?Mn.guardKill:Mn.civKill),this.random()<a){if(e.infected=!0,e.state="infected",e.timer=Br.riseDelay/r.mods.riseSpeed,this.zoneInfected++,r.stats.totalInfected++,this.gainXp(Mn.infect),this.emit("infection",e.x,e.z),r.leader.hp>0&&(r.leader.hp=Math.min(r.leader.maxHp,r.leader.hp+(e.kind==="medic"?26:1.1))),e.kind==="medic"){this.allies.query(e.x,e.z,13,this.neighbors);for(const o of this.neighbors)o.hp>0&&(o.hp=Math.min(o.maxHp,o.hp+22));this.notice("MEDIC CAPTURED · Nearby horde healed")}(e.kind==="athlete"||e.kind==="heavyCivilian")&&(r.mutation=e.kind==="athlete"?"feral":"behemoth",r.mutationTime=20*r.mods.mutationDur,r.abilityCooldown=Math.min(2,r.abilityCooldown),this.notice(`${r.mutation.toUpperCase()} MUTATION · 20 seconds of borrowed power`))}else e.state="dead",e.timer=2.4,this.unrecoverable++}rise(e){const t=this.snapshot.mods,n=.13*t.runnerChance+(e.origin==="athlete"?.65:0),i=.09*t.bruteChance+(e.origin==="worker"||e.origin==="heavyCivilian"?.5:0),r=.065*t.bomberChance,a=.085*t.spitterChance,o=Math.max(1,n+i+r+a),l=this.random()*o;e.kind=l<n?"runner":l<n+i?"brute":l<n+i+r?"bomber":l<n+i+r+a?"spitter":"walker",e.maxHp=(e.kind==="brute"?240:e.kind==="runner"?62:e.kind==="walker"?78:92)*t.hordeHp,e.hp=e.maxHp,e.team=0,e.r=e.kind==="brute"?.65:.38,e.y=0,e.state="rise",e.timer=0,e.cooldown=.4,e.invulnerable=.7,this.emit("infection",e.x,e.z)}killZombie(e){e.state!=="dead"&&(e.hp=0,e.state="dead",e.timer=1.6,e.vx=e.vz=0,this.snapshot.stats.zombiesLost++)}throwProjectile(e,t,n,i,r,a,o,l){const c=this.snapshot.projectiles;let h=c.find(d=>!d.active);if(!h){if(c.length>=256)return;h={},c.push(h)}Object.assign(h,{active:!0,kind:e,x:t,z:n,y:1.3,vx:(i-t)/o,vz:(r-n)/o,vy:(8*o*o-1.3)/o,timer:o,radius:l,friendly:a})}projectiles(e){for(const t of this.snapshot.projectiles){if(!t.active)continue;t.timer-=e;const n=t.x+t.vx*e,i=t.z+t.vz*e;t.kind==="acid"&&!this.los(t.x,t.z,n,i)?t.timer=0:(t.x=n,t.z=i),t.y=Math.max(.15,t.y+t.vy*e),t.vy-=16*e,!(t.timer>0)&&(t.active=!1,t.kind==="acid"?(this.addCloud(t.x,t.z,t.radius*(1+this.snapshot.mods.spitterPuddle),3.4),this.emit("acid",t.x,t.z)):this.explode(t.x,t.z,t.radius,t.friendly?155*this.snapshot.mods.hordeDmg:(t.kind==="mortar"?78:54)*(1+this.snapshot.district/(this.snapshot.district+30)),t.friendly))}}addCloud(e,t,n,i){let r=this.snapshot.clouds.find(a=>!a.active);if(!r){if(this.snapshot.clouds.length>=128)return;r={},this.snapshot.clouds.push(r)}Object.assign(r,{active:!0,x:e,z:t,radius:n,time:i,tick:0})}clouds(e){for(const t of this.snapshot.clouds)if(t.active){if(t.time-=e,t.tick-=e,t.time<=0){t.active=!1;continue}if(!(t.tick>0)){t.tick+=.35,this.humans.query(t.x,t.z,t.radius,this.blastTargets);for(const n of this.blastTargets)n.hp>0&&this.los(t.x,t.z,n.x,n.z)&&this.damage(n,Or.dps*.35*this.snapshot.mods.hordeDmg,"toxic")}}}explode(e,t,n,i,r){for(const a of this.units){if(a.hp<=0||r&&a.team===0)continue;const o=Math.hypot(a.x-e,a.z-t);o<=n+a.r&&this.los(e,t,a.x,a.z)&&this.damage(a,i*(1-.4*o/(n+a.r)),"explosion")}for(const a of this.snapshot.zone.barriers)!a.open&&this.boxDistance(e,t,a)<n&&this.hitBarrier(a,i*1.6);this.emit("explosion",e,t)}hitBarrier(e,t){if(e.open||e.hp<=0||(e.hp=Math.max(0,e.hp-t),this.emit("debris",e.x,e.z),e.hp>0))return;if(e.open=!0,this.gainXp(Mn.barricade),e.kind!=="shelter"){this.notice("DEFENSIVE LINE BROKEN");return}const n=this.snapshot.zone.shelters.find(i=>i.barrierId===e.id);if(!(!n||n.opened)){n.opened=!0,this.snapshot.stats.sheltersOverrun++,this.snapshot.leader.hp>0&&(this.snapshot.leader.hp=Math.min(this.snapshot.leader.maxHp,this.snapshot.leader.hp+30)),this.gainXp(Mn.shelter);for(let i=0;i<this.shelterPopulation;i++)this.spawn(this.civilianKind(),n.x+(this.random()-.5)*6,n.z+(this.random()-.5)*6);this.notice(`SHELTER OVERRUN · ${this.shelterPopulation} survivors exposed · +30 HP`)}}director(e){const t=this.snapshot;if(this.waveClock+=e,this.waves>=2)return;let n=0;for(const c of this.units)c.team===1&&c.hp>0&&n++;const i=(t.zone.spawn.z-t.leader.z)/Math.max(1,t.zone.spawn.z-t.zone.exit.z),r=this.waves===0?.3:.66;if(this.waveClock<27&&n>7&&i<r)return;const a=t.leader.hp<t.leader.maxHp*.35||t.hordeCounts.reduce((c,h)=>c+h,0)<8,o=this.waves===0?Math.ceil(this.reserveCivilians/2):this.reserveCivilians;this.reserveCivilians-=o;const l=nn(t.leader.z-14,-39,33);for(let c=0;c<o;c++)this.spawn(a&&c%5===0?"medic":this.civilianKind(),(this.random()-.5)*23,l+(this.random()-.5)*12);if(!a||this.waves===1){const c=this.waves===0?Math.ceil(this.reserveEnemies.length/2):this.reserveEnemies.length;for(let h=0;h<c;h++)this.spawn(this.reserveEnemies.pop(),(this.random()-.5)*13,Math.max(-42,l-(a?22:12)))}this.waves++,this.waveClock=0,this.notice(a?"RELIEF: fleeing medical convoy nearby. Regroup and feed.":"EVACUATION WAVE · Fresh survivors ahead")}countHorde(){const e=this.snapshot;e.hordeCounts.fill(0);let t=0;for(const n of this.units)n.team===0&&n.kind!=="leader"&&n.hp>0&&(e.hordeCounts[xl.indexOf(n.kind)]++,t++);e.stats.peakHorde=Math.max(e.stats.peakHorde,t)}objective(){const e=this.snapshot,t=this.definition,n=Math.max(1,this.potential-this.unrecoverable);e.infection=nn(this.zoneInfected/n,0,1);let i=0;for(const o of e.zone.barriers)!o.open&&o.kind!=="shelter"&&i++;const r=e.infection>=t.infectionTarget||this.zoneInfected+this.unrecoverable>=this.potential,a=r&&i===0;a&&!e.readyExit&&this.notice(e.district===4?"FINAL LINE BROKEN · Reach the evacuation marker!":"DISTRICT OVERRUN · Follow the green exit marker"),e.readyExit=a,e.objective=a?e.district===4?"REACH THE LAST EVACUATION":"REACH THE DISTRICT EXIT":r?`BREAK ${i} REMAINING DEFENSIVE ${i===1?"LINE":"LINES"}`:`INFECT ${Math.round(t.infectionTarget*100)}% · ${Math.round(e.infection*100)}% INFECTED${i?` · ${i} DEFENSIVE LINES`:""}`}advance(){const e=this.snapshot;if(e.district>=4&&!this.endless){e.won=!0,this.notice("THE CITY BELONGS TO THE DEAD.");return}let t=0;for(let i=this.units.length-1;i>=0;i--){const r=this.units[i];r.state==="infected"&&this.rise(r),(r.hp<=0||r.team!==0||r.kind!=="leader"&&++t>vl)&&(this.units.splice(i,1),this.pool.push(r))}t>vl&&this.notice("The rear parade holds the infected district. 300 march onward."),e.district++,e.zone=this.zoneFactory(e.district),e.leader.x=e.zone.spawn.x,e.leader.z=e.zone.spawn.z,e.leader.vx=e.leader.vz=0,e.leader.hp=Math.min(e.leader.maxHp,e.leader.hp+35),e.leader.invulnerable=2;let n=0;for(const i of this.units)if(i.kind!=="leader"){const r=n*2.399963,a=1+Math.sqrt(n)*.7;i.x=e.zone.spawn.x+Math.sin(r)*a,i.z=nn(e.zone.spawn.z+Math.cos(r)*a,-50,52),this.blocked(i.x,i.z,i.r)&&(i.x=e.zone.spawn.x,i.z=e.zone.spawn.z),i.vx=i.vz=0,i.hp=Math.min(i.maxHp,i.hp+15),n++}for(const i of e.projectiles)i.active=!1;for(const i of e.clouds)i.active=!1;e.surgeTime=0,this.dashTime=0,this.populate(),this.rebuildGrids(),this.countHorde(),this.objective(),this.gainXp(Mn.district)}gainXp(e){this.snapshot.xp+=e*this.snapshot.mods.xpGain,this.checkLevel()}checkLevel(){const e=this.snapshot;if(e.pendingLevel||e.xp<e.xpNext||e.leader.hp<=0)return;const t=js.some(n=>e.upgrades.reduce((i,r)=>i+ +(r===n.id),0)<n.maxRank);do e.xp-=e.xpNext,e.level++,e.stats.levelReached=e.level,e.xpNext=Math.round(Mn.levelBase*Mn.levelGrowth**Math.min(45,e.level-1));while(!t&&e.xp>=e.xpNext);e.pendingLevel=t}blocked(e,t,n){if(e<-37||e>37||t<-54||t>54)return!0;for(const i of this.snapshot.zone.boxes)if(Math.abs(e-i.x)<i.hx+n&&Math.abs(t-i.z)<i.hz+n)return!0;for(const i of this.snapshot.zone.barriers)if(!i.open&&Math.abs(e-i.x)<i.hx+n&&Math.abs(t-i.z)<i.hz+n)return!0;return!1}move(e,t,n,i){const r=Math.max(1,Math.ceil(Math.max(Math.abs(t),Math.abs(n))/.28));t/=r,n/=r;for(let a=0;a<r;a++){const o=e.x,l=e.z;if(this.blocked(e.x+t,e.z,e.r)||(e.x+=t),this.blocked(e.x,e.z+n,e.r)||(e.z+=n),i&&e.x===o&&e.z===l){const c=e.id%2?1:-1;this.blocked(e.x+n*c,e.z-t*c,e.r)?this.blocked(e.x-n*c,e.z+t*c,e.r)||(e.x-=n*c,e.z+=t*c):(e.x+=n*c,e.z-=t*c)}}}boxDistance(e,t,n){return Math.hypot(Math.max(0,Math.abs(e-n.x)-n.hx),Math.max(0,Math.abs(t-n.z)-n.hz))}nearestBarrier(e,t,n,i,r){let a=null,o=n;for(const l of this.snapshot.zone.barriers){if(l.open)continue;const c=nn(e,l.x-l.hx,l.x+l.hx),h=nn(t,l.z-l.hz,l.z+l.hz),d=Math.hypot(c-e,h-t);d>=o||i!==void 0&&r!==void 0&&(c-e)*i+(h-t)*r<-.2||this.los(e,t,c,h,l.id)&&(a=l,o=d)}return a}los(e,t,n,i,r=-1){const a=Math.hypot(n-e,i-t);if(a<.02)return!0;const o=(n-e)/a,l=(i-t)/a;for(const c of this.snapshot.zone.boxes)if(this.rayBox(e,t,o,l,a,c)<a-.035)return!1;for(const c of this.snapshot.zone.barriers)if(!c.open&&c.id!==r&&this.rayBox(e,t,o,l,a,c)<a-.035)return!1;return!0}rayBox(e,t,n,i,r,a){let o=0,l=r;if(Math.abs(n)<1e-6){if(e<a.x-a.hx||e>a.x+a.hx)return r}else{const c=(a.x-a.hx-e)/n,h=(a.x+a.hx-e)/n;if(o=Math.max(o,Math.min(c,h)),l=Math.min(l,Math.max(c,h)),o>l)return r}if(Math.abs(i)<1e-6){if(t<a.z-a.hz||t>a.z+a.hz)return r}else{const c=(a.z-a.hz-t)/i,h=(a.z+a.hz-t)/i;if(o=Math.max(o,Math.min(c,h)),l=Math.min(l,Math.max(c,h)),o>l)return r}return l>=0?o:r}emit(e,t,n,i,r){const a=this.snapshot.effects;a.length<220&&a.push({kind:e,x:t,z:n,y:e==="shot"?1.25:.8,tx:i,tz:r})}notice(e){const t=this.snapshot.notices;t.length<16&&t[t.length-1]!==e&&t.push(e)}}const Sl=["SUBURBS","DOWNTOWN","POLICE BLOCK","INDUSTRIAL BELT","LAST EVACUATION","WINTER HEIGHTS","ASHEN FIELDS","FROZEN QUARTER","SUNBAKED ROWS","EMBER GROVE","PETROL STATION ROW","HARVEST HILLS","GREEN DISTRICT","CRYO DEPOT","MOLTEN YARD"],El=["CLEAR","RAIN","SNOW","HEAT HAZE","FOG","ASH FALL"],sn=[{id:"rotten_sneakers",name:"ROTTEN SNEAKERS",desc:"+8% movement speed",slot:"charm",rarity:0,apply:s=>{s.leaderSpeed*=1.08,s.hordeSpeed*=1.04}},{id:"bounce_sole",name:"MOONSOLE",desc:"Dash cooldown -20%",slot:"charm",rarity:0,apply:s=>{s.dashCd*=.8}},{id:"lucky_tooth",name:"LUCKY TOOTH",desc:"+15% XP gain",slot:"charm",rarity:1,apply:s=>{s.xpGain*=1.15}},{id:"war_horn",name:"RUSTY HORN",desc:"Surge cooldown -25%",slot:"charm",rarity:1,apply:s=>{s.surgeCd*=.75}},{id:"magnet_amulet",name:"GRAVE MAGNET",desc:"XP orb attraction +50%",slot:"charm",rarity:2,apply:s=>{s.magnet*=1.5}},{id:"reinforced_spine",name:"REINFORCED SPINE",desc:"+15% max HP",slot:"bone",rarity:0,apply:s=>{s.leaderHp*=1.15}},{id:"iron_rib",name:"IRON RIB",desc:"+10% horde HP",slot:"bone",rarity:0,apply:s=>{s.hordeHp*=1.1}},{id:"shock_absorber",name:"SPONGE MARROW",desc:"Leader takes 12% less damage",slot:"bone",rarity:1,apply:s=>{s.leaderHp*=1.12}},{id:"thunder_femur",name:"THUNDER FEMUR",desc:"Bite damage +18%",slot:"bone",rarity:1,apply:s=>{s.biteDmg*=1.18}},{id:"brute_bone",name:"BRUTE BONE",desc:"Brutes +15% HP, +10% chance",slot:"bone",rarity:2,apply:s=>{s.hordeHp*=1.05,s.bruteChance*=1.1,s.bruteArmor+=.05}},{id:"diseased_gland",name:"DISEASED GLAND",desc:"+12% explosion infection",slot:"organ",rarity:0,apply:s=>{s.explodeInfect*=1.12}},{id:"hive_brain",name:"HIVE BRAIN",desc:"+15% horde detection radius",slot:"organ",rarity:1,apply:s=>{s.aggroRange*=1.15}},{id:"putrid_heart",name:"PUTRID HEART",desc:"Zombies regenerate slowly",slot:"organ",rarity:1,apply:s=>{s.hordeRegen+=1.2}},{id:"toxic_lungs",name:"TOXIC LUNGS",desc:"Toxic infection +25%",slot:"organ",rarity:2,apply:s=>{s.toxicInfect*=1.25}},{id:"primal_cortex",name:"PRIMAL CORTEX",desc:"Mutations last +30%",slot:"organ",rarity:2,apply:s=>{s.mutationDur*=1.3}}],Hr={charm:"CHARM",organ:"ORGAN",bone:"BONE"},rn=[{id:"feral",name:"FERAL",icon:"╱╱╱",description:"A fast predator. Close the gap and tear through the living."},{id:"behemoth",name:"BEHEMOTH",icon:"⬡",description:"A walking wrecking crew. Smash barricades and the humans behind them."},{id:"toxic",name:"TOXIC",icon:"◎",description:"Turn the streets green with an infectious acid attack."},{id:"mortar",name:"MORTAR",icon:"✳",description:"Deliver an explosive welcome from a distance."}],Gr={MAIN_MENU:"menu",LOADOUT:"loadout",PAUSED:"pausemenu",LEVEL_UP:"levelup",VICTORY:"victory",DEFEAT:"defeat",HOWTO:"howto",SETTINGS:"settings"},yl="dead-parade-v1",n0={charm:"◇",bone:"╋",organ:"◉"},Fs=["charm","organ","bone"],i0={hordeHp:"Horde health",hordeDmg:"Horde damage",hordeSpeed:"Horde speed",runnerChance:"Runner chance",bruteChance:"Brute chance",bomberChance:"Bomber chance",spitterChance:"Spitter chance",riseSpeed:"Rise speed",aggroRange:"Detection range",biteDmg:"Bite damage",biteSpeed:"Bite speed",leaderHp:"Leader health",leaderSpeed:"Leader speed",dashCd:"Dash cooldown",mutationDur:"Mutation duration",xpGain:"XP gain",explodeInfect:"Explosion infection",hordeRegen:"Horde healing / sec",surgeCd:"Surge cooldown",surgeDur:"Surge duration",bruteArmor:"Brute armor",bomberRadius:"Blast radius",spitterRange:"Spitter range",spitterPuddle:"Acid pool size",toxicInfect:"Toxic infection",leaderThorns:"Thorns damage",magnet:"XP attraction"},De=s=>document.getElementById(s),ke=(s,e,t)=>{const n=document.createElement(s);return n.className=e,t!==void 0&&(n.textContent=t),n},Tl=s=>`${Math.floor(s/60).toString().padStart(2,"0")}:${Math.floor(s%60).toString().padStart(2,"0")}`,Os=(s,e,t,n)=>typeof s=="number"&&Number.isFinite(s)?Math.max(t,Math.min(n,s)):e;class s0{constructor(e){this.actions=e,this.restore();const t=(a,o)=>De(a).addEventListener("click",o),n=()=>this.actions.menu(),i=()=>this.actions.loadout(),r=()=>{this.fullscreen&&!document.fullscreenElement&&this.setFullscreen(!0),this.actions.start(this.endless)};t("btnEndless",()=>{this.endless=!0,r()}),t("btnStart",()=>{this.endless=!1,r()}),t("btnStartRun",()=>r()),["btnRestart","btnWinAgain","btnLoseAgain"].forEach(a=>t(a,r)),["btnLoadout","btnWinLoadout","btnLoseLoadout"].forEach(a=>t(a,i)),["btnLoBack","btnQuit","btnWinMenu","btnLoseMenu"].forEach(a=>t(a,n)),t("btnHow",()=>this.show("HOWTO")),t("btnHowBack",()=>this.show(this.previous)),t("btnSettings",()=>this.show("SETTINGS")),t("btnPauseSettings",()=>this.show("SETTINGS")),t("btnSetBack",()=>this.show(this.previous)),t("btnResume",()=>this.actions.resume()),t("btnPause",()=>this.actions.pause()),t("slotMutation",()=>this.equipMutation(rn[(rn.findIndex(a=>a.id===this.mutation)+1)%rn.length].id)),document.querySelectorAll("[data-slot]").forEach(a=>a.addEventListener("click",()=>{const o=a.dataset.slot;delete this.equipment[o],this.save(),this.renderEquipment(),this.actions.previewItem("")})),this.bindSettings(),this.renderInventory(),this.renderEquipment()}current="";previous="MAIN_MENU";endless=!1;values={master:.7,music:.45,sfx:.8,sensitivity:1,shadows:!0,quality:"high"};fullscreen=!1;equipment={charm:"rotten_sneakers",bone:"reinforced_spine",organ:"diseased_gland"};unlocked=new Set(sn.filter(e=>e.rarity<2&&e.id!=="shock_absorber").map(e=>e.id));mutation="feral";selectedAbility="toxic";latest;ended=new WeakMap;textCache=new Map;cooldownMax=[1,1,1];lastDistrict=-1;currentDistrict=ss(0);lastRun;itemButtons=new Map;get settings(){return this.values}get screen(){return this.current}get startingMutation(){return this.mutation}selectAbility(e){const t=rn[e-1];t&&(this.selectedAbility=t.id,this.text("eName",t.name))}show(e){if(e!=="PLAYING"&&!Gr[e])return;(e==="SETTINGS"||e==="HOWTO")&&this.current!==e&&(this.previous=this.current||"MAIN_MENU"),e!=="PLAYING"&&document.pointerLockElement&&document.exitPointerLock();const t=this.current!==e;this.current=e,document.querySelectorAll(".screen").forEach(n=>n.classList.toggle("on",n.id===Gr[e]||n.id==="hud"&&["PLAYING","PAUSED","LEVEL_UP"].includes(e))),document.body.dataset.screen=e.toLowerCase(),t&&this.toggleBuild(!1),e!=="PLAYING"&&De("vignette").classList.remove("hurt"),e==="LOADOUT"&&(this.renderEquipment(),this.actions.previewItem(this.equipment.charm||""),De("btnStartRun").firstElementChild.textContent=this.endless?"BEGIN ENDLESS PARADE":"BEGIN FIVE-DISTRICT STORY"),e==="SETTINGS"&&this.syncSettings(),t&&e!=="PLAYING"&&document.querySelector(`#${Gr[e]} button`)?.focus({preventScroll:!0})}getModifiers(){const e=Zi();for(const t of Fs){const n=sn.find(i=>i.id===this.equipment[t]&&i.slot===t);n&&this.unlocked.has(n.id)&&n.apply(e)}return Object.assign(e,{startMutation:this.mutation})}update(e){this.latest=e,this.lastRun!==e.stats&&(this.lastRun=e.stats,this.lastDistrict=-1,this.cooldownMax=[1,1,1],this.selectedAbility="toxic",this.endless=!!e.endless);const t=this.lastDistrict===e.district?this.currentDistrict:this.currentDistrict=ss(e.district),n=Math.max(0,Math.min(1,e.infection));this.text("hudDistrict",e.endless?`ENDLESS · SECTOR ${e.endless.sector} · TIER ${e.endless.tier}${e.endless.elite?" · ELITE":""}`:`DISTRICT ${e.district+1} / ${Ki.length}`),this.text("hudDistName",t.name),this.text("hudEnvironment",`${Sl[e.zone.biome]} · ${El[e.zone.weather]}`),this.text("hudInfection",`INFECTION ${Math.round(n*100)}%`),this.text("hudTarget",`TARGET ${Math.round(t.infectionTarget*100)}%`),De("infectionFill").style.width=`${n*100}%`,this.text("hudObjective",e.objective),De("hudObjective").classList.toggle("done",e.readyExit);const i=Math.round(Math.hypot(e.leader.x-e.zone.exit.x,e.leader.z-e.zone.exit.z));this.text("hudDirection",e.readyExit?`↑ FOLLOW THE EXIT MARKER · ${i}m`:"INFECT HUMANS · OVERRUN SHELTERS · BREAK DEFENSES"),this.text("hpText",`${Math.max(0,Math.ceil(e.leader.hp))} / ${Math.ceil(e.leader.maxHp)}`);const r=Math.max(0,Math.min(1,e.leader.hp/e.leader.maxHp));De("hpFill").style.width=`${r*100}%`,De("hudHp").classList.toggle("critical",r<.3),De("vignette").classList.toggle("hurt",r<.3&&this.current==="PLAYING");const a=e.mutationTime>0?rn.find(c=>c.id===e.mutation):void 0,o=a||rn.find(c=>c.id===this.selectedAbility);this.text("hudMut",a?`${a.name} / ${Math.ceil(e.mutationTime)}s`:`BASE FORM / ${o.name} SELECTED`),this.text("hudTimer",Tl(e.stats.runTime));let l=0;for(let c=0;c<5;c++){const h=e.hordeCounts[c]||0;l+=h,this.text(`count${c}`,String(h))}this.text("hudHorde",String(l)),this.text("eName",o.name),this.cooldown("Q",e.surgeCooldown,0,e.surgeTime>0),this.cooldown("E",e.abilityCooldown,1,!1),this.cooldown("Sp",e.dashCooldown,2,!1),this.text("hudLevel",`LVL ${e.level}  /  ${Math.floor(e.xp)} : ${e.xpNext} XP`),De("xpFill").style.width=`${Math.max(0,Math.min(100,e.xp/Math.max(1,e.xpNext)*100))}%`,this.lastDistrict!==e.district&&(this.lastDistrict=e.district,this.current==="PLAYING"&&this.toast(`${t.name} — ${t.note}`))}levelUp(e,t){const n=De("luCards");n.replaceChildren();let i=!1;e.slice(0,3).forEach((r,a)=>{const o=ke("button",`lu-card r${r.rarity}`);o.type="button",o.dataset.upgradeId=r.id,o.dataset.choice=String(a+1),o.setAttribute("aria-keyshortcuts",String(a+1));const l=(this.latest?.upgrades.filter(c=>c===r.id).length||0)+1;o.append(ke("span","card-number",`[${a+1}]`),ke("span","rar",`${zr[r.rarity]} · RANK ${l}/${r.maxRank}`),ke("span","upgrade-glyph",["╋","◇","✳"][a]),ke("h3","",r.name),ke("p","",r.desc),ke("span","card-choose",`PRESS ${a+1} / EMBRACE IT ↗`)),o.addEventListener("click",()=>{i||(i=!0,n.querySelectorAll("button").forEach(c=>{c.disabled=!0}),t(r.id))}),n.append(o)}),this.show("LEVEL_UP"),n.querySelector("button")?.focus({preventScroll:!0})}toggleBuild(e){const t=De("buildPanel"),n=e??t.hidden;if(t.hidden=!n||!["PLAYING","PAUSED","LEVEL_UP"].includes(this.current),t.hidden||!this.latest)return;const i=De("buildContent");i.replaceChildren(),i.append(ke("h3","",`LEVEL ${this.latest.level} / ${this.latest.mutation.toUpperCase()}`));const r=ke("div","build-stats");this.modifierLines(this.latest.mods).forEach(o=>r.append(ke("div","",o))),r.childElementCount||r.append(ke("div","","Original recipe. No modifiers yet.")),i.append(r,ke("h3","","EVOLUTIONS"));const a=new Map;this.latest.upgrades.forEach(o=>a.set(o,(a.get(o)||0)+1)),a.forEach((o,l)=>{const c=js.find(d=>d.id===l);if(!c)return;const h=ke("div",`build-upgrade r${c.rarity}`);h.append(ke("b","",`${c.name} · ${o}/${c.maxRank}`),ke("p","",c.desc)),i.append(h)}),a.size||i.append(ke("p","panel-note","Infect humans to earn your first evolution.")),i.append(ke("h3","","EQUIPMENT")),Fs.forEach(o=>i.append(ke("p","build-item",`${Hr[o]} / ${sn.find(l=>l.id===this.equipment[o])?.name||"EMPTY"}`)))}toast(e){const t=De("toasts");t.childElementCount>=4&&t.firstElementChild?.remove();const n=ke("div","toast",e);t.append(n),window.setTimeout(()=>n.remove(),3800)}end(e,t){this.latest=e,this.endless=!!e.endless;const n=De(t?"winStats":"loseStats");n.replaceChildren();const i=e.stats,r=[["TIME ON EARTH",Tl(i.runTime)],["HUMANS INFECTED",i.totalInfected],["LARGEST HORDE",i.peakHorde],["HUMANS DEFEATED",i.humansDefeated],["SHELTERS OVERRUN",i.sheltersOverrun],["ZOMBIES LOST",i.zombiesLost],["LEVEL REACHED",i.levelReached],e.endless?["SECTOR REACHED",e.endless.sector]:["DISTRICT REACHED",`${e.district+1} / ${Ki.length}`]];e.endless&&r.push(["DEFENSE TIER",`${e.endless.tier}${e.endless.elite?" · ELITE":""}`],["BIOME",Sl[e.zone.biome]],["WEATHER",El[e.zone.weather]]),this.text(t?"winNarrative":"loseNarrative",e.endless?"THE INFECTION HAS SPREAD. THE NEXT DEFENSE LINE IS ALREADY MOBILIZING.":t?"THE EVACUATION NEVER LEFT.":"THE CITY HOLDS… FOR NOW."),r.forEach(([o,l])=>{const c=ke("div","stat-row");c.append(ke("span","",o),ke("b","",String(l))),n.append(c)});let a=this.ended.get(i);if(a===void 0){const o=sn.find(l=>!this.unlocked.has(l.id));o&&(t||i.totalInfected>=10)?(this.unlocked.add(o.id),this.save(),a=`UNLOCKED: ${o.name} — waiting in your loadout.`,this.renderInventory()):a=o?"Infect 10 humans in one run to unlock another item.":"THE COLLECTION IS COMPLETE. THE CITY IS NOT.",this.ended.set(i,a)}De(t?"winReward":"loseReward").textContent=a,this.show(t?"VICTORY":"DEFEAT")}text(e,t){this.textCache.get(e)!==t&&(this.textCache.set(e,t),De(e).textContent=t)}cooldown(e,t,n,i){t<=0?this.cooldownMax[n]=1:this.cooldownMax[n]=Math.max(this.cooldownMax[n],t);const r=t<=0;De(`ab${e}`).classList.toggle("ready",r),De(`ab${e}`).classList.toggle("active",i),De(`cd${e}`).style.setProperty("--cooldown",`${r?0:t/this.cooldownMax[n]*360}deg`),this.text(`t${e}`,i?"ACTIVE":r?"READY":`${Math.ceil(t)}s`)}renderInventory(){const e=De("loInv");e.replaceChildren(),this.itemButtons.clear(),sn.forEach(t=>{const n=this.unlocked.has(t.id),i=ke("button",`lo-item r${t.rarity}${n?"":" locked"}`);i.type="button",i.setAttribute("aria-disabled",String(!n)),i.title=`${t.name} · ${Hr[t.slot]} · ${this.itemDescription(t)}${n?`
Click to equip`:`
Infect 10 humans in a run to unlock the next item`}`,i.append(ke("span","item-icon",n0[t.slot]),ke("span","it-name",t.name),ke("span","it-rar",`${zr[t.rarity]} / ${Hr[t.slot]}`),ke("span","it-status",n?"EQUIP":"LOCKED"));const r=()=>{this.inspectItem(t),n&&this.actions.previewItem(t.id)};i.addEventListener("mouseenter",r),i.addEventListener("focus",r),i.addEventListener("click",()=>{if(!this.unlocked.has(t.id)){this.toast("Infect 10 humans in one run to unlock the next item.");return}this.equipment[t.slot]=t.id,this.save(),this.renderEquipment(),this.inspectItem(t),this.actions.previewItem(t.id)}),this.itemButtons.set(t.id,i),e.append(i)}),De("loItemHint").textContent=`${this.unlocked.size} / ${sn.length} UNLOCKED`}renderEquipment(){Fs.forEach(o=>{const l=sn.find(h=>h.id===this.equipment[o]),c=o[0].toUpperCase()+o.slice(1);De(`slot${c}`).textContent=l?.name||"EMPTY",De(`slot${c}`).parentElement.title=l?`${this.itemDescription(l)} · Click to unequip`:"Choose an item from the collection"}),this.itemButtons.forEach((o,l)=>{const c=Object.values(this.equipment).includes(l);o.classList.toggle("sel",c),o.setAttribute("aria-pressed",String(c)),o.querySelector(".it-status").textContent=c?"EQUIPPED":this.unlocked.has(l)?"EQUIP":"LOCKED"}),De("slotMutationName").textContent=rn.find(o=>o.id===this.mutation).name;const e=De("mutationChoices");e.replaceChildren(),rn.forEach((o,l)=>{const c=ke("button",`mutation-choice${this.mutation===o.id?" sel":""}`,`${l+1} / ${o.name}`);c.type="button",c.title=o.description,c.setAttribute("aria-pressed",String(this.mutation===o.id)),c.addEventListener("click",()=>this.equipMutation(o.id)),e.append(c)});const t=De("loStats");t.replaceChildren();const n=this.getModifiers(),i=ke("div","lo-stat-head");i.append(ke("span","eyebrow","STARTING VITALS"),ke("b","",`${Math.round(Mt.hpMax*n.leaderHp)} HP`)),t.append(i);const r=this.modifierLines(n),a=ke("div","lo-stat-list");r.forEach(o=>a.append(ke("span","",o))),r.length||a.append(ke("span","","Unmodified. Undeniably undead.")),t.append(a),De("itemDetail").childElementCount||this.inspectItem(sn[0])}equipMutation(e){this.mutation=e,this.save(),this.renderEquipment(),this.actions.previewItem(e);const t=rn.find(i=>i.id===e);De("itemDetail").replaceChildren(ke("b","",`${t.name} / STARTING MUTATION`),ke("p","",t.description))}inspectItem(e){De("itemDetail").replaceChildren(ke("b",`r${e.rarity}`,`${e.name} / ${zr[e.rarity]}`),ke("p","",this.itemDescription(e)))}itemDescription(e){const t=Zi();return e.apply(t),this.modifierLines(t).join(" · ")}modifierLines(e){const t=Zi(),n=[];for(const i of Object.keys(t)){if(Math.abs(e[i]-t[i])<1e-4)continue;const r=e[i]-t[i],a=t[i]===1||i==="bruteArmor"||i==="spitterPuddle"?`${Math.round(r*100)}%`:Number(r.toFixed(1)).toString();n.push(`${r>0?"+":""}${a} ${i0[i]}`)}return n}bindSettings(){[["setMaster","master"],["setMusic","music"],["setSfx","sfx"],["setSens","sensitivity"]].forEach(([t,n])=>De(t).addEventListener("input",()=>{this.values[n]=Number(De(t).value),this.save(),this.syncSettings(),this.actions.settingsChanged()})),De("setShadows").addEventListener("change",()=>{this.values.shadows=De("setShadows").checked,this.save(),this.actions.settingsChanged()}),De("setHorde").addEventListener("change",()=>{this.values.quality=De("setHorde").value,this.save(),this.actions.settingsChanged()}),De("setFull").addEventListener("change",()=>this.setFullscreen(De("setFull").checked)),document.addEventListener("fullscreenchange",()=>{De("setFull").checked=!!document.fullscreenElement}),this.syncSettings()}syncSettings(){[["setMaster","valMaster",this.values.master,!0],["setMusic","valMusic",this.values.music,!0],["setSfx","valSfx",this.values.sfx,!0],["setSens","valSens",this.values.sensitivity,!1]].forEach(([t,n,i,r])=>{De(t).value=String(i),De(n).textContent=r?`${Math.round(i*100)}%`:`${i.toFixed(2)}×`}),De("setShadows").checked=this.values.shadows,De("setHorde").value=this.values.quality,De("setFull").checked=!!document.fullscreenElement}async setFullscreen(e){try{e&&!document.fullscreenElement?await document.documentElement.requestFullscreen():!e&&document.fullscreenElement&&await document.exitFullscreen(),this.fullscreen=e,this.save(),this.actions.settingsChanged()}catch{this.toast("Fullscreen is unavailable in this browser window.")}this.syncSettings()}restore(){try{const e=JSON.parse(localStorage.getItem(yl)||"null");if(!e||typeof e!="object")return;const t=e.settings||{};this.values={master:Os(t.master,.7,0,1),music:Os(t.music,.45,0,1),sfx:Os(t.sfx,.8,0,1),sensitivity:Os(t.sensitivity,1,.2,3),shadows:typeof t.shadows=="boolean"?t.shadows:!0,quality:["high","medium","low"].includes(t.quality)?t.quality:"high"},Array.isArray(e.unlocked)&&e.unlocked.forEach(n=>{typeof n=="string"&&sn.some(i=>i.id===n)&&this.unlocked.add(n)}),e.equipment&&typeof e.equipment=="object"&&(this.equipment={},Fs.forEach(n=>{const i=e.equipment[n];sn.some(r=>r.id===i&&r.slot===n)&&this.unlocked.has(i)&&(this.equipment[n]=i)})),rn.some(n=>n.id===e.mutation)&&(this.mutation=e.mutation),this.fullscreen=e.fullscreen===!0}catch{}}save(){try{localStorage.setItem(yl,JSON.stringify({settings:this.values,equipment:this.equipment,unlocked:[...this.unlocked],mutation:this.mutation,fullscreen:this.fullscreen}))}catch{}}}class r0{context=null;master=null;music=null;sfx=null;noise=null;timer=0;beat=0;ambience=0;voices=0;volumes={master:.65,music:.4,sfx:.7};async unlock(){if(!this.context){this.context=new AudioContext,this.master=this.context.createGain(),this.music=this.context.createGain(),this.sfx=this.context.createGain(),this.music.connect(this.master),this.sfx.connect(this.master),this.master.connect(this.context.destination),this.noise=this.context.createBuffer(1,this.context.sampleRate,this.context.sampleRate);const e=this.noise.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1;this.configure(this.volumes)}await this.context.resume()}configure(e){if(this.volumes={master:e.master,music:e.music,sfx:e.sfx},!!this.context)for(const[t,n]of[[this.master,e.master],[this.music,e.music],[this.sfx,e.sfx]])t?.gain.setTargetAtTime(Math.max(0,Math.min(1,n)),this.context.currentTime,.03)}play(e,t,n,i,r=!1,a=!1,o=0,l=e){const c=this.context,h=a?this.music:this.sfx;if(!c||!h||c.state!=="running"||this.voices>=36)return;const d=c.createGain(),f=c.createStereoPanner(),p=r?c.createBufferSource():c.createOscillator();p instanceof OscillatorNode?(p.type=i,p.frequency.setValueAtTime(Math.max(20,e),c.currentTime),p.frequency.exponentialRampToValueAtTime(Math.max(20,l),c.currentTime+t)):p.buffer=this.noise;const g=c.createBiquadFilter();g.type="lowpass",g.frequency.value=r?e:6e3,d.gain.setValueAtTime(.001,c.currentTime),d.gain.linearRampToValueAtTime(n,c.currentTime+.008),d.gain.exponentialRampToValueAtTime(.001,c.currentTime+t),f.pan.value=Math.max(-1,Math.min(1,o)),p.connect(g),g.connect(d),d.connect(f),f.connect(h),this.voices++,p.onended=()=>{p.disconnect(),g.disconnect(),d.disconnect(),f.disconnect(),this.voices--},p.start(),p.stop(c.currentTime+t+.02)}effect(e,t){const n=e.x-t.leader.x,i=e.z-t.leader.z,r=Math.hypot(n,i),a=.22/(1+r*.065),o=n/30;if(!(r>90))switch(e.kind){case"shot":this.play(2400,.08,a,"sawtooth",!0,!1,o),this.play(130,.07,a*.7,"square",!1,!1,o,40);break;case"explosion":this.play(450,.65,a*2,"sawtooth",!0,!1,o),this.play(85,.5,a,"sine",!1,!1,o,22);break;case"surge":this.play(100,.9,.4,"sawtooth",!1,!1,0,48),this.play(700,.4,.15,"triangle",!0);break;case"infection":this.play(170,.24,a*.5,"sine",!1,!1,o,460);break;case"bite":case"hit":this.play(750,.11,a*.8,"square",!0,!1,o);break;case"acid":this.play(900,.3,a*.6,"triangle",!0,!1,o);break;case"debris":this.play(1500,.22,a*.7,"square",!0,!1,o);break}}update(e,t,n){if(!this.context||this.context.state!=="running")return;this.timer-=e,this.ambience-=e;const i=t.hordeCounts.reduce((r,a)=>r+a,0);if(this.timer<=0){const r=n?t.district===4?4:i>90?3:t.surgeTime>0?2:1:0;this.timer+=60/(96+r*12)/2;const a=[55,55,65.41,55,73.42,65.41,51.91,61.74],o=a[Math.floor(this.beat/4)%a.length];this.beat%2===0&&this.play(o,.25,.12,"triangle",!1,!0),this.beat%4===0&&this.play(90,.13,.17,"sine",!1,!0,0,25),this.beat%4===2&&this.play(1800,.095,.065,"square",!0,!0),(r>1||this.beat%2===0)&&this.play(6500,.035,.025,"triangle",!0,!0),this.beat%8===1&&this.play(o*8,.5,.035,"sine",!1,!0,0,o*8.12),r>=3&&this.beat%4===3&&this.play(o*3,.12,.045,"sawtooth",!1,!0),this.beat++}this.ambience<=0&&(this.ambience=n?1.4:3,this.play(60+Math.random()*30,.7,Math.min(.11,.018+i*3e-4),"sawtooth",!1,!1,Math.random()-.5,45),this.beat%3===0&&this.play(380,.9,.02,"sine",!1,!1,.6,620),n&&t.actors.some(r=>r.state==="PANIC"||r.state==="FLEE")&&this.play(500,.25,.027,"triangle",!1,!1,Math.random()-.5,850))}reset(){this.timer=0,this.beat=0,this.ambience=0}async dispose(){this.context&&await this.context.close(),this.context=null,this.master=null,this.music=null,this.sfx=null}}const a0=new Set(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);class o0{keys=new Set;pressed=new Set;consumed=[];mouse={x:0,y:0,dx:0,dy:0,lmb:!1,rmb:!1,wheel:0};enabled=!1;attach(e){const t=h=>{a0.has(h.code)&&h.preventDefault(),this.keys.has(h.code)||(this.pressed.add(h.code),this.keys.add(h.code))},n=h=>{this.keys.delete(h.code)},i=()=>this.keys.clear(),r=h=>{this.mouse.dx+=h.movementX??0,this.mouse.dy+=h.movementY??0,this.mouse.x=h.clientX,this.mouse.y=h.clientY},a=h=>{h.button===0&&(this.mouse.lmb=!0),h.button===2&&(this.mouse.rmb=!0)},o=h=>{h.button===0&&(this.mouse.lmb=!1),h.button===2&&(this.mouse.rmb=!1)},l=h=>{this.mouse.wheel+=h.deltaY},c=h=>h.preventDefault();window.addEventListener("keydown",t),window.addEventListener("keyup",n),window.addEventListener("blur",i),document.addEventListener("mousemove",r),document.addEventListener("mousedown",a),document.addEventListener("mouseup",o),document.addEventListener("wheel",l,{passive:!0}),window.addEventListener("contextmenu",c),this.enabled=!0}setEnabled(e){this.enabled=e,e||this.keys.clear()}isDown(e){return this.enabled&&this.keys.has(e)}wasPressed(e){return this.pressed.has(e)}consume(e){return this.pressed.has(e)?(this.pressed.delete(e),!0):!1}clearFrame(){this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0,this.mouse.wheel=0,this.consumed.length=0}getMouseDx(){return this.mouse.dx}getMouseDy(){return this.mouse.dy}isLmb(){return this.mouse.lmb}isRmb(){return this.mouse.rmb}getWheel(){return this.mouse.wheel}cursor(){return{x:this.mouse.x,y:this.mouse.y}}moveVec(){let e=0,t=0;this.isDown("KeyW")&&(t+=1),this.isDown("KeyS")&&(t-=1),this.isDown("KeyA")&&(e-=1),this.isDown("KeyD")&&(e+=1);const n=Math.sqrt(e*e+t*t);return n>0&&(e/=n,t/=n),{x:e,z:t}}}const bl="dead-parade-settings-v1",Al={master:.85,music:.65,sfx:.9,sensitivity:1,shadows:"medium",hordeQuality:"high",fullscreen:!1};class l0{data={...Al};constructor(){try{const e=localStorage.getItem(bl);if(e){const t=JSON.parse(e);t&&typeof t=="object"&&"master"in t&&(this.data={...Al,...t})}}catch{}}save(){try{localStorage.setItem(bl,JSON.stringify(this.data))}catch{}}get shadowsMapSize(){return typeof this.data.shadows=="boolean"?this.data.shadows?1024:0:this.data.shadows==="high"?2048:this.data.shadows==="medium"?1024:0}}const Js=document.querySelector("#gameCanvas"),Bs={x:0,z:0},hn=new Jm(Js),Lt=new o0;Lt.attach(Js);const dn=new l0,Zn=new r0;let $t="MENU",lc=!1,Nt=null,ze=null;function c0(){return ze?ze.getModifiers():Zi()}function h0(s=!1){lc=s;const e=c0();ze&&(e.startMutation=ze.startingMutation),Nt=new t0(t=>hn.zone(t),s),Nt.reset(e),$t="PLAYING",Lt.setEnabled(!0),ze?.show("PLAYING"),Zn.reset(),Zn.unlock().then(()=>Zn.configure(dn.data))}function d0(){$t="MENU",Nt=null,ze?.show("MAIN_MENU")}function u0(s){Nt?.chooseUpgrade(s),Lt.clearFrame(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),ze?.show("PLAYING")}ze=new s0({start:(s=!1)=>h0(s),menu:d0,loadout:()=>{$t="MENU",ze.show("LOADOUT")},resume:()=>ze.show("PLAYING"),pause:()=>ze.show("PAUSED"),settingsChanged:()=>{const s=ze.settings;dn.data={...dn.data,...s},dn.save(),Zn.configure({master:s.master,music:s.music,sfx:s.sfx}),hn.setQuality(s.shadows,s.quality)},previewItem:s=>hn.previewItem(s)});Zn.configure({master:dn.data.master,music:dn.data.music,sfx:dn.data.sfx});hn.setQuality(dn.data.shadows!=="low",dn.data.hordeQuality);hn.zone(0);ze.show("MAIN_MENU");function f0(){$t==="PLAYING"&&ze&&ze.screen==="PLAYING"&&ze.show("PAUSED"),document.pointerLockElement&&document.exitPointerLock()}window.addEventListener("keydown",s=>{if(ze?.screen==="LEVEL_UP"){if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.code)){s.preventDefault();const t=Array.from(document.querySelectorAll("#luCards button")),n=t.indexOf(document.activeElement),i=s.code==="ArrowUp"||s.code==="ArrowLeft"?-1:1;t[(Math.max(0,n)+i+t.length)%t.length]?.focus();return}const e=/^(?:Digit|Numpad)([123])$/.exec(s.code);e&&(s.preventDefault(),s.repeat||document.querySelectorAll("#luCards button")[Number(e[1])-1]?.click());return}s.code==="Tab"&&(s.preventDefault(),$t==="PLAYING"&&ze?.toggleBuild()),s.code==="Escape"&&$t==="PLAYING"&&(ze?.screen==="PLAYING"?ze.show("PAUSED"):ze?.screen==="PAUSED"?ze.show("PLAYING"):(ze?.screen==="SETTINGS"||ze?.screen==="HOWTO")&&ze.show("PAUSED")),!($t!=="PLAYING"||!Nt||ze?.screen!=="PLAYING")&&(s.code==="KeyQ"&&Nt.snapshot.pendingLevel===!1&&(mt.surge=!0),s.code==="KeyE"&&(mt.ability=!0),s.code==="Space"&&(mt.dash=!0),s.code==="Digit1"&&(mt.select=1,ze.selectAbility(1)),s.code==="Digit2"&&(mt.select=2,ze.selectAbility(2)),s.code==="Digit3"&&(mt.select=3,ze.selectAbility(3)),s.code==="Digit4"&&(mt.select=4,ze.selectAbility(4)))});const mt={x:0,z:0,yaw:0,sprint:!1,dash:!1,surge:!1,ability:!1,select:0};function p0(){const s=Lt.moveVec();mt.x=s.x,mt.z=s.z}window.addEventListener("keyup",s=>{s.code});Js.addEventListener("mousedown",()=>{$t==="PLAYING"&&ze?.screen==="PLAYING"&&Js.requestPointerLock()});window.addEventListener("blur",()=>{$t==="PLAYING"&&f0()});window.addEventListener("resize",()=>hn.resize());let wl=performance.now();function cc(s){requestAnimationFrame(cc);const e=Math.min(.05,Math.max(0,(s-wl)/1e3));if(wl=s,$t==="MENU"){hn.update(void 0,e,ze?.screen==="LOADOUT"?"loadout":"menu"),Lt.clearFrame();return}if(!Nt)return;const t=Nt.snapshot,n=ze?.screen==="PLAYING";if(n?(g0(),p0(),mt.yaw=hn.cameraRig.yaw,Nt.update(e,mt),mt.dash=mt.surge=mt.ability=!1,mt.select=0,t.pendingLevel&&m0()):Nt.update(0,mt),hn.update(t,e,"playing"),ze){ze.update(t);for(const i of t.effects)Zn.effect(i,t);if(t.effects.length=0,t.notices.length){for(const i of t.notices)ze.toast(i);t.notices.length=0}if(t.won&&!lc){$t="MENU",ze.end(t,!0),Nt=null,Lt.setEnabled(!1);return}if(t.lost){$t="MENU",ze.end(t,!1),Nt=null,Lt.setEnabled(!1);return}}Lt.clearFrame(),Zn.update(e,t,n)}function m0(){const s=new Map;for(const t of Nt.snapshot.upgrades)s.set(t,(s.get(t)??0)+1);const e=js.filter(t=>(s.get(t.id)??0)<t.maxRank);if(!e.length){Nt.snapshot.pendingLevel=!1;return}for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}ze.levelUp(e.slice(0,3),u0),Lt.clearFrame()}function g0(){hn.cameraRig.rotate(Lt.getMouseDx(),Lt.getMouseDy(),dn.data.sensitivity);const s=Lt.moveVec();Bs.x=s.x,Bs.z=s.z,mt.x=Bs.x,mt.z=Bs.z,mt.sprint=Lt.isDown("ShiftLeft")||Lt.isDown("ShiftRight")}Lt.setEnabled(!0);requestAnimationFrame(cc);
