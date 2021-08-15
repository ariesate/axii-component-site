import{b as t,c as e,d as r}from"./axii.es.c9c93548.js";function a(t,e){(function(t){return"string"==typeof t&&t.includes(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&t.includes("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function i(t){return Math.min(1,Math.max(0,t))}function n(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function o(t){return t<=1?100*Number(t)+"%":t}function s(t){return 1===t.length?"0"+t:String(t)}function h(t,e,r){t=a(t,255),e=a(e,255),r=a(r,255);var i=Math.max(t,e,r),n=Math.min(t,e,r),o=0,s=0,h=(i+n)/2;if(i===n)s=0,o=0;else{var f=i-n;switch(s=h>.5?f/(2-i-n):f/(i+n),i){case t:o=(e-r)/f+(e<r?6:0);break;case e:o=(r-t)/f+2;break;case r:o=(t-e)/f+4}o/=6}return{h:o,s:s,l:h}}function f(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function u(t,e,r){t=a(t,255),e=a(e,255),r=a(r,255);var i=Math.max(t,e,r),n=Math.min(t,e,r),o=0,s=i,h=i-n,f=0===i?0:h/i;if(i===n)o=0;else{switch(i){case t:o=(e-r)/h+(e<r?6:0);break;case e:o=(r-t)/h+2;break;case r:o=(t-e)/h+4}o/=6}return{h:o,s:f,v:s}}function d(t,e,r,a){var i=[s(Math.round(t).toString(16)),s(Math.round(e).toString(16)),s(Math.round(r).toString(16))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function c(t){return l(t)/255}function l(t){return parseInt(t,16)}var g={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function b(t){var e,r,i,s={r:0,g:0,b:0},h=1,u=null,d=null,b=null,p=!1,v=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(g[t])t=g[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var r=y.rgb.exec(t);if(r)return{r:r[1],g:r[2],b:r[3]};if(r=y.rgba.exec(t))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=y.hsl.exec(t))return{h:r[1],s:r[2],l:r[3]};if(r=y.hsla.exec(t))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=y.hsv.exec(t))return{h:r[1],s:r[2],v:r[3]};if(r=y.hsva.exec(t))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=y.hex8.exec(t))return{r:l(r[1]),g:l(r[2]),b:l(r[3]),a:c(r[4]),format:e?"name":"hex8"};if(r=y.hex6.exec(t))return{r:l(r[1]),g:l(r[2]),b:l(r[3]),format:e?"name":"hex"};if(r=y.hex4.exec(t))return{r:l(r[1]+r[1]),g:l(r[2]+r[2]),b:l(r[3]+r[3]),a:c(r[4]+r[4]),format:e?"name":"hex8"};if(r=y.hex3.exec(t))return{r:l(r[1]+r[1]),g:l(r[2]+r[2]),b:l(r[3]+r[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(x(t.r)&&x(t.g)&&x(t.b)?(e=t.r,r=t.g,i=t.b,s={r:255*a(e,255),g:255*a(r,255),b:255*a(i,255)},p=!0,v="%"===String(t.r).substr(-1)?"prgb":"rgb"):x(t.h)&&x(t.s)&&x(t.v)?(u=o(t.s),d=o(t.v),s=function(t,e,r){t=6*a(t,360),e=a(e,100),r=a(r,100);var i=Math.floor(t),n=t-i,o=r*(1-e),s=r*(1-n*e),h=r*(1-(1-n)*e),f=i%6;return{r:255*[r,s,o,o,h,r][f],g:255*[h,r,r,s,o,o][f],b:255*[o,o,h,r,r,s][f]}}(t.h,u,d),p=!0,v="hsv"):x(t.h)&&x(t.s)&&x(t.l)&&(u=o(t.s),b=o(t.l),s=function(t,e,r){var i,n,o;if(t=a(t,360),e=a(e,100),r=a(r,100),0===e)n=r,o=r,i=r;else{var s=r<.5?r*(1+e):r+e-r*e,h=2*r-s;i=f(h,s,t+1/3),n=f(h,s,t),o=f(h,s,t-1/3)}return{r:255*i,g:255*n,b:255*o}}(t.h,u,b),p=!0,v="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(h=t.a)),h=n(h),{ok:p,format:t.format||v,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:h}}var p="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",v="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?",m="[\\s|\\(]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")[,|\\s]+("+p+")\\s*\\)?",y={CSS_UNIT:new RegExp(p),rgb:new RegExp("rgb"+v),rgba:new RegExp("rgba"+m),hsl:new RegExp("hsl"+v),hsla:new RegExp("hsla"+m),hsv:new RegExp("hsv"+v),hsva:new RegExp("hsva"+m),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function x(t){return Boolean(y.CSS_UNIT.exec(String(t)))}var w=function(){function t(e,r){var a;if(void 0===e&&(e=""),void 0===r&&(r={}),e instanceof t)return e;"number"==typeof e&&(e=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(e)),this.originalInput=e;var i=b(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(a=r.format)&&void 0!==a?a:i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},t.prototype.getLuminance=function(){var t=this.toRgb(),e=t.r/255,r=t.g/255,a=t.b/255;return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(t){return this.a=n(t),this.roundA=Math.round(100*this.a)/100,this},t.prototype.toHsv=function(){var t=u(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}},t.prototype.toHsvString=function(){var t=u(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.v);return 1===this.a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this.roundA+")"},t.prototype.toHsl=function(){var t=h(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}},t.prototype.toHslString=function(){var t=h(this.r,this.g,this.b),e=Math.round(360*t.h),r=Math.round(100*t.s),a=Math.round(100*t.l);return 1===this.a?"hsl("+e+", "+r+"%, "+a+"%)":"hsla("+e+", "+r+"%, "+a+"%, "+this.roundA+")"},t.prototype.toHex=function(t){return void 0===t&&(t=!1),d(this.r,this.g,this.b,t)},t.prototype.toHexString=function(t){return void 0===t&&(t=!1),"#"+this.toHex(t)},t.prototype.toHex8=function(t){return void 0===t&&(t=!1),function(t,e,r,a,i){var n,o=[s(Math.round(t).toString(16)),s(Math.round(e).toString(16)),s(Math.round(r).toString(16)),s((n=a,Math.round(255*parseFloat(n)).toString(16)))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))&&o[3].startsWith(o[3].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this.r,this.g,this.b,this.a,t)},t.prototype.toHex8String=function(t){return void 0===t&&(t=!1),"#"+this.toHex8(t)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return 1===this.a?"rgb("+t+", "+e+", "+r+")":"rgba("+t+", "+e+", "+r+", "+this.roundA+")"},t.prototype.toPercentageRgb=function(){var t=function(t){return Math.round(100*a(t,255))+"%"};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var t=function(t){return Math.round(100*a(t,255))};return 1===this.a?"rgb("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%)":"rgba("+t(this.r)+"%, "+t(this.g)+"%, "+t(this.b)+"%, "+this.roundA+")"},t.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var t="#"+d(this.r,this.g,this.b,!1),e=0,r=Object.entries(g);e<r.length;e++){var a=r[e],i=a[0];if(t===a[1])return i}return!1},t.prototype.toString=function(t){var e=Boolean(t);t=null!=t?t:this.format;var r=!1,a=this.a<1&&this.a>=0;return e||!a||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l+=e/100,r.l=i(r.l),new t(r)},t.prototype.brighten=function(e){void 0===e&&(e=10);var r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),new t(r)},t.prototype.darken=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.l-=e/100,r.l=i(r.l),new t(r)},t.prototype.tint=function(t){return void 0===t&&(t=10),this.mix("white",t)},t.prototype.shade=function(t){return void 0===t&&(t=10),this.mix("black",t)},t.prototype.desaturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s-=e/100,r.s=i(r.s),new t(r)},t.prototype.saturate=function(e){void 0===e&&(e=10);var r=this.toHsl();return r.s+=e/100,r.s=i(r.s),new t(r)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var r=this.toHsl(),a=(r.h+e)%360;return r.h=a<0?360+a:a,new t(r)},t.prototype.mix=function(e,r){void 0===r&&(r=50);var a=this.toRgb(),i=new t(e).toRgb(),n=r/100;return new t({r:(i.r-a.r)*n+a.r,g:(i.g-a.g)*n+a.g,b:(i.b-a.b)*n+a.b,a:(i.a-a.a)*n+a.a})},t.prototype.analogous=function(e,r){void 0===e&&(e=6),void 0===r&&(r=30);var a=this.toHsl(),i=360/r,n=[this];for(a.h=(a.h-(i*e>>1)+720)%360;--e;)a.h=(a.h+i)%360,n.push(new t(a));return n},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){void 0===e&&(e=6);for(var r=this.toHsv(),a=r.h,i=r.s,n=r.v,o=[],s=1/e;e--;)o.push(new t({h:a,s:i,v:n})),n=(n+s)%1;return o},t.prototype.splitcomplement=function(){var e=this.toHsl(),r=e.h;return[this,new t({h:(r+72)%360,s:e.s,l:e.l}),new t({h:(r+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var r=this.toRgb(),a=new t(e).toRgb();return new t({r:a.r+(r.r-a.r)*r.a,g:a.g+(r.g-a.g)*r.a,b:a.b+(r.b-a.b)*r.a})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var r=this.toHsl(),a=r.h,i=[this],n=360/e,o=1;o<e;o++)i.push(new t({h:(a+o*n)%360,s:r.s,l:r.l}));return i},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}(),M=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function k(t,e,r){var a;return(a=Math.round(t.h)>=60&&Math.round(t.h)<=240?r?Math.round(t.h)-2*e:Math.round(t.h)+2*e:r?Math.round(t.h)+2*e:Math.round(t.h)-2*e)<0?a+=360:a>=360&&(a-=360),a}function A(t,e,r){return 0===t.h&&0===t.s?t.s:((a=r?t.s-.16*e:4===e?t.s+.16:t.s+.05*e)>1&&(a=1),r&&5===e&&a>.1&&(a=.1),a<.06&&(a=.06),Number(a.toFixed(2)));var a}function S(t,e,r){var a;return(a=r?t.v+.05*e:t.v-.15*e)>1&&(a=1),Number(a.toFixed(2))}function H(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],a=new w(t),i=5;i>0;i-=1){var n=a.toHsv(),o=new w({h:k(n,i,!0),s:A(n,i,!0),v:S(n,i,!0)}).toHexString();r.push(o)}r.push(a.toHexString());for(var s=1;s<=4;s+=1){var h=a.toHsv(),f=new w({h:k(h,s),s:A(h,s),v:S(h,s)}).toHexString();r.push(f)}return"dark"===e.theme?M.map((function(t){var a=t.index,i=t.opacity;return new w(e.backgroundColor||"#141414").mix(r[a],100*i).toHexString()})):r}var F={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},R={},C={};Object.keys(F).forEach((function(t){R[t]=H(F[t]),R[t].primary=R[t][5],C[t]=H(F[t],{theme:"dark",backgroundColor:"#141414"}),C[t].primary=C[t][5]}));const E={};Object.keys(R).forEach((e=>{E[e]=t(R[e],5)})),E.axii=t(H("#0052CC"),5),E.red=t(H("#dd3306"),5),E.black=t(["#666","#555","#444","#333","#222","#111","#000"],3),E.white=t(["#fff"],0),E.gray=t(["#efefef","#eeeeee","#cecece","#cccccc","#bbbbbb"],2);const z=t([12,14,16,20,24,30,38,46,56,68],1),N=t([4,8,12,20,32,48,80,128],1),q={interactable:1,active:{active:1,inactive:2},inverted:1,stressed:1,interact:1,size:{small:1,large:2},elevate:1},W={color({interactable:t,stress:e,inverted:a,active:i,interact:n},o=0,s="axii"){const h=[[void 0,void 0,void 0,void 0,void 0,E.black(o)],[void 0,q.stressed,void 0,void 0,void 0,E.black(1+o)],[q.interactable,void 0,q.inverted,void 0,void 0,E.white()],[q.interactable,void 0,void 0,void 0,void 0,E.black(o)],[q.interactable,void 0,void 0,q.active.active,void 0,E[s](o)],[q.interactable,void 0,void 0,q.active.inactive,void 0,E.gray()],[q.interactable,void 0,void 0,q.active.active,q.interact,E[s](-1+o)]];return r([t,e,a,i,n],h)},shadowColor:(t,e=0,r="axii")=>W.color(t,e-4,r),shadow:({elevate:t},e=0)=>["0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)","0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)","0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)","0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)","0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"][e],bgColor({inverted:t,active:e,interact:a},i,n="axii"){const o=[[void 0,void 0,void 0,"transparent"],[void 0,q.active.active,void 0,E.white()],[q.inverted,void 0,void 0,E[n](+i)],[q.inverted,q.active.inactive,void 0,E[n](-3+i)],[q.inverted,q.active.active,void 0,E[n](i)],[q.inverted,void 0,q.interact,E[n](-1+i)],[q.inverted,q.active.active,q.interact,E[n](-1+i)]];return r([t,e,a],o)},fieldColor:()=>E.gray(-2),separateColor:()=>E.gray(),fontSize({size:t},e=0){const a=[[void 0,z(e)],[q.size.small,z(-1+e)],[q.size.large,z(1+e)]];return r([t],a)},lineHeight:({size:t},e=0)=>(void 0===t?2:1===t?1.5:2.5)+e,weight:({stressed:t})=>t?"bold":void 0,spacing({size:t},e=0){const a=[[void 0,N(e)],[q.size.small,N(-1+e)],[q.size.large,N(1+e)]];return r([t],a)},lineWidth:()=>1,outlineWidth:({size:t})=>2,fontFamily(){},radius:()=>2};function j(){return new e(q,W)}export{E as c,j as s};
