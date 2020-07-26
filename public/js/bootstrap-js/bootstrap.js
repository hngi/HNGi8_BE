/*!
 * Bootstrap v4.5.0 (https://getbootstrap.com/)
 * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? e(exports, require('jquery'))
    : typeof define === 'function' && define.amd
      ? define(['exports', 'jquery'], e)
      : e(((t = t || self).bootstrap = {}), t.jQuery);
}(this, (t, e) => {
  function n(t, e) {
    for (let n = 0; n < e.length; n++) {
      const i = e[n];
      (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function o(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
        : (t[e] = n),
      t
    );
  }
  function r(t, e) {
    const n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      let i = Object.getOwnPropertySymbols(t);
      e
        && (i = i.filter((e) => Object.getOwnPropertyDescriptor(t, e).enumerable)),
      n.push.apply(n, i);
    }
    return n;
  }
  function s(t) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? r(Object(n), !0).forEach((e) => {
          o(t, e, n[e]);
        })
        : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach((e) => {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  e = e && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
  function a(t) {
    const n = this;
    let i = !1;
    return (
      e(this).one(l.TRANSITION_END, () => {
        i = !0;
      }),
      setTimeout(() => {
        i || l.triggerTransitionEnd(n);
      }, t),
      this
    );
  }
  var l = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID(t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement(t) {
      let e = t.getAttribute('data-target');
      if (!e || e === '#') {
        const n = t.getAttribute('href');
        e = n && n !== '#' ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement(t) {
      if (!t) return 0;
      let n = e(t).css('transition-duration');
      let i = e(t).css('transition-delay');
      const o = parseFloat(n);
      const r = parseFloat(i);
      return o || r
        ? ((n = n.split(',')[0]),
        (i = i.split(',')[0]),
        1e3 * (parseFloat(n) + parseFloat(i)))
        : 0;
    },
    reflow(t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd(t) {
      e(t).trigger('transitionend');
    },
    supportsTransitionEnd() {
      return Boolean('transitionend');
    },
    isElement(t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig(t, e, n) {
      for (const i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          const o = n[i];
          const r = e[i];
          const s = r && l.isElement(r)
            ? 'element'
            : (a = r) === null || typeof a === 'undefined'
              ? `${a}`
              : {}.toString
                .call(a)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
          if (!new RegExp(o).test(s)) {
            throw new Error(
              `${t.toUpperCase()
              }: Option "${
                i
              }" provided type "${
                s
              }" but expected type "${
                o
              }".`
            );
          }
        }
      }
      let a;
    },
    findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;
      if (typeof t.getRootNode === 'function') {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
          ? l.findShadowRoot(t.parentNode)
          : null;
    },
    jQueryDetection() {
      if (typeof e === 'undefined') {
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      }
      const t = e.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9)
        || (t[0] === 1 && t[1] === 9 && t[2] < 1)
        || t[0] >= 4
      ) {
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
      }
    }
  };
  l.jQueryDetection(),
  (e.fn.emulateTransitionEnd = a),
  (e.event.special[l.TRANSITION_END] = {
    bindType: 'transitionend',
    delegateType: 'transitionend',
    handle(t) {
      if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    }
  });
  const c = 'alert';
  const u = e.fn[c];
  const h = (function () {
    function t(t) {
      this._element = t;
    }
    const n = t.prototype;
    return (
      (n.close = function (t) {
        let e = this._element;
        t && (e = this._getRootElement(t)),
        this._triggerCloseEvent(e).isDefaultPrevented()
              || this._removeElement(e);
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.alert'), (this._element = null);
      }),
      (n._getRootElement = function (t) {
        const n = l.getSelectorFromElement(t);
        let i = !1;
        return (
          n && (i = document.querySelector(n)),
          i || (i = e(t).closest('.alert')[0]),
          i
        );
      }),
      (n._triggerCloseEvent = function (t) {
        const n = e.Event('close.bs.alert');
        return e(t).trigger(n), n;
      }),
      (n._removeElement = function (t) {
        const n = this;
        if ((e(t).removeClass('show'), e(t).hasClass('fade'))) {
          const i = l.getTransitionDurationFromElement(t);
          e(t)
            .one(l.TRANSITION_END, (e) => n._destroyElement(t, e))
            .emulateTransitionEnd(i);
        } else this._destroyElement(t);
      }),
      (n._destroyElement = function (t) {
        e(t).detach().trigger('closed.bs.alert').remove();
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          const i = e(this);
          let o = i.data('bs.alert');
          o || ((o = new t(this)), i.data('bs.alert', o)),
          n === 'close' && o[n](this);
        });
      }),
      (t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        }
      ]),
      t
    );
  }());
  e(document).on(
    'click.bs.alert.data-api',
    '[data-dismiss="alert"]',
    h._handleDismiss(new h())
  ),
  (e.fn[c] = h._jQueryInterface),
  (e.fn[c].Constructor = h),
  (e.fn[c].noConflict = function () {
    return (e.fn[c] = u), h._jQueryInterface;
  });
  const f = e.fn.button;
  const d = (function () {
    function t(t) {
      this._element = t;
    }
    const n = t.prototype;
    return (
      (n.toggle = function () {
        let t = !0;
        let n = !0;
        const i = e(this._element).closest('[data-toggle="buttons"]')[0];
        if (i) {
          const o = this._element.querySelector('input:not([type="hidden"])');
          if (o) {
            if (o.type === 'radio') {
              if (o.checked && this._element.classList.contains('active')) t = !1;
              else {
                const r = i.querySelector('.active');
                r && e(r).removeClass('active');
              }
            }
            t
                && ((o.type !== 'checkbox' && o.type !== 'radio')
                  || (o.checked = !this._element.classList.contains('active')),
                e(o).trigger('change')),
            o.focus(),
            (n = !1);
          }
        }
        this._element.hasAttribute('disabled')
            || this._element.classList.contains('disabled')
            || (n
              && this._element.setAttribute(
                'aria-pressed',
                !this._element.classList.contains('active')
              ),
            t && e(this._element).toggleClass('active'));
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.button'), (this._element = null);
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          let i = e(this).data('bs.button');
          i || ((i = new t(this)), e(this).data('bs.button', i)),
          n === 'toggle' && i[n]();
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        }
      ]),
      t
    );
  }());
  e(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', (t) => {
      let n = t.target;
      const i = n;
      if (
        (e(n).hasClass('btn') || (n = e(n).closest('.btn')[0]),
        !n || n.hasAttribute('disabled') || n.classList.contains('disabled'))
      ) t.preventDefault();
      else {
        const o = n.querySelector('input:not([type="hidden"])');
        if (
          o
          && (o.hasAttribute('disabled') || o.classList.contains('disabled'))
        ) return void t.preventDefault();
        i.tagName === 'LABEL'
          && o
          && o.type === 'checkbox'
          && t.preventDefault(),
        d._jQueryInterface.call(e(n), 'toggle');
      }
    })
    .on(
      'focus.bs.button.data-api blur.bs.button.data-api',
      '[data-toggle^="button"]',
      (t) => {
        const n = e(t.target).closest('.btn')[0];
        e(n).toggleClass('focus', /^focus(in)?$/.test(t.type));
      }
    ),
  e(window).on('load.bs.button.data-api', () => {
    for (
      var t = [].slice.call(
          document.querySelectorAll('[data-toggle="buttons"] .btn')
        ),
        e = 0,
        n = t.length;
      e < n;
      e++
    ) {
      const i = t[e];
      const o = i.querySelector('input:not([type="hidden"])');
      o.checked || o.hasAttribute('checked')
        ? i.classList.add('active')
        : i.classList.remove('active');
    }
    for (
      let r = 0,
        s = (t = [].slice.call(
          document.querySelectorAll('[data-toggle="button"]')
        )).length;
      r < s;
      r++
    ) {
      const a = t[r];
      a.getAttribute('aria-pressed') === 'true'
        ? a.classList.add('active')
        : a.classList.remove('active');
    }
  }),
  (e.fn.button = d._jQueryInterface),
  (e.fn.button.Constructor = d),
  (e.fn.button.noConflict = function () {
    return (e.fn.button = f), d._jQueryInterface;
  });
  const p = 'carousel';
  const m = '.bs.carousel';
  const g = e.fn[p];
  const v = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: 'hover',
    wrap: !0,
    touch: !0
  };
  const _ = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  const b = { TOUCH: 'touch', PEN: 'pen' };
  const y = (function () {
    function t(t, e) {
      (this._items = null),
      (this._interval = null),
      (this._activeElement = null),
      (this._isPaused = !1),
      (this._isSliding = !1),
      (this.touchTimeout = null),
      (this.touchStartX = 0),
      (this.touchDeltaX = 0),
      (this._config = this._getConfig(e)),
      (this._element = t),
      (this._indicatorsElement = this._element.querySelector(
        '.carousel-indicators'
      )),
      (this._touchSupported = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0),
      (this._pointerEvent = Boolean(
        window.PointerEvent || window.MSPointerEvent
      )),
      this._addEventListeners();
    }
    const n = t.prototype;
    return (
      (n.next = function () {
        this._isSliding || this._slide('next');
      }),
      (n.nextWhenVisible = function () {
        !document.hidden
            && e(this._element).is(':visible')
            && e(this._element).css('visibility') !== 'hidden'
            && this.next();
      }),
      (n.prev = function () {
        this._isSliding || this._slide('prev');
      }),
      (n.pause = function (t) {
        t || (this._isPaused = !0),
        this._element.querySelector(
          '.carousel-item-next, .carousel-item-prev'
        ) && (l.triggerTransitionEnd(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
      }),
      (n.cycle = function (t) {
        t || (this._isPaused = !1),
        this._interval
              && (clearInterval(this._interval), (this._interval = null)),
        this._config.interval
              && !this._isPaused
              && (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ));
      }),
      (n.to = function (t) {
        const n = this;
        this._activeElement = this._element.querySelector(
          '.active.carousel-item'
        );
        const i = this._getItemIndex(this._activeElement);
        if (!(t > this._items.length - 1 || t < 0)) {
          if (this._isSliding) { e(this._element).one('slid.bs.carousel', () => n.to(t)); } else {
            if (i === t) return this.pause(), void this.cycle();
            const o = t > i ? 'next' : 'prev';
            this._slide(o, this._items[t]);
          }
        }
      }),
      (n.dispose = function () {
        e(this._element).off(m),
        e.removeData(this._element, 'bs.carousel'),
        (this._items = null),
        (this._config = null),
        (this._element = null),
        (this._interval = null),
        (this._isPaused = null),
        (this._isSliding = null),
        (this._activeElement = null),
        (this._indicatorsElement = null);
      }),
      (n._getConfig = function (t) {
        return (t = s(s({}, v), t)), l.typeCheckConfig(p, t, _), t;
      }),
      (n._handleSwipe = function () {
        const t = Math.abs(this.touchDeltaX);
        if (!(t <= 40)) {
          const e = t / this.touchDeltaX;
          (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
        }
      }),
      (n._addEventListeners = function () {
        const t = this;
        this._config.keyboard
            && e(this._element).on('keydown.bs.carousel', (e) => t._keydown(e)),
        this._config.pause === 'hover'
              && e(this._element)
                .on('mouseenter.bs.carousel', (e) => t.pause(e))
                .on('mouseleave.bs.carousel', (e) => t.cycle(e)),
        this._config.touch && this._addTouchEventListeners();
      }),
      (n._addTouchEventListeners = function () {
        const t = this;
        if (this._touchSupported) {
          const n = function (e) {
            t._pointerEvent && b[e.originalEvent.pointerType.toUpperCase()]
              ? (t.touchStartX = e.originalEvent.clientX)
              : t._pointerEvent
                    || (t.touchStartX = e.originalEvent.touches[0].clientX);
          };
          const i = function (e) {
            t._pointerEvent
                  && b[e.originalEvent.pointerType.toUpperCase()]
                  && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
            t._handleSwipe(),
            t._config.pause === 'hover'
                    && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout((e) => t.cycle(e), 500 + t._config.interval)));
          };
          e(this._element.querySelectorAll('.carousel-item img')).on(
            'dragstart.bs.carousel',
            (t) => t.preventDefault()
          ),
          this._pointerEvent
            ? (e(this._element).on('pointerdown.bs.carousel', (t) => n(t)),
            e(this._element).on('pointerup.bs.carousel', (t) => i(t)),
            this._element.classList.add('pointer-event'))
            : (e(this._element).on('touchstart.bs.carousel', (t) => n(t)),
            e(this._element).on('touchmove.bs.carousel', (e) => (function (e) {
              e.originalEvent.touches
                      && e.originalEvent.touches.length > 1
                ? (t.touchDeltaX = 0)
                : (t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX);
            }(e))),
            e(this._element).on('touchend.bs.carousel', (t) => i(t)));
        }
      }),
      (n._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              t.preventDefault(), this.prev();
              break;
            case 39:
              t.preventDefault(), this.next();
          }
        }
      }),
      (n._getItemIndex = function (t) {
        return (
          (this._items = t && t.parentNode
            ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item'))
            : []),
          this._items.indexOf(t)
        );
      }),
      (n._getItemByDirection = function (t, e) {
        const n = t === 'next';
        const i = t === 'prev';
        const o = this._getItemIndex(e);
        const r = this._items.length - 1;
        if (((i && o === 0) || (n && o === r)) && !this._config.wrap) return e;
        const s = (o + (t === 'prev' ? -1 : 1)) % this._items.length;
        return s === -1
          ? this._items[this._items.length - 1]
          : this._items[s];
      }),
      (n._triggerSlideEvent = function (t, n) {
        const i = this._getItemIndex(t);
        const o = this._getItemIndex(
          this._element.querySelector('.active.carousel-item')
        );
        const r = e.Event('slide.bs.carousel', {
          relatedTarget: t,
          direction: n,
          from: o,
          to: i
        });
        return e(this._element).trigger(r), r;
      }),
      (n._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          const n = [].slice.call(
            this._indicatorsElement.querySelectorAll('.active')
          );
          e(n).removeClass('active');
          const i = this._indicatorsElement.children[this._getItemIndex(t)];
          i && e(i).addClass('active');
        }
      }),
      (n._slide = function (t, n) {
        let i;
        let o;
        let r;
        const s = this;
        const a = this._element.querySelector('.active.carousel-item');
        const c = this._getItemIndex(a);
        const u = n || (a && this._getItemByDirection(t, a));
        const h = this._getItemIndex(u);
        const f = Boolean(this._interval);
        if (
          (t === 'next'
            ? ((i = 'carousel-item-left'),
            (o = 'carousel-item-next'),
            (r = 'left'))
            : ((i = 'carousel-item-right'),
            (o = 'carousel-item-prev'),
            (r = 'right')),
          u && e(u).hasClass('active'))
        ) this._isSliding = !1;
        else if (
          !this._triggerSlideEvent(u, r).isDefaultPrevented()
            && a
            && u
        ) {
          (this._isSliding = !0),
          f && this.pause(),
          this._setActiveIndicatorElement(u);
          const d = e.Event('slid.bs.carousel', {
            relatedTarget: u,
            direction: r,
            from: c,
            to: h
          });
          if (e(this._element).hasClass('slide')) {
            e(u).addClass(o), l.reflow(u), e(a).addClass(i), e(u).addClass(i);
            const p = parseInt(u.getAttribute('data-interval'), 10);
            p
              ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval),
              (this._config.interval = p))
              : (this._config.interval = this._config.defaultInterval || this._config.interval);
            const m = l.getTransitionDurationFromElement(a);
            e(a)
              .one(l.TRANSITION_END, () => {
                e(u)
                  .removeClass(`${i} ${o}`)
                  .addClass('active'),
                e(a).removeClass(`active ${o} ${i}`),
                (s._isSliding = !1),
                setTimeout(() => e(s._element).trigger(d), 0);
              })
              .emulateTransitionEnd(m);
          } else {
            e(a).removeClass('active'),
            e(u).addClass('active'),
            (this._isSliding = !1),
            e(this._element).trigger(d);
          }
          f && this.cycle();
        }
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          let i = e(this).data('bs.carousel');
          let o = s(s({}, v), e(this).data());
          typeof n === 'object' && (o = s(s({}, o), n));
          const r = typeof n === 'string' ? n : o.slide;
          if (
            (i || ((i = new t(this, o)), e(this).data('bs.carousel', i)),
            typeof n === 'number')
          ) i.to(n);
          else if (typeof r === 'string') {
            if (typeof i[r] === 'undefined') throw new TypeError(`No method named "${r}"`);
            i[r]();
          } else o.interval && o.ride && (i.pause(), i.cycle());
        });
      }),
      (t._dataApiClickHandler = function (n) {
        const i = l.getSelectorFromElement(this);
        if (i) {
          const o = e(i)[0];
          if (o && e(o).hasClass('carousel')) {
            const r = s(s({}, e(o).data()), e(this).data());
            const a = this.getAttribute('data-slide-to');
            a && (r.interval = !1),
            t._jQueryInterface.call(e(o), r),
            a && e(o).data('bs.carousel').to(a),
            n.preventDefault();
          }
        }
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return v;
          }
        }
      ]),
      t
    );
  }());
  e(document).on(
    'click.bs.carousel.data-api',
    '[data-slide], [data-slide-to]',
    y._dataApiClickHandler
  ),
  e(window).on('load.bs.carousel.data-api', () => {
    for (
      let t = [].slice.call(
          document.querySelectorAll('[data-ride="carousel"]')
        ),
        n = 0,
        i = t.length;
      n < i;
      n++
    ) {
      const o = e(t[n]);
      y._jQueryInterface.call(o, o.data());
    }
  }),
  (e.fn[p] = y._jQueryInterface),
  (e.fn[p].Constructor = y),
  (e.fn[p].noConflict = function () {
    return (e.fn[p] = g), y._jQueryInterface;
  });
  const w = 'collapse';
  const E = e.fn[w];
  const T = { toggle: !0, parent: '' };
  const C = { toggle: 'boolean', parent: '(string|element)' };
  const S = (function () {
    function t(t, e) {
      (this._isTransitioning = !1),
      (this._element = t),
      (this._config = this._getConfig(e)),
      (this._triggerArray = [].slice.call(
        document.querySelectorAll(
          `[data-toggle="collapse"][href="#${
            t.id
          }"],[data-toggle="collapse"][data-target="#${
            t.id
          }"]`
        )
      ));
      for (
        let n = [].slice.call(
            document.querySelectorAll('[data-toggle="collapse"]')
          ),
          i = 0,
          o = n.length;
        i < o;
        i++
      ) {
        const r = n[i];
        const s = l.getSelectorFromElement(r);
        const a = [].slice
          .call(document.querySelectorAll(s))
          .filter((e) => e === t);
        s !== null
            && a.length > 0
            && ((this._selector = s), this._triggerArray.push(r));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
      this._config.parent
            || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
      this._config.toggle && this.toggle();
    }
    const n = t.prototype;
    return (
      (n.toggle = function () {
        e(this._element).hasClass('show') ? this.hide() : this.show();
      }),
      (n.show = function () {
        let n;
        let i;
        const o = this;
        if (
          !this._isTransitioning
            && !e(this._element).hasClass('show')
            && (this._parent
              && (n = [].slice
                .call(this._parent.querySelectorAll('.show, .collapsing'))
                .filter((t) => (typeof o._config.parent === 'string'
                  ? t.getAttribute('data-parent') === o._config.parent
                  : t.classList.contains('collapse')))).length
                === 0
              && (n = null),
            !(
              n
              && (i = e(n).not(this._selector).data('bs.collapse'))
              && i._isTransitioning
            ))
        ) {
          const r = e.Event('show.bs.collapse');
          if ((e(this._element).trigger(r), !r.isDefaultPrevented())) {
            n
                && (t._jQueryInterface.call(e(n).not(this._selector), 'hide'),
                i || e(n).data('bs.collapse', null));
            const s = this._getDimension();
            e(this._element).removeClass('collapse').addClass('collapsing'),
            (this._element.style[s] = 0),
            this._triggerArray.length
                  && e(this._triggerArray)
                    .removeClass('collapsed')
                    .attr('aria-expanded', !0),
            this.setTransitioning(!0);
            const a = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            const c = l.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(l.TRANSITION_END, () => {
                e(o._element)
                  .removeClass('collapsing')
                  .addClass('collapse show'),
                (o._element.style[s] = ''),
                o.setTransitioning(!1),
                e(o._element).trigger('shown.bs.collapse');
              })
              .emulateTransitionEnd(c),
            (this._element.style[s] = `${this._element[a]}px`);
          }
        }
      }),
      (n.hide = function () {
        const t = this;
        if (!this._isTransitioning && e(this._element).hasClass('show')) {
          const n = e.Event('hide.bs.collapse');
          if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
            const i = this._getDimension();
            (this._element.style[i] = `${this._element.getBoundingClientRect()[i]}px`),
            l.reflow(this._element),
            e(this._element)
              .addClass('collapsing')
              .removeClass('collapse show');
            const o = this._triggerArray.length;
            if (o > 0) {
              for (let r = 0; r < o; r++) {
                const s = this._triggerArray[r];
                const a = l.getSelectorFromElement(s);
                if (a !== null) {
                  e([].slice.call(document.querySelectorAll(a))).hasClass(
                    'show'
                  ) || e(s).addClass('collapsed').attr('aria-expanded', !1);
                }
              }
            }
            this.setTransitioning(!0);
            this._element.style[i] = '';
            const c = l.getTransitionDurationFromElement(this._element);
            e(this._element)
              .one(l.TRANSITION_END, () => {
                t.setTransitioning(!1),
                e(t._element)
                  .removeClass('collapsing')
                  .addClass('collapse')
                  .trigger('hidden.bs.collapse');
              })
              .emulateTransitionEnd(c);
          }
        }
      }),
      (n.setTransitioning = function (t) {
        this._isTransitioning = t;
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.collapse'),
        (this._config = null),
        (this._parent = null),
        (this._element = null),
        (this._triggerArray = null),
        (this._isTransitioning = null);
      }),
      (n._getConfig = function (t) {
        return (
          ((t = s(s({}, T), t)).toggle = Boolean(t.toggle)),
          l.typeCheckConfig(w, t, C),
          t
        );
      }),
      (n._getDimension = function () {
        return e(this._element).hasClass('width') ? 'width' : 'height';
      }),
      (n._getParent = function () {
        let n;
        const i = this;
        l.isElement(this._config.parent)
          ? ((n = this._config.parent),
          typeof this._config.parent.jquery !== 'undefined'
                && (n = this._config.parent[0]))
          : (n = document.querySelector(this._config.parent));
        const o = `[data-toggle="collapse"][data-parent="${
          this._config.parent
        }"]`;
        const r = [].slice.call(n.querySelectorAll(o));
        return (
          e(r).each((e, n) => {
            i._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n]);
          }),
          n
        );
      }),
      (n._addAriaAndCollapsedClass = function (t, n) {
        const i = e(t).hasClass('show');
        n.length
            && e(n).toggleClass('collapsed', !i).attr('aria-expanded', i);
      }),
      (t._getTargetFromElement = function (t) {
        const e = l.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null;
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          const i = e(this);
          let o = i.data('bs.collapse');
          const r = s(s(s({}, T), i.data()), typeof n === 'object' && n ? n : {});
          if (
            (!o
                && r.toggle
                && typeof n === 'string'
                && /show|hide/.test(n)
                && (r.toggle = !1),
            o || ((o = new t(this, r)), i.data('bs.collapse', o)),
            typeof n === 'string')
          ) {
            if (typeof o[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            o[n]();
          }
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return T;
          }
        }
      ]),
      t
    );
  }());
  e(document).on(
    'click.bs.collapse.data-api',
    '[data-toggle="collapse"]',
    function (t) {
      t.currentTarget.tagName === 'A' && t.preventDefault();
      const n = e(this);
      const i = l.getSelectorFromElement(this);
      const o = [].slice.call(document.querySelectorAll(i));
      e(o).each(function () {
        const t = e(this);
        const i = t.data('bs.collapse') ? 'toggle' : n.data();
        S._jQueryInterface.call(t, i);
      });
    }
  ),
  (e.fn[w] = S._jQueryInterface),
  (e.fn[w].Constructor = S),
  (e.fn[w].noConflict = function () {
    return (e.fn[w] = E), S._jQueryInterface;
  });
  const D = typeof window !== 'undefined'
      && typeof document !== 'undefined'
      && typeof navigator !== 'undefined';
  const k = (function () {
    for (let t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1) if (D && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
    return 0;
  }());
  const N = D && window.Promise
    ? function (t) {
      let e = !1;
      return function () {
        e
              || ((e = !0),
              window.Promise.resolve().then(() => {
                (e = !1), t();
              }));
      };
    }
    : function (t) {
      let e = !1;
      return function () {
        e
              || ((e = !0),
              setTimeout(() => {
                (e = !1), t();
              }, k));
      };
    };
  function O(t) {
    return t && {}.toString.call(t) === '[object Function]';
  }
  function A(t, e) {
    if (t.nodeType !== 1) return [];
    const n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function I(t) {
    return t.nodeName === 'HTML' ? t : t.parentNode || t.host;
  }
  function x(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    const e = A(t);
    const n = e.overflow;
    const i = e.overflowX;
    const o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : x(I(t));
  }
  function j(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  const L = D && !(!window.MSInputMethodContext || !document.documentMode);
  const P = D && /MSIE 10/.test(navigator.userAgent);
  function F(t) {
    return t === 11 ? L : t === 10 ? P : L || P;
  }
  function R(t) {
    if (!t) return document.documentElement;
    for (
      var e = F(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    ) n = (t = t.nextElementSibling).offsetParent;
    const i = n && n.nodeName;
    return i && i !== 'BODY' && i !== 'HTML'
      ? ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1
        && A(n, 'position') === 'static'
        ? R(n)
        : n
      : t
        ? t.ownerDocument.documentElement
        : document.documentElement;
  }
  function M(t) {
    return t.parentNode !== null ? M(t.parentNode) : t;
  }
  function B(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    const n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING;
    const i = n ? t : e;
    const o = n ? e : t;
    const r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    let s;
    let a;
    const l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o)) {
      return (a = (s = l).nodeName) === 'BODY'
        || (a !== 'HTML' && R(s.firstElementChild) !== s)
        ? R(l)
        : l;
    }
    const c = M(t);
    return c.host ? B(c.host, e) : B(t, M(e).host);
  }
  function q(t) {
    const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top';
    const n = e === 'top' ? 'scrollTop' : 'scrollLeft';
    const i = t.nodeName;
    if (i === 'BODY' || i === 'HTML') {
      const o = t.ownerDocument.documentElement;
      const r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function H(t, e) {
    const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const i = q(e, 'top');
    const o = q(e, 'left');
    const r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function Q(t, e) {
    const n = e === 'x' ? 'Left' : 'Top';
    const i = n === 'Left' ? 'Right' : 'Bottom';
    return (
      parseFloat(t[`border${n}Width`], 10)
      + parseFloat(t[`border${i}Width`], 10)
    );
  }
  function W(t, e, n, i) {
    return Math.max(
      e[`offset${t}`],
      e[`scroll${t}`],
      n[`client${t}`],
      n[`offset${t}`],
      n[`scroll${t}`],
      F(10)
        ? parseInt(n[`offset${t}`])
            + parseInt(i[`margin${t === 'Height' ? 'Top' : 'Left'}`])
            + parseInt(i[`margin${t === 'Height' ? 'Bottom' : 'Right'}`])
        : 0
    );
  }
  function U(t) {
    const e = t.body;
    const n = t.documentElement;
    const i = F(10) && getComputedStyle(n);
    return { height: W('Height', e, n, i), width: W('Width', e, n, i) };
  }
  const V = function (t, e) {
    if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
  };
  const Y = (function () {
    function t(t, e) {
      for (let n = 0; n < e.length; n++) {
        const i = e[n];
        (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
      }
    }
    return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }());
  const z = function (t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
        : (t[e] = n),
      t
    );
  };
  const X = Object.assign
      || function (t) {
        for (let e = 1; e < arguments.length; e++) {
          const n = arguments[e];
          for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function K(t) {
    return { ...t, right: t.left + t.width, bottom: t.top + t.height };
  }
  function G(t) {
    let e = {};
    try {
      if (F(10)) {
        e = t.getBoundingClientRect();
        const n = q(t, 'top');
        const i = q(t, 'left');
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    const o = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    };
    const r = t.nodeName === 'HTML' ? U(t.ownerDocument) : {};
    const s = r.width || t.clientWidth || o.width;
    const a = r.height || t.clientHeight || o.height;
    let l = t.offsetWidth - s;
    let c = t.offsetHeight - a;
    if (l || c) {
      const u = A(t);
      (l -= Q(u, 'x')), (c -= Q(u, 'y')), (o.width -= l), (o.height -= c);
    }
    return K(o);
  }
  function $(t, e) {
    const n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    const i = F(10);
    const o = e.nodeName === 'HTML';
    const r = G(t);
    const s = G(e);
    const a = x(t);
    const l = A(e);
    const c = parseFloat(l.borderTopWidth, 10);
    const u = parseFloat(l.borderLeftWidth, 10);
    n && o && ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    let h = K({
      top: r.top - s.top - c,
      left: r.left - s.left - u,
      width: r.width,
      height: r.height
    });
    if (((h.marginTop = 0), (h.marginLeft = 0), !i && o)) {
      const f = parseFloat(l.marginTop, 10);
      const d = parseFloat(l.marginLeft, 10);
      (h.top -= c - f),
      (h.bottom -= c - f),
      (h.left -= u - d),
      (h.right -= u - d),
      (h.marginTop = f),
      (h.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && a.nodeName !== 'BODY')
        && (h = H(h, e)),
      h
    );
  }
  function J(t) {
    const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const n = t.ownerDocument.documentElement;
    const i = $(t, n);
    const o = Math.max(n.clientWidth, window.innerWidth || 0);
    const r = Math.max(n.clientHeight, window.innerHeight || 0);
    const s = e ? 0 : q(n);
    const a = e ? 0 : q(n, 'left');
    const l = {
      top: s - i.top + i.marginTop,
      left: a - i.left + i.marginLeft,
      width: o,
      height: r
    };
    return K(l);
  }
  function Z(t) {
    const e = t.nodeName;
    if (e === 'BODY' || e === 'HTML') return !1;
    if (A(t, 'position') === 'fixed') return !0;
    const n = I(t);
    return !!n && Z(n);
  }
  function tt(t) {
    if (!t || !t.parentElement || F()) return document.documentElement;
    for (var e = t.parentElement; e && A(e, 'transform') === 'none';) e = e.parentElement;
    return e || document.documentElement;
  }
  function et(t, e, n, i) {
    const o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    let r = { top: 0, left: 0 };
    const s = o ? tt(t) : B(t, j(e));
    if (i === 'viewport') r = J(s, o);
    else {
      let a = void 0;
      i === 'scrollParent'
        ? (a = x(I(e))).nodeName === 'BODY'
          && (a = t.ownerDocument.documentElement)
        : (a = i === 'window' ? t.ownerDocument.documentElement : i);
      const l = $(a, s, o);
      if (a.nodeName !== 'HTML' || Z(s)) r = l;
      else {
        const c = U(t.ownerDocument);
        const u = c.height;
        const h = c.width;
        (r.top += l.top - l.marginTop),
        (r.bottom = u + l.top),
        (r.left += l.left - l.marginLeft),
        (r.right = h + l.left);
      }
    }
    const f = typeof (n = n || 0) === 'number';
    return (
      (r.left += f ? n : n.left || 0),
      (r.top += f ? n : n.top || 0),
      (r.right -= f ? n : n.right || 0),
      (r.bottom -= f ? n : n.bottom || 0),
      r
    );
  }
  function nt(t) {
    return t.width * t.height;
  }
  function it(t, e, n, i, o) {
    const r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (t.indexOf('auto') === -1) return t;
    const s = et(n, i, r, o);
    const a = {
      top: { width: s.width, height: e.top - s.top },
      right: { width: s.right - e.right, height: s.height },
      bottom: { width: s.width, height: s.bottom - e.bottom },
      left: { width: e.left - s.left, height: s.height }
    };
    const l = Object.keys(a)
      .map((t) => ({ key: t, ...a[t], area: nt(a[t]) }))
      .sort((t, e) => e.area - t.area);
    const c = l.filter((t) => {
      const e = t.width;
      const i = t.height;
      return e >= n.clientWidth && i >= n.clientHeight;
    });
    const u = c.length > 0 ? c[0].key : l[0].key;
    const h = t.split('-')[1];
    return u + (h ? `-${h}` : '');
  }
  function ot(t, e, n) {
    const i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
    const o = i ? tt(e) : B(e, j(n));
    return $(n, o, i);
  }
  function rt(t) {
    const e = t.ownerDocument.defaultView.getComputedStyle(t);
    const n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0);
    const i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function st(t) {
    const e = {
      left: 'right', right: 'left', bottom: 'top', top: 'bottom'
    };
    return t.replace(/left|right|bottom|top/g, (t) => e[t]);
  }
  function at(t, e, n) {
    n = n.split('-')[0];
    const i = rt(t);
    const o = { width: i.width, height: i.height };
    const r = ['right', 'left'].indexOf(n) !== -1;
    const s = r ? 'top' : 'left';
    const a = r ? 'left' : 'top';
    const l = r ? 'height' : 'width';
    const c = r ? 'width' : 'height';
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[st(a)]),
      o
    );
  }
  function lt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function ct(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
          0,
          (function (t, e, n) {
            if (Array.prototype.findIndex) { return t.findIndex((t) => t[e] === n); }
            const i = lt(t, (t) => t[e] === n);
            return t.indexOf(i);
          }(t, 'name', n))
        )
      ).forEach((t) => {
        t.function
          && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        const n = t.function || t.fn;
        t.enabled
          && O(n)
          && ((e.offsets.popper = K(e.offsets.popper)),
          (e.offsets.reference = K(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function ut() {
    if (!this.state.isDestroyed) {
      let t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      (t.offsets.reference = ot(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
      (t.placement = it(
        this.options.placement,
        t.offsets.reference,
        this.popper,
        this.reference,
        this.options.modifiers.flip.boundariesElement,
        this.options.modifiers.flip.padding
      )),
      (t.originalPlacement = t.placement),
      (t.positionFixed = this.options.positionFixed),
      (t.offsets.popper = at(this.popper, t.offsets.reference, t.placement)),
      (t.offsets.popper.position = this.options.positionFixed
        ? 'fixed'
        : 'absolute'),
      (t = ct(this.modifiers, t)),
      this.state.isCreated
        ? this.options.onUpdate(t)
        : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function ht(t, e) {
    return t.some((t) => {
      const n = t.name;
      return t.enabled && n === e;
    });
  }
  function ft(t) {
    for (
      let e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      const o = e[i];
      const r = o ? `${o}${n}` : t;
      if (typeof document.body.style[r] !== 'undefined') return r;
    }
    return null;
  }
  function dt() {
    return (
      (this.state.isDestroyed = !0),
      ht(this.modifiers, 'applyStyle')
        && (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[ft('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy
        && this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function pt(t) {
    const e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function mt(t, e, n, i) {
    (n.updateBound = i),
    pt(t).addEventListener('resize', n.updateBound, { passive: !0 });
    const o = x(t);
    return (
      (function t(e, n, i, o) {
        const r = e.nodeName === 'BODY';
        const s = r ? e.ownerDocument.defaultView : e;
        s.addEventListener(n, i, { passive: !0 }),
        r || t(x(s.parentNode), n, i, o),
        o.push(s);
      }(o, 'scroll', n.updateBound, n.scrollParents)),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function gt() {
    this.state.eventsEnabled
      || (this.state = mt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function vt() {
    let t; let
      e;
    this.state.eventsEnabled
      && (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = ((t = this.reference),
      (e = this.state),
      pt(t).removeEventListener('resize', e.updateBound),
      e.scrollParents.forEach((t) => {
        t.removeEventListener('scroll', e.updateBound);
      }),
      (e.updateBound = null),
      (e.scrollParents = []),
      (e.scrollElement = null),
      (e.eventsEnabled = !1),
      e)));
  }
  function _t(t) {
    return t !== '' && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function bt(t, e) {
    Object.keys(e).forEach((n) => {
      let i = '';
      ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1
        && _t(e[n])
        && (i = 'px'),
      (t.style[n] = e[n] + i);
    });
  }
  const yt = D && /Firefox/i.test(navigator.userAgent);
  function wt(t, e, n) {
    const i = lt(t, (t) => t.name === e);
    const o = !!i
        && t.some((t) => t.name === n && t.enabled && t.order < i.order);
    if (!o) {
      const r = `\`${e}\``;
      const s = `\`${n}\``;
      console.warn(
        `${s
        } modifier is required by ${
          r
        } modifier in order to work, be sure to include it before ${
          r
        }!`
      );
    }
    return o;
  }
  const Et = [
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
  const Tt = Et.slice(3);
  function Ct(t) {
    const e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    const n = Tt.indexOf(t);
    const i = Tt.slice(n + 1).concat(Tt.slice(0, n));
    return e ? i.reverse() : i;
  }
  const St = 'flip';
  const Dt = 'clockwise';
  const kt = 'counterclockwise';
  function Nt(t, e, n, i) {
    const o = [0, 0];
    const r = ['right', 'left'].indexOf(i) !== -1;
    const s = t.split(/(\+|\-)/).map((t) => t.trim());
    const a = s.indexOf(
      lt(s, (t) => t.search(/,|\s/) !== -1)
    );
    s[a]
      && s[a].indexOf(',') === -1
      && console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
      );
    const l = /\s*,\s*|\s+/;
    let c = a !== -1
      ? [
        s.slice(0, a).concat([s[a].split(l)[0]]),
        [s[a].split(l)[1]].concat(s.slice(a + 1))
      ]
      : [s];
    return (
      (c = c.map((t, i) => {
        const o = (i === 1 ? !r : r) ? 'height' : 'width';
        let s = !1;
        return t
          .reduce((t, e) => (t[t.length - 1] === '' && ['+', '-'].indexOf(e) !== -1
            ? ((t[t.length - 1] = e), (s = !0), t)
            : s
              ? ((t[t.length - 1] += e), (s = !1), t)
              : t.concat(e)), [])
          .map((t) => (function (t, e, n, i) {
            const o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
            const r = +o[1];
            const s = o[2];
            if (!r) return t;
            if (s.indexOf('%') === 0) {
              let a = void 0;
              switch (s) {
                case '%p':
                  a = n;
                  break;
                case '%':
                case '%r':
                default:
                  a = i;
              }
              return (K(a)[e] / 100) * r;
            }
            if (s === 'vh' || s === 'vw') {
              return (
                ((s === 'vh'
                  ? Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                  )
                  : Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                  ))
                    / 100)
                  * r
              );
            }
            return r;
          }(t, o, e, n)));
      })).forEach((t, e) => {
        t.forEach((n, i) => {
          _t(n) && (o[e] += n * (t[i - 1] === '-' ? -1 : 1));
        });
      }),
      o
    );
  }
  const Ot = {
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
        fn(t) {
          const e = t.placement;
          const n = e.split('-')[0];
          const i = e.split('-')[1];
          if (i) {
            const o = t.offsets;
            const r = o.reference;
            const s = o.popper;
            const a = ['bottom', 'top'].indexOf(n) !== -1;
            const l = a ? 'left' : 'top';
            const c = a ? 'width' : 'height';
            const u = {
              start: z({}, l, r[l]),
              end: z({}, l, r[l] + r[c] - s[c])
            };
            t.offsets.popper = { ...s, ...u[i] };
          }
          return t;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn(t, e) {
          const n = e.offset;
          const i = t.placement;
          const o = t.offsets;
          const r = o.popper;
          const s = o.reference;
          const a = i.split('-')[0];
          let l = void 0;
          return (
            (l = _t(+n) ? [+n, 0] : Nt(n, r, s, a)),
            a === 'left'
              ? ((r.top += l[0]), (r.left -= l[1]))
              : a === 'right'
                ? ((r.top += l[0]), (r.left += l[1]))
                : a === 'top'
                  ? ((r.left += l[0]), (r.top -= l[1]))
                  : a === 'bottom' && ((r.left += l[0]), (r.top += l[1])),
            (t.popper = r),
            t
          );
        },
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn(t, e) {
          let n = e.boundariesElement || R(t.instance.popper);
          t.instance.reference === n && (n = R(n));
          const i = ft('transform');
          const o = t.instance.popper.style;
          const r = o.top;
          const s = o.left;
          const a = o[i];
          (o.top = ''), (o.left = ''), (o[i] = '');
          const l = et(
            t.instance.popper,
            t.instance.reference,
            e.padding,
            n,
            t.positionFixed
          );
          (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
          const c = e.priority;
          let u = t.offsets.popper;
          const h = {
            primary(t) {
              let n = u[t];
              return (
                u[t] < l[t]
                      && !e.escapeWithReference
                      && (n = Math.max(u[t], l[t])),
                z({}, t, n)
              );
            },
            secondary(t) {
              const n = t === 'right' ? 'left' : 'top';
              let i = u[n];
              return (
                u[t] > l[t]
                      && !e.escapeWithReference
                      && (i = Math.min(
                        u[n],
                        l[t] - (t === 'right' ? u.width : u.height)
                      )),
                z({}, n, i)
              );
            }
          };
          return (
            c.forEach((t) => {
              const e = ['left', 'top'].indexOf(t) !== -1 ? 'primary' : 'secondary';
              u = { ...u, ...h[e](t) };
            }),
            (t.offsets.popper = u),
            t
          );
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn(t) {
          const e = t.offsets;
          const n = e.popper;
          const i = e.reference;
          const o = t.placement.split('-')[0];
          const r = Math.floor;
          const s = ['top', 'bottom'].indexOf(o) !== -1;
          const a = s ? 'right' : 'bottom';
          const l = s ? 'left' : 'top';
          const c = s ? 'width' : 'height';
          return (
            n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
            n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
            t
          );
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn(t, e) {
          let n;
          if (!wt(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
          let i = e.element;
          if (typeof i === 'string') {
            if (!(i = t.instance.popper.querySelector(i))) return t;
          } else if (!t.instance.popper.contains(i)) {
            return (
              console.warn(
                'WARNING: `arrow.element` must be child of its popper element!'
              ),
              t
            );
          }
          const o = t.placement.split('-')[0];
          const r = t.offsets;
          const s = r.popper;
          const a = r.reference;
          const l = ['left', 'right'].indexOf(o) !== -1;
          const c = l ? 'height' : 'width';
          const u = l ? 'Top' : 'Left';
          const h = u.toLowerCase();
          const f = l ? 'left' : 'top';
          const d = l ? 'bottom' : 'right';
          const p = rt(i)[c];
          a[d] - p < s[h] && (t.offsets.popper[h] -= s[h] - (a[d] - p)),
          a[h] + p > s[d] && (t.offsets.popper[h] += a[h] + p - s[d]),
          (t.offsets.popper = K(t.offsets.popper));
          const m = a[h] + a[c] / 2 - p / 2;
          const g = A(t.instance.popper);
          const v = parseFloat(g[`margin${u}`], 10);
          const _ = parseFloat(g[`border${u}Width`], 10);
          let b = m - t.offsets.popper[h] - v - _;
          return (
            (b = Math.max(Math.min(s[c] - p, b), 0)),
            (t.arrowElement = i),
            (t.offsets.arrow = (z((n = {}), h, Math.round(b)), z(n, f, ''), n)),
            t
          );
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn(t, e) {
          if (ht(t.instance.modifiers, 'inner')) return t;
          if (t.flipped && t.placement === t.originalPlacement) return t;
          const n = et(
            t.instance.popper,
            t.instance.reference,
            e.padding,
            e.boundariesElement,
            t.positionFixed
          );
          let i = t.placement.split('-')[0];
          let o = st(i);
          let r = t.placement.split('-')[1] || '';
          let s = [];
          switch (e.behavior) {
            case St:
              s = [i, o];
              break;
            case Dt:
              s = Ct(i);
              break;
            case kt:
              s = Ct(i, !0);
              break;
            default:
              s = e.behavior;
          }
          return (
            s.forEach((a, l) => {
              if (i !== a || s.length === l + 1) return t;
              (i = t.placement.split('-')[0]), (o = st(i));
              const c = t.offsets.popper;
              const u = t.offsets.reference;
              const h = Math.floor;
              const f = (i === 'left' && h(c.right) > h(u.left))
                    || (i === 'right' && h(c.left) < h(u.right))
                    || (i === 'top' && h(c.bottom) > h(u.top))
                    || (i === 'bottom' && h(c.top) < h(u.bottom));
              const d = h(c.left) < h(n.left);
              const p = h(c.right) > h(n.right);
              const m = h(c.top) < h(n.top);
              const g = h(c.bottom) > h(n.bottom);
              const v = (i === 'left' && d)
                    || (i === 'right' && p)
                    || (i === 'top' && m)
                    || (i === 'bottom' && g);
              const _ = ['top', 'bottom'].indexOf(i) !== -1;
              const b = !!e.flipVariations
                    && ((_ && r === 'start' && d)
                      || (_ && r === 'end' && p)
                      || (!_ && r === 'start' && m)
                      || (!_ && r === 'end' && g));
              const y = !!e.flipVariationsByContent
                    && ((_ && r === 'start' && p)
                      || (_ && r === 'end' && d)
                      || (!_ && r === 'start' && g)
                      || (!_ && r === 'end' && m));
              const w = b || y;
              (f || v || w)
                  && ((t.flipped = !0),
                  (f || v) && (i = s[l + 1]),
                  w
                    && (r = (function (t) {
                      return t === 'end' ? 'start' : t === 'start' ? 'end' : t;
                    }(r))),
                  (t.placement = i + (r ? `-${r}` : '')),
                  (t.offsets.popper = {

                    ...t.offsets.popper,
                    ...at(t.instance.popper, t.offsets.reference, t.placement)
                  }),
                  (t = ct(t.instance.modifiers, t, 'flip')));
            }),
            t
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
        fn(t) {
          const e = t.placement;
          const n = e.split('-')[0];
          const i = t.offsets;
          const o = i.popper;
          const r = i.reference;
          const s = ['left', 'right'].indexOf(n) !== -1;
          const a = ['top', 'left'].indexOf(n) === -1;
          return (
            (o[s ? 'left' : 'top'] = r[n] - (a ? o[s ? 'width' : 'height'] : 0)),
            (t.placement = st(e)),
            (t.offsets.popper = K(o)),
            t
          );
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn(t) {
          if (!wt(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
          const e = t.offsets.reference;
          const n = lt(t.instance.modifiers, (t) => t.name === 'preventOverflow').boundaries;
          if (
            e.bottom < n.top
              || e.left > n.right
              || e.top > n.bottom
              || e.right < n.left
          ) {
            if (!0 === t.hide) return t;
            (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
          } else {
            if (!1 === t.hide) return t;
            (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
          }
          return t;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn(t, e) {
          const n = e.x;
          const i = e.y;
          const o = t.offsets.popper;
          const r = lt(t.instance.modifiers, (t) => t.name === 'applyStyle').gpuAcceleration;
          void 0 !== r
              && console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
          const s = void 0 !== r ? r : e.gpuAcceleration;
          const a = R(t.instance.popper);
          const l = G(a);
          const c = { position: o.position };
          const u = (function (t, e) {
            const n = t.offsets;
            const i = n.popper;
            const o = n.reference;
            const r = Math.round;
            const s = Math.floor;
            const a = function (t) {
              return t;
            };
            const l = r(o.width);
            const c = r(i.width);
            const u = ['left', 'right'].indexOf(t.placement) !== -1;
            const h = t.placement.indexOf('-') !== -1;
            const f = e ? (u || h || l % 2 == c % 2 ? r : s) : a;
            const d = e ? r : a;
            return {
              left: f(
                l % 2 == 1 && c % 2 == 1 && !h && e ? i.left - 1 : i.left
              ),
              top: d(i.top),
              bottom: d(i.bottom),
              right: f(i.right)
            };
          }(t, window.devicePixelRatio < 2 || !yt));
          const h = n === 'bottom' ? 'top' : 'bottom';
          const f = i === 'right' ? 'left' : 'right';
          const d = ft('transform');
          let p = void 0;
          let m = void 0;
          if (
            ((m = h === 'bottom'
              ? a.nodeName === 'HTML'
                ? -a.clientHeight + u.bottom
                : -l.height + u.bottom
              : u.top),
            (p = f === 'right'
              ? a.nodeName === 'HTML'
                ? -a.clientWidth + u.right
                : -l.width + u.right
              : u.left),
            s && d)
          ) {
            (c[d] = `translate3d(${p}px, ${m}px, 0)`),
            (c[h] = 0),
            (c[f] = 0),
            (c.willChange = 'transform');
          } else {
            const g = h === 'bottom' ? -1 : 1;
            const v = f === 'right' ? -1 : 1;
            (c[h] = m * g), (c[f] = p * v), (c.willChange = `${h}, ${f}`);
          }
          const _ = { 'x-placement': t.placement };
          return (
            (t.attributes = { ..._, ...t.attributes }),
            (t.styles = { ...c, ...t.styles }),
            (t.arrowStyles = { ...t.offsets.arrow, ...t.arrowStyles }),
            t
          );
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn(t) {
          let e; let
            n;
          return (
            bt(t.instance.popper, t.styles),
            (e = t.instance.popper),
            (n = t.attributes),
            Object.keys(n).forEach((t) => {
              !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
            }),
            t.arrowElement
                && Object.keys(t.arrowStyles).length
                && bt(t.arrowElement, t.arrowStyles),
            t
          );
        },
        onLoad(t, e, n, i, o) {
          const r = ot(o, e, t, n.positionFixed);
          const s = it(
            n.placement,
            r,
            e,
            t,
            n.modifiers.flip.boundariesElement,
            n.modifiers.flip.padding
          );
          return (
            e.setAttribute('x-placement', s),
            bt(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
            n
          );
        },
        gpuAcceleration: void 0
      }
    }
  };
  const At = (function () {
    function t(e, n) {
      const i = this;
      const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      V(this, t),
      (this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }),
      (this.update = N(this.update.bind(this))),
      (this.options = { ...t.Defaults, ...o }),
      (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
      (this.reference = e && e.jquery ? e[0] : e),
      (this.popper = n && n.jquery ? n[0] : n),
      (this.options.modifiers = {}),
      Object.keys({ ...t.Defaults.modifiers, ...o.modifiers }).forEach(
        (e) => {
          i.options.modifiers[e] = {

            ...t.Defaults.modifiers[e] || {},
            ...(o.modifiers ? o.modifiers[e] : {})
          };
        }
      ),
      (this.modifiers = Object.keys(this.options.modifiers)
        .map((t) => ({ name: t, ...i.options.modifiers[t] }))
        .sort((t, e) => t.order - e.order)),
      this.modifiers.forEach((t) => {
        t.enabled
              && O(t.onLoad)
              && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }),
      this.update();
      const r = this.options.eventsEnabled;
      r && this.enableEventListeners(), (this.state.eventsEnabled = r);
    }
    return (
      Y(t, [
        {
          key: 'update',
          value() {
            return ut.call(this);
          }
        },
        {
          key: 'destroy',
          value() {
            return dt.call(this);
          }
        },
        {
          key: 'enableEventListeners',
          value() {
            return gt.call(this);
          }
        },
        {
          key: 'disableEventListeners',
          value() {
            return vt.call(this);
          }
        }
      ]),
      t
    );
  }());
  (At.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils),
  (At.placements = Et),
  (At.Defaults = Ot);
  const It = 'dropdown';
  const xt = e.fn[It];
  const jt = new RegExp('38|40|27');
  const Lt = {
    offset: 0,
    flip: !0,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  const Pt = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  const Ft = (function () {
    function t(t, e) {
      (this._element = t),
      (this._popper = null),
      (this._config = this._getConfig(e)),
      (this._menu = this._getMenuElement()),
      (this._inNavbar = this._detectNavbar()),
      this._addEventListeners();
    }
    const n = t.prototype;
    return (
      (n.toggle = function () {
        if (
          !this._element.disabled
            && !e(this._element).hasClass('disabled')
        ) {
          const n = e(this._menu).hasClass('show');
          t._clearMenus(), n || this.show(!0);
        }
      }),
      (n.show = function (n) {
        if (
          (void 0 === n && (n = !1),
          !(
            this._element.disabled
              || e(this._element).hasClass('disabled')
              || e(this._menu).hasClass('show')
          ))
        ) {
          const i = { relatedTarget: this._element };
          const o = e.Event('show.bs.dropdown', i);
          const r = t._getParentFromElement(this._element);
          if ((e(r).trigger(o), !o.isDefaultPrevented())) {
            if (!this._inNavbar && n) {
              if (typeof At === 'undefined') {
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                );
              }
              let s = this._element;
              this._config.reference === 'parent'
                ? (s = r)
                : l.isElement(this._config.reference)
                    && ((s = this._config.reference),
                    typeof this._config.reference.jquery !== 'undefined'
                      && (s = this._config.reference[0])),
              this._config.boundary !== 'scrollParent'
                    && e(r).addClass('position-static'),
              (this._popper = new At(
                s,
                this._menu,
                this._getPopperConfig()
              ));
            }
            'ontouchstart' in document.documentElement
                && e(r).closest('.navbar-nav').length === 0
                && e(document.body).children().on('mouseover', null, e.noop),
            this._element.focus(),
            this._element.setAttribute('aria-expanded', !0),
            e(this._menu).toggleClass('show'),
            e(r)
              .toggleClass('show')
              .trigger(e.Event('shown.bs.dropdown', i));
          }
        }
      }),
      (n.hide = function () {
        if (
          !this._element.disabled
            && !e(this._element).hasClass('disabled')
            && e(this._menu).hasClass('show')
        ) {
          const n = { relatedTarget: this._element };
          const i = e.Event('hide.bs.dropdown', n);
          const o = t._getParentFromElement(this._element);
          e(o).trigger(i),
          i.isDefaultPrevented()
                || (this._popper && this._popper.destroy(),
                e(this._menu).toggleClass('show'),
                e(o)
                  .toggleClass('show')
                  .trigger(e.Event('hidden.bs.dropdown', n)));
        }
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.dropdown'),
        e(this._element).off('.bs.dropdown'),
        (this._element = null),
        (this._menu = null),
        this._popper !== null
              && (this._popper.destroy(), (this._popper = null));
      }),
      (n.update = function () {
        (this._inNavbar = this._detectNavbar()),
        this._popper !== null && this._popper.scheduleUpdate();
      }),
      (n._addEventListeners = function () {
        const t = this;
        e(this._element).on('click.bs.dropdown', (e) => {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }),
      (n._getConfig = function (t) {
        return (
          (t = s(
            s(s({}, this.constructor.Default), e(this._element).data()),
            t
          )),
          l.typeCheckConfig(It, t, this.constructor.DefaultType),
          t
        );
      }),
      (n._getMenuElement = function () {
        if (!this._menu) {
          const e = t._getParentFromElement(this._element);
          e && (this._menu = e.querySelector('.dropdown-menu'));
        }
        return this._menu;
      }),
      (n._getPlacement = function () {
        const t = e(this._element.parentNode);
        let n = 'bottom-start';
        return (
          t.hasClass('dropup')
            ? (n = e(this._menu).hasClass('dropdown-menu-right')
              ? 'top-end'
              : 'top-start')
            : t.hasClass('dropright')
              ? (n = 'right-start')
              : t.hasClass('dropleft')
                ? (n = 'left-start')
                : e(this._menu).hasClass('dropdown-menu-right')
                && (n = 'bottom-end'),
          n
        );
      }),
      (n._detectNavbar = function () {
        return e(this._element).closest('.navbar').length > 0;
      }),
      (n._getOffset = function () {
        const t = this;
        const e = {};
        return (
          typeof this._config.offset === 'function'
            ? (e.fn = function (e) {
              return (
                (e.offsets = s(
                  s({}, e.offsets),
                  t._config.offset(e.offsets, t._element) || {}
                )),
                e
              );
            })
            : (e.offset = this._config.offset),
          e
        );
      }),
      (n._getPopperConfig = function () {
        const t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: { enabled: this._config.flip },
            preventOverflow: { boundariesElement: this._config.boundary }
          }
        };
        return (
          this._config.display === 'static'
              && (t.modifiers.applyStyle = { enabled: !1 }),
          s(s({}, t), this._config.popperConfig)
        );
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          let i = e(this).data('bs.dropdown');
          if (
            (i
                || ((i = new t(this, typeof n === 'object' ? n : null)),
                e(this).data('bs.dropdown', i)),
            typeof n === 'string')
          ) {
            if (typeof i[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            i[n]();
          }
        });
      }),
      (t._clearMenus = function (n) {
        if (!n || (n.which !== 3 && (n.type !== 'keyup' || n.which === 9))) {
          for (
            let i = [].slice.call(
                document.querySelectorAll('[data-toggle="dropdown"]')
              ),
              o = 0,
              r = i.length;
            o < r;
            o++
          ) {
            const s = t._getParentFromElement(i[o]);
            const a = e(i[o]).data('bs.dropdown');
            const l = { relatedTarget: i[o] };
            if ((n && n.type === 'click' && (l.clickEvent = n), a)) {
              const c = a._menu;
              if (
                e(s).hasClass('show')
                  && !(
                    n
                    && ((n.type === 'click'
                      && /input|textarea/i.test(n.target.tagName))
                      || (n.type === 'keyup' && n.which === 9))
                    && e.contains(s, n.target)
                  )
              ) {
                const u = e.Event('hide.bs.dropdown', l);
                e(s).trigger(u),
                u.isDefaultPrevented()
                      || ('ontouchstart' in document.documentElement
                        && e(document.body)
                          .children()
                          .off('mouseover', null, e.noop),
                      i[o].setAttribute('aria-expanded', 'false'),
                      a._popper && a._popper.destroy(),
                      e(c).removeClass('show'),
                      e(s)
                        .removeClass('show')
                        .trigger(e.Event('hidden.bs.dropdown', l)));
              }
            }
          }
        }
      }),
      (t._getParentFromElement = function (t) {
        let e;
        const n = l.getSelectorFromElement(t);
        return n && (e = document.querySelector(n)), e || t.parentNode;
      }),
      (t._dataApiKeydownHandler = function (n) {
        if (
          !(/input|textarea/i.test(n.target.tagName)
            ? n.which === 32
                || (n.which !== 27
                  && ((n.which !== 40 && n.which !== 38)
                    || e(n.target).closest('.dropdown-menu').length))
            : !jt.test(n.which))
            && !this.disabled
            && !e(this).hasClass('disabled')
        ) {
          const i = t._getParentFromElement(this);
          const o = e(i).hasClass('show');
          if (o || n.which !== 27) {
            if (
              (n.preventDefault(),
              n.stopPropagation(),
              !o || (o && (n.which === 27 || n.which === 32)))
            ) {
              return (
                n.which === 27
                    && e(i.querySelector('[data-toggle="dropdown"]')).trigger(
                      'focus'
                    ),
                void e(this).trigger('click')
              );
            }
            const r = [].slice
              .call(
                i.querySelectorAll(
                  '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                )
              )
              .filter((t) => e(t).is(':visible'));
            if (r.length !== 0) {
              let s = r.indexOf(n.target);
              n.which === 38 && s > 0 && s--,
              n.which === 40 && s < r.length - 1 && s++,
              s < 0 && (s = 0),
              r[s].focus();
            }
          }
        }
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return Lt;
          }
        },
        {
          key: 'DefaultType',
          get() {
            return Pt;
          }
        }
      ]),
      t
    );
  }());
  e(document)
    .on(
      'keydown.bs.dropdown.data-api',
      '[data-toggle="dropdown"]',
      Ft._dataApiKeydownHandler
    )
    .on(
      'keydown.bs.dropdown.data-api',
      '.dropdown-menu',
      Ft._dataApiKeydownHandler
    )
    .on('click.bs.dropdown.data-api keyup.bs.dropdown.data-api', Ft._clearMenus)
    .on('click.bs.dropdown.data-api', '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(),
      t.stopPropagation(),
      Ft._jQueryInterface.call(e(this), 'toggle');
    })
    .on('click.bs.dropdown.data-api', '.dropdown form', (t) => {
      t.stopPropagation();
    }),
  (e.fn[It] = Ft._jQueryInterface),
  (e.fn[It].Constructor = Ft),
  (e.fn[It].noConflict = function () {
    return (e.fn[It] = xt), Ft._jQueryInterface;
  });
  const Rt = e.fn.modal;
  const Mt = {
    backdrop: !0, keyboard: !0, focus: !0, show: !0
  };
  const Bt = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  const qt = (function () {
    function t(t, e) {
      (this._config = this._getConfig(e)),
      (this._element = t),
      (this._dialog = t.querySelector('.modal-dialog')),
      (this._backdrop = null),
      (this._isShown = !1),
      (this._isBodyOverflowing = !1),
      (this._ignoreBackdropClick = !1),
      (this._isTransitioning = !1),
      (this._scrollbarWidth = 0);
    }
    const n = t.prototype;
    return (
      (n.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }),
      (n.show = function (t) {
        const n = this;
        if (!this._isShown && !this._isTransitioning) {
          e(this._element).hasClass('fade') && (this._isTransitioning = !0);
          const i = e.Event('show.bs.modal', { relatedTarget: t });
          e(this._element).trigger(i),
          this._isShown
                || i.isDefaultPrevented()
                || ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                e(this._element).on(
                  'click.dismiss.bs.modal',
                  '[data-dismiss="modal"]',
                  (t) => n.hide(t)
                ),
                e(this._dialog).on('mousedown.dismiss.bs.modal', () => {
                  e(n._element).one('mouseup.dismiss.bs.modal', (t) => {
                    e(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(() => n._showElement(t)));
        }
      }),
      (n.hide = function (t) {
        const n = this;
        if (
          (t && t.preventDefault(), this._isShown && !this._isTransitioning)
        ) {
          const i = e.Event('hide.bs.modal');
          if (
            (e(this._element).trigger(i),
            this._isShown && !i.isDefaultPrevented())
          ) {
            this._isShown = !1;
            const o = e(this._element).hasClass('fade');
            if (
              (o && (this._isTransitioning = !0),
              this._setEscapeEvent(),
              this._setResizeEvent(),
              e(document).off('focusin.bs.modal'),
              e(this._element).removeClass('show'),
              e(this._element).off('click.dismiss.bs.modal'),
              e(this._dialog).off('mousedown.dismiss.bs.modal'),
              o)
            ) {
              const r = l.getTransitionDurationFromElement(this._element);
              e(this._element)
                .one(l.TRANSITION_END, (t) => n._hideModal(t))
                .emulateTransitionEnd(r);
            } else this._hideModal();
          }
        }
      }),
      (n.dispose = function () {
        [window, this._element, this._dialog].forEach((t) => e(t).off('.bs.modal')),
        e(document).off('focusin.bs.modal'),
        e.removeData(this._element, 'bs.modal'),
        (this._config = null),
        (this._element = null),
        (this._dialog = null),
        (this._backdrop = null),
        (this._isShown = null),
        (this._isBodyOverflowing = null),
        (this._ignoreBackdropClick = null),
        (this._isTransitioning = null),
        (this._scrollbarWidth = null);
      }),
      (n.handleUpdate = function () {
        this._adjustDialog();
      }),
      (n._getConfig = function (t) {
        return (t = s(s({}, Mt), t)), l.typeCheckConfig('modal', t, Bt), t;
      }),
      (n._triggerBackdropTransition = function () {
        const t = this;
        if (this._config.backdrop === 'static') {
          const n = e.Event('hidePrevented.bs.modal');
          if ((e(this._element).trigger(n), n.defaultPrevented)) return;
          this._element.classList.add('modal-static');
          const i = l.getTransitionDurationFromElement(this._element);
          e(this._element)
            .one(l.TRANSITION_END, () => {
              t._element.classList.remove('modal-static');
            })
            .emulateTransitionEnd(i),
          this._element.focus();
        } else this.hide();
      }),
      (n._showElement = function (t) {
        const n = this;
        const i = e(this._element).hasClass('fade');
        const o = this._dialog ? this._dialog.querySelector('.modal-body') : null;
        (this._element.parentNode
            && this._element.parentNode.nodeType === Node.ELEMENT_NODE)
            || document.body.appendChild(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        e(this._dialog).hasClass('modal-dialog-scrollable') && o
          ? (o.scrollTop = 0)
          : (this._element.scrollTop = 0),
        i && l.reflow(this._element),
        e(this._element).addClass('show'),
        this._config.focus && this._enforceFocus();
        const r = e.Event('shown.bs.modal', { relatedTarget: t });
        const s = function () {
          n._config.focus && n._element.focus(),
          (n._isTransitioning = !1),
          e(n._element).trigger(r);
        };
        if (i) {
          const a = l.getTransitionDurationFromElement(this._dialog);
          e(this._dialog).one(l.TRANSITION_END, s).emulateTransitionEnd(a);
        } else s();
      }),
      (n._enforceFocus = function () {
        const t = this;
        e(document)
          .off('focusin.bs.modal')
          .on('focusin.bs.modal', (n) => {
            document !== n.target
                && t._element !== n.target
                && e(t._element).has(n.target).length === 0
                && t._element.focus();
          });
      }),
      (n._setEscapeEvent = function () {
        const t = this;
        this._isShown
          ? e(this._element).on('keydown.dismiss.bs.modal', (e) => {
            t._config.keyboard && e.which === 27
              ? (e.preventDefault(), t.hide())
              : t._config.keyboard
                    || e.which !== 27
                    || t._triggerBackdropTransition();
          })
          : this._isShown || e(this._element).off('keydown.dismiss.bs.modal');
      }),
      (n._setResizeEvent = function () {
        const t = this;
        this._isShown
          ? e(window).on('resize.bs.modal', (e) => t.handleUpdate(e))
          : e(window).off('resize.bs.modal');
      }),
      (n._hideModal = function () {
        const t = this;
        (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        (this._isTransitioning = !1),
        this._showBackdrop(() => {
          e(document.body).removeClass('modal-open'),
          t._resetAdjustments(),
          t._resetScrollbar(),
          e(t._element).trigger('hidden.bs.modal');
        });
      }),
      (n._removeBackdrop = function () {
        this._backdrop
            && (e(this._backdrop).remove(), (this._backdrop = null));
      }),
      (n._showBackdrop = function (t) {
        const n = this;
        const i = e(this._element).hasClass('fade') ? 'fade' : '';
        if (this._isShown && this._config.backdrop) {
          if (
            ((this._backdrop = document.createElement('div')),
            (this._backdrop.className = 'modal-backdrop'),
            i && this._backdrop.classList.add(i),
            e(this._backdrop).appendTo(document.body),
            e(this._element).on('click.dismiss.bs.modal', (t) => {
              n._ignoreBackdropClick
                ? (n._ignoreBackdropClick = !1)
                : t.target === t.currentTarget
                    && n._triggerBackdropTransition();
            }),
            i && l.reflow(this._backdrop),
            e(this._backdrop).addClass('show'),
            !t)
          ) return;
          if (!i) return void t();
          const o = l.getTransitionDurationFromElement(this._backdrop);
          e(this._backdrop).one(l.TRANSITION_END, t).emulateTransitionEnd(o);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass('show');
          const r = function () {
            n._removeBackdrop(), t && t();
          };
          if (e(this._element).hasClass('fade')) {
            const s = l.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop)
              .one(l.TRANSITION_END, r)
              .emulateTransitionEnd(s);
          } else r();
        } else t && t();
      }),
      (n._adjustDialog = function () {
        const t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing
            && t
            && (this._element.style.paddingLeft = `${this._scrollbarWidth}px`),
        this._isBodyOverflowing
              && !t
              && (this._element.style.paddingRight = `${this._scrollbarWidth}px`);
      }),
      (n._resetAdjustments = function () {
        (this._element.style.paddingLeft = ''),
        (this._element.style.paddingRight = '');
      }),
      (n._checkScrollbar = function () {
        const t = document.body.getBoundingClientRect();
        (this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth),
        (this._scrollbarWidth = this._getScrollbarWidth());
      }),
      (n._setScrollbar = function () {
        const t = this;
        if (this._isBodyOverflowing) {
          const n = [].slice.call(
            document.querySelectorAll(
              '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
            )
          );
          const i = [].slice.call(document.querySelectorAll('.sticky-top'));
          e(n).each((n, i) => {
            const o = i.style.paddingRight;
            const r = e(i).css('padding-right');
            e(i)
              .data('padding-right', o)
              .css('padding-right', `${parseFloat(r) + t._scrollbarWidth}px`);
          }),
          e(i).each((n, i) => {
            const o = i.style.marginRight;
            const r = e(i).css('margin-right');
            e(i)
              .data('margin-right', o)
              .css(
                'margin-right',
                `${parseFloat(r) - t._scrollbarWidth}px`
              );
          });
          const o = document.body.style.paddingRight;
          const r = e(document.body).css('padding-right');
          e(document.body)
            .data('padding-right', o)
            .css(
              'padding-right',
              `${parseFloat(r) + this._scrollbarWidth}px`
            );
        }
        e(document.body).addClass('modal-open');
      }),
      (n._resetScrollbar = function () {
        const t = [].slice.call(
          document.querySelectorAll(
            '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'
          )
        );
        e(t).each((t, n) => {
          const i = e(n).data('padding-right');
          e(n).removeData('padding-right'), (n.style.paddingRight = i || '');
        });
        const n = [].slice.call(document.querySelectorAll('.sticky-top'));
        e(n).each((t, n) => {
          const i = e(n).data('margin-right');
          typeof i !== 'undefined'
              && e(n).css('margin-right', i).removeData('margin-right');
        });
        const i = e(document.body).data('padding-right');
        e(document.body).removeData('padding-right'),
        (document.body.style.paddingRight = i || '');
      }),
      (n._getScrollbarWidth = function () {
        const t = document.createElement('div');
        (t.className = 'modal-scrollbar-measure'),
        document.body.appendChild(t);
        const e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }),
      (t._jQueryInterface = function (n, i) {
        return this.each(function () {
          let o = e(this).data('bs.modal');
          const r = s(
            s(s({}, Mt), e(this).data()),
            typeof n === 'object' && n ? n : {}
          );
          if (
            (o || ((o = new t(this, r)), e(this).data('bs.modal', o)),
            typeof n === 'string')
          ) {
            if (typeof o[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            o[n](i);
          } else r.show && o.show(i);
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return Mt;
          }
        }
      ]),
      t
    );
  }());
  e(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (
    t
  ) {
    let n;
    const i = this;
    const o = l.getSelectorFromElement(this);
    o && (n = document.querySelector(o));
    const r = e(n).data('bs.modal')
      ? 'toggle'
      : s(s({}, e(n).data()), e(this).data());
    (this.tagName !== 'A' && this.tagName !== 'AREA') || t.preventDefault();
    var a = e(n).one('show.bs.modal', (t) => {
      t.isDefaultPrevented()
        || a.one('hidden.bs.modal', () => {
          e(i).is(':visible') && i.focus();
        });
    });
    qt._jQueryInterface.call(e(n), r, this);
  }),
  (e.fn.modal = qt._jQueryInterface),
  (e.fn.modal.Constructor = qt),
  (e.fn.modal.noConflict = function () {
    return (e.fn.modal = Rt), qt._jQueryInterface;
  });
  const Ht = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ];
  const Qt = {
    '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  const Wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  const Ut = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function Vt(t, e, n) {
    if (t.length === 0) return t;
    if (n && typeof n === 'function') return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, 'text/html'),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll('*')),
        s = function (t, n) {
          const i = r[t];
          const s = i.nodeName.toLowerCase();
          if (o.indexOf(i.nodeName.toLowerCase()) === -1) return i.parentNode.removeChild(i), 'continue';
          const a = [].slice.call(i.attributes);
          const l = [].concat(e['*'] || [], e[s] || []);
          a.forEach((t) => {
            (function (t, e) {
              const n = t.nodeName.toLowerCase();
              if (e.indexOf(n) !== -1) {
                return (
                  Ht.indexOf(n) === -1
                  || Boolean(t.nodeValue.match(Wt) || t.nodeValue.match(Ut))
                );
              }
              for (
                let i = e.filter((t) => t instanceof RegExp),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              ) if (n.match(i[o])) return !0;
              return !1;
            }(t, l)) || i.removeAttribute(t.nodeName);
          });
        },
        a = 0,
        l = r.length;
      a < l;
      a++
    ) s(a);
    return i.body.innerHTML;
  }
  const Yt = 'tooltip';
  const zt = e.fn[Yt];
  const Xt = new RegExp('(^|\\s)bs-tooltip\\S+', 'g');
  const Kt = ['sanitize', 'whiteList', 'sanitizeFn'];
  const Gt = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  const $t = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  const Jt = {
    animation: !0,
    template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    selector: !1,
    placement: 'top',
    offset: 0,
    container: !1,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: !0,
    sanitizeFn: null,
    whiteList: Qt,
    popperConfig: null
  };
  const Zt = {
    HIDE: 'hide.bs.tooltip',
    HIDDEN: 'hidden.bs.tooltip',
    SHOW: 'show.bs.tooltip',
    SHOWN: 'shown.bs.tooltip',
    INSERTED: 'inserted.bs.tooltip',
    CLICK: 'click.bs.tooltip',
    FOCUSIN: 'focusin.bs.tooltip',
    FOCUSOUT: 'focusout.bs.tooltip',
    MOUSEENTER: 'mouseenter.bs.tooltip',
    MOUSELEAVE: 'mouseleave.bs.tooltip'
  };
  const te = (function () {
    function t(t, e) {
      if (typeof At === 'undefined') {
        throw new TypeError(
          "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
        );
      }
      (this._isEnabled = !0),
      (this._timeout = 0),
      (this._hoverState = ''),
      (this._activeTrigger = {}),
      (this._popper = null),
      (this.element = t),
      (this.config = this._getConfig(e)),
      (this.tip = null),
      this._setListeners();
    }
    const n = t.prototype;
    return (
      (n.enable = function () {
        this._isEnabled = !0;
      }),
      (n.disable = function () {
        this._isEnabled = !1;
      }),
      (n.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }),
      (n.toggle = function (t) {
        if (this._isEnabled) {
          if (t) {
            const n = this.constructor.DATA_KEY;
            let i = e(t.currentTarget).data(n);
            i
                || ((i = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                e(t.currentTarget).data(n, i)),
            (i._activeTrigger.click = !i._activeTrigger.click),
            i._isWithActiveTrigger()
              ? i._enter(null, i)
              : i._leave(null, i);
          } else {
            if (e(this.getTipElement()).hasClass('show')) return void this._leave(null, this);
            this._enter(null, this);
          }
        }
      }),
      (n.dispose = function () {
        clearTimeout(this._timeout),
        e.removeData(this.element, this.constructor.DATA_KEY),
        e(this.element).off(this.constructor.EVENT_KEY),
        e(this.element)
          .closest('.modal')
          .off('hide.bs.modal', this._hideModalHandler),
        this.tip && e(this.tip).remove(),
        (this._isEnabled = null),
        (this._timeout = null),
        (this._hoverState = null),
        (this._activeTrigger = null),
        this._popper && this._popper.destroy(),
        (this._popper = null),
        (this.element = null),
        (this.config = null),
        (this.tip = null);
      }),
      (n.show = function () {
        const t = this;
        if (e(this.element).css('display') === 'none') throw new Error('Please use show on visible elements');
        const n = e.Event(this.constructor.Event.SHOW);
        if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(n);
          const i = l.findShadowRoot(this.element);
          const o = e.contains(
            i !== null ? i : this.element.ownerDocument.documentElement,
            this.element
          );
          if (n.isDefaultPrevented() || !o) return;
          const r = this.getTipElement();
          const s = l.getUID(this.constructor.NAME);
          r.setAttribute('id', s),
          this.element.setAttribute('aria-describedby', s),
          this.setContent(),
          this.config.animation && e(r).addClass('fade');
          const a = typeof this.config.placement === 'function'
            ? this.config.placement.call(this, r, this.element)
            : this.config.placement;
          const c = this._getAttachment(a);
          this.addAttachmentClass(c);
          const u = this._getContainer();
          e(r).data(this.constructor.DATA_KEY, this),
          e.contains(
            this.element.ownerDocument.documentElement,
            this.tip
          ) || e(r).appendTo(u),
          e(this.element).trigger(this.constructor.Event.INSERTED),
          (this._popper = new At(
            this.element,
            r,
            this._getPopperConfig(c)
          )),
          e(r).addClass('show'),
          'ontouchstart' in document.documentElement
                && e(document.body).children().on('mouseover', null, e.noop);
          const h = function () {
            t.config.animation && t._fixTransition();
            const n = t._hoverState;
            (t._hoverState = null),
            e(t.element).trigger(t.constructor.Event.SHOWN),
            n === 'out' && t._leave(null, t);
          };
          if (e(this.tip).hasClass('fade')) {
            const f = l.getTransitionDurationFromElement(this.tip);
            e(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(f);
          } else h();
        }
      }),
      (n.hide = function (t) {
        const n = this;
        const i = this.getTipElement();
        const o = e.Event(this.constructor.Event.HIDE);
        const r = function () {
          n._hoverState !== 'show'
                && i.parentNode
                && i.parentNode.removeChild(i),
          n._cleanTipClass(),
          n.element.removeAttribute('aria-describedby'),
          e(n.element).trigger(n.constructor.Event.HIDDEN),
          n._popper !== null && n._popper.destroy(),
          t && t();
        };
        if ((e(this.element).trigger(o), !o.isDefaultPrevented())) {
          if (
            (e(i).removeClass('show'),
            'ontouchstart' in document.documentElement
                && e(document.body).children().off('mouseover', null, e.noop),
            (this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            e(this.tip).hasClass('fade'))
          ) {
            const s = l.getTransitionDurationFromElement(i);
            e(i).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
          } else r();
          this._hoverState = '';
        }
      }),
      (n.update = function () {
        this._popper !== null && this._popper.scheduleUpdate();
      }),
      (n.isWithContent = function () {
        return Boolean(this.getTitle());
      }),
      (n.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass(`bs-tooltip-${t}`);
      }),
      (n.getTipElement = function () {
        return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
      }),
      (n.setContent = function () {
        const t = this.getTipElement();
        this.setElementContent(
          e(t.querySelectorAll('.tooltip-inner')),
          this.getTitle()
        ),
        e(t).removeClass('fade show');
      }),
      (n.setElementContent = function (t, n) {
        typeof n !== 'object' || (!n.nodeType && !n.jquery)
          ? this.config.html
            ? (this.config.sanitize
                  && (n = Vt(n, this.config.whiteList, this.config.sanitizeFn)),
            t.html(n))
            : t.text(n)
          : this.config.html
            ? e(n).parent().is(t) || t.empty().append(n)
            : t.text(e(n).text());
      }),
      (n.getTitle = function () {
        let t = this.element.getAttribute('data-original-title');
        return (
          t
              || (t = typeof this.config.title === 'function'
                ? this.config.title.call(this.element)
                : this.config.title),
          t
        );
      }),
      (n._getPopperConfig = function (t) {
        const e = this;
        return s(
          s(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: { boundariesElement: this.config.boundary }
              },
              onCreate(t) {
                t.originalPlacement !== t.placement
                    && e._handlePopperPlacementChange(t);
              },
              onUpdate(t) {
                return e._handlePopperPlacementChange(t);
              }
            }
          ),
          this.config.popperConfig
        );
      }),
      (n._getOffset = function () {
        const t = this;
        const e = {};
        return (
          typeof this.config.offset === 'function'
            ? (e.fn = function (e) {
              return (
                (e.offsets = s(
                  s({}, e.offsets),
                  t.config.offset(e.offsets, t.element) || {}
                )),
                e
              );
            })
            : (e.offset = this.config.offset),
          e
        );
      }),
      (n._getContainer = function () {
        return !1 === this.config.container
          ? document.body
          : l.isElement(this.config.container)
            ? e(this.config.container)
            : e(document).find(this.config.container);
      }),
      (n._getAttachment = function (t) {
        return $t[t.toUpperCase()];
      }),
      (n._setListeners = function () {
        const t = this;
        this.config.trigger.split(' ').forEach((n) => {
          if (n === 'click') {
            e(t.element).on(
              t.constructor.Event.CLICK,
              t.config.selector,
              (e) => t.toggle(e)
            );
          } else if (n !== 'manual') {
            const i = n === 'hover'
              ? t.constructor.Event.MOUSEENTER
              : t.constructor.Event.FOCUSIN;
            const o = n === 'hover'
              ? t.constructor.Event.MOUSELEAVE
              : t.constructor.Event.FOCUSOUT;
            e(t.element)
              .on(i, t.config.selector, (e) => t._enter(e))
              .on(o, t.config.selector, (e) => t._leave(e));
          }
        }),
        (this._hideModalHandler = function () {
          t.element && t.hide();
        }),
        e(this.element)
          .closest('.modal')
          .on('hide.bs.modal', this._hideModalHandler),
        this.config.selector
          ? (this.config = s(
            s({}, this.config),
            {},
            { trigger: 'manual', selector: '' }
          ))
          : this._fixTitle();
      }),
      (n._fixTitle = function () {
        const t = typeof this.element.getAttribute('data-original-title');
        (this.element.getAttribute('title') || t !== 'string')
            && (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
      }),
      (n._enter = function (t, n) {
        const i = this.constructor.DATA_KEY;
        (n = n || e(t.currentTarget).data(i))
            || ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
        t
              && (n._activeTrigger[t.type === 'focusin' ? 'focus' : 'hover'] = !0),
        e(n.getTipElement()).hasClass('show') || n._hoverState === 'show'
          ? (n._hoverState = 'show')
          : (clearTimeout(n._timeout),
          (n._hoverState = 'show'),
          n.config.delay && n.config.delay.show
            ? (n._timeout = setTimeout(() => {
              n._hoverState === 'show' && n.show();
            }, n.config.delay.show))
            : n.show());
      }),
      (n._leave = function (t, n) {
        const i = this.constructor.DATA_KEY;
        (n = n || e(t.currentTarget).data(i))
            || ((n = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            e(t.currentTarget).data(i, n)),
        t
              && (n._activeTrigger[
                t.type === 'focusout' ? 'focus' : 'hover'
              ] = !1),
        n._isWithActiveTrigger()
              || (clearTimeout(n._timeout),
              (n._hoverState = 'out'),
              n.config.delay && n.config.delay.hide
                ? (n._timeout = setTimeout(() => {
                  n._hoverState === 'out' && n.hide();
                }, n.config.delay.hide))
                : n.hide());
      }),
      (n._isWithActiveTrigger = function () {
        for (const t in this._activeTrigger) if (this._activeTrigger[t]) return !0;
        return !1;
      }),
      (n._getConfig = function (t) {
        const n = e(this.element).data();
        return (
          Object.keys(n).forEach((t) => {
            Kt.indexOf(t) !== -1 && delete n[t];
          }),
          typeof (t = s(
            s(s({}, this.constructor.Default), n),
            typeof t === 'object' && t ? t : {}
          )).delay
              === 'number' && (t.delay = { show: t.delay, hide: t.delay }),
          typeof t.title === 'number' && (t.title = t.title.toString()),
          typeof t.content === 'number' && (t.content = t.content.toString()),
          l.typeCheckConfig(Yt, t, this.constructor.DefaultType),
          t.sanitize
              && (t.template = Vt(t.template, t.whiteList, t.sanitizeFn)),
          t
        );
      }),
      (n._getDelegateConfig = function () {
        const t = {};
        if (this.config) {
          for (const e in this.config) {
            this.constructor.Default[e] !== this.config[e]
                && (t[e] = this.config[e]);
          }
        }
        return t;
      }),
      (n._cleanTipClass = function () {
        const t = e(this.getTipElement());
        const n = t.attr('class').match(Xt);
        n !== null && n.length && t.removeClass(n.join(''));
      }),
      (n._handlePopperPlacementChange = function (t) {
        (this.tip = t.instance.popper),
        this._cleanTipClass(),
        this.addAttachmentClass(this._getAttachment(t.placement));
      }),
      (n._fixTransition = function () {
        const t = this.getTipElement();
        const n = this.config.animation;
        t.getAttribute('x-placement') === null
            && (e(t).removeClass('fade'),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = n));
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          let i = e(this).data('bs.tooltip');
          const o = typeof n === 'object' && n;
          if (
            (i || !/dispose|hide/.test(n))
              && (i || ((i = new t(this, o)), e(this).data('bs.tooltip', i)),
              typeof n === 'string')
          ) {
            if (typeof i[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            i[n]();
          }
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return Jt;
          }
        },
        {
          key: 'NAME',
          get() {
            return Yt;
          }
        },
        {
          key: 'DATA_KEY',
          get() {
            return 'bs.tooltip';
          }
        },
        {
          key: 'Event',
          get() {
            return Zt;
          }
        },
        {
          key: 'EVENT_KEY',
          get() {
            return '.bs.tooltip';
          }
        },
        {
          key: 'DefaultType',
          get() {
            return Gt;
          }
        }
      ]),
      t
    );
  }());
  (e.fn[Yt] = te._jQueryInterface),
  (e.fn[Yt].Constructor = te),
  (e.fn[Yt].noConflict = function () {
    return (e.fn[Yt] = zt), te._jQueryInterface;
  });
  const ee = 'popover';
  const ne = e.fn[ee];
  const ie = new RegExp('(^|\\s)bs-popover\\S+', 'g');
  const oe = s(
    s({}, te.Default),
    {},
    {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
  );
  const re = s(s({}, te.DefaultType), {}, { content: '(string|element|function)' });
  const se = {
    HIDE: 'hide.bs.popover',
    HIDDEN: 'hidden.bs.popover',
    SHOW: 'show.bs.popover',
    SHOWN: 'shown.bs.popover',
    INSERTED: 'inserted.bs.popover',
    CLICK: 'click.bs.popover',
    FOCUSIN: 'focusin.bs.popover',
    FOCUSOUT: 'focusout.bs.popover',
    MOUSEENTER: 'mouseenter.bs.popover',
    MOUSELEAVE: 'mouseleave.bs.popover'
  };
  const ae = (function (t) {
    let n; let
      o;
    function r() {
      return t.apply(this, arguments) || this;
    }
    (o = t),
    ((n = r).prototype = Object.create(o.prototype)),
    (n.prototype.constructor = n),
    (n.__proto__ = o);
    const s = r.prototype;
    return (
      (s.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }),
      (s.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass(`bs-popover-${t}`);
      }),
      (s.getTipElement = function () {
        return (this.tip = this.tip || e(this.config.template)[0]), this.tip;
      }),
      (s.setContent = function () {
        const t = e(this.getTipElement());
        this.setElementContent(t.find('.popover-header'), this.getTitle());
        let n = this._getContent();
        typeof n === 'function' && (n = n.call(this.element)),
        this.setElementContent(t.find('.popover-body'), n),
        t.removeClass('fade show');
      }),
      (s._getContent = function () {
        return (
          this.element.getAttribute('data-content') || this.config.content
        );
      }),
      (s._cleanTipClass = function () {
        const t = e(this.getTipElement());
        const n = t.attr('class').match(ie);
        n !== null && n.length > 0 && t.removeClass(n.join(''));
      }),
      (r._jQueryInterface = function (t) {
        return this.each(function () {
          let n = e(this).data('bs.popover');
          const i = typeof t === 'object' ? t : null;
          if (
            (n || !/dispose|hide/.test(t))
              && (n || ((n = new r(this, i)), e(this).data('bs.popover', n)),
              typeof t === 'string')
          ) {
            if (typeof n[t] === 'undefined') throw new TypeError(`No method named "${t}"`);
            n[t]();
          }
        });
      }),
      i(r, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return oe;
          }
        },
        {
          key: 'NAME',
          get() {
            return ee;
          }
        },
        {
          key: 'DATA_KEY',
          get() {
            return 'bs.popover';
          }
        },
        {
          key: 'Event',
          get() {
            return se;
          }
        },
        {
          key: 'EVENT_KEY',
          get() {
            return '.bs.popover';
          }
        },
        {
          key: 'DefaultType',
          get() {
            return re;
          }
        }
      ]),
      r
    );
  }(te));
  (e.fn[ee] = ae._jQueryInterface),
  (e.fn[ee].Constructor = ae),
  (e.fn[ee].noConflict = function () {
    return (e.fn[ee] = ne), ae._jQueryInterface;
  });
  const le = 'scrollspy';
  const ce = e.fn[le];
  const ue = { offset: 10, method: 'auto', target: '' };
  const he = { offset: 'number', method: 'string', target: '(string|element)' };
  const fe = (function () {
    function t(t, n) {
      const i = this;
      (this._element = t),
      (this._scrollElement = t.tagName === 'BODY' ? window : t),
      (this._config = this._getConfig(n)),
      (this._selector = `${this._config.target
      } .nav-link,${
        this._config.target
      } .list-group-item,${
        this._config.target
      } .dropdown-item`),
      (this._offsets = []),
      (this._targets = []),
      (this._activeTarget = null),
      (this._scrollHeight = 0),
      e(this._scrollElement).on('scroll.bs.scrollspy', (t) => i._process(t)),
      this.refresh(),
      this._process();
    }
    const n = t.prototype;
    return (
      (n.refresh = function () {
        const t = this;
        const n = this._scrollElement === this._scrollElement.window
          ? 'offset'
          : 'position';
        const i = this._config.method === 'auto' ? n : this._config.method;
        const o = i === 'position' ? this._getScrollTop() : 0;
        (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        [].slice
          .call(document.querySelectorAll(this._selector))
          .map((t) => {
            let n;
            const r = l.getSelectorFromElement(t);
            if ((r && (n = document.querySelector(r)), n)) {
              const s = n.getBoundingClientRect();
              if (s.width || s.height) return [e(n)[i]().top + o, r];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((e) => {
            t._offsets.push(e[0]), t._targets.push(e[1]);
          });
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.scrollspy'),
        e(this._scrollElement).off('.bs.scrollspy'),
        (this._element = null),
        (this._scrollElement = null),
        (this._config = null),
        (this._selector = null),
        (this._offsets = null),
        (this._targets = null),
        (this._activeTarget = null),
        (this._scrollHeight = null);
      }),
      (n._getConfig = function (t) {
        if (
          typeof (t = s(s({}, ue), typeof t === 'object' && t ? t : {}))
            .target
              !== 'string'
            && l.isElement(t.target)
        ) {
          let n = e(t.target).attr('id');
          n || ((n = l.getUID(le)), e(t.target).attr('id', n)),
          (t.target = `#${n}`);
        }
        return l.typeCheckConfig(le, t, he), t;
      }),
      (n._getScrollTop = function () {
        return this._scrollElement === window
          ? this._scrollElement.pageYOffset
          : this._scrollElement.scrollTop;
      }),
      (n._getScrollHeight = function () {
        return (
          this._scrollElement.scrollHeight
            || Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
        );
      }),
      (n._getOffsetHeight = function () {
        return this._scrollElement === window
          ? window.innerHeight
          : this._scrollElement.getBoundingClientRect().height;
      }),
      (n._process = function () {
        const t = this._getScrollTop() + this._config.offset;
        const e = this._getScrollHeight();
        const n = this._config.offset + e - this._getOffsetHeight();
        if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
          const i = this._targets[this._targets.length - 1];
          this._activeTarget !== i && this._activate(i);
        } else {
          if (
            this._activeTarget
              && t < this._offsets[0]
              && this._offsets[0] > 0
          ) return (this._activeTarget = null), void this._clear();
          for (let o = this._offsets.length; o--;) {
            this._activeTarget !== this._targets[o]
                && t >= this._offsets[o]
                && (typeof this._offsets[o + 1] === 'undefined'
                  || t < this._offsets[o + 1])
                && this._activate(this._targets[o]);
          }
        }
      }),
      (n._activate = function (t) {
        (this._activeTarget = t), this._clear();
        const n = this._selector.split(',').map((e) => (
          `${e}[data-target="${t}"],${e}[href="${t}"]`
        ));
        const i = e([].slice.call(document.querySelectorAll(n.join(','))));
        i.hasClass('dropdown-item')
          ? (i
            .closest('.dropdown')
            .find('.dropdown-toggle')
            .addClass('active'),
          i.addClass('active'))
          : (i.addClass('active'),
          i
            .parents('.nav, .list-group')
            .prev('.nav-link, .list-group-item')
            .addClass('active'),
          i
            .parents('.nav, .list-group')
            .prev('.nav-item')
            .children('.nav-link')
            .addClass('active')),
        e(this._scrollElement).trigger('activate.bs.scrollspy', {
          relatedTarget: t
        });
      }),
      (n._clear = function () {
        [].slice
          .call(document.querySelectorAll(this._selector))
          .filter((t) => t.classList.contains('active'))
          .forEach((t) => t.classList.remove('active'));
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          let i = e(this).data('bs.scrollspy');
          if (
            (i
                || ((i = new t(this, typeof n === 'object' && n)),
                e(this).data('bs.scrollspy', i)),
            typeof n === 'string')
          ) {
            if (typeof i[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            i[n]();
          }
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'Default',
          get() {
            return ue;
          }
        }
      ]),
      t
    );
  }());
  e(window).on('load.bs.scrollspy.data-api', () => {
    for (
      let t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        n = t.length;
      n--;

    ) {
      const i = e(t[n]);
      fe._jQueryInterface.call(i, i.data());
    }
  }),
  (e.fn[le] = fe._jQueryInterface),
  (e.fn[le].Constructor = fe),
  (e.fn[le].noConflict = function () {
    return (e.fn[le] = ce), fe._jQueryInterface;
  });
  const de = e.fn.tab;
  const pe = (function () {
    function t(t) {
      this._element = t;
    }
    const n = t.prototype;
    return (
      (n.show = function () {
        const t = this;
        if (
          !(
            (this._element.parentNode
                && this._element.parentNode.nodeType === Node.ELEMENT_NODE
                && e(this._element).hasClass('active'))
              || e(this._element).hasClass('disabled')
          )
        ) {
          let n;
          let i;
          const o = e(this._element).closest('.nav, .list-group')[0];
          const r = l.getSelectorFromElement(this._element);
          if (o) {
            const s = o.nodeName === 'UL' || o.nodeName === 'OL'
              ? '> li > .active'
              : '.active';
            i = (i = e.makeArray(e(o).find(s)))[i.length - 1];
          }
          const a = e.Event('hide.bs.tab', { relatedTarget: this._element });
          const c = e.Event('show.bs.tab', { relatedTarget: i });
          if (
            (i && e(i).trigger(a),
            e(this._element).trigger(c),
            !c.isDefaultPrevented() && !a.isDefaultPrevented())
          ) {
            r && (n = document.querySelector(r)),
            this._activate(this._element, o);
            const u = function () {
              const n = e.Event('hidden.bs.tab', { relatedTarget: t._element });
              const o = e.Event('shown.bs.tab', { relatedTarget: i });
              e(i).trigger(n), e(t._element).trigger(o);
            };
            n ? this._activate(n, n.parentNode, u) : u();
          }
        }
      }),
      (n.dispose = function () {
        e.removeData(this._element, 'bs.tab'), (this._element = null);
      }),
      (n._activate = function (t, n, i) {
        const o = this;
        const r = (!n || (n.nodeName !== 'UL' && n.nodeName !== 'OL')
          ? e(n).children('.active')
          : e(n).find('> li > .active'))[0];
        const s = i && r && e(r).hasClass('fade');
        const a = function () {
          return o._transitionComplete(t, r, i);
        };
        if (r && s) {
          const c = l.getTransitionDurationFromElement(r);
          e(r)
            .removeClass('show')
            .one(l.TRANSITION_END, a)
            .emulateTransitionEnd(c);
        } else a();
      }),
      (n._transitionComplete = function (t, n, i) {
        if (n) {
          e(n).removeClass('active');
          const o = e(n.parentNode).find('> .dropdown-menu .active')[0];
          o && e(o).removeClass('active'),
          n.getAttribute('role') === 'tab'
                && n.setAttribute('aria-selected', !1);
        }
        if (
          (e(t).addClass('active'),
          t.getAttribute('role') === 'tab'
              && t.setAttribute('aria-selected', !0),
          l.reflow(t),
          t.classList.contains('fade') && t.classList.add('show'),
          t.parentNode && e(t.parentNode).hasClass('dropdown-menu'))
        ) {
          const r = e(t).closest('.dropdown')[0];
          if (r) {
            const s = [].slice.call(r.querySelectorAll('.dropdown-toggle'));
            e(s).addClass('active');
          }
          t.setAttribute('aria-expanded', !0);
        }
        i && i();
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          const i = e(this);
          let o = i.data('bs.tab');
          if (
            (o || ((o = new t(this)), i.data('bs.tab', o)),
            typeof n === 'string')
          ) {
            if (typeof o[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            o[n]();
          }
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        }
      ]),
      t
    );
  }());
  e(document).on(
    'click.bs.tab.data-api',
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (t) {
      t.preventDefault(), pe._jQueryInterface.call(e(this), 'show');
    }
  ),
  (e.fn.tab = pe._jQueryInterface),
  (e.fn.tab.Constructor = pe),
  (e.fn.tab.noConflict = function () {
    return (e.fn.tab = de), pe._jQueryInterface;
  });
  const me = e.fn.toast;
  const ge = { animation: 'boolean', autohide: 'boolean', delay: 'number' };
  const ve = { animation: !0, autohide: !0, delay: 500 };
  const _e = (function () {
    function t(t, e) {
      (this._element = t),
      (this._config = this._getConfig(e)),
      (this._timeout = null),
      this._setListeners();
    }
    const n = t.prototype;
    return (
      (n.show = function () {
        const t = this;
        const n = e.Event('show.bs.toast');
        if ((e(this._element).trigger(n), !n.isDefaultPrevented())) {
          this._config.animation && this._element.classList.add('fade');
          const i = function () {
            t._element.classList.remove('showing'),
            t._element.classList.add('show'),
            e(t._element).trigger('shown.bs.toast'),
            t._config.autohide
                  && (t._timeout = setTimeout(() => {
                    t.hide();
                  }, t._config.delay));
          };
          if (
            (this._element.classList.remove('hide'),
            l.reflow(this._element),
            this._element.classList.add('showing'),
            this._config.animation)
          ) {
            const o = l.getTransitionDurationFromElement(this._element);
            e(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(o);
          } else i();
        }
      }),
      (n.hide = function () {
        if (this._element.classList.contains('show')) {
          const t = e.Event('hide.bs.toast');
          e(this._element).trigger(t),
          t.isDefaultPrevented() || this._close();
        }
      }),
      (n.dispose = function () {
        clearTimeout(this._timeout),
        (this._timeout = null),
        this._element.classList.contains('show')
              && this._element.classList.remove('show'),
        e(this._element).off('click.dismiss.bs.toast'),
        e.removeData(this._element, 'bs.toast'),
        (this._element = null),
        (this._config = null);
      }),
      (n._getConfig = function (t) {
        return (
          (t = s(
            s(s({}, ve), e(this._element).data()),
            typeof t === 'object' && t ? t : {}
          )),
          l.typeCheckConfig('toast', t, this.constructor.DefaultType),
          t
        );
      }),
      (n._setListeners = function () {
        const t = this;
        e(this._element).on(
          'click.dismiss.bs.toast',
          '[data-dismiss="toast"]',
          () => t.hide()
        );
      }),
      (n._close = function () {
        const t = this;
        const n = function () {
          t._element.classList.add('hide'),
          e(t._element).trigger('hidden.bs.toast');
        };
        if (
          (this._element.classList.remove('show'), this._config.animation)
        ) {
          const i = l.getTransitionDurationFromElement(this._element);
          e(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }),
      (t._jQueryInterface = function (n) {
        return this.each(function () {
          const i = e(this);
          let o = i.data('bs.toast');
          if (
            (o
                || ((o = new t(this, typeof n === 'object' && n)),
                i.data('bs.toast', o)),
            typeof n === 'string')
          ) {
            if (typeof o[n] === 'undefined') throw new TypeError(`No method named "${n}"`);
            o[n](this);
          }
        });
      }),
      i(t, null, [
        {
          key: 'VERSION',
          get() {
            return '4.5.0';
          }
        },
        {
          key: 'DefaultType',
          get() {
            return ge;
          }
        },
        {
          key: 'Default',
          get() {
            return ve;
          }
        }
      ]),
      t
    );
  }());
  (e.fn.toast = _e._jQueryInterface),
  (e.fn.toast.Constructor = _e),
  (e.fn.toast.noConflict = function () {
    return (e.fn.toast = me), _e._jQueryInterface;
  }),
  (t.Alert = h),
  (t.Button = d),
  (t.Carousel = y),
  (t.Collapse = S),
  (t.Dropdown = Ft),
  (t.Modal = qt),
  (t.Popover = ae),
  (t.Scrollspy = fe),
  (t.Tab = pe),
  (t.Toast = _e),
  (t.Tooltip = te),
  (t.Util = l),
  Object.defineProperty(t, '__esModule', { value: !0 });
}));
// # sourceMappingURL=bootstrap.bundle.min.js.map
