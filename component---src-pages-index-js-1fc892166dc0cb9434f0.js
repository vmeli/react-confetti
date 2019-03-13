(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),r=n(162),o=(n(170),n(174),n(175)),c=(n(32),function(t){return a.a.createElement("input",Object.assign({type:"range",step:1,min:0,max:100},t))}),s=n(228),u=n.n(s),h=n(246),l=n.n(h),f=new Intl.NumberFormat({style:"decimal",minimumIntegerDigits:4,useGrouping:!0}),p=new Intl.NumberFormat({style:"percent",minimumIntegerDigits:4}),v=function(t){var e=Object(i.useState)(!0),n=e[0],r=e[1],o=Object(i.useState)(!0),s=o[0],h=o[1],v=Object(i.useState)(200),m=v[0],d=v[1],g=Object(i.useState)(100),y=g[0],b=g[1],w=Object(i.useState)(0),O=w[0],x=w[1],E=Object(i.useState)(10),I=E[0],P=E[1];return a.a.createElement("div",{className:l.a.root},a.a.createElement(u.a,Object.assign({run:n,recycle:s,numberOfPieces:m,opacity:y/100,wind:O/500,gravity:I/100,style:{zIndex:-1},debug:!0},t)),a.a.createElement("nav",{className:l.a.nav},a.a.createElement("label",{className:l.a.checkLabel},a.a.createElement("span",null,"Run:"),a.a.createElement("input",{name:"run",type:"checkbox",checked:n,onChange:function(t){return r(t.target.checked)}})),a.a.createElement("label",{className:l.a.checkLabel},a.a.createElement("span",null,"Recycle:"),a.a.createElement("input",{name:"recycle",type:"checkbox",checked:s,onChange:function(t){return h(t.target.checked)}})),a.a.createElement("div",{className:l.a.rangeInputGroup},a.a.createElement("label",{htmlFor:"numberOfPieces"},"# Pieces:"),a.a.createElement(c,{name:"numberOfPieces",step:1,min:0,max:1e3,value:m,onChange:function(t){return d(parseInt(t.currentTarget.value,10))}}),a.a.createElement("span",null,f.format(m))),a.a.createElement("div",{className:l.a.rangeInputGroup},a.a.createElement("label",{htmlFor:"opacity"},"Opacity:"),a.a.createElement(c,{name:"opacity",step:1,min:0,max:100,value:y,onChange:function(t){return b(parseInt(t.currentTarget.value,10))}}),a.a.createElement("span",null,p.format(y))),a.a.createElement("div",{className:l.a.rangeInputGroup},a.a.createElement("label",{htmlFor:"wind"},"Wind:"),a.a.createElement(c,{name:"wind",step:1,min:-100,max:100,value:O,onChange:function(t){return x(parseInt(t.currentTarget.value,10))}}),a.a.createElement("span",null,f.format(O/500))),a.a.createElement("div",{className:l.a.rangeInputGroup},a.a.createElement("label",{htmlFor:"gravity"},"Gravity:"),a.a.createElement(c,{name:"gravity",step:1,min:-100,max:100,value:I,onChange:function(t){return P(parseInt(t.currentTarget.value,10))}}),a.a.createElement("span",null,f.format(I/100)))))},m=function(){var t=Object(o.useWindowSize)(),e=t.width,n=t.height;return Number.isFinite(e)&&Number.isFinite(n)?a.a.createElement(v,{width:e,height:n}):null};n(247),e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.Helmet,null,a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"react-confetti: Confetti without the cleanup"),a.a.createElement("meta",{name:"Description",content:"React component to draw confetti using the Canvas API."})),a.a.createElement("div",{className:"pad-container"},a.a.createElement("h1",null,"react-confetti"),a.a.createElement("p",null,a.a.createElement("a",{href:"http://github.com/alampros/react-confetti"},"http://github.com/alampros/react-confetti"))),a.a.createElement(m,null))}},228:function(t,e,n){n(85),n(86),n(229),n(89),n(231),n(233),n(235),n(236),n(240),n(88),n(56),n(241),n(32),t.exports=function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}t=t&&t.hasOwnProperty("default")?t.default:t;var h,l,f,p,v={linear:function(t,e,n,i){return(n-e)*t/i+e},easeInQuad:function(t,e,n,i){return(n-e)*(t/=i)*t+e},easeOutQuad:function(t,e,n,i){return-(n-e)*(t/=i)*(t-2)+e},easeInOutQuad:function(t,e,n,i){var a=n-e;return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,i){return(n-e)*(t/=i)*t*t+e},easeOutCubic:function(t,e,n,i){return(n-e)*((t=t/i-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,i){var a=n-e;return(t/=i/2)<1?a/2*t*t*t+e:a/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,i){return(n-e)*(t/=i)*t*t*t+e},easeOutQuart:function(t,e,n,i){return-(n-e)*((t=t/i-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,i){var a=n-e;return(t/=i/2)<1?a/2*t*t*t*t+e:-a/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,i){return(n-e)*(t/=i)*t*t*t*t+e},easeOutQuint:function(t,e,n,i){return(n-e)*((t=t/i-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,i){var a=n-e;return(t/=i/2)<1?a/2*t*t*t*t*t+e:a/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,i){var a=n-e;return-a*Math.cos(t/i*(Math.PI/2))+a+e},easeOutSine:function(t,e,n,i){return(n-e)*Math.sin(t/i*(Math.PI/2))+e},easeInOutSine:function(t,e,n,i){return-(n-e)/2*(Math.cos(Math.PI*t/i)-1)+e},easeInExpo:function(t,e,n,i){return 0==t?e:(n-e)*Math.pow(2,10*(t/i-1))+e},easeOutExpo:function(t,e,n,i){var a=n-e;return t==i?e+a:a*(1-Math.pow(2,-10*t/i))+e},easeInOutExpo:function(t,e,n,i){var a=n-e;return 0===t?e:t===i?e+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+e:a/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,i){return-(n-e)*(Math.sqrt(1-(t/=i)*t)-1)+e},easeOutCirc:function(t,e,n,i){return(n-e)*Math.sqrt(1-(t=t/i-1)*t)+e},easeInOutCirc:function(t,e,n,i){var a=n-e;return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+e:a/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,i){var a,r,o,c=n-e;return o=1.70158,a=c,(r=0)===t?e:1==(t/=i)?e+c:(r||(r=.3*i),o=a<Math.abs(c)?(a=c,r/4):r/(2*Math.PI)*Math.asin(c/a),-a*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/r)+e)},easeOutElastic:function(t,e,n,i){var a,r,o,c=n-e;return o=1.70158,a=c,(r=0)===t?e:1==(t/=i)?e+c:(r||(r=.3*i),o=a<Math.abs(c)?(a=c,r/4):r/(2*Math.PI)*Math.asin(c/a),a*Math.pow(2,-10*t)*Math.sin((t*i-o)*(2*Math.PI)/r)+c+e)},easeInOutElastic:function(t,e,n,i){var a,r,o,c=n-e;return o=1.70158,a=c,(r=0)===t?e:2==(t/=i/2)?e+c:(r||(r=i*(.3*1.5)),o=a<Math.abs(c)?(a=c,r/4):r/(2*Math.PI)*Math.asin(c/a),t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/r)*-.5+e:a*Math.pow(2,-10*(t-=1))*Math.sin((t*i-o)*(2*Math.PI)/r)*.5+c+e)},easeInBack:function(t,e,n,i,a){return void 0===a&&(a=1.70158),(n-e)*(t/=i)*t*((a+1)*t-a)+e},easeOutBack:function(t,e,n,i,a){return void 0===a&&(a=1.70158),(n-e)*((t=t/i-1)*t*((a+1)*t+a)+1)+e},easeInOutBack:function(t,e,n,i,a){var r=n-e;return void 0===a&&(a=1.70158),(t/=i/2)<1?r/2*(t*t*((1+(a*=1.525))*t-a))+e:r/2*((t-=2)*t*((1+(a*=1.525))*t+a)+2)+e},easeInBounce:function(t,e,n,i){var a=n-e;return a-v.easeOutBounce(i-t,0,a,i)+e},easeOutBounce:function(t,e,n,i){var a=n-e;return(t/=i)<1/2.75?a*(7.5625*t*t)+e:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+e:a*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,i){var a=n-e;return t<i/2?.5*v.easeInBounce(2*t,0,a,i)+e:.5*v.easeOutBounce(2*t-i,0,a,i)+.5*a+e}},m=v;function d(t,e){return t+Math.random()*(e-t)}(l=h||(h={}))[l.Circle=0]="Circle",l[l.Square=1]="Square",l[l.Strip=2]="Strip",(p=f||(f={}))[p.Positive=1]="Positive",p[p.Negative=-1]="Negative";var g=function(){function t(n,i,r,o){e(this,t),a(this,"context",void 0),a(this,"radius",void 0),a(this,"x",void 0),a(this,"y",void 0),a(this,"w",void 0),a(this,"h",void 0),a(this,"vx",void 0),a(this,"vy",void 0),a(this,"shape",void 0),a(this,"angle",void 0),a(this,"angularSpin",void 0),a(this,"color",void 0),a(this,"rotateY",void 0),a(this,"rotationDirection",void 0),a(this,"getOptions",void 0),this.getOptions=i;var c=this.getOptions().colors;this.context=n,this.x=r,this.y=o,this.w=d(5,20),this.h=d(5,20),this.radius=d(5,10),this.vx=d(-4,4),this.vy=d(-10,-0),this.shape=Math.floor(0+3*Math.random()),this.angle=d(0,360)*Math.PI/180,this.angularSpin=d(-.2,.2),this.color=c[Math.floor(Math.random()*c.length)],this.rotateY=d(0,1),this.rotationDirection=d(0,1)?f.Positive:f.Negative}return i(t,[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,i=t.friction,a=t.opacity,r=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=i,this.vy*=i,1<=this.rotateY&&this.rotationDirection===f.Positive?this.rotationDirection=f.Negative:this.rotateY<=-1&&this.rotationDirection===f.Negative&&(this.rotationDirection=f.Positive);var o=.1*this.rotationDirection;if(this.rotateY+=o,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,r&&"function"==typeof r)r.call(this,this.context);else switch(this.shape){case h.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case h.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case h.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}]),t}(),y=function t(n,i){var r=this;e(this,t),a(this,"canvas",void 0),a(this,"context",void 0),a(this,"getOptions",void 0),a(this,"x",0),a(this,"y",0),a(this,"w",0),a(this,"h",0),a(this,"lastNumberOfPieces",0),a(this,"tweenInitTime",Date.now()),a(this,"particles",[]),a(this,"particlesGenerated",0),a(this,"removeParticleAt",function(t){r.particles.splice(t,1)}),a(this,"getParticle",function(){var t=d(r.x,r.w+r.x),e=d(r.y,r.h+r.y);return new g(r.context,r.getOptions,t,e)}),a(this,"animate",function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,i=r.lastNumberOfPieces,a=r.getOptions(),o=a.run,c=a.recycle,s=a.numberOfPieces,u=a.debug,h=a.tweenFunction,l=a.tweenDuration;if(!o)return!1;var f=r.particles.length,p=c?f:n,v=Date.now();if(p<s){i!==s&&(r.tweenInitTime=v,r.lastNumberOfPieces=s);for(var m=r.tweenInitTime,d=h(l<v-m?l:Math.max(0,v-m),p,s,l),g=Math.round(d-p),y=0;y<g;y++)r.particles.push(r.getParticle());r.particlesGenerated+=g}return u&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(f),t.width-10,t.height-20)),r.particles.forEach(function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&p<=s?r.particles[n]=r.getParticle():r.removeParticleAt(n))}),0<f||p<s}),this.canvas=n;var o=this.canvas.getContext("2d");if(!o)throw new Error("Could not get canvas context");this.context=o,this.getOptions=i},b={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:m.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},w=function(){function t(n,i){var r=this;e(this,t),a(this,"canvas",void 0),a(this,"context",void 0),a(this,"_options",void 0),a(this,"generator",void 0),a(this,"setOptionsWithDefaults",function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=o({},e,b,t),Object.assign(r,t.confettiSource)}),a(this,"update",function(){var t=r.options.run,e=r.canvas,n=r.context;t&&(n.fillStyle="white",n.clearRect(0,0,e.width,e.height)),r.generator.animate()?requestAnimationFrame(r.update):r._options.run=!1}),this.canvas=n;var c=this.canvas.getContext("2d");if(!c)throw new Error("Could not get canvas context");this.context=c,this.generator=new y(this.canvas,function(){return r.options}),this.options=i,this.update()}return i(t,[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run;this.setOptionsWithDefaults(t),this.generator&&Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}]),t}(),O=function(n){function h(){var n,i,r;e(this,h);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return a(u(i=!(r=(n=c(h)).call.apply(n,[this].concat(s)))||"object"!=typeof r&&"function"!=typeof r?u(this):r),"canvas",t.createRef()),a(u(i),"confetti",void 0),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,t.Component),i(h,[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=x(this.props)[0];this.confetti=new w(this.canvas.current,t)}}},{key:"componentWillReceiveProps",value:function(t){var e=x(t)[0];this.confetti&&(this.confetti.options=e)}},{key:"render",value:function(){var e=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],i=!0,a=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(i=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(t){a=!0,r=t}finally{try{i||null==c.return||c.return()}finally{if(a)throw r}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(x(this.props),2),n=e[0],i=e[1],a=o({zIndex:2,position:"absolute",top:0,left:0,bottom:0,right:0},i.style);return t.createElement("canvas",r({width:n.width,height:n.height,ref:this.canvas},i,{style:a}))}}]),h}();function x(t){var e={},n={},i=[].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(Object.keys(b)),["confettiSource","drawShape"]);for(var a in t){var r=t[a];i.includes(a)?e[a]=r:n[a]=r}return[e,n]}return a(O,"defaultProps",o({},b)),O}(n(243))}}]);
//# sourceMappingURL=component---src-pages-index-js-1fc892166dc0cb9434f0.js.map