(function () {
  var g,
    aa = aa || {},
    h = this,
    ba = function () {},
    ca = function (a) {
      var b = typeof a;
      if ("object" == b)
        if (a) {
          if (a instanceof Array) return "array";
          if (a instanceof Object) return b;
          var c = Object.prototype.toString.call(a);
          if ("[object Window]" == c) return "object";
          if (
            "[object Array]" == c ||
            ("number" == typeof a.length &&
              "undefined" != typeof a.splice &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == c ||
            ("undefined" != typeof a.call &&
              "undefined" != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable("call"))
          )
            return "function";
        } else return "null";
      else if ("function" == b && "undefined" == typeof a.call) return "object";
      return b;
    },
    m = function (a) {
      return "array" == ca(a);
    },
    da = function (a) {
      var b = ca(a);
      return "array" == b || ("object" == b && "number" == typeof a.length);
    },
    n = function (a) {
      return "string" == typeof a;
    },
    ea = function (a) {
      return "number" == typeof a;
    },
    p = function (a) {
      return "function" == ca(a);
    },
    q = function (a) {
      var b = typeof a;
      return ("object" == b && null != a) || "function" == b;
    },
    fa = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    ga = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var c = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(c, d);
          return a.apply(b, c);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    r = function (a, b, c) {
      r =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf("native code")
          ? fa
          : ga;
      return r.apply(null, arguments);
    },
    ha = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b);
      };
    },
    s =
      Date.now ||
      function () {
        return +new Date();
      },
    t = function (a, b) {
      var c = a.split("."),
        d = h;
      c[0] in d || !d.execScript || d.execScript("var " + c[0]);
      for (var e; c.length && (e = c.shift()); )
        c.length || void 0 === b ? (d = d[e] ? d[e] : (d[e] = {})) : (d[e] = b);
    },
    u = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.L = b.prototype;
      a.prototype = new c();
      a.Pc = function (a, c, f) {
        return b.prototype[c].apply(
          a,
          Array.prototype.slice.call(arguments, 2)
        );
      };
    };
  Function.prototype.bind =
    Function.prototype.bind ||
    function (a, b) {
      if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return r.apply(null, c);
      }
      return r(this, a);
    };
  var v = function (a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, v);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  };
  u(v, Error);
  v.prototype.name = "CustomError";
  var ia = function (a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  };
  var w = Array.prototype,
    ja = w.indexOf
      ? function (a, b, c) {
          return w.indexOf.call(a, b, c);
        }
      : function (a, b, c) {
          c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
          if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
          for (; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    ka = w.forEach
      ? function (a, b, c) {
          w.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a);
        },
    la = w.some
      ? function (a, b, c) {
          return w.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    ma = w.every
      ? function (a, b, c) {
          return w.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return !1;
          return !0;
        },
    oa = function (a) {
      var b;
      t: {
        b = na;
        for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++)
          if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break t;
          }
        b = -1;
      }
      return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
    },
    pa = function (a, b) {
      var c = ja(a, b),
        d;
      (d = 0 <= c) && w.splice.call(a, c, 1);
      return d;
    },
    qa = function (a) {
      return w.concat.apply(w, arguments);
    },
    ra = function (a, b, c) {
      return 2 >= arguments.length ? w.slice.call(a, b) : w.slice.call(a, b, c);
    };
  var sa = "StopIteration" in h ? h.StopIteration : Error("StopIteration"),
    ta = function () {};
  ta.prototype.next = function () {
    throw sa;
  };
  ta.prototype.vc = function () {
    return this;
  };
  var ua = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    va = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    wa = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    xa = function (a, b) {
      var c;
      t: {
        for (c in a) if (b.call(void 0, a[c], c, a)) break t;
        c = void 0;
      }
      return c && a[c];
    },
    ya =
      "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
      ),
    za = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < ya.length; f++)
          (c = ya[f]),
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    };
  var x = function (a, b) {
    this.p = {};
    this.b = [];
    this.oa = this.h = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else a && this.ia(a);
  };
  x.prototype.t = function () {
    Aa(this);
    for (var a = [], b = 0; b < this.b.length; b++) a.push(this.p[this.b[b]]);
    return a;
  };
  x.prototype.F = function () {
    Aa(this);
    return this.b.concat();
  };
  x.prototype.Q = function (a) {
    return y(this.p, a);
  };
  x.prototype.remove = function (a) {
    return y(this.p, a)
      ? (delete this.p[a],
        this.h--,
        this.oa++,
        this.b.length > 2 * this.h && Aa(this),
        !0)
      : !1;
  };
  var Aa = function (a) {
    if (a.h != a.b.length) {
      for (var b = 0, c = 0; b < a.b.length; ) {
        var d = a.b[b];
        y(a.p, d) && (a.b[c++] = d);
        b++;
      }
      a.b.length = c;
    }
    if (a.h != a.b.length) {
      for (var e = {}, c = (b = 0); b < a.b.length; )
        (d = a.b[b]), y(e, d) || ((a.b[c++] = d), (e[d] = 1)), b++;
      a.b.length = c;
    }
  };
  g = x.prototype;
  g.get = function (a, b) {
    return y(this.p, a) ? this.p[a] : b;
  };
  g.set = function (a, b) {
    y(this.p, a) || (this.h++, this.b.push(a), this.oa++);
    this.p[a] = b;
  };
  g.ia = function (a) {
    var b;
    a instanceof x ? ((b = a.F()), (a = a.t())) : ((b = wa(a)), (a = va(a)));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c]);
  };
  g.forEach = function (a, b) {
    for (var c = this.F(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = this.get(e);
      a.call(b, f, e, this);
    }
  };
  g.clone = function () {
    return new x(this);
  };
  g.Jb = function () {
    Aa(this);
    for (var a = {}, b = 0; b < this.b.length; b++) {
      var c = this.b[b];
      a[c] = this.p[c];
    }
    return a;
  };
  g.vc = function (a) {
    Aa(this);
    var b = 0,
      c = this.b,
      d = this.p,
      e = this.oa,
      f = this,
      k = new ta();
    k.next = function () {
      for (;;) {
        if (e != f.oa)
          throw Error("The map has changed since the iterator was created");
        if (b >= c.length) throw sa;
        var k = c[b++];
        return a ? k : d[k];
      }
    };
    return k;
  };
  var y = function (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  };
  var Ba,
    Ca,
    Da = {
      id: "hitType",
      name: "t",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    Ea = {
      id: "sessionControl",
      name: "sc",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    Fa = {
      id: "description",
      name: "cd",
      valueType: "text",
      maxLength: 2048,
      defaultValue: void 0,
    },
    Ga = {
      id: "eventCategory",
      name: "ec",
      valueType: "text",
      maxLength: 150,
      defaultValue: void 0,
    },
    Ha = {
      id: "eventAction",
      name: "ea",
      valueType: "text",
      maxLength: 500,
      defaultValue: void 0,
    },
    Ia = {
      id: "eventLabel",
      name: "el",
      valueType: "text",
      maxLength: 500,
      defaultValue: void 0,
    },
    Ja = {
      id: "eventValue",
      name: "ev",
      valueType: "integer",
      maxLength: void 0,
      defaultValue: void 0,
    },
    Ka = {
      pd: Da,
      Qc: {
        id: "anonymizeIp",
        name: "aip",
        valueType: "boolean",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Ad: {
        id: "queueTime",
        name: "qt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Wc: {
        id: "cacheBuster",
        name: "z",
        valueType: "text",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Gd: Ea,
      Wd: {
        id: "userId",
        name: "uid",
        valueType: "text",
        maxLength: void 0,
        defaultValue: void 0,
      },
      xd: {
        id: "nonInteraction",
        name: "ni",
        valueType: "boolean",
        maxLength: void 0,
        defaultValue: void 0,
      },
      fd: Fa,
      Pd: {
        id: "title",
        name: "dt",
        valueType: "text",
        maxLength: 1500,
        defaultValue: void 0,
      },
      Sc: {
        id: "appId",
        name: "aid",
        valueType: "text",
        maxLength: 150,
        defaultValue: void 0,
      },
      Tc: {
        id: "appInstallerId",
        name: "aiid",
        valueType: "text",
        maxLength: 150,
        defaultValue: void 0,
      },
      jd: Ga,
      hd: Ha,
      kd: Ia,
      ld: Ja,
      Id: {
        id: "socialNetwork",
        name: "sn",
        valueType: "text",
        maxLength: 50,
        defaultValue: void 0,
      },
      Hd: {
        id: "socialAction",
        name: "sa",
        valueType: "text",
        maxLength: 50,
        defaultValue: void 0,
      },
      Jd: {
        id: "socialTarget",
        name: "st",
        valueType: "text",
        maxLength: 2048,
        defaultValue: void 0,
      },
      Sd: {
        id: "transactionId",
        name: "ti",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      Rd: {
        id: "transactionAffiliation",
        name: "ta",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      Td: {
        id: "transactionRevenue",
        name: "tr",
        valueType: "currency",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Ud: {
        id: "transactionShipping",
        name: "ts",
        valueType: "currency",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Vd: {
        id: "transactionTax",
        name: "tt",
        valueType: "currency",
        maxLength: void 0,
        defaultValue: void 0,
      },
      dd: {
        id: "currencyCode",
        name: "cu",
        valueType: "text",
        maxLength: 10,
        defaultValue: void 0,
      },
      td: {
        id: "itemPrice",
        name: "ip",
        valueType: "currency",
        maxLength: void 0,
        defaultValue: void 0,
      },
      ud: {
        id: "itemQuantity",
        name: "iq",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      rd: {
        id: "itemCode",
        name: "ic",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      sd: {
        id: "itemName",
        name: "in",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      qd: {
        id: "itemCategory",
        name: "iv",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      bd: {
        id: "campaignSource",
        name: "cs",
        valueType: "text",
        maxLength: 100,
        defaultValue: void 0,
      },
      $c: {
        id: "campaignMedium",
        name: "cm",
        valueType: "text",
        maxLength: 50,
        defaultValue: void 0,
      },
      ad: {
        id: "campaignName",
        name: "cn",
        valueType: "text",
        maxLength: 100,
        defaultValue: void 0,
      },
      Zc: {
        id: "campaignKeyword",
        name: "ck",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      Xc: {
        id: "campaignContent",
        name: "cc",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      Yc: {
        id: "campaignId",
        name: "ci",
        valueType: "text",
        maxLength: 100,
        defaultValue: void 0,
      },
      od: {
        id: "gclid",
        name: "gclid",
        valueType: "text",
        maxLength: void 0,
        defaultValue: void 0,
      },
      ed: {
        id: "dclid",
        name: "dclid",
        valueType: "text",
        maxLength: void 0,
        defaultValue: void 0,
      },
      zd: {
        id: "pageLoadTime",
        name: "plt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      gd: {
        id: "dnsTime",
        name: "dns",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Kd: {
        id: "tcpConnectTime",
        name: "tcp",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Fd: {
        id: "serverResponseTime",
        name: "srt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      yd: {
        id: "pageDownloadTime",
        name: "pdt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Bd: {
        id: "redirectResponseTime",
        name: "rrt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Ld: {
        id: "timingCategory",
        name: "utc",
        valueType: "text",
        maxLength: 150,
        defaultValue: void 0,
      },
      Od: {
        id: "timingVar",
        name: "utv",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      Nd: {
        id: "timingValue",
        name: "utt",
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      },
      Md: {
        id: "timingLabel",
        name: "utl",
        valueType: "text",
        maxLength: 500,
        defaultValue: void 0,
      },
      md: {
        id: "exDescription",
        name: "exd",
        valueType: "text",
        maxLength: 150,
        defaultValue: void 0,
      },
      nd: {
        id: "exFatal",
        name: "exf",
        valueType: "boolean",
        maxLength: void 0,
        defaultValue: "1",
      },
    },
    La = function (a) {
      if (1 > a || 200 < a)
        throw Error("Expected dimension index range 1-200, but was : " + a);
      return {
        id: "dimension" + a,
        name: "cd" + a,
        valueType: "text",
        maxLength: 150,
        defaultValue: void 0,
      };
    },
    Ma = function (a) {
      if (1 > a || 200 < a)
        throw Error("Expected metric index range 1-200, but was : " + a);
      return {
        id: "metric" + a,
        name: "cm" + a,
        valueType: "integer",
        maxLength: void 0,
        defaultValue: void 0,
      };
    };
  var Na = function (a) {
      if (1 > a) return "0";
      if (3 > a) return "1-2";
      a = Math.floor(Math.log(a - 1) / Math.log(2));
      return Math.pow(2, a) + 1 + "-" + Math.pow(2, a + 1);
    },
    Oa = function (a, b) {
      for (var c = 0, d = a.length - 1, e = 0; c <= d; ) {
        var f = Math.floor((c + d) / 2),
          e = a[f];
        if (b <= e) {
          d = 0 == f ? 0 : a[f - 1];
          if (b > d) return (d + 1).toString() + "-" + e.toString();
          d = f - 1;
        } else if (b > e) {
          if (f >= a.length - 1) return (a[a.length - 1] + 1).toString() + "+";
          c = f + 1;
        }
      }
      return "<= 0";
    };
  var z = function () {
      this.ab = [];
    },
    Pa = function () {
      return new z();
    };
  g = z.prototype;
  g.when = function (a) {
    this.ab.push(a);
    return this;
  };
  g.zb = function (a) {
    var b = arguments;
    this.when(function (a) {
      return 0 <= ja(b, a.Gb());
    });
    return this;
  };
  g.Oc = function (a, b) {
    var c = ra(arguments, 1);
    this.when(function (b) {
      b = b.T().get(a);
      return 0 <= ja(c, b);
    });
    return this;
  };
  g.xb = function (a, b) {
    if (q(this.e)) throw Error("Filter has already been set.");
    this.e = q(b) ? r(a, b) : a;
    return this;
  };
  g.Ca = function () {
    if (0 == this.ab.length)
      throw Error(
        "Must specify at least one predicate using #when or a helper method."
      );
    if (!q(this.e))
      throw Error("Must specify a delegate filter using #applyFilter.");
    return r(function (a) {
      ma(this.ab, function (b) {
        return b(a);
      }) && this.e(a);
    }, this);
  };
  var A = function () {
    this.Ab = !1;
    this.Bb = "";
    this.qb = !1;
    this.za = null;
  };
  A.prototype.wc = function (a) {
    this.Ab = !0;
    this.Bb = a || " - ";
    return this;
  };
  A.prototype.Nc = function () {
    this.qb = !0;
    return this;
  };
  A.prototype.Ec = function () {
    return Qa(this, Na);
  };
  A.prototype.Fc = function (a) {
    return Qa(this, ha(Oa, a));
  };
  var Qa = function (a, b) {
    if (null != a.za)
      throw Error("LabelerBuilder: Only one labeling strategy may be used.");
    a.za = r(function (a) {
      var d = a.T().get(Ja),
        e = a.T().get(Ia);
      ea(d) &&
        ((d = b(d)),
        null != e && this.Ab && (d = e + this.Bb + d),
        a.T().set(Ia, d));
    }, a);
    return a;
  };
  A.prototype.Ca = function () {
    if (null == this.za)
      throw Error(
        "LabelerBuilder: a labeling strategy must be specified prior to calling build()."
      );
    return Pa()
      .zb("event")
      .xb(
        r(function (a) {
          this.za(a);
          this.qb && a.T().remove(Ja);
        }, this)
      )
      .Ca();
  };
  var Ra = function (a, b) {
      var c = Array.prototype.slice.call(arguments),
        d = c.shift();
      if ("undefined" == typeof d)
        throw Error("[goog.string.format] Template required");
      return d.replace(
        /%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,
        function (a, b, d, l, N, J, U, V) {
          if ("%" == J) return "%";
          var Db = c.shift();
          if ("undefined" == typeof Db)
            throw Error("[goog.string.format] Not enough arguments");
          arguments[0] = Db;
          return B[J].apply(null, arguments);
        }
      );
    },
    B = {
      s: function (a, b, c) {
        return isNaN(c) || "" == c || a.length >= c
          ? a
          : (a =
              -1 < b.indexOf("-", 0)
                ? a + Array(c - a.length + 1).join(" ")
                : Array(c - a.length + 1).join(" ") + a);
      },
      f: function (a, b, c, d, e) {
        d = a.toString();
        isNaN(e) || "" == e || (d = a.toFixed(e));
        var f;
        f =
          0 > a
            ? "-"
            : 0 <= b.indexOf("+")
            ? "+"
            : 0 <= b.indexOf(" ")
            ? " "
            : "";
        0 <= a && (d = f + d);
        if (isNaN(c) || d.length >= c) return d;
        d = isNaN(e) ? Math.abs(a).toString() : Math.abs(a).toFixed(e);
        a = c - d.length - f.length;
        return (d =
          0 <= b.indexOf("-", 0)
            ? f + d + Array(a + 1).join(" ")
            : f + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d);
      },
      d: function (a, b, c, d, e, f, k, l) {
        return B.f(parseInt(a, 10), b, c, d, 0, f, k, l);
      },
    };
  B.i = B.d;
  B.u = B.d;
  var Sa = function (a) {
      if ("function" == typeof a.t) return a.t();
      if (n(a)) return a.split("");
      if (da(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return va(a);
    },
    Ta = function (a, b) {
      if ("function" == typeof a.forEach) a.forEach(b, void 0);
      else if (da(a) || n(a)) ka(a, b, void 0);
      else {
        var c;
        if ("function" == typeof a.F) c = a.F();
        else if ("function" != typeof a.t)
          if (da(a) || n(a)) {
            c = [];
            for (var d = a.length, e = 0; e < d; e++) c.push(e);
          } else c = wa(a);
        else c = void 0;
        for (var d = Sa(a), e = d.length, f = 0; f < e; f++)
          b.call(void 0, d[f], c && c[f], a);
      }
    };
  var C = function (a) {
    this.B = new x();
    for (var b = arguments, c = 0; c < b.length; c += 2)
      this.set(b[c], b[c + 1]);
  };
  C.prototype.set = function (a, b) {
    this.B.set(a.name, { key: a, value: b });
  };
  C.prototype.remove = function (a) {
    this.B.remove(a.name);
  };
  C.prototype.get = function (a) {
    a = this.B.get(a.name, null);
    return null === a ? null : a.value;
  };
  C.prototype.ia = function (a) {
    this.B.ia(a.B);
  };
  var Ua = function (a, b) {
    ka(a.B.t(), function (a) {
      b(a.key, a.value);
    });
  };
  C.prototype.Jb = function () {
    var a = {};
    Ua(this, function (b, c) {
      a[b.id] = c;
    });
    return a;
  };
  C.prototype.clone = function () {
    var a = new C();
    a.B = this.B.clone();
    return a;
  };
  C.prototype.toString = function () {
    var a = {};
    Ua(this, function (b, c) {
      a[b.id] = c;
    });
    return JSON.stringify(a);
  };
  var D = function (a) {
    this.e = a;
  };
  g = D.prototype;
  g.xc = function (a) {
    var b = new D(r(this.P, this));
    b.I = Ga;
    b.N = a;
    return b;
  };
  g.action = function (a) {
    var b = new D(r(this.P, this));
    b.I = Ha;
    b.N = a;
    return b;
  };
  g.label = function (a) {
    var b = new D(r(this.P, this));
    b.I = Ia;
    b.N = a;
    return b;
  };
  g.value = function (a) {
    var b = new D(r(this.P, this));
    b.I = Ja;
    b.N = a;
    return b;
  };
  g.yc = function (a, b) {
    var c = new D(r(this.P, this));
    c.I = La(a);
    c.N = b;
    return c;
  };
  g.Dc = function (a, b) {
    var c = new D(r(this.P, this));
    c.I = Ma(a);
    c.N = b;
    return c;
  };
  g.send = function (a) {
    var b = new C();
    this.P(b);
    return a.send("event", b);
  };
  g.P = function (a) {
    null != this.I &&
      null != this.N &&
      !a.B.Q(this.I.name) &&
      a.set(this.I, this.N);
    q(this.e) && this.e(a);
  };
  var Va = new D(ba);
  var E = function () {
    this.Y = this.Y;
    this.Da = this.Da;
  };
  E.prototype.Y = !1;
  E.prototype.xa = function () {
    this.Y || ((this.Y = !0), this.l());
  };
  E.prototype.l = function () {
    if (this.Da) for (; this.Da.length; ) this.Da.shift()();
  };
  var F = function (a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.U = !1;
    this.kb = !0;
  };
  F.prototype.l = function () {};
  F.prototype.xa = function () {};
  F.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
    this.kb = !1;
  };
  var Wa = function (a) {
    Wa[" "](a);
    return a;
  };
  Wa[" "] = ba;
  var G;
  t: {
    var Xa = h.navigator;
    if (Xa) {
      var Ya = Xa.userAgent;
      if (Ya) {
        G = Ya;
        break t;
      }
    }
    G = "";
  }
  var H = function (a) {
    return -1 != G.indexOf(a);
  };
  var Za = H("Opera") || H("OPR"),
    I = H("Trident") || H("MSIE"),
    K =
      H("Gecko") &&
      -1 == G.toLowerCase().indexOf("webkit") &&
      !(H("Trident") || H("MSIE")),
    L = -1 != G.toLowerCase().indexOf("webkit"),
    $a = function () {
      var a = h.document;
      return a ? a.documentMode : void 0;
    },
    ab = (function () {
      var a = "",
        b;
      if (Za && h.opera) return (a = h.opera.version), p(a) ? a() : a;
      K
        ? (b = /rv\:([^\);]+)(\)|;)/)
        : I
        ? (b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/)
        : L && (b = /WebKit\/(\S+)/);
      b && (a = (a = b.exec(G)) ? a[1] : "");
      return I && ((b = $a()), b > parseFloat(a)) ? String(b) : a;
    })(),
    bb = {},
    M = function (a) {
      var b;
      if (!(b = bb[a])) {
        b = 0;
        for (
          var c = String(ab)
              .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
              .split("."),
            d = String(a)
              .replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
              .split("."),
            e = Math.max(c.length, d.length),
            f = 0;
          0 == b && f < e;
          f++
        ) {
          var k = c[f] || "",
            l = d[f] || "",
            N = RegExp("(\\d*)(\\D*)", "g"),
            J = RegExp("(\\d*)(\\D*)", "g");
          do {
            var U = N.exec(k) || ["", "", ""],
              V = J.exec(l) || ["", "", ""];
            if (0 == U[0].length && 0 == V[0].length) break;
            b =
              ia(
                0 == U[1].length ? 0 : parseInt(U[1], 10),
                0 == V[1].length ? 0 : parseInt(V[1], 10)
              ) ||
              ia(0 == U[2].length, 0 == V[2].length) ||
              ia(U[2], V[2]);
          } while (0 == b);
        }
        b = bb[a] = 0 <= b;
      }
      return b;
    },
    cb = h.document,
    db =
      cb && I
        ? $a() || ("CSS1Compat" == cb.compatMode ? parseInt(ab, 10) : 5)
        : void 0;
  var eb = !I || (I && 9 <= db),
    fb = I && !M("9"),
    gb = !L || M("528"),
    hb =
      (K && M("1.9b")) || (I && M("8")) || (Za && M("9.5")) || (L && M("528")),
    ib = (K && !M("8")) || (I && !M("9"));
  var O = function (a, b) {
    F.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode =
      this.keyCode =
      this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
      this.offsetY =
      this.offsetX =
        0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.Db = this.state = null;
    if (a) {
      var c = (this.type = a.type);
      this.target = a.target || a.srcElement;
      this.currentTarget = b;
      var d = a.relatedTarget;
      if (d) {
        if (K) {
          var e;
          t: {
            try {
              Wa(d.nodeName);
              e = !0;
              break t;
            } catch (f) {}
            e = !1;
          }
          e || (d = null);
        }
      } else
        "mouseover" == c
          ? (d = a.fromElement)
          : "mouseout" == c && (d = a.toElement);
      this.relatedTarget = d;
      this.offsetX = L || void 0 !== a.offsetX ? a.offsetX : a.layerX;
      this.offsetY = L || void 0 !== a.offsetY ? a.offsetY : a.layerY;
      this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
      this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
      this.screenX = a.screenX || 0;
      this.screenY = a.screenY || 0;
      this.button = a.button;
      this.keyCode = a.keyCode || 0;
      this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.state = a.state;
      this.Db = a;
      a.defaultPrevented && this.preventDefault();
    }
  };
  u(O, F);
  O.prototype.preventDefault = function () {
    O.L.preventDefault.call(this);
    var a = this.Db;
    if (a.preventDefault) a.preventDefault();
    else if (((a.returnValue = !1), fb))
      try {
        if (a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) a.keyCode = -1;
      } catch (b) {}
  };
  O.prototype.l = function () {};
  var jb = "closure_listenable_" + ((1e6 * Math.random()) | 0),
    kb = function (a) {
      return !(!a || !a[jb]);
    },
    lb = 0;
  var mb = function (a, b, c, d, e) {
      this.O = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.pa = !!d;
      this.sa = e;
      this.key = ++lb;
      this.removed = this.qa = !1;
    },
    nb = function (a) {
      a.removed = !0;
      a.O = null;
      a.proxy = null;
      a.src = null;
      a.sa = null;
    };
  var P = function (a) {
    this.src = a;
    this.j = {};
    this.Z = 0;
  };
  P.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.j[f];
    a || ((a = this.j[f] = []), this.Z++);
    var k = ob(a, b, d, e);
    -1 < k
      ? ((b = a[k]), c || (b.qa = !1))
      : ((b = new mb(b, this.src, f, !!d, e)), (b.qa = c), a.push(b));
    return b;
  };
  P.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.j)) return !1;
    var e = this.j[a];
    b = ob(e, b, c, d);
    return -1 < b
      ? (nb(e[b]),
        w.splice.call(e, b, 1),
        0 == e.length && (delete this.j[a], this.Z--),
        !0)
      : !1;
  };
  var pb = function (a, b) {
    var c = b.type;
    if (!(c in a.j)) return !1;
    var d = pa(a.j[c], b);
    d && (nb(b), 0 == a.j[c].length && (delete a.j[c], a.Z--));
    return d;
  };
  P.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.j)
      if (!a || c == a) {
        for (var d = this.j[c], e = 0; e < d.length; e++) ++b, nb(d[e]);
        delete this.j[c];
        this.Z--;
      }
    return b;
  };
  P.prototype.X = function (a, b, c, d) {
    a = this.j[a.toString()];
    var e = -1;
    a && (e = ob(a, b, c, d));
    return -1 < e ? a[e] : null;
  };
  var ob = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.removed && f.O == b && f.pa == !!c && f.sa == d) return e;
    }
    return -1;
  };
  var qb = "closure_lm_" + ((1e6 * Math.random()) | 0),
    rb = {},
    sb = 0,
    tb = function (a, b, c, d, e) {
      if (m(b)) {
        for (var f = 0; f < b.length; f++) tb(a, b[f], c, d, e);
        return null;
      }
      c = ub(c);
      return kb(a) ? a.listen(b, c, d, e) : vb(a, b, c, !1, d, e);
    },
    vb = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var k = !!e,
        l = wb(a);
      l || (a[qb] = l = new P(a));
      c = l.add(b, c, d, e, f);
      if (c.proxy) return c;
      d = xb();
      c.proxy = d;
      d.src = a;
      d.O = c;
      a.addEventListener
        ? a.addEventListener(b.toString(), d, k)
        : a.attachEvent(yb(b.toString()), d);
      sb++;
      return c;
    },
    xb = function () {
      var a = zb,
        b = eb
          ? function (c) {
              return a.call(b.src, b.O, c);
            }
          : function (c) {
              c = a.call(b.src, b.O, c);
              if (!c) return c;
            };
      return b;
    },
    Ab = function (a, b, c, d, e) {
      if (m(b)) {
        for (var f = 0; f < b.length; f++) Ab(a, b[f], c, d, e);
        return null;
      }
      c = ub(c);
      return kb(a) ? a.bb(b, c, d, e) : vb(a, b, c, !0, d, e);
    },
    Bb = function (a, b, c, d, e) {
      if (m(b)) for (var f = 0; f < b.length; f++) Bb(a, b[f], c, d, e);
      else
        (c = ub(c)),
          kb(a)
            ? a.Va(b, c, d, e)
            : a && (a = wb(a)) && (b = a.X(b, c, !!d, e)) && Cb(b);
    },
    Cb = function (a) {
      if (ea(a) || !a || a.removed) return !1;
      var b = a.src;
      if (kb(b)) return pb(b.A, a);
      var c = a.type,
        d = a.proxy;
      b.removeEventListener
        ? b.removeEventListener(c, d, a.pa)
        : b.detachEvent && b.detachEvent(yb(c), d);
      sb--;
      (c = wb(b))
        ? (pb(c, a), 0 == c.Z && ((c.src = null), (b[qb] = null)))
        : nb(a);
      return !0;
    },
    yb = function (a) {
      return a in rb ? rb[a] : (rb[a] = "on" + a);
    },
    Fb = function (a, b, c, d) {
      var e = 1;
      if ((a = wb(a)))
        if ((b = a.j[b.toString()]))
          for (b = b.concat(), a = 0; a < b.length; a++) {
            var f = b[a];
            f && f.pa == c && !f.removed && (e &= !1 !== Eb(f, d));
          }
      return Boolean(e);
    },
    Eb = function (a, b) {
      var c = a.O,
        d = a.sa || a.src;
      a.qa && Cb(a);
      return c.call(d, b);
    },
    zb = function (a, b) {
      if (a.removed) return !0;
      if (!eb) {
        var c;
        if (!(c = b))
          t: {
            c = ["window", "event"];
            for (var d = h, e; (e = c.shift()); )
              if (null != d[e]) d = d[e];
              else {
                c = null;
                break t;
              }
            c = d;
          }
        e = c;
        c = new O(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
          t: {
            var f = !1;
            if (0 == e.keyCode)
              try {
                e.keyCode = -1;
                break t;
              } catch (k) {
                f = !0;
              }
            if (f || void 0 == e.returnValue) e.returnValue = !0;
          }
          e = [];
          for (f = c.currentTarget; f; f = f.parentNode) e.push(f);
          for (var f = a.type, l = e.length - 1; !c.U && 0 <= l; l--)
            (c.currentTarget = e[l]), (d &= Fb(e[l], f, !0, c));
          for (l = 0; !c.U && l < e.length; l++)
            (c.currentTarget = e[l]), (d &= Fb(e[l], f, !1, c));
        }
        return d;
      }
      return Eb(a, new O(b, this));
    },
    wb = function (a) {
      a = a[qb];
      return a instanceof P ? a : null;
    },
    Gb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0),
    ub = function (a) {
      if (p(a)) return a;
      a[Gb] ||
        (a[Gb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Gb];
    };
  var Q = function () {
    E.call(this);
    this.A = new P(this);
    this.kc = this;
    this.Qa = null;
  };
  u(Q, E);
  Q.prototype[jb] = !0;
  g = Q.prototype;
  g.addEventListener = function (a, b, c, d) {
    tb(this, a, b, c, d);
  };
  g.removeEventListener = function (a, b, c, d) {
    Bb(this, a, b, c, d);
  };
  g.dispatchEvent = function (a) {
    var b,
      c = this.Qa;
    if (c) {
      b = [];
      for (var d = 1; c; c = c.Qa) b.push(c), ++d;
    }
    c = this.kc;
    d = a.type || a;
    if (n(a)) a = new F(a, c);
    else if (a instanceof F) a.target = a.target || c;
    else {
      var e = a;
      a = new F(d, c);
      za(a, e);
    }
    var e = !0,
      f;
    if (b)
      for (var k = b.length - 1; !a.U && 0 <= k; k--)
        (f = a.currentTarget = b[k]), (e = Hb(f, d, !0, a) && e);
    a.U ||
      ((f = a.currentTarget = c),
      (e = Hb(f, d, !0, a) && e),
      a.U || (e = Hb(f, d, !1, a) && e));
    if (b)
      for (k = 0; !a.U && k < b.length; k++)
        (f = a.currentTarget = b[k]), (e = Hb(f, d, !1, a) && e);
    return e;
  };
  g.l = function () {
    Q.L.l.call(this);
    this.A && this.A.removeAll(void 0);
    this.Qa = null;
  };
  g.listen = function (a, b, c, d) {
    return this.A.add(String(a), b, !1, c, d);
  };
  g.bb = function (a, b, c, d) {
    return this.A.add(String(a), b, !0, c, d);
  };
  g.Va = function (a, b, c, d) {
    return this.A.remove(String(a), b, c, d);
  };
  var Hb = function (a, b, c, d) {
    b = a.A.j[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
      var k = b[f];
      if (k && !k.removed && k.pa == c) {
        var l = k.O,
          N = k.sa || k.src;
        k.qa && pb(a.A, k);
        e = !1 !== l.call(N, d) && e;
      }
    }
    return e && 0 != d.kb;
  };
  Q.prototype.X = function (a, b, c, d) {
    return this.A.X(String(a), b, c, d);
  };
  var Ib = function (a) {
      h.setTimeout(function () {
        throw a;
      }, 0);
    },
    Jb,
    Kb = function () {
      var a = h.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        (a = function () {
          var a = document.createElement("iframe");
          a.style.display = "none";
          a.src = "";
          document.documentElement.appendChild(a);
          var b = a.contentWindow,
            a = b.document;
          a.open();
          a.write("");
          a.close();
          var c = "callImmediate" + Math.random(),
            d =
              "file:" == b.location.protocol
                ? "*"
                : b.location.protocol + "//" + b.location.host,
            a = r(function (a) {
              if (a.origin == d || a.data == c) this.port1.onmessage();
            }, this);
          b.addEventListener("message", a, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              b.postMessage(c, d);
            },
          };
        });
      if ("undefined" !== typeof a && !H("Trident") && !H("MSIE")) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          c = c.next;
          var a = c.Fb;
          c.Fb = null;
          a();
        };
        return function (a) {
          d.next = { Fb: a };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return "undefined" !== typeof document &&
        "onreadystatechange" in document.createElement("script")
        ? function (a) {
            var b = document.createElement("script");
            b.onreadystatechange = function () {
              b.onreadystatechange = null;
              b.parentNode.removeChild(b);
              b = null;
              a();
              a = null;
            };
            document.documentElement.appendChild(b);
          }
        : function (a) {
            h.setTimeout(a, 0);
          };
    };
  var Qb = function (a, b) {
      Lb || Mb();
      Nb || (Lb(), (Nb = !0));
      Ob.push(new Pb(a, b));
    },
    Lb,
    Mb = function () {
      if (h.Promise && h.Promise.resolve) {
        var a = h.Promise.resolve();
        Lb = function () {
          a.then(Rb);
        };
      } else
        Lb = function () {
          var a = Rb;
          !p(h.setImmediate) ||
          (h.Window && h.Window.prototype.setImmediate == h.setImmediate)
            ? (Jb || (Jb = Kb()), Jb(a))
            : h.setImmediate(a);
        };
    },
    Nb = !1,
    Ob = [],
    Rb = function () {
      for (; Ob.length; ) {
        var a = Ob;
        Ob = [];
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          try {
            c.zc.call(c.scope);
          } catch (d) {
            Ib(d);
          }
        }
      }
      Nb = !1;
    },
    Pb = function (a, b) {
      this.zc = a;
      this.scope = b;
    };
  var Sb = function (a) {
      a.prototype.then = a.prototype.then;
      a.prototype.$goog_Thenable = !0;
    },
    Tb = function (a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    };
  var R = function (a, b) {
    this.m = 0;
    this.v = void 0;
    this.n = this.o = null;
    this.ua = this.La = !1;
    try {
      var c = this;
      a.call(
        b,
        function (a) {
          Ub(c, 2, a);
        },
        function (a) {
          Ub(c, 3, a);
        }
      );
    } catch (d) {
      Ub(this, 3, d);
    }
  };
  R.prototype.then = function (a, b, c) {
    return Vb(this, p(a) ? a : null, p(b) ? b : null, c);
  };
  Sb(R);
  R.prototype.cancel = function (a) {
    0 == this.m &&
      Qb(function () {
        var b = new Wb(a);
        Xb(this, b);
      }, this);
  };
  var Xb = function (a, b) {
      if (0 == a.m)
        if (a.o) {
          var c = a.o;
          if (c.n) {
            for (var d = 0, e = -1, f = 0, k; (k = c.n[f]); f++)
              if ((k = k.wa))
                if ((d++, k == a && (e = f), 0 <= e && 1 < d)) break;
            0 <= e &&
              (0 == c.m && 1 == d
                ? Xb(c, b)
                : ((d = c.n.splice(e, 1)[0]), Yb(c), d.Ma(b)));
          }
        } else Ub(a, 3, b);
    },
    $b = function (a, b) {
      (a.n && a.n.length) || (2 != a.m && 3 != a.m) || Zb(a);
      a.n || (a.n = []);
      a.n.push(b);
    },
    Vb = function (a, b, c, d) {
      var e = { wa: null, jb: null, Ma: null };
      e.wa = new R(function (a, k) {
        e.jb = b
          ? function (c) {
              try {
                var e = b.call(d, c);
                a(e);
              } catch (J) {
                k(J);
              }
            }
          : a;
        e.Ma = c
          ? function (b) {
              try {
                var e = c.call(d, b);
                void 0 === e && b instanceof Wb ? k(b) : a(e);
              } catch (J) {
                k(J);
              }
            }
          : k;
      });
      e.wa.o = a;
      $b(a, e);
      return e.wa;
    };
  R.prototype.vb = function (a) {
    this.m = 0;
    Ub(this, 2, a);
  };
  R.prototype.wb = function (a) {
    this.m = 0;
    Ub(this, 3, a);
  };
  var Ub = function (a, b, c) {
      if (0 == a.m) {
        if (a == c)
          (b = 3), (c = new TypeError("Promise cannot resolve to itself"));
        else {
          if (Tb(c)) {
            a.m = 1;
            c.then(a.vb, a.wb, a);
            return;
          }
          if (q(c))
            try {
              var d = c.then;
              if (p(d)) {
                ac(a, c, d);
                return;
              }
            } catch (e) {
              (b = 3), (c = e);
            }
        }
        a.v = c;
        a.m = b;
        Zb(a);
        3 != b || c instanceof Wb || bc(a, c);
      }
    },
    ac = function (a, b, c) {
      a.m = 1;
      var d = !1,
        e = function (b) {
          d || ((d = !0), a.vb(b));
        },
        f = function (b) {
          d || ((d = !0), a.wb(b));
        };
      try {
        c.call(b, e, f);
      } catch (k) {
        f(k);
      }
    },
    Zb = function (a) {
      a.La || ((a.La = !0), Qb(a.uc, a));
    };
  R.prototype.uc = function () {
    for (; this.n && this.n.length; ) {
      var a = this.n;
      this.n = [];
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = this.v;
        2 == this.m ? c.jb(d) : (Yb(this), c.Ma(d));
      }
    }
    this.La = !1;
  };
  var Yb = function (a) {
      for (; a && a.ua; a = a.o) a.ua = !1;
    },
    bc = function (a, b) {
      a.ua = !0;
      Qb(function () {
        a.ua && cc.call(null, b);
      });
    },
    cc = Ib,
    Wb = function (a) {
      v.call(this, a);
    };
  u(Wb, v);
  Wb.prototype.name = "cancel"; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  var S = function (a, b) {
    this.ja = [];
    this.hb = a;
    this.gb = b || null;
    this.W = this.C = !1;
    this.v = void 0;
    this.Ka = this.Lb = this.Ja = !1;
    this.ka = 0;
    this.o = null;
    this.Ia = 0;
  };
  S.prototype.cancel = function (a) {
    if (this.C) this.v instanceof S && this.v.cancel();
    else {
      if (this.o) {
        var b = this.o;
        delete this.o;
        a ? b.cancel(a) : (b.Ia--, 0 >= b.Ia && b.cancel());
      }
      this.hb ? this.hb.call(this.gb, this) : (this.Ka = !0);
      this.C || this.w(new dc());
    }
  };
  S.prototype.ib = function (a, b) {
    this.Ja = !1;
    ec(this, a, b);
  };
  var ec = function (a, b, c) {
      a.C = !0;
      a.v = c;
      a.W = !b;
      fc(a);
    },
    hc = function (a) {
      if (a.C) {
        if (!a.Ka) throw new gc();
        a.Ka = !1;
      }
    };
  S.prototype.G = function (a) {
    hc(this);
    ec(this, !0, a);
  };
  S.prototype.w = function (a) {
    hc(this);
    ec(this, !1, a);
  };
  S.prototype.J = function (a, b) {
    return ic(this, a, null, b);
  };
  var ic = function (a, b, c, d) {
    a.ja.push([b, c, d]);
    a.C && fc(a);
    return a;
  };
  S.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new R(function (a, b) {
        d = a;
        e = b;
      });
    ic(this, d, function (a) {
      a instanceof dc ? f.cancel() : e(a);
    });
    return f.then(a, b, c);
  };
  Sb(S);
  var jc = function (a) {
      var b = new S();
      ic(a, b.G, b.w, b);
      return b;
    },
    kc = function (a) {
      return la(a.ja, function (a) {
        return p(a[1]);
      });
    },
    fc = function (a) {
      if (a.ka && a.C && kc(a)) {
        var b = a.ka,
          c = lc[b];
        c && (h.clearTimeout(c.ma), delete lc[b]);
        a.ka = 0;
      }
      a.o && (a.o.Ia--, delete a.o);
      for (var b = a.v, d = (c = !1); a.ja.length && !a.Ja; ) {
        var e = a.ja.shift(),
          f = e[0],
          k = e[1],
          e = e[2];
        if ((f = a.W ? k : f))
          try {
            var l = f.call(e || a.gb, b);
            void 0 !== l &&
              ((a.W = a.W && (l == b || l instanceof Error)), (a.v = b = l));
            Tb(b) && ((d = !0), (a.Ja = !0));
          } catch (N) {
            (b = N), (a.W = !0), kc(a) || (c = !0);
          }
      }
      a.v = b;
      d &&
        ((l = r(a.ib, a, !0)),
        (d = r(a.ib, a, !1)),
        b instanceof S ? (ic(b, l, d), (b.Lb = !0)) : b.then(l, d));
      c && ((b = new mc(b)), (lc[b.ma] = b), (a.ka = b.ma));
    },
    nc = function (a) {
      var b = new S();
      b.G(a);
      return b;
    },
    pc = function () {
      var a = oc,
        b = new S();
      b.w(a);
      return b;
    },
    gc = function () {
      v.call(this);
    };
  u(gc, v);
  gc.prototype.message = "Deferred has already fired";
  gc.prototype.name = "AlreadyCalledError";
  var dc = function () {
    v.call(this);
  };
  u(dc, v);
  dc.prototype.message = "Deferred was canceled";
  dc.prototype.name = "CanceledError";
  var mc = function (a) {
    this.ma = h.setTimeout(r(this.pc, this), 0);
    this.ga = a;
  };
  mc.prototype.pc = function () {
    delete lc[this.ma];
    throw this.ga;
  };
  var lc = {};
  var qc = function (a) {
    this.$a = [];
    this.e = a;
  };
  qc.prototype.S = function (a) {
    if (!p(a)) throw Error("Invalid filter. Must be a function.");
    this.$a.push(a);
  };
  qc.prototype.send = function (a, b) {
    for (
      var c = new T(a, b), d = 0;
      d < this.$a.length && (this.$a[d](c), !c.Za);
      d++
    );
    return c.Za ? nc() : this.e.send(a, b);
  };
  var T = function (a, b) {
    this.rc = a;
    this.qc = b;
    this.Za = !1;
  };
  T.prototype.Gb = function () {
    return this.rc;
  };
  T.prototype.T = function () {
    return this.qc;
  };
  T.prototype.cancel = function () {
    this.Za = !0;
  };
  var rc = function (a, b) {
    this.width = a;
    this.height = b;
  };
  rc.prototype.clone = function () {
    return new rc(this.width, this.height);
  };
  rc.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  (!K && !I) || (I && I && 9 <= db) || (K && M("1.9.1"));
  I && M("9");
  var sc = {
      id: "apiVersion",
      name: "v",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    tc = {
      id: "appName",
      name: "an",
      valueType: "text",
      maxLength: 100,
      defaultValue: void 0,
    },
    uc = {
      id: "appVersion",
      name: "av",
      valueType: "text",
      maxLength: 100,
      defaultValue: void 0,
    },
    vc = {
      id: "clientId",
      name: "cid",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    wc = {
      id: "language",
      name: "ul",
      valueType: "text",
      maxLength: 20,
      defaultValue: void 0,
    },
    xc = {
      id: "libVersion",
      name: "_v",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    yc = {
      id: "sampleRateOverride",
      name: "usro",
      valueType: "integer",
      maxLength: void 0,
      defaultValue: void 0,
    },
    zc = {
      id: "screenColors",
      name: "sd",
      valueType: "text",
      maxLength: 20,
      defaultValue: void 0,
    },
    Ac = {
      id: "screenResolution",
      name: "sr",
      valueType: "text",
      maxLength: 20,
      defaultValue: void 0,
    },
    Bc = {
      id: "trackingId",
      name: "tid",
      valueType: "text",
      maxLength: void 0,
      defaultValue: void 0,
    },
    Cc = {
      id: "viewportSize",
      name: "vp",
      valueType: "text",
      maxLength: 20,
      defaultValue: void 0,
    },
    Dc = {
      Rc: sc,
      Uc: tc,
      Vc: uc,
      cd: vc,
      vd: wc,
      wd: xc,
      Cd: yc,
      Dd: zc,
      Ed: Ac,
      Qd: Bc,
      Xd: Cc,
    },
    Fc = function (a) {
      if (!n(a)) return a;
      var b = Ec(a, Ka);
      if (q(b)) return b;
      b = Ec(a, Dc);
      if (q(b)) return b;
      b = /^dimension(\d+)$/.exec(a);
      if (null !== b) return La(parseInt(b[1], 10));
      b = /^metric(\d+)$/.exec(a);
      if (null !== b) return Ma(parseInt(b[1], 10));
      throw Error(a + " is not a valid parameter name.");
    },
    Ec = function (a, b) {
      var c = xa(b, function (b) {
        return b.id == a && "metric" != a && "dimension" != a;
      });
      return q(c) ? c : null;
    };
  var W = function (a, b) {
    this.Zb = b;
    this.q = b.Sa();
    this.sb = new C();
    this.Ya = !1;
  };
  g = W.prototype;
  g.set = function (a, b) {
    var c = Fc(a);
    this.sb.set(c, b);
  };
  g.S = function (a) {
    this.Zb.S(a);
  };
  g.send = function (a, b) {
    if (a instanceof D) return a.send(this);
    var c = this.sb.clone();
    b instanceof C
      ? c.ia(b)
      : q(b) &&
        ua(
          b,
          function (a, b) {
            null != a && c.set(Fc(b), a);
          },
          this
        );
    this.Ya && ((this.Ya = !1), c.set(Ea, "start"));
    return this.q.send(a, c);
  };
  g.Gc = function (a) {
    var b = { description: a };
    this.set(Fa, a);
    return this.send("appview", b);
  };
  g.Hc = function (a, b, c, d) {
    return this.send("event", {
      eventCategory: a,
      eventAction: b,
      eventLabel: c,
      eventValue: d,
    });
  };
  g.Jc = function (a, b, c) {
    return this.send("social", {
      socialNetwork: a,
      socialAction: b,
      socialTarget: c,
    });
  };
  g.Ic = function (a, b) {
    return this.send("exception", { exDescription: a, exFatal: b });
  };
  g.Cb = function (a, b, c, d, e) {
    return this.send("timing", {
      timingCategory: a,
      timingVar: b,
      timingLabel: d,
      timingValue: c,
      sampleRateOverride: e,
    });
  };
  g.Ac = function () {
    this.Ya = !0;
  };
  g.Mc = function (a, b, c, d) {
    return new Gc(this, a, b, c, d);
  };
  var Gc = function (a, b, c, d, e) {
    this.yb = a;
    this.bc = b;
    this.ec = c;
    this.cc = d;
    this.V = e;
    this.dc = s();
  };
  Gc.prototype.send = function () {
    var a = this.yb.Cb(this.bc, this.ec, s() - this.dc, this.cc, this.V);
    this.yb = null;
    return a;
  };
  var Hc = function (a, b, c, d, e) {
    this.ic = a;
    this.fc = b;
    this.gc = c;
    this.k = d;
    this.hc = e;
  };
  Hc.prototype.Cc = function (a) {
    var b = new W(0, this.hc.create());
    b.set(xc, this.ic);
    b.set(sc, 1);
    b.set(tc, this.fc);
    b.set(uc, this.gc);
    b.set(Bc, a);
    a = window.navigator.language;
    b.set(wc, a);
    a = screen.colorDepth + "-bit";
    b.set(zc, a);
    a = [screen.width, screen.height].join("x");
    b.set(Ac, a);
    a = window.document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    a = new rc(a.clientWidth, a.clientHeight);
    a = [a.width, a.height].join("x");
    b.set(Cc, a);
    return b;
  };
  Hc.prototype.Bc = function () {
    return jc(this.k.ha);
  };
  var Ic = function (a) {
    this.sc = a;
  };
  Ic.prototype.send = function (a, b) {
    this.sc.push({ Ub: a, Vb: b });
    return nc();
  };
  var Jc = function (a, b, c) {
    this.k = a;
    this.ra = [];
    this.M = { enabled: new Ic(this.ra), disabled: c };
    this.q = this.M.enabled;
    ic(jc(this.k.ha), ha(this.Pb, b), this.Ob, this);
  };
  Jc.prototype.Pb = function (a) {
    this.M.enabled = a();
    Kc(this);
    ka(
      this.ra,
      function (a) {
        this.send(a.Ub, a.Vb);
      },
      this
    );
    this.ra = null;
    Lc(this.k, r(this.Xb, this));
  };
  Jc.prototype.Ob = function () {
    this.q = this.M.enabled = this.M.disabled;
    this.ra = null;
  };
  Jc.prototype.send = function (a, b) {
    return this.q.send(a, b);
  };
  var Kc = function (a) {
    a.q = a.k.va() ? a.M.enabled : a.M.disabled;
  };
  Jc.prototype.Xb = function (a) {
    switch (a) {
      case "analytics.tracking-permitted":
        Kc(this);
    }
  };
  var Mc = function (a, b, c, d, e, f) {
    S.call(this, e, f);
    this.Na = a;
    this.Oa = [];
    this.lb = !!b;
    this.Nb = !!c;
    this.Mb = !!d;
    for (b = this.mb = 0; b < a.length; b++)
      ic(a[b], r(this.rb, this, b, !0), r(this.rb, this, b, !1));
    0 != a.length || this.lb || this.G(this.Oa);
  };
  u(Mc, S);
  Mc.prototype.rb = function (a, b, c) {
    this.mb++;
    this.Oa[a] = [b, c];
    this.C ||
      (this.lb && b
        ? this.G([a, c])
        : this.Nb && !b
        ? this.w(c)
        : this.mb == this.Na.length && this.G(this.Oa));
    this.Mb && !b && (c = null);
    return c;
  };
  Mc.prototype.w = function (a) {
    Mc.L.w.call(this, a);
    for (a = 0; a < this.Na.length; a++) this.Na[a].cancel();
  };
  var Nc = function (a) {
    return new Mc(a, !1, !0).J(function (a) {
      for (var c = [], d = 0; d < a.length; d++) c[d] = a[d][1];
      return c;
    });
  };
  var X = function (a) {
      this.H = a;
      this.V = 100;
      this.nb = [];
      this.Pa = this.la = null;
      this.ha = Oc(this);
      this.ha.J(function () {
        tb(this.H, "a", r(this.Rb, this));
      }, this);
    },
    Oc = function (a) {
      return Pc(a).J(function () {
        return this;
      }, a);
    },
    Pc = function (a) {
      return Nc([Qc(a), Rc(a)]);
    };
  X.prototype.Rb = function () {
    var a = this.la,
      b = this.va();
    Pc(this).J(function () {
      if (a != this.la) throw Error("User ID changed unexpectedly!");
      b != this.va() && Sc(this);
    }, this);
  };
  var Lc = function (a, b) {
    a.nb.push(b);
  };
  X.prototype.Lc = function (a) {
    this.H.set("analytics.tracking-permitted", a).J(function () {
      this.Pa = a;
    }, this);
  };
  X.prototype.va = function () {
    var a;
    if ((a = this.Pa)) (a = h._gaUserPrefs), (a = !(a && a.ioo && a.ioo()));
    return a;
  };
  var Qc = function (a) {
      return a.H.get("analytics.tracking-permitted").J(function (a) {
        this.Pa = void 0 !== a ? a : !0;
      }, a);
    },
    Rc = function (a) {
      return a.H.get("analytics.user-id").J(function (a) {
        if (!a) {
          a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".split("");
          for (var c = 0, d = a.length; c < d; c++)
            switch (a[c]) {
              case "x":
                a[c] = Math.floor(16 * Math.random()).toString(16);
                break;
              case "y":
                a[c] = (Math.floor(4 * Math.random()) + 8).toString(16);
            }
          a = a.join("");
          this.H.set("analytics.user-id", a);
        }
        this.la = a;
      }, a);
    };
  X.prototype.Kc = function (a) {
    this.V = a;
  };
  var Sc = function (a) {
    ka(a.nb, function (a) {
      a("analytics.tracking-permitted");
    });
  };
  var Tc = function (a) {
    Q.call(this);
    this.Wa = a;
    this.H = chrome.storage.local;
    chrome.storage.onChanged.addListener(r(this.nc, this));
  };
  u(Tc, Q);
  Tc.prototype.nc = function (a) {
    Uc(this, a) && this.dispatchEvent("a");
  };
  var Uc = function (a, b) {
    return la(
      wa(b),
      function (a) {
        return 0 == a.lastIndexOf(this.Wa, 0);
      },
      a
    );
  };
  Tc.prototype.get = function (a) {
    var b = new S(),
      c = this.Wa + "." + a;
    this.H.get(c, function (a) {
      var e = chrome.runtime.lastError;
      e ? b.w(e) : b.G(a[c]);
    });
    return b;
  };
  Tc.prototype.set = function (a, b) {
    var c = new S(),
      d = {};
    d[this.Wa + "." + a] = b;
    this.H.set(d, function () {
      var a = chrome.runtime.lastError;
      a ? c.w(a) : c.G();
    });
    return c;
  };
  var Y = function () {};
  Y.Yb = function () {
    return Y.Ib ? Y.Ib : (Y.Ib = new Y());
  };
  Y.prototype.send = function () {
    return nc();
  };
  var Vc = function (a, b) {
    this.Xa = [];
    var c = r(function () {
      this.Aa = new qc(b.Sa());
      ka(
        this.Xa,
        function (a) {
          this.Aa.S(a);
        },
        this
      );
      this.Xa = null;
      return this.Aa;
    }, this);
    this.q = new Jc(a, c, Y.Yb());
  };
  Vc.prototype.Sa = function () {
    return this.q;
  };
  Vc.prototype.S = function (a) {
    this.Aa ? this.Aa.S(a) : this.Xa.push(a);
  };
  var Wc = function (a, b) {
    this.k = a;
    this.mc = b;
  };
  Wc.prototype.create = function () {
    return new Vc(this.k, this.mc);
  };
  var Xc = function (a, b) {
    Q.call(this);
    this.ya = a || 1;
    this.R = b || h;
    this.Ra = r(this.lc, this);
    this.Ta = s();
  };
  u(Xc, Q);
  g = Xc.prototype;
  g.enabled = !1;
  g.g = null;
  g.lc = function () {
    if (this.enabled) {
      var a = s() - this.Ta;
      0 < a && a < 0.8 * this.ya
        ? (this.g = this.R.setTimeout(this.Ra, this.ya - a))
        : (this.g && (this.R.clearTimeout(this.g), (this.g = null)),
          this.dispatchEvent("tick"),
          this.enabled &&
            ((this.g = this.R.setTimeout(this.Ra, this.ya)), (this.Ta = s())));
    }
  };
  g.start = function () {
    this.enabled = !0;
    this.g || ((this.g = this.R.setTimeout(this.Ra, this.ya)), (this.Ta = s()));
  };
  g.stop = function () {
    this.enabled = !1;
    this.g && (this.R.clearTimeout(this.g), (this.g = null));
  };
  g.l = function () {
    Xc.L.l.call(this);
    this.stop();
    delete this.R;
  };
  var Yc = function (a, b, c) {
    if (p(a)) c && (a = r(a, c));
    else if (a && "function" == typeof a.handleEvent) a = r(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < b ? -1 : h.setTimeout(a, b || 0);
  };
  var Z = function (a) {
    E.call(this);
    this.Ua = a;
    this.b = {};
  };
  u(Z, E);
  var Zc = [];
  Z.prototype.listen = function (a, b, c, d) {
    m(b) || (b && (Zc[0] = b.toString()), (b = Zc));
    for (var e = 0; e < b.length; e++) {
      var f = tb(a, b[e], c || this.handleEvent, d || !1, this.Ua || this);
      if (!f) break;
      this.b[f.key] = f;
    }
    return this;
  };
  Z.prototype.bb = function (a, b, c, d) {
    return $c(this, a, b, c, d);
  };
  var $c = function (a, b, c, d, e, f) {
    if (m(c)) for (var k = 0; k < c.length; k++) $c(a, b, c[k], d, e, f);
    else {
      b = Ab(b, c, d || a.handleEvent, e, f || a.Ua || a);
      if (!b) return a;
      a.b[b.key] = b;
    }
    return a;
  };
  Z.prototype.Va = function (a, b, c, d, e) {
    if (m(b)) for (var f = 0; f < b.length; f++) this.Va(a, b[f], c, d, e);
    else
      (c = c || this.handleEvent),
        (e = e || this.Ua || this),
        (c = ub(c)),
        (d = !!d),
        (b = kb(a)
          ? a.X(b, c, d, e)
          : a
          ? (a = wb(a))
            ? a.X(b, c, d, e)
            : null
          : null),
        b && (Cb(b), delete this.b[b.key]);
    return this;
  };
  Z.prototype.removeAll = function () {
    ua(this.b, Cb);
    this.b = {};
  };
  Z.prototype.l = function () {
    Z.L.l.call(this);
    this.removeAll();
  };
  Z.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var ad = function () {
    Q.call(this);
    this.ta = new Z(this);
    gb &&
      (hb
        ? this.ta.listen(
            ib ? document.body : window,
            ["online", "offline"],
            this.tb
          )
        : ((this.ub = gb ? navigator.onLine : !0),
          (this.g = new Xc(250)),
          this.ta.listen(this.g, "tick", this.ac),
          this.g.start()));
  };
  u(ad, Q);
  ad.prototype.ac = function () {
    var a = gb ? navigator.onLine : !0;
    a != this.ub && ((this.ub = a), this.tb());
  };
  ad.prototype.tb = function () {
    this.dispatchEvent((gb ? navigator.onLine : 1) ? "online" : "offline");
  };
  ad.prototype.l = function () {
    ad.L.l.call(this);
    this.ta.xa();
    this.ta = null;
    this.g && (this.g.xa(), (this.g = null));
  };
  var bd = function (a, b) {
    this.k = a;
    this.e = b;
  };
  bd.prototype.send = function (a, b) {
    b.set(vc, this.k.la);
    return this.e.send(a, b);
  };
  var cd = function (a) {
    this.e = a;
  };
  cd.prototype.send = function (a, b) {
    dd(b);
    ed(b);
    return this.e.send(a, b);
  };
  var dd = function (a) {
      Ua(a, function (b, c) {
        void 0 !== b.maxLength &&
          "text" == b.valueType &&
          0 < b.maxLength &&
          c.length > b.maxLength &&
          a.set(b, c.substring(0, b.maxLength));
      });
    },
    ed = function (a) {
      Ua(a, function (b, c) {
        void 0 !== b.defaultValue && c == b.defaultValue && a.remove(b);
      });
    };
  var oc = { status: "device-offline", Ba: void 0 },
    fd = { status: "rate-limited", Ba: void 0 },
    gd = { status: "sampled-out", Ba: void 0 },
    hd = { status: "sent", Ba: void 0 };
  var id = function (a, b) {
    this.Wb = a;
    this.e = b;
  };
  id.prototype.send = function (a, b) {
    var c;
    c = this.Wb;
    var d = c.pb(),
      e = Math.floor((d - c.ob) * c.Sb);
    0 < e && ((c.$ = Math.min(c.$ + e, c.Tb)), (c.ob = d));
    1 > c.$ ? (c = !1) : ((c.$ -= 1), (c = !0));
    return c || "item" == a || "transaction" == a ? this.e.send(a, b) : nc(fd);
  };
  var jd = function () {
    this.$ = 60;
    this.Tb = 500;
    this.Sb = 5e-4;
    this.pb = function () {
      return new Date().getTime();
    };
    this.ob = this.pb();
  };
  var kd = function (a, b) {
    this.k = a;
    this.e = b;
  };
  kd.prototype.send = function (a, b) {
    var c = b.get(vc),
      c = parseInt(c.split("-")[1], 16),
      d;
    "timing" != a
      ? (d = this.k.V)
      : ((d = b.get(yc)) && b.remove(yc), d || (d = this.k.V));
    return c < 655.36 * d ? this.e.send(a, b) : nc(gd);
  };
  var ld =
      /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
    md = L,
    nd = function (a, b) {
      if (md) {
        md = !1;
        var c = h.location;
        if (c) {
          var d = c.href;
          if (d && (d = (d = nd(3, d)) ? decodeURI(d) : d) && d != c.hostname)
            throw ((md = !0), Error());
        }
      }
      return b.match(ld)[a] || null;
    };
  var od = function () {};
  od.prototype.Eb = null;
  var qd = function (a) {
    var b;
    (b = a.Eb) ||
      ((b = {}), pd(a) && ((b[0] = !0), (b[1] = !0)), (b = a.Eb = b));
    return b;
  };
  var rd,
    sd = function () {};
  u(sd, od);
  var td = function (a) {
      return (a = pd(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    pd = function (a) {
      if (
        !a.Hb &&
        "undefined" == typeof XMLHttpRequest &&
        "undefined" != typeof ActiveXObject
      ) {
        for (
          var b = [
              "MSXML2.XMLHTTP.6.0",
              "MSXML2.XMLHTTP.3.0",
              "MSXML2.XMLHTTP",
              "Microsoft.XMLHTTP",
            ],
            c = 0;
          c < b.length;
          c++
        ) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.Hb = d);
          } catch (e) {}
        }
        throw Error(
          "Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"
        );
      }
      return a.Hb;
    };
  rd = new sd();
  var $ = function (a) {
    Q.call(this);
    this.headers = new x();
    this.fa = a || null;
    this.D = !1;
    this.ca = this.a = null;
    this.ba = this.Fa = "";
    this.K = this.Ea = this.aa = this.Ha = !1;
    this.ea = 0;
    this.da = null;
    this.cb = "";
    this.Ga = this.Kb = !1;
  };
  u($, Q);
  var ud = /^https?$/i,
    vd = ["POST", "PUT"],
    wd = [],
    xd = function (a, b, c) {
      var d = new $();
      wd.push(d);
      b && d.listen("complete", b);
      d.bb("ready", d.tc);
      d.send(a, "POST", c, void 0);
    };
  $.prototype.tc = function () {
    this.xa();
    pa(wd, this);
  };
  $.prototype.send = function (a, b, c, d) {
    if (this.a)
      throw Error(
        "[goog.net.XhrIo] Object is active with another request=" +
          this.Fa +
          "; newUri=" +
          a
      );
    b = b ? b.toUpperCase() : "GET";
    this.Fa = a;
    this.ba = "";
    this.Ha = !1;
    this.D = !0;
    this.a = this.fa ? td(this.fa) : td(rd);
    this.ca = this.fa ? qd(this.fa) : qd(rd);
    this.a.onreadystatechange = r(this.eb, this);
    try {
      (this.Ea = !0), this.a.open(b, String(a), !0), (this.Ea = !1);
    } catch (e) {
      this.ga(5, e);
      return;
    }
    a = c || "";
    var f = this.headers.clone();
    d &&
      Ta(d, function (a, b) {
        f.set(b, a);
      });
    d = oa(f.F());
    c = h.FormData && a instanceof h.FormData;
    !(0 <= ja(vd, b)) ||
      d ||
      c ||
      f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function (a, b) {
      this.a.setRequestHeader(b, a);
    }, this);
    this.cb && (this.a.responseType = this.cb);
    "withCredentials" in this.a && (this.a.withCredentials = this.Kb);
    try {
      yd(this),
        0 < this.ea &&
          ((this.Ga = zd(this.a))
            ? ((this.a.timeout = this.ea),
              (this.a.ontimeout = r(this.fb, this)))
            : (this.da = Yc(this.fb, this.ea, this))),
        (this.aa = !0),
        this.a.send(a),
        (this.aa = !1);
    } catch (k) {
      this.ga(5, k);
    }
  };
  var zd = function (a) {
      return I && M(9) && ea(a.timeout) && void 0 !== a.ontimeout;
    },
    na = function (a) {
      return "content-type" == a.toLowerCase();
    };
  $.prototype.fb = function () {
    "undefined" != typeof aa &&
      this.a &&
      ((this.ba = "Timed out after " + this.ea + "ms, aborting"),
      this.dispatchEvent("timeout"),
      this.abort(8));
  };
  $.prototype.ga = function (a, b) {
    this.D = !1;
    this.a && ((this.K = !0), this.a.abort(), (this.K = !1));
    this.ba = b;
    Ad(this);
    Bd(this);
  };
  var Ad = function (a) {
    a.Ha ||
      ((a.Ha = !0), a.dispatchEvent("complete"), a.dispatchEvent("error"));
  };
  $.prototype.abort = function () {
    this.a &&
      this.D &&
      ((this.D = !1),
      (this.K = !0),
      this.a.abort(),
      (this.K = !1),
      this.dispatchEvent("complete"),
      this.dispatchEvent("abort"),
      Bd(this));
  };
  $.prototype.l = function () {
    this.a &&
      (this.D && ((this.D = !1), (this.K = !0), this.a.abort(), (this.K = !1)),
      Bd(this, !0));
    $.L.l.call(this);
  };
  $.prototype.eb = function () {
    this.Y || (this.Ea || this.aa || this.K ? Cd(this) : this.jc());
  };
  $.prototype.jc = function () {
    Cd(this);
  };
  var Cd = function (a) {
      if (
        a.D &&
        "undefined" != typeof aa &&
        (!a.ca[1] || 4 != Dd(a) || 2 != Ed(a))
      )
        if (a.aa && 4 == Dd(a)) Yc(a.eb, 0, a);
        else if ((a.dispatchEvent("readystatechange"), 4 == Dd(a))) {
          a.D = !1;
          try {
            var b = Ed(a),
              c,
              d;
            t: switch (b) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                d = !0;
                break t;
              default:
                d = !1;
            }
            if (!(c = d)) {
              var e;
              if ((e = 0 === b)) {
                var f = nd(1, String(a.Fa));
                if (!f && self.location)
                  var k = self.location.protocol,
                    f = k.substr(0, k.length - 1);
                e = !ud.test(f ? f.toLowerCase() : "");
              }
              c = e;
            }
            if (c) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
              var l;
              try {
                l = 2 < Dd(a) ? a.a.statusText : "";
              } catch (N) {
                l = "";
              }
              a.ba = l + " [" + Ed(a) + "]";
              Ad(a);
            }
          } finally {
            Bd(a);
          }
        }
    },
    Bd = function (a, b) {
      if (a.a) {
        yd(a);
        var c = a.a,
          d = a.ca[0] ? ba : null;
        a.a = null;
        a.ca = null;
        b || a.dispatchEvent("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    yd = function (a) {
      a.a && a.Ga && (a.a.ontimeout = null);
      ea(a.da) && (h.clearTimeout(a.da), (a.da = null));
    },
    Dd = function (a) {
      return a.a ? a.a.readyState : 0;
    },
    Ed = function (a) {
      try {
        return 2 < Dd(a) ? a.a.status : -1;
      } catch (b) {
        return -1;
      }
    };
  var Fd = function (a, b, c) {
      this.r = a || null;
      this.oc = !!c;
    },
    Hd = function (a) {
      if (!a.c && ((a.c = new x()), (a.h = 0), a.r))
        for (var b = a.r.split("&"), c = 0; c < b.length; c++) {
          var d = b[c].indexOf("="),
            e = null,
            f = null;
          0 <= d
            ? ((e = b[c].substring(0, d)), (f = b[c].substring(d + 1)))
            : (e = b[c]);
          e = decodeURIComponent(e.replace(/\+/g, " "));
          e = Gd(a, e);
          a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
        }
    };
  g = Fd.prototype;
  g.c = null;
  g.h = null;
  g.add = function (a, b) {
    Hd(this);
    this.r = null;
    a = Gd(this, a);
    var c = this.c.get(a);
    c || this.c.set(a, (c = []));
    c.push(b);
    this.h++;
    return this;
  };
  g.remove = function (a) {
    Hd(this);
    a = Gd(this, a);
    return this.c.Q(a)
      ? ((this.r = null), (this.h -= this.c.get(a).length), this.c.remove(a))
      : !1;
  };
  g.Q = function (a) {
    Hd(this);
    a = Gd(this, a);
    return this.c.Q(a);
  };
  g.F = function () {
    Hd(this);
    for (var a = this.c.t(), b = this.c.F(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  g.t = function (a) {
    Hd(this);
    var b = [];
    if (n(a)) this.Q(a) && (b = qa(b, this.c.get(Gd(this, a))));
    else {
      a = this.c.t();
      for (var c = 0; c < a.length; c++) b = qa(b, a[c]);
    }
    return b;
  };
  g.set = function (a, b) {
    Hd(this);
    this.r = null;
    a = Gd(this, a);
    this.Q(a) && (this.h -= this.c.get(a).length);
    this.c.set(a, [b]);
    this.h++;
    return this;
  };
  g.get = function (a, b) {
    var c = a ? this.t(a) : [];
    return 0 < c.length ? String(c[0]) : b;
  };
  g.toString = function () {
    if (this.r) return this.r;
    if (!this.c) return "";
    for (var a = [], b = this.c.F(), c = 0; c < b.length; c++)
      for (
        var d = b[c], e = encodeURIComponent(String(d)), d = this.t(d), f = 0;
        f < d.length;
        f++
      ) {
        var k = e;
        "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
        a.push(k);
      }
    return (this.r = a.join("&"));
  };
  g.clone = function () {
    var a = new Fd();
    a.r = this.r;
    this.c && ((a.c = this.c.clone()), (a.h = this.h));
    return a;
  };
  var Gd = function (a, b) {
    var c = String(b);
    a.oc && (c = c.toLowerCase());
    return c;
  };
  var Id = function (a, b) {
    this.$b = a;
    this.na = b;
  };
  Id.prototype.send = function (a, b) {
    if (gb && !navigator.onLine) return pc();
    var c = new S(),
      d = Jd(a, b);
    d.length > this.na
      ? c.w({
          status: "payload-too-big",
          Ba: Ra(
            "Encoded hit length == %s, but should be <= %s.",
            d.length,
            this.na
          ),
        })
      : xd(
          this.$b,
          function () {
            c.G(hd);
          },
          d
        );
    return c;
  };
  var Jd = function (a, b) {
    var c = new Fd();
    c.add(Da.name, a);
    Ua(b, function (a, b) {
      c.add(a.name, b.toString());
    });
    return c.toString();
  };
  var Kd = function (a, b, c) {
    this.k = a;
    this.Qb = b;
    this.na = c;
  };
  Kd.prototype.Sa = function () {
    if (!this.q) {
      var a = this.k;
      if (!jc(a.ha).C)
        throw Error(
          "Cannot construct shared channel prior to settings being ready."
        );
      new ad();
      var b = new cd(new Id(this.Qb, this.na)),
        c = new jd();
      this.q = new bd(a, new kd(a, new id(c, b)));
    }
    return this.q;
  };
  var Ld = new x(),
    Md = function () {
      if (!Ba) {
        var a = new Tc("google-analytics");
        Ba = new X(a);
      }
      return Ba;
    };
  t("goog.async.Deferred", S);
  t("goog.async.Deferred.prototype.addCallback", S.prototype.J);
  t("goog.events.EventTarget", Q);
  t("goog.events.EventTarget.prototype.listen", Q.prototype.listen);
  t("analytics.getService", function (a) {
    var b = Ld.get(a, null);
    if (null === b) {
      var b = chrome.runtime.getManifest().version,
        c = Md();
      if (!Ca) {
        var d = Md();
        Ca = new Wc(
          d,
          new Kd(d, "https://www.google-analytics.com/collect", 8192)
        );
      }
      b = new Hc("ca1.5.2", a, b, c, Ca);
      Ld.set(a, b);
    }
    return b;
  });
  t("analytics.internal.GoogleAnalyticsService", Hc);
  t(
    "analytics.internal.GoogleAnalyticsService.prototype.getTracker",
    Hc.prototype.Cc
  );
  t(
    "analytics.internal.GoogleAnalyticsService.prototype.getConfig",
    Hc.prototype.Bc
  );
  t("analytics.internal.ServiceSettings", X);
  t(
    "analytics.internal.ServiceSettings.prototype.setTrackingPermitted",
    X.prototype.Lc
  );
  t(
    "analytics.internal.ServiceSettings.prototype.isTrackingPermitted",
    X.prototype.va
  );
  t(
    "analytics.internal.ServiceSettings.prototype.setSampleRate",
    X.prototype.Kc
  );
  t("analytics.internal.ServiceTracker", W);
  t("analytics.internal.ServiceTracker.prototype.send", W.prototype.send);
  t("analytics.internal.ServiceTracker.prototype.sendAppView", W.prototype.Gc);
  t("analytics.internal.ServiceTracker.prototype.sendEvent", W.prototype.Hc);
  t("analytics.internal.ServiceTracker.prototype.sendSocial", W.prototype.Jc);
  t(
    "analytics.internal.ServiceTracker.prototype.sendException",
    W.prototype.Ic
  );
  t("analytics.internal.ServiceTracker.prototype.sendTiming", W.prototype.Cb);
  t("analytics.internal.ServiceTracker.prototype.startTiming", W.prototype.Mc);
  t("analytics.internal.ServiceTracker.Timing", Gc);
  t(
    "analytics.internal.ServiceTracker.Timing.prototype.send",
    Gc.prototype.send
  );
  t(
    "analytics.internal.ServiceTracker.prototype.forceSessionStart",
    W.prototype.Ac
  );
  t("analytics.internal.ServiceTracker.prototype.addFilter", W.prototype.S);
  t("analytics.internal.FilterChannel.Hit", T);
  t(
    "analytics.internal.FilterChannel.Hit.prototype.getHitType",
    T.prototype.Gb
  );
  t(
    "analytics.internal.FilterChannel.Hit.prototype.getParameters",
    T.prototype.T
  );
  t(
    "analytics.internal.FilterChannel.Hit.prototype.cancel",
    T.prototype.cancel
  );
  t("analytics.ParameterMap", C);
  t("analytics.ParameterMap.Entry", C.Entry);
  t("analytics.ParameterMap.prototype.set", C.prototype.set);
  t("analytics.ParameterMap.prototype.get", C.prototype.get);
  t("analytics.ParameterMap.prototype.remove", C.prototype.remove);
  t("analytics.ParameterMap.prototype.toObject", C.prototype.Jb);
  t("analytics.HitTypes.APPVIEW", "appview");
  t("analytics.HitTypes.EVENT", "event");
  t("analytics.HitTypes.SOCIAL", "social");
  t("analytics.HitTypes.TRANSACTION", "transaction");
  t("analytics.HitTypes.ITEM", "item");
  t("analytics.HitTypes.TIMING", "timing");
  t("analytics.HitTypes.EXCEPTION", "exception");
  ua(Ka, function (a) {
    var b = a.id.replace(/[A-Z]/, "_$&").toUpperCase();
    t("analytics.Parameters." + b, a);
  });
  t("analytics.filters.EventLabelerBuilder", A);
  t(
    "analytics.filters.EventLabelerBuilder.prototype.appendToExistingLabel",
    A.prototype.wc
  );
  t(
    "analytics.filters.EventLabelerBuilder.prototype.stripValue",
    A.prototype.Nc
  );
  t(
    "analytics.filters.EventLabelerBuilder.prototype.powersOfTwo",
    A.prototype.Ec
  );
  t(
    "analytics.filters.EventLabelerBuilder.prototype.rangeBounds",
    A.prototype.Fc
  );
  t("analytics.filters.EventLabelerBuilder.prototype.build", A.prototype.Ca);
  t("analytics.filters.FilterBuilder", z);
  t("analytics.filters.FilterBuilder.builder", Pa);
  t("analytics.filters.FilterBuilder.prototype.when", z.prototype.when);
  t("analytics.filters.FilterBuilder.prototype.whenHitType", z.prototype.zb);
  t("analytics.filters.FilterBuilder.prototype.whenValue", z.prototype.Oc);
  t("analytics.filters.FilterBuilder.prototype.applyFilter", z.prototype.xb);
  t("analytics.filters.FilterBuilder.prototype.build", z.prototype.Ca);
  t("analytics.EventBuilder", D);
  t("analytics.EventBuilder.builder", function () {
    return Va;
  });
  t("analytics.EventBuilder.prototype.category", D.prototype.xc);
  t("analytics.EventBuilder.prototype.action", D.prototype.action);
  t("analytics.EventBuilder.prototype.label", D.prototype.label);
  t("analytics.EventBuilder.prototype.value", D.prototype.value);
  t("analytics.EventBuilder.prototype.dimension", D.prototype.yc);
  t("analytics.EventBuilder.prototype.metric", D.prototype.Dc);
  t("analytics.EventBuilder.prototype.send", D.prototype.send);
})();
