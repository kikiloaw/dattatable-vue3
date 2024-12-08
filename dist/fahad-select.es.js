import { openBlock as k, createBlock as D, withKeys as x, withModifiers as R, renderSlot as C, createVNode as v, withDirectives as X, Fragment as Je, renderList as We, toDisplayString as M, vShow as Q, createCommentVNode as I, Transition as Xe, withCtx as Qe, createTextVNode as Y, ref as be, watch as sn, onMounted as on, createElementBlock as an, unref as ln, nextTick as un } from "vue";
function At(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: cn } = Object.prototype, { getPrototypeOf: _e } = Object, ue = /* @__PURE__ */ ((e) => (t) => {
  const n = cn.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), V = (e) => (e = e.toLowerCase(), (t) => ue(t) === e), ce = (e) => (t) => typeof t === e, { isArray: G } = Array, ee = ce("undefined");
function fn(e) {
  return e !== null && !ee(e) && e.constructor !== null && !ee(e.constructor) && N(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ct = V("ArrayBuffer");
function dn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ct(e.buffer), t;
}
const hn = ce("string"), N = ce("function"), Pt = ce("number"), fe = (e) => e !== null && typeof e == "object", pn = (e) => e === !0 || e === !1, se = (e) => {
  if (ue(e) !== "object")
    return !1;
  const t = _e(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, mn = V("Date"), bn = V("File"), gn = V("Blob"), yn = V("FileList"), wn = (e) => fe(e) && N(e.pipe), Sn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || N(e.append) && ((t = ue(e)) === "formdata" || // detect form-data instance
  t === "object" && N(e.toString) && e.toString() === "[object FormData]"));
}, On = V("URLSearchParams"), [En, Tn, Rn, vn] = ["ReadableStream", "Request", "Response", "Headers"].map(V), Ln = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), G(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let l;
    for (r = 0; r < i; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Bt(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const _ = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Nt = (e) => !ee(e) && e !== _;
function xe() {
  const { caseless: e } = Nt(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && Bt(t, s) || s;
    se(t[o]) && se(r) ? t[o] = xe(t[o], r) : se(r) ? t[o] = xe({}, r) : G(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && te(arguments[r], n);
  return t;
}
const An = (e, t, n, { allOwnKeys: r } = {}) => (te(t, (s, o) => {
  n && N(s) ? e[o] = At(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Cn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Pn = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Bn = (e, t, n, r) => {
  let s, o, i;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !l[i] && (t[i] = e[i], l[i] = !0);
    e = n !== !1 && _e(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Nn = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, kn = (e) => {
  if (!e) return null;
  if (G(e)) return e;
  let t = e.length;
  if (!Pt(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Dn = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && _e(Uint8Array)), Vn = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Fn = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, jn = V("HTMLFormElement"), xn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Ze = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qn = V("RegExp"), kt = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  te(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, $n = (e) => {
  kt(e, (t, n) => {
    if (N(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (N(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Un = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return G(e) ? r(e) : r(String(e).split(t)), n;
}, In = () => {
}, Mn = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ge = "abcdefghijklmnopqrstuvwxyz", Ye = "0123456789", Dt = {
  DIGIT: Ye,
  ALPHA: ge,
  ALPHA_DIGIT: ge + ge.toUpperCase() + Ye
}, _n = (e = 16, t = Dt.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Hn(e) {
  return !!(e && N(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const zn = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (fe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = G(r) ? [] : {};
        return te(r, (i, l) => {
          const f = n(i, s + 1);
          !ee(f) && (o[l] = f);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Gn = V("AsyncFunction"), Kn = (e) => e && (fe(e) || N(e)) && N(e.then) && N(e.catch), Vt = ((e, t) => e ? setImmediate : t ? ((n, r) => (_.addEventListener("message", ({ source: s, data: o }) => {
  s === _ && o === n && r.length && r.shift()();
}, !1), (s) => {
  r.push(s), _.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  N(_.postMessage)
), Jn = typeof queueMicrotask < "u" ? queueMicrotask.bind(_) : typeof process < "u" && process.nextTick || Vt, a = {
  isArray: G,
  isArrayBuffer: Ct,
  isBuffer: fn,
  isFormData: Sn,
  isArrayBufferView: dn,
  isString: hn,
  isNumber: Pt,
  isBoolean: pn,
  isObject: fe,
  isPlainObject: se,
  isReadableStream: En,
  isRequest: Tn,
  isResponse: Rn,
  isHeaders: vn,
  isUndefined: ee,
  isDate: mn,
  isFile: bn,
  isBlob: gn,
  isRegExp: qn,
  isFunction: N,
  isStream: wn,
  isURLSearchParams: On,
  isTypedArray: Dn,
  isFileList: yn,
  forEach: te,
  merge: xe,
  extend: An,
  trim: Ln,
  stripBOM: Cn,
  inherits: Pn,
  toFlatObject: Bn,
  kindOf: ue,
  kindOfTest: V,
  endsWith: Nn,
  toArray: kn,
  forEachEntry: Vn,
  matchAll: Fn,
  isHTMLForm: jn,
  hasOwnProperty: Ze,
  hasOwnProp: Ze,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kt,
  freezeMethods: $n,
  toObjectSet: Un,
  toCamelCase: xn,
  noop: In,
  toFiniteNumber: Mn,
  findKey: Bt,
  global: _,
  isContextDefined: Nt,
  ALPHABET: Dt,
  generateString: _n,
  isSpecCompliantForm: Hn,
  toJSONObject: zn,
  isAsyncFn: Gn,
  isThenable: Kn,
  setImmediate: Vt,
  asap: Jn
};
function g(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s, this.status = s.status ? s.status : null);
}
a.inherits(g, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Ft = g.prototype, jt = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  jt[e] = { value: e };
});
Object.defineProperties(g, jt);
Object.defineProperty(Ft, "isAxiosError", { value: !0 });
g.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ft);
  return a.toFlatObject(e, i, function(f) {
    return f !== Error.prototype;
  }, (l) => l !== "isAxiosError"), g.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Wn = null;
function qe(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function xt(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function et(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = xt(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Xn(e) {
  return a.isArray(e) && !e.some(qe);
}
const Qn = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function de(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, p) {
    return !a.isUndefined(p[m]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, i = n.indexes, f = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function u(d) {
    if (d === null) return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!f && a.isBlob(d))
      throw new g("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? f && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function c(d, m, p) {
    let S = d;
    if (d && !p && typeof d == "object") {
      if (a.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && Xn(d) || (a.isFileList(d) || a.endsWith(m, "[]")) && (S = a.toArray(d)))
        return m = xt(m), S.forEach(function(O, B) {
          !(a.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? et([m], B, o) : i === null ? m : m + "[]",
            u(O)
          );
        }), !1;
    }
    return qe(d) ? !0 : (t.append(et(p, m, o), u(d)), !1);
  }
  const h = [], b = Object.assign(Qn, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: qe
  });
  function y(d, m) {
    if (!a.isUndefined(d)) {
      if (h.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      h.push(d), a.forEach(d, function(S, w) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(w) ? w.trim() : w,
          m,
          b
        )) === !0 && y(S, m ? m.concat(w) : [w]);
      }), h.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function tt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function He(e, t) {
  this._pairs = [], e && de(e, this, t);
}
const qt = He.prototype;
qt.append = function(t, n) {
  this._pairs.push([t, n]);
};
qt.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, tt);
  } : tt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Zn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function $t(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Zn;
  a.isFunction(n) && (n = {
    serialize: n
  });
  const s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new He(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class nt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ut = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Yn = typeof URLSearchParams < "u" ? URLSearchParams : He, er = typeof FormData < "u" ? FormData : null, tr = typeof Blob < "u" ? Blob : null, nr = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Yn,
    FormData: er,
    Blob: tr
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ze = typeof window < "u" && typeof document < "u", $e = typeof navigator == "object" && navigator || void 0, rr = ze && (!$e || ["ReactNative", "NativeScript", "NS"].indexOf($e.product) < 0), sr = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ir = ze && window.location.href || "http://localhost", or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ze,
  hasStandardBrowserEnv: rr,
  hasStandardBrowserWebWorkerEnv: sr,
  navigator: $e,
  origin: ir
}, Symbol.toStringTag, { value: "Module" })), A = {
  ...or,
  ...nr
};
function ar(e, t) {
  return de(e, new A.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return A.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function lr(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ur(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function It(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const l = Number.isFinite(+i), f = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, f ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !l) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = ur(s[i])), !l);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(lr(r), s, n, 0);
    }), n;
  }
  return null;
}
function cr(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const ne = {
  transitional: Ut,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(It(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t) || a.isReadableStream(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ar(t, this.formSerializer).toString();
      if ((l = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const f = this.env && this.env.FormData;
        return de(
          l ? { "files[]": t } : t,
          f && new f(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), cr(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ne.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (a.isResponse(t) || a.isReadableStream(t))
      return t;
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (i)
          throw l.name === "SyntaxError" ? g.from(l, g.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: A.classes.FormData,
    Blob: A.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ne.headers[e] = {};
});
const fr = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), dr = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && fr[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, rt = Symbol("internals");
function Z(e) {
  return e && String(e).trim().toLowerCase();
}
function ie(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(ie) : String(e);
}
function hr(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const pr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ye(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function mr(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function br(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class P {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(l, f, u) {
      const c = Z(f);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const h = a.findKey(s, c);
      (!h || s[h] === void 0 || u === !0 || u === void 0 && s[h] !== !1) && (s[h || f] = ie(l));
    }
    const i = (l, f) => a.forEach(l, (u, c) => o(u, c, f));
    if (a.isPlainObject(t) || t instanceof this.constructor)
      i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !pr(t))
      i(dr(t), n);
    else if (a.isHeaders(t))
      for (const [l, f] of t.entries())
        o(f, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Z(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return hr(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Z(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ye(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = Z(i), i) {
        const l = a.findKey(r, i);
        l && (!n || ye(r, r[l], l, n)) && (delete r[l], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ye(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = ie(s), delete n[o];
        return;
      }
      const l = t ? mr(o) : String(o).trim();
      l !== o && delete n[o], n[l] = ie(s), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[rt] = this[rt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const l = Z(i);
      r[l] || (br(s, i), r[l] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(P.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(P);
function we(e, t) {
  const n = this || ne, r = t || n, s = P.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(l) {
    o = l.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Mt(e) {
  return !!(e && e.__CANCEL__);
}
function K(e, t, n) {
  g.call(this, e ?? "canceled", g.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(K, g, {
  __CANCEL__: !0
});
function _t(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new g(
    "Request failed with status code " + n.status,
    [g.ERR_BAD_REQUEST, g.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function gr(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function yr(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(f) {
    const u = Date.now(), c = r[o];
    i || (i = u), n[s] = f, r[s] = u;
    let h = o, b = 0;
    for (; h !== s; )
      b += n[h++], h = h % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t)
      return;
    const y = c && u - c;
    return y ? Math.round(b * 1e3 / y) : void 0;
  };
}
function wr(e, t) {
  let n = 0, r = 1e3 / t, s, o;
  const i = (u, c = Date.now()) => {
    n = c, s = null, o && (clearTimeout(o), o = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), h = c - n;
    h >= r ? i(u, c) : (s = u, o || (o = setTimeout(() => {
      o = null, i(s);
    }, r - h)));
  }, () => s && i(s)];
}
const ae = (e, t, n = 3) => {
  let r = 0;
  const s = yr(50, 250);
  return wr((o) => {
    const i = o.loaded, l = o.lengthComputable ? o.total : void 0, f = i - r, u = s(f), c = i <= l;
    r = i;
    const h = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: f,
      rate: u || void 0,
      estimated: u && l && c ? (l - i) / u : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(h);
  }, n);
}, st = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, it = (e) => (...t) => a.asap(() => e(...t)), Sr = A.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, A.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(A.origin),
  A.navigator && /(msie|trident)/i.test(A.navigator.userAgent)
) : () => !0, Or = A.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Er(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Tr(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ht(e, t) {
  return e && !Er(t) ? Tr(e, t) : t;
}
const ot = (e) => e instanceof P ? { ...e } : e;
function z(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, h, b) {
    return a.isPlainObject(u) && a.isPlainObject(c) ? a.merge.call({ caseless: b }, u, c) : a.isPlainObject(c) ? a.merge({}, c) : a.isArray(c) ? c.slice() : c;
  }
  function s(u, c, h, b) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return r(void 0, u, h, b);
    } else return r(u, c, h, b);
  }
  function o(u, c) {
    if (!a.isUndefined(c))
      return r(void 0, c);
  }
  function i(u, c) {
    if (a.isUndefined(c)) {
      if (!a.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, h) {
    if (h in t)
      return r(u, c);
    if (h in e)
      return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: l,
    headers: (u, c, h) => s(ot(u), ot(c), h, !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const h = f[c] || s, b = h(e[c], t[c], c);
    a.isUndefined(b) && h !== l || (n[c] = b);
  }), n;
}
const zt = (e) => {
  const t = z({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: s, xsrfCookieName: o, headers: i, auth: l } = t;
  t.headers = i = P.from(i), t.url = $t(Ht(t.baseURL, t.url), e.params, e.paramsSerializer), l && i.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let f;
  if (a.isFormData(n)) {
    if (A.hasStandardBrowserEnv || A.hasStandardBrowserWebWorkerEnv)
      i.setContentType(void 0);
    else if ((f = i.getContentType()) !== !1) {
      const [u, ...c] = f ? f.split(";").map((h) => h.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (A.hasStandardBrowserEnv && (r && a.isFunction(r) && (r = r(t)), r || r !== !1 && Sr(t.url))) {
    const u = s && o && Or.read(o);
    u && i.set(s, u);
  }
  return t;
}, Rr = typeof XMLHttpRequest < "u", vr = Rr && function(e) {
  return new Promise(function(n, r) {
    const s = zt(e);
    let o = s.data;
    const i = P.from(s.headers).normalize();
    let { responseType: l, onUploadProgress: f, onDownloadProgress: u } = s, c, h, b, y, d;
    function m() {
      y && y(), d && d(), s.cancelToken && s.cancelToken.unsubscribe(c), s.signal && s.signal.removeEventListener("abort", c);
    }
    let p = new XMLHttpRequest();
    p.open(s.method.toUpperCase(), s.url, !0), p.timeout = s.timeout;
    function S() {
      if (!p)
        return;
      const O = P.from(
        "getAllResponseHeaders" in p && p.getAllResponseHeaders()
      ), L = {
        data: !l || l === "text" || l === "json" ? p.responseText : p.response,
        status: p.status,
        statusText: p.statusText,
        headers: O,
        config: e,
        request: p
      };
      _t(function(j) {
        n(j), m();
      }, function(j) {
        r(j), m();
      }, L), p = null;
    }
    "onloadend" in p ? p.onloadend = S : p.onreadystatechange = function() {
      !p || p.readyState !== 4 || p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, p.onabort = function() {
      p && (r(new g("Request aborted", g.ECONNABORTED, e, p)), p = null);
    }, p.onerror = function() {
      r(new g("Network Error", g.ERR_NETWORK, e, p)), p = null;
    }, p.ontimeout = function() {
      let B = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const L = s.transitional || Ut;
      s.timeoutErrorMessage && (B = s.timeoutErrorMessage), r(new g(
        B,
        L.clarifyTimeoutError ? g.ETIMEDOUT : g.ECONNABORTED,
        e,
        p
      )), p = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in p && a.forEach(i.toJSON(), function(B, L) {
      p.setRequestHeader(L, B);
    }), a.isUndefined(s.withCredentials) || (p.withCredentials = !!s.withCredentials), l && l !== "json" && (p.responseType = s.responseType), u && ([b, d] = ae(u, !0), p.addEventListener("progress", b)), f && p.upload && ([h, y] = ae(f), p.upload.addEventListener("progress", h), p.upload.addEventListener("loadend", y)), (s.cancelToken || s.signal) && (c = (O) => {
      p && (r(!O || O.type ? new K(null, e, p) : O), p.abort(), p = null);
    }, s.cancelToken && s.cancelToken.subscribe(c), s.signal && (s.signal.aborted ? c() : s.signal.addEventListener("abort", c)));
    const w = gr(s.url);
    if (w && A.protocols.indexOf(w) === -1) {
      r(new g("Unsupported protocol " + w + ":", g.ERR_BAD_REQUEST, e));
      return;
    }
    p.send(o || null);
  });
}, Lr = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), s;
    const o = function(u) {
      if (!s) {
        s = !0, l();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof g ? c : new K(c instanceof Error ? c.message : c));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new g(`timeout ${t} of ms exceeded`, g.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (i && clearTimeout(i), i = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", o));
    const { signal: f } = r;
    return f.unsubscribe = () => a.asap(l), f;
  }
}, Ar = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, s;
  for (; r < n; )
    s = r + t, yield e.slice(r, s), r = s;
}, Cr = async function* (e, t) {
  for await (const n of Pr(e))
    yield* Ar(n, t);
}, Pr = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, at = (e, t, n, r) => {
  const s = Cr(e, t);
  let o = 0, i, l = (f) => {
    i || (i = !0, r && r(f));
  };
  return new ReadableStream({
    async pull(f) {
      try {
        const { done: u, value: c } = await s.next();
        if (u) {
          l(), f.close();
          return;
        }
        let h = c.byteLength;
        if (n) {
          let b = o += h;
          n(b);
        }
        f.enqueue(new Uint8Array(c));
      } catch (u) {
        throw l(u), u;
      }
    },
    cancel(f) {
      return l(f), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, he = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Gt = he && typeof ReadableStream == "function", Br = he && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Kt = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Nr = Gt && Kt(() => {
  let e = !1;
  const t = new Request(A.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), lt = 64 * 1024, Ue = Gt && Kt(() => a.isReadableStream(new Response("").body)), le = {
  stream: Ue && ((e) => e.body)
};
he && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !le[t] && (le[t] = a.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new g(`Response type '${t}' is not supported`, g.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const kr = async (e) => {
  if (e == null)
    return 0;
  if (a.isBlob(e))
    return e.size;
  if (a.isSpecCompliantForm(e))
    return (await new Request(A.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (a.isArrayBufferView(e) || a.isArrayBuffer(e))
    return e.byteLength;
  if (a.isURLSearchParams(e) && (e = e + ""), a.isString(e))
    return (await Br(e)).byteLength;
}, Dr = async (e, t) => {
  const n = a.toFiniteNumber(e.getContentLength());
  return n ?? kr(t);
}, Vr = he && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: s,
    cancelToken: o,
    timeout: i,
    onDownloadProgress: l,
    onUploadProgress: f,
    responseType: u,
    headers: c,
    withCredentials: h = "same-origin",
    fetchOptions: b
  } = zt(e);
  u = u ? (u + "").toLowerCase() : "text";
  let y = Lr([s, o && o.toAbortSignal()], i), d;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let p;
  try {
    if (f && Nr && n !== "get" && n !== "head" && (p = await Dr(c, r)) !== 0) {
      let L = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), F;
      if (a.isFormData(r) && (F = L.headers.get("content-type")) && c.setContentType(F), L.body) {
        const [j, $] = st(
          p,
          ae(it(f))
        );
        r = at(L.body, lt, j, $);
      }
    }
    a.isString(h) || (h = h ? "include" : "omit");
    const S = "credentials" in Request.prototype;
    d = new Request(t, {
      ...b,
      signal: y,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: S ? h : void 0
    });
    let w = await fetch(d);
    const O = Ue && (u === "stream" || u === "response");
    if (Ue && (l || O && m)) {
      const L = {};
      ["status", "statusText", "headers"].forEach((J) => {
        L[J] = w[J];
      });
      const F = a.toFiniteNumber(w.headers.get("content-length")), [j, $] = l && st(
        F,
        ae(it(l), !0)
      ) || [];
      w = new Response(
        at(w.body, lt, j, () => {
          $ && $(), m && m();
        }),
        L
      );
    }
    u = u || "text";
    let B = await le[a.findKey(le, u) || "text"](w, e);
    return !O && m && m(), await new Promise((L, F) => {
      _t(L, F, {
        data: B,
        headers: P.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: d
      });
    });
  } catch (S) {
    throw m && m(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new g("Network Error", g.ERR_NETWORK, e, d),
      {
        cause: S.cause || S
      }
    ) : g.from(S, S && S.code, e, d);
  }
}), Ie = {
  http: Wn,
  xhr: vr,
  fetch: Vr
};
a.forEach(Ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ut = (e) => `- ${e}`, Fr = (e) => a.isFunction(e) || e === null || e === !1, Jt = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Fr(n) && (r = Ie[(i = String(n)).toLowerCase()], r === void 0))
        throw new g(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([l, f]) => `adapter ${l} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(ut).join(`
`) : " " + ut(o[0]) : "as no adapter specified";
      throw new g(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ie
};
function Se(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new K(null, e);
}
function ct(e) {
  return Se(e), e.headers = P.from(e.headers), e.data = we.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Jt.getAdapter(e.adapter || ne.adapter)(e).then(function(r) {
    return Se(e), r.data = we.call(
      e,
      e.transformResponse,
      r
    ), r.headers = P.from(r.headers), r;
  }, function(r) {
    return Mt(r) || (Se(e), r && r.response && (r.response.data = we.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = P.from(r.response.headers))), Promise.reject(r);
  });
}
const Wt = "1.7.9", pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  pe[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ft = {};
pe.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Wt + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, l) => {
    if (t === !1)
      throw new g(
        s(i, " has been removed" + (n ? " in " + n : "")),
        g.ERR_DEPRECATED
      );
    return n && !ft[i] && (ft[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, l) : !0;
  };
};
pe.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function jr(e, t, n) {
  if (typeof e != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const l = e[o], f = l === void 0 || i(l, o, e);
      if (f !== !0)
        throw new g("option " + o + " must be " + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new g("Unknown option " + o, g.ERR_BAD_OPTION);
  }
}
const oe = {
  assertOptions: jr,
  validators: pe
}, q = oe.validators;
class H {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new nt(),
      response: new nt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = z(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && oe.assertOptions(r, {
      silentJSONParsing: q.transitional(q.boolean),
      forcedJSONParsing: q.transitional(q.boolean),
      clarifyTimeoutError: q.transitional(q.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : oe.assertOptions(s, {
      encode: q.function,
      serialize: q.function
    }, !0)), oe.assertOptions(n, {
      baseUrl: q.spelling("baseURL"),
      withXsrfToken: q.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = P.concat(i, o);
    const l = [];
    let f = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (f = f && m.synchronous, l.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, h = 0, b;
    if (!f) {
      const d = [ct.bind(this), void 0];
      for (d.unshift.apply(d, l), d.push.apply(d, u), b = d.length, c = Promise.resolve(n); h < b; )
        c = c.then(d[h++], d[h++]);
      return c;
    }
    b = l.length;
    let y = n;
    for (h = 0; h < b; ) {
      const d = l[h++], m = l[h++];
      try {
        y = d(y);
      } catch (p) {
        m.call(this, p);
        break;
      }
    }
    try {
      c = ct.call(this, y);
    } catch (d) {
      return Promise.reject(d);
    }
    for (h = 0, b = u.length; h < b; )
      c = c.then(u[h++], u[h++]);
    return c;
  }
  getUri(t) {
    t = z(this.defaults, t);
    const n = Ht(t.baseURL, t.url);
    return $t(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  H.prototype[t] = function(n, r) {
    return this.request(z(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, l) {
      return this.request(z(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  H.prototype[t] = n(), H.prototype[t + "Form"] = n(!0);
});
class Ge {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, l) {
      r.reason || (r.reason = new K(o, i, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ge(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
function xr(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function qr(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Me = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Me).forEach(([e, t]) => {
  Me[t] = e;
});
function Xt(e) {
  const t = new H(e), n = At(H.prototype.request, t);
  return a.extend(n, H.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Xt(z(e, s));
  }, n;
}
const E = Xt(ne);
E.Axios = H;
E.CanceledError = K;
E.CancelToken = Ge;
E.isCancel = Mt;
E.VERSION = Wt;
E.toFormData = de;
E.AxiosError = g;
E.Cancel = E.CanceledError;
E.all = function(t) {
  return Promise.all(t);
};
E.spread = xr;
E.isAxiosError = qr;
E.mergeConfig = z;
E.AxiosHeaders = P;
E.formToJSON = (e) => It(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = Jt.getAdapter;
E.HttpStatusCode = Me;
E.default = E;
function Oe(e) {
  return e === 0 ? !1 : Array.isArray(e) && e.length === 0 ? !0 : !e;
}
function $r(e) {
  return (...t) => !e(...t);
}
function Ur(e, t) {
  return e === void 0 && (e = "undefined"), e === null && (e = "null"), e === !1 && (e = "false"), e.toString().toLowerCase().indexOf(t.trim()) !== -1;
}
function Qt(e, t, n, r) {
  return t ? e.filter((s) => Ur(r(s, n), t)).sort((s, o) => r(s, n).length - r(o, n).length) : e;
}
function Ir(e) {
  return e.filter((t) => !t.$isLabel);
}
function Ee(e, t) {
  return (n) => n.reduce((r, s) => s[e] && s[e].length ? (r.push({
    $groupLabel: s[t],
    $isLabel: !0
  }), r.concat(s[e])) : r, []);
}
function Mr(e, t, n, r, s) {
  return (o) => o.map((i) => {
    if (!i[n])
      return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."), [];
    const l = Qt(i[n], e, t, s);
    return l.length ? {
      [r]: i[r],
      [n]: l
    } : [];
  });
}
const dt = (...e) => (t) => e.reduce((n, r) => r(n), t);
var _r = {
  data() {
    return {
      search: "",
      isOpen: !1,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: !1
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: !0
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: !1
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: !0
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: !1
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: !0
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(e, t) {
        return Oe(e) ? "" : t ? e[t] : e;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: !1
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: !1
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: !1
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: !1
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
    */
    preventAutofocus: {
      type: Boolean,
      default: !1
    }
  },
  mounted() {
    !this.multiple && this.max && console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."), this.preselectFirst && !this.internalValue.length && this.options.length && this.select(this.filteredOptions[0]);
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const e = this.search || "", t = e.toLowerCase().trim();
      let n = this.options.concat();
      return this.internalSearch ? n = this.groupValues ? this.filterAndFlat(n, t, this.label) : Qt(n, t, this.label, this.customLabel) : n = this.groupValues ? Ee(this.groupValues, this.groupLabel)(n) : n, n = this.hideSelected ? n.filter($r(this.isSelected)) : n, this.taggable && t.length && !this.isExistingOption(t) && (this.tagPosition === "bottom" ? n.push({ isTag: !0, label: e }) : n.unshift({ isTag: !0, label: e })), n.slice(0, this.optionsLimit);
    },
    valueKeys() {
      return this.trackBy ? this.internalValue.map((e) => e[this.trackBy]) : this.internalValue;
    },
    optionKeys() {
      return (this.groupValues ? this.flatAndStrip(this.options) : this.options).map((t) => this.customLabel(t, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue: {
      handler() {
        this.resetAfter && this.internalValue.length && (this.search = "", this.$emit("update:modelValue", this.multiple ? [] : null));
      },
      deep: !0
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(e, t, n) {
      return dt(
        Mr(t, n, this.groupValues, this.groupLabel, this.customLabel),
        Ee(this.groupValues, this.groupLabel)
      )(e);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(e) {
      return dt(
        Ee(this.groupValues, this.groupLabel),
        Ir
      )(e);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(e) {
      this.search = e;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(e) {
      return this.options ? this.optionKeys.indexOf(e) > -1 : !1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(e) {
      const t = this.trackBy ? e[this.trackBy] : e;
      return this.valueKeys.indexOf(t) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(e) {
      return !!e.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(e) {
      if (Oe(e)) return "";
      if (e.isTag) return e.label;
      if (e.$isLabel) return e.$groupLabel;
      const t = this.customLabel(e, this.label);
      return Oe(t) ? "" : t;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(e, t) {
      if (e.$isLabel && this.groupSelect) {
        this.selectGroup(e);
        return;
      }
      if (!(this.blockKeys.indexOf(t) !== -1 || this.disabled || e.$isDisabled || e.$isLabel) && !(this.max && this.multiple && this.internalValue.length === this.max) && !(t === "Tab" && !this.pointerDirty)) {
        if (e.isTag)
          this.$emit("tag", e.label, this.id), this.search = "", this.closeOnSelect && !this.multiple && this.deactivate();
        else {
          if (this.isSelected(e)) {
            t !== "Tab" && this.removeElement(e);
            return;
          }
          this.multiple ? this.$emit("update:modelValue", this.internalValue.concat([e])) : this.$emit("update:modelValue", e), this.$emit("select", e, this.id), this.clearOnSelect && (this.search = "");
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(e) {
      const t = this.options.find((n) => n[this.groupLabel] === e.$groupLabel);
      if (t) {
        if (this.wholeGroupSelected(t)) {
          this.$emit("remove", t[this.groupValues], this.id);
          const n = this.trackBy ? t[this.groupValues].map((s) => s[this.trackBy]) : t[this.groupValues], r = this.internalValue.filter(
            (s) => n.indexOf(this.trackBy ? s[this.trackBy] : s) === -1
          );
          this.$emit("update:modelValue", r);
        } else {
          let n = t[this.groupValues].filter(
            (r) => !(this.isOptionDisabled(r) || this.isSelected(r))
          );
          this.max && n.splice(this.max - this.internalValue.length), this.$emit("select", n, this.id), this.$emit(
            "update:modelValue",
            this.internalValue.concat(n)
          );
        }
        this.closeOnSelect && this.deactivate();
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(e) {
      return e[this.groupValues].every(
        (t) => this.isSelected(t) || this.isOptionDisabled(t)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(e) {
      return e[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(e, t = !0) {
      if (this.disabled || e.$isDisabled) return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const n = typeof e == "object" ? this.valueKeys.indexOf(e[this.trackBy]) : this.valueKeys.indexOf(e);
      if (this.multiple) {
        const r = this.internalValue.slice(0, n).concat(this.internalValue.slice(n + 1));
        this.$emit("update:modelValue", r);
      } else
        this.$emit("update:modelValue", null);
      this.$emit("remove", e, this.id), this.closeOnSelect && t && this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      this.blockKeys.indexOf("Delete") === -1 && this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length && this.removeElement(this.internalValue[this.internalValue.length - 1], !1);
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      this.isOpen || this.disabled || (this.adjustPosition(), this.groupValues && this.pointer === 0 && this.filteredOptions.length && (this.pointer = 1), this.isOpen = !0, this.searchable ? (this.preserveSearch || (this.search = ""), this.preventAutofocus || this.$nextTick(() => this.$refs.search && this.$refs.search.focus())) : this.preventAutofocus || typeof this.$el < "u" && this.$el.focus(), this.$emit("open", this.id));
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      this.isOpen && (this.isOpen = !1, this.searchable ? this.$refs.search !== null && typeof this.$refs.search < "u" && this.$refs.search.blur() : typeof this.$el < "u" && this.$el.blur(), this.preserveSearch || (this.search = ""), this.$emit("close", this.getValue(), this.id));
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window > "u") return;
      const e = this.$el.getBoundingClientRect().top, t = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      t > this.maxHeight || t > e || this.openDirection === "below" || this.openDirection === "bottom" ? (this.preferredOpenDirection = "below", this.optimizedHeight = Math.min(t - 40, this.maxHeight)) : (this.preferredOpenDirection = "above", this.optimizedHeight = Math.min(e - 40, this.maxHeight));
    }
  }
}, Hr = {
  data() {
    return {
      pointer: 0,
      pointerDirty: !1
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: !0
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = !1;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(e, t) {
      return {
        "multiselect__option--highlight": e === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(t)
      };
    },
    groupHighlight(e, t) {
      if (!this.groupSelect)
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": t.$isLabel }
        ];
      const n = this.options.find((r) => r[this.groupLabel] === t.$groupLabel);
      return n && !this.wholeGroupDisabled(n) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": e === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(n) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key: e } = "Enter") {
      this.filteredOptions.length > 0 && this.select(this.filteredOptions[this.pointer], e), this.pointerReset();
    },
    pointerForward() {
      this.pointer < this.filteredOptions.length - 1 && (this.pointer++, this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight && (this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward()), this.pointerDirty = !0;
    },
    pointerBackward() {
      this.pointer > 0 ? (this.pointer--, this.$refs.list.scrollTop >= this.pointerPosition && (this.$refs.list.scrollTop = this.pointerPosition), this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerBackward()) : this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect && this.pointerForward(), this.pointerDirty = !0;
    },
    pointerReset() {
      this.closeOnSelect && (this.pointer = 0, this.$refs.list && (this.$refs.list.scrollTop = 0));
    },
    pointerAdjust() {
      this.pointer >= this.filteredOptions.length - 1 && (this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0), this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect && this.pointerForward();
    },
    pointerSet(e) {
      this.pointer = e, this.pointerDirty = !0;
    }
  }
}, Zt = {
  name: "vue-multiselect",
  mixins: [_r, Hr],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: !1
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ""
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: !0
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (e) => `and ${e} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: !1
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ""
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: !0
    },
    showNoResults: {
      type: Boolean,
      default: !0
    },
    tabindex: {
      type: Number,
      default: 0
    },
    required: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasOptionGroup() {
      return this.groupValues && this.groupLabel && this.groupSelect;
    },
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      return this.searchable || this.multiple && this.modelValue && this.modelValue.length ? this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" } : "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      return this.openDirection === "above" || this.openDirection === "top" ? !0 : this.openDirection === "below" || this.openDirection === "bottom" ? !1 : this.preferredOpenDirection === "above";
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : !0);
    }
  }
};
const zr = {
  ref: "tags",
  class: "multiselect__tags"
}, Gr = { class: "multiselect__tags-wrap" }, Kr = { class: "multiselect__spinner" }, Jr = { key: 0 }, Wr = { class: "multiselect__option" }, Xr = { class: "multiselect__option" }, Qr = /* @__PURE__ */ Y("No elements found. Consider changing the search query."), Zr = { class: "multiselect__option" }, Yr = /* @__PURE__ */ Y("List is empty.");
function es(e, t, n, r, s, o) {
  return k(), D("div", {
    tabindex: e.searchable ? -1 : n.tabindex,
    class: [{ "multiselect--active": e.isOpen, "multiselect--disabled": n.disabled, "multiselect--above": o.isAbove, "multiselect--has-options-group": o.hasOptionGroup }, "multiselect"],
    onFocus: t[14] || (t[14] = (i) => e.activate()),
    onBlur: t[15] || (t[15] = (i) => e.searchable ? !1 : e.deactivate()),
    onKeydown: [
      t[16] || (t[16] = x(R((i) => e.pointerForward(), ["self", "prevent"]), ["down"])),
      t[17] || (t[17] = x(R((i) => e.pointerBackward(), ["self", "prevent"]), ["up"]))
    ],
    onKeypress: t[18] || (t[18] = x(R((i) => e.addPointerElement(i), ["stop", "self"]), ["enter", "tab"])),
    onKeyup: t[19] || (t[19] = x((i) => e.deactivate(), ["esc"])),
    role: "combobox",
    "aria-owns": "listbox-" + e.id
  }, [
    C(e.$slots, "caret", { toggle: e.toggle }, () => [
      v(
        "div",
        {
          onMousedown: t[1] || (t[1] = R((i) => e.toggle(), ["prevent", "stop"])),
          class: "multiselect__select"
        },
        null,
        32
        /* HYDRATE_EVENTS */
      )
    ]),
    C(e.$slots, "clear", { search: e.search }),
    v(
      "div",
      zr,
      [
        C(e.$slots, "selection", {
          search: e.search,
          remove: e.removeElement,
          values: o.visibleValues,
          isOpen: e.isOpen
        }, () => [
          X(v(
            "div",
            Gr,
            [
              (k(!0), D(
                Je,
                null,
                We(o.visibleValues, (i, l) => C(e.$slots, "tag", {
                  option: i,
                  search: e.search,
                  remove: e.removeElement
                }, () => [
                  (k(), D("span", {
                    class: "multiselect__tag",
                    key: l
                  }, [
                    v("span", {
                      textContent: M(e.getOptionLabel(i))
                    }, null, 8, ["textContent"]),
                    v("i", {
                      tabindex: "1",
                      onKeypress: x(R((f) => e.removeElement(i), ["prevent"]), ["enter"]),
                      onMousedown: R((f) => e.removeElement(i), ["prevent"]),
                      class: "multiselect__tag-icon"
                    }, null, 40, ["onKeypress", "onMousedown"])
                  ]))
                ])),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [Q, o.visibleValues.length > 0]
          ]),
          e.internalValue && e.internalValue.length > n.limit ? C(e.$slots, "limit", { key: 0 }, () => [
            v("strong", {
              class: "multiselect__strong",
              textContent: M(n.limitText(e.internalValue.length - n.limit))
            }, null, 8, ["textContent"])
          ]) : I("v-if", !0)
        ]),
        v(Xe, { name: "multiselect__loading" }, {
          default: Qe(() => [
            C(e.$slots, "loading", {}, () => [
              X(v(
                "div",
                Kr,
                null,
                512
                /* NEED_PATCH */
              ), [
                [Q, n.loading]
              ])
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        e.searchable ? (k(), D("input", {
          key: 0,
          ref: "search",
          name: n.name,
          id: e.id,
          type: "text",
          autocomplete: "off",
          spellcheck: n.spellcheck,
          placeholder: e.placeholder,
          required: n.required,
          style: o.inputStyle,
          value: e.search,
          disabled: n.disabled,
          tabindex: n.tabindex,
          onInput: t[2] || (t[2] = (i) => e.updateSearch(i.target.value)),
          onFocus: t[3] || (t[3] = R((i) => e.activate(), ["prevent"])),
          onBlur: t[4] || (t[4] = R((i) => e.deactivate(), ["prevent"])),
          onKeyup: t[5] || (t[5] = x((i) => e.deactivate(), ["esc"])),
          onKeydown: [
            t[6] || (t[6] = x(R((i) => e.pointerForward(), ["prevent"]), ["down"])),
            t[7] || (t[7] = x(R((i) => e.pointerBackward(), ["prevent"]), ["up"])),
            t[9] || (t[9] = x(R((i) => e.removeLastElement(), ["stop"]), ["delete"]))
          ],
          onKeypress: t[8] || (t[8] = x(R((i) => e.addPointerElement(i), ["prevent", "stop", "self"]), ["enter"])),
          class: "multiselect__input",
          "aria-controls": "listbox-" + e.id
        }, null, 44, ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-controls"])) : I("v-if", !0),
        o.isSingleLabelVisible ? (k(), D(
          "span",
          {
            key: 1,
            class: "multiselect__single",
            onMousedown: t[10] || (t[10] = R((...i) => e.toggle && e.toggle(...i), ["prevent"]))
          },
          [
            C(e.$slots, "singleLabel", { option: o.singleValue }, () => [
              Y(
                M(e.currentOptionLabel),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : I("v-if", !0),
        o.isPlaceholderVisible ? (k(), D(
          "span",
          {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: t[11] || (t[11] = R((...i) => e.toggle && e.toggle(...i), ["prevent"]))
          },
          [
            C(e.$slots, "placeholder", {}, () => [
              Y(
                M(e.placeholder),
                1
                /* TEXT */
              )
            ])
          ],
          32
          /* HYDRATE_EVENTS */
        )) : I("v-if", !0)
      ],
      512
      /* NEED_PATCH */
    ),
    v(Xe, { name: "multiselect" }, {
      default: Qe(() => [
        X(v(
          "div",
          {
            class: "multiselect__content-wrapper",
            onFocus: t[12] || (t[12] = (...i) => e.activate && e.activate(...i)),
            tabindex: "-1",
            onMousedown: t[13] || (t[13] = R(() => {
            }, ["prevent"])),
            style: { maxHeight: e.optimizedHeight + "px" },
            ref: "list"
          },
          [
            v("ul", {
              class: "multiselect__content",
              style: o.contentStyle,
              role: "listbox",
              id: "listbox-" + e.id,
              "aria-multiselectable": e.multiple
            }, [
              C(e.$slots, "beforeList"),
              e.multiple && e.max === e.internalValue.length ? (k(), D("li", Jr, [
                v("span", Wr, [
                  C(e.$slots, "maxElements", {}, () => [
                    Y(
                      "Maximum of " + M(e.max) + " options selected. First remove a selected option to select another.",
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ])) : I("v-if", !0),
              !e.max || e.internalValue.length < e.max ? (k(!0), D(
                Je,
                { key: 1 },
                We(e.filteredOptions, (i, l) => (k(), D("li", {
                  class: "multiselect__element",
                  key: l,
                  "aria-selected": e.isSelected(i),
                  id: e.id + "-" + l,
                  role: i && (i.$isLabel || i.$isDisabled) ? null : "option"
                }, [
                  i && (i.$isLabel || i.$isDisabled) ? I("v-if", !0) : (k(), D("span", {
                    key: 0,
                    class: [e.optionHighlight(l, i), "multiselect__option"],
                    onClick: R((f) => e.select(i), ["stop"]),
                    onMouseenter: R((f) => e.pointerSet(l), ["self"]),
                    "data-select": i && i.isTag ? e.tagPlaceholder : o.selectLabelText,
                    "data-selected": o.selectedLabelText,
                    "data-deselect": o.deselectLabelText
                  }, [
                    C(e.$slots, "option", {
                      option: i,
                      search: e.search,
                      index: l
                    }, () => [
                      v(
                        "span",
                        null,
                        M(e.getOptionLabel(i)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"])),
                  i && (i.$isLabel || i.$isDisabled) ? (k(), D("span", {
                    key: 1,
                    "data-select": e.groupSelect && o.selectGroupLabelText,
                    "data-deselect": e.groupSelect && o.deselectGroupLabelText,
                    class: [e.groupHighlight(l, i), "multiselect__option"],
                    onMouseenter: R((f) => e.groupSelect && e.pointerSet(l), ["self"]),
                    onMousedown: R((f) => e.selectGroup(i), ["prevent"])
                  }, [
                    C(e.$slots, "option", {
                      option: i,
                      search: e.search,
                      index: l
                    }, () => [
                      v(
                        "span",
                        null,
                        M(e.getOptionLabel(i)),
                        1
                        /* TEXT */
                      )
                    ])
                  ], 42, ["data-select", "data-deselect", "onMouseenter", "onMousedown"])) : I("v-if", !0)
                ], 8, ["aria-selected", "id", "role"]))),
                128
                /* KEYED_FRAGMENT */
              )) : I("v-if", !0),
              X(v(
                "li",
                null,
                [
                  v("span", Xr, [
                    C(e.$slots, "noResult", { search: e.search }, () => [
                      Qr
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Q, n.showNoResults && e.filteredOptions.length === 0 && e.search && !n.loading]
              ]),
              X(v(
                "li",
                null,
                [
                  v("span", Zr, [
                    C(e.$slots, "noOptions", {}, () => [
                      Yr
                    ])
                  ])
                ],
                512
                /* NEED_PATCH */
              ), [
                [Q, n.showNoOptions && (e.options.length === 0 || o.hasOptionGroup === !0 && e.filteredOptions.length === 0) && !e.search && !n.loading]
              ]),
              C(e.$slots, "afterList")
            ], 12, ["id", "aria-multiselectable"])
          ],
          36
          /* STYLE, HYDRATE_EVENTS */
        ), [
          [Q, e.isOpen]
        ])
      ]),
      _: 3
      /* FORWARDED */
    })
  ], 42, ["tabindex", "aria-owns"]);
}
Zt.render = es;
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Te, ht;
function Yt() {
  if (ht) return Te;
  ht = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Te = e, Te;
}
var Re, pt;
function ns() {
  if (pt) return Re;
  pt = 1;
  var e = typeof re == "object" && re && re.Object === Object && re;
  return Re = e, Re;
}
var ve, mt;
function en() {
  if (mt) return ve;
  mt = 1;
  var e = ns(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return ve = n, ve;
}
var Le, bt;
function rs() {
  if (bt) return Le;
  bt = 1;
  var e = en(), t = function() {
    return e.Date.now();
  };
  return Le = t, Le;
}
var Ae, gt;
function ss() {
  if (gt) return Ae;
  gt = 1;
  var e = /\s/;
  function t(n) {
    for (var r = n.length; r-- && e.test(n.charAt(r)); )
      ;
    return r;
  }
  return Ae = t, Ae;
}
var Ce, yt;
function is() {
  if (yt) return Ce;
  yt = 1;
  var e = ss(), t = /^\s+/;
  function n(r) {
    return r && r.slice(0, e(r) + 1).replace(t, "");
  }
  return Ce = n, Ce;
}
var Pe, wt;
function tn() {
  if (wt) return Pe;
  wt = 1;
  var e = en(), t = e.Symbol;
  return Pe = t, Pe;
}
var Be, St;
function os() {
  if (St) return Be;
  St = 1;
  var e = tn(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var l = n.call(i, s), f = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var c = r.call(i);
    return u && (l ? i[s] = f : delete i[s]), c;
  }
  return Be = o, Be;
}
var Ne, Ot;
function as() {
  if (Ot) return Ne;
  Ot = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Ne = n, Ne;
}
var ke, Et;
function ls() {
  if (Et) return ke;
  Et = 1;
  var e = tn(), t = os(), n = as(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(l) {
    return l == null ? l === void 0 ? s : r : o && o in Object(l) ? t(l) : n(l);
  }
  return ke = i, ke;
}
var De, Tt;
function us() {
  if (Tt) return De;
  Tt = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return De = e, De;
}
var Ve, Rt;
function cs() {
  if (Rt) return Ve;
  Rt = 1;
  var e = ls(), t = us(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return Ve = r, Ve;
}
var Fe, vt;
function fs() {
  if (vt) return Fe;
  vt = 1;
  var e = is(), t = Yt(), n = cs(), r = NaN, s = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, i = /^0o[0-7]+$/i, l = parseInt;
  function f(u) {
    if (typeof u == "number")
      return u;
    if (n(u))
      return r;
    if (t(u)) {
      var c = typeof u.valueOf == "function" ? u.valueOf() : u;
      u = t(c) ? c + "" : c;
    }
    if (typeof u != "string")
      return u === 0 ? u : +u;
    u = e(u);
    var h = o.test(u);
    return h || i.test(u) ? l(u.slice(2), h ? 2 : 8) : s.test(u) ? r : +u;
  }
  return Fe = f, Fe;
}
var je, Lt;
function ds() {
  if (Lt) return je;
  Lt = 1;
  var e = Yt(), t = rs(), n = fs(), r = "Expected a function", s = Math.max, o = Math.min;
  function i(l, f, u) {
    var c, h, b, y, d, m, p = 0, S = !1, w = !1, O = !0;
    if (typeof l != "function")
      throw new TypeError(r);
    f = n(f) || 0, e(u) && (S = !!u.leading, w = "maxWait" in u, b = w ? s(n(u.maxWait) || 0, f) : b, O = "trailing" in u ? !!u.trailing : O);
    function B(T) {
      var U = c, W = h;
      return c = h = void 0, p = T, y = l.apply(W, U), y;
    }
    function L(T) {
      return p = T, d = setTimeout($, f), S ? B(T) : y;
    }
    function F(T) {
      var U = T - m, W = T - p, Ke = f - U;
      return w ? o(Ke, b - W) : Ke;
    }
    function j(T) {
      var U = T - m, W = T - p;
      return m === void 0 || U >= f || U < 0 || w && W >= b;
    }
    function $() {
      var T = t();
      if (j(T))
        return J(T);
      d = setTimeout($, F(T));
    }
    function J(T) {
      return d = void 0, O && c ? B(T) : (c = h = void 0, y);
    }
    function nn() {
      d !== void 0 && clearTimeout(d), p = 0, c = m = h = d = void 0;
    }
    function rn() {
      return d === void 0 ? y : J(t());
    }
    function me() {
      var T = t(), U = j(T);
      if (c = arguments, h = this, m = T, U) {
        if (d === void 0)
          return L(m);
        if (w)
          return clearTimeout(d), d = setTimeout($, f), B(m);
      }
      return d === void 0 && (d = setTimeout($, f)), y;
    }
    return me.cancel = nn, me.flush = rn, me;
  }
  return je = i, je;
}
var hs = ds();
const ps = /* @__PURE__ */ ts(hs), bs = {
  __name: "FahadSelect",
  props: {
    modelValue: Object,
    searchRoute: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    param: {
      type: [Object, Boolean],
      default: !1
    },
    placeholder: {
      type: String,
      default: "Select an option"
    },
    label: {
      type: String,
      default: "name"
    }
  },
  emits: ["update:modelValue", "triggerChange", "reload"],
  setup(e, { expose: t, emit: n }) {
    const r = e, s = n, o = be([]), i = be(!1), l = be(r.modelValue);
    sn(l, (b) => {
      s("update:modelValue", b), s("triggerChange", b);
    }), on(() => {
      f("");
    });
    const f = async (b) => {
      i.value = !0;
      try {
        const y = await E.get(route(r.searchRoute), {
          params: {
            query_: b,
            param: r.param
          }
        });
        o.value = y.data.results;
      } catch (y) {
        console.error(y);
      } finally {
        i.value = !1;
      }
    }, u = async () => {
      await un(), await f(""), l.value = null;
    };
    t({
      reload: u
    }), s("reload", u);
    const c = ps((b) => {
      f(b);
    }, 300), h = (b) => {
      var y;
      ((y = l.value) == null ? void 0 : y.name) !== b && c(b);
    };
    return (b, y) => (k(), an("div", null, [
      v(ln(Zt), {
        modelValue: l.value,
        "onUpdate:modelValue": y[0] || (y[0] = (d) => l.value = d),
        options: o.value,
        "track-by": "id",
        onSearchChange: h,
        label: e.label,
        placeholder: e.placeholder,
        loading: i.value,
        multiple: e.multiple
      }, null, 8, ["modelValue", "options", "label", "placeholder", "loading", "multiple"])
    ]));
  }
};
export {
  bs as default
};
