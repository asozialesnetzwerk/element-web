(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{344:function(t,e,i){"use strict";i.r(e),i.d(e,"DefaultOptions",(function(){return c})),i.d(e,"default",(function(){return h}));var n=i(83),s=i.n(n),o=i(116);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const c={maxCount:200,gravity:.05,maxDrift:5};class h{constructor(t){s()(this,"options",void 0),s()(this,"context",null),s()(this,"particles",[]),s()(this,"lastAnimationTime",void 0),s()(this,"isRunning",void 0),s()(this,"start",async(t,e=3e3)=>{if(!t)return;this.context=t.getContext("2d"),this.particles=[];const i=this.options.maxCount;for(;this.particles.length<i;)this.particles.push(this.resetParticle({},t.width,t.height));this.isRunning=!0,requestAnimationFrame(this.renderLoop),e&&window.setTimeout(this.stop,e)}),s()(this,"stop",async()=>{this.isRunning=!1}),s()(this,"resetParticle",(t,e,i)=>(t.x=Math.random()*e,t.y=Math.random()*-i,t.xCol=t.x,t.diameter=7*Math.random()+4,t.maximumDrift=Math.random()*this.options.maxDrift+3.5,t.gravity=this.options.gravity+6*Math.random()+4,t)),s()(this,"renderLoop",()=>{if(this.context&&this.context.canvas)if(0===this.particles.length)this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height);else{(Date.now()-this.lastAnimationTime>=15||!this.lastAnimationTime)&&(this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.lastAnimationTime=Date.now(),this.animateAndRenderSnowflakes()),requestAnimationFrame(this.renderLoop)}}),this.options=a(a({},c),t)}animateAndRenderSnowflakes(){if(!this.context||!this.context.canvas)return;const t=this.context.canvas.height;for(const e of Object(o.c)(this.particles)){e.y+=e.gravity;const i=75*e.maximumDrift,n=2*Math.PI;e.x=e.maximumDrift*Math.sin(n/i*e.y),e.x+=e.xCol;const s=e.diameter/2;this.context.save(),this.context.beginPath(),this.context.ellipse(e.x,e.y,s,s,0,0,360),this.context.fillStyle="#eaeaea",this.context.fill(),this.context.closePath(),this.context.restore();const o=4*s;if(e.y>t+o){const t=this.particles.indexOf(e);this.particles.splice(t,1)}}}}}}]);
//# sourceMappingURL=2.js.map