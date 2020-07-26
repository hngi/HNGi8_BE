/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ (function (
  e,
  t
) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define(t)
      : (e.Popper = t());
}(this, () => {
  function e(e) {
    return e && {}.toString.call(e) === '[object Function]';
  }
  function t(e, t) {
    if (e.nodeType !== 1) return [];
    const o = e.ownerDocument.defaultView;
    const n = o.getComputedStyle(e, null);
    return t ? n[t] : n;
  }
  function o(e) {
    return e.nodeName === 'HTML' ? e : e.parentNode || e.host;
  }
  function n(e) {
    if (!e) return document.body;
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;
      case '#document':
        return e.body;
    }
    const i = t(e);
    const r = i.overflow;
    const p = i.overflowX;
    const s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }
  function i(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }
  function r(e) {
    return e === 11 ? re : e === 10 ? pe : re || pe;
  }
  function p(e) {
    if (!e) return document.documentElement;
    for (
      var o = r(10) ? document.body : null, n = e.offsetParent || null;
      n === o && e.nextElementSibling;

    ) n = (e = e.nextElementSibling).offsetParent;
    const i = n && n.nodeName;
    return i && i !== 'BODY' && i !== 'HTML'
      ? ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1
        && t(n, 'position') === 'static'
        ? p(n)
        : n
      : e
        ? e.ownerDocument.documentElement
        : document.documentElement;
  }
  function s(e) {
    const t = e.nodeName;
    return t !== 'BODY' && (t === 'HTML' || p(e.firstElementChild) === e);
  }
  function d(e) {
    return e.parentNode === null ? e : d(e.parentNode);
  }
  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    const o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING;
    const n = o ? e : t;
    const i = o ? t : e;
    const r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    const l = r.commonAncestorContainer;
    if ((e !== l && t !== l) || n.contains(i)) return s(l) ? l : p(l);
    const f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }
  function l(e) {
    const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top';
    const o = t === 'top' ? 'scrollTop' : 'scrollLeft';
    const n = e.nodeName;
    if (n === 'BODY' || n === 'HTML') {
      const i = e.ownerDocument.documentElement;
      const r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }
    return e[o];
  }
  function f(e, t) {
    const o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const n = l(t, 'top');
    const i = l(t, 'left');
    const r = o ? -1 : 1;
    return (
      (e.top += n * r),
      (e.bottom += n * r),
      (e.left += i * r),
      (e.right += i * r),
      e
    );
  }
  function m(e, t) {
    const o = t === 'x' ? 'Left' : 'Top';
    const n = o == 'Left' ? 'Right' : 'Bottom';
    return (
      parseFloat(e[`border${o}Width`], 10)
      + parseFloat(e[`border${n}Width`], 10)
    );
  }
  function h(e, t, o, n) {
    return ee(
      t[`offset${e}`],
      t[`scroll${e}`],
      o[`client${e}`],
      o[`offset${e}`],
      o[`scroll${e}`],
      r(10)
        ? parseInt(o[`offset${e}`])
            + parseInt(n[`margin${e === 'Height' ? 'Top' : 'Left'}`])
            + parseInt(n[`margin${e === 'Height' ? 'Bottom' : 'Right'}`])
        : 0
    );
  }
  function c(e) {
    const t = e.body;
    const o = e.documentElement;
    const n = r(10) && getComputedStyle(o);
    return { height: h('Height', t, o, n), width: h('Width', t, o, n) };
  }
  function g(e) {
    return { ...e, right: e.left + e.width, bottom: e.top + e.height };
  }
  function u(e) {
    let o = {};
    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        const n = l(e, 'top');
        const i = l(e, 'left');
        (o.top += n), (o.left += i), (o.bottom += n), (o.right += i);
      } else o = e.getBoundingClientRect();
    } catch (t) {}
    const p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    };
    const s = e.nodeName === 'HTML' ? c(e.ownerDocument) : {};
    const d = s.width || e.clientWidth || p.width;
    const a = s.height || e.clientHeight || p.height;
    let f = e.offsetWidth - d;
    let h = e.offsetHeight - a;
    if (f || h) {
      const u = t(e);
      (f -= m(u, 'x')), (h -= m(u, 'y')), (p.width -= f), (p.height -= h);
    }
    return g(p);
  }
  function b(e, o) {
    const i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const p = r(10);
    const s = o.nodeName === 'HTML';
    const d = u(e);
    const a = u(o);
    const l = n(e);
    const m = t(o);
    const h = parseFloat(m.borderTopWidth, 10);
    const c = parseFloat(m.borderLeftWidth, 10);
    i && s && ((a.top = ee(a.top, 0)), (a.left = ee(a.left, 0)));
    let b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });
    if (((b.marginTop = 0), (b.marginLeft = 0), !p && s)) {
      const w = parseFloat(m.marginTop, 10);
      const y = parseFloat(m.marginLeft, 10);
      (b.top -= h - w),
      (b.bottom -= h - w),
      (b.left -= c - y),
      (b.right -= c - y),
      (b.marginTop = w),
      (b.marginLeft = y);
    }
    return (
      (p && !i ? o.contains(l) : o === l && l.nodeName !== 'BODY')
        && (b = f(b, o)),
      b
    );
  }
  function w(e) {
    const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const o = e.ownerDocument.documentElement;
    const n = b(e, o);
    const i = ee(o.clientWidth, window.innerWidth || 0);
    const r = ee(o.clientHeight, window.innerHeight || 0);
    const p = t ? 0 : l(o);
    const s = t ? 0 : l(o, 'left');
    const d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }
  function y(e) {
    const n = e.nodeName;
    if (n === 'BODY' || n === 'HTML') return !1;
    if (t(e, 'position') === 'fixed') return !0;
    const i = o(e);
    return !!i && y(i);
  }
  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;
    for (var o = e.parentElement; o && t(o, 'transform') === 'none';) o = o.parentElement;
    return o || document.documentElement;
  }
  function v(e, t, r, p) {
    const s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    let d = { top: 0, left: 0 };
    const l = s ? E(e) : a(e, i(t));
    if (p === 'viewport') d = w(l, s);
    else {
      let f;
      p === 'scrollParent'
        ? ((f = n(o(t))),
        f.nodeName === 'BODY' && (f = e.ownerDocument.documentElement))
        : p === 'window'
          ? (f = e.ownerDocument.documentElement)
          : (f = p);
      const m = b(f, l, s);
      if (f.nodeName === 'HTML' && !y(l)) {
        const h = c(e.ownerDocument);
        const g = h.height;
        const u = h.width;
        (d.top += m.top - m.marginTop),
        (d.bottom = g + m.top),
        (d.left += m.left - m.marginLeft),
        (d.right = u + m.left);
      } else d = m;
    }
    r = r || 0;
    const v = typeof r === 'number';
    return (
      (d.left += v ? r : r.left || 0),
      (d.top += v ? r : r.top || 0),
      (d.right -= v ? r : r.right || 0),
      (d.bottom -= v ? r : r.bottom || 0),
      d
    );
  }
  function x(e) {
    const t = e.width;
    const o = e.height;
    return t * o;
  }
  function O(e, t, o, n, i) {
    const r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (e.indexOf('auto') === -1) return e;
    const p = v(o, n, r, i);
    const s = {
      top: { width: p.width, height: t.top - p.top },
      right: { width: p.right - t.right, height: p.height },
      bottom: { width: p.width, height: p.bottom - t.bottom },
      left: { width: t.left - p.left, height: p.height }
    };
    const d = Object.keys(s)
      .map((e) => ({ key: e, ...s[e], area: x(s[e]) }))
      .sort((e, t) => t.area - e.area);
    const a = d.filter((e) => {
      const t = e.width;
      const n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    });
    const l = a.length > 0 ? a[0].key : d[0].key;
    const f = e.split('-')[1];
    return l + (f ? `-${f}` : '');
  }
  function L(e, t, o) {
    const n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    const r = n ? E(t) : a(t, i(o));
    return b(o, r, n);
  }
  function S(e) {
    const t = e.ownerDocument.defaultView;
    const o = t.getComputedStyle(e);
    const n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0);
    const i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0);
    const r = { width: e.offsetWidth + i, height: e.offsetHeight + n };
    return r;
  }
  function T(e) {
    const t = {
      left: 'right', right: 'left', bottom: 'top', top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, (e) => t[e]);
  }
  function C(e, t, o) {
    o = o.split('-')[0];
    const n = S(e);
    const i = { width: n.width, height: n.height };
    const r = ['right', 'left'].indexOf(o) !== -1;
    const p = r ? 'top' : 'left';
    const s = r ? 'left' : 'top';
    const d = r ? 'height' : 'width';
    const a = r ? 'width' : 'height';
    return (
      (i[p] = t[p] + t[d] / 2 - n[d] / 2),
      (i[s] = o === s ? t[s] - n[a] : t[T(s)]),
      i
    );
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }
  function N(e, t, o) {
    if (Array.prototype.findIndex) { return e.findIndex((e) => e[t] === o); }
    const n = D(e, (e) => e[t] === o);
    return e.indexOf(n);
  }
  function P(t, o, n) {
    const i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return (
      i.forEach((t) => {
        t.function
          && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        const n = t.function || t.fn;
        t.enabled
          && e(n)
          && ((o.offsets.popper = g(o.offsets.popper)),
          (o.offsets.reference = g(o.offsets.reference)),
          (o = n(o, t)));
      }),
      o
    );
  }
  function k() {
    if (!this.state.isDestroyed) {
      let e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      (e.offsets.reference = L(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
      (e.placement = O(
        this.options.placement,
        e.offsets.reference,
        this.popper,
        this.reference,
        this.options.modifiers.flip.boundariesElement,
        this.options.modifiers.flip.padding
      )),
      (e.originalPlacement = e.placement),
      (e.positionFixed = this.options.positionFixed),
      (e.offsets.popper = C(this.popper, e.offsets.reference, e.placement)),
      (e.offsets.popper.position = this.options.positionFixed
        ? 'fixed'
        : 'absolute'),
      (e = P(this.modifiers, e)),
      this.state.isCreated
        ? this.options.onUpdate(e)
        : ((this.state.isCreated = !0), this.options.onCreate(e));
    }
  }
  function W(e, t) {
    return e.some((e) => {
      const o = e.name;
      const n = e.enabled;
      return n && o === t;
    });
  }
  function B(e) {
    for (
      let t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length;
      n++
    ) {
      const i = t[n];
      const r = i ? `${i}${o}` : e;
      if (typeof document.body.style[r] !== 'undefined') return r;
    }
    return null;
  }
  function H() {
    return (
      (this.state.isDestroyed = !0),
      W(this.modifiers, 'applyStyle')
        && (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[B('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy
        && this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function A(e) {
    const t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  function M(e, t, o, i) {
    const r = e.nodeName === 'BODY';
    const p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, { passive: !0 }),
    r || M(n(p.parentNode), t, o, i),
    i.push(p);
  }
  function F(e, t, o, i) {
    (o.updateBound = i),
    A(e).addEventListener('resize', o.updateBound, { passive: !0 });
    const r = n(e);
    return (
      M(r, 'scroll', o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    );
  }
  function I() {
    this.state.eventsEnabled
      || (this.state = F(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function R(e, t) {
    return (
      A(e).removeEventListener('resize', t.updateBound),
      t.scrollParents.forEach((e) => {
        e.removeEventListener('scroll', t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }
  function U() {
    this.state.eventsEnabled
      && (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = R(this.reference, this.state)));
  }
  function Y(e) {
    return e !== '' && !isNaN(parseFloat(e)) && isFinite(e);
  }
  function V(e, t) {
    Object.keys(t).forEach((o) => {
      let n = '';
      ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) !== -1
        && Y(t[o])
        && (n = 'px'),
      (e.style[o] = t[o] + n);
    });
  }
  function j(e, t) {
    Object.keys(t).forEach((o) => {
      const n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }
  function q(e, t) {
    const o = e.offsets;
    const n = o.popper;
    const i = o.reference;
    const r = $;
    const p = function (e) {
      return e;
    };
    const s = r(i.width);
    const d = r(n.width);
    const a = ['left', 'right'].indexOf(e.placement) !== -1;
    const l = e.placement.indexOf('-') !== -1;
    const f = t ? (a || l || s % 2 == d % 2 ? r : Z) : p;
    const m = t ? r : p;
    return {
      left: f(s % 2 == 1 && d % 2 == 1 && !l && t ? n.left - 1 : n.left),
      top: m(n.top),
      bottom: m(n.bottom),
      right: f(n.right)
    };
  }
  function K(e, t, o) {
    const n = D(e, (e) => {
      const o = e.name;
      return o === t;
    });
    const i = !!n
        && e.some((e) => e.name === o && e.enabled && e.order < n.order);
    if (!i) {
      const r = `\`${t}\``;
      console.warn(
        `\`${
          o
        }\``
          + ` modifier is required by ${
            r
          } modifier in order to work, be sure to include it before ${
            r
          }!`
      );
    }
    return i;
  }
  function z(e) {
    return e === 'end' ? 'start' : e === 'start' ? 'end' : e;
  }
  function G(e) {
    const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const o = he.indexOf(e);
    const n = he.slice(o + 1).concat(he.slice(0, o));
    return t ? n.reverse() : n;
  }
  function _(e, t, o, n) {
    const i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    const r = +i[1];
    const p = i[2];
    if (!r) return e;
    if (p.indexOf('%') === 0) {
      let s;
      switch (p) {
        case '%p':
          s = o;
          break;
        case '%':
        case '%r':
        default:
          s = n;
      }
      const d = g(s);
      return (d[t] / 100) * r;
    }
    if (p === 'vh' || p === 'vw') {
      let a;
      return (
        (a = p === 'vh'
          ? ee(document.documentElement.clientHeight, window.innerHeight || 0)
          : ee(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      );
    }
    return r;
  }
  function X(e, t, o, n) {
    const i = [0, 0];
    const r = ['right', 'left'].indexOf(n) !== -1;
    const p = e.split(/(\+|\-)/).map((e) => e.trim());
    const s = p.indexOf(
      D(p, (e) => e.search(/,|\s/) !== -1)
    );
    p[s]
      && p[s].indexOf(',') === -1
      && console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
      );
    const d = /\s*,\s*|\s+/;
    let a = s === -1
      ? [p]
      : [
        p.slice(0, s).concat([p[s].split(d)[0]]),
        [p[s].split(d)[1]].concat(p.slice(s + 1))
      ];
    return (
      (a = a.map((e, n) => {
        const i = (n === 1 ? !r : r) ? 'height' : 'width';
        let p = !1;
        return e
          .reduce((e, t) => (e[e.length - 1] === '' && ['+', '-'].indexOf(t) !== -1
            ? ((e[e.length - 1] = t), (p = !0), e)
            : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t)), [])
          .map((e) => _(e, i, t, o));
      })),
      a.forEach((e, t) => {
        e.forEach((o, n) => {
          Y(o) && (i[t] += o * (e[n - 1] === '-' ? -1 : 1));
        });
      }),
      i
    );
  }
  function J(e, t) {
    let o;
    const n = t.offset;
    const i = e.placement;
    const r = e.offsets;
    const p = r.popper;
    const s = r.reference;
    const d = i.split('-')[0];
    return (
      (o = Y(+n) ? [+n, 0] : X(n, p, s, d)),
      d === 'left'
        ? ((p.top += o[0]), (p.left -= o[1]))
        : d === 'right'
          ? ((p.top += o[0]), (p.left += o[1]))
          : d === 'top'
            ? ((p.left += o[0]), (p.top -= o[1]))
            : d === 'bottom' && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    );
  }
  const Q = Math.min;
  var Z = Math.floor;
  var $ = Math.round;
  var ee = Math.max;
  const te = typeof window !== 'undefined'
      && typeof document !== 'undefined'
      && typeof navigator !== 'undefined';
  const oe = (function () {
    for (let e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1) if (te && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
    return 0;
  }());
  const ne = te && window.Promise;
  const ie = ne
    ? function (e) {
      let t = !1;
      return function () {
        t
              || ((t = !0),
              window.Promise.resolve().then(() => {
                (t = !1), e();
              }));
      };
    }
    : function (e) {
      let t = !1;
      return function () {
        t
              || ((t = !0),
              setTimeout(() => {
                (t = !1), e();
              }, oe));
      };
    };
  var re = te && !!(window.MSInputMethodContext && document.documentMode);
  var pe = te && /MSIE 10/.test(navigator.userAgent);
  const se = function (e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  };
  const de = (function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        (o = t[n]),
        (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o);
      }
    }
    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }());
  const ae = function (e, t, o) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
        : (e[t] = o),
      e
    );
  };
  const le = Object.assign
      || function (e) {
        for (var t, o = 1; o < arguments.length; o++) for (const n in ((t = arguments[o]), t)) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e;
      };
  const fe = te && /Firefox/i.test(navigator.userAgent);
  const me = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ];
  var he = me.slice(3);
  const ce = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  };
  const ge = (function () {
    function t(o, n) {
      const i = this;
      const r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      se(this, t),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }),
      (this.update = ie(this.update.bind(this))),
      (this.options = { ...t.Defaults, ...r }),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = o && o.jquery ? o[0] : o),
      (this.popper = n && n.jquery ? n[0] : n),
      (this.options.modifiers = {}),
      Object.keys({ ...t.Defaults.modifiers, ...r.modifiers }).forEach(
        (e) => {
          i.options.modifiers[e] = {

            ...t.Defaults.modifiers[e] || {},
            ...(r.modifiers ? r.modifiers[e] : {})
          };
        }
      ),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map((e) => ({ name: e, ...i.options.modifiers[e] }))
        .sort((e, t) => e.order - t.order)),
      this.modifiers.forEach((t) => {
        t.enabled
              && e(t.onLoad)
              && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }),
      this.update();
      const p = this.options.eventsEnabled;
      p && this.enableEventListeners(), (this.state.eventsEnabled = p);
    }
    return (
      de(t, [
        {
          key: 'update',
          value() {
            return k.call(this);
          }
        },
        {
          key: 'destroy',
          value() {
            return H.call(this);
          }
        },
        {
          key: 'enableEventListeners',
          value() {
            return I.call(this);
          }
        },
        {
          key: 'disableEventListeners',
          value() {
            return U.call(this);
          }
        }
      ]),
      t
    );
  }());
  return (
    (ge.Utils = (typeof window === 'undefined' ? global : window).PopperUtils),
    (ge.placements = me),
    (ge.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate() {},
      onUpdate() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn(e) {
            const t = e.placement;
            const o = t.split('-')[0];
            const n = t.split('-')[1];
            if (n) {
              const i = e.offsets;
              const r = i.reference;
              const p = i.popper;
              const s = ['bottom', 'top'].indexOf(o) !== -1;
              const d = s ? 'left' : 'top';
              const a = s ? 'width' : 'height';
              const l = {
                start: ae({}, d, r[d]),
                end: ae({}, d, r[d] + r[a] - p[a])
              };
              e.offsets.popper = { ...p, ...l[n] };
            }
            return e;
          }
        },
        offset: {
          order: 200, enabled: !0, fn: J, offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn(e, t) {
            let o = t.boundariesElement || p(e.instance.popper);
            e.instance.reference === o && (o = p(o));
            const n = B('transform');
            const i = e.instance.popper.style;
            const r = i.top;
            const s = i.left;
            const d = i[n];
            (i.top = ''), (i.left = ''), (i[n] = '');
            const a = v(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              o,
              e.positionFixed
            );
            (i.top = r), (i.left = s), (i[n] = d), (t.boundaries = a);
            const l = t.priority;
            let f = e.offsets.popper;
            const m = {
              primary(e) {
                let o = f[e];
                return (
                  f[e] < a[e]
                      && !t.escapeWithReference
                      && (o = ee(f[e], a[e])),
                  ae({}, e, o)
                );
              },
              secondary(e) {
                const o = e === 'right' ? 'left' : 'top';
                let n = f[o];
                return (
                  f[e] > a[e]
                      && !t.escapeWithReference
                      && (n = Q(
                        f[o],
                        a[e] - (e === 'right' ? f.width : f.height)
                      )),
                  ae({}, o, n)
                );
              }
            };
            return (
              l.forEach((e) => {
                const t = ['left', 'top'].indexOf(e) === -1 ? 'secondary' : 'primary';
                f = { ...f, ...m[t](e) };
              }),
              (e.offsets.popper = f),
              e
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent'
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn(e) {
            const t = e.offsets;
            const o = t.popper;
            const n = t.reference;
            const i = e.placement.split('-')[0];
            const r = Z;
            const p = ['top', 'bottom'].indexOf(i) !== -1;
            const s = p ? 'right' : 'bottom';
            const d = p ? 'left' : 'top';
            const a = p ? 'width' : 'height';
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            );
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn(e, o) {
            let n;
            if (!K(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
            let i = o.element;
            if (typeof i === 'string') {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e;
            } else if (!e.instance.popper.contains(i)) {
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                e
              );
            }
            const r = e.placement.split('-')[0];
            const p = e.offsets;
            const s = p.popper;
            const d = p.reference;
            const a = ['left', 'right'].indexOf(r) !== -1;
            const l = a ? 'height' : 'width';
            const f = a ? 'Top' : 'Left';
            const m = f.toLowerCase();
            const h = a ? 'left' : 'top';
            const c = a ? 'bottom' : 'right';
            const u = S(i)[l];
            d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
            d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
            (e.offsets.popper = g(e.offsets.popper));
            const b = d[m] + d[l] / 2 - u / 2;
            const w = t(e.instance.popper);
            const y = parseFloat(w[`margin${f}`], 10);
            const E = parseFloat(w[`border${f}Width`], 10);
            let v = b - e.offsets.popper[m] - y - E;
            return (
              (v = ee(Q(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow = ((n = {}), ae(n, m, $(v)), ae(n, h, ''), n)),
              e
            );
          },
          element: '[x-arrow]'
        },
        flip: {
          order: 600,
          enabled: !0,
          fn(e, t) {
            if (W(e.instance.modifiers, 'inner')) return e;
            if (e.flipped && e.placement === e.originalPlacement) return e;
            const o = v(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              t.boundariesElement,
              e.positionFixed
            );
            let n = e.placement.split('-')[0];
            let i = T(n);
            let r = e.placement.split('-')[1] || '';
            let p = [];
            switch (t.behavior) {
              case ce.FLIP:
                p = [n, i];
                break;
              case ce.CLOCKWISE:
                p = G(n);
                break;
              case ce.COUNTERCLOCKWISE:
                p = G(n, !0);
                break;
              default:
                p = t.behavior;
            }
            return (
              p.forEach((s, d) => {
                if (n !== s || p.length === d + 1) return e;
                (n = e.placement.split('-')[0]), (i = T(n));
                const a = e.offsets.popper;
                const l = e.offsets.reference;
                const f = Z;
                const m = (n === 'left' && f(a.right) > f(l.left))
                    || (n === 'right' && f(a.left) < f(l.right))
                    || (n === 'top' && f(a.bottom) > f(l.top))
                    || (n === 'bottom' && f(a.top) < f(l.bottom));
                const h = f(a.left) < f(o.left);
                const c = f(a.right) > f(o.right);
                const g = f(a.top) < f(o.top);
                const u = f(a.bottom) > f(o.bottom);
                const b = (n === 'left' && h)
                    || (n === 'right' && c)
                    || (n === 'top' && g)
                    || (n === 'bottom' && u);
                const w = ['top', 'bottom'].indexOf(n) !== -1;
                const y = !!t.flipVariations
                    && ((w && r === 'start' && h)
                      || (w && r === 'end' && c)
                      || (!w && r === 'start' && g)
                      || (!w && r === 'end' && u));
                const E = !!t.flipVariationsByContent
                    && ((w && r === 'start' && c)
                      || (w && r === 'end' && h)
                      || (!w && r === 'start' && u)
                      || (!w && r === 'end' && g));
                const v = y || E;
                (m || b || v)
                  && ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  v && (r = z(r)),
                  (e.placement = n + (r ? `-${r}` : '')),
                  (e.offsets.popper = {

                    ...e.offsets.popper,
                    ...C(e.instance.popper, e.offsets.reference, e.placement)
                  }),
                  (e = P(e.instance.modifiers, e, 'flip')));
              }),
              e
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1
        },
        inner: {
          order: 700,
          enabled: !1,
          fn(e) {
            const t = e.placement;
            const o = t.split('-')[0];
            const n = e.offsets;
            const i = n.popper;
            const r = n.reference;
            const p = ['left', 'right'].indexOf(o) !== -1;
            const s = ['top', 'left'].indexOf(o) === -1;
            return (
              (i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0)),
              (e.placement = T(t)),
              (e.offsets.popper = g(i)),
              e
            );
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn(e) {
            if (!K(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
            const t = e.offsets.reference;
            const o = D(e.instance.modifiers, (e) => e.name === 'preventOverflow').boundaries;
            if (
              t.bottom < o.top
              || t.left > o.right
              || t.top > o.bottom
              || t.right < o.left
            ) {
              if (!0 === e.hide) return e;
              (e.hide = !0), (e.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === e.hide) return e;
              (e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1);
            }
            return e;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn(e, t) {
            const o = t.x;
            const n = t.y;
            const i = e.offsets.popper;
            const r = D(e.instance.modifiers, (e) => e.name === 'applyStyle').gpuAcceleration;
            void 0 !== r
              && console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            let s;
            let d;
            const a = void 0 === r ? t.gpuAcceleration : r;
            const l = p(e.instance.popper);
            const f = u(l);
            const m = { position: i.position };
            const h = q(e, window.devicePixelRatio < 2 || !fe);
            const c = o === 'bottom' ? 'top' : 'bottom';
            const g = n === 'right' ? 'left' : 'right';
            const b = B('transform');
            if (
              ((d = c == 'bottom'
                ? l.nodeName === 'HTML'
                  ? -l.clientHeight + h.bottom
                  : -f.height + h.bottom
                : h.top),
              (s = g == 'right'
                ? l.nodeName === 'HTML'
                  ? -l.clientWidth + h.right
                  : -f.width + h.right
                : h.left),
              a && b)
            ) {
              (m[b] = `translate3d(${s}px, ${d}px, 0)`),
              (m[c] = 0),
              (m[g] = 0),
              (m.willChange = 'transform');
            } else {
              const w = c == 'bottom' ? -1 : 1;
              const y = g == 'right' ? -1 : 1;
              (m[c] = d * w), (m[g] = s * y), (m.willChange = `${c}, ${g}`);
            }
            const E = { 'x-placement': e.placement };
            return (
              (e.attributes = { ...E, ...e.attributes }),
              (e.styles = { ...m, ...e.styles }),
              (e.arrowStyles = { ...e.offsets.arrow, ...e.arrowStyles }),
              e
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right'
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn(e) {
            return (
              V(e.instance.popper, e.styles),
              j(e.instance.popper, e.attributes),
              e.arrowElement
                && Object.keys(e.arrowStyles).length
                && V(e.arrowElement, e.arrowStyles),
              e
            );
          },
          onLoad(e, t, o, n, i) {
            const r = L(i, t, e, o.positionFixed);
            const p = O(
              o.placement,
              r,
              t,
              e,
              o.modifiers.flip.boundariesElement,
              o.modifiers.flip.padding
            );
            return (
              t.setAttribute('x-placement', p),
              V(t, { position: o.positionFixed ? 'fixed' : 'absolute' }),
              o
            );
          },
          gpuAcceleration: void 0
        }
      }
    }),
    ge
  );
}));
// # sourceMappingURL=popper.min.js.map
