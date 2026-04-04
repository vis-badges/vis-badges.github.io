var zt = Object.defineProperty;
var Tt = (i, e, t) => e in i ? zt(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var q = (i, e, t) => Tt(i, typeof e != "symbol" ? e + "" : e, t);
function ce() {
}
function Pt(i, e) {
  for (const t in e) i[t] = e[t];
  return (
    /** @type {T & S} */
    i
  );
}
function ht(i) {
  return i();
}
function Le() {
  return /* @__PURE__ */ Object.create(null);
}
function ne(i) {
  i.forEach(ht);
}
function Ee(i) {
  return typeof i == "function";
}
function G(i, e) {
  return i != i ? e == e : i !== e || i && typeof i == "object" || typeof i == "function";
}
function Ct(i) {
  return Object.keys(i).length === 0;
}
function fe(i, e, t, n) {
  if (i) {
    const l = bt(i, e, t, n);
    return i[0](l);
  }
}
function bt(i, e, t, n) {
  return i[1] && n ? Pt(t.ctx.slice(), i[1](n(e))) : t.ctx;
}
function ue(i, e, t, n) {
  if (i[2] && n) {
    const l = i[2](n(t));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], s = Math.max(e.dirty.length, l.length);
      for (let f = 0; f < s; f += 1)
        r[f] = e.dirty[f] | l[f];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function de(i, e, t, n, l, r) {
  if (l) {
    const s = bt(e, t, n, r);
    i.p(s, l);
  }
}
function ge(i) {
  if (i.ctx.length > 32) {
    const e = [], t = i.ctx.length / 32;
    for (let n = 0; n < t; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function Dt(i) {
  return i && Ee(i.destroy) ? i.destroy : ce;
}
const jt = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function y(i, e) {
  i.appendChild(e);
}
function he(i, e, t) {
  const n = Ft(i);
  if (!n.getElementById(e)) {
    const l = C("style");
    l.id = e, l.textContent = t, It(n, l);
  }
}
function Ft(i) {
  if (!i) return document;
  const e = i.getRootNode ? i.getRootNode() : i.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : i.ownerDocument;
}
function It(i, e) {
  return y(
    /** @type {Document} */
    i.head || i,
    e
  ), e.sheet;
}
function w(i, e, t) {
  i.insertBefore(e, t || null);
}
function v(i) {
  i.parentNode && i.parentNode.removeChild(i);
}
function C(i) {
  return document.createElement(i);
}
function x(i) {
  return document.createElementNS("http://www.w3.org/2000/svg", i);
}
function Y(i) {
  return document.createTextNode(i);
}
function U() {
  return Y(" ");
}
function V() {
  return Y("");
}
function Q(i, e, t, n) {
  return i.addEventListener(e, t, n), () => i.removeEventListener(e, t, n);
}
function o(i, e, t) {
  t == null ? i.removeAttribute(e) : i.getAttribute(e) !== t && i.setAttribute(e, t);
}
function Nt(i) {
  return Array.from(i.childNodes);
}
function le(i, e) {
  e = "" + e, i.data !== e && (i.data = /** @type {string} */
  e);
}
function ye(i, e, t, n) {
  t == null ? i.style.removeProperty(e) : i.style.setProperty(e, t, "");
}
function At(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(i, { detail: e, bubbles: t, cancelable: n });
}
function Ot(i) {
  const e = {};
  return i.childNodes.forEach(
    /** @param {Element} node */
    (t) => {
      e[t.slot || "default"] = !0;
    }
  ), e;
}
let Se;
function xe(i) {
  Se = i;
}
function Et() {
  if (!Se) throw new Error("Function called outside component initialization");
  return Se;
}
function We() {
  const i = Et();
  return (e, t, { cancelable: n = !1 } = {}) => {
    const l = i.$$.callbacks[e];
    if (l) {
      const r = At(
        /** @type {string} */
        e,
        t,
        { cancelable: n }
      );
      return l.slice().forEach((s) => {
        s.call(i, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Ce(i, e) {
  const t = i.$$.callbacks[e.type];
  t && t.slice().forEach((n) => n.call(this, e));
}
const oe = [], Pe = [];
let ae = [];
const Ve = [], mt = /* @__PURE__ */ Promise.resolve();
let Ae = !1;
function pt() {
  Ae || (Ae = !0, mt.then(b));
}
function Wt() {
  return pt(), mt;
}
function Oe(i) {
  ae.push(i);
}
const Ne = /* @__PURE__ */ new Set();
let re = 0;
function b() {
  if (re !== 0)
    return;
  const i = Se;
  do {
    try {
      for (; re < oe.length; ) {
        const e = oe[re];
        re++, xe(e), Lt(e.$$);
      }
    } catch (e) {
      throw oe.length = 0, re = 0, e;
    }
    for (xe(null), oe.length = 0, re = 0; Pe.length; ) Pe.pop()();
    for (let e = 0; e < ae.length; e += 1) {
      const t = ae[e];
      Ne.has(t) || (Ne.add(t), t());
    }
    ae.length = 0;
  } while (oe.length);
  for (; Ve.length; )
    Ve.pop()();
  Ae = !1, Ne.clear(), xe(i);
}
function Lt(i) {
  if (i.fragment !== null) {
    i.update(), ne(i.before_update);
    const e = i.dirty;
    i.dirty = [-1], i.fragment && i.fragment.p(i.ctx, e), i.after_update.forEach(Oe);
  }
}
function Vt(i) {
  const e = [], t = [];
  ae.forEach((n) => i.indexOf(n) === -1 ? e.push(n) : t.push(n)), t.forEach((n) => n()), ae = e;
}
const ze = /* @__PURE__ */ new Set();
let ie;
function R() {
  ie = {
    r: 0,
    c: [],
    p: ie
    // parent group
  };
}
function H() {
  ie.r || ne(ie.c), ie = ie.p;
}
function B(i, e) {
  i && i.i && (ze.delete(i), i.i(e));
}
function T(i, e, t, n) {
  if (i && i.o) {
    if (ze.has(i)) return;
    ze.add(i), ie.c.push(() => {
      ze.delete(i), n && (t && i.d(1), n());
    }), i.o(e);
  } else n && n();
}
function Re(i) {
  return (i == null ? void 0 : i.length) !== void 0 ? i : Array.from(i);
}
function Rt(i, e) {
  i.d(1), e.delete(i.key);
}
function Ht(i, e, t, n, l, r, s, f, a, c, u, h) {
  let g = i.length, d = r.length, p = g;
  const z = {};
  for (; p--; ) z[i[p].key] = p;
  const S = [], M = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), O = [];
  for (p = d; p--; ) {
    const I = h(l, r, p), _ = t(I);
    let j = s.get(_);
    j ? O.push(() => j.p(I, e)) : (j = c(_, I), j.c()), M.set(_, S[p] = j), _ in z && m.set(_, Math.abs(p - z[_]));
  }
  const N = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set();
  function D(I) {
    B(I, 1), I.m(f, u), s.set(I.key, I), u = I.first, d--;
  }
  for (; g && d; ) {
    const I = S[d - 1], _ = i[g - 1], j = I.key, P = _.key;
    I === _ ? (u = I.first, g--, d--) : M.has(P) ? !s.has(j) || N.has(j) ? D(I) : F.has(P) ? g-- : m.get(j) > m.get(P) ? (F.add(j), D(I)) : (N.add(P), g--) : (a(_, s), g--);
  }
  for (; g--; ) {
    const I = i[g];
    M.has(I.key) || a(I, s);
  }
  for (; d; ) D(S[d - 1]);
  return ne(O), S;
}
function L(i) {
  i && i.c();
}
function E(i, e, t) {
  const { fragment: n, after_update: l } = i.$$;
  n && n.m(e, t), Oe(() => {
    const r = i.$$.on_mount.map(ht).filter(Ee);
    i.$$.on_destroy ? i.$$.on_destroy.push(...r) : ne(r), i.$$.on_mount = [];
  }), l.forEach(Oe);
}
function W(i, e) {
  const t = i.$$;
  t.fragment !== null && (Vt(t.after_update), ne(t.on_destroy), t.fragment && t.fragment.d(e), t.on_destroy = t.fragment = null, t.ctx = []);
}
function $t(i, e) {
  i.$$.dirty[0] === -1 && (oe.push(i), pt(), i.$$.dirty.fill(0)), i.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function X(i, e, t, n, l, r, s = null, f = [-1]) {
  const a = Se;
  xe(i);
  const c = i.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: ce,
    not_equal: l,
    bound: Le(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: Le(),
    dirty: f,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(c.root);
  let u = !1;
  if (c.ctx = t ? t(i, e.props || {}, (h, g, ...d) => {
    const p = d.length ? d[0] : g;
    return c.ctx && l(c.ctx[h], c.ctx[h] = p) && (!c.skip_bound && c.bound[h] && c.bound[h](p), u && $t(i, h)), g;
  }) : [], c.update(), u = !0, ne(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = Nt(e.target);
      c.fragment && c.fragment.l(h), h.forEach(v);
    } else
      c.fragment && c.fragment.c();
    e.intro && B(i.$$.fragment), E(i, e.target, e.anchor), b();
  }
  xe(a);
}
let _t;
typeof HTMLElement == "function" && (_t = class extends HTMLElement {
  constructor(e, t, n) {
    super();
    /** The Svelte component constructor */
    q(this, "$$ctor");
    /** Slots */
    q(this, "$$s");
    /** The Svelte component instance */
    q(this, "$$c");
    /** Whether or not the custom element is connected */
    q(this, "$$cn", !1);
    /** Component props data */
    q(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    q(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    q(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    q(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    q(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const l = this.$$c.$on(e, t);
      this.$$l_u.set(t, l);
    }
    super.addEventListener(e, t, n);
  }
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const l = this.$$l_u.get(t);
      l && (l(), this.$$l_u.delete(t));
    }
    if (this.$$l[e]) {
      const l = this.$$l[e].indexOf(t);
      l >= 0 && this.$$l[e].splice(l, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let f;
          return {
            c: function() {
              f = C("slot"), s !== "default" && o(f, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, h) {
              w(u, f, h);
            },
            d: function(u) {
              u && v(f);
            }
          };
        };
      };
      var e = t;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, l = Ot(this);
      for (const s of this.$$s)
        s in l && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const f = this.$$g_p(s.name);
        f in this.$$d || (this.$$d[f] = Te(f, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const r = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const f = Te(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, f);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(r), r();
      for (const s in this.$$l)
        for (const f of this.$$l[s]) {
          const a = this.$$c.$on(s, f);
          this.$$l_u.set(f, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(e, t, n) {
    var l;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Te(e, n, this.$$p_d, "toProp"), (l = this.$$c) == null || l.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(e) {
    return Object.keys(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Te(i, e, t, n) {
  var r;
  const l = (r = t[i]) == null ? void 0 : r.type;
  if (e = l === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !t[i])
    return e;
  if (n === "toAttribute")
    switch (l) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (l) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function J(i, e, t, n, l, r) {
  let s = class extends _t {
    constructor() {
      super(i, t, l), this.$$p_d = e;
    }
    static get observedAttributes() {
      return Object.keys(e).map(
        (f) => (e[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(e).forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(a) {
        var c;
        a = Te(f, a, e), this.$$d[f] = a, (c = this.$$c) == null || c.$set({ [f]: a });
      }
    });
  }), n.forEach((f) => {
    Object.defineProperty(s.prototype, f, {
      get() {
        var a;
        return (a = this.$$c) == null ? void 0 : a[f];
      }
    });
  }), i.element = /** @type {any} */
  s, s;
}
class K {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    q(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    q(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    W(this, 1), this.$destroy = ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, t) {
    if (!Ee(t))
      return ce;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const l = n.indexOf(t);
      l !== -1 && n.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ct(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Zt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Zt);
const { window: He } = jt;
function qt(i) {
  he(i, "svelte-17syhza", ".tooltipWrap.svelte-17syhza{position:relative;display:inline-flex;align-items:center}.trigger.svelte-17syhza{display:inline-flex;align-items:center}.content.svelte-17syhza{display:block;width:100%}");
}
const Ut = (i) => ({}), $e = (i) => ({}), Gt = (i) => ({}), Ze = (i) => ({});
function Yt(i) {
  let e, t, n, l, r, s, f, a, c, u, h, g;
  const d = (
    /*#slots*/
    i[14].trigger
  ), p = fe(
    d,
    i,
    /*$$scope*/
    i[13],
    Ze
  ), z = (
    /*#slots*/
    i[14].content
  ), S = fe(
    z,
    i,
    /*$$scope*/
    i[13],
    $e
  );
  return {
    c() {
      e = C("span"), t = C("span"), p && p.c(), n = U(), l = C("span"), r = C("div"), S && S.c(), s = U(), f = C("span"), o(t, "class", "trigger svelte-17syhza"), o(r, "class", "content svelte-17syhza"), o(f, "class", "bl_tooltipArrow"), o(f, "aria-hidden", "true"), o(
        f,
        "style",
        /*arrowStyle*/
        i[6]
      ), o(l, "class", "bl_tooltip"), o(l, "role", "tooltip"), o(l, "aria-hidden", a = !/*open*/
      i[1]), o(
        l,
        "data-open",
        /*open*/
        i[1]
      ), o(
        l,
        "data-placement",
        /*effectivePlacement*/
        i[4]
      ), o(l, "style", c = `${/*tooltipStyle*/
      i[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        i[0]
      )}px;`), o(e, "class", "tooltipWrap svelte-17syhza"), o(e, "role", "group");
    },
    m(M, m) {
      w(M, e, m), y(e, t), p && p.m(t, null), i[15](t), y(e, n), y(e, l), y(l, r), S && S.m(r, null), y(l, s), y(l, f), i[16](l), u = !0, h || (g = [
        Q(
          He,
          "resize",
          /*onWindowChange*/
          i[10]
        ),
        Q(
          He,
          "scroll",
          /*onWindowChange*/
          i[10]
        ),
        Dt(
          /*portalToBody*/
          i[7].call(null, l)
        ),
        Q(
          e,
          "mouseenter",
          /*onEnter*/
          i[8]
        ),
        Q(
          e,
          "mouseleave",
          /*onLeave*/
          i[9]
        ),
        Q(
          e,
          "focusin",
          /*onEnter*/
          i[8]
        ),
        Q(
          e,
          "focusout",
          /*onLeave*/
          i[9]
        )
      ], h = !0);
    },
    p(M, [m]) {
      p && p.p && (!u || m & /*$$scope*/
      8192) && de(
        p,
        d,
        M,
        /*$$scope*/
        M[13],
        u ? ue(
          d,
          /*$$scope*/
          M[13],
          m,
          Gt
        ) : ge(
          /*$$scope*/
          M[13]
        ),
        Ze
      ), S && S.p && (!u || m & /*$$scope*/
      8192) && de(
        S,
        z,
        M,
        /*$$scope*/
        M[13],
        u ? ue(
          z,
          /*$$scope*/
          M[13],
          m,
          Ut
        ) : ge(
          /*$$scope*/
          M[13]
        ),
        $e
      ), (!u || m & /*arrowStyle*/
      64) && o(
        f,
        "style",
        /*arrowStyle*/
        M[6]
      ), (!u || m & /*open*/
      2 && a !== (a = !/*open*/
      M[1])) && o(l, "aria-hidden", a), (!u || m & /*open*/
      2) && o(
        l,
        "data-open",
        /*open*/
        M[1]
      ), (!u || m & /*effectivePlacement*/
      16) && o(
        l,
        "data-placement",
        /*effectivePlacement*/
        M[4]
      ), (!u || m & /*tooltipStyle, maxWidthPx*/
      33 && c !== (c = `${/*tooltipStyle*/
      M[5]}--bl-tooltip-max-width:${Math.max(
        120,
        /*maxWidthPx*/
        M[0]
      )}px;`)) && o(l, "style", c);
    },
    i(M) {
      u || (B(p, M), B(S, M), u = !0);
    },
    o(M) {
      T(p, M), T(S, M), u = !1;
    },
    d(M) {
      M && v(e), p && p.d(M), i[15](null), S && S.d(M), i[16](null), h = !1, ne(g);
    }
  };
}
const ee = 10, te = 8, qe = "badge-lib-tooltip-global-v2";
function Me(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Xt(i, e, t) {
  const n = window.innerWidth, l = window.innerHeight, r = e.top - ee - t.height >= te, s = e.bottom + ee + t.height <= l - te, f = e.left - ee - t.width >= te, a = e.right + ee + t.width <= n - te;
  return i === "top" && !r && s ? "bottom" : i === "bottom" && !s && r ? "top" : i === "left" && !f && a ? "right" : i === "right" && !a && f ? "left" : i;
}
function Jt(i, e, t) {
  let { $$slots: n = {}, $$scope: l } = e, { placement: r = "top" } = e, { openDelayMs: s = 80 } = e, { maxWidthPx: f = 280 } = e, a = !1, c = null, u = null, h = null, g = r, d = "", p = "";
  const z = `
.bl_tooltip {
  display: block;
  position: fixed;
  z-index: var(--vis-badge-tooltip-z-index, 2000);
  width: max-content;
  max-width: min(var(--bl-tooltip-max-width, 280px), 64vw);
  padding: var(--vis-badge-tooltip-padding, 7px 9px);
  border-radius: var(--vis-badge-tooltip-radius, 9px);
  border: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  color: var(--vis-badge-tooltip-fg, #ffffff);
  box-shadow: var(--vis-badge-tooltip-shadow, 0 10px 24px rgba(17, 24, 39, 0.2));
  font-family: var(
    --vis-badge-tooltip-font-family,
    ui-sans-serif,
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    sans-serif
  );
  font-size: var(--vis-badge-tooltip-font-size, 13px);
  line-height: var(--vis-badge-tooltip-line-height, 1.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px);
  pointer-events: none;
  transition: opacity 180ms ease, transform 180ms ease;
}

.bl_tooltip[data-open='true'] {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.bl_tooltipArrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--vis-badge-tooltip-bg, rgba(17, 24, 39, 0.96));
  border-left: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  border-top: 1px solid var(--vis-badge-tooltip-border, rgba(17, 24, 39, 0.14));
  transform: rotate(45deg);
}

.bl_tooltip[data-placement='top'] .bl_tooltipArrow {
  bottom: -4px;
}

.bl_tooltip[data-placement='bottom'] .bl_tooltipArrow {
  top: -4px;
  transform: rotate(225deg);
}

.bl_tooltip[data-placement='left'] .bl_tooltipArrow {
  right: -4px;
  transform: rotate(135deg);
}

.bl_tooltip[data-placement='right'] .bl_tooltipArrow {
  left: -4px;
  transform: rotate(-45deg);
}

.bl_tooltipContent {
  display: grid;
  row-gap: 4px;
  width: 100%;
  text-align: center;
}

.bl_tooltipDesc {
  display: block;
  text-align: left;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.bl_tooltipActionHint {
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 0px;
  opacity: 1;
}

.bl_tooltipActionRow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 1;
}

.bl_tooltipActionText {
  display: inline-block;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.015em;
  opacity: 0.92;
  white-space: pre-line;
  overflow-wrap: anywhere;
  line-height: 1.15;
}

.bl_tooltipActionIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 13px;
  width: 13px;
  height: 13px;
  line-height: 0;
}

.bl_tooltipActionIcon svg {
  display: block;
  width: 13px;
  height: 13px;
}
`;
  function S() {
    if (typeof document > "u") return;
    const _ = document.getElementById(qe);
    if (_) {
      _.textContent !== z && (_.textContent = z);
      return;
    }
    const j = document.createElement("style");
    j.id = qe, j.textContent = z, document.head.appendChild(j);
  }
  function M(_) {
    if (S(), !(typeof document > "u"))
      return document.body.appendChild(_), {
        destroy() {
          _.remove();
        }
      };
  }
  function m() {
    c && clearTimeout(c), c = setTimeout(() => t(1, a = !0), s);
  }
  function O() {
    c && clearTimeout(c), c = null, t(1, a = !1);
  }
  async function N() {
    if (!a || !u || !h) return;
    await Wt();
    const _ = u.getBoundingClientRect(), j = h.getBoundingClientRect(), P = window.innerWidth, me = window.innerHeight;
    t(4, g = Xt(r, _, j));
    let $ = 0, Z = 0;
    g === "top" ? (Z = _.top - ee - j.height, $ = _.left + _.width / 2 - j.width / 2) : g === "bottom" ? (Z = _.bottom + ee, $ = _.left + _.width / 2 - j.width / 2) : g === "left" ? (Z = _.top + _.height / 2 - j.height / 2, $ = _.left - ee - j.width) : (Z = _.top + _.height / 2 - j.height / 2, $ = _.right + ee), $ = Me($, te, P - j.width - te), Z = Me(Z, te, me - j.height - te);
    const pe = _.left + _.width / 2, _e = _.top + _.height / 2, ve = Me(pe - $ - 4, 10, j.width - 10), ke = Me(_e - Z - 4, 10, j.height - 10);
    t(6, p = g === "top" || g === "bottom" ? `left:${ve}px;` : `top:${ke}px;`), t(5, d = `left:${Math.round($)}px;top:${Math.round(Z)}px;`);
  }
  function F() {
    N();
  }
  function D(_) {
    Pe[_ ? "unshift" : "push"](() => {
      u = _, t(2, u);
    });
  }
  function I(_) {
    Pe[_ ? "unshift" : "push"](() => {
      h = _, t(3, h);
    });
  }
  return i.$$set = (_) => {
    "placement" in _ && t(11, r = _.placement), "openDelayMs" in _ && t(12, s = _.openDelayMs), "maxWidthPx" in _ && t(0, f = _.maxWidthPx), "$$scope" in _ && t(13, l = _.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*open*/
    2 && a && N(), i.$$.dirty & /*open, placement*/
    2050 && (a || (t(5, d = ""), t(6, p = ""), t(4, g = r)));
  }, [
    f,
    a,
    u,
    h,
    g,
    d,
    p,
    M,
    m,
    O,
    F,
    r,
    s,
    l,
    n,
    D,
    I
  ];
}
class vt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      Jt,
      Yt,
      G,
      {
        placement: 11,
        openDelayMs: 12,
        maxWidthPx: 0
      },
      qt
    );
  }
  get placement() {
    return this.$$.ctx[11];
  }
  set placement(e) {
    this.$$set({ placement: e }), b();
  }
  get openDelayMs() {
    return this.$$.ctx[12];
  }
  set openDelayMs(e) {
    this.$$set({ openDelayMs: e }), b();
  }
  get maxWidthPx() {
    return this.$$.ctx[0];
  }
  set maxWidthPx(e) {
    this.$$set({ maxWidthPx: e }), b();
  }
}
J(vt, { placement: {}, openDelayMs: {}, maxWidthPx: {} }, ["trigger", "content"], [], !0);
function Kt(i) {
  let e;
  return {
    c() {
      e = C("span"), ye(e, "display", "inline-block"), ye(
        e,
        "width",
        /*size*/
        i[1] + "px"
      ), ye(
        e,
        "height",
        /*size*/
        i[1] + "px"
      ), o(e, "aria-hidden", "true");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*size*/
      2 && ye(
        e,
        "width",
        /*size*/
        t[1] + "px"
      ), n & /*size*/
      2 && ye(
        e,
        "height",
        /*size*/
        t[1] + "px"
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Qt(i) {
  let e, t, n, l, r, s, f = (
    /*bg*/
    i[2] && Ue(i)
  );
  return {
    c() {
      e = x("svg"), f && f.c(), t = x("g"), n = x("path"), l = x("path"), r = x("path"), o(n, "d", "M15 3h6v6"), o(l, "d", "M10 14 21 3"), o(r, "d", "M21 13v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      w(a, e, c), f && f.m(e, null), y(e, t), y(t, n), y(t, l), y(t, r);
    },
    p(a, c) {
      /*bg*/
      a[2] ? f ? f.p(a, c) : (f = Ue(a), f.c(), f.m(e, t)) : f && (f.d(1), f = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      ), c & /*fg*/
      8 && s !== (s = /*fg*/
      a[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(a) {
      a && v(e), f && f.d();
    }
  };
}
function ei(i) {
  let e, t, n, l, r, s, f = (
    /*bg*/
    i[2] && Ge(i)
  );
  return {
    c() {
      e = x("svg"), f && f.c(), t = x("g"), n = x("path"), l = x("path"), r = x("path"), o(n, "d", "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"), o(l, "d", "M7 10l5 5 5-5"), o(r, "d", "M12 15V3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(a, c) {
      w(a, e, c), f && f.m(e, null), y(e, t), y(t, n), y(t, l), y(t, r);
    },
    p(a, c) {
      /*bg*/
      a[2] ? f ? f.p(a, c) : (f = Ge(a), f.c(), f.m(e, t)) : f && (f.d(1), f = null), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      ), c & /*fg*/
      8 && s !== (s = /*fg*/
      a[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(a) {
      a && v(e), f && f.d();
    }
  };
}
function ti(i) {
  let e, t, n, l, r, s;
  return {
    c() {
      e = x("svg"), t = x("g"), n = x("path"), r = x("path"), o(n, "d", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"), o(n, "fill", l = /*bg*/
      i[2] ?? "none"), o(
        n,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(r, "d", "m9 12 2 2 4-4"), o(t, "transform", "translate(12 12) scale(0.86) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(f, a) {
      w(f, e, a), y(e, t), y(t, n), y(t, r);
    },
    p(f, a) {
      a & /*bg*/
      4 && l !== (l = /*bg*/
      f[2] ?? "none") && o(n, "fill", l), a & /*bgOpacity*/
      16 && o(
        n,
        "opacity",
        /*bgOpacity*/
        f[4]
      ), a & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), a & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      ), a & /*fg*/
      8 && s !== (s = /*fg*/
      f[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(f) {
      f && v(e);
    }
  };
}
function ii(i) {
  let e, t, n, l, r, s;
  function f(u, h) {
    return (
      /*bg*/
      u[2] ? hi : gi
    );
  }
  let a = f(i), c = a(i);
  return {
    c() {
      e = x("svg"), c.c(), t = x("g"), n = x("ellipse"), l = x("path"), r = x("path"), o(n, "cx", "12"), o(n, "cy", "5"), o(n, "rx", "9"), o(n, "ry", "3"), o(l, "d", "M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"), o(r, "d", "M3 12c0 1.7 4 3 9 3s9-1.3 9-3"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", s = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(u, h) {
      w(u, e, h), c.m(e, null), y(e, t), y(t, n), y(t, l), y(t, r);
    },
    p(u, h) {
      a === (a = f(u)) && c ? c.p(u, h) : (c.d(1), c = a(u), c && (c.c(), c.m(e, t))), h & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        u[1]
      ), h & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        u[1]
      ), h & /*fg*/
      8 && s !== (s = /*fg*/
      u[3] ?? "currentColor") && o(e, "stroke", s);
    },
    d(u) {
      u && v(e), c.d();
    }
  };
}
function ni(i) {
  let e, t, n, l, r, s, f;
  function a(h, g) {
    return (
      /*bg*/
      h[2] ? _i : pi
    );
  }
  let c = a(i), u = c(i);
  return {
    c() {
      e = x("svg"), u.c(), t = x("g"), n = x("polyline"), l = x("polyline"), r = x("line"), s = x("line"), o(n, "points", "15 3 21 3 21 9"), o(l, "points", "9 21 3 21 3 15"), o(r, "x1", "21"), o(r, "y1", "3"), o(r, "x2", "14"), o(r, "y2", "10"), o(s, "x1", "3"), o(s, "y1", "21"), o(s, "x2", "10"), o(s, "y2", "14"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", f = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(h, g) {
      w(h, e, g), u.m(e, null), y(e, t), y(t, n), y(t, l), y(t, r), y(t, s);
    },
    p(h, g) {
      c === (c = a(h)) && u ? u.p(h, g) : (u.d(1), u = c(h), u && (u.c(), u.m(e, t))), g & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        h[1]
      ), g & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        h[1]
      ), g & /*fg*/
      8 && f !== (f = /*fg*/
      h[3] ?? "currentColor") && o(e, "stroke", f);
    },
    d(h) {
      h && v(e), u.d();
    }
  };
}
function li(i) {
  let e, t, n, l, r, s, f, a;
  function c(g, d) {
    return (
      /*bg*/
      g[2] ? wi : yi
    );
  }
  let u = c(i), h = u(i);
  return {
    c() {
      e = x("svg"), h.c(), t = x("g"), n = x("path"), l = x("path"), r = x("path"), s = x("path"), f = x("path"), o(n, "d", "M14 4.1 12 6"), o(l, "d", "m5.1 8-2.9-.8"), o(r, "d", "m6 12-1.9 2"), o(s, "d", "M7.2 2.2 8 5.1"), o(f, "d", "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"), o(t, "transform", "translate(12 12) scale(0.68) translate(-12 -12)"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true"), o(e, "stroke", a = /*fg*/
      i[3] ?? "currentColor"), o(e, "stroke-width", "2"), o(e, "stroke-linecap", "round"), o(e, "stroke-linejoin", "round");
    },
    m(g, d) {
      w(g, e, d), h.m(e, null), y(e, t), y(t, n), y(t, l), y(t, r), y(t, s), y(t, f);
    },
    p(g, d) {
      u === (u = c(g)) && h ? h.p(g, d) : (h.d(1), h = u(g), h && (h.c(), h.m(e, t))), d & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        g[1]
      ), d & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        g[1]
      ), d & /*fg*/
      8 && a !== (a = /*fg*/
      g[3] ?? "currentColor") && o(e, "stroke", a);
    },
    d(g) {
      g && v(e), h.d();
    }
  };
}
function ri(i) {
  let e, t, n, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? Mi : Bi
    );
  }
  let f = s(i), a = f(i);
  return {
    c() {
      e = x("svg"), a.c(), t = x("path"), l = x("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      w(c, e, u), a.m(e, null), y(e, t), y(e, l);
    },
    p(c, u) {
      f === (f = s(c)) && a ? a.p(c, u) : (a.d(1), a = f(c), a && (a.c(), a.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      );
    },
    d(c) {
      c && v(e), a.d();
    }
  };
}
function oi(i) {
  let e, t, n, l, r;
  function s(c, u) {
    return (
      /*bg*/
      c[2] ? Ci : Pi
    );
  }
  let f = s(i), a = f(i);
  return {
    c() {
      e = x("svg"), a.c(), t = x("path"), l = x("path"), o(t, "d", "M12 10.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(l, "d", "M11 11.5h2V18h-2v-6.5Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      w(c, e, u), a.m(e, null), y(e, t), y(e, l);
    },
    p(c, u) {
      f === (f = s(c)) && a ? a.p(c, u) : (a.d(1), a = f(c), a && (a.c(), a.m(e, t))), u & /*fg*/
      8 && n !== (n = /*fg*/
      c[3] ?? "currentColor") && o(t, "fill", n), u & /*fg*/
      8 && r !== (r = /*fg*/
      c[3] ?? "currentColor") && o(l, "fill", r), u & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        c[1]
      ), u & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        c[1]
      );
    },
    d(c) {
      c && v(e), a.d();
    }
  };
}
function si(i) {
  let e, t, n, l, r, s, f;
  return {
    c() {
      e = x("svg"), t = x("path"), l = x("path"), s = x("path"), o(t, "d", "M12 3.5c.4 0 .8.2 1 .6l9 15.6c.4.7-.1 1.6-1 1.6H3c-.9 0-1.4-.9-1-1.6l9-15.6c.2-.4.6-.6 1-.6Z"), o(t, "fill", n = /*bg*/
      i[2] ?? "currentColor"), o(
        t,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(l, "d", "M12 8a1 1 0 0 1 1 1l-.3 5.5a.7.7 0 0 1-1.4 0L11 9a1 1 0 0 1 1-1Z"), o(l, "fill", r = /*fg*/
      i[3] ?? "currentColor"), o(s, "d", "M12 18a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 18Z"), o(s, "fill", f = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(a, c) {
      w(a, e, c), y(e, t), y(e, l), y(e, s);
    },
    p(a, c) {
      c & /*bg*/
      4 && n !== (n = /*bg*/
      a[2] ?? "currentColor") && o(t, "fill", n), c & /*bgOpacity*/
      16 && o(
        t,
        "opacity",
        /*bgOpacity*/
        a[4]
      ), c & /*fg*/
      8 && r !== (r = /*fg*/
      a[3] ?? "currentColor") && o(l, "fill", r), c & /*fg*/
      8 && f !== (f = /*fg*/
      a[3] ?? "currentColor") && o(s, "fill", f), c & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        a[1]
      ), c & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        a[1]
      );
    },
    d(a) {
      a && v(e);
    }
  };
}
function ai(i) {
  let e, t, n;
  function l(f, a) {
    return (
      /*bg*/
      f[2] ? Ii : Fi
    );
  }
  let r = l(i), s = r(i);
  return {
    c() {
      e = x("svg"), s.c(), t = x("path"), o(t, "d", "M9.2 12.5 7.5 10.8a1 1 0 0 0-1.4 1.4l2.4 2.4a1 1 0 0 0 1.4 0l7-7a1 1 0 1 0-1.4-1.4l-6.3 6.3Z"), o(t, "fill", n = /*fg*/
      i[3] ?? "currentColor"), o(
        e,
        "width",
        /*size*/
        i[1]
      ), o(
        e,
        "height",
        /*size*/
        i[1]
      ), o(e, "viewBox", "0 0 24 24"), o(e, "fill", "none"), o(e, "aria-hidden", "true");
    },
    m(f, a) {
      w(f, e, a), s.m(e, null), y(e, t);
    },
    p(f, a) {
      r === (r = l(f)) && s ? s.p(f, a) : (s.d(1), s = r(f), s && (s.c(), s.m(e, t))), a & /*fg*/
      8 && n !== (n = /*fg*/
      f[3] ?? "currentColor") && o(t, "fill", n), a & /*size*/
      2 && o(
        e,
        "width",
        /*size*/
        f[1]
      ), a & /*size*/
      2 && o(
        e,
        "height",
        /*size*/
        f[1]
      );
    },
    d(f) {
      f && v(e), s.d();
    }
  };
}
function Ue(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? fi : ci
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ci(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function fi(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ge(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? di : ui
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function ui(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function di(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function gi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function hi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? mi : bi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function bi(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function mi(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function pi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function _i(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ki : vi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function vi(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ki(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function yi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function wi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Si : xi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function xi(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Si(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      ), o(e, "stroke", "none");
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Bi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Mi(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Ti : zi
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function zi(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ti(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Pi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M3 3h18v18H3V3Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ci(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? ji : Di
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Di(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function ji(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Fi(i) {
  let e;
  return {
    c() {
      e = x("path"), o(e, "d", "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"), o(e, "fill", "currentColor"), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ii(i) {
  let e;
  function t(r, s) {
    return (
      /*bgShape*/
      r[5] === "square" ? Ai : Ni
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, s) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Ni(i) {
  let e;
  return {
    c() {
      e = x("circle"), o(e, "cx", "12"), o(e, "cy", "12"), o(e, "r", "10"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Ai(i) {
  let e;
  return {
    c() {
      e = x("rect"), o(e, "x", "3"), o(e, "y", "3"), o(e, "width", "18"), o(e, "height", "18"), o(e, "rx", "0"), o(
        e,
        "fill",
        /*bg*/
        i[2]
      ), o(
        e,
        "opacity",
        /*bgOpacity*/
        i[4]
      );
    },
    m(t, n) {
      w(t, e, n);
    },
    p(t, n) {
      n & /*bg*/
      4 && o(
        e,
        "fill",
        /*bg*/
        t[2]
      ), n & /*bgOpacity*/
      16 && o(
        e,
        "opacity",
        /*bgOpacity*/
        t[4]
      );
    },
    d(t) {
      t && v(e);
    }
  };
}
function Oi(i) {
  let e;
  function t(r, s) {
    return (
      /*name*/
      r[0] === "Confirmation" ? ai : (
        /*name*/
        r[0] === "Warning" ? si : (
          /*name*/
          r[0] === "Info" ? oi : (
            /*name*/
            r[0] === "InfoCircle" ? ri : (
              /*name*/
              r[0] === "Interactive" ? li : (
                /*name*/
                r[0] === "Expand" ? ni : (
                  /*name*/
                  r[0] === "OpenData" ? ii : (
                    /*name*/
                    r[0] === "badge-check" ? ti : (
                      /*name*/
                      r[0] === "Download" ? ei : (
                        /*name*/
                        r[0] === "ExternalLink" ? Qt : Kt
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  }
  let n = t(i), l = n(i);
  return {
    c() {
      l.c(), e = V();
    },
    m(r, s) {
      l.m(r, s), w(r, e, s);
    },
    p(r, [s]) {
      n === (n = t(r)) && l ? l.p(r, s) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: ce,
    o: ce,
    d(r) {
      r && v(e), l.d(r);
    }
  };
}
function Ei(i, e, t) {
  let { name: n } = e, { size: l = 0 } = e, { bg: r = null } = e, { fg: s = null } = e, { bgOpacity: f = 0.14 } = e, { bgShape: a = "round" } = e;
  return i.$$set = (c) => {
    "name" in c && t(0, n = c.name), "size" in c && t(1, l = c.size), "bg" in c && t(2, r = c.bg), "fg" in c && t(3, s = c.fg), "bgOpacity" in c && t(4, f = c.bgOpacity), "bgShape" in c && t(5, a = c.bgShape);
  }, [n, l, r, s, f, a];
}
class be extends K {
  constructor(e) {
    super(), X(this, e, Ei, Oi, G, {
      name: 0,
      size: 1,
      bg: 2,
      fg: 3,
      bgOpacity: 4,
      bgShape: 5
    });
  }
  get name() {
    return this.$$.ctx[0];
  }
  set name(e) {
    this.$$set({ name: e }), b();
  }
  get size() {
    return this.$$.ctx[1];
  }
  set size(e) {
    this.$$set({ size: e }), b();
  }
  get bg() {
    return this.$$.ctx[2];
  }
  set bg(e) {
    this.$$set({ bg: e }), b();
  }
  get fg() {
    return this.$$.ctx[3];
  }
  set fg(e) {
    this.$$set({ fg: e }), b();
  }
  get bgOpacity() {
    return this.$$.ctx[4];
  }
  set bgOpacity(e) {
    this.$$set({ bgOpacity: e }), b();
  }
  get bgShape() {
    return this.$$.ctx[5];
  }
  set bgShape(e) {
    this.$$set({ bgShape: e }), b();
  }
}
J(be, { name: {}, size: {}, bg: {}, fg: {}, bgOpacity: {}, bgShape: {} }, [], [], !0);
function Wi(i) {
  he(i, "svelte-13r27b2", ".triggerButton.svelte-13r27b2{all:unset;display:inline-flex;align-items:center}.interactive.svelte-13r27b2{cursor:pointer}");
}
const Li = (i) => ({}), Ye = (i) => ({}), Vi = (i) => ({}), Xe = (i) => ({}), Ri = (i) => ({}), Je = (i) => ({}), Hi = (i) => ({}), Ke = (i) => ({});
function $i(i) {
  let e, t;
  const n = (
    /*#slots*/
    i[11].trigger
  ), l = fe(
    n,
    i,
    /*$$scope*/
    i[12],
    Ye
  );
  return {
    c() {
      e = C("span"), l && l.c();
    },
    m(r, s) {
      w(r, e, s), l && l.m(e, null), t = !0;
    },
    p(r, s) {
      l && l.p && (!t || s & /*$$scope*/
      4096) && de(
        l,
        n,
        r,
        /*$$scope*/
        r[12],
        t ? ue(
          n,
          /*$$scope*/
          r[12],
          s,
          Li
        ) : ge(
          /*$$scope*/
          r[12]
        ),
        Ye
      );
    },
    i(r) {
      t || (B(l, r), t = !0);
    },
    o(r) {
      T(l, r), t = !1;
    },
    d(r) {
      r && v(e), l && l.d(r);
    }
  };
}
function Zi(i) {
  let e, t, n, l, r;
  const s = (
    /*#slots*/
    i[11].trigger
  ), f = fe(
    s,
    i,
    /*$$scope*/
    i[12],
    Xe
  );
  return {
    c() {
      var a;
      e = C("button"), f && f.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (a = i[0]) == null ? void 0 : a.label);
    },
    m(a, c) {
      w(a, e, c), f && f.m(e, null), n = !0, l || (r = Q(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(a, c) {
      var u;
      f && f.p && (!n || c & /*$$scope*/
      4096) && de(
        f,
        s,
        a,
        /*$$scope*/
        a[12],
        n ? ue(
          s,
          /*$$scope*/
          a[12],
          c,
          Vi
        ) : ge(
          /*$$scope*/
          a[12]
        ),
        Xe
      ), (!n || c & /*badge*/
      1 && t !== (t = /*badge*/
      (u = a[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(a) {
      n || (B(f, a), n = !0);
    },
    o(a) {
      T(f, a), n = !1;
    },
    d(a) {
      a && v(e), f && f.d(a), l = !1, r();
    }
  };
}
function qi(i) {
  let e, t;
  return e = new vt({
    props: {
      placement: (
        /*placement*/
        i[7]
      ),
      openDelayMs: (
        /*openDelayMs*/
        i[6]
      ),
      maxWidthPx: (
        /*maxWidthPx*/
        i[5]
      ),
      $$slots: {
        content: [Xi],
        trigger: [Yi]
      },
      $$scope: { ctx: i }
    }
  }), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*placement*/
      128 && (r.placement = /*placement*/
      n[7]), l & /*openDelayMs*/
      64 && (r.openDelayMs = /*openDelayMs*/
      n[6]), l & /*maxWidthPx*/
      32 && (r.maxWidthPx = /*maxWidthPx*/
      n[5]), l & /*$$scope, badge, hintIcon, contentMode, interactive*/
      4119 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function Ui(i) {
  let e;
  const t = (
    /*#slots*/
    i[11].trigger
  ), n = fe(
    t,
    i,
    /*$$scope*/
    i[12],
    Je
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      4096) && de(
        n,
        t,
        l,
        /*$$scope*/
        l[12],
        e ? ue(
          t,
          /*$$scope*/
          l[12],
          r,
          Ri
        ) : ge(
          /*$$scope*/
          l[12]
        ),
        Je
      );
    },
    i(l) {
      e || (B(n, l), e = !0);
    },
    o(l) {
      T(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Gi(i) {
  let e, t, n, l, r;
  const s = (
    /*#slots*/
    i[11].trigger
  ), f = fe(
    s,
    i,
    /*$$scope*/
    i[12],
    Ke
  );
  return {
    c() {
      var a;
      e = C("button"), f && f.c(), o(e, "class", "triggerButton interactive svelte-13r27b2"), o(e, "type", "button"), o(e, "aria-label", t = /*badge*/
      (a = i[0]) == null ? void 0 : a.label);
    },
    m(a, c) {
      w(a, e, c), f && f.m(e, null), n = !0, l || (r = Q(
        e,
        "click",
        /*onTriggerClick*/
        i[8]
      ), l = !0);
    },
    p(a, c) {
      var u;
      f && f.p && (!n || c & /*$$scope*/
      4096) && de(
        f,
        s,
        a,
        /*$$scope*/
        a[12],
        n ? ue(
          s,
          /*$$scope*/
          a[12],
          c,
          Hi
        ) : ge(
          /*$$scope*/
          a[12]
        ),
        Ke
      ), (!n || c & /*badge*/
      1 && t !== (t = /*badge*/
      (u = a[0]) == null ? void 0 : u.label)) && o(e, "aria-label", t);
    },
    i(a) {
      n || (B(f, a), n = !0);
    },
    o(a) {
      T(f, a), n = !1;
    },
    d(a) {
      a && v(e), f && f.d(a), l = !1, r();
    }
  };
}
function Yi(i) {
  let e, t, n, l;
  const r = [Gi, Ui], s = [];
  function f(a, c) {
    return (
      /*interactive*/
      a[1] ? 0 : 1
    );
  }
  return t = f(i), n = s[t] = r[t](i), {
    c() {
      e = C("span"), n.c(), o(e, "slot", "trigger");
    },
    m(a, c) {
      w(a, e, c), s[t].m(e, null), l = !0;
    },
    p(a, c) {
      let u = t;
      t = f(a), t === u ? s[t].p(a, c) : (R(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), H(), n = s[t], n ? n.p(a, c) : (n = s[t] = r[t](a), n.c()), B(n, 1), n.m(e, null));
    },
    i(a) {
      l || (B(n), l = !0);
    },
    o(a) {
      T(n), l = !1;
    },
    d(a) {
      a && v(e), s[t].d();
    }
  };
}
function Qe(i) {
  let e, t = (
    /*badge*/
    i[0].label + ""
  ), n;
  return {
    c() {
      e = C("strong"), n = Y(t);
    },
    m(l, r) {
      w(l, e, r), y(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].label + "") && le(n, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function et(i) {
  let e, t = (
    /*badge*/
    i[0].description + ""
  ), n;
  return {
    c() {
      e = C("span"), n = Y(t), o(e, "class", "bl_tooltipDesc");
    },
    m(l, r) {
      w(l, e, r), y(e, n);
    },
    p(l, r) {
      r & /*badge*/
      1 && t !== (t = /*badge*/
      l[0].description + "") && le(n, t);
    },
    d(l) {
      l && v(e);
    }
  };
}
function tt(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].actionText + ""
  ), s, f, a = (
    /*hintIcon*/
    i[2] && it(i)
  );
  return {
    c() {
      e = C("div"), t = C("div"), a && a.c(), n = U(), l = C("span"), s = Y(r), o(l, "class", "bl_tooltipActionText"), o(t, "class", "bl_tooltipActionRow"), o(e, "class", "bl_tooltipActionHint"), o(e, "aria-hidden", "true");
    },
    m(c, u) {
      w(c, e, u), y(e, t), a && a.m(t, null), y(t, n), y(t, l), y(l, s), f = !0;
    },
    p(c, u) {
      /*hintIcon*/
      c[2] ? a ? (a.p(c, u), u & /*hintIcon*/
      4 && B(a, 1)) : (a = it(c), a.c(), B(a, 1), a.m(t, n)) : a && (R(), T(a, 1, 1, () => {
        a = null;
      }), H()), (!f || u & /*badge*/
      1) && r !== (r = /*badge*/
      c[0].actionText + "") && le(s, r);
    },
    i(c) {
      f || (B(a), f = !0);
    },
    o(c) {
      T(a), f = !1;
    },
    d(c) {
      c && v(e), a && a.d();
    }
  };
}
function it(i) {
  let e, t, n;
  return t = new be({
    props: {
      name: (
        /*hintIcon*/
        i[2]
      ),
      size: 13,
      fg: "rgba(255, 255, 255, 0.92)",
      bg: null,
      bgOpacity: 0
    }
  }), {
    c() {
      e = C("span"), L(t.$$.fragment), o(e, "class", "bl_tooltipActionIcon");
    },
    m(l, r) {
      w(l, e, r), E(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*hintIcon*/
      4 && (s.name = /*hintIcon*/
      l[2]), t.$set(s);
    },
    i(l) {
      n || (B(t.$$.fragment, l), n = !0);
    },
    o(l) {
      T(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), W(t);
    }
  };
}
function Xi(i) {
  let e, t, n, l, r = (
    /*contentMode*/
    i[4] === "labelAndDescription" && Qe(i)
  ), s = (
    /*badge*/
    i[0].description && et(i)
  ), f = (
    /*badge*/
    i[0].actionText && tt(i)
  );
  return {
    c() {
      e = C("div"), r && r.c(), t = U(), s && s.c(), n = U(), f && f.c(), o(e, "slot", "content"), o(e, "class", "bl_tooltipContent");
    },
    m(a, c) {
      w(a, e, c), r && r.m(e, null), y(e, t), s && s.m(e, null), y(e, n), f && f.m(e, null), l = !0;
    },
    p(a, c) {
      /*contentMode*/
      a[4] === "labelAndDescription" ? r ? r.p(a, c) : (r = Qe(a), r.c(), r.m(e, t)) : r && (r.d(1), r = null), /*badge*/
      a[0].description ? s ? s.p(a, c) : (s = et(a), s.c(), s.m(e, n)) : s && (s.d(1), s = null), /*badge*/
      a[0].actionText ? f ? (f.p(a, c), c & /*badge*/
      1 && B(f, 1)) : (f = tt(a), f.c(), B(f, 1), f.m(e, null)) : f && (R(), T(f, 1, 1, () => {
        f = null;
      }), H());
    },
    i(a) {
      l || (B(f), l = !0);
    },
    o(a) {
      T(f), l = !1;
    },
    d(a) {
      a && v(e), r && r.d(), s && s.d(), f && f.d();
    }
  };
}
function Ji(i) {
  let e, t, n, l;
  const r = [qi, Zi, $i], s = [];
  function f(a, c) {
    return (
      /*showTooltip*/
      a[3] ? 0 : (
        /*interactive*/
        a[1] ? 1 : 2
      )
    );
  }
  return e = f(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = V();
    },
    m(a, c) {
      s[e].m(a, c), w(a, n, c), l = !0;
    },
    p(a, [c]) {
      let u = e;
      e = f(a), e === u ? s[e].p(a, c) : (R(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), H(), t = s[e], t ? t.p(a, c) : (t = s[e] = r[e](a), t.c()), B(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (B(t), l = !0);
    },
    o(a) {
      T(t), l = !1;
    },
    d(a) {
      a && v(n), s[e].d(a);
    }
  };
}
function Ki(i, e, t) {
  let n, l, r, s, f, a, c, { $$slots: u = {}, $$scope: h } = e, { badge: g } = e, { options: d = void 0 } = e, { interactive: p = !1 } = e;
  const z = We();
  function S(m) {
    !p || !g || z("activate", { badge: g, source: m });
  }
  function M(m) {
    S(m.detail === 0 ? "keyboard" : "pointer");
  }
  return i.$$set = (m) => {
    "badge" in m && t(0, g = m.badge), "options" in m && t(9, d = m.options), "interactive" in m && t(1, p = m.interactive), "$$scope" in m && t(12, h = m.$$scope);
  }, i.$$.update = () => {
    i.$$.dirty & /*options*/
    512 && t(7, n = (d == null ? void 0 : d.placement) ?? "top"), i.$$.dirty & /*options*/
    512 && t(6, l = Number.isFinite(d == null ? void 0 : d.openDelayMs) ? Number(d == null ? void 0 : d.openDelayMs) : 80), i.$$.dirty & /*options*/
    512 && t(5, r = Number.isFinite(d == null ? void 0 : d.maxWidthPx) ? Number(d == null ? void 0 : d.maxWidthPx) : 280), i.$$.dirty & /*options*/
    512 && t(4, s = (d == null ? void 0 : d.contentMode) === "labelAndDescription" ? "labelAndDescription" : "description"), i.$$.dirty & /*options*/
    512 && t(10, f = (d == null ? void 0 : d.enabled) ?? !0), i.$$.dirty & /*enabled, badge*/
    1025 && t(3, a = f && !!(g != null && g.description || g != null && g.actionText)), i.$$.dirty & /*badge*/
    1 && t(2, c = (g == null ? void 0 : g.actionIcon) ?? null);
  }, [
    g,
    p,
    c,
    a,
    s,
    r,
    l,
    n,
    M,
    d,
    f,
    u,
    h
  ];
}
class Be extends K {
  constructor(e) {
    super(), X(this, e, Ki, Ji, G, { badge: 0, options: 9, interactive: 1 }, Wi);
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get options() {
    return this.$$.ctx[9];
  }
  set options(e) {
    this.$$set({ options: e }), b();
  }
  get interactive() {
    return this.$$.ctx[1];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
}
J(Be, { badge: {}, options: {}, interactive: { type: "Boolean" } }, ["trigger"], [], !0);
function Qi(i) {
  he(i, "svelte-147b4ht", `.badge.svelte-147b4ht{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:var(--badge-radius, 16px);border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );user-select:none;outline:none;transition:background-color 120ms ease, border-color 120ms ease, color 120ms ease;--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-bg:color-mix(in srgb, var(--badge-solid) 14%, transparent);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px}.badge.filled.svelte-147b4ht{background:var(--badge-solid);border-color:transparent;color:var(--badge-filled-fg, #ffffff)}.badge.outlined.svelte-147b4ht{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-147b4ht{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px}.icon.svelte-147b4ht svg,.icon.svelte-147b4ht img,.icon.svelte-147b4ht ion-icon,.icon.svelte-147b4ht iconify-icon{width:100%;height:100%;display:block}.label.svelte-147b4ht{white-space:nowrap}`);
}
function nt(i) {
  let e, t;
  return e = new Be({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [en] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[12]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, styleVars, badge, iconName, iconBg, iconFg, iconBgShape*/
      8691 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function lt(i) {
  let e, t, n;
  return t = new be({
    props: {
      name: (
        /*iconName*/
        i[4]
      ),
      size: nn,
      bg: (
        /*iconBg*/
        i[7]
      ),
      fg: (
        /*iconFg*/
        i[6]
      ),
      bgOpacity: 1,
      bgShape: (
        /*iconBgShape*/
        i[8]
      )
    }
  }), {
    c() {
      e = C("span"), L(t.$$.fragment), o(e, "class", "icon svelte-147b4ht"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), E(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      16 && (s.name = /*iconName*/
      l[4]), r & /*iconBg*/
      128 && (s.bg = /*iconBg*/
      l[7]), r & /*iconFg*/
      64 && (s.fg = /*iconFg*/
      l[6]), r & /*iconBgShape*/
      256 && (s.bgShape = /*iconBgShape*/
      l[8]), t.$set(s);
    },
    i(l) {
      n || (B(t.$$.fragment, l), n = !0);
    },
    o(l) {
      T(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), W(t);
    }
  };
}
function en(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, f, a, c = (
    /*iconName*/
    i[4] && lt(i)
  );
  return {
    c() {
      e = C("span"), t = C("span"), c && c.c(), n = U(), l = C("span"), s = Y(r), o(l, "class", "label svelte-147b4ht"), o(t, "class", f = "badge " + /*variant*/
      i[1] + " svelte-147b4ht"), o(
        t,
        "style",
        /*styleVars*/
        i[5]
      ), o(e, "slot", "trigger");
    },
    m(u, h) {
      w(u, e, h), y(e, t), c && c.m(t, null), y(t, n), y(t, l), y(l, s), a = !0;
    },
    p(u, h) {
      /*iconName*/
      u[4] ? c ? (c.p(u, h), h & /*iconName*/
      16 && B(c, 1)) : (c = lt(u), c.c(), B(c, 1), c.m(t, n)) : c && (R(), T(c, 1, 1, () => {
        c = null;
      }), H()), (!a || h & /*badge*/
      1) && r !== (r = /*badge*/
      u[0].label + "") && le(s, r), (!a || h & /*variant*/
      2 && f !== (f = "badge " + /*variant*/
      u[1] + " svelte-147b4ht")) && o(t, "class", f), (!a || h & /*styleVars*/
      32) && o(
        t,
        "style",
        /*styleVars*/
        u[5]
      );
    },
    i(u) {
      a || (B(c), a = !0);
    },
    o(u) {
      T(c), a = !1;
    },
    d(u) {
      u && v(e), c && c.d();
    }
  };
}
function tn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && nt(i)
  );
  return {
    c() {
      n && n.c(), e = V();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && B(n, 1)) : (n = nt(l), n.c(), B(n, 1), n.m(e.parentNode, e)) : n && (R(), T(n, 1, 1, () => {
        n = null;
      }), H());
    },
    i(l) {
      t || (B(n), t = !0);
    },
    o(l) {
      T(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
const nn = 20;
function ln(i, e, t) {
  let n, l, r, s, f, a, { badge: c } = e, { variant: u = "filled" } = e, { corners: h = "rounded" } = e, { tooltip: g = void 0 } = e, { colorScheme: d = void 0 } = e, { interactive: p = !1 } = e;
  function z(S) {
    Ce.call(this, i, S);
  }
  return i.$$set = (S) => {
    "badge" in S && t(0, c = S.badge), "variant" in S && t(1, u = S.variant), "corners" in S && t(9, h = S.corners), "tooltip" in S && t(2, g = S.tooltip), "colorScheme" in S && t(10, d = S.colorScheme), "interactive" in S && t(3, p = S.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(4, n = (c == null ? void 0 : c.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(11, l = String((c == null ? void 0 : c.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    16 && t(8, r = n === "Info" ? "square" : "round"), i.$$.dirty & /*colorScheme, variant*/
    1026 && t(7, s = (d == null ? void 0 : d.iconBg) ?? (u === "outlined" ? "var(--badge-solid)" : "#ffffff")), i.$$.dirty & /*colorScheme, variant*/
    1026 && t(6, f = (d == null ? void 0 : d.iconFg) ?? (u === "outlined" ? "#ffffff" : "var(--badge-solid)")), i.$$.dirty & /*badgeColor, corners, colorScheme*/
    3584 && t(5, a = [
      `--badge-solid:${l}`,
      `--badge-radius:${h === "rectangular" ? "4px" : "16px"}`,
      d != null && d.text ? `--badge-filled-fg:${d.text}` : "",
      d != null && d.outlinedText ? `--badge-fg:${d.outlinedText}` : "",
      d != null && d.border ? `--badge-border:${d.border}` : ""
    ].filter(Boolean).join(";"));
  }, [
    c,
    u,
    g,
    p,
    n,
    a,
    f,
    s,
    r,
    h,
    d,
    l,
    z
  ];
}
class kt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      ln,
      tn,
      G,
      {
        badge: 0,
        variant: 1,
        corners: 9,
        tooltip: 2,
        colorScheme: 10,
        interactive: 3
      },
      Qi
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get corners() {
    return this.$$.ctx[9];
  }
  set corners(e) {
    this.$$set({ corners: e }), b();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[10];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
}
J(kt, { badge: {}, variant: {}, corners: {}, tooltip: {}, colorScheme: {}, interactive: { type: "Boolean" } }, [], [], !0);
function rn(i) {
  he(i, "svelte-svmk6x", `.wrap.fixed.svelte-svmk6x.svelte-svmk6x{position:fixed;z-index:50}.wrap.svelte-svmk6x.svelte-svmk6x{display:inline-flex;align-items:center;justify-content:flex-end;pointer-events:auto}.wrap.left.svelte-svmk6x .badge.mini{flex-direction:row-reverse}.badge.svelte-svmk6x.svelte-svmk6x{display:inline-flex;align-items:center;gap:var(--badge-gap);padding:var(--badge-pad-y) var(--badge-pad-x);border-radius:var(--badge-radius, 16px);border:var(--badge-border-w) solid transparent;font-weight:550;font-size:12px;line-height:1;font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );user-select:none;outline:none;transition:background-color 220ms ease, border-color 220ms ease, color 220ms ease, box-shadow 220ms ease,
      padding 420ms cubic-bezier(0.2, 0, 0, 1);--badge-solid:rgb(17, 24, 39);--badge-border:color-mix(in srgb, var(--badge-solid) 65%, transparent);--badge-fg:color-mix(in srgb, var(--badge-solid) 72%, black);--badge-gap:3px;--badge-pad-y:3px;--badge-pad-x:6px;--badge-border-w:1px;--mini-icon-bg:var(--badge-solid);--mini-icon-fg:#ffffff}.badge.filled.svelte-svmk6x.svelte-svmk6x{background:var(--badge-solid);border-color:transparent;color:var(--badge-filled-fg, #ffffff)}.badge.outlined.svelte-svmk6x.svelte-svmk6x{background:transparent;border-color:var(--badge-border);color:var(--badge-fg)}.icon.svelte-svmk6x.svelte-svmk6x{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px}.icon.svelte-svmk6x svg,.icon.svelte-svmk6x img,.icon.svelte-svmk6x ion-icon,.icon.svelte-svmk6x iconify-icon{width:100%;height:100%;display:block}.label.svelte-svmk6x.svelte-svmk6x{white-space:nowrap}.badge.mini.svelte-svmk6x.svelte-svmk6x{--badge-gap:0px;--badge-pad-y:0px;--badge-pad-x:0px;--badge-border-w:0px;border-color:transparent;background:transparent;font-size:11px}.badge.mini.svelte-svmk6x .label.svelte-svmk6x{max-width:0;opacity:0;overflow:hidden;line-height:1.2;padding-bottom:1px;transition:max-width 420ms cubic-bezier(0.2, 0, 0, 1), opacity 260ms ease}.badge.mini.svelte-svmk6x.svelte-svmk6x:hover,.badge.mini.svelte-svmk6x.svelte-svmk6x:focus-visible{--badge-gap:2px;--badge-pad-y:2px;--badge-pad-x:5px;--badge-border-w:1px}.badge.mini.outlined.svelte-svmk6x.svelte-svmk6x:hover,.badge.mini.outlined.svelte-svmk6x.svelte-svmk6x:focus-visible{border-color:var(--badge-border)}.badge.mini.filled.svelte-svmk6x.svelte-svmk6x:hover,.badge.mini.filled.svelte-svmk6x.svelte-svmk6x:focus-visible{background:var(--badge-solid);border-color:transparent;color:var(--badge-filled-fg, #ffffff);--mini-icon-bg:var(--mini-icon-bg-hover, #ffffff);--mini-icon-fg:var(--mini-icon-fg-hover, var(--badge-solid))}.badge.mini.svelte-svmk6x:hover .label.svelte-svmk6x,.badge.mini.svelte-svmk6x:focus-visible .label.svelte-svmk6x{max-width:220px;opacity:1}`);
}
function rt(i) {
  let e, t;
  return e = new Be({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [on] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[14]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, styleVars, badge, iconName, iconBgShapeFinal*/
      33667 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function ot(i) {
  let e, t, n;
  return t = new be({
    props: {
      name: (
        /*iconName*/
        i[7]
      ),
      size: an,
      bg: "var(--mini-icon-bg)",
      fg: "var(--mini-icon-fg)",
      bgOpacity: 1,
      bgShape: (
        /*iconBgShapeFinal*/
        i[9]
      )
    }
  }), {
    c() {
      e = C("span"), L(t.$$.fragment), o(e, "class", "icon svelte-svmk6x"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), E(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      128 && (s.name = /*iconName*/
      l[7]), r & /*iconBgShapeFinal*/
      512 && (s.bgShape = /*iconBgShapeFinal*/
      l[9]), t.$set(s);
    },
    i(l) {
      n || (B(t.$$.fragment, l), n = !0);
    },
    o(l) {
      T(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), W(t);
    }
  };
}
function on(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0].label + ""
  ), s, f, a, c = (
    /*iconName*/
    i[7] && ot(i)
  );
  return {
    c() {
      e = C("span"), t = C("span"), c && c.c(), n = U(), l = C("span"), s = Y(r), o(l, "class", "label svelte-svmk6x"), o(t, "class", f = "badge mini " + /*variant*/
      i[1] + " svelte-svmk6x"), o(
        t,
        "style",
        /*styleVars*/
        i[8]
      ), o(e, "slot", "trigger");
    },
    m(u, h) {
      w(u, e, h), y(e, t), c && c.m(t, null), y(t, n), y(t, l), y(l, s), a = !0;
    },
    p(u, h) {
      /*iconName*/
      u[7] ? c ? (c.p(u, h), h & /*iconName*/
      128 && B(c, 1)) : (c = ot(u), c.c(), B(c, 1), c.m(t, n)) : c && (R(), T(c, 1, 1, () => {
        c = null;
      }), H()), (!a || h & /*badge*/
      1) && r !== (r = /*badge*/
      u[0].label + "") && le(s, r), (!a || h & /*variant*/
      2 && f !== (f = "badge mini " + /*variant*/
      u[1] + " svelte-svmk6x")) && o(t, "class", f), (!a || h & /*styleVars*/
      256) && o(
        t,
        "style",
        /*styleVars*/
        u[8]
      );
    },
    i(u) {
      a || (B(c), a = !0);
    },
    o(u) {
      T(c), a = !1;
    },
    d(u) {
      u && v(e), c && c.d();
    }
  };
}
function sn(i) {
  let e, t, n, l, r = (
    /*badge*/
    i[0] && rt(i)
  );
  return {
    c() {
      e = C("div"), r && r.c(), o(e, "class", t = "wrap " + /*fixed*/
      (i[4] ? "fixed" : "") + " " + /*expandDirection*/
      i[6] + " svelte-svmk6x"), o(e, "style", n = /*fixed*/
      i[4] ? `right:${/*offsetPx*/
      i[5]}px;bottom:${/*offsetPx*/
      i[5]}px;` : void 0), o(e, "aria-label", "Mini badge");
    },
    m(s, f) {
      w(s, e, f), r && r.m(e, null), l = !0;
    },
    p(s, [f]) {
      /*badge*/
      s[0] ? r ? (r.p(s, f), f & /*badge*/
      1 && B(r, 1)) : (r = rt(s), r.c(), B(r, 1), r.m(e, null)) : r && (R(), T(r, 1, 1, () => {
        r = null;
      }), H()), (!l || f & /*fixed, expandDirection*/
      80 && t !== (t = "wrap " + /*fixed*/
      (s[4] ? "fixed" : "") + " " + /*expandDirection*/
      s[6] + " svelte-svmk6x")) && o(e, "class", t), (!l || f & /*fixed, offsetPx*/
      48 && n !== (n = /*fixed*/
      s[4] ? `right:${/*offsetPx*/
      s[5]}px;bottom:${/*offsetPx*/
      s[5]}px;` : void 0)) && o(e, "style", n);
    },
    i(s) {
      l || (B(r), l = !0);
    },
    o(s) {
      T(r), l = !1;
    },
    d(s) {
      s && v(e), r && r.d();
    }
  };
}
const an = 24;
function cn(i, e, t) {
  let n, l, r, s, { badge: f } = e, { variant: a = "outlined" } = e, { corners: c = "rounded" } = e, { iconBgShape: u = "round" } = e, { tooltip: h = void 0 } = e, { colorScheme: g = void 0 } = e, { interactive: d = !1 } = e, { fixed: p = !1 } = e, { offsetPx: z = 16 } = e, { expandDirection: S = "right" } = e;
  function M(m) {
    Ce.call(this, i, m);
  }
  return i.$$set = (m) => {
    "badge" in m && t(0, f = m.badge), "variant" in m && t(1, a = m.variant), "corners" in m && t(10, c = m.corners), "iconBgShape" in m && t(11, u = m.iconBgShape), "tooltip" in m && t(2, h = m.tooltip), "colorScheme" in m && t(12, g = m.colorScheme), "interactive" in m && t(3, d = m.interactive), "fixed" in m && t(4, p = m.fixed), "offsetPx" in m && t(5, z = m.offsetPx), "expandDirection" in m && t(6, S = m.expandDirection);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(7, n = (f == null ? void 0 : f.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(13, l = String((f == null ? void 0 : f.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName, iconBgShape*/
    2176 && t(9, r = n === "Info" ? "square" : u), i.$$.dirty & /*badgeColor, corners, colorScheme*/
    13312 && t(8, s = [
      `--badge-solid:${l}`,
      `--badge-radius:${c === "rectangular" ? "4px" : "16px"}`,
      g != null && g.text ? `--badge-filled-fg:${g.text}` : "",
      g != null && g.outlinedText ? `--badge-fg:${g.outlinedText}` : "",
      g != null && g.border ? `--badge-border:${g.border}` : "",
      g != null && g.iconBg ? `--mini-icon-bg:${g.iconBg}` : "",
      g != null && g.iconFg ? `--mini-icon-fg:${g.iconFg}` : "",
      g != null && g.iconBg ? `--mini-icon-bg-hover:${g.iconBg}` : "",
      g != null && g.iconFg ? `--mini-icon-fg-hover:${g.iconFg}` : ""
    ].filter(Boolean).join(";"));
  }, [
    f,
    a,
    h,
    d,
    p,
    z,
    S,
    n,
    s,
    r,
    c,
    u,
    g,
    l,
    M
  ];
}
class yt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      cn,
      sn,
      G,
      {
        badge: 0,
        variant: 1,
        corners: 10,
        iconBgShape: 11,
        tooltip: 2,
        colorScheme: 12,
        interactive: 3,
        fixed: 4,
        offsetPx: 5,
        expandDirection: 6
      },
      rn
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get corners() {
    return this.$$.ctx[10];
  }
  set corners(e) {
    this.$$set({ corners: e }), b();
  }
  get iconBgShape() {
    return this.$$.ctx[11];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), b();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[12];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
  get fixed() {
    return this.$$.ctx[4];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), b();
  }
  get offsetPx() {
    return this.$$.ctx[5];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), b();
  }
  get expandDirection() {
    return this.$$.ctx[6];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), b();
  }
}
J(yt, { badge: {}, variant: {}, corners: {}, iconBgShape: {}, tooltip: {}, colorScheme: {}, interactive: { type: "Boolean" }, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {} }, [], [], !0);
function fn(i) {
  he(i, "svelte-192njsm", `.prio.svelte-192njsm.svelte-192njsm{width:var(--prio-size);height:var(--prio-size);border-radius:999px;display:inline-flex;align-items:center;justify-content:center;cursor:default;outline:none;user-select:none;transition:transform 160ms cubic-bezier(0.2, 0, 0, 1), box-shadow 160ms cubic-bezier(0.2, 0, 0, 1);font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );--prio-solid:rgb(17, 24, 39);--prio-border:color-mix(in srgb, var(--prio-solid) 65%, transparent);--prio-text:var(--prio-text-solid, #ffffff)}.prio-inner.svelte-192njsm.svelte-192njsm{width:100%;height:100%;border-radius:999px;display:inline-flex;align-items:center;justify-content:center}.prio.with-label.svelte-192njsm .prio-inner.svelte-192njsm{flex-direction:column;gap:2px;padding:3px 5px 5px 5px;box-sizing:border-box}.prio-text.svelte-192njsm.svelte-192njsm{font-size:var(--prio-text-size, 10px);font-weight:550;letter-spacing:0.02em;line-height:1.05;color:var(--prio-text);text-align:center;white-space:normal;overflow-wrap:anywhere;opacity:0.95}.icon.svelte-192njsm.svelte-192njsm{display:inline-flex;align-items:center;justify-content:center;width:var(--prio-icon-size);height:var(--prio-icon-size)}.icon.svelte-192njsm svg,.icon.svelte-192njsm img,.icon.svelte-192njsm ion-icon,.icon.svelte-192njsm iconify-icon{width:100%;height:100%;display:block}.prio.solid.svelte-192njsm.svelte-192njsm{background:var(--prio-solid)}.prio.ring.svelte-192njsm.svelte-192njsm{background:#ffffff;box-shadow:inset 0 0 0 2px var(--prio-ring-border, var(--prio-solid));--prio-text:var(--prio-text-outline, var(--prio-solid))}.prio.double-ring.svelte-192njsm.svelte-192njsm{background:var(--prio-solid);box-shadow:inset 0 0 0 3px rgba(255, 255, 255, 0.95), 0 0 0 2px var(--prio-ring-border, var(--prio-solid))}`);
}
function st(i) {
  let e, t;
  return e = new Be({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [un] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[17]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, styleVars, rawLabel, iconName, iconSize, iconBg, iconFg, iconBgShape*/
      264178 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function at(i) {
  let e, t, n;
  return t = new be({
    props: {
      name: (
        /*iconName*/
        i[6]
      ),
      size: (
        /*iconSize*/
        i[4]
      ),
      bg: (
        /*iconBg*/
        i[9]
      ),
      bgOpacity: 1,
      fg: (
        /*iconFg*/
        i[8]
      ),
      bgShape: (
        /*iconBgShape*/
        i[10]
      )
    }
  }), {
    c() {
      e = C("span"), L(t.$$.fragment), o(e, "class", "icon svelte-192njsm"), o(e, "aria-hidden", "true");
    },
    m(l, r) {
      w(l, e, r), E(t, e, null), n = !0;
    },
    p(l, r) {
      const s = {};
      r & /*iconName*/
      64 && (s.name = /*iconName*/
      l[6]), r & /*iconSize*/
      16 && (s.size = /*iconSize*/
      l[4]), r & /*iconBg*/
      512 && (s.bg = /*iconBg*/
      l[9]), r & /*iconFg*/
      256 && (s.fg = /*iconFg*/
      l[8]), r & /*iconBgShape*/
      1024 && (s.bgShape = /*iconBgShape*/
      l[10]), t.$set(s);
    },
    i(l) {
      n || (B(t.$$.fragment, l), n = !0);
    },
    o(l) {
      T(t.$$.fragment, l), n = !1;
    },
    d(l) {
      l && v(e), W(t);
    }
  };
}
function un(i) {
  let e, t, n, l, r, s, f, a, c = (
    /*iconName*/
    i[6] && at(i)
  );
  return {
    c() {
      e = C("span"), t = C("span"), n = C("span"), c && c.c(), l = U(), r = C("span"), s = Y(
        /*rawLabel*/
        i[5]
      ), o(r, "class", "prio-text svelte-192njsm"), o(n, "class", "prio-inner svelte-192njsm"), o(n, "aria-hidden", "true"), o(t, "class", f = "prio " + /*variant*/
      i[1] + " with-label svelte-192njsm"), o(
        t,
        "style",
        /*styleVars*/
        i[7]
      ), o(e, "slot", "trigger");
    },
    m(u, h) {
      w(u, e, h), y(e, t), y(t, n), c && c.m(n, null), y(n, l), y(n, r), y(r, s), a = !0;
    },
    p(u, h) {
      /*iconName*/
      u[6] ? c ? (c.p(u, h), h & /*iconName*/
      64 && B(c, 1)) : (c = at(u), c.c(), B(c, 1), c.m(n, l)) : c && (R(), T(c, 1, 1, () => {
        c = null;
      }), H()), (!a || h & /*rawLabel*/
      32) && le(
        s,
        /*rawLabel*/
        u[5]
      ), (!a || h & /*variant*/
      2 && f !== (f = "prio " + /*variant*/
      u[1] + " with-label svelte-192njsm")) && o(t, "class", f), (!a || h & /*styleVars*/
      128) && o(
        t,
        "style",
        /*styleVars*/
        u[7]
      );
    },
    i(u) {
      a || (B(c), a = !0);
    },
    o(u) {
      T(c), a = !1;
    },
    d(u) {
      u && v(e), c && c.d();
    }
  };
}
function dn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && st(i)
  );
  return {
    c() {
      n && n.c(), e = V();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && B(n, 1)) : (n = st(l), n.c(), B(n, 1), n.m(e.parentNode, e)) : n && (R(), T(n, 1, 1, () => {
        n = null;
      }), H());
    },
    i(l) {
      t || (B(n), t = !0);
    },
    o(l) {
      T(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
function gn(i) {
  return String(i ?? "").trim() || "—";
}
function hn(i, e, t) {
  let n, l, r, s, f, a, c, u, h, g, d, { badge: p } = e, { variant: z = "solid" } = e, { size: S = 44 } = e, { tooltip: M = void 0 } = e, { colorScheme: m = void 0 } = e, { interactive: O = !1 } = e;
  function N(F) {
    Ce.call(this, i, F);
  }
  return i.$$set = (F) => {
    "badge" in F && t(0, p = F.badge), "variant" in F && t(1, z = F.variant), "size" in F && t(11, S = F.size), "tooltip" in F && t(2, M = F.tooltip), "colorScheme" in F && t(12, m = F.colorScheme), "interactive" in F && t(3, O = F.interactive);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(6, n = (p == null ? void 0 : p.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(15, l = String((p == null ? void 0 : p.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*iconName*/
    64 && t(10, r = n === "Info" ? "square" : "round"), i.$$.dirty & /*colorScheme, variant*/
    4098 && t(9, s = (m == null ? void 0 : m.iconBg) ?? (z === "solid" ? "#ffffff" : "var(--prio-solid)")), i.$$.dirty & /*colorScheme, variant*/
    4098 && t(8, f = (m == null ? void 0 : m.iconFg) ?? (z === "solid" ? "var(--prio-solid)" : "#ffffff")), i.$$.dirty & /*badge*/
    1 && t(5, a = gn(p == null ? void 0 : p.label)), i.$$.dirty & /*rawLabel*/
    32 && t(16, c = a.length), i.$$.dirty & /*size, labelLen*/
    67584 && t(14, u = Math.min(104, Math.max(S, 70 + Math.max(0, c - 12) * 1.4))), i.$$.dirty & /*renderSize*/
    16384 && t(4, h = Math.round(u * 0.34)), i.$$.dirty & /*labelLen*/
    65536 && t(13, g = c <= 12 ? 12 : c <= 18 ? 11 : c <= 26 ? 10 : 9), i.$$.dirty & /*badgeColor, renderSize, textSize, iconSize, colorScheme*/
    61456 && t(7, d = [
      `--prio-solid:${l}`,
      `--prio-size:${u}px`,
      `--prio-text-size:${g}px`,
      `--prio-icon-size:${h}px`,
      m != null && m.text ? `--prio-text-solid:${m.text}` : "",
      m != null && m.outlinedText ? `--prio-text-outline:${m.outlinedText}` : "",
      m != null && m.border ? `--prio-ring-border:${m.border}` : ""
    ].filter(Boolean).join(";"));
  }, [
    p,
    z,
    M,
    O,
    h,
    a,
    n,
    d,
    f,
    s,
    r,
    S,
    m,
    g,
    u,
    l,
    c,
    N
  ];
}
class wt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      hn,
      dn,
      G,
      {
        badge: 0,
        variant: 1,
        size: 11,
        tooltip: 2,
        colorScheme: 12,
        interactive: 3
      },
      fn
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get size() {
    return this.$$.ctx[11];
  }
  set size(e) {
    this.$$set({ size: e }), b();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[12];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
}
J(wt, { badge: {}, variant: {}, size: {}, tooltip: {}, colorScheme: {}, interactive: { type: "Boolean" } }, [], [], !0);
function bn(i) {
  he(i, "svelte-1u2exs6", `.seal.svelte-1u2exs6.svelte-1u2exs6{position:relative;width:var(--seal-size);height:var(--seal-size);border-radius:999px;display:inline-grid;place-items:center;outline:none;cursor:default;user-select:none;background:transparent;--seal-solid:rgb(17, 24, 39);--seal-ring:color-mix(in srgb, var(--seal-solid) 55%, transparent);--seal-line:color-mix(in srgb, var(--seal-solid) 18%, transparent);--seal-ring-fg:var(--seal-ring-fg-custom, var(--seal-solid))}.seal.filled.svelte-1u2exs6.svelte-1u2exs6{background:var(--seal-solid);--seal-ring-fg:var(--seal-ring-fg-filled, rgba(255, 255, 255, 0.92))}.ring.svelte-1u2exs6.svelte-1u2exs6{position:absolute;inset:0;border-radius:999px;font-size:var(--seal-font);font-family:var(
      --vis-badge-tooltip-font-family,
      ui-sans-serif,
      system-ui,
      -apple-system,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif
    );color:var(--seal-ring-fg);opacity:0.92;text-transform:uppercase;letter-spacing:0.1em;font-weight:550}.char.svelte-1u2exs6.svelte-1u2exs6{width:1em;height:100%;position:absolute;top:0;left:50%;transform:translateX(-50%) rotate(var(--angle));text-align:center}.center.svelte-1u2exs6.svelte-1u2exs6{position:absolute;inset:0;display:grid;place-items:center}.center-pill.svelte-1u2exs6.svelte-1u2exs6{width:calc(var(--seal-size) * 0.64);height:calc(var(--seal-size) * 0.64);border-radius:999px;background:rgba(255, 255, 255, 0.96);border:1px solid var(--seal-line);display:grid;place-items:center;opacity:0.95}.icon.svelte-1u2exs6.svelte-1u2exs6{display:inline-flex;align-items:center;justify-content:center;width:var(--seal-icon-size);height:var(--seal-icon-size)}.icon.svelte-1u2exs6 svg,.icon.svelte-1u2exs6 img,.icon.svelte-1u2exs6 ion-icon,.icon.svelte-1u2exs6 iconify-icon{width:100%;height:100%;display:block}.seal.filled.svelte-1u2exs6 .center-pill.svelte-1u2exs6{border-color:rgba(255, 255, 255, 0.35);background:#ffffff;opacity:1}`);
}
function ct(i, e, t) {
  const n = i.slice();
  return n[21] = e[t], n[23] = t, n;
}
function ft(i) {
  let e, t;
  return e = new Be({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      options: (
        /*tooltip*/
        i[2]
      ),
      interactive: (
        /*interactive*/
        i[3]
      ),
      $$slots: { trigger: [mn] },
      $$scope: { ctx: i }
    }
  }), e.$on(
    "activate",
    /*activate_handler*/
    i[20]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*tooltip*/
      4 && (r.options = /*tooltip*/
      n[2]), l & /*interactive*/
      8 && (r.interactive = /*interactive*/
      n[3]), l & /*$$scope, variant, styleVars, centerIcon, iconName, iconBg, iconFg, chars*/
      16778226 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function ut(i, e) {
  let t, n = (
    /*char*/
    e[21] + ""
  ), l, r;
  return {
    key: i,
    first: null,
    c() {
      t = C("span"), l = Y(n), o(t, "class", "char svelte-1u2exs6"), o(t, "style", r = `--angle:${1 / /*chars*/
      e[8].length * /*index*/
      e[23]}turn;`), this.first = t;
    },
    m(s, f) {
      w(s, t, f), y(t, l);
    },
    p(s, f) {
      e = s, f & /*chars*/
      256 && n !== (n = /*char*/
      e[21] + "") && le(l, n), f & /*chars*/
      256 && r !== (r = `--angle:${1 / /*chars*/
      e[8].length * /*index*/
      e[23]}turn;`) && o(t, "style", r);
    },
    d(s) {
      s && v(t);
    }
  };
}
function dt(i) {
  let e, t, n, l;
  return t = new be({
    props: {
      name: (
        /*iconName*/
        i[9]
      ),
      size: (
        /*centerIcon*/
        i[7]
      ),
      bg: (
        /*iconBg*/
        i[6]
      ),
      fg: (
        /*iconFg*/
        i[5]
      ),
      bgOpacity: 1
    }
  }), {
    c() {
      e = C("span"), L(t.$$.fragment), o(e, "class", "icon svelte-1u2exs6"), o(e, "aria-hidden", "true"), o(e, "style", n = `--seal-icon-size:${/*centerIcon*/
      i[7]}px;`);
    },
    m(r, s) {
      w(r, e, s), E(t, e, null), l = !0;
    },
    p(r, s) {
      const f = {};
      s & /*iconName*/
      512 && (f.name = /*iconName*/
      r[9]), s & /*centerIcon*/
      128 && (f.size = /*centerIcon*/
      r[7]), s & /*iconBg*/
      64 && (f.bg = /*iconBg*/
      r[6]), s & /*iconFg*/
      32 && (f.fg = /*iconFg*/
      r[5]), t.$set(f), (!l || s & /*centerIcon*/
      128 && n !== (n = `--seal-icon-size:${/*centerIcon*/
      r[7]}px;`)) && o(e, "style", n);
    },
    i(r) {
      l || (B(t.$$.fragment, r), l = !0);
    },
    o(r) {
      T(t.$$.fragment, r), l = !1;
    },
    d(r) {
      r && v(e), W(t);
    }
  };
}
function mn(i) {
  let e, t, n, l = [], r = /* @__PURE__ */ new Map(), s, f, a, c, u, h = Re(
    /*chars*/
    i[8]
  );
  const g = (p) => (
    /*index*/
    p[23]
  );
  for (let p = 0; p < h.length; p += 1) {
    let z = ct(i, h, p), S = g(z);
    r.set(S, l[p] = ut(S, z));
  }
  let d = (
    /*iconName*/
    i[9] && dt(i)
  );
  return {
    c() {
      e = C("span"), t = C("span"), n = C("span");
      for (let p = 0; p < l.length; p += 1)
        l[p].c();
      s = U(), f = C("span"), a = C("span"), d && d.c(), o(n, "class", "ring svelte-1u2exs6"), o(n, "aria-hidden", "true"), o(a, "class", "center-pill svelte-1u2exs6"), o(f, "class", "center svelte-1u2exs6"), o(f, "aria-hidden", "true"), o(t, "class", c = "seal " + /*variant*/
      i[1] + " svelte-1u2exs6"), o(
        t,
        "style",
        /*styleVars*/
        i[4]
      ), o(e, "slot", "trigger");
    },
    m(p, z) {
      w(p, e, z), y(e, t), y(t, n);
      for (let S = 0; S < l.length; S += 1)
        l[S] && l[S].m(n, null);
      y(t, s), y(t, f), y(f, a), d && d.m(a, null), u = !0;
    },
    p(p, z) {
      z & /*chars*/
      256 && (h = Re(
        /*chars*/
        p[8]
      ), l = Ht(l, z, g, 1, p, h, r, n, Rt, ut, null, ct)), /*iconName*/
      p[9] ? d ? (d.p(p, z), z & /*iconName*/
      512 && B(d, 1)) : (d = dt(p), d.c(), B(d, 1), d.m(a, null)) : d && (R(), T(d, 1, 1, () => {
        d = null;
      }), H()), (!u || z & /*variant*/
      2 && c !== (c = "seal " + /*variant*/
      p[1] + " svelte-1u2exs6")) && o(t, "class", c), (!u || z & /*styleVars*/
      16) && o(
        t,
        "style",
        /*styleVars*/
        p[4]
      );
    },
    i(p) {
      u || (B(d), u = !0);
    },
    o(p) {
      T(d), u = !1;
    },
    d(p) {
      p && v(e);
      for (let z = 0; z < l.length; z += 1)
        l[z].d();
      d && d.d();
    }
  };
}
function pn(i) {
  let e, t, n = (
    /*badge*/
    i[0] && ft(i)
  );
  return {
    c() {
      n && n.c(), e = V();
    },
    m(l, r) {
      n && n.m(l, r), w(l, e, r), t = !0;
    },
    p(l, [r]) {
      /*badge*/
      l[0] ? n ? (n.p(l, r), r & /*badge*/
      1 && B(n, 1)) : (n = ft(l), n.c(), B(n, 1), n.m(e.parentNode, e)) : n && (R(), T(n, 1, 1, () => {
        n = null;
      }), H());
    },
    i(l) {
      t || (B(n), t = !0);
    },
    o(l) {
      T(n), t = !1;
    },
    d(l) {
      l && v(e), n && n.d(l);
    }
  };
}
function _n(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function vn(i, e, t) {
  let n, l, r, s, f, a, c, u, h, g, { badge: d } = e, { variant: p = "outlined" } = e, { tooltip: z = void 0 } = e, { interactive: S = !1 } = e, { ringText: M = null } = e, { repeat: m = 2 } = e, { separator: O = " • " } = e, { size: N = 76 } = e, { sealFontScale: F = 0.12 } = e, { colorScheme: D = void 0 } = e;
  function I(_) {
    Ce.call(this, i, _);
  }
  return i.$$set = (_) => {
    "badge" in _ && t(0, d = _.badge), "variant" in _ && t(1, p = _.variant), "tooltip" in _ && t(2, z = _.tooltip), "interactive" in _ && t(3, S = _.interactive), "ringText" in _ && t(10, M = _.ringText), "repeat" in _ && t(11, m = _.repeat), "separator" in _ && t(12, O = _.separator), "size" in _ && t(13, N = _.size), "sealFontScale" in _ && t(14, F = _.sealFontScale), "colorScheme" in _ && t(15, D = _.colorScheme);
  }, i.$$.update = () => {
    i.$$.dirty & /*badge*/
    1 && t(9, n = (d == null ? void 0 : d.icon) ?? null), i.$$.dirty & /*badge*/
    1 && t(17, l = String((d == null ? void 0 : d.color) ?? "").trim() || "rgb(17, 24, 39)"), i.$$.dirty & /*ringText, badge*/
    1025 && t(18, r = (M ?? (d == null ? void 0 : d.label) ?? "").trim() || "—"), i.$$.dirty & /*repeat*/
    2048 && t(19, s = _n(Math.floor(m || 1), 1, 10)), i.$$.dirty & /*repeatSafe, displayText, separator*/
    790528 && t(8, f = [...Array(s)].map(() => [...r.toUpperCase()].concat([...O.toUpperCase()])).flat()), i.$$.dirty & /*size, sealFontScale*/
    24576 && t(16, a = Math.round(N * F)), i.$$.dirty & /*size*/
    8192 && t(7, c = Math.round(N * 0.3)), i.$$.dirty & /*colorScheme*/
    32768 && t(6, u = (D == null ? void 0 : D.iconBg) ?? "var(--seal-solid)"), i.$$.dirty & /*colorScheme*/
    32768 && t(5, h = (D == null ? void 0 : D.iconFg) ?? "#ffffff"), i.$$.dirty & /*badgeColor, size, ringFontPx, colorScheme*/
    237568 && t(4, g = [
      `--seal-solid:${l}`,
      `--seal-size:${N}px`,
      `--seal-font:${a}px`,
      D != null && D.outlinedText ? `--seal-ring-fg-custom:${D.outlinedText}` : "",
      D != null && D.text ? `--seal-ring-fg-filled:${D.text}` : "",
      D != null && D.border ? `--seal-line:${D.border}` : ""
    ].filter(Boolean).join(";"));
  }, [
    d,
    p,
    z,
    S,
    g,
    h,
    u,
    c,
    f,
    n,
    M,
    m,
    O,
    N,
    F,
    D,
    a,
    l,
    r,
    s,
    I
  ];
}
class xt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      vn,
      pn,
      G,
      {
        badge: 0,
        variant: 1,
        tooltip: 2,
        interactive: 3,
        ringText: 10,
        repeat: 11,
        separator: 12,
        size: 13,
        sealFontScale: 14,
        colorScheme: 15
      },
      bn
    );
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get variant() {
    return this.$$.ctx[1];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get tooltip() {
    return this.$$.ctx[2];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), b();
  }
  get interactive() {
    return this.$$.ctx[3];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
  get ringText() {
    return this.$$.ctx[10];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), b();
  }
  get repeat() {
    return this.$$.ctx[11];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), b();
  }
  get separator() {
    return this.$$.ctx[12];
  }
  set separator(e) {
    this.$$set({ separator: e }), b();
  }
  get size() {
    return this.$$.ctx[13];
  }
  set size(e) {
    this.$$set({ size: e }), b();
  }
  get sealFontScale() {
    return this.$$.ctx[14];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[15];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
}
J(xt, { badge: {}, variant: {}, tooltip: {}, interactive: { type: "Boolean" }, ringText: {}, repeat: {}, separator: {}, size: {}, sealFontScale: {}, colorScheme: {} }, [], [], !0);
const kn = {
  mono: {
    enabled: !0,
    placement: "top",
    openDelayMs: 80,
    contentMode: "description",
    maxWidthPx: 280
  },
  mini: {
    enabled: !0,
    placement: "top",
    openDelayMs: 420,
    contentMode: "description",
    maxWidthPx: 280
  },
  round: {
    enabled: !0,
    placement: "top",
    openDelayMs: 120,
    contentMode: "description",
    maxWidthPx: 300
  },
  roundcirculartext: {
    enabled: !0,
    placement: "top",
    openDelayMs: 120,
    contentMode: "description",
    maxWidthPx: 300
  }
};
function yn(i, e) {
  const t = kn[i], n = {
    ...t,
    ...e ?? {}
  };
  return n.contentMode === "auto" && (n.contentMode = t.contentMode), Number.isFinite(n.openDelayMs) || (n.openDelayMs = t.openDelayMs), (!Number.isFinite(n.maxWidthPx) || n.maxWidthPx < 120) && (n.maxWidthPx = t.maxWidthPx), n;
}
function wn(i) {
  let e, t;
  return e = new xt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundCircularTextVariant*/
        i[15]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[14]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      ringText: (
        /*ringText*/
        i[9]
      ),
      repeat: (
        /*repeat*/
        i[10]
      ),
      separator: (
        /*separator*/
        i[11]
      ),
      size: (
        /*size*/
        i[4] ?? 76
      ),
      sealFontScale: (
        /*sealFontScale*/
        i[12]
      ),
      colorScheme: (
        /*colorScheme*/
        i[13]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[19]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundCircularTextVariant*/
      32768 && (r.variant = /*roundCircularTextVariant*/
      n[15]), l & /*tooltipOptions*/
      16384 && (r.tooltip = /*tooltipOptions*/
      n[14]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*ringText*/
      512 && (r.ringText = /*ringText*/
      n[9]), l & /*repeat*/
      1024 && (r.repeat = /*repeat*/
      n[10]), l & /*separator*/
      2048 && (r.separator = /*separator*/
      n[11]), l & /*size*/
      16 && (r.size = /*size*/
      n[4] ?? 76), l & /*sealFontScale*/
      4096 && (r.sealFontScale = /*sealFontScale*/
      n[12]), l & /*colorScheme*/
      8192 && (r.colorScheme = /*colorScheme*/
      n[13]), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function xn(i) {
  let e, t;
  return e = new wt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*roundVariant*/
        i[16]
      ),
      size: (
        /*size*/
        i[4] ?? 44
      ),
      tooltip: (
        /*tooltipOptions*/
        i[14]
      ),
      colorScheme: (
        /*colorScheme*/
        i[13]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[19]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*roundVariant*/
      65536 && (r.variant = /*roundVariant*/
      n[16]), l & /*size*/
      16 && (r.size = /*size*/
      n[4] ?? 44), l & /*tooltipOptions*/
      16384 && (r.tooltip = /*tooltipOptions*/
      n[14]), l & /*colorScheme*/
      8192 && (r.colorScheme = /*colorScheme*/
      n[13]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function Sn(i) {
  let e, t;
  return e = new yt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*miniVariant*/
        i[17]
      ),
      corners: (
        /*corners*/
        i[3]
      ),
      interactive: (
        /*interactive*/
        i[2]
      ),
      fixed: (
        /*fixed*/
        i[5]
      ),
      offsetPx: (
        /*offsetPx*/
        i[6]
      ),
      expandDirection: (
        /*expandDirection*/
        i[7]
      ),
      iconBgShape: (
        /*iconBgShape*/
        i[8] ?? "round"
      ),
      tooltip: (
        /*tooltipOptions*/
        i[14]
      ),
      colorScheme: (
        /*colorScheme*/
        i[13]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[19]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*miniVariant*/
      131072 && (r.variant = /*miniVariant*/
      n[17]), l & /*corners*/
      8 && (r.corners = /*corners*/
      n[3]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), l & /*fixed*/
      32 && (r.fixed = /*fixed*/
      n[5]), l & /*offsetPx*/
      64 && (r.offsetPx = /*offsetPx*/
      n[6]), l & /*expandDirection*/
      128 && (r.expandDirection = /*expandDirection*/
      n[7]), l & /*iconBgShape*/
      256 && (r.iconBgShape = /*iconBgShape*/
      n[8] ?? "round"), l & /*tooltipOptions*/
      16384 && (r.tooltip = /*tooltipOptions*/
      n[14]), l & /*colorScheme*/
      8192 && (r.colorScheme = /*colorScheme*/
      n[13]), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function Bn(i) {
  let e, t;
  return e = new kt({
    props: {
      badge: (
        /*badge*/
        i[0]
      ),
      variant: (
        /*monoVariant*/
        i[18]
      ),
      corners: (
        /*corners*/
        i[3]
      ),
      tooltip: (
        /*tooltipOptions*/
        i[14]
      ),
      colorScheme: (
        /*colorScheme*/
        i[13]
      ),
      interactive: (
        /*interactive*/
        i[2]
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[19]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l & /*badge*/
      1 && (r.badge = /*badge*/
      n[0]), l & /*monoVariant*/
      262144 && (r.variant = /*monoVariant*/
      n[18]), l & /*corners*/
      8 && (r.corners = /*corners*/
      n[3]), l & /*tooltipOptions*/
      16384 && (r.tooltip = /*tooltipOptions*/
      n[14]), l & /*colorScheme*/
      8192 && (r.colorScheme = /*colorScheme*/
      n[13]), l & /*interactive*/
      4 && (r.interactive = /*interactive*/
      n[2]), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function Mn(i) {
  let e, t, n, l;
  const r = [Bn, Sn, xn, wn], s = [];
  function f(a, c) {
    return (
      /*type*/
      a[1] === "mono" ? 0 : (
        /*type*/
        a[1] === "mini" ? 1 : (
          /*type*/
          a[1] === "round" ? 2 : 3
        )
      )
    );
  }
  return e = f(i), t = s[e] = r[e](i), {
    c() {
      t.c(), n = V();
    },
    m(a, c) {
      s[e].m(a, c), w(a, n, c), l = !0;
    },
    p(a, [c]) {
      let u = e;
      e = f(a), e === u ? s[e].p(a, c) : (R(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), H(), t = s[e], t ? t.p(a, c) : (t = s[e] = r[e](a), t.c()), B(t, 1), t.m(n.parentNode, n));
    },
    i(a) {
      l || (B(t), l = !0);
    },
    o(a) {
      T(t), l = !1;
    },
    d(a) {
      a && v(n), s[e].d(a);
    }
  };
}
function zn(i) {
  return i === "ring" || i === "double-ring" ? i : "solid";
}
function Tn(i, e, t) {
  let n, l, r, s, f;
  const a = We();
  let { badge: c } = e, { type: u = "mono" } = e, { interactive: h = !1 } = e, { corners: g = "rounded" } = e, { variant: d = void 0 } = e, { size: p = void 0 } = e, { fixed: z = !1 } = e, { offsetPx: S = 16 } = e, { expandDirection: M = "right" } = e, { iconBgShape: m = void 0 } = e, { ringText: O = null } = e, { repeat: N = 2 } = e, { separator: F = " • " } = e, { sealFontScale: D = 0.12 } = e, { colorScheme: I = void 0 } = e, { tooltip: _ = void 0 } = e;
  function j(P) {
    a("activate", P.detail);
  }
  return i.$$set = (P) => {
    "badge" in P && t(0, c = P.badge), "type" in P && t(1, u = P.type), "interactive" in P && t(2, h = P.interactive), "corners" in P && t(3, g = P.corners), "variant" in P && t(20, d = P.variant), "size" in P && t(4, p = P.size), "fixed" in P && t(5, z = P.fixed), "offsetPx" in P && t(6, S = P.offsetPx), "expandDirection" in P && t(7, M = P.expandDirection), "iconBgShape" in P && t(8, m = P.iconBgShape), "ringText" in P && t(9, O = P.ringText), "repeat" in P && t(10, N = P.repeat), "separator" in P && t(11, F = P.separator), "sealFontScale" in P && t(12, D = P.sealFontScale), "colorScheme" in P && t(13, I = P.colorScheme), "tooltip" in P && t(21, _ = P.tooltip);
  }, i.$$.update = () => {
    i.$$.dirty & /*variant*/
    1048576 && t(18, n = d ?? "filled"), i.$$.dirty & /*variant*/
    1048576 && t(17, l = d ?? "outlined"), i.$$.dirty & /*variant*/
    1048576 && t(16, r = zn(d)), i.$$.dirty & /*variant*/
    1048576 && t(15, s = d ?? "outlined"), i.$$.dirty & /*type, tooltip*/
    2097154 && t(14, f = yn(u, _));
  }, [
    c,
    u,
    h,
    g,
    p,
    z,
    S,
    M,
    m,
    O,
    N,
    F,
    D,
    I,
    f,
    s,
    r,
    l,
    n,
    j,
    d,
    _
  ];
}
class St extends K {
  constructor(e) {
    super(), X(this, e, Tn, Mn, G, {
      badge: 0,
      type: 1,
      interactive: 2,
      corners: 3,
      variant: 20,
      size: 4,
      fixed: 5,
      offsetPx: 6,
      expandDirection: 7,
      iconBgShape: 8,
      ringText: 9,
      repeat: 10,
      separator: 11,
      sealFontScale: 12,
      colorScheme: 13,
      tooltip: 21
    });
  }
  get badge() {
    return this.$$.ctx[0];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get type() {
    return this.$$.ctx[1];
  }
  set type(e) {
    this.$$set({ type: e }), b();
  }
  get interactive() {
    return this.$$.ctx[2];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
  get corners() {
    return this.$$.ctx[3];
  }
  set corners(e) {
    this.$$set({ corners: e }), b();
  }
  get variant() {
    return this.$$.ctx[20];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get size() {
    return this.$$.ctx[4];
  }
  set size(e) {
    this.$$set({ size: e }), b();
  }
  get fixed() {
    return this.$$.ctx[5];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), b();
  }
  get offsetPx() {
    return this.$$.ctx[6];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), b();
  }
  get expandDirection() {
    return this.$$.ctx[7];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), b();
  }
  get iconBgShape() {
    return this.$$.ctx[8];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), b();
  }
  get ringText() {
    return this.$$.ctx[9];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), b();
  }
  get repeat() {
    return this.$$.ctx[10];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), b();
  }
  get separator() {
    return this.$$.ctx[11];
  }
  set separator(e) {
    this.$$set({ separator: e }), b();
  }
  get sealFontScale() {
    return this.$$.ctx[12];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[13];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
  get tooltip() {
    return this.$$.ctx[21];
  }
  set tooltip(e) {
    this.$$set({ tooltip: e }), b();
  }
}
J(St, { badge: {}, type: {}, interactive: { type: "Boolean" }, corners: {}, variant: {}, size: {}, fixed: { type: "Boolean" }, offsetPx: {}, expandDirection: {}, iconBgShape: {}, ringText: {}, repeat: {}, separator: {}, sealFontScale: {}, colorScheme: {}, tooltip: {} }, [], [], !0);
const gt = {
  neutral: "rgb(17, 24, 39)",
  info: "rgb(2, 136, 209)",
  success: "rgb(46, 125, 50)",
  warning: "rgb(237, 108, 2)",
  danger: "rgb(198, 40, 40)"
};
function A(i) {
  const e = String(i ?? "").trim();
  return e.length ? e : void 0;
}
function we(i) {
  const e = String(i ?? "").replace(/\r\n?/g, `
`).replace(/\\n/g, `
`).trim();
  return e.length ? e : void 0;
}
function se(i) {
  return Number.isFinite(i) ? Number(i) : void 0;
}
function Pn(i) {
  const e = String(i ?? "").trim();
  return e === "mini" || e === "round" || e === "roundcirculartext" ? e : "mono";
}
function Cn(i) {
  return String(i ?? "").trim().toLowerCase() === "rectangular" ? "rectangular" : "rounded";
}
function Dn(i) {
  return String(i ?? "").trim().toLowerCase() === "left" ? "left" : "right";
}
function jn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Click to download" : "Click to interact";
}
function Fn(i) {
  return /\bdownload\b/i.test(i) || /\bopen[-\s]*data\b/i.test(i) ? "Download" : "Interactive";
}
function In(i) {
  const e = {};
  i.tooltipMode && (i.tooltipMode === "off" ? e.enabled = !1 : i.tooltipMode === "description" ? (e.contentMode = "description", e.enabled = e.enabled ?? !0) : i.tooltipMode === "full" ? (e.contentMode = "labelAndDescription", e.enabled = e.enabled ?? !0) : e.contentMode = "auto"), i.tooltipPlacement && (e.placement = i.tooltipPlacement);
  const t = se(i.tooltipDelayMs);
  t !== void 0 && (e.openDelayMs = t);
  const n = se(i.tooltipMaxWidthPx);
  return n !== void 0 && (e.maxWidthPx = n), Object.keys(e).length ? e : void 0;
}
function Nn(i) {
  var n, l, r, s, f, a;
  const t = {
    base: A(i.schemeBase) ?? A((n = i.colorScheme) == null ? void 0 : n.base),
    text: A(i.schemeText) ?? A((l = i.colorScheme) == null ? void 0 : l.text),
    outlinedText: A(i.schemeOutlinedText) ?? A((r = i.colorScheme) == null ? void 0 : r.outlinedText),
    border: A(i.schemeBorder) ?? A((s = i.colorScheme) == null ? void 0 : s.border),
    iconBg: A(i.schemeIconBg) ?? A((f = i.colorScheme) == null ? void 0 : f.iconBg),
    iconFg: A(i.schemeIconFg) ?? A((a = i.colorScheme) == null ? void 0 : a.iconFg)
  };
  if (!(!t.base && !t.text && !t.outlinedText && !t.border && !t.iconBg && !t.iconFg))
    return t;
}
function An(i) {
  const e = i.badge ?? {}, t = Nn(i), n = Pn(i.type), l = (t == null ? void 0 : t.base) ?? A(i.color) ?? A(e.color) ?? (i.tone ? gt[i.tone] : void 0) ?? gt.neutral, r = A(i.label) ?? A(e.label) ?? "—", s = we(i.description) ?? we(e.description), f = we(i.hint), a = we(i.actionText) ?? we(e.actionText) ?? f, c = i.actionIcon ?? e.actionIcon ?? null, u = i.icon ?? e.icon ?? null, h = !!i.interactive, g = {
    ...e,
    label: r,
    color: l,
    icon: u ?? void 0,
    description: s,
    actionText: a ?? (h ? jn(r) : void 0),
    actionIcon: c ?? (h ? Fn(r) : void 0)
  }, d = A(e.category) ?? A(e.type);
  return d && (g.category = d, g.type = e.type), {
    badge: g,
    type: n,
    variant: i.variant ?? void 0,
    corners: Cn(i.corners),
    size: se(i.size),
    fixed: !!(i.fixed ?? !1),
    offsetPx: se(i.offsetPx) ?? 16,
    expandDirection: Dn(i.expandDirection),
    iconBgShape: i.iconBgShape ?? void 0,
    ringText: i.ringText ?? null,
    repeat: se(i.repeat) ?? 2,
    separator: A(i.separator) ?? " • ",
    sealFontScale: se(i.sealFontScale) ?? 0.12,
    colorScheme: t,
    tooltip: In(i)
  };
}
function On(i) {
  let e, t;
  return e = new St({
    props: {
      badge: (
        /*normalized*/
        i[1].badge
      ),
      interactive: (
        /*interactive*/
        i[0]
      ),
      type: (
        /*normalized*/
        i[1].type
      ),
      variant: (
        /*normalized*/
        i[1].variant
      ),
      corners: (
        /*normalized*/
        i[1].corners
      ),
      size: (
        /*normalized*/
        i[1].size
      ),
      fixed: (
        /*normalized*/
        i[1].fixed
      ),
      offsetPx: (
        /*normalized*/
        i[1].offsetPx
      ),
      expandDirection: (
        /*normalized*/
        i[1].expandDirection
      ),
      iconBgShape: (
        /*normalized*/
        i[1].iconBgShape
      ),
      ringText: (
        /*normalized*/
        i[1].ringText
      ),
      repeat: (
        /*normalized*/
        i[1].repeat
      ),
      separator: (
        /*normalized*/
        i[1].separator
      ),
      sealFontScale: (
        /*normalized*/
        i[1].sealFontScale
      ),
      colorScheme: (
        /*normalized*/
        i[1].colorScheme
      ),
      tooltip: (
        /*normalized*/
        i[1].tooltip
      )
    }
  }), e.$on(
    "activate",
    /*onActivate*/
    i[2]
  ), {
    c() {
      L(e.$$.fragment);
    },
    m(n, l) {
      E(e, n, l), t = !0;
    },
    p(n, l) {
      const r = {};
      l[0] & /*normalized*/
      2 && (r.badge = /*normalized*/
      n[1].badge), l[0] & /*interactive*/
      1 && (r.interactive = /*interactive*/
      n[0]), l[0] & /*normalized*/
      2 && (r.type = /*normalized*/
      n[1].type), l[0] & /*normalized*/
      2 && (r.variant = /*normalized*/
      n[1].variant), l[0] & /*normalized*/
      2 && (r.corners = /*normalized*/
      n[1].corners), l[0] & /*normalized*/
      2 && (r.size = /*normalized*/
      n[1].size), l[0] & /*normalized*/
      2 && (r.fixed = /*normalized*/
      n[1].fixed), l[0] & /*normalized*/
      2 && (r.offsetPx = /*normalized*/
      n[1].offsetPx), l[0] & /*normalized*/
      2 && (r.expandDirection = /*normalized*/
      n[1].expandDirection), l[0] & /*normalized*/
      2 && (r.iconBgShape = /*normalized*/
      n[1].iconBgShape), l[0] & /*normalized*/
      2 && (r.ringText = /*normalized*/
      n[1].ringText), l[0] & /*normalized*/
      2 && (r.repeat = /*normalized*/
      n[1].repeat), l[0] & /*normalized*/
      2 && (r.separator = /*normalized*/
      n[1].separator), l[0] & /*normalized*/
      2 && (r.sealFontScale = /*normalized*/
      n[1].sealFontScale), l[0] & /*normalized*/
      2 && (r.colorScheme = /*normalized*/
      n[1].colorScheme), l[0] & /*normalized*/
      2 && (r.tooltip = /*normalized*/
      n[1].tooltip), e.$set(r);
    },
    i(n) {
      t || (B(e.$$.fragment, n), t = !0);
    },
    o(n) {
      T(e.$$.fragment, n), t = !1;
    },
    d(n) {
      W(e, n);
    }
  };
}
function En(i, e, t) {
  let n;
  const l = We();
  let { badge: r = null } = e, { label: s = null } = e, { tone: f = null } = e, { color: a = null } = e, { icon: c = null } = e, { description: u = null } = e, { hint: h = null } = e, { interactive: g = !1 } = e, { colorScheme: d = null } = e, { schemeBase: p = null } = e, { schemeText: z = null } = e, { schemeOutlinedText: S = null } = e, { schemeBorder: M = null } = e, { schemeIconBg: m = null } = e, { schemeIconFg: O = null } = e, { actionText: N = null } = e, { actionIcon: F = null } = e, { type: D = null } = e, { variant: I = null } = e, { corners: _ = null } = e, { size: j = null } = e, { fixed: P = null } = e, { offsetPx: me = null } = e, { expandDirection: $ = null } = e, { iconBgShape: Z = null } = e, { ringText: pe = null } = e, { repeat: _e = null } = e, { separator: ve = null } = e, { sealFontScale: ke = null } = e, { tooltipMode: De = null } = e, { tooltipPlacement: je = null } = e, { tooltipDelayMs: Fe = null } = e, { tooltipMaxWidthPx: Ie = null } = e;
  function Mt(k) {
    l("badge-activate", k.detail);
  }
  return i.$$set = (k) => {
    "badge" in k && t(3, r = k.badge), "label" in k && t(4, s = k.label), "tone" in k && t(5, f = k.tone), "color" in k && t(6, a = k.color), "icon" in k && t(7, c = k.icon), "description" in k && t(8, u = k.description), "hint" in k && t(9, h = k.hint), "interactive" in k && t(0, g = k.interactive), "colorScheme" in k && t(10, d = k.colorScheme), "schemeBase" in k && t(11, p = k.schemeBase), "schemeText" in k && t(12, z = k.schemeText), "schemeOutlinedText" in k && t(13, S = k.schemeOutlinedText), "schemeBorder" in k && t(14, M = k.schemeBorder), "schemeIconBg" in k && t(15, m = k.schemeIconBg), "schemeIconFg" in k && t(16, O = k.schemeIconFg), "actionText" in k && t(17, N = k.actionText), "actionIcon" in k && t(18, F = k.actionIcon), "type" in k && t(19, D = k.type), "variant" in k && t(20, I = k.variant), "corners" in k && t(21, _ = k.corners), "size" in k && t(22, j = k.size), "fixed" in k && t(23, P = k.fixed), "offsetPx" in k && t(24, me = k.offsetPx), "expandDirection" in k && t(25, $ = k.expandDirection), "iconBgShape" in k && t(26, Z = k.iconBgShape), "ringText" in k && t(27, pe = k.ringText), "repeat" in k && t(28, _e = k.repeat), "separator" in k && t(29, ve = k.separator), "sealFontScale" in k && t(30, ke = k.sealFontScale), "tooltipMode" in k && t(31, De = k.tooltipMode), "tooltipPlacement" in k && t(32, je = k.tooltipPlacement), "tooltipDelayMs" in k && t(33, Fe = k.tooltipDelayMs), "tooltipMaxWidthPx" in k && t(34, Ie = k.tooltipMaxWidthPx);
  }, i.$$.update = () => {
    i.$$.dirty[0] & /*badge, label, tone, color, icon, description, hint, interactive, colorScheme, schemeBase, schemeText, schemeOutlinedText, schemeBorder, schemeIconBg, schemeIconFg, actionText, actionIcon, type, variant, corners, size, fixed, offsetPx, expandDirection, iconBgShape, ringText, repeat, separator, sealFontScale*/
    2147483641 | i.$$.dirty[1] & /*tooltipMode, tooltipPlacement, tooltipDelayMs, tooltipMaxWidthPx*/
    15 && t(1, n = An({
      badge: r,
      label: s,
      tone: f,
      color: a,
      icon: c,
      description: u,
      hint: h,
      interactive: g,
      colorScheme: d,
      schemeBase: p,
      schemeText: z,
      schemeOutlinedText: S,
      schemeBorder: M,
      schemeIconBg: m,
      schemeIconFg: O,
      actionText: N,
      actionIcon: F,
      type: D,
      variant: I,
      corners: _,
      size: j,
      fixed: P,
      offsetPx: me,
      expandDirection: $,
      iconBgShape: Z,
      ringText: pe,
      repeat: _e,
      separator: ve,
      sealFontScale: ke,
      tooltipMode: De,
      tooltipPlacement: je,
      tooltipDelayMs: Fe,
      tooltipMaxWidthPx: Ie
    }));
  }, [
    g,
    n,
    Mt,
    r,
    s,
    f,
    a,
    c,
    u,
    h,
    d,
    p,
    z,
    S,
    M,
    m,
    O,
    N,
    F,
    D,
    I,
    _,
    j,
    P,
    me,
    $,
    Z,
    pe,
    _e,
    ve,
    ke,
    De,
    je,
    Fe,
    Ie
  ];
}
class Bt extends K {
  constructor(e) {
    super(), X(
      this,
      e,
      En,
      On,
      G,
      {
        badge: 3,
        label: 4,
        tone: 5,
        color: 6,
        icon: 7,
        description: 8,
        hint: 9,
        interactive: 0,
        colorScheme: 10,
        schemeBase: 11,
        schemeText: 12,
        schemeOutlinedText: 13,
        schemeBorder: 14,
        schemeIconBg: 15,
        schemeIconFg: 16,
        actionText: 17,
        actionIcon: 18,
        type: 19,
        variant: 20,
        corners: 21,
        size: 22,
        fixed: 23,
        offsetPx: 24,
        expandDirection: 25,
        iconBgShape: 26,
        ringText: 27,
        repeat: 28,
        separator: 29,
        sealFontScale: 30,
        tooltipMode: 31,
        tooltipPlacement: 32,
        tooltipDelayMs: 33,
        tooltipMaxWidthPx: 34
      },
      null,
      [-1, -1]
    );
  }
  get badge() {
    return this.$$.ctx[3];
  }
  set badge(e) {
    this.$$set({ badge: e }), b();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(e) {
    this.$$set({ label: e }), b();
  }
  get tone() {
    return this.$$.ctx[5];
  }
  set tone(e) {
    this.$$set({ tone: e }), b();
  }
  get color() {
    return this.$$.ctx[6];
  }
  set color(e) {
    this.$$set({ color: e }), b();
  }
  get icon() {
    return this.$$.ctx[7];
  }
  set icon(e) {
    this.$$set({ icon: e }), b();
  }
  get description() {
    return this.$$.ctx[8];
  }
  set description(e) {
    this.$$set({ description: e }), b();
  }
  get hint() {
    return this.$$.ctx[9];
  }
  set hint(e) {
    this.$$set({ hint: e }), b();
  }
  get interactive() {
    return this.$$.ctx[0];
  }
  set interactive(e) {
    this.$$set({ interactive: e }), b();
  }
  get colorScheme() {
    return this.$$.ctx[10];
  }
  set colorScheme(e) {
    this.$$set({ colorScheme: e }), b();
  }
  get schemeBase() {
    return this.$$.ctx[11];
  }
  set schemeBase(e) {
    this.$$set({ schemeBase: e }), b();
  }
  get schemeText() {
    return this.$$.ctx[12];
  }
  set schemeText(e) {
    this.$$set({ schemeText: e }), b();
  }
  get schemeOutlinedText() {
    return this.$$.ctx[13];
  }
  set schemeOutlinedText(e) {
    this.$$set({ schemeOutlinedText: e }), b();
  }
  get schemeBorder() {
    return this.$$.ctx[14];
  }
  set schemeBorder(e) {
    this.$$set({ schemeBorder: e }), b();
  }
  get schemeIconBg() {
    return this.$$.ctx[15];
  }
  set schemeIconBg(e) {
    this.$$set({ schemeIconBg: e }), b();
  }
  get schemeIconFg() {
    return this.$$.ctx[16];
  }
  set schemeIconFg(e) {
    this.$$set({ schemeIconFg: e }), b();
  }
  get actionText() {
    return this.$$.ctx[17];
  }
  set actionText(e) {
    this.$$set({ actionText: e }), b();
  }
  get actionIcon() {
    return this.$$.ctx[18];
  }
  set actionIcon(e) {
    this.$$set({ actionIcon: e }), b();
  }
  get type() {
    return this.$$.ctx[19];
  }
  set type(e) {
    this.$$set({ type: e }), b();
  }
  get variant() {
    return this.$$.ctx[20];
  }
  set variant(e) {
    this.$$set({ variant: e }), b();
  }
  get corners() {
    return this.$$.ctx[21];
  }
  set corners(e) {
    this.$$set({ corners: e }), b();
  }
  get size() {
    return this.$$.ctx[22];
  }
  set size(e) {
    this.$$set({ size: e }), b();
  }
  get fixed() {
    return this.$$.ctx[23];
  }
  set fixed(e) {
    this.$$set({ fixed: e }), b();
  }
  get offsetPx() {
    return this.$$.ctx[24];
  }
  set offsetPx(e) {
    this.$$set({ offsetPx: e }), b();
  }
  get expandDirection() {
    return this.$$.ctx[25];
  }
  set expandDirection(e) {
    this.$$set({ expandDirection: e }), b();
  }
  get iconBgShape() {
    return this.$$.ctx[26];
  }
  set iconBgShape(e) {
    this.$$set({ iconBgShape: e }), b();
  }
  get ringText() {
    return this.$$.ctx[27];
  }
  set ringText(e) {
    this.$$set({ ringText: e }), b();
  }
  get repeat() {
    return this.$$.ctx[28];
  }
  set repeat(e) {
    this.$$set({ repeat: e }), b();
  }
  get separator() {
    return this.$$.ctx[29];
  }
  set separator(e) {
    this.$$set({ separator: e }), b();
  }
  get sealFontScale() {
    return this.$$.ctx[30];
  }
  set sealFontScale(e) {
    this.$$set({ sealFontScale: e }), b();
  }
  get tooltipMode() {
    return this.$$.ctx[31];
  }
  set tooltipMode(e) {
    this.$$set({ tooltipMode: e }), b();
  }
  get tooltipPlacement() {
    return this.$$.ctx[32];
  }
  set tooltipPlacement(e) {
    this.$$set({ tooltipPlacement: e }), b();
  }
  get tooltipDelayMs() {
    return this.$$.ctx[33];
  }
  set tooltipDelayMs(e) {
    this.$$set({ tooltipDelayMs: e }), b();
  }
  get tooltipMaxWidthPx() {
    return this.$$.ctx[34];
  }
  set tooltipMaxWidthPx(e) {
    this.$$set({ tooltipMaxWidthPx: e }), b();
  }
}
customElements.define("vis-badge", J(Bt, { badge: { type: "Object" }, label: {}, tone: {}, color: {}, icon: {}, description: {}, hint: {}, interactive: { type: "Boolean" }, colorScheme: { type: "Object", attribute: "color-scheme" }, schemeBase: { type: "String", attribute: "scheme-base" }, schemeText: { type: "String", attribute: "scheme-text" }, schemeOutlinedText: { type: "String", attribute: "scheme-outlined-text" }, schemeBorder: { type: "String", attribute: "scheme-border" }, schemeIconBg: { type: "String", attribute: "scheme-icon-bg" }, schemeIconFg: { type: "String", attribute: "scheme-icon-fg" }, actionText: {}, actionIcon: {}, type: {}, variant: {}, corners: { type: "String" }, size: { type: "Number" }, fixed: { type: "Boolean" }, offsetPx: { type: "Number" }, expandDirection: {}, iconBgShape: { type: "String", attribute: "icon-bg-shape" }, ringText: {}, repeat: { type: "Number" }, separator: {}, sealFontScale: { type: "Number" }, tooltipMode: {}, tooltipPlacement: {}, tooltipDelayMs: { type: "Number", attribute: "tooltip-delay-ms" }, tooltipMaxWidthPx: { type: "Number", attribute: "tooltip-max-width-px" } }, [], [], !0));
if (!customElements.get("vis-badge")) {
  const i = Bt.element;
  customElements.define("vis-badge", i);
}
