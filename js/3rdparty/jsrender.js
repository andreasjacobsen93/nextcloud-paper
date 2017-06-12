/*! JsRender v0.9.85 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return re(t)&&(t=n(e?e._d?e:n(a,e):a,t),t._d=1),t}function i(e,t){for(var n in t.props)!Me.test(n)||e[n]&&e[n].fix||(e[n]=r(e.constructor.prototype[n],t.props[n]))}function o(e){return e}function a(){return""}function s(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function l(e,t){for(var n in t)e[n]=t[n];return e}function u(e,t,n){return e?ie(e)?u.apply(te,e):(ue.delimiters=[e,t,me=n?n.charAt(0):me],fe=e.charAt(0),ge=e.charAt(1),ve=t.charAt(0),he=t.charAt(1),e="\\"+fe+"(\\"+me+")?\\"+ge,t="\\"+ve+"\\"+he,Y="(?:(\\w+(?=[\\/\\s\\"+ve+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ve+"]|\\"+ve+"(?!\\"+he+"))*?)",le.rTag="(?:"+Y+")",Y=new RegExp("(?:"+e+Y+"(\\/)?|\\"+fe+"(\\"+me+")?\\"+ge+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),le.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),ce):ue.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,a=this,s=!t||"root"===t;if(e){if(o=t&&a.type===t&&a,!o)if(n=a.views,a._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(s)for(;a.parent;)o=a,a=a.parent;else for(;a&&!o;)o=a.type===t?a:void 0,a=a.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t,n){var r,i,o=this,a=o.ctx;if(a&&(a=a[t]),void 0===a&&(a=se[t]),a&&a._cp){if(n)return i=a[1]?le._ceo(a[1].deps):["_jsvCp"],i.unshift(a[0]),i._cp=a._cp,i;a=te.getCtx(a)}return a&&re(a)&&!a._wrp&&(r=function(){return a.apply(this&&this!==e?this:o,arguments)},r._wrp=o,l(r,a)),r||a}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||oe(e))}function h(e,t,n,r){var o,a,s="number"==typeof n&&t.tmpl.bnds[n-1],d=t.linkCtx;return void 0===r&&s&&s._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:s&&(n=s(t.data,t,le)),s=s._bd&&s,a=n.args[0],(e||s)&&(o=d&&d.tag,n.view=t,o||(o=l(new le._tg,{_:{inline:!d,bnd:s,unlinked:!0},tagName:":",cvt:e,flow:!0,tagCtx:n}),d&&(d.tag=o,o.linkCtx=d),n.ctx=H(n.ctx,(d?d.view:t).ctx),i(o,n)),o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs("true"!==e&&e)[0]),a=s&&t._.onRender?t._.onRender(a,t,o):a,void 0!=a?a:""}function m(e,t){var n,r,i,o=this,a=o.tagCtx,s=a.args,d=o.bindTo;if(e=e||o.convert,""+e===e&&(e=a.view.getRsc("converters",e)||O("Unknown converter: '"+e+"'")),s.length||o.argDefault===!1||a.index?e&&!t&&(s=s.slice()):s=[a.view.data],d){for(i=[],n=d.length;n--;)r=d[n],i.unshift(w(a,r));t&&(s=i)}if(e)if(d=d||[0],e=e.apply(o,i||s),n=d.length,n<2&&(e=[e]),t)s=e;else for(;n--;)r=d[n],+r===r&&(s[r]=e?e[n]:void 0);return s}function w(e,t){return e=e[+t===t?"args":"props"],e&&e[t]}function x(){return this.cvtArgs(void 0,!0)}function _(e,t){for(var n,r,i=this;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||te[e][t]}function b(e,t,n,r){e.ctx[n]=le._cp(w(e,t),w(e.params,t),e.view,r)}function y(e,n,r,o,a,s){n=n||ee;var d,l,u,p,c,f,g,v,h,m,w,x,_,y,k,j,C,T,A,R,V,$,M,N=0,E="",S=n.linkCtx||0,P=n.ctx,U=r||n.tmpl,q="number"==typeof o&&n.tmpl.bnds[o-1];for("tag"===e._is?(d=e,e=d.tagName,o=d.tagCtxs,u=d.template):(l=n.getRsc("tags",e)||O("Unknown tag: {{"+e+"}} "),u=l.template),void 0===s&&q&&q._lr&&(s=""),void 0!==s?(E+=s,o=s=[{props:{},args:[]}]):q&&(o=q(n.data,n,le)),g=o.length;N<g;N++)m=o[N],(!S||!S.tag||N&&!S.tag._.inline||d._er)&&((y=U.tmpls&&m.tmpl)&&(y=m.content=U.tmpls[y-1]),m.index=N,m.tmpl=y,m.render=F,m.view=n,m.ctx=H(m.ctx,P)),(r=m.props.tmpl)&&(m.tmpl=n.getTmpl(r)),d||(d=new l._ctr,k=!!d.init,d.parent=f=P&&P.tag,d.tagCtxs=o,V=d.dataMap,S&&(d._.inline=!1,S.tag=d,d.linkCtx=S),(d._.bnd=q||S.fn)?d._.arrVws={}:d.dataBoundOnly&&O("{^{"+e+"}} tag must be data-bound")),_=d.bindTo||[0],o=d.tagCtxs,V=d.dataMap,m.tag=d,V&&o&&(m.map=o[N].map),d.flow||(w=m.ctx=m.ctx||{},p=d.parents=w.parentTags=P&&H(w.parentTags,P.parentTags)||{},f&&(p[f.tagName]=f),p[d.tagName]=w.tag=d);if(!(d._er=s)){for(i(d,o[0]),d.rendering={},N=0;N<g;N++){if(m=d.tagCtx=o[N],A=m.props,d.ctx=m.ctx,N||(k&&(R=d.template,d.init(m,S,d.ctx),k=void 0),S&&(S.attr=d.attr=S.attr||d.attr),c=d.attr,d._.noVws=c&&c!==Ie),T=d.cvtArgs(),d.linkedCtxParam)for(v=_.length;v--;)(x=d.linkedCtxParam[v])&&(M=_[v],b(m,M,x,{tag:d,ind:v}));(j=A.dataMap||V)&&(T.length||A.dataMap)&&(C=m.map,C&&C.src===T[0]&&!a||(C&&C.src&&C.unmap(),C=m.map=j.map(T[0],A,void 0,!d._.bnd)),T=[C.tgt]),h=void 0,d.render&&(h=d.render.apply(d,T),n.linked&&h&&d.linkedElem&&!Ne.test(h)&&(h=I(t.templates(h),T[0],void 0,void 0,n,void 0,void 0,d))),T.length||(T=[n]),void 0===h&&($=T[0],d.contentCtx&&($=d.contentCtx===!0?n:d.contentCtx($)),h=m.render($,!0)||(a?void 0:"")),E=E?E+(h||""):h}d.rendering=void 0}return d.tagCtx=o[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d._.inline&&(E="text"===c?ae.html(E):""),q&&n._.onRender?n._.onRender(E,n,d):E}function k(e,t,n,r,i,o,a,s){var d,l,u,p=this,f="array"===t;p.content=s,p.views=f?[]:{},p.parent=n,p.type=t||"top",p.data=r,p.tmpl=i,u=p._={key:0,useKey:f?0:1,id:""+Se++,onRender:a,bnds:{}},p.linked=!!a,n?(d=n.views,l=n._,l.useKey?(d[u.key="_"+l.useKey++]=p,p.index=qe,p.getIndex=c):d.length===(u.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e}function j(e){var t,n,r;for(t in Le)n=t+"s",e[n]&&(r=e[n],e[n]={},te[n](r,e))}function C(e,t,n){function i(){var t=this;t._={inline:!0,unlinked:!0},t.tagName=e}function o(e){var n;(n=t[e])&&(t[e]=n=ie(n)?n:[n],(c||1)!==n.length&&O(e+" length not same as bindTo "))}var a,s,d,u,p,c,f=t.bindTo,g=new le._tg;if(re(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),void 0!==f)for(f=t.bindTo=ie(f)?f:[f],u=c=f.length;u--;)p=f[u],isNaN(parseInt(p))||(p=parseInt(p)),f[u]=p;if(o("linkedElement"),o("linkedCtxParam"),s=t.baseTag){t.flow=!!t.flow,t.baseTag=s=""+s===s?n&&n.tags[s]||de[s]:s,g=l(g,s);for(d in t)g[d]=r(s[d],t[d])}else g=l(g,t);return void 0!==(a=g.template)&&(g.template=""+a===a?oe[a]||oe(a):a),(i.prototype=g).constructor=g._ctr=i,n&&(g._parentTmpl=n),g}function T(e){return this.base.apply(this,e)}function A(e,n,r,i){function o(n){var o,s;if(""+n===n||n.nodeType>0&&(a=n)){if(!a)if(/^\.\/[^\\:*?"<>]*$/.test(n))(s=oe[e=e||n])?n=s:a=document.getElementById(n);else if(t.fn&&!le.rTmpl.test(n))try{a=t(n,document)[0]}catch(d){}a&&(i?n=a.innerHTML:(o=a.getAttribute(Oe),o&&(o!==Ue?(n=oe[o],delete oe[o]):t.fn&&(n=t.data(a)[Ue])),o&&n||(e=e||(t.fn?Ue:n),n=A(e,a.innerHTML,r,i)),n.tmplName=e=e||o,e!==Ue&&(oe[e]=n),a.setAttribute(Oe,e),t.fn&&t.data(a,Ue,n))),a=void 0}else n.fn||(n=void 0);return n}var a,s,d=n=n||"";if(0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.fn||n.fn?d.fn&&(s=d):(n=M(d,i),q(d.replace(Ce,"\\$&"),n)),s||(s=l(function(){return s.render.apply(s,arguments)},n),j(s)),s}function R(e,t){return re(e)?e.call(t):e}function V(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}function $(e,n){function r(e){u.apply(this,e)}function i(){return new r(arguments)}function o(e,t){for(var n,r,i,o,a=0;a<w;a++)i=c[a],n=void 0,i+""!==i&&(n=i,i=n.getter),void 0===(o=e[i])&&n&&void 0!==(r=n.defaultVal)&&(o=R(r,e)),t(o,n&&p[n.type],i)}function a(t){t=t+""===t?JSON.parse(t):t;var n,r,i=0,a=t,l=[];if(ie(t)){for(t=t||[],n=t.length;i<n;i++)l.push(this.map(t[i]));return l._is=e,l.unmap=d,l.merge=s,l}if(t){o(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),a=this.apply(this,l);for(r in t)r===ne||_[r]||(a[r]=t[r])}return a}function s(e){e=e+""===e?JSON.parse(e):e;var t,n,r,a,s,d,l,u,p,c=0,f=this;if(ie(f)){for(l={},p=[],n=e.length,r=f.length;c<n;c++){for(u=e[c],d=!1,t=0;t<r&&!d;t++)l[t]||(s=f[t],g&&(l[t]=d=g+""===g?u[g]&&(_[g]?s[g]():s[g])===u[g]:g(s,u)));d?(s.merge(u),p.push(s)):p.push(i.map(u))}return void(x?x(f).refresh(p,!0):f.splice.apply(f,[0,f.length].concat(p)))}o(e,function(e,t,n){t?f[n]().merge(e):f[n](e)});for(a in e)a===ne||_[a]||(f[a]=e[a])}function d(){var e,t,n,r,i=0,o=this;if(ie(o))return V(o);for(e={};i<w;i++)t=c[i],n=void 0,t+""!==t&&(n=t,t=n.getter),r=o[t](),e[t]=n&&r&&p[n.type]?ie(r)?V(r):r.unmap():r;for(t in o)"_is"===t||_[t]||t===ne||"_"===t.charAt(0)&&_[t.slice(1)]||re(o[t])||(e[t]=o[t]);return e}var l,u,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:s},f),h="",m="",w=c?c.length:0,x=t.observable,_={};for(r.prototype=v,l=0;l<w;l++)!function(e){e=e.getter||e,_[e]=l+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[l]);return u=new Function(h,m.slice(0,-1)),u.prototype=v,v.constructor=u,i.map=a,i.getters=c,i.extend=f,i.id=g,i}function M(e,n){var r,i=pe._wm||{},o=l({tmpls:[],links:{},bnds:[],_is:"template",render:F},n);return o.markup=e,n.htmlTag||(r=Re.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function N(e,t){function n(i,o,a){var s,d,l,u=le.onStore[e];if(i&&typeof i===Pe&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||te}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(a=o,o=i,i=void 0),l=a?"viewModel"===e?a:a[r]=a[r]||{}:n,s=t.compile,null===o?i&&delete l[i]:(s&&(o=s.call(l,i,o,a,0),o._is=e),i&&(l[i]=o)),u&&u(i,o,a,s),o}var r=e+"s";te[r]=n}function E(e){ce[e]=function(t){return arguments.length?(ue[e]=t,ce):ue[e]}}function S(e){function t(t,n){this.tgt=e.getTgt(t,n)}return re(e)&&(e={getTgt:e}),e.baseMap&&(e=l(l({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function F(e,t,n,r,i,o){var a,s,d,l,u,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Pe&&(t=void 0),(d=this.tag)?(u=this,g=g||u.view,l=g.getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,xe=xe||p,g||((t=t||{}).root=e),!xe||pe.useViews||l.useViews||g&&g!==ee)v=I(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=qe):(g=ee,g.data=e,g.ctx=t),ie(e)&&!n)for(a=0,s=e.length;a<s;a++)g.index=a,g.data=e[a],v+=l.fn(e[a],g,le);else g.data=e,v+=l.fn(e,g,le);g.data=c,g.index=f}p&&(xe=void 0)}return v}function I(e,t,n,r,i,o,a,s){function d(e){_=l({},n),_[x]=e}var u,p,c,f,g,v,h,m,w,x,_,b,y="";if(s&&(w=s.tagName,b=s.tagCtx,n=n?H(n,s.ctx):s.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==b.content?e===s.template?(h=b.tmpl,n._wrp=b.content):h=b.content||i.content:h=i.content,b.props.link===!1&&(n=n||{},n.link=!1),(x=b.props.itemVar)&&("~"!==x.charAt(0)&&U("Use itemVar='~myItem'"),x=x.slice(1))),i&&(a=a||i._.onRender,n=H(n,i.ctx)),o===!0&&(v=!0,o=0),a&&(n&&n.link===!1||s&&s._.noVws)&&(a=void 0),m=a,a===!0&&(m=void 0,a=i._.onRender),n=e.helpers?H(e.helpers,n):n,_=n,ie(t)&&!r)for(c=v?i:void 0!==o&&i||new k(n,"array",i,t,e,o,a,h),i&&i._.useKey&&(c._.bnd=!s||s._.bnd&&s),x&&(c.it=x),x=c.it,u=0,p=t.length;u<p;u++)x&&d(t[u]),f=new k(_,"item",c,t[u],e,(o||0)+u,a,c.content),g=e.fn(t[u],f,le),y+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new k(_,w||"data",i,t,e,o,a,h),s&&!s.flow&&(c.tag=s,s.view=c),y+=e.fn(t,c,le);return m?m(y,c):y}function P(e,t,n){var r=void 0!==n?re(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";return ue.onError&&void 0!==(n=ue.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?ae.html(r):r}function O(e){throw new le.Err(e)}function U(e){O("Syntax error\n"+e)}function q(e,t,n,r,i){function o(t){t-=v,t&&m.push(e.substr(v,t).replace(ke,"\\n"))}function a(t,n){t&&(t+="}}",U((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function s(s,d,l,c,g,x,_,b,y,k,j,C){(_&&d||y&&!l||b&&":"===b.slice(-1)||k)&&U(s),x&&(g=":",c=Ie),y=y||n&&!i;var T,A=(d||n)&&[[]],R="",V="",$="",M="",N="",E="",S="",F="",I=!y&&!g;l=l||(b=b||"#data",g),o(C),v=C+s.length,_?f&&m.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(je,"$1")+";\n"]):l?("else"===l&&(Ae.test(b)&&U('for "{{else if expr}}" use "{{else expr}}"'),A=w[8]&&[[]],w[9]=e.substring(w[9],C),w=h.pop(),m=w[2],I=!0),b&&L(b.replace(ke," "),A,t).replace(Te,function(e,t,n,r,i,o,a,s){return r="'"+i+"':",a?(V+=o+",",M+="'"+s+"',"):n?($+=r+"j._cp("+o+',"'+s+'",view),',E+=r+"'"+s+"',"):t?S+=o:("trigger"===i&&(F+=o),"lateRender"===i&&(T=1),R+=r+o+",",N+=r+"'"+s+"',",p=p||Me.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[l,c||!!r||p||"",I&&[],K(M||(":"===l?"'#data',":""),N,E),K(V||(":"===l?"data,":""),R,$),S,F,T,A||0],m.push(u),I&&(h.push(w),w=u,w[9]=v)):j&&(a(j!==w[0]&&"else"!==w[0]&&j,w[0]),w[9]=e.substring(w[9],C),w=h.pop()),a(!w&&j),m=w[2]}var d,l,u,p,c,f=ue.allowCode||t&&t.allowCode||ce.allowCode===!0,g=[],v=0,h=[],m=g,w=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+ve),e=fe+e+he),a(h[0]&&h[0][2].pop()[0]),e.replace(Y,s),o(e.length),(v=g[g.length-1])&&a(""+v!==v&&+v[9]===v[9]&&v[0]),n){for(l=Q(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][8]);J(l,c)}else l=Q(g,t);return l}function J(e,t){var n,r,i=0,o=t.length;for(e.deps=[],e.paths=[];i<o;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function K(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function B(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function L(e,t,n){function r(r,m,w,x,_,b,y,k,j,C,T,A,R,V,$,M,N,E,S,F){function I(e,n,r,a,s,d,p,c){var f="."===r;if(r&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&U(e),f||(e=(a?'view.hlp("'+a+'")':s?"view":"data")+(c?(d?"."+d:a?"":s?"":"."+r)+(p||""):(c=a?"":s?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),l)){if(J="linkTo"===i?o=t._jsvto=t._jsvto||[]:u.bd,K=f&&J[J.length-1]){if(K._jsv){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[g]=S+(f?1:0)}return e}x&&!k&&(_=x+_),b=b||"",w=w||m||A,_=_||j,C=C||N||"";var P,O,J,K,B,L=")";if("["===C&&(C="[j._sq(",L=")]"),!y||d||s){if(l&&M&&!d&&!s&&(!i||a||o)&&(P=h[g-1],F.length-1>S-(P||0))){if(P=F.slice(P,S+r.length),O!==!0)if(J=o||p[g-1].bd,K=J[J.length-1],K&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;B=K.sb={path:K.sb,bnd:K.bnd}}else J.push(B={path:J.pop()});M=ge+":"+P+" onerror=''"+ve,O=f[M],O||(f[M]=!0,f[M]=O=q(M,n,!0)),O!==!0&&B&&(B._jsv=O,B.prm=u.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return d?(d=!R,d?r:A+'"'):s?(s=!V,s?r:A+'"'):(w?(h[g]=S++,u=p[++g]={bd:[]},w):"")+(E?g?"":(c=F.slice(c,S),(i?(i=a=o=!1,"\b"):"\b,")+c+(c=S+r.length,l&&t.push(u.bd=[]),"\b")):k?(g&&U(e),l&&t.pop(),i=_,a=x,c=S+r.length,l&&(l=u.bd=t[i]=[],l.skp=!x),_+":"):_?_.split("^").join(".").replace(be,I)+(C?(u=p[++g]={bd:[]},v[g]=L,C):b):b?b:$?($=v[g]||$,v[g]=!1,u=p[--g],$+(C?(u=p[++g],v[g]=L,C):"")):T?(v[g]||U(e),","):m?"":(d=R,s=V,'"'))}U(e)}var i,o,a,s,d,l=t&&t[0],u={bd:l},p={0:u},c=0,f=(n?n.links:l&&(l.links=l.links||{}))||ee.tmpl.links,g=0,v={},h={},m=(e+(n?" ":"")).replace(ye,r);return!g&&m||U(e)}function Q(e,t,n){var r,i,o,a,s,d,l,u,p,c,f,g,v,h,m,w,x,_,b,y,k,j,C,T,A,R,V,$,N,E,S,F=0,I=pe.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,P="",O={},q=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(ke," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(O.allowCode=!0),t.debug&&(O.debug=!0),f=t.bnds,x=t.tmpls),r=0;r<q;r++)if(i=e[r],""+i===i)P+='\n+"'+i+'"';else if(o=i[0],"*"===o)P+=";\n"+i[1]+"\nret=ret";else{if(a=i[1],k=!n&&i[2],s=B(i[3],"params")+"},"+B(v=i[4]),$=i[5],E=i[6],S=i[7],j=i[9]&&i[9].replace(je,"$1"),(A="else"===o)?g&&g.push(i[8]):f&&(g=i[8])&&(g=[g],F=f.push(1)),I=I||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?a&&(o=a===Ie?">":a+o):(k&&(b=M(j,O),b.tmplName=_+"/"+o,b.useViews=b.useViews||I,Q(k,b),I=b.useViews,x.push(b)),A||(y=o,I=I||o&&(!de[o]||!de[o].flow),T=P,P=""),C=e[r+1],C=C&&"else"===C[0]),N=$?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||E||a&&a!==Ie||S)){if(V=new Function("data,view,j,u","// "+_+" "+ ++F+" "+o+"\nreturn {"+s+"};"),V._er=$,V._tag=o,V._bd=!!g,V._lr=S,n)return V;J(V,g),w='c("'+a+'",view,',c=!0,h=w+F+",",m=")"}if(P+=R?(n?($?"try{\n":"")+"return ":N)+(c?(c=void 0,I=p=!0,w+(V?(f[F-1]=V,F):"{"+s+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(u=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+s+"},"),y&&!C){if(P="["+P.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(P=new Function("data,view,j,u"," // "+_+" "+F+" "+y+"\nreturn "+P+";"),P._er=$,P._tag=y,g&&J(f[F-1]=P,g),P._lr=S,n)return P;h=w+F+",undefined,",m=")"}P=T+N+w+(P.deps&&F||P)+")",g=0,y=0}$&&(I=!0,P+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+$+")"+m+";}"+(n?"":"ret=ret"))}P="// "+_+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(O.debug?"debugger;":"")+P+(n?"\n":";\nreturn ret;"),ue.debugMode!==!1&&(P="try {\n"+P+"\n}catch(e){\nreturn j._err(e, view);\n}");try{P=new Function("data,view,j,u",P)}catch(K){U("Compiled template code:\n\n"+P+'\n: "'+(K.message||K)+'"')}return t&&(t.fn=P,t.useViews=!!I),P}function H(e,t){return e&&e!==t?t?l(l({},t),e):e:t&&l({},t)}function D(e){return Fe[e]||(Fe[e]="&#"+e.charCodeAt(0)+";")}function Z(e){var t,n,r=[];if(typeof e===Pe)for(t in e)n=e[t],t!==ne&&e.hasOwnProperty(t)&&!re(n)&&r.push({key:t,prop:n});return r}function z(e,n,r){var i=this.jquery&&(this[0]||O("Unknown template")),o=i.getAttribute(Oe);return F.call(o&&t.data(i)[Ue]||oe(i),e,n,r)}function G(e){return void 0!=e?$e.test(e)&&(""+e).replace(Ee,D)||e:""}var W=t===!1;t=t&&t.fn?t:e.jQuery;var X,Y,ee,te,ne,re,ie,oe,ae,se,de,le,ue,pe,ce,fe,ge,ve,he,me,we,xe,_e="v0.9.85",be=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ye=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,ke=/[ \t]*(\r\n|\n|\r)/g,je=/\\(['"])/g,Ce=/['"\\]/g,Te=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Ae=/^if\s/,Re=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Me=/^on[A-Z]|^convert(Back)?$/,Ne=/^\#\d+_`[\s\S]*\/\d+_`$/,Ee=Ve,Se=0,Fe={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Ie="html",Pe="object",Oe="data-jsv-tmpl",Ue="jsvTmpl",qe="For #index in nested block use #getIndex().",Je={},Ke=e.jsrender,Be=Ke&&t&&!t.render,Le={template:{compile:A},tag:{compile:C},viewModel:{compile:$},helper:{},converter:{}};if(te={jsviews:_e,sub:{View:k,Err:d,tmplFn:q,parse:L,extend:l,extendCtx:H,syntaxErr:U,onStore:{template:function(e,t){null===t?delete Je[e]:Je[e]=t}},addSetting:E,settings:{allowCode:!1},advSet:a,_ths:i,_gm:r,_tg:function(){},_cnvt:h,_tag:y,_er:O,_err:P,_html:G,_cp:o,_sq:function(e){return"constructor"===e&&U(""),e}},settings:{delimiters:u,advanced:function(e){return e?(l(pe,e),le.advSet(),ce):pe}},getCtx:o,map:S},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",k.prototype={get:p,getIndex:f,getRsc:_,getTmpl:v,hlp:g,_is:"view"},le=te.sub,ce=te.settings,!(Ke||t&&t.render)){for(X in Le)N(X,Le[X]);ae=te.converters,se=te.helpers,de=te.tags,le._tg.prototype={baseApply:T,cvtArgs:m,bndArgs:x},ee=le.topView=new k,t?(t.fn.render=z,ne=t.expando,t.observable&&(l(le,t.views.sub),te.map=t.views.map)):(t={},W&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},le._jq=function(e){e!==t&&(l(e,t),t=e,t.fn.render=z,delete t.jsrender,ne=t.expando)},t.jsrender=_e),ue=le.settings,ue.allowCode=!1,re=t.isFunction,t.render=Je,t.views=te,t.templates=oe=te.templates;for(we in ue)E(we);(ce.debugMode=function(e){return void 0===e?ue.debugMode:(ue.debugMode=e,ue.onError=e+""===e?new Function("","return '"+e+"';"):re(e)?e:void 0,ce)})(!1),pe=ue.advanced={useViews:!1,_jsv:!1},de({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,t.selected=n.index,n.render(n.view,!0));return r},flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",a=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),a+=ie(t)?t.length:1),(r.rendering.done=a)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:S(Z),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:se.dbg=ae.dbg=s}),ae({html:G,attr:G,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return ue=le.settings,ie=(t||Ke).isArray,ce.delimiters("{{","}}","^"),Be&&Ke.views.sub._jq(t),t||Ke},window);
//# sourceMappingURL=jsrender.min.js.map