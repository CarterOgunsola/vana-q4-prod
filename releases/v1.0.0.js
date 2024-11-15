var Lg = Object.defineProperty;
var Rg = (Zt, We, cn) =>
  We in Zt
    ? Lg(Zt, We, { enumerable: !0, configurable: !0, writable: !0, value: cn })
    : (Zt[We] = cn);
var V = (Zt, We, cn) => Rg(Zt, typeof We != "symbol" ? We + "" : We, cn);
(function (Zt) {
  typeof define == "function" && define.amd ? define(Zt) : Zt();
})(function () {
  "use strict";
  var Zd;
  var Zt = document.createElement("style");
  (Zt.textContent = `body{margin:0;padding:0}
/*$vite$:1*/`),
    document.head.appendChild(Zt);
  function We(n) {
    if (n === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return n;
  }
  function cn(n, e) {
    (n.prototype = Object.create(e.prototype)),
      (n.prototype.constructor = n),
      (n.__proto__ = e);
  }
  /*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Tt = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    Un = { duration: 0.5, overwrite: !1, delay: 0 },
    Oo,
    Ge,
    fe,
    $t = 1e8,
    de = 1 / $t,
    Mo = Math.PI * 2,
    Jd = Mo / 4,
    ep = 0,
    Wl = Math.sqrt,
    tp = Math.cos,
    ip = Math.sin,
    Be = function (e) {
      return typeof e == "string";
    },
    Ce = function (e) {
      return typeof e == "function";
    },
    xi = function (e) {
      return typeof e == "number";
    },
    Lo = function (e) {
      return typeof e > "u";
    },
    ai = function (e) {
      return typeof e == "object";
    },
    gt = function (e) {
      return e !== !1;
    },
    Ro = function () {
      return typeof window < "u";
    },
    Es = function (e) {
      return Ce(e) || Be(e);
    },
    ql =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    Xe = Array.isArray,
    Vo = /(?:-?\.?\d|\.)+/gi,
    Kl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Wn = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    Bo = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Yl = /[+-]=-?[.\d]+/,
    Gl = /[^,'"\[\]\s]+/gi,
    np = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _e,
    li,
    No,
    Io,
    Ft = {},
    xs = {},
    Xl,
    Zl = function (e) {
      return (xs = pn(e, Ft)) && bt;
    },
    zo = function (e, t) {
      return console.warn(
        "Invalid property",
        e,
        "set to",
        t,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    xr = function (e, t) {
      return !t && console.warn(e);
    },
    Ql = function (e, t) {
      return (e && (Ft[e] = t) && xs && (xs[e] = t)) || Ft;
    },
    Pr = function () {
      return 0;
    },
    rp = { suppressEvents: !0, isStart: !0, kill: !1 },
    Ps = { suppressEvents: !0, kill: !1 },
    sp = { suppressEvents: !0 },
    $o = {},
    Ni = [],
    jo = {},
    Jl,
    kt = {},
    Ho = {},
    eu = 30,
    Ss = [],
    Uo = "",
    Wo = function (e) {
      var t = e[0],
        i,
        r;
      if ((ai(t) || Ce(t) || (e = [e]), !(i = (t._gsap || {}).harness))) {
        for (r = Ss.length; r-- && !Ss[r].targetTest(t); );
        i = Ss[r];
      }
      for (r = e.length; r--; )
        (e[r] && (e[r]._gsap || (e[r]._gsap = new Fu(e[r], i)))) ||
          e.splice(r, 1);
      return e;
    },
    dn = function (e) {
      return e._gsap || Wo(Ut(e))[0]._gsap;
    },
    tu = function (e, t, i) {
      return (i = e[t]) && Ce(i)
        ? e[t]()
        : (Lo(i) && e.getAttribute && e.getAttribute(t)) || i;
    },
    wt = function (e, t) {
      return (e = e.split(",")).forEach(t) || e;
    },
    Ee = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Ne = function (e) {
      return Math.round(e * 1e7) / 1e7 || 0;
    },
    qn = function (e, t) {
      var i = t.charAt(0),
        r = parseFloat(t.substr(2));
      return (
        (e = parseFloat(e)),
        i === "+" ? e + r : i === "-" ? e - r : i === "*" ? e * r : e / r
      );
    },
    op = function (e, t) {
      for (var i = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < i; );
      return r < i;
    },
    Ts = function () {
      var e = Ni.length,
        t = Ni.slice(0),
        i,
        r;
      for (jo = {}, Ni.length = 0, i = 0; i < e; i++)
        (r = t[i]),
          r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
    },
    iu = function (e, t, i, r) {
      Ni.length && !Ge && Ts(),
        e.render(t, i, Ge && t < 0 && (e._initted || e._startAt)),
        Ni.length && !Ge && Ts();
    },
    nu = function (e) {
      var t = parseFloat(e);
      return (t || t === 0) && (e + "").match(Gl).length < 2
        ? t
        : Be(e)
        ? e.trim()
        : e;
    },
    ru = function (e) {
      return e;
    },
    jt = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    ap = function (e) {
      return function (t, i) {
        for (var r in i)
          r in t || (r === "duration" && e) || r === "ease" || (t[r] = i[r]);
      };
    },
    pn = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    su = function n(e, t) {
      for (var i in t)
        i !== "__proto__" &&
          i !== "constructor" &&
          i !== "prototype" &&
          (e[i] = ai(t[i]) ? n(e[i] || (e[i] = {}), t[i]) : t[i]);
      return e;
    },
    Fs = function (e, t) {
      var i = {},
        r;
      for (r in e) r in t || (i[r] = e[r]);
      return i;
    },
    Sr = function (e) {
      var t = e.parent || _e,
        i = e.keyframes ? ap(Xe(e.keyframes)) : jt;
      if (gt(e.inherit))
        for (; t; ) i(e, t.vars.defaults), (t = t.parent || t._dp);
      return e;
    },
    lp = function (e, t) {
      for (var i = e.length, r = i === t.length; r && i-- && e[i] === t[i]; );
      return i < 0;
    },
    ou = function (e, t, i, r, s) {
      var o = e[r],
        a;
      if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
      return (
        o
          ? ((t._next = o._next), (o._next = t))
          : ((t._next = e[i]), (e[i] = t)),
        t._next ? (t._next._prev = t) : (e[r] = t),
        (t._prev = o),
        (t.parent = t._dp = e),
        t
      );
    },
    ks = function (e, t, i, r) {
      i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
      var s = t._prev,
        o = t._next;
      s ? (s._next = o) : e[i] === t && (e[i] = o),
        o ? (o._prev = s) : e[r] === t && (e[r] = s),
        (t._next = t._prev = t.parent = null);
    },
    Ii = function (e, t) {
      e.parent &&
        (!t || e.parent.autoRemoveChildren) &&
        e.parent.remove &&
        e.parent.remove(e),
        (e._act = 0);
    },
    fn = function (e, t) {
      if (e && (!t || t._end > e._dur || t._start < 0))
        for (var i = e; i; ) (i._dirty = 1), (i = i.parent);
      return e;
    },
    up = function (e) {
      for (var t = e.parent; t && t.parent; )
        (t._dirty = 1), t.totalDuration(), (t = t.parent);
      return e;
    },
    qo = function (e, t, i, r) {
      return (
        e._startAt &&
        (Ge
          ? e._startAt.revert(Ps)
          : (e.vars.immediateRender && !e.vars.autoRevert) ||
            e._startAt.render(t, !0, r))
      );
    },
    hp = function n(e) {
      return !e || (e._ts && n(e.parent));
    },
    au = function (e) {
      return e._repeat ? Kn(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
    },
    Kn = function (e, t) {
      var i = Math.floor((e /= t));
      return e && i === e ? i - 1 : i;
    },
    As = function (e, t) {
      return (
        (e - t._start) * t._ts +
        (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
      );
    },
    Os = function (e) {
      return (e._end = Ne(
        e._start + (e._tDur / Math.abs(e._ts || e._rts || de) || 0)
      ));
    },
    Ms = function (e, t) {
      var i = e._dp;
      return (
        i &&
          i.smoothChildTiming &&
          e._ts &&
          ((e._start = Ne(
            i._time -
              (e._ts > 0
                ? t / e._ts
                : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)
          )),
          Os(e),
          i._dirty || fn(i, e)),
        e
      );
    },
    lu = function (e, t) {
      var i;
      if (
        ((t._time ||
          (!t._dur && t._initted) ||
          (t._start < e._time && (t._dur || !t.add))) &&
          ((i = As(e.rawTime(), t)),
          (!t._dur || Fr(0, t.totalDuration(), i) - t._tTime > de) &&
            t.render(i, !0)),
        fn(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
      ) {
        if (e._dur < e.duration())
          for (i = e; i._dp; )
            i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
        e._zTime = -de;
      }
    },
    ui = function (e, t, i, r) {
      return (
        t.parent && Ii(t),
        (t._start = Ne(
          (xi(i) ? i : i || e !== _e ? Ht(e, i, t) : e._time) + t._delay
        )),
        (t._end = Ne(
          t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)
        )),
        ou(e, t, "_first", "_last", e._sort ? "_start" : 0),
        Ko(t) || (e._recent = t),
        r || lu(e, t),
        e._ts < 0 && Ms(e, e._tTime),
        e
      );
    },
    uu = function (e, t) {
      return (
        (Ft.ScrollTrigger || zo("scrollTrigger", t)) &&
        Ft.ScrollTrigger.create(t, e)
      );
    },
    hu = function (e, t, i, r, s) {
      if ((ia(e, t, s), !e._initted)) return 1;
      if (
        !i &&
        e._pt &&
        !Ge &&
        ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
        Jl !== Ot.frame
      )
        return Ni.push(e), (e._lazy = [s, r]), 1;
    },
    cp = function n(e) {
      var t = e.parent;
      return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || n(t));
    },
    Ko = function (e) {
      var t = e.data;
      return t === "isFromStart" || t === "isStart";
    },
    dp = function (e, t, i, r) {
      var s = e.ratio,
        o =
          t < 0 ||
          (!t &&
            ((!e._start && cp(e) && !(!e._initted && Ko(e))) ||
              ((e._ts < 0 || e._dp._ts < 0) && !Ko(e))))
            ? 0
            : 1,
        a = e._rDelay,
        l = 0,
        u,
        h,
        d;
      if (
        (a &&
          e._repeat &&
          ((l = Fr(0, e._tDur, t)),
          (h = Kn(l, a)),
          e._yoyo && h & 1 && (o = 1 - o),
          h !== Kn(e._tTime, a) &&
            ((s = 1 - o),
            e.vars.repeatRefresh && e._initted && e.invalidate())),
        o !== s || Ge || r || e._zTime === de || (!t && e._zTime))
      ) {
        if (!e._initted && hu(e, t, r, i, l)) return;
        for (
          d = e._zTime,
            e._zTime = t || (i ? de : 0),
            i || (i = t && !d),
            e.ratio = o,
            e._from && (o = 1 - o),
            e._time = 0,
            e._tTime = l,
            u = e._pt;
          u;

        )
          u.r(o, u.d), (u = u._next);
        t < 0 && qo(e, t, i, !0),
          e._onUpdate && !i && At(e, "onUpdate"),
          l && e._repeat && !i && e.parent && At(e, "onRepeat"),
          (t >= e._tDur || t < 0) &&
            e.ratio === o &&
            (o && Ii(e, 1),
            !i &&
              !Ge &&
              (At(e, o ? "onComplete" : "onReverseComplete", !0),
              e._prom && e._prom()));
      } else e._zTime || (e._zTime = t);
    },
    pp = function (e, t, i) {
      var r;
      if (i > t)
        for (r = e._first; r && r._start <= i; ) {
          if (r.data === "isPause" && r._start > t) return r;
          r = r._next;
        }
      else
        for (r = e._last; r && r._start >= i; ) {
          if (r.data === "isPause" && r._start < t) return r;
          r = r._prev;
        }
    },
    Yn = function (e, t, i, r) {
      var s = e._repeat,
        o = Ne(t) || 0,
        a = e._tTime / e._tDur;
      return (
        a && !r && (e._time *= o / e._dur),
        (e._dur = o),
        (e._tDur = s ? (s < 0 ? 1e10 : Ne(o * (s + 1) + e._rDelay * s)) : o),
        a > 0 && !r && Ms(e, (e._tTime = e._tDur * a)),
        e.parent && Os(e),
        i || fn(e.parent, e),
        e
      );
    },
    cu = function (e) {
      return e instanceof st ? fn(e) : Yn(e, e._dur);
    },
    fp = { _start: 0, endTime: Pr, totalDuration: Pr },
    Ht = function n(e, t, i) {
      var r = e.labels,
        s = e._recent || fp,
        o = e.duration() >= $t ? s.endTime(!1) : e._dur,
        a,
        l,
        u;
      return Be(t) && (isNaN(t) || t in r)
        ? ((l = t.charAt(0)),
          (u = t.substr(-1) === "%"),
          (a = t.indexOf("=")),
          l === "<" || l === ">"
            ? (a >= 0 && (t = t.replace(/=/, "")),
              (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
                (parseFloat(t.substr(1)) || 0) *
                  (u ? (a < 0 ? s : i).totalDuration() / 100 : 1))
            : a < 0
            ? (t in r || (r[t] = o), r[t])
            : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
              u && i && (l = (l / 100) * (Xe(i) ? i[0] : i).totalDuration()),
              a > 1 ? n(e, t.substr(0, a - 1), i) + l : o + l))
        : t == null
        ? o
        : +t;
    },
    Tr = function (e, t, i) {
      var r = xi(t[1]),
        s = (r ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[s],
        a,
        l;
      if ((r && (o.duration = t[1]), (o.parent = i), e)) {
        for (a = o, l = i; l && !("immediateRender" in a); )
          (a = l.vars.defaults || {}), (l = gt(l.vars.inherit) && l.parent);
        (o.immediateRender = gt(a.immediateRender)),
          e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
      }
      return new Fe(t[0], o, t[s + 1]);
    },
    zi = function (e, t) {
      return e || e === 0 ? t(e) : t;
    },
    Fr = function (e, t, i) {
      return i < e ? e : i > t ? t : i;
    },
    Ze = function (e, t) {
      return !Be(e) || !(t = np.exec(e)) ? "" : t[1];
    },
    mp = function (e, t, i) {
      return zi(i, function (r) {
        return Fr(e, t, r);
      });
    },
    Yo = [].slice,
    du = function (e, t) {
      return (
        e &&
        ai(e) &&
        "length" in e &&
        ((!t && !e.length) || (e.length - 1 in e && ai(e[0]))) &&
        !e.nodeType &&
        e !== li
      );
    },
    _p = function (e, t, i) {
      return (
        i === void 0 && (i = []),
        e.forEach(function (r) {
          var s;
          return (Be(r) && !t) || du(r, 1)
            ? (s = i).push.apply(s, Ut(r))
            : i.push(r);
        }) || i
      );
    },
    Ut = function (e, t, i) {
      return fe && !t && fe.selector
        ? fe.selector(e)
        : Be(e) && !i && (No || !Xn())
        ? Yo.call((t || Io).querySelectorAll(e), 0)
        : Xe(e)
        ? _p(e, i)
        : du(e)
        ? Yo.call(e, 0)
        : e
        ? [e]
        : [];
    },
    Go = function (e) {
      return (
        (e = Ut(e)[0] || xr("Invalid scope") || {}),
        function (t) {
          var i = e.current || e.nativeElement || e;
          return Ut(
            t,
            i.querySelectorAll
              ? i
              : i === e
              ? xr("Invalid scope") || Io.createElement("div")
              : e
          );
        }
      );
    },
    pu = function (e) {
      return e.sort(function () {
        return 0.5 - Math.random();
      });
    },
    fu = function (e) {
      if (Ce(e)) return e;
      var t = ai(e) ? e : { each: e },
        i = mn(t.ease),
        r = t.from || 0,
        s = parseFloat(t.base) || 0,
        o = {},
        a = r > 0 && r < 1,
        l = isNaN(r) || a,
        u = t.axis,
        h = r,
        d = r;
      return (
        Be(r)
          ? (h = d = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
          : !a && l && ((h = r[0]), (d = r[1])),
        function (f, c, m) {
          var p = (m || t).length,
            _ = o[p],
            D,
            C,
            P,
            v,
            b,
            y,
            w,
            T,
            x;
          if (!_) {
            if (((x = t.grid === "auto" ? 0 : (t.grid || [1, $t])[1]), !x)) {
              for (
                w = -$t;
                w < (w = m[x++].getBoundingClientRect().left) && x < p;

              );
              x < p && x--;
            }
            for (
              _ = o[p] = [],
                D = l ? Math.min(x, p) * h - 0.5 : r % x,
                C = x === $t ? 0 : l ? (p * d) / x - 0.5 : (r / x) | 0,
                w = 0,
                T = $t,
                y = 0;
              y < p;
              y++
            )
              (P = (y % x) - D),
                (v = C - ((y / x) | 0)),
                (_[y] = b =
                  u ? Math.abs(u === "y" ? v : P) : Wl(P * P + v * v)),
                b > w && (w = b),
                b < T && (T = b);
            r === "random" && pu(_),
              (_.max = w - T),
              (_.min = T),
              (_.v = p =
                (parseFloat(t.amount) ||
                  parseFloat(t.each) *
                    (x > p
                      ? p - 1
                      : u
                      ? u === "y"
                        ? p / x
                        : x
                      : Math.max(x, p / x)) ||
                  0) * (r === "edges" ? -1 : 1)),
              (_.b = p < 0 ? s - p : s),
              (_.u = Ze(t.amount || t.each) || 0),
              (i = i && p < 0 ? Pu(i) : i);
          }
          return (
            (p = (_[f] - _.min) / _.max || 0),
            Ne(_.b + (i ? i(p) : p) * _.v) + _.u
          );
        }
      );
    },
    Xo = function (e) {
      var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
      return function (i) {
        var r = Ne(Math.round(parseFloat(i) / e) * e * t);
        return (r - (r % 1)) / t + (xi(i) ? 0 : Ze(i));
      };
    },
    mu = function (e, t) {
      var i = Xe(e),
        r,
        s;
      return (
        !i &&
          ai(e) &&
          ((r = i = e.radius || $t),
          e.values
            ? ((e = Ut(e.values)), (s = !xi(e[0])) && (r *= r))
            : (e = Xo(e.increment))),
        zi(
          t,
          i
            ? Ce(e)
              ? function (o) {
                  return (s = e(o)), Math.abs(s - o) <= r ? s : o;
                }
              : function (o) {
                  for (
                    var a = parseFloat(s ? o.x : o),
                      l = parseFloat(s ? o.y : 0),
                      u = $t,
                      h = 0,
                      d = e.length,
                      f,
                      c;
                    d--;

                  )
                    s
                      ? ((f = e[d].x - a),
                        (c = e[d].y - l),
                        (f = f * f + c * c))
                      : (f = Math.abs(e[d] - a)),
                      f < u && ((u = f), (h = d));
                  return (
                    (h = !r || u <= r ? e[h] : o),
                    s || h === o || xi(o) ? h : h + Ze(o)
                  );
                }
            : Xo(e)
        )
      );
    },
    _u = function (e, t, i, r) {
      return zi(Xe(e) ? !t : i === !0 ? !!(i = 0) : !r, function () {
        return Xe(e)
          ? e[~~(Math.random() * e.length)]
          : (i = i || 1e-5) &&
              (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (e - i / 2 + Math.random() * (t - e + i * 0.99)) / i
                ) *
                  i *
                  r
              ) / r;
      });
    },
    vp = function () {
      for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
        t[i] = arguments[i];
      return function (r) {
        return t.reduce(function (s, o) {
          return o(s);
        }, r);
      };
    },
    gp = function (e, t) {
      return function (i) {
        return e(parseFloat(i)) + (t || Ze(i));
      };
    },
    wp = function (e, t, i) {
      return gu(e, t, 0, 1, i);
    },
    vu = function (e, t, i) {
      return zi(i, function (r) {
        return e[~~t(r)];
      });
    },
    Dp = function n(e, t, i) {
      var r = t - e;
      return Xe(e)
        ? vu(e, n(0, e.length), t)
        : zi(i, function (s) {
            return ((r + ((s - e) % r)) % r) + e;
          });
    },
    bp = function n(e, t, i) {
      var r = t - e,
        s = r * 2;
      return Xe(e)
        ? vu(e, n(0, e.length - 1), t)
        : zi(i, function (o) {
            return (o = (s + ((o - e) % s)) % s || 0), e + (o > r ? s - o : o);
          });
    },
    kr = function (e) {
      for (var t = 0, i = "", r, s, o, a; ~(r = e.indexOf("random(", t)); )
        (o = e.indexOf(")", r)),
          (a = e.charAt(r + 7) === "["),
          (s = e.substr(r + 7, o - r - 7).match(a ? Gl : Vo)),
          (i +=
            e.substr(t, r - t) +
            _u(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
          (t = o + 1);
      return i + e.substr(t, e.length - t);
    },
    gu = function (e, t, i, r, s) {
      var o = t - e,
        a = r - i;
      return zi(s, function (l) {
        return i + (((l - e) / o) * a || 0);
      });
    },
    Cp = function n(e, t, i, r) {
      var s = isNaN(e + t)
        ? 0
        : function (c) {
            return (1 - c) * e + c * t;
          };
      if (!s) {
        var o = Be(e),
          a = {},
          l,
          u,
          h,
          d,
          f;
        if ((i === !0 && (r = 1) && (i = null), o))
          (e = { p: e }), (t = { p: t });
        else if (Xe(e) && !Xe(t)) {
          for (h = [], d = e.length, f = d - 2, u = 1; u < d; u++)
            h.push(n(e[u - 1], e[u]));
          d--,
            (s = function (m) {
              m *= d;
              var p = Math.min(f, ~~m);
              return h[p](m - p);
            }),
            (i = t);
        } else r || (e = pn(Xe(e) ? [] : {}, e));
        if (!h) {
          for (l in t) ea.call(a, e, l, "get", t[l]);
          s = function (m) {
            return sa(m, a) || (o ? e.p : e);
          };
        }
      }
      return zi(i, s);
    },
    wu = function (e, t, i) {
      var r = e.labels,
        s = $t,
        o,
        a,
        l;
      for (o in r)
        (a = r[o] - t),
          a < 0 == !!i && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
      return l;
    },
    At = function (e, t, i) {
      var r = e.vars,
        s = r[t],
        o = fe,
        a = e._ctx,
        l,
        u,
        h;
      if (s)
        return (
          (l = r[t + "Params"]),
          (u = r.callbackScope || e),
          i && Ni.length && Ts(),
          a && (fe = a),
          (h = l ? s.apply(u, l) : s.call(u)),
          (fe = o),
          h
        );
    },
    Ar = function (e) {
      return (
        Ii(e),
        e.scrollTrigger && e.scrollTrigger.kill(!!Ge),
        e.progress() < 1 && At(e, "onInterrupt"),
        e
      );
    },
    Gn,
    Du = [],
    bu = function (e) {
      if (e)
        if (((e = (!e.name && e.default) || e), Ro() || e.headless)) {
          var t = e.name,
            i = Ce(e),
            r =
              t && !i && e.init
                ? function () {
                    this._props = [];
                  }
                : e,
            s = {
              init: Pr,
              render: sa,
              add: ea,
              kill: Np,
              modifier: Bp,
              rawVars: 0,
            },
            o = {
              targetTest: 0,
              get: 0,
              getSetter: ra,
              aliases: {},
              register: 0,
            };
          if ((Xn(), e !== r)) {
            if (kt[t]) return;
            jt(r, jt(Fs(e, s), o)),
              pn(r.prototype, pn(s, Fs(e, o))),
              (kt[(r.prop = t)] = r),
              e.targetTest && (Ss.push(r), ($o[t] = 1)),
              (t =
                (t === "css"
                  ? "CSS"
                  : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
          }
          Ql(t, r), e.register && e.register(bt, r, Dt);
        } else Du.push(e);
    },
    ue = 255,
    Or = {
      aqua: [0, ue, ue],
      lime: [0, ue, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, ue],
      navy: [0, 0, 128],
      white: [ue, ue, ue],
      olive: [128, 128, 0],
      yellow: [ue, ue, 0],
      orange: [ue, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [ue, 0, 0],
      pink: [ue, 192, 203],
      cyan: [0, ue, ue],
      transparent: [ue, ue, ue, 0],
    },
    Zo = function (e, t, i) {
      return (
        (e += e < 0 ? 1 : e > 1 ? -1 : 0),
        ((e * 6 < 1
          ? t + (i - t) * e * 6
          : e < 0.5
          ? i
          : e * 3 < 2
          ? t + (i - t) * (2 / 3 - e) * 6
          : t) *
          ue +
          0.5) |
          0
      );
    },
    Cu = function (e, t, i) {
      var r = e ? (xi(e) ? [e >> 16, (e >> 8) & ue, e & ue] : 0) : Or.black,
        s,
        o,
        a,
        l,
        u,
        h,
        d,
        f,
        c,
        m;
      if (!r) {
        if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Or[e]))
          r = Or[e];
        else if (e.charAt(0) === "#") {
          if (
            (e.length < 6 &&
              ((s = e.charAt(1)),
              (o = e.charAt(2)),
              (a = e.charAt(3)),
              (e =
                "#" +
                s +
                s +
                o +
                o +
                a +
                a +
                (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
            e.length === 9)
          )
            return (
              (r = parseInt(e.substr(1, 6), 16)),
              [r >> 16, (r >> 8) & ue, r & ue, parseInt(e.substr(7), 16) / 255]
            );
          (e = parseInt(e.substr(1), 16)),
            (r = [e >> 16, (e >> 8) & ue, e & ue]);
        } else if (e.substr(0, 3) === "hsl") {
          if (((r = m = e.match(Vo)), !t))
            (l = (+r[0] % 360) / 360),
              (u = +r[1] / 100),
              (h = +r[2] / 100),
              (o = h <= 0.5 ? h * (u + 1) : h + u - h * u),
              (s = h * 2 - o),
              r.length > 3 && (r[3] *= 1),
              (r[0] = Zo(l + 1 / 3, s, o)),
              (r[1] = Zo(l, s, o)),
              (r[2] = Zo(l - 1 / 3, s, o));
          else if (~e.indexOf("="))
            return (r = e.match(Kl)), i && r.length < 4 && (r[3] = 1), r;
        } else r = e.match(Vo) || Or.transparent;
        r = r.map(Number);
      }
      return (
        t &&
          !m &&
          ((s = r[0] / ue),
          (o = r[1] / ue),
          (a = r[2] / ue),
          (d = Math.max(s, o, a)),
          (f = Math.min(s, o, a)),
          (h = (d + f) / 2),
          d === f
            ? (l = u = 0)
            : ((c = d - f),
              (u = h > 0.5 ? c / (2 - d - f) : c / (d + f)),
              (l =
                d === s
                  ? (o - a) / c + (o < a ? 6 : 0)
                  : d === o
                  ? (a - s) / c + 2
                  : (s - o) / c + 4),
              (l *= 60)),
          (r[0] = ~~(l + 0.5)),
          (r[1] = ~~(u * 100 + 0.5)),
          (r[2] = ~~(h * 100 + 0.5))),
        i && r.length < 4 && (r[3] = 1),
        r
      );
    },
    yu = function (e) {
      var t = [],
        i = [],
        r = -1;
      return (
        e.split($i).forEach(function (s) {
          var o = s.match(Wn) || [];
          t.push.apply(t, o), i.push((r += o.length + 1));
        }),
        (t.c = i),
        t
      );
    },
    Eu = function (e, t, i) {
      var r = "",
        s = (e + r).match($i),
        o = t ? "hsla(" : "rgba(",
        a = 0,
        l,
        u,
        h,
        d;
      if (!s) return e;
      if (
        ((s = s.map(function (f) {
          return (
            (f = Cu(f, t, 1)) &&
            o +
              (t
                ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3]
                : f.join(",")) +
              ")"
          );
        })),
        i && ((h = yu(e)), (l = i.c), l.join(r) !== h.c.join(r)))
      )
        for (u = e.replace($i, "1").split(Wn), d = u.length - 1; a < d; a++)
          r +=
            u[a] +
            (~l.indexOf(a)
              ? s.shift() || o + "0,0,0,0)"
              : (h.length ? h : s.length ? s : i).shift());
      if (!u)
        for (u = e.split($i), d = u.length - 1; a < d; a++) r += u[a] + s[a];
      return r + u[d];
    },
    $i = (function () {
      var n =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        e;
      for (e in Or) n += "|" + e + "\\b";
      return new RegExp(n + ")", "gi");
    })(),
    yp = /hsl[a]?\(/,
    xu = function (e) {
      var t = e.join(" "),
        i;
      if ((($i.lastIndex = 0), $i.test(t)))
        return (
          (i = yp.test(t)),
          (e[1] = Eu(e[1], i)),
          (e[0] = Eu(e[0], i, yu(e[1]))),
          !0
        );
    },
    Mr,
    Ot = (function () {
      var n = Date.now,
        e = 500,
        t = 33,
        i = n(),
        r = i,
        s = 1e3 / 240,
        o = s,
        a = [],
        l,
        u,
        h,
        d,
        f,
        c,
        m = function p(_) {
          var D = n() - r,
            C = _ === !0,
            P,
            v,
            b,
            y;
          if (
            ((D > e || D < 0) && (i += D - t),
            (r += D),
            (b = r - i),
            (P = b - o),
            (P > 0 || C) &&
              ((y = ++d.frame),
              (f = b - d.time * 1e3),
              (d.time = b = b / 1e3),
              (o += P + (P >= s ? 4 : s - P)),
              (v = 1)),
            C || (l = u(p)),
            v)
          )
            for (c = 0; c < a.length; c++) a[c](b, f, y, _);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            m(!0);
          },
          deltaRatio: function (_) {
            return f / (1e3 / (_ || 60));
          },
          wake: function () {
            Xl &&
              (!No &&
                Ro() &&
                ((li = No = window),
                (Io = li.document || {}),
                (Ft.gsap = bt),
                (li.gsapVersions || (li.gsapVersions = [])).push(bt.version),
                Zl(xs || li.GreenSockGlobals || (!li.gsap && li) || {}),
                Du.forEach(bu)),
              (h = typeof requestAnimationFrame < "u" && requestAnimationFrame),
              l && d.sleep(),
              (u =
                h ||
                function (_) {
                  return setTimeout(_, (o - d.time * 1e3 + 1) | 0);
                }),
              (Mr = 1),
              m(2));
          },
          sleep: function () {
            (h ? cancelAnimationFrame : clearTimeout)(l), (Mr = 0), (u = Pr);
          },
          lagSmoothing: function (_, D) {
            (e = _ || 1 / 0), (t = Math.min(D || 33, e));
          },
          fps: function (_) {
            (s = 1e3 / (_ || 240)), (o = d.time * 1e3 + s);
          },
          add: function (_, D, C) {
            var P = D
              ? function (v, b, y, w) {
                  _(v, b, y, w), d.remove(P);
                }
              : _;
            return d.remove(_), a[C ? "unshift" : "push"](P), Xn(), P;
          },
          remove: function (_, D) {
            ~(D = a.indexOf(_)) && a.splice(D, 1) && c >= D && c--;
          },
          _listeners: a,
        }),
        d
      );
    })(),
    Xn = function () {
      return !Mr && Ot.wake();
    },
    Z = {},
    Ep = /^[\d.\-M][\d.\-,\s]/,
    xp = /["']/g,
    Pp = function (e) {
      for (
        var t = {},
          i = e.substr(1, e.length - 3).split(":"),
          r = i[0],
          s = 1,
          o = i.length,
          a,
          l,
          u;
        s < o;
        s++
      )
        (l = i[s]),
          (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, a)),
          (t[r] = isNaN(u) ? u.replace(xp, "").trim() : +u),
          (r = l.substr(a + 1).trim());
      return t;
    },
    Sp = function (e) {
      var t = e.indexOf("(") + 1,
        i = e.indexOf(")"),
        r = e.indexOf("(", t);
      return e.substring(t, ~r && r < i ? e.indexOf(")", i + 1) : i);
    },
    Tp = function (e) {
      var t = (e + "").split("("),
        i = Z[t[0]];
      return i && t.length > 1 && i.config
        ? i.config.apply(
            null,
            ~e.indexOf("{") ? [Pp(t[1])] : Sp(e).split(",").map(nu)
          )
        : Z._CE && Ep.test(e)
        ? Z._CE("", e)
        : i;
    },
    Pu = function (e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Su = function n(e, t) {
      for (var i = e._first, r; i; )
        i instanceof st
          ? n(i, t)
          : i.vars.yoyoEase &&
            (!i._yoyo || !i._repeat) &&
            i._yoyo !== t &&
            (i.timeline
              ? n(i.timeline, t)
              : ((r = i._ease),
                (i._ease = i._yEase),
                (i._yEase = r),
                (i._yoyo = t))),
          (i = i._next);
    },
    mn = function (e, t) {
      return (e && (Ce(e) ? e : Z[e] || Tp(e))) || t;
    },
    _n = function (e, t, i, r) {
      i === void 0 &&
        (i = function (l) {
          return 1 - t(1 - l);
        }),
        r === void 0 &&
          (r = function (l) {
            return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
          });
      var s = { easeIn: t, easeOut: i, easeInOut: r },
        o;
      return (
        wt(e, function (a) {
          (Z[a] = Ft[a] = s), (Z[(o = a.toLowerCase())] = i);
          for (var l in s)
            Z[
              o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = Z[a + "." + l] = s[l];
        }),
        s
      );
    },
    Tu = function (e) {
      return function (t) {
        return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
      };
    },
    Qo = function n(e, t, i) {
      var r = t >= 1 ? t : 1,
        s = (i || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
        o = (s / Mo) * (Math.asin(1 / r) || 0),
        a = function (h) {
          return h === 1 ? 1 : r * Math.pow(2, -10 * h) * ip((h - o) * s) + 1;
        },
        l =
          e === "out"
            ? a
            : e === "in"
            ? function (u) {
                return 1 - a(1 - u);
              }
            : Tu(a);
      return (
        (s = Mo / s),
        (l.config = function (u, h) {
          return n(e, u, h);
        }),
        l
      );
    },
    Jo = function n(e, t) {
      t === void 0 && (t = 1.70158);
      var i = function (o) {
          return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
        },
        r =
          e === "out"
            ? i
            : e === "in"
            ? function (s) {
                return 1 - i(1 - s);
              }
            : Tu(i);
      return (
        (r.config = function (s) {
          return n(e, s);
        }),
        r
      );
    };
  wt("Linear,Quad,Cubic,Quart,Quint,Strong", function (n, e) {
    var t = e < 5 ? e + 1 : e;
    _n(
      n + ",Power" + (t - 1),
      e
        ? function (i) {
            return Math.pow(i, t);
          }
        : function (i) {
            return i;
          },
      function (i) {
        return 1 - Math.pow(1 - i, t);
      },
      function (i) {
        return i < 0.5
          ? Math.pow(i * 2, t) / 2
          : 1 - Math.pow((1 - i) * 2, t) / 2;
      }
    );
  }),
    (Z.Linear.easeNone = Z.none = Z.Linear.easeIn),
    _n("Elastic", Qo("in"), Qo("out"), Qo()),
    (function (n, e) {
      var t = 1 / e,
        i = 2 * t,
        r = 2.5 * t,
        s = function (a) {
          return a < t
            ? n * a * a
            : a < i
            ? n * Math.pow(a - 1.5 / e, 2) + 0.75
            : a < r
            ? n * (a -= 2.25 / e) * a + 0.9375
            : n * Math.pow(a - 2.625 / e, 2) + 0.984375;
        };
      _n(
        "Bounce",
        function (o) {
          return 1 - s(1 - o);
        },
        s
      );
    })(7.5625, 2.75),
    _n("Expo", function (n) {
      return n ? Math.pow(2, 10 * (n - 1)) : 0;
    }),
    _n("Circ", function (n) {
      return -(Wl(1 - n * n) - 1);
    }),
    _n("Sine", function (n) {
      return n === 1 ? 1 : -tp(n * Jd) + 1;
    }),
    _n("Back", Jo("in"), Jo("out"), Jo()),
    (Z.SteppedEase =
      Z.steps =
      Ft.SteppedEase =
        {
          config: function (e, t) {
            e === void 0 && (e = 1);
            var i = 1 / e,
              r = e + (t ? 0 : 1),
              s = t ? 1 : 0,
              o = 1 - de;
            return function (a) {
              return (((r * Fr(0, o, a)) | 0) + s) * i;
            };
          },
        }),
    (Un.ease = Z["quad.out"]),
    wt(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (n) {
        return (Uo += n + "," + n + "Params,");
      }
    );
  var Fu = function (e, t) {
      (this.id = ep++),
        (e._gsap = this),
        (this.target = e),
        (this.harness = t),
        (this.get = t ? t.get : tu),
        (this.set = t ? t.getSetter : ra);
    },
    Lr = (function () {
      function n(t) {
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = 1),
          Yn(this, +t.duration, 1, 1),
          (this.data = t.data),
          fe && ((this._ctx = fe), fe.data.push(this)),
          Mr || Ot.wake();
      }
      var e = n.prototype;
      return (
        (e.delay = function (i) {
          return i || i === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + i - this._delay),
              (this._delay = i),
              this)
            : this._delay;
        }),
        (e.duration = function (i) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
              )
            : this.totalDuration() && this._dur;
        }),
        (e.totalDuration = function (i) {
          return arguments.length
            ? ((this._dirty = 0),
              Yn(
                this,
                this._repeat < 0
                  ? i
                  : (i - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (e.totalTime = function (i, r) {
          if ((Xn(), !arguments.length)) return this._tTime;
          var s = this._dp;
          if (s && s.smoothChildTiming && this._ts) {
            for (
              Ms(this, i), !s._dp || s.parent || lu(s, this);
              s && s.parent;

            )
              s.parent._time !==
                s._start +
                  (s._ts >= 0
                    ? s._tTime / s._ts
                    : (s.totalDuration() - s._tTime) / -s._ts) &&
                s.totalTime(s._tTime, !0),
                (s = s.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && i < this._tDur) ||
                (this._ts < 0 && i > 0) ||
                (!this._tDur && !i)) &&
              ui(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== i ||
              (!this._dur && !r) ||
              (this._initted && Math.abs(this._zTime) === de) ||
              (!i && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = i), iu(this, i, r)),
            this
          );
        }),
        (e.time = function (i, r) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), i + au(this)) %
                  (this._dur + this._rDelay) || (i ? this._dur : 0),
                r
              )
            : this._time;
        }),
        (e.totalProgress = function (i, r) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * i, r)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.progress = function (i, r) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                  au(this),
                r
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
            ? 1
            : 0;
        }),
        (e.iteration = function (i, r) {
          var s = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (i - 1) * s, r)
            : this._repeat
            ? Kn(this._tTime, s) + 1
            : 1;
        }),
        (e.timeScale = function (i, r) {
          if (!arguments.length) return this._rts === -de ? 0 : this._rts;
          if (this._rts === i) return this;
          var s =
            this.parent && this._ts ? As(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +i || 0),
            (this._ts = this._ps || i === -de ? 0 : this._rts),
            this.totalTime(Fr(-Math.abs(this._delay), this._tDur, s), r !== !1),
            Os(this),
            up(this)
          );
        }),
        (e.paused = function (i) {
          return arguments.length
            ? (this._ps !== i &&
                ((this._ps = i),
                i
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (Xn(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== de &&
                        (this._tTime -= de)
                    ))),
              this)
            : this._ps;
        }),
        (e.startTime = function (i) {
          if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return (
              r && (r._sort || !this.parent) && ui(r, this, i - this._delay),
              this
            );
          }
          return this._start;
        }),
        (e.endTime = function (i) {
          return (
            this._start +
            (gt(i) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (e.rawTime = function (i) {
          var r = this.parent || this._dp;
          return r
            ? i &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? As(r.rawTime(i), this)
              : this._tTime
            : this._tTime;
        }),
        (e.revert = function (i) {
          i === void 0 && (i = sp);
          var r = Ge;
          return (
            (Ge = i),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(i),
              this.totalTime(-0.01, i.suppressEvents)),
            this.data !== "nested" && i.kill !== !1 && this.kill(),
            (Ge = r),
            this
          );
        }),
        (e.globalTime = function (i) {
          for (var r = this, s = arguments.length ? i : r.rawTime(); r; )
            (s = r._start + s / (Math.abs(r._ts) || 1)), (r = r._dp);
          return !this.parent && this._sat ? this._sat.globalTime(i) : s;
        }),
        (e.repeat = function (i) {
          return arguments.length
            ? ((this._repeat = i === 1 / 0 ? -2 : i), cu(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (e.repeatDelay = function (i) {
          if (arguments.length) {
            var r = this._time;
            return (this._rDelay = i), cu(this), r ? this.time(r) : this;
          }
          return this._rDelay;
        }),
        (e.yoyo = function (i) {
          return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
        }),
        (e.seek = function (i, r) {
          return this.totalTime(Ht(this, i), gt(r));
        }),
        (e.restart = function (i, r) {
          return this.play().totalTime(i ? -this._delay : 0, gt(r));
        }),
        (e.play = function (i, r) {
          return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
        }),
        (e.reverse = function (i, r) {
          return (
            i != null && this.seek(i || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
          );
        }),
        (e.pause = function (i, r) {
          return i != null && this.seek(i, r), this.paused(!0);
        }),
        (e.resume = function () {
          return this.paused(!1);
        }),
        (e.reversed = function (i) {
          return arguments.length
            ? (!!i !== this.reversed() &&
                this.timeScale(-this._rts || (i ? -de : 0)),
              this)
            : this._rts < 0;
        }),
        (e.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -de), this;
        }),
        (e.isActive = function () {
          var i = this.parent || this._dp,
            r = this._start,
            s;
          return !!(
            !i ||
            (this._ts &&
              this._initted &&
              i.isActive() &&
              (s = i.rawTime(!0)) >= r &&
              s < this.endTime(!0) - de)
          );
        }),
        (e.eventCallback = function (i, r, s) {
          var o = this.vars;
          return arguments.length > 1
            ? (r
                ? ((o[i] = r),
                  s && (o[i + "Params"] = s),
                  i === "onUpdate" && (this._onUpdate = r))
                : delete o[i],
              this)
            : o[i];
        }),
        (e.then = function (i) {
          var r = this;
          return new Promise(function (s) {
            var o = Ce(i) ? i : ru,
              a = function () {
                var u = r.then;
                (r.then = null),
                  Ce(o) && (o = o(r)) && (o.then || o === r) && (r.then = u),
                  s(o),
                  (r.then = u);
              };
            (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
            (!r._tTime && r._ts < 0)
              ? a()
              : (r._prom = a);
          });
        }),
        (e.kill = function () {
          Ar(this);
        }),
        n
      );
    })();
  jt(Lr.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -de,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var st = (function (n) {
    cn(e, n);
    function e(i, r) {
      var s;
      return (
        i === void 0 && (i = {}),
        (s = n.call(this, i) || this),
        (s.labels = {}),
        (s.smoothChildTiming = !!i.smoothChildTiming),
        (s.autoRemoveChildren = !!i.autoRemoveChildren),
        (s._sort = gt(i.sortChildren)),
        _e && ui(i.parent || _e, We(s), r),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        i.scrollTrigger && uu(We(s), i.scrollTrigger),
        s
      );
    }
    var t = e.prototype;
    return (
      (t.to = function (r, s, o) {
        return Tr(0, arguments, this), this;
      }),
      (t.from = function (r, s, o) {
        return Tr(1, arguments, this), this;
      }),
      (t.fromTo = function (r, s, o, a) {
        return Tr(2, arguments, this), this;
      }),
      (t.set = function (r, s, o) {
        return (
          (s.duration = 0),
          (s.parent = this),
          Sr(s).repeatDelay || (s.repeat = 0),
          (s.immediateRender = !!s.immediateRender),
          new Fe(r, s, Ht(this, o), 1),
          this
        );
      }),
      (t.call = function (r, s, o) {
        return ui(this, Fe.delayedCall(0, r, s), o);
      }),
      (t.staggerTo = function (r, s, o, a, l, u, h) {
        return (
          (o.duration = s),
          (o.stagger = o.stagger || a),
          (o.onComplete = u),
          (o.onCompleteParams = h),
          (o.parent = this),
          new Fe(r, o, Ht(this, l)),
          this
        );
      }),
      (t.staggerFrom = function (r, s, o, a, l, u, h) {
        return (
          (o.runBackwards = 1),
          (Sr(o).immediateRender = gt(o.immediateRender)),
          this.staggerTo(r, s, o, a, l, u, h)
        );
      }),
      (t.staggerFromTo = function (r, s, o, a, l, u, h, d) {
        return (
          (a.startAt = o),
          (Sr(a).immediateRender = gt(a.immediateRender)),
          this.staggerTo(r, s, a, l, u, h, d)
        );
      }),
      (t.render = function (r, s, o) {
        var a = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          h = r <= 0 ? 0 : Ne(r),
          d = this._zTime < 0 != r < 0 && (this._initted || !u),
          f,
          c,
          m,
          p,
          _,
          D,
          C,
          P,
          v,
          b,
          y,
          w;
        if (
          (this !== _e && h > l && r >= 0 && (h = l),
          h !== this._tTime || o || d)
        ) {
          if (
            (a !== this._time &&
              u &&
              ((h += this._time - a), (r += this._time - a)),
            (f = h),
            (v = this._start),
            (P = this._ts),
            (D = !P),
            d && (u || (a = this._zTime), (r || !s) && (this._zTime = r)),
            this._repeat)
          ) {
            if (
              ((y = this._yoyo),
              (_ = u + this._rDelay),
              this._repeat < -1 && r < 0)
            )
              return this.totalTime(_ * 100 + r, s, o);
            if (
              ((f = Ne(h % _)),
              h === l
                ? ((p = this._repeat), (f = u))
                : ((p = ~~(h / _)),
                  p && p === h / _ && ((f = u), p--),
                  f > u && (f = u)),
              (b = Kn(this._tTime, _)),
              !a &&
                this._tTime &&
                b !== p &&
                this._tTime - b * _ - this._dur <= 0 &&
                (b = p),
              y && p & 1 && ((f = u - f), (w = 1)),
              p !== b && !this._lock)
            ) {
              var T = y && b & 1,
                x = T === (y && p & 1);
              if (
                (p < b && (T = !T),
                (a = T ? 0 : h % u ? u : h),
                (this._lock = 1),
                (this.render(a || (w ? 0 : Ne(p * _)), s, !u)._lock = 0),
                (this._tTime = h),
                !s && this.parent && At(this, "onRepeat"),
                this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
                (a && a !== this._time) ||
                  D !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                x &&
                  ((this._lock = 2),
                  (a = T ? u : -1e-4),
                  this.render(a, !0),
                  this.vars.repeatRefresh && !w && this.invalidate()),
                (this._lock = 0),
                !this._ts && !D)
              )
                return this;
              Su(this, w);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((C = pp(this, Ne(a), Ne(f))), C && (h -= f - (f = C._start))),
            (this._tTime = h),
            (this._time = f),
            (this._act = !P),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = r),
              (a = 0)),
            !a && f && !s && !p && (At(this, "onStart"), this._tTime !== h))
          )
            return this;
          if (f >= a && r >= 0)
            for (c = this._first; c; ) {
              if (
                ((m = c._next), (c._act || f >= c._start) && c._ts && C !== c)
              ) {
                if (c.parent !== this) return this.render(r, s, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (f - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (f - c._start) * c._ts,
                    s,
                    o
                  ),
                  f !== this._time || (!this._ts && !D))
                ) {
                  (C = 0), m && (h += this._zTime = -de);
                  break;
                }
              }
              c = m;
            }
          else {
            c = this._last;
            for (var S = r < 0 ? r : f; c; ) {
              if (
                ((m = c._prev), (c._act || S <= c._end) && c._ts && C !== c)
              ) {
                if (c.parent !== this) return this.render(r, s, o);
                if (
                  (c.render(
                    c._ts > 0
                      ? (S - c._start) * c._ts
                      : (c._dirty ? c.totalDuration() : c._tDur) +
                          (S - c._start) * c._ts,
                    s,
                    o || (Ge && (c._initted || c._startAt))
                  ),
                  f !== this._time || (!this._ts && !D))
                ) {
                  (C = 0), m && (h += this._zTime = S ? -de : de);
                  break;
                }
              }
              c = m;
            }
          }
          if (
            C &&
            !s &&
            (this.pause(),
            (C.render(f >= a ? 0 : -de)._zTime = f >= a ? 1 : -1),
            this._ts)
          )
            return (this._start = v), Os(this), this.render(r, s, o);
          this._onUpdate && !s && At(this, "onUpdate", !0),
            ((h === l && this._tTime >= this.totalDuration()) || (!h && a)) &&
              (v === this._start || Math.abs(P) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((r || !u) &&
                  ((h === l && this._ts > 0) || (!h && this._ts < 0)) &&
                  Ii(this, 1),
                !s &&
                  !(r < 0 && !a) &&
                  (h || a || !l) &&
                  (At(
                    this,
                    h === l && r >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(h < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (t.add = function (r, s) {
        var o = this;
        if ((xi(s) || (s = Ht(this, s, r)), !(r instanceof Lr))) {
          if (Xe(r))
            return (
              r.forEach(function (a) {
                return o.add(a, s);
              }),
              this
            );
          if (Be(r)) return this.addLabel(r, s);
          if (Ce(r)) r = Fe.delayedCall(0, r);
          else return this;
        }
        return this !== r ? ui(this, r, s) : this;
      }),
      (t.getChildren = function (r, s, o, a) {
        r === void 0 && (r = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = !0),
          a === void 0 && (a = -$t);
        for (var l = [], u = this._first; u; )
          u._start >= a &&
            (u instanceof Fe
              ? s && l.push(u)
              : (o && l.push(u),
                r && l.push.apply(l, u.getChildren(!0, s, o)))),
            (u = u._next);
        return l;
      }),
      (t.getById = function (r) {
        for (var s = this.getChildren(1, 1, 1), o = s.length; o--; )
          if (s[o].vars.id === r) return s[o];
      }),
      (t.remove = function (r) {
        return Be(r)
          ? this.removeLabel(r)
          : Ce(r)
          ? this.killTweensOf(r)
          : (ks(this, r),
            r === this._recent && (this._recent = this._last),
            fn(this));
      }),
      (t.totalTime = function (r, s) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = Ne(
                Ot.time -
                  (this._ts > 0
                    ? r / this._ts
                    : (this.totalDuration() - r) / -this._ts)
              )),
            n.prototype.totalTime.call(this, r, s),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function (r, s) {
        return (this.labels[r] = Ht(this, s)), this;
      }),
      (t.removeLabel = function (r) {
        return delete this.labels[r], this;
      }),
      (t.addPause = function (r, s, o) {
        var a = Fe.delayedCall(0, s || Pr, o);
        return (
          (a.data = "isPause"), (this._hasPause = 1), ui(this, a, Ht(this, r))
        );
      }),
      (t.removePause = function (r) {
        var s = this._first;
        for (r = Ht(this, r); s; )
          s._start === r && s.data === "isPause" && Ii(s), (s = s._next);
      }),
      (t.killTweensOf = function (r, s, o) {
        for (var a = this.getTweensOf(r, o), l = a.length; l--; )
          ji !== a[l] && a[l].kill(r, s);
        return this;
      }),
      (t.getTweensOf = function (r, s) {
        for (var o = [], a = Ut(r), l = this._first, u = xi(s), h; l; )
          l instanceof Fe
            ? op(l._targets, a) &&
              (u
                ? (!ji || (l._initted && l._ts)) &&
                  l.globalTime(0) <= s &&
                  l.globalTime(l.totalDuration()) > s
                : !s || l.isActive()) &&
              o.push(l)
            : (h = l.getTweensOf(a, s)).length && o.push.apply(o, h),
            (l = l._next);
        return o;
      }),
      (t.tweenTo = function (r, s) {
        s = s || {};
        var o = this,
          a = Ht(o, r),
          l = s,
          u = l.startAt,
          h = l.onStart,
          d = l.onStartParams,
          f = l.immediateRender,
          c,
          m = Fe.to(
            o,
            jt(
              {
                ease: s.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: a,
                overwrite: "auto",
                duration:
                  s.duration ||
                  Math.abs(
                    (a - (u && "time" in u ? u.time : o._time)) / o.timeScale()
                  ) ||
                  de,
                onStart: function () {
                  if ((o.pause(), !c)) {
                    var _ =
                      s.duration ||
                      Math.abs(
                        (a - (u && "time" in u ? u.time : o._time)) /
                          o.timeScale()
                      );
                    m._dur !== _ && Yn(m, _, 0, 1).render(m._time, !0, !0),
                      (c = 1);
                  }
                  h && h.apply(m, d || []);
                },
              },
              s
            )
          );
        return f ? m.render(0) : m;
      }),
      (t.tweenFromTo = function (r, s, o) {
        return this.tweenTo(s, jt({ startAt: { time: Ht(this, r) } }, o));
      }),
      (t.recent = function () {
        return this._recent;
      }),
      (t.nextLabel = function (r) {
        return r === void 0 && (r = this._time), wu(this, Ht(this, r));
      }),
      (t.previousLabel = function (r) {
        return r === void 0 && (r = this._time), wu(this, Ht(this, r), 1);
      }),
      (t.currentLabel = function (r) {
        return arguments.length
          ? this.seek(r, !0)
          : this.previousLabel(this._time + de);
      }),
      (t.shiftChildren = function (r, s, o) {
        o === void 0 && (o = 0);
        for (var a = this._first, l = this.labels, u; a; )
          a._start >= o && ((a._start += r), (a._end += r)), (a = a._next);
        if (s) for (u in l) l[u] >= o && (l[u] += r);
        return fn(this);
      }),
      (t.invalidate = function (r) {
        var s = this._first;
        for (this._lock = 0; s; ) s.invalidate(r), (s = s._next);
        return n.prototype.invalidate.call(this, r);
      }),
      (t.clear = function (r) {
        r === void 0 && (r = !0);
        for (var s = this._first, o; s; )
          (o = s._next), this.remove(s), (s = o);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          r && (this.labels = {}),
          fn(this)
        );
      }),
      (t.totalDuration = function (r) {
        var s = 0,
          o = this,
          a = o._last,
          l = $t,
          u,
          h,
          d;
        if (arguments.length)
          return o.timeScale(
            (o._repeat < 0 ? o.duration() : o.totalDuration()) /
              (o.reversed() ? -r : r)
          );
        if (o._dirty) {
          for (d = o.parent; a; )
            (u = a._prev),
              a._dirty && a.totalDuration(),
              (h = a._start),
              h > l && o._sort && a._ts && !o._lock
                ? ((o._lock = 1), (ui(o, a, h - a._delay, 1)._lock = 0))
                : (l = h),
              h < 0 &&
                a._ts &&
                ((s -= h),
                ((!d && !o._dp) || (d && d.smoothChildTiming)) &&
                  ((o._start += h / o._ts), (o._time -= h), (o._tTime -= h)),
                o.shiftChildren(-h, !1, -1 / 0),
                (l = 0)),
              a._end > s && a._ts && (s = a._end),
              (a = u);
          Yn(o, o === _e && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
        }
        return o._tDur;
      }),
      (e.updateRoot = function (r) {
        if ((_e._ts && (iu(_e, As(r, _e)), (Jl = Ot.frame)), Ot.frame >= eu)) {
          eu += Tt.autoSleep || 120;
          var s = _e._first;
          if ((!s || !s._ts) && Tt.autoSleep && Ot._listeners.length < 2) {
            for (; s && !s._ts; ) s = s._next;
            s || Ot.sleep();
          }
        }
      }),
      e
    );
  })(Lr);
  jt(st.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Fp = function (e, t, i, r, s, o, a) {
      var l = new Dt(this._pt, e, t, 0, 1, Ru, null, s),
        u = 0,
        h = 0,
        d,
        f,
        c,
        m,
        p,
        _,
        D,
        C;
      for (
        l.b = i,
          l.e = r,
          i += "",
          r += "",
          (D = ~r.indexOf("random(")) && (r = kr(r)),
          o && ((C = [i, r]), o(C, e, t), (i = C[0]), (r = C[1])),
          f = i.match(Bo) || [];
        (d = Bo.exec(r));

      )
        (m = d[0]),
          (p = r.substring(u, d.index)),
          c ? (c = (c + 1) % 5) : p.substr(-5) === "rgba(" && (c = 1),
          m !== f[h++] &&
            ((_ = parseFloat(f[h - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: p || h === 1 ? p : ",",
              s: _,
              c: m.charAt(1) === "=" ? qn(_, m) - _ : parseFloat(m) - _,
              m: c && c < 4 ? Math.round : 0,
            }),
            (u = Bo.lastIndex));
      return (
        (l.c = u < r.length ? r.substring(u, r.length) : ""),
        (l.fp = a),
        (Yl.test(r) || D) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    ea = function (e, t, i, r, s, o, a, l, u, h) {
      Ce(r) && (r = r(s || 0, e, o));
      var d = e[t],
        f =
          i !== "get"
            ? i
            : Ce(d)
            ? u
              ? e[
                  t.indexOf("set") || !Ce(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](u)
              : e[t]()
            : d,
        c = Ce(d) ? (u ? Lp : Mu) : na,
        m;
      if (
        (Be(r) &&
          (~r.indexOf("random(") && (r = kr(r)),
          r.charAt(1) === "=" &&
            ((m = qn(f, r) + (Ze(f) || 0)), (m || m === 0) && (r = m))),
        !h || f !== r || ta)
      )
        return !isNaN(f * r) && r !== ""
          ? ((m = new Dt(
              this._pt,
              e,
              t,
              +f || 0,
              r - (f || 0),
              typeof d == "boolean" ? Vp : Lu,
              0,
              c
            )),
            u && (m.fp = u),
            a && m.modifier(a, this, e),
            (this._pt = m))
          : (!d && !(t in e) && zo(t, r),
            Fp.call(this, e, t, f, r, c, l || Tt.stringFilter, u));
    },
    kp = function (e, t, i, r, s) {
      if (
        (Ce(e) && (e = Rr(e, s, t, i, r)),
        !ai(e) || (e.style && e.nodeType) || Xe(e) || ql(e))
      )
        return Be(e) ? Rr(e, s, t, i, r) : e;
      var o = {},
        a;
      for (a in e) o[a] = Rr(e[a], s, t, i, r);
      return o;
    },
    ku = function (e, t, i, r, s, o) {
      var a, l, u, h;
      if (
        kt[e] &&
        (a = new kt[e]()).init(
          s,
          a.rawVars ? t[e] : kp(t[e], r, s, o, i),
          i,
          r,
          o
        ) !== !1 &&
        ((i._pt = l = new Dt(i._pt, s, e, 0, 1, a.render, a, 0, a.priority)),
        i !== Gn)
      )
        for (u = i._ptLookup[i._targets.indexOf(s)], h = a._props.length; h--; )
          u[a._props[h]] = l;
      return a;
    },
    ji,
    ta,
    ia = function n(e, t, i) {
      var r = e.vars,
        s = r.ease,
        o = r.startAt,
        a = r.immediateRender,
        l = r.lazy,
        u = r.onUpdate,
        h = r.runBackwards,
        d = r.yoyoEase,
        f = r.keyframes,
        c = r.autoRevert,
        m = e._dur,
        p = e._startAt,
        _ = e._targets,
        D = e.parent,
        C = D && D.data === "nested" ? D.vars.targets : _,
        P = e._overwrite === "auto" && !Oo,
        v = e.timeline,
        b,
        y,
        w,
        T,
        x,
        S,
        R,
        k,
        I,
        j,
        Y,
        L,
        M;
      if (
        (v && (!f || !s) && (s = "none"),
        (e._ease = mn(s, Un.ease)),
        (e._yEase = d ? Pu(mn(d === !0 ? s : d, Un.ease)) : 0),
        d &&
          e._yoyo &&
          !e._repeat &&
          ((d = e._yEase), (e._yEase = e._ease), (e._ease = d)),
        (e._from = !v && !!r.runBackwards),
        !v || (f && !r.stagger))
      ) {
        if (
          ((k = _[0] ? dn(_[0]).harness : 0),
          (L = k && r[k.prop]),
          (b = Fs(r, $o)),
          p &&
            (p._zTime < 0 && p.progress(1),
            t < 0 && h && a && !c
              ? p.render(-1, !0)
              : p.revert(h && m ? Ps : rp),
            (p._lazy = 0)),
          o)
        ) {
          if (
            (Ii(
              (e._startAt = Fe.set(
                _,
                jt(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: D,
                    immediateRender: !0,
                    lazy: !p && gt(l),
                    startAt: null,
                    delay: 0,
                    onUpdate:
                      u &&
                      function () {
                        return At(e, "onUpdate");
                      },
                    stagger: 0,
                  },
                  o
                )
              ))
            ),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ge || (!a && !c)) && e._startAt.revert(Ps),
            a && m && t <= 0 && i <= 0)
          ) {
            t && (e._zTime = t);
            return;
          }
        } else if (h && m && !p) {
          if (
            (t && (a = !1),
            (w = jt(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !p && gt(l),
                immediateRender: a,
                stagger: 0,
                parent: D,
              },
              b
            )),
            L && (w[k.prop] = L),
            Ii((e._startAt = Fe.set(_, w))),
            (e._startAt._dp = 0),
            (e._startAt._sat = e),
            t < 0 && (Ge ? e._startAt.revert(Ps) : e._startAt.render(-1, !0)),
            (e._zTime = t),
            !a)
          )
            n(e._startAt, de, de);
          else if (!t) return;
        }
        for (
          e._pt = e._ptCache = 0, l = (m && gt(l)) || (l && !m), y = 0;
          y < _.length;
          y++
        ) {
          if (
            ((x = _[y]),
            (R = x._gsap || Wo(_)[y]._gsap),
            (e._ptLookup[y] = j = {}),
            jo[R.id] && Ni.length && Ts(),
            (Y = C === _ ? y : C.indexOf(x)),
            k &&
              (I = new k()).init(x, L || b, e, Y, C) !== !1 &&
              ((e._pt = T =
                new Dt(e._pt, x, I.name, 0, 1, I.render, I, 0, I.priority)),
              I._props.forEach(function (H) {
                j[H] = T;
              }),
              I.priority && (S = 1)),
            !k || L)
          )
            for (w in b)
              kt[w] && (I = ku(w, b, e, Y, x, C))
                ? I.priority && (S = 1)
                : (j[w] = T =
                    ea.call(e, x, w, "get", b[w], Y, C, 0, r.stringFilter));
          e._op && e._op[y] && e.kill(x, e._op[y]),
            P &&
              e._pt &&
              ((ji = e),
              _e.killTweensOf(x, j, e.globalTime(t)),
              (M = !e.parent),
              (ji = 0)),
            e._pt && l && (jo[R.id] = 1);
        }
        S && Vu(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = u),
        (e._initted = (!e._op || e._pt) && !M),
        f && t <= 0 && v.render($t, !0, !0);
    },
    Ap = function (e, t, i, r, s, o, a, l) {
      var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
        h,
        d,
        f,
        c;
      if (!u)
        for (
          u = e._ptCache[t] = [], f = e._ptLookup, c = e._targets.length;
          c--;

        ) {
          if (((h = f[c][t]), h && h.d && h.d._pt))
            for (h = h.d._pt; h && h.p !== t && h.fp !== t; ) h = h._next;
          if (!h)
            return (
              (ta = 1),
              (e.vars[t] = "+=0"),
              ia(e, a),
              (ta = 0),
              l ? xr(t + " not eligible for reset") : 1
            );
          u.push(h);
        }
      for (c = u.length; c--; )
        (d = u[c]),
          (h = d._pt || d),
          (h.s = (r || r === 0) && !s ? r : h.s + (r || 0) + o * h.c),
          (h.c = i - h.s),
          d.e && (d.e = Ee(i) + Ze(d.e)),
          d.b && (d.b = h.s + Ze(d.b));
    },
    Op = function (e, t) {
      var i = e[0] ? dn(e[0]).harness : 0,
        r = i && i.aliases,
        s,
        o,
        a,
        l;
      if (!r) return t;
      s = pn({}, t);
      for (o in r)
        if (o in s)
          for (l = r[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
      return s;
    },
    Mp = function (e, t, i, r) {
      var s = t.ease || r || "power1.inOut",
        o,
        a;
      if (Xe(t))
        (a = i[e] || (i[e] = [])),
          t.forEach(function (l, u) {
            return a.push({ t: (u / (t.length - 1)) * 100, v: l, e: s });
          });
      else
        for (o in t)
          (a = i[o] || (i[o] = [])),
            o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
    },
    Rr = function (e, t, i, r, s) {
      return Ce(e)
        ? e.call(t, i, r, s)
        : Be(e) && ~e.indexOf("random(")
        ? kr(e)
        : e;
    },
    Au = Uo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ou = {};
  wt(Au + ",id,stagger,delay,duration,paused,scrollTrigger", function (n) {
    return (Ou[n] = 1);
  });
  var Fe = (function (n) {
    cn(e, n);
    function e(i, r, s, o) {
      var a;
      typeof r == "number" && ((s.duration = r), (r = s), (s = null)),
        (a = n.call(this, o ? r : Sr(r)) || this);
      var l = a.vars,
        u = l.duration,
        h = l.delay,
        d = l.immediateRender,
        f = l.stagger,
        c = l.overwrite,
        m = l.keyframes,
        p = l.defaults,
        _ = l.scrollTrigger,
        D = l.yoyoEase,
        C = r.parent || _e,
        P = (Xe(i) || ql(i) ? xi(i[0]) : "length" in r) ? [i] : Ut(i),
        v,
        b,
        y,
        w,
        T,
        x,
        S,
        R;
      if (
        ((a._targets = P.length
          ? Wo(P)
          : xr(
              "GSAP target " + i + " not found. https://gsap.com",
              !Tt.nullTargetWarn
            ) || []),
        (a._ptLookup = []),
        (a._overwrite = c),
        m || f || Es(u) || Es(h))
      ) {
        if (
          ((r = a.vars),
          (v = a.timeline =
            new st({
              data: "nested",
              defaults: p || {},
              targets: C && C.data === "nested" ? C.vars.targets : P,
            })),
          v.kill(),
          (v.parent = v._dp = We(a)),
          (v._start = 0),
          f || Es(u) || Es(h))
        ) {
          if (((w = P.length), (S = f && fu(f)), ai(f)))
            for (T in f) ~Au.indexOf(T) && (R || (R = {}), (R[T] = f[T]));
          for (b = 0; b < w; b++)
            (y = Fs(r, Ou)),
              (y.stagger = 0),
              D && (y.yoyoEase = D),
              R && pn(y, R),
              (x = P[b]),
              (y.duration = +Rr(u, We(a), b, x, P)),
              (y.delay = (+Rr(h, We(a), b, x, P) || 0) - a._delay),
              !f &&
                w === 1 &&
                y.delay &&
                ((a._delay = h = y.delay), (a._start += h), (y.delay = 0)),
              v.to(x, y, S ? S(b, x, P) : 0),
              (v._ease = Z.none);
          v.duration() ? (u = h = 0) : (a.timeline = 0);
        } else if (m) {
          Sr(jt(v.vars.defaults, { ease: "none" })),
            (v._ease = mn(m.ease || r.ease || "none"));
          var k = 0,
            I,
            j,
            Y;
          if (Xe(m))
            m.forEach(function (L) {
              return v.to(P, L, ">");
            }),
              v.duration();
          else {
            y = {};
            for (T in m)
              T === "ease" || T === "easeEach" || Mp(T, m[T], y, m.easeEach);
            for (T in y)
              for (
                I = y[T].sort(function (L, M) {
                  return L.t - M.t;
                }),
                  k = 0,
                  b = 0;
                b < I.length;
                b++
              )
                (j = I[b]),
                  (Y = {
                    ease: j.e,
                    duration: ((j.t - (b ? I[b - 1].t : 0)) / 100) * u,
                  }),
                  (Y[T] = j.v),
                  v.to(P, Y, k),
                  (k += Y.duration);
            v.duration() < u && v.to({}, { duration: u - v.duration() });
          }
        }
        u || a.duration((u = v.duration()));
      } else a.timeline = 0;
      return (
        c === !0 && !Oo && ((ji = We(a)), _e.killTweensOf(P), (ji = 0)),
        ui(C, We(a), s),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (d ||
          (!u &&
            !m &&
            a._start === Ne(C._time) &&
            gt(d) &&
            hp(We(a)) &&
            C.data !== "nested")) &&
          ((a._tTime = -de), a.render(Math.max(0, -h) || 0)),
        _ && uu(We(a), _),
        a
      );
    }
    var t = e.prototype;
    return (
      (t.render = function (r, s, o) {
        var a = this._time,
          l = this._tDur,
          u = this._dur,
          h = r < 0,
          d = r > l - de && !h ? l : r < de ? 0 : r,
          f,
          c,
          m,
          p,
          _,
          D,
          C,
          P,
          v;
        if (!u) dp(this, r, s, o);
        else if (
          d !== this._tTime ||
          !r ||
          o ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== h)
        ) {
          if (((f = d), (P = this.timeline), this._repeat)) {
            if (((p = u + this._rDelay), this._repeat < -1 && h))
              return this.totalTime(p * 100 + r, s, o);
            if (
              ((f = Ne(d % p)),
              d === l
                ? ((m = this._repeat), (f = u))
                : ((m = ~~(d / p)),
                  m && m === Ne(d / p) && ((f = u), m--),
                  f > u && (f = u)),
              (D = this._yoyo && m & 1),
              D && ((v = this._yEase), (f = u - f)),
              (_ = Kn(this._tTime, p)),
              f === a && !o && this._initted && m === _)
            )
              return (this._tTime = d), this;
            m !== _ &&
              (P && this._yEase && Su(P, D),
              this.vars.repeatRefresh &&
                !D &&
                !this._lock &&
                this._time !== p &&
                this._initted &&
                ((this._lock = o = 1),
                (this.render(Ne(p * m), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (hu(this, h ? r : f, o, s, d)) return (this._tTime = 0), this;
            if (a !== this._time && !(o && this.vars.repeatRefresh && m !== _))
              return this;
            if (u !== this._dur) return this.render(r, s, o);
          }
          if (
            ((this._tTime = d),
            (this._time = f),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = C = (v || this._ease)(f / u)),
            this._from && (this.ratio = C = 1 - C),
            f && !a && !s && !m && (At(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (c = this._pt; c; ) c.r(C, c.d), (c = c._next);
          (P && P.render(r < 0 ? r : P._dur * P._ease(f / this._dur), s, o)) ||
            (this._startAt && (this._zTime = r)),
            this._onUpdate &&
              !s &&
              (h && qo(this, r, s, o), At(this, "onUpdate")),
            this._repeat &&
              m !== _ &&
              this.vars.onRepeat &&
              !s &&
              this.parent &&
              At(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (h && !this._onUpdate && qo(this, r, !0, !0),
              (r || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                Ii(this, 1),
              !s &&
                !(h && !a) &&
                (d || a || D) &&
                (At(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (t.targets = function () {
        return this._targets;
      }),
      (t.invalidate = function (r) {
        return (
          (!r || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(r),
          n.prototype.invalidate.call(this, r)
        );
      }),
      (t.resetTo = function (r, s, o, a, l) {
        Mr || Ot.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          h;
        return (
          this._initted || ia(this, u),
          (h = this._ease(u / this._dur)),
          Ap(this, r, s, o, a, h, u, l)
            ? this.resetTo(r, s, o, a, 1)
            : (Ms(this, 0),
              this.parent ||
                ou(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (t.kill = function (r, s) {
        if ((s === void 0 && (s = "all"), !r && (!s || s === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Ar(this) : this;
        if (this.timeline) {
          var o = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(r, s, ji && ji.vars.overwrite !== !0)
              ._first || Ar(this),
            this.parent &&
              o !== this.timeline.totalDuration() &&
              Yn(this, (this._dur * this.timeline._tDur) / o, 0, 1),
            this
          );
        }
        var a = this._targets,
          l = r ? Ut(r) : a,
          u = this._ptLookup,
          h = this._pt,
          d,
          f,
          c,
          m,
          p,
          _,
          D;
        if ((!s || s === "all") && lp(a, l))
          return s === "all" && (this._pt = 0), Ar(this);
        for (
          d = this._op = this._op || [],
            s !== "all" &&
              (Be(s) &&
                ((p = {}),
                wt(s, function (C) {
                  return (p[C] = 1);
                }),
                (s = p)),
              (s = Op(a, s))),
            D = a.length;
          D--;

        )
          if (~l.indexOf(a[D])) {
            (f = u[D]),
              s === "all"
                ? ((d[D] = s), (m = f), (c = {}))
                : ((c = d[D] = d[D] || {}), (m = s));
            for (p in m)
              (_ = f && f[p]),
                _ &&
                  ((!("kill" in _.d) || _.d.kill(p) === !0) &&
                    ks(this, _, "_pt"),
                  delete f[p]),
                c !== "all" && (c[p] = 1);
          }
        return this._initted && !this._pt && h && Ar(this), this;
      }),
      (e.to = function (r, s) {
        return new e(r, s, arguments[2]);
      }),
      (e.from = function (r, s) {
        return Tr(1, arguments);
      }),
      (e.delayedCall = function (r, s, o, a) {
        return new e(s, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: r,
          onComplete: s,
          onReverseComplete: s,
          onCompleteParams: o,
          onReverseCompleteParams: o,
          callbackScope: a,
        });
      }),
      (e.fromTo = function (r, s, o) {
        return Tr(2, arguments);
      }),
      (e.set = function (r, s) {
        return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(r, s);
      }),
      (e.killTweensOf = function (r, s, o) {
        return _e.killTweensOf(r, s, o);
      }),
      e
    );
  })(Lr);
  jt(Fe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    wt("staggerTo,staggerFrom,staggerFromTo", function (n) {
      Fe[n] = function () {
        var e = new st(),
          t = Yo.call(arguments, 0);
        return t.splice(n === "staggerFromTo" ? 5 : 4, 0, 0), e[n].apply(e, t);
      };
    });
  var na = function (e, t, i) {
      return (e[t] = i);
    },
    Mu = function (e, t, i) {
      return e[t](i);
    },
    Lp = function (e, t, i, r) {
      return e[t](r.fp, i);
    },
    Rp = function (e, t, i) {
      return e.setAttribute(t, i);
    },
    ra = function (e, t) {
      return Ce(e[t]) ? Mu : Lo(e[t]) && e.setAttribute ? Rp : na;
    },
    Lu = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
    },
    Vp = function (e, t) {
      return t.set(t.t, t.p, !!(t.s + t.c * e), t);
    },
    Ru = function (e, t) {
      var i = t._pt,
        r = "";
      if (!e && t.b) r = t.b;
      else if (e === 1 && t.e) r = t.e;
      else {
        for (; i; )
          (r =
            i.p +
            (i.m
              ? i.m(i.s + i.c * e)
              : Math.round((i.s + i.c * e) * 1e4) / 1e4) +
            r),
            (i = i._next);
        r += t.c;
      }
      t.set(t.t, t.p, r, t);
    },
    sa = function (e, t) {
      for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
    },
    Bp = function (e, t, i, r) {
      for (var s = this._pt, o; s; )
        (o = s._next), s.p === r && s.modifier(e, t, i), (s = o);
    },
    Np = function (e) {
      for (var t = this._pt, i, r; t; )
        (r = t._next),
          (t.p === e && !t.op) || t.op === e
            ? ks(this, t, "_pt")
            : t.dep || (i = 1),
          (t = r);
      return !i;
    },
    Ip = function (e, t, i, r) {
      r.mSet(e, t, r.m.call(r.tween, i, r.mt), r);
    },
    Vu = function (e) {
      for (var t = e._pt, i, r, s, o; t; ) {
        for (i = t._next, r = s; r && r.pr > t.pr; ) r = r._next;
        (t._prev = r ? r._prev : o) ? (t._prev._next = t) : (s = t),
          (t._next = r) ? (r._prev = t) : (o = t),
          (t = i);
      }
      e._pt = s;
    },
    Dt = (function () {
      function n(t, i, r, s, o, a, l, u, h) {
        (this.t = i),
          (this.s = s),
          (this.c = o),
          (this.p = r),
          (this.r = a || Lu),
          (this.d = l || this),
          (this.set = u || na),
          (this.pr = h || 0),
          (this._next = t),
          t && (t._prev = this);
      }
      var e = n.prototype;
      return (
        (e.modifier = function (i, r, s) {
          (this.mSet = this.mSet || this.set),
            (this.set = Ip),
            (this.m = i),
            (this.mt = s),
            (this.tween = r);
        }),
        n
      );
    })();
  wt(
    Uo +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (n) {
      return ($o[n] = 1);
    }
  ),
    (Ft.TweenMax = Ft.TweenLite = Fe),
    (Ft.TimelineLite = Ft.TimelineMax = st),
    (_e = new st({
      sortChildren: !1,
      defaults: Un,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (Tt.stringFilter = xu);
  var vn = [],
    Ls = {},
    zp = [],
    Bu = 0,
    $p = 0,
    oa = function (e) {
      return (Ls[e] || zp).map(function (t) {
        return t();
      });
    },
    aa = function () {
      var e = Date.now(),
        t = [];
      e - Bu > 2 &&
        (oa("matchMediaInit"),
        vn.forEach(function (i) {
          var r = i.queries,
            s = i.conditions,
            o,
            a,
            l,
            u;
          for (a in r)
            (o = li.matchMedia(r[a]).matches),
              o && (l = 1),
              o !== s[a] && ((s[a] = o), (u = 1));
          u && (i.revert(), l && t.push(i));
        }),
        oa("matchMediaRevert"),
        t.forEach(function (i) {
          return i.onMatch(i, function (r) {
            return i.add(null, r);
          });
        }),
        (Bu = e),
        oa("matchMedia"));
    },
    Nu = (function () {
      function n(t, i) {
        (this.selector = i && Go(i)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = $p++),
          t && this.add(t);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          Ce(i) && ((s = r), (r = i), (i = Ce));
          var o = this,
            a = function () {
              var u = fe,
                h = o.selector,
                d;
              return (
                u && u !== o && u.data.push(o),
                s && (o.selector = Go(s)),
                (fe = o),
                (d = r.apply(o, arguments)),
                Ce(d) && o._r.push(d),
                (fe = u),
                (o.selector = h),
                (o.isReverted = !1),
                d
              );
            };
          return (
            (o.last = a),
            i === Ce
              ? a(o, function (l) {
                  return o.add(null, l);
                })
              : i
              ? (o[i] = a)
              : a
          );
        }),
        (e.ignore = function (i) {
          var r = fe;
          (fe = null), i(this), (fe = r);
        }),
        (e.getTweens = function () {
          var i = [];
          return (
            this.data.forEach(function (r) {
              return r instanceof n
                ? i.push.apply(i, r.getTweens())
                : r instanceof Fe &&
                    !(r.parent && r.parent.data === "nested") &&
                    i.push(r);
            }),
            i
          );
        }),
        (e.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (e.kill = function (i, r) {
          var s = this;
          if (
            (i
              ? (function () {
                  for (var a = s.getTweens(), l = s.data.length, u; l--; )
                    (u = s.data[l]),
                      u.data === "isFlip" &&
                        (u.revert(),
                        u.getChildren(!0, !0, !1).forEach(function (h) {
                          return a.splice(a.indexOf(h), 1);
                        }));
                  for (
                    a
                      .map(function (h) {
                        return {
                          g:
                            h._dur ||
                            h._delay ||
                            (h._sat && !h._sat.vars.immediateRender)
                              ? h.globalTime(0)
                              : -1 / 0,
                          t: h,
                        };
                      })
                      .sort(function (h, d) {
                        return d.g - h.g || -1 / 0;
                      })
                      .forEach(function (h) {
                        return h.t.revert(i);
                      }),
                      l = s.data.length;
                    l--;

                  )
                    (u = s.data[l]),
                      u instanceof st
                        ? u.data !== "nested" &&
                          (u.scrollTrigger && u.scrollTrigger.revert(),
                          u.kill())
                        : !(u instanceof Fe) && u.revert && u.revert(i);
                  s._r.forEach(function (h) {
                    return h(i, s);
                  }),
                    (s.isReverted = !0);
                })()
              : this.data.forEach(function (a) {
                  return a.kill && a.kill();
                }),
            this.clear(),
            r)
          )
            for (var o = vn.length; o--; )
              vn[o].id === this.id && vn.splice(o, 1);
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        n
      );
    })(),
    jp = (function () {
      function n(t) {
        (this.contexts = []), (this.scope = t), fe && fe.data.push(this);
      }
      var e = n.prototype;
      return (
        (e.add = function (i, r, s) {
          ai(i) || (i = { matches: i });
          var o = new Nu(0, s || this.scope),
            a = (o.conditions = {}),
            l,
            u,
            h;
          fe && !o.selector && (o.selector = fe.selector),
            this.contexts.push(o),
            (r = o.add("onMatch", r)),
            (o.queries = i);
          for (u in i)
            u === "all"
              ? (h = 1)
              : ((l = li.matchMedia(i[u])),
                l &&
                  (vn.indexOf(o) < 0 && vn.push(o),
                  (a[u] = l.matches) && (h = 1),
                  l.addListener
                    ? l.addListener(aa)
                    : l.addEventListener("change", aa)));
          return (
            h &&
              r(o, function (d) {
                return o.add(null, d);
              }),
            this
          );
        }),
        (e.revert = function (i) {
          this.kill(i || {});
        }),
        (e.kill = function (i) {
          this.contexts.forEach(function (r) {
            return r.kill(i, !0);
          });
        }),
        n
      );
    })(),
    Rs = {
      registerPlugin: function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        t.forEach(function (r) {
          return bu(r);
        });
      },
      timeline: function (e) {
        return new st(e);
      },
      getTweensOf: function (e, t) {
        return _e.getTweensOf(e, t);
      },
      getProperty: function (e, t, i, r) {
        Be(e) && (e = Ut(e)[0]);
        var s = dn(e || {}).get,
          o = i ? ru : nu;
        return (
          i === "native" && (i = ""),
          e &&
            (t
              ? o(((kt[t] && kt[t].get) || s)(e, t, i, r))
              : function (a, l, u) {
                  return o(((kt[a] && kt[a].get) || s)(e, a, l, u));
                })
        );
      },
      quickSetter: function (e, t, i) {
        if (((e = Ut(e)), e.length > 1)) {
          var r = e.map(function (h) {
              return bt.quickSetter(h, t, i);
            }),
            s = r.length;
          return function (h) {
            for (var d = s; d--; ) r[d](h);
          };
        }
        e = e[0] || {};
        var o = kt[t],
          a = dn(e),
          l = (a.harness && (a.harness.aliases || {})[t]) || t,
          u = o
            ? function (h) {
                var d = new o();
                (Gn._pt = 0),
                  d.init(e, i ? h + i : h, Gn, 0, [e]),
                  d.render(1, d),
                  Gn._pt && sa(1, Gn);
              }
            : a.set(e, l);
        return o
          ? u
          : function (h) {
              return u(e, l, i ? h + i : h, a, 1);
            };
      },
      quickTo: function (e, t, i) {
        var r,
          s = bt.to(
            e,
            pn(((r = {}), (r[t] = "+=0.1"), (r.paused = !0), r), i || {})
          ),
          o = function (l, u, h) {
            return s.resetTo(t, l, u, h);
          };
        return (o.tween = s), o;
      },
      isTweening: function (e) {
        return _e.getTweensOf(e, !0).length > 0;
      },
      defaults: function (e) {
        return e && e.ease && (e.ease = mn(e.ease, Un.ease)), su(Un, e || {});
      },
      config: function (e) {
        return su(Tt, e || {});
      },
      registerEffect: function (e) {
        var t = e.name,
          i = e.effect,
          r = e.plugins,
          s = e.defaults,
          o = e.extendTimeline;
        (r || "").split(",").forEach(function (a) {
          return (
            a &&
            !kt[a] &&
            !Ft[a] &&
            xr(t + " effect requires " + a + " plugin.")
          );
        }),
          (Ho[t] = function (a, l, u) {
            return i(Ut(a), jt(l || {}, s), u);
          }),
          o &&
            (st.prototype[t] = function (a, l, u) {
              return this.add(Ho[t](a, ai(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (e, t) {
        Z[e] = mn(t);
      },
      parseEase: function (e, t) {
        return arguments.length ? mn(e, t) : Z;
      },
      getById: function (e) {
        return _e.getById(e);
      },
      exportRoot: function (e, t) {
        e === void 0 && (e = {});
        var i = new st(e),
          r,
          s;
        for (
          i.smoothChildTiming = gt(e.smoothChildTiming),
            _e.remove(i),
            i._dp = 0,
            i._time = i._tTime = _e._time,
            r = _e._first;
          r;

        )
          (s = r._next),
            (t ||
              !(
                !r._dur &&
                r instanceof Fe &&
                r.vars.onComplete === r._targets[0]
              )) &&
              ui(i, r, r._start - r._delay),
            (r = s);
        return ui(_e, i, 0), i;
      },
      context: function (e, t) {
        return e ? new Nu(e, t) : fe;
      },
      matchMedia: function (e) {
        return new jp(e);
      },
      matchMediaRefresh: function () {
        return (
          vn.forEach(function (e) {
            var t = e.conditions,
              i,
              r;
            for (r in t) t[r] && ((t[r] = !1), (i = 1));
            i && e.revert();
          }) || aa()
        );
      },
      addEventListener: function (e, t) {
        var i = Ls[e] || (Ls[e] = []);
        ~i.indexOf(t) || i.push(t);
      },
      removeEventListener: function (e, t) {
        var i = Ls[e],
          r = i && i.indexOf(t);
        r >= 0 && i.splice(r, 1);
      },
      utils: {
        wrap: Dp,
        wrapYoyo: bp,
        distribute: fu,
        random: _u,
        snap: mu,
        normalize: wp,
        getUnit: Ze,
        clamp: mp,
        splitColor: Cu,
        toArray: Ut,
        selector: Go,
        mapRange: gu,
        pipe: vp,
        unitize: gp,
        interpolate: Cp,
        shuffle: pu,
      },
      install: Zl,
      effects: Ho,
      ticker: Ot,
      updateRoot: st.updateRoot,
      plugins: kt,
      globalTimeline: _e,
      core: {
        PropTween: Dt,
        globals: Ql,
        Tween: Fe,
        Timeline: st,
        Animation: Lr,
        getCache: dn,
        _removeLinkedListItem: ks,
        reverting: function () {
          return Ge;
        },
        context: function (e) {
          return e && fe && (fe.data.push(e), (e._ctx = fe)), fe;
        },
        suppressOverwrites: function (e) {
          return (Oo = e);
        },
      },
    };
  wt("to,from,fromTo,delayedCall,set,killTweensOf", function (n) {
    return (Rs[n] = Fe[n]);
  }),
    Ot.add(st.updateRoot),
    (Gn = Rs.to({}, { duration: 0 }));
  var Hp = function (e, t) {
      for (var i = e._pt; i && i.p !== t && i.op !== t && i.fp !== t; )
        i = i._next;
      return i;
    },
    Up = function (e, t) {
      var i = e._targets,
        r,
        s,
        o;
      for (r in t)
        for (s = i.length; s--; )
          (o = e._ptLookup[s][r]),
            o &&
              (o = o.d) &&
              (o._pt && (o = Hp(o, r)),
              o && o.modifier && o.modifier(t[r], e, i[s], r));
    },
    la = function (e, t) {
      return {
        name: e,
        rawVars: 1,
        init: function (r, s, o) {
          o._onInit = function (a) {
            var l, u;
            if (
              (Be(s) &&
                ((l = {}),
                wt(s, function (h) {
                  return (l[h] = 1);
                }),
                (s = l)),
              t)
            ) {
              l = {};
              for (u in s) l[u] = t(s[u]);
              s = l;
            }
            Up(a, s);
          };
        },
      };
    },
    bt =
      Rs.registerPlugin(
        {
          name: "attr",
          init: function (e, t, i, r, s) {
            var o, a, l;
            this.tween = i;
            for (o in t)
              (l = e.getAttribute(o) || ""),
                (a = this.add(
                  e,
                  "setAttribute",
                  (l || 0) + "",
                  t[o],
                  r,
                  s,
                  0,
                  0,
                  o
                )),
                (a.op = o),
                (a.b = l),
                this._props.push(o);
          },
          render: function (e, t) {
            for (var i = t._pt; i; )
              Ge ? i.set(i.t, i.p, i.b, i) : i.r(e, i.d), (i = i._next);
          },
        },
        {
          name: "endArray",
          init: function (e, t) {
            for (var i = t.length; i--; )
              this.add(e, i, e[i] || 0, t[i], 0, 0, 0, 0, 0, 1);
          },
        },
        la("roundProps", Xo),
        la("modifiers"),
        la("snap", mu)
      ) || Rs;
  (Fe.version = st.version = bt.version = "3.12.5"),
    (Xl = 1),
    Ro() && Xn(),
    Z.Power0,
    Z.Power1,
    Z.Power2,
    Z.Power3,
    Z.Power4,
    Z.Linear,
    Z.Quad,
    Z.Cubic,
    Z.Quart,
    Z.Quint,
    Z.Strong,
    Z.Elastic,
    Z.Back,
    Z.SteppedEase,
    Z.Bounce,
    Z.Sine,
    Z.Expo,
    Z.Circ;
  /*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Iu,
    Hi,
    Zn,
    ua,
    gn,
    zu,
    ha,
    Wp = function () {
      return typeof window < "u";
    },
    Pi = {},
    wn = 180 / Math.PI,
    Qn = Math.PI / 180,
    Jn = Math.atan2,
    $u = 1e8,
    ca = /([A-Z])/g,
    qp = /(left|right|width|margin|padding|x)/i,
    Kp = /[\s,\(]\S/,
    hi = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    da = function (e, t) {
      return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
    },
    Yp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
        t
      );
    },
    Gp = function (e, t) {
      return t.set(
        t.t,
        t.p,
        e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
        t
      );
    },
    Xp = function (e, t) {
      var i = t.s + t.c * e;
      t.set(t.t, t.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + t.u, t);
    },
    ju = function (e, t) {
      return t.set(t.t, t.p, e ? t.e : t.b, t);
    },
    Hu = function (e, t) {
      return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
    },
    Zp = function (e, t, i) {
      return (e.style[t] = i);
    },
    Qp = function (e, t, i) {
      return e.style.setProperty(t, i);
    },
    Jp = function (e, t, i) {
      return (e._gsap[t] = i);
    },
    ef = function (e, t, i) {
      return (e._gsap.scaleX = e._gsap.scaleY = i);
    },
    tf = function (e, t, i, r, s) {
      var o = e._gsap;
      (o.scaleX = o.scaleY = i), o.renderTransform(s, o);
    },
    nf = function (e, t, i, r, s) {
      var o = e._gsap;
      (o[t] = i), o.renderTransform(s, o);
    },
    ve = "transform",
    Ct = ve + "Origin",
    rf = function n(e, t) {
      var i = this,
        r = this.target,
        s = r.style,
        o = r._gsap;
      if (e in Pi && s) {
        if (((this.tfm = this.tfm || {}), e !== "transform"))
          (e = hi[e] || e),
            ~e.indexOf(",")
              ? e.split(",").forEach(function (a) {
                  return (i.tfm[a] = Si(r, a));
                })
              : (this.tfm[e] = o.x ? o[e] : Si(r, e)),
            e === Ct && (this.tfm.zOrigin = o.zOrigin);
        else
          return hi.transform.split(",").forEach(function (a) {
            return n.call(i, a, t);
          });
        if (this.props.indexOf(ve) >= 0) return;
        o.svg &&
          ((this.svgo = r.getAttribute("data-svg-origin")),
          this.props.push(Ct, t, "")),
          (e = ve);
      }
      (s || t) && this.props.push(e, t, s[e]);
    },
    Uu = function (e) {
      e.translate &&
        (e.removeProperty("translate"),
        e.removeProperty("scale"),
        e.removeProperty("rotate"));
    },
    sf = function () {
      var e = this.props,
        t = this.target,
        i = t.style,
        r = t._gsap,
        s,
        o;
      for (s = 0; s < e.length; s += 3)
        e[s + 1]
          ? (t[e[s]] = e[s + 2])
          : e[s + 2]
          ? (i[e[s]] = e[s + 2])
          : i.removeProperty(
              e[s].substr(0, 2) === "--"
                ? e[s]
                : e[s].replace(ca, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (o in this.tfm) r[o] = this.tfm[o];
        r.svg &&
          (r.renderTransform(),
          t.setAttribute("data-svg-origin", this.svgo || "")),
          (s = ha()),
          (!s || !s.isStart) &&
            !i[ve] &&
            (Uu(i),
            r.zOrigin &&
              i[Ct] &&
              ((i[Ct] += " " + r.zOrigin + "px"),
              (r.zOrigin = 0),
              r.renderTransform()),
            (r.uncache = 1));
      }
    },
    Wu = function (e, t) {
      var i = { target: e, props: [], revert: sf, save: rf };
      return (
        e._gsap || bt.core.getCache(e),
        t &&
          t.split(",").forEach(function (r) {
            return i.save(r);
          }),
        i
      );
    },
    qu,
    pa = function (e, t) {
      var i = Hi.createElementNS
        ? Hi.createElementNS(
            (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            e
          )
        : Hi.createElement(e);
      return i && i.style ? i : Hi.createElement(e);
    },
    ci = function n(e, t, i) {
      var r = getComputedStyle(e);
      return (
        r[t] ||
        r.getPropertyValue(t.replace(ca, "-$1").toLowerCase()) ||
        r.getPropertyValue(t) ||
        (!i && n(e, er(t) || t, 1)) ||
        ""
      );
    },
    Ku = "O,Moz,ms,Ms,Webkit".split(","),
    er = function (e, t, i) {
      var r = t || gn,
        s = r.style,
        o = 5;
      if (e in s && !i) return e;
      for (
        e = e.charAt(0).toUpperCase() + e.substr(1);
        o-- && !(Ku[o] + e in s);

      );
      return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? Ku[o] : "") + e;
    },
    fa = function () {
      Wp() &&
        window.document &&
        ((Iu = window),
        (Hi = Iu.document),
        (Zn = Hi.documentElement),
        (gn = pa("div") || { style: {} }),
        pa("div"),
        (ve = er(ve)),
        (Ct = ve + "Origin"),
        (gn.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (qu = !!er("perspective")),
        (ha = bt.core.reverting),
        (ua = 1));
    },
    ma = function n(e) {
      var t = pa(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        i = this.parentNode,
        r = this.nextSibling,
        s = this.style.cssText,
        o;
      if (
        (Zn.appendChild(t),
        t.appendChild(this),
        (this.style.display = "block"),
        e)
      )
        try {
          (o = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = n);
        } catch {}
      else this._gsapBBox && (o = this._gsapBBox());
      return (
        i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
        Zn.removeChild(t),
        (this.style.cssText = s),
        o
      );
    },
    Yu = function (e, t) {
      for (var i = t.length; i--; )
        if (e.hasAttribute(t[i])) return e.getAttribute(t[i]);
    },
    Gu = function (e) {
      var t;
      try {
        t = e.getBBox();
      } catch {
        t = ma.call(e, !0);
      }
      return (
        (t && (t.width || t.height)) ||
          e.getBBox === ma ||
          (t = ma.call(e, !0)),
        t && !t.width && !t.x && !t.y
          ? {
              x: +Yu(e, ["x", "cx", "x1"]) || 0,
              y: +Yu(e, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : t
      );
    },
    Xu = function (e) {
      return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Gu(e));
    },
    Dn = function (e, t) {
      if (t) {
        var i = e.style,
          r;
        t in Pi && t !== Ct && (t = ve),
          i.removeProperty
            ? ((r = t.substr(0, 2)),
              (r === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
              i.removeProperty(
                r === "--" ? t : t.replace(ca, "-$1").toLowerCase()
              ))
            : i.removeAttribute(t);
      }
    },
    Ui = function (e, t, i, r, s, o) {
      var a = new Dt(e._pt, t, i, 0, 1, o ? Hu : ju);
      return (e._pt = a), (a.b = r), (a.e = s), e._props.push(i), a;
    },
    Zu = { deg: 1, rad: 1, turn: 1 },
    of = { grid: 1, flex: 1 },
    Wi = function n(e, t, i, r) {
      var s = parseFloat(i) || 0,
        o = (i + "").trim().substr((s + "").length) || "px",
        a = gn.style,
        l = qp.test(t),
        u = e.tagName.toLowerCase() === "svg",
        h = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        f = r === "px",
        c = r === "%",
        m,
        p,
        _,
        D;
      if (r === o || !s || Zu[r] || Zu[o]) return s;
      if (
        (o !== "px" && !f && (s = n(e, t, i, "px")),
        (D = e.getCTM && Xu(e)),
        (c || o === "%") && (Pi[t] || ~t.indexOf("adius")))
      )
        return (
          (m = D ? e.getBBox()[l ? "width" : "height"] : e[h]),
          Ee(c ? (s / m) * d : (s / 100) * m)
        );
      if (
        ((a[l ? "width" : "height"] = d + (f ? o : r)),
        (p =
          ~t.indexOf("adius") || (r === "em" && e.appendChild && !u)
            ? e
            : e.parentNode),
        D && (p = (e.ownerSVGElement || {}).parentNode),
        (!p || p === Hi || !p.appendChild) && (p = Hi.body),
        (_ = p._gsap),
        _ && c && _.width && l && _.time === Ot.time && !_.uncache)
      )
        return Ee((s / _.width) * d);
      if (c && (t === "height" || t === "width")) {
        var C = e.style[t];
        (e.style[t] = d + r), (m = e[h]), C ? (e.style[t] = C) : Dn(e, t);
      } else
        (c || o === "%") &&
          !of[ci(p, "display")] &&
          (a.position = ci(e, "position")),
          p === e && (a.position = "static"),
          p.appendChild(gn),
          (m = gn[h]),
          p.removeChild(gn),
          (a.position = "absolute");
      return (
        l && c && ((_ = dn(p)), (_.time = Ot.time), (_.width = p[h])),
        Ee(f ? (m * s) / d : m && s ? (d / m) * s : 0)
      );
    },
    Si = function (e, t, i, r) {
      var s;
      return (
        ua || fa(),
        t in hi &&
          t !== "transform" &&
          ((t = hi[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
        Pi[t] && t !== "transform"
          ? ((s = Br(e, r)),
            (s =
              t !== "transformOrigin"
                ? s[t]
                : s.svg
                ? s.origin
                : Bs(ci(e, Ct)) + " " + s.zOrigin + "px"))
          : ((s = e.style[t]),
            (!s || s === "auto" || r || ~(s + "").indexOf("calc(")) &&
              (s =
                (Vs[t] && Vs[t](e, t, i)) ||
                ci(e, t) ||
                tu(e, t) ||
                (t === "opacity" ? 1 : 0))),
        i && !~(s + "").trim().indexOf(" ") ? Wi(e, t, s, i) + i : s
      );
    },
    af = function (e, t, i, r) {
      if (!i || i === "none") {
        var s = er(t, e, 1),
          o = s && ci(e, s, 1);
        o && o !== i
          ? ((t = s), (i = o))
          : t === "borderColor" && (i = ci(e, "borderTopColor"));
      }
      var a = new Dt(this._pt, e.style, t, 0, 1, Ru),
        l = 0,
        u = 0,
        h,
        d,
        f,
        c,
        m,
        p,
        _,
        D,
        C,
        P,
        v,
        b;
      if (
        ((a.b = i),
        (a.e = r),
        (i += ""),
        (r += ""),
        r === "auto" &&
          ((p = e.style[t]),
          (e.style[t] = r),
          (r = ci(e, t) || r),
          p ? (e.style[t] = p) : Dn(e, t)),
        (h = [i, r]),
        xu(h),
        (i = h[0]),
        (r = h[1]),
        (f = i.match(Wn) || []),
        (b = r.match(Wn) || []),
        b.length)
      ) {
        for (; (d = Wn.exec(r)); )
          (_ = d[0]),
            (C = r.substring(l, d.index)),
            m
              ? (m = (m + 1) % 5)
              : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") &&
                (m = 1),
            _ !== (p = f[u++] || "") &&
              ((c = parseFloat(p) || 0),
              (v = p.substr((c + "").length)),
              _.charAt(1) === "=" && (_ = qn(c, _) + v),
              (D = parseFloat(_)),
              (P = _.substr((D + "").length)),
              (l = Wn.lastIndex - P.length),
              P ||
                ((P = P || Tt.units[t] || v),
                l === r.length && ((r += P), (a.e += P))),
              v !== P && (c = Wi(e, t, p, P) || 0),
              (a._pt = {
                _next: a._pt,
                p: C || u === 1 ? C : ",",
                s: c,
                c: D - c,
                m: (m && m < 4) || t === "zIndex" ? Math.round : 0,
              }));
        a.c = l < r.length ? r.substring(l, r.length) : "";
      } else a.r = t === "display" && r === "none" ? Hu : ju;
      return Yl.test(r) && (a.e = 0), (this._pt = a), a;
    },
    Qu = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    lf = function (e) {
      var t = e.split(" "),
        i = t[0],
        r = t[1] || "50%";
      return (
        (i === "top" || i === "bottom" || r === "left" || r === "right") &&
          ((e = i), (i = r), (r = e)),
        (t[0] = Qu[i] || i),
        (t[1] = Qu[r] || r),
        t.join(" ")
      );
    },
    uf = function (e, t) {
      if (t.tween && t.tween._time === t.tween._dur) {
        var i = t.t,
          r = i.style,
          s = t.u,
          o = i._gsap,
          a,
          l,
          u;
        if (s === "all" || s === !0) (r.cssText = ""), (l = 1);
        else
          for (s = s.split(","), u = s.length; --u > -1; )
            (a = s[u]),
              Pi[a] && ((l = 1), (a = a === "transformOrigin" ? Ct : ve)),
              Dn(i, a);
        l &&
          (Dn(i, ve),
          o &&
            (o.svg && i.removeAttribute("transform"),
            Br(i, 1),
            (o.uncache = 1),
            Uu(r)));
      }
    },
    Vs = {
      clearProps: function (e, t, i, r, s) {
        if (s.data !== "isFromStart") {
          var o = (e._pt = new Dt(e._pt, t, i, 0, 0, uf));
          return (o.u = r), (o.pr = -10), (o.tween = s), e._props.push(i), 1;
        }
      },
    },
    Vr = [1, 0, 0, 1, 0, 0],
    Ju = {},
    eh = function (e) {
      return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
    },
    th = function (e) {
      var t = ci(e, ve);
      return eh(t) ? Vr : t.substr(7).match(Kl).map(Ee);
    },
    _a = function (e, t) {
      var i = e._gsap || dn(e),
        r = e.style,
        s = th(e),
        o,
        a,
        l,
        u;
      return i.svg && e.getAttribute("transform")
        ? ((l = e.transform.baseVal.consolidate().matrix),
          (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
          s.join(",") === "1,0,0,1,0,0" ? Vr : s)
        : (s === Vr &&
            !e.offsetParent &&
            e !== Zn &&
            !i.svg &&
            ((l = r.display),
            (r.display = "block"),
            (o = e.parentNode),
            (!o || !e.offsetParent) &&
              ((u = 1), (a = e.nextElementSibling), Zn.appendChild(e)),
            (s = th(e)),
            l ? (r.display = l) : Dn(e, "display"),
            u &&
              (a
                ? o.insertBefore(e, a)
                : o
                ? o.appendChild(e)
                : Zn.removeChild(e))),
          t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
    },
    va = function (e, t, i, r, s, o) {
      var a = e._gsap,
        l = s || _a(e, !0),
        u = a.xOrigin || 0,
        h = a.yOrigin || 0,
        d = a.xOffset || 0,
        f = a.yOffset || 0,
        c = l[0],
        m = l[1],
        p = l[2],
        _ = l[3],
        D = l[4],
        C = l[5],
        P = t.split(" "),
        v = parseFloat(P[0]) || 0,
        b = parseFloat(P[1]) || 0,
        y,
        w,
        T,
        x;
      i
        ? l !== Vr &&
          (w = c * _ - m * p) &&
          ((T = v * (_ / w) + b * (-p / w) + (p * C - _ * D) / w),
          (x = v * (-m / w) + b * (c / w) - (c * C - m * D) / w),
          (v = T),
          (b = x))
        : ((y = Gu(e)),
          (v = y.x + (~P[0].indexOf("%") ? (v / 100) * y.width : v)),
          (b =
            y.y + (~(P[1] || P[0]).indexOf("%") ? (b / 100) * y.height : b))),
        r || (r !== !1 && a.smooth)
          ? ((D = v - u),
            (C = b - h),
            (a.xOffset = d + (D * c + C * p) - D),
            (a.yOffset = f + (D * m + C * _) - C))
          : (a.xOffset = a.yOffset = 0),
        (a.xOrigin = v),
        (a.yOrigin = b),
        (a.smooth = !!r),
        (a.origin = t),
        (a.originIsAbsolute = !!i),
        (e.style[Ct] = "0px 0px"),
        o &&
          (Ui(o, a, "xOrigin", u, v),
          Ui(o, a, "yOrigin", h, b),
          Ui(o, a, "xOffset", d, a.xOffset),
          Ui(o, a, "yOffset", f, a.yOffset)),
        e.setAttribute("data-svg-origin", v + " " + b);
    },
    Br = function (e, t) {
      var i = e._gsap || new Fu(e);
      if ("x" in i && !t && !i.uncache) return i;
      var r = e.style,
        s = i.scaleX < 0,
        o = "px",
        a = "deg",
        l = getComputedStyle(e),
        u = ci(e, Ct) || "0",
        h,
        d,
        f,
        c,
        m,
        p,
        _,
        D,
        C,
        P,
        v,
        b,
        y,
        w,
        T,
        x,
        S,
        R,
        k,
        I,
        j,
        Y,
        L,
        M,
        H,
        F,
        g,
        J,
        De,
        Pt,
        ie,
        G;
      return (
        (h = d = f = p = _ = D = C = P = v = 0),
        (c = m = 1),
        (i.svg = !!(e.getCTM && Xu(e))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (r[ve] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[ve] !== "none" ? l[ve] : "")),
          (r.scale = r.rotate = r.translate = "none")),
        (w = _a(e, i.svg)),
        i.svg &&
          (i.uncache
            ? ((H = e.getBBox()),
              (u = i.xOrigin - H.x + "px " + (i.yOrigin - H.y) + "px"),
              (M = ""))
            : (M = !t && e.getAttribute("data-svg-origin")),
          va(e, M || u, !!M || i.originIsAbsolute, i.smooth !== !1, w)),
        (b = i.xOrigin || 0),
        (y = i.yOrigin || 0),
        w !== Vr &&
          ((R = w[0]),
          (k = w[1]),
          (I = w[2]),
          (j = w[3]),
          (h = Y = w[4]),
          (d = L = w[5]),
          w.length === 6
            ? ((c = Math.sqrt(R * R + k * k)),
              (m = Math.sqrt(j * j + I * I)),
              (p = R || k ? Jn(k, R) * wn : 0),
              (C = I || j ? Jn(I, j) * wn + p : 0),
              C && (m *= Math.abs(Math.cos(C * Qn))),
              i.svg && ((h -= b - (b * R + y * I)), (d -= y - (b * k + y * j))))
            : ((G = w[6]),
              (Pt = w[7]),
              (g = w[8]),
              (J = w[9]),
              (De = w[10]),
              (ie = w[11]),
              (h = w[12]),
              (d = w[13]),
              (f = w[14]),
              (T = Jn(G, De)),
              (_ = T * wn),
              T &&
                ((x = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = Y * x + g * S),
                (H = L * x + J * S),
                (F = G * x + De * S),
                (g = Y * -S + g * x),
                (J = L * -S + J * x),
                (De = G * -S + De * x),
                (ie = Pt * -S + ie * x),
                (Y = M),
                (L = H),
                (G = F)),
              (T = Jn(-I, De)),
              (D = T * wn),
              T &&
                ((x = Math.cos(-T)),
                (S = Math.sin(-T)),
                (M = R * x - g * S),
                (H = k * x - J * S),
                (F = I * x - De * S),
                (ie = j * S + ie * x),
                (R = M),
                (k = H),
                (I = F)),
              (T = Jn(k, R)),
              (p = T * wn),
              T &&
                ((x = Math.cos(T)),
                (S = Math.sin(T)),
                (M = R * x + k * S),
                (H = Y * x + L * S),
                (k = k * x - R * S),
                (L = L * x - Y * S),
                (R = M),
                (Y = H)),
              _ &&
                Math.abs(_) + Math.abs(p) > 359.9 &&
                ((_ = p = 0), (D = 180 - D)),
              (c = Ee(Math.sqrt(R * R + k * k + I * I))),
              (m = Ee(Math.sqrt(L * L + G * G))),
              (T = Jn(Y, L)),
              (C = Math.abs(T) > 2e-4 ? T * wn : 0),
              (v = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
          i.svg &&
            ((M = e.getAttribute("transform")),
            (i.forceCSS = e.setAttribute("transform", "") || !eh(ci(e, ve))),
            M && e.setAttribute("transform", M))),
        Math.abs(C) > 90 &&
          Math.abs(C) < 270 &&
          (s
            ? ((c *= -1),
              (C += p <= 0 ? 180 : -180),
              (p += p <= 0 ? 180 : -180))
            : ((m *= -1), (C += C <= 0 ? 180 : -180))),
        (t = t || i.uncache),
        (i.x =
          h -
          ((i.xPercent =
            h &&
            ((!t && i.xPercent) ||
              (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
            ? (e.offsetWidth * i.xPercent) / 100
            : 0) +
          o),
        (i.y =
          d -
          ((i.yPercent =
            d &&
            ((!t && i.yPercent) ||
              (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (e.offsetHeight * i.yPercent) / 100
            : 0) +
          o),
        (i.z = f + o),
        (i.scaleX = Ee(c)),
        (i.scaleY = Ee(m)),
        (i.rotation = Ee(p) + a),
        (i.rotationX = Ee(_) + a),
        (i.rotationY = Ee(D) + a),
        (i.skewX = C + a),
        (i.skewY = P + a),
        (i.transformPerspective = v + o),
        (i.zOrigin = parseFloat(u.split(" ")[2]) || (!t && i.zOrigin) || 0) &&
          (r[Ct] = Bs(u)),
        (i.xOffset = i.yOffset = 0),
        (i.force3D = Tt.force3D),
        (i.renderTransform = i.svg ? cf : qu ? ih : hf),
        (i.uncache = 0),
        i
      );
    },
    Bs = function (e) {
      return (e = e.split(" "))[0] + " " + e[1];
    },
    ga = function (e, t, i) {
      var r = Ze(t);
      return Ee(parseFloat(t) + parseFloat(Wi(e, "x", i + "px", r))) + r;
    },
    hf = function (e, t) {
      (t.z = "0px"),
        (t.rotationY = t.rotationX = "0deg"),
        (t.force3D = 0),
        ih(e, t);
    },
    bn = "0deg",
    Nr = "0px",
    Cn = ") ",
    ih = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.z,
        u = i.rotation,
        h = i.rotationY,
        d = i.rotationX,
        f = i.skewX,
        c = i.skewY,
        m = i.scaleX,
        p = i.scaleY,
        _ = i.transformPerspective,
        D = i.force3D,
        C = i.target,
        P = i.zOrigin,
        v = "",
        b = (D === "auto" && e && e !== 1) || D === !0;
      if (P && (d !== bn || h !== bn)) {
        var y = parseFloat(h) * Qn,
          w = Math.sin(y),
          T = Math.cos(y),
          x;
        (y = parseFloat(d) * Qn),
          (x = Math.cos(y)),
          (o = ga(C, o, w * x * -P)),
          (a = ga(C, a, -Math.sin(y) * -P)),
          (l = ga(C, l, T * x * -P + P));
      }
      _ !== Nr && (v += "perspective(" + _ + Cn),
        (r || s) && (v += "translate(" + r + "%, " + s + "%) "),
        (b || o !== Nr || a !== Nr || l !== Nr) &&
          (v +=
            l !== Nr || b
              ? "translate3d(" + o + ", " + a + ", " + l + ") "
              : "translate(" + o + ", " + a + Cn),
        u !== bn && (v += "rotate(" + u + Cn),
        h !== bn && (v += "rotateY(" + h + Cn),
        d !== bn && (v += "rotateX(" + d + Cn),
        (f !== bn || c !== bn) && (v += "skew(" + f + ", " + c + Cn),
        (m !== 1 || p !== 1) && (v += "scale(" + m + ", " + p + Cn),
        (C.style[ve] = v || "translate(0, 0)");
    },
    cf = function (e, t) {
      var i = t || this,
        r = i.xPercent,
        s = i.yPercent,
        o = i.x,
        a = i.y,
        l = i.rotation,
        u = i.skewX,
        h = i.skewY,
        d = i.scaleX,
        f = i.scaleY,
        c = i.target,
        m = i.xOrigin,
        p = i.yOrigin,
        _ = i.xOffset,
        D = i.yOffset,
        C = i.forceCSS,
        P = parseFloat(o),
        v = parseFloat(a),
        b,
        y,
        w,
        T,
        x;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (h = parseFloat(h)),
        h && ((h = parseFloat(h)), (u += h), (l += h)),
        l || u
          ? ((l *= Qn),
            (u *= Qn),
            (b = Math.cos(l) * d),
            (y = Math.sin(l) * d),
            (w = Math.sin(l - u) * -f),
            (T = Math.cos(l - u) * f),
            u &&
              ((h *= Qn),
              (x = Math.tan(u - h)),
              (x = Math.sqrt(1 + x * x)),
              (w *= x),
              (T *= x),
              h &&
                ((x = Math.tan(h)),
                (x = Math.sqrt(1 + x * x)),
                (b *= x),
                (y *= x))),
            (b = Ee(b)),
            (y = Ee(y)),
            (w = Ee(w)),
            (T = Ee(T)))
          : ((b = d), (T = f), (y = w = 0)),
        ((P && !~(o + "").indexOf("px")) || (v && !~(a + "").indexOf("px"))) &&
          ((P = Wi(c, "x", o, "px")), (v = Wi(c, "y", a, "px"))),
        (m || p || _ || D) &&
          ((P = Ee(P + m - (m * b + p * w) + _)),
          (v = Ee(v + p - (m * y + p * T) + D))),
        (r || s) &&
          ((x = c.getBBox()),
          (P = Ee(P + (r / 100) * x.width)),
          (v = Ee(v + (s / 100) * x.height))),
        (x =
          "matrix(" +
          b +
          "," +
          y +
          "," +
          w +
          "," +
          T +
          "," +
          P +
          "," +
          v +
          ")"),
        c.setAttribute("transform", x),
        C && (c.style[ve] = x);
    },
    df = function (e, t, i, r, s) {
      var o = 360,
        a = Be(s),
        l = parseFloat(s) * (a && ~s.indexOf("rad") ? wn : 1),
        u = l - r,
        h = r + u + "deg",
        d,
        f;
      return (
        a &&
          ((d = s.split("_")[1]),
          d === "short" &&
            ((u %= o), u !== u % (o / 2) && (u += u < 0 ? o : -o)),
          d === "cw" && u < 0
            ? (u = ((u + o * $u) % o) - ~~(u / o) * o)
            : d === "ccw" && u > 0 && (u = ((u - o * $u) % o) - ~~(u / o) * o)),
        (e._pt = f = new Dt(e._pt, t, i, r, u, Yp)),
        (f.e = h),
        (f.u = "deg"),
        e._props.push(i),
        f
      );
    },
    nh = function (e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    },
    pf = function (e, t, i) {
      var r = nh({}, i._gsap),
        s = "perspective,force3D,transformOrigin,svgOrigin",
        o = i.style,
        a,
        l,
        u,
        h,
        d,
        f,
        c,
        m;
      r.svg
        ? ((u = i.getAttribute("transform")),
          i.setAttribute("transform", ""),
          (o[ve] = t),
          (a = Br(i, 1)),
          Dn(i, ve),
          i.setAttribute("transform", u))
        : ((u = getComputedStyle(i)[ve]),
          (o[ve] = t),
          (a = Br(i, 1)),
          (o[ve] = u));
      for (l in Pi)
        (u = r[l]),
          (h = a[l]),
          u !== h &&
            s.indexOf(l) < 0 &&
            ((c = Ze(u)),
            (m = Ze(h)),
            (d = c !== m ? Wi(i, l, u, m) : parseFloat(u)),
            (f = parseFloat(h)),
            (e._pt = new Dt(e._pt, a, l, d, f - d, da)),
            (e._pt.u = m || 0),
            e._props.push(l));
      nh(a, r);
    };
  wt("padding,margin,Width,Radius", function (n, e) {
    var t = "Top",
      i = "Right",
      r = "Bottom",
      s = "Left",
      o = (e < 3 ? [t, i, r, s] : [t + s, t + i, r + i, r + s]).map(function (
        a
      ) {
        return e < 2 ? n + a : "border" + a + n;
      });
    Vs[e > 1 ? "border" + n : n] = function (a, l, u, h, d) {
      var f, c;
      if (arguments.length < 4)
        return (
          (f = o.map(function (m) {
            return Si(a, m, u);
          })),
          (c = f.join(" ")),
          c.split(f[0]).length === 5 ? f[0] : c
        );
      (f = (h + "").split(" ")),
        (c = {}),
        o.forEach(function (m, p) {
          return (c[m] = f[p] = f[p] || f[((p - 1) / 2) | 0]);
        }),
        a.init(l, c, d);
    };
  });
  var rh = {
    name: "css",
    register: fa,
    targetTest: function (e) {
      return e.style && e.nodeType;
    },
    init: function (e, t, i, r, s) {
      var o = this._props,
        a = e.style,
        l = i.vars.startAt,
        u,
        h,
        d,
        f,
        c,
        m,
        p,
        _,
        D,
        C,
        P,
        v,
        b,
        y,
        w,
        T;
      ua || fa(),
        (this.styles = this.styles || Wu(e)),
        (T = this.styles.props),
        (this.tween = i);
      for (p in t)
        if (
          p !== "autoRound" &&
          ((h = t[p]), !(kt[p] && ku(p, t, i, r, e, s)))
        ) {
          if (
            ((c = typeof h),
            (m = Vs[p]),
            c === "function" && ((h = h.call(i, r, e, s)), (c = typeof h)),
            c === "string" && ~h.indexOf("random(") && (h = kr(h)),
            m)
          )
            m(this, e, p, h, i) && (w = 1);
          else if (p.substr(0, 2) === "--")
            (u = (getComputedStyle(e).getPropertyValue(p) + "").trim()),
              (h += ""),
              ($i.lastIndex = 0),
              $i.test(u) || ((_ = Ze(u)), (D = Ze(h))),
              D ? _ !== D && (u = Wi(e, p, u, D) + D) : _ && (h += _),
              this.add(a, "setProperty", u, h, r, s, 0, 0, p),
              o.push(p),
              T.push(p, 0, a[p]);
          else if (c !== "undefined") {
            if (
              (l && p in l
                ? ((u =
                    typeof l[p] == "function" ? l[p].call(i, r, e, s) : l[p]),
                  Be(u) && ~u.indexOf("random(") && (u = kr(u)),
                  Ze(u + "") ||
                    u === "auto" ||
                    (u += Tt.units[p] || Ze(Si(e, p)) || ""),
                  (u + "").charAt(1) === "=" && (u = Si(e, p)))
                : (u = Si(e, p)),
              (f = parseFloat(u)),
              (C = c === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
              C && (h = h.substr(2)),
              (d = parseFloat(h)),
              p in hi &&
                (p === "autoAlpha" &&
                  (f === 1 && Si(e, "visibility") === "hidden" && d && (f = 0),
                  T.push("visibility", 0, a.visibility),
                  Ui(
                    this,
                    a,
                    "visibility",
                    f ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                p !== "scale" &&
                  p !== "transform" &&
                  ((p = hi[p]), ~p.indexOf(",") && (p = p.split(",")[0]))),
              (P = p in Pi),
              P)
            ) {
              if (
                (this.styles.save(p),
                v ||
                  ((b = e._gsap),
                  (b.renderTransform && !t.parseTransform) ||
                    Br(e, t.parseTransform),
                  (y = t.smoothOrigin !== !1 && b.smooth),
                  (v = this._pt =
                    new Dt(this._pt, a, ve, 0, 1, b.renderTransform, b, 0, -1)),
                  (v.dep = 1)),
                p === "scale")
              )
                (this._pt = new Dt(
                  this._pt,
                  b,
                  "scaleY",
                  b.scaleY,
                  (C ? qn(b.scaleY, C + d) : d) - b.scaleY || 0,
                  da
                )),
                  (this._pt.u = 0),
                  o.push("scaleY", p),
                  (p += "X");
              else if (p === "transformOrigin") {
                T.push(Ct, 0, a[Ct]),
                  (h = lf(h)),
                  b.svg
                    ? va(e, h, 0, y, 0, this)
                    : ((D = parseFloat(h.split(" ")[2]) || 0),
                      D !== b.zOrigin && Ui(this, b, "zOrigin", b.zOrigin, D),
                      Ui(this, a, p, Bs(u), Bs(h)));
                continue;
              } else if (p === "svgOrigin") {
                va(e, h, 1, y, 0, this);
                continue;
              } else if (p in Ju) {
                df(this, b, p, f, C ? qn(f, C + h) : h);
                continue;
              } else if (p === "smoothOrigin") {
                Ui(this, b, "smooth", b.smooth, h);
                continue;
              } else if (p === "force3D") {
                b[p] = h;
                continue;
              } else if (p === "transform") {
                pf(this, h, e);
                continue;
              }
            } else p in a || (p = er(p) || p);
            if (
              P ||
              ((d || d === 0) && (f || f === 0) && !Kp.test(h) && p in a)
            )
              (_ = (u + "").substr((f + "").length)),
                d || (d = 0),
                (D = Ze(h) || (p in Tt.units ? Tt.units[p] : _)),
                _ !== D && (f = Wi(e, p, u, D)),
                (this._pt = new Dt(
                  this._pt,
                  P ? b : a,
                  p,
                  f,
                  (C ? qn(f, C + d) : d) - f,
                  !P && (D === "px" || p === "zIndex") && t.autoRound !== !1
                    ? Xp
                    : da
                )),
                (this._pt.u = D || 0),
                _ !== D && D !== "%" && ((this._pt.b = u), (this._pt.r = Gp));
            else if (p in a) af.call(this, e, p, u, C ? C + h : h);
            else if (p in e) this.add(e, p, u || e[p], C ? C + h : h, r, s);
            else if (p !== "parseTransform") {
              zo(p, h);
              continue;
            }
            P || (p in a ? T.push(p, 0, a[p]) : T.push(p, 1, u || e[p])),
              o.push(p);
          }
        }
      w && Vu(this);
    },
    render: function (e, t) {
      if (t.tween._time || !ha())
        for (var i = t._pt; i; ) i.r(e, i.d), (i = i._next);
      else t.styles.revert();
    },
    get: Si,
    aliases: hi,
    getSetter: function (e, t, i) {
      var r = hi[t];
      return (
        r && r.indexOf(",") < 0 && (t = r),
        t in Pi && t !== Ct && (e._gsap.x || Si(e, "x"))
          ? i && zu === i
            ? t === "scale"
              ? ef
              : Jp
            : (zu = i || {}) && (t === "scale" ? tf : nf)
          : e.style && !Lo(e.style[t])
          ? Zp
          : ~t.indexOf("-")
          ? Qp
          : ra(e, t)
      );
    },
    core: { _removeProperty: Dn, _getMatrix: _a },
  };
  (bt.utils.checkPrefix = er),
    (bt.core.getStyleSaver = Wu),
    (function (n, e, t, i) {
      var r = wt(n + "," + e + "," + t, function (s) {
        Pi[s] = 1;
      });
      wt(e, function (s) {
        (Tt.units[s] = "deg"), (Ju[s] = 1);
      }),
        (hi[r[13]] = n + "," + e),
        wt(i, function (s) {
          var o = s.split(":");
          hi[o[1]] = r[o[0]];
        });
    })(
      "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
      "rotation,rotationX,rotationY,skewX,skewY",
      "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
    ),
    wt(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (n) {
        Tt.units[n] = "px";
      }
    ),
    bt.registerPlugin(rh);
  var he = bt.registerPlugin(rh) || bt;
  he.core.Tween;
  function ff(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function mf(n, e, t) {
    return e && ff(n.prototype, e), n;
  }
  /*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var qe,
    Ns,
    Mt,
    qi,
    Ki,
    tr,
    sh,
    yn,
    Ir,
    oh,
    Ti,
    Qt,
    ah,
    lh = function () {
      return (
        qe ||
        (typeof window < "u" && (qe = window.gsap) && qe.registerPlugin && qe)
      );
    },
    uh = 1,
    ir = [],
    K = [],
    di = [],
    zr = Date.now,
    wa = function (e, t) {
      return t;
    },
    _f = function () {
      var e = Ir.core,
        t = e.bridge || {},
        i = e._scrollers,
        r = e._proxies;
      i.push.apply(i, K),
        r.push.apply(r, di),
        (K = i),
        (di = r),
        (wa = function (o, a) {
          return t[o](a);
        });
    },
    Yi = function (e, t) {
      return ~di.indexOf(e) && di[di.indexOf(e) + 1][t];
    },
    $r = function (e) {
      return !!~oh.indexOf(e);
    },
    ot = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: r !== !1, capture: !!s });
    },
    at = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Is = "scrollLeft",
    zs = "scrollTop",
    Da = function () {
      return (Ti && Ti.isPressed) || K.cache++;
    },
    $s = function (e, t) {
      var i = function r(s) {
        if (s || s === 0) {
          uh && (Mt.history.scrollRestoration = "manual");
          var o = Ti && Ti.isPressed;
          (s = r.v = Math.round(s) || (Ti && Ti.iOS ? 1 : 0)),
            e(s),
            (r.cacheID = K.cache),
            o && wa("ss", s);
        } else
          (t || K.cache !== r.cacheID || wa("ref")) &&
            ((r.cacheID = K.cache), (r.v = e()));
        return r.v + r.offset;
      };
      return (i.offset = 0), e && i;
    },
    lt = {
      s: Is,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: $s(function (n) {
        return arguments.length
          ? Mt.scrollTo(n, Me.sc())
          : Mt.pageXOffset || qi[Is] || Ki[Is] || tr[Is] || 0;
      }),
    },
    Me = {
      s: zs,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: lt,
      sc: $s(function (n) {
        return arguments.length
          ? Mt.scrollTo(lt.sc(), n)
          : Mt.pageYOffset || qi[zs] || Ki[zs] || tr[zs] || 0;
      }),
    },
    yt = function (e, t) {
      return (
        ((t && t._ctx && t._ctx.selector) || qe.utils.toArray)(e)[0] ||
        (typeof e == "string" && qe.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", e)
          : null)
      );
    },
    Gi = function (e, t) {
      var i = t.s,
        r = t.sc;
      $r(e) && (e = qi.scrollingElement || Ki);
      var s = K.indexOf(e),
        o = r === Me.sc ? 1 : 2;
      !~s && (s = K.push(e) - 1), K[s + o] || ot(e, "scroll", Da);
      var a = K[s + o],
        l =
          a ||
          (K[s + o] =
            $s(Yi(e, i), !0) ||
            ($r(e)
              ? r
              : $s(function (u) {
                  return arguments.length ? (e[i] = u) : e[i];
                })));
      return (
        (l.target = e),
        a || (l.smooth = qe.getProperty(e, "scrollBehavior") === "smooth"),
        l
      );
    },
    ba = function (e, t, i) {
      var r = e,
        s = e,
        o = zr(),
        a = o,
        l = t || 50,
        u = Math.max(500, l * 3),
        h = function (m, p) {
          var _ = zr();
          p || _ - o > l
            ? ((s = r), (r = m), (a = o), (o = _))
            : i
            ? (r += m)
            : (r = s + ((m - s) / (_ - a)) * (o - a));
        },
        d = function () {
          (s = r = i ? 0 : r), (a = o = 0);
        },
        f = function (m) {
          var p = a,
            _ = s,
            D = zr();
          return (
            (m || m === 0) && m !== r && h(m),
            o === a || D - a > u
              ? 0
              : ((r + (i ? _ : -_)) / ((i ? D : o) - p)) * 1e3
          );
        };
      return { update: h, reset: d, getVelocity: f };
    },
    jr = function (e, t) {
      return (
        t && !e._gsapAllow && e.preventDefault(),
        e.changedTouches ? e.changedTouches[0] : e
      );
    },
    hh = function (e) {
      var t = Math.max.apply(Math, e),
        i = Math.min.apply(Math, e);
      return Math.abs(t) >= Math.abs(i) ? t : i;
    },
    ch = function () {
      (Ir = qe.core.globals().ScrollTrigger), Ir && Ir.core && _f();
    },
    dh = function (e) {
      return (
        (qe = e || lh()),
        !Ns &&
          qe &&
          typeof document < "u" &&
          document.body &&
          ((Mt = window),
          (qi = document),
          (Ki = qi.documentElement),
          (tr = qi.body),
          (oh = [Mt, qi, Ki, tr]),
          qe.utils.clamp,
          (ah = qe.core.context || function () {}),
          (yn = "onpointerenter" in tr ? "pointer" : "mouse"),
          (sh = xe.isTouch =
            Mt.matchMedia &&
            Mt.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in Mt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (Qt = xe.eventTypes =
            (
              "ontouchstart" in Ki
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Ki
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (uh = 0);
          }, 500),
          ch(),
          (Ns = 1)),
        Ns
      );
    };
  (lt.op = Me), (K.cache = 0);
  var xe = (function () {
    function n(t) {
      this.init(t);
    }
    var e = n.prototype;
    return (
      (e.init = function (i) {
        Ns || dh(qe) || console.warn("Please gsap.registerPlugin(Observer)"),
          Ir || ch();
        var r = i.tolerance,
          s = i.dragMinimum,
          o = i.type,
          a = i.target,
          l = i.lineHeight,
          u = i.debounce,
          h = i.preventDefault,
          d = i.onStop,
          f = i.onStopDelay,
          c = i.ignore,
          m = i.wheelSpeed,
          p = i.event,
          _ = i.onDragStart,
          D = i.onDragEnd,
          C = i.onDrag,
          P = i.onPress,
          v = i.onRelease,
          b = i.onRight,
          y = i.onLeft,
          w = i.onUp,
          T = i.onDown,
          x = i.onChangeX,
          S = i.onChangeY,
          R = i.onChange,
          k = i.onToggleX,
          I = i.onToggleY,
          j = i.onHover,
          Y = i.onHoverEnd,
          L = i.onMove,
          M = i.ignoreCheck,
          H = i.isNormalizer,
          F = i.onGestureStart,
          g = i.onGestureEnd,
          J = i.onWheel,
          De = i.onEnable,
          Pt = i.onDisable,
          ie = i.onClick,
          G = i.scrollSpeed,
          je = i.capture,
          oe = i.allowClicks,
          _t = i.lockAxis,
          tt = i.onLockAxis;
        (this.target = a = yt(a) || Ki),
          (this.vars = i),
          c && (c = qe.utils.toArray(c)),
          (r = r || 1e-9),
          (s = s || 0),
          (m = m || 1),
          (G = G || 1),
          (o = o || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(Mt.getComputedStyle(tr).lineHeight) || 22);
        var sn,
          vt,
          ti,
          ne,
          Pe,
          St,
          Nt,
          E = this,
          It = 0,
          Ri = 0,
          on = i.passive || !h,
          Ae = Gi(a, lt),
          an = Gi(a, Me),
          In = Ae(),
          br = an(),
          He =
            ~o.indexOf("touch") &&
            !~o.indexOf("pointer") &&
            Qt[0] === "pointerdown",
          ln = $r(a),
          Se = a.ownerDocument || qi,
          ii = [0, 0, 0],
          Xt = [0, 0, 0],
          Vi = 0,
          ws = function () {
            return (Vi = zr());
          },
          Oe = function (N, ae) {
            return (
              ((E.event = N) && c && ~c.indexOf(N.target)) ||
              (ae && He && N.pointerType !== "touch") ||
              (M && M(N, ae))
            );
          },
          Fo = function () {
            E._vx.reset(), E._vy.reset(), vt.pause(), d && d(E);
          },
          un = function () {
            var N = (E.deltaX = hh(ii)),
              ae = (E.deltaY = hh(Xt)),
              A = Math.abs(N) >= r,
              W = Math.abs(ae) >= r;
            R && (A || W) && R(E, N, ae, ii, Xt),
              A &&
                (b && E.deltaX > 0 && b(E),
                y && E.deltaX < 0 && y(E),
                x && x(E),
                k && E.deltaX < 0 != It < 0 && k(E),
                (It = E.deltaX),
                (ii[0] = ii[1] = ii[2] = 0)),
              W &&
                (T && E.deltaY > 0 && T(E),
                w && E.deltaY < 0 && w(E),
                S && S(E),
                I && E.deltaY < 0 != Ri < 0 && I(E),
                (Ri = E.deltaY),
                (Xt[0] = Xt[1] = Xt[2] = 0)),
              (ne || ti) && (L && L(E), ti && (C(E), (ti = !1)), (ne = !1)),
              St && !(St = !1) && tt && tt(E),
              Pe && (J(E), (Pe = !1)),
              (sn = 0);
          },
          Cr = function (N, ae, A) {
            (ii[A] += N),
              (Xt[A] += ae),
              E._vx.update(N),
              E._vy.update(ae),
              u ? sn || (sn = requestAnimationFrame(un)) : un();
          },
          yr = function (N, ae) {
            _t &&
              !Nt &&
              ((E.axis = Nt = Math.abs(N) > Math.abs(ae) ? "x" : "y"),
              (St = !0)),
              Nt !== "y" && ((ii[2] += N), E._vx.update(N, !0)),
              Nt !== "x" && ((Xt[2] += ae), E._vy.update(ae, !0)),
              u ? sn || (sn = requestAnimationFrame(un)) : un();
          },
          hn = function (N) {
            if (!Oe(N, 1)) {
              N = jr(N, h);
              var ae = N.clientX,
                A = N.clientY,
                W = ae - E.x,
                B = A - E.y,
                z = E.isDragging;
              (E.x = ae),
                (E.y = A),
                (z ||
                  Math.abs(E.startX - ae) >= s ||
                  Math.abs(E.startY - A) >= s) &&
                  (C && (ti = !0),
                  z || (E.isDragging = !0),
                  yr(W, B),
                  z || (_ && _(E)));
            }
          },
          zn = (E.onPress = function (U) {
            Oe(U, 1) ||
              (U && U.button) ||
              ((E.axis = Nt = null),
              vt.pause(),
              (E.isPressed = !0),
              (U = jr(U)),
              (It = Ri = 0),
              (E.startX = E.x = U.clientX),
              (E.startY = E.y = U.clientY),
              E._vx.reset(),
              E._vy.reset(),
              ot(H ? a : Se, Qt[1], hn, on, !0),
              (E.deltaX = E.deltaY = 0),
              P && P(E));
          }),
          X = (E.onRelease = function (U) {
            if (!Oe(U, 1)) {
              at(H ? a : Se, Qt[1], hn, !0);
              var N = !isNaN(E.y - E.startY),
                ae = E.isDragging,
                A =
                  ae &&
                  (Math.abs(E.x - E.startX) > 3 ||
                    Math.abs(E.y - E.startY) > 3),
                W = jr(U);
              !A &&
                N &&
                (E._vx.reset(),
                E._vy.reset(),
                h &&
                  oe &&
                  qe.delayedCall(0.08, function () {
                    if (zr() - Vi > 300 && !U.defaultPrevented) {
                      if (U.target.click) U.target.click();
                      else if (Se.createEvent) {
                        var B = Se.createEvent("MouseEvents");
                        B.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          Mt,
                          1,
                          W.screenX,
                          W.screenY,
                          W.clientX,
                          W.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          U.target.dispatchEvent(B);
                      }
                    }
                  })),
                (E.isDragging = E.isGesturing = E.isPressed = !1),
                d && ae && !H && vt.restart(!0),
                D && ae && D(E),
                v && v(E, A);
            }
          }),
          $n = function (N) {
            return (
              N.touches &&
              N.touches.length > 1 &&
              (E.isGesturing = !0) &&
              F(N, E.isDragging)
            );
          },
          ni = function () {
            return (E.isGesturing = !1) || g(E);
          },
          ri = function (N) {
            if (!Oe(N)) {
              var ae = Ae(),
                A = an();
              Cr((ae - In) * G, (A - br) * G, 1),
                (In = ae),
                (br = A),
                d && vt.restart(!0);
            }
          },
          si = function (N) {
            if (!Oe(N)) {
              (N = jr(N, h)), J && (Pe = !0);
              var ae =
                (N.deltaMode === 1
                  ? l
                  : N.deltaMode === 2
                  ? Mt.innerHeight
                  : 1) * m;
              Cr(N.deltaX * ae, N.deltaY * ae, 0), d && !H && vt.restart(!0);
            }
          },
          jn = function (N) {
            if (!Oe(N)) {
              var ae = N.clientX,
                A = N.clientY,
                W = ae - E.x,
                B = A - E.y;
              (E.x = ae),
                (E.y = A),
                (ne = !0),
                d && vt.restart(!0),
                (W || B) && yr(W, B);
            }
          },
          Er = function (N) {
            (E.event = N), j(E);
          },
          Bi = function (N) {
            (E.event = N), Y(E);
          },
          Ds = function (N) {
            return Oe(N) || (jr(N, h) && ie(E));
          };
        (vt = E._dc = qe.delayedCall(f || 0.25, Fo).pause()),
          (E.deltaX = E.deltaY = 0),
          (E._vx = ba(0, 50, !0)),
          (E._vy = ba(0, 50, !0)),
          (E.scrollX = Ae),
          (E.scrollY = an),
          (E.isDragging = E.isGesturing = E.isPressed = !1),
          ah(this),
          (E.enable = function (U) {
            return (
              E.isEnabled ||
                (ot(ln ? Se : a, "scroll", Da),
                o.indexOf("scroll") >= 0 &&
                  ot(ln ? Se : a, "scroll", ri, on, je),
                o.indexOf("wheel") >= 0 && ot(a, "wheel", si, on, je),
                ((o.indexOf("touch") >= 0 && sh) ||
                  o.indexOf("pointer") >= 0) &&
                  (ot(a, Qt[0], zn, on, je),
                  ot(Se, Qt[2], X),
                  ot(Se, Qt[3], X),
                  oe && ot(a, "click", ws, !0, !0),
                  ie && ot(a, "click", Ds),
                  F && ot(Se, "gesturestart", $n),
                  g && ot(Se, "gestureend", ni),
                  j && ot(a, yn + "enter", Er),
                  Y && ot(a, yn + "leave", Bi),
                  L && ot(a, yn + "move", jn)),
                (E.isEnabled = !0),
                U && U.type && zn(U),
                De && De(E)),
              E
            );
          }),
          (E.disable = function () {
            E.isEnabled &&
              (ir.filter(function (U) {
                return U !== E && $r(U.target);
              }).length || at(ln ? Se : a, "scroll", Da),
              E.isPressed &&
                (E._vx.reset(), E._vy.reset(), at(H ? a : Se, Qt[1], hn, !0)),
              at(ln ? Se : a, "scroll", ri, je),
              at(a, "wheel", si, je),
              at(a, Qt[0], zn, je),
              at(Se, Qt[2], X),
              at(Se, Qt[3], X),
              at(a, "click", ws, !0),
              at(a, "click", Ds),
              at(Se, "gesturestart", $n),
              at(Se, "gestureend", ni),
              at(a, yn + "enter", Er),
              at(a, yn + "leave", Bi),
              at(a, yn + "move", jn),
              (E.isEnabled = E.isPressed = E.isDragging = !1),
              Pt && Pt(E));
          }),
          (E.kill = E.revert =
            function () {
              E.disable();
              var U = ir.indexOf(E);
              U >= 0 && ir.splice(U, 1), Ti === E && (Ti = 0);
            }),
          ir.push(E),
          H && $r(a) && (Ti = E),
          E.enable(p);
      }),
      mf(n, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      n
    );
  })();
  (xe.version = "3.12.5"),
    (xe.create = function (n) {
      return new xe(n);
    }),
    (xe.register = dh),
    (xe.getAll = function () {
      return ir.slice();
    }),
    (xe.getById = function (n) {
      return ir.filter(function (e) {
        return e.vars.id === n;
      })[0];
    }),
    lh() && qe.registerPlugin(xe);
  /*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var O,
    nr,
    Q,
    ge,
    Jt,
    pe,
    ph,
    js,
    Hr,
    Ur,
    Wr,
    Hs,
    Qe,
    Us,
    Ca,
    ut,
    fh,
    mh,
    rr,
    _h,
    ya,
    vh,
    ht,
    Ea,
    gh,
    wh,
    Xi,
    xa,
    Pa,
    sr,
    Sa,
    Ws,
    Ta,
    Fa,
    qs = 1,
    Je = Date.now,
    ka = Je(),
    Wt = 0,
    qr = 0,
    Dh = function (e, t, i) {
      var r = Lt(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
      return (i["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e;
    },
    bh = function (e, t) {
      return t && (!Lt(e) || e.substr(0, 6) !== "clamp(")
        ? "clamp(" + e + ")"
        : e;
    },
    vf = function n() {
      return qr && requestAnimationFrame(n);
    },
    Ch = function () {
      return (Us = 1);
    },
    yh = function () {
      return (Us = 0);
    },
    pi = function (e) {
      return e;
    },
    Kr = function (e) {
      return Math.round(e * 1e5) / 1e5 || 0;
    },
    Eh = function () {
      return typeof window < "u";
    },
    xh = function () {
      return O || (Eh() && (O = window.gsap) && O.registerPlugin && O);
    },
    En = function (e) {
      return !!~ph.indexOf(e);
    },
    Ph = function (e) {
      return (
        (e === "Height" ? Sa : Q["inner" + e]) ||
        Jt["client" + e] ||
        pe["client" + e]
      );
    },
    Sh = function (e) {
      return (
        Yi(e, "getBoundingClientRect") ||
        (En(e)
          ? function () {
              return (so.width = Q.innerWidth), (so.height = Sa), so;
            }
          : function () {
              return Fi(e);
            })
      );
    },
    gf = function (e, t, i) {
      var r = i.d,
        s = i.d2,
        o = i.a;
      return (o = Yi(e, "getBoundingClientRect"))
        ? function () {
            return o()[r];
          }
        : function () {
            return (t ? Ph(s) : e["client" + s]) || 0;
          };
    },
    wf = function (e, t) {
      return !t || ~di.indexOf(e)
        ? Sh(e)
        : function () {
            return so;
          };
    },
    fi = function (e, t) {
      var i = t.s,
        r = t.d2,
        s = t.d,
        o = t.a;
      return Math.max(
        0,
        (i = "scroll" + r) && (o = Yi(e, i))
          ? o() - Sh(e)()[s]
          : En(e)
          ? (Jt[i] || pe[i]) - Ph(r)
          : e[i] - e["offset" + r]
      );
    },
    Ks = function (e, t) {
      for (var i = 0; i < rr.length; i += 3)
        (!t || ~t.indexOf(rr[i + 1])) && e(rr[i], rr[i + 1], rr[i + 2]);
    },
    Lt = function (e) {
      return typeof e == "string";
    },
    ct = function (e) {
      return typeof e == "function";
    },
    Yr = function (e) {
      return typeof e == "number";
    },
    xn = function (e) {
      return typeof e == "object";
    },
    Gr = function (e, t, i) {
      return e && e.progress(t ? 0 : 1) && i && e.pause();
    },
    Aa = function (e, t) {
      if (e.enabled) {
        var i = e._ctx
          ? e._ctx.add(function () {
              return t(e);
            })
          : t(e);
        i && i.totalTime && (e.callbackAnimation = i);
      }
    },
    or = Math.abs,
    Th = "left",
    Fh = "top",
    Oa = "right",
    Ma = "bottom",
    Pn = "width",
    Sn = "height",
    Xr = "Right",
    Zr = "Left",
    Qr = "Top",
    Jr = "Bottom",
    ke = "padding",
    qt = "margin",
    ar = "Width",
    La = "Height",
    Le = "px",
    Kt = function (e) {
      return Q.getComputedStyle(e);
    },
    Df = function (e) {
      var t = Kt(e).position;
      e.style.position = t === "absolute" || t === "fixed" ? t : "relative";
    },
    kh = function (e, t) {
      for (var i in t) i in e || (e[i] = t[i]);
      return e;
    },
    Fi = function (e, t) {
      var i =
          t &&
          Kt(e)[Ca] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          O.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        r = e.getBoundingClientRect();
      return i && i.progress(0).kill(), r;
    },
    Ys = function (e, t) {
      var i = t.d2;
      return e["offset" + i] || e["client" + i] || 0;
    },
    Ah = function (e) {
      var t = [],
        i = e.labels,
        r = e.duration(),
        s;
      for (s in i) t.push(i[s] / r);
      return t;
    },
    bf = function (e) {
      return function (t) {
        return O.utils.snap(Ah(e), t);
      };
    },
    Ra = function (e) {
      var t = O.utils.snap(e),
        i =
          Array.isArray(e) &&
          e.slice(0).sort(function (r, s) {
            return r - s;
          });
      return i
        ? function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a;
            if (!s) return t(r);
            if (s > 0) {
              for (r -= o, a = 0; a < i.length; a++) if (i[a] >= r) return i[a];
              return i[a - 1];
            } else for (a = i.length, r += o; a--; ) if (i[a] <= r) return i[a];
            return i[0];
          }
        : function (r, s, o) {
            o === void 0 && (o = 0.001);
            var a = t(r);
            return !s || Math.abs(a - r) < o || a - r < 0 == s < 0
              ? a
              : t(s < 0 ? r - e : r + e);
          };
    },
    Cf = function (e) {
      return function (t, i) {
        return Ra(Ah(e))(t, i.direction);
      };
    },
    Gs = function (e, t, i, r) {
      return i.split(",").forEach(function (s) {
        return e(t, s, r);
      });
    },
    Ie = function (e, t, i, r, s) {
      return e.addEventListener(t, i, { passive: !r, capture: !!s });
    },
    ze = function (e, t, i, r) {
      return e.removeEventListener(t, i, !!r);
    },
    Xs = function (e, t, i) {
      (i = i && i.wheelHandler), i && (e(t, "wheel", i), e(t, "touchmove", i));
    },
    Oh = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    Zs = { toggleActions: "play", anticipatePin: 0 },
    Qs = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Js = function (e, t) {
      if (Lt(e)) {
        var i = e.indexOf("="),
          r = ~i ? +(e.charAt(i - 1) + 1) * parseFloat(e.substr(i + 1)) : 0;
        ~i && (e.indexOf("%") > i && (r *= t / 100), (e = e.substr(0, i - 1))),
          (e =
            r +
            (e in Qs
              ? Qs[e] * t
              : ~e.indexOf("%")
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0));
      }
      return e;
    },
    eo = function (e, t, i, r, s, o, a, l) {
      var u = s.startColor,
        h = s.endColor,
        d = s.fontSize,
        f = s.indent,
        c = s.fontWeight,
        m = ge.createElement("div"),
        p = En(i) || Yi(i, "pinType") === "fixed",
        _ = e.indexOf("scroller") !== -1,
        D = p ? pe : i,
        C = e.indexOf("start") !== -1,
        P = C ? u : h,
        v =
          "border-color:" +
          P +
          ";font-size:" +
          d +
          ";color:" +
          P +
          ";font-weight:" +
          c +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((_ || l) && p ? "fixed;" : "absolute;")),
        (_ || l || !p) &&
          (v += (r === Me ? Oa : Ma) + ":" + (o + parseFloat(f)) + "px;"),
        a &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (m._isStart = C),
        m.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        (m.style.cssText = v),
        (m.innerText = t || t === 0 ? e + "-" + t : e),
        D.children[0] ? D.insertBefore(m, D.children[0]) : D.appendChild(m),
        (m._offset = m["offset" + r.op.d2]),
        to(m, 0, r, C),
        m
      );
    },
    to = function (e, t, i, r) {
      var s = { display: "block" },
        o = i[r ? "os2" : "p2"],
        a = i[r ? "p2" : "os2"];
      (e._isFlipped = r),
        (s[i.a + "Percent"] = r ? -100 : 0),
        (s[i.a] = r ? "1px" : 0),
        (s["border" + o + ar] = 1),
        (s["border" + a + ar] = 0),
        (s[i.p] = t + "px"),
        O.set(e, s);
    },
    q = [],
    Va = {},
    es,
    Mh = function () {
      return Je() - Wt > 34 && (es || (es = requestAnimationFrame(ki)));
    },
    lr = function () {
      (!ht || !ht.isPressed || ht.startX > pe.clientWidth) &&
        (K.cache++,
        ht ? es || (es = requestAnimationFrame(ki)) : ki(),
        Wt || Fn("scrollStart"),
        (Wt = Je()));
    },
    Ba = function () {
      (wh = Q.innerWidth), (gh = Q.innerHeight);
    },
    ts = function () {
      K.cache++,
        !Qe &&
          !vh &&
          !ge.fullscreenElement &&
          !ge.webkitFullscreenElement &&
          (!Ea ||
            wh !== Q.innerWidth ||
            Math.abs(Q.innerHeight - gh) > Q.innerHeight * 0.25) &&
          js.restart(!0);
    },
    Tn = {},
    yf = [],
    Lh = function n() {
      return ze($, "scrollEnd", n) || An(!0);
    },
    Fn = function (e) {
      return (
        (Tn[e] &&
          Tn[e].map(function (t) {
            return t();
          })) ||
        yf
      );
    },
    Rt = [],
    Rh = function (e) {
      for (var t = 0; t < Rt.length; t += 5)
        (!e || (Rt[t + 4] && Rt[t + 4].query === e)) &&
          ((Rt[t].style.cssText = Rt[t + 1]),
          Rt[t].getBBox && Rt[t].setAttribute("transform", Rt[t + 2] || ""),
          (Rt[t + 3].uncache = 1));
    },
    Na = function (e, t) {
      var i;
      for (ut = 0; ut < q.length; ut++)
        (i = q[ut]),
          i && (!t || i._ctx === t) && (e ? i.kill(1) : i.revert(!0, !0));
      (Ws = !0), t && Rh(t), t || Fn("revert");
    },
    Vh = function (e, t) {
      K.cache++,
        (t || !dt) &&
          K.forEach(function (i) {
            return ct(i) && i.cacheID++ && (i.rec = 0);
          }),
        Lt(e) && (Q.history.scrollRestoration = Pa = e);
    },
    dt,
    kn = 0,
    Bh,
    Ef = function () {
      if (Bh !== kn) {
        var e = (Bh = kn);
        requestAnimationFrame(function () {
          return e === kn && An(!0);
        });
      }
    },
    Nh = function () {
      pe.appendChild(sr),
        (Sa = (!ht && sr.offsetHeight) || Q.innerHeight),
        pe.removeChild(sr);
    },
    Ih = function (e) {
      return Hr(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (t) {
        return (t.style.display = e ? "none" : "block");
      });
    },
    An = function (e, t) {
      if (Wt && !e && !Ws) {
        Ie($, "scrollEnd", Lh);
        return;
      }
      Nh(),
        (dt = $.isRefreshing = !0),
        K.forEach(function (r) {
          return ct(r) && ++r.cacheID && (r.rec = r());
        });
      var i = Fn("refreshInit");
      _h && $.sort(),
        t || Na(),
        K.forEach(function (r) {
          ct(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
        }),
        q.slice(0).forEach(function (r) {
          return r.refresh();
        }),
        (Ws = !1),
        q.forEach(function (r) {
          if (r._subPinOffset && r.pin) {
            var s = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = r.pin[s];
            r.revert(!0, 1), r.adjustPinSpacing(r.pin[s] - o), r.refresh();
          }
        }),
        (Ta = 1),
        Ih(!0),
        q.forEach(function (r) {
          var s = fi(r.scroller, r._dir),
            o = r.vars.end === "max" || (r._endClamp && r.end > s),
            a = r._startClamp && r.start >= s;
          (o || a) &&
            r.setPositions(
              a ? s - 1 : r.start,
              o ? Math.max(a ? s : r.start + 1, s) : r.end,
              !0
            );
        }),
        Ih(!1),
        (Ta = 0),
        i.forEach(function (r) {
          return r && r.render && r.render(-1);
        }),
        K.forEach(function (r) {
          ct(r) &&
            (r.smooth &&
              requestAnimationFrame(function () {
                return (r.target.style.scrollBehavior = "smooth");
              }),
            r.rec && r(r.rec));
        }),
        Vh(Pa, 1),
        js.pause(),
        kn++,
        (dt = 2),
        ki(2),
        q.forEach(function (r) {
          return ct(r.vars.onRefresh) && r.vars.onRefresh(r);
        }),
        (dt = $.isRefreshing = !1),
        Fn("refresh");
    },
    Ia = 0,
    io = 1,
    is,
    ki = function (e) {
      if (e === 2 || (!dt && !Ws)) {
        ($.isUpdating = !0), is && is.update(0);
        var t = q.length,
          i = Je(),
          r = i - ka >= 50,
          s = t && q[0].scroll();
        if (
          ((io = Ia > s ? -1 : 1),
          dt || (Ia = s),
          r &&
            (Wt && !Us && i - Wt > 200 && ((Wt = 0), Fn("scrollEnd")),
            (Wr = ka),
            (ka = i)),
          io < 0)
        ) {
          for (ut = t; ut-- > 0; ) q[ut] && q[ut].update(0, r);
          io = 1;
        } else for (ut = 0; ut < t; ut++) q[ut] && q[ut].update(0, r);
        $.isUpdating = !1;
      }
      es = 0;
    },
    za = [
      Th,
      Fh,
      Ma,
      Oa,
      qt + Jr,
      qt + Xr,
      qt + Qr,
      qt + Zr,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    no = za.concat([
      Pn,
      Sn,
      "boxSizing",
      "max" + ar,
      "max" + La,
      "position",
      qt,
      ke,
      ke + Qr,
      ke + Xr,
      ke + Jr,
      ke + Zr,
    ]),
    xf = function (e, t, i) {
      ur(i);
      var r = e._gsap;
      if (r.spacerIsNative) ur(r.spacerState);
      else if (e._gsap.swappedIn) {
        var s = t.parentNode;
        s && (s.insertBefore(e, t), s.removeChild(t));
      }
      e._gsap.swappedIn = !1;
    },
    $a = function (e, t, i, r) {
      if (!e._gsap.swappedIn) {
        for (var s = za.length, o = t.style, a = e.style, l; s--; )
          (l = za[s]), (o[l] = i[l]);
        (o.position = i.position === "absolute" ? "absolute" : "relative"),
          i.display === "inline" && (o.display = "inline-block"),
          (a[Ma] = a[Oa] = "auto"),
          (o.flexBasis = i.flexBasis || "auto"),
          (o.overflow = "visible"),
          (o.boxSizing = "border-box"),
          (o[Pn] = Ys(e, lt) + Le),
          (o[Sn] = Ys(e, Me) + Le),
          (o[ke] = a[qt] = a[Fh] = a[Th] = "0"),
          ur(r),
          (a[Pn] = a["max" + ar] = i[Pn]),
          (a[Sn] = a["max" + La] = i[Sn]),
          (a[ke] = i[ke]),
          e.parentNode !== t &&
            (e.parentNode.insertBefore(t, e), t.appendChild(e)),
          (e._gsap.swappedIn = !0);
      }
    },
    Pf = /([A-Z])/g,
    ur = function (e) {
      if (e) {
        var t = e.t.style,
          i = e.length,
          r = 0,
          s,
          o;
        for ((e.t._gsap || O.core.getCache(e.t)).uncache = 1; r < i; r += 2)
          (o = e[r + 1]),
            (s = e[r]),
            o
              ? (t[s] = o)
              : t[s] && t.removeProperty(s.replace(Pf, "-$1").toLowerCase());
      }
    },
    ro = function (e) {
      for (var t = no.length, i = e.style, r = [], s = 0; s < t; s++)
        r.push(no[s], i[no[s]]);
      return (r.t = e), r;
    },
    Sf = function (e, t, i) {
      for (var r = [], s = e.length, o = i ? 8 : 0, a; o < s; o += 2)
        (a = e[o]), r.push(a, a in t ? t[a] : e[o + 1]);
      return (r.t = e.t), r;
    },
    so = { left: 0, top: 0 },
    zh = function (e, t, i, r, s, o, a, l, u, h, d, f, c, m) {
      ct(e) && (e = e(l)),
        Lt(e) &&
          e.substr(0, 3) === "max" &&
          (e = f + (e.charAt(4) === "=" ? Js("0" + e.substr(3), i) : 0));
      var p = c ? c.time() : 0,
        _,
        D,
        C;
      if ((c && c.seek(0), isNaN(e) || (e = +e), Yr(e)))
        c &&
          (e = O.utils.mapRange(
            c.scrollTrigger.start,
            c.scrollTrigger.end,
            0,
            f,
            e
          )),
          a && to(a, i, r, !0);
      else {
        ct(t) && (t = t(l));
        var P = (e || "0").split(" "),
          v,
          b,
          y,
          w;
        (C = yt(t, l) || pe),
          (v = Fi(C) || {}),
          (!v || (!v.left && !v.top)) &&
            Kt(C).display === "none" &&
            ((w = C.style.display),
            (C.style.display = "block"),
            (v = Fi(C)),
            w ? (C.style.display = w) : C.style.removeProperty("display")),
          (b = Js(P[0], v[r.d])),
          (y = Js(P[1] || "0", i)),
          (e = v[r.p] - u[r.p] - h + b + s - y),
          a && to(a, y, r, i - y < 20 || (a._isStart && y > 20)),
          (i -= i - y);
      }
      if ((m && ((l[m] = e || -0.001), e < 0 && (e = 0)), o)) {
        var T = e + i,
          x = o._isStart;
        (_ = "scroll" + r.d2),
          to(
            o,
            T,
            r,
            (x && T > 20) ||
              (!x && (d ? Math.max(pe[_], Jt[_]) : o.parentNode[_]) <= T + 1)
          ),
          d &&
            ((u = Fi(a)),
            d && (o.style[r.op.p] = u[r.op.p] - r.op.m - o._offset + Le));
      }
      return (
        c &&
          C &&
          ((_ = Fi(C)),
          c.seek(f),
          (D = Fi(C)),
          (c._caScrollDist = _[r.p] - D[r.p]),
          (e = (e / c._caScrollDist) * f)),
        c && c.seek(p),
        c ? e : Math.round(e)
      );
    },
    Tf = /(webkit|moz|length|cssText|inset)/i,
    $h = function (e, t, i, r) {
      if (e.parentNode !== t) {
        var s = e.style,
          o,
          a;
        if (t === pe) {
          (e._stOrig = s.cssText), (a = Kt(e));
          for (o in a)
            !+o &&
              !Tf.test(o) &&
              a[o] &&
              typeof s[o] == "string" &&
              o !== "0" &&
              (s[o] = a[o]);
          (s.top = i), (s.left = r);
        } else s.cssText = e._stOrig;
        (O.core.getCache(e).uncache = 1), t.appendChild(e);
      }
    },
    jh = function (e, t, i) {
      var r = t,
        s = r;
      return function (o) {
        var a = Math.round(e());
        return (
          a !== r &&
            a !== s &&
            Math.abs(a - r) > 3 &&
            Math.abs(a - s) > 3 &&
            ((o = a), i && i()),
          (s = r),
          (r = o),
          o
        );
      };
    },
    oo = function (e, t, i) {
      var r = {};
      (r[t.p] = "+=" + i), O.set(e, r);
    },
    Hh = function (e, t) {
      var i = Gi(e, t),
        r = "_scroll" + t.p2,
        s = function o(a, l, u, h, d) {
          var f = o.tween,
            c = l.onComplete,
            m = {};
          u = u || i();
          var p = jh(i, u, function () {
            f.kill(), (o.tween = 0);
          });
          return (
            (d = (h && d) || 0),
            (h = h || a - u),
            f && f.kill(),
            (l[r] = a),
            (l.inherit = !1),
            (l.modifiers = m),
            (m[r] = function () {
              return p(u + h * f.ratio + d * f.ratio * f.ratio);
            }),
            (l.onUpdate = function () {
              K.cache++, o.tween && ki();
            }),
            (l.onComplete = function () {
              (o.tween = 0), c && c.call(f);
            }),
            (f = o.tween = O.to(e, l)),
            f
          );
        };
      return (
        (e[r] = i),
        (i.wheelHandler = function () {
          return s.tween && s.tween.kill() && (s.tween = 0);
        }),
        Ie(e, "wheel", i.wheelHandler),
        $.isTouch && Ie(e, "touchmove", i.wheelHandler),
        s
      );
    },
    $ = (function () {
      function n(t, i) {
        nr ||
          n.register(O) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          xa(this),
          this.init(t, i);
      }
      var e = n.prototype;
      return (
        (e.init = function (i, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !qr)
          ) {
            this.update = this.refresh = this.kill = pi;
            return;
          }
          i = kh(Lt(i) || Yr(i) || i.nodeType ? { trigger: i } : i, Zs);
          var s = i,
            o = s.onUpdate,
            a = s.toggleClass,
            l = s.id,
            u = s.onToggle,
            h = s.onRefresh,
            d = s.scrub,
            f = s.trigger,
            c = s.pin,
            m = s.pinSpacing,
            p = s.invalidateOnRefresh,
            _ = s.anticipatePin,
            D = s.onScrubComplete,
            C = s.onSnapComplete,
            P = s.once,
            v = s.snap,
            b = s.pinReparent,
            y = s.pinSpacer,
            w = s.containerAnimation,
            T = s.fastScrollEnd,
            x = s.preventOverlaps,
            S =
              i.horizontal || (i.containerAnimation && i.horizontal !== !1)
                ? lt
                : Me,
            R = !d && d !== 0,
            k = yt(i.scroller || Q),
            I = O.core.getCache(k),
            j = En(k),
            Y =
              ("pinType" in i
                ? i.pinType
                : Yi(k, "pinType") || (j && "fixed")) === "fixed",
            L = [i.onEnter, i.onLeave, i.onEnterBack, i.onLeaveBack],
            M = R && i.toggleActions.split(" "),
            H = "markers" in i ? i.markers : Zs.markers,
            F = j ? 0 : parseFloat(Kt(k)["border" + S.p2 + ar]) || 0,
            g = this,
            J =
              i.onRefreshInit &&
              function () {
                return i.onRefreshInit(g);
              },
            De = gf(k, j, S),
            Pt = wf(k, j),
            ie = 0,
            G = 0,
            je = 0,
            oe = Gi(k, S),
            _t,
            tt,
            sn,
            vt,
            ti,
            ne,
            Pe,
            St,
            Nt,
            E,
            It,
            Ri,
            on,
            Ae,
            an,
            In,
            br,
            He,
            ln,
            Se,
            ii,
            Xt,
            Vi,
            ws,
            Oe,
            Fo,
            un,
            Cr,
            yr,
            hn,
            zn,
            X,
            $n,
            ni,
            ri,
            si,
            jn,
            Er,
            Bi;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = S),
            (_ *= 45),
            (g.scroller = k),
            (g.scroll = w ? w.time.bind(w) : oe),
            (vt = oe()),
            (g.vars = i),
            (r = r || i.animation),
            "refreshPriority" in i &&
              ((_h = 1), i.refreshPriority === -9999 && (is = g)),
            (I.tweenScroll = I.tweenScroll || {
              top: Hh(k, Me),
              left: Hh(k, lt),
            }),
            (g.tweenTo = _t = I.tweenScroll[S.p]),
            (g.scrubDuration = function (A) {
              ($n = Yr(A) && A),
                $n
                  ? X
                    ? X.duration(A)
                    : (X = O.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: $n,
                        paused: !0,
                        onComplete: function () {
                          return D && D(g);
                        },
                      }))
                  : (X && X.progress(1).kill(), (X = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !g.isReverted) ||
                (r.vars.immediateRender !== !1 &&
                  i.immediateRender !== !1 &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (g.animation = r.pause()),
              (r.scrollTrigger = g),
              g.scrubDuration(d),
              (hn = 0),
              l || (l = r.vars.id)),
            v &&
              ((!xn(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in pe.style &&
                O.set(j ? [pe, Jt] : k, { scrollBehavior: "auto" }),
              K.forEach(function (A) {
                return (
                  ct(A) &&
                  A.target === (j ? ge.scrollingElement || Jt : k) &&
                  (A.smooth = !1)
                );
              }),
              (sn = ct(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? bf(r)
                : v.snapTo === "labelsDirectional"
                ? Cf(r)
                : v.directional !== !1
                ? function (A, W) {
                    return Ra(v.snapTo)(A, Je() - G < 500 ? 0 : W.direction);
                  }
                : O.utils.snap(v.snapTo)),
              (ni = v.duration || { min: 0.1, max: 2 }),
              (ni = xn(ni) ? Ur(ni.min, ni.max) : Ur(ni, ni)),
              (ri = O.delayedCall(v.delay || $n / 2 || 0.1, function () {
                var A = oe(),
                  W = Je() - G < 500,
                  B = _t.tween;
                if (
                  (W || Math.abs(g.getVelocity()) < 10) &&
                  !B &&
                  !Us &&
                  ie !== A
                ) {
                  var z = (A - ne) / Ae,
                    Ue = r && !R ? r.totalProgress() : z,
                    ee = W ? 0 : ((Ue - zn) / (Je() - Wr)) * 1e3 || 0,
                    Te = O.utils.clamp(-z, 1 - z, (or(ee / 2) * ee) / 0.185),
                    it = z + (v.inertia === !1 ? 0 : Te),
                    ye,
                    me,
                    ce = v,
                    oi = ce.onStart,
                    be = ce.onInterrupt,
                    zt = ce.onComplete;
                  if (
                    ((ye = sn(it, g)),
                    Yr(ye) || (ye = it),
                    (me = Math.round(ne + ye * Ae)),
                    A <= Pe && A >= ne && me !== A)
                  ) {
                    if (B && !B._initted && B.data <= or(me - A)) return;
                    v.inertia === !1 && (Te = ye - z),
                      _t(
                        me,
                        {
                          duration: ni(
                            or(
                              (Math.max(or(it - Ue), or(ye - Ue)) * 0.185) /
                                ee /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: or(me - A),
                          onInterrupt: function () {
                            return ri.restart(!0) && be && be(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (ie = oe()),
                              r &&
                                (X
                                  ? X.resetTo(
                                      "totalProgress",
                                      ye,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(ye)),
                              (hn = zn =
                                r && !R ? r.totalProgress() : g.progress),
                              C && C(g),
                              zt && zt(g);
                          },
                        },
                        A,
                        Te * Ae,
                        me - A - Te * Ae
                      ),
                      oi && oi(g, _t.tween);
                  }
                } else g.isActive && ie !== A && ri.restart(!0);
              }).pause())),
            l && (Va[l] = g),
            (f = g.trigger = yt(f || (c !== !0 && c))),
            (Bi = f && f._gsap && f._gsap.stRevert),
            Bi && (Bi = Bi(g)),
            (c = c === !0 ? f : yt(c)),
            Lt(a) && (a = { targets: f, className: a }),
            c &&
              (m === !1 ||
                m === qt ||
                (m =
                  !m &&
                  c.parentNode &&
                  c.parentNode.style &&
                  Kt(c.parentNode).display === "flex"
                    ? !1
                    : ke),
              (g.pin = c),
              (tt = O.core.getCache(c)),
              tt.spacer
                ? (an = tt.pinState)
                : (y &&
                    ((y = yt(y)),
                    y && !y.nodeType && (y = y.current || y.nativeElement),
                    (tt.spacerIsNative = !!y),
                    y && (tt.spacerState = ro(y))),
                  (tt.spacer = He = y || ge.createElement("div")),
                  He.classList.add("pin-spacer"),
                  l && He.classList.add("pin-spacer-" + l),
                  (tt.pinState = an = ro(c))),
              i.force3D !== !1 && O.set(c, { force3D: !0 }),
              (g.spacer = He = tt.spacer),
              (yr = Kt(c)),
              (ws = yr[m + S.os2]),
              (Se = O.getProperty(c)),
              (ii = O.quickSetter(c, S.a, Le)),
              $a(c, He, yr),
              (br = ro(c))),
            H)
          ) {
            (Ri = xn(H) ? kh(H, Oh) : Oh),
              (E = eo("scroller-start", l, k, S, Ri, 0)),
              (It = eo("scroller-end", l, k, S, Ri, 0, E)),
              (ln = E["offset" + S.op.d2]);
            var Ds = yt(Yi(k, "content") || k);
            (St = this.markerStart = eo("start", l, Ds, S, Ri, ln, 0, w)),
              (Nt = this.markerEnd = eo("end", l, Ds, S, Ri, ln, 0, w)),
              w && (Er = O.quickSetter([St, Nt], S.a, Le)),
              !Y &&
                !(di.length && Yi(k, "fixedMarkers") === !0) &&
                (Df(j ? pe : k),
                O.set([E, It], { force3D: !0 }),
                (Fo = O.quickSetter(E, S.a, Le)),
                (Cr = O.quickSetter(It, S.a, Le)));
          }
          if (w) {
            var U = w.vars.onUpdate,
              N = w.vars.onUpdateParams;
            w.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), U && U.apply(w, N || []);
            });
          }
          if (
            ((g.previous = function () {
              return q[q.indexOf(g) - 1];
            }),
            (g.next = function () {
              return q[q.indexOf(g) + 1];
            }),
            (g.revert = function (A, W) {
              if (!W) return g.kill(!0);
              var B = A !== !1 || !g.enabled,
                z = Qe;
              B !== g.isReverted &&
                (B &&
                  ((si = Math.max(oe(), g.scroll.rec || 0)),
                  (je = g.progress),
                  (jn = r && r.progress())),
                St &&
                  [St, Nt, E, It].forEach(function (Ue) {
                    return (Ue.style.display = B ? "none" : "block");
                  }),
                B && ((Qe = g), g.update(B)),
                c &&
                  (!b || !g.isActive) &&
                  (B ? xf(c, He, an) : $a(c, He, Kt(c), Oe)),
                B || g.update(B),
                (Qe = z),
                (g.isReverted = B));
            }),
            (g.refresh = function (A, W, B, z) {
              if (!((Qe || !g.enabled) && !W)) {
                if (c && A && Wt) {
                  Ie(n, "scrollEnd", Lh);
                  return;
                }
                !dt && J && J(g),
                  (Qe = g),
                  _t.tween && !B && (_t.tween.kill(), (_t.tween = 0)),
                  X && X.pause(),
                  p && r && r.revert({ kill: !1 }).invalidate(),
                  g.isReverted || g.revert(!0, !0),
                  (g._subPinOffset = !1);
                var Ue = De(),
                  ee = Pt(),
                  Te = w ? w.duration() : fi(k, S),
                  it = Ae <= 0.01,
                  ye = 0,
                  me = z || 0,
                  ce = xn(B) ? B.end : i.end,
                  oi = i.endTrigger || f,
                  be = xn(B)
                    ? B.start
                    : i.start ||
                      (i.start === 0 || !f ? 0 : c ? "0 0" : "0 100%"),
                  zt = (g.pinnedContainer =
                    i.pinnedContainer && yt(i.pinnedContainer, g)),
                  Ci = (f && Math.max(0, q.indexOf(g))) || 0,
                  Ke = Ci,
                  Ye,
                  nt,
                  Hn,
                  ko,
                  rt,
                  Ve,
                  yi,
                  Ul,
                  Qd,
                  bs,
                  Ei,
                  Cs,
                  Ao;
                for (
                  H &&
                  xn(B) &&
                  ((Cs = O.getProperty(E, S.p)), (Ao = O.getProperty(It, S.p)));
                  Ke--;

                )
                  (Ve = q[Ke]),
                    Ve.end || Ve.refresh(0, 1) || (Qe = g),
                    (yi = Ve.pin),
                    yi &&
                      (yi === f || yi === c || yi === zt) &&
                      !Ve.isReverted &&
                      (bs || (bs = []), bs.unshift(Ve), Ve.revert(!0, !0)),
                    Ve !== q[Ke] && (Ci--, Ke--);
                for (
                  ct(be) && (be = be(g)),
                    be = Dh(be, "start", g),
                    ne =
                      zh(
                        be,
                        f,
                        Ue,
                        S,
                        oe(),
                        St,
                        E,
                        g,
                        ee,
                        F,
                        Y,
                        Te,
                        w,
                        g._startClamp && "_startClamp"
                      ) || (c ? -0.001 : 0),
                    ct(ce) && (ce = ce(g)),
                    Lt(ce) &&
                      !ce.indexOf("+=") &&
                      (~ce.indexOf(" ")
                        ? (ce = (Lt(be) ? be.split(" ")[0] : "") + ce)
                        : ((ye = Js(ce.substr(2), Ue)),
                          (ce = Lt(be)
                            ? be
                            : (w
                                ? O.utils.mapRange(
                                    0,
                                    w.duration(),
                                    w.scrollTrigger.start,
                                    w.scrollTrigger.end,
                                    ne
                                  )
                                : ne) + ye),
                          (oi = f))),
                    ce = Dh(ce, "end", g),
                    Pe =
                      Math.max(
                        ne,
                        zh(
                          ce || (oi ? "100% 0" : Te),
                          oi,
                          Ue,
                          S,
                          oe() + ye,
                          Nt,
                          It,
                          g,
                          ee,
                          F,
                          Y,
                          Te,
                          w,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    ye = 0,
                    Ke = Ci;
                  Ke--;

                )
                  (Ve = q[Ke]),
                    (yi = Ve.pin),
                    yi &&
                      Ve.start - Ve._pinPush <= ne &&
                      !w &&
                      Ve.end > 0 &&
                      ((Ye =
                        Ve.end -
                        (g._startClamp ? Math.max(0, Ve.start) : Ve.start)),
                      ((yi === f && Ve.start - Ve._pinPush < ne) ||
                        yi === zt) &&
                        isNaN(be) &&
                        (ye += Ye * (1 - Ve.progress)),
                      yi === c && (me += Ye));
                if (
                  ((ne += ye),
                  (Pe += ye),
                  g._startClamp && (g._startClamp += ye),
                  g._endClamp &&
                    !dt &&
                    ((g._endClamp = Pe || -0.001),
                    (Pe = Math.min(Pe, fi(k, S)))),
                  (Ae = Pe - ne || ((ne -= 0.01) && 0.001)),
                  it &&
                    (je = O.utils.clamp(0, 1, O.utils.normalize(ne, Pe, si))),
                  (g._pinPush = me),
                  St &&
                    ye &&
                    ((Ye = {}),
                    (Ye[S.a] = "+=" + ye),
                    zt && (Ye[S.p] = "-=" + oe()),
                    O.set([St, Nt], Ye)),
                  c && !(Ta && g.end >= fi(k, S)))
                )
                  (Ye = Kt(c)),
                    (ko = S === Me),
                    (Hn = oe()),
                    (Xt = parseFloat(Se(S.a)) + me),
                    !Te &&
                      Pe > 1 &&
                      ((Ei = (j ? ge.scrollingElement || Jt : k).style),
                      (Ei = {
                        style: Ei,
                        value: Ei["overflow" + S.a.toUpperCase()],
                      }),
                      j &&
                        Kt(pe)["overflow" + S.a.toUpperCase()] !== "scroll" &&
                        (Ei.style["overflow" + S.a.toUpperCase()] = "scroll")),
                    $a(c, He, Ye),
                    (br = ro(c)),
                    (nt = Fi(c, !0)),
                    (Ul = Y && Gi(k, ko ? lt : Me)()),
                    m
                      ? ((Oe = [m + S.os2, Ae + me + Le]),
                        (Oe.t = He),
                        (Ke = m === ke ? Ys(c, S) + Ae + me : 0),
                        Ke &&
                          (Oe.push(S.d, Ke + Le),
                          He.style.flexBasis !== "auto" &&
                            (He.style.flexBasis = Ke + Le)),
                        ur(Oe),
                        zt &&
                          q.forEach(function (ys) {
                            ys.pin === zt &&
                              ys.vars.pinSpacing !== !1 &&
                              (ys._subPinOffset = !0);
                          }),
                        Y && oe(si))
                      : ((Ke = Ys(c, S)),
                        Ke &&
                          He.style.flexBasis !== "auto" &&
                          (He.style.flexBasis = Ke + Le)),
                    Y &&
                      ((rt = {
                        top: nt.top + (ko ? Hn - ne : Ul) + Le,
                        left: nt.left + (ko ? Ul : Hn - ne) + Le,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (rt[Pn] = rt["max" + ar] = Math.ceil(nt.width) + Le),
                      (rt[Sn] = rt["max" + La] = Math.ceil(nt.height) + Le),
                      (rt[qt] =
                        rt[qt + Qr] =
                        rt[qt + Xr] =
                        rt[qt + Jr] =
                        rt[qt + Zr] =
                          "0"),
                      (rt[ke] = Ye[ke]),
                      (rt[ke + Qr] = Ye[ke + Qr]),
                      (rt[ke + Xr] = Ye[ke + Xr]),
                      (rt[ke + Jr] = Ye[ke + Jr]),
                      (rt[ke + Zr] = Ye[ke + Zr]),
                      (In = Sf(an, rt, b)),
                      dt && oe(0)),
                    r
                      ? ((Qd = r._initted),
                        ya(1),
                        r.render(r.duration(), !0, !0),
                        (Vi = Se(S.a) - Xt + Ae + me),
                        (un = Math.abs(Ae - Vi) > 1),
                        Y && un && In.splice(In.length - 2, 2),
                        r.render(0, !0, !0),
                        Qd || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        ya(0))
                      : (Vi = Ae),
                    Ei &&
                      (Ei.value
                        ? (Ei.style["overflow" + S.a.toUpperCase()] = Ei.value)
                        : Ei.style.removeProperty("overflow-" + S.a));
                else if (f && oe() && !w)
                  for (nt = f.parentNode; nt && nt !== pe; )
                    nt._pinOffset &&
                      ((ne -= nt._pinOffset), (Pe -= nt._pinOffset)),
                      (nt = nt.parentNode);
                bs &&
                  bs.forEach(function (ys) {
                    return ys.revert(!1, !0);
                  }),
                  (g.start = ne),
                  (g.end = Pe),
                  (vt = ti = dt ? si : oe()),
                  !w && !dt && (vt < si && oe(si), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (G = Je()),
                  ri && ((ie = -1), ri.restart(!0)),
                  (Qe = 0),
                  r &&
                    R &&
                    (r._initted || jn) &&
                    r.progress() !== jn &&
                    r.progress(jn || 0, !0).render(r.time(), !0, !0),
                  (it || je !== g.progress || w || p) &&
                    (r &&
                      !R &&
                      r.totalProgress(
                        w && ne < -0.001 && !je
                          ? O.utils.normalize(ne, Pe, 0)
                          : je,
                        !0
                      ),
                    (g.progress = it || (vt - ne) / Ae === je ? 0 : je)),
                  c && m && (He._pinOffset = Math.round(g.progress * Vi)),
                  X && X.invalidate(),
                  isNaN(Cs) ||
                    ((Cs -= O.getProperty(E, S.p)),
                    (Ao -= O.getProperty(It, S.p)),
                    oo(E, S, Cs),
                    oo(St, S, Cs - (z || 0)),
                    oo(It, S, Ao),
                    oo(Nt, S, Ao - (z || 0))),
                  it && !dt && g.update(),
                  h && !dt && !on && ((on = !0), h(g), (on = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((oe() - ti) / (Je() - Wr)) * 1e3 || 0;
            }),
            (g.endAnimation = function () {
              Gr(g.callbackAnimation),
                r &&
                  (X
                    ? X.progress(1)
                    : r.paused()
                    ? R || Gr(r, g.direction < 0, 1)
                    : Gr(r, r.reversed()));
            }),
            (g.labelToScroll = function (A) {
              return (
                (r &&
                  r.labels &&
                  (ne || g.refresh() || ne) +
                    (r.labels[A] / r.duration()) * Ae) ||
                0
              );
            }),
            (g.getTrailing = function (A) {
              var W = q.indexOf(g),
                B = g.direction > 0 ? q.slice(0, W).reverse() : q.slice(W + 1);
              return (
                Lt(A)
                  ? B.filter(function (z) {
                      return z.vars.preventOverlaps === A;
                    })
                  : B
              ).filter(function (z) {
                return g.direction > 0 ? z.end <= ne : z.start >= Pe;
              });
            }),
            (g.update = function (A, W, B) {
              if (!(w && !B && !A)) {
                var z = dt === !0 ? si : g.scroll(),
                  Ue = A ? 0 : (z - ne) / Ae,
                  ee = Ue < 0 ? 0 : Ue > 1 ? 1 : Ue || 0,
                  Te = g.progress,
                  it,
                  ye,
                  me,
                  ce,
                  oi,
                  be,
                  zt,
                  Ci;
                if (
                  (W &&
                    ((ti = vt),
                    (vt = w ? oe() : z),
                    v && ((zn = hn), (hn = r && !R ? r.totalProgress() : ee))),
                  _ &&
                    c &&
                    !Qe &&
                    !qs &&
                    Wt &&
                    (!ee && ne < z + ((z - ti) / (Je() - Wr)) * _
                      ? (ee = 1e-4)
                      : ee === 1 &&
                        Pe > z + ((z - ti) / (Je() - Wr)) * _ &&
                        (ee = 0.9999)),
                  ee !== Te && g.enabled)
                ) {
                  if (
                    ((it = g.isActive = !!ee && ee < 1),
                    (ye = !!Te && Te < 1),
                    (be = it !== ye),
                    (oi = be || !!ee != !!Te),
                    (g.direction = ee > Te ? 1 : -1),
                    (g.progress = ee),
                    oi &&
                      !Qe &&
                      ((me = ee && !Te ? 0 : ee === 1 ? 1 : Te === 1 ? 2 : 3),
                      R &&
                        ((ce =
                          (!be && M[me + 1] !== "none" && M[me + 1]) || M[me]),
                        (Ci =
                          r &&
                          (ce === "complete" || ce === "reset" || ce in r)))),
                    x &&
                      (be || Ci) &&
                      (Ci || d || !r) &&
                      (ct(x)
                        ? x(g)
                        : g.getTrailing(x).forEach(function (Hn) {
                            return Hn.endAnimation();
                          })),
                    R ||
                      (X && !Qe && !qs
                        ? (X._dp._time - X._start !== X._time &&
                            X.render(X._dp._time - X._start),
                          X.resetTo
                            ? X.resetTo("totalProgress", ee, r._tTime / r._tDur)
                            : ((X.vars.totalProgress = ee),
                              X.invalidate().restart()))
                        : r && r.totalProgress(ee, !!(Qe && (G || A)))),
                    c)
                  ) {
                    if ((A && m && (He.style[m + S.os2] = ws), !Y))
                      ii(Kr(Xt + Vi * ee));
                    else if (oi) {
                      if (
                        ((zt =
                          !A && ee > Te && Pe + 1 > z && z + 1 >= fi(k, S)),
                        b)
                      )
                        if (!A && (it || zt)) {
                          var Ke = Fi(c, !0),
                            Ye = z - ne;
                          $h(
                            c,
                            pe,
                            Ke.top + (S === Me ? Ye : 0) + Le,
                            Ke.left + (S === Me ? 0 : Ye) + Le
                          );
                        } else $h(c, He);
                      ur(it || zt ? In : br),
                        (un && ee < 1 && it) ||
                          ii(Xt + (ee === 1 && !zt ? Vi : 0));
                    }
                  }
                  v && !_t.tween && !Qe && !qs && ri.restart(!0),
                    a &&
                      (be || (P && ee && (ee < 1 || !Fa))) &&
                      Hr(a.targets).forEach(function (Hn) {
                        return Hn.classList[it || P ? "add" : "remove"](
                          a.className
                        );
                      }),
                    o && !R && !A && o(g),
                    oi && !Qe
                      ? (R &&
                          (Ci &&
                            (ce === "complete"
                              ? r.pause().totalProgress(1)
                              : ce === "reset"
                              ? r.restart(!0).pause()
                              : ce === "restart"
                              ? r.restart(!0)
                              : r[ce]()),
                          o && o(g)),
                        (be || !Fa) &&
                          (u && be && Aa(g, u),
                          L[me] && Aa(g, L[me]),
                          P && (ee === 1 ? g.kill(!1, 1) : (L[me] = 0)),
                          be ||
                            ((me = ee === 1 ? 1 : 3), L[me] && Aa(g, L[me]))),
                        T &&
                          !it &&
                          Math.abs(g.getVelocity()) > (Yr(T) ? T : 2500) &&
                          (Gr(g.callbackAnimation),
                          X
                            ? X.progress(1)
                            : Gr(r, ce === "reverse" ? 1 : !ee, 1)))
                      : R && o && !Qe && o(g);
                }
                if (Cr) {
                  var nt = w ? (z / w.duration()) * (w._caScrollDist || 0) : z;
                  Fo(nt + (E._isFlipped ? 1 : 0)), Cr(nt);
                }
                Er && Er((-z / w.duration()) * (w._caScrollDist || 0));
              }
            }),
            (g.enable = function (A, W) {
              g.enabled ||
                ((g.enabled = !0),
                Ie(k, "resize", ts),
                j || Ie(k, "scroll", lr),
                J && Ie(n, "refreshInit", J),
                A !== !1 && ((g.progress = je = 0), (vt = ti = ie = oe())),
                W !== !1 && g.refresh());
            }),
            (g.getTween = function (A) {
              return A && _t ? _t.tween : X;
            }),
            (g.setPositions = function (A, W, B, z) {
              if (w) {
                var Ue = w.scrollTrigger,
                  ee = w.duration(),
                  Te = Ue.end - Ue.start;
                (A = Ue.start + (Te * A) / ee), (W = Ue.start + (Te * W) / ee);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: bh(A, B && !!g._startClamp),
                  end: bh(W, B && !!g._endClamp),
                },
                z
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (A) {
              if (Oe && A) {
                var W = Oe.indexOf(S.d) + 1;
                (Oe[W] = parseFloat(Oe[W]) + A + Le),
                  (Oe[1] = parseFloat(Oe[1]) + A + Le),
                  ur(Oe);
              }
            }),
            (g.disable = function (A, W) {
              if (
                g.enabled &&
                (A !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                W || (X && X.pause()),
                (si = 0),
                tt && (tt.uncache = 1),
                J && ze(n, "refreshInit", J),
                ri &&
                  (ri.pause(), _t.tween && _t.tween.kill() && (_t.tween = 0)),
                !j)
              ) {
                for (var B = q.length; B--; )
                  if (q[B].scroller === k && q[B] !== g) return;
                ze(k, "resize", ts), j || ze(k, "scroll", lr);
              }
            }),
            (g.kill = function (A, W) {
              g.disable(A, W), X && !W && X.kill(), l && delete Va[l];
              var B = q.indexOf(g);
              B >= 0 && q.splice(B, 1),
                B === ut && io > 0 && ut--,
                (B = 0),
                q.forEach(function (z) {
                  return z.scroller === g.scroller && (B = 1);
                }),
                B || dt || (g.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  A && r.revert({ kill: !1 }),
                  W || r.kill()),
                St &&
                  [St, Nt, E, It].forEach(function (z) {
                    return z.parentNode && z.parentNode.removeChild(z);
                  }),
                is === g && (is = 0),
                c &&
                  (tt && (tt.uncache = 1),
                  (B = 0),
                  q.forEach(function (z) {
                    return z.pin === c && B++;
                  }),
                  B || (tt.spacer = 0)),
                i.onKill && i.onKill(g);
            }),
            q.push(g),
            g.enable(!1, !1),
            Bi && Bi(g),
            r && r.add && !Ae)
          ) {
            var ae = g.update;
            (g.update = function () {
              (g.update = ae), ne || Pe || g.refresh();
            }),
              O.delayedCall(0.01, g.update),
              (Ae = 0.01),
              (ne = Pe = 0);
          } else g.refresh();
          c && Ef();
        }),
        (n.register = function (i) {
          return (
            nr ||
              ((O = i || xh()),
              Eh() && window.document && n.enable(),
              (nr = qr)),
            nr
          );
        }),
        (n.defaults = function (i) {
          if (i) for (var r in i) Zs[r] = i[r];
          return Zs;
        }),
        (n.disable = function (i, r) {
          (qr = 0),
            q.forEach(function (o) {
              return o[r ? "kill" : "disable"](i);
            }),
            ze(Q, "wheel", lr),
            ze(ge, "scroll", lr),
            clearInterval(Hs),
            ze(ge, "touchcancel", pi),
            ze(pe, "touchstart", pi),
            Gs(ze, ge, "pointerdown,touchstart,mousedown", Ch),
            Gs(ze, ge, "pointerup,touchend,mouseup", yh),
            js.kill(),
            Ks(ze);
          for (var s = 0; s < K.length; s += 3)
            Xs(ze, K[s], K[s + 1]), Xs(ze, K[s], K[s + 2]);
        }),
        (n.enable = function () {
          if (
            ((Q = window),
            (ge = document),
            (Jt = ge.documentElement),
            (pe = ge.body),
            O &&
              ((Hr = O.utils.toArray),
              (Ur = O.utils.clamp),
              (xa = O.core.context || pi),
              (ya = O.core.suppressOverwrites || pi),
              (Pa = Q.history.scrollRestoration || "auto"),
              (Ia = Q.pageYOffset),
              O.core.globals("ScrollTrigger", n),
              pe))
          ) {
            (qr = 1),
              (sr = document.createElement("div")),
              (sr.style.height = "100vh"),
              (sr.style.position = "absolute"),
              Nh(),
              vf(),
              xe.register(O),
              (n.isTouch = xe.isTouch),
              (Xi =
                xe.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (Ea = xe.isTouch === 1),
              Ie(Q, "wheel", lr),
              (ph = [Q, ge, Jt, pe]),
              O.matchMedia
                ? ((n.matchMedia = function (l) {
                    var u = O.matchMedia(),
                      h;
                    for (h in l) u.add(h, l[h]);
                    return u;
                  }),
                  O.addEventListener("matchMediaInit", function () {
                    return Na();
                  }),
                  O.addEventListener("matchMediaRevert", function () {
                    return Rh();
                  }),
                  O.addEventListener("matchMedia", function () {
                    An(0, 1), Fn("matchMedia");
                  }),
                  O.matchMedia("(orientation: portrait)", function () {
                    return Ba(), Ba;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              Ba(),
              Ie(ge, "scroll", lr);
            var i = pe.style,
              r = i.borderTopStyle,
              s = O.core.Animation.prototype,
              o,
              a;
            for (
              s.revert ||
                Object.defineProperty(s, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                o = Fi(pe),
                Me.m = Math.round(o.top + Me.sc()) || 0,
                lt.m = Math.round(o.left + lt.sc()) || 0,
                r
                  ? (i.borderTopStyle = r)
                  : i.removeProperty("border-top-style"),
                Hs = setInterval(Mh, 250),
                O.delayedCall(0.5, function () {
                  return (qs = 0);
                }),
                Ie(ge, "touchcancel", pi),
                Ie(pe, "touchstart", pi),
                Gs(Ie, ge, "pointerdown,touchstart,mousedown", Ch),
                Gs(Ie, ge, "pointerup,touchend,mouseup", yh),
                Ca = O.utils.checkPrefix("transform"),
                no.push(Ca),
                nr = Je(),
                js = O.delayedCall(0.2, An).pause(),
                rr = [
                  ge,
                  "visibilitychange",
                  function () {
                    var l = Q.innerWidth,
                      u = Q.innerHeight;
                    ge.hidden
                      ? ((fh = l), (mh = u))
                      : (fh !== l || mh !== u) && ts();
                  },
                  ge,
                  "DOMContentLoaded",
                  An,
                  Q,
                  "load",
                  An,
                  Q,
                  "resize",
                  ts,
                ],
                Ks(Ie),
                q.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                a = 0;
              a < K.length;
              a += 3
            )
              Xs(ze, K[a], K[a + 1]), Xs(ze, K[a], K[a + 2]);
          }
        }),
        (n.config = function (i) {
          "limitCallbacks" in i && (Fa = !!i.limitCallbacks);
          var r = i.syncInterval;
          (r && clearInterval(Hs)) || ((Hs = r) && setInterval(Mh, r)),
            "ignoreMobileResize" in i &&
              (Ea = n.isTouch === 1 && i.ignoreMobileResize),
            "autoRefreshEvents" in i &&
              (Ks(ze) || Ks(Ie, i.autoRefreshEvents || "none"),
              (vh = (i.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (n.scrollerProxy = function (i, r) {
          var s = yt(i),
            o = K.indexOf(s),
            a = En(s);
          ~o && K.splice(o, a ? 6 : 2),
            r && (a ? di.unshift(Q, r, pe, r, Jt, r) : di.unshift(s, r));
        }),
        (n.clearMatchMedia = function (i) {
          q.forEach(function (r) {
            return r._ctx && r._ctx.query === i && r._ctx.kill(!0, !0);
          });
        }),
        (n.isInViewport = function (i, r, s) {
          var o = (Lt(i) ? yt(i) : i).getBoundingClientRect(),
            a = o[s ? Pn : Sn] * r || 0;
          return s
            ? o.right - a > 0 && o.left + a < Q.innerWidth
            : o.bottom - a > 0 && o.top + a < Q.innerHeight;
        }),
        (n.positionInViewport = function (i, r, s) {
          Lt(i) && (i = yt(i));
          var o = i.getBoundingClientRect(),
            a = o[s ? Pn : Sn],
            l =
              r == null
                ? a / 2
                : r in Qs
                ? Qs[r] * a
                : ~r.indexOf("%")
                ? (parseFloat(r) * a) / 100
                : parseFloat(r) || 0;
          return s ? (o.left + l) / Q.innerWidth : (o.top + l) / Q.innerHeight;
        }),
        (n.killAll = function (i) {
          if (
            (q.slice(0).forEach(function (s) {
              return s.vars.id !== "ScrollSmoother" && s.kill();
            }),
            i !== !0)
          ) {
            var r = Tn.killAll || [];
            (Tn = {}),
              r.forEach(function (s) {
                return s();
              });
          }
        }),
        n
      );
    })();
  ($.version = "3.12.5"),
    ($.saveStyles = function (n) {
      return n
        ? Hr(n).forEach(function (e) {
            if (e && e.style) {
              var t = Rt.indexOf(e);
              t >= 0 && Rt.splice(t, 5),
                Rt.push(
                  e,
                  e.style.cssText,
                  e.getBBox && e.getAttribute("transform"),
                  O.core.getCache(e),
                  xa()
                );
            }
          })
        : Rt;
    }),
    ($.revert = function (n, e) {
      return Na(!n, e);
    }),
    ($.create = function (n, e) {
      return new $(n, e);
    }),
    ($.refresh = function (n) {
      return n ? ts() : (nr || $.register()) && An(!0);
    }),
    ($.update = function (n) {
      return ++K.cache && ki(n === !0 ? 2 : 0);
    }),
    ($.clearScrollMemory = Vh),
    ($.maxScroll = function (n, e) {
      return fi(n, e ? lt : Me);
    }),
    ($.getScrollFunc = function (n, e) {
      return Gi(yt(n), e ? lt : Me);
    }),
    ($.getById = function (n) {
      return Va[n];
    }),
    ($.getAll = function () {
      return q.filter(function (n) {
        return n.vars.id !== "ScrollSmoother";
      });
    }),
    ($.isScrolling = function () {
      return !!Wt;
    }),
    ($.snapDirectional = Ra),
    ($.addEventListener = function (n, e) {
      var t = Tn[n] || (Tn[n] = []);
      ~t.indexOf(e) || t.push(e);
    }),
    ($.removeEventListener = function (n, e) {
      var t = Tn[n],
        i = t && t.indexOf(e);
      i >= 0 && t.splice(i, 1);
    }),
    ($.batch = function (n, e) {
      var t = [],
        i = {},
        r = e.interval || 0.016,
        s = e.batchMax || 1e9,
        o = function (u, h) {
          var d = [],
            f = [],
            c = O.delayedCall(r, function () {
              h(d, f), (d = []), (f = []);
            }).pause();
          return function (m) {
            d.length || c.restart(!0),
              d.push(m.trigger),
              f.push(m),
              s <= d.length && c.progress(1);
          };
        },
        a;
      for (a in e)
        i[a] =
          a.substr(0, 2) === "on" && ct(e[a]) && a !== "onRefreshInit"
            ? o(a, e[a])
            : e[a];
      return (
        ct(s) &&
          ((s = s()),
          Ie($, "refresh", function () {
            return (s = e.batchMax());
          })),
        Hr(n).forEach(function (l) {
          var u = {};
          for (a in i) u[a] = i[a];
          (u.trigger = l), t.push($.create(u));
        }),
        t
      );
    });
  var Uh = function (e, t, i, r) {
      return (
        t > r ? e(r) : t < 0 && e(0),
        i > r ? (r - t) / (i - t) : i < 0 ? t / (t - i) : 1
      );
    },
    ja = function n(e, t) {
      t === !0
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            t === !0
              ? "auto"
              : t
              ? "pan-" + t + (xe.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === Jt && n(pe, t);
    },
    ao = { auto: 1, scroll: 1 },
    Ff = function (e) {
      var t = e.event,
        i = e.target,
        r = e.axis,
        s = (t.changedTouches ? t.changedTouches[0] : t).target,
        o = s._gsap || O.core.getCache(s),
        a = Je(),
        l;
      if (!o._isScrollT || a - o._isScrollT > 2e3) {
        for (
          ;
          s &&
          s !== pe &&
          ((s.scrollHeight <= s.clientHeight &&
            s.scrollWidth <= s.clientWidth) ||
            !(ao[(l = Kt(s)).overflowY] || ao[l.overflowX]));

        )
          s = s.parentNode;
        (o._isScroll =
          s &&
          s !== i &&
          !En(s) &&
          (ao[(l = Kt(s)).overflowY] || ao[l.overflowX])),
          (o._isScrollT = a);
      }
      (o._isScroll || r === "x") && (t.stopPropagation(), (t._gsapAllow = !0));
    },
    Wh = function (e, t, i, r) {
      return xe.create({
        target: e,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: t,
        onWheel: (r = r && Ff),
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function () {
          return i && Ie(ge, xe.eventTypes[0], Kh, !1, !0);
        },
        onDisable: function () {
          return ze(ge, xe.eventTypes[0], Kh, !0);
        },
      });
    },
    kf = /(input|label|select|textarea)/i,
    qh,
    Kh = function (e) {
      var t = kf.test(e.target.tagName);
      (t || qh) && ((e._gsapAllow = !0), (qh = t));
    },
    Af = function (e) {
      xn(e) || (e = {}),
        (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
        e.type || (e.type = "wheel,touch"),
        (e.debounce = !!e.debounce),
        (e.id = e.id || "normalizer");
      var t = e,
        i = t.normalizeScrollX,
        r = t.momentum,
        s = t.allowNestedScroll,
        o = t.onRelease,
        a,
        l,
        u = yt(e.target) || Jt,
        h = O.core.globals().ScrollSmoother,
        d = h && h.get(),
        f =
          Xi &&
          ((e.content && yt(e.content)) ||
            (d && e.content !== !1 && !d.smooth() && d.content())),
        c = Gi(u, Me),
        m = Gi(u, lt),
        p = 1,
        _ =
          (xe.isTouch && Q.visualViewport
            ? Q.visualViewport.scale * Q.visualViewport.width
            : Q.outerWidth) / Q.innerWidth,
        D = 0,
        C = ct(r)
          ? function () {
              return r(a);
            }
          : function () {
              return r || 2.8;
            },
        P,
        v,
        b = Wh(u, e.type, !0, s),
        y = function () {
          return (v = !1);
        },
        w = pi,
        T = pi,
        x = function () {
          (l = fi(u, Me)),
            (T = Ur(Xi ? 1 : 0, l)),
            i && (w = Ur(0, fi(u, lt))),
            (P = kn);
        },
        S = function () {
          (f._gsap.y = Kr(parseFloat(f._gsap.y) + c.offset) + "px"),
            (f.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(f._gsap.y) +
              ", 0, 1)"),
            (c.offset = c.cacheID = 0);
        },
        R = function () {
          if (v) {
            requestAnimationFrame(y);
            var H = Kr(a.deltaY / 2),
              F = T(c.v - H);
            if (f && F !== c.v + c.offset) {
              c.offset = F - c.v;
              var g = Kr((parseFloat(f && f._gsap.y) || 0) - c.offset);
              (f.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (f._gsap.y = g + "px"),
                (c.cacheID = K.cache),
                ki();
            }
            return !0;
          }
          c.offset && S(), (v = !0);
        },
        k,
        I,
        j,
        Y,
        L = function () {
          x(),
            k.isActive() &&
              k.vars.scrollY > l &&
              (c() > l ? k.progress(1) && c(l) : k.resetTo("scrollY", l));
        };
      return (
        f && O.set(f, { y: "+=0" }),
        (e.ignoreCheck = function (M) {
          return (
            (Xi && M.type === "touchmove" && R()) ||
            (p > 1.05 && M.type !== "touchstart") ||
            a.isGesturing ||
            (M.touches && M.touches.length > 1)
          );
        }),
        (e.onPress = function () {
          v = !1;
          var M = p;
          (p = Kr(((Q.visualViewport && Q.visualViewport.scale) || 1) / _)),
            k.pause(),
            M !== p && ja(u, p > 1.01 ? !0 : i ? !1 : "x"),
            (I = m()),
            (j = c()),
            x(),
            (P = kn);
        }),
        (e.onRelease = e.onGestureStart =
          function (M, H) {
            if ((c.offset && S(), !H)) Y.restart(!0);
            else {
              K.cache++;
              var F = C(),
                g,
                J;
              i &&
                ((g = m()),
                (J = g + (F * 0.05 * -M.velocityX) / 0.227),
                (F *= Uh(m, g, J, fi(u, lt))),
                (k.vars.scrollX = w(J))),
                (g = c()),
                (J = g + (F * 0.05 * -M.velocityY) / 0.227),
                (F *= Uh(c, g, J, fi(u, Me))),
                (k.vars.scrollY = T(J)),
                k.invalidate().duration(F).play(0.01),
                ((Xi && k.vars.scrollY >= l) || g >= l - 1) &&
                  O.to({}, { onUpdate: L, duration: F });
            }
            o && o(M);
          }),
        (e.onWheel = function () {
          k._ts && k.pause(), Je() - D > 1e3 && ((P = 0), (D = Je()));
        }),
        (e.onChange = function (M, H, F, g, J) {
          if (
            (kn !== P && x(),
            H && i && m(w(g[2] === H ? I + (M.startX - M.x) : m() + H - g[1])),
            F)
          ) {
            c.offset && S();
            var De = J[2] === F,
              Pt = De ? j + M.startY - M.y : c() + F - J[1],
              ie = T(Pt);
            De && Pt !== ie && (j += ie - Pt), c(ie);
          }
          (F || H) && ki();
        }),
        (e.onEnable = function () {
          ja(u, i ? !1 : "x"),
            $.addEventListener("refresh", L),
            Ie(Q, "resize", L),
            c.smooth &&
              ((c.target.style.scrollBehavior = "auto"),
              (c.smooth = m.smooth = !1)),
            b.enable();
        }),
        (e.onDisable = function () {
          ja(u, !0),
            ze(Q, "resize", L),
            $.removeEventListener("refresh", L),
            b.kill();
        }),
        (e.lockAxis = e.lockAxis !== !1),
        (a = new xe(e)),
        (a.iOS = Xi),
        Xi && !c() && c(1),
        Xi && O.ticker.add(pi),
        (Y = a._dc),
        (k = O.to(a, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: i ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: jh(c, c(), function () {
              return k.pause();
            }),
          },
          onUpdate: ki,
          onComplete: Y.vars.onComplete,
        })),
        a
      );
    };
  ($.sort = function (n) {
    return q.sort(
      n ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            e.start -
            (t.start + (t.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  }),
    ($.observe = function (n) {
      return new xe(n);
    }),
    ($.normalizeScroll = function (n) {
      if (typeof n > "u") return ht;
      if (n === !0 && ht) return ht.enable();
      if (n === !1) {
        ht && ht.kill(), (ht = n);
        return;
      }
      var e = n instanceof xe ? n : Af(n);
      return (
        ht && ht.target === e.target && ht.kill(), En(e.target) && (ht = e), e
      );
    }),
    ($.core = {
      _getVelocityProp: ba,
      _inputObserver: Wh,
      _scrollers: K,
      _proxies: di,
      bridge: {
        ss: function () {
          Wt || Fn("scrollStart"), (Wt = Je());
        },
        ref: function () {
          return Qe;
        },
      },
    }),
    xh() && O.registerPlugin($);
  /*!
   * strings: 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var Of =
    /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function Yh(n) {
    var e = n.nodeType,
      t = "";
    if (e === 1 || e === 9 || e === 11) {
      if (typeof n.textContent == "string") return n.textContent;
      for (n = n.firstChild; n; n = n.nextSibling) t += Yh(n);
    } else if (e === 3 || e === 4) return n.nodeValue;
    return t;
  }
  /*!
   * SplitText: 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var hr,
    Ha,
    Gh,
    ns,
    Xh,
    lo,
    Mf = /(?:\r|\n|\t\t)/g,
    Lf = /(?:\s\s+)/g,
    Rf = " ",
    Zh = function (e) {
      (hr = document),
        (Ha = window),
        (ns =
          ns ||
          e ||
          Ha.gsap ||
          console.warn("Please gsap.registerPlugin(SplitText)")),
        ns &&
          ((lo = ns.utils.toArray),
          (Xh = ns.core.context || function () {}),
          (Gh = 1));
    },
    Qh = function (e) {
      return Ha.getComputedStyle(e);
    },
    Ua = function (e) {
      return e.position === "absolute" || e.absolute === !0;
    },
    Vf = function (e, t) {
      for (var i = t.length, r; --i > -1; )
        if (((r = t[i]), e.substr(0, r.length) === r)) return r.length;
    },
    Bf = " style='position:relative;display:inline-block;'",
    Jh = function (e, t) {
      e === void 0 && (e = "");
      var i = ~e.indexOf("++"),
        r = 1;
      return (
        i && (e = e.split("++").join("")),
        function () {
          return (
            "<" + t + Bf + (e ? " class='" + e + (i ? r++ : "") + "'>" : ">")
          );
        }
      );
    },
    ec = function n(e, t, i) {
      var r = e.nodeType;
      if (r === 1 || r === 9 || r === 11)
        for (e = e.firstChild; e; e = e.nextSibling) n(e, t, i);
      else (r === 3 || r === 4) && (e.nodeValue = e.nodeValue.split(t).join(i));
    },
    Wa = function (e, t) {
      for (var i = t.length; --i > -1; ) e.push(t[i]);
    },
    tc = function (e, t, i) {
      for (var r; e && e !== t; ) {
        if (((r = e._next || e.nextSibling), r))
          return r.textContent.charAt(0) === i;
        e = e.parentNode || e._parent;
      }
    },
    Nf = function n(e) {
      var t = lo(e.childNodes),
        i = t.length,
        r,
        s;
      for (r = 0; r < i; r++)
        (s = t[r]),
          s._isSplit
            ? n(s)
            : r && s.previousSibling && s.previousSibling.nodeType === 3
            ? ((s.previousSibling.nodeValue +=
                s.nodeType === 3 ? s.nodeValue : s.firstChild.nodeValue),
              e.removeChild(s))
            : s.nodeType !== 3 &&
              (e.insertBefore(s.firstChild, s), e.removeChild(s));
    },
    mi = function (e, t) {
      return parseFloat(t[e]) || 0;
    },
    If = function (e, t, i, r, s, o, a) {
      var l = Qh(e),
        u = mi("paddingLeft", l),
        h = -999,
        d = mi("borderBottomWidth", l) + mi("borderTopWidth", l),
        f = mi("borderLeftWidth", l) + mi("borderRightWidth", l),
        c = mi("paddingTop", l) + mi("paddingBottom", l),
        m = mi("paddingLeft", l) + mi("paddingRight", l),
        p = mi("fontSize", l) * (t.lineThreshold || 0.2),
        _ = l.textAlign,
        D = [],
        C = [],
        P = [],
        v = t.wordDelimiter || " ",
        b = t.tag ? t.tag : t.span ? "span" : "div",
        y = t.type || t.split || "chars,words,lines",
        w = s && ~y.indexOf("lines") ? [] : null,
        T = ~y.indexOf("words"),
        x = ~y.indexOf("chars"),
        S = Ua(t),
        R = t.linesClass,
        k = ~(R || "").indexOf("++"),
        I = [],
        j = l.display === "flex",
        Y = e.style.display,
        L,
        M,
        H,
        F,
        g,
        J,
        De,
        Pt,
        ie,
        G,
        je,
        oe;
      for (
        k && (R = R.split("++").join("")),
          j && (e.style.display = "block"),
          M = e.getElementsByTagName("*"),
          H = M.length,
          g = [],
          L = 0;
        L < H;
        L++
      )
        g[L] = M[L];
      if (w || S)
        for (L = 0; L < H; L++)
          (F = g[L]),
            (J = F.parentNode === e),
            (J || S || (x && !T)) &&
              ((oe = F.offsetTop),
              w &&
                J &&
                Math.abs(oe - h) > p &&
                (F.nodeName !== "BR" || L === 0) &&
                ((De = []), w.push(De), (h = oe)),
              S &&
                ((F._x = F.offsetLeft),
                (F._y = oe),
                (F._w = F.offsetWidth),
                (F._h = F.offsetHeight)),
              w &&
                (((F._isSplit && J) ||
                  (!x && J) ||
                  (T && J) ||
                  (!T &&
                    F.parentNode.parentNode === e &&
                    !F.parentNode._isSplit)) &&
                  (De.push(F), (F._x -= u), tc(F, e, v) && (F._wordEnd = !0)),
                F.nodeName === "BR" &&
                  ((F.nextSibling && F.nextSibling.nodeName === "BR") ||
                    L === 0) &&
                  w.push([])));
      for (L = 0; L < H; L++) {
        if (((F = g[L]), (J = F.parentNode === e), F.nodeName === "BR")) {
          w || S
            ? (F.parentNode && F.parentNode.removeChild(F),
              g.splice(L--, 1),
              H--)
            : T || e.appendChild(F);
          continue;
        }
        if (
          (S &&
            ((ie = F.style),
            !T && !J && ((F._x += F.parentNode._x), (F._y += F.parentNode._y)),
            (ie.left = F._x + "px"),
            (ie.top = F._y + "px"),
            (ie.position = "absolute"),
            (ie.display = "block"),
            (ie.width = F._w + 1 + "px"),
            (ie.height = F._h + "px")),
          !T && x)
        )
          if (F._isSplit)
            for (
              F._next = M = F.nextSibling, F.parentNode.appendChild(F);
              M && M.nodeType === 3 && M.textContent === " ";

            )
              (F._next = M.nextSibling),
                F.parentNode.appendChild(M),
                (M = M.nextSibling);
          else
            F.parentNode._isSplit
              ? ((F._parent = F.parentNode),
                !F.previousSibling &&
                  F.firstChild &&
                  (F.firstChild._isFirst = !0),
                F.nextSibling &&
                  F.nextSibling.textContent === " " &&
                  !F.nextSibling.nextSibling &&
                  I.push(F.nextSibling),
                (F._next =
                  F.nextSibling && F.nextSibling._isFirst
                    ? null
                    : F.nextSibling),
                F.parentNode.removeChild(F),
                g.splice(L--, 1),
                H--)
              : J ||
                ((oe = !F.nextSibling && tc(F.parentNode, e, v)),
                F.parentNode._parent && F.parentNode._parent.appendChild(F),
                oe && F.parentNode.appendChild(hr.createTextNode(" ")),
                b === "span" && (F.style.display = "inline"),
                D.push(F));
        else
          F.parentNode._isSplit && !F._isSplit && F.innerHTML !== ""
            ? C.push(F)
            : x &&
              !F._isSplit &&
              (b === "span" && (F.style.display = "inline"), D.push(F));
      }
      for (L = I.length; --L > -1; ) I[L].parentNode.removeChild(I[L]);
      if (w) {
        for (
          S &&
            ((G = hr.createElement(b)),
            e.appendChild(G),
            (je = G.offsetWidth + "px"),
            (oe = G.offsetParent === e ? 0 : e.offsetLeft),
            e.removeChild(G)),
            ie = e.style.cssText,
            e.style.cssText = "display:none;";
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (Pt = v === " " && (!S || (!T && !x)), L = 0; L < w.length; L++) {
          for (
            De = w[L],
              G = hr.createElement(b),
              G.style.cssText =
                "display:block;text-align:" +
                _ +
                ";position:" +
                (S ? "absolute;" : "relative;"),
              R && (G.className = R + (k ? L + 1 : "")),
              P.push(G),
              H = De.length,
              M = 0;
            M < H;
            M++
          )
            De[M].nodeName !== "BR" &&
              ((F = De[M]),
              G.appendChild(F),
              Pt && F._wordEnd && G.appendChild(hr.createTextNode(" ")),
              S &&
                (M === 0 &&
                  ((G.style.top = F._y + "px"), (G.style.left = u + oe + "px")),
                (F.style.top = "0px"),
                oe && (F.style.left = F._x - oe + "px")));
          H === 0
            ? (G.innerHTML = "&nbsp;")
            : !T && !x && (Nf(G), ec(G, " ", " ")),
            S && ((G.style.width = je), (G.style.height = F._h + "px")),
            e.appendChild(G);
        }
        e.style.cssText = ie;
      }
      S &&
        (a > e.clientHeight &&
          ((e.style.height = a - c + "px"),
          e.clientHeight < a && (e.style.height = a + d + "px")),
        o > e.clientWidth &&
          ((e.style.width = o - m + "px"),
          e.clientWidth < o && (e.style.width = o + f + "px"))),
        j && (Y ? (e.style.display = Y) : e.style.removeProperty("display")),
        Wa(i, D),
        T && Wa(r, C),
        Wa(s, P);
    },
    zf = function (e, t, i, r) {
      var s = t.tag ? t.tag : t.span ? "span" : "div",
        o = t.type || t.split || "chars,words,lines",
        a = ~o.indexOf("chars"),
        l = Ua(t),
        u = t.wordDelimiter || " ",
        h = function (S) {
          return S === u || (S === Rf && u === " ");
        },
        d = u !== " " ? "" : l ? "&#173; " : " ",
        f = "</" + s + ">",
        c = 1,
        m = t.specialChars
          ? typeof t.specialChars == "function"
            ? t.specialChars
            : Vf
          : null,
        p,
        _,
        D,
        C,
        P,
        v,
        b,
        y,
        w = hr.createElement("div"),
        T = e.parentNode;
      for (
        T.insertBefore(w, e),
          w.textContent = e.nodeValue,
          T.removeChild(e),
          e = w,
          p = Yh(e),
          b = p.indexOf("<") !== -1,
          t.reduceWhiteSpace !== !1 && (p = p.replace(Lf, " ").replace(Mf, "")),
          b && (p = p.split("<").join("{{LT}}")),
          P = p.length,
          _ = (p.charAt(0) === " " ? d : "") + i(),
          D = 0;
        D < P;
        D++
      )
        if (((v = p.charAt(D)), m && (y = m(p.substr(D), t.specialChars))))
          (v = p.substr(D, y || 1)),
            (_ += a && v !== " " ? r() + v + "</" + s + ">" : v),
            (D += y - 1);
        else if (h(v) && !h(p.charAt(D - 1)) && D) {
          for (_ += c ? f : "", c = 0; h(p.charAt(D + 1)); ) (_ += d), D++;
          D === P - 1
            ? (_ += d)
            : p.charAt(D + 1) !== ")" && ((_ += d + i()), (c = 1));
        } else
          v === "{" && p.substr(D, 6) === "{{LT}}"
            ? ((_ += a ? r() + "{{LT}}</" + s + ">" : "{{LT}}"), (D += 5))
            : (v.charCodeAt(0) >= 55296 && v.charCodeAt(0) <= 56319) ||
              (p.charCodeAt(D + 1) >= 65024 && p.charCodeAt(D + 1) <= 65039)
            ? ((C = ((p.substr(D, 12).split(Of) || [])[1] || "").length || 2),
              (_ +=
                a && v !== " "
                  ? r() + p.substr(D, C) + "</" + s + ">"
                  : p.substr(D, C)),
              (D += C - 1))
            : (_ += a && v !== " " ? r() + v + "</" + s + ">" : v);
      (e.outerHTML = _ + (c ? f : "")), b && ec(T, "{{LT}}", "<");
    },
    $f = function n(e, t, i, r) {
      var s = lo(e.childNodes),
        o = s.length,
        a = Ua(t),
        l,
        u;
      if (e.nodeType !== 3 || o > 1) {
        for (t.absolute = !1, l = 0; l < o; l++)
          (u = s[l]),
            (u._next = u._isFirst = u._parent = u._wordEnd = null),
            (u.nodeType !== 3 || /\S+/.test(u.nodeValue)) &&
              (a &&
                u.nodeType !== 3 &&
                Qh(u).display === "inline" &&
                ((u.style.display = "inline-block"),
                (u.style.position = "relative")),
              (u._isSplit = !0),
              n(u, t, i, r));
        (t.absolute = a), (e._isSplit = !0);
        return;
      }
      zf(e, t, i, r);
    },
    uo = (function () {
      function n(t, i) {
        Gh || Zh(),
          (this.elements = lo(t)),
          (this.chars = []),
          (this.words = []),
          (this.lines = []),
          (this._originals = []),
          (this.vars = i || {}),
          Xh(this),
          this.split(i);
      }
      var e = n.prototype;
      return (
        (e.split = function (i) {
          this.isSplit && this.revert(),
            (this.vars = i = i || this.vars),
            (this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0);
          for (
            var r = this.elements.length,
              s = i.tag ? i.tag : i.span ? "span" : "div",
              o = Jh(i.wordsClass, s),
              a = Jh(i.charsClass, s),
              l,
              u,
              h;
            --r > -1;

          )
            (h = this.elements[r]),
              (this._originals[r] = {
                html: h.innerHTML,
                style: h.getAttribute("style"),
              }),
              (l = h.clientHeight),
              (u = h.clientWidth),
              $f(h, i, o, a),
              If(h, i, this.chars, this.words, this.lines, u, l);
          return (
            this.chars.reverse(),
            this.words.reverse(),
            this.lines.reverse(),
            (this.isSplit = !0),
            this
          );
        }),
        (e.revert = function () {
          var i = this._originals;
          if (!i) throw "revert() call wasn't scoped properly.";
          return (
            this.elements.forEach(function (r, s) {
              (r.innerHTML = i[s].html), r.setAttribute("style", i[s].style);
            }),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this.isSplit = !1),
            this
          );
        }),
        (n.create = function (i, r) {
          return new n(i, r);
        }),
        n
      );
    })();
  (uo.version = "3.12.5"), (uo.register = Zh), he.registerPlugin(uo);
  const Dr = class Dr {
    constructor(e) {
      if (!(e instanceof Element))
        throw new Error("NavButton requires a valid DOM element");
      if (
        ((this.button = e),
        (this.buttonText = this.button.querySelector(
          "[data-element='nav-button-text']"
        )),
        !this.buttonText)
      )
        throw new Error("Required text element not found");
      (this.split = new uo(this.buttonText, { types: "chars" })),
        (this.boundAnimateIn = this.animateIn.bind(this)),
        (this.boundAnimateOut = this.animateOut.bind(this)),
        this.init();
    }
    init() {
      this.button.addEventListener("mouseenter", this.boundAnimateIn),
        this.button.addEventListener("mouseleave", this.boundAnimateOut);
    }
    destroy() {
      this.button.removeEventListener("mouseenter", this.boundAnimateIn),
        this.button.removeEventListener("mouseleave", this.boundAnimateOut),
        this.split.revert();
    }
    getStaggerTime() {
      const {
        baseStagger: e,
        minStagger: t,
        reductionFactor: i,
      } = Dr.ANIMATION_CONFIG;
      return Math.max(t, e - this.split.chars.length * i);
    }
    animateIn() {
      const {
          fadeInDuration: e,
          initialOpacity: t,
          initialDuration: i,
        } = Dr.ANIMATION_CONFIG,
        r = this.getStaggerTime();
      he.to(this.split.chars, {
        opacity: t,
        stagger: {
          each: r,
          onComplete: function () {
            he.to(this.targets(), { opacity: 1, duration: e });
          },
        },
        duration: i,
      });
    }
    animateOut() {
      const { fadeOutDuration: e } = Dr.ANIMATION_CONFIG;
      he.to(this.split.chars, { opacity: 1, duration: e });
    }
  };
  V(Dr, "ANIMATION_CONFIG", {
    baseStagger: 0.03,
    minStagger: 0.01,
    reductionFactor: 5e-4,
    fadeInDuration: 0.5,
    fadeOutDuration: 0.2,
    initialOpacity: 0.2,
    initialDuration: 0.1,
  });
  let qa = Dr;
  function jf() {
    const n = document.querySelectorAll("[data-element='nav-button']");
    return Array.from(n).map((e) => new qa(e));
  }
  class Hf {
    constructor() {
      (this.dropdownArea = document.querySelector(
        "[data-element='dropdown-area']"
      )),
        (this.dropdownWrap = document.querySelector(
          "[data-element='dropdown-wrap']"
        )),
        (this.dropdownLinks = document.querySelectorAll(
          "[data-dropdown-link]"
        )),
        (this.dropdownContents = document.querySelectorAll(
          "[data-dropdown-content]"
        )),
        (this.dropdownOverlay = document.querySelector(
          "[data-element='dropdown-overlay']"
        )),
        (this.state = {
          isOpen: !1,
          closeTimeout: null,
          resizeTimer: null,
          activeLink: null,
          activeContent: null,
        }),
        (this.animationConfig = {
          openDuration: 0.5,
          closeDuration: 0.4,
          staggerDelay: 0.07,
          closeDelay: 150,
          resizeDelay: 100,
          ease: "power3.out",
        }),
        (this.handleMouseMove = this.handleMouseMove.bind(this)),
        (this.handleEscape = this.handleEscape.bind(this)),
        (this.handleResize = this.handleResize.bind(this)),
        this.init();
    }
    init() {
      if (!this.dropdownArea || !this.dropdownWrap) {
        console.warn("Required dropdown elements not found");
        return;
      }
      this.setupEventListeners();
    }
    setupEventListeners() {
      this.dropdownLinks.forEach((e) => {
        e.addEventListener("mouseenter", (t) => this.handleLinkHover(t));
      }),
        this.dropdownArea.addEventListener("mouseenter", () =>
          this.clearCloseTimeout()
        ),
        document.addEventListener("mousemove", this.handleMouseMove),
        document.addEventListener("keydown", this.handleEscape),
        window.addEventListener("resize", this.handleResize);
    }
    handleLinkHover(e) {
      const t = e.target,
        i = document.querySelector(
          `[data-dropdown-content='${t.getAttribute("data-dropdown-link")}']`
        );
      this.openDropdown(t, i);
    }
    openDropdown(e, t) {
      !t ||
        !e ||
        (this.clearCloseTimeout(),
        (this.state.activeLink = e),
        (this.state.activeContent = t),
        this.setVariables(e, t),
        this.calculateHeights(t),
        this.animateOpen(t));
    }
    closeDropdown() {
      this.state.isOpen && (this.setVariables(null, null), this.animateClose());
    }
    calculateHeights(e) {
      if (!e) return;
      const t = e.scrollHeight;
      he.to(this.dropdownWrap, {
        height: t,
        duration: this.animationConfig.openDuration,
        ease: this.animationConfig.ease,
      });
    }
    animateOpen(e) {
      const t = e.querySelectorAll("[data-element='dropdown-inner-link']");
      he.fromTo(
        t,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: this.animationConfig.staggerDelay,
          ease: this.animationConfig.ease,
        }
      ),
        he.to(this.dropdownOverlay, {
          opacity: 1,
          duration: 0.3,
          ease: this.animationConfig.ease,
        });
    }
    animateClose() {
      he.to(this.dropdownWrap, {
        height: 0,
        duration: this.animationConfig.closeDuration,
        ease: this.animationConfig.ease,
        onComplete: () => {
          this.state.isOpen = !1;
        },
      }),
        he.to(this.dropdownOverlay, {
          opacity: 0,
          duration: this.animationConfig.closeDuration,
          ease: this.animationConfig.ease,
        });
    }
    setVariables(e, t) {
      this.dropdownLinks.forEach((i) => i.classList.remove("is--active")),
        this.dropdownContents.forEach((i) => i.classList.remove("is--active")),
        e && t
          ? (e.classList.add("is--active"),
            t.classList.add("is--active"),
            this.dropdownWrap.setAttribute("data-state", "active"),
            this.dropdownOverlay.setAttribute("data-state", "active"),
            this.dropdownOverlay.classList.add("is--active"),
            (this.state.isOpen = !0))
          : (this.dropdownWrap.removeAttribute("data-state"),
            this.dropdownOverlay.removeAttribute("data-state"),
            this.dropdownOverlay.classList.remove("is--active"),
            (this.state.isOpen = !1),
            (this.state.activeLink = null),
            (this.state.activeContent = null));
    }
    shouldKeepOpen(e) {
      const t = this.dropdownArea.contains(e.target),
        i = this.dropdownWrap.contains(e.target);
      return t || i;
    }
    handleMouseMove(e) {
      this.state.isOpen &&
        (this.shouldKeepOpen(e)
          ? this.clearCloseTimeout()
          : this.state.closeTimeout ||
            (this.state.closeTimeout = setTimeout(() => {
              this.closeDropdown(), (this.state.closeTimeout = null);
            }, this.animationConfig.closeDelay)));
    }
    clearCloseTimeout() {
      this.state.closeTimeout &&
        (clearTimeout(this.state.closeTimeout),
        (this.state.closeTimeout = null));
    }
    handleEscape(e) {
      e.key === "Escape" && this.state.isOpen && this.closeDropdown();
    }
    handleResize() {
      clearTimeout(this.state.resizeTimer),
        (this.state.resizeTimer = setTimeout(() => {
          this.state.activeContent &&
            this.state.isOpen &&
            this.calculateHeights(this.state.activeContent);
        }, this.animationConfig.resizeDelay));
    }
    destroy() {
      document.removeEventListener("mousemove", this.handleMouseMove),
        document.removeEventListener("keydown", this.handleEscape),
        window.removeEventListener("resize", this.handleResize),
        this.clearCloseTimeout(),
        this.state.resizeTimer && clearTimeout(this.state.resizeTimer);
    }
  }
  function Uf() {
    return new Hf();
  }
  function ic() {
    jf(), Uf(), console.log(ic);
  }
  var Wf = "1.1.16";
  function nc(n, e, t) {
    return Math.max(n, Math.min(e, t));
  }
  function qf(n, e, t) {
    return (1 - t) * n + t * e;
  }
  function Kf(n, e, t, i) {
    return qf(n, e, 1 - Math.exp(-t * i));
  }
  function Yf(n, e) {
    return ((n % e) + e) % e;
  }
  var Gf = class {
    constructor() {
      V(this, "isRunning", !1);
      V(this, "value", 0);
      V(this, "from", 0);
      V(this, "to", 0);
      V(this, "currentTime", 0);
      V(this, "lerp");
      V(this, "duration");
      V(this, "easing");
      V(this, "onUpdate");
    }
    advance(n) {
      var t;
      if (!this.isRunning) return;
      let e = !1;
      if (this.duration && this.easing) {
        this.currentTime += n;
        const i = nc(0, this.currentTime / this.duration, 1);
        e = i >= 1;
        const r = e ? 1 : this.easing(i);
        this.value = this.from + (this.to - this.from) * r;
      } else
        this.lerp
          ? ((this.value = Kf(this.value, this.to, this.lerp * 60, n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0)))
          : ((this.value = this.to), (e = !0));
      e && this.stop(),
        (t = this.onUpdate) == null || t.call(this, this.value, e);
    }
    stop() {
      this.isRunning = !1;
    }
    fromTo(n, e, { lerp: t, duration: i, easing: r, onStart: s, onUpdate: o }) {
      (this.from = this.value = n),
        (this.to = e),
        (this.lerp = t),
        (this.duration = i),
        (this.easing = r),
        (this.currentTime = 0),
        (this.isRunning = !0),
        s == null || s(),
        (this.onUpdate = o);
    }
  };
  function Xf(n, e) {
    let t;
    return function (...i) {
      let r = this;
      clearTimeout(t),
        (t = setTimeout(() => {
          (t = void 0), n.apply(r, i);
        }, e));
    };
  }
  var Zf = class {
      constructor(n, e, { autoResize: t = !0, debounce: i = 250 } = {}) {
        V(this, "width", 0);
        V(this, "height", 0);
        V(this, "scrollHeight", 0);
        V(this, "scrollWidth", 0);
        V(this, "debouncedResize");
        V(this, "wrapperResizeObserver");
        V(this, "contentResizeObserver");
        V(this, "resize", () => {
          this.onWrapperResize(), this.onContentResize();
        });
        V(this, "onWrapperResize", () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        });
        V(this, "onContentResize", () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = n),
          (this.content = e),
          t &&
            ((this.debouncedResize = Xf(this.resize, i)),
            this.wrapper instanceof Window
              ? window.addEventListener("resize", this.debouncedResize, !1)
              : ((this.wrapperResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.contentResizeObserver.observe(this.content)),
          this.resize();
      }
      destroy() {
        var n, e;
        (n = this.wrapperResizeObserver) == null || n.disconnect(),
          (e = this.contentResizeObserver) == null || e.disconnect(),
          this.wrapper === window &&
            this.debouncedResize &&
            window.removeEventListener("resize", this.debouncedResize, !1);
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    rc = class {
      constructor() {
        V(this, "events", {});
      }
      emit(e, ...t) {
        var r;
        let i = this.events[e] || [];
        for (let s = 0, o = i.length; s < o; s++)
          (r = i[s]) == null || r.call(i, ...t);
      }
      on(e, t) {
        var i;
        return (
          ((i = this.events[e]) != null && i.push(t)) || (this.events[e] = [t]),
          () => {
            var r;
            this.events[e] =
              (r = this.events[e]) == null ? void 0 : r.filter((s) => t !== s);
          }
        );
      }
      off(e, t) {
        var i;
        this.events[e] =
          (i = this.events[e]) == null ? void 0 : i.filter((r) => t !== r);
      }
      destroy() {
        this.events = {};
      }
    },
    sc = 100 / 6,
    Zi = { passive: !1 },
    Qf = class {
      constructor(n, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
        V(this, "touchStart", { x: 0, y: 0 });
        V(this, "lastDelta", { x: 0, y: 0 });
        V(this, "window", { width: 0, height: 0 });
        V(this, "emitter", new rc());
        V(this, "onTouchStart", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n });
        });
        V(this, "onTouchMove", (n) => {
          const { clientX: e, clientY: t } = n.targetTouches
              ? n.targetTouches[0]
              : n,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            r = -(t - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = e),
            (this.touchStart.y = t),
            (this.lastDelta = { x: i, y: r }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: r, event: n });
        });
        V(this, "onTouchEnd", (n) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: n,
          });
        });
        V(this, "onWheel", (n) => {
          let { deltaX: e, deltaY: t, deltaMode: i } = n;
          const r = i === 1 ? sc : i === 2 ? this.window.width : 1,
            s = i === 1 ? sc : i === 2 ? this.window.height : 1;
          (e *= r),
            (t *= s),
            (e *= this.options.wheelMultiplier),
            (t *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: t, event: n });
        });
        V(this, "onWindowResize", () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
        (this.element = n),
          (this.options = e),
          window.addEventListener("resize", this.onWindowResize, !1),
          this.onWindowResize(),
          this.element.addEventListener("wheel", this.onWheel, Zi),
          this.element.addEventListener("touchstart", this.onTouchStart, Zi),
          this.element.addEventListener("touchmove", this.onTouchMove, Zi),
          this.element.addEventListener("touchend", this.onTouchEnd, Zi);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      destroy() {
        this.emitter.destroy(),
          window.removeEventListener("resize", this.onWindowResize, !1),
          this.element.removeEventListener("wheel", this.onWheel, Zi),
          this.element.removeEventListener("touchstart", this.onTouchStart, Zi),
          this.element.removeEventListener("touchmove", this.onTouchMove, Zi),
          this.element.removeEventListener("touchend", this.onTouchEnd, Zi);
      }
    },
    Jf = class {
      constructor({
        wrapper: n = window,
        content: e = document.documentElement,
        eventsTarget: t = n,
        smoothWheel: i = !0,
        syncTouch: r = !1,
        syncTouchLerp: s = 0.075,
        touchInertiaMultiplier: o = 35,
        duration: a,
        easing: l = (b) => Math.min(1, 1.001 - Math.pow(2, -10 * b)),
        lerp: u = 0.1,
        infinite: h = !1,
        orientation: d = "vertical",
        gestureOrientation: f = "vertical",
        touchMultiplier: c = 1,
        wheelMultiplier: m = 1,
        autoResize: p = !0,
        prevent: _,
        virtualScroll: D,
        overscroll: C = !0,
        autoRaf: P = !1,
        __experimental__naiveDimensions: v = !1,
      } = {}) {
        V(this, "_isScrolling", !1);
        V(this, "_isStopped", !1);
        V(this, "_isLocked", !1);
        V(this, "_preventNextNativeScrollEvent", !1);
        V(this, "_resetVelocityTimeout", null);
        V(this, "__rafID", null);
        V(this, "isTouching");
        V(this, "time", 0);
        V(this, "userData", {});
        V(this, "lastVelocity", 0);
        V(this, "velocity", 0);
        V(this, "direction", 0);
        V(this, "options");
        V(this, "targetScroll");
        V(this, "animatedScroll");
        V(this, "animate", new Gf());
        V(this, "emitter", new rc());
        V(this, "dimensions");
        V(this, "virtualScroll");
        V(this, "onPointerDown", (n) => {
          n.button === 1 && this.reset();
        });
        V(this, "onVirtualScroll", (n) => {
          if (
            typeof this.options.virtualScroll == "function" &&
            this.options.virtualScroll(n) === !1
          )
            return;
          const { deltaX: e, deltaY: t, event: i } = n;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: t,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          const r = i.type.includes("touch"),
            s = i.type.includes("wheel");
          if (
            ((this.isTouching =
              i.type === "touchstart" || i.type === "touchmove"),
            this.options.syncTouch &&
              r &&
              i.type === "touchstart" &&
              !this.isStopped &&
              !this.isLocked)
          ) {
            this.reset();
            return;
          }
          const a = e === 0 && t === 0,
            l =
              (this.options.gestureOrientation === "vertical" && t === 0) ||
              (this.options.gestureOrientation === "horizontal" && e === 0);
          if (a || l) return;
          let u = i.composedPath();
          u = u.slice(0, u.indexOf(this.rootElement));
          const h = this.options.prevent;
          if (
            u.find((_) => {
              var D, C, P;
              return (
                _ instanceof HTMLElement &&
                ((typeof h == "function" && (h == null ? void 0 : h(_))) ||
                  ((D = _.hasAttribute) == null
                    ? void 0
                    : D.call(_, "data-lenis-prevent")) ||
                  (r &&
                    ((C = _.hasAttribute) == null
                      ? void 0
                      : C.call(_, "data-lenis-prevent-touch"))) ||
                  (s &&
                    ((P = _.hasAttribute) == null
                      ? void 0
                      : P.call(_, "data-lenis-prevent-wheel"))))
              );
            })
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && r) || (this.options.smoothWheel && s))
          ) {
            (this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0);
            return;
          }
          let f = t;
          this.options.gestureOrientation === "both"
            ? (f = Math.abs(t) > Math.abs(e) ? t : e)
            : this.options.gestureOrientation === "horizontal" && (f = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (this.animatedScroll === 0 && t > 0) ||
                  (this.animatedScroll === this.limit && t < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.preventDefault();
          const c = r && this.options.syncTouch,
            p = r && i.type === "touchend" && Math.abs(f) > 5;
          p && (f = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + f, {
              programmatic: !1,
              ...(c
                ? { lerp: p ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            });
        });
        V(this, "onNativeScroll", () => {
          if (
            (this._resetVelocityTimeout !== null &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (this.isScrolling === !1 || this.isScrolling === "native") {
            const n = this.animatedScroll;
            (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - n),
              (this.direction = Math.sign(this.animatedScroll - n)),
              (this.isScrolling = "native"),
              this.emit(),
              this.velocity !== 0 &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  (this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit();
                }, 400));
          }
        });
        V(this, "raf", (n) => {
          const e = n - (this.time || n);
          (this.time = n),
            this.animate.advance(e * 0.001),
            this.options.autoRaf &&
              (this.__rafID = requestAnimationFrame(this.raf));
        });
        (window.lenisVersion = Wf),
          (!n || n === document.documentElement || n === document.body) &&
            (n = window),
          (this.options = {
            wrapper: n,
            content: e,
            eventsTarget: t,
            smoothWheel: i,
            syncTouch: r,
            syncTouchLerp: s,
            touchInertiaMultiplier: o,
            duration: a,
            easing: l,
            lerp: u,
            infinite: h,
            gestureOrientation: f,
            orientation: d,
            touchMultiplier: c,
            wheelMultiplier: m,
            autoResize: p,
            prevent: _,
            virtualScroll: D,
            overscroll: C,
            autoRaf: P,
            __experimental__naiveDimensions: v,
          }),
          (this.dimensions = new Zf(n, e, { autoResize: p })),
          this.updateClassName(),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.addEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          (this.virtualScroll = new Qf(t, {
            touchMultiplier: c,
            wheelMultiplier: m,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll),
          this.options.autoRaf &&
            (this.__rafID = requestAnimationFrame(this.raf));
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener(
            "scroll",
            this.onNativeScroll,
            !1
          ),
          this.options.wrapper.removeEventListener(
            "pointerdown",
            this.onPointerDown,
            !1
          ),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.cleanUpClassName(),
          this.__rafID && cancelAnimationFrame(this.__rafID);
      }
      on(n, e) {
        return this.emitter.on(n, e);
      }
      off(n, e) {
        return this.emitter.off(n, e);
      }
      setScroll(n) {
        this.isHorizontal
          ? (this.rootElement.scrollLeft = n)
          : (this.rootElement.scrollTop = n);
      }
      resize() {
        this.dimensions.resize(),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          this.emit();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity = 0),
          this.animate.stop();
      }
      start() {
        this.isStopped && ((this.isStopped = !1), this.reset());
      }
      stop() {
        this.isStopped ||
          ((this.isStopped = !0), this.animate.stop(), this.reset());
      }
      scrollTo(
        n,
        {
          offset: e = 0,
          immediate: t = !1,
          lock: i = !1,
          duration: r = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = this.options.lerp,
          onStart: a,
          onComplete: l,
          force: u = !1,
          programmatic: h = !0,
          userData: d,
        } = {}
      ) {
        if (!((this.isStopped || this.isLocked) && !u)) {
          if (typeof n == "string" && ["top", "left", "start"].includes(n))
            n = 0;
          else if (
            typeof n == "string" &&
            ["bottom", "right", "end"].includes(n)
          )
            n = this.limit;
          else {
            let f;
            if (
              (typeof n == "string"
                ? (f = document.querySelector(n))
                : n instanceof HTMLElement &&
                  n != null &&
                  n.nodeType &&
                  (f = n),
              f)
            ) {
              if (this.options.wrapper !== window) {
                const m = this.rootElement.getBoundingClientRect();
                e -= this.isHorizontal ? m.left : m.top;
              }
              const c = f.getBoundingClientRect();
              n = (this.isHorizontal ? c.left : c.top) + this.animatedScroll;
            }
          }
          if (typeof n == "number") {
            if (
              ((n += e),
              (n = Math.round(n)),
              this.options.infinite
                ? h && (this.targetScroll = this.animatedScroll = this.scroll)
                : (n = nc(0, n, this.limit)),
              n === this.targetScroll)
            ) {
              a == null || a(this), l == null || l(this);
              return;
            }
            if (((this.userData = d ?? {}), t)) {
              (this.animatedScroll = this.targetScroll = n),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                l == null || l(this),
                (this.userData = {});
              return;
            }
            h || (this.targetScroll = n),
              this.animate.fromTo(this.animatedScroll, n, {
                duration: r,
                easing: s,
                lerp: o,
                onStart: () => {
                  i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    a == null || a(this);
                },
                onUpdate: (f, c) => {
                  (this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = f - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = f),
                    this.setScroll(this.scroll),
                    h && (this.targetScroll = f),
                    c || this.emit(),
                    c &&
                      (this.reset(),
                      this.emit(),
                      l == null || l(this),
                      (this.userData = {}),
                      this.preventNextNativeScrollEvent());
                },
              });
          }
        }
      }
      preventNextNativeScrollEvent() {
        (this._preventNextNativeScrollEvent = !0),
          requestAnimationFrame(() => {
            this._preventNextNativeScrollEvent = !1;
          });
      }
      get rootElement() {
        return this.options.wrapper === window
          ? document.documentElement
          : this.options.wrapper;
      }
      get limit() {
        return this.options.__experimental__naiveDimensions
          ? this.isHorizontal
            ? this.rootElement.scrollWidth - this.rootElement.clientWidth
            : this.rootElement.scrollHeight - this.rootElement.clientHeight
          : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        return this.isHorizontal
          ? this.rootElement.scrollLeft
          : this.rootElement.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? Yf(this.animatedScroll, this.limit)
          : this.animatedScroll;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isScrolling() {
        return this._isScrolling;
      }
      set isScrolling(n) {
        this._isScrolling !== n &&
          ((this._isScrolling = n), this.updateClassName());
      }
      get isStopped() {
        return this._isStopped;
      }
      set isStopped(n) {
        this._isStopped !== n &&
          ((this._isStopped = n), this.updateClassName());
      }
      get isLocked() {
        return this._isLocked;
      }
      set isLocked(n) {
        this._isLocked !== n && ((this._isLocked = n), this.updateClassName());
      }
      get isSmooth() {
        return this.isScrolling === "smooth";
      }
      get className() {
        let n = "lenis";
        return (
          this.isStopped && (n += " lenis-stopped"),
          this.isLocked && (n += " lenis-locked"),
          this.isScrolling && (n += " lenis-scrolling"),
          this.isScrolling === "smooth" && (n += " lenis-smooth"),
          n
        );
      }
      updateClassName() {
        this.cleanUpClassName(),
          (this.rootElement.className =
            `${this.rootElement.className} ${this.className}`.trim());
      }
      cleanUpClassName() {
        this.rootElement.className = this.rootElement.className
          .replace(/lenis(-\w+)?/g, "")
          .trim();
      }
    };
  he.registerPlugin($);
  class em {
    constructor() {
      (this.lenis = new Jf({
        autoinit: !0,
        duration: 1.2,
        easing: (e) => Math.min(1, 1.001 - Math.pow(2, -12 * e)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: !0,
        smoothTouch: !1,
        useOverscroll: !0,
        useAnchor: !0,
        touchMultiplier: 1.5,
        infinite: !1,
      })),
        this.init();
    }
    init() {
      this.lenis.on("scroll", $.update),
        he.ticker.add((e) => {
          this.lenis.raf(e * 1e3);
        }),
        he.ticker.lagSmoothing(0);
    }
    scrollTo(e, t = {}) {
      this.lenis.scrollTo(e, t);
    }
    stop() {
      this.lenis.stop();
    }
    start() {
      this.lenis.start();
    }
    destroy() {
      this.lenis.destroy(), he.ticker.remove(this.lenis.raf);
    }
    getLenis() {
      return this.lenis;
    }
  }
  new em(),
    ((Zd = he.plugins) != null && Zd.ScrollTrigger) || he.registerPlugin($);
  function tm(n, e = {}) {
    const i = {
      ...{
        speed: 1,
        direction: "vertical",
        start: "top bottom",
        end: "bottom top",
        scrub: !0,
        reverse: !1,
      },
      ...e,
    };
    if (!n) return console.warn("Parallax element not found"), null;
    const r = n.offsetHeight * i.speed * (i.reverse ? -1 : 1),
      s = n.offsetWidth * i.speed * (i.reverse ? -1 : 1);
    try {
      return he.to(n, {
        y: i.direction === "vertical" ? r : 0,
        x: i.direction === "horizontal" ? s : 0,
        ease: "none",
        scrollTrigger: {
          trigger: n,
          start: i.start,
          end: i.end,
          scrub: i.scrub,
          markers: !1,
          invalidateOnRefresh: !0,
        },
      });
    } catch (o) {
      return console.error("Error creating parallax animation:", o), null;
    }
  }
  function im() {
    document.querySelectorAll("[data-parallax]").forEach((e) => {
      const t = e.dataset.parallaxSpeed || 0.5,
        i = e.dataset.parallaxDirection || "vertical",
        r = e.dataset.parallaxStart || "top bottom",
        s = e.dataset.parallaxEnd || "bottom top",
        o = e.dataset.parallaxScrub || !0,
        a = e.dataset.parallaxReverse || !1;
      tm(e, { speed: t, direction: i, start: r, end: s, scrub: o, reverse: a });
    });
  }
  he.registerPlugin($);
  let Ka = [];
  const nm = (n) => {
      n.forEach((e) => {
        const t = e.getTotalLength(),
          i = e.getAttribute("fill"),
          r = e.cloneNode();
        e.parentNode.insertBefore(r, e),
          he.set(e, { fill: i, opacity: 0 }),
          he.set(r, {
            fill: "none",
            stroke: "#296B29",
            strokeWidth: 2,
            strokeDasharray: t,
            strokeDashoffset: t,
          });
        const s = he.timeline({ paused: !0, defaults: { ease: "power2.out" } });
        s
          .to(r, { duration: 5.5, strokeDashoffset: 0, ease: "power2.out" })
          .to(e, { duration: 2.55, opacity: 1, ease: "power2.out" }, "-=5.25")
          .to(r, { duration: 1.55, opacity: 0, ease: "power2.out" }, "<"),
          $.create({
            trigger: e,
            start: "top 80%",
            once: !0,
            onEnter: () => s.play(),
          }),
          Ka.push(s);
      });
    },
    rm = () => {
      const n = document.querySelectorAll('svg[data-draw="vine"] path');
      if (n.length !== 0)
        return (
          nm(n),
          () => {
            Ka.forEach((e) => e.kill()),
              $.getAll().forEach((e) => e.kill()),
              document
                .querySelectorAll('svg[data-draw="vine"] path')
                .forEach((e) => {
                  e.getAttribute("data-clone") && e.remove();
                }),
              (Ka = []);
          }
        );
    };
  /*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */ function Vg(
    n
  ) {
    return n;
  }
  function we(n) {
    return n == null;
  }
  function Ya(n) {
    return n !== null && typeof n == "object";
  }
  function Ga(n) {
    return n !== null && typeof n == "object";
  }
  function sm(n, e) {
    if (n.length !== e.length) return !1;
    for (let t = 0; t < n.length; t++) if (n[t] !== e[t]) return !1;
    return !0;
  }
  function On(n, e) {
    return Array.from(new Set([...Object.keys(n), ...Object.keys(e)])).reduce(
      (i, r) => {
        const s = n[r],
          o = e[r];
        return Ga(s) && Ga(o)
          ? Object.assign(Object.assign({}, i), { [r]: On(s, o) })
          : Object.assign(Object.assign({}, i), { [r]: r in e ? o : s });
      },
      {}
    );
  }
  function om(n) {
    return Ya(n) ? "target" in n : !1;
  }
  const am = {
    alreadydisposed: () => "View has been already disposed",
    invalidparams: (n) => `Invalid parameters for '${n.name}'`,
    nomatchingcontroller: (n) => `No matching controller for '${n.key}'`,
    nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`,
    notbindable: () => "Value is not bindable",
    notcompatible: (n) => `Not compatible with  plugin '${n.id}'`,
    propertynotfound: (n) => `Property '${n.name}' not found`,
    shouldneverhappen: () => "This error should never happen",
  };
  class Vt {
    static alreadyDisposed() {
      return new Vt({ type: "alreadydisposed" });
    }
    static notBindable() {
      return new Vt({ type: "notbindable" });
    }
    static notCompatible(e, t) {
      return new Vt({ type: "notcompatible", context: { id: `${e}.${t}` } });
    }
    static propertyNotFound(e) {
      return new Vt({ type: "propertynotfound", context: { name: e } });
    }
    static shouldNeverHappen() {
      return new Vt({ type: "shouldneverhappen" });
    }
    constructor(e) {
      var t;
      (this.message =
        (t = am[e.type](e.context)) !== null && t !== void 0
          ? t
          : "Unexpected error"),
        (this.name = this.constructor.name),
        (this.stack = new Error(this.message).stack),
        (this.type = e.type);
    }
    toString() {
      return this.message;
    }
  }
  class ho {
    constructor(e, t) {
      (this.obj_ = e), (this.key = t);
    }
    static isBindable(e) {
      return !(e === null || (typeof e != "object" && typeof e != "function"));
    }
    read() {
      return this.obj_[this.key];
    }
    write(e) {
      this.obj_[this.key] = e;
    }
    writeProperty(e, t) {
      const i = this.read();
      if (!ho.isBindable(i)) throw Vt.notBindable();
      if (!(e in i)) throw Vt.propertyNotFound(e);
      i[e] = t;
    }
  }
  class Bt {
    constructor() {
      this.observers_ = {};
    }
    on(e, t, i) {
      var r;
      let s = this.observers_[e];
      return (
        s || (s = this.observers_[e] = []),
        s.push({
          handler: t,
          key:
            (r = i == null ? void 0 : i.key) !== null && r !== void 0 ? r : t,
        }),
        this
      );
    }
    off(e, t) {
      const i = this.observers_[e];
      return i && (this.observers_[e] = i.filter((r) => r.key !== t)), this;
    }
    emit(e, t) {
      const i = this.observers_[e];
      i &&
        i.forEach((r) => {
          r.handler(t);
        });
    }
  }
  class lm {
    constructor(e, t) {
      var i;
      (this.constraint_ = t == null ? void 0 : t.constraint),
        (this.equals_ =
          (i = t == null ? void 0 : t.equals) !== null && i !== void 0
            ? i
            : (r, s) => r === s),
        (this.emitter = new Bt()),
        (this.rawValue_ = e);
    }
    get constraint() {
      return this.constraint_;
    }
    get rawValue() {
      return this.rawValue_;
    }
    set rawValue(e) {
      this.setRawValue(e, { forceEmit: !1, last: !0 });
    }
    setRawValue(e, t) {
      const i = t ?? { forceEmit: !1, last: !0 },
        r = this.constraint_ ? this.constraint_.constrain(e) : e,
        s = this.rawValue_;
      (this.equals_(s, r) && !i.forceEmit) ||
        (this.emitter.emit("beforechange", { sender: this }),
        (this.rawValue_ = r),
        this.emitter.emit("change", {
          options: i,
          previousRawValue: s,
          rawValue: r,
          sender: this,
        }));
    }
  }
  class um {
    constructor(e) {
      (this.emitter = new Bt()), (this.value_ = e);
    }
    get rawValue() {
      return this.value_;
    }
    set rawValue(e) {
      this.setRawValue(e, { forceEmit: !1, last: !0 });
    }
    setRawValue(e, t) {
      const i = t ?? { forceEmit: !1, last: !0 },
        r = this.value_;
      (r === e && !i.forceEmit) ||
        (this.emitter.emit("beforechange", { sender: this }),
        (this.value_ = e),
        this.emitter.emit("change", {
          options: i,
          previousRawValue: r,
          rawValue: this.value_,
          sender: this,
        }));
    }
  }
  class hm {
    constructor(e) {
      (this.emitter = new Bt()),
        (this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this)),
        (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.value_ = e),
        this.value_.emitter.on("beforechange", this.onValueBeforeChange_),
        this.value_.emitter.on("change", this.onValueChange_);
    }
    get rawValue() {
      return this.value_.rawValue;
    }
    onValueBeforeChange_(e) {
      this.emitter.emit(
        "beforechange",
        Object.assign(Object.assign({}, e), { sender: this })
      );
    }
    onValueChange_(e) {
      this.emitter.emit(
        "change",
        Object.assign(Object.assign({}, e), { sender: this })
      );
    }
  }
  function $e(n, e) {
    const t = e == null ? void 0 : e.constraint,
      i = e == null ? void 0 : e.equals;
    return !t && !i ? new um(n) : new lm(n, e);
  }
  function cm(n) {
    return [
      new hm(n),
      (e, t) => {
        n.setRawValue(e, t);
      },
    ];
  }
  class re {
    constructor(e) {
      (this.emitter = new Bt()), (this.valMap_ = e);
      for (const t in this.valMap_)
        this.valMap_[t].emitter.on("change", () => {
          this.emitter.emit("change", { key: t, sender: this });
        });
    }
    static createCore(e) {
      return Object.keys(e).reduce(
        (i, r) => Object.assign(i, { [r]: $e(e[r]) }),
        {}
      );
    }
    static fromObject(e) {
      const t = this.createCore(e);
      return new re(t);
    }
    get(e) {
      return this.valMap_[e].rawValue;
    }
    set(e, t) {
      this.valMap_[e].rawValue = t;
    }
    value(e) {
      return this.valMap_[e];
    }
  }
  class co {
    constructor(e) {
      this.values = re.fromObject({ max: e.max, min: e.min });
    }
    constrain(e) {
      const t = this.values.get("max"),
        i = this.values.get("min");
      return Math.min(Math.max(e, i), t);
    }
  }
  class dm {
    constructor(e) {
      this.values = re.fromObject({ max: e.max, min: e.min });
    }
    constrain(e) {
      const t = this.values.get("max"),
        i = this.values.get("min");
      let r = e;
      return we(i) || (r = Math.max(r, i)), we(t) || (r = Math.min(r, t)), r;
    }
  }
  class pm {
    constructor(e, t = 0) {
      (this.step = e), (this.origin = t);
    }
    constrain(e) {
      const t = this.origin % this.step,
        i = Math.round((e - t) / this.step);
      return t + i * this.step;
    }
  }
  class fm {
    constructor(e) {
      this.text = e;
    }
    evaluate() {
      return Number(this.text);
    }
    toString() {
      return this.text;
    }
  }
  const mm = {
    "**": (n, e) => Math.pow(n, e),
    "*": (n, e) => n * e,
    "/": (n, e) => n / e,
    "%": (n, e) => n % e,
    "+": (n, e) => n + e,
    "-": (n, e) => n - e,
    "<<": (n, e) => n << e,
    ">>": (n, e) => n >> e,
    ">>>": (n, e) => n >>> e,
    "&": (n, e) => n & e,
    "^": (n, e) => n ^ e,
    "|": (n, e) => n | e,
  };
  class _m {
    constructor(e, t, i) {
      (this.left = t), (this.operator = e), (this.right = i);
    }
    evaluate() {
      const e = mm[this.operator];
      if (!e) throw new Error(`unexpected binary operator: '${this.operator}`);
      return e(this.left.evaluate(), this.right.evaluate());
    }
    toString() {
      return [
        "b(",
        this.left.toString(),
        this.operator,
        this.right.toString(),
        ")",
      ].join(" ");
    }
  }
  const vm = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
  class gm {
    constructor(e, t) {
      (this.operator = e), (this.expression = t);
    }
    evaluate() {
      const e = vm[this.operator];
      if (!e) throw new Error(`unexpected unary operator: '${this.operator}`);
      return e(this.expression.evaluate());
    }
    toString() {
      return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
    }
  }
  function Xa(n) {
    return (e, t) => {
      for (let i = 0; i < n.length; i++) {
        const r = n[i](e, t);
        if (r !== "") return r;
      }
      return "";
    };
  }
  function rs(n, e) {
    var t;
    const i = n.substr(e).match(/^\s+/);
    return (t = i && i[0]) !== null && t !== void 0 ? t : "";
  }
  function wm(n, e) {
    const t = n.substr(e, 1);
    return t.match(/^[1-9]$/) ? t : "";
  }
  function ss(n, e) {
    var t;
    const i = n.substr(e).match(/^[0-9]+/);
    return (t = i && i[0]) !== null && t !== void 0 ? t : "";
  }
  function Dm(n, e) {
    const t = ss(n, e);
    if (t !== "") return t;
    const i = n.substr(e, 1);
    if (((e += 1), i !== "-" && i !== "+")) return "";
    const r = ss(n, e);
    return r === "" ? "" : i + r;
  }
  function Za(n, e) {
    const t = n.substr(e, 1);
    if (((e += 1), t.toLowerCase() !== "e")) return "";
    const i = Dm(n, e);
    return i === "" ? "" : t + i;
  }
  function oc(n, e) {
    const t = n.substr(e, 1);
    if (t === "0") return t;
    const i = wm(n, e);
    return (e += i.length), i === "" ? "" : i + ss(n, e);
  }
  function bm(n, e) {
    const t = oc(n, e);
    if (((e += t.length), t === "")) return "";
    const i = n.substr(e, 1);
    if (((e += i.length), i !== ".")) return "";
    const r = ss(n, e);
    return (e += r.length), t + i + r + Za(n, e);
  }
  function Cm(n, e) {
    const t = n.substr(e, 1);
    if (((e += t.length), t !== ".")) return "";
    const i = ss(n, e);
    return (e += i.length), i === "" ? "" : t + i + Za(n, e);
  }
  function ym(n, e) {
    const t = oc(n, e);
    return (e += t.length), t === "" ? "" : t + Za(n, e);
  }
  const Em = Xa([bm, Cm, ym]);
  function xm(n, e) {
    var t;
    const i = n.substr(e).match(/^[01]+/);
    return (t = i && i[0]) !== null && t !== void 0 ? t : "";
  }
  function Pm(n, e) {
    const t = n.substr(e, 2);
    if (((e += t.length), t.toLowerCase() !== "0b")) return "";
    const i = xm(n, e);
    return i === "" ? "" : t + i;
  }
  function Sm(n, e) {
    var t;
    const i = n.substr(e).match(/^[0-7]+/);
    return (t = i && i[0]) !== null && t !== void 0 ? t : "";
  }
  function Tm(n, e) {
    const t = n.substr(e, 2);
    if (((e += t.length), t.toLowerCase() !== "0o")) return "";
    const i = Sm(n, e);
    return i === "" ? "" : t + i;
  }
  function Fm(n, e) {
    var t;
    const i = n.substr(e).match(/^[0-9a-f]+/i);
    return (t = i && i[0]) !== null && t !== void 0 ? t : "";
  }
  function km(n, e) {
    const t = n.substr(e, 2);
    if (((e += t.length), t.toLowerCase() !== "0x")) return "";
    const i = Fm(n, e);
    return i === "" ? "" : t + i;
  }
  const Am = Xa([Pm, Tm, km]),
    Om = Xa([Am, Em]);
  function Mm(n, e) {
    const t = Om(n, e);
    return (
      (e += t.length), t === "" ? null : { evaluable: new fm(t), cursor: e }
    );
  }
  function Lm(n, e) {
    const t = n.substr(e, 1);
    if (((e += t.length), t !== "(")) return null;
    const i = lc(n, e);
    if (!i) return null;
    (e = i.cursor), (e += rs(n, e).length);
    const r = n.substr(e, 1);
    return (
      (e += r.length), r !== ")" ? null : { evaluable: i.evaluable, cursor: e }
    );
  }
  function Rm(n, e) {
    var t;
    return (t = Mm(n, e)) !== null && t !== void 0 ? t : Lm(n, e);
  }
  function ac(n, e) {
    const t = Rm(n, e);
    if (t) return t;
    const i = n.substr(e, 1);
    if (((e += i.length), i !== "+" && i !== "-" && i !== "~")) return null;
    const r = ac(n, e);
    return r
      ? ((e = r.cursor), { cursor: e, evaluable: new gm(i, r.evaluable) })
      : null;
  }
  function Vm(n, e, t) {
    t += rs(e, t).length;
    const i = n.filter((r) => e.startsWith(r, t))[0];
    return i
      ? ((t += i.length), (t += rs(e, t).length), { cursor: t, operator: i })
      : null;
  }
  function Bm(n, e) {
    return (t, i) => {
      const r = n(t, i);
      if (!r) return null;
      i = r.cursor;
      let s = r.evaluable;
      for (;;) {
        const o = Vm(e, t, i);
        if (!o) break;
        i = o.cursor;
        const a = n(t, i);
        if (!a) return null;
        (i = a.cursor), (s = new _m(o.operator, s, a.evaluable));
      }
      return s ? { cursor: i, evaluable: s } : null;
    };
  }
  const Nm = [
    ["**"],
    ["*", "/", "%"],
    ["+", "-"],
    ["<<", ">>>", ">>"],
    ["&"],
    ["^"],
    ["|"],
  ].reduce((n, e) => Bm(n, e), ac);
  function lc(n, e) {
    return (e += rs(n, e).length), Nm(n, e);
  }
  function Im(n) {
    const e = lc(n, 0);
    return !e || e.cursor + rs(n, e.cursor).length !== n.length
      ? null
      : e.evaluable;
  }
  function Qi(n) {
    var e;
    const t = Im(n);
    return (e = t == null ? void 0 : t.evaluate()) !== null && e !== void 0
      ? e
      : null;
  }
  function uc(n) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      const e = Qi(n);
      if (!we(e)) return e;
    }
    return 0;
  }
  function Et(n) {
    return (e) => e.toFixed(Math.max(Math.min(n, 20), 0));
  }
  function le(n, e, t, i, r) {
    const s = (n - e) / (t - e);
    return i + s * (r - i);
  }
  function hc(n) {
    return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
  }
  function Re(n, e, t) {
    return Math.min(Math.max(n, e), t);
  }
  function cc(n, e) {
    return ((n % e) + e) % e;
  }
  function zm(n, e) {
    return we(n.step) ? Math.max(hc(e), 2) : hc(n.step);
  }
  function dc(n) {
    var e;
    return (e = n.step) !== null && e !== void 0 ? e : 1;
  }
  function $m(n, e) {
    var t;
    const i = Math.abs((t = n.step) !== null && t !== void 0 ? t : e);
    return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
  }
  function pc(n, e) {
    return we(n.step) ? null : new pm(n.step, e);
  }
  function fc(n) {
    return !we(n.max) && !we(n.min)
      ? new co({ max: n.max, min: n.min })
      : !we(n.max) || !we(n.min)
      ? new dm({ max: n.max, min: n.min })
      : null;
  }
  function mc(n, e) {
    var t, i, r;
    return {
      formatter: (t = n.format) !== null && t !== void 0 ? t : Et(zm(n, e)),
      keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : dc(n),
      pointerScale:
        (r = n.pointerScale) !== null && r !== void 0 ? r : $m(n, e),
    };
  }
  function _c(n) {
    return {
      format: n.optional.function,
      keyScale: n.optional.number,
      max: n.optional.number,
      min: n.optional.number,
      pointerScale: n.optional.number,
      step: n.optional.number,
    };
  }
  function Qa(n) {
    return {
      constraint: n.constraint,
      textProps: re.fromObject(mc(n.params, n.initialValue)),
    };
  }
  class Ja {
    constructor(e) {
      this.controller = e;
    }
    get element() {
      return this.controller.view.element;
    }
    get disabled() {
      return this.controller.viewProps.get("disabled");
    }
    set disabled(e) {
      this.controller.viewProps.set("disabled", e);
    }
    get hidden() {
      return this.controller.viewProps.get("hidden");
    }
    set hidden(e) {
      this.controller.viewProps.set("hidden", e);
    }
    dispose() {
      this.controller.viewProps.set("disposed", !0);
    }
    importState(e) {
      return this.controller.importState(e);
    }
    exportState() {
      return this.controller.exportState();
    }
  }
  class po {
    constructor(e) {
      this.target = e;
    }
  }
  class vc extends po {
    constructor(e, t, i) {
      super(e), (this.value = t), (this.last = i ?? !0);
    }
  }
  class jm extends po {
    constructor(e, t) {
      super(e), (this.expanded = t);
    }
  }
  class Hm extends po {
    constructor(e, t) {
      super(e), (this.index = t);
    }
  }
  class Um extends po {
    constructor(e, t) {
      super(e), (this.native = t);
    }
  }
  class el extends Ja {
    constructor(e) {
      super(e),
        (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.emitter_ = new Bt()),
        this.controller.value.emitter.on("change", this.onValueChange_);
    }
    get label() {
      return this.controller.labelController.props.get("label");
    }
    set label(e) {
      this.controller.labelController.props.set("label", e);
    }
    get key() {
      return this.controller.value.binding.target.key;
    }
    get tag() {
      return this.controller.tag;
    }
    set tag(e) {
      this.controller.tag = e;
    }
    on(e, t) {
      const i = t.bind(this);
      return (
        this.emitter_.on(
          e,
          (r) => {
            i(r);
          },
          { key: t }
        ),
        this
      );
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    refresh() {
      this.controller.value.fetch();
    }
    onValueChange_(e) {
      const t = this.controller.value;
      this.emitter_.emit(
        "change",
        new vc(this, t.binding.target.read(), e.options.last)
      );
    }
  }
  function Wm(n, e) {
    const i = Object.keys(e).reduce((r, s) => {
      if (r === void 0) return;
      const o = e[s],
        a = o(n[s]);
      return a.succeeded
        ? Object.assign(Object.assign({}, r), { [s]: a.value })
        : void 0;
    }, {});
    return i;
  }
  function qm(n, e) {
    return n.reduce((t, i) => {
      if (t === void 0) return;
      const r = e(i);
      if (!(!r.succeeded || r.value === void 0)) return [...t, r.value];
    }, []);
  }
  function Km(n) {
    return n === null ? !1 : typeof n == "object";
  }
  function Ai(n) {
    return (e) => (t) => {
      if (!e && t === void 0) return { succeeded: !1, value: void 0 };
      if (e && t === void 0) return { succeeded: !0, value: void 0 };
      const i = n(t);
      return i !== void 0
        ? { succeeded: !0, value: i }
        : { succeeded: !1, value: void 0 };
    };
  }
  function gc(n) {
    return {
      custom: (e) => Ai(e)(n),
      boolean: Ai((e) => (typeof e == "boolean" ? e : void 0))(n),
      number: Ai((e) => (typeof e == "number" ? e : void 0))(n),
      string: Ai((e) => (typeof e == "string" ? e : void 0))(n),
      function: Ai((e) => (typeof e == "function" ? e : void 0))(n),
      constant: (e) => Ai((t) => (t === e ? e : void 0))(n),
      raw: Ai((e) => e)(n),
      object: (e) =>
        Ai((t) => {
          if (Km(t)) return Wm(t, e);
        })(n),
      array: (e) =>
        Ai((t) => {
          if (Array.isArray(t)) return qm(t, e);
        })(n),
    };
  }
  const tl = { optional: gc(!0), required: gc(!1) };
  function et(n, e) {
    const t = e(tl),
      i = tl.required.object(t)(n);
    return i.succeeded ? i.value : void 0;
  }
  function _i(n, e, t, i) {
    if (e && !e(n)) return !1;
    const r = et(n, t);
    return r ? i(r) : !1;
  }
  function vi(n, e) {
    var t;
    return On(
      (t = n == null ? void 0 : n()) !== null && t !== void 0 ? t : {},
      e
    );
  }
  function fo(n) {
    return "value" in n;
  }
  function Ym(n) {
    if (!Ya(n) || !("binding" in n)) return !1;
    const e = n.binding;
    return om(e);
  }
  const gi = "http://www.w3.org/2000/svg";
  function mo(n) {
    n.offsetHeight;
  }
  function Gm(n, e) {
    const t = n.style.transition;
    (n.style.transition = "none"), e(), (n.style.transition = t);
  }
  function il(n) {
    return n.ontouchstart !== void 0;
  }
  function Xm(n) {
    const e = n.ownerDocument.defaultView;
    return e && "document" in e
      ? n.getContext("2d", { willReadFrequently: !0 })
      : null;
  }
  const Zm = {
    check: '<path d="M2 8l4 4l8 -8"/>',
    dropdown: '<path d="M5 7h6l-3 3 z"/>',
    p2dpad:
      '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>',
  };
  function _o(n, e) {
    const t = n.createElementNS(gi, "svg");
    return (t.innerHTML = Zm[e]), t;
  }
  function wc(n, e, t) {
    n.insertBefore(e, n.children[t]);
  }
  function nl(n) {
    n.parentElement && n.parentElement.removeChild(n);
  }
  function Dc(n) {
    for (; n.children.length > 0; ) n.removeChild(n.children[0]);
  }
  function Qm(n) {
    for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
  }
  function bc(n) {
    return n.relatedTarget
      ? n.relatedTarget
      : "explicitOriginalTarget" in n
      ? n.explicitOriginalTarget
      : null;
  }
  function Oi(n, e) {
    n.emitter.on("change", (t) => {
      e(t.rawValue);
    }),
      e(n.rawValue);
  }
  function wi(n, e, t) {
    Oi(n.value(e), t);
  }
  const Jm = "tp";
  function se(n) {
    return (t, i) =>
      [Jm, "-", n, "v", t ? `_${t}` : "", i ? `-${i}` : ""].join("");
  }
  const os = se("lbl");
  function e_(n, e) {
    const t = n.createDocumentFragment();
    return (
      e
        .split(
          `
`
        )
        .map((r) => n.createTextNode(r))
        .forEach((r, s) => {
          s > 0 && t.appendChild(n.createElement("br")), t.appendChild(r);
        }),
      t
    );
  }
  class t_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(os()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(os("l")),
        wi(t.props, "label", (s) => {
          we(s)
            ? this.element.classList.add(os(void 0, "nol"))
            : (this.element.classList.remove(os(void 0, "nol")),
              Qm(i),
              i.appendChild(e_(e, s)));
        }),
        this.element.appendChild(i),
        (this.labelElement = i);
      const r = e.createElement("div");
      r.classList.add(os("v")),
        this.element.appendChild(r),
        (this.valueElement = r);
    }
  }
  class i_ {
    constructor(e, t) {
      (this.props = t.props),
        (this.valueController = t.valueController),
        (this.viewProps = t.valueController.viewProps),
        (this.view = new t_(e, { props: t.props, viewProps: this.viewProps })),
        this.view.valueElement.appendChild(this.valueController.view.element);
    }
    importProps(e) {
      return _i(
        e,
        null,
        (t) => ({ label: t.optional.string }),
        (t) => (this.props.set("label", t.label), !0)
      );
    }
    exportProps() {
      return vi(null, { label: this.props.get("label") });
    }
  }
  function n_() {
    return ["veryfirst", "first", "last", "verylast"];
  }
  const Cc = se(""),
    yc = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
  class Ec {
    constructor(e) {
      (this.parent_ = null),
        (this.blade = e.blade),
        (this.view = e.view),
        (this.viewProps = e.viewProps);
      const t = this.view.element;
      this.blade.value("positions").emitter.on("change", () => {
        n_().forEach((i) => {
          t.classList.remove(Cc(void 0, yc[i]));
        }),
          this.blade.get("positions").forEach((i) => {
            t.classList.add(Cc(void 0, yc[i]));
          });
      }),
        this.viewProps.handleDispose(() => {
          nl(t);
        });
    }
    get parent() {
      return this.parent_;
    }
    set parent(e) {
      (this.parent_ = e),
        this.viewProps.set(
          "parent",
          this.parent_ ? this.parent_.viewProps : null
        );
    }
    importState(e) {
      return _i(
        e,
        null,
        (t) => ({ disabled: t.required.boolean, hidden: t.required.boolean }),
        (t) => (this.viewProps.importState(t), !0)
      );
    }
    exportState() {
      return vi(null, Object.assign({}, this.viewProps.exportState()));
    }
  }
  class r_ extends Ja {
    get label() {
      return this.controller.labelController.props.get("label");
    }
    set label(e) {
      this.controller.labelController.props.set("label", e);
    }
    get title() {
      var e;
      return (e = this.controller.buttonController.props.get("title")) !==
        null && e !== void 0
        ? e
        : "";
    }
    set title(e) {
      this.controller.buttonController.props.set("title", e);
    }
    on(e, t) {
      const i = t.bind(this);
      return (
        this.controller.buttonController.emitter.on(e, (s) => {
          i(new Um(this, s.nativeEvent));
        }),
        this
      );
    }
    off(e, t) {
      return this.controller.buttonController.emitter.off(e, t), this;
    }
  }
  function s_(n, e, t) {
    t ? n.classList.add(e) : n.classList.remove(e);
  }
  function cr(n, e) {
    return (t) => {
      s_(n, e, t);
    };
  }
  function rl(n, e) {
    Oi(n, (t) => {
      e.textContent = t ?? "";
    });
  }
  const sl = se("btn");
  class o_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(sl()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("button");
      i.classList.add(sl("b")),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.buttonElement = i);
      const r = e.createElement("div");
      r.classList.add(sl("t")),
        rl(t.props.value("title"), r),
        this.buttonElement.appendChild(r);
    }
  }
  class a_ {
    constructor(e, t) {
      (this.emitter = new Bt()),
        (this.onClick_ = this.onClick_.bind(this)),
        (this.props = t.props),
        (this.viewProps = t.viewProps),
        (this.view = new o_(e, {
          props: this.props,
          viewProps: this.viewProps,
        })),
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    importProps(e) {
      return _i(
        e,
        null,
        (t) => ({ title: t.optional.string }),
        (t) => (this.props.set("title", t.title), !0)
      );
    }
    exportProps() {
      return vi(null, { title: this.props.get("title") });
    }
    onClick_(e) {
      this.emitter.emit("click", { nativeEvent: e, sender: this });
    }
  }
  class xc extends Ec {
    constructor(e, t) {
      const i = new a_(e, { props: t.buttonProps, viewProps: t.viewProps }),
        r = new i_(e, {
          blade: t.blade,
          props: t.labelProps,
          valueController: i,
        });
      super({ blade: t.blade, view: r.view, viewProps: t.viewProps }),
        (this.buttonController = i),
        (this.labelController = r);
    }
    importState(e) {
      return _i(
        e,
        (t) =>
          super.importState(t) &&
          this.buttonController.importProps(t) &&
          this.labelController.importProps(t),
        () => ({}),
        () => !0
      );
    }
    exportState() {
      return vi(
        () => super.exportState(),
        Object.assign(
          Object.assign({}, this.buttonController.exportProps()),
          this.labelController.exportProps()
        )
      );
    }
  }
  class Pc {
    constructor(e) {
      const [t, i] = e.split("-"),
        r = t.split(".");
      (this.major = parseInt(r[0], 10)),
        (this.minor = parseInt(r[1], 10)),
        (this.patch = parseInt(r[2], 10)),
        (this.prerelease = i ?? null);
    }
    toString() {
      const e = [this.major, this.minor, this.patch].join(".");
      return this.prerelease !== null ? [e, this.prerelease].join("-") : e;
    }
  }
  const l_ = new Pc("2.0.5");
  function pt(n) {
    return Object.assign({ core: l_ }, n);
  }
  pt({
    id: "button",
    type: "blade",
    accept(n) {
      const e = et(n, (t) => ({
        title: t.required.string,
        view: t.required.constant("button"),
        label: t.optional.string,
      }));
      return e ? { params: e } : null;
    },
    controller(n) {
      return new xc(n.document, {
        blade: n.blade,
        buttonProps: re.fromObject({ title: n.params.title }),
        labelProps: re.fromObject({ label: n.params.label }),
        viewProps: n.viewProps,
      });
    },
    api(n) {
      return n.controller instanceof xc ? new r_(n.controller) : null;
    },
  });
  function u_(n, e) {
    return n.addBlade(Object.assign(Object.assign({}, e), { view: "button" }));
  }
  function h_(n, e) {
    return n.addBlade(Object.assign(Object.assign({}, e), { view: "folder" }));
  }
  function c_(n, e) {
    return n.addBlade(Object.assign(Object.assign({}, e), { view: "tab" }));
  }
  function d_(n) {
    return Ya(n) ? "refresh" in n && typeof n.refresh == "function" : !1;
  }
  function p_(n, e) {
    if (!ho.isBindable(n)) throw Vt.notBindable();
    return new ho(n, e);
  }
  class f_ {
    constructor(e, t) {
      (this.onRackValueChange_ = this.onRackValueChange_.bind(this)),
        (this.controller_ = e),
        (this.emitter_ = new Bt()),
        (this.pool_ = t),
        this.controller_.rack.emitter.on(
          "valuechange",
          this.onRackValueChange_
        );
    }
    get children() {
      return this.controller_.rack.children.map((e) => this.pool_.createApi(e));
    }
    addBinding(e, t, i) {
      const r = i ?? {},
        s = this.controller_.element.ownerDocument,
        o = this.pool_.createBinding(s, p_(e, t), r),
        a = this.pool_.createBindingApi(o);
      return this.add(a, r.index);
    }
    addFolder(e) {
      return h_(this, e);
    }
    addButton(e) {
      return u_(this, e);
    }
    addTab(e) {
      return c_(this, e);
    }
    add(e, t) {
      const i = e.controller;
      return this.controller_.rack.add(i, t), e;
    }
    remove(e) {
      this.controller_.rack.remove(e.controller);
    }
    addBlade(e) {
      const t = this.controller_.element.ownerDocument,
        i = this.pool_.createBlade(t, e),
        r = this.pool_.createApi(i);
      return this.add(r, e.index);
    }
    on(e, t) {
      const i = t.bind(this);
      return (
        this.emitter_.on(
          e,
          (r) => {
            i(r);
          },
          { key: t }
        ),
        this
      );
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    refresh() {
      this.children.forEach((e) => {
        d_(e) && e.refresh();
      });
    }
    onRackValueChange_(e) {
      const t = e.bladeController,
        i = this.pool_.createApi(t),
        r = Ym(t.value) ? t.value.binding : null;
      this.emitter_.emit(
        "change",
        new vc(i, r ? r.target.read() : t.value.rawValue, e.options.last)
      );
    }
  }
  class ol extends Ja {
    constructor(e, t) {
      super(e), (this.rackApi_ = new f_(e.rackController, t));
    }
    refresh() {
      this.rackApi_.refresh();
    }
  }
  class al extends Ec {
    constructor(e) {
      super({
        blade: e.blade,
        view: e.view,
        viewProps: e.rackController.viewProps,
      }),
        (this.rackController = e.rackController);
    }
    importState(e) {
      return _i(
        e,
        (t) => super.importState(t),
        (t) => ({ children: t.required.array(t.required.raw) }),
        (t) =>
          this.rackController.rack.children.every((i, r) =>
            i.importState(t.children[r])
          )
      );
    }
    exportState() {
      return vi(() => super.exportState(), {
        children: this.rackController.rack.children.map((e) => e.exportState()),
      });
    }
  }
  function ll(n) {
    return "rackController" in n;
  }
  class m_ {
    constructor(e) {
      (this.emitter = new Bt()),
        (this.items_ = []),
        (this.cache_ = new Set()),
        (this.onSubListAdd_ = this.onSubListAdd_.bind(this)),
        (this.onSubListRemove_ = this.onSubListRemove_.bind(this)),
        (this.extract_ = e);
    }
    get items() {
      return this.items_;
    }
    allItems() {
      return Array.from(this.cache_);
    }
    find(e) {
      for (const t of this.allItems()) if (e(t)) return t;
      return null;
    }
    includes(e) {
      return this.cache_.has(e);
    }
    add(e, t) {
      if (this.includes(e)) throw Vt.shouldNeverHappen();
      const i = t !== void 0 ? t : this.items_.length;
      this.items_.splice(i, 0, e), this.cache_.add(e);
      const r = this.extract_(e);
      r &&
        (r.emitter.on("add", this.onSubListAdd_),
        r.emitter.on("remove", this.onSubListRemove_),
        r.allItems().forEach((s) => {
          this.cache_.add(s);
        })),
        this.emitter.emit("add", {
          index: i,
          item: e,
          root: this,
          target: this,
        });
    }
    remove(e) {
      const t = this.items_.indexOf(e);
      if (t < 0) return;
      this.items_.splice(t, 1), this.cache_.delete(e);
      const i = this.extract_(e);
      i &&
        (i.allItems().forEach((r) => {
          this.cache_.delete(r);
        }),
        i.emitter.off("add", this.onSubListAdd_),
        i.emitter.off("remove", this.onSubListRemove_)),
        this.emitter.emit("remove", {
          index: t,
          item: e,
          root: this,
          target: this,
        });
    }
    onSubListAdd_(e) {
      this.cache_.add(e.item),
        this.emitter.emit("add", {
          index: e.index,
          item: e.item,
          root: this,
          target: e.target,
        });
    }
    onSubListRemove_(e) {
      this.cache_.delete(e.item),
        this.emitter.emit("remove", {
          index: e.index,
          item: e.item,
          root: this,
          target: e.target,
        });
    }
  }
  function __(n, e) {
    for (let t = 0; t < n.length; t++) {
      const i = n[t];
      if (fo(i) && i.value === e) return i;
    }
    return null;
  }
  function v_(n) {
    return ll(n) ? n.rackController.rack.bcSet_ : null;
  }
  class g_ {
    constructor(e) {
      var t, i;
      (this.emitter = new Bt()),
        (this.onBladePositionsChange_ =
          this.onBladePositionsChange_.bind(this)),
        (this.onSetAdd_ = this.onSetAdd_.bind(this)),
        (this.onSetRemove_ = this.onSetRemove_.bind(this)),
        (this.onChildDispose_ = this.onChildDispose_.bind(this)),
        (this.onChildPositionsChange_ =
          this.onChildPositionsChange_.bind(this)),
        (this.onChildValueChange_ = this.onChildValueChange_.bind(this)),
        (this.onChildViewPropsChange_ =
          this.onChildViewPropsChange_.bind(this)),
        (this.onRackLayout_ = this.onRackLayout_.bind(this)),
        (this.onRackValueChange_ = this.onRackValueChange_.bind(this)),
        (this.blade_ = (t = e.blade) !== null && t !== void 0 ? t : null),
        (i = this.blade_) === null ||
          i === void 0 ||
          i
            .value("positions")
            .emitter.on("change", this.onBladePositionsChange_),
        (this.viewProps = e.viewProps),
        (this.bcSet_ = new m_(v_)),
        this.bcSet_.emitter.on("add", this.onSetAdd_),
        this.bcSet_.emitter.on("remove", this.onSetRemove_);
    }
    get children() {
      return this.bcSet_.items;
    }
    add(e, t) {
      var i;
      (i = e.parent) === null || i === void 0 || i.remove(e),
        (e.parent = this),
        this.bcSet_.add(e, t);
    }
    remove(e) {
      (e.parent = null), this.bcSet_.remove(e);
    }
    find(e) {
      return this.bcSet_.allItems().filter(e);
    }
    onSetAdd_(e) {
      this.updatePositions_();
      const t = e.target === e.root;
      if (
        (this.emitter.emit("add", {
          bladeController: e.item,
          index: e.index,
          root: t,
          sender: this,
        }),
        !t)
      )
        return;
      const i = e.item;
      if (
        (i.viewProps.emitter.on("change", this.onChildViewPropsChange_),
        i.blade
          .value("positions")
          .emitter.on("change", this.onChildPositionsChange_),
        i.viewProps.handleDispose(this.onChildDispose_),
        fo(i))
      )
        i.value.emitter.on("change", this.onChildValueChange_);
      else if (ll(i)) {
        const r = i.rackController.rack;
        if (r) {
          const s = r.emitter;
          s.on("layout", this.onRackLayout_),
            s.on("valuechange", this.onRackValueChange_);
        }
      }
    }
    onSetRemove_(e) {
      this.updatePositions_();
      const t = e.target === e.root;
      if (
        (this.emitter.emit("remove", {
          bladeController: e.item,
          root: t,
          sender: this,
        }),
        !t)
      )
        return;
      const i = e.item;
      if (fo(i)) i.value.emitter.off("change", this.onChildValueChange_);
      else if (ll(i)) {
        const r = i.rackController.rack;
        if (r) {
          const s = r.emitter;
          s.off("layout", this.onRackLayout_),
            s.off("valuechange", this.onRackValueChange_);
        }
      }
    }
    updatePositions_() {
      const e = this.bcSet_.items.filter((r) => !r.viewProps.get("hidden")),
        t = e[0],
        i = e[e.length - 1];
      this.bcSet_.items.forEach((r) => {
        const s = [];
        r === t &&
          (s.push("first"),
          (!this.blade_ ||
            this.blade_.get("positions").includes("veryfirst")) &&
            s.push("veryfirst")),
          r === i &&
            (s.push("last"),
            (!this.blade_ ||
              this.blade_.get("positions").includes("verylast")) &&
              s.push("verylast")),
          r.blade.set("positions", s);
      });
    }
    onChildPositionsChange_() {
      this.updatePositions_(), this.emitter.emit("layout", { sender: this });
    }
    onChildViewPropsChange_(e) {
      this.updatePositions_(), this.emitter.emit("layout", { sender: this });
    }
    onChildDispose_() {
      this.bcSet_.items
        .filter((t) => t.viewProps.get("disposed"))
        .forEach((t) => {
          this.bcSet_.remove(t);
        });
    }
    onChildValueChange_(e) {
      const t = __(this.find(fo), e.sender);
      if (!t) throw Vt.alreadyDisposed();
      this.emitter.emit("valuechange", {
        bladeController: t,
        options: e.options,
        sender: this,
      });
    }
    onRackLayout_(e) {
      this.updatePositions_(), this.emitter.emit("layout", { sender: this });
    }
    onRackValueChange_(e) {
      this.emitter.emit("valuechange", {
        bladeController: e.bladeController,
        options: e.options,
        sender: this,
      });
    }
    onBladePositionsChange_() {
      this.updatePositions_();
    }
  }
  class ul {
    constructor(e) {
      (this.onRackAdd_ = this.onRackAdd_.bind(this)),
        (this.onRackRemove_ = this.onRackRemove_.bind(this)),
        (this.element = e.element),
        (this.viewProps = e.viewProps);
      const t = new g_({
        blade: e.root ? void 0 : e.blade,
        viewProps: e.viewProps,
      });
      t.emitter.on("add", this.onRackAdd_),
        t.emitter.on("remove", this.onRackRemove_),
        (this.rack = t),
        this.viewProps.handleDispose(() => {
          for (let i = this.rack.children.length - 1; i >= 0; i--)
            this.rack.children[i].viewProps.set("disposed", !0);
        });
    }
    onRackAdd_(e) {
      e.root && wc(this.element, e.bladeController.view.element, e.index);
    }
    onRackRemove_(e) {
      e.root && nl(e.bladeController.view.element);
    }
  }
  function Sc() {
    return new re({ positions: $e([], { equals: sm }) });
  }
  class as extends re {
    constructor(e) {
      super(e);
    }
    static create(e) {
      const t = {
          completed: !0,
          expanded: e,
          expandedHeight: null,
          shouldFixHeight: !1,
          temporaryExpanded: null,
        },
        i = re.createCore(t);
      return new as(i);
    }
    get styleExpanded() {
      var e;
      return (e = this.get("temporaryExpanded")) !== null && e !== void 0
        ? e
        : this.get("expanded");
    }
    get styleHeight() {
      if (!this.styleExpanded) return "0";
      const e = this.get("expandedHeight");
      return this.get("shouldFixHeight") && !we(e) ? `${e}px` : "auto";
    }
    bindExpandedClass(e, t) {
      const i = () => {
        this.styleExpanded ? e.classList.add(t) : e.classList.remove(t);
      };
      wi(this, "expanded", i), wi(this, "temporaryExpanded", i);
    }
    cleanUpTransition() {
      this.set("shouldFixHeight", !1),
        this.set("expandedHeight", null),
        this.set("completed", !0);
    }
  }
  function w_(n, e) {
    let t = 0;
    return (
      Gm(e, () => {
        n.set("expandedHeight", null),
          n.set("temporaryExpanded", !0),
          mo(e),
          (t = e.clientHeight),
          n.set("temporaryExpanded", null),
          mo(e);
      }),
      t
    );
  }
  function Tc(n, e) {
    e.style.height = n.styleHeight;
  }
  function hl(n, e) {
    n.value("expanded").emitter.on("beforechange", () => {
      if ((n.set("completed", !1), we(n.get("expandedHeight")))) {
        const t = w_(n, e);
        t > 0 && n.set("expandedHeight", t);
      }
      n.set("shouldFixHeight", !0), mo(e);
    }),
      n.emitter.on("change", () => {
        Tc(n, e);
      }),
      Tc(n, e),
      e.addEventListener("transitionend", (t) => {
        t.propertyName === "height" && n.cleanUpTransition();
      });
  }
  class D_ extends ol {
    constructor(e, t) {
      super(e, t),
        (this.emitter_ = new Bt()),
        this.controller.foldable.value("expanded").emitter.on("change", (i) => {
          this.emitter_.emit("fold", new jm(this, i.sender.rawValue));
        }),
        this.rackApi_.on("change", (i) => {
          this.emitter_.emit("change", i);
        });
    }
    get expanded() {
      return this.controller.foldable.get("expanded");
    }
    set expanded(e) {
      this.controller.foldable.set("expanded", e);
    }
    get title() {
      return this.controller.props.get("title");
    }
    set title(e) {
      this.controller.props.set("title", e);
    }
    get children() {
      return this.rackApi_.children;
    }
    addBinding(e, t, i) {
      return this.rackApi_.addBinding(e, t, i);
    }
    addFolder(e) {
      return this.rackApi_.addFolder(e);
    }
    addButton(e) {
      return this.rackApi_.addButton(e);
    }
    addTab(e) {
      return this.rackApi_.addTab(e);
    }
    add(e, t) {
      return this.rackApi_.add(e, t);
    }
    remove(e) {
      this.rackApi_.remove(e);
    }
    addBlade(e) {
      return this.rackApi_.addBlade(e);
    }
    on(e, t) {
      const i = t.bind(this);
      return (
        this.emitter_.on(
          e,
          (r) => {
            i(r);
          },
          { key: t }
        ),
        this
      );
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
  }
  const Fc = se("cnt");
  class b_ {
    constructor(e, t) {
      var i;
      (this.className_ = se(
        (i = t.viewName) !== null && i !== void 0 ? i : "fld"
      )),
        (this.element = e.createElement("div")),
        this.element.classList.add(this.className_(), Fc()),
        t.viewProps.bindClassModifiers(this.element),
        (this.foldable_ = t.foldable),
        this.foldable_.bindExpandedClass(
          this.element,
          this.className_(void 0, "expanded")
        ),
        wi(
          this.foldable_,
          "completed",
          cr(this.element, this.className_(void 0, "cpl"))
        );
      const r = e.createElement("button");
      r.classList.add(this.className_("b")),
        wi(t.props, "title", (u) => {
          we(u)
            ? this.element.classList.add(this.className_(void 0, "not"))
            : this.element.classList.remove(this.className_(void 0, "not"));
        }),
        t.viewProps.bindDisabled(r),
        this.element.appendChild(r),
        (this.buttonElement = r);
      const s = e.createElement("div");
      s.classList.add(this.className_("i")), this.element.appendChild(s);
      const o = e.createElement("div");
      o.classList.add(this.className_("t")),
        rl(t.props.value("title"), o),
        this.buttonElement.appendChild(o),
        (this.titleElement = o);
      const a = e.createElement("div");
      a.classList.add(this.className_("m")), this.buttonElement.appendChild(a);
      const l = e.createElement("div");
      l.classList.add(this.className_("c")),
        this.element.appendChild(l),
        (this.containerElement = l);
    }
  }
  class kc extends al {
    constructor(e, t) {
      var i;
      const r = as.create((i = t.expanded) !== null && i !== void 0 ? i : !0),
        s = new b_(e, {
          foldable: r,
          props: t.props,
          viewName: t.root ? "rot" : void 0,
          viewProps: t.viewProps,
        });
      super(
        Object.assign(Object.assign({}, t), {
          rackController: new ul({
            blade: t.blade,
            element: s.containerElement,
            root: t.root,
            viewProps: t.viewProps,
          }),
          view: s,
        })
      ),
        (this.onTitleClick_ = this.onTitleClick_.bind(this)),
        (this.props = t.props),
        (this.foldable = r),
        hl(this.foldable, this.view.containerElement),
        this.rackController.rack.emitter.on("add", () => {
          this.foldable.cleanUpTransition();
        }),
        this.rackController.rack.emitter.on("remove", () => {
          this.foldable.cleanUpTransition();
        }),
        this.view.buttonElement.addEventListener("click", this.onTitleClick_);
    }
    get document() {
      return this.view.element.ownerDocument;
    }
    importState(e) {
      return _i(
        e,
        (t) => super.importState(t),
        (t) => ({ expanded: t.required.boolean, title: t.optional.string }),
        (t) => (
          this.foldable.set("expanded", t.expanded),
          this.props.set("title", t.title),
          !0
        )
      );
    }
    exportState() {
      return vi(() => super.exportState(), {
        expanded: this.foldable.get("expanded"),
        title: this.props.get("title"),
      });
    }
    onTitleClick_() {
      this.foldable.set("expanded", !this.foldable.get("expanded"));
    }
  }
  pt({
    id: "folder",
    type: "blade",
    accept(n) {
      const e = et(n, (t) => ({
        title: t.required.string,
        view: t.required.constant("folder"),
        expanded: t.optional.boolean,
      }));
      return e ? { params: e } : null;
    },
    controller(n) {
      return new kc(n.document, {
        blade: n.blade,
        expanded: n.params.expanded,
        props: re.fromObject({ title: n.params.title }),
        viewProps: n.viewProps,
      });
    },
    api(n) {
      return n.controller instanceof kc ? new D_(n.controller, n.pool) : null;
    },
  });
  const C_ = se("");
  function Ac(n, e) {
    return cr(n, C_(void 0, e));
  }
  class ls extends re {
    constructor(e) {
      var t;
      super(e),
        (this.onDisabledChange_ = this.onDisabledChange_.bind(this)),
        (this.onParentChange_ = this.onParentChange_.bind(this)),
        (this.onParentGlobalDisabledChange_ =
          this.onParentGlobalDisabledChange_.bind(this)),
        ([this.globalDisabled_, this.setGlobalDisabled_] = cm(
          $e(this.getGlobalDisabled_())
        )),
        this.value("disabled").emitter.on("change", this.onDisabledChange_),
        this.value("parent").emitter.on("change", this.onParentChange_),
        (t = this.get("parent")) === null ||
          t === void 0 ||
          t.globalDisabled.emitter.on(
            "change",
            this.onParentGlobalDisabledChange_
          );
    }
    static create(e) {
      var t, i, r;
      const s = e ?? {};
      return new ls(
        re.createCore({
          disabled: (t = s.disabled) !== null && t !== void 0 ? t : !1,
          disposed: !1,
          hidden: (i = s.hidden) !== null && i !== void 0 ? i : !1,
          parent: (r = s.parent) !== null && r !== void 0 ? r : null,
        })
      );
    }
    get globalDisabled() {
      return this.globalDisabled_;
    }
    bindClassModifiers(e) {
      Oi(this.globalDisabled_, Ac(e, "disabled")),
        wi(this, "hidden", Ac(e, "hidden"));
    }
    bindDisabled(e) {
      Oi(this.globalDisabled_, (t) => {
        e.disabled = t;
      });
    }
    bindTabIndex(e) {
      Oi(this.globalDisabled_, (t) => {
        e.tabIndex = t ? -1 : 0;
      });
    }
    handleDispose(e) {
      this.value("disposed").emitter.on("change", (t) => {
        t && e();
      });
    }
    importState(e) {
      this.set("disabled", e.disabled), this.set("hidden", e.hidden);
    }
    exportState() {
      return { disabled: this.get("disabled"), hidden: this.get("hidden") };
    }
    getGlobalDisabled_() {
      const e = this.get("parent");
      return (e ? e.globalDisabled.rawValue : !1) || this.get("disabled");
    }
    updateGlobalDisabled_() {
      this.setGlobalDisabled_(this.getGlobalDisabled_());
    }
    onDisabledChange_() {
      this.updateGlobalDisabled_();
    }
    onParentGlobalDisabledChange_() {
      this.updateGlobalDisabled_();
    }
    onParentChange_(e) {
      var t;
      const i = e.previousRawValue;
      i == null ||
        i.globalDisabled.emitter.off(
          "change",
          this.onParentGlobalDisabledChange_
        ),
        (t = this.get("parent")) === null ||
          t === void 0 ||
          t.globalDisabled.emitter.on(
            "change",
            this.onParentGlobalDisabledChange_
          ),
        this.updateGlobalDisabled_();
    }
  }
  const Oc = se("tbp");
  class y_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(Oc()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(Oc("c")),
        this.element.appendChild(i),
        (this.containerElement = i);
    }
  }
  const us = se("tbi");
  class E_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(us()),
        t.viewProps.bindClassModifiers(this.element),
        wi(t.props, "selected", (s) => {
          s
            ? this.element.classList.add(us(void 0, "sel"))
            : this.element.classList.remove(us(void 0, "sel"));
        });
      const i = e.createElement("button");
      i.classList.add(us("b")),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.buttonElement = i);
      const r = e.createElement("div");
      r.classList.add(us("t")),
        rl(t.props.value("title"), r),
        this.buttonElement.appendChild(r),
        (this.titleElement = r);
    }
  }
  class x_ {
    constructor(e, t) {
      (this.emitter = new Bt()),
        (this.onClick_ = this.onClick_.bind(this)),
        (this.props = t.props),
        (this.viewProps = t.viewProps),
        (this.view = new E_(e, { props: t.props, viewProps: t.viewProps })),
        this.view.buttonElement.addEventListener("click", this.onClick_);
    }
    onClick_() {
      this.emitter.emit("click", { sender: this });
    }
  }
  class cl extends al {
    constructor(e, t) {
      const i = new y_(e, { viewProps: t.viewProps });
      super(
        Object.assign(Object.assign({}, t), {
          rackController: new ul({
            blade: t.blade,
            element: i.containerElement,
            viewProps: t.viewProps,
          }),
          view: i,
        })
      ),
        (this.onItemClick_ = this.onItemClick_.bind(this)),
        (this.ic_ = new x_(e, { props: t.itemProps, viewProps: ls.create() })),
        this.ic_.emitter.on("click", this.onItemClick_),
        (this.props = t.props),
        wi(this.props, "selected", (r) => {
          this.itemController.props.set("selected", r),
            this.viewProps.set("hidden", !r);
        });
    }
    get itemController() {
      return this.ic_;
    }
    importState(e) {
      return _i(
        e,
        (t) => super.importState(t),
        (t) => ({ selected: t.required.boolean, title: t.required.string }),
        (t) => (
          this.ic_.props.set("selected", t.selected),
          this.ic_.props.set("title", t.title),
          !0
        )
      );
    }
    exportState() {
      return vi(() => super.exportState(), {
        selected: this.ic_.props.get("selected"),
        title: this.ic_.props.get("title"),
      });
    }
    onItemClick_() {
      this.props.set("selected", !0);
    }
  }
  class P_ extends ol {
    constructor(e, t) {
      super(e, t),
        (this.emitter_ = new Bt()),
        (this.onSelect_ = this.onSelect_.bind(this)),
        (this.pool_ = t),
        this.rackApi_.on("change", (i) => {
          this.emitter_.emit("change", i);
        }),
        this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
    }
    get pages() {
      return this.rackApi_.children;
    }
    addPage(e) {
      const t = this.controller.view.element.ownerDocument,
        i = new cl(t, {
          blade: Sc(),
          itemProps: re.fromObject({ selected: !1, title: e.title }),
          props: re.fromObject({ selected: !1 }),
          viewProps: ls.create(),
        }),
        r = this.pool_.createApi(i);
      return this.rackApi_.add(r, e.index);
    }
    removePage(e) {
      this.rackApi_.remove(this.rackApi_.children[e]);
    }
    on(e, t) {
      const i = t.bind(this);
      return (
        this.emitter_.on(
          e,
          (r) => {
            i(r);
          },
          { key: t }
        ),
        this
      );
    }
    off(e, t) {
      return this.emitter_.off(e, t), this;
    }
    onSelect_(e) {
      this.emitter_.emit("select", new Hm(this, e.rawValue));
    }
  }
  class S_ extends ol {
    get title() {
      var e;
      return (e = this.controller.itemController.props.get("title")) !== null &&
        e !== void 0
        ? e
        : "";
    }
    set title(e) {
      this.controller.itemController.props.set("title", e);
    }
    get selected() {
      return this.controller.props.get("selected");
    }
    set selected(e) {
      this.controller.props.set("selected", e);
    }
    get children() {
      return this.rackApi_.children;
    }
    addButton(e) {
      return this.rackApi_.addButton(e);
    }
    addFolder(e) {
      return this.rackApi_.addFolder(e);
    }
    addTab(e) {
      return this.rackApi_.addTab(e);
    }
    add(e, t) {
      this.rackApi_.add(e, t);
    }
    remove(e) {
      this.rackApi_.remove(e);
    }
    addBinding(e, t, i) {
      return this.rackApi_.addBinding(e, t, i);
    }
    addBlade(e) {
      return this.rackApi_.addBlade(e);
    }
  }
  const Mc = -1;
  class T_ {
    constructor() {
      (this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this)),
        (this.empty = $e(!0)),
        (this.selectedIndex = $e(Mc)),
        (this.items_ = []);
    }
    add(e, t) {
      const i = t ?? this.items_.length;
      this.items_.splice(i, 0, e),
        e.emitter.on("change", this.onItemSelectedChange_),
        this.keepSelection_();
    }
    remove(e) {
      const t = this.items_.indexOf(e);
      t < 0 ||
        (this.items_.splice(t, 1),
        e.emitter.off("change", this.onItemSelectedChange_),
        this.keepSelection_());
    }
    keepSelection_() {
      if (this.items_.length === 0) {
        (this.selectedIndex.rawValue = Mc), (this.empty.rawValue = !0);
        return;
      }
      const e = this.items_.findIndex((t) => t.rawValue);
      e < 0
        ? (this.items_.forEach((t, i) => {
            t.rawValue = i === 0;
          }),
          (this.selectedIndex.rawValue = 0))
        : (this.items_.forEach((t, i) => {
            t.rawValue = i === e;
          }),
          (this.selectedIndex.rawValue = e)),
        (this.empty.rawValue = !1);
    }
    onItemSelectedChange_(e) {
      if (e.rawValue) {
        const t = this.items_.findIndex((i) => i === e.sender);
        this.items_.forEach((i, r) => {
          i.rawValue = r === t;
        }),
          (this.selectedIndex.rawValue = t);
      } else this.keepSelection_();
    }
  }
  const hs = se("tab");
  class F_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(hs(), Fc()),
        t.viewProps.bindClassModifiers(this.element),
        Oi(t.empty, cr(this.element, hs(void 0, "nop")));
      const i = e.createElement("div");
      i.classList.add(hs("t")),
        this.element.appendChild(i),
        (this.itemsElement = i);
      const r = e.createElement("div");
      r.classList.add(hs("i")), this.element.appendChild(r);
      const s = e.createElement("div");
      s.classList.add(hs("c")),
        this.element.appendChild(s),
        (this.contentsElement = s);
    }
  }
  class Lc extends al {
    constructor(e, t) {
      const i = new T_(),
        r = new F_(e, { empty: i.empty, viewProps: t.viewProps });
      super({
        blade: t.blade,
        rackController: new ul({
          blade: t.blade,
          element: r.contentsElement,
          viewProps: t.viewProps,
        }),
        view: r,
      }),
        (this.onRackAdd_ = this.onRackAdd_.bind(this)),
        (this.onRackRemove_ = this.onRackRemove_.bind(this));
      const s = this.rackController.rack;
      s.emitter.on("add", this.onRackAdd_),
        s.emitter.on("remove", this.onRackRemove_),
        (this.tab = i);
    }
    add(e, t) {
      this.rackController.rack.add(e, t);
    }
    remove(e) {
      this.rackController.rack.remove(this.rackController.rack.children[e]);
    }
    onRackAdd_(e) {
      if (!e.root) return;
      const t = e.bladeController;
      wc(this.view.itemsElement, t.itemController.view.element, e.index),
        t.itemController.viewProps.set("parent", this.viewProps),
        this.tab.add(t.props.value("selected"));
    }
    onRackRemove_(e) {
      if (!e.root) return;
      const t = e.bladeController;
      nl(t.itemController.view.element),
        t.itemController.viewProps.set("parent", null),
        this.tab.remove(t.props.value("selected"));
    }
  }
  pt({
    id: "tab",
    type: "blade",
    accept(n) {
      const e = et(n, (t) => ({
        pages: t.required.array(
          t.required.object({ title: t.required.string })
        ),
        view: t.required.constant("tab"),
      }));
      return !e || e.pages.length === 0 ? null : { params: e };
    },
    controller(n) {
      const e = new Lc(n.document, { blade: n.blade, viewProps: n.viewProps });
      return (
        n.params.pages.forEach((t) => {
          const i = new cl(n.document, {
            blade: Sc(),
            itemProps: re.fromObject({ selected: !1, title: t.title }),
            props: re.fromObject({ selected: !1 }),
            viewProps: ls.create(),
          });
          e.add(i);
        }),
        e
      );
    },
    api(n) {
      return n.controller instanceof Lc
        ? new P_(n.controller, n.pool)
        : n.controller instanceof cl
        ? new S_(n.controller, n.pool)
        : null;
    },
  });
  class dl extends el {
    get options() {
      return this.controller.valueController.props.get("options");
    }
    set options(e) {
      this.controller.valueController.props.set("options", e);
    }
  }
  class cs {
    constructor(e) {
      this.constraints = e;
    }
    constrain(e) {
      return this.constraints.reduce((t, i) => i.constrain(t), e);
    }
  }
  function vo(n, e) {
    if (n instanceof e) return n;
    if (n instanceof cs) {
      const t = n.constraints.reduce(
        (i, r) => i || (r instanceof e ? r : null),
        null
      );
      if (t) return t;
    }
    return null;
  }
  class go {
    constructor(e) {
      this.values = re.fromObject({ options: e });
    }
    constrain(e) {
      const t = this.values.get("options");
      return t.length === 0 || t.filter((r) => r.value === e).length > 0
        ? e
        : t[0].value;
    }
  }
  function wo(n) {
    var e;
    const t = tl;
    if (Array.isArray(n))
      return (e = et({ items: n }, (i) => ({
        items: i.required.array(
          i.required.object({ text: i.required.string, value: i.required.raw })
        ),
      }))) === null || e === void 0
        ? void 0
        : e.items;
    if (typeof n == "object") return t.required.raw(n).value;
  }
  function Rc(n) {
    if (Array.isArray(n)) return n;
    const e = [];
    return (
      Object.keys(n).forEach((t) => {
        e.push({ text: t, value: n[t] });
      }),
      e
    );
  }
  function pl(n) {
    return we(n) ? null : new go(Rc(n));
  }
  const fl = se("lst");
  class k_ {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.props_ = t.props),
        (this.element = e.createElement("div")),
        this.element.classList.add(fl()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("select");
      i.classList.add(fl("s")),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.selectElement = i);
      const r = e.createElement("div");
      r.classList.add(fl("m")),
        r.appendChild(_o(e, "dropdown")),
        this.element.appendChild(r),
        t.value.emitter.on("change", this.onValueChange_),
        (this.value_ = t.value),
        wi(this.props_, "options", (s) => {
          Dc(this.selectElement),
            s.forEach((o) => {
              const a = e.createElement("option");
              (a.textContent = o.text), this.selectElement.appendChild(a);
            }),
            this.update_();
        });
    }
    update_() {
      const e = this.props_.get("options").map((t) => t.value);
      this.selectElement.selectedIndex = e.indexOf(this.value_.rawValue);
    }
    onValueChange_() {
      this.update_();
    }
  }
  class dr {
    constructor(e, t) {
      (this.onSelectChange_ = this.onSelectChange_.bind(this)),
        (this.props = t.props),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new k_(e, {
          props: this.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        this.view.selectElement.addEventListener(
          "change",
          this.onSelectChange_
        );
    }
    onSelectChange_(e) {
      const t = e.currentTarget;
      this.value.rawValue = this.props.get("options")[t.selectedIndex].value;
    }
    importProps(e) {
      return _i(
        e,
        null,
        (t) => ({ options: t.required.custom(wo) }),
        (t) => (this.props.set("options", Rc(t.options)), !0)
      );
    }
    exportProps() {
      return vi(null, { options: this.props.get("options") });
    }
  }
  const Vc = se("pop");
  class A_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(Vc()),
        t.viewProps.bindClassModifiers(this.element),
        Oi(t.shows, cr(this.element, Vc(void 0, "v")));
    }
  }
  class Bc {
    constructor(e, t) {
      (this.shows = $e(!1)),
        (this.viewProps = t.viewProps),
        (this.view = new A_(e, {
          shows: this.shows,
          viewProps: this.viewProps,
        }));
    }
  }
  const Nc = se("txt");
  class O_ {
    constructor(e, t) {
      (this.onChange_ = this.onChange_.bind(this)),
        (this.element = e.createElement("div")),
        this.element.classList.add(Nc()),
        t.viewProps.bindClassModifiers(this.element),
        (this.props_ = t.props),
        this.props_.emitter.on("change", this.onChange_);
      const i = e.createElement("input");
      i.classList.add(Nc("i")),
        (i.type = "text"),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.inputElement = i),
        t.value.emitter.on("change", this.onChange_),
        (this.value_ = t.value),
        this.refresh();
    }
    refresh() {
      const e = this.props_.get("formatter");
      this.inputElement.value = e(this.value_.rawValue);
    }
    onChange_() {
      this.refresh();
    }
  }
  class ml {
    constructor(e, t) {
      (this.onInputChange_ = this.onInputChange_.bind(this)),
        (this.parser_ = t.parser),
        (this.props = t.props),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new O_(e, {
          props: t.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        this.view.inputElement.addEventListener("change", this.onInputChange_);
    }
    onInputChange_(e) {
      const i = e.currentTarget.value,
        r = this.parser_(i);
      we(r) || (this.value.rawValue = r), this.view.refresh();
    }
  }
  function M_(n) {
    return String(n);
  }
  function Ic(n) {
    return n === "false" ? !1 : !!n;
  }
  function zc(n) {
    return M_(n);
  }
  function L_(n) {
    return (e) => n.reduce((t, i) => (t !== null ? t : i(e)), null);
  }
  const R_ = Et(0);
  function Do(n) {
    return R_(n) + "%";
  }
  function $c(n) {
    return String(n);
  }
  function _l(n) {
    return n;
  }
  function pr({ primary: n, secondary: e, forward: t, backward: i }) {
    let r = !1;
    function s(o) {
      r || ((r = !0), o(), (r = !1));
    }
    n.emitter.on("change", (o) => {
      s(() => {
        e.setRawValue(t(n.rawValue, e.rawValue), o.options);
      });
    }),
      e.emitter.on("change", (o) => {
        s(() => {
          n.setRawValue(i(n.rawValue, e.rawValue), o.options);
        }),
          s(() => {
            e.setRawValue(t(n.rawValue, e.rawValue), o.options);
          });
      }),
      s(() => {
        e.setRawValue(t(n.rawValue, e.rawValue), { forceEmit: !1, last: !0 });
      });
  }
  function xt(n, e) {
    const t = n * (e.altKey ? 0.1 : 1) * (e.shiftKey ? 10 : 1);
    return e.upKey ? +t : e.downKey ? -t : 0;
  }
  function ds(n) {
    return {
      altKey: n.altKey,
      downKey: n.key === "ArrowDown",
      shiftKey: n.shiftKey,
      upKey: n.key === "ArrowUp",
    };
  }
  function Mi(n) {
    return {
      altKey: n.altKey,
      downKey: n.key === "ArrowLeft",
      shiftKey: n.shiftKey,
      upKey: n.key === "ArrowRight",
    };
  }
  function V_(n) {
    return n === "ArrowUp" || n === "ArrowDown";
  }
  function jc(n) {
    return V_(n) || n === "ArrowLeft" || n === "ArrowRight";
  }
  function vl(n, e) {
    var t, i;
    const r = e.ownerDocument.defaultView,
      s = e.getBoundingClientRect();
    return {
      x:
        n.pageX -
        (((t = r && r.scrollX) !== null && t !== void 0 ? t : 0) + s.left),
      y:
        n.pageY -
        (((i = r && r.scrollY) !== null && i !== void 0 ? i : 0) + s.top),
    };
  }
  class Mn {
    constructor(e) {
      (this.lastTouch_ = null),
        (this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this)),
        (this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this)),
        (this.onMouseDown_ = this.onMouseDown_.bind(this)),
        (this.onTouchEnd_ = this.onTouchEnd_.bind(this)),
        (this.onTouchMove_ = this.onTouchMove_.bind(this)),
        (this.onTouchStart_ = this.onTouchStart_.bind(this)),
        (this.elem_ = e),
        (this.emitter = new Bt()),
        e.addEventListener("touchstart", this.onTouchStart_, { passive: !1 }),
        e.addEventListener("touchmove", this.onTouchMove_, { passive: !0 }),
        e.addEventListener("touchend", this.onTouchEnd_),
        e.addEventListener("mousedown", this.onMouseDown_);
    }
    computePosition_(e) {
      const t = this.elem_.getBoundingClientRect();
      return {
        bounds: { width: t.width, height: t.height },
        point: e ? { x: e.x, y: e.y } : null,
      };
    }
    onMouseDown_(e) {
      var t;
      e.preventDefault(),
        (t = e.currentTarget) === null || t === void 0 || t.focus();
      const i = this.elem_.ownerDocument;
      i.addEventListener("mousemove", this.onDocumentMouseMove_),
        i.addEventListener("mouseup", this.onDocumentMouseUp_),
        this.emitter.emit("down", {
          altKey: e.altKey,
          data: this.computePosition_(vl(e, this.elem_)),
          sender: this,
          shiftKey: e.shiftKey,
        });
    }
    onDocumentMouseMove_(e) {
      this.emitter.emit("move", {
        altKey: e.altKey,
        data: this.computePosition_(vl(e, this.elem_)),
        sender: this,
        shiftKey: e.shiftKey,
      });
    }
    onDocumentMouseUp_(e) {
      const t = this.elem_.ownerDocument;
      t.removeEventListener("mousemove", this.onDocumentMouseMove_),
        t.removeEventListener("mouseup", this.onDocumentMouseUp_),
        this.emitter.emit("up", {
          altKey: e.altKey,
          data: this.computePosition_(vl(e, this.elem_)),
          sender: this,
          shiftKey: e.shiftKey,
        });
    }
    onTouchStart_(e) {
      e.preventDefault();
      const t = e.targetTouches.item(0),
        i = this.elem_.getBoundingClientRect();
      this.emitter.emit("down", {
        altKey: e.altKey,
        data: this.computePosition_(
          t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0
        ),
        sender: this,
        shiftKey: e.shiftKey,
      }),
        (this.lastTouch_ = t);
    }
    onTouchMove_(e) {
      const t = e.targetTouches.item(0),
        i = this.elem_.getBoundingClientRect();
      this.emitter.emit("move", {
        altKey: e.altKey,
        data: this.computePosition_(
          t ? { x: t.clientX - i.left, y: t.clientY - i.top } : void 0
        ),
        sender: this,
        shiftKey: e.shiftKey,
      }),
        (this.lastTouch_ = t);
    }
    onTouchEnd_(e) {
      var t;
      const i =
          (t = e.targetTouches.item(0)) !== null && t !== void 0
            ? t
            : this.lastTouch_,
        r = this.elem_.getBoundingClientRect();
      this.emitter.emit("up", {
        altKey: e.altKey,
        data: this.computePosition_(
          i ? { x: i.clientX - r.left, y: i.clientY - r.top } : void 0
        ),
        sender: this,
        shiftKey: e.shiftKey,
      });
    }
  }
  const Yt = se("txt");
  class B_ {
    constructor(e, t) {
      (this.onChange_ = this.onChange_.bind(this)),
        (this.props_ = t.props),
        this.props_.emitter.on("change", this.onChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(Yt(), Yt(void 0, "num")),
        t.arrayPosition &&
          this.element.classList.add(Yt(void 0, t.arrayPosition)),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("input");
      i.classList.add(Yt("i")),
        (i.type = "text"),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.inputElement = i),
        (this.onDraggingChange_ = this.onDraggingChange_.bind(this)),
        (this.dragging_ = t.dragging),
        this.dragging_.emitter.on("change", this.onDraggingChange_),
        this.element.classList.add(Yt()),
        this.inputElement.classList.add(Yt("i"));
      const r = e.createElement("div");
      r.classList.add(Yt("k")),
        this.element.appendChild(r),
        (this.knobElement = r);
      const s = e.createElementNS(gi, "svg");
      s.classList.add(Yt("g")), this.knobElement.appendChild(s);
      const o = e.createElementNS(gi, "path");
      o.classList.add(Yt("gb")), s.appendChild(o), (this.guideBodyElem_ = o);
      const a = e.createElementNS(gi, "path");
      a.classList.add(Yt("gh")), s.appendChild(a), (this.guideHeadElem_ = a);
      const l = e.createElement("div");
      l.classList.add(se("tt")()),
        this.knobElement.appendChild(l),
        (this.tooltipElem_ = l),
        t.value.emitter.on("change", this.onChange_),
        (this.value = t.value),
        this.refresh();
    }
    onDraggingChange_(e) {
      if (e.rawValue === null) {
        this.element.classList.remove(Yt(void 0, "drg"));
        return;
      }
      this.element.classList.add(Yt(void 0, "drg"));
      const t = e.rawValue / this.props_.get("pointerScale"),
        i = t + (t > 0 ? -1 : t < 0 ? 1 : 0),
        r = Re(-i, -4, 4);
      this.guideHeadElem_.setAttributeNS(
        null,
        "d",
        [`M ${i + r},0 L${i},4 L${i + r},8`, `M ${t},-1 L${t},9`].join(" ")
      ),
        this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${t},4`);
      const s = this.props_.get("formatter");
      (this.tooltipElem_.textContent = s(this.value.rawValue)),
        (this.tooltipElem_.style.left = `${t}px`);
    }
    refresh() {
      const e = this.props_.get("formatter");
      this.inputElement.value = e(this.value.rawValue);
    }
    onChange_() {
      this.refresh();
    }
  }
  class ps {
    constructor(e, t) {
      var i;
      (this.originRawValue_ = 0),
        (this.onInputChange_ = this.onInputChange_.bind(this)),
        (this.onInputKeyDown_ = this.onInputKeyDown_.bind(this)),
        (this.onInputKeyUp_ = this.onInputKeyUp_.bind(this)),
        (this.onPointerDown_ = this.onPointerDown_.bind(this)),
        (this.onPointerMove_ = this.onPointerMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.parser_ = t.parser),
        (this.props = t.props),
        (this.sliderProps_ =
          (i = t.sliderProps) !== null && i !== void 0 ? i : null),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.dragging_ = $e(null)),
        (this.view = new B_(e, {
          arrayPosition: t.arrayPosition,
          dragging: this.dragging_,
          props: this.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        this.view.inputElement.addEventListener("change", this.onInputChange_),
        this.view.inputElement.addEventListener(
          "keydown",
          this.onInputKeyDown_
        ),
        this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
      const r = new Mn(this.view.knobElement);
      r.emitter.on("down", this.onPointerDown_),
        r.emitter.on("move", this.onPointerMove_),
        r.emitter.on("up", this.onPointerUp_);
    }
    constrainValue_(e) {
      var t, i;
      const r =
          (t = this.sliderProps_) === null || t === void 0
            ? void 0
            : t.get("min"),
        s =
          (i = this.sliderProps_) === null || i === void 0
            ? void 0
            : i.get("max");
      let o = e;
      return (
        r !== void 0 && (o = Math.max(o, r)),
        s !== void 0 && (o = Math.min(o, s)),
        o
      );
    }
    onInputChange_(e) {
      const i = e.currentTarget.value,
        r = this.parser_(i);
      we(r) || (this.value.rawValue = this.constrainValue_(r)),
        this.view.refresh();
    }
    onInputKeyDown_(e) {
      const t = xt(this.props.get("keyScale"), ds(e));
      t !== 0 &&
        this.value.setRawValue(this.constrainValue_(this.value.rawValue + t), {
          forceEmit: !1,
          last: !1,
        });
    }
    onInputKeyUp_(e) {
      xt(this.props.get("keyScale"), ds(e)) !== 0 &&
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
    onPointerDown_() {
      (this.originRawValue_ = this.value.rawValue),
        (this.dragging_.rawValue = 0);
    }
    computeDraggingValue_(e) {
      if (!e.point) return null;
      const t = e.point.x - e.bounds.width / 2;
      return this.constrainValue_(
        this.originRawValue_ + t * this.props.get("pointerScale")
      );
    }
    onPointerMove_(e) {
      const t = this.computeDraggingValue_(e.data);
      t !== null &&
        (this.value.setRawValue(t, { forceEmit: !1, last: !1 }),
        (this.dragging_.rawValue = this.value.rawValue - this.originRawValue_));
    }
    onPointerUp_(e) {
      const t = this.computeDraggingValue_(e.data);
      t !== null &&
        (this.value.setRawValue(t, { forceEmit: !0, last: !0 }),
        (this.dragging_.rawValue = null));
    }
  }
  const gl = se("sld");
  class N_ {
    constructor(e, t) {
      (this.onChange_ = this.onChange_.bind(this)),
        (this.props_ = t.props),
        this.props_.emitter.on("change", this.onChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(gl()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(gl("t")),
        t.viewProps.bindTabIndex(i),
        this.element.appendChild(i),
        (this.trackElement = i);
      const r = e.createElement("div");
      r.classList.add(gl("k")),
        this.trackElement.appendChild(r),
        (this.knobElement = r),
        t.value.emitter.on("change", this.onChange_),
        (this.value = t.value),
        this.update_();
    }
    update_() {
      const e = Re(
        le(
          this.value.rawValue,
          this.props_.get("min"),
          this.props_.get("max"),
          0,
          100
        ),
        0,
        100
      );
      this.knobElement.style.width = `${e}%`;
    }
    onChange_() {
      this.update_();
    }
  }
  class I_ {
    constructor(e, t) {
      (this.onKeyDown_ = this.onKeyDown_.bind(this)),
        (this.onKeyUp_ = this.onKeyUp_.bind(this)),
        (this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.props = t.props),
        (this.view = new N_(e, {
          props: this.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.ptHandler_ = new Mn(this.view.trackElement)),
        this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_),
        this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.trackElement.addEventListener("keydown", this.onKeyDown_),
        this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      e.point &&
        this.value.setRawValue(
          le(
            Re(e.point.x, 0, e.bounds.width),
            0,
            e.bounds.width,
            this.props.get("min"),
            this.props.get("max")
          ),
          t
        );
    }
    onPointerDownOrMove_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !0, last: !0 });
    }
    onKeyDown_(e) {
      const t = xt(this.props.get("keyScale"), Mi(e));
      t !== 0 &&
        this.value.setRawValue(this.value.rawValue + t, {
          forceEmit: !1,
          last: !1,
        });
    }
    onKeyUp_(e) {
      xt(this.props.get("keyScale"), Mi(e)) !== 0 &&
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
  }
  const wl = se("sldtxt");
  class z_ {
    constructor(e, t) {
      (this.element = e.createElement("div")), this.element.classList.add(wl());
      const i = e.createElement("div");
      i.classList.add(wl("s")),
        (this.sliderView_ = t.sliderView),
        i.appendChild(this.sliderView_.element),
        this.element.appendChild(i);
      const r = e.createElement("div");
      r.classList.add(wl("t")),
        (this.textView_ = t.textView),
        r.appendChild(this.textView_.element),
        this.element.appendChild(r);
    }
  }
  class Hc {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.sliderC_ = new I_(e, {
          props: t.sliderProps,
          value: t.value,
          viewProps: this.viewProps,
        })),
        (this.textC_ = new ps(e, {
          parser: t.parser,
          props: t.textProps,
          sliderProps: t.sliderProps,
          value: t.value,
          viewProps: t.viewProps,
        })),
        (this.view = new z_(e, {
          sliderView: this.sliderC_.view,
          textView: this.textC_.view,
        }));
    }
    get sliderController() {
      return this.sliderC_;
    }
    get textController() {
      return this.textC_;
    }
    importProps(e) {
      return _i(
        e,
        null,
        (t) => ({ max: t.required.number, min: t.required.number }),
        (t) => {
          const i = this.sliderC_.props;
          return i.set("max", t.max), i.set("min", t.min), !0;
        }
      );
    }
    exportProps() {
      const e = this.sliderC_.props;
      return vi(null, { max: e.get("max"), min: e.get("min") });
    }
  }
  function $_(n) {
    return {
      sliderProps: new re({ keyScale: n.keyScale, max: n.max, min: n.min }),
      textProps: new re({
        formatter: $e(n.formatter),
        keyScale: n.keyScale,
        pointerScale: $e(n.pointerScale),
      }),
    };
  }
  const j_ = { containerUnitSize: "cnt-usz" };
  function Uc(n) {
    return `--${j_[n]}`;
  }
  function fs(n) {
    return _c(n);
  }
  function Ji(n) {
    if (Ga(n)) return et(n, fs);
  }
  function Li(n, e) {
    if (!n) return;
    const t = [],
      i = pc(n, e);
    i && t.push(i);
    const r = fc(n);
    return r && t.push(r), new cs(t);
  }
  function Wc(n) {
    if (n === "inline" || n === "popup") return n;
  }
  function ms(n, e) {
    n.write(e);
  }
  const bo = se("ckb");
  class H_ {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.element = e.createElement("div")),
        this.element.classList.add(bo()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("label");
      i.classList.add(bo("l")),
        this.element.appendChild(i),
        (this.labelElement = i);
      const r = e.createElement("input");
      r.classList.add(bo("i")),
        (r.type = "checkbox"),
        this.labelElement.appendChild(r),
        (this.inputElement = r),
        t.viewProps.bindDisabled(this.inputElement);
      const s = e.createElement("div");
      s.classList.add(bo("w")), this.labelElement.appendChild(s);
      const o = _o(e, "check");
      s.appendChild(o),
        t.value.emitter.on("change", this.onValueChange_),
        (this.value = t.value),
        this.update_();
    }
    update_() {
      this.inputElement.checked = this.value.rawValue;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class U_ {
    constructor(e, t) {
      (this.onInputChange_ = this.onInputChange_.bind(this)),
        (this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new H_(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        this.view.inputElement.addEventListener("change", this.onInputChange_),
        this.view.labelElement.addEventListener(
          "mousedown",
          this.onLabelMouseDown_
        );
    }
    onInputChange_(e) {
      const t = e.currentTarget;
      (this.value.rawValue = t.checked),
        e.preventDefault(),
        e.stopPropagation();
    }
    onLabelMouseDown_(e) {
      e.preventDefault();
    }
  }
  function W_(n) {
    const e = [],
      t = pl(n.options);
    return t && e.push(t), new cs(e);
  }
  pt({
    id: "input-bool",
    type: "input",
    accept: (n, e) => {
      if (typeof n != "boolean") return null;
      const t = et(e, (i) => ({
        options: i.optional.custom(wo),
        readonly: i.optional.constant(!1),
      }));
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: (n) => Ic,
      constraint: (n) => W_(n.params),
      writer: (n) => ms,
    },
    controller: (n) => {
      const e = n.document,
        t = n.value,
        i = n.constraint,
        r = i && vo(i, go);
      return r
        ? new dr(e, {
            props: new re({ options: r.values.value("options") }),
            value: t,
            viewProps: n.viewProps,
          })
        : new U_(e, { value: t, viewProps: n.viewProps });
    },
    api(n) {
      return typeof n.controller.value.rawValue != "boolean"
        ? null
        : n.controller.valueController instanceof dr
        ? new dl(n.controller)
        : null;
    },
  });
  const Ln = se("col");
  class q_ {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(Ln()),
        t.foldable.bindExpandedClass(this.element, Ln(void 0, "expanded")),
        wi(t.foldable, "completed", cr(this.element, Ln(void 0, "cpl")));
      const i = e.createElement("div");
      i.classList.add(Ln("h")), this.element.appendChild(i);
      const r = e.createElement("div");
      r.classList.add(Ln("s")), i.appendChild(r), (this.swatchElement = r);
      const s = e.createElement("div");
      if (
        (s.classList.add(Ln("t")),
        i.appendChild(s),
        (this.textElement = s),
        t.pickerLayout === "inline")
      ) {
        const o = e.createElement("div");
        o.classList.add(Ln("p")),
          this.element.appendChild(o),
          (this.pickerElement = o);
      } else this.pickerElement = null;
    }
  }
  function K_(n, e, t) {
    const i = Re(n / 255, 0, 1),
      r = Re(e / 255, 0, 1),
      s = Re(t / 255, 0, 1),
      o = Math.max(i, r, s),
      a = Math.min(i, r, s),
      l = o - a;
    let u = 0,
      h = 0;
    const d = (a + o) / 2;
    return (
      l !== 0 &&
        ((h = l / (1 - Math.abs(o + a - 1))),
        i === o
          ? (u = (r - s) / l)
          : r === o
          ? (u = 2 + (s - i) / l)
          : (u = 4 + (i - r) / l),
        (u = u / 6 + (u < 0 ? 1 : 0))),
      [u * 360, h * 100, d * 100]
    );
  }
  function Y_(n, e, t) {
    const i = ((n % 360) + 360) % 360,
      r = Re(e / 100, 0, 1),
      s = Re(t / 100, 0, 1),
      o = (1 - Math.abs(2 * s - 1)) * r,
      a = o * (1 - Math.abs(((i / 60) % 2) - 1)),
      l = s - o / 2;
    let u, h, d;
    return (
      i >= 0 && i < 60
        ? ([u, h, d] = [o, a, 0])
        : i >= 60 && i < 120
        ? ([u, h, d] = [a, o, 0])
        : i >= 120 && i < 180
        ? ([u, h, d] = [0, o, a])
        : i >= 180 && i < 240
        ? ([u, h, d] = [0, a, o])
        : i >= 240 && i < 300
        ? ([u, h, d] = [a, 0, o])
        : ([u, h, d] = [o, 0, a]),
      [(u + l) * 255, (h + l) * 255, (d + l) * 255]
    );
  }
  function G_(n, e, t) {
    const i = Re(n / 255, 0, 1),
      r = Re(e / 255, 0, 1),
      s = Re(t / 255, 0, 1),
      o = Math.max(i, r, s),
      a = Math.min(i, r, s),
      l = o - a;
    let u;
    l === 0
      ? (u = 0)
      : o === i
      ? (u = 60 * (((((r - s) / l) % 6) + 6) % 6))
      : o === r
      ? (u = 60 * ((s - i) / l + 2))
      : (u = 60 * ((i - r) / l + 4));
    const h = o === 0 ? 0 : l / o,
      d = o;
    return [u, h * 100, d * 100];
  }
  function qc(n, e, t) {
    const i = cc(n, 360),
      r = Re(e / 100, 0, 1),
      s = Re(t / 100, 0, 1),
      o = s * r,
      a = o * (1 - Math.abs(((i / 60) % 2) - 1)),
      l = s - o;
    let u, h, d;
    return (
      i >= 0 && i < 60
        ? ([u, h, d] = [o, a, 0])
        : i >= 60 && i < 120
        ? ([u, h, d] = [a, o, 0])
        : i >= 120 && i < 180
        ? ([u, h, d] = [0, o, a])
        : i >= 180 && i < 240
        ? ([u, h, d] = [0, a, o])
        : i >= 240 && i < 300
        ? ([u, h, d] = [a, 0, o])
        : ([u, h, d] = [o, 0, a]),
      [(u + l) * 255, (h + l) * 255, (d + l) * 255]
    );
  }
  function X_(n, e, t) {
    const i = t + (e * (100 - Math.abs(2 * t - 100))) / 200;
    return [
      n,
      i !== 0 ? (e * (100 - Math.abs(2 * t - 100))) / i : 0,
      t + (e * (100 - Math.abs(2 * t - 100))) / (2 * 100),
    ];
  }
  function Z_(n, e, t) {
    const i = 100 - Math.abs((t * (200 - e)) / 100 - 100);
    return [n, i !== 0 ? (e * t) / i : 0, (t * (200 - e)) / (2 * 100)];
  }
  function Di(n) {
    return [n[0], n[1], n[2]];
  }
  function Co(n, e) {
    return [n[0], n[1], n[2], e];
  }
  const Q_ = {
    hsl: { hsl: (n, e, t) => [n, e, t], hsv: X_, rgb: Y_ },
    hsv: { hsl: Z_, hsv: (n, e, t) => [n, e, t], rgb: qc },
    rgb: { hsl: K_, hsv: G_, rgb: (n, e, t) => [n, e, t] },
  };
  function fr(n, e) {
    return [
      e === "float" ? 1 : n === "rgb" ? 255 : 360,
      e === "float" ? 1 : n === "rgb" ? 255 : 100,
      e === "float" ? 1 : n === "rgb" ? 255 : 100,
    ];
  }
  function J_(n, e) {
    return n === e ? e : cc(n, e);
  }
  function Kc(n, e, t) {
    var i;
    const r = fr(e, t);
    return [
      e === "rgb" ? Re(n[0], 0, r[0]) : J_(n[0], r[0]),
      Re(n[1], 0, r[1]),
      Re(n[2], 0, r[2]),
      Re((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1),
    ];
  }
  function Yc(n, e, t, i) {
    const r = fr(e, t),
      s = fr(e, i);
    return n.map((o, a) => (o / r[a]) * s[a]);
  }
  function Gc(n, e, t) {
    const i = Yc(n, e.mode, e.type, "int"),
      r = Q_[e.mode][t.mode](...i);
    return Yc(r, t.mode, "int", t.type);
  }
  class te {
    static black() {
      return new te([0, 0, 0], "rgb");
    }
    constructor(e, t) {
      (this.type = "int"), (this.mode = t), (this.comps_ = Kc(e, t, this.type));
    }
    getComponents(e) {
      return Co(
        Gc(
          Di(this.comps_),
          { mode: this.mode, type: this.type },
          { mode: e ?? this.mode, type: this.type }
        ),
        this.comps_[3]
      );
    }
    toRgbaObject() {
      const e = this.getComponents("rgb");
      return { r: e[0], g: e[1], b: e[2], a: e[3] };
    }
  }
  const en = se("colp");
  class ev {
    constructor(e, t) {
      (this.alphaViews_ = null),
        (this.element = e.createElement("div")),
        this.element.classList.add(en()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(en("hsv"));
      const r = e.createElement("div");
      r.classList.add(en("sv")),
        (this.svPaletteView_ = t.svPaletteView),
        r.appendChild(this.svPaletteView_.element),
        i.appendChild(r);
      const s = e.createElement("div");
      s.classList.add(en("h")),
        (this.hPaletteView_ = t.hPaletteView),
        s.appendChild(this.hPaletteView_.element),
        i.appendChild(s),
        this.element.appendChild(i);
      const o = e.createElement("div");
      if (
        (o.classList.add(en("rgb")),
        (this.textsView_ = t.textsView),
        o.appendChild(this.textsView_.element),
        this.element.appendChild(o),
        t.alphaViews)
      ) {
        this.alphaViews_ = {
          palette: t.alphaViews.palette,
          text: t.alphaViews.text,
        };
        const a = e.createElement("div");
        a.classList.add(en("a"));
        const l = e.createElement("div");
        l.classList.add(en("ap")),
          l.appendChild(this.alphaViews_.palette.element),
          a.appendChild(l);
        const u = e.createElement("div");
        u.classList.add(en("at")),
          u.appendChild(this.alphaViews_.text.element),
          a.appendChild(u),
          this.element.appendChild(a);
      }
    }
    get allFocusableElements() {
      const e = [
        this.svPaletteView_.element,
        this.hPaletteView_.element,
        this.textsView_.modeSelectElement,
        ...this.textsView_.inputViews.map((t) => t.inputElement),
      ];
      return (
        this.alphaViews_ &&
          e.push(
            this.alphaViews_.palette.element,
            this.alphaViews_.text.inputElement
          ),
        e
      );
    }
  }
  function tv(n) {
    return n === "int" ? "int" : n === "float" ? "float" : void 0;
  }
  function Dl(n) {
    return et(n, (e) => ({
      color: e.optional.object({
        alpha: e.optional.boolean,
        type: e.optional.custom(tv),
      }),
      expanded: e.optional.boolean,
      picker: e.optional.custom(Wc),
      readonly: e.optional.constant(!1),
    }));
  }
  function Rn(n) {
    return n ? 0.1 : 1;
  }
  function Xc(n) {
    var e;
    return (e = n.color) === null || e === void 0 ? void 0 : e.type;
  }
  class bl {
    constructor(e, t) {
      (this.type = "float"),
        (this.mode = t),
        (this.comps_ = Kc(e, t, this.type));
    }
    getComponents(e) {
      return Co(
        Gc(
          Di(this.comps_),
          { mode: this.mode, type: this.type },
          { mode: e ?? this.mode, type: this.type }
        ),
        this.comps_[3]
      );
    }
    toRgbaObject() {
      const e = this.getComponents("rgb");
      return { r: e[0], g: e[1], b: e[2], a: e[3] };
    }
  }
  const iv = { int: (n, e) => new te(n, e), float: (n, e) => new bl(n, e) };
  function Cl(n, e, t) {
    return iv[t](n, e);
  }
  function nv(n) {
    return n.type === "float";
  }
  function rv(n) {
    return n.type === "int";
  }
  function sv(n) {
    const e = n.getComponents(),
      t = fr(n.mode, "int");
    return new te(
      [
        Math.round(le(e[0], 0, 1, 0, t[0])),
        Math.round(le(e[1], 0, 1, 0, t[1])),
        Math.round(le(e[2], 0, 1, 0, t[2])),
        e[3],
      ],
      n.mode
    );
  }
  function ov(n) {
    const e = n.getComponents(),
      t = fr(n.mode, "int");
    return new bl(
      [
        le(e[0], 0, t[0], 0, 1),
        le(e[1], 0, t[1], 0, 1),
        le(e[2], 0, t[2], 0, 1),
        e[3],
      ],
      n.mode
    );
  }
  function ft(n, e) {
    if (n.type === e) return n;
    if (rv(n) && e === "float") return ov(n);
    if (nv(n) && e === "int") return sv(n);
    throw Vt.shouldNeverHappen();
  }
  function av(n, e) {
    return (
      n.alpha === e.alpha &&
      n.mode === e.mode &&
      n.notation === e.notation &&
      n.type === e.type
    );
  }
  function Gt(n, e) {
    const t = n.match(/^(.+)%$/);
    return Math.min(t ? parseFloat(t[1]) * 0.01 * e : parseFloat(n), e);
  }
  const lv = {
    deg: (n) => n,
    grad: (n) => (n * 360) / 400,
    rad: (n) => (n * 360) / (2 * Math.PI),
    turn: (n) => n * 360,
  };
  function Zc(n) {
    const e = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
    if (!e) return parseFloat(n);
    const t = parseFloat(e[1]),
      i = e[2];
    return lv[i](t);
  }
  function Qc(n) {
    const e = n.match(
      /^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
    );
    if (!e) return null;
    const t = [Gt(e[1], 255), Gt(e[2], 255), Gt(e[3], 255)];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function uv(n) {
    const e = Qc(n);
    return e ? new te(e, "rgb") : null;
  }
  function Jc(n) {
    const e = n.match(
      /^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
    );
    if (!e) return null;
    const t = [Gt(e[1], 255), Gt(e[2], 255), Gt(e[3], 255), Gt(e[4], 1)];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function hv(n) {
    const e = Jc(n);
    return e ? new te(e, "rgb") : null;
  }
  function ed(n) {
    const e = n.match(
      /^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
    );
    if (!e) return null;
    const t = [Zc(e[1]), Gt(e[2], 100), Gt(e[3], 100)];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function cv(n) {
    const e = ed(n);
    return e ? new te(e, "hsl") : null;
  }
  function td(n) {
    const e = n.match(
      /^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/
    );
    if (!e) return null;
    const t = [Zc(e[1]), Gt(e[2], 100), Gt(e[3], 100), Gt(e[4], 1)];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function dv(n) {
    const e = td(n);
    return e ? new te(e, "hsl") : null;
  }
  function id(n) {
    const e = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
    if (e)
      return [
        parseInt(e[1] + e[1], 16),
        parseInt(e[2] + e[2], 16),
        parseInt(e[3] + e[3], 16),
      ];
    const t = n.match(
      /^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
    );
    return t
      ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
      : null;
  }
  function pv(n) {
    const e = id(n);
    return e ? new te(e, "rgb") : null;
  }
  function nd(n) {
    const e = n.match(
      /^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/
    );
    if (e)
      return [
        parseInt(e[1] + e[1], 16),
        parseInt(e[2] + e[2], 16),
        parseInt(e[3] + e[3], 16),
        le(parseInt(e[4] + e[4], 16), 0, 255, 0, 1),
      ];
    const t = n.match(
      /^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/
    );
    return t
      ? [
          parseInt(t[1], 16),
          parseInt(t[2], 16),
          parseInt(t[3], 16),
          le(parseInt(t[4], 16), 0, 255, 0, 1),
        ]
      : null;
  }
  function fv(n) {
    const e = nd(n);
    return e ? new te(e, "rgb") : null;
  }
  function rd(n) {
    const e = n.match(
      /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
    );
    if (!e) return null;
    const t = [parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3])];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) ? null : t;
  }
  function mv(n) {
    return (e) => {
      const t = rd(e);
      return t ? Cl(t, "rgb", n) : null;
    };
  }
  function sd(n) {
    const e = n.match(
      /^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/
    );
    if (!e) return null;
    const t = [
      parseFloat(e[1]),
      parseFloat(e[2]),
      parseFloat(e[3]),
      parseFloat(e[4]),
    ];
    return isNaN(t[0]) || isNaN(t[1]) || isNaN(t[2]) || isNaN(t[3]) ? null : t;
  }
  function _v(n) {
    return (e) => {
      const t = sd(e);
      return t ? Cl(t, "rgb", n) : null;
    };
  }
  const vv = [
    { parser: id, result: { alpha: !1, mode: "rgb", notation: "hex" } },
    { parser: nd, result: { alpha: !0, mode: "rgb", notation: "hex" } },
    { parser: Qc, result: { alpha: !1, mode: "rgb", notation: "func" } },
    { parser: Jc, result: { alpha: !0, mode: "rgb", notation: "func" } },
    { parser: ed, result: { alpha: !1, mode: "hsl", notation: "func" } },
    { parser: td, result: { alpha: !0, mode: "hsl", notation: "func" } },
    { parser: rd, result: { alpha: !1, mode: "rgb", notation: "object" } },
    { parser: sd, result: { alpha: !0, mode: "rgb", notation: "object" } },
  ];
  function gv(n) {
    return vv.reduce(
      (e, { parser: t, result: i }) => e || (t(n) ? i : null),
      null
    );
  }
  function wv(n, e = "int") {
    const t = gv(n);
    return t
      ? t.notation === "hex" && e !== "float"
        ? Object.assign(Object.assign({}, t), { type: "int" })
        : t.notation === "func"
        ? Object.assign(Object.assign({}, t), { type: e })
        : null
      : null;
  }
  function _s(n) {
    const e = [pv, fv, uv, hv, cv, dv];
    e.push(mv("int"), _v("int"));
    const t = L_(e);
    return (i) => {
      const r = t(i);
      return r ? ft(r, n) : null;
    };
  }
  function Dv(n) {
    const e = _s("int");
    if (typeof n != "string") return te.black();
    const t = e(n);
    return t ?? te.black();
  }
  function od(n) {
    const e = Re(Math.floor(n), 0, 255).toString(16);
    return e.length === 1 ? `0${e}` : e;
  }
  function yl(n, e = "#") {
    const t = Di(n.getComponents("rgb")).map(od).join("");
    return `${e}${t}`;
  }
  function El(n, e = "#") {
    const t = n.getComponents("rgb"),
      i = [t[0], t[1], t[2], t[3] * 255].map(od).join("");
    return `${e}${i}`;
  }
  function ad(n) {
    const e = Et(0),
      t = ft(n, "int");
    return `rgb(${Di(t.getComponents("rgb"))
      .map((r) => e(r))
      .join(", ")})`;
  }
  function yo(n) {
    const e = Et(2),
      t = Et(0);
    return `rgba(${ft(n, "int")
      .getComponents("rgb")
      .map((s, o) => (o === 3 ? e : t)(s))
      .join(", ")})`;
  }
  function bv(n) {
    const e = [Et(0), Do, Do],
      t = ft(n, "int");
    return `hsl(${Di(t.getComponents("hsl"))
      .map((r, s) => e[s](r))
      .join(", ")})`;
  }
  function Cv(n) {
    const e = [Et(0), Do, Do, Et(2)];
    return `hsla(${ft(n, "int")
      .getComponents("hsl")
      .map((r, s) => e[s](r))
      .join(", ")})`;
  }
  function ld(n, e) {
    const t = Et(e === "float" ? 2 : 0),
      i = ["r", "g", "b"],
      r = ft(n, e);
    return `{${Di(r.getComponents("rgb"))
      .map((o, a) => `${i[a]}: ${t(o)}`)
      .join(", ")}}`;
  }
  function yv(n) {
    return (e) => ld(e, n);
  }
  function ud(n, e) {
    const t = Et(2),
      i = Et(e === "float" ? 2 : 0),
      r = ["r", "g", "b", "a"];
    return `{${ft(n, e)
      .getComponents("rgb")
      .map((a, l) => {
        const u = l === 3 ? t : i;
        return `${r[l]}: ${u(a)}`;
      })
      .join(", ")}}`;
  }
  function Ev(n) {
    return (e) => ud(e, n);
  }
  const xv = [
    {
      format: { alpha: !1, mode: "rgb", notation: "hex", type: "int" },
      stringifier: yl,
    },
    {
      format: { alpha: !0, mode: "rgb", notation: "hex", type: "int" },
      stringifier: El,
    },
    {
      format: { alpha: !1, mode: "rgb", notation: "func", type: "int" },
      stringifier: ad,
    },
    {
      format: { alpha: !0, mode: "rgb", notation: "func", type: "int" },
      stringifier: yo,
    },
    {
      format: { alpha: !1, mode: "hsl", notation: "func", type: "int" },
      stringifier: bv,
    },
    {
      format: { alpha: !0, mode: "hsl", notation: "func", type: "int" },
      stringifier: Cv,
    },
    ...["int", "float"].reduce(
      (n, e) => [
        ...n,
        {
          format: { alpha: !1, mode: "rgb", notation: "object", type: e },
          stringifier: yv(e),
        },
        {
          format: { alpha: !0, mode: "rgb", notation: "object", type: e },
          stringifier: Ev(e),
        },
      ],
      []
    ),
  ];
  function hd(n) {
    return xv.reduce(
      (e, t) => e || (av(t.format, n) ? t.stringifier : null),
      null
    );
  }
  const vs = se("apl");
  class Pv {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.value = t.value),
        this.value.emitter.on("change", this.onValueChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(vs()),
        t.viewProps.bindClassModifiers(this.element),
        t.viewProps.bindTabIndex(this.element);
      const i = e.createElement("div");
      i.classList.add(vs("b")), this.element.appendChild(i);
      const r = e.createElement("div");
      r.classList.add(vs("c")), i.appendChild(r), (this.colorElem_ = r);
      const s = e.createElement("div");
      s.classList.add(vs("m")),
        this.element.appendChild(s),
        (this.markerElem_ = s);
      const o = e.createElement("div");
      o.classList.add(vs("p")),
        this.markerElem_.appendChild(o),
        (this.previewElem_ = o),
        this.update_();
    }
    update_() {
      const e = this.value.rawValue,
        t = e.getComponents("rgb"),
        i = new te([t[0], t[1], t[2], 0], "rgb"),
        r = new te([t[0], t[1], t[2], 255], "rgb"),
        s = ["to right", yo(i), yo(r)];
      (this.colorElem_.style.background = `linear-gradient(${s.join(",")})`),
        (this.previewElem_.style.backgroundColor = yo(e));
      const o = le(t[3], 0, 1, 0, 100);
      this.markerElem_.style.left = `${o}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class Sv {
    constructor(e, t) {
      (this.onKeyDown_ = this.onKeyDown_.bind(this)),
        (this.onKeyUp_ = this.onKeyUp_.bind(this)),
        (this.onPointerDown_ = this.onPointerDown_.bind(this)),
        (this.onPointerMove_ = this.onPointerMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new Pv(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.ptHandler_ = new Mn(this.view.element)),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const i = e.point.x / e.bounds.width,
        r = this.value.rawValue,
        [s, o, a] = r.getComponents("hsv");
      this.value.setRawValue(new te([s, o, a, i], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !0, last: !0 });
    }
    onKeyDown_(e) {
      const t = xt(Rn(!0), Mi(e));
      if (t === 0) return;
      const i = this.value.rawValue,
        [r, s, o, a] = i.getComponents("hsv");
      this.value.setRawValue(new te([r, s, o, a + t], "hsv"), {
        forceEmit: !1,
        last: !1,
      });
    }
    onKeyUp_(e) {
      xt(Rn(!0), Mi(e)) !== 0 &&
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
  }
  const mr = se("coltxt");
  function Tv(n) {
    const e = n.createElement("select"),
      t = [
        { text: "RGB", value: "rgb" },
        { text: "HSL", value: "hsl" },
        { text: "HSV", value: "hsv" },
        { text: "HEX", value: "hex" },
      ];
    return (
      e.appendChild(
        t.reduce((i, r) => {
          const s = n.createElement("option");
          return (
            (s.textContent = r.text), (s.value = r.value), i.appendChild(s), i
          );
        }, n.createDocumentFragment())
      ),
      e
    );
  }
  class Fv {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(mr()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(mr("m")),
        (this.modeElem_ = Tv(e)),
        this.modeElem_.classList.add(mr("ms")),
        i.appendChild(this.modeSelectElement),
        t.viewProps.bindDisabled(this.modeElem_);
      const r = e.createElement("div");
      r.classList.add(mr("mm")),
        r.appendChild(_o(e, "dropdown")),
        i.appendChild(r),
        this.element.appendChild(i);
      const s = e.createElement("div");
      s.classList.add(mr("w")),
        this.element.appendChild(s),
        (this.inputsElem_ = s),
        (this.inputViews_ = t.inputViews),
        this.applyInputViews_(),
        Oi(t.mode, (o) => {
          this.modeElem_.value = o;
        });
    }
    get modeSelectElement() {
      return this.modeElem_;
    }
    get inputViews() {
      return this.inputViews_;
    }
    set inputViews(e) {
      (this.inputViews_ = e), this.applyInputViews_();
    }
    applyInputViews_() {
      Dc(this.inputsElem_);
      const e = this.element.ownerDocument;
      this.inputViews_.forEach((t) => {
        const i = e.createElement("div");
        i.classList.add(mr("c")),
          i.appendChild(t.element),
          this.inputsElem_.appendChild(i);
      });
    }
  }
  function kv(n) {
    return Et(n === "float" ? 2 : 0);
  }
  function Av(n, e, t) {
    const i = fr(n, e)[t];
    return new co({ min: 0, max: i });
  }
  function Ov(n, e, t) {
    return new ps(n, {
      arrayPosition: t === 0 ? "fst" : t === 2 ? "lst" : "mid",
      parser: e.parser,
      props: re.fromObject({
        formatter: kv(e.colorType),
        keyScale: Rn(!1),
        pointerScale: e.colorType === "float" ? 0.01 : 1,
      }),
      value: $e(0, { constraint: Av(e.colorMode, e.colorType, t) }),
      viewProps: e.viewProps,
    });
  }
  function Mv(n, e) {
    const t = {
      colorMode: e.colorMode,
      colorType: e.colorType,
      parser: Qi,
      viewProps: e.viewProps,
    };
    return [0, 1, 2].map((i) => {
      const r = Ov(n, t, i);
      return (
        pr({
          primary: e.value,
          secondary: r.value,
          forward(s) {
            return ft(s, e.colorType).getComponents(e.colorMode)[i];
          },
          backward(s, o) {
            const a = e.colorMode,
              u = ft(s, e.colorType).getComponents(a);
            u[i] = o;
            const h = Cl(Co(Di(u), u[3]), a, e.colorType);
            return ft(h, "int");
          },
        }),
        r
      );
    });
  }
  function Lv(n, e) {
    const t = new ml(n, {
      parser: _s("int"),
      props: re.fromObject({ formatter: yl }),
      value: $e(te.black()),
      viewProps: e.viewProps,
    });
    return (
      pr({
        primary: e.value,
        secondary: t.value,
        forward: (i) => new te(Di(i.getComponents()), i.mode),
        backward: (i, r) =>
          new te(Co(Di(r.getComponents(i.mode)), i.getComponents()[3]), i.mode),
      }),
      [t]
    );
  }
  function Rv(n) {
    return n !== "hex";
  }
  class Vv {
    constructor(e, t) {
      (this.onModeSelectChange_ = this.onModeSelectChange_.bind(this)),
        (this.colorType_ = t.colorType),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.colorMode = $e(this.value.rawValue.mode)),
        (this.ccs_ = this.createComponentControllers_(e)),
        (this.view = new Fv(e, {
          mode: this.colorMode,
          inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view],
          viewProps: this.viewProps,
        })),
        this.view.modeSelectElement.addEventListener(
          "change",
          this.onModeSelectChange_
        );
    }
    createComponentControllers_(e) {
      const t = this.colorMode.rawValue;
      return Rv(t)
        ? Mv(e, {
            colorMode: t,
            colorType: this.colorType_,
            value: this.value,
            viewProps: this.viewProps,
          })
        : Lv(e, { value: this.value, viewProps: this.viewProps });
    }
    onModeSelectChange_(e) {
      const t = e.currentTarget;
      (this.colorMode.rawValue = t.value),
        (this.ccs_ = this.createComponentControllers_(
          this.view.element.ownerDocument
        )),
        (this.view.inputViews = this.ccs_.map((i) => i.view));
    }
  }
  const xl = se("hpl");
  class Bv {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.value = t.value),
        this.value.emitter.on("change", this.onValueChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(xl()),
        t.viewProps.bindClassModifiers(this.element),
        t.viewProps.bindTabIndex(this.element);
      const i = e.createElement("div");
      i.classList.add(xl("c")), this.element.appendChild(i);
      const r = e.createElement("div");
      r.classList.add(xl("m")),
        this.element.appendChild(r),
        (this.markerElem_ = r),
        this.update_();
    }
    update_() {
      const e = this.value.rawValue,
        [t] = e.getComponents("hsv");
      this.markerElem_.style.backgroundColor = ad(new te([t, 100, 100], "hsv"));
      const i = le(t, 0, 360, 0, 100);
      this.markerElem_.style.left = `${i}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class Nv {
    constructor(e, t) {
      (this.onKeyDown_ = this.onKeyDown_.bind(this)),
        (this.onKeyUp_ = this.onKeyUp_.bind(this)),
        (this.onPointerDown_ = this.onPointerDown_.bind(this)),
        (this.onPointerMove_ = this.onPointerMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new Bv(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.ptHandler_ = new Mn(this.view.element)),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const i = le(Re(e.point.x, 0, e.bounds.width), 0, e.bounds.width, 0, 360),
        r = this.value.rawValue,
        [, s, o, a] = r.getComponents("hsv");
      this.value.setRawValue(new te([i, s, o, a], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !0, last: !0 });
    }
    onKeyDown_(e) {
      const t = xt(Rn(!1), Mi(e));
      if (t === 0) return;
      const i = this.value.rawValue,
        [r, s, o, a] = i.getComponents("hsv");
      this.value.setRawValue(new te([r + t, s, o, a], "hsv"), {
        forceEmit: !1,
        last: !1,
      });
    }
    onKeyUp_(e) {
      xt(Rn(!1), Mi(e)) !== 0 &&
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
  }
  const Pl = se("svp"),
    cd = 64;
  class Iv {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.value = t.value),
        this.value.emitter.on("change", this.onValueChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(Pl()),
        t.viewProps.bindClassModifiers(this.element),
        t.viewProps.bindTabIndex(this.element);
      const i = e.createElement("canvas");
      (i.height = cd),
        (i.width = cd),
        i.classList.add(Pl("c")),
        this.element.appendChild(i),
        (this.canvasElement = i);
      const r = e.createElement("div");
      r.classList.add(Pl("m")),
        this.element.appendChild(r),
        (this.markerElem_ = r),
        this.update_();
    }
    update_() {
      const e = Xm(this.canvasElement);
      if (!e) return;
      const i = this.value.rawValue.getComponents("hsv"),
        r = this.canvasElement.width,
        s = this.canvasElement.height,
        o = e.getImageData(0, 0, r, s),
        a = o.data;
      for (let h = 0; h < s; h++)
        for (let d = 0; d < r; d++) {
          const f = le(d, 0, r, 0, 100),
            c = le(h, 0, s, 100, 0),
            m = qc(i[0], f, c),
            p = (h * r + d) * 4;
          (a[p] = m[0]), (a[p + 1] = m[1]), (a[p + 2] = m[2]), (a[p + 3] = 255);
        }
      e.putImageData(o, 0, 0);
      const l = le(i[1], 0, 100, 0, 100);
      this.markerElem_.style.left = `${l}%`;
      const u = le(i[2], 0, 100, 100, 0);
      this.markerElem_.style.top = `${u}%`;
    }
    onValueChange_() {
      this.update_();
    }
  }
  class zv {
    constructor(e, t) {
      (this.onKeyDown_ = this.onKeyDown_.bind(this)),
        (this.onKeyUp_ = this.onKeyUp_.bind(this)),
        (this.onPointerDown_ = this.onPointerDown_.bind(this)),
        (this.onPointerMove_ = this.onPointerMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new Iv(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.ptHandler_ = new Mn(this.view.element)),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.element.addEventListener("keydown", this.onKeyDown_),
        this.view.element.addEventListener("keyup", this.onKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const i = le(e.point.x, 0, e.bounds.width, 0, 100),
        r = le(e.point.y, 0, e.bounds.height, 100, 0),
        [s, , , o] = this.value.rawValue.getComponents("hsv");
      this.value.setRawValue(new te([s, i, r, o], "hsv"), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !0, last: !0 });
    }
    onKeyDown_(e) {
      jc(e.key) && e.preventDefault();
      const [t, i, r, s] = this.value.rawValue.getComponents("hsv"),
        o = Rn(!1),
        a = xt(o, Mi(e)),
        l = xt(o, ds(e));
      (a === 0 && l === 0) ||
        this.value.setRawValue(new te([t, i + a, r + l, s], "hsv"), {
          forceEmit: !1,
          last: !1,
        });
    }
    onKeyUp_(e) {
      const t = Rn(!1),
        i = xt(t, Mi(e)),
        r = xt(t, ds(e));
      (i === 0 && r === 0) ||
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
  }
  class $v {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.hPaletteC_ = new Nv(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.svPaletteC_ = new zv(e, {
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.alphaIcs_ = t.supportsAlpha
          ? {
              palette: new Sv(e, {
                value: this.value,
                viewProps: this.viewProps,
              }),
              text: new ps(e, {
                parser: Qi,
                props: re.fromObject({
                  pointerScale: 0.01,
                  keyScale: 0.1,
                  formatter: Et(2),
                }),
                value: $e(0, { constraint: new co({ min: 0, max: 1 }) }),
                viewProps: this.viewProps,
              }),
            }
          : null),
        this.alphaIcs_ &&
          pr({
            primary: this.value,
            secondary: this.alphaIcs_.text.value,
            forward: (i) => i.getComponents()[3],
            backward: (i, r) => {
              const s = i.getComponents();
              return (s[3] = r), new te(s, i.mode);
            },
          }),
        (this.textsC_ = new Vv(e, {
          colorType: t.colorType,
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.view = new ev(e, {
          alphaViews: this.alphaIcs_
            ? {
                palette: this.alphaIcs_.palette.view,
                text: this.alphaIcs_.text.view,
              }
            : null,
          hPaletteView: this.hPaletteC_.view,
          supportsAlpha: t.supportsAlpha,
          svPaletteView: this.svPaletteC_.view,
          textsView: this.textsC_.view,
          viewProps: this.viewProps,
        }));
    }
    get textsController() {
      return this.textsC_;
    }
  }
  const Sl = se("colsw");
  class jv {
    constructor(e, t) {
      (this.onValueChange_ = this.onValueChange_.bind(this)),
        t.value.emitter.on("change", this.onValueChange_),
        (this.value = t.value),
        (this.element = e.createElement("div")),
        this.element.classList.add(Sl()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(Sl("sw")),
        this.element.appendChild(i),
        (this.swatchElem_ = i);
      const r = e.createElement("button");
      r.classList.add(Sl("b")),
        t.viewProps.bindDisabled(r),
        this.element.appendChild(r),
        (this.buttonElement = r),
        this.update_();
    }
    update_() {
      const e = this.value.rawValue;
      this.swatchElem_.style.backgroundColor = El(e);
    }
    onValueChange_() {
      this.update_();
    }
  }
  class Hv {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new jv(e, {
          value: this.value,
          viewProps: this.viewProps,
        }));
    }
  }
  class Tl {
    constructor(e, t) {
      (this.onButtonBlur_ = this.onButtonBlur_.bind(this)),
        (this.onButtonClick_ = this.onButtonClick_.bind(this)),
        (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
        (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.foldable_ = as.create(t.expanded)),
        (this.swatchC_ = new Hv(e, {
          value: this.value,
          viewProps: this.viewProps,
        }));
      const i = this.swatchC_.view.buttonElement;
      i.addEventListener("blur", this.onButtonBlur_),
        i.addEventListener("click", this.onButtonClick_),
        (this.textC_ = new ml(e, {
          parser: t.parser,
          props: re.fromObject({ formatter: t.formatter }),
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.view = new q_(e, {
          foldable: this.foldable_,
          pickerLayout: t.pickerLayout,
        })),
        this.view.swatchElement.appendChild(this.swatchC_.view.element),
        this.view.textElement.appendChild(this.textC_.view.element),
        (this.popC_ =
          t.pickerLayout === "popup"
            ? new Bc(e, { viewProps: this.viewProps })
            : null);
      const r = new $v(e, {
        colorType: t.colorType,
        supportsAlpha: t.supportsAlpha,
        value: this.value,
        viewProps: this.viewProps,
      });
      r.view.allFocusableElements.forEach((s) => {
        s.addEventListener("blur", this.onPopupChildBlur_),
          s.addEventListener("keydown", this.onPopupChildKeydown_);
      }),
        (this.pickerC_ = r),
        this.popC_
          ? (this.view.element.appendChild(this.popC_.view.element),
            this.popC_.view.element.appendChild(r.view.element),
            pr({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (s) => s,
              backward: (s, o) => o,
            }))
          : this.view.pickerElement &&
            (this.view.pickerElement.appendChild(this.pickerC_.view.element),
            hl(this.foldable_, this.view.pickerElement));
    }
    get textController() {
      return this.textC_;
    }
    onButtonBlur_(e) {
      if (!this.popC_) return;
      const t = this.view.element,
        i = e.relatedTarget;
      (!i || !t.contains(i)) && (this.popC_.shows.rawValue = !1);
    }
    onButtonClick_() {
      this.foldable_.set("expanded", !this.foldable_.get("expanded")),
        this.foldable_.get("expanded") &&
          this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(e) {
      if (!this.popC_) return;
      const t = this.popC_.view.element,
        i = bc(e);
      (i && t.contains(i)) ||
        (i && i === this.swatchC_.view.buttonElement && !il(t.ownerDocument)) ||
        (this.popC_.shows.rawValue = !1);
    }
    onPopupChildKeydown_(e) {
      this.popC_
        ? e.key === "Escape" && (this.popC_.shows.rawValue = !1)
        : this.view.pickerElement &&
          e.key === "Escape" &&
          this.swatchC_.view.buttonElement.focus();
    }
  }
  function Uv(n) {
    return Di(n.getComponents("rgb")).reduce(
      (e, t) => (e << 8) | (Math.floor(t) & 255),
      0
    );
  }
  function Wv(n) {
    return (
      n.getComponents("rgb").reduce((e, t, i) => {
        const r = Math.floor(i === 3 ? t * 255 : t) & 255;
        return (e << 8) | r;
      }, 0) >>> 0
    );
  }
  function qv(n) {
    return new te([(n >> 16) & 255, (n >> 8) & 255, n & 255], "rgb");
  }
  function Kv(n) {
    return new te(
      [
        (n >> 24) & 255,
        (n >> 16) & 255,
        (n >> 8) & 255,
        le(n & 255, 0, 255, 0, 1),
      ],
      "rgb"
    );
  }
  function Yv(n) {
    return typeof n != "number" ? te.black() : qv(n);
  }
  function Gv(n) {
    return typeof n != "number" ? te.black() : Kv(n);
  }
  function Eo(n, e) {
    return typeof n != "object" || we(n)
      ? !1
      : e in n && typeof n[e] == "number";
  }
  function dd(n) {
    return Eo(n, "r") && Eo(n, "g") && Eo(n, "b");
  }
  function pd(n) {
    return dd(n) && Eo(n, "a");
  }
  function fd(n) {
    return dd(n);
  }
  function Fl(n, e) {
    if (n.mode !== e.mode || n.type !== e.type) return !1;
    const t = n.getComponents(),
      i = e.getComponents();
    for (let r = 0; r < t.length; r++) if (t[r] !== i[r]) return !1;
    return !0;
  }
  function md(n) {
    return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
  }
  function Xv(n) {
    const e = hd(n);
    return e
      ? (t, i) => {
          ms(t, e(i));
        }
      : null;
  }
  function Zv(n) {
    const e = n ? Wv : Uv;
    return (t, i) => {
      ms(t, e(i));
    };
  }
  function Qv(n, e, t) {
    const r = ft(e, t).toRgbaObject();
    n.writeProperty("r", r.r),
      n.writeProperty("g", r.g),
      n.writeProperty("b", r.b),
      n.writeProperty("a", r.a);
  }
  function Jv(n, e, t) {
    const r = ft(e, t).toRgbaObject();
    n.writeProperty("r", r.r),
      n.writeProperty("g", r.g),
      n.writeProperty("b", r.b);
  }
  function e0(n, e) {
    return (t, i) => {
      n ? Qv(t, i, e) : Jv(t, i, e);
    };
  }
  function t0(n) {
    var e;
    return !!(
      !((e = n == null ? void 0 : n.color) === null || e === void 0) && e.alpha
    );
  }
  function i0(n) {
    return n ? (e) => El(e, "0x") : (e) => yl(e, "0x");
  }
  function n0(n) {
    return "color" in n || n.view === "color";
  }
  pt({
    id: "input-color-number",
    type: "input",
    accept: (n, e) => {
      if (typeof n != "number" || !n0(e)) return null;
      const t = Dl(e);
      return t
        ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, t), {
              supportsAlpha: t0(e),
            }),
          }
        : null;
    },
    binding: {
      reader: (n) => (n.params.supportsAlpha ? Gv : Yv),
      equals: Fl,
      writer: (n) => Zv(n.params.supportsAlpha),
    },
    controller: (n) => {
      var e, t;
      return new Tl(n.document, {
        colorType: "int",
        expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : !1,
        formatter: i0(n.params.supportsAlpha),
        parser: _s("int"),
        pickerLayout:
          (t = n.params.picker) !== null && t !== void 0 ? t : "popup",
        supportsAlpha: n.params.supportsAlpha,
        value: n.value,
        viewProps: n.viewProps,
      });
    },
  });
  function r0(n, e) {
    if (!fd(n)) return ft(te.black(), e);
    if (e === "int") {
      const t = md(n);
      return new te(t, "rgb");
    }
    if (e === "float") {
      const t = md(n);
      return new bl(t, "rgb");
    }
    return ft(te.black(), "int");
  }
  function s0(n) {
    return pd(n);
  }
  function o0(n) {
    return (e) => {
      const t = r0(e, n);
      return ft(t, "int");
    };
  }
  function a0(n, e) {
    return (t) => (n ? ud(t, e) : ld(t, e));
  }
  pt({
    id: "input-color-object",
    type: "input",
    accept: (n, e) => {
      var t;
      if (!fd(n)) return null;
      const i = Dl(e);
      return i
        ? {
            initialValue: n,
            params: Object.assign(Object.assign({}, i), {
              colorType: (t = Xc(e)) !== null && t !== void 0 ? t : "int",
            }),
          }
        : null;
    },
    binding: {
      reader: (n) => o0(n.params.colorType),
      equals: Fl,
      writer: (n) => e0(s0(n.initialValue), n.params.colorType),
    },
    controller: (n) => {
      var e, t;
      const i = pd(n.initialValue);
      return new Tl(n.document, {
        colorType: n.params.colorType,
        expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : !1,
        formatter: a0(i, n.params.colorType),
        parser: _s("int"),
        pickerLayout:
          (t = n.params.picker) !== null && t !== void 0 ? t : "popup",
        supportsAlpha: i,
        value: n.value,
        viewProps: n.viewProps,
      });
    },
  }),
    pt({
      id: "input-color-string",
      type: "input",
      accept: (n, e) => {
        if (typeof n != "string" || e.view === "text") return null;
        const t = wv(n, Xc(e));
        if (!t) return null;
        const i = hd(t);
        if (!i) return null;
        const r = Dl(e);
        return r
          ? {
              initialValue: n,
              params: Object.assign(Object.assign({}, r), {
                format: t,
                stringifier: i,
              }),
            }
          : null;
      },
      binding: {
        reader: () => Dv,
        equals: Fl,
        writer: (n) => {
          const e = Xv(n.params.format);
          if (!e) throw Vt.notBindable();
          return e;
        },
      },
      controller: (n) => {
        var e, t;
        return new Tl(n.document, {
          colorType: n.params.format.type,
          expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : !1,
          formatter: n.params.stringifier,
          parser: _s("int"),
          pickerLayout:
            (t = n.params.picker) !== null && t !== void 0 ? t : "popup",
          supportsAlpha: n.params.format.alpha,
          value: n.value,
          viewProps: n.viewProps,
        });
      },
    });
  class kl {
    constructor(e) {
      (this.components = e.components), (this.asm_ = e.assembly);
    }
    constrain(e) {
      const t = this.asm_.toComponents(e).map((i, r) => {
        var s, o;
        return (o =
          (s = this.components[r]) === null || s === void 0
            ? void 0
            : s.constrain(i)) !== null && o !== void 0
          ? o
          : i;
      });
      return this.asm_.fromComponents(t);
    }
  }
  const _d = se("pndtxt");
  class l0 {
    constructor(e, t) {
      (this.textViews = t.textViews),
        (this.element = e.createElement("div")),
        this.element.classList.add(_d()),
        this.textViews.forEach((i) => {
          const r = e.createElement("div");
          r.classList.add(_d("a")),
            r.appendChild(i.element),
            this.element.appendChild(r);
        });
    }
  }
  function u0(n, e, t) {
    return new ps(n, {
      arrayPosition: t === 0 ? "fst" : t === e.axes.length - 1 ? "lst" : "mid",
      parser: e.parser,
      props: e.axes[t].textProps,
      value: $e(0, { constraint: e.axes[t].constraint }),
      viewProps: e.viewProps,
    });
  }
  class Al {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.acs_ = t.axes.map((i, r) => u0(e, t, r))),
        this.acs_.forEach((i, r) => {
          pr({
            primary: this.value,
            secondary: i.value,
            forward: (s) => t.assembly.toComponents(s)[r],
            backward: (s, o) => {
              const a = t.assembly.toComponents(s);
              return (a[r] = o), t.assembly.fromComponents(a);
            },
          });
        }),
        (this.view = new l0(e, { textViews: this.acs_.map((i) => i.view) }));
    }
    get textControllers() {
      return this.acs_;
    }
  }
  class h0 extends el {
    get max() {
      return this.controller.valueController.sliderController.props.get("max");
    }
    set max(e) {
      this.controller.valueController.sliderController.props.set("max", e);
    }
    get min() {
      return this.controller.valueController.sliderController.props.get("min");
    }
    set min(e) {
      this.controller.valueController.sliderController.props.set("min", e);
    }
  }
  function c0(n, e) {
    const t = [],
      i = pc(n, e);
    i && t.push(i);
    const r = fc(n);
    r && t.push(r);
    const s = pl(n.options);
    return s && t.push(s), new cs(t);
  }
  pt({
    id: "input-number",
    type: "input",
    accept: (n, e) => {
      if (typeof n != "number") return null;
      const t = et(e, (i) =>
        Object.assign(Object.assign({}, _c(i)), {
          options: i.optional.custom(wo),
          readonly: i.optional.constant(!1),
        })
      );
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: (n) => uc,
      constraint: (n) => c0(n.params, n.initialValue),
      writer: (n) => ms,
    },
    controller: (n) => {
      const e = n.value,
        t = n.constraint,
        i = t && vo(t, go);
      if (i)
        return new dr(n.document, {
          props: new re({ options: i.values.value("options") }),
          value: e,
          viewProps: n.viewProps,
        });
      const r = mc(n.params, e.rawValue),
        s = t && vo(t, co);
      return s
        ? new Hc(
            n.document,
            Object.assign(
              Object.assign(
                {},
                $_(
                  Object.assign(Object.assign({}, r), {
                    keyScale: $e(r.keyScale),
                    max: s.values.value("max"),
                    min: s.values.value("min"),
                  })
                )
              ),
              { parser: Qi, value: e, viewProps: n.viewProps }
            )
          )
        : new ps(n.document, {
            parser: Qi,
            props: re.fromObject(r),
            value: e,
            viewProps: n.viewProps,
          });
    },
    api(n) {
      return typeof n.controller.value.rawValue != "number"
        ? null
        : n.controller.valueController instanceof Hc
        ? new h0(n.controller)
        : n.controller.valueController instanceof dr
        ? new dl(n.controller)
        : null;
    },
  });
  class tn {
    constructor(e = 0, t = 0) {
      (this.x = e), (this.y = t);
    }
    getComponents() {
      return [this.x, this.y];
    }
    static isObject(e) {
      if (we(e)) return !1;
      const t = e.x,
        i = e.y;
      return !(typeof t != "number" || typeof i != "number");
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y;
    }
    toObject() {
      return { x: this.x, y: this.y };
    }
  }
  const vd = {
      toComponents: (n) => n.getComponents(),
      fromComponents: (n) => new tn(...n),
    },
    _r = se("p2d");
  class d0 {
    constructor(e, t) {
      (this.element = e.createElement("div")),
        this.element.classList.add(_r()),
        t.viewProps.bindClassModifiers(this.element),
        Oi(t.expanded, cr(this.element, _r(void 0, "expanded")));
      const i = e.createElement("div");
      i.classList.add(_r("h")), this.element.appendChild(i);
      const r = e.createElement("button");
      r.classList.add(_r("b")),
        r.appendChild(_o(e, "p2dpad")),
        t.viewProps.bindDisabled(r),
        i.appendChild(r),
        (this.buttonElement = r);
      const s = e.createElement("div");
      if (
        (s.classList.add(_r("t")),
        i.appendChild(s),
        (this.textElement = s),
        t.pickerLayout === "inline")
      ) {
        const o = e.createElement("div");
        o.classList.add(_r("p")),
          this.element.appendChild(o),
          (this.pickerElement = o);
      } else this.pickerElement = null;
    }
  }
  const nn = se("p2dp");
  class p0 {
    constructor(e, t) {
      (this.onFoldableChange_ = this.onFoldableChange_.bind(this)),
        (this.onPropsChange_ = this.onPropsChange_.bind(this)),
        (this.onValueChange_ = this.onValueChange_.bind(this)),
        (this.props_ = t.props),
        this.props_.emitter.on("change", this.onPropsChange_),
        (this.element = e.createElement("div")),
        this.element.classList.add(nn()),
        t.layout === "popup" && this.element.classList.add(nn(void 0, "p")),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("div");
      i.classList.add(nn("p")),
        t.viewProps.bindTabIndex(i),
        this.element.appendChild(i),
        (this.padElement = i);
      const r = e.createElementNS(gi, "svg");
      r.classList.add(nn("g")),
        this.padElement.appendChild(r),
        (this.svgElem_ = r);
      const s = e.createElementNS(gi, "line");
      s.classList.add(nn("ax")),
        s.setAttributeNS(null, "x1", "0"),
        s.setAttributeNS(null, "y1", "50%"),
        s.setAttributeNS(null, "x2", "100%"),
        s.setAttributeNS(null, "y2", "50%"),
        this.svgElem_.appendChild(s);
      const o = e.createElementNS(gi, "line");
      o.classList.add(nn("ax")),
        o.setAttributeNS(null, "x1", "50%"),
        o.setAttributeNS(null, "y1", "0"),
        o.setAttributeNS(null, "x2", "50%"),
        o.setAttributeNS(null, "y2", "100%"),
        this.svgElem_.appendChild(o);
      const a = e.createElementNS(gi, "line");
      a.classList.add(nn("l")),
        a.setAttributeNS(null, "x1", "50%"),
        a.setAttributeNS(null, "y1", "50%"),
        this.svgElem_.appendChild(a),
        (this.lineElem_ = a);
      const l = e.createElement("div");
      l.classList.add(nn("m")),
        this.padElement.appendChild(l),
        (this.markerElem_ = l),
        t.value.emitter.on("change", this.onValueChange_),
        (this.value = t.value),
        this.update_();
    }
    get allFocusableElements() {
      return [this.padElement];
    }
    update_() {
      const [e, t] = this.value.rawValue.getComponents(),
        i = this.props_.get("max"),
        r = le(e, -i, +i, 0, 100),
        s = le(t, -i, +i, 0, 100),
        o = this.props_.get("invertsY") ? 100 - s : s;
      this.lineElem_.setAttributeNS(null, "x2", `${r}%`),
        this.lineElem_.setAttributeNS(null, "y2", `${o}%`),
        (this.markerElem_.style.left = `${r}%`),
        (this.markerElem_.style.top = `${o}%`);
    }
    onValueChange_() {
      this.update_();
    }
    onPropsChange_() {
      this.update_();
    }
    onFoldableChange_() {
      this.update_();
    }
  }
  function gd(n, e, t) {
    return [xt(e[0], Mi(n)), xt(e[1], ds(n)) * (t ? 1 : -1)];
  }
  class f0 {
    constructor(e, t) {
      (this.onPadKeyDown_ = this.onPadKeyDown_.bind(this)),
        (this.onPadKeyUp_ = this.onPadKeyUp_.bind(this)),
        (this.onPointerDown_ = this.onPointerDown_.bind(this)),
        (this.onPointerMove_ = this.onPointerMove_.bind(this)),
        (this.onPointerUp_ = this.onPointerUp_.bind(this)),
        (this.props = t.props),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new p0(e, {
          layout: t.layout,
          props: this.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.ptHandler_ = new Mn(this.view.padElement)),
        this.ptHandler_.emitter.on("down", this.onPointerDown_),
        this.ptHandler_.emitter.on("move", this.onPointerMove_),
        this.ptHandler_.emitter.on("up", this.onPointerUp_),
        this.view.padElement.addEventListener("keydown", this.onPadKeyDown_),
        this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
    }
    handlePointerEvent_(e, t) {
      if (!e.point) return;
      const i = this.props.get("max"),
        r = le(e.point.x, 0, e.bounds.width, -i, +i),
        s = le(
          this.props.get("invertsY") ? e.bounds.height - e.point.y : e.point.y,
          0,
          e.bounds.height,
          -i,
          +i
        );
      this.value.setRawValue(new tn(r, s), t);
    }
    onPointerDown_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerMove_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !1, last: !1 });
    }
    onPointerUp_(e) {
      this.handlePointerEvent_(e.data, { forceEmit: !0, last: !0 });
    }
    onPadKeyDown_(e) {
      jc(e.key) && e.preventDefault();
      const [t, i] = gd(
        e,
        [this.props.get("xKeyScale"), this.props.get("yKeyScale")],
        this.props.get("invertsY")
      );
      (t === 0 && i === 0) ||
        this.value.setRawValue(
          new tn(this.value.rawValue.x + t, this.value.rawValue.y + i),
          { forceEmit: !1, last: !1 }
        );
    }
    onPadKeyUp_(e) {
      const [t, i] = gd(
        e,
        [this.props.get("xKeyScale"), this.props.get("yKeyScale")],
        this.props.get("invertsY")
      );
      (t === 0 && i === 0) ||
        this.value.setRawValue(this.value.rawValue, {
          forceEmit: !0,
          last: !0,
        });
    }
  }
  class m0 {
    constructor(e, t) {
      var i, r;
      (this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this)),
        (this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this)),
        (this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this)),
        (this.onPadButtonClick_ = this.onPadButtonClick_.bind(this)),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.foldable_ = as.create(t.expanded)),
        (this.popC_ =
          t.pickerLayout === "popup"
            ? new Bc(e, { viewProps: this.viewProps })
            : null);
      const s = new f0(e, {
        layout: t.pickerLayout,
        props: new re({
          invertsY: $e(t.invertsY),
          max: $e(t.max),
          xKeyScale: t.axes[0].textProps.value("keyScale"),
          yKeyScale: t.axes[1].textProps.value("keyScale"),
        }),
        value: this.value,
        viewProps: this.viewProps,
      });
      s.view.allFocusableElements.forEach((o) => {
        o.addEventListener("blur", this.onPopupChildBlur_),
          o.addEventListener("keydown", this.onPopupChildKeydown_);
      }),
        (this.pickerC_ = s),
        (this.textC_ = new Al(e, {
          assembly: vd,
          axes: t.axes,
          parser: t.parser,
          value: this.value,
          viewProps: this.viewProps,
        })),
        (this.view = new d0(e, {
          expanded: this.foldable_.value("expanded"),
          pickerLayout: t.pickerLayout,
          viewProps: this.viewProps,
        })),
        this.view.textElement.appendChild(this.textC_.view.element),
        (i = this.view.buttonElement) === null ||
          i === void 0 ||
          i.addEventListener("blur", this.onPadButtonBlur_),
        (r = this.view.buttonElement) === null ||
          r === void 0 ||
          r.addEventListener("click", this.onPadButtonClick_),
        this.popC_
          ? (this.view.element.appendChild(this.popC_.view.element),
            this.popC_.view.element.appendChild(this.pickerC_.view.element),
            pr({
              primary: this.foldable_.value("expanded"),
              secondary: this.popC_.shows,
              forward: (o) => o,
              backward: (o, a) => a,
            }))
          : this.view.pickerElement &&
            (this.view.pickerElement.appendChild(this.pickerC_.view.element),
            hl(this.foldable_, this.view.pickerElement));
    }
    get textController() {
      return this.textC_;
    }
    onPadButtonBlur_(e) {
      if (!this.popC_) return;
      const t = this.view.element,
        i = e.relatedTarget;
      (!i || !t.contains(i)) && (this.popC_.shows.rawValue = !1);
    }
    onPadButtonClick_() {
      this.foldable_.set("expanded", !this.foldable_.get("expanded")),
        this.foldable_.get("expanded") &&
          this.pickerC_.view.allFocusableElements[0].focus();
    }
    onPopupChildBlur_(e) {
      if (!this.popC_) return;
      const t = this.popC_.view.element,
        i = bc(e);
      (i && t.contains(i)) ||
        (i && i === this.view.buttonElement && !il(t.ownerDocument)) ||
        (this.popC_.shows.rawValue = !1);
    }
    onPopupChildKeydown_(e) {
      this.popC_
        ? e.key === "Escape" && (this.popC_.shows.rawValue = !1)
        : this.view.pickerElement &&
          e.key === "Escape" &&
          this.view.buttonElement.focus();
    }
  }
  function _0(n) {
    return tn.isObject(n) ? new tn(n.x, n.y) : new tn();
  }
  function v0(n, e) {
    n.writeProperty("x", e.x), n.writeProperty("y", e.y);
  }
  function g0(n, e) {
    return new kl({
      assembly: vd,
      components: [
        Li(Object.assign(Object.assign({}, n), n.x), e.x),
        Li(Object.assign(Object.assign({}, n), n.y), e.y),
      ],
    });
  }
  function wd(n, e) {
    var t, i;
    if (!we(n.min) || !we(n.max))
      return Math.max(
        Math.abs((t = n.min) !== null && t !== void 0 ? t : 0),
        Math.abs((i = n.max) !== null && i !== void 0 ? i : 0)
      );
    const r = dc(n);
    return Math.max(Math.abs(r) * 10, Math.abs(e) * 10);
  }
  function w0(n, e) {
    var t, i;
    const r = wd(On(n, (t = n.x) !== null && t !== void 0 ? t : {}), e.x),
      s = wd(On(n, (i = n.y) !== null && i !== void 0 ? i : {}), e.y);
    return Math.max(r, s);
  }
  function D0(n) {
    if (!("y" in n)) return !1;
    const e = n.y;
    return e && "inverted" in e ? !!e.inverted : !1;
  }
  pt({
    id: "input-point2d",
    type: "input",
    accept: (n, e) => {
      if (!tn.isObject(n)) return null;
      const t = et(e, (i) =>
        Object.assign(Object.assign({}, fs(i)), {
          expanded: i.optional.boolean,
          picker: i.optional.custom(Wc),
          readonly: i.optional.constant(!1),
          x: i.optional.custom(Ji),
          y: i.optional.object(
            Object.assign(Object.assign({}, fs(i)), {
              inverted: i.optional.boolean,
            })
          ),
        })
      );
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: () => _0,
      constraint: (n) => g0(n.params, n.initialValue),
      equals: tn.equals,
      writer: () => v0,
    },
    controller: (n) => {
      var e, t;
      const i = n.document,
        r = n.value,
        s = n.constraint,
        o = [n.params.x, n.params.y];
      return new m0(i, {
        axes: r.rawValue.getComponents().map((a, l) => {
          var u;
          return Qa({
            constraint: s.components[l],
            initialValue: a,
            params: On(n.params, (u = o[l]) !== null && u !== void 0 ? u : {}),
          });
        }),
        expanded: (e = n.params.expanded) !== null && e !== void 0 ? e : !1,
        invertsY: D0(n.params),
        max: w0(n.params, r.rawValue),
        parser: Qi,
        pickerLayout:
          (t = n.params.picker) !== null && t !== void 0 ? t : "popup",
        value: r,
        viewProps: n.viewProps,
      });
    },
  });
  class vr {
    constructor(e = 0, t = 0, i = 0) {
      (this.x = e), (this.y = t), (this.z = i);
    }
    getComponents() {
      return [this.x, this.y, this.z];
    }
    static isObject(e) {
      if (we(e)) return !1;
      const t = e.x,
        i = e.y,
        r = e.z;
      return !(
        typeof t != "number" ||
        typeof i != "number" ||
        typeof r != "number"
      );
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y && e.z === t.z;
    }
    toObject() {
      return { x: this.x, y: this.y, z: this.z };
    }
  }
  const Dd = {
    toComponents: (n) => n.getComponents(),
    fromComponents: (n) => new vr(...n),
  };
  function b0(n) {
    return vr.isObject(n) ? new vr(n.x, n.y, n.z) : new vr();
  }
  function C0(n, e) {
    n.writeProperty("x", e.x),
      n.writeProperty("y", e.y),
      n.writeProperty("z", e.z);
  }
  function y0(n, e) {
    return new kl({
      assembly: Dd,
      components: [
        Li(Object.assign(Object.assign({}, n), n.x), e.x),
        Li(Object.assign(Object.assign({}, n), n.y), e.y),
        Li(Object.assign(Object.assign({}, n), n.z), e.z),
      ],
    });
  }
  pt({
    id: "input-point3d",
    type: "input",
    accept: (n, e) => {
      if (!vr.isObject(n)) return null;
      const t = et(e, (i) =>
        Object.assign(Object.assign({}, fs(i)), {
          readonly: i.optional.constant(!1),
          x: i.optional.custom(Ji),
          y: i.optional.custom(Ji),
          z: i.optional.custom(Ji),
        })
      );
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: (n) => b0,
      constraint: (n) => y0(n.params, n.initialValue),
      equals: vr.equals,
      writer: (n) => C0,
    },
    controller: (n) => {
      const e = n.value,
        t = n.constraint,
        i = [n.params.x, n.params.y, n.params.z];
      return new Al(n.document, {
        assembly: Dd,
        axes: e.rawValue.getComponents().map((r, s) => {
          var o;
          return Qa({
            constraint: t.components[s],
            initialValue: r,
            params: On(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}),
          });
        }),
        parser: Qi,
        value: e,
        viewProps: n.viewProps,
      });
    },
  });
  class gr {
    constructor(e = 0, t = 0, i = 0, r = 0) {
      (this.x = e), (this.y = t), (this.z = i), (this.w = r);
    }
    getComponents() {
      return [this.x, this.y, this.z, this.w];
    }
    static isObject(e) {
      if (we(e)) return !1;
      const t = e.x,
        i = e.y,
        r = e.z,
        s = e.w;
      return !(
        typeof t != "number" ||
        typeof i != "number" ||
        typeof r != "number" ||
        typeof s != "number"
      );
    }
    static equals(e, t) {
      return e.x === t.x && e.y === t.y && e.z === t.z && e.w === t.w;
    }
    toObject() {
      return { x: this.x, y: this.y, z: this.z, w: this.w };
    }
  }
  const bd = {
    toComponents: (n) => n.getComponents(),
    fromComponents: (n) => new gr(...n),
  };
  function E0(n) {
    return gr.isObject(n) ? new gr(n.x, n.y, n.z, n.w) : new gr();
  }
  function x0(n, e) {
    n.writeProperty("x", e.x),
      n.writeProperty("y", e.y),
      n.writeProperty("z", e.z),
      n.writeProperty("w", e.w);
  }
  function P0(n, e) {
    return new kl({
      assembly: bd,
      components: [
        Li(Object.assign(Object.assign({}, n), n.x), e.x),
        Li(Object.assign(Object.assign({}, n), n.y), e.y),
        Li(Object.assign(Object.assign({}, n), n.z), e.z),
        Li(Object.assign(Object.assign({}, n), n.w), e.w),
      ],
    });
  }
  pt({
    id: "input-point4d",
    type: "input",
    accept: (n, e) => {
      if (!gr.isObject(n)) return null;
      const t = et(e, (i) =>
        Object.assign(Object.assign({}, fs(i)), {
          readonly: i.optional.constant(!1),
          w: i.optional.custom(Ji),
          x: i.optional.custom(Ji),
          y: i.optional.custom(Ji),
          z: i.optional.custom(Ji),
        })
      );
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: (n) => E0,
      constraint: (n) => P0(n.params, n.initialValue),
      equals: gr.equals,
      writer: (n) => x0,
    },
    controller: (n) => {
      const e = n.value,
        t = n.constraint,
        i = [n.params.x, n.params.y, n.params.z, n.params.w];
      return new Al(n.document, {
        assembly: bd,
        axes: e.rawValue.getComponents().map((r, s) => {
          var o;
          return Qa({
            constraint: t.components[s],
            initialValue: r,
            params: On(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}),
          });
        }),
        parser: Qi,
        value: e,
        viewProps: n.viewProps,
      });
    },
  });
  function S0(n) {
    const e = [],
      t = pl(n.options);
    return t && e.push(t), new cs(e);
  }
  pt({
    id: "input-string",
    type: "input",
    accept: (n, e) => {
      if (typeof n != "string") return null;
      const t = et(e, (i) => ({
        readonly: i.optional.constant(!1),
        options: i.optional.custom(wo),
      }));
      return t ? { initialValue: n, params: t } : null;
    },
    binding: {
      reader: (n) => $c,
      constraint: (n) => S0(n.params),
      writer: (n) => ms,
    },
    controller: (n) => {
      const e = n.document,
        t = n.value,
        i = n.constraint,
        r = i && vo(i, go);
      return r
        ? new dr(e, {
            props: new re({ options: r.values.value("options") }),
            value: t,
            viewProps: n.viewProps,
          })
        : new ml(e, {
            parser: (s) => s,
            props: re.fromObject({ formatter: _l }),
            value: t,
            viewProps: n.viewProps,
          });
    },
    api(n) {
      return typeof n.controller.value.rawValue != "string"
        ? null
        : n.controller.valueController instanceof dr
        ? new dl(n.controller)
        : null;
    },
  });
  const xo = { monitor: { defaultInterval: 200, defaultRows: 3 } },
    Cd = se("mll");
  class T0 {
    constructor(e, t) {
      (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
        (this.formatter_ = t.formatter),
        (this.element = e.createElement("div")),
        this.element.classList.add(Cd()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("textarea");
      i.classList.add(Cd("i")),
        (i.style.height = `calc(var(${Uc("containerUnitSize")}) * ${t.rows})`),
        (i.readOnly = !0),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.textareaElem_ = i),
        t.value.emitter.on("change", this.onValueUpdate_),
        (this.value = t.value),
        this.update_();
    }
    update_() {
      const e = this.textareaElem_,
        t = e.scrollTop === e.scrollHeight - e.clientHeight,
        i = [];
      this.value.rawValue.forEach((r) => {
        r !== void 0 && i.push(this.formatter_(r));
      }),
        (e.textContent = i.join(`
`)),
        t && (e.scrollTop = e.scrollHeight);
    }
    onValueUpdate_() {
      this.update_();
    }
  }
  class Ol {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new T0(e, {
          formatter: t.formatter,
          rows: t.rows,
          value: this.value,
          viewProps: this.viewProps,
        }));
    }
  }
  const yd = se("sgl");
  class F0 {
    constructor(e, t) {
      (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
        (this.formatter_ = t.formatter),
        (this.element = e.createElement("div")),
        this.element.classList.add(yd()),
        t.viewProps.bindClassModifiers(this.element);
      const i = e.createElement("input");
      i.classList.add(yd("i")),
        (i.readOnly = !0),
        (i.type = "text"),
        t.viewProps.bindDisabled(i),
        this.element.appendChild(i),
        (this.inputElement = i),
        t.value.emitter.on("change", this.onValueUpdate_),
        (this.value = t.value),
        this.update_();
    }
    update_() {
      const e = this.value.rawValue,
        t = e[e.length - 1];
      this.inputElement.value = t !== void 0 ? this.formatter_(t) : "";
    }
    onValueUpdate_() {
      this.update_();
    }
  }
  class Ml {
    constructor(e, t) {
      (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.view = new F0(e, {
          formatter: t.formatter,
          value: this.value,
          viewProps: this.viewProps,
        }));
    }
  }
  pt({
    id: "monitor-bool",
    type: "monitor",
    accept: (n, e) => {
      if (typeof n != "boolean") return null;
      const t = et(e, (i) => ({
        readonly: i.required.constant(!0),
        rows: i.optional.number,
      }));
      return t ? { initialValue: n, params: t } : null;
    },
    binding: { reader: (n) => Ic },
    controller: (n) => {
      var e;
      return n.value.rawValue.length === 1
        ? new Ml(n.document, {
            formatter: zc,
            value: n.value,
            viewProps: n.viewProps,
          })
        : new Ol(n.document, {
            formatter: zc,
            rows:
              (e = n.params.rows) !== null && e !== void 0
                ? e
                : xo.monitor.defaultRows,
            value: n.value,
            viewProps: n.viewProps,
          });
    },
  });
  class k0 extends el {
    get max() {
      return this.controller.valueController.props.get("max");
    }
    set max(e) {
      this.controller.valueController.props.set("max", e);
    }
    get min() {
      return this.controller.valueController.props.get("min");
    }
    set min(e) {
      this.controller.valueController.props.set("min", e);
    }
  }
  const rn = se("grl");
  class A0 {
    constructor(e, t) {
      (this.onCursorChange_ = this.onCursorChange_.bind(this)),
        (this.onValueUpdate_ = this.onValueUpdate_.bind(this)),
        (this.element = e.createElement("div")),
        this.element.classList.add(rn()),
        t.viewProps.bindClassModifiers(this.element),
        (this.formatter_ = t.formatter),
        (this.props_ = t.props),
        (this.cursor_ = t.cursor),
        this.cursor_.emitter.on("change", this.onCursorChange_);
      const i = e.createElementNS(gi, "svg");
      i.classList.add(rn("g")),
        (i.style.height = `calc(var(${Uc("containerUnitSize")}) * ${t.rows})`),
        this.element.appendChild(i),
        (this.svgElem_ = i);
      const r = e.createElementNS(gi, "polyline");
      this.svgElem_.appendChild(r), (this.lineElem_ = r);
      const s = e.createElement("div");
      s.classList.add(rn("t"), se("tt")()),
        this.element.appendChild(s),
        (this.tooltipElem_ = s),
        t.value.emitter.on("change", this.onValueUpdate_),
        (this.value = t.value),
        this.update_();
    }
    get graphElement() {
      return this.svgElem_;
    }
    update_() {
      const { clientWidth: e, clientHeight: t } = this.element,
        i = this.value.rawValue.length - 1,
        r = this.props_.get("min"),
        s = this.props_.get("max"),
        o = [];
      this.value.rawValue.forEach((d, f) => {
        if (d === void 0) return;
        const c = le(f, 0, i, 0, e),
          m = le(d, r, s, t, 0);
        o.push([c, m].join(","));
      }),
        this.lineElem_.setAttributeNS(null, "points", o.join(" "));
      const a = this.tooltipElem_,
        l = this.value.rawValue[this.cursor_.rawValue];
      if (l === void 0) {
        a.classList.remove(rn("t", "a"));
        return;
      }
      const u = le(this.cursor_.rawValue, 0, i, 0, e),
        h = le(l, r, s, t, 0);
      (a.style.left = `${u}px`),
        (a.style.top = `${h}px`),
        (a.textContent = `${this.formatter_(l)}`),
        a.classList.contains(rn("t", "a")) ||
          (a.classList.add(rn("t", "a"), rn("t", "in")),
          mo(a),
          a.classList.remove(rn("t", "in")));
    }
    onValueUpdate_() {
      this.update_();
    }
    onCursorChange_() {
      this.update_();
    }
  }
  class Ed {
    constructor(e, t) {
      if (
        ((this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this)),
        (this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this)),
        (this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this)),
        (this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this)),
        (this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this)),
        (this.props = t.props),
        (this.value = t.value),
        (this.viewProps = t.viewProps),
        (this.cursor_ = $e(-1)),
        (this.view = new A0(e, {
          cursor: this.cursor_,
          formatter: t.formatter,
          rows: t.rows,
          props: this.props,
          value: this.value,
          viewProps: this.viewProps,
        })),
        !il(e))
      )
        this.view.element.addEventListener("mousemove", this.onGraphMouseMove_),
          this.view.element.addEventListener(
            "mouseleave",
            this.onGraphMouseLeave_
          );
      else {
        const i = new Mn(this.view.element);
        i.emitter.on("down", this.onGraphPointerDown_),
          i.emitter.on("move", this.onGraphPointerMove_),
          i.emitter.on("up", this.onGraphPointerUp_);
      }
    }
    importProps(e) {
      return _i(
        e,
        null,
        (t) => ({ max: t.required.number, min: t.required.number }),
        (t) => (this.props.set("max", t.max), this.props.set("min", t.min), !0)
      );
    }
    exportProps() {
      return vi(null, {
        max: this.props.get("max"),
        min: this.props.get("min"),
      });
    }
    onGraphMouseLeave_() {
      this.cursor_.rawValue = -1;
    }
    onGraphMouseMove_(e) {
      const { clientWidth: t } = this.view.element;
      this.cursor_.rawValue = Math.floor(
        le(e.offsetX, 0, t, 0, this.value.rawValue.length)
      );
    }
    onGraphPointerDown_(e) {
      this.onGraphPointerMove_(e);
    }
    onGraphPointerMove_(e) {
      if (!e.data.point) {
        this.cursor_.rawValue = -1;
        return;
      }
      this.cursor_.rawValue = Math.floor(
        le(
          e.data.point.x,
          0,
          e.data.bounds.width,
          0,
          this.value.rawValue.length
        )
      );
    }
    onGraphPointerUp_() {
      this.cursor_.rawValue = -1;
    }
  }
  function Ll(n) {
    return we(n.format) ? Et(2) : n.format;
  }
  function O0(n) {
    var e;
    return n.value.rawValue.length === 1
      ? new Ml(n.document, {
          formatter: Ll(n.params),
          value: n.value,
          viewProps: n.viewProps,
        })
      : new Ol(n.document, {
          formatter: Ll(n.params),
          rows:
            (e = n.params.rows) !== null && e !== void 0
              ? e
              : xo.monitor.defaultRows,
          value: n.value,
          viewProps: n.viewProps,
        });
  }
  function M0(n) {
    var e, t, i;
    return new Ed(n.document, {
      formatter: Ll(n.params),
      rows:
        (e = n.params.rows) !== null && e !== void 0
          ? e
          : xo.monitor.defaultRows,
      props: re.fromObject({
        max: (t = n.params.max) !== null && t !== void 0 ? t : 100,
        min: (i = n.params.min) !== null && i !== void 0 ? i : 0,
      }),
      value: n.value,
      viewProps: n.viewProps,
    });
  }
  function xd(n) {
    return n.view === "graph";
  }
  pt({
    id: "monitor-number",
    type: "monitor",
    accept: (n, e) => {
      if (typeof n != "number") return null;
      const t = et(e, (i) => ({
        format: i.optional.function,
        max: i.optional.number,
        min: i.optional.number,
        readonly: i.required.constant(!0),
        rows: i.optional.number,
        view: i.optional.string,
      }));
      return t ? { initialValue: n, params: t } : null;
    },
    binding: { defaultBufferSize: (n) => (xd(n) ? 64 : 1), reader: (n) => uc },
    controller: (n) => (xd(n.params) ? M0(n) : O0(n)),
    api: (n) =>
      n.controller.valueController instanceof Ed ? new k0(n.controller) : null,
  }),
    pt({
      id: "monitor-string",
      type: "monitor",
      accept: (n, e) => {
        if (typeof n != "string") return null;
        const t = et(e, (i) => ({
          multiline: i.optional.boolean,
          readonly: i.required.constant(!0),
          rows: i.optional.number,
        }));
        return t ? { initialValue: n, params: t } : null;
      },
      binding: { reader: (n) => $c },
      controller: (n) => {
        var e;
        const t = n.value;
        return t.rawValue.length > 1 || n.params.multiline
          ? new Ol(n.document, {
              formatter: _l,
              rows:
                (e = n.params.rows) !== null && e !== void 0
                  ? e
                  : xo.monitor.defaultRows,
              value: t,
              viewProps: n.viewProps,
            })
          : new Ml(n.document, {
              formatter: _l,
              value: t,
              viewProps: n.viewProps,
            });
      },
    }),
    new Pc("4.0.5");
  const L0 = (n = "[data-canvas]") => {
    const e = document.querySelector(n);
    if (!e || !(e instanceof HTMLCanvasElement))
      return (
        console.warn(
          `Valid canvas element "${n}" not found. dotEffect initialization skipped.`
        ),
        () => {}
      );
    const t = e,
      i = t.getContext("2d", { alpha: !1 });
    if (!i)
      return (
        console.error(
          "Failed to get canvas context. dotEffect initialization skipped."
        ),
        () => {}
      );
    const r = {
        dots: {
          size: 800,
          spacing: 50,
          colors: { normal: "#1B041F", hover: "#296B29" },
        },
        mouse: {
          influence: 40,
          pushStrength: 10,
          speedLimit: 15,
          showTrails: !1,
        },
        animation: { moveAway: 0.6, returnBack: 1.3, bounceAmount: 0.5 },
        canvas: { background: "#000000", resizeDelay: 100 },
      },
      s = {
        get radius() {
          return window.innerWidth / r.dots.size;
        },
        get space() {
          return window.innerWidth / r.dots.spacing;
        },
        get cols() {
          return (
            Math.ceil(window.innerWidth / (this.radius * 2 + this.space)) + 1
          );
        },
        get rows() {
          return (
            Math.ceil(window.innerHeight / (this.radius * 2 + this.space)) + 1
          );
        },
        colors: {
          background: r.canvas.background,
          dot: r.dots.colors.normal,
          hover: r.dots.colors.hover,
        },
        animation: {
          duration: r.animation.moveAway,
          returnDuration: r.animation.returnBack,
          elasticity: r.animation.bounceAmount,
        },
      },
      o = {
        threshold: r.mouse.influence,
        radius: r.mouse.pushStrength,
        maxSpeed: r.mouse.speedLimit,
        trail: r.mouse.showTrails,
      },
      a = [],
      l = {
        x: 0,
        y: 0,
        prevX: 0,
        prevY: 0,
        velocity: { x: 0, y: 0 },
        hoverThreshold: window.innerWidth / o.threshold,
        isActive: !1,
      };
    class u {
      constructor(b, y, w) {
        (this.params = {
          x: b,
          y,
          radius: w,
          x2: b,
          y2: y,
          scale: 1,
          color: s.colors.dot,
          alpha: 1,
        }),
          (this.velocity = { x: 0, y: 0 });
      }
      update() {
        if (
          d(this.params.x, this.params.y, this.params.radius) <=
            l.hoverThreshold &&
          l.isActive
        ) {
          const w = l.x - this.params.x,
            T = l.y - this.params.y,
            x = Math.max(1, Math.sqrt(w * w + T * T)),
            S = this.params.x - (w / x) * o.radius - l.velocity.x * 2,
            R = this.params.y - (T / x) * o.radius - l.velocity.y * 2;
          he.to(this.params, {
            duration: s.animation.duration,
            x2: S,
            y2: R,
            scale: 1.2,
            color: s.colors.hover,
            ease: "power2.out",
          });
        } else
          he.to(this.params, {
            duration: s.animation.returnDuration,
            x2: this.params.x,
            y2: this.params.y,
            scale: 1,
            color: s.colors.dot,
            ease: `elastic.out(1,${s.animation.elasticity})`,
          });
      }
      draw() {
        i.beginPath(),
          i.arc(
            this.params.x2,
            this.params.y2,
            this.params.radius * this.params.scale,
            0,
            2 * Math.PI
          ),
          (i.fillStyle = this.params.color),
          i.fill();
      }
    }
    const h = () => {
        const v = window.devicePixelRatio || 1;
        (t.width = window.innerWidth * v),
          (t.height = window.innerHeight * v),
          i.scale(v, v),
          (t.style.width = `${window.innerWidth}px`),
          (t.style.height = `${window.innerHeight}px`);
      },
      d = (v, b, y) => {
        const w = l.x - (v + y),
          T = l.y - (b + y);
        return Math.floor(Math.sqrt(w * w + T * T)) - Math.round(y);
      },
      f = () => {
        a.length = 0;
        for (let v = 0; v < s.cols; v++) {
          const b = v * (s.space + s.radius * 2) + s.radius;
          for (let y = 0; y < s.rows; y++) {
            const w = y * (s.space + s.radius * 2) + s.radius;
            a.push(new u(b, w, s.radius));
          }
        }
      };
    let c;
    const m = () => {
      (l.velocity.x = l.x - l.prevX),
        (l.velocity.y = l.y - l.prevY),
        (i.fillStyle = s.colors.background),
        i.fillRect(0, 0, t.width, t.height),
        a.forEach((v) => {
          v.update(), v.draw();
        }),
        (l.prevX = l.x),
        (l.prevY = l.y),
        (c = requestAnimationFrame(m));
    };
    h(), f(), m();
    const p = (v) => {
        const b = t.getBoundingClientRect();
        (l.x = v.clientX - b.left),
          (l.y = v.clientY - b.top),
          (l.isActive = !0);
      },
      _ = () => {
        l.isActive = !1;
      };
    let D;
    const C = () => {
      clearTimeout(D),
        (D = setTimeout(() => {
          (l.hoverThreshold = window.innerWidth / o.threshold), h(), f();
        }, r.canvas.resizeDelay));
    };
    return (
      window.addEventListener("mousemove", p),
      window.addEventListener("mouseout", _),
      window.addEventListener("resize", C),
      () => {
        window.removeEventListener("mousemove", p),
          window.removeEventListener("mouseout", _),
          window.removeEventListener("resize", C),
          c && cancelAnimationFrame(c);
      }
    );
  };
  (function () {
    function n() {
      for (var i = arguments.length, r = 0; r < i; r++) {
        var s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
        s.nodeType === 1 || s.nodeType === 11
          ? this.appendChild(s)
          : this.appendChild(document.createTextNode(String(s)));
      }
    }
    function e() {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      arguments.length && this.append.apply(this, arguments);
    }
    function t() {
      for (
        var i = this.parentNode, r = arguments.length, s = new Array(r), o = 0;
        o < r;
        o++
      )
        s[o] = arguments[o];
      var a = s.length;
      if (i)
        for (a || i.removeChild(this); a--; ) {
          var l = s[a];
          typeof l != "object"
            ? (l = this.ownerDocument.createTextNode(l))
            : l.parentNode && l.parentNode.removeChild(l),
            a
              ? i.insertBefore(this.previousSibling, l)
              : i.replaceChild(l, this);
        }
    }
    typeof Element < "u" &&
      (Element.prototype.append ||
        ((Element.prototype.append = n),
        (DocumentFragment.prototype.append = n)),
      Element.prototype.replaceChildren ||
        ((Element.prototype.replaceChildren = e),
        (DocumentFragment.prototype.replaceChildren = e)),
      Element.prototype.replaceWith ||
        ((Element.prototype.replaceWith = t),
        (DocumentFragment.prototype.replaceWith = t)));
  })();
  function R0(n, e) {
    if (!(n instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function Pd(n, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
    }
  }
  function Sd(n, e, t) {
    return e && Pd(n.prototype, e), t && Pd(n, t), n;
  }
  function V0(n, e, t) {
    return (
      e in n
        ? Object.defineProperty(n, e, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (n[e] = t),
      n
    );
  }
  function Td(n, e) {
    var t = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(n);
      e &&
        (i = i.filter(function (r) {
          return Object.getOwnPropertyDescriptor(n, r).enumerable;
        })),
        t.push.apply(t, i);
    }
    return t;
  }
  function Fd(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Td(Object(t), !0).forEach(function (i) {
            V0(n, i, t[i]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
        : Td(Object(t)).forEach(function (i) {
            Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i));
          });
    }
    return n;
  }
  function kd(n, e) {
    return N0(n) || z0(n, e) || Ad(n, e) || j0();
  }
  function mt(n) {
    return B0(n) || I0(n) || Ad(n) || $0();
  }
  function B0(n) {
    if (Array.isArray(n)) return Rl(n);
  }
  function N0(n) {
    if (Array.isArray(n)) return n;
  }
  function I0(n) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(n))
      return Array.from(n);
  }
  function z0(n, e) {
    if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(n)))) {
      var t = [],
        i = !0,
        r = !1,
        s = void 0;
      try {
        for (
          var o = n[Symbol.iterator](), a;
          !(i = (a = o.next()).done) &&
          (t.push(a.value), !(e && t.length === e));
          i = !0
        );
      } catch (l) {
        (r = !0), (s = l);
      } finally {
        try {
          !i && o.return != null && o.return();
        } finally {
          if (r) throw s;
        }
      }
      return t;
    }
  }
  function Ad(n, e) {
    if (n) {
      if (typeof n == "string") return Rl(n, e);
      var t = Object.prototype.toString.call(n).slice(8, -1);
      if (
        (t === "Object" && n.constructor && (t = n.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(n);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return Rl(n, e);
    }
  }
  function Rl(n, e) {
    (e == null || e > n.length) && (e = n.length);
    for (var t = 0, i = new Array(e); t < e; t++) i[t] = n[t];
    return i;
  }
  function $0() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function j0() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Vn(n, e) {
    return Object.getOwnPropertyNames(Object(n)).reduce(function (t, i) {
      var r = Object.getOwnPropertyDescriptor(Object(n), i),
        s = Object.getOwnPropertyDescriptor(Object(e), i);
      return Object.defineProperty(t, i, s || r);
    }, {});
  }
  function gs(n) {
    return typeof n == "string";
  }
  function Vl(n) {
    return Array.isArray(n);
  }
  function Po() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      e = Vn(n),
      t;
    return (
      e.types !== void 0 ? (t = e.types) : e.split !== void 0 && (t = e.split),
      t !== void 0 &&
        (e.types = (gs(t) || Vl(t) ? String(t) : "")
          .split(",")
          .map(function (i) {
            return String(i).trim();
          })
          .filter(function (i) {
            return /((line)|(word)|(char))/i.test(i);
          })),
      (e.absolute || e.position) &&
        (e.absolute = e.absolute || /absolute/.test(n.position)),
      e
    );
  }
  function Bl(n) {
    var e = gs(n) || Vl(n) ? String(n) : "";
    return {
      none: !e,
      lines: /line/i.test(e),
      words: /word/i.test(e),
      chars: /char/i.test(e),
    };
  }
  function So(n) {
    return n !== null && typeof n == "object";
  }
  function H0(n) {
    return So(n) && /^(1|3|11)$/.test(n.nodeType);
  }
  function U0(n) {
    return typeof n == "number" && n > -1 && n % 1 === 0;
  }
  function W0(n) {
    return So(n) && U0(n.length);
  }
  function Bn(n) {
    return Vl(n)
      ? n
      : n == null
      ? []
      : W0(n)
      ? Array.prototype.slice.call(n)
      : [n];
  }
  function Od(n) {
    var e = n;
    return (
      gs(n) &&
        (/^(#[a-z]\w+)$/.test(n.trim())
          ? (e = document.getElementById(n.trim().slice(1)))
          : (e = document.querySelectorAll(n))),
      Bn(e).reduce(function (t, i) {
        return [].concat(mt(t), mt(Bn(i).filter(H0)));
      }, [])
    );
  }
  var q0 = Object.entries,
    To = "_splittype",
    ei = {},
    K0 = 0;
  function bi(n, e, t) {
    if (!So(n)) return console.warn("[data.set] owner is not an object"), null;
    var i = n[To] || (n[To] = ++K0),
      r = ei[i] || (ei[i] = {});
    return (
      t === void 0
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (ei[i] = Fd(Fd({}, r), e))
        : e !== void 0 && (r[e] = t),
      t
    );
  }
  function Nn(n, e) {
    var t = So(n) ? n[To] : null,
      i = (t && ei[t]) || {};
    return i;
  }
  function Md(n) {
    var e = n && n[To];
    e && (delete n[e], delete ei[e]);
  }
  function Y0() {
    Object.keys(ei).forEach(function (n) {
      delete ei[n];
    });
  }
  function G0() {
    q0(ei).forEach(function (n) {
      var e = kd(n, 2),
        t = e[0],
        i = e[1],
        r = i.isRoot,
        s = i.isSplit;
      (!r || !s) && ((ei[t] = null), delete ei[t]);
    });
  }
  function X0(n) {
    var e =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ",
      t = n ? String(n) : "";
    return t.trim().replace(/\s+/g, " ").split(e);
  }
  var Nl = "\\ud800-\\udfff",
    Ld = "\\u0300-\\u036f\\ufe20-\\ufe23",
    Rd = "\\u20d0-\\u20f0",
    Vd = "\\ufe0e\\ufe0f",
    Z0 = "[".concat(Nl, "]"),
    Il = "[".concat(Ld).concat(Rd, "]"),
    zl = "\\ud83c[\\udffb-\\udfff]",
    Q0 = "(?:".concat(Il, "|").concat(zl, ")"),
    Bd = "[^".concat(Nl, "]"),
    Nd = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Id = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    zd = "\\u200d",
    $d = "".concat(Q0, "?"),
    jd = "[".concat(Vd, "]?"),
    J0 = "(?:" + zd + "(?:" + [Bd, Nd, Id].join("|") + ")" + jd + $d + ")*",
    eg = jd + $d + J0,
    tg = "(?:".concat(
      ["".concat(Bd).concat(Il, "?"), Il, Nd, Id, Z0].join("|"),
      `
)`
    ),
    ig = RegExp(
      "".concat(zl, "(?=").concat(zl, ")|").concat(tg).concat(eg),
      "g"
    ),
    ng = [zd, Nl, Ld, Rd, Vd],
    rg = RegExp("[".concat(ng.join(""), "]"));
  function sg(n) {
    return n.split("");
  }
  function Hd(n) {
    return rg.test(n);
  }
  function og(n) {
    return n.match(ig) || [];
  }
  function ag(n) {
    return Hd(n) ? og(n) : sg(n);
  }
  function lg(n) {
    return n == null ? "" : String(n);
  }
  function ug(n) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return (n = lg(n)), n && gs(n) && !e && Hd(n) ? ag(n) : n.split(e);
  }
  function $l(n, e) {
    var t = document.createElement(n);
    return (
      e &&
        Object.keys(e).forEach(function (i) {
          var r = e[i],
            s = gs(r) ? r.trim() : r;
          s === null ||
            s === "" ||
            (i === "children"
              ? t.append.apply(t, mt(Bn(s)))
              : t.setAttribute(i, s));
        }),
      t
    );
  }
  var jl = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function hg(n, e) {
    e = Vn(jl, e);
    var t = Bl(e.types),
      i = e.tagName,
      r = n.nodeValue,
      s = document.createDocumentFragment(),
      o = [],
      a = [];
    return (
      /^\s/.test(r) && s.append(" "),
      (o = X0(r).reduce(function (l, u, h, d) {
        var f, c;
        return (
          t.chars &&
            (c = ug(u).map(function (m) {
              var p = $l(i, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                children: m,
              });
              return bi(p, "isChar", !0), (a = [].concat(mt(a), [p])), p;
            })),
          t.words || t.lines
            ? ((f = $l(i, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; ".concat(
                  t.words && e.absolute ? "position: relative;" : ""
                ),
                children: t.chars ? c : u,
              })),
              bi(f, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              s.appendChild(f))
            : c.forEach(function (m) {
                s.appendChild(m);
              }),
          h < d.length - 1 && s.append(" "),
          t.words ? l.concat(f) : l
        );
      }, [])),
      /\s$/.test(r) && s.append(" "),
      n.replaceWith(s),
      { words: o, chars: a }
    );
  }
  function Ud(n, e) {
    var t = n.nodeType,
      i = { words: [], chars: [] };
    if (!/(1|3|11)/.test(t)) return i;
    if (t === 3 && /\S/.test(n.nodeValue)) return hg(n, e);
    var r = Bn(n.childNodes);
    if (r.length && (bi(n, "isSplit", !0), !Nn(n).isRoot)) {
      (n.style.display = "inline-block"), (n.style.position = "relative");
      var s = n.nextSibling,
        o = n.previousSibling,
        a = n.textContent || "",
        l = s ? s.textContent : " ",
        u = o ? o.textContent : " ";
      bi(n, {
        isWordEnd: /\s$/.test(a) || /^\s/.test(l),
        isWordStart: /^\s/.test(a) || /\s$/.test(u),
      });
    }
    return r.reduce(function (h, d) {
      var f = Ud(d, e),
        c = f.words,
        m = f.chars;
      return {
        words: [].concat(mt(h.words), mt(c)),
        chars: [].concat(mt(h.chars), mt(m)),
      };
    }, i);
  }
  function cg(n, e, t, i) {
    if (!t.absolute) return { top: e ? n.offsetTop : null };
    var r = n.offsetParent,
      s = kd(i, 2),
      o = s[0],
      a = s[1],
      l = 0,
      u = 0;
    if (r && r !== document.body) {
      var h = r.getBoundingClientRect();
      (l = h.x + o), (u = h.y + a);
    }
    var d = n.getBoundingClientRect(),
      f = d.width,
      c = d.height,
      m = d.x,
      p = d.y,
      _ = p + a - u,
      D = m + o - l;
    return { width: f, height: c, top: _, left: D };
  }
  function Wd(n) {
    Nn(n).isWord
      ? (Md(n), n.replaceWith.apply(n, mt(n.childNodes)))
      : Bn(n.children).forEach(function (e) {
          return Wd(e);
        });
  }
  var dg = function () {
    return document.createDocumentFragment();
  };
  function pg(n, e, t) {
    var i = Bl(e.types),
      r = e.tagName,
      s = n.getElementsByTagName("*"),
      o = [],
      a = [],
      l = null,
      u,
      h,
      d,
      f = [],
      c = n.parentElement,
      m = n.nextElementSibling,
      p = dg(),
      _ = window.getComputedStyle(n),
      D = _.textAlign,
      C = parseFloat(_.fontSize),
      P = C * 0.2;
    return (
      e.absolute &&
        ((d = { left: n.offsetLeft, top: n.offsetTop, width: n.offsetWidth }),
        (h = n.offsetWidth),
        (u = n.offsetHeight),
        bi(n, { cssWidth: n.style.width, cssHeight: n.style.height })),
      Bn(s).forEach(function (v) {
        var b = v.parentElement === n,
          y = cg(v, b, e, t),
          w = y.width,
          T = y.height,
          x = y.top,
          S = y.left;
        /^br$/i.test(v.nodeName) ||
          (i.lines &&
            b &&
            ((l === null || x - l >= P) && ((l = x), o.push((a = []))),
            a.push(v)),
          e.absolute && bi(v, { top: x, left: S, width: w, height: T }));
      }),
      c && c.removeChild(n),
      i.lines &&
        ((f = o.map(function (v) {
          var b = $l(r, {
            class: "".concat(e.splitClass, " ").concat(e.lineClass),
            style: "display: block; text-align: ".concat(D, "; width: 100%;"),
          });
          bi(b, "isLine", !0);
          var y = { height: 0, top: 1e4 };
          return (
            p.appendChild(b),
            v.forEach(function (w, T, x) {
              var S = Nn(w),
                R = S.isWordEnd,
                k = S.top,
                I = S.height,
                j = x[T + 1];
              (y.height = Math.max(y.height, I)),
                (y.top = Math.min(y.top, k)),
                b.appendChild(w),
                R && Nn(j).isWordStart && b.append(" ");
            }),
            e.absolute && bi(b, { height: y.height, top: y.top }),
            b
          );
        })),
        i.words || Wd(p),
        n.replaceChildren(p)),
      e.absolute &&
        ((n.style.width = "".concat(n.style.width || h, "px")),
        (n.style.height = "".concat(u, "px")),
        Bn(s).forEach(function (v) {
          var b = Nn(v),
            y = b.isLine,
            w = b.top,
            T = b.left,
            x = b.width,
            S = b.height,
            R = Nn(v.parentElement),
            k = !y && R.isLine;
          (v.style.top = "".concat(k ? w - R.top : w, "px")),
            (v.style.left = y
              ? "".concat(d.left, "px")
              : "".concat(T - (k ? d.left : 0), "px")),
            (v.style.height = "".concat(S, "px")),
            (v.style.width = y ? "".concat(d.width, "px") : "".concat(x, "px")),
            (v.style.position = "absolute");
        })),
      c && (m ? c.insertBefore(n, m) : c.appendChild(n)),
      f
    );
  }
  var wr = Vn(jl, {}),
    Hl = (function () {
      Sd(n, null, [
        {
          key: "clearData",
          value: function () {
            Y0();
          },
        },
        {
          key: "setDefaults",
          value: function (t) {
            return (wr = Vn(wr, Po(t))), jl;
          },
        },
        {
          key: "revert",
          value: function (t) {
            Od(t).forEach(function (i) {
              var r = Nn(i),
                s = r.isSplit,
                o = r.html,
                a = r.cssWidth,
                l = r.cssHeight;
              s &&
                ((i.innerHTML = o),
                (i.style.width = a || ""),
                (i.style.height = l || ""),
                Md(i));
            });
          },
        },
        {
          key: "create",
          value: function (t, i) {
            return new n(t, i);
          },
        },
        {
          key: "data",
          get: function () {
            return ei;
          },
        },
        {
          key: "defaults",
          get: function () {
            return wr;
          },
          set: function (t) {
            wr = Vn(wr, Po(t));
          },
        },
      ]);
      function n(e, t) {
        R0(this, n),
          (this.isSplit = !1),
          (this.settings = Vn(wr, Po(t))),
          (this.elements = Od(e)),
          this.split();
      }
      return (
        Sd(n, [
          {
            key: "split",
            value: function (t) {
              var i = this;
              this.revert(),
                this.elements.forEach(function (o) {
                  bi(o, "html", o.innerHTML);
                }),
                (this.lines = []),
                (this.words = []),
                (this.chars = []);
              var r = [window.pageXOffset, window.pageYOffset];
              t !== void 0 && (this.settings = Vn(this.settings, Po(t)));
              var s = Bl(this.settings.types);
              s.none ||
                (this.elements.forEach(function (o) {
                  bi(o, "isRoot", !0);
                  var a = Ud(o, i.settings),
                    l = a.words,
                    u = a.chars;
                  (i.words = [].concat(mt(i.words), mt(l))),
                    (i.chars = [].concat(mt(i.chars), mt(u)));
                }),
                this.elements.forEach(function (o) {
                  if (s.lines || i.settings.absolute) {
                    var a = pg(o, i.settings, r);
                    i.lines = [].concat(mt(i.lines), mt(a));
                  }
                }),
                (this.isSplit = !0),
                window.scrollTo(r[0], r[1]),
                G0());
            },
          },
          {
            key: "revert",
            value: function () {
              this.isSplit &&
                ((this.lines = null),
                (this.words = null),
                (this.chars = null),
                (this.isSplit = !1)),
                n.revert(this.elements);
            },
          },
        ]),
        n
      );
    })();
  class fg {
    constructor({ element: e, config: t, addClass: i }) {
      (this.element = e),
        (this.config = {
          root: null,
          margin: (t == null ? void 0 : t.margin) || "10px",
          threshold: (t == null ? void 0 : t.threshold) || 0,
          once: t.once,
        }),
        i !== void 0 && (this.addClass = i),
        this.init(),
        this.start();
    }
    init() {
      (this.in = new IntersectionObserver(
        (e) => {
          e.forEach((t) => {
            t.isIntersecting && this.isIn();
          });
        },
        { rootMargin: this.config.margin, threshold: this.config.threshold }
      )),
        (this.out = new IntersectionObserver(
          (e) => {
            e.forEach((t) => {
              t.isIntersecting || this.isOut();
            });
          },
          { rootMargin: "0px", threshold: 0 }
        ));
    }
    start() {
      this.in.observe(this.element), this.out.observe(this.element);
    }
    stop() {
      this.in.unobserve(this.element), this.out.unobserve(this.element);
    }
    isIn() {
      this.addClass && this.element.classList.add(this.addClass),
        this.config.once && this.stop(),
        this.animateIn();
    }
    isOut() {
      this.addClass && this.element.classList.remove(this.addClass),
        this.animateOut();
    }
  }
  class mg extends fg {
    constructor(e) {
      const t = {
        margin: e.dataset.obsM || "10px",
        threshold: +e.dataset.obsT || 0,
        once: e.dataset.obsOnce !== "false",
        aSplit: e.dataset.aSplit || "word",
        aDuration: e.dataset.aDuration ?? 1.9,
        aEach: e.dataset.aEach ?? 0.05,
        aDelay: e.dataset.aDelay ?? 0,
        aEase: e.dataset.aEase ?? "expo.out",
        aFrom: e.dataset.aFrom ?? "start",
      };
      super({ element: e, config: t }),
        (this.config = t),
        (this.item = e),
        (this.animated = this.returnSplit(e)),
        (this.a = { y: "120%", x: "0%" }),
        he.set(this.animated, { y: this.a.y });
    }
    returnSplit(e) {
      switch (e.dataset.aSplit) {
        case "char":
          return this.splitChars(this.splitWords(e));
        case "word":
          return this.splitWords(this.splitWords(e));
        case "line":
          return this.splitLines(this.splitLines(e));
        default:
          return this.splitWords(this.splitWords(e));
      }
    }
    splitChars(e) {
      return new Hl(e, { types: "chars" }).chars;
    }
    splitWords(e) {
      return new Hl(e, { types: "words" }).words;
    }
    splitLines(e) {
      return new Hl(e, { types: "lines" }).lines;
    }
    animateIn() {
      var e;
      (e = this.animation) == null || e.kill(),
        (this.animation = he.to(this.animated, {
          y: "0%",
          delay: this.config.aDelay,
          duration: this.config.aDuration,
          stagger: { each: this.config.aEach, from: this.config.aFrom },
          ease: this.config.aEase,
        }));
    }
    animateOut() {
      var e;
      (e = this.animation) == null || e.kill(),
        (this.animation = he.set(this.animated, { y: this.a.y }));
    }
  }
  class _g {
    constructor(e) {
      (this.selector = e),
        (this.reference = [...document.querySelectorAll(`[${e}]`)]),
        this.reference.length && (this.injectCss(), this.init());
    }
    init() {
      this.animations = this.reference.map((e) => new mg(e));
    }
    injectCss() {
      const e = document.createElement("style"),
        t = `
      [${this.selector}] > div {
        overflow: hidden;
      }
    `;
      (e.textContent = t), document.head.appendChild(e);
    }
  }
  function vg(n = "data-a-split") {
    return new _g(n);
  }
  he.registerPlugin($);
  function gg() {
    ic(),
      im(),
      rm(),
      L0(),
      vg(),
      document.documentElement.classList.add("lenis", "lenis-smooth");
  }
  function wg() {
    console.log("Home page animations initialized.");
  }
  function Dg() {
    wg();
  }
  function bg() {
    console.log("About page animations initialized.");
  }
  function Cg() {
    bg();
  }
  class yg extends Error {
    constructor(e, t) {
      super(e), (this.status = t), (this.name = "APIError");
    }
  }
  const qd = "lumaEvents",
    Eg = 5 * 60 * 1e3;
  async function Kd() {
    const n = xg();
    if (n) return n;
    const e = await Tg();
    return Pg(e), e;
  }
  function xg() {
    const n = localStorage.getItem(qd);
    if (n) {
      const { timestamp: e, events: t } = JSON.parse(n);
      if (Date.now() - e < Eg) return t;
    }
    return null;
  }
  function Pg(n) {
    localStorage.setItem(
      qd,
      JSON.stringify({ timestamp: Date.now(), events: n })
    );
  }
  async function Sg(n, e, t = 3) {
    for (let i = 0; i < t; i++)
      try {
        const r = await fetch(n, e);
        if (r.status === 429) {
          const s = parseInt(r.headers.get("Retry-After") || "60", 10);
          console.warn(`Rate limit exceeded. Retrying in ${s} seconds.`),
            await new Promise((o) => setTimeout(o, s * 1e3));
        } else return r;
      } catch (r) {
        if (i === t - 1) throw r;
        console.warn(`Attempt ${i + 1} failed, retrying...`);
      }
    throw new Error("Max retries reached");
  }
  async function Tg() {
    const n = "secret-iys9hRICmAUERgHZAmb7ONeSK";
    try {
      const e = await Sg("https://api.lu.ma/public/v1/calendar/list-events", {
        headers: { "x-luma-api-key": n, "Content-Type": "application/json" },
      });
      if (!e.ok) throw new yg(`HTTP error! status: ${e.status}`, e.status);
      const t = await e.json();
      if (!t || !Array.isArray(t.entries))
        throw new Error("Invalid API response structure");
      const i = new Date();
      return t.entries
        .map((s) => {
          const o = s.event;
          if (!o) return null;
          const a = new Date(o.start_at),
            l = new Date(o.end_at),
            u = l < i,
            h = kg(a, o.timezone);
          return {
            name: o.name || "Unnamed Event",
            date: h.dayDate,
            year: h.year,
            location: Fg(o),
            startTime: Yd(o.start_at, o.timezone),
            endTime: Yd(o.end_at, o.timezone),
            url: o.url || "#",
            imageUrl: o.cover_url || "default-image-url.jpg",
            isPast: u,
            description: o.description || "",
            timezone: o.timezone || "UTC",
            rawStartDate: a,
            rawEndDate: l,
          };
        })
        .filter(Boolean)
        .sort((s, o) =>
          s.isPast && !o.isPast
            ? 1
            : !s.isPast && o.isPast
            ? -1
            : s.rawStartDate - o.rawStartDate
        );
    } catch (e) {
      throw (console.error("Error fetching events:", e), e);
    }
  }
  function Fg(n) {
    if (n.geo_address_json) {
      const { address: e, city: t, region: i } = n.geo_address_json;
      return [e, t, i].filter(Boolean).join(", ");
    }
    return n.meeting_url || n.zoom_meeting_url
      ? "Virtual Event"
      : "Location TBA";
  }
  function kg(n, e) {
    const i = new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: e || "UTC",
      }).formatToParts(n),
      r = i.find((u) => u.type === "weekday").value,
      s = i.find((u) => u.type === "month").value,
      o = i.find((u) => u.type === "day").value,
      a = `${r}, ${s} ${o}`,
      l = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        timeZone: e || "UTC",
      }).format(n);
    return { dayDate: a, year: l };
  }
  function Yd(n, e) {
    const t = new Date(n);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: !0,
      timeZone: e || "UTC",
    }).format(t);
  }
  function Gd(n) {
    if (!n || !Array.isArray(n)) {
      console.error("Invalid events data received");
      return;
    }
    const e = n.filter((s) => !s.isPast),
      t = n.filter((s) => s.isPast),
      i = document.querySelector('[data-events="upcoming-list"]');
    if (i) {
      i.innerHTML = "";
      const s = document.querySelector('[data-template="upcoming"]');
      s && e.length > 0
        ? e.forEach((o) => {
            Xd(o, s.cloneNode(!0), i);
          })
        : e.length === 0 &&
          (i.innerHTML =
            '<div class="no-events">No upcoming events scheduled</div>');
    }
    const r = document.querySelector('[data-events="past-list"]');
    if (r) {
      r.innerHTML = "";
      const s = document.querySelector('[data-template="past"]');
      s &&
        t.length > 0 &&
        t.forEach((o) => {
          Xd(o, s.cloneNode(!0), r);
        });
    }
  }
  function Xd(n, e, t) {
    try {
      (e.style.display = "block"), e.removeAttribute("data-template");
      const i = (r, s) => {
        e.querySelectorAll(`[data-dynamic="${r}"]`).forEach((a) => {
          a.tagName === "IMG"
            ? ((a.src = s),
              (a.alt = n.name),
              (a.onerror = () => {
                (a.src = "default-image-url.jpg"),
                  (a.alt = "Event image unavailable");
              }))
            : a.tagName === "A"
            ? ((a.href = s),
              (a.target = "_blank"),
              (a.rel = "noopener noreferrer"))
            : (a.textContent = s);
        });
      };
      i("name", n.name),
        i("date", n.date),
        i("year", n.year),
        i("time", `${n.startTime} - ${n.endTime}`),
        i("timezone", n.timezone),
        i("location", n.location),
        i("cover_image", n.imageUrl),
        i("register_link", n.url),
        t.appendChild(e);
    } catch (i) {
      console.error("Error rendering event:", i, n);
    }
  }
  function Ag() {
    Og(), console.log("Events page initialized");
  }
  async function Og() {
    try {
      const n = await Kd();
      console.log("Events fetched:", n),
        Gd(n),
        setInterval(async () => {
          const e = await Kd();
          Gd(e);
        }, 5 * 60 * 1e3);
    } catch (n) {
      console.error("Failed to initialize events:", n);
    }
  }
  function Mg() {
    const n = document.querySelector("[data-page-name]");
    if (!n) {
      console.warn("No data-page-name attribute found on the page wrapper.");
      return;
    }
    const e = n.getAttribute("data-page-name");
    gg();
    const i = { home: Dg, about: Cg, events: Ag }[e];
    i ? i() : console.warn(`No specific animations found for page: ${e}`);
  }
  document.addEventListener("DOMContentLoaded", () => {
    Mg();
  }),
    console.log("Hello, Vite!");
});
