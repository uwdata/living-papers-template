import define1 from 'https://api.observablehq.com/@jheer/scrubber.js?v=3';
import define2 from 'https://api.observablehq.com/@d3/multi-line-chart.js?v=3';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1};class d$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}d$1.finalized=!0,d$1.elementProperties=new Map,d$1.elementStyles=[],d$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:d$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.4.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$1="?"+o$1,l$1=`<${n$1}>`,h=document,r=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new S(i.insertBefore(r(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},E=h.createTreeWalker(h,129,null,!1),C=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+l$1:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+o$1+y):s+o$1+(-2===c?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e?e.createHTML(u):u,n]};class P{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,i);if(this.el=P.createElement(v,e),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=E.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?H:"@"===i[1]?I:M});}else c.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$1),i=t.length-1;if(i>0){l.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r()),E.nextNode(),c.push({type:2,index:++h});l.append(t[i],r());}}}else if(8===l.nodeType)if(l.data===n$1)c.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$1,t+1));)c.push({type:7,index:h}),t+=o$1.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=V(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=E.nextNode(),l++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class S{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):c(t)?this.O(t):this.$(t);}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t));}$(t){this._$AH!==b&&d(this._$AH)?this._$AA.nextSibling.data=t:this.k(h.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new N(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}O(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new S(this.S(r()),this.S(r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.P(t);}P(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class R extends M{constructor(){super(...arguments),this.type=3;}P(t){this.element[this.name]=t===b?void 0:t;}}const k=s$1?s$1.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4;}P(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t);}}const Z=i.litHtmlPolyfillSupport;null==Z||Z(P,S),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends d$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=A(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return x}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2");

const CELL_VIEW = 'cell-view';
const DATA_ATTR = 'data-attr';
const DATA_CELL = 'data-cell';
const DATA_BIND = 'data-bind';
const DATA_BIND_SET = 'data-bind-set';

async function binding(runtime, name) {
  return new Binding(runtime, name, await runtime.value(name));
}

function onNextTick(f) {
  typeof window !== 'undefined' && window.requestAnimationFrame
    ? window.requestAnimationFrame(f)
    : setTimeout(f, 0);
}

class Binding {
  constructor(runtime, name, value) {
    this.runtime = runtime;
    this.name = name;
    this.value = value;
    this.paused = false;
    this.ignore = null;
    this.queued = [];
    this.inputs = new Map;

    // observe changes to the variable within the runtime
    runtime.variable(null, x => x, [name], {
      fulfilled: value => this.paused ? this.dequeue() : this.update(value)
    });
  }

  /**
   * Add an input to the binding group.
   */
  add(input, {
    override = false,
    event = _eventof(input),
    valueof = _valueof
  } = {}) {
    if (override) {
      // set bound variable value to the input value
      this.update(valueof(input));
    } else {
      // set input value to the bound variable value
      valueof(input, this.value);
    }

    // register bindings
    const listener = () => this.queue(input, valueof(input));
    this.inputs.set(input, { input, event, listener, valueof });
    input.addEventListener(event, listener);
    return this;
  }

  /**
   * Add a changeable cell value to the binding group.
   */
  addCell(cell, options) {
    let prev;
    cell.addEventListener('change', async () => {
      const next = cell.value;
      if (next === prev) return;
      if (prev) this.delete(prev);
      this.add(prev = next, options);
    });
    return this;
  }

  /**
   * Delete an input from the binding group.
   */
  delete(input) {
    const { event, listener } = this.inputs.get(input);
    input.removeEventListener(event, listener);
    this.inputs.delete(input);
  }

  /**
   * Queue requested changes to the bound variable value.
   * Process events on next tick. This lets us to debounce
   * multiple events arriving on the same tick.
   */
  queue(input, value) {
    if (this.ignore !== input) {
      if (!this.paused && !this.queued.length) {
        onNextTick(() => this.dequeue());
      }
      this.queued.push(value);
    }
  }

  /**
   * Clear request queue, process only most recent entry.
   */
  dequeue() {
    this.paused = false;
    if (this.queued.length) {
      const queue = this.queued;
      this.queued = [];
      this.update(queue.pop());
    }
  }

  /**
   * Update the value of the binding group.
   */
  update(value) {
    if (this.value === value) return;
    this.value = value;
    this.paused = true;

    // update bound inputs as needed
    for (const { input, event, valueof } of this.inputs.values()) {
      if (valueof(input) !== value) {
        this.ignore = input;
        valueof(input, value);
        input.dispatchEvent(new Event(event));
        this.ignore = null;
      }
    }

    // update shared variable
    this.runtime.redefine(this.name, value);
  }
}

/**
 * Get/set the state value of an input element.
 */
function _valueof(input, value) {
  if (arguments.length > 1) {
    switch (input.type) {
      case 'date': return (input.valueAsDate = value);
      case 'checkbox': return (input.checked = value);
      default: return (input.value = value);
    }
  } else {
    switch (input.type) {
      case 'range':
      case 'number': return input.valueAsNumber;
      case 'date': return input.valueAsDate;
      case 'checkbox': return input.checked;
      default: return input.value;
    }
  }
}

/**
 * Get the update event type for an input element.
 */
function _eventof(input) {
  switch (input.type) {
    case 'button':
    case 'submit':
    case 'checkbox': return 'click';
    default: return 'input';
  }
}

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Observer {
  constructor(callback) {
    this.status = PENDING;
    this.value = undefined;
    this.callback = callback;
  }

  promise() {
    switch (this.status) {
      case FULFILLED:
        return Promise.resolve(this.value);
      case REJECTED:
        return Promise.reject(this.value.error);
      case PENDING:
        return this._promise || (this._promise = new Promise((resolve, reject) => {
          this._resolve = resolve;
          this._reject = reject;
        }));
    }
  }

  update(status, value) {
    this.status = status;
    if (status !== PENDING) this.value = value;
    this.callback(this.status, this.value);
  }

  pending() {
    this.update(PENDING, undefined);
  }

  fulfilled(value) {
    this.update(FULFILLED, value);
    if (this._promise) {
      this._resolve(value);
      this._promise = this._resolve = this._reject = null;
    }
  }

  rejected(error, name) {
    this.update(REJECTED, { error, name });
    if (this._promise) {
      this._reject(error);
      this._promise = this._resolve = this._reject = null;
    }
  }
}

function hydrate(runtime, root, module, bind = {}) {
  const {
    cells = () => [],
    attrs = () => [],
    event = () => []
  } = module;

  const resolve = resolver$1(root);
  runtime.define(cells(), observeCells(root));
  runtime.define(attrs(), observeAttrs(resolve, bind.attrs));
  runtime.define(event(), observeEvent(resolve, bind.events, runtime));
  createBindings(root, runtime);
}

function resolver$1(root) {
  const map = new Map;
  root.querySelectorAll(`[${DATA_ATTR}]`).forEach(node => {
    map.set(node.getAttribute(DATA_ATTR), node);
  });
  return el => typeof el === 'object' ? el : map.get(el);
}

function observeCells(root) {
  const map = new Map;
  root.querySelectorAll(CELL_VIEW).forEach(node => {
    map.set(+node.getAttribute(DATA_CELL), node.observer);
  });
  return def => map.get(def.cell);
}

function observeAttrs(resolve, attrs) {
  return def => {
    const [target, name] = attrs[def.cell];
    const node = resolve(target);
    const observer = new Observer((status, value) => {
      if (status === FULFILLED) {
        node.setAttribute(name, value);
      } else if (status === REJECTED) {
        console.error(value.error);
      }
    });
    node.observers = node.observers || new Map;
    node.observers.set(name, observer);
    return observer;
  };
}

function observeEvent(resolve, event, runtime) {
  return def => {
    const { define: [id], cell } = def;
    const [source, name] = event[cell];
    const node = resolve(source);
    node.addEventListener(name, runtime.handler(id));
    return {
      rejected(err) {
        console.error(err);
      }
    };
  };
}

function createBindings(root, runtime) {
  const bind = new Map;

  // collect input elements with declared bindings
  const process = (attr, override) => {
    root.querySelectorAll(`[${attr}]`).forEach(el => {
      const name = el.getAttribute(attr);
      const input = { el, override };
      bind.has(name) ? bind.get(name).push(input) : bind.set(name, [input]);
    });
  };
  process(DATA_BIND, false);
  process(DATA_BIND_SET, true);

  // instantiate bindings
  const add = (binding, { el, override }) => {
    el.tagName.toLowerCase() === CELL_VIEW
      ? binding.addCell(el, { override })
      : binding.add(el, { override });
  };
  bind.forEach((list, name) => {
    binding(runtime, name).then(binding => {
      list.forEach(input => add(binding, input));
    });
  });
}

function reference(root, refdata) {
  root.querySelectorAll('cite-ref').forEach(cite => {
    if (cite.index != null) {
      cite.data = refdata[cite.index - 1];
    }
  });
}

const {getPrototypeOf, getOwnPropertyDescriptors} = Object;
getPrototypeOf({});

var EOL = {},
    EOF = {},
    QUOTE = 34,
    NEWLINE = 10,
    RETURN = 13;

function objectConverter(columns) {
  return new Function("d", "return {" + columns.map(function(name, i) {
    return JSON.stringify(name) + ": d[" + i + "] || \"\"";
  }).join(",") + "}");
}

function customConverter(columns, f) {
  var object = objectConverter(columns);
  return function(row, i) {
    return f(object(row), i, columns);
  };
}

// Compute unique columns in order of discovery.
function inferColumns(rows) {
  var columnSet = Object.create(null),
      columns = [];

  rows.forEach(function(row) {
    for (var column in row) {
      if (!(column in columnSet)) {
        columns.push(columnSet[column] = column);
      }
    }
  });

  return columns;
}

function pad(value, width) {
  var s = value + "", length = s.length;
  return length < width ? new Array(width - length + 1).join(0) + s : s;
}

function formatYear(year) {
  return year < 0 ? "-" + pad(-year, 6)
    : year > 9999 ? "+" + pad(year, 6)
    : pad(year, 4);
}

function formatDate(date) {
  var hours = date.getUTCHours(),
      minutes = date.getUTCMinutes(),
      seconds = date.getUTCSeconds(),
      milliseconds = date.getUTCMilliseconds();
  return isNaN(date) ? "Invalid Date"
      : formatYear(date.getUTCFullYear()) + "-" + pad(date.getUTCMonth() + 1, 2) + "-" + pad(date.getUTCDate(), 2)
      + (milliseconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3) + "Z"
      : seconds ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2) + "Z"
      : minutes || hours ? "T" + pad(hours, 2) + ":" + pad(minutes, 2) + "Z"
      : "");
}

function dsv$1(delimiter) {
  var reFormat = new RegExp("[\"" + delimiter + "\n\r]"),
      DELIMITER = delimiter.charCodeAt(0);

  function parse(text, f) {
    var convert, columns, rows = parseRows(text, function(row, i) {
      if (convert) return convert(row, i - 1);
      columns = row, convert = f ? customConverter(row, f) : objectConverter(row);
    });
    rows.columns = columns || [];
    return rows;
  }

  function parseRows(text, f) {
    var rows = [], // output rows
        N = text.length,
        I = 0, // current character index
        n = 0, // current line number
        t, // current token
        eof = N <= 0, // current token followed by EOF?
        eol = false; // current token followed by EOL?

    // Strip the trailing newline.
    if (text.charCodeAt(N - 1) === NEWLINE) --N;
    if (text.charCodeAt(N - 1) === RETURN) --N;

    function token() {
      if (eof) return EOF;
      if (eol) return eol = false, EOL;

      // Unescape quotes.
      var i, j = I, c;
      if (text.charCodeAt(j) === QUOTE) {
        while (I++ < N && text.charCodeAt(I) !== QUOTE || text.charCodeAt(++I) === QUOTE);
        if ((i = I) >= N) eof = true;
        else if ((c = text.charCodeAt(I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        return text.slice(j + 1, i - 1).replace(/""/g, "\"");
      }

      // Find next delimiter or newline.
      while (I < N) {
        if ((c = text.charCodeAt(i = I++)) === NEWLINE) eol = true;
        else if (c === RETURN) { eol = true; if (text.charCodeAt(I) === NEWLINE) ++I; }
        else if (c !== DELIMITER) continue;
        return text.slice(j, i);
      }

      // Return last token before EOF.
      return eof = true, text.slice(j, N);
    }

    while ((t = token()) !== EOF) {
      var row = [];
      while (t !== EOL && t !== EOF) row.push(t), t = token();
      if (f && (row = f(row, n++)) == null) continue;
      rows.push(row);
    }

    return rows;
  }

  function preformatBody(rows, columns) {
    return rows.map(function(row) {
      return columns.map(function(column) {
        return formatValue(row[column]);
      }).join(delimiter);
    });
  }

  function format(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return [columns.map(formatValue).join(delimiter)].concat(preformatBody(rows, columns)).join("\n");
  }

  function formatBody(rows, columns) {
    if (columns == null) columns = inferColumns(rows);
    return preformatBody(rows, columns).join("\n");
  }

  function formatRows(rows) {
    return rows.map(formatRow).join("\n");
  }

  function formatRow(row) {
    return row.map(formatValue).join(delimiter);
  }

  function formatValue(value) {
    return value == null ? ""
        : value instanceof Date ? formatDate(value)
        : reFormat.test(value += "") ? "\"" + value.replace(/"/g, "\"\"") + "\""
        : value;
  }

  return {
    parse: parse,
    parseRows: parseRows,
    format: format,
    formatBody: formatBody,
    formatRows: formatRows,
    formatRow: formatRow,
    formatValue: formatValue
  };
}

var csv = dsv$1(",");

var csvParse = csv.parse;
var csvParseRows = csv.parseRows;

var tsv = dsv$1("\t");

var tsvParse = tsv.parse;
var tsvParseRows = tsv.parseRows;

function autoType(object) {
  for (var key in object) {
    var value = object[key].trim(), number, m;
    if (!value) value = null;
    else if (value === "true") value = true;
    else if (value === "false") value = false;
    else if (value === "NaN") value = NaN;
    else if (!isNaN(number = +value)) value = number;
    else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
      if (fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
      value = new Date(value);
    }
    else continue;
    object[key] = value;
  }
  return object;
}

// https://github.com/d3/d3-dsv/issues/45
const fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

function dependency(name, version, main) {
  return {
    resolve(path = main) {
      return `${name}@${version}/${path}`;
    }
  };
}

const d3 = dependency("d3", "7.6.1", "dist/d3.min.js");
const inputs = dependency("@observablehq/inputs", "0.10.4", "dist/inputs.min.js");
const plot = dependency("@observablehq/plot", "0.6.0", "dist/plot.umd.min.js");
const graphviz = dependency("@observablehq/graphviz", "0.2.1", "dist/graphviz.min.js");
const highlight = dependency("@observablehq/highlight.js", "2.0.0", "highlight.min.js");
const katex = dependency("@observablehq/katex", "0.11.1", "dist/katex.min.js");
const lodash = dependency("lodash", "4.17.21", "lodash.min.js");
const htl = dependency("htl", "0.3.1", "dist/htl.min.js");
const jszip = dependency("jszip", "3.10.0", "dist/jszip.min.js");
const marked = dependency("marked", "0.3.12", "marked.min.js");
const sql = dependency("sql.js", "1.7.0", "dist/sql-wasm.js");
const vega = dependency("vega", "5.22.1", "build/vega.min.js");
const vegalite = dependency("vega-lite", "5.5.0", "build/vega-lite.min.js");
const vegaliteApi = dependency("vega-lite-api", "5.0.0", "build/vega-lite-api.min.js");
const arrow = dependency("apache-arrow", "4.0.1", "Arrow.es2015.min.js");
const arquero = dependency("arquero", "4.8.8", "dist/arquero.min.js");
const topojson = dependency("topojson-client", "3.1.0", "dist/topojson-client.min.js");
const exceljs = dependency("exceljs", "4.3.0", "dist/exceljs.min.js");
const mermaid$1 = dependency("mermaid", "9.1.6", "dist/mermaid.min.js");
const leaflet$1 = dependency("leaflet", "1.8.0", "dist/leaflet.js");

const metas = new Map;
const queue$1 = [];
const map$2 = queue$1.map;
const some = queue$1.some;
const hasOwnProperty = queue$1.hasOwnProperty;
const identifierRe = /^((?:@[^/@]+\/)?[^/@]+)(?:@([^/]+))?(?:\/(.*))?$/;
const versionRe = /^\d+\.\d+\.\d+(-[\w-.+]+)?$/;
const extensionRe = /(?:\.[^/]*|\/)$/;

class RequireError extends Error {
  constructor(message) {
    super(message);
  }
}

RequireError.prototype.name = RequireError.name;

function parseIdentifier(identifier) {
  const match = identifierRe.exec(identifier);
  return match && {
    name: match[1],
    version: match[2],
    path: match[3]
  };
}

function resolveFrom(origin = "https://cdn.jsdelivr.net/npm/", mains = ["unpkg", "jsdelivr", "browser", "main"]) {
  if (!/\/$/.test(origin)) throw new Error("origin lacks trailing slash");

  function main(meta) {
    for (const key of mains) {
      let value = meta[key];
      if (typeof value === "string") {
        if (value.startsWith("./")) value = value.slice(2);
        return extensionRe.test(value) ? value : `${value}.js`;
      }
    }
  }

  function resolveMeta(target) {
    const url = `${origin}${target.name}${target.version ? `@${target.version}` : ""}/package.json`;
    let meta = metas.get(url);
    if (!meta) metas.set(url, meta = fetch(url).then(response => {
      if (!response.ok) throw new RequireError("unable to load package.json");
      if (response.redirected && !metas.has(response.url)) metas.set(response.url, meta);
      return response.json();
    }));
    return meta;
  }

  return async function resolve(name, base) {
    if (name.startsWith(origin)) name = name.substring(origin.length);
    if (/^(\w+:)|\/\//i.test(name)) return name;
    if (/^[.]{0,2}\//i.test(name)) return new URL(name, base == null ? location : base).href;
    if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new RequireError("illegal name");
    const target = parseIdentifier(name);
    if (!target) return `${origin}${name}`;
    if (!target.version && base != null && base.startsWith(origin)) {
      const meta = await resolveMeta(parseIdentifier(base.substring(origin.length)));
      target.version = meta.dependencies && meta.dependencies[target.name] || meta.peerDependencies && meta.peerDependencies[target.name];
    }
    if (target.path && !extensionRe.test(target.path)) target.path += ".js";
    if (target.path && target.version && versionRe.test(target.version)) return `${origin}${target.name}@${target.version}/${target.path}`;
    const meta = await resolveMeta(target);
    return `${origin}${meta.name}@${meta.version}/${target.path || main(meta) || "index.js"}`;
  };
}

var require = requireFrom(resolveFrom());

function requireFrom(resolver) {
  const cache = new Map;
  const requireBase = requireRelative(null);

  function requireAbsolute(url) {
    if (typeof url !== "string") return url;
    let module = cache.get(url);
    if (!module) cache.set(url, module = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.onload = () => {
        try { resolve(queue$1.pop()(requireRelative(url))); }
        catch (error) { reject(new RequireError("invalid module")); }
        script.remove();
      };
      script.onerror = () => {
        reject(new RequireError("unable to load module"));
        script.remove();
      };
      script.async = true;
      script.src = url;
      window.define = define;
      document.head.appendChild(script);
    }));
    return module;
  }

  function requireRelative(base) {
    return name => Promise.resolve(resolver(name, base)).then(requireAbsolute);
  }

  function requireAlias(aliases) {
    return requireFrom((name, base) => {
      if (name in aliases) {
        name = aliases[name], base = null;
        if (typeof name !== "string") return name;
      }
      return resolver(name, base);
    });
  }

  function require(name) {
    return arguments.length > 1
        ? Promise.all(map$2.call(arguments, requireBase)).then(merge)
        : requireBase(name);
  }

  require.alias = requireAlias;
  require.resolve = resolver;

  return require;
}

function merge(modules) {
  const o = {};
  for (const m of modules) {
    for (const k in m) {
      if (hasOwnProperty.call(m, k)) {
        if (m[k] == null) Object.defineProperty(o, k, {get: getter(m, k)});
        else o[k] = m[k];
      }
    }
  }
  return o;
}

function getter(object, name) {
  return () => object[name];
}

function isbuiltin(name) {
  name = name + "";
  return name === "exports" || name === "module";
}

function define(name, dependencies, factory) {
  const n = arguments.length;
  if (n < 2) factory = name, dependencies = [];
  else if (n < 3) factory = dependencies, dependencies = typeof name === "string" ? [] : name;
  queue$1.push(some.call(dependencies, isbuiltin) ? require => {
    const exports = {};
    const module = {exports};
    return Promise.all(map$2.call(dependencies, name => {
      name = name + "";
      return name === "exports" ? exports : name === "module" ? module : require(name);
    })).then(dependencies => {
      factory.apply(null, dependencies);
      return module.exports;
    });
  } : require => {
    return Promise.all(map$2.call(dependencies, require)).then(dependencies => {
      return typeof factory === "function" ? factory.apply(null, dependencies) : factory;
    });
  });
}

define.amd = {};

let requireDefault = require;

function setDefaultRequire(require) {
  requireDefault = require;
}

function requirer(resolve) {
  return resolve == null ? requireDefault : requireFrom(resolve);
}

async function sqlite(require) {
  const [init, dist] = await Promise.all([require(sql.resolve()), require.resolve(sql.resolve("dist/"))]);
  return init({locateFile: file => `${dist}${file}`});
}

class SQLiteDatabaseClient {
  constructor(db) {
    Object.defineProperties(this, {
      _db: {value: db}
    });
  }
  static async open(source) {
    const [SQL, buffer] = await Promise.all([sqlite(requireDefault), Promise.resolve(source).then(load$1)]);
    return new SQLiteDatabaseClient(new SQL.Database(buffer));
  }
  async query(query, params) {
    return await exec(this._db, query, params);
  }
  async queryRow(query, params) {
    return (await this.query(query, params))[0] || null;
  }
  async explain(query, params) {
    const rows = await this.query(`EXPLAIN QUERY PLAN ${query}`, params);
    return element$1("pre", {className: "observablehq--inspect"}, [
      text$2(rows.map(row => row.detail).join("\n"))
    ]);
  }
  async describeTables({schema} = {}) {
    return this.query(`SELECT NULLIF(schema, 'main') AS schema, name FROM pragma_table_list() WHERE type = 'table'${schema == null ? "" : ` AND schema = ?`} AND name NOT LIKE 'sqlite_%'`, schema == null ? [] : [schema]);
  }
  async describeColumns({schema, table} = {}) {
    if (table == null) throw new Error(`missing table`);
    const rows = await this.query(`SELECT name, type, "notnull" FROM pragma_table_info(?${schema == null ? "" : `, ?`}) ORDER BY cid`, schema == null ? [table] : [table, schema]);
    if (!rows.length) throw new Error(`table not found: ${table}`);
    return rows.map(({name, type, notnull}) => ({name, type: sqliteType(type), databaseType: type, nullable: !notnull}));
  }
  async describe(object) {
    const rows = await (object === undefined
      ? this.query(`SELECT name FROM sqlite_master WHERE type = 'table'`)
      : this.query(`SELECT * FROM pragma_table_info(?)`, [object]));
    if (!rows.length) throw new Error("Not found");
    const {columns} = rows;
    return element$1("table", {value: rows}, [
      element$1("thead", [element$1("tr", columns.map(c => element$1("th", [text$2(c)])))]),
      element$1("tbody", rows.map(r => element$1("tr", columns.map(c => element$1("td", [text$2(r[c])])))))
    ]);
  }
  async sql() {
    return this.query(...this.queryTag.apply(this, arguments));
  }
  queryTag(strings, ...params) {
    return [strings.join("?"), params];
  }
}

Object.defineProperty(SQLiteDatabaseClient.prototype, "dialect", {
  value: "sqlite"
});

// https://www.sqlite.org/datatype3.html
function sqliteType(type) {
  switch (type) {
    case "NULL":
      return "null";
    case "INT":
    case "INTEGER":
    case "TINYINT":
    case "SMALLINT":
    case "MEDIUMINT":
    case "BIGINT":
    case "UNSIGNED BIG INT":
    case "INT2":
    case "INT8":
      return "integer";
    case "TEXT":
    case "CLOB":
      return "string";
    case "REAL":
    case "DOUBLE":
    case "DOUBLE PRECISION":
    case "FLOAT":
    case "NUMERIC":
      return "number";
    case "BLOB":
      return "buffer";
    case "DATE":
    case "DATETIME":
      return "string"; // TODO convert strings to Date instances in sql.js
    default:
      return /^(?:(?:(?:VARYING|NATIVE) )?CHARACTER|(?:N|VAR|NVAR)CHAR)\(/.test(type) ? "string"
        : /^(?:DECIMAL|NUMERIC)\(/.test(type) ? "number"
        : "other";
  }
}

function load$1(source) {
  return typeof source === "string" ? fetch(source).then(load$1)
    : source instanceof Response || source instanceof Blob ? source.arrayBuffer().then(load$1)
    : source instanceof ArrayBuffer ? new Uint8Array(source)
    : source;
}

async function exec(db, query, params) {
  const [result] = await db.exec(query, params);
  if (!result) return [];
  const {columns, values} = result;
  const rows = values.map(row => Object.fromEntries(row.map((value, i) => [columns[i], value])));
  rows.columns = columns;
  return rows;
}

function element$1(name, props, children) {
  if (arguments.length === 2) children = props, props = undefined;
  const element = document.createElement(name);
  if (props !== undefined) for (const p in props) element[p] = props[p];
  if (children !== undefined) for (const c of children) element.appendChild(c);
  return element;
}

function text$2(value) {
  return document.createTextNode(value);
}

class Workbook {
  constructor(workbook) {
    Object.defineProperties(this, {
      _: {value: workbook},
      sheetNames: {
        value: workbook.worksheets.map((s) => s.name),
        enumerable: true
      }
    });
  }
  sheet(name, options) {
    const sname =
      typeof name === "number"
        ? this.sheetNames[name]
        : this.sheetNames.includes((name += ""))
        ? name
        : null;
    if (sname == null) throw new Error(`Sheet not found: ${name}`);
    const sheet = this._.getWorksheet(sname);
    return extract(sheet, options);
  }
}

function extract(sheet, {range, headers} = {}) {
  let [[c0, r0], [c1, r1]] = parseRange(range, sheet);
  const headerRow = headers ? sheet._rows[r0++] : null;
  let names = new Set(["#"]);
  for (let n = c0; n <= c1; n++) {
    const value = headerRow ? valueOf(headerRow.findCell(n + 1)) : null;
    let name = (value && value + "") || toColumn(n);
    while (names.has(name)) name += "_";
    names.add(name);
  }
  names = new Array(c0).concat(Array.from(names));

  const output = new Array(r1 - r0 + 1);
  for (let r = r0; r <= r1; r++) {
    const row = (output[r - r0] = Object.create(null, {"#": {value: r + 1}}));
    const _row = sheet.getRow(r + 1);
    if (_row.hasValues)
      for (let c = c0; c <= c1; c++) {
        const value = valueOf(_row.findCell(c + 1));
        if (value != null) row[names[c + 1]] = value;
      }
  }

  output.columns = names.filter(() => true); // Filter sparse columns
  return output;
}

function valueOf(cell) {
  if (!cell) return;
  const {value} = cell;
  if (value && typeof value === "object" && !(value instanceof Date)) {
    if (value.formula || value.sharedFormula) {
      return value.result && value.result.error ? NaN : value.result;
    }
    if (value.richText) {
      return richText(value);
    }
    if (value.text) {
      let {text} = value;
      if (text.richText) text = richText(text);
      return value.hyperlink && value.hyperlink !== text
        ? `${value.hyperlink} ${text}`
        : text;
    }
    return value;
  }
  return value;
}

function richText(value) {
  return value.richText.map((d) => d.text).join("");
}

function parseRange(specifier = ":", {columnCount, rowCount}) {
  specifier += "";
  if (!specifier.match(/^[A-Z]*\d*:[A-Z]*\d*$/))
    throw new Error("Malformed range specifier");
  const [[c0 = 0, r0 = 0], [c1 = columnCount - 1, r1 = rowCount - 1]] =
    specifier.split(":").map(fromCellReference);
  return [
    [c0, r0],
    [c1, r1]
  ];
}

// Returns the default column name for a zero-based column index.
// For example: 0 -> "A", 1 -> "B", 25 -> "Z", 26 -> "AA", 27 -> "AB".
function toColumn(c) {
  let sc = "";
  c++;
  do {
    sc = String.fromCharCode(64 + (c % 26 || 26)) + sc;
  } while ((c = Math.floor((c - 1) / 26)));
  return sc;
}

// Returns the zero-based indexes from a cell reference.
// For example: "A1" -> [0, 0], "B2" -> [1, 1], "AA10" -> [26, 9].
function fromCellReference(s) {
  const [, sc, sr] = s.match(/^([A-Z]*)(\d*)$/);
  let c = 0;
  if (sc)
    for (let i = 0; i < sc.length; i++)
      c += Math.pow(26, sc.length - i - 1) * (sc.charCodeAt(i) - 64);
  return [c ? c - 1 : undefined, sr ? +sr - 1 : undefined];
}

async function remote_fetch(file) {
  const response = await fetch(await file.url());
  if (!response.ok) throw new Error(`Unable to load file: ${file.name}`);
  return response;
}

async function dsv(file, delimiter, {array = false, typed = false} = {}) {
  const text = await file.text();
  return (delimiter === "\t"
      ? (array ? tsvParseRows : tsvParse)
      : (array ? csvParseRows : csvParse))(text, typed && autoType);
}

class AbstractFile {
  constructor(name, mimeType) {
    Object.defineProperty(this, "name", {value: name, enumerable: true});
    if (mimeType !== undefined) Object.defineProperty(this, "mimeType", {value: mimeType + "", enumerable: true});
  }
  async blob() {
    return (await remote_fetch(this)).blob();
  }
  async arrayBuffer() {
    return (await remote_fetch(this)).arrayBuffer();
  }
  async text() {
    return (await remote_fetch(this)).text();
  }
  async json() {
    return (await remote_fetch(this)).json();
  }
  async stream() {
    return (await remote_fetch(this)).body;
  }
  async csv(options) {
    return dsv(this, ",", options);
  }
  async tsv(options) {
    return dsv(this, "\t", options);
  }
  async image(props) {
    const url = await this.url();
    return new Promise((resolve, reject) => {
      const i = new Image();
      if (new URL(url, document.baseURI).origin !== new URL(location).origin) {
        i.crossOrigin = "anonymous";
      }
      Object.assign(i, props);
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error(`Unable to load file: ${this.name}`));
      i.src = url;
    });
  }
  async arrow() {
    const [Arrow, response] = await Promise.all([requireDefault(arrow.resolve()), remote_fetch(this)]);
    return Arrow.Table.from(response);
  }
  async sqlite() {
    return SQLiteDatabaseClient.open(remote_fetch(this));
  }
  async zip() {
    const [JSZip, buffer] = await Promise.all([requireDefault(jszip.resolve()), this.arrayBuffer()]);
    return new ZipArchive(await JSZip.loadAsync(buffer));
  }
  async xml(mimeType = "application/xml") {
    return (new DOMParser).parseFromString(await this.text(), mimeType);
  }
  async html() {
    return this.xml("text/html");
  }
  async xlsx() {
    const [ExcelJS, buffer] = await Promise.all([requireDefault(exceljs.resolve()), this.arrayBuffer()]);
    return new Workbook(await new ExcelJS.Workbook().xlsx.load(buffer));
  }
}

class FileAttachment extends AbstractFile {
  constructor(url, name, mimeType) {
    super(name, mimeType);
    Object.defineProperty(this, "_url", {value: url});
  }
  async url() {
    return (await this._url) + "";
  }
}

function NoFileAttachments(name) {
  throw new Error(`File not found: ${name}`);
}

function FileAttachments(resolve) {
  return Object.assign(
    name => {
      const result = resolve(name += "");
      if (result == null) throw new Error(`File not found: ${name}`);
      if (typeof result === "object" && "url" in result) {
        const {url, mimeType} = result;
        return new FileAttachment(url, name, mimeType);
      }
      return new FileAttachment(result, name);
    },
    {prototype: FileAttachment.prototype} // instanceof
  );
}

class ZipArchive {
  constructor(archive) {
    Object.defineProperty(this, "_", {value: archive});
    this.filenames = Object.keys(archive.files).filter(name => !archive.files[name].dir);
  }
  file(path) {
    const object = this._.file(path += "");
    if (!object || object.dir) throw new Error(`file not found: ${path}`);
    return new ZipArchiveEntry(object);
  }
}

class ZipArchiveEntry extends AbstractFile {
  constructor(object) {
    super(object.name);
    Object.defineProperty(this, "_", {value: object});
    Object.defineProperty(this, "_url", {writable: true});
  }
  async url() {
    return this._url || (this._url = this.blob().then(URL.createObjectURL));
  }
  async blob() {
    return this._.async("blob");
  }
  async arrayBuffer() {
    return this._.async("arraybuffer");
  }
  async text() {
    return this._.async("text");
  }
  async json() {
    return JSON.parse(await this.text());
  }
}

function canvas(width, height) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function context2d(width, height, dpi) {
  if (dpi == null) dpi = devicePixelRatio;
  var canvas = document.createElement("canvas");
  canvas.width = width * dpi;
  canvas.height = height * dpi;
  canvas.style.width = width + "px";
  var context = canvas.getContext("2d");
  context.scale(dpi, dpi);
  return context;
}

function download(value, name = "untitled", label = "Save") {
  const a = document.createElement("a");
  const b = a.appendChild(document.createElement("button"));
  b.textContent = label;
  a.download = name;

  async function reset() {
    await new Promise(requestAnimationFrame);
    URL.revokeObjectURL(a.href);
    a.removeAttribute("href");
    b.textContent = label;
    b.disabled = false;
  }

  a.onclick = async event => {
    b.disabled = true;
    if (a.href) return reset(); // Already saved.
    b.textContent = "Saving…";
    try {
      const object = await (typeof value === "function" ? value() : value);
      b.textContent = "Download";
      a.href = URL.createObjectURL(object); // eslint-disable-line require-atomic-updates
    } catch (ignore) {
      b.textContent = label;
    }
    if (event.eventPhase) return reset(); // Already downloaded.
    b.disabled = false;
  };

  return a;
}

var namespaces = {
  math: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function element(name, attributes) {
  var prefix = name += "", i = prefix.indexOf(":"), value;
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  var element = namespaces.hasOwnProperty(prefix) // eslint-disable-line no-prototype-builtins
      ? document.createElementNS(namespaces[prefix], name)
      : document.createElement(name);
  if (attributes) for (var key in attributes) {
    prefix = key, i = prefix.indexOf(":"), value = attributes[key];
    if (i >= 0 && (prefix = key.slice(0, i)) !== "xmlns") key = key.slice(i + 1);
    if (namespaces.hasOwnProperty(prefix)) element.setAttributeNS(namespaces[prefix], key, value); // eslint-disable-line no-prototype-builtins
    else element.setAttribute(key, value);
  }
  return element;
}

function input$1(type) {
  var input = document.createElement("input");
  if (type != null) input.type = type;
  return input;
}

function range$1(min, max, step) {
  if (arguments.length === 1) max = min, min = null;
  var input = document.createElement("input");
  input.min = min = min == null ? 0 : +min;
  input.max = max = max == null ? 1 : +max;
  input.step = step == null ? "any" : step = +step;
  input.type = "range";
  return input;
}

function select(values) {
  var select = document.createElement("select");
  Array.prototype.forEach.call(values, function(value) {
    var option = document.createElement("option");
    option.value = option.textContent = value;
    select.appendChild(option);
  });
  return select;
}

function svg$1(width, height) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", [0, 0, width, height]);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  return svg;
}

function text$1(value) {
  return document.createTextNode(value);
}

var count = 0;

function uid(name) {
  return new Id("O-" + (name == null ? "" : name + "-") + ++count);
}

function Id(id) {
  this.id = id;
  this.href = new URL(`#${id}`, location) + "";
}

Id.prototype.toString = function() {
  return "url(" + this.href + ")";
};

var DOM = {
  canvas: canvas,
  context2d: context2d,
  download: download,
  element: element,
  input: input$1,
  range: range$1,
  select: select,
  svg: svg$1,
  text: text$1,
  uid: uid
};

function buffer(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function text(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

function url(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader;
    reader.onload = function() { resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

var Files = {
  buffer: buffer,
  text: text,
  url: url
};

function that() {
  return this;
}

function disposable(value, dispose) {
  let done = false;
  if (typeof dispose !== "function") {
    throw new Error("dispose is not a function");
  }
  return {
    [Symbol.iterator]: that,
    next: () => done ? {done: true} : (done = true, {done: false, value}),
    return: () => (done = true, dispose(value), {done: true}),
    throw: () => ({done: done = true})
  };
}

function* filter(iterator, test) {
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    if (test(result.value, ++index)) {
      yield result.value;
    }
  }
}

function observe(initialize) {
  let stale = false;
  let value;
  let resolve;
  const dispose = initialize(change);

  if (dispose != null && typeof dispose !== "function") {
    throw new Error(typeof dispose.then === "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function");
  }

  function change(x) {
    if (resolve) resolve(x), resolve = null;
    else stale = true;
    return value = x;
  }

  function next() {
    return {done: false, value: stale
        ? (stale = false, Promise.resolve(value))
        : new Promise(_ => (resolve = _))};
  }

  return {
    [Symbol.iterator]: that,
    throw: () => ({done: true}),
    return: () => (dispose != null && dispose(), {done: true}),
    next
  };
}

function input(input) {
  return observe(function(change) {
    var event = eventof(input), value = valueof(input);
    function inputted() { change(valueof(input)); }
    input.addEventListener(event, inputted);
    if (value !== undefined) change(value);
    return function() { input.removeEventListener(event, inputted); };
  });
}

function valueof(input) {
  switch (input.type) {
    case "range":
    case "number": return input.valueAsNumber;
    case "date": return input.valueAsDate;
    case "checkbox": return input.checked;
    case "file": return input.multiple ? input.files : input.files[0];
    case "select-multiple": return Array.from(input.selectedOptions, o => o.value);
    default: return input.value;
  }
}

function eventof(input) {
  switch (input.type) {
    case "button":
    case "submit":
    case "checkbox": return "click";
    case "file": return "change";
    default: return "input";
  }
}

function* map$1(iterator, transform) {
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    yield transform(result.value, ++index);
  }
}

function queue(initialize) {
  let resolve;
  const queue = [];
  const dispose = initialize(push);

  if (dispose != null && typeof dispose !== "function") {
    throw new Error(typeof dispose.then === "function"
        ? "async initializers are not supported"
        : "initializer returned something, but not a dispose function");
  }

  function push(x) {
    queue.push(x);
    if (resolve) resolve(queue.shift()), resolve = null;
    return x;
  }

  function next() {
    return {done: false, value: queue.length
        ? Promise.resolve(queue.shift())
        : new Promise(_ => (resolve = _))};
  }

  return {
    [Symbol.iterator]: that,
    throw: () => ({done: true}),
    return: () => (dispose != null && dispose(), {done: true}),
    next
  };
}

function* range(start, stop, step) {
  start = +start;
  stop = +stop;
  step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0;
  while (++i < n) {
    yield start + i * step;
  }
}

function valueAt(iterator, i) {
  if (!isFinite(i = +i) || i < 0 || i !== i | 0) return;
  var result, index = -1;
  while (!(result = iterator.next()).done) {
    if (++index === i) {
      return result.value;
    }
  }
}

function worker(source) {
  const url = URL.createObjectURL(new Blob([source], {type: "text/javascript"}));
  const worker = new Worker(url);
  return disposable(worker, () => {
    worker.terminate();
    URL.revokeObjectURL(url);
  });
}

var Generators = {
  disposable: disposable,
  filter: filter,
  input: input,
  map: map$1,
  observe: observe,
  queue: queue,
  range: range,
  valueAt: valueAt,
  worker: worker
};

function template(render, wrapper) {
  return function(strings) {
    var string = strings[0],
        parts = [], part,
        root = null,
        node, nodes,
        walker,
        i, n, j, m, k = -1;

    // Concatenate the text using comments as placeholders.
    for (i = 1, n = arguments.length; i < n; ++i) {
      part = arguments[i];
      if (part instanceof Node) {
        parts[++k] = part;
        string += "<!--o:" + k + "-->";
      } else if (Array.isArray(part)) {
        for (j = 0, m = part.length; j < m; ++j) {
          node = part[j];
          if (node instanceof Node) {
            if (root === null) {
              parts[++k] = root = document.createDocumentFragment();
              string += "<!--o:" + k + "-->";
            }
            root.appendChild(node);
          } else {
            root = null;
            string += node;
          }
        }
        root = null;
      } else {
        string += part;
      }
      string += strings[i];
    }

    // Render the text.
    root = render(string);

    // Walk the rendered content to replace comment placeholders.
    if (++k > 0) {
      nodes = new Array(k);
      walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT, null, false);
      while (walker.nextNode()) {
        node = walker.currentNode;
        if (/^o:/.test(node.nodeValue)) {
          nodes[+node.nodeValue.slice(2)] = node;
        }
      }
      for (i = 0; i < k; ++i) {
        if (node = nodes[i]) {
          node.parentNode.replaceChild(parts[i], node);
        }
      }
    }

    // Is the rendered content
    // … a parent of a single child? Detach and return the child.
    // … a document fragment? Replace the fragment with an element.
    // … some other node? Return it.
    return root.childNodes.length === 1 ? root.removeChild(root.firstChild)
        : root.nodeType === 11 ? ((node = wrapper()).appendChild(root), node)
        : root;
  };
}

var html = template(function(string) {
  var template = document.createElement("template");
  template.innerHTML = string.trim();
  return document.importNode(template.content, true);
}, function() {
  return document.createElement("span");
});

async function leaflet(require) {
  const L = await require(leaflet$1.resolve());
  if (!L._style) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = await require.resolve(leaflet$1.resolve("dist/leaflet.css"));
    L._style = document.head.appendChild(link);
  }
  return L;
}

function md(require) {
  return require(marked.resolve()).then(function(marked) {
    return template(
      function(string) {
        var root = document.createElement("div");
        root.innerHTML = marked(string, {langPrefix: ""}).trim();
        var code = root.querySelectorAll("pre code[class]");
        if (code.length > 0) {
          require(highlight.resolve()).then(function(hl) {
            code.forEach(function(block) {
              function done() {
                hl.highlightBlock(block);
                block.parentNode.classList.add("observablehq--md-pre");
              }
              if (hl.getLanguage(block.className)) {
                done();
              } else {
                require(highlight.resolve("async-languages/index.js"))
                  .then(index => {
                    if (index.has(block.className)) {
                      return require(highlight.resolve("async-languages/" + index.get(block.className))).then(language => {
                        hl.registerLanguage(block.className, language);
                      });
                    }
                  })
                  .then(done, done);
              }
            });
          });
        }
        return root;
      },
      function() {
        return document.createElement("div");
      }
    );
  });
}

async function mermaid(require) {
  const mer = await require(mermaid$1.resolve());
  mer.initialize({securityLevel: "loose", theme: "neutral"});
  return function mermaid() {
    const root = document.createElement("div");
    root.innerHTML = mer.render(uid().id, String.raw.apply(String, arguments));
    return root.removeChild(root.firstChild);
  };
}

function Mutable(value) {
  let change;
  Object.defineProperties(this, {
    generator: {value: observe(_ => void (change = _))},
    value: {get: () => value, set: x => change(value = x)} // eslint-disable-line no-setter-return
  });
  if (value !== undefined) change(value);
}

function* now() {
  while (true) {
    yield Date.now();
  }
}

function delay(duration, value) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(value);
    }, duration);
  });
}

var timeouts = new Map;

function timeout(now, time) {
  var t = new Promise(function(resolve) {
    timeouts.delete(time);
    var delay = time - now;
    if (!(delay > 0)) throw new Error("invalid time");
    if (delay > 0x7fffffff) throw new Error("too long to wait");
    setTimeout(resolve, delay);
  });
  timeouts.set(time, t);
  return t;
}

function when(time, value) {
  var now;
  return (now = timeouts.get(time = +time)) ? now.then(() => value)
      : (now = Date.now()) >= time ? Promise.resolve(value)
      : timeout(now, time).then(() => value);
}

function tick(duration, value) {
  return when(Math.ceil((Date.now() + 1) / duration) * duration, value);
}

var Promises = {
  delay: delay,
  tick: tick,
  when: when
};

function resolve(name, base) {
  if (/^(\w+:)|\/\//i.test(name)) return name;
  if (/^[.]{0,2}\//i.test(name)) return new URL(name, base == null ? location : base).href;
  if (!name.length || /^[\s._]/.test(name) || /\s$/.test(name)) throw new Error("illegal name");
  return "https://unpkg.com/" + name;
}

var svg = template(function(string) {
  var root = document.createElementNS("http://www.w3.org/2000/svg", "g");
  root.innerHTML = string.trim();
  return root;
}, function() {
  return document.createElementNS("http://www.w3.org/2000/svg", "g");
});

var raw = String.raw;

function style$1(href) {
  return new Promise(function(resolve, reject) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.onerror = reject;
    link.onload = resolve;
    document.head.appendChild(link);
  });
}

function tex(require) {
  return Promise.all([
    require(katex.resolve()),
    require.resolve(katex.resolve("dist/katex.min.css")).then(style$1)
  ]).then(function(values) {
    var katex = values[0], tex = renderer();

    function renderer(options) {
      return function() {
        var root = document.createElement("div");
        katex.render(raw.apply(String, arguments), root, options);
        return root.removeChild(root.firstChild);
      };
    }

    tex.options = renderer;
    tex.block = renderer({displayMode: true});
    return tex;
  });
}

async function vl(require) {
  const [v, vl, api] = await Promise.all([vega, vegalite, vegaliteApi].map(d => require(d.resolve())));
  return api.register(v, vl);
}

function width() {
  return observe(function(change) {
    var width = change(document.body.clientWidth);
    function resized() {
      var w = document.body.clientWidth;
      if (w !== width) change(width = w);
    }
    window.addEventListener("resize", resized);
    return function() {
      window.removeEventListener("resize", resized);
    };
  });
}

const __query = Object.assign(
  // This function is used by table cells.
  async (source, operations, invalidation) => {
    const args = makeQueryTemplate(operations, await source);
    if (!args) return null; // the empty state
    return evaluateQuery(await source, args, invalidation);
  },
  {
    // This function is used by SQL cells.
    sql(source, invalidation) {
      return async function () {
        return evaluateQuery(source, arguments, invalidation);
      };
    }
  }
);

async function evaluateQuery(source, args, invalidation) {
  if (!source) return;

  // If this DatabaseClient supports abort and streaming, use that.
  if (typeof source.queryTag === "function") {
    const abortController = new AbortController();
    const options = {signal: abortController.signal};
    invalidation.then(() => abortController.abort("invalidated"));
    if (typeof source.queryStream === "function") {
      return accumulateQuery(
        source.queryStream(...source.queryTag.apply(source, args), options)
      );
    }
    if (typeof source.query === "function") {
      return source.query(...source.queryTag.apply(source, args), options);
    }
  }

  // Otherwise, fallback to the basic sql tagged template literal.
  if (typeof source.sql === "function") {
    return source.sql.apply(source, args);
  }

  // TODO: test if source is a file attachment, and support CSV etc.
  throw new Error("source does not implement query, queryStream, or sql");
}

// Generator function that yields accumulated query results client.queryStream
async function* accumulateQuery(queryRequest) {
  const queryResponse = await queryRequest;
  const values = [];
  values.done = false;
  values.error = null;
  values.schema = queryResponse.schema;
  try {
    const iterator = queryResponse.readRows();
    do {
      const result = await iterator.next();
      if (result.done) {
        values.done = true;
      } else {
        for (const value of result.value) {
          values.push(value);
        }
      }
      yield values;
    } while (!values.done);
  } catch (error) {
    values.error = error;
    yield values;
  }
}

/**
 * Returns a SQL query in the form [[parts], ...params] where parts is an array
 * of sub-strings and params are the parameter values to be inserted between each
 * sub-string.
 */
 function makeQueryTemplate(operations, source) {
  const escaper =
    source && typeof source.escape === "function" ? source.escape : (i) => i;
  const {select, from, filter, sort, slice} = operations;
  if (
    from.table === null ||
    select.columns === null ||
    (select.columns && select.columns.length === 0)
  )
    return;
  const columns = select.columns.map((c) => `t.${escaper(c)}`);
  const args = [
    [`SELECT ${columns} FROM ${formatTable(from.table, escaper)} t`]
  ];
  for (let i = 0; i < filter.length; ++i) {
    appendSql(i ? `\nAND ` : `\nWHERE `, args);
    appendWhereEntry(filter[i], args);
  }
  for (let i = 0; i < sort.length; ++i) {
    appendSql(i ? `, ` : `\nORDER BY `, args);
    appendOrderBy(sort[i], args);
  }
  if (slice.to !== null || slice.from !== null) {
    appendSql(
      `\nLIMIT ${slice.to !== null ? slice.to - (slice.from || 0) : 1e9}`,
      args
    );
  }
  if (slice.from !== null) {
    appendSql(` OFFSET ${slice.from}`, args);
  }
  return args;
}

function formatTable(table, escaper) {
  if (typeof table === "object") {
    let from = "";
    if (table.database != null) from += escaper(table.database) + ".";
    if (table.schema != null) from += escaper(table.schema) + ".";
    from += escaper(table.table);
    return from;
  }
  return table;
}

function appendSql(sql, args) {
  const strings = args[0];
  strings[strings.length - 1] += sql;
}

function appendOrderBy({column, direction}, args) {
  appendSql(`t.${column} ${direction.toUpperCase()}`, args);
}

function appendWhereEntry({type, operands}, args) {
  if (operands.length < 1) throw new Error("Invalid operand length");

  // Unary operations
  if (operands.length === 1) {
    appendOperand(operands[0], args);
    switch (type) {
      case "n":
        appendSql(` IS NULL`, args);
        return;
      case "nn":
        appendSql(` IS NOT NULL`, args);
        return;
      default:
        throw new Error("Invalid filter operation");
    }
  }

  // Binary operations
  if (operands.length === 2) {
    if (["in", "nin"].includes(type)) ; else if (["c", "nc"].includes(type)) {
      // TODO: Case (in)sensitive?
      appendOperand(operands[0], args);
      switch (type) {
        case "c":
          appendSql(` LIKE `, args);
          break;
        case "nc":
          appendSql(` NOT LIKE `, args);
          break;
      }
      appendOperand(likeOperand(operands[1]), args);
      return;
    } else {
      appendOperand(operands[0], args);
      switch (type) {
        case "eq":
          appendSql(` = `, args);
          break;
        case "ne":
          appendSql(` <> `, args);
          break;
        case "gt":
          appendSql(` > `, args);
          break;
        case "lt":
          appendSql(` < `, args);
          break;
        case "gte":
          appendSql(` >= `, args);
          break;
        case "lte":
          appendSql(` <= `, args);
          break;
        default:
          throw new Error("Invalid filter operation");
      }
      appendOperand(operands[1], args);
      return;
    }
  }

  // List operations
  appendOperand(operands[0], args);
  switch (type) {
    case "in":
      appendSql(` IN (`, args);
      break;
    case "nin":
      appendSql(` NOT IN (`, args);
      break;
    default:
      throw new Error("Invalid filter operation");
  }
  appendListOperands(operands.slice(1), args);
  appendSql(")", args);
}

function appendOperand(o, args) {
  if (o.type === "column") {
    appendSql(`t.${o.value}`, args);
  } else {
    args.push(o.value);
    args[0].push("");
  }
}

// TODO: Support column operands here?
function appendListOperands(ops, args) {
  let first = true;
  for (const op of ops) {
    if (first) first = false;
    else appendSql(",", args);
    args.push(op.value);
    args[0].push("");
  }
}

function likeOperand(operand) {
  return {...operand, value: `%${operand.value}%`};
}

var Library = Object.assign(Object.defineProperties(function Library(resolver) {
  const require = requirer(resolver);
  Object.defineProperties(this, properties({
    FileAttachment: () => NoFileAttachments,
    Mutable: () => Mutable,
    now,
    width,

    // Tagged template literals
    dot: () => require(graphviz.resolve()),
    htl: () => require(htl.resolve()),
    html: () => html,
    md: () => md(require),
    svg: () => svg,
    tex: () => tex(require),

    // Recommended libraries
    // https://observablehq.com/@observablehq/recommended-libraries
    _: () => require(lodash.resolve()),
    aq: () => require.alias({"apache-arrow": arrow.resolve()})(arquero.resolve()),
    Arrow: () => require(arrow.resolve()),
    d3: () => require(d3.resolve()),
    Inputs: () => require(inputs.resolve()).then(Inputs => ({...Inputs, file: Inputs.fileOf(AbstractFile)})),
    L: () => leaflet(require),
    mermaid: () => mermaid(require),
    Plot: () => require(plot.resolve()),
    __query: () => __query,
    require: () => require,
    resolve: () => resolve, // deprecated; use async require.resolve instead
    SQLite: () => sqlite(require),
    SQLiteDatabaseClient: () => SQLiteDatabaseClient,
    topojson: () => require(topojson.resolve()),
    vl: () => vl(require),

    // Sample datasets
    // https://observablehq.com/@observablehq/datasets
    aapl: () => new FileAttachment("https://static.observableusercontent.com/files/3ccff97fd2d93da734e76829b2b066eafdaac6a1fafdec0faf6ebc443271cfc109d29e80dd217468fcb2aff1e6bffdc73f356cc48feb657f35378e6abbbb63b9").csv({typed: true}),
    alphabet: () => new FileAttachment("https://static.observableusercontent.com/files/75d52e6c3130b1cae83cda89305e17b50f33e7420ef205587a135e8562bcfd22e483cf4fa2fb5df6dff66f9c5d19740be1cfaf47406286e2eb6574b49ffc685d").csv({typed: true}),
    cars: () => new FileAttachment("https://static.observableusercontent.com/files/048ec3dfd528110c0665dfa363dd28bc516ffb7247231f3ab25005036717f5c4c232a5efc7bb74bc03037155cb72b1abe85a33d86eb9f1a336196030443be4f6").csv({typed: true}),
    citywages: () => new FileAttachment("https://static.observableusercontent.com/files/39837ec5121fcc163131dbc2fe8c1a2e0b3423a5d1e96b5ce371e2ac2e20a290d78b71a4fb08b9fa6a0107776e17fb78af313b8ea70f4cc6648fad68ddf06f7a").csv({typed: true}),
    diamonds: () => new FileAttachment("https://static.observableusercontent.com/files/87942b1f5d061a21fa4bb8f2162db44e3ef0f7391301f867ab5ba718b225a63091af20675f0bfe7f922db097b217b377135203a7eab34651e21a8d09f4e37252").csv({typed: true}),
    flare: () => new FileAttachment("https://static.observableusercontent.com/files/a6b0d94a7f5828fd133765a934f4c9746d2010e2f342d335923991f31b14120de96b5cb4f160d509d8dc627f0107d7f5b5070d2516f01e4c862b5b4867533000").csv({typed: true}),
    industries: () => new FileAttachment("https://static.observableusercontent.com/files/76f13741128340cc88798c0a0b7fa5a2df8370f57554000774ab8ee9ae785ffa2903010cad670d4939af3e9c17e5e18e7e05ed2b38b848ac2fc1a0066aa0005f").csv({typed: true}),
    miserables: () => new FileAttachment("https://static.observableusercontent.com/files/31d904f6e21d42d4963ece9c8cc4fbd75efcbdc404bf511bc79906f0a1be68b5a01e935f65123670ed04e35ca8cae3c2b943f82bf8db49c5a67c85cbb58db052").json(),
    olympians: () => new FileAttachment("https://static.observableusercontent.com/files/31ca24545a0603dce099d10ee89ee5ae72d29fa55e8fc7c9ffb5ded87ac83060d80f1d9e21f4ae8eb04c1e8940b7287d179fe8060d887fb1f055f430e210007c").csv({typed: true}),
    penguins: () => new FileAttachment("https://static.observableusercontent.com/files/715db1223e067f00500780077febc6cebbdd90c151d3d78317c802732252052ab0e367039872ab9c77d6ef99e5f55a0724b35ddc898a1c99cb14c31a379af80a").csv({typed: true}),
    weather: () => new FileAttachment("https://static.observableusercontent.com/files/693a46b22b33db0f042728700e0c73e836fa13d55446df89120682d55339c6db7cc9e574d3d73f24ecc9bc7eb9ac9a1e7e104a1ee52c00aab1e77eb102913c1f").csv({typed: true}),

    // Note: these are namespace objects, and thus exposed directly rather than
    // being wrapped in a function. This allows library.Generators to resolve,
    // rather than needing module.value.
    DOM,
    Files,
    Generators,
    Promises
  }));
}, {
  resolve: {
    get: () => requireDefault.resolve,
    enumerable: true,
    configurable: true
  },
  require: {
    get: () => requireDefault,
    set: setDefaultRequire,
    enumerable: true,
    configurable: true
  }
}), {
  resolveFrom,
  requireFrom
});

function properties(values) {
  return Object.fromEntries(Object.entries(values).map(property));
}

function property([key, value]) {
  return [key, ({value, writable: true, enumerable: true})];
}

function RuntimeError(message, input) {
  this.message = message + "";
  this.input = input;
}

RuntimeError.prototype = Object.create(Error.prototype);
RuntimeError.prototype.name = "RuntimeError";
RuntimeError.prototype.constructor = RuntimeError;

function generatorish(value) {
  return value
      && typeof value.next === "function"
      && typeof value.return === "function";
}

function load(notebook, library, observer) {
  if (typeof library == "function") observer = library, library = null;
  if (typeof observer !== "function") throw new Error("invalid observer");
  if (library == null) library = new Library();

  const {modules, id} = notebook;
  const map = new Map;
  const runtime = new Runtime(library);
  const main = runtime_module(id);

  function runtime_module(id) {
    let module = map.get(id);
    if (!module) map.set(id, module = runtime.module());
    return module;
  }

  for (const m of modules) {
    const module = runtime_module(m.id);
    let i = 0;
    for (const v of m.variables) {
      if (v.from) module.import(v.remote, v.name, runtime_module(v.from));
      else if (module === main) module.variable(observer(v, i, m.variables)).define(v.name, v.inputs, v.value);
      else module.define(v.name, v.inputs, v.value);
      ++i;
    }
  }

  return runtime;
}

function constant(x) {
  return function() {
    return x;
  };
}

function identity(x) {
  return x;
}

function rethrow(e) {
  return function() {
    throw e;
  };
}

var prototype = Array.prototype;
var map = prototype.map;

function noop() {}

var TYPE_NORMAL = 1; // a normal variable
var TYPE_IMPLICIT = 2; // created on reference
var TYPE_DUPLICATE = 3; // created on duplicate definition

var no_observer = {};

function Variable(type, module, observer) {
  if (!observer) observer = no_observer;
  Object.defineProperties(this, {
    _observer: {value: observer, writable: true},
    _definition: {value: variable_undefined, writable: true},
    _duplicate: {value: undefined, writable: true},
    _duplicates: {value: undefined, writable: true},
    _indegree: {value: NaN, writable: true}, // The number of computing inputs.
    _inputs: {value: [], writable: true},
    _invalidate: {value: noop, writable: true},
    _module: {value: module},
    _name: {value: null, writable: true},
    _outputs: {value: new Set, writable: true},
    _promise: {value: Promise.resolve(undefined), writable: true},
    _reachable: {value: observer !== no_observer, writable: true}, // Is this variable transitively visible?
    _rejector: {value: variable_rejector(this)},
    _type: {value: type},
    _value: {value: undefined, writable: true},
    _version: {value: 0, writable: true}
  });
}

Object.defineProperties(Variable.prototype, {
  _pending: {value: variable_pending, writable: true, configurable: true},
  _fulfilled: {value: variable_fulfilled, writable: true, configurable: true},
  _rejected: {value: variable_rejected, writable: true, configurable: true},
  define: {value: variable_define, writable: true, configurable: true},
  delete: {value: variable_delete, writable: true, configurable: true},
  import: {value: variable_import, writable: true, configurable: true}
});

function variable_attach(variable) {
  variable._module._runtime._dirty.add(variable);
  variable._outputs.add(this);
}

function variable_detach(variable) {
  variable._module._runtime._dirty.add(variable);
  variable._outputs.delete(this);
}

function variable_undefined() {
  throw variable_undefined;
}

function variable_stale() {
  throw variable_stale;
}

function variable_rejector(variable) {
  return function(error) {
    if (error === variable_stale) throw error;
    if (error === variable_undefined) throw new RuntimeError(variable._name + " is not defined", variable._name);
    if (error instanceof Error && error.message) throw new RuntimeError(error.message, variable._name);
    throw new RuntimeError(variable._name + " could not be resolved", variable._name);
  };
}

function variable_duplicate(name) {
  return function() {
    throw new RuntimeError(name + " is defined more than once");
  };
}

function variable_define(name, inputs, definition) {
  switch (arguments.length) {
    case 1: {
      definition = name, name = inputs = null;
      break;
    }
    case 2: {
      definition = inputs;
      if (typeof name === "string") inputs = null;
      else inputs = name, name = null;
      break;
    }
  }
  return variable_defineImpl.call(this,
    name == null ? null : name + "",
    inputs == null ? [] : map.call(inputs, this._module._resolve, this._module),
    typeof definition === "function" ? definition : constant(definition)
  );
}

function variable_defineImpl(name, inputs, definition) {
  var scope = this._module._scope, runtime = this._module._runtime;

  this._inputs.forEach(variable_detach, this);
  inputs.forEach(variable_attach, this);
  this._inputs = inputs;
  this._definition = definition;
  this._value = undefined;

  // Is this an active variable (that may require disposal)?
  if (definition === noop) runtime._variables.delete(this);
  else runtime._variables.add(this);

  // Did the variable’s name change? Time to patch references!
  if (name !== this._name || scope.get(name) !== this) {
    var error, found;

    if (this._name) { // Did this variable previously have a name?
      if (this._outputs.size) { // And did other variables reference this variable?
        scope.delete(this._name);
        found = this._module._resolve(this._name);
        found._outputs = this._outputs, this._outputs = new Set;
        found._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(this)] = found; }, this);
        found._outputs.forEach(runtime._updates.add, runtime._updates);
        runtime._dirty.add(found).add(this);
        scope.set(this._name, found);
      } else if ((found = scope.get(this._name)) === this) { // Do no other variables reference this variable?
        scope.delete(this._name); // It’s safe to delete!
      } else if (found._type === TYPE_DUPLICATE) { // Do other variables assign this name?
        found._duplicates.delete(this); // This variable no longer assigns this name.
        this._duplicate = undefined;
        if (found._duplicates.size === 1) { // Is there now only one variable assigning this name?
          found = found._duplicates.keys().next().value; // Any references are now fixed!
          error = scope.get(this._name);
          found._outputs = error._outputs, error._outputs = new Set;
          found._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(error)] = found; });
          found._definition = found._duplicate, found._duplicate = undefined;
          runtime._dirty.add(error).add(found);
          runtime._updates.add(found);
          scope.set(this._name, found);
        }
      } else {
        throw new Error;
      }
    }

    if (this._outputs.size) throw new Error;

    if (name) { // Does this variable have a new name?
      if (found = scope.get(name)) { // Do other variables reference or assign this name?
        if (found._type === TYPE_DUPLICATE) { // Do multiple other variables already define this name?
          this._definition = variable_duplicate(name), this._duplicate = definition;
          found._duplicates.add(this);
        } else if (found._type === TYPE_IMPLICIT) { // Are the variable references broken?
          this._outputs = found._outputs, found._outputs = new Set; // Now they’re fixed!
          this._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(found)] = this; }, this);
          runtime._dirty.add(found).add(this);
          scope.set(name, this);
        } else { // Does another variable define this name?
          found._duplicate = found._definition, this._duplicate = definition; // Now they’re duplicates.
          error = new Variable(TYPE_DUPLICATE, this._module);
          error._name = name;
          error._definition = this._definition = found._definition = variable_duplicate(name);
          error._outputs = found._outputs, found._outputs = new Set;
          error._outputs.forEach(function(output) { output._inputs[output._inputs.indexOf(found)] = error; });
          error._duplicates = new Set([this, found]);
          runtime._dirty.add(found).add(error);
          runtime._updates.add(found).add(error);
          scope.set(name, error);
        }
      } else {
        scope.set(name, this);
      }
    }

    this._name = name;
  }

  // If this redefined variable was previously evaluated, invalidate it. (If the
  // variable was never evaluated, then the invalidated value could never have
  // been exposed and we can avoid this extra work.)
  if (this._version > 0) ++this._version;

  runtime._updates.add(this);
  runtime._compute();
  return this;
}

function variable_import(remote, name, module) {
  if (arguments.length < 3) module = name, name = remote;
  return variable_defineImpl.call(this, name + "", [module._resolve(remote + "")], identity);
}

function variable_delete() {
  return variable_defineImpl.call(this, null, [], noop);
}

function variable_pending() {
  if (this._observer.pending) this._observer.pending();
}

function variable_fulfilled(value) {
  if (this._observer.fulfilled) this._observer.fulfilled(value, this._name);
}

function variable_rejected(error) {
  if (this._observer.rejected) this._observer.rejected(error, this._name);
}

function Module(runtime, builtins = []) {
  Object.defineProperties(this, {
    _runtime: {value: runtime},
    _scope: {value: new Map},
    _builtins: {value: new Map([
      ["@variable", variable_variable],
      ["invalidation", variable_invalidation],
      ["visibility", variable_visibility],
      ...builtins
    ])},
    _source: {value: null, writable: true}
  });
}

Object.defineProperties(Module.prototype, {
  _resolve: {value: module_resolve, writable: true, configurable: true},
  redefine: {value: module_redefine, writable: true, configurable: true},
  define: {value: module_define, writable: true, configurable: true},
  derive: {value: module_derive, writable: true, configurable: true},
  import: {value: module_import, writable: true, configurable: true},
  value: {value: module_value, writable: true, configurable: true},
  variable: {value: module_variable, writable: true, configurable: true},
  builtin: {value: module_builtin, writable: true, configurable: true}
});

function module_redefine(name) {
  var v = this._scope.get(name);
  if (!v) throw new RuntimeError(name + " is not defined");
  if (v._type === TYPE_DUPLICATE) throw new RuntimeError(name + " is defined more than once");
  return v.define.apply(v, arguments);
}

function module_define() {
  var v = new Variable(TYPE_NORMAL, this);
  return v.define.apply(v, arguments);
}

function module_import() {
  var v = new Variable(TYPE_NORMAL, this);
  return v.import.apply(v, arguments);
}

function module_variable(observer) {
  return new Variable(TYPE_NORMAL, this, observer);
}

async function module_value(name) {
  var v = this._scope.get(name);
  if (!v) throw new RuntimeError(name + " is not defined");
  if (v._observer === no_observer) {
    v = this.variable(true).define([name], identity);
    try {
      return await module_revalue(this._runtime, v);
    } finally {
      v.delete();
    }
  } else {
    return module_revalue(this._runtime, v);
  }
}

// If the variable is redefined before its value resolves, try again.
async function module_revalue(runtime, variable) {
  await runtime._compute();
  try {
    return await variable._promise;
  } catch (error) {
    if (error === variable_stale) return module_revalue(runtime, variable);
    throw error;
  }
}

function module_derive(injects, injectModule) {
  const map = new Map();
  const modules = new Set();
  const copies = [];

  // Given a module, derives an alias of that module with an initially-empty
  // definition. The variables will be copied later in a second pass below.
  function alias(source) {
    let target = map.get(source);
    if (target) return target;
    target = new Module(source._runtime, source._builtins);
    target._source = source;
    map.set(source, target);
    copies.push([target, source]);
    modules.add(source);
    return target;
  }

  // Inject the given variables as reverse imports into the derived module.
  const derive = alias(this);
  for (const inject of injects) {
    const {alias, name} = typeof inject === "object" ? inject : {name: inject};
    derive.import(name, alias == null ? name : alias, injectModule);
  }

  // Iterate over all the variables (currently) in this module. If any
  // represents an import-with (i.e., an import of a module with a _source), the
  // transitive import-with must be copied, too, as direct injections may affect
  // transitive injections. Note that an import-with can only be created with
  // module.derive and hence it’s not possible for an import-with to be added
  // later; therefore we only need to apply this check once, now.
  for (const module of modules) {
    for (const [name, variable] of module._scope) {
      if (variable._definition === identity) { // import
        if (module === this && derive._scope.has(name)) continue; // overridden by injection
        const importedModule = variable._inputs[0]._module;
        if (importedModule._source) alias(importedModule);
      }
    }
  }

  // Finally, with the modules resolved, copy the variable definitions.
  for (const [target, source] of copies) {
    for (const [name, sourceVariable] of source._scope) {
      const targetVariable = target._scope.get(name);
      if (targetVariable && targetVariable._type !== TYPE_IMPLICIT) continue; // preserve injection
      if (sourceVariable._definition === identity) { // import
        const sourceInput = sourceVariable._inputs[0];
        const sourceModule = sourceInput._module;
        target.import(sourceInput._name, name, map.get(sourceModule) || sourceModule);
      } else { // non-import
        target.define(name, sourceVariable._inputs.map(variable_name), sourceVariable._definition);
      }
    }
  }

  return derive;
}

function module_resolve(name) {
  var variable = this._scope.get(name), value;
  if (!variable) {
    variable = new Variable(TYPE_IMPLICIT, this);
    if (this._builtins.has(name)) {
      variable.define(name, constant(this._builtins.get(name)));
    } else if (this._runtime._builtin._scope.has(name)) {
      variable.import(name, this._runtime._builtin);
    } else {
      try {
        value = this._runtime._global(name);
      } catch (error) {
        return variable.define(name, rethrow(error));
      }
      if (value === undefined) {
        this._scope.set(variable._name = name, variable);
      } else {
        variable.define(name, constant(value));
      }
    }
  }
  return variable;
}

function module_builtin(name, value) {
  this._builtins.set(name, value);
}

function variable_name(variable) {
  return variable._name;
}

const frame = typeof requestAnimationFrame === "function" ? requestAnimationFrame
  : typeof setImmediate === "function" ? setImmediate
  : f => setTimeout(f, 0);

var variable_variable = {};
var variable_invalidation = {};
var variable_visibility = {};

function Runtime(builtins = new Library, global = window_global) {
  var builtin = this.module();
  Object.defineProperties(this, {
    _dirty: {value: new Set},
    _updates: {value: new Set},
    _precomputes: {value: [], writable: true},
    _computing: {value: null, writable: true},
    _init: {value: null, writable: true},
    _modules: {value: new Map},
    _variables: {value: new Set},
    _disposed: {value: false, writable: true},
    _builtin: {value: builtin},
    _global: {value: global}
  });
  if (builtins) for (var name in builtins) {
    (new Variable(TYPE_IMPLICIT, builtin)).define(name, [], builtins[name]);
  }
}

Object.defineProperties(Runtime, {
  load: {value: load, writable: true, configurable: true}
});

Object.defineProperties(Runtime.prototype, {
  _precompute: {value: runtime_precompute, writable: true, configurable: true},
  _compute: {value: runtime_compute, writable: true, configurable: true},
  _computeSoon: {value: runtime_computeSoon, writable: true, configurable: true},
  _computeNow: {value: runtime_computeNow, writable: true, configurable: true},
  dispose: {value: runtime_dispose, writable: true, configurable: true},
  module: {value: runtime_module, writable: true, configurable: true},
  fileAttachments: {value: FileAttachments, writable: true, configurable: true}
});

function runtime_dispose() {
  this._computing = Promise.resolve();
  this._disposed = true;
  this._variables.forEach(v => {
    v._invalidate();
    v._version = NaN;
  });
}

function runtime_module(define, observer = noop) {
  let module;
  if (define === undefined) {
    if (module = this._init) {
      this._init = null;
      return module;
    }
    return new Module(this);
  }
  module = this._modules.get(define);
  if (module) return module;
  this._init = module = new Module(this);
  this._modules.set(define, module);
  try {
    define(this, observer);
  } finally {
    this._init = null;
  }
  return module;
}

function runtime_precompute(callback) {
  this._precomputes.push(callback);
  this._compute();
}

function runtime_compute() {
  return this._computing || (this._computing = this._computeSoon());
}

function runtime_computeSoon() {
  return new Promise(frame).then(() => this._disposed ? undefined : this._computeNow());
}

async function runtime_computeNow() {
  var queue = [],
      variables,
      variable,
      precomputes = this._precomputes;

  // If there are any paused generators, resume them before computing so they
  // can update (if synchronous) before computing downstream variables.
  if (precomputes.length) {
    this._precomputes = [];
    for (const callback of precomputes) callback();
    await runtime_defer(3);
  }

  // Compute the reachability of the transitive closure of dirty variables.
  // Any newly-reachable variable must also be recomputed.
  // Any no-longer-reachable variable must be terminated.
  variables = new Set(this._dirty);
  variables.forEach(function(variable) {
    variable._inputs.forEach(variables.add, variables);
    const reachable = variable_reachable(variable);
    if (reachable > variable._reachable) {
      this._updates.add(variable);
    } else if (reachable < variable._reachable) {
      variable._invalidate();
    }
    variable._reachable = reachable;
  }, this);

  // Compute the transitive closure of updating, reachable variables.
  variables = new Set(this._updates);
  variables.forEach(function(variable) {
    if (variable._reachable) {
      variable._indegree = 0;
      variable._outputs.forEach(variables.add, variables);
    } else {
      variable._indegree = NaN;
      variables.delete(variable);
    }
  });

  this._computing = null;
  this._updates.clear();
  this._dirty.clear();

  // Compute the indegree of updating variables.
  variables.forEach(function(variable) {
    variable._outputs.forEach(variable_increment);
  });

  do {
    // Identify the root variables (those with no updating inputs).
    variables.forEach(function(variable) {
      if (variable._indegree === 0) {
        queue.push(variable);
      }
    });

    // Compute the variables in topological order.
    while (variable = queue.pop()) {
      variable_compute(variable);
      variable._outputs.forEach(postqueue);
      variables.delete(variable);
    }

    // Any remaining variables are circular, or depend on them.
    variables.forEach(function(variable) {
      if (variable_circular(variable)) {
        variable_error(variable, new RuntimeError("circular definition"));
        variable._outputs.forEach(variable_decrement);
        variables.delete(variable);
      }
    });
  } while (variables.size);

  function postqueue(variable) {
    if (--variable._indegree === 0) {
      queue.push(variable);
    }
  }
}

// We want to give generators, if they’re defined synchronously, a chance to
// update before computing downstream variables. This creates a synchronous
// promise chain of the given depth that we’ll await before recomputing
// downstream variables.
function runtime_defer(depth = 0) {
  let p = Promise.resolve();
  for (let i = 0; i < depth; ++i) p = p.then(() => {});
  return p;
}

function variable_circular(variable) {
  const inputs = new Set(variable._inputs);
  for (const i of inputs) {
    if (i === variable) return true;
    i._inputs.forEach(inputs.add, inputs);
  }
  return false;
}

function variable_increment(variable) {
  ++variable._indegree;
}

function variable_decrement(variable) {
  --variable._indegree;
}

function variable_value(variable) {
  return variable._promise.catch(variable._rejector);
}

function variable_invalidator(variable) {
  return new Promise(function(resolve) {
    variable._invalidate = resolve;
  });
}

function variable_intersector(invalidation, variable) {
  let node = typeof IntersectionObserver === "function" && variable._observer && variable._observer._node;
  let visible = !node, resolve = noop, reject = noop, promise, observer;
  if (node) {
    observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting) && (promise = null, resolve()));
    observer.observe(node);
    invalidation.then(() => (observer.disconnect(), observer = null, reject()));
  }
  return function(value) {
    if (visible) return Promise.resolve(value);
    if (!observer) return Promise.reject();
    if (!promise) promise = new Promise((y, n) => (resolve = y, reject = n));
    return promise.then(() => value);
  };
}

function variable_compute(variable) {
  variable._invalidate();
  variable._invalidate = noop;
  variable._pending();

  const value0 = variable._value;
  const version = ++variable._version;

  // Lazily-constructed invalidation variable; only constructed if referenced as an input.
  let invalidation = null;

  // If the variable doesn’t have any inputs, we can optimize slightly.
  const promise = variable._promise = (variable._inputs.length
      ? Promise.all(variable._inputs.map(variable_value)).then(define)
      : new Promise(resolve => resolve(variable._definition.call(value0))))
    .then(generate);

  // Compute the initial value of the variable.
  function define(inputs) {
    if (variable._version !== version) throw variable_stale;

    // Replace any reference to invalidation with the promise, lazily.
    for (var i = 0, n = inputs.length; i < n; ++i) {
      switch (inputs[i]) {
        case variable_invalidation: {
          inputs[i] = invalidation = variable_invalidator(variable);
          break;
        }
        case variable_visibility: {
          if (!invalidation) invalidation = variable_invalidator(variable);
          inputs[i] = variable_intersector(invalidation, variable);
          break;
        }
        case variable_variable: {
          inputs[i] = variable;
          break;
        }
      }
    }

    return variable._definition.apply(value0, inputs);
  }

  // If the value is a generator, then retrieve its first value, and dispose of
  // the generator if the variable is invalidated. Note that the cell may
  // already have been invalidated here, in which case we need to terminate the
  // generator immediately!
  function generate(value) {
    if (variable._version !== version) throw variable_stale;
    if (generatorish(value)) {
      (invalidation || variable_invalidator(variable)).then(variable_return(value));
      return variable_generate(variable, version, value);
    }
    return value;
  }

  promise.then((value) => {
    variable._value = value;
    variable._fulfilled(value);
  }, (error) => {
    if (error === variable_stale) return;
    variable._value = undefined;
    variable._rejected(error);
  });
}

function variable_generate(variable, version, generator) {
  const runtime = variable._module._runtime;
  let currentValue; // so that yield resolves to the yielded value

  // Retrieve the next value from the generator; if successful, invoke the
  // specified callback. The returned promise resolves to the yielded value, or
  // to undefined if the generator is done.
  function compute(onfulfilled) {
    return new Promise(resolve => resolve(generator.next(currentValue))).then(({done, value}) => {
      return done ? undefined : Promise.resolve(value).then(onfulfilled);
    });
  }

  // Retrieve the next value from the generator; if successful, fulfill the
  // variable, compute downstream variables, and schedule the next value to be
  // pulled from the generator at the start of the next animation frame. If not
  // successful, reject the variable, compute downstream variables, and return.
  function recompute() {
    const promise = compute((value) => {
      if (variable._version !== version) throw variable_stale;
      currentValue = value;
      postcompute(value, promise).then(() => runtime._precompute(recompute));
      variable._fulfilled(value);
      return value;
    });
    promise.catch((error) => {
      if (error === variable_stale || variable._version !== version) return;
      postcompute(undefined, promise);
      variable._rejected(error);
    });
  }

  // After the generator fulfills or rejects, set its current value, promise,
  // and schedule any downstream variables for update.
  function postcompute(value, promise) {
    variable._value = value;
    variable._promise = promise;
    variable._outputs.forEach(runtime._updates.add, runtime._updates);
    return runtime._compute();
  }

  // When retrieving the first value from the generator, the promise graph is
  // already established, so we only need to queue the next pull.
  return compute((value) => {
    if (variable._version !== version) throw variable_stale;
    currentValue = value;
    runtime._precompute(recompute);
    return value;
  });
}

function variable_error(variable, error) {
  variable._invalidate();
  variable._invalidate = noop;
  variable._pending();
  ++variable._version;
  variable._indegree = NaN;
  (variable._promise = Promise.reject(error)).catch(noop);
  variable._value = undefined;
  variable._rejected(error);
}

function variable_return(generator) {
  return function() {
    generator.return();
  };
}

function variable_reachable(variable) {
  if (variable._observer !== no_observer) return true; // Directly reachable.
  var outputs = new Set(variable._outputs);
  for (const output of outputs) {
    if (output._observer !== no_observer) return true;
    output._outputs.forEach(outputs.add, outputs);
  }
  return false;
}

function window_global(name) {
  return window[name];
}

/**
 * Reactive runtime engine.
 */
class ObservableRuntime {
  /**
   * Create a new runtime instance.
   */
  constructor() {
    /**
     * The Observable runtime.
     */
    this.runtime = new Runtime();
    /**
     * The main module (variable namespace).
     */
    this.main = this.runtime.module();
  }

  /**
   * Redefine a variable in the runtime.
   * @param {string} name The name of the variable.
   * @param {function} defn A function that returns the variable value.
   * @param {any[]} [inputs] The inputs to the definition function.
   */
  redefine(name, defn, inputs = []) {
    this.main.redefine(name, inputs, defn);
  }

  /**
   * Define a new variable in the runtime.
   * @param {string} name The name of the variable.
   * @param {function} defn A function that returns the variable value.
   * @param {any[]} inputs The inputs to the definition function.
   * @param {*} [observer] An observer instance that receives updates
   *  as the variable status changes.
   */
  variable(name, defn, inputs = [], observer) {
    this.main.variable(observer).define(name, inputs, defn);
  }

  /**
   * Instatiate an external module (namespace) in the runtime.
   * If injection values are provided, a derived module will be
   * created with injected variables from the main modulde.
   * @param {function} define The module definition function.
   * @param {object} [inject] An array of {name, alias} objects
   *  indicating variables to inject from the main module.
   * @returns The new module.
   */
  module(define, inject) {
    const mod = this.runtime.module(define);
    return inject ? mod.derive(inject, this.main) : mod;
  }

  /**
   * Import variables from an external module into the main module.
   * @param {object} from The module to import from.
   * @param {string} name The source name of the variable to import.
   * @param {string} alias The alias (target name) for the imported variable.
   */
  import(from, name, alias = name) {
    this.main.import(name, alias, from);
  }

  /**
   * Request the value for a named variable in the runtime.
   * @param {string} name The variable name.
   * @returns {Promise} A Promise for the variable value.
   */
  value(name) {
    return this.main.value(name);
  }

  /**
   * Define a set of variables in the main module.
   * @param {object[]} defs An array of variable definition objects.
   * @param {function} observer A function to call to get an observer
   *  instance for a variable.
   */
  define(defs, observer) {
    const mods = new Map;
    defs.forEach(def => {
      if (def.module) {
        const [id, define, inject] = def.module;
        mods.set(id, this.module(define, inject));
      } else if (def.import) {
        const [id, name, alias] = def.import;
        this.import(mods.get(id), name, alias);
      } else if (def.define) {
        const [name, inputs, defn] = def.define;
        this.variable(name, defn, inputs, observer(def));
      }
    });
  }

  /**
   * Generate an event handler function for a named assignment handler in the
   * runtime. The event handler collects all assignments to a proxy object
   * and propagates the assignments to the runtime by redefining variables.
   * @param {string} id The handler id (variable name).
   * @returns {function} The generated event handler.
   */
  handler(id) {
    return async (e) => {
      // prevent default event response
      e.preventDefault();

      // retrieve handler and variables from runtime
      const [handler, vars] = await this.value(id);
      const values = await Promise.all(vars.map(name => this.value(name)));

      // populate proxy object with variable values
      const proxy = Object.create(null);
      values.forEach((value, i) => proxy[vars[i]] = value);

      // invoke event handler
      await handler(proxy)(e);

      // propagate proxied assignments back to the runtime
      values.forEach((value, i) => {
        const name = vars[i];
        if (value !== proxy[name]) {
          this.redefine(name, proxy[name]);
        }
      });
    }
  }
}

function removeChildren(node, index = 0) {
  const nodes = node.childNodes;
  let i = nodes.length;
  while (i > index) node.removeChild(nodes[--i]);
}

/**
 * Abstract base class for Living Papers custom elements.
 */
class ArticleElement extends s {
  createRenderRoot() {
    // do not use a shadow dom
    return this;
  }

  connectedCallback() {
    if (!this.__initchildnodes) {
      // detach initial child nodes upon first connection to the DOM
      this.__initchildnodes = true;
      this.initialChildNodes(Array.from(this.childNodes));
      removeChildren(this);
    }
    super.connectedCallback();
  }

  initialChildNodes(nodes) {
    // store initial child nodes for subsequent access
    this.__children = nodes;
  }
}

class CellView extends ArticleElement {
  static get properties() {
    return {
      value: {state: true},
      status: {type: String, state: true}
    };
  }

  constructor() {
    super();
    this.status = PENDING;
    this.observer = new Observer((status, value) => {
      this.status = status;
      if (status !== PENDING) {
        this.value = value;
        this.dispatchEvent(new Event('change'));
      }
    });
  }

  render() {
    switch (this.status) {
      case PENDING:
      case FULFILLED:
        return this.value;
      case REJECTED:
        return error(this.value.error);
      default:
        return error(`Unrecognized status: ${this.status}.`);
    }
  }
}

function error(message) {
  return y`<span class="error-block">${message}</span>`;
}

class CiteRef extends ArticleElement {

  static get properties() {
    return {
      key: {type: String},
      mode: {type: String},
      index: {type: Number},
      data: {type: Object}
    };
  }

  constructor() {
    super();
    this.mode = 'citation';
    this.addEventListener('keydown', this.keyDown);
    this.addEventListener('mousedown', this.openCitation);
    this.addEventListener('focusout', this.focusOut);
  }

  focusOut(event) {
    if (!this.contains(event.relatedTarget)) {
      this.closeCitation();
    }
  }

  keyDown(event) {
    if (event.key == 'Enter') {
      this.openCitation();
    } else if (event.key != 'Tab') {
      this.closeCitation();
    }
  }

  closeCitation() {
    for (const child of this.querySelector('.cite-ref').children) {
      child.style.display = 'none';
    }
  }

  openCitation() {
    for (const child of this.querySelector('.cite-ref').children) {
      child.style.display = 'inline-block';
    }
  }

  // Expand and collapse info content
  toggleContent(event) {
    const summary = event.target.firstChild;
    event.target.hasAttribute('open') 
      ? summary.textContent = summary.getAttribute('data-longtext') 
      : summary.textContent = summary.getAttribute('data-shorttext');
  }

  initialChildNodes(nodes) {
    this.__prefix = nodes[0];
    this.__suffix = nodes[1];
  }

  render() {
    const { key, data, index, mode} = this;
    const wrapper = y`<div class='cite-info-wrapper'></div>`;

    // Unresolved citation
    if (data == null) {
      return y`<span class='cite-ref unresolved'>??${wrapper}<div class='cite-info'>
        <b>Unresolved citation</b><br>"${key}"</div></span>`;
    }

    const { fullInfo, shortInfo } = infoBody(data);
    const desctext = descBody(data);

    // Citation contents
    const subtitle = data.venue ? y`<div class='cite-head-subtitle'>${data.venue}</div>` : null;
    const info = shortInfo 
      ? y`<details class='cite-body-auth' @toggle=${this.toggleContent}>
              <summary data-shorttext=${shortInfo} data-longtext=${fullInfo}>${shortInfo}</summary>
            </details>`
      : y`<div class='cite-body-auth'>${fullInfo}</div>`;
    const desc = data.abstract && data.abstract !== desctext 
      ? y`<details class='cite-body-desc' @toggle=${this.toggleContent}>
              <summary data-shorttext=${desctext} data-longtext=${data.abstract}>${desctext}</summary>
            </details>`
      : y`<div class='cite-body-desc'>${desctext}</div>`;

    // Inline content
    const body = mode === 'inline-author' ? inlineContent(data, index) : index;

    return y`<span class='cite-ref' tabindex=0>${body}${wrapper}<div class='cite-info'>
      <a class='cite-head' href=${data.url} target="_blank" rel="noopener noreferrer" style="color: inherit;">
        <div class='cite-head-title'>${data.title}</div>${subtitle}
      </a>
      <div class='cite-body'>
        ${info}${desc}
      </div>
    </div></span>`;
  }
}

// Returns inline authors, or abbrev. if there are more than etal authors
function inlineContent(data, index, etal=2) {
  const { author } = data;

  let authors = author[0].family;
  if (author.length === 2) {
    authors += ` & ${author[1].family}`;
  } else if (author.length > etal) {
    authors += ' et al.';
  }

  return `${authors} [${index}]`;
}

function infoBody(data, maxAuthors=2) {
  const { author, year } =  data;

  const aMap = author.map(({ given, family }) => `${given.includes('.') ? given:given[0] + '.'} ${family}`);
  const fullInfo = `${year} \u2022 ${aMap.join(', ')}`;
  const shortInfo = aMap.length > maxAuthors 
    ? `${year} \u2022 ${aMap.slice(0, maxAuthors).join(', ')} +${aMap.length - maxAuthors}` 
    : null;

  return {fullInfo, shortInfo};
}

function descBody(data, charLimit=300) {
  const { abstract, tldr } = data;

  const shortDesc = tldr || abstract || 'No description is available for this article.';
  
  return shortDesc.length > charLimit 
    ? shortDesc.substring(0, shortDesc.substring(0, charLimit).lastIndexOf(' ')) + '... ' 
    : shortDesc;
}

const SCHEMA = 'dependencies';
const DEPS = Symbol('dependencies');
const LOAD = Symbol('load');
const TRUE = Promise.resolve(true);

const cache = new Map();

function resolver(name, version) {
  return path => `https://cdn.jsdelivr.net/npm/${name}@${version}/${path}`;
}

function style(href, doc = globalThis.document) {
  return new Promise(function(resolve, reject) {
    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onerror = reject;
    link.onload = resolve;
    doc.head.appendChild(link);
  });
}

function getDependencyBase(object) {
  let ctor = typeof HTMLElement !== 'undefined' && object instanceof HTMLElement
    ? object.constructor
    : object;
  while (ctor && !Object.hasOwn(ctor, SCHEMA)) {
    ctor = Object.getPrototypeOf(ctor);
    if (ctor && ctor.name === 'HTMLElement') return null;
  }
  return ctor;
}

function hasDependencies(object) {
  const base = getDependencyBase(object);
  return !base || (base[DEPS]?.[LOAD] === TRUE);
}

function getDependency(object, name) {
  return getDependencyBase(object)?.[DEPS]?.[name];
}

function setDependencies(object, loaded) {
  const base = getDependencyBase(object);
  if (base) {
    const deps = base[DEPS] || (base[DEPS] = {});
    for (const name in loaded) {
      deps[name] = loaded[name];
    }
    deps[LOAD] = TRUE;
  }
}

function loadDependencies(object) {
  const base = getDependencyBase(object);
  if (!base) return TRUE;

  // get dependency map, exit if load already began
  const deps = base[DEPS] || (base[DEPS] = {});
  if (deps[LOAD]) return deps[LOAD];

  // load dependent modules and css
  const load = { main: [], css: [] };
  const schema = base[SCHEMA];
  schema.forEach(({ name, version, main, css }) => {
    const resolve = resolver(name, version);
    const mainURI = resolve(main);
    const cssURI = resolve(css);

    const promise = cache.get(mainURI) || require(mainURI);
    cache.set(mainURI, promise);
    load.main.push(promise);

    if (css && !cache.has(cssURI)) {
      cache.set(cssURI, true);
      load.css.push(style(cssURI, object.ownerDocument));
    }
  });

  // once loaded, inject dependencies
  return deps[LOAD] = Promise.all(load.main.concat(load.css))
    .then(exports => {
      const map = schema.reduce((d, s, i) => (d[s.name] = exports[i], d), {});
      setDependencies(base, map);
    });
}

/**
 * Abstract base class for Living Papers custom elements
 * with dependencies loaded from a CDN upon page load.
 * Implementations must define a static `dependencies` getter
 * that returns a list of dependency definitions.
 */
class DependentElement extends ArticleElement {
  getDependency(name) {
    // proxy calls to the getDependency helper
    return getDependency(this, name);
  }

  shouldUpdate() {
    // check if dependencies are loaded and available
    // if not, load and request update once ready
    return hasDependencies(this) ? true
      : (loadDependencies(this).then(() => { this.requestUpdate(); }), false);
  }
}

class CodeBlock extends DependentElement {
  static get dependencies() {
    return [
      {
        name: '@uwdata/highlightjs',
        version: '0.0.1',
        main: 'dist/highlight.min.js',
        css: 'dist/styles/github.css'
      }
    ]
  }

  static get properties() {
    return {
      code: {type: String},
      inline: {type: Boolean},
      language: {type: String}
    };
  }

  constructor() {
    super();
    this.inline = false;
    this.language = null;
  }

  initialChildNodes(nodes) {
    // attempt to extract code from first child
    if (!this.hasAttribute('code') && nodes.length) {
      this.code = nodes[0].textContent.trim();
    }
  }

  render() {
    const hljs = this.getDependency('@uwdata/highlightjs');
    if (!hljs || !this.code) return;

    const { language, inline } = this;
    const root = document.createElement(inline ? 'code' : 'pre');
    language
      ? (root.innerHTML = hljs.highlight(this.code, { language }).value)
      : (root.innerText = this.code);
    return root;
  }
}

class CrossRef extends ArticleElement {
  static get properties() {
    return {
      type: {type: String},
      xref: {type: String},
      index: {type: Number},
      short: {type: Boolean},
    };
  }

  goto(event) {
    // prevent jump to referenced element
    event.preventDefault();

    // add id to hash component of current URL
    // do not change the page undo history
    const id =`#${this.xref}`;
    history.replaceState(null, null, id);

    // smoothly scroll to referenced component
    document.querySelector(id)
      .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  render() {
    // TODO? title tooltip
    const { type, xref, index, short } = this;
    const resolved = index != null;
    const cls = `cross-ref ${type}${!short ? ' full' : ''}`;
    if (resolved) {
      return y`<a class=${cls} href="#${xref}" @click=${this.goto}>${index}</a>`;
    } else {
      return y`<a class="${cls} unresolved" title="Unresolved reference: ${xref}">?</a>`;
    }
  }
}

let numNotes = 0; // incrementing counter of notes

class InlineNote extends ArticleElement {
  constructor() {
    super();
    this.number = ++numNotes;
  }

  render() {
    const num = this.number;
    return y`<span class="inline-note" @click=${(evt) => evt.target.parentElement.classList.toggle('open')}>
      <sup class="inline-note-number">${num}</sup>
      <span class="note margin" data-number="${num}">${this.__children}</span>
    </span>`;
  }
}

class RangeText extends ArticleElement {
  static get properties() {
    return {
      value: {type: Number},
      step: {type: Number},
      span: {type: Number},
      min: {type: Number},
      max: {type: Number},
      title: {type: String}
    };
  }

  constructor() {
    super();
    this.value = 0;
    this.step = 1;
    this.span = 1;
    this.min = -1000;
    this.max = +1000;
    this.title = 'Draggable text';
    this.addEventListener('click', e => e.stopPropagation());
    this.addEventListener('mousedown', e => this.onMouseDown(e));
  }

  onMouseDown(e) {
    e.stopImmediatePropagation();
    const mx = e.x;
    const mv = +this.value;

    const cursor = this.ownerDocument.body.style.cursor;
    this.ownerDocument.body.style.cursor = 'ew-resize';

    const select = this.style.MozUserSelect;
    this.style.MozUserSelect = 'none';

    const move = e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const { step, span, min, max } = this;
      const dx = step * Math.round((e.x - mx) / span);
      const value = Math.max(Math.min(mv + dx, max), min);
      if (this.value !== value) {
        this.value = value;
        this.dispatchEvent(new CustomEvent('input'));
        this.requestUpdate();
      }
    };

    const up = e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.ownerDocument.body.style.cursor = cursor;
      this.style.MozUserSelect = select;
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  }

  render() {
    const digits = Math.max(0, Math.ceil(-Math.log10(this.step)));
    return y`<span class="range-text" title=${this.title}>${this.value.toFixed(digits)}</span>`;
  }
}

class TexMath extends DependentElement {
  static get dependencies() {
    return [
      {
        name: 'katex',
        version: '0.15.3',
        module: 'dist/katex.mjs',
        main: 'dist/katex.min.js',
        css: 'dist/katex.min.css'
      }
    ]
  }

  static get properties() {
    return {
      mode: {type: String},
      code: {type: String},
      leqno: {type: Boolean},
      fleqn: {type: Boolean, converter: v => v !== 'false'},
      minRuleThickness: {type: Number}
    };
  }

  constructor() {
    super();
    this.mode = 'display';
    this.leqno = false;
    this.fleqn = false;
  }

  initialChildNodes(nodes) {
    // attempt to extract code from first child
    if (!this.hasAttribute('code') && nodes.length) {
      this.code = nodes[0].textContent;
    }
  }

  prepareMath() {
    return this.code;
  }

  render() {
    const katex = this.getDependency('katex');
    if (!katex || !this.code) return;

    // See https://katex.org/docs/options.html
    const displayMode = this.mode === 'display';
    const options = {
      throwOnError: false,
      displayMode,
      leqno: this.leqno,
      fleqn: this.fleqn,
      minRuleThickness: this.minRuleThickness
    };

    const root = document.createElement(displayMode ? 'div' : 'span');
    katex.render(this.prepareMath(), root, options);
    return root;
  }
}

class TexEquation extends TexMath {
  static get properties() {
    return {
      type: {type: String},
      nonumber: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.mode = 'display';
    this.type = 'align';
    this.nonumber = false;
  }

  prepareMath() {
    const cmd = this.type + (this.nonumber ? '*' : '');
    return `\\begin{${cmd}}\n${this.code}\n\\end{${cmd}}`;
  }
}

function cells() {
function _1(Scrubber){return(
Scrubber([0, 10], {
  step: 0.05,
  value: 5,
  alternate: true,
  label: 'Rotation',
  format: x => x.toFixed(2)
})
)}

function _2(Scrubber){return(
Scrubber([1, 100], {
  value: 4,
  alternate: true,
  label: 'Separation'
})
)}

function _3(){return(
25
)}

function _4(size,sep){return(
Math.ceil((800 + 4*size) / sep)
)}

function _5(){return(
30
)}

function _6(d3){return(
d3.scaleSequential(d3.interpolateRainbow).domain([360, 0])
)}

function _7(svg,size,pad,d3,n,rot,sep,color){return(
svg`<svg width="${800}" height="${2*size+pad}" viewBox="0 0 800 ${2*size+pad}">
  ${d3.range(0, n).map(i => {
    const a = (i * rot) % 360;
    return svg`<rect
      transform="translate(${i*sep-2*size-1}, ${pad/2}) rotate(${-a}, ${size}, ${size})"
      width="${2*size}" height="${2*size}"
      fill="none" stroke="${color(a)}"></rect>`;
  })}
  </svg>`
)}

function _8(){return(
-10
)}

function _9(){return(
10
)}

function _10(){return(
0.1
)}

function _11(){return(
x => x === 0 ? 1 : (Math.sin(Math.PI * x) / (Math.PI * x))
)}

function _12(){return(
x => x.toFixed(2).replace('-0', '0')
)}

function _13(Plot,value,d3,max,step,sinc){return(
Plot.plot({
  y: { grid: true },
  marks: [
    Plot.ruleX([value], { stroke: '#888' }),
    Plot.line(
      d3.range(-max, Math.max(max + step, value), step),
      { x: x => x, y: x => sinc(x), stroke: 'steelblue', strokeWidth: 2 }
    ),
    Plot.dot([value], { x: x => x, y: x => sinc(x), fill: 'steelblue' })
  ],
  width: 400,
  height: 250
})
)}

function _14(Scrubber,max,step,tex){return(
Scrubber([-max, max], {
  step, labelWidth: '20px', loop: false,
  label: tex`x`, format: x => x.toFixed(1)
  })
)}

function _15(){return(
775
)}

function _16(d3LineChart){return(
d3LineChart
)}

return [
  {module:[1, define1]},
  {import:[1, "Scrubber"]},
  {define:["viewof rot", ["Scrubber"], _1], cell:1},
  {define:["rot", ["Generators","viewof rot"], (G, _) => G.input(_)]},
  {define:["viewof sep", ["Scrubber"], _2], cell:2},
  {define:["sep", ["Generators","viewof sep"], (G, _) => G.input(_)]},
  {define:["size", [], _3], cell:3},
  {define:["n", ["size","sep"], _4], cell:4},
  {define:["pad", [], _5], cell:5},
  {define:["color", ["d3"], _6], cell:6},
  {define:[null, ["svg","size","pad","d3","n","rot","sep","color"], _7], cell:7},
  {define:["value", [], _8], cell:8},
  {define:["max", [], _9], cell:9},
  {define:["step", [], _10], cell:10},
  {define:["sinc", [], _11], cell:11},
  {define:["format", [], _12], cell:12},
  {define:[null, ["Plot","value","d3","max","step","sinc"], _13], cell:13},
  {define:[null, ["Scrubber","max","step","tex"], _14], cell:14},
  {define:["chartWidth", [], _15], cell:15},
  {module:[2, define2, [{name:"chartWidth",alias:"width"}]]},
  {import:[2, "chart", "d3LineChart"]},
  {define:[null, ["d3LineChart"], _16], cell:17}
];
}

function attrs() {
function _1(max){return(
-max
)}

function _2(max){return(
max
)}

function _3(step){return(
step
)}

function _4(format,sinc,value){return(
`\sinc(x) = ${format(sinc(value))}`
)}

return [
  {define:[null, ["max"], _1], cell:0},
  {define:[null, ["max"], _2], cell:1},
  {define:[null, ["step"], _3], cell:2},
  {define:[null, ["format","sinc","value"], _4], cell:3}
];
}

var module = /*#__PURE__*/Object.freeze({
  __proto__: null,
  cells: cells,
  attrs: attrs
});

window.customElements.define('cell-view', CellView);
window.customElements.define('cite-ref', CiteRef);
window.customElements.define('code-block', CodeBlock);
window.customElements.define('cross-ref', CrossRef);
window.customElements.define('inline-note', InlineNote);
window.customElements.define('range-text', RangeText);
window.customElements.define('tex-equation', TexEquation);
window.customElements.define('tex-math', TexMath);

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('article');
  reference(root, [{"id":"doi:10.1145/3242587.3242600","doi":"10.1145/3242587.3242600","s2id":"4fca64e6dc4e803d3ed904c04c6845a9e6adc53e","year":2018,"author":[{"given":"Matthew","family":"Conlen","sequence":"first","affiliation":[{"name":"University of Washington, Seattle, WA, USA"}]},{"given":"Jeffrey","family":"Heer","sequence":"additional","affiliation":[{"name":"University of Washington, Seattle, WA, USA"}]}],"title":"Idyll: A Markup Language for Authoring and Publishing Interactive Articles on the Web","venue":"Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology","url":"https://www.semanticscholar.org/paper/4fca64e6dc4e803d3ed904c04c6845a9e6adc53e","abstract":"The web has matured as a publishing platform: news outlets regularly publish rich, interactive stories while technical writers use animation and interaction to communicate complex ideas. This style of interactive media has the potential to engage a large audience and more clearly explain concepts, but is expensive and time consuming to produce. Drawing on industry experience and interviews with domain experts, we contribute design tools to make it easier to author and publish interactive articles. We introduce Idyll, a novel \"compile-to-the-web\" language for web-based interactive narratives. Idyll implements a flexible article model, allowing authors control over document style and layout, reader-driven events (such as button clicks and scroll triggers), and a structured interface to JavaScript components. Through both examples and first-use results from undergraduate computer science students, we show how Idyll reduces the amount of effort and custom code required to create interactive articles.","tldr":"This work introduces Idyll, a novel \"compile-to-the-web\" language for web-based interactive narratives, and shows how Idyll reduces the amount of effort and custom code required to create interactive articles."},{"id":"conlen2021","year":2021,"author":[{"given":"Matthew","family":"Conlen"},{"given":"Megan","family":"Vo"},{"given":"Alan","family":"Tan"},{"given":"Jeffrey","family":"Heer"}],"title":"Idyll Studio: A structured editor for authoring interactive & data-driven articles","venue":"The 34th Annual ACM Symposium on User Interface Software and Technology"}]);
  hydrate(new ObservableRuntime, root, module, {"_id":2,"attrs":[["1","min",0],["1","max",1],["1","step",2],["2","code",3]],"events":[]});
});
