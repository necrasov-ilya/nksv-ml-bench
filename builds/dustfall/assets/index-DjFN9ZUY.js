(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const dc="181",fu=0,Xc=1,pu=2,ah=1,oh=2,si=3,wi=0,Qt=1,bn=2,ci=0,_s=1,po=2,qc=3,$c=4,mu=5,Bi=100,xu=101,gu=102,vu=103,_u=104,Mu=200,yu=201,bu=202,Su=203,mo=204,xo=205,Eu=206,Tu=207,Au=208,wu=209,Ru=210,Cu=211,Pu=212,Lu=213,Iu=214,go=0,vo=1,_o=2,Ss=3,Mo=4,yo=5,bo=6,So=7,ch=0,Du=1,Uu=2,Ai=0,Nu=1,Fu=2,Ou=3,lh=4,zu=5,Bu=6,ku=7,hh=300,Es=301,Ts=302,Eo=303,To=304,da=306,ia=1e3,oi=1001,Ao=1002,gn=1003,Vu=1004,mr=1005,En=1006,Aa=1007,Hi=1008,Yn=1009,uh=1010,dh=1011,Qs=1012,fc=1013,Xi=1014,Wn=1015,Ls=1016,pc=1017,mc=1018,er=1020,fh=35902,ph=35899,mh=1021,xh=1022,On=1023,tr=1026,nr=1027,xc=1028,gc=1029,vc=1030,_c=1031,Mc=1033,Xr=33776,qr=33777,$r=33778,Yr=33779,wo=35840,Ro=35841,Co=35842,Po=35843,Lo=36196,Io=37492,Do=37496,Uo=37808,No=37809,Fo=37810,Oo=37811,zo=37812,Bo=37813,ko=37814,Vo=37815,Ho=37816,Go=37817,Wo=37818,Xo=37819,qo=37820,$o=37821,Yo=36492,Ko=36494,Jo=36495,Zo=36283,jo=36284,Qo=36285,ec=36286,Hu=3200,Gu=3201,gh=0,Wu=1,bi="",nn="srgb",As="srgb-linear",sa="linear",ft="srgb",ji=7680,Yc=519,Xu=512,qu=513,$u=514,vh=515,Yu=516,Ku=517,Ju=518,Zu=519,Kc=35044,Jc="300 es",Xn=2e3,ra=2001;function _h(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){const i=aa("canvas");return i.style.display="block",i}const Zc={};function jc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ge(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Tt(...i){const e="THREE."+i.shift();console.error(e,...i)}function ir(...i){const e=i.join(" ");e in Zc||(Zc[e]=!0,Ge(...i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const $s=Math.PI/180,sr=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function yc(i,e){return(i%e+e)%e}function e0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function t0(i,e,t){return i!==e?(t-i)/(e-i):0}function Ys(i,e,t){return(1-t)*i+t*e}function n0(i,e,t,n){return Ys(i,e,1-Math.exp(-t*n))}function i0(i,e=1){return e-Math.abs(yc(i,e*2)-e)}function s0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function r0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function a0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function o0(i,e){return i+Math.random()*(e-i)}function c0(i){return i*(.5-Math.random())}function l0(i){i!==void 0&&(Qc=i);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function h0(i){return i*$s}function u0(i){return i*sr}function d0(i){return(i&i-1)===0&&i!==0}function f0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function p0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function m0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qn={DEG2RAD:$s,RAD2DEG:sr,generateUUID:Ki,clamp:Je,euclideanModulo:yc,mapLinear:e0,inverseLerp:t0,lerp:Ys,damp:n0,pingpong:i0,smoothstep:s0,smootherstep:r0,randInt:a0,randFloat:o0,randFloatSpread:c0,seededRandom:l0,degToRad:h0,radToDeg:u0,isPowerOfTwo:d0,ceilPowerOfTwo:f0,floorPowerOfTwo:p0,setQuaternionFromProperEuler:m0,normalize:Kt,denormalize:ms};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,o=Math.sin(o*v)/y,c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+_*o;const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new D,el=new Ri;class $e{constructor(e,t,n,s,r,a,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],S=s[7],L=s[2],M=s[5],w=s[8];return r[0]=a*_+o*v+c*L,r[3]=a*m+o*y+c*M,r[6]=a*p+o*S+c*w,r[1]=l*_+u*v+h*L,r[4]=l*m+u*y+h*M,r[7]=l*p+u*S+h*w,r[2]=d*_+f*v+g*L,r[5]=d*m+f*y+g*M,r[8]=d*p+f*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ra.makeScale(e,t)),this}rotate(e){return this.premultiply(Ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new $e,tl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x0(){const i={enabled:!0,workingColorSpace:As,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[As]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const ot=x0();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qi;class g0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qi===void 0&&(Qi=aa("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=aa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0;class bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ca(s[a].image)):r.push(Ca(s[a]))}else r=Ca(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?g0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let _0=0;const Pa=new D;class qt extends Is{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,n=oi,s=oi,r=En,a=Hi,o=On,c=Yn,l=qt.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ki(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pa).x}get height(){return this.source.getSize(Pa).y}get depth(){return this.source.getSize(Pa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=hh;qt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(f+1)/2,L=(p+1)/2,M=(u+d)/4,w=(h+_)/4,P=(g+m)/4;return y>S&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=w/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=M/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M0 extends Is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new qt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends M0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mh extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y0 extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),gr.subVectors(this.max,Ns),es.subVectors(e.a,Ns),ts.subVectors(e.b,Ns),ns.subVectors(e.c,Ns),fi.subVectors(ts,es),pi.subVectors(ns,ts),Ii.subVectors(es,ns);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!La(t,es,ts,ns,gr)||(t=[1,0,0,0,1,0,0,0,1],!La(t,es,ts,ns,gr))?!1:(vr.crossVectors(fi,pi),t=[vr.x,vr.y,vr.z],La(t,es,ts,ns,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,xr=new Ji,es=new D,ts=new D,ns=new D,fi=new D,pi=new D,Ii=new D,Ns=new D,gr=new D,vr=new D,Di=new D;function La(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const b0=new Ji,Fs=new D,Ia=new D;class hr{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):b0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Ia)),this.expandByPoint(Fs.copy(e.center).sub(Ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new D,Da=new D,_r=new D,mi=new D,Ua=new D,Mr=new D,Na=new D;class yh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Da.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Da);const r=e.distanceTo(t)*.5,a=-this.direction.dot(_r),o=mi.dot(this.direction),c=-mi.dot(_r),l=mi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Da).addScaledVector(_r,d),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Ua.subVectors(t,e),Mr.subVectors(n,e),Na.crossVectors(Ua,Mr);let a=this.direction.dot(Na),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(Mr.crossVectors(mi,Mr));if(c<0)return null;const l=o*this.direction.dot(Ua.cross(mi));if(l<0||c+l>a)return null;const u=-o*mi.dot(Na);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,E0)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),xi.crossVectors(n,ln),xi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),xi.crossVectors(n,ln)),xi.normalize(),yr.crossVectors(ln,xi),s[0]=xi.x,s[4]=yr.x,s[8]=ln.x,s[1]=xi.y,s[5]=yr.y,s[9]=ln.y,s[2]=xi.z,s[6]=yr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],S=n[11],L=n[15],M=s[0],w=s[4],P=s[8],E=s[12],x=s[1],I=s[5],B=s[9],F=s[13],W=s[2],Y=s[6],Q=s[10],ae=s[14],j=s[3],pe=s[7],me=s[11],Re=s[15];return r[0]=a*M+o*x+c*W+l*j,r[4]=a*w+o*I+c*Y+l*pe,r[8]=a*P+o*B+c*Q+l*me,r[12]=a*E+o*F+c*ae+l*Re,r[1]=u*M+h*x+d*W+f*j,r[5]=u*w+h*I+d*Y+f*pe,r[9]=u*P+h*B+d*Q+f*me,r[13]=u*E+h*F+d*ae+f*Re,r[2]=g*M+_*x+m*W+p*j,r[6]=g*w+_*I+m*Y+p*pe,r[10]=g*P+_*B+m*Q+p*me,r[14]=g*E+_*F+m*ae+p*Re,r[3]=v*M+y*x+S*W+L*j,r[7]=v*w+y*I+S*Y+L*pe,r[11]=v*P+y*B+S*Q+L*me,r[15]=v*E+y*F+S*ae+L*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,y=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,S=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,L=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,M=t*v+n*y+s*S+r*L;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=v*w,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*p+n*c*p)*w,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*w,e[4]=y*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*w,e[8]=S*w,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=L*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,v=c*l,y=c*u,S=c*h,L=n.x,M=n.y,w=n.z;return s[0]=(1-(_+p))*L,s[1]=(f+S)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(f-S)*M,s[5]=(1-(d+p))*M,s[6]=(m+v)*M,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const a=is.set(s[4],s[5],s[6]).length(),o=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const l=1/r,u=1/a,h=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Xn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Xn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ra)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Xn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Xn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===ra)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const is=new D,Rn=new lt,S0=new D(0,0,0),E0=new D(1,1,1),xi=new D,yr=new D,ln=new D,il=new lt,sl=new Ri;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const rl=new D,ss=new Ri,ei=new lt,br=new D,Os=new D,A0=new D,w0=new Ri,al=new D(1,0,0),ol=new D(0,1,0),cl=new D(0,0,1),ll={type:"added"},R0={type:"removed"},rs={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Ot extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new D,t=new zn,n=new Ri,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new $e}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Os,br,this.up):ei.lookAt(br,Os,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(ei),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),rs.child=e,this.dispatchEvent(rs),rs.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,w0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new D,ti=new D,Oa=new D,ni=new D,as=new D,os=new D,hl=new D,za=new D,Ba=new D,ka=new D,Va=new mt,Ha=new mt,Ga=new mt;class Dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ti.subVectors(n,t),Oa.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ti),c=Cn.dot(Oa),l=ti.dot(ti),u=ti.dot(Oa),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Va.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),Va.fromBufferAttribute(e,t),Ha.fromBufferAttribute(e,n),Ga.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Va,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ti.subVectors(e,t),Cn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;as.subVectors(s,n),os.subVectors(r,n),za.subVectors(e,n);const c=as.dot(za),l=os.dot(za);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,s);const u=as.dot(Ba),h=os.dot(Ba);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(as,a);ka.subVectors(e,r);const f=as.dot(ka),g=os.dot(ka);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(os,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return hl.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(hl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=yc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wa(a,r,e+1/3),this.g=Wa(a,r,e),this.b=Wa(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return ot.workingToColorSpace(Vt.copy(this),e),Math.round(Je(Vt.r*255,0,255))*65536+Math.round(Je(Vt.g*255,0,255))*256+Math.round(Je(Vt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=nn){ot.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Sr);const n=Ys(gi.h,Sr.h,t),s=Ys(gi.s,Sr.s,t),r=Ys(gi.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new We;We.NAMES=bh;let C0=0;class ur extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=_s,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=xo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tn extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,Er=new ve;let P0=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:P0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ms(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}}class Sh extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Eh extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let L0=0;const Mn=new lt,Xa=new Ot,cs=new D,hn=new Ji,zs=new Ji,Nt=new D;class It extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_h(e)?Eh:Sh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return Xa.lookAt(e),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,zs.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,zs.max),hn.expandByPoint(Nt)):(hn.expandByPoint(zs.min),hn.expandByPoint(zs.max))}hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(e,l),Nt.add(cs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const l=new D,u=new D,h=new D,d=new ve,f=new ve,g=new ve,_=new D,m=new D;function p(P,E,x){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,x),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(I),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[P].add(_),o[E].add(_),o[x].add(_),c[P].add(m),c[E].add(m),c[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,E=v.length;P<E;++P){const x=v[P],I=x.start,B=x.count;for(let F=I,W=I+B;F<W;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const y=new D,S=new D,L=new D,M=new D;function w(P){L.fromBufferAttribute(s,P),M.copy(L);const E=o[P];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(M,E);const I=S.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,E=v.length;P<E;++P){const x=v[P],I=x.start,B=x.count;for(let F=I,W=I+B;F<W;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new rn(d,u,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new lt,Ui=new yh,Tr=new hr,dl=new D,Ar=new D,wr=new D,Rr=new D,qa=new D,Cr=new D,fl=new D,Pr=new D;class pt extends Ot{constructor(e=new It,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(qa.fromBufferAttribute(h,e),a?Cr.addScaledVector(qa,u):Cr.addScaledVector(qa.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(Tr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Tr,dl)===null||Ui.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,L=y;S<L;S+=3){const M=o.getX(S),w=o.getX(S+1),P=o.getX(S+2);s=Lr(this,p,e,n,l,u,h,M,w,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);s=Lr(this,a,e,n,l,u,h,v,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=v,L=y;S<L;S+=3){const M=S,w=S+1,P=S+2;s=Lr(this,p,e,n,l,u,h,M,w,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,S=m+2;s=Lr(this,a,e,n,l,u,h,v,y,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function I0(i,e,t,n,s,r,a,o){let c;if(e.side===Qt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===wi,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Ar),i.getVertexPosition(c,wr),i.getVertexPosition(l,Rr);const u=I0(i,e,t,n,Ar,wr,Rr,fl);if(u){const h=new D;Dn.getBarycoord(fl,Ar,wr,Rr,h),s&&(u.uv=Dn.getInterpolatedAttribute(s,o,c,l,h,new ve)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,o,c,l,h,new ve)),a&&(u.normal=Dn.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};Dn.getNormal(Ar,wr,Rr,d.normal),u.face=d,u.barycoord=h}return u}class Gt extends It{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(u,3)),this.setAttribute("uv",new tt(h,2));function g(_,m,p,v,y,S,L,M,w,P,E){const x=S/w,I=L/P,B=S/2,F=L/2,W=M/2,Y=w+1,Q=P+1;let ae=0,j=0;const pe=new D;for(let me=0;me<Q;me++){const Re=me*I-F;for(let Xe=0;Xe<Y;Xe++){const Ke=Xe*x-B;pe[_]=Ke*v,pe[m]=Re*y,pe[p]=W,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=M>0?1:-1,u.push(pe.x,pe.y,pe.z),h.push(Xe/w),h.push(1-me/P),ae+=1}}for(let me=0;me<P;me++)for(let Re=0;Re<w;Re++){const Xe=d+Re+Y*me,Ke=d+Re+Y*(me+1),nt=d+(Re+1)+Y*(me+1),st=d+(Re+1)+Y*me;c.push(Xe,Ke,st),c.push(Ke,nt,st),j+=6}o.addGroup(f,j,E),f+=j,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function D0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const U0={clone:ws,merge:Jt};var N0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ah extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new D,pl=new ve,ml=new ve;class fn extends Ah{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ls=-90,hs=1;class O0 extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(ls,hs,e,t);s.layers=this.layers,this.add(s);const r=new fn(ls,hs,e,t);r.layers=this.layers,this.add(r);const a=new fn(ls,hs,e,t);a.layers=this.layers,this.add(a);const o=new fn(ls,hs,e,t);o.layers=this.layers,this.add(o);const c=new fn(ls,hs,e,t);c.layers=this.layers,this.add(c);const l=new fn(ls,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wh extends qt{constructor(e=[],t=Es,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:ci});r.uniforms.tEquirect.value=t;const a=new pt(s,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=En),new O0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class gt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B0={type:"move"};class $a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new We(e),this.density=t}clone(){return new fa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class k0 extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Rh extends qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=gn,u=gn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl extends rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new lt,gl=new lt,Ir=[],vl=new Ji,V0=new lt,Bs=new pt,ks=new hr;class H0 extends pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,V0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),vl.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,us),ks.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union(ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),e.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),gl.multiplyMatrices(n,us),Bs.matrixWorld=gl,Bs.raycast(e,Ir);for(let a=0,o=Ir.length;a<o;a++){const c=Ir[a];c.instanceId=r,c.object=this,t.push(c)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rh(new Float32Array(s*this.count),s,this.count,xc,Wn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ya=new D,G0=new D,W0=new $e;class zi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ya.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ya),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W0.getNormalMatrix(e),s=this.coplanarPoint(Ya).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new hr,X0=new ve(.5,.5),Dr=new D;class Ec{constructor(e=new zi,t=new zi,n=new zi,s=new zi,r=new zi,a=new zi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],y=r[13],S=r[14],L=r[15];if(s[0].setComponents(l-a,f-u,p-g,L-v).normalize(),s[1].setComponents(l+a,f+u,p+g,L+v).normalize(),s[2].setComponents(l+o,f+h,p+_,L+y).normalize(),s[3].setComponents(l-o,f-h,p-_,L-y).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,f-d,p-m,L-S).normalize();else if(s[4].setComponents(l-c,f-d,p-m,L-S).normalize(),t===Xn)s[5].setComponents(l+c,f+d,p+m,L+S).normalize();else if(t===ra)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);const t=X0.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ka extends qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ch extends qt{constructor(e,t,n=Xi,s,r,a,o=gn,c=gn,l,u=tr,h=1){if(u!==tr&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ph extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tc extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new D,u=new ve;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class mn extends It{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function v(){const S=new D,L=new D;let M=0;const w=(t-e)/n;for(let P=0;P<=r;P++){const E=[],x=P/r,I=x*(t-e)+e;for(let B=0;B<=s;B++){const F=B/s,W=F*c+o,Y=Math.sin(W),Q=Math.cos(W);L.x=I*Y,L.y=-x*n+m,L.z=I*Q,h.push(L.x,L.y,L.z),S.set(Y,w,Q).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-x),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){const x=_[E][P],I=_[E+1][P],B=_[E+1][P+1],F=_[E][P+1];(e>0||E!==0)&&(u.push(x,I,F),M+=3),(t>0||E!==r-1)&&(u.push(I,B,F),M+=3)}l.addGroup(p,M,0),p+=M}function y(S){const L=g,M=new ve,w=new D;let P=0;const E=S===!0?e:t,x=S===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const I=g;for(let B=0;B<=s;B++){const W=B/s*c+o,Y=Math.cos(W),Q=Math.sin(W);w.x=E*Q,w.y=m*x,w.z=E*Y,h.push(w.x,w.y,w.z),d.push(0,x,0),M.x=Y*.5+.5,M.y=Q*.5*x+.5,f.push(M.x,M.y),g++}for(let B=0;B<s;B++){const F=L+B,W=I+B;S===!0?u.push(W,W+1,F):u.push(W+1,W,F),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ac extends mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ac(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new D,S=new D,L=new D;for(let M=0;M<t.length;M+=3)f(t[M+0],y),f(t[M+1],S),f(t[M+2],L),c(y,S,L,v)}function c(v,y,S,L){const M=L+1,w=[];for(let P=0;P<=M;P++){w[P]=[];const E=v.clone().lerp(S,P/M),x=y.clone().lerp(S,P/M),I=M-P;for(let B=0;B<=I;B++)B===0&&P===M?w[P][B]=E:w[P][B]=E.clone().lerp(x,B/I)}for(let P=0;P<M;P++)for(let E=0;E<2*(M-P)-1;E++){const x=Math.floor(E/2);E%2===0?(d(w[P][x+1]),d(w[P+1][x]),d(w[P][x])):(d(w[P][x+1]),d(w[P+1][x+1]),d(w[P+1][x]))}}function l(v){const y=new D;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(v),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function u(){const v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const S=m(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;a.push(S,1-L)}g(),h()}function h(){for(let v=0;v<a.length;v+=6){const y=a[v+0],S=a[v+2],L=a[v+4],M=Math.max(y,S,L),w=Math.min(y,S,L);M>.9&&w<.1&&(y<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),L<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const S=v*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function g(){const v=new D,y=new D,S=new D,L=new D,M=new ve,w=new ve,P=new ve;for(let E=0,x=0;E<r.length;E+=9,x+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),M.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),P.set(a[x+4],a[x+5]),L.copy(v).add(y).add(S).divideScalar(3);const I=m(L);_(M,x+0,v,I),_(w,x+2,y,I),_(P,x+4,S,I)}}function _(v,y,S,L){L<0&&v.x===1&&(a[y]=v.x-1),S.x===0&&S.z===0&&(a[y]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.vertices,e.indices,e.radius,e.details)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ve:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,c=new lt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class wc extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ve){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class q0 extends wc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Ur=new D,Ja=new Rc,Za=new Rc,ja=new Rc;class oa extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Ur.subVectors(s[0],s[1]).add(s[0]),l=Ur);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ja.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,_,m),Za.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,_,m),ja.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ja.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Za.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ja.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ja.calc(c),Za.calc(c),ja.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _l(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function $0(i,e){const t=1-i;return t*t*e}function Y0(i,e){return 2*(1-i)*i*e}function K0(i,e){return i*i*e}function Ks(i,e,t,n){return $0(i,e)+Y0(i,t)+K0(i,n)}function J0(i,e){const t=1-i;return t*t*t*e}function Z0(i,e){const t=1-i;return 3*t*t*i*e}function j0(i,e){return 3*(1-i)*i*i*e}function Q0(i,e){return i*i*i*e}function Js(i,e,t,n,s){return J0(i,e)+Z0(i,t)+j0(i,n)+Q0(i,s)}class Lh extends Jn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ed extends Jn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(e,s.x,r.x,a.x,o.x),Js(e,s.y,r.y,a.y,o.y),Js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ih extends Jn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class td extends Jn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dh extends Jn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,s.x,r.x,a.x),Ks(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends Jn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(e,s.x,r.x,a.x),Ks(e,s.y,r.y,a.y),Ks(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nh extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(_l(o,c.x,l.x,u.x,h.x),_l(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ve().fromArray(s))}return this}}var ca=Object.freeze({__proto__:null,ArcCurve:q0,CatmullRomCurve3:oa,CubicBezierCurve:Lh,CubicBezierCurve3:ed,EllipseCurve:wc,LineCurve:Ih,LineCurve3:td,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:Uh,SplineCurve:Nh});class nd extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ca[s.type]().fromJSON(s))}return this}}class Ml extends nd{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Ih(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Dh(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Lh(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Nh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new wc(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cc extends Ml{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ml().fromJSON(s))}return this}}function id(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Fh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=cd(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return rr(r,a,t,o,c,l,0),a}function Fh(i,e,t,n,s){let r;if(s===_d(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=yl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=yl(a/n|0,i[a],i[a+1],r);return r&&Rs(r,r.next)&&(or(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rs(t,t.next)||At(t.prev,t,t.next)===0)){if(or(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&fd(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?rd(i,n,s,r):sd(i)){e.push(c.i,i.i,l.i),or(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=ad($i(i),e),rr(i,e,t,n,s,r,2)):a===2&&od(i,e,t,n,s,r):rr($i(i),e,t,n,s,r,1);break}}}function sd(i){const e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),h=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ws(s,o,r,c,a,l,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rd(i,e,t,n){const s=i.prev,r=i,a=i.next;if(At(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(u,h,d),_=Math.max(o,c,l),m=Math.max(u,h,d),p=tc(f,g,e,t,n),v=tc(_,m,e,t,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=p&&S&&S.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ws(o,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ws(o,u,c,h,l,d,S.x,S.y)&&At(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Ws(o,u,c,h,l,d,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Ws(o,u,c,h,l,d,S.x,S.y)&&At(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function ad(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Rs(n,s)&&zh(n,t,t.next,s)&&ar(n,s)&&ar(s,n)&&(e.push(n.i,t.i,s.i),or(t),or(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function od(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xd(a,o)){let c=Bh(a,o);a=$i(a,a.next),c=$i(c,c.next),rr(a,e,t,n,s,r,0),rr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function cd(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Fh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(md(l))}s.sort(ld);for(let r=0;r<s.length;r++)t=hd(s[r],t);return t}function ld(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function hd(i,e){const t=ud(i,e);if(!t)return e;const n=Bh(t,i);return $i(n,n.next),$i(t,t.next)}function ud(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Rs(i,t))return t;do{if(Rs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Oh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);ar(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&dd(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function dd(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function fd(i,e,t,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,pd(s)}function pd(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function md(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Oh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ws(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Oh(i,e,t,n,s,r,a,o)}function xd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gd(i,e)&&(ar(i,e)&&ar(e,i)&&vd(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Rs(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rs(i,e){return i.x===e.x&&i.y===e.y}function zh(i,e,t,n){const s=Fr(At(i,e,t)),r=Fr(At(i,e,n)),a=Fr(At(t,n,i)),o=Fr(At(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fr(i){return i>0?1:i<0?-1:0}function gd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&zh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ar(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function vd(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bh(i,e){const t=nc(i.i,i.x,i.y),n=nc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yl(i,e,t,n){const s=nc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _d(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Md{static triangulate(e,t,n=2){return id(e,t,n)}}class gs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return gs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];bl(e),Sl(n,e);let a=e.length;t.forEach(bl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Sl(n,t[c]);const o=Md.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function bl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ma extends It{constructor(e=new Cc([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:yd;let y,S=!1,L,M,w,P;p&&(y=p.getSpacedPoints(u),S=!0,d=!1,L=p.computeFrenetFrames(u,!1),M=new D,w=new D,P=new D),d||(m=0,f=0,g=0,_=0);const E=o.extractPoints(l);let x=E.shape;const I=E.holes;if(!gs.isClockWise(x)){x=x.reverse();for(let re=0,C=I.length;re<C;re++){const oe=I[re];gs.isClockWise(oe)&&(I[re]=oe.reverse())}}function F(re){const oe=10000000000000001e-36;let he=re[0];for(let de=1;de<=re.length;de++){const le=de%re.length,we=re[le],Me=we.x-he.x,Ee=we.y-he.y,R=Me*Me+Ee*Ee,b=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(he.x),Math.abs(he.y)),G=oe*b*b;if(R<=G){re.splice(le,1),de--;continue}he=we}}F(x),I.forEach(F);const W=I.length,Y=x;for(let re=0;re<W;re++){const C=I[re];x=x.concat(C)}function Q(re,C,oe){return C||Tt("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(C,oe)}const ae=x.length;function j(re,C,oe){let he,de,le;const we=re.x-C.x,Me=re.y-C.y,Ee=oe.x-re.x,R=oe.y-re.y,b=we*we+Me*Me,G=we*R-Me*Ee;if(Math.abs(G)>Number.EPSILON){const Z=Math.sqrt(b),se=Math.sqrt(Ee*Ee+R*R),K=C.x-Me/Z,Ne=C.y+we/Z,T=oe.x-R/se,U=oe.y+Ee/se,N=((T-K)*R-(U-Ne)*Ee)/(we*R-Me*Ee);he=K+we*N-re.x,de=Ne+Me*N-re.y;const z=he*he+de*de;if(z<=2)return new ve(he,de);le=Math.sqrt(z/2)}else{let Z=!1;we>Number.EPSILON?Ee>Number.EPSILON&&(Z=!0):we<-Number.EPSILON?Ee<-Number.EPSILON&&(Z=!0):Math.sign(Me)===Math.sign(R)&&(Z=!0),Z?(he=-Me,de=we,le=Math.sqrt(b)):(he=we,de=Me,le=Math.sqrt(b/2))}return new ve(he/le,de/le)}const pe=[];for(let re=0,C=Y.length,oe=C-1,he=re+1;re<C;re++,oe++,he++)oe===C&&(oe=0),he===C&&(he=0),pe[re]=j(Y[re],Y[oe],Y[he]);const me=[];let Re,Xe=pe.concat();for(let re=0,C=W;re<C;re++){const oe=I[re];Re=[];for(let he=0,de=oe.length,le=de-1,we=he+1;he<de;he++,le++,we++)le===de&&(le=0),we===de&&(we=0),Re[he]=j(oe[he],oe[le],oe[we]);me.push(Re),Xe=Xe.concat(Re)}let Ke;if(m===0)Ke=gs.triangulateShape(Y,I);else{const re=[],C=[];for(let oe=0;oe<m;oe++){const he=oe/m,de=f*Math.cos(he*Math.PI/2),le=g*Math.sin(he*Math.PI/2)+_;for(let we=0,Me=Y.length;we<Me;we++){const Ee=Q(Y[we],pe[we],le);Le(Ee.x,Ee.y,-de),he===0&&re.push(Ee)}for(let we=0,Me=W;we<Me;we++){const Ee=I[we];Re=me[we];const R=[];for(let b=0,G=Ee.length;b<G;b++){const Z=Q(Ee[b],Re[b],le);Le(Z.x,Z.y,-de),he===0&&R.push(Z)}he===0&&C.push(R)}}Ke=gs.triangulateShape(re,C)}const nt=Ke.length,st=g+_;for(let re=0;re<ae;re++){const C=d?Q(x[re],Xe[re],st):x[re];S?(w.copy(L.normals[0]).multiplyScalar(C.x),M.copy(L.binormals[0]).multiplyScalar(C.y),P.copy(y[0]).add(w).add(M),Le(P.x,P.y,P.z)):Le(C.x,C.y,0)}for(let re=1;re<=u;re++)for(let C=0;C<ae;C++){const oe=d?Q(x[C],Xe[C],st):x[C];S?(w.copy(L.normals[re]).multiplyScalar(oe.x),M.copy(L.binormals[re]).multiplyScalar(oe.y),P.copy(y[re]).add(w).add(M),Le(P.x,P.y,P.z)):Le(oe.x,oe.y,h/u*re)}for(let re=m-1;re>=0;re--){const C=re/m,oe=f*Math.cos(C*Math.PI/2),he=g*Math.sin(C*Math.PI/2)+_;for(let de=0,le=Y.length;de<le;de++){const we=Q(Y[de],pe[de],he);Le(we.x,we.y,h+oe)}for(let de=0,le=I.length;de<le;de++){const we=I[de];Re=me[de];for(let Me=0,Ee=we.length;Me<Ee;Me++){const R=Q(we[Me],Re[Me],he);S?Le(R.x,R.y+y[u-1].y,y[u-1].x+oe):Le(R.x,R.y,h+oe)}}}ee(),ie();function ee(){const re=s.length/3;if(d){let C=0,oe=ae*C;for(let he=0;he<nt;he++){const de=Ke[he];Ie(de[2]+oe,de[1]+oe,de[0]+oe)}C=u+m*2,oe=ae*C;for(let he=0;he<nt;he++){const de=Ke[he];Ie(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let C=0;C<nt;C++){const oe=Ke[C];Ie(oe[2],oe[1],oe[0])}for(let C=0;C<nt;C++){const oe=Ke[C];Ie(oe[0]+ae*u,oe[1]+ae*u,oe[2]+ae*u)}}n.addGroup(re,s.length/3-re,0)}function ie(){const re=s.length/3;let C=0;be(Y,C),C+=Y.length;for(let oe=0,he=I.length;oe<he;oe++){const de=I[oe];be(de,C),C+=de.length}n.addGroup(re,s.length/3-re,1)}function be(re,C){let oe=re.length;for(;--oe>=0;){const he=oe;let de=oe-1;de<0&&(de=re.length-1);for(let le=0,we=u+m*2;le<we;le++){const Me=ae*le,Ee=ae*(le+1),R=C+he+Me,b=C+de+Me,G=C+de+Ee,Z=C+he+Ee;qe(R,b,G,Z)}}}function Le(re,C,oe){c.push(re),c.push(C),c.push(oe)}function Ie(re,C,oe){rt(re),rt(C),rt(oe);const he=s.length/3,de=v.generateTopUV(n,s,he-3,he-2,he-1);Be(de[0]),Be(de[1]),Be(de[2])}function qe(re,C,oe,he){rt(re),rt(C),rt(he),rt(C),rt(oe),rt(he);const de=s.length/3,le=v.generateSideWallUV(n,s,de-6,de-3,de-2,de-1);Be(le[0]),Be(le[1]),Be(le[3]),Be(le[1]),Be(le[2]),Be(le[3])}function rt(re){s.push(c[re*3+0]),s.push(c[re*3+1]),s.push(c[re*3+2])}function Be(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bd(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ca[s.type]().fromJSON(s)),new ma(n,e.options)}}const yd={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new ve(r,a),new ve(o,c),new ve(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ve(a,1-c),new ve(l,1-h),new ve(d,1-g),new ve(_,1-p)]:[new ve(o,1-c),new ve(u,1-h),new ve(f,1-g),new ve(m,1-p)]}};function bd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class la extends pa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new la(e.radius,e.detail)}}class xa extends It{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/t,h=new D,d=new ve,f=new D,g=new D,_=new D;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*u*s,S=Math.sin(y),L=Math.cos(y);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*S,h.y=e[M].y,h.z=e[M].x*L,a.push(h.x,h.y,h.z),d.x=v/t,d.y=M/(e.length-1),o.push(d.x,d.y);const w=c[3*M+0]*S,P=c[3*M+1],E=c[3*M+0]*L;l.push(w,P,E)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const S=y+v*e.length,L=S,M=S+e.length,w=S+e.length+1,P=S+1;r.push(L,M,P),r.push(w,P,M)}this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.points,e.segments,e.phiStart,e.phiLength)}}class Pc extends pa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pc(e.radius,e.detail)}}class dr extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let y=0;y<l;y++){const S=y*h-r;g.push(S,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const y=v+l*p,S=v+l*(p+1),L=v+1+l*(p+1),M=v+1+l*p;f.push(y,S,M),f.push(S,L,M)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ga extends It{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new D,g=new ve;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,S=v+n+1,L=v+n+2,M=v+1;o.push(y,S,M),o.push(S,L,M)}}this.setIndex(o),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(l,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hi extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){const M=L/t;h.x=-e*Math.cos(s+M*r)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(s+M*r)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(M+S,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],S=u[p][v],L=u[p+1][v],M=u[p+1][v+1];(p!==0||a>0)&&f.push(y,S,M),(p!==n-1||c<Math.PI)&&f.push(S,L,M)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gi extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new tt(o,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class va extends It{constructor(e=new Uh(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new ve;let u=new D;const h=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new tt(h,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);const S=a.normals[y],L=a.binormals[y];for(let M=0;M<=s;M++){const w=M/s*Math.PI*2,P=Math.sin(w),E=-Math.cos(w);c.x=E*S.x+P*L.x,c.y=E*S.y+P*L.y,c.z=E*S.z+P*L.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let S=1;S<=s;S++){const L=(s+1)*(y-1)+(S-1),M=(s+1)*y+(S-1),w=(s+1)*y+S,P=(s+1)*(y-1)+S;g.push(L,M,P),g.push(M,w,P)}}function v(){for(let y=0;y<=t;y++)for(let S=0;S<=s;S++)l.x=y/t,l.y=S/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new va(new ca[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class pn extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sd extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ed extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Td extends Lc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new We(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qa=new lt,El=new D,Tl=new D;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Al=new lt,Vs=new D,eo=new D;class Ad extends kh{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vs),eo.copy(n.position),eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eo),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Al.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al,n.coordinateSystem,n.reversedDepth)}}class Vh extends Lc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hh extends Ah{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wd extends kh{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rd extends Lc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new wd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cd extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Pd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const wl=new lt;class Ic{constructor(e,t,n=0,s=1/0){this.ray=new yh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,n=[]){return ic(e,this,n,t),n.sort(Rl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ic(e[s],this,n,t);return n.sort(Rl),n}}function Rl(i,e){return i.distance-e.distance}function ic(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ic(r[a],e,t,!0)}}function Cl(i,e,t,n){const s=Ld(n);switch(t){case mh:return i*e;case xc:return i*e/s.components*s.byteLength;case gc:return i*e/s.components*s.byteLength;case vc:return i*e*2/s.components*s.byteLength;case _c:return i*e*2/s.components*s.byteLength;case xh:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case Mc:return i*e*4/s.components*s.byteLength;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(i,16)*Math.max(e,8)/4;case wo:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Ko:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zo:case jo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qo:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ld(i){switch(i){case Yn:case uh:return{byteLength:1,components:1};case Qs:case dh:case Ls:return{byteLength:2,components:1};case pc:case mc:return{byteLength:2,components:4};case Xi:case fc:case Wn:return{byteLength:4,components:1};case fh:case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);function Gh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Id(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Dd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ud=`#ifdef USE_ALPHAHASH
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
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Od=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qd=`#ifdef USE_IRIDESCENCE
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
#endif`,$d=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nf=`#define PI 3.141592653589793
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
} // validated`,sf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rf=`vec3 transformedNormal = objectNormal;
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
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",uf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
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
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tf=`uniform bool receiveShadow;
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
#endif`,Af=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
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
#endif`,If=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Df=`
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
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
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Vp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,Jp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,em=`#define NORMAL
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
}`,tm=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,am=`#define TOON
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
}`,om=`uniform float size;
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
}`,cm=`uniform vec3 diffuse;
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
}`,lm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,dm=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Dd,alphahash_pars_fragment:Ud,alphamap_fragment:Nd,alphamap_pars_fragment:Fd,alphatest_fragment:Od,alphatest_pars_fragment:zd,aomap_fragment:Bd,aomap_pars_fragment:kd,batching_pars_vertex:Vd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Wd,bsdfs:Xd,iridescence_fragment:qd,bumpmap_pars_fragment:$d,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Zd,color_fragment:jd,color_pars_fragment:Qd,color_pars_vertex:ef,color_vertex:tf,common:nf,cube_uv_reflection_fragment:sf,defaultnormal_vertex:rf,displacementmap_pars_vertex:af,displacementmap_vertex:of,emissivemap_fragment:cf,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:uf,envmap_fragment:df,envmap_common_pars_fragment:ff,envmap_pars_fragment:pf,envmap_pars_vertex:mf,envmap_physical_pars_fragment:Af,envmap_vertex:xf,fog_vertex:gf,fog_pars_vertex:vf,fog_fragment:_f,fog_pars_fragment:Mf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:bf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Tf,lights_toon_fragment:wf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:If,lights_fragment_begin:Df,lights_fragment_maps:Uf,lights_fragment_end:Nf,logdepthbuf_fragment:Ff,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:zf,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Vf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:$f,morphnormal_vertex:Yf,morphtarget_pars_vertex:Kf,morphtarget_vertex:Jf,normal_fragment_begin:Zf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:cp,premultiplied_alpha_fragment:lp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:xp,shadowmap_vertex:gp,shadowmask_pars_fragment:vp,skinbase_vertex:_p,skinning_pars_vertex:Mp,skinning_vertex:yp,skinnormal_vertex:bp,specularmap_fragment:Sp,specularmap_pars_fragment:Ep,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Ip,background_vert:Dp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:zp,depth_vert:Bp,depth_frag:kp,distanceRGBA_vert:Vp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:$p,meshbasic_frag:Yp,meshlambert_vert:Kp,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:jp,meshnormal_vert:Qp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:am,points_vert:om,points_frag:cm,shadow_vert:lm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},Se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Hn={basic:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Jt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Jt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Jt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new We(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Jt([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Jt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Jt([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Jt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Jt([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Jt([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Jt([Se.lights,Se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Hn.physical={uniforms:Jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Or={r:0,b:0,g:0},Fi=new zn,fm=new lt;function pm(i,e,t,n,s,r,a){const o=new We(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function _(y){let S=!1;const L=g(y);L===null?p(o,c):L&&L.isColor&&(p(L,1),S=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const L=g(S);L&&(L.isCubeTexture||L.mapping===da)?(u===void 0&&(u=new pt(new Gt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ws(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Fi.copy(S.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(Fi)),u.material.toneMapped=ot.getTransfer(L.colorSpace)!==ft,(h!==L||d!==L.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,d=L.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new pt(new dr(2,2),new Kn({name:"BackgroundMaterial",uniforms:ws(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ot.getTransfer(L.colorSpace)!==ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,d=L.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,S){y.getRGB(Or,Th(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,S,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:_,addToRenderList:m,dispose:v}}function mm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,I,B,F,W){let Y=!1;const Q=h(F,B,I);r!==Q&&(r=Q,l(r.object)),Y=f(x,F,B,W),Y&&g(x,F,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(x,I,B,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,I,B){const F=B.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Y=W[I.id];Y===void 0&&(Y={},W[I.id]=Y);let Q=Y[F];return Q===void 0&&(Q=d(c()),Y[F]=Q),Q}function d(x){const I=[],B=[],F=[];for(let W=0;W<t;W++)I[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,I,B,F){const W=r.attributes,Y=I.attributes;let Q=0;const ae=B.getAttributes();for(const j in ae)if(ae[j].location>=0){const me=W[j];let Re=Y[j];if(Re===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),me===void 0||me.attribute!==Re||Re&&me.data!==Re.data)return!0;Q++}return r.attributesNum!==Q||r.index!==F}function g(x,I,B,F){const W={},Y=I.attributes;let Q=0;const ae=B.getAttributes();for(const j in ae)if(ae[j].location>=0){let me=Y[j];me===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));const Re={};Re.attribute=me,me&&me.data&&(Re.data=me.data),W[j]=Re,Q++}r.attributes=W,r.attributesNum=Q,r.index=F}function _(){const x=r.newAttributes;for(let I=0,B=x.length;I<B;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){const B=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),W[x]!==I&&(i.vertexAttribDivisor(x,I),W[x]=I)}function v(){const x=r.newAttributes,I=r.enabledAttributes;for(let B=0,F=I.length;B<F;B++)I[B]!==x[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function y(x,I,B,F,W,Y,Q){Q===!0?i.vertexAttribIPointer(x,I,B,W,Y):i.vertexAttribPointer(x,I,B,F,W,Y)}function S(x,I,B,F){_();const W=F.attributes,Y=B.getAttributes(),Q=I.defaultAttributeValues;for(const ae in Y){const j=Y[ae];if(j.location>=0){let pe=W[ae];if(pe===void 0&&(ae==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),ae==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){const me=pe.normalized,Re=pe.itemSize,Xe=e.get(pe);if(Xe===void 0)continue;const Ke=Xe.buffer,nt=Xe.type,st=Xe.bytesPerElement,ee=nt===i.INT||nt===i.UNSIGNED_INT||pe.gpuType===fc;if(pe.isInterleavedBufferAttribute){const ie=pe.data,be=ie.stride,Le=pe.offset;if(ie.isInstancedInterleavedBuffer){for(let Ie=0;Ie<j.locationSize;Ie++)p(j.location+Ie,ie.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ie=0;Ie<j.locationSize;Ie++)m(j.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Ie=0;Ie<j.locationSize;Ie++)y(j.location+Ie,Re/j.locationSize,nt,me,be*st,(Le+Re/j.locationSize*Ie)*st,ee)}else{if(pe.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)p(j.location+ie,pe.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ie=0;ie<j.locationSize;ie++)m(j.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ie=0;ie<j.locationSize;ie++)y(j.location+ie,Re/j.locationSize,nt,me,Re*st,Re/j.locationSize*ie*st,ee)}}else if(Q!==void 0){const me=Q[ae];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(j.location,me);break;case 3:i.vertexAttrib3fv(j.location,me);break;case 4:i.vertexAttrib4fv(j.location,me);break;default:i.vertexAttrib1fv(j.location,me)}}}}v()}function L(){P();for(const x in n){const I=n[x];for(const B in I){const F=I[B];for(const W in F)u(F[W].object),delete F[W];delete I[B]}delete n[x]}}function M(x){if(n[x.id]===void 0)return;const I=n[x.id];for(const B in I){const F=I[B];for(const W in F)u(F[W].object),delete F[W];delete I[B]}delete n[x.id]}function w(x){for(const I in n){const B=n[I];if(B[x.id]===void 0)continue;const F=B[x.id];for(const W in F)u(F[W].object),delete F[W];delete B[x.id]}}function P(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:M,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function xm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==On&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Ls&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ge("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:L,maxSamples:M}}function vm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new zi,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let S=p.clippingState||null;c.value=S,S=u(g,d,y,f);for(let L=0;L!==y;++L)S[L]=t[L];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)a.copy(h[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function _m(i){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=Es:o===To&&(a.mapping=Ts),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===To)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new z0(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,Pl=[.125,.215,.35,.446,.526,.582],ki=20,Mm=256,Hs=new Hh,Ll=new We;let to=null,no=0,io=0,so=!1;const ym=new D;class Il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=ym}=r;to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(to,no,io),this._renderer.xr.enabled=so,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),to=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),so=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ls,format:On,colorSpace:As,depthBuffer:!1},s=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bm(r)),this._blurMaterial=Em(r,e,t),this._ggxMaterial=Sm(r,e,t)}return s}_compileMaterial(e){const t=new pt(new It,e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,n,s,r){const c=new fn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ll),h.toneMapping=Ai,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Gt,new Tn({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(Ll),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const L=this._cubeSize;ds(s,S*L,y>2?L:0,L,L),h.setRenderTarget(s),p&&h.render(_,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Es||e.mapping===Ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Hs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,f=h*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Si?n-g+Si:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ds(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Hs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ds(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Hs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ki;m>ki&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let v=0;for(let w=0;w<ki;++w){const P=w/_,E=Math.exp(-P*P/2);p.push(E),w===0?v+=E:w<m&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const S=this._sizeLods[s],L=3*S*(s>y-Si?s-y+Si:0),M=4*(this._cubeSize-S);ds(t,L,M,3*S,2*S),c.setRenderTarget(t),c.render(h,Hs)}}function bm(i){const e=[],t=[],n=[];let s=i;const r=i-Si+1+Pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Si?c=Pl[a-i+Si-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let M=0;M<f;M++){const w=M%3*2/3-1,P=M>2?0:-1,E=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(E,_*g*M),y.set(d,m*g*M);const x=[M,M,M,M,M,M];S.set(x,p*g*M)}const L=new It;L.setAttribute("position",new rn(v,_)),L.setAttribute("uv",new rn(y,m)),L.setAttribute("faceIndex",new rn(S,p)),n.push(new pt(L,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Dl(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sm(i,e,t){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Em(i,e,t){const n=new Float32Array(ki),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ul(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Nl(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function Tm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Eo||c===To,u=c===Es||c===Ts;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Il(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Il(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Am(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ir("WebGLRenderer: "+n+" extension not supported."),s}}}function wm(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,S=v.length;y<S;y+=3){const L=v[y+0],M=v[y+1],w=v[y+2];d.push(L,M,M,w,w,L)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const L=y+0,M=y+1,w=y+2;d.push(L,M,M,w,w,L)}}else return;const m=new(_h(d)?Eh:Sh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Rm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,e,t){const n=new WeakMap,s=new mt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let x=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let L=o.attributes.position.count*S,M=1;L>e.maxTextureSize&&(M=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*M*4*h),P=new Mh(w,L,M,h);P.type=Wn,P.needsUpdate=!0;const E=S*4;for(let I=0;I<h;I++){const B=p[I],F=v[I],W=y[I],Y=L*M*4*I;for(let Q=0;Q<B.count;Q++){const ae=Q*E;g===!0&&(s.fromBufferAttribute(B,Q),w[Y+ae+0]=s.x,w[Y+ae+1]=s.y,w[Y+ae+2]=s.z,w[Y+ae+3]=0),_===!0&&(s.fromBufferAttribute(F,Q),w[Y+ae+4]=s.x,w[Y+ae+5]=s.y,w[Y+ae+6]=s.z,w[Y+ae+7]=0),m===!0&&(s.fromBufferAttribute(W,Q),w[Y+ae+8]=s.x,w[Y+ae+9]=s.y,w[Y+ae+10]=s.z,w[Y+ae+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:P,size:new ve(L,M)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lm(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const Wh=new qt,Fl=new Ch(1,1),Xh=new Mh,qh=new y0,$h=new wh,Ol=[],zl=[],Bl=new Float32Array(16),kl=new Float32Array(9),Vl=new Float32Array(4);function Ds(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ol[s];if(r===void 0&&(r=new Float32Array(s),Ol[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ma(i,e){let t=zl[e];t===void 0&&(t=new Int32Array(e),zl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Fm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Vl.set(n),i.uniformMatrix2fv(this.addr,!1,Vl),Ut(t,n)}}function Om(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),Ut(t,n)}}function zm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Ut(t,n)}}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Gm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function $m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=vh,r=Fl):r=Wh,t.setTexture2D(e||r,s)}function Ym(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qh,s)}function Km(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||$h,s)}function Jm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xh,s)}function Zm(i){switch(i){case 5126:return Im;case 35664:return Dm;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return Om;case 35676:return zm;case 5124:case 35670:return Bm;case 35667:case 35671:return km;case 35668:case 35672:return Vm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Ym;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Jm}}function jm(i,e){i.uniform1fv(this.addr,e)}function Qm(i,e){const t=Ds(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){const t=Ds(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){const t=Ds(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){const t=Ds(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){const t=Ds(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sx(i,e){const t=Ds(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rx(i,e){i.uniform1iv(this.addr,e)}function ax(i,e){i.uniform2iv(this.addr,e)}function ox(i,e){i.uniform3iv(this.addr,e)}function cx(i,e){i.uniform4iv(this.addr,e)}function lx(i,e){i.uniform1uiv(this.addr,e)}function hx(i,e){i.uniform2uiv(this.addr,e)}function ux(i,e){i.uniform3uiv(this.addr,e)}function dx(i,e){i.uniform4uiv(this.addr,e)}function fx(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Wh,r[a])}function px(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qh,r[a])}function mx(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||$h,r[a])}function xx(i,e,t){const n=this.cache,s=e.length,r=Ma(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xh,r[a])}function gx(i){switch(i){case 5126:return jm;case 35664:return Qm;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return cx;case 5125:return lx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return xx}}class vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zm(t.type)}}class _x{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gx(t.type)}}class Mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Hl(i,e){i.seq.push(e),i.map[e.id]=e}function yx(i,e,t){const n=i.name,s=n.length;for(ro.lastIndex=0;;){const r=ro.exec(n),a=ro.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hl(t,l===void 0?new vx(o,i,e):new _x(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Mx(o),Hl(t,h)),t=h}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);yx(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Gl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const bx=37297;let Sx=0;function Ex(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Wl=new $e;function Tx(i){ot._getMatrix(Wl,ot.workingColorSpace,i);const e=`mat3( ${Wl.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ex(i.getShaderSource(e),o)}else return r}function Ax(i,e){const t=Tx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wx(i,e){let t;switch(e){case Nu:t="Linear";break;case Fu:t="Reinhard";break;case Ou:t="Cineon";break;case lh:t="ACESFilmic";break;case Bu:t="AgX";break;case ku:t="Neutral";break;case zu:t="Custom";break;default:Ge("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new D;function Rx(){ot.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Px(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xs(i){return i!==""}function ql(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(Ix,Ux)}const Dx=new Map;function Ux(i,e){let t=Ye[e];if(t===void 0){const n=Dx.get(e);if(n!==void 0)t=Ye[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}const Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(i){return i.replace(Nx,Fx)}function Fx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ox(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function zx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ts&&(e="ENVMAP_MODE_REFRACTION"),e}function kx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ch:e="ENVMAP_BLENDING_MULTIPLY";break;case Du:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function Vx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Ox(t),l=zx(t),u=Bx(t),h=kx(t),d=Vx(t),f=Cx(t),g=Px(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ai?wx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ax("linearToOutputTexel",t.outputColorSpace),Rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=sc(a),a=ql(a,t),a=$l(a,t),o=sc(o),o=ql(o,t),o=$l(o,t),a=Yl(a),o=Yl(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+a,S=v+p+o,L=Gl(s,s.VERTEX_SHADER,y),M=Gl(s,s.FRAGMENT_SHADER,S);s.attachShader(_,L),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(I){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(L)||"",W=s.getShaderInfoLog(M)||"",Y=B.trim(),Q=F.trim(),ae=W.trim();let j=!0,pe=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,M);else{const me=Xl(s,L,"vertex"),Re=Xl(s,M,"fragment");Tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+me+`
`+Re)}else Y!==""?Ge("WebGLProgram: Program Info Log:",Y):(Q===""||ae==="")&&(pe=!1);pe&&(I.diagnostics={runnable:j,programLog:Y,vertexShader:{log:Q,prefix:m},fragmentShader:{log:ae,prefix:p}})}s.deleteShader(L),s.deleteShader(M),P=new Kr(s,_),E=Lx(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,bx)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=M,this}let Gx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xx(e),t.set(e,n)),n}}class Xx{constructor(e){this.id=Gx++,this.code=e,this.usedTimes=0}}function qx(i,e,t,n,s,r,a){const o=new Sc,c=new Wx,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,I,B,F){const W=B.fog,Y=F.geometry,Q=E.isMeshStandardMaterial?B.environment:null,ae=(E.isMeshStandardMaterial?t:e).get(E.envMap||Q),j=ae&&ae.mapping===da?ae.image.height:null,pe=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&Ge("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Re=me!==void 0?me.length:0;let Xe=0;Y.morphAttributes.position!==void 0&&(Xe=1),Y.morphAttributes.normal!==void 0&&(Xe=2),Y.morphAttributes.color!==void 0&&(Xe=3);let Ke,nt,st,ee;if(pe){const ut=Hn[pe];Ke=ut.vertexShader,nt=ut.fragmentShader}else Ke=E.vertexShader,nt=E.fragmentShader,c.update(E),st=c.getVertexShaderID(E),ee=c.getFragmentShaderID(E);const ie=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Le=F.isInstancedMesh===!0,Ie=F.isBatchedMesh===!0,qe=!!E.map,rt=!!E.matcap,Be=!!ae,re=!!E.aoMap,C=!!E.lightMap,oe=!!E.bumpMap,he=!!E.normalMap,de=!!E.displacementMap,le=!!E.emissiveMap,we=!!E.metalnessMap,Me=!!E.roughnessMap,Ee=E.anisotropy>0,R=E.clearcoat>0,b=E.dispersion>0,G=E.iridescence>0,Z=E.sheen>0,se=E.transmission>0,K=Ee&&!!E.anisotropyMap,Ne=R&&!!E.clearcoatMap,T=R&&!!E.clearcoatNormalMap,U=R&&!!E.clearcoatRoughnessMap,N=G&&!!E.iridescenceMap,z=G&&!!E.iridescenceThicknessMap,k=Z&&!!E.sheenColorMap,J=Z&&!!E.sheenRoughnessMap,ce=!!E.specularMap,te=!!E.specularColorMap,Te=!!E.specularIntensityMap,O=se&&!!E.transmissionMap,xe=se&&!!E.thicknessMap,fe=!!E.gradientMap,ye=!!E.alphaMap,ue=E.alphaTest>0,ne=!!E.alphaHash,De=!!E.extensions;let He=Ai;E.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(He=i.toneMapping);const vt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:nt,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&F._colorsTexture!==null,instancing:Le,instancingColor:Le&&F.instanceColor!==null,instancingMorph:Le&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:As,alphaToCoverage:!!E.alphaToCoverage,map:qe,matcap:rt,envMap:Be,envMapMode:Be&&ae.mapping,envMapCubeUVHeight:j,aoMap:re,lightMap:C,bumpMap:oe,normalMap:he,displacementMap:d&&de,emissiveMap:le,normalMapObjectSpace:he&&E.normalMapType===Wu,normalMapTangentSpace:he&&E.normalMapType===gh,metalnessMap:we,roughnessMap:Me,anisotropy:Ee,anisotropyMap:K,clearcoat:R,clearcoatMap:Ne,clearcoatNormalMap:T,clearcoatRoughnessMap:U,dispersion:b,iridescence:G,iridescenceMap:N,iridescenceThicknessMap:z,sheen:Z,sheenColorMap:k,sheenRoughnessMap:J,specularMap:ce,specularColorMap:te,specularIntensityMap:Te,transmission:se,transmissionMap:O,thicknessMap:xe,gradientMap:fe,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:ye,alphaTest:ue,alphaHash:ne,combine:E.combine,mapUv:qe&&_(E.map.channel),aoMapUv:re&&_(E.aoMap.channel),lightMapUv:C&&_(E.lightMap.channel),bumpMapUv:oe&&_(E.bumpMap.channel),normalMapUv:he&&_(E.normalMap.channel),displacementMapUv:de&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:we&&_(E.metalnessMap.channel),roughnessMapUv:Me&&_(E.roughnessMap.channel),anisotropyMapUv:K&&_(E.anisotropyMap.channel),clearcoatMapUv:Ne&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:z&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:k&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:J&&_(E.sheenRoughnessMap.channel),specularMapUv:ce&&_(E.specularMap.channel),specularColorMapUv:te&&_(E.specularColorMap.channel),specularIntensityMapUv:Te&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:xe&&_(E.thicknessMap.channel),alphaMapUv:ye&&_(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(he||Ee),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(qe||ye),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Xe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&ot.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:De&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&E.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(x,E),y(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function v(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const x=g[E.type];let I;if(x){const B=Hn[x];I=U0.clone(B.uniforms)}else I=E.uniforms;return I}function L(E,x){let I;for(let B=0,F=u.length;B<F;B++){const W=u[B];if(W.cacheKey===x){I=W,++I.usedTimes;break}}return I===void 0&&(I=new Hx(i,x,E,r),u.push(I)),I}function M(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function w(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:L,releaseProgram:M,releaseShaderCache:w,programs:u,dispose:P}}function $x(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||Yx),n.length>1&&n.sort(d||Jl),s.length>1&&s.sort(d||Jl)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Kx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Zl,i.set(n,[a])):s>=r.length?(a=new Zl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new We};break;case"SpotLight":t={position:new D,direction:new D,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Zx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jx=0;function Qx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eg(i){const e=new Jx,t=Zx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new lt,a=new lt;function o(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,S=0,L=0,M=0,w=0;l.sort(Qx);for(let E=0,x=l.length;E<x;E++){const I=l[E],B=I.color,F=I.intensity,W=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*F,h+=B.g*F,d+=B.b*F;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(I.sh.coefficients[Q],F);w++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ae=I.shadow,j=t.get(I);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=I.shadow.matrix,v++}n.directional[f]=Q,f++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(B).multiplyScalar(F),Q.distance=W,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,n.spot[_]=Q;const ae=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,ae.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[_]=ae.matrix,I.castShadow){const j=t.get(I);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=Y,S++}_++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(B).multiplyScalar(F),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Q,m++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const ae=I.shadow,j=t.get(I);j.shadowIntensity=ae.intensity,j.shadowBias=ae.bias,j.shadowNormalBias=ae.normalBias,j.shadowRadius=ae.radius,j.shadowMapSize=ae.mapSize,j.shadowCameraNear=ae.camera.near,j.shadowCameraFar=ae.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=Q,g++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(F),Q.groundColor.copy(I.groundColor).multiplyScalar(F),n.hemi[p]=Q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==S||P.numSpotMaps!==L||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+L-M,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=S,P.numSpotMaps=L,P.numLightProbes=w,n.version=jx++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(y.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function jl(i){const e=new eg(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function tg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new jl(i),e.set(s,[o])):r>=a.length?(o=new jl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ig=`uniform sampler2D shadow_pass;
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
}`;function sg(i,e,t){let n=new Ec;const s=new ve,r=new ve,a=new mt,o=new Sd({depthPacking:Gu}),c=new Ed,l={},u=t.maxTextureSize,h={[wi]:Qt,[Qt]:wi,[bn]:bn},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:ng,fragmentShader:ig}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(M,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(ci),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==si&&this.type===si,W=p===si&&this.type!==si;for(let Y=0,Q=M.length;Y<Q;Y++){const ae=M[Y],j=ae.shadow;if(j===void 0){Ge("WebGLShadowMap:",ae,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const pe=j.getFrameExtents();if(s.multiply(pe),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/pe.x),s.x=r.x*pe.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/pe.y),s.y=r.y*pe.y,j.mapSize.y=r.y)),j.map===null||F===!0||W===!0){const Re=this.type!==si?{minFilter:gn,magFilter:gn}:{};j.map!==null&&j.map.dispose(),j.map=new qi(s.x,s.y,Re),j.map.texture.name=ae.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const me=j.getViewportCount();for(let Re=0;Re<me;Re++){const Xe=j.getViewport(Re);a.set(r.x*Xe.x,r.y*Xe.y,r.x*Xe.z,r.y*Xe.w),B.viewport(a),j.updateMatrices(ae,Re),n=j.getFrustum(),S(w,P,j.camera,ae,this.type)}j.isPointLightShadow!==!0&&this.type===si&&v(j,P),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,x,I)};function v(M,w){const P=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new qi(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,P,f,_,null)}function y(M,w,P,E){let x=null;const I=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)x=I;else if(x=P.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=x.uuid,F=w.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let Y=W[F];Y===void 0&&(Y=x.clone(),W[F]=Y,w.addEventListener("dispose",L)),x=Y}if(x.visible=w.visible,x.wireframe=w.wireframe,E===si?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=P}return x}function S(M,w,P,E,x){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===si)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const F=e.update(M),W=M.material;if(Array.isArray(W)){const Y=F.groups;for(let Q=0,ae=Y.length;Q<ae;Q++){const j=Y[Q],pe=W[j.materialIndex];if(pe&&pe.visible){const me=y(M,pe,E,x);M.onBeforeShadow(i,M,w,P,F,me,j),i.renderBufferDirect(P,null,F,me,M,j),M.onAfterShadow(i,M,w,P,F,me,j)}}}else if(W.visible){const Y=y(M,W,E,x);M.onBeforeShadow(i,M,w,P,F,Y,null),i.renderBufferDirect(P,null,F,Y,M,null),M.onAfterShadow(i,M,w,P,F,Y,null)}}const B=M.children;for(let F=0,W=B.length;F<W;F++)S(B[F],w,P,E,x)}function L(M){M.target.removeEventListener("dispose",L);for(const P in l){const E=l[P],x=M.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const rg={[go]:vo,[_o]:bo,[Mo]:So,[Ss]:yo,[vo]:go,[bo]:_o,[So]:Mo,[yo]:Ss};function ag(i,e){function t(){let O=!1;const xe=new mt;let fe=null;const ye=new mt(0,0,0,0);return{setMask:function(ue){fe!==ue&&!O&&(i.colorMask(ue,ue,ue,ue),fe=ue)},setLocked:function(ue){O=ue},setClear:function(ue,ne,De,He,vt){vt===!0&&(ue*=He,ne*=He,De*=He),xe.set(ue,ne,De,He),ye.equals(xe)===!1&&(i.clearColor(ue,ne,De,He),ye.copy(xe))},reset:function(){O=!1,fe=null,ye.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,fe=null,ye=null,ue=null;return{setReversed:function(ne){if(xe!==ne){const De=e.get("EXT_clip_control");ne?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),xe=ne;const He=ue;ue=null,this.setClear(He)}},getReversed:function(){return xe},setTest:function(ne){ne?ie(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(ne){fe!==ne&&!O&&(i.depthMask(ne),fe=ne)},setFunc:function(ne){if(xe&&(ne=rg[ne]),ye!==ne){switch(ne){case go:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case _o:i.depthFunc(i.LESS);break;case Ss:i.depthFunc(i.LEQUAL);break;case Mo:i.depthFunc(i.EQUAL);break;case yo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case So:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=ne}},setLocked:function(ne){O=ne},setClear:function(ne){ue!==ne&&(xe&&(ne=1-ne),i.clearDepth(ne),ue=ne)},reset:function(){O=!1,fe=null,ye=null,ue=null,xe=!1}}}function s(){let O=!1,xe=null,fe=null,ye=null,ue=null,ne=null,De=null,He=null,vt=null;return{setTest:function(ut){O||(ut?ie(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ut){xe!==ut&&!O&&(i.stencilMask(ut),xe=ut)},setFunc:function(ut,Bn,An){(fe!==ut||ye!==Bn||ue!==An)&&(i.stencilFunc(ut,Bn,An),fe=ut,ye=Bn,ue=An)},setOp:function(ut,Bn,An){(ne!==ut||De!==Bn||He!==An)&&(i.stencilOp(ut,Bn,An),ne=ut,De=Bn,He=An)},setLocked:function(ut){O=ut},setClear:function(ut){vt!==ut&&(i.clearStencil(ut),vt=ut)},reset:function(){O=!1,xe=null,fe=null,ye=null,ue=null,ne=null,De=null,He=null,vt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,S=null,L=null,M=null,w=new We(0,0,0),P=0,E=!1,x=null,I=null,B=null,F=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ae=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(j)[1]),Q=ae>=1):j.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Q=ae>=2);let pe=null,me={};const Re=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),Ke=new mt().fromArray(Re),nt=new mt().fromArray(Xe);function st(O,xe,fe,ye){const ue=new Uint8Array(4),ne=i.createTexture();i.bindTexture(O,ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<fe;De++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(xe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ne}const ee={};ee[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ss),oe(!1),he(Xc),ie(i.CULL_FACE),re(ci);function ie(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function be(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Le(O,xe){return h[O]!==xe?(i.bindFramebuffer(O,xe),h[O]=xe,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(O,xe){let fe=f,ye=!1;if(O){fe=d.get(xe),fe===void 0&&(fe=[],d.set(xe,fe));const ue=O.textures;if(fe.length!==ue.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,De=ue.length;ne<De;ne++)fe[ne]=i.COLOR_ATTACHMENT0+ne;fe.length=ue.length,ye=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,ye=!0);ye&&i.drawBuffers(fe)}function qe(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const rt={[Bi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[gu]:i.FUNC_REVERSE_SUBTRACT};rt[vu]=i.MIN,rt[_u]=i.MAX;const Be={[Mu]:i.ZERO,[yu]:i.ONE,[bu]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Ru]:i.SRC_ALPHA_SATURATE,[Au]:i.DST_COLOR,[Eu]:i.DST_ALPHA,[Su]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[wu]:i.ONE_MINUS_DST_COLOR,[Tu]:i.ONE_MINUS_DST_ALPHA,[Cu]:i.CONSTANT_COLOR,[Pu]:i.ONE_MINUS_CONSTANT_COLOR,[Lu]:i.CONSTANT_ALPHA,[Iu]:i.ONE_MINUS_CONSTANT_ALPHA};function re(O,xe,fe,ye,ue,ne,De,He,vt,ut){if(O===ci){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(ie(i.BLEND),_=!0),O!==mu){if(O!==m||ut!==E){if((p!==Bi||S!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,S=Bi),ut)switch(O){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFunc(i.ONE,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Tt("WebGLState: Invalid blending: ",O);break}else switch(O){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qc:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",O);break}v=null,y=null,L=null,M=null,w.set(0,0,0),P=0,m=O,E=ut}return}ue=ue||xe,ne=ne||fe,De=De||ye,(xe!==p||ue!==S)&&(i.blendEquationSeparate(rt[xe],rt[ue]),p=xe,S=ue),(fe!==v||ye!==y||ne!==L||De!==M)&&(i.blendFuncSeparate(Be[fe],Be[ye],Be[ne],Be[De]),v=fe,y=ye,L=ne,M=De),(He.equals(w)===!1||vt!==P)&&(i.blendColor(He.r,He.g,He.b,vt),w.copy(He),P=vt),m=O,E=!1}function C(O,xe){O.side===bn?be(i.CULL_FACE):ie(i.CULL_FACE);let fe=O.side===Qt;xe&&(fe=!fe),oe(fe),O.blending===_s&&O.transparent===!1?re(ci):re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const ye=O.stencilWrite;o.setTest(ye),ye&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),le(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function he(O){O!==fu?(ie(i.CULL_FACE),O!==I&&(O===Xc?i.cullFace(i.BACK):O===pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=O}function de(O){O!==B&&(Q&&i.lineWidth(O),B=O)}function le(O,xe,fe){O?(ie(i.POLYGON_OFFSET_FILL),(F!==xe||W!==fe)&&(i.polygonOffset(xe,fe),F=xe,W=fe)):be(i.POLYGON_OFFSET_FILL)}function we(O){O?ie(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function Me(O){O===void 0&&(O=i.TEXTURE0+Y-1),pe!==O&&(i.activeTexture(O),pe=O)}function Ee(O,xe,fe){fe===void 0&&(pe===null?fe=i.TEXTURE0+Y-1:fe=pe);let ye=me[fe];ye===void 0&&(ye={type:void 0,texture:void 0},me[fe]=ye),(ye.type!==O||ye.texture!==xe)&&(pe!==fe&&(i.activeTexture(fe),pe=fe),i.bindTexture(O,xe||ee[O]),ye.type=O,ye.texture=xe)}function R(){const O=me[pe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function Z(){try{i.texSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function se(){try{i.texSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function T(){try{i.texStorage2D(...arguments)}catch(O){O("WebGLState:",O)}}function U(){try{i.texStorage3D(...arguments)}catch(O){O("WebGLState:",O)}}function N(){try{i.texImage2D(...arguments)}catch(O){O("WebGLState:",O)}}function z(){try{i.texImage3D(...arguments)}catch(O){O("WebGLState:",O)}}function k(O){Ke.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ke.copy(O))}function J(O){nt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),nt.copy(O))}function ce(O,xe){let fe=l.get(xe);fe===void 0&&(fe=new WeakMap,l.set(xe,fe));let ye=fe.get(O);ye===void 0&&(ye=i.getUniformBlockIndex(xe,O.name),fe.set(O,ye))}function te(O,xe){const ye=l.get(xe).get(O);c.get(xe)!==ye&&(i.uniformBlockBinding(xe,ye,O.__bindingPointIndex),c.set(xe,ye))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},pe=null,me={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,S=null,L=null,M=null,w=new We(0,0,0),P=0,E=!1,x=null,I=null,B=null,F=null,W=null,Ke.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:be,bindFramebuffer:Le,drawBuffers:Ie,useProgram:qe,setBlending:re,setMaterial:C,setFlipSided:oe,setCullFace:he,setLineWidth:de,setPolygonOffset:le,setScissorTest:we,activeTexture:Me,bindTexture:Ee,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:G,texImage2D:N,texImage3D:z,updateUBOMapping:ce,uniformBlockBinding:te,texStorage2D:T,texStorage3D:U,texSubImage2D:Z,texSubImage3D:se,compressedTexSubImage2D:K,compressedTexSubImage3D:Ne,scissor:k,viewport:J,reset:Te}}function og(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ve,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):aa("canvas")}function _(R,b,G){let Z=1;const se=Ee(R);if((se.width>G||se.height>G)&&(Z=G/Math.max(se.width,se.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Z*se.width),Ne=Math.floor(Z*se.height);h===void 0&&(h=g(K,Ne));const T=b?g(K,Ne):h;return T.width=K,T.height=Ne,T.getContext("2d").drawImage(R,0,0,K,Ne),Ge("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+K+"x"+Ne+")."),T}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,G,Z,se=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=b;if(b===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),b===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){const Ne=se?sa:ot.getTransfer(Z);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Ne===ft?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(R,b){let G;return R?b===null||b===Xi||b===er?G=i.DEPTH24_STENCIL8:b===Wn?G=i.DEPTH32F_STENCIL8:b===Qs&&(G=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===er?G=i.DEPTH_COMPONENT24:b===Wn?G=i.DEPTH_COMPONENT32F:b===Qs&&(G=i.DEPTH_COMPONENT16),G}function L(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==En?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function M(R){const b=R.target;b.removeEventListener("dispose",M),P(b),b.isVideoTexture&&u.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),x(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const G=R.source,Z=d.get(G);if(Z){const se=Z[b.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(R),Object.keys(Z).length===0&&d.delete(G)}n.remove(R)}function E(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const G=R.source,Z=d.get(G);delete Z[b.__cacheKey],a.memory.textures--}function x(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let se=0;se<b.__webglFramebuffer[Z].length;se++)i.deleteFramebuffer(b.__webglFramebuffer[Z][se]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=R.textures;for(let Z=0,se=G.length;Z<se;Z++){const K=n.get(G[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(G[Z])}n.remove(R)}let I=0;function B(){I=0}function F(){const R=I;return R>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function W(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function Y(R,b){const G=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const Z=R.image;if(Z===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,R,b);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function Q(R,b){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ee(G,R,b);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function ae(R,b){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ee(G,R,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function j(R,b){const G=n.get(R);if(R.version>0&&G.__version!==R.version){ie(G,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const pe={[ia]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Ao]:i.MIRRORED_REPEAT},me={[gn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Hi]:i.LINEAR_MIPMAP_LINEAR},Re={[Xu]:i.NEVER,[Zu]:i.ALWAYS,[qu]:i.LESS,[vh]:i.LEQUAL,[$u]:i.EQUAL,[Ju]:i.GEQUAL,[Yu]:i.GREATER,[Ku]:i.NOTEQUAL};function Xe(R,b){if(b.type===Wn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===En||b.magFilter===Aa||b.magFilter===mr||b.magFilter===Hi||b.minFilter===En||b.minFilter===Aa||b.minFilter===mr||b.minFilter===Hi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pe[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pe[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pe[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,me[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gn||b.minFilter!==mr&&b.minFilter!==Hi||b.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ke(R,b){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",M));const Z=b.source;let se=d.get(Z);se===void 0&&(se={},d.set(Z,se));const K=W(b);if(K!==R.__cacheKey){se[K]===void 0&&(se[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),se[K].usedTimes++;const Ne=se[R.__cacheKey];Ne!==void 0&&(se[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&E(b)),R.__cacheKey=K,R.__webglTexture=se[K].texture}return G}function nt(R,b,G){return Math.floor(Math.floor(R/G)/b)}function st(R,b,G,Z){const K=R.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,Z,b.data);else{K.sort((z,k)=>z.start-k.start);let Ne=0;for(let z=1;z<K.length;z++){const k=K[Ne],J=K[z],ce=k.start+k.count,te=nt(J.start,b.width,4),Te=nt(k.start,b.width,4);J.start<=ce+1&&te===Te&&nt(J.start+J.count-1,b.width,4)===te?k.count=Math.max(k.count,J.start+J.count-k.start):(++Ne,K[Ne]=J)}K.length=Ne+1;const T=i.getParameter(i.UNPACK_ROW_LENGTH),U=i.getParameter(i.UNPACK_SKIP_PIXELS),N=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let z=0,k=K.length;z<k;z++){const J=K[z],ce=Math.floor(J.start/4),te=Math.ceil(J.count/4),Te=ce%b.width,O=Math.floor(ce/b.width),xe=te,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,Te,O,xe,fe,G,Z,b.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,T),i.pixelStorei(i.UNPACK_SKIP_PIXELS,U),i.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function ee(R,b,G){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const se=Ke(R,b),K=b.source;t.bindTexture(Z,R.__webglTexture,i.TEXTURE0+G);const Ne=n.get(K);if(K.version!==Ne.__version||se===!0){t.activeTexture(i.TEXTURE0+G);const T=ot.getPrimaries(ot.workingColorSpace),U=b.colorSpace===bi?null:ot.getPrimaries(b.colorSpace),N=b.colorSpace===bi||T===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);let z=_(b.image,!1,s.maxTextureSize);z=Me(b,z);const k=r.convert(b.format,b.colorSpace),J=r.convert(b.type);let ce=y(b.internalFormat,k,J,b.colorSpace,b.isVideoTexture);Xe(Z,b);let te;const Te=b.mipmaps,O=b.isVideoTexture!==!0,xe=Ne.__version===void 0||se===!0,fe=K.dataReady,ye=L(b,z);if(b.isDepthTexture)ce=S(b.format===nr,b.type),xe&&(O?t.texStorage2D(i.TEXTURE_2D,1,ce,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,ce,z.width,z.height,0,k,J,null));else if(b.isDataTexture)if(Te.length>0){O&&xe&&t.texStorage2D(i.TEXTURE_2D,ye,ce,Te[0].width,Te[0].height);for(let ue=0,ne=Te.length;ue<ne;ue++)te=Te[ue],O?fe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,te.width,te.height,k,J,te.data):t.texImage2D(i.TEXTURE_2D,ue,ce,te.width,te.height,0,k,J,te.data);b.generateMipmaps=!1}else O?(xe&&t.texStorage2D(i.TEXTURE_2D,ye,ce,z.width,z.height),fe&&st(b,z,k,J)):t.texImage2D(i.TEXTURE_2D,0,ce,z.width,z.height,0,k,J,z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,ce,Te[0].width,Te[0].height,z.depth);for(let ue=0,ne=Te.length;ue<ne;ue++)if(te=Te[ue],b.format!==On)if(k!==null)if(O){if(fe)if(b.layerUpdates.size>0){const De=Cl(te.width,te.height,b.format,b.type);for(const He of b.layerUpdates){const vt=te.data.subarray(He*De/te.data.BYTES_PER_ELEMENT,(He+1)*De/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,He,te.width,te.height,1,k,vt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,te.width,te.height,z.depth,k,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ce,te.width,te.height,z.depth,0,te.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,te.width,te.height,z.depth,k,J,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ce,te.width,te.height,z.depth,0,k,J,te.data)}else{O&&xe&&t.texStorage2D(i.TEXTURE_2D,ye,ce,Te[0].width,Te[0].height);for(let ue=0,ne=Te.length;ue<ne;ue++)te=Te[ue],b.format!==On?k!==null?O?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,te.width,te.height,k,te.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ce,te.width,te.height,0,te.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?fe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,te.width,te.height,k,J,te.data):t.texImage2D(i.TEXTURE_2D,ue,ce,te.width,te.height,0,k,J,te.data)}else if(b.isDataArrayTexture)if(O){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,ce,z.width,z.height,z.depth),fe)if(b.layerUpdates.size>0){const ue=Cl(z.width,z.height,b.format,b.type);for(const ne of b.layerUpdates){const De=z.data.subarray(ne*ue/z.data.BYTES_PER_ELEMENT,(ne+1)*ue/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,z.width,z.height,1,k,J,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,k,J,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,z.width,z.height,z.depth,0,k,J,z.data);else if(b.isData3DTexture)O?(xe&&t.texStorage3D(i.TEXTURE_3D,ye,ce,z.width,z.height,z.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,k,J,z.data)):t.texImage3D(i.TEXTURE_3D,0,ce,z.width,z.height,z.depth,0,k,J,z.data);else if(b.isFramebufferTexture){if(xe)if(O)t.texStorage2D(i.TEXTURE_2D,ye,ce,z.width,z.height);else{let ue=z.width,ne=z.height;for(let De=0;De<ye;De++)t.texImage2D(i.TEXTURE_2D,De,ce,ue,ne,0,k,J,null),ue>>=1,ne>>=1}}else if(Te.length>0){if(O&&xe){const ue=Ee(Te[0]);t.texStorage2D(i.TEXTURE_2D,ye,ce,ue.width,ue.height)}for(let ue=0,ne=Te.length;ue<ne;ue++)te=Te[ue],O?fe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,k,J,te):t.texImage2D(i.TEXTURE_2D,ue,ce,k,J,te);b.generateMipmaps=!1}else if(O){if(xe){const ue=Ee(z);t.texStorage2D(i.TEXTURE_2D,ye,ce,ue.width,ue.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,k,J,z)}else t.texImage2D(i.TEXTURE_2D,0,ce,k,J,z);m(b)&&p(Z),Ne.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ie(R,b,G){if(b.image.length!==6)return;const Z=Ke(R,b),se=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const K=n.get(se);if(se.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+G);const Ne=ot.getPrimaries(ot.workingColorSpace),T=b.colorSpace===bi?null:ot.getPrimaries(b.colorSpace),U=b.colorSpace===bi||Ne===T?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const N=b.isCompressedTexture||b.image[0].isCompressedTexture,z=b.image[0]&&b.image[0].isDataTexture,k=[];for(let ne=0;ne<6;ne++)!N&&!z?k[ne]=_(b.image[ne],!0,s.maxCubemapSize):k[ne]=z?b.image[ne].image:b.image[ne],k[ne]=Me(b,k[ne]);const J=k[0],ce=r.convert(b.format,b.colorSpace),te=r.convert(b.type),Te=y(b.internalFormat,ce,te,b.colorSpace),O=b.isVideoTexture!==!0,xe=K.__version===void 0||Z===!0,fe=se.dataReady;let ye=L(b,J);Xe(i.TEXTURE_CUBE_MAP,b);let ue;if(N){O&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Te,J.width,J.height);for(let ne=0;ne<6;ne++){ue=k[ne].mipmaps;for(let De=0;De<ue.length;De++){const He=ue[De];b.format!==On?ce!==null?O?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,He.width,He.height,ce,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Te,He.width,He.height,0,He.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,0,0,He.width,He.height,ce,te,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De,Te,He.width,He.height,0,ce,te,He.data)}}}else{if(ue=b.mipmaps,O&&xe){ue.length>0&&ye++;const ne=Ee(k[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Te,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(z){O?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,k[ne].width,k[ne].height,ce,te,k[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Te,k[ne].width,k[ne].height,0,ce,te,k[ne].data);for(let De=0;De<ue.length;De++){const vt=ue[De].image[ne].image;O?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,vt.width,vt.height,ce,te,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Te,vt.width,vt.height,0,ce,te,vt.data)}}else{O?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ce,te,k[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Te,ce,te,k[ne]);for(let De=0;De<ue.length;De++){const He=ue[De];O?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,0,0,ce,te,He.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,De+1,Te,ce,te,He.image[ne])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function be(R,b,G,Z,se,K){const Ne=r.convert(G.format,G.colorSpace),T=r.convert(G.type),U=y(G.internalFormat,Ne,T,G.colorSpace),N=n.get(b),z=n.get(G);if(z.__renderTarget=b,!N.__hasExternalTextures){const k=Math.max(1,b.width>>K),J=Math.max(1,b.height>>K);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,K,U,k,J,b.depth,0,Ne,T,null):t.texImage2D(se,K,U,k,J,0,Ne,T,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,se,z.__webglTexture,0,de(b)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,se,z.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(R,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const Z=b.depthTexture,se=Z&&Z.isDepthTexture?Z.type:null,K=S(b.stencilBuffer,se),Ne=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=de(b);le(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,T,K,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,T,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,R)}else{const Z=b.textures;for(let se=0;se<Z.length;se++){const K=Z[se],Ne=r.convert(K.format,K.colorSpace),T=r.convert(K.type),U=y(K.internalFormat,Ne,T,K.colorSpace),N=de(b);G&&le(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,U,b.width,b.height):le(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,U,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,U,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const se=Z.__webglTexture,K=de(b);if(b.depthTexture.format===tr)le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(b.depthTexture.format===nr)le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function qe(R){const b=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",se)};Z.addEventListener("dispose",se),b.__depthDisposeCallback=se}b.__boundDepthTexture=Z}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Z=R.texture.mipmaps;Z&&Z.length>0?Ie(b.__webglFramebuffer[0],R):Ie(b.__webglFramebuffer,R)}else if(G){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),Le(b.__webglDepthbuffer[Z],R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}else{const Z=R.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Le(b.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,b,G){const Z=n.get(R);b!==void 0&&be(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&qe(R)}function Be(R){const b=R.texture,G=n.get(R),Z=n.get(b);R.addEventListener("dispose",w);const se=R.textures,K=R.isWebGLCubeRenderTarget===!0,Ne=se.length>1;if(Ne||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,a.memory.textures++),K){G.__webglFramebuffer=[];for(let T=0;T<6;T++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[T]=[];for(let U=0;U<b.mipmaps.length;U++)G.__webglFramebuffer[T][U]=i.createFramebuffer()}else G.__webglFramebuffer[T]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let T=0;T<b.mipmaps.length;T++)G.__webglFramebuffer[T]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let T=0,U=se.length;T<U;T++){const N=n.get(se[T]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&le(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let T=0;T<se.length;T++){const U=se[T];G.__webglColorRenderbuffer[T]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[T]);const N=r.convert(U.format,U.colorSpace),z=r.convert(U.type),k=y(U.internalFormat,N,z,U.colorSpace,R.isXRRenderTarget===!0),J=de(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,k,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.RENDERBUFFER,G.__webglColorRenderbuffer[T])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,b);for(let T=0;T<6;T++)if(b.mipmaps&&b.mipmaps.length>0)for(let U=0;U<b.mipmaps.length;U++)be(G.__webglFramebuffer[T][U],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+T,U);else be(G.__webglFramebuffer[T],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let T=0,U=se.length;T<U;T++){const N=se[T],z=n.get(N);let k=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(k=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,z.__webglTexture),Xe(k,N),be(G.__webglFramebuffer,R,N,i.COLOR_ATTACHMENT0+T,k,0),m(N)&&p(k)}t.unbindTexture()}else{let T=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(T=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(T,Z.__webglTexture),Xe(T,b),b.mipmaps&&b.mipmaps.length>0)for(let U=0;U<b.mipmaps.length;U++)be(G.__webglFramebuffer[U],R,b,i.COLOR_ATTACHMENT0,T,U);else be(G.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,T,0);m(b)&&p(T),t.unbindTexture()}R.depthBuffer&&qe(R)}function re(R){const b=R.textures;for(let G=0,Z=b.length;G<Z;G++){const se=b[G];if(m(se)){const K=v(R),Ne=n.get(se).__webglTexture;t.bindTexture(K,Ne),p(K),t.unbindTexture()}}}const C=[],oe=[];function he(R){if(R.samples>0){if(le(R)===!1){const b=R.textures,G=R.width,Z=R.height;let se=i.COLOR_BUFFER_BIT;const K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(R),T=b.length>1;if(T)for(let N=0;N<b.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const U=R.texture.mipmaps;U&&U.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let N=0;N<b.length;N++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),T){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[N]);const z=n.get(b[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,G,Z,0,0,G,Z,se,i.NEAREST),c===!0&&(C.length=0,oe.length=0,C.push(i.COLOR_ATTACHMENT0+N),R.depthBuffer&&R.resolveDepthBuffer===!1&&(C.push(K),oe.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),T)for(let N=0;N<b.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[N]);const z=n.get(b[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function de(R){return Math.min(s.maxSamples,R.samples)}function le(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function we(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function Me(R,b){const G=R.colorSpace,Z=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==As&&G!==bi&&(ot.getTransfer(G)===ft?(Z!==On||se!==Yn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",G)),b}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=Q,this.setTexture3D=ae,this.setTextureCube=j,this.rebindTextures=rt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=le}function cg(i,e){function t(n,s=bi){let r;const a=ot.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return i.BYTE;if(n===dh)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===fc)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Ls)return i.HALF_FLOAT;if(n===mh)return i.ALPHA;if(n===xh)return i.RGB;if(n===On)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===xc)return i.RED;if(n===gc)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===$r||n===Yr)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Ro||n===Co||n===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Io||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Io)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uo||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===$o)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qo)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Ko||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zo||n===jo||n===Qo||n===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hg=`
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

}`;class ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:lg,fragmentShader:hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dg extends Is{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new ug,p={},v=t.getContextAttributes();let y=null,S=null;const L=[],M=[],w=new ve;let P=null;const E=new fn;E.viewport=new mt;const x=new fn;x.viewport=new mt;const I=[E,x],B=new Cd;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ie=L[ee];return ie===void 0&&(ie=new $a,L[ee]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ee){let ie=L[ee];return ie===void 0&&(ie=new $a,L[ee]=ie),ie.getGripSpace()},this.getHand=function(ee){let ie=L[ee];return ie===void 0&&(ie=new $a,L[ee]=ie),ie.getHandSpace()};function Y(ee){const ie=M.indexOf(ee.inputSource);if(ie===-1)return;const be=L[ie];be!==void 0&&(be.update(ee.inputSource,ee.frame,l||a),be.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",ae);for(let ee=0;ee<L.length;ee++){const ie=M[ee];ie!==null&&(M[ee]=null,L[ee].disconnect(ie))}F=null,W=null,m.reset();for(const ee in p)delete p[ee];e.setRenderTarget(y),f=null,d=null,h=null,s=null,S=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",ae),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Le=null,Ie=null;v.depth&&(Ie=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=v.stencil?nr:tr,Le=v.stencil?er:Xi);const qe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new qi(d.textureWidth,d.textureHeight,{format:On,type:Yn,depthTexture:new Ch(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new qi(f.framebufferWidth,f.framebufferHeight,{format:On,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ae(ee){for(let ie=0;ie<ee.removed.length;ie++){const be=ee.removed[ie],Le=M.indexOf(be);Le>=0&&(M[Le]=null,L[Le].disconnect(be))}for(let ie=0;ie<ee.added.length;ie++){const be=ee.added[ie];let Le=M.indexOf(be);if(Le===-1){for(let qe=0;qe<L.length;qe++)if(qe>=M.length){M.push(be),Le=qe;break}else if(M[qe]===null){M[qe]=be,Le=qe;break}if(Le===-1)break}const Ie=L[Le];Ie&&Ie.connect(be)}}const j=new D,pe=new D;function me(ee,ie,be){j.setFromMatrixPosition(ie.matrixWorld),pe.setFromMatrixPosition(be.matrixWorld);const Le=j.distanceTo(pe),Ie=ie.projectionMatrix.elements,qe=be.projectionMatrix.elements,rt=Ie[14]/(Ie[10]-1),Be=Ie[14]/(Ie[10]+1),re=(Ie[9]+1)/Ie[5],C=(Ie[9]-1)/Ie[5],oe=(Ie[8]-1)/Ie[0],he=(qe[8]+1)/qe[0],de=rt*oe,le=rt*he,we=Le/(-oe+he),Me=we*-oe;if(ie.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Me),ee.translateZ(we),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ie[10]===-1)ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=rt+we,R=Be+we,b=de-Me,G=le+(Le-Me),Z=re*Be/R*Ee,se=C*Be/R*Ee;ee.projectionMatrix.makePerspective(b,G,Z,se,Ee,R),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Re(ee,ie){ie===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ie.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let ie=ee.near,be=ee.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(be=m.depthFar)),B.near=x.near=E.near=ie,B.far=x.far=E.far=be,(F!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,W=B.far),B.layers.mask=ee.layers.mask|6,E.layers.mask=B.layers.mask&3,x.layers.mask=B.layers.mask&5;const Le=ee.parent,Ie=B.cameras;Re(B,Le);for(let qe=0;qe<Ie.length;qe++)Re(Ie[qe],Le);Ie.length===2?me(B,E,x):B.projectionMatrix.copy(E.projectionMatrix),Xe(ee,B,Le)};function Xe(ee,ie,be){be===null?ee.matrix.copy(ie.matrixWorld):(ee.matrix.copy(be.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ie.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ie.projectionMatrix),ee.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=sr*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(ee){return p[ee]};let Ke=null;function nt(ee,ie){if(u=ie.getViewerPose(l||a),g=ie,u!==null){const be=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Le=!1;be.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let Be=0;Be<be.length;Be++){const re=be[Be];let C=null;if(f!==null)C=f.getViewport(re);else{const he=h.getViewSubImage(d,re);C=he.viewport,Be===0&&(e.setRenderTargetTextures(S,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(S))}let oe=I[Be];oe===void 0&&(oe=new fn,oe.layers.enable(Be),oe.viewport=new mt,I[Be]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(C.x,C.y,C.width,C.height),Be===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(oe)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Be=h.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&m.init(Be,s.renderState)}if(Ie&&Ie.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Be=0;Be<be.length;Be++){const re=be[Be].camera;if(re){let C=p[re];C||(C=new Ph,p[re]=C);const oe=h.getCameraImage(re);C.sourceTexture=oe}}}}for(let be=0;be<L.length;be++){const Le=M[be],Ie=L[be];Le!==null&&Ie!==void 0&&Ie.update(Le,ie,l||a)}Ke&&Ke(ee,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const st=new Gh;st.setAnimationLoop(nt),this.setAnimationLoop=function(ee){Ke=ee},this.dispose=function(){}}}const Oi=new zn,fg=new lt;function pg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Th(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,Oi.copy(S),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),m.envMapRotation.value.setFromMatrix4(fg.makeRotationFromEuler(Oi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const S=y.program;n.uniformBlockBinding(v,S)}function l(v,y){let S=s[v.id];S===void 0&&(g(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(v,L);const M=e.render.frame;r[v.id]!==M&&(d(v),r[v.id]=M)}function u(v){const y=h();v.__bindingPointIndex=y;const S=i.createBuffer(),L=v.__size,M=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=s[v.id],S=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,w=S.length;M<w;M++){const P=Array.isArray(S[M])?S[M]:[S[M]];for(let E=0,x=P.length;E<x;E++){const I=P[E];if(f(I,M,E,L)===!0){const B=I.__offset,F=Array.isArray(I.value)?I.value:[I.value];let W=0;for(let Y=0;Y<F.length;Y++){const Q=F[Y],ae=_(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,B+W,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,S,L){const M=v.value,w=y+"_"+S;if(L[w]===void 0)return typeof M=="number"||typeof M=="boolean"?L[w]=M:L[w]=M.clone(),!0;{const P=L[w];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return L[w]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function g(v){const y=v.uniforms;let S=0;const L=16;for(let w=0,P=y.length;w<P;w++){const E=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,I=E.length;x<I;x++){const B=E[x],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=F.length;W<Y;W++){const Q=F[W],ae=_(Q),j=S%L,pe=j%ae.boundary,me=j+pe;S+=pe,me!==0&&L-me<ae.storage&&(S+=L-me),B.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=ae.storage}}}const M=S%L;return M>0&&(S+=L-M),v.__size=S,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const xg=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ii=null;function gg(){return ii===null&&(ii=new Rh(xg,32,32,vc,Ls),ii.minFilter=En,ii.magFilter=En,ii.wrapS=oi,ii.wrapT=oi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class vg{constructor(e={}){const{canvas:t=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Set([Mc,_c,gc]),_=new Set([Yn,Xi,Qs,er,pc,mc]),m=new Uint32Array(4),p=new Int32Array(4);let v=null,y=null;const S=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let w=!1;this._outputColorSpace=nn;let P=0,E=0,x=null,I=-1,B=null;const F=new mt,W=new mt;let Y=null;const Q=new We(0);let ae=0,j=t.width,pe=t.height,me=1,Re=null,Xe=null;const Ke=new mt(0,0,j,pe),nt=new mt(0,0,j,pe);let st=!1;const ee=new Ec;let ie=!1,be=!1;const Le=new lt,Ie=new D,qe=new mt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function re(){return x===null?me:1}let C=n;function oe(A,V){return t.getContext(A,V)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),C===null){const V="webgl2";if(C=oe(V,A),C===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}let he,de,le,we,Me,Ee,R,b,G,Z,se,K,Ne,T,U,N,z,k,J,ce,te,Te,O,xe;function fe(){he=new Am(C),he.init(),Te=new cg(C,he),de=new gm(C,he,e,Te),le=new ag(C,he),de.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),we=new Cm(C),Me=new $x,Ee=new og(C,he,le,Me,de,Te,we),R=new _m(M),b=new Tm(M),G=new Id(C),O=new mm(C,G),Z=new wm(C,G,we,O),se=new Lm(C,Z,G,we),J=new Pm(C,de,Ee),N=new vm(Me),K=new qx(M,R,b,he,de,O,N),Ne=new pg(M,Me),T=new Kx,U=new tg(he),k=new pm(M,R,b,le,se,f,c),z=new sg(M,se,de),xe=new mg(C,we,de,le),ce=new xm(C,he,we),te=new Rm(C,he,we),we.programs=K.programs,M.capabilities=de,M.extensions=he,M.properties=Me,M.renderLists=T,M.shadowMap=z,M.state=le,M.info=we}fe();const ye=new dg(M,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(j,pe,!1))},this.getSize=function(A){return A.set(j,pe)},this.setSize=function(A,V,q=!0){if(ye.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,pe=V,t.width=Math.floor(A*me),t.height=Math.floor(V*me),q===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(j*me,pe*me).floor()},this.setDrawingBufferSize=function(A,V,q){j=A,pe=V,me=q,t.width=Math.floor(A*q),t.height=Math.floor(V*q),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(Ke)},this.setViewport=function(A,V,q,$){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,V,q,$),le.viewport(F.copy(Ke).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,V,q,$){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,V,q,$),le.scissor(W.copy(nt).multiplyScalar(me).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){le.setScissorTest(st=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){Xe=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,q=!0){let $=0;if(A){let H=!1;if(x!==null){const _e=x.texture.format;H=g.has(_e)}if(H){const _e=x.texture.type,Ae=_.has(_e),Ue=k.getClearColor(),Ce=k.getClearAlpha(),ke=Ue.r,Ve=Ue.g,Oe=Ue.b;Ae?(m[0]=ke,m[1]=Ve,m[2]=Oe,m[3]=Ce,C.clearBufferuiv(C.COLOR,0,m)):(p[0]=ke,p[1]=Ve,p[2]=Oe,p[3]=Ce,C.clearBufferiv(C.COLOR,0,p))}else $|=C.COLOR_BUFFER_BIT}V&&($|=C.DEPTH_BUFFER_BIT),q&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),k.dispose(),T.dispose(),U.dispose(),Me.dispose(),R.dispose(),b.dispose(),se.dispose(),O.dispose(),xe.dispose(),K.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",zc),ye.removeEventListener("sessionend",Bc),Pi.stop()};function ue(A){A.preventDefault(),jc("WebGLRenderer: Context Lost."),w=!0}function ne(){jc("WebGLRenderer: Context Restored."),w=!1;const A=we.autoReset,V=z.enabled,q=z.autoUpdate,$=z.needsUpdate,H=z.type;fe(),we.autoReset=A,z.enabled=V,z.autoUpdate=q,z.needsUpdate=$,z.type=H}function De(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function He(A){const V=A.target;V.removeEventListener("dispose",He),vt(V)}function vt(A){ut(A),Me.remove(A)}function ut(A){const V=Me.get(A).programs;V!==void 0&&(V.forEach(function(q){K.releaseProgram(q)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,q,$,H,_e){V===null&&(V=rt);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,Ue=ou(A,V,q,$,H);le.setMaterial($,Ae);let Ce=q.index,ke=1;if($.wireframe===!0){if(Ce=Z.getWireframeAttribute(q),Ce===void 0)return;ke=2}const Ve=q.drawRange,Oe=q.attributes.position;let Ze=Ve.start*ke,dt=(Ve.start+Ve.count)*ke;_e!==null&&(Ze=Math.max(Ze,_e.start*ke),dt=Math.min(dt,(_e.start+_e.count)*ke)),Ce!==null?(Ze=Math.max(Ze,0),dt=Math.min(dt,Ce.count)):Oe!=null&&(Ze=Math.max(Ze,0),dt=Math.min(dt,Oe.count));const wt=dt-Ze;if(wt<0||wt===1/0)return;O.setup(H,$,Ue,q,Ce);let Rt,xt=ce;if(Ce!==null&&(Rt=G.get(Ce),xt=te,xt.setIndex(Rt)),H.isMesh)$.wireframe===!0?(le.setLineWidth($.wireframeLinewidth*re()),xt.setMode(C.LINES)):xt.setMode(C.TRIANGLES);else if(H.isLine){let ze=$.linewidth;ze===void 0&&(ze=1),le.setLineWidth(ze*re()),H.isLineSegments?xt.setMode(C.LINES):H.isLineLoop?xt.setMode(C.LINE_LOOP):xt.setMode(C.LINE_STRIP)}else H.isPoints?xt.setMode(C.POINTS):H.isSprite&&xt.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ir("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))xt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ze=H._multiDrawStarts,Mt=H._multiDrawCounts,at=H._multiDrawCount,on=Ce?G.get(Ce).bytesPerElement:1,Zi=Me.get($).currentProgram.getUniforms();for(let cn=0;cn<at;cn++)Zi.setValue(C,"_gl_DrawID",cn),xt.render(ze[cn]/on,Mt[cn])}else if(H.isInstancedMesh)xt.renderInstances(Ze,wt,H.count);else if(q.isInstancedBufferGeometry){const ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Mt=Math.min(q.instanceCount,ze);xt.renderInstances(Ze,wt,Mt)}else xt.render(Ze,wt)};function Bn(A,V,q){A.transparent===!0&&A.side===bn&&A.forceSinglePass===!1?(A.side=Qt,A.needsUpdate=!0,pr(A,V,q),A.side=wi,A.needsUpdate=!0,pr(A,V,q),A.side=bn):pr(A,V,q)}this.compile=function(A,V,q=null){q===null&&(q=A),y=U.get(q),y.init(V),L.push(y),q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(y.pushLight(H),H.castShadow&&y.pushShadow(H))}),y.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Ue=_e[Ae];Bn(Ue,q,H),$.add(Ue)}else Bn(_e,q,H),$.add(_e)}),y=L.pop(),$},this.compileAsync=function(A,V,q=null){const $=this.compile(A,V,q);return new Promise(H=>{function _e(){if($.forEach(function(Ae){Me.get(Ae).currentProgram.isReady()&&$.delete(Ae)}),$.size===0){H(A);return}setTimeout(_e,10)}he.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let An=null;function au(A){An&&An(A)}function zc(){Pi.stop()}function Bc(){Pi.start()}const Pi=new Gh;Pi.setAnimationLoop(au),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){An=A,ye.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},ye.addEventListener("sessionstart",zc),ye.addEventListener("sessionend",Bc),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(V),V=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,V,x),y=U.get(A,L.length),y.init(V),L.push(y),Le.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ee.setFromProjectionMatrix(Le,Xn,V.reversedDepth),be=this.localClippingEnabled,ie=N.init(this.clippingPlanes,be),v=T.get(A,S.length),v.init(),S.push(v),ye.enabled===!0&&ye.isPresenting===!0){const _e=M.xr.getDepthSensingMesh();_e!==null&&Ea(_e,V,-1/0,M.sortObjects)}Ea(A,V,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(Re,Xe),Be=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Be&&k.addToRenderList(v,A),this.info.render.frame++,ie===!0&&N.beginShadows();const q=y.state.shadowsArray;z.render(q,A,V),ie===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=v.opaque,H=v.transmissive;if(y.setupLights(),V.isArrayCamera){const _e=V.cameras;if(H.length>0)for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const Ce=_e[Ae];Vc($,H,A,Ce)}Be&&k.render(A);for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const Ce=_e[Ae];kc(v,A,Ce,Ce.viewport)}}else H.length>0&&Vc($,H,A,V),Be&&k.render(A),kc(v,A,V);x!==null&&E===0&&(Ee.updateMultisampleRenderTarget(x),Ee.updateRenderTargetMipmap(x)),A.isScene===!0&&A.onAfterRender(M,A,V),O.resetDefaultState(),I=-1,B=null,L.pop(),L.length>0?(y=L[L.length-1],ie===!0&&N.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function Ea(A,V,q,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){$&&qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Le);const Ae=se.update(A),Ue=A.material;Ue.visible&&v.push(A,Ae,Ue,q,qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Ae=se.update(A),Ue=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),qe.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),qe.copy(Ae.boundingSphere.center)),qe.applyMatrix4(A.matrixWorld).applyMatrix4(Le)),Array.isArray(Ue)){const Ce=Ae.groups;for(let ke=0,Ve=Ce.length;ke<Ve;ke++){const Oe=Ce[ke],Ze=Ue[Oe.materialIndex];Ze&&Ze.visible&&v.push(A,Ae,Ze,q,qe.z,Oe)}}else Ue.visible&&v.push(A,Ae,Ue,q,qe.z,null)}}const _e=A.children;for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++)Ea(_e[Ae],V,q,$)}function kc(A,V,q,$){const{opaque:H,transmissive:_e,transparent:Ae}=A;y.setupLightsView(q),ie===!0&&N.setGlobalState(M.clippingPlanes,q),$&&le.viewport(F.copy($)),H.length>0&&fr(H,V,q),_e.length>0&&fr(_e,V,q),Ae.length>0&&fr(Ae,V,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Vc(A,V,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[$.id]===void 0&&(y.state.transmissionRenderTarget[$.id]=new qi(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Ls:Yn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const _e=y.state.transmissionRenderTarget[$.id],Ae=$.viewport||F;_e.setSize(Ae.z*M.transmissionResolutionScale,Ae.w*M.transmissionResolutionScale);const Ue=M.getRenderTarget(),Ce=M.getActiveCubeFace(),ke=M.getActiveMipmapLevel();M.setRenderTarget(_e),M.getClearColor(Q),ae=M.getClearAlpha(),ae<1&&M.setClearColor(16777215,.5),M.clear(),Be&&k.render(q);const Ve=M.toneMapping;M.toneMapping=Ai;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),y.setupLightsView($),ie===!0&&N.setGlobalState(M.clippingPlanes,$),fr(A,q,$),Ee.updateMultisampleRenderTarget(_e),Ee.updateRenderTargetMipmap(_e),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let dt=0,wt=V.length;dt<wt;dt++){const Rt=V[dt],{object:xt,geometry:ze,material:Mt,group:at}=Rt;if(Mt.side===bn&&xt.layers.test($.layers)){const on=Mt.side;Mt.side=Qt,Mt.needsUpdate=!0,Hc(xt,q,$,ze,Mt,at),Mt.side=on,Mt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ee.updateMultisampleRenderTarget(_e),Ee.updateRenderTargetMipmap(_e))}M.setRenderTarget(Ue,Ce,ke),M.setClearColor(Q,ae),Oe!==void 0&&($.viewport=Oe),M.toneMapping=Ve}function fr(A,V,q){const $=V.isScene===!0?V.overrideMaterial:null;for(let H=0,_e=A.length;H<_e;H++){const Ae=A[H],{object:Ue,geometry:Ce,group:ke}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Ue.layers.test(q.layers)&&Hc(Ue,V,q,Ce,Ve,ke)}}function Hc(A,V,q,$,H,_e){A.onBeforeRender(M,V,q,$,H,_e),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(M,V,q,$,A,_e),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,M.renderBufferDirect(q,V,$,H,A,_e),H.side=wi,H.needsUpdate=!0,M.renderBufferDirect(q,V,$,H,A,_e),H.side=bn):M.renderBufferDirect(q,V,$,H,A,_e),A.onAfterRender(M,V,q,$,H,_e)}function pr(A,V,q){V.isScene!==!0&&(V=rt);const $=Me.get(A),H=y.state.lights,_e=y.state.shadowsArray,Ae=H.state.version,Ue=K.getParameters(A,H.state,_e,V,q),Ce=K.getProgramCacheKey(Ue);let ke=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?b:R).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",He),ke=new Map,$.programs=ke);let Ve=ke.get(Ce);if(Ve!==void 0){if($.currentProgram===Ve&&$.lightsStateVersion===Ae)return Wc(A,Ue),Ve}else Ue.uniforms=K.getUniforms(A),A.onBeforeCompile(Ue,M),Ve=K.acquireProgram(Ue,Ce),ke.set(Ce,Ve),$.uniforms=Ue.uniforms;const Oe=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=N.uniform),Wc(A,Ue),$.needsLights=lu(A),$.lightsStateVersion=Ae,$.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ve,$.uniformsList=null,Ve}function Gc(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Wc(A,V){const q=Me.get(A);q.outputColorSpace=V.outputColorSpace,q.batching=V.batching,q.batchingColor=V.batchingColor,q.instancing=V.instancing,q.instancingColor=V.instancingColor,q.instancingMorph=V.instancingMorph,q.skinning=V.skinning,q.morphTargets=V.morphTargets,q.morphNormals=V.morphNormals,q.morphColors=V.morphColors,q.morphTargetsCount=V.morphTargetsCount,q.numClippingPlanes=V.numClippingPlanes,q.numIntersection=V.numClipIntersection,q.vertexAlphas=V.vertexAlphas,q.vertexTangents=V.vertexTangents,q.toneMapping=V.toneMapping}function ou(A,V,q,$,H){V.isScene!==!0&&(V=rt),Ee.resetTextureUnits();const _e=V.fog,Ae=$.isMeshStandardMaterial?V.environment:null,Ue=x===null?M.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:As,Ce=($.isMeshStandardMaterial?b:R).get($.envMap||Ae),ke=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Oe=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let wt=Ai;$.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(wt=M.toneMapping);const Rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=Rt!==void 0?Rt.length:0,ze=Me.get($),Mt=y.state.lights;if(ie===!0&&(be===!0||A!==B)){const $t=A===B&&$.id===I;N.setState($,A,$t)}let at=!1;$.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Mt.state.version||ze.outputColorSpace!==Ue||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isBatchedMesh&&ze.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ze.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ze.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ze.instancingMorph===!1&&H.morphTexture!==null||ze.envMap!==Ce||$.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==N.numPlanes||ze.numIntersection!==N.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Ve||ze.morphTargets!==Oe||ze.morphNormals!==Ze||ze.morphColors!==dt||ze.toneMapping!==wt||ze.morphTargetsCount!==xt)&&(at=!0):(at=!0,ze.__version=$.version);let on=ze.currentProgram;at===!0&&(on=pr($,V,H));let Zi=!1,cn=!1,Us=!1;const yt=on.getUniforms(),en=ze.uniforms;if(le.useProgram(on.program)&&(Zi=!0,cn=!0,Us=!0),$.id!==I&&(I=$.id,cn=!0),Zi||B!==A){le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),yt.setValue(C,"projectionMatrix",A.projectionMatrix),yt.setValue(C,"viewMatrix",A.matrixWorldInverse);const tn=yt.map.cameraPosition;tn!==void 0&&tn.setValue(C,Ie.setFromMatrixPosition(A.matrixWorld)),de.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),B!==A&&(B=A,cn=!0,Us=!0)}if(H.isSkinnedMesh){yt.setOptional(C,H,"bindMatrix"),yt.setOptional(C,H,"bindMatrixInverse");const $t=H.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),yt.setValue(C,"boneTexture",$t.boneTexture,Ee))}H.isBatchedMesh&&(yt.setOptional(C,H,"batchingTexture"),yt.setValue(C,"batchingTexture",H._matricesTexture,Ee),yt.setOptional(C,H,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",H._indirectTexture,Ee),yt.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",H._colorsTexture,Ee));const _n=q.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&J.update(H,q,on),(cn||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,yt.setValue(C,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(en.envMap.value=Ce,en.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(en.envMapIntensity.value=V.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=gg()),cn&&(yt.setValue(C,"toneMappingExposure",M.toneMappingExposure),ze.needsLights&&cu(en,Us),_e&&$.fog===!0&&Ne.refreshFogUniforms(en,_e),Ne.refreshMaterialUniforms(en,$,me,pe,y.state.transmissionRenderTarget[A.id]),Kr.upload(C,Gc(ze),en,Ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Kr.upload(C,Gc(ze),en,Ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(C,"center",H.center),yt.setValue(C,"modelViewMatrix",H.modelViewMatrix),yt.setValue(C,"normalMatrix",H.normalMatrix),yt.setValue(C,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const $t=$.uniformsGroups;for(let tn=0,Ta=$t.length;tn<Ta;tn++){const Li=$t[tn];xe.update(Li,on),xe.bind(Li,on)}}return on}function cu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function lu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(A,V,q){const $=Me.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Me.get(A.texture).__webglTexture=V,Me.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const q=Me.get(A);q.__webglFramebuffer=V,q.__useDefaultFramebuffer=V===void 0};const hu=C.createFramebuffer();this.setRenderTarget=function(A,V=0,q=0){x=A,P=V,E=q;let $=!0,H=null,_e=!1,Ae=!1;if(A){const Ce=Me.get(A);if(Ce.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)Ee.setupRenderTarget(A);else if(Ce.__hasExternalTextures)Ee.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(Ce.__boundDepthTexture!==Oe){if(Oe!==null&&Me.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ee.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);const Ve=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[V])?H=Ve[V][q]:H=Ve[V],_e=!0):A.samples>0&&Ee.useMultisampledRTT(A)===!1?H=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[q]:H=Ve,F.copy(A.viewport),W.copy(A.scissor),Y=A.scissorTest}else F.copy(Ke).multiplyScalar(me).floor(),W.copy(nt).multiplyScalar(me).floor(),Y=st;if(q!==0&&(H=hu),le.bindFramebuffer(C.FRAMEBUFFER,H)&&$&&le.drawBuffers(A,H),le.viewport(F),le.scissor(W),le.setScissorTest(Y),_e){const Ce=Me.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,q)}else if(Ae){const Ce=V;for(let ke=0;ke<A.textures.length;ke++){const Ve=Me.get(A.textures[ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,q,Ce)}}else if(A!==null&&q!==0){const Ce=Me.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(A,V,q,$,H,_e,Ae,Ue=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce){le.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const ke=A.textures[Ue],Ve=ke.format,Oe=ke.type;if(!de.textureFormatReadable(Ve)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(Oe)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&q>=0&&q<=A.height-H&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(V,q,$,H,Te.convert(Ve),Te.convert(Oe),_e))}finally{const ke=x!==null?Me.get(x).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,V,q,$,H,_e,Ae,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ce=Ce[Ae]),Ce)if(V>=0&&V<=A.width-$&&q>=0&&q<=A.height-H){le.bindFramebuffer(C.FRAMEBUFFER,Ce);const ke=A.textures[Ue],Ve=ke.format,Oe=ke.type;if(!de.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.bufferData(C.PIXEL_PACK_BUFFER,_e.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ue),C.readPixels(V,q,$,H,Te.convert(Ve),Te.convert(Oe),0);const dt=x!==null?Me.get(x).__webglFramebuffer:null;le.bindFramebuffer(C.FRAMEBUFFER,dt);const wt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qu(C,wt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ze),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,_e),C.deleteBuffer(Ze),C.deleteSync(wt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,q=0){const $=Math.pow(2,-q),H=Math.floor(A.image.width*$),_e=Math.floor(A.image.height*$),Ae=V!==null?V.x:0,Ue=V!==null?V.y:0;Ee.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,Ae,Ue,H,_e),le.unbindTexture()};const uu=C.createFramebuffer(),du=C.createFramebuffer();this.copyTextureToTexture=function(A,V,q=null,$=null,H=0,_e=null){_e===null&&(H!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Ae,Ue,Ce,ke,Ve,Oe,Ze,dt,wt;const Rt=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(q!==null)Ae=q.max.x-q.min.x,Ue=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Ve=q.min.y,Oe=q.isBox3?q.min.z:0;else{const _n=Math.pow(2,-H);Ae=Math.floor(Rt.width*_n),Ue=Math.floor(Rt.height*_n),A.isDataArrayTexture?Ce=Rt.depth:A.isData3DTexture?Ce=Math.floor(Rt.depth*_n):Ce=1,ke=0,Ve=0,Oe=0}$!==null?(Ze=$.x,dt=$.y,wt=$.z):(Ze=0,dt=0,wt=0);const xt=Te.convert(V.format),ze=Te.convert(V.type);let Mt;V.isData3DTexture?(Ee.setTexture3D(V,0),Mt=C.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ee.setTexture2DArray(V,0),Mt=C.TEXTURE_2D_ARRAY):(Ee.setTexture2D(V,0),Mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,V.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,V.unpackAlignment);const at=C.getParameter(C.UNPACK_ROW_LENGTH),on=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Zi=C.getParameter(C.UNPACK_SKIP_PIXELS),cn=C.getParameter(C.UNPACK_SKIP_ROWS),Us=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Rt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Rt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Oe);const yt=A.isDataArrayTexture||A.isData3DTexture,en=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const _n=Me.get(A),$t=Me.get(V),tn=Me.get(_n.__renderTarget),Ta=Me.get($t.__renderTarget);le.bindFramebuffer(C.READ_FRAMEBUFFER,tn.__webglFramebuffer),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ta.__webglFramebuffer);for(let Li=0;Li<Ce;Li++)yt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(A).__webglTexture,H,Oe+Li),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.get(V).__webglTexture,_e,wt+Li)),C.blitFramebuffer(ke,Ve,Ae,Ue,Ze,dt,Ae,Ue,C.DEPTH_BUFFER_BIT,C.NEAREST);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Me.has(A)){const _n=Me.get(A),$t=Me.get(V);le.bindFramebuffer(C.READ_FRAMEBUFFER,uu),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,du);for(let tn=0;tn<Ce;tn++)yt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_n.__webglTexture,H,Oe+tn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_n.__webglTexture,H),en?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,$t.__webglTexture,_e,wt+tn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,$t.__webglTexture,_e),H!==0?C.blitFramebuffer(ke,Ve,Ae,Ue,Ze,dt,Ae,Ue,C.COLOR_BUFFER_BIT,C.NEAREST):en?C.copyTexSubImage3D(Mt,_e,Ze,dt,wt+tn,ke,Ve,Ae,Ue):C.copyTexSubImage2D(Mt,_e,Ze,dt,ke,Ve,Ae,Ue);le.bindFramebuffer(C.READ_FRAMEBUFFER,null),le.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else en?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Mt,_e,Ze,dt,wt,Ae,Ue,Ce,xt,ze,Rt.data):V.isCompressedArrayTexture?C.compressedTexSubImage3D(Mt,_e,Ze,dt,wt,Ae,Ue,Ce,xt,Rt.data):C.texSubImage3D(Mt,_e,Ze,dt,wt,Ae,Ue,Ce,xt,ze,Rt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,_e,Ze,dt,Ae,Ue,xt,ze,Rt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,_e,Ze,dt,Rt.width,Rt.height,xt,Rt.data):C.texSubImage2D(C.TEXTURE_2D,_e,Ze,dt,Ae,Ue,xt,ze,Rt);C.pixelStorei(C.UNPACK_ROW_LENGTH,at),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,on),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zi),C.pixelStorei(C.UNPACK_SKIP_ROWS,cn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Us),_e===0&&V.generateMipmaps&&C.generateMipmap(Mt),le.unbindTexture()},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&Ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ee.setTextureCube(A,0):A.isData3DTexture?Ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ee.setTexture2DArray(A,0):Ee.setTexture2D(A,0),le.unbindTexture()},this.resetState=function(){P=0,E=0,x=null,le.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}function Yh(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new It;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Ql(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const g=Ql(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ql(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new rn(a,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}const X={coat:3562841,fold:2705476,trim:7443850,olive:6581324,pack:10586977,edge:12823932,leather:5326650,rubber:2436138,metal:5858399,steel:8884875,gun:3161404,orange:13799759,lens:9691863,black:1320997},eh=new D(0,-1,0);class Yt{constructor(e,t){this.parent=e,this.materials=t}parent;materials;buckets={fabric:[],metal:[],glass:[]};add(e,t,n,s=[1,1,1],r=[0,0,0],a="fabric"){const o=e.index?e.toNonIndexed():e;o!==e&&e.dispose(),o.deleteAttribute("uv");const c=new lt().compose(new D(n[0],n[1],n[2]),new Ri().setFromEuler(new zn(r[0],r[1],r[2])),new D(s[0],s[1],s[2]));o.applyMatrix4(c);const l=new We(t),u=new Float32Array(o.getAttribute("position").count*3);for(let h=0;h<u.length;h+=3)u[h]=l.r,u[h+1]=l.g,u[h+2]=l.b;o.setAttribute("color",new rn(u,3)),this.buckets[a].push(o)}oval(e,t,n,s="fabric"){this.add(new hi(1,16,12),e,t,n,[0,0,0],s)}pad(e,t,n,s=[0,0,0],r="fabric"){const a=new Cc,o=.16;a.moveTo(-.5+o,-.5),a.lineTo(.5-o,-.5),a.quadraticCurveTo(.5,-.5,.5,-.5+o),a.lineTo(.5,.5-o),a.quadraticCurveTo(.5,.5,.5-o,.5),a.lineTo(-.5+o,.5),a.quadraticCurveTo(-.5,.5,-.5,.5-o),a.lineTo(-.5,-.5+o),a.quadraticCurveTo(-.5,-.5,-.5+o,-.5);const c=new ma(a,{depth:.72,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.07,bevelThickness:.14,curveSegments:3});c.translate(0,0,-.36),this.add(c,e,t,n,s,r)}cylinder(e,t,n,s,r,a=[0,0,0],o="fabric"){this.add(new mn(n,s,r,16),e,t,[1,1,1],a,o)}seam(e,t,n=.005,s="fabric"){const r=new oa(t.map(a=>new D(a[0],a[1],a[2])));this.add(new va(r,Math.max(8,t.length*4),n,5,!1),e,[0,0,0],[1,1,1],[0,0,0],s)}ring(e,t,n,s,r=[0,0,0],a="metal"){this.add(new Gi(n,s,6,20),e,t,[1,1,1],r,a)}finish(){for(const e of["fabric","metal","glass"]){const t=this.buckets[e];if(!t.length)continue;const n=Yh(t,!1),s=new pt(n,this.materials[e]);s.castShadow=e!=="glass",s.receiveShadow=!0,this.parent.add(s),t.forEach(r=>r.dispose())}}}function Ft(i,e,t,n,s){const r=new gt;return r.name=e,r.position.set(t,n,s),i.add(r),r}function _g(){const i=new gt;i.name="Wayfarer";const e={fabric:new pn({vertexColors:!0,roughness:.91}),metal:new pn({vertexColors:!0,metalness:.68,roughness:.38}),glass:new pn({vertexColors:!0,color:8299932,emissive:5886399,emissiveIntensity:.75,metalness:.55,roughness:.17})};i.userData.materials=e,i.userData.operatorId="wayfarer",i.userData.appearance="";const t=Ft(i,"pelvis-and-spine",0,.99,0),n=Ft(t,"breathing-coat",0,0,0),s=new Yt(n,e),r=[[.19,-.14],[.25,-.1],[.24,.03],[.235,.18],[.27,.38],[.26,.47],[.2,.53],[.12,.55]];s.add(new xa(r.map(([M,w])=>new ve(M,w)),24),X.coat,[0,0,0],[1,1,.68]),s.oval(X.fold,[0,.43,-.015],[.245,.11,.17]),s.cylinder(X.fold,[0,.55,0],.105,.15,.105),s.ring(X.trim,[0,.601,0],.104,.013,[Math.PI/2,0,0],"fabric"),s.pad(X.olive,[0,.31,.157],[.34,.29,.072]),s.pad(X.fold,[0,.31,.203],[.27,.2,.025]),s.pad(X.trim,[-.087,.395,.226],[.072,.018,.008]),s.pad(X.orange,[.075,.4,.226],[.035,.031,.008]);for(const M of[-1,1]){s.seam(X.leather,[[M*.185,.51,-.11],[M*.2,.49,.1],[M*.185,.28,.2],[M*.18,.04,.16]],.028),s.pad(X.steel,[M*.184,.34,.225],[.056,.064,.013],[0,0,M*-.06],"metal"),s.pad(X.leather,[M*.184,.34,.235],[.03,.039,.006]),s.pad(X.olive,[M*.12,.025,.177],[.18,.15,.088],[0,M*.16,0]),s.pad(X.pack,[M*.12,.069,.228],[.164,.055,.025]),s.pad(X.leather,[M*.12,.01,.23],[.023,.11,.012]),s.oval(X.steel,[M*.12,.045,.251],[.012,.012,.006],"metal"),s.seam(X.trim,[[M*.24,.41,.065],[M*.25,.26,.1],[M*.235,.14,.13]],.004);for(let w=0;w<3;w++)s.seam(X.fold,[[M*.15,-.07+w*.045,.13],[M*.23,-.055+w*.045,.09],[M*.24,-.03+w*.045,-.025]],.006)}s.seam(X.metal,[[0,.54,.12],[0,.44,.19],[0,.27,.214],[0,.13,.18]],.005,"metal"),s.pad(X.leather,[0,-.045,.006],[.485,.068,.315]),s.pad(X.steel,[0,-.04,.187],[.07,.055,.021],[0,0,0],"metal"),s.pad(X.rubber,[0,-.04,.201],[.044,.031,.008]),s.finish();const a=Ft(n,"expedition-pack",0,.21,-.205),o=new Yt(a,e);o.pad(X.leather,[0,0,-.025],[.39,.53,.22]),o.pad(X.pack,[0,.015,-.115],[.37,.49,.22]),o.pad(X.edge,[0,.215,-.15],[.38,.105,.24]),o.pad(X.olive,[0,-.075,-.245],[.265,.205,.064]),o.pad(X.pack,[0,.01,-.286],[.275,.055,.022]);for(const M of[-1,1])o.seam(X.leather,[[M*.12,.24,-.05],[M*.12,.24,-.25],[M*.12,-.23,-.25],[M*.12,-.25,-.05]],.018),o.pad(X.steel,[M*.12,.065,-.267],[.048,.065,.013],[0,0,0],"metal"),o.pad(X.leather,[M*.12,.065,-.277],[.024,.04,.008]),o.seam(X.edge,[[M*.175,.16,-.22],[M*.177,-.16,-.22],[M*.15,-.205,-.23]],.004);o.cylinder(X.olive,[0,.34,-.12],.105,.105,.49,[0,0,Math.PI/2]);for(const M of[-1,1]){for(const w of[.04,.073,.095])o.ring(X.fold,[M*.247,.34,-.12],w,.005,[0,Math.PI/2,0],"fabric");o.ring(X.leather,[M*.145,.34,-.12],.105,.013,[0,Math.PI/2,0],"fabric")}o.oval(X.metal,[.245,-.1,-.1],[.075,.13,.085],"metal"),o.cylinder(X.rubber,[.245,.025,-.1],.027,.027,.038),o.seam(X.leather,[[.18,.12,-.03],[.255,-.14,-.02],[.245,-.2,-.1]],.013),o.cylinder(X.metal,[-.21,.41,-.04],.003,.005,.36,[0,0,-.07],"metal"),o.cylinder(X.rubber,[-.205,.255,-.04],.013,.013,.1),o.oval(X.orange,[-.223,.592,-.04],[.011,.014,.011]);for(let M=0;M<5;M++)o.seam(M%2?X.edge:X.pack,[[-.19-M*.007,.12,-.18],[-.28-M*.006,-.02,-.22],[-.27-M*.006,-.23,-.19],[-.18-M*.005,-.2,-.17],[-.19-M*.007,.12,-.18]],.008);o.ring(X.orange,[-.25,-.18,-.27],.039,.007),o.finish();const c=Ft(n,"helmet",0,.69,0),l=new Yt(c,e);l.oval(X.rubber,[0,-.035,0],[.145,.18,.135]),l.oval(X.olive,[0,.045,-.015],[.17,.182,.158]),l.pad(X.metal,[0,.115,.033],[.2,.09,.22],[-.14,0,0],"metal"),l.pad(X.rubber,[0,.022,.137],[.282,.094,.036]),l.oval(X.black,[0,.025,.153],[.132,.048,.036],"metal");for(const M of[-1,1]){l.pad(X.lens,[M*.067,.033,.183],[.096,.025,.014],[0,M*-.14,0],"glass"),l.oval(X.metal,[M*.15,-.004,-.005],[.035,.078,.064],"metal"),l.cylinder(X.rubber,[M*.183,-.005,-.002],.034,.034,.018,[0,0,Math.PI/2]),l.seam(X.pack,[[M*.12,.08,.11],[M*.115,-.095,.105],[M*.067,-.15,.1]],.014),l.oval(X.rubber,[M*.103,-.097,.144],[.052,.051,.041]),l.cylinder(X.metal,[M*.104,-.097,.176],.038,.038,.024,[Math.PI/2,0,0],"metal");for(let w=-2;w<=2;w++)l.pad(X.black,[M*.104+w*.011,-.097,.192],[.004,.046-Math.abs(w)*.008,.005]);l.seam(X.trim,[[M*.04,.218,-.04],[M*.11,.179,-.105],[M*.148,.09,-.11]],.005),l.oval(X.steel,[M*.123,.118,.113],[.01,.01,.008],"metal")}l.pad(X.fold,[0,-.103,.132],[.14,.11,.075],[.14,0,0]),l.pad(X.metal,[0,-.112,.181],[.064,.058,.022],[0,0,0],"metal"),l.seam(X.rubber,[[-.118,-.11,.132],[-.18,-.18,.1],[-.18,-.27,.055],[-.1,-.32,.09]],.017),l.pad(X.orange,[0,.147,.137],[.065,.021,.006]),l.finish();const u=[];for(const M of[-1,1]){const w=Ft(t,M<0?"left-thigh":"right-thigh",M*.145,-.01,0),P=new Yt(w,e);P.oval(X.fold,[0,-.055,0],[.137,.13,.126]),P.cylinder(X.coat,[0,-.21,0],.119,.091,.33),P.oval(X.coat,[0,-.2,0],[.124,.205,.112]),P.pad(X.olive,[M*.097,-.18,.022],[.08,.19,.15],[0,M*-.4,M*.05]),P.pad(X.pack,[M*.122,-.12,.038],[.052,.042,.135],[0,M*-.4,0]),P.seam(X.trim,[[M*.104,-.065,.067],[M*.1,-.21,.076],[M*.072,-.35,.068]],.005);for(let F=0;F<3;F++)P.seam(X.fold,[[-.07,-.3-F*.025,.063],[0,-.286-F*.03,.1],[.073,-.31-F*.025,.06]],.008);P.finish();const E=Ft(w,"knee-hinge",0,-.425,0),x=new Yt(E,e);x.oval(X.fold,[0,-.01,0],[.094,.092,.09]),x.cylinder(X.coat,[0,-.18,0],.085,.067,.3),x.oval(X.coat,[0,-.18,-.01],[.09,.17,.086]),x.pad(X.rubber,[0,-.022,.086],[.163,.17,.043]),x.pad(X.metal,[0,-.021,.117],[.131,.132,.035],[-.1,0,0],"metal"),x.pad(X.olive,[0,-.022,.14],[.081,.063,.012]),x.ring(X.leather,[0,-.075,0],.089,.014,[Math.PI/2,0,0],"fabric"),x.seam(X.trim,[[M*.067,-.115,.05],[M*.073,-.225,.053],[M*.058,-.325,.035]],.004);for(let F=0;F<3;F++)x.ring(X.fold,[0,-.26-F*.027,0],.071-F*.002,.006,[Math.PI/2,0,0],"fabric");x.finish();const I=Ft(E,"hiking-boot",0,-.38,0),B=new Yt(I,e);B.pad(X.rubber,[0,-.133,.043],[.188,.044,.31]),B.pad(X.leather,[0,-.104,.051],[.18,.059,.291]),B.oval(X.leather,[0,-.071,.072],[.093,.067,.159]),B.oval(X.rubber,[0,-.07,.147],[.094,.055,.085]),B.cylinder(X.leather,[0,-.021,-.017],.079,.082,.135),B.ring(X.pack,[0,.036,-.017],.079,.009,[Math.PI/2,0,0],"fabric"),B.pad(X.fold,[0,-.035,.07],[.089,.132,.034],[-.35,0,0]);for(let F=0;F<4;F++){const W=.015-F*.026,Y=.086+F*.014;B.seam(X.edge,[[-.034,W,Y],[.035,W-.021,Y+.009]],.004),B.seam(X.edge,[[.034,W,Y],[-.035,W-.021,Y+.009]],.004);for(const Q of[-1,1])B.oval(X.steel,[Q*.041,W,Y],[.007,.007,.004],"metal")}for(let F=0;F<5;F++)for(const W of[-1,1])B.pad(X.rubber,[W*.085,-.137,-.063+F*.052],[.033,.034,.033],[0,W*.15,0]);B.seam(X.edge,[[-.085,-.095,-.053],[-.09,-.089,.1],[0,-.098,.221],[.09,-.089,.1],[.085,-.095,-.053]],.003),B.finish(),u.push({thigh:w,shin:E,boot:I})}const h=[];for(const M of[-1,1]){const w=Ft(n,M<0?"left-upper-arm":"right-upper-arm",M*.295,.465,0),P=new Yt(w,e);P.oval(X.coat,[0,-.05,0],[.118,.127,.118]),P.cylinder(X.coat,[0,-.18,0],.092,.07,.22),P.oval(X.coat,[0,-.19,0],[.097,.132,.093]),P.pad(X.olive,[M*.081,-.064,.016],[.058,.145,.151],[0,0,M*.14]),P.pad(X.orange,[M*.112,-.067,.042],[.008,.057,.043]),P.seam(X.trim,[[M*.089,-.08,.054],[M*.086,-.17,.058],[M*.06,-.28,.045]],.004);for(let F=0;F<3;F++)P.ring(X.fold,[0,-.225-F*.022,0],.077-F*.003,.005,[Math.PI/2,0,0],"fabric");P.finish();const E=Ft(w,"elbow-hinge",0,-.3,0),x=new Yt(E,e);x.oval(X.fold,[0,-.01,0],[.072,.076,.072]),x.cylinder(X.coat,[0,-.14,0],.075,.053,.24),x.oval(X.coat,[0,-.13,0],[.078,.13,.071]),x.pad(X.metal,[0,-.018,-.062],[.112,.115,.026],[.1,0,0],"metal"),x.pad(X.olive,[0,-.14,-.067],[.093,.135,.021]),x.ring(X.leather,[0,-.236,0],.056,.013,[Math.PI/2,0,0],"fabric"),M<0&&(x.pad(X.rubber,[0,-.19,-.07],[.08,.07,.02]),x.pad(X.lens,[0,-.19,-.086],[.05,.04,.008],[0,0,0],"glass")),x.finish();const I=Ft(E,"gripping-glove",0,-.285,0),B=new Yt(I,e);B.oval(X.leather,[0,0,0],[.049,.049,.041]),B.pad(X.olive,[0,.009,-.03],[.074,.052,.018]);for(let F=0;F<4;F++)B.oval(X.leather,[-.03+F*.02,-.036,.026],[.012,.035,.022]),B.oval(X.pack,[-.03+F*.02,-.01,-.033],[.008,.011,.007]),B.seam(X.fold,[[-.037+F*.02,-.028,.035],[-.03+F*.02,-.03,.048],[-.023+F*.02,-.028,.035]],.0025);B.oval(X.leather,[M*.046,-.003,.026],[.022,.029,.022]),B.finish(),h.push({upper:w,lower:E,hand:I,shoulder:w.position.clone(),target:new D,elbow:new D,direction:new D,wristRotation:new Ri})}const d=Ft(n,"primary-weapon",.17,.25,.32),f={};for(const M of["carbine","smg","scout"]){const w=Ft(d,M,0,0,0);f[M]=w,w.visible=M==="carbine";const P=new Yt(w,e),E=M==="scout",x=M==="smg",I=E?.67:x?.34:.49;P.pad(X.gun,[0,0,.015],[.105,.125,.3]),P.pad(X.metal,[0,.055,.052],[.092,.038,.335],[0,0,0],"metal"),P.pad(X.rubber,[0,-.112,-.088],[.075,.153,.079],[-.26,0,0]),P.pad(X.olive,[0,-.018,-.235],[.075,.072,.19]),P.pad(X.rubber,[0,-.025,-.345],[.087,.135,.06]),P.pad(X.leather,[0,.036,-.245],[.079,.028,.15]),P.cylinder(X.metal,[0,.018,I*.62],.022,.022,I,[Math.PI/2,0,0],"metal"),P.pad(X.olive,[0,.003,.235],[.12,.1,x?.14:.28]),P.cylinder(X.gun,[0,.018,I*1.12+.03],E?.032:.029,E?.032:.029,E?.16:.065,[Math.PI/2,0,0],"metal"),P.cylinder(X.black,[0,.018,I*1.12+(E?.111:.064)],.018,.018,.004,[Math.PI/2,0,0]),P.ring(X.steel,[0,.018,I*1.12+(E?.11:.062)],E?.03:.027,.003);for(let W=0;W<(x?3:6);W++)P.pad(X.rubber,[.061,.009,.13+W*.034],[.009,.033,.019]),P.pad(X.rubber,[-.061,.009,.13+W*.034],[.009,.033,.019]),P.pad(X.metal,[0,.081,-.09+W*.041],[.095,.014,.016],[0,0,0],"metal");P.pad(X.metal,[.058,.015,.002],[.014,.056,.098],[0,0,0],"metal"),P.pad(X.black,[.067,.02,.003],[.006,.03,.067]),P.cylinder(X.steel,[.079,.011,-.018],.008,.008,.03,[0,0,Math.PI/2],"metal");for(const W of[-.098,.109])P.oval(X.steel,[.057,-.032,W],[.006,.006,.006],"metal");if(P.seam(X.metal,[[-.037,-.067,-.05],[-.037,-.122,-.039],[-.037,-.122,.028],[-.037,-.061,.032]],.006,"metal"),P.pad(X.metal,[0,-.077,-.004],[.018,.047,.016],[-.25,0,0],"metal"),E){P.pad(X.metal,[0,.104,-.006],[.055,.055,.13],[0,0,0],"metal"),P.cylinder(X.gun,[0,.147,.015],.041,.034,.255,[Math.PI/2,0,0],"metal"),P.cylinder(X.lens,[0,.147,.145],.034,.034,.006,[Math.PI/2,0,0],"glass");for(const W of[-.054,.076])P.ring(X.steel,[0,.147,W],.037,.006);P.cylinder(X.metal,[0,.195,.02],.018,.018,.025,[0,0,0],"metal")}else P.pad(X.gun,[0,.106,.02],[.071,.069,.061]),P.pad(X.lens,[0,.112,.055],[.047,.034,.007],[0,0,0],"glass");P.seam(X.leather,[[.057,-.015,-.25],[.13,-.24,-.03],[.07,-.11,.28]],.009),P.finish();const B=Ft(w,"magazine",0,-.083,.078),F=new Yt(B,e);F.pad(X.gun,[0,-.093,.012],[.078,x?.25:E?.1:.19,.09],[-.14,0,0]);for(let W=0;W<3;W++)F.pad(X.metal,[.042,-.035-W*.042,.012],[.005,.008,.073],[0,0,0],"metal");F.pad(X.pack,[0,x?-.205:E?-.14:-.19,.029],[.085,.025,.099]),F.finish(),w.userData.magazine=B}const g=Ft(d,"shotgun",0,0,0);f.shotgun=g;const _=new Yt(g,e);_.pad(X.gun,[0,0,0],[.13,.14,.31]),_.pad(X.leather,[0,-.02,-.29],[.12,.15,.3]),_.pad(X.rubber,[0,-.03,-.45],[.15,.19,.055]),_.pad(X.rubber,[0,-.12,-.08],[.08,.17,.08],[-.25,0,0]),_.cylinder(X.steel,[0,.04,.36],.039,.039,.58,[Math.PI/2,0,0],"metal"),_.cylinder(X.gun,[0,-.055,.32],.029,.029,.5,[Math.PI/2,0,0],"metal"),_.cylinder(X.black,[0,.04,.655],.03,.03,.012,[Math.PI/2,0,0]),_.pad(X.metal,[0,.098,.58],[.02,.055,.02]);for(let M=0;M<4;M++)_.cylinder(X.orange,[-.078,-.012,-.1+M*.055],.021,.021,.105,[0,0,0],"metal"),_.cylinder(X.steel,[-.078,.043,-.1+M*.055],.022,.022,.015,[0,0,0],"metal");_.finish();const m=Ft(g,"pump",0,-.06,.3),p=new Yt(m,e);p.pad(X.leather,[0,0,0],[.15,.105,.21]);for(let M=0;M<6;M++)p.ring(X.rubber,[0,0,-.09+M*.036],.066,.008);p.finish(),g.userData.pump=m,g.userData.magazine=Ft(g,"loading-port",0,-.083,0);const v=Ft(n,"medic-badge",.2,.4,.23),y=new Yt(v,e);y.pad(14933712,[0,0,0],[.09,.12,.025]),y.pad(11688002,[0,0,.016],[.06,.022,.006]),y.pad(11688002,[0,0,.016],[.022,.07,.006]),y.finish();const S=Ft(n,"ranger-collar",0,.56,-.02),L=new Yt(S,e);return L.ring(8549200,[0,0,0],.18,.055,[Math.PI/2,0,0],"fabric"),L.finish(),i.userData.medicBadge=v,i.userData.rangerHood=S,i.userData.gun=d,i.userData.weaponId="carbine",i.userData.rig={body:t,chest:n,pack:a,head:c,legs:u,arms:h,weapons:f,time:-1,phase:0,aim:0,reload:0,reloadClock:0,handTarget:new D,inverse:new Ri},Dc(i,0,0,!1,0,0),i}function Dc(i,e,t,n,s,r){const a=i.userData.rig;if(!a)return;const o=i.userData.operatorId||"wayfarer";if(i.userData.appearance!==o){const p={wayfarer:16777215,mender:16759200,ranger:12505236};i.userData.materials.fabric.color.setHex(p[o]??p.wayfarer),i.userData.medicBadge.visible=o==="mender",i.userData.rangerHood.visible=o==="ranger",i.userData.appearance=o}const c=a.time<0?1/60:qn.clamp(e-a.time,0,.08);a.time=e;const l=1-Math.exp(-c*12),u=Math.min(1,Math.abs(t)/4.5),h=qn.clamp((Math.abs(t)-4.5)/3,0,1);a.phase+=c*(7.5+h*4.5)*Math.min(1,Math.abs(t)/.7),a.aim+=((n?1:0)-a.aim)*l,a.reload+=((r>0?1:0)-a.reload)*l,a.reloadClock=r>0?a.reloadClock+c:0;const d=Math.sin(e*2.2),f=Math.sin(a.phase);a.body.position.y=.99+Math.abs(Math.sin(a.phase*2))*.025*u,a.body.rotation.z=f*.024*u,a.chest.rotation.x=.018*d+h*.075*(1-a.aim),a.chest.rotation.y=f*.035*u*(1-a.aim),a.chest.scale.y=1+d*.004,a.head.rotation.set(-.025+a.aim*.055,Math.sin(e*.43)*.035*(1-a.aim),-a.body.rotation.z*.4),a.pack.rotation.x=Math.sin(a.phase-.35)*.025*u,a.pack.rotation.z=-f*.022*u;for(let p=0;p<2;p++){const v=Math.sin(a.phase+p*Math.PI),y=a.legs[p];y.thigh.rotation.x=-v*(.48+h*.2)*u,y.thigh.rotation.z=p===0?.025:-.025,y.shin.rotation.x=Math.max(0,v)*(.7+h*.42)*u+.035,y.boot.rotation.x=-y.thigh.rotation.x*.28-y.shin.rotation.x*.32}const g=i.userData.gun,_=a.weapons[i.userData.weaponId]?i.userData.weaponId:"carbine";for(const p of["carbine","smg","scout","shotgun"])a.weapons[p].visible=p===_;const m=Math.sin(Math.min(1,a.reloadClock/1.6)*Math.PI);g.position.set(.09-a.aim*.01,.29+a.aim*.19+d*.006-a.reload*.03,.205-a.aim*.045-s*.085),g.rotation.set(-.12*(1-a.aim)-s*.11+a.reload*.26,-.075*(1-a.aim)+a.reload*.13,a.reload*-.24+f*.016*u*(1-a.aim)),g.updateMatrix(),a.weapons[_].userData.magazine.position.y=-.083-a.reload*m*.095,a.weapons.shotgun.userData.pump.position.z=.3-Math.sin(Math.min(1,s)*Math.PI)*.09-a.reload*m*.08;for(let p=0;p<2;p++){const v=a.arms[p],y=p===0;if(v.target.set(y?-.035:0,y?-.057:-.12,y?.17:-.089).applyMatrix4(g.matrix),y&&a.reload>.001){a.handTarget.set(-.18,-.1,.17);const w=Math.sin(Math.min(1,a.reloadClock/.75)*Math.PI);v.target.lerp(a.handTarget,a.reload*w),a.reloadClock>.75&&(a.handTarget.set(0,-.2-m*.095,.09).applyMatrix4(g.matrix),v.target.lerp(a.handTarget,a.reload*Math.max(0,1-(a.reloadClock-1.5)*3)))}v.direction.copy(v.target).sub(v.shoulder);const S=qn.clamp(v.direction.length(),.08,.58);v.direction.normalize(),v.target.copy(v.shoulder).addScaledVector(v.direction,S);const L=(.3*.3-.285*.285+S*S)/(2*S),M=Math.sqrt(Math.max(0,.3*.3-L*L));v.elbow.set(y?-.65:.65,-1,-.12),v.elbow.addScaledVector(v.direction,-v.elbow.dot(v.direction)).normalize().multiplyScalar(M).addScaledVector(v.direction,L).add(v.shoulder),v.direction.copy(v.elbow).sub(v.shoulder).normalize(),v.upper.quaternion.setFromUnitVectors(eh,v.direction),a.inverse.copy(v.upper.quaternion).invert(),v.direction.copy(v.target).sub(v.elbow).normalize().applyQuaternion(a.inverse),v.lower.quaternion.setFromUnitVectors(eh,v.direction),v.wristRotation.copy(v.upper.quaternion).multiply(v.lower.quaternion).invert().multiply(g.quaternion),v.hand.quaternion.copy(v.wristRotation)}}class Mg{constructor(e,t){this.camera=e,this.world=t,this.reset()}camera;world;mesh=_g();position=new D(0,0,145);velocity=new D;yaw=0;pitch=-.13;hp=100;armor=50;stamina=100;aim=!1;sprinting=!1;crouching=!1;recoil=0;vertical=0;grounded=!0;keys=new Set;moving=0;fatigue=0;ray=new Ic;target=new D;desired=new D;forward=new D;right=new D;delta=new D;camInitialized=!1;reset(){this.position.set(0,this.world.groundHeight(0,145),145),this.velocity.set(0,0,0),this.yaw=0,this.pitch=-.12,this.hp=100,this.stamina=100,this.vertical=0,this.aim=!1,this.recoil=0,this.keys.clear(),this.fatigue=0,this.sprinting=!1,this.crouching=!1,this.mesh.scale.set(1,1,1),this.camInitialized=!1,this.mesh.rotation.set(0,0,0),this.mesh.position.copy(this.position)}look(e,t,n,s){this.yaw+=e*.002*n,this.pitch=qn.clamp(this.pitch-t*.0016*n*(s?-1:1),-.9,.55)}vault(){this.grounded&&(this.vertical=5.2,this.grounded=!1)}blocked(e,t,n){for(const s of this.world.colliders){const r=this.world.groundHeight(s.x,s.z)+s.height;if(!(n>=r-.15||this.grounded&&r-n<=.38)&&Math.abs(e-s.x)<s.hx+.36&&Math.abs(t-s.z)<s.hz+.36)return!0}return!1}update(e,t,n){this.crouching=this.keys.has("KeyC")||this.keys.has("ControlLeft"),this.sprinting=this.keys.has("ShiftLeft")&&!this.aim&&!this.crouching&&this.stamina>2&&this.keys.has("KeyW"),this.forward.set(Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.right.set(Math.cos(this.yaw),0,Math.sin(this.yaw)),this.desired.set(0,0,0),this.keys.has("KeyW")&&this.desired.add(this.forward),this.keys.has("KeyS")&&this.desired.sub(this.forward),this.keys.has("KeyD")&&this.desired.add(this.right),this.keys.has("KeyA")&&this.desired.sub(this.right);const s=this.sprinting?8.5:this.crouching?2.1:this.aim?2.8:4.5;this.desired.normalize().multiplyScalar(s),this.velocity.lerp(this.desired,1-Math.exp(-18*e)),this.moving=this.velocity.length(),this.sprinting&&this.moving>1?(this.stamina=Math.max(0,this.stamina-e*12),this.fatigue=1.2):(this.fatigue-=e,this.fatigue<=0&&(this.stamina=Math.min(100,this.stamina+e*18))),this.vertical-=15*e,this.position.y+=this.vertical*e;const r=qn.clamp(this.position.x+this.velocity.x*e,-205,205),a=qn.clamp(this.position.z+this.velocity.z*e,-205,205);this.blocked(r,this.position.z,this.position.y)||(this.position.x=r),this.blocked(this.position.x,a,this.position.y)||(this.position.z=a);let o=this.world.groundHeight(this.position.x,this.position.z);for(const c of this.world.colliders)if(Math.abs(this.position.x-c.x)<c.hx+.2&&Math.abs(this.position.z-c.z)<c.hz+.2){const l=this.world.groundHeight(c.x,c.z)+c.height;this.position.y>=l-.4&&(o=Math.max(o,l))}this.position.y<=o?(this.position.y=o,this.vertical<0&&(this.vertical=0),this.grounded=!0):this.grounded=!1,this.mesh.position.copy(this.position),this.mesh.rotation.y=Math.PI-this.yaw,this.mesh.scale.y=this.crouching?.76:1,this.recoil=Math.max(0,this.recoil-e*5),Dc(this.mesh,t,this.moving,this.aim,this.recoil,n?1:0),this.updateCamera(e)}updateCamera(e){const t=this.crouching?1.25:1.7;this.target.copy(this.position),this.target.y+=t;const n=this.aim?2.5:5.2;this.forward.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)),this.right.set(Math.cos(this.yaw),0,Math.sin(this.yaw)),this.desired.copy(this.target).addScaledVector(this.forward,-n).addScaledVector(this.right,this.aim?.7:.85),this.desired.y+=.55,this.delta.copy(this.desired).sub(this.target);const s=this.delta.length();this.ray.set(this.target,this.delta.normalize()),this.ray.far=s;const r=this.ray.intersectObjects(this.world.solids,!1);r.length&&this.desired.copy(this.target).addScaledVector(this.delta,Math.max(.25,r[0].distance-.25)),!this.camInitialized||r.length?(this.camera.position.copy(this.desired),this.camInitialized=!0):this.camera.position.lerp(this.desired,1-Math.exp(-18*e)),this.camera.position.y=Math.max(this.camera.position.y,this.world.groundHeight(this.camera.position.x,this.camera.position.z)+.25),this.target.addScaledVector(this.forward,60),this.camera.lookAt(this.target);const a=this.aim?43:this.sprinting?67:59;this.camera.fov=qn.lerp(this.camera.fov,a,1-Math.exp(-10*e)),this.camera.updateProjectionMatrix()}}function yg(i){const e=[],t=[],n=[],s=[{name:"SCRAP YARD",x:-65,z:70},{name:"RELAY STATION",x:-95,z:-65},{name:"FLOODED DEPOT",x:80,z:-45},{name:"EXTRACTION RIDGE",x:10,z:-160}];let r=7219;const a=()=>(r=r*1664525+1013904223>>>0,r/4294967296),o=T=>(T=qn.clamp(T,0,1),T*T*(3-2*T)),c=(T,U)=>7*o((-U-80)/100)*(.48+.52*o((45-T)/95))+2.6*Math.exp(-((T+155)**2/1600+(U+10)**2/17e3)),l=110,u=4,h=new Float32Array((l+1)*(l+1));for(let T=0;T<=l;T++)for(let U=0;U<=l;U++)h[T*(l+1)+U]=c(U*u-220,T*u-220);function d(T,U){const N=qn.clamp((T+220)/u,0,l-1e-4),z=qn.clamp((U+220)/u,0,l-1e-4),k=Math.floor(N),J=Math.floor(z),ce=N-k,te=z-J,Te=h[J*(l+1)+k],O=h[J*(l+1)+k+1],xe=h[(J+1)*(l+1)+k],fe=h[(J+1)*(l+1)+k+1];return ce+te<=1?Te+(O-Te)*ce+(xe-Te)*te:fe+(xe-fe)*(1-ce)+(O-fe)*(1-te)}function f(T,U="steel"){const N=document.createElement("canvas");N.width=N.height=256;const z=N.getContext("2d");z.fillStyle=T,z.fillRect(0,0,256,256);for(let J=0;J<4200;J++)z.fillStyle=`rgba(${a()>.5?"235,224,188":"31,36,30"},${a()*.15})`,z.fillRect(a()*256,a()*256,a()*4+1,U==="steel"?a()*20:a()*4);if(U==="steel")for(let J=0;J<256;J+=16)z.fillStyle="rgba(15,25,22,.2)",z.fillRect(J,0,3,256),z.fillStyle="rgba(255,244,219,.12)",z.fillRect(J+3,0,2,256);const k=new Ka(N);return k.colorSpace=nn,k.wrapS=k.wrapT=ia,k}const g=f("#879080"),_=f("#91644c"),m=f("#b8b8a4","earth");m.repeat.set(100,100);const p=(T,U)=>new pn({color:T,map:U,roughness:.88,metalness:U===g?.35:.08}),v={steel:p(9608077,g),rust:p(11896162,_),dark:p(3358524),concrete:p(10593423),sage:p(6649956),sand:p(11182468),black:p(2370344),leaf:p(5400391),leaf2:p(7569499),bark:p(6379335),rock:p(8488567),glass:new pn({color:5271150,roughness:.24,metalness:.5}),light:new Tn({color:16765578})},y=new Map,S=new Gt(1,1,1),L=new mn(1,1,1,12),M=new la(1,1),w=new la(1,1),P=new Ot;function E(T,U,N,z,k,J,ce,te,Te,O=0,xe=!1){let fe=y.get(T);fe||(fe={g:U,m:N,matrices:[],solid:xe},y.set(T,fe)),P.position.set(z,k,J),P.rotation.set(0,O,0),P.scale.set(ce,te,Te),P.updateMatrix(),fe.matrices.push(P.matrix.clone())}function x(T,U,N,z,k,J,ce=v.steel,te=!1){E("box"+ce.uuid,S,ce,T,U,N,z,k,J,0,!0),te&&t.push({x:T,z:N,hx:z/2,hz:J/2,height:U+k/2-d(T,N)})}function I(T,U,N,z,k,J=v.steel){E("cyl"+J.uuid,L,J,T,U,N,z,k,z,0,!0)}function B(T,U,N,z=v.dark){const k=T.clone().add(U).multiplyScalar(.5);P.position.copy(k),P.quaternion.setFromUnitVectors(new D(0,1,0),U.clone().sub(T).normalize()),P.scale.set(N,T.distanceTo(U),N),P.updateMatrix();const J="beam"+z.uuid;let ce=y.get(J);ce||(ce={g:S,m:z,matrices:[],solid:!1},y.set(J,ce)),ce.matrices.push(P.matrix.clone())}const F=(T,U,N)=>new D(T,U,N);function W(T,U,N,z,k,J=!1){const ce=new pt(T,U);return ce.position.set(N,z,k),ce.castShadow=!0,ce.receiveShadow=!0,i.add(ce),J&&e.push(ce),ce}const Y=new We(6846564),Q=new We(9475449),ae=new We(10523772),j=new We,pe=(T,U)=>{const N=.5+.25*Math.sin(T*.043+Math.sin(U*.026)*2)+.25*Math.cos(U*.057-T*.018),z=.5+.5*Math.sin(T*.019+U*.025+Math.sin(U*.071));return j.copy(Y).lerp(Q,N).lerp(ae,z*.32)},me=new dr(440,440,l,l);me.rotateX(-Math.PI/2);const Re=me.attributes.position,Xe=new Float32Array(Re.count*3);for(let T=0;T<Re.count;T++){const U=Re.getX(T),N=Re.getZ(T);Re.setY(T,d(U,N)),pe(U,N).toArray(Xe,T*3)}me.setAttribute("color",new rn(Xe,3)),me.computeVertexNormals();const Ke=new pn({map:m,vertexColors:!0,roughness:1});W(me,Ke,0,0,0,!0),i.background=new We(12174787),i.fog=new fa(12174787,.0027);const nt=new Kn({side:Qt,depthWrite:!1,depthTest:!1,toneMapped:!1,uniforms:{time:{value:0},sunDirection:{value:F(-45,80,40).normalize()},top:{value:new We(6459308)},horizon:{value:new We(14997693)},haze:{value:new We(12174787)}},vertexShader:`varying vec3 direction;
      void main(){direction=position;vec4 clip=projectionMatrix*vec4(mat3(viewMatrix)*position,1.0);gl_Position=clip.xyww;}`,fragmentShader:`varying vec3 direction;uniform float time;uniform vec3 sunDirection;uniform vec3 top;uniform vec3 horizon;uniform vec3 haze;
      float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
      float cloud(vec2 p){return noise(p)*.54+noise(p*2.03+7.1)*.28+noise(p*4.09+13.7)*.13+noise(p*8.17)*.05;}
      void main(){
        vec3 d=normalize(direction);float elevation=max(d.y,0.0);
        vec3 color=mix(horizon,top,smoothstep(0.0,.78,elevation));
        color=mix(haze,color,smoothstep(-.07,.035,d.y));
        float sun=max(dot(d,sunDirection),0.0);
        color+=vec3(1.0,.66,.32)*pow(sun,12.0)*.16;
        color+=vec3(1.0,.77,.43)*pow(sun,220.0)*.44;
        color=mix(color,vec3(1.0,.95,.78),smoothstep(.99965,.99986,sun));
        vec2 plane=d.xz/(elevation+.22);
        vec2 drift=vec2(time*.003,time*.0012);
        float lower=cloud(plane*vec2(2.1,5.3)+drift);
        float upper=cloud(plane*vec2(4.6,12.0)-drift*.65+19.0);
        float wisps=smoothstep(.47,.73,lower)*.58+smoothstep(.57,.78,upper)*.3;
        wisps*=smoothstep(.025,.2,d.y);
        vec3 cloudColor=mix(vec3(.69,.76,.79),vec3(1.0,.94,.82),.55+.45*sun);
        color=mix(color,cloudColor,clamp(wisps,0.0,.8));
        gl_FragColor=vec4(color,1.0);
        #include <colorspace_fragment>
      }`}),st=new pt(new hi(1,32,16),nt);st.frustumCulled=!1,st.renderOrder=-100,i.add(st);const ee=[],ie=document.createElement("canvas");ie.width=ie.height=2048;const be=ie.getContext("2d");be.fillStyle="black",be.fillRect(0,0,2048,2048),be.lineCap=be.lineJoin="round";function Le(T,U){const N=new oa(T.map(k=>F(k[0],0,k[1]))),z=Math.ceil(N.getLength());be.beginPath();for(let k=0;k<=z;k++){const J=N.getPointAt(k/z);ee.push({x:J.x,z:J.z,width:U/2+1.5});const ce=(J.x+220)/440*2048,te=(J.z+220)/440*2048;k===0?be.moveTo(ce,te):be.lineTo(ce,te)}be.strokeStyle="white",be.lineWidth=U/440*2048,be.stroke()}Le([[0,154],[-15,118],[-55,103],[-83,98],[-105,66],[-122,12],[-111,-53],[-70,-111],[-40,-160]],8),Le([[0,145],[29,105],[52,52],[91,8],[111,-46],[80,-105],[65,-165]],8),Le([[0,137],[4,94],[-13,45],[12,5],[-8,-43],[12,-90],[6,-137],[25,-173]],6),Le([[-105,60],[-105,32],[-24,30],[39,28],[100,-10]],5),Le([[-115,-55],[-48,-78],[22,-64],[94,-58]],5),Le([[-83,98],[-79,87],[-79,78]],3),Le([[-111,-53],[-103,-70],[-100,-82]],3),Le([[91,8],[80,-15],[79,-38]],3);const Ie=new Ka(ie);Ie.flipY=!1,Ke.onBeforeCompile=T=>{T.uniforms.roadMask={value:Ie},T.vertexShader=`varying vec2 roadUV;
`+T.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
roadUV=(position.xz+220.0)/440.0;`),T.fragmentShader=`uniform sampler2D roadMask; varying vec2 roadUV;
`+T.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float road=texture2D(roadMask,roadUV).r;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.36,.31,.23),road*.85);`)};const qe=(T,U,N=0)=>ee.some(z=>(T-z.x)**2+(U-z.z)**2<(z.width+N)**2);function rt(T,U,N,z=8){const k=document.createElement("canvas");k.width=512,k.height=128;const J=k.getContext("2d");J.fillStyle="#34433d",J.fillRect(0,0,512,128),J.strokeStyle="#c3ba90",J.lineWidth=7,J.strokeRect(10,10,492,108),J.fillStyle="#ddd2ae",J.font="bold 35px monospace",J.textAlign="center",J.fillText(T,256,77);const ce=new Ka(k);ce.colorSpace=nn;const te=d(U,N);W(new Gt(z,2,.15),new pn({map:ce,roughness:.85}),U,te+4,N);for(const Te of[-z*.4,z*.4])x(U+Te,te+2,N,.15,4,.15,v.dark)}function Be(T,U,N=12,z=v.rust){const k=d(T,U);x(T,k+1.7,U,N,3.4,3.6,z,!0);for(const J of[-N/2,N/2])for(const ce of[-1.8,1.8])x(T+J,k+1.7,U+ce,.16,3.55,.16,v.dark);for(const J of[.1,3.35])x(T,k+J,U+1.86,N,.13,.1,v.sand);for(const J of[-.45,.45])x(T+J,k+1.7,U+1.88,.06,2.8,.07,v.dark)}for(const T of[[-80,85],[-57,91],[-93,68],[-45,62],[-89,46],[-58,42],[56,-24],[75,-22],[108,-72],[71,-79]])Be(T[0],T[1],12,a()>.5?v.rust:v.steel);Be(-80,85,12,v.steel),rt("04 / SALVAGE WORKS",-70,106),rt("RELAY  /  NORTH ARRAY",-109,-32),rt("PUMPING DEPOT  /  02",85,14);function re(T,U,N=5,z=12){const k=d(T,U);I(T,k+z/2,U,N,z,v.steel),I(T,k+.3,U,N+1,.6,v.concrete);const J=W(new Ac(N,.9,24),v.dark,T,k+z+.4,U,!0);J.receiveShadow=!0;for(const ce of[z*.35,z*.8]){const te=W(new Gi(N+.3,.12,5,32),v.sand,T,k+ce,U);te.rotation.x=Math.PI/2}for(let ce=0;ce<12;ce++){const te=ce*Math.PI/6;I(T+Math.cos(te)*(N+.4),k+z*.8+.5,U+Math.sin(te)*(N+.4),.045,1,v.dark)}t.push({x:T,z:U,hx:N,hz:N,height:z})}re(119,-32),re(134,-47,6,15),re(120,-66,4,10),re(-124,-70,3,8);function C(T,U,N,z){const k=d(T,U);x(T,k+.1,U,N,.2,z,v.concrete);for(const te of[-N/2,N/2])for(const Te of[-z/2,0,z/2])x(T+te,k+4,U+Te,.4,8,.4,v.dark,!0);x(T,k+3.4,U-z/2,N,6.8,.35,v.steel,!0);for(const te of[-N*.34,N*.34])x(T+te,k+2.5,U+z/2,N*.3,5,.35,v.steel,!0),x(T+te,k+5.9,U+z/2,N*.25,1.1,.4,v.glass);for(const te of[-N/2,N/2]){x(T+te,k+2.3,U,.3,4.6,z,v.steel,!0);for(let Te=-1;Te<=1;Te++)x(T+te,k+5.5,U+Te*z/3,.32,1.5,z*.25,v.glass)}for(const te of[-z/2,0,z/2])B(F(T-N/2,k+7,U+te),F(T,k+9.8,U+te),.2),B(F(T,k+9.8,U+te),F(T+N/2,k+7,U+te),.2);const J=W(new Gt(N*.52,.15,z),v.rust,T-N*.25,k+8.4,U,!0);J.rotation.z=.27;const ce=W(new Gt(N*.5,.15,z*.32),v.steel,T+N*.25,k+8.4,U-z*.34,!0);ce.rotation.z=-.27}C(-69,61,22,18),C(79,-52,24,22);function oe(T,U){const N=d(T,U),z=[F(12,0,0),F(10,7,0),F(7,22,0),F(7.4,31,0),F(8.3,37,0)].map(J=>new ve(J.x,J.y));W(new xa(z,40),v.concrete,T,N+3,U,!0);for(let J=0;J<12;J++){const ce=J*Math.PI/6;B(F(T+Math.cos(ce)*11,N,U+Math.sin(ce)*11),F(T+Math.cos(ce+.1)*11,N+6,U+Math.sin(ce+.1)*11),.8,v.concrete)}for(const J of[4,39.8]){const ce=W(new Gi(J===4?11.8:8.4,.35,6,48),v.sand,T,N+J,U);ce.rotation.x=Math.PI/2}const k=W(new Tc(7.7,40),v.dark,T,N+37.4,U);k.rotation.x=-Math.PI/2,t.push({x:T,z:U,hx:10,hz:10,height:40})}oe(150,37),oe(180,12);function he(T,U){const N=d(T,U);for(const z of[-2,2])for(const k of[-2,2])x(T+z,N+12,U+k,.3,24,.3,v.rust,!0);for(let z=0;z<6;z++){const k=N+z*4;B(F(T-2,k,U-2),F(T+2,k+4,U-2),.13,v.sand),B(F(T+2,k,U+2),F(T-2,k+4,U+2),.13,v.sand)}x(T+8,N+24,U,31,.4,2,v.rust);for(let z=-6;z<23;z+=3)B(F(T+z,N+24,U),F(T+z+3,N+26,U),.15,v.sand),B(F(T+z,N+26,U),F(T+z+3,N+24,U),.15,v.sand);B(F(T-4,N+24,U),F(T,N+31,U),.09),B(F(T,N+31,U),F(T+23,N+24,U),.09),B(F(T+18,N+24,U),F(T+18,N+8,U),.045),x(T+18,N+7.5,U,.7,1,.5,v.dark),x(T-6,N+23,U,4,3,3,v.dark)}he(-101,87),he(109,-5);const de=d(-100,-82);for(const T of[-2,2])for(const U of[-2,2])B(F(-100+T,de,-82+U),F(-100+T*.25,de+30,-82+U*.25),.22,v.steel);for(let T=0;T<7;T++){const U=de+T*4;B(F(-102,U,-84),F(-98,U+4,-84),.14,v.steel),B(F(-98,U,-80),F(-102,U+4,-80),.14,v.steel)}for(const T of[15,24]){const U=W(new hi(3,20,12,0,Math.PI*2,0,.65),v.sand,-100,de+T,-84);U.rotation.x=-Math.PI/2,B(F(-100,de+T,-87),F(-100,de+T,-91),.09,v.dark)}C(-88,-94,15,11);const le=new pn({color:5468009,roughness:.26,metalness:.4,transparent:!0,opacity:.78});for(let T=-112;T<20;T+=12){const U=46+Math.sin(T*.035)*7,N=d(U,T);x(U,N+.02,T,9,.035,12,le);for(const z of[-5.3,5.3])x(U+z,N+.12,T,.55,.24,12,v.concrete)}for(const T of[-88,-44,4])x(46+Math.sin(T*.035)*7,d(46,T)+.18,T,14,.25,7,v.steel);for(let T=-100;T<110;T+=4){x(-139,d(-139,T)+.12,T,5,.2,.4,v.bark);for(const N of[-1.5,1.5])x(-139+N,d(-139+N,T)+.25,T,.12,.22,4,v.dark)}for(const T of[-39,-42]){B(F(114,3+d(114,T),T),F(151,3+d(151,T),T),.65,v.rust);for(const N of[116,132,148])x(N,d(N,T)+1.5,T,.3,3,.8,v.dark);const U=W(new Gi(1,.32,7,12,Math.PI/2),v.rust,114,d(114,T)+2,T);U.rotation.z=Math.PI/2}function we(T,U){const N=d(T,U);x(T,N+1,U,2.8,.4,7,v.dark,!0),x(T,N+1.9,U+2,2.8,2.1,2.3,v.sage),x(T,N+2.25,U+3.19,2.25,.8,.05,v.glass),x(T,N+1.15,U-1.6,2.9,.35,4.5,v.rust);for(const z of[-1.42,1.42]){x(T+z,N+1.8,U-1.6,.12,1.2,4.4,v.rust);for(const k of[-2,2]){const J=W(new mn(.65,.65,.4,12),v.black,T+z,N+.7,U+k,!0);J.rotation.z=Math.PI/2;const ce=W(new mn(.27,.27,.43,8),v.steel,T+z,N+.7,U+k);ce.rotation.z=Math.PI/2}}for(const z of[-.9,.9])x(T+z,N+1.4,U+3.25,.4,.3,.1,v.sand)}we(-48,80),we(96,-93),we(-117,-45);for(const T of[[-21,119],[-79,99],[-112,-37],[103,3],[76,-106],[-41,-143]]){const[U,N]=T,z=d(U,N);I(U,z+4,N,.1,8,v.dark),x(U+1,z+7.9,N,2,.15,.15,v.dark),W(new Gt(.7,.15,.45),v.light,U+1.9,z+7.8,N)}for(const T of[[[-21,119],[-79,99]],[[-79,99],[-112,-37]]]){const[U,N]=T,z=new oa([F(U[0],d(...U)+8,U[1]),F((U[0]+N[0])/2,4,(U[1]+N[1])/2),F(N[0],d(...N)+8,N[1])]);W(new va(z,16,.025,3,!1),v.dark,0,0,0)}function Me(T,U,N){const z=d(T,U),k=new gt;k.position.set(T,z,U);const J=new pt(new Gt(1.35,.75,.85),N===3?v.dark:v.sage);J.position.y=.4,k.add(J);const ce=new pt(new Gt(1.45,.12,.94),v.sand);ce.position.y=.83,k.add(ce);for(const Te of[-.47,.47]){const O=new pt(new Gt(.085,.8,.88),v.dark);O.position.set(Te,.43,0),k.add(O)}const te=new pt(new Gt(.17,.2,.04),v.light);te.position.set(0,.67,.48),k.add(te),i.add(k),n.push({id:n.length,position:k.position.clone(),mesh:k,tier:N,opened:!1})}for(const T of[[-5,134],[12,125],[-23,119],[-39,102],[35,99],[-60,79],[-76,67],[-58,54],[-101,56],[20,61],[65,37],[97,10]])Me(T[0],T[1],1);for(const T of[[-116,-54],[-87,-85],[-77,-62],[-105,-102],[68,-45],[85,-58],[105,-82],[129,-18],[-32,-63],[18,-99]])Me(T[0],T[1],2);for(const T of[[-47,-137],[26,-151],[75,-143],[-80,-126],[128,-96],[148,5]])Me(T[0],T[1],3);for(const T of[[-31,84],[31,-29],[-13,-121]])Me(T[0],T[1],3);const Ee=[F(-40,d(-40,-160),-160),F(65,d(65,-165),-165)],R=[];for(const T of Ee){const U=W(new mn(8,8,.24,8),v.dark,T.x,T.y+.12,T.z);U.receiveShadow=!0;const N=W(new ga(6.6,6.9,48),v.light,T.x,T.y+.26,T.z);N.rotation.x=-Math.PI/2,x(T.x,T.y+.27,T.z,5,.025,.5,v.sand);for(const k of[-2.4,2.4])x(T.x+k,T.y+.27,T.z,.5,.025,4,v.sand);for(const k of[-8,8])B(F(T.x+k,T.y,T.z+3),F(T.x+k*.65,T.y+8,T.z+3),.3,v.dark),x(T.x+k*.65,T.y+8,T.z+3,2,.2,.7,v.light);const z=W(new mn(.11,.11,12,8),new Tn({color:16764805,transparent:!0,opacity:.4}),T.x-6,T.y+6,T.z+5);R.push(z),rt("EVAC / UPLINK",T.x,T.z-9,6)}const b=d(-10,150);for(const T of[-4,4])for(const U of[-3,3])x(-10+T,b+1.6,150+U,.1,3.2,.1,v.bark);const G=W(new Gt(4.4,.05,7),v.sage,-12,b+3.5,150);G.rotation.z=.2;const Z=W(new Gt(4.4,.05,7),v.sage,-8,b+3.5,150);Z.rotation.z=-.2,x(-10,b+.3,150,3,.45,1.4,v.dark),x(-14,b+.7,147,1.2,1.4,1.2,v.rust),x(-6,b+.8,148,1.5,.12,.8,v.sand),I(-6,b+1.1,148,.12,.4,v.light),rt("DUSTFALL / FIELD CAMP",7,156,7);const se=(T,U)=>qe(T,U,3)||Math.hypot(T,U-145)<24||Math.hypot(T+170,U-145)<20||Math.hypot(T-170,U-145)<20||s.some(N=>Math.hypot(T-N.x,U-N.z)<32)||t.some(N=>Math.abs(T-N.x)<N.hx+5&&Math.abs(U-N.z)<N.hz+5)||Math.abs(T)<22||Math.abs(T-(50+Math.sin(U*.02)*32))<12||Math.abs(T-(-90+Math.sin(U*.015)*25))<15;for(let T=0;T<530;T++){const U=a()*410-205,N=a()*410-205;if(se(U,N))continue;const z=d(U,N),k=5+a()*6;E("trunks",L,v.bark,U,z+k*.43,N,.18+a()*.15,k*.86,.18);for(let J=0;J<4;J++){const ce=(a()-.5)*3,te=(a()-.5)*3;E(J%2?"leaves":"leaves2",w,J%2?v.leaf:v.leaf2,U+ce,z+k*(.7+a()*.25),N+te,2+a(),1.7+a()*1.5,2+a(),a()*6)}}const K=new It;K.setAttribute("position",new tt([-.15,0,0,.15,0,0,.03,.7,.03,0,0,-.15,0,0,.15,.04,.55,0],3)),K.computeVertexNormals();const Ne=new pn({color:7831123,side:bn,roughness:1});for(let T=0;T<8500;T++){const U=a()*415-207,N=a()*415-207;if(qe(U,N)||se(U,N)&&a()>.15)continue;const z=.45+a()*.75;E("grass",K,Ne,U,d(U,N)+.01,N,z,z,z,a()*6)}for(let T=0;T<170;T++){const U=a()*Math.PI*2,N=24+a()*22,z=Math.cos(U)*N,k=Math.sin(U)*N-7,J=1+a()*3;qe(z,k,J)||Math.abs(z)<14||Math.abs(k+7)<9||(E("basin-rocks",M,v.rock,z,d(z,k)+J*.35,k,J,J*.8,J*.8,a()*6,!0),t.push({x:z,z:k,hx:J*.65,hz:J*.55,height:J*1.1}))}for(let T=0;T<3;T++){const U=[],N=[],k=390+T*95;for(let te=0;te<=160;te++){const Te=te/160*Math.PI*2,O=20+T*11+Math.sin(Te*5+T)*9+Math.sin(Te*11-T)*6+Math.sin(Te*23+T)*3;if(U.push(Math.cos(Te)*k,-35,Math.sin(Te)*k,Math.cos(Te)*k,O,Math.sin(Te)*k),te<160){const xe=te*2;N.push(xe,xe+2,xe+1,xe+1,xe+2,xe+3)}}const J=new It;J.setAttribute("position",new tt(U,3)),J.setIndex(N);const ce=new pt(J,new Tn({color:[6651259,8229781,9742250][T]}));i.add(ce)}for(const[T,U]of y){const N=new H0(U.g,U.m,U.matrices.length);U.matrices.forEach((z,k)=>N.setMatrixAt(k,z)),N.castShadow=T!=="grass",N.receiveShadow=!0,N.computeBoundingSphere(),i.add(N),U.solid&&e.push(N)}return{solids:e,colliders:t,groundHeight:d,containers:n,zones:s,extractions:Ee,update(T,U){nt.uniforms.time.value=T;for(let N=0;N<R.length;N++){const z=R[N].material;z.opacity=.28+Math.sin(T*2+N)*.1}}}}const Kh=new D(0,1,0),un={Watcher:{hp:95,speed:4.9,radius:1.2,sight:55,range:36,damage:9,windup:.8,interval:2.4},Hound:{hp:150,speed:7.4,radius:.9,sight:44,range:3.6,damage:19,windup:.65,interval:1.9},Warden:{hp:340,speed:2.7,radius:1.35,sight:62,range:52,damage:12,windup:1.05,interval:3.9},Strider:{hp:120,speed:5.4,radius:.55,sight:50,range:34,damage:10,windup:.9,interval:2.9},Leviathan:{hp:1400,speed:3.4,radius:3.2,sight:90,range:58,damage:26,windup:1.5,interval:3.4}},Jh=[[-65,70],[-95,-65],[80,-45],[0,0],[115,65],[5,-135],[-40,10],[60,40],[-130,-110],[125,5],[45,-135],[-20,-70]],Jr=["Watcher","Hound","Warden","Hound"],Zr=[[-125,20],[58,93],[55,-105],[115,120]],ao=["Watcher","Hound","Hound","Warden","Warden","Watcher"],jr=Jh.length*Jr.length,Br=jr+Zr.length,Zn=(i,e=.65,t=.7)=>new pn({color:i,roughness:e,metalness:t}),Pt=Zn(7831152),fs=Zn(11578e3,.43),et=Zn(2371117,.72),je=Zn(10200224,.3,.85),Ht=Zn(13146439,.55),ps=Zn(12105376,.7),_i=Zn(1120795,.5),xs=Zn(3695204,.94,.02),kn=Zn(6772289,1,0),th=Zn(10977889,.96,0),nh=new Map;function bg(i,e,t){const n=[i,e.body,...e.legs.flatMap(r=>[r.pivot,r.knee]),...e.rotors,...e.guns],s=new Set(n);i.updateMatrixWorld(!0);for(let r=0;r<n.length;r++){const a=n[r],o=new Map,c=d=>{if(!(d!==a&&s.has(d))){if(d instanceof pt&&d.children.length===0&&!Array.isArray(d.material)){let f=o.get(d.material);f||(f={regular:[],core:[]},o.set(d.material,f)),(d.userData.core?f.core:f.regular).push(d)}for(const f of d.children)c(f)}};c(a);const l=new lt().copy(a.matrixWorld).invert(),u=new lt;let h=0;for(const[d,f]of o)for(const g of[f.regular,f.core]){const _=`${t}:${r}:${h++}`;if(g.length<2)continue;let m=nh.get(_);if(!m){const v=g.map(y=>{const S=y.geometry.index?y.geometry.toNonIndexed():y.geometry.clone();return u.multiplyMatrices(l,y.matrixWorld),S.applyMatrix4(u)});m=Yh(v,!1)??void 0;for(const y of v)y.dispose();if(!m)continue;nh.set(_,m)}const p=new pt(m,d);p.castShadow=!0,p.receiveShadow=!0,g===f.core&&(p.userData.core=!0);for(const v of g)v.removeFromParent();a.add(p)}}}const ih=new Map;function ya(i,e){let t=ih.get(i);return t||(t=e(),ih.set(i,t)),t}function Sg(i,e,t){return ya(`p${i},${e},${t}`,()=>{const n=Math.min(i,e,t)*.18,s=i/2-n,r=e/2-n,a=Math.min(s,r)*.23,o=new Cc;o.moveTo(-s+a,-r),o.lineTo(s-a,-r),o.lineTo(s,-r+a),o.lineTo(s,r-a),o.lineTo(s-a,r),o.lineTo(-s+a,r),o.lineTo(-s,r-a),o.lineTo(-s,-r+a),o.closePath();const c=new ma(o,{depth:Math.max(.01,t-n*2),bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:n,bevelThickness:n,curveSegments:1});return c.center(),c})}function ba(i,e,t,n,s,r){const a=new pt(e,t);return a.position.set(n,s,r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Fe(i,e,t,n,s,r,a,o){return ba(i,Sg(e,t,n),s,r,a,o)}function St(i,e,t,n,s,r,a,o=e){return ba(i,ya(`c${e},${o},${t}`,()=>new mn(e,o,t,10)),n,s,r,a)}function Mi(i,e,t,n,s,r){return ba(i,ya(`s${e}`,()=>new hi(e,12,8)),t,n,s,r)}function yn(i,e,t,n,s,r,a){return ba(i,ya(`t${e},${t}`,()=>new Gi(e,t,6,20)),n,s,r,a)}function bt(i,e,t,n,s){const r=new D(...e),o=new D(...t).sub(r),c=St(i,n,o.length(),s,0,0,0);return c.position.copy(r).addScaledVector(o,.5),c.quaternion.setFromUnitVectors(Kh,o.normalize()),c}function Eg(i,e,t,n){for(const s of[-e/2+.1,e/2-.1])for(const r of[-t/2+.1,t/2-.1])St(i,.038,.045,je,s,r,n).rotation.x=Math.PI/2}function ht(i,e,t,n,s,r,a,o){const c=new gt;return c.position.set(r,a,o),i.add(c),Fe(c,e,t,n,s,0,0,0),Eg(c,e,t,n/2+.01),c}function Tg(i){const e=new gt,t=new gt;e.add(t);const n=new pn({color:16765322,emissive:16741933,emissiveIntensity:1.6,roughness:.25,metalness:.35}),s={body:t,legs:[],rotors:[],guns:[],core:n,eyeHeight:1.5},r=(a,o,c,l,u)=>{yn(a,o+.045,.065,je,c,l,u);const h=Mi(a,o,n,c,l,u);return h.scale.z=.45,h.userData.core=!0,h};if(i==="Watcher"){t.position.y=3.55,s.eyeHeight=3.55,Fe(t,1.3,.86,1.32,et,0,0,0),ht(t,1.37,.56,.22,Pt,0,.3,.15).rotation.x=-.3,ht(t,.8,.32,.2,Ht,0,-.28,.66).rotation.x=-.4;for(const c of[-1,1]){ht(t,.35,.78,.9,Pt,c*.6,-.02,0).rotation.z=c*-.25,bt(t,[c*.5,0,-.22],[c*1.42,.05,-.18],.12,je),bt(t,[c*.42,-.25,.3],[c*1.3,-.1,.15],.065,et);const l=new gt;l.position.set(c*1.42,.1,-.12),t.add(l),yn(l,.68,.13,Pt,0,0,0).rotation.x=Math.PI/2,yn(l,.69,.045,fs,0,.13,0).rotation.x=Math.PI/2,yn(l,.54,.035,_i,0,-.055,0).rotation.x=Math.PI/2,St(l,.15,.28,et,0,0,0);const u=new gt;l.add(u),s.rotors.push(u);for(let h=0;h<5;h++){const d=new gt;d.rotation.y=h*Math.PI*2/5,u.add(d),Fe(d,.2,.055,.52,je,0,0,.32).rotation.z=.2}for(let h=0;h<3;h++){const d=h*Math.PI*2/3;bt(l,[Math.sin(d)*.15,.17,Math.cos(d)*.15],[Math.sin(d)*.63,.17,Math.cos(d)*.63],.027,fs)}Fe(t,.25,.09,.92,Ht,c*1.45,.23,-.15).rotation.y=c*.25}const a=Fe(t,.85,.62,.3,_i,0,0,.68);a.rotation.x=-.1,r(t,.255,0,.045,.88);for(const c of[-1,1])r(t,.065,c*.41,.2,.79);const o=new gt;o.position.set(0,-.49,.22),t.add(o),s.guns.push(o),Mi(o,.16,et,0,0,0),St(o,.09,.61,je,0,-.035,.35).rotation.x=Math.PI/2,yn(o,.092,.025,_i,0,-.035,.66);for(const c of[-1,1])bt(t,[c*.38,.35,-.43],[c*.62,.85,-.57],.022,je),Mi(t,.04,Ht,c*.62,.85,-.57);for(let c=0;c<5;c++)Fe(t,.65,.035,.05,je,0,-.19+c*.085,-.69)}else if(i==="Hound"){t.position.y=1.56,s.eyeHeight=1.62,Fe(t,.96,.66,1.72,et,0,0,-.08);for(let c=0;c<4;c++)ht(t,1.04,.2,.36,c===0?Ht:Pt,0,.34+Math.sin(c)*.04,.48-c*.39).rotation.x=-.16;for(const c of[-1,1]){St(t,.17,1.27,et,c*.54,-.06,-.15).rotation.x=Math.PI/2;for(let l=0;l<5;l++)yn(t,.17,.035,je,c*.54,-.06,.32-l*.21);ht(t,.19,.48,.68,Pt,c*.62,.02,.17).rotation.z=c*-.22,bt(t,[c*.25,-.18,-.66],[c*.35,.18,.79],.045,je)}const a=new gt;a.position.set(0,.04,.95),t.add(a),St(a,.23,.35,je,0,0,-.17).rotation.x=Math.PI/2,ht(a,.77,.44,.66,Ht,0,.08,.19).rotation.x=-.16,Fe(a,.67,.24,.31,_i,0,-.13,.54),r(a,.15,0,.055,.54);for(const c of[-1,1])Fe(a,.14,.24,.36,ps,c*.29,-.24,.49).rotation.x=-.3,Fe(a,.09,.38,.18,Pt,c*.34,.33,-.04).rotation.z=c*-.3;for(const c of[-1,1])for(const l of[-1,1]){const u=new gt;u.position.set(c*.56,1.47,l*.6),e.add(u),St(u,.22,.3,et,c*.05,0,0).rotation.z=Math.PI/2,St(u,.145,.34,fs,c*.05,0,0).rotation.z=Math.PI/2,bt(u,[c*.16,0,0],[c*.39,-.55,l*-.25],.12,et);const h=ht(u,.3,.62,.28,Pt,c*.27,-.28,l*-.13);h.rotation.z=c*.34,h.rotation.x=l*-.35,bt(u,[c*.12,-.02,.12],[c*.39,-.58,l*-.25+.12],.04,je);const d=new gt;d.position.set(c*.4,-.61,l*-.26),u.add(d),Mi(d,.155,je,0,0,0),bt(d,[0,0,0],[c*.07,-.66,l*.39],.085,et),bt(d,[c*.11,.04,.02],[c*.13,-.48,l*.32],.036,je),Fe(d,.19,.55,.23,ps,c*.06,-.31,l*.18).rotation.x=l*-.48,Fe(d,.35,.13,.49,et,c*.08,-.74,l*.38);for(const f of[-1,1])Fe(d,.09,.095,.27,je,c*.08+f*.105,-.76,l*.4+.18);s.legs.push({pivot:u,knee:d,phase:c===l?0:Math.PI})}const o=bt(t,[0,.15,-.9],[0,.5,-1.65],.055,et);o.userData.tail=!0,r(t,.12,0,.27,-.84)}else if(i==="Strider"){t.position.y=1.45,s.eyeHeight=1.93,n.color.setHex(9556683),n.emissive.setHex(3640724),Fe(t,.68,.72,.39,xs,0,-.03,0),Fe(t,.43,.36,.13,et,0,.04,.24);for(const o of[-1,1])Fe(t,.19,.2,.14,kn,o*.2,-.24,.27),Fe(t,.065,.69,.055,kn,o*.23,0,.24).rotation.z=o*.09,Fe(t,.29,.28,.42,xs,o*.36,.19,0).rotation.z=o*.2;Fe(t,.58,.75,.37,kn,0,.06,-.35),Fe(t,.41,.25,.15,Ht,0,-.16,-.57),St(t,.12,.58,je,-.4,.04,-.35),bt(t,[.29,.35,-.4],[.3,1.13,-.42],.012,je),St(t,.105,.19,th,0,.42,0),Mi(t,.23,th,0,.65,.01).scale.set(.88,1.14,.88),Mi(t,.27,et,0,.78,-.025).scale.set(1,.7,1),Fe(t,.47,.09,.46,Pt,0,.73,.045),Fe(t,.39,.12,.06,_i,0,.67,.22),Fe(t,.29,.065,.035,n,0,.67,.26).userData.core=!0,Fe(t,.27,.15,.13,kn,0,.51,.19);const a=new gt;a.position.set(.16,-.04,.31),t.add(a),s.guns.push(a),bt(a,[.23,.18,-.25],[.31,-.17,-.04],.12,xs),bt(a,[.31,-.17,-.04],[.09,-.12,.2],.085,kn),bt(a,[-.46,.18,-.23],[-.4,-.15,.09],.12,xs),bt(a,[-.4,-.15,.09],[-.04,-.09,.4],.085,kn),Fe(a,.15,.18,.69,et,0,0,.17),Fe(a,.18,.13,.3,Ht,0,-.02,.39),Fe(a,.1,.3,.16,_i,0,-.2,.1).rotation.x=-.18,St(a,.041,.51,je,0,.03,.72).rotation.x=Math.PI/2,Fe(a,.06,.07,.12,je,0,.14,.22),Fe(e,.51,.25,.32,kn,0,1.01,0);for(const o of[-1,1]){const c=new gt;c.position.set(o*.17,.96,0),e.add(c),Fe(c,.25,.45,.29,kn,0,-.21,0),Fe(c,.13,.2,.21,xs,o*.13,-.16,0);const l=new gt;l.position.y=-.44,c.add(l),Fe(l,.25,.19,.13,Pt,0,-.04,.17),Fe(l,.21,.35,.23,kn,0,-.21,0),Fe(l,.27,.18,.41,et,0,-.42,.085),s.legs.push({pivot:c,knee:l,phase:o>0?0:Math.PI})}}else if(i==="Warden"){t.position.y=2.94,s.eyeHeight=3.27,Fe(t,1.65,1.35,.97,et,0,0,0);for(const o of[-1,1]){ht(t,.64,1.05,.3,Pt,o*.58,.07,.5).rotation.z=o*-.22,ht(t,.8,.35,1.04,ps,o*.61,.66,-.03).rotation.z=o*.16,ht(t,.38,.76,.28,Ht,o*.86,-.19,.15).rotation.z=o*.19,St(t,.24,1.1,et,o*.66,-.04,-.69),yn(t,.24,.055,je,o*.66,.35,-.69).rotation.x=Math.PI/2,St(t,.115,.55,je,o*.66,.7,-.69);for(let l=0;l<5;l++)Fe(t,.36,.055,.16,_i,o*.66,-.36+l*.15,-.91);const c=new gt;c.position.set(o*1.19,.06,-.03),t.add(c),s.guns.push(c),Mi(c,.29,je,0,.12,0),ht(c,.57,.8,.7,Pt,o*.03,-.13,.05),bt(c,[o*.18,.21,-.17],[o*.18,-.56,.18],.055,je),Fe(c,.49,.37,1.11,et,0,-.54,.49),ht(c,.58,.23,.64,Ht,0,-.3,.52);for(const l of[-.12,.12])St(c,.095,1.05,je,l,-.53,1).rotation.x=Math.PI/2,St(c,.125,.2,et,l,-.53,1.52).rotation.x=Math.PI/2,yn(c,.093,.034,fs,l,-.53,1.63);for(let l=0;l<4;l++)Fe(c,.09,.29,.3,fs,o*.29,-.52,.17+l*.2)}yn(t,.37,.09,et,0,.02,.58),r(t,.285,0,.02,.65);for(const o of[-1,1])bt(t,[o*.32,.28,.68],[o*.17,-.29,.74],.035,je);Fe(t,.78,.27,.76,je,0,.79,0),ht(t,.69,.38,.5,Pt,0,1.02,.05),Fe(t,.51,.105,.05,n,0,1.04,.32).userData.core=!0;for(const o of[-1,1])r(t,.065,o*.26,.96,.33);const a=Fe(e,1.06,.42,.67,et,0,1.98,0);ht(a,.63,.29,.2,Ht,0,.02,.36);for(const o of[-1,1]){const c=new gt;c.position.set(o*.53,1.95,0),e.add(c),St(c,.25,.3,je,o*.08,0,0).rotation.z=Math.PI/2,bt(c,[0,0,0],[o*.09,-.78,.11],.16,et),ht(c,.51,.72,.49,Pt,o*.05,-.38,.15).rotation.x=-.1,bt(c,[o*.28,-.05,-.1],[o*.3,-.75,.03],.06,je);const l=new gt;l.position.set(o*.1,-.83,.14),c.add(l),St(l,.21,.52,et,0,0,0).rotation.z=Math.PI/2,ht(l,.56,.36,.22,Ht,0,0,.24),bt(l,[0,-.05,0],[0,-.81,-.13],.16,et),ht(l,.49,.72,.39,ps,0,-.49,.04).rotation.x=.15;for(const u of[-1,1])bt(l,[u*.23,-.1,-.12],[u*.23,-.8,-.2],.047,je);Fe(l,.69,.23,.97,et,0,-.97,.17),ht(l,.66,.18,.46,Pt,0,-.87,.42);for(const u of[-1,0,1])Fe(l,.16,.07,.24,je,u*.2,-1.08,.61);s.legs.push({pivot:c,knee:l,phase:o>0?0:Math.PI})}}else if(i==="Leviathan"){t.position.y=5.6,s.eyeHeight=6.4,n.color.setHex(16765600),n.emissive.setHex(14174250),Fe(t,3.4,2.4,2.2,et,0,0,0),ht(t,1.3,1.1,.5,Pt,0,.6,1.1).rotation.x=-.28,ht(t,1.9,.5,.7,Ht,0,-.75,.95).rotation.x=-.35;for(const o of[-1,1]){ht(t,.9,1.7,1.6,ps,o*1.35,.1,0).rotation.z=o*-.2,St(t,.42,2.1,et,o*1.15,-.5,-.9),yn(t,.43,.1,je,o*1.15,.5,-.9).rotation.x=Math.PI/2;const c=new gt;c.position.set(o*1.9,-.35,.5),t.add(c),s.guns.push(c),Mi(c,.5,je,0,.2,0),ht(c,1,1.4,.9,Pt,0,-.3,0),St(c,.19,2.1,je,0,-.65,1.35).rotation.x=Math.PI/2,St(c,.24,.35,et,0,-.65,2.4).rotation.x=Math.PI/2,yn(c,.2,.06,fs,0,-.65,2.6);for(let l=0;l<3;l++)ht(c,.18,.6,.4,Ht,o*.5,-.2+l*.4,-.3)}r(t,.62,0,.1,1.35);for(const o of[-1,1])r(t,.14,o*.55,1.15,.8);Fe(t,.9,.35,1.7,je,0,1.35,-.2).userData.core=!0,Fe(t,1.6,.55,.8,Pt,0,1.75,-.2);for(let o=0;o<4;o++)Fe(t,.5,.09,.5,_i,0,.95-o*.5,-1.25);const a=Fe(e,2.2,.8,1.4,et,0,3.9,0);ht(a,1.2,.5,.4,Ht,0,.1,.7);for(const o of[-1,1]){const c=new gt;c.position.set(o*1,3.8,0),e.add(c),St(c,.45,.55,je,o*.15,0,0).rotation.z=Math.PI/2,bt(c,[0,0,0],[o*.16,-1.5,.25],.3,et),ht(c,1,1.4,.9,Pt,o*.1,-.72,.3).rotation.x=-.12;const l=new gt;l.position.set(o*.18,-1.6,.3),c.add(l),St(l,.38,.9,et,0,0,0).rotation.z=Math.PI/2,ht(l,1.1,.7,.4,Ht,0,0,.5),bt(l,[0,-.05,0],[0,-1.5,-.3],.28,et),ht(l,1,1.4,.7,ps,0,-.95,-.1).rotation.x=.18,Fe(l,1.4,.5,1.8,et,0,-1.9,.35),ht(l,1.3,.35,.8,Pt,0,-2.15,.8);for(const u of[-1,0,1])Fe(l,.32,.14,.5,je,u*.42,-2.15,1.15);s.legs.push({pivot:c,knee:l,phase:o>0?0:Math.PI})}}return bg(e,s,i),{mesh:e,rig:s}}class Ag{constructor(e,t,n){this.scene=e,this.world=t,this.audio=n;const s=Br+ao.length+1;for(let l=0;l<s;l++){const u=l<jr?Jr[l%Jr.length]:l<Br?"Strider":l<s-1?ao[l-Br]:"Leviathan",h=Tg(u),d=new gt;u==="Strider"?(Fe(d,.66,.35,.76,kn,0,.22,0).rotation.z=-.14,Fe(d,.48,.14,.36,xs,0,.43,.13),Fe(d,.1,.12,.94,et,.34,.12,.04).rotation.y=.6):(Fe(d,1.2,.46,.94,et,0,.25,0).rotation.z=-.12,ht(d,1.05,.19,.76,Pt,.12,.51,.02).rotation.z=.13,St(d,.17,.95,je,-.39,.19,.12).rotation.z=.8);const f=new pn({color:10340022,emissive:7389092,emissiveIntensity:.9,roughness:.5});Fe(d,.42,.07,.24,f,.12,.65,.08),yn(d,.36,.08,Ht,.49,.21,-.2).rotation.y=.7,this.scene.add(h.mesh,d),d.visible=!1,this.wrecks.add(d);const g={...h,position:h.mesh.position,type:u,hp:0,maxHp:un[u].hp,state:"IDLE",home:new D,lastKnown:new D,goal:new D,aim:new D,patrolAngle:l*2.4,phase:l*1.73,stateTime:0,sightClock:l*.017,visible:!1,memory:0,suspicion:0,cooldown:1,windup:0,burst:0,distraction:0,searchAngle:0,speed:0,deathTime:0,hitFlash:0,strafe:l%2?1:-1,wreck:{id:1e4+l,position:d.position,mesh:d,tier:2,opened:!1}};h.mesh.traverse(_=>{_.userData.enemy=g}),this.pool.push(g)}const r=new Pc(.065),a=new mn(.025,.025,1,4),o=new Tn({color:16759138}),c=new Tn({color:16758136});for(let l=0;l<64;l++){const u=l<16,h=new pt(u?a:r,u?c:o);h.visible=!1,this.scene.add(h),this.fx.push({mesh:h,velocity:new D,life:0,duration:1,tracer:u})}this.reset()}scene;world;audio;enemies=[];threat=0;kills=0;pool=[];ray=new Ic;hits=[];origin=new D;direction=new D;target=new D;movement=new D;muzzle=new D;end=new D;point=new D;player=new D(0,0,145);camp=new D(0,0,145);fx=[];fxIndex=0;elapsed=0;reinforcements=0;reinforcementClock=14;damageClock=0;alertHeat=0;wrecks=new Set;reset(e){this.enemies.length=0,this.kills=0,this.threat=0,this.alertHeat=0,this.elapsed=0,this.reinforcements=0,this.reinforcementClock=14,this.damageClock=0,this.camp.copy(e??this.player.set(0,0,145)),this.player.copy(this.camp),this.boss=null,this.bossClock=150;for(let t=this.world.containers.length-1;t>=0;t--)this.wrecks.has(this.world.containers[t].mesh)&&this.world.containers.splice(t,1);for(const t of this.fx)t.life=0,t.mesh.visible=!1;for(const t of this.pool)t.hp=0,t.mesh.visible=!1,t.wreck.mesh.visible=!1,t.wreck.opened=!1;for(let t=0;t<jr;t++){const n=Jh[Math.floor(t/Jr.length)],s=t*2.4;this.spawn(this.pool[t],n[0]+Math.sin(s)*12,n[1]+Math.cos(s)*12)}for(let t=0;t<Zr.length;t++)this.spawn(this.pool[jr+t],Zr[t][0],Zr[t][1])}boss=null;bossClock=150;onBoss;safeCamp(e){return(e.x-this.camp.x)**2+(e.z-this.camp.z)**2<900}blocked(e,t,n,s){if(Math.abs(e)>202||Math.abs(t)>202||(e-this.camp.x)**2+(t-this.camp.z)**2<784)return!0;const r=this.world.groundHeight(e,t);for(const a of this.world.colliders)if(Math.abs(e-a.x)<a.hx+n&&Math.abs(t-a.z)<a.hz+n&&this.world.groundHeight(a.x,a.z)+a.height>r+s)return!0;return!1}spawn(e,t,n){const s=un[e.type],r=e.type==="Watcher"?2.7:.45;let a=!1;for(let o=0;o<160;o++){const c=o*2.39996,l=o===0?0:2+Math.sqrt(o)*2,u=t+Math.cos(c)*l,h=n+Math.sin(c)*l;if(!this.blocked(u,h,s.radius,r)){t=u,n=h,a=!0;break}}return a?(e.position.set(t,this.world.groundHeight(t,n),n),e.home.copy(e.position),e.goal.copy(e.position),e.lastKnown.copy(e.position),e.mesh.rotation.set(0,e.phase,0),e.mesh.scale.setScalar(1),e.mesh.visible=!0,e.hp=s.hp,e.state="IDLE",e.stateTime=0,e.sightClock=e.phase%.2,e.visible=!1,e.memory=0,e.suspicion=0,e.cooldown=1.2,e.windup=0,e.burst=0,e.distraction=0,e.speed=0,e.deathTime=0,e.hitFlash=0,e.patrolAngle=e.phase,e.rig.core.emissive.setHex(e.type==="Strider"?3640724:16741933),e.rig.core.emissiveIntensity=1.6,this.enemies.push(e),e.mesh.updateMatrixWorld(!0),!0):!1}change(e,t){e.state!==t&&(e.state=t,e.stateTime=0,t!=="COMBAT"&&(e.windup=0,e.burst=0))}clearLine(e,t){this.direction.copy(t).sub(e);const n=this.direction.length();if(n<.001)return!0;if(this.ray.set(e,this.direction.multiplyScalar(1/n)),this.ray.far=Math.max(0,n-.15),this.ray.near=.05,this.hits.length=0,this.ray.intersectObjects(this.world.solids,!1,this.hits),this.hits.length)return!1;for(let s=1;s<n;s+=2.5){const r=s/n,a=e.x+(t.x-e.x)*r,o=e.z+(t.z-e.z)*r;if(e.y+(t.y-e.y)*r<this.world.groundHeight(a,o)+.08)return!1}return!0}hear(e,t,n="noise"){if(!Number.isFinite(t)||t<=0||!Number.isFinite(e.x)||!Number.isFinite(e.y)||!Number.isFinite(e.z))return;const s=Math.min(135,t);this.alertHeat=Math.min(100,this.alertHeat+Math.min(8,t*.045));for(const r of this.enemies){if(r.hp<=0||r.visible&&r.state==="COMBAT"||n==="noise"&&r.distraction>0)continue;const a=r.position.distanceTo(e);a>s||(this.origin.copy(r.position),this.origin.y+=r.rig.eyeHeight,this.target.copy(e),this.target.y+=1,!(!this.clearLine(this.origin,this.target)&&a>s*.57)&&(r.lastKnown.copy(e),r.memory=8,r.suspicion=Math.max(r.suspicion,.32),r.visible=!1,r.distraction=n==="decoy"?5:0,r.state!=="INVESTIGATE"&&r.state!=="SUSPICIOUS"&&(this.change(r,"SUSPICIOUS"),this.audio.play("robot",r.position))))}}hit(e,t,n){const s=e.userData.enemy;if(!s||s.hp<=0||!Number.isFinite(t)||t<=0)return{hit:!1,killed:!1,critical:!1,type:""};const r=e.userData.core===!0;if(s.hp=Math.max(0,s.hp-t*(r?2:1)),s.hitFlash=.18,s.distraction=0,this.sparks(n,r?7:4),this.alertHeat=Math.min(100,this.alertHeat+3),s.hp===0){this.kills++,this.alertHeat=Math.min(100,this.alertHeat+8),s.windup=0,s.burst=0,s.visible=!1,s.deathTime=.75,s.rig.core.emissiveIntensity=0,this.audio.play("kill",s.position),this.sparks(n,12);const a=s.wreck;let o=s.position.x,c=s.position.z;for(let l=0;l<80;l++){const u=Math.sqrt(l)*1.25,h=l*2.39996,d=s.position.x+Math.cos(h)*u,f=s.position.z+Math.sin(h)*u;if(!this.blocked(d,f,.8,.45)){o=d,c=f;break}}a.position.set(o,this.world.groundHeight(o,c),c),a.mesh.rotation.y=s.mesh.rotation.y,a.mesh.visible=!0,a.opened=!1,this.scene.add(a.mesh),this.world.containers.push(a)}else s.state!=="COMBAT"&&(s.lastKnown.copy(n),s.memory=8,s.suspicion=.65,this.change(s,"SUSPICIOUS"));return{hit:!0,killed:s.hp===0,critical:r,type:s.type}}sparks(e,t){for(let n=0;n<t;n++){const s=this.fx[16+this.fxIndex++%48];s.mesh.position.copy(e),s.mesh.scale.setScalar(.7+Math.random()),s.mesh.visible=!0,s.velocity.set((Math.random()-.5)*5,1.8+Math.random()*4,(Math.random()-.5)*5),s.life=s.duration=.3+Math.random()*.45}}tracer(e,t){const n=this.fx[this.fxIndex++%16];this.direction.copy(t).sub(e);const s=this.direction.length();n.mesh.position.copy(e).addScaledVector(this.direction,.5),n.mesh.scale.set(1,s,1),s>.001&&n.mesh.quaternion.setFromUnitVectors(Kh,this.direction.multiplyScalar(1/s)),n.mesh.visible=!0,n.life=n.duration=.09}perceive(e,t){const n=un[e.type],s=e.position.distanceTo(this.player);if(e.distraction>0&&s>7){e.visible=!1;return}let r=!1;if(!this.safeCamp(this.player)&&s<n.sight*(t?.55:1)){const a=this.player.x-e.position.x,o=this.player.z-e.position.z,c=(Math.sin(e.mesh.rotation.y)*a+Math.cos(e.mesh.rotation.y)*o)/Math.max(.1,Math.hypot(a,o));(s<7||c>(e.state==="COMBAT"||e.state==="SEARCH"?-.55:.08))&&(this.origin.copy(e.position),this.origin.y+=e.rig.eyeHeight,this.target.copy(this.player),this.target.y+=t?.75:1.35,r=this.clearLine(this.origin,this.target))}e.visible=r,r?(e.lastKnown.copy(this.player),e.memory=4.7,e.suspicion=Math.min(1,e.suspicion+(s<12?.42:t?.16:.27)),e.suspicion>=1&&e.state!=="COMBAT"?(this.change(e,"COMBAT"),e.cooldown=Math.max(e.cooldown,.65+Math.random()*.55),this.audio.play("alert",e.position)):(e.state==="IDLE"||e.state==="PATROL"||e.state==="RETURN")&&this.change(e,"SUSPICIOUS")):e.suspicion=Math.max(0,e.suspicion-.065)}move(e,t,n,s,r,a=!1){const o=t-e.position.x,c=n-e.position.z,l=Math.hypot(o,c);if(e.speed=0,l<.35)return;const u=un[e.type],h=Math.min(l,s*r),d=Math.atan2(o,c),f=e.type==="Watcher"?2.7:.45;let g=-1/0,_=e.position.x,m=e.position.z;for(let p=0;p<9;p++){const v=p===0?0:Math.ceil(p/2)*.44*(p%2?e.strafe:-e.strafe),y=d+v,S=e.position.x+Math.sin(y)*h,L=e.position.z+Math.cos(y)*h,M=e.position.x+Math.sin(y)*Math.max(h,u.radius*.65),w=e.position.z+Math.cos(y)*Math.max(h,u.radius*.65);if(this.blocked(S,L,u.radius,f)||this.blocked(M,w,u.radius,f))continue;const P=this.world.groundHeight(S,L);if(Math.abs(P-this.world.groundHeight(e.position.x,e.position.z))>.7)continue;let E=Math.cos(v)*3;for(const x of this.enemies)x!==e&&x.hp>0&&Math.hypot(S-x.position.x,L-x.position.z)<u.radius+un[x.type].radius&&(E-=4);E>g&&(g=E,_=S,m=L)}if(g>-1/0){const p=Math.hypot(_-e.position.x,m-e.position.z);e.speed=p/Math.max(r,.001),e.position.x=_,e.position.z=m,a||this.face(e,d,r)}}face(e,t,n){const s=Math.atan2(Math.sin(t-e.mesh.rotation.y),Math.cos(t-e.mesh.rotation.y));e.mesh.rotation.y+=s*Math.min(1,n*(e.type==="Warden"?2.4:5))}beginAttack(e){e.aim.copy(e.lastKnown),e.aim.y+=e.type==="Hound"?.6:1.1;const t=e.type==="Warden"||e.type==="Leviathan"?1.3:.85;e.aim.x+=(Math.random()-.5)*t,e.aim.z+=(Math.random()-.5)*t,e.aim.y+=(Math.random()-.5)*.55,e.windup=un[e.type].windup,e.burst=e.type==="Leviathan"?4:e.type==="Warden"?3:1,e.type!=="Strider"&&this.audio.play("robot",e.position)}fire(e,t,n){const s=un[e.type];if(this.muzzle.copy(e.position),this.muzzle.y+=e.type==="Leviathan"?5.4:e.type==="Warden"?2.48:e.type==="Watcher"?3.02:e.type==="Strider"?1.44:1.6,e.type==="Warden"||e.type==="Leviathan"){const a=(e.type==="Leviathan"?1.9:1.19)*(e.burst%2?1:-1);this.muzzle.x+=Math.cos(e.mesh.rotation.y)*a,this.muzzle.z-=Math.sin(e.mesh.rotation.y)*a}let r=!1;if(e.type==="Hound"){this.target.copy(this.player),this.target.y+=.7;const a=this.point.copy(e.aim).sub(e.position),o=this.movement.copy(this.player).sub(e.position),c=(a.x*o.x+a.z*o.z)/Math.max(.01,Math.hypot(a.x,a.z)*Math.hypot(o.x,o.z));r=e.position.distanceTo(this.player)<s.range&&c>.72&&this.clearLine(this.muzzle,this.target),this.sparks(e.aim,3)}else{this.direction.copy(e.aim).sub(this.muzzle).normalize(),this.ray.set(this.muzzle,this.direction),this.ray.near=.05,this.ray.far=s.range+8,this.hits.length=0,this.ray.intersectObjects(this.world.solids,!1,this.hits);let a=this.hits.length?this.hits[0].distance:s.range+8;for(let c=.8;c<a;c+=1)if(this.point.copy(this.muzzle).addScaledVector(this.direction,c),this.point.y<this.world.groundHeight(this.point.x,this.point.z)+.06){a=c;break}this.end.copy(this.muzzle).addScaledVector(this.direction,a);const o=n?.95:1.65;for(let c=.35;c<=o;c+=.32){this.target.copy(this.player),this.target.y+=c,this.point.copy(this.target).sub(this.muzzle);const l=this.point.dot(this.direction);if(l>0&&l<a&&this.ray.ray.distanceSqToPoint(this.target)<.34*.34){r=!0,a=l,this.end.copy(this.muzzle).addScaledVector(this.direction,a);break}}this.tracer(this.muzzle,this.end),this.sparks(this.end,2),this.audio.play("shoot-smg",this.muzzle)}r&&!this.safeCamp(this.player)&&this.damageClock<=0&&(this.damageClock=.14,t(s.damage,e.position)),e.burst--,e.burst>0?(e.windup=.22,e.aim.x+=(Math.random()-.5)*.4,e.aim.z+=(Math.random()-.5)*.4):(e.windup=0,e.cooldown=s.interval+Math.random()*.8)}animate(e,t,n){const s=Math.min(1,e.speed/(e.type==="Hound"?5:2)),r=n*(e.type==="Hound"?11:e.type==="Strider"?8:5)+e.phase;if(e.type==="Watcher"){e.rig.body.position.y=3.55+Math.sin(n*2+e.phase)*.18,e.rig.body.rotation.z=Math.sin(n+e.phase)*.045-e.strafe*s*.07,e.rig.body.rotation.x=s*.07;for(const a of e.rig.rotors)a.rotation.y+=t*45}else if(e.type==="Leviathan"){e.rig.body.position.y=5.6+Math.sin(r*2)*s*.14,e.rig.body.rotation.z=Math.sin(r)*s*.05,e.rig.body.rotation.x=e.windup>0?-.06:0;for(const a of e.rig.legs)a.pivot.rotation.x=Math.sin(r+a.phase)*s*.3,a.knee.rotation.x=Math.max(0,-Math.sin(r+a.phase))*s*.4}else{e.rig.body.position.y=(e.type==="Hound"?1.56:e.type==="Strider"?1.45:2.94)+Math.sin(r*2)*s*.055,e.rig.body.rotation.z=Math.sin(r)*s*.035,e.rig.body.rotation.x=e.type==="Hound"&&e.windup>0?-.13:e.type==="Strider"?s*.1:0;for(const a of e.rig.legs)a.pivot.rotation.x=Math.sin(r+a.phase)*s*.37,a.knee.rotation.x=Math.max(0,-Math.sin(r+a.phase))*s*.45}for(const a of e.rig.guns)a.rotation.x=e.windup>0&&e.windup<.23?-.1:0;e.hitFlash=Math.max(0,e.hitFlash-t),e.rig.core.emissiveIntensity=e.hitFlash>0?5:e.windup>0?3.3+Math.sin(n*32)*1.7:e.state==="COMBAT"?2.3:1.3}update(e,t,n,s,r,a){if(e=Math.max(0,Math.min(.08,e)),this.elapsed+=e,this.damageClock-=e,this.player.copy(n),this.bossClock=Math.max(0,150-a),!this.boss&&this.pool.length&&this.bossClock===0){const h=this.pool[this.pool.length-1];for(let d=0;d<24;d++){const f=d*2.39996,g=this.player.x+Math.sin(f)*70,_=this.player.z+Math.cos(f)*70;if(this.spawn(h,g,_)){this.boss=h,this.audio.play("alert",h.position),this.onBoss?.(h.position);break}}}let o=0,c=0;for(const h of this.enemies)h.hp>0&&h.windup>0&&c++;for(const h of this.fx)h.life>0&&(h.life-=e,h.mesh.visible=h.life>0,h.tracer||(h.velocity.y-=e*8,h.mesh.position.addScaledVector(h.velocity,e),h.mesh.scale.multiplyScalar(Math.max(0,1-e*1.8))));const l=this.safeCamp(this.player);for(const h of this.enemies){if(h.hp<=0){h.deathTime>0&&(h.deathTime-=e,h.mesh.rotation.z+=e*1.5,h.mesh.position.y-=e*(h.type==="Watcher"?3.3:.45),h.deathTime<=0&&(h.mesh.visible=!1));continue}if(h.stateTime+=e,h.memory=Math.max(0,h.memory-e),h.distraction=Math.max(0,h.distraction-e),h.cooldown-=e,h.sightClock-=e,h.speed=0,h.sightClock<=0&&(h.sightClock+=.2,this.perceive(h,s)),l&&(h.state==="COMBAT"||h.windup>0)&&(h.visible=!1,h.windup=0,h.burst=0,this.change(h,"RETURN")),h.state==="COMBAT"){o++;const d=h.lastKnown.x-h.position.x,f=h.lastKnown.z-h.position.z,g=Math.hypot(d,f),_=un[h.type];if(this.face(h,Math.atan2(d,f),e),!h.visible&&h.memory<=0)h.windup=0,h.burst=0,this.change(h,"SEARCH"),h.searchAngle=h.phase;else if(h.windup>0)h.windup-=e,h.windup<=0&&this.fire(h,r,s);else{const m=d/Math.max(g,.1),p=f/Math.max(g,.1);if(h.type==="Watcher"&&h.visible){const v=g<15?-1:g>26?1:0;this.move(h,h.position.x+m*v*8+p*h.strafe*7,h.position.z+p*v*8-m*h.strafe*7,_.speed,e,!0)}else if(h.type==="Hound"){const v=g>7&&h.visible?Math.min(7,g*.3)*h.strafe:0;this.move(h,h.lastKnown.x+p*v,h.lastKnown.z-m*v,_.speed,e,!0)}else if(h.type==="Strider"){const v=h.hp<h.maxHp*.4?27:16,y=g<v?-1:g>25||!h.visible?1:0,S=Math.sin(h.stateTime*.85+h.phase)>0?h.strafe:-h.strafe;this.move(h,h.position.x+m*y*10+p*S*5,h.position.z+p*y*10-m*S*5,_.speed*(y<0?1:.72),e,!0)}else h.type==="Warden"||h.type==="Leviathan"?g>27||!h.visible?this.move(h,h.lastKnown.x,h.lastKnown.z,_.speed,e,!0):g<13&&this.move(h,h.position.x-m*5+p*h.strafe*3,h.position.z-p*5-m*h.strafe*3,_.speed*.7,e,!0):this.move(h,h.lastKnown.x,h.lastKnown.z,_.speed*.7,e,!0);h.visible&&h.cooldown<=0&&g<_.range&&c<3&&!l&&(this.beginAttack(h),c++)}}else if(h.state==="SUSPICIOUS")this.face(h,Math.atan2(h.lastKnown.x-h.position.x,h.lastKnown.z-h.position.z),e),h.stateTime>.85&&this.change(h,"INVESTIGATE");else if(h.state==="INVESTIGATE")this.move(h,h.lastKnown.x,h.lastKnown.z,un[h.type].speed*.6,e),(h.position.distanceTo(h.lastKnown)<2.5||h.stateTime>15)&&(this.change(h,"SEARCH"),h.searchAngle=h.phase);else if(h.state==="SEARCH")h.stateTime>10?this.change(h,"RETURN"):(h.searchAngle+=e*.58,this.move(h,h.lastKnown.x+Math.sin(h.searchAngle)*7,h.lastKnown.z+Math.cos(h.searchAngle)*7,un[h.type].speed*.42,e),this.face(h,h.mesh.rotation.y+Math.sin(t*.9+h.phase)*.6,e));else if(h.state==="RETURN")this.move(h,h.home.x,h.home.z,un[h.type].speed*.48,e),(h.position.distanceTo(h.home)<2||h.stateTime>35)&&this.change(h,"IDLE");else if(h.state==="IDLE"){if(this.face(h,h.patrolAngle+Math.sin(t*.45+h.phase)*.65,e),h.stateTime>2.5+h.phase%3){h.patrolAngle+=1.7,h.goal.copy(h.home);const d=h.type==="Strider"?23:13;if(h.goal.x+=Math.sin(h.patrolAngle)*d,h.goal.z+=Math.cos(h.patrolAngle)*d,h.type==="Strider"){let f=1024;for(const g of this.world.containers){if(g.opened||g.position.distanceToSquared(h.home)>1444)continue;const _=g.position.distanceToSquared(h.position);_>16&&_<f&&(f=_,h.goal.copy(g.position))}}this.change(h,"PATROL")}}else this.move(h,h.goal.x,h.goal.z,un[h.type].speed*.38,e),(h.position.distanceTo(h.goal)<1.5||h.stateTime>12)&&this.change(h,"IDLE");h.position.y=this.world.groundHeight(h.position.x,h.position.z),this.animate(h,e,t)}this.alertHeat=Math.max(0,this.alertHeat-e*(o?.12:.9));const u=Math.min(100,this.alertHeat+o*12);if(this.threat+=(u-this.threat)*Math.min(1,e*.8),this.reinforcementClock-=e,!l&&this.reinforcements<ao.length&&this.reinforcementClock<=0&&this.threat>24+this.reinforcements*14){this.reinforcementClock=18;const h=this.pool[Br+this.reinforcements];for(let d=0;d<16;d++){const f=this.elapsed*.7+d*2.39996,g=78+d%3*9,_=this.player.x+Math.sin(f)*g,m=this.player.z+Math.cos(f)*g;if(!this.blocked(_,m,un[h.type].radius,h.type==="Watcher"?2.7:.45)&&(this.origin.set(_,this.world.groundHeight(_,m)+h.rig.eyeHeight,m),this.target.copy(this.player),this.target.y+=1.5,!this.clearLine(this.target,this.origin)&&this.spawn(h,_,m))){h.lastKnown.copy(this.player),h.memory=12,this.change(h,"INVESTIGATE"),this.reinforcements++;break}}}}}const sh=1e-4,kr=i=>Number.isFinite(i)?Math.max(0,Math.min(1,i)):0;class wg{context;master;sfx;music;white;brown;windFilter;windGain;droneGain;droneFilter;volumes={master:.8,sfx:.8,music:.35};ambientStarted=!1;voices=0;nextEnvironment=0;nextModulation=0;environmentPhase=0;environmentPosition={x:0,y:0,z:0};init(){if(typeof window>"u"||navigator.userActivation&&!navigator.userActivation.hasBeenActive&&!navigator.userActivation.isActive)return;if(!this.context){const t=window.AudioContext;if(!t)return;try{const n=new t;this.context=n,this.master=n.createGain(),this.sfx=n.createGain(),this.music=n.createGain();const s=n.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=12,s.ratio.value=5,s.attack.value=.003,s.release.value=.18,this.sfx.connect(s),this.music.connect(s),s.connect(this.master).connect(n.destination),this.master.gain.value=this.volumes.master,this.sfx.gain.value=this.volumes.sfx,this.music.gain.value=this.volumes.music,this.white=this.makeNoise(!1),this.brown=this.makeNoise(!0)}catch{this.context=void 0;return}}const e=this.context;e.state==="running"?this.startAmbience():e.state!=="closed"&&e.resume().then(()=>{e.state==="running"&&this.startAmbience()}).catch(()=>{})}setVolumes(e,t,n){this.volumes.master=kr(e),this.volumes.sfx=kr(t),this.volumes.music=kr(n);const s=this.context?.currentTime??0;this.master?.gain.setTargetAtTime(this.volumes.master,s,.025),this.sfx?.gain.setTargetAtTime(this.volumes.sfx,s,.025),this.music?.gain.setTargetAtTime(this.volumes.music,s,.025)}play(e,t){if(!this.context||this.context.state!=="running"||!this.sfx||this.voices>=64)return;const n=this.context.currentTime,s=.96+Math.random()*.08;let r;switch(e){case"shoot-shotgun":r=this.voice(t,1.1,16,250),this.noise(r,n,.085,.65,"highpass",900),this.tone(r,n,.32,.75,155*s,30,"triangle"),this.noise(r,n+.015,.4,.4,"lowpass",1600),this.noise(r,n+.11,.55,.13,"bandpass",480,.7),this.metal(r,n+.34,.12,1250),this.noise(r,n+.43,.09,.16,"highpass",1800),this.metal(r,n+.52,.1,2100);break;case"shoot-carbine":case"shoot-smg":case"shoot-scout":{const a=e==="shoot-scout",o=e==="shoot-smg";r=this.voice(t,a?1.05:o?.69:.9,12,250),this.noise(r,n,o?.045:.065,.55,"highpass",o?1900:1200),this.tone(r,n,a?.25:.14,a?.66:.48,(a?175:o?245:205)*s,43,"triangle"),this.noise(r,n+.006,a?.45:o?.13:.24,.35,"lowpass",a?1750:2400),this.noise(r,n+.075,a?.6:.27,a?.14:.075,"bandpass",540,.65),this.noise(r,n+.145,a?.32:.13,.035,"lowpass",1200),this.metal(r,n+(o?.12:.19),.045,3100*s),this.metal(r,n+.31,.018,4400*s);break}case"reload":r=this.voice(t,.65,3,25),this.metal(r,n,.12,1700),this.noise(r,n+.1,.2,.11,"bandpass",1150,.6),this.tone(r,n+.2,.09,.13,230,100,"triangle"),this.noise(r,n+.64,.08,.19,"highpass",1400),this.metal(r,n+.7,.13,2350),this.noise(r,n+.96,.11,.15,"bandpass",750,1.2),this.metal(r,n+1.06,.1,1300);break;case"empty":r=this.voice(t,.65,2,15),this.metal(r,n,.09,2100),this.tone(r,n,.035,.14,130,70,"triangle");break;case"step":case"sprint":{const a=e==="sprint";r=this.voice(t,a?.85:.55,2,22),this.tone(r,n,.09,.22,(a?110:90)*s,38,"sine"),this.noise(r,n,.08,.18,"lowpass",520*s),this.noise(r,n+.025,a?.19:.13,.09,"bandpass",1750*s,.5),a&&this.metal(r,n+.05,.012,2200);break}case"hit":r=this.voice(t,.7,5,90),this.noise(r,n,.07,.23,"highpass",1500),this.metal(r,n,.16,1250*s),this.tone(r,n,.09,.16,195,70,"triangle");break;case"kill":r=this.voice(t,.85,7,110),this.noise(r,n,.28,.34,"lowpass",1200),this.tone(r,n,.48,.2,450,35,"sawtooth"),this.metal(r,n+.055,.2,970),this.metal(r,n+.22,.1,1600),this.noise(r,n+.28,.38,.08,"bandpass",3200,.7);break;case"damage":r=this.voice(void 0,.85),this.tone(r,n,.23,.48,95,31,"sine"),this.noise(r,n,.17,.3,"lowpass",650),this.noise(r,n+.015,.08,.12,"bandpass",1500,.5),this.tone(r,n+.03,.42,.02,2100,1750,"sine",.02);break;case"heal":r=this.voice(t,.6,2,18),this.noise(r,n,.27,.15,"highpass",2200),this.noise(r,n+.28,.43,.1,"bandpass",900,.6),this.tone(r,n+.42,.24,.065,440,440,"sine",.025),this.tone(r,n+.59,.35,.05,660,660,"sine",.025);break;case"loot":r=this.voice(t,.6,3,30),this.metal(r,n,.12,1100),this.noise(r,n+.045,.27,.1,"bandpass",650,1.3),this.tone(r,n+.18,.16,.085,740,740,"sine"),this.tone(r,n+.28,.26,.065,1110,1110,"sine");break;case"ui":r=this.voice(void 0,.45),this.noise(r,n,.018,.07,"bandpass",2600,.8),this.tone(r,n,.055,.13,620,490,"sine");break;case"alert":r=this.voice(t,.65,8,120);for(let a=0;a<3;a++)this.tone(r,n+a*.19,.12,.1,730,940,"triangle",.008),this.tone(r,n+a*.19,.12,.045,365,470,"sine");break;case"robot":r=this.voice(t,.55,5,75),this.tone(r,n,.19,.075,240*s,650*s,"sawtooth",.035),this.tone(r,n+.11,.16,.075,1200*s,560,"sine"),this.noise(r,n,.3,.07,"bandpass",820,3),this.metal(r,n+.24,.03,2400);break;case"beacon":r=this.voice(t,.65,10,180);for(let a=0;a<3;a++)this.tone(r,n+a*.34,.26,.11,880,880,"sine",.015),this.tone(r,n+a*.34+.07,.26,.045,1320,1320,"sine",.02);break;case"success":r=this.voice(void 0,.65);for(const[a,o]of[220,330,440,550,660].entries())this.tone(r,n+a*.13,1.7,.07,o,o,"sine",.055),this.tone(r,n+a*.13,1.1,.019,o*2.003,o*2,"sine",.03);this.noise(r,n,.6,.025,"bandpass",1700,.4);break;case"grenade":r=this.voice(t,1.15,18,280),this.noise(r,n,.12,.68,"highpass",700),this.tone(r,n,.85,.8,135,24,"sine"),this.noise(r,n+.018,1.4,.56,"lowpass",850),this.noise(r,n+.18,1.7,.22,"bandpass",260,.65);for(let a=0;a<5;a++)this.metal(r,n+.2+a*.13,.07/(a+1),1700+Math.random()*1800);break}}update(e,t,n){const s=this.context;if(!s||s.state!=="running")return;const r=s.listener;r.positionX?(r.positionX.value=e.x,r.positionY.value=e.y,r.positionZ.value=e.z,r.forwardX.value=t.x,r.forwardY.value=t.y,r.forwardZ.value=t.z,r.upX.value=0,r.upY.value=1,r.upZ.value=0):(r.setPosition(e.x,e.y,e.z),r.setOrientation(t.x,t.y,t.z,0,1,0));const a=s.currentTime,o=kr(n);if(a>=this.nextModulation){this.nextModulation=a+.25;const c=.5+.3*Math.sin(a*.19)+.2*Math.sin(a*.071+1.7);this.windFilter?.frequency.setTargetAtTime(370+c*680,a,.7),this.windGain?.gain.setTargetAtTime(.075+c*.085,a,.8),this.droneGain?.gain.setTargetAtTime(.025+o*.12,a,1.6),this.droneFilter?.frequency.setTargetAtTime(160+o*520,a,1.3)}if(a>=this.nextEnvironment){this.nextEnvironment=a+7+Math.random()*11,this.environmentPhase++;const c=Math.random()*Math.PI*2,l=25+Math.random()*45,u=this.environmentPosition;if(u.x=e.x+Math.sin(c)*l,u.z=e.z+Math.cos(c)*l,u.y=e.y+5+Math.random()*8,this.voices>=48)return;const h=this.voice(u,.38,12,130);if(this.environmentPhase%3===0)this.tone(h,a,2.5,.1,150,105,"triangle",.5),this.tone(h,a+.3,1.9,.05,309,218,"sine",.4),this.noise(h,a+.1,2.1,.08,"bandpass",650,6,.35);else for(let d=0;d<3;d++){const f=1900+Math.random()*750;this.tone(h,a+d*.19,.12,.09,f,f*(d%2?.72:1.25),"sine",.018)}}}makeNoise(e){const t=this.context,n=t.createBuffer(1,t.sampleRate*4,t.sampleRate),s=n.getChannelData(0);let r=0;for(let o=0;o<s.length;o++){const c=Math.random()*2-1;r=(r+.02*c)/1.02,s[o]=e?r*3.5:c}const a=512;for(let o=0;o<a;o++){const c=o/a;s[s.length-a+o]=s[s.length-a+o]*(1-c)+s[o]*c}return n}panner(e,t,n){const s=this.context.createPanner();return s.panningModel="HRTF",s.distanceModel="inverse",s.refDistance=t,s.maxDistance=n,s.rolloffFactor=1.3,s.positionX.value=e.x,s.positionY.value=e.y,s.positionZ.value=e.z,s}voice(e,t=1,n=4,s=100){const r=this.context.createGain();r.gain.value=t;const a={input:r,nodes:[r],pending:0};if(e){const o=this.panner(e,n,s);r.connect(o).connect(this.sfx),a.nodes.push(o)}else r.connect(this.sfx);return this.voices++,a}envelope(e,t,n,s,r){const a=this.context.createGain();return a.gain.setValueAtTime(sh,t),a.gain.linearRampToValueAtTime(s,t+Math.min(r,n*.4)),a.gain.exponentialRampToValueAtTime(sh,t+n),a.connect(e.input),e.nodes.push(a),a}source(e,t,n,s){e.pending++,e.nodes.push(t),t.onended=()=>{if(t.disconnect(),t.onended=null,--e.pending===0){for(const r of e.nodes)r.disconnect();e.nodes.length=0,this.voices--}},t.start(n),t.stop(n+s+.025)}tone(e,t,n,s,r,a,o,c=.003){const l=this.context.createOscillator();l.type=o,l.frequency.setValueAtTime(r,t),l.frequency.exponentialRampToValueAtTime(Math.max(20,a),t+n),l.connect(this.envelope(e,t,n,s,c)),this.source(e,l,t,n)}noise(e,t,n,s,r,a,o=.7,c=.002){const l=this.context,u=l.createBufferSource();u.buffer=this.white,u.loop=!0,u.playbackRate.value=.91+Math.random()*.18;const h=l.createBiquadFilter();h.type=r,h.frequency.value=a,h.Q.value=o,u.connect(h).connect(this.envelope(e,t,n,s,c)),e.nodes.push(h),this.source(e,u,t,n)}metal(e,t,n,s){this.tone(e,t,.11,n,s,s*.94,"sine"),this.tone(e,t,.065,n*.45,s*1.483,s*1.47,"sine"),this.noise(e,t,.014,n*.5,"highpass",2800)}startAmbience(){if(this.ambientStarted)return;this.ambientStarted=!0;const e=this.context,t=e.currentTime;this.nextEnvironment=t+5,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=650,this.windFilter.Q.value=.55;const n=e.createBiquadFilter();n.type="highpass",n.frequency.value=75,this.windGain=e.createGain(),this.windGain.gain.setValueAtTime(0,t),this.windGain.gain.linearRampToValueAtTime(.12,t+3);const s=e.createBufferSource();s.buffer=this.brown,s.loop=!0,s.connect(n).connect(this.windFilter).connect(this.windGain).connect(this.sfx),s.start();const r=e.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.045,t+4);const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const o=this.panner({x:-45,y:12,z:-45},35,270);r.connect(a).connect(o).connect(this.sfx);for(const u of[49,98.4,147]){const h=e.createOscillator();h.type="triangle",h.frequency.value=u,h.connect(r),h.start()}const c=e.createOscillator(),l=e.createGain();c.frequency.value=.37,l.gain.value=.008,c.connect(l).connect(r.gain),c.start(),this.droneGain=e.createGain(),this.droneGain.gain.setValueAtTime(0,t),this.droneGain.gain.linearRampToValueAtTime(.025,t+5),this.droneFilter=e.createBiquadFilter(),this.droneFilter.type="lowpass",this.droneFilter.frequency.value=180,this.droneFilter.Q.value=.5,this.droneFilter.connect(this.droneGain).connect(this.music);for(const[u,h]of[55,82.41,110.3].entries()){const d=e.createOscillator();d.type=u===1?"triangle":"sine",d.frequency.value=h;const f=e.createGain();f.gain.value=u===0?.65:.2,d.connect(f).connect(this.droneFilter),d.start();const g=e.createOscillator(),_=e.createGain();g.frequency.value=.037+u*.019,_.gain.value=3,g.connect(_).connect(d.detune),g.start()}}}const Rg=[["carbine","AR-4 Carbine","WEAPON","COMMON",240,1,"30-round automatic. Balanced recoil, reliable at medium range.","⌁"],["smg","VEK-9 SMG","WEAPON","UNCOMMON",320,1,"36-round close-range automatic. Fast and controllable.","⌁"],["scout","M77 Scout","WEAPON","RARE",580,1,"10-round semi-auto. Powerful precision fire.","⌁"],["shotgun","JN-2 Breacher","WEAPON","UNCOMMON",410,1,"Pump-action 6-round slug thrower. Heavy damage up close.","⌁"],["shotAmmo","Breacher Shells","AMMO","UNCOMMON",3,48,"6-gauge slug shells.","▥"],["rifleAmmo","Rifle Ammo","AMMO","COMMON",2,120,"Carbine ammunition.","▥"],["smgAmmo","SMG Ammo","AMMO","COMMON",1,144,"Compact ammunition.","▥"],["scoutAmmo","Marksman Ammo","AMMO","UNCOMMON",4,60,"Precision ammunition.","▥"],["patch","Field Patch","HEALING","COMMON",35,5,"Q: apply for two seconds to restore 45 health. Sprinting or shooting cancels.","✚"],["plate","Armor Plate","ARMOR","UNCOMMON",60,3,"Use in backpack to restore 30 armor durability.","⬡"],["armor1","Field Vest I","ARMOR","COMMON",120,1,"50 durability. Absorbs 45% of incoming damage.","⬡"],["armor2","Field Vest II","ARMOR","RARE",280,1,"80 durability. Absorbs 45% of incoming damage.","⬡"],["grenade","Pulse Grenade","UTILITY","UNCOMMON",90,3,"G: short-fuse pulse blast. 145 damage within 9 meters.","◉"],["beacon","Signal Beacon","UTILITY","RARE",180,2,"Use from backpack to distract nearby machines.","⌖"],["circuit","Circuit Bundle","MATERIAL","COMMON",28,6,"Salvaged control traces from dormant machines.","⌘"],["glass","Optic Glass","MATERIAL","UNCOMMON",65,4,"Uncracked industrial lens blanks.","◇"],["servo","Servo Core","MATERIAL","RARE",170,3,"A compact articulated drive in working condition.","⚙"],["cell","Power Cell","MATERIAL","UNCOMMON",85,4,"A sealed, rechargeable energy cartridge.","▰"],["relay","Industrial Relay","MATERIAL","COMMON",40,5,"Mechanical switching assembly.","▧"],["module","Cipher Module","VALUABLE","EPIC",650,1,"A sealed memory module. Its silence is expensive.","◈"],["fiber","Synthetic Fiber","MATERIAL","COMMON",22,8,"Woven thermal insulation recovered from conduits.","≋"],["processor","Rare Processor","VALUABLE","RARE",290,2,"Intact logic array from a pre-fall controller.","▣"]],it=Object.fromEntries(Rg.map(([i,e,t,n,s,r,a,o])=>[i,{id:i,name:e,category:t,rarity:n,value:s,stack:r,description:a,icon:o}])),cr=[{id:"carbine",name:"AR-4 CARBINE",mag:30,damage:27,interval:.115,reload:1.9,spread:.012,range:90,ammo:"rifleAmmo"},{id:"smg",name:"VEK-9 SMG",mag:36,damage:18,interval:.075,reload:1.55,spread:.016,range:45,ammo:"smgAmmo"},{id:"scout",name:"M77 SCOUT",mag:10,damage:82,interval:.58,reload:2.4,spread:.004,range:180,ammo:"scoutAmmo"},{id:"shotgun",name:"JN-2 BREACHER",mag:6,damage:96,interval:.9,reload:2.2,spread:.02,range:30,ammo:"shotAmmo"}],Zh="dustfall.save.1";function Qr(){return{stash:[{id:"carbine",qty:3},{id:"smg",qty:2},{id:"scout",qty:1},{id:"shotgun",qty:1},{id:"shotAmmo",qty:24},{id:"rifleAmmo",qty:600},{id:"smgAmmo",qty:432},{id:"scoutAmmo",qty:120},{id:"patch",qty:15},{id:"armor1",qty:4},{id:"armor2",qty:1},{id:"grenade",qty:6}],equipment:{primary:"carbine",secondary:"smg",armor:"armor1",heal:3,utility:1,operator:"wayfarer",ammo:5,extra:[]},settings:{sensitivity:1,master:.65,sfx:.85,music:.35,quality:"MEDIUM",invert:!1},stats:{raids:0,wins:0,kills:0,value:0},inRaid:!1,hinted:!1}}function $n(i){try{const e={};for(const t of i.stash)e[t.id]=(e[t.id]??0)+t.qty;i.stash=Object.entries(e).filter(([,t])=>t>0).map(([t,n])=>({id:t,qty:n})),localStorage.setItem(Zh,JSON.stringify(i))}catch{document.dispatchEvent(new CustomEvent("save-error"))}}function Cg(){try{const i=localStorage.getItem(Zh);if(!i)return Qr();const e=JSON.parse(i),t=Qr();if(!Array.isArray(e.stash))return t;t.stash=e.stash.filter(n=>it[n.id]&&Number.isFinite(n.qty)&&n.qty>0).map(n=>({id:n.id,qty:Math.floor(n.qty)})),t.equipment={...t.equipment,...e.equipment},t.settings={...t.settings,...e.settings},t.stats={...t.stats,...e.stats},t.hinted=!!e.hinted,t.inRaid=!1;for(const n of["primary","secondary","armor"])t.stash.some(s=>s.id===t.equipment[n])||(t.equipment[n]="");return e.inRaid&&(t.equipment.primary=t.stash.find(n=>it[n.id].category==="WEAPON")?.id||"",t.equipment.secondary="",t.equipment.armor=t.stash.find(n=>n.id==="armor1"||n.id==="armor2")?.id||"",t.equipment.primary||(t.stash.push({id:"carbine",qty:1},{id:"rifleAmmo",qty:90},{id:"patch",qty:2}),t.equipment.primary="carbine"),$n(t)),t}catch{return Qr()}}function In(i,e,t,n=24){if(!it[e])return t;for(const s of i){if(s.id!==e)continue;const r=Math.min(t,Math.max(0,it[e].stack-s.qty));if(s.qty+=r,t-=r,!t)return 0}for(;t>0&&i.length<n;){const s=Math.min(t,it[e].stack);i.push({id:e,qty:s}),t-=s}return t}function Un(i,e,t){if(Et(i,e)<t)return!1;for(let n=i.length-1;n>=0&&t;n--){if(i[n].id!==e)continue;const s=Math.min(t,i[n].qty);i[n].qty-=s,t-=s,i[n].qty||i.splice(n,1)}return!0}function Et(i,e){return i.reduce((t,n)=>t+(n.id===e?n.qty:0),0)}function Pg(i){const e=i>1?["servo","processor","cell","glass","module","shotgun","shotAmmo"]:["circuit","fiber","relay","rifleAmmo","patch","shotAmmo"];return Array.from({length:i>1?3:2},()=>{const t=e[Math.floor(Math.random()*e.length)];return{id:t,qty:t==="rifleAmmo"?30:t==="shotAmmo"?6:t==="shotgun"||t==="module"?1:1+Math.floor(Math.random()*2)}})}const oo=["wayfarer","mender","ranger"],Lg=["A steady hand beyond the wall.","Leave no one in the dust.","Read the horizon. Move unseen."],Pn=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Vr=i=>i.toLocaleString("en-US"),Gs=i=>cr.find(e=>e.id===i);function co(i,e=""){let n={carbine:'<path d="M8 35h15l8-10h38l8 5h28v5H78l-4 6H52l-5 17H36l5-19H29L13 49H7z"/><path d="M49 20h18v5H49zm34 17h13v4H83z"/>',smg:'<path d="M14 32h16l9-8h35l6 5h20v6H79l-9 7H56l-3 17H41V42H28L13 45z"/><path d="M44 19h20v5H44zm30 23h7v9h-7z"/>',scout:'<path d="M5 38h23l8-7h45l5 2h24v4H83l-4 6H53l-4 12H39l3-13H30L9 50H5z"/><path d="M47 21h23v8H47zm-4 1h5v6h-5zm27-1h5v8h-5z"/>',shotgun:'<path d="M7 37h25l7-7h33l8 3h29v5H76l-7 7H50l-3 12H36l4-14H30L10 51H6z"/><path d="M66 40h30v6H66z"/>',armor1:'<path d="M40 13l11 7h18l11-7 9 15-10 9v27H41V37l-10-9z"/><path d="M49 36h22v17H49z" fill="var(--kit-surface)"/>',armor2:'<path d="M40 13l11 7h18l11-7 9 15-10 9v27H41V37l-10-9z"/><path d="M48 32h24v24H48z" fill="var(--kit-surface)"/><path d="M52 37h16v14H52z"/>',plate:'<path d="M45 16h30l7 11v25L60 66 38 52V27z"/><path d="M48 29h24v4H48zm0 10h24v4H48z" fill="var(--kit-surface)"/>',patch:'<path d="M35 20h50v42H35z"/><path d="M56 28h8v10h10v8H64v10h-8V46H46v-8h10z" fill="var(--kit-surface)"/>',grenade:'<path d="M52 13h16v11l9 9v24l-9 9H51l-9-9V33l10-9z"/><path d="M69 15h8l9 23-5 3-9-20h-3z"/>',beacon:'<path d="M48 41h24v23H48zm9-24h6v24h-6z"/><path d="M47 19q-14 12 0 24m26-24q14 12 0 24M39 12q-23 19 0 38m42-38q23 19 0 38" fill="none" stroke="currentColor" stroke-width="3"/>'}[i];return!n&&it[i]?.category==="AMMO"&&(n='<path d="M34 29l6-12 6 12v34H34zm20 0l6-12 6 12v34H54zm20 0l6-12 6 12v34H74z"/>'),n||(n='<path d="M41 21h38v38H41zM35 28h6v5h-6zm0 13h6v5h-6zm0 13h6v5h-6zm44-26h6v5h-6zm0 13h6v5h-6zm0 13h6v5h-6z"/><path d="M50 30h20v20H50z" fill="var(--kit-surface)"/>'),`<svg class="kit-icon ${e}" viewBox="0 0 120 80" aria-hidden="true" fill="currentColor">${n}</svg>`}function Ig(i,e,t){const n=e.equipment;n.operator=oo.includes(n.operator)?n.operator:"wayfarer",n.ammo=Math.max(1,Math.min(5,Math.floor(n.ammo||3))),n.extra??=[];let s="ALL",r="primary",a=n.primary||e.stash.find(_=>it[_.id])?.id||"",o="";function c(){const _={},m={},p=(M,w,P)=>{w&&P>0&&(M[w]=(M[w]||0)+P)};for(const M of["primary","secondary","armor"])p(_,n[M],1);for(const M of["primary","secondary"]){const w=Gs(n[M]);w&&(p(_,w.ammo,w.mag*n.ammo),p(m,w.ammo,w.mag*(n.ammo-1)))}for(const[M,w]of[["patch",n.heal],["grenade",n.utility]])p(_,M,w),p(m,M,w);for(const M of n.extra||[])p(_,M.id,M.qty),p(m,M.id,M.qty);const v=Object.entries(m).reduce((M,[w,P])=>M+Math.ceil(P/(it[w]?.stack||1)),0),y=Object.entries(_).reduce((M,[w,P])=>M+(it[w]?.value||0)*P,0),S=e.stash.reduce((M,w)=>M+(it[w.id]?.value||0)*w.qty,0),L=[];Gs(n.primary)||L.push("Equip a primary weapon."),n.secondary&&!Gs(n.secondary)&&L.push("Replace the invalid secondary weapon.");for(const[M,w]of Object.entries(_)){const P=Et(e.stash,M);w>P&&L.push(`${it[M]?.name||M}: need ${w}, only ${P} in base.`)}return v>24&&L.push(`Backpack is ${v-24} slots over capacity.`),{reserved:_,slots:v,risk:y,value:S,reasons:L}}function l(){t.change(),f()}function u(_,m){o="";const p=c(),v=Et(e.stash,_)-(p.reserved[_]||0);if(m>0&&v<=0){o=`All ${it[_].name} already reserved. Nothing was duplicated.`,f();return}const y=n.heal,S=n.utility,L=(n.extra||[]).map(M=>({...M}));if(_==="patch")n.heal=Math.max(0,n.heal+m);else if(_==="grenade")n.utility=Math.max(0,n.utility+m);else{const M=n.extra.find(w=>w.id===_);M?M.qty=Math.max(0,M.qty+m):m>0&&n.extra.push({id:_,qty:1}),n.extra=n.extra.filter(w=>w.qty>0)}if(m>0&&c().slots>24){n.heal=y,n.utility=S,n.extra=L,o="Backpack full. Return a packed item to reserve space.",f();return}l()}function h(_,m){o="";const p=n[m];if(n[m]=_,(c().reserved[_]||0)>Et(e.stash,_)){n[m]=p,o=`No spare ${it[_].name}. Unequip the other slot first.`,f();return}a=_,l()}function d(_){const m=it[_];if(!m)return'<div class="kit-detail-empty">Select an item to inspect and pack it.</div>';const p=Gs(_),v=p?`<div><span>DAMAGE</span><b>${p.damage}</b></div><div><span>MAGAZINE</span><b>${p.mag} rounds</b></div><div><span>RELOAD</span><b>${p.reload}s</b></div>`:`<div><span>STACK SIZE</span><b>${m.stack}</b></div><div><span>IN BASE</span><b>${Et(e.stash,_)}</b></div>`;return`<div class="kit-detail-heading">${co(_)}<div><span class="kit-kicker">${m.rarity} / ${m.category}</span><h3>${Pn(m.name)}</h3></div></div><p>${Pn(m.description)}</p><div class="kit-detail-stats">${v}<div><span>UNIT VALUE</span><b>${Vr(m.value)} cr</b></div></div><div class="kit-detail-actions">${p?`<button data-assign="primary" data-id="${_}">Equip primary [1]</button><button data-assign="secondary" data-id="${_}">Equip secondary [2]</button>`:_==="armor1"||_==="armor2"?`<button data-assign="armor" data-id="${_}">Wear armor</button>`:`<button data-take="${_}">Pack one →</button>`}<span>${["MATERIAL","VALUABLE"].includes(m.category)?"Salvage: extract to keep its value. No combat use.":"Inspect first. Use a button to change your kit."}</span></div>`}function f(){const _=i.querySelector(".kit-storage")?.scrollTop||0,m=i.querySelector(".kit-screen")?.scrollTop||0,p=document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)?document.activeElement:null,v=p?Array.from(p.attributes).find(x=>x.name.startsWith("data-")):null,y=p?.id?`#${p.id}`:v?`[${v.name}="${v.value}"]`:"",S=c(),L=[...new Set(e.stash.filter(x=>x.qty>0&&it[x.id]).map(x=>x.id))],M=L.filter(x=>s==="ALL"||(s==="WEAPONS"?it[x].category==="WEAPON":s==="SALVAGE"?["MATERIAL","VALUABLE"].includes(it[x].category):!["WEAPON","MATERIAL","VALUABLE"].includes(it[x].category))),w=[...new Set([n.primary,n.secondary].map(x=>Gs(x)?.ammo).filter(x=>!!x))],P=(x,I,B)=>`<div class="kit-pack-row"><span>${B}</span><div class="kit-stepper"><button data-minus="${x}" aria-label="Return one ${B}" ${I<=0?"disabled":""}>−</button><b>${I}</b><button data-take="${x}" aria-label="Pack one ${B}" ${Et(e.stash,x)<=(S.reserved[x]||0)||S.slots>=24&&I%it[x].stack===0?"disabled":""}>+</button></div><small>${Math.max(0,Et(e.stash,x)-(S.reserved[x]||0))} in reserve</small></div>`;i.innerHTML=`<section class="kit-screen" aria-label="Expedition loadout">
      <div class="kit-header"><button id="home" class="kit-back" aria-label="Back to base">← BASE</button><div><span class="kit-kicker">EXPEDITION PREPARATION</span><h2>PACK FOR THE UNKNOWN<span>.</span></h2></div><div class="kit-base-value"><span class="kit-kicker">BASE INVENTORY</span><strong>${Vr(S.value)} <small>cr</small></strong></div></div>
      <div class="kit-layout"><section class="kit-operator" aria-label="Operator and equipment">
        <div class="kit-operator-top"><span class="kit-kicker">01 / YOUR OPERATOR</span><div class="kit-operator-tabs" role="group" aria-label="Operator">${oo.map(x=>`<button data-operator="${x}" aria-pressed="${n.operator===x}">${x}</button>`).join("")}</div><p>${Lg[oo.indexOf(n.operator)]}</p></div>
        <div class="kit-character-clear" aria-hidden="true"><span>LIVE FIELD PREVIEW</span><i></i></div>
        <div class="kit-equipment"><div class="kit-equipment-heading"><span class="kit-kicker">EQUIPPED HARDWARE</span><span>Choose a slot, then a weapon</span></div><div class="kit-equipment-cards">${["primary","secondary","armor"].map(x=>`<div class="kit-equipment-card ${x===r?"kit-active":""}"><button class="kit-slot" data-equip="${x}" aria-pressed="${x===r}"><span class="kit-kicker">${x}</span>${n[x]?co(n[x]):'<span class="kit-empty-gear">—</span>'}<b>${n[x]?Pn(it[n[x]]?.name||"Unknown"):"Empty slot"}</b><small>${n[x]?`${Math.max(0,Et(e.stash,n[x])-(S.reserved[n[x]]||0))} spare in base`:x==="primary"?"Required to deploy":"Optional"}</small></button>${n[x]?`<button class="kit-unequip" data-unequip="${x}" aria-label="Unequip ${x}">Return to stash</button>`:""}</div>`).join("")}</div></div>
      </section><section class="kit-storage" aria-label="Stash and packing"><div class="kit-stash-head"><div><span class="kit-kicker">02 / BASE STASH</span><h3>Take only what you need.</h3></div><span>${L.length} item types</span></div>
      <div class="kit-tabs" role="tablist" aria-label="Stash categories">${["ALL","WEAPONS","SUPPLIES","SALVAGE"].map(x=>`<button role="tab" data-category="${x}" aria-selected="${s===x}">${x}</button>`).join("")}</div>
      <div class="kit-stash-grid" role="tabpanel" aria-label="${s.toLowerCase()} stash">${M.map(x=>{const I=it[x],B=S.reserved[x]||0;return`<button class="kit-item kit-rarity-${I.rarity.toLowerCase()} ${x===a?"kit-selected":""}" data-item="${x}" aria-label="${Pn(I.name)}, ${Et(e.stash,x)} in base, ${B} selected" aria-pressed="${B>0}"><span class="kit-item-category">${I.category}</span><span class="kit-item-qty">×${Et(e.stash,x)}</span>${co(x)}<b>${Pn(I.name)}</b><small>${B?`${B} selected · `:""}${Math.max(0,Et(e.stash,x)-B)} reserve</small></button>`}).join("")||'<div class="kit-empty-stash">No items in this category. Bring salvage home from an expedition.</div>'}</div>
      <div class="kit-detail" aria-label="Item information">${d(a)}</div>
      <div class="kit-manifest"><div class="kit-manifest-head"><span class="kit-kicker">03 / PACKING MANIFEST</span><span class="${S.slots>24?"kit-warning":""}">${S.slots} / 24 backpack slots</span></div><div class="kit-manifest-hardware">${["primary","secondary","armor"].map(x=>`<span><small>${x}</small>${Pn(it[n[x]]?.name||"None")}</span>`).join("")}</div><div class="kit-pack-controls">${P("patch",n.heal,"Field patches")}${P("grenade",n.utility,"Pulse grenades")}</div><label class="kit-ammo-label" for="kit-ammo"><span>AMMUNITION <small>Loaded magazine included</small></span><b>${n.ammo} ${n.ammo===1?"magazine":"magazines"} / weapon</b></label><input id="kit-ammo" type="range" min="1" max="5" step="1" value="${n.ammo}" aria-label="Total magazines per weapon"><div class="kit-ammo-summary">${w.map(x=>`<span class="${(S.reserved[x]||0)>Et(e.stash,x)?"kit-warning":""}">${it[x].name}<b>${S.reserved[x]||0} needed / ${Et(e.stash,x)} available</b></span>`).join("")||"<span>Equip a weapon to calculate ammunition.</span>"}</div>${n.extra.length?`<div class="kit-extra"><span class="kit-kicker">ADDITIONAL CARGO</span>${n.extra.map(x=>`<div><span>${Pn(it[x.id]?.name||x.id)} <b>×${x.qty}</b></span><button data-minus="${x.id}" aria-label="Return one ${Pn(it[x.id]?.name||x.id)}">− 1</button><button data-return="${x.id}">Return all</button></div>`).join("")}</div>`:""}<p class="kit-selection-note">Selected items stay in your stash until deployment. This is a reservation, not a duplicate.</p></div>
      </section></div><div class="kit-footer"><button class="kit-clear" data-clear>Clear loadout</button><div class="kit-risk"><span class="kit-kicker">AT RISK</span><b>${Vr(S.risk)} <small>cr</small></b><span>${Vr(Math.max(0,S.value-S.risk))} cr remains at base</span></div><div class="kit-deploy-area"><p class="${S.reasons.length?"kit-warning":""}" role="status">${o?Pn(o):S.reasons.length?Pn(S.reasons.join(" ")):"Kit ready. Extract alive to bring it home."}</p><button id="deploy" class="kit-deploy" ${S.reasons.length?"disabled":""} aria-describedby="kit-deploy-reason">DEPLOY <span>→</span></button><span id="kit-deploy-reason" class="kit-sr-only">${Pn(S.reasons.join(" ")||"All equipment available.")}</span></div></div>
    </section>`,i.querySelector(".kit-operator").append(i.querySelector(".kit-manifest")),i.querySelector(".kit-operator-top > .kit-kicker").textContent="01 / YOUR RAID KIT — TAKEN INTO THE FIELD",i.querySelector(".kit-stash-head h3").textContent="Base stash — stays safe here",i.querySelector(".kit-equipment-heading > span:last-child").textContent="Inspect right → Equip explicitly",i.querySelector(".kit-manifest-hardware").remove(),i.querySelector(".kit-selection-note").textContent="Left: equipment and supplies you will carry. Right: base stock. Only DEPLOY removes the selected kit from storage.",i.querySelector("#home").addEventListener("click",t.home),i.querySelector("#deploy").addEventListener("click",()=>{c().reasons.length||t.deploy()}),i.querySelectorAll("[data-category]").forEach(x=>x.onclick=()=>{s=x.dataset.category,f()}),i.querySelectorAll("[data-operator]").forEach(x=>x.onclick=()=>{n.operator=x.dataset.operator,l()}),i.querySelectorAll("[data-equip]").forEach(x=>x.onclick=()=>{r=x.dataset.equip,s=r==="armor"?"SUPPLIES":"WEAPONS",n[r]&&(a=n[r]),o=`Choose an item on the right, then press Equip ${r}.`,f()}),i.querySelectorAll("[data-unequip]").forEach(x=>x.onclick=()=>{n[x.dataset.unequip]="",o="",l()}),i.querySelectorAll("[data-item]").forEach(x=>{x.onclick=()=>{a=x.dataset.item,o="",f(),i.querySelector(".kit-detail")?.scrollIntoView({block:"nearest"})}}),i.querySelectorAll("[data-minus]").forEach(x=>x.onclick=()=>u(x.dataset.minus,-1)),i.querySelectorAll("[data-return]").forEach(x=>x.onclick=()=>{n.extra=n.extra.filter(I=>I.id!==x.dataset.return),o="",l()}),i.querySelector("[data-clear]").onclick=()=>{n.primary="",n.secondary="",n.armor="",n.heal=0,n.utility=0,n.ammo=1,n.extra=[],o="",l()},i.querySelector("#kit-ammo").onchange=x=>{n.ammo=Number(x.currentTarget.value),o="",l()},g(),i.querySelector(".kit-storage").scrollTop=_,i.querySelector(".kit-screen").scrollTop=m,y&&i.querySelector(y)?.focus({preventScroll:!0})}function g(){i.querySelectorAll("[data-assign]").forEach(_=>_.onclick=()=>h(_.dataset.id,_.dataset.assign)),i.querySelectorAll("[data-take]").forEach(_=>_.onclick=()=>u(_.dataset.take,1))}f()}const Uc=document.querySelector("#app");Uc.innerHTML='<div id="ui"><div class="loading">DUSTFALL / INITIALIZING</div></div><div id="toast"></div><div id="vignette"></div>';const dn=document.querySelector("#ui"),an=new vg({antialias:!0});an.setSize(innerWidth,innerHeight);an.setPixelRatio(Math.min(devicePixelRatio,1.5));an.shadowMap.enabled=!0;an.shadowMap.type=oh;an.toneMapping=lh;an.toneMappingExposure=1.25;Uc.prepend(an.domElement);const Lt=new k0;Lt.background=new We(12239537);Lt.fog=new fa(12239537,.0055);const Wt=new fn(59,innerWidth/innerHeight,.1,800);Lt.add(new Td(14476510,5461830,2.1));const ui=new Rd(16772304,3.2);ui.position.set(-45,80,40);ui.castShadow=!0;ui.shadow.mapSize.set(2048,2048);Object.assign(ui.shadow.camera,{left:-90,right:90,top:90,bottom:-90,far:250});ui.shadow.bias=-.001;Lt.add(ui);Lt.add(ui.target);const Xt=yg(Lt),Dg=Xt.solids,Zs=new wg,zt=new Ag(Lt,Xt,Zs),rh=Xt.containers.slice(),qs=new Map;let Wi,Vi;const ge=new Mg(Wt,Xt);Lt.add(ge.mesh);const Zt=Xt.extractions[0].clone(),Yi=new pt(new ga(5.6,6,48),new Tn({color:15320701,side:bn}));Yi.rotation.x=-Math.PI/2;Yi.position.copy(Zt);Yi.position.y=Zt.y+.08;Lt.add(Yi);const Cs=new pt(new mn(1.4,2.5,140,16),new Tn({color:15387015,transparent:!0,opacity:.65,depthWrite:!1,fog:!1,blending:po}));Cs.position.copy(Zt);Cs.position.y+=70;Lt.add(Cs);const rc=new Vh(16767377,35,30,1.2);Lt.add(rc);const ha=new Vh(16759653,0,7,2);Lt.add(ha);const Hr=new D,Gr=[];let lo=0,ac=0,jh=!1;const ea=[],ta=[];let Pe=Cg(),Qe="BOOT",ct=[],sn=[],di=[],jt=0,Gn=0,lr=0,Ei=0,Sn=0,Nn=0,ys=0,ho=0,oc=0,ai=0,vn=!1,cc=!1,Ps=!1,Nc=0,bs=0,vs={time:0,kills:0,items:0,value:0};const lc=300;let Fc=!1,hc=!1,ri=0;const Sa=document.createElement("div");Sa.id="sunfall-flash";Uc.append(Sa);const Ln=new pt(new hi(1,32,20),new Tn({color:16761198,transparent:!0,opacity:.7,side:bn,depthWrite:!1}));Ln.visible=!1;Lt.add(Ln);zt.onBoss=()=>{Bt("LEVIATHAN HAS ARRIVED — heavy walker detected"),_t("alert")};const uo=new Ic,Vn=new D,Ti=new D,Ug=new Pd;let yi=0,fo=0;function _t(i,e){Zs.init(),Zs.setVolumes(Pe.settings.master,Pe.settings.sfx,Pe.settings.music),Zs.play(i,e)}function Bt(i){document.querySelector("#toast").textContent=i,oc=3}function xn(i){Qe=i,Ps=!1,ge.keys.clear(),(i==="MAIN_MENU"||i==="LOADOUT")&&(bs=0),i!=="IN_RAID"&&i!=="EXTRACTING"&&(document.exitPointerLock(),ge.aim=!1),Ci()}function Oc(){an.domElement.requestPointerLock()?.catch(()=>Bt("Click the scene to capture the mouse."))}function Fn(){return cr.find(i=>i.id===sn[jt])??cr[0]}function Ng(i,e){return i.map((t,n)=>{const s=it[t.id];return`<button class="item ${s.rarity.toLowerCase()}" data-${e}="${n}" title="${s.description} • Value ${s.value}"><span class="icon">${s.icon}</span><b>${s.name}</b><small>${s.rarity}</small><em>×${t.qty}</em></button>`}).join("")}function Ci(){if(dn.innerHTML="",Qe==="MAIN_MENU")dn.innerHTML='<main class="menu"><div class="eyebrow">FIELD OPERATIONS / VOL. 01</div><h1>DUSTFALL</h1><p class="tagline">The world moved on.<br>Something stayed behind.</p><div class="menu-actions"><button id="loadout">DEPLOY <span>↗</span></button><button class="ghost" id="loadout2">LOADOUT</button><button class="ghost" id="settings">SETTINGS</button></div><div class="menu-bottom"><span>SOLO PVE · EXTRACTION</span><span>ASH VALLEY / 17:42</span></div></main>';else if(Qe==="LOADOUT"){Ig(dn,Pe,{home:()=>xn("MAIN_MENU"),deploy:()=>{_t("ui"),eu()},change:()=>{$n(Pe),ge.mesh.userData.weaponId=Pe.equipment.primary,ge.mesh.userData.operatorId=Pe.equipment.operator,_t("ui")}});return}else if(Qe==="PAUSED")dn.innerHTML='<main class="pause"><small>CONNECTION HELD</small><h1>TAKE A BREATH.</h1><p>The valley can wait.</p><button id="resume">RESUME ↗</button><button class="ghost" id="settings">SETTINGS</button><button class="ghost" id="abandon">ABANDON RAID</button><p>Abandoning loses your carried equipment.</p></main>';else if(Qe==="DEPLOYING")dn.innerHTML='<main class="deploying"><small>INSERTION IN PROGRESS / 5 MINUTE WINDOW</small><h1>ASH VALLEY</h1><p>Extract before SUNFALL. Follow the gold light. Leviathan arrives at 02:30.</p></main>';else if(Qe==="RAID_SUCCESS"||Qe==="PLAYER_DEAD"){const i=Qe==="RAID_SUCCESS";dn.innerHTML=`<main class="results"><small>${i?"UPLINK CONFIRMED / OPERATOR SECURED":"SIGNAL TERMINATED / NO RECOVERY"}</small><h1>${i?"RAID COMPLETE":"OPERATOR LOST"}</h1><p>${i?"You brought something back. That is enough.":"The valley keeps what it takes."}</p><div class="stats"><div><b>${na(vs.time)}</b><small>TIME SURVIVED</small></div><div><b>${vs.kills}</b><small>MACHINES DESTROYED</small></div><div><b>${vs.items}</b><small>ITEMS ${i?"EXTRACTED":"LOST"}</small></div><div><b>${vs.value}</b><small>SALVAGE VALUE</small></div></div><button id="return">RETURN TO BASE ↗</button></main>`,Fc&&(dn.querySelector("h1").textContent="SUNFALL",dn.querySelector("p").textContent="The valley was incinerated. Five-minute extraction window expired. All carried equipment lost.")}else dn.innerHTML='<div class="hud"><div class="compass" id="compass"></div><div class="objective"><small>FIELD OBJECTIVE</small><b>RECOVER. RETURN.</b><span id="distance"></span></div><div id="crosshair">·</div><div id="hitmarker">×</div><div id="interaction"></div><div id="extraction"></div><div class="vitals" id="vitals"></div><div class="weapon-hud" id="weaponhud"></div><div class="hint">WASD MOVE <i>SHIFT SPRINT</i> RMB AIM <i>LMB FIRE</i> E LOOT <i>TAB PACK</i> ESC PAUSE</div><div id="action-progress"></div></div>',dn.querySelector(".hud").insertAdjacentHTML("beforeend",'<div id="raid-clock"></div><div id="boss-hud"></div><div id="extract-guide"></div>'),Pe.hinted||dn.querySelector(".hud").insertAdjacentHTML("beforeend",'<div id="first-raid-hint" class="controls" style="position:absolute;left:30px;top:215px;max-width:300px;background:#14221cee;padding:16px">FIRST FIELD RUN<br>Click the scene to capture your mouse.<br>E near a crate: search and collect.<br>TAB: inspect and use supplies. Q: heal.<br>Gold beam: stand inside for 7 seconds.<br>Leave before 05:00. Death loses your kit.</div>'),vn&&(dn.innerHTML+=`<section class="inventory"><header><div><small>FIELD PACK / ${ct.length} OF 24 SLOTS</small><h2>BACKPACK</h2></div><button id="closepack">CLOSE [TAB]</button></header><div class="grid">${Ng(ct,"pack")}${Array.from({length:24-ct.length},()=>'<div class="empty-slot"></div>').join("")}</div><p>Select an item for its effect, value and USE button. Right-click to discard. Drag to reorder.<br>Salvage has no combat effect — extract to bring it into your base stash. The raid continues while your pack is open.</p></section>`);Fg()}function Fg(){const i=(e,t)=>document.getElementById(e)?.addEventListener("click",()=>{_t("ui"),t()});i("loadout",()=>xn("LOADOUT")),i("loadout2",()=>xn("LOADOUT")),i("home",()=>xn("MAIN_MENU")),i("deploy",eu),i("resume",()=>{xn("IN_RAID"),Oc()}),i("return",()=>xn("LOADOUT")),i("abandon",()=>{confirm("Abandon raid and lose carried equipment?")&&ua(!1)}),i("settings",qg),i("closepack",tu),document.querySelectorAll("[data-equip]").forEach(e=>e.onchange=()=>{const t=e.dataset.equip;Object.assign(Pe.equipment,{[t]:t==="heal"||t==="utility"?Number(e.value):e.value}),$n(Pe)}),document.querySelectorAll("[data-pack]").forEach(e=>{const t=Number(e.dataset.pack);e.onclick=()=>Og(t),e.oncontextmenu=n=>{n.preventDefault();const s=ct.splice(t,1)[0];s&&Bt(`Dropped ${it[s.id].name}`),Ci()},e.draggable=!0,e.ondragstart=n=>n.dataTransfer?.setData("text/plain",String(t)),e.ondragover=n=>n.preventDefault(),e.ondrop=n=>{n.preventDefault();const s=Number(n.dataTransfer?.getData("text/plain"));Number.isInteger(s)&&ct[s]&&([ct[s],ct[t]]=[ct[t],ct[s]],Ci())}})}function Og(i){const e=ct[i];if(!e)return;const t=it[e.id];document.getElementById("pack-detail")?.remove();const n=document.createElement("div");n.id="pack-detail";const s={patch:"Apply patch · +45 HP / 2s",plate:"Repair armor · +30",beacon:"Deploy decoy · 5s",grenade:"Throw pulse grenade",armor1:"Wear vest · 50 armor",armor2:"Wear vest · 80 armor"}[e.id]??(t.category==="AMMO"?"Reload active weapon":"");n.innerHTML=`<h3>${t.name}</h3><p>${t.description}</p><p>${t.category==="MATERIAL"||t.category==="VALUABLE"?"SALVAGE — extract to store at base. No combat effect.":"FIELD SUPPLY — use now or extract to keep."} · Stack value ${t.value*e.qty} cr</p>${s?`<button id="pack-use">${s}</button>`:""}<button id="pack-drop">Drop stack</button>`,document.querySelector(".inventory").append(n),n.querySelector("#pack-use")?.addEventListener("click",()=>zg(i)),n.querySelector("#pack-drop").addEventListener("click",()=>{ct.splice(i,1),Ci()})}function js(i,e){const t=new pt(new hi(1,16,10),new Tn({color:e,transparent:!0,opacity:.3,wireframe:!0,depthWrite:!1}));t.position.copy(i),Lt.add(t),ta.push({mesh:t,life:1})}function Qh(){if(!Un(ct,"grenade",1))return;Wt.getWorldDirection(Vn);const i=new pt(new hi(.12,8,6),new pn({color:12296302,metalness:.6,roughness:.5}));i.position.copy(ge.position),i.position.y+=1.5,Lt.add(i),ea.push({mesh:i,velocity:Vn.clone().multiplyScalar(17).add(new D(0,5,0)),fuse:1.4}),_t("ui")}function eu(){const i=Pe.equipment;if(!i.primary||!Et(Pe.stash,i.primary)){Bt("Choose an available primary weapon.");return}if(i.secondary===i.primary&&Et(Pe.stash,i.primary)<2){Bt("Only one copy of that weapon remains.");return}ct=[],sn=[i.primary],i.secondary&&Et(Pe.stash,i.secondary)&&sn.push(i.secondary);for(const t of sn)Un(Pe.stash,t,1);di=sn.map(t=>{const n=cr.find(a=>a.id===t),s=Math.min(Et(Pe.stash,n.ammo),n.mag*Pe.equipment.ammo);Un(Pe.stash,n.ammo,s);const r=Math.min(n.mag,s);return In(ct,n.ammo,s-r),r});for(const[t,n]of[["patch",i.heal],["grenade",i.utility]]){const s=Math.min(n,Et(Pe.stash,t));Un(Pe.stash,t,s),s&&In(ct,t,s)}for(const t of i.extra){const n=Math.min(t.qty,Et(Pe.stash,t.id)),s=In(ct,t.id,n);Un(Pe.stash,t.id,n-s)}ge.reset();const e=[{name:"FIELD CAMP",x:0,z:145},{name:"WEST TREELINE",x:-170,z:145},{name:"EAST APPROACH",x:170,z:145}][(Pe.stats.raids+2)%3];ge.position.set(e.x,Xt.groundHeight(e.x,e.z),e.z),ge.mesh.position.copy(ge.position),ge.armor=i.armor&&Un(Pe.stash,i.armor,1)?i.armor==="armor2"?80:50:0,Pe.inRaid=!0,Pe.stats.raids++,$n(Pe),jt=0,Gn=0,Fc=!1,hc=!1,ri=0,Ln.visible=!1,Sa.style.opacity="0",lr=0,Ei=0,Sn=0,Nn=0,ai=0,ys=0,bs=0,Vi=void 0,Wi=void 0;for(const t of Xt.containers)rh.includes(t)||Lt.remove(t.mesh);Xt.containers.splice(0,Xt.containers.length,...rh),qs.clear();for(const t of Xt.containers)t.opened=!1,t.mesh.visible=!0;zt.reset(ge.position),Zt.copy(Xt.extractions[Pe.stats.raids%Xt.extractions.length]),Yi.position.copy(Zt),Yi.position.y+=.08,Cs.position.copy(Zt),Cs.position.y+=70,rc.position.copy(Zt),rc.position.y+=4,ge.mesh.userData.weaponId=sn[0],ge.mesh.userData.operatorId=i.operator,vn=!1,xn("DEPLOYING"),setTimeout(()=>{xn("IN_RAID"),Bt(`${e.name} / Find salvage, then follow the north uplink.`)},900)}function ua(i){if(!(Qe!=="IN_RAID"&&Qe!=="EXTRACTING"&&Qe!=="PAUSED")){if(vs={time:Gn,kills:lr,items:ct.reduce((e,t)=>e+t.qty,0)+sn.length,value:ct.reduce((e,t)=>e+it[t.id].value*t.qty,0)},Pe.inRaid=!1,Pe.stats.kills+=lr,i){Pe.stats.wins++,Pe.stats.value+=vs.value;for(const e of ct)In(Pe.stash,e.id,e.qty,9999);for(let e=0;e<sn.length;e++)In(Pe.stash,sn[e],1,9999),di[e]&&In(Pe.stash,cr.find(t=>t.id===sn[e]).ammo,di[e],9999);ge.armor>0&&Pe.equipment.armor&&In(Pe.stash,Pe.equipment.armor,1,9999),_t("success")}else ge.mesh.rotation.z=-1.5,_t("damage");Pe.stash.some(e=>it[e.id].category==="WEAPON")||(In(Pe.stash,"carbine",1,9999),In(Pe.stash,"rifleAmmo",90,9999),In(Pe.stash,"patch",2,9999)),$n(Pe),xn(i?"RAID_SUCCESS":"PLAYER_DEAD")}}function tu(){Qe!=="IN_RAID"&&Qe!=="EXTRACTING"||(vn=!vn,Ps=!1,ge.keys.clear(),vn?document.exitPointerLock():Oc(),Ci())}function zg(i){const e=ct[i];if(e){if(e.id==="patch")nu();else if(e.id==="plate"&&ge.armor<80)ge.armor=Math.min(80,ge.armor+30),Un(ct,"plate",1),Bt("Armor repaired +30"),_t("heal"),js(ge.position,8240614);else if(e.id==="beacon")Un(ct,"beacon",1),Ti.copy(ge.position).add(new D(25,0,-15)),zt.hear(Ti,100,"decoy"),Bt("Decoy signal transmitted"),_t("beacon",Ti),js(Ti,15121513);else if(e.id==="grenade")Qh();else if(e.id==="armor1"||e.id==="armor2"){const t=e.id==="armor2"?80:50;ge.armor<t?(ge.armor=t,Un(ct,e.id,1),js(ge.position,8240614),_t("heal")):Bt("Current armor is stronger. Keep this vest as salvage.")}else it[e.id].category==="AMMO"?e.id===Fn().ammo?iu():Bt("Switch to the matching weapon first."):Bt(it[e.id].description);Ci()}}function nu(){Nn||ge.hp>=100||!Et(ct,"patch")||(Nn=2,Bt("Applying field patch…"),_t("heal"))}function iu(){Sn||di[jt]>=Fn().mag||!Et(ct,Fn().ammo)||(Sn=Fn().reload,_t("reload"))}const Bg=new mn(.018,.018,1,4),kg=new Tn({color:16769702}),uc=Array.from({length:48},()=>{const i=new pt(Bg,kg);return i.visible=!1,Lt.add(i),{mesh:i,life:0}});let Vg=0;const Hg=new D(0,1,0),Wr=new D;function Gg(i,e){const t=uc[Vg++%uc.length];Wr.copy(e).sub(i),t.mesh.position.copy(i).addScaledVector(Wr,.5),t.mesh.scale.set(1,Wr.length(),1),t.mesh.quaternion.setFromUnitVectors(Hg,Wr.normalize()),t.mesh.visible=!0,t.life=.06}function su(){if(Sn||ys>0)return;const i=Fn();if(!di[jt]){ys=.2,_t("empty");return}di[jt]--,ys=i.interval,Nn=0,ge.recoil=1,Wt.getWorldDirection(Vn),Vn.x+=(Math.random()-.5)*i.spread*(ge.aim?.3:1),Vn.y+=(Math.random()-.5)*i.spread*(ge.aim?.3:1),Vn.normalize(),uo.set(Wt.position,Vn),uo.far=220,Gr.length=0,Gr.push(...Dg);for(const t of zt.enemies)t.hp>0&&t.mesh.traverse(n=>{n.isMesh&&Gr.push(n)});const e=uo.intersectObjects(Gr,!1);if(Ti.copy(Wt.position).addScaledVector(Vn,150),e.length){Ti.copy(e[0].point);const t=zt.hit(e[0].object,i.damage*Math.max(.35,1-Math.max(0,e[0].distance-i.range)/(i.range*2)),e[0].point);t.hit&&(Nc=.18,jh=t.critical,_t("hit",Ti),t.killed&&Bt(`${t.type.toUpperCase()} DISABLED / SALVAGE AVAILABLE`)),lr=zt.kills}Hr.copy(ge.position).addScaledVector(Vn,.85),Hr.y+=1.5,Gg(Hr,Ti),ha.position.copy(Hr),ha.intensity=8,ac=.055,zt.hear(ge.position,i.id==="scout"?110:80),ge.pitch=Math.min(.55,ge.pitch+(i.id==="scout"?.021:.007)),_t(`shoot-${i.id}`,ge.position)}function Wg(i){if(Qe!=="IN_RAID"&&Qe!=="EXTRACTING")return;const e=Math.min(ge.armor,i*.45);ge.armor-=e,ge.hp=Math.max(0,ge.hp-(i-e)),bs=.5,_t("damage"),ge.hp<=0&&ua(!1)}function Xg(){ai>0||!Wi||(Vi=Wi,ai=.8,_t("reload",Wi.position))}function na(i){return`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`}function qg(){cc=!0;const i=document.createElement("section");i.className="settings",i.innerHTML=`<small>PERSONAL PREFERENCES</small><h2>SETTINGS</h2>${["sensitivity","master","sfx","music"].map(e=>`<label>${e.toUpperCase()}<input aria-label="${e}" data-setting="${e}" type="range" min="0" max="${e==="sensitivity"?3:1}" step=".05" value="${Pe.settings[e]}"></label>`).join("")}<label>GRAPHICS QUALITY<select id="quality">${["LOW","MEDIUM","HIGH"].map(e=>`<option ${Pe.settings.quality===e?"selected":""}>${e}</option>`).join("")}</select></label><label>INVERT Y<input id="invert" type="checkbox" ${Pe.settings.invert?"checked":""}></label><button id="fullscreen">FULLSCREEN</button><button id="reset">RESET SAVE</button><div class="controls">WASD Move · Mouse Look · Shift Sprint · C Crouch<br>Space Vault · E Interact · LMB Fire · RMB Aim<br>R Reload · 1/2 Weapons · Q Heal · G Grenade<br>Tab Backpack · Esc Pause</div><button id="settingsclose">BACK</button>`,dn.append(i),i.querySelectorAll("[data-setting]").forEach(e=>e.oninput=()=>{Object.assign(Pe.settings,{[e.dataset.setting]:Number(e.value)}),$n(Pe)}),i.querySelector("#quality").onchange=e=>{Pe.settings.quality=e.target.value,ru(),$n(Pe)},i.querySelector("#invert").onchange=e=>{Pe.settings.invert=e.target.checked,$n(Pe)},i.querySelector("#fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}),i.querySelector("#reset").addEventListener("click",()=>{confirm("Permanently erase all DUSTFALL progress?")&&(Pe=Qr(),$n(Pe),location.reload())}),i.querySelector("#settingsclose").addEventListener("click",()=>{cc=!1,i.remove()})}function ru(){const i=Pe.settings.quality;an.setPixelRatio(i==="LOW"?.8:i==="HIGH"?Math.min(devicePixelRatio,2):Math.min(devicePixelRatio,1.25)),an.shadowMap.enabled=i!=="LOW"}window.addEventListener("keydown",i=>{if(["Tab","Space","KeyW","KeyA","KeyS","KeyD"].includes(i.code)&&i.preventDefault(),!cc){if(i.code==="Escape"){vn?(vn=!1,Ci()):(Qe==="IN_RAID"||Qe==="EXTRACTING")&&xn("PAUSED");return}if(!(Qe!=="IN_RAID"&&Qe!=="EXTRACTING")){if(i.code==="Tab"&&!i.repeat){tu();return}if(!vn){if(ge.keys.add(i.code),i.code==="Space"&&ge.vault(),i.code==="KeyR"&&iu(),i.code==="KeyQ"&&nu(),i.code==="KeyE"&&Xg(),i.code==="Digit1"||i.code==="Digit2"){const e=i.code==="Digit1"?0:1;sn[e]&&e!==jt&&(jt=e,ge.mesh.userData.weaponId=sn[jt],Sn=0,ys=.25)}i.code==="KeyG"&&!i.repeat&&Qh()}}}});window.addEventListener("keyup",i=>ge.keys.delete(i.code));window.addEventListener("mousemove",i=>{document.pointerLockElement&&!vn&&ge.look(i.movementX,i.movementY,Pe.settings.sensitivity,Pe.settings.invert)});an.domElement.addEventListener("mousedown",i=>{if(!(Qe!=="IN_RAID"&&Qe!=="EXTRACTING")){if(!document.pointerLockElement){Oc();return}i.button===0&&(Ps=!0,su()),i.button===2&&(ge.aim=!0)}});window.addEventListener("mouseup",i=>{i.button===0&&(Ps=!1),i.button===2&&(ge.aim=!1)});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&!vn&&(Qe==="IN_RAID"||Qe==="EXTRACTING")&&xn("PAUSED")});addEventListener("blur",()=>{(Qe==="IN_RAID"||Qe==="EXTRACTING")&&xn("PAUSED")});addEventListener("resize",()=>{Wt.aspect=innerWidth/innerHeight,Wt.updateProjectionMatrix(),an.setSize(innerWidth,innerHeight)});document.addEventListener("save-error",()=>Bt("Storage unavailable. Progress cannot be persisted."));function $g(){const i=r=>document.getElementById(r);if(!i("vitals"))return;i("vitals").innerHTML=`<div><b>${Math.ceil(ge.hp)}</b><span>HEALTH</span><meter min="0" max="100" value="${ge.hp}"></meter></div><div><b>${Math.ceil(ge.armor)}</b><span>ARMOR</span><meter max="80" value="${ge.armor}"></meter></div><div><b>${Math.ceil(ge.stamina)}</b><span>STAMINA</span><meter max="100" value="${ge.stamina}"></meter></div>`;const e=Fn();i("weaponhud").innerHTML=`<small>${jt+1} / ${e.id==="shotgun"?"PUMP ACTION":e.id==="scout"?"SEMI AUTO":"FULL AUTO"}</small><h3>${e.name}</h3><b>${di[jt]} <span>/ ${Et(ct,e.ammo)}</span></b><small>${sn[1-jt]?`[${2-jt}] ${it[sn[1-jt]].name}`:""}</small>`,i("compass").textContent=`W ───── NW ───── N / ${((ge.yaw*180/Math.PI+360)%360).toFixed(0)}° ───── NE ───── E`,i("distance").textContent=`NORTH GANTRY / ${Math.round(ge.position.distanceTo(Zt))} M · ${na(Gn)}`;const t=Math.max(0,lc-Gn);i("raid-clock").innerHTML=`<small>SUNFALL IN</small><b>${na(Math.ceil(t))}</b><span>${t<=30?"EVACUATE NOW — VALLEY DETONATION":"Extract before the valley burns"}</span>`,i("raid-clock").classList.toggle("urgent",t<=30);const n=zt.boss;i("boss-hud").innerHTML=n?n.hp>0?`<small>LEVIATHAN / ${Math.round(n.position.distanceTo(ge.position))} M</small><progress max="${n.maxHp}" value="${n.hp}"></progress><b>${Math.ceil(n.hp)} / ${n.maxHp}</b>`:"<small>LEVIATHAN DESTROYED</small>":`<small>LEVIATHAN ARRIVES IN ${na(Math.ceil(Math.max(0,zt.bossClock)))}</small>`;const s=Math.atan2(Zt.x-ge.position.x,ge.position.z-Zt.z)-ge.yaw;i("extract-guide").innerHTML=`<b style="display:inline-block;transform:rotate(${s}rad)">↑</b> GOLD LIGHT · EXTRACTION`,i("interaction").textContent=ai>0?"SEARCHING…":Wi?"[ E ] SEARCH SALVAGE":"",i("extraction").innerHTML=Ei?`<small>UPLINK ESTABLISHING — STAY INSIDE</small><h3>${Math.ceil(7-Ei)} ${Math.ceil(7-Ei)===1?"SECOND":"SECONDS"}</h3><progress value="${Ei}" max="7"></progress>`:"",i("hitmarker").style.opacity=Nc>0?"1":"0",i("hitmarker").style.color=jh?"#f7cf76":"#ece9d7",i("crosshair").className=ge.aim?"ads":"",i("action-progress").textContent=Nn?`FIELD PATCH / ${Nn.toFixed(1)}s`:Sn?`RELOADING / ${Sn.toFixed(1)}s`:""}ru();xn("MAIN_MENU");function Yg(i){const e=Math.min(.04,i);for(let n=ta.length-1;n>=0;n--){const s=ta[n];s.life-=e,s.mesh.scale.setScalar(1+(1-s.life)*8),s.mesh.material.opacity=Math.max(0,s.life*.3),s.life<=0&&(Lt.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),ta.splice(n,1))}yi+=e,oc-=e,oc<=0&&(document.querySelector("#toast").textContent="");for(const n of uc)n.life>0&&(n.life-=e,n.mesh.visible=n.life>0);if((Qe==="IN_RAID"||Qe==="EXTRACTING")&&(!hc&&Gn+i>=270&&(hc=!0,Bt("SUNFALL IN 30 SECONDS — EXTRACT NOW"),_t("alert")),Gn+i>=lc&&(Gn=lc,Fc=!0,ri=3,Ln.position.copy(ge.position),Ln.position.z-=45,Ln.position.y+=5,Ln.visible=!0,Ln.scale.setScalar(1),_t("grenade"),ua(!1))),Qe==="IN_RAID"||Qe==="EXTRACTING"){if(Gn+=i,!Pe.hinted&&Gn>=30&&(Pe.hinted=!0,$n(Pe),document.getElementById("first-raid-hint")?.remove()),ys-=e,Nc-=e,bs=Math.max(0,bs-e),vn||ge.update(e,yi,Sn>0),Ps&&(Fn().id==="carbine"||Fn().id==="smg")&&su(),Sn>0&&(Sn-=e,Sn<=0)){const s=Math.min(Fn().mag-di[jt],Et(ct,Fn().ammo));Un(ct,Fn().ammo,s),di[jt]+=s,Sn=0,_t("reload")}Nn>0&&(ge.sprinting||Ps?Nn=0:(Nn-=e,Nn<=0&&Un(ct,"patch",1)&&(ge.hp=Math.min(100,ge.hp+45),Bt("Field patch applied +45 HP"),Nn=0,_t("heal"),js(ge.position,9163680),vn&&Ci()))),Wi=void 0;let n=3.5;for(const s of Xt.containers){if(s.opened&&!qs.get(s.id)?.length)continue;const r=ge.position.distanceTo(s.position);r<n&&(n=r,Wi=s)}if(ai>0&&Vi){if(ge.position.distanceTo(Vi.position)>4)ai=0,Vi=void 0;else if(ai=Math.max(0,ai-e),ai===0){const s=Vi,r=qs.get(s.id)??Pg(s.tier),a=[];qs.set(s.id,r.flatMap(o=>{const c=In(ct,o.id,o.qty);return c<o.qty&&a.push(it[o.id].name),c?[{id:o.id,qty:c}]:[]})),s.opened=!0,Bt(qs.get(s.id).length?"Backpack full. Free a slot.":`RECOVERED / ${a.join(" · ")}`),zt.hear(s.position,s.tier>1?50:12),_t("loot",s.position),Vi=void 0}}zt.update(e,yi,ge.position,ge.crouching,Wg,Gn),lr=zt.kills;for(let s=ea.length-1;s>=0;s--){const r=ea[s];r.fuse-=e,r.velocity.y-=e*15,r.mesh.position.addScaledVector(r.velocity,e);const a=Xt.groundHeight(r.mesh.position.x,r.mesh.position.z)+.12;if(r.mesh.position.y<a&&(r.mesh.position.y=a,r.velocity.multiplyScalar(.45),r.velocity.y=Math.abs(r.velocity.y)),r.fuse<=0){for(const o of zt.enemies)o.hp>0&&o.position.distanceTo(r.mesh.position)<9&&zt.hit(o.mesh,145,o.position);js(r.mesh.position,16759912),zt.hear(r.mesh.position,120),_t("grenade",r.mesh.position),Lt.remove(r.mesh),r.mesh.geometry.dispose(),r.mesh.material.dispose(),ea.splice(s,1)}}ge.moving>1&&!vn&&(lo-=e,lo<=0&&(_t(ge.sprinting?"sprint":"step",ge.position),lo=ge.sprinting?.28:.43)),Zs.update(ge.position,Vn.set(Math.sin(ge.yaw),0,-Math.cos(ge.yaw)),zt.threat/100),(Qe==="IN_RAID"||Qe==="EXTRACTING")&&(ge.position.distanceTo(Zt)<6?(ho-=e,ho<=0&&(_t("beacon",Zt),zt.hear(Zt,90),ho=1),Ei+=e,Qe="EXTRACTING",Ei>=7&&ua(!0)):(Ei=0,Qe="IN_RAID")),fo-=e,fo<=0&&($g(),fo=.07)}else if(Qe==="MAIN_MENU"||Qe==="LOADOUT"){const n=Xt.groundHeight(0,145);ge.mesh.position.set(0,n,145),ge.mesh.rotation.set(0,.35,0),ge.mesh.userData.weaponId=Pe.equipment.primary,ge.mesh.userData.operatorId=Pe.equipment.operator,Dc(ge.mesh,yi,0,!1,0,0),Qe==="LOADOUT"?(Wt.position.set(2.5,n+1.65,149.8),Wt.lookAt(1.85,n+1,145)):(Wt.position.set(8+Math.sin(yi*.08)*1.2,n+3.8,153),Wt.lookAt(-7,n+3,117)),Wt.fov=50,Wt.updateProjectionMatrix()}document.querySelector("#vignette").style.opacity=String(bs),Yi.rotation.z=yi*.12;const t=Math.hypot(Wt.position.x-Zt.x,Wt.position.z-Zt.z);Cs.material.opacity=(.12+.48*Math.min(1,Math.max(0,(t-6)/24)))*(1+Math.sin(yi*2)*.2),ri>0&&(ri=Math.max(0,ri-e),Ln.scale.setScalar(1+(3-ri)*100),Ln.material.opacity=ri/3*.7,Sa.style.opacity=String(Math.min(1,ri/1.8)),ri===0&&(Ln.visible=!1)),Xt.update(yi,e),ac-=e,ac<=0&&(ha.intensity=0),ui.position.set(ge.position.x-45,ge.position.y+80,ge.position.z+40),ui.target.position.copy(ge.position),an.render(Lt,Wt)}an.setAnimationLoop(()=>Yg(Ug.getDelta()));
