(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1343:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(83),r=n.n(a),o=n(288),s=n.n(o),i=n(82),c=n.n(i),l=n(85),u=n.n(l),p=n(84),d=n(96),h=n(455),m=n(86);class f extends c.a.Component{constructor(e){super(e),r()(this,"_onPassphraseFormSubmit",e=>{e.preventDefault();const t=this._passphrase1.current.value;return t!==this._passphrase2.current.value?(this.setState({errStr:Object(p.a)("Passphrases must match")}),!1):t?(this._startExport(t),!1):(this.setState({errStr:Object(p.a)("Passphrase must not be empty")}),!1)}),r()(this,"_onCancelClick",e=>(e.preventDefault(),this.props.onFinished(!1),!1)),this._unmounted=!1,this._passphrase1=Object(i.createRef)(),this._passphrase2=Object(i.createRef)(),this.state={phase:1,errStr:null}}componentWillUnmount(){this._unmounted=!0}_startExport(e){Promise.resolve().then(()=>this.props.matrixClient.exportRoomKeys()).then(t=>h.b(JSON.stringify(t),e)).then(e=>{const t=new Blob([e],{type:"text/plain;charset=us-ascii"});s.a.saveAs(t,"element-keys.txt"),this.props.onFinished(!0)}).catch(e=>{if(console.error("Error exporting e2e keys:",e),this._unmounted)return;const t=e.friendlyText||Object(p.a)("Unknown error");this.setState({errStr:t,phase:1})}),this.setState({errStr:null,phase:2})}render(){const e=m.getComponent("views.dialogs.BaseDialog"),t=2===this.state.phase;return c.a.createElement(e,{className:"mx_exportE2eKeysDialog",onFinished:this.props.onFinished,title:Object(p.a)("Export room keys")},c.a.createElement("form",{onSubmit:this._onPassphraseFormSubmit},c.a.createElement("div",{className:"mx_Dialog_content"},c.a.createElement("p",null,Object(p.a)("This process allows you to export the keys for messages you have received in encrypted rooms to a local file. You will then be able to import the file into another Matrix client in the future, so that client will also be able to decrypt these messages.")),c.a.createElement("p",null,Object(p.a)("The exported file will allow anyone who can read it to decrypt any encrypted messages that you can see, so you should be careful to keep it secure. To help with this, you should enter a passphrase below, which will be used to encrypt the exported data. It will only be possible to import the data by using the same passphrase.")),c.a.createElement("div",{className:"error"},this.state.errStr),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputTable"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},c.a.createElement("label",{htmlFor:"passphrase1"},Object(p.a)("Enter passphrase"))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},c.a.createElement("input",{ref:this._passphrase1,id:"passphrase1",autoFocus:!0,size:"64",type:"password",disabled:t}))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputRow"},c.a.createElement("div",{className:"mx_E2eKeysDialog_inputLabel"},c.a.createElement("label",{htmlFor:"passphrase2"},Object(p.a)("Confirm passphrase"))),c.a.createElement("div",{className:"mx_E2eKeysDialog_inputCell"},c.a.createElement("input",{ref:this._passphrase2,id:"passphrase2",size:"64",type:"password",disabled:t}))))),c.a.createElement("div",{className:"mx_Dialog_buttons"},c.a.createElement("input",{className:"mx_Dialog_primary",type:"submit",value:Object(p.a)("Export"),disabled:t}),c.a.createElement("button",{onClick:this._onCancelClick,disabled:t},Object(p.a)("Cancel")))))}}r()(f,"propTypes",{matrixClient:u.a.instanceOf(d.i).isRequired,onFinished:u.a.func.isRequired})},288:function(e,t,n){(function(n){var a,r,o;r=[],void 0===(o="function"==typeof(a=function(){"use strict";function t(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){i(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(e,n,s){var i=o.URL||o.webkitURL,c=document.createElement("a");n=n||e.name||"download",c.download=n,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?r(c):a(c.href)?t(e,n,s):r(c,c.target="_blank")):(c.href=i.createObjectURL(e),setTimeout((function(){i.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),n);else if(a(e))t(e,n,o);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout((function(){r(s)}))}}:function(e,n,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,a);var i="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&c||s)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var p=o.URL||o.webkitURL,d=p.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});o.saveAs=i.saveAs=i,e.exports=i})?a.apply(t,r):a)||(e.exports=o)}).call(this,n(5))},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(294),r=n(84),o=n(93);let s=window.TextEncoder;s||(s=a.TextEncoder);let i=window.TextDecoder;i||(i=a.TextDecoder);const c=window.crypto.subtle||window.crypto.webkitSubtle;function l(e,t){const n=new Error(e);return n.friendlyText=t,n}function u(){return Object(r.a)("Your browser does not support the required cryptography extensions")}async function p(e,t){const n=function(e){const t=(new i).decode(new Uint8Array(e));let n=0;for(;;){const e=t.indexOf("\n",n);if(e<0)throw new Error("Header line not found");const a=t.slice(n,e).trim();if(n=e+1,a===m)break}const a=n;for(;;){const e=t.indexOf("\n",n);if("-----END MEGOLM SESSION DATA-----"===t.slice(n,e<0?void 0:e).trim())break;if(e<0)throw new Error("Trailer line not found");n=e+1}const r=n;return function(e){const t=window.atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}(t.slice(a,r))}(e),a=o.a.get().brand;if(n.length<1)throw l("Invalid file: too short",Object(r.a)("Not a valid %(brand)s keyfile",{brand:a}));if(1!==n[0])throw l("Unsupported version",Object(r.a)("Not a valid %(brand)s keyfile",{brand:a}));const s=n.length-69;if(s<0)throw l("Invalid file: too short",Object(r.a)("Not a valid %(brand)s keyfile",{brand:a}));const p=n.subarray(1,17),d=n.subarray(17,33),f=n[33]<<24|n[34]<<16|n[35]<<8|n[36],w=n.subarray(37,37+s),y=n.subarray(-32),[b,v]=await h(p,f,t),E=n.subarray(0,-32);let g,x;try{g=await c.verify({name:"HMAC"},v,y,E)}catch(e){throw l("subtleCrypto.verify failed: "+e,u())}if(!g)throw l("hmac mismatch",Object(r.a)("Authentication check failed: incorrect password?"));try{x=await c.decrypt({name:"AES-CTR",counter:d,length:64},b,w)}catch(e){throw l("subtleCrypto.decrypt failed: "+e,u())}return(new i).decode(new Uint8Array(x))}async function d(e,t,n){const a=(n=n||{}).kdf_rounds||5e5,r=new Uint8Array(16);window.crypto.getRandomValues(r);const o=new Uint8Array(16);window.crypto.getRandomValues(o),o[8]&=127;const[i,p]=await h(r,a,t),d=(new s).encode(e);let w;try{w=await c.encrypt({name:"AES-CTR",counter:o,length:64},i,d)}catch(e){throw l("subtleCrypto.encrypt failed: "+e,u())}const y=new Uint8Array(w),b=1+r.length+o.length+4+y.length+32,v=new Uint8Array(b);let E=0;v[E++]=1,v.set(r,E),E+=r.length,v.set(o,E),E+=o.length,v[E++]=a>>24,v[E++]=a>>16&255,v[E++]=a>>8&255,v[E++]=255&a,v.set(y,E),E+=y.length;const g=v.subarray(0,E);let x;try{x=await c.sign({name:"HMAC"},p,g)}catch(e){throw l("subtleCrypto.sign failed: "+e,u())}const _=new Uint8Array(x);return v.set(_,E),function(e){const t=Math.ceil(e.length/96),n=new Array(t+3);n[0]=m;let a,r=0;for(a=1;a<=t;a++)n[a]=f(e.subarray(r,r+96)),r+=96;return n[a++]="-----END MEGOLM SESSION DATA-----",n[a]="",(new s).encode(n.join("\n")).buffer}(v)}async function h(e,t,n){const a=new Date;let r,o;try{r=await c.importKey("raw",(new s).encode(n),{name:"PBKDF2"},!1,["deriveBits"])}catch(e){throw l("subtleCrypto.importKey failed: "+e,u())}try{o=await c.deriveBits({name:"PBKDF2",salt:e,iterations:t,hash:"SHA-512"},r,512)}catch(e){throw l("subtleCrypto.deriveBits failed: "+e,u())}const i=new Date;console.log("E2e import/export: deriveKeys took "+(i-a)+"ms");const p=o.slice(0,32),d=o.slice(32),h=c.importKey("raw",p,{name:"AES-CTR"},!1,["encrypt","decrypt"]).catch(e=>{throw l("subtleCrypto.importKey failed for AES key: "+e,u())}),m=c.importKey("raw",d,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign","verify"]).catch(e=>{throw l("subtleCrypto.importKey failed for HMAC key: "+e,u())});return await Promise.all([h,m])}const m="-----BEGIN MEGOLM SESSION DATA-----";function f(e){const t=String.fromCharCode.apply(null,e);return window.btoa(t)}}}]);
//# sourceMappingURL=3.js.map