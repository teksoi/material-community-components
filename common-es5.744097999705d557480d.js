(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3TxT":function(n,t,o){"use strict";o.d(t,"a",function(){return u});var r=o("7PuO"),e=o("26FU"),u=function(){function n(n,t){this.emptyColor=n,this.usedColors=t,this._colors=new e.a([]),this._colors.next(t)}return n.prototype.addColor=function(n){if(n&&Object(r.d)(n)){n=Object(r.c)(n)||this.emptyColor;var t=this._colors.getValue();t.find(function(t){return t===n})||(t.push(n),this._colors.next(t))}},n.prototype.getColors=function(){return this._colors.asObservable()},n.prototype.resetUseColors=function(){this._colors.next([])},n}()},"5DDP":function(n,t,o){"use strict";o.d(t,"a",function(){return e});var r=o("7PuO"),e=function(){function n(){}return n.forRoot=function(t){return{ngModule:n,providers:[{provide:r.a,useValue:t.empty_color||"none"},{provide:r.b,useValue:t.used_colors||[]}]}},n}()},"7PuO":function(n,t,o){"use strict";o.d(t,"a",function(){return e}),o.d(t,"b",function(){return u}),o.d(t,"c",function(){return c}),o.d(t,"d",function(){return i});var r=o("CcnG"),e=new r.p("empty-color"),u=new r.p("used-colors");function c(n){if(n&&0!==n.indexOf("#")&&(n="#"+n),i(n))return n.toUpperCase()}function i(n){return!(!n||"#"!==n.charAt(0)||n.length<4||n.length>7)&&-1===n.replace("#","").match(/.{1,2}/g).map(function(n){return Number.isNaN(parseInt(n,16))}).indexOf(!0)}},"V6/q":function(n,t,o){"use strict";o("5DDP"),o("3TxT"),o("7PuO")},cXXw:function(n,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(){return function(){}}()},cj8b:function(n,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(){return function(){}}()}}]);